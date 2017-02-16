var topic = "<!-- saved from url=(0024)http://docs.autodesk.com -->\n\
<html>\n\
   <head><script src=\"../scripts/yepnope.1.5.4-min.js\" type=\"text/javascript\"></script><script src=\"../scripts/lib/jquery-1.11.1.min.js\" type=\"text/javascript\"></script><meta http-equiv=\"Content-Type\" content=\"text/html; charset=UTF-8\"><meta name=\"product\" content=\"MAYAUL\"><meta name=\"release\" content=\"2017\"><meta name=\"book\" content=\"Developer\"><meta name=\"created\" content=\"2016-06-16\"><meta name=\"topicid\" content=\"GUID-02DEF634-1E7B-48C6-8ACD-2C934CA97887\"><meta name=\"topic-type\" content=\"concept\">\n\
      <title>listPolyHolesCmd/listPolyHolesCmd.cpp</title>\n\
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
    cpp_ref_adsk_ref_toc.initNavTree(\'list_poly_holes_cmd_2list_poly_holes_cmd_8cpp-example.html\', tocPrefix);\n\
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
            <h1>listPolyHolesCmd/listPolyHolesCmd.cpp</h1>\n\
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
<div class=\"title\">listPolyHolesCmd/listPolyHolesCmd.cpp</div>  </div>\n\
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
<div class=\"line\"><span class=\"comment\">// DESCRIPTION</span></div>\n\
<div class=\"line\"><span class=\"comment\">//</span></div>\n\
<div class=\"line\"><span class=\"comment\">// Produces the MEL command &quot;listPolyHoles&quot;.</span></div>\n\
<div class=\"line\"><span class=\"comment\">//</span></div>\n\
<div class=\"line\"><span class=\"comment\">// This example demonstrates how to use the MFnMesh::getPolyHoles() function</span></div>\n\
<div class=\"line\"><span class=\"comment\">// to describe all the holes in a polygon mesh. The command takes no arguments.</span></div>\n\
<div class=\"line\"><span class=\"comment\">// When invoked, the command outputs a description of any holes in the currently</span></div>\n\
<div class=\"line\"><span class=\"comment\">// selected mesh to the Output Window (on Windows) or to the console (on the Linux platform).</span></div>\n\
<div class=\"line\"><span class=\"comment\">//</span></div>\n\
<div class=\"line\"><span class=\"comment\"></span></div>\n\
<div class=\"line\"><span class=\"preprocessor\">#include &lt;maya/MIOStream.h&gt;</span></div>\n\
<div class=\"line\"><span class=\"preprocessor\">#include &lt;maya/MSimple.h&gt;</span></div>\n\
<div class=\"line\"><span class=\"preprocessor\">#include &lt;maya/MSelectionList.h&gt;</span></div>\n\
<div class=\"line\"><span class=\"preprocessor\">#include &lt;maya/M3dView.h&gt;</span></div>\n\
<div class=\"line\"><span class=\"preprocessor\">#include &lt;maya/MGlobal.h&gt;</span></div>\n\
<div class=\"line\"><span class=\"preprocessor\">#include &lt;maya/MFnDependencyNode.h&gt;</span></div>\n\
<div class=\"line\"><span class=\"preprocessor\">#include &lt;maya/MFnMesh.h&gt;</span></div>\n\
<div class=\"line\"><span class=\"preprocessor\">#include &lt;maya/MDagPath.h&gt;</span></div>\n\
<div class=\"line\"><span class=\"preprocessor\">#include &lt;math.h&gt;</span></div>\n\
<div class=\"line\"></div>\n\
<div class=\"line\"><a name=\"a0\"></a><a class=\"code\" href=\"#!/url=./cpp_ref/group___macros.html#gaf3b44fe07495c3792b926494fca7b517\">DeclareSimpleCommand</a>( listPolyHoles, PLUGIN_COMPANY, <span class=\"stringliteral\">&quot;4.5&quot;</span>);</div>\n\
<div class=\"line\"></div>\n\
<div class=\"line\"><a name=\"_a1\"></a><a class=\"code\" href=\"#!/url=./cpp_ref/class_m_status.html\">MStatus</a> listPolyHoles::doIt( <span class=\"keyword\">const</span> <a name=\"_a2\"></a><a class=\"code\" href=\"#!/url=./cpp_ref/class_m_arg_list.html\">MArgList</a>&amp; args )</div>\n\
<div class=\"line\"><span class=\"comment\">//</span></div>\n\
<div class=\"line\"><span class=\"comment\">//  Description:</span></div>\n\
<div class=\"line\"><span class=\"comment\">//      Implements the MEL listPolyHoles command.  This command outputs a list</span></div>\n\
<div class=\"line\"><span class=\"comment\">//      of all the holes in each selected polymesh.</span></div>\n\
<div class=\"line\"><span class=\"comment\">//      </span></div>\n\
<div class=\"line\"><span class=\"comment\">//  Arguments:</span></div>\n\
<div class=\"line\"><span class=\"comment\">//      args - the argument list that was passed to the command from MEL.  This</span></div>\n\
<div class=\"line\"><span class=\"comment\">//             command takes no arguments.</span></div>\n\
<div class=\"line\"><span class=\"comment\">//</span></div>\n\
<div class=\"line\"><span class=\"comment\">//  Return Value:</span></div>\n\
<div class=\"line\"><span class=\"comment\">//      MS::kSuccess - command succeeded</span></div>\n\
<div class=\"line\"><span class=\"comment\">//      MS::kFailure - command failed (returning this value will cause the </span></div>\n\
<div class=\"line\"><span class=\"comment\">//                     MEL script that is being run to terminate unless the</span></div>\n\
<div class=\"line\"><span class=\"comment\">//                     error is caught using a &quot;catch&quot; statement).</span></div>\n\
<div class=\"line\"><span class=\"comment\">//</span></div>\n\
<div class=\"line\">{</div>\n\
<div class=\"line\">    <a class=\"code\" href=\"#!/url=./cpp_ref/class_m_status.html\">MStatus</a> stat = <a name=\"a3\"></a><a class=\"code\" href=\"#!/url=./cpp_ref/class_m_status.html#a02ab596f4febca68da503aaf8dde3a80af0536797208144380691e2b376ffc1d1\">MS::kSuccess</a>;</div>\n\
<div class=\"line\"></div>\n\
<div class=\"line\">    <a name=\"_a4\"></a><a class=\"code\" href=\"#!/url=./cpp_ref/class_m_selection_list.html\">MSelectionList</a> curSel;</div>\n\
<div class=\"line\">    <a name=\"a5\"></a><a class=\"code\" href=\"#!/url=./cpp_ref/class_m_global.html#a6d81d38246555884897fb153c93aaf42\">MGlobal::getActiveSelectionList</a>( curSel );</div>\n\
<div class=\"line\"></div>\n\
<div class=\"line\">    cout&lt;&lt;endl;</div>\n\
<div class=\"line\">    cout&lt;&lt;<span class=\"stringliteral\">&quot;*****************&quot;</span>&lt;&lt;endl;</div>\n\
<div class=\"line\">    cout&lt;&lt;<span class=\"stringliteral\">&quot;* listPolyHoles *&quot;</span>&lt;&lt;endl;</div>\n\
<div class=\"line\">    cout&lt;&lt;<span class=\"stringliteral\">&quot;*****************&quot;</span>&lt;&lt;endl;</div>\n\
<div class=\"line\"></div>\n\
<div class=\"line\">    <span class=\"comment\">// iterate through the selection list, and find holes in any selected</span></div>\n\
<div class=\"line\">    <span class=\"comment\">// polygons.</span></div>\n\
<div class=\"line\">    <span class=\"comment\">//</span></div>\n\
<div class=\"line\">    <span class=\"keywordtype\">int</span> numSelected = curSel.<a name=\"a6\"></a><a class=\"code\" href=\"#!/url=./cpp_ref/class_m_selection_list.html#a99dd6a54b909ede1d11702fe58977e2a\">length</a>();</div>\n\
<div class=\"line\">    <span class=\"keywordflow\">for</span>( <span class=\"keywordtype\">int</span> s = 0; s &lt; numSelected; s++ )</div>\n\
<div class=\"line\">    {</div>\n\
<div class=\"line\">        <a name=\"_a7\"></a><a class=\"code\" href=\"#!/url=./cpp_ref/class_m_dag_path.html\">MDagPath</a> dagPath;</div>\n\
<div class=\"line\">        <a name=\"_a8\"></a><a class=\"code\" href=\"#!/url=./cpp_ref/class_m_object.html\">MObject</a> node;</div>\n\
<div class=\"line\"></div>\n\
<div class=\"line\">        <span class=\"comment\">// get the selected item, figure out if it&#39;s a polymesh or not</span></div>\n\
<div class=\"line\">        <span class=\"comment\">//</span></div>\n\
<div class=\"line\">        curSel.<a name=\"a9\"></a><a class=\"code\" href=\"#!/url=./cpp_ref/class_m_selection_list.html#a16dda1a34d5f10be257d8421ac6deabd\">getDagPath</a>( s, dagPath );</div>\n\
<div class=\"line\">        <span class=\"keywordflow\">if</span>( dagPath.<a name=\"a10\"></a><a class=\"code\" href=\"#!/url=./cpp_ref/class_m_dag_path.html#a658d9664035ff84ffefa217c0e45cc88\">extendToShape</a>() != <a class=\"code\" href=\"#!/url=./cpp_ref/class_m_status.html#a02ab596f4febca68da503aaf8dde3a80af0536797208144380691e2b376ffc1d1\">MS::kSuccess</a> )</div>\n\
<div class=\"line\">        {</div>\n\
<div class=\"line\">            <span class=\"comment\">// selection does not correspond to a DAG shape</span></div>\n\
<div class=\"line\">            <span class=\"comment\">//</span></div>\n\
<div class=\"line\">            cout&lt;&lt;<span class=\"stringliteral\">&quot; Error - object is not a polymesh&quot;</span>&lt;&lt;endl;</div>\n\
<div class=\"line\">            stat = <a name=\"a11\"></a><a class=\"code\" href=\"#!/url=./cpp_ref/class_m_status.html#a02ab596f4febca68da503aaf8dde3a80a1ef6c2d725fb4bec3e7e840d28adbc00\">MS::kFailure</a>;</div>\n\
<div class=\"line\">            <span class=\"keywordflow\">return</span> stat;</div>\n\
<div class=\"line\">        }</div>\n\
<div class=\"line\"></div>\n\
<div class=\"line\">        node = dagPath.<a name=\"a12\"></a><a class=\"code\" href=\"#!/url=./cpp_ref/class_m_dag_path.html#ad1aa507eb8e63e89e8d46a0abc18aa8c\">node</a>();</div>\n\
<div class=\"line\">        <a name=\"_a13\"></a><a class=\"code\" href=\"#!/url=./cpp_ref/class_m_fn_dependency_node.html\">MFnDependencyNode</a> fnNode( node );</div>\n\
<div class=\"line\">        cout&lt;&lt;endl&lt;&lt;<span class=\"stringliteral\">&quot;Looking for holes in &quot;</span>&lt;&lt;fnNode.name().asChar()&lt;&lt;endl;</div>\n\
<div class=\"line\">        </div>\n\
<div class=\"line\">        <a class=\"code\" href=\"#!/url=./cpp_ref/class_m_status.html\">MStatus</a> polyStatus;</div>\n\
<div class=\"line\">        <a name=\"_a14\"></a><a class=\"code\" href=\"#!/url=./cpp_ref/class_m_fn_mesh.html\">MFnMesh</a> fnMesh( node, &amp;polyStatus );</div>\n\
<div class=\"line\"></div>\n\
<div class=\"line\">        <span class=\"keywordflow\">if</span>( polyStatus == <a class=\"code\" href=\"#!/url=./cpp_ref/class_m_status.html#a02ab596f4febca68da503aaf8dde3a80af0536797208144380691e2b376ffc1d1\">MS::kSuccess</a> )</div>\n\
<div class=\"line\">        {</div>\n\
<div class=\"line\">            <span class=\"comment\">// Retrieve the list of holes in the polymesh.</span></div>\n\
<div class=\"line\">            <span class=\"comment\">// &#39;holeInfo&#39; array stores 3 integers for each hole:</span></div>\n\
<div class=\"line\">            <span class=\"comment\">// </span></div>\n\
<div class=\"line\">            <span class=\"comment\">//  [ face, numVertices, startIndex ]</span></div>\n\
<div class=\"line\">            <span class=\"comment\">//</span></div>\n\
<div class=\"line\">            <span class=\"comment\">// where &#39;face&#39; is the index of the face in which the </span></div>\n\
<div class=\"line\">            <span class=\"comment\">// hole is found, &#39;numVertices&#39; is the number of vertices</span></div>\n\
<div class=\"line\">            <span class=\"comment\">// that define the hole, and &#39;startIndex&#39; is the starting</span></div>\n\
<div class=\"line\">            <span class=\"comment\">// index of the list of hole vertices in the &#39;holeVertices&#39;</span></div>\n\
<div class=\"line\">            <span class=\"comment\">// array.</span></div>\n\
<div class=\"line\">            <span class=\"comment\">//</span></div>\n\
<div class=\"line\">            <a name=\"_a15\"></a><a class=\"code\" href=\"#!/url=./cpp_ref/class_m_int_array.html\">MIntArray</a> holeInfo;</div>\n\
<div class=\"line\"></div>\n\
<div class=\"line\">            <span class=\"comment\">// &#39;holeVertices&#39; array contains a linear listing of the</span></div>\n\
<div class=\"line\">            <span class=\"comment\">// vertices comprising all the holes in the selected polymesh.</span></div>\n\
<div class=\"line\">            <span class=\"comment\">// information from the &#39;holeInfo&#39; array is used to index into</span></div>\n\
<div class=\"line\">            <span class=\"comment\">// this list to extract the list of vertices for each hole.</span></div>\n\
<div class=\"line\">            <span class=\"comment\">//</span></div>\n\
<div class=\"line\">            <a class=\"code\" href=\"#!/url=./cpp_ref/class_m_int_array.html\">MIntArray</a> holeVertices;</div>\n\
<div class=\"line\">            <a class=\"code\" href=\"#!/url=./cpp_ref/class_m_status.html\">MStatus</a> holeStatus;</div>\n\
<div class=\"line\"></div>\n\
<div class=\"line\">            holeInfo.<a name=\"a16\"></a><a class=\"code\" href=\"#!/url=./cpp_ref/class_m_int_array.html#ad5522f028dde0080b753279426415a4a\">clear</a>();</div>\n\
<div class=\"line\">            holeVertices.<a class=\"code\" href=\"#!/url=./cpp_ref/class_m_int_array.html#ad5522f028dde0080b753279426415a4a\">clear</a>();</div>\n\
<div class=\"line\">            </div>\n\
<div class=\"line\">            <span class=\"comment\">// get the holes</span></div>\n\
<div class=\"line\">            <span class=\"comment\">//</span></div>\n\
<div class=\"line\">            <span class=\"keywordtype\">int</span> numHoles = fnMesh.getHoles( holeInfo, holeVertices, &amp;holeStatus );</div>\n\
<div class=\"line\">            <span class=\"keywordflow\">if</span>( holeStatus == <a class=\"code\" href=\"#!/url=./cpp_ref/class_m_status.html#a02ab596f4febca68da503aaf8dde3a80af0536797208144380691e2b376ffc1d1\">MS::kSuccess</a> )</div>\n\
<div class=\"line\">            {</div>\n\
<div class=\"line\">                cout&lt;&lt;<span class=\"stringliteral\">&quot;    Poly has &quot;</span>&lt;&lt;numHoles&lt;&lt;<span class=\"stringliteral\">&quot; holes&quot;</span>&lt;&lt;endl;</div>\n\
<div class=\"line\"></div>\n\
<div class=\"line\">                <span class=\"keywordflow\">for</span>( <span class=\"keywordtype\">int</span> h = 0; h &lt; numHoles; h++ )</div>\n\
<div class=\"line\">                {</div>\n\
<div class=\"line\">                    <span class=\"comment\">// retrieve the hole face index, number of hole vertices, and</span></div>\n\
<div class=\"line\">                    <span class=\"comment\">// hole vertex list start index for the current hole.</span></div>\n\
<div class=\"line\">                    <span class=\"comment\">//</span></div>\n\
<div class=\"line\">                    <span class=\"keywordtype\">int</span> holeFace = holeInfo[3*h];</div>\n\
<div class=\"line\">                    <span class=\"keywordtype\">int</span> holeNumVertices = holeInfo[3*h+1];</div>\n\
<div class=\"line\">                    <span class=\"keywordtype\">int</span> holeStartIndex = holeInfo[3*h+2];</div>\n\
<div class=\"line\"></div>\n\
<div class=\"line\">                    cout&lt;&lt;<span class=\"stringliteral\">&quot;    Hole &quot;</span>&lt;&lt;h&lt;&lt;<span class=\"stringliteral\">&quot;:&quot;</span>&lt;&lt;endl;</div>\n\
<div class=\"line\">                    cout&lt;&lt;<span class=\"stringliteral\">&quot;        Face &quot;</span>&lt;&lt;holeFace&lt;&lt;endl;</div>\n\
<div class=\"line\">                    cout&lt;&lt;<span class=\"stringliteral\">&quot;        Start index &quot;</span>&lt;&lt;holeStartIndex&lt;&lt;endl;</div>\n\
<div class=\"line\">                    cout&lt;&lt;<span class=\"stringliteral\">&quot;        &quot;</span>&lt;&lt;holeNumVertices&lt;&lt;<span class=\"stringliteral\">&quot; vertices: &quot;</span>;</div>\n\
<div class=\"line\"></div>\n\
<div class=\"line\">                    <span class=\"comment\">// retrieve the hole vertex indices from the &#39;holeVertices&#39;</span></div>\n\
<div class=\"line\">                    <span class=\"comment\">// array.  The indices are a list of &#39;holeNumVertices&#39; entries,</span></div>\n\
<div class=\"line\">                    <span class=\"comment\">// starting at index &#39;holeStartIndex&#39;.</span></div>\n\
<div class=\"line\">                    <span class=\"comment\">//</span></div>\n\
<div class=\"line\">                    <span class=\"keywordflow\">for</span>( <span class=\"keywordtype\">int</span> v = 0; v &lt; holeNumVertices; v++ )</div>\n\
<div class=\"line\">                    {</div>\n\
<div class=\"line\">                        <span class=\"keywordtype\">int</span> index = holeStartIndex + v;</div>\n\
<div class=\"line\">                        cout&lt;&lt;holeVertices[index];</div>\n\
<div class=\"line\">                    }</div>\n\
<div class=\"line\"></div>\n\
<div class=\"line\">                    cout&lt;&lt;endl;</div>\n\
<div class=\"line\">                }</div>\n\
<div class=\"line\">                </div>\n\
<div class=\"line\">            }</div>\n\
<div class=\"line\">            <span class=\"keywordflow\">else</span></div>\n\
<div class=\"line\">            {</div>\n\
<div class=\"line\">                <span class=\"comment\">// something went wrong trying to retrieve the poly holes</span></div>\n\
<div class=\"line\">                <span class=\"comment\">//</span></div>\n\
<div class=\"line\">                cout&lt;&lt;<span class=\"stringliteral\">&quot;    Error retrieving polygon holes&quot;</span>&lt;&lt;endl;</div>\n\
<div class=\"line\">                stat = <a class=\"code\" href=\"#!/url=./cpp_ref/class_m_status.html#a02ab596f4febca68da503aaf8dde3a80a1ef6c2d725fb4bec3e7e840d28adbc00\">MS::kFailure</a>;</div>\n\
<div class=\"line\">            }</div>\n\
<div class=\"line\">        }</div>\n\
<div class=\"line\">        <span class=\"keywordflow\">else</span></div>\n\
<div class=\"line\">        {</div>\n\
<div class=\"line\">            <span class=\"comment\">// the current selection item was not a polymesh, so we can&#39;t retrieve</span></div>\n\
<div class=\"line\">            <span class=\"comment\">// holes for it.</span></div>\n\
<div class=\"line\">            <span class=\"comment\">//</span></div>\n\
<div class=\"line\">            cout&lt;&lt;<span class=\"stringliteral\">&quot; Error - object is not a polymesh&quot;</span>&lt;&lt;endl;</div>\n\
<div class=\"line\">            stat = <a class=\"code\" href=\"#!/url=./cpp_ref/class_m_status.html#a02ab596f4febca68da503aaf8dde3a80a1ef6c2d725fb4bec3e7e840d28adbc00\">MS::kFailure</a>;</div>\n\
<div class=\"line\">        }</div>\n\
<div class=\"line\">    }</div>\n\
<div class=\"line\">    </div>\n\
<div class=\"line\">    setResult( <span class=\"stringliteral\">&quot;listPolyHoles completed.&quot;</span> );</div>\n\
<div class=\"line\">    <span class=\"keywordflow\">return</span> stat;</div>\n\
<div class=\"line\">}</div>\n\
<div class=\"line\"></div>\n\
<div class=\"line\"></div>\n\
<div class=\"line\"></div>\n\
<div class=\"line\"></div>\n\
</div><!-- fragment --> </div><!-- contents -->\n\
</div><!-- doc-content -->\n\
          <div class=\"footer-block\"><a href=\"../html/ac.cmtdialog.htm\" class=\"comments-anchor\" target=\"_blank\"><span class=\"comments-link\">Please send us your comment about this page</span></a></div><br></div>\n\
   </div></body>\n\
</html>\n\
";