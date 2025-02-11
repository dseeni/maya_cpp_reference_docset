var topic = "<!-- saved from url=(0024)http://docs.autodesk.com -->\n\
<html>\n\
   <head><script src=\"../scripts/yepnope.1.5.4-min.js\" type=\"text/javascript\"></script><script src=\"../scripts/lib/jquery-1.11.1.min.js\" type=\"text/javascript\"></script>\n\
      <title>C++ API Reference: simpleLoftNode/simpleLoftNode.cpp</title>\n\
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
    cpp_ref_adsk_ref_toc.initNavTree(\'simple_loft_node_2simple_loft_node_8cpp-example.html\', tocPrefix);\n\
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
            <h1>C++ API Reference: simpleLoftNode/simpleLoftNode.cpp</h1>\n\
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
<div class=\"title\">simpleLoftNode/simpleLoftNode.cpp</div>  </div>\n\
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
<div class=\"line\"><span class=\"comment\">// DESCRIPTION:</span></div>\n\
<div class=\"line\"><span class=\"comment\">// </span></div>\n\
<div class=\"line\"><span class=\"comment\">// Produces the dependency graph node &quot;userLoft&quot;.</span></div>\n\
<div class=\"line\"><span class=\"comment\">//</span></div>\n\
<div class=\"line\"><span class=\"comment\">// This plug-in demonstrates how to accept geometry as an input and create</span></div>\n\
<div class=\"line\"><span class=\"comment\">// geometry for output. A NURBS curve is input to the node and from it a NURBS</span></div>\n\
<div class=\"line\"><span class=\"comment\">// surface is created. The resulting geometry is passed to an internal Maya</span></div>\n\
<div class=\"line\"><span class=\"comment\">// node which displays it and allows it to be positioned.</span></div>\n\
<div class=\"line\"><span class=\"comment\">//</span></div>\n\
<div class=\"line\"><span class=\"comment\">// To use this node:</span></div>\n\
<div class=\"line\"><span class=\"comment\">//</span></div>\n\
<div class=\"line\"><span class=\"comment\">//  (1) First draw a curve in the X-Y plane.</span></div>\n\
<div class=\"line\"><span class=\"comment\">//  (2) Execute &quot;simpleLoftNode.mel&quot; that contains the following commands:</span></div>\n\
<div class=\"line\"><span class=\"comment\">//</span></div>\n\
<div class=\"line\"><span class=\"comment\">//      createNode transform -n simpleLoft1;</span></div>\n\
<div class=\"line\"><span class=\"comment\">//      createNode nurbsSurface -n simpleLoftShape1 -p simpleLoft1;</span></div>\n\
<div class=\"line\"><span class=\"comment\">//      createNode simpleLoft -n simpleLoftNode1;</span></div>\n\
<div class=\"line\"><span class=\"comment\">//      connectAttr curveShape1.local simpleLoftNode1.inputCurve;</span></div>\n\
<div class=\"line\"><span class=\"comment\">//      connectAttr simpleLoftNode1.outputSurface simpleLoftShape1.create;</span></div>\n\
<div class=\"line\"><span class=\"comment\">//</span></div>\n\
<div class=\"line\"><span class=\"comment\">//  This creates a nurbsSurface node and hooks the result into the world for display.</span></div>\n\
<div class=\"line\"><span class=\"comment\">//  It then creates a simpleLoft node, connects its input to curveShape1</span></div>\n\
<div class=\"line\"><span class=\"comment\">//  (the geometry from the first curve drawn), and connects its output to the NURBS</span></div>\n\
<div class=\"line\"><span class=\"comment\">//  surface node. </span></div>\n\
<div class=\"line\"><span class=\"comment\">//</span></div>\n\
<div class=\"line\"><span class=\"comment\">//  A surface will now appear on the screen.</span></div>\n\
<div class=\"line\"><span class=\"comment\">//  If the CVs of the original curve are selected and moved, the surface</span></div>\n\
<div class=\"line\"><span class=\"comment\">//  will be reconstructed to match. </span></div>\n\
<div class=\"line\"><span class=\"comment\">//</span></div>\n\
<div class=\"line\"><span class=\"comment\"></span></div>\n\
<div class=\"line\"><span class=\"preprocessor\">#include &lt;string.h&gt;</span></div>\n\
<div class=\"line\"><span class=\"preprocessor\">#include &lt;maya/MIOStream.h&gt;</span></div>\n\
<div class=\"line\"><span class=\"preprocessor\">#include &lt;math.h&gt;</span></div>\n\
<div class=\"line\"></div>\n\
<div class=\"line\"><span class=\"preprocessor\">#include &lt;maya/MPxNode.h&gt;</span></div>\n\
<div class=\"line\"><span class=\"preprocessor\">#include &lt;maya/MPxCommand.h&gt;</span></div>\n\
<div class=\"line\"></div>\n\
<div class=\"line\"><span class=\"preprocessor\">#include &lt;maya/MFnNumericAttribute.h&gt;</span></div>\n\
<div class=\"line\"><span class=\"preprocessor\">#include &lt;maya/MFnTypedAttribute.h&gt;</span></div>\n\
<div class=\"line\"><span class=\"preprocessor\">#include &lt;maya/MFnPlugin.h&gt;</span></div>\n\
<div class=\"line\"></div>\n\
<div class=\"line\"><span class=\"preprocessor\">#include &lt;maya/MFnNurbsCurve.h&gt;</span></div>\n\
<div class=\"line\"><span class=\"preprocessor\">#include &lt;maya/MFnNurbsSurface.h&gt;</span></div>\n\
<div class=\"line\"><span class=\"preprocessor\">#include &lt;maya/MFnNurbsCurveData.h&gt;</span></div>\n\
<div class=\"line\"><span class=\"preprocessor\">#include &lt;maya/MFnNurbsSurfaceData.h&gt;</span></div>\n\
<div class=\"line\"></div>\n\
<div class=\"line\"><span class=\"preprocessor\">#include &lt;maya/MPointArray.h&gt;</span></div>\n\
<div class=\"line\"><span class=\"preprocessor\">#include &lt;maya/MDoubleArray.h&gt;</span></div>\n\
<div class=\"line\"></div>\n\
<div class=\"line\"><span class=\"preprocessor\">#include &lt;maya/MString.h&gt;</span></div>\n\
<div class=\"line\"><span class=\"preprocessor\">#include &lt;maya/MTypeId.h&gt;</span></div>\n\
<div class=\"line\"><span class=\"preprocessor\">#include &lt;maya/MPlug.h&gt;</span></div>\n\
<div class=\"line\"><span class=\"preprocessor\">#include &lt;maya/MDataBlock.h&gt;</span></div>\n\
<div class=\"line\"><span class=\"preprocessor\">#include &lt;maya/MDataHandle.h&gt;</span></div>\n\
<div class=\"line\"></div>\n\
<div class=\"line\"><span class=\"preprocessor\">#include &lt;maya/MGlobal.h&gt;</span></div>\n\
<div class=\"line\"><span class=\"preprocessor\">#include &lt;maya/MItCurveCV.h&gt;</span></div>\n\
<div class=\"line\"><span class=\"preprocessor\">#include &lt;maya/MDagPath.h&gt;</span></div>\n\
<div class=\"line\"></div>\n\
<div class=\"line\"><span class=\"keyword\">class </span>simpleLoft : <span class=\"keyword\">public</span> <a name=\"_a0\"></a><a class=\"code\" href=\"#!/url=./cpp_ref/class_m_px_node.html\">MPxNode</a></div>\n\
<div class=\"line\">{</div>\n\
<div class=\"line\"><span class=\"keyword\">public</span>:</div>\n\
<div class=\"line\">                        simpleLoft() {};</div>\n\
<div class=\"line\">                    ~simpleLoft() <span class=\"keyword\">override</span>;</div>\n\
<div class=\"line\"></div>\n\
<div class=\"line\">    <a name=\"_a1\"></a><a class=\"code\" href=\"#!/url=./cpp_ref/class_m_status.html\">MStatus</a>     <a name=\"a2\"></a><a class=\"code\" href=\"#!/url=./cpp_ref/class_m_px_node.html#a6e1aa1e50774080d5aee55f20ffa5503\">compute</a>( <span class=\"keyword\">const</span> <a name=\"_a3\"></a><a class=\"code\" href=\"#!/url=./cpp_ref/class_m_plug.html\">MPlug</a>&amp; plug, <a name=\"_a4\"></a><a class=\"code\" href=\"#!/url=./cpp_ref/class_m_data_block.html\">MDataBlock</a>&amp; data ) <span class=\"keyword\">override</span>;</div>\n\
<div class=\"line\">    <a name=\"_a5\"></a><a class=\"code\" href=\"#!/url=./cpp_ref/class_m_object.html\">MObject</a>             loft( <a class=\"code\" href=\"#!/url=./cpp_ref/class_m_object.html\">MObject</a> &amp;curve, <a class=\"code\" href=\"#!/url=./cpp_ref/class_m_object.html\">MObject</a> &amp;surfFn, <a class=\"code\" href=\"#!/url=./cpp_ref/class_m_status.html\">MStatus</a> &amp;stat );</div>\n\
<div class=\"line\"></div>\n\
<div class=\"line\">    <span class=\"keyword\">static</span>  <span class=\"keywordtype\">void</span>*       creator();</div>\n\
<div class=\"line\">    <span class=\"keyword\">static</span>  <a class=\"code\" href=\"#!/url=./cpp_ref/class_m_status.html\">MStatus</a>     initialize();</div>\n\
<div class=\"line\"></div>\n\
<div class=\"line\"><span class=\"keyword\">public</span>:</div>\n\
<div class=\"line\">    <span class=\"keyword\">static</span>  <a class=\"code\" href=\"#!/url=./cpp_ref/class_m_object.html\">MObject</a>     inputCurve;     <span class=\"comment\">// The input curve.</span></div>\n\
<div class=\"line\">    <span class=\"keyword\">static</span>  <a class=\"code\" href=\"#!/url=./cpp_ref/class_m_object.html\">MObject</a>     outputSurface;  <span class=\"comment\">// The output curve.</span></div>\n\
<div class=\"line\">    <span class=\"keyword\">static</span>  <a name=\"_a6\"></a><a class=\"code\" href=\"#!/url=./cpp_ref/class_m_type_id.html\">MTypeId</a>     id;             <span class=\"comment\">// The IFF type id</span></div>\n\
<div class=\"line\">};</div>\n\
<div class=\"line\"></div>\n\
<div class=\"line\"><a class=\"code\" href=\"#!/url=./cpp_ref/class_m_type_id.html\">MTypeId</a>     simpleLoft::id( 0x80011 );</div>\n\
<div class=\"line\"><a class=\"code\" href=\"#!/url=./cpp_ref/class_m_object.html\">MObject</a>     simpleLoft::inputCurve;</div>\n\
<div class=\"line\"><a class=\"code\" href=\"#!/url=./cpp_ref/class_m_object.html\">MObject</a>     simpleLoft::outputSurface;</div>\n\
<div class=\"line\"></div>\n\
<div class=\"line\">simpleLoft::~simpleLoft() {}</div>\n\
<div class=\"line\"></div>\n\
<div class=\"line\"><span class=\"keywordtype\">void</span>* simpleLoft::creator()</div>\n\
<div class=\"line\">{</div>\n\
<div class=\"line\">    <span class=\"keywordflow\">return</span> <span class=\"keyword\">new</span> simpleLoft();</div>\n\
<div class=\"line\">}</div>\n\
<div class=\"line\"></div>\n\
<div class=\"line\"><a class=\"code\" href=\"#!/url=./cpp_ref/class_m_status.html\">MStatus</a> simpleLoft::initialize()</div>\n\
<div class=\"line\">{</div>\n\
<div class=\"line\">    <a name=\"_a7\"></a><a class=\"code\" href=\"#!/url=./cpp_ref/class_m_fn_typed_attribute.html\">MFnTypedAttribute</a>   typedAttr;</div>\n\
<div class=\"line\">    <a class=\"code\" href=\"#!/url=./cpp_ref/class_m_status.html\">MStatus</a>             stat;</div>\n\
<div class=\"line\"></div>\n\
<div class=\"line\">    inputCurve = typedAttr.<a name=\"a8\"></a><a class=\"code\" href=\"#!/url=./cpp_ref/class_m_fn_typed_attribute.html#af785af0a66bd4a4da1d9f7bd74d4de0a\">create</a>( <span class=\"stringliteral\">&quot;inputCurve&quot;</span>, <span class=\"stringliteral\">&quot;in&quot;</span>,</div>\n\
<div class=\"line\">                 MFnNurbsCurveData::kNurbsCurve, <a name=\"a9\"></a><a class=\"code\" href=\"#!/url=./cpp_ref/class_m_object.html#af2a707b4254eb54763167aeced863e63\">MObject::kNullObj</a>, &amp;stat );</div>\n\
<div class=\"line\"></div>\n\
<div class=\"line\">    <span class=\"keywordflow\">if</span> ( !stat ) {</div>\n\
<div class=\"line\">        stat.<a name=\"a10\"></a><a class=\"code\" href=\"#!/url=./cpp_ref/class_m_status.html#a1f01a4748fea4d8bcced082df83f804d\">perror</a>(<span class=\"stringliteral\">&quot;ERROR creating simpleLoft curve attribute&quot;</span>);</div>\n\
<div class=\"line\">        <span class=\"keywordflow\">return</span> stat;</div>\n\
<div class=\"line\">    }</div>\n\
<div class=\"line\"></div>\n\
<div class=\"line\">    outputSurface = typedAttr.<a class=\"code\" href=\"#!/url=./cpp_ref/class_m_fn_typed_attribute.html#af785af0a66bd4a4da1d9f7bd74d4de0a\">create</a>( <span class=\"stringliteral\">&quot;outputSurface&quot;</span>, <span class=\"stringliteral\">&quot;out&quot;</span>,</div>\n\
<div class=\"line\">                MFnNurbsSurfaceData::kNurbsSurface, <a class=\"code\" href=\"#!/url=./cpp_ref/class_m_object.html#af2a707b4254eb54763167aeced863e63\">MObject::kNullObj</a>, &amp;stat );</div>\n\
<div class=\"line\"></div>\n\
<div class=\"line\">    <span class=\"keywordflow\">if</span> ( !stat ) {</div>\n\
<div class=\"line\">        stat.<a class=\"code\" href=\"#!/url=./cpp_ref/class_m_status.html#a1f01a4748fea4d8bcced082df83f804d\">perror</a>(<span class=\"stringliteral\">&quot;ERROR creating simpleLoft surface attribute&quot;</span>);</div>\n\
<div class=\"line\">        <span class=\"keywordflow\">return</span> stat;</div>\n\
<div class=\"line\">    }</div>\n\
<div class=\"line\">    typedAttr.<a name=\"a11\"></a><a class=\"code\" href=\"#!/url=./cpp_ref/class_m_fn_attribute.html#a8d2be80de133a200a455bf9e2ac1b709\">setStorable</a>( <span class=\"keyword\">false</span> );</div>\n\
<div class=\"line\"></div>\n\
<div class=\"line\">    stat = addAttribute( inputCurve );</div>\n\
<div class=\"line\">        <span class=\"keywordflow\">if</span> (!stat) { stat.<a class=\"code\" href=\"#!/url=./cpp_ref/class_m_status.html#a1f01a4748fea4d8bcced082df83f804d\">perror</a>(<span class=\"stringliteral\">&quot;addAttribute&quot;</span>); <span class=\"keywordflow\">return</span> stat;}</div>\n\
<div class=\"line\">    stat = addAttribute( outputSurface );</div>\n\
<div class=\"line\">        <span class=\"keywordflow\">if</span> (!stat) { stat.<a class=\"code\" href=\"#!/url=./cpp_ref/class_m_status.html#a1f01a4748fea4d8bcced082df83f804d\">perror</a>(<span class=\"stringliteral\">&quot;addAttribute&quot;</span>); <span class=\"keywordflow\">return</span> stat;}</div>\n\
<div class=\"line\"></div>\n\
<div class=\"line\">    stat = attributeAffects( inputCurve, outputSurface );</div>\n\
<div class=\"line\">        <span class=\"keywordflow\">if</span> (!stat) { stat.<a class=\"code\" href=\"#!/url=./cpp_ref/class_m_status.html#a1f01a4748fea4d8bcced082df83f804d\">perror</a>(<span class=\"stringliteral\">&quot;attributeAffects&quot;</span>); <span class=\"keywordflow\">return</span> stat;}</div>\n\
<div class=\"line\"></div>\n\
<div class=\"line\">    <span class=\"keywordflow\">return</span> MS::kSuccess;</div>\n\
<div class=\"line\">}</div>\n\
<div class=\"line\"></div>\n\
<div class=\"line\"><a class=\"code\" href=\"#!/url=./cpp_ref/class_m_object.html\">MObject</a> simpleLoft::loft( <a class=\"code\" href=\"#!/url=./cpp_ref/class_m_object.html\">MObject</a> &amp;curve, <a class=\"code\" href=\"#!/url=./cpp_ref/class_m_object.html\">MObject</a> &amp;newSurfData, <a class=\"code\" href=\"#!/url=./cpp_ref/class_m_status.html\">MStatus</a> &amp;stat )</div>\n\
<div class=\"line\">{</div>\n\
<div class=\"line\">    <a name=\"_a12\"></a><a class=\"code\" href=\"#!/url=./cpp_ref/class_m_fn_nurbs_surface.html\">MFnNurbsSurface</a> surfFn;</div>\n\
<div class=\"line\"></div>\n\
<div class=\"line\">    <a name=\"_a13\"></a><a class=\"code\" href=\"#!/url=./cpp_ref/class_m_point_array.html\">MPointArray</a> cvs;</div>\n\
<div class=\"line\">    <a name=\"_a14\"></a><a class=\"code\" href=\"#!/url=./cpp_ref/class_m_double_array.html\">MDoubleArray</a> ku, kv;</div>\n\
<div class=\"line\">    <a name=\"_a15\"></a><a class=\"code\" href=\"#!/url=./cpp_ref/class_m_fn_nurbs_curve.html\">MFnNurbsCurve</a> curveFn (curve);</div>\n\
<div class=\"line\"></div>\n\
<div class=\"line\">    stat = curveFn.getCVs (cvs, MSpace::kWorld);</div>\n\
<div class=\"line\">    <span class=\"keywordflow\">if</span> ( stat != MS::kSuccess )</div>\n\
<div class=\"line\">    {</div>\n\
<div class=\"line\">        cerr &lt;&lt; <span class=\"stringliteral\">&quot;Error in getting CVs: &quot;</span> &lt;&lt; stat &lt;&lt; endl;</div>\n\
<div class=\"line\">        <span class=\"keywordflow\">return</span> <a class=\"code\" href=\"#!/url=./cpp_ref/class_m_object.html#af2a707b4254eb54763167aeced863e63\">MObject::kNullObj</a>;</div>\n\
<div class=\"line\">    }</div>\n\
<div class=\"line\"></div>\n\
<div class=\"line\"></div>\n\
<div class=\"line\">    <span class=\"keywordtype\">int</span> i, j, k = cvs.<a name=\"a16\"></a><a class=\"code\" href=\"#!/url=./cpp_ref/class_m_point_array.html#a580388f31f60c46fac867ca48a48da1e\">length</a>();</div>\n\
<div class=\"line\"></div>\n\
<div class=\"line\">    <span class=\"comment\">// create knot vectors for U and V</span></div>\n\
<div class=\"line\"></div>\n\
<div class=\"line\">    ku.<a name=\"a17\"></a><a class=\"code\" href=\"#!/url=./cpp_ref/class_m_double_array.html#aafcfe8ff7afecc2dee4defccbdfb8e55\">append</a>( 0.0 );</div>\n\
<div class=\"line\">    ku.<a class=\"code\" href=\"#!/url=./cpp_ref/class_m_double_array.html#aafcfe8ff7afecc2dee4defccbdfb8e55\">append</a>( 0.0 );</div>\n\
<div class=\"line\">    ku.<a class=\"code\" href=\"#!/url=./cpp_ref/class_m_double_array.html#aafcfe8ff7afecc2dee4defccbdfb8e55\">append</a>( 0.0 );</div>\n\
<div class=\"line\"></div>\n\
<div class=\"line\">    ku.<a class=\"code\" href=\"#!/url=./cpp_ref/class_m_double_array.html#aafcfe8ff7afecc2dee4defccbdfb8e55\">append</a>( 1.0 );</div>\n\
<div class=\"line\">    ku.<a class=\"code\" href=\"#!/url=./cpp_ref/class_m_double_array.html#aafcfe8ff7afecc2dee4defccbdfb8e55\">append</a>( 1.0 );</div>\n\
<div class=\"line\">    ku.<a class=\"code\" href=\"#!/url=./cpp_ref/class_m_double_array.html#aafcfe8ff7afecc2dee4defccbdfb8e55\">append</a>( 1.0 );</div>\n\
<div class=\"line\"></div>\n\
<div class=\"line\">    kv.<a class=\"code\" href=\"#!/url=./cpp_ref/class_m_double_array.html#aafcfe8ff7afecc2dee4defccbdfb8e55\">append</a>( 0.0 );</div>\n\
<div class=\"line\">    kv.<a class=\"code\" href=\"#!/url=./cpp_ref/class_m_double_array.html#aafcfe8ff7afecc2dee4defccbdfb8e55\">append</a>( 0.0 );</div>\n\
<div class=\"line\">    kv.<a class=\"code\" href=\"#!/url=./cpp_ref/class_m_double_array.html#aafcfe8ff7afecc2dee4defccbdfb8e55\">append</a>( 0.0 );</div>\n\
<div class=\"line\"></div>\n\
<div class=\"line\">    <span class=\"keywordflow\">for</span> ( i = 1; i &lt; k-3; i ++ )</div>\n\
<div class=\"line\">        kv.<a class=\"code\" href=\"#!/url=./cpp_ref/class_m_double_array.html#aafcfe8ff7afecc2dee4defccbdfb8e55\">append</a>( (<span class=\"keywordtype\">double</span>) i );</div>\n\
<div class=\"line\"></div>\n\
<div class=\"line\">    kv.<a class=\"code\" href=\"#!/url=./cpp_ref/class_m_double_array.html#aafcfe8ff7afecc2dee4defccbdfb8e55\">append</a>( k-3 );</div>\n\
<div class=\"line\">    kv.<a class=\"code\" href=\"#!/url=./cpp_ref/class_m_double_array.html#aafcfe8ff7afecc2dee4defccbdfb8e55\">append</a>( k-3 );</div>\n\
<div class=\"line\">    kv.<a class=\"code\" href=\"#!/url=./cpp_ref/class_m_double_array.html#aafcfe8ff7afecc2dee4defccbdfb8e55\">append</a>( k-3 );</div>\n\
<div class=\"line\"></div>\n\
<div class=\"line\">    <span class=\"comment\">// create cvs for the surface</span></div>\n\
<div class=\"line\"></div>\n\
<div class=\"line\">    <span class=\"keywordflow\">for</span> ( i = 1; i &lt; 4; i++ )</div>\n\
<div class=\"line\">    {</div>\n\
<div class=\"line\">        <span class=\"keywordflow\">for</span> ( j = 0; j &lt; k; j++ )</div>\n\
<div class=\"line\">        {</div>\n\
<div class=\"line\">            <a name=\"_a18\"></a><a class=\"code\" href=\"#!/url=./cpp_ref/class_m_point.html\">MPoint</a> point = cvs[j];</div>\n\
<div class=\"line\">            point.<a name=\"a19\"></a><a class=\"code\" href=\"#!/url=./cpp_ref/class_m_point.html#ab3e6ed577a7c669c19de1f9c1b46c872\">z</a> += (double) i;  <span class=\"comment\">// loft in Z by 1</span></div>\n\
<div class=\"line\">            cvs.<a name=\"a20\"></a><a class=\"code\" href=\"#!/url=./cpp_ref/class_m_point_array.html#abe5a9fe36b4651af38a4a26c85f46e1a\">append</a>( point );</div>\n\
<div class=\"line\">        }</div>\n\
<div class=\"line\">    }</div>\n\
<div class=\"line\"></div>\n\
<div class=\"line\"></div>\n\
<div class=\"line\">    <a class=\"code\" href=\"#!/url=./cpp_ref/class_m_object.html\">MObject</a> surf = surfFn.<a name=\"a21\"></a><a class=\"code\" href=\"#!/url=./cpp_ref/class_m_fn_nurbs_surface.html#a6a3e914fe9c070228f4df8f4a593b4c8\">create</a>(</div>\n\
<div class=\"line\">        cvs, ku, kv, 3, 3,</div>\n\
<div class=\"line\">        MFnNurbsSurface::kOpen, MFnNurbsSurface::kOpen,</div>\n\
<div class=\"line\">        <span class=\"keyword\">false</span>, newSurfData, &amp;stat );</div>\n\
<div class=\"line\"></div>\n\
<div class=\"line\">    <span class=\"keywordflow\">if</span> ( stat != MS::kSuccess )</div>\n\
<div class=\"line\">    {</div>\n\
<div class=\"line\">        cerr &lt;&lt; <span class=\"stringliteral\">&quot;Error in creating surface: &quot;</span> &lt;&lt; stat &lt;&lt; endl;</div>\n\
<div class=\"line\">        <span class=\"keywordflow\">return</span> <a class=\"code\" href=\"#!/url=./cpp_ref/class_m_object.html#af2a707b4254eb54763167aeced863e63\">MObject::kNullObj</a>;</div>\n\
<div class=\"line\">    }</div>\n\
<div class=\"line\"></div>\n\
<div class=\"line\">    <span class=\"comment\">// stat = MGlobal::addToModel( surf );</span></div>\n\
<div class=\"line\">    <span class=\"keywordflow\">return</span> surf;</div>\n\
<div class=\"line\"></div>\n\
<div class=\"line\">}</div>\n\
<div class=\"line\"></div>\n\
<div class=\"line\"><a class=\"code\" href=\"#!/url=./cpp_ref/class_m_status.html\">MStatus</a> simpleLoft::compute( <span class=\"keyword\">const</span> <a class=\"code\" href=\"#!/url=./cpp_ref/class_m_plug.html\">MPlug</a>&amp; plug, <a class=\"code\" href=\"#!/url=./cpp_ref/class_m_data_block.html\">MDataBlock</a>&amp; data )</div>\n\
<div class=\"line\">{</div>\n\
<div class=\"line\">    <a class=\"code\" href=\"#!/url=./cpp_ref/class_m_status.html\">MStatus</a> stat;</div>\n\
<div class=\"line\"></div>\n\
<div class=\"line\">    <span class=\"keywordflow\">if</span> ( plug == outputSurface )    <span class=\"comment\">// loft inputCurve into surface</span></div>\n\
<div class=\"line\">    {</div>\n\
<div class=\"line\">        <a name=\"_a22\"></a><a class=\"code\" href=\"#!/url=./cpp_ref/class_m_data_handle.html\">MDataHandle</a> inputData = data.<a name=\"a23\"></a><a class=\"code\" href=\"#!/url=./cpp_ref/class_m_data_block.html#af4a356799acd4ed070d372ed7cfb4706\">inputValue</a>( inputCurve, &amp;stat );</div>\n\
<div class=\"line\">        <span class=\"keywordflow\">if</span>( stat != MS::kSuccess )</div>\n\
<div class=\"line\">        {</div>\n\
<div class=\"line\">            cerr &lt;&lt; <span class=\"stringliteral\">&quot;ERROR getting data: &quot;</span> &lt;&lt; stat &lt;&lt; endl;</div>\n\
<div class=\"line\">            <span class=\"keywordflow\">return</span> stat;</div>\n\
<div class=\"line\">        }</div>\n\
<div class=\"line\"></div>\n\
<div class=\"line\">        <a class=\"code\" href=\"#!/url=./cpp_ref/class_m_object.html\">MObject</a> curve = inputData.<a name=\"a24\"></a><a class=\"code\" href=\"#!/url=./cpp_ref/class_m_data_handle.html#afa3c149ea6bce4807af2d0ca7cf4c527\">asNurbsCurve</a>();</div>\n\
<div class=\"line\">        <a class=\"code\" href=\"#!/url=./cpp_ref/class_m_fn_nurbs_curve.html\">MFnNurbsCurve</a> curveFn( curve, &amp;stat );</div>\n\
<div class=\"line\">        <span class=\"keywordflow\">if</span>( stat != MS::kSuccess )</div>\n\
<div class=\"line\">        {</div>\n\
<div class=\"line\">          cerr &lt;&lt; <span class=\"stringliteral\">&quot;ERROR creating curve function set:&quot;</span> &lt;&lt; stat &lt;&lt; endl;</div>\n\
<div class=\"line\">          <span class=\"keywordflow\">return</span> stat;</div>\n\
<div class=\"line\">        }</div>\n\
<div class=\"line\"></div>\n\
<div class=\"line\">        <a class=\"code\" href=\"#!/url=./cpp_ref/class_m_data_handle.html\">MDataHandle</a> surfHandle = data.<a name=\"a25\"></a><a class=\"code\" href=\"#!/url=./cpp_ref/class_m_data_block.html#a5e4082d6ab961bee4ec0281676bb4834\">outputValue</a>( simpleLoft::outputSurface );</div>\n\
<div class=\"line\">        <span class=\"keywordflow\">if</span>( stat != MS::kSuccess )</div>\n\
<div class=\"line\">        {</div>\n\
<div class=\"line\">          cerr &lt;&lt; <span class=\"stringliteral\">&quot;Error in getting data handle: &quot;</span> &lt;&lt; stat &lt;&lt; endl;</div>\n\
<div class=\"line\">          <span class=\"keywordflow\">return</span> stat;</div>\n\
<div class=\"line\">        }</div>\n\
<div class=\"line\">        </div>\n\
<div class=\"line\">        <a name=\"_a26\"></a><a class=\"code\" href=\"#!/url=./cpp_ref/class_m_fn_nurbs_surface_data.html\">MFnNurbsSurfaceData</a> dataCreator;</div>\n\
<div class=\"line\">        <a class=\"code\" href=\"#!/url=./cpp_ref/class_m_object.html\">MObject</a> newSurfData = dataCreator.<a name=\"a27\"></a><a class=\"code\" href=\"#!/url=./cpp_ref/class_m_fn_nurbs_surface_data.html#af1adb4abaf5243c6c0749bcca7b5c418\">create</a>( &amp;stat );</div>\n\
<div class=\"line\">        <span class=\"keywordflow\">if</span> ( stat != MS::kSuccess ) {</div>\n\
<div class=\"line\">          cerr &lt;&lt; <span class=\"stringliteral\">&quot;Error creating new nurbs surface data block: &quot;</span></div>\n\
<div class=\"line\">               &lt;&lt; stat &lt;&lt; endl;</div>\n\
<div class=\"line\">          <span class=\"keywordflow\">return</span> stat;</div>\n\
<div class=\"line\">        }</div>\n\
<div class=\"line\">        </div>\n\
<div class=\"line\">        <span class=\"comment\">/* MObject newSurf = */</span> loft( curve, newSurfData,  stat );</div>\n\
<div class=\"line\">        <span class=\"keywordflow\">if</span>( stat != MS::kSuccess )</div>\n\
<div class=\"line\">        {</div>\n\
<div class=\"line\">          cerr &lt;&lt; <span class=\"stringliteral\">&quot;Error in creating surface: &quot;</span> &lt;&lt; stat &lt;&lt; endl;</div>\n\
<div class=\"line\">          <span class=\"keywordflow\">return</span> stat;</div>\n\
<div class=\"line\">        }</div>\n\
<div class=\"line\">        </div>\n\
<div class=\"line\">        <span class=\"comment\">// newSurf is the new surface object, but it has been packed</span></div>\n\
<div class=\"line\">        <span class=\"comment\">// into the datablock we created for it, and the data block</span></div>\n\
<div class=\"line\">        <span class=\"comment\">// is what we must put onto the plug.</span></div>\n\
<div class=\"line\">        surfHandle.<a name=\"a28\"></a><a class=\"code\" href=\"#!/url=./cpp_ref/class_m_data_handle.html#a2a75482f517f405a641c0eee0bd995ac\">set</a>( newSurfData );</div>\n\
<div class=\"line\">        </div>\n\
<div class=\"line\">        stat = data.<a name=\"a29\"></a><a class=\"code\" href=\"#!/url=./cpp_ref/class_m_data_block.html#aceb46f1065ef1cd730c4ab15d61466cc\">setClean</a>( plug );</div>\n\
<div class=\"line\">        <span class=\"keywordflow\">if</span>( stat != MS::kSuccess )</div>\n\
<div class=\"line\">        {</div>\n\
<div class=\"line\">          cerr &lt;&lt; <span class=\"stringliteral\">&quot;Error in cleaning outputSurface plug: &quot;</span></div>\n\
<div class=\"line\">               &lt;&lt; stat &lt;&lt; endl;</div>\n\
<div class=\"line\">          <span class=\"keywordflow\">return</span> stat;</div>\n\
<div class=\"line\">        }</div>\n\
<div class=\"line\">    }</div>\n\
<div class=\"line\">    <span class=\"keywordflow\">else</span></div>\n\
<div class=\"line\">    {</div>\n\
<div class=\"line\">        <span class=\"keywordflow\">return</span> MS::kUnknownParameter;</div>\n\
<div class=\"line\">    }</div>\n\
<div class=\"line\"></div>\n\
<div class=\"line\">    <span class=\"keywordflow\">return</span> MS::kSuccess;</div>\n\
<div class=\"line\">}</div>\n\
<div class=\"line\"></div>\n\
<div class=\"line\"><a class=\"code\" href=\"#!/url=./cpp_ref/class_m_status.html\">MStatus</a> initializePlugin( <a class=\"code\" href=\"#!/url=./cpp_ref/class_m_object.html\">MObject</a> obj )</div>\n\
<div class=\"line\">{</div>\n\
<div class=\"line\">    <a class=\"code\" href=\"#!/url=./cpp_ref/class_m_status.html\">MStatus</a>   status;</div>\n\
<div class=\"line\">    <a name=\"_a30\"></a><a class=\"code\" href=\"#!/url=./cpp_ref/class_m_fn_plugin.html\">MFnPlugin</a> plugin( obj, PLUGIN_COMPANY, <span class=\"stringliteral\">&quot;3.0&quot;</span>, <span class=\"stringliteral\">&quot;Any&quot;</span>);</div>\n\
<div class=\"line\"></div>\n\
<div class=\"line\">    status = plugin.registerNode( <span class=\"stringliteral\">&quot;simpleLoft&quot;</span>, simpleLoft::id,</div>\n\
<div class=\"line\">                                  simpleLoft::creator, simpleLoft::initialize );</div>\n\
<div class=\"line\">    <span class=\"keywordflow\">if</span> (!status) {</div>\n\
<div class=\"line\">        status.<a class=\"code\" href=\"#!/url=./cpp_ref/class_m_status.html#a1f01a4748fea4d8bcced082df83f804d\">perror</a>(<span class=\"stringliteral\">&quot;registerNode&quot;</span>);</div>\n\
<div class=\"line\">        <span class=\"keywordflow\">return</span> status;</div>\n\
<div class=\"line\">    }</div>\n\
<div class=\"line\"></div>\n\
<div class=\"line\">    <span class=\"keywordflow\">return</span> status;</div>\n\
<div class=\"line\">}</div>\n\
<div class=\"line\"></div>\n\
<div class=\"line\"><a class=\"code\" href=\"#!/url=./cpp_ref/class_m_status.html\">MStatus</a> uninitializePlugin( <a class=\"code\" href=\"#!/url=./cpp_ref/class_m_object.html\">MObject</a> obj)</div>\n\
<div class=\"line\">{</div>\n\
<div class=\"line\">    <a class=\"code\" href=\"#!/url=./cpp_ref/class_m_status.html\">MStatus</a>   status;</div>\n\
<div class=\"line\">    <a class=\"code\" href=\"#!/url=./cpp_ref/class_m_fn_plugin.html\">MFnPlugin</a> plugin( obj );</div>\n\
<div class=\"line\"></div>\n\
<div class=\"line\">    status = plugin.deregisterNode( simpleLoft::id );</div>\n\
<div class=\"line\">    <span class=\"keywordflow\">if</span> (!status) {</div>\n\
<div class=\"line\">        status.<a class=\"code\" href=\"#!/url=./cpp_ref/class_m_status.html#a1f01a4748fea4d8bcced082df83f804d\">perror</a>(<span class=\"stringliteral\">&quot;deregisterNode&quot;</span>);</div>\n\
<div class=\"line\">        <span class=\"keywordflow\">return</span> status;</div>\n\
<div class=\"line\">    }</div>\n\
<div class=\"line\"></div>\n\
<div class=\"line\">    <span class=\"keywordflow\">return</span> status;</div>\n\
<div class=\"line\">}</div>\n\
</div><!-- fragment --> </div><!-- contents -->\n\
</div><!-- doc-content -->\n\
<!-- start footer part -->\n\
\n\
      <div class=\"footer-block\"><a href=\"../html/ac.cmtdialog.htm\" class=\"comments-anchor\" target=\"_blank\"><span class=\"comments-link\">Please send us your comment about this page</span></a></div></div>\n\
   </div></body>\n\
</html>\n\
";