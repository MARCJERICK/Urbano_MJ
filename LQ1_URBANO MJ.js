//Variable name and personas 1 information
let fullname = "Maria Delos Santos Las Marias,"
let age = 25
let address = "Upper Session Road, Baguio City, Benguet"
//Using split & join for type conversion
let split = fullname.split(" ");
let rearrange = [split[3], split[4], split[0], split[1], split[2]].join(" ");
// Output the rearranged name and length of the name, age, address, and address length of persona 1
console.log("Name:", rearrange);
console.log("Name length:",fullname.length);
console.log("Age:", age),
console.log("Address:", address);
console.log("Address length:", address.length);
//line break
console.log("\n \n");
//Variable name and persona 2 information//
let fname = "Juan Gamoso Dela Cruz,"
let Age = 29
let Address = "San Nicolas, Candon City, Ilocos Sur"
//using of split&join type Conversion
let split2 = fname.split(" ");
let rearrange2 = [split2[2], split2[3], split2[0], split2[1],].join(" "); 
// Output the rearranged name and length of the name, age, address, and address length of persona 2
console.log("Name:", rearrange2);
console.log("Name length:",fname.length);
console.log("Age:", Age),
console.log("Address:", Address);
console.log("Address length:", Address.length);
//line break
console.log("\n");
//sum of all numeric value
let sum = age + Age + fullname.length + address.length + fname.length + Address.length;
console.log("Result:", sum)
//the sum of both age
let add = age + Age;
console.log("Result:", add);
//subtracting the sum of both age to name legth of pesona 1
let sub = add - fullname.length;
console.log("Result:", sub);
//mutipliying the result of persona 2 name
let mult = sub * fname.length;
console.log("Final Result:", mult);
//raising the power of persona 1 to persona 2
let power = address.length ** Address.length;
console.log("Result:", power);