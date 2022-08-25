function bubbleSortNaive(arr: number[]) {
	for (let i = 0; i < arr.length; i++) {
		for (let j = 0; j < arr.length; j++) {
			if (arr[j] > arr[j +1]) {
				let temp = arr[j]
				arr[j] = arr[j + 1]
				arr[j + 1] = temp
			}
		}
	}
	
	// console.log(arr)
	
	return arr
}

bubbleSortNaive([37, 45, 29, 8, 9])
