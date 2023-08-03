# ISO 6346 Check Digit Calculator
An ISO 6346 check digit calculator created in javascript. This module will work client side or server side and is relatively simple to use.
This calculator was made specifically for shipping containers.

See the check digit calculator in action @ https://www.abcchs.com.au/check-digit-calculator

## Usage:
```js
//Import this object from the module 
import validator from "./ContainerValidator";

//Input as a string - This may  be a full container code or a partial container code
const containerCode = "ABCU2321340"
//Get the output as an object from the calculator
const output = validator.calculateCheckDigitData(containerCode)
```

## Output:
```
{
  valid: [Boolean],
  input: [String - Exactly What is Given to Function],
  ownerCode: [String - Owner Code],
  categoryIdentifier: [String - Category Identifier],
  serialNumber: [String - Serial Number],
  UserCheckDigit: [String - User Input Check Digit],
  OCS: [String - Combination of Owner Code, Category Identifier and Serial Number],
  CheckDigit: [String - Actual Check Digit],
  ReasonFalse: [String - Reason why valid === false],
  output: [String - Container Code, Either Valid or Not Valid (If not valid it will just be the user input)]
}
```

Please don't use this on your public website without permission -> Discord: `coding.`
