# Aurum JS test

Aurum company JS challenges

### Prerequisites

You should have installed the [node.js](https://nodejs.org/en/).


## Challenge #1
Write a function that receives 2 parameters, a String and an Integer. This function must return another String. The purpose of the function is to remove the characters repeated consecutively and which go beyond the limit (integer value) passed as the second parameter, that is, if the limit is 2, the characters can be repeated at most two times. Examples:
```js
removeRepeated("xxxyzzaaayy", 1) // "xyzay"  
removeRepeated("xxxyzzaaayy", 2) // "xxyzzaayy"
```
## Challenge #2
Write a function that receives 2 parameters, a String and an Integer. This function must return another String. The purpose of the function is to replace the character "?" creating a repetition of the character that is before it the number of times of the Integer parameter. If the character "?" be the first of the supplied String it must repeat the last character of the String. Examples:

```js
replaceChar("x?yzza?y?", 1) // "xxyzzaayy"
replaceChar("x?yzza?y?", 2) // "xxxyzzaaayyy"
replaceChar("?x?yzza?y?", 2) // "yyxxxyzzaaayyy"
```

## Challenge #3
Write a function that receives 2 Strings. This function must return a number. The purpose of the function is to sort the 2 strings alphabetically and extract the largest and smallest letters from each one. Turn this letter into a number considering that the Alphabet is a numerical sequence and the letter "a" is equal to 1 the letter "b" is equal to 2 and so on. The function return must be the sum of the multiplication between the highest letter of the first String and the lowest letter of the second String with the multiplication between the highest letter of the second String and the lowest letter of the first String.

> return = (majorCharString1 * minorCharString2) + (majorCharString2 * minorCharString1)

```js
lettersSum("dacb", "gdab") // 11
lettersSum("dcb", "gdab") // 18
```

## Author

* [**Guilherme Almeida**](https://guisalmeida.com/)