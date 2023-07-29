let a = [1,2,3,4,5];

//Array methods

//a.push(6) this will put an element in an array start from last.
//a.pop() this will delete the value from an array from last.
//a.unshift(0) this will add value in an array in start (this is not a good practice because this will shift all valuse ahead just beacuse adding one forfront.)
//a.shift() this will used to delete valuse from forfront.
//console.log(a.includes(6)); this method shows us if the value does exist in an array or not, however, in our case 6 does not exist o/p is False it returns boolean value in result.
//console.log(a.indexOf(2));  this simply shows us index valuse of the array.
/*
let newArr = a.join();

console.log(a);

console.log(newArr);
*/
// here it clearly shows that join() is used to convert array valuse into a string.

//Slice & splice
/*
console.log(`A  ${a}` );

let newArr = a.slice(1, 3);

console.log(newArr);

console.log(`B  ${a}`);

console.log(`A   ${a}`);

let newArr = a.slice(1, 3);

console.log(newArr);

console.log(`B   ${a}`);

let newArrr = a.splice(1,3);

console.log(newArrr);

console.log(`C   ${a}`);


*/

//Here we clearly saw in the above example that slice get the given number portion from and array and print the value.However, it does not effect in the original array. Whereas, Splice get value of given number and it also manupulates the original array as well.


