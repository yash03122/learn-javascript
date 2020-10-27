
// sum
function sum(x,y){
    
    return x+y
}
//area of triangle
function areaT(x,y){

    return (1/2)*x*y

}
//area of triangle
function areaC(r) {
    return Math.PI * r*r
}
//area of tarpazoid
function areaTA(a,b,h) {
    return  (1/2)*( a+b ) * h	
}
// ts area of of cone
function areaTSA(r,s) {
    return Math.PI* r * ( r + s )
}

var output = areaTSA(10,20);
console.log(output)