// Write a Python function that draws a star, named draw_star, take 1 parameters: length

// star
clear()
function drawStar(length) {
    rt(18)
    for (i = 0; i < 5; i++) {
        fd(length);
        rt(144);
      } 
}
drawStar(100)