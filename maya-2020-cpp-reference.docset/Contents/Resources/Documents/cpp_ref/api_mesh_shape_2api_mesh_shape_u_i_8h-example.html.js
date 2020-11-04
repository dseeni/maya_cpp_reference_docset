var topic = "<!-- saved from url=(0024)http://docs.autodesk.com -->\n\
<html>\n\
   <head><script src=\"../scripts/yepnope.1.5.4-min.js\" type=\"text/javascript\"></script><script src=\"../scripts/lib/jquery-1.11.1.min.js\" type=\"text/javascript\"></script>\n\
      <title>C++ API Reference: apiMeshShape/apiMeshShapeUI.h</title>\n\
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
    cpp_ref_adsk_ref_toc.initNavTree(\'api_mesh_shape_2api_mesh_shape_u_i_8h-example.html\', tocPrefix);\n\
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
            <h1>C++ API Reference: apiMeshShape/apiMeshShapeUI.h</h1>\n\
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
      <li><a href=\"#!/url=./cpp_ref/annotated.html\"><span>Classes</span></a></li>\n\
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
<div class=\"title\">apiMeshShape/apiMeshShapeUI.h</div>  </div>\n\
</div><!--header-->\n\
<div class=\"contents\">\n\
<div class=\"fragment\"><div class=\"line\"><span class=\"comment\">//-</span></div>\n\
<div class=\"line\"><span class=\"comment\">// ==========================================================================</span></div>\n\
<div class=\"line\"><span class=\"comment\">// Copyright 2015 Autodesk, Inc.  All rights reserved.</span></div>\n\
<div class=\"line\"><span class=\"comment\">//</span></div>\n\
<div class=\"line\"><span class=\"comment\">// Use of this software is subject to the terms of the Autodesk</span></div>\n\
<div class=\"line\"><span class=\"comment\">// license agreement provided at the time of installation or download,</span></div>\n\
<div class=\"line\"><span class=\"comment\">// or which otherwise accompanies this software in either electronic</span></div>\n\
<div class=\"line\"><span class=\"comment\">// or hard copy form.</span></div>\n\
<div class=\"line\"><span class=\"comment\">// ==========================================================================</span></div>\n\
<div class=\"line\"><span class=\"comment\">//+</span></div>\n\
<div class=\"line\"></div>\n\
<div class=\"line\"><span class=\"comment\">//</span></div>\n\
<div class=\"line\"><span class=\"comment\">// apiMeshShapeUI.h</span></div>\n\
<div class=\"line\"><span class=\"comment\">//</span></div>\n\
<div class=\"line\"><span class=\"comment\">// Encapsulates the UI portion of a user defined shape. All of the</span></div>\n\
<div class=\"line\"><span class=\"comment\">// drawing and selection code goes here.</span></div>\n\
<div class=\"line\"><span class=\"comment\">//</span></div>\n\
<div class=\"line\"><span class=\"comment\"></span></div>\n\
<div class=\"line\"><span class=\"preprocessor\">#include &lt;maya/MPxSurfaceShapeUI.h&gt;</span> </div>\n\
<div class=\"line\"><span class=\"preprocessor\">#include &quot;apiMeshShape.h&quot;</span> </div>\n\
<div class=\"line\"></div>\n\
<div class=\"line\"><span class=\"keyword\">class </span>apiMeshUI : <span class=\"keyword\">public</span> <a name=\"_a0\"></a><a class=\"code\" href=\"#!/url=./cpp_ref/class_m_px_surface_shape_u_i.html\">MPxSurfaceShapeUI</a></div>\n\
<div class=\"line\">{</div>\n\
<div class=\"line\"><span class=\"keyword\">public</span>:</div>\n\
<div class=\"line\">    apiMeshUI();</div>\n\
<div class=\"line\">    ~apiMeshUI() <span class=\"keyword\">override</span>; </div>\n\
<div class=\"line\"></div>\n\
<div class=\"line\">    <span class=\"comment\">//</span></div>\n\
<div class=\"line\">    <span class=\"comment\">// Overrides</span></div>\n\
<div class=\"line\">    <span class=\"comment\">//</span></div>\n\
<div class=\"line\"><span class=\"comment\"></span></div>\n\
<div class=\"line\">    <span class=\"comment\">// Puts draw request on the draw queue</span></div>\n\
<div class=\"line\">    <span class=\"comment\">//</span></div>\n\
<div class=\"line\">    <span class=\"keywordtype\">void</span>    <a name=\"a1\"></a><a class=\"code\" href=\"#!/url=./cpp_ref/class_m_px_surface_shape_u_i.html#a27dc15d8c360596ae16b5f3fbd236625\">getDrawRequests</a>( <span class=\"keyword\">const</span> <a name=\"_a2\"></a><a class=\"code\" href=\"#!/url=./cpp_ref/class_m_draw_info.html\">MDrawInfo</a> &amp; info,</div>\n\
<div class=\"line\">                                     <span class=\"keywordtype\">bool</span> objectAndActiveOnly,</div>\n\
<div class=\"line\">                                     <a name=\"_a3\"></a><a class=\"code\" href=\"#!/url=./cpp_ref/class_m_draw_request_queue.html\">MDrawRequestQueue</a> &amp; requests ) <span class=\"keyword\">override</span>;</div>\n\
<div class=\"line\"></div>\n\
<div class=\"line\">    <span class=\"comment\">// Main draw routine. Gets called by maya with draw requests.</span></div>\n\
<div class=\"line\">    <span class=\"comment\">//</span></div>\n\
<div class=\"line\">    <span class=\"keywordtype\">void</span>    <a name=\"a4\"></a><a class=\"code\" href=\"#!/url=./cpp_ref/class_m_px_surface_shape_u_i.html#adb2bed7a0e37f8760ff6e48bce677443\">draw</a>( <span class=\"keyword\">const</span> <a name=\"_a5\"></a><a class=\"code\" href=\"#!/url=./cpp_ref/class_m_draw_request.html\">MDrawRequest</a> &amp; request,</div>\n\
<div class=\"line\">                          <a name=\"_a6\"></a><a class=\"code\" href=\"#!/url=./cpp_ref/class_m3d_view.html\">M3dView</a> &amp; view ) <span class=\"keyword\">const override</span>;</div>\n\
<div class=\"line\"></div>\n\
<div class=\"line\">    <span class=\"comment\">// Main draw routine for UV editor. This is called by maya when the </span></div>\n\
<div class=\"line\">    <span class=\"comment\">// shape is selected and the UV texture window is visible. </span></div>\n\
<div class=\"line\">    <span class=\"comment\">// </span></div>\n\
<div class=\"line\">    <span class=\"keywordtype\">void</span>    <a name=\"a7\"></a><a class=\"code\" href=\"#!/url=./cpp_ref/class_m_px_surface_shape_u_i.html#acd02e3ec15c17ad6aa4243492cf9ae4a\">drawUV</a>( <a class=\"code\" href=\"#!/url=./cpp_ref/class_m3d_view.html\">M3dView</a> &amp;view, <span class=\"keyword\">const</span> <a name=\"_a8\"></a><a class=\"code\" href=\"#!/url=./cpp_ref/class_m_texture_editor_draw_info.html\">MTextureEditorDrawInfo</a> &amp; ) <span class=\"keyword\">const override</span>; </div>\n\
<div class=\"line\">    <span class=\"keywordtype\">bool</span>    <a name=\"a9\"></a><a class=\"code\" href=\"#!/url=./cpp_ref/class_m_px_surface_shape_u_i.html#a2c71c259ae0919e4ef14d87e5a4c3546\">canDrawUV</a>() <span class=\"keyword\">const override</span>; </div>\n\
<div class=\"line\"></div>\n\
<div class=\"line\">    <span class=\"comment\">// Main selection routine</span></div>\n\
<div class=\"line\">    <span class=\"comment\">//</span></div>\n\
<div class=\"line\">    <span class=\"keywordtype\">bool</span>    <a name=\"a10\"></a><a class=\"code\" href=\"#!/url=./cpp_ref/class_m_px_surface_shape_u_i.html#ad847ba49d36027fa9ae1184695b248b6\">select</a>( <a name=\"_a11\"></a><a class=\"code\" href=\"#!/url=./cpp_ref/class_m_select_info.html\">MSelectInfo</a> &amp;selectInfo,</div>\n\
<div class=\"line\">                            <a name=\"_a12\"></a><a class=\"code\" href=\"#!/url=./cpp_ref/class_m_selection_list.html\">MSelectionList</a> &amp;selectionList,</div>\n\
<div class=\"line\">                            <a name=\"_a13\"></a><a class=\"code\" href=\"#!/url=./cpp_ref/class_m_point_array.html\">MPointArray</a> &amp;worldSpaceSelectPts ) <span class=\"keyword\">const override</span>;</div>\n\
<div class=\"line\"></div>\n\
<div class=\"line\">    <span class=\"comment\">//</span></div>\n\
<div class=\"line\">    <span class=\"comment\">// Helper routines</span></div>\n\
<div class=\"line\">    <span class=\"comment\">//</span></div>\n\
<div class=\"line\"><span class=\"comment\"></span></div>\n\
<div class=\"line\">    <span class=\"keywordtype\">void</span>    drawWireframe( <span class=\"keyword\">const</span> <a class=\"code\" href=\"#!/url=./cpp_ref/class_m_draw_request.html\">MDrawRequest</a> &amp; request, <a class=\"code\" href=\"#!/url=./cpp_ref/class_m3d_view.html\">M3dView</a> &amp; view ) <span class=\"keyword\">const</span>;</div>\n\
<div class=\"line\">    <span class=\"keywordtype\">void</span>    drawShaded( <span class=\"keyword\">const</span> <a class=\"code\" href=\"#!/url=./cpp_ref/class_m_draw_request.html\">MDrawRequest</a> &amp; request, <a class=\"code\" href=\"#!/url=./cpp_ref/class_m3d_view.html\">M3dView</a> &amp; view ) <span class=\"keyword\">const</span>;</div>\n\
<div class=\"line\">    <span class=\"keywordtype\">void</span>    drawVertices( <span class=\"keyword\">const</span> <a class=\"code\" href=\"#!/url=./cpp_ref/class_m_draw_request.html\">MDrawRequest</a> &amp; request, <a class=\"code\" href=\"#!/url=./cpp_ref/class_m3d_view.html\">M3dView</a> &amp; view ) <span class=\"keyword\">const</span>;</div>\n\
<div class=\"line\">    <span class=\"keywordtype\">void</span>    drawBoundingBox( <span class=\"keyword\">const</span> <a class=\"code\" href=\"#!/url=./cpp_ref/class_m_draw_request.html\">MDrawRequest</a> &amp; request, <a class=\"code\" href=\"#!/url=./cpp_ref/class_m3d_view.html\">M3dView</a> &amp; view ) <span class=\"keyword\">const</span>;</div>\n\
<div class=\"line\">    <span class=\"comment\">// for userInteraction example code</span></div>\n\
<div class=\"line\">    <span class=\"comment\">//</span></div>\n\
<div class=\"line\">    <span class=\"keywordtype\">void</span>    drawRedPointAtCenter( <span class=\"keyword\">const</span> <a class=\"code\" href=\"#!/url=./cpp_ref/class_m_draw_request.html\">MDrawRequest</a> &amp; request, <a class=\"code\" href=\"#!/url=./cpp_ref/class_m3d_view.html\">M3dView</a> &amp; view ) <span class=\"keyword\">const</span>;</div>\n\
<div class=\"line\"></div>\n\
<div class=\"line\">    <span class=\"keywordtype\">bool</span>            selectVertices( <a class=\"code\" href=\"#!/url=./cpp_ref/class_m_select_info.html\">MSelectInfo</a> &amp;selectInfo,</div>\n\
<div class=\"line\">                                    <a class=\"code\" href=\"#!/url=./cpp_ref/class_m_selection_list.html\">MSelectionList</a> &amp;selectionList,</div>\n\
<div class=\"line\">                                    <a class=\"code\" href=\"#!/url=./cpp_ref/class_m_point_array.html\">MPointArray</a> &amp;worldSpaceSelectPts ) <span class=\"keyword\">const</span>;</div>\n\
<div class=\"line\"></div>\n\
<div class=\"line\">    <span class=\"keyword\">static</span>  <span class=\"keywordtype\">void</span> *      creator();</div>\n\
<div class=\"line\"></div>\n\
<div class=\"line\"><span class=\"keyword\">private</span>:</div>\n\
<div class=\"line\">    <span class=\"keywordtype\">void</span> drawUVWireframe( apiMeshGeom *, <a class=\"code\" href=\"#!/url=./cpp_ref/class_m3d_view.html\">M3dView</a> &amp;, </div>\n\
<div class=\"line\">                          <span class=\"keyword\">const</span> <a class=\"code\" href=\"#!/url=./cpp_ref/class_m_texture_editor_draw_info.html\">MTextureEditorDrawInfo</a> &amp;info ) <span class=\"keyword\">const</span>;</div>\n\
<div class=\"line\">    <span class=\"keywordtype\">void</span> drawUVMapCoord( <a class=\"code\" href=\"#!/url=./cpp_ref/class_m3d_view.html\">M3dView</a> &amp;, <span class=\"keywordtype\">int</span> uv, <span class=\"keywordtype\">float</span> u, <span class=\"keywordtype\">float</span> v, <span class=\"keywordtype\">bool</span> ) <span class=\"keyword\">const</span>;</div>\n\
<div class=\"line\">    <span class=\"keywordtype\">void</span> drawUVMapCoordNum( apiMeshGeom *, <a class=\"code\" href=\"#!/url=./cpp_ref/class_m3d_view.html\">M3dView</a> &amp;, </div>\n\
<div class=\"line\">                            <span class=\"keyword\">const</span> <a class=\"code\" href=\"#!/url=./cpp_ref/class_m_texture_editor_draw_info.html\">MTextureEditorDrawInfo</a> &amp;info, <span class=\"keywordtype\">bool</span> ) <span class=\"keyword\">const</span>;</div>\n\
<div class=\"line\">        </div>\n\
<div class=\"line\">    <span class=\"comment\">// Draw Tokens</span></div>\n\
<div class=\"line\">    <span class=\"comment\">//</span></div>\n\
<div class=\"line\">    <span class=\"keyword\">enum</span> {</div>\n\
<div class=\"line\">        kDrawVertices, <span class=\"comment\">// component token</span></div>\n\
<div class=\"line\">        kDrawWireframe,</div>\n\
<div class=\"line\">        kDrawWireframeOnShaded,</div>\n\
<div class=\"line\">        kDrawSmoothShaded,</div>\n\
<div class=\"line\">        kDrawFlatShaded,</div>\n\
<div class=\"line\">        kDrawBoundingBox,</div>\n\
<div class=\"line\">        kDrawRedPointAtCenter,  <span class=\"comment\">// for userInteraction example code</span></div>\n\
<div class=\"line\">        kLastToken</div>\n\
<div class=\"line\">    };</div>\n\
<div class=\"line\">};</div>\n\
</div><!-- fragment --> </div><!-- contents -->\n\
</div><!-- doc-content -->\n\
<!-- start footer part -->\n\
\n\
      <div class=\"footer-block\"><a href=\"../html/ac.cmtdialog.htm\" class=\"comments-anchor\" target=\"_blank\"><span class=\"comments-link\">Please send us your comment about this page</span></a></div></div>\n\
   </div></body>\n\
</html>\n\
";