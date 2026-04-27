import exportData from "./catalogData.js"

document.addEventListener("DOMContentLoaded", function() {
    let container = document.getElementById("catalog");
    let table = document.createElement('table');
    container.appendChild(table);
    table.appendChild(document.createElement('tr'));
    for (let i = 0; i < 8; i++) {
        table.firstElementChild.appendChild(document.createElement('th'));
    }
    table.firstElementChild.childNodes[0].textContent = "Title";
    table.firstElementChild.childNodes[1].textContent = "Description";
    table.firstElementChild.childNodes[2].textContent = "Category";
    table.firstElementChild.childNodes[3].textContent = "Platform";
    table.firstElementChild.childNodes[4].textContent = "Developer";
    table.firstElementChild.childNodes[5].textContent = "Publisher";
    table.firstElementChild.childNodes[6].textContent = "Release Date";
    table.firstElementChild.childNodes[7].textContent = "Tags";
    for (let i = 0; i < exportData.length; i++) {
        let row = document.createElement('tr');
        
        table.appendChild(row);
        for (let j = 0; j < 8; j++) {
            row.appendChild(document.createElement('td'));
        }
        row.childNodes[0].textContent = exportData[i].getName();
        row.childNodes[1].textContent = exportData[i].getDescription();
        let categoryData = exportData[i].getCategory();
        for (let i = 0; i < categoryData.length; i++) {
            let categoryNode = document.createElement('p');
            categoryNode.textContent = categoryData[i];
            row.childNodes[2].appendChild(categoryNode);
        }
        let platformData = exportData[i].getPlatform();
        for (let i = 0; i < categoryData.length; i++) {
            let platformNode = document.createElement('p');
            platformNode.textContent = platformData[i];
            row.childNodes[3].appendChild(platformNode);
        }
        row.childNodes[4].textContent = exportData[i].getDeveloper();
        row.childNodes[5].textContent = exportData[i].getPublisher();
        let releaseDates = exportData[i].getReleaseDate();
        for (let i = 0; i < releaseDates.length; i++) {
            let releaseNode = document.createElement('p');
            releaseNode.textContent = releaseDates[i];
            row.childNodes[6].appendChild(releaseNode);
        }
        let tagData = exportData[i].getTags();
        for (let i = 0; i < tagData.length; i++) {
            row.classList.add(tagData[i]);
            let tagNode = document.createElement('p');
            tagNode.textContent = categoryData[i];
            row.childNodes[7].appendChild(tagNode);
        }
    }
    
})