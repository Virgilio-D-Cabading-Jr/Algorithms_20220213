const quickSort = ( arr ) => {
    // base case
    if (arr.length <= 1) {
        return arr;
    }

    const pivot = arr[Math.floor( arr.length/2 )];
    let frontIdx = 0;
    let backIdx = arr.length-1;

    // Sort array according to pivot
    while ( frontIdx < backIdx ) {
        while (arr[frontIdx] < pivot) {
            frontIdx++;
        }
        while (arr[backIdx] > pivot) {
            backIdx--;
        }
        if (frontIdx < backIdx) {
            const temp = arr[frontIdx];
            arr[frontIdx] = arr[backIdx];
            arr[backIdx] = temp;
        }
    }

    // Recursive case
    const left = quickSort(arr.slice(0,frontIdx));
    const right = quickSort(arr.slice(frontIdx,arr.length));
    return left.concat(right);
}

console.log(quickSort([30, 20, 17, 1, 3, 5, 4, 8, 7]));
const nums1 = [11, 3, 14, 10, 8, 6, 2, 7];
const nums2 = [11, 8, 14, 3, 6, 2, 7];
const nums3 = [1, 17, 12, 3, 9, 13, 21, 4, 27];
const nums4 = [2, 1];
console.log(quickSort(nums1));
console.log(quickSort(nums2));
console.log(quickSort(nums3));
console.log(quickSort(nums4));