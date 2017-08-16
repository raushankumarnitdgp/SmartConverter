# SmartConverter  [![Build Status](https://travis-ci.org/raushankumarnitdgp/SmartConverter.svg?branch=master)](https://travis-ci.org/raushankumarnitdgp/SmartConverter)

Converts number to word form eg: count is 23 as: count is twenty three

Javascript program detects number from text and replaces the input text with text containing word form  of numbers.

cases:
  1. for detecting mobile number it should starts with '0' or +'number1'-'number2' like 09835049463 will be detected as a mobile number and it will converted as "zero nine eight three five zero four nine four six three"
  
  2. Rank is 3rd will be converted as Rank is third
  
  3. email address will not be converted:  email number 1 is abc1@gmail.com as : email number one is abc1@gmail.com
  
  4. names/anonymous will be unchanged like: this is cc12cc 10. as this is cc12cc ten.
  
  5. other example: Bus number will changed AC20 as ACtwenty , decimal will be deteced and converted as ex: 1.02 : as : one point zero two  .And fraction as '1/2' converted as 'one by two' 
  
