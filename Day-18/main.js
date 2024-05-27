"use strict";
//Question # 52.Make a Smartphone Objects....
let Smartphone = {
    make: "Samsung",
    model: "Galaxy S21",
    specs: {
        storage: "128GB",
        screen_size: "6.2 inches",
        battery_life: "18 hours",
    }
};
console.log(Smartphone);
//Question # 53. pulling Apart a Nested object...
let developer_skill = {
    languages: ["Javascript", "Typescript", "Pyhon"],
    frameworks: ["React", "Angular", "Vue"],
    tools: ["Git", "Webpack", "Docker"],
};
let { languages, frameworks, tools } = developer_skill;
console.log(`Languages: ${languages[1]}, Frameworks: ${frameworks[2]}, Tools: ${tools[0]}`);
//Question # 54. Making Flexible Object Keys...
function create_object_with_dynamic_key(key, value) {
    let dynamic_object = {};
    dynamic_object[key] = value;
    return dynamic_object;
}
let userPreference = create_object_with_dynamic_key("theme", "dark");
console.log(userPreference);
