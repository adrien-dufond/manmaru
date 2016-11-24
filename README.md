MANMARU ARRAYUTIL JS
===============

Inspired from CASA Lib / AS 2.0 (v.10/06/08) - Aaron Clinger, David Nelson<br><br>

<b>manmaru.arrayutil.js :</b><br>
Javascript utilities for sorting, searching and manipulating Arrays.<br><br>
<b>function list :</b><br>
<b>equals</b> -><br>
Determines if two Arrays contain the same objects at the same index<br>
@param first: First Array to compare to the {@code second}<br>
@param second: Second Array to compare to the {@code first}<br>
@return Returns {@code true} if Arrays are the same; otherwise {@code false}<br><br>
    
<b>addItemsAt</b> -><br>
Modifies original Array by adding all the elements from another Array at a specified position<br>
@param tarArray: Array to add elements to<br>
@param items: Array of elements to add<br>
@param index: Position where the elements should be added<br>
@return Returns {@code true} if the Array was changed as a result of the call; otherwise {@code false}<br><br>
    
<b>removeDuplicates</b> -><br>
Creates new Array composed of only the non-identical elements of passed Array<br>
@param inArray: Array to remove equivalent items<br>
@return A new Array composed of only unique elements<br><br>
    
<b>removeItem</b> -><br>
Modifies original Array by removing all items that are identical to the specified item<br>
@param tarArray: Array to remove passed {@code item}<br>
@param item: Element to remove<br>
@return The amount of removed elements that matched {@code item}, if none found returns {@code 0}<br><br>
    
<b>removeItems</b> -><br>
Removes only the specified items in an Array<br>
@param tarArray: Array to remove specified items from<br>
@param items: Array of elements to remove<br>
@return Returns {@code true} if the Array was changed as a result of the call; otherwise {@code false}<br><br>
    
<b>retainItems</b> -><br>
Retains only the specified items in an Array<br>
@param tarArray: Array to remove non specified items from<br>
@param items: Array of elements to keep<br>
@return Returns {@code true} if the Array was changed as a result of the call; otherwise {@code false}<br><br>
    
<b>contains</b> -><br>
Finds out how many instances of {@code item} Array contains<br>
@param inArray: Array to search for {@code item} in<br>
@param item: Object to find<br>
@return The amount of {@code item}'s found; if none were found returns {@code 0}<br><br>
    
<b>containsAny</b> -><br>
Determines if Array {@code inArray} contains any element of Array {@code items}<br>
@param inArray: Array to search for {@code items} in<br>
@param items: Array of elements to search for<br>
@return Returns {@code true} if {@code inArray} contains any element of {@code items}; otherwise {@code false}<br><br>
    
<b>getIndexOfDifference</b> -><br>
Compares two Arrays and finds the first index where they differ<br>
@param first: First Array to compare to the {@code second}<br>
@param second: Second Array to compare to the {@code first}<br>
@param fromIndex: The location in the Arrays from which to start searching for a difference<br>
@return The first position/index where the Arrays differ; if Arrays are identical returns {@code -1}<br><br>
    
<b>randomize</b> -><br>
Creates new Array composed of passed Array's items in a random order<br>
@param inArray: Array to create copy of, and randomize<br>
@return A new Array composed of passed Array's items in a random order<br><br>
    
<b>getLowestValue</b> -><br>
Finds the lowest value in {@code inArray}<br>
@param inArray: Array composed only of numbers<br>
@return The lowest value in {@code inArray}<br><br>
    
<b>getHighestValue</b> -> <br>
Finds the highest value in {@code inArray}<br>
@param inArray: Array composed only of numbers<br>
@return The highest value in {@code inArray}<br><br><br>
    
<b>How to use:</b><br>
ArrayUtil.functionName("param");<br>
<br>
<b>Example of use :</b><br>
var testArray = new Array("blue","blue","green","red");<br>
console.log(ArrayUtil.contains(testArray,"blue"));<br>
return -> 2
