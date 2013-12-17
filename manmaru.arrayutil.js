/**
	Utilities for sorting, searching and manipulating Arrays.
	Inspired from CASA Lib / AS 2.0 (v.10/06/08) - Aaron Clinger, David Nelson
	
	@author Adrien Dufond - manmaru, Inc.
	@version 0.1
	@since 18/06/2013
	
	Distributed under the terms of the MIT license.
	http://www.opensource.org/licenses/mit-license.html
*/

ArrayUtil = (function() {
	
	function ArrayUtil() {}
   
	/**
		Determines if two Arrays contain the same objects at the same index.
		@param first: First Array to compare to the {@code second}.
		@param second: Second Array to compare to the {@code first}.
		@return Returns {@code true} if Arrays are the same; otherwise {@code false}.
	*/
	ArrayUtil.equals = function(first, second) {
		var i = first.length;
		if (i != second.length) 
			return false;
		
		while (i--)
			if (first[i] != second[i])
				return false;
		
		return true;
	}
	
	/**
		Modifies original Array by adding all the elements from another Array at a specified position.
		@param tarArray: Array to add elements to.
		@param items: Array of elements to add.
		@param index: Position where the elements should be added.
		@return Returns {@code true} if the Array was changed as a result of the call; otherwise {@code false}.
	*/
	ArrayUtil.addItemsAt = function(tarArray, items, index) {
		if (items.length == 0)
			return false;
		
		var args = items.concat();
		args.splice(0, 0, index, 0);
		tarArray.splice.apply(null, args);
		return true;
	}
	
		
	/**
		Creates new Array composed of only the non-identical elements of passed Array.
		@param inArray: Array to remove equivalent items.
		@return A new Array composed of only unique elements.
		
	*/
	ArrayUtil.removeDuplicates = function(inArray) {
		return inArray.filter(ArrayUtil._removeDuplicatesFilter);
	}
	
	ArrayUtil._removeDuplicatesFilter = function(e, i, inArray) {
		return (i == 0) ? true : inArray.lastIndexOf(e, i - 1) == -1;
	}
	
	/**
		Modifies original Array by removing all items that are identical to the specified item.
		@param tarArray: Array to remove passed {@code item}.
		@param item: Element to remove.
		@return The amount of removed elements that matched {@code item}, if none found returns {@code 0}.

	*/
	ArrayUtil.removeItem = function(tarArray, item) {
		var i  = tarArray.indexOf(item);
		var f = 0;
		while (i != -1) {
			tarArray.splice(i, 1);
			i = tarArray.indexOf(item, i);
			f++;
		}
		return f;
	}
	
	/**
		Removes only the specified items in an Array.
		@param tarArray: Array to remove specified items from.
		@param items: Array of elements to remove.
		@return Returns {@code true} if the Array was changed as a result of the call; otherwise {@code false}.
		
	*/
	ArrayUtil.removeItems = function(tarArray, items) {
		var removed = false;
		var l       = tarArray.length;
		while (l--) {
			if (items.indexOf(tarArray[l]) != -1) {
				tarArray.splice(l, 1);
				removed = true;
			}
		}
		return removed;
	}
	
	/**
		Retains only the specified items in an Array.
		@param tarArray: Array to remove non specified items from.
		@param items: Array of elements to keep.
		@return Returns {@code true} if the Array was changed as a result of the call; otherwise {@code false}.
	*/
	ArrayUtil.retainItems = function(tarArray, items) {
		var removed = false;
		var l        = tarArray.length;
		while (l--) {
			if (items.indexOf(tarArray[l]) == -1) {
				tarArray.splice(l, 1);
				removed = true;
			}
		}
		return removed;
	}
	
	/**
		Finds out how many instances of {@code item} Array contains.
		@param inArray: Array to search for {@code item} in.
		@param item: Object to find.
		@return The amount of {@code item}'s found; if none were found returns {@code 0}.
	*/
	ArrayUtil.contains = function(inArray, item) {
		var i  = inArray.indexOf(item, 0);
		var t = 0;
		while (i != -1) {
			i = inArray.indexOf(item, i + 1);
			t++;
		}
		return t;
	}
	
	/**
		Determines if Array {@code inArray} contains any element of Array {@code items}.
		@param inArray: Array to search for {@code items} in.
		@param items: Array of elements to search for.
		@return Returns {@code true} if {@code inArray} contains any element of {@code items}; otherwise {@code false}.
		
	*/
	ArrayUtil.containsAny = function(inArray, items) {
		var l = items.length;
		while (l--)
			if (inArray.indexOf(items[l]) != -1)
				return true;
		
		return false;
	}
	
	/**
		Compares two Arrays and finds the first index where they differ.
		@param first: First Array to compare to the {@code second}.
		@param second: Second Array to compare to the {@code first}.
		@param fromIndex: The location in the Arrays from which to start searching for a difference.
		@return The first position/index where the Arrays differ; if Arrays are identical returns {@code -1}.
		
	*/
	ArrayUtil.getIndexOfDifference = function(first, second, fromIndex) {
		var i = fromIndex - 1;
		while (++i < first.length)
			if (first[i] != second[i])
				return i;
		
		return -1;
	}
		
	/**
		Creates new Array composed of passed Array's items in a random order.
		@param inArray: Array to create copy of, and randomize.
		@return A new Array composed of passed Array's items in a random order.
		
	*/	
	ArrayUtil.randomize = function(inArray) {
		for (var i = inArray.length - 1; i > 0; i--) {
	        var j = Math.floor(Math.random() * (i + 1));
	        var temp = inArray[i];
	        inArray[i] = inArray[j];
	        inArray[j] = temp;
	    }
	    return inArray;
	}
		
	/**
		Finds the lowest value in {@code inArray}.
		@param inArray: Array composed only of numbers.
		@return The lowest value in {@code inArray}.
	*/
	ArrayUtil.getLowestValue = function(inArray) {
		 return Math.min.apply(Math, inArray);
	}
		
	/**
		Finds the highest value in {@code inArray}.
		@param inArray: Array composed only of numbers.
		@return The highest value in {@code inArray}.
	*/
	ArrayUtil.getHighestValue = function(inArray) {
		return Math.max.apply(Math, inArray);
	}
		
    return ArrayUtil;
    
})();
