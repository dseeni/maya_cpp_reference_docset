var topic = "<!-- saved from url=(0024)http://docs.autodesk.com -->\n\
<html>\n\
   <head><script src=\"../scripts/yepnope.1.5.4-min.js\" type=\"text/javascript\"></script><script src=\"../scripts/lib/jquery-1.11.1.min.js\" type=\"text/javascript\"></script>\n\
      <title>C++ API Reference: simpleEvaluator/simpleEvaluator.cpp</title>\n\
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
    cpp_ref_adsk_ref_toc.initNavTree(\'simple_evaluator_2simple_evaluator_8cpp-example.html\', tocPrefix);\n\
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
            <h1>C++ API Reference: simpleEvaluator/simpleEvaluator.cpp</h1>\n\
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
<div class=\"title\">simpleEvaluator/simpleEvaluator.cpp</div>  </div>\n\
</div><!--header-->\n\
<div class=\"contents\">\n\
<div class=\"fragment\"><div class=\"line\"><span class=\"comment\">//-</span></div>\n\
<div class=\"line\"><span class=\"comment\">// ===========================================================================</span></div>\n\
<div class=\"line\"><span class=\"comment\">// Copyright 2016 Autodesk, Inc. All rights reserved.</span></div>\n\
<div class=\"line\"><span class=\"comment\">//</span></div>\n\
<div class=\"line\"><span class=\"comment\">// Use of this software is subject to the terms of the Autodesk license</span></div>\n\
<div class=\"line\"><span class=\"comment\">// agreement provided at the time of installation or download, or which</span></div>\n\
<div class=\"line\"><span class=\"comment\">// otherwise accompanies this software in either electronic or hard copy form.</span></div>\n\
<div class=\"line\"><span class=\"comment\">//</span></div>\n\
<div class=\"line\"><span class=\"comment\">// ===========================================================================</span></div>\n\
<div class=\"line\"><span class=\"comment\">//+</span></div>\n\
<div class=\"line\"></div>\n\
<div class=\"line\"><span class=\"preprocessor\">#include &lt;maya/MIOStream.h&gt;</span></div>\n\
<div class=\"line\"><span class=\"preprocessor\">#include &lt;maya/MFnPlugin.h&gt;</span></div>\n\
<div class=\"line\"><span class=\"preprocessor\">#include &lt;maya/MString.h&gt;</span></div>\n\
<div class=\"line\"></div>\n\
<div class=\"line\"><span class=\"preprocessor\">#include &lt;maya/MPxCustomEvaluator.h&gt;</span></div>\n\
<div class=\"line\"><span class=\"preprocessor\">#include &lt;maya/MEulerRotation.h&gt;</span></div>\n\
<div class=\"line\"><span class=\"preprocessor\">#include &lt;maya/MCustomEvaluatorClusterNode.h&gt;</span></div>\n\
<div class=\"line\"></div>\n\
<div class=\"line\"><span class=\"preprocessor\">#include &lt;maya/MGlobal.h&gt;</span></div>\n\
<div class=\"line\"><span class=\"preprocessor\">#include &lt;maya/MTime.h&gt;</span></div>\n\
<div class=\"line\"></div>\n\
<div class=\"line\"><span class=\"preprocessor\">#include &lt;maya/MFnDependencyNode.h&gt;</span></div>\n\
<div class=\"line\"><span class=\"preprocessor\">#include &lt;maya/MPlugArray.h&gt;</span></div>\n\
<div class=\"line\"><span class=\"preprocessor\">#include &lt;maya/MPlug.h&gt;</span></div>\n\
<div class=\"line\"><span class=\"preprocessor\">#include &lt;maya/MAnimControl.h&gt;</span></div>\n\
<div class=\"line\"><span class=\"preprocessor\">#include &lt;maya/MSelectionList.h&gt;</span></div>\n\
<div class=\"line\"><span class=\"preprocessor\">#include &lt;maya/MFnSet.h&gt;</span></div>\n\
<div class=\"line\"><span class=\"preprocessor\">#include &lt;maya/MProfiler.h&gt;</span></div>\n\
<div class=\"line\"><span class=\"preprocessor\">#include &lt;maya/MItDependencyNodes.h&gt;</span></div>\n\
<div class=\"line\"><span class=\"preprocessor\">#include &lt;vector&gt;</span></div>\n\
<div class=\"line\"><span class=\"preprocessor\">#include &lt;string&gt;</span></div>\n\
<div class=\"line\"></div>\n\
<div class=\"line\"><span class=\"comment\">// to avoid pulling in boost for just hash_combine, lets have our own</span></div>\n\
<div class=\"line\"><span class=\"keyword\">template</span> &lt;<span class=\"keyword\">class</span> T&gt;</div>\n\
<div class=\"line\"><span class=\"keyword\">inline</span> <span class=\"keywordtype\">void</span> hash_combine(std::size_t &amp; seed, <span class=\"keyword\">const</span> T &amp; v)</div>\n\
<div class=\"line\">{</div>\n\
<div class=\"line\">          std::hash&lt;T&gt; hasher;</div>\n\
<div class=\"line\">            seed ^= hasher(v) + 0x9e3779b9 + (seed &lt;&lt; 6) + (seed &gt;&gt; 2);</div>\n\
<div class=\"line\">}</div>\n\
<div class=\"line\"></div>\n\
<div class=\"line\"><span class=\"keywordtype\">int</span> _profilerCategory = <a name=\"a0\"></a><a class=\"code\" href=\"#!/url=./cpp_ref/class_m_profiler.html#a0a16b68268bd93a67d404e9ecb77c5a5\">MProfiler::addCategory</a>(<span class=\"stringliteral\">&quot;Simple Evaluator&quot;</span>, <span class=\"stringliteral\">&quot;Events from the EM simple evaluator&quot;</span>);</div>\n\
<div class=\"line\"></div>\n\
<div class=\"line\"><span class=\"comment\">//</span></div>\n\
<div class=\"line\"><span class=\"comment\">// Evaluator class declaration</span></div>\n\
<div class=\"line\"><span class=\"comment\">//</span></div>\n\
<div class=\"line\"><span class=\"comment\"></span><span class=\"keyword\">class </span>simpleEvaluator : <span class=\"keyword\">public</span> <a name=\"_a1\"></a><a class=\"code\" href=\"#!/url=./cpp_ref/class_m_px_custom_evaluator.html\">MPxCustomEvaluator</a></div>\n\
<div class=\"line\">{</div>\n\
<div class=\"line\"><span class=\"keyword\">public</span>:</div>\n\
<div class=\"line\">    <span class=\"keyword\">virtual</span>         ~simpleEvaluator();</div>\n\
<div class=\"line\"></div>\n\
<div class=\"line\">    <span class=\"keywordtype\">bool</span>    <a name=\"a2\"></a><a class=\"code\" href=\"#!/url=./cpp_ref/class_m_px_custom_evaluator.html#ab796c49be826aa53c78faf09f05ab0c8\">markIfSupported</a>     (<span class=\"keyword\">const</span> <a name=\"_a3\"></a><a class=\"code\" href=\"#!/url=./cpp_ref/class_m_evaluation_node.html\">MEvaluationNode</a>* node) <span class=\"keyword\">override</span>;</div>\n\
<div class=\"line\">    </div>\n\
<div class=\"line\">    <a class=\"code\" href=\"#!/url=./cpp_ref/class_m_custom_evaluator_cluster_node.html#aa4dfc80e0475312169cf7a2b4299b825\">MCustomEvaluatorClusterNode::SchedulingType</a> schedulingType  (<span class=\"keyword\">const</span> <a name=\"_a4\"></a><a class=\"code\" href=\"#!/url=./cpp_ref/class_m_custom_evaluator_cluster_node.html\">MCustomEvaluatorClusterNode</a>* cluster) <span class=\"keyword\">override</span>;</div>\n\
<div class=\"line\">    </div>\n\
<div class=\"line\">    <span class=\"keywordtype\">void</span>    <a name=\"a5\"></a><a class=\"code\" href=\"#!/url=./cpp_ref/class_m_px_custom_evaluator.html#a0ee39c4c551994ada0ae27f4b9407c48\">preEvaluate</a>         (<span class=\"keyword\">const</span> <a name=\"_a6\"></a><a class=\"code\" href=\"#!/url=./cpp_ref/class_m_evaluation_graph.html\">MEvaluationGraph</a>* graph) <span class=\"keyword\">override</span>;</div>\n\
<div class=\"line\">    <span class=\"keywordtype\">void</span>    <a name=\"a7\"></a><a class=\"code\" href=\"#!/url=./cpp_ref/class_m_px_custom_evaluator.html#a15601c71655108beeb74c77bf70b021a\">postEvaluate</a>        (<span class=\"keyword\">const</span> <a class=\"code\" href=\"#!/url=./cpp_ref/class_m_evaluation_graph.html\">MEvaluationGraph</a>* graph) <span class=\"keyword\">override</span>;</div>\n\
<div class=\"line\"></div>\n\
<div class=\"line\">    <span class=\"keywordtype\">bool</span>    <a name=\"a8\"></a><a class=\"code\" href=\"#!/url=./cpp_ref/class_m_px_custom_evaluator.html#aadcd7c91ee41f0f4ac48923ed11db44b\">clusterInitialize</a>   (<span class=\"keyword\">const</span> <a class=\"code\" href=\"#!/url=./cpp_ref/class_m_custom_evaluator_cluster_node.html\">MCustomEvaluatorClusterNode</a>* cluster) <span class=\"keyword\">override</span>;</div>\n\
<div class=\"line\">    <span class=\"keywordtype\">void</span>    <a name=\"a9\"></a><a class=\"code\" href=\"#!/url=./cpp_ref/class_m_px_custom_evaluator.html#a9bded60be46fea26c410402438aa331a\">clusterEvaluate</a>     (<span class=\"keyword\">const</span> <a class=\"code\" href=\"#!/url=./cpp_ref/class_m_custom_evaluator_cluster_node.html\">MCustomEvaluatorClusterNode</a>* cluster) <span class=\"keyword\">override</span>;</div>\n\
<div class=\"line\">    <span class=\"keywordtype\">void</span>    <a name=\"a10\"></a><a class=\"code\" href=\"#!/url=./cpp_ref/class_m_px_custom_evaluator.html#a93f7f73d9a911cd75458e64fa9b4a29b\">clusterTerminate</a>    (<span class=\"keyword\">const</span> <a class=\"code\" href=\"#!/url=./cpp_ref/class_m_custom_evaluator_cluster_node.html\">MCustomEvaluatorClusterNode</a>* cluster) <span class=\"keyword\">override</span>;</div>\n\
<div class=\"line\"></div>\n\
<div class=\"line\">    <span class=\"keyword\">static</span> <a class=\"code\" href=\"#!/url=./cpp_ref/class_m_px_custom_evaluator.html\">MPxCustomEvaluator</a>*  creator();</div>\n\
<div class=\"line\"></div>\n\
<div class=\"line\"><span class=\"keyword\">protected</span>:</div>\n\
<div class=\"line\">    <span class=\"keywordtype\">void</span>    buildPlugListWithControllerTag();</div>\n\
<div class=\"line\">    <span class=\"keywordtype\">void</span>    buildHashValue();</div>\n\
<div class=\"line\"></div>\n\
<div class=\"line\"><span class=\"keyword\">private</span>:</div>\n\
<div class=\"line\">    std::size_t fOldHashValue;</div>\n\
<div class=\"line\">    std::size_t fCurrentHashValue;</div>\n\
<div class=\"line\"></div>\n\
<div class=\"line\">    <a name=\"_a11\"></a><a class=\"code\" href=\"#!/url=./cpp_ref/class_m_plug_array.html\">MPlugArray</a>  fControllerPlugs;</div>\n\
<div class=\"line\">};</div>\n\
<div class=\"line\"></div>\n\
<div class=\"line\"><span class=\"comment\">//</span></div>\n\
<div class=\"line\"><span class=\"comment\">// Evaluator class implementation</span></div>\n\
<div class=\"line\"><span class=\"comment\">//</span></div>\n\
<div class=\"line\"><span class=\"comment\">// This evaluator assumes the existence of controller </span></div>\n\
<div class=\"line\"><span class=\"comment\">// nodes that control the animation for a scene. It is </span></div>\n\
<div class=\"line\"><span class=\"comment\">// assumed that the nodes are tagged as controllers (in</span></div>\n\
<div class=\"line\"><span class=\"comment\">// the &quot;Rigging&quot; menu set, Control -&gt; Tag as Controller).</span></div>\n\
<div class=\"line\"><span class=\"comment\">// During the scheduling phase (in clusterInitialize(...), </span></div>\n\
<div class=\"line\"><span class=\"comment\">// we call buildPlugListWithControllerTag to build a </span></div>\n\
<div class=\"line\"><span class=\"comment\">// list of plugs for translation, and rotation.</span></div>\n\
<div class=\"line\"><span class=\"comment\">// </span></div>\n\
<div class=\"line\"><span class=\"comment\">// During preEvaluate(...) which is called per frame</span></div>\n\
<div class=\"line\"><span class=\"comment\">// we calculate a hash value based on the plug values of</span></div>\n\
<div class=\"line\"><span class=\"comment\">// the current frame. This value is compared with the </span></div>\n\
<div class=\"line\"><span class=\"comment\">// previous frame&#39;s hash in clusterEvaluate(...) and</span></div>\n\
<div class=\"line\"><span class=\"comment\">// if the hash is different, we proceed with evaluation</span></div>\n\
<div class=\"line\"><span class=\"comment\">// otherwise we do nothing.</span></div>\n\
<div class=\"line\"><span class=\"comment\">//</span></div>\n\
<div class=\"line\"><span class=\"comment\">// The setup is cleaned up in clusterTerminate(...), which</span></div>\n\
<div class=\"line\"><span class=\"comment\">// is only called when the scene&#39;s graph topology is</span></div>\n\
<div class=\"line\"><span class=\"comment\">// invalidated.</span></div>\n\
<div class=\"line\"><span class=\"comment\"></span></div>\n\
<div class=\"line\"><span class=\"keywordtype\">bool</span> simpleEvaluator::markIfSupported(<span class=\"keyword\">const</span> <a class=\"code\" href=\"#!/url=./cpp_ref/class_m_evaluation_node.html\">MEvaluationNode</a>* node)</div>\n\
<div class=\"line\">{</div>\n\
<div class=\"line\">    <span class=\"keywordflow\">return</span> <span class=\"keyword\">true</span>;</div>\n\
<div class=\"line\">}</div>\n\
<div class=\"line\"></div>\n\
<div class=\"line\"><span class=\"keywordtype\">void</span> simpleEvaluator::buildPlugListWithControllerTag()</div>\n\
<div class=\"line\">{</div>\n\
<div class=\"line\">    <a name=\"_a12\"></a><a class=\"code\" href=\"#!/url=./cpp_ref/class_m_status.html\">MStatus</a> stat;</div>\n\
<div class=\"line\">    <a name=\"_a13\"></a><a class=\"code\" href=\"#!/url=./cpp_ref/class_m_it_dependency_nodes.html\">MItDependencyNodes</a> dgIter(<a name=\"a14\"></a><a class=\"code\" href=\"#!/url=./cpp_ref/class_m_fn.html#a1d1cfd8ffb84e947f82999c682b666a7a2b22ce66d36be93bd811dadc1f3c6dc9\">MFn::kControllerTag</a>, &amp;stat);</div>\n\
<div class=\"line\"></div>\n\
<div class=\"line\">    <span class=\"keywordflow\">if</span> (stat == MS::kSuccess)</div>\n\
<div class=\"line\">    {</div>\n\
<div class=\"line\">        <span class=\"keyword\">const</span> <span class=\"keywordtype\">char</span>* values[] = {<span class=\"stringliteral\">&quot;translateX&quot;</span>, <span class=\"stringliteral\">&quot;translateY&quot;</span>, <span class=\"stringliteral\">&quot;translateZ&quot;</span>, <span class=\"stringliteral\">&quot;rotateX&quot;</span>, <span class=\"stringliteral\">&quot;rotateY&quot;</span>, <span class=\"stringliteral\">&quot;rotateZ&quot;</span>};</div>\n\
<div class=\"line\"></div>\n\
<div class=\"line\">        <span class=\"keywordflow\">for</span> (; !dgIter.isDone(); dgIter.next()) </div>\n\
<div class=\"line\">        {</div>\n\
<div class=\"line\">            <a name=\"_a15\"></a><a class=\"code\" href=\"#!/url=./cpp_ref/class_m_fn_dependency_node.html\">MFnDependencyNode</a> controllerTagNode(dgIter.thisNode(), &amp;stat);</div>\n\
<div class=\"line\"></div>\n\
<div class=\"line\">            <span class=\"keywordflow\">if</span> (stat != MS::kSuccess) <span class=\"keywordflow\">continue</span>;</div>\n\
<div class=\"line\">            </div>\n\
<div class=\"line\">            <a name=\"_a16\"></a><a class=\"code\" href=\"#!/url=./cpp_ref/class_m_plug.html\">MPlug</a> currControllerTagPlug = controllerTagNode.findPlug(<span class=\"stringliteral\">&quot;controllerObject&quot;</span>,  <span class=\"keyword\">true</span>,  &amp;stat);</div>\n\
<div class=\"line\"></div>\n\
<div class=\"line\">            <span class=\"keywordflow\">if</span> (stat != MS::kSuccess) <span class=\"keywordflow\">continue</span>;</div>\n\
<div class=\"line\"></div>\n\
<div class=\"line\">            <span class=\"comment\">// found controller tag node, now get its source controller</span></div>\n\
<div class=\"line\">            <a class=\"code\" href=\"#!/url=./cpp_ref/class_m_plug_array.html\">MPlugArray</a> source;</div>\n\
<div class=\"line\">            <span class=\"keywordflow\">if</span> (currControllerTagPlug.<a name=\"a17\"></a><a class=\"code\" href=\"#!/url=./cpp_ref/class_m_plug.html#acf1340576a4a0a78a0045e67ee4155bf\">connectedTo</a>(source, <span class=\"keyword\">true</span> <span class=\"comment\">/* asDst */</span>, <span class=\"keyword\">false</span> <span class=\"comment\">/* asSrc */</span>, &amp;stat))</div>\n\
<div class=\"line\">            {</div>\n\
<div class=\"line\">                <span class=\"keywordflow\">if</span> (stat != MS::kSuccess) <span class=\"keywordflow\">continue</span>;</div>\n\
<div class=\"line\"></div>\n\
<div class=\"line\">                <span class=\"comment\">// there should only be one source with the controller tag node as destination</span></div>\n\
<div class=\"line\">                <a name=\"_a18\"></a><a class=\"code\" href=\"#!/url=./cpp_ref/class_m_object.html\">MObject</a> controllerNode = source[0].node(&amp;stat);</div>\n\
<div class=\"line\"></div>\n\
<div class=\"line\">                <span class=\"keywordflow\">if</span> (stat != MS::kSuccess) <span class=\"keywordflow\">continue</span>;</div>\n\
<div class=\"line\"></div>\n\
<div class=\"line\">                <a class=\"code\" href=\"#!/url=./cpp_ref/class_m_fn_dependency_node.html\">MFnDependencyNode</a> currControllerNode(controllerNode, &amp;stat);</div>\n\
<div class=\"line\"></div>\n\
<div class=\"line\">                <span class=\"keywordflow\">for</span> (<span class=\"keywordtype\">unsigned</span> <span class=\"keywordtype\">int</span> j = 0; j &lt; 6; j++)</div>\n\
<div class=\"line\">                {</div>\n\
<div class=\"line\">                    <a class=\"code\" href=\"#!/url=./cpp_ref/class_m_plug.html\">MPlug</a> currPlug = currControllerNode.findPlug(values[j],  <span class=\"keyword\">true</span>,  &amp;stat);</div>\n\
<div class=\"line\"></div>\n\
<div class=\"line\">                    <span class=\"keywordflow\">if</span> (stat == MS::kSuccess)</div>\n\
<div class=\"line\">                    {</div>\n\
<div class=\"line\">                        fControllerPlugs.append(currPlug);</div>\n\
<div class=\"line\">                    }</div>\n\
<div class=\"line\">                    <span class=\"keywordflow\">else</span></div>\n\
<div class=\"line\">                    {</div>\n\
<div class=\"line\">                        std::cerr &lt;&lt; <span class=\"stringliteral\">&quot;NO PLUG: &quot;</span> &lt;&lt; currControllerNode.<a name=\"a19\"></a><a class=\"code\" href=\"#!/url=./cpp_ref/class_m_plug.html#a58e7cf126b4fe51e9705cee4faaf59fc\">name</a>().<a name=\"a20\"></a><a class=\"code\" href=\"#!/url=./cpp_ref/class_m_string.html#aa9ab612f356c53479afc4c648c9ef94d\">asChar</a>() &lt;&lt; <span class=\"stringliteral\">&quot;.&quot;</span> &lt;&lt; values[j] &lt;&lt; std::endl;</div>\n\
<div class=\"line\">                    }</div>\n\
<div class=\"line\">                }</div>\n\
<div class=\"line\">            }</div>\n\
<div class=\"line\">        }</div>\n\
<div class=\"line\">    }</div>\n\
<div class=\"line\">}</div>\n\
<div class=\"line\"></div>\n\
<div class=\"line\"><span class=\"keywordtype\">void</span> simpleEvaluator::buildHashValue()</div>\n\
<div class=\"line\">{</div>\n\
<div class=\"line\">    <span class=\"keywordtype\">unsigned</span> <span class=\"keywordtype\">int</span> length = fControllerPlugs.length();</div>\n\
<div class=\"line\">    <a class=\"code\" href=\"#!/url=./cpp_ref/class_m_status.html\">MStatus</a> stat = MS::kSuccess;</div>\n\
<div class=\"line\"></div>\n\
<div class=\"line\">    <span class=\"keywordflow\">for</span> (<span class=\"keywordtype\">unsigned</span> <span class=\"keywordtype\">int</span> i = 0; i &lt; length; i++)</div>\n\
<div class=\"line\">    {</div>\n\
<div class=\"line\">        <span class=\"keywordtype\">float</span> value = 0;</div>\n\
<div class=\"line\">        stat = fControllerPlugs[i].getValue(value);</div>\n\
<div class=\"line\"></div>\n\
<div class=\"line\">        <span class=\"keywordflow\">if</span> (stat == MS::kSuccess)</div>\n\
<div class=\"line\">        {</div>\n\
<div class=\"line\">            hash_combine(fCurrentHashValue, value);</div>\n\
<div class=\"line\">        }</div>\n\
<div class=\"line\">        <span class=\"keywordflow\">else</span></div>\n\
<div class=\"line\">        {</div>\n\
<div class=\"line\">            std::cerr &lt;&lt; <span class=\"stringliteral\">&quot;NO VALUE: &quot;</span> &lt;&lt; fControllerPlugs[i].name().asChar() &lt;&lt; std::endl;</div>\n\
<div class=\"line\">        }</div>\n\
<div class=\"line\">    }</div>\n\
<div class=\"line\">}</div>\n\
<div class=\"line\"></div>\n\
<div class=\"line\"><span class=\"comment\">// Is this evaluator capable of evaluating clusters in parallel?</span></div>\n\
<div class=\"line\"><a class=\"code\" href=\"#!/url=./cpp_ref/class_m_custom_evaluator_cluster_node.html#aa4dfc80e0475312169cf7a2b4299b825\">MCustomEvaluatorClusterNode::SchedulingType</a> simpleEvaluator::schedulingType (<span class=\"keyword\">const</span> <a class=\"code\" href=\"#!/url=./cpp_ref/class_m_custom_evaluator_cluster_node.html\">MCustomEvaluatorClusterNode</a>* cluster)</div>\n\
<div class=\"line\">{</div>\n\
<div class=\"line\">    <span class=\"keywordflow\">return</span> cluster-&gt;<a name=\"a21\"></a><a class=\"code\" href=\"#!/url=./cpp_ref/class_m_custom_evaluator_cluster_node.html#aaaceae2c8e44fe97940fd1d625389ac2\">schedulingType</a>();</div>\n\
<div class=\"line\">}</div>\n\
<div class=\"line\"></div>\n\
<div class=\"line\"><span class=\"keywordtype\">void</span> simpleEvaluator::preEvaluate(<span class=\"keyword\">const</span> <a class=\"code\" href=\"#!/url=./cpp_ref/class_m_evaluation_graph.html\">MEvaluationGraph</a>* graph)</div>\n\
<div class=\"line\">{</div>\n\
<div class=\"line\">    <a name=\"_a22\"></a><a class=\"code\" href=\"#!/url=./cpp_ref/class_m_profiling_scope.html\">MProfilingScope</a> profilingScopeForEval(_profilerCategory, MProfiler::kColorD_L1, <span class=\"stringliteral\">&quot;buildPoseHash&quot;</span>, <span class=\"stringliteral\">&quot;building pose hash&quot;</span>);</div>\n\
<div class=\"line\">    buildHashValue();</div>\n\
<div class=\"line\">}</div>\n\
<div class=\"line\"></div>\n\
<div class=\"line\"><span class=\"keywordtype\">void</span> simpleEvaluator::postEvaluate(<span class=\"keyword\">const</span> <a class=\"code\" href=\"#!/url=./cpp_ref/class_m_evaluation_graph.html\">MEvaluationGraph</a>* graph)</div>\n\
<div class=\"line\">{</div>\n\
<div class=\"line\">    fOldHashValue = fCurrentHashValue;</div>\n\
<div class=\"line\">    fCurrentHashValue = 0;</div>\n\
<div class=\"line\">}</div>\n\
<div class=\"line\"></div>\n\
<div class=\"line\"><span class=\"comment\">// called during scheduling</span></div>\n\
<div class=\"line\"><span class=\"keywordtype\">bool</span> simpleEvaluator::clusterInitialize (<span class=\"keyword\">const</span> <a class=\"code\" href=\"#!/url=./cpp_ref/class_m_custom_evaluator_cluster_node.html\">MCustomEvaluatorClusterNode</a>* cluster)</div>\n\
<div class=\"line\">{</div>\n\
<div class=\"line\">    <span class=\"keywordflow\">if</span> (fControllerPlugs.length() == 0)</div>\n\
<div class=\"line\">    {</div>\n\
<div class=\"line\">        buildPlugListWithControllerTag();</div>\n\
<div class=\"line\">    }</div>\n\
<div class=\"line\"></div>\n\
<div class=\"line\">    <span class=\"keywordflow\">return</span> <span class=\"keyword\">true</span>;</div>\n\
<div class=\"line\">}</div>\n\
<div class=\"line\"></div>\n\
<div class=\"line\"><span class=\"keywordtype\">void</span> simpleEvaluator::clusterEvaluate(<span class=\"keyword\">const</span> <a class=\"code\" href=\"#!/url=./cpp_ref/class_m_custom_evaluator_cluster_node.html\">MCustomEvaluatorClusterNode</a>* cluster)</div>\n\
<div class=\"line\">{</div>\n\
<div class=\"line\">    <span class=\"keywordflow\">if</span> (fOldHashValue != fCurrentHashValue)</div>\n\
<div class=\"line\">    {</div>\n\
<div class=\"line\">        <span class=\"comment\">// if the poses are different, call the cluster&#39;s evaluation</span></div>\n\
<div class=\"line\">        cluster-&gt;<a name=\"a23\"></a><a class=\"code\" href=\"#!/url=./cpp_ref/class_m_custom_evaluator_cluster_node.html#ad188df5aadbf5bdbc691f3d82e2e371d\">evaluate</a>();</div>\n\
<div class=\"line\">    }</div>\n\
<div class=\"line\">}</div>\n\
<div class=\"line\"></div>\n\
<div class=\"line\"><span class=\"keywordtype\">void</span> simpleEvaluator::clusterTerminate(<span class=\"keyword\">const</span> <a class=\"code\" href=\"#!/url=./cpp_ref/class_m_custom_evaluator_cluster_node.html\">MCustomEvaluatorClusterNode</a>* cluster)</div>\n\
<div class=\"line\">{</div>\n\
<div class=\"line\">    <span class=\"keywordflow\">if</span> (fControllerPlugs.length() &gt; 0)</div>\n\
<div class=\"line\">    {</div>\n\
<div class=\"line\">        fControllerPlugs.clear();</div>\n\
<div class=\"line\">    }</div>\n\
<div class=\"line\">}</div>\n\
<div class=\"line\"></div>\n\
<div class=\"line\"><a class=\"code\" href=\"#!/url=./cpp_ref/class_m_px_custom_evaluator.html\">MPxCustomEvaluator</a>* simpleEvaluator::creator()</div>\n\
<div class=\"line\">{</div>\n\
<div class=\"line\">    <span class=\"keywordflow\">return</span> <span class=\"keyword\">new</span> simpleEvaluator();</div>\n\
<div class=\"line\">}</div>\n\
<div class=\"line\"></div>\n\
<div class=\"line\">simpleEvaluator::~simpleEvaluator()</div>\n\
<div class=\"line\">{</div>\n\
<div class=\"line\">}</div>\n\
<div class=\"line\"></div>\n\
<div class=\"line\"><span class=\"comment\">//</span></div>\n\
<div class=\"line\"><span class=\"comment\">// The following routines are used to register/unregister</span></div>\n\
<div class=\"line\"><span class=\"comment\">// the evaluator we are creating within Maya</span></div>\n\
<div class=\"line\"><span class=\"comment\">//</span></div>\n\
<div class=\"line\"><span class=\"comment\"></span><a class=\"code\" href=\"#!/url=./cpp_ref/class_m_status.html\">MStatus</a> initializePlugin( <a class=\"code\" href=\"#!/url=./cpp_ref/class_m_object.html\">MObject</a> obj )</div>\n\
<div class=\"line\">{</div>\n\
<div class=\"line\">    <a class=\"code\" href=\"#!/url=./cpp_ref/class_m_status.html\">MStatus</a>   status;</div>\n\
<div class=\"line\">    <a name=\"_a24\"></a><a class=\"code\" href=\"#!/url=./cpp_ref/class_m_fn_plugin.html\">MFnPlugin</a> plugin( obj, PLUGIN_COMPANY, <span class=\"stringliteral\">&quot;3.0&quot;</span>, <span class=\"stringliteral\">&quot;Any&quot;</span>);</div>\n\
<div class=\"line\"></div>\n\
<div class=\"line\">    status = plugin.registerEvaluator(<span class=\"stringliteral\">&quot;SimpleEvaluator&quot;</span>, 40 <span class=\"comment\">/* unused */</span>, simpleEvaluator::creator);</div>\n\
<div class=\"line\"></div>\n\
<div class=\"line\">    <span class=\"keywordflow\">if</span> (!status) </div>\n\
<div class=\"line\">    {</div>\n\
<div class=\"line\">        status.<a name=\"a25\"></a><a class=\"code\" href=\"#!/url=./cpp_ref/class_m_status.html#a1f01a4748fea4d8bcced082df83f804d\">perror</a>(<span class=\"stringliteral\">&quot;registerEvaluator&quot;</span>);</div>\n\
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
<div class=\"line\">    status =  plugin.deregisterEvaluator( <span class=\"stringliteral\">&quot;SimpleEvaluator&quot;</span> );</div>\n\
<div class=\"line\">    <span class=\"keywordflow\">if</span> (!status)</div>\n\
<div class=\"line\">    {</div>\n\
<div class=\"line\">        status.<a class=\"code\" href=\"#!/url=./cpp_ref/class_m_status.html#a1f01a4748fea4d8bcced082df83f804d\">perror</a>(<span class=\"stringliteral\">&quot;deRegisterEvaluator&quot;</span>);</div>\n\
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