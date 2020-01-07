function findTheOldest(arrayOfPeople) {

    var oldest = [];

    arrayOfPeople.forEach(element => {

        if (oldest.length == 0) {
            oldest.push(element);
        } else {
            if (element.age > oldest[0].age ) {
                oldest[0] = element;
            }
        }        
        
    });

    return oldest[0];
    
}


// people = [
//     {name: 'Jose', age: 50},
//     {name: 'Rafael', age: 30},
//     {name: 'Carlos', age: 155},
// ];
// console.log(findTheOldest(people));