var topic = "<!-- saved from url=(0024)http://docs.autodesk.com -->\n\
<html>\n\
   <head><script src=\"../scripts/yepnope.1.5.4-min.js\" type=\"text/javascript\"></script><script src=\"../scripts/lib/jquery-1.11.1.min.js\" type=\"text/javascript\"></script>\n\
      <title>C++ API Reference: helixCmd/helixCmd.cpp</title>\n\
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
    cpp_ref_adsk_ref_toc.initNavTree(\'helix_cmd_2helix_cmd_8cpp-example.html\', tocPrefix);\n\
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
            <h1>C++ API Reference: helixCmd/helixCmd.cpp</h1>\n\
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
<div class=\"title\">helixCmd/helixCmd.cpp</div>  </div>\n\
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
<div class=\"line\"><span class=\"comment\">// </span></div>\n\
<div class=\"line\"><span class=\"comment\">// DESCRIPTION:</span></div>\n\
<div class=\"line\"><span class=\"comment\">// </span></div>\n\
<div class=\"line\"><span class=\"comment\">// Produces the MEL command &quot;helix&quot;.</span></div>\n\
<div class=\"line\"><span class=\"comment\">//</span></div>\n\
<div class=\"line\"><span class=\"comment\">// This example demonstrates building a simple command that does not have &quot;undo&quot;.</span></div>\n\
<div class=\"line\"><span class=\"comment\">// The command accepts two arguments: &quot;-r&quot; to set the radius of the helix and &quot;-p&quot; to set</span></div>\n\
<div class=\"line\"><span class=\"comment\">// the pitch of the helix. So, to create a helix, execute the command &quot;helix [ -r #] [ -p #]&quot;</span></div>\n\
<div class=\"line\"><span class=\"comment\">// in the command window. </span></div>\n\
<div class=\"line\"><span class=\"comment\">// </span></div>\n\
<div class=\"line\"><span class=\"comment\">// A MEL script is also provided with this example that can be run by executing the command &quot;source helixCmd&quot;.</span></div>\n\
<div class=\"line\"><span class=\"comment\">// </span></div>\n\
<div class=\"line\"><span class=\"comment\">// This script creates a new &quot;Plug-ins&quot; menu under which the &quot;helix&quot; command can be found.</span></div>\n\
<div class=\"line\"><span class=\"comment\">// Selecting this menu item will bring up a window that allows you to set the radius and pitch for the new helix.</span></div>\n\
<div class=\"line\"><span class=\"comment\">// This is a good example of hooking up a command to the UI. </span></div>\n\
<div class=\"line\"><span class=\"comment\">//</span></div>\n\
<div class=\"line\"><span class=\"comment\"></span></div>\n\
<div class=\"line\"><span class=\"preprocessor\">#include &lt;math.h&gt;</span></div>\n\
<div class=\"line\"></div>\n\
<div class=\"line\"><span class=\"preprocessor\">#include &lt;maya/MIOStream.h&gt;</span></div>\n\
<div class=\"line\"><span class=\"preprocessor\">#include &lt;maya/MSimple.h&gt;</span></div>\n\
<div class=\"line\"><span class=\"preprocessor\">#include &lt;maya/MFnNurbsCurve.h&gt;</span></div>\n\
<div class=\"line\"><span class=\"preprocessor\">#include &lt;maya/MPointArray.h&gt;</span></div>\n\
<div class=\"line\"><span class=\"preprocessor\">#include &lt;maya/MDoubleArray.h&gt;</span></div>\n\
<div class=\"line\"><span class=\"preprocessor\">#include &lt;maya/MPoint.h&gt;</span></div>\n\
<div class=\"line\"></div>\n\
<div class=\"line\"><a name=\"a0\"></a><a class=\"code\" href=\"#!/url=./cpp_ref/group___macros.html#gaf3b44fe07495c3792b926494fca7b517\">DeclareSimpleCommand</a>( helix, PLUGIN_COMPANY, <span class=\"stringliteral\">&quot;3.0&quot;</span>);</div>\n\
<div class=\"line\"></div>\n\
<div class=\"line\"><a name=\"_a1\"></a><a class=\"code\" href=\"#!/url=./cpp_ref/class_m_status.html\">MStatus</a> helix::doIt( <span class=\"keyword\">const</span> <a name=\"_a2\"></a><a class=\"code\" href=\"#!/url=./cpp_ref/class_m_arg_list.html\">MArgList</a>&amp; args )</div>\n\
<div class=\"line\">{</div>\n\
<div class=\"line\">    <a class=\"code\" href=\"#!/url=./cpp_ref/class_m_status.html\">MStatus</a> stat;</div>\n\
<div class=\"line\"></div>\n\
<div class=\"line\">    <span class=\"keyword\">const</span> <span class=\"keywordtype\">unsigned</span>  deg     = 3;            <span class=\"comment\">// Curve Degree</span></div>\n\
<div class=\"line\">    <span class=\"keyword\">const</span> <span class=\"keywordtype\">unsigned</span>  ncvs    = 20;           <span class=\"comment\">// Number of CVs</span></div>\n\
<div class=\"line\">    <span class=\"keyword\">const</span> <span class=\"keywordtype\">unsigned</span>  spans   = ncvs - deg;   <span class=\"comment\">// Number of spans</span></div>\n\
<div class=\"line\">    <span class=\"keyword\">const</span> <span class=\"keywordtype\">unsigned</span>  nknots  = spans+2*deg-1;<span class=\"comment\">// Number of knots</span></div>\n\
<div class=\"line\">    <span class=\"keywordtype\">double</span>  radius          = 4.0;          <span class=\"comment\">// Helix radius</span></div>\n\
<div class=\"line\">    <span class=\"keywordtype\">double</span>  pitch           = 0.5;          <span class=\"comment\">// Helix pitch</span></div>\n\
<div class=\"line\">    <span class=\"keywordtype\">unsigned</span>    i;</div>\n\
<div class=\"line\"></div>\n\
<div class=\"line\">    <span class=\"comment\">// Parse the arguments.</span></div>\n\
<div class=\"line\">    <span class=\"keywordflow\">for</span> ( i = 0; i &lt; args.<a name=\"a3\"></a><a class=\"code\" href=\"#!/url=./cpp_ref/class_m_arg_list.html#a99dd6a54b909ede1d11702fe58977e2a\">length</a>(); i++ )</div>\n\
<div class=\"line\">        <span class=\"keywordflow\">if</span> ( <a name=\"_a4\"></a><a class=\"code\" href=\"#!/url=./cpp_ref/class_m_string.html\">MString</a>( <span class=\"stringliteral\">&quot;-p&quot;</span> ) == args.<a name=\"a5\"></a><a class=\"code\" href=\"#!/url=./cpp_ref/class_m_arg_list.html#ad24ff3826e4df513b55e1a0ecb0a665b\">asString</a>( i, &amp;stat )</div>\n\
<div class=\"line\">                &amp;&amp; MS::kSuccess == stat)</div>\n\
<div class=\"line\">        {</div>\n\
<div class=\"line\">            <span class=\"keywordtype\">double</span> tmp = args.<a name=\"a6\"></a><a class=\"code\" href=\"#!/url=./cpp_ref/class_m_arg_list.html#a15a33f5705d13873ab7f003bb64f0741\">asDouble</a>( ++i, &amp;stat );</div>\n\
<div class=\"line\">            <span class=\"keywordflow\">if</span> ( MS::kSuccess == stat )</div>\n\
<div class=\"line\">                pitch = tmp;</div>\n\
<div class=\"line\">        }</div>\n\
<div class=\"line\">        <span class=\"keywordflow\">else</span> <span class=\"keywordflow\">if</span> ( <a class=\"code\" href=\"#!/url=./cpp_ref/class_m_string.html\">MString</a>( <span class=\"stringliteral\">&quot;-r&quot;</span> ) == args.<a class=\"code\" href=\"#!/url=./cpp_ref/class_m_arg_list.html#ad24ff3826e4df513b55e1a0ecb0a665b\">asString</a>( i, &amp;stat )</div>\n\
<div class=\"line\">                &amp;&amp; MS::kSuccess == stat)</div>\n\
<div class=\"line\">        {</div>\n\
<div class=\"line\">            <span class=\"keywordtype\">double</span> tmp = args.<a class=\"code\" href=\"#!/url=./cpp_ref/class_m_arg_list.html#a15a33f5705d13873ab7f003bb64f0741\">asDouble</a>( ++i, &amp;stat );</div>\n\
<div class=\"line\">            <span class=\"keywordflow\">if</span> ( MS::kSuccess == stat )</div>\n\
<div class=\"line\">                radius = tmp;</div>\n\
<div class=\"line\">        }</div>\n\
<div class=\"line\"></div>\n\
<div class=\"line\">    <a name=\"_a7\"></a><a class=\"code\" href=\"#!/url=./cpp_ref/class_m_point_array.html\">MPointArray</a>  controlVertices;</div>\n\
<div class=\"line\">    <a name=\"_a8\"></a><a class=\"code\" href=\"#!/url=./cpp_ref/class_m_double_array.html\">MDoubleArray</a> knotSequences;</div>\n\
<div class=\"line\"></div>\n\
<div class=\"line\">    <span class=\"comment\">// Set up cvs and knots for the helix</span></div>\n\
<div class=\"line\">    <span class=\"comment\">//</span></div>\n\
<div class=\"line\">    <span class=\"keywordflow\">for</span> (i = 0; i &lt; ncvs; i++)</div>\n\
<div class=\"line\">        controlVertices.<a name=\"a9\"></a><a class=\"code\" href=\"#!/url=./cpp_ref/class_m_point_array.html#abe5a9fe36b4651af38a4a26c85f46e1a\">append</a>( <a name=\"_a10\"></a><a class=\"code\" href=\"#!/url=./cpp_ref/class_m_point.html\">MPoint</a>( radius * cos( (<span class=\"keywordtype\">double</span>)i ),</div>\n\
<div class=\"line\">            pitch * (<span class=\"keywordtype\">double</span>)i, radius * sin( (<span class=\"keywordtype\">double</span>)i ) ) );</div>\n\
<div class=\"line\"></div>\n\
<div class=\"line\">    <span class=\"keywordflow\">for</span> (i = 0; i &lt; nknots; i++)</div>\n\
<div class=\"line\">        knotSequences.<a name=\"a11\"></a><a class=\"code\" href=\"#!/url=./cpp_ref/class_m_double_array.html#aafcfe8ff7afecc2dee4defccbdfb8e55\">append</a>( (<span class=\"keywordtype\">double</span>)i );</div>\n\
<div class=\"line\"></div>\n\
<div class=\"line\">    <span class=\"comment\">// Now create the curve</span></div>\n\
<div class=\"line\">    <span class=\"comment\">//</span></div>\n\
<div class=\"line\">    <a name=\"_a12\"></a><a class=\"code\" href=\"#!/url=./cpp_ref/class_m_fn_nurbs_curve.html\">MFnNurbsCurve</a> curveFn;</div>\n\
<div class=\"line\"></div>\n\
<div class=\"line\">    curveFn.<a name=\"a13\"></a>create( controlVertices,</div>\n\
<div class=\"line\">                    knotSequences, deg, </div>\n\
<div class=\"line\">                    MFnNurbsCurve::kOpen, </div>\n\
<div class=\"line\">                    <span class=\"keyword\">false</span>, <span class=\"keyword\">false</span>, </div>\n\
<div class=\"line\">                    <a name=\"a14\"></a><a class=\"code\" href=\"#!/url=./cpp_ref/class_m_object.html#af2a707b4254eb54763167aeced863e63\">MObject::kNullObj</a>, </div>\n\
<div class=\"line\">                    &amp;stat );</div>\n\
<div class=\"line\"></div>\n\
<div class=\"line\">    <span class=\"keywordflow\">if</span> ( MS::kSuccess != stat )</div>\n\
<div class=\"line\">        cout&lt;&lt;<span class=\"stringliteral\">&quot;Error creating curve.&quot;</span>&lt;&lt;endl;</div>\n\
<div class=\"line\"></div>\n\
<div class=\"line\">    <span class=\"keywordflow\">return</span> stat;</div>\n\
<div class=\"line\">}</div>\n\
</div><!-- fragment --> </div><!-- contents -->\n\
</div><!-- doc-content -->\n\
<!-- start footer part -->\n\
\n\
      <div class=\"footer-block\"><a href=\"../html/ac.cmtdialog.htm\" class=\"comments-anchor\" target=\"_blank\"><span class=\"comments-link\">Please send us your comment about this page</span></a></div></div>\n\
   </div></body>\n\
</html>\n\
";