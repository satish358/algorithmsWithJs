const bubbleSort = (arr) => {
    let temp = [];
    let x;
    arr.forEach((a) => {
        arr.forEach((el, ind) => {
            if (arr[ind + 1] < el) {
                arr[ind] = arr[ind + 1];
                arr[ind + 1] = el;
            }
        });
    });
    return arr;
}

module.exports = bubbleSort;