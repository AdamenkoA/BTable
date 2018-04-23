import faker from 'faker';
import xTend from 'xtend';
import fs from 'fs';

let count = 100;
let data = [];

for (let i = 0; i <= count; i++) {
    let order = {
        name: faker.commerce.product(),
        price: faker.commerce.price(),
        number: i,
        qualityType: faker.random.boolean() ? 1 : 0,
        country: faker.address.country()
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
