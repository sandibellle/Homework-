const initialValues = [5, "pisica", "avion", undefined, 25, true];
const otherValues = [23, "soarece", 56, ["leu", 6], null, false];
initialValues.push(otherValues);
console.log(initialValues);

let sum = 0;
for (let i = 0; i < initialValues.length; i++) {
if(typeof initialValues[i] === 'number') {sum = initialValues[i]+2};
console.log(sum);}



for (let i = 0; i < initialValues.length; i++) { 
if  (typeof initialValues[i] === 'number') {initialValues[i]=initialValues[i]+2};
console.log(initialValues);}


 
let rezultat = 0;    
for (let i = 0; i<initialValues.length; i++) {
    if (typeof initialValues[i] === 'string') {rezultat = initialValues[i] + 'happy coding'};
    console.log(rezultat);}


for (let i = 0; i< initialValues.length; i++) {
    if (typeof initialValues[i] === 'boolean');
console.log(!initialValues[i]);}

for (let i = 0; i< otherValues.length; i++) {
    if (typeof otherValues[i] === 'boolean');
console.log(!otherValues[i]);}