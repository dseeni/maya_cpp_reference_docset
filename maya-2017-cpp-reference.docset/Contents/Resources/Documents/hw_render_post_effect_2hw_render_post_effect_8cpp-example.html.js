var topic = "<!-- saved from url=(0024)http://docs.autodesk.com -->\n\
<html>\n\
   <head><script src=\"../scripts/yepnope.1.5.4-min.js\" type=\"text/javascript\"></script><script src=\"../scripts/lib/jquery-1.11.1.min.js\" type=\"text/javascript\"></script><meta http-equiv=\"Content-Type\" content=\"text/html; charset=UTF-8\"><meta name=\"product\" content=\"MAYAUL\"><meta name=\"release\" content=\"2017\"><meta name=\"book\" content=\"Developer\"><meta name=\"created\" content=\"2016-06-16\"><meta name=\"topicid\" content=\"GUID-02DEF634-1E7B-48C6-8ACD-2C934CA97887\"><meta name=\"topic-type\" content=\"concept\">\n\
      <title>hwRenderPostEffect/hwRenderPostEffect.cpp</title>\n\
   \n\
\n\
<meta name=\"topic-subtype\" content=\"C++\"></head>\n\
   <body height=\"100%\"><div class=\"body_content\" id=\"body-content\"><link rel=\"stylesheet\" type=\"text/css\" href=\"cpp_ref/navtree.css\"><link rel=\"stylesheet\" type=\"text/css\" href=\"cpp_ref/doxygen.css\"><link rel=\"stylesheet\" type=\"text/css\" href=\"cpp_ref/tabs.css\"><link rel=\"stylesheet\" type=\"text/css\" href=\"style/adsk.cpm.css\"><script language=\"javascript\">var index = \'index.html\';</script><script>$(document).ready(function() { yepnope.injectJs(\"./scripts/ac_common.js\"); });</script><script type=\"text/javascript\">\n\
var tocSystemNeedsToBeLoaded = typeof(cpp_ref_adsk_ref_toc) == \'undefined\';\n\
var weAreIn21 = $(\'div#main.view-active\').length;\n\
var tocPrefix = \'\';\n\
if (weAreIn21)\n\
{ tocPrefix = \'cpp_ref/\'; }\n\
function cpp_ref_initializeToc(forceTrigger) {\n\
    cpp_ref_adsk_ref_toc.initResizable();\n\
    cpp_ref_adsk_ref_toc.initNavTree(\'hw_render_post_effect_2hw_render_post_effect_8cpp-example.html\', tocPrefix);\n\
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
</script><script>$(\"div#WidgetFloaterPanels,link[href*=\'microsofttranslator.com\'],script[src*=\'microsofttranslator.com\'],script[src*=\'bing.com\']\").remove();</script><script type=\'text/javascript\'>$(\"div#navigation,div#breadcrumbs,div#banner\").attr(\"translate\",\"no\"); var mtLocation = ((location && location.href && location.href.indexOf(\'https\') == 0)?\'https://ssl.microsofttranslator.com\':\'http://www.microsofttranslator.com\')+\'/ajax/v3/WidgetV3.ashx?ctf=True&ui=true&settings=Manual&from=en&hidelanguages=\'; yepnope.injectJs(mtLocation, function() {}, { charset:\'utf-8\', type:\'text/javascript\' } );</script><script>\n\
 if (!tocSystemNeedsToBeLoaded) { cpp_ref_initializeToc(); }\n\
 </script><!-- begin MT -->\n\
            \n\
            <div id=\'MicrosoftTranslatorWidget\' class=\'Dark\' style=\'float:right;z-index:100;color:white;background-color:#bbbbbb;height:58px;overflow:hidden\'></div>\n\
      <div>\n\
         <div class=\"head\">\n\
            <h1>hwRenderPostEffect/hwRenderPostEffect.cpp</h1>\n\
         </div>\n\
\n\
    <div id=\"top\"><!-- Generated by Doxygen 1.8.10 -->\n\
  <div id=\"navrow1\" class=\"tabs\">\n\
    <ul class=\"tablist\">\n\
      <li><a href=\"#!/url=./cpp_ref/index.html\"><span>Main&#160;Page</span></a></li>\n\
      <li><a href=\"#!/url=./cpp_ref/pages.html\"><span>Topics</span></a></li>\n\
      <li><a href=\"#!/url=./cpp_ref/modules.html\"><span>Modules</span></a></li>\n\
      <li><a href=\"#!/url=./cpp_ref/namespaces.html\"><span>Namespaces</span></a></li>\n\
      <li><a href=\"#!/url=./cpp_ref/annotated.html\"><span>Classes</span></a></li>\n\
      <li><a href=\"#!/url=./cpp_ref/examples.html\"><span>Examples</span></a></li>\n\
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
<div class=\"header\">\n\
  <div class=\"headertitle\">\n\
<div class=\"title\">hwRenderPostEffect/hwRenderPostEffect.cpp</div>  </div>\n\
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
<div class=\"line\"><span class=\"comment\">// DESCRIPTION: </span></div>\n\
<div class=\"line\"><span class=\"comment\">//      This is an example of adding processing</span></div>\n\
<div class=\"line\"><span class=\"comment\">//      effects to the hardware renderer.</span></div>\n\
<div class=\"line\"><span class=\"comment\">//      Simple operations such as inverting the image and adding color triangles to the view</span></div>\n\
<div class=\"line\"><span class=\"comment\">//       are performed by this plug-in.</span></div>\n\
<div class=\"line\"><span class=\"comment\">//</span></div>\n\
<div class=\"line\"><span class=\"comment\">//      To use this shader, load the plug-in and turn on the Legacy High Quality Viewport. </span></div>\n\
<div class=\"line\"><span class=\"comment\">//</span></div>\n\
<div class=\"line\"><span class=\"comment\"></span></div>\n\
<div class=\"line\"><span class=\"preprocessor\">#ifdef WIN32</span></div>\n\
<div class=\"line\"><span class=\"preprocessor\">#pragma warning( disable : 4786 )       // Disable STL warnings.</span></div>\n\
<div class=\"line\"><span class=\"preprocessor\">#endif</span></div>\n\
<div class=\"line\"></div>\n\
<div class=\"line\"><span class=\"preprocessor\">#include &lt;maya/MIOStream.h&gt;</span> </div>\n\
<div class=\"line\"><span class=\"preprocessor\">#include &lt;maya/MString.h&gt;</span></div>\n\
<div class=\"line\"><span class=\"preprocessor\">#include &lt;maya/MPlug.h&gt;</span></div>\n\
<div class=\"line\"><span class=\"preprocessor\">#include &lt;maya/MDataBlock.h&gt;</span></div>\n\
<div class=\"line\"><span class=\"preprocessor\">#include &lt;maya/MDataHandle.h&gt;</span></div>\n\
<div class=\"line\"><span class=\"preprocessor\">#include &lt;maya/MFnNumericAttribute.h&gt;</span></div>\n\
<div class=\"line\"><span class=\"preprocessor\">#include &lt;maya/MFloatVector.h&gt;</span></div>\n\
<div class=\"line\"><span class=\"preprocessor\">#include &lt;maya/MFnPlugin.h&gt;</span></div>\n\
<div class=\"line\"></div>\n\
<div class=\"line\"></div>\n\
<div class=\"line\"><span class=\"preprocessor\">#include &lt;maya/MDrawProcedureBase.h&gt;</span></div>\n\
<div class=\"line\"><span class=\"preprocessor\">#include &lt;maya/MHardwareRenderer.h&gt;</span></div>\n\
<div class=\"line\"><span class=\"preprocessor\">#include &lt;maya/MGL.h&gt;</span></div>\n\
<div class=\"line\"></div>\n\
<div class=\"line\"><span class=\"preprocessor\">#include &lt;stdio.h&gt;</span></div>\n\
<div class=\"line\"></div>\n\
<div class=\"line\"><span class=\"keyword\">class </span>hwRenderEffect : <span class=\"keyword\">public</span> <a name=\"_a0\"></a><a class=\"code\" href=\"#!/url=./cpp_ref/class_m_draw_procedure_base.html\">MDrawProcedureBase</a></div>\n\
<div class=\"line\">{</div>\n\
<div class=\"line\"><span class=\"keyword\">public</span>:</div>\n\
<div class=\"line\">                    hwRenderEffect();</div>\n\
<div class=\"line\">    <span class=\"keyword\">virtual</span>         ~hwRenderEffect();</div>\n\
<div class=\"line\"></div>\n\
<div class=\"line\">    <span class=\"keyword\">virtual</span> <span class=\"keywordtype\">bool</span> <a name=\"a1\"></a><a class=\"code\" href=\"#!/url=./cpp_ref/class_m_draw_procedure_base.html#a08352f58415d3126e26db4b540ee66ca\">execute</a>();</div>\n\
<div class=\"line\"></div>\n\
<div class=\"line\">    <span class=\"keyword\">static</span> <span class=\"keywordtype\">void</span> deleteEffect( hwRenderEffect * ePtr);   </div>\n\
<div class=\"line\">    <span class=\"keyword\">static</span> <a class=\"code\" href=\"#!/url=./cpp_ref/class_m_draw_procedure_base.html\">MDrawProcedureBase</a> *createEffect( <span class=\"keyword\">const</span> <a name=\"_a2\"></a><a class=\"code\" href=\"#!/url=./cpp_ref/class_m_string.html\">MString</a> &amp;name, </div>\n\
<div class=\"line\">                            hwRenderEffect *ePtr,</div>\n\
<div class=\"line\">                            <a class=\"code\" href=\"#!/url=./cpp_ref/class_m_hardware_renderer.html#a0526f0a40dc8240e14bfb22ebf93d986\">MHardwareRenderer::CallLocation</a> location);</div>\n\
<div class=\"line\"></div>\n\
<div class=\"line\"></div>\n\
<div class=\"line\">    <a class=\"code\" href=\"#!/url=./cpp_ref/class_m_hardware_renderer.html#a0526f0a40dc8240e14bfb22ebf93d986\">MHardwareRenderer::CallLocation</a> mLocation;</div>\n\
<div class=\"line\">};</div>\n\
<div class=\"line\"></div>\n\
<div class=\"line\"></div>\n\
<div class=\"line\">hwRenderEffect::hwRenderEffect()</div>\n\
<div class=\"line\">{</div>\n\
<div class=\"line\">}</div>\n\
<div class=\"line\"></div>\n\
<div class=\"line\">hwRenderEffect::~hwRenderEffect()</div>\n\
<div class=\"line\">{</div>\n\
<div class=\"line\">    <span class=\"comment\">// No-op</span></div>\n\
<div class=\"line\">}</div>\n\
<div class=\"line\"></div>\n\
<div class=\"line\"><span class=\"keywordtype\">void</span></div>\n\
<div class=\"line\">hwRenderEffect::deleteEffect( hwRenderEffect * ePtr) </div>\n\
<div class=\"line\">{</div>\n\
<div class=\"line\">    <span class=\"keywordflow\">if</span> (ePtr)</div>\n\
<div class=\"line\">    {</div>\n\
<div class=\"line\">        <a name=\"_a3\"></a><a class=\"code\" href=\"#!/url=./cpp_ref/class_m_hardware_renderer.html\">MHardwareRenderer</a> *pRenderer = MHardwareRenderer::theRenderer();</div>\n\
<div class=\"line\">        <span class=\"keywordflow\">if</span> (pRenderer)</div>\n\
<div class=\"line\">        {</div>\n\
<div class=\"line\">            <span class=\"keyword\">const</span> <a class=\"code\" href=\"#!/url=./cpp_ref/class_m_string.html\">MString</a> &amp; backEndStr = pRenderer-&gt;<a name=\"a4\"></a><a class=\"code\" href=\"#!/url=./cpp_ref/class_m_hardware_renderer.html#afd786038730d9c301a6b3a489d22d816\">backEndString</a>();</div>\n\
<div class=\"line\">            <a class=\"code\" href=\"#!/url=./cpp_ref/class_m_hardware_renderer.html#a14dafbca9ec0aa5132598b888511bfcb\">MHardwareRenderer::DrawProcedureStatusCode</a> result = </div>\n\
<div class=\"line\">                pRenderer-&gt;<a name=\"a5\"></a><a class=\"code\" href=\"#!/url=./cpp_ref/class_m_hardware_renderer.html#a031ed57acc6c5925a174c82e9346f9be\">removeDrawProcedure</a>( backEndStr, ePtr, ePtr-&gt;mLocation );</div>\n\
<div class=\"line\">            cout&lt;&lt;<span class=\"stringliteral\">&quot;Call hwRenderEffect::deleteEffect(&quot;</span>&lt;&lt;ePtr-&gt;fName.asChar()</div>\n\
<div class=\"line\">                &lt;&lt;<span class=\"stringliteral\">&quot;) loc(&quot;</span>&lt;&lt;ePtr-&gt;mLocation</div>\n\
<div class=\"line\">                &lt;&lt;<span class=\"stringliteral\">&quot;) = &quot;</span>&lt;&lt;result&lt;&lt;endl;</div>\n\
<div class=\"line\">        }</div>\n\
<div class=\"line\">        <span class=\"keyword\">delete</span> ePtr;</div>\n\
<div class=\"line\">        ePtr = 0;</div>\n\
<div class=\"line\">    }</div>\n\
<div class=\"line\">}</div>\n\
<div class=\"line\"></div>\n\
<div class=\"line\"><span class=\"comment\">/*static*/</span></div>\n\
<div class=\"line\"><a class=\"code\" href=\"#!/url=./cpp_ref/class_m_draw_procedure_base.html\">MDrawProcedureBase</a> *</div>\n\
<div class=\"line\">hwRenderEffect::createEffect( <span class=\"keyword\">const</span> <a class=\"code\" href=\"#!/url=./cpp_ref/class_m_string.html\">MString</a> &amp;name, </div>\n\
<div class=\"line\">                            hwRenderEffect *ePtr,</div>\n\
<div class=\"line\">                            <a class=\"code\" href=\"#!/url=./cpp_ref/class_m_hardware_renderer.html#a0526f0a40dc8240e14bfb22ebf93d986\">MHardwareRenderer::CallLocation</a> location)</div>\n\
<div class=\"line\">{</div>\n\
<div class=\"line\">    <a class=\"code\" href=\"#!/url=./cpp_ref/class_m_hardware_renderer.html\">MHardwareRenderer</a> *pRenderer = MHardwareRenderer::theRenderer();</div>\n\
<div class=\"line\">    <span class=\"keywordflow\">if</span> (pRenderer)</div>\n\
<div class=\"line\">    {</div>\n\
<div class=\"line\">        <span class=\"keywordflow\">if</span> (!ePtr)</div>\n\
<div class=\"line\">        {</div>\n\
<div class=\"line\">            ePtr = <span class=\"keyword\">new</span> hwRenderEffect();</div>\n\
<div class=\"line\">            ePtr-&gt;setEnabled( <span class=\"keyword\">true</span> );</div>\n\
<div class=\"line\">            ePtr-&gt;setName( name );  </div>\n\
<div class=\"line\">            ePtr-&gt;mLocation = location;</div>\n\
<div class=\"line\"></div>\n\
<div class=\"line\">            <span class=\"keyword\">const</span> <a class=\"code\" href=\"#!/url=./cpp_ref/class_m_string.html\">MString</a> &amp; backEndStr = pRenderer-&gt;<a class=\"code\" href=\"#!/url=./cpp_ref/class_m_hardware_renderer.html#afd786038730d9c301a6b3a489d22d816\">backEndString</a>();</div>\n\
<div class=\"line\">            <a class=\"code\" href=\"#!/url=./cpp_ref/class_m_hardware_renderer.html#a14dafbca9ec0aa5132598b888511bfcb\">MHardwareRenderer::DrawProcedureStatusCode</a> result = </div>\n\
<div class=\"line\">                pRenderer-&gt;<a name=\"a6\"></a><a class=\"code\" href=\"#!/url=./cpp_ref/class_m_hardware_renderer.html#a4c9bd2dbcef10b245426c34053f7b39e\">addDrawProcedure</a>( backEndStr, ePtr, location );</div>\n\
<div class=\"line\">            cout&lt;&lt;<span class=\"stringliteral\">&quot;Call hwRenderEffect::createEffect(&quot;</span>&lt;&lt;ePtr-&gt;name().asChar()</div>\n\
<div class=\"line\">                &lt;&lt;<span class=\"stringliteral\">&quot;) loc(&quot;</span>&lt;&lt;ePtr-&gt;mLocation</div>\n\
<div class=\"line\">                &lt;&lt;<span class=\"stringliteral\">&quot;) = &quot;</span>&lt;&lt;result&lt;&lt;endl;</div>\n\
<div class=\"line\">        }</div>\n\
<div class=\"line\">    }</div>\n\
<div class=\"line\">    <span class=\"keywordflow\">return</span> (<a class=\"code\" href=\"#!/url=./cpp_ref/class_m_draw_procedure_base.html\">MDrawProcedureBase</a> *)ePtr;</div>\n\
<div class=\"line\">}</div>\n\
<div class=\"line\"></div>\n\
<div class=\"line\"><span class=\"comment\">/* virtual */</span></div>\n\
<div class=\"line\"><span class=\"keywordtype\">bool</span></div>\n\
<div class=\"line\">hwRenderEffect::execute()</div>\n\
<div class=\"line\">{</div>\n\
<div class=\"line\">    <a class=\"code\" href=\"#!/url=./cpp_ref/class_m_hardware_renderer.html\">MHardwareRenderer</a> *pRenderer = MHardwareRenderer::theRenderer();</div>\n\
<div class=\"line\">    <span class=\"keywordflow\">if</span> (!pRenderer)</div>\n\
<div class=\"line\">        <span class=\"keywordflow\">return</span> <span class=\"keyword\">false</span>;</div>\n\
<div class=\"line\"></div>\n\
<div class=\"line\">    <span class=\"keyword\">const</span> <a class=\"code\" href=\"#!/url=./cpp_ref/class_m_string.html\">MString</a> &amp; backEndStr = pRenderer-&gt;<a class=\"code\" href=\"#!/url=./cpp_ref/class_m_hardware_renderer.html#afd786038730d9c301a6b3a489d22d816\">backEndString</a>();</div>\n\
<div class=\"line\">    <span class=\"keywordtype\">unsigned</span> <span class=\"keywordtype\">int</span> width = 0, height = 0;</div>\n\
<div class=\"line\"></div>\n\
<div class=\"line\">    <a name=\"_a7\"></a><a class=\"code\" href=\"#!/url=./cpp_ref/class_m_status.html\">MStatus</a> stat = </div>\n\
<div class=\"line\">        pRenderer-&gt;<a name=\"a8\"></a><a class=\"code\" href=\"#!/url=./cpp_ref/class_m_hardware_renderer.html#a6d61f7d5ea7404383040833309959bc2\">getBufferSize</a>( backEndStr, width, height );</div>\n\
<div class=\"line\">    <span class=\"keywordflow\">if</span> (width &lt;= 0 || height &lt;= 0)</div>\n\
<div class=\"line\">        <span class=\"keywordflow\">return</span> <span class=\"keyword\">false</span>;</div>\n\
<div class=\"line\"></div>\n\
<div class=\"line\">    <span class=\"keywordtype\">unsigned</span> <span class=\"keywordtype\">int</span> exposureNum;</div>\n\
<div class=\"line\">    <span class=\"keywordtype\">unsigned</span> <span class=\"keywordtype\">int</span> totalExposureCount;</div>\n\
<div class=\"line\">    pRenderer-&gt;<a name=\"a9\"></a><a class=\"code\" href=\"#!/url=./cpp_ref/class_m_hardware_renderer.html#a7c19b7916a9d03278e4e7916f714e0aa\">getCurrentExposureNumber</a>( backEndStr, exposureNum );</div>\n\
<div class=\"line\">    pRenderer-&gt;<a name=\"a10\"></a><a class=\"code\" href=\"#!/url=./cpp_ref/class_m_hardware_renderer.html#a6e81e2348f06ffbef802813f87b411c3\">getTotalExposureCount</a>( backEndStr, totalExposureCount );</div>\n\
<div class=\"line\"></div>\n\
<div class=\"line\">    <span class=\"comment\">// Perform some post-rendering. Invert the image.</span></div>\n\
<div class=\"line\">    <span class=\"keywordtype\">bool</span> xxxx = <span class=\"keyword\">true</span>;</div>\n\
<div class=\"line\">    <span class=\"keywordflow\">if</span> ( xxxx &amp;&amp; mLocation == <a name=\"a11\"></a><a class=\"code\" href=\"#!/url=./cpp_ref/class_m_hardware_renderer.html#a0526f0a40dc8240e14bfb22ebf93d986a40faa5492f345487e604f7fd7196f019\">MHardwareRenderer::kPostRendering</a> )</div>\n\
<div class=\"line\">    {</div>\n\
<div class=\"line\">        cout&lt;&lt;<span class=\"stringliteral\">&quot;Call EXP[&quot;</span>&lt;&lt;exposureNum&lt;&lt;<span class=\"stringliteral\">&quot;/&quot;</span>&lt;&lt;totalExposureCount</div>\n\
<div class=\"line\">            &lt;&lt;<span class=\"stringliteral\">&quot;] hwRenderEffect::execute(&quot;</span>&lt;&lt;width&lt;&lt;<span class=\"stringliteral\">&quot;, &quot;</span>&lt;&lt;height</div>\n\
<div class=\"line\">            &lt;&lt;<span class=\"stringliteral\">&quot;) -- &quot;</span>&lt;&lt;fName.asChar()&lt;&lt;endl;</div>\n\
<div class=\"line\"></div>\n\
<div class=\"line\">        <a class=\"code\" href=\"#!/url=./cpp_ref/class_m_hardware_renderer.html#a9e9dd2b7e61c97fa71a280792980f7da\">MHardwareRenderer::BufferPixelFormat</a> colFmt;</div>\n\
<div class=\"line\">        stat = pRenderer-&gt;<a name=\"a12\"></a><a class=\"code\" href=\"#!/url=./cpp_ref/class_m_hardware_renderer.html#a37d7ea9beab0d96a6305c8e39f829707\">getColorBufferPixelFormat</a>( backEndStr, colFmt );</div>\n\
<div class=\"line\">        <span class=\"keywordtype\">void</span> *pixels = 0;</div>\n\
<div class=\"line\">        <span class=\"keywordtype\">unsigned</span> <span class=\"keywordtype\">int</span> data_type = GL_UNSIGNED_BYTE; </div>\n\
<div class=\"line\">        <span class=\"keywordtype\">unsigned</span> <span class=\"keywordtype\">int</span> format = GL_RGBA;</div>\n\
<div class=\"line\"></div>\n\
<div class=\"line\">        <span class=\"keywordtype\">unsigned</span> <span class=\"keywordtype\">int</span> totalSize = width*height*4;</div>\n\
<div class=\"line\"></div>\n\
<div class=\"line\">        <span class=\"keywordflow\">if</span> (totalSize == 0)</div>\n\
<div class=\"line\">            <span class=\"keywordflow\">return</span> <span class=\"keyword\">false</span>;</div>\n\
<div class=\"line\"></div>\n\
<div class=\"line\">        <span class=\"keywordflow\">if</span> (colFmt == <a name=\"a13\"></a><a class=\"code\" href=\"#!/url=./cpp_ref/class_m_hardware_renderer.html#a9e9dd2b7e61c97fa71a280792980f7daa3f2006edd7ae9e9783a9e850c2ef2963\">MHardwareRenderer::kRGBA_Fix8</a>)</div>\n\
<div class=\"line\">        {</div>\n\
<div class=\"line\">            data_type = GL_UNSIGNED_BYTE; </div>\n\
<div class=\"line\">            format = GL_RGBA;</div>\n\
<div class=\"line\">            pixels = <span class=\"keyword\">new</span> <span class=\"keywordtype\">unsigned</span> <span class=\"keywordtype\">char</span>[totalSize];</div>\n\
<div class=\"line\">        }</div>\n\
<div class=\"line\"><span class=\"preprocessor\">#ifdef _SUPPORT_16_FLOAT_</span></div>\n\
<div class=\"line\">        <span class=\"keywordflow\">else</span> <span class=\"keywordflow\">if</span> (<a name=\"a14\"></a><a class=\"code\" href=\"#!/url=./cpp_ref/class_m_hardware_renderer.html#a9e9dd2b7e61c97fa71a280792980f7daad2a6f3e6707b26d54e5bf286461a4bd5\">MHardwareRenderer::kRGBA_Float16</a>)</div>\n\
<div class=\"line\">        {       </div>\n\
<div class=\"line\">            data_type = GL_HALF_FLOAT; </div>\n\
<div class=\"line\">            format = GL_RGBA;</div>\n\
<div class=\"line\">            pixels = <span class=\"keyword\">new</span> half[totalSize];</div>\n\
<div class=\"line\">        }</div>\n\
<div class=\"line\"><span class=\"preprocessor\">#endif</span></div>\n\
<div class=\"line\">        glPushAttrib(GL_ALL_ATTRIB_BITS); </div>\n\
<div class=\"line\"></div>\n\
<div class=\"line\">        glMatrixMode(GL_PROJECTION);    </div>\n\
<div class=\"line\">        glLoadIdentity();</div>\n\
<div class=\"line\">        glMatrixMode(GL_MODELVIEW);</div>\n\
<div class=\"line\">        glLoadIdentity();</div>\n\
<div class=\"line\"></div>\n\
<div class=\"line\">        glPixelZoom( 1.0f, 1.0f );</div>\n\
<div class=\"line\">        glPixelStorei(GL_PACK_ALIGNMENT, 1);</div>\n\
<div class=\"line\">        glReadPixels(0, 0, width, height, format, data_type, pixels);</div>\n\
<div class=\"line\"></div>\n\
<div class=\"line\">        <span class=\"keywordtype\">unsigned</span> <span class=\"keywordtype\">char</span> *pixelPtr = (<span class=\"keywordtype\">unsigned</span> <span class=\"keywordtype\">char</span>*)pixels;</div>\n\
<div class=\"line\">        <span class=\"keywordflow\">if</span> (pixelPtr)</div>\n\
<div class=\"line\">        {</div>\n\
<div class=\"line\">            <span class=\"keywordtype\">unsigned</span> <span class=\"keywordtype\">int</span> numPixels = width * height;</div>\n\
<div class=\"line\">            <span class=\"keywordflow\">for</span> (<span class=\"keywordtype\">unsigned</span> <span class=\"keywordtype\">int</span> i=0; i &lt; numPixels; i++)</div>\n\
<div class=\"line\">            {</div>\n\
<div class=\"line\">                *pixelPtr = (255 - *pixelPtr);  </div>\n\
<div class=\"line\">                pixelPtr++;</div>\n\
<div class=\"line\">                *pixelPtr = (255 - *pixelPtr);  </div>\n\
<div class=\"line\">                pixelPtr++;         </div>\n\
<div class=\"line\">                *pixelPtr = (255 - *pixelPtr);  </div>\n\
<div class=\"line\">                pixelPtr++;</div>\n\
<div class=\"line\">                *pixelPtr = 255;    </div>\n\
<div class=\"line\">                pixelPtr++;</div>\n\
<div class=\"line\">            }</div>\n\
<div class=\"line\">        }</div>\n\
<div class=\"line\"></div>\n\
<div class=\"line\">        glPixelStorei(GL_UNPACK_ALIGNMENT, 1);</div>\n\
<div class=\"line\">        glRasterPos2i( -1, -1 );</div>\n\
<div class=\"line\"></div>\n\
<div class=\"line\">        <span class=\"comment\">// We only want to clobber RGB. Leave alpha as is.</span></div>\n\
<div class=\"line\">        glColorMask( 1, 1, 1, 0 );</div>\n\
<div class=\"line\"></div>\n\
<div class=\"line\">        <span class=\"comment\">// For orthographic views, we need to make sure that depth</span></div>\n\
<div class=\"line\">        <span class=\"comment\">// test is disabled, otherwise the pixels will not draw.</span></div>\n\
<div class=\"line\">        glDisable(GL_DEPTH_TEST);</div>\n\
<div class=\"line\"></div>\n\
<div class=\"line\">        glDrawPixels(width, height, format, data_type, pixels); </div>\n\
<div class=\"line\"></div>\n\
<div class=\"line\">        <span class=\"keywordflow\">if</span> (pixels)</div>\n\
<div class=\"line\">        {</div>\n\
<div class=\"line\">            <span class=\"keywordflow\">if</span> (colFmt == <a class=\"code\" href=\"#!/url=./cpp_ref/class_m_hardware_renderer.html#a9e9dd2b7e61c97fa71a280792980f7daa3f2006edd7ae9e9783a9e850c2ef2963\">MHardwareRenderer::kRGBA_Fix8</a>)</div>\n\
<div class=\"line\">            {</div>\n\
<div class=\"line\">                <span class=\"keywordtype\">unsigned</span> <span class=\"keywordtype\">char</span> *pixelPtr2 = (<span class=\"keywordtype\">unsigned</span> <span class=\"keywordtype\">char</span>*)pixels;</div>\n\
<div class=\"line\">                <span class=\"keyword\">delete</span>[] pixelPtr2;</div>\n\
<div class=\"line\">            }</div>\n\
<div class=\"line\"><span class=\"preprocessor\">#ifdef _SUPPORT_16_FLOAT_</span></div>\n\
<div class=\"line\">            <span class=\"keywordflow\">else</span></div>\n\
<div class=\"line\">            {</div>\n\
<div class=\"line\">                half pixelPtr2 = (half*)pixels;</div>\n\
<div class=\"line\">                <span class=\"keyword\">delete</span>[] pixelPtr2;</div>\n\
<div class=\"line\">            }</div>\n\
<div class=\"line\"><span class=\"preprocessor\">#endif</span></div>\n\
<div class=\"line\">        }</div>\n\
<div class=\"line\"></div>\n\
<div class=\"line\"></div>\n\
<div class=\"line\">        glPopAttrib();</div>\n\
<div class=\"line\">    }</div>\n\
<div class=\"line\">    <span class=\"keywordflow\">else</span></div>\n\
<div class=\"line\">    {</div>\n\
<div class=\"line\">        <span class=\"comment\">// Perform some pre-rendering, pre-exposure. Draw coloured</span></div>\n\
<div class=\"line\">        <span class=\"comment\">// triangles.</span></div>\n\
<div class=\"line\">        <span class=\"keywordflow\">if</span> ( (mLocation == <a name=\"a15\"></a><a class=\"code\" href=\"#!/url=./cpp_ref/class_m_hardware_renderer.html#a0526f0a40dc8240e14bfb22ebf93d986aef844aa5884692f98da12f4b6498b98f\">MHardwareRenderer::kPreRendering</a> ) ||</div>\n\
<div class=\"line\">             ( mLocation == <a name=\"a16\"></a><a class=\"code\" href=\"#!/url=./cpp_ref/class_m_hardware_renderer.html#a0526f0a40dc8240e14bfb22ebf93d986a6742f06270edc03dc6e4fab458575a65\">MHardwareRenderer::kPreExposure</a>) )</div>\n\
<div class=\"line\">        {</div>\n\
<div class=\"line\">            cout&lt;&lt;<span class=\"stringliteral\">&quot;Call EXP[&quot;</span>&lt;&lt;exposureNum&lt;&lt;<span class=\"stringliteral\">&quot;/&quot;</span>&lt;&lt;totalExposureCount</div>\n\
<div class=\"line\">                &lt;&lt;<span class=\"stringliteral\">&quot;] hwRenderEffect::execute(&quot;</span>&lt;&lt;width&lt;&lt;<span class=\"stringliteral\">&quot;, &quot;</span>&lt;&lt;height</div>\n\
<div class=\"line\">                &lt;&lt;<span class=\"stringliteral\">&quot;) -- &quot;</span>&lt;&lt;fName.asChar()&lt;&lt;endl;</div>\n\
<div class=\"line\"></div>\n\
<div class=\"line\">            glPushAttrib(GL_ALL_ATTRIB_BITS); </div>\n\
<div class=\"line\"></div>\n\
<div class=\"line\">            glMatrixMode(GL_PROJECTION);    </div>\n\
<div class=\"line\">            glLoadIdentity();</div>\n\
<div class=\"line\">            glMatrixMode(GL_MODELVIEW);</div>\n\
<div class=\"line\">            glLoadIdentity();</div>\n\
<div class=\"line\"></div>\n\
<div class=\"line\">            glShadeModel(GL_SMOOTH);</div>\n\
<div class=\"line\">            glDisable(GL_DEPTH_TEST);</div>\n\
<div class=\"line\">            glEnable(GL_BLEND);</div>\n\
<div class=\"line\">            glBlendFunc(GL_ONE, GL_ZERO);</div>\n\
<div class=\"line\"></div>\n\
<div class=\"line\">            glColorMask( 1, 1, 1, 0 );</div>\n\
<div class=\"line\">            glBegin(GL_QUADS);</div>\n\
<div class=\"line\">            glColor4f(1.0f,1.0f,1.0f,0.5f);</div>\n\
<div class=\"line\">            glVertex3f( -1.0f, 1.0f, 0.0f);</div>\n\
<div class=\"line\">            glColor4f(0.0f,1.0f,1.0f,0.5f);</div>\n\
<div class=\"line\">            glVertex3f( 0.0f, 1.0f, 0.0f);</div>\n\
<div class=\"line\">            glColor4f(0.0f,1.0f,1.0f,0.5f);</div>\n\
<div class=\"line\">            glVertex3f(-1.0f,-1.0f, 0.0f);</div>\n\
<div class=\"line\">            glColor4f(1.0f,0.0f,1.0f,0.5f);</div>\n\
<div class=\"line\">            glVertex3f( 1.0f,-1.0f, 0.0f);</div>\n\
<div class=\"line\">            glEnd();</div>\n\
<div class=\"line\"></div>\n\
<div class=\"line\">            glEnable(GL_DEPTH_TEST);</div>\n\
<div class=\"line\">            glDisable(GL_BLEND);</div>\n\
<div class=\"line\"></div>\n\
<div class=\"line\">            glPopAttrib();</div>\n\
<div class=\"line\"></div>\n\
<div class=\"line\">        }</div>\n\
<div class=\"line\"></div>\n\
<div class=\"line\">        <span class=\"comment\">// Do some post exposure. Nothing for now...</span></div>\n\
<div class=\"line\">        <span class=\"keywordflow\">else</span> <span class=\"keywordflow\">if</span> ( mLocation == <a name=\"a17\"></a><a class=\"code\" href=\"#!/url=./cpp_ref/class_m_hardware_renderer.html#a0526f0a40dc8240e14bfb22ebf93d986aa719507f97eea20e5fce2da8660fdeac\">MHardwareRenderer::kPostExposure</a> )</div>\n\
<div class=\"line\">        {</div>\n\
<div class=\"line\">            cout&lt;&lt;<span class=\"stringliteral\">&quot;Call EXP[&quot;</span>&lt;&lt;exposureNum&lt;&lt;<span class=\"stringliteral\">&quot;/&quot;</span>&lt;&lt;totalExposureCount</div>\n\
<div class=\"line\">                &lt;&lt;<span class=\"stringliteral\">&quot;] hwRenderEffect::execute(&quot;</span>&lt;&lt;width&lt;&lt;<span class=\"stringliteral\">&quot;, &quot;</span>&lt;&lt;height&lt;&lt;<span class=\"stringliteral\">&quot;) -- POST-EXPOSURE&quot;</span>&lt;&lt;endl;</div>\n\
<div class=\"line\">        }</div>\n\
<div class=\"line\">    }</div>\n\
<div class=\"line\"></div>\n\
<div class=\"line\">    <span class=\"keywordflow\">return</span> <span class=\"keyword\">true</span>;</div>\n\
<div class=\"line\">}</div>\n\
<div class=\"line\"></div>\n\
<div class=\"line\"><span class=\"comment\">// Four callback classes.</span></div>\n\
<div class=\"line\"><span class=\"keyword\">static</span> hwRenderEffect *fsPreRender = 0;</div>\n\
<div class=\"line\"><span class=\"keyword\">static</span> hwRenderEffect *fsPreExposure = 0;</div>\n\
<div class=\"line\"><span class=\"keyword\">static</span> hwRenderEffect *fsPostExposure = 0;</div>\n\
<div class=\"line\"><span class=\"keyword\">static</span> hwRenderEffect *fsPostRender = 0;</div>\n\
<div class=\"line\"></div>\n\
<div class=\"line\"><a class=\"code\" href=\"#!/url=./cpp_ref/class_m_status.html\">MStatus</a> initializePlugin( <a name=\"_a18\"></a><a class=\"code\" href=\"#!/url=./cpp_ref/class_m_object.html\">MObject</a> obj )</div>\n\
<div class=\"line\">{ </div>\n\
<div class=\"line\">    <a class=\"code\" href=\"#!/url=./cpp_ref/class_m_status.html\">MStatus</a>   status = <a name=\"a19\"></a><a class=\"code\" href=\"#!/url=./cpp_ref/class_m_status.html#a02ab596f4febca68da503aaf8dde3a80af0536797208144380691e2b376ffc1d1\">MS::kSuccess</a>;</div>\n\
<div class=\"line\">    </div>\n\
<div class=\"line\">    <a name=\"_a20\"></a><a class=\"code\" href=\"#!/url=./cpp_ref/class_m_fn_plugin.html\">MFnPlugin</a> plugin( obj, PLUGIN_COMPANY, <span class=\"stringliteral\">&quot;7.0&quot;</span>, <span class=\"stringliteral\">&quot;Any&quot;</span>);</div>\n\
<div class=\"line\"></div>\n\
<div class=\"line\">    <span class=\"comment\">// Register the callbacks.</span></div>\n\
<div class=\"line\">    fsPreRender = (hwRenderEffect *)hwRenderEffect::createEffect(<a class=\"code\" href=\"#!/url=./cpp_ref/class_m_string.html\">MString</a>(<span class=\"stringliteral\">&quot;PRE-RENDER&quot;</span>), fsPreRender, <a class=\"code\" href=\"#!/url=./cpp_ref/class_m_hardware_renderer.html#a0526f0a40dc8240e14bfb22ebf93d986aef844aa5884692f98da12f4b6498b98f\">MHardwareRenderer::kPreRendering</a> );</div>\n\
<div class=\"line\">    fsPreExposure = (hwRenderEffect *)hwRenderEffect::createEffect(<a class=\"code\" href=\"#!/url=./cpp_ref/class_m_string.html\">MString</a>(<span class=\"stringliteral\">&quot;PRE-EXPOSURE&quot;</span>), fsPreExposure, <a class=\"code\" href=\"#!/url=./cpp_ref/class_m_hardware_renderer.html#a0526f0a40dc8240e14bfb22ebf93d986a6742f06270edc03dc6e4fab458575a65\">MHardwareRenderer::kPreExposure</a> );</div>\n\
<div class=\"line\">    fsPostExposure = (hwRenderEffect *)hwRenderEffect::createEffect(<a class=\"code\" href=\"#!/url=./cpp_ref/class_m_string.html\">MString</a>(<span class=\"stringliteral\">&quot;POST-EXPOSURE&quot;</span>), fsPostExposure, <a class=\"code\" href=\"#!/url=./cpp_ref/class_m_hardware_renderer.html#a0526f0a40dc8240e14bfb22ebf93d986aa719507f97eea20e5fce2da8660fdeac\">MHardwareRenderer::kPostExposure</a> );</div>\n\
<div class=\"line\">    fsPostRender = (hwRenderEffect *)hwRenderEffect::createEffect(<a class=\"code\" href=\"#!/url=./cpp_ref/class_m_string.html\">MString</a>(<span class=\"stringliteral\">&quot;POST-RENDER&quot;</span>), fsPostRender, <a class=\"code\" href=\"#!/url=./cpp_ref/class_m_hardware_renderer.html#a0526f0a40dc8240e14bfb22ebf93d986a40faa5492f345487e604f7fd7196f019\">MHardwareRenderer::kPostRendering</a> );</div>\n\
<div class=\"line\">    <span class=\"keywordflow\">return</span> status;</div>\n\
<div class=\"line\">}</div>\n\
<div class=\"line\"></div>\n\
<div class=\"line\"><a class=\"code\" href=\"#!/url=./cpp_ref/class_m_status.html\">MStatus</a> uninitializePlugin( <a class=\"code\" href=\"#!/url=./cpp_ref/class_m_object.html\">MObject</a> obj )</div>\n\
<div class=\"line\">{</div>\n\
<div class=\"line\">    <a class=\"code\" href=\"#!/url=./cpp_ref/class_m_status.html\">MStatus</a>   status = <a class=\"code\" href=\"#!/url=./cpp_ref/class_m_status.html#a02ab596f4febca68da503aaf8dde3a80af0536797208144380691e2b376ffc1d1\">MS::kSuccess</a>;</div>\n\
<div class=\"line\">    </div>\n\
<div class=\"line\">    <span class=\"comment\">// Unregister the callbacks.</span></div>\n\
<div class=\"line\">    hwRenderEffect::deleteEffect(fsPreRender);</div>\n\
<div class=\"line\">    fsPreRender = 0;</div>\n\
<div class=\"line\">    hwRenderEffect::deleteEffect(fsPreExposure);</div>\n\
<div class=\"line\">    fsPreExposure = 0;</div>\n\
<div class=\"line\">    hwRenderEffect::deleteEffect(fsPostExposure);</div>\n\
<div class=\"line\">    fsPostExposure = 0;</div>\n\
<div class=\"line\">    hwRenderEffect::deleteEffect(fsPostRender);</div>\n\
<div class=\"line\">    fsPostRender = 0;</div>\n\
<div class=\"line\"></div>\n\
<div class=\"line\">    <a class=\"code\" href=\"#!/url=./cpp_ref/class_m_fn_plugin.html\">MFnPlugin</a> plugin( obj );</div>\n\
<div class=\"line\"></div>\n\
<div class=\"line\">    <span class=\"keywordflow\">return</span> status;</div>\n\
<div class=\"line\">}</div>\n\
</div><!-- fragment --> </div><!-- contents -->\n\
</div><!-- doc-content -->\n\
          <div class=\"footer-block\"><a href=\"../html/ac.cmtdialog.htm\" class=\"comments-anchor\" target=\"_blank\"><span class=\"comments-link\">Please send us your comment about this page</span></a></div><br></div>\n\
   </div></body>\n\
</html>\n\
";