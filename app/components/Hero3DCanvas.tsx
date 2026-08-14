'use client';

import React, { useEffect, useRef } from 'react';
import * as THREE from 'three';

interface Hero3DCanvasProps {
  isDarkMode: boolean;
}

export default function Hero3DCanvas({ isDarkMode }: Hero3DCanvasProps) {
  const mountRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const currentMount = mountRef.current;
    if (!currentMount) return;

    const width = currentMount.clientWidth || 360;
    const height = currentMount.clientHeight || 360;

    // Scene
    const scene = new THREE.Scene();
    const camera = new THREE.PerspectiveCamera(45, width / height, 0.1, 100);
    camera.position.z = 8;

    const renderer = new THREE.WebGLRenderer({ alpha: true, antialias: true });
    renderer.setSize(width, height);
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
    currentMount.appendChild(renderer.domElement);

    // Main Group
    const group = new THREE.Group();
    scene.add(group);

    // Outer Wireframe Polyhedron (Icosahedron)
    const icoGeometry = new THREE.IcosahedronGeometry(2.4, 1);
    const icoWireframe = new THREE.WireframeGeometry(icoGeometry);
    const wireframeMaterial = new THREE.LineBasicMaterial({
      color: isDarkMode ? 0x8b5cf6 : 0x7c3aed,
      transparent: true,
      opacity: isDarkMode ? 0.6 : 0.45,
      linewidth: 1.5,
    });
    const icoMesh = new THREE.LineSegments(icoWireframe, wireframeMaterial);
    group.add(icoMesh);

    // Inner Glowing Core Sphere
    const innerGeometry = new THREE.SphereGeometry(1.2, 32, 32);
    const innerMaterial = new THREE.MeshStandardMaterial({
      color: isDarkMode ? 0x6366f1 : 0x7c3aed,
      emissive: isDarkMode ? 0x8b5cf6 : 0x6d28d9,
      emissiveIntensity: isDarkMode ? 0.6 : 0.3,
      roughness: 0.2,
      metalness: 0.8,
      wireframe: false,
    });
    const innerSphere = new THREE.Mesh(innerGeometry, innerMaterial);
    group.add(innerSphere);

    // Orbiting Rings
    const ring1Geometry = new THREE.TorusGeometry(3.0, 0.02, 16, 100);
    const ringMaterial = new THREE.MeshBasicMaterial({
      color: isDarkMode ? 0x06b6d4 : 0x7c3aed,
      transparent: true,
      opacity: isDarkMode ? 0.7 : 0.4,
    });
    const ring1 = new THREE.Mesh(ring1Geometry, ringMaterial);
    ring1.rotation.x = Math.PI / 3;
    group.add(ring1);

    const ring2Geometry = new THREE.TorusGeometry(3.2, 0.015, 16, 100);
    const ring2Material = new THREE.MeshBasicMaterial({
      color: isDarkMode ? 0xa855f7 : 0x6366f1,
      transparent: true,
      opacity: isDarkMode ? 0.5 : 0.3,
    });
    const ring2 = new THREE.Mesh(ring2Geometry, ring2Material);
    ring2.rotation.y = Math.PI / 4;
    group.add(ring2);

    // Surrounding floating node particles
    const particleGeometry = new THREE.BufferGeometry();
    const particleCount = 40;
    const particlePositions = new Float32Array(particleCount * 3);
    for (let i = 0; i < particleCount; i++) {
      const theta = Math.random() * Math.PI * 2;
      const phi = Math.acos(Math.random() * 2 - 1);
      const r = 2.6 + Math.random() * 1.5;
      particlePositions[i * 3] = r * Math.sin(phi) * Math.cos(theta);
      particlePositions[i * 3 + 1] = r * Math.sin(phi) * Math.sin(theta);
      particlePositions[i * 3 + 2] = r * Math.cos(phi);
    }
    particleGeometry.setAttribute('position', new THREE.BufferAttribute(particlePositions, 3));
    const particlePointsMaterial = new THREE.PointsMaterial({
      color: isDarkMode ? 0x06b6d4 : 0x8b5cf6,
      size: 0.08,
      transparent: true,
      opacity: 0.8,
    });
    const orbitPoints = new THREE.Points(particleGeometry, particlePointsMaterial);
    group.add(orbitPoints);

    // Lighting
    const ambientLight = new THREE.AmbientLight(0xffffff, 0.8);
    scene.add(ambientLight);

    const pointLight = new THREE.PointLight(isDarkMode ? 0x8b5cf6 : 0x7c3aed, 3, 20);
    pointLight.position.set(5, 5, 5);
    scene.add(pointLight);

    const pointLight2 = new THREE.PointLight(0x06b6d4, 2, 20);
    pointLight2.position.set(-5, -5, 5);
    scene.add(pointLight2);

    // Mouse Tracking
    let mouseX = 0;
    let mouseY = 0;
    let targetX = 0;
    let targetY = 0;

    const handleMouseMove = (event: MouseEvent) => {
      const rect = currentMount.getBoundingClientRect();
      const x = event.clientX - (rect.left + rect.width / 2);
      const y = event.clientY - (rect.top + rect.height / 2);
      mouseX = (x / rect.width) * 2;
      mouseY = -(y / rect.height) * 2;
    };

    window.addEventListener('mousemove', handleMouseMove);

    const handleResize = () => {
      if (!currentMount) return;
      const w = currentMount.clientWidth;
      const h = currentMount.clientHeight;
      camera.aspect = w / h;
      camera.updateProjectionMatrix();
      renderer.setSize(w, h);
    };

    window.addEventListener('resize', handleResize);

    // Render loop
    let animationId: number;
    const clock = new THREE.Clock();

    const animate = () => {
      animationId = requestAnimationFrame(animate);
      const time = clock.getElapsedTime();

      targetX += (mouseX - targetX) * 0.08;
      targetY += (mouseY - targetY) * 0.08;

      group.rotation.y = time * 0.4 + targetX * 1.2;
      group.rotation.x = time * 0.2 - targetY * 1.2;

      ring1.rotation.z = time * 0.5;
      ring2.rotation.x = time * 0.3;
      orbitPoints.rotation.y = -time * 0.2;

      // Pulsing effect
      const scale = 1 + Math.sin(time * 2) * 0.04;
      innerSphere.scale.set(scale, scale, scale);

      renderer.render(scene, camera);
    };

    animate();

    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
      window.removeEventListener('resize', handleResize);
      cancelAnimationFrame(animationId);
      if (currentMount && renderer.domElement) {
        currentMount.removeChild(renderer.domElement);
      }
      icoGeometry.dispose();
      icoWireframe.dispose();
      wireframeMaterial.dispose();
      innerGeometry.dispose();
      innerMaterial.dispose();
      ring1Geometry.dispose();
      ringMaterial.dispose();
      ring2Geometry.dispose();
      ring2Material.dispose();
      particleGeometry.dispose();
      particlePointsMaterial.dispose();
      renderer.dispose();
    };
  }, [isDarkMode]);

  return (
    <div
      ref={mountRef}
      className="w-full h-full min-h-[300px] sm:min-h-[360px] flex items-center justify-center cursor-grab active:cursor-grabbing"
    />
  );
}
