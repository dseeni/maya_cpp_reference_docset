var topic = "<!-- saved from url=(0024)http://docs.autodesk.com -->\n\
<html>\n\
   <head><script src=\"../scripts/yepnope.1.5.4-min.js\" type=\"text/javascript\"></script><script src=\"../scripts/lib/jquery-1.11.1.min.js\" type=\"text/javascript\"></script>\n\
      <title>C++ API Reference: MColorManagementUtilities::MColorTransformData Class Reference</title>\n\
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
    cpp_ref_adsk_ref_toc.initNavTree(\'class_m_color_management_utilities_1_1_m_color_transform_data.html\', tocPrefix);\n\
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
            <h1>C++ API Reference: MColorManagementUtilities::MColorTransformData Class Reference</h1>\n\
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
<div class=\"title\">MColorManagementUtilities::MColorTransformData Class Reference<div class=\"ingroups\"><a class=\"el\" href=\"#!/url=./cpp_ref/group___open_maya_render.html\">OpenMayaRender - API module for rendering</a></div></div>  </div>\n\
<div class=\"summary\">\n\
<a href=\"class_m_color_management_utilities_1_1_m_color_transform_data.html#pub-methods\">Public Member Functions</a> &#124;\n\
<a href=\"#!/url=./cpp_ref/class_m_color_management_utilities_1_1_m_color_transform_data-members.html\">List of all members</a>  </div></div><!--header-->\n\
<div class=\"contents\">\n\
\n\
<p>Utility class that retrieves the opaque data containing the color transform information needed to render the scene.  \n\
 <a href=\"#!/url=./cpp_ref/class_m_color_management_utilities_1_1_m_color_transform_data.html#details\">More...</a></p>\n\
\n\
<p><code>#include &lt;MColorManagementUtilities.h&gt;</code></p>\n\
<table class=\"memberdecls\">\n\
<tr class=\"heading\"><td colspan=\"2\"><h2 class=\"groupheader\"><a name=\"pub-methods\"></a>\n\
Public Member Functions</h2></td></tr>\n\
<tr class=\"memitem:afc10e212f39a15ef17f3e503b4e312e9\"><td class=\"memItemLeft\" align=\"right\" valign=\"top\">&#160;</td><td class=\"memItemRight\" valign=\"bottom\"><a class=\"el\" href=\"#!/url=./cpp_ref/class_m_color_management_utilities_1_1_m_color_transform_data.html#afc10e212f39a15ef17f3e503b4e312e9\">MColorTransformData</a> ()</td></tr>\n\
<tr class=\"memdesc:afc10e212f39a15ef17f3e503b4e312e9\"><td class=\"mdescLeft\">&#160;</td><td class=\"mdescRight\"><a class=\"el\" href=\"#!/url=./cpp_ref/class_m_color_management_utilities_1_1_m_color_transform_data.html\" title=\"Utility class that retrieves the opaque data containing the color transform information needed to ren...\">MColorTransformData</a> constructor.  <a href=\"class_m_color_management_utilities_1_1_m_color_transform_data.html#afc10e212f39a15ef17f3e503b4e312e9\">More...</a><br></td></tr>\n\
<tr class=\"separator:afc10e212f39a15ef17f3e503b4e312e9\"><td class=\"memSeparator\" colspan=\"2\">&#160;</td></tr>\n\
<tr class=\"memitem:a2e456acb76ae1ff937317fbd4a73e341\"><td class=\"memItemLeft\" align=\"right\" valign=\"top\">&#160;</td><td class=\"memItemRight\" valign=\"bottom\"><a class=\"el\" href=\"#!/url=./cpp_ref/class_m_color_management_utilities_1_1_m_color_transform_data.html#a2e456acb76ae1ff937317fbd4a73e341\">~MColorTransformData</a> ()</td></tr>\n\
<tr class=\"memdesc:a2e456acb76ae1ff937317fbd4a73e341\"><td class=\"mdescLeft\">&#160;</td><td class=\"mdescRight\"><a class=\"el\" href=\"#!/url=./cpp_ref/class_m_color_management_utilities_1_1_m_color_transform_data.html\" title=\"Utility class that retrieves the opaque data containing the color transform information needed to ren...\">MColorTransformData</a> destructor.  <a href=\"class_m_color_management_utilities_1_1_m_color_transform_data.html#a2e456acb76ae1ff937317fbd4a73e341\">More...</a><br></td></tr>\n\
<tr class=\"separator:a2e456acb76ae1ff937317fbd4a73e341\"><td class=\"memSeparator\" colspan=\"2\">&#160;</td></tr>\n\
<tr class=\"memitem:a02d751e4c308cd6396e62e68a71b702c\"><td class=\"memItemLeft\" align=\"right\" valign=\"top\">const unsigned&#160;</td><td class=\"memItemRight\" valign=\"bottom\"><a class=\"el\" href=\"#!/url=./cpp_ref/class_m_color_management_utilities_1_1_m_color_transform_data.html#a02d751e4c308cd6396e62e68a71b702c\">getSize</a> () const </td></tr>\n\
<tr class=\"memdesc:a02d751e4c308cd6396e62e68a71b702c\"><td class=\"mdescLeft\">&#160;</td><td class=\"mdescRight\">Obtain the size of the opaque data block containing the color transform information needed to render the scene.  <a href=\"class_m_color_management_utilities_1_1_m_color_transform_data.html#a02d751e4c308cd6396e62e68a71b702c\">More...</a><br></td></tr>\n\
<tr class=\"separator:a02d751e4c308cd6396e62e68a71b702c\"><td class=\"memSeparator\" colspan=\"2\">&#160;</td></tr>\n\
<tr class=\"memitem:aa8a760d91a442deaa2cf5d0addd8176b\"><td class=\"memItemLeft\" align=\"right\" valign=\"top\">const void *&#160;</td><td class=\"memItemRight\" valign=\"bottom\"><a class=\"el\" href=\"#!/url=./cpp_ref/class_m_color_management_utilities_1_1_m_color_transform_data.html#aa8a760d91a442deaa2cf5d0addd8176b\">getData</a> () const </td></tr>\n\
<tr class=\"memdesc:aa8a760d91a442deaa2cf5d0addd8176b\"><td class=\"mdescLeft\">&#160;</td><td class=\"mdescRight\">Obtain a reference to the opaque data block containing the color transform information needed to render the scene.  <a href=\"class_m_color_management_utilities_1_1_m_color_transform_data.html#aa8a760d91a442deaa2cf5d0addd8176b\">More...</a><br></td></tr>\n\
<tr class=\"separator:aa8a760d91a442deaa2cf5d0addd8176b\"><td class=\"memSeparator\" colspan=\"2\">&#160;</td></tr>\n\
</table>\n\
<a name=\"details\" id=\"details\"></a><h2 class=\"groupheader\">Detailed Description</h2>\n\
<div class=\"textblock\"><p>Utility class that retrieves the opaque data containing the color transform information needed to render the scene. </p>\n\
<p>This class manages internally a buffer that contains data about color transformation used in the scene. The buffer managed herein whose pointer is returned by the \'getData\' method is only valid during the lifetime of this object\'s instance. </p>\n\
<dl class=\"section \"><div id=\"dynsection-example0\" class=\"dynheader closed\" onclick=\"return toggleVisibility(this)\" style=\"cursor:pointer;\"><dt><img id=\"dynsection-example0-trigger\" src=\"cpp_ref/closed.png\" alt=\"+\"> <b>Examples: </b></dt></div><div id=\"dynsection-example0-content\" class=\"dyncontent\" style=\"display:none;\"><dd><a class=\"el\" href=\"#!/url=./cpp_ref/color_transform_data_2color_transform_data_8cpp-example.html#_a26\">colorTransformData/colorTransformData.cpp</a>.</dd></div>\n\
</dl></div><h2 class=\"groupheader\">Constructor &amp; Destructor Documentation</h2>\n\
<a class=\"anchor\" id=\"afc10e212f39a15ef17f3e503b4e312e9\"></a>\n\
<div class=\"memitem\">\n\
<div class=\"memproto\">\n\
      <table class=\"memname\">\n\
        <tr>\n\
          <td class=\"memname\">OPENMAYA_MAJOR_NAMESPACE_OPEN <a class=\"el\" href=\"#!/url=./cpp_ref/class_m_color_management_utilities_1_1_m_color_transform_data.html\">MColorTransformData</a> </td>\n\
          <td>(</td>\n\
          <td class=\"paramname\"></td><td>)</td>\n\
          <td></td>\n\
        </tr>\n\
      </table>\n\
</div><div class=\"memdoc\">\n\
\n\
<p><a class=\"el\" href=\"#!/url=./cpp_ref/class_m_color_management_utilities_1_1_m_color_transform_data.html\" title=\"Utility class that retrieves the opaque data containing the color transform information needed to ren...\">MColorTransformData</a> constructor. </p>\n\
<p>This constructor creates the opaque data block containing the color transform information needed to render the scene.</p>\n\
<dl class=\"section note\"><dt>Note</dt><dd>The memory allocated for the data block is only valid during the lifetime of the <a class=\"el\" href=\"#!/url=./cpp_ref/class_m_color_management_utilities_1_1_m_color_transform_data.html\" title=\"Utility class that retrieves the opaque data containing the color transform information needed to ren...\">MColorTransformData</a> instance. </dd></dl>\n\
\n\
</div>\n\
</div>\n\
<a class=\"anchor\" id=\"a2e456acb76ae1ff937317fbd4a73e341\"></a>\n\
<div class=\"memitem\">\n\
<div class=\"memproto\">\n\
      <table class=\"memname\">\n\
        <tr>\n\
          <td class=\"memname\">~<a class=\"el\" href=\"#!/url=./cpp_ref/class_m_color_management_utilities_1_1_m_color_transform_data.html\">MColorTransformData</a> </td>\n\
          <td>(</td>\n\
          <td class=\"paramname\"></td><td>)</td>\n\
          <td></td>\n\
        </tr>\n\
      </table>\n\
</div><div class=\"memdoc\">\n\
\n\
<p><a class=\"el\" href=\"#!/url=./cpp_ref/class_m_color_management_utilities_1_1_m_color_transform_data.html\" title=\"Utility class that retrieves the opaque data containing the color transform information needed to ren...\">MColorTransformData</a> destructor. </p>\n\
<p>This destructor frees the memory that contains color transform data block. Once called, the pointer address that was obtained by the getData method is no longer valid. </p>\n\
\n\
</div>\n\
</div>\n\
<h2 class=\"groupheader\">Member Function Documentation</h2>\n\
<a class=\"anchor\" id=\"a02d751e4c308cd6396e62e68a71b702c\"></a>\n\
<div class=\"memitem\">\n\
<div class=\"memproto\">\n\
      <table class=\"memname\">\n\
        <tr>\n\
          <td class=\"memname\">const unsigned getSize </td>\n\
          <td>(</td>\n\
          <td class=\"paramname\"></td><td>)</td>\n\
          <td> const</td>\n\
        </tr>\n\
      </table>\n\
</div><div class=\"memdoc\">\n\
\n\
<p>Obtain the size of the opaque data block containing the color transform information needed to render the scene. </p>\n\
<dl class=\"section return\"><dt>Returns</dt><dd>the size in bytes of the data block retured by <a class=\"el\" href=\"#!/url=./cpp_ref/class_m_color_management_utilities_1_1_m_color_transform_data.html#aa8a760d91a442deaa2cf5d0addd8176b\" title=\"Obtain a reference to the opaque data block containing the color transform information needed to rend...\">MColorManagementUtilities::MColorTransformData::getData()</a>. </dd></dl>\n\
<dl class=\"section \"><div id=\"dynsection-example1\" class=\"dynheader closed\" onclick=\"return toggleVisibility(this)\" style=\"cursor:pointer;\"><dt><img id=\"dynsection-example1-trigger\" src=\"cpp_ref/closed.png\" alt=\"+\"> <b>Examples: </b></dt></div><div id=\"dynsection-example1-content\" class=\"dyncontent\" style=\"display:none;\"><dd><a class=\"el\" href=\"#!/url=./cpp_ref/color_transform_data_2color_transform_data_8cpp-example.html#a27\">colorTransformData/colorTransformData.cpp</a>.</dd></div>\n\
</dl>\n\
</div>\n\
</div>\n\
<a class=\"anchor\" id=\"aa8a760d91a442deaa2cf5d0addd8176b\"></a>\n\
<div class=\"memitem\">\n\
<div class=\"memproto\">\n\
      <table class=\"memname\">\n\
        <tr>\n\
          <td class=\"memname\">const void * getData </td>\n\
          <td>(</td>\n\
          <td class=\"paramname\"></td><td>)</td>\n\
          <td> const</td>\n\
        </tr>\n\
      </table>\n\
</div><div class=\"memdoc\">\n\
\n\
<p>Obtain a reference to the opaque data block containing the color transform information needed to render the scene. </p>\n\
<p>This block of data is meant to be writen by a file translator plug-in to a renderer file. With the help of the SynColor SDK and this block of data, the extenal renderer can reproduce the same color transformations as in Maya.</p>\n\
<dl class=\"section note\"><dt>Note</dt><dd>The pointer returned by this method is only valid during the lifetime of the <a class=\"el\" href=\"#!/url=./cpp_ref/class_m_color_management_utilities_1_1_m_color_transform_data.html\" title=\"Utility class that retrieves the opaque data containing the color transform information needed to ren...\">MColorTransformData</a> instance.</dd></dl>\n\
<dl class=\"section return\"><dt>Returns</dt><dd>a pointer to an opaque block of data. </dd></dl>\n\
<dl class=\"section \"><div id=\"dynsection-example2\" class=\"dynheader closed\" onclick=\"return toggleVisibility(this)\" style=\"cursor:pointer;\"><dt><img id=\"dynsection-example2-trigger\" src=\"cpp_ref/closed.png\" alt=\"+\"> <b>Examples: </b></dt></div><div id=\"dynsection-example2-content\" class=\"dyncontent\" style=\"display:none;\"><dd><a class=\"el\" href=\"#!/url=./cpp_ref/color_transform_data_2color_transform_data_8cpp-example.html#a28\">colorTransformData/colorTransformData.cpp</a>.</dd></div>\n\
</dl>\n\
</div>\n\
</div>\n\
<hr>The documentation for this class was generated from the following files:<ul>\n\
<li>MColorManagementUtilities.h</li>\n\
<li>MColorManagementUtilities.cpp</li>\n\
</ul>\n\
</div><!-- contents -->\n\
</div><!-- doc-content -->\n\
<!-- start footer part -->\n\
\n\
      <div class=\"footer-block\"><a href=\"../html/ac.cmtdialog.htm\" class=\"comments-anchor\" target=\"_blank\"><span class=\"comments-link\">Please send us your comment about this page</span></a></div></div>\n\
   </div></body>\n\
</html>\n\
";