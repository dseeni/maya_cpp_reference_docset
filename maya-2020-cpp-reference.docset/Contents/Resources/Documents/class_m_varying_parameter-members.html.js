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
    cpp_ref_adsk_ref_toc.initNavTree(\'class_m_varying_parameter-members.html\', tocPrefix);\n\
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
<div class=\"title\">MVaryingParameter Member List</div>  </div>\n\
</div><!--header-->\n\
<div class=\"contents\">\n\
\n\
<p>This is the complete list of members for <a class=\"el\" href=\"#!/url=./cpp_ref/class_m_varying_parameter.html\">MVaryingParameter</a>, including all inherited members.</p>\n\
<table class=\"directory\">\n\
  <tr class=\"even\"><td class=\"entry\"><a class=\"el\" href=\"#!/url=./cpp_ref/class_m_varying_parameter.html#a95a51f552af434e08df0b88f23fd4213\">addElement</a>(const MVaryingParameter &amp;child)</td><td class=\"entry\"><a class=\"el\" href=\"#!/url=./cpp_ref/class_m_varying_parameter.html\">MVaryingParameter</a></td><td class=\"entry\"></td></tr>\n\
  <tr><td class=\"entry\"><a class=\"el\" href=\"#!/url=./cpp_ref/class_m_varying_parameter.html#a3c6621d567f5ac0c682a6fe323169942\">destinationSet</a>() const </td><td class=\"entry\"><a class=\"el\" href=\"#!/url=./cpp_ref/class_m_varying_parameter.html\">MVaryingParameter</a></td><td class=\"entry\"></td></tr>\n\
  <tr class=\"even\"><td class=\"entry\"><a class=\"el\" href=\"#!/url=./cpp_ref/class_m_varying_parameter.html#ae5acbe47d704ceb866e3717e2ac9422f\">dimension</a>() const </td><td class=\"entry\"><a class=\"el\" href=\"#!/url=./cpp_ref/class_m_varying_parameter.html\">MVaryingParameter</a></td><td class=\"entry\"></td></tr>\n\
  <tr><td class=\"entry\"><a class=\"el\" href=\"#!/url=./cpp_ref/class_m_varying_parameter.html#af1e803a3692b2dfecf7bd2fbad20417b\">getBuffer</a>(MGeometryLegacy &amp;geometry, const void *&amp;data, unsigned int &amp;elements, unsigned int &amp;count) const </td><td class=\"entry\"><a class=\"el\" href=\"#!/url=./cpp_ref/class_m_varying_parameter.html\">MVaryingParameter</a></td><td class=\"entry\"></td></tr>\n\
  <tr class=\"even\"><td class=\"entry\"><a class=\"el\" href=\"#!/url=./cpp_ref/class_m_varying_parameter.html#a40cde1a792fb9a978d3a3a68414fb865\">getElement</a>(unsigned int i) const </td><td class=\"entry\"><a class=\"el\" href=\"#!/url=./cpp_ref/class_m_varying_parameter.html\">MVaryingParameter</a></td><td class=\"entry\"></td></tr>\n\
  <tr><td class=\"entry\"><a class=\"el\" href=\"#!/url=./cpp_ref/class_m_varying_parameter.html#aa4a7975d9e4cdf0b0b6782bcfddc2223\">getElementSize</a>() const </td><td class=\"entry\"><a class=\"el\" href=\"#!/url=./cpp_ref/class_m_varying_parameter.html\">MVaryingParameter</a></td><td class=\"entry\"></td></tr>\n\
  <tr class=\"even\"><td class=\"entry\"><a class=\"el\" href=\"#!/url=./cpp_ref/class_m_varying_parameter.html#aff02aff6f3d490d0409429966c840b81\">getMaximumStride</a>() const </td><td class=\"entry\"><a class=\"el\" href=\"#!/url=./cpp_ref/class_m_varying_parameter.html\">MVaryingParameter</a></td><td class=\"entry\"></td></tr>\n\
  <tr><td class=\"entry\"><a class=\"el\" href=\"#!/url=./cpp_ref/class_m_varying_parameter.html#a45e2132632639698f9c4f668be933a70\">getSourceSetName</a>() const </td><td class=\"entry\"><a class=\"el\" href=\"#!/url=./cpp_ref/class_m_varying_parameter.html\">MVaryingParameter</a></td><td class=\"entry\"></td></tr>\n\
  <tr class=\"even\"><td class=\"entry\"><a class=\"el\" href=\"#!/url=./cpp_ref/class_m_varying_parameter.html#ad72ff2b3fb20052e4a2455dad5c10682\">getSourceType</a>() const </td><td class=\"entry\"><a class=\"el\" href=\"#!/url=./cpp_ref/class_m_varying_parameter.html\">MVaryingParameter</a></td><td class=\"entry\"></td></tr>\n\
  <tr><td class=\"entry\"><a class=\"el\" href=\"#!/url=./cpp_ref/class_m_varying_parameter.html#ac38803dedbdc3cbb9862e7f3577b34b4\">getUpdateId</a>() const </td><td class=\"entry\"><a class=\"el\" href=\"#!/url=./cpp_ref/class_m_varying_parameter.html\">MVaryingParameter</a></td><td class=\"entry\"></td></tr>\n\
  <tr class=\"even\"><td class=\"entry\"><a class=\"el\" href=\"#!/url=./cpp_ref/class_m_varying_parameter.html#a964fb7835dab43b8daa44ce3508791fc\">MVaryingParameter</a>()</td><td class=\"entry\"><a class=\"el\" href=\"#!/url=./cpp_ref/class_m_varying_parameter.html\">MVaryingParameter</a></td><td class=\"entry\"></td></tr>\n\
  <tr><td class=\"entry\"><a class=\"el\" href=\"#!/url=./cpp_ref/class_m_varying_parameter.html#a80c3b682fceed99bc2ff6f8c57fd252f\">MVaryingParameter</a>(const MString &amp;name, MVaryingParameterType type, int minDimension=1, int maxDimension=1, MVaryingParameterSemantic semantic=kNoSemantic, bool invertTexCoords=false, const MString &amp;semanticName=&quot;&quot;)</td><td class=\"entry\"><a class=\"el\" href=\"#!/url=./cpp_ref/class_m_varying_parameter.html\">MVaryingParameter</a></td><td class=\"entry\"></td></tr>\n\
  <tr class=\"even\"><td class=\"entry\"><a class=\"el\" href=\"#!/url=./cpp_ref/class_m_varying_parameter.html#a809af97f9bb44bf43ccf43feefa00582\">MVaryingParameter</a>(const MString &amp;name, MVaryingParameterType type, int minDimension, int maxDimension, int dimension, MVaryingParameterSemantic semantic=kNoSemantic, const MString &amp;destinationSet=&quot;&quot;, bool invertTexCoords=false, const MString &amp;semanticName=&quot;&quot;)</td><td class=\"entry\"><a class=\"el\" href=\"#!/url=./cpp_ref/class_m_varying_parameter.html\">MVaryingParameter</a></td><td class=\"entry\"></td></tr>\n\
  <tr><td class=\"entry\"><a class=\"el\" href=\"#!/url=./cpp_ref/class_m_varying_parameter.html#a2b60be1cebded46c3f39681c4521e564\">MVaryingParameter</a>(const MVaryingParameter &amp;src)</td><td class=\"entry\"><a class=\"el\" href=\"#!/url=./cpp_ref/class_m_varying_parameter.html\">MVaryingParameter</a></td><td class=\"entry\"></td></tr>\n\
  <tr class=\"even\"><td class=\"entry\"><a class=\"el\" href=\"#!/url=./cpp_ref/class_m_varying_parameter.html#a2e8d4c38a60806df8c2ffd6d09e70b96\">name</a>() const </td><td class=\"entry\"><a class=\"el\" href=\"#!/url=./cpp_ref/class_m_varying_parameter.html\">MVaryingParameter</a></td><td class=\"entry\"></td></tr>\n\
  <tr><td class=\"entry\"><a class=\"el\" href=\"#!/url=./cpp_ref/class_m_varying_parameter.html#ac7fba35931cc9a520837b0a752352e16\">numElements</a>() const </td><td class=\"entry\"><a class=\"el\" href=\"#!/url=./cpp_ref/class_m_varying_parameter.html\">MVaryingParameter</a></td><td class=\"entry\"></td></tr>\n\
  <tr class=\"even\"><td class=\"entry\"><a class=\"el\" href=\"#!/url=./cpp_ref/class_m_varying_parameter.html#a83e439db8fe526d6c2fcbc855599e710\">OPENMAYA_ENUM</a>(MVaryingParameterType, kInvalidParameter=-1, kStructure=0, kFloat, kDouble, kChar, kUnsignedChar, kInt16, kUnsignedInt16, kInt32, kUnsignedInt32)</td><td class=\"entry\"><a class=\"el\" href=\"#!/url=./cpp_ref/class_m_varying_parameter.html\">MVaryingParameter</a></td><td class=\"entry\"></td></tr>\n\
  <tr><td class=\"entry\"><a class=\"el\" href=\"#!/url=./cpp_ref/class_m_varying_parameter.html#a1beb29de7e0390741c31a2ab4e0d7110\">OPENMAYA_ENUM</a>(MVaryingParameterSemantic, kNoSemantic=0, kPosition, kNormal, kTexCoord, kColor, kWeight, kTangent=kWeight+2, kBinormal)</td><td class=\"entry\"><a class=\"el\" href=\"#!/url=./cpp_ref/class_m_varying_parameter.html\">MVaryingParameter</a></td><td class=\"entry\"></td></tr>\n\
  <tr class=\"even\"><td class=\"entry\"><a class=\"el\" href=\"#!/url=./cpp_ref/class_m_varying_parameter.html#aa197eec13b0e2b4c39aa791e5eab7775\">operator=</a>(const MVaryingParameter &amp;other)</td><td class=\"entry\"><a class=\"el\" href=\"#!/url=./cpp_ref/class_m_varying_parameter.html\">MVaryingParameter</a></td><td class=\"entry\"></td></tr>\n\
  <tr><td class=\"entry\"><a class=\"el\" href=\"#!/url=./cpp_ref/class_m_varying_parameter.html#a66c49a4bcc6af8fa674b1ccd7aca7683\">removeElements</a>()</td><td class=\"entry\"><a class=\"el\" href=\"#!/url=./cpp_ref/class_m_varying_parameter.html\">MVaryingParameter</a></td><td class=\"entry\"></td></tr>\n\
  <tr class=\"even\"><td class=\"entry\"><a class=\"el\" href=\"#!/url=./cpp_ref/class_m_varying_parameter.html#aa54f29a363de8795281d2e6e978e894c\">semantic</a>() const </td><td class=\"entry\"><a class=\"el\" href=\"#!/url=./cpp_ref/class_m_varying_parameter.html\">MVaryingParameter</a></td><td class=\"entry\"></td></tr>\n\
  <tr><td class=\"entry\"><a class=\"el\" href=\"#!/url=./cpp_ref/class_m_varying_parameter.html#a0ad0ec4f7ace0e9abc7efc5853bf82b6\">semanticName</a>() const </td><td class=\"entry\"><a class=\"el\" href=\"#!/url=./cpp_ref/class_m_varying_parameter.html\">MVaryingParameter</a></td><td class=\"entry\"></td></tr>\n\
  <tr class=\"even\"><td class=\"entry\"><a class=\"el\" href=\"#!/url=./cpp_ref/class_m_varying_parameter.html#afcc26717d5bd94c452342fdbe6711c8f\">setSource</a>(MVaryingParameter::MVaryingParameterSemantic type, const MString &amp;setName)</td><td class=\"entry\"><a class=\"el\" href=\"#!/url=./cpp_ref/class_m_varying_parameter.html\">MVaryingParameter</a></td><td class=\"entry\"></td></tr>\n\
  <tr><td class=\"entry\"><a class=\"el\" href=\"#!/url=./cpp_ref/class_m_varying_parameter.html#ac5bc75c68e4af65e137a099a49e299af\">type</a>() const </td><td class=\"entry\"><a class=\"el\" href=\"#!/url=./cpp_ref/class_m_varying_parameter.html\">MVaryingParameter</a></td><td class=\"entry\"></td></tr>\n\
  <tr class=\"even\"><td class=\"entry\"><a class=\"el\" href=\"#!/url=./cpp_ref/class_m_varying_parameter.html#a31ed4d164424069aa1b7a872c5ba2be9\">~MVaryingParameter</a>()</td><td class=\"entry\"><a class=\"el\" href=\"#!/url=./cpp_ref/class_m_varying_parameter.html\">MVaryingParameter</a></td><td class=\"entry\"></td></tr>\n\
</table></div><!-- contents -->\n\
</div><!-- doc-content -->\n\
<!-- start footer part -->\n\
\n\
      <div class=\"footer-block\"><a href=\"../html/ac.cmtdialog.htm\" class=\"comments-anchor\" target=\"_blank\"><span class=\"comments-link\">Please send us your comment about this page</span></a></div></div>\n\
   </div></div></body>\n\
</html>\n\
";