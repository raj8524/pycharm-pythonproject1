'use strict';var snhb=snhb||{};snhb.options=snhb.options||{};snhb.queue=snhb.queue||[];snhb.modules={};snhb.initTime=(new Date).getTime();var pbjs=pbjs||{};pbjs.que=pbjs.que||[];var googletag=googletag||{};googletag.cmd=googletag.cmd||[];var adsbygoogle=adsbygoogle||[];snhb.info={publisherDomain:"w3schools.com",supplyChainId:"7088",cmpVersion:"latest",version:{major:"20200508",minor:"20201215"}};
snhb.localSettings={auction:{currency:"EUR",timeout:1500,priceGranularity:"high",detectTabletsAsMobileTraffic:!1},bidderAliases:{appnexus:"districtmAnxAst"},bidderAdjustments:{districtmAnxAst:{c:"USD",s:.15}},adUnits:[{name:"sidebar_sticky",platform:"desktop",path:"/22152718/sws-hb//w3schools.com//sidebar_sticky",sizeMapping:[{query:{minWidth:993,maxWidth:1134},sizes:[[120,600]],additionalDFPSizes:[[120,601]]},{query:{minWidth:1135,maxWidth:1674},sizes:[[160,600]],additionalDFPSizes:[[160,601]]},
{query:{minWidth:1675},sizes:[[160,600],[300,600],[300,250]],additionalDFPSizes:[[160,601],[300,601],[300,251]]}],bidderPool:[]},{name:"main_leaderboard",platform:"desktop",path:"/22152718/sws-hb//w3schools.com//main_leaderboard",sizeMapping:[{query:{maxWidth:479},sizes:[[320,50]]},{query:{minWidth:480,maxWidth:779},sizes:[[468,60]]},{query:{minWidth:780,maxWidth:992},sizes:[[728,90]]},{query:{minWidth:993,maxWidth:1149},sizes:[[468,60]]},{query:{minWidth:1150,maxWidth:1424},sizes:[[728,90]]},{query:{minWidth:1425},
sizes:[[728,90],[970,90]]}],bidderPool:[]},{name:"main_leaderboard",platform:"mobile",path:"/22152718/sws-hb//w3schools.com//main_leaderboard",sizeMapping:[{query:{maxWidth:479},sizes:[[320,50]]},{query:{minWidth:480,maxWidth:779},sizes:[[468,60]]},{query:{minWidth:780,maxWidth:992},sizes:[[728,90]]},{query:{minWidth:993,maxWidth:1149},sizes:[[468,60]]},{query:{minWidth:1150,maxWidth:1424},sizes:[[728,90]]},{query:{minWidth:1425},sizes:[[728,90],[970,90]]}],bidderPool:[]},{name:"wide_skyscraper",
platform:"desktop",path:"/22152718/sws-hb//w3schools.com//wide_skyscraper",sizeMapping:[{query:{maxWidth:974},sizes:[[320,50]]},{query:{minWidth:975,maxWidth:1134},additionalDFPSizes:[[120,600]]},{query:{minWidth:1135,maxWidth:1674},sizes:[[160,600]]},{query:{minWidth:1675},sizes:[[160,600],[300,600]]}],bidderPool:[]},{name:"wide_skyscraper",platform:"mobile",path:"/22152718/sws-hb//w3schools.com//wide_skyscraper",sizeMapping:[{query:{maxWidth:974},sizes:[[320,50]]},{query:{minWidth:975,maxWidth:1134},
additionalDFPSizes:[[120,600]]},{query:{minWidth:1135,maxWidth:1674},sizes:[[160,600]]},{query:{minWidth:1675},sizes:[[160,600],[300,600]]}],bidderPool:[]},{name:"mid_content",platform:"desktop",path:"/22152718/sws-hb//w3schools.com//mid_content",sizeMapping:[{query:{maxWidth:489},sizes:[[300,250],[336,280],[320,50]],additionalDFPSizes:[[300,251],[336,281],[320,51]]},{query:{minWidth:490,maxWidth:749},sizes:[[300,250],[336,280]],additionalDFPSizes:[[300,251],[336,281],[468,60],[468,61]]},{query:{minWidth:750,
maxWidth:992},sizes:[[728,90]],additionalDFPSizes:[[728,91]]},{query:{minWidth:993,maxWidth:1134},sizes:[[300,250],[336,280]],additionalDFPSizes:[[300,251],[336,281],[468,60],[468,61]]},{query:{minWidth:1135,maxWidth:1439},sizes:[[728,90]],additionalDFPSizes:[[728,91]]},{query:{minWidth:1440},sizes:[[728,90],[970,250],[970,90]],additionalDFPSizes:[[728,91],[970,251],[970,91]]}],bidderPool:[]},{name:"mid_content",platform:"mobile",path:"/22152718/sws-hb//w3schools.com//mid_content",sizeMapping:[{query:{maxWidth:489},
sizes:[[300,250],[336,280],[320,50]]},{query:{minWidth:490,maxWidth:749},sizes:[[300,250],[336,280]],additionalDFPSizes:[[468,60]]},{query:{minWidth:750,maxWidth:992},sizes:[[728,90]]},{query:{minWidth:993,maxWidth:1134},sizes:[[300,250],[336,280]],additionalDFPSizes:[[468,60]]},{query:{minWidth:1135,maxWidth:1439},sizes:[[728,90]]},{query:{minWidth:1440},sizes:[[728,90],[970,250],[970,90]]}],bidderPool:[]},{name:"bottom_medium_rectangle",platform:"desktop",path:"/22152718/sws-hb//w3schools.com//bottom_medium_rectangle",
sizeMapping:[{query:{maxWidth:1239},sizes:[[300,250]]},{query:{minWidth:1240},sizes:[[970,250],[300,250]]}],bidderPool:[]},{name:"bottom_medium_rectangle",platform:"mobile",path:"/22152718/sws-hb//w3schools.com//bottom_medium_rectangle",sizeMapping:[{query:{maxWidth:1239},sizes:[[300,250]]},{query:{minWidth:1240},sizes:[[970,250],[300,250]]}],bidderPool:[]},{name:"right_bottom_medium_rectangle",platform:"desktop",path:"/22152718/sws-hb//w3schools.com//right_bottom_medium_rectangle",sizeMapping:[{query:{minWidth:975},
sizes:[[300,250]]}],bidderPool:[]},{name:"try_it_leaderboard",platform:"desktop",path:"/22152718/sws-hb//w3schools.com//try_it_leaderboard",sizeMapping:[{query:{maxWidth:467},sizes:[[320,50]]},{query:{minWidth:468,maxWidth:727},sizes:[],additionalDFPSizes:[[468,60]]},{query:{minWidth:728},sizes:[[728,90]]}],bidderPool:[]},{name:"try_it_leaderboard",platform:"mobile",path:"/22152718/sws-hb//w3schools.com//try_it_leaderboard",sizeMapping:[{query:{maxWidth:467},sizes:[[320,50]]},{query:{minWidth:468,
maxWidth:727},sizes:[],additionalDFPSizes:[[468,60]]},{query:{minWidth:728},sizes:[[728,90]]}],bidderPool:[]}]};
snhb.localSettings.modules={enableSafeFrames:{iOS:!0},machineLearning:{processAdUnits:["bottom_medium_rectangle"],ignoreAdUnits:[]},ssr:{desktopActionTrigger:2E3,mobileActionTrigger:500,refreshInMs:3E4,refreshBidderBlacklist:[],adUnits:[{name:"sidebar_sticky",platform:"desktop"},{name:"main_leaderboard",platform:"desktop"},{name:"wide_skyscraper",platform:"desktop"},{name:"mid_content",platform:"desktop"},{name:"bottom_medium_rectangle",platform:"desktop"},{name:"right_bottom_medium_rectangle",platform:"desktop"}]},
autolabeling:{centerOnPlacementWrapper:["all"],ignorePlacements:["snhb-main_leaderboard-0","snhb-try_it_leaderboard-0"]}};
snhb.modules.ssr={v:3.2,desktopActionTrigger:1E4,desktopMinInViewMs:5E3,mobileActionTrigger:2500,mobileMinInViewMs:2E3,minRefreshIntervalMs:1E4,maxRefreshNumber:500,maxRefreshIntervalMs:48E4,config:snhb.localSettings.modules.ssr,logPrefix:"### SSR v",initialized:!1,lastUserAction:0,visibility:{},actionsFunction:null,refreshQueue:{},currentRefreshAdUnits:[],queueGracePeriodMs:500,queueGraceFunction:null,debug:function(a){snhb.console.debug(this.logPrefix+a)},warn:function(a){snhb.console.warn(this.logPrefix+
a)},addFrameListeners:function(a){var b=snhb.modules.ssr,c=b.config.adUnits,d=function(a){b.actionsFunction&&clearTimeout(b.actionsFunction);b.actionsFunction=setTimeout(function(){b.lastUserAction=(new Date).getTime();for(var a=function(c,d,e,f){if(c){var n=e?e.parentElement:c.parentElement;if(!n||e===document.body)return!0;void 0===f&&(f=c.getBoundingClientRect(),f=f.top+f.height/2);if(d=d||b.config.simpleVisibilityDetection)return f>(d.t||0)&&f<window.innerHeight-(d.b||0);if(0<f&&f<window.innerHeight){d=
n.getBoundingClientRect();if(f>d.top&&f<d.top+d.height)return a(c,null,n,f);if((c=getComputedStyle(c))&&"fixed"===c.position||e&&(c=getComputedStyle(e))&&"fixed"===c.position)return!0}}return!1},d=0;d<c.length;d++){var e=c[d].name,f=a(document.getElementById(c[d].divPlacement),c[d].simpleVisibilityDetection);if(b.visibility[e]=f)if(f=b.refreshQueue[e])f.initialVisTime=f.initialVisTime||b.lastUserAction,f.isDue&&!f.isWaitingElapsed&&b.refresh(e)}},100)},e=function(b,c){var d=a?a.contentWindow:window;
d&&d.addEventListener(b,c)};e("load",d);e("click",d);e("resize",d);e("scroll",d);e("touchend",d);e("touchmove",d);e("mousemove",d)},init:function(){var a=snhb.modules.ssr;a.logPrefix+=a.v+" - ";var b=a.config.adUnits;if(b){for(var c,d=a.config.desktopMinInViewMs,e=a.config.mobileMinInViewMs,f=0;f<b.length;f++)c=b[f],c.refreshCount=0,c.desktopMinInViewMs=void 0!==c.desktopMinInViewMs?c.desktopMinInViewMs:void 0!==d?d:a.desktopMinInViewMs,c.mobileMinInViewMs=void 0!==c.mobileMinInViewMs?c.mobileMinInViewMs:
void 0!==e?e:a.mobileMinInViewMs;a.addFrameListeners();a.initialized=!0;a.debug("Found SSR module. Enabling...")}else a.warn("No ad unit configuration for SSR module detected. Module disabled.")},postAuction:function(){var a=snhb.modules.ssr;if(a.initialized){a.debug("Setting SSR module refreshes...");a.currentRefreshAdUnits=[];var b=snhb.localSettings.auction;b.isRefreshing=!1;b=b.platform;for(var c=a.config.adUnits,d=0;d<c.length;d++){var e=c[d].platform;if(!e||"all"==e||e==b){e=c[d].name;var f=
a.refreshQueue[e];if(f)a.debug("Ad unit '"+e+"' is "+(f.isBlacklisted?"blacklisted":"already queued")+" for refresh. Skipping...");else{f=snhb.localSettings.adUnits;for(var g=0;g<f.length;g++)if(f[g].name==e&&(!f[g].platform||"all"==f[g].platform||f[g].platform==b)&&0<f[g].timesAuctioned){c[d].divPlacement=f[g].code;var l=c[d].maxRefreshNumber||a.config.maxRefreshNumber||a.maxRefreshNumber;l=l>a.maxRefreshNumber?a.maxRefreshNumber:l;if(c[d].refreshCount<l){var k=c[d].refreshInMs||a.config.refreshInMs||
a.minRefreshIntervalMs;k=k<a.minRefreshIntervalMs?a.minRefreshIntervalMs:k;var h=(new Date).getTime();a.debug("Enabling SSR ("+(c[d].refreshCount+1)+"/"+l+") for '"+e+"'. Refreshing in "+k+"ms.");a.refreshQueue[e]={initialTime:h,initialVisTime:"visible"===document.visibilityState&&a.visibility[e]?h:0,timeout:function(b){return setTimeout(function(){a.refresh(b)},k)}(e),maxRefreshCount:l,refreshInterval:k,cfgAdUnit:c[d],aucAdUnit:f[g],isBlacklisted:!1,isDue:!1}}}}}}}},postBidding:function(){var a=
snhb.localSettings;!a.system.autoInitAdServer&&a.auction.isRefreshing&&(this.warn("SSR module requires automatic ad-server refresh to be enabled. Enabling..."),a.system.autoInitAdServer=!0)},refresh:function(a){var b=snhb.modules.ssr,c=b.refreshQueue[a],d=snhb.globalSettings.ssr||{},e=document.getElementById(c.aucAdUnit.code);if(e&&2>c.aucAdUnit.timesAuctioned){var f=function(a,b){if(!a.innerHTML)return!1;if(b){for(var d=null,e=googletag.pubads().getSlots(),f=0;f<e.length&&(d=e[f],d.getSlotElementId()!==
c.aucAdUnit.code);f++);e=!0;1>=d.getHtml().length&&(e=!1);for(f=0;f<b.length;f++){var n=b[f];if(0<a.innerHTML.indexOf(n))return!0;for(var h=a.getElementsByTagName("iframe")||[],g=0;g<h.length;g++)try{var m=h[g]&&h[g].contentWindow&&h[g].contentWindow.document?h[g].contentWindow.document:null;if(m&&(m.head&&m.head.innerHTML&&0<m.head.innerHTML.indexOf(n)||m.body&&m.body.innerHTML&&0<m.body.innerHTML.indexOf(n)))return!0}catch(t){}if(e&&0<d.getHtml().indexOf(n))return!0}}return!1};if("290"==e.height||
f(e,d.blacklist)){b.debug("Disabling SSR for ad unit '"+a+"' due to existance of a special ad playing.");c.isBlacklisted=!0;return}}e=c.cfgAdUnit;var g=snhb.localSettings.auction,l=(f="mobile"===g.platform)?b.config.mobileActionTrigger||b.mobileActionTrigger:b.config.desktopActionTrigger||b.desktopActionTrigger;f=f?e.mobileMinInViewMs:e.desktopMinInViewMs;var k=e.maxRefreshIntervalMs||b.config.maxRefreshIntervalMs||d.refreshWithVisMaxMs||b.maxRefreshIntervalMs;d=(new Date).getTime();var h=d-c.initialTime,
m=c.initialVisTime?d-c.initialVisTime:0,p=d-b.lastUserAction,q="visible"===document.visibilityState&&b.visibility[a];d="REFRESHING AdUnit '"+a+"' ";!f||q&&(p<=l&&m>=f||h>=k)?(f=document.getElementById(e.divPlacement),(f?f.getBoundingClientRect():{}).height?(b.debug(d),b.currentRefreshAdUnits.push(a),e.refreshCount++,clearTimeout(c.timeout),delete b.refreshQueue[a],b.queueGraceFunction&&clearTimeout(b.queueGraceFunction),b.queueGraceFunction=setTimeout(function(){var a=b.currentRefreshAdUnits;b.debug("Starting SSR for queued ad units:",
a);g.isRefreshing=!0;0==a.length&&(a=[""]);snhb.startAuction(a)},b.queueGracePeriodMs)):(c.isDue=!1,b.debug(d+"stopped because previous impression was unfilled."))):(b.debug(d+"pending due to user inactivity or ad not in view."),c.isDue=!0,clearTimeout(c.timeout),e=-1,l=!1,0<c.initialVisTime&&m<f&&(e=f-m,l=!0),q&&h<k&&(f=k-h,!l||f<e)&&(e=f,l=!1),0<e&&(l?(c.isWaitingElapsed=!0,b.debug(d+"with action trigger in a minimum of "+e+"ms.")):b.debug(d+"anyways if ad still in view for more "+e+"ms."),c.timeout=
setTimeout(function(){c.isWaitingElapsed=!1;b.refresh(a)},e)))},isBidderBlacklisted:function(a,b){var c=snhb.localSettings.auction,d=snhb.modules.ssr;if(!d.initialized||!c.isRefreshing)return!1;c=c.platform;for(var e=0;e<d.config.adUnits.length;e++){var f=d.config.adUnits[e];if(f.name===a.name&&(f.platform===c||"all"===f.platform)){var g=f.refreshBidderBlacklist||d.config.refreshBidderBlacklist||[];if(0<f.refreshCount&&0<g.length&&(g=g[Math.min(f.refreshCount-1,g.length-1)],-1!==g.indexOf(b)))return d.debug("Bidder '"+
b+"' is blacklisted for refresh "+f.refreshCount+" of '"+a.name+"'"),!0}}return!1}};snhb.localSettings.bidders={penalties:{},weightsGlobal:{},weightsAdUnit:{}};
snhb.modules.enableSafeFrames={init:function(){},preBidding:function(){var a=/iPad|iPhone|iPod/.test(navigator.userAgent)&&!window.MSStream||!!navigator.platform&&/iPad|iPhone|iPod/.test(navigator.platform);snhb.console.debug("iOS detected: ",a);a&&snhb.localSettings.modules.enableSafeFrames.hasOwnProperty("iOS")&&!0===snhb.localSettings.modules.enableSafeFrames.iOS&&googletag.cmd.push(function(){googletag.pubads().setTargeting("_snhb-sf","true");snhb.console.debug("Using SafeFrames on iOS.")})}};
snhb.modules.machineLearning={maxAbsoluteInflation:10,maxRelativeInflation:20,isInflationRelative:!0,mlSettings:{},getAdUnitNameFromCode:function(a){var b=snhb.localSettings.system.divPrefix;return a.length>b.length+3?a.slice(b.length+1,a.lastIndexOf("-")):"unknown_adunit_name"},isUnitToBeProcessed:function(a){var b=snhb.localSettings.modules.machineLearning.ignoreAdUnits,c=snhb.localSettings.modules.machineLearning.processAdUnits;a=this.getAdUnitNameFromCode(a);return(!c||0==c.length||-1!==c.indexOf(a))&&
(!b||0==b.length||-1===b.indexOf(a))},getInflationParameter:function(a){var b=snhb.modules.machineLearning.mlSettings;a=this.getAdUnitNameFromCode(a);snhb.console.debug("Getting inflation parameter for ad unit '"+a+"'...");var c=a.replace(/[^a-zA-Z0-9_]/g,"_"),d=0;if(void 0!==b[c]){if(void 0!==b[c].value)return snhb.console.debug("Using pre-stored value of '"+b[c].value+"'"),b[c].value;d=b[c].dev;d=2*d*Math.random()+b[c].mean-d;0>d&&(d=0);.1<d&&(d=.1)}b[c]=b[c]||{};b[c].value=d;snhb.console.debug("Inflation parameter for ad unit '"+
a+"' was set to "+d);return d},getInflationKeyValue:function(a){return this.getInflationParameter(a).toFixed(2)},applyInflation:function(a){var b=a.adUnitCode;if(this.isUnitToBeProcessed(b)){var c=a.adserverTargeting.hb_pb,d="absolute",e=this.getInflationParameter(b);this.isInflationRelative?(d="relative",e=this.maxRelativeInflation*e/10*a.cpm):e=this.maxAbsoluteInflation*e/10;var f=(a.cpm+e).toFixed(2);a.adserverTargeting.hb_pb=f;snhb.console.debug("Applying "+d+" inflation of "+e+" on ad unit '"+
b+"' (PB change from "+c+" to "+f+").")}else snhb.console.debug("Ad unit '"+b+"' was set to be ignored in machine learning algorithm.")},init:function(){snhb.system.loadScript(snhb.localSettings.system.cdnURL+"pub/"+snhb.info.publisherDomain+"/snhbMLSettings.js","ML")},postBidding:function(){var a=snhb.metrics.auctionEnd.highestBidResponses,b;for(b in a)this.applyInflation(a[b])},onAdSlotCreation:function(a){var b=a.adUnit;a=a.adSlot;var c="0.00";this.isUnitToBeProcessed(b.code)&&(c=this.getInflationKeyValue(b.code));
a.setTargeting("_ia",c);snhb.console.debug("Targeting for '"+b.code+"' set to: '_ia="+c+"'")}};
snhb.modules.autolabeling={v:1.7,moduleConfig:snhb.localSettings.modules.autolabeling||{},init:function(){snhb.localSettings.modules.hasOwnProperty("autolabeling")?(this.initSuccess=!0,snhb.console.debug("Found autolabeling module. Enabling...")):snhb.console.warn("No autolabeling module detected.")},preAuction:function(){var a=snhb.modules.autolabeling.moduleConfig,b=snhb.globalSettings.autolabeling||{},c=a.fontColor||b.fontColor,d=a.fontSize||b.fontSize,e=a.blacklist||b.blacklist,f=a.ignorePlacements||
[],g=a.centerOnPlacementWrapper||[],l=a.checkPlacementSizes||[],k=a.extraStyling||[];googletag.cmd.push(function(){googletag.pubads().addEventListener("slotRenderEnded",function(a){for(var b=a.slot.getSlotElementId(),h=0;h<pbjs.getAllWinningBids().length;h++){if(pbjs.getAllWinningBids()[h].adUnitCode==b&&e.includes(pbjs.getAllWinningBids()[h].bidderCode))return;if(pbjs.getAllWinningBids()[h].adUnitCode==b)break}if((!f.includes(b)&&l.includes(b)&&1<a.size[0]&&1<a.size[1]||!f.includes(b))&&null!=document.getElementById(b)&&
(a=document.createElement("p"),a.id="ad_label_"+b,a.setAttribute("class","ad_label_snhb"),null==document.getElementById(a.id))){a.innerHTML="ADVERTISEMENT";a.setAttribute("style","color:"+c+";font-size:"+d+";margin:0;text-align:center;");!g.includes(b)&&!g.includes("all")&&0<document.getElementById(b).getElementsByTagName("iframe").length&&(a.style.width=parseInt(document.getElementById(b).getElementsByTagName("iframe")[0].width)+"px");if(0<k.length)for(h=0;h<k.length;h++)k[h].includes(b)&&eval(k[h][k[h].length-
1]);document.getElementById(b).insertBefore(a,document.getElementById(b).children[0])}})})}};Number.isInteger=Number.isInteger||function(a){return"number"===typeof a&&isFinite(a)&&Math.floor(a)===a};snhb.metrics={system:{},getTimeDifference:function(a,b){a=b-a;return 1E3>a?a+"ms":a/1E3+"s"},getTimeStamp:function(){return this.getTimeDifference(snhb.initTime,(new Date).getTime())}};
snhb.console={consoleHistory:[],getLogPrefix:function(){return snhb.localSettings.system.logPrefix+"("+snhb.metrics.getTimeStamp()+"):"},logConsoleHistory:function(){for(var a=this.consoleHistory,b=0;b<a.length;b++)console[a[b][0]].apply(console,a[b][1])},clearConsoleHistory:function(){this.consoleHistory=[]},spit:function(a,b,c){a=Array.prototype.slice.call(a);a.unshift(this.getLogPrefix());this.consoleHistory.push([b,a]);c&&!snhb.localSettings.system[b+"OutputEnabled"]||console[b].apply(console,
a)},debug:function(){snhb.console.spit(arguments,"debug",!0)},log:function(){snhb.console.spit(arguments,"log",!0)},warn:function(){snhb.console.spit(arguments,"warn")},error:function(){snhb.console.spit(arguments,"error")}};
snhb.system={initModules:function(){var a=snhb.console,b=snhb.localSettings.modules;if(b)for(var c in snhb.modules)void 0!==b[c]?(a.debug("Initializing found module '"+c+"'"),snhb.modules[c].init()):a.warn("No configuration section for the module '"+c+"' detected.");else a.warn("No configuration section for modules detected. Skipping initialization of all modules.")},callModulesStageFunctions:function(a,b){if(-1!=="preAuction preBidding postBidding preAdServer onAdSlotCreation postAdServer postAuction".split(" ").indexOf(a))for(var c in snhb.modules){var d=
snhb.modules[c],e=snhb.localSettings.modules;if(void 0!==e&&void 0!==e[c]&&void 0!==d[a])d[a](b)}else snhb.console.error("Unknown modules stage functions call for stage '"+a+"'")},initAdUnitSettings:function(){for(var a=snhb.localSettings.adUnits,b=0;b<a.length;b++){var c=a[b];c.adSlotIndex=0;c.timesAuctioned=0}},initAuctionSettings:function(){var a=snhb.localSettings.auction;a.running=!1;a.queuedAdUnits=[];a.detectTabletsAsMobileTraffic=!1;a.enableDetectTabletsAsMobiles=function(){this.detectTabletsAsMobileTraffic=
!0};a.disableDetectTabletsAsMobiles=function(){this.detectTabletsAsMobileTraffic=!1};a.platform=snhb.system.isMobile()?"mobile":"desktop";a.refreshedUnitsCounter={}},initSystemSettings:function(){var a=document.location.protocol.toLowerCase()+"//",b=a+snhb.system.scriptHostname()+"/";snhb.localSettings.system={logPrefix:"[snhb]",divPrefix:"snhb",autoStartAuction:!0,logOutputEnabled:!0,debugOutputEnabled:!1,PBJSDebugOutputEnabled:!1,auctionResultOutputEnabled:!1,allOutputEnabled:!1,refreshAllAdSlots:!1,
detectWindowResize:!0,autoInitAdServer:!0,windowWasResizedSinceLastAuction:!1,adSlotsRenderEndedGracePeriodMs:2E3,cdnURL:b,cmpURL:b+"sncmp/",gptURL:a+"securepubads.g.doubleclick.net/tag/js/gpt.js",snhbGlobalSettingsURL:b+"snhb/snhbGlobalSettings.js",cookieDomain:""}},parseOptions:function(){var a={system:{logOutputEnabled:"boolean",debugOutputEnabled:"boolean",PBJSDebugOutputEnabled:"boolean",auctionResultOutputEnabled:"boolean",allOutputEnabled:"boolean",autoStartAuction:"boolean",refreshAllAdSlots:"boolean",
detectWindowResize:"boolean",autoInitAdServer:"boolean",cookieDomain:"string"},auction:{detectTabletsAsMobileTraffic:"boolean"}},b;for(b in snhb.options){var c=!1,d;for(d in a){var e=a[d];if(e.hasOwnProperty(b)){c=!0;var f=snhb.options[b];typeof f===e[b]?snhb.localSettings[d][b]=f:snhb.console.error("Expecting "+e[b]+" for '"+b+"'. Ignoring option.")}}c||"gdpr"===b||"consent"===b||snhb.console.warn("Ignoring unknown option '"+b+"'.")}var g=snhb.localSettings.system;a=function(a,b){-1!==window.location.href.indexOf(a)&&
(snhb.localSettings.system[b]=!0)};a("snhb_log","logOutputEnabled");a("snhb_debug","debugOutputEnabled");a("snhb_auction_result","auctionResultOutputEnabled");a("snhb_log_all","allOutputEnabled");!0===g.allOutputEnabled&&(g.logOutputEnabled=!0,g.debugOutputEnabled=!0,g.auctionResultOutputEnabled=!0,snhb.console.log("All output is enabled by configuration."));!0===g.detectWindowResize&&window.addEventListener("resize",function(){g.windowWasResizedSinceLastAuction||(snhb.console.debug("Window size has changed since last auction."),
g.windowWasResizedSinceLastAuction=!0)})},pushCallback:function(a,b){a.push=function(c){Array.prototype.push.call(a,c);b(a)}},processQueue:function(a){if(0<a.length){snhb.console.debug("Processing snhb.queue (size="+a.length+"): ",a);for(var b=0;b<a.length;b++)snhb.console.debug("   "+(b+1)+") ",a[b]);if("function"===typeof a[0])try{a[0]()}catch(c){snhb.console.error("snhb.queue element error: ",c)}else snhb.console.error("snhb.queue element error: found "+typeof a[0]+" instead of function");a.splice(0,
1);0<a.length&&this.processQueue(a)}},doOnDOMReady:function(a){var b=function(){return"interactive"===document.readyState||"complete"===document.readyState},c=function(){b()&&(document.addEventListener?document.removeEventListener("DOMContentLoaded",c,!1):document.attachEvent&&document.detachEvent("onreadystatechange",c),snhb.console.debug("DOM now ready."),a())};b()?(snhb.console.debug("DOM already ready."),a()):(snhb.console.debug("DOM not ready yet. Delaying to initialize AdServer..."),document.addEventListener?
document.addEventListener("DOMContentLoaded",c,!1):document.attachEvent&&document.attachEvent("onreadystatechange",c))},isMobile:function(){var a=navigator.userAgent||navigator.vendor||window.opera,b="(android|bbd+|meego).+mobile|avantgo|bada/|blackberry|blazer|compal|elaine|fennec|hiptop|iemobile|ip(hone|od)|iris|kindle|lge |maemo|midp|mmp|mobile.+firefox|netfront|opera m(ob|in)i|palm( os)?|phone|p(ixi|re)/|plucker|pocket|psp|series(4|6)0|symbian|treo|up.(browser|link)|vodafone|wap|windows ce|xda|xiino";
snhb.localSettings.auction.detectTabletsAsMobileTraffic?(b+="|android|ipad|playbook|silk",snhb.console.debug("Tablets are set to be considered mobile traffic.")):snhb.console.debug("Tablets are set to be considered desktop traffic.");var c=/1207|6310|6590|3gso|4thp|50[1-6]i|770s|802s|a wa|abac|ac(er|oo|s-)|ai(ko|rn)|al(av|ca|co)|amoi|an(ex|ny|yw)|aptu|ar(ch|go)|as(te|us)|attw|au(di|-m|r |s )|avan|be(ck|ll|nq)|bi(lb|rd)|bl(ac|az)|br(e|v)w|bumb|bw-(n|u)|c55\/|capi|ccwa|cdm-|cell|chtm|cldc|cmd-|co(mp|nd)|craw|da(it|ll|ng)|dbte|dc-s|devi|dica|dmob|do(c|p)o|ds(12|-d)|el(49|ai)|em(l2|ul)|er(ic|k0)|esl8|ez([4-7]0|os|wa|ze)|fetc|fly(-|_)|g1 u|g560|gene|gf-5|g-mo|go(.w|od)|gr(ad|un)|haie|hcit|hd-(m|p|t)|hei-|hi(pt|ta)|hp( i|ip)|hs-c|ht(c(-| |_|a|g|p|s|t)|tp)|hu(aw|tc)|i-(20|go|ma)|i230|iac( |-|\/)|ibro|idea|ig01|ikom|im1k|inno|ipaq|iris|ja(t|v)a|jbro|jemu|jigs|kddi|keji|kgt( |\/)|klon|kpt |kwc-|kyo(c|k)|le(no|xi)|lg( g|\/(k|l|u)|50|54|-[a-w])|libw|lynx|m1-w|m3ga|m50\/|ma(te|ui|xo)|mc(01|21|ca)|m-cr|me(rc|ri)|mi(o8|oa|ts)|mmef|mo(01|02|bi|de|do|t(-| |o|v)|zz)|mt(50|p1|v )|mwbp|mywa|n10[0-2]|n20[2-3]|n30(0|2)|n50(0|2|5)|n7(0(0|1)|10)|ne((c|m)-|on|tf|wf|wg|wt)|nok(6|i)|nzph|o2im|op(ti|wv)|oran|owg1|p800|pan(a|d|t)|pdxg|pg(13|-([1-8]|c))|phil|pire|pl(ay|uc)|pn-2|po(ck|rt|se)|prox|psio|pt-g|qa-a|qc(07|12|21|32|60|-[2-7]|i-)|qtek|r380|r600|raks|rim9|ro(ve|zo)|s55\/|sa(ge|ma|mm|ms|ny|va)|sc(01|h-|oo|p-)|sdk\/|se(c(-|0|1)|47|mc|nd|ri)|sgh-|shar|sie(-|m)|sk-0|sl(45|id)|sm(al|ar|b3|it|t5)|so(ft|ny)|sp(01|h-|v-|v )|sy(01|mb)|t2(18|50)|t6(00|10|18)|ta(gt|lk)|tcl-|tdg-|tel(i|m)|tim-|t-mo|to(pl|sh)|ts(70|m-|m3|m5)|tx-9|up(.b|g1|si)|utst|v400|v750|veri|vi(rg|te)|vk(40|5[0-3]|-v)|vm40|voda|vulc|vx(52|53|60|61|70|80|81|83|85|98)|w3c(-| )|webc|whit|wi(g |nc|nw)|wmlb|wonu|x700|yas-|your|zeto|zte-/i;
return(new RegExp(b,"i")).test(a)||c.test(a.substr(0,4))},getAllBidders:function(){var a=[];snhb.localSettings.adUnits.forEach(function(b){b.bidderPool.forEach(function(b){-1===a.indexOf(b.bidder)&&a.push(b.bidder)})});return a},checkAdSlotRenderingEnded:function(){0===snhb.localSettings.auction.adUnitAdSlotToRender.length&&(snhb.console.debug("All ad slots successfully rendered before the timeout of "+snhb.localSettings.system.adSlotsRenderEndedGracePeriodMs+"ms."),window.clearTimeout(this.adSlotRenderTimeoutId),
this.doOnAuctionEnded())},startAdSlotRenderingEndedGracePeriod:function(){var a=snhb.localSettings.system.adSlotsRenderEndedGracePeriodMs;snhb.console.debug("Waiting for all ad-slots to end rendering. Timeout: "+a+"ms.");this.adSlotRenderTimeoutId=window.setTimeout(function(){snhb.console.debug("Ad-slot rendering timed out.");snhb.localSettings.auction.adUnitAdSlotToRender=[];this.doOnAuctionEnded()}.bind(this),a)},doOnAuctionEnded:function(){snhb.console.debug("All done.");snhb.system.callModulesStageFunctions("postAuction");
var a=snhb.localSettings.auction;a.running=!1;this.createAuctionSummary();delete this.adSlotRenderTimeoutId;var b=a.queuedAdUnits;if(1<=b.length){for(var c=[],d=0;d<b.length;d++)c.push(b[d]);snhb.startAuction(c);a.queuedAdUnits=[]}},getPerformanceMetricsSummary:function(){var a={},b=function(b){for(var c in b)a[c]={startAt:snhb.metrics.getTimeDifference(snhb.initTime,b[c].timeStarted),duration:snhb.metrics.getTimeDifference(b[c].timeStarted,b[c].timeEnded)}};b(snhb.metrics.system);b(snhb.metrics.auction);
return a},getAuctionResultsSummary:function(){return{}},createAuctionSummary:function(){var a=(new Date).getTime(),b=snhb.metrics.auction,c=snhb.localSettings.system;b.refreshAdServer.timeEnded=a;b.auction.timeEnded=a;if(!0===c.auctionResultOutputEnabled&&!0===c.logOutputEnabled&&(a=snhb.system.getPerformanceMetricsSummary(),b=snhb.system.getAuctionResultsSummary(),c=snhb.console.debug,c("Auction performance metrics summary:",a),console.table&&console.table(a),c("Auction bid result summary:",b),console.table))for(var d in b)c("Results for '"+
d+"'",b[d]),console.table(b[d])},getTLD:function(){var a=(window&&window.location&&window.location.hostname||"").split(".");return 1<a.length?a.slice(-2).join("."):""},getCookieValue:function(a){var b="; "+document.cookie;b=b.split("; "+a+"=");3<=b.length&&(document.cookie=a+" =;;path=/;max-age=-1;Expires="+(new Date(0)).toUTCString(),b="; "+document.cookie,b=b.split("; "+a+"="));if(2<=b.length)return b[b.length-1].split(";").shift()},setCookie:function(a,b,c,d,e){void 0===e&&(e="/");void 0===d&&
(d=(d=snhb.localSettings.system.cookieDomain)?d:this.getTLD());d=";domain="+d;var f=new Date;f.setSeconds(f.getSeconds()+c);document.cookie=a+" = "+b+d+";path="+e+";max-age="+c+";Expires="+f.toUTCString()},deleteCookie:function(a,b,c){void 0===c&&(c="/");void 0===b&&(b=(b=snhb.localSettings.system.cookieDomain)?b:this.getTLD());document.cookie=a+" = "+(";domain="+b)+";path="+c+";max-age=-1;Expires="+(new Date(0)).toUTCString();snhb.console.debug("Deleting cookie '"+a+"'")},cookiesAvailable:function(){var a=
Math.random().toString(16).slice(2),b=snhb.system;b.setCookie(a,!0,60);if(void 0===b.getCookieValue(a))return!1;b.deleteCookie(a);return!0},updateAdUnitCode:function(a){a.adSlotIndex||(a.adSlotIndex=0);a.code=snhb.localSettings.system.divPrefix+"-"+a.name+"-"+a.adSlotIndex;return a.code},convertCurrency:function(a,b,c){if(b===c)return a;var d=snhb.globalSettings.currencyConversionEURTo;"EUR"!==b&&(a/=d[b].rate);"EUR"!==c&&(d[c]?a*=d[c].rate:snhb.console.warn("Can't convert to '"+c+"'. Exchange rate missing in global configuration, falling back to 'EUR'."));
return a},scriptHostname:function(){if(document.currentScript)var a=document.currentScript.src;else try{throw Error();}catch(b){a=b.stack,a=a.substring(a.search("http")),a=a.substring(0,a.search("\\)"))}return a?a.split("//")[1].split("/")[0].split(":")[0]:"static.h-bid.com"},loadScript:function(a,b,c,d,e){snhb.console.debug("Loading "+b+"...");var f={timeStarted:(new Date).getTime()};"string"===typeof c&&(snhb.metrics.system[c]=f);b=document.createElement("script");b.type="text/javascript";b.src=
a;b.async=!0;b.onload=function(){f.timeEnded=(new Date).getTime();d&&d()};e&&(b.onerror=e);document.head.appendChild(b)},getABTestcase:function(){return.5>=Math.random()?"a":"b"}};snhb.getAllAvailableAdUnitNames=function(){var a=[];try{snhb.localSettings.adUnits.forEach(function(b){-1===a.indexOf(b.name)&&a.push(b.name)})}catch(b){return snhb.console.error(b),[]}return a};
snhb.addAdditionalAdSlotsToRefresh=function(a){var b=snhb.console,c=b.debug;b=b.error;if(a.constructor===Array)if(0<a.length){var d=!0;c("Adding additional ad slots for refreshing... (size="+a.length+")");for(var e=0;e<a.length;e++)c("   "+(e+1)+") ",a[e]),a[e]||(d=!1);d?(snhb.localSettings.system.refreshAllAdSlots=!1,snhb.localSettings.auction.additionalAdSlotsToRefresh=a):b("snhb.addAdditionalAdSlotsToRefresh() there are invalid adslots passed in the array. Ignoring call.")}else b("snhb.addAdditionalAdSlotsToRefresh() passed parameter should be a non-empty array. Ignoring call.");
else b("snhb.addAdditionalAdSlotsToRefresh() expects passed parameter to be of type Array.")};
snhb.initAdServer=function(){var a=snhb.system;a.doOnDOMReady(function(){var b=snhb.localSettings,c=b.auction,d=b.system;b=snhb.console;var e=b.debug,f=b.warn,g=snhb.metrics.auction,l=function(a){a:{var b=googletag.pubads().getSlots();for(var c=0;c<b.length;c++)if(b[c].getSlotElementId()===a){b=b[c];break a}b=null}a=[];if(null!==b)for(b=b.getSizes(),c=0;c<b.length;c++)a.push([b[c].l,b[c].j]);return a};g.initAdServer.timeStarted=(new Date).getTime();e("Initializing ad-server...");a.callModulesStageFunctions("preAdServer");
googletag.cmd.push(function(){var b=googletag.pubads().getSlots(),h=[];if(d.windowWasResizedSinceLastAuction){e("Window size has changed, destroying all adSlots before continuing.");var m=[];googletag.pubads().getSlots().forEach(function(a){-1!==c.adUnitHasAdSlot.indexOf(a.getSlotElementId())&&m.push(a)});googletag.destroySlots(m);c.adUnitHasAdSlot=[];d.windowWasResizedSinceLastAuction=!1}var p=c.additionalAdSlotsToRefresh;if(p){e("Additional ad-slots passed for ad-server refresh: ",p);for(var q=
0;q<p.length;q++)h.push(p[q]);delete c.additionalAdSlotsToRefresh}c.adUnitHasAdSlot=c.adUnitHasAdSlot||[];c.adUnitAdSlotToRender=[];var r=function(a){a.setTargeting("_snhb","true");var b=a.getSlotElementId(),d=c.refreshedUnitsCounter[b];d=(null==d?-1:d)+1;a.setTargeting("_snhb-aurc",""+(19<d?"20 or more":d));c.refreshedUnitsCounter[b]=d;a.setTargeting("consent_applies","none");a.setTargeting("consent_value","full")};c.adUnits.forEach(function(d){e("Preparing '"+d.code+"' for ad-server call.");if(null===
document.getElementById(d.code))return f("Missing DOM element '"+d.code+"' for auctioned ad-unit. Skipping in ad server refresh."),!1;if(0===d.sizes.length&&0===d.sizesDFP.length)return f("Ad unit '"+d.name+"' has no sizes. Skipping in ad server refresh."),!1;if(-1===c.adUnitHasAdSlot.indexOf(d.code)){e("Creating new ad-slot for '"+d.code+"': "+d.sizesDFP.map(function(a){return"["+a+"]"}).join(", "));var g=googletag.defineSlot(d.path,d.sizesDFP,d.code).addService(googletag.pubads());a.callModulesStageFunctions("onAdSlotCreation",
{adUnit:d,adSlot:g});r(g);googletag.display(d.code);h.push(g);c.adUnitHasAdSlot.push(d.code)}else b.forEach(function(a){if(d.code===a.getSlotElementId()){r(a);var b=l(d.code);e("Using already existing ad-slot for '"+d.code+" : "+b.map(function(a){return"["+a+"]"}).join(", "));h.push(a)}});c.adUnitAdSlotToRender.push(d.code)});g.refreshAdServer.timeStarted=(new Date).getTime();d.refreshAllAdSlots?(e("Calling ad-server for all available ad-slots: ",googletag.pubads().getSlots()),googletag.pubads().refresh()):
(e("Calling ad-server for selected ad-slots only: ",h),googletag.pubads().refresh(h));a.callModulesStageFunctions("postAdServer");g.initAdServer.timeEnded=(new Date).getTime();e("Ad server called.");a.startAdSlotRenderingEndedGracePeriod()})})};
snhb.startAuction=function(a){var b=snhb.localSettings,c=b.auction,d=b.adUnits,e=b.system;b=snhb.console;var f=b.debug,g=b.warn,l=snhb.system;if(!a||a.constructor===Array&&0===a.length)a=snhb.getAllAvailableAdUnitNames();if(c.running){g("There is already an auction running, currently unable to start a new auction for ",a);for(b=0;b<a.length;b++){e=a[b];var k=c.queuedAdUnits;-1===k.indexOf(e)&&k.push(e)}f("Queuing auction for ",c.queuedAdUnits);return!1}f("Starting auction for ",a);c.running=!0;snhb.metrics.auction=
{auction:{timeStarted:(new Date).getTime()},bidding:{timeStarted:(new Date).getTime()},initAdServer:{},refreshAdServer:{}};l.callModulesStageFunctions("preAuction");(function(a){var b=function(a,b){for(var c=0;c<b.length;c++){var d=b[c];d=a.constructor===Array&&d.constructor===Array&&2===a.length&&2===d.length&&a[0]===d[0]&&a[1]===d[1]?!0:!1;if(d)return!0}return!1},e=function(a,c){var d=function(a,c,d){a&&c&&a.forEach(function(a){b(a,c)||(c.push(a),d&&d.push(a))})},e=function(a,b,c){var e={prebid:[],
DFP:[]};if(void 0!==a)for(var f=0;f<a.length;f++){var g=a[f],h=g.query;(!h.maxWidth||b<=h.maxWidth)&&(!h.minWidth||b>=h.minWidth)&&(!h.maxHeight||c<=h.maxHeight)&&(!h.minHeight||c>=h.minHeight)&&(d(g.sizes,e.prebid,e.DFP),d(g.additionalDFPSizes,e.DFP))}return e};c.sizes=[];c.sizesDFP=[];if(a.sizeMapping&&0<a.sizeMapping.length){f("Found sizemapping for '"+a.name+"'");var h=window.innerWidth||document.documentElement.clientWidth||document.body.clientWidth,k=window.innerHeight||document.documentElement.clientHeight||
document.body.clientHeight;f("Detected inner width: "+h+"px");e=e(a.sizeMapping,h,k);c.sizes=e.prebid;c.sizesDFP=e.DFP;0>=c.sizes.length&&0>=c.sizesDFP.length&&g("No sizes matched the sizemapping for '"+a.name+"' and "+h+"px.")}else a.sizes&&(d(a.sizes,c.sizes,c.sizesDFP),d(a.additionalDFPSizes,c.sizesDFP),0>=c.sizes.length&&g("No hb sizes set for '"+a.name+"'"));c.mediaTypes={banner:{sizes:c.sizes}};0>=c.sizes.length&&0>=c.sizesDFP.length?g("No sizes available for '"+a.name+"'."):(h=function(b,c){f("'"+
a.name+"' "+c+" sizes:",b.map(function(a){return"["+a+"]"}).join(", "))},h(c.sizes,"pbjs"),h(c.sizesDFP,"gpt"))},h=function(a){if(!a||!a.inc&&!a.exc)return!0;var b=function(a){if(a)return a="string"===typeof a?[a]:a,-1!==a.indexOf(snhb.baseSettings.cy)},c=b(a.inc);return void 0!==c?c:!b(a.exc)};f("Initializing ad units: ",a);c.adUnits=[];var k=l.getABTestcase();a.forEach(function(a){d.forEach(function(d){if(a===d.name){var g=d.platform;if((!g||"all"===g||g===c.platform)&&h(d.geo)){if(d.abTest){if(d.abTest.toLowerCase()!==
k)return!0;f(k.toUpperCase()+"-Testing '"+d.name+"'")}d.timesAuctioned++;var m={name:d.name,path:d.path,code:d.code||l.updateAdUnitCode(d),bids:[]};e(d,m);d.bidderPool.forEach(function(a){var c=!1;snhb.modules.autorefresh&&(c=snhb.modules.autorefresh.isBidderBlacklisted(d,a.bidder));!c&&snhb.modules.ssr&&(c=snhb.modules.ssr.isBidderBlacklisted(d,a.bidder));if(!c){c=!0;if(a.sizes&&0<a.sizes.length){c=!1;for(var e=0;e<a.sizes.length;e++)if(b(a.sizes[e],m.sizes)){c=!0;break}}c&&h(a.geo)&&m.bids.push({bidder:a.bidder,
params:a.params})}});snhb.modules.autorefresh&&snhb.modules.autorefresh.disableQueuedRefresh(m.name);c.adUnits.push(m)}}})})})(a.constructor!==Array?[a]:a);l.callModulesStageFunctions("preBidding");if(c.adUnits&&c.adUnits.constructor===Array&&0<c.adUnits.length){f("Starting bidding...");f("Bidding platform: "+c.platform);f("Bidding timout: "+c.timeout+"ms");if(e.debugOutputEnabled)for(b=0;b<c.adUnits.length;b++)f("Bidding for ad unit: "+c.adUnits[b].code+": "+c.adUnits[b].sizes.map(function(a){return"["+
a+"]"}).join(", "));snhb.metrics.auctionEnd={bidResponses:[],highestBidResponses:[],winningBids:[]};l.callModulesStageFunctions("postBidding");f("Bidding over. Calling ad server...");snhb.metrics.auction.bidding.timeEnded=(new Date).getTime()}else g("No ad units available for this auction. Skipping bidding and continuing to ad server call..."),c.queuedAdUnits=[];!0===e.autoInitAdServer?snhb.initAdServer():g("Automatic ad server refreshing disabled. Use snhb.initAdServer() to manually refresh it.")};
(function(a,b){var c=b.system,d=b.metrics.system;a=b.console;var e=a.debug,f=a.warn;a=b.localSettings;var g=a.auction,l=function(){adsbygoogle.pauseAdRequests=0;c.pushCallback(b.queue,function(){c.processQueue(b.queue)});if(k.autoStartAuction)c.processQueue(b.queue),b.startAuction();else return f("Automatic auction starting disabled. Use snhb.snhb.getAllAvailableAdUnitNames() and snhb.startAuction([adUnitNames]) to manually start auctions."),c.processQueue(b.queue),googletag.cmd.push(function(){var a=
g.additionalAdSlotsToRefresh;if(a){var b=a.length;0<b&&(f(b+" passed ad-slot"+(1<b?"s":"")+" detected. Calling ad-server."),googletag.pubads().refresh(a),delete g.additionalAdSlotsToRefresh)}}),!1};c.initAdUnitSettings();c.initSystemSettings();c.initAuctionSettings();c.parseOptions();c.initModules();var k=a.system;c.loadScript(k.snhbGlobalSettingsURL,"global settings","loadGlobalSettings",function(){d.loadGlobalSettings.timeEnded=(new Date).getTime();e("Bootstrapping done.");b.globalSettings||(f("Could not load global config. Using fallback."),
b.globalSettings={fallback:!0});g.bidders=c.getAllBidders();adconsent&&adconsent("setConsentRegion",0);e("Header bidding boilerplate loaded and ready.");l()});googletag&&googletag.apiReady?(d.loadGPT={timeStarted:(new Date).getTime()},e("Gpt already loaded. Skipping loading...")):c.loadScript(k.gptURL,"gpt","loadGPT");googletag.cmd.push(function(){d.loadGPT.timeEnded=(new Date).getTime();e("gpt "+googletag.getVersion()+" ready.");googletag.pubads().disableInitialLoad();googletag.pubads().enableAsyncRendering();
googletag.pubads().enableSingleRequest();googletag.pubads().collapseEmptyDivs();googletag.enableServices();googletag.pubads().addEventListener("slotRenderEnded",function(a){a=a.slot.getSlotElementId();var b=g.adUnitAdSlotToRender;if(b){var d=b.indexOf(a);-1!==d&&(e("Ad slot for '"+a+"' successfully rendered."),b.splice(d,1),c.checkAdSlotRenderingEnded())}})})})(document,snhb);
