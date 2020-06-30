// Now, another programmer named ‘T.Anh’ will use your code in exercise 1. He writes as follows:

// 	for (let i = 0; i  < 30; i ++){
// 		drawSquare(i * 5, 'red')
// 	lt(17)
// penup()
//     	forward(i * 2)
//     	pendown()
// }


// Copy this code into your editor, run the whole program and see what it draws:
// Note: If your code does not run, try not to modify T.Anh’s code, modify your function instead 


for (let i = 0; i  < 30; i ++){
    drawSquare(i * 5, 'red')
  lt(17)
  penup()
    fd(i * 2)
    pendown()
  }