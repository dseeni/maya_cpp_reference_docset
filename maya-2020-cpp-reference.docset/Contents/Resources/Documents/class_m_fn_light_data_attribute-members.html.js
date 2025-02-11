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
    cpp_ref_adsk_ref_toc.initNavTree(\'class_m_fn_light_data_attribute-members.html\', tocPrefix);\n\
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
<div class=\"title\">MFnLightDataAttribute Member List</div>  </div>\n\
</div><!--header-->\n\
<div class=\"contents\">\n\
\n\
<p>This is the complete list of members for <a class=\"el\" href=\"#!/url=./cpp_ref/class_m_fn_light_data_attribute.html\">MFnLightDataAttribute</a>, including all inherited members.</p>\n\
<table class=\"directory\">\n\
  <tr class=\"even\"><td class=\"entry\"><a class=\"el\" href=\"#!/url=./cpp_ref/class_m_fn_attribute.html#a777293c6d5f1e24385f4a67b4cd215ee\">accepts</a>(MFnData::Type type, MStatus *ReturnStatus=NULL) const </td><td class=\"entry\"><a class=\"el\" href=\"#!/url=./cpp_ref/class_m_fn_attribute.html\">MFnAttribute</a></td><td class=\"entry\"></td></tr>\n\
  <tr><td class=\"entry\"><a class=\"el\" href=\"#!/url=./cpp_ref/class_m_fn_attribute.html#a1028cd54e411db94d4aaefb02004d49f\">accepts</a>(const MTypeId &amp;id, MStatus *ReturnStatus=NULL) const </td><td class=\"entry\"><a class=\"el\" href=\"#!/url=./cpp_ref/class_m_fn_attribute.html\">MFnAttribute</a></td><td class=\"entry\"></td></tr>\n\
  <tr class=\"even\"><td class=\"entry\"><a class=\"el\" href=\"#!/url=./cpp_ref/class_m_fn_attribute.html#a5311597e8b5cde20a24cb5221ef70c39\">acceptsAttribute</a>(const MFnAttribute &amp;attr, MStatus *ReturnStatus=NULL) const </td><td class=\"entry\"><a class=\"el\" href=\"#!/url=./cpp_ref/class_m_fn_attribute.html\">MFnAttribute</a></td><td class=\"entry\"></td></tr>\n\
  <tr><td class=\"entry\"><a class=\"el\" href=\"#!/url=./cpp_ref/class_m_fn_attribute.html#ab9fc72838d451881be5ef4a910700afc\">addToCategory</a>(const MString &amp;category)</td><td class=\"entry\"><a class=\"el\" href=\"#!/url=./cpp_ref/class_m_fn_attribute.html\">MFnAttribute</a></td><td class=\"entry\"></td></tr>\n\
  <tr class=\"even\"><td class=\"entry\"><a class=\"el\" href=\"#!/url=./cpp_ref/class_m_fn_attribute.html#afea237acffa36eb0701331c53262897a\">affectsAppearance</a>(MStatus *ReturnStatus=NULL) const </td><td class=\"entry\"><a class=\"el\" href=\"#!/url=./cpp_ref/class_m_fn_attribute.html\">MFnAttribute</a></td><td class=\"entry\"></td></tr>\n\
  <tr><td class=\"entry\"><a class=\"el\" href=\"#!/url=./cpp_ref/class_m_fn_light_data_attribute.html#ace9b5339945713ea942f6bc14e35f53a\">child</a>(unsigned int index, MStatus *returnStatus)</td><td class=\"entry\"><a class=\"el\" href=\"#!/url=./cpp_ref/class_m_fn_light_data_attribute.html\">MFnLightDataAttribute</a></td><td class=\"entry\"></td></tr>\n\
  <tr class=\"even\"><td class=\"entry\"><a class=\"el\" href=\"#!/url=./cpp_ref/class_m_fn_light_data_attribute.html#a428d79a409e4896c1585d9667e58af0e\">className</a>()</td><td class=\"entry\"><a class=\"el\" href=\"#!/url=./cpp_ref/class_m_fn_light_data_attribute.html\">MFnLightDataAttribute</a></td><td class=\"entry\"><span class=\"mlabel\">static</span></td></tr>\n\
  <tr><td class=\"entry\"><a class=\"el\" href=\"#!/url=./cpp_ref/class_m_fn_light_data_attribute.html#a3117be173cc6b901d49bde276b4eac51\">create</a>(const MString &amp;fullName, const MString &amp;briefName, const MObject &amp;direction, const MObject &amp;intensity, const MObject &amp;ambient, const MObject &amp;diffuse, const MObject &amp;specular, const MObject &amp;shadowFraciton, const MObject &amp;preShadowIntensity, const MObject &amp;blindData, MStatus *ReturnStatus=NULL)</td><td class=\"entry\"><a class=\"el\" href=\"#!/url=./cpp_ref/class_m_fn_light_data_attribute.html\">MFnLightDataAttribute</a></td><td class=\"entry\"></td></tr>\n\
  <tr class=\"even\"><td class=\"entry\"><a class=\"el\" href=\"#!/url=./cpp_ref/class_m_fn_attribute.html#aba9aee0cb84deb11ad8ca9184f178981\">disconnectBehavior</a>(MStatus *ReturnStatus=NULL) const </td><td class=\"entry\"><a class=\"el\" href=\"#!/url=./cpp_ref/class_m_fn_attribute.html\">MFnAttribute</a></td><td class=\"entry\"></td></tr>\n\
  <tr><td class=\"entry\"><a class=\"el\" href=\"#!/url=./cpp_ref/class_m_fn_attribute.html#aca786e4cf6b447a9751baa7014ca78ed\">getAddAttrCmd</a>(bool useLongName=false, MStatus *status=NULL) const </td><td class=\"entry\"><a class=\"el\" href=\"#!/url=./cpp_ref/class_m_fn_attribute.html\">MFnAttribute</a></td><td class=\"entry\"></td></tr>\n\
  <tr class=\"even\"><td class=\"entry\"><a class=\"el\" href=\"#!/url=./cpp_ref/class_m_fn_attribute.html#ac5ce54a3964395a211ee98089b770748\">getCategories</a>(MStringArray &amp;ReturnStatus) const </td><td class=\"entry\"><a class=\"el\" href=\"#!/url=./cpp_ref/class_m_fn_attribute.html\">MFnAttribute</a></td><td class=\"entry\"></td></tr>\n\
  <tr><td class=\"entry\"><a class=\"el\" href=\"#!/url=./cpp_ref/class_m_fn_light_data_attribute.html#a757da053ad1243d04afd3b51395f8c71\">getDefault</a>(float &amp;defDirectionX, float &amp;defDirectionY, float &amp;defDirectionZ, float &amp;defIntensityR, float &amp;defIntensityG, float &amp;defIntensityB, bool &amp;defAmbient, bool &amp;defDiffuse, bool &amp;defSpecular, float &amp;defShadowFraction, float &amp;defPreShadowIntensity, void *&amp;defBlindData)</td><td class=\"entry\"><a class=\"el\" href=\"#!/url=./cpp_ref/class_m_fn_light_data_attribute.html\">MFnLightDataAttribute</a></td><td class=\"entry\"></td></tr>\n\
  <tr class=\"even\"><td class=\"entry\"><a class=\"el\" href=\"#!/url=./cpp_ref/class_m_fn_attribute.html#a6a3eddfcbd9aa2a566e9d92ddf7d058b\">hasCategory</a>(const MString &amp;category) const </td><td class=\"entry\"><a class=\"el\" href=\"#!/url=./cpp_ref/class_m_fn_attribute.html\">MFnAttribute</a></td><td class=\"entry\"></td></tr>\n\
  <tr><td class=\"entry\"><a class=\"el\" href=\"#!/url=./cpp_ref/class_m_fn_base.html#a5f2479ff74d96fda6f7cd31ee4c1c463\">hasObj</a>(MFn::Type) const </td><td class=\"entry\"><a class=\"el\" href=\"#!/url=./cpp_ref/class_m_fn_base.html\">MFnBase</a></td><td class=\"entry\"></td></tr>\n\
  <tr class=\"even\"><td class=\"entry\"><a class=\"el\" href=\"#!/url=./cpp_ref/class_m_fn_base.html#a28acbd3253b9c86a1e64b3457de9f4ea\">hasObj</a>(const MObject &amp;) const </td><td class=\"entry\"><a class=\"el\" href=\"#!/url=./cpp_ref/class_m_fn_base.html\">MFnBase</a></td><td class=\"entry\"></td></tr>\n\
  <tr><td class=\"entry\"><a class=\"el\" href=\"#!/url=./cpp_ref/class_m_fn_attribute.html#a644cbdd7a84a7017e10042289c9cee19\">indexMatters</a>(MStatus *ReturnStatus=NULL) const </td><td class=\"entry\"><a class=\"el\" href=\"#!/url=./cpp_ref/class_m_fn_attribute.html\">MFnAttribute</a></td><td class=\"entry\"></td></tr>\n\
  <tr class=\"even\"><td class=\"entry\"><a class=\"el\" href=\"#!/url=./cpp_ref/class_m_fn_attribute.html#abb3c996401a1f6e3b8d5d7c3cb27cfa8\">internal</a>(MStatus *ReturnStatus=NULL) const </td><td class=\"entry\"><a class=\"el\" href=\"#!/url=./cpp_ref/class_m_fn_attribute.html\">MFnAttribute</a></td><td class=\"entry\"></td></tr>\n\
  <tr><td class=\"entry\"><a class=\"el\" href=\"#!/url=./cpp_ref/class_m_fn_attribute.html#a32c3d5d70ce1027dfffdacfe916c502e\">isAffectsWorldSpace</a>(MStatus *ReturnStatus=NULL) const </td><td class=\"entry\"><a class=\"el\" href=\"#!/url=./cpp_ref/class_m_fn_attribute.html\">MFnAttribute</a></td><td class=\"entry\"></td></tr>\n\
  <tr class=\"even\"><td class=\"entry\"><a class=\"el\" href=\"#!/url=./cpp_ref/class_m_fn_attribute.html#a42a62e7e85c661ab761d25ba77504f15\">isArray</a>(MStatus *ReturnStatus=NULL) const </td><td class=\"entry\"><a class=\"el\" href=\"#!/url=./cpp_ref/class_m_fn_attribute.html\">MFnAttribute</a></td><td class=\"entry\"></td></tr>\n\
  <tr><td class=\"entry\"><a class=\"el\" href=\"#!/url=./cpp_ref/class_m_fn_attribute.html#a7925050158ea0cbba84702451d7d2f3d\">isCached</a>(MStatus *ReturnStatus=NULL) const </td><td class=\"entry\"><a class=\"el\" href=\"#!/url=./cpp_ref/class_m_fn_attribute.html\">MFnAttribute</a></td><td class=\"entry\"></td></tr>\n\
  <tr class=\"even\"><td class=\"entry\"><a class=\"el\" href=\"#!/url=./cpp_ref/class_m_fn_attribute.html#a0b2c482f6dc29004538e8224ad48de8a\">isChannelBoxFlagSet</a>(MStatus *ReturnStatus=NULL) const </td><td class=\"entry\"><a class=\"el\" href=\"#!/url=./cpp_ref/class_m_fn_attribute.html\">MFnAttribute</a></td><td class=\"entry\"></td></tr>\n\
  <tr><td class=\"entry\"><a class=\"el\" href=\"#!/url=./cpp_ref/class_m_fn_attribute.html#a271fd55e9ab3ef9d2bd43c299171b52e\">isConnectable</a>(MStatus *ReturnStatus=NULL) const </td><td class=\"entry\"><a class=\"el\" href=\"#!/url=./cpp_ref/class_m_fn_attribute.html\">MFnAttribute</a></td><td class=\"entry\"></td></tr>\n\
  <tr class=\"even\"><td class=\"entry\"><a class=\"el\" href=\"#!/url=./cpp_ref/class_m_fn_attribute.html#a8ae9e9dccfbe83e9f02a24a130ae3095\">isDynamic</a>(MStatus *ReturnStatus=NULL) const </td><td class=\"entry\"><a class=\"el\" href=\"#!/url=./cpp_ref/class_m_fn_attribute.html\">MFnAttribute</a></td><td class=\"entry\"></td></tr>\n\
  <tr><td class=\"entry\"><a class=\"el\" href=\"#!/url=./cpp_ref/class_m_fn_attribute.html#a555003ff16e87a4b87ad54305144611b\">isExtension</a>(MStatus *ReturnStatus=NULL) const </td><td class=\"entry\"><a class=\"el\" href=\"#!/url=./cpp_ref/class_m_fn_attribute.html\">MFnAttribute</a></td><td class=\"entry\"></td></tr>\n\
  <tr class=\"even\"><td class=\"entry\"><a class=\"el\" href=\"#!/url=./cpp_ref/class_m_fn_attribute.html#afd1e4bbfc3dcc5397191160d618caea0\">isHidden</a>(MStatus *ReturnStatus=NULL) const </td><td class=\"entry\"><a class=\"el\" href=\"#!/url=./cpp_ref/class_m_fn_attribute.html\">MFnAttribute</a></td><td class=\"entry\"></td></tr>\n\
  <tr><td class=\"entry\"><a class=\"el\" href=\"#!/url=./cpp_ref/class_m_fn_attribute.html#aa5ff8ada3e75b1d40918e02afb500e09\">isIndeterminant</a>(MStatus *ReturnStatus=NULL) const </td><td class=\"entry\"><a class=\"el\" href=\"#!/url=./cpp_ref/class_m_fn_attribute.html\">MFnAttribute</a></td><td class=\"entry\"></td></tr>\n\
  <tr class=\"even\"><td class=\"entry\"><a class=\"el\" href=\"#!/url=./cpp_ref/class_m_fn_attribute.html#a04d0e56f585cafd631ff54a8cc9a65a6\">isKeyable</a>(MStatus *ReturnStatus=NULL) const </td><td class=\"entry\"><a class=\"el\" href=\"#!/url=./cpp_ref/class_m_fn_attribute.html\">MFnAttribute</a></td><td class=\"entry\"></td></tr>\n\
  <tr><td class=\"entry\"><a class=\"el\" href=\"#!/url=./cpp_ref/class_m_fn_attribute.html#aad284ddebdfcebe44a94c74bac745cd7\">isProxyAttribute</a>(MStatus *ReturnStatus=NULL) const </td><td class=\"entry\"><a class=\"el\" href=\"#!/url=./cpp_ref/class_m_fn_attribute.html\">MFnAttribute</a></td><td class=\"entry\"></td></tr>\n\
  <tr class=\"even\"><td class=\"entry\"><a class=\"el\" href=\"#!/url=./cpp_ref/class_m_fn_attribute.html#acefd67cb35f699cbc27eada5d8800565\">isReadable</a>(MStatus *ReturnStatus=NULL) const </td><td class=\"entry\"><a class=\"el\" href=\"#!/url=./cpp_ref/class_m_fn_attribute.html\">MFnAttribute</a></td><td class=\"entry\"></td></tr>\n\
  <tr><td class=\"entry\"><a class=\"el\" href=\"#!/url=./cpp_ref/class_m_fn_attribute.html#a8579fe7f9adf7797ed89b2f333dec5e0\">isRenderSource</a>(MStatus *ReturnStatus=NULL) const </td><td class=\"entry\"><a class=\"el\" href=\"#!/url=./cpp_ref/class_m_fn_attribute.html\">MFnAttribute</a></td><td class=\"entry\"></td></tr>\n\
  <tr class=\"even\"><td class=\"entry\"><a class=\"el\" href=\"#!/url=./cpp_ref/class_m_fn_attribute.html#a6bb764ff70cc44d81d8742617123af54\">isStorable</a>(MStatus *ReturnStatus=NULL) const </td><td class=\"entry\"><a class=\"el\" href=\"#!/url=./cpp_ref/class_m_fn_attribute.html\">MFnAttribute</a></td><td class=\"entry\"></td></tr>\n\
  <tr><td class=\"entry\"><a class=\"el\" href=\"#!/url=./cpp_ref/class_m_fn_attribute.html#ae16d2168985d64b52e9fb973cc05e805\">isUsedAsColor</a>(MStatus *ReturnStatus=NULL) const </td><td class=\"entry\"><a class=\"el\" href=\"#!/url=./cpp_ref/class_m_fn_attribute.html\">MFnAttribute</a></td><td class=\"entry\"></td></tr>\n\
  <tr class=\"even\"><td class=\"entry\"><a class=\"el\" href=\"#!/url=./cpp_ref/class_m_fn_attribute.html#a47fb4f02f1619e47363c39c9794d8191\">isUsedAsFilename</a>(MStatus *ReturnStatus=NULL) const </td><td class=\"entry\"><a class=\"el\" href=\"#!/url=./cpp_ref/class_m_fn_attribute.html\">MFnAttribute</a></td><td class=\"entry\"></td></tr>\n\
  <tr><td class=\"entry\"><a class=\"el\" href=\"#!/url=./cpp_ref/class_m_fn_base.html#a77821035309df17e3c856eedf7e57309\">isValid</a>(MFn::Type)</td><td class=\"entry\"><a class=\"el\" href=\"#!/url=./cpp_ref/class_m_fn_base.html\">MFnBase</a></td><td class=\"entry\"><span class=\"mlabel\">static</span></td></tr>\n\
  <tr class=\"even\"><td class=\"entry\"><a class=\"el\" href=\"#!/url=./cpp_ref/class_m_fn_attribute.html#a709e9464964286f141fc32555a06c971\">isWorldSpace</a>(MStatus *ReturnStatus=NULL) const </td><td class=\"entry\"><a class=\"el\" href=\"#!/url=./cpp_ref/class_m_fn_attribute.html\">MFnAttribute</a></td><td class=\"entry\"></td></tr>\n\
  <tr><td class=\"entry\"><a class=\"el\" href=\"#!/url=./cpp_ref/class_m_fn_attribute.html#a4dde85d45c03eb5f277bd3013a95af22\">isWritable</a>(MStatus *ReturnStatus=NULL) const </td><td class=\"entry\"><a class=\"el\" href=\"#!/url=./cpp_ref/class_m_fn_attribute.html\">MFnAttribute</a></td><td class=\"entry\"></td></tr>\n\
  <tr class=\"even\"><td class=\"entry\"><a class=\"el\" href=\"#!/url=./cpp_ref/class_m_fn_attribute.html#a2a948834fb15be7ae798683df8ffc06e\">MFnAttribute</a>()</td><td class=\"entry\"><a class=\"el\" href=\"#!/url=./cpp_ref/class_m_fn_attribute.html\">MFnAttribute</a></td><td class=\"entry\"></td></tr>\n\
  <tr><td class=\"entry\"><a class=\"el\" href=\"#!/url=./cpp_ref/class_m_fn_attribute.html#a337df40162fcfea138683c97633c557b\">MFnAttribute</a>(MObject &amp;object, MStatus *ReturnStatus=NULL)</td><td class=\"entry\"><a class=\"el\" href=\"#!/url=./cpp_ref/class_m_fn_attribute.html\">MFnAttribute</a></td><td class=\"entry\"></td></tr>\n\
  <tr class=\"even\"><td class=\"entry\"><a class=\"el\" href=\"#!/url=./cpp_ref/class_m_fn_attribute.html#adca45328e02d30fcf54bb4d8fa7b6e65\">MFnAttribute</a>(const MObject &amp;object, MStatus *ReturnStatus=NULL)</td><td class=\"entry\"><a class=\"el\" href=\"#!/url=./cpp_ref/class_m_fn_attribute.html\">MFnAttribute</a></td><td class=\"entry\"></td></tr>\n\
  <tr><td class=\"entry\"><a class=\"el\" href=\"#!/url=./cpp_ref/class_m_fn_light_data_attribute.html#afc9c000de0ab189d711e31681dc56c5c\">MFnLightDataAttribute</a>()</td><td class=\"entry\"><a class=\"el\" href=\"#!/url=./cpp_ref/class_m_fn_light_data_attribute.html\">MFnLightDataAttribute</a></td><td class=\"entry\"></td></tr>\n\
  <tr class=\"even\"><td class=\"entry\"><a class=\"el\" href=\"#!/url=./cpp_ref/class_m_fn_light_data_attribute.html#a22a67bd48a076f3d2b48a2f16def3df6\">MFnLightDataAttribute</a>(MObject &amp;object, MStatus *ReturnStatus=NULL)</td><td class=\"entry\"><a class=\"el\" href=\"#!/url=./cpp_ref/class_m_fn_light_data_attribute.html\">MFnLightDataAttribute</a></td><td class=\"entry\"></td></tr>\n\
  <tr><td class=\"entry\"><a class=\"el\" href=\"#!/url=./cpp_ref/class_m_fn_light_data_attribute.html#a934fcf1297f1c527ef4f27f3a41d200f\">MFnLightDataAttribute</a>(const MObject &amp;object, MStatus *ReturnStatus=NULL)</td><td class=\"entry\"><a class=\"el\" href=\"#!/url=./cpp_ref/class_m_fn_light_data_attribute.html\">MFnLightDataAttribute</a></td><td class=\"entry\"></td></tr>\n\
  <tr class=\"even\"><td class=\"entry\"><a class=\"el\" href=\"#!/url=./cpp_ref/class_m_fn_attribute.html#a049384adbea0396ea2f03d1ad4d69df1\">name</a>(MStatus *ReturnStatus=NULL) const </td><td class=\"entry\"><a class=\"el\" href=\"#!/url=./cpp_ref/class_m_fn_attribute.html\">MFnAttribute</a></td><td class=\"entry\"></td></tr>\n\
  <tr><td class=\"entry\"><a class=\"el\" href=\"#!/url=./cpp_ref/class_m_fn_base.html#a01c802c0a7fc219b5a9beff9787bcfa2\">object</a>(MStatus *ReturnStatus=NULL) const </td><td class=\"entry\"><a class=\"el\" href=\"#!/url=./cpp_ref/class_m_fn_base.html\">MFnBase</a></td><td class=\"entry\"></td></tr>\n\
  <tr class=\"even\"><td class=\"entry\"><a class=\"el\" href=\"#!/url=./cpp_ref/class_m_fn_attribute.html#a3f711e954116fbe52938002fd08677d2\">OPENMAYA_ENUM</a>(DisconnectBehavior, kDelete, kReset, kNothing)</td><td class=\"entry\"><a class=\"el\" href=\"#!/url=./cpp_ref/class_m_fn_attribute.html\">MFnAttribute</a></td><td class=\"entry\"></td></tr>\n\
  <tr><td class=\"entry\"><a class=\"el\" href=\"#!/url=./cpp_ref/class_m_fn_attribute.html#afe12e5ed2a1b5f883db0179f53a527bc\">parent</a>(MStatus *ReturnStatus=NULL) const </td><td class=\"entry\"><a class=\"el\" href=\"#!/url=./cpp_ref/class_m_fn_attribute.html\">MFnAttribute</a></td><td class=\"entry\"></td></tr>\n\
  <tr class=\"even\"><td class=\"entry\"><a class=\"el\" href=\"#!/url=./cpp_ref/class_m_fn_attribute.html#abfd831fc77b7abc83bba7c4e2ddd98d0\">removeFromCategory</a>(const MString &amp;category)</td><td class=\"entry\"><a class=\"el\" href=\"#!/url=./cpp_ref/class_m_fn_attribute.html\">MFnAttribute</a></td><td class=\"entry\"></td></tr>\n\
  <tr><td class=\"entry\"><a class=\"el\" href=\"#!/url=./cpp_ref/class_m_fn_attribute.html#a0810da59cbaac7ecbd26ba0a43d0ac35\">setAffectsAppearance</a>(bool state)</td><td class=\"entry\"><a class=\"el\" href=\"#!/url=./cpp_ref/class_m_fn_attribute.html\">MFnAttribute</a></td><td class=\"entry\"></td></tr>\n\
  <tr class=\"even\"><td class=\"entry\"><a class=\"el\" href=\"#!/url=./cpp_ref/class_m_fn_attribute.html#a136a9a94f034ea314330ae1ee919e9fa\">setAffectsWorldSpace</a>(bool state)</td><td class=\"entry\"><a class=\"el\" href=\"#!/url=./cpp_ref/class_m_fn_attribute.html\">MFnAttribute</a></td><td class=\"entry\"></td></tr>\n\
  <tr><td class=\"entry\"><a class=\"el\" href=\"#!/url=./cpp_ref/class_m_fn_attribute.html#acc80b84249f9c028f2c6d085a026b50c\">setArray</a>(bool state)</td><td class=\"entry\"><a class=\"el\" href=\"#!/url=./cpp_ref/class_m_fn_attribute.html\">MFnAttribute</a></td><td class=\"entry\"></td></tr>\n\
  <tr class=\"even\"><td class=\"entry\"><a class=\"el\" href=\"#!/url=./cpp_ref/class_m_fn_attribute.html#afa3d56222eae663308e11edc39e8d153\">setCached</a>(bool state)</td><td class=\"entry\"><a class=\"el\" href=\"#!/url=./cpp_ref/class_m_fn_attribute.html\">MFnAttribute</a></td><td class=\"entry\"></td></tr>\n\
  <tr><td class=\"entry\"><a class=\"el\" href=\"#!/url=./cpp_ref/class_m_fn_attribute.html#ace425962bea0677111b837b27f0c72f3\">setChannelBox</a>(bool state)</td><td class=\"entry\"><a class=\"el\" href=\"#!/url=./cpp_ref/class_m_fn_attribute.html\">MFnAttribute</a></td><td class=\"entry\"></td></tr>\n\
  <tr class=\"even\"><td class=\"entry\"><a class=\"el\" href=\"#!/url=./cpp_ref/class_m_fn_attribute.html#ab1986dcbce4e2fd86c5cb0bff5119dc0\">setConnectable</a>(bool state)</td><td class=\"entry\"><a class=\"el\" href=\"#!/url=./cpp_ref/class_m_fn_attribute.html\">MFnAttribute</a></td><td class=\"entry\"></td></tr>\n\
  <tr><td class=\"entry\"><a class=\"el\" href=\"#!/url=./cpp_ref/class_m_fn_light_data_attribute.html#a0ea7df1664663a867afd9ab3ea89c6c0\">setDefault</a>(float defDirectionX, float defDirectionY, float defDirectionZ, float defIntensityR, float defIntensityG, float defIntensityB, bool defAmbient, bool defDiffuse, bool defSpecular, float defShadowFraction, float defPreShadowIntensity, void *defBlindData)</td><td class=\"entry\"><a class=\"el\" href=\"#!/url=./cpp_ref/class_m_fn_light_data_attribute.html\">MFnLightDataAttribute</a></td><td class=\"entry\"></td></tr>\n\
  <tr class=\"even\"><td class=\"entry\"><a class=\"el\" href=\"#!/url=./cpp_ref/class_m_fn_attribute.html#a63d68800b9113eb770e8833a86758206\">setDisconnectBehavior</a>(DisconnectBehavior behavior)</td><td class=\"entry\"><a class=\"el\" href=\"#!/url=./cpp_ref/class_m_fn_attribute.html\">MFnAttribute</a></td><td class=\"entry\"></td></tr>\n\
  <tr><td class=\"entry\"><a class=\"el\" href=\"#!/url=./cpp_ref/class_m_fn_attribute.html#ab8e48be1f1009a30d0e40dfcaf9e649d\">setHidden</a>(bool state)</td><td class=\"entry\"><a class=\"el\" href=\"#!/url=./cpp_ref/class_m_fn_attribute.html\">MFnAttribute</a></td><td class=\"entry\"></td></tr>\n\
  <tr class=\"even\"><td class=\"entry\"><a class=\"el\" href=\"#!/url=./cpp_ref/class_m_fn_attribute.html#aee58d72d6e4ab8db6ec3cbf02b99fc75\">setIndeterminant</a>(bool state)</td><td class=\"entry\"><a class=\"el\" href=\"#!/url=./cpp_ref/class_m_fn_attribute.html\">MFnAttribute</a></td><td class=\"entry\"></td></tr>\n\
  <tr><td class=\"entry\"><a class=\"el\" href=\"#!/url=./cpp_ref/class_m_fn_attribute.html#a74dfd22a2b7f8ff6eeacb6e32d142c28\">setIndexMatters</a>(bool state)</td><td class=\"entry\"><a class=\"el\" href=\"#!/url=./cpp_ref/class_m_fn_attribute.html\">MFnAttribute</a></td><td class=\"entry\"></td></tr>\n\
  <tr class=\"even\"><td class=\"entry\"><a class=\"el\" href=\"#!/url=./cpp_ref/class_m_fn_attribute.html#ae27cf2fd28a3c69b880b1096ea9e0103\">setInternal</a>(bool state)</td><td class=\"entry\"><a class=\"el\" href=\"#!/url=./cpp_ref/class_m_fn_attribute.html\">MFnAttribute</a></td><td class=\"entry\"></td></tr>\n\
  <tr><td class=\"entry\"><a class=\"el\" href=\"#!/url=./cpp_ref/class_m_fn_attribute.html#a9e68a8b4af016b37f6567cfa6d68e551\">setKeyable</a>(bool state)</td><td class=\"entry\"><a class=\"el\" href=\"#!/url=./cpp_ref/class_m_fn_attribute.html\">MFnAttribute</a></td><td class=\"entry\"></td></tr>\n\
  <tr class=\"even\"><td class=\"entry\"><a class=\"el\" href=\"#!/url=./cpp_ref/class_m_fn_attribute.html#a0189811f6fd4bb70f002e07e06717556\">setNiceNameOverride</a>(const MString &amp;localizedName)</td><td class=\"entry\"><a class=\"el\" href=\"#!/url=./cpp_ref/class_m_fn_attribute.html\">MFnAttribute</a></td><td class=\"entry\"></td></tr>\n\
  <tr><td class=\"entry\"><a class=\"el\" href=\"#!/url=./cpp_ref/class_m_fn_base.html#ad09f5acece0f9926b3e0e55cff78c3be\">setObject</a>(MObject &amp;object)</td><td class=\"entry\"><a class=\"el\" href=\"#!/url=./cpp_ref/class_m_fn_base.html\">MFnBase</a></td><td class=\"entry\"><span class=\"mlabel\">virtual</span></td></tr>\n\
  <tr class=\"even\"><td class=\"entry\"><a class=\"el\" href=\"#!/url=./cpp_ref/class_m_fn_base.html#a4a6adbb56d6259860ec665ab5d86bdb5\">setObject</a>(const MObject &amp;object)</td><td class=\"entry\"><a class=\"el\" href=\"#!/url=./cpp_ref/class_m_fn_base.html\">MFnBase</a></td><td class=\"entry\"><span class=\"mlabel\">virtual</span></td></tr>\n\
  <tr><td class=\"entry\"><a class=\"el\" href=\"#!/url=./cpp_ref/class_m_fn_attribute.html#a60db28e1afc8251b18a2d6ca12738780\">setProxyAttribute</a>(bool state)</td><td class=\"entry\"><a class=\"el\" href=\"#!/url=./cpp_ref/class_m_fn_attribute.html\">MFnAttribute</a></td><td class=\"entry\"></td></tr>\n\
  <tr class=\"even\"><td class=\"entry\"><a class=\"el\" href=\"#!/url=./cpp_ref/class_m_fn_attribute.html#af41aae76c0dc31dbcd1f4ecea52d694e\">setReadable</a>(bool state)</td><td class=\"entry\"><a class=\"el\" href=\"#!/url=./cpp_ref/class_m_fn_attribute.html\">MFnAttribute</a></td><td class=\"entry\"></td></tr>\n\
  <tr><td class=\"entry\"><a class=\"el\" href=\"#!/url=./cpp_ref/class_m_fn_attribute.html#a94a62a637aefad36cc08cf7260ccb63c\">setRenderSource</a>(bool state)</td><td class=\"entry\"><a class=\"el\" href=\"#!/url=./cpp_ref/class_m_fn_attribute.html\">MFnAttribute</a></td><td class=\"entry\"></td></tr>\n\
  <tr class=\"even\"><td class=\"entry\"><a class=\"el\" href=\"#!/url=./cpp_ref/class_m_fn_attribute.html#a8d2be80de133a200a455bf9e2ac1b709\">setStorable</a>(bool state)</td><td class=\"entry\"><a class=\"el\" href=\"#!/url=./cpp_ref/class_m_fn_attribute.html\">MFnAttribute</a></td><td class=\"entry\"></td></tr>\n\
  <tr><td class=\"entry\"><a class=\"el\" href=\"#!/url=./cpp_ref/class_m_fn_attribute.html#a4a44548ca2e5b1e7613a992a6b96a147\">setUsedAsColor</a>(bool state)</td><td class=\"entry\"><a class=\"el\" href=\"#!/url=./cpp_ref/class_m_fn_attribute.html\">MFnAttribute</a></td><td class=\"entry\"></td></tr>\n\
  <tr class=\"even\"><td class=\"entry\"><a class=\"el\" href=\"#!/url=./cpp_ref/class_m_fn_attribute.html#ab8fc03c313bed1f43387ad04e31bc87d\">setUsedAsFilename</a>(bool state)</td><td class=\"entry\"><a class=\"el\" href=\"#!/url=./cpp_ref/class_m_fn_attribute.html\">MFnAttribute</a></td><td class=\"entry\"></td></tr>\n\
  <tr><td class=\"entry\"><a class=\"el\" href=\"#!/url=./cpp_ref/class_m_fn_attribute.html#a08fb5fd3764795485a0d799616646ef1\">setUsesArrayDataBuilder</a>(bool state)</td><td class=\"entry\"><a class=\"el\" href=\"#!/url=./cpp_ref/class_m_fn_attribute.html\">MFnAttribute</a></td><td class=\"entry\"></td></tr>\n\
  <tr class=\"even\"><td class=\"entry\"><a class=\"el\" href=\"#!/url=./cpp_ref/class_m_fn_attribute.html#a8f7cf21a63ea84536b3c2cbaae8a8e41\">setWorldSpace</a>(bool state)</td><td class=\"entry\"><a class=\"el\" href=\"#!/url=./cpp_ref/class_m_fn_attribute.html\">MFnAttribute</a></td><td class=\"entry\"></td></tr>\n\
  <tr><td class=\"entry\"><a class=\"el\" href=\"#!/url=./cpp_ref/class_m_fn_attribute.html#a98bb3089ec3b7442383da68a5ef424c7\">setWritable</a>(bool state)</td><td class=\"entry\"><a class=\"el\" href=\"#!/url=./cpp_ref/class_m_fn_attribute.html\">MFnAttribute</a></td><td class=\"entry\"></td></tr>\n\
  <tr class=\"even\"><td class=\"entry\"><a class=\"el\" href=\"#!/url=./cpp_ref/class_m_fn_attribute.html#ac2aa8e9062fcf7d2ff09c5ad09278b94\">shortName</a>(MStatus *ReturnStatus=NULL) const </td><td class=\"entry\"><a class=\"el\" href=\"#!/url=./cpp_ref/class_m_fn_attribute.html\">MFnAttribute</a></td><td class=\"entry\"></td></tr>\n\
  <tr><td class=\"entry\"><a class=\"el\" href=\"#!/url=./cpp_ref/class_m_fn_light_data_attribute.html#adc3250674414e8a0b2f4584959c6ec4c\">type</a>() const </td><td class=\"entry\"><a class=\"el\" href=\"#!/url=./cpp_ref/class_m_fn_light_data_attribute.html\">MFnLightDataAttribute</a></td><td class=\"entry\"><span class=\"mlabel\">virtual</span></td></tr>\n\
  <tr class=\"even\"><td class=\"entry\"><a class=\"el\" href=\"#!/url=./cpp_ref/class_m_fn_base.html#a9b02bac5f351157c70dcafa8f72c95f2\">typeString</a>(MFn::Type)</td><td class=\"entry\"><a class=\"el\" href=\"#!/url=./cpp_ref/class_m_fn_base.html\">MFnBase</a></td><td class=\"entry\"><span class=\"mlabel\">static</span></td></tr>\n\
  <tr><td class=\"entry\"><a class=\"el\" href=\"#!/url=./cpp_ref/class_m_fn_attribute.html#a88b90f1b23f0f7a31968142b87b36d21\">usesArrayDataBuilder</a>(MStatus *ReturnStatus=NULL) const </td><td class=\"entry\"><a class=\"el\" href=\"#!/url=./cpp_ref/class_m_fn_attribute.html\">MFnAttribute</a></td><td class=\"entry\"></td></tr>\n\
  <tr class=\"even\"><td class=\"entry\"><a class=\"el\" href=\"#!/url=./cpp_ref/class_m_fn_attribute.html#a3d4e721bbdab0bd68829d2697d591fc3\">~MFnAttribute</a>()</td><td class=\"entry\"><a class=\"el\" href=\"#!/url=./cpp_ref/class_m_fn_attribute.html\">MFnAttribute</a></td><td class=\"entry\"><span class=\"mlabel\">virtual</span></td></tr>\n\
  <tr><td class=\"entry\"><a class=\"el\" href=\"#!/url=./cpp_ref/class_m_fn_base.html#a5ba621af875a0d489e1031eddac02b82\">~MFnBase</a>()</td><td class=\"entry\"><a class=\"el\" href=\"#!/url=./cpp_ref/class_m_fn_base.html\">MFnBase</a></td><td class=\"entry\"><span class=\"mlabel\">virtual</span></td></tr>\n\
  <tr class=\"even\"><td class=\"entry\"><a class=\"el\" href=\"#!/url=./cpp_ref/class_m_fn_light_data_attribute.html#a32d240c4a46087eac132d62553230c91\">~MFnLightDataAttribute</a>()</td><td class=\"entry\"><a class=\"el\" href=\"#!/url=./cpp_ref/class_m_fn_light_data_attribute.html\">MFnLightDataAttribute</a></td><td class=\"entry\"><span class=\"mlabel\">virtual</span></td></tr>\n\
</table></div><!-- contents -->\n\
</div><!-- doc-content -->\n\
<!-- start footer part -->\n\
\n\
      <div class=\"footer-block\"><a href=\"../html/ac.cmtdialog.htm\" class=\"comments-anchor\" target=\"_blank\"><span class=\"comments-link\">Please send us your comment about this page</span></a></div></div>\n\
   </div></div></body>\n\
</html>\n\
";