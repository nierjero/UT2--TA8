const people = [
    { name: "Carly", yearOfBirth: 1942, yearOfDeath: 1991,},
    { name: "Joey", yearOfBirth: 1945, yearOfDeath: 1994,},
    { name: "Jero", yearOfBirth: 1972, yearOfDeath: 2024,},
    { name: "Koji", yearOfBirth: 1911, yearOfDeath: 1975,},
]


function findTheOldest(people){
    let edadMax = 0;
    let personaMayor = "";
    people.forEach(element => {
        let edad = element.yearOfDeath - element.yearOfBirth;
        if (edad > edadMax) {
            edadMax = edad;
            personaMayor = element.name;
        } 
    });
    console.log(personaMayor);
    console.log(edadMax);
}

findTheOldest(people);