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


-manmaru.browserutil.js :<br>
Utilities for browser & os detection.<br><br>

getBrowser -> return true or false for browser or os detection.<br><br><br>


-manmaru.datautil.js : <br>
Utilities for data manipulating.<br><br>

setCookie -> Set Cookie.<br>
getCookie -> Get Cookie.<br>
deleteCookie -> Delete Cookie<br><br><br>


-manmaru.stringutil.js : <br>
Utilities for manipulating and searching Strings. <br><br>

addAt -> Adds characters at a specific index.<br>
contains -> Determines if string contains search string.<br>
getNumbersFromString -> Removes all non numeric characters from string.<br>
getUniqueCharacters -> Extracts all the unique characters from a source String.<br>
remove -> Removes characters from a source string.<br>
removeAt -> Removes a character at a specific index.<br>
removeNumbersFromString -> Removes all numeric characters from string.<br>
removeWhitespace -> Removes tabs, linefeeds, carriage returns and spaces from string.<br>
replace -> Replaces target characters with new characters.<br>
replaceAt -> Replaces a character at a specific index with new characters.<br>
toTitleCase -> Transforms source string to per word capitalization.<br>
urlValue -> Get value of string with URLFormat.<br>
urlFriendly -> Transform source string in url string format.<br>
pathVars -> Transform source url string in array.<br>
utf8Encode -> UTF8 Encode.<br>
utf8Decode -> UTF8 Decode.<br>
lnToBr -> Transform \n to <br>. <br>
brToLn -> Transform <br> to \n. <br><br><br>


-manmaru.validationutil.js : <br>
Utilities for validating common string formats. (Need manmaru.StringUtil.js)<br><br>

contains -> Determines if string contains search string.<br>
isEmail -> Determines if string is a valid email address.<br>
isEmpty -> Determines if string is blank or contains only tabs, linefeeds, carriage returns and spaces.<br>
isPhone -> Determines if numbers in string are equal to or greater than a valid phone number length.<br>
isZip -> Determines if numbers in string are a valid US zip code length.<br>

