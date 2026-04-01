import exportData from "./catalogData.js"

document.addEventListener("DOMContentLoaded", function() {
    let container = document.getElementById("catalog");
    container.innerHTML = exportData[0].getName();
})