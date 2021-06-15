//                              ASSIGNMENT 38 TO 40
//                                 QUESTION 1
// var a = +prompt("Enter Number")
// var b = +prompt("Enter power")
// function power(a,b){
//     num = a ** b
// document.write("Number is "+a+"<br/>power is "+b+"<br/>Answer is "+num)
// }

// power(a,b)

//                                 QUESTION 2
// var d = prompt("Enter Year")
// function leap(d) {
//     if (d === "2012") {
//         alert("This is leap year")
//    }
//     else if (d === "2016") {
//         alert("This is leap year")
//     }
//     else if (d === "2020") {
//         alert("This is leap year")
//     }
//     else {
//         alert("This is not Leap year")

//     }
// }
// leap(d)

//                                            Question 3

// var a = 5; 
// var b = 6; 
// var c = 7; 
// var S;
// function two(a,b,c,S){
//     function one(a,b,c){
//         var S=(a + b + c)/2;
//         return S;
//     }
//     s = one(a,b,c);
//     console.log(S);

//     var area= (S*((S-a)*(S-b)*(S-c)));
//     return area;
// }
// var area= two(a,b,c,S);
// console.log(area);

//                                            Question 4

// function main(){
//     var english=+prompt("Enter English marks");
//     var maths=+prompt("Enter Maths marks");
//     var computer=+prompt("Enter Computer marks");
//     var avg;
//     var per;
//     function average(a,b,c){
//         var aver =a+b+c;
//         return aver;
//     }
//     avg =average(english,maths,computer)
//     console.log(avg);
//     function percentage(a){
//      var  percent=(a/300)*100;
//      return percent;
//     }
//     per= percentage(avg);
//     console.log(per);
// }
// main();

//                                            Question 5

// function FOO(){
//         var char=prompt("Enter a character");
//         var name ="abcdefghijklmnopqrstuvwxyz";
//         console.log(name.length);
//         for(var i=0;i<name.length;i++){
//             var charCheck=name[i];
//             if(char==charCheck){
//                 console.log("Index is "+i);
//                 break; }
//            else{
//             "invalid  input";
//             }
//         }
        
//     }
//     FOO();

//                                            Question 6

// function vowels(str) {             
//     var newString = " ";                            
//     for (let i = 0; i < str.length; i++)  
// {           
//       if (str[i] != "a" && str[i] != "e" && str[i] != "i" && str[i] != "o" && str[i] != "u")                                   
//        {           
//        newString += str[i];         
//       };   
//     };   
//     return newString;   
//   };  
//   console.log(vowels(prompt("Enter a string to remove vowels")));


