function sameNaive(arr1, arr2) {
	if (arr1.length !== arr2.length) {
		return false
	}
	
	for (let i = 0; i < arr1.length; i++) {
		let correctIndex = arr2.indexOf(arr1[i] ** 2)
		
		if (correctIndex === -1) {
			return false
		}
		
		arr2.splice(correctIndex, 1)
	}
	
	return true
}

function same(arr1, arr2) {
	if (arr1.length !== arr2.length) {
		return false
	}
	
	let counter1 = {}
	let counter2 = {}
	
	for (let val of arr1) {
		counter1[val] = (counter1[val] || 0) + 1
	}
	for (let val of arr2) {
		counter2[val] = (counter2[val] || 0) + 1
	}
	
	for (let key in counter1) {
		if (
			!(key ** 2 in counter2) ||
			counter2[key ** 2] !== counter1[key]
		) {
			return false
		}
	}
	
	return true
}

function validAnagram(first, second) {
	if (first.length !== second.length) {
		return false
	}
	
	const lookup = {}
	
	for (let i = 0; i < first.length; i++) {
		let letter = first[i]
		
		// if letter exists, increment, otherwise set to 1
		lookup[letter] ? lookup[letter] +=1 : lookup[letter] = 1
	}
	
	for (let i = 0; i < second.length; i++) {
		let letter = second[i]
		
		// can't find letter or letter is zero then it's not an anagram
		if (!lookup[letter]) {
			return false
		} else {
			lookup[letter] -= 1
		}
	}
	
	return true
}

// console.log(sameNaive([1, 2, 3, 2], [9, 1, 4, 4]))
// console.log(same([1, 2, 3, 2, 5], [9, 1, 4, 4, 11]))
// console.log(validAnagram('anagram', 'nagaram'))


function sameFrequency(num1, num2) {
	const num1Digits = getDigitsFromNumber(num1)
	const num2Digits = getDigitsFromNumber(num2)
	
	if (num1Digits.length !== num2Digits.length) return false
	
	const lookup = {}
	
	for (let i = 0; i < num1Digits.length; i++) {
		const digit = num1Digits[i]
		
		lookup[digit] ? lookup[digit] += 1 : lookup[digit] = 1
	}
	
	for (let i = 0; i < num2Digits.length; i++) {
		const digit = num2Digits[i]
		
		if (!lookup[digit]) {
			return false
		} else {
			lookup[digit] -= 1
		}
	}
	
	return true
}

function getDigitsFromNumber(num) {
	let digits = []
	
	while (num > 0) {
		digits[digits.length] = num % 10
		
		num = parseInt(num / 10)
	}
	
	return digits;
}

// console.log(sameFrequency(182, 281))
// console.log(sameFrequency(34, 14))
// console.log(sameFrequency(3589578, 5879385))
// console.log(sameFrequency(22, 222))

function areThereDuplicates(...args) {
	const lookup = {}

	for (let i = 0; i < args.length; i++) {
		lookup[args[i]] = (lookup[args[i]] || 0) + 1
	}
	
	for (let key in lookup) {
		if (lookup[key] > 1) return true
	}
	
	return false
}

// console.log(areThereDuplicates(1, 2, 3))
// console.log(areThereDuplicates(1, 2, 2))
// console.log(areThereDuplicates('a', 'b', 'c', 'a'))
