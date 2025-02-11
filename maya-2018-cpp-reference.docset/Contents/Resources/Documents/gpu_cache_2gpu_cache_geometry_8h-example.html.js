var topic = "<!-- saved from url=(0024)http://docs.autodesk.com -->\n\
<html>\n\
   <head><script src=\"../scripts/yepnope.1.5.4-min.js\" type=\"text/javascript\"></script><script src=\"../scripts/lib/jquery-1.11.1.min.js\" type=\"text/javascript\"></script><meta http-equiv=\"Content-Type\" content=\"text/html; charset=UTF-8\"><meta name=\"product\" content=\"MAYAUL\"><meta name=\"release\" content=\"2018\"><meta name=\"book\" content=\"Developer\"><meta name=\"created\" content=\"2017-06-22\"><meta name=\"topicid\" content=\"GUID-02DEF634-1E7B-48C6-8ACD-2C934CA97887\"><meta name=\"topic-type\" content=\"concept\">\n\
      <title>gpuCache/gpuCacheGeometry.h</title>\n\
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
    cpp_ref_adsk_ref_toc.initNavTree(\'gpu_cache_2gpu_cache_geometry_8h-example.html\', tocPrefix);\n\
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
            <h1>gpuCache/gpuCacheGeometry.h</h1>\n\
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
<div class=\"title\">gpuCache/gpuCacheGeometry.h</div>  </div>\n\
</div><!--header-->\n\
<div class=\"contents\">\n\
<div class=\"fragment\"><div class=\"line\"><span class=\"preprocessor\">#ifndef _gpuCacheGeometry_h_</span></div>\n\
<div class=\"line\"><span class=\"preprocessor\">#define _gpuCacheGeometry_h_</span></div>\n\
<div class=\"line\"></div>\n\
<div class=\"line\"><span class=\"comment\">//-</span></div>\n\
<div class=\"line\"><span class=\"comment\">//**************************************************************************/</span></div>\n\
<div class=\"line\"><span class=\"comment\">// Copyright 2015 Autodesk, Inc.  All rights reserved.</span></div>\n\
<div class=\"line\"><span class=\"comment\">//</span></div>\n\
<div class=\"line\"><span class=\"comment\">// Use of this software is subject to the terms of the Autodesk </span></div>\n\
<div class=\"line\"><span class=\"comment\">// license agreement provided at the time of installation or download, </span></div>\n\
<div class=\"line\"><span class=\"comment\">// or which otherwise accompanies this software in either electronic </span></div>\n\
<div class=\"line\"><span class=\"comment\">// or hard copy form.</span></div>\n\
<div class=\"line\"><span class=\"comment\">//**************************************************************************/</span></div>\n\
<div class=\"line\"><span class=\"comment\">//+</span></div>\n\
<div class=\"line\"></div>\n\
<div class=\"line\"><span class=\"comment\">//</span></div>\n\
<div class=\"line\"><span class=\"comment\">// Geometry</span></div>\n\
<div class=\"line\"><span class=\"comment\">//</span></div>\n\
<div class=\"line\"><span class=\"comment\">// Data structures about the animated geometry held by the memory cache.</span></div>\n\
<div class=\"line\"><span class=\"comment\">//</span></div>\n\
<div class=\"line\"><span class=\"comment\"></span></div>\n\
<div class=\"line\"><span class=\"preprocessor\">#include &quot;gpuCacheSample.h&quot;</span></div>\n\
<div class=\"line\"><span class=\"preprocessor\">#include &quot;gpuCacheTimeInterval.h&quot;</span></div>\n\
<div class=\"line\"></div>\n\
<div class=\"line\"><span class=\"preprocessor\">#include &lt;maya/MTime.h&gt;</span></div>\n\
<div class=\"line\"><span class=\"preprocessor\">#include &lt;maya/MString.h&gt;</span></div>\n\
<div class=\"line\"></div>\n\
<div class=\"line\"><span class=\"preprocessor\">#include &lt;map&gt;</span></div>\n\
<div class=\"line\"><span class=\"preprocessor\">#include &lt;memory&gt;</span></div>\n\
<div class=\"line\"></div>\n\
<div class=\"line\"></div>\n\
<div class=\"line\"><span class=\"keyword\">namespace </span>GPUCache {</div>\n\
<div class=\"line\"></div>\n\
<div class=\"line\"><span class=\"keyword\">class </span>SubNode;</div>\n\
<div class=\"line\"><span class=\"keyword\">class </span>SubNodeVisitor;</div>\n\
<div class=\"line\"></div>\n\
<div class=\"line\"></div>\n\
<div class=\"line\"><span class=\"comment\">/*==============================================================================</span></div>\n\
<div class=\"line\"><span class=\"comment\"> * CLASS SubNodeData</span></div>\n\
<div class=\"line\"><span class=\"comment\"> *============================================================================*/</span></div>\n\
<div class=\"line\"></div>\n\
<div class=\"line\"><span class=\"keyword\">class </span>SubNodeData</div>\n\
<div class=\"line\">{</div>\n\
<div class=\"line\"><span class=\"keyword\">public</span>:</div>\n\
<div class=\"line\"></div>\n\
<div class=\"line\">    <span class=\"comment\">/*----- types and enumerations -----*/</span></div>\n\
<div class=\"line\"></div>\n\
<div class=\"line\">    <span class=\"keyword\">typedef</span> std::shared_ptr&lt;const SubNodeData&gt; Ptr;</div>\n\
<div class=\"line\"></div>\n\
<div class=\"line\"></div>\n\
<div class=\"line\">    <span class=\"comment\">/*----- member functions -----*/</span></div>\n\
<div class=\"line\"></div>\n\
<div class=\"line\">    <span class=\"keyword\">virtual</span> <span class=\"keywordtype\">void</span> accept(SubNodeVisitor&amp; visitor,</div>\n\
<div class=\"line\">                        <span class=\"keyword\">const</span> SubNode&amp;  subNode) <span class=\"keyword\">const</span> = 0;</div>\n\
<div class=\"line\">    </div>\n\
<div class=\"line\"></div>\n\
<div class=\"line\">    <span class=\"comment\">// This range represents the animation time range of</span></div>\n\
<div class=\"line\">    <span class=\"comment\">// the entire sub-tree in seconds.</span></div>\n\
<div class=\"line\">    <span class=\"keyword\">const</span> TimeInterval&amp; animTimeRange()<span class=\"keyword\"> const</span></div>\n\
<div class=\"line\"><span class=\"keyword\">    </span>{ <span class=\"keywordflow\">return</span> fAnimTimeRange; }</div>\n\
<div class=\"line\"></div>\n\
<div class=\"line\">    <span class=\"keywordtype\">void</span> setAnimTimeRange(<span class=\"keyword\">const</span> TimeInterval&amp; animTimeRange)</div>\n\
<div class=\"line\">    { fAnimTimeRange = animTimeRange; }</div>\n\
<div class=\"line\"></div>\n\
<div class=\"line\"><span class=\"keyword\">protected</span>:</div>\n\
<div class=\"line\"></div>\n\
<div class=\"line\">    <span class=\"comment\">/*----- member functions -----*/</span></div>\n\
<div class=\"line\"></div>\n\
<div class=\"line\">    SubNodeData() : fAnimTimeRange(TimeInterval::kInvalid) {}</div>\n\
<div class=\"line\">    <span class=\"keyword\">virtual</span> ~SubNodeData() = 0;</div>\n\
<div class=\"line\"></div>\n\
<div class=\"line\">    <span class=\"comment\">/*----- data members -----*/</span></div>\n\
<div class=\"line\">    TimeInterval fAnimTimeRange;</div>\n\
<div class=\"line\">};</div>\n\
<div class=\"line\"></div>\n\
<div class=\"line\"></div>\n\
<div class=\"line\"><span class=\"comment\">/*==============================================================================</span></div>\n\
<div class=\"line\"><span class=\"comment\"> * CLASS ShapeData</span></div>\n\
<div class=\"line\"><span class=\"comment\"> *============================================================================*/</span></div>\n\
<div class=\"line\"></div>\n\
<div class=\"line\"><span class=\"keyword\">class </span>ShapeData: <span class=\"keyword\">public</span> SubNodeData</div>\n\
<div class=\"line\">{</div>\n\
<div class=\"line\"><span class=\"keyword\">public</span>:</div>\n\
<div class=\"line\"></div>\n\
<div class=\"line\">    <span class=\"comment\">/*----- types and enumerations -----*/</span></div>\n\
<div class=\"line\"></div>\n\
<div class=\"line\">    <span class=\"comment\">// Pointer to immutable shape data</span></div>\n\
<div class=\"line\">    <span class=\"keyword\">typedef</span> std::shared_ptr&lt;const ShapeData&gt; Ptr;</div>\n\
<div class=\"line\"></div>\n\
<div class=\"line\">    <span class=\"comment\">// Pointer to mutable shape data</span></div>\n\
<div class=\"line\">    <span class=\"keyword\">typedef</span> std::shared_ptr&lt;ShapeData&gt; MPtr;</div>\n\
<div class=\"line\"></div>\n\
<div class=\"line\">    <span class=\"keyword\">typedef</span> std::map&lt;double, std::shared_ptr&lt;const ShapeSample&gt; &gt; SampleMap;</div>\n\
<div class=\"line\"></div>\n\
<div class=\"line\"></div>\n\
<div class=\"line\">    <span class=\"comment\">/*----- static member functions -----*/</span></div>\n\
<div class=\"line\"></div>\n\
<div class=\"line\">    <span class=\"keyword\">static</span> MPtr create() {</div>\n\
<div class=\"line\">        <span class=\"keywordflow\">return</span> std::make_shared&lt;ShapeData&gt;();</div>\n\
<div class=\"line\">    }</div>\n\
<div class=\"line\"></div>\n\
<div class=\"line\"></div>\n\
<div class=\"line\">    <span class=\"comment\">/*----- member functions -----*/</span></div>\n\
<div class=\"line\"></div>\n\
<div class=\"line\">    ~ShapeData() <span class=\"keyword\">override</span>;</div>\n\
<div class=\"line\"></div>\n\
<div class=\"line\">    <span class=\"keyword\">const</span> std::shared_ptr&lt;const ShapeSample&gt;&amp;</div>\n\
<div class=\"line\">    getSample(<span class=\"keywordtype\">double</span> seconds) <span class=\"keyword\">const</span>;</div>\n\
<div class=\"line\">    </div>\n\
<div class=\"line\">    <span class=\"keyword\">const</span> std::shared_ptr&lt;const ShapeSample&gt;&amp;</div>\n\
<div class=\"line\">    getSample(<span class=\"keyword\">const</span> <a name=\"_a0\"></a><a class=\"code\" href=\"#!/url=./cpp_ref/class_m_time.html\">MTime</a>&amp; time)<span class=\"keyword\"> const</span></div>\n\
<div class=\"line\"><span class=\"keyword\">    </span>{</div>\n\
<div class=\"line\">        <span class=\"keywordflow\">return</span> getSample(time.<a name=\"a1\"></a><a class=\"code\" href=\"#!/url=./cpp_ref/class_m_time.html#a105d41236561f4d4be6383ced757a429\">as</a>(<a name=\"a2\"></a><a class=\"code\" href=\"#!/url=./cpp_ref/class_m_time.html#abceb2331ad056e3c5ad27894199a49eda3091d1a096c28d4993507f167253ebc7\">MTime::kSeconds</a>));</div>\n\
<div class=\"line\">    }</div>\n\
<div class=\"line\">    </div>\n\
<div class=\"line\">    <span class=\"keyword\">const</span> SampleMap&amp; getSamples()<span class=\"keyword\"> const </span>{ <span class=\"keywordflow\">return</span> fSamples; }</div>\n\
<div class=\"line\">    </div>\n\
<div class=\"line\">    <span class=\"keywordtype\">void</span> addSample(<span class=\"keyword\">const</span> std::shared_ptr&lt;const ShapeSample&gt;&amp; sample);</div>\n\
<div class=\"line\"></div>\n\
<div class=\"line\">    <span class=\"keywordtype\">void</span> accept(SubNodeVisitor&amp; visitor,</div>\n\
<div class=\"line\">                        <span class=\"keyword\">const</span> SubNode&amp;  subNode) <span class=\"keyword\">const override</span>;</div>\n\
<div class=\"line\"></div>\n\
<div class=\"line\">    <span class=\"comment\">// Set a single material to the whole shape</span></div>\n\
<div class=\"line\">    <span class=\"keywordtype\">void</span> setMaterial(<span class=\"keyword\">const</span> <a name=\"_a3\"></a><a class=\"code\" href=\"#!/url=./cpp_ref/class_m_string.html\">MString</a>&amp; material);</div>\n\
<div class=\"line\"></div>\n\
<div class=\"line\">    <span class=\"comment\">// Set per-group materials to the shape</span></div>\n\
<div class=\"line\">    <span class=\"keywordtype\">void</span> setMaterials(<span class=\"keyword\">const</span> std::vector&lt;MString&gt;&amp; materials);</div>\n\
<div class=\"line\"></div>\n\
<div class=\"line\">    <span class=\"keyword\">const</span> std::vector&lt;MString&gt;&amp; getMaterials() <span class=\"keyword\">const</span>;</div>\n\
<div class=\"line\"></div>\n\
<div class=\"line\"><span class=\"keyword\">protected</span>:</div>\n\
<div class=\"line\"></div>\n\
<div class=\"line\">    <span class=\"keyword\">template</span>&lt;<span class=\"keyword\">class</span> T&gt; <span class=\"keyword\">friend</span> <span class=\"keywordtype\">void</span> boost::checked_delete(T * x);</div>\n\
<div class=\"line\"></div>\n\
<div class=\"line\">    GPUCACHE_DECLARE_MAKE_SHARED_FRIEND;</div>\n\
<div class=\"line\"></div>\n\
<div class=\"line\"></div>\n\
<div class=\"line\">    <span class=\"comment\">/*----- member functions -----*/</span></div>\n\
<div class=\"line\"></div>\n\
<div class=\"line\">    <span class=\"comment\">// The constructor is declare private to force user to go through</span></div>\n\
<div class=\"line\">    <span class=\"comment\">// the create() factory member function.</span></div>\n\
<div class=\"line\">    ShapeData();</div>\n\
<div class=\"line\"></div>\n\
<div class=\"line\">    <span class=\"comment\">// Prohibited and not implemented.</span></div>\n\
<div class=\"line\">    ShapeData(<span class=\"keyword\">const</span> ShapeData&amp;);</div>\n\
<div class=\"line\">    <span class=\"keyword\">const</span> ShapeData&amp; operator=(<span class=\"keyword\">const</span> ShapeData&amp;);</div>\n\
<div class=\"line\"></div>\n\
<div class=\"line\"></div>\n\
<div class=\"line\">    <span class=\"comment\">/*----- data members -----*/</span></div>\n\
<div class=\"line\"></div>\n\
<div class=\"line\">    SampleMap            fSamples;</div>\n\
<div class=\"line\">    std::vector&lt;MString&gt; fMaterials;</div>\n\
<div class=\"line\">};</div>\n\
<div class=\"line\"></div>\n\
<div class=\"line\"></div>\n\
<div class=\"line\"><span class=\"comment\">/*==============================================================================</span></div>\n\
<div class=\"line\"><span class=\"comment\"> * CLASS XformData</span></div>\n\
<div class=\"line\"><span class=\"comment\"> *============================================================================*/</span></div>\n\
<div class=\"line\"></div>\n\
<div class=\"line\"><span class=\"keyword\">class </span>XformData: <span class=\"keyword\">public</span> SubNodeData</div>\n\
<div class=\"line\">{</div>\n\
<div class=\"line\"><span class=\"keyword\">public</span>:</div>\n\
<div class=\"line\">    <span class=\"comment\">/*----- types and enumerations -----*/</span></div>\n\
<div class=\"line\"></div>\n\
<div class=\"line\">    <span class=\"comment\">// Pointer to immutable shape data</span></div>\n\
<div class=\"line\">    <span class=\"keyword\">typedef</span> std::shared_ptr&lt;const XformData&gt; Ptr;</div>\n\
<div class=\"line\"></div>\n\
<div class=\"line\">    <span class=\"comment\">// Pointer to mutable shape data</span></div>\n\
<div class=\"line\">    <span class=\"keyword\">typedef</span> std::shared_ptr&lt;XformData&gt; MPtr;</div>\n\
<div class=\"line\"></div>\n\
<div class=\"line\">    <span class=\"keyword\">typedef</span> std::map&lt;double, std::shared_ptr&lt;const XformSample&gt; &gt; SampleMap;</div>\n\
<div class=\"line\"></div>\n\
<div class=\"line\"></div>\n\
<div class=\"line\">    <span class=\"comment\">/*----- static member functions -----*/</span></div>\n\
<div class=\"line\"></div>\n\
<div class=\"line\">    <span class=\"keyword\">static</span> MPtr create() {</div>\n\
<div class=\"line\">        <span class=\"keywordflow\">return</span> std::make_shared&lt;XformData&gt;();</div>\n\
<div class=\"line\">    }</div>\n\
<div class=\"line\"></div>\n\
<div class=\"line\"></div>\n\
<div class=\"line\">    <span class=\"comment\">/*----- member functions -----*/</span></div>\n\
<div class=\"line\"></div>\n\
<div class=\"line\">    ~XformData() <span class=\"keyword\">override</span>;</div>\n\
<div class=\"line\"></div>\n\
<div class=\"line\">    <span class=\"keyword\">const</span> std::shared_ptr&lt;const XformSample&gt;&amp;</div>\n\
<div class=\"line\">    getSample(<span class=\"keywordtype\">double</span> seconds) <span class=\"keyword\">const</span>;</div>\n\
<div class=\"line\">    </div>\n\
<div class=\"line\">    <span class=\"keyword\">const</span> std::shared_ptr&lt;const XformSample&gt;&amp;</div>\n\
<div class=\"line\">    getSample(<span class=\"keyword\">const</span> <a class=\"code\" href=\"#!/url=./cpp_ref/class_m_time.html\">MTime</a>&amp; time)<span class=\"keyword\"> const</span></div>\n\
<div class=\"line\"><span class=\"keyword\">    </span>{</div>\n\
<div class=\"line\">        <span class=\"keywordflow\">return</span> getSample(time.<a class=\"code\" href=\"#!/url=./cpp_ref/class_m_time.html#a105d41236561f4d4be6383ced757a429\">as</a>(<a class=\"code\" href=\"#!/url=./cpp_ref/class_m_time.html#abceb2331ad056e3c5ad27894199a49eda3091d1a096c28d4993507f167253ebc7\">MTime::kSeconds</a>));</div>\n\
<div class=\"line\">    }</div>\n\
<div class=\"line\"></div>\n\
<div class=\"line\">    <span class=\"keyword\">const</span> SampleMap&amp; getSamples()<span class=\"keyword\"> const </span>{ <span class=\"keywordflow\">return</span> fSamples; }</div>\n\
<div class=\"line\"></div>\n\
<div class=\"line\">    <span class=\"keywordtype\">void</span> addSample(<span class=\"keyword\">const</span> std::shared_ptr&lt;const XformSample&gt;&amp; sample)</div>\n\
<div class=\"line\">    {</div>\n\
<div class=\"line\">        fSamples[sample-&gt;timeInSeconds()] = sample;</div>\n\
<div class=\"line\">    }</div>\n\
<div class=\"line\"></div>\n\
<div class=\"line\">    <span class=\"keywordtype\">void</span> accept(SubNodeVisitor&amp; visitor,</div>\n\
<div class=\"line\">                        <span class=\"keyword\">const</span> SubNode&amp;  subNode) <span class=\"keyword\">const override</span>;</div>\n\
<div class=\"line\"></div>\n\
<div class=\"line\">    </div>\n\
<div class=\"line\"><span class=\"keyword\">private</span>:</div>\n\
<div class=\"line\">    </div>\n\
<div class=\"line\">    <span class=\"keyword\">template</span>&lt;<span class=\"keyword\">class</span> T&gt; <span class=\"keyword\">friend</span> <span class=\"keywordtype\">void</span> boost::checked_delete(T * x);</div>\n\
<div class=\"line\"></div>\n\
<div class=\"line\">    GPUCACHE_DECLARE_MAKE_SHARED_FRIEND;</div>\n\
<div class=\"line\"></div>\n\
<div class=\"line\"></div>\n\
<div class=\"line\">    <span class=\"comment\">/*----- member functions -----*/</span></div>\n\
<div class=\"line\"></div>\n\
<div class=\"line\">    <span class=\"comment\">// The constructor is declare private to force user to go through</span></div>\n\
<div class=\"line\">    <span class=\"comment\">// the create() factory member function.</span></div>\n\
<div class=\"line\">    XformData() {}</div>\n\
<div class=\"line\">    </div>\n\
<div class=\"line\">    <span class=\"comment\">// Prohibited and not implemented.</span></div>\n\
<div class=\"line\">    XformData(<span class=\"keyword\">const</span> XformData&amp;);</div>\n\
<div class=\"line\">    <span class=\"keyword\">const</span> XformData&amp; operator=(<span class=\"keyword\">const</span> XformData&amp;);</div>\n\
<div class=\"line\"></div>\n\
<div class=\"line\">    </div>\n\
<div class=\"line\">    <span class=\"comment\">/*----- data members -----*/</span></div>\n\
<div class=\"line\"></div>\n\
<div class=\"line\">    SampleMap fSamples;</div>\n\
<div class=\"line\">};</div>\n\
<div class=\"line\"></div>\n\
<div class=\"line\"></div>\n\
<div class=\"line\"><span class=\"comment\">/*==============================================================================</span></div>\n\
<div class=\"line\"><span class=\"comment\"> * CLASS SubNodeVisitor</span></div>\n\
<div class=\"line\"><span class=\"comment\"> *============================================================================*/</span></div>\n\
<div class=\"line\"></div>\n\
<div class=\"line\"><span class=\"comment\">// Visitor for sub nodes.</span></div>\n\
<div class=\"line\"><span class=\"comment\">//</span></div>\n\
<div class=\"line\"><span class=\"comment\">// The visitor dispatches on the sub node data type, i.e. transform vs</span></div>\n\
<div class=\"line\"><span class=\"comment\">// shape. It is up to the visitor to recurse into the children of the</span></div>\n\
<div class=\"line\"><span class=\"comment\">// sub node. This allows the visitor to control the traversal of the</span></div>\n\
<div class=\"line\"><span class=\"comment\">// sub nodes. Note that this is somewhat different from the canonical</span></div>\n\
<div class=\"line\"><span class=\"comment\">// visitor design pattern.</span></div>\n\
<div class=\"line\"><span class=\"keyword\">class </span>SubNodeVisitor</div>\n\
<div class=\"line\">{</div>\n\
<div class=\"line\"><span class=\"keyword\">public</span>:</div>\n\
<div class=\"line\">        </div>\n\
<div class=\"line\">    <span class=\"keyword\">virtual</span> <span class=\"keywordtype\">void</span> visit(<span class=\"keyword\">const</span> XformData&amp;   xform,</div>\n\
<div class=\"line\">                       <span class=\"keyword\">const</span> SubNode&amp;     subNode) = 0;</div>\n\
<div class=\"line\"></div>\n\
<div class=\"line\">    <span class=\"keyword\">virtual</span> <span class=\"keywordtype\">void</span> visit(<span class=\"keyword\">const</span> ShapeData&amp;   shape,</div>\n\
<div class=\"line\">                       <span class=\"keyword\">const</span> SubNode&amp;     subNode) = 0;</div>\n\
<div class=\"line\"></div>\n\
<div class=\"line\">    <span class=\"keyword\">virtual</span> ~SubNodeVisitor();</div>\n\
<div class=\"line\">};</div>\n\
<div class=\"line\"></div>\n\
<div class=\"line\"></div>\n\
<div class=\"line\"><span class=\"comment\">/*==============================================================================</span></div>\n\
<div class=\"line\"><span class=\"comment\"> * CLASS  SubNode</span></div>\n\
<div class=\"line\"><span class=\"comment\"> *============================================================================*/</span></div>\n\
<div class=\"line\"></div>\n\
<div class=\"line\"><span class=\"keyword\">class </span>SubNode</div>\n\
<div class=\"line\">{</div>\n\
<div class=\"line\"><span class=\"keyword\">public</span>:</div>\n\
<div class=\"line\"></div>\n\
<div class=\"line\">    <span class=\"comment\">/*----- types and enumerations -----*/</span></div>\n\
<div class=\"line\"></div>\n\
<div class=\"line\">    <span class=\"comment\">// Pointer to a mutable sub node</span></div>\n\
<div class=\"line\">    <span class=\"keyword\">typedef</span> std::shared_ptr&lt;SubNode&gt;       MPtr;</div>\n\
<div class=\"line\"></div>\n\
<div class=\"line\">    <span class=\"comment\">// Pointer to an immutable sub node</span></div>\n\
<div class=\"line\">    <span class=\"keyword\">typedef</span> std::shared_ptr&lt;const SubNode&gt; Ptr;</div>\n\
<div class=\"line\"></div>\n\
<div class=\"line\">    <span class=\"comment\">// Weak pointer to an immutable sub node</span></div>\n\
<div class=\"line\">    <span class=\"keyword\">typedef</span> std::weak_ptr&lt;const SubNode&gt;   WPtr;</div>\n\
<div class=\"line\"></div>\n\
<div class=\"line\">    <span class=\"keyword\">enum</span> TransparentType {</div>\n\
<div class=\"line\">        kOpaque,</div>\n\
<div class=\"line\">        kTransparent,</div>\n\
<div class=\"line\">        kOpaqueAndTransparent,</div>\n\
<div class=\"line\">        kUnknown</div>\n\
<div class=\"line\">    };</div>\n\
<div class=\"line\"></div>\n\
<div class=\"line\"></div>\n\
<div class=\"line\">    <span class=\"comment\">/*----- static member functions -----*/</span></div>\n\
<div class=\"line\">    </div>\n\
<div class=\"line\">    <span class=\"keyword\">static</span> MPtr create(<span class=\"keyword\">const</span> <a class=\"code\" href=\"#!/url=./cpp_ref/class_m_string.html\">MString</a>&amp; name,</div>\n\
<div class=\"line\">                       <span class=\"keyword\">const</span> SubNodeData::Ptr&amp; nodeData) {</div>\n\
<div class=\"line\">        <span class=\"keywordflow\">return</span> std::make_shared&lt;SubNode&gt;(name, nodeData);</div>\n\
<div class=\"line\">    }</div>\n\
<div class=\"line\"></div>\n\
<div class=\"line\">    <span class=\"keyword\">static</span> <span class=\"keywordtype\">void</span> connect(<span class=\"keyword\">const</span> MPtr&amp; parent, <span class=\"keyword\">const</span> MPtr&amp; child)</div>\n\
<div class=\"line\">    {</div>\n\
<div class=\"line\">        parent-&gt;fChildren.push_back(child);</div>\n\
<div class=\"line\">        child-&gt;fParents.push_back(parent);</div>\n\
<div class=\"line\">    }</div>\n\
<div class=\"line\"></div>\n\
<div class=\"line\">    <span class=\"keyword\">static</span> <span class=\"keywordtype\">void</span> swapNodeData(<span class=\"keyword\">const</span> MPtr&amp; left, <span class=\"keyword\">const</span> MPtr&amp; right)</div>\n\
<div class=\"line\">    {</div>\n\
<div class=\"line\">        assert(left);</div>\n\
<div class=\"line\">        assert(right);</div>\n\
<div class=\"line\">        left-&gt;fNodeData.swap(right-&gt;fNodeData);</div>\n\
<div class=\"line\">        std::swap(left-&gt;fTransparentType, right-&gt;fTransparentType);</div>\n\
<div class=\"line\">    }</div>\n\
<div class=\"line\"></div>\n\
<div class=\"line\"></div>\n\
<div class=\"line\">    <span class=\"comment\">/*----- member functions -----*/</span></div>\n\
<div class=\"line\">    </div>\n\
<div class=\"line\">    ~SubNode();</div>\n\
<div class=\"line\"></div>\n\
<div class=\"line\">    <span class=\"keyword\">const</span> <a class=\"code\" href=\"#!/url=./cpp_ref/class_m_string.html\">MString</a>&amp; getName()<span class=\"keyword\"> const              </span>{ <span class=\"keywordflow\">return</span> fName; }</div>\n\
<div class=\"line\">    <span class=\"keyword\">const</span> SubNodeData::Ptr&amp; getData()<span class=\"keyword\"> const     </span>{ <span class=\"keywordflow\">return</span> fNodeData; }</div>\n\
<div class=\"line\">    <span class=\"keyword\">const</span> std::vector&lt;WPtr&gt;&amp; getParents()<span class=\"keyword\"> const </span>{ <span class=\"keywordflow\">return</span> fParents; }</div>\n\
<div class=\"line\">    <span class=\"keyword\">const</span> std::vector&lt;Ptr&gt;&amp; getChildren()<span class=\"keyword\"> const </span>{ <span class=\"keywordflow\">return</span> fChildren;}</div>\n\
<div class=\"line\"></div>\n\
<div class=\"line\">    <span class=\"keywordtype\">void</span> setName(<span class=\"keyword\">const</span> <a class=\"code\" href=\"#!/url=./cpp_ref/class_m_string.html\">MString</a>&amp; name)           { fName = name; }</div>\n\
<div class=\"line\"></div>\n\
<div class=\"line\">    <span class=\"comment\">// Transparent includes children and descendants</span></div>\n\
<div class=\"line\">    TransparentType transparentType()<span class=\"keyword\"> const </span>{ <span class=\"keywordflow\">return</span> fTransparentType; }</div>\n\
<div class=\"line\">    <span class=\"keywordtype\">void</span> setTransparentType(<span class=\"keyword\">const</span> TransparentType transparentType)</div>\n\
<div class=\"line\">    { fTransparentType = transparentType; }</div>\n\
<div class=\"line\"></div>\n\
<div class=\"line\">    <span class=\"comment\">// Traverse the DAG using the visitor. Note that the traveral</span></div>\n\
<div class=\"line\">    <span class=\"comment\">// ordering is under the control of the visitor.</span></div>\n\
<div class=\"line\">    <span class=\"keywordtype\">void</span> accept(SubNodeVisitor&amp; visitor)<span class=\"keyword\"> const</span></div>\n\
<div class=\"line\"><span class=\"keyword\">    </span>{ fNodeData-&gt;accept(visitor, *<span class=\"keyword\">this</span>); }</div>\n\
<div class=\"line\">    </div>\n\
<div class=\"line\"></div>\n\
<div class=\"line\"><span class=\"keyword\">private</span>:</div>\n\
<div class=\"line\"></div>\n\
<div class=\"line\">    <span class=\"keyword\">template</span>&lt;<span class=\"keyword\">class</span> T&gt; <span class=\"keyword\">friend</span> <span class=\"keywordtype\">void</span> boost::checked_delete(T * x);</div>\n\
<div class=\"line\">    GPUCACHE_DECLARE_MAKE_SHARED_FRIEND;</div>\n\
<div class=\"line\"></div>\n\
<div class=\"line\">    <span class=\"comment\">/*----- member functions -----*/</span></div>\n\
<div class=\"line\">    </div>\n\
<div class=\"line\">    <span class=\"comment\">// The constructor is declare private to force user to go through</span></div>\n\
<div class=\"line\">    <span class=\"comment\">// the create() factory member function.</span></div>\n\
<div class=\"line\">    SubNode(</div>\n\
<div class=\"line\">        <span class=\"keyword\">const</span> <a class=\"code\" href=\"#!/url=./cpp_ref/class_m_string.html\">MString</a>&amp; name,</div>\n\
<div class=\"line\">        <span class=\"keyword\">const</span> SubNodeData::Ptr&amp; nodeData);</div>\n\
<div class=\"line\"></div>\n\
<div class=\"line\">    </div>\n\
<div class=\"line\">    <span class=\"comment\">/*----- data members -----*/</span></div>\n\
<div class=\"line\">    </div>\n\
<div class=\"line\">    <a class=\"code\" href=\"#!/url=./cpp_ref/class_m_string.html\">MString</a> fName;</div>\n\
<div class=\"line\"></div>\n\
<div class=\"line\">    SubNodeData::Ptr   fNodeData;</div>\n\
<div class=\"line\">    std::vector&lt;WPtr&gt;  fParents;</div>\n\
<div class=\"line\">    std::vector&lt;Ptr&gt;   fChildren;</div>\n\
<div class=\"line\">    TransparentType    fTransparentType;</div>\n\
<div class=\"line\">};</div>\n\
<div class=\"line\"></div>\n\
<div class=\"line\">}</div>\n\
<div class=\"line\"></div>\n\
<div class=\"line\"><span class=\"preprocessor\">#endif</span></div>\n\
<div class=\"line\"></div>\n\
</div><!-- fragment --> </div><!-- contents -->\n\
</div><!-- doc-content -->\n\
          <div class=\"footer-block\"><a href=\"../html/ac.cmtdialog.htm\" class=\"comments-anchor\" target=\"_blank\"><span class=\"comments-link\">Please send us your comment about this page</span></a></div></div>\n\
   </div></body>\n\
</html>\n\
";