//Program for checking if the number is Prime or Not

let num=13;
let count=0;

for(i=0;i<=num;i++){
	if(num%i==0){
		count++
	}
}
if(count==2){
	console.log("The given number:",num,"is NOT Prime");
}else{
	console.log("The given number:",num,"is Prime");
}


