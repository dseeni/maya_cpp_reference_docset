var topic = "<!-- saved from url=(0024)http://docs.autodesk.com -->\n\
<html>\n\
   <head><script src=\"../scripts/yepnope.1.5.4-min.js\" type=\"text/javascript\"></script><script src=\"../scripts/lib/jquery-1.11.1.min.js\" type=\"text/javascript\"></script>\n\
      <title>C++ API Reference: MPxRenderer::RefreshParams Class Reference</title>\n\
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
    cpp_ref_adsk_ref_toc.initNavTree(\'class_m_px_renderer_1_1_refresh_params.html\', tocPrefix);\n\
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
            <h1>C++ API Reference: MPxRenderer::RefreshParams Class Reference</h1>\n\
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
<div class=\"title\">MPxRenderer::RefreshParams Class Reference<div class=\"ingroups\"><a class=\"el\" href=\"#!/url=./cpp_ref/group___open_maya_render.html\">OpenMayaRender - API module for rendering</a></div></div>  </div>\n\
<div class=\"summary\">\n\
<a href=\"class_m_px_renderer_1_1_refresh_params.html#pub-attribs\">Public Attributes</a> &#124;\n\
<a href=\"#!/url=./cpp_ref/class_m_px_renderer_1_1_refresh_params-members.html\">List of all members</a>  </div></div><!--header-->\n\
<div class=\"contents\">\n\
\n\
<p>Parameters for doing refresh of the view when new image data is available.  \n\
 <a href=\"#!/url=./cpp_ref/class_m_px_renderer_1_1_refresh_params.html#details\">More...</a></p>\n\
\n\
<p><code>#include &lt;MPxRenderer.h&gt;</code></p>\n\
<table class=\"memberdecls\">\n\
<tr class=\"heading\"><td colspan=\"2\"><h2 class=\"groupheader\"><a name=\"pub-attribs\"></a>\n\
Public Attributes</h2></td></tr>\n\
<tr class=\"memitem:aca34d28e3d8bcbcadb8edb4e3af24f8c\"><td class=\"memItemLeft\" align=\"right\" valign=\"top\"><a class=\"anchor\" id=\"aca34d28e3d8bcbcadb8edb4e3af24f8c\"></a>\n\
unsigned int&#160;</td><td class=\"memItemRight\" valign=\"bottom\"><a class=\"el\" href=\"#!/url=./cpp_ref/class_m_px_renderer_1_1_refresh_params.html#aca34d28e3d8bcbcadb8edb4e3af24f8c\">width</a></td></tr>\n\
<tr class=\"memdesc:aca34d28e3d8bcbcadb8edb4e3af24f8c\"><td class=\"mdescLeft\">&#160;</td><td class=\"mdescRight\">Width of the image frame. <br></td></tr>\n\
<tr class=\"separator:aca34d28e3d8bcbcadb8edb4e3af24f8c\"><td class=\"memSeparator\" colspan=\"2\">&#160;</td></tr>\n\
<tr class=\"memitem:ab2e78c61905b4419fcc7b4cfc500fe85\"><td class=\"memItemLeft\" align=\"right\" valign=\"top\"><a class=\"anchor\" id=\"ab2e78c61905b4419fcc7b4cfc500fe85\"></a>\n\
unsigned int&#160;</td><td class=\"memItemRight\" valign=\"bottom\"><a class=\"el\" href=\"#!/url=./cpp_ref/class_m_px_renderer_1_1_refresh_params.html#ab2e78c61905b4419fcc7b4cfc500fe85\">height</a></td></tr>\n\
<tr class=\"memdesc:ab2e78c61905b4419fcc7b4cfc500fe85\"><td class=\"mdescLeft\">&#160;</td><td class=\"mdescRight\">Height of the image frame. <br></td></tr>\n\
<tr class=\"separator:ab2e78c61905b4419fcc7b4cfc500fe85\"><td class=\"memSeparator\" colspan=\"2\">&#160;</td></tr>\n\
<tr class=\"memitem:a05374b750b0fc472c34ee61e6f028bba\"><td class=\"memItemLeft\" align=\"right\" valign=\"top\"><a class=\"anchor\" id=\"a05374b750b0fc472c34ee61e6f028bba\"></a>\n\
unsigned int&#160;</td><td class=\"memItemRight\" valign=\"bottom\"><a class=\"el\" href=\"#!/url=./cpp_ref/class_m_px_renderer_1_1_refresh_params.html#a05374b750b0fc472c34ee61e6f028bba\">left</a></td></tr>\n\
<tr class=\"memdesc:a05374b750b0fc472c34ee61e6f028bba\"><td class=\"mdescLeft\">&#160;</td><td class=\"mdescRight\">Left edge of the image tile. <br></td></tr>\n\
<tr class=\"separator:a05374b750b0fc472c34ee61e6f028bba\"><td class=\"memSeparator\" colspan=\"2\">&#160;</td></tr>\n\
<tr class=\"memitem:a78b0fed184c642b78f32fd34b228a5f9\"><td class=\"memItemLeft\" align=\"right\" valign=\"top\"><a class=\"anchor\" id=\"a78b0fed184c642b78f32fd34b228a5f9\"></a>\n\
unsigned int&#160;</td><td class=\"memItemRight\" valign=\"bottom\"><a class=\"el\" href=\"#!/url=./cpp_ref/class_m_px_renderer_1_1_refresh_params.html#a78b0fed184c642b78f32fd34b228a5f9\">right</a></td></tr>\n\
<tr class=\"memdesc:a78b0fed184c642b78f32fd34b228a5f9\"><td class=\"mdescLeft\">&#160;</td><td class=\"mdescRight\">Right edge of the image tile. <br></td></tr>\n\
<tr class=\"separator:a78b0fed184c642b78f32fd34b228a5f9\"><td class=\"memSeparator\" colspan=\"2\">&#160;</td></tr>\n\
<tr class=\"memitem:a802ffcf1b49237efe5be8a314d3f3869\"><td class=\"memItemLeft\" align=\"right\" valign=\"top\"><a class=\"anchor\" id=\"a802ffcf1b49237efe5be8a314d3f3869\"></a>\n\
unsigned int&#160;</td><td class=\"memItemRight\" valign=\"bottom\"><a class=\"el\" href=\"#!/url=./cpp_ref/class_m_px_renderer_1_1_refresh_params.html#a802ffcf1b49237efe5be8a314d3f3869\">bottom</a></td></tr>\n\
<tr class=\"memdesc:a802ffcf1b49237efe5be8a314d3f3869\"><td class=\"mdescLeft\">&#160;</td><td class=\"mdescRight\">Bottom edge of the image tile. <br></td></tr>\n\
<tr class=\"separator:a802ffcf1b49237efe5be8a314d3f3869\"><td class=\"memSeparator\" colspan=\"2\">&#160;</td></tr>\n\
<tr class=\"memitem:a3fdd42ea34070a54e696b3adc28c4be3\"><td class=\"memItemLeft\" align=\"right\" valign=\"top\"><a class=\"anchor\" id=\"a3fdd42ea34070a54e696b3adc28c4be3\"></a>\n\
unsigned int&#160;</td><td class=\"memItemRight\" valign=\"bottom\"><a class=\"el\" href=\"#!/url=./cpp_ref/class_m_px_renderer_1_1_refresh_params.html#a3fdd42ea34070a54e696b3adc28c4be3\">top</a></td></tr>\n\
<tr class=\"memdesc:a3fdd42ea34070a54e696b3adc28c4be3\"><td class=\"mdescLeft\">&#160;</td><td class=\"mdescRight\">Top edge of the image tile. <br></td></tr>\n\
<tr class=\"separator:a3fdd42ea34070a54e696b3adc28c4be3\"><td class=\"memSeparator\" colspan=\"2\">&#160;</td></tr>\n\
<tr class=\"memitem:a9ed2af39747c91928713f96d4e28b53f\"><td class=\"memItemLeft\" align=\"right\" valign=\"top\"><a class=\"anchor\" id=\"a9ed2af39747c91928713f96d4e28b53f\"></a>\n\
unsigned int&#160;</td><td class=\"memItemRight\" valign=\"bottom\"><a class=\"el\" href=\"#!/url=./cpp_ref/class_m_px_renderer_1_1_refresh_params.html#a9ed2af39747c91928713f96d4e28b53f\">channels</a></td></tr>\n\
<tr class=\"memdesc:a9ed2af39747c91928713f96d4e28b53f\"><td class=\"mdescLeft\">&#160;</td><td class=\"mdescRight\">Number of channels in the image data. <br></td></tr>\n\
<tr class=\"separator:a9ed2af39747c91928713f96d4e28b53f\"><td class=\"memSeparator\" colspan=\"2\">&#160;</td></tr>\n\
<tr class=\"memitem:a3b5288da6b03bf487ab3e10b818c4a2b\"><td class=\"memItemLeft\" align=\"right\" valign=\"top\"><a class=\"anchor\" id=\"a3b5288da6b03bf487ab3e10b818c4a2b\"></a>\n\
unsigned int&#160;</td><td class=\"memItemRight\" valign=\"bottom\"><a class=\"el\" href=\"#!/url=./cpp_ref/class_m_px_renderer_1_1_refresh_params.html#a3b5288da6b03bf487ab3e10b818c4a2b\">bytesPerChannel</a></td></tr>\n\
<tr class=\"memdesc:a3b5288da6b03bf487ab3e10b818c4a2b\"><td class=\"mdescLeft\">&#160;</td><td class=\"mdescRight\">Size of each channel in bytes. <br></td></tr>\n\
<tr class=\"separator:a3b5288da6b03bf487ab3e10b818c4a2b\"><td class=\"memSeparator\" colspan=\"2\">&#160;</td></tr>\n\
<tr class=\"memitem:a735984d41155bc1032e09bece8f8d66d\"><td class=\"memItemLeft\" align=\"right\" valign=\"top\"><a class=\"anchor\" id=\"a735984d41155bc1032e09bece8f8d66d\"></a>\n\
void *&#160;</td><td class=\"memItemRight\" valign=\"bottom\"><a class=\"el\" href=\"#!/url=./cpp_ref/class_m_px_renderer_1_1_refresh_params.html#a735984d41155bc1032e09bece8f8d66d\">data</a></td></tr>\n\
<tr class=\"memdesc:a735984d41155bc1032e09bece8f8d66d\"><td class=\"mdescLeft\">&#160;</td><td class=\"mdescRight\">The image data. <br></td></tr>\n\
<tr class=\"separator:a735984d41155bc1032e09bece8f8d66d\"><td class=\"memSeparator\" colspan=\"2\">&#160;</td></tr>\n\
</table>\n\
<a name=\"details\" id=\"details\"></a><h2 class=\"groupheader\">Detailed Description</h2>\n\
<div class=\"textblock\"><p>Parameters for doing refresh of the view when new image data is available. </p>\n\
</div><hr>The documentation for this class was generated from the following file:<ul>\n\
<li>MPxRenderer.h</li>\n\
</ul>\n\
</div><!-- contents -->\n\
</div><!-- doc-content -->\n\
<!-- start footer part -->\n\
\n\
      <div class=\"footer-block\"><a href=\"../html/ac.cmtdialog.htm\" class=\"comments-anchor\" target=\"_blank\"><span class=\"comments-link\">Please send us your comment about this page</span></a></div></div>\n\
   </div></body>\n\
</html>\n\
";