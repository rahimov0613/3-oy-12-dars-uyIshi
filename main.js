// // 1-misol

// const drinks = [
//     { name: "lemonade", price: 50 },
//     { name: `lime`, price: 10 }
// ];

// function sortDrinkByPrice(drinks) {
//     return drinks.sort((a, b) => a.price - b.price);
// }

// console.log(sortDrinkByPrice(drinks));

// //////////////////\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\


// //2-misol

// const obj = {
//     objectToArray() {
//         const result = [];
//         for (let key in this) {
//             if (this.hasOwnProperty(key)) {
//                 result.push([key, this[key]]);
//             }
//         }
//         return result;
//     }
// };

// console.log(obj.objectToArray.call({
//     D: 1,
//     B: 2,
//     C: 3
// }));
// //////////////////////////\\\\\\\\\\\\\\\\\\\\\\\\\\

// //3-misol

// function getNames() {
//     let names = []
//     let users = [
//         { name: "John", email: "john@example.com" },
//         { name: "Jason", email: "jason@example.com" },
//         { name: "Jeremy", email: "jeremy@example.com" },
//         { name: "Jacob", email: "jacob@example.com" }
//     ]
//     for (let { name } of users) {
//         names.push(name)
//     }
//     return names;
// }
// console.log(getNames());

// ///////////////////\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\


//4-misol

function afterYears(people, n) {
    if (n <= 0) {
        return `Xatolik: siz nechadur yildan keyin katta bo'lasiz kichik emas`
    }
    for (let person in people) {
        people[person] = people[person] + n
    }
    return people;
}
console.log(afterYears({
    "Joel": 32,
    "Fred": 44,
    "Reginald": 65,
    "Susan": 33,
    "Julian": 13
}, 1));
