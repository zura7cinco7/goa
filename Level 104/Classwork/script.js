function queueTime(customers, n) {
    let tills = [];
  
    for (let i = 0; i < n; i++) {
        tills[i] = 0;
    }

    for (let i = 0; i < customers.length; i++) {
        let minIndex = 0;
        for (let j = 1; j < n; j++) {
            if (tills[j] < tills[minIndex]) {
                minIndex = j;
            }
        }
        tills[minIndex] += customers[i];
    }

    let maxTime = 0;
    for (let i = 0; i < n; i++) {
        if (tills[i] > maxTime) {
            maxTime = tills[i];
        }
    }

    return maxTime;
}


const isValid = function(s) {
    while(s.includes("()") || s.includes("{}") || s.includes("[]")){
        s = s.replace("()", "").replace("{}", "").replace("[]", "");
    }
    return s.length === 0;
};


var lengthOfLastWord = function(s) {
    s = s.trim();
    const arr = s.split(" ");
    return arr[arr.length - 1].length;
};


const removeDuplicates = function(nums) {
    if (nums.length === 0){
        return 0;
    };

    let index = 0;

    for (let i = 1; i < nums.length; i++) {
        if (nums[i] !== nums[index]) {
            index++;
            nums[index] = nums[i];
        }
    }

    return index + 1;
};
const nums = [0,0,1,1,1,2,2,3,3,4];
const uniqueCount = removeDuplicates(nums);