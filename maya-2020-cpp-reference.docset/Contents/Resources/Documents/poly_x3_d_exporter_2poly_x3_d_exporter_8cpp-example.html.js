var topic = "<!-- saved from url=(0024)http://docs.autodesk.com -->\n\
<html>\n\
   <head><script src=\"../scripts/yepnope.1.5.4-min.js\" type=\"text/javascript\"></script><script src=\"../scripts/lib/jquery-1.11.1.min.js\" type=\"text/javascript\"></script>\n\
      <title>C++ API Reference: polyX3DExporter/polyX3DExporter.cpp</title>\n\
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
    cpp_ref_adsk_ref_toc.initNavTree(\'poly_x3_d_exporter_2poly_x3_d_exporter_8cpp-example.html\', tocPrefix);\n\
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
            <h1>C++ API Reference: polyX3DExporter/polyX3DExporter.cpp</h1>\n\
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
<div class=\"title\">polyX3DExporter/polyX3DExporter.cpp</div>  </div>\n\
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
<div class=\"line\"><span class=\"comment\">//</span></div>\n\
<div class=\"line\"></div>\n\
<div class=\"line\"><span class=\"comment\">//polyX3DExporter.cpp</span></div>\n\
<div class=\"line\"></div>\n\
<div class=\"line\"><span class=\"preprocessor\">#include &lt;maya/MIOStream.h&gt;</span></div>\n\
<div class=\"line\"><span class=\"preprocessor\">#include &lt;maya/MDagPath.h&gt;</span></div>\n\
<div class=\"line\"><span class=\"preprocessor\">#include &lt;maya/MStatus.h&gt;</span></div>\n\
<div class=\"line\"><span class=\"preprocessor\">#include &lt;maya/MGlobal.h&gt;</span></div>\n\
<div class=\"line\"><span class=\"preprocessor\">#include &lt;maya/MFnPlugin.h&gt;</span></div>\n\
<div class=\"line\"></div>\n\
<div class=\"line\"><span class=\"preprocessor\">#include &quot;polyX3DExporter.h&quot;</span></div>\n\
<div class=\"line\"><span class=\"preprocessor\">#include &quot;polyX3DWriter.h&quot;</span></div>\n\
<div class=\"line\"></div>\n\
<div class=\"line\"><span class=\"comment\">//Macros</span></div>\n\
<div class=\"line\"><span class=\"comment\">//</span></div>\n\
<div class=\"line\"><span class=\"comment\">//XML header related info</span></div>\n\
<div class=\"line\"><span class=\"preprocessor\">#define XMLVERSION 1.0</span></div>\n\
<div class=\"line\"><span class=\"preprocessor\">#define XMLENCODING &quot;UTF-8&quot;</span></div>\n\
<div class=\"line\"></div>\n\
<div class=\"line\"></div>\n\
<div class=\"line\">polyX3DExporter::~polyX3DExporter() </div>\n\
<div class=\"line\">{ </div>\n\
<div class=\"line\"><span class=\"comment\">//Summary:  destructor method - does nothing</span></div>\n\
<div class=\"line\"><span class=\"comment\">//</span></div>\n\
<div class=\"line\">}</div>\n\
<div class=\"line\"></div>\n\
<div class=\"line\">     </div>\n\
<div class=\"line\"><span class=\"keywordtype\">void</span>* polyX3DExporter::creator() </div>\n\
<div class=\"line\"><span class=\"comment\">//Summary:  allows Maya to allocate an instance of this object</span></div>\n\
<div class=\"line\">{</div>\n\
<div class=\"line\">    <span class=\"keywordflow\">return</span> <span class=\"keyword\">new</span> polyX3DExporter();</div>\n\
<div class=\"line\">}</div>\n\
<div class=\"line\"></div>\n\
<div class=\"line\"></div>\n\
<div class=\"line\"><a name=\"_a0\"></a><a class=\"code\" href=\"#!/url=./cpp_ref/class_m_string.html\">MString</a> polyX3DExporter::defaultExtension () const </div>\n\
<div class=\"line\"><span class=\"comment\">//Summary:  called when Maya needs to know the preferred extension of this file</span></div>\n\
<div class=\"line\"><span class=\"comment\">//          format.  For example, if the user tries to save a file called </span></div>\n\
<div class=\"line\"><span class=\"comment\">//          &quot;test&quot; using the Save As dialog, Maya will call this method and </span></div>\n\
<div class=\"line\"><span class=\"comment\">//          actually save it as &quot;test.x3d&quot;. Note that the period should *not* </span></div>\n\
<div class=\"line\"><span class=\"comment\">//          be included in the extension.</span></div>\n\
<div class=\"line\"><span class=\"comment\">//Returns:  &quot;x3d&quot;</span></div>\n\
<div class=\"line\">{</div>\n\
<div class=\"line\">    <span class=\"keywordflow\">return</span> <a class=\"code\" href=\"#!/url=./cpp_ref/class_m_string.html\">MString</a>(<span class=\"stringliteral\">&quot;x3d&quot;</span>);</div>\n\
<div class=\"line\">}</div>\n\
<div class=\"line\"></div>\n\
<div class=\"line\"></div>\n\
<div class=\"line\"><a name=\"_a1\"></a><a class=\"code\" href=\"#!/url=./cpp_ref/class_m_status.html\">MStatus</a> initializePlugin(<a name=\"_a2\"></a><a class=\"code\" href=\"#!/url=./cpp_ref/class_m_object.html\">MObject</a> obj)</div>\n\
<div class=\"line\"><span class=\"comment\">//Summary:  registers the commands, tools, devices, and so on, defined by the </span></div>\n\
<div class=\"line\"><span class=\"comment\">//          plug-in with Maya</span></div>\n\
<div class=\"line\"><span class=\"comment\">//Returns:  MStatus::kSuccess if the registration was successful;</span></div>\n\
<div class=\"line\"><span class=\"comment\">//          MStatus::kFailure otherwise</span></div>\n\
<div class=\"line\">{</div>\n\
<div class=\"line\">    <a class=\"code\" href=\"#!/url=./cpp_ref/class_m_status.html\">MStatus</a> status;</div>\n\
<div class=\"line\">    <a name=\"_a3\"></a><a class=\"code\" href=\"#!/url=./cpp_ref/class_m_fn_plugin.html\">MFnPlugin</a> plugin(obj, PLUGIN_COMPANY, <span class=\"stringliteral\">&quot;4.5&quot;</span>, <span class=\"stringliteral\">&quot;Any&quot;</span>);</div>\n\
<div class=\"line\"></div>\n\
<div class=\"line\">    <span class=\"comment\">// Register the translator with the system</span></div>\n\
<div class=\"line\">    <span class=\"comment\">//</span></div>\n\
<div class=\"line\">    status =  plugin.registerFileTranslator(<span class=\"stringliteral\">&quot;X3D&quot;</span>,</div>\n\
<div class=\"line\">                                            <span class=\"stringliteral\">&quot;&quot;</span>,</div>\n\
<div class=\"line\">                                            polyX3DExporter::creator,</div>\n\
<div class=\"line\">                                            <span class=\"stringliteral\">&quot;&quot;</span>,</div>\n\
<div class=\"line\">                                            <span class=\"stringliteral\">&quot;option1=1&quot;</span>,</div>\n\
<div class=\"line\">                                            <span class=\"keyword\">true</span>);</div>\n\
<div class=\"line\">    <span class=\"keywordflow\">if</span> (!status) {</div>\n\
<div class=\"line\">        status.<a name=\"a4\"></a><a class=\"code\" href=\"#!/url=./cpp_ref/class_m_status.html#a1f01a4748fea4d8bcced082df83f804d\">perror</a>(<span class=\"stringliteral\">&quot;registerFileTranslator&quot;</span>);</div>\n\
<div class=\"line\">        <span class=\"keywordflow\">return</span> status;</div>\n\
<div class=\"line\">    }</div>\n\
<div class=\"line\"></div>\n\
<div class=\"line\">    <span class=\"keywordflow\">return</span> status;</div>\n\
<div class=\"line\">}</div>\n\
<div class=\"line\"></div>\n\
<div class=\"line\"></div>\n\
<div class=\"line\"><a class=\"code\" href=\"#!/url=./cpp_ref/class_m_status.html\">MStatus</a> uninitializePlugin(<a class=\"code\" href=\"#!/url=./cpp_ref/class_m_object.html\">MObject</a> obj) </div>\n\
<div class=\"line\"><span class=\"comment\">//Summary:  deregisters the commands, tools, devices, and so on, defined by the </span></div>\n\
<div class=\"line\"><span class=\"comment\">//          plug-in</span></div>\n\
<div class=\"line\"><span class=\"comment\">//Returns:  MStatus::kSuccess if the deregistration was successful;</span></div>\n\
<div class=\"line\"><span class=\"comment\">//          MStatus::kFailure otherwise</span></div>\n\
<div class=\"line\">{</div>\n\
<div class=\"line\">    <a class=\"code\" href=\"#!/url=./cpp_ref/class_m_status.html\">MStatus</a>   status;</div>\n\
<div class=\"line\">    <a class=\"code\" href=\"#!/url=./cpp_ref/class_m_fn_plugin.html\">MFnPlugin</a> plugin( obj );</div>\n\
<div class=\"line\"></div>\n\
<div class=\"line\">    status =  plugin.deregisterFileTranslator(<span class=\"stringliteral\">&quot;X3D&quot;</span>);</div>\n\
<div class=\"line\">    <span class=\"keywordflow\">if</span> (!status) {</div>\n\
<div class=\"line\">        status.<a class=\"code\" href=\"#!/url=./cpp_ref/class_m_status.html#a1f01a4748fea4d8bcced082df83f804d\">perror</a>(<span class=\"stringliteral\">&quot;deregisterFileTranslator&quot;</span>);</div>\n\
<div class=\"line\">        <span class=\"keywordflow\">return</span> status;</div>\n\
<div class=\"line\">    }</div>\n\
<div class=\"line\"></div>\n\
<div class=\"line\">    <span class=\"keywordflow\">return</span> status;</div>\n\
<div class=\"line\">}</div>\n\
<div class=\"line\"></div>\n\
<div class=\"line\"></div>\n\
<div class=\"line\"><span class=\"keywordtype\">void</span> polyX3DExporter::writeHeader(ostream&amp; os) </div>\n\
<div class=\"line\"><span class=\"comment\">//Summary:  outputs the required opening X3D tags</span></div>\n\
<div class=\"line\"><span class=\"comment\">//Args   :  os - an output stream to write to</span></div>\n\
<div class=\"line\">{</div>\n\
<div class=\"line\">    <span class=\"comment\">//output required tags:  XML, X3D, and Scene</span></div>\n\
<div class=\"line\">    <span class=\"comment\">//</span></div>\n\
<div class=\"line\">    os &lt;&lt; <span class=\"stringliteral\">&quot;&lt;?xml version=\\&quot;&quot;</span> &lt;&lt; XMLVERSION </div>\n\
<div class=\"line\">       &lt;&lt; <span class=\"stringliteral\">&quot;\\&quot; encoding=\\&quot;&quot;</span> &lt;&lt; XMLENCODING </div>\n\
<div class=\"line\">       &lt;&lt; <span class=\"stringliteral\">&quot;\\&quot;?&gt;\\n&quot;</span></div>\n\
<div class=\"line\">       &lt;&lt; <span class=\"stringliteral\">&quot;&lt;!DOCTYPE X3D PUBLIC \\&quot;http://www.web3D.org/TaskGroups/x3d/translation/x3d-compact.dtd\\&quot; &quot;</span></div>\n\
<div class=\"line\">       &lt;&lt; <span class=\"stringliteral\">&quot;\\&quot;/www.web3d.org/TaskGroups/x3d/translation/x3d-compact.dtd\\&quot;&gt;\\n&quot;</span></div>\n\
<div class=\"line\">       &lt;&lt; <span class=\"stringliteral\">&quot;&lt;X3D&gt;\\n&quot;</span></div>\n\
<div class=\"line\">       &lt;&lt; <span class=\"stringliteral\">&quot;\\t&lt;Scene&gt;\\n&quot;</span>;</div>\n\
<div class=\"line\">}</div>\n\
<div class=\"line\"></div>\n\
<div class=\"line\"></div>\n\
<div class=\"line\"><span class=\"keywordtype\">void</span> polyX3DExporter::writeFooter(ostream&amp; os)</div>\n\
<div class=\"line\"><span class=\"comment\">//Summary:  outputs the required closing X3D tags</span></div>\n\
<div class=\"line\"><span class=\"comment\">//Args   :  os - an output stream to write to</span></div>\n\
<div class=\"line\">{</div>\n\
<div class=\"line\">    os &lt;&lt; <span class=\"stringliteral\">&quot;\\t&lt;/Scene&gt;\\n&quot;</span></div>\n\
<div class=\"line\">       &lt;&lt; <span class=\"stringliteral\">&quot;&lt;/X3D&gt;\\n&quot;</span>;</div>\n\
<div class=\"line\">}</div>\n\
<div class=\"line\"></div>\n\
<div class=\"line\"></div>\n\
<div class=\"line\">polyWriter* polyX3DExporter::createPolyWriter(<span class=\"keyword\">const</span> <a name=\"_a5\"></a><a class=\"code\" href=\"#!/url=./cpp_ref/class_m_dag_path.html\">MDagPath</a> dagPath, <a class=\"code\" href=\"#!/url=./cpp_ref/class_m_status.html\">MStatus</a>&amp; status) </div>\n\
<div class=\"line\"><span class=\"comment\">//Summary:  creates a polyWriter for the X3D export file type</span></div>\n\
<div class=\"line\"><span class=\"comment\">//Args   :  dagPath - the current polygon dag path</span></div>\n\
<div class=\"line\"><span class=\"comment\">//          status - will be set to MStatus::kSuccess if the polyWriter was </span></div>\n\
<div class=\"line\"><span class=\"comment\">//                   created successfully;  MStatus::kFailure otherwise</span></div>\n\
<div class=\"line\"><span class=\"comment\">//Returns:  pointer to the new polyWriter object</span></div>\n\
<div class=\"line\">{</div>\n\
<div class=\"line\">    <span class=\"keywordflow\">return</span> <span class=\"keyword\">new</span> polyX3DWriter(dagPath, status);</div>\n\
<div class=\"line\">}</div>\n\
</div><!-- fragment --> </div><!-- contents -->\n\
</div><!-- doc-content -->\n\
<!-- start footer part -->\n\
\n\
      <div class=\"footer-block\"><a href=\"../html/ac.cmtdialog.htm\" class=\"comments-anchor\" target=\"_blank\"><span class=\"comments-link\">Please send us your comment about this page</span></a></div></div>\n\
   </div></body>\n\
</html>\n\
";