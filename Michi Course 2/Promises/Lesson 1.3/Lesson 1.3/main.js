// Start your solution here!
function myPromiseAll(promisesArray) {
    return new Promise((resolve, reject) => {
        const results = [];
        let completedCount = 0;

        // If the array is empty, resolve immediately
        if (promisesArray.length === 0) {
            resolve([]);
            return;
        }

        // Your logic here...
    });
}

// ============================================================
// THE FOLLOWING CODE LETS US TEST YOUR CODE ABOVE
//     normally, you do not need to *export* variables in your
//     solution file, but we need to do this so that the tests
//     can access them
// DO NOT MODIFY OR REMOVE:
// ============================================================

// Exports variables that are defined
export default {
  myPromiseAll
};