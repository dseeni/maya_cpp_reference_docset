var topic = "<!-- saved from url=(0024)http://docs.autodesk.com -->\n\
<html>\n\
   <head><script src=\"../scripts/yepnope.1.5.4-min.js\" type=\"text/javascript\"></script><script src=\"../scripts/lib/jquery-1.11.1.min.js\" type=\"text/javascript\"></script>\n\
      <title>C++ API Reference: viewCaptureCmd/viewCaptureCmd.cpp</title>\n\
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
    cpp_ref_adsk_ref_toc.initNavTree(\'view_capture_cmd_2view_capture_cmd_8cpp-example.html\', tocPrefix);\n\
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
            <h1>C++ API Reference: viewCaptureCmd/viewCaptureCmd.cpp</h1>\n\
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
<div class=\"title\">viewCaptureCmd/viewCaptureCmd.cpp</div>  </div>\n\
</div><!--header-->\n\
<div class=\"contents\">\n\
<div class=\"fragment\"><div class=\"line\"><span class=\"comment\">//-</span></div>\n\
<div class=\"line\"><span class=\"comment\">// ==========================================================================</span></div>\n\
<div class=\"line\"><span class=\"comment\">// Copyright 2015 Autodesk, Inc.  All rights reserved.</span></div>\n\
<div class=\"line\"><span class=\"comment\">//</span></div>\n\
<div class=\"line\"><span class=\"comment\">// Use of this software is subject to the terms of the Autodesk</span></div>\n\
<div class=\"line\"><span class=\"comment\">// license agreement provided at the time of installation or download,</span></div>\n\
<div class=\"line\"><span class=\"comment\">// or which otherwise accompanies this software in either electronic</span></div>\n\
<div class=\"line\"><span class=\"comment\">// or hard copy form.</span></div>\n\
<div class=\"line\"><span class=\"comment\">// ==========================================================================</span></div>\n\
<div class=\"line\"><span class=\"comment\">//+</span></div>\n\
<div class=\"line\"><span class=\"comment\"></span><span class=\"comment\">// DESCRIPTION</span></div>\n\
<div class=\"line\"><span class=\"comment\">//</span></div>\n\
<div class=\"line\"><span class=\"comment\">// Produces the MEL command &quot;viewCapture&quot;.</span></div>\n\
<div class=\"line\"><span class=\"comment\">//</span></div>\n\
<div class=\"line\"><span class=\"comment\">// This plugin uses OpenGL to capture the current 3D view to a ppm file.</span></div>\n\
<div class=\"line\"><span class=\"comment\">//</span></div>\n\
<div class=\"line\"><span class=\"comment\">// To use it, give it a filename as an argument into which the PPM image</span></div>\n\
<div class=\"line\"><span class=\"comment\">// of the current view should be written.</span></div>\n\
<div class=\"line\"><span class=\"comment\">//</span></div>\n\
<div class=\"line\"><span class=\"comment\">// Limitations:</span></div>\n\
<div class=\"line\"><span class=\"comment\">//  - Any parts of other X windows that are obscuring the view</span></div>\n\
<div class=\"line\"><span class=\"comment\">//    will be captured rather than the view underneath.  This is</span></div>\n\
<div class=\"line\"><span class=\"comment\">//    an effect of the OpenGL buffer system on SGIs.</span></div>\n\
<div class=\"line\"><span class=\"comment\">// </span></div>\n\
<div class=\"line\"><span class=\"comment\">//  - Colour index mode buffers cannot be read by this plug-in, so</span></div>\n\
<div class=\"line\"><span class=\"comment\">//    the view should be set to shaded mode before doing the capture.</span></div>\n\
<div class=\"line\"><span class=\"comment\">//    It is possible to read an OpenGL colour index mode buffer, but it</span></div>\n\
<div class=\"line\"><span class=\"comment\">//    is more complicated.</span></div>\n\
<div class=\"line\"><span class=\"comment\">//</span></div>\n\
<div class=\"line\"><span class=\"comment\"></span></div>\n\
<div class=\"line\"><span class=\"preprocessor\">#include &quot;viewCapturePPM.h&quot;</span>   <span class=\"comment\">// PPM routines</span></div>\n\
<div class=\"line\"></div>\n\
<div class=\"line\"><span class=\"preprocessor\">#include &lt;maya/MSimple.h&gt;</span></div>\n\
<div class=\"line\"><span class=\"preprocessor\">#include &lt;maya/MObject.h&gt;</span></div>\n\
<div class=\"line\"><span class=\"preprocessor\">#include &lt;maya/MGlobal.h&gt;</span> </div>\n\
<div class=\"line\"><span class=\"preprocessor\">#include &lt;maya/M3dView.h&gt;</span> </div>\n\
<div class=\"line\"></div>\n\
<div class=\"line\"><span class=\"preprocessor\">#include &lt;maya/MGL.h&gt;</span> </div>\n\
<div class=\"line\"></div>\n\
<div class=\"line\"><span class=\"preprocessor\">#include &lt;stdlib.h&gt;</span></div>\n\
<div class=\"line\"><span class=\"preprocessor\">#include &lt;maya/MIOStream.h&gt;</span></div>\n\
<div class=\"line\"></div>\n\
<div class=\"line\"><a name=\"a0\"></a><a class=\"code\" href=\"#!/url=./cpp_ref/group___macros.html#gaf3b44fe07495c3792b926494fca7b517\">DeclareSimpleCommand</a>( viewCapture, PLUGIN_COMPANY, <span class=\"stringliteral\">&quot;3.0&quot;</span>)</div>\n\
<div class=\"line\"></div>\n\
<div class=\"line\"><a name=\"_a1\"></a><a class=\"code\" href=\"#!/url=./cpp_ref/class_m_status.html\">MStatus</a> viewCapture::doIt( const <a name=\"_a2\"></a><a class=\"code\" href=\"#!/url=./cpp_ref/class_m_arg_list.html\">MArgList</a>&amp; args )</div>\n\
<div class=\"line\">{</div>\n\
<div class=\"line\">    <a class=\"code\" href=\"#!/url=./cpp_ref/class_m_status.html\">MStatus</a> status = MS::kSuccess;</div>\n\
<div class=\"line\"></div>\n\
<div class=\"line\">    <span class=\"keywordflow\">if</span> ( args.length() != 1 ) {</div>\n\
<div class=\"line\">        <span class=\"comment\">// Need the file name argument</span></div>\n\
<div class=\"line\">        <span class=\"comment\">//</span></div>\n\
<div class=\"line\">        <span class=\"keywordflow\">return</span> MS::kFailure;</div>\n\
<div class=\"line\">    }</div>\n\
<div class=\"line\"></div>\n\
<div class=\"line\">    <a name=\"_a3\"></a><a class=\"code\" href=\"#!/url=./cpp_ref/class_m_string.html\">MString</a> fileName;</div>\n\
<div class=\"line\">    args.get( 0, fileName );</div>\n\
<div class=\"line\"></div>\n\
<div class=\"line\">    <span class=\"comment\">// Get the active 3D view</span></div>\n\
<div class=\"line\">    <span class=\"comment\">//</span></div>\n\
<div class=\"line\">    <a name=\"_a4\"></a><a class=\"code\" href=\"#!/url=./cpp_ref/class_m3d_view.html\">M3dView</a> view = <a name=\"a5\"></a><a class=\"code\" href=\"#!/url=./cpp_ref/class_m3d_view.html#a3cda809eff914b04ff47de958c365f09\">M3dView::active3dView</a>();</div>\n\
<div class=\"line\"></div>\n\
<div class=\"line\">    <span class=\"comment\">// Capture the current view</span></div>\n\
<div class=\"line\">    <span class=\"comment\">//</span></div>\n\
<div class=\"line\">    view.<a name=\"a6\"></a><a class=\"code\" href=\"#!/url=./cpp_ref/class_m3d_view.html#a733fc93c61bcc5c95614fa6ef66ddbd7\">refresh</a>();</div>\n\
<div class=\"line\">    _OPENMAYA_DEPRECATION_PUSH_AND_DISABLE_WARNING</div>\n\
<div class=\"line\">    view.<a name=\"a7\"></a><a class=\"code\" href=\"#!/url=./cpp_ref/class_m3d_view.html#a0e318e5634c7aaf31c4eb7232d2013d4\">beginGL</a>();</div>\n\
<div class=\"line\">    _OPENMAYA_POP_WARNING</div>\n\
<div class=\"line\"> </div>\n\
<div class=\"line\">    <span class=\"comment\">// Set the target for our pixel read to be the front buffer.  First, the</span></div>\n\
<div class=\"line\">    <span class=\"comment\">// current state is saved using the glPushAttrib call.  It is important</span></div>\n\
<div class=\"line\">    <span class=\"comment\">// to leave the OpenGL in the same state that we found it.</span></div>\n\
<div class=\"line\">    <span class=\"comment\">//</span></div>\n\
<div class=\"line\">    glPushAttrib( GL_PIXEL_MODE_BIT ); </div>\n\
<div class=\"line\"></div>\n\
<div class=\"line\">    <span class=\"keywordtype\">int</span> width = view.<a name=\"a8\"></a><a class=\"code\" href=\"#!/url=./cpp_ref/class_m3d_view.html#a09f01ebd9a52d4e74196c90fd3c1316c\">portWidth</a>();</div>\n\
<div class=\"line\">    <span class=\"keywordtype\">int</span> height = view.<a name=\"a9\"></a><a class=\"code\" href=\"#!/url=./cpp_ref/class_m3d_view.html#a419e60769b8303476d6d25853b3b5f6f\">portHeight</a>(); </div>\n\
<div class=\"line\"></div>\n\
<div class=\"line\">    <span class=\"comment\">// Allocate buffers for the pixel data</span></div>\n\
<div class=\"line\">    <span class=\"comment\">//</span></div>\n\
<div class=\"line\">    GLfloat * red   = <span class=\"keyword\">new</span> GLfloat[width*height];</div>\n\
<div class=\"line\">    GLfloat * green = <span class=\"keyword\">new</span> GLfloat[width*height];</div>\n\
<div class=\"line\">    GLfloat * blue  = <span class=\"keyword\">new</span> GLfloat[width*height];</div>\n\
<div class=\"line\"></div>\n\
<div class=\"line\">    <span class=\"comment\">// Read the values from the OpenGL frame buffer</span></div>\n\
<div class=\"line\">    <span class=\"comment\">//</span></div>\n\
<div class=\"line\">    glReadBuffer( GL_FRONT );</div>\n\
<div class=\"line\">    glReadPixels( 0, 0, width, height, GL_RED, GL_FLOAT, red );</div>\n\
<div class=\"line\">    glReadPixels( 0, 0, width, height, GL_GREEN, GL_FLOAT, green );</div>\n\
<div class=\"line\">    glReadPixels( 0, 0, width, height, GL_BLUE, GL_FLOAT, blue );</div>\n\
<div class=\"line\">    </div>\n\
<div class=\"line\">    <span class=\"comment\">// Put the gl read target back</span></div>\n\
<div class=\"line\">    <span class=\"comment\">//</span></div>\n\
<div class=\"line\">    glPopAttrib(); </div>\n\
<div class=\"line\"></div>\n\
<div class=\"line\">    _OPENMAYA_DEPRECATION_PUSH_AND_DISABLE_WARNING</div>\n\
<div class=\"line\">    view.<a name=\"a10\"></a><a class=\"code\" href=\"#!/url=./cpp_ref/class_m3d_view.html#ab810c5a46d728df70ff5f44b604559f4\">endGL</a>();</div>\n\
<div class=\"line\">    _OPENMAYA_POP_WARNING</div>\n\
<div class=\"line\">    </div>\n\
<div class=\"line\">    <span class=\"comment\">// Write file as a PPM</span></div>\n\
<div class=\"line\">    <span class=\"comment\">//</span></div>\n\
<div class=\"line\">    Pic_Pixel * line = PixelAlloc( width );</div>\n\
<div class=\"line\">    <span class=\"keywordtype\">int</span> idx;</div>\n\
<div class=\"line\"></div>\n\
<div class=\"line\">    Pic * file = PicOpen( fileName.<a name=\"a11\"></a><a class=\"code\" href=\"#!/url=./cpp_ref/class_m_string.html#aa9ab612f356c53479afc4c648c9ef94d\">asChar</a>(), (short) width, (<span class=\"keywordtype\">short</span>) height );</div>\n\
<div class=\"line\">    <span class=\"keywordflow\">if</span> ( NULL != file ) { </div>\n\
<div class=\"line\">        <span class=\"keywordflow\">for</span> ( <span class=\"keywordtype\">int</span> row = height - 1; row &gt;= 0; row-- ) {</div>\n\
<div class=\"line\">            <span class=\"comment\">// Covert the row of pixels into PPM format</span></div>\n\
<div class=\"line\">            <span class=\"comment\">//</span></div>\n\
<div class=\"line\">            <span class=\"keywordflow\">for</span> ( <span class=\"keywordtype\">int</span> col = 0; col &lt; width; col++ ) {</div>\n\
<div class=\"line\">                <span class=\"comment\">// Find the array elements for this pixel</span></div>\n\
<div class=\"line\">                <span class=\"comment\">//</span></div>\n\
<div class=\"line\">                idx = ( row * width ) + ( col );</div>\n\
<div class=\"line\">                line[col].r = (Pic_byte)( red[idx]   * 255.0 );</div>\n\
<div class=\"line\">                line[col].g = (Pic_byte)( green[idx] * 255.0 );</div>\n\
<div class=\"line\">                line[col].b = (Pic_byte)( blue[idx] * 255.0 );</div>\n\
<div class=\"line\">            }</div>\n\
<div class=\"line\">            <span class=\"comment\">// Write the line</span></div>\n\
<div class=\"line\">            <span class=\"comment\">//</span></div>\n\
<div class=\"line\">            <span class=\"keywordflow\">if</span> ( !PicWriteLine( file, line ) ) {</div>\n\
<div class=\"line\">                status = MS::kFailure; </div>\n\
<div class=\"line\">                <span class=\"keywordflow\">return</span> MS::kFailure;</div>\n\
<div class=\"line\">            }</div>\n\
<div class=\"line\">        }</div>\n\
<div class=\"line\">        PicClose( file ); </div>\n\
<div class=\"line\">    }</div>\n\
<div class=\"line\"> </div>\n\
<div class=\"line\">    <span class=\"keyword\">delete</span> []red;</div>\n\
<div class=\"line\">    <span class=\"keyword\">delete</span> []green;</div>\n\
<div class=\"line\">    <span class=\"keyword\">delete</span> []blue;</div>\n\
<div class=\"line\">    PixelFree( line );</div>\n\
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