let faker = require('faker');
let xTend = require('xtend');
let fs = require('fs');

let count = 100;
let data = [];
let types = ['A', 'B', 'C', 'D'];
for (let i = 0; i <= count; i++) {

    let jobType = types[Math.floor(Math.random() * types.length)];
    let order = {
        name: faker.commerce.product(),
        price: faker.commerce.price(),
        number: i,
        qualityType: faker.random.boolean() ? 1 : 0,
        country: faker.address.country(),
        jobType: jobType,
        date: faker.date.future(1)
    };
    let type = i % 3 ? "small" : (i % 2 ? "large" : "huge");
    let properties = {
        color: faker.commerce.color(),
        type: type
    };

    data.push(xTend(order, {properties: properties}));
}
//console.log(JSON.stringify(data, null, 2));


let fileContent = JSON.stringify(data, null, 2);

fs.writeFile("./random.json", fileContent, (err) => {
    if (err) {
        console.error(err);
        return;
    }
    console.log("File has been created");
});
