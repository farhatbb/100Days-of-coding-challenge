//Question # 52.Make a Smartphone Objects....
var Smartphone = {
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
var developer_skill = {
    languages: ["Javascript", "Typescript", "Pyhon"],
    frameworks: ["React", "Angular", "Vue"],
    tools: ["Git", "Webpack", "Docker"],
};
var languages = developer_skill.languages, frameworks = developer_skill.frameworks, tools = developer_skill.tools;
console.log("Languages: ".concat(languages[1], ", Frameworks: ").concat(frameworks[2], ", Tools: ").concat(tools[0]));
//Question # 54. Making Flexible Object Keys...
function create_object_with_dynamic_key(key, value) {
    var dynamic_object = {};
    dynamic_object[key] = value;
    return dynamic_object;
}
var userPreference = create_object_with_dynamic_key("theme", "dark");
console.log(userPreference);
