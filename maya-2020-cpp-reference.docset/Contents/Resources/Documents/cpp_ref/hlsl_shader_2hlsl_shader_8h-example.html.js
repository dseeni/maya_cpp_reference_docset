var topic = "<!-- saved from url=(0024)http://docs.autodesk.com -->\n\
<html>\n\
   <head><script src=\"../scripts/yepnope.1.5.4-min.js\" type=\"text/javascript\"></script><script src=\"../scripts/lib/jquery-1.11.1.min.js\" type=\"text/javascript\"></script>\n\
      <title>C++ API Reference: hlslShader/hlslShader.h</title>\n\
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
    cpp_ref_adsk_ref_toc.initNavTree(\'hlsl_shader_2hlsl_shader_8h-example.html\', tocPrefix);\n\
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
            <h1>C++ API Reference: hlslShader/hlslShader.h</h1>\n\
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
<div class=\"title\">hlslShader/hlslShader.h</div>  </div>\n\
</div><!--header-->\n\
<div class=\"contents\">\n\
<div class=\"fragment\"><div class=\"line\"><span class=\"preprocessor\">#ifndef _hlslShader_h_</span></div>\n\
<div class=\"line\"><span class=\"preprocessor\">#define _hlslShader_h_</span></div>\n\
<div class=\"line\"><span class=\"comment\">//-</span></div>\n\
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
<div class=\"line\"><span class=\"preprocessor\">#include &lt;maya/MPxCommand.h&gt;</span></div>\n\
<div class=\"line\"><span class=\"preprocessor\">#include &lt;maya/MPxHardwareShader.h&gt;</span></div>\n\
<div class=\"line\"><span class=\"preprocessor\">#include &lt;maya/MTypeId.h&gt;</span> </div>\n\
<div class=\"line\"><span class=\"preprocessor\">#include &lt;maya/MStringArray.h&gt;</span> </div>\n\
<div class=\"line\"><span class=\"preprocessor\">#include &lt;maya/MVaryingParameter.h&gt;</span></div>\n\
<div class=\"line\"><span class=\"preprocessor\">#include &lt;maya/MUniformParameter.h&gt;</span></div>\n\
<div class=\"line\"><span class=\"preprocessor\">#include &lt;maya/MUniformParameterList.h&gt;</span></div>\n\
<div class=\"line\"><span class=\"preprocessor\">#include &lt;maya/MRenderProfile.h&gt;</span></div>\n\
<div class=\"line\"></div>\n\
<div class=\"line\"><span class=\"preprocessor\">#include &lt;maya/MHwrCallback.h&gt;</span></div>\n\
<div class=\"line\"><span class=\"preprocessor\">#include &lt;maya/MModelMessage.h&gt;</span></div>\n\
<div class=\"line\"></div>\n\
<div class=\"line\"><span class=\"preprocessor\">#include &lt;d3d9.h&gt;</span></div>\n\
<div class=\"line\"><span class=\"preprocessor\">#include &lt;d3dx9.h&gt;</span></div>\n\
<div class=\"line\"></div>\n\
<div class=\"line\"><span class=\"comment\">/*</span></div>\n\
<div class=\"line\"><span class=\"comment\">//</span></div>\n\
<div class=\"line\"><span class=\"comment\">// A varying parameter</span></div>\n\
<div class=\"line\"><span class=\"comment\">//</span></div>\n\
<div class=\"line\"><span class=\"comment\">class hlslVaryingParameter </span></div>\n\
<div class=\"line\"><span class=\"comment\">{</span></div>\n\
<div class=\"line\"><span class=\"comment\">public:</span></div>\n\
<div class=\"line\"><span class=\"comment\">    MVaryingParameter   fMayaParameter;</span></div>\n\
<div class=\"line\"><span class=\"comment\">};</span></div>\n\
<div class=\"line\"><span class=\"comment\"></span></div>\n\
<div class=\"line\"><span class=\"comment\"></span></div>\n\
<div class=\"line\"><span class=\"comment\">//</span></div>\n\
<div class=\"line\"><span class=\"comment\">// A pass</span></div>\n\
<div class=\"line\"><span class=\"comment\">//</span></div>\n\
<div class=\"line\"><span class=\"comment\">class hlslPass</span></div>\n\
<div class=\"line\"><span class=\"comment\">{</span></div>\n\
<div class=\"line\"><span class=\"comment\">public:</span></div>\n\
<div class=\"line\"><span class=\"comment\">    inline              hlslPass( 0) : fNumParameters( 0), fParameters( NULL) {}</span></div>\n\
<div class=\"line\"><span class=\"comment\">    inline              ~hlslPass() { if( fParameters) delete fParameters; }</span></div>\n\
<div class=\"line\"><span class=\"comment\">    inline int          numParameters() const { return fNumParameters; }</span></div>\n\
<div class=\"line\"><span class=\"comment\">    inline void         numParameters( int numParms) { if( fParameters) delete fParameters; fNumParameters = numParms; fParameters = numParms ? new hlslVaryingParameter[ numParms] : NULL; }</span></div>\n\
<div class=\"line\"><span class=\"comment\">    inline hlslVaryingParameter&amp; parameter( int p) const { return fParameters[ p]; }</span></div>\n\
<div class=\"line\"><span class=\"comment\"></span></div>\n\
<div class=\"line\"><span class=\"comment\">protected:</span></div>\n\
<div class=\"line\"><span class=\"comment\">    hlslVaryingParameter* fParameters;</span></div>\n\
<div class=\"line\"><span class=\"comment\">    int                 fNumParameters;</span></div>\n\
<div class=\"line\"><span class=\"comment\">};</span></div>\n\
<div class=\"line\"><span class=\"comment\">*/</span></div>\n\
<div class=\"line\"></div>\n\
<div class=\"line\"><span class=\"keyword\">class </span>hlslShader;</div>\n\
<div class=\"line\"></div>\n\
<div class=\"line\"><span class=\"comment\">// Callback structure to handle device changes</span></div>\n\
<div class=\"line\"><span class=\"comment\">//</span></div>\n\
<div class=\"line\"><span class=\"keyword\">class </span>hlslDeviceManager : <span class=\"keyword\">public</span> <a name=\"_a0\"></a><a class=\"code\" href=\"#!/url=./cpp_ref/class_m_hwr_callback.html\">MHwrCallback</a> </div>\n\
<div class=\"line\">{</div>\n\
<div class=\"line\"><span class=\"keyword\">public</span>:</div>\n\
<div class=\"line\">    <span class=\"keyword\">typedef</span> <span class=\"keyword\">enum</span></div>\n\
<div class=\"line\">    {</div>\n\
<div class=\"line\">        kInvalid,</div>\n\
<div class=\"line\">        kReset,</div>\n\
<div class=\"line\">        kValid</div>\n\
<div class=\"line\">    } hlslDeviceState;</div>\n\
<div class=\"line\">    <span class=\"keyword\">inline</span> hlslDeviceManager( hlslShader&amp; shader) : fShader( shader), fState( kValid) { <a name=\"a1\"></a><a class=\"code\" href=\"#!/url=./cpp_ref/class_m_hwr_callback.html#a89455670ecab5d8cfe46ed1e1943415d\">addCallback</a>( <span class=\"keyword\">this</span>); }</div>\n\
<div class=\"line\">    ~hlslDeviceManager() { <a name=\"a2\"></a><a class=\"code\" href=\"#!/url=./cpp_ref/class_m_hwr_callback.html#a3bd9b57cb13e6f168ce91bc5dca5954d\">removeCallback</a>( <span class=\"keyword\">this</span>); }</div>\n\
<div class=\"line\">    <span class=\"keyword\">virtual</span> <span class=\"keywordtype\">void</span> <a name=\"a3\"></a><a class=\"code\" href=\"#!/url=./cpp_ref/class_m_hwr_callback.html#a3252d3ddda1ce16cc70ec872bd6ba500\">deviceNew</a>();   </div>\n\
<div class=\"line\">    <span class=\"keyword\">virtual</span> <span class=\"keywordtype\">void</span> <a name=\"a4\"></a><a class=\"code\" href=\"#!/url=./cpp_ref/class_m_hwr_callback.html#a302e6f42aaa50b435c7287432f6c7988\">deviceLost</a>();</div>\n\
<div class=\"line\">    <span class=\"keyword\">virtual</span> <span class=\"keywordtype\">void</span> <a name=\"a5\"></a><a class=\"code\" href=\"#!/url=./cpp_ref/class_m_hwr_callback.html#aa884576de07a0f3a637191270f490bd1\">deviceReset</a>();</div>\n\
<div class=\"line\">    <span class=\"keyword\">virtual</span> <span class=\"keywordtype\">void</span> <a name=\"a6\"></a><a class=\"code\" href=\"#!/url=./cpp_ref/class_m_hwr_callback.html#a3ae7ee9e49057e1d91837b94fe121e8b\">deviceDeleted</a>();</div>\n\
<div class=\"line\">    <span class=\"keyword\">inline</span> hlslDeviceState  deviceState() { <span class=\"keywordflow\">return</span> fState; }</div>\n\
<div class=\"line\">    <span class=\"keywordtype\">void</span> resetShader();</div>\n\
<div class=\"line\"></div>\n\
<div class=\"line\"><span class=\"keyword\">private</span>:</div>\n\
<div class=\"line\">    <span class=\"comment\">// Hide this bad boy to let the compiler know it shouldn&#39;t be able to generate an assignment operator</span></div>\n\
<div class=\"line\">    <span class=\"keywordtype\">void</span> operator=( <span class=\"keyword\">const</span> hlslDeviceManager&amp;) {};</div>\n\
<div class=\"line\"></div>\n\
<div class=\"line\"><span class=\"keyword\">protected</span>:</div>\n\
<div class=\"line\">    hlslDeviceState fState;</div>\n\
<div class=\"line\">    hlslShader&amp; fShader;</div>\n\
<div class=\"line\">};</div>\n\
<div class=\"line\"></div>\n\
<div class=\"line\"><span class=\"comment\">// Our shader node itself!</span></div>\n\
<div class=\"line\"><span class=\"comment\">//</span></div>\n\
<div class=\"line\"><span class=\"keyword\">class </span>hlslShader : <span class=\"keyword\">public</span> <a name=\"_a7\"></a><a class=\"code\" href=\"#!/url=./cpp_ref/class_m_px_hardware_shader.html\">MPxHardwareShader</a></div>\n\
<div class=\"line\">{</div>\n\
<div class=\"line\"><span class=\"keyword\">public</span>:</div>\n\
<div class=\"line\"></div>\n\
<div class=\"line\">    <span class=\"keyword\">friend</span> <span class=\"keyword\">class </span>hlslDeviceManager;</div>\n\
<div class=\"line\"></div>\n\
<div class=\"line\">    <span class=\"comment\">// PxNode housekeeping: create, copy setup</span></div>\n\
<div class=\"line\">                        hlslShader();</div>\n\
<div class=\"line\">    <span class=\"keywordtype\">void</span> <a name=\"a8\"></a><a class=\"code\" href=\"#!/url=./cpp_ref/class_m_px_node.html#a5c13a6c88a839b5356861d1d09e820d9\">postConstructor</a>()  <span class=\"keyword\">override</span>;</div>\n\
<div class=\"line\">    ~hlslShader         ()  <span class=\"keyword\">override</span>;</div>\n\
<div class=\"line\">    <span class=\"keyword\">static</span>  <span class=\"keywordtype\">void</span>*       creator();</div>\n\
<div class=\"line\">    <span class=\"keyword\">static</span>  <a name=\"_a9\"></a><a class=\"code\" href=\"#!/url=./cpp_ref/class_m_status.html\">MStatus</a>     initialize();</div>\n\
<div class=\"line\">    <span class=\"keyword\">static</span>  <span class=\"keywordtype\">void</span>        initializeNodeAttrs();</div>\n\
<div class=\"line\"></div>\n\
<div class=\"line\">    <span class=\"comment\">// Internal attribute housekeeping</span></div>\n\
<div class=\"line\">    <span class=\"keywordtype\">void</span>        <a name=\"a10\"></a><a class=\"code\" href=\"#!/url=./cpp_ref/class_m_px_node.html#aca0f48b1467c0e3dc8643a18b0b855da\">copyInternalData</a>( <a name=\"_a11\"></a><a class=\"code\" href=\"#!/url=./cpp_ref/class_m_px_node.html\">MPxNode</a>* pSrc )   <span class=\"keyword\">override</span>;</div>\n\
<div class=\"line\">    <span class=\"keywordtype\">bool</span>        <a name=\"a12\"></a><a class=\"code\" href=\"#!/url=./cpp_ref/class_m_px_node.html#aa88f4dd4cfd3e964e0806d6e5b253347\">getInternalValue</a>( <span class=\"keyword\">const</span> <a name=\"_a13\"></a><a class=\"code\" href=\"#!/url=./cpp_ref/class_m_plug.html\">MPlug</a>&amp;, <a name=\"_a14\"></a><a class=\"code\" href=\"#!/url=./cpp_ref/class_m_data_handle.html\">MDataHandle</a>&amp; )          <span class=\"keyword\">override</span>;</div>\n\
<div class=\"line\">    <span class=\"keywordtype\">bool</span>        <a name=\"a15\"></a><a class=\"code\" href=\"#!/url=./cpp_ref/class_m_px_node.html#a6caab4434e836748680958883564af35\">setInternalValue</a>( <span class=\"keyword\">const</span> <a class=\"code\" href=\"#!/url=./cpp_ref/class_m_plug.html\">MPlug</a>&amp;, <span class=\"keyword\">const</span> <a class=\"code\" href=\"#!/url=./cpp_ref/class_m_data_handle.html\">MDataHandle</a>&amp; )    <span class=\"keyword\">override</span>;</div>\n\
<div class=\"line\"></div>\n\
<div class=\"line\">    <span class=\"comment\">// Override geometry rendering</span></div>\n\
<div class=\"line\">    <span class=\"keyword\">virtual</span> <a class=\"code\" href=\"#!/url=./cpp_ref/class_m_status.html\">MStatus</a>     <a name=\"a16\"></a><a class=\"code\" href=\"#!/url=./cpp_ref/class_m_px_hardware_shader.html#ab0b2f571236b629874c940728deb854b\">render</a>( <a name=\"_a17\"></a><a class=\"code\" href=\"#!/url=./cpp_ref/class_m_geometry_list.html\">MGeometryList</a>&amp; iterator);</div>\n\
<div class=\"line\"></div>\n\
<div class=\"line\">    <span class=\"comment\">// Indicate pass transparency options </span></div>\n\
<div class=\"line\">    <span class=\"keyword\">virtual</span> <span class=\"keywordtype\">unsigned</span> <span class=\"keywordtype\">int</span>    <a name=\"a18\"></a><a class=\"code\" href=\"#!/url=./cpp_ref/class_m_px_hardware_shader.html#abf43698ad6309b49f5790bcd11c21239\">transparencyOptions</a>();</div>\n\
<div class=\"line\"></div>\n\
<div class=\"line\">    <span class=\"comment\">// Query the renderers supported by this shader</span></div>\n\
<div class=\"line\">    <span class=\"comment\">//</span></div>\n\
<div class=\"line\">    <span class=\"keyword\">virtual</span> <span class=\"keyword\">const</span> <a name=\"_a19\"></a><a class=\"code\" href=\"#!/url=./cpp_ref/class_m_render_profile.html\">MRenderProfile</a>&amp; <a name=\"a20\"></a><a class=\"code\" href=\"#!/url=./cpp_ref/class_m_px_hardware_shader.html#a269d88f7a24099bc25280475c931e49d\">profile</a>();</div>\n\
<div class=\"line\"></div>\n\
<div class=\"line\">    <span class=\"comment\">// Override this method to draw a image for swatch rendering.</span></div>\n\
<div class=\"line\"><span class=\"comment\"></span>    <span class=\"keyword\">virtual</span> <a class=\"code\" href=\"#!/url=./cpp_ref/class_m_status.html\">MStatus</a> <a name=\"a21\"></a><a class=\"code\" href=\"#!/url=./cpp_ref/class_m_px_hardware_shader.html#a765f8d7c0499e87180ff884b6967550e\">renderSwatchImage</a>( <a name=\"_a22\"></a><a class=\"code\" href=\"#!/url=./cpp_ref/class_m_image.html\">MImage</a> &amp; image );</div>\n\
<div class=\"line\"></div>\n\
<div class=\"line\">    <span class=\"comment\">// Override these method to support texture display in the UV texture editor.</span></div>\n\
<div class=\"line\">    <span class=\"comment\">//</span></div>\n\
<div class=\"line\">    <span class=\"keyword\">virtual</span> <a class=\"code\" href=\"#!/url=./cpp_ref/class_m_status.html\">MStatus</a> <a name=\"a23\"></a><a class=\"code\" href=\"#!/url=./cpp_ref/class_m_px_hardware_shader.html#a81e24ef2548b68ed74555de9ceee1b88\">getAvailableImages</a>( <span class=\"keyword\">const</span> <a name=\"_a24\"></a><a class=\"code\" href=\"#!/url=./cpp_ref/struct_m_px_hardware_shader_1_1_shader_context.html\">MPxHardwareShader::ShaderContext</a> &amp;context,</div>\n\
<div class=\"line\">                                        <span class=\"keyword\">const</span> <a name=\"_a25\"></a><a class=\"code\" href=\"#!/url=./cpp_ref/class_m_string.html\">MString</a> &amp;uvSetName,</div>\n\
<div class=\"line\">                                        <a name=\"_a26\"></a><a class=\"code\" href=\"#!/url=./cpp_ref/class_m_string_array.html\">MStringArray</a> &amp;imageNames );</div>\n\
<div class=\"line\">    <span class=\"keyword\">virtual</span> <a class=\"code\" href=\"#!/url=./cpp_ref/class_m_status.html\">MStatus</a> <a name=\"a27\"></a><a class=\"code\" href=\"#!/url=./cpp_ref/class_m_px_hardware_shader.html#afc0b543d630b77f3019e3759323673f8\">renderImage</a>( <span class=\"keyword\">const</span> <a class=\"code\" href=\"#!/url=./cpp_ref/struct_m_px_hardware_shader_1_1_shader_context.html\">MPxHardwareShader::ShaderContext</a> &amp;context,</div>\n\
<div class=\"line\">                                <span class=\"keyword\">const</span> <a class=\"code\" href=\"#!/url=./cpp_ref/class_m_string.html\">MString</a> &amp;imageName,</div>\n\
<div class=\"line\">                                floatRegion region,</div>\n\
<div class=\"line\">                                <span class=\"keyword\">const</span> <a name=\"_a28\"></a><a class=\"code\" href=\"#!/url=./cpp_ref/struct_m_px_hardware_shader_1_1_render_parameters.html\">MPxHardwareShader::RenderParameters</a>&amp; parameters,</div>\n\
<div class=\"line\">                                <span class=\"keywordtype\">int</span> &amp;imageWidth,</div>\n\
<div class=\"line\">                                <span class=\"keywordtype\">int</span> &amp;imageHeight );</div>\n\
<div class=\"line\">    <span class=\"keyword\">virtual</span> <a class=\"code\" href=\"#!/url=./cpp_ref/class_m_status.html\">MStatus</a> <a class=\"code\" href=\"#!/url=./cpp_ref/class_m_px_hardware_shader.html#afc0b543d630b77f3019e3759323673f8\">renderImage</a>( <span class=\"keyword\">const</span> <a class=\"code\" href=\"#!/url=./cpp_ref/struct_m_px_hardware_shader_1_1_shader_context.html\">MPxHardwareShader::ShaderContext</a> &amp;context,</div>\n\
<div class=\"line\">                                <a name=\"_a29\"></a><a class=\"code\" href=\"#!/url=./cpp_ref/class_m_h_w_render_1_1_m_u_i_draw_manager.html\">MHWRender::MUIDrawManager</a>&amp; uiDrawManager,</div>\n\
<div class=\"line\">                                <span class=\"keyword\">const</span> <a class=\"code\" href=\"#!/url=./cpp_ref/class_m_string.html\">MString</a>&amp; imageName, floatRegion region,</div>\n\
<div class=\"line\">                                <span class=\"keyword\">const</span> <a class=\"code\" href=\"#!/url=./cpp_ref/struct_m_px_hardware_shader_1_1_render_parameters.html\">MPxHardwareShader::RenderParameters</a>&amp; parameters,</div>\n\
<div class=\"line\">                                <span class=\"keywordtype\">int</span> &amp;imageWidth,</div>\n\
<div class=\"line\">                                <span class=\"keywordtype\">int</span> &amp;imageHeight );</div>\n\
<div class=\"line\"></div>\n\
<div class=\"line\"></div>\n\
<div class=\"line\">    <span class=\"comment\">// UVLink utility</span></div>\n\
<div class=\"line\">    <span class=\"comment\">//</span></div>\n\
<div class=\"line\">    <a class=\"code\" href=\"#!/url=./cpp_ref/class_m_status.html\">MStatus</a> uvLinks( <span class=\"keyword\">const</span> <a class=\"code\" href=\"#!/url=./cpp_ref/class_m_string.html\">MString</a>&amp; varyingParamName, <a class=\"code\" href=\"#!/url=./cpp_ref/class_m_string_array.html\">MStringArray</a>&amp; uniformTextureNames );</div>\n\
<div class=\"line\"></div>\n\
<div class=\"line\"><span class=\"keyword\">public</span>:</div>\n\
<div class=\"line\"></div>\n\
<div class=\"line\">    <span class=\"comment\">// Release all our device handles</span></div>\n\
<div class=\"line\">    <span class=\"keywordtype\">void</span>                release();</div>\n\
<div class=\"line\">    </div>\n\
<div class=\"line\">    <span class=\"comment\">// The typeid is a unique 32bit indentifier that describes this node.</span></div>\n\
<div class=\"line\">    <span class=\"comment\">// It is used to save and retrieve nodes of this type from the binary</span></div>\n\
<div class=\"line\">    <span class=\"comment\">// file format.  If it is not unique, it will cause file IO problems.</span></div>\n\
<div class=\"line\">    <span class=\"comment\">//</span></div>\n\
<div class=\"line\">    <span class=\"keyword\">static</span>  <a name=\"_a30\"></a><a class=\"code\" href=\"#!/url=./cpp_ref/class_m_type_id.html\">MTypeId</a> sId;</div>\n\
<div class=\"line\"></div>\n\
<div class=\"line\">    <span class=\"comment\">// Our rendering profile</span></div>\n\
<div class=\"line\">    <span class=\"comment\">//</span></div>\n\
<div class=\"line\">    <span class=\"keyword\">static</span> <a class=\"code\" href=\"#!/url=./cpp_ref/class_m_render_profile.html\">MRenderProfile</a> sProfile;</div>\n\
<div class=\"line\"></div>\n\
<div class=\"line\">    <span class=\"comment\">// There needs to be a MObject handle declared for each attribute that</span></div>\n\
<div class=\"line\">    <span class=\"comment\">// the node will have.  These handles are needed for getting and setting</span></div>\n\
<div class=\"line\">    <span class=\"comment\">// the values later.</span></div>\n\
<div class=\"line\">    <span class=\"comment\">//</span></div>\n\
<div class=\"line\">    <span class=\"comment\">// Input shader attribute</span></div>\n\
<div class=\"line\">    <span class=\"comment\">//</span></div>\n\
<div class=\"line\">    <span class=\"keyword\">static</span>  <a name=\"_a31\"></a><a class=\"code\" href=\"#!/url=./cpp_ref/class_m_object.html\">MObject</a> sShader;</div>\n\
<div class=\"line\">    <span class=\"keyword\">static</span>  <a class=\"code\" href=\"#!/url=./cpp_ref/class_m_object.html\">MObject</a> sTechnique;</div>\n\
<div class=\"line\">    <span class=\"keyword\">static</span>  <a class=\"code\" href=\"#!/url=./cpp_ref/class_m_object.html\">MObject</a> sTechniques;</div>\n\
<div class=\"line\">    <span class=\"keyword\">static</span>  <a class=\"code\" href=\"#!/url=./cpp_ref/class_m_object.html\">MObject</a> sDescription;</div>\n\
<div class=\"line\">    <span class=\"keyword\">static</span>  <a class=\"code\" href=\"#!/url=./cpp_ref/class_m_object.html\">MObject</a> sDiagnostics;</div>\n\
<div class=\"line\">    </div>\n\
<div class=\"line\"><span class=\"keyword\">protected</span>:</div>\n\
<div class=\"line\"></div>\n\
<div class=\"line\">    <span class=\"comment\">// Change the shader or technique we&#39;re using</span></div>\n\
<div class=\"line\">    <a class=\"code\" href=\"#!/url=./cpp_ref/class_m_status.html\">MStatus</a>         setShader( <span class=\"keyword\">const</span> <a class=\"code\" href=\"#!/url=./cpp_ref/class_m_string.html\">MString</a>&amp; shader);</div>\n\
<div class=\"line\">    <a class=\"code\" href=\"#!/url=./cpp_ref/class_m_status.html\">MStatus</a>         setTechnique( <span class=\"keyword\">const</span> <a class=\"code\" href=\"#!/url=./cpp_ref/class_m_string.html\">MString</a>&amp; technique);</div>\n\
<div class=\"line\">    <span class=\"keywordtype\">bool</span>            passHasTranparency( D3DXHANDLE passHandle ); </div>\n\
<div class=\"line\"></div>\n\
<div class=\"line\">    <span class=\"comment\">// Resource management</span></div>\n\
<div class=\"line\">    hlslDeviceManager   fDeviceManager;</div>\n\
<div class=\"line\">    <span class=\"keywordtype\">void</span>            releaseVertexDeclaration();</div>\n\
<div class=\"line\"></div>\n\
<div class=\"line\">    <span class=\"comment\">// Values of internal attributes</span></div>\n\
<div class=\"line\">    <a class=\"code\" href=\"#!/url=./cpp_ref/class_m_string.html\">MString</a>         fShader;</div>\n\
<div class=\"line\">    <a class=\"code\" href=\"#!/url=./cpp_ref/class_m_string.html\">MString</a>         fTechnique;</div>\n\
<div class=\"line\">    <a class=\"code\" href=\"#!/url=./cpp_ref/class_m_string_array.html\">MStringArray</a>    fTechniques;</div>\n\
<div class=\"line\"></div>\n\
<div class=\"line\">    <span class=\"comment\">// The current daignostics/description strings</span></div>\n\
<div class=\"line\">    <a class=\"code\" href=\"#!/url=./cpp_ref/class_m_string.html\">MString</a>         fDescription;</div>\n\
<div class=\"line\">    <a class=\"code\" href=\"#!/url=./cpp_ref/class_m_string.html\">MString</a>         fDiagnostics;</div>\n\
<div class=\"line\"></div>\n\
<div class=\"line\">    <span class=\"comment\">// D3D resources</span></div>\n\
<div class=\"line\">    LPD3DXEFFECT    fD3DEffect;</div>\n\
<div class=\"line\">    D3DXHANDLE      fD3DTechnique;</div>\n\
<div class=\"line\">    D3DXEFFECT_DESC fD3DEffectDesc;</div>\n\
<div class=\"line\">    D3DXTECHNIQUE_DESC fD3DTechniqueDesc;</div>\n\
<div class=\"line\"></div>\n\
<div class=\"line\"></div>\n\
<div class=\"line\">    <span class=\"comment\">// The current set of parameters</span></div>\n\
<div class=\"line\">    <a name=\"_a32\"></a><a class=\"code\" href=\"#!/url=./cpp_ref/class_m_varying_parameter.html\">MVaryingParameter</a> fVertexStructure;</div>\n\
<div class=\"line\">    IDirect3DVertexDeclaration9** fD3DVertexDeclaration;</div>\n\
<div class=\"line\">    <a name=\"_a33\"></a><a class=\"code\" href=\"#!/url=./cpp_ref/class_m_uniform_parameter_list.html\">MUniformParameterList</a> fUniformParameters;</div>\n\
<div class=\"line\">    <span class=\"keywordtype\">bool</span>                  fTechniqueHasBlending;</div>\n\
<div class=\"line\"></div>\n\
<div class=\"line\">    <span class=\"comment\">// Utilities for converting D3D -&gt; Maya</span></div>\n\
<div class=\"line\">    <span class=\"keywordtype\">void</span>            setupUniform( D3DXHANDLE d3dParameter, <span class=\"keyword\">const</span> <a class=\"code\" href=\"#!/url=./cpp_ref/class_m_string.html\">MString</a>&amp; prefix);</div>\n\
<div class=\"line\">    <span class=\"keywordtype\">bool</span>            GetAnnotation( D3DXHANDLE parameter, <span class=\"keyword\">const</span> <span class=\"keywordtype\">char</span>* name, LPCSTR&amp; value);</div>\n\
<div class=\"line\">    <span class=\"keywordtype\">bool</span>            GetBOOLAnnotation( D3DXHANDLE parameter, <span class=\"keyword\">const</span> <span class=\"keywordtype\">char</span>* name, BOOL&amp; value);</div>\n\
<div class=\"line\">    <span class=\"keywordtype\">bool</span>            GetAnnotation( D3DXHANDLE parameter, <span class=\"keyword\">const</span> <span class=\"keywordtype\">char</span>* name, <span class=\"keywordtype\">float</span>&amp; value);</div>\n\
<div class=\"line\">    <span class=\"keywordtype\">bool</span>            GetAnnotation( D3DXHANDLE parameter, <span class=\"keyword\">const</span> <span class=\"keywordtype\">char</span>* name, <span class=\"keywordtype\">int</span>&amp; value);</div>\n\
<div class=\"line\">    MUniformParameter::DataSemantic ConvertSemantic( D3DXHANDLE parameter, D3DXPARAMETER_DESC&amp; description);</div>\n\
<div class=\"line\">    MUniformParameter::DataType     ConvertType( D3DXHANDLE parameter, D3DXPARAMETER_DESC&amp; description);</div>\n\
<div class=\"line\">    MUniformParameter::DataSemantic ConvertSpace( D3DXHANDLE parameter, D3DXPARAMETER_DESC&amp; description, MUniformParameter::DataSemantic defaultSpace);</div>\n\
<div class=\"line\"></div>\n\
<div class=\"line\">    <span class=\"keywordtype\">void</span>            updateUIVisibilityFromAnnotation( D3DXHANDLE d3dParameter, <a name=\"_a34\"></a><a class=\"code\" href=\"#!/url=./cpp_ref/class_m_uniform_parameter.html\">MUniformParameter</a>&amp; uniform);</div>\n\
<div class=\"line\">    <span class=\"keywordtype\">void</span>            updateRangeFromAnnotation( D3DXHANDLE d3dParameter, <a class=\"code\" href=\"#!/url=./cpp_ref/class_m_uniform_parameter.html\">MUniformParameter</a>&amp; uniform);</div>\n\
<div class=\"line\"></div>\n\
<div class=\"line\">    <span class=\"comment\">// Ummm ... don&#39;t ask</span></div>\n\
<div class=\"line\">    <span class=\"keyword\">inline</span> hlslShader&amp; me() { <span class=\"keywordflow\">return</span> *<span class=\"keyword\">this</span>; }</div>\n\
<div class=\"line\"></div>\n\
<div class=\"line\">    <span class=\"comment\">// Housekeeping</span></div>\n\
<div class=\"line\">    <span class=\"keywordtype\">int</span>             fErrorCount;</div>\n\
<div class=\"line\">    <span class=\"keywordtype\">void</span>            reportInternalError( <span class=\"keyword\">const</span> <span class=\"keywordtype\">char</span>* <span class=\"keyword\">function</span>, <span class=\"keywordtype\">size_t</span> errcode );</div>\n\
<div class=\"line\"></div>\n\
<div class=\"line\">    <span class=\"comment\">// Handle node duplication</span></div>\n\
<div class=\"line\">    <span class=\"keyword\">static</span> <span class=\"keywordtype\">void</span> postDuplicateCB(<span class=\"keywordtype\">void</span>* data);</div>\n\
<div class=\"line\">    MCallbackId     fPostDuplicateCallbackId;</div>\n\
<div class=\"line\">};</div>\n\
<div class=\"line\"></div>\n\
<div class=\"line\"><span class=\"keyword\">class </span>hlslShaderCmd : <a name=\"_a35\"></a><a class=\"code\" href=\"#!/url=./cpp_ref/class_m_px_command.html\">MPxCommand</a></div>\n\
<div class=\"line\">{</div>\n\
<div class=\"line\"><span class=\"keyword\">public</span>:</div>\n\
<div class=\"line\">                        hlslShaderCmd();</div>\n\
<div class=\"line\">    <span class=\"keyword\">virtual</span>             ~hlslShaderCmd();</div>\n\
<div class=\"line\"></div>\n\
<div class=\"line\">    <a class=\"code\" href=\"#!/url=./cpp_ref/class_m_status.html\">MStatus</a>             <a name=\"a36\"></a><a class=\"code\" href=\"#!/url=./cpp_ref/class_m_px_command.html#ade7d0a873cbe811d6eab464e695390a9\">doIt</a>( <span class=\"keyword\">const</span> <a name=\"_a37\"></a><a class=\"code\" href=\"#!/url=./cpp_ref/class_m_arg_list.html\">MArgList</a>&amp; );</div>\n\
<div class=\"line\">    <span class=\"keywordtype\">bool</span>                <a name=\"a38\"></a><a class=\"code\" href=\"#!/url=./cpp_ref/class_m_px_command.html#a2f6c567cc02d575ab14006d9c5e37761\">isUndoable</a>() { <span class=\"keywordflow\">return</span> <span class=\"keyword\">false</span>; }</div>\n\
<div class=\"line\"></div>\n\
<div class=\"line\">    <span class=\"keyword\">static</span> <a name=\"_a39\"></a><a class=\"code\" href=\"#!/url=./cpp_ref/class_m_syntax.html\">MSyntax</a>      newSyntax();</div>\n\
<div class=\"line\">    <span class=\"keyword\">static</span> <span class=\"keywordtype\">void</span>*        creator();</div>\n\
<div class=\"line\">};</div>\n\
<div class=\"line\"></div>\n\
<div class=\"line\"><span class=\"preprocessor\">#endif </span><span class=\"comment\">/* _hlslShader_h_ */</span><span class=\"preprocessor\"></span></div>\n\
</div><!-- fragment --> </div><!-- contents -->\n\
</div><!-- doc-content -->\n\
<!-- start footer part -->\n\
\n\
      <div class=\"footer-block\"><a href=\"../html/ac.cmtdialog.htm\" class=\"comments-anchor\" target=\"_blank\"><span class=\"comments-link\">Please send us your comment about this page</span></a></div></div>\n\
   </div></body>\n\
</html>\n\
";