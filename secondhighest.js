function getSecondLargest(nums) {
    nums.sort(function(x, y) {
        return y - x;
    });
    for (var j = 1; j < nums.length; j++) {
        if (nums[j - 1] !== nums[j]) {
            return nums[j];
        }
    }
}
console.log(getSecondLargest([10, 12, 3, 4, 5, 5, 6]));