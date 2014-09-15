var phoneNumber = prompt("Please enter your phone number with dashes.  I swear this isn't sketchy.  Just do it.");

alert(phoneNumber.charAt(3) === "-" && phoneNumber.charAt(7) === "-" && phoneNumber.length === 12);

var birthDate = prompt("Please enter your birthdate in the format xx/xx/xx.");

alert(birthDate.charAt(2) === "/" && birthDate.charAt(5) === "/" && birthDate.length === 8);

var postCode = prompt("Please enter your Zip code (or Zip+4):");

alert(postCode.length === 5 || ( postCode.length === 10 && postCode.charAt(5) === "-" ));

var state = prompt("Please enter your state abbreviation in caps (ex: IA, CO)");

alert(state.length === 2 && state === state.toUpperCase());

var married = prompt("Are you married?  Answer yes or no:");

alert(married.toUpperCase() === "YES" || married.toUpperCase() ==="NO");