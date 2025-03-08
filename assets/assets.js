import user_image from './user-image.png';
import code_icon from './code-icon.png';
import code_icon_dark from './code-icon-dark.png';
import edu_icon from './edu-icon.png';
import edu_icon_dark from './edu-icon-dark.png';
import project_icon from './project-icon.png';
import project_icon_dark from './project-icon-dark.png';
import vscode from './vscode.png';
import firebase from './firebase.png';
import figma from './figma.png';
import git from './git.png';
import mongodb from './mongodb.png';
import right_arrow_white from './right-arrow-white.png';
import logo from './logo.png';
import logo_dark from './logo_dark.png';
import mail_icon from './mail_icon.png';
import mail_icon_dark from './mail_icon_dark.png';
import profile_img from './profile-img.png';
import download_icon from './download-icon.png';
import hand_icon from './hand-icon.png';
import header_bg_color from './header-bg-color.png';
import moon_icon from './moon_icon.png';
import sun_icon from './sun_icon.png';
import arrow_icon from './arrow-icon.png';
import arrow_icon_dark from './arrow-icon-dark.png';
import menu_black from './menu-black.png';
import menu_white from './menu-white.png';
import close_black from './close-black.png';
import close_white from './close-white.png';
import web_icon from './web-icon.png';
import mobile_icon from './mobile-icon.png';
import application_icon from './application_icon.png'
import java from './java.png'
import right_arrow from './right-arrow.png';
import SQL from './SQL.png'
import send_icon from './send-icon.png';
import right_arrow_bold from './right-arrow-bold.png';
import right_arrow_bold_dark from './right-arrow-bold-dark.png';

export const assets = {
    user_image,
    code_icon,
    code_icon_dark,
    edu_icon,
    edu_icon_dark,
    project_icon,
    project_icon_dark,
    vscode,
    firebase,
    figma,
    git,
    mongodb,
    right_arrow_white,
    logo,
    logo_dark,
    mail_icon,
    mail_icon_dark,
    profile_img,
    download_icon,
    hand_icon,
    header_bg_color,
    moon_icon,
    sun_icon,
    arrow_icon,
    arrow_icon_dark,
    menu_black,
    menu_white,
    close_black,
    close_white,
    web_icon,
    mobile_icon,
    SQL,
    java,
    application_icon,
    right_arrow,

    send_icon,
    right_arrow_bold,
    right_arrow_bold_dark
};

export const workData = [

    {
        title: 'Contact app',
        description: 'Contact Management Mobile App using Flutter',
        bgImage: '/Contact.jpg',
    },

    {
        title: 'Frontend project',
        description: 'Web Design',
        bgImage: '/frontend.jpg',
    },

    {
        title: 'Job app',
        description: 'Job finder app using React Native',
        bgImage: '/work-3.png',
    },
    {
        title: 'Desktop Application',
        description: 'Desktop Application for Student management using C#.NET',
        bgImage: '/application.jpg',
    },
]

export const serviceData = [

    {
        icon: assets.mobile_icon, title: 'Mobile app',
        description: "Crafting sleek, high-performance mobile apps with Flutter & React Native.",
        link: 'https://github.com/Dinusha-Fernando'
    },

    {
        icon: assets.web_icon, title: 'Web design',
        description: "Designing stunning, responsive websites with modern web technologies.",
        link: 'https://github.com/Dinusha-Fernando'
    },


    {
        icon: assets.application_icon,
        title: 'C# .NET Development',
        description: 'C# .NET development focuses on building scalable web and desktop  using the .NET framework.',
        link: 'https://github.com/Dinusha-Fernando'
    },

    {
        icon: assets.java,
        title: 'Java Development & Swing UI',
        description: 'Java development enables cross-platform applications, with Swing providing a rich GUI framework for desktop applications.',
        link: 'https://github.com/Dinusha-Fernando'
    },
]

export const infoList = [
    { icon: assets.code_icon, iconDark: assets.code_icon_dark, title: 'Languages', description: ' Flutter,Dart,React Native,HTML, CSS, JavaScript, Next Js, etc...' },
    { icon: assets.edu_icon, iconDark: assets.edu_icon_dark, title: 'Education', description: 'Higher National Diploma (HND) in Information Technology' },
    { icon: assets.project_icon, iconDark: assets.project_icon_dark, title: 'Projects', description: 'Built more than 5 projects, including mobile apps and websites' }
];


export const toolsData = [
    assets.vscode, assets.firebase, //assets.mongodb,
    assets.SQL, assets.figma, assets.git
];