
// sum
function sum(x,y){
    
    return x+y
}


//area of triangle
function areaT(x,y){

    return (1/2)*x*y
}
var output = areaT(5,4);
console.log(output,": Area of triangle")


//area of circle
function areaC(r) {
    return Math.PI * r*r
    
}
var output = areaC(5);
console.log(output,": area of circle")


//area of tarpazoid
function areaTA(a,b,h) {
    return  (1/2)*( a+b ) * h	
    
}
var output = areaTA(5,4,4);
console.log(output,": area of tarpazoid")


// area of cone
function areaTSA(r,s) {
    return Math.PI* r * ( r + s )
}
var output = areaTSA(5,4);
console.log(output,":area of cone")

// the volume of spherical cap 
function areaVSC(r,h){
    return Math.PI/6*(3*(r*r)+(h*h))*h
    
}
var output = areaVSC(5,4);
console.log(output,":the volume of spherical cap ")


// total surface area of a pyramid edges 
function areaPR(b,a){
    return Math.sqrt((b*b)-(a*a)/4) 

}
var output = areaPR(5,4);
console.log(output,":total surface area of a pyramid edges ")
// total surface area of rectangular parallelepiped
function areaARP(a,b,c){
    return  2* ( a*b + a*c + b*c )
}

var output = areaARP(5,4,4);
console.log(output,":total surface area of rectangular parallelepiped")