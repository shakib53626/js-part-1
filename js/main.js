var week = prompt("Enter A Value of 1 to 7 for find a day of Weeks:");
		
		if(week == 1){
			document.write("This is Saterday <br>");
		}
		else if(week == 2){
			document.write("This is Sunday <br>");
		}
		else if(week == 3){
			document.write("This is Monday <br>");
		}
		else if(week == 4){
			document.write("This is Tuesday <br>");
		}
		else if(week == 5){
			document.write("This is Wednesday <br>");
		}
		else if(week == 6){
			document.write("This is Thursday <br>");
		}
		else if(week == 7){
			document.write("This is Friday <br>");
		}
		else{
			document.write("This is a invalid number. Please Enter a valid number of (1-7)<br>")
		}



var month = prompt("Enter a month number:");

	if(month == 1){
		document.write("This is January = 31");
	}
	else if(month == 2){
		document.write("This is February = 28/29");
	}
	else if(month == 3){
		document.write("This is March = 31");
	}
	else if(month == 4){
		document.write("This is April = 30");
	}
	else if(month == 5){
		document.write("This is May = 31");
	}
	else if(month == 6){
		document.write("This is June = 30");
	}
	else if(month == 7){
		document.write("This is July = 31");
	}
	else if(month == 8){
		document.write("This is August = 31");
	}
	else if(month == 9){
		document.write("This is September = 30");
	}
	else if(month == 10){
		document.write("This is October = 31");
	}
	else if(month == 11){
		document.write("This is November = 30");
	}
	else if(month == 12){
		document.write("This is December = 31");
	}
	else{
		document.write("Sorry This is wrong number. Plese enter a valid month number.")
	}



var vowel = prompt("Enter A Alphabet for check Vowel or Consonant:");

	if(vowel == "a" || vowel == "e" || vowel ==" i" || vowel == "o" || vowel == "u" || vowel == "A" || vowel == "E" || vowel == "I" || vowel == "O" || vowel == "U"){
		document.write("<br>This is a Vowel <br>");
	}
	else{
		document.write("<br>This is a Consonant<br>")
	}

var num1 = prompt("Enter Your First Number for find bigest number of 2 numbers:");
var num2 = prompt("Enter Your Second Number for find bigest number of 2 numbers:");

if(num1>num2){
	document.write("Bigest number is = " + num1 + "<br>")
}
else if(num1<num2){
	document.write("Bigest number is = " + num2 + "<br>")
}
else{
	document.write(num1+ " = " + num2 + " Equal<br>")
}


var num = prompt("Enter a number for check odd or even");

if(num%2 == 0){
	document.write(num + " is Even number<br>");
}
else{
	document.write(num + " is Odd number<br>");
}

var num = prompt("Enter a number for check Positive, Negitive or Zero:");

if(num>0){
	document.write(num + " is a Positive number<br>")
}
else if(num==0){
	document.write("This is Zero<br>")
}
else{
	document.write(num + " is a Negitive number<br>")
}


var a = prompt("Enter a number for roots:");

var b = Math.sqrt(a);

document.write("Your Rooted Value is = " + b + "<br>");


var num1 = prompt("Enter first number for find max number of three number:");
var num2 =	prompt("Enter second number for find max number of three number:");
var num3 =	prompt("Enter third number for find max number of three number:");

if(num1>num2 && num1>num3){
	document.write(num1 + " is bigest number of three numbers<br>");
}
else if(num2>num1 && num2>num3){
	document.write(num2 + " is bigest number of three numbers<br>");
}
else{
	document.write(num3 + " is bigest number of three numbers<br>");
}