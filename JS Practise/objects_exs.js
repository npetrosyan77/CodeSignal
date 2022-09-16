function propertyList(obj) {

    for (let keys in obj) {
        console.log(keys)
    }
}

let student = {
    sclass: "VI",
    rollno: 12,
    name: "David Rayy",
};

propertyList(student)


function deleteProperty(obj) {
    for (let key in obj) {
        if (key === "rollno") {
            delete obj.rollno;
            // delete obj.key // isn't they the same
            console.log(obj)
        }
    }
    console.log(obj)
}

let student1 = {
    sclass: "VI",
    rollno: 12,
    name: "David Rayy",
};

deleteProperty(student1)