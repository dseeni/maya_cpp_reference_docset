var topic = "<!-- saved from url=(0024)http://docs.autodesk.com -->\n\
<html>\n\
   <head><script src=\"../scripts/yepnope.1.5.4-min.js\" type=\"text/javascript\"></script><script src=\"../scripts/lib/jquery-1.11.1.min.js\" type=\"text/javascript\"></script><meta http-equiv=\"Content-Type\" content=\"text/html; charset=UTF-8\"><meta name=\"product\" content=\"MAYAUL\"><meta name=\"release\" content=\"2017\"><meta name=\"book\" content=\"Developer\"><meta name=\"created\" content=\"2016-06-16\"><meta name=\"topicid\" content=\"GUID-02DEF634-1E7B-48C6-8ACD-2C934CA97887\"><meta name=\"topic-type\" content=\"concept\">\n\
      <title>motionTraceCmd/motionTraceCmd.cpp</title>\n\
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
    cpp_ref_adsk_ref_toc.initNavTree(\'motion_trace_cmd_2motion_trace_cmd_8cpp-example.html\', tocPrefix);\n\
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
            <h1>motionTraceCmd/motionTraceCmd.cpp</h1>\n\
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
<div class=\"title\">motionTraceCmd/motionTraceCmd.cpp</div>  </div>\n\
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
<div class=\"line\"><span class=\"comment\">// Produces the MEL command &quot;motionTrace&quot;. </span></div>\n\
<div class=\"line\"><span class=\"comment\">//</span></div>\n\
<div class=\"line\"><span class=\"comment\">// Traces the position of an animated object and creates a curve showing the path of the object.</span></div>\n\
<div class=\"line\"><span class=\"comment\">//</span></div>\n\
<div class=\"line\"><span class=\"comment\">// To use this plug-in you must first create an object and animate it by setting keyframes.</span></div>\n\
<div class=\"line\"><span class=\"comment\">// An easy way to do this is to just create a primitive and then set a bunch of keyframes for it</span></div>\n\
<div class=\"line\"><span class=\"comment\">// with the &quot;spiralAnimCurveCmd&quot; plug-in. </span></div>\n\
<div class=\"line\"><span class=\"comment\">//</span></div>\n\
<div class=\"line\"><span class=\"comment\">// To use this plug-in:</span></div>\n\
<div class=\"line\"><span class=\"comment\">//</span></div>\n\
<div class=\"line\"><span class=\"comment\">//  (1) Animate an object.</span></div>\n\
<div class=\"line\"><span class=\"comment\">//  (2) Select the object.</span></div>\n\
<div class=\"line\"><span class=\"comment\">//  (3) Run &#39;motionTrace;&#39; in the command window.</span></div>\n\
<div class=\"line\"><span class=\"comment\">//  (4) See the object&#39;s path drawn as a curve.</span></div>\n\
<div class=\"line\"><span class=\"comment\">//</span></div>\n\
<div class=\"line\"><span class=\"comment\">// Options:</span></div>\n\
<div class=\"line\"><span class=\"comment\">//</span></div>\n\
<div class=\"line\"><span class=\"comment\">//  -s &lt;frame&gt;      The start frame.  Default to 1.</span></div>\n\
<div class=\"line\"><span class=\"comment\">//  -e &lt;frame&gt;      The end frame.  Default to 60.</span></div>\n\
<div class=\"line\"><span class=\"comment\">//  -b &lt;frame&gt;      The by frame.  Default to 1.</span></div>\n\
<div class=\"line\"><span class=\"comment\">//</span></div>\n\
<div class=\"line\"><span class=\"comment\">// See also:</span></div>\n\
<div class=\"line\"><span class=\"comment\">//</span></div>\n\
<div class=\"line\"><span class=\"comment\">//  node_info.cc    for how to get object attributes</span></div>\n\
<div class=\"line\"><span class=\"comment\">//  helix.cc        for how to create a curve</span></div>\n\
<div class=\"line\"><span class=\"comment\">//</span></div>\n\
<div class=\"line\"><span class=\"comment\"></span></div>\n\
<div class=\"line\"><span class=\"preprocessor\">#include &lt;maya/MIOStream.h&gt;</span></div>\n\
<div class=\"line\"></div>\n\
<div class=\"line\"><span class=\"preprocessor\">#include &lt;maya/MFnPlugin.h&gt;</span></div>\n\
<div class=\"line\"><span class=\"preprocessor\">#include &lt;maya/MString.h&gt;</span></div>\n\
<div class=\"line\"><span class=\"preprocessor\">#include &lt;maya/MArgList.h&gt;</span></div>\n\
<div class=\"line\"></div>\n\
<div class=\"line\"><span class=\"preprocessor\">#include &lt;maya/MPxCommand.h&gt;</span></div>\n\
<div class=\"line\"></div>\n\
<div class=\"line\"><span class=\"preprocessor\">#include &lt;maya/MGlobal.h&gt;</span></div>\n\
<div class=\"line\"><span class=\"preprocessor\">#include &lt;maya/MTime.h&gt;</span></div>\n\
<div class=\"line\"><span class=\"preprocessor\">#include &lt;maya/MDagPath.h&gt;</span></div>\n\
<div class=\"line\"><span class=\"preprocessor\">#include &lt;maya/MItSelectionList.h&gt;</span></div>\n\
<div class=\"line\"><span class=\"preprocessor\">#include &lt;maya/MSelectionList.h&gt;</span></div>\n\
<div class=\"line\"></div>\n\
<div class=\"line\"><span class=\"preprocessor\">#include &lt;maya/MFnDependencyNode.h&gt;</span></div>\n\
<div class=\"line\"><span class=\"preprocessor\">#include &lt;maya/MPlugArray.h&gt;</span></div>\n\
<div class=\"line\"><span class=\"preprocessor\">#include &lt;maya/MPlug.h&gt;</span></div>\n\
<div class=\"line\"></div>\n\
<div class=\"line\"><span class=\"preprocessor\">#include &lt;maya/MPoint.h&gt;</span></div>\n\
<div class=\"line\"><span class=\"preprocessor\">#include &lt;maya/MPointArray.h&gt;</span></div>\n\
<div class=\"line\"><span class=\"preprocessor\">#include &lt;maya/MDoubleArray.h&gt;</span></div>\n\
<div class=\"line\"><span class=\"preprocessor\">#include &lt;maya/MObjectArray.h&gt;</span></div>\n\
<div class=\"line\"><span class=\"preprocessor\">#include &lt;maya/MFnNurbsCurve.h&gt;</span></div>\n\
<div class=\"line\"></div>\n\
<div class=\"line\"><span class=\"comment\">//</span></div>\n\
<div class=\"line\"><span class=\"comment\">// Command class declaration</span></div>\n\
<div class=\"line\"><span class=\"comment\">//</span></div>\n\
<div class=\"line\"><span class=\"comment\"></span><span class=\"keyword\">class </span>motionTrace : <span class=\"keyword\">public</span> <a name=\"_a0\"></a><a class=\"code\" href=\"#!/url=./cpp_ref/class_m_px_command.html\">MPxCommand</a></div>\n\
<div class=\"line\">{</div>\n\
<div class=\"line\"><span class=\"keyword\">public</span>:</div>\n\
<div class=\"line\">                    motionTrace();</div>\n\
<div class=\"line\">    <span class=\"keyword\">virtual</span>         ~motionTrace();</div>\n\
<div class=\"line\"></div>\n\
<div class=\"line\">    <a name=\"_a1\"></a><a class=\"code\" href=\"#!/url=./cpp_ref/class_m_status.html\">MStatus</a>         <a name=\"a2\"></a><a class=\"code\" href=\"#!/url=./cpp_ref/class_m_px_command.html#ade7d0a873cbe811d6eab464e695390a9\">doIt</a>( <span class=\"keyword\">const</span> <a name=\"_a3\"></a><a class=\"code\" href=\"#!/url=./cpp_ref/class_m_arg_list.html\">MArgList</a>&amp; args );</div>\n\
<div class=\"line\">    <a class=\"code\" href=\"#!/url=./cpp_ref/class_m_status.html\">MStatus</a>         <a name=\"a4\"></a><a class=\"code\" href=\"#!/url=./cpp_ref/class_m_px_command.html#a3b583cbc082553f11853db459b2f7795\">redoIt</a>();</div>\n\
<div class=\"line\"></div>\n\
<div class=\"line\">    <span class=\"keyword\">static</span> <span class=\"keywordtype\">void</span>*    creator();</div>\n\
<div class=\"line\"></div>\n\
<div class=\"line\"><span class=\"keyword\">private</span>:</div>\n\
<div class=\"line\">    <span class=\"keywordtype\">void</span>        printType( <a name=\"_a5\"></a><a class=\"code\" href=\"#!/url=./cpp_ref/class_m_object.html\">MObject</a> node, <a name=\"_a6\"></a><a class=\"code\" href=\"#!/url=./cpp_ref/class_m_string.html\">MString</a> &amp; prefix );</div>\n\
<div class=\"line\"></div>\n\
<div class=\"line\">    <span class=\"keywordtype\">double</span>          start, end, by; <span class=\"comment\">// frame range</span></div>\n\
<div class=\"line\">};</div>\n\
<div class=\"line\"></div>\n\
<div class=\"line\"></div>\n\
<div class=\"line\"></div>\n\
<div class=\"line\"><span class=\"comment\">//</span></div>\n\
<div class=\"line\"><span class=\"comment\">// Command class implementation</span></div>\n\
<div class=\"line\"><span class=\"comment\">//</span></div>\n\
<div class=\"line\"><span class=\"comment\"></span></div>\n\
<div class=\"line\">motionTrace::motionTrace() {}</div>\n\
<div class=\"line\"></div>\n\
<div class=\"line\"><span class=\"keywordtype\">void</span>* motionTrace::creator()</div>\n\
<div class=\"line\">{</div>\n\
<div class=\"line\">    <span class=\"keywordflow\">return</span> <span class=\"keyword\">new</span> motionTrace();</div>\n\
<div class=\"line\">}</div>\n\
<div class=\"line\"></div>\n\
<div class=\"line\">motionTrace::~motionTrace()</div>\n\
<div class=\"line\">{</div>\n\
<div class=\"line\">}</div>\n\
<div class=\"line\"></div>\n\
<div class=\"line\"><a class=\"code\" href=\"#!/url=./cpp_ref/class_m_status.html\">MStatus</a> motionTrace::doIt( <span class=\"keyword\">const</span> <a class=\"code\" href=\"#!/url=./cpp_ref/class_m_arg_list.html\">MArgList</a>&amp; args )</div>\n\
<div class=\"line\"><span class=\"comment\">//</span></div>\n\
<div class=\"line\"><span class=\"comment\">// Description</span></div>\n\
<div class=\"line\"><span class=\"comment\">//     This method is called from MEL when this command is called.</span></div>\n\
<div class=\"line\"><span class=\"comment\">//     It should set up any class data necessary for redo/undo,</span></div>\n\
<div class=\"line\"><span class=\"comment\">//     parse any given arguments, and then call redoIt.</span></div>\n\
<div class=\"line\"><span class=\"comment\">//</span></div>\n\
<div class=\"line\">{</div>\n\
<div class=\"line\">    start = 1.0;</div>\n\
<div class=\"line\">    end = 60.0;</div>\n\
<div class=\"line\">    by = 1.0;</div>\n\
<div class=\"line\"></div>\n\
<div class=\"line\">    <a class=\"code\" href=\"#!/url=./cpp_ref/class_m_status.html\">MStatus</a> stat;</div>\n\
<div class=\"line\">    <span class=\"keywordtype\">double</span> tmp;</div>\n\
<div class=\"line\">    <span class=\"keywordtype\">unsigned</span> i;</div>\n\
<div class=\"line\">    <span class=\"comment\">// Parse the arguments.</span></div>\n\
<div class=\"line\">    <span class=\"keywordflow\">for</span> ( i = 0; i &lt; args.<a name=\"a7\"></a><a class=\"code\" href=\"#!/url=./cpp_ref/class_m_arg_list.html#a99dd6a54b909ede1d11702fe58977e2a\">length</a>(); i++ )</div>\n\
<div class=\"line\">    {</div>\n\
<div class=\"line\">        <span class=\"keywordflow\">if</span> ( <a class=\"code\" href=\"#!/url=./cpp_ref/class_m_string.html\">MString</a>( <span class=\"stringliteral\">&quot;-s&quot;</span> ) == args.<a name=\"a8\"></a><a class=\"code\" href=\"#!/url=./cpp_ref/class_m_arg_list.html#ad24ff3826e4df513b55e1a0ecb0a665b\">asString</a>( i, &amp;stat ) &amp;&amp;</div>\n\
<div class=\"line\">             <a name=\"a9\"></a><a class=\"code\" href=\"#!/url=./cpp_ref/class_m_status.html#a02ab596f4febca68da503aaf8dde3a80af0536797208144380691e2b376ffc1d1\">MS::kSuccess</a> == stat)</div>\n\
<div class=\"line\">        {</div>\n\
<div class=\"line\">            tmp = args.<a name=\"a10\"></a><a class=\"code\" href=\"#!/url=./cpp_ref/class_m_arg_list.html#a15a33f5705d13873ab7f003bb64f0741\">asDouble</a>( ++i, &amp;stat );</div>\n\
<div class=\"line\">            <span class=\"keywordflow\">if</span> ( <a class=\"code\" href=\"#!/url=./cpp_ref/class_m_status.html#a02ab596f4febca68da503aaf8dde3a80af0536797208144380691e2b376ffc1d1\">MS::kSuccess</a> == stat )</div>\n\
<div class=\"line\">            start = tmp;</div>\n\
<div class=\"line\">        }</div>\n\
<div class=\"line\">        <span class=\"keywordflow\">else</span> <span class=\"keywordflow\">if</span> ( <a class=\"code\" href=\"#!/url=./cpp_ref/class_m_string.html\">MString</a>( <span class=\"stringliteral\">&quot;-e&quot;</span> ) == args.<a class=\"code\" href=\"#!/url=./cpp_ref/class_m_arg_list.html#ad24ff3826e4df513b55e1a0ecb0a665b\">asString</a>( i, &amp;stat ) &amp;&amp;</div>\n\
<div class=\"line\">                  <a class=\"code\" href=\"#!/url=./cpp_ref/class_m_status.html#a02ab596f4febca68da503aaf8dde3a80af0536797208144380691e2b376ffc1d1\">MS::kSuccess</a> == stat)</div>\n\
<div class=\"line\">        {</div>\n\
<div class=\"line\">            tmp = args.<a class=\"code\" href=\"#!/url=./cpp_ref/class_m_arg_list.html#a15a33f5705d13873ab7f003bb64f0741\">asDouble</a>( ++i, &amp;stat );</div>\n\
<div class=\"line\">            <span class=\"keywordflow\">if</span> ( <a class=\"code\" href=\"#!/url=./cpp_ref/class_m_status.html#a02ab596f4febca68da503aaf8dde3a80af0536797208144380691e2b376ffc1d1\">MS::kSuccess</a> == stat )</div>\n\
<div class=\"line\">            end = tmp;</div>\n\
<div class=\"line\">        }</div>\n\
<div class=\"line\">        <span class=\"keywordflow\">else</span> <span class=\"keywordflow\">if</span> ( <a class=\"code\" href=\"#!/url=./cpp_ref/class_m_string.html\">MString</a>( <span class=\"stringliteral\">&quot;-b&quot;</span> ) == args.<a class=\"code\" href=\"#!/url=./cpp_ref/class_m_arg_list.html#ad24ff3826e4df513b55e1a0ecb0a665b\">asString</a>( i, &amp;stat ) &amp;&amp;</div>\n\
<div class=\"line\">                  <a class=\"code\" href=\"#!/url=./cpp_ref/class_m_status.html#a02ab596f4febca68da503aaf8dde3a80af0536797208144380691e2b376ffc1d1\">MS::kSuccess</a> == stat)</div>\n\
<div class=\"line\">        {</div>\n\
<div class=\"line\">            tmp = args.<a class=\"code\" href=\"#!/url=./cpp_ref/class_m_arg_list.html#a15a33f5705d13873ab7f003bb64f0741\">asDouble</a>( ++i, &amp;stat );</div>\n\
<div class=\"line\">            <span class=\"keywordflow\">if</span> ( <a class=\"code\" href=\"#!/url=./cpp_ref/class_m_status.html#a02ab596f4febca68da503aaf8dde3a80af0536797208144380691e2b376ffc1d1\">MS::kSuccess</a> == stat )</div>\n\
<div class=\"line\">            by = tmp;</div>\n\
<div class=\"line\">        }</div>\n\
<div class=\"line\">    }</div>\n\
<div class=\"line\"></div>\n\
<div class=\"line\">    stat = redoIt();</div>\n\
<div class=\"line\"></div>\n\
<div class=\"line\">    <span class=\"keywordflow\">return</span> stat;</div>\n\
<div class=\"line\">}</div>\n\
<div class=\"line\"></div>\n\
<div class=\"line\"><span class=\"comment\">/*</span></div>\n\
<div class=\"line\"><span class=\"comment\">-----------------------------------------</span></div>\n\
<div class=\"line\"><span class=\"comment\"></span></div>\n\
<div class=\"line\"><span class=\"comment\">    Make a degree 1 curve from the given CVs.</span></div>\n\
<div class=\"line\"><span class=\"comment\"></span></div>\n\
<div class=\"line\"><span class=\"comment\">-----------------------------------------</span></div>\n\
<div class=\"line\"><span class=\"comment\">*/</span></div>\n\
<div class=\"line\"><span class=\"keyword\">static</span> <span class=\"keywordtype\">void</span> jMakeCurve( <a name=\"_a11\"></a><a class=\"code\" href=\"#!/url=./cpp_ref/class_m_point_array.html\">MPointArray</a> cvs )</div>\n\
<div class=\"line\">{</div>\n\
<div class=\"line\">    <a class=\"code\" href=\"#!/url=./cpp_ref/class_m_status.html\">MStatus</a> stat;</div>\n\
<div class=\"line\">    <span class=\"keywordtype\">unsigned</span> <span class=\"keywordtype\">int</span> deg = 1;</div>\n\
<div class=\"line\">    <a name=\"_a12\"></a><a class=\"code\" href=\"#!/url=./cpp_ref/class_m_double_array.html\">MDoubleArray</a> knots;</div>\n\
<div class=\"line\"></div>\n\
<div class=\"line\">    <span class=\"keywordtype\">unsigned</span> <span class=\"keywordtype\">int</span> i;</div>\n\
<div class=\"line\">    <span class=\"keywordflow\">for</span> ( i = 0; i &lt; cvs.<a name=\"a13\"></a><a class=\"code\" href=\"#!/url=./cpp_ref/class_m_point_array.html#a580388f31f60c46fac867ca48a48da1e\">length</a>(); i++ )</div>\n\
<div class=\"line\">        knots.<a name=\"a14\"></a><a class=\"code\" href=\"#!/url=./cpp_ref/class_m_double_array.html#aafcfe8ff7afecc2dee4defccbdfb8e55\">append</a>( (<span class=\"keywordtype\">double</span>) i );</div>\n\
<div class=\"line\"></div>\n\
<div class=\"line\">    <span class=\"comment\">// Now create the curve</span></div>\n\
<div class=\"line\">    <span class=\"comment\">//</span></div>\n\
<div class=\"line\">    <a name=\"_a15\"></a><a class=\"code\" href=\"#!/url=./cpp_ref/class_m_fn_nurbs_curve.html\">MFnNurbsCurve</a> curveFn;</div>\n\
<div class=\"line\"></div>\n\
<div class=\"line\">    curveFn.<a name=\"a16\"></a><a class=\"code\" href=\"#!/url=./cpp_ref/class_m_fn_nurbs_curve.html#a4b11e346021c91845e781e9d7d06859f\">create</a>( cvs,</div>\n\
<div class=\"line\">                    knots, deg,</div>\n\
<div class=\"line\">                    <a name=\"a17\"></a><a class=\"code\" href=\"#!/url=./cpp_ref/class_m_fn_nurbs_curve.html#a99f5203c7742378941e34926280c8e66a7fb3bf49ba349ca1a266be41df447b5b\">MFnNurbsCurve::kOpen</a>,</div>\n\
<div class=\"line\">                    <span class=\"keyword\">false</span>, <span class=\"keyword\">false</span>,</div>\n\
<div class=\"line\">                    <a name=\"a18\"></a><a class=\"code\" href=\"#!/url=./cpp_ref/class_m_object.html#ae6af14e0aa2c92bdda88c81280e1d122\">MObject::kNullObj</a>,</div>\n\
<div class=\"line\">                    &amp;stat );</div>\n\
<div class=\"line\"></div>\n\
<div class=\"line\">    <span class=\"keywordflow\">if</span> ( <a class=\"code\" href=\"#!/url=./cpp_ref/class_m_status.html#a02ab596f4febca68da503aaf8dde3a80af0536797208144380691e2b376ffc1d1\">MS::kSuccess</a> != stat )</div>\n\
<div class=\"line\">        cout&lt;&lt;<span class=\"stringliteral\">&quot;Error creating curve.&quot;</span>&lt;&lt;endl;</div>\n\
<div class=\"line\"></div>\n\
<div class=\"line\">}</div>\n\
<div class=\"line\"></div>\n\
<div class=\"line\"><a class=\"code\" href=\"#!/url=./cpp_ref/class_m_status.html\">MStatus</a> motionTrace::redoIt()</div>\n\
<div class=\"line\"><span class=\"comment\">//</span></div>\n\
<div class=\"line\"><span class=\"comment\">// Description</span></div>\n\
<div class=\"line\"><span class=\"comment\">//     This method performs the action of the command.</span></div>\n\
<div class=\"line\"><span class=\"comment\">//</span></div>\n\
<div class=\"line\"><span class=\"comment\">//     This method iterates over all selected items and</span></div>\n\
<div class=\"line\"><span class=\"comment\">//     prints out connected plug and dependency node type</span></div>\n\
<div class=\"line\"><span class=\"comment\">//     information.</span></div>\n\
<div class=\"line\"><span class=\"comment\">//</span></div>\n\
<div class=\"line\">{</div>\n\
<div class=\"line\">    <a class=\"code\" href=\"#!/url=./cpp_ref/class_m_status.html\">MStatus</a> stat;               <span class=\"comment\">// Status code</span></div>\n\
<div class=\"line\"></div>\n\
<div class=\"line\">    <a name=\"_a19\"></a><a class=\"code\" href=\"#!/url=./cpp_ref/class_m_object_array.html\">MObjectArray</a> picked;</div>\n\
<div class=\"line\">    <a class=\"code\" href=\"#!/url=./cpp_ref/class_m_object.html\">MObject</a>     dependNode;     <span class=\"comment\">// Selected dependency node</span></div>\n\
<div class=\"line\"></div>\n\
<div class=\"line\">    <span class=\"comment\">// Create a selection list iterator</span></div>\n\
<div class=\"line\">    <span class=\"comment\">//</span></div>\n\
<div class=\"line\">    <a name=\"_a20\"></a><a class=\"code\" href=\"#!/url=./cpp_ref/class_m_selection_list.html\">MSelectionList</a> slist;</div>\n\
<div class=\"line\">    <a name=\"a21\"></a><a class=\"code\" href=\"#!/url=./cpp_ref/class_m_global.html#a6d81d38246555884897fb153c93aaf42\">MGlobal::getActiveSelectionList</a>( slist );</div>\n\
<div class=\"line\">    <a name=\"_a22\"></a><a class=\"code\" href=\"#!/url=./cpp_ref/class_m_it_selection_list.html\">MItSelectionList</a> iter( slist, <a name=\"a23\"></a><a class=\"code\" href=\"#!/url=./cpp_ref/class_m_fn.html#a1d1cfd8ffb84e947f82999c682b666a7a94dd08feda7b2cf0ff8262312c4fcc09\">MFn::kInvalid</a>,&amp;stat );</div>\n\
<div class=\"line\"></div>\n\
<div class=\"line\">    <span class=\"comment\">// Iterate over all selected dependency nodes</span></div>\n\
<div class=\"line\">    <span class=\"comment\">// and save them in a list</span></div>\n\
<div class=\"line\">    <span class=\"comment\">//</span></div>\n\
<div class=\"line\">    <span class=\"keywordflow\">for</span> ( ; !iter.isDone(); iter.next() )</div>\n\
<div class=\"line\">    {</div>\n\
<div class=\"line\">        <span class=\"comment\">// Get the selected dependency node</span></div>\n\
<div class=\"line\">        <span class=\"comment\">//</span></div>\n\
<div class=\"line\">        <span class=\"keywordflow\">if</span> ( <a class=\"code\" href=\"#!/url=./cpp_ref/class_m_status.html#a02ab596f4febca68da503aaf8dde3a80af0536797208144380691e2b376ffc1d1\">MS::kSuccess</a> != iter.getDependNode( dependNode ) )</div>\n\
<div class=\"line\">        {</div>\n\
<div class=\"line\">            cerr &lt;&lt; <span class=\"stringliteral\">&quot;Error getting the dependency node&quot;</span> &lt;&lt; endl;</div>\n\
<div class=\"line\">            <span class=\"keywordflow\">continue</span>;</div>\n\
<div class=\"line\">        }</div>\n\
<div class=\"line\">        picked.<a name=\"a24\"></a><a class=\"code\" href=\"#!/url=./cpp_ref/class_m_object_array.html#a3694392863ba632bca5d76cbbf190ef5\">append</a>( dependNode );</div>\n\
<div class=\"line\">    }</div>\n\
<div class=\"line\"></div>\n\
<div class=\"line\">    <span class=\"comment\">// array of arrays for object position</span></div>\n\
<div class=\"line\"></div>\n\
<div class=\"line\">    <a class=\"code\" href=\"#!/url=./cpp_ref/class_m_point_array.html\">MPointArray</a> *pointArrays = <span class=\"keyword\">new</span> <a class=\"code\" href=\"#!/url=./cpp_ref/class_m_point_array.html\">MPointArray</a> [ picked.<a name=\"a25\"></a><a class=\"code\" href=\"#!/url=./cpp_ref/class_m_object_array.html#a580388f31f60c46fac867ca48a48da1e\">length</a>() ];</div>\n\
<div class=\"line\"></div>\n\
<div class=\"line\">    <span class=\"keywordtype\">unsigned</span> <span class=\"keywordtype\">int</span> i;</div>\n\
<div class=\"line\">    <span class=\"keywordtype\">double</span> time;</div>\n\
<div class=\"line\"></div>\n\
<div class=\"line\">    <span class=\"comment\">//  Sample the animation using start, end, by values</span></div>\n\
<div class=\"line\"></div>\n\
<div class=\"line\">    <span class=\"keywordflow\">for</span> ( time = start; time &lt;= end; time+=by )</div>\n\
<div class=\"line\">    {</div>\n\
<div class=\"line\">        <a name=\"_a26\"></a><a class=\"code\" href=\"#!/url=./cpp_ref/class_m_time.html\">MTime</a> timeval(time);</div>\n\
<div class=\"line\"></div>\n\
<div class=\"line\">        <a name=\"a27\"></a><a class=\"code\" href=\"#!/url=./cpp_ref/class_m_global.html#ac919b5ecda7f12015e94792c0712726f\">MGlobal::viewFrame</a>( timeval );</div>\n\
<div class=\"line\"></div>\n\
<div class=\"line\">        <span class=\"comment\">// Iterate over selected dependency nodes</span></div>\n\
<div class=\"line\">        <span class=\"comment\">//</span></div>\n\
<div class=\"line\"></div>\n\
<div class=\"line\">        <span class=\"keywordflow\">for</span> ( i = 0; i &lt; picked.<a class=\"code\" href=\"#!/url=./cpp_ref/class_m_object_array.html#a580388f31f60c46fac867ca48a48da1e\">length</a>(); i++ )</div>\n\
<div class=\"line\">        {</div>\n\
<div class=\"line\">            <span class=\"comment\">// Get the selected dependency node</span></div>\n\
<div class=\"line\">            <span class=\"comment\">//</span></div>\n\
<div class=\"line\">            dependNode = picked[i];</div>\n\
<div class=\"line\"></div>\n\
<div class=\"line\">            <span class=\"comment\">// Create a function set for the dependency node</span></div>\n\
<div class=\"line\">            <span class=\"comment\">//</span></div>\n\
<div class=\"line\">            <a name=\"_a28\"></a><a class=\"code\" href=\"#!/url=./cpp_ref/class_m_fn_dependency_node.html\">MFnDependencyNode</a> fnDependNode( dependNode );</div>\n\
<div class=\"line\"></div>\n\
<div class=\"line\">            <span class=\"comment\">// Get the translation attribute values</span></div>\n\
<div class=\"line\"></div>\n\
<div class=\"line\">            <a class=\"code\" href=\"#!/url=./cpp_ref/class_m_object.html\">MObject</a> txAttr;</div>\n\
<div class=\"line\">            txAttr = fnDependNode.attribute( <a class=\"code\" href=\"#!/url=./cpp_ref/class_m_string.html\">MString</a>(<span class=\"stringliteral\">&quot;translateX&quot;</span>), &amp;stat );</div>\n\
<div class=\"line\">            <a name=\"_a29\"></a><a class=\"code\" href=\"#!/url=./cpp_ref/class_m_plug.html\">MPlug</a> txPlug( dependNode, txAttr );</div>\n\
<div class=\"line\">            <span class=\"keywordtype\">double</span> tx;</div>\n\
<div class=\"line\">            stat = txPlug.getValue( tx );</div>\n\
<div class=\"line\"></div>\n\
<div class=\"line\">            <a class=\"code\" href=\"#!/url=./cpp_ref/class_m_object.html\">MObject</a> tyAttr;</div>\n\
<div class=\"line\">            tyAttr = fnDependNode.attribute( <a class=\"code\" href=\"#!/url=./cpp_ref/class_m_string.html\">MString</a>(<span class=\"stringliteral\">&quot;translateY&quot;</span>), &amp;stat );</div>\n\
<div class=\"line\">            <a class=\"code\" href=\"#!/url=./cpp_ref/class_m_plug.html\">MPlug</a> tyPlug( dependNode, tyAttr );</div>\n\
<div class=\"line\">            <span class=\"keywordtype\">double</span> ty;</div>\n\
<div class=\"line\">            stat = tyPlug.getValue( ty );</div>\n\
<div class=\"line\"></div>\n\
<div class=\"line\">            <a class=\"code\" href=\"#!/url=./cpp_ref/class_m_object.html\">MObject</a> tzAttr;</div>\n\
<div class=\"line\">            tzAttr = fnDependNode.attribute( <a class=\"code\" href=\"#!/url=./cpp_ref/class_m_string.html\">MString</a>(<span class=\"stringliteral\">&quot;translateZ&quot;</span>), &amp;stat );</div>\n\
<div class=\"line\">            <a class=\"code\" href=\"#!/url=./cpp_ref/class_m_plug.html\">MPlug</a> tzPlug( dependNode, tzAttr );</div>\n\
<div class=\"line\">            <span class=\"keywordtype\">double</span> tz;</div>\n\
<div class=\"line\">            stat = tzPlug.getValue( tz );</div>\n\
<div class=\"line\"></div>\n\
<div class=\"line\"><span class=\"preprocessor\">#if 0</span></div>\n\
<div class=\"line\">            fprintf( stderr,</div>\n\
<div class=\"line\">                     <span class=\"stringliteral\">&quot;Time = %2.2lf, XYZ = ( %2.2lf, %2.2lf, %2.2lf )\\n\\n&quot;</span>,</div>\n\
<div class=\"line\">                     time, tx, ty, tz );</div>\n\
<div class=\"line\"><span class=\"preprocessor\">#endif</span></div>\n\
<div class=\"line\"></div>\n\
<div class=\"line\">            pointArrays[i].<a name=\"a30\"></a><a class=\"code\" href=\"#!/url=./cpp_ref/class_m_point_array.html#abe5a9fe36b4651af38a4a26c85f46e1a\">append</a>( <a name=\"_a31\"></a><a class=\"code\" href=\"#!/url=./cpp_ref/class_m_point.html\">MPoint</a>( tx, ty, tz )) ;</div>\n\
<div class=\"line\">        }</div>\n\
<div class=\"line\">    }</div>\n\
<div class=\"line\"></div>\n\
<div class=\"line\">    <span class=\"comment\">// make a path curve for each selected object</span></div>\n\
<div class=\"line\"></div>\n\
<div class=\"line\">    <span class=\"keywordflow\">for</span> ( i = 0; i &lt; picked.<a class=\"code\" href=\"#!/url=./cpp_ref/class_m_object_array.html#a580388f31f60c46fac867ca48a48da1e\">length</a>(); i++ )</div>\n\
<div class=\"line\">        jMakeCurve( pointArrays[i] );</div>\n\
<div class=\"line\"></div>\n\
<div class=\"line\">    <span class=\"keyword\">delete</span> [] pointArrays;</div>\n\
<div class=\"line\">    <span class=\"keywordflow\">return</span> <a class=\"code\" href=\"#!/url=./cpp_ref/class_m_status.html#a02ab596f4febca68da503aaf8dde3a80af0536797208144380691e2b376ffc1d1\">MS::kSuccess</a>;</div>\n\
<div class=\"line\">}</div>\n\
<div class=\"line\"></div>\n\
<div class=\"line\"></div>\n\
<div class=\"line\"><span class=\"comment\">//</span></div>\n\
<div class=\"line\"><span class=\"comment\">// The following routines are used to register/unregister</span></div>\n\
<div class=\"line\"><span class=\"comment\">// the command we are creating within Maya</span></div>\n\
<div class=\"line\"><span class=\"comment\">//</span></div>\n\
<div class=\"line\"><span class=\"comment\"></span><a class=\"code\" href=\"#!/url=./cpp_ref/class_m_status.html\">MStatus</a> initializePlugin( <a class=\"code\" href=\"#!/url=./cpp_ref/class_m_object.html\">MObject</a> obj )</div>\n\
<div class=\"line\">{</div>\n\
<div class=\"line\">    <a class=\"code\" href=\"#!/url=./cpp_ref/class_m_status.html\">MStatus</a>   status;</div>\n\
<div class=\"line\">    <a name=\"_a32\"></a><a class=\"code\" href=\"#!/url=./cpp_ref/class_m_fn_plugin.html\">MFnPlugin</a> plugin( obj, PLUGIN_COMPANY, <span class=\"stringliteral\">&quot;3.0&quot;</span>, <span class=\"stringliteral\">&quot;Any&quot;</span>);</div>\n\
<div class=\"line\"></div>\n\
<div class=\"line\">    status = plugin.registerCommand( <span class=\"stringliteral\">&quot;motionTrace&quot;</span>, motionTrace::creator );</div>\n\
<div class=\"line\">    <span class=\"keywordflow\">if</span> (!status) {</div>\n\
<div class=\"line\">        status.<a name=\"a33\"></a><a class=\"code\" href=\"#!/url=./cpp_ref/class_m_status.html#a1f01a4748fea4d8bcced082df83f804d\">perror</a>(<span class=\"stringliteral\">&quot;registerCommand&quot;</span>);</div>\n\
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
<div class=\"line\">    status =  plugin.deregisterCommand( <span class=\"stringliteral\">&quot;motionTrace&quot;</span> );</div>\n\
<div class=\"line\">    <span class=\"keywordflow\">if</span> (!status) {</div>\n\
<div class=\"line\">        status.<a class=\"code\" href=\"#!/url=./cpp_ref/class_m_status.html#a1f01a4748fea4d8bcced082df83f804d\">perror</a>(<span class=\"stringliteral\">&quot;registerCommand&quot;</span>);</div>\n\
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