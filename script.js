// Coding Exercise 1

const car = [
    { brand: 'Audi', model: 'R8 Spyder', year: '2023', color: 'Black Metallic', mileage: 70000, price: 3560000},
    { brand: 'Porsche', model: '911 Carrera', year: '2023', color: 'Black Metallic', mileage: 15000, price: 1850000},
    { brand: 'BMW', model: 'i8 Roadster', year: '2023', color: 'Grey', mileage: 25000, price: 1650000}
];

const prices = car.map((car) => car.price);

// ===== Using for of loop =====

// const getAvg = (array) => {
//     let sum = 0;
//     for (let number of array) {
//         sum += number;
//     }

//     return Math.floor(sum/array.length);
// }; 


// ===== Using .reduce() =====

// const getAvg = (array) => {
//     const sum = array.reduce((total, number) => {
//         total += number;
//         return total;
//     }, 0);

//     return Math.floor(sum/array.length);
// };


// ===== Shorthand of .reduce() method =====

const getAvg = (array) => {
    const sum = array.reduce((a,b) => a + b);

    return Math.floor(sum/array.length);
};

console.log(`The average of all the prices is: ${getAvg(prices)}`);



// Coding Exercise 2

let book = [
    { title: 'To Kill a Mockingbird', Author: 'Harper Lee', pages: 336, year: 1960, Genre: 'Classic Fiction'},
    { title: '1984', Author: 'George Orwell', pages: 328, year: 1949, Genre: 'Dystopian Fiction'},
    { title: 'The Great Gatsby', Author: 'F. Scott Fitzgerald', pages: 180, year: 1925, Genre: 'Jazz Age'}
];

let fictionBooks = book.filter(book => {
    return book.Genre.includes('Fiction');
});

let titles = fictionBooks.map(book => book.title);

console.log(titles);



// Coding Exercise 3

const cart = [
    {name: 'Shirt', cost: 20, quantity: 2},
    {name: 'Pants', cost: 30, quantity: 5},
    {name: 'Socks', cost: 5, quantity: 7},
    {name: 'Hat', cost: 40, quantity: 8},
    {name: 'Shoes', cost: 70, quantity: 10}
];

// Instruction 1

const costs = cart.map((cart) => cart.cost);

const result = costs.reduce((sum, value) => {
    return sum + value;
});

console.log(`Total cost: ${result}`);

// Instruction 2

const filteredCarts = cart.filter(cart => cart.quantity > 5 && cart.cost >= 20);

console.log(filteredCarts);

// Instruction 3

const priceGreaterThanTheCost = cart.filter(cart => cart.cost > cart.quantity);

console.log(priceGreaterThanTheCost);



// Coding Exercise 4

const student = [
    {name: 'Dianna', grade: [92, 93, 95, 98]},
    {name: 'Ka-EL', grade: [99, 97, 98, 98]},
    {name: 'Bruce', grade: [82, 85, 85, 88]},
    {name: 'Barry', grade: [87, 92, 90, 88]},
    {name: 'Arthur', grade: [91, 92, 90, 95]}
];

// function calculateAverageGrades(students) {
//     const result = [];
//     for (let i = 0; i < students.length; i++)
//     { 
//         const student = students[i];
//         const grades = student.grade;

//         const sum = grades.reduce((a, b) => a + b, 0);
    
//         const average = sum / grades.length;

//         const studentObject = {
//             name: student.name,
//             averageGrade: Number(average.toFixed(2))
//         };
        
//         result.push(studentObject);
//     }

//     return result;
// };

const calculateAverageGrades = students => {
    return students.map(student => ({
        name: student.name,
        averageGrade: Number(
            (student.grade.reduce((a, b) => a + b, 0) / student.grade.length).toFixed(2)
        )
    }));
};

const averageGrades = calculateAverageGrades(student);

console.log(averageGrades);
