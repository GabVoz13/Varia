class releaseDate {
    constructor(year, month, day, other) {
        this.year = year;
        this.month = month;
        this.day = day;
        this.other = other; //Other refers to a platform or geographical area
    }

    getYear() {
        return year;
    }

    getMonth() {
        return month;
    }

    getDay() {
        return day;
    }

    getOther() {
        return other;
    }

    getDate() {
        return fullDate = (year + "/" + month + "/" + day);
    }
}

class Item {
    constructor(name, description, category, platfrom, developer, publisher, releaseDate, tags) {
        this.name = name; //This should be a String
        this.description = description; //This should be a String
        this.category = category;
        this.platform = platfrom; //This should be an Array even if it only contains one item.
        this.developer = developer; //This should be a String
        this.publisher = publisher; //This should be a String
        this.releaseDate = releaseDate; //This should be an Array even if it only contains one item.
        this.tags = tags;
    }

    getName() {
        return this.name;
    }
}

//Array the contains the data need for the catalog
//Preferably order this alphabetically
let catalogData = [
    new Item("test", "12", "14", "90", "PS", "56", "LO", "14")
]

//Not Finished. DOES NOT WORK!
function alphabetize() {
    minIndex = 0;
    for (i = 0; i < catalogData.length(); i++) {
        for (j = 0; j < catalogData.length(); j++)
        if(catalogData[j].name <= catalogData[minIndex].name()) {
            minIndex = j;
        }
        holder = catalogData[i];
        catalogData[i] = catalogData[minIndex];
        catalogData[minIndex] = holder;
    }
}

//Do not manipulate catalogData, use export Data instead
let exportData = catalogData;

//Use check data to modify exportData before it is pushed to catalogBuilder
function checkData() {
    
}


export default exportData;