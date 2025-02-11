var topic = "<!-- saved from url=(0024)http://docs.autodesk.com -->\n\
<html>\n\
   <head><script src=\"../scripts/yepnope.1.5.4-min.js\" type=\"text/javascript\"></script><script src=\"../scripts/lib/jquery-1.11.1.min.js\" type=\"text/javascript\"></script><meta http-equiv=\"Content-Type\" content=\"text/html; charset=UTF-8\"><meta name=\"product\" content=\"MAYAUL\"><meta name=\"release\" content=\"2016\"><meta name=\"book\" content=\"Developer\"><meta name=\"created\" content=\"2015-10-14\"><meta name=\"topicid\" content=\"GUID-02DEF634-1E7B-48C6-8ACD-2C934CA97887\"><meta name=\"topic-type\" content=\"concept\">\n\
      <title>splatDeformer/splatDeformer.cpp</title>\n\
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
    cpp_ref_adsk_ref_toc.initNavTree(\'splat_deformer_2splat_deformer_8cpp-example.html\', tocPrefix);\n\
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
</script><script>$(\"div#WidgetFloaterPanels,link[href*=\'microsofttranslator.com\'],script[src*=\'microsofttranslator.com\'],script[src*=\'bing.com\']\").remove();</script><script type=\'text/javascript\'>$(\"div#navigation,div#breadcrumbs,div#banner\").attr(\"translate\",\"no\"); var mtLocation = ((location && location.href && location.href.indexOf(\'https\') == 0)?\'https://ssl.microsofttranslator.com\':\'http://www.microsofttranslator.com\')+\'/ajax/v3/WidgetV3.ashx?siteData=y5CYlxTRD0znCzRLDwX0Wy7-g1EdC1XA4dSC-Y1LtaeScyli8_Ps5jPKqTr4xKxMI0OOUfkDplvX3uxN0JnPclebSYW8_J1HBzf4VLQEzQ8M4PsYXF_cMyp1Oumaetky&category=5297189e-446b-459e-ae1d-9d0360400781_tech&ctf=True&ui=true&settings=Manual&from=en&hidelanguages=\'; yepnope.injectJs(mtLocation, function() {}, { charset:\'utf-8\', type:\'text/javascript\' } );</script><script>\n\
 if (!tocSystemNeedsToBeLoaded) { cpp_ref_initializeToc(); }\n\
 </script><!-- begin MT -->\n\
            \n\
            <div id=\'MicrosoftTranslatorWidget\' class=\'Dark\' style=\'position:absolute;right:20px;top:5px;z-index:100;color:white;background-color:#555555;height:58px;overflow:hidden\'></div>\n\
      <div>\n\
         <div class=\"head\">\n\
            <h1>splatDeformer/splatDeformer.cpp</h1>\n\
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
<div class=\"title\">splatDeformer/splatDeformer.cpp</div>  </div>\n\
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
<div class=\"line\"><span class=\"comment\">//  File: splatDeformer.cc</span></div>\n\
<div class=\"line\"><span class=\"comment\">//</span></div>\n\
<div class=\"line\"><span class=\"comment\">//  Description:</span></div>\n\
<div class=\"line\"><span class=\"comment\">//      Example implementation of a threaded deformer. This node</span></div>\n\
<div class=\"line\"><span class=\"comment\">//      deforms one mesh using another.</span></div>\n\
<div class=\"line\"><span class=\"comment\">//</span></div>\n\
<div class=\"line\"></div>\n\
<div class=\"line\"><span class=\"preprocessor\">#include &lt;maya/MIOStream.h&gt;</span></div>\n\
<div class=\"line\"></div>\n\
<div class=\"line\"><span class=\"preprocessor\">#include &lt;maya/MPxGeometryFilter.h&gt;</span> </div>\n\
<div class=\"line\"><span class=\"preprocessor\">#include &lt;maya/MItGeometry.h&gt;</span></div>\n\
<div class=\"line\"><span class=\"preprocessor\">#include &lt;maya/MFnPlugin.h&gt;</span></div>\n\
<div class=\"line\"><span class=\"preprocessor\">#include &lt;maya/MDataBlock.h&gt;</span></div>\n\
<div class=\"line\"><span class=\"preprocessor\">#include &lt;maya/MDataHandle.h&gt;</span></div>\n\
<div class=\"line\"><span class=\"preprocessor\">#include &lt;maya/MPoint.h&gt;</span></div>\n\
<div class=\"line\"><span class=\"preprocessor\">#include &lt;maya/MTimer.h&gt;</span></div>\n\
<div class=\"line\"><span class=\"preprocessor\">#include &lt;maya/MFnMesh.h&gt;</span></div>\n\
<div class=\"line\"><span class=\"preprocessor\">#include &lt;maya/MPointArray.h&gt;</span></div>\n\
<div class=\"line\"><span class=\"preprocessor\">#include &lt;maya/MFnTypedAttribute.h&gt;</span></div>\n\
<div class=\"line\"><span class=\"preprocessor\">#include &lt;maya/MFnMeshData.h&gt;</span></div>\n\
<div class=\"line\"><span class=\"preprocessor\">#include &lt;maya/MMeshIntersector.h&gt;</span></div>\n\
<div class=\"line\"></div>\n\
<div class=\"line\"><span class=\"preprocessor\">#include &lt;maya/MThreadUtils.h&gt;</span></div>\n\
<div class=\"line\"></div>\n\
<div class=\"line\"><span class=\"comment\">// Macros</span></div>\n\
<div class=\"line\"><span class=\"comment\">//</span></div>\n\
<div class=\"line\"><span class=\"preprocessor\">#define MCheckStatus(status,message)    \\</span></div>\n\
<div class=\"line\"><span class=\"preprocessor\">    if( MStatus::kSuccess != status ) { \\</span></div>\n\
<div class=\"line\"><span class=\"preprocessor\">        cerr &lt;&lt; message &lt;&lt; &quot;\\n&quot;;        \\</span></div>\n\
<div class=\"line\"><span class=\"preprocessor\">        return status;                  \\</span></div>\n\
<div class=\"line\"><span class=\"preprocessor\">    }</span></div>\n\
<div class=\"line\"></div>\n\
<div class=\"line\"><span class=\"keyword\">class </span>splatDeformer : <span class=\"keyword\">public</span> <a name=\"_a0\"></a><a class=\"code\" href=\"#!/url=./cpp_ref/class_m_px_geometry_filter.html\">MPxGeometryFilter</a></div>\n\
<div class=\"line\">{</div>\n\
<div class=\"line\"><span class=\"keyword\">public</span>:</div>\n\
<div class=\"line\">                        splatDeformer();</div>\n\
<div class=\"line\">    <span class=\"keyword\">virtual</span>             ~splatDeformer();</div>\n\
<div class=\"line\"></div>\n\
<div class=\"line\">    <span class=\"keyword\">static</span>  <span class=\"keywordtype\">void</span>*       creator();</div>\n\
<div class=\"line\">    <span class=\"keyword\">static</span>  <a name=\"_a1\"></a><a class=\"code\" href=\"#!/url=./cpp_ref/class_m_status.html\">MStatus</a>     initialize();</div>\n\
<div class=\"line\"></div>\n\
<div class=\"line\">    <span class=\"comment\">// deformation function</span></div>\n\
<div class=\"line\">    <span class=\"comment\">//</span></div>\n\
<div class=\"line\">    <span class=\"keyword\">virtual</span> <a class=\"code\" href=\"#!/url=./cpp_ref/class_m_status.html\">MStatus</a> <a name=\"a2\"></a><a class=\"code\" href=\"#!/url=./cpp_ref/class_m_px_node.html#a5cb7edfa1f67c75588bec1c38b7bf5f8\">compute</a>(<span class=\"keyword\">const</span> <a name=\"_a3\"></a><a class=\"code\" href=\"#!/url=./cpp_ref/class_m_plug.html\">MPlug</a>&amp; plug, <a name=\"_a4\"></a><a class=\"code\" href=\"#!/url=./cpp_ref/class_m_data_block.html\">MDataBlock</a>&amp; dataBlock);</div>\n\
<div class=\"line\"></div>\n\
<div class=\"line\"><span class=\"keyword\">public</span>:</div>\n\
<div class=\"line\">    <span class=\"comment\">// local node attributes</span></div>\n\
<div class=\"line\"></div>\n\
<div class=\"line\">    <span class=\"keyword\">static</span>  <a name=\"_a5\"></a><a class=\"code\" href=\"#!/url=./cpp_ref/class_m_type_id.html\">MTypeId</a>     id;</div>\n\
<div class=\"line\"></div>\n\
<div class=\"line\">    <span class=\"keyword\">static</span> <a name=\"_a6\"></a><a class=\"code\" href=\"#!/url=./cpp_ref/class_m_object.html\">MObject</a> deformingMesh;</div>\n\
<div class=\"line\"></div>\n\
<div class=\"line\"><span class=\"keyword\">private</span>:</div>\n\
<div class=\"line\">};</div>\n\
<div class=\"line\"></div>\n\
<div class=\"line\"><a class=\"code\" href=\"#!/url=./cpp_ref/class_m_type_id.html\">MTypeId</a>     splatDeformer::id( 0x8104D );</div>\n\
<div class=\"line\"><a class=\"code\" href=\"#!/url=./cpp_ref/class_m_object.html\">MObject</a>     splatDeformer::deformingMesh;</div>\n\
<div class=\"line\"></div>\n\
<div class=\"line\">splatDeformer::splatDeformer() {}</div>\n\
<div class=\"line\">splatDeformer::~splatDeformer() {}</div>\n\
<div class=\"line\"></div>\n\
<div class=\"line\"><span class=\"keywordtype\">void</span>* splatDeformer::creator()</div>\n\
<div class=\"line\">{</div>\n\
<div class=\"line\">    <span class=\"keywordflow\">return</span> <span class=\"keyword\">new</span> splatDeformer();</div>\n\
<div class=\"line\">}</div>\n\
<div class=\"line\"></div>\n\
<div class=\"line\"><a class=\"code\" href=\"#!/url=./cpp_ref/class_m_status.html\">MStatus</a> splatDeformer::initialize()</div>\n\
<div class=\"line\">{</div>\n\
<div class=\"line\">    <span class=\"comment\">// local attribute initialization</span></div>\n\
<div class=\"line\">    <a class=\"code\" href=\"#!/url=./cpp_ref/class_m_status.html\">MStatus</a> status;</div>\n\
<div class=\"line\">    <a name=\"_a7\"></a><a class=\"code\" href=\"#!/url=./cpp_ref/class_m_fn_typed_attribute.html\">MFnTypedAttribute</a> mAttr;</div>\n\
<div class=\"line\">    deformingMesh=mAttr.<a name=\"a8\"></a><a class=\"code\" href=\"#!/url=./cpp_ref/class_m_fn_typed_attribute.html#af785af0a66bd4a4da1d9f7bd74d4de0a\">create</a>( <span class=\"stringliteral\">&quot;deformingMesh&quot;</span>, <span class=\"stringliteral\">&quot;dm&quot;</span>, <a name=\"a9\"></a><a class=\"code\" href=\"#!/url=./cpp_ref/class_m_fn_data.html#a1d1cfd8ffb84e947f82999c682b666a7a19fd562fc0900a60162e6073df36cb62\">MFnMeshData::kMesh</a>);</div>\n\
<div class=\"line\">    mAttr.<a name=\"a10\"></a><a class=\"code\" href=\"#!/url=./cpp_ref/class_m_fn_attribute.html#a8d2be80de133a200a455bf9e2ac1b709\">setStorable</a>(<span class=\"keyword\">true</span>);</div>\n\
<div class=\"line\"></div>\n\
<div class=\"line\">    <span class=\"comment\">//  deformation attributes</span></div>\n\
<div class=\"line\">    status = addAttribute( deformingMesh );</div>\n\
<div class=\"line\">    MCheckStatus(status, <span class=\"stringliteral\">&quot;ERROR in addAttribute\\n&quot;</span>);</div>\n\
<div class=\"line\"></div>\n\
<div class=\"line\">    status = attributeAffects( deformingMesh, outputGeom );</div>\n\
<div class=\"line\">    MCheckStatus(status, <span class=\"stringliteral\">&quot;ERROR in attributeAffects\\n&quot;</span>);</div>\n\
<div class=\"line\"></div>\n\
<div class=\"line\">    <span class=\"keywordflow\">return</span> <a name=\"a11\"></a><a class=\"code\" href=\"#!/url=./cpp_ref/class_m_status.html#a02ab596f4febca68da503aaf8dde3a80af0536797208144380691e2b376ffc1d1\">MStatus::kSuccess</a>;</div>\n\
<div class=\"line\">}</div>\n\
<div class=\"line\"></div>\n\
<div class=\"line\"><a class=\"code\" href=\"#!/url=./cpp_ref/class_m_status.html\">MStatus</a> splatDeformer::compute(<span class=\"keyword\">const</span> <a class=\"code\" href=\"#!/url=./cpp_ref/class_m_plug.html\">MPlug</a>&amp; plug, <a class=\"code\" href=\"#!/url=./cpp_ref/class_m_data_block.html\">MDataBlock</a>&amp; data)</div>\n\
<div class=\"line\">{</div>\n\
<div class=\"line\">    <span class=\"comment\">// do this if we are using an OpenMP implementation that is not the same as Maya&#39;s.</span></div>\n\
<div class=\"line\">    <span class=\"comment\">// Even if it is the same, it does no harm to make this call.</span></div>\n\
<div class=\"line\">    <a name=\"a12\"></a><a class=\"code\" href=\"#!/url=./cpp_ref/class_m_thread_utils.html#ab857568ad1f4a49da93939d7db7c2a1c\">MThreadUtils::syncNumOpenMPThreads</a>();</div>\n\
<div class=\"line\"></div>\n\
<div class=\"line\">    <a class=\"code\" href=\"#!/url=./cpp_ref/class_m_status.html\">MStatus</a> status = <a name=\"a13\"></a><a class=\"code\" href=\"#!/url=./cpp_ref/class_m_status.html#a02ab596f4febca68da503aaf8dde3a80a7f858db05022c8bc860d685e13bab6ae\">MStatus::kUnknownParameter</a>;</div>\n\
<div class=\"line\">    <span class=\"keywordflow\">if</span> (plug.<a name=\"a14\"></a><a class=\"code\" href=\"#!/url=./cpp_ref/class_m_plug.html#a18baf7e7504bc90d54dea49a7d2d924b\">attribute</a>() != outputGeom) {</div>\n\
<div class=\"line\">        <span class=\"keywordflow\">return</span> status;</div>\n\
<div class=\"line\">    }</div>\n\
<div class=\"line\"></div>\n\
<div class=\"line\">    <span class=\"keywordtype\">unsigned</span> <span class=\"keywordtype\">int</span> index = plug.<a name=\"a15\"></a><a class=\"code\" href=\"#!/url=./cpp_ref/class_m_plug.html#a7ee0cc502aa499c01ff2e41c76ac53c7\">logicalIndex</a>();</div>\n\
<div class=\"line\">    <a class=\"code\" href=\"#!/url=./cpp_ref/class_m_object.html\">MObject</a> thisNode = this-&gt;thisMObject();</div>\n\
<div class=\"line\"></div>\n\
<div class=\"line\">    <span class=\"comment\">// get input value</span></div>\n\
<div class=\"line\">    <a class=\"code\" href=\"#!/url=./cpp_ref/class_m_plug.html\">MPlug</a> inPlug(thisNode,input);</div>\n\
<div class=\"line\">    inPlug.selectAncestorLogicalIndex(index,input);</div>\n\
<div class=\"line\">    <a name=\"_a16\"></a><a class=\"code\" href=\"#!/url=./cpp_ref/class_m_data_handle.html\">MDataHandle</a> hInput = data.<a name=\"a17\"></a><a class=\"code\" href=\"#!/url=./cpp_ref/class_m_data_block.html#af4a356799acd4ed070d372ed7cfb4706\">inputValue</a>(inPlug, &amp;status);</div>\n\
<div class=\"line\">    MCheckStatus(status, <span class=\"stringliteral\">&quot;ERROR getting input mesh\\n&quot;</span>);</div>\n\
<div class=\"line\">    </div>\n\
<div class=\"line\">    <span class=\"comment\">// get the input geometry</span></div>\n\
<div class=\"line\">    <a class=\"code\" href=\"#!/url=./cpp_ref/class_m_data_handle.html\">MDataHandle</a> inputData = hInput.<a name=\"a18\"></a><a class=\"code\" href=\"#!/url=./cpp_ref/class_m_data_handle.html#a58951af761a410e17982060cae4fdf49\">child</a>(inputGeom);</div>\n\
<div class=\"line\">    <span class=\"keywordflow\">if</span> (inputData.<a name=\"a19\"></a><a class=\"code\" href=\"#!/url=./cpp_ref/class_m_data_handle.html#aa7d5edae2cc3b032294d95ff3afb17cb\">type</a>() != <a class=\"code\" href=\"#!/url=./cpp_ref/class_m_fn_data.html#a1d1cfd8ffb84e947f82999c682b666a7a19fd562fc0900a60162e6073df36cb62\">MFnData::kMesh</a>) {</div>\n\
<div class=\"line\">        printf(<span class=\"stringliteral\">&quot;Incorrect input geometry type\\n&quot;</span>);</div>\n\
<div class=\"line\">        <span class=\"keywordflow\">return</span> <a name=\"a20\"></a><a class=\"code\" href=\"#!/url=./cpp_ref/class_m_status.html#a02ab596f4febca68da503aaf8dde3a80a1ef6c2d725fb4bec3e7e840d28adbc00\">MStatus::kFailure</a>;</div>\n\
<div class=\"line\">    }</div>\n\
<div class=\"line\"></div>\n\
<div class=\"line\">    <span class=\"comment\">// get the input groupId - ignored for now...</span></div>\n\
<div class=\"line\">    <a class=\"code\" href=\"#!/url=./cpp_ref/class_m_data_handle.html\">MDataHandle</a> hGroup = inputData.<a class=\"code\" href=\"#!/url=./cpp_ref/class_m_data_handle.html#a58951af761a410e17982060cae4fdf49\">child</a>(groupId);</div>\n\
<div class=\"line\">    <span class=\"keywordtype\">unsigned</span> <span class=\"keywordtype\">int</span> groupId = hGroup.<a name=\"a21\"></a><a class=\"code\" href=\"#!/url=./cpp_ref/class_m_data_handle.html#a7e34eb0d7ccd3be001aebd8f5fa90675\">asLong</a>();</div>\n\
<div class=\"line\"></div>\n\
<div class=\"line\">    <span class=\"comment\">// get deforming mesh</span></div>\n\
<div class=\"line\">    <a class=\"code\" href=\"#!/url=./cpp_ref/class_m_data_handle.html\">MDataHandle</a> deformData = data.<a class=\"code\" href=\"#!/url=./cpp_ref/class_m_data_block.html#af4a356799acd4ed070d372ed7cfb4706\">inputValue</a>(deformingMesh, &amp;status);</div>\n\
<div class=\"line\">    MCheckStatus(status, <span class=\"stringliteral\">&quot;ERROR getting deforming mesh\\n&quot;</span>);</div>\n\
<div class=\"line\">    <span class=\"keywordflow\">if</span> (deformData.<a class=\"code\" href=\"#!/url=./cpp_ref/class_m_data_handle.html#aa7d5edae2cc3b032294d95ff3afb17cb\">type</a>() != <a class=\"code\" href=\"#!/url=./cpp_ref/class_m_fn_data.html#a1d1cfd8ffb84e947f82999c682b666a7a19fd562fc0900a60162e6073df36cb62\">MFnData::kMesh</a>) {</div>\n\
<div class=\"line\">        printf(<span class=\"stringliteral\">&quot;Incorrect deformer geometry type %d\\n&quot;</span>, deformData.<a class=\"code\" href=\"#!/url=./cpp_ref/class_m_data_handle.html#aa7d5edae2cc3b032294d95ff3afb17cb\">type</a>());</div>\n\
<div class=\"line\">        <span class=\"keywordflow\">return</span> <a class=\"code\" href=\"#!/url=./cpp_ref/class_m_status.html#a02ab596f4febca68da503aaf8dde3a80a1ef6c2d725fb4bec3e7e840d28adbc00\">MStatus::kFailure</a>;</div>\n\
<div class=\"line\">    }</div>\n\
<div class=\"line\"></div>\n\
<div class=\"line\">    <a class=\"code\" href=\"#!/url=./cpp_ref/class_m_object.html\">MObject</a> dSurf = deformData.<a name=\"a22\"></a><a class=\"code\" href=\"#!/url=./cpp_ref/class_m_data_handle.html#abd10cb87e2ba95f1dd7bbfbeb8bc9e56\">asMeshTransformed</a>();</div>\n\
<div class=\"line\">    <a name=\"_a23\"></a><a class=\"code\" href=\"#!/url=./cpp_ref/class_m_fn_mesh.html\">MFnMesh</a> fnDeformingMesh;</div>\n\
<div class=\"line\">    fnDeformingMesh.<a name=\"a24\"></a><a class=\"code\" href=\"#!/url=./cpp_ref/class_m_fn_dag_node.html#a6b2301b53683a8e8f56dd0b9cb088b0f\">setObject</a>( dSurf ) ;</div>\n\
<div class=\"line\"></div>\n\
<div class=\"line\">    <a class=\"code\" href=\"#!/url=./cpp_ref/class_m_data_handle.html\">MDataHandle</a> outputData = data.<a name=\"a25\"></a><a class=\"code\" href=\"#!/url=./cpp_ref/class_m_data_block.html#a5e4082d6ab961bee4ec0281676bb4834\">outputValue</a>(plug);</div>\n\
<div class=\"line\">    outputData.<a name=\"a26\"></a><a class=\"code\" href=\"#!/url=./cpp_ref/class_m_data_handle.html#ac9331e2baa99db78393811c850c0afab\">copy</a>(inputData);</div>\n\
<div class=\"line\">    <span class=\"keywordflow\">if</span> (outputData.<a class=\"code\" href=\"#!/url=./cpp_ref/class_m_data_handle.html#aa7d5edae2cc3b032294d95ff3afb17cb\">type</a>() != <a class=\"code\" href=\"#!/url=./cpp_ref/class_m_fn_data.html#a1d1cfd8ffb84e947f82999c682b666a7a19fd562fc0900a60162e6073df36cb62\">MFnData::kMesh</a>) {</div>\n\
<div class=\"line\">        printf(<span class=\"stringliteral\">&quot;Incorrect output mesh type\\n&quot;</span>);</div>\n\
<div class=\"line\">        <span class=\"keywordflow\">return</span> <a class=\"code\" href=\"#!/url=./cpp_ref/class_m_status.html#a02ab596f4febca68da503aaf8dde3a80a1ef6c2d725fb4bec3e7e840d28adbc00\">MStatus::kFailure</a>;</div>\n\
<div class=\"line\">    }</div>\n\
<div class=\"line\">    </div>\n\
<div class=\"line\">    <a name=\"_a27\"></a><a class=\"code\" href=\"#!/url=./cpp_ref/class_m_it_geometry.html\">MItGeometry</a> iter(outputData, groupId, <span class=\"keyword\">false</span>);</div>\n\
<div class=\"line\"></div>\n\
<div class=\"line\">    <span class=\"comment\">// create fast intersector structure</span></div>\n\
<div class=\"line\">    <a name=\"_a28\"></a><a class=\"code\" href=\"#!/url=./cpp_ref/class_m_mesh_intersector.html\">MMeshIntersector</a> intersector;</div>\n\
<div class=\"line\">    intersector.<a name=\"a29\"></a><a class=\"code\" href=\"#!/url=./cpp_ref/class_m_mesh_intersector.html#aab015a3bd03384d9df33d3ba7ded8613\">create</a>(dSurf);</div>\n\
<div class=\"line\"></div>\n\
<div class=\"line\">    <span class=\"comment\">// get all points at once. Faster to query, and also better for</span></div>\n\
<div class=\"line\">    <span class=\"comment\">// threading than using iterator</span></div>\n\
<div class=\"line\">    <a name=\"_a30\"></a><a class=\"code\" href=\"#!/url=./cpp_ref/class_m_point_array.html\">MPointArray</a> verts;</div>\n\
<div class=\"line\">    iter.allPositions(verts);</div>\n\
<div class=\"line\">    <span class=\"keywordtype\">int</span> nPoints = verts.<a name=\"a31\"></a><a class=\"code\" href=\"#!/url=./cpp_ref/class_m_point_array.html#a580388f31f60c46fac867ca48a48da1e\">length</a>();</div>\n\
<div class=\"line\"></div>\n\
<div class=\"line\">    <span class=\"comment\">// use bool variable as lightweight object for failure check in loop below</span></div>\n\
<div class=\"line\">    <span class=\"keywordtype\">bool</span> failed = <span class=\"keyword\">false</span>;</div>\n\
<div class=\"line\"></div>\n\
<div class=\"line\">    <a name=\"_a32\"></a><a class=\"code\" href=\"#!/url=./cpp_ref/class_m_timer.html\">MTimer</a> timer; timer.<a name=\"a33\"></a><a class=\"code\" href=\"#!/url=./cpp_ref/class_m_timer.html#ac336e3fea7e0479c0496beccd27ba152\">beginTimer</a>();</div>\n\
<div class=\"line\"></div>\n\
<div class=\"line\"><span class=\"preprocessor\">#ifdef _OPENMP</span></div>\n\
<div class=\"line\"><span class=\"preprocessor\">#pragma omp parallel for</span></div>\n\
<div class=\"line\"><span class=\"preprocessor\">#endif</span></div>\n\
<div class=\"line\">    <span class=\"keywordflow\">for</span>(<span class=\"keywordtype\">int</span> i=0; i&lt;nPoints; i++) {</div>\n\
<div class=\"line\"></div>\n\
<div class=\"line\">        <span class=\"comment\">// Cannot break out of an OpenMP loop, so if one of the</span></div>\n\
<div class=\"line\">        <span class=\"comment\">// intersections failed, skip the rest</span></div>\n\
<div class=\"line\">        <span class=\"keywordflow\">if</span>(failed) <span class=\"keywordflow\">continue</span>;</div>\n\
<div class=\"line\"></div>\n\
<div class=\"line\">        <span class=\"comment\">// mesh point object must be in loop-local scope to avoid race conditions</span></div>\n\
<div class=\"line\">        <a name=\"_a34\"></a><a class=\"code\" href=\"#!/url=./cpp_ref/class_m_point_on_mesh.html\">MPointOnMesh</a> meshPoint;</div>\n\
<div class=\"line\"></div>\n\
<div class=\"line\">        <span class=\"comment\">// Do intersection. Need to use per-thread status value as</span></div>\n\
<div class=\"line\">        <span class=\"comment\">// MStatus has internal state and may trigger race conditions</span></div>\n\
<div class=\"line\">        <span class=\"comment\">// if set from multiple threads. Probably benign in this case,</span></div>\n\
<div class=\"line\">        <span class=\"comment\">// but worth being careful.</span></div>\n\
<div class=\"line\">        <a class=\"code\" href=\"#!/url=./cpp_ref/class_m_status.html\">MStatus</a> localStatus = intersector.<a name=\"a35\"></a><a class=\"code\" href=\"#!/url=./cpp_ref/class_m_mesh_intersector.html#afb95dfc8297ee0d645ec8c962aa0f256\">getClosestPoint</a>(verts[i], meshPoint);</div>\n\
<div class=\"line\">        <span class=\"keywordflow\">if</span>(localStatus != <a class=\"code\" href=\"#!/url=./cpp_ref/class_m_status.html#a02ab596f4febca68da503aaf8dde3a80af0536797208144380691e2b376ffc1d1\">MStatus::kSuccess</a>) {</div>\n\
<div class=\"line\">            <span class=\"comment\">// NOTE - we cannot break out of an OpenMP region, so set</span></div>\n\
<div class=\"line\">            <span class=\"comment\">// bad status and skip remaining iterations</span></div>\n\
<div class=\"line\">            failed = <span class=\"keyword\">true</span>;</div>\n\
<div class=\"line\">            <span class=\"keywordflow\">continue</span>;</div>\n\
<div class=\"line\">        }</div>\n\
<div class=\"line\"></div>\n\
<div class=\"line\">        <span class=\"comment\">// default OpenMP scheduling breaks traversal into large</span></div>\n\
<div class=\"line\">        <span class=\"comment\">// chunks, so low risk of false sharing here in array write.</span></div>\n\
<div class=\"line\">        verts[i] = meshPoint.<a name=\"a36\"></a><a class=\"code\" href=\"#!/url=./cpp_ref/class_m_point_on_mesh.html#ace09aa24add4ba039b7146838be4d173\">getPoint</a>();</div>\n\
<div class=\"line\">    }</div>\n\
<div class=\"line\"></div>\n\
<div class=\"line\">    timer.<a name=\"a37\"></a><a class=\"code\" href=\"#!/url=./cpp_ref/class_m_timer.html#ab1cd82365475316c3b987f456df5e14c\">endTimer</a>(); printf(<span class=\"stringliteral\">&quot;Runtime for threaded loop %f\\n&quot;</span>, timer.<a name=\"a38\"></a><a class=\"code\" href=\"#!/url=./cpp_ref/class_m_timer.html#af216bfafd4829e364522a4c93e737fe8\">elapsedTime</a>());</div>\n\
<div class=\"line\"></div>\n\
<div class=\"line\">    <span class=\"comment\">// write values back onto output using fast set method on iterator</span></div>\n\
<div class=\"line\">    iter.setAllPositions(verts);</div>\n\
<div class=\"line\"></div>\n\
<div class=\"line\">    <span class=\"keywordflow\">if</span>(failed) {</div>\n\
<div class=\"line\">        printf(<span class=\"stringliteral\">&quot;Closest point failed\\n&quot;</span>);</div>\n\
<div class=\"line\">        <span class=\"keywordflow\">return</span> <a class=\"code\" href=\"#!/url=./cpp_ref/class_m_status.html#a02ab596f4febca68da503aaf8dde3a80a1ef6c2d725fb4bec3e7e840d28adbc00\">MStatus::kFailure</a>;</div>\n\
<div class=\"line\">    }</div>\n\
<div class=\"line\"></div>\n\
<div class=\"line\">    <span class=\"keywordflow\">return</span> status;</div>\n\
<div class=\"line\">}</div>\n\
<div class=\"line\"></div>\n\
<div class=\"line\"><span class=\"comment\">// standard initialization procedures</span></div>\n\
<div class=\"line\"><span class=\"comment\">//</span></div>\n\
<div class=\"line\"><a class=\"code\" href=\"#!/url=./cpp_ref/class_m_status.html\">MStatus</a> initializePlugin( <a class=\"code\" href=\"#!/url=./cpp_ref/class_m_object.html\">MObject</a> obj )</div>\n\
<div class=\"line\">{</div>\n\
<div class=\"line\">    <a class=\"code\" href=\"#!/url=./cpp_ref/class_m_status.html\">MStatus</a> result;</div>\n\
<div class=\"line\">    <a name=\"_a39\"></a><a class=\"code\" href=\"#!/url=./cpp_ref/class_m_fn_plugin.html\">MFnPlugin</a> plugin( obj, PLUGIN_COMPANY, <span class=\"stringliteral\">&quot;1.0&quot;</span>, <span class=\"stringliteral\">&quot;Any&quot;</span>);</div>\n\
<div class=\"line\">    result = plugin.registerNode( <span class=\"stringliteral\">&quot;splatDeformer&quot;</span>, splatDeformer::id, splatDeformer::creator, </div>\n\
<div class=\"line\">                                  splatDeformer::initialize, <a name=\"a40\"></a><a class=\"code\" href=\"#!/url=./cpp_ref/class_m_px_node.html#a1d1cfd8ffb84e947f82999c682b666a7a397b2fe312ffa55c207f8f9b12f616d3\">MPxNode::kDeformerNode</a> );</div>\n\
<div class=\"line\"></div>\n\
<div class=\"line\">    <span class=\"keywordflow\">return</span> result;</div>\n\
<div class=\"line\">}</div>\n\
<div class=\"line\"></div>\n\
<div class=\"line\"><a class=\"code\" href=\"#!/url=./cpp_ref/class_m_status.html\">MStatus</a> uninitializePlugin( <a class=\"code\" href=\"#!/url=./cpp_ref/class_m_object.html\">MObject</a> obj)</div>\n\
<div class=\"line\">{</div>\n\
<div class=\"line\">    <a class=\"code\" href=\"#!/url=./cpp_ref/class_m_status.html\">MStatus</a> result;</div>\n\
<div class=\"line\">    <a class=\"code\" href=\"#!/url=./cpp_ref/class_m_fn_plugin.html\">MFnPlugin</a> plugin( obj );</div>\n\
<div class=\"line\">    result = plugin.deregisterNode( splatDeformer::id );</div>\n\
<div class=\"line\">    <span class=\"keywordflow\">return</span> result;</div>\n\
<div class=\"line\">}</div>\n\
</div><!-- fragment --> </div><!-- contents -->\n\
</div><!-- doc-content -->\n\
          <div class=\"footer-block\"><a href=\"../html/ac.cmtdialog.htm\" class=\"comments-anchor\" target=\"_blank\"><span class=\"comments-link\">Please send us your comment about this page</span></a></div><br></div>\n\
   </div></body>\n\
</html>\n\
";