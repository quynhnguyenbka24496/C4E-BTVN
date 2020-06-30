// Bài 6 : Write a function that removes the dollar sign (“$”) in a string, 
// named remove_dollar_sign, takes 1 arguments: s, where s is the input string, 
// returns the new string with no dollar sign in it
// Bài 7: Now, another programmer named Hiep will use your code in exercise 3. He writes as follows:
// string_with_no_dollars = remove_dollar_sign("$80% percent of $life is to show $up")
// if (string_with_no_dollars == "80% percent of life is to show up"){
//     console.log("Your function is correct")}
// else{
//     console.log("Oops, there's a bug")}

// Copy this code into your editor, run the whole program and see what it prints out:

// 	If it prints out “Your function is correct”, we’re good
// 	If it prints out “Oops, there’s a bug”, you might want to come back and check your function
///--------------------------



function remove_dollar_sign(s) {
    return s.split("$").join("")
}
string_with_no_dollars = remove_dollar_sign("$80% percent of $life is to show $up")
if (string_with_no_dollars == "80% percent of life is to show up"){
    console.log("Your function is correct")}
else{
    console.log("Oops, there's a bug")}