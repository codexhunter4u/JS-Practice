function isTriplet(arr, n) {

    // Square array elements
    for (i = 0; i < n; i++)
        arr[i] = arr[i] * arr[i];

    // Sort array elements
    arr.sort((a, b) => a - b);

    // Now fix one element one by one and find the other two
    // elements
    for (i = n - 1; i >= 2; i--) {

        // To find the other two elements, start two index
        // variables from two corners of the array and move
        // them toward each other
        var l = 0; // index of the first element in arr[0..i-1]
        var r = i - 1; // index of the last element in arr[0..i-1]
        while (l < r) {

            // A triplet found
            if (arr[l] + arr[r] == arr[i])
                return true;

            // Else either move 'l' or 'r'
            if (arr[l] + arr[r] < arr[i])
                l++;
            else
                r--;
        }
    }

    // If we reach here, then no triplet found
    return false;
}

// Driver program to test above function   
var arr = [3, 1, 4, 6, 5];
var arr_size = arr.length;
if (isTriplet(arr, arr_size) == true)
    console.log("Yes");
else
    console.log("No");