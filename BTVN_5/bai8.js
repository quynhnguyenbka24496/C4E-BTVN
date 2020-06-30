// Write a function that extracts the even items in a given integer list, named get_even_list, 
// takes 1 parameter: l, where l is the given integer list ([1, 4, 5, -1, 10] for example), 
// returns a new list contains only even numbers ([4, 10]
function get_even_list(l) {
    return l.filter(num => num%2 ==0);
}
get_even_list([1, 4, 5, -1, 10])