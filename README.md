MANMARU UTIL JS
===============

Some based on Aaron Clinger CASA Lib ActionScript library<br>
http://casalib.org/<br><br>

<b>manmaru.arrayutil.js :</b> <br>
Utilities for sorting, searching and manipulating Arrays.<br><br>

equals -> Determines if two Arrays contain the same objects at the same index.<br>
addItemsAt -> Modifies original Array by adding all the elements from another Array at a specified position.<br>
removeDuplicates -> Creates new Array composed of only the non-identical elements of passed Array.<br>
removeItem -> Modifies original Array by removing all items that are identical to the specified item.<br>
removeItems -> Removes only the specified items in an Array.<br>
retainItems -> Retains only the specified items in an Array.<br>
contains -> Finds out how many instances of {@code item} Array contains.<br>
containsAny -> Determines if Array {@code inArray} contains any element of Array {@code items}.<br>
getIndexOfDifference -> Compares two Arrays and finds the first index where they differ.<br>
randomize -> Creates new Array composed of passed Array's items in a random order.<br>
getLowestValue -> Finds the lowest value in {@code inArray}.<br>
getHighestValue -> Finds the highest value in {@code inArray}.<br><br><br>


-manmaru.browserutil.js :
Utilities for browser & os detection.

getBrowser -> return true or false for browser or os detection.


-manmaru.datautil.js : 
Utilities for data manipulating.

setCookie -> Set Cookie.
getCookie -> Get Cookie.
deleteCookie -> Delete Cookie


-manmaru.stringutil.js : 
Utilities for manipulating and searching Strings. 

addAt -> Adds characters at a specific index.
contains -> Determines if string contains search string.
getNumbersFromString -> Removes all non numeric characters from string.
getUniqueCharacters -> Extracts all the unique characters from a source String.
remove -> Removes characters from a source string.
removeAt -> Removes a character at a specific index.
removeNumbersFromString -> Removes all numeric characters from string.
removeWhitespace -> Removes tabs, linefeeds, carriage returns and spaces from string.
replace -> Replaces target characters with new characters.
replaceAt -> Replaces a character at a specific index with new characters.
toTitleCase -> Transforms source string to per word capitalization.
urlValue -> Get value of string with URLFormat.
urlFriendly -> Transform source string in url string format.
pathVars -> Transform source url string in array.
utf8Encode -> UTF8 Encode.
utf8Decode -> UTF8 Decode.
lnToBr -> Transform \n to <br>.
brToLn -> Transform <br> to \n.


-manmaru.validationutil.js : 
Utilities for validating common string formats. (Need manmaru.StringUtil.js)

contains -> Determines if string contains search string.
isEmail -> Determines if string is a valid email address.
isEmpty -> Determines if string is blank or contains only tabs, linefeeds, carriage returns and spaces.
isPhone -> Determines if numbers in string are equal to or greater than a valid phone number length.
isZip -> Determines if numbers in string are a valid US zip code length.

