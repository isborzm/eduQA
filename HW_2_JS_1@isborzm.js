let item_1;
item_1 = 5;
console.log(item_1);
let item_2;
item_2 = 3;
console.log(item_2);
let item_3;
item_3 = item_1 + item_2;
console.log(item_3);
let item_4;
item_4 = "Yolochka";
console.log(item_4);
console.log(item_3 + item_4);
console.log(item_3 * item_4);
let item_5;
item_5 = item_3;
let item_6;
let item_6_type;
item_6 = 15;
item_6_type = Number(item_6_type);
console.log(typeof item_6 + " item_6 == " + item_6 + ", " + "item_6_type == " + item_6_type + " " + typeof item_6_type);
let item_7 = String(item_6);
let item_7_type;
item_7_type = String(item_7_type);
console.log(typeof item_7 + " item_7 == " + item_7 + ", " + "item_7_type == " + item_7_type + " " + typeof item_7_type);
let age_1 = 10;
let age_2 = 18;
let age_3 = 60;

if (age_1 < age_2) {
    console.log("You don’t have access cause your age is " + age_1 + "  It’s less then");
}   
else if (age_1 >= age_2 && age_1 < age_3) {
    console.log("Welcome !");
}   
else if (age_1 > age_3) {
    console.log("Keep calm and look Culture channe");
}
else console.log("Technical work");

//Задания со звездочкой

// *
let age;
const checkAge = function(age) {
    if (age < 18) {
        console.log("You don’t have access cause your age is " + age + "  It’s less then");
    }
    else if (age > 60) {
        console.log("Keep calm and look Culture channe");
    }
    else if (age >= 18 && age < 60) {
        console.log("Welcome !");
    }
    else console.log("Technical work");
}

console.log(checkAge(17));
console.log(checkAge(18));
console.log(checkAge(61));

// **
const checkAge2 = function(age) {

    let chtp = typeof age;
    if (chtp != 'number') {
        console.log("type error");
    }
    else if (age < 18) {
        console.log("You don’t have access cause your age is " + age + "  It’s less then");
    }
    else if (age > 60) {
        console.log("Keep calm and look Culture channe");
    }
    else if (age >= 18 && age < 60) {
        console.log("Welcome !");
    }
    else console.log("Technical work");
}

// ***
const checkAge3 = function(age) {

    let num = Number(age);
    if (num < 18) {
        console.log("You don’t have access cause your age is " + num + "  It’s less then");
    }
    else if (num > 60) {
        console.log("Keep calm and look Culture channe");
    }
    else if (num >= 18 && num < 60) {
        console.log("Welcome !");
    }
    else console.log("Technical work");
}

console.log(checkAge3("123z"));
console.log(checkAge3("17"));
console.log(checkAge3("18"));
console.log(checkAge3("61"));
