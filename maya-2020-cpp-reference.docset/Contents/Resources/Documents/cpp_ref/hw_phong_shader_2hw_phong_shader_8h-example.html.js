var topic = "<!-- saved from url=(0024)http://docs.autodesk.com -->\n\
<html>\n\
   <head><script src=\"../scripts/yepnope.1.5.4-min.js\" type=\"text/javascript\"></script><script src=\"../scripts/lib/jquery-1.11.1.min.js\" type=\"text/javascript\"></script>\n\
      <title>C++ API Reference: hwPhongShader/hwPhongShader.h</title>\n\
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
    cpp_ref_adsk_ref_toc.initNavTree(\'hw_phong_shader_2hw_phong_shader_8h-example.html\', tocPrefix);\n\
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
            <h1>C++ API Reference: hwPhongShader/hwPhongShader.h</h1>\n\
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
<div class=\"title\">hwPhongShader/hwPhongShader.h</div>  </div>\n\
</div><!--header-->\n\
<div class=\"contents\">\n\
<div class=\"fragment\"><div class=\"line\"><span class=\"preprocessor\">#ifndef _hwPhongShader</span></div>\n\
<div class=\"line\"><span class=\"preprocessor\">#define _hwPhongShader</span></div>\n\
<div class=\"line\"></div>\n\
<div class=\"line\"><span class=\"comment\">//-</span></div>\n\
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
<div class=\"line\"></div>\n\
<div class=\"line\"><span class=\"comment\">//</span></div>\n\
<div class=\"line\"><span class=\"comment\">// NOTE: PLEASE READ THE README.TXT FILE FOR INSTRUCTIONS ON</span></div>\n\
<div class=\"line\"><span class=\"comment\">// COMPILING AND USAGE REQUIREMENTS.</span></div>\n\
<div class=\"line\"><span class=\"comment\">//</span></div>\n\
<div class=\"line\"><span class=\"comment\">// DESCRIPTION: </span></div>\n\
<div class=\"line\"><span class=\"comment\">//</span></div>\n\
<div class=\"line\"><span class=\"comment\">// Simple node that implements Phong shading for the special</span></div>\n\
<div class=\"line\"><span class=\"comment\">// case when the light is at the eye. We use a simple</span></div>\n\
<div class=\"line\"><span class=\"comment\">// spherical reflection environment map to compute the Phong</span></div>\n\
<div class=\"line\"><span class=\"comment\">// highlight</span></div>\n\
<div class=\"line\"><span class=\"comment\">//</span></div>\n\
<div class=\"line\"><span class=\"comment\"></span></div>\n\
<div class=\"line\"><span class=\"preprocessor\">#include &lt;maya/MPxHwShaderNode.h&gt;</span></div>\n\
<div class=\"line\"><span class=\"preprocessor\">#include &lt;maya/MPoint.h&gt;</span></div>\n\
<div class=\"line\"></div>\n\
<div class=\"line\"><span class=\"comment\">// For swatch rendering</span></div>\n\
<div class=\"line\"><span class=\"preprocessor\">#include &lt;maya/MHardwareRenderer.h&gt;</span></div>\n\
<div class=\"line\"><span class=\"preprocessor\">#include &lt;maya/MGeometryData.h&gt;</span></div>\n\
<div class=\"line\"></div>\n\
<div class=\"line\"><span class=\"keyword\">class </span>hwPhongShader : <span class=\"keyword\">public</span> <a name=\"_a0\"></a><a class=\"code\" href=\"#!/url=./cpp_ref/class_m_px_hw_shader_node.html\">MPxHwShaderNode</a></div>\n\
<div class=\"line\">{</div>\n\
<div class=\"line\"><span class=\"keyword\">public</span>:</div>\n\
<div class=\"line\">    hwPhongShader();</div>\n\
<div class=\"line\">    ~hwPhongShader() <span class=\"keyword\">override</span>;</div>\n\
<div class=\"line\"></div>\n\
<div class=\"line\">    <a name=\"_a1\"></a><a class=\"code\" href=\"#!/url=./cpp_ref/class_m_status.html\">MStatus</a> <a name=\"a2\"></a><a class=\"code\" href=\"#!/url=./cpp_ref/class_m_px_node.html#a6e1aa1e50774080d5aee55f20ffa5503\">compute</a>( <span class=\"keyword\">const</span> <a name=\"_a3\"></a><a class=\"code\" href=\"#!/url=./cpp_ref/class_m_plug.html\">MPlug</a>&amp;, <a name=\"_a4\"></a><a class=\"code\" href=\"#!/url=./cpp_ref/class_m_data_block.html\">MDataBlock</a>&amp; ) <span class=\"keyword\">override</span>;</div>\n\
<div class=\"line\">    SchedulingType <a name=\"a5\"></a><a class=\"code\" href=\"#!/url=./cpp_ref/class_m_px_node.html#a9c9e8bdcf0b5283a027a66a7671b7088\">schedulingType</a>()<span class=\"keyword\"> const override </span>{ <span class=\"keywordflow\">return</span> SchedulingType::kParallel; }</div>\n\
<div class=\"line\"></div>\n\
<div class=\"line\">    <span class=\"comment\">// Internally cached attribute handling routines</span></div>\n\
<div class=\"line\">    <span class=\"keywordtype\">bool</span> <a name=\"a6\"></a><a class=\"code\" href=\"#!/url=./cpp_ref/class_m_px_node.html#aa88f4dd4cfd3e964e0806d6e5b253347\">getInternalValue</a>( <span class=\"keyword\">const</span> <a class=\"code\" href=\"#!/url=./cpp_ref/class_m_plug.html\">MPlug</a>&amp;, <a name=\"_a7\"></a><a class=\"code\" href=\"#!/url=./cpp_ref/class_m_data_handle.html\">MDataHandle</a>&amp; )         <span class=\"keyword\">override</span>;</div>\n\
<div class=\"line\">    <span class=\"keywordtype\">bool</span> <a name=\"a8\"></a><a class=\"code\" href=\"#!/url=./cpp_ref/class_m_px_node.html#a6caab4434e836748680958883564af35\">setInternalValue</a>( <span class=\"keyword\">const</span> <a class=\"code\" href=\"#!/url=./cpp_ref/class_m_plug.html\">MPlug</a>&amp;, <span class=\"keyword\">const</span> <a class=\"code\" href=\"#!/url=./cpp_ref/class_m_data_handle.html\">MDataHandle</a>&amp; )   <span class=\"keyword\">override</span>;</div>\n\
<div class=\"line\"></div>\n\
<div class=\"line\">    <span class=\"comment\">// Overridden to draw an image for swatch rendering.</span></div>\n\
<div class=\"line\"><span class=\"comment\"></span>    <a class=\"code\" href=\"#!/url=./cpp_ref/class_m_status.html\">MStatus</a> <a name=\"a9\"></a><a class=\"code\" href=\"#!/url=./cpp_ref/class_m_px_hw_shader_node.html#a765f8d7c0499e87180ff884b6967550e\">renderSwatchImage</a>( <a name=\"_a10\"></a><a class=\"code\" href=\"#!/url=./cpp_ref/class_m_image.html\">MImage</a> &amp; image ) <span class=\"keyword\">override</span>;</div>\n\
<div class=\"line\"></div>\n\
<div class=\"line\">    <span class=\"keywordtype\">int</span>     <a name=\"a11\"></a><a class=\"code\" href=\"#!/url=./cpp_ref/class_m_px_hw_shader_node.html#af3550674237dc92887354c8c1aab7367\">normalsPerVertex</a>() <span class=\"keyword\">override</span>;</div>\n\
<div class=\"line\">    <span class=\"keywordtype\">int</span>     <a name=\"a12\"></a><a class=\"code\" href=\"#!/url=./cpp_ref/class_m_px_hw_shader_node.html#a4ad8d328c883db5ee4e4141840c76394\">texCoordsPerVertex</a>() <span class=\"keyword\">override</span>;</div>\n\
<div class=\"line\">    <span class=\"keywordtype\">int</span>     <a name=\"a13\"></a><a class=\"code\" href=\"#!/url=./cpp_ref/class_m_px_hw_shader_node.html#a113794c8b72392d371b6f7b193d80cda\">getTexCoordSetNames</a>(<a name=\"_a14\"></a><a class=\"code\" href=\"#!/url=./cpp_ref/class_m_string_array.html\">MStringArray</a>&amp; names) <span class=\"keyword\">override</span>;</div>\n\
<div class=\"line\"></div>\n\
<div class=\"line\">    <span class=\"keywordtype\">bool</span>    <a name=\"a15\"></a><a class=\"code\" href=\"#!/url=./cpp_ref/class_m_px_hw_shader_node.html#a48045e919e9cafe71b7883de1c4875de\">hasTransparency</a>() <span class=\"keyword\">override</span>;</div>\n\
<div class=\"line\"></div>\n\
<div class=\"line\">    <span class=\"keywordtype\">bool</span>    <a name=\"a16\"></a><a class=\"code\" href=\"#!/url=./cpp_ref/class_m_px_hw_shader_node.html#ac8569dc0556726f17320788563f034c6\">provideVertexIDs</a>() <span class=\"keyword\">override</span>;</div>\n\
<div class=\"line\">    <span class=\"keywordtype\">bool</span>    <a name=\"a17\"></a><a class=\"code\" href=\"#!/url=./cpp_ref/class_m_px_hw_shader_node.html#afa61effad561b9564e161fe930bd038c\">provideFaceIDs</a>() <span class=\"keyword\">override</span>;</div>\n\
<div class=\"line\">    <span class=\"keywordtype\">bool</span>    <a name=\"a18\"></a><a class=\"code\" href=\"#!/url=./cpp_ref/class_m_px_hw_shader_node.html#a276892ea9def000206de6522deccc137\">provideLocalUVCoord</a>() <span class=\"keyword\">override</span>;</div>\n\
<div class=\"line\"></div>\n\
<div class=\"line\">    <span class=\"keyword\">static</span>  <span class=\"keywordtype\">void</span> *  creator();</div>\n\
<div class=\"line\">    <span class=\"keyword\">static</span>  <a class=\"code\" href=\"#!/url=./cpp_ref/class_m_status.html\">MStatus</a> initialize();</div>\n\
<div class=\"line\"></div>\n\
<div class=\"line\">    <span class=\"keywordtype\">float</span>           Transparency()<span class=\"keyword\"> const </span>{ <span class=\"keywordflow\">return</span> mTransparency; }</div>\n\
<div class=\"line\">    <span class=\"keyword\">const</span> float3 *  Ambient()<span class=\"keyword\"> const </span>{ <span class=\"keywordflow\">return</span> &amp;mAmbientColor; }</div>\n\
<div class=\"line\">    <span class=\"keyword\">const</span> float3 *  Diffuse()<span class=\"keyword\"> const </span>{ <span class=\"keywordflow\">return</span> &amp;mDiffuseColor; }</div>\n\
<div class=\"line\">    <span class=\"keyword\">const</span> float3 *  Specular()<span class=\"keyword\"> const </span>{ <span class=\"keywordflow\">return</span> &amp;mSpecularColor; }</div>\n\
<div class=\"line\">    <span class=\"keyword\">const</span> float3 *  Shininess()<span class=\"keyword\"> const </span>{ <span class=\"keywordflow\">return</span> &amp;mShininess; }</div>\n\
<div class=\"line\"></div>\n\
<div class=\"line\">    <span class=\"keywordtype\">void</span> setTransparency(<span class=\"keyword\">const</span> <span class=\"keywordtype\">float</span> fTransparency);</div>\n\
<div class=\"line\">    <span class=\"keywordtype\">void</span> setAmbient(<span class=\"keyword\">const</span> float3 &amp;fAmbient);</div>\n\
<div class=\"line\">    <span class=\"keywordtype\">void</span> setDiffuse(<span class=\"keyword\">const</span> float3 &amp;fDiffuse);</div>\n\
<div class=\"line\">    <span class=\"keywordtype\">void</span> setSpecular(<span class=\"keyword\">const</span> float3 &amp;fSpecular);</div>\n\
<div class=\"line\">    <span class=\"keywordtype\">void</span> setShininess(<span class=\"keyword\">const</span> float3 &amp;fShininess);</div>\n\
<div class=\"line\"></div>\n\
<div class=\"line\">    <span class=\"keywordtype\">void</span>            printGlError( <span class=\"keyword\">const</span> <span class=\"keywordtype\">char</span> *call );</div>\n\
<div class=\"line\"></div>\n\
<div class=\"line\">    <span class=\"keywordtype\">bool</span>            attributesChangedVP2() { <span class=\"keywordflow\">return</span> mAttributesChangedVP2; }</div>\n\
<div class=\"line\">    <span class=\"keywordtype\">void</span>            markAttributesChangedVP2() { mAttributesChangedVP2 = <span class=\"keyword\">true</span>; }</div>\n\
<div class=\"line\">    <span class=\"keywordtype\">void</span>            markAttributesCleanVP2() { mAttributesChangedVP2 = <span class=\"keyword\">false</span>; }</div>\n\
<div class=\"line\"></div>\n\
<div class=\"line\">    <span class=\"keyword\">static</span>  <a name=\"_a19\"></a><a class=\"code\" href=\"#!/url=./cpp_ref/class_m_type_id.html\">MTypeId</a> id;</div>\n\
<div class=\"line\"></div>\n\
<div class=\"line\"><span class=\"keyword\">private</span>:</div>\n\
<div class=\"line\">    <span class=\"comment\">// Attributes</span></div>\n\
<div class=\"line\">    <span class=\"keyword\">static</span> <a name=\"_a20\"></a><a class=\"code\" href=\"#!/url=./cpp_ref/class_m_object.html\">MObject</a>  aColor;</div>\n\
<div class=\"line\">    <span class=\"keyword\">static</span> <a class=\"code\" href=\"#!/url=./cpp_ref/class_m_object.html\">MObject</a>  aDiffuseColor;</div>\n\
<div class=\"line\">    <span class=\"keyword\">static</span> <a class=\"code\" href=\"#!/url=./cpp_ref/class_m_object.html\">MObject</a>  aSpecularColor;</div>\n\
<div class=\"line\">    <span class=\"keyword\">static</span> <a class=\"code\" href=\"#!/url=./cpp_ref/class_m_object.html\">MObject</a>  aShininessX;</div>\n\
<div class=\"line\">    <span class=\"keyword\">static</span> <a class=\"code\" href=\"#!/url=./cpp_ref/class_m_object.html\">MObject</a>  aShininessY;</div>\n\
<div class=\"line\">    <span class=\"keyword\">static</span> <a class=\"code\" href=\"#!/url=./cpp_ref/class_m_object.html\">MObject</a>  aShininessZ;</div>\n\
<div class=\"line\">    <span class=\"keyword\">static</span> <a class=\"code\" href=\"#!/url=./cpp_ref/class_m_object.html\">MObject</a>  aShininess;</div>\n\
<div class=\"line\">    <span class=\"keyword\">static</span> <a class=\"code\" href=\"#!/url=./cpp_ref/class_m_object.html\">MObject</a>  aTransparency;</div>\n\
<div class=\"line\">    <span class=\"keyword\">static</span> <a class=\"code\" href=\"#!/url=./cpp_ref/class_m_object.html\">MObject</a>  aGeometryShape;</div>\n\
<div class=\"line\">    </div>\n\
<div class=\"line\">    <a name=\"_a21\"></a><a class=\"code\" href=\"#!/url=./cpp_ref/class_m_point.html\">MPoint</a>          cameraPosWS;</div>\n\
<div class=\"line\"></div>\n\
<div class=\"line\">    float3          mAmbientColor;</div>\n\
<div class=\"line\">    <span class=\"keywordtype\">float</span>           mTransparency;</div>\n\
<div class=\"line\">    float3          mDiffuseColor;</div>\n\
<div class=\"line\">    float3          mSpecularColor;</div>\n\
<div class=\"line\">    float3          mShininess;</div>\n\
<div class=\"line\">    <span class=\"keywordtype\">unsigned</span> <span class=\"keywordtype\">int</span>    mGeometryShape;</div>\n\
<div class=\"line\">    <span class=\"keywordtype\">bool</span>            mAttributesChanged; <span class=\"comment\">// Keep track if any attributes changed</span></div>\n\
<div class=\"line\">    <span class=\"keywordtype\">bool</span>            mAttributesChangedVP2; <span class=\"comment\">// Keep track if any attributes changed for VP2</span></div>\n\
<div class=\"line\">};</div>\n\
<div class=\"line\"></div>\n\
<div class=\"line\"><span class=\"preprocessor\">#endif </span><span class=\"comment\">/* _hwPhongShader */</span><span class=\"preprocessor\"></span></div>\n\
</div><!-- fragment --> </div><!-- contents -->\n\
</div><!-- doc-content -->\n\
<!-- start footer part -->\n\
\n\
      <div class=\"footer-block\"><a href=\"../html/ac.cmtdialog.htm\" class=\"comments-anchor\" target=\"_blank\"><span class=\"comments-link\">Please send us your comment about this page</span></a></div></div>\n\
   </div></body>\n\
</html>\n\
";