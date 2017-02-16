var topic = "<!-- saved from url=(0024)http://docs.autodesk.com -->\n\
<html>\n\
   <head><script src=\"../scripts/yepnope.1.5.4-min.js\" type=\"text/javascript\"></script><script src=\"../scripts/lib/jquery-1.11.1.min.js\" type=\"text/javascript\"></script><meta http-equiv=\"Content-Type\" content=\"text/html; charset=UTF-8\"><meta name=\"product\" content=\"MAYAUL\"><meta name=\"release\" content=\"2017\"><meta name=\"book\" content=\"Developer\"><meta name=\"created\" content=\"2016-06-16\"><meta name=\"topicid\" content=\"GUID-02DEF634-1E7B-48C6-8ACD-2C934CA97887\"><meta name=\"topic-type\" content=\"concept\">\n\
      <title>fragmentDumper/fragmentDumper.cpp</title>\n\
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
    cpp_ref_adsk_ref_toc.initNavTree(\'fragment_dumper_2fragment_dumper_8cpp-example.html\', tocPrefix);\n\
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
            <h1>fragmentDumper/fragmentDumper.cpp</h1>\n\
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
<div class=\"title\">fragmentDumper/fragmentDumper.cpp</div>  </div>\n\
</div><!--header-->\n\
<div class=\"contents\">\n\
<div class=\"fragment\"><div class=\"line\"><span class=\"comment\">//-</span></div>\n\
<div class=\"line\"><span class=\"comment\">// ==========================================================================</span></div>\n\
<div class=\"line\"><span class=\"comment\">// Copyright 2013 Autodesk, Inc.  All rights reserved.</span></div>\n\
<div class=\"line\"><span class=\"comment\">// Use of this software is subject to the terms of the Autodesk license agreement</span></div>\n\
<div class=\"line\"><span class=\"comment\">// provided at the time of installation or download, or which otherwise</span></div>\n\
<div class=\"line\"><span class=\"comment\">// accompanies this software in either electronic or hard copy form.</span></div>\n\
<div class=\"line\"><span class=\"comment\">// ==========================================================================</span></div>\n\
<div class=\"line\"><span class=\"comment\">//+</span></div>\n\
<div class=\"line\"></div>\n\
<div class=\"line\"><span class=\"preprocessor\">#include &lt;maya/MFnPlugin.h&gt;</span></div>\n\
<div class=\"line\"><span class=\"preprocessor\">#include &lt;maya/MFragmentManager.h&gt;</span></div>\n\
<div class=\"line\"><span class=\"preprocessor\">#include &lt;maya/MSelectionList.h&gt;</span></div>\n\
<div class=\"line\"><span class=\"preprocessor\">#include &lt;maya/MItSelectionList.h&gt;</span></div>\n\
<div class=\"line\"><span class=\"preprocessor\">#include &lt;maya/MFnDependencyNode.h&gt;</span></div>\n\
<div class=\"line\"><span class=\"preprocessor\">#include &lt;maya/MViewport2Renderer.h&gt;</span></div>\n\
<div class=\"line\"><span class=\"preprocessor\">#include &lt;maya/MPxCommand.h&gt;</span></div>\n\
<div class=\"line\"><span class=\"preprocessor\">#include &lt;maya/MArgList.h&gt;</span></div>\n\
<div class=\"line\"><span class=\"preprocessor\">#include &lt;maya/MGlobal.h&gt;</span></div>\n\
<div class=\"line\"><span class=\"preprocessor\">#include &lt;iostream&gt;</span></div>\n\
<div class=\"line\"></div>\n\
<div class=\"line\"><span class=\"comment\">//</span></div>\n\
<div class=\"line\"><span class=\"comment\">// dumpFragment</span></div>\n\
<div class=\"line\"><span class=\"comment\">//  Simple command to output the fragment XML code used to render a given</span></div>\n\
<div class=\"line\"><span class=\"comment\">//  shading node or fragment name in Viewport 2.0. On success, code will </span></div>\n\
<div class=\"line\"><span class=\"comment\">//  be written to stderr. This demonstrates the usage of MFragmentManager::getFragmentXML().</span></div>\n\
<div class=\"line\"><span class=\"comment\">//</span></div>\n\
<div class=\"line\"><span class=\"comment\">//  Flags:</span></div>\n\
<div class=\"line\"><span class=\"comment\">//      -iu/-includeUpstream</span></div>\n\
<div class=\"line\"><span class=\"comment\">//          If specified, dump the XML for the entire shading graph rooted</span></div>\n\
<div class=\"line\"><span class=\"comment\">//          at the given node, rather than just the graph for the given node</span></div>\n\
<div class=\"line\"><span class=\"comment\">//      -oc/-objectContext</span></div>\n\
<div class=\"line\"><span class=\"comment\">//          If specified, use the current selection as &quot;object context&quot; for</span></div>\n\
<div class=\"line\"><span class=\"comment\">//          when retrieving the XML</span></div>\n\
<div class=\"line\"><span class=\"comment\">//      -fn/-fragmentName</span></div>\n\
<div class=\"line\"><span class=\"comment\">//          If specified, dump the XML for the fragment with the given name</span></div>\n\
<div class=\"line\"><span class=\"comment\">//      -fl/-fragmentList</span></div>\n\
<div class=\"line\"><span class=\"comment\">//          If specified, will provide a list of fragment names</span></div>\n\
<div class=\"line\"><span class=\"comment\">//  Examples:</span></div>\n\
<div class=\"line\"><span class=\"comment\">//      dumpFragment -iu lambert1;</span></div>\n\
<div class=\"line\"><span class=\"comment\">//</span></div>\n\
<div class=\"line\"><span class=\"comment\">//      dumpFragment checker1;</span></div>\n\
<div class=\"line\"><span class=\"comment\">//</span></div>\n\
<div class=\"line\"><span class=\"comment\">//      polySphere -r 1 -sx 20 -sy 20 -ax 0 1 0 -cuv 2 -ch 1 pSphereShape1</span></div>\n\
<div class=\"line\"><span class=\"comment\">//      select pSphereShape1;</span></div>\n\
<div class=\"line\"><span class=\"comment\">//      dumpFragment -iu -oc lambert1</span></div>\n\
<div class=\"line\"><span class=\"comment\">//</span></div>\n\
<div class=\"line\"><span class=\"comment\">//      dumpFragment -fn mayaIrradiance;</span></div>\n\
<div class=\"line\"><span class=\"comment\">//      dumpFragment -fn mayaPointLight;</span></div>\n\
<div class=\"line\"><span class=\"comment\">//      </span></div>\n\
<div class=\"line\"><span class=\"comment\">//      string $a[] = `dumpFragment -fl`;</span></div>\n\
<div class=\"line\"><span class=\"comment\">//      for ($i=0; $i&lt;size($a); $i++)</span></div>\n\
<div class=\"line\"><span class=\"comment\">//      {</span></div>\n\
<div class=\"line\"><span class=\"comment\">//          print($a[$i] + &quot;\\n&quot;);</span></div>\n\
<div class=\"line\"><span class=\"comment\">//      }</span></div>\n\
<div class=\"line\"><span class=\"keyword\">class </span>dumpFragment : <span class=\"keyword\">public</span> <a name=\"_a0\"></a><a class=\"code\" href=\"#!/url=./cpp_ref/class_m_px_command.html\">MPxCommand</a></div>\n\
<div class=\"line\">{</div>\n\
<div class=\"line\"><span class=\"keyword\">public</span>:</div>\n\
<div class=\"line\">    <span class=\"keyword\">static</span> <span class=\"keywordtype\">void</span>* creator()</div>\n\
<div class=\"line\">    {</div>\n\
<div class=\"line\">        <span class=\"keywordflow\">return</span> <span class=\"keyword\">new</span> dumpFragment();</div>\n\
<div class=\"line\">    }</div>\n\
<div class=\"line\"></div>\n\
<div class=\"line\">    dumpFragment() : <a name=\"a1\"></a><a class=\"code\" href=\"#!/url=./cpp_ref/class_m_px_command.html#a5b73f94274028c9be799d9275dc391a5\">MPxCommand</a>() {}</div>\n\
<div class=\"line\">    <span class=\"keyword\">virtual</span> ~dumpFragment() {}</div>\n\
<div class=\"line\"></div>\n\
<div class=\"line\">    <span class=\"keyword\">virtual</span> <a name=\"_a2\"></a><a class=\"code\" href=\"#!/url=./cpp_ref/class_m_status.html\">MStatus</a> <a name=\"a3\"></a><a class=\"code\" href=\"#!/url=./cpp_ref/class_m_px_command.html#ade7d0a873cbe811d6eab464e695390a9\">doIt</a>(<span class=\"keyword\">const</span> <a name=\"_a4\"></a><a class=\"code\" href=\"#!/url=./cpp_ref/class_m_arg_list.html\">MArgList</a>&amp; args)</div>\n\
<div class=\"line\">    {</div>\n\
<div class=\"line\">        <span class=\"comment\">// Get VP2 renderer</span></div>\n\
<div class=\"line\">        <a name=\"_a5\"></a><a class=\"code\" href=\"#!/url=./cpp_ref/class_m_h_w_render_1_1_m_renderer.html\">MHWRender::MRenderer</a>* renderer = <a name=\"a6\"></a><a class=\"code\" href=\"#!/url=./cpp_ref/class_m_h_w_render_1_1_m_renderer.html#a4678a72ac6959ed21d422d27928d0343\">MHWRender::MRenderer::theRenderer</a>();</div>\n\
<div class=\"line\">        <span class=\"keywordflow\">if</span> (!renderer) <span class=\"keywordflow\">return</span> <a name=\"a7\"></a><a class=\"code\" href=\"#!/url=./cpp_ref/class_m_status.html#a02ab596f4febca68da503aaf8dde3a80a1ef6c2d725fb4bec3e7e840d28adbc00\">MS::kFailure</a>;</div>\n\
<div class=\"line\">        <a name=\"_a8\"></a><a class=\"code\" href=\"#!/url=./cpp_ref/class_m_h_w_render_1_1_m_fragment_manager.html\">MHWRender::MFragmentManager</a>* fragmentMgr =</div>\n\
<div class=\"line\">            renderer-&gt;<a name=\"a9\"></a><a class=\"code\" href=\"#!/url=./cpp_ref/class_m_h_w_render_1_1_m_renderer.html#a0f42783e8eee6f472d6bbb2acb6b2f2d\">getFragmentManager</a>();</div>\n\
<div class=\"line\">        <span class=\"keywordflow\">if</span> (!fragmentMgr) <span class=\"keywordflow\">return</span> <a class=\"code\" href=\"#!/url=./cpp_ref/class_m_status.html#a02ab596f4febca68da503aaf8dde3a80a1ef6c2d725fb4bec3e7e840d28adbc00\">MS::kFailure</a>;</div>\n\
<div class=\"line\"></div>\n\
<div class=\"line\">        <span class=\"comment\">// Parse args</span></div>\n\
<div class=\"line\">        <span class=\"keywordtype\">bool</span> includeUpstream = <span class=\"keyword\">false</span>;</div>\n\
<div class=\"line\">        <span class=\"keywordtype\">bool</span> useContext = <span class=\"keyword\">false</span>;</div>\n\
<div class=\"line\">        <span class=\"keywordtype\">bool</span> fragmentList = <span class=\"keyword\">false</span>;</div>\n\
<div class=\"line\">        <span class=\"keywordtype\">bool</span> fragmentName = <span class=\"keyword\">false</span>;</div>\n\
<div class=\"line\">        <a name=\"_a10\"></a><a class=\"code\" href=\"#!/url=./cpp_ref/class_m_string.html\">MString</a> shaderName;</div>\n\
<div class=\"line\">        <span class=\"keywordflow\">for</span> (<span class=\"keywordtype\">unsigned</span> <span class=\"keywordtype\">int</span> i=0; i&lt;args.<a name=\"a11\"></a><a class=\"code\" href=\"#!/url=./cpp_ref/class_m_arg_list.html#a99dd6a54b909ede1d11702fe58977e2a\">length</a>(); i++)</div>\n\
<div class=\"line\">        {</div>\n\
<div class=\"line\">            <a class=\"code\" href=\"#!/url=./cpp_ref/class_m_string.html\">MString</a> argStr = args.<a name=\"a12\"></a><a class=\"code\" href=\"#!/url=./cpp_ref/class_m_arg_list.html#ad24ff3826e4df513b55e1a0ecb0a665b\">asString</a>(i);</div>\n\
<div class=\"line\">            <span class=\"keywordflow\">if</span> (argStr == <span class=\"stringliteral\">&quot;-fl&quot;</span> || argStr == <span class=\"stringliteral\">&quot;-fragmentList&quot;</span>)</div>\n\
<div class=\"line\">            {</div>\n\
<div class=\"line\">                fragmentList = <span class=\"keyword\">true</span>;</div>\n\
<div class=\"line\">            }</div>\n\
<div class=\"line\">            <span class=\"keywordflow\">else</span> <span class=\"keywordflow\">if</span> (argStr == <span class=\"stringliteral\">&quot;-fn&quot;</span> || argStr == <span class=\"stringliteral\">&quot;-fragmentName&quot;</span>)</div>\n\
<div class=\"line\">            {</div>\n\
<div class=\"line\">                fragmentName = <span class=\"keyword\">true</span>;</div>\n\
<div class=\"line\">            }</div>\n\
<div class=\"line\">            <span class=\"keywordflow\">else</span> <span class=\"keywordflow\">if</span> (argStr == <span class=\"stringliteral\">&quot;-iu&quot;</span> || argStr == <span class=\"stringliteral\">&quot;-includeUpstream&quot;</span>)</div>\n\
<div class=\"line\">            {</div>\n\
<div class=\"line\">                includeUpstream = <span class=\"keyword\">true</span>;</div>\n\
<div class=\"line\">            }</div>\n\
<div class=\"line\">            <span class=\"keywordflow\">else</span> <span class=\"keywordflow\">if</span> (argStr == <span class=\"stringliteral\">&quot;-oc&quot;</span> || argStr == <span class=\"stringliteral\">&quot;-objectContext&quot;</span>)</div>\n\
<div class=\"line\">            {</div>\n\
<div class=\"line\">                useContext = <span class=\"keyword\">true</span>;</div>\n\
<div class=\"line\">            }</div>\n\
<div class=\"line\">            <span class=\"keywordflow\">else</span></div>\n\
<div class=\"line\">            {</div>\n\
<div class=\"line\">                shaderName = argStr;</div>\n\
<div class=\"line\">                <span class=\"keywordflow\">break</span>;</div>\n\
<div class=\"line\">            }</div>\n\
<div class=\"line\">        }</div>\n\
<div class=\"line\"></div>\n\
<div class=\"line\">        <span class=\"comment\">// Get shader if not asking for a fragment or fragment list</span></div>\n\
<div class=\"line\">        <a name=\"_a13\"></a><a class=\"code\" href=\"#!/url=./cpp_ref/class_m_object.html\">MObject</a> shaderObj;</div>\n\
<div class=\"line\">        <span class=\"keywordflow\">if</span> (!fragmentName &amp;&amp; !fragmentList)</div>\n\
<div class=\"line\">        {</div>\n\
<div class=\"line\">            <span class=\"keywordflow\">if</span> (shaderName.<a name=\"a14\"></a><a class=\"code\" href=\"#!/url=./cpp_ref/class_m_string.html#a580388f31f60c46fac867ca48a48da1e\">length</a>() &gt; 0)</div>\n\
<div class=\"line\">            {</div>\n\
<div class=\"line\">                <a name=\"_a15\"></a><a class=\"code\" href=\"#!/url=./cpp_ref/class_m_selection_list.html\">MSelectionList</a> list;</div>\n\
<div class=\"line\">                <span class=\"keywordflow\">if</span> (!list.<a name=\"a16\"></a><a class=\"code\" href=\"#!/url=./cpp_ref/class_m_selection_list.html#a23929aeafb29672f2652128eac9c4dec\">add</a>(shaderName))</div>\n\
<div class=\"line\">                {</div>\n\
<div class=\"line\">                    <a name=\"a17\"></a><a class=\"code\" href=\"#!/url=./cpp_ref/class_m_px_command.html#a1e6852f0e7bd3a71803c25f4d65e7a81\">displayError</a>(shaderName + <span class=\"stringliteral\">&quot;: no such object&quot;</span>);</div>\n\
<div class=\"line\">                    <span class=\"keywordflow\">return</span> <a class=\"code\" href=\"#!/url=./cpp_ref/class_m_status.html#a02ab596f4febca68da503aaf8dde3a80a1ef6c2d725fb4bec3e7e840d28adbc00\">MS::kFailure</a>;</div>\n\
<div class=\"line\">                }</div>\n\
<div class=\"line\">                <a name=\"_a18\"></a><a class=\"code\" href=\"#!/url=./cpp_ref/class_m_it_selection_list.html\">MItSelectionList</a> iter(list);</div>\n\
<div class=\"line\">                iter.<a name=\"a19\"></a><a class=\"code\" href=\"#!/url=./cpp_ref/class_m_it_selection_list.html#af11062c06466369057c68ed59b9637db\">getDependNode</a>(shaderObj);</div>\n\
<div class=\"line\">            }</div>\n\
<div class=\"line\">            <span class=\"keywordflow\">else</span></div>\n\
<div class=\"line\">            {</div>\n\
<div class=\"line\">                <a class=\"code\" href=\"#!/url=./cpp_ref/class_m_px_command.html#a1e6852f0e7bd3a71803c25f4d65e7a81\">displayError</a>(<span class=\"stringliteral\">&quot;No shader specified&quot;</span>);</div>\n\
<div class=\"line\">                <span class=\"keywordflow\">return</span> <a class=\"code\" href=\"#!/url=./cpp_ref/class_m_status.html#a02ab596f4febca68da503aaf8dde3a80a1ef6c2d725fb4bec3e7e840d28adbc00\">MS::kFailure</a>;</div>\n\
<div class=\"line\">            }</div>\n\
<div class=\"line\">        }</div>\n\
<div class=\"line\"></div>\n\
<div class=\"line\">        <span class=\"comment\">// Get object context if not asking for a fragment or fragment list</span></div>\n\
<div class=\"line\">        <a name=\"_a20\"></a><a class=\"code\" href=\"#!/url=./cpp_ref/class_m_dag_path.html\">MDagPath</a> path;</div>\n\
<div class=\"line\">        <span class=\"keywordflow\">if</span> (!fragmentName &amp;&amp; !fragmentList)</div>\n\
<div class=\"line\">        {</div>\n\
<div class=\"line\">            <span class=\"keywordflow\">if</span> (useContext)</div>\n\
<div class=\"line\">            {</div>\n\
<div class=\"line\">                <a class=\"code\" href=\"#!/url=./cpp_ref/class_m_selection_list.html\">MSelectionList</a> activeList;</div>\n\
<div class=\"line\">                <a name=\"a21\"></a><a class=\"code\" href=\"#!/url=./cpp_ref/class_m_global.html#a6d81d38246555884897fb153c93aaf42\">MGlobal::getActiveSelectionList</a>(activeList);</div>\n\
<div class=\"line\">                <a class=\"code\" href=\"#!/url=./cpp_ref/class_m_it_selection_list.html\">MItSelectionList</a> iter(activeList);</div>\n\
<div class=\"line\">                <span class=\"keywordflow\">if</span> (iter.<a name=\"a22\"></a><a class=\"code\" href=\"#!/url=./cpp_ref/class_m_it_selection_list.html#acea3f9b4576b874442d489458ac310c0\">getDagPath</a>(path) != <a name=\"a23\"></a><a class=\"code\" href=\"#!/url=./cpp_ref/class_m_status.html#a02ab596f4febca68da503aaf8dde3a80af0536797208144380691e2b376ffc1d1\">MS::kSuccess</a> ||</div>\n\
<div class=\"line\">                    !path.<a name=\"a24\"></a><a class=\"code\" href=\"#!/url=./cpp_ref/class_m_dag_path.html#a1da4467477df2e6955b9917434a94074\">isValid</a>())</div>\n\
<div class=\"line\">                {</div>\n\
<div class=\"line\">                    <a class=\"code\" href=\"#!/url=./cpp_ref/class_m_px_command.html#a1e6852f0e7bd3a71803c25f4d65e7a81\">displayError</a>(</div>\n\
<div class=\"line\">                        <span class=\"stringliteral\">&quot;Object context requested but no DAG object selected&quot;</span>);</div>\n\
<div class=\"line\">                    <span class=\"keywordflow\">return</span> <a class=\"code\" href=\"#!/url=./cpp_ref/class_m_status.html#a02ab596f4febca68da503aaf8dde3a80a1ef6c2d725fb4bec3e7e840d28adbc00\">MS::kFailure</a>;</div>\n\
<div class=\"line\">                }</div>\n\
<div class=\"line\">                path.<a name=\"a25\"></a><a class=\"code\" href=\"#!/url=./cpp_ref/class_m_dag_path.html#a658d9664035ff84ffefa217c0e45cc88\">extendToShape</a>();</div>\n\
<div class=\"line\">            }</div>\n\
<div class=\"line\">        }</div>\n\
<div class=\"line\"></div>\n\
<div class=\"line\">        <span class=\"comment\">// Dump XML</span></div>\n\
<div class=\"line\">        <a class=\"code\" href=\"#!/url=./cpp_ref/class_m_status.html\">MStatus</a> status;</div>\n\
<div class=\"line\">        </div>\n\
<div class=\"line\">        <span class=\"keywordflow\">if</span> (!fragmentName &amp;&amp; !fragmentList)</div>\n\
<div class=\"line\">        {   </div>\n\
<div class=\"line\">            <a name=\"_a26\"></a><a class=\"code\" href=\"#!/url=./cpp_ref/class_m_fn_dependency_node.html\">MFnDependencyNode</a> node(shaderObj, &amp;status);</div>\n\
<div class=\"line\">            <span class=\"keywordflow\">if</span> (status == <a class=\"code\" href=\"#!/url=./cpp_ref/class_m_status.html#a02ab596f4febca68da503aaf8dde3a80af0536797208144380691e2b376ffc1d1\">MS::kSuccess</a>)</div>\n\
<div class=\"line\">            {</div>\n\
<div class=\"line\">                <a class=\"code\" href=\"#!/url=./cpp_ref/class_m_string.html\">MString</a> buffer;</div>\n\
<div class=\"line\">                <span class=\"keywordflow\">if</span> (fragmentMgr-&gt;<a name=\"a27\"></a><a class=\"code\" href=\"#!/url=./cpp_ref/class_m_h_w_render_1_1_m_fragment_manager.html#ac6fb2a8f6c193bf89911f036035cc355\">getFragmentXML</a>(shaderObj, buffer, includeUpstream, useContext ? &amp;path : NULL))</div>\n\
<div class=\"line\">                {</div>\n\
<div class=\"line\">                    std::cerr &lt;&lt; <span class=\"stringliteral\">&quot;##############################################################################&quot;</span> &lt;&lt; std::endl;</div>\n\
<div class=\"line\">                    std::cerr &lt;&lt; <span class=\"stringliteral\">&quot;Fragment graph for shading network rooted at &quot;</span> &lt;&lt; node.<a name=\"a28\"></a><a class=\"code\" href=\"#!/url=./cpp_ref/class_m_fn_dependency_node.html#a049384adbea0396ea2f03d1ad4d69df1\">name</a>().<a name=\"a29\"></a><a class=\"code\" href=\"#!/url=./cpp_ref/class_m_string.html#aa9ab612f356c53479afc4c648c9ef94d\">asChar</a>();</div>\n\
<div class=\"line\">                    std::cerr &lt;&lt; <span class=\"stringliteral\">&quot;(type: &quot;</span> &lt;&lt; node.<a name=\"a30\"></a><a class=\"code\" href=\"#!/url=./cpp_ref/class_m_fn_dependency_node.html#a895d4516a7ad8b46fabddf057865ae94\">typeName</a>().<a class=\"code\" href=\"#!/url=./cpp_ref/class_m_string.html#aa9ab612f356c53479afc4c648c9ef94d\">asChar</a>() &lt;&lt; <span class=\"stringliteral\">&quot;)&quot;</span> &lt;&lt; std::endl;</div>\n\
<div class=\"line\">                    <span class=\"keywordflow\">if</span> (useContext)</div>\n\
<div class=\"line\">                    {</div>\n\
<div class=\"line\">                        std::cerr &lt;&lt; <span class=\"stringliteral\">&quot;\\tUsing object context: &quot;</span> &lt;&lt; path.<a name=\"a31\"></a><a class=\"code\" href=\"#!/url=./cpp_ref/class_m_dag_path.html#ac4b316731c4019c927aa63731d4749e8\">fullPathName</a>().<a class=\"code\" href=\"#!/url=./cpp_ref/class_m_string.html#aa9ab612f356c53479afc4c648c9ef94d\">asChar</a>() &lt;&lt; std::endl;</div>\n\
<div class=\"line\">                    }</div>\n\
<div class=\"line\">                    std::cerr &lt;&lt; <span class=\"stringliteral\">&quot;##############################################################################&quot;</span> &lt;&lt; std::endl;</div>\n\
<div class=\"line\">                    std::cerr &lt;&lt; buffer.<a class=\"code\" href=\"#!/url=./cpp_ref/class_m_string.html#aa9ab612f356c53479afc4c648c9ef94d\">asChar</a>() &lt;&lt; std::endl;</div>\n\
<div class=\"line\">                    std::cerr &lt;&lt; <span class=\"stringliteral\">&quot;##############################################################################&quot;</span> &lt;&lt; std::endl;</div>\n\
<div class=\"line\">                    <span class=\"keywordflow\">return</span> <a class=\"code\" href=\"#!/url=./cpp_ref/class_m_status.html#a02ab596f4febca68da503aaf8dde3a80af0536797208144380691e2b376ffc1d1\">MS::kSuccess</a>;</div>\n\
<div class=\"line\">                }</div>\n\
<div class=\"line\">                <span class=\"keywordflow\">else</span></div>\n\
<div class=\"line\">                {</div>\n\
<div class=\"line\">                    <a class=\"code\" href=\"#!/url=./cpp_ref/class_m_px_command.html#a1e6852f0e7bd3a71803c25f4d65e7a81\">displayError</a>(</div>\n\
<div class=\"line\">                        <span class=\"stringliteral\">&quot;Failed to get fragment graph XML for &quot;</span> + shaderName);</div>\n\
<div class=\"line\">                }</div>\n\
<div class=\"line\">            }</div>\n\
<div class=\"line\">            <span class=\"keywordflow\">else</span></div>\n\
<div class=\"line\">            {</div>\n\
<div class=\"line\">                <a class=\"code\" href=\"#!/url=./cpp_ref/class_m_px_command.html#a1e6852f0e7bd3a71803c25f4d65e7a81\">displayError</a>(shaderName + <span class=\"stringliteral\">&quot; is not a dependency node&quot;</span>);</div>\n\
<div class=\"line\">            }</div>\n\
<div class=\"line\">        }</div>\n\
<div class=\"line\">        <span class=\"keywordflow\">else</span></div>\n\
<div class=\"line\">        {</div>\n\
<div class=\"line\">            <span class=\"keywordflow\">if</span> (fragmentList)</div>\n\
<div class=\"line\">            {</div>\n\
<div class=\"line\">                <a name=\"_a32\"></a><a class=\"code\" href=\"#!/url=./cpp_ref/class_m_string_array.html\">MStringArray</a> fragmentNames;</div>\n\
<div class=\"line\">                fragmentMgr-&gt;<a name=\"a33\"></a><a class=\"code\" href=\"#!/url=./cpp_ref/class_m_h_w_render_1_1_m_fragment_manager.html#ae5f6358c8ac01fd86b59c8805b4d89b6\">fragmentList</a>(fragmentNames);</div>\n\
<div class=\"line\">                <a name=\"a34\"></a><a class=\"code\" href=\"#!/url=./cpp_ref/class_m_px_command.html#a6c6cf288906d72135b4a25baa66b42b5\">setResult</a>( fragmentNames );</div>\n\
<div class=\"line\">                <span class=\"keywordflow\">return</span> <a class=\"code\" href=\"#!/url=./cpp_ref/class_m_status.html#a02ab596f4febca68da503aaf8dde3a80af0536797208144380691e2b376ffc1d1\">MS::kSuccess</a>;</div>\n\
<div class=\"line\">            }</div>\n\
<div class=\"line\">            <span class=\"keywordflow\">else</span> <span class=\"keywordflow\">if</span> (shaderName.<a class=\"code\" href=\"#!/url=./cpp_ref/class_m_string.html#a580388f31f60c46fac867ca48a48da1e\">length</a>())</div>\n\
<div class=\"line\">            {</div>\n\
<div class=\"line\">                <a class=\"code\" href=\"#!/url=./cpp_ref/class_m_string.html\">MString</a> buffer;</div>\n\
<div class=\"line\">                <span class=\"keywordflow\">if</span> (fragmentMgr-&gt;<a class=\"code\" href=\"#!/url=./cpp_ref/class_m_h_w_render_1_1_m_fragment_manager.html#ac6fb2a8f6c193bf89911f036035cc355\">getFragmentXML</a>(shaderName, buffer))</div>\n\
<div class=\"line\">                {</div>\n\
<div class=\"line\">                    <a class=\"code\" href=\"#!/url=./cpp_ref/class_m_px_command.html#a6c6cf288906d72135b4a25baa66b42b5\">setResult</a>( buffer );</div>\n\
<div class=\"line\">                    <span class=\"keywordflow\">return</span> <a class=\"code\" href=\"#!/url=./cpp_ref/class_m_status.html#a02ab596f4febca68da503aaf8dde3a80af0536797208144380691e2b376ffc1d1\">MS::kSuccess</a>;</div>\n\
<div class=\"line\">                }</div>\n\
<div class=\"line\">                <span class=\"keywordflow\">else</span></div>\n\
<div class=\"line\">                {</div>\n\
<div class=\"line\">                    <a class=\"code\" href=\"#!/url=./cpp_ref/class_m_px_command.html#a1e6852f0e7bd3a71803c25f4d65e7a81\">displayError</a>(<span class=\"stringliteral\">&quot;Failed to retrieve fragment &quot;</span> + shaderName);</div>\n\
<div class=\"line\">                }</div>\n\
<div class=\"line\">            }</div>\n\
<div class=\"line\">        }</div>\n\
<div class=\"line\">        <span class=\"keywordflow\">return</span> <a class=\"code\" href=\"#!/url=./cpp_ref/class_m_status.html#a02ab596f4febca68da503aaf8dde3a80a1ef6c2d725fb4bec3e7e840d28adbc00\">MS::kFailure</a>;</div>\n\
<div class=\"line\">    }</div>\n\
<div class=\"line\">};</div>\n\
<div class=\"line\"></div>\n\
<div class=\"line\"><a class=\"code\" href=\"#!/url=./cpp_ref/class_m_status.html\">MStatus</a> initializePlugin(<a class=\"code\" href=\"#!/url=./cpp_ref/class_m_object.html\">MObject</a> obj)</div>\n\
<div class=\"line\">{</div>\n\
<div class=\"line\">    <a name=\"_a35\"></a><a class=\"code\" href=\"#!/url=./cpp_ref/class_m_fn_plugin.html\">MFnPlugin</a> plugin(obj, PLUGIN_COMPANY, <span class=\"stringliteral\">&quot;1.0&quot;</span>, <span class=\"stringliteral\">&quot;Any&quot;</span>);</div>\n\
<div class=\"line\"></div>\n\
<div class=\"line\">    <a class=\"code\" href=\"#!/url=./cpp_ref/class_m_status.html\">MStatus</a> status = plugin.registerCommand(</div>\n\
<div class=\"line\">        <span class=\"stringliteral\">&quot;dumpFragment&quot;</span>, dumpFragment::creator);</div>\n\
<div class=\"line\">    <span class=\"keywordflow\">if</span> (!status)</div>\n\
<div class=\"line\">    {</div>\n\
<div class=\"line\">        status.<a name=\"a36\"></a><a class=\"code\" href=\"#!/url=./cpp_ref/class_m_status.html#a1f01a4748fea4d8bcced082df83f804d\">perror</a>(<span class=\"stringliteral\">&quot;registerCommand&quot;</span>);</div>\n\
<div class=\"line\">        <span class=\"keywordflow\">return</span> status;</div>\n\
<div class=\"line\">    }</div>\n\
<div class=\"line\"></div>\n\
<div class=\"line\">    <span class=\"keywordflow\">return</span> status;</div>\n\
<div class=\"line\">}</div>\n\
<div class=\"line\"></div>\n\
<div class=\"line\"><a class=\"code\" href=\"#!/url=./cpp_ref/class_m_status.html\">MStatus</a> uninitializePlugin(<a class=\"code\" href=\"#!/url=./cpp_ref/class_m_object.html\">MObject</a> obj)</div>\n\
<div class=\"line\">{</div>\n\
<div class=\"line\">    <a class=\"code\" href=\"#!/url=./cpp_ref/class_m_fn_plugin.html\">MFnPlugin</a> plugin(obj);</div>\n\
<div class=\"line\"></div>\n\
<div class=\"line\">    <a class=\"code\" href=\"#!/url=./cpp_ref/class_m_status.html\">MStatus</a> status = plugin.deregisterCommand(<span class=\"stringliteral\">&quot;dumpFragment&quot;</span>);</div>\n\
<div class=\"line\">    <span class=\"keywordflow\">if</span> (!status)</div>\n\
<div class=\"line\">    {</div>\n\
<div class=\"line\">        status.<a class=\"code\" href=\"#!/url=./cpp_ref/class_m_status.html#a1f01a4748fea4d8bcced082df83f804d\">perror</a>(<span class=\"stringliteral\">&quot;deregisterCommand&quot;</span>);</div>\n\
<div class=\"line\">        <span class=\"keywordflow\">return</span> status;</div>\n\
<div class=\"line\">    }</div>\n\
<div class=\"line\"></div>\n\
<div class=\"line\">    <span class=\"keywordflow\">return</span> status;</div>\n\
<div class=\"line\">}</div>\n\
</div><!-- fragment --> </div><!-- contents -->\n\
</div><!-- doc-content -->\n\
          <div class=\"footer-block\"><a href=\"../html/ac.cmtdialog.htm\" class=\"comments-anchor\" target=\"_blank\"><span class=\"comments-link\">Please send us your comment about this page</span></a></div><br></div>\n\
   </div></body>\n\
</html>\n\
";