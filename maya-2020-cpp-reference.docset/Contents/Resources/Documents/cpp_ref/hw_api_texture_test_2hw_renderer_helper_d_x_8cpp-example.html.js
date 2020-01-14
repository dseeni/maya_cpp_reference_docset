var topic = "<!-- saved from url=(0024)http://docs.autodesk.com -->\n\
<html>\n\
   <head><script src=\"../scripts/yepnope.1.5.4-min.js\" type=\"text/javascript\"></script><script src=\"../scripts/lib/jquery-1.11.1.min.js\" type=\"text/javascript\"></script>\n\
      <title>C++ API Reference: hwApiTextureTest/hwRendererHelperDX.cpp</title>\n\
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
    cpp_ref_adsk_ref_toc.initNavTree(\'hw_api_texture_test_2hw_renderer_helper_d_x_8cpp-example.html\', tocPrefix);\n\
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
            <h1>C++ API Reference: hwApiTextureTest/hwRendererHelperDX.cpp</h1>\n\
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
<div class=\"title\">hwApiTextureTest/hwRendererHelperDX.cpp</div>  </div>\n\
</div><!--header-->\n\
<div class=\"contents\">\n\
<div class=\"fragment\"><div class=\"line\"><span class=\"preprocessor\">#ifdef _WIN32</span></div>\n\
<div class=\"line\"></div>\n\
<div class=\"line\"><span class=\"preprocessor\">#include &quot;hwRendererHelperDX.h&quot;</span></div>\n\
<div class=\"line\"><span class=\"preprocessor\">#include &quot;hwApiTextureTestStrings.h&quot;</span></div>\n\
<div class=\"line\"><span class=\"preprocessor\">#include &lt;maya/MTextureManager.h&gt;</span></div>\n\
<div class=\"line\"><span class=\"preprocessor\">#include &lt;maya/MRenderTargetManager.h&gt;</span></div>\n\
<div class=\"line\"><span class=\"preprocessor\">#include &lt;maya/MGlobal.h&gt;</span></div>\n\
<div class=\"line\"></div>\n\
<div class=\"line\"><span class=\"preprocessor\">#include &lt;d3d11.h&gt;</span></div>\n\
<div class=\"line\"></div>\n\
<div class=\"line\"><span class=\"preprocessor\">#if _MSC_VER &lt; 1700</span></div>\n\
<div class=\"line\"><span class=\"preprocessor\">#include &lt;d3dx11.h&gt;</span></div>\n\
<div class=\"line\"><span class=\"preprocessor\">#endif</span></div>\n\
<div class=\"line\"></div>\n\
<div class=\"line\"><span class=\"comment\">// To build against the DX SDK header use the following commented line</span></div>\n\
<div class=\"line\"><span class=\"comment\">//#include &lt;../Samples/C++/Effects11/Inc/d3dx11effect.h&gt;</span></div>\n\
<div class=\"line\"><span class=\"preprocessor\">#include &lt;DX11/d3dx11effect.h&gt;</span></div>\n\
<div class=\"line\"><span class=\"preprocessor\">#include &lt;d3d11shader.h&gt;</span></div>\n\
<div class=\"line\"><span class=\"preprocessor\">#include &lt;d3dcompiler.h&gt;</span></div>\n\
<div class=\"line\"></div>\n\
<div class=\"line\"></div>\n\
<div class=\"line\">hwRendererHelperDX::hwRendererHelperDX(<a name=\"_a0\"></a><a class=\"code\" href=\"#!/url=./cpp_ref/class_m_h_w_render_1_1_m_renderer.html\">MHWRender::MRenderer</a>* renderer, ID3D11Device* device)</div>\n\
<div class=\"line\">: hwRendererHelper(renderer)</div>\n\
<div class=\"line\">, fDXDevice(device)</div>\n\
<div class=\"line\">, fDXContext(NULL)</div>\n\
<div class=\"line\">, fDrawTextureEffect(NULL)</div>\n\
<div class=\"line\">, fDrawTextureShaderVariable(NULL)</div>\n\
<div class=\"line\">, fDrawTexturePass(NULL)</div>\n\
<div class=\"line\">, fDrawTextureInputLayout(NULL)</div>\n\
<div class=\"line\">, fDrawTextureVertexBuffersCount(0)</div>\n\
<div class=\"line\">, fDrawTextureIndexBuffer(NULL)</div>\n\
<div class=\"line\">, fDrawTextureIndexBufferCount(0)</div>\n\
<div class=\"line\">{</div>\n\
<div class=\"line\">    <span class=\"keywordflow\">if</span>(fDXDevice != NULL)</div>\n\
<div class=\"line\">    {</div>\n\
<div class=\"line\">        fDXDevice-&gt;GetImmediateContext(&amp;fDXContext);</div>\n\
<div class=\"line\">        <span class=\"comment\">//fDXDevice-&gt;CreateDeferredContext(0, &amp;fDXContext);</span></div>\n\
<div class=\"line\">    }</div>\n\
<div class=\"line\">}</div>\n\
<div class=\"line\"></div>\n\
<div class=\"line\">hwRendererHelperDX::~hwRendererHelperDX()</div>\n\
<div class=\"line\">{</div>\n\
<div class=\"line\">    <span class=\"keywordflow\">if</span>(fDrawTextureIndexBuffer) fDrawTextureIndexBuffer-&gt;Release();</div>\n\
<div class=\"line\">    <span class=\"keywordflow\">for</span>(<span class=\"keywordtype\">unsigned</span> <span class=\"keywordtype\">int</span> i = 0; i &lt; fDrawTextureVertexBuffersCount; ++i)</div>\n\
<div class=\"line\">    {</div>\n\
<div class=\"line\">        <span class=\"keywordflow\">if</span>(fDrawTextureVertexBuffers[i])</div>\n\
<div class=\"line\">            fDrawTextureVertexBuffers[i]-&gt;Release();</div>\n\
<div class=\"line\">    }</div>\n\
<div class=\"line\">    <span class=\"keywordflow\">if</span>(fDrawTextureInputLayout) fDrawTextureInputLayout-&gt;Release();</div>\n\
<div class=\"line\">    <span class=\"keywordflow\">if</span>(fDrawTextureEffect) fDrawTextureEffect-&gt;Release();</div>\n\
<div class=\"line\">    </div>\n\
<div class=\"line\">    <span class=\"keywordflow\">if</span>(fDXContext) fDXContext-&gt;Release();</div>\n\
<div class=\"line\">}</div>\n\
<div class=\"line\"></div>\n\
<div class=\"line\"><span class=\"keywordtype\">bool</span> hwRendererHelperDX::renderTextureToTarget(<a name=\"_a1\"></a><a class=\"code\" href=\"#!/url=./cpp_ref/class_m_h_w_render_1_1_m_texture.html\">MHWRender::MTexture</a>* texture, <a name=\"_a2\"></a><a class=\"code\" href=\"#!/url=./cpp_ref/class_m_h_w_render_1_1_m_render_target.html\">MHWRender::MRenderTarget</a> *target)</div>\n\
<div class=\"line\">{</div>\n\
<div class=\"line\">    <span class=\"keywordflow\">if</span>( fDXContext == NULL )</div>\n\
<div class=\"line\">        <span class=\"keywordflow\">return</span> <span class=\"keyword\">false</span>;</div>\n\
<div class=\"line\"></div>\n\
<div class=\"line\">    ID3D11ShaderResourceView* textureResourceView = (ID3D11ShaderResourceView*)texture-&gt;<a name=\"a3\"></a><a class=\"code\" href=\"#!/url=./cpp_ref/class_m_h_w_render_1_1_m_texture.html#ad7bcab0d1707ef0da22fc72ada62c40e\">resourceHandle</a>();</div>\n\
<div class=\"line\">    <span class=\"keywordflow\">if</span>( textureResourceView == NULL )</div>\n\
<div class=\"line\">        <span class=\"keywordflow\">return</span> <span class=\"keyword\">false</span>;</div>\n\
<div class=\"line\"></div>\n\
<div class=\"line\">    ID3D11RenderTargetView* renderTargetView = (ID3D11RenderTargetView*)target-&gt;<a name=\"a4\"></a><a class=\"code\" href=\"#!/url=./cpp_ref/class_m_h_w_render_1_1_m_render_target.html#ad7bcab0d1707ef0da22fc72ada62c40e\">resourceHandle</a>();</div>\n\
<div class=\"line\">    <span class=\"keywordflow\">if</span>( renderTargetView == NULL )</div>\n\
<div class=\"line\">        <span class=\"keywordflow\">return</span> <span class=\"keyword\">false</span>;</div>\n\
<div class=\"line\"></div>\n\
<div class=\"line\">    <a name=\"_a5\"></a><a class=\"code\" href=\"#!/url=./cpp_ref/class_m_h_w_render_1_1_m_render_target_description.html\">MHWRender::MRenderTargetDescription</a> targetDesc;</div>\n\
<div class=\"line\">    target-&gt;<a name=\"a6\"></a><a class=\"code\" href=\"#!/url=./cpp_ref/class_m_h_w_render_1_1_m_render_target.html#aa7073988ff86d081d3b457d2837517ad\">targetDescription</a>(targetDesc);</div>\n\
<div class=\"line\"></div>\n\
<div class=\"line\">    initializeDrawTextureEffect();</div>\n\
<div class=\"line\"></div>\n\
<div class=\"line\">    <span class=\"keywordflow\">if</span>( fDrawTexturePass == NULL || fDrawTextureShaderVariable == NULL || fDrawTextureInputLayout == NULL || fDrawTextureVertexBuffersCount == 0 || fDrawTextureIndexBuffer == NULL )</div>\n\
<div class=\"line\">        <span class=\"keywordflow\">return</span> <span class=\"keyword\">false</span>;</div>\n\
<div class=\"line\"></div>\n\
<div class=\"line\">    <span class=\"comment\">// Save original targets</span></div>\n\
<div class=\"line\">    ID3D11RenderTargetView* oldRenderTargetView = NULL;</div>\n\
<div class=\"line\">    ID3D11DepthStencilView* oldDepthStencilView = NULL;</div>\n\
<div class=\"line\">    fDXContext-&gt;OMGetRenderTargets( 1, &amp;oldRenderTargetView, &amp;oldDepthStencilView );</div>\n\
<div class=\"line\"></div>\n\
<div class=\"line\">    ID3D11DepthStencilView* depthStencilView = NULL;</div>\n\
<div class=\"line\">    fDXContext-&gt;OMSetRenderTargets( 1, &amp;renderTargetView, depthStencilView );</div>\n\
<div class=\"line\"></div>\n\
<div class=\"line\">    <span class=\"keywordflow\">if</span>(renderTargetView)</div>\n\
<div class=\"line\">    {</div>\n\
<div class=\"line\">        <span class=\"keywordtype\">float</span> clearColor[4] = { 0.2f, 0.2f, 0.2f, 1.0f };</div>\n\
<div class=\"line\">        fDXContext-&gt;ClearRenderTargetView( renderTargetView, clearColor );</div>\n\
<div class=\"line\">    }</div>\n\
<div class=\"line\"></div>\n\
<div class=\"line\">    <span class=\"comment\">// Save original viewport</span></div>\n\
<div class=\"line\">    <span class=\"keywordtype\">unsigned</span> <span class=\"keywordtype\">int</span> numViewport = 1;</div>\n\
<div class=\"line\">    D3D11_VIEWPORT oldViewport;</div>\n\
<div class=\"line\">    fDXContext-&gt;RSGetViewports(&amp;numViewport, &amp;oldViewport);</div>\n\
<div class=\"line\"></div>\n\
<div class=\"line\">    <span class=\"keyword\">const</span> D3D11_VIEWPORT viewport = { 0.0f, 0.0f, (float)(targetDesc.<a name=\"a7\"></a><a class=\"code\" href=\"#!/url=./cpp_ref/class_m_h_w_render_1_1_m_render_target_description.html#a7b736ec9a05be5c498760d35a0406ed3\">width</a>()), (<span class=\"keywordtype\">float</span>)(targetDesc.<a name=\"a8\"></a><a class=\"code\" href=\"#!/url=./cpp_ref/class_m_h_w_render_1_1_m_render_target_description.html#aa420a28166e708e3f8b9ecc8e527fc09\">height</a>()), 0.0f, 1.0f };</div>\n\
<div class=\"line\">    fDXContext-&gt;RSSetViewports( 1, &amp;viewport );</div>\n\
<div class=\"line\"></div>\n\
<div class=\"line\">    <span class=\"comment\">// Bind vertex buffers</span></div>\n\
<div class=\"line\">    fDXContext-&gt;IASetVertexBuffers(0, fDrawTextureVertexBuffersCount, fDrawTextureVertexBuffers, fDrawTextureVertexBuffersStrides, fDrawTextureVertexBuffersOffsets);</div>\n\
<div class=\"line\">    fDXContext-&gt;IASetInputLayout(fDrawTextureInputLayout);</div>\n\
<div class=\"line\"></div>\n\
<div class=\"line\">    <span class=\"comment\">// Bind index buffer</span></div>\n\
<div class=\"line\">    fDXContext-&gt;IASetIndexBuffer(fDrawTextureIndexBuffer, DXGI_FORMAT_R32_UINT, 0);</div>\n\
<div class=\"line\">    fDXContext-&gt;IASetPrimitiveTopology(D3D11_PRIMITIVE_TOPOLOGY_TRIANGLELIST);</div>\n\
<div class=\"line\"></div>\n\
<div class=\"line\">    <span class=\"comment\">// Bind texture with effect variable</span></div>\n\
<div class=\"line\">    fDrawTextureShaderVariable-&gt;SetResource( textureResourceView );</div>\n\
<div class=\"line\"></div>\n\
<div class=\"line\">    <span class=\"comment\">// Activate pass</span></div>\n\
<div class=\"line\">    fDrawTexturePass-&gt;Apply(0, fDXContext);</div>\n\
<div class=\"line\"></div>\n\
<div class=\"line\">    <span class=\"comment\">// Draw quad</span></div>\n\
<div class=\"line\">    fDXContext-&gt;DrawIndexed(fDrawTextureIndexBufferCount, 0, 0);</div>\n\
<div class=\"line\"></div>\n\
<div class=\"line\">    <span class=\"comment\">// Restore targets</span></div>\n\
<div class=\"line\">    fDXContext-&gt;OMSetRenderTargets( 1, &amp;renderTargetView, depthStencilView );</div>\n\
<div class=\"line\"></div>\n\
<div class=\"line\">    <span class=\"comment\">// Restore viewport</span></div>\n\
<div class=\"line\">    fDXContext-&gt;RSSetViewports(1, &amp;oldViewport);</div>\n\
<div class=\"line\"></div>\n\
<div class=\"line\">    <span class=\"keywordflow\">return</span> <span class=\"keyword\">true</span>;</div>\n\
<div class=\"line\">}</div>\n\
<div class=\"line\"></div>\n\
<div class=\"line\"><span class=\"keywordtype\">void</span> hwRendererHelperDX::initializeDrawTextureEffect()</div>\n\
<div class=\"line\">{</div>\n\
<div class=\"line\">    <span class=\"keywordflow\">if</span>( fDXContext == NULL )</div>\n\
<div class=\"line\">        <span class=\"keywordflow\">return</span>;</div>\n\
<div class=\"line\"></div>\n\
<div class=\"line\">    <span class=\"comment\">// Create the effect</span></div>\n\
<div class=\"line\">    <span class=\"keywordflow\">if</span>( fDrawTextureEffect == NULL )</div>\n\
<div class=\"line\">    {</div>\n\
<div class=\"line\">        <span class=\"keyword\">const</span> <span class=\"keywordtype\">char</span>* simpleShaderCode =  <span class=\"stringliteral\">&quot;Texture2D myTexture; \\r\\n&quot;</span> \\</div>\n\
<div class=\"line\"></div>\n\
<div class=\"line\">                                        <span class=\"stringliteral\">&quot;SamplerState SamplerLinearWrap \\r\\n&quot;</span> \\</div>\n\
<div class=\"line\">                                        <span class=\"stringliteral\">&quot;{ \\r\\n&quot;</span> \\</div>\n\
<div class=\"line\">                                        <span class=\"stringliteral\">&quot;   Filter = MIN_MAG_MIP_LINEAR; \\r\\n&quot;</span> \\</div>\n\
<div class=\"line\">                                        <span class=\"stringliteral\">&quot;   AddressU = Wrap; \\r\\n&quot;</span> \\</div>\n\
<div class=\"line\">                                        <span class=\"stringliteral\">&quot;   AddressV = Wrap; \\r\\n&quot;</span> \\</div>\n\
<div class=\"line\">                                        <span class=\"stringliteral\">&quot;}; \\r\\n&quot;</span> \\</div>\n\
<div class=\"line\"></div>\n\
<div class=\"line\">                                        <span class=\"stringliteral\">&quot;struct APP_TO_VS \\r\\n&quot;</span> \\</div>\n\
<div class=\"line\">                                        <span class=\"stringliteral\">&quot;{ \\r\\n&quot;</span> \\</div>\n\
<div class=\"line\">                                        <span class=\"stringliteral\">&quot;   float3 Pos : POSITION; \\r\\n&quot;</span> \\</div>\n\
<div class=\"line\">                                        <span class=\"stringliteral\">&quot;   float2 TextCoord : TEXTCOORD; \\r\\n&quot;</span> \\</div>\n\
<div class=\"line\">                                        <span class=\"stringliteral\">&quot;}; \\r\\n&quot;</span> \\</div>\n\
<div class=\"line\"></div>\n\
<div class=\"line\">                                        <span class=\"stringliteral\">&quot;struct VS_TO_PS \\r\\n&quot;</span> \\</div>\n\
<div class=\"line\">                                        <span class=\"stringliteral\">&quot;{ \\r\\n&quot;</span> \\</div>\n\
<div class=\"line\">                                        <span class=\"stringliteral\">&quot;   float4 Pos : SV_Position; \\r\\n&quot;</span> \\</div>\n\
<div class=\"line\">                                        <span class=\"stringliteral\">&quot;   float2 TextCoord : TEXTCOORD; \\r\\n&quot;</span> \\</div>\n\
<div class=\"line\">                                        <span class=\"stringliteral\">&quot;}; \\r\\n&quot;</span> \\</div>\n\
<div class=\"line\"></div>\n\
<div class=\"line\">                                        <span class=\"stringliteral\">&quot;VS_TO_PS BasicVS(APP_TO_VS IN) \\r\\n&quot;</span> \\</div>\n\
<div class=\"line\">                                        <span class=\"stringliteral\">&quot;{ \\r\\n&quot;</span> \\</div>\n\
<div class=\"line\">                                        <span class=\"stringliteral\">&quot;   VS_TO_PS OUT; \\r\\n&quot;</span> \\</div>\n\
<div class=\"line\">                                        <span class=\"stringliteral\">&quot;   OUT.Pos = float4(IN.Pos, 1.0f); \\r\\n&quot;</span> \\</div>\n\
<div class=\"line\">                                        <span class=\"stringliteral\">&quot;   OUT.TextCoord = IN.TextCoord; \\r\\n&quot;</span> \\</div>\n\
<div class=\"line\">                                        <span class=\"stringliteral\">&quot;   return OUT; \\r\\n&quot;</span> \\</div>\n\
<div class=\"line\">                                        <span class=\"stringliteral\">&quot;} \\r\\n&quot;</span> \\</div>\n\
<div class=\"line\"></div>\n\
<div class=\"line\">                                        <span class=\"stringliteral\">&quot;float4 BasicPS(VS_TO_PS IN) : SV_Target \\r\\n&quot;</span> \\</div>\n\
<div class=\"line\">                                        <span class=\"stringliteral\">&quot;{ \\r\\n&quot;</span> \\</div>\n\
<div class=\"line\">                                        <span class=\"stringliteral\">&quot;   float4 color = myTexture.Sample(SamplerLinearWrap, IN.TextCoord); \\r\\n&quot;</span> \\</div>\n\
<div class=\"line\">                                        <span class=\"stringliteral\">&quot;   return color; \\r\\n&quot;</span> \\</div>\n\
<div class=\"line\">                                        <span class=\"stringliteral\">&quot;} \\r\\n&quot;</span> \\</div>\n\
<div class=\"line\"></div>\n\
<div class=\"line\">                                        <span class=\"stringliteral\">&quot;technique10 simple \\r\\n&quot;</span> \\</div>\n\
<div class=\"line\">                                        <span class=\"stringliteral\">&quot;{ \\r\\n&quot;</span> \\</div>\n\
<div class=\"line\">                                        <span class=\"stringliteral\">&quot;   pass p0 \\r\\n&quot;</span> \\</div>\n\
<div class=\"line\">                                        <span class=\"stringliteral\">&quot;   { \\r\\n&quot;</span> \\</div>\n\
<div class=\"line\">                                        <span class=\"stringliteral\">&quot;       SetVertexShader( CompileShader( vs_4_0, BasicVS() ) ); \\r\\n&quot;</span> \\</div>\n\
<div class=\"line\">                                        <span class=\"stringliteral\">&quot;       SetGeometryShader( NULL ); \\r\\n&quot;</span> \\</div>\n\
<div class=\"line\">                                        <span class=\"stringliteral\">&quot;       SetPixelShader( CompileShader( ps_4_0, BasicPS() ) ); \\r\\n&quot;</span> \\</div>\n\
<div class=\"line\">                                        <span class=\"stringliteral\">&quot;   } \\r\\n&quot;</span> \\</div>\n\
<div class=\"line\">                                        <span class=\"stringliteral\">&quot;} \\r\\n&quot;</span>;</div>\n\
<div class=\"line\">        <span class=\"keyword\">const</span> <span class=\"keywordtype\">unsigned</span> <span class=\"keywordtype\">int</span> simpleShaderLength = (<span class=\"keywordtype\">unsigned</span> int)strlen(simpleShaderCode);</div>\n\
<div class=\"line\"></div>\n\
<div class=\"line\">        <span class=\"keyword\">const</span> D3D10_SHADER_MACRO macros[] = { { <span class=\"stringliteral\">&quot;DIRECT3D_VERSION&quot;</span>, <span class=\"stringliteral\">&quot;0xb00&quot;</span> }, { NULL, NULL } };</div>\n\
<div class=\"line\"></div>\n\
<div class=\"line\"><span class=\"preprocessor\">#ifdef _DEBUG</span></div>\n\
<div class=\"line\">        <span class=\"keyword\">const</span> <span class=\"keywordtype\">unsigned</span> <span class=\"keywordtype\">int</span> flags = D3DCOMPILE_DEBUG | D3DCOMPILE_SKIP_OPTIMIZATION;</div>\n\
<div class=\"line\"><span class=\"preprocessor\">#else</span></div>\n\
<div class=\"line\">        <span class=\"keyword\">const</span> <span class=\"keywordtype\">unsigned</span> <span class=\"keywordtype\">int</span> flags = 0;</div>\n\
<div class=\"line\"><span class=\"preprocessor\">#endif</span></div>\n\
<div class=\"line\"></div>\n\
<div class=\"line\">        ID3DBlob *shader = NULL;</div>\n\
<div class=\"line\">        ID3DBlob *error = NULL;</div>\n\
<div class=\"line\"><span class=\"preprocessor\">#if _MSC_VER &gt;= 1700</span></div>\n\
<div class=\"line\">        HRESULT hr = D3DCompile((<span class=\"keywordtype\">char</span>*)simpleShaderCode, simpleShaderLength, NULL, macros, NULL, <span class=\"stringliteral\">&quot;&quot;</span>, <span class=\"stringliteral\">&quot;fx_5_0&quot;</span>, flags, 0, &amp;shader, &amp;error);</div>\n\
<div class=\"line\"><span class=\"preprocessor\">#else</span></div>\n\
<div class=\"line\">        HRESULT hr = D3DX11CompileFromMemory((<span class=\"keywordtype\">char</span>*)simpleShaderCode, simpleShaderLength, NULL, macros, NULL, <span class=\"stringliteral\">&quot;&quot;</span>, <span class=\"stringliteral\">&quot;fx_5_0&quot;</span>, flags, 0, NULL, &amp;shader, &amp;error, NULL);</div>\n\
<div class=\"line\"><span class=\"preprocessor\">#endif</span></div>\n\
<div class=\"line\">        <span class=\"keywordflow\">if</span>( SUCCEEDED( hr ) &amp;&amp; shader != NULL )</div>\n\
<div class=\"line\">        {</div>\n\
<div class=\"line\">            hr = D3DX11CreateEffectFromMemory(shader-&gt;GetBufferPointer(), shader-&gt;GetBufferSize(), 0, fDXDevice, &amp;fDrawTextureEffect);</div>\n\
<div class=\"line\">            <span class=\"keywordflow\">if</span>( SUCCEEDED( hr ) &amp;&amp; fDrawTextureEffect != NULL )</div>\n\
<div class=\"line\">            {</div>\n\
<div class=\"line\">                ID3DX11EffectVariable* textureVariable = fDrawTextureEffect-&gt;GetVariableByName( <span class=\"stringliteral\">&quot;myTexture&quot;</span> );</div>\n\
<div class=\"line\">                <span class=\"keywordflow\">if</span>( textureVariable != NULL )</div>\n\
<div class=\"line\">                {</div>\n\
<div class=\"line\">                    fDrawTextureShaderVariable = textureVariable-&gt;AsShaderResource();</div>\n\
<div class=\"line\">                }</div>\n\
<div class=\"line\"></div>\n\
<div class=\"line\">                ID3DX11EffectTechnique* technique = fDrawTextureEffect-&gt;GetTechniqueByIndex(0);</div>\n\
<div class=\"line\">                <span class=\"keywordflow\">if</span>( technique )</div>\n\
<div class=\"line\">                {</div>\n\
<div class=\"line\">                    fDrawTexturePass = technique-&gt;GetPassByIndex(0);</div>\n\
<div class=\"line\">                }</div>\n\
<div class=\"line\">            }</div>\n\
<div class=\"line\">        }</div>\n\
<div class=\"line\">        <span class=\"keywordflow\">else</span></div>\n\
<div class=\"line\">        {</div>\n\
<div class=\"line\">            <a name=\"_a9\"></a><a class=\"code\" href=\"#!/url=./cpp_ref/class_m_string.html\">MString</a> errorStr( (error &amp;&amp; error-&gt;GetBufferSize() &gt; 0) ? (<span class=\"keywordtype\">char</span>*) error-&gt;GetBufferPointer() : (<span class=\"keywordtype\">char</span>*) NULL );</div>\n\
<div class=\"line\"></div>\n\
<div class=\"line\">            <a name=\"_a10\"></a><a class=\"code\" href=\"#!/url=./cpp_ref/class_m_global.html\">MGlobal</a>::displayWarning( hwApiTextureTestStrings::getString( hwApiTextureTestStrings::kDxErrorEffect, errorStr ) );</div>\n\
<div class=\"line\">        }</div>\n\
<div class=\"line\">        </div>\n\
<div class=\"line\">        if( shader != NULL )</div>\n\
<div class=\"line\">        {</div>\n\
<div class=\"line\">            shader-&gt;Release();</div>\n\
<div class=\"line\">        }</div>\n\
<div class=\"line\">    }</div>\n\
<div class=\"line\">    </div>\n\
<div class=\"line\">    <span class=\"comment\">// Create the vertex buffers and the input layout</span></div>\n\
<div class=\"line\">    <span class=\"keywordflow\">if</span>( fDrawTextureInputLayout == NULL &amp;&amp; fDrawTexturePass != NULL )</div>\n\
<div class=\"line\">    {</div>\n\
<div class=\"line\">        fDrawTextureVertexBuffersCount = 0;</div>\n\
<div class=\"line\"></div>\n\
<div class=\"line\">        D3D11_INPUT_ELEMENT_DESC inputDesc[MAX_VERTEX_BUFFERS];</div>\n\
<div class=\"line\"></div>\n\
<div class=\"line\">        HRESULT hr;</div>\n\
<div class=\"line\"></div>\n\
<div class=\"line\">        <span class=\"comment\">// Create the position stream</span></div>\n\
<div class=\"line\">        {</div>\n\
<div class=\"line\">            <span class=\"keyword\">const</span> <span class=\"keywordtype\">float</span> position[] = {  -1, -1, 0,      <span class=\"comment\">// bottom-left</span></div>\n\
<div class=\"line\">                                        -1,  1, 0,      <span class=\"comment\">// top-left</span></div>\n\
<div class=\"line\">                                         1,  1, 0,      <span class=\"comment\">// top-right</span></div>\n\
<div class=\"line\">                                         1, -1, 0 };    <span class=\"comment\">// bottom-right</span></div>\n\
<div class=\"line\"></div>\n\
<div class=\"line\">            <span class=\"keyword\">const</span> D3D11_BUFFER_DESC bufDesc = { <span class=\"keyword\">sizeof</span>(position), D3D11_USAGE_IMMUTABLE, D3D11_BIND_VERTEX_BUFFER, 0, 0, 0 };</div>\n\
<div class=\"line\">            <span class=\"keyword\">const</span> D3D11_SUBRESOURCE_DATA bufData = { position, 0, 0 };</div>\n\
<div class=\"line\">            ID3D11Buffer *buffer = NULL;</div>\n\
<div class=\"line\">            hr = fDXDevice-&gt;CreateBuffer(&amp;bufDesc, &amp;bufData, &amp;buffer);</div>\n\
<div class=\"line\">            <span class=\"keywordflow\">if</span>( SUCCEEDED( hr ) &amp;&amp; buffer != NULL )</div>\n\
<div class=\"line\">            {</div>\n\
<div class=\"line\">                inputDesc[fDrawTextureVertexBuffersCount].SemanticName = <span class=\"stringliteral\">&quot;POSITION&quot;</span>;</div>\n\
<div class=\"line\">                inputDesc[fDrawTextureVertexBuffersCount].SemanticIndex = 0;</div>\n\
<div class=\"line\">                inputDesc[fDrawTextureVertexBuffersCount].Format = DXGI_FORMAT_R32G32B32_FLOAT;</div>\n\
<div class=\"line\">                inputDesc[fDrawTextureVertexBuffersCount].InputSlot = fDrawTextureVertexBuffersCount;</div>\n\
<div class=\"line\">                inputDesc[fDrawTextureVertexBuffersCount].AlignedByteOffset = 0;</div>\n\
<div class=\"line\">                inputDesc[fDrawTextureVertexBuffersCount].InputSlotClass = D3D11_INPUT_PER_VERTEX_DATA;</div>\n\
<div class=\"line\">                inputDesc[fDrawTextureVertexBuffersCount].InstanceDataStepRate = 0;</div>\n\
<div class=\"line\"></div>\n\
<div class=\"line\">                fDrawTextureVertexBuffers[fDrawTextureVertexBuffersCount] = buffer;</div>\n\
<div class=\"line\">                fDrawTextureVertexBuffersStrides[fDrawTextureVertexBuffersCount] = 3 * <span class=\"keyword\">sizeof</span>(float);</div>\n\
<div class=\"line\">                fDrawTextureVertexBuffersOffsets[fDrawTextureVertexBuffersCount] = 0;</div>\n\
<div class=\"line\"></div>\n\
<div class=\"line\">                ++fDrawTextureVertexBuffersCount;</div>\n\
<div class=\"line\">            }</div>\n\
<div class=\"line\">        }</div>\n\
<div class=\"line\"></div>\n\
<div class=\"line\">        <span class=\"comment\">// Create the texture coord stream</span></div>\n\
<div class=\"line\">        <span class=\"keywordflow\">if</span>( SUCCEEDED( hr ) )</div>\n\
<div class=\"line\">        {</div>\n\
<div class=\"line\">            <span class=\"keyword\">const</span> <span class=\"keywordtype\">float</span> textCoord[] = { 0, 1,       <span class=\"comment\">// bottom-left</span></div>\n\
<div class=\"line\">                                        0, 0,       <span class=\"comment\">// top-left</span></div>\n\
<div class=\"line\">                                        1, 0,       <span class=\"comment\">// top-right</span></div>\n\
<div class=\"line\">                                        1, 1 };     <span class=\"comment\">// bottom-right</span></div>\n\
<div class=\"line\"></div>\n\
<div class=\"line\">            <span class=\"keyword\">const</span> D3D11_BUFFER_DESC bufDesc = { <span class=\"keyword\">sizeof</span>(textCoord), D3D11_USAGE_IMMUTABLE, D3D11_BIND_VERTEX_BUFFER, 0, 0, 0 };</div>\n\
<div class=\"line\">            <span class=\"keyword\">const</span> D3D11_SUBRESOURCE_DATA bufData = { textCoord, 0, 0 };</div>\n\
<div class=\"line\">            ID3D11Buffer *buffer = NULL;</div>\n\
<div class=\"line\">            hr = fDXDevice-&gt;CreateBuffer(&amp;bufDesc, &amp;bufData, &amp;buffer);</div>\n\
<div class=\"line\">            <span class=\"keywordflow\">if</span>( SUCCEEDED( hr ) &amp;&amp; buffer != NULL )</div>\n\
<div class=\"line\">            {</div>\n\
<div class=\"line\">                inputDesc[fDrawTextureVertexBuffersCount].SemanticName = <span class=\"stringliteral\">&quot;TEXTCOORD&quot;</span>;</div>\n\
<div class=\"line\">                inputDesc[fDrawTextureVertexBuffersCount].SemanticIndex = 0;</div>\n\
<div class=\"line\">                inputDesc[fDrawTextureVertexBuffersCount].Format = DXGI_FORMAT_R32G32_FLOAT;</div>\n\
<div class=\"line\">                inputDesc[fDrawTextureVertexBuffersCount].InputSlot = fDrawTextureVertexBuffersCount;</div>\n\
<div class=\"line\">                inputDesc[fDrawTextureVertexBuffersCount].AlignedByteOffset = 0;</div>\n\
<div class=\"line\">                inputDesc[fDrawTextureVertexBuffersCount].InputSlotClass = D3D11_INPUT_PER_VERTEX_DATA;</div>\n\
<div class=\"line\">                inputDesc[fDrawTextureVertexBuffersCount].InstanceDataStepRate = 0;</div>\n\
<div class=\"line\"></div>\n\
<div class=\"line\">                fDrawTextureVertexBuffers[fDrawTextureVertexBuffersCount] = buffer;</div>\n\
<div class=\"line\">                fDrawTextureVertexBuffersStrides[fDrawTextureVertexBuffersCount] = 2 * <span class=\"keyword\">sizeof</span>(float);</div>\n\
<div class=\"line\">                fDrawTextureVertexBuffersOffsets[fDrawTextureVertexBuffersCount] = 0;</div>\n\
<div class=\"line\"></div>\n\
<div class=\"line\">                ++fDrawTextureVertexBuffersCount;</div>\n\
<div class=\"line\">            }</div>\n\
<div class=\"line\">        }</div>\n\
<div class=\"line\"></div>\n\
<div class=\"line\">        <span class=\"keywordflow\">if</span>( SUCCEEDED( hr ) )</div>\n\
<div class=\"line\">        {</div>\n\
<div class=\"line\">            D3DX11_PASS_DESC descPass;</div>\n\
<div class=\"line\">            fDrawTexturePass-&gt;GetDesc(&amp;descPass);</div>\n\
<div class=\"line\"></div>\n\
<div class=\"line\">            hr = fDXDevice-&gt;CreateInputLayout(inputDesc, fDrawTextureVertexBuffersCount, descPass.pIAInputSignature, descPass.IAInputSignatureSize, &amp;fDrawTextureInputLayout);</div>\n\
<div class=\"line\">            <span class=\"keywordflow\">if</span>( FAILED( hr ) )</div>\n\
<div class=\"line\">            {</div>\n\
<div class=\"line\">                <a name=\"a11\"></a><a class=\"code\" href=\"#!/url=./cpp_ref/class_m_global.html#acb043e7fc4eb7fc0f39833d31364b8a4\">MGlobal::displayWarning</a>( hwApiTextureTestStrings::getString( hwApiTextureTestStrings::kDxErrorInputLayout ) );</div>\n\
<div class=\"line\">            }</div>\n\
<div class=\"line\">        }</div>\n\
<div class=\"line\">    }</div>\n\
<div class=\"line\">    </div>\n\
<div class=\"line\">    <span class=\"comment\">// Create the index buffer</span></div>\n\
<div class=\"line\">    <span class=\"keywordflow\">if</span>( fDrawTextureIndexBuffer == NULL &amp;&amp; fDrawTextureVertexBuffersCount &gt; 0  &amp;&amp; fDrawTextureInputLayout != NULL )</div>\n\
<div class=\"line\">    {</div>\n\
<div class=\"line\">        <span class=\"keyword\">const</span> <span class=\"keywordtype\">unsigned</span> <span class=\"keywordtype\">int</span> indices[] = { 0, 3, 1, 3, 2, 1 };</div>\n\
<div class=\"line\">        fDrawTextureIndexBufferCount = _countof(indices);</div>\n\
<div class=\"line\"></div>\n\
<div class=\"line\">        <span class=\"keyword\">const</span> D3D11_BUFFER_DESC bufDesc = { <span class=\"keyword\">sizeof</span>(indices), D3D11_USAGE_IMMUTABLE, D3D11_BIND_INDEX_BUFFER, 0, 0, 0 };</div>\n\
<div class=\"line\">        <span class=\"keyword\">const</span> D3D11_SUBRESOURCE_DATA bufData = { indices, 0, 0 };</div>\n\
<div class=\"line\">        fDXDevice-&gt;CreateBuffer(&amp;bufDesc, &amp;bufData, &amp;fDrawTextureIndexBuffer);</div>\n\
<div class=\"line\">    }</div>\n\
<div class=\"line\">}</div>\n\
<div class=\"line\"></div>\n\
<div class=\"line\"><span class=\"preprocessor\">#endif</span></div>\n\
<div class=\"line\"></div>\n\
<div class=\"line\"><span class=\"comment\">//-</span></div>\n\
<div class=\"line\"><span class=\"comment\">// Copyright 2015 Autodesk, Inc.  All rights reserved.</span></div>\n\
<div class=\"line\"><span class=\"comment\">//</span></div>\n\
<div class=\"line\"><span class=\"comment\">// Use of this software is subject to the terms of the Autodesk license agreement</span></div>\n\
<div class=\"line\"><span class=\"comment\">// provided at the time of installation or download, or which otherwise</span></div>\n\
<div class=\"line\"><span class=\"comment\">// accompanies this software in either electronic or hard copy form.</span></div>\n\
<div class=\"line\"><span class=\"comment\">//+</span></div>\n\
</div><!-- fragment --> </div><!-- contents -->\n\
</div><!-- doc-content -->\n\
<!-- start footer part -->\n\
\n\
      <div class=\"footer-block\"><a href=\"../html/ac.cmtdialog.htm\" class=\"comments-anchor\" target=\"_blank\"><span class=\"comments-link\">Please send us your comment about this page</span></a></div></div>\n\
   </div></body>\n\
</html>\n\
";