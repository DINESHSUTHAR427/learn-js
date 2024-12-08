// strings = squance of characters 
// let name = `my 
// is 
// dinesh
// suthar`
// console.log(name);

// let firstname = new String("love babbar");
// console.log(firstname);

// let op1 = 'english';
// let op2 = 'maths';
// let ans = op1 +op2 ;
// console.log(ans);

// let op1 = 'english';
// let op2 = 'maths';
// let finalans = `${op1} + ${op2}`;
// console.log(finalans);

// let op1 = 'english';
// let op2 = 'HINDI';
// let finalans = `${op1}${op2}`;
// console.log(finalans.toLowerCase());

// let op1 = 'english';
// let op2 = 'HINDI';
// let finalans = `${op1}${op2}`;
// console.log(finalans.substring(2,4));

// let sntence = 'my name is dinesh i am for ahemdabad';
// let words = sntence.split(' ');
// console.log(words);

// let sntence =" my \"name\" is dinesh i am for ahemdabad";
// let words = sntence.split(' ');
// console.log(words);

// let sentence = "hello friends i hope you are very good";
// let index = 5;
// console.log(` index of ${index} return of character `);
// console.log(sentence.charAt(5));

// let one = "dineshe"
// let two = "suthar"
// console.log(one.concat(' ',two));





// const str1 = 'Cats are the best!';

// console.log(str1.endsWith('best!'));
// Expected output: true

// console.log(str1.endsWith('best', 17));
// Expected output: true

// const str2 = 'Is this a question?';

// console.log(str2.endsWith('question'));

// let name = "dineh"
// console.log(name)

// function 

// non prameters

// function printcount (){
//     for(i=0; i <= 100; i++) {
//         console.log(i);
//     }

// }
// printcount();


// parameters function

// function printcount( num) {
//     for (i =0 ; i <= num; i ++) {
//         console.log(i);
//     }

// }
// printcount(128);


// function printAvg(num1, num2 ){
//     let ans = (num1 +num2 )/2   
//     console.log("average : = ", ans);
// }

// printAvg(45,78)

// return function
// function getsum (a,b,c) {
//     let sum = a + b + c; 
//     return sum;
// }

// let ans =  getsum(3,4,5);
// console.log(ans);

// function getmyname( firstname, lastname ) {
//     let fullname = firstname + " " + lastname;
//     return fullname;
// }

// let fullname = getmyname("dinesh" , "suthar");
// console.log(fullname);

// const getMultiplication = function (a,b) {
//     return a*b;
// }

// let ans = getMultiplication(2,20);
// console.log(ans);

// let squareNumber = function(num) {
//     let ans = num**2;
//     return ans;
// }


// let ans = squareNumber(5);
// console.log(ans);

// let getExp = (x,y) => {
//     let ans = x**y;
//     return ans;
// }

// console.log(getExp(2,10));

// learn array 
let obj = {
    name : "dinesh",
    age : 19,
    city : "ahmedabad",
    greet : () => {
        console.log("hello  sir my name is dinesh how are you`")

    }
};

// for(let key in obj){
//     console.log(key + " : " + obj[key]);
// }


// console.log(obj);
// obj.greet();

// creation of array
// let arr = [1,2,3,4,5    ];
// array consture
// let din = new Array('welcome', 34,true);
// din.push('dinesh');
// din.pop();

// din.shift();
// din.unshift("helloWorld");

// din.slice(2,5);
// din.splice(2,2,"helloWorld");
// first = postion
// second = num of item to replace the new itme
// third = name of new item

// console.log(din);


// let num = new Array (36,34689,348,489,33.44,484,15,48,5,5,48,45,48,4)

// let arreven = num.filter((number) => {
    // return number %2 === 0;
//         if(number %2 === 0) {
//             return true;
//         }else{
//             return false;
//         }
//     }
// );
// console.log(arreven);

// map mathod one by one procrss of all elments of array

// let arr = [ 1, 2, 3, 4 , 5, 6, 7, 8, 9];
// console.log(arr.map((number ,index    ) => {
//     return number * number;
// }))


// reduce mathodes
//mane two thing 
// 1 acccumalter jo apke array ke ki first value lega vana app value ste kar sakete ho;
// 2 currunt acc ke bad vali value he 
// let arr = [ 48,58,2,45,855,488,5,57,4,85]
// console .log(arr.reduce((acc,curr) => {
//     return acc + curr;
// }))

// let arr = [47,45,15,2,5,1,4];
// console.log(arr.sort())

// let arr = [47,45,15,2,5,1,4];
// console.log(arr.reverse())

// with heip forEach you are traves ever element of array
// let arr = [47,45,15,2,5,1,4]

// for(let index = 0; index < arr; index++){
//     console.log(arr[i]);
// }

// arr.forEach((value,index) => {
//     console.log("number :",value,"index :",index)
// })