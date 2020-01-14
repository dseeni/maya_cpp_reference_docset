var topic = "<!-- saved from url=(0024)http://docs.autodesk.com -->\n\
<html>\n\
   <head><script src=\"../scripts/yepnope.1.5.4-min.js\" type=\"text/javascript\"></script><script src=\"../scripts/lib/jquery-1.11.1.min.js\" type=\"text/javascript\"></script>\n\
      <title>C++ API Reference: StructureSerializerDebug Class Reference</title>\n\
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
    cpp_ref_adsk_ref_toc.initNavTree(\'classadsk_1_1_data_1_1_structure_serializer_debug.html\', tocPrefix);\n\
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
      <div>\n\
         <div class=\"head\">\n\
            <h1>C++ API Reference: StructureSerializerDebug Class Reference</h1>\n\
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
  \n\
  <div class=\"headertitle\">\n\
<div class=\"title\">StructureSerializerDebug Class Reference</div>  </div>\n\
<div class=\"summary\">\n\
<a href=\"classadsk_1_1_data_1_1_structure_serializer_debug.html#pub-methods\">Public Member Functions</a> &#124;\n\
<a href=\"#!/url=./cpp_ref/classadsk_1_1_data_1_1_structure_serializer_debug-members.html\">List of all members</a>  </div></div><!--header-->\n\
<div class=\"contents\">\n\
\n\
<p>Class handling the data structure format type \"Debug\".  \n\
 <a href=\"#!/url=./cpp_ref/classadsk_1_1_data_1_1_structure_serializer_debug.html#details\">More...</a></p>\n\
\n\
<p><code>#include &lt;adskDataStructureSerializerDebug.h&gt;</code></p>\n\
<div id=\"dynsection-0\" onclick=\"return toggleVisibility(this)\" class=\"dynheader closed\" style=\"cursor:pointer;\">\n\
  <img id=\"dynsection-0-trigger\" src=\"cpp_ref/closed.png\" alt=\"+\"> Inheritance diagram for StructureSerializerDebug:</div>\n\
<div id=\"dynsection-0-summary\" class=\"dynsummary\" style=\"display:block;\">\n\
</div>\n\
<div id=\"dynsection-0-content\" class=\"dyncontent\" style=\"display:none;\">\n\
 <div class=\"center\">\n\
  <img src=\"cpp_ref/classadsk_1_1_data_1_1_structure_serializer_debug.png\" usemap=\"#StructureSerializerDebug_map\" alt=\"\">\n\
  <map id=\"StructureSerializerDebug_map\" name=\"StructureSerializerDebug_map\">\n\
<area href=\"classadsk_1_1_data_1_1_structure_serializer.html\" title=\"Class handling the definition of the format for serialization of data structures. ...\" alt=\"StructureSerializer\" shape=\"rect\" coords=\"0,0,155,24\">\n\
</map>\n\
 </div></div>\n\
<table class=\"memberdecls\">\n\
<tr class=\"heading\"><td colspan=\"2\"><h2 class=\"groupheader\"><a name=\"pub-methods\"></a>\n\
Public Member Functions</h2></td></tr>\n\
<tr class=\"memitem:a59c1295d581f913eab574435ddf70c5d\"><td class=\"memItemLeft\" align=\"right\" valign=\"top\"><a class=\"anchor\" id=\"a59c1295d581f913eab574435ddf70c5d\"></a>\n\
virtual&#160;</td><td class=\"memItemRight\" valign=\"bottom\"><a class=\"el\" href=\"#!/url=./cpp_ref/classadsk_1_1_data_1_1_structure_serializer_debug.html#a59c1295d581f913eab574435ddf70c5d\">~StructureSerializerDebug</a> ()</td></tr>\n\
<tr class=\"memdesc:a59c1295d581f913eab574435ddf70c5d\"><td class=\"mdescLeft\">&#160;</td><td class=\"mdescRight\">Default destructor, does nothing. <br></td></tr>\n\
<tr class=\"separator:a59c1295d581f913eab574435ddf70c5d\"><td class=\"memSeparator\" colspan=\"2\">&#160;</td></tr>\n\
<tr class=\"memitem:a235ae5c69ff19b13df8ee87b3cdc2688\"><td class=\"memItemLeft\" align=\"right\" valign=\"top\">virtual <a class=\"el\" href=\"#!/url=./cpp_ref/classadsk_1_1_data_1_1_structure.html\">Structure</a> *&#160;</td><td class=\"memItemRight\" valign=\"bottom\"><a class=\"el\" href=\"#!/url=./cpp_ref/classadsk_1_1_data_1_1_structure_serializer_debug.html#a235ae5c69ff19b13df8ee87b3cdc2688\">read</a> (std::istream &amp;cSrc, std::string &amp;errors) const </td></tr>\n\
<tr class=\"memdesc:a235ae5c69ff19b13df8ee87b3cdc2688\"><td class=\"mdescLeft\">&#160;</td><td class=\"mdescRight\">Mandatory pure virtual read method fails immediately.  <a href=\"classadsk_1_1_data_1_1_structure_serializer_debug.html#a235ae5c69ff19b13df8ee87b3cdc2688\">More...</a><br></td></tr>\n\
<tr class=\"separator:a235ae5c69ff19b13df8ee87b3cdc2688\"><td class=\"memSeparator\" colspan=\"2\">&#160;</td></tr>\n\
<tr class=\"memitem:a7d2179c50f350d241d052f739bb1cf4d\"><td class=\"memItemLeft\" align=\"right\" valign=\"top\">virtual int&#160;</td><td class=\"memItemRight\" valign=\"bottom\"><a class=\"el\" href=\"#!/url=./cpp_ref/classadsk_1_1_data_1_1_structure_serializer_debug.html#a7d2179c50f350d241d052f739bb1cf4d\">write</a> (const <a class=\"el\" href=\"#!/url=./cpp_ref/classadsk_1_1_data_1_1_structure.html\">Structure</a> &amp;dataToWrite, std::ostream &amp;cDst) const </td></tr>\n\
<tr class=\"memdesc:a7d2179c50f350d241d052f739bb1cf4d\"><td class=\"mdescLeft\">&#160;</td><td class=\"mdescRight\">Output the <a class=\"el\" href=\"#!/url=./cpp_ref/classadsk_1_1_data_1_1_structure.html\" title=\"Class handling the definition of the structure of a piece of data. \">Structure</a> object in <a class=\"el\" href=\"#!/url=./cpp_ref/namespaceadsk_1_1_debug.html\" title=\"Contains classes related to debugging. \">Debug</a> format into the stream.  <a href=\"classadsk_1_1_data_1_1_structure_serializer_debug.html#a7d2179c50f350d241d052f739bb1cf4d\">More...</a><br></td></tr>\n\
<tr class=\"separator:a7d2179c50f350d241d052f739bb1cf4d\"><td class=\"memSeparator\" colspan=\"2\">&#160;</td></tr>\n\
<tr class=\"memitem:a354892c3832eb53a02639b86d27bfe24\"><td class=\"memItemLeft\" align=\"right\" valign=\"top\">virtual void&#160;</td><td class=\"memItemRight\" valign=\"bottom\"><a class=\"el\" href=\"#!/url=./cpp_ref/classadsk_1_1_data_1_1_structure_serializer_debug.html#a354892c3832eb53a02639b86d27bfe24\">getFormatDescription</a> (std::ostream &amp;info) const </td></tr>\n\
<tr class=\"memdesc:a354892c3832eb53a02639b86d27bfe24\"><td class=\"mdescLeft\">&#160;</td><td class=\"mdescRight\">Get a description of the <a class=\"el\" href=\"#!/url=./cpp_ref/namespaceadsk_1_1_debug.html\" title=\"Contains classes related to debugging. \">Debug</a> structure format.  <a href=\"classadsk_1_1_data_1_1_structure_serializer_debug.html#a354892c3832eb53a02639b86d27bfe24\">More...</a><br></td></tr>\n\
<tr class=\"separator:a354892c3832eb53a02639b86d27bfe24\"><td class=\"memSeparator\" colspan=\"2\">&#160;</td></tr>\n\
<tr class=\"inherit_header pub_methods_classadsk_1_1_data_1_1_structure_serializer\"><td colspan=\"2\" onclick=\"javascript:toggleInherit(\'pub_methods_classadsk_1_1_data_1_1_structure_serializer\')\"><img src=\"cpp_ref/closed.png\" alt=\"-\">&#160;Public Member Functions inherited from <a class=\"el\" href=\"#!/url=./cpp_ref/classadsk_1_1_data_1_1_structure_serializer.html\">StructureSerializer</a></td></tr>\n\
<tr class=\"memitem:a5061a368977697fa70c657cfe959f305 inherit pub_methods_classadsk_1_1_data_1_1_structure_serializer\"><td class=\"memItemLeft\" align=\"right\" valign=\"top\"><a class=\"anchor\" id=\"a5061a368977697fa70c657cfe959f305\"></a>\n\
&#160;</td><td class=\"memItemRight\" valign=\"bottom\"><a class=\"el\" href=\"#!/url=./cpp_ref/classadsk_1_1_data_1_1_structure_serializer.html#a5061a368977697fa70c657cfe959f305\">StructureSerializer</a> ()</td></tr>\n\
<tr class=\"memdesc:a5061a368977697fa70c657cfe959f305 inherit pub_methods_classadsk_1_1_data_1_1_structure_serializer\"><td class=\"mdescLeft\">&#160;</td><td class=\"mdescRight\">Default constructor, does nothing. <br></td></tr>\n\
<tr class=\"separator:a5061a368977697fa70c657cfe959f305 inherit pub_methods_classadsk_1_1_data_1_1_structure_serializer\"><td class=\"memSeparator\" colspan=\"2\">&#160;</td></tr>\n\
<tr class=\"memitem:aacd7afc0d17ad57113e5ed9495d09754 inherit pub_methods_classadsk_1_1_data_1_1_structure_serializer\"><td class=\"memItemLeft\" align=\"right\" valign=\"top\"><a class=\"anchor\" id=\"aacd7afc0d17ad57113e5ed9495d09754\"></a>\n\
virtual&#160;</td><td class=\"memItemRight\" valign=\"bottom\"><a class=\"el\" href=\"#!/url=./cpp_ref/classadsk_1_1_data_1_1_structure_serializer.html#aacd7afc0d17ad57113e5ed9495d09754\">~StructureSerializer</a> ()</td></tr>\n\
<tr class=\"memdesc:aacd7afc0d17ad57113e5ed9495d09754 inherit pub_methods_classadsk_1_1_data_1_1_structure_serializer\"><td class=\"mdescLeft\">&#160;</td><td class=\"mdescRight\">Default destructor, does nothing. <br></td></tr>\n\
<tr class=\"separator:aacd7afc0d17ad57113e5ed9495d09754 inherit pub_methods_classadsk_1_1_data_1_1_structure_serializer\"><td class=\"memSeparator\" colspan=\"2\">&#160;</td></tr>\n\
</table>\n\
<a name=\"details\" id=\"details\"></a><h2 class=\"groupheader\">Detailed Description</h2>\n\
<div class=\"textblock\"><p>Class handling the data structure format type \"Debug\". </p>\n\
<p>The \"Debug\" format is taken directly from the Print request handler on the <a class=\"el\" href=\"#!/url=./cpp_ref/classadsk_1_1_data_1_1_structure.html\" title=\"Class handling the definition of the structure of a piece of data. \">Structure</a> and owned object classes. The formatting will be self-describing so either print a structure or look at the <a class=\"el\" href=\"#!/url=./cpp_ref/namespaceadsk_1_1_debug.html\" title=\"Contains classes related to debugging. \">Debug</a> method in the <a class=\"el\" href=\"#!/url=./cpp_ref/classadsk_1_1_data_1_1_structure.html\" title=\"Class handling the definition of the structure of a piece of data. \">adsk::Data::Structure</a> class to see what information is printed. </p>\n\
</div><h2 class=\"groupheader\">Member Function Documentation</h2>\n\
<a class=\"anchor\" id=\"a235ae5c69ff19b13df8ee87b3cdc2688\"></a>\n\
<div class=\"memitem\">\n\
<div class=\"memproto\">\n\
<table class=\"mlabels\">\n\
  <tr>\n\
  <td class=\"mlabels-left\">\n\
      <table class=\"memname\">\n\
        <tr>\n\
          <td class=\"memname\"><a class=\"el\" href=\"#!/url=./cpp_ref/classadsk_1_1_data_1_1_structure.html\">Structure</a> * read </td>\n\
          <td>(</td>\n\
          <td class=\"paramtype\">std::istream &amp;&#160;</td>\n\
          <td class=\"paramname\"><em>cSrc</em>, </td>\n\
        </tr>\n\
        <tr>\n\
          <td class=\"paramkey\"></td>\n\
          <td></td>\n\
          <td class=\"paramtype\">std::string &amp;&#160;</td>\n\
          <td class=\"paramname\"><em>errors</em>&#160;</td>\n\
        </tr>\n\
        <tr>\n\
          <td></td>\n\
          <td>)</td>\n\
          <td></td><td> const</td>\n\
        </tr>\n\
      </table>\n\
  </td>\n\
  <td class=\"mlabels-right\">\n\
<span class=\"mlabels\"><span class=\"mlabel\">virtual</span></span>  </td>\n\
  </tr>\n\
</table>\n\
</div><div class=\"memdoc\">\n\
\n\
<p>Mandatory pure virtual read method fails immediately. </p>\n\
<dl class=\"params\"><dt>Parameters</dt><dd>\n\
  <table class=\"params\">\n\
    <tr><td class=\"paramdir\">[in]</td><td class=\"paramname\">cSrc</td><td><a class=\"el\" href=\"#!/url=./cpp_ref/classadsk_1_1_data_1_1_stream.html\" title=\"Class handling a list of generic data. \">Stream</a> containing the <a class=\"el\" href=\"#!/url=./cpp_ref/namespaceadsk_1_1_debug.html\" title=\"Contains classes related to debugging. \">Debug</a> format data to be parsed </td></tr>\n\
    <tr><td class=\"paramdir\">[out]</td><td class=\"paramname\">errors</td><td>Description of problems found when parsing the string </td></tr>\n\
  </table>\n\
  </dd>\n\
</dl>\n\
<dl class=\"section return\"><dt>Returns</dt><dd>NULL since no <a class=\"el\" href=\"#!/url=./cpp_ref/classadsk_1_1_data_1_1_structure.html\" title=\"Class handling the definition of the structure of a piece of data. \">Structure</a> can be created from this format </dd></dl>\n\
\n\
<p>Implements <a class=\"el\" href=\"#!/url=./cpp_ref/classadsk_1_1_data_1_1_structure_serializer.html#a43601566c59b62a7c3838af6a5198e62\">StructureSerializer</a>.</p>\n\
\n\
</div>\n\
</div>\n\
<a class=\"anchor\" id=\"a7d2179c50f350d241d052f739bb1cf4d\"></a>\n\
<div class=\"memitem\">\n\
<div class=\"memproto\">\n\
<table class=\"mlabels\">\n\
  <tr>\n\
  <td class=\"mlabels-left\">\n\
      <table class=\"memname\">\n\
        <tr>\n\
          <td class=\"memname\">int write </td>\n\
          <td>(</td>\n\
          <td class=\"paramtype\">const <a class=\"el\" href=\"#!/url=./cpp_ref/classadsk_1_1_data_1_1_structure.html\">Structure</a> &amp;&#160;</td>\n\
          <td class=\"paramname\"><em>dataToWrite</em>, </td>\n\
        </tr>\n\
        <tr>\n\
          <td class=\"paramkey\"></td>\n\
          <td></td>\n\
          <td class=\"paramtype\">std::ostream &amp;&#160;</td>\n\
          <td class=\"paramname\"><em>cDst</em>&#160;</td>\n\
        </tr>\n\
        <tr>\n\
          <td></td>\n\
          <td>)</td>\n\
          <td></td><td> const</td>\n\
        </tr>\n\
      </table>\n\
  </td>\n\
  <td class=\"mlabels-right\">\n\
<span class=\"mlabels\"><span class=\"mlabel\">virtual</span></span>  </td>\n\
  </tr>\n\
</table>\n\
</div><div class=\"memdoc\">\n\
\n\
<p>Output the <a class=\"el\" href=\"#!/url=./cpp_ref/classadsk_1_1_data_1_1_structure.html\" title=\"Class handling the definition of the structure of a piece of data. \">Structure</a> object in <a class=\"el\" href=\"#!/url=./cpp_ref/namespaceadsk_1_1_debug.html\" title=\"Contains classes related to debugging. \">Debug</a> format into the stream. </p>\n\
<dl class=\"params\"><dt>Parameters</dt><dd>\n\
  <table class=\"params\">\n\
    <tr><td class=\"paramdir\">[in]</td><td class=\"paramname\">dataToWrite</td><td><a class=\"el\" href=\"#!/url=./cpp_ref/classadsk_1_1_data_1_1_structure.html\" title=\"Class handling the definition of the structure of a piece of data. \">Structure</a> to be formatted </td></tr>\n\
    <tr><td class=\"paramdir\">[out]</td><td class=\"paramname\">cDst</td><td><a class=\"el\" href=\"#!/url=./cpp_ref/classadsk_1_1_data_1_1_stream.html\" title=\"Class handling a list of generic data. \">Stream</a> to which the <a class=\"el\" href=\"#!/url=./cpp_ref/namespaceadsk_1_1_debug.html\" title=\"Contains classes related to debugging. \">Debug</a> format of the structure is written </td></tr>\n\
  </table>\n\
  </dd>\n\
</dl>\n\
<dl class=\"section return\"><dt>Returns</dt><dd>number of errors found during write, 0 means success </dd></dl>\n\
\n\
<p>Implements <a class=\"el\" href=\"#!/url=./cpp_ref/classadsk_1_1_data_1_1_structure_serializer.html#a31352a205f1b3acd5139be287c9ad59d\">StructureSerializer</a>.</p>\n\
\n\
</div>\n\
</div>\n\
<a class=\"anchor\" id=\"a354892c3832eb53a02639b86d27bfe24\"></a>\n\
<div class=\"memitem\">\n\
<div class=\"memproto\">\n\
<table class=\"mlabels\">\n\
  <tr>\n\
  <td class=\"mlabels-left\">\n\
      <table class=\"memname\">\n\
        <tr>\n\
          <td class=\"memname\">void getFormatDescription </td>\n\
          <td>(</td>\n\
          <td class=\"paramtype\">std::ostream &amp;&#160;</td>\n\
          <td class=\"paramname\"><em>info</em></td><td>)</td>\n\
          <td> const</td>\n\
        </tr>\n\
      </table>\n\
  </td>\n\
  <td class=\"mlabels-right\">\n\
<span class=\"mlabels\"><span class=\"mlabel\">virtual</span></span>  </td>\n\
  </tr>\n\
</table>\n\
</div><div class=\"memdoc\">\n\
\n\
<p>Get a description of the <a class=\"el\" href=\"#!/url=./cpp_ref/namespaceadsk_1_1_debug.html\" title=\"Contains classes related to debugging. \">Debug</a> structure format. </p>\n\
<dl class=\"params\"><dt>Parameters</dt><dd>\n\
  <table class=\"params\">\n\
    <tr><td class=\"paramdir\">[out]</td><td class=\"paramname\">info</td><td><a class=\"el\" href=\"#!/url=./cpp_ref/classadsk_1_1_data_1_1_stream.html\" title=\"Class handling a list of generic data. \">Stream</a> to which the <a class=\"el\" href=\"#!/url=./cpp_ref/namespaceadsk_1_1_debug.html\" title=\"Contains classes related to debugging. \">Debug</a> format description is output </td></tr>\n\
  </table>\n\
  </dd>\n\
</dl>\n\
\n\
<p>Implements <a class=\"el\" href=\"#!/url=./cpp_ref/classadsk_1_1_data_1_1_structure_serializer.html#a093c45f6d5cfb70297875c9e67da5b3b\">StructureSerializer</a>.</p>\n\
\n\
</div>\n\
</div>\n\
<hr>The documentation for this class was generated from the following files:<ul>\n\
<li>adskDataStructureSerializerDebug.h</li>\n\
<li>adskDataStructureSerializerDebug.cpp</li>\n\
</ul>\n\
</div><!-- contents -->\n\
</div><!-- doc-content -->\n\
<!-- start footer part -->\n\
\n\
      <div class=\"footer-block\"><a href=\"../html/ac.cmtdialog.htm\" class=\"comments-anchor\" target=\"_blank\"><span class=\"comments-link\">Please send us your comment about this page</span></a></div></div>\n\
   </div></body>\n\
</html>\n\
";