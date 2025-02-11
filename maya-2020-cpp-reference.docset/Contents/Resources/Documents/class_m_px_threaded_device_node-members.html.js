var topic = "<!-- saved from url=(0024)http://docs.autodesk.com -->\n\
<html>\n\
   <head><script src=\"../scripts/yepnope.1.5.4-min.js\" type=\"text/javascript\"></script><script src=\"../scripts/lib/jquery-1.11.1.min.js\" type=\"text/javascript\"></script>\n\
      <title>C++ API Reference: Member List</title>\n\
      \n\
	  \n\
      \n\
      \n\
      \n\
      \n\
      \n\
      \n\
      \n\
    \n\
\n\
</head>\n\
   <body height=\"100%\"><div class=\"body_content\" id=\"body-content\"><link rel=\"stylesheet\" type=\"text/css\" href=\"cpp_ref/navtree.css\"><link rel=\"stylesheet\" type=\"text/css\" href=\"cpp_ref/doxygen.css\"><link rel=\"stylesheet\" type=\"text/css\" href=\"cpp_ref/tabs.css\"><link rel=\"stylesheet\" type=\"text/css\" href=\"style/adsk.cpm.css\"><script type=\"text/javascript\">\n\
var tocSystemNeedsToBeLoaded = typeof(cpp_ref_adsk_ref_toc) == \'undefined\';\n\
var weAreIn21 = $(\'div#main.view-active\').length;\n\
var tocPrefix = \'\';\n\
if (weAreIn21)\n\
{ tocPrefix = \'cpp_ref/\'; }\n\
function cpp_ref_initializeToc(forceTrigger) {\n\
    cpp_ref_adsk_ref_toc.initResizable();\n\
    cpp_ref_adsk_ref_toc.initNavTree(\'class_m_px_threaded_device_node-members.html\', tocPrefix);\n\
    dQuery(document).trigger(\'toc_initialized\');\n\
}\n\
if (tocSystemNeedsToBeLoaded)\n\
{\n\
	yepnope([{\n\
	load:[tocPrefix + \'json3.min.js\', tocPrefix + \'jquery.js\', tocPrefix + \'ref-toc-controller.js\', tocPrefix + \'dynsections.js\'],\n\
	complete: function() {\n\
	  if (typeof(dQuery) == \'undefined\')\n\
	  {\n\
	    dQuery = jQuery.noConflict(true);\n\
	  }\n\
	  else { jQuery.noConflict(true); }\n\
	  $(document).ready(cpp_ref_initializeToc);\n\
	}\n\
 	}])\n\
}\n\
if (!weAreIn21) { // if in AKN...\n\
$(window).load( function() {\n\
    setTimeout( function() {\n\
        var content = $(\'body > div\').not(\'#body-content\');     // take any divs under body that are not id=body-content\n\
        content.each( function() { \n\
            $(this).css( { \'padding-left\': $(this).css(\'margin-left\') } );       // and if they have any padding-left already, move it to margin-left.\n\
        } );\n\
        var width = cpp_ref_adsk_ref_toc.readFromStorage(\'width\');\n\
        content.css({marginLeft:parseInt(width)+6+\"px\"});\n\
    }, 100);\n\
} ); \n\
}\n\
</script><script>\n\
 if (!tocSystemNeedsToBeLoaded) { cpp_ref_initializeToc(); }\n\
 </script>\n\
      <div><div class=\"related-links\">\n\
         <div class=\"head\">\n\
            <h1>C++ API Reference: Member List</h1>\n\
         </div>\n\
\n\
<div id=\"top\"><!-- do not remove this div, it is closed by doxygen! -->\n\
\n\
<!-- end header part -->\n\
<!-- Generated by Doxygen 1.8.10 -->\n\
\n\
  <div id=\"navrow1\" class=\"tabs\">\n\
    <ul class=\"tablist\">\n\
      <li><a href=\"#!/url=./cpp_ref/index.html\"><span>Main&#160;Page</span></a></li>\n\
      <li><a href=\"#!/url=./cpp_ref/pages.html\"><span>Related&#160;Pages</span></a></li>\n\
      <li><a href=\"#!/url=./cpp_ref/modules.html\"><span>Modules</span></a></li>\n\
      <li><a href=\"#!/url=./cpp_ref/namespaces.html\"><span>Namespaces</span></a></li>\n\
      <li class=\"current\"><a href=\"#!/url=./cpp_ref/annotated.html\"><span>Classes</span></a></li>\n\
      <li><a href=\"#!/url=./cpp_ref/examples.html\"><span>Examples</span></a></li>\n\
      <li>\n\
        <div id=\"MSearchBox\" class=\"MSearchBoxInactive\">\n\
        <span class=\"left\">\n\
          <img id=\"MSearchSelect\" src=\"cpp_ref/search/mag_sel.png\" onmouseover=\"return searchBox.OnSearchSelectShow()\" onmouseout=\"return searchBox.OnSearchSelectHide()\" alt=\"\">\n\
          <input type=\"text\" id=\"MSearchField\" value=\"Search\" accesskey=\"S\" onfocus=\"searchBox.OnSearchFieldFocus(true)\" onblur=\"searchBox.OnSearchFieldFocus(false)\" onkeyup=\"searchBox.OnSearchFieldChange(event)\">\n\
          </span><span class=\"right\">\n\
            <a id=\"MSearchClose\" href=\"javascript:searchBox.CloseResultsWindow()\"><img id=\"MSearchCloseImg\" border=\"0\" src=\"cpp_ref/search/close.png\" alt=\"\"></a>\n\
          </span>\n\
        </div>\n\
      </li>\n\
    </ul>\n\
  </div>\n\
  <div id=\"navrow2\" class=\"tabs2\">\n\
    <ul class=\"tablist\">\n\
      <li><a href=\"#!/url=./cpp_ref/annotated.html\"><span>Class&#160;List</span></a></li>\n\
      <li><a href=\"#!/url=./cpp_ref/classes.html\"><span>Class&#160;Index</span></a></li>\n\
      <li><a href=\"#!/url=./cpp_ref/hierarchy.html\"><span>Class&#160;Hierarchy</span></a></li>\n\
      <li><a href=\"#!/url=./cpp_ref/functions.html\"><span>Class&#160;Members</span></a></li>\n\
    </ul>\n\
  </div>\n\
</div><!-- top -->\n\
<div id=\"side-nav\" class=\"ui-resizable side-nav-resizable\">\n\
  <div id=\"nav-tree\">\n\
    <div id=\"nav-tree-contents\">\n\
      <div id=\"nav-sync\" class=\"sync\"></div>\n\
    </div>\n\
  </div>\n\
  <div id=\"splitbar\" style=\"-moz-user-select:none;\" class=\"ui-resizable-handle\">\n\
  </div>\n\
</div>\n\
\n\
<div id=\"doc-content\">\n\
<!-- window showing the filter options -->\n\
\n\
\n\
<!-- iframe showing the search results (closed by default) -->\n\
\n\
\n\
<div class=\"header\">\n\
  <div class=\"headertitle\">\n\
<div class=\"title\">MPxThreadedDeviceNode Member List</div>  </div>\n\
</div><!--header-->\n\
<div class=\"contents\">\n\
\n\
<p>This is the complete list of members for <a class=\"el\" href=\"#!/url=./cpp_ref/class_m_px_threaded_device_node.html\">MPxThreadedDeviceNode</a>, including all inherited members.</p>\n\
<table class=\"directory\">\n\
  <tr class=\"even\"><td class=\"entry\"><a class=\"el\" href=\"#!/url=./cpp_ref/class_m_px_node.html#a9c932a98c4a7eca38372c8a0b84cec0f\">_forceCache</a>(const MDGContext &amp;)</td><td class=\"entry\"><a class=\"el\" href=\"#!/url=./cpp_ref/class_m_px_node.html\">MPxNode</a></td><td class=\"entry\"></td></tr>\n\
  <tr><td class=\"entry\"><a class=\"el\" href=\"#!/url=./cpp_ref/class_m_px_node.html#a8698b3c96dd363071325966d592d5e7b\">_setMPSafe</a>(bool isMPSafe)</td><td class=\"entry\"><a class=\"el\" href=\"#!/url=./cpp_ref/class_m_px_node.html\">MPxNode</a></td><td class=\"entry\"></td></tr>\n\
  <tr class=\"even\"><td class=\"entry\"><a class=\"el\" href=\"#!/url=./cpp_ref/class_m_px_threaded_device_node.html#ad15a856113974367521f3862ad5587e4\">acquireDataStorage</a>(MCharBuffer &amp;buffer)</td><td class=\"entry\"><a class=\"el\" href=\"#!/url=./cpp_ref/class_m_px_threaded_device_node.html\">MPxThreadedDeviceNode</a></td><td class=\"entry\"></td></tr>\n\
  <tr><td class=\"entry\"><a class=\"el\" href=\"#!/url=./cpp_ref/class_m_px_node.html#a837094252166c0b365fafb53e4a0203b\">addAttribute</a>(const MObject &amp;attr)</td><td class=\"entry\"><a class=\"el\" href=\"#!/url=./cpp_ref/class_m_px_node.html\">MPxNode</a></td><td class=\"entry\"><span class=\"mlabel\">static</span></td></tr>\n\
  <tr class=\"even\"><td class=\"entry\"><a class=\"el\" href=\"#!/url=./cpp_ref/class_m_px_node.html#adcdb8e347afea83dbabcde3fe81fb853\">addExternalContentForFileAttr</a>(MExternalContentInfoTable &amp;, const MObject &amp;attr) const </td><td class=\"entry\"><a class=\"el\" href=\"#!/url=./cpp_ref/class_m_px_node.html\">MPxNode</a></td><td class=\"entry\"></td></tr>\n\
  <tr><td class=\"entry\"><a class=\"el\" href=\"#!/url=./cpp_ref/class_m_px_node.html#aef755adb241fbe273368fefae14047a4\">attributeAffects</a>(const MObject &amp;whenChanges, const MObject &amp;isAffected)</td><td class=\"entry\"><a class=\"el\" href=\"#!/url=./cpp_ref/class_m_px_node.html\">MPxNode</a></td><td class=\"entry\"><span class=\"mlabel\">static</span></td></tr>\n\
  <tr class=\"even\"><td class=\"entry\"><a class=\"el\" href=\"#!/url=./cpp_ref/class_m_px_node.html#a214deb1c971a5879657c8b1de4156422\">attributeAffects</a>(const MObject &amp;whenChanges, const MObject &amp;isAffected, bool affectsTopology)</td><td class=\"entry\"><a class=\"el\" href=\"#!/url=./cpp_ref/class_m_px_node.html\">MPxNode</a></td><td class=\"entry\"><span class=\"mlabel\">static</span></td></tr>\n\
  <tr><td class=\"entry\"><a class=\"el\" href=\"#!/url=./cpp_ref/class_m_px_threaded_device_node.html#a234b41568c6e4c76c7f3fe1ce4337ecd\">beginThreadLoop</a>()</td><td class=\"entry\"><a class=\"el\" href=\"#!/url=./cpp_ref/class_m_px_threaded_device_node.html\">MPxThreadedDeviceNode</a></td><td class=\"entry\"></td></tr>\n\
  <tr class=\"even\"><td class=\"entry\"><a class=\"el\" href=\"#!/url=./cpp_ref/class_m_px_node.html#a2415a0b1d38a0f851f801c4a18181f91\">caching</a></td><td class=\"entry\"><a class=\"el\" href=\"#!/url=./cpp_ref/class_m_px_node.html\">MPxNode</a></td><td class=\"entry\"><span class=\"mlabel\">static</span></td></tr>\n\
  <tr><td class=\"entry\"><a class=\"el\" href=\"#!/url=./cpp_ref/class_m_px_threaded_device_node.html#a774cd5d8fbebe8e7ed82a5aa587d1f04\">className</a>()</td><td class=\"entry\"><a class=\"el\" href=\"#!/url=./cpp_ref/class_m_px_threaded_device_node.html\">MPxThreadedDeviceNode</a></td><td class=\"entry\"><span class=\"mlabel\">static</span></td></tr>\n\
  <tr class=\"even\"><td class=\"entry\"><a class=\"el\" href=\"#!/url=./cpp_ref/class_m_px_node.html#a6e1aa1e50774080d5aee55f20ffa5503\">compute</a>(const MPlug &amp;, MDataBlock &amp;)</td><td class=\"entry\"><a class=\"el\" href=\"#!/url=./cpp_ref/class_m_px_node.html\">MPxNode</a></td><td class=\"entry\"><span class=\"mlabel\">virtual</span></td></tr>\n\
  <tr><td class=\"entry\"><a class=\"el\" href=\"#!/url=./cpp_ref/class_m_px_node.html#af7be6b397b65f1a96b201e899c923d12\">configCache</a>(const MEvaluationNode &amp;, MCacheSchema &amp;) const </td><td class=\"entry\"><a class=\"el\" href=\"#!/url=./cpp_ref/class_m_px_node.html\">MPxNode</a></td><td class=\"entry\"><span class=\"mlabel\">virtual</span></td></tr>\n\
  <tr class=\"even\"><td class=\"entry\"><a class=\"el\" href=\"#!/url=./cpp_ref/class_m_px_node.html#ac2493af8700f32f6bc164414ac2b906d\">connectionBroken</a>(const MPlug &amp;, const MPlug &amp;, bool asSrc)</td><td class=\"entry\"><a class=\"el\" href=\"#!/url=./cpp_ref/class_m_px_node.html\">MPxNode</a></td><td class=\"entry\"><span class=\"mlabel\">virtual</span></td></tr>\n\
  <tr><td class=\"entry\"><a class=\"el\" href=\"#!/url=./cpp_ref/class_m_px_node.html#a82d0d0e95d46b8f41c4fd4bea409c1b3\">connectionMade</a>(const MPlug &amp;, const MPlug &amp;, bool asSrc)</td><td class=\"entry\"><a class=\"el\" href=\"#!/url=./cpp_ref/class_m_px_node.html\">MPxNode</a></td><td class=\"entry\"><span class=\"mlabel\">virtual</span></td></tr>\n\
  <tr class=\"even\"><td class=\"entry\"><a class=\"el\" href=\"#!/url=./cpp_ref/class_m_px_node.html#aca0f48b1467c0e3dc8643a18b0b855da\">copyInternalData</a>(MPxNode *)</td><td class=\"entry\"><a class=\"el\" href=\"#!/url=./cpp_ref/class_m_px_node.html\">MPxNode</a></td><td class=\"entry\"><span class=\"mlabel\">virtual</span></td></tr>\n\
  <tr><td class=\"entry\"><a class=\"el\" href=\"#!/url=./cpp_ref/class_m_px_threaded_device_node.html#a9776f59ee6144e7a1e2850011982f95d\">createMemoryPools</a>(int nCount, int nElements, long nSize)</td><td class=\"entry\"><a class=\"el\" href=\"#!/url=./cpp_ref/class_m_px_threaded_device_node.html\">MPxThreadedDeviceNode</a></td><td class=\"entry\"></td></tr>\n\
  <tr class=\"even\"><td class=\"entry\"><a class=\"el\" href=\"#!/url=./cpp_ref/class_m_px_node.html#a9af8c4dfe96f9f03b7edd22be9dcd79a\">dependsOn</a>(const MPlug &amp;, const MPlug &amp;, bool &amp;depends) const </td><td class=\"entry\"><a class=\"el\" href=\"#!/url=./cpp_ref/class_m_px_node.html\">MPxNode</a></td><td class=\"entry\"><span class=\"mlabel\">virtual</span></td></tr>\n\
  <tr><td class=\"entry\"><a class=\"el\" href=\"#!/url=./cpp_ref/class_m_px_threaded_device_node.html#abe6b6103042d20629ad1919a2935bb4e\">destroyMemoryPools</a>()</td><td class=\"entry\"><a class=\"el\" href=\"#!/url=./cpp_ref/class_m_px_threaded_device_node.html\">MPxThreadedDeviceNode</a></td><td class=\"entry\"></td></tr>\n\
  <tr class=\"even\"><td class=\"entry\"><a class=\"el\" href=\"#!/url=./cpp_ref/class_m_px_node.html#a50cd371a9d27927032cd8dc6fd3f4710\">doNotWrite</a>(MStatus *ReturnStatus=NULL) const </td><td class=\"entry\"><a class=\"el\" href=\"#!/url=./cpp_ref/class_m_px_node.html\">MPxNode</a></td><td class=\"entry\"><span class=\"mlabel\">protected</span><span class=\"mlabel\">virtual</span></td></tr>\n\
  <tr><td class=\"entry\"><a class=\"el\" href=\"#!/url=./cpp_ref/class_m_px_threaded_device_node.html#aa44757b7a745866e76744c1f9fe44750\">endThreadLoop</a>()</td><td class=\"entry\"><a class=\"el\" href=\"#!/url=./cpp_ref/class_m_px_threaded_device_node.html\">MPxThreadedDeviceNode</a></td><td class=\"entry\"></td></tr>\n\
  <tr class=\"even\"><td class=\"entry\"><a class=\"el\" href=\"#!/url=./cpp_ref/class_m_px_node.html#a869cac8317d1de1582d987093cdf2a61\">existWithoutInConnections</a>(MStatus *ReturnStatus=NULL) const </td><td class=\"entry\"><a class=\"el\" href=\"#!/url=./cpp_ref/class_m_px_node.html\">MPxNode</a></td><td class=\"entry\"><span class=\"mlabel\">virtual</span></td></tr>\n\
  <tr><td class=\"entry\"><a class=\"el\" href=\"#!/url=./cpp_ref/class_m_px_node.html#adc771613d9e8b85f9c00673473649521\">existWithoutOutConnections</a>(MStatus *ReturnStatus=NULL) const </td><td class=\"entry\"><a class=\"el\" href=\"#!/url=./cpp_ref/class_m_px_node.html\">MPxNode</a></td><td class=\"entry\"><span class=\"mlabel\">virtual</span></td></tr>\n\
  <tr class=\"even\"><td class=\"entry\"><a class=\"el\" href=\"#!/url=./cpp_ref/class_m_px_node.html#af455f77823c8e3803db82c9f80f2231b\">forceCache</a>()</td><td class=\"entry\"><a class=\"el\" href=\"#!/url=./cpp_ref/class_m_px_node.html\">MPxNode</a></td><td class=\"entry\"><span class=\"mlabel\">protected</span><span class=\"mlabel\">virtual</span></td></tr>\n\
  <tr><td class=\"entry\"><a class=\"el\" href=\"#!/url=./cpp_ref/class_m_px_node.html#aad11c80afa08f06d2ff9a0058b8e6152\">forceCache</a>(const MDGContext &amp;)</td><td class=\"entry\"><a class=\"el\" href=\"#!/url=./cpp_ref/class_m_px_node.html\">MPxNode</a></td><td class=\"entry\"><span class=\"mlabel\">protected</span><span class=\"mlabel\">virtual</span></td></tr>\n\
  <tr class=\"even\"><td class=\"entry\"><a class=\"el\" href=\"#!/url=./cpp_ref/class_m_px_threaded_device_node.html#aa649279092e8091af1858e983fcaf13f\">frameRate</a></td><td class=\"entry\"><a class=\"el\" href=\"#!/url=./cpp_ref/class_m_px_threaded_device_node.html\">MPxThreadedDeviceNode</a></td><td class=\"entry\"><span class=\"mlabel\">static</span></td></tr>\n\
  <tr><td class=\"entry\"><a class=\"el\" href=\"#!/url=./cpp_ref/class_m_px_node.html#a73c48c31ea4fca53d389e96e5aadbb8f\">frozen</a></td><td class=\"entry\"><a class=\"el\" href=\"#!/url=./cpp_ref/class_m_px_node.html\">MPxNode</a></td><td class=\"entry\"><span class=\"mlabel\">static</span></td></tr>\n\
  <tr class=\"even\"><td class=\"entry\"><a class=\"el\" href=\"#!/url=./cpp_ref/class_m_px_node.html#a6f70ff175ac7ba65cb65aa3b5592f05b\">getCacheSetup</a>(const MEvaluationNode &amp;, MNodeCacheDisablingInfo &amp;, MNodeCacheSetupInfo &amp;, MObjectArray &amp;) const </td><td class=\"entry\"><a class=\"el\" href=\"#!/url=./cpp_ref/class_m_px_node.html\">MPxNode</a></td><td class=\"entry\"><span class=\"mlabel\">virtual</span></td></tr>\n\
  <tr><td class=\"entry\"><a class=\"el\" href=\"#!/url=./cpp_ref/class_m_px_node.html#abfc494661ea0f7f957a9e437cebb2642\">getExternalContent</a>(MExternalContentInfoTable &amp;table) const </td><td class=\"entry\"><a class=\"el\" href=\"#!/url=./cpp_ref/class_m_px_node.html\">MPxNode</a></td><td class=\"entry\"><span class=\"mlabel\">virtual</span></td></tr>\n\
  <tr class=\"even\"><td class=\"entry\"><a class=\"el\" href=\"#!/url=./cpp_ref/class_m_px_node.html#aae473f13648099a8046a067e45d35a2d\">getFilesToArchive</a>(bool shortName=false, bool unresolvedName=false, bool markCouldBeImageSequence=false) const </td><td class=\"entry\"><a class=\"el\" href=\"#!/url=./cpp_ref/class_m_px_node.html\">MPxNode</a></td><td class=\"entry\"><span class=\"mlabel\">virtual</span></td></tr>\n\
  <tr><td class=\"entry\"><a class=\"el\" href=\"#!/url=./cpp_ref/class_m_px_node.html#aa88f4dd4cfd3e964e0806d6e5b253347\">getInternalValue</a>(const MPlug &amp;, MDataHandle &amp;)</td><td class=\"entry\"><a class=\"el\" href=\"#!/url=./cpp_ref/class_m_px_node.html\">MPxNode</a></td><td class=\"entry\"><span class=\"mlabel\">virtual</span></td></tr>\n\
  <tr class=\"even\"><td class=\"entry\"><a class=\"el\" href=\"#!/url=./cpp_ref/class_m_px_node.html#a69e8d487996ce0ab41fae7ce99498764\">getInternalValueInContext</a>(const MPlug &amp;, MDataHandle &amp;, MDGContext &amp;)</td><td class=\"entry\"><a class=\"el\" href=\"#!/url=./cpp_ref/class_m_px_node.html\">MPxNode</a></td><td class=\"entry\"><span class=\"mlabel\">virtual</span></td></tr>\n\
  <tr><td class=\"entry\"><a class=\"el\" href=\"#!/url=./cpp_ref/class_m_px_node.html#a16261c8f144b5ff3b27057602831138e\">hasInvalidationRangeTransformation</a>() const </td><td class=\"entry\"><a class=\"el\" href=\"#!/url=./cpp_ref/class_m_px_node.html\">MPxNode</a></td><td class=\"entry\"></td></tr>\n\
  <tr class=\"even\"><td class=\"entry\"><a class=\"el\" href=\"#!/url=./cpp_ref/class_m_px_node.html#a938700a96e8c37da6027fad6e3373c04\">inheritAttributesFrom</a>(const MString &amp;parentClassName)</td><td class=\"entry\"><a class=\"el\" href=\"#!/url=./cpp_ref/class_m_px_node.html\">MPxNode</a></td><td class=\"entry\"><span class=\"mlabel\">static</span></td></tr>\n\
  <tr><td class=\"entry\"><a class=\"el\" href=\"#!/url=./cpp_ref/class_m_px_node.html#ac6bea264655616f6d6d47dec0c4ecc46\">internalArrayCount</a>(const MPlug &amp;) const </td><td class=\"entry\"><a class=\"el\" href=\"#!/url=./cpp_ref/class_m_px_node.html\">MPxNode</a></td><td class=\"entry\"><span class=\"mlabel\">virtual</span></td></tr>\n\
  <tr class=\"even\"><td class=\"entry\"><a class=\"el\" href=\"#!/url=./cpp_ref/class_m_px_node.html#a1adbb259ff7f9a698ae86a51c6f621a4\">internalArrayCount</a>(const MPlug &amp;, const MDGContext &amp;) const </td><td class=\"entry\"><a class=\"el\" href=\"#!/url=./cpp_ref/class_m_px_node.html\">MPxNode</a></td><td class=\"entry\"><span class=\"mlabel\">virtual</span></td></tr>\n\
  <tr><td class=\"entry\"><a class=\"el\" href=\"#!/url=./cpp_ref/class_m_px_node.html#abf966a89078baf354c95638086e19d7a\">isAbstractClass</a>() const </td><td class=\"entry\"><a class=\"el\" href=\"#!/url=./cpp_ref/class_m_px_node.html\">MPxNode</a></td><td class=\"entry\"><span class=\"mlabel\">virtual</span></td></tr>\n\
  <tr class=\"even\"><td class=\"entry\"><a class=\"el\" href=\"#!/url=./cpp_ref/class_m_px_threaded_device_node.html#a24beba0063342077126e7575788f7c11\">isDone</a>()</td><td class=\"entry\"><a class=\"el\" href=\"#!/url=./cpp_ref/class_m_px_threaded_device_node.html\">MPxThreadedDeviceNode</a></td><td class=\"entry\"></td></tr>\n\
  <tr><td class=\"entry\"><a class=\"el\" href=\"#!/url=./cpp_ref/class_m_px_node.html#aca1ef7f3910c1afb1766960fa2a5375d\">isHistoricallyInteresting</a></td><td class=\"entry\"><a class=\"el\" href=\"#!/url=./cpp_ref/class_m_px_node.html\">MPxNode</a></td><td class=\"entry\"><span class=\"mlabel\">static</span></td></tr>\n\
  <tr class=\"even\"><td class=\"entry\"><a class=\"el\" href=\"#!/url=./cpp_ref/class_m_px_threaded_device_node.html#a7e6cf4dc0ec100140efa5a405015b2a6\">isLive</a>()</td><td class=\"entry\"><a class=\"el\" href=\"#!/url=./cpp_ref/class_m_px_threaded_device_node.html\">MPxThreadedDeviceNode</a></td><td class=\"entry\"></td></tr>\n\
  <tr><td class=\"entry\"><a class=\"el\" href=\"#!/url=./cpp_ref/class_m_px_node.html#ac24fcf77203181163ad3e581645f5d3b\">isPassiveOutput</a>(const MPlug &amp;) const </td><td class=\"entry\"><a class=\"el\" href=\"#!/url=./cpp_ref/class_m_px_node.html\">MPxNode</a></td><td class=\"entry\"><span class=\"mlabel\">virtual</span></td></tr>\n\
  <tr class=\"even\"><td class=\"entry\"><a class=\"el\" href=\"#!/url=./cpp_ref/class_m_px_node.html#a9e054d22b4addd21d5b92c969a7a1ee6\">isTrackingTopology</a>() const </td><td class=\"entry\"><a class=\"el\" href=\"#!/url=./cpp_ref/class_m_px_node.html\">MPxNode</a></td><td class=\"entry\"><span class=\"mlabel\">virtual</span></td></tr>\n\
  <tr><td class=\"entry\"><a class=\"el\" href=\"#!/url=./cpp_ref/class_m_px_node.html#ad4a9dabb4ab821f67b0db6d2ee02b399\">legalConnection</a>(const MPlug &amp;, const MPlug &amp;, bool asSrc, bool &amp;isLegal) const </td><td class=\"entry\"><a class=\"el\" href=\"#!/url=./cpp_ref/class_m_px_node.html\">MPxNode</a></td><td class=\"entry\"><span class=\"mlabel\">virtual</span></td></tr>\n\
  <tr class=\"even\"><td class=\"entry\"><a class=\"el\" href=\"#!/url=./cpp_ref/class_m_px_node.html#a2ce5a410752aed82613f1cad8021d220\">legalDisconnection</a>(const MPlug &amp;, const MPlug &amp;, bool asSrc, bool &amp;isLegal) const </td><td class=\"entry\"><a class=\"el\" href=\"#!/url=./cpp_ref/class_m_px_node.html\">MPxNode</a></td><td class=\"entry\"><span class=\"mlabel\">virtual</span></td></tr>\n\
  <tr><td class=\"entry\"><a class=\"el\" href=\"#!/url=./cpp_ref/class_m_px_threaded_device_node.html#a140a966de9f00ca34d2864971a8426c4\">live</a></td><td class=\"entry\"><a class=\"el\" href=\"#!/url=./cpp_ref/class_m_px_threaded_device_node.html\">MPxThreadedDeviceNode</a></td><td class=\"entry\"><span class=\"mlabel\">static</span></td></tr>\n\
  <tr class=\"even\"><td class=\"entry\"><a class=\"el\" href=\"#!/url=./cpp_ref/class_m_px_node.html#ac4a5de65a3a8f057ea39cd749d38971e\">message</a></td><td class=\"entry\"><a class=\"el\" href=\"#!/url=./cpp_ref/class_m_px_node.html\">MPxNode</a></td><td class=\"entry\"><span class=\"mlabel\">static</span></td></tr>\n\
  <tr><td class=\"entry\"><a class=\"el\" href=\"#!/url=./cpp_ref/class_m_px_node.html#a48ffd6b0fe3d500d9954ccc623b3ec0e\">MPxNode</a>()</td><td class=\"entry\"><a class=\"el\" href=\"#!/url=./cpp_ref/class_m_px_node.html\">MPxNode</a></td><td class=\"entry\"></td></tr>\n\
  <tr class=\"even\"><td class=\"entry\"><a class=\"el\" href=\"#!/url=./cpp_ref/class_m_px_threaded_device_node.html#a5fdd917a378846fa0f8be51369a9a7cd\">MPxThreadedDeviceNode</a>()</td><td class=\"entry\"><a class=\"el\" href=\"#!/url=./cpp_ref/class_m_px_threaded_device_node.html\">MPxThreadedDeviceNode</a></td><td class=\"entry\"></td></tr>\n\
  <tr><td class=\"entry\"><a class=\"el\" href=\"#!/url=./cpp_ref/class_m_px_node.html#aca2cba4630391c78dcf1a828986160da\">name</a>() const </td><td class=\"entry\"><a class=\"el\" href=\"#!/url=./cpp_ref/class_m_px_node.html\">MPxNode</a></td><td class=\"entry\"><span class=\"mlabel\">virtual</span></td></tr>\n\
  <tr class=\"even\"><td class=\"entry\"><a class=\"el\" href=\"#!/url=./cpp_ref/class_m_px_node.html#a8d91949acf0aac099d77b45a40902c44\">OPENMAYA_ENUM</a>(Type, kDependNode, kLocatorNode, kDeformerNode, kManipContainer, kSurfaceShape, kFieldNode, kEmitterNode, kSpringNode, kIkSolverNode, kHardwareShader, kHwShaderNode, kTransformNode, kObjectSet, kFluidEmitterNode, kImagePlaneNode, kParticleAttributeMapperNode, kCameraSetNode, kConstraintNode, kManipulatorNode, kMotionPathNode, kClientDeviceNode, kThreadedDeviceNode, kAssembly, kSkinCluster, kGeometryFilter, kBlendShape, kLast)</td><td class=\"entry\"><a class=\"el\" href=\"#!/url=./cpp_ref/class_m_px_node.html\">MPxNode</a></td><td class=\"entry\"></td></tr>\n\
  <tr><td class=\"entry\"><a class=\"el\" href=\"#!/url=./cpp_ref/class_m_px_node.html#a71ebcb2013e0847d13c63dbdbb9973aa\">OPENMAYA_ENUM</a>(SchedulingType, kParallel, kSerial, kGloballySerial, kUntrusted, kSchedulingTypeLast, kDefaultScheduling=kSerial, kSerialize=kSerial, kGloballySerialize=kGloballySerial)</td><td class=\"entry\"><a class=\"el\" href=\"#!/url=./cpp_ref/class_m_px_node.html\">MPxNode</a></td><td class=\"entry\"></td></tr>\n\
  <tr class=\"even\"><td class=\"entry\"><a class=\"el\" href=\"#!/url=./cpp_ref/class_m_px_threaded_device_node.html#a77275ebc3fa98906328eff0ca2343545\">output</a></td><td class=\"entry\"><a class=\"el\" href=\"#!/url=./cpp_ref/class_m_px_threaded_device_node.html\">MPxThreadedDeviceNode</a></td><td class=\"entry\"><span class=\"mlabel\">static</span></td></tr>\n\
  <tr><td class=\"entry\"><a class=\"el\" href=\"#!/url=./cpp_ref/class_m_px_node.html#aae65db50f0b2f6aae1d1bf99ed962362\">passThroughToMany</a>(const MPlug &amp;, MPlugArray &amp;) const </td><td class=\"entry\"><a class=\"el\" href=\"#!/url=./cpp_ref/class_m_px_node.html\">MPxNode</a></td><td class=\"entry\"><span class=\"mlabel\">virtual</span></td></tr>\n\
  <tr class=\"even\"><td class=\"entry\"><a class=\"el\" href=\"#!/url=./cpp_ref/class_m_px_node.html#adad125b5b4aadf8f7f9819fc590a78a6\">passThroughToOne</a>(const MPlug &amp;) const </td><td class=\"entry\"><a class=\"el\" href=\"#!/url=./cpp_ref/class_m_px_node.html\">MPxNode</a></td><td class=\"entry\"><span class=\"mlabel\">virtual</span></td></tr>\n\
  <tr><td class=\"entry\"><a class=\"el\" href=\"#!/url=./cpp_ref/class_m_px_threaded_device_node.html#aacc27408ec56adbfb0137045ec374cf9\">popThreadData</a>(MCharBuffer &amp;buffer)</td><td class=\"entry\"><a class=\"el\" href=\"#!/url=./cpp_ref/class_m_px_threaded_device_node.html\">MPxThreadedDeviceNode</a></td><td class=\"entry\"></td></tr>\n\
  <tr class=\"even\"><td class=\"entry\"><a class=\"el\" href=\"#!/url=./cpp_ref/class_m_px_node.html#a5c13a6c88a839b5356861d1d09e820d9\">postConstructor</a>()</td><td class=\"entry\"><a class=\"el\" href=\"#!/url=./cpp_ref/class_m_px_node.html\">MPxNode</a></td><td class=\"entry\"><span class=\"mlabel\">virtual</span></td></tr>\n\
  <tr><td class=\"entry\"><a class=\"el\" href=\"#!/url=./cpp_ref/class_m_px_node.html#a93e355c11a2c9a0f19f8d7cfa887af2b\">postEvaluation</a>(const MDGContext &amp;context, const MEvaluationNode &amp;evaluationNode, PostEvaluationType evalType)</td><td class=\"entry\"><a class=\"el\" href=\"#!/url=./cpp_ref/class_m_px_node.html\">MPxNode</a></td><td class=\"entry\"><span class=\"mlabel\">virtual</span></td></tr>\n\
  <tr class=\"even\"><td class=\"entry\"><a class=\"el\" href=\"#!/url=./cpp_ref/class_m_px_node.html#ad40cff55ba4000788eda78c8b4258b3d\">preEvaluation</a>(const MDGContext &amp;context, const MEvaluationNode &amp;evaluationNode)</td><td class=\"entry\"><a class=\"el\" href=\"#!/url=./cpp_ref/class_m_px_node.html\">MPxNode</a></td><td class=\"entry\"><span class=\"mlabel\">virtual</span></td></tr>\n\
  <tr><td class=\"entry\"><a class=\"el\" href=\"#!/url=./cpp_ref/class_m_px_threaded_device_node.html#a69f3aa0c37830906d1fc31cdb1082de4\">pushThreadData</a>(MCharBuffer &amp;buffer)</td><td class=\"entry\"><a class=\"el\" href=\"#!/url=./cpp_ref/class_m_px_threaded_device_node.html\">MPxThreadedDeviceNode</a></td><td class=\"entry\"></td></tr>\n\
  <tr class=\"even\"><td class=\"entry\"><a class=\"el\" href=\"#!/url=./cpp_ref/class_m_px_threaded_device_node.html#add380deed2e84a4e593bb041c64c61eb\">releaseDataStorage</a>(MCharBuffer &amp;buffer)</td><td class=\"entry\"><a class=\"el\" href=\"#!/url=./cpp_ref/class_m_px_threaded_device_node.html\">MPxThreadedDeviceNode</a></td><td class=\"entry\"></td></tr>\n\
  <tr><td class=\"entry\"><a class=\"el\" href=\"#!/url=./cpp_ref/class_m_px_node.html#a9c9e8bdcf0b5283a027a66a7671b7088\">schedulingType</a>() const </td><td class=\"entry\"><a class=\"el\" href=\"#!/url=./cpp_ref/class_m_px_node.html\">MPxNode</a></td><td class=\"entry\"><span class=\"mlabel\">virtual</span></td></tr>\n\
  <tr class=\"even\"><td class=\"entry\"><a class=\"el\" href=\"#!/url=./cpp_ref/class_m_px_node.html#abd7d1dad4e4f0b922bf5ac4fc9c0230a\">setDependentsDirty</a>(const MPlug &amp;plug, MPlugArray &amp;plugArray)</td><td class=\"entry\"><a class=\"el\" href=\"#!/url=./cpp_ref/class_m_px_node.html\">MPxNode</a></td><td class=\"entry\"><span class=\"mlabel\">virtual</span></td></tr>\n\
  <tr><td class=\"entry\"><a class=\"el\" href=\"#!/url=./cpp_ref/class_m_px_threaded_device_node.html#a3626e178135da4c1588412df41761c71\">setDone</a>(bool done)</td><td class=\"entry\"><a class=\"el\" href=\"#!/url=./cpp_ref/class_m_px_threaded_device_node.html\">MPxThreadedDeviceNode</a></td><td class=\"entry\"></td></tr>\n\
  <tr class=\"even\"><td class=\"entry\"><a class=\"el\" href=\"#!/url=./cpp_ref/class_m_px_node.html#a02d5ad99659b3a4d33135ac436fbc162\">setDoNotWrite</a>(bool flag)</td><td class=\"entry\"><a class=\"el\" href=\"#!/url=./cpp_ref/class_m_px_node.html\">MPxNode</a></td><td class=\"entry\"><span class=\"mlabel\">protected</span><span class=\"mlabel\">virtual</span></td></tr>\n\
  <tr><td class=\"entry\"><a class=\"el\" href=\"#!/url=./cpp_ref/class_m_px_node.html#ab0ec8605b36618dc7975f6615ab27535\">setExistWithoutInConnections</a>(bool flag)</td><td class=\"entry\"><a class=\"el\" href=\"#!/url=./cpp_ref/class_m_px_node.html\">MPxNode</a></td><td class=\"entry\"><span class=\"mlabel\">virtual</span></td></tr>\n\
  <tr class=\"even\"><td class=\"entry\"><a class=\"el\" href=\"#!/url=./cpp_ref/class_m_px_node.html#a17b7814993195215e83c55646b977681\">setExistWithoutOutConnections</a>(bool flag)</td><td class=\"entry\"><a class=\"el\" href=\"#!/url=./cpp_ref/class_m_px_node.html\">MPxNode</a></td><td class=\"entry\"><span class=\"mlabel\">virtual</span></td></tr>\n\
  <tr><td class=\"entry\"><a class=\"el\" href=\"#!/url=./cpp_ref/class_m_px_node.html#a389fc88c7e5236aa2b9980a1b452cc49\">setExternalContent</a>(const MExternalContentLocationTable &amp;)</td><td class=\"entry\"><a class=\"el\" href=\"#!/url=./cpp_ref/class_m_px_node.html\">MPxNode</a></td><td class=\"entry\"><span class=\"mlabel\">virtual</span></td></tr>\n\
  <tr class=\"even\"><td class=\"entry\"><a class=\"el\" href=\"#!/url=./cpp_ref/class_m_px_node.html#a9a280288002cbae6c1e42cbfc7695048\">setExternalContentForFileAttr</a>(const MObject &amp;attr, const MExternalContentLocationTable &amp;)</td><td class=\"entry\"><a class=\"el\" href=\"#!/url=./cpp_ref/class_m_px_node.html\">MPxNode</a></td><td class=\"entry\"></td></tr>\n\
  <tr><td class=\"entry\"><a class=\"el\" href=\"#!/url=./cpp_ref/class_m_px_node.html#a6caab4434e836748680958883564af35\">setInternalValue</a>(const MPlug &amp;, const MDataHandle &amp;)</td><td class=\"entry\"><a class=\"el\" href=\"#!/url=./cpp_ref/class_m_px_node.html\">MPxNode</a></td><td class=\"entry\"><span class=\"mlabel\">virtual</span></td></tr>\n\
  <tr class=\"even\"><td class=\"entry\"><a class=\"el\" href=\"#!/url=./cpp_ref/class_m_px_node.html#aa5a06a44ec1a168d304be997c81e3454\">setInternalValueInContext</a>(const MPlug &amp;, const MDataHandle &amp;, MDGContext &amp;)</td><td class=\"entry\"><a class=\"el\" href=\"#!/url=./cpp_ref/class_m_px_node.html\">MPxNode</a></td><td class=\"entry\"><span class=\"mlabel\">virtual</span></td></tr>\n\
  <tr><td class=\"entry\"><a class=\"el\" href=\"#!/url=./cpp_ref/class_m_px_node.html#afc6e1f9ad83ed00627411828d91cc5cf\">setMPSafe</a>(bool isMPSafe)</td><td class=\"entry\"><a class=\"el\" href=\"#!/url=./cpp_ref/class_m_px_node.html\">MPxNode</a></td><td class=\"entry\"><span class=\"mlabel\">protected</span><span class=\"mlabel\">virtual</span></td></tr>\n\
  <tr class=\"even\"><td class=\"entry\"><a class=\"el\" href=\"#!/url=./cpp_ref/class_m_px_threaded_device_node.html#a9012c55b30a016141746b2a0d22e0096\">setRefreshOutputAttributes</a>(const MObjectArray &amp;attributeList)</td><td class=\"entry\"><a class=\"el\" href=\"#!/url=./cpp_ref/class_m_px_threaded_device_node.html\">MPxThreadedDeviceNode</a></td><td class=\"entry\"></td></tr>\n\
  <tr><td class=\"entry\"><a class=\"el\" href=\"#!/url=./cpp_ref/class_m_px_node.html#ac354fc704a7e79728b99e0570b4b51bf\">shouldSave</a>(const MPlug &amp;, bool &amp;isSaving)</td><td class=\"entry\"><a class=\"el\" href=\"#!/url=./cpp_ref/class_m_px_node.html\">MPxNode</a></td><td class=\"entry\"><span class=\"mlabel\">virtual</span></td></tr>\n\
  <tr class=\"even\"><td class=\"entry\"><a class=\"el\" href=\"#!/url=./cpp_ref/class_m_px_node.html#ab1315838f80fd570104dc41d834d8ff5\">state</a></td><td class=\"entry\"><a class=\"el\" href=\"#!/url=./cpp_ref/class_m_px_node.html\">MPxNode</a></td><td class=\"entry\"><span class=\"mlabel\">static</span></td></tr>\n\
  <tr><td class=\"entry\"><a class=\"el\" href=\"#!/url=./cpp_ref/class_m_px_node.html#a16ef067edb19aa37866cbc7839dbb16e\">thisMObject</a>() const </td><td class=\"entry\"><a class=\"el\" href=\"#!/url=./cpp_ref/class_m_px_node.html\">MPxNode</a></td><td class=\"entry\"><span class=\"mlabel\">virtual</span></td></tr>\n\
  <tr class=\"even\"><td class=\"entry\"><a class=\"el\" href=\"#!/url=./cpp_ref/class_m_px_threaded_device_node.html#af37878fba604585b02ea7ed5eb7773c6\">threadDataCount</a>()</td><td class=\"entry\"><a class=\"el\" href=\"#!/url=./cpp_ref/class_m_px_threaded_device_node.html\">MPxThreadedDeviceNode</a></td><td class=\"entry\"></td></tr>\n\
  <tr><td class=\"entry\"><a class=\"el\" href=\"#!/url=./cpp_ref/class_m_px_threaded_device_node.html#a42dd3fa0dc5fff7ae9ce9bf8f987d3fd\">threadHandler</a>()</td><td class=\"entry\"><a class=\"el\" href=\"#!/url=./cpp_ref/class_m_px_threaded_device_node.html\">MPxThreadedDeviceNode</a></td><td class=\"entry\"><span class=\"mlabel\">virtual</span></td></tr>\n\
  <tr class=\"even\"><td class=\"entry\"><a class=\"el\" href=\"#!/url=./cpp_ref/class_m_px_threaded_device_node.html#a026d4619d3e629e2c526787e945564b0\">threadShutdownHandler</a>()</td><td class=\"entry\"><a class=\"el\" href=\"#!/url=./cpp_ref/class_m_px_threaded_device_node.html\">MPxThreadedDeviceNode</a></td><td class=\"entry\"><span class=\"mlabel\">virtual</span></td></tr>\n\
  <tr><td class=\"entry\"><a class=\"el\" href=\"#!/url=./cpp_ref/class_m_px_node.html#a68b5f4da814941edd141ca207d1c7369\">transformInvalidationRange</a>(const MPlug &amp;source, const MTimeRange &amp;input) const </td><td class=\"entry\"><a class=\"el\" href=\"#!/url=./cpp_ref/class_m_px_node.html\">MPxNode</a></td><td class=\"entry\"><span class=\"mlabel\">virtual</span></td></tr>\n\
  <tr class=\"even\"><td class=\"entry\"><a class=\"el\" href=\"#!/url=./cpp_ref/class_m_px_threaded_device_node.html#a71bae20f7cb1d030904cf421f1c5eba2\">type</a>() const </td><td class=\"entry\"><a class=\"el\" href=\"#!/url=./cpp_ref/class_m_px_threaded_device_node.html\">MPxThreadedDeviceNode</a></td><td class=\"entry\"><span class=\"mlabel\">virtual</span></td></tr>\n\
  <tr><td class=\"entry\"><a class=\"el\" href=\"#!/url=./cpp_ref/class_m_px_node.html#a9a842aadc96ca39565ad68e366d6b83e\">typeId</a>() const </td><td class=\"entry\"><a class=\"el\" href=\"#!/url=./cpp_ref/class_m_px_node.html\">MPxNode</a></td><td class=\"entry\"><span class=\"mlabel\">virtual</span></td></tr>\n\
  <tr class=\"even\"><td class=\"entry\"><a class=\"el\" href=\"#!/url=./cpp_ref/class_m_px_node.html#a7aa522b0c9a8205c58893dc6bfe4c91f\">typeName</a>() const </td><td class=\"entry\"><a class=\"el\" href=\"#!/url=./cpp_ref/class_m_px_node.html\">MPxNode</a></td><td class=\"entry\"><span class=\"mlabel\">virtual</span></td></tr>\n\
  <tr><td class=\"entry\"><a class=\"el\" href=\"#!/url=./cpp_ref/class_m_px_node.html#a09bd20438981ff5cc2a0a69790cb3393\">~MPxNode</a>()</td><td class=\"entry\"><a class=\"el\" href=\"#!/url=./cpp_ref/class_m_px_node.html\">MPxNode</a></td><td class=\"entry\"><span class=\"mlabel\">virtual</span></td></tr>\n\
  <tr class=\"even\"><td class=\"entry\"><a class=\"el\" href=\"#!/url=./cpp_ref/class_m_px_threaded_device_node.html#ab43b7980fcae746be2cfee6a5bb1e4be\">~MPxThreadedDeviceNode</a>()</td><td class=\"entry\"><a class=\"el\" href=\"#!/url=./cpp_ref/class_m_px_threaded_device_node.html\">MPxThreadedDeviceNode</a></td><td class=\"entry\"><span class=\"mlabel\">virtual</span></td></tr>\n\
</table></div><!-- contents -->\n\
</div><!-- doc-content -->\n\
<!-- start footer part -->\n\
\n\
      <div class=\"footer-block\"><a href=\"../html/ac.cmtdialog.htm\" class=\"comments-anchor\" target=\"_blank\"><span class=\"comments-link\">Please send us your comment about this page</span></a></div></div>\n\
   </div></div></body>\n\
</html>\n\
";