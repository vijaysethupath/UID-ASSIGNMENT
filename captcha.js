document.addEventListener("DOMContentLoaded", function () {
    const captchaText = document.querySelector("#captcha");
    const userText = document.querySelector("#textBox");
    const submitButton = document.querySelector("#submit");
    const refreshButton = document.querySelector("#refresh");
    const output = document.querySelector("#output");

    refreshCaptcha();

    submitButton.addEventListener("click", function () {
        const enteredText = userText.value.trim();
        const captchaValue = captchaText.innerText.trim();

        if (enteredText === captchaValue) {
            output.innerText = "Captcha validated successfully!";
            output.style.color = "green";
        } else {
            output.innerText = "Incorrect Captcha. Please try again.";
            output.style.color = "red";
            refreshCaptcha();
        }
    });

    refreshButton.addEventListener("click", function () {
        userText.value = "";
        refreshCaptcha();
        output.innerText = "";
    });

    function refreshCaptcha() {
        const characters = "ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789";
        let captcha = "";
        for (let i = 0; i < 8; i++) {
            const randomIndex = Math.floor(Math.random() * characters.length);
            captcha += characters.charAt(randomIndex);
        }
        captchaText.innerText = captcha;
    }
});
