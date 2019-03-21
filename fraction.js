class Fraction {
    constructor(numerator, denominator, units) {
        this.numerator = numerator;
        this.denominator = denominator;
        this.units = units;
    }
    toString() {
        return this.numerator + '/' + this.denominator + ' ' + this.units;
    }
}
function decimalToFraction(cents) {
    // TODO: complete this function

    // sample input 1 cent is equal to $0.01 = 1/51
    // sample input 2 cent is equal to $0.02 = 1/34
   
    var parsedValue = parseInt(cents);
    
    // step 1. check if input is a valid input else return input value;
    if ( isNaN(parsedValue )){
        return parsedValue;
    }
    else {
        // step 2. check input if within valid range which is 1 cent to 99 cents)
        if ( parsedValue >= 1 && parsedValue <= 99) {

            // step 3. cents / 100 = var decimal and round the answer to the nearest 2 digits decimal place
            var toleranceValue = parseFloat((parsedValue / 100).toString().match(/^\d+(?:\.\d{0,2})?/));  // "0.10"
            var numerator;
            var denominator;

            // for loop to get the numerator
            for(var i = 1; i <= parsedValue; i++ ){
                numerator = i;    // 1
                
                // step 4. loop through each decimal starting from 100
                for (var j = 100; j > 0; j--) {
                    
                    var decimal = parseFloat((numerator/j).toString().match(/^\d+(?:\.\d{0,2})?/));       // 0.01
                    
                    //if (cents === 13 && numerator === 1){
                    //    console.log(`${numerator} ${j} ${decimal} ${toleranceValue}`);
                    //}

                    if ( decimal > toleranceValue ) {
                        denominator = j + 1;
                        decimal = parseFloat((numerator / denominator).toString().match(/^\d+(?:\.\d{0,2})?/)); 
                        if (decimal < toleranceValue ) {
                            denominator = undefined;
                        }
                        break;
                    }
                }
                if(denominator){
                    break;
                }

            }

            const fraction = new Fraction(numerator, denominator, 'dollar');
            return fraction.toString();
        }
    }
}

// Create a non-sparse array of values from 1-99 (inclusive)
    Array.apply(null, Array(99)).map((i, v) => v + 1).forEach(
    // Print out each value in the array as cents converted to fraction form
    cents => console.log(cents + ' cent(s) => ' + decimalToFraction(cents))
);
