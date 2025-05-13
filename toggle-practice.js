document.addEventListener("DOMContentLoaded", () => {
    const toggle = document.getElementById('darkmode-toggle');
    const modeLabel = document.getElementById('mode-label');

    toggle.addEventListener('change', () => {
        modeLabel.textContent = toggle.checked ? "Dark:" : "Light:";
    });
});