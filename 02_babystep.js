var sum = 0;
process.argv.forEach(function(number, index, array){
    if (index != 0 && index != 1) {
        sum += Number(number);
    }
});
console.log(sum);
