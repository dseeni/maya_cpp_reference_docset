var topic = "<!-- saved from url=(0024)http://docs.autodesk.com -->\n\
<html>\n\
   <head><script src=\"../scripts/yepnope.1.5.4-min.js\" type=\"text/javascript\"></script><script src=\"../scripts/lib/jquery-1.11.1.min.js\" type=\"text/javascript\"></script>\n\
      <title>C++ API Reference: iffPpmCmd/iffPpmCmd.cpp</title>\n\
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
    cpp_ref_adsk_ref_toc.initNavTree(\'iff_ppm_cmd_2iff_ppm_cmd_8cpp-example.html\', tocPrefix);\n\
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
            <h1>C++ API Reference: iffPpmCmd/iffPpmCmd.cpp</h1>\n\
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
<div class=\"title\">iffPpmCmd/iffPpmCmd.cpp</div>  </div>\n\
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
<div class=\"line\"><span class=\"comment\">// Produces the MEL command &quot;iffPpm&quot;.</span></div>\n\
<div class=\"line\"><span class=\"comment\">//</span></div>\n\
<div class=\"line\"><span class=\"comment\">// This command takes as arguments the names of an existing IFF file and the name of a PPM (portable pixmap)</span></div>\n\
<div class=\"line\"><span class=\"comment\">// file that it must create. The IFF image is read and written out in PPM format to the second file.</span></div>\n\
<div class=\"line\"><span class=\"comment\">// For example: &quot;iffPpm sphere.iff sphere.ppm&quot;.</span></div>\n\
<div class=\"line\"><span class=\"comment\">// </span></div>\n\
<div class=\"line\"><span class=\"comment\"></span></div>\n\
<div class=\"line\"><span class=\"preprocessor\">#include &lt;maya/MPxCommand.h&gt;</span></div>\n\
<div class=\"line\"><span class=\"preprocessor\">#include &lt;maya/MStatus.h&gt;</span></div>\n\
<div class=\"line\"><span class=\"preprocessor\">#include &lt;maya/MArgList.h&gt;</span></div>\n\
<div class=\"line\"><span class=\"preprocessor\">#include &lt;maya/MFnPlugin.h&gt;</span></div>\n\
<div class=\"line\"><span class=\"preprocessor\">#include &lt;maya/MObject.h&gt;</span></div>\n\
<div class=\"line\"><span class=\"preprocessor\">#include &lt;maya/MGlobal.h&gt;</span></div>\n\
<div class=\"line\"><span class=\"preprocessor\">#include &lt;maya/MString.h&gt;</span></div>\n\
<div class=\"line\"><span class=\"preprocessor\">#include &lt;maya/MPoint.h&gt;</span></div>\n\
<div class=\"line\"><span class=\"preprocessor\">#include &lt;float.h&gt;</span></div>\n\
<div class=\"line\"><span class=\"preprocessor\">#include &quot;iffreader.h&quot;</span></div>\n\
<div class=\"line\"></div>\n\
<div class=\"line\"><span class=\"preprocessor\">#include &lt;iostream&gt;</span></div>\n\
<div class=\"line\"><span class=\"preprocessor\">#include &lt;fstream&gt;</span></div>\n\
<div class=\"line\"></div>\n\
<div class=\"line\"><span class=\"preprocessor\">#define IFFCHECKERR(stat, call) \\</span></div>\n\
<div class=\"line\"><span class=\"preprocessor\">if (!stat) { \\</span></div>\n\
<div class=\"line\"><span class=\"preprocessor\">    MString string = reader.errorString(); \\</span></div>\n\
<div class=\"line\"><span class=\"preprocessor\">    string += &quot; in method &quot;; \\</span></div>\n\
<div class=\"line\"><span class=\"preprocessor\">    string += #call; \\</span></div>\n\
<div class=\"line\"><span class=\"preprocessor\">    displayError (string); \\</span></div>\n\
<div class=\"line\"><span class=\"preprocessor\">    return MS::kFailure; \\</span></div>\n\
<div class=\"line\"><span class=\"preprocessor\">}</span></div>\n\
<div class=\"line\"></div>\n\
<div class=\"line\"><span class=\"keyword\">class </span>iffPpm : <span class=\"keyword\">public</span> <a name=\"_a0\"></a><a class=\"code\" href=\"#!/url=./cpp_ref/class_m_px_command.html\">MPxCommand</a></div>\n\
<div class=\"line\">{</div>\n\
<div class=\"line\"><span class=\"keyword\">public</span>:</div>\n\
<div class=\"line\">                iffPpm();</div>\n\
<div class=\"line\">        ~iffPpm() <span class=\"keyword\">override</span>;</div>\n\
<div class=\"line\"></div>\n\
<div class=\"line\">    <a name=\"_a1\"></a><a class=\"code\" href=\"#!/url=./cpp_ref/class_m_status.html\">MStatus</a>     <a name=\"a2\"></a><a class=\"code\" href=\"#!/url=./cpp_ref/class_m_px_command.html#ade7d0a873cbe811d6eab464e695390a9\">doIt</a> ( <span class=\"keyword\">const</span> <a name=\"_a3\"></a><a class=\"code\" href=\"#!/url=./cpp_ref/class_m_arg_list.html\">MArgList</a>&amp; args ) <span class=\"keyword\">override</span>;</div>\n\
<div class=\"line\">    <a class=\"code\" href=\"#!/url=./cpp_ref/class_m_status.html\">MStatus</a>     <a name=\"a4\"></a><a class=\"code\" href=\"#!/url=./cpp_ref/class_m_px_command.html#a3b583cbc082553f11853db459b2f7795\">redoIt</a> () <span class=\"keyword\">override</span>;</div>\n\
<div class=\"line\">    <a class=\"code\" href=\"#!/url=./cpp_ref/class_m_status.html\">MStatus</a>     <a name=\"a5\"></a><a class=\"code\" href=\"#!/url=./cpp_ref/class_m_px_command.html#a0789a8d51244cad0495abb2b811c39db\">undoIt</a> () <span class=\"keyword\">override</span>;</div>\n\
<div class=\"line\">    <span class=\"keywordtype\">bool</span>        <a name=\"a6\"></a><a class=\"code\" href=\"#!/url=./cpp_ref/class_m_px_command.html#a2f6c567cc02d575ab14006d9c5e37761\">isUndoable</a>() <span class=\"keyword\">const override</span>;</div>\n\
<div class=\"line\"></div>\n\
<div class=\"line\">    <span class=\"keyword\">static</span>      <span class=\"keywordtype\">void</span>* creator();</div>\n\
<div class=\"line\"></div>\n\
<div class=\"line\"><span class=\"keyword\">private</span>:</div>\n\
<div class=\"line\">    <a name=\"_a7\"></a><a class=\"code\" href=\"#!/url=./cpp_ref/class_m_string.html\">MString</a>     ppmFile;</div>\n\
<div class=\"line\">    <a class=\"code\" href=\"#!/url=./cpp_ref/class_m_string.html\">MString</a>     fileName;</div>\n\
<div class=\"line\">    <span class=\"keywordtype\">bool</span>        useDepth;</div>\n\
<div class=\"line\">};</div>\n\
<div class=\"line\"></div>\n\
<div class=\"line\">iffPpm::iffPpm()</div>\n\
<div class=\"line\">{</div>\n\
<div class=\"line\">}</div>\n\
<div class=\"line\"></div>\n\
<div class=\"line\">iffPpm::~iffPpm() {}</div>\n\
<div class=\"line\"></div>\n\
<div class=\"line\"><span class=\"keywordtype\">void</span>* iffPpm::creator()</div>\n\
<div class=\"line\">{</div>\n\
<div class=\"line\">    <span class=\"keywordflow\">return</span> <span class=\"keyword\">new</span> iffPpm;</div>\n\
<div class=\"line\">}</div>\n\
<div class=\"line\"></div>\n\
<div class=\"line\"><span class=\"keywordtype\">bool</span> iffPpm::isUndoable()<span class=\"keyword\"> const</span></div>\n\
<div class=\"line\"><span class=\"keyword\"></span>{</div>\n\
<div class=\"line\">    <span class=\"keywordflow\">return</span> <span class=\"keyword\">true</span>;</div>\n\
<div class=\"line\">}</div>\n\
<div class=\"line\"></div>\n\
<div class=\"line\"><a class=\"code\" href=\"#!/url=./cpp_ref/class_m_status.html\">MStatus</a> iffPpm::undoIt()</div>\n\
<div class=\"line\">{</div>\n\
<div class=\"line\">    <span class=\"keywordflow\">return</span> MS::kSuccess;</div>\n\
<div class=\"line\">}</div>\n\
<div class=\"line\"></div>\n\
<div class=\"line\"><a class=\"code\" href=\"#!/url=./cpp_ref/class_m_string.html\">MString</a> itoa (<span class=\"keywordtype\">int</span> n)</div>\n\
<div class=\"line\">{</div>\n\
<div class=\"line\">    <span class=\"keywordtype\">char</span> buffer [256];</div>\n\
<div class=\"line\">    sprintf (buffer, <span class=\"stringliteral\">&quot;%d&quot;</span>, n);</div>\n\
<div class=\"line\">    <span class=\"keywordflow\">return</span> <a class=\"code\" href=\"#!/url=./cpp_ref/class_m_string.html\">MString</a> (buffer);</div>\n\
<div class=\"line\">}</div>\n\
<div class=\"line\"></div>\n\
<div class=\"line\"><a class=\"code\" href=\"#!/url=./cpp_ref/class_m_status.html\">MStatus</a> iffPpm::doIt( <span class=\"keyword\">const</span> <a class=\"code\" href=\"#!/url=./cpp_ref/class_m_arg_list.html\">MArgList</a>&amp; args )</div>\n\
<div class=\"line\">{</div>\n\
<div class=\"line\">    <a class=\"code\" href=\"#!/url=./cpp_ref/class_m_string.html\">MString</a> componentName;</div>\n\
<div class=\"line\">    <span class=\"keywordflow\">if</span> (args.<a name=\"a8\"></a><a class=\"code\" href=\"#!/url=./cpp_ref/class_m_arg_list.html#a99dd6a54b909ede1d11702fe58977e2a\">length</a> () &lt; 2 || args.<a class=\"code\" href=\"#!/url=./cpp_ref/class_m_arg_list.html#a99dd6a54b909ede1d11702fe58977e2a\">length</a> () &gt; 3) {</div>\n\
<div class=\"line\">        displayError (<span class=\"stringliteral\">&quot;Syntax: iffPpm ifffile ppmfile [-depth]&quot;</span>);</div>\n\
<div class=\"line\">        <span class=\"keywordflow\">return</span> MS::kFailure;</div>\n\
<div class=\"line\">    }</div>\n\
<div class=\"line\"></div>\n\
<div class=\"line\">    args.<a name=\"a9\"></a><a class=\"code\" href=\"#!/url=./cpp_ref/class_m_arg_list.html#adc169cdc872457a2664c3d66c29cf504\">get</a> (0, fileName);</div>\n\
<div class=\"line\">    args.<a class=\"code\" href=\"#!/url=./cpp_ref/class_m_arg_list.html#adc169cdc872457a2664c3d66c29cf504\">get</a> (1, ppmFile);</div>\n\
<div class=\"line\">    <span class=\"keywordflow\">if</span> (args.<a class=\"code\" href=\"#!/url=./cpp_ref/class_m_arg_list.html#a99dd6a54b909ede1d11702fe58977e2a\">length</a> () == 3)</div>\n\
<div class=\"line\">    {</div>\n\
<div class=\"line\">        <a class=\"code\" href=\"#!/url=./cpp_ref/class_m_string.html\">MString</a> lastArg;</div>\n\
<div class=\"line\">        args.<a class=\"code\" href=\"#!/url=./cpp_ref/class_m_arg_list.html#adc169cdc872457a2664c3d66c29cf504\">get</a> (2, lastArg);</div>\n\
<div class=\"line\">        <span class=\"keywordflow\">if</span> (lastArg != <a class=\"code\" href=\"#!/url=./cpp_ref/class_m_string.html\">MString</a> (<span class=\"stringliteral\">&quot;-depth&quot;</span>)) {</div>\n\
<div class=\"line\">            displayError (<span class=\"stringliteral\">&quot;Syntax: iffPpm ifffile ppmfile [-depth]&quot;</span>);</div>\n\
<div class=\"line\">            <span class=\"keywordflow\">return</span> MS::kFailure;</div>\n\
<div class=\"line\">        }</div>\n\
<div class=\"line\">        useDepth = <span class=\"keyword\">true</span>;</div>\n\
<div class=\"line\">    }</div>\n\
<div class=\"line\">    <span class=\"keywordflow\">else</span></div>\n\
<div class=\"line\">        useDepth = <span class=\"keyword\">false</span>;</div>\n\
<div class=\"line\"></div>\n\
<div class=\"line\">    <span class=\"keywordflow\">return</span> redoIt();</div>\n\
<div class=\"line\">}</div>\n\
<div class=\"line\"></div>\n\
<div class=\"line\"><a class=\"code\" href=\"#!/url=./cpp_ref/class_m_status.html\">MStatus</a> iffPpm::redoIt()</div>\n\
<div class=\"line\">{</div>\n\
<div class=\"line\">    clearResult();</div>\n\
<div class=\"line\"></div>\n\
<div class=\"line\">    IFFimageReader reader;</div>\n\
<div class=\"line\">    <a class=\"code\" href=\"#!/url=./cpp_ref/class_m_status.html\">MStatus</a> stat;</div>\n\
<div class=\"line\"></div>\n\
<div class=\"line\">    stat = reader.open (fileName);</div>\n\
<div class=\"line\">    IFFCHECKERR (stat, open);</div>\n\
<div class=\"line\"></div>\n\
<div class=\"line\">    <span class=\"keywordtype\">int</span> imageWidth,imageHeight,bytesPerChannel;</div>\n\
<div class=\"line\">    stat = reader.getSize (imageWidth,imageHeight);</div>\n\
<div class=\"line\">    IFFCHECKERR (stat, getSize);</div>\n\
<div class=\"line\"></div>\n\
<div class=\"line\">    bytesPerChannel = reader.getBytesPerChannel ();</div>\n\
<div class=\"line\"></div>\n\
<div class=\"line\">    stat = reader.readImage ();</div>\n\
<div class=\"line\">    IFFCHECKERR (stat, readImage);</div>\n\
<div class=\"line\"></div>\n\
<div class=\"line\">    std::ofstream out (ppmFile.asChar ());</div>\n\
<div class=\"line\">    <span class=\"keywordflow\">if</span> (!out.good ())</div>\n\
<div class=\"line\">    {</div>\n\
<div class=\"line\">        displayError (<span class=\"stringliteral\">&quot;Could not create output file&quot;</span>);</div>\n\
<div class=\"line\">        <span class=\"keywordflow\">return</span> MS::kFailure;</div>\n\
<div class=\"line\">    }</div>\n\
<div class=\"line\">    out &lt;&lt; <span class=\"stringliteral\">&quot;P3&quot;</span> &lt;&lt; std::endl &lt;&lt; imageWidth &lt;&lt; <span class=\"stringliteral\">&quot; &quot;</span> &lt;&lt; imageHeight &lt;&lt; std::endl;</div>\n\
<div class=\"line\">    <span class=\"keywordflow\">if</span> (useDepth) {</div>\n\
<div class=\"line\">        <span class=\"keywordflow\">if</span> (!reader.hasDepthMap ()) {</div>\n\
<div class=\"line\">            displayError (<span class=\"stringliteral\">&quot;Image has no depth map&quot;</span>);</div>\n\
<div class=\"line\">            <span class=\"keywordflow\">return</span> MS::kFailure;</div>\n\
<div class=\"line\">        }</div>\n\
<div class=\"line\"></div>\n\
<div class=\"line\">        <span class=\"comment\">// Step 1: calculate the range of depth values in the data.</span></div>\n\
<div class=\"line\">        <span class=\"comment\">// We&#39;ll normalize against this range.</span></div>\n\
<div class=\"line\">        <span class=\"keywordtype\">float</span> minDepth=FLT_MAX, maxDepth=(-FLT_MAX);</div>\n\
<div class=\"line\"></div>\n\
<div class=\"line\">        <span class=\"keyword\">const</span> <span class=\"keywordtype\">float</span> *depthMap = reader.getDepthMap ();</div>\n\
<div class=\"line\">        <span class=\"keywordflow\">for</span>(<span class=\"keywordtype\">int</span> index=0; index&lt;imageWidth*imageHeight; index++)</div>\n\
<div class=\"line\">        {</div>\n\
<div class=\"line\">            <span class=\"keywordtype\">float</span> depth=depthMap[index];</div>\n\
<div class=\"line\">            <span class=\"keywordflow\">if</span> (depth!=0.) <span class=\"comment\">// 0 values indicate nothing there</span></div>\n\
<div class=\"line\">            {</div>\n\
<div class=\"line\">                <span class=\"keywordtype\">float</span> realDepth= -1.0f/depth;</div>\n\
<div class=\"line\">                <span class=\"keywordflow\">if</span> (realDepth&lt;minDepth)</div>\n\
<div class=\"line\">                    minDepth=realDepth;</div>\n\
<div class=\"line\">                <span class=\"keywordflow\">if</span> (realDepth&gt;maxDepth)</div>\n\
<div class=\"line\">                    maxDepth=realDepth;</div>\n\
<div class=\"line\">            }</div>\n\
<div class=\"line\">        }</div>\n\
<div class=\"line\"></div>\n\
<div class=\"line\">        <span class=\"comment\">// Step 2: output data, normalizing to 0-255</span></div>\n\
<div class=\"line\"></div>\n\
<div class=\"line\">        out &lt;&lt; <span class=\"stringliteral\">&quot;255&quot;</span> &lt;&lt; std::endl;</div>\n\
<div class=\"line\">        <span class=\"keywordtype\">float</span> scaleFactor = (float) (255.0 / ((<span class=\"keywordtype\">double</span>)maxDepth - (<span class=\"keywordtype\">double</span>)minDepth));</div>\n\
<div class=\"line\">        <span class=\"keywordtype\">float</span> offset = minDepth * scaleFactor;</div>\n\
<div class=\"line\"></div>\n\
<div class=\"line\">        <span class=\"keyword\">const</span> <span class=\"keywordtype\">float</span> *entry = depthMap;</div>\n\
<div class=\"line\"></div>\n\
<div class=\"line\">        <span class=\"keywordflow\">for</span>(<span class=\"keywordtype\">int</span> y=0; y &lt; imageHeight; y++)</div>\n\
<div class=\"line\">            <span class=\"keywordflow\">for</span>(<span class=\"keywordtype\">int</span> x=0; x &lt; imageWidth; x++, entry++)</div>\n\
<div class=\"line\">            {</div>\n\
<div class=\"line\">                <span class=\"keywordflow\">if</span> (*entry == 0.)</div>\n\
<div class=\"line\">                    out &lt;&lt; <span class=\"stringliteral\">&quot;0 0 0&quot;</span> &lt;&lt; std::endl;</div>\n\
<div class=\"line\">                <span class=\"keywordflow\">else</span> {</div>\n\
<div class=\"line\">                    <span class=\"keywordtype\">float</span> realDepth = -scaleFactor / *entry - offset;</div>\n\
<div class=\"line\">                    out &lt;&lt; (int)realDepth &lt;&lt; <span class=\"stringliteral\">&quot; &quot;</span> &lt;&lt; (<span class=\"keywordtype\">int</span>)realDepth &lt;&lt; &quot; &quot; &lt;&lt;</div>\n\
<div class=\"line\">                        (<span class=\"keywordtype\">int</span>) realDepth &lt;&lt; std::endl;</div>\n\
<div class=\"line\">                }</div>\n\
<div class=\"line\">            }</div>\n\
<div class=\"line\">    } else {</div>\n\
<div class=\"line\">        <span class=\"keywordflow\">if</span> (!reader.isRGB () &amp;&amp; !reader.isGrayscale ()) {</div>\n\
<div class=\"line\">            displayError (<span class=\"stringliteral\">&quot;Image has no RGB data&quot;</span>);</div>\n\
<div class=\"line\">            <span class=\"keywordflow\">return</span> MS::kFailure;</div>\n\
<div class=\"line\">        }</div>\n\
<div class=\"line\">        <span class=\"keywordflow\">if</span> (bytesPerChannel==1)</div>\n\
<div class=\"line\">            out &lt;&lt; <span class=\"stringliteral\">&quot;255&quot;</span> &lt;&lt; std::endl;</div>\n\
<div class=\"line\">        <span class=\"keywordflow\">else</span></div>\n\
<div class=\"line\">            out &lt;&lt; <span class=\"stringliteral\">&quot;65535&quot;</span> &lt;&lt; std::endl;</div>\n\
<div class=\"line\">        <span class=\"keyword\">const</span> <span class=\"keywordtype\">unsigned</span> <span class=\"keywordtype\">char</span> *bitmap = reader.getPixelMap ();</div>\n\
<div class=\"line\">        <span class=\"keyword\">const</span> <span class=\"keywordtype\">unsigned</span> <span class=\"keywordtype\">char</span> *pixel = bitmap;</div>\n\
<div class=\"line\">        <span class=\"keywordtype\">int</span> bytesPerPixel = (bytesPerChannel == 1) ? 4 : 8;</div>\n\
<div class=\"line\">        <span class=\"keywordflow\">for</span>(<span class=\"keywordtype\">int</span> y=0; y &lt; imageHeight; y++)</div>\n\
<div class=\"line\">            <span class=\"keywordflow\">for</span>(<span class=\"keywordtype\">int</span> x=0; x &lt; imageWidth; x++, pixel += bytesPerPixel)</div>\n\
<div class=\"line\">            {</div>\n\
<div class=\"line\">                <span class=\"comment\">// Note that if the image was greyscale then the ILload</span></div>\n\
<div class=\"line\">                <span class=\"comment\">// function will have expanded the grey into rgb now.</span></div>\n\
<div class=\"line\">                </div>\n\
<div class=\"line\">                <span class=\"comment\">//</span></div>\n\
<div class=\"line\">                <span class=\"keywordflow\">if</span> (bytesPerChannel==1)</div>\n\
<div class=\"line\">                {</div>\n\
<div class=\"line\"><span class=\"preprocessor\">#if defined(_WIN32) || defined(LINUX)</span></div>\n\
<div class=\"line\">                    <span class=\"comment\">// The actual internal storage on NT is BGRA</span></div>\n\
<div class=\"line\">                    out &lt;&lt; (int)pixel[2] &lt;&lt; <span class=\"stringliteral\">&quot; &quot;</span> &lt;&lt;</div>\n\
<div class=\"line\">                        (<span class=\"keywordtype\">int</span>)pixel[1] &lt;&lt; &quot; &quot; &lt;&lt;</div>\n\
<div class=\"line\">                        (<span class=\"keywordtype\">int</span>)pixel[0] &lt;&lt; std::endl;</div>\n\
<div class=\"line\"><span class=\"preprocessor\">#else</span></div>\n\
<div class=\"line\">                    <span class=\"comment\">// The actual internal storage on IRIX is ABGR</span></div>\n\
<div class=\"line\">                    out &lt;&lt; (int)pixel[3] &lt;&lt; <span class=\"stringliteral\">&quot; &quot;</span> &lt;&lt;</div>\n\
<div class=\"line\">                        (<span class=\"keywordtype\">int</span>)pixel[2] &lt;&lt; &quot; &quot; &lt;&lt;</div>\n\
<div class=\"line\">                        (<span class=\"keywordtype\">int</span>)pixel[1] &lt;&lt; std::endl;</div>\n\
<div class=\"line\"><span class=\"preprocessor\">#endif</span></div>\n\
<div class=\"line\">                }</div>\n\
<div class=\"line\">                <span class=\"keywordflow\">else</span> <span class=\"comment\">// 16 bit</span></div>\n\
<div class=\"line\">                {</div>\n\
<div class=\"line\"><span class=\"preprocessor\">#if defined(_WIN32) || defined(LINUX)</span></div>\n\
<div class=\"line\">                    out &lt;&lt; ((int)pixel[4]&lt;&lt;8)+(int)pixel[5] &lt;&lt; <span class=\"stringliteral\">&quot; &quot;</span> </div>\n\
<div class=\"line\">                        &lt;&lt; ((<span class=\"keywordtype\">int</span>)pixel[2]&lt;&lt;8)+(<span class=\"keywordtype\">int</span>)pixel[3] &lt;&lt; <span class=\"stringliteral\">&quot; &quot;</span> </div>\n\
<div class=\"line\">                        &lt;&lt; ((int)pixel[0]&lt;&lt;8)+(int)pixel[1] &lt;&lt; std::endl;</div>\n\
<div class=\"line\"><span class=\"preprocessor\">#else</span></div>\n\
<div class=\"line\">                    out &lt;&lt; ((int)pixel[6]&lt;&lt;8)+(int)pixel[7] &lt;&lt; <span class=\"stringliteral\">&quot; &quot;</span> </div>\n\
<div class=\"line\">                        &lt;&lt; ((<span class=\"keywordtype\">int</span>)pixel[4]&lt;&lt;8)+(<span class=\"keywordtype\">int</span>)pixel[5] &lt;&lt; <span class=\"stringliteral\">&quot; &quot;</span> </div>\n\
<div class=\"line\">                        &lt;&lt; ((int)pixel[2]&lt;&lt;8)+(int)pixel[3] &lt;&lt; std::endl;</div>\n\
<div class=\"line\"><span class=\"preprocessor\">#endif</span></div>\n\
<div class=\"line\">                }</div>\n\
<div class=\"line\">            }</div>\n\
<div class=\"line\">    }</div>\n\
<div class=\"line\"></div>\n\
<div class=\"line\">    IFFCHECKERR (stat, getPixel);</div>\n\
<div class=\"line\"></div>\n\
<div class=\"line\">    stat = reader.close ();</div>\n\
<div class=\"line\">    IFFCHECKERR (stat, close);</div>\n\
<div class=\"line\"></div>\n\
<div class=\"line\">    <span class=\"keywordflow\">return</span> MS::kSuccess;</div>\n\
<div class=\"line\">}</div>\n\
<div class=\"line\"></div>\n\
<div class=\"line\"><a class=\"code\" href=\"#!/url=./cpp_ref/class_m_status.html\">MStatus</a> initializePlugin( <a name=\"_a10\"></a><a class=\"code\" href=\"#!/url=./cpp_ref/class_m_object.html\">MObject</a> obj )</div>\n\
<div class=\"line\">{</div>\n\
<div class=\"line\">    <a class=\"code\" href=\"#!/url=./cpp_ref/class_m_status.html\">MStatus</a> status;</div>\n\
<div class=\"line\">    <a name=\"_a11\"></a><a class=\"code\" href=\"#!/url=./cpp_ref/class_m_fn_plugin.html\">MFnPlugin</a> plugin( obj, PLUGIN_COMPANY, <span class=\"stringliteral\">&quot;3.0&quot;</span>, <span class=\"stringliteral\">&quot;Any&quot;</span>);</div>\n\
<div class=\"line\">    status = plugin.registerCommand( <span class=\"stringliteral\">&quot;iffPpm&quot;</span>, iffPpm::creator );</div>\n\
<div class=\"line\"></div>\n\
<div class=\"line\">    <span class=\"keywordflow\">if</span> (!status)</div>\n\
<div class=\"line\">        status.<a name=\"a12\"></a><a class=\"code\" href=\"#!/url=./cpp_ref/class_m_status.html#a1f01a4748fea4d8bcced082df83f804d\">perror</a>(<span class=\"stringliteral\">&quot;registerCommand&quot;</span>);</div>\n\
<div class=\"line\"></div>\n\
<div class=\"line\">    <span class=\"keywordflow\">return</span> status;</div>\n\
<div class=\"line\">}</div>\n\
<div class=\"line\"></div>\n\
<div class=\"line\"><a class=\"code\" href=\"#!/url=./cpp_ref/class_m_status.html\">MStatus</a> uninitializePlugin( <a class=\"code\" href=\"#!/url=./cpp_ref/class_m_object.html\">MObject</a> obj )</div>\n\
<div class=\"line\">{</div>\n\
<div class=\"line\">    <a class=\"code\" href=\"#!/url=./cpp_ref/class_m_status.html\">MStatus</a> status;</div>\n\
<div class=\"line\">    <a class=\"code\" href=\"#!/url=./cpp_ref/class_m_fn_plugin.html\">MFnPlugin</a> plugin( obj );</div>\n\
<div class=\"line\">    status = plugin.deregisterCommand( <span class=\"stringliteral\">&quot;iffPpm&quot;</span> );</div>\n\
<div class=\"line\"></div>\n\
<div class=\"line\">    <span class=\"keywordflow\">if</span> (!status)</div>\n\
<div class=\"line\">        status.<a class=\"code\" href=\"#!/url=./cpp_ref/class_m_status.html#a1f01a4748fea4d8bcced082df83f804d\">perror</a>(<span class=\"stringliteral\">&quot;deregisterCommand&quot;</span>);</div>\n\
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