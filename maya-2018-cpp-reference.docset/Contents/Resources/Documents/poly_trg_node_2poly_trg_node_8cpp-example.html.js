var topic = "<!-- saved from url=(0024)http://docs.autodesk.com -->\n\
<html>\n\
   <head><script src=\"../scripts/yepnope.1.5.4-min.js\" type=\"text/javascript\"></script><script src=\"../scripts/lib/jquery-1.11.1.min.js\" type=\"text/javascript\"></script><meta http-equiv=\"Content-Type\" content=\"text/html; charset=UTF-8\"><meta name=\"product\" content=\"MAYAUL\"><meta name=\"release\" content=\"2018\"><meta name=\"book\" content=\"Developer\"><meta name=\"created\" content=\"2017-06-22\"><meta name=\"topicid\" content=\"GUID-02DEF634-1E7B-48C6-8ACD-2C934CA97887\"><meta name=\"topic-type\" content=\"concept\">\n\
      <title>polyTrgNode/polyTrgNode.cpp</title>\n\
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
    cpp_ref_adsk_ref_toc.initNavTree(\'poly_trg_node_2poly_trg_node_8cpp-example.html\', tocPrefix);\n\
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
            <h1>polyTrgNode/polyTrgNode.cpp</h1>\n\
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
<div class=\"title\">polyTrgNode/polyTrgNode.cpp</div>  </div>\n\
</div><!--header-->\n\
<div class=\"contents\">\n\
<div class=\"fragment\"><div class=\"line\"><span class=\"comment\">//-</span></div>\n\
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
<div class=\"line\"><span class=\"comment\">// DESCRIPTION:</span></div>\n\
<div class=\"line\"><span class=\"comment\">//</span></div>\n\
<div class=\"line\"><span class=\"comment\">// This plug-in demonstrates how to add user defined triangulation for meshes</span></div>\n\
<div class=\"line\"><span class=\"comment\">// using the poly API class &quot;MPxPolyTrg&quot;. </span></div>\n\
<div class=\"line\"><span class=\"comment\">//</span></div>\n\
<div class=\"line\"><span class=\"comment\">// This node registers a user defined face triangulation function.</span></div>\n\
<div class=\"line\"><span class=\"comment\">// After the function is registered, it can be used by any mesh in </span></div>\n\
<div class=\"line\"><span class=\"comment\">// the scene to do the triangulation (replace the mesh native </span></div>\n\
<div class=\"line\"><span class=\"comment\">// triangulation). In order for the mesh to use this function,</span></div>\n\
<div class=\"line\"><span class=\"comment\">// an attribute on the mesh: &quot;userTrg&quot; has to be set to the name</span></div>\n\
<div class=\"line\"><span class=\"comment\">// of the function. </span></div>\n\
<div class=\"line\"><span class=\"comment\">//  </span></div>\n\
<div class=\"line\"><span class=\"comment\">// Different meshes may use different functions. Each of them </span></div>\n\
<div class=\"line\"><span class=\"comment\">// needs to be registered. The same node can provide more than </span></div>\n\
<div class=\"line\"><span class=\"comment\">// one function.  </span></div>\n\
<div class=\"line\"><span class=\"comment\">//</span></div>\n\
<div class=\"line\"><span class=\"comment\">// Example:</span></div>\n\
<div class=\"line\"><span class=\"comment\">//  createNode polyTrgNode -n ptrg;</span></div>\n\
<div class=\"line\"><span class=\"comment\">// </span></div>\n\
<div class=\"line\"><span class=\"comment\">//  polyPlane -w 1 -h 1 -sx 10 -sy 10 -ax 0 1 0 -tx 0 -ch 1 -n pp1;</span></div>\n\
<div class=\"line\"><span class=\"comment\">//</span></div>\n\
<div class=\"line\"><span class=\"comment\">//  select  -r pp1Shape;</span></div>\n\
<div class=\"line\"><span class=\"comment\">//  setAttr pp1Shape.userTrg  -type &quot;string&quot; &quot;triangulate&quot;;</span></div>\n\
<div class=\"line\"><span class=\"comment\">//</span></div>\n\
<div class=\"line\"><span class=\"comment\"></span></div>\n\
<div class=\"line\"><span class=\"preprocessor\">#include &lt;maya/MIOStream.h&gt;</span></div>\n\
<div class=\"line\"></div>\n\
<div class=\"line\"><span class=\"comment\">// API stuff.</span></div>\n\
<div class=\"line\"><span class=\"preprocessor\">#include &lt;maya/MFnPlugin.h&gt;</span></div>\n\
<div class=\"line\"></div>\n\
<div class=\"line\"><span class=\"comment\">// Node stuff.</span></div>\n\
<div class=\"line\"><span class=\"preprocessor\">#include &lt;maya/MPxPolyTrg.h&gt;</span></div>\n\
<div class=\"line\"><span class=\"preprocessor\">#include &lt;maya/MFnMessageAttribute.h&gt;</span></div>\n\
<div class=\"line\"></div>\n\
<div class=\"line\"><span class=\"comment\">// Command stuff.</span></div>\n\
<div class=\"line\"><span class=\"preprocessor\">#include &lt;maya/MPxCommand.h&gt;</span></div>\n\
<div class=\"line\"><span class=\"preprocessor\">#include &lt;maya/MSyntax.h&gt;</span></div>\n\
<div class=\"line\"><span class=\"preprocessor\">#include &lt;maya/MArgDatabase.h&gt;</span></div>\n\
<div class=\"line\"><span class=\"preprocessor\">#include &lt;maya/MArgList.h&gt;</span></div>\n\
<div class=\"line\"><span class=\"preprocessor\">#include &lt;maya/MString.h&gt;</span></div>\n\
<div class=\"line\"><span class=\"preprocessor\">#include &lt;maya/MSelectionList.h&gt;</span></div>\n\
<div class=\"line\"><span class=\"preprocessor\">#include &lt;maya/MGlobal.h&gt;</span></div>\n\
<div class=\"line\"><span class=\"preprocessor\">#include &lt;maya/MDagPath.h&gt;</span></div>\n\
<div class=\"line\"></div>\n\
<div class=\"line\"><span class=\"comment\">//</span></div>\n\
<div class=\"line\"><span class=\"comment\">// MACROS DECLARATION </span></div>\n\
<div class=\"line\"><span class=\"comment\">//</span></div>\n\
<div class=\"line\"><span class=\"comment\"></span></div>\n\
<div class=\"line\"><span class=\"preprocessor\">#define MCHECKERR(stat,msg)         \\</span></div>\n\
<div class=\"line\"><span class=\"preprocessor\">    if ( MS::kSuccess != stat ) {   \\</span></div>\n\
<div class=\"line\"><span class=\"preprocessor\">        return MS::kFailure;        \\</span></div>\n\
<div class=\"line\"><span class=\"preprocessor\">    }</span></div>\n\
<div class=\"line\"></div>\n\
<div class=\"line\"><span class=\"preprocessor\">#define EQUAL(a,b) ( (((a-b) &gt; -0.00001) &amp;&amp; ((a-b) &lt; 0.00001)) ? 1 : 0 )</span></div>\n\
<div class=\"line\"><span class=\"preprocessor\">#define EQUAL2(a,b) ((EQUAL(a[0],b[0]) &amp;&amp; EQUAL(a[1],b[1]) ) ? 1 : 0)</span></div>\n\
<div class=\"line\"><span class=\"preprocessor\">#define EQUAL3(a,b) ((EQUAL(a[0],b[0]) &amp;&amp; EQUAL(a[1],b[1]) &amp;&amp; EQUAL(a[2],b[2]) ) ? 1 : 0)</span></div>\n\
<div class=\"line\"></div>\n\
<div class=\"line\"><span class=\"preprocessor\">#define MCHECKERR_RETURN(stat,msg)  \\</span></div>\n\
<div class=\"line\"><span class=\"preprocessor\">    if ( MS::kSuccess != stat ) {   \\</span></div>\n\
<div class=\"line\"><span class=\"preprocessor\">        displayError( msg );        \\</span></div>\n\
<div class=\"line\"><span class=\"preprocessor\">        fErrorCount = 1;            \\</span></div>\n\
<div class=\"line\"><span class=\"preprocessor\">        return MS::kFailure;        \\</span></div>\n\
<div class=\"line\"><span class=\"preprocessor\">    }</span></div>\n\
<div class=\"line\"></div>\n\
<div class=\"line\"><span class=\"preprocessor\">#define MCHECKERR_BREAK(stat,msg)   \\</span></div>\n\
<div class=\"line\"><span class=\"preprocessor\">    if ( MS::kSuccess != stat ) {   \\</span></div>\n\
<div class=\"line\"><span class=\"preprocessor\">        displayError( msg );        \\</span></div>\n\
<div class=\"line\"><span class=\"preprocessor\">        fErrorCount = 1;            \\</span></div>\n\
<div class=\"line\"><span class=\"preprocessor\">        break;                      \\</span></div>\n\
<div class=\"line\"><span class=\"preprocessor\">    }</span></div>\n\
<div class=\"line\"></div>\n\
<div class=\"line\"></div>\n\
<div class=\"line\"><span class=\"comment\">//</span></div>\n\
<div class=\"line\"><span class=\"comment\">// testPolyTrgNode node declaration</span></div>\n\
<div class=\"line\"><span class=\"comment\">// </span></div>\n\
<div class=\"line\"><span class=\"comment\"></span></div>\n\
<div class=\"line\"><span class=\"keyword\">class </span>polyTrgNode : <span class=\"keyword\">public</span> <a name=\"_a0\"></a><a class=\"code\" href=\"#!/url=./cpp_ref/class_m_px_poly_trg.html\">MPxPolyTrg</a></div>\n\
<div class=\"line\">{</div>\n\
<div class=\"line\"><span class=\"keyword\">public</span>:</div>\n\
<div class=\"line\">    polyTrgNode() {};</div>\n\
<div class=\"line\">    ~polyTrgNode() <span class=\"keyword\">override</span>;</div>\n\
<div class=\"line\"></div>\n\
<div class=\"line\">    <a name=\"_a1\"></a><a class=\"code\" href=\"#!/url=./cpp_ref/class_m_status.html\">MStatus</a>     <a name=\"a2\"></a><a class=\"code\" href=\"#!/url=./cpp_ref/class_m_px_poly_trg.html#a5cb7edfa1f67c75588bec1c38b7bf5f8\">compute</a>(<span class=\"keyword\">const</span> <a name=\"_a3\"></a><a class=\"code\" href=\"#!/url=./cpp_ref/class_m_plug.html\">MPlug</a>&amp; plug, <a name=\"_a4\"></a><a class=\"code\" href=\"#!/url=./cpp_ref/class_m_data_block.html\">MDataBlock</a>&amp; data) <span class=\"keyword\">override</span>;</div>\n\
<div class=\"line\">    <span class=\"keywordtype\">void</span>        <a name=\"a5\"></a><a class=\"code\" href=\"#!/url=./cpp_ref/class_m_px_poly_trg.html#a5c13a6c88a839b5356861d1d09e820d9\">postConstructor</a>( ) <span class=\"keyword\">override</span>;</div>\n\
<div class=\"line\">    <span class=\"keywordtype\">bool</span>        <a name=\"a6\"></a><a class=\"code\" href=\"#!/url=./cpp_ref/class_m_px_poly_trg.html#abf966a89078baf354c95638086e19d7a\">isAbstractClass</a>( ) <span class=\"keyword\">const override</span>;</div>\n\
<div class=\"line\"></div>\n\
<div class=\"line\">    <span class=\"keyword\">static</span>  <span class=\"keywordtype\">void</span>*       creator();</div>\n\
<div class=\"line\">    <span class=\"keyword\">static</span>  <a class=\"code\" href=\"#!/url=./cpp_ref/class_m_status.html\">MStatus</a>     initialize();</div>\n\
<div class=\"line\"></div>\n\
<div class=\"line\">    <span class=\"comment\">// User triangulation - this is a triangulation per face.</span></div>\n\
<div class=\"line\">    <span class=\"keyword\">static</span>  <span class=\"keywordtype\">void</span>        triangulateFace( <span class=\"keyword\">const</span> <span class=\"keywordtype\">float</span>    *vert, </div>\n\
<div class=\"line\">                                         <span class=\"keyword\">const</span> <span class=\"keywordtype\">float</span>    *norm, </div>\n\
<div class=\"line\">                                         <span class=\"keyword\">const</span> <span class=\"keywordtype\">int</span>      *loopSizes,</div>\n\
<div class=\"line\">                                         <span class=\"keyword\">const</span> <span class=\"keywordtype\">int</span>      nbLoops,</div>\n\
<div class=\"line\">                                         <span class=\"keyword\">const</span> <span class=\"keywordtype\">int</span>      nbTrg,</div>\n\
<div class=\"line\">                                         <span class=\"keywordtype\">unsigned</span> <span class=\"keywordtype\">short</span> *trg );</div>\n\
<div class=\"line\"></div>\n\
<div class=\"line\"><span class=\"keyword\">public</span>:</div>\n\
<div class=\"line\">    <span class=\"keyword\">static</span>  <a name=\"_a7\"></a><a class=\"code\" href=\"#!/url=./cpp_ref/class_m_type_id.html\">MTypeId</a> id;</div>\n\
<div class=\"line\"></div>\n\
<div class=\"line\"><span class=\"keyword\">private</span>:</div>\n\
<div class=\"line\">};</div>\n\
<div class=\"line\"></div>\n\
<div class=\"line\"><span class=\"comment\">//</span></div>\n\
<div class=\"line\"><span class=\"comment\">// polyTrgNode implementation</span></div>\n\
<div class=\"line\"><span class=\"comment\">//</span></div>\n\
<div class=\"line\"><span class=\"comment\"></span></div>\n\
<div class=\"line\"><a class=\"code\" href=\"#!/url=./cpp_ref/class_m_type_id.html\">MTypeId</a> polyTrgNode::id(0x101015);</div>\n\
<div class=\"line\"></div>\n\
<div class=\"line\">polyTrgNode::~polyTrgNode() </div>\n\
<div class=\"line\"><span class=\"comment\">//</span></div>\n\
<div class=\"line\"><span class=\"comment\">//  Description:</span></div>\n\
<div class=\"line\"><span class=\"comment\">//      Destructor: unregister the triangulation function. </span></div>\n\
<div class=\"line\"><span class=\"comment\">//</span></div>\n\
<div class=\"line\">{</div>\n\
<div class=\"line\">    <span class=\"comment\">// Unregister the triangulation function.</span></div>\n\
<div class=\"line\">    <span class=\"comment\">/* MStatus stat = */</span> unregisterTrgFunction( <span class=\"stringliteral\">&quot;triangulate&quot;</span> );</div>\n\
<div class=\"line\">}</div>\n\
<div class=\"line\"></div>\n\
<div class=\"line\"><span class=\"keywordtype\">void</span> * polyTrgNode::creator()</div>\n\
<div class=\"line\">{</div>\n\
<div class=\"line\">    <span class=\"keywordflow\">return</span> <span class=\"keyword\">new</span> polyTrgNode();</div>\n\
<div class=\"line\">}</div>\n\
<div class=\"line\"></div>\n\
<div class=\"line\"><span class=\"keywordtype\">void</span> polyTrgNode::postConstructor()</div>\n\
<div class=\"line\"><span class=\"comment\">//</span></div>\n\
<div class=\"line\"><span class=\"comment\">//  Description:</span></div>\n\
<div class=\"line\"><span class=\"comment\">//      Constructor: register the triangulation function. </span></div>\n\
<div class=\"line\"><span class=\"comment\">//</span></div>\n\
<div class=\"line\">{</div>\n\
<div class=\"line\">    <span class=\"comment\">// Register the triangulation function.</span></div>\n\
<div class=\"line\">    <span class=\"comment\">// The string given as a first parameter has to be</span></div>\n\
<div class=\"line\">    <span class=\"comment\">// the same as the name given when setting the usrTrg</span></div>\n\
<div class=\"line\">    <span class=\"comment\">// attribute on the mesh. See example above.</span></div>\n\
<div class=\"line\">    <span class=\"comment\">// </span></div>\n\
<div class=\"line\">    <span class=\"comment\">/* MStatus stat = */</span> </div>\n\
<div class=\"line\">    registerTrgFunction( <span class=\"stringliteral\">&quot;triangulate&quot;</span>, polyTrgNode::triangulateFace );</div>\n\
<div class=\"line\">}</div>\n\
<div class=\"line\"></div>\n\
<div class=\"line\"><span class=\"keywordtype\">bool</span> polyTrgNode::isAbstractClass( )<span class=\"keyword\"> const</span></div>\n\
<div class=\"line\"><span class=\"keyword\"></span>{</div>\n\
<div class=\"line\">    <span class=\"keywordflow\">return</span> <span class=\"keyword\">false</span>;</div>\n\
<div class=\"line\">}</div>\n\
<div class=\"line\"></div>\n\
<div class=\"line\"><a class=\"code\" href=\"#!/url=./cpp_ref/class_m_status.html\">MStatus</a> polyTrgNode::initialize()</div>\n\
<div class=\"line\">{</div>\n\
<div class=\"line\">    <span class=\"keywordflow\">return</span> MS::kSuccess;</div>\n\
<div class=\"line\">}</div>\n\
<div class=\"line\"></div>\n\
<div class=\"line\"><a class=\"code\" href=\"#!/url=./cpp_ref/class_m_status.html\">MStatus</a> polyTrgNode::compute(<span class=\"keyword\">const</span> <a class=\"code\" href=\"#!/url=./cpp_ref/class_m_plug.html\">MPlug</a>&amp; plug, <a class=\"code\" href=\"#!/url=./cpp_ref/class_m_data_block.html\">MDataBlock</a>&amp; data)</div>\n\
<div class=\"line\">{</div>\n\
<div class=\"line\">    <span class=\"keywordflow\">return</span> MS::kSuccess;</div>\n\
<div class=\"line\">}</div>\n\
<div class=\"line\"></div>\n\
<div class=\"line\"><span class=\"keywordtype\">void</span> </div>\n\
<div class=\"line\">polyTrgNode::triangulateFace( </div>\n\
<div class=\"line\">    <span class=\"keyword\">const</span> <span class=\"keywordtype\">float</span>     *vert,          <span class=\"comment\">// I: face vertex position</span></div>\n\
<div class=\"line\">    <span class=\"keyword\">const</span> <span class=\"keywordtype\">float</span>     *norm,          <span class=\"comment\">// I: face normals per vertex</span></div>\n\
<div class=\"line\">    <span class=\"keyword\">const</span> <span class=\"keywordtype\">int</span>       *loopSizes,     <span class=\"comment\">// I: number of vertices per loop </span></div>\n\
<div class=\"line\">    <span class=\"keyword\">const</span> <span class=\"keywordtype\">int</span>       nbLoops,        <span class=\"comment\">// I: number of loops in the face   </span></div>\n\
<div class=\"line\">    <span class=\"keyword\">const</span> <span class=\"keywordtype\">int</span>       nbTrg,          <span class=\"comment\">// I: number of triangles to generate</span></div>\n\
<div class=\"line\">    <span class=\"keywordtype\">unsigned</span> <span class=\"keywordtype\">short</span> *trg             <span class=\"comment\">// O: triangles - size = 3*nbTrg. </span></div>\n\
<div class=\"line\">                                    <span class=\"comment\">//    Note: this array is already allocated.</span></div>\n\
<div class=\"line\">)</div>\n\
<div class=\"line\"><span class=\"comment\">//</span></div>\n\
<div class=\"line\"><span class=\"comment\">//  Description:</span></div>\n\
<div class=\"line\"><span class=\"comment\">//      Triangulate a given face. Returns triangles given by </span></div>\n\
<div class=\"line\"><span class=\"comment\">//      the relative vertex ids. Example:</span></div>\n\
<div class=\"line\"><span class=\"comment\">//          nbTrg = 2</span></div>\n\
<div class=\"line\"><span class=\"comment\">//          trg: 0, 1, 2,  2, 3, 0</span></div>\n\
<div class=\"line\"><span class=\"comment\">//</span></div>\n\
<div class=\"line\">{</div>\n\
<div class=\"line\">    <span class=\"comment\">// ======================================</span></div>\n\
<div class=\"line\">    <span class=\"comment\">// Print the input.</span></div>\n\
<div class=\"line\">    <span class=\"comment\">// ======================================</span></div>\n\
<div class=\"line\">    cerr &lt;&lt; <span class=\"stringliteral\">&quot;polyTrgNode::triangulate() - This is an API registered triangulation.\\n&quot;</span>;</div>\n\
<div class=\"line\"></div>\n\
<div class=\"line\">    <span class=\"comment\">// Dump the data - this is a good example.</span></div>\n\
<div class=\"line\">    cerr &lt;&lt; <span class=\"stringliteral\">&quot;Numb Loops = &quot;</span> &lt;&lt; nbLoops &lt;&lt; <span class=\"stringliteral\">&quot;\\n&quot;</span>;</div>\n\
<div class=\"line\">    <span class=\"keywordtype\">int</span> nbVert = 0;</div>\n\
<div class=\"line\">    cerr &lt;&lt; <span class=\"stringliteral\">&quot;Loop sizes: &quot;</span>;</div>\n\
<div class=\"line\">    <span class=\"keywordflow\">for</span> (<span class=\"keywordtype\">int</span> i=0; i&lt;nbLoops; i++ ) {</div>\n\
<div class=\"line\">        nbVert += loopSizes[i];</div>\n\
<div class=\"line\">        cerr &lt;&lt; loopSizes[i] &lt;&lt; <span class=\"stringliteral\">&quot; &quot;</span>;</div>\n\
<div class=\"line\">    }</div>\n\
<div class=\"line\">    cerr &lt;&lt; <span class=\"stringliteral\">&quot;\\n&quot;</span>;</div>\n\
<div class=\"line\">    cerr &lt;&lt; <span class=\"stringliteral\">&quot;Numb Vert  = &quot;</span> &lt;&lt; nbVert &lt;&lt; <span class=\"stringliteral\">&quot;\\n&quot;</span>;</div>\n\
<div class=\"line\"></div>\n\
<div class=\"line\">    cerr &lt;&lt; <span class=\"stringliteral\">&quot;Vertices:\\n&quot;</span>;</div>\n\
<div class=\"line\">    <span class=\"keywordflow\">for</span> (<span class=\"keywordtype\">int</span> v=0; v&lt;nbVert; v++ ) {</div>\n\
<div class=\"line\">        cerr &lt;&lt; vert[3*v] &lt;&lt; <span class=\"stringliteral\">&quot; &quot;</span> &lt;&lt; vert[3*v+1] &lt;&lt; <span class=\"stringliteral\">&quot; &quot;</span> &lt;&lt; vert[3*v+2] &lt;&lt; <span class=\"stringliteral\">&quot; &quot;</span> &lt;&lt;<span class=\"stringliteral\">&quot;\\n&quot;</span>;</div>\n\
<div class=\"line\">    }</div>\n\
<div class=\"line\"></div>\n\
<div class=\"line\">    <span class=\"comment\">// Now triangulate.</span></div>\n\
<div class=\"line\">    <span class=\"comment\">// ======================================</span></div>\n\
<div class=\"line\">    </div>\n\
<div class=\"line\">    cerr &lt;&lt; <span class=\"stringliteral\">&quot; nbTrg = &quot;</span> &lt;&lt; nbTrg &lt;&lt; <span class=\"stringliteral\">&quot;\\n&quot;</span>;</div>\n\
<div class=\"line\"></div>\n\
<div class=\"line\">    <span class=\"comment\">// ======================================</span></div>\n\
<div class=\"line\">    <span class=\"comment\">// Generate a triangulation for this face.</span></div>\n\
<div class=\"line\">    <span class=\"comment\">// ======================================</span></div>\n\
<div class=\"line\">    <span class=\"keywordtype\">unsigned</span> <span class=\"keywordtype\">short</span> v0 = 0;</div>\n\
<div class=\"line\">    <span class=\"keywordtype\">unsigned</span> <span class=\"keywordtype\">short</span> v1 = 1;</div>\n\
<div class=\"line\">    <span class=\"keywordtype\">unsigned</span> <span class=\"keywordtype\">short</span> v2 = 2;</div>\n\
<div class=\"line\">    <span class=\"keywordflow\">for</span> (<span class=\"keywordtype\">int</span> k=0; k&lt;nbTrg; k++){</div>\n\
<div class=\"line\">        trg[3*k]    = v0;</div>\n\
<div class=\"line\">        trg[3*k+1]  = v1;</div>\n\
<div class=\"line\">        trg[3*k+2]  = v2;</div>\n\
<div class=\"line\"></div>\n\
<div class=\"line\">        v1 = v2;</div>\n\
<div class=\"line\">        v2 ++;</div>\n\
<div class=\"line\">        <span class=\"keywordflow\">if</span> (v2 &gt;= nbVert) {</div>\n\
<div class=\"line\">            v2 = 0;</div>\n\
<div class=\"line\">        }</div>\n\
<div class=\"line\">    }</div>\n\
<div class=\"line\">    <span class=\"comment\">// ======================================</span></div>\n\
<div class=\"line\"></div>\n\
<div class=\"line\"></div>\n\
<div class=\"line\">    <span class=\"comment\">// ======================================</span></div>\n\
<div class=\"line\">    <span class=\"comment\">// Print the result.</span></div>\n\
<div class=\"line\">    <span class=\"comment\">// ======================================</span></div>\n\
<div class=\"line\">    cerr &lt;&lt; <span class=\"stringliteral\">&quot;Triangulation\\n&quot;</span>;</div>\n\
<div class=\"line\">    <span class=\"keywordflow\">for</span> (<span class=\"keywordtype\">int</span> k1=0; k1&lt;nbTrg; k1++){</div>\n\
<div class=\"line\">        cerr &lt;&lt; trg[3*k1] &lt;&lt; <span class=\"stringliteral\">&quot; &quot;</span> &lt;&lt; trg[3*k1+1] &lt;&lt; <span class=\"stringliteral\">&quot; &quot;</span> &lt;&lt; trg[3*k1+2] &lt;&lt; <span class=\"stringliteral\">&quot;\\n&quot;</span>;</div>\n\
<div class=\"line\">    }</div>\n\
<div class=\"line\">    <span class=\"comment\">// ======================================</span></div>\n\
<div class=\"line\">}</div>\n\
<div class=\"line\"></div>\n\
<div class=\"line\"></div>\n\
<div class=\"line\"></div>\n\
<div class=\"line\"></div>\n\
<div class=\"line\"><span class=\"comment\">//</span></div>\n\
<div class=\"line\"><span class=\"comment\">// Node and command registration</span></div>\n\
<div class=\"line\"><span class=\"comment\">//</span></div>\n\
<div class=\"line\"><span class=\"comment\"></span></div>\n\
<div class=\"line\"><a class=\"code\" href=\"#!/url=./cpp_ref/class_m_status.html\">MStatus</a> initializePlugin(<a name=\"_a8\"></a><a class=\"code\" href=\"#!/url=./cpp_ref/class_m_object.html\">MObject</a> obj)</div>\n\
<div class=\"line\">{</div>\n\
<div class=\"line\">    <a name=\"_a9\"></a><a class=\"code\" href=\"#!/url=./cpp_ref/class_m_fn_plugin.html\">MFnPlugin</a> plugin(obj, <span class=\"stringliteral\">&quot;MPxPlyTrg::Poly api example plug-in&quot;</span>, <span class=\"stringliteral\">&quot;4.5&quot;</span>, <span class=\"stringliteral\">&quot;Any&quot;</span>);</div>\n\
<div class=\"line\"></div>\n\
<div class=\"line\">    <a class=\"code\" href=\"#!/url=./cpp_ref/class_m_status.html\">MStatus</a> stat = plugin.registerNode(<span class=\"stringliteral\">&quot;polyTrgNode&quot;</span>,</div>\n\
<div class=\"line\">                                        polyTrgNode::id,</div>\n\
<div class=\"line\">                                        polyTrgNode::creator,</div>\n\
<div class=\"line\">                                        polyTrgNode::initialize);</div>\n\
<div class=\"line\">    <span class=\"keywordflow\">return</span> stat;</div>\n\
<div class=\"line\">}</div>\n\
<div class=\"line\"></div>\n\
<div class=\"line\"><a class=\"code\" href=\"#!/url=./cpp_ref/class_m_status.html\">MStatus</a> uninitializePlugin(<a class=\"code\" href=\"#!/url=./cpp_ref/class_m_object.html\">MObject</a> obj)</div>\n\
<div class=\"line\">{</div>\n\
<div class=\"line\">    <a class=\"code\" href=\"#!/url=./cpp_ref/class_m_fn_plugin.html\">MFnPlugin</a> plugin(obj);</div>\n\
<div class=\"line\">    <a class=\"code\" href=\"#!/url=./cpp_ref/class_m_status.html\">MStatus</a> stat = plugin.deregisterNode(polyTrgNode::id);</div>\n\
<div class=\"line\">    <span class=\"keywordflow\">return</span> stat;</div>\n\
<div class=\"line\">}</div>\n\
</div><!-- fragment --> </div><!-- contents -->\n\
</div><!-- doc-content -->\n\
          <div class=\"footer-block\"><a href=\"../html/ac.cmtdialog.htm\" class=\"comments-anchor\" target=\"_blank\"><span class=\"comments-link\">Please send us your comment about this page</span></a></div></div>\n\
   </div></body>\n\
</html>\n\
";