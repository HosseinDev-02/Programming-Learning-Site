import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from "./App/App";
// import reportWebVitals from './reportWebVitals';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <App />
);

window.addEventListener('load', () => {

    const themeIcon = document.querySelector('#theme-btn > svg > use')
    const mobileThemeIcon = document.querySelector('#mobile-theme-icon')


    if (localStorage.theme === 'dark' || (!('theme' in localStorage) && window.matchMedia('(prefers-color-scheme: dark)').matches)) {
        themeIcon.setAttribute('href', '#sun')
        mobileThemeIcon.classList.add('-translate-x-0.5')
        mobileThemeIcon.classList.remove('-translate-x-[26px]')
        document.documentElement.classList.add('dark')
    } else {
        themeIcon.setAttribute('href', '#moon')
        mobileThemeIcon.classList.remove('-translate-x-0.5')
        mobileThemeIcon.classList.add('-translate-x-[26px]')
        document.documentElement.classList.remove('dark')
    }


})

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals

// reportWebVitals();
