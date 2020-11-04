var topic = "<!-- saved from url=(0024)http://docs.autodesk.com -->\n\
<html>\n\
   <head><script src=\"../scripts/yepnope.1.5.4-min.js\" type=\"text/javascript\"></script><script src=\"../scripts/lib/jquery-1.11.1.min.js\" type=\"text/javascript\"></script>\n\
      <title>C++ API Reference: latticeNoise/latticeNoiseNode.cpp</title>\n\
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
    cpp_ref_adsk_ref_toc.initNavTree(\'lattice_noise_2lattice_noise_node_8cpp-example.html\', tocPrefix);\n\
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
            <h1>C++ API Reference: latticeNoise/latticeNoiseNode.cpp</h1>\n\
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
<div class=\"title\">latticeNoise/latticeNoiseNode.cpp</div>  </div>\n\
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
<div class=\"line\"><span class=\"comment\">//  Class: latticeNoiseNode</span></div>\n\
<div class=\"line\"><span class=\"comment\">//</span></div>\n\
<div class=\"line\"><span class=\"comment\">//  Description:</span></div>\n\
<div class=\"line\"><span class=\"comment\">//      A &quot;latticeNoise&quot; node adds random noise to lattice geometry over time.</span></div>\n\
<div class=\"line\"><span class=\"comment\">//      This makes the geometry being deformed by the lattice look like </span></div>\n\
<div class=\"line\"><span class=\"comment\">//      wobbly jello.</span></div>\n\
<div class=\"line\"><span class=\"comment\">//</span></div>\n\
<div class=\"line\"><span class=\"comment\">//</span></div>\n\
<div class=\"line\"><span class=\"comment\">//  Node:       latticeNoise</span></div>\n\
<div class=\"line\"><span class=\"comment\">//</span></div>\n\
<div class=\"line\"><span class=\"comment\">//  Attributes: input     - input lattice </span></div>\n\
<div class=\"line\"><span class=\"comment\">//              amplitude - amplitude of the noise</span></div>\n\
<div class=\"line\"><span class=\"comment\">//              frequency - frequency of the noise</span></div>\n\
<div class=\"line\"><span class=\"comment\">//              time      - the current time</span></div>\n\
<div class=\"line\"><span class=\"comment\">//              output    - the modified lattice</span></div>\n\
<div class=\"line\"><span class=\"comment\">//  </span></div>\n\
<div class=\"line\"><span class=\"preprocessor\">#include &quot;latticeNoise.h&quot;</span></div>\n\
<div class=\"line\"></div>\n\
<div class=\"line\"><span class=\"preprocessor\">#include &lt;string.h&gt;</span></div>\n\
<div class=\"line\"><span class=\"preprocessor\">#include &lt;maya/MIOStream.h&gt;</span></div>\n\
<div class=\"line\"><span class=\"preprocessor\">#include &lt;stdio.h&gt;</span></div>\n\
<div class=\"line\"><span class=\"preprocessor\">#include &lt;math.h&gt;</span></div>\n\
<div class=\"line\"></div>\n\
<div class=\"line\"><span class=\"preprocessor\">#include &lt;maya/MFnUnitAttribute.h&gt;</span>  </div>\n\
<div class=\"line\"><span class=\"preprocessor\">#include &lt;maya/MFnNumericAttribute.h&gt;</span></div>\n\
<div class=\"line\"><span class=\"preprocessor\">#include &lt;maya/MFnTypedAttribute.h&gt;</span>  </div>\n\
<div class=\"line\"><span class=\"preprocessor\">#include &lt;maya/MFnLattice.h&gt;</span></div>\n\
<div class=\"line\"><span class=\"preprocessor\">#include &lt;maya/MFnLatticeData.h&gt;</span></div>\n\
<div class=\"line\"></div>\n\
<div class=\"line\"><span class=\"preprocessor\">#include &lt;maya/MString.h&gt;</span> </div>\n\
<div class=\"line\"><span class=\"preprocessor\">#include &lt;maya/MTypeId.h&gt;</span> </div>\n\
<div class=\"line\"><span class=\"preprocessor\">#include &lt;maya/MPlug.h&gt;</span> </div>\n\
<div class=\"line\"><span class=\"preprocessor\">#include &lt;maya/MDataBlock.h&gt;</span></div>\n\
<div class=\"line\"><span class=\"preprocessor\">#include &lt;maya/MDataHandle.h&gt;</span> </div>\n\
<div class=\"line\"><span class=\"preprocessor\">#include &lt;maya/MTime.h&gt;</span></div>\n\
<div class=\"line\"></div>\n\
<div class=\"line\"><span class=\"comment\">// CONSTANTS</span></div>\n\
<div class=\"line\"><span class=\"comment\">//</span></div>\n\
<div class=\"line\"><span class=\"preprocessor\">#define DEF_AMPLITUDE 0.2</span></div>\n\
<div class=\"line\"><span class=\"preprocessor\">#define DEF_FREQ      4.0 </span></div>\n\
<div class=\"line\"></div>\n\
<div class=\"line\"><span class=\"preprocessor\">#define McheckErr(stat,msg)          \\</span></div>\n\
<div class=\"line\"><span class=\"preprocessor\">    if ( MS::kSuccess != stat ) {   \\</span></div>\n\
<div class=\"line\"><span class=\"preprocessor\">        cerr &lt;&lt; msg;                \\</span></div>\n\
<div class=\"line\"><span class=\"preprocessor\">        return MS::kFailure;        \\</span></div>\n\
<div class=\"line\"><span class=\"preprocessor\">    }</span></div>\n\
<div class=\"line\"></div>\n\
<div class=\"line\"></div>\n\
<div class=\"line\"><span class=\"comment\">//             latticeNoiseNode Methods                 //</span></div>\n\
<div class=\"line\"><span class=\"comment\"></span></div>\n\
<div class=\"line\"><a name=\"_a0\"></a><a class=\"code\" href=\"#!/url=./cpp_ref/class_m_type_id.html\">MTypeId</a>     latticeNoiseNode::id( 0x80010 );</div>\n\
<div class=\"line\"><a name=\"_a1\"></a><a class=\"code\" href=\"#!/url=./cpp_ref/class_m_object.html\">MObject</a>     latticeNoiseNode::input;  </div>\n\
<div class=\"line\"><a class=\"code\" href=\"#!/url=./cpp_ref/class_m_object.html\">MObject</a>     latticeNoiseNode::amplitude;  </div>\n\
<div class=\"line\"><a class=\"code\" href=\"#!/url=./cpp_ref/class_m_object.html\">MObject</a>     latticeNoiseNode::frequency;  </div>\n\
<div class=\"line\"><a class=\"code\" href=\"#!/url=./cpp_ref/class_m_object.html\">MObject</a>     latticeNoiseNode::time;      </div>\n\
<div class=\"line\"><a class=\"code\" href=\"#!/url=./cpp_ref/class_m_object.html\">MObject</a>     latticeNoiseNode::output;       </div>\n\
<div class=\"line\"></div>\n\
<div class=\"line\"><a name=\"_a2\"></a><a class=\"code\" href=\"#!/url=./cpp_ref/class_m_status.html\">MStatus</a> latticeNoiseNode::compute( <span class=\"keyword\">const</span> <a name=\"_a3\"></a><a class=\"code\" href=\"#!/url=./cpp_ref/class_m_plug.html\">MPlug</a>&amp; plug, <a name=\"_a4\"></a><a class=\"code\" href=\"#!/url=./cpp_ref/class_m_data_block.html\">MDataBlock</a>&amp; data )</div>\n\
<div class=\"line\">{ </div>\n\
<div class=\"line\">    <a class=\"code\" href=\"#!/url=./cpp_ref/class_m_status.html\">MStatus</a> returnStatus;</div>\n\
<div class=\"line\"></div>\n\
<div class=\"line\">    <span class=\"keywordtype\">float</span> noiseAmplitude;</div>\n\
<div class=\"line\">    <span class=\"keywordtype\">float</span> noiseFreq;</div>\n\
<div class=\"line\"> </div>\n\
<div class=\"line\">    <span class=\"keywordflow\">if</span>( plug == output )</div>\n\
<div class=\"line\">    {</div>\n\
<div class=\"line\">        <span class=\"comment\">// Get the lattice data from the input attribute.  First get the </span></div>\n\
<div class=\"line\">        <span class=\"comment\">// data object, and then use the lattice data function set to extract</span></div>\n\
<div class=\"line\">        <span class=\"comment\">// the actual lattice.</span></div>\n\
<div class=\"line\">        <span class=\"comment\">//</span></div>\n\
<div class=\"line\"></div>\n\
<div class=\"line\">        <span class=\"comment\">// Get the data handle</span></div>\n\
<div class=\"line\">        <span class=\"comment\">//</span></div>\n\
<div class=\"line\">        <a name=\"_a5\"></a><a class=\"code\" href=\"#!/url=./cpp_ref/class_m_data_handle.html\">MDataHandle</a> inputData = data.<a name=\"a6\"></a><a class=\"code\" href=\"#!/url=./cpp_ref/class_m_data_block.html#af4a356799acd4ed070d372ed7cfb4706\">inputValue</a>( input, &amp;returnStatus );</div>\n\
<div class=\"line\">        McheckErr( returnStatus, <span class=\"stringliteral\">&quot;ERROR getting lattice data handle\\n&quot;</span> ); </div>\n\
<div class=\"line\">        <span class=\"comment\">// Get the data object</span></div>\n\
<div class=\"line\">        <span class=\"comment\">//</span></div>\n\
<div class=\"line\">        <a class=\"code\" href=\"#!/url=./cpp_ref/class_m_object.html\">MObject</a> latticeData = inputData.<a name=\"a7\"></a><a class=\"code\" href=\"#!/url=./cpp_ref/class_m_data_handle.html#a31773b870681e1f6b3ad82ff58de33bc\">data</a>(); </div>\n\
<div class=\"line\">        <a name=\"_a8\"></a><a class=\"code\" href=\"#!/url=./cpp_ref/class_m_fn_lattice_data.html\">MFnLatticeData</a> dataFn( latticeData );</div>\n\
<div class=\"line\">        <span class=\"comment\">// Get the actual geometry</span></div>\n\
<div class=\"line\">        <span class=\"comment\">// </span></div>\n\
<div class=\"line\">        <a class=\"code\" href=\"#!/url=./cpp_ref/class_m_object.html\">MObject</a> lattice = dataFn.lattice();</div>\n\
<div class=\"line\">        <a name=\"_a9\"></a><a class=\"code\" href=\"#!/url=./cpp_ref/class_m_fn_lattice.html\">MFnLattice</a> lattFn( lattice, &amp;returnStatus );</div>\n\
<div class=\"line\">        McheckErr( returnStatus, <span class=\"stringliteral\">&quot;ERROR getting lattice geometry\\n&quot;</span> );  </div>\n\
<div class=\"line\"></div>\n\
<div class=\"line\"></div>\n\
<div class=\"line\">        <span class=\"comment\">// Do the same for the output lattice</span></div>\n\
<div class=\"line\">        <span class=\"comment\">//</span></div>\n\
<div class=\"line\">        <a class=\"code\" href=\"#!/url=./cpp_ref/class_m_data_handle.html\">MDataHandle</a> outputData = data.<a name=\"a10\"></a><a class=\"code\" href=\"#!/url=./cpp_ref/class_m_data_block.html#a5e4082d6ab961bee4ec0281676bb4834\">outputValue</a>( output, &amp;returnStatus ); </div>\n\
<div class=\"line\">        McheckErr( returnStatus, <span class=\"stringliteral\">&quot;ERROR getting lattice data handle\\n&quot;</span> );</div>\n\
<div class=\"line\">        <span class=\"comment\">// Get the data object</span></div>\n\
<div class=\"line\">        <span class=\"comment\">//</span></div>\n\
<div class=\"line\">        latticeData = outputData.<a class=\"code\" href=\"#!/url=./cpp_ref/class_m_data_handle.html#a31773b870681e1f6b3ad82ff58de33bc\">data</a>(); </div>\n\
<div class=\"line\">        <span class=\"keywordflow\">if</span> ( latticeData.<a name=\"a11\"></a><a class=\"code\" href=\"#!/url=./cpp_ref/class_m_object.html#ac02f2a4d7312eb91f40980adfd4e31b2\">isNull</a>() ) { </div>\n\
<div class=\"line\">            <span class=\"comment\">// The data object for this attribute has not been created yet, so</span></div>\n\
<div class=\"line\">            <span class=\"comment\">// we&#39;ll create it</span></div>\n\
<div class=\"line\">            <span class=\"comment\">//</span></div>\n\
<div class=\"line\">            latticeData = dataFn.create();</div>\n\
<div class=\"line\">        } <span class=\"keywordflow\">else</span> {</div>\n\
<div class=\"line\">            <span class=\"comment\">// Use the data object that is already there</span></div>\n\
<div class=\"line\">            <span class=\"comment\">// </span></div>\n\
<div class=\"line\">            dataFn.setObject( latticeData );</div>\n\
<div class=\"line\">        }</div>\n\
<div class=\"line\">        <span class=\"comment\">// Get the actual geometry</span></div>\n\
<div class=\"line\">        <span class=\"comment\">// </span></div>\n\
<div class=\"line\">        <a class=\"code\" href=\"#!/url=./cpp_ref/class_m_object.html\">MObject</a> outLattice = dataFn.lattice();</div>\n\
<div class=\"line\">        <a class=\"code\" href=\"#!/url=./cpp_ref/class_m_fn_lattice.html\">MFnLattice</a> outLattFn( outLattice, &amp;returnStatus );</div>\n\
<div class=\"line\">        McheckErr( returnStatus, <span class=\"stringliteral\">&quot;ERROR getting lattice geometry\\n&quot;</span> );  </div>\n\
<div class=\"line\"></div>\n\
<div class=\"line\">        <span class=\"comment\">// Get the amplitude and frequency</span></div>\n\
<div class=\"line\">        <span class=\"comment\">//</span></div>\n\
<div class=\"line\">        <a class=\"code\" href=\"#!/url=./cpp_ref/class_m_data_handle.html\">MDataHandle</a> ampData = data.<a class=\"code\" href=\"#!/url=./cpp_ref/class_m_data_block.html#af4a356799acd4ed070d372ed7cfb4706\">inputValue</a>( amplitude, &amp;returnStatus );</div>\n\
<div class=\"line\">        McheckErr( returnStatus, <span class=\"stringliteral\">&quot;ERROR getting amplitude\\n&quot;</span> );</div>\n\
<div class=\"line\">        noiseAmplitude = ampData.<a name=\"a12\"></a><a class=\"code\" href=\"#!/url=./cpp_ref/class_m_data_handle.html#a43df510424a7de372dd130315d9f223c\">asFloat</a>(); </div>\n\
<div class=\"line\"></div>\n\
<div class=\"line\">        <a class=\"code\" href=\"#!/url=./cpp_ref/class_m_data_handle.html\">MDataHandle</a> freqData = data.<a class=\"code\" href=\"#!/url=./cpp_ref/class_m_data_block.html#af4a356799acd4ed070d372ed7cfb4706\">inputValue</a>( frequency, &amp;returnStatus );</div>\n\
<div class=\"line\">        McheckErr( returnStatus, <span class=\"stringliteral\">&quot;ERROR getting frequency\\n&quot;</span> );</div>\n\
<div class=\"line\">        noiseFreq = freqData.<a class=\"code\" href=\"#!/url=./cpp_ref/class_m_data_handle.html#a43df510424a7de372dd130315d9f223c\">asFloat</a>(); </div>\n\
<div class=\"line\"></div>\n\
<div class=\"line\">        <span class=\"comment\">// Get the time.  </span></div>\n\
<div class=\"line\">        <span class=\"comment\">//</span></div>\n\
<div class=\"line\">        <a class=\"code\" href=\"#!/url=./cpp_ref/class_m_data_handle.html\">MDataHandle</a> timeData = data.<a class=\"code\" href=\"#!/url=./cpp_ref/class_m_data_block.html#af4a356799acd4ed070d372ed7cfb4706\">inputValue</a>( time, &amp;returnStatus ); </div>\n\
<div class=\"line\">        McheckErr( returnStatus, <span class=\"stringliteral\">&quot;ERROR getting time data handle\\n&quot;</span> );</div>\n\
<div class=\"line\">        <a name=\"_a13\"></a><a class=\"code\" href=\"#!/url=./cpp_ref/class_m_time.html\">MTime</a> time = timeData.<a name=\"a14\"></a><a class=\"code\" href=\"#!/url=./cpp_ref/class_m_data_handle.html#aaa4774146bfa48e040aea132d03b900c\">asTime</a>();</div>\n\
<div class=\"line\">        <span class=\"keywordtype\">float</span> seconds = (float)time.<a name=\"a15\"></a><a class=\"code\" href=\"#!/url=./cpp_ref/class_m_time.html#a105d41236561f4d4be6383ced757a429\">as</a>( MTime::kSeconds );</div>\n\
<div class=\"line\"></div>\n\
<div class=\"line\">        <span class=\"comment\">// Easiest way to modify frequency is by modifying the time</span></div>\n\
<div class=\"line\">        <span class=\"comment\">//</span></div>\n\
<div class=\"line\">        seconds = seconds * noiseFreq;</div>\n\
<div class=\"line\"></div>\n\
<div class=\"line\">        <span class=\"comment\">// We have the information we need now.  We&#39;ll apply noise to the</span></div>\n\
<div class=\"line\">        <span class=\"comment\">// points upon the lattice</span></div>\n\
<div class=\"line\">        <span class=\"comment\">//</span></div>\n\
<div class=\"line\">        <span class=\"keywordtype\">unsigned</span> s, t, u;</div>\n\
<div class=\"line\">        lattFn.getDivisions( s, t, u );</div>\n\
<div class=\"line\">        <span class=\"comment\">// match up the divisions in the lattices</span></div>\n\
<div class=\"line\">        <span class=\"comment\">//</span></div>\n\
<div class=\"line\">        outLattFn.setDivisions( s, t, u );   </div>\n\
<div class=\"line\"></div>\n\
<div class=\"line\">        <span class=\"keywordflow\">for</span> ( <span class=\"keywordtype\">unsigned</span> i = 0; i &lt; s; i++ ) {</div>\n\
<div class=\"line\">            <span class=\"keywordflow\">for</span> ( <span class=\"keywordtype\">unsigned</span> j = 0; j &lt; t; j++ ) {</div>\n\
<div class=\"line\">                <span class=\"keywordflow\">for</span> ( <span class=\"keywordtype\">unsigned</span> k = 0; k &lt; u; k++ ) {</div>\n\
<div class=\"line\">                    <a name=\"_a16\"></a><a class=\"code\" href=\"#!/url=./cpp_ref/class_m_point.html\">MPoint</a> &amp; point = lattFn.point( i, j, k );</div>\n\
<div class=\"line\">                    <a class=\"code\" href=\"#!/url=./cpp_ref/class_m_point.html\">MPoint</a> &amp; outPoint = outLattFn.point( i, j, k );</div>\n\
<div class=\"line\">                    pnt noisePnt = noise::atPointAndTime( (<span class=\"keywordtype\">float</span>)point.<a name=\"a17\"></a><a class=\"code\" href=\"#!/url=./cpp_ref/class_m_point.html#af88b946fb90d5f08b5fb740c70e98c10\">x</a>, (<span class=\"keywordtype\">float</span>)point.<a name=\"a18\"></a><a class=\"code\" href=\"#!/url=./cpp_ref/class_m_point.html#ab927965981178aa1fba979a37168db2a\">y</a>, </div>\n\
<div class=\"line\">                                                          (<span class=\"keywordtype\">float</span>)point.<a name=\"a19\"></a><a class=\"code\" href=\"#!/url=./cpp_ref/class_m_point.html#ab3e6ed577a7c669c19de1f9c1b46c872\">z</a>, seconds );</div>\n\
<div class=\"line\">                    <span class=\"comment\">// Make noise between -1 and 1 instead of 0 and 1</span></div>\n\
<div class=\"line\">                    <span class=\"comment\">//</span></div>\n\
<div class=\"line\">                    noisePnt.x =  ( noisePnt.x * 2.0F ) - 1.0F;</div>\n\
<div class=\"line\">                    noisePnt.y =  ( noisePnt.y * 2.0F ) - 1.0F;</div>\n\
<div class=\"line\">                    noisePnt.z =  ( noisePnt.z * 2.0F ) - 1.0F;</div>\n\
<div class=\"line\"></div>\n\
<div class=\"line\">                    outPoint.<a class=\"code\" href=\"#!/url=./cpp_ref/class_m_point.html#af88b946fb90d5f08b5fb740c70e98c10\">x</a> = point.<a class=\"code\" href=\"#!/url=./cpp_ref/class_m_point.html#af88b946fb90d5f08b5fb740c70e98c10\">x</a> + ( noisePnt.x * noiseAmplitude );</div>\n\
<div class=\"line\">                    outPoint.<a class=\"code\" href=\"#!/url=./cpp_ref/class_m_point.html#ab927965981178aa1fba979a37168db2a\">y</a> = point.<a class=\"code\" href=\"#!/url=./cpp_ref/class_m_point.html#ab927965981178aa1fba979a37168db2a\">y</a> + ( noisePnt.y * noiseAmplitude );</div>\n\
<div class=\"line\">                    outPoint.<a class=\"code\" href=\"#!/url=./cpp_ref/class_m_point.html#ab3e6ed577a7c669c19de1f9c1b46c872\">z</a> = point.<a class=\"code\" href=\"#!/url=./cpp_ref/class_m_point.html#ab3e6ed577a7c669c19de1f9c1b46c872\">z</a> + ( noisePnt.z * noiseAmplitude );  </div>\n\
<div class=\"line\">                }</div>\n\
<div class=\"line\">            }</div>\n\
<div class=\"line\">        } </div>\n\
<div class=\"line\">        outputData.<a name=\"a20\"></a><a class=\"code\" href=\"#!/url=./cpp_ref/class_m_data_handle.html#a2a75482f517f405a641c0eee0bd995ac\">set</a>( latticeData );</div>\n\
<div class=\"line\">        data.<a name=\"a21\"></a><a class=\"code\" href=\"#!/url=./cpp_ref/class_m_data_block.html#aceb46f1065ef1cd730c4ab15d61466cc\">setClean</a>(plug); </div>\n\
<div class=\"line\">    } <span class=\"keywordflow\">else</span> {</div>\n\
<div class=\"line\">        <span class=\"keywordflow\">return</span> MS::kUnknownParameter;</div>\n\
<div class=\"line\">    }</div>\n\
<div class=\"line\"></div>\n\
<div class=\"line\">    <span class=\"keywordflow\">return</span> MS::kSuccess;</div>\n\
<div class=\"line\">}</div>\n\
<div class=\"line\"></div>\n\
<div class=\"line\"><span class=\"keywordtype\">void</span>* latticeNoiseNode::creator()</div>\n\
<div class=\"line\">{</div>\n\
<div class=\"line\">    <span class=\"keywordflow\">return</span> <span class=\"keyword\">new</span> latticeNoiseNode;</div>\n\
<div class=\"line\">}</div>\n\
<div class=\"line\"></div>\n\
<div class=\"line\"><a class=\"code\" href=\"#!/url=./cpp_ref/class_m_status.html\">MStatus</a> latticeNoiseNode::initialize()</div>\n\
<div class=\"line\">{ </div>\n\
<div class=\"line\">    <a name=\"_a22\"></a><a class=\"code\" href=\"#!/url=./cpp_ref/class_m_fn_unit_attribute.html\">MFnUnitAttribute</a>    unitAttr;</div>\n\
<div class=\"line\">    <a name=\"_a23\"></a><a class=\"code\" href=\"#!/url=./cpp_ref/class_m_fn_typed_attribute.html\">MFnTypedAttribute</a>   typedAttr;</div>\n\
<div class=\"line\">    <a name=\"_a24\"></a><a class=\"code\" href=\"#!/url=./cpp_ref/class_m_fn_numeric_attribute.html\">MFnNumericAttribute</a> numAttr;</div>\n\
<div class=\"line\"></div>\n\
<div class=\"line\">    <a class=\"code\" href=\"#!/url=./cpp_ref/class_m_status.html\">MStatus</a> stat;</div>\n\
<div class=\"line\"></div>\n\
<div class=\"line\">    input = typedAttr.<a name=\"a25\"></a><a class=\"code\" href=\"#!/url=./cpp_ref/class_m_fn_typed_attribute.html#af785af0a66bd4a4da1d9f7bd74d4de0a\">create</a>( <span class=\"stringliteral\">&quot;input&quot;</span>, <span class=\"stringliteral\">&quot;in&quot;</span>, MFnData::kLattice, <a name=\"a26\"></a><a class=\"code\" href=\"#!/url=./cpp_ref/class_m_object.html#af2a707b4254eb54763167aeced863e63\">MObject::kNullObj</a>, &amp;stat );</div>\n\
<div class=\"line\">    <span class=\"keywordflow\">if</span> ( !stat ) {</div>\n\
<div class=\"line\">        stat.<a name=\"a27\"></a><a class=\"code\" href=\"#!/url=./cpp_ref/class_m_status.html#a1f01a4748fea4d8bcced082df83f804d\">perror</a>(<span class=\"stringliteral\">&quot;ERROR creating latticeNoiseNode input lattice attribute&quot;</span>);</div>\n\
<div class=\"line\">        <span class=\"keywordflow\">return</span> stat;</div>\n\
<div class=\"line\">    }</div>\n\
<div class=\"line\"></div>\n\
<div class=\"line\">    amplitude = numAttr.<a name=\"a28\"></a><a class=\"code\" href=\"#!/url=./cpp_ref/class_m_fn_numeric_attribute.html#a5c08a5ce5e7123cc444c95a0e4a50f29\">create</a>( <span class=\"stringliteral\">&quot;amplitude&quot;</span>, <span class=\"stringliteral\">&quot;amp&quot;</span>, </div>\n\
<div class=\"line\">                                               MFnNumericData::kFloat,</div>\n\
<div class=\"line\">                                               DEF_AMPLITUDE,</div>\n\
<div class=\"line\">                                               &amp;stat );</div>\n\
<div class=\"line\">    <span class=\"keywordflow\">if</span> ( !stat ) {</div>\n\
<div class=\"line\">        stat.<a class=\"code\" href=\"#!/url=./cpp_ref/class_m_status.html#a1f01a4748fea4d8bcced082df83f804d\">perror</a>(<span class=\"stringliteral\">&quot;ERROR creating latticeNoiseNode amplitude attribute&quot;</span>);</div>\n\
<div class=\"line\">        <span class=\"keywordflow\">return</span> stat;</div>\n\
<div class=\"line\">    }</div>\n\
<div class=\"line\"></div>\n\
<div class=\"line\">    frequency = numAttr.<a class=\"code\" href=\"#!/url=./cpp_ref/class_m_fn_numeric_attribute.html#a5c08a5ce5e7123cc444c95a0e4a50f29\">create</a>( <span class=\"stringliteral\">&quot;frequency&quot;</span>, <span class=\"stringliteral\">&quot;fq&quot;</span>, </div>\n\
<div class=\"line\">                                               MFnNumericData::kFloat,</div>\n\
<div class=\"line\">                                               DEF_FREQ,</div>\n\
<div class=\"line\">                                               &amp;stat );</div>\n\
<div class=\"line\">    <span class=\"keywordflow\">if</span> ( !stat ) {</div>\n\
<div class=\"line\">        stat.<a class=\"code\" href=\"#!/url=./cpp_ref/class_m_status.html#a1f01a4748fea4d8bcced082df83f804d\">perror</a>(<span class=\"stringliteral\">&quot;ERROR creating latticeNoiseNode frequency attribute&quot;</span>);</div>\n\
<div class=\"line\">        <span class=\"keywordflow\">return</span> stat;</div>\n\
<div class=\"line\">    }</div>\n\
<div class=\"line\"></div>\n\
<div class=\"line\">    time = unitAttr.<a name=\"a29\"></a><a class=\"code\" href=\"#!/url=./cpp_ref/class_m_fn_unit_attribute.html#a31f804de81a968aa11b510a6231e7874\">create</a>( <span class=\"stringliteral\">&quot;time&quot;</span>, <span class=\"stringliteral\">&quot;tm&quot;</span>, MFnUnitAttribute::kTime,</div>\n\
<div class=\"line\">                                            0.0, &amp;stat );</div>\n\
<div class=\"line\">    <span class=\"keywordflow\">if</span> ( !stat ) {</div>\n\
<div class=\"line\">        stat.<a class=\"code\" href=\"#!/url=./cpp_ref/class_m_status.html#a1f01a4748fea4d8bcced082df83f804d\">perror</a>(<span class=\"stringliteral\">&quot;ERROR creating latticeNoiseNode time attribute&quot;</span>);</div>\n\
<div class=\"line\">        <span class=\"keywordflow\">return</span> stat;</div>\n\
<div class=\"line\">    }</div>\n\
<div class=\"line\"></div>\n\
<div class=\"line\">    output = typedAttr.<a class=\"code\" href=\"#!/url=./cpp_ref/class_m_fn_typed_attribute.html#af785af0a66bd4a4da1d9f7bd74d4de0a\">create</a>( <span class=\"stringliteral\">&quot;output&quot;</span>, <span class=\"stringliteral\">&quot;out&quot;</span>, MFnData::kLattice, <a class=\"code\" href=\"#!/url=./cpp_ref/class_m_object.html#af2a707b4254eb54763167aeced863e63\">MObject::kNullObj</a>, &amp;stat ); </div>\n\
<div class=\"line\">    <span class=\"keywordflow\">if</span> ( !stat ) {</div>\n\
<div class=\"line\">        stat.<a class=\"code\" href=\"#!/url=./cpp_ref/class_m_status.html#a1f01a4748fea4d8bcced082df83f804d\">perror</a>(<span class=\"stringliteral\">&quot;ERROR creating latticeNoiseNode output attribute&quot;</span>);</div>\n\
<div class=\"line\">        <span class=\"keywordflow\">return</span> stat;</div>\n\
<div class=\"line\">    }</div>\n\
<div class=\"line\">    typedAttr.<a name=\"a30\"></a><a class=\"code\" href=\"#!/url=./cpp_ref/class_m_fn_attribute.html#a98bb3089ec3b7442383da68a5ef424c7\">setWritable</a>(<span class=\"keyword\">false</span>);</div>\n\
<div class=\"line\"></div>\n\
<div class=\"line\">    stat = addAttribute( input );</div>\n\
<div class=\"line\">        <span class=\"keywordflow\">if</span> (!stat) { stat.<a class=\"code\" href=\"#!/url=./cpp_ref/class_m_status.html#a1f01a4748fea4d8bcced082df83f804d\">perror</a>(<span class=\"stringliteral\">&quot;addAttribute&quot;</span>); <span class=\"keywordflow\">return</span> stat;}</div>\n\
<div class=\"line\">    stat = addAttribute( amplitude );</div>\n\
<div class=\"line\">        <span class=\"keywordflow\">if</span> (!stat) { stat.<a class=\"code\" href=\"#!/url=./cpp_ref/class_m_status.html#a1f01a4748fea4d8bcced082df83f804d\">perror</a>(<span class=\"stringliteral\">&quot;addAttribute&quot;</span>); <span class=\"keywordflow\">return</span> stat;}</div>\n\
<div class=\"line\">    stat = addAttribute( frequency );</div>\n\
<div class=\"line\">        <span class=\"keywordflow\">if</span> (!stat) { stat.<a class=\"code\" href=\"#!/url=./cpp_ref/class_m_status.html#a1f01a4748fea4d8bcced082df83f804d\">perror</a>(<span class=\"stringliteral\">&quot;addAttribute&quot;</span>); <span class=\"keywordflow\">return</span> stat;}</div>\n\
<div class=\"line\">    stat = addAttribute( time );</div>\n\
<div class=\"line\">        <span class=\"keywordflow\">if</span> (!stat) { stat.<a class=\"code\" href=\"#!/url=./cpp_ref/class_m_status.html#a1f01a4748fea4d8bcced082df83f804d\">perror</a>(<span class=\"stringliteral\">&quot;addAttribute&quot;</span>); <span class=\"keywordflow\">return</span> stat;}</div>\n\
<div class=\"line\">    stat = addAttribute( output );</div>\n\
<div class=\"line\">        <span class=\"keywordflow\">if</span> (!stat) { stat.<a class=\"code\" href=\"#!/url=./cpp_ref/class_m_status.html#a1f01a4748fea4d8bcced082df83f804d\">perror</a>(<span class=\"stringliteral\">&quot;addAttribute&quot;</span>); <span class=\"keywordflow\">return</span> stat;}</div>\n\
<div class=\"line\"></div>\n\
<div class=\"line\">    stat = attributeAffects( input, output );</div>\n\
<div class=\"line\">        <span class=\"keywordflow\">if</span> (!stat) { stat.<a class=\"code\" href=\"#!/url=./cpp_ref/class_m_status.html#a1f01a4748fea4d8bcced082df83f804d\">perror</a>(<span class=\"stringliteral\">&quot;attributeAffects&quot;</span>); <span class=\"keywordflow\">return</span> stat;}</div>\n\
<div class=\"line\">    stat = attributeAffects( amplitude, output );</div>\n\
<div class=\"line\">        <span class=\"keywordflow\">if</span> (!stat) { stat.<a class=\"code\" href=\"#!/url=./cpp_ref/class_m_status.html#a1f01a4748fea4d8bcced082df83f804d\">perror</a>(<span class=\"stringliteral\">&quot;attributeAffects&quot;</span>); <span class=\"keywordflow\">return</span> stat;}</div>\n\
<div class=\"line\">    stat = attributeAffects( frequency, output );</div>\n\
<div class=\"line\">        <span class=\"keywordflow\">if</span> (!stat) { stat.<a class=\"code\" href=\"#!/url=./cpp_ref/class_m_status.html#a1f01a4748fea4d8bcced082df83f804d\">perror</a>(<span class=\"stringliteral\">&quot;attributeAffects&quot;</span>); <span class=\"keywordflow\">return</span> stat;}</div>\n\
<div class=\"line\">    stat = attributeAffects( time, output );</div>\n\
<div class=\"line\">        <span class=\"keywordflow\">if</span> (!stat) { stat.<a class=\"code\" href=\"#!/url=./cpp_ref/class_m_status.html#a1f01a4748fea4d8bcced082df83f804d\">perror</a>(<span class=\"stringliteral\">&quot;attributeAffects&quot;</span>); <span class=\"keywordflow\">return</span> stat;}</div>\n\
<div class=\"line\"></div>\n\
<div class=\"line\"></div>\n\
<div class=\"line\">    <span class=\"keywordflow\">return</span> MS::kSuccess;</div>\n\
<div class=\"line\">}</div>\n\
</div><!-- fragment --> </div><!-- contents -->\n\
</div><!-- doc-content -->\n\
<!-- start footer part -->\n\
\n\
      <div class=\"footer-block\"><a href=\"../html/ac.cmtdialog.htm\" class=\"comments-anchor\" target=\"_blank\"><span class=\"comments-link\">Please send us your comment about this page</span></a></div></div>\n\
   </div></body>\n\
</html>\n\
";