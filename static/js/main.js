"use strict";

document.addEventListener("DOMContentLoaded", () => {
    const menuToggle = document.getElementById("menu-toggle");
    const mainNav = document.getElementById("main-nav");
    const currentYear = document.getElementById("current-year");
    const enquiryForm = document.getElementById("enquiry-form");
    const formMessage = document.getElementById("form-message");

    if (currentYear) {
        currentYear.textContent = new Date().getFullYear();
    }

    if (menuToggle && mainNav) {
        menuToggle.addEventListener("click", () => {
            const isOpen = mainNav.classList.toggle("open");
            menuToggle.setAttribute("aria-expanded", String(isOpen));
            menuToggle.textContent = isOpen ? "✕" : "☰";
        });

        mainNav.querySelectorAll("a").forEach((link) => {
            link.addEventListener("click", () => {
                mainNav.classList.remove("open");
                menuToggle.setAttribute("aria-expanded", "false");
                menuToggle.textContent = "☰";
            });
        });
    }

    if (enquiryForm && formMessage) {
        enquiryForm.addEventListener("submit", (event) => {
            event.preventDefault();

            formMessage.textContent =
                "The form is ready for integration. Your enquiry has not been sent or saved yet.";
        });
    }
});
