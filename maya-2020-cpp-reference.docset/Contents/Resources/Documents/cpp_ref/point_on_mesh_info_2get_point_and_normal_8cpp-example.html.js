var topic = "<!-- saved from url=(0024)http://docs.autodesk.com -->\n\
<html>\n\
   <head><script src=\"../scripts/yepnope.1.5.4-min.js\" type=\"text/javascript\"></script><script src=\"../scripts/lib/jquery-1.11.1.min.js\" type=\"text/javascript\"></script>\n\
      <title>C++ API Reference: pointOnMeshInfo/getPointAndNormal.cpp</title>\n\
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
    cpp_ref_adsk_ref_toc.initNavTree(\'point_on_mesh_info_2get_point_and_normal_8cpp-example.html\', tocPrefix);\n\
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
            <h1>C++ API Reference: pointOnMeshInfo/getPointAndNormal.cpp</h1>\n\
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
<div class=\"title\">pointOnMeshInfo/getPointAndNormal.cpp</div>  </div>\n\
</div><!--header-->\n\
<div class=\"contents\">\n\
<div class=\"fragment\"><div class=\"line\"><span class=\"comment\">//-</span></div>\n\
<div class=\"line\"><span class=\"comment\">// ==========================================================================</span></div>\n\
<div class=\"line\"><span class=\"comment\">// Copyright 1995,2006,2008 Autodesk, Inc. All rights reserved.</span></div>\n\
<div class=\"line\"><span class=\"comment\">//</span></div>\n\
<div class=\"line\"><span class=\"comment\">// Use of this software is subject to the terms of the Autodesk</span></div>\n\
<div class=\"line\"><span class=\"comment\">// license agreement provided at the time of installation or download,</span></div>\n\
<div class=\"line\"><span class=\"comment\">// or which otherwise accompanies this software in either electronic</span></div>\n\
<div class=\"line\"><span class=\"comment\">// or hard copy form.</span></div>\n\
<div class=\"line\"><span class=\"comment\">// ==========================================================================</span></div>\n\
<div class=\"line\"><span class=\"comment\">//+</span></div>\n\
<div class=\"line\"></div>\n\
<div class=\"line\"><span class=\"comment\">// DISCLAIMER: THIS PLUGIN IS PROVIDED AS IS.  IT IS NOT SUPPORTED BY</span></div>\n\
<div class=\"line\"></div>\n\
<div class=\"line\"><span class=\"comment\">//            AUTODESK, SO PLEASE USE AND MODIFY AT YOUR OWN RISK.</span></div>\n\
<div class=\"line\"></div>\n\
<div class=\"line\"><span class=\"comment\">//</span></div>\n\
<div class=\"line\"></div>\n\
<div class=\"line\"><span class=\"comment\">// PLUGIN NAME: pointOnMeshInfo v1.0</span></div>\n\
<div class=\"line\"></div>\n\
<div class=\"line\"><span class=\"comment\">// FILE: getPointAndNormal.cpp</span></div>\n\
<div class=\"line\"></div>\n\
<div class=\"line\"><span class=\"comment\">// DESCRIPTION: - Utility function definition that is used by both the command and node.</span></div>\n\
<div class=\"line\"></div>\n\
<div class=\"line\"><span class=\"comment\">// AUTHOR: QT</span></div>\n\
<div class=\"line\"></div>\n\
<div class=\"line\"><span class=\"comment\">// REFERENCES: - This plug-in is based on the `pointOnSurface` MEL command and &quot;pointOnSurfaceInfo&quot; node.</span></div>\n\
<div class=\"line\"></div>\n\
<div class=\"line\"><span class=\"comment\">//             - The pointOnSubdNode.cpp plug-in example from the Maya Developer Kit was also used for reference.</span></div>\n\
<div class=\"line\"></div>\n\
<div class=\"line\"><span class=\"comment\">// LAST UPDATED: Oct. 11th, 2001.</span></div>\n\
<div class=\"line\"></div>\n\
<div class=\"line\"><span class=\"comment\">// COMPILED AND TESTED ON: Maya 4.0 on Windows</span></div>\n\
<div class=\"line\"></div>\n\
<div class=\"line\"></div>\n\
<div class=\"line\"><span class=\"comment\">// HEADER FILE:</span></div>\n\
<div class=\"line\"></div>\n\
<div class=\"line\"><span class=\"preprocessor\">#include &quot;getPointAndNormal.h&quot;</span></div>\n\
<div class=\"line\"></div>\n\
<div class=\"line\"></div>\n\
<div class=\"line\"><span class=\"comment\">// FUNCTION THAT FINDS THE POINT AND NORMAL OF A POLY AT A SPECIFIED FACE UV COORD ABOUT A SPECIFIED FACE:</span></div>\n\
<div class=\"line\"></div>\n\
<div class=\"line\"><span class=\"keywordtype\">void</span> getPointAndNormal(<a name=\"_a0\"></a><a class=\"code\" href=\"#!/url=./cpp_ref/class_m_dag_path.html\">MDagPath</a> meshDagPath, <span class=\"keywordtype\">int</span> faceIndex, <span class=\"keywordtype\">bool</span> relative, <span class=\"keywordtype\">double</span> parameterU, <span class=\"keywordtype\">double</span> parameterV, <a name=\"_a1\"></a><a class=\"code\" href=\"#!/url=./cpp_ref/class_m_point.html\">MPoint</a> &amp;point, <a name=\"_a2\"></a><a class=\"code\" href=\"#!/url=./cpp_ref/class_m_vector.html\">MVector</a> &amp;normal, <a name=\"_a3\"></a><a class=\"code\" href=\"#!/url=./cpp_ref/class_m_object.html\">MObject</a> theMesh)</div>\n\
<div class=\"line\"></div>\n\
<div class=\"line\">{</div>\n\
<div class=\"line\"></div>\n\
<div class=\"line\">   <span class=\"comment\">// CREATE FACE ITERATOR, AND SET ITS INDEX TO THAT OF THE SPECIFIED FACE:</span></div>\n\
<div class=\"line\"></div>\n\
<div class=\"line\">   <a name=\"_a4\"></a><a class=\"code\" href=\"#!/url=./cpp_ref/class_m_it_mesh_polygon.html\">MItMeshPolygon</a> faceIter(meshDagPath);</div>\n\
<div class=\"line\"></div>\n\
<div class=\"line\">   <span class=\"keywordflow\">if</span> (theMesh!=<a name=\"a5\"></a><a class=\"code\" href=\"#!/url=./cpp_ref/class_m_object.html#af2a707b4254eb54763167aeced863e63\">MObject::kNullObj</a>)</div>\n\
<div class=\"line\"></div>\n\
<div class=\"line\">      faceIter.<a name=\"a6\"></a><a class=\"code\" href=\"#!/url=./cpp_ref/class_m_it_mesh_polygon.html#ac734f26ff1c92ecec3572a31f5e4435c\">reset</a>(theMesh);</div>\n\
<div class=\"line\"></div>\n\
<div class=\"line\">   <span class=\"keywordtype\">int</span> dummyIndex;</div>\n\
<div class=\"line\"></div>\n\
<div class=\"line\">   faceIter.<a name=\"a7\"></a><a class=\"code\" href=\"#!/url=./cpp_ref/class_m_it_mesh_polygon.html#ad5a99e6a898a892d2fefd83eefee22d3\">setIndex</a>(faceIndex, dummyIndex);</div>\n\
<div class=\"line\"></div>\n\
<div class=\"line\"></div>\n\
<div class=\"line\"></div>\n\
<div class=\"line\">   <span class=\"comment\">// WHEN &quot;RELATIVE&quot; MODE IS SPECIFIED, CALCULATE THE *ABSOLUTE* UV&#39;S FROM THE SPECIFIED FACE AND &quot;RELATIVE&quot; UV&#39;S:</span></div>\n\
<div class=\"line\"></div>\n\
<div class=\"line\">   <span class=\"keywordtype\">float</span> u, v;</div>\n\
<div class=\"line\"></div>\n\
<div class=\"line\">   <span class=\"keywordflow\">if</span> (relative)</div>\n\
<div class=\"line\"></div>\n\
<div class=\"line\">   {</div>\n\
<div class=\"line\"></div>\n\
<div class=\"line\">      <a name=\"_a8\"></a><a class=\"code\" href=\"#!/url=./cpp_ref/class_m_float_array.html\">MFloatArray</a> uArray, vArray;</div>\n\
<div class=\"line\"></div>\n\
<div class=\"line\">      faceIter.<a name=\"a9\"></a><a class=\"code\" href=\"#!/url=./cpp_ref/class_m_it_mesh_polygon.html#aa41349e47d082451f1744cff85412159\">getUVs</a>(uArray, vArray);</div>\n\
<div class=\"line\"></div>\n\
<div class=\"line\">      <span class=\"keywordtype\">float</span> minU=999999, minV=999999, maxU=0, maxV=0;</div>\n\
<div class=\"line\"></div>\n\
<div class=\"line\">      <span class=\"keywordflow\">for</span> (<span class=\"keywordtype\">unsigned</span> i=0; i&lt;uArray.<a name=\"a10\"></a><a class=\"code\" href=\"#!/url=./cpp_ref/class_m_float_array.html#a580388f31f60c46fac867ca48a48da1e\">length</a>(); i++)</div>\n\
<div class=\"line\"></div>\n\
<div class=\"line\">      {</div>\n\
<div class=\"line\"></div>\n\
<div class=\"line\">         minU = (uArray[i] &lt; minU) ? uArray[i] : minU;</div>\n\
<div class=\"line\"></div>\n\
<div class=\"line\">         minV = (vArray[i] &lt; minV) ? vArray[i] : minV;</div>\n\
<div class=\"line\"></div>\n\
<div class=\"line\">         maxU = (uArray[i] &gt; maxU) ? uArray[i] : maxU;</div>\n\
<div class=\"line\"></div>\n\
<div class=\"line\">         maxV = (vArray[i] &gt; maxV) ? vArray[i] : maxV;</div>\n\
<div class=\"line\"></div>\n\
<div class=\"line\">      }</div>\n\
<div class=\"line\"></div>\n\
<div class=\"line\">      u = minU + (float)parameterU * (maxU - minU);</div>\n\
<div class=\"line\"></div>\n\
<div class=\"line\">      v = minV + (float)parameterV * (maxV - minV);</div>\n\
<div class=\"line\"></div>\n\
<div class=\"line\">   }</div>\n\
<div class=\"line\"></div>\n\
<div class=\"line\">   <span class=\"comment\">// OTHERWISE, JUST TAKE THE ABSOLUTE UV&#39;S TO BE THE ONES SPECIFIED:</span></div>\n\
<div class=\"line\"></div>\n\
<div class=\"line\">   <span class=\"keywordflow\">else</span></div>\n\
<div class=\"line\"></div>\n\
<div class=\"line\">   {</div>\n\
<div class=\"line\"></div>\n\
<div class=\"line\">      u = (float)parameterU;</div>\n\
<div class=\"line\"></div>\n\
<div class=\"line\">      v = (float)parameterV;</div>\n\
<div class=\"line\"></div>\n\
<div class=\"line\">   }</div>\n\
<div class=\"line\"></div>\n\
<div class=\"line\"></div>\n\
<div class=\"line\"></div>\n\
<div class=\"line\">   <span class=\"comment\">// FIND THE WORLDSPACE COORDINATE AT THE SPECIFIED UV:</span></div>\n\
<div class=\"line\"></div>\n\
<div class=\"line\">   float2 UV;</div>\n\
<div class=\"line\"></div>\n\
<div class=\"line\">   UV[0] = u;</div>\n\
<div class=\"line\"></div>\n\
<div class=\"line\">   UV[1] = v;</div>\n\
<div class=\"line\"></div>\n\
<div class=\"line\">   faceIter.<a name=\"a11\"></a><a class=\"code\" href=\"#!/url=./cpp_ref/class_m_it_mesh_polygon.html#a59fc52cc22e2ac5ad7f3e0355af0df98\">getPointAtUV</a>(point, UV, MSpace::kWorld);</div>\n\
<div class=\"line\"></div>\n\
<div class=\"line\"></div>\n\
<div class=\"line\"></div>\n\
<div class=\"line\">   <span class=\"comment\">// FIND THE NORMAL AT THE SPECIFIED UV:</span></div>\n\
<div class=\"line\"></div>\n\
<div class=\"line\">   <a name=\"_a12\"></a><a class=\"code\" href=\"#!/url=./cpp_ref/class_m_fn_mesh.html\">MFnMesh</a> meshFn(meshDagPath);</div>\n\
<div class=\"line\"></div>\n\
<div class=\"line\">   <span class=\"keywordflow\">if</span> (theMesh!=<a class=\"code\" href=\"#!/url=./cpp_ref/class_m_object.html#af2a707b4254eb54763167aeced863e63\">MObject::kNullObj</a>)</div>\n\
<div class=\"line\"></div>\n\
<div class=\"line\">      meshFn.<a name=\"a13\"></a><a class=\"code\" href=\"#!/url=./cpp_ref/class_m_fn_dag_node.html#a6b2301b53683a8e8f56dd0b9cb088b0f\">setObject</a>(theMesh);</div>\n\
<div class=\"line\"></div>\n\
<div class=\"line\">   meshFn.<a name=\"a14\"></a><a class=\"code\" href=\"#!/url=./cpp_ref/class_m_fn_mesh.html#a5d70e4aa5fd6a04874fb17d3ab1ef2d3\">getClosestNormal</a>(point, normal, MSpace::kWorld);</div>\n\
<div class=\"line\"></div>\n\
<div class=\"line\">}</div>\n\
<div class=\"line\"></div>\n\
</div><!-- fragment --> </div><!-- contents -->\n\
</div><!-- doc-content -->\n\
<!-- start footer part -->\n\
\n\
      <div class=\"footer-block\"><a href=\"../html/ac.cmtdialog.htm\" class=\"comments-anchor\" target=\"_blank\"><span class=\"comments-link\">Please send us your comment about this page</span></a></div></div>\n\
   </div></body>\n\
</html>\n\
";