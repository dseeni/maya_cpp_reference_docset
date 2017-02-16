var topic = "<!-- saved from url=(0024)http://docs.autodesk.com -->\n\
<html>\n\
   <head><script src=\"../scripts/yepnope.1.5.4-min.js\" type=\"text/javascript\"></script><script src=\"../scripts/lib/jquery-1.11.1.min.js\" type=\"text/javascript\"></script><meta http-equiv=\"Content-Type\" content=\"text/html; charset=UTF-8\"><meta name=\"product\" content=\"MAYAUL\"><meta name=\"release\" content=\"2017\"><meta name=\"book\" content=\"Developer\"><meta name=\"created\" content=\"2016-06-16\"><meta name=\"topicid\" content=\"GUID-02DEF634-1E7B-48C6-8ACD-2C934CA97887\"><meta name=\"topic-type\" content=\"concept\">\n\
      <title>viewRenderOverridePostColor/viewRenderOverridePostColor.cpp</title>\n\
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
    cpp_ref_adsk_ref_toc.initNavTree(\'view_render_override_post_color_2view_render_override_post_color_8cpp-example.html\', tocPrefix);\n\
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
            <h1>viewRenderOverridePostColor/viewRenderOverridePostColor.cpp</h1>\n\
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
<div class=\"title\">viewRenderOverridePostColor/viewRenderOverridePostColor.cpp</div>  </div>\n\
</div><!--header-->\n\
<div class=\"contents\">\n\
<div class=\"fragment\"><div class=\"line\"><span class=\"comment\">//-</span></div>\n\
<div class=\"line\"><span class=\"comment\">// Copyright 2015 Autodesk, Inc.  All rights reserved.</span></div>\n\
<div class=\"line\"><span class=\"comment\">//</span></div>\n\
<div class=\"line\"><span class=\"comment\">// Use of this software is subject to the terms of the Autodesk license agreement</span></div>\n\
<div class=\"line\"><span class=\"comment\">// provided at the time of installation or download, or which otherwise</span></div>\n\
<div class=\"line\"><span class=\"comment\">// accompanies this software in either electronic or hard copy form.</span></div>\n\
<div class=\"line\"><span class=\"comment\">//+</span></div>\n\
<div class=\"line\"><span class=\"preprocessor\">#include &quot;viewRenderOverridePostColor.h&quot;</span></div>\n\
<div class=\"line\"><span class=\"preprocessor\">#include &lt;maya/MShaderManager.h&gt;</span></div>\n\
<div class=\"line\"></div>\n\
<div class=\"line\"><span class=\"keyword\">const</span> <a name=\"_a0\"></a><a class=\"code\" href=\"#!/url=./cpp_ref/class_m_string.html\">MString</a> ColorPostProcessOverride::kSwirlPassName = <span class=\"stringliteral\">&quot;ColorPostProcessOverride_Swirl&quot;</span>;</div>\n\
<div class=\"line\"><span class=\"keyword\">const</span> <a class=\"code\" href=\"#!/url=./cpp_ref/class_m_string.html\">MString</a> ColorPostProcessOverride::kFishEyePassName = <span class=\"stringliteral\">&quot;ColorPostProcessOverride_FishEye&quot;</span>;</div>\n\
<div class=\"line\"><span class=\"keyword\">const</span> <a class=\"code\" href=\"#!/url=./cpp_ref/class_m_string.html\">MString</a> ColorPostProcessOverride::kEdgeDetectPassName = <span class=\"stringliteral\">&quot;ColorPostProcessOverride_EdgeDetect&quot;</span>;</div>\n\
<div class=\"line\"></div>\n\
<div class=\"line\"><span class=\"comment\">//</span></div>\n\
<div class=\"line\"><span class=\"comment\">// Description: The purpose of this plug-in is to show how a render override</span></div>\n\
<div class=\"line\"><span class=\"comment\">// can be used to perform post scene render color operations.</span></div>\n\
<div class=\"line\"><span class=\"comment\">//</span></div>\n\
<div class=\"line\"><span class=\"comment\">// The basic idea is to render the scene into a custom render target T1.</span></div>\n\
<div class=\"line\"><span class=\"comment\">//</span></div>\n\
<div class=\"line\"><span class=\"comment\">// T1 is then used as input in on the first color (quad) operation. The output</span></div>\n\
<div class=\"line\"><span class=\"comment\">// is routed to a second render target T2. The next color operation will take</span></div>\n\
<div class=\"line\"><span class=\"comment\">// T2 as input and route to T1. If we have series of color operations then</span></div>\n\
<div class=\"line\"><span class=\"comment\">// they would &quot;ping-pong&quot; (alternative) the source and destination targets as needed.</span></div>\n\
<div class=\"line\"><span class=\"comment\">//</span></div>\n\
<div class=\"line\"><span class=\"comment\">// Following the color operations a HUD and presentation operation will use the</span></div>\n\
<div class=\"line\"><span class=\"comment\">// destination target used by the last color operation.</span></div>\n\
<div class=\"line\"><span class=\"comment\">// </span></div>\n\
<div class=\"line\"><span class=\"comment\"></span></div>\n\
<div class=\"line\"><span class=\"comment\">//</span></div>\n\
<div class=\"line\"><span class=\"comment\">// Constructor for override will set up operation lists.</span></div>\n\
<div class=\"line\"><span class=\"comment\">// This override has fairly simple logic to render a scene, perform</span></div>\n\
<div class=\"line\"><span class=\"comment\">// 2d post color operations, and then present the final results</span></div>\n\
<div class=\"line\"><span class=\"comment\">//</span></div>\n\
<div class=\"line\">ColorPostProcessOverride::ColorPostProcessOverride( <span class=\"keyword\">const</span> <a class=\"code\" href=\"#!/url=./cpp_ref/class_m_string.html\">MString</a> &amp; name )</div>\n\
<div class=\"line\">: MRenderOverride( name )</div>\n\
<div class=\"line\">, mUIName(<span class=\"stringliteral\">&quot;Color Post&quot;</span>)</div>\n\
<div class=\"line\">{</div>\n\
<div class=\"line\">    <a name=\"_a1\"></a><a class=\"code\" href=\"#!/url=./cpp_ref/class_m_h_w_render_1_1_m_renderer.html\">MHWRender::MRenderer</a> *theRenderer = <a name=\"a2\"></a><a class=\"code\" href=\"#!/url=./cpp_ref/class_m_h_w_render_1_1_m_renderer.html#a4678a72ac6959ed21d422d27928d0343\">MHWRender::MRenderer::theRenderer</a>();</div>\n\
<div class=\"line\">    <span class=\"keywordflow\">if</span> (!theRenderer)</div>\n\
<div class=\"line\">        <span class=\"keywordflow\">return</span>;</div>\n\
<div class=\"line\"></div>\n\
<div class=\"line\">    <span class=\"comment\">// Create a new set of operations as required</span></div>\n\
<div class=\"line\">    <a class=\"code\" href=\"#!/url=./cpp_ref/class_m_h_w_render_1_1_m_renderer.html#a4678a72ac6959ed21d422d27928d0343\">MHWRender::MRenderer::theRenderer</a>()-&gt;<a name=\"a3\"></a><a class=\"code\" href=\"#!/url=./cpp_ref/class_m_h_w_render_1_1_m_renderer.html#a592e0903ce501733b7ff820aa2477774\">getStandardViewportOperations</a>(mOperations);</div>\n\
<div class=\"line\"></div>\n\
<div class=\"line\">    PostQuadRender* swirlOp = <span class=\"keyword\">new</span> PostQuadRender( kSwirlPassName, <span class=\"stringliteral\">&quot;FilterSwirl&quot;</span>, <span class=\"stringliteral\">&quot;&quot;</span> );</div>\n\
<div class=\"line\">    PostQuadRender* fishEyeOp = <span class=\"keyword\">new</span> PostQuadRender( kFishEyePassName, <span class=\"stringliteral\">&quot;FilterFishEye&quot;</span>, <span class=\"stringliteral\">&quot;&quot;</span> );</div>\n\
<div class=\"line\">    PostQuadRender* edgeDetectOp = <span class=\"keyword\">new</span> PostQuadRender( kEdgeDetectPassName, <span class=\"stringliteral\">&quot;FilterEdgeDetect&quot;</span>, <span class=\"stringliteral\">&quot;&quot;</span> );</div>\n\
<div class=\"line\"></div>\n\
<div class=\"line\">    swirlOp-&gt;setEnabled(<span class=\"keyword\">false</span>); <span class=\"comment\">// swirl is disabled by default</span></div>\n\
<div class=\"line\"></div>\n\
<div class=\"line\">    mOperations.insertAfter(MHWRender::MRenderOperation::kStandardSceneName, swirlOp);</div>\n\
<div class=\"line\">    mOperations.insertAfter(kSwirlPassName, fishEyeOp);</div>\n\
<div class=\"line\">    mOperations.insertAfter(kFishEyePassName, edgeDetectOp);</div>\n\
<div class=\"line\">}</div>\n\
<div class=\"line\"></div>\n\
<div class=\"line\"></div>\n\
<div class=\"line\"><span class=\"comment\">// On destruction all operations are deleted.</span></div>\n\
<div class=\"line\"><span class=\"comment\">//</span></div>\n\
<div class=\"line\">ColorPostProcessOverride::~ColorPostProcessOverride()</div>\n\
<div class=\"line\">{</div>\n\
<div class=\"line\">}</div>\n\
<div class=\"line\">    </div>\n\
<div class=\"line\"><span class=\"comment\">// Drawing uses all internal code so will support all draw APIs</span></div>\n\
<div class=\"line\"><span class=\"comment\">//</span></div>\n\
<div class=\"line\"><a class=\"code\" href=\"#!/url=./cpp_ref/namespace_m_h_w_render.html#ad970d5c990d4803d0e9d73c1ff4fda49\">MHWRender::DrawAPI</a> ColorPostProcessOverride::supportedDrawAPIs()<span class=\"keyword\"> const</span></div>\n\
<div class=\"line\"><span class=\"keyword\"></span>{</div>\n\
<div class=\"line\">    <span class=\"keywordflow\">return</span> <a name=\"a4\"></a><a class=\"code\" href=\"#!/url=./cpp_ref/namespace_m_h_w_render.html#ad970d5c990d4803d0e9d73c1ff4fda49a98fc59e3a63859014185d6ff7f574a3b\">MHWRender::kAllDevices</a>;</div>\n\
<div class=\"line\">}</div>\n\
<div class=\"line\"></div>\n\
<div class=\"line\"></div>\n\
<div class=\"line\"><span class=\"comment\">// This method is just here as an example.  Simply calls the base class method.</span></div>\n\
<div class=\"line\"><span class=\"comment\">//</span></div>\n\
<div class=\"line\"><a name=\"_a5\"></a><a class=\"code\" href=\"#!/url=./cpp_ref/class_m_status.html\">MStatus</a> ColorPostProcessOverride::setup( <span class=\"keyword\">const</span> <a class=\"code\" href=\"#!/url=./cpp_ref/class_m_string.html\">MString</a> &amp; destination )</div>\n\
<div class=\"line\">{</div>\n\
<div class=\"line\">    <span class=\"keywordflow\">return</span> MRenderOverride::setup(destination);</div>\n\
<div class=\"line\">}</div>\n\
<div class=\"line\"></div>\n\
<div class=\"line\"><span class=\"comment\">// This method is just here as an example.  Simply calls the base class method.</span></div>\n\
<div class=\"line\"><span class=\"comment\">//</span></div>\n\
<div class=\"line\"><a class=\"code\" href=\"#!/url=./cpp_ref/class_m_status.html\">MStatus</a> ColorPostProcessOverride::cleanup()</div>\n\
<div class=\"line\">{</div>\n\
<div class=\"line\">    <span class=\"keywordflow\">return</span> MRenderOverride::cleanup();</div>\n\
<div class=\"line\">}</div>\n\
<div class=\"line\"></div>\n\
<div class=\"line\"><span class=\"comment\">//------------------------------------------------------------------------</span></div>\n\
<div class=\"line\"><span class=\"comment\">// Custom quad operation (post color operation)</span></div>\n\
<div class=\"line\"><span class=\"comment\">//</span></div>\n\
<div class=\"line\"><span class=\"comment\">// Instances of this class are used to provide different</span></div>\n\
<div class=\"line\"><span class=\"comment\">// shaders to be applied to a full screen quad.</span></div>\n\
<div class=\"line\"><span class=\"comment\">//</span></div>\n\
<div class=\"line\">PostQuadRender::PostQuadRender(<span class=\"keyword\">const</span> <a class=\"code\" href=\"#!/url=./cpp_ref/class_m_string.html\">MString</a> &amp;name, <span class=\"keyword\">const</span> <a class=\"code\" href=\"#!/url=./cpp_ref/class_m_string.html\">MString</a> &amp;<span class=\"keywordtype\">id</span>, <span class=\"keyword\">const</span> <a class=\"code\" href=\"#!/url=./cpp_ref/class_m_string.html\">MString</a> &amp;technique)</div>\n\
<div class=\"line\">    : MQuadRender( name )</div>\n\
<div class=\"line\">    , mShaderInstance(NULL)</div>\n\
<div class=\"line\">    , mEffectId(id)</div>\n\
<div class=\"line\">    , mEffectIdTechnique(technique)</div>\n\
<div class=\"line\">{</div>\n\
<div class=\"line\">    <span class=\"comment\">// Declare the required input targets</span></div>\n\
<div class=\"line\">    mInputTargetNames.clear();</div>\n\
<div class=\"line\">    <span class=\"comment\">// these are the targets we draw into for the post pass</span></div>\n\
<div class=\"line\">    <span class=\"comment\">// newly created offscreen targets.</span></div>\n\
<div class=\"line\">    mInputTargetNames.append(kAuxiliaryTargetName);</div>\n\
<div class=\"line\">    mInputTargetNames.append(kAuxiliaryDepthTargetName);</div>\n\
<div class=\"line\">    <span class=\"comment\">// These are the targets the scene is rendered into.  </span></div>\n\
<div class=\"line\">    <span class=\"comment\">// These are passed into the post pass shader for read.</span></div>\n\
<div class=\"line\">    mInputTargetNames.append(kColorTargetName);</div>\n\
<div class=\"line\">    mInputTargetNames.append(kDepthTargetName);</div>\n\
<div class=\"line\"></div>\n\
<div class=\"line\">    <span class=\"comment\">// Declare the produced output targets</span></div>\n\
<div class=\"line\">    <span class=\"comment\">// note these are in the reverse order of the inputs.</span></div>\n\
<div class=\"line\">    <span class=\"comment\">// This is because we want to read from the previously written target</span></div>\n\
<div class=\"line\">    <span class=\"comment\">// and write to a new auxiliary target.  The new target becomes the color target.</span></div>\n\
<div class=\"line\">    mOutputTargetNames.clear();</div>\n\
<div class=\"line\">    mOutputTargetNames.append(kColorTargetName);</div>\n\
<div class=\"line\">    mOutputTargetNames.append(kDepthTargetName);</div>\n\
<div class=\"line\">    mOutputTargetNames.append(kAuxiliaryTargetName);</div>\n\
<div class=\"line\">    mOutputTargetNames.append(kAuxiliaryDepthTargetName);</div>\n\
<div class=\"line\"></div>\n\
<div class=\"line\">}</div>\n\
<div class=\"line\"></div>\n\
<div class=\"line\">PostQuadRender::~PostQuadRender()</div>\n\
<div class=\"line\">{</div>\n\
<div class=\"line\">    <span class=\"keywordflow\">if</span> (mShaderInstance)</div>\n\
<div class=\"line\">    {</div>\n\
<div class=\"line\">        <a class=\"code\" href=\"#!/url=./cpp_ref/class_m_h_w_render_1_1_m_renderer.html\">MHWRender::MRenderer</a>* renderer = <a class=\"code\" href=\"#!/url=./cpp_ref/class_m_h_w_render_1_1_m_renderer.html#a4678a72ac6959ed21d422d27928d0343\">MHWRender::MRenderer::theRenderer</a>();</div>\n\
<div class=\"line\">        <span class=\"keywordflow\">if</span> (renderer)</div>\n\
<div class=\"line\">        {</div>\n\
<div class=\"line\">            <span class=\"keyword\">const</span> <a name=\"_a6\"></a><a class=\"code\" href=\"#!/url=./cpp_ref/class_m_h_w_render_1_1_m_shader_manager.html\">MHWRender::MShaderManager</a>* shaderMgr = renderer-&gt;<a name=\"a7\"></a><a class=\"code\" href=\"#!/url=./cpp_ref/class_m_h_w_render_1_1_m_renderer.html#a4603e18a1b89b798a2e4a4f36d9b5125\">getShaderManager</a>();</div>\n\
<div class=\"line\">            <span class=\"keywordflow\">if</span> (shaderMgr)</div>\n\
<div class=\"line\">            {</div>\n\
<div class=\"line\">                shaderMgr-&gt;<a name=\"a8\"></a><a class=\"code\" href=\"#!/url=./cpp_ref/class_m_h_w_render_1_1_m_shader_manager.html#a0c7deb55edc231cbb2365b271ecd55f8\">releaseShader</a>(mShaderInstance);</div>\n\
<div class=\"line\">            }</div>\n\
<div class=\"line\">        }</div>\n\
<div class=\"line\">        mShaderInstance = NULL;</div>\n\
<div class=\"line\">    }</div>\n\
<div class=\"line\">}</div>\n\
<div class=\"line\"></div>\n\
<div class=\"line\"><span class=\"comment\">/*</span></div>\n\
<div class=\"line\"><span class=\"comment\">    Return the appropriate shader instance based on the what</span></div>\n\
<div class=\"line\"><span class=\"comment\">    we want the quad operation to perform</span></div>\n\
<div class=\"line\"><span class=\"comment\">*/</span></div>\n\
<div class=\"line\"><span class=\"keyword\">const</span> <a name=\"_a9\"></a><a class=\"code\" href=\"#!/url=./cpp_ref/class_m_h_w_render_1_1_m_shader_instance.html\">MHWRender::MShaderInstance</a> *</div>\n\
<div class=\"line\">PostQuadRender::shader()</div>\n\
<div class=\"line\">{</div>\n\
<div class=\"line\">    <span class=\"comment\">// Create a new shader instance for this quad render instance</span></div>\n\
<div class=\"line\">    <span class=\"comment\">//</span></div>\n\
<div class=\"line\">    <span class=\"keywordflow\">if</span> (mShaderInstance == NULL)</div>\n\
<div class=\"line\">    {</div>\n\
<div class=\"line\">        <a class=\"code\" href=\"#!/url=./cpp_ref/class_m_h_w_render_1_1_m_renderer.html\">MHWRender::MRenderer</a>* renderer = <a class=\"code\" href=\"#!/url=./cpp_ref/class_m_h_w_render_1_1_m_renderer.html#a4678a72ac6959ed21d422d27928d0343\">MHWRender::MRenderer::theRenderer</a>();</div>\n\
<div class=\"line\">        <span class=\"keywordflow\">if</span> (renderer)</div>\n\
<div class=\"line\">        {</div>\n\
<div class=\"line\">            <span class=\"keyword\">const</span> <a class=\"code\" href=\"#!/url=./cpp_ref/class_m_h_w_render_1_1_m_shader_manager.html\">MHWRender::MShaderManager</a>* shaderMgr = renderer-&gt;<a class=\"code\" href=\"#!/url=./cpp_ref/class_m_h_w_render_1_1_m_renderer.html#a4603e18a1b89b798a2e4a4f36d9b5125\">getShaderManager</a>();</div>\n\
<div class=\"line\">            <span class=\"keywordflow\">if</span> (shaderMgr)</div>\n\
<div class=\"line\">            {</div>\n\
<div class=\"line\">                mShaderInstance = shaderMgr-&gt;<a name=\"a10\"></a><a class=\"code\" href=\"#!/url=./cpp_ref/class_m_h_w_render_1_1_m_shader_manager.html#a581c659670f0e3168750382c61a91a25\">getEffectsFileShader</a>( mEffectId.asChar(), mEffectIdTechnique.asChar() );</div>\n\
<div class=\"line\">            }</div>\n\
<div class=\"line\">        }</div>\n\
<div class=\"line\">    }</div>\n\
<div class=\"line\"></div>\n\
<div class=\"line\">    <span class=\"keywordflow\">if</span> (mShaderInstance)</div>\n\
<div class=\"line\">    {</div>\n\
<div class=\"line\">        <span class=\"comment\">// Set the input texture parameter &#39;gInputTex&#39; to use</span></div>\n\
<div class=\"line\">        <span class=\"comment\">// a given color target</span></div>\n\
<div class=\"line\">        <a name=\"_a11\"></a><a class=\"code\" href=\"#!/url=./cpp_ref/struct_m_h_w_render_1_1_m_render_target_assignment.html\">MHWRender::MRenderTargetAssignment</a> assignment;</div>\n\
<div class=\"line\">        <span class=\"comment\">// Note that we have 2 targets with one being used as the output and</span></div>\n\
<div class=\"line\">        <span class=\"comment\">// here the other as the input.</span></div>\n\
<div class=\"line\">        assignment.<a name=\"a12\"></a>target = getInputTarget(kColorTargetName);</div>\n\
<div class=\"line\">        </div>\n\
<div class=\"line\">        <a class=\"code\" href=\"#!/url=./cpp_ref/class_m_status.html\">MStatus</a> status = mShaderInstance-&gt;setParameter(<span class=\"stringliteral\">&quot;gInputTex&quot;</span>, assignment);</div>\n\
<div class=\"line\">        <span class=\"keywordflow\">if</span> (status != <a name=\"a13\"></a><a class=\"code\" href=\"#!/url=./cpp_ref/class_m_status.html#a02ab596f4febca68da503aaf8dde3a80af0536797208144380691e2b376ffc1d1\">MStatus::kSuccess</a>)</div>\n\
<div class=\"line\">        {</div>\n\
<div class=\"line\">            printf(<span class=\"stringliteral\">&quot;Could not set input render target / texture parameter on post 2d shader\\n&quot;</span>);</div>\n\
<div class=\"line\">            <span class=\"keywordflow\">return</span> NULL;</div>\n\
<div class=\"line\">        }</div>\n\
<div class=\"line\">        <span class=\"keyword\">const</span> <a class=\"code\" href=\"#!/url=./cpp_ref/class_m_string.html\">MString</a> edgeDetect(<span class=\"stringliteral\">&quot;FilterEdgeDetect&quot;</span>);</div>\n\
<div class=\"line\">        <span class=\"keywordflow\">if</span> (mEffectId == edgeDetect)</div>\n\
<div class=\"line\">        {</div>\n\
<div class=\"line\">            status = mShaderInstance-&gt;setParameter(<span class=\"stringliteral\">&quot;gThickness&quot;</span>, 0.5f );</div>\n\
<div class=\"line\">            <span class=\"keywordflow\">if</span> (status != <a class=\"code\" href=\"#!/url=./cpp_ref/class_m_status.html#a02ab596f4febca68da503aaf8dde3a80af0536797208144380691e2b376ffc1d1\">MStatus::kSuccess</a>)</div>\n\
<div class=\"line\">            {</div>\n\
<div class=\"line\">                printf(<span class=\"stringliteral\">&quot;Could not set thickness parameter on edge detect shader\\n&quot;</span>);</div>\n\
<div class=\"line\">            }</div>\n\
<div class=\"line\">            status = mShaderInstance-&gt;setParameter(<span class=\"stringliteral\">&quot;gThreshold&quot;</span>, 0.1f );</div>\n\
<div class=\"line\">            <span class=\"keywordflow\">if</span> (status != <a class=\"code\" href=\"#!/url=./cpp_ref/class_m_status.html#a02ab596f4febca68da503aaf8dde3a80af0536797208144380691e2b376ffc1d1\">MStatus::kSuccess</a>)</div>\n\
<div class=\"line\">            {</div>\n\
<div class=\"line\">                printf(<span class=\"stringliteral\">&quot;Could not set threshold parameter on edge detect shader\\n&quot;</span>);</div>\n\
<div class=\"line\">            }</div>\n\
<div class=\"line\">        }</div>\n\
<div class=\"line\">    }</div>\n\
<div class=\"line\"></div>\n\
<div class=\"line\">    <span class=\"keywordflow\">return</span> mShaderInstance;</div>\n\
<div class=\"line\">}</div>\n\
<div class=\"line\"></div>\n\
<div class=\"line\"><span class=\"keywordtype\">bool</span> PostQuadRender::getInputTargetDescription(<span class=\"keyword\">const</span> <a class=\"code\" href=\"#!/url=./cpp_ref/class_m_string.html\">MString</a>&amp; name, <a name=\"_a14\"></a><a class=\"code\" href=\"#!/url=./cpp_ref/class_m_h_w_render_1_1_m_render_target_description.html\">MHWRender::MRenderTargetDescription</a>&amp; description) </div>\n\
<div class=\"line\">{ </div>\n\
<div class=\"line\">    <span class=\"comment\">// We do not provide a target description for the auxiliary target because </span></div>\n\
<div class=\"line\">    <span class=\"comment\">// we expect that target to be set as an output.</span></div>\n\
<div class=\"line\">    <span class=\"comment\">// We copy the descriptions from the auxiliary targets so the msaa properties and size match.</span></div>\n\
<div class=\"line\">    <span class=\"keywordflow\">if</span> (name == kColorTargetName)</div>\n\
<div class=\"line\">    {</div>\n\
<div class=\"line\">        <a name=\"_a15\"></a><a class=\"code\" href=\"#!/url=./cpp_ref/class_m_h_w_render_1_1_m_render_target.html\">MHWRender::MRenderTarget</a>* outTarget = getInputTarget(kAuxiliaryTargetName);</div>\n\
<div class=\"line\">        <span class=\"keywordflow\">if</span> (outTarget)</div>\n\
<div class=\"line\">            outTarget-&gt;<a name=\"a16\"></a><a class=\"code\" href=\"#!/url=./cpp_ref/class_m_h_w_render_1_1_m_render_target.html#aa7073988ff86d081d3b457d2837517ad\">targetDescription</a>(description);</div>\n\
<div class=\"line\">        description.<a name=\"a17\"></a><a class=\"code\" href=\"#!/url=./cpp_ref/class_m_h_w_render_1_1_m_render_target_description.html#aaaf4534a5d68e40622237471746e2d00\">setName</a>(<span class=\"stringliteral\">&quot;_post_target_1&quot;</span>);</div>\n\
<div class=\"line\">        <span class=\"keywordflow\">return</span> <span class=\"keyword\">true</span>;</div>\n\
<div class=\"line\">    }</div>\n\
<div class=\"line\">    <span class=\"keywordflow\">else</span> <span class=\"keywordflow\">if</span> (name == kDepthTargetName)   </div>\n\
<div class=\"line\">    {</div>\n\
<div class=\"line\">        <a class=\"code\" href=\"#!/url=./cpp_ref/class_m_h_w_render_1_1_m_render_target.html\">MHWRender::MRenderTarget</a>* outTarget = getInputTarget(kAuxiliaryDepthTargetName);</div>\n\
<div class=\"line\">        <span class=\"keywordflow\">if</span> (outTarget)</div>\n\
<div class=\"line\">            outTarget-&gt;<a class=\"code\" href=\"#!/url=./cpp_ref/class_m_h_w_render_1_1_m_render_target.html#aa7073988ff86d081d3b457d2837517ad\">targetDescription</a>(description);</div>\n\
<div class=\"line\">        description.<a class=\"code\" href=\"#!/url=./cpp_ref/class_m_h_w_render_1_1_m_render_target_description.html#aaaf4534a5d68e40622237471746e2d00\">setName</a>(<span class=\"stringliteral\">&quot;_post_target_depth&quot;</span>);</div>\n\
<div class=\"line\">        <span class=\"keywordflow\">return</span> <span class=\"keyword\">true</span>;</div>\n\
<div class=\"line\">    }</div>\n\
<div class=\"line\"></div>\n\
<div class=\"line\">    <span class=\"keywordflow\">return</span> <span class=\"keyword\">false</span>;</div>\n\
<div class=\"line\">}</div>\n\
<div class=\"line\"></div>\n\
<div class=\"line\"><span class=\"keywordtype\">int</span> PostQuadRender::writableTargets(<span class=\"keywordtype\">unsigned</span> <span class=\"keywordtype\">int</span>&amp; count)</div>\n\
<div class=\"line\">{</div>\n\
<div class=\"line\">    count = 2;</div>\n\
<div class=\"line\">    <span class=\"keywordflow\">return</span> 0;</div>\n\
<div class=\"line\">}</div>\n\
<div class=\"line\"></div>\n\
<div class=\"line\"><a name=\"_a18\"></a><a class=\"code\" href=\"#!/url=./cpp_ref/class_m_h_w_render_1_1_m_clear_operation.html\">MHWRender::MClearOperation</a> &amp;</div>\n\
<div class=\"line\">PostQuadRender::clearOperation()</div>\n\
<div class=\"line\">{</div>\n\
<div class=\"line\">    mClearOperation.<a name=\"a19\"></a><a class=\"code\" href=\"#!/url=./cpp_ref/class_m_h_w_render_1_1_m_clear_operation.html#a0eb426378a3484ea204ea50ad2daa547\">setClearGradient</a>( <span class=\"keyword\">false</span> );</div>\n\
<div class=\"line\">    mClearOperation.setMask( (<span class=\"keywordtype\">unsigned</span> <span class=\"keywordtype\">int</span>) <a name=\"a20\"></a><a class=\"code\" href=\"#!/url=./cpp_ref/class_m_h_w_render_1_1_m_clear_operation.html#a55b92d9e088b6065ff2e762739b064f9aaae58611b37c34f59ffa59bed613ca20\">MHWRender::MClearOperation::kClearNone</a> );</div>\n\
<div class=\"line\">    <span class=\"keywordflow\">return</span> mClearOperation;</div>\n\
<div class=\"line\">}</div>\n\
</div><!-- fragment --> </div><!-- contents -->\n\
</div><!-- doc-content -->\n\
          <div class=\"footer-block\"><a href=\"../html/ac.cmtdialog.htm\" class=\"comments-anchor\" target=\"_blank\"><span class=\"comments-link\">Please send us your comment about this page</span></a></div><br></div>\n\
   </div></body>\n\
</html>\n\
";