/**
	Utilities for browser & os detection. 
	
	@author Adrien Dufond - manmaru, Inc.
	@src https://github.com/adrien-dufond/manmaru
	@version 0.2
	@since 04/08/2014
	
	Distributed under the terms of the MIT license.
	http://www.opensource.org/licenses/mit-license.html
*/

BrowserUtil = (function() {

    function BrowserUtil() {}
    
    /**
		Determines if string contains search string.
		@param search: browser or OS to detect:
		
		isWinXP,isWinVista,isWin7,isWin8,
		isLinux,
		isWinPhone8,
		isAndroid,
		isOSX_SnowLeopard,isOSX_MountainLion,
		isAndroidBrowser,isAndroid_Gingerbread,isAndroid_IceCream,isAndroid_JellyBean,
		isIOS,isIOS6,isIOS5,isIOS4,
		isIPhone,isIPad,isIPod,
		isIE,isIE11,isIE10,isIE9,isIE8,isIE7,isIE6,
		isFF,
		isChrome,
		isSafari;
		isOpera;
		
		@return Returns <code>true</code> if search browser or OS searched is detected; otherwise <code>false</code>.
		
		use : BrowserUtil.getBrowser("isXXX");
	*/
		
	BrowserUtil.getBrowser = function(search) {
		
		var ua = navigator.userAgent,
			isIOS6    = false,
			isIOS5    = false,
			isIOS4    = false,
			isIPhone  = false,
			isIPad    = false,
			isIPod    = false,
			isAndroid = false;
		
		if (ua.indexOf("Windows NT 5.1") !== -1 && search === "isWinXP") { return true;
		} else {
			if (ua.indexOf("Windows NT 6.0") !== -1 && search === "isWinVista") { return true; 
			} else {
				if (ua.indexOf("Windows NT 6.1") !== -1 && search === "isWin7") { return true; 
				} else {
					if (ua.indexOf("Windows NT 6.2") !== -1 && search === "isWin8") { return true; 
					} else {
						if (ua.indexOf("Mac OS X 10_7") !== -1 && search === "isOSX_SnowLeopard") { return true;
						} else {
							if (ua.indexOf("Mac OS X 10.8") !== -1 && search === "isOSX_MountainLion") { return true;
							} else {
								if (ua.indexOf("Mac OS X 10_8") !== -1 && search === "isOSX_MountainLion") { return true;
								} else {
									if (ua.indexOf("Linux") !== -1 && search === "isLinux") { return true;
									} else {
										if (ua.indexOf("Windows Phone 8") !== -1 && search === "isWinPhone8") { return true; 
										} else {
											if (ua.indexOf("Android") !== -1 && search === "isAndroid") { isAndroid = true; return true;
											} else {
												if (ua.indexOf("Android 2.3") !== -1 && search === "isAndroid_Gingerbread") { return true;
												} else {
													if (ua.indexOf("Android 4.0") !== -1 && search === "isAndroid_IceCream") { return true; 
													} else {
														if (ua.indexOf("Android 4.1") !== -1 && search === "isAndroid_JellyBean") { return true; 
														} else {
															if (ua.match(/OS 6_[0-9_]+ like Mac OS X/i) && search === "isIOS6") { isIOS6 = true; return true; 
															} else {
																if (ua.match(/OS 5_[0-9_]+ like Mac OS X/i) && search === "isIOS5") { isIOS5 = true; return true; 
																} else {
																	if (ua.match(/OS 4_[0-9_]+ like Mac OS X/i) && search === "isIOS4") { isIOS4 = true; return true; 
																	} else {
																		if(ua.indexOf("Opera") !== -1 && search === "isOpera") { return true; 
																		}
																	}
																}
															}
														}
													}
												}
											}
										}
									}
								}
							}
						}
					}
				}
			}
		} if (ua.indexOf("iPhone") !== -1 && search === "isIPhone") { isIPhone = true; return true; } 
		else {
			if (ua.indexOf("iPad") !== -1 && search === "isIPad") { isIPad = true; return true; } 
			else {
				if (ua.indexOf("iPod") !== -1 && search === "isIPod") { isIPod = true; return true;
				}
			}
		}
		if (ua.indexOf("MSIE") != -1 || ua.indexOf("Trident") != -1 && search === "isIE"){
			return true;
		}
		
		
	if(ua.match(/Trident.*rv[ :]*11\./) && search === "isIE11") { return true; }
	else {	
		if (ua.indexOf("MSIE 10") !== -1 && search === "isIE10") { return true; } 
		else {
			if (ua.indexOf("MSIE 9") !== -1 && search === "isIE9") { return true; } 
			else {
				if (ua.indexOf("MSIE 8") !== -1 && search == "isIE8") { return true; } 
				else {
					if (ua.indexOf("MSIE 7") !== -1 && search === "isIE7") { return true; }
					else {
						if (ua.indexOf("MSIE 6") !== -1 && search === "isIE6") { return true; } 
						else {
							if (ua.indexOf("Firefox") !== -1 && search === "isFF") { return true; } 
							else {
								if (ua.indexOf("Chrome") !== -1 && search === "isChrome") { return true; } 
								else {
									if (ua.indexOf("Mobile Safari") !== -1 && isAndroid && search === "isAndroidBrowser") { return true; } 
									else {
										if (ua.indexOf("Safari") !== -1 && search === "isSafari" ) { return true; }
										}
									}
								}
							}
						}
					}
				}
			}
		}
		
		if(search === "isIOS") {
			if(!isIOS6 && !isIOS5 && !isIOS4 && !isIPhone && !isIPad && !isIPod ) {
	  			return false; 
	  		} else { 
	  			return true; 
	  		}	
		}
		
		return false;
		
	}
	
    return BrowserUtil;

})();
  
