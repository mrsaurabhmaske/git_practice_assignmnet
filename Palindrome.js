//Program to check if given string is a Palindrome or Not

let str="malayalam";
let str2="";

for(i=(str.length-1);i>=0;i--){
	str2=str2+str[i];
}
if(str==str2){
	console.log("Given string is a Palindrome");
}else{
	console.log("Given string is NOT a Palindrome");
}
//Done 
