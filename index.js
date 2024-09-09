//Q1. Count Characters

let inputS="AbbDcAD";
    const newString = inputS.split("");
const count1 = newString.filter( (char) => char === "A").length;
const count2 = newString.filter( (char) => char === "D").length;
 let arr_count= [count1, count2];
 console.log(arr_count);


 //Q2. Count the Heads

let str = "paperspray";
let result = {}
for(let i = 0;i< str.length;i++){
  let ch = str.charAt(i)
  if(!result[ch]){
    result[ch] =1;
  }
  else{
    result[ch]+=1;
  }
}

console.log("The headcount is:",result);

// Q3. Count the Vowels
 let string ="A Computer Science Portal";
  let Vowels = "aAeEiIoOuU";
  let vowelsCount = 0;
  for (let i = 0; i < string.length; i++) {
      if (Vowels.indexOf(string[i]) !== -1) {
          vowelsCount += 1;
      }
  }


console.log("The Number of vowels in -" +
      " A Computer Science Portal:" + vowelsCount);

// Q4. Concatenate the Strings
let first_string= "Awesome ";
let second_string="Programme";

console.log(first_string.concat(second_string));

// Q5. Find Length

function lenth(str) { 
  var z = 0; 
  while (str[z] !== undefined){ 
     z++; 
  } 
  return z; 
}


let l=lenth(string);
console.log(l);


// Q6. Find the Winner

let str4 = "AADDAADDD";
let count_A = 0
let count_D = 0
for (let win in str4) {
    if (str4[win] === "A") {
        count_A++;
    }
    else if (str4[win] === "D") {
        count_D++;
    }
}
if (count_A > count_D) {
    console.log("Aditya is winner!")
}
else if (count_A < count_D) {
    console.log("Danish is winner!")
}
else {
    console.log("Draw!")
}

// Q7. Join Strings

function joinStrings(str1,str2){
  let finalStr= str1.concat(str2);
  return finalStr;
}
let res_str= joinStrings("Hello","Everyone!");
console.log(res_str);


//Q8. Plaindrome Check
function Plain_Check(str){
let org_str= str;
let rev_str="";
for(let i=org_str.length-1; i>=0;i--){
   rev_str= rev_str+ org_str.charAt(i);
}

if(rev_str===org_str){
  console.log("Palindrome: true");
}else{
  console.log("Palindrome: false");
}
}

Plain_Check("naman");

// Q9. Reverse the String

function Reverse_String(str){
  let org_str= str;
  let rev_str="";
  for(let i=org_str.length-1; i>=0;i--){
   rev_str= rev_str+ org_str.charAt(i);
}
return rev_str;
}

let output_str= Reverse_String("Learning JavaScript");
console.log(output_str);


// Q10. Match the Strings
function String_Match(s1,s2){
  if (s1===s2){
    console.log("Yes");
  }else{
    console.log("No");
  }
}
String_Match("Java","Java");

//Q11. String Replace

function Replace(){
  let new_str = "I like coding in Java";
  let pattern ="Java";
  let text="JavaScript";
  
  return(new_str.replace(pattern,text));
}

let S1= Replace();
console.log(S1);

//Q12. Split the String

function Split_the_String(){
  let str = "Just a new begining";
return str.split(" ");

}

let S2= Split_the_String();
console.log(S2);

// Q13. Count the Vowels and Consonants
function Count_VowelsConsonent(){
var str="VowelsAndConsonent";
str = str.toUpperCase(str);

    let V_count = 0;
    let C_count=0;
    for (let i = 0; i < str.length; i++) {
           
        if (str[i]=="A"||str[i]=="I"||str[i]=="O"||str[i]=="U"||str[i]=="E"){
            V_count++;
        }else{
            C_count++;
        }

           
    }

    console.log(`Vowels:${V_count}`);
    console.log(`Consonents:${C_count}`);
  }

  Count_VowelsConsonent();