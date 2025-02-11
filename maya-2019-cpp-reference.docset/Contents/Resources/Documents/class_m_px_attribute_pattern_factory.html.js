var topic = "<!-- saved from url=(0024)http://docs.autodesk.com -->\n\
<html>\n\
   <head><script src=\"../scripts/yepnope.1.5.4-min.js\" type=\"text/javascript\"></script><script src=\"../scripts/lib/jquery-1.11.1.min.js\" type=\"text/javascript\"></script><meta http-equiv=\"Content-Type\" content=\"text/html; charset=UTF-8\"><script type=\"text/javascript\" src=\"../scripts/utils/adsk.redirect.js\"></script>\n\
      <title>MPxAttributePatternFactory Class Reference</title>\n\
   \n\
\n\
<meta name=\"topic-subtype\" content=\"C++\"></head>\n\
   <body height=\"100%\"><div class=\"body_content\" id=\"body-content\"><link rel=\"stylesheet\" type=\"text/css\" href=\"cpp_ref/navtree.css\"><link rel=\"stylesheet\" type=\"text/css\" href=\"cpp_ref/doxygen.css\"><link rel=\"stylesheet\" type=\"text/css\" href=\"cpp_ref/tabs.css\"><link rel=\"stylesheet\" type=\"text/css\" href=\"style/adsk.cpm.css\"><script type=\"text/javascript\">\n\
var tocSystemNeedsToBeLoaded = typeof(cpp_ref_adsk_ref_toc) == \'undefined\';\n\
var weAreIn21 = $(\'div#main.view-active\').length;\n\
var tocPrefix = \'\';\n\
if (weAreIn21)\n\
{ tocPrefix = \'cpp_ref/\'; }\n\
function cpp_ref_initializeToc(forceTrigger) {\n\
    cpp_ref_adsk_ref_toc.initResizable();\n\
    cpp_ref_adsk_ref_toc.initNavTree(\'class_m_px_attribute_pattern_factory.html\', tocPrefix);\n\
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
</script><script>$(\"div#WidgetFloaterPanels,link[href*=\'microsofttranslator.com\'],script[src*=\'microsofttranslator.com\'],script[src*=\'bing.com\']\").remove();</script><script type=\'text/javascript\'>$(\"div#navigation,div#breadcrumbs,div#banner\").attr(\"translate\",\"no\"); var mtLocation = ((location && location.href && location.href.indexOf(\'https\') == 0)?\'https://ssl.microsofttranslator.com\':\'http://www.microsofttranslator.com\')+\'/ajax/v3/WidgetV3.ashx?ctf=True&ui=true&settings=Manual&from=en&hidelanguages=\'; yepnope.injectJs(mtLocation, function() {}, { charset:\'utf-8\', type:\'text/javascript\' } );</script><script>\n\
 if (!tocSystemNeedsToBeLoaded) { cpp_ref_initializeToc(); }\n\
 </script><!-- begin MT -->\n\
            \n\
            <div id=\'MicrosoftTranslatorWidget\' class=\'Dark\' style=\'float:right;z-index:100;color:white;background-color:#bbbbbb;height:58px;overflow:hidden\'></div>\n\
      <div>\n\
         <div class=\"head\">\n\
            <h1>MPxAttributePatternFactory Class Reference</h1>\n\
         </div>\n\
\n\
    <div id=\"top\"><!-- Generated by Doxygen 1.8.10 -->\n\
  <div id=\"navrow1\" class=\"tabs\">\n\
    <ul class=\"tablist\">\n\
      <li><a href=\"#!/url=./cpp_ref/index.html\"><span>Main&#160;Page</span></a></li>\n\
      <li><a href=\"#!/url=./cpp_ref/pages.html\"><span>Topics</span></a></li>\n\
      <li><a href=\"#!/url=./cpp_ref/modules.html\"><span>Modules</span></a></li>\n\
      <li><a href=\"#!/url=./cpp_ref/namespaces.html\"><span>Namespaces</span></a></li>\n\
      <li class=\"current\"><a href=\"#!/url=./cpp_ref/annotated.html\"><span>Classes</span></a></li>\n\
      <li><a href=\"#!/url=./cpp_ref/files.html\"><span>Files</span></a></li>\n\
      <li><a href=\"#!/url=./cpp_ref/examples.html\"><span>Examples</span></a></li>\n\
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
<div class=\"header\">\n\
  \n\
  <div class=\"headertitle\">\n\
<div class=\"title\">MPxAttributePatternFactory Class Reference<span class=\"mlabels\"><span class=\"mlabel\">abstract</span></span><div class=\"ingroups\"><a class=\"el\" translate=\"no\" href=\"#!/url=./cpp_ref/group___open_maya.html\">OpenMaya - API module for common classes</a> &#124; <a class=\"el\" translate=\"no\" href=\"#!/url=./cpp_ref/group___m_px.html\">Proxy classes</a></div></div>  </div>\n\
<div class=\"summary\">\n\
<a href=\"class_m_px_attribute_pattern_factory.html#pub-methods\">Public Member Functions</a> &#124;\n\
<a href=\"class_m_px_attribute_pattern_factory.html#pub-static-methods\">Static Public Member Functions</a>  </div></div><!--header-->\n\
<div class=\"contents\">\n\
\n\
<p><code>#include &lt;MPxAttributePatternFactory.h&gt;</code></p>\n\
<a name=\"details\" id=\"details\"></a><h2 class=\"groupheader\">Class Description</h2>\n\
<div class=\"textblock\"><p>Base class for user-defined attribute pattern factories. </p>\n\
<p><a class=\"el\" translate=\"no\" href=\"#!/url=./cpp_ref/class_m_px_attribute_pattern_factory.html\" title=\"Base class for user-defined attribute pattern factories. \">MPxAttributePatternFactory</a> is the parent class of all user defined attribute pattern factories.</p>\n\
<p>This class can be used to implement new kinds of attribute pattern factories within Maya that behave in a similar manner to the attribute pattern factories included in Maya. </p>\n\
</div><table class=\"memberdecls\">\n\
<tr class=\"heading\"><td colspan=\"2\"><h2 class=\"groupheader\"><a name=\"pub-methods\"></a>\n\
Public Member Functions</h2></td></tr>\n\
<tr class=\"memitem:adc6b19b9124def6907924f9ca58b4163\"><td class=\"memItemLeft\" translate=\"no\" align=\"right\" valign=\"top\"><a class=\"anchor\" id=\"adc6b19b9124def6907924f9ca58b4163\"></a>\n\
&#160;</td><td class=\"memItemRight\" translate=\"no\" valign=\"bottom\"><a class=\"el\" translate=\"no\" href=\"#!/url=./cpp_ref/class_m_px_attribute_pattern_factory.html#adc6b19b9124def6907924f9ca58b4163\">MPxAttributePatternFactory</a> ()</td></tr>\n\
<tr class=\"memdesc:adc6b19b9124def6907924f9ca58b4163\"><td class=\"mdescLeft\">&#160;</td><td class=\"mdescRight\">Class constructor. <br></td></tr>\n\
<tr class=\"separator:adc6b19b9124def6907924f9ca58b4163\"><td class=\"memSeparator\" colspan=\"2\">&#160;</td></tr>\n\
<tr class=\"memitem:a01ef688dd6f81ef30bcade77015ceffe\"><td class=\"memItemLeft\" translate=\"no\" align=\"right\" valign=\"top\"><a class=\"anchor\" id=\"a01ef688dd6f81ef30bcade77015ceffe\"></a>\n\
virtual&#160;</td><td class=\"memItemRight\" translate=\"no\" valign=\"bottom\"><a class=\"el\" translate=\"no\" href=\"#!/url=./cpp_ref/class_m_px_attribute_pattern_factory.html#a01ef688dd6f81ef30bcade77015ceffe\">~MPxAttributePatternFactory</a> ()</td></tr>\n\
<tr class=\"memdesc:a01ef688dd6f81ef30bcade77015ceffe\"><td class=\"mdescLeft\">&#160;</td><td class=\"mdescRight\">Class destructor. <br></td></tr>\n\
<tr class=\"separator:a01ef688dd6f81ef30bcade77015ceffe\"><td class=\"memSeparator\" colspan=\"2\">&#160;</td></tr>\n\
<tr class=\"memitem:ae61a03d927ffb45c9462be478d531d54\"><td class=\"memItemLeft\" translate=\"no\" align=\"right\" valign=\"top\">virtual <a class=\"el\" translate=\"no\" href=\"#!/url=./cpp_ref/class_m_status.html\">MStatus</a>&#160;</td><td class=\"memItemRight\" translate=\"no\" valign=\"bottom\"><a class=\"el\" translate=\"no\" href=\"#!/url=./cpp_ref/class_m_px_attribute_pattern_factory.html#ae61a03d927ffb45c9462be478d531d54\">createPatternsFromString</a> (const <a class=\"el\" translate=\"no\" href=\"#!/url=./cpp_ref/class_m_string.html\">MString</a> &amp;patternString, <a class=\"el\" translate=\"no\" href=\"#!/url=./cpp_ref/class_m_attribute_pattern_array.html\">MAttributePatternArray</a> &amp;createdPatterns) const  =0</td></tr>\n\
<tr class=\"memdesc:ae61a03d927ffb45c9462be478d531d54\"><td class=\"mdescLeft\">&#160;</td><td class=\"mdescRight\">Call this to define a new attribute pattern using the pattern factory format definition passed in through the string parameter.  <a href=\"class_m_px_attribute_pattern_factory.html#ae61a03d927ffb45c9462be478d531d54\">More...</a><br></td></tr>\n\
<tr class=\"separator:ae61a03d927ffb45c9462be478d531d54\"><td class=\"memSeparator\" colspan=\"2\">&#160;</td></tr>\n\
<tr class=\"memitem:a7d97437acb6aefe2bacb65d3c42bf1cb\"><td class=\"memItemLeft\" translate=\"no\" align=\"right\" valign=\"top\">virtual <a class=\"el\" translate=\"no\" href=\"#!/url=./cpp_ref/class_m_status.html\">MStatus</a>&#160;</td><td class=\"memItemRight\" translate=\"no\" valign=\"bottom\"><a class=\"el\" translate=\"no\" href=\"#!/url=./cpp_ref/class_m_px_attribute_pattern_factory.html#a7d97437acb6aefe2bacb65d3c42bf1cb\">createPatternsFromFile</a> (const <a class=\"el\" translate=\"no\" href=\"#!/url=./cpp_ref/class_m_string.html\">MString</a> &amp;patternFile, <a class=\"el\" translate=\"no\" href=\"#!/url=./cpp_ref/class_m_attribute_pattern_array.html\">MAttributePatternArray</a> &amp;createdPatterns) const  =0</td></tr>\n\
<tr class=\"memdesc:a7d97437acb6aefe2bacb65d3c42bf1cb\"><td class=\"mdescLeft\">&#160;</td><td class=\"mdescRight\">Call this to define a new attribute pattern using the pattern factory format definition passed in through the contents of the file in the parameter.  <a href=\"class_m_px_attribute_pattern_factory.html#a7d97437acb6aefe2bacb65d3c42bf1cb\">More...</a><br></td></tr>\n\
<tr class=\"separator:a7d97437acb6aefe2bacb65d3c42bf1cb\"><td class=\"memSeparator\" colspan=\"2\">&#160;</td></tr>\n\
<tr class=\"memitem:a785434431aa2e040991a56ed32d324ec\"><td class=\"memItemLeft\" translate=\"no\" align=\"right\" valign=\"top\">virtual <a class=\"el\" translate=\"no\" href=\"#!/url=./cpp_ref/class_m_string.html\">MString</a>&#160;</td><td class=\"memItemRight\" translate=\"no\" valign=\"bottom\"><a class=\"el\" translate=\"no\" href=\"#!/url=./cpp_ref/class_m_px_attribute_pattern_factory.html#a785434431aa2e040991a56ed32d324ec\">name</a> () const  =0</td></tr>\n\
<tr class=\"memdesc:a785434431aa2e040991a56ed32d324ec\"><td class=\"mdescLeft\">&#160;</td><td class=\"mdescRight\">Return the name of the pattern factory.  <a href=\"class_m_px_attribute_pattern_factory.html#a785434431aa2e040991a56ed32d324ec\">More...</a><br></td></tr>\n\
<tr class=\"separator:a785434431aa2e040991a56ed32d324ec\"><td class=\"memSeparator\" colspan=\"2\">&#160;</td></tr>\n\
</table><table class=\"memberdecls\">\n\
<tr class=\"heading\"><td colspan=\"2\"><h2 class=\"groupheader\"><a name=\"pub-static-methods\"></a>\n\
Static Public Member Functions</h2></td></tr>\n\
<tr class=\"memitem:a774cd5d8fbebe8e7ed82a5aa587d1f04\"><td class=\"memItemLeft\" translate=\"no\" align=\"right\" valign=\"top\">static const char *&#160;</td><td class=\"memItemRight\" translate=\"no\" valign=\"bottom\"><a class=\"el\" translate=\"no\" href=\"#!/url=./cpp_ref/class_m_px_attribute_pattern_factory.html#a774cd5d8fbebe8e7ed82a5aa587d1f04\">className</a> ()</td></tr>\n\
<tr class=\"memdesc:a774cd5d8fbebe8e7ed82a5aa587d1f04\"><td class=\"mdescLeft\">&#160;</td><td class=\"mdescRight\">Returns the name of this class.  <a href=\"class_m_px_attribute_pattern_factory.html#a774cd5d8fbebe8e7ed82a5aa587d1f04\">More...</a><br></td></tr>\n\
<tr class=\"separator:a774cd5d8fbebe8e7ed82a5aa587d1f04\"><td class=\"memSeparator\" colspan=\"2\">&#160;</td></tr>\n\
</table>\n\
<h2 class=\"groupheader\">Member Function Documentation</h2>\n\
<a class=\"anchor\" id=\"ae61a03d927ffb45c9462be478d531d54\"></a>\n\
<div class=\"memitem\">\n\
<div class=\"memproto\">\n\
<table class=\"mlabels\">\n\
  <tr>\n\
  <td class=\"mlabels-left\">\n\
      <table class=\"memname\">\n\
        <tr>\n\
          <td class=\"memname\" translate=\"no\"><a class=\"el\" translate=\"no\" href=\"#!/url=./cpp_ref/class_m_status.html\">MStatus</a> createPatternsFromString </td>\n\
          <td>(</td>\n\
          <td class=\"paramtype\">const <a class=\"el\" translate=\"no\" href=\"#!/url=./cpp_ref/class_m_string.html\">MString</a> &amp;&#160;</td>\n\
          <td class=\"paramname\"><em>patternString</em>, </td>\n\
        </tr>\n\
        <tr>\n\
          <td class=\"paramkey\"></td>\n\
          <td></td>\n\
          <td class=\"paramtype\"><a class=\"el\" translate=\"no\" href=\"#!/url=./cpp_ref/class_m_attribute_pattern_array.html\">MAttributePatternArray</a> &amp;&#160;</td>\n\
          <td class=\"paramname\"><em>createdPatterns</em>&#160;</td>\n\
        </tr>\n\
        <tr>\n\
          <td></td>\n\
          <td>)</td>\n\
          <td></td><td> const</td>\n\
        </tr>\n\
      </table>\n\
  </td>\n\
  <td class=\"mlabels-right\">\n\
<span class=\"mlabels\"><span class=\"mlabel\">pure virtual</span></span>  </td>\n\
  </tr>\n\
</table>\n\
</div><div class=\"memdoc\">\n\
\n\
<p>Call this to define a new attribute pattern using the pattern factory format definition passed in through the string parameter. </p>\n\
<p>No default implementation is available.</p>\n\
<dl class=\"params\"><dt>Parameters</dt><dd>\n\
  <table class=\"params\">\n\
    <tr><td class=\"paramdir\">[in]</td><td class=\"paramname\">patternString</td><td>The pattern definition </td></tr>\n\
    <tr><td class=\"paramdir\">[out]</td><td class=\"paramname\">createdPatterns</td><td>List of attribute patterns created from the string</td></tr>\n\
  </table>\n\
  </dd>\n\
</dl>\n\
<dl class=\"section return\"><dt>Returns</dt><dd><ul>\n\
<li><b>MS::kFailure</b> Patterns could not be created. </li>\n\
<li><b>MS::kSuccess</b> Patterns were successfully created. </li>\n\
</ul>\n\
</dd></dl>\n\
\n\
</div>\n\
</div>\n\
<a class=\"anchor\" id=\"a7d97437acb6aefe2bacb65d3c42bf1cb\"></a>\n\
<div class=\"memitem\">\n\
<div class=\"memproto\">\n\
<table class=\"mlabels\">\n\
  <tr>\n\
  <td class=\"mlabels-left\">\n\
      <table class=\"memname\">\n\
        <tr>\n\
          <td class=\"memname\" translate=\"no\"><a class=\"el\" translate=\"no\" href=\"#!/url=./cpp_ref/class_m_status.html\">MStatus</a> createPatternsFromFile </td>\n\
          <td>(</td>\n\
          <td class=\"paramtype\">const <a class=\"el\" translate=\"no\" href=\"#!/url=./cpp_ref/class_m_string.html\">MString</a> &amp;&#160;</td>\n\
          <td class=\"paramname\"><em>patternPath</em>, </td>\n\
        </tr>\n\
        <tr>\n\
          <td class=\"paramkey\"></td>\n\
          <td></td>\n\
          <td class=\"paramtype\"><a class=\"el\" translate=\"no\" href=\"#!/url=./cpp_ref/class_m_attribute_pattern_array.html\">MAttributePatternArray</a> &amp;&#160;</td>\n\
          <td class=\"paramname\"><em>createdPatterns</em>&#160;</td>\n\
        </tr>\n\
        <tr>\n\
          <td></td>\n\
          <td>)</td>\n\
          <td></td><td> const</td>\n\
        </tr>\n\
      </table>\n\
  </td>\n\
  <td class=\"mlabels-right\">\n\
<span class=\"mlabels\"><span class=\"mlabel\">pure virtual</span></span>  </td>\n\
  </tr>\n\
</table>\n\
</div><div class=\"memdoc\">\n\
\n\
<p>Call this to define a new attribute pattern using the pattern factory format definition passed in through the contents of the file in the parameter. </p>\n\
<p>No default implementation is available.</p>\n\
<dl class=\"params\"><dt>Parameters</dt><dd>\n\
  <table class=\"params\">\n\
    <tr><td class=\"paramdir\">[in]</td><td class=\"paramname\">patternPath</td><td>The file name to be expanded </td></tr>\n\
    <tr><td class=\"paramdir\">[out]</td><td class=\"paramname\">createdPatterns</td><td>List of attribute patterns created from the file</td></tr>\n\
  </table>\n\
  </dd>\n\
</dl>\n\
<dl class=\"section return\"><dt>Returns</dt><dd><ul>\n\
<li><b>MS::kFailure</b> Patterns could not be created. </li>\n\
<li><b>MS::kSuccess</b> Patterns were successfully created. </li>\n\
</ul>\n\
</dd></dl>\n\
\n\
</div>\n\
</div>\n\
<a class=\"anchor\" id=\"a785434431aa2e040991a56ed32d324ec\"></a>\n\
<div class=\"memitem\">\n\
<div class=\"memproto\">\n\
<table class=\"mlabels\">\n\
  <tr>\n\
  <td class=\"mlabels-left\">\n\
      <table class=\"memname\">\n\
        <tr>\n\
          <td class=\"memname\" translate=\"no\"><a class=\"el\" translate=\"no\" href=\"#!/url=./cpp_ref/class_m_string.html\">MString</a> name </td>\n\
          <td>(</td>\n\
          <td class=\"paramname\"></td><td>)</td>\n\
          <td> const</td>\n\
        </tr>\n\
      </table>\n\
  </td>\n\
  <td class=\"mlabels-right\">\n\
<span class=\"mlabels\"><span class=\"mlabel\">pure virtual</span></span>  </td>\n\
  </tr>\n\
</table>\n\
</div><div class=\"memdoc\">\n\
\n\
<p>Return the name of the pattern factory. </p>\n\
<p>It\'s merely an identification for the commands operating on pattern factories and has no significance beyond that.</p>\n\
<dl class=\"section return\"><dt>Returns</dt><dd>Name of the plugin pattern factory </dd></dl>\n\
\n\
</div>\n\
</div>\n\
<a class=\"anchor\" id=\"a774cd5d8fbebe8e7ed82a5aa587d1f04\"></a>\n\
<div class=\"memitem\">\n\
<div class=\"memproto\">\n\
<table class=\"mlabels\">\n\
  <tr>\n\
  <td class=\"mlabels-left\">\n\
      <table class=\"memname\">\n\
        <tr>\n\
          <td class=\"memname\" translate=\"no\">const char * className </td>\n\
          <td>(</td>\n\
          <td class=\"paramname\"></td><td>)</td>\n\
          <td></td>\n\
        </tr>\n\
      </table>\n\
  </td>\n\
  <td class=\"mlabels-right\">\n\
<span class=\"mlabels\"><span class=\"mlabel\">static</span></span>  </td>\n\
  </tr>\n\
</table>\n\
</div><div class=\"memdoc\">\n\
\n\
<p>Returns the name of this class. </p>\n\
<dl class=\"section return\"><dt>Returns</dt><dd>The name of this class. </dd></dl>\n\
\n\
</div>\n\
</div>\n\
<hr>The documentation for this class was generated from the following files:<ul>\n\
<li>MPxAttributePatternFactory.h</li>\n\
<li>MPxAttributePatternFactory.cpp</li>\n\
</ul>\n\
</div><!-- contents -->\n\
</div><!-- doc-content -->\n\
          <div class=\"footer-block\"><a href=\"../html/ac.cmtdialog.htm\" class=\"comments-anchor\" target=\"_blank\"><span class=\"comments-link\">Please send us your comment about this page</span></a></div></div>\n\
   </div></body>\n\
</html>\n\
";