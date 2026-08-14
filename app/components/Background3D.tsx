'use client';

import React, { useEffect, useRef } from 'react';
import * as THREE from 'three';

interface Background3DProps {
  isDarkMode: boolean;
}

export default function Background3D({ isDarkMode }: Background3DProps) {
  const mountRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const currentMount = mountRef.current;
    if (!currentMount) return;

    // Scene setup
    const scene = new THREE.Scene();
    const camera = new THREE.PerspectiveCamera(60, window.innerWidth / window.innerHeight, 0.1, 1000);
    camera.position.z = 30;

    const renderer = new THREE.WebGLRenderer({ alpha: true, antialias: true });
    renderer.setSize(window.innerWidth, window.innerHeight);
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
    currentMount.appendChild(renderer.domElement);

    // Particle field
    const particleCount = 200;
    const geometry = new THREE.BufferGeometry();
    const positions = new Float32Array(particleCount * 3);
    const colors = new Float32Array(particleCount * 3);

    const baseColor = isDarkMode
      ? new THREE.Color(0x8b5cf6) // Violet in dark mode
      : new THREE.Color(0x7c3aed);

    const secondaryColor = isDarkMode
      ? new THREE.Color(0x06b6d4) // Cyan
      : new THREE.Color(0x6366f1);

    for (let i = 0; i < particleCount; i++) {
      const i3 = i * 3;
      positions[i3] = (Math.random() - 0.5) * 80;
      positions[i3 + 1] = (Math.random() - 0.5) * 80;
      positions[i3 + 2] = (Math.random() - 0.5) * 60;

      const mixedColor = Math.random() > 0.5 ? baseColor : secondaryColor;
      colors[i3] = mixedColor.r;
      colors[i3 + 1] = mixedColor.g;
      colors[i3 + 2] = mixedColor.b;
    }

    geometry.setAttribute('position', new THREE.BufferAttribute(positions, 3));
    geometry.setAttribute('color', new THREE.BufferAttribute(colors, 3));

    const material = new THREE.PointsMaterial({
      size: isDarkMode ? 0.35 : 0.25,
      vertexColors: true,
      transparent: true,
      opacity: isDarkMode ? 0.45 : 0.25,
      blending: isDarkMode ? THREE.AdditiveBlending : THREE.NormalBlending,
    });

    const particles = new THREE.Points(geometry, material);
    scene.add(particles);

    // Subtle ambient floating geometric lines
    const lineGeometry = new THREE.BufferGeometry();
    const linePositions = new Float32Array(30 * 3);
    for (let i = 0; i < 30; i++) {
      linePositions[i * 3] = (Math.random() - 0.5) * 60;
      linePositions[i * 3 + 1] = (Math.random() - 0.5) * 60;
      linePositions[i * 3 + 2] = (Math.random() - 0.5) * 40;
    }
    lineGeometry.setAttribute('position', new THREE.BufferAttribute(linePositions, 3));
    const lineMaterial = new THREE.LineBasicMaterial({
      color: isDarkMode ? 0x8b5cf6 : 0x7c3aed,
      transparent: true,
      opacity: isDarkMode ? 0.12 : 0.06,
    });
    const lines = new THREE.Line(lineGeometry, lineMaterial);
    scene.add(lines);

    // Mouse tracking for subtle parallax
    let mouseX = 0;
    let mouseY = 0;
    let targetX = 0;
    let targetY = 0;

    const handleMouseMove = (event: MouseEvent) => {
      mouseX = (event.clientX / window.innerWidth - 0.5) * 2;
      mouseY = (event.clientY / window.innerHeight - 0.5) * 2;
    };

    window.addEventListener('mousemove', handleMouseMove);

    // Resize handler
    const handleResize = () => {
      camera.aspect = window.innerWidth / window.innerHeight;
      camera.updateProjectionMatrix();
      renderer.setSize(window.innerWidth, window.innerHeight);
    };

    window.addEventListener('resize', handleResize);

    // Animation loop
    let animationFrameId: number;
    let clock = new THREE.Clock();

    const animate = () => {
      animationFrameId = requestAnimationFrame(animate);
      const elapsedTime = clock.getElapsedTime();

      // Smooth interpolation for mouse parallax
      targetX += (mouseX - targetX) * 0.05;
      targetY += (mouseY - targetY) * 0.05;

      particles.rotation.y = elapsedTime * 0.02 + targetX * 0.2;
      particles.rotation.x = elapsedTime * 0.01 + targetY * 0.2;

      lines.rotation.y = elapsedTime * 0.015 - targetX * 0.1;
      lines.rotation.x = -elapsedTime * 0.01 - targetY * 0.1;

      renderer.render(scene, camera);
    };

    animate();

    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
      window.removeEventListener('resize', handleResize);
      cancelAnimationFrame(animationFrameId);
      if (currentMount && renderer.domElement) {
        currentMount.removeChild(renderer.domElement);
      }
      geometry.dispose();
      material.dispose();
      lineGeometry.dispose();
      lineMaterial.dispose();
      renderer.dispose();
    };
  }, [isDarkMode]);

  return (
    <div
      ref={mountRef}
      aria-hidden="true"
      className="fixed inset-0 pointer-events-none z-0 overflow-hidden opacity-80 transition-opacity duration-1000"
    />
  );
}
