import data from "./sample.json";

// import * as fs from 'fs';
// import Handlebars from 'handlebars';

// const templateString = fs.readFileSync('./sample.json','utf-8')
// const template = Handlebars.compile(templateString);
// const body = JSON.parse(template({name: `ajay${Date.now()}`,id: Number(123)}));
// console.log(body);

data.user.name = "ajay";
data.user.id = 123;
console.log(JSON.stringify(data, null, 2));
