var topic = "<!-- saved from url=(0024)http://docs.autodesk.com -->\n\
<html>\n\
   <head><script src=\"../scripts/yepnope.1.5.4-min.js\" type=\"text/javascript\"></script><script src=\"../scripts/lib/jquery-1.11.1.min.js\" type=\"text/javascript\"></script><meta http-equiv=\"Content-Type\" content=\"text/html; charset=UTF-8\"><meta name=\"product\" content=\"MAYAUL\"><meta name=\"release\" content=\"2017\"><meta name=\"book\" content=\"Developer\"><meta name=\"created\" content=\"2016-06-16\"><meta name=\"topicid\" content=\"GUID-02DEF634-1E7B-48C6-8ACD-2C934CA97887\"><meta name=\"topic-type\" content=\"concept\">\n\
      <title>viewOverrideTrackTexture/viewOverrideTrackTexture.cpp</title>\n\
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
    cpp_ref_adsk_ref_toc.initNavTree(\'view_override_track_texture_2view_override_track_texture_8cpp-example.html\', tocPrefix);\n\
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
            <h1>viewOverrideTrackTexture/viewOverrideTrackTexture.cpp</h1>\n\
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
<div class=\"title\">viewOverrideTrackTexture/viewOverrideTrackTexture.cpp</div>  </div>\n\
</div><!--header-->\n\
<div class=\"contents\">\n\
<div class=\"fragment\"><div class=\"line\"><span class=\"comment\">//-</span></div>\n\
<div class=\"line\"><span class=\"comment\">// Copyright 2015 Autodesk, Inc.  All rights reserved.</span></div>\n\
<div class=\"line\"><span class=\"comment\">//</span></div>\n\
<div class=\"line\"><span class=\"comment\">// Use of this software is subject to the terms of the Autodesk license agreement</span></div>\n\
<div class=\"line\"><span class=\"comment\">// provided at the time of installation or download, or which otherwise</span></div>\n\
<div class=\"line\"><span class=\"comment\">// accompanies this software in either electronic or hard copy form.</span></div>\n\
<div class=\"line\"><span class=\"comment\">//+</span></div>\n\
<div class=\"line\"><span class=\"preprocessor\">#include &quot;viewOverrideTrackTexture.h&quot;</span></div>\n\
<div class=\"line\"><span class=\"preprocessor\">#include &lt;maya/MItDependencyNodes.h&gt;</span></div>\n\
<div class=\"line\"><span class=\"preprocessor\">#include &lt;maya/MFnDependencyNode.h&gt;</span></div>\n\
<div class=\"line\"><span class=\"preprocessor\">#include &lt;maya/MObject.h&gt;</span></div>\n\
<div class=\"line\"><span class=\"preprocessor\">#include &lt;maya/MTextureManager.h&gt;</span></div>\n\
<div class=\"line\"><span class=\"comment\">// For override creation we return a UI name so that it shows up in as a</span></div>\n\
<div class=\"line\"><span class=\"comment\">// renderer in the 3d viewport menus.</span></div>\n\
<div class=\"line\"><span class=\"comment\">// </span></div>\n\
<div class=\"line\">viewOverrideTrackTexture::viewOverrideTrackTexture( <span class=\"keyword\">const</span> <a name=\"_a0\"></a><a class=\"code\" href=\"#!/url=./cpp_ref/class_m_string.html\">MString</a> &amp; name )</div>\n\
<div class=\"line\">: MRenderOverride( name )</div>\n\
<div class=\"line\">, mUIName(<span class=\"stringliteral\">&quot;Track Texture VP2 Override&quot;</span>)</div>\n\
<div class=\"line\">, mCurrentOperation(-1)</div>\n\
<div class=\"line\">{</div>\n\
<div class=\"line\">    mOperations[0] = mOperations[1] = NULL;</div>\n\
<div class=\"line\">    mOperationNames[0] = <span class=\"stringliteral\">&quot;viewOverrideTrackTexture_Blit&quot;</span>;</div>\n\
<div class=\"line\">    mOperationNames[1] = <span class=\"stringliteral\">&quot;viewOverrideTrackTexture_Present&quot;</span>;</div>\n\
<div class=\"line\">    mTexture = NULL;</div>\n\
<div class=\"line\">}</div>\n\
<div class=\"line\"></div>\n\
<div class=\"line\"><span class=\"comment\">// On destruction all operations are deleted.</span></div>\n\
<div class=\"line\"><span class=\"comment\">//</span></div>\n\
<div class=\"line\">viewOverrideTrackTexture::~viewOverrideTrackTexture()</div>\n\
<div class=\"line\">{</div>\n\
<div class=\"line\">    <span class=\"keywordflow\">if</span> (mTexture)</div>\n\
<div class=\"line\">    {</div>\n\
<div class=\"line\">        <a name=\"_a1\"></a><a class=\"code\" href=\"#!/url=./cpp_ref/class_m_h_w_render_1_1_m_renderer.html\">MHWRender::MRenderer</a> *theRenderer = <a name=\"a2\"></a><a class=\"code\" href=\"#!/url=./cpp_ref/class_m_h_w_render_1_1_m_renderer.html#a4678a72ac6959ed21d422d27928d0343\">MHWRender::MRenderer::theRenderer</a>();</div>\n\
<div class=\"line\">        <a name=\"_a3\"></a><a class=\"code\" href=\"#!/url=./cpp_ref/class_m_h_w_render_1_1_m_texture_manager.html\">MHWRender::MTextureManager</a>* textureManager = theRenderer-&gt;<a name=\"a4\"></a><a class=\"code\" href=\"#!/url=./cpp_ref/class_m_h_w_render_1_1_m_renderer.html#aa3f2ec2984800e2cd8ea09b4ad9f072e\">getTextureManager</a>();</div>\n\
<div class=\"line\">        textureManager-&gt;<a name=\"a5\"></a><a class=\"code\" href=\"#!/url=./cpp_ref/class_m_h_w_render_1_1_m_texture_manager.html#a82d198d9b895a67d774077d67073d22a\">releaseTexture</a>(mTexture);</div>\n\
<div class=\"line\">    }</div>\n\
<div class=\"line\"></div>\n\
<div class=\"line\">    <span class=\"keywordflow\">for</span> (<span class=\"keywordtype\">unsigned</span> <span class=\"keywordtype\">int</span> i=0; i&lt;2; i++)</div>\n\
<div class=\"line\">    {</div>\n\
<div class=\"line\">        <span class=\"keywordflow\">if</span> (mOperations[i])</div>\n\
<div class=\"line\">        {</div>\n\
<div class=\"line\">            <span class=\"keyword\">delete</span> mOperations[i];</div>\n\
<div class=\"line\">            mOperations[i] = NULL;</div>\n\
<div class=\"line\">        }</div>\n\
<div class=\"line\">    }</div>\n\
<div class=\"line\">}</div>\n\
<div class=\"line\">    </div>\n\
<div class=\"line\"><span class=\"comment\">// Drawing uses all internal code so will support all draw APIs</span></div>\n\
<div class=\"line\"><span class=\"comment\">//</span></div>\n\
<div class=\"line\"><a class=\"code\" href=\"#!/url=./cpp_ref/namespace_m_h_w_render.html#ad970d5c990d4803d0e9d73c1ff4fda49\">MHWRender::DrawAPI</a> viewOverrideTrackTexture::supportedDrawAPIs()<span class=\"keyword\"> const</span></div>\n\
<div class=\"line\"><span class=\"keyword\"></span>{</div>\n\
<div class=\"line\">    <span class=\"keywordflow\">return</span> <a name=\"a6\"></a><a class=\"code\" href=\"#!/url=./cpp_ref/namespace_m_h_w_render.html#ad970d5c990d4803d0e9d73c1ff4fda49a98fc59e3a63859014185d6ff7f574a3b\">MHWRender::kAllDevices</a>;</div>\n\
<div class=\"line\">}</div>\n\
<div class=\"line\"></div>\n\
<div class=\"line\"><span class=\"comment\">// Basic iterator methods which returns a list of operations in order</span></div>\n\
<div class=\"line\"><span class=\"comment\">// The operations are not executed at this time only queued for execution</span></div>\n\
<div class=\"line\"><span class=\"comment\">//</span></div>\n\
<div class=\"line\"><span class=\"comment\">// - startOperationIterator() : to start iterating</span></div>\n\
<div class=\"line\"><span class=\"comment\">// - renderOperation() : will be called to return the current operation</span></div>\n\
<div class=\"line\"><span class=\"comment\">// - nextRenderOperation() : when this returns false we&#39;ve returned all operations</span></div>\n\
<div class=\"line\"><span class=\"comment\">//</span></div>\n\
<div class=\"line\"><span class=\"keywordtype\">bool</span> viewOverrideTrackTexture::startOperationIterator()</div>\n\
<div class=\"line\">{</div>\n\
<div class=\"line\">    mCurrentOperation = 0;</div>\n\
<div class=\"line\">    <span class=\"keywordflow\">return</span> <span class=\"keyword\">true</span>;</div>\n\
<div class=\"line\">}</div>\n\
<div class=\"line\"></div>\n\
<div class=\"line\"><a name=\"_a7\"></a><a class=\"code\" href=\"#!/url=./cpp_ref/class_m_h_w_render_1_1_m_render_operation.html\">MHWRender::MRenderOperation</a>*</div>\n\
<div class=\"line\">viewOverrideTrackTexture::renderOperation()</div>\n\
<div class=\"line\">{</div>\n\
<div class=\"line\">    <span class=\"keywordflow\">if</span> (mCurrentOperation &gt;= 0 &amp;&amp; mCurrentOperation &lt; 2)</div>\n\
<div class=\"line\">    {</div>\n\
<div class=\"line\">        <span class=\"keywordflow\">if</span> (mOperations[mCurrentOperation])</div>\n\
<div class=\"line\">        {</div>\n\
<div class=\"line\">            <span class=\"keywordflow\">return</span> mOperations[mCurrentOperation];</div>\n\
<div class=\"line\">        }</div>\n\
<div class=\"line\">    }</div>\n\
<div class=\"line\">    <span class=\"keywordflow\">return</span> NULL;</div>\n\
<div class=\"line\">}</div>\n\
<div class=\"line\"></div>\n\
<div class=\"line\"><span class=\"keywordtype\">bool</span> </div>\n\
<div class=\"line\">viewOverrideTrackTexture::nextRenderOperation()</div>\n\
<div class=\"line\">{</div>\n\
<div class=\"line\">    mCurrentOperation++;</div>\n\
<div class=\"line\">    <span class=\"keywordflow\">if</span> (mCurrentOperation &lt; 2)</div>\n\
<div class=\"line\">    {</div>\n\
<div class=\"line\">        <span class=\"keywordflow\">return</span> <span class=\"keyword\">true</span>;</div>\n\
<div class=\"line\">    }</div>\n\
<div class=\"line\">    <span class=\"keywordflow\">return</span> <span class=\"keyword\">false</span>;</div>\n\
<div class=\"line\">}</div>\n\
<div class=\"line\"></div>\n\
<div class=\"line\"><span class=\"comment\">//</span></div>\n\
<div class=\"line\"><span class=\"comment\">// On setup we make sure that we have created the appropriate operations</span></div>\n\
<div class=\"line\"><span class=\"comment\">// These will be returned via the iteration code above.</span></div>\n\
<div class=\"line\"><span class=\"comment\">//</span></div>\n\
<div class=\"line\"><span class=\"comment\">// Here we create:</span></div>\n\
<div class=\"line\"><span class=\"comment\">//</span></div>\n\
<div class=\"line\"><span class=\"comment\">//  - One quad operation to draw the texture for the first file node found</span></div>\n\
<div class=\"line\"><span class=\"comment\">//   in the scene.</span></div>\n\
<div class=\"line\"><span class=\"comment\">//  - One &quot;stock&quot; presentation operation to be able to see the results in the viewport</span></div>\n\
<div class=\"line\"><span class=\"comment\">//</span></div>\n\
<div class=\"line\"><a name=\"_a8\"></a><a class=\"code\" href=\"#!/url=./cpp_ref/class_m_status.html\">MStatus</a> viewOverrideTrackTexture::setup( <span class=\"keyword\">const</span> <a class=\"code\" href=\"#!/url=./cpp_ref/class_m_string.html\">MString</a> &amp; destination )</div>\n\
<div class=\"line\">{</div>\n\
<div class=\"line\">    <a class=\"code\" href=\"#!/url=./cpp_ref/class_m_h_w_render_1_1_m_renderer.html\">MHWRender::MRenderer</a> *theRenderer = <a class=\"code\" href=\"#!/url=./cpp_ref/class_m_h_w_render_1_1_m_renderer.html#a4678a72ac6959ed21d422d27928d0343\">MHWRender::MRenderer::theRenderer</a>();</div>\n\
<div class=\"line\">    <span class=\"keywordflow\">if</span> (!theRenderer)</div>\n\
<div class=\"line\">        <span class=\"keywordflow\">return</span> <a name=\"a9\"></a><a class=\"code\" href=\"#!/url=./cpp_ref/class_m_status.html#a02ab596f4febca68da503aaf8dde3a80a1ef6c2d725fb4bec3e7e840d28adbc00\">MStatus::kFailure</a>;</div>\n\
<div class=\"line\"></div>\n\
<div class=\"line\">    <a class=\"code\" href=\"#!/url=./cpp_ref/class_m_h_w_render_1_1_m_texture_manager.html\">MHWRender::MTextureManager</a>* textureManager = theRenderer-&gt;<a class=\"code\" href=\"#!/url=./cpp_ref/class_m_h_w_render_1_1_m_renderer.html#aa3f2ec2984800e2cd8ea09b4ad9f072e\">getTextureManager</a>();</div>\n\
<div class=\"line\"></div>\n\
<div class=\"line\">    <span class=\"comment\">// Create a new set of operations as required</span></div>\n\
<div class=\"line\">    <span class=\"keywordflow\">if</span> (!mOperations[0])</div>\n\
<div class=\"line\">    {</div>\n\
<div class=\"line\">        mOperations[0] = (<a class=\"code\" href=\"#!/url=./cpp_ref/class_m_h_w_render_1_1_m_render_operation.html\">MHWRender::MRenderOperation</a> *) <span class=\"keyword\">new</span> TextureBlit( mOperationNames[0] );</div>\n\
<div class=\"line\">        mOperations[1] = (<a class=\"code\" href=\"#!/url=./cpp_ref/class_m_h_w_render_1_1_m_render_operation.html\">MHWRender::MRenderOperation</a> *) <span class=\"keyword\">new</span> <a name=\"_a10\"></a><a class=\"code\" href=\"#!/url=./cpp_ref/class_m_h_w_render_1_1_m_present_target.html\">MHWRender::MPresentTarget</a>( mOperationNames[1] );</div>\n\
<div class=\"line\">    }</div>\n\
<div class=\"line\">    <span class=\"keywordflow\">if</span> (!mOperations[0] || </div>\n\
<div class=\"line\">        !mOperations[1])</div>\n\
<div class=\"line\">    {</div>\n\
<div class=\"line\">        <span class=\"keywordflow\">return</span> <a class=\"code\" href=\"#!/url=./cpp_ref/class_m_status.html#a02ab596f4febca68da503aaf8dde3a80a1ef6c2d725fb4bec3e7e840d28adbc00\">MStatus::kFailure</a>;</div>\n\
<div class=\"line\">    }</div>\n\
<div class=\"line\"></div>\n\
<div class=\"line\">    TextureBlit* textureBlit = (TextureBlit* )mOperations[0];</div>\n\
<div class=\"line\"></div>\n\
<div class=\"line\">    <span class=\"comment\">// Scan for the first file texture node in the scene </span></div>\n\
<div class=\"line\">    <span class=\"comment\">// to draw it&#39;s texture.</span></div>\n\
<div class=\"line\">    <span class=\"comment\">//</span></div>\n\
<div class=\"line\">    <a name=\"_a11\"></a><a class=\"code\" href=\"#!/url=./cpp_ref/class_m_it_dependency_nodes.html\">MItDependencyNodes</a> iter(<a name=\"a12\"></a><a class=\"code\" href=\"#!/url=./cpp_ref/class_m_fn.html#a1d1cfd8ffb84e947f82999c682b666a7ac3bee92500cdc3a4ccbec4cb35e91f2a\">MFn::kFileTexture</a>);</div>\n\
<div class=\"line\">    <span class=\"keywordflow\">for</span> ( ; !iter.isDone(); iter.next())</div>\n\
<div class=\"line\">    {</div>\n\
<div class=\"line\">        <a name=\"_a13\"></a><a class=\"code\" href=\"#!/url=./cpp_ref/class_m_object.html\">MObject</a> obj = iter.item();</div>\n\
<div class=\"line\">        <a name=\"_a14\"></a><a class=\"code\" href=\"#!/url=./cpp_ref/class_m_fn_dependency_node.html\">MFnDependencyNode</a> dependFn( obj );</div>\n\
<div class=\"line\">        <span class=\"keywordtype\">bool</span> haveTexture = <span class=\"keyword\">false</span>;</div>\n\
<div class=\"line\">        <span class=\"keywordflow\">if</span> (!mTexture)</div>\n\
<div class=\"line\">        {</div>\n\
<div class=\"line\">            <span class=\"comment\">// First time we acquire the texture</span></div>\n\
<div class=\"line\">            mTexture = textureManager-&gt;<a name=\"a15\"></a><a class=\"code\" href=\"#!/url=./cpp_ref/class_m_h_w_render_1_1_m_texture_manager.html#a04aa3cfef217948abc8edd0f19565f95\">acquireTexture</a>(obj, <span class=\"keyword\">false</span>);</div>\n\
<div class=\"line\">            printf(<span class=\"stringliteral\">&quot;*** Acquired texture %s = %d\\n&quot;</span>, dependFn.name().asChar(),</div>\n\
<div class=\"line\">                mTexture != NULL);</div>\n\
<div class=\"line\">            <span class=\"keywordflow\">if</span> (mTexture)</div>\n\
<div class=\"line\">                haveTexture = <span class=\"keyword\">true</span>;</div>\n\
<div class=\"line\">        }</div>\n\
<div class=\"line\">        <span class=\"keywordflow\">else</span></div>\n\
<div class=\"line\">        {</div>\n\
<div class=\"line\">            <span class=\"comment\">// Afterwards we update the texture</span></div>\n\
<div class=\"line\">            <a class=\"code\" href=\"#!/url=./cpp_ref/class_m_status.html\">MStatus</a> status = mTexture-&gt;update(obj);</div>\n\
<div class=\"line\">            printf(<span class=\"stringliteral\">&quot;*** Updated texture %s = %d\\n&quot;</span>, dependFn.name().asChar(), </div>\n\
<div class=\"line\">                status == <a name=\"a16\"></a><a class=\"code\" href=\"#!/url=./cpp_ref/class_m_status.html#a02ab596f4febca68da503aaf8dde3a80af0536797208144380691e2b376ffc1d1\">MStatus::kSuccess</a>);</div>\n\
<div class=\"line\">            <span class=\"keywordflow\">if</span> (status == <a class=\"code\" href=\"#!/url=./cpp_ref/class_m_status.html#a02ab596f4febca68da503aaf8dde3a80af0536797208144380691e2b376ffc1d1\">MStatus::kSuccess</a>)</div>\n\
<div class=\"line\">                haveTexture = <span class=\"keyword\">true</span>;</div>\n\
<div class=\"line\">        }</div>\n\
<div class=\"line\">        <span class=\"keywordflow\">if</span> (haveTexture)</div>\n\
<div class=\"line\">        {</div>\n\
<div class=\"line\">            <span class=\"keywordflow\">if</span> (textureBlit)</div>\n\
<div class=\"line\">            {</div>\n\
<div class=\"line\">                <span class=\"comment\">// Set the quad blit texture to show in the viewport.</span></div>\n\
<div class=\"line\">                textureBlit-&gt;setColorTexture(mTexture);</div>\n\
<div class=\"line\">            }</div>\n\
<div class=\"line\">            <span class=\"keywordflow\">else</span></div>\n\
<div class=\"line\">            {</div>\n\
<div class=\"line\">                <span class=\"comment\">// Sample code to dump the texture to disk.</span></div>\n\
<div class=\"line\">                <a class=\"code\" href=\"#!/url=./cpp_ref/class_m_string.html\">MString</a> saveName(<span class=\"stringliteral\">&quot;c:/temp/&quot;</span>);</div>\n\
<div class=\"line\">                <span class=\"keyword\">static</span> <span class=\"keywordtype\">int</span> sIndex = 1;</div>\n\
<div class=\"line\">                saveName += (sIndex++);</div>\n\
<div class=\"line\">                saveName += <span class=\"stringliteral\">&quot;.iff&quot;</span>;</div>\n\
<div class=\"line\">                textureManager-&gt;<a name=\"a17\"></a><a class=\"code\" href=\"#!/url=./cpp_ref/class_m_h_w_render_1_1_m_texture_manager.html#a1874d1e1c278aee93e49a4f0e477973f\">saveTexture</a>(mTexture, saveName);</div>\n\
<div class=\"line\">            }</div>\n\
<div class=\"line\">            <span class=\"keywordflow\">break</span>;</div>\n\
<div class=\"line\">        }</div>\n\
<div class=\"line\">        <span class=\"keywordflow\">else</span></div>\n\
<div class=\"line\">        {</div>\n\
<div class=\"line\">            textureBlit-&gt;setColorTexture(NULL);</div>\n\
<div class=\"line\">        }</div>\n\
<div class=\"line\">    }</div>\n\
<div class=\"line\"></div>\n\
<div class=\"line\">    <span class=\"keywordflow\">return</span> <a class=\"code\" href=\"#!/url=./cpp_ref/class_m_status.html#a02ab596f4febca68da503aaf8dde3a80af0536797208144380691e2b376ffc1d1\">MStatus::kSuccess</a>;</div>\n\
<div class=\"line\">}</div>\n\
<div class=\"line\"></div>\n\
<div class=\"line\"><span class=\"comment\">// On cleanup we just return for returning the list of operations for</span></div>\n\
<div class=\"line\"><span class=\"comment\">// the next render</span></div>\n\
<div class=\"line\"><span class=\"comment\">//</span></div>\n\
<div class=\"line\"><a class=\"code\" href=\"#!/url=./cpp_ref/class_m_status.html\">MStatus</a> viewOverrideTrackTexture::cleanup()</div>\n\
<div class=\"line\">{</div>\n\
<div class=\"line\">    mCurrentOperation = -1;</div>\n\
<div class=\"line\">    <span class=\"keywordflow\">return</span> <a class=\"code\" href=\"#!/url=./cpp_ref/class_m_status.html#a02ab596f4febca68da503aaf8dde3a80af0536797208144380691e2b376ffc1d1\">MStatus::kSuccess</a>;</div>\n\
<div class=\"line\">}</div>\n\
<div class=\"line\">    </div>\n\
<div class=\"line\"><span class=\"comment\">//</span></div>\n\
<div class=\"line\"><span class=\"comment\">// Simple quad blit of a texture</span></div>\n\
<div class=\"line\"><span class=\"comment\">//</span></div>\n\
<div class=\"line\">TextureBlit::TextureBlit(<span class=\"keyword\">const</span> <a class=\"code\" href=\"#!/url=./cpp_ref/class_m_string.html\">MString</a> &amp;name)</div>\n\
<div class=\"line\">: MQuadRender( name )</div>\n\
<div class=\"line\">, mShaderInstance(NULL)</div>\n\
<div class=\"line\">, mColorTextureChanged(false)</div>\n\
<div class=\"line\">{</div>\n\
<div class=\"line\">    mColorTexture.texture = NULL;</div>\n\
<div class=\"line\">}</div>\n\
<div class=\"line\"></div>\n\
<div class=\"line\">TextureBlit::~TextureBlit()</div>\n\
<div class=\"line\">{</div>\n\
<div class=\"line\">    <a class=\"code\" href=\"#!/url=./cpp_ref/class_m_h_w_render_1_1_m_renderer.html\">MHWRender::MRenderer</a>* renderer = <a class=\"code\" href=\"#!/url=./cpp_ref/class_m_h_w_render_1_1_m_renderer.html#a4678a72ac6959ed21d422d27928d0343\">MHWRender::MRenderer::theRenderer</a>();</div>\n\
<div class=\"line\">    <span class=\"keywordflow\">if</span> (!renderer)</div>\n\
<div class=\"line\">        <span class=\"keywordflow\">return</span>;</div>\n\
<div class=\"line\"></div>\n\
<div class=\"line\">    <span class=\"comment\">// Release any shader used</span></div>\n\
<div class=\"line\">    <span class=\"keywordflow\">if</span> (mShaderInstance)</div>\n\
<div class=\"line\">    {</div>\n\
<div class=\"line\">        <span class=\"keyword\">const</span> <a name=\"_a18\"></a><a class=\"code\" href=\"#!/url=./cpp_ref/class_m_h_w_render_1_1_m_shader_manager.html\">MHWRender::MShaderManager</a>* shaderMgr = renderer-&gt;<a name=\"a19\"></a><a class=\"code\" href=\"#!/url=./cpp_ref/class_m_h_w_render_1_1_m_renderer.html#a4603e18a1b89b798a2e4a4f36d9b5125\">getShaderManager</a>();</div>\n\
<div class=\"line\">        <span class=\"keywordflow\">if</span> (shaderMgr)</div>\n\
<div class=\"line\">        {</div>\n\
<div class=\"line\">            shaderMgr-&gt;<a name=\"a20\"></a><a class=\"code\" href=\"#!/url=./cpp_ref/class_m_h_w_render_1_1_m_shader_manager.html#a0c7deb55edc231cbb2365b271ecd55f8\">releaseShader</a>(mShaderInstance);</div>\n\
<div class=\"line\">        }</div>\n\
<div class=\"line\">        mShaderInstance = NULL;</div>\n\
<div class=\"line\">    }</div>\n\
<div class=\"line\"></div>\n\
<div class=\"line\">    mColorTexture.texture = NULL;</div>\n\
<div class=\"line\">}</div>\n\
<div class=\"line\"></div>\n\
<div class=\"line\"><span class=\"keyword\">const</span> <a name=\"_a21\"></a><a class=\"code\" href=\"#!/url=./cpp_ref/class_m_h_w_render_1_1_m_shader_instance.html\">MHWRender::MShaderInstance</a> * TextureBlit::shader()</div>\n\
<div class=\"line\">{</div>\n\
<div class=\"line\">    <span class=\"keywordflow\">if</span> (!mShaderInstance)</div>\n\
<div class=\"line\">    {</div>\n\
<div class=\"line\">        <a class=\"code\" href=\"#!/url=./cpp_ref/class_m_h_w_render_1_1_m_renderer.html\">MHWRender::MRenderer</a>* renderer = <a class=\"code\" href=\"#!/url=./cpp_ref/class_m_h_w_render_1_1_m_renderer.html#a4678a72ac6959ed21d422d27928d0343\">MHWRender::MRenderer::theRenderer</a>();</div>\n\
<div class=\"line\">        <span class=\"keyword\">const</span> <a class=\"code\" href=\"#!/url=./cpp_ref/class_m_h_w_render_1_1_m_shader_manager.html\">MHWRender::MShaderManager</a>* shaderMgr = renderer ? renderer-&gt;<a class=\"code\" href=\"#!/url=./cpp_ref/class_m_h_w_render_1_1_m_renderer.html#a4603e18a1b89b798a2e4a4f36d9b5125\">getShaderManager</a>() : NULL;</div>\n\
<div class=\"line\">        <span class=\"keywordflow\">if</span> (shaderMgr)</div>\n\
<div class=\"line\">        {</div>\n\
<div class=\"line\">            <span class=\"comment\">// Just need a simple color blit</span></div>\n\
<div class=\"line\">            mShaderInstance = shaderMgr-&gt;<a name=\"a22\"></a><a class=\"code\" href=\"#!/url=./cpp_ref/class_m_h_w_render_1_1_m_shader_manager.html#a581c659670f0e3168750382c61a91a25\">getEffectsFileShader</a>( <span class=\"stringliteral\">&quot;Copy&quot;</span>, <span class=\"stringliteral\">&quot;&quot;</span> );</div>\n\
<div class=\"line\">        }</div>\n\
<div class=\"line\">    }</div>\n\
<div class=\"line\"></div>\n\
<div class=\"line\">    <a class=\"code\" href=\"#!/url=./cpp_ref/class_m_status.html\">MStatus</a> status = <a class=\"code\" href=\"#!/url=./cpp_ref/class_m_status.html#a02ab596f4febca68da503aaf8dde3a80a1ef6c2d725fb4bec3e7e840d28adbc00\">MStatus::kFailure</a>;</div>\n\
<div class=\"line\">    <span class=\"keywordflow\">if</span> (mShaderInstance)</div>\n\
<div class=\"line\">    {</div>\n\
<div class=\"line\">        <span class=\"comment\">// If texture changed then bind new texture to the shader</span></div>\n\
<div class=\"line\">        <span class=\"comment\">// </span></div>\n\
<div class=\"line\">        status = <a class=\"code\" href=\"#!/url=./cpp_ref/class_m_status.html#a02ab596f4febca68da503aaf8dde3a80af0536797208144380691e2b376ffc1d1\">MStatus::kSuccess</a>;</div>\n\
<div class=\"line\">        <span class=\"keywordflow\">if</span> (mColorTextureChanged)</div>\n\
<div class=\"line\">        {</div>\n\
<div class=\"line\">            status = mShaderInstance-&gt;setParameter(<span class=\"stringliteral\">&quot;gInputTex&quot;</span>, mColorTexture);</div>\n\
<div class=\"line\">            mColorTextureChanged = <span class=\"keyword\">false</span>;</div>\n\
<div class=\"line\">        }</div>\n\
<div class=\"line\">    }</div>\n\
<div class=\"line\">    <span class=\"keywordflow\">if</span> (status != <a class=\"code\" href=\"#!/url=./cpp_ref/class_m_status.html#a02ab596f4febca68da503aaf8dde3a80af0536797208144380691e2b376ffc1d1\">MStatus::kSuccess</a>)</div>\n\
<div class=\"line\">    {</div>\n\
<div class=\"line\">        <span class=\"keywordflow\">return</span> NULL;</div>\n\
<div class=\"line\">    }</div>\n\
<div class=\"line\">    <span class=\"keywordflow\">return</span> mShaderInstance;</div>\n\
<div class=\"line\">}</div>\n\
<div class=\"line\"></div>\n\
<div class=\"line\"><a name=\"_a23\"></a><a class=\"code\" href=\"#!/url=./cpp_ref/class_m_h_w_render_1_1_m_clear_operation.html\">MHWRender::MClearOperation</a> &amp; TextureBlit::clearOperation()</div>\n\
<div class=\"line\">{</div>\n\
<div class=\"line\">    mClearOperation.<a name=\"a24\"></a><a class=\"code\" href=\"#!/url=./cpp_ref/class_m_h_w_render_1_1_m_clear_operation.html#a0eb426378a3484ea204ea50ad2daa547\">setClearGradient</a>( <span class=\"keyword\">false</span> );</div>\n\
<div class=\"line\">    mClearOperation.setMask( (<span class=\"keywordtype\">unsigned</span> <span class=\"keywordtype\">int</span>) <a name=\"a25\"></a><a class=\"code\" href=\"#!/url=./cpp_ref/class_m_h_w_render_1_1_m_clear_operation.html#a55b92d9e088b6065ff2e762739b064f9aa9836daa6e01048fcf03e7023c0654d2\">MHWRender::MClearOperation::kClearAll</a> );</div>\n\
<div class=\"line\">    <span class=\"keywordflow\">return</span> mClearOperation;</div>\n\
<div class=\"line\">}</div>\n\
</div><!-- fragment --> </div><!-- contents -->\n\
</div><!-- doc-content -->\n\
          <div class=\"footer-block\"><a href=\"../html/ac.cmtdialog.htm\" class=\"comments-anchor\" target=\"_blank\"><span class=\"comments-link\">Please send us your comment about this page</span></a></div><br></div>\n\
   </div></body>\n\
</html>\n\
";