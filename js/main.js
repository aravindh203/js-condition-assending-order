let number1=parseInt(prompt("enter the first number"));
let number2=parseInt(prompt("enter the second number"));
let number3=parseInt(prompt("enter the third number"));

if(number1<number2 && number1<number3){
	if(number2<number3 ){
		console.log(number1,number2,number3);
	}
	else{
		console.log(number1,number3,number2);
	}
} 
else if(number2<number1 && number2<number3){
	if(number1<number3 ){
		console.log(number2,number1,number3);
	}
	else{
		console.log(number2,number3,number1);
	}
}
else{
	if(number1<number2){
		console.log(number3,number1,number2);
	}
	else{
		console.log(number3,number2,number1);
	}
}