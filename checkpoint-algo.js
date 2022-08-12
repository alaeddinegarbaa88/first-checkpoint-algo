var text = prompt("put your text");
var count = 0;
var chart = 0;
console.log (text.length)
for (let i = 0 ; i < text.length ; i++) {
    if (text [i] == " ") {
        count++
    }
}
chart = text.length - count;
console.log ("this is the number of the whitespace : " + count);
console.log ("this is the number of the charactere : " + chart);