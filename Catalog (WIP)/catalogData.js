class releaseDate {
    constructor(year, month, day, other) {
        this.year = year;
        this.month = month;
        this.day = day;
        this.other = other; //Other refers to a platform or geographical area
    }

    getYear() {
        return this.year;
    }

    getMonth() {
        return this.month;
    }

    getDay() {
        return this.day;
    }

    getOther() {
        return this.other;
    }
}

class Item {
    constructor(name, description, category, platform, developer, publisher, releaseDate, tags) {
        this.name = name; //This should be a String
        this.description = description; //This should be a String
        this.category = category; //This should be an Array; see external taxonomy
        this.platform = platform; //This should be an Array even if it only contains one item.
        this.developer = developer; //This should be a String
        this.publisher = publisher; //This should be a String
        this.releaseDate = releaseDate; //This should be an Array even if it only contains one item.
        this.tags = tags; //This should be an Array; see external taxonomy
    }

    getName() {
        return this.name;
    }

    getDescription() {
        return this.description;
    }

    getCategory() {
        return this.category;
    }

    getDeveloper() {
        return this.developer;
    }

    getPublisher() {
        return this.publisher;
    }

    getPlatform() {
        return this.platform;
    }

    getReleaseDate() {
        let exportVar = [];
        for (let i = 0; i < this.releaseDate.length; i++) {
            if (this.releaseDate[i].getOther() != null) {
               exportVar[i] = this.releaseDate[i].getOther() + ": " + this.releaseDate[i].getYear() + "/" + this.releaseDate[i].getMonth() + "/" + this.releaseDate[i].getDay();
            } else if (this.releaseDate[i].getDay() != null) {
                exportVar[i] = this.releaseDate[i].getYear() + "/" + this.releaseDate[i].getMonth() + "/" + this.releaseDate[i].getDay();
            } else if (this.releaseDate[i].getMonth() != null) {
                exportVar[i] = this.releaseDate[i].getMonth() + "/" + this.releaseDate[i].getYear();
            } else {
                exportVar[i] = this.releaseDate[i].getYear();
            }
        }
        return exportVar;
    }
    getTags() {
        return this.tags;
    }
}

//Array the contains the data need for the catalog
//Preferably order this alphabetically
let catalogData = [
    new Item("test", "12", ["14"], ["78"], "PS", "56", [new releaseDate("2025","13","32","OP"), new releaseDate("2049","17","32","HU")], ["1738","1422"]),
    new Item("Stardew Valley", " You've inherited your grandfather's old farm plot in Stardew Valley. Armed with hand-me-down tools and a few coins, you set out to begin your new life. Can you learn to live off the land and turn these overgrown fields into a thriving home?", ["Farming Sim", "RPG"], ["GoG", "Steam"], "ConcernedApe", "ConcernedApe", [new releaseDate("2016")], ["modding", "simulation"])
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
