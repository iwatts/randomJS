function matchingBrackets(bracketString){
	let stack = [];
	
	for (let i = 0; i < bracketString.length; i++) {
		if (bracketString[i] === "{") {
			stack.push(bracketString[i]);
			
		} else if (bracketString[i] === "}"){
			if (stack.length === 0) {
				return false
			} else {
				stack.pop()
			}
		}

	}
	
	return stack.length !== 0 ? false : true;
}

console.log(matchingBrackets("{}"));
console.log(matchingBrackets("}{"));
console.log(matchingBrackets("{{}"));
console.log(matchingBrackets(""));