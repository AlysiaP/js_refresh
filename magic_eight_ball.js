/*
Magic Eight Ball Project
*/

let userName = 'Jane';
userName ? console.log(`Hello, ${userName}!`) : console.log('Hello!');

var userQuestion = 'Will you get this job?';

console.log(`${userName}, ${userQuestion}`);

var randomNumber = Math.floor(Math.random()*8);

//variable with empty string for the switch to fill in as needed depending on the randomNumber received
let eightBall = '';

//conditional statement to filter through the different results based on the randomNumber received to the eightBall response that should be printed
switch (randomNumber) {
  case 0 : 
  eightBall = "Unknown...try again";
  break;
    
  case 1 :
  eightBall = 'It is certain';
	break;
    
  case 2 :
	eightBall = 'It is decidedly so';
  break;
    
  case 3 :
  eightBall = 'Reply hazy try again';
	break;
    
  case 4 :
	eightBall = 'Cannot predict now';
	break;
    
  case 5 :
  eightBall = 'Do not count on it';
	break;
    
  case 6 : 
  eightBall = 'My sources say no';
	break;
    
  case 7 : 
  eightBall = 'Outlook not so good';
	break;
    
  case 8 : 
  eightBall = 'Signs point to yes';
	break;
}


//bonus - convert switch to if/else conditional statement
/*
if (randomNumber === 0) {
  eightBall = "Unknown...try again";
} else if (randomNumber === 1) {
  eightBall = 'It is certain';
} else if (randomNumber === 2) {
	eightBall = 'It is decidedly so';
} else if (randomNumber === 3) {
  eightBall = 'Reply hazy try again';
} else if (randomNumber === 4) {
	eightBall = 'Cannot predict now';
} else if (randomNumber === 5) {
  eightBall = 'Do not count on it';
} else if (randomNumber === 6) {
  eightBall = 'My sources say no';
} else if (randomNumber === 7) { 
  eightBall = 'Outlook not so good';
} else if (randomNumber === 8) { 
  eightBall = 'Signs point to yes';
}
*/

console.log(`The eight ball answered: ${eightBall}`);