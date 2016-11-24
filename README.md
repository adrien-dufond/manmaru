MANMARU UTIL JS
===============

Some based on Aaron Clinger CASA Lib ActionScript library<br>
http://casalib.org/<br><br>

<b>manmaru.arrayutil.js :</b> <br>
Javascript utilities for sorting, searching and manipulating Arrays.<br><br>
<b>functions list :</b><br>
<b>equals</b>(first, second) -> Determines if two Arrays contain the same objects at the same index.<br>
<b>addItemsAt</b>(tarArray, items, index) -> Modifies original Array by adding all the elements from another Array at a specified position.<br>
<b>removeDuplicates</b>(inArray) -> Creates new Array composed of only the non-identical elements of passed Array.<br>
<b>removeItem</b>(tarArray, item) -> Modifies original Array by removing all items that are identical to the specified item.<br>
<b>removeItems</b>(tarArray, items) -> Removes only the specified items in an Array.<br>
<b>retainItems</b>(tarArray, items) -> Retains only the specified items in an Array.<br>
<b>contains</b>(inArray, item) -> Finds out how many instances of {@code item} Array contains.<br>
<b>containsAny</b>(inArray, items) -> Determines if Array {@code inArray} contains any element of Array {@code items}.<br>
<b>getIndexOfDifference</b>(first, second, fromIndex)  -> Compares two Arrays and finds the first index where they differ.<br>
<b>randomize</b>(inArray) -> Creates new Array composed of passed Array's items in a random order.<br>
<b>getLowestValue</b>(inArray) -> Finds the lowest value in {@code inArray}.<br>
<b>getHighestValue</b>(inArray) -> Finds the highest value in {@code inArray}.<br><br><br>
<b>How to use:</b><br>
ArrayUtil.functionName("param");<br>
<br>
example :<br>
var testArray = new Array("blue","blue","green","red");<br>
console.log(ArrayUtil.contains(testArray,"blue"));<br>
return -> 2
