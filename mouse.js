document.addEventListener("DOMContentLoaded", function () {
    const myDiv = document.getElementById("myDiv");
    
    // Event listeners for hovering over the box
    myDiv.addEventListener("mouseenter", function () {
        myDiv.textContent = "CTF Event";
        myDiv.classList.add("event-description");
    });

    myDiv.addEventListener("mouseleave", function () {
        myDiv.textContent = "Hover over me!";
        myDiv.classList.remove("event-description");
    });
});

