let funnyNumber = 12345; // Convert to String
let funnyString = '12345'; // Convert to Number
let funnyTrue = '1'; // Convert to Boolean
let funnyFalse = '0'; // Convert to Boolean
let isTrue = false; // Convert to String
let isFalse = true; // Convert to Number
let funnyText = 'JavaScript is dynamic programming language.'; // Convert to Number
let funnyNull = null; // Convert to String
let funnyUndefined = undefined; // Convert to String
let isTrue2 = true; // Convert to String   !!Nerandu variantu kaip atspauzdint 2 kintamuosius su tuo paciu pavadinimu.
let isFalse2 = false; // Convert to String    !! Cia irgi.
let booleanString = 'true'; // Convert to Number
let otherBooleanString = 'false'; // Convert to Boolean

console.log(typeof funnyNumber.toString());
console.log(typeof parseInt(funnyString));
console.log(typeof( 1 > 0));
console.log(typeof( 0 < 1));
console.log(typeof isTrue.toString());
console.log(typeof parseInt(isFalse));
console.log(typeof parseInt(funnyText));
console.log(typeof String(funnyNull));
console.log(typeof String(funnyUndefined));
console.log(typeof isTrue2.toString());
console.log(typeof isFalse2.toString());
console.log(typeof Number(booleanString));
console.log(typeof( false < 1));
