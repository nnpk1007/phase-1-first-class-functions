function receivesAFunction(callBackFunction) {
    callBackFunction();
}


function returnsANamedFunction() {
    return function hello() {
        console.log(`Hello, world`);
    };
}


function returnsAnAnonymousFunction() {
    return function() {
        console.log(`Hi there`);
    };
}