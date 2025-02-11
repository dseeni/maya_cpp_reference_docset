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
    cpp_ref_adsk_ref_toc.initNavTree(\'class_m_h_w_render_1_1_m_vertex_buffer-members.html\', tocPrefix);\n\
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
<div class=\"title\">MVertexBuffer Member List</div>  </div>\n\
</div><!--header-->\n\
<div class=\"contents\">\n\
\n\
<p>This is the complete list of members for <a class=\"el\" href=\"#!/url=./cpp_ref/class_m_h_w_render_1_1_m_vertex_buffer.html\">MVertexBuffer</a>, including all inherited members.</p>\n\
<table class=\"directory\">\n\
  <tr class=\"even\"><td class=\"entry\"><a class=\"el\" href=\"#!/url=./cpp_ref/class_m_h_w_render_1_1_m_vertex_buffer.html#aff9e3c2ed40ad0c0f0fe55668670d071\">acquire</a>(unsigned int size, bool writeOnly)</td><td class=\"entry\"><a class=\"el\" href=\"#!/url=./cpp_ref/class_m_h_w_render_1_1_m_vertex_buffer.html\">MVertexBuffer</a></td><td class=\"entry\"></td></tr>\n\
  <tr><td class=\"entry\"><a class=\"el\" href=\"#!/url=./cpp_ref/class_m_h_w_render_1_1_m_vertex_buffer.html#a3c77f256958aa1993cd985b5cf8861f1\">acquire</a>(unsigned int size)</td><td class=\"entry\"><a class=\"el\" href=\"#!/url=./cpp_ref/class_m_h_w_render_1_1_m_vertex_buffer.html\">MVertexBuffer</a></td><td class=\"entry\"></td></tr>\n\
  <tr class=\"even\"><td class=\"entry\"><a class=\"el\" href=\"#!/url=./cpp_ref/class_m_h_w_render_1_1_m_vertex_buffer.html#a774cd5d8fbebe8e7ed82a5aa587d1f04\">className</a>()</td><td class=\"entry\"><a class=\"el\" href=\"#!/url=./cpp_ref/class_m_h_w_render_1_1_m_vertex_buffer.html\">MVertexBuffer</a></td><td class=\"entry\"><span class=\"mlabel\">static</span></td></tr>\n\
  <tr><td class=\"entry\"><a class=\"el\" href=\"#!/url=./cpp_ref/class_m_h_w_render_1_1_m_vertex_buffer.html#aafb3736206f8a73c0fc74757919cfb83\">commit</a>(void *buffer)</td><td class=\"entry\"><a class=\"el\" href=\"#!/url=./cpp_ref/class_m_h_w_render_1_1_m_vertex_buffer.html\">MVertexBuffer</a></td><td class=\"entry\"></td></tr>\n\
  <tr class=\"even\"><td class=\"entry\"><a class=\"el\" href=\"#!/url=./cpp_ref/class_m_h_w_render_1_1_m_vertex_buffer.html#a331cfb987f5f4d632a747e7fbbbe4a43\">descriptor</a>() const </td><td class=\"entry\"><a class=\"el\" href=\"#!/url=./cpp_ref/class_m_h_w_render_1_1_m_vertex_buffer.html\">MVertexBuffer</a></td><td class=\"entry\"></td></tr>\n\
  <tr><td class=\"entry\"><a class=\"el\" href=\"#!/url=./cpp_ref/class_m_h_w_render_1_1_m_vertex_buffer.html#a4524a010960fddcc66fd97387a34cdfe\">getVertexBuffer</a>() const </td><td class=\"entry\"><a class=\"el\" href=\"#!/url=./cpp_ref/class_m_h_w_render_1_1_m_vertex_buffer.html\">MVertexBuffer</a></td><td class=\"entry\"></td></tr>\n\
  <tr class=\"even\"><td class=\"entry\"><a class=\"el\" href=\"#!/url=./cpp_ref/class_m_h_w_render_1_1_m_vertex_buffer.html#aa8d1538f7339521cd85c52d140d0bc6c\">hasCustomResourceHandle</a>() const </td><td class=\"entry\"><a class=\"el\" href=\"#!/url=./cpp_ref/class_m_h_w_render_1_1_m_vertex_buffer.html\">MVertexBuffer</a></td><td class=\"entry\"></td></tr>\n\
  <tr><td class=\"entry\"><a class=\"el\" href=\"#!/url=./cpp_ref/class_m_h_w_render_1_1_m_vertex_buffer.html#adf8ad9c60e845cd4fd84c171c0a63a27\">lockResourceHandle</a>()</td><td class=\"entry\"><a class=\"el\" href=\"#!/url=./cpp_ref/class_m_h_w_render_1_1_m_vertex_buffer.html\">MVertexBuffer</a></td><td class=\"entry\"></td></tr>\n\
  <tr class=\"even\"><td class=\"entry\"><a class=\"el\" href=\"#!/url=./cpp_ref/class_m_h_w_render_1_1_m_vertex_buffer.html#abc9e783c4d7826700a6a6824451f8230\">map</a>()</td><td class=\"entry\"><a class=\"el\" href=\"#!/url=./cpp_ref/class_m_h_w_render_1_1_m_vertex_buffer.html\">MVertexBuffer</a></td><td class=\"entry\"></td></tr>\n\
  <tr><td class=\"entry\"><a class=\"el\" href=\"#!/url=./cpp_ref/class_m_h_w_render_1_1_m_vertex_buffer.html#a06f560575e9472e94f182e7b1a8db5ec\">MVertexBuffer</a>(const MVertexBufferDescriptor &amp;descriptor, bool softwareStaged=true)</td><td class=\"entry\"><a class=\"el\" href=\"#!/url=./cpp_ref/class_m_h_w_render_1_1_m_vertex_buffer.html\">MVertexBuffer</a></td><td class=\"entry\"></td></tr>\n\
  <tr class=\"even\"><td class=\"entry\"><a class=\"el\" href=\"#!/url=./cpp_ref/class_m_h_w_render_1_1_m_vertex_buffer.html#a2e8e8fbbca058243c4796cc631165a66\">MVertexBuffer</a>(const MVertexBuffer &amp;)</td><td class=\"entry\"><a class=\"el\" href=\"#!/url=./cpp_ref/class_m_h_w_render_1_1_m_vertex_buffer.html\">MVertexBuffer</a></td><td class=\"entry\"></td></tr>\n\
  <tr><td class=\"entry\"><a class=\"el\" href=\"#!/url=./cpp_ref/class_m_h_w_render_1_1_m_vertex_buffer.html#ad7bcab0d1707ef0da22fc72ada62c40e\">resourceHandle</a>() const </td><td class=\"entry\"><a class=\"el\" href=\"#!/url=./cpp_ref/class_m_h_w_render_1_1_m_vertex_buffer.html\">MVertexBuffer</a></td><td class=\"entry\"></td></tr>\n\
  <tr class=\"even\"><td class=\"entry\"><a class=\"el\" href=\"#!/url=./cpp_ref/class_m_h_w_render_1_1_m_vertex_buffer.html#ade1f9567b0b118122663a0ae42424537\">resourceHandle</a>(void *handle, unsigned int size)</td><td class=\"entry\"><a class=\"el\" href=\"#!/url=./cpp_ref/class_m_h_w_render_1_1_m_vertex_buffer.html\">MVertexBuffer</a></td><td class=\"entry\"></td></tr>\n\
  <tr><td class=\"entry\"><a class=\"el\" href=\"#!/url=./cpp_ref/class_m_h_w_render_1_1_m_vertex_buffer.html#a75d84312cb36261792b879ffc61e7e16\">unload</a>()</td><td class=\"entry\"><a class=\"el\" href=\"#!/url=./cpp_ref/class_m_h_w_render_1_1_m_vertex_buffer.html\">MVertexBuffer</a></td><td class=\"entry\"></td></tr>\n\
  <tr class=\"even\"><td class=\"entry\"><a class=\"el\" href=\"#!/url=./cpp_ref/class_m_h_w_render_1_1_m_vertex_buffer.html#adab064164207ef83bb764a2c57524a14\">unlockResourceHandle</a>()</td><td class=\"entry\"><a class=\"el\" href=\"#!/url=./cpp_ref/class_m_h_w_render_1_1_m_vertex_buffer.html\">MVertexBuffer</a></td><td class=\"entry\"></td></tr>\n\
  <tr><td class=\"entry\"><a class=\"el\" href=\"#!/url=./cpp_ref/class_m_h_w_render_1_1_m_vertex_buffer.html#a1ffeb3b5abb3d61f62b58a391816201c\">unmap</a>()</td><td class=\"entry\"><a class=\"el\" href=\"#!/url=./cpp_ref/class_m_h_w_render_1_1_m_vertex_buffer.html\">MVertexBuffer</a></td><td class=\"entry\"></td></tr>\n\
  <tr class=\"even\"><td class=\"entry\"><a class=\"el\" href=\"#!/url=./cpp_ref/class_m_h_w_render_1_1_m_vertex_buffer.html#af083045e46c6c887e538a390aaf503cc\">update</a>(const void *buffer, unsigned int destOffset, unsigned int numVerts, bool truncateIfSmaller)</td><td class=\"entry\"><a class=\"el\" href=\"#!/url=./cpp_ref/class_m_h_w_render_1_1_m_vertex_buffer.html\">MVertexBuffer</a></td><td class=\"entry\"></td></tr>\n\
  <tr><td class=\"entry\"><a class=\"el\" href=\"#!/url=./cpp_ref/class_m_h_w_render_1_1_m_vertex_buffer.html#a42db940e8d3c623487a4e2c34024751c\">vertexCount</a>() const </td><td class=\"entry\"><a class=\"el\" href=\"#!/url=./cpp_ref/class_m_h_w_render_1_1_m_vertex_buffer.html\">MVertexBuffer</a></td><td class=\"entry\"></td></tr>\n\
  <tr class=\"even\"><td class=\"entry\"><a class=\"el\" href=\"#!/url=./cpp_ref/class_m_h_w_render_1_1_m_vertex_buffer.html#a06e0d7ea458c5cacb6cb7ee7a66ab876\">~MVertexBuffer</a>()</td><td class=\"entry\"><a class=\"el\" href=\"#!/url=./cpp_ref/class_m_h_w_render_1_1_m_vertex_buffer.html\">MVertexBuffer</a></td><td class=\"entry\"></td></tr>\n\
</table></div><!-- contents -->\n\
</div><!-- doc-content -->\n\
<!-- start footer part -->\n\
\n\
      <div class=\"footer-block\"><a href=\"../html/ac.cmtdialog.htm\" class=\"comments-anchor\" target=\"_blank\"><span class=\"comments-link\">Please send us your comment about this page</span></a></div></div>\n\
   </div></div></body>\n\
</html>\n\
";