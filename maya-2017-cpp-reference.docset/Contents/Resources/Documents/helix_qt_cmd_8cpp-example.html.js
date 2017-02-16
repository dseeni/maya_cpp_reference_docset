var topic = "<!-- saved from url=(0024)http://docs.autodesk.com -->\n\
<html>\n\
   <head><script src=\"../scripts/yepnope.1.5.4-min.js\" type=\"text/javascript\"></script><script src=\"../scripts/lib/jquery-1.11.1.min.js\" type=\"text/javascript\"></script><meta http-equiv=\"Content-Type\" content=\"text/html; charset=UTF-8\"><meta name=\"product\" content=\"MAYAUL\"><meta name=\"release\" content=\"2017\"><meta name=\"book\" content=\"Developer\"><meta name=\"created\" content=\"2016-06-16\"><meta name=\"topicid\" content=\"GUID-02DEF634-1E7B-48C6-8ACD-2C934CA97887\"><meta name=\"topic-type\" content=\"concept\">\n\
      <title>helixQtCmd.cpp</title>\n\
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
    cpp_ref_adsk_ref_toc.initNavTree(\'helix_qt_cmd_8cpp-example.html\', tocPrefix);\n\
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
            <h1>helixQtCmd.cpp</h1>\n\
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
<div class=\"title\">helixQtCmd.cpp</div>  </div>\n\
</div><!--header-->\n\
<div class=\"contents\">\n\
<div class=\"fragment\"><div class=\"line\"><span class=\"comment\">//-</span></div>\n\
<div class=\"line\"><span class=\"comment\">// ==========================================================================</span></div>\n\
<div class=\"line\"><span class=\"comment\">// Copyright 2008 Autodesk, Inc. All rights reserved.</span></div>\n\
<div class=\"line\"><span class=\"comment\">//</span></div>\n\
<div class=\"line\"><span class=\"comment\">// Use of this software is subject to the terms of the Autodesk</span></div>\n\
<div class=\"line\"><span class=\"comment\">// license agreement provided at the time of installation or download,</span></div>\n\
<div class=\"line\"><span class=\"comment\">// or which otherwise accompanies this software in either electronic</span></div>\n\
<div class=\"line\"><span class=\"comment\">// or hard copy form.</span></div>\n\
<div class=\"line\"><span class=\"comment\">// ==========================================================================</span></div>\n\
<div class=\"line\"><span class=\"comment\">//+</span></div>\n\
<div class=\"line\"></div>\n\
<div class=\"line\"><span class=\"comment\">//  Must ensure that at least one Qt header is included before anything</span></div>\n\
<div class=\"line\"><span class=\"comment\">//  else.</span></div>\n\
<div class=\"line\"><span class=\"preprocessor\">#include &lt;helixQtCmd.h&gt;</span></div>\n\
<div class=\"line\"></div>\n\
<div class=\"line\"><span class=\"preprocessor\">#include &lt;math.h&gt;</span></div>\n\
<div class=\"line\"><span class=\"preprocessor\">#include &lt;maya/MDoubleArray.h&gt;</span> </div>\n\
<div class=\"line\"><span class=\"preprocessor\">#include &lt;maya/MFnDependencyNode.h&gt;</span></div>\n\
<div class=\"line\"><span class=\"preprocessor\">#include &lt;maya/MFnNurbsCurve.h&gt;</span></div>\n\
<div class=\"line\"><span class=\"preprocessor\">#include &lt;maya/MFnPlugin.h&gt;</span></div>\n\
<div class=\"line\"><span class=\"preprocessor\">#include &lt;maya/MGlobal.h&gt;</span></div>\n\
<div class=\"line\"><span class=\"preprocessor\">#include &lt;maya/MObject.h&gt;</span></div>\n\
<div class=\"line\"><span class=\"preprocessor\">#include &lt;maya/MPoint.h&gt;</span></div>\n\
<div class=\"line\"><span class=\"preprocessor\">#include &lt;maya/MPointArray.h&gt;</span></div>\n\
<div class=\"line\"></div>\n\
<div class=\"line\"><span class=\"comment\">// ==========================================================================</span></div>\n\
<div class=\"line\"><span class=\"comment\">//</span></div>\n\
<div class=\"line\"><span class=\"comment\">//          HelixButton class</span></div>\n\
<div class=\"line\"><span class=\"comment\">//</span></div>\n\
<div class=\"line\"><span class=\"comment\">// ==========================================================================</span></div>\n\
<div class=\"line\"></div>\n\
<div class=\"line\">HelixButton::HelixButton(<span class=\"keyword\">const</span> QString&amp; text, QWidget* parent)</div>\n\
<div class=\"line\">:   QPushButton(text, parent)</div>\n\
<div class=\"line\">{}</div>\n\
<div class=\"line\"></div>\n\
<div class=\"line\">HelixButton::~HelixButton()</div>\n\
<div class=\"line\">{}</div>\n\
<div class=\"line\"></div>\n\
<div class=\"line\"></div>\n\
<div class=\"line\"><span class=\"comment\">//  This is a slot which is called whenever the button is pushed.</span></div>\n\
<div class=\"line\"><span class=\"comment\">//  It creates a helical NURBS curve within Maya.</span></div>\n\
<div class=\"line\"><span class=\"keywordtype\">void</span> HelixButton::createHelix(<span class=\"keywordtype\">bool</span> <span class=\"comment\">/* checked */</span>)</div>\n\
<div class=\"line\">{</div>\n\
<div class=\"line\">    <a name=\"_a0\"></a><a class=\"code\" href=\"#!/url=./cpp_ref/class_m_status.html\">MStatus</a> st;</div>\n\
<div class=\"line\"></div>\n\
<div class=\"line\">    <span class=\"keyword\">const</span> <span class=\"keywordtype\">unsigned</span> deg    = 3;             <span class=\"comment\">// Curve Degree</span></div>\n\
<div class=\"line\">    <span class=\"keyword\">const</span> <span class=\"keywordtype\">unsigned</span> ncvs   = 20;            <span class=\"comment\">// Number of CVs</span></div>\n\
<div class=\"line\">    <span class=\"keyword\">const</span> <span class=\"keywordtype\">unsigned</span> spans  = ncvs - deg;    <span class=\"comment\">// Number of spans</span></div>\n\
<div class=\"line\">    <span class=\"keyword\">const</span> <span class=\"keywordtype\">unsigned</span> nknots = spans+2*deg-1; <span class=\"comment\">// Number of knots</span></div>\n\
<div class=\"line\">    <span class=\"keywordtype\">double</span>         radius = 4.0;           <span class=\"comment\">// Helix radius</span></div>\n\
<div class=\"line\">    <span class=\"keywordtype\">double</span>         pitch  = 0.5;           <span class=\"comment\">// Helix pitch</span></div>\n\
<div class=\"line\">    <span class=\"keywordtype\">unsigned</span>       i;</div>\n\
<div class=\"line\"></div>\n\
<div class=\"line\">    <a name=\"_a1\"></a><a class=\"code\" href=\"#!/url=./cpp_ref/class_m_point_array.html\">MPointArray</a> controlVertices;</div>\n\
<div class=\"line\">    <a name=\"_a2\"></a><a class=\"code\" href=\"#!/url=./cpp_ref/class_m_double_array.html\">MDoubleArray</a> knotSequences;</div>\n\
<div class=\"line\"></div>\n\
<div class=\"line\">    <span class=\"comment\">// Set up cvs and knots for the helix</span></div>\n\
<div class=\"line\">    <span class=\"keywordflow\">for</span> (i = 0; i &lt; ncvs; i++) {</div>\n\
<div class=\"line\">        controlVertices.<a name=\"a3\"></a><a class=\"code\" href=\"#!/url=./cpp_ref/class_m_point_array.html#abe5a9fe36b4651af38a4a26c85f46e1a\">append</a>(</div>\n\
<div class=\"line\">            <a name=\"_a4\"></a><a class=\"code\" href=\"#!/url=./cpp_ref/class_m_point.html\">MPoint</a>(</div>\n\
<div class=\"line\">                radius * cos((<span class=\"keywordtype\">double</span>) i),</div>\n\
<div class=\"line\">                pitch * (<span class=\"keywordtype\">double</span>) i,</div>\n\
<div class=\"line\">                radius * sin((<span class=\"keywordtype\">double</span>) i)</div>\n\
<div class=\"line\">            )</div>\n\
<div class=\"line\">        );</div>\n\
<div class=\"line\">    }</div>\n\
<div class=\"line\">    </div>\n\
<div class=\"line\">    <span class=\"keywordflow\">for</span> (i = 0; i &lt; nknots; i++)</div>\n\
<div class=\"line\">        knotSequences.<a name=\"a5\"></a><a class=\"code\" href=\"#!/url=./cpp_ref/class_m_double_array.html#aafcfe8ff7afecc2dee4defccbdfb8e55\">append</a>((<span class=\"keywordtype\">double</span>) i);</div>\n\
<div class=\"line\"></div>\n\
<div class=\"line\">    <span class=\"comment\">// Now create the curve</span></div>\n\
<div class=\"line\">    <a name=\"_a6\"></a><a class=\"code\" href=\"#!/url=./cpp_ref/class_m_fn_nurbs_curve.html\">MFnNurbsCurve</a> curveFn;</div>\n\
<div class=\"line\"></div>\n\
<div class=\"line\">    <a name=\"_a7\"></a><a class=\"code\" href=\"#!/url=./cpp_ref/class_m_object.html\">MObject</a> curve = curveFn.<a name=\"a8\"></a><a class=\"code\" href=\"#!/url=./cpp_ref/class_m_fn_nurbs_curve.html#a4b11e346021c91845e781e9d7d06859f\">create</a>(</div>\n\
<div class=\"line\">        controlVertices,</div>\n\
<div class=\"line\">        knotSequences,</div>\n\
<div class=\"line\">        deg,</div>\n\
<div class=\"line\">        <a name=\"a9\"></a><a class=\"code\" href=\"#!/url=./cpp_ref/class_m_fn_nurbs_curve.html#a99f5203c7742378941e34926280c8e66a7fb3bf49ba349ca1a266be41df447b5b\">MFnNurbsCurve::kOpen</a>,</div>\n\
<div class=\"line\">        <span class=\"keyword\">false</span>,</div>\n\
<div class=\"line\">        <span class=\"keyword\">false</span>,</div>\n\
<div class=\"line\">        <a name=\"a10\"></a><a class=\"code\" href=\"#!/url=./cpp_ref/class_m_object.html#ae6af14e0aa2c92bdda88c81280e1d122\">MObject::kNullObj</a>,</div>\n\
<div class=\"line\">        &amp;st</div>\n\
<div class=\"line\">    );</div>\n\
<div class=\"line\"></div>\n\
<div class=\"line\">    <span class=\"keywordflow\">if</span> (!st) {</div>\n\
<div class=\"line\">        <a name=\"a11\"></a><a class=\"code\" href=\"#!/url=./cpp_ref/class_m_global.html#a4ddbe97e58a90e1ab05d45a62c006cf0\">MGlobal::displayError</a>(</div>\n\
<div class=\"line\">            HelixQtCmd::commandName + <span class=\"stringliteral\">&quot; - could not create helix: &quot;</span></div>\n\
<div class=\"line\">            + st.<a name=\"a12\"></a><a class=\"code\" href=\"#!/url=./cpp_ref/class_m_status.html#ad57d0c926a6ff0c782bfa67278925863\">errorString</a>()</div>\n\
<div class=\"line\">        );</div>\n\
<div class=\"line\">    }</div>\n\
<div class=\"line\">}</div>\n\
<div class=\"line\"></div>\n\
<div class=\"line\"></div>\n\
<div class=\"line\"><span class=\"comment\">// ==========================================================================</span></div>\n\
<div class=\"line\"><span class=\"comment\">//</span></div>\n\
<div class=\"line\"><span class=\"comment\">//          HelixQtCmd class</span></div>\n\
<div class=\"line\"><span class=\"comment\">//</span></div>\n\
<div class=\"line\"><span class=\"comment\">// ==========================================================================</span></div>\n\
<div class=\"line\"></div>\n\
<div class=\"line\"><span class=\"comment\">//  We store a pointer to the button window in a static QPointer so that we</span></div>\n\
<div class=\"line\"><span class=\"comment\">//  can destroy it if the plugin is unloaded. The QPointer will</span></div>\n\
<div class=\"line\"><span class=\"comment\">//  automatically set itself to zero if the button window is destroyed</span></div>\n\
<div class=\"line\"><span class=\"comment\">//  for any reason.</span></div>\n\
<div class=\"line\">QPointer&lt;HelixButton&gt;   HelixQtCmd::button;</div>\n\
<div class=\"line\"></div>\n\
<div class=\"line\"><span class=\"keyword\">const</span> <a name=\"_a13\"></a><a class=\"code\" href=\"#!/url=./cpp_ref/class_m_string.html\">MString</a>           HelixQtCmd::commandName(<span class=\"stringliteral\">&quot;helixQt&quot;</span>);</div>\n\
<div class=\"line\"></div>\n\
<div class=\"line\"></div>\n\
<div class=\"line\"><span class=\"comment\">//  Destroy the button window, if it still exists.</span></div>\n\
<div class=\"line\"><span class=\"keywordtype\">void</span> HelixQtCmd::cleanup()</div>\n\
<div class=\"line\">{</div>\n\
<div class=\"line\">    <span class=\"keywordflow\">if</span> (!button.isNull()) <span class=\"keyword\">delete</span> button;</div>\n\
<div class=\"line\">}</div>\n\
<div class=\"line\"></div>\n\
<div class=\"line\"></div>\n\
<div class=\"line\"><a class=\"code\" href=\"#!/url=./cpp_ref/class_m_status.html\">MStatus</a> HelixQtCmd::doIt(<span class=\"keyword\">const</span> <a name=\"_a14\"></a><a class=\"code\" href=\"#!/url=./cpp_ref/class_m_arg_list.html\">MArgList</a>&amp; <span class=\"comment\">/* args */</span>)</div>\n\
<div class=\"line\">{</div>\n\
<div class=\"line\">    <span class=\"comment\">//  Create a window containing a HelixButton, if one does not already</span></div>\n\
<div class=\"line\">    <span class=\"comment\">//  exist. Otherwise just make sure that the existing window is visible.</span></div>\n\
<div class=\"line\">    <span class=\"keywordflow\">if</span> (button.isNull()) {</div>\n\
<div class=\"line\">        button = <span class=\"keyword\">new</span> HelixButton(<span class=\"stringliteral\">&quot;Create Helix&quot;</span>);</div>\n\
<div class=\"line\">        button-&gt;connect(button, SIGNAL(clicked(<span class=\"keywordtype\">bool</span>)), button, SLOT(createHelix(<span class=\"keywordtype\">bool</span>)));</div>\n\
<div class=\"line\">        button-&gt;show();</div>\n\
<div class=\"line\">    }</div>\n\
<div class=\"line\">    <span class=\"keywordflow\">else</span> {</div>\n\
<div class=\"line\">        button-&gt;showNormal();</div>\n\
<div class=\"line\">        button-&gt;raise();</div>\n\
<div class=\"line\">    }</div>\n\
<div class=\"line\"></div>\n\
<div class=\"line\"></div>\n\
<div class=\"line\">    <span class=\"keywordflow\">return</span> <a name=\"a15\"></a><a class=\"code\" href=\"#!/url=./cpp_ref/class_m_status.html#a02ab596f4febca68da503aaf8dde3a80af0536797208144380691e2b376ffc1d1\">MS::kSuccess</a>;</div>\n\
<div class=\"line\">}</div>\n\
<div class=\"line\"></div>\n\
<div class=\"line\"></div>\n\
<div class=\"line\"><span class=\"comment\">// ==========================================================================</span></div>\n\
<div class=\"line\"><span class=\"comment\">//</span></div>\n\
<div class=\"line\"><span class=\"comment\">//          Plugin load/unload</span></div>\n\
<div class=\"line\"><span class=\"comment\">//</span></div>\n\
<div class=\"line\"><span class=\"comment\">// ==========================================================================</span></div>\n\
<div class=\"line\"></div>\n\
<div class=\"line\"><a class=\"code\" href=\"#!/url=./cpp_ref/class_m_status.html\">MStatus</a> initializePlugin(<a class=\"code\" href=\"#!/url=./cpp_ref/class_m_object.html\">MObject</a> plugin)</div>\n\
<div class=\"line\">{</div>\n\
<div class=\"line\">    <a class=\"code\" href=\"#!/url=./cpp_ref/class_m_status.html\">MStatus</a>     st;</div>\n\
<div class=\"line\">    <a name=\"_a16\"></a><a class=\"code\" href=\"#!/url=./cpp_ref/class_m_fn_plugin.html\">MFnPlugin</a>   pluginFn(plugin, <span class=\"stringliteral\">&quot;Autodesk, Inc.&quot;</span>, <span class=\"stringliteral\">&quot;1.0&quot;</span>, <span class=\"stringliteral\">&quot;Any&quot;</span>, &amp;st);</div>\n\
<div class=\"line\"></div>\n\
<div class=\"line\">    <span class=\"keywordflow\">if</span> (!st) {</div>\n\
<div class=\"line\">        <a class=\"code\" href=\"#!/url=./cpp_ref/class_m_global.html#a4ddbe97e58a90e1ab05d45a62c006cf0\">MGlobal::displayError</a>(</div>\n\
<div class=\"line\">            <a class=\"code\" href=\"#!/url=./cpp_ref/class_m_string.html\">MString</a>(<span class=\"stringliteral\">&quot;helixQtCmd - could not initialize plugin: &quot;</span>)</div>\n\
<div class=\"line\">            + st.<a class=\"code\" href=\"#!/url=./cpp_ref/class_m_status.html#ad57d0c926a6ff0c782bfa67278925863\">errorString</a>()</div>\n\
<div class=\"line\">        );</div>\n\
<div class=\"line\">        <span class=\"keywordflow\">return</span> st;</div>\n\
<div class=\"line\">    }</div>\n\
<div class=\"line\"></div>\n\
<div class=\"line\">    <span class=\"comment\">//  Register the command.</span></div>\n\
<div class=\"line\">    st = pluginFn.registerCommand(HelixQtCmd::commandName, HelixQtCmd::creator);</div>\n\
<div class=\"line\"></div>\n\
<div class=\"line\">    <span class=\"keywordflow\">if</span> (!st) {</div>\n\
<div class=\"line\">        <a class=\"code\" href=\"#!/url=./cpp_ref/class_m_global.html#a4ddbe97e58a90e1ab05d45a62c006cf0\">MGlobal::displayError</a>(</div>\n\
<div class=\"line\">            <a class=\"code\" href=\"#!/url=./cpp_ref/class_m_string.html\">MString</a>(<span class=\"stringliteral\">&quot;helixQtCmd - could not register &#39;&quot;</span>)</div>\n\
<div class=\"line\">            + HelixQtCmd::commandName + <span class=\"stringliteral\">&quot;&#39; command: &quot;</span></div>\n\
<div class=\"line\">            + st.<a class=\"code\" href=\"#!/url=./cpp_ref/class_m_status.html#ad57d0c926a6ff0c782bfa67278925863\">errorString</a>()</div>\n\
<div class=\"line\">        );</div>\n\
<div class=\"line\">        <span class=\"keywordflow\">return</span> st;</div>\n\
<div class=\"line\">    }</div>\n\
<div class=\"line\"></div>\n\
<div class=\"line\">    <span class=\"keywordflow\">return</span> st;</div>\n\
<div class=\"line\">}</div>\n\
<div class=\"line\"></div>\n\
<div class=\"line\"></div>\n\
<div class=\"line\"><a class=\"code\" href=\"#!/url=./cpp_ref/class_m_status.html\">MStatus</a> uninitializePlugin(<a class=\"code\" href=\"#!/url=./cpp_ref/class_m_object.html\">MObject</a> plugin)</div>\n\
<div class=\"line\">{</div>\n\
<div class=\"line\">    <a class=\"code\" href=\"#!/url=./cpp_ref/class_m_status.html\">MStatus</a>     st;</div>\n\
<div class=\"line\">    <a class=\"code\" href=\"#!/url=./cpp_ref/class_m_fn_plugin.html\">MFnPlugin</a>   pluginFn(plugin, <span class=\"stringliteral\">&quot;Autodesk, Inc.&quot;</span>, <span class=\"stringliteral\">&quot;1.0&quot;</span>, <span class=\"stringliteral\">&quot;Any&quot;</span>, &amp;st);</div>\n\
<div class=\"line\"></div>\n\
<div class=\"line\">    <span class=\"keywordflow\">if</span> (!st) {</div>\n\
<div class=\"line\">        <a class=\"code\" href=\"#!/url=./cpp_ref/class_m_global.html#a4ddbe97e58a90e1ab05d45a62c006cf0\">MGlobal::displayError</a>(</div>\n\
<div class=\"line\">            <a class=\"code\" href=\"#!/url=./cpp_ref/class_m_string.html\">MString</a>(<span class=\"stringliteral\">&quot;helixQtCmd - could not uninitialize plugin: &quot;</span>)</div>\n\
<div class=\"line\">            + st.<a class=\"code\" href=\"#!/url=./cpp_ref/class_m_status.html#ad57d0c926a6ff0c782bfa67278925863\">errorString</a>()</div>\n\
<div class=\"line\">        );</div>\n\
<div class=\"line\">        <span class=\"keywordflow\">return</span> st;</div>\n\
<div class=\"line\">    }</div>\n\
<div class=\"line\"></div>\n\
<div class=\"line\">    <span class=\"comment\">//  Make sure that there is no UI left hanging around.</span></div>\n\
<div class=\"line\">    HelixQtCmd::cleanup();</div>\n\
<div class=\"line\"></div>\n\
<div class=\"line\">    <span class=\"comment\">//  Deregister the command.</span></div>\n\
<div class=\"line\">    st = pluginFn.deregisterCommand(HelixQtCmd::commandName);</div>\n\
<div class=\"line\"></div>\n\
<div class=\"line\">    <span class=\"keywordflow\">if</span> (!st) {</div>\n\
<div class=\"line\">        <a class=\"code\" href=\"#!/url=./cpp_ref/class_m_global.html#a4ddbe97e58a90e1ab05d45a62c006cf0\">MGlobal::displayError</a>(</div>\n\
<div class=\"line\">            <a class=\"code\" href=\"#!/url=./cpp_ref/class_m_string.html\">MString</a>(<span class=\"stringliteral\">&quot;helixQtCmd - could not deregister &#39;&quot;</span>)</div>\n\
<div class=\"line\">            + HelixQtCmd::commandName + <span class=\"stringliteral\">&quot;&#39; command: &quot;</span></div>\n\
<div class=\"line\">            + st.<a class=\"code\" href=\"#!/url=./cpp_ref/class_m_status.html#ad57d0c926a6ff0c782bfa67278925863\">errorString</a>()</div>\n\
<div class=\"line\">        );</div>\n\
<div class=\"line\">        <span class=\"keywordflow\">return</span> st;</div>\n\
<div class=\"line\">    }</div>\n\
<div class=\"line\"></div>\n\
<div class=\"line\">    <span class=\"keywordflow\">return</span> st;</div>\n\
<div class=\"line\">}</div>\n\
<div class=\"line\"></div>\n\
<div class=\"line\"></div>\n\
<div class=\"line\"></div>\n\
</div><!-- fragment --> </div><!-- contents -->\n\
</div><!-- doc-content -->\n\
          <div class=\"footer-block\"><a href=\"../html/ac.cmtdialog.htm\" class=\"comments-anchor\" target=\"_blank\"><span class=\"comments-link\">Please send us your comment about this page</span></a></div><br></div>\n\
   </div></body>\n\
</html>\n\
";