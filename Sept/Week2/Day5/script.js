a = 20;
number = 80;
name = "taj";
isPassed = true;

// digit,letter,$,_

// st1_data
// reserve keyword (the keywords which has some predefined functionality)

// let,var,const

// to check the scope
// block
// {
//     const num = 30;
// }
// console.log(num);

// function scope
function check() {
  let num = 40;
  console.log(num);
}
check();

// var,let,cosnt -> function level scope

// the way of declaration
// only declaration
// only initialization
// both
// re

var number;
console.log(number);

number = 40;
console.log(number);

var number;
console.log(number);
number = 90;

let nnn = 80;
console.log(nnn);

nnn = 88;
console.log(nnn);

const n = 8;
console.log(n);

// data type
// primitive & non

// string,number,boolean,bigInt,symbol,null ,undefined
let fullName = "fkjsdhfkj";
console.log(typeof fullName);
console.log(typeof n);
console.log(typeof isPassed);

let phone = BigInt(49384928349820938209);
console.log(typeof phone);

let symbol = Symbol("@");
console.log(typeof symbol);

let something = undefined;
console.log(typeof something);

// non primitive data
// array ,object

let arr = [1, 2, 3, true, "sdkshd"]; // 0-> 1   1->2   2->3
console.log(arr[2]);
console.log(typeof arr);

let address = {
  post: "fkjsdkjfh",
  pin: 3842948,
};

console.log(address.pin);
console.log(typeof address);

// operator
// arithmatic operator (+,-,*,/,%,** ,++,--)
console.log(2 + 3);
console.log(5 / 2);
console.log(5 % 2);
console.log(2 ** 3);

let c = 4;
// console.log(++c)
// console.log(c--);
// console.log(c)
console.log(--c);

// assignment (+=,-=,*=,/=)
let v = 5; //15
// v=v+10;
// v+=10

// v=v-2
v -= 2;
console.log(v);

// comparision operator (>,>=,<,<=  , == ,=== ,!= , !==)
console.log(2 == "2");
console.log(2 === 3);

console.log(1 !== "1");


// logical operator
// && , || , !
