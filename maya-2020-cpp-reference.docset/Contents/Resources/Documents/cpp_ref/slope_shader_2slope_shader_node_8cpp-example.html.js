var topic = "<!-- saved from url=(0024)http://docs.autodesk.com -->\n\
<html>\n\
   <head><script src=\"../scripts/yepnope.1.5.4-min.js\" type=\"text/javascript\"></script><script src=\"../scripts/lib/jquery-1.11.1.min.js\" type=\"text/javascript\"></script>\n\
      <title>C++ API Reference: slopeShader/slopeShaderNode.cpp</title>\n\
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
    cpp_ref_adsk_ref_toc.initNavTree(\'slope_shader_2slope_shader_node_8cpp-example.html\', tocPrefix);\n\
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
            <h1>C++ API Reference: slopeShader/slopeShaderNode.cpp</h1>\n\
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
<div class=\"title\">slopeShader/slopeShaderNode.cpp</div>  </div>\n\
</div><!--header-->\n\
<div class=\"contents\">\n\
<div class=\"fragment\"><div class=\"line\"><span class=\"preprocessor\">#include &lt;math.h&gt;</span></div>\n\
<div class=\"line\"><span class=\"preprocessor\">#include &quot;slopeShaderNode.h&quot;</span></div>\n\
<div class=\"line\"><span class=\"preprocessor\">#include &lt;maya/MDataBlock.h&gt;</span></div>\n\
<div class=\"line\"><span class=\"preprocessor\">#include &lt;maya/MDataHandle.h&gt;</span></div>\n\
<div class=\"line\"><span class=\"preprocessor\">#include &lt;maya/MFloatVector.h&gt;</span></div>\n\
<div class=\"line\"><span class=\"preprocessor\">#include &lt;maya/MFnNumericAttribute.h&gt;</span></div>\n\
<div class=\"line\"><span class=\"preprocessor\">#include &lt;maya/MFnMatrixAttribute.h&gt;</span></div>\n\
<div class=\"line\"><span class=\"preprocessor\">#include &lt;maya/MFnTypedAttribute.h&gt;</span></div>\n\
<div class=\"line\"><span class=\"preprocessor\">#include &lt;maya/MFnGenericAttribute.h&gt;</span></div>\n\
<div class=\"line\"></div>\n\
<div class=\"line\"><span class=\"preprocessor\">#define AWdegreesToRadians 0.0174532925199432957692369076848f</span></div>\n\
<div class=\"line\"></div>\n\
<div class=\"line\"><a name=\"_a0\"></a><a class=\"code\" href=\"#!/url=./cpp_ref/class_m_type_id.html\">MTypeId</a> slopeShaderNode::id( 0x81005 );</div>\n\
<div class=\"line\"></div>\n\
<div class=\"line\"><span class=\"comment\">//Input values</span></div>\n\
<div class=\"line\"><span class=\"comment\">// </span></div>\n\
<div class=\"line\"><a name=\"_a1\"></a><a class=\"code\" href=\"#!/url=./cpp_ref/class_m_object.html\">MObject</a> slopeShaderNode::aAngle;</div>\n\
<div class=\"line\"><a class=\"code\" href=\"#!/url=./cpp_ref/class_m_object.html\">MObject</a> slopeShaderNode::aColor1;</div>\n\
<div class=\"line\"><a class=\"code\" href=\"#!/url=./cpp_ref/class_m_object.html\">MObject</a> slopeShaderNode::aColor2;</div>\n\
<div class=\"line\"></div>\n\
<div class=\"line\"><span class=\"comment\">//Rendering attributes</span></div>\n\
<div class=\"line\"><span class=\"comment\">//</span></div>\n\
<div class=\"line\"><a class=\"code\" href=\"#!/url=./cpp_ref/class_m_object.html\">MObject</a> slopeShaderNode::aTriangleNormalCamera;</div>\n\
<div class=\"line\"><a class=\"code\" href=\"#!/url=./cpp_ref/class_m_object.html\">MObject</a> slopeShaderNode::aMatrixEyeToWorld;</div>\n\
<div class=\"line\"></div>\n\
<div class=\"line\"><span class=\"comment\">//Output color</span></div>\n\
<div class=\"line\"><span class=\"comment\">//</span></div>\n\
<div class=\"line\"><a class=\"code\" href=\"#!/url=./cpp_ref/class_m_object.html\">MObject</a> slopeShaderNode::aOutColor;</div>\n\
<div class=\"line\"></div>\n\
<div class=\"line\"><span class=\"comment\">//Dummy plug for forcing</span></div>\n\
<div class=\"line\"><span class=\"comment\">//an evaluation of this node</span></div>\n\
<div class=\"line\"><span class=\"comment\">//</span></div>\n\
<div class=\"line\"><a class=\"code\" href=\"#!/url=./cpp_ref/class_m_object.html\">MObject</a> slopeShaderNode::aDirtyShaderAttr;</div>\n\
<div class=\"line\"></div>\n\
<div class=\"line\">slopeShaderNode::slopeShaderNode()</div>\n\
<div class=\"line\"><span class=\"comment\">//</span></div>\n\
<div class=\"line\"><span class=\"comment\">//  Description:</span></div>\n\
<div class=\"line\"><span class=\"comment\">//      Constructor</span></div>\n\
<div class=\"line\"><span class=\"comment\">//</span></div>\n\
<div class=\"line\">{</div>\n\
<div class=\"line\">}</div>\n\
<div class=\"line\"></div>\n\
<div class=\"line\">slopeShaderNode::~slopeShaderNode()</div>\n\
<div class=\"line\"><span class=\"comment\">//</span></div>\n\
<div class=\"line\"><span class=\"comment\">//  Description:</span></div>\n\
<div class=\"line\"><span class=\"comment\">//      Descructor</span></div>\n\
<div class=\"line\"><span class=\"comment\">//</span></div>\n\
<div class=\"line\">{</div>\n\
<div class=\"line\">}</div>\n\
<div class=\"line\"></div>\n\
<div class=\"line\"><span class=\"keywordtype\">void</span>* slopeShaderNode::creator()</div>\n\
<div class=\"line\"><span class=\"comment\">//</span></div>\n\
<div class=\"line\"><span class=\"comment\">//  Description:</span></div>\n\
<div class=\"line\"><span class=\"comment\">//      Returns a new instance of this class</span></div>\n\
<div class=\"line\"><span class=\"comment\">//</span></div>\n\
<div class=\"line\">{</div>\n\
<div class=\"line\">    <span class=\"keywordflow\">return</span> <span class=\"keyword\">new</span> slopeShaderNode();</div>\n\
<div class=\"line\">}</div>\n\
<div class=\"line\"></div>\n\
<div class=\"line\"><a name=\"_a2\"></a><a class=\"code\" href=\"#!/url=./cpp_ref/class_m_status.html\">MStatus</a> slopeShaderNode::initialize()</div>\n\
<div class=\"line\"><span class=\"comment\">//</span></div>\n\
<div class=\"line\"><span class=\"comment\">//  Description:</span></div>\n\
<div class=\"line\"><span class=\"comment\">//      Initializes the attributes for this node.</span></div>\n\
<div class=\"line\"><span class=\"comment\">//</span></div>\n\
<div class=\"line\">{</div>\n\
<div class=\"line\">     <a name=\"_a3\"></a><a class=\"code\" href=\"#!/url=./cpp_ref/class_m_fn_numeric_attribute.html\">MFnNumericAttribute</a> nAttr; </div>\n\
<div class=\"line\">     <a name=\"_a4\"></a><a class=\"code\" href=\"#!/url=./cpp_ref/class_m_fn_matrix_attribute.html\">MFnMatrixAttribute</a> nMAttr;</div>\n\
<div class=\"line\">     <a name=\"_a5\"></a><a class=\"code\" href=\"#!/url=./cpp_ref/class_m_fn_typed_attribute.html\">MFnTypedAttribute</a> nTAttr;</div>\n\
<div class=\"line\">     <a name=\"_a6\"></a><a class=\"code\" href=\"#!/url=./cpp_ref/class_m_fn_generic_attribute.html\">MFnGenericAttribute</a> nGAttr;</div>\n\
<div class=\"line\"></div>\n\
<div class=\"line\"></div>\n\
<div class=\"line\">    <span class=\"comment\">// Input Attributes</span></div>\n\
<div class=\"line\">    <span class=\"comment\">//</span></div>\n\
<div class=\"line\">    aAngle = nAttr.<a name=\"a7\"></a><a class=\"code\" href=\"#!/url=./cpp_ref/class_m_fn_numeric_attribute.html#a5c08a5ce5e7123cc444c95a0e4a50f29\">create</a>( <span class=\"stringliteral\">&quot;angle&quot;</span>, <span class=\"stringliteral\">&quot;ang&quot;</span>, MFnNumericData::kFloat);</div>\n\
<div class=\"line\">    nAttr.<a name=\"a8\"></a><a class=\"code\" href=\"#!/url=./cpp_ref/class_m_fn_numeric_attribute.html#aae3f2fbbbce06e006f1838a1fb6fdcdd\">setDefault</a>(30.0f);</div>\n\
<div class=\"line\">    nAttr.<a name=\"a9\"></a><a class=\"code\" href=\"#!/url=./cpp_ref/class_m_fn_numeric_attribute.html#aba21b33176bb831de026b78605c1dcf3\">setMin</a>(0.0f);</div>\n\
<div class=\"line\">    nAttr.<a name=\"a10\"></a><a class=\"code\" href=\"#!/url=./cpp_ref/class_m_fn_numeric_attribute.html#adab95fd85497b1dad3a4ba7a842ce9d8\">setMax</a>(100.0f);</div>\n\
<div class=\"line\">    nAttr.<a name=\"a11\"></a><a class=\"code\" href=\"#!/url=./cpp_ref/class_m_fn_attribute.html#a9e68a8b4af016b37f6567cfa6d68e551\">setKeyable</a>(<span class=\"keyword\">true</span>);</div>\n\
<div class=\"line\">    nAttr.<a name=\"a12\"></a><a class=\"code\" href=\"#!/url=./cpp_ref/class_m_fn_attribute.html#a8d2be80de133a200a455bf9e2ac1b709\">setStorable</a>(<span class=\"keyword\">true</span>);</div>\n\
<div class=\"line\">    nAttr.<a name=\"a13\"></a><a class=\"code\" href=\"#!/url=./cpp_ref/class_m_fn_attribute.html#af41aae76c0dc31dbcd1f4ecea52d694e\">setReadable</a>(<span class=\"keyword\">true</span>);</div>\n\
<div class=\"line\">    nAttr.<a name=\"a14\"></a><a class=\"code\" href=\"#!/url=./cpp_ref/class_m_fn_attribute.html#a98bb3089ec3b7442383da68a5ef424c7\">setWritable</a>(<span class=\"keyword\">true</span>);</div>\n\
<div class=\"line\"></div>\n\
<div class=\"line\">    aColor1 = nAttr.<a name=\"a15\"></a><a class=\"code\" href=\"#!/url=./cpp_ref/class_m_fn_numeric_attribute.html#a3b53a86b42bc4da537c4be835797c4d5\">createColor</a>( <span class=\"stringliteral\">&quot;walkableColor&quot;</span>, <span class=\"stringliteral\">&quot;w&quot;</span> );</div>\n\
<div class=\"line\">    nAttr.<a class=\"code\" href=\"#!/url=./cpp_ref/class_m_fn_numeric_attribute.html#aae3f2fbbbce06e006f1838a1fb6fdcdd\">setDefault</a>(0.0f, 1.0f, 0.0f);</div>\n\
<div class=\"line\">    nAttr.<a class=\"code\" href=\"#!/url=./cpp_ref/class_m_fn_attribute.html#a9e68a8b4af016b37f6567cfa6d68e551\">setKeyable</a>(<span class=\"keyword\">true</span>);</div>\n\
<div class=\"line\">    nAttr.<a class=\"code\" href=\"#!/url=./cpp_ref/class_m_fn_attribute.html#a8d2be80de133a200a455bf9e2ac1b709\">setStorable</a>(<span class=\"keyword\">true</span>);</div>\n\
<div class=\"line\">    nAttr.<a name=\"a16\"></a><a class=\"code\" href=\"#!/url=./cpp_ref/class_m_fn_attribute.html#a4a44548ca2e5b1e7613a992a6b96a147\">setUsedAsColor</a>(<span class=\"keyword\">true</span>);</div>\n\
<div class=\"line\">    nAttr.<a class=\"code\" href=\"#!/url=./cpp_ref/class_m_fn_attribute.html#af41aae76c0dc31dbcd1f4ecea52d694e\">setReadable</a>(<span class=\"keyword\">true</span>);</div>\n\
<div class=\"line\">    nAttr.<a class=\"code\" href=\"#!/url=./cpp_ref/class_m_fn_attribute.html#a98bb3089ec3b7442383da68a5ef424c7\">setWritable</a>(<span class=\"keyword\">true</span>);</div>\n\
<div class=\"line\"></div>\n\
<div class=\"line\">    aColor2 = nAttr.<a class=\"code\" href=\"#!/url=./cpp_ref/class_m_fn_numeric_attribute.html#a3b53a86b42bc4da537c4be835797c4d5\">createColor</a>( <span class=\"stringliteral\">&quot;nonWalkableColor&quot;</span>, <span class=\"stringliteral\">&quot;nw&quot;</span> );</div>\n\
<div class=\"line\">    nAttr.<a class=\"code\" href=\"#!/url=./cpp_ref/class_m_fn_numeric_attribute.html#aae3f2fbbbce06e006f1838a1fb6fdcdd\">setDefault</a>(1.0f, 0.0f, 0.0f);</div>\n\
<div class=\"line\">    nAttr.<a class=\"code\" href=\"#!/url=./cpp_ref/class_m_fn_attribute.html#a9e68a8b4af016b37f6567cfa6d68e551\">setKeyable</a>(<span class=\"keyword\">true</span>);</div>\n\
<div class=\"line\">    nAttr.<a class=\"code\" href=\"#!/url=./cpp_ref/class_m_fn_attribute.html#a8d2be80de133a200a455bf9e2ac1b709\">setStorable</a>(<span class=\"keyword\">true</span>);</div>\n\
<div class=\"line\">    nAttr.<a class=\"code\" href=\"#!/url=./cpp_ref/class_m_fn_attribute.html#a4a44548ca2e5b1e7613a992a6b96a147\">setUsedAsColor</a>(<span class=\"keyword\">true</span>);</div>\n\
<div class=\"line\">    nAttr.<a class=\"code\" href=\"#!/url=./cpp_ref/class_m_fn_attribute.html#af41aae76c0dc31dbcd1f4ecea52d694e\">setReadable</a>(<span class=\"keyword\">true</span>);</div>\n\
<div class=\"line\">    nAttr.<a class=\"code\" href=\"#!/url=./cpp_ref/class_m_fn_attribute.html#a98bb3089ec3b7442383da68a5ef424c7\">setWritable</a>(<span class=\"keyword\">true</span>);</div>\n\
<div class=\"line\"></div>\n\
<div class=\"line\"></div>\n\
<div class=\"line\">    <span class=\"comment\">// Surface Normal supplied by the render sampler</span></div>\n\
<div class=\"line\">    <span class=\"comment\">//</span></div>\n\
<div class=\"line\">    aTriangleNormalCamera = nAttr.<a name=\"a17\"></a><a class=\"code\" href=\"#!/url=./cpp_ref/class_m_fn_numeric_attribute.html#a333c2adbb4839dd894e4d37b18089d94\">createPoint</a>( <span class=\"stringliteral\">&quot;triangleNormalCamera&quot;</span>, <span class=\"stringliteral\">&quot;n&quot;</span> );</div>\n\
<div class=\"line\">    nAttr.<a class=\"code\" href=\"#!/url=./cpp_ref/class_m_fn_attribute.html#a8d2be80de133a200a455bf9e2ac1b709\">setStorable</a>(<span class=\"keyword\">false</span>);</div>\n\
<div class=\"line\">    nAttr.<a name=\"a18\"></a><a class=\"code\" href=\"#!/url=./cpp_ref/class_m_fn_attribute.html#ab8e48be1f1009a30d0e40dfcaf9e649d\">setHidden</a>(<span class=\"keyword\">true</span>);</div>\n\
<div class=\"line\">    nAttr.<a class=\"code\" href=\"#!/url=./cpp_ref/class_m_fn_attribute.html#af41aae76c0dc31dbcd1f4ecea52d694e\">setReadable</a>(<span class=\"keyword\">true</span>);</div>\n\
<div class=\"line\">    nAttr.<a class=\"code\" href=\"#!/url=./cpp_ref/class_m_fn_attribute.html#a98bb3089ec3b7442383da68a5ef424c7\">setWritable</a>(<span class=\"keyword\">true</span>);</div>\n\
<div class=\"line\"></div>\n\
<div class=\"line\">    <span class=\"comment\">//View matrix from the camera into world space</span></div>\n\
<div class=\"line\">    <span class=\"comment\">//</span></div>\n\
<div class=\"line\">    aMatrixEyeToWorld = nMAttr.<a name=\"a19\"></a><a class=\"code\" href=\"#!/url=./cpp_ref/class_m_fn_matrix_attribute.html#acccc043a2ac80be8fe8e32bcc36b8696\">create</a>( <span class=\"stringliteral\">&quot;matrixEyeToWorld&quot;</span>, <span class=\"stringliteral\">&quot;mew&quot;</span>,</div>\n\
<div class=\"line\">                                       MFnMatrixAttribute::kFloat );</div>\n\
<div class=\"line\">    nAttr.<a class=\"code\" href=\"#!/url=./cpp_ref/class_m_fn_attribute.html#ab8e48be1f1009a30d0e40dfcaf9e649d\">setHidden</a>(<span class=\"keyword\">true</span>);</div>\n\
<div class=\"line\">    nMAttr.<a class=\"code\" href=\"#!/url=./cpp_ref/class_m_fn_attribute.html#a98bb3089ec3b7442383da68a5ef424c7\">setWritable</a>(<span class=\"keyword\">true</span>);</div>\n\
<div class=\"line\"></div>\n\
<div class=\"line\">    <span class=\"comment\">// Output Attributes</span></div>\n\
<div class=\"line\">    <span class=\"comment\">//</span></div>\n\
<div class=\"line\">    aOutColor  = nAttr.<a class=\"code\" href=\"#!/url=./cpp_ref/class_m_fn_numeric_attribute.html#a3b53a86b42bc4da537c4be835797c4d5\">createColor</a>( <span class=\"stringliteral\">&quot;outColor&quot;</span>, <span class=\"stringliteral\">&quot;oc&quot;</span> );</div>\n\
<div class=\"line\">    nAttr.<a class=\"code\" href=\"#!/url=./cpp_ref/class_m_fn_attribute.html#a8d2be80de133a200a455bf9e2ac1b709\">setStorable</a>(<span class=\"keyword\">false</span>);</div>\n\
<div class=\"line\">    nAttr.<a class=\"code\" href=\"#!/url=./cpp_ref/class_m_fn_attribute.html#ab8e48be1f1009a30d0e40dfcaf9e649d\">setHidden</a>(<span class=\"keyword\">false</span>);</div>\n\
<div class=\"line\">    nAttr.<a class=\"code\" href=\"#!/url=./cpp_ref/class_m_fn_attribute.html#af41aae76c0dc31dbcd1f4ecea52d694e\">setReadable</a>(<span class=\"keyword\">true</span>);</div>\n\
<div class=\"line\">    nAttr.<a class=\"code\" href=\"#!/url=./cpp_ref/class_m_fn_attribute.html#a98bb3089ec3b7442383da68a5ef424c7\">setWritable</a>(<span class=\"keyword\">false</span>);</div>\n\
<div class=\"line\"></div>\n\
<div class=\"line\">    <span class=\"comment\">//dummy plug for forcing evaluation</span></div>\n\
<div class=\"line\">    <span class=\"comment\">//</span></div>\n\
<div class=\"line\">    aDirtyShaderAttr = nGAttr.<a name=\"a20\"></a><a class=\"code\" href=\"#!/url=./cpp_ref/class_m_fn_generic_attribute.html#a94a6d5e93a85fb18bc7accc18ee0d9f6\">create</a>( <span class=\"stringliteral\">&quot;dirtyShaderPlug&quot;</span>, <span class=\"stringliteral\">&quot;dsp&quot;</span>);</div>\n\
<div class=\"line\">    nGAttr.<a name=\"a21\"></a><a class=\"code\" href=\"#!/url=./cpp_ref/class_m_fn_attribute.html#acc80b84249f9c028f2c6d085a026b50c\">setArray</a>(<span class=\"keyword\">true</span>);</div>\n\
<div class=\"line\">    nGAttr.<a class=\"code\" href=\"#!/url=./cpp_ref/class_m_fn_attribute.html#ab8e48be1f1009a30d0e40dfcaf9e649d\">setHidden</a>(<span class=\"keyword\">false</span>);</div>\n\
<div class=\"line\">    nGAttr.<a name=\"a22\"></a><a class=\"code\" href=\"#!/url=./cpp_ref/class_m_fn_attribute.html#a08fb5fd3764795485a0d799616646ef1\">setUsesArrayDataBuilder</a>(<span class=\"keyword\">true</span>);</div>\n\
<div class=\"line\">    nGAttr.<a class=\"code\" href=\"#!/url=./cpp_ref/class_m_fn_attribute.html#af41aae76c0dc31dbcd1f4ecea52d694e\">setReadable</a>(<span class=\"keyword\">false</span>);</div>\n\
<div class=\"line\">    nGAttr.<a class=\"code\" href=\"#!/url=./cpp_ref/class_m_fn_attribute.html#a8d2be80de133a200a455bf9e2ac1b709\">setStorable</a>(<span class=\"keyword\">true</span>);</div>\n\
<div class=\"line\">    nGAttr.<a name=\"a23\"></a><a class=\"code\" href=\"#!/url=./cpp_ref/class_m_fn_attribute.html#a74dfd22a2b7f8ff6eeacb6e32d142c28\">setIndexMatters</a>(<span class=\"keyword\">false</span>);</div>\n\
<div class=\"line\">    nGAttr.<a name=\"a24\"></a><a class=\"code\" href=\"#!/url=./cpp_ref/class_m_fn_generic_attribute.html#a815ec0c59dfdc91fed24c4f2a75a4871\">addDataAccept</a>(MFnData::kMesh);</div>\n\
<div class=\"line\"></div>\n\
<div class=\"line\">    <span class=\"comment\">//Add attribues</span></div>\n\
<div class=\"line\">    addAttribute(aAngle);</div>\n\
<div class=\"line\">    addAttribute(aColor1);</div>\n\
<div class=\"line\">    addAttribute(aColor2);</div>\n\
<div class=\"line\">    addAttribute(aTriangleNormalCamera);</div>\n\
<div class=\"line\">    addAttribute(aOutColor);</div>\n\
<div class=\"line\">    addAttribute(aMatrixEyeToWorld);</div>\n\
<div class=\"line\">    addAttribute(aDirtyShaderAttr);</div>\n\
<div class=\"line\"></div>\n\
<div class=\"line\">    attributeAffects (aAngle,  aOutColor);</div>\n\
<div class=\"line\">    attributeAffects (aColor1, aOutColor);</div>\n\
<div class=\"line\">    attributeAffects (aColor2, aOutColor);</div>\n\
<div class=\"line\">    attributeAffects (aTriangleNormalCamera,  aOutColor);</div>\n\
<div class=\"line\">    attributeAffects (aDirtyShaderAttr, aOutColor);</div>\n\
<div class=\"line\"></div>\n\
<div class=\"line\">    <span class=\"keywordflow\">return</span> MS::kSuccess;</div>\n\
<div class=\"line\">}</div>\n\
<div class=\"line\"></div>\n\
<div class=\"line\"><a class=\"code\" href=\"#!/url=./cpp_ref/class_m_status.html\">MStatus</a> slopeShaderNode::compute(<span class=\"keyword\">const</span> <a name=\"_a25\"></a><a class=\"code\" href=\"#!/url=./cpp_ref/class_m_plug.html\">MPlug</a> &amp; plug, <a name=\"_a26\"></a><a class=\"code\" href=\"#!/url=./cpp_ref/class_m_data_block.html\">MDataBlock</a> &amp; block )</div>\n\
<div class=\"line\"><span class=\"comment\">//</span></div>\n\
<div class=\"line\"><span class=\"comment\">//  Description:</span></div>\n\
<div class=\"line\"><span class=\"comment\">//      Computes a color value  </span></div>\n\
<div class=\"line\"><span class=\"comment\">//  from a surface noraml angle.</span></div>\n\
<div class=\"line\"><span class=\"comment\">//</span></div>\n\
<div class=\"line\">{ </div>\n\
<div class=\"line\">    <span class=\"keywordflow\">if</span> ((plug != aOutColor) &amp;&amp; (plug.<a name=\"a27\"></a><a class=\"code\" href=\"#!/url=./cpp_ref/class_m_plug.html#aa2338038d1c59dc4d35f37f918aabfab\">parent</a>() != aOutColor))</div>\n\
<div class=\"line\">        <span class=\"keywordflow\">return</span> MS::kUnknownParameter;</div>\n\
<div class=\"line\"></div>\n\
<div class=\"line\">    <a name=\"_a28\"></a><a class=\"code\" href=\"#!/url=./cpp_ref/class_m_float_vector.html\">MFloatVector</a> resultColor;</div>\n\
<div class=\"line\"></div>\n\
<div class=\"line\">    <a class=\"code\" href=\"#!/url=./cpp_ref/class_m_float_vector.html\">MFloatVector</a>&amp;  walkable = block.<a name=\"a29\"></a><a class=\"code\" href=\"#!/url=./cpp_ref/class_m_data_block.html#af4a356799acd4ed070d372ed7cfb4706\">inputValue</a>( aColor1 ).<a name=\"a30\"></a><a class=\"code\" href=\"#!/url=./cpp_ref/class_m_data_handle.html#a5e7d49f6ed0e237f1e9e43b639f06d07\">asFloatVector</a>();</div>\n\
<div class=\"line\">    <a class=\"code\" href=\"#!/url=./cpp_ref/class_m_float_vector.html\">MFloatVector</a>&amp;  nonWalkable = block.<a class=\"code\" href=\"#!/url=./cpp_ref/class_m_data_block.html#af4a356799acd4ed070d372ed7cfb4706\">inputValue</a>( aColor2 ).<a class=\"code\" href=\"#!/url=./cpp_ref/class_m_data_handle.html#a5e7d49f6ed0e237f1e9e43b639f06d07\">asFloatVector</a>();</div>\n\
<div class=\"line\">    <a class=\"code\" href=\"#!/url=./cpp_ref/class_m_float_vector.html\">MFloatVector</a>&amp;  surfaceNormal = block.<a class=\"code\" href=\"#!/url=./cpp_ref/class_m_data_block.html#af4a356799acd4ed070d372ed7cfb4706\">inputValue</a>( aTriangleNormalCamera ).<a class=\"code\" href=\"#!/url=./cpp_ref/class_m_data_handle.html#a5e7d49f6ed0e237f1e9e43b639f06d07\">asFloatVector</a>();</div>\n\
<div class=\"line\">    <a name=\"_a31\"></a><a class=\"code\" href=\"#!/url=./cpp_ref/class_m_float_matrix.html\">MFloatMatrix</a>&amp;  viewMatrix = block.<a class=\"code\" href=\"#!/url=./cpp_ref/class_m_data_block.html#af4a356799acd4ed070d372ed7cfb4706\">inputValue</a>( aMatrixEyeToWorld ).<a name=\"a32\"></a><a class=\"code\" href=\"#!/url=./cpp_ref/class_m_data_handle.html#aea27b6b09ef902f4f35d8c52a15d91f6\">asFloatMatrix</a>();</div>\n\
<div class=\"line\">    <span class=\"keywordtype\">float</span> angle = block.<a class=\"code\" href=\"#!/url=./cpp_ref/class_m_data_block.html#af4a356799acd4ed070d372ed7cfb4706\">inputValue</a>( aAngle ).<a name=\"a33\"></a><a class=\"code\" href=\"#!/url=./cpp_ref/class_m_data_handle.html#a43df510424a7de372dd130315d9f223c\">asFloat</a>();</div>\n\
<div class=\"line\"></div>\n\
<div class=\"line\">    <span class=\"comment\">// Normalize the view vector</span></div>\n\
<div class=\"line\">    <span class=\"comment\">//</span></div>\n\
<div class=\"line\">    surfaceNormal.<a name=\"a34\"></a><a class=\"code\" href=\"#!/url=./cpp_ref/class_m_float_vector.html#ab66b0c7697d96a278da9bca810f4dee1\">normalize</a>();</div>\n\
<div class=\"line\">    <a class=\"code\" href=\"#!/url=./cpp_ref/class_m_float_vector.html\">MFloatVector</a> WSVector = surfaceNormal * viewMatrix;</div>\n\
<div class=\"line\">    </div>\n\
<div class=\"line\">    <span class=\"comment\">// find dot product</span></div>\n\
<div class=\"line\">    <span class=\"comment\">//</span></div>\n\
<div class=\"line\">    <span class=\"keywordtype\">float</span> scalarNormal = WSVector * <a class=\"code\" href=\"#!/url=./cpp_ref/class_m_float_vector.html\">MFloatVector</a>(0, 1, 0);</div>\n\
<div class=\"line\"></div>\n\
<div class=\"line\">    <span class=\"comment\">// take the absolute value</span></div>\n\
<div class=\"line\">    <span class=\"comment\">//</span></div>\n\
<div class=\"line\">    <span class=\"keywordflow\">if</span> (scalarNormal &lt; 0.0) scalarNormal *= -1.0;</div>\n\
<div class=\"line\"></div>\n\
<div class=\"line\">    <span class=\"keywordflow\">if</span>(cos(angle*AWdegreesToRadians) &lt; scalarNormal)</div>\n\
<div class=\"line\">        resultColor = walkable;</div>\n\
<div class=\"line\">    <span class=\"keywordflow\">else</span></div>\n\
<div class=\"line\">        resultColor = nonWalkable;</div>\n\
<div class=\"line\"></div>\n\
<div class=\"line\">    <span class=\"comment\">// set ouput color attribute</span></div>\n\
<div class=\"line\">    <span class=\"comment\">//</span></div>\n\
<div class=\"line\">    <a name=\"_a35\"></a><a class=\"code\" href=\"#!/url=./cpp_ref/class_m_data_handle.html\">MDataHandle</a> outColorHandle = block.<a name=\"a36\"></a><a class=\"code\" href=\"#!/url=./cpp_ref/class_m_data_block.html#a5e4082d6ab961bee4ec0281676bb4834\">outputValue</a>( aOutColor );</div>\n\
<div class=\"line\">    <a class=\"code\" href=\"#!/url=./cpp_ref/class_m_float_vector.html\">MFloatVector</a>&amp; outColor = outColorHandle.<a class=\"code\" href=\"#!/url=./cpp_ref/class_m_data_handle.html#a5e7d49f6ed0e237f1e9e43b639f06d07\">asFloatVector</a>();</div>\n\
<div class=\"line\">    outColor = resultColor;</div>\n\
<div class=\"line\">    outColorHandle.<a name=\"a37\"></a><a class=\"code\" href=\"#!/url=./cpp_ref/class_m_data_handle.html#a7bdd61b8405188bb547fdba3fddace91\">setClean</a>();</div>\n\
<div class=\"line\"></div>\n\
<div class=\"line\">    <span class=\"keywordflow\">return</span> MS::kSuccess;</div>\n\
<div class=\"line\">}</div>\n\
<div class=\"line\"></div>\n\
<div class=\"line\"><span class=\"comment\">// =====================================================================</span></div>\n\
<div class=\"line\"><span class=\"comment\">// Copyright 2018 Autodesk, Inc.  All rights reserved.</span></div>\n\
<div class=\"line\"><span class=\"comment\">//</span></div>\n\
<div class=\"line\"><span class=\"comment\">// This computer source code  and related  instructions and comments are</span></div>\n\
<div class=\"line\"><span class=\"comment\">// the unpublished confidential and proprietary information of Autodesk,</span></div>\n\
<div class=\"line\"><span class=\"comment\">// Inc. and are  protected  under applicable  copyright and trade secret</span></div>\n\
<div class=\"line\"><span class=\"comment\">// law. They may not  be disclosed to, copied or used by any third party</span></div>\n\
<div class=\"line\"><span class=\"comment\">// without the prior written consent of Autodesk, Inc.</span></div>\n\
<div class=\"line\"><span class=\"comment\">// =====================================================================</span></div>\n\
</div><!-- fragment --> </div><!-- contents -->\n\
</div><!-- doc-content -->\n\
<!-- start footer part -->\n\
\n\
      <div class=\"footer-block\"><a href=\"../html/ac.cmtdialog.htm\" class=\"comments-anchor\" target=\"_blank\"><span class=\"comments-link\">Please send us your comment about this page</span></a></div></div>\n\
   </div></body>\n\
</html>\n\
";