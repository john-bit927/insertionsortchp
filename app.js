function inseertionSort(arr) {
    // Loop through the array from the second element (index 1)
    for (let i = 1; i < arr.length; i++) {
        // store the current element to be insterted
        let current = arr[i];

        // set j to the previous element's index (i - 1)
        let j = i - 1;

        // Move elements of the road array that are greater that the current element
        // one position ahead to make space for the current element
        while (j >= 0 && arr[j] > current) {
            arr[j + 1] = arr[j]; // shift the element to the right
            j--; // Move left in the array
        }

        // insert the current element at its correct position
        arr[j + 1] = current;
    }

    return arr; // Return the sorted array
}

// Example usage
let arr = [5, 2, 8, 3, 1, 6, 4];
console.log("Original array:", arr);
let sortedArray = insertionSort(arr);
console.log("Sorted array:", sortedArray);
