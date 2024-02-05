function moveZeroes(nums) {
  let zeroCount = 0;
  const lastIndex = nums.length - 1;

  for (let i = 0; i < nums.length; i++) {
    if (nums[i] == 0) {
      zeroCount++;
    }

    if (nums[i] != 0) {
      const swapValue = nums[i - zeroCount];
      nums[i - zeroCount] = nums[i];
      nums[i] = swapValue;
    }
  }

  return nums;
}

let nums = [0, 1, 0, 3, 12];

nums = moveZeroes(nums);

console.log(nums);
