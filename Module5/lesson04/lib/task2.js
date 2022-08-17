function getUpdatedArr(a) {
    let bufferArray = [a];

    getUpdatedArr = function () {
        if (arguments[0]) {
            bufferArray.push(arguments[0]);
        }
        else {
            if (bufferArray.length > 1 || a == undefined) {
                bufferArray.splice(0, bufferArray.length);
            }
        }

        return bufferArray;
    }

    return getUpdatedArr();
}

console.log("Starting task2...");
console.log(getUpdatedArr(3));
console.log(getUpdatedArr(5));
console.log(getUpdatedArr({ name: 'Vasya' }));
console.log(getUpdatedArr());
console.log(getUpdatedArr(4));
console.log("task2 - done");
console.log("_____________");
