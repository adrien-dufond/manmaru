MANMARU UTIL JS
===============

Some based on Aaron Clinger CASA Lib ActionScript library<br>
http://casalib.org/<br><br>

<b>manmaru.arrayutil.js :</b> <br>
Utilities for sorting, searching and manipulating Arrays.<br><br>
<b>equals</b> -> Determines if two Arrays contain the same objects at the same index.<br>
<b>addItemsAt</b> -> Modifies original Array by adding all the elements from another Array at a specified position.<br>
<b>removeDuplicates</b> -> Creates new Array composed of only the non-identical elements of passed Array.<br>
<b>removeItem</b> -> Modifies original Array by removing all items that are identical to the specified item.<br>
<b>removeItems</b> -> Removes only the specified items in an Array.<br>
<b>retainItems</b> -> Retains only the specified items in an Array.<br>
<b>contains</b> -> Finds out how many instances of {@code item} Array contains.<br>
<b>containsAny</b> -> Determines if Array {@code inArray} contains any element of Array {@code items}.<br>
<b>getIndexOfDifference</b> -> Compares two Arrays and finds the first index where they differ.<br>
<b>randomize</b> -> Creates new Array composed of passed Array's items in a random order.<br>
<b>getLowestValue</b> -> Finds the lowest value in {@code inArray}.<br>
<b>getHighestValue</b> -> Finds the highest value in {@code inArray}.<br><br><br>
<b>manmaru.browserutil.js :</b><br>
Utilities for browser & os detection.<br><br>
<b>getBrowser</b> -> return true or false for browser or os detection.<br><br><br>
<b>manmaru.datautil.js :</b><br>
Utilities for data manipulating.<br><br>
<b>setCookie</b> -> Set Cookie.<br>
<b>getCookie</b> -> Get Cookie.<br>
<b>deleteCookie</b> -> Delete Cookie<br><br><br>
<b>manmaru.stringutil.js :</b> <br>
Utilities for manipulating and searching Strings. <br><br>
<b>addAt</b> -> Adds characters at a specific index.<br>
<b>contains</b> -> Determines if string contains search string.<br>
<b>getNumbersFromString</b> -> Removes all non numeric characters from string.<br>
<b>getUniqueCharacters</b> -> Extracts all the unique characters from a source String.<br>
<b>remove</b> -> Removes characters from a source string.<br>
<b>removeAt</b> -> Removes a character at a specific index.<br>
<b>removeNumbersFromString</b> -> Removes all numeric characters from string.<br>
<b>removeWhitespace</b> -> Removes tabs, linefeeds, carriage returns and spaces from string.<br>
<b>replace</b> -> Replaces target characters with new characters.<br>
<b>replaceAt</b> -> Replaces a character at a specific index with new characters.<br>
<b>toTitleCase</b> -> Transforms source string to per word capitalization.<br>
<b>urlValue</b> -> Get value of string with URLFormat.<br>
<b>urlFriendly</b> -> Transform source string in url string format.<br>
<b>pathVars</b> -> Transform source url string in array.<br>
<b>utf8Encode</b> -> UTF8 Encode.<br>
<b>utf8Decode</b> -> UTF8 Decode.<br>
<b>lnToBr</b> -> Transform \n to br. <br>
<b>brToLn</b> -> Transform br to \n. <br><br><br>
<b>manmaru.validationutil.js :</b><br>
Utilities for validating common string formats. (Need manmaru.StringUtil.js)<br><br>
<b>contains</b> -> Determines if string contains search string.<br>
<b>isEmail</b> -> Determines if string is a valid email address.<br>
<b>isEmpty</b> -> Determines if string is blank or contains only tabs, linefeeds, carriage returns and spaces.<br>
<b>isPhone</b> -> Determines if numbers in string are equal to or greater than a valid phone number length.<br>
<b>isZip</b> -> Determines if numbers in string are a valid US zip code length.<br>

