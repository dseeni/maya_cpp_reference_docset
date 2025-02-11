var topic = "<!-- saved from url=(0024)http://docs.autodesk.com -->\n\
<html>\n\
   <head><script src=\"../scripts/yepnope.1.5.4-min.js\" type=\"text/javascript\"></script><script src=\"../scripts/lib/jquery-1.11.1.min.js\" type=\"text/javascript\"></script>\n\
      <title>C++ API Reference: gpuCache/gpuCacheSelect.h</title>\n\
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
    cpp_ref_adsk_ref_toc.initNavTree(\'gpu_cache_2gpu_cache_select_8h-example.html\', tocPrefix);\n\
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
            <h1>C++ API Reference: gpuCache/gpuCacheSelect.h</h1>\n\
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
<div class=\"title\">gpuCache/gpuCacheSelect.h</div>  </div>\n\
</div><!--header-->\n\
<div class=\"contents\">\n\
<div class=\"fragment\"><div class=\"line\"><span class=\"preprocessor\">#ifndef _gpuCacheSelect_h_</span></div>\n\
<div class=\"line\"><span class=\"preprocessor\">#define _gpuCacheSelect_h_</span></div>\n\
<div class=\"line\"></div>\n\
<div class=\"line\"><span class=\"comment\">//-</span></div>\n\
<div class=\"line\"><span class=\"comment\">//**************************************************************************/</span></div>\n\
<div class=\"line\"><span class=\"comment\">// Copyright 2015 Autodesk, Inc.  All rights reserved.</span></div>\n\
<div class=\"line\"><span class=\"comment\">//</span></div>\n\
<div class=\"line\"><span class=\"comment\">// Use of this software is subject to the terms of the Autodesk </span></div>\n\
<div class=\"line\"><span class=\"comment\">// license agreement provided at the time of installation or download, </span></div>\n\
<div class=\"line\"><span class=\"comment\">// or which otherwise accompanies this software in either electronic </span></div>\n\
<div class=\"line\"><span class=\"comment\">// or hard copy form.</span></div>\n\
<div class=\"line\"><span class=\"comment\">//**************************************************************************/</span></div>\n\
<div class=\"line\"><span class=\"comment\">//+</span></div>\n\
<div class=\"line\"></div>\n\
<div class=\"line\"><span class=\"preprocessor\">#include &quot;gpuCacheGeometry.h&quot;</span></div>\n\
<div class=\"line\"><span class=\"preprocessor\">#include &quot;gpuCacheVBOProxy.h&quot;</span></div>\n\
<div class=\"line\"></div>\n\
<div class=\"line\"><span class=\"keyword\">namespace </span>GPUCache {</div>\n\
<div class=\"line\"></div>\n\
<div class=\"line\"><span class=\"comment\">/*==============================================================================</span></div>\n\
<div class=\"line\"><span class=\"comment\"> * CLASS Select</span></div>\n\
<div class=\"line\"><span class=\"comment\"> *============================================================================*/</span></div>\n\
<div class=\"line\"></div>\n\
<div class=\"line\"><span class=\"comment\">// Abstract API for selecting geometry.</span></div>\n\
<div class=\"line\"><span class=\"keyword\">class </span>Select </div>\n\
<div class=\"line\">{</div>\n\
<div class=\"line\"><span class=\"keyword\">public</span>:</div>\n\
<div class=\"line\">    <span class=\"keyword\">typedef</span> <span class=\"keywordtype\">unsigned</span> <span class=\"keywordtype\">int</span> index_t;</div>\n\
<div class=\"line\"></div>\n\
<div class=\"line\">    <span class=\"keyword\">virtual</span> ~Select();</div>\n\
<div class=\"line\"></div>\n\
<div class=\"line\">    <span class=\"comment\">// Process edges to determine if they fall within the selection</span></div>\n\
<div class=\"line\">    <span class=\"comment\">// region.</span></div>\n\
<div class=\"line\">    <span class=\"keyword\">virtual</span> <span class=\"keywordtype\">void</span> processEdges(<span class=\"keyword\">const</span> SubNode::Ptr rootNode,</div>\n\
<div class=\"line\">                              <span class=\"keywordtype\">double</span> seconds,</div>\n\
<div class=\"line\">                              <span class=\"keywordtype\">size_t</span> numWires,</div>\n\
<div class=\"line\">                              VBOProxy::VBOMode vboMode) = 0;</div>\n\
<div class=\"line\"></div>\n\
<div class=\"line\">    <span class=\"comment\">// Process triangles to determine if they fall within the</span></div>\n\
<div class=\"line\">    <span class=\"comment\">// selection region.</span></div>\n\
<div class=\"line\">    <span class=\"keyword\">virtual</span> <span class=\"keywordtype\">void</span> processTriangles(<span class=\"keyword\">const</span> SubNode::Ptr rootNode,</div>\n\
<div class=\"line\">                                  <span class=\"keywordtype\">double</span> seconds,</div>\n\
<div class=\"line\">                                  <span class=\"keywordtype\">size_t</span> triangles,</div>\n\
<div class=\"line\">                                  VBOProxy::VBOMode vboMode) = 0;</div>\n\
<div class=\"line\"></div>\n\
<div class=\"line\">    <span class=\"comment\">// Process the bounding box to determine if it falls within the</span></div>\n\
<div class=\"line\">    <span class=\"comment\">// selection region.</span></div>\n\
<div class=\"line\">    <span class=\"keyword\">virtual</span> <span class=\"keywordtype\">void</span> processBoundingBox(<span class=\"keyword\">const</span> SubNode::Ptr rootNode,</div>\n\
<div class=\"line\">                                    <span class=\"keywordtype\">double</span> seconds) = 0;</div>\n\
<div class=\"line\"></div>\n\
<div class=\"line\">    <span class=\"comment\">// End rasterization selection mode.</span></div>\n\
<div class=\"line\">    <span class=\"comment\">// </span></div>\n\
<div class=\"line\">    <span class=\"comment\">// If a selection hit occurred, minZ() will be set to the depth of</span></div>\n\
<div class=\"line\">    <span class=\"comment\">// the closest selection hit in the range [0..1]. If no selection</span></div>\n\
<div class=\"line\">    <span class=\"comment\">// hit occurred, minZ() will be set to</span></div>\n\
<div class=\"line\">    <span class=\"comment\">// std::numeric_limits&lt;float&gt;::max();</span></div>\n\
<div class=\"line\">    <span class=\"keyword\">virtual</span> <span class=\"keywordtype\">void</span> end() = 0;</div>\n\
<div class=\"line\"></div>\n\
<div class=\"line\">    <span class=\"comment\">// Returns whether any primitives actually falls within the</span></div>\n\
<div class=\"line\">    <span class=\"comment\">// selection region. The returned value is undefined if end() has</span></div>\n\
<div class=\"line\">    <span class=\"comment\">// never been called before.</span></div>\n\
<div class=\"line\">    <span class=\"keyword\">virtual</span> <span class=\"keywordtype\">bool</span> isSelected() <span class=\"keyword\">const</span> = 0;</div>\n\
<div class=\"line\"></div>\n\
<div class=\"line\">    <span class=\"comment\">// Returns minimum Z value. The returned value is undefined if</span></div>\n\
<div class=\"line\">    <span class=\"comment\">// end() has never been called before.</span></div>\n\
<div class=\"line\">    <span class=\"comment\">//</span></div>\n\
<div class=\"line\">    <span class=\"comment\">// If a selection hit occurred, minZ() will be set to the depth</span></div>\n\
<div class=\"line\">    <span class=\"comment\">// of the closest selection hit in the range [0..1]. If no</span></div>\n\
<div class=\"line\">    <span class=\"comment\">// selection hit occurred, minZ() will be set to</span></div>\n\
<div class=\"line\">    <span class=\"comment\">// std::numeric_limits&lt;float&gt;::max();</span></div>\n\
<div class=\"line\">    <span class=\"keyword\">virtual</span> <span class=\"keywordtype\">float</span> minZ() <span class=\"keyword\">const</span> = 0;</div>\n\
<div class=\"line\">};</div>\n\
<div class=\"line\"></div>\n\
<div class=\"line\">} <span class=\"comment\">// namespace GPUCache</span></div>\n\
<div class=\"line\"></div>\n\
<div class=\"line\"><span class=\"preprocessor\">#endif</span></div>\n\
</div><!-- fragment --> </div><!-- contents -->\n\
</div><!-- doc-content -->\n\
<!-- start footer part -->\n\
\n\
      <div class=\"footer-block\"><a href=\"../html/ac.cmtdialog.htm\" class=\"comments-anchor\" target=\"_blank\"><span class=\"comments-link\">Please send us your comment about this page</span></a></div></div>\n\
   </div></body>\n\
</html>\n\
";