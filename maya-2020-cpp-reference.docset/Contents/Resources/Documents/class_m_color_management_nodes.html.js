var topic = "<!-- saved from url=(0024)http://docs.autodesk.com -->\n\
<html>\n\
   <head><script src=\"../scripts/yepnope.1.5.4-min.js\" type=\"text/javascript\"></script><script src=\"../scripts/lib/jquery-1.11.1.min.js\" type=\"text/javascript\"></script>\n\
      <title>C++ API Reference: MColorManagementNodes Class Reference</title>\n\
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
    cpp_ref_adsk_ref_toc.initNavTree(\'class_m_color_management_nodes.html\', tocPrefix);\n\
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
            <h1>C++ API Reference: MColorManagementNodes Class Reference</h1>\n\
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
<div class=\"title\">MColorManagementNodes Class Reference<div class=\"ingroups\"><a class=\"el\" href=\"#!/url=./cpp_ref/group___open_maya_render.html\">OpenMayaRender - API module for rendering</a></div></div>  </div>\n\
<div class=\"summary\">\n\
<a href=\"class_m_color_management_nodes.html#pub-static-methods\">Static Public Member Functions</a> &#124;\n\
<a href=\"#!/url=./cpp_ref/class_m_color_management_nodes-members.html\">List of all members</a>  </div></div><!--header-->\n\
<div class=\"contents\">\n\
\n\
<p>Utilities for manipulating color manageable nodes.  \n\
 <a href=\"#!/url=./cpp_ref/class_m_color_management_nodes.html#details\">More...</a></p>\n\
\n\
<p><code>#include &lt;MColorManagementNodes.h&gt;</code></p>\n\
<table class=\"memberdecls\">\n\
<tr class=\"heading\"><td colspan=\"2\"><h2 class=\"groupheader\"><a name=\"pub-static-methods\"></a>\n\
Static Public Member Functions</h2></td></tr>\n\
<tr class=\"memitem:a774cd5d8fbebe8e7ed82a5aa587d1f04\"><td class=\"memItemLeft\" align=\"right\" valign=\"top\">static const char *&#160;</td><td class=\"memItemRight\" valign=\"bottom\"><a class=\"el\" href=\"#!/url=./cpp_ref/class_m_color_management_nodes.html#a774cd5d8fbebe8e7ed82a5aa587d1f04\">className</a> ()</td></tr>\n\
<tr class=\"memdesc:a774cd5d8fbebe8e7ed82a5aa587d1f04\"><td class=\"mdescLeft\">&#160;</td><td class=\"mdescRight\">Returns the name of this class.  <a href=\"class_m_color_management_nodes.html#a774cd5d8fbebe8e7ed82a5aa587d1f04\">More...</a><br></td></tr>\n\
<tr class=\"separator:a774cd5d8fbebe8e7ed82a5aa587d1f04\"><td class=\"memSeparator\" colspan=\"2\">&#160;</td></tr>\n\
<tr class=\"memitem:a3758ed113bfeaa08c6f1bd5a4352b8f2\"><td class=\"memItemLeft\" align=\"right\" valign=\"top\">static bool&#160;</td><td class=\"memItemRight\" valign=\"bottom\"><a class=\"el\" href=\"#!/url=./cpp_ref/class_m_color_management_nodes.html#a3758ed113bfeaa08c6f1bd5a4352b8f2\">isColorManageable</a> (const <a class=\"el\" href=\"#!/url=./cpp_ref/class_m_object.html\">MObject</a> &amp;object)</td></tr>\n\
<tr class=\"memdesc:a3758ed113bfeaa08c6f1bd5a4352b8f2\"><td class=\"mdescLeft\">&#160;</td><td class=\"mdescRight\">Returns whether the object is color manageable or not.  <a href=\"class_m_color_management_nodes.html#a3758ed113bfeaa08c6f1bd5a4352b8f2\">More...</a><br></td></tr>\n\
<tr class=\"separator:a3758ed113bfeaa08c6f1bd5a4352b8f2\"><td class=\"memSeparator\" colspan=\"2\">&#160;</td></tr>\n\
<tr class=\"memitem:a3dc0b1a3b17add95b3cfd7b4d755f726\"><td class=\"memItemLeft\" align=\"right\" valign=\"top\">static bool&#160;</td><td class=\"memItemRight\" valign=\"bottom\"><a class=\"el\" href=\"#!/url=./cpp_ref/class_m_color_management_nodes.html#a3dc0b1a3b17add95b3cfd7b4d755f726\">isColorManaged</a> (const <a class=\"el\" href=\"#!/url=./cpp_ref/class_m_object.html\">MObject</a> &amp;object)</td></tr>\n\
<tr class=\"memdesc:a3dc0b1a3b17add95b3cfd7b4d755f726\"><td class=\"mdescLeft\">&#160;</td><td class=\"mdescRight\">Returns whether the object is color managed or not.  <a href=\"class_m_color_management_nodes.html#a3dc0b1a3b17add95b3cfd7b4d755f726\">More...</a><br></td></tr>\n\
<tr class=\"separator:a3dc0b1a3b17add95b3cfd7b4d755f726\"><td class=\"memSeparator\" colspan=\"2\">&#160;</td></tr>\n\
<tr class=\"memitem:a0aff45a2bd96d5f005d3a541aff4c3e6\"><td class=\"memItemLeft\" align=\"right\" valign=\"top\">static <a class=\"el\" href=\"#!/url=./cpp_ref/class_m_status.html\">MStatus</a>&#160;</td><td class=\"memItemRight\" valign=\"bottom\"><a class=\"el\" href=\"#!/url=./cpp_ref/class_m_color_management_nodes.html#a0aff45a2bd96d5f005d3a541aff4c3e6\">colorManage</a> (<a class=\"el\" href=\"#!/url=./cpp_ref/class_m_object.html\">MObject</a> &amp;object, const <a class=\"el\" href=\"#!/url=./cpp_ref/class_m_string.html\">MString</a> &amp;filename, <a class=\"el\" href=\"#!/url=./cpp_ref/class_m_d_g_modifier.html\">MDGModifier</a> &amp;dgModifier)</td></tr>\n\
<tr class=\"memdesc:a0aff45a2bd96d5f005d3a541aff4c3e6\"><td class=\"mdescLeft\">&#160;</td><td class=\"mdescRight\">Color manage one specific input node.  <a href=\"class_m_color_management_nodes.html#a0aff45a2bd96d5f005d3a541aff4c3e6\">More...</a><br></td></tr>\n\
<tr class=\"separator:a0aff45a2bd96d5f005d3a541aff4c3e6\"><td class=\"memSeparator\" colspan=\"2\">&#160;</td></tr>\n\
<tr class=\"memitem:aafa9f057a406d599b42e9ca3b7a7130e\"><td class=\"memItemLeft\" align=\"right\" valign=\"top\">static <a class=\"el\" href=\"#!/url=./cpp_ref/class_m_status.html\">MStatus</a>&#160;</td><td class=\"memItemRight\" valign=\"bottom\"><a class=\"el\" href=\"#!/url=./cpp_ref/class_m_color_management_nodes.html#aafa9f057a406d599b42e9ca3b7a7130e\">colorManageAllNodes</a> (<a class=\"el\" href=\"#!/url=./cpp_ref/class_m_d_g_modifier.html\">MDGModifier</a> &amp;dgModifier)</td></tr>\n\
<tr class=\"memdesc:aafa9f057a406d599b42e9ca3b7a7130e\"><td class=\"mdescLeft\">&#160;</td><td class=\"mdescRight\">Color manage all input nodes.  <a href=\"class_m_color_management_nodes.html#aafa9f057a406d599b42e9ca3b7a7130e\">More...</a><br></td></tr>\n\
<tr class=\"separator:aafa9f057a406d599b42e9ca3b7a7130e\"><td class=\"memSeparator\" colspan=\"2\">&#160;</td></tr>\n\
</table>\n\
<a name=\"details\" id=\"details\"></a><h2 class=\"groupheader\">Detailed Description</h2>\n\
<div class=\"textblock\"><p>Utilities for manipulating color manageable nodes. </p>\n\
</div><h2 class=\"groupheader\">Member Function Documentation</h2>\n\
<a class=\"anchor\" id=\"a774cd5d8fbebe8e7ed82a5aa587d1f04\"></a>\n\
<div class=\"memitem\">\n\
<div class=\"memproto\">\n\
<table class=\"mlabels\">\n\
  <tr>\n\
  <td class=\"mlabels-left\">\n\
      <table class=\"memname\">\n\
        <tr>\n\
          <td class=\"memname\">const char * className </td>\n\
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
<a class=\"anchor\" id=\"a3758ed113bfeaa08c6f1bd5a4352b8f2\"></a>\n\
<div class=\"memitem\">\n\
<div class=\"memproto\">\n\
<table class=\"mlabels\">\n\
  <tr>\n\
  <td class=\"mlabels-left\">\n\
      <table class=\"memname\">\n\
        <tr>\n\
          <td class=\"memname\">OPENMAYA_MAJOR_NAMESPACE_OPEN bool isColorManageable </td>\n\
          <td>(</td>\n\
          <td class=\"paramtype\">const <a class=\"el\" href=\"#!/url=./cpp_ref/class_m_object.html\">MObject</a> &amp;&#160;</td>\n\
          <td class=\"paramname\"><em>object</em></td><td>)</td>\n\
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
<p>Returns whether the object is color manageable or not. </p>\n\
<dl class=\"params\"><dt>Parameters</dt><dd>\n\
  <table class=\"params\">\n\
    <tr><td class=\"paramdir\">[in]</td><td class=\"paramname\">object</td><td>The input object to test</td></tr>\n\
  </table>\n\
  </dd>\n\
</dl>\n\
<dl class=\"section return\"><dt>Returns</dt><dd>true if object is color manageable </dd></dl>\n\
\n\
</div>\n\
</div>\n\
<a class=\"anchor\" id=\"a3dc0b1a3b17add95b3cfd7b4d755f726\"></a>\n\
<div class=\"memitem\">\n\
<div class=\"memproto\">\n\
<table class=\"mlabels\">\n\
  <tr>\n\
  <td class=\"mlabels-left\">\n\
      <table class=\"memname\">\n\
        <tr>\n\
          <td class=\"memname\">bool isColorManaged </td>\n\
          <td>(</td>\n\
          <td class=\"paramtype\">const <a class=\"el\" href=\"#!/url=./cpp_ref/class_m_object.html\">MObject</a> &amp;&#160;</td>\n\
          <td class=\"paramname\"><em>object</em></td><td>)</td>\n\
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
<p>Returns whether the object is color managed or not. </p>\n\
<dl class=\"params\"><dt>Parameters</dt><dd>\n\
  <table class=\"params\">\n\
    <tr><td class=\"paramdir\">[in]</td><td class=\"paramname\">object</td><td>The input object to test</td></tr>\n\
  </table>\n\
  </dd>\n\
</dl>\n\
<dl class=\"section return\"><dt>Returns</dt><dd>true if object is color managed </dd></dl>\n\
\n\
</div>\n\
</div>\n\
<a class=\"anchor\" id=\"a0aff45a2bd96d5f005d3a541aff4c3e6\"></a>\n\
<div class=\"memitem\">\n\
<div class=\"memproto\">\n\
<table class=\"mlabels\">\n\
  <tr>\n\
  <td class=\"mlabels-left\">\n\
      <table class=\"memname\">\n\
        <tr>\n\
          <td class=\"memname\"><a class=\"el\" href=\"#!/url=./cpp_ref/class_m_status.html\">MStatus</a> colorManage </td>\n\
          <td>(</td>\n\
          <td class=\"paramtype\"><a class=\"el\" href=\"#!/url=./cpp_ref/class_m_object.html\">MObject</a> &amp;&#160;</td>\n\
          <td class=\"paramname\"><em>object</em>, </td>\n\
        </tr>\n\
        <tr>\n\
          <td class=\"paramkey\"></td>\n\
          <td></td>\n\
          <td class=\"paramtype\">const <a class=\"el\" href=\"#!/url=./cpp_ref/class_m_string.html\">MString</a> &amp;&#160;</td>\n\
          <td class=\"paramname\"><em>filename</em>, </td>\n\
        </tr>\n\
        <tr>\n\
          <td class=\"paramkey\"></td>\n\
          <td></td>\n\
          <td class=\"paramtype\"><a class=\"el\" href=\"#!/url=./cpp_ref/class_m_d_g_modifier.html\">MDGModifier</a> &amp;&#160;</td>\n\
          <td class=\"paramname\"><em>dgModifier</em>&#160;</td>\n\
        </tr>\n\
        <tr>\n\
          <td></td>\n\
          <td>)</td>\n\
          <td></td><td></td>\n\
        </tr>\n\
      </table>\n\
  </td>\n\
  <td class=\"mlabels-right\">\n\
<span class=\"mlabels\"><span class=\"mlabel\">static</span></span>  </td>\n\
  </tr>\n\
</table>\n\
</div><div class=\"memdoc\">\n\
\n\
<p>Color manage one specific input node. </p>\n\
<p>This function will connect the input node to the global color management properties through these 4 plugs: \"colorManagementEnabled\" (whether color management is being used or not), \"colorManagementConfigFileEnabled\" (whether OCIO configuration file is being used or not), \"configFilePath\" (the OCIO config file path being used), \"workingSpace\" (target working space used for color management). It is the users\' responsibility to ensure that these plugs are exist beforehand. If not, this function will return as failed. This function is safe to be called if certain plug(s) is(are) already connected.</p>\n\
<p>In the case, plug \"colorSpace\" (the color space used for color management) is available in the input object, this function will apply the color management rule to it.</p>\n\
<dl class=\"params\"><dt>Parameters</dt><dd>\n\
  <table class=\"params\">\n\
    <tr><td class=\"paramdir\">[in]</td><td class=\"paramname\">object</td><td>The input object to be connected to global node </td></tr>\n\
    <tr><td class=\"paramdir\">[in]</td><td class=\"paramname\">filename</td><td>The texture filename used by the input object </td></tr>\n\
    <tr><td class=\"paramdir\">[in,out]</td><td class=\"paramname\">dgModifier</td><td>The DG modifier to be used</td></tr>\n\
  </table>\n\
  </dd>\n\
</dl>\n\
<dl class=\"section return\"><dt>Returns</dt><dd>Status code</dd></dl>\n\
<dl class=\"section user\"><dt>Status Codes:</dt><dd><ul>\n\
<li><b><a class=\"el\" href=\"#!/url=./cpp_ref/class_m_status.html#a02ab596f4febca68da503aaf8dde3a80af0536797208144380691e2b376ffc1d1\" title=\"The operation was successful. \">MStatus::kSuccess</a></b> The operation executed successfully. </li>\n\
<li><b><a class=\"el\" href=\"#!/url=./cpp_ref/class_m_status.html#a02ab596f4febca68da503aaf8dde3a80af8c5f748892ec74b32719c8fba7767e1\" title=\"An invalid parameter was provided. \">MStatus::kInvalidParameter</a></b> The node is not color manageable. </li>\n\
<li><b><a class=\"el\" href=\"#!/url=./cpp_ref/class_m_status.html#a02ab596f4febca68da503aaf8dde3a80a1ef6c2d725fb4bec3e7e840d28adbc00\" title=\"The operation failed. \">MStatus::kFailure</a></b> The operation failed. </li>\n\
</ul>\n\
</dd></dl>\n\
\n\
</div>\n\
</div>\n\
<a class=\"anchor\" id=\"aafa9f057a406d599b42e9ca3b7a7130e\"></a>\n\
<div class=\"memitem\">\n\
<div class=\"memproto\">\n\
<table class=\"mlabels\">\n\
  <tr>\n\
  <td class=\"mlabels-left\">\n\
      <table class=\"memname\">\n\
        <tr>\n\
          <td class=\"memname\"><a class=\"el\" href=\"#!/url=./cpp_ref/class_m_status.html\">MStatus</a> colorManageAllNodes </td>\n\
          <td>(</td>\n\
          <td class=\"paramtype\"><a class=\"el\" href=\"#!/url=./cpp_ref/class_m_d_g_modifier.html\">MDGModifier</a> &amp;&#160;</td>\n\
          <td class=\"paramname\"><em>dgModifier</em></td><td>)</td>\n\
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
<p>Color manage all input nodes. </p>\n\
<p>This function will color manage all input nodes.</p>\n\
<dl class=\"section note\"><dt>Note</dt><dd>Be careful that this call could have a huge performance impact as it iterates on all nodes from the scene.</dd></dl>\n\
<dl class=\"params\"><dt>Parameters</dt><dd>\n\
  <table class=\"params\">\n\
    <tr><td class=\"paramdir\">[in,out]</td><td class=\"paramname\">dgModifier</td><td>The DG mdofier to be used</td></tr>\n\
  </table>\n\
  </dd>\n\
</dl>\n\
<dl class=\"section return\"><dt>Returns</dt><dd>Status code</dd></dl>\n\
<dl class=\"section user\"><dt>Status Codes:</dt><dd><ul>\n\
<li><b><a class=\"el\" href=\"#!/url=./cpp_ref/class_m_status.html#a02ab596f4febca68da503aaf8dde3a80af0536797208144380691e2b376ffc1d1\" title=\"The operation was successful. \">MStatus::kSuccess</a></b> The operation executed successfully. </li>\n\
<li><b><a class=\"el\" href=\"#!/url=./cpp_ref/class_m_status.html#a02ab596f4febca68da503aaf8dde3a80a1ef6c2d725fb4bec3e7e840d28adbc00\" title=\"The operation failed. \">MStatus::kFailure</a></b> The operation failed. </li>\n\
</ul>\n\
</dd></dl>\n\
\n\
</div>\n\
</div>\n\
<hr>The documentation for this class was generated from the following files:<ul>\n\
<li>MColorManagementNodes.h</li>\n\
<li>MColorManagementNodes.cpp</li>\n\
</ul>\n\
</div><!-- contents -->\n\
</div><!-- doc-content -->\n\
<!-- start footer part -->\n\
\n\
      <div class=\"footer-block\"><a href=\"../html/ac.cmtdialog.htm\" class=\"comments-anchor\" target=\"_blank\"><span class=\"comments-link\">Please send us your comment about this page</span></a></div></div>\n\
   </div></body>\n\
</html>\n\
";