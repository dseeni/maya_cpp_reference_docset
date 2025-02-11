var topic = "<!-- saved from url=(0024)http://docs.autodesk.com -->\n\
<html>\n\
   <head><script src=\"../scripts/yepnope.1.5.4-min.js\" type=\"text/javascript\"></script><script src=\"../scripts/lib/jquery-1.11.1.min.js\" type=\"text/javascript\"></script>\n\
      <title>C++ API Reference: MSubSceneContainer Class Reference</title>\n\
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
    cpp_ref_adsk_ref_toc.initNavTree(\'class_m_h_w_render_1_1_m_sub_scene_container.html\', tocPrefix);\n\
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
            <h1>C++ API Reference: MSubSceneContainer Class Reference</h1>\n\
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
<div class=\"title\">MSubSceneContainer Class Reference<div class=\"ingroups\"><a class=\"el\" href=\"#!/url=./cpp_ref/group___open_maya_render.html\">OpenMayaRender - API module for rendering</a></div></div>  </div>\n\
<div id=\"OverviewLinksDiv\"><div id=\"dynsection-overview\" onclick=\"return toggleVisibility(this)\" class=\"dynheader closed\" style=\"cursor:pointer;\"><img id=\"dynsection-overview-trigger\" src=\"cpp_ref/closed.png\" alt=\"+\"> Related help topics: </div><div id=\"dynsection-overview-content\" class=\"dyncontent\" style=\"display:none;\"><ul class=\"overviewLinks\">\n\
<li class=\"overviewLink\"><a href=\"#!/url=./dev_help/Viewport-2-0-API/Maya-Viewport-2-0-API-Guide/Plug-in-Entry-Points/Sub-scene-Overrides.html\">Viewport 2.0 API &gt; Maya Viewport 2.0 API Guide &gt; Plug-in Entry Points &gt; Sub-scene Overrides</a></li>\n\
</ul></div></div>\n\
<div class=\"summary\">\n\
<a href=\"class_m_h_w_render_1_1_m_sub_scene_container.html#pub-methods\">Public Member Functions</a> &#124;\n\
<a href=\"class_m_h_w_render_1_1_m_sub_scene_container.html#pub-static-methods\">Static Public Member Functions</a> &#124;\n\
<a href=\"#!/url=./cpp_ref/class_m_h_w_render_1_1_m_sub_scene_container-members.html\">List of all members</a>  </div></div><!--header-->\n\
<div class=\"contents\">\n\
\n\
<p>Container for render items generated by <a class=\"el\" href=\"#!/url=./cpp_ref/class_m_h_w_render_1_1_m_px_sub_scene_override.html\" title=\"Base class for Viewport 2.0 drawing of DAG nodes which represent sub-scenes. \">MPxSubSceneOverride</a>.  \n\
 <a href=\"#!/url=./cpp_ref/class_m_h_w_render_1_1_m_sub_scene_container.html#details\">More...</a></p>\n\
\n\
<p><code>#include &lt;MPxSubSceneOverride.h&gt;</code></p>\n\
<table class=\"memberdecls\">\n\
<tr class=\"heading\"><td colspan=\"2\"><h2 class=\"groupheader\"><a name=\"pub-methods\"></a>\n\
Public Member Functions</h2></td></tr>\n\
<tr class=\"memitem:a3868473990e1902a2929a48acd2746d8\"><td class=\"memItemLeft\" align=\"right\" valign=\"top\">bool&#160;</td><td class=\"memItemRight\" valign=\"bottom\"><a class=\"el\" href=\"#!/url=./cpp_ref/class_m_h_w_render_1_1_m_sub_scene_container.html#a3868473990e1902a2929a48acd2746d8\">add</a> (<a class=\"el\" href=\"#!/url=./cpp_ref/class_m_h_w_render_1_1_m_render_item.html\">MRenderItem</a> *item)</td></tr>\n\
<tr class=\"memdesc:a3868473990e1902a2929a48acd2746d8\"><td class=\"mdescLeft\">&#160;</td><td class=\"mdescRight\">Add a render item to the set of render items that will be used to draw the DAG object associated with the override that owns this container.  <a href=\"class_m_h_w_render_1_1_m_sub_scene_container.html#a3868473990e1902a2929a48acd2746d8\">More...</a><br></td></tr>\n\
<tr class=\"separator:a3868473990e1902a2929a48acd2746d8\"><td class=\"memSeparator\" colspan=\"2\">&#160;</td></tr>\n\
<tr class=\"memitem:ab8634382a216e26abb0b47c55d5eb4b6\"><td class=\"memItemLeft\" align=\"right\" valign=\"top\">bool&#160;</td><td class=\"memItemRight\" valign=\"bottom\"><a class=\"el\" href=\"#!/url=./cpp_ref/class_m_h_w_render_1_1_m_sub_scene_container.html#ab8634382a216e26abb0b47c55d5eb4b6\">remove</a> (const <a class=\"el\" href=\"#!/url=./cpp_ref/class_m_string.html\">MString</a> &amp;name)</td></tr>\n\
<tr class=\"memdesc:ab8634382a216e26abb0b47c55d5eb4b6\"><td class=\"mdescLeft\">&#160;</td><td class=\"mdescRight\">Remove a render item by name from the set of render items used to draw the object associated with the override that owns this container.  <a href=\"class_m_h_w_render_1_1_m_sub_scene_container.html#ab8634382a216e26abb0b47c55d5eb4b6\">More...</a><br></td></tr>\n\
<tr class=\"separator:ab8634382a216e26abb0b47c55d5eb4b6\"><td class=\"memSeparator\" colspan=\"2\">&#160;</td></tr>\n\
<tr class=\"memitem:ac8bb3912a3ce86b15842e79d0b421204\"><td class=\"memItemLeft\" align=\"right\" valign=\"top\">void&#160;</td><td class=\"memItemRight\" valign=\"bottom\"><a class=\"el\" href=\"#!/url=./cpp_ref/class_m_h_w_render_1_1_m_sub_scene_container.html#ac8bb3912a3ce86b15842e79d0b421204\">clear</a> ()</td></tr>\n\
<tr class=\"memdesc:ac8bb3912a3ce86b15842e79d0b421204\"><td class=\"mdescLeft\">&#160;</td><td class=\"mdescRight\">Remove all render items from this container.  <a href=\"class_m_h_w_render_1_1_m_sub_scene_container.html#ac8bb3912a3ce86b15842e79d0b421204\">More...</a><br></td></tr>\n\
<tr class=\"separator:ac8bb3912a3ce86b15842e79d0b421204\"><td class=\"memSeparator\" colspan=\"2\">&#160;</td></tr>\n\
<tr class=\"memitem:aa96c3d709fe8ea2325d20c2423bb8f23\"><td class=\"memItemLeft\" align=\"right\" valign=\"top\"><a class=\"el\" href=\"#!/url=./cpp_ref/class_m_h_w_render_1_1_m_render_item.html\">MRenderItem</a> *&#160;</td><td class=\"memItemRight\" valign=\"bottom\"><a class=\"el\" href=\"#!/url=./cpp_ref/class_m_h_w_render_1_1_m_sub_scene_container.html#aa96c3d709fe8ea2325d20c2423bb8f23\">find</a> (const <a class=\"el\" href=\"#!/url=./cpp_ref/class_m_string.html\">MString</a> &amp;name)</td></tr>\n\
<tr class=\"memdesc:aa96c3d709fe8ea2325d20c2423bb8f23\"><td class=\"mdescLeft\">&#160;</td><td class=\"mdescRight\">Get a render item by name from the container.  <a href=\"class_m_h_w_render_1_1_m_sub_scene_container.html#aa96c3d709fe8ea2325d20c2423bb8f23\">More...</a><br></td></tr>\n\
<tr class=\"separator:aa96c3d709fe8ea2325d20c2423bb8f23\"><td class=\"memSeparator\" colspan=\"2\">&#160;</td></tr>\n\
<tr class=\"memitem:ab1eb6de2bf3aa228929ab4b40c73507c\"><td class=\"memItemLeft\" align=\"right\" valign=\"top\">unsigned int&#160;</td><td class=\"memItemRight\" valign=\"bottom\"><a class=\"el\" href=\"#!/url=./cpp_ref/class_m_h_w_render_1_1_m_sub_scene_container.html#ab1eb6de2bf3aa228929ab4b40c73507c\">count</a> () const </td></tr>\n\
<tr class=\"memdesc:ab1eb6de2bf3aa228929ab4b40c73507c\"><td class=\"mdescLeft\">&#160;</td><td class=\"mdescRight\">Get the number of render items in the container.  <a href=\"class_m_h_w_render_1_1_m_sub_scene_container.html#ab1eb6de2bf3aa228929ab4b40c73507c\">More...</a><br></td></tr>\n\
<tr class=\"separator:ab1eb6de2bf3aa228929ab4b40c73507c\"><td class=\"memSeparator\" colspan=\"2\">&#160;</td></tr>\n\
<tr class=\"memitem:a3a7e81331683c0b05878279c1a8e575f\"><td class=\"memItemLeft\" align=\"right\" valign=\"top\">const <a class=\"el\" href=\"#!/url=./cpp_ref/class_m_h_w_render_1_1_m_render_item.html\">MRenderItem</a> *&#160;</td><td class=\"memItemRight\" valign=\"bottom\"><a class=\"el\" href=\"#!/url=./cpp_ref/class_m_h_w_render_1_1_m_sub_scene_container.html#a3a7e81331683c0b05878279c1a8e575f\">find</a> (const <a class=\"el\" href=\"#!/url=./cpp_ref/class_m_string.html\">MString</a> &amp;name) const </td></tr>\n\
<tr class=\"memdesc:a3a7e81331683c0b05878279c1a8e575f\"><td class=\"mdescLeft\">&#160;</td><td class=\"mdescRight\">Get a render item by name from the container.  <a href=\"class_m_h_w_render_1_1_m_sub_scene_container.html#a3a7e81331683c0b05878279c1a8e575f\">More...</a><br></td></tr>\n\
<tr class=\"separator:a3a7e81331683c0b05878279c1a8e575f\"><td class=\"memSeparator\" colspan=\"2\">&#160;</td></tr>\n\
<tr class=\"memitem:aead0dbd34c8176649487d2139715305b\"><td class=\"memItemLeft\" align=\"right\" valign=\"top\">Iterator *&#160;</td><td class=\"memItemRight\" valign=\"bottom\"><a class=\"el\" href=\"#!/url=./cpp_ref/class_m_h_w_render_1_1_m_sub_scene_container.html#aead0dbd34c8176649487d2139715305b\">getIterator</a> ()</td></tr>\n\
<tr class=\"memdesc:aead0dbd34c8176649487d2139715305b\"><td class=\"mdescLeft\">&#160;</td><td class=\"mdescRight\">Get an iterator for the container.  <a href=\"class_m_h_w_render_1_1_m_sub_scene_container.html#aead0dbd34c8176649487d2139715305b\">More...</a><br></td></tr>\n\
<tr class=\"separator:aead0dbd34c8176649487d2139715305b\"><td class=\"memSeparator\" colspan=\"2\">&#160;</td></tr>\n\
<tr class=\"memitem:ad004518a43a7b5016fb2b5f1bf9b76dc\"><td class=\"memItemLeft\" align=\"right\" valign=\"top\">ConstIterator *&#160;</td><td class=\"memItemRight\" valign=\"bottom\"><a class=\"el\" href=\"#!/url=./cpp_ref/class_m_h_w_render_1_1_m_sub_scene_container.html#ad004518a43a7b5016fb2b5f1bf9b76dc\">getConstIterator</a> () const </td></tr>\n\
<tr class=\"memdesc:ad004518a43a7b5016fb2b5f1bf9b76dc\"><td class=\"mdescLeft\">&#160;</td><td class=\"mdescRight\">Get a const iterator for the container.  <a href=\"class_m_h_w_render_1_1_m_sub_scene_container.html#ad004518a43a7b5016fb2b5f1bf9b76dc\">More...</a><br></td></tr>\n\
<tr class=\"separator:ad004518a43a7b5016fb2b5f1bf9b76dc\"><td class=\"memSeparator\" colspan=\"2\">&#160;</td></tr>\n\
</table><table class=\"memberdecls\">\n\
<tr class=\"heading\"><td colspan=\"2\"><h2 class=\"groupheader\"><a name=\"pub-static-methods\"></a>\n\
Static Public Member Functions</h2></td></tr>\n\
<tr class=\"memitem:a774cd5d8fbebe8e7ed82a5aa587d1f04\"><td class=\"memItemLeft\" align=\"right\" valign=\"top\">static const char *&#160;</td><td class=\"memItemRight\" valign=\"bottom\"><a class=\"el\" href=\"#!/url=./cpp_ref/class_m_h_w_render_1_1_m_sub_scene_container.html#a774cd5d8fbebe8e7ed82a5aa587d1f04\">className</a> ()</td></tr>\n\
<tr class=\"memdesc:a774cd5d8fbebe8e7ed82a5aa587d1f04\"><td class=\"mdescLeft\">&#160;</td><td class=\"mdescRight\">Returns the name of this class.  <a href=\"class_m_h_w_render_1_1_m_sub_scene_container.html#a774cd5d8fbebe8e7ed82a5aa587d1f04\">More...</a><br></td></tr>\n\
<tr class=\"separator:a774cd5d8fbebe8e7ed82a5aa587d1f04\"><td class=\"memSeparator\" colspan=\"2\">&#160;</td></tr>\n\
</table>\n\
<a name=\"details\" id=\"details\"></a><h2 class=\"groupheader\">Detailed Description</h2>\n\
<div class=\"textblock\"><p>Container for render items generated by <a class=\"el\" href=\"#!/url=./cpp_ref/class_m_h_w_render_1_1_m_px_sub_scene_override.html\" title=\"Base class for Viewport 2.0 drawing of DAG nodes which represent sub-scenes. \">MPxSubSceneOverride</a>. </p>\n\
<p>An instance of this class is associated with each instance of <a class=\"el\" href=\"#!/url=./cpp_ref/class_m_h_w_render_1_1_m_px_sub_scene_override.html\" title=\"Base class for Viewport 2.0 drawing of DAG nodes which represent sub-scenes. \">MPxSubSceneOverride</a> and is used to manage and store the set of render items required by the override to draw its associated DAG object.</p>\n\
<p>The container is optimized to be used with large numbers of render items.</p>\n\
<p>The container will assume ownership of any render item added to it. Implementations of <a class=\"el\" href=\"#!/url=./cpp_ref/class_m_h_w_render_1_1_m_px_sub_scene_override.html\" title=\"Base class for Viewport 2.0 drawing of DAG nodes which represent sub-scenes. \">MPxSubSceneOverride</a> are free to maintain separate pointers to render items stored in the container, but those pointers will become invalid as soon as the associated render item is removed from the container. </p>\n\
<dl class=\"section \"><div id=\"dynsection-example0\" class=\"dynheader closed\" onclick=\"return toggleVisibility(this)\" style=\"cursor:pointer;\"><dt><img id=\"dynsection-example0-trigger\" src=\"cpp_ref/closed.png\" alt=\"+\"> <b>Examples: </b></dt></div><div id=\"dynsection-example0-content\" class=\"dyncontent\" style=\"display:none;\"><dd><a class=\"el\" href=\"#!/url=./cpp_ref/api_mesh_shape_2api_mesh_sub_scene_override_8cpp-example.html#_a41\">apiMeshShape/apiMeshSubSceneOverride.cpp</a>, <a class=\"el\" href=\"#!/url=./cpp_ref/api_mesh_shape_2api_mesh_sub_scene_override_8h-example.html#_a4\">apiMeshShape/apiMeshSubSceneOverride.h</a>, <a class=\"el\" href=\"#!/url=./cpp_ref/foot_print_node__sub_scene_override_2foot_print_node__sub_scene_override_8cpp-example.html#_a36\">footPrintNode_SubSceneOverride/footPrintNode_SubSceneOverride.cpp</a>, <a class=\"el\" href=\"#!/url=./cpp_ref/gpu_cache_2gpu_cache_sub_scene_override_8cpp-example.html#_a42\">gpuCache/gpuCacheSubSceneOverride.cpp</a>, and <a class=\"el\" href=\"#!/url=./cpp_ref/gpu_cache_2gpu_cache_sub_scene_override_8h-example.html#_a4\">gpuCache/gpuCacheSubSceneOverride.h</a>.</dd></div>\n\
</dl></div><h2 class=\"groupheader\">Member Function Documentation</h2>\n\
<a class=\"anchor\" id=\"a3868473990e1902a2929a48acd2746d8\"></a>\n\
<div class=\"memitem\">\n\
<div class=\"memproto\">\n\
      <table class=\"memname\">\n\
        <tr>\n\
          <td class=\"memname\">bool add </td>\n\
          <td>(</td>\n\
          <td class=\"paramtype\"><a class=\"el\" href=\"#!/url=./cpp_ref/class_m_h_w_render_1_1_m_render_item.html\">MRenderItem</a> *&#160;</td>\n\
          <td class=\"paramname\"><em>item</em></td><td>)</td>\n\
          <td></td>\n\
        </tr>\n\
      </table>\n\
</div><div class=\"memdoc\">\n\
\n\
<p>Add a render item to the set of render items that will be used to draw the DAG object associated with the override that owns this container. </p>\n\
<p>Each item in the container must have a unique name and the same render item may not be used in the container more than once. When Viewport 2.0 draws the associated DAG object, it will process all render items in this container. Any items that have valid geometry and a valid shader will be drawn as long as they pass all filtering tests for the active viewport.</p>\n\
<p>On successful add, Maya assumes ownership of the render item and the caller should not call <a class=\"el\" href=\"#!/url=./cpp_ref/class_m_h_w_render_1_1_m_render_item.html#a52cc993ee0ac8e3718904a1e4537e9f3\" title=\"Static MRenderItem destruction utility. \">MRenderItem::Destroy()</a> on the item. Callers are free to hold a pointer to the render item for easy access. Note that any pointers to <a class=\"el\" href=\"#!/url=./cpp_ref/class_m_h_w_render_1_1_m_render_item.html\" title=\"A single renderable entity. \">MRenderItem</a> objects added to <a class=\"el\" href=\"#!/url=./cpp_ref/class_m_h_w_render_1_1_m_sub_scene_container.html\" title=\"Container for render items generated by MPxSubSceneOverride. \">MSubSceneContainer</a> become invalid after the render item is removed from the container. Attempts to use such pointers will result in instability. Further note that it is invalid to modify any render item owned by this container outside of <a class=\"el\" href=\"#!/url=./cpp_ref/class_m_h_w_render_1_1_m_px_sub_scene_override.html#ac74e57c764a59c2fa2a8e6a5b72090d5\" title=\"This method is called by Maya on each frame as long as the implementation of MPxSubSceneOverride::req...\">MPxSubSceneOverride::update()</a>. Attempts to do so will result in unpredictable behavior.</p>\n\
<dl class=\"params\"><dt>Parameters</dt><dd>\n\
  <table class=\"params\">\n\
    <tr><td class=\"paramdir\">[in]</td><td class=\"paramname\">item</td><td>The item to add</td></tr>\n\
  </table>\n\
  </dd>\n\
</dl>\n\
<dl class=\"section return\"><dt>Returns</dt><dd>True if the item was successfully added to the container </dd></dl>\n\
<dl class=\"section \"><div id=\"dynsection-example1\" class=\"dynheader closed\" onclick=\"return toggleVisibility(this)\" style=\"cursor:pointer;\"><dt><img id=\"dynsection-example1-trigger\" src=\"cpp_ref/closed.png\" alt=\"+\"> <b>Examples: </b></dt></div><div id=\"dynsection-example1-content\" class=\"dyncontent\" style=\"display:none;\"><dd><a class=\"el\" href=\"#!/url=./cpp_ref/api_mesh_shape_2api_mesh_sub_scene_override_8cpp-example.html#a65\">apiMeshShape/apiMeshSubSceneOverride.cpp</a>, <a class=\"el\" href=\"#!/url=./cpp_ref/foot_print_node__sub_scene_override_2foot_print_node__sub_scene_override_8cpp-example.html#a68\">footPrintNode_SubSceneOverride/footPrintNode_SubSceneOverride.cpp</a>, and <a class=\"el\" href=\"#!/url=./cpp_ref/gpu_cache_2gpu_cache_sub_scene_override_8cpp-example.html#a43\">gpuCache/gpuCacheSubSceneOverride.cpp</a>.</dd></div>\n\
</dl>\n\
</div>\n\
</div>\n\
<a class=\"anchor\" id=\"ab8634382a216e26abb0b47c55d5eb4b6\"></a>\n\
<div class=\"memitem\">\n\
<div class=\"memproto\">\n\
      <table class=\"memname\">\n\
        <tr>\n\
          <td class=\"memname\">bool remove </td>\n\
          <td>(</td>\n\
          <td class=\"paramtype\">const <a class=\"el\" href=\"#!/url=./cpp_ref/class_m_string.html\">MString</a> &amp;&#160;</td>\n\
          <td class=\"paramname\"><em>name</em></td><td>)</td>\n\
          <td></td>\n\
        </tr>\n\
      </table>\n\
</div><div class=\"memdoc\">\n\
\n\
<p>Remove a render item by name from the set of render items used to draw the object associated with the override that owns this container. </p>\n\
<p>Note that on successful removal any pointers to the render item that was removed become invalid and any attempts to use such pointers will result in instability.</p>\n\
<dl class=\"params\"><dt>Parameters</dt><dd>\n\
  <table class=\"params\">\n\
    <tr><td class=\"paramdir\">[in]</td><td class=\"paramname\">name</td><td>The name of the render item to remove</td></tr>\n\
  </table>\n\
  </dd>\n\
</dl>\n\
<dl class=\"section return\"><dt>Returns</dt><dd>True if the item was successfully removed from the container </dd></dl>\n\
<dl class=\"section \"><div id=\"dynsection-example2\" class=\"dynheader closed\" onclick=\"return toggleVisibility(this)\" style=\"cursor:pointer;\"><dt><img id=\"dynsection-example2-trigger\" src=\"cpp_ref/closed.png\" alt=\"+\"> <b>Examples: </b></dt></div><div id=\"dynsection-example2-content\" class=\"dyncontent\" style=\"display:none;\"><dd><a class=\"el\" href=\"#!/url=./cpp_ref/api_mesh_shape_2api_mesh_sub_scene_override_8cpp-example.html#a66\">apiMeshShape/apiMeshSubSceneOverride.cpp</a>, and <a class=\"el\" href=\"#!/url=./cpp_ref/gpu_cache_2gpu_cache_sub_scene_override_8cpp-example.html#a44\">gpuCache/gpuCacheSubSceneOverride.cpp</a>.</dd></div>\n\
</dl>\n\
</div>\n\
</div>\n\
<a class=\"anchor\" id=\"ac8bb3912a3ce86b15842e79d0b421204\"></a>\n\
<div class=\"memitem\">\n\
<div class=\"memproto\">\n\
      <table class=\"memname\">\n\
        <tr>\n\
          <td class=\"memname\">void clear </td>\n\
          <td>(</td>\n\
          <td class=\"paramname\"></td><td>)</td>\n\
          <td></td>\n\
        </tr>\n\
      </table>\n\
</div><div class=\"memdoc\">\n\
\n\
<p>Remove all render items from this container. </p>\n\
<p>After calling, any pointers to any render items owned by this container will be invalid. </p>\n\
<dl class=\"section \"><div id=\"dynsection-example3\" class=\"dynheader closed\" onclick=\"return toggleVisibility(this)\" style=\"cursor:pointer;\"><dt><img id=\"dynsection-example3-trigger\" src=\"cpp_ref/closed.png\" alt=\"+\"> <b>Examples: </b></dt></div><div id=\"dynsection-example3-content\" class=\"dyncontent\" style=\"display:none;\"><dd><a class=\"el\" href=\"#!/url=./cpp_ref/gpu_cache_2gpu_cache_sub_scene_override_8cpp-example.html#a88\">gpuCache/gpuCacheSubSceneOverride.cpp</a>.</dd></div>\n\
</dl>\n\
</div>\n\
</div>\n\
<a class=\"anchor\" id=\"aa96c3d709fe8ea2325d20c2423bb8f23\"></a>\n\
<div class=\"memitem\">\n\
<div class=\"memproto\">\n\
      <table class=\"memname\">\n\
        <tr>\n\
          <td class=\"memname\"><a class=\"el\" href=\"#!/url=./cpp_ref/class_m_h_w_render_1_1_m_render_item.html\">MRenderItem</a> * find </td>\n\
          <td>(</td>\n\
          <td class=\"paramtype\">const <a class=\"el\" href=\"#!/url=./cpp_ref/class_m_string.html\">MString</a> &amp;&#160;</td>\n\
          <td class=\"paramname\"><em>name</em></td><td>)</td>\n\
          <td></td>\n\
        </tr>\n\
      </table>\n\
</div><div class=\"memdoc\">\n\
\n\
<p>Get a render item by name from the container. </p>\n\
<p>The ownership of the render item remains with the container and callers should not call <a class=\"el\" href=\"#!/url=./cpp_ref/class_m_h_w_render_1_1_m_render_item.html#a52cc993ee0ac8e3718904a1e4537e9f3\" title=\"Static MRenderItem destruction utility. \">MRenderItem::Destroy()</a> on it. The pointer may be cached and will remain valid until the render item is removed from the container.</p>\n\
<dl class=\"params\"><dt>Parameters</dt><dd>\n\
  <table class=\"params\">\n\
    <tr><td class=\"paramdir\">[in]</td><td class=\"paramname\">name</td><td>The name of the render item to retrieve</td></tr>\n\
  </table>\n\
  </dd>\n\
</dl>\n\
<dl class=\"section return\"><dt>Returns</dt><dd>The requested render item or NULL if not found </dd></dl>\n\
<dl class=\"section \"><div id=\"dynsection-example4\" class=\"dynheader closed\" onclick=\"return toggleVisibility(this)\" style=\"cursor:pointer;\"><dt><img id=\"dynsection-example4-trigger\" src=\"cpp_ref/closed.png\" alt=\"+\"> <b>Examples: </b></dt></div><div id=\"dynsection-example4-content\" class=\"dyncontent\" style=\"display:none;\"><dd><a class=\"el\" href=\"#!/url=./cpp_ref/api_mesh_shape_2api_mesh_sub_scene_override_8cpp-example.html#a58\">apiMeshShape/apiMeshSubSceneOverride.cpp</a>, and <a class=\"el\" href=\"#!/url=./cpp_ref/foot_print_node__sub_scene_override_2foot_print_node__sub_scene_override_8cpp-example.html#a63\">footPrintNode_SubSceneOverride/footPrintNode_SubSceneOverride.cpp</a>.</dd></div>\n\
</dl>\n\
</div>\n\
</div>\n\
<a class=\"anchor\" id=\"ab1eb6de2bf3aa228929ab4b40c73507c\"></a>\n\
<div class=\"memitem\">\n\
<div class=\"memproto\">\n\
      <table class=\"memname\">\n\
        <tr>\n\
          <td class=\"memname\">unsigned int count </td>\n\
          <td>(</td>\n\
          <td class=\"paramname\"></td><td>)</td>\n\
          <td> const</td>\n\
        </tr>\n\
      </table>\n\
</div><div class=\"memdoc\">\n\
\n\
<p>Get the number of render items in the container. </p>\n\
<dl class=\"section return\"><dt>Returns</dt><dd>The number of render items in the container. </dd></dl>\n\
<dl class=\"section \"><div id=\"dynsection-example5\" class=\"dynheader closed\" onclick=\"return toggleVisibility(this)\" style=\"cursor:pointer;\"><dt><img id=\"dynsection-example5-trigger\" src=\"cpp_ref/closed.png\" alt=\"+\"> <b>Examples: </b></dt></div><div id=\"dynsection-example5-content\" class=\"dyncontent\" style=\"display:none;\"><dd><a class=\"el\" href=\"#!/url=./cpp_ref/api_mesh_shape_2api_mesh_sub_scene_override_8cpp-example.html#a42\">apiMeshShape/apiMeshSubSceneOverride.cpp</a>, and <a class=\"el\" href=\"#!/url=./cpp_ref/foot_print_node__sub_scene_override_2foot_print_node__sub_scene_override_8cpp-example.html#a57\">footPrintNode_SubSceneOverride/footPrintNode_SubSceneOverride.cpp</a>.</dd></div>\n\
</dl>\n\
</div>\n\
</div>\n\
<a class=\"anchor\" id=\"a3a7e81331683c0b05878279c1a8e575f\"></a>\n\
<div class=\"memitem\">\n\
<div class=\"memproto\">\n\
      <table class=\"memname\">\n\
        <tr>\n\
          <td class=\"memname\">const <a class=\"el\" href=\"#!/url=./cpp_ref/class_m_h_w_render_1_1_m_render_item.html\">MRenderItem</a> * find </td>\n\
          <td>(</td>\n\
          <td class=\"paramtype\">const <a class=\"el\" href=\"#!/url=./cpp_ref/class_m_string.html\">MString</a> &amp;&#160;</td>\n\
          <td class=\"paramname\"><em>name</em></td><td>)</td>\n\
          <td> const</td>\n\
        </tr>\n\
      </table>\n\
</div><div class=\"memdoc\">\n\
\n\
<p>Get a render item by name from the container. </p>\n\
<p>The pointer may be cached and will remain valid until the render item is removed from the container.</p>\n\
<dl class=\"params\"><dt>Parameters</dt><dd>\n\
  <table class=\"params\">\n\
    <tr><td class=\"paramdir\">[in]</td><td class=\"paramname\">name</td><td>The name of the render item to retrieve</td></tr>\n\
  </table>\n\
  </dd>\n\
</dl>\n\
<dl class=\"section return\"><dt>Returns</dt><dd>The requested render item or NULL if not found </dd></dl>\n\
\n\
</div>\n\
</div>\n\
<a class=\"anchor\" id=\"aead0dbd34c8176649487d2139715305b\"></a>\n\
<div class=\"memitem\">\n\
<div class=\"memproto\">\n\
      <table class=\"memname\">\n\
        <tr>\n\
          <td class=\"memname\">MSubSceneContainer::Iterator * getIterator </td>\n\
          <td>(</td>\n\
          <td class=\"paramname\"></td><td>)</td>\n\
          <td></td>\n\
        </tr>\n\
      </table>\n\
</div><div class=\"memdoc\">\n\
\n\
<p>Get an iterator for the container. </p>\n\
<p>Caller is responsible for deleting the iterator when it is no longer needed.</p>\n\
<dl class=\"section return\"><dt>Returns</dt><dd>An iterator for the container or NULL on failure </dd></dl>\n\
\n\
</div>\n\
</div>\n\
<a class=\"anchor\" id=\"ad004518a43a7b5016fb2b5f1bf9b76dc\"></a>\n\
<div class=\"memitem\">\n\
<div class=\"memproto\">\n\
      <table class=\"memname\">\n\
        <tr>\n\
          <td class=\"memname\">MSubSceneContainer::ConstIterator * getConstIterator </td>\n\
          <td>(</td>\n\
          <td class=\"paramname\"></td><td>)</td>\n\
          <td> const</td>\n\
        </tr>\n\
      </table>\n\
</div><div class=\"memdoc\">\n\
\n\
<p>Get a const iterator for the container. </p>\n\
<p>Caller is responsible for deleting the iterator when it is no longer needed.</p>\n\
<dl class=\"section return\"><dt>Returns</dt><dd>A const iterator for the container or NULL on failure </dd></dl>\n\
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
<dl class=\"section return\"><dt>Returns</dt><dd>Name of this class. </dd></dl>\n\
\n\
</div>\n\
</div>\n\
<hr>The documentation for this class was generated from the following files:<ul>\n\
<li>MPxSubSceneOverride.h</li>\n\
<li>MPxSubSceneOverride.cpp</li>\n\
</ul>\n\
</div><!-- contents -->\n\
</div><!-- doc-content -->\n\
<!-- start footer part -->\n\
\n\
      <div class=\"footer-block\"><a href=\"../html/ac.cmtdialog.htm\" class=\"comments-anchor\" target=\"_blank\"><span class=\"comments-link\">Please send us your comment about this page</span></a></div></div>\n\
   </div></body>\n\
</html>\n\
";