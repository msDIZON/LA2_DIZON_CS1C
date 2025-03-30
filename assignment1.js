//C1-A1: Variable/Constants Declaration and String Concatenation Methods

// Student's Information

// My Information 

let name = "Jasmine A. Dizon"; 
let birthdate = "July 28, 2006";
let birthplace = "Burgos, Ilocos Sur, Philippines";
let address = "Luna, Burgos, Ilocos Sur, Philippines 2724";
let course = "Bachelor of Science in Computer Science";
let dreamJob = "Software Engineer";

// Converts my information to Upper Case and Lower Case

let name_uppercase = name.toUpperCase();
let name_lowercase = name.toLowerCase();
let birthplace_uppercase = birthplace.toUpperCase();
let address_uppercase = address.toUpperCase();
let course_lowercase = course.toLowerCase();

// First Classmate Information
let cmate1_name = "Rina Gascon Llanes";
let cmate1_birthdate = "December 14, 2005";
let cmate1_birthplace = "Quezon City, Manila, Philippines ";
let cmate1_address = "Lintic, Banayoyo, Ilocos Sur, Philippines 2708";
let cmate1_course = "Bachelor Of Science In Computer Science";
let cmate1_dreamJob = "Software Engineer";

// Converts the information of the First Classmate  to Upper Case and Lower Case
let cmate1_uppercase = cmate1_name.toUpperCase();
let cmate1_lowercase = cmate1_name.toLowerCase();
let cmate1_birthplace_uppercase = cmate1_birthplace.toUpperCase();
let cmate1_address_uppercase =  cmate1_address.toUpperCase();
let cmate1_course_lowercase = cmate1_course.toLowerCase();

// Second Classmate Information

let cmate2_name = "Bretny Abon Bal-ut";
let cmate2_birthdate = "May 07, 2006";
let cmate2_birthplace = "Sta. Lucia, Ilocos Sur, Philippines";
let cmate2_address = "Nangalisan, Sta Lucia, Ilocos Sur, Philippines 2712";
let cmate2_course = "Bachelor Of Science In Computer Science";
let cmate2_dreamJob = "Software Engineer";



// Converts the information of the Second Classaate to Upper Case and Lower Case

let cmate2_uppercase = cmate2_name.toUpperCase();
let cmate2_lowercase = cmate2_name.toLowerCase();
let cmate2_birthplace_uppercase = cmate2_birthplace.toUpperCase();
let cmate2_address_uppercase =  cmate2_address.toUpperCase();
let cmate2_course_lowercase = cmate2_course.toLowerCase();

//Console all information with form of sentence with the help of string concatenation and formatting methods for each of the declared persona.

console.log ( `${name_uppercase} was born ${birthdate} at ${birthplace_uppercase} and currently living at ${address_uppercase}. ${name_lowercase} is taking up ${course_lowercase} and dreams to be ${dreamJob} after graduation.`);
console.log(`_____________________________`)
console.log ( `${cmate1_uppercase} was born ${cmate1_birthdate} at ${cmate1_birthplace_uppercase} and currently living at ${cmate1_address_uppercase}. ${cmate1_lowercase} is taking up ${cmate1_course_lowercase} and dreams to be ${cmate1_dreamJob} after graduation.`);
console.log(`_____________________________`)
console.log( `${cmate2_uppercase} was born ${cmate2_birthdate} at ${cmate2_birthplace_uppercase} and currently living at ${cmate2_address_uppercase}. ${cmate2_lowercase} is taking up ${cmate2_course_lowercase} and dreams to be ${cmate2_dreamJob} after graduation.`);
