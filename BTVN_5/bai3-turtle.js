// Write a function that draws a square, named draw_square, 
// takes 2 arguments: length and color, where length is the length of its side and color is 
// the color of its bound (line color)


clear()
function drawSquare(length,colour) {
    color(colour);
    for (i = 0; i < 4; i++) {
      fd (length);
      lt(90);
    } 
}