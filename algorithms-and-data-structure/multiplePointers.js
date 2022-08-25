function sumZeroNaive(arr) {
	for (let i = 0; i < arr.length; i++) {
		for (let j = 0; j < arr.length; j++) {
			if (arr[i] + arr[j] === 0) {
				return [arr[i], arr[j]]
			}
		}
	}
}

function sumZero(arr) {
	let left = 0
	let right = arr.length - 1
	
	while(left < right) {
		let sum = arr[left] + arr[right]
		
		if (sum === 0) {
			return [arr[left], arr[right]]
		} else if (sum > 0) {
			right--
		} else {
			left++
		}
	}
}

function countUniqueValues(arr) {
	if (arr.length === 0) {
		return 0
	}
	
	let i = 0
	
	for (let j = 1; j < arr.length; j++) {
		if (arr[i] !== arr[j]) {
			arr[++i] = arr[j]
		}
	}
	
	return i + 1;
}

// console.log(sumZero([-4, -3, -2, -1, 0, 1, 2, 5]))

// console.log(countUniqueValues([1, 1, 1, 1, 1, 2]))
// console.log(countUniqueValues([1, 2, 3, 4, 4, 4, 7, 7, 12, 12, 13]))
// console.log(countUniqueValues([]))
// console.log(countUniqueValues([-2, -1, -1, 0, 1]))

function areThereDuplicates(...args) {
  // Two pointers
  args.sort((a,b) => a > b);
  let start = 0;
  let next = 1;
  while(next < args.length){
    if(args[start] === args[next]){
			return true
    }
    start++
    next++
  }
  return false
}

// console.log(areThereDuplicates(1, 2, 3))
// console.log(areThereDuplicates(1, 2, 2))
// console.log(areThereDuplicates('a', 'b', 'c', 'a'))

function averagePair(arr, avarage) {
	if (arr.length === 0) return false
	
	let left = 0
	let right = arr.length - 1
	
	while (left < right) {
		let currentAvarage = arr[left] + arr[right] / 2

		if (currentAvarage === avarage) {
			return true
		} else if (currentAvarage > avarage) {
			right--
		} else {
			left++
		}
	}
	
	return false
}

// console.log(averagePair([1, 2, 3], 2.5))
// console.log(averagePair([1, 3, 3, 5, 6, 7, 10 ,12, 19], 8))
// console.log(averagePair([-1, 0, 3, 4, 5 ,6], 4.1))
// console.log(averagePair([], 4))

function isSubsequence(str1, str2) {
	if (!str1) return true
	if (str1.length > str2.length) return false
	
	let i = 0
	
	for (let j = 0; j < str2.length; j++) {
		if (str2[j] === str1[i]) i++
		
		if (i === str1.length) return true
	}
	
	return false
}

console.log(isSubsequence('hello', 'hello world'))
console.log(isSubsequence('sing', 'sting'))
console.log(isSubsequence('abc', 'abracadabra'))
console.log(isSubsequence('abc', 'acb'))
