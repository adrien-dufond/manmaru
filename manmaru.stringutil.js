/**
	Utilities for manipulating and searching Strings. 
	Inspired from CASA Lib / AS 2.0 (v.05/09/07) - Aaron Clinger, Mike Creighton
	
	@author Adrien Dufond - manmaru, Inc.
	@version 0.1
	@since 18/06/2013
*/

StringUtil = (function() {
	
   function StringUtil() {}
   
	/**
		Adds characters at a specific index.
		@param source: String to add characters to.
		@param position: Position in which to add characters.
		@param addition: String to add.
		@return String with characters added.
	*/
	StringUtil.addAt = function(source, position, addition) {
		var parts = source.split('');
		parts.splice(position, 0, addition);
		return parts.join('');
	}
	
	
	/**
		Determines if string contains search string.
		@param source: String to search in.
		@param search: String to search for.
		@return Returns the frequency of the search term found in source string.
	*/
    StringUtil.contains = function(source, search) {
		var i     = source.indexOf(search);
		var total = 0;
		while (i > -1) {
			i = source.indexOf(search, i + 1);
			total++;
		}
		return total;
	}
	
	/**
		Removes all non numeric characters from string.
		@param source: String to return numbers from.
		@return String containing only numbers.
	*/
	StringUtil.getNumbersFromString = function(source) {
		var i = -1;
		while (++i < source.length) {
			if (isNaN(source.charAt(i))) {
				source = StringUtil.removeAt(source, i);
				i--;
			}
		}
		return source;
	}
	
	/**
		Extracts all the unique characters from a source String.
		@param source: String to find unique characters within.
		@return String containing unique characters from source String.
	*/
	StringUtil.getUniqueCharacters = function(source) {
		var unique = '';
		var i      = -1;
		var char;
		while (++i < source.length){
			char = source.charAt(i);
			if (unique.indexOf(char) == -1) { unique += char; }	
		}
		return unique;
	}
	
	/**
		Removes characters from a source string.
		@param source: String to remove characters from.
		@param remove: String describing characters to remove.
		@return String with characters removed.
	*/
	StringUtil.remove = function(source, remove) {
		return StringUtil.replace(source, remove, '');
	}
	
	/**
		Removes a character at a specific index.
		@param source: String to remove character from.
		@param position: Position of character to remove.
		@return String with character removed.
	*/
	StringUtil.removeAt = function(source, position) {
		return StringUtil.replaceAt(source, position, '');
	}
	
	/**
		Removes all numeric characters from string.
		@param source: String to remove numbers from.
		@return String with numbers removed.
	*/
	StringUtil.removeNumbersFromString = function(source) {
		var i = -1;
		while (++i < source.length) {
			if (!isNaN(source.charAt(i))) {
				source = StringUtil.removeAt(source, i);
				i--;
			}
		}
		return source;
	}
	
	/**
		Removes tabs, linefeeds, carriage returns and spaces from string.
		@param source: String to remove whitespace from.
		@return String with whitespace removed.
	*/
	StringUtil.removeWhitespace = function(src) {
    	return src.replace( /\s/g, ""); 
    }
    
    /**
		Replaces target characters with new characters.
		@param source: String to replace characters from.
		@param remove: String describing characters to remove.
		@param replace: String to replace removed characters.
		@return String with characters replaced.
	*/
    StringUtil.replace = function(source, remove, replace) {
		return source.split(remove).join(replace);
	}
	
	/**
		Replaces a character at a specific index with new characters.
		@param source: String to replace characters from.
		@param position: Position of character to replace.
		@param replace: String to replace removed character.
		@return String with character replaced.
	*/
	StringUtil.replaceAt = function(source, position, replace) {
		var parts = source.split('');
		parts.splice(position, 1, replace);
		return parts.join('');
	}
	
	/**
		Transforms source string to per word capitalization.
		@param source: String to return as title cased.
		@return String with capitalized words.
	*/
	StringUtil.toTitleCase = function(source) {
		var w = source.split(' ');
		var i = -1;
		while (++i < w.length)
			w[i] = StringUtil.replaceAt(w[i], 0, w[i].charAt(0).toUpperCase());
		return w.join(' ');
	}
	
    return StringUtil;
    
})();