// Let’s take your function to the test. The tester will write his/her test code as follows:
// even_list = get_even_list([1, 2, 5, 9, -10, 6])

// if (JSON.stringify(even_list) == JSON.stringify([2, -10, 6]){
//     print("Your function is correct")};
// else{
//     console.log("Ooops, bugs detected")}

// Copy this code into your editor, run the whole program and see what it prints out:

// If it prints out “Your function is correct”, we’re good
// 	If it prints out “Oops, bugs detected”, you might want to come back and check your function
// Note: set is an unordered data structure, meaning set of (1, 2,3) equals set of (3, 1, 2)
function get_even_list(l) {
    return l.filter(num => num%2 ==0);
}
even_list = get_even_list([1, 2, 5, 9, -10, 6])
if (JSON.stringify(even_list) == JSON.stringify([2, -10, 6])){
    console.log("Your function is correct")}
else {
    console.log("Ooops, bugs detected")}