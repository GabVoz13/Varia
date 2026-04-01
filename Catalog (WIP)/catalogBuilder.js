import exportData from "./catalogData.js"

export default function build() {
    let container = document.getElementById("catalog")
    container.innerHTML = exportData[0].getName;
}