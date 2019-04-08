const LESS_THAN_20 : string[] = ["", "One", "Two", "Three", "Four", "Five", "Six", "Seven", "Eight", "Nine", "Ten", "Eleven", "Twelve", "Thirteen", "Fourteen", "Fifteen", "Sixteen", "Seventeen", "Eighteen", "Nineteen"];
const TENS : string[] = ["", "Ten", "Twenty", "Thirty", "Forty", "Fifty", "Sixty", "Seventy", "Eighty", "Ninety"];
const THOUSANDS:  string[]  = ["", "Thousand", "Million", "Billion"];

// Write a function that will take in a int num and it will return the string of that number. 
// For instance:
// 11 -> Eleven
// 1123 -> One Thousand One Hundred Twenty Three
// 1000234 -> One Million Two Hundred Thirty Four
// 69666420 -> Sixty Nine Million Six Hundred Thousand Four Hundred Twenty
// 76981345891 -> Seventy Six Billion Nine Hundred Eighty One Million Three Hundred Forty Five Thousand Eight Hundred Ninety One
// 0 -> Zero
// Here are some CONSTRAINTS to the problem. The input, num, is 0 <= num < 999 999 999 999. There should be one space between 
// each word and there shouldn't be any trailing or leading spaces. 
// You may use the constants declared above for your problem. 




// TESTS don't touch them
// function test(actual: [number[],number], expected:boolean){
//     if ((actual[0], actual[1]) != expected){
//         console.log('ERROR: hasPairSumToK(',actual[0] ,',', actual[1],') should be', expected)
//     } else {
//         console.log('All tests passed!')
//     }
// }