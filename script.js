function logger(param) {
    console.log(param)
}
 


/* 
function logTheSumOfTwoNumbers (x, y) {

    console.log(x + y)

}




function sumOfTwoNumbers(x, y) {
    let sum = 0;
    sum = x + y;

    return sum;
}

logTheSumOfTwoNumbers(sumOfTwoNumbers(10, 5), 5) */






function calculateNerdSurface (a) {
    let surface = 0;
    surface = a * a *6; 
    console.log("The nerd surface is " + surface + "cm3");
    return surface;

}

function calculateAreaOfTheCircle (r) {
    let area = 0;
    area = Math.PI * r * 2; /* calculate the circle area */
    area = Math.ceil(area) /* round the value up*/
    return `The ${r}cm radius circle area about ${area}cm2`;
}





logger(calculateAreaOfTheCircle(3))