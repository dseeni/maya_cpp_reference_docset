var topic = "<!-- saved from url=(0024)http://docs.autodesk.com -->\n\
<html>\n\
   <head><script src=\"../scripts/yepnope.1.5.4-min.js\" type=\"text/javascript\"></script><script src=\"../scripts/lib/jquery-1.11.1.min.js\" type=\"text/javascript\"></script>\n\
      <title>C++ API Reference: multiPlugInfoCmd/multiPlugInfoCmd.cpp</title>\n\
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
    cpp_ref_adsk_ref_toc.initNavTree(\'multi_plug_info_cmd_2multi_plug_info_cmd_8cpp-example.html\', tocPrefix);\n\
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
            <h1>C++ API Reference: multiPlugInfoCmd/multiPlugInfoCmd.cpp</h1>\n\
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
<div class=\"title\">multiPlugInfoCmd/multiPlugInfoCmd.cpp</div>  </div>\n\
</div><!--header-->\n\
<div class=\"contents\">\n\
<div class=\"fragment\"><div class=\"line\"><span class=\"comment\">//-</span></div>\n\
<div class=\"line\"><span class=\"comment\">// ==========================================================================</span></div>\n\
<div class=\"line\"><span class=\"comment\">// Copyright 2010 Autodesk, Inc. All rights reserved.</span></div>\n\
<div class=\"line\"><span class=\"comment\">//</span></div>\n\
<div class=\"line\"><span class=\"comment\">// Use of this software is subject to the terms of the Autodesk</span></div>\n\
<div class=\"line\"><span class=\"comment\">// license agreement provided at the time of installation or download,</span></div>\n\
<div class=\"line\"><span class=\"comment\">// or which otherwise accompanies this software in either electronic</span></div>\n\
<div class=\"line\"><span class=\"comment\">// or hard copy form.</span></div>\n\
<div class=\"line\"><span class=\"comment\">// ==========================================================================</span></div>\n\
<div class=\"line\"><span class=\"comment\">//+</span></div>\n\
<div class=\"line\"></div>\n\
<div class=\"line\"><span class=\"comment\">//</span></div>\n\
<div class=\"line\"><span class=\"comment\">// multiPlugInfo.cpp</span></div>\n\
<div class=\"line\"><span class=\"comment\">//</span></div>\n\
<div class=\"line\"><span class=\"comment\">// This plugin prints out the child plug information for a multiPlug.</span></div>\n\
<div class=\"line\"><span class=\"comment\">// If the -index flag is used, the logical index values used by the plug</span></div>\n\
<div class=\"line\"><span class=\"comment\">// will be returned.  Otherwise, the plug values will be returned.</span></div>\n\
<div class=\"line\"><span class=\"comment\">//</span></div>\n\
<div class=\"line\"><span class=\"comment\"></span></div>\n\
<div class=\"line\"><span class=\"preprocessor\">#include &lt;maya/MFnPlugin.h&gt;</span></div>\n\
<div class=\"line\"><span class=\"preprocessor\">#include &lt;maya/MPxCommand.h&gt;</span></div>\n\
<div class=\"line\"><span class=\"preprocessor\">#include &lt;maya/MArgDatabase.h&gt;</span></div>\n\
<div class=\"line\"><span class=\"preprocessor\">#include &lt;maya/MArgList.h&gt;</span></div>\n\
<div class=\"line\"><span class=\"preprocessor\">#include &lt;maya/MPlug.h&gt;</span></div>\n\
<div class=\"line\"><span class=\"preprocessor\">#include &lt;maya/MSelectionList.h&gt;</span></div>\n\
<div class=\"line\"><span class=\"preprocessor\">#include &lt;maya/MSyntax.h&gt;</span></div>\n\
<div class=\"line\"></div>\n\
<div class=\"line\"><span class=\"preprocessor\">#define kIndexFlag      &quot;-i&quot;</span></div>\n\
<div class=\"line\"><span class=\"preprocessor\">#define kIndexFlagLong  &quot;-index&quot;</span></div>\n\
<div class=\"line\"></div>\n\
<div class=\"line\"><span class=\"comment\">//</span></div>\n\
<div class=\"line\"><span class=\"comment\">// Command class declaration</span></div>\n\
<div class=\"line\"><span class=\"comment\">//</span></div>\n\
<div class=\"line\"><span class=\"comment\"></span><span class=\"keyword\">class </span>multiPlugInfo : <span class=\"keyword\">public</span> <a name=\"_a0\"></a><a class=\"code\" href=\"#!/url=./cpp_ref/class_m_px_command.html\">MPxCommand</a></div>\n\
<div class=\"line\">{</div>\n\
<div class=\"line\"><span class=\"keyword\">public</span>:</div>\n\
<div class=\"line\">                    multiPlugInfo();</div>\n\
<div class=\"line\">                ~multiPlugInfo() <span class=\"keyword\">override</span>; </div>\n\
<div class=\"line\"></div>\n\
<div class=\"line\">    <a name=\"_a1\"></a><a class=\"code\" href=\"#!/url=./cpp_ref/class_m_status.html\">MStatus</a>         <a name=\"a2\"></a><a class=\"code\" href=\"#!/url=./cpp_ref/class_m_px_command.html#ade7d0a873cbe811d6eab464e695390a9\">doIt</a>( <span class=\"keyword\">const</span> <a name=\"_a3\"></a><a class=\"code\" href=\"#!/url=./cpp_ref/class_m_arg_list.html\">MArgList</a>&amp; args ) <span class=\"keyword\">override</span>;</div>\n\
<div class=\"line\"></div>\n\
<div class=\"line\">    <span class=\"keyword\">virtual</span> <span class=\"keywordtype\">bool</span>    <a name=\"a4\"></a><a class=\"code\" href=\"#!/url=./cpp_ref/class_m_px_command.html#a8121b9d1e18f95acf1f634e29e3b3d54\">hasSyntax</a>();</div>\n\
<div class=\"line\">    <span class=\"keyword\">static</span> <a name=\"_a5\"></a><a class=\"code\" href=\"#!/url=./cpp_ref/class_m_syntax.html\">MSyntax</a>  cmdSyntax();</div>\n\
<div class=\"line\">    <span class=\"keyword\">static</span> <span class=\"keywordtype\">void</span>*    creator();</div>\n\
<div class=\"line\"></div>\n\
<div class=\"line\"><span class=\"keyword\">private</span>:</div>\n\
<div class=\"line\">    <a class=\"code\" href=\"#!/url=./cpp_ref/class_m_status.html\">MStatus</a>         parseArgs( <span class=\"keyword\">const</span> <a class=\"code\" href=\"#!/url=./cpp_ref/class_m_arg_list.html\">MArgList</a>&amp; args );</div>\n\
<div class=\"line\">    <a name=\"_a6\"></a><a class=\"code\" href=\"#!/url=./cpp_ref/class_m_plug.html\">MPlug</a>           fPlug;</div>\n\
<div class=\"line\">    <span class=\"keywordtype\">bool</span>            isIndex;</div>\n\
<div class=\"line\">};</div>\n\
<div class=\"line\"></div>\n\
<div class=\"line\"></div>\n\
<div class=\"line\"></div>\n\
<div class=\"line\"><span class=\"comment\">//</span></div>\n\
<div class=\"line\"><span class=\"comment\">// Command class implementation</span></div>\n\
<div class=\"line\"><span class=\"comment\">//</span></div>\n\
<div class=\"line\"><span class=\"comment\"></span></div>\n\
<div class=\"line\">multiPlugInfo::multiPlugInfo()</div>\n\
<div class=\"line\">    : isIndex (false)</div>\n\
<div class=\"line\">{}</div>\n\
<div class=\"line\"></div>\n\
<div class=\"line\">multiPlugInfo::~multiPlugInfo() {}</div>\n\
<div class=\"line\"></div>\n\
<div class=\"line\"><span class=\"keywordtype\">void</span>* multiPlugInfo::creator()</div>\n\
<div class=\"line\">{</div>\n\
<div class=\"line\">    <span class=\"keywordflow\">return</span> <span class=\"keyword\">new</span> multiPlugInfo;</div>\n\
<div class=\"line\">}</div>\n\
<div class=\"line\"></div>\n\
<div class=\"line\"><a class=\"code\" href=\"#!/url=./cpp_ref/class_m_syntax.html\">MSyntax</a> multiPlugInfo::cmdSyntax()</div>\n\
<div class=\"line\">{</div>\n\
<div class=\"line\">    <a class=\"code\" href=\"#!/url=./cpp_ref/class_m_syntax.html\">MSyntax</a> syntax;</div>\n\
<div class=\"line\">    syntax.<a name=\"a7\"></a><a class=\"code\" href=\"#!/url=./cpp_ref/class_m_syntax.html#aeaeaac3794bb4de8004afb1ac1829488\">addFlag</a>(kIndexFlag, kIndexFlagLong, MSyntax::kNoArg);</div>\n\
<div class=\"line\">    syntax.<a name=\"a8\"></a><a class=\"code\" href=\"#!/url=./cpp_ref/class_m_syntax.html#a299f2c91c864387f1b4208e99a72631d\">setObjectType</a>(MSyntax::kSelectionList, 1, 1);</div>\n\
<div class=\"line\">    syntax.<a name=\"a9\"></a><a class=\"code\" href=\"#!/url=./cpp_ref/class_m_syntax.html#a414088ac458bc323845634fcf7663e69\">enableQuery</a>( <span class=\"keyword\">false</span> );</div>\n\
<div class=\"line\">    syntax.<a name=\"a10\"></a><a class=\"code\" href=\"#!/url=./cpp_ref/class_m_syntax.html#a2a329cd0b0d89bc1b9721c522d6d0006\">enableEdit</a>( <span class=\"keyword\">false</span> );</div>\n\
<div class=\"line\">    <span class=\"keywordflow\">return</span> syntax;</div>\n\
<div class=\"line\">}</div>\n\
<div class=\"line\"></div>\n\
<div class=\"line\"><span class=\"keywordtype\">bool</span> multiPlugInfo::hasSyntax()</div>\n\
<div class=\"line\">{</div>\n\
<div class=\"line\">    <span class=\"keywordflow\">return</span> <span class=\"keyword\">true</span>;</div>\n\
<div class=\"line\">}</div>\n\
<div class=\"line\"></div>\n\
<div class=\"line\"><a class=\"code\" href=\"#!/url=./cpp_ref/class_m_status.html\">MStatus</a> multiPlugInfo::parseArgs( <span class=\"keyword\">const</span> <a class=\"code\" href=\"#!/url=./cpp_ref/class_m_arg_list.html\">MArgList</a>&amp; args )</div>\n\
<div class=\"line\">{</div>\n\
<div class=\"line\">    <a class=\"code\" href=\"#!/url=./cpp_ref/class_m_status.html\">MStatus</a> status = MS::kSuccess;</div>\n\
<div class=\"line\">    <a name=\"_a11\"></a><a class=\"code\" href=\"#!/url=./cpp_ref/class_m_arg_database.html\">MArgDatabase</a>    argData(syntax(), args, &amp;status);</div>\n\
<div class=\"line\">    <span class=\"keywordflow\">if</span> (status != MS::kSuccess)</div>\n\
<div class=\"line\">        <span class=\"keywordflow\">return</span> status;</div>\n\
<div class=\"line\"></div>\n\
<div class=\"line\">    <span class=\"keywordflow\">if</span> (argData.isFlagSet(kIndexFlag))</div>\n\
<div class=\"line\">        isIndex = <span class=\"keyword\">true</span>;</div>\n\
<div class=\"line\"></div>\n\
<div class=\"line\">    <span class=\"comment\">// Get the plug specified on the command line.</span></div>\n\
<div class=\"line\">    <a name=\"_a12\"></a><a class=\"code\" href=\"#!/url=./cpp_ref/class_m_selection_list.html\">MSelectionList</a> slist;</div>\n\
<div class=\"line\">    argData.getObjects(slist);</div>\n\
<div class=\"line\">    <span class=\"keywordflow\">if</span> ((slist.<a name=\"a13\"></a><a class=\"code\" href=\"#!/url=./cpp_ref/class_m_selection_list.html#a99dd6a54b909ede1d11702fe58977e2a\">length</a>() == 0) ||</div>\n\
<div class=\"line\">        (slist.<a name=\"a14\"></a><a class=\"code\" href=\"#!/url=./cpp_ref/class_m_selection_list.html#a4cdb668fdd6feafe9b296a80cfca26f0\">getPlug</a>(0, fPlug) != MS::kSuccess))</div>\n\
<div class=\"line\">    {</div>\n\
<div class=\"line\">        displayError(<span class=\"stringliteral\">&quot;Must specify an array plug in the form &lt;nodeName&gt;.&lt;multiPlugName&gt;.&quot;</span>, <span class=\"keyword\">false</span>);</div>\n\
<div class=\"line\">        <span class=\"keywordflow\">return</span> MS::kFailure;</div>\n\
<div class=\"line\">    }</div>\n\
<div class=\"line\"></div>\n\
<div class=\"line\">    <span class=\"keywordflow\">return</span> MS::kSuccess;</div>\n\
<div class=\"line\">}</div>\n\
<div class=\"line\"></div>\n\
<div class=\"line\"><a class=\"code\" href=\"#!/url=./cpp_ref/class_m_status.html\">MStatus</a> multiPlugInfo::doIt( <span class=\"keyword\">const</span> <a class=\"code\" href=\"#!/url=./cpp_ref/class_m_arg_list.html\">MArgList</a>&amp; args )</div>\n\
<div class=\"line\"><span class=\"comment\">//</span></div>\n\
<div class=\"line\"><span class=\"comment\">// Description</span></div>\n\
<div class=\"line\"><span class=\"comment\">//     This method performs the action of the command.</span></div>\n\
<div class=\"line\"><span class=\"comment\">//</span></div>\n\
<div class=\"line\"><span class=\"comment\">//     This method gets the data stored in the multi attribute</span></div>\n\
<div class=\"line\"><span class=\"comment\">//      and prints it out.</span></div>\n\
<div class=\"line\"><span class=\"comment\">//</span></div>\n\
<div class=\"line\">{</div>\n\
<div class=\"line\">    <span class=\"keywordflow\">if</span> (parseArgs(args) != MS::kSuccess)</div>\n\
<div class=\"line\">        <span class=\"keywordflow\">return</span> MS::kFailure;</div>\n\
<div class=\"line\"></div>\n\
<div class=\"line\">    <span class=\"comment\">// Construct a data handle containing the data stored in the plug.</span></div>\n\
<div class=\"line\">    <a name=\"_a15\"></a><a class=\"code\" href=\"#!/url=./cpp_ref/class_m_data_handle.html\">MDataHandle</a> dh;</div>\n\
<div class=\"line\">    <a class=\"code\" href=\"#!/url=./cpp_ref/class_m_status.html\">MStatus</a> stat = fPlug.getValue(dh);</div>\n\
<div class=\"line\">    <span class=\"keywordflow\">if</span> (stat != MS::kSuccess)</div>\n\
<div class=\"line\">    {</div>\n\
<div class=\"line\">        displayError(<span class=\"stringliteral\">&quot;Could not get the plug value.&quot;</span>, <span class=\"keyword\">false</span>);</div>\n\
<div class=\"line\">        <span class=\"keywordflow\">return</span> MS::kFailure;</div>\n\
<div class=\"line\">    }</div>\n\
<div class=\"line\">    <a name=\"_a16\"></a><a class=\"code\" href=\"#!/url=./cpp_ref/class_m_array_data_handle.html\">MArrayDataHandle</a> adh(dh, &amp;stat);</div>\n\
<div class=\"line\">    <span class=\"keywordflow\">if</span> (stat != MS::kSuccess)</div>\n\
<div class=\"line\">    {</div>\n\
<div class=\"line\">        displayError(<span class=\"stringliteral\">&quot;Could not create the array data handle.&quot;</span>, <span class=\"keyword\">false</span>);</div>\n\
<div class=\"line\">        fPlug.destructHandle(dh);</div>\n\
<div class=\"line\">        <span class=\"keywordflow\">return</span> MS::kFailure;</div>\n\
<div class=\"line\">    }</div>\n\
<div class=\"line\"></div>\n\
<div class=\"line\">    <span class=\"comment\">// Iterate over the values in the multiPlug.  If the index flag has been used, just return</span></div>\n\
<div class=\"line\">    <span class=\"comment\">// the logical indices of the child plugs.  Otherwise, return the plug values.</span></div>\n\
<div class=\"line\">    <span class=\"keywordtype\">unsigned</span> <span class=\"keywordtype\">int</span> i;</div>\n\
<div class=\"line\">    <span class=\"keywordflow\">for</span> (i=0; i&lt;adh.elementCount(); i++, adh.next())</div>\n\
<div class=\"line\">    {</div>\n\
<div class=\"line\">        <span class=\"keywordtype\">unsigned</span> <span class=\"keywordtype\">int</span> indx = adh.elementIndex(&amp;stat);</div>\n\
<div class=\"line\">        <span class=\"keywordflow\">if</span> (stat != MS::kSuccess)</div>\n\
<div class=\"line\">            <span class=\"keywordflow\">continue</span>;</div>\n\
<div class=\"line\"></div>\n\
<div class=\"line\">        <span class=\"keywordflow\">if</span> (isIndex)</div>\n\
<div class=\"line\">            appendToResult((<span class=\"keywordtype\">int</span>)indx);</div>\n\
<div class=\"line\">        <span class=\"keywordflow\">else</span></div>\n\
<div class=\"line\">        {</div>\n\
<div class=\"line\">            <a class=\"code\" href=\"#!/url=./cpp_ref/class_m_data_handle.html\">MDataHandle</a> h = adh.outputValue();</div>\n\
<div class=\"line\">            <span class=\"keywordflow\">if</span> (h.<a name=\"a17\"></a><a class=\"code\" href=\"#!/url=./cpp_ref/class_m_data_handle.html#a84ff838c325f8502edcf2d5ec8aff8ef\">isNumeric</a>())</div>\n\
<div class=\"line\">            {</div>\n\
<div class=\"line\">                <span class=\"keywordflow\">switch</span>(h.<a name=\"a18\"></a><a class=\"code\" href=\"#!/url=./cpp_ref/class_m_data_handle.html#ac4be39c63428624481522dcc1c01d543\">numericType</a>())</div>\n\
<div class=\"line\">                {</div>\n\
<div class=\"line\">                    <span class=\"keywordflow\">case</span> MFnNumericData::kBoolean:</div>\n\
<div class=\"line\">                        appendToResult(h.<a name=\"a19\"></a><a class=\"code\" href=\"#!/url=./cpp_ref/class_m_data_handle.html#a69fdebf4dcdf33c1b313eb4a426e0d45\">asBool</a>());</div>\n\
<div class=\"line\">                        <span class=\"keywordflow\">break</span>;</div>\n\
<div class=\"line\">                    <span class=\"keywordflow\">case</span> MFnNumericData::kShort:</div>\n\
<div class=\"line\">                        appendToResult((<span class=\"keywordtype\">int</span>)(h.<a name=\"a20\"></a><a class=\"code\" href=\"#!/url=./cpp_ref/class_m_data_handle.html#ab4cfc0fe402e4a52cf87b8acc6a29861\">asShort</a>()));</div>\n\
<div class=\"line\">                        <span class=\"keywordflow\">break</span>;</div>\n\
<div class=\"line\">                    <span class=\"keywordflow\">case</span> MFnNumericData::kInt:</div>\n\
<div class=\"line\">                        appendToResult(h.<a name=\"a21\"></a><a class=\"code\" href=\"#!/url=./cpp_ref/class_m_data_handle.html#a4c3fb2724eadb8e8a3cca8ff1af10dfd\">asInt</a>());</div>\n\
<div class=\"line\">                        <span class=\"keywordflow\">break</span>;</div>\n\
<div class=\"line\">                    <span class=\"keywordflow\">case</span> MFnNumericData::kFloat:</div>\n\
<div class=\"line\">                        appendToResult((<span class=\"keywordtype\">double</span>)(h.<a name=\"a22\"></a><a class=\"code\" href=\"#!/url=./cpp_ref/class_m_data_handle.html#a43df510424a7de372dd130315d9f223c\">asFloat</a>()));</div>\n\
<div class=\"line\">                        <span class=\"keywordflow\">break</span>;</div>\n\
<div class=\"line\">                    <span class=\"keywordflow\">case</span> MFnNumericData::kDouble:</div>\n\
<div class=\"line\">                        appendToResult(h.<a name=\"a23\"></a><a class=\"code\" href=\"#!/url=./cpp_ref/class_m_data_handle.html#ac1983b7d41a8dae60dc5b1eb9f44a53c\">asDouble</a>());</div>\n\
<div class=\"line\">                        <span class=\"keywordflow\">break</span>;</div>\n\
<div class=\"line\">                    <span class=\"keywordflow\">default</span>:</div>\n\
<div class=\"line\">                        displayError(<span class=\"stringliteral\">&quot;This sample command only supports boolean, integer, and floating point values.&quot;</span>, <span class=\"keyword\">false</span>);</div>\n\
<div class=\"line\">                        stat = MS::kFailure;</div>\n\
<div class=\"line\">                        <span class=\"keywordflow\">break</span>;</div>\n\
<div class=\"line\">                }</div>\n\
<div class=\"line\">            }</div>\n\
<div class=\"line\">        }</div>\n\
<div class=\"line\">    }</div>\n\
<div class=\"line\"></div>\n\
<div class=\"line\">    fPlug.destructHandle(dh);</div>\n\
<div class=\"line\">    <span class=\"keywordflow\">return</span> stat;</div>\n\
<div class=\"line\"></div>\n\
<div class=\"line\">}</div>\n\
<div class=\"line\"></div>\n\
<div class=\"line\"><span class=\"comment\">//</span></div>\n\
<div class=\"line\"><span class=\"comment\">// The following routines are used to register/unregister</span></div>\n\
<div class=\"line\"><span class=\"comment\">// the command we are creating within Maya</span></div>\n\
<div class=\"line\"><span class=\"comment\">//</span></div>\n\
<div class=\"line\"><span class=\"comment\"></span><a class=\"code\" href=\"#!/url=./cpp_ref/class_m_status.html\">MStatus</a> initializePlugin( <a name=\"_a24\"></a><a class=\"code\" href=\"#!/url=./cpp_ref/class_m_object.html\">MObject</a> obj )</div>\n\
<div class=\"line\">{</div>\n\
<div class=\"line\">    <a class=\"code\" href=\"#!/url=./cpp_ref/class_m_status.html\">MStatus</a>   status;</div>\n\
<div class=\"line\">    <a name=\"_a25\"></a><a class=\"code\" href=\"#!/url=./cpp_ref/class_m_fn_plugin.html\">MFnPlugin</a> plugin( obj, PLUGIN_COMPANY, <span class=\"stringliteral\">&quot;1.0&quot;</span>, <span class=\"stringliteral\">&quot;Any&quot;</span>);</div>\n\
<div class=\"line\"></div>\n\
<div class=\"line\">    status = plugin.registerCommand( <span class=\"stringliteral\">&quot;multiPlugInfo&quot;</span>,</div>\n\
<div class=\"line\">                                      multiPlugInfo::creator,</div>\n\
<div class=\"line\">                                      multiPlugInfo::cmdSyntax);</div>\n\
<div class=\"line\">    <span class=\"keywordflow\">if</span> (!status) {</div>\n\
<div class=\"line\">        status.<a name=\"a26\"></a><a class=\"code\" href=\"#!/url=./cpp_ref/class_m_status.html#a1f01a4748fea4d8bcced082df83f804d\">perror</a>(<span class=\"stringliteral\">&quot;registerCommand&quot;</span>);</div>\n\
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
<div class=\"line\">    status = plugin.deregisterCommand( <span class=\"stringliteral\">&quot;multiPlugInfo&quot;</span> );</div>\n\
<div class=\"line\">    <span class=\"keywordflow\">if</span> (!status) {</div>\n\
<div class=\"line\">        status.<a class=\"code\" href=\"#!/url=./cpp_ref/class_m_status.html#a1f01a4748fea4d8bcced082df83f804d\">perror</a>(<span class=\"stringliteral\">&quot;deregisterCommand&quot;</span>);</div>\n\
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