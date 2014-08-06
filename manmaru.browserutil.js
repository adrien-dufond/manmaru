/**
	Utilities for browser & os detection. 
	
	@author Adrien Dufond - manmaru, Inc.
	@src https://github.com/adrien-dufond/manmaru
	@version 0.4
	@since 04/08/2014
	
	Distributed under the terms of the MIT license.
	http://www.opensource.org/licenses/mit-license.html
*/

BrowserUtil = (function() {

    function BrowserUtil() {}
    
	/**
		check if user is on mobile
		@return Returns <code>true</code> if mobile; otherwise <code>false</code>.
	*/
	
	BrowserUtil.checkMobile = function() {
		var ismobile = (/iphone|ipod|kindle|android|blackberry|opera mini|opera mobi|skyfire|maemo|windows phone|palm|iemobile|symbian|symbianos|fennec/i.test(navigator.userAgent.toLowerCase()));
		if (ismobile === true) {
			return true;
		} else {
			return false;
		}
	}	
	
	/**
		check if user is on tablet
		@return Returns <code>true</code> if tablet; otherwise <code>false</code>.
	*/
	
	BrowserUtil.checkTablet = function() {
		var istablet = (/ipad|sch-i800|playbook|xoom|tablet|gt-p1000|gt-p7510|sgh-t849|nexus 7|shw-m180s|a100|dell streak|silk/i.test(navigator.userAgent.toLowerCase())),
		isAndroid = (/android/i.test(navigator.userAgent.toLowerCase()));
		if (isAndroid === true || istablet === true) {
			var heightIs = screen.height,
			widthIs = screen.width;
			if (heightIs > widthIs){
			    widthIs = screen.height;
			    heightIs = screen.width;
			}
			
			if (heightIs >= 736 && widthIs >= 1024) {
				istablet = true;
    			} else	{
				istablet = false;
			}
		}
		
		if (istablet === true) {
			return true;
    		} else {
			return false;
		}
	}	
	
	
	 /**
		Finds the current user browser of OS
		@param data: browser or OS to detect
		
		(date keyword list)
		isWinXP,isWinVista,isWin7,isWin8,
		isLinux,
		isWinPhone8,
		isAndroid,
		isNexus7,isNexus10,
		isBlackberry,
		isOSX_SnowLeopard,isOSX_MountainLion,
		isAndroidBrowser,isAndroid_Gingerbread,isAndroid_IceCream,isAndroid_JellyBean,
		isIOS,isIOS6,isIOS5,isIOS4,
		isIPhone,isIPad,isIPod,
		isIE,isIE11,isIE10,isIE9,isIE8,isIE7,isIE6,
		isFF,
		isChrome,
		isSafari,
		isOpera,
		isOmniWeb,
		isKonqueror;
		
		@return Returns <code>true</code> if {@code data} is the browser or OS detected; otherwise <code>false</code>.
		
		use : BrowserUtil.checkBrowser("isXXX");
	*/
	
	BrowserUtil.checkBrowser = function(data) {
		
		var ua = navigator.userAgent,
			isIOS6    = false,
			isIOS5    = false,
			isIOS4    = false,
			isIPhone  = false,
			isIPad    = false,
			isIPod    = false,
			isAndroid = false;
		
		if (ua.indexOf("Windows NT 5.1") !== -1 && data === "isWinXP") { return true;
		} else {
			if (ua.indexOf("Windows NT 6.0") !== -1 && data === "isWinVista") { return true; 
			} else {
				if (ua.indexOf("Windows NT 6.1") !== -1 && data === "isWin7") { return true; 
				} else {
					if (ua.indexOf("Windows NT 6.2") !== -1 && data === "isWin8") { return true; 
					} else {
						if (ua.indexOf("Mac OS X 10_7") !== -1 && data === "isOSX_SnowLeopard") { return true;
						} else {
							if (ua.indexOf("Mac OS X 10.8") !== -1 && data === "isOSX_MountainLion") { return true;
							} else {
								if (ua.indexOf("Mac OS X 10_8") !== -1 && data === "isOSX_MountainLion") { return true;
								} else {
									if (ua.indexOf("Linux") !== -1 && data === "isLinux") { return true;
									} else {
										if (ua.indexOf("Windows Phone 8") !== -1 && data === "isWinPhone8") { return true; 
										} else {
											if (ua.indexOf("Android") !== -1 && data === "isAndroid") { isAndroid = true; return true;
											} else {
												if (ua.indexOf("Android 2.3") !== -1 && data === "isAndroid_Gingerbread") { return true;
												} else {
													if (ua.indexOf("Android 4.0") !== -1 && data === "isAndroid_IceCream") { return true; 
													} else {
														if (ua.indexOf("Android 4.1") !== -1 && data === "isAndroid_JellyBean") { return true; 
														} else {
															if (ua.match(/OS 6_[0-9_]+ like Mac OS X/i) && data === "isIOS6") { isIOS6 = true; return true; 
															} else {
																if (ua.match(/OS 5_[0-9_]+ like Mac OS X/i) && data === "isIOS5") { isIOS5 = true; return true; 
																} else {
																	if (ua.match(/OS 4_[0-9_]+ like Mac OS X/i) && data === "isIOS4") { isIOS4 = true; return true; 
																	} else {
																		if(ua.indexOf("Nexus 10") !== -1 && data === "isNexus10") { return true;
																		} else {
																			if(ua.indexOf("Nexus 7") !== -1 && data === "isNexus7") { return true;
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
			}
		} if (ua.indexOf("iPhone") !== -1 && data === "isIPhone") { isIPhone = true; return true; } 
		else {
			if (ua.indexOf("iPad") !== -1 && data === "isIPad") { isIPad = true; return true; } 
			else {
				if (ua.indexOf("iPod") !== -1 && data === "isIPod") { isIPod = true; return true;
				}
			}
		}
		if (ua.indexOf("MSIE") != -1 || ua.indexOf("Trident") != -1 && data === "isIE"){
			return true;
		}
		
		if(ua.match(/Trident.*rv[ :]*11\./) && data === "isIE11") { return true; }
		else {	
			if (ua.indexOf("MSIE 10") !== -1 && data === "isIE10") { return true; } 
			else {
				if (ua.indexOf("MSIE 9") !== -1 && data === "isIE9") { return true; } 
				else {
					if (ua.indexOf("MSIE 8") !== -1 && data == "isIE8") { return true; } 
					else {
						if (ua.indexOf("MSIE 7") !== -1 && data === "isIE7") { return true; }
						else {
							if (ua.indexOf("MSIE 6") !== -1 && data === "isIE6") { return true; } 
							else {
								if (ua.indexOf("Firefox") !== -1 && data === "isFF") { return true; } 
								else {
									if (ua.indexOf("Chrome") !== -1 && data === "isChrome") { return true; } 
									else {
										if (ua.indexOf("Mobile Safari") !== -1 && isAndroid && data === "isAndroidBrowser") { return true; } 
										else {
											if (ua.indexOf("Safari") !== -1 && data === "isSafari" ) { return true; }
											else {
												if(ua.indexOf("Opera") !== -1 && data === "isOpera") { return true; } 
												else {
													if(ua.indexOf("OmniWeb") !== -1 && data === "isOmniWeb") { return true; } 
													else {
														if(ua.indexOf("Konqueror") !== -1 && data === "isKonqueror") { return true; } 
														else {
															if(ua.indexOf("Blackberry") !== -1 && data === "isBlackberry") { return true; }	
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
		
		if(data === "isIOS") {
			if(!isIOS6 && !isIOS5 && !isIOS4 && !isIPhone && !isIPad && !isIPod) {
	  			return false; 
	  		} else { 
	  			return true; 
	  		}	
		}
		
		return false;
		
	}
	
    return BrowserUtil;

})();
  
