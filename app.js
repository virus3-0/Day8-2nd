const foods = ['pizza', 'burger', 'fingerChips', 'donuts', 'springRoll'];
// 1.Array slice
/*const modifiedFood=foods.slice(1,4);
console.log(modifiedFood);*/

// 2.Array Splice
foods.splice(2,0,"noodles","icecream");
console.log(foods);

// 3.filter method 

const numberArray = [12,324,213,4,2,3,45,4234];
console.log(numberArray.filter(function isEven(num){
   return num%2==0;
}))


console.log(numberArray.filter(function isPrime(num) {
     for (var i = 2; i <= Math.sqrt(num); i++) {
       if (num % i === 0) return false;
     }
     return true;
   }))

//4. Reject
console.log(numberArray.filter(function isPrime(num) {
   for (var i = 2; i <= Math.sqrt(num); i++) {
     if (num % i == 0) return true;
   }
   return false;
 }))

 
//  5.MAP
const myArray = [11, 34, 20, 5, 53, 16];
console.log(myArray.map(function findSquareOfNumbers(number){
   return number*number
}))


// 6.Reduce
const myarray = [2,3,5,10]
console.log(myarray.reduce((a, b)=> a*b, 1))
