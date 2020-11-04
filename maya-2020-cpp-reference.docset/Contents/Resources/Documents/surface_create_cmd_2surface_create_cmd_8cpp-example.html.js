var topic = "<!-- saved from url=(0024)http://docs.autodesk.com -->\n\
<html>\n\
   <head><script src=\"../scripts/yepnope.1.5.4-min.js\" type=\"text/javascript\"></script><script src=\"../scripts/lib/jquery-1.11.1.min.js\" type=\"text/javascript\"></script>\n\
      <title>C++ API Reference: surfaceCreateCmd/surfaceCreateCmd.cpp</title>\n\
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
    cpp_ref_adsk_ref_toc.initNavTree(\'surface_create_cmd_2surface_create_cmd_8cpp-example.html\', tocPrefix);\n\
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
            <h1>C++ API Reference: surfaceCreateCmd/surfaceCreateCmd.cpp</h1>\n\
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
<div class=\"title\">surfaceCreateCmd/surfaceCreateCmd.cpp</div>  </div>\n\
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
<div class=\"line\"><span class=\"comment\">// </span></div>\n\
<div class=\"line\"><span class=\"comment\">// Produces the MEL command &quot;surfaceCreate&quot;.</span></div>\n\
<div class=\"line\"><span class=\"comment\">//</span></div>\n\
<div class=\"line\"><span class=\"comment\">// This plug-in creates a NURBS surface by supplying its own CVs and knots.</span></div>\n\
<div class=\"line\"><span class=\"comment\">// To use it, enter the command &quot;surfaceCreate&quot;. </span></div>\n\
<div class=\"line\"><span class=\"comment\">//</span></div>\n\
<div class=\"line\"><span class=\"comment\"></span></div>\n\
<div class=\"line\"><span class=\"preprocessor\">#include &lt;maya/MStatus.h&gt;</span></div>\n\
<div class=\"line\"><span class=\"preprocessor\">#include &lt;maya/MObject.h&gt;</span></div>\n\
<div class=\"line\"><span class=\"preprocessor\">#include &lt;maya/MFnPlugin.h&gt;</span></div>\n\
<div class=\"line\"><span class=\"preprocessor\">#include &lt;maya/MDoubleArray.h&gt;</span></div>\n\
<div class=\"line\"><span class=\"preprocessor\">#include &lt;maya/MPointArray.h&gt;</span></div>\n\
<div class=\"line\"><span class=\"preprocessor\">#include &lt;maya/MPoint.h&gt;</span></div>\n\
<div class=\"line\"><span class=\"preprocessor\">#include &lt;maya/MFnNurbsSurface.h&gt;</span></div>\n\
<div class=\"line\"><span class=\"preprocessor\">#include &lt;maya/MString.h&gt;</span></div>\n\
<div class=\"line\"><span class=\"preprocessor\">#include &lt;maya/MPxCommand.h&gt;</span></div>\n\
<div class=\"line\"></div>\n\
<div class=\"line\"><span class=\"preprocessor\">#include &lt;maya/MIOStream.h&gt;</span> </div>\n\
<div class=\"line\"><span class=\"preprocessor\">#include &lt;math.h&gt;</span> </div>\n\
<div class=\"line\"></div>\n\
<div class=\"line\"><span class=\"keyword\">class </span>surfaceCreate : <span class=\"keyword\">public</span> <a name=\"_a0\"></a><a class=\"code\" href=\"#!/url=./cpp_ref/class_m_px_command.html\">MPxCommand</a> {</div>\n\
<div class=\"line\"><span class=\"keyword\">public</span>:</div>\n\
<div class=\"line\"></div>\n\
<div class=\"line\">                    surfaceCreate();</div>\n\
<div class=\"line\">                ~surfaceCreate() <span class=\"keyword\">override</span>;</div>\n\
<div class=\"line\"></div>\n\
<div class=\"line\">    <a name=\"_a1\"></a><a class=\"code\" href=\"#!/url=./cpp_ref/class_m_status.html\">MStatus</a> <a name=\"a2\"></a><a class=\"code\" href=\"#!/url=./cpp_ref/class_m_px_command.html#ade7d0a873cbe811d6eab464e695390a9\">doIt</a>( <span class=\"keyword\">const</span> <a name=\"_a3\"></a><a class=\"code\" href=\"#!/url=./cpp_ref/class_m_arg_list.html\">MArgList</a>&amp; args ) <span class=\"keyword\">override</span>;</div>\n\
<div class=\"line\"></div>\n\
<div class=\"line\">    <span class=\"keyword\">static</span> <span class=\"keywordtype\">void</span>*    creator();</div>\n\
<div class=\"line\">};</div>\n\
<div class=\"line\"></div>\n\
<div class=\"line\"><span class=\"preprocessor\">#define NUM_SPANS        30</span></div>\n\
<div class=\"line\"><span class=\"preprocessor\">#define WIDTH            10.0</span></div>\n\
<div class=\"line\"><span class=\"preprocessor\">#define VERTICAL_SCALING 4.0</span></div>\n\
<div class=\"line\"></div>\n\
<div class=\"line\">surfaceCreate::~surfaceCreate() {}</div>\n\
<div class=\"line\"></div>\n\
<div class=\"line\">surfaceCreate::surfaceCreate() {}</div>\n\
<div class=\"line\"></div>\n\
<div class=\"line\"><span class=\"keywordtype\">void</span>* surfaceCreate::creator()</div>\n\
<div class=\"line\">{</div>\n\
<div class=\"line\">    <span class=\"keywordflow\">return</span> <span class=\"keyword\">new</span> surfaceCreate();</div>\n\
<div class=\"line\">}</div>\n\
<div class=\"line\"></div>\n\
<div class=\"line\"><a class=\"code\" href=\"#!/url=./cpp_ref/class_m_status.html\">MStatus</a> surfaceCreate::doIt( <span class=\"keyword\">const</span> <a class=\"code\" href=\"#!/url=./cpp_ref/class_m_arg_list.html\">MArgList</a>&amp; )</div>\n\
<div class=\"line\"><span class=\"comment\">//</span></div>\n\
<div class=\"line\"><span class=\"comment\">//  Description:</span></div>\n\
<div class=\"line\"><span class=\"comment\">//      Plugin command to test Selection List Iterator.</span></div>\n\
<div class=\"line\"><span class=\"comment\">//</span></div>\n\
<div class=\"line\"><span class=\"comment\">//</span></div>\n\
<div class=\"line\">{  </div>\n\
<div class=\"line\">    <span class=\"comment\">// Set up knots</span></div>\n\
<div class=\"line\">    <span class=\"comment\">//</span></div>\n\
<div class=\"line\">    <a name=\"_a4\"></a><a class=\"code\" href=\"#!/url=./cpp_ref/class_m_double_array.html\">MDoubleArray</a> knotArray;</div>\n\
<div class=\"line\">    <span class=\"keywordtype\">int</span> i;</div>\n\
<div class=\"line\">    <span class=\"comment\">// Add extra starting knots so that the first CV matches</span></div>\n\
<div class=\"line\">    <span class=\"comment\">// the curve start point</span></div>\n\
<div class=\"line\">    <span class=\"comment\">//</span></div>\n\
<div class=\"line\">    knotArray.<a name=\"a5\"></a><a class=\"code\" href=\"#!/url=./cpp_ref/class_m_double_array.html#aafcfe8ff7afecc2dee4defccbdfb8e55\">append</a>( 0.0 );</div>\n\
<div class=\"line\">    knotArray.<a class=\"code\" href=\"#!/url=./cpp_ref/class_m_double_array.html#aafcfe8ff7afecc2dee4defccbdfb8e55\">append</a>( 0.0 );</div>\n\
<div class=\"line\">    <span class=\"keywordflow\">for</span> ( i = 0; i &lt;= NUM_SPANS; i++ ) {</div>\n\
<div class=\"line\">        knotArray.<a class=\"code\" href=\"#!/url=./cpp_ref/class_m_double_array.html#aafcfe8ff7afecc2dee4defccbdfb8e55\">append</a>( (<span class=\"keywordtype\">double</span>)i );</div>\n\
<div class=\"line\">    }</div>\n\
<div class=\"line\">    <span class=\"comment\">// Add extra ending knots so that the last CV matches the curve end point</span></div>\n\
<div class=\"line\">    <span class=\"comment\">//</span></div>\n\
<div class=\"line\">    knotArray.<a class=\"code\" href=\"#!/url=./cpp_ref/class_m_double_array.html#aafcfe8ff7afecc2dee4defccbdfb8e55\">append</a>( (<span class=\"keywordtype\">double</span>)i );</div>\n\
<div class=\"line\">    knotArray.<a class=\"code\" href=\"#!/url=./cpp_ref/class_m_double_array.html#aafcfe8ff7afecc2dee4defccbdfb8e55\">append</a>( (<span class=\"keywordtype\">double</span>)i );</div>\n\
<div class=\"line\"> </div>\n\
<div class=\"line\">    <span class=\"comment\">// Now, Set up CVs</span></div>\n\
<div class=\"line\">    <span class=\"comment\">//</span></div>\n\
<div class=\"line\">    <a name=\"_a6\"></a><a class=\"code\" href=\"#!/url=./cpp_ref/class_m_point_array.html\">MPointArray</a> cvArray;</div>\n\
<div class=\"line\">    </div>\n\
<div class=\"line\">    <span class=\"comment\">// We need a 2D array of CVs with NUM_SPANS + 3 CVs on a side</span></div>\n\
<div class=\"line\">    <span class=\"comment\">//</span></div>\n\
<div class=\"line\">    <span class=\"keywordtype\">int</span> last = NUM_SPANS + 3;</div>\n\
<div class=\"line\">    <span class=\"keywordflow\">for</span> ( i = 0; i &lt; last; i++ ) {</div>\n\
<div class=\"line\">        <span class=\"keywordflow\">for</span> ( <span class=\"keywordtype\">int</span> j = 0; j &lt; last; j++ ) {</div>\n\
<div class=\"line\">            <a name=\"_a7\"></a><a class=\"code\" href=\"#!/url=./cpp_ref/class_m_point.html\">MPoint</a> cv;</div>\n\
<div class=\"line\">            cv.<a name=\"a8\"></a><a class=\"code\" href=\"#!/url=./cpp_ref/class_m_point.html#af88b946fb90d5f08b5fb740c70e98c10\">x</a> = (((double)(j))/((<span class=\"keywordtype\">double</span>)(NUM_SPANS + 3)) * WIDTH) </div>\n\
<div class=\"line\">                - (WIDTH/2.0);</div>\n\
<div class=\"line\">            cv.<a name=\"a9\"></a><a class=\"code\" href=\"#!/url=./cpp_ref/class_m_point.html#ab3e6ed577a7c669c19de1f9c1b46c872\">z</a> = (((double)(i))/((<span class=\"keywordtype\">double</span>)(NUM_SPANS + 3)) * WIDTH) </div>\n\
<div class=\"line\">                - (WIDTH/2.0);</div>\n\
<div class=\"line\">            <span class=\"keywordtype\">double</span> dist = sqrt( cv.<a class=\"code\" href=\"#!/url=./cpp_ref/class_m_point.html#af88b946fb90d5f08b5fb740c70e98c10\">x</a>*cv.<a class=\"code\" href=\"#!/url=./cpp_ref/class_m_point.html#af88b946fb90d5f08b5fb740c70e98c10\">x</a> + cv.<a class=\"code\" href=\"#!/url=./cpp_ref/class_m_point.html#ab3e6ed577a7c669c19de1f9c1b46c872\">z</a>*cv.<a class=\"code\" href=\"#!/url=./cpp_ref/class_m_point.html#ab3e6ed577a7c669c19de1f9c1b46c872\">z</a> );</div>\n\
<div class=\"line\">            cv.<a name=\"a10\"></a><a class=\"code\" href=\"#!/url=./cpp_ref/class_m_point.html#ab927965981178aa1fba979a37168db2a\">y</a> = cos( dist ) * VERTICAL_SCALING;</div>\n\
<div class=\"line\">            cvArray.<a name=\"a11\"></a><a class=\"code\" href=\"#!/url=./cpp_ref/class_m_point_array.html#abe5a9fe36b4651af38a4a26c85f46e1a\">append</a>( cv );</div>\n\
<div class=\"line\">        }</div>\n\
<div class=\"line\">    }</div>\n\
<div class=\"line\"></div>\n\
<div class=\"line\">    <span class=\"comment\">// Create the surface</span></div>\n\
<div class=\"line\">    <span class=\"comment\">// </span></div>\n\
<div class=\"line\">    <a name=\"_a12\"></a><a class=\"code\" href=\"#!/url=./cpp_ref/class_m_fn_nurbs_surface.html\">MFnNurbsSurface</a> mfnNurbsSurf;</div>\n\
<div class=\"line\"></div>\n\
<div class=\"line\">    <a class=\"code\" href=\"#!/url=./cpp_ref/class_m_status.html\">MStatus</a> stat;</div>\n\
<div class=\"line\">    mfnNurbsSurf.<a name=\"a13\"></a><a class=\"code\" href=\"#!/url=./cpp_ref/class_m_fn_nurbs_surface.html#a6a3e914fe9c070228f4df8f4a593b4c8\">create</a>( cvArray, knotArray, knotArray, 3, 3, </div>\n\
<div class=\"line\">                         MFnNurbsSurface::kOpen, MFnNurbsSurface::kOpen,</div>\n\
<div class=\"line\">                         <span class=\"keyword\">true</span>, <a name=\"a14\"></a><a class=\"code\" href=\"#!/url=./cpp_ref/class_m_object.html#af2a707b4254eb54763167aeced863e63\">MObject::kNullObj</a>, &amp;stat );</div>\n\
<div class=\"line\"></div>\n\
<div class=\"line\">    <span class=\"keywordflow\">if</span> ( MS::kSuccess != stat )</div>\n\
<div class=\"line\">        cerr &lt;&lt; <span class=\"stringliteral\">&quot;surfaceCreate failed: status &quot;</span> &lt;&lt; stat &lt;&lt; endl;</div>\n\
<div class=\"line\"></div>\n\
<div class=\"line\">    <span class=\"keywordflow\">return</span> stat;</div>\n\
<div class=\"line\">}</div>\n\
<div class=\"line\"></div>\n\
<div class=\"line\"><a class=\"code\" href=\"#!/url=./cpp_ref/class_m_status.html\">MStatus</a> initializePlugin( <a name=\"_a15\"></a><a class=\"code\" href=\"#!/url=./cpp_ref/class_m_object.html\">MObject</a> obj )</div>\n\
<div class=\"line\">{</div>\n\
<div class=\"line\">    <a class=\"code\" href=\"#!/url=./cpp_ref/class_m_status.html\">MStatus</a>   status;</div>\n\
<div class=\"line\">    <a name=\"_a16\"></a><a class=\"code\" href=\"#!/url=./cpp_ref/class_m_fn_plugin.html\">MFnPlugin</a> plugin( obj, PLUGIN_COMPANY, <span class=\"stringliteral\">&quot;3.0&quot;</span>, <span class=\"stringliteral\">&quot;Any&quot;</span>);</div>\n\
<div class=\"line\"></div>\n\
<div class=\"line\">    status = plugin.registerCommand( <span class=\"stringliteral\">&quot;surfaceCreate&quot;</span>, surfaceCreate::creator );</div>\n\
<div class=\"line\">    <span class=\"keywordflow\">if</span> (!status) {</div>\n\
<div class=\"line\">        status.<a name=\"a17\"></a><a class=\"code\" href=\"#!/url=./cpp_ref/class_m_status.html#a1f01a4748fea4d8bcced082df83f804d\">perror</a>(<span class=\"stringliteral\">&quot;registerCommand&quot;</span>);</div>\n\
<div class=\"line\">        <span class=\"keywordflow\">return</span> status;</div>\n\
<div class=\"line\">    }</div>\n\
<div class=\"line\">    </div>\n\
<div class=\"line\">    <span class=\"keywordflow\">return</span> status;</div>\n\
<div class=\"line\">}</div>\n\
<div class=\"line\"></div>\n\
<div class=\"line\"><a class=\"code\" href=\"#!/url=./cpp_ref/class_m_status.html\">MStatus</a> uninitializePlugin( <a class=\"code\" href=\"#!/url=./cpp_ref/class_m_object.html\">MObject</a> obj )</div>\n\
<div class=\"line\">{</div>\n\
<div class=\"line\">    <a class=\"code\" href=\"#!/url=./cpp_ref/class_m_status.html\">MStatus</a>   status;</div>\n\
<div class=\"line\">    <a class=\"code\" href=\"#!/url=./cpp_ref/class_m_fn_plugin.html\">MFnPlugin</a> plugin( obj );</div>\n\
<div class=\"line\">    status = plugin.deregisterCommand( <span class=\"stringliteral\">&quot;surfaceCreate&quot;</span> );</div>\n\
<div class=\"line\">    <span class=\"keywordflow\">if</span> (!status) {</div>\n\
<div class=\"line\">        status.<a class=\"code\" href=\"#!/url=./cpp_ref/class_m_status.html#a1f01a4748fea4d8bcced082df83f804d\">perror</a>(<span class=\"stringliteral\">&quot;registerCommand&quot;</span>);</div>\n\
<div class=\"line\">        <span class=\"keywordflow\">return</span> status;</div>\n\
<div class=\"line\">    }</div>\n\
<div class=\"line\">    </div>\n\
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