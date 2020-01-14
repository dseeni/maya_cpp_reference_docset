var topic = "<!-- saved from url=(0024)http://docs.autodesk.com -->\n\
<html>\n\
   <head><script src=\"../scripts/yepnope.1.5.4-min.js\" type=\"text/javascript\"></script><script src=\"../scripts/lib/jquery-1.11.1.min.js\" type=\"text/javascript\"></script>\n\
      <title>C++ API Reference: dagPoseInfoCmd/dagPoseInfoCmd.cpp</title>\n\
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
    cpp_ref_adsk_ref_toc.initNavTree(\'dag_pose_info_cmd_2dag_pose_info_cmd_8cpp-example.html\', tocPrefix);\n\
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
            <h1>C++ API Reference: dagPoseInfoCmd/dagPoseInfoCmd.cpp</h1>\n\
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
<div class=\"title\">dagPoseInfoCmd/dagPoseInfoCmd.cpp</div>  </div>\n\
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
<div class=\"line\"><span class=\"comment\">//</span></div>\n\
<div class=\"line\"><span class=\"comment\">// Description:</span></div>\n\
<div class=\"line\"><span class=\"comment\">//   This is an example of a command that writes information about the</span></div>\n\
<div class=\"line\"><span class=\"comment\">//   dag pose of selected joints out to a file.</span></div>\n\
<div class=\"line\"><span class=\"comment\">//</span></div>\n\
<div class=\"line\"><span class=\"comment\">//   To use the command, select the joints that you want data for and</span></div>\n\
<div class=\"line\"><span class=\"comment\">//   then type the command, being sure to use the -f/-file flag to specify</span></div>\n\
<div class=\"line\"><span class=\"comment\">//   the name of the file to write to.</span></div>\n\
<div class=\"line\"><span class=\"comment\">//</span></div>\n\
<div class=\"line\"><span class=\"comment\">//      dagPoseInfo -f &lt;fileName&gt;</span></div>\n\
<div class=\"line\"><span class=\"comment\">//</span></div>\n\
<div class=\"line\"><span class=\"comment\">//   For example:</span></div>\n\
<div class=\"line\"><span class=\"comment\">//</span></div>\n\
<div class=\"line\"><span class=\"comment\">//      dagPoseInfo -f &quot;C:/temp/poseData&quot;</span></div>\n\
<div class=\"line\"><span class=\"comment\">//</span></div>\n\
<div class=\"line\"><span class=\"comment\">//   The output format used is:</span></div>\n\
<div class=\"line\"><span class=\"comment\">//      &lt;jointName&gt;</span></div>\n\
<div class=\"line\"><span class=\"comment\">//      &lt;poseName&gt;</span></div>\n\
<div class=\"line\"><span class=\"comment\">//      worldMatrix</span></div>\n\
<div class=\"line\"><span class=\"comment\">//      1 0 0 0</span></div>\n\
<div class=\"line\"><span class=\"comment\">//      0 1 0 0</span></div>\n\
<div class=\"line\"><span class=\"comment\">//      0 0 1 0</span></div>\n\
<div class=\"line\"><span class=\"comment\">//      0 0 0 1</span></div>\n\
<div class=\"line\"><span class=\"comment\">//      matrix</span></div>\n\
<div class=\"line\"><span class=\"comment\">//      1 0 0 0</span></div>\n\
<div class=\"line\"><span class=\"comment\">//      0 1 0 0</span></div>\n\
<div class=\"line\"><span class=\"comment\">//      0 0 1 0</span></div>\n\
<div class=\"line\"><span class=\"comment\">//      0 0 0 1</span></div>\n\
<div class=\"line\"><span class=\"comment\">// </span></div>\n\
<div class=\"line\"><span class=\"comment\">//   Note that the pose node stores the local matrix data in a transformation</span></div>\n\
<div class=\"line\"><span class=\"comment\">//   matrix, so that if one wanted to extract only the rotation components</span></div>\n\
<div class=\"line\"><span class=\"comment\">//   of the pose rather than the entire local matrix, one could do so using</span></div>\n\
<div class=\"line\"><span class=\"comment\">//   the MTransformationMatrix function set.</span></div>\n\
<div class=\"line\"><span class=\"comment\">//</span></div>\n\
<div class=\"line\"><span class=\"comment\">//   Also note that if you want just the bindPose data, rather than data about</span></div>\n\
<div class=\"line\"><span class=\"comment\">//   all of the poses on a joint, you could restrict the output to dagPose</span></div>\n\
<div class=\"line\"><span class=\"comment\">//   nodes for which the &quot;dagPose&quot; attribute is true.</span></div>\n\
<div class=\"line\"><span class=\"comment\">//</span></div>\n\
<div class=\"line\"></div>\n\
<div class=\"line\"><span class=\"preprocessor\">#include &lt;math.h&gt;</span></div>\n\
<div class=\"line\"><span class=\"preprocessor\">#include &lt;maya/MPxCommand.h&gt;</span></div>\n\
<div class=\"line\"><span class=\"preprocessor\">#include &lt;maya/MStatus.h&gt;</span></div>\n\
<div class=\"line\"><span class=\"preprocessor\">#include &lt;maya/MArgList.h&gt;</span></div>\n\
<div class=\"line\"><span class=\"preprocessor\">#include &lt;maya/MFnPlugin.h&gt;</span></div>\n\
<div class=\"line\"><span class=\"preprocessor\">#include &lt;maya/MObject.h&gt;</span></div>\n\
<div class=\"line\"><span class=\"preprocessor\">#include &lt;maya/MGlobal.h&gt;</span></div>\n\
<div class=\"line\"><span class=\"preprocessor\">#include &lt;maya/MDagPath.h&gt;</span></div>\n\
<div class=\"line\"><span class=\"preprocessor\">#include &lt;maya/MDagPathArray.h&gt;</span></div>\n\
<div class=\"line\"><span class=\"preprocessor\">#include &lt;maya/MItSelectionList.h&gt;</span></div>\n\
<div class=\"line\"><span class=\"preprocessor\">#include &lt;maya/MSelectionList.h&gt;</span></div>\n\
<div class=\"line\"><span class=\"preprocessor\">#include &lt;maya/MPlug.h&gt;</span></div>\n\
<div class=\"line\"><span class=\"preprocessor\">#include &lt;maya/MPlugArray.h&gt;</span></div>\n\
<div class=\"line\"><span class=\"preprocessor\">#include &lt;maya/MTransformationMatrix.h&gt;</span></div>\n\
<div class=\"line\"><span class=\"preprocessor\">#include &lt;maya/MMatrix.h&gt;</span></div>\n\
<div class=\"line\"><span class=\"preprocessor\">#include &lt;maya/MFnMatrixData.h&gt;</span></div>\n\
<div class=\"line\"><span class=\"preprocessor\">#include &lt;maya/MFnDependencyNode.h&gt;</span></div>\n\
<div class=\"line\"><span class=\"preprocessor\">#include &lt;maya/MFnAttribute.h&gt;</span></div>\n\
<div class=\"line\"></div>\n\
<div class=\"line\"><span class=\"preprocessor\">#include &lt;maya/MIOStream.h&gt;</span></div>\n\
<div class=\"line\"></div>\n\
<div class=\"line\"><span class=\"preprocessor\">#define CheckError(stat,msg)        \\</span></div>\n\
<div class=\"line\"><span class=\"preprocessor\">    if ( MS::kSuccess != stat ) {   \\</span></div>\n\
<div class=\"line\"><span class=\"preprocessor\">        displayError(msg);          \\</span></div>\n\
<div class=\"line\"><span class=\"preprocessor\">        continue;                   \\</span></div>\n\
<div class=\"line\"><span class=\"preprocessor\">    }</span></div>\n\
<div class=\"line\"></div>\n\
<div class=\"line\"></div>\n\
<div class=\"line\"><span class=\"keyword\">class </span>dagPoseInfo : <span class=\"keyword\">public</span> <a name=\"_a0\"></a><a class=\"code\" href=\"#!/url=./cpp_ref/class_m_px_command.html\">MPxCommand</a></div>\n\
<div class=\"line\">{</div>\n\
<div class=\"line\"><span class=\"keyword\">public</span>:</div>\n\
<div class=\"line\">                dagPoseInfo();</div>\n\
<div class=\"line\">        ~dagPoseInfo() <span class=\"keyword\">override</span>;</div>\n\
<div class=\"line\"></div>\n\
<div class=\"line\">    <a name=\"_a1\"></a><a class=\"code\" href=\"#!/url=./cpp_ref/class_m_status.html\">MStatus</a>     parseArgs( <span class=\"keyword\">const</span> <a name=\"_a2\"></a><a class=\"code\" href=\"#!/url=./cpp_ref/class_m_arg_list.html\">MArgList</a>&amp; args );</div>\n\
<div class=\"line\">    <a class=\"code\" href=\"#!/url=./cpp_ref/class_m_status.html\">MStatus</a>     <a name=\"a3\"></a><a class=\"code\" href=\"#!/url=./cpp_ref/class_m_px_command.html#ade7d0a873cbe811d6eab464e695390a9\">doIt</a> ( <span class=\"keyword\">const</span> <a class=\"code\" href=\"#!/url=./cpp_ref/class_m_arg_list.html\">MArgList</a>&amp; args ) <span class=\"keyword\">override</span>;</div>\n\
<div class=\"line\">    <a class=\"code\" href=\"#!/url=./cpp_ref/class_m_status.html\">MStatus</a>     <a name=\"a4\"></a><a class=\"code\" href=\"#!/url=./cpp_ref/class_m_px_command.html#a3b583cbc082553f11853db459b2f7795\">redoIt</a> () <span class=\"keyword\">override</span>;</div>\n\
<div class=\"line\">    <a class=\"code\" href=\"#!/url=./cpp_ref/class_m_status.html\">MStatus</a>     <a name=\"a5\"></a><a class=\"code\" href=\"#!/url=./cpp_ref/class_m_px_command.html#a0789a8d51244cad0495abb2b811c39db\">undoIt</a> () <span class=\"keyword\">override</span>;</div>\n\
<div class=\"line\">    <span class=\"keywordtype\">bool</span>        <a name=\"a6\"></a><a class=\"code\" href=\"#!/url=./cpp_ref/class_m_px_command.html#a2f6c567cc02d575ab14006d9c5e37761\">isUndoable</a>() <span class=\"keyword\">const override</span>;</div>\n\
<div class=\"line\"></div>\n\
<div class=\"line\">    <span class=\"keyword\">static</span>      <span class=\"keywordtype\">void</span>* creator();</div>\n\
<div class=\"line\"></div>\n\
<div class=\"line\"><span class=\"keyword\">private</span>:</div>\n\
<div class=\"line\">    <span class=\"keywordtype\">void</span>        printDagPoseInfo(<a name=\"_a7\"></a><a class=\"code\" href=\"#!/url=./cpp_ref/class_m_object.html\">MObject</a>&amp; dagPoseNode, <span class=\"keywordtype\">unsigned</span> index);</div>\n\
<div class=\"line\">    <span class=\"keywordtype\">bool</span>        findDagPose(<a class=\"code\" href=\"#!/url=./cpp_ref/class_m_object.html\">MObject</a>&amp; jointNode);</div>\n\
<div class=\"line\">    FILE*       file;</div>\n\
<div class=\"line\">};</div>\n\
<div class=\"line\"></div>\n\
<div class=\"line\">dagPoseInfo::dagPoseInfo():</div>\n\
<div class=\"line\">file(NULL)</div>\n\
<div class=\"line\">{</div>\n\
<div class=\"line\">}</div>\n\
<div class=\"line\"></div>\n\
<div class=\"line\">dagPoseInfo::~dagPoseInfo() {}</div>\n\
<div class=\"line\"></div>\n\
<div class=\"line\"><span class=\"keywordtype\">void</span>* dagPoseInfo::creator()</div>\n\
<div class=\"line\">{</div>\n\
<div class=\"line\">    <span class=\"keywordflow\">return</span> <span class=\"keyword\">new</span> dagPoseInfo;</div>\n\
<div class=\"line\">}</div>\n\
<div class=\"line\"></div>\n\
<div class=\"line\"><span class=\"keywordtype\">bool</span> dagPoseInfo::isUndoable()<span class=\"keyword\"> const</span></div>\n\
<div class=\"line\"><span class=\"keyword\"></span>{</div>\n\
<div class=\"line\">    <span class=\"keywordflow\">return</span> <span class=\"keyword\">false</span>;</div>\n\
<div class=\"line\">}</div>\n\
<div class=\"line\"></div>\n\
<div class=\"line\"><a class=\"code\" href=\"#!/url=./cpp_ref/class_m_status.html\">MStatus</a> dagPoseInfo::undoIt()</div>\n\
<div class=\"line\">{</div>\n\
<div class=\"line\">    <span class=\"keywordflow\">return</span> MS::kSuccess;</div>\n\
<div class=\"line\">}</div>\n\
<div class=\"line\"></div>\n\
<div class=\"line\"><a class=\"code\" href=\"#!/url=./cpp_ref/class_m_status.html\">MStatus</a> dagPoseInfo::parseArgs( <span class=\"keyword\">const</span> <a class=\"code\" href=\"#!/url=./cpp_ref/class_m_arg_list.html\">MArgList</a>&amp; args )</div>\n\
<div class=\"line\"><span class=\"comment\">//</span></div>\n\
<div class=\"line\"><span class=\"comment\">// There is one mandatory flag: -f/-file &lt;filename&gt;</span></div>\n\
<div class=\"line\"><span class=\"comment\">//</span></div>\n\
<div class=\"line\">{</div>\n\
<div class=\"line\">    <a class=\"code\" href=\"#!/url=./cpp_ref/class_m_status.html\">MStatus</a>         stat;</div>\n\
<div class=\"line\">    <a name=\"_a8\"></a><a class=\"code\" href=\"#!/url=./cpp_ref/class_m_string.html\">MString</a>         arg;</div>\n\
<div class=\"line\">    <a class=\"code\" href=\"#!/url=./cpp_ref/class_m_string.html\">MString</a>         fileName;</div>\n\
<div class=\"line\">    <span class=\"keyword\">const</span> <a class=\"code\" href=\"#!/url=./cpp_ref/class_m_string.html\">MString</a>   fileFlag            (<span class=\"stringliteral\">&quot;-f&quot;</span>);</div>\n\
<div class=\"line\">    <span class=\"keyword\">const</span> <a class=\"code\" href=\"#!/url=./cpp_ref/class_m_string.html\">MString</a>   fileFlagLong        (<span class=\"stringliteral\">&quot;-file&quot;</span>);</div>\n\
<div class=\"line\"></div>\n\
<div class=\"line\">    <span class=\"comment\">// Parse the arguments.</span></div>\n\
<div class=\"line\">    <span class=\"keywordflow\">for</span> ( <span class=\"keywordtype\">unsigned</span> <span class=\"keywordtype\">int</span> i = 0; i &lt; args.<a name=\"a9\"></a><a class=\"code\" href=\"#!/url=./cpp_ref/class_m_arg_list.html#a99dd6a54b909ede1d11702fe58977e2a\">length</a>(); i++ ) {</div>\n\
<div class=\"line\">        arg = args.<a name=\"a10\"></a><a class=\"code\" href=\"#!/url=./cpp_ref/class_m_arg_list.html#ad24ff3826e4df513b55e1a0ecb0a665b\">asString</a>( i, &amp;stat );</div>\n\
<div class=\"line\">        <span class=\"keywordflow\">if</span> (!stat)              </div>\n\
<div class=\"line\">            <span class=\"keywordflow\">continue</span>;</div>\n\
<div class=\"line\">                </div>\n\
<div class=\"line\">        <span class=\"keywordflow\">if</span> ( arg == fileFlag || arg == fileFlagLong ) {</div>\n\
<div class=\"line\">            <span class=\"comment\">// get the file name</span></div>\n\
<div class=\"line\">            <span class=\"comment\">//</span></div>\n\
<div class=\"line\">            <span class=\"keywordflow\">if</span> (i == args.<a class=\"code\" href=\"#!/url=./cpp_ref/class_m_arg_list.html#a99dd6a54b909ede1d11702fe58977e2a\">length</a>()-1) {</div>\n\
<div class=\"line\">                arg += <span class=\"stringliteral\">&quot;: must specify a file name&quot;</span>;</div>\n\
<div class=\"line\">                displayError(arg);</div>\n\
<div class=\"line\">                <span class=\"keywordflow\">return</span> MS::kFailure;</div>\n\
<div class=\"line\">            }</div>\n\
<div class=\"line\">            i++;</div>\n\
<div class=\"line\">            args.<a name=\"a11\"></a><a class=\"code\" href=\"#!/url=./cpp_ref/class_m_arg_list.html#adc169cdc872457a2664c3d66c29cf504\">get</a>(i, fileName);</div>\n\
<div class=\"line\">        }</div>\n\
<div class=\"line\">        <span class=\"keywordflow\">else</span> {</div>\n\
<div class=\"line\">            arg += <span class=\"stringliteral\">&quot;: unknown argument&quot;</span>;</div>\n\
<div class=\"line\">            displayError(arg);</div>\n\
<div class=\"line\">            <span class=\"keywordflow\">return</span> MS::kFailure;</div>\n\
<div class=\"line\">        }</div>\n\
<div class=\"line\">    }</div>\n\
<div class=\"line\"></div>\n\
<div class=\"line\">    file = fopen(fileName.<a name=\"a12\"></a><a class=\"code\" href=\"#!/url=./cpp_ref/class_m_string.html#aa9ab612f356c53479afc4c648c9ef94d\">asChar</a>(),<span class=\"stringliteral\">&quot;wb&quot;</span>);</div>\n\
<div class=\"line\">    <span class=\"keywordflow\">if</span> (!file) {</div>\n\
<div class=\"line\">        <a class=\"code\" href=\"#!/url=./cpp_ref/class_m_string.html\">MString</a> openError(<span class=\"stringliteral\">&quot;Could not open: &quot;</span>);</div>\n\
<div class=\"line\">        openError += fileName;</div>\n\
<div class=\"line\">        displayError(openError);</div>\n\
<div class=\"line\">        stat = MS::kFailure;</div>\n\
<div class=\"line\">    }</div>\n\
<div class=\"line\">    </div>\n\
<div class=\"line\">    <span class=\"keywordflow\">return</span> stat;</div>\n\
<div class=\"line\">}</div>\n\
<div class=\"line\"></div>\n\
<div class=\"line\"><span class=\"keywordtype\">void</span> dagPoseInfo::printDagPoseInfo(<a class=\"code\" href=\"#!/url=./cpp_ref/class_m_object.html\">MObject</a>&amp; dagPoseNode, <span class=\"keywordtype\">unsigned</span> index)</div>\n\
<div class=\"line\"><span class=\"comment\">//</span></div>\n\
<div class=\"line\"><span class=\"comment\">// Description:</span></div>\n\
<div class=\"line\"><span class=\"comment\">//   Given a dagPose and an index corresponding to a joint, print out</span></div>\n\
<div class=\"line\"><span class=\"comment\">//   the matrix info for the joint.</span></div>\n\
<div class=\"line\"><span class=\"comment\">// Return:</span></div>\n\
<div class=\"line\"><span class=\"comment\">//   None.</span></div>\n\
<div class=\"line\"><span class=\"comment\">//</span></div>\n\
<div class=\"line\">{</div>\n\
<div class=\"line\">    <a name=\"_a13\"></a><a class=\"code\" href=\"#!/url=./cpp_ref/class_m_fn_dependency_node.html\">MFnDependencyNode</a> nDagPose(dagPoseNode);</div>\n\
<div class=\"line\">    fprintf(file,<span class=\"stringliteral\">&quot;%s\\n&quot;</span>,nDagPose.name().asChar());</div>\n\
<div class=\"line\"></div>\n\
<div class=\"line\">    <span class=\"comment\">// construct plugs for this joints world and local matrices</span></div>\n\
<div class=\"line\">    <span class=\"comment\">//</span></div>\n\
<div class=\"line\">    <a class=\"code\" href=\"#!/url=./cpp_ref/class_m_object.html\">MObject</a> aWorldMatrix = nDagPose.attribute(<span class=\"stringliteral\">&quot;worldMatrix&quot;</span>);</div>\n\
<div class=\"line\">    <a name=\"_a14\"></a><a class=\"code\" href=\"#!/url=./cpp_ref/class_m_plug.html\">MPlug</a> pWorldMatrix(dagPoseNode,aWorldMatrix);</div>\n\
<div class=\"line\">    pWorldMatrix.selectAncestorLogicalIndex(index,aWorldMatrix);</div>\n\
<div class=\"line\">    </div>\n\
<div class=\"line\">    <a class=\"code\" href=\"#!/url=./cpp_ref/class_m_object.html\">MObject</a> aMatrix = nDagPose.attribute(<span class=\"stringliteral\">&quot;xformMatrix&quot;</span>);</div>\n\
<div class=\"line\">    <a class=\"code\" href=\"#!/url=./cpp_ref/class_m_plug.html\">MPlug</a> pMatrix(dagPoseNode,aMatrix);</div>\n\
<div class=\"line\">    pMatrix.selectAncestorLogicalIndex(index,aMatrix);</div>\n\
<div class=\"line\"></div>\n\
<div class=\"line\">    <span class=\"comment\">// get and print the world matrix data</span></div>\n\
<div class=\"line\">    <span class=\"comment\">//</span></div>\n\
<div class=\"line\">    <a class=\"code\" href=\"#!/url=./cpp_ref/class_m_object.html\">MObject</a> worldMatrix, xformMatrix;</div>\n\
<div class=\"line\">    <a class=\"code\" href=\"#!/url=./cpp_ref/class_m_status.html\">MStatus</a> status = pWorldMatrix.getValue(worldMatrix);</div>\n\
<div class=\"line\">    <span class=\"keywordflow\">if</span> (MS::kSuccess != status) {</div>\n\
<div class=\"line\">        displayError(<span class=\"stringliteral\">&quot;Problem retrieving world matrix.&quot;</span>);</div>\n\
<div class=\"line\">    } <span class=\"keywordflow\">else</span> {</div>\n\
<div class=\"line\">        <span class=\"keywordtype\">bool</span> foundMatrix = 0;</div>\n\
<div class=\"line\">        <a name=\"_a15\"></a><a class=\"code\" href=\"#!/url=./cpp_ref/class_m_fn_matrix_data.html\">MFnMatrixData</a> dMatrix(worldMatrix);</div>\n\
<div class=\"line\">        <a name=\"_a16\"></a><a class=\"code\" href=\"#!/url=./cpp_ref/class_m_matrix.html\">MMatrix</a> wMatrix = dMatrix.<a name=\"a17\"></a><a class=\"code\" href=\"#!/url=./cpp_ref/class_m_matrix.html#a527b102f4eb0951cf4f391f828d3ca34\">matrix</a>(&amp;status);</div>\n\
<div class=\"line\">        <span class=\"keywordflow\">if</span> (MS::kSuccess == status) {</div>\n\
<div class=\"line\">            foundMatrix = 1;</div>\n\
<div class=\"line\">            <span class=\"keywordtype\">unsigned</span> jj,kk;</div>\n\
<div class=\"line\">            fprintf(file,<span class=\"stringliteral\">&quot;worldMatrix\\n&quot;</span>);</div>\n\
<div class=\"line\">            <span class=\"keywordflow\">for</span> (jj = 0; jj &lt; 4; ++jj) {</div>\n\
<div class=\"line\">                <span class=\"keywordflow\">for</span> (kk = 0; kk &lt; 4; ++kk) {</div>\n\
<div class=\"line\">                    <span class=\"keywordtype\">double</span> val = wMatrix(jj,kk);</div>\n\
<div class=\"line\">                    fprintf(file,<span class=\"stringliteral\">&quot;%f &quot;</span>,val);</div>\n\
<div class=\"line\">                }</div>\n\
<div class=\"line\">                fprintf(file,<span class=\"stringliteral\">&quot;\\n&quot;</span>);</div>\n\
<div class=\"line\">            }</div>\n\
<div class=\"line\">        }</div>\n\
<div class=\"line\">        <span class=\"keywordflow\">if</span> (!foundMatrix) {</div>\n\
<div class=\"line\">            displayError(<span class=\"stringliteral\">&quot;Error getting world matrix data.&quot;</span>);</div>\n\
<div class=\"line\">        }</div>\n\
<div class=\"line\">    }</div>\n\
<div class=\"line\"></div>\n\
<div class=\"line\">    <span class=\"comment\">// get and print the local matrix data</span></div>\n\
<div class=\"line\">    <span class=\"comment\">//</span></div>\n\
<div class=\"line\">    status = pMatrix.getValue(xformMatrix);</div>\n\
<div class=\"line\">    <span class=\"keywordflow\">if</span> (MS::kSuccess != status) {</div>\n\
<div class=\"line\">        displayError(<span class=\"stringliteral\">&quot;Problem retrieving xform matrix.&quot;</span>);</div>\n\
<div class=\"line\">    } <span class=\"keywordflow\">else</span> {</div>\n\
<div class=\"line\">        <span class=\"keywordtype\">bool</span> foundMatrix = 0;</div>\n\
<div class=\"line\">        <a class=\"code\" href=\"#!/url=./cpp_ref/class_m_fn_matrix_data.html\">MFnMatrixData</a> dMatrix(xformMatrix);</div>\n\
<div class=\"line\">        <span class=\"keywordflow\">if</span> (dMatrix.isTransformation()) {</div>\n\
<div class=\"line\">            <a name=\"_a18\"></a><a class=\"code\" href=\"#!/url=./cpp_ref/class_m_transformation_matrix.html\">MTransformationMatrix</a> xform = dMatrix.transformation(&amp;status);</div>\n\
<div class=\"line\">            <span class=\"keywordflow\">if</span> (MS::kSuccess == status) {</div>\n\
<div class=\"line\">                foundMatrix = 1;</div>\n\
<div class=\"line\">                <a class=\"code\" href=\"#!/url=./cpp_ref/class_m_matrix.html\">MMatrix</a> xformAsMatrix = xform.<a name=\"a19\"></a><a class=\"code\" href=\"#!/url=./cpp_ref/class_m_transformation_matrix.html#a8e2933c5f73e8cfb7409366582caa596\">asMatrix</a>();</div>\n\
<div class=\"line\">                <span class=\"keywordtype\">unsigned</span> jj,kk;</div>\n\
<div class=\"line\">                fprintf(file,<span class=\"stringliteral\">&quot;matrix\\n&quot;</span>);</div>\n\
<div class=\"line\">                <span class=\"keywordflow\">for</span> (jj = 0; jj &lt; 4; ++jj) {</div>\n\
<div class=\"line\">                    <span class=\"keywordflow\">for</span> (kk = 0; kk &lt; 4; ++kk) {</div>\n\
<div class=\"line\">                        <span class=\"keywordtype\">double</span> val = xformAsMatrix(jj,kk);</div>\n\
<div class=\"line\">                        fprintf(file,<span class=\"stringliteral\">&quot;%f &quot;</span>,val);</div>\n\
<div class=\"line\">                    }</div>\n\
<div class=\"line\">                    fprintf(file,<span class=\"stringliteral\">&quot;\\n&quot;</span>);</div>\n\
<div class=\"line\">                }</div>\n\
<div class=\"line\">            }</div>\n\
<div class=\"line\">        }</div>\n\
<div class=\"line\">        <span class=\"keywordflow\">if</span> (!foundMatrix) {</div>\n\
<div class=\"line\">            displayError(<span class=\"stringliteral\">&quot;Error getting local matrix data.&quot;</span>);</div>\n\
<div class=\"line\">        }</div>\n\
<div class=\"line\">    }</div>\n\
<div class=\"line\">}</div>\n\
<div class=\"line\"></div>\n\
<div class=\"line\"><span class=\"keywordtype\">bool</span> dagPoseInfo::findDagPose(<a class=\"code\" href=\"#!/url=./cpp_ref/class_m_object.html\">MObject</a>&amp; jointNode)</div>\n\
<div class=\"line\"><span class=\"comment\">//</span></div>\n\
<div class=\"line\"><span class=\"comment\">// Description:</span></div>\n\
<div class=\"line\"><span class=\"comment\">//   Given a joint, check for connected dag pose nodes.</span></div>\n\
<div class=\"line\"><span class=\"comment\">//   For each pose found, write out the pose info.</span></div>\n\
<div class=\"line\"><span class=\"comment\">// Return:</span></div>\n\
<div class=\"line\"><span class=\"comment\">//   If one or more poses is found, return true, else return false.</span></div>\n\
<div class=\"line\"><span class=\"comment\">//</span></div>\n\
<div class=\"line\">{</div>\n\
<div class=\"line\">    <span class=\"keywordtype\">bool</span> rtn = 0; <span class=\"comment\">// return 1 if we find a pose</span></div>\n\
<div class=\"line\"></div>\n\
<div class=\"line\">    <a class=\"code\" href=\"#!/url=./cpp_ref/class_m_status.html\">MStatus</a> status;</div>\n\
<div class=\"line\">    <a class=\"code\" href=\"#!/url=./cpp_ref/class_m_fn_dependency_node.html\">MFnDependencyNode</a> fnJoint(jointNode);</div>\n\
<div class=\"line\">    <a class=\"code\" href=\"#!/url=./cpp_ref/class_m_object.html\">MObject</a> aBindPose = fnJoint.attribute(<span class=\"stringliteral\">&quot;bindPose&quot;</span>,&amp;status);</div>\n\
<div class=\"line\"></div>\n\
<div class=\"line\">    <span class=\"keywordflow\">if</span> (MS::kSuccess == status) {</div>\n\
<div class=\"line\">        <span class=\"keywordtype\">unsigned</span> connLength = 0;</div>\n\
<div class=\"line\">        <a name=\"_a20\"></a><a class=\"code\" href=\"#!/url=./cpp_ref/class_m_plug_array.html\">MPlugArray</a> connPlugs;</div>\n\
<div class=\"line\">        <a class=\"code\" href=\"#!/url=./cpp_ref/class_m_plug.html\">MPlug</a> pBindPose(jointNode,aBindPose);</div>\n\
<div class=\"line\">        pBindPose.connectedTo(connPlugs,<span class=\"keyword\">false</span>,<span class=\"keyword\">true</span>);</div>\n\
<div class=\"line\">        connLength = connPlugs.<a name=\"a21\"></a><a class=\"code\" href=\"#!/url=./cpp_ref/class_m_plug_array.html#a580388f31f60c46fac867ca48a48da1e\">length</a>();</div>\n\
<div class=\"line\">        <span class=\"keywordflow\">for</span> (<span class=\"keywordtype\">unsigned</span> ii = 0; ii &lt; connLength; ++ii) {</div>\n\
<div class=\"line\">            <span class=\"keywordflow\">if</span> (connPlugs[ii].node().apiType() == <a name=\"a22\"></a><a class=\"code\" href=\"#!/url=./cpp_ref/class_m_fn.html#a1d1cfd8ffb84e947f82999c682b666a7a71a117eb3e72a2c29f2e337d1ba6d610\">MFn::kDagPose</a>) {</div>\n\
<div class=\"line\">                <a class=\"code\" href=\"#!/url=./cpp_ref/class_m_object.html\">MObject</a> aMember = connPlugs[ii].attribute();</div>\n\
<div class=\"line\">                <a name=\"_a23\"></a><a class=\"code\" href=\"#!/url=./cpp_ref/class_m_fn_attribute.html\">MFnAttribute</a> fnAttr(aMember);</div>\n\
<div class=\"line\">                <span class=\"keywordflow\">if</span> (fnAttr.name() == <span class=\"stringliteral\">&quot;worldMatrix&quot;</span>) {</div>\n\
<div class=\"line\">                    <span class=\"keywordtype\">unsigned</span> jointIndex = connPlugs[ii].logicalIndex();</div>\n\
<div class=\"line\"></div>\n\
<div class=\"line\">                    fprintf(file,<span class=\"stringliteral\">&quot;%s\\n&quot;</span>,fnJoint.name().asChar());</div>\n\
<div class=\"line\">                    <a class=\"code\" href=\"#!/url=./cpp_ref/class_m_object.html\">MObject</a> jointObject = connPlugs[ii].node();</div>\n\
<div class=\"line\">                    printDagPoseInfo(jointObject,jointIndex);</div>\n\
<div class=\"line\">                    rtn = 1;</div>\n\
<div class=\"line\">                }</div>\n\
<div class=\"line\">            }</div>\n\
<div class=\"line\">        }</div>\n\
<div class=\"line\">    }</div>\n\
<div class=\"line\">    <span class=\"keywordflow\">return</span> rtn;</div>\n\
<div class=\"line\">}</div>\n\
<div class=\"line\"></div>\n\
<div class=\"line\"><a class=\"code\" href=\"#!/url=./cpp_ref/class_m_status.html\">MStatus</a> dagPoseInfo::doIt( <span class=\"keyword\">const</span> <a class=\"code\" href=\"#!/url=./cpp_ref/class_m_arg_list.html\">MArgList</a>&amp; args )</div>\n\
<div class=\"line\">{</div>\n\
<div class=\"line\">    <span class=\"comment\">// parse args to get the file name from the command-line</span></div>\n\
<div class=\"line\">    <span class=\"comment\">//</span></div>\n\
<div class=\"line\">    <a class=\"code\" href=\"#!/url=./cpp_ref/class_m_status.html\">MStatus</a> stat = parseArgs(args);</div>\n\
<div class=\"line\">    <span class=\"keywordflow\">if</span> (stat != MS::kSuccess) {</div>\n\
<div class=\"line\">        <span class=\"keywordflow\">return</span> stat;</div>\n\
<div class=\"line\">    }</div>\n\
<div class=\"line\">    </div>\n\
<div class=\"line\">    <span class=\"keywordtype\">unsigned</span> <span class=\"keywordtype\">int</span> count = 0;</div>\n\
<div class=\"line\"></div>\n\
<div class=\"line\">    <span class=\"comment\">// Get the selected joints/transforms, and for each of them print</span></div>\n\
<div class=\"line\">    <span class=\"comment\">// out the dagPose info</span></div>\n\
<div class=\"line\">    <span class=\"comment\">//</span></div>\n\
<div class=\"line\">    <a name=\"_a24\"></a><a class=\"code\" href=\"#!/url=./cpp_ref/class_m_selection_list.html\">MSelectionList</a> slist;</div>\n\
<div class=\"line\">    <a name=\"a25\"></a><a class=\"code\" href=\"#!/url=./cpp_ref/class_m_global.html#a6d81d38246555884897fb153c93aaf42\">MGlobal::getActiveSelectionList</a>( slist );</div>\n\
<div class=\"line\">    <a name=\"_a26\"></a><a class=\"code\" href=\"#!/url=./cpp_ref/class_m_it_selection_list.html\">MItSelectionList</a> itr( slist );</div>\n\
<div class=\"line\"></div>\n\
<div class=\"line\">    <span class=\"keywordflow\">for</span> (; !itr.isDone(); itr.next() )</div>\n\
<div class=\"line\">    {</div>\n\
<div class=\"line\">        <a class=\"code\" href=\"#!/url=./cpp_ref/class_m_object.html\">MObject</a> depNode;</div>\n\
<div class=\"line\">        itr.getDependNode(depNode);</div>\n\
<div class=\"line\">        <span class=\"keywordflow\">if</span> (depNode.<a name=\"a27\"></a><a class=\"code\" href=\"#!/url=./cpp_ref/class_m_object.html#a7e5fd5d37dde6df8c0cf350e00ca0a75\">apiType</a>() == <a name=\"a28\"></a><a class=\"code\" href=\"#!/url=./cpp_ref/class_m_fn.html#a1d1cfd8ffb84e947f82999c682b666a7ab8b14d1ed753088b316e8ee8c5d38ca9\">MFn::kJoint</a>) {</div>\n\
<div class=\"line\">            <span class=\"keywordflow\">if</span> (findDagPose(depNode)) {</div>\n\
<div class=\"line\">                count++;</div>\n\
<div class=\"line\">            }</div>\n\
<div class=\"line\">        }</div>\n\
<div class=\"line\">    }</div>\n\
<div class=\"line\"></div>\n\
<div class=\"line\">    fclose(file);</div>\n\
<div class=\"line\">    <span class=\"keywordflow\">if</span> (0 == count) {</div>\n\
<div class=\"line\">        displayError(<span class=\"stringliteral\">&quot;No poses were found on the selected joints.&quot;</span>);</div>\n\
<div class=\"line\">        <span class=\"keywordflow\">return</span> MS::kFailure;</div>\n\
<div class=\"line\">    }</div>\n\
<div class=\"line\">    </div>\n\
<div class=\"line\">    <span class=\"keywordflow\">return</span> MS::kSuccess;</div>\n\
<div class=\"line\">}</div>\n\
<div class=\"line\"></div>\n\
<div class=\"line\"><a class=\"code\" href=\"#!/url=./cpp_ref/class_m_status.html\">MStatus</a> dagPoseInfo::redoIt()</div>\n\
<div class=\"line\">{</div>\n\
<div class=\"line\">    clearResult();</div>\n\
<div class=\"line\">    setResult( (<span class=\"keywordtype\">int</span>) 1);</div>\n\
<div class=\"line\">    <span class=\"keywordflow\">return</span> MS::kSuccess;</div>\n\
<div class=\"line\">}</div>\n\
<div class=\"line\"></div>\n\
<div class=\"line\"><a class=\"code\" href=\"#!/url=./cpp_ref/class_m_status.html\">MStatus</a> initializePlugin( <a class=\"code\" href=\"#!/url=./cpp_ref/class_m_object.html\">MObject</a> obj )</div>\n\
<div class=\"line\">{</div>\n\
<div class=\"line\">    <a class=\"code\" href=\"#!/url=./cpp_ref/class_m_status.html\">MStatus</a>   status;</div>\n\
<div class=\"line\">    <a name=\"_a29\"></a><a class=\"code\" href=\"#!/url=./cpp_ref/class_m_fn_plugin.html\">MFnPlugin</a> plugin( obj, PLUGIN_COMPANY, <span class=\"stringliteral\">&quot;3.0&quot;</span>, <span class=\"stringliteral\">&quot;Any&quot;</span>);</div>\n\
<div class=\"line\"></div>\n\
<div class=\"line\">    status = plugin.registerCommand( <span class=\"stringliteral\">&quot;dagPoseInfo&quot;</span>, dagPoseInfo::creator );</div>\n\
<div class=\"line\">    <span class=\"keywordflow\">if</span> (!status) {</div>\n\
<div class=\"line\">        status.<a name=\"a30\"></a><a class=\"code\" href=\"#!/url=./cpp_ref/class_m_status.html#a1f01a4748fea4d8bcced082df83f804d\">perror</a>(<span class=\"stringliteral\">&quot;registerCommand&quot;</span>);</div>\n\
<div class=\"line\">        <span class=\"keywordflow\">return</span> status;</div>\n\
<div class=\"line\">    }</div>\n\
<div class=\"line\"></div>\n\
<div class=\"line\">    <span class=\"keywordflow\">return</span> status;</div>\n\
<div class=\"line\">}</div>\n\
<div class=\"line\"></div>\n\
<div class=\"line\"><a class=\"code\" href=\"#!/url=./cpp_ref/class_m_status.html\">MStatus</a> uninitializePlugin( <a class=\"code\" href=\"#!/url=./cpp_ref/class_m_object.html\">MObject</a> obj )</div>\n\
<div class=\"line\">{</div>\n\
<div class=\"line\">    <a class=\"code\" href=\"#!/url=./cpp_ref/class_m_status.html\">MStatus</a>   status;</div>\n\
<div class=\"line\">    <a class=\"code\" href=\"#!/url=./cpp_ref/class_m_fn_plugin.html\">MFnPlugin</a> plugin( obj );</div>\n\
<div class=\"line\"></div>\n\
<div class=\"line\">    status = plugin.deregisterCommand( <span class=\"stringliteral\">&quot;dagPoseInfo&quot;</span> );</div>\n\
<div class=\"line\">    <span class=\"keywordflow\">if</span> (!status) {</div>\n\
<div class=\"line\">        status.<a class=\"code\" href=\"#!/url=./cpp_ref/class_m_status.html#a1f01a4748fea4d8bcced082df83f804d\">perror</a>(<span class=\"stringliteral\">&quot;deregisterCommand&quot;</span>);</div>\n\
<div class=\"line\">    }</div>\n\
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