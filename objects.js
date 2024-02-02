// Access the golden rod color value in output.

const colors = {
  red: "#ff0000",
  green: "#00ff00",
  blue: "#0000ff",
  "golden rod": "#daa520",
};

console.log(colors["golden rod"]);

// // For this object below add a property named passenger capacity with value 5

const car = {
  make: "Toyota",
  model: "Corolla",
  year: 2020,
};
car["passenger capacity"] = 5;
console.log(car);

// // Display the physics marks as output.

const students = {
  name: "Hamim Sakep",
  id: 5421,
  physics: {
    subject: "HSC Physics",
    author: "Shahjahan Tapan",
    marks: 30,
  },
};

console.log(students.physics.marks);

// Task-4
// Count the number of properties.

let student = {
  name: "Ariana Grande",
  age: 21,
  city: "Gaibandha",
  isStudent: true,
};

const counts = Object.keys(student);
console.log(counts.length);

// Task-5 (Hard)
// Loop through an object and print the key-value pairs with their types

let myObject = {
  name: "John Doe",
  age: 25,
  city: "Example City",
  isStudent: true,
};

for(let prop in myObject){
    console.log(`key: ${prop} | type: ${typeof myObject[prop]}`);
}








