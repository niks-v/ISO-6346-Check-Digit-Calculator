const alphabetCodes = {
  'A' : 10, 'B' : 12, 'C' : 13, 'D' : 14, 'E' : 15, 'F' : 16, 'G' : 17, 'H' : 18, 'I' : 19,
  'J' : 20, 'K' : 21, 'L' : 23, 'M' : 24, 'N' : 25, 'O' : 26, 'P' : 27, 'Q' : 28, 'R' : 29,
  'S' : 30, 'T' : 31, 'U' : 32, 'V' : 34, 'W' : 35, 'X' : 36, 'Y' : 37, 'Z' : 38
}

function calculateCheckDigit( input ) {
  var sum = 0;
  var checkDigit = 0;
  input = input.toUpperCase();

  for(var i = 0; i < 10; i++) {
    if(i <= 3) {
      sum += alphabetCodes[input[i]] * Math.pow(2, i);
    }
    else {
      sum += parseInt(input[i]) * Math.pow(2, i);
    }
  }

  console.log(sum)

  checkDigit = sum % 11;
  if(checkDigit === 10) {
    checkDigit = 0;
  }

  return checkDigit;
}

const validator = {
  calculateCheckDigitData: (input) => {
    //get check digit as per iso 6346

    var output = {
      valid: false,
      input: input,
      ownerCode: "",
      categoryIdentifier: "",
      serialNumber: "",
      UserCheckDigit: "",
      OCS: "",
      CheckDigit: "",
      ReasonFalse: "Invalid Container Code",
      output: input.toUpperCase()
    }

    if(input.length == 10 || input.length == 11) {
      output.ownerCode = input.slice(0,3);
      output.categoryIdentifier = input.slice(3,4);
      output.serialNumber = input.slice(4,10);
      if(input.length === 11) output.UserCheckDigit = input.slice(10,11);
  
      output.OCS = output.ownerCode + output.categoryIdentifier + output.serialNumber;

      if(/^[A-Za-z]*$/.test(input.slice(0,4)) && /^[0-9]*$/.test(input.slice(4,10))) {
        output.CheckDigit = calculateCheckDigit(output.OCS);
        output.output = output.OCS.toUpperCase() + output.CheckDigit;

        if(input.length === 11) output.valid = (output.CheckDigit == output.UserCheckDigit);
        else output.valid = true;

        if(!output.valid) {
          output.ReasonFalse = "Invalid Check Digit";
        }
      }
      else {
        output.valid = false;
        output.ReasonFalse = "Invalid Letters Or Numbers";
      }
    }
    console.log(output);
    return output;
  },
  isValid: (input) => {
    if(input[input.length-1] === this.getCheckDigit(input)) {
      return true;
    }
  }
}

module.exports = validator;