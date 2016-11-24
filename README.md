MANMARU UTIL JS
===============

Some based on Aaron Clinger CASA Lib ActionScript library<br>
http://casalib.org/<br><br>

<b>manmaru.arrayutil.js :</b> <br>
Utilities for sorting, searching and manipulating Arrays.<br><br>
<b>function list :</b><br>
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
<b>How to use:</b><br>
ArrayUtil.functionName("param");<br>
<br>
example :<br>
var testArray = new Array("blue","blue","green","red");<br>
console.log(ArrayUtil.contains(testArray,"blue"));<br>
return -> 2
