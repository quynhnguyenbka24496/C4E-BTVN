// Write a function named is_inside that checks if a point is inside a rectangle, takes 2 parameters, 
// the first is a list with 2 elements respectively represents x and y coordinates of the given point,
//  the second is a list with 4 elements respectively represents x, y coordinates and width height of 
//  the given rectangle

// For example: 
// is_inside([100, 120], [140, 60, 	])
// should return False
//Bài 11:  Write test cases (as we did in exercices 8 and 10) to check if your is_inside function is correct

function is_inside(coordinates, area) {
    if (area[0] <= coordinates[0] && coordinates[0] <= area[0]+area[2] && area[1] <= coordinates[1] && coordinates[1] <= area[1]+area[3]) {
        return true
    }
    else {
        return false
    }
}
//bai11:
if (!is_inside([100, 120], [140, 60, 100, 200] && is_inside([200, 120], [140, 60, 100, 200]))) {
    console.log("Your function is correct")}
    else {
        console.log("Ooops, bugs detected")}