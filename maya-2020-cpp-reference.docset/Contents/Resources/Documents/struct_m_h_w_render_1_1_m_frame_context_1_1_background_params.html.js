var topic = "<!-- saved from url=(0024)http://docs.autodesk.com -->\n\
<html>\n\
   <head><script src=\"../scripts/yepnope.1.5.4-min.js\" type=\"text/javascript\"></script><script src=\"../scripts/lib/jquery-1.11.1.min.js\" type=\"text/javascript\"></script>\n\
      <title>C++ API Reference: MFrameContext::BackgroundParams Struct Reference</title>\n\
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
    cpp_ref_adsk_ref_toc.initNavTree(\'struct_m_h_w_render_1_1_m_frame_context_1_1_background_params.html\', tocPrefix);\n\
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
            <h1>C++ API Reference: MFrameContext::BackgroundParams Struct Reference</h1>\n\
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
<div class=\"title\">MFrameContext::BackgroundParams Struct Reference<div class=\"ingroups\"><a class=\"el\" href=\"#!/url=./cpp_ref/group___open_maya_render.html\">OpenMayaRender - API module for rendering</a></div></div>  </div>\n\
<div class=\"summary\">\n\
<a href=\"struct_m_h_w_render_1_1_m_frame_context_1_1_background_params.html#pub-attribs\">Public Attributes</a> &#124;\n\
<a href=\"#!/url=./cpp_ref/struct_m_h_w_render_1_1_m_frame_context_1_1_background_params-members.html\">List of all members</a>  </div></div><!--header-->\n\
<div class=\"contents\">\n\
\n\
<p>Background parameters.  \n\
 <a href=\"#!/url=./cpp_ref/struct_m_h_w_render_1_1_m_frame_context_1_1_background_params.html#details\">More...</a></p>\n\
\n\
<p><code>#include &lt;MFrameContext.h&gt;</code></p>\n\
<table class=\"memberdecls\">\n\
<tr class=\"heading\"><td colspan=\"2\"><h2 class=\"groupheader\"><a name=\"pub-attribs\"></a>\n\
Public Attributes</h2></td></tr>\n\
<tr class=\"memitem:a127ce7706df392d9cb498e03768fbaf5\"><td class=\"memItemLeft\" align=\"right\" valign=\"top\"><a class=\"anchor\" id=\"a127ce7706df392d9cb498e03768fbaf5\"></a>\n\
bool&#160;</td><td class=\"memItemRight\" valign=\"bottom\"><a class=\"el\" href=\"#!/url=./cpp_ref/struct_m_h_w_render_1_1_m_frame_context_1_1_background_params.html#a127ce7706df392d9cb498e03768fbaf5\">displayGradient</a></td></tr>\n\
<tr class=\"memdesc:a127ce7706df392d9cb498e03768fbaf5\"><td class=\"mdescLeft\">&#160;</td><td class=\"mdescRight\">Display gradient. <br></td></tr>\n\
<tr class=\"separator:a127ce7706df392d9cb498e03768fbaf5\"><td class=\"memSeparator\" colspan=\"2\">&#160;</td></tr>\n\
<tr class=\"memitem:a01ce816fb45a354a86a31b053332707e\"><td class=\"memItemLeft\" align=\"right\" valign=\"top\"><a class=\"anchor\" id=\"a01ce816fb45a354a86a31b053332707e\"></a>\n\
bool&#160;</td><td class=\"memItemRight\" valign=\"bottom\"><a class=\"el\" href=\"#!/url=./cpp_ref/struct_m_h_w_render_1_1_m_frame_context_1_1_background_params.html#a01ce816fb45a354a86a31b053332707e\">clearColorFlag</a></td></tr>\n\
<tr class=\"memdesc:a01ce816fb45a354a86a31b053332707e\"><td class=\"mdescLeft\">&#160;</td><td class=\"mdescRight\">Clear color flag. <br></td></tr>\n\
<tr class=\"separator:a01ce816fb45a354a86a31b053332707e\"><td class=\"memSeparator\" colspan=\"2\">&#160;</td></tr>\n\
<tr class=\"memitem:af9100c06665ebc59126c19e6703bf821\"><td class=\"memItemLeft\" align=\"right\" valign=\"top\"><a class=\"anchor\" id=\"af9100c06665ebc59126c19e6703bf821\"></a>\n\
bool&#160;</td><td class=\"memItemRight\" valign=\"bottom\"><a class=\"el\" href=\"#!/url=./cpp_ref/struct_m_h_w_render_1_1_m_frame_context_1_1_background_params.html#af9100c06665ebc59126c19e6703bf821\">clearDepthFlag</a></td></tr>\n\
<tr class=\"memdesc:af9100c06665ebc59126c19e6703bf821\"><td class=\"mdescLeft\">&#160;</td><td class=\"mdescRight\">Clear depth flag. <br></td></tr>\n\
<tr class=\"separator:af9100c06665ebc59126c19e6703bf821\"><td class=\"memSeparator\" colspan=\"2\">&#160;</td></tr>\n\
<tr class=\"memitem:a50b68b504399f3ce873183a6fd368955\"><td class=\"memItemLeft\" align=\"right\" valign=\"top\"><a class=\"anchor\" id=\"a50b68b504399f3ce873183a6fd368955\"></a>\n\
bool&#160;</td><td class=\"memItemRight\" valign=\"bottom\"><a class=\"el\" href=\"#!/url=./cpp_ref/struct_m_h_w_render_1_1_m_frame_context_1_1_background_params.html#a50b68b504399f3ce873183a6fd368955\">clearStencilFlag</a></td></tr>\n\
<tr class=\"memdesc:a50b68b504399f3ce873183a6fd368955\"><td class=\"mdescLeft\">&#160;</td><td class=\"mdescRight\">Clear stencil flag. <br></td></tr>\n\
<tr class=\"separator:a50b68b504399f3ce873183a6fd368955\"><td class=\"memSeparator\" colspan=\"2\">&#160;</td></tr>\n\
<tr class=\"memitem:a80b1e198f586619d844fff6bb4cc4679\"><td class=\"memItemLeft\" align=\"right\" valign=\"top\"><a class=\"anchor\" id=\"a80b1e198f586619d844fff6bb4cc4679\"></a>\n\
<a class=\"el\" href=\"#!/url=./cpp_ref/class_m_color.html\">MColor</a>&#160;</td><td class=\"memItemRight\" valign=\"bottom\"><a class=\"el\" href=\"#!/url=./cpp_ref/struct_m_h_w_render_1_1_m_frame_context_1_1_background_params.html#a80b1e198f586619d844fff6bb4cc4679\">clearColor1</a></td></tr>\n\
<tr class=\"memdesc:a80b1e198f586619d844fff6bb4cc4679\"><td class=\"mdescLeft\">&#160;</td><td class=\"mdescRight\">Clear color 1. <br></td></tr>\n\
<tr class=\"separator:a80b1e198f586619d844fff6bb4cc4679\"><td class=\"memSeparator\" colspan=\"2\">&#160;</td></tr>\n\
<tr class=\"memitem:a51a529fc62d83747bb1b7f1ed04ff22e\"><td class=\"memItemLeft\" align=\"right\" valign=\"top\"><a class=\"anchor\" id=\"a51a529fc62d83747bb1b7f1ed04ff22e\"></a>\n\
<a class=\"el\" href=\"#!/url=./cpp_ref/class_m_color.html\">MColor</a>&#160;</td><td class=\"memItemRight\" valign=\"bottom\"><a class=\"el\" href=\"#!/url=./cpp_ref/struct_m_h_w_render_1_1_m_frame_context_1_1_background_params.html#a51a529fc62d83747bb1b7f1ed04ff22e\">clearColor2</a></td></tr>\n\
<tr class=\"memdesc:a51a529fc62d83747bb1b7f1ed04ff22e\"><td class=\"mdescLeft\">&#160;</td><td class=\"mdescRight\">Clear color 2. <br></td></tr>\n\
<tr class=\"separator:a51a529fc62d83747bb1b7f1ed04ff22e\"><td class=\"memSeparator\" colspan=\"2\">&#160;</td></tr>\n\
<tr class=\"memitem:a08244f814f06c8716897536d8386e4cd\"><td class=\"memItemLeft\" align=\"right\" valign=\"top\"><a class=\"anchor\" id=\"a08244f814f06c8716897536d8386e4cd\"></a>\n\
float&#160;</td><td class=\"memItemRight\" valign=\"bottom\"><a class=\"el\" href=\"#!/url=./cpp_ref/struct_m_h_w_render_1_1_m_frame_context_1_1_background_params.html#a08244f814f06c8716897536d8386e4cd\">clearDepthValue</a></td></tr>\n\
<tr class=\"memdesc:a08244f814f06c8716897536d8386e4cd\"><td class=\"mdescLeft\">&#160;</td><td class=\"mdescRight\">Clear depth value. <br></td></tr>\n\
<tr class=\"separator:a08244f814f06c8716897536d8386e4cd\"><td class=\"memSeparator\" colspan=\"2\">&#160;</td></tr>\n\
<tr class=\"memitem:a2cb70220d3d1dcd8f01ad0650d32ea30\"><td class=\"memItemLeft\" align=\"right\" valign=\"top\"><a class=\"anchor\" id=\"a2cb70220d3d1dcd8f01ad0650d32ea30\"></a>\n\
int&#160;</td><td class=\"memItemRight\" valign=\"bottom\"><a class=\"el\" href=\"#!/url=./cpp_ref/struct_m_h_w_render_1_1_m_frame_context_1_1_background_params.html#a2cb70220d3d1dcd8f01ad0650d32ea30\">clearStencilValue</a></td></tr>\n\
<tr class=\"memdesc:a2cb70220d3d1dcd8f01ad0650d32ea30\"><td class=\"mdescLeft\">&#160;</td><td class=\"mdescRight\">Clear stencil value. <br></td></tr>\n\
<tr class=\"separator:a2cb70220d3d1dcd8f01ad0650d32ea30\"><td class=\"memSeparator\" colspan=\"2\">&#160;</td></tr>\n\
</table>\n\
<a name=\"details\" id=\"details\"></a><h2 class=\"groupheader\">Detailed Description</h2>\n\
<div class=\"textblock\"><p>Background parameters. </p>\n\
<dl class=\"section \"><div id=\"dynsection-example0\" class=\"dynheader closed\" onclick=\"return toggleVisibility(this)\" style=\"cursor:pointer;\"><dt><img id=\"dynsection-example0-trigger\" src=\"cpp_ref/closed.png\" alt=\"+\"> <b>Examples: </b></dt></div><div id=\"dynsection-example0-content\" class=\"dyncontent\" style=\"display:none;\"><dd><a class=\"el\" href=\"#!/url=./cpp_ref/rawfoot_print_node_2rawfoot_print_node_8cpp-example.html#_a152\">rawfootPrintNode/rawfootPrintNode.cpp</a>.</dd></div>\n\
</dl></div><hr>The documentation for this struct was generated from the following file:<ul>\n\
<li>MFrameContext.h</li>\n\
</ul>\n\
</div><!-- contents -->\n\
</div><!-- doc-content -->\n\
<!-- start footer part -->\n\
\n\
      <div class=\"footer-block\"><a href=\"../html/ac.cmtdialog.htm\" class=\"comments-anchor\" target=\"_blank\"><span class=\"comments-link\">Please send us your comment about this page</span></a></div></div>\n\
   </div></body>\n\
</html>\n\
";