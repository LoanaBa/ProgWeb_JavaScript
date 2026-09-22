// exercice 1
function plusGrand(a, b, c) {
  let max = a;          

  if (b > max) {
    max = b;            
  }
  if (c > max) {
    max = c;            
  }
  return max;
}
console.log(plusGrand(3, 9, 5));   
console.log(plusGrand(12, 4, 8));  

//correction
function getMax(a, b, c){
    if (a>b && a>c) return a;
    if (b>c && b>c) return b;
}
 
const max = getMax(1, 5, 2);
console.log(max);


// Exercice 3
function compareA(a, b) {
  return a == b;   
}

function compareB(a, b) {
  return a === b;   
}
console.log(compareA(4, '4'));      
console.log(compareA(4.0, '4'));     
console.log(compareA(4, 'quatre'));  

console.log(compareB(8, '8'));       
console.log(compareB(8, 'huit'));    