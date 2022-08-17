function counter(a) {
    let buffer = a;

    counter = function () {
        if (arguments[0]) {
            var arg = arguments[0];
        }
        else {
            var arg = 0;
        }
        return buffer = buffer + arg;
    };

    return counter();
}

console.log("Starting task1...");
console.log(counter(3));  //3
console.log(counter(5));  //8
console.log(counter(15)); //23
console.log(counter(0));  //23
console.log("task1 - done");
console.log("_____________");

//function counter(a) {
//    let b = 0;

//    if (b = 0) {
//        b = a
//    }
//    else {
//        b = b + a
//    }

//    console.log(b);
//}

//counter(3);    //3
//counter(5);    //8
//counter(15);   //23
//counter(75);   //98