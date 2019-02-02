function fizzbuzz(number) {
    if(number < 1){
        return "false"
    }else if(number > 100){
        return "false"
    }else if(number % 3 == 0 && number % 5 == 0){
        return "fizzbuzz"
    }else if(number % 3 == 0){
        return "fizz"
    }else if(number % 5 == 0){
        return "buzz"
    }else{
        return number
    }
}

module.exports = fizzbuzz;