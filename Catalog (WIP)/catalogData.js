
const catalogData = [{
    game1: new Item("test"),
}]

exportData = catalogData;

function checkData() {
    
}

export default exportData;


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

class Item {
    Item(name, decription, platfrom, developer, publisher,  releaseDate, tags) {
        this.name = name; //This should be a String
        this.description = description; //This should be a String
        this.category = category;
        this.platform = platfrom; //This should be an Array even if it only contains one item.
        this.developer = developer; //This should be a String
        this.publisher = publisher; //This should be a String
        this.releaseDate = releaseDate; //This should be an Array even if it only contains one item.
        this.tags = tags;
    }
}

class releaseDate {
    releaseDate(year, month, day, other) {
        this.year = year;
        this.month = month;
        this.day = day;
        this.other = other; //Other refers to a platform or geographical area
    }

    releaseDate() {
        year = 0;
        month = 0;
        day = 0;
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


