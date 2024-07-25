// Immediately Invoked Function Expressions (IIFE)

(function chai() {
    // nameed IIFE
    console.log(`DB CONNECTED`);
})();

( (name) => {
    console.log(`BD CONNECTED TWO ${name}`);
} )("hitesh");
