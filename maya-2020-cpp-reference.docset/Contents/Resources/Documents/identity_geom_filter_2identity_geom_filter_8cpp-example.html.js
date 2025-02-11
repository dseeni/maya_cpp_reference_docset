var topic = "<!-- saved from url=(0024)http://docs.autodesk.com -->\n\
<html>\n\
   <head><script src=\"../scripts/yepnope.1.5.4-min.js\" type=\"text/javascript\"></script><script src=\"../scripts/lib/jquery-1.11.1.min.js\" type=\"text/javascript\"></script>\n\
      <title>C++ API Reference: identityGeomFilter/identityGeomFilter.cpp</title>\n\
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
    cpp_ref_adsk_ref_toc.initNavTree(\'identity_geom_filter_2identity_geom_filter_8cpp-example.html\', tocPrefix);\n\
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
            <h1>C++ API Reference: identityGeomFilter/identityGeomFilter.cpp</h1>\n\
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
<div class=\"title\">identityGeomFilter/identityGeomFilter.cpp</div>  </div>\n\
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
<div class=\"line\"><span class=\"comment\">//  File: identityGeomFilter.cpp</span></div>\n\
<div class=\"line\"><span class=\"comment\">//</span></div>\n\
<div class=\"line\"><span class=\"comment\">//  Description:</span></div>\n\
<div class=\"line\"><span class=\"comment\">//      Empty implementation of a deformer. This node</span></div>\n\
<div class=\"line\"><span class=\"comment\">//      performs no deformation and is basically an empty</span></div>\n\
<div class=\"line\"><span class=\"comment\">//      shell that can be used to create actual deformers.</span></div>\n\
<div class=\"line\"><span class=\"comment\">//</span></div>\n\
<div class=\"line\"><span class=\"comment\">//</span></div>\n\
<div class=\"line\"><span class=\"comment\">//      Use this script to create a simple example with the identity node.</span></div>\n\
<div class=\"line\"><span class=\"comment\">//      </span></div>\n\
<div class=\"line\"><span class=\"comment\">//      loadPlugin identityGeomFilter;</span></div>\n\
<div class=\"line\"><span class=\"comment\">//      </span></div>\n\
<div class=\"line\"><span class=\"comment\">//      polyTorus -r 1 -sr 0.5 -tw 0 -sx 50 -sy 50 -ax 0 1 0 -cuv 1 -ch 1;</span></div>\n\
<div class=\"line\"><span class=\"comment\">//      deformer -type &quot;identityGeomFilter&quot;;</span></div>\n\
<div class=\"line\"><span class=\"comment\">//      select -cl;</span></div>\n\
<div class=\"line\"></div>\n\
<div class=\"line\"><span class=\"preprocessor\">#include &lt;maya/MFnPlugin.h&gt;</span></div>\n\
<div class=\"line\"><span class=\"preprocessor\">#include &lt;maya/MTypeId.h&gt;</span> </div>\n\
<div class=\"line\"></div>\n\
<div class=\"line\"><span class=\"preprocessor\">#include &lt;maya/MStringArray.h&gt;</span></div>\n\
<div class=\"line\"></div>\n\
<div class=\"line\"><span class=\"preprocessor\">#include &lt;maya/MPxGeometryFilter.h&gt;</span> </div>\n\
<div class=\"line\"><span class=\"preprocessor\">#include &lt;maya/MItGeometry.h&gt;</span></div>\n\
<div class=\"line\"><span class=\"preprocessor\">#include &lt;maya/MPoint.h&gt;</span></div>\n\
<div class=\"line\"></div>\n\
<div class=\"line\"></div>\n\
<div class=\"line\"><span class=\"keyword\">class </span>identityGeomFilter : <span class=\"keyword\">public</span> <a name=\"_a0\"></a><a class=\"code\" href=\"#!/url=./cpp_ref/class_m_px_geometry_filter.html\">MPxGeometryFilter</a></div>\n\
<div class=\"line\">{</div>\n\
<div class=\"line\"><span class=\"keyword\">public</span>:</div>\n\
<div class=\"line\">    <span class=\"keyword\">static</span>  <span class=\"keywordtype\">void</span>*   creator();</div>\n\
<div class=\"line\">    <span class=\"keyword\">static</span>  <a name=\"_a1\"></a><a class=\"code\" href=\"#!/url=./cpp_ref/class_m_status.html\">MStatus</a> initialize();</div>\n\
<div class=\"line\"></div>\n\
<div class=\"line\">    <span class=\"comment\">// Deformation function</span></div>\n\
<div class=\"line\">    <span class=\"comment\">//</span></div>\n\
<div class=\"line\">    <a class=\"code\" href=\"#!/url=./cpp_ref/class_m_status.html\">MStatus</a> <a name=\"a2\"></a><a class=\"code\" href=\"#!/url=./cpp_ref/class_m_px_geometry_filter.html#a30d9732c7497ec1c8c7e431eaa5d61b6\">deform</a>(<a name=\"_a3\"></a><a class=\"code\" href=\"#!/url=./cpp_ref/class_m_data_block.html\">MDataBlock</a>&amp;    block,</div>\n\
<div class=\"line\">                           <a name=\"_a4\"></a><a class=\"code\" href=\"#!/url=./cpp_ref/class_m_it_geometry.html\">MItGeometry</a>&amp;   iter,</div>\n\
<div class=\"line\">                           <span class=\"keyword\">const</span> <a name=\"_a5\"></a><a class=\"code\" href=\"#!/url=./cpp_ref/class_m_matrix.html\">MMatrix</a>&amp; mat,</div>\n\
<div class=\"line\">                           <span class=\"keywordtype\">unsigned</span> <span class=\"keywordtype\">int</span> multiIndex) <span class=\"keyword\">override</span>;</div>\n\
<div class=\"line\"></div>\n\
<div class=\"line\">    <span class=\"keyword\">static</span> <span class=\"keyword\">const</span> <a name=\"_a6\"></a><a class=\"code\" href=\"#!/url=./cpp_ref/class_m_type_id.html\">MTypeId</a> id;</div>\n\
<div class=\"line\">};</div>\n\
<div class=\"line\"></div>\n\
<div class=\"line\"><span class=\"keyword\">const</span> <a class=\"code\" href=\"#!/url=./cpp_ref/class_m_type_id.html\">MTypeId</a> identityGeomFilter::id( 0x0008002F );</div>\n\
<div class=\"line\"></div>\n\
<div class=\"line\"></div>\n\
<div class=\"line\"><span class=\"keywordtype\">void</span>* identityGeomFilter::creator()</div>\n\
<div class=\"line\">{</div>\n\
<div class=\"line\">    <span class=\"keywordflow\">return</span> <span class=\"keyword\">new</span> identityGeomFilter();</div>\n\
<div class=\"line\">}</div>\n\
<div class=\"line\"></div>\n\
<div class=\"line\"><a class=\"code\" href=\"#!/url=./cpp_ref/class_m_status.html\">MStatus</a> identityGeomFilter::initialize()</div>\n\
<div class=\"line\">{</div>\n\
<div class=\"line\">    <span class=\"keywordflow\">return</span> <a name=\"a7\"></a><a class=\"code\" href=\"#!/url=./cpp_ref/class_m_status.html#a02ab596f4febca68da503aaf8dde3a80af0536797208144380691e2b376ffc1d1\">MStatus::kSuccess</a>;</div>\n\
<div class=\"line\">}</div>\n\
<div class=\"line\"></div>\n\
<div class=\"line\"></div>\n\
<div class=\"line\"><a class=\"code\" href=\"#!/url=./cpp_ref/class_m_status.html\">MStatus</a></div>\n\
<div class=\"line\">identityGeomFilter::deform( <a class=\"code\" href=\"#!/url=./cpp_ref/class_m_data_block.html\">MDataBlock</a>&amp; block,</div>\n\
<div class=\"line\">                      <a class=\"code\" href=\"#!/url=./cpp_ref/class_m_it_geometry.html\">MItGeometry</a>&amp; iter,</div>\n\
<div class=\"line\">                      <span class=\"keyword\">const</span> <a class=\"code\" href=\"#!/url=./cpp_ref/class_m_matrix.html\">MMatrix</a>&amp; <span class=\"comment\">/*m*/</span>,</div>\n\
<div class=\"line\">                      <span class=\"keywordtype\">unsigned</span> <span class=\"keywordtype\">int</span> multiIndex)</div>\n\
<div class=\"line\"><span class=\"comment\">//</span></div>\n\
<div class=\"line\"><span class=\"comment\">// Method: deform</span></div>\n\
<div class=\"line\"><span class=\"comment\">//</span></div>\n\
<div class=\"line\"><span class=\"comment\">// Description:   &quot;Deforms&quot; the point with an identity transformation</span></div>\n\
<div class=\"line\"><span class=\"comment\">//</span></div>\n\
<div class=\"line\"><span class=\"comment\">// Arguments:</span></div>\n\
<div class=\"line\"><span class=\"comment\">//   block      : the datablock of the node</span></div>\n\
<div class=\"line\"><span class=\"comment\">//   iter       : an iterator for the geometry to be deformed</span></div>\n\
<div class=\"line\"><span class=\"comment\">//   m          : matrix to transform the point into world space</span></div>\n\
<div class=\"line\"><span class=\"comment\">//   multiIndex : the index of the geometry that we are deforming</span></div>\n\
<div class=\"line\"><span class=\"comment\">//</span></div>\n\
<div class=\"line\"><span class=\"comment\">//</span></div>\n\
<div class=\"line\">{</div>\n\
<div class=\"line\">    <a class=\"code\" href=\"#!/url=./cpp_ref/class_m_status.html\">MStatus</a> returnStatus;</div>\n\
<div class=\"line\"></div>\n\
<div class=\"line\">    <span class=\"comment\">// float env = block.inputValue( envelope ).asFloat();</span></div>\n\
<div class=\"line\">    </div>\n\
<div class=\"line\">    <span class=\"comment\">// Iterate through each point in the geometry.</span></div>\n\
<div class=\"line\">    <span class=\"comment\">//</span></div>\n\
<div class=\"line\">    <span class=\"keywordflow\">for</span> ( ; !iter.<a name=\"a8\"></a><a class=\"code\" href=\"#!/url=./cpp_ref/class_m_it_geometry.html#a8b6dbf6fbab6f4e7bf50a309124cbf4c\">isDone</a>(); iter.<a name=\"a9\"></a><a class=\"code\" href=\"#!/url=./cpp_ref/class_m_it_geometry.html#a73616f002814b8abe6d921db72d7a496\">next</a>()) {</div>\n\
<div class=\"line\">        <a name=\"_a10\"></a><a class=\"code\" href=\"#!/url=./cpp_ref/class_m_point.html\">MPoint</a> pt = iter.<a name=\"a11\"></a><a class=\"code\" href=\"#!/url=./cpp_ref/class_m_it_geometry.html#a5880c110ed81dd4da0289ccdca5c1592\">position</a>();</div>\n\
<div class=\"line\">        </div>\n\
<div class=\"line\">        <span class=\"comment\">// Perform some calculation on pt.</span></div>\n\
<div class=\"line\">        <span class=\"comment\">// e.g.</span></div>\n\
<div class=\"line\">        <span class=\"comment\">// pt.x += 1.0 * env;</span></div>\n\
<div class=\"line\">        </div>\n\
<div class=\"line\">        <span class=\"comment\">// Set the final position.</span></div>\n\
<div class=\"line\">        iter.<a name=\"a12\"></a><a class=\"code\" href=\"#!/url=./cpp_ref/class_m_it_geometry.html#aab29469f67fee14833472410a17de18f\">setPosition</a>(pt);</div>\n\
<div class=\"line\">    }</div>\n\
<div class=\"line\">    <span class=\"keywordflow\">return</span> returnStatus;</div>\n\
<div class=\"line\">}</div>\n\
<div class=\"line\"></div>\n\
<div class=\"line\"></div>\n\
<div class=\"line\"><span class=\"comment\">// standard initialization procedures</span></div>\n\
<div class=\"line\"><span class=\"comment\">//</span></div>\n\
<div class=\"line\"></div>\n\
<div class=\"line\"><a class=\"code\" href=\"#!/url=./cpp_ref/class_m_status.html\">MStatus</a> initializePlugin( <a name=\"_a13\"></a><a class=\"code\" href=\"#!/url=./cpp_ref/class_m_object.html\">MObject</a> obj )</div>\n\
<div class=\"line\">{</div>\n\
<div class=\"line\">    <a class=\"code\" href=\"#!/url=./cpp_ref/class_m_status.html\">MStatus</a> result;</div>\n\
<div class=\"line\"></div>\n\
<div class=\"line\">    <a name=\"_a14\"></a><a class=\"code\" href=\"#!/url=./cpp_ref/class_m_fn_plugin.html\">MFnPlugin</a> plugin( obj, PLUGIN_COMPANY, <span class=\"stringliteral\">&quot;3.0&quot;</span>, <span class=\"stringliteral\">&quot;Any&quot;</span>);</div>\n\
<div class=\"line\">    result = plugin.registerNode(</div>\n\
<div class=\"line\">        <span class=\"stringliteral\">&quot;identityGeomFilter&quot;</span> ,</div>\n\
<div class=\"line\">        identityGeomFilter::id ,</div>\n\
<div class=\"line\">        &amp;identityGeomFilter::creator ,</div>\n\
<div class=\"line\">        &amp;identityGeomFilter::initialize ,</div>\n\
<div class=\"line\">        MPxNode::kGeometryFilter</div>\n\
<div class=\"line\">        );</div>\n\
<div class=\"line\"></div>\n\
<div class=\"line\">    <span class=\"keywordflow\">return</span> result;</div>\n\
<div class=\"line\">}</div>\n\
<div class=\"line\"></div>\n\
<div class=\"line\"><a class=\"code\" href=\"#!/url=./cpp_ref/class_m_status.html\">MStatus</a> uninitializePlugin( <a class=\"code\" href=\"#!/url=./cpp_ref/class_m_object.html\">MObject</a> obj )</div>\n\
<div class=\"line\">{</div>\n\
<div class=\"line\">    <a class=\"code\" href=\"#!/url=./cpp_ref/class_m_status.html\">MStatus</a> result;</div>\n\
<div class=\"line\"></div>\n\
<div class=\"line\">    <a class=\"code\" href=\"#!/url=./cpp_ref/class_m_fn_plugin.html\">MFnPlugin</a> plugin( obj );</div>\n\
<div class=\"line\">    result = plugin.deregisterNode( identityGeomFilter::id );</div>\n\
<div class=\"line\"></div>\n\
<div class=\"line\">    <span class=\"keywordflow\">return</span> result;</div>\n\
<div class=\"line\">}</div>\n\
</div><!-- fragment --> </div><!-- contents -->\n\
</div><!-- doc-content -->\n\
<!-- start footer part -->\n\
\n\
      <div class=\"footer-block\"><a href=\"../html/ac.cmtdialog.htm\" class=\"comments-anchor\" target=\"_blank\"><span class=\"comments-link\">Please send us your comment about this page</span></a></div></div>\n\
   </div></body>\n\
</html>\n\
";