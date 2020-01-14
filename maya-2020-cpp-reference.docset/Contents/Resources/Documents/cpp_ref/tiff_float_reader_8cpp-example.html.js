var topic = "<!-- saved from url=(0024)http://docs.autodesk.com -->\n\
<html>\n\
   <head><script src=\"../scripts/yepnope.1.5.4-min.js\" type=\"text/javascript\"></script><script src=\"../scripts/lib/jquery-1.11.1.min.js\" type=\"text/javascript\"></script>\n\
      <title>C++ API Reference: tiffFloatReader.cpp</title>\n\
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
    cpp_ref_adsk_ref_toc.initNavTree(\'tiff_float_reader_8cpp-example.html\', tocPrefix);\n\
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
            <h1>C++ API Reference: tiffFloatReader.cpp</h1>\n\
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
<div class=\"title\">tiffFloatReader.cpp</div>  </div>\n\
</div><!--header-->\n\
<div class=\"contents\">\n\
<div class=\"fragment\"><div class=\"line\"><span class=\"comment\">//-</span></div>\n\
<div class=\"line\"><span class=\"comment\">// ==========================================================================</span></div>\n\
<div class=\"line\"><span class=\"comment\">// Copyright 2020 Autodesk, Inc.  All rights reserved.</span></div>\n\
<div class=\"line\"><span class=\"comment\">//</span></div>\n\
<div class=\"line\"><span class=\"comment\">// Use of this software is subject to the terms of the Autodesk</span></div>\n\
<div class=\"line\"><span class=\"comment\">// license agreement provided at the time of installation or download,</span></div>\n\
<div class=\"line\"><span class=\"comment\">// or which otherwise accompanies this software in either electronic</span></div>\n\
<div class=\"line\"><span class=\"comment\">// or hard copy form.</span></div>\n\
<div class=\"line\"><span class=\"comment\">// ==========================================================================</span></div>\n\
<div class=\"line\"><span class=\"comment\">//+</span></div>\n\
<div class=\"line\"></div>\n\
<div class=\"line\"><span class=\"comment\">// DESCRIPTION: </span></div>\n\
<div class=\"line\"><span class=\"comment\">//</span></div>\n\
<div class=\"line\"><span class=\"comment\">// Example floating point tif image file reader.</span></div>\n\
<div class=\"line\"><span class=\"comment\">//</span></div>\n\
<div class=\"line\"><span class=\"comment\">// This example demonstrates how to write a .tif float file reader using the API.</span></div>\n\
<div class=\"line\"><span class=\"comment\">// In image reading menu dialogs of Maya, you can select *.* to see all images</span></div>\n\
<div class=\"line\"><span class=\"comment\">// and then retrieve a tiff extension file item to load the .tif file into Maya.</span></div>\n\
<div class=\"line\"><span class=\"comment\">//</span></div>\n\
<div class=\"line\"><span class=\"comment\"></span></div>\n\
<div class=\"line\"><span class=\"preprocessor\">#include &lt;maya/MPxImageFile.h&gt;</span></div>\n\
<div class=\"line\"><span class=\"preprocessor\">#include &lt;maya/MImageFileInfo.h&gt;</span></div>\n\
<div class=\"line\"><span class=\"preprocessor\">#include &lt;maya/MImage.h&gt;</span></div>\n\
<div class=\"line\"><span class=\"preprocessor\">#include &lt;maya/MFnPlugin.h&gt;</span></div>\n\
<div class=\"line\"><span class=\"preprocessor\">#include &lt;maya/MStringArray.h&gt;</span></div>\n\
<div class=\"line\"><span class=\"preprocessor\">#include &lt;maya/MIOStream.h&gt;</span></div>\n\
<div class=\"line\"><span class=\"preprocessor\">#include &lt;maya/MGlobal.h&gt;</span></div>\n\
<div class=\"line\"></div>\n\
<div class=\"line\"><span class=\"comment\">// #pragma warning( disable : 4290 )        // Disable STL warnings.</span></div>\n\
<div class=\"line\"></div>\n\
<div class=\"line\"><span class=\"comment\">// Uncomment this to build with tif library</span></div>\n\
<div class=\"line\"><span class=\"preprocessor\">#define _TIFF_LIBRARY_AVAILABLE_</span></div>\n\
<div class=\"line\"><span class=\"preprocessor\">#if defined(_TIFF_LIBRARY_AVAILABLE_)</span></div>\n\
<div class=\"line\"><span class=\"preprocessor\">#include &quot;tiff.h&quot;</span></div>\n\
<div class=\"line\"><span class=\"preprocessor\">#include &quot;tiffio.h&quot;</span></div>\n\
<div class=\"line\"><span class=\"preprocessor\">#endif</span></div>\n\
<div class=\"line\"></div>\n\
<div class=\"line\"><a name=\"_a0\"></a><a class=\"code\" href=\"#!/url=./cpp_ref/class_m_string.html\">MString</a> kImagePluginName( <span class=\"stringliteral\">&quot;TIFF Float Reader&quot;</span>);</div>\n\
<div class=\"line\"></div>\n\
<div class=\"line\"><span class=\"preprocessor\">#define _TIFF_SUCCESS   1</span></div>\n\
<div class=\"line\"></div>\n\
<div class=\"line\"><span class=\"keyword\">class </span>tiffFloatReader : <span class=\"keyword\">public</span> <a name=\"_a1\"></a><a class=\"code\" href=\"#!/url=./cpp_ref/class_m_px_image_file.html\">MPxImageFile</a></div>\n\
<div class=\"line\">{</div>\n\
<div class=\"line\"><span class=\"keyword\">public</span>:</div>\n\
<div class=\"line\">                    tiffFloatReader();</div>\n\
<div class=\"line\">            ~tiffFloatReader() <span class=\"keyword\">override</span>;</div>\n\
<div class=\"line\">    <span class=\"keyword\">static</span> <span class=\"keywordtype\">void</span>*    creator();</div>\n\
<div class=\"line\">    <a name=\"_a2\"></a><a class=\"code\" href=\"#!/url=./cpp_ref/class_m_status.html\">MStatus</a> <a name=\"a3\"></a><a class=\"code\" href=\"#!/url=./cpp_ref/class_m_px_image_file.html#a693072120ed50338f3b977525d6c1cbb\">open</a>( <a class=\"code\" href=\"#!/url=./cpp_ref/class_m_string.html\">MString</a> pathname, <a name=\"_a4\"></a><a class=\"code\" href=\"#!/url=./cpp_ref/class_m_image_file_info.html\">MImageFileInfo</a>* info) <span class=\"keyword\">override</span>;</div>\n\
<div class=\"line\">    <a class=\"code\" href=\"#!/url=./cpp_ref/class_m_status.html\">MStatus</a> <a name=\"a5\"></a><a class=\"code\" href=\"#!/url=./cpp_ref/class_m_px_image_file.html#af42e5e206ba3b54cea108f6869b379e7\">load</a>( <a name=\"_a6\"></a><a class=\"code\" href=\"#!/url=./cpp_ref/class_m_image.html\">MImage</a>&amp; image, <span class=\"keywordtype\">unsigned</span> <span class=\"keywordtype\">int</span> idx) <span class=\"keyword\">override</span>;</div>\n\
<div class=\"line\">    <a class=\"code\" href=\"#!/url=./cpp_ref/class_m_status.html\">MStatus</a> <a name=\"a7\"></a><a class=\"code\" href=\"#!/url=./cpp_ref/class_m_px_image_file.html#a0a34ca7b49311218db7cf12792d11f2d\">close</a>() <span class=\"keyword\">override</span>;</div>\n\
<div class=\"line\"></div>\n\
<div class=\"line\"><span class=\"keyword\">protected</span>:</div>\n\
<div class=\"line\">    <span class=\"keywordtype\">unsigned</span> <span class=\"keywordtype\">int</span>    fWidth;             <span class=\"comment\">// Width</span></div>\n\
<div class=\"line\">    <span class=\"keywordtype\">unsigned</span> <span class=\"keywordtype\">int</span>    fHeight;            <span class=\"comment\">// Height</span></div>\n\
<div class=\"line\">    <span class=\"keywordtype\">unsigned</span> <span class=\"keywordtype\">int</span>    fChannels;          <span class=\"comment\">// Number of channels</span></div>\n\
<div class=\"line\"></div>\n\
<div class=\"line\"><span class=\"preprocessor\">#if defined(_TIFF_LIBRARY_AVAILABLE_)</span></div>\n\
<div class=\"line\">    TIFF            *fInputFile;        <span class=\"comment\">// Tif interface</span></div>\n\
<div class=\"line\"><span class=\"preprocessor\">#else</span></div>\n\
<div class=\"line\">    <span class=\"keywordtype\">void</span>            *fInputFile;        </div>\n\
<div class=\"line\"><span class=\"preprocessor\">#endif</span></div>\n\
<div class=\"line\">};</div>\n\
<div class=\"line\"></div>\n\
<div class=\"line\"><span class=\"comment\">//</span></div>\n\
<div class=\"line\"><span class=\"comment\">// DESCRIPTION:</span></div>\n\
<div class=\"line\"><span class=\"comment\"></span>tiffFloatReader::tiffFloatReader()</div>\n\
<div class=\"line\">: fInputFile( NULL), </div>\n\
<div class=\"line\">  fChannels( 0), </div>\n\
<div class=\"line\">  fWidth(0),</div>\n\
<div class=\"line\">  fHeight(0)</div>\n\
<div class=\"line\">{</div>\n\
<div class=\"line\"></div>\n\
<div class=\"line\">}</div>\n\
<div class=\"line\"></div>\n\
<div class=\"line\"><span class=\"comment\">//</span></div>\n\
<div class=\"line\"><span class=\"comment\">// DESCRIPTION:</span></div>\n\
<div class=\"line\"><span class=\"comment\">//      Destructor : close the file if opened</span></div>\n\
<div class=\"line\"><span class=\"comment\"></span>tiffFloatReader::~tiffFloatReader()</div>\n\
<div class=\"line\">{</div>\n\
<div class=\"line\">    close();</div>\n\
<div class=\"line\">}</div>\n\
<div class=\"line\"></div>\n\
<div class=\"line\"><span class=\"comment\">//</span></div>\n\
<div class=\"line\"><span class=\"comment\">// DESCRIPTION:</span></div>\n\
<div class=\"line\"><span class=\"comment\">//      Create a new instance of the reader</span></div>\n\
<div class=\"line\"><span class=\"comment\"></span><span class=\"keywordtype\">void</span> * tiffFloatReader::creator()</div>\n\
<div class=\"line\">{</div>\n\
<div class=\"line\">    <span class=\"keywordflow\">return</span> <span class=\"keyword\">new</span> tiffFloatReader();</div>\n\
<div class=\"line\">}</div>\n\
<div class=\"line\"></div>\n\
<div class=\"line\"><span class=\"comment\">//</span></div>\n\
<div class=\"line\"><span class=\"comment\">// DESCRIPTION:</span></div>\n\
<div class=\"line\"><span class=\"comment\">//      Open up the file for read. Return &quot;info&quot; if requested.</span></div>\n\
<div class=\"line\"><span class=\"comment\"></span><a class=\"code\" href=\"#!/url=./cpp_ref/class_m_status.html\">MStatus</a> tiffFloatReader::open( <a class=\"code\" href=\"#!/url=./cpp_ref/class_m_string.html\">MString</a> pathname, <a class=\"code\" href=\"#!/url=./cpp_ref/class_m_image_file_info.html\">MImageFileInfo</a>* info)</div>\n\
<div class=\"line\">{</div>\n\
<div class=\"line\"><span class=\"preprocessor\">#if defined(_TIFF_LIBRARY_AVAILABLE_)</span></div>\n\
<div class=\"line\">    <span class=\"keywordflow\">try</span></div>\n\
<div class=\"line\">    {</div>\n\
<div class=\"line\">        <span class=\"comment\">// Open the tif file for read</span></div>\n\
<div class=\"line\">        <span class=\"comment\">// (TIFF *) cast from integer required on Mac.</span></div>\n\
<div class=\"line\">        fInputFile = (TIFF *) TIFFOpen( pathname.<a name=\"a8\"></a><a class=\"code\" href=\"#!/url=./cpp_ref/class_m_string.html#aa9ab612f356c53479afc4c648c9ef94d\">asChar</a>(), <span class=\"stringliteral\">&quot;r&quot;</span> );</div>\n\
<div class=\"line\">    }</div>\n\
<div class=\"line\">    <span class=\"keywordflow\">catch</span>( ... )</div>\n\
<div class=\"line\">    {</div>\n\
<div class=\"line\">    }</div>\n\
<div class=\"line\"></div>\n\
<div class=\"line\">    <span class=\"keywordflow\">if</span>( !fInputFile)</div>\n\
<div class=\"line\">    {</div>\n\
<div class=\"line\">        <span class=\"keywordflow\">return</span> MS::kFailure;</div>\n\
<div class=\"line\">    }</div>\n\
<div class=\"line\"></div>\n\
<div class=\"line\">    <span class=\"keywordtype\">unsigned</span> <span class=\"keywordtype\">short</span> num_samps;</div>\n\
<div class=\"line\">    <span class=\"keywordtype\">unsigned</span> <span class=\"keywordtype\">short</span> bitsPerChannel;</div>\n\
<div class=\"line\">    <span class=\"keywordtype\">unsigned</span> <span class=\"keywordtype\">short</span> sampleType = 0;</div>\n\
<div class=\"line\">    <span class=\"keywordtype\">short</span> config;</div>\n\
<div class=\"line\"></div>\n\
<div class=\"line\">    <span class=\"keywordflow\">if</span> (_TIFF_SUCCESS != TIFFGetField(fInputFile, TIFFTAG_IMAGEWIDTH, &amp;fWidth ) || </div>\n\
<div class=\"line\">        fWidth &lt; 1)</div>\n\
<div class=\"line\">        <span class=\"keywordflow\">goto</span> no_support;</div>\n\
<div class=\"line\">    <span class=\"keywordflow\">if</span> (_TIFF_SUCCESS != TIFFGetField(fInputFile, TIFFTAG_IMAGELENGTH, &amp;fHeight ) || </div>\n\
<div class=\"line\">        fHeight &lt; 1)</div>\n\
<div class=\"line\">        <span class=\"keywordflow\">goto</span> no_support;</div>\n\
<div class=\"line\"></div>\n\
<div class=\"line\"></div>\n\
<div class=\"line\">    <span class=\"comment\">// Suport 3 and 4 channel images only</span></div>\n\
<div class=\"line\">    <span class=\"keywordflow\">if</span> (_TIFF_SUCCESS != TIFFGetField(fInputFile, TIFFTAG_SAMPLESPERPIXEL, &amp;num_samps))</div>\n\
<div class=\"line\">        <span class=\"keywordflow\">goto</span> no_support;</div>\n\
<div class=\"line\">    <span class=\"keywordflow\">if</span> ((num_samps != 3) &amp;&amp; (num_samps!= 4))</div>\n\
<div class=\"line\">        <span class=\"keywordflow\">goto</span> no_support;</div>\n\
<div class=\"line\">    fChannels = num_samps;</div>\n\
<div class=\"line\"></div>\n\
<div class=\"line\">    <span class=\"comment\">// This is more robust than TIFFTAG_SAMPLEFORMAT since it may not be supported</span></div>\n\
<div class=\"line\">    <span class=\"comment\">// properly as it&#39;s an extension. </span></div>\n\
<div class=\"line\"></div>\n\
<div class=\"line\">    <span class=\"keywordflow\">if</span> (_TIFF_SUCCESS != TIFFGetField(fInputFile, TIFFTAG_BITSPERSAMPLE, &amp;bitsPerChannel))</div>\n\
<div class=\"line\">        <span class=\"keywordflow\">goto</span> no_support;</div>\n\
<div class=\"line\">    <span class=\"keywordflow\">if</span> (bitsPerChannel != 32)</div>\n\
<div class=\"line\">        <span class=\"keywordflow\">goto</span> no_support;</div>\n\
<div class=\"line\"></div>\n\
<div class=\"line\">    <span class=\"comment\">// Check the sample type. We only care about 32 bit </span></div>\n\
<div class=\"line\">    <span class=\"comment\">// floating point samples for this reader.</span></div>\n\
<div class=\"line\">    <span class=\"comment\">// SAMPLEFORMAT_IEEEFP is specified as IEEE floating point.</span></div>\n\
<div class=\"line\">    <span class=\"keywordflow\">if</span> (_TIFF_SUCCESS != TIFFGetField(fInputFile, TIFFTAG_SAMPLEFORMAT, &amp;sampleType) ||</div>\n\
<div class=\"line\">        sampleType != SAMPLEFORMAT_IEEEFP)</div>\n\
<div class=\"line\">    {</div>\n\
<div class=\"line\">        <span class=\"keywordflow\">goto</span> no_support;</div>\n\
<div class=\"line\">    }</div>\n\
<div class=\"line\"></div>\n\
<div class=\"line\">    <span class=\"comment\">// See how the data is stored in the scan line. Only support</span></div>\n\
<div class=\"line\">    <span class=\"comment\">// contiguous scan line for now.</span></div>\n\
<div class=\"line\">    <span class=\"comment\">// - PLANARCONFIG_SEPARATE is not supported.</span></div>\n\
<div class=\"line\">    <span class=\"keywordflow\">if</span> (_TIFF_SUCCESS != TIFFGetField(fInputFile, TIFFTAG_PLANARCONFIG, &amp;config) ||</div>\n\
<div class=\"line\">        (config != PLANARCONFIG_CONTIG))</div>\n\
<div class=\"line\">    {</div>\n\
<div class=\"line\">        <span class=\"keywordflow\">goto</span> no_support;</div>\n\
<div class=\"line\">    }</div>\n\
<div class=\"line\"></div>\n\
<div class=\"line\">    <span class=\"comment\">// Compression not supported yet.. </span></div>\n\
<div class=\"line\"><span class=\"preprocessor\">#if 0</span></div>\n\
<div class=\"line\">    <span class=\"keywordtype\">unsigned</span> <span class=\"keywordtype\">short</span> compression;</div>\n\
<div class=\"line\">    <span class=\"keywordflow\">if</span> (_TIFF_SUCCESS != TIFFGetField(fInputFile, TIFFTAG_COMPRESSION, &amp;compression) ||</div>\n\
<div class=\"line\">        (compression != COMPRESSION_NONE))</div>\n\
<div class=\"line\">    {</div>\n\
<div class=\"line\">        <span class=\"keywordflow\">goto</span> no_support;</div>\n\
<div class=\"line\">    }</div>\n\
<div class=\"line\"><span class=\"preprocessor\">#endif</span></div>\n\
<div class=\"line\"></div>\n\
<div class=\"line\">    <span class=\"comment\">//printf(&quot;Opened tif file successfully: w=%d,h=%d, ch=%d\\n&quot;,</span></div>\n\
<div class=\"line\">    <span class=\"comment\">//  fWidth, fHeight, fChannels );</span></div>\n\
<div class=\"line\"></div>\n\
<div class=\"line\">    <span class=\"keywordflow\">if</span>( info)</div>\n\
<div class=\"line\">    {</div>\n\
<div class=\"line\">        <span class=\"comment\">// Set up the info structure to return</span></div>\n\
<div class=\"line\">        <span class=\"comment\">//</span></div>\n\
<div class=\"line\">        info-&gt;<a name=\"a9\"></a><a class=\"code\" href=\"#!/url=./cpp_ref/class_m_image_file_info.html#a62c14b6802ed8b00b884d4fd6e6c6c4f\">width</a>( fWidth );</div>\n\
<div class=\"line\">        info-&gt;<a name=\"a10\"></a><a class=\"code\" href=\"#!/url=./cpp_ref/class_m_image_file_info.html#ae7959bfb381f7272887c88bfa42be127\">height</a>( fHeight );</div>\n\
<div class=\"line\">        info-&gt;<a name=\"a11\"></a><a class=\"code\" href=\"#!/url=./cpp_ref/class_m_image_file_info.html#a121999a4615b119ea68945a752e3ea91\">channels</a>( fChannels );</div>\n\
<div class=\"line\">        info-&gt;<a name=\"a12\"></a><a class=\"code\" href=\"#!/url=./cpp_ref/class_m_image_file_info.html#a6a8b60680704d9a8878bb4c40827a57f\">numberOfImages</a>( 1 );</div>\n\
<div class=\"line\">        info-&gt;<a name=\"a13\"></a><a class=\"code\" href=\"#!/url=./cpp_ref/class_m_image_file_info.html#a942d88cc03be8d90972a4a12904412ef\">pixelType</a>( MImage::kFloat);</div>\n\
<div class=\"line\">    }</div>\n\
<div class=\"line\">    <span class=\"keywordflow\">return</span> MS::kSuccess;</div>\n\
<div class=\"line\"></div>\n\
<div class=\"line\">no_support:</div>\n\
<div class=\"line\">    close();</div>\n\
<div class=\"line\">    <span class=\"keywordflow\">return</span> MS::kFailure;</div>\n\
<div class=\"line\"><span class=\"preprocessor\">#else</span></div>\n\
<div class=\"line\">    <span class=\"keywordflow\">return</span> MS::kFailure;</div>\n\
<div class=\"line\"><span class=\"preprocessor\">#endif</span></div>\n\
<div class=\"line\">}</div>\n\
<div class=\"line\"></div>\n\
<div class=\"line\"><span class=\"comment\">//</span></div>\n\
<div class=\"line\"><span class=\"comment\">// DESCRIPTION:</span></div>\n\
<div class=\"line\"><span class=\"comment\">//      Close any open file</span></div>\n\
<div class=\"line\"><span class=\"comment\"></span><span class=\"comment\">/* virtual */</span></div>\n\
<div class=\"line\"><a class=\"code\" href=\"#!/url=./cpp_ref/class_m_status.html\">MStatus</a> tiffFloatReader::close()</div>\n\
<div class=\"line\">{</div>\n\
<div class=\"line\"><span class=\"preprocessor\">#if defined(_TIFF_LIBRARY_AVAILABLE_)</span></div>\n\
<div class=\"line\">    <span class=\"keywordflow\">if</span> (fInputFile)</div>\n\
<div class=\"line\">        TIFFClose( fInputFile );</div>\n\
<div class=\"line\">    fInputFile = NULL;</div>\n\
<div class=\"line\">    <span class=\"keywordflow\">return</span> MS::kSuccess;</div>\n\
<div class=\"line\"><span class=\"preprocessor\">#else</span></div>\n\
<div class=\"line\">    <span class=\"keywordflow\">return</span> MS::kFailure;</div>\n\
<div class=\"line\"><span class=\"preprocessor\">#endif</span></div>\n\
<div class=\"line\">}</div>\n\
<div class=\"line\"></div>\n\
<div class=\"line\"><span class=\"comment\">//</span></div>\n\
<div class=\"line\"><span class=\"comment\">// DESCRIPTION:</span></div>\n\
<div class=\"line\"><span class=\"comment\">//      Load the image into system memory (MImage)</span></div>\n\
<div class=\"line\"><span class=\"comment\"></span><a class=\"code\" href=\"#!/url=./cpp_ref/class_m_status.html\">MStatus</a> tiffFloatReader::load( <a class=\"code\" href=\"#!/url=./cpp_ref/class_m_image.html\">MImage</a>&amp; image, <span class=\"keywordtype\">unsigned</span> <span class=\"keywordtype\">int</span> imageNumber)</div>\n\
<div class=\"line\">{</div>\n\
<div class=\"line\">    <a class=\"code\" href=\"#!/url=./cpp_ref/class_m_status.html\">MStatus</a> rval = MS::kFailure;</div>\n\
<div class=\"line\"><span class=\"preprocessor\">#if defined(_TIFF_LIBRARY_AVAILABLE_)</span></div>\n\
<div class=\"line\">    <span class=\"keywordflow\">if</span> (!fInputFile)</div>\n\
<div class=\"line\">        <span class=\"keywordflow\">return</span> rval;</div>\n\
<div class=\"line\"></div>\n\
<div class=\"line\">    <span class=\"comment\">// Configure our Maya image to hold the result</span></div>\n\
<div class=\"line\">    image.<a name=\"a14\"></a><a class=\"code\" href=\"#!/url=./cpp_ref/class_m_image.html#a903ff4fa0918f6c6438c4889025b7c91\">create</a>( fWidth, fHeight, fChannels, MImage::kFloat);</div>\n\
<div class=\"line\">    <span class=\"keywordtype\">float</span>* outputBuffer = image.<a name=\"a15\"></a><a class=\"code\" href=\"#!/url=./cpp_ref/class_m_image.html#a74517ab7ab9676d9f6546cec738668b3\">floatPixels</a>();</div>\n\
<div class=\"line\">    <span class=\"keywordflow\">if</span> (outputBuffer == NULL)</div>\n\
<div class=\"line\">        <span class=\"keywordflow\">return</span> rval;</div>\n\
<div class=\"line\">    </div>\n\
<div class=\"line\">    <span class=\"comment\">// Maya expects images upside down</span></div>\n\
<div class=\"line\">    <span class=\"keywordtype\">unsigned</span> <span class=\"keywordtype\">int</span> row = 0;</div>\n\
<div class=\"line\">    <span class=\"keywordtype\">bool</span> flipVertically = <span class=\"keyword\">true</span>;</div>\n\
<div class=\"line\">    <span class=\"keywordflow\">if</span> (flipVertically)</div>\n\
<div class=\"line\">    {</div>\n\
<div class=\"line\">        outputBuffer += (fHeight-1) * (fWidth * fChannels);</div>\n\
<div class=\"line\">        <span class=\"keywordflow\">for</span> (row = 0; row &lt; fHeight; row++)</div>\n\
<div class=\"line\">        {</div>\n\
<div class=\"line\">            TIFFReadScanline (fInputFile, outputBuffer, row);</div>\n\
<div class=\"line\">            outputBuffer -= (fWidth * fChannels);</div>\n\
<div class=\"line\">        }</div>\n\
<div class=\"line\">    }</div>\n\
<div class=\"line\">    <span class=\"keywordflow\">else</span></div>\n\
<div class=\"line\">    {</div>\n\
<div class=\"line\">        <span class=\"keywordflow\">for</span> (row = 0; row &lt; fHeight; row++)</div>\n\
<div class=\"line\">        {</div>\n\
<div class=\"line\">            TIFFReadScanline (fInputFile, outputBuffer, row);</div>\n\
<div class=\"line\">            outputBuffer += (fWidth * fChannels);</div>\n\
<div class=\"line\">        }</div>\n\
<div class=\"line\">    }</div>\n\
<div class=\"line\">    rval = MS::kSuccess;</div>\n\
<div class=\"line\"><span class=\"preprocessor\">#endif</span></div>\n\
<div class=\"line\">    <span class=\"keywordflow\">return</span> rval;</div>\n\
<div class=\"line\">}</div>\n\
<div class=\"line\"></div>\n\
<div class=\"line\"></div>\n\
<div class=\"line\"><a class=\"code\" href=\"#!/url=./cpp_ref/class_m_status.html\">MStatus</a> initializePlugin( <a name=\"_a16\"></a><a class=\"code\" href=\"#!/url=./cpp_ref/class_m_object.html\">MObject</a> obj )</div>\n\
<div class=\"line\">{</div>\n\
<div class=\"line\">    <a name=\"_a17\"></a><a class=\"code\" href=\"#!/url=./cpp_ref/class_m_fn_plugin.html\">MFnPlugin</a> plugin( obj, PLUGIN_COMPANY, <span class=\"stringliteral\">&quot;2020&quot;</span>, <span class=\"stringliteral\">&quot;Any&quot;</span> );</div>\n\
<div class=\"line\">    <a name=\"_a18\"></a><a class=\"code\" href=\"#!/url=./cpp_ref/class_m_string_array.html\">MStringArray</a> extensions;</div>\n\
<div class=\"line\">    extensions.<a name=\"a19\"></a><a class=\"code\" href=\"#!/url=./cpp_ref/class_m_string_array.html#a18d06b3d0af1426e654ac2cc1dc86c60\">append</a>( <span class=\"stringliteral\">&quot;tif&quot;</span>);</div>\n\
<div class=\"line\"></div>\n\
<div class=\"line\">    <span class=\"comment\">// This plugin is registered with a low priority. That means</span></div>\n\
<div class=\"line\">    <span class=\"comment\">// this plugin will only be use if Maya is not able the load a TIF file</span></div>\n\
<div class=\"line\">    <span class=\"comment\">// from a plugin with higher priority or by it internal code.</span></div>\n\
<div class=\"line\">    <a name=\"a20\"></a><a class=\"code\" href=\"#!/url=./cpp_ref/group___macros.html#gae3dc78724237805e00a767b587b7cf79\">CHECK_MSTATUS</a>( plugin.registerImageFile( </div>\n\
<div class=\"line\">                    kImagePluginName,</div>\n\
<div class=\"line\">                    tiffFloatReader::creator, </div>\n\
<div class=\"line\">                    extensions,</div>\n\
<div class=\"line\">                    MFnPlugin::kImageFilePriorityLow));</div>\n\
<div class=\"line\">    </div>\n\
<div class=\"line\">    <span class=\"keywordflow\">return</span> MS::kSuccess;</div>\n\
<div class=\"line\">}</div>\n\
<div class=\"line\"></div>\n\
<div class=\"line\"><span class=\"comment\">// DESCRIPTION:</span></div>\n\
<div class=\"line\"><span class=\"comment\"></span><a class=\"code\" href=\"#!/url=./cpp_ref/class_m_status.html\">MStatus</a> uninitializePlugin( <a class=\"code\" href=\"#!/url=./cpp_ref/class_m_object.html\">MObject</a> obj )</div>\n\
<div class=\"line\">{</div>\n\
<div class=\"line\">    <a class=\"code\" href=\"#!/url=./cpp_ref/class_m_fn_plugin.html\">MFnPlugin</a> plugin( obj );</div>\n\
<div class=\"line\">    <a class=\"code\" href=\"#!/url=./cpp_ref/group___macros.html#gae3dc78724237805e00a767b587b7cf79\">CHECK_MSTATUS</a>( plugin.deregisterImageFile( kImagePluginName ) );</div>\n\
<div class=\"line\"></div>\n\
<div class=\"line\">    <span class=\"keywordflow\">return</span> MS::kSuccess;</div>\n\
<div class=\"line\">}</div>\n\
<div class=\"line\"></div>\n\
</div><!-- fragment --> </div><!-- contents -->\n\
</div><!-- doc-content -->\n\
<!-- start footer part -->\n\
\n\
      <div class=\"footer-block\"><a href=\"../html/ac.cmtdialog.htm\" class=\"comments-anchor\" target=\"_blank\"><span class=\"comments-link\">Please send us your comment about this page</span></a></div></div>\n\
   </div></body>\n\
</html>\n\
";