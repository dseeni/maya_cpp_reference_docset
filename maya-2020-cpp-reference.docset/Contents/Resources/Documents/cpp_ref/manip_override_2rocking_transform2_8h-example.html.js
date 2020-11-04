var topic = "<!-- saved from url=(0024)http://docs.autodesk.com -->\n\
<html>\n\
   <head><script src=\"../scripts/yepnope.1.5.4-min.js\" type=\"text/javascript\"></script><script src=\"../scripts/lib/jquery-1.11.1.min.js\" type=\"text/javascript\"></script>\n\
      <title>C++ API Reference: manipOverride/rockingTransform2.h</title>\n\
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
    cpp_ref_adsk_ref_toc.initNavTree(\'manip_override_2rocking_transform2_8h-example.html\', tocPrefix);\n\
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
            <h1>C++ API Reference: manipOverride/rockingTransform2.h</h1>\n\
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
<div class=\"title\">manipOverride/rockingTransform2.h</div>  </div>\n\
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
<div class=\"line\"><span class=\"preprocessor\">#include &lt;maya/MMatrix.h&gt;</span></div>\n\
<div class=\"line\"><span class=\"preprocessor\">#include &lt;maya/MPxTransform.h&gt;</span></div>\n\
<div class=\"line\"><span class=\"preprocessor\">#include &lt;maya/MPxTransformationMatrix.h&gt;</span></div>\n\
<div class=\"line\"></div>\n\
<div class=\"line\"></div>\n\
<div class=\"line\"><span class=\"comment\">//</span></div>\n\
<div class=\"line\"><span class=\"comment\">// Define declarations</span></div>\n\
<div class=\"line\"><span class=\"comment\">//</span></div>\n\
<div class=\"line\"></div>\n\
<div class=\"line\"><span class=\"preprocessor\">#define kRockingTransformNodeID 0x8110B</span></div>\n\
<div class=\"line\"><span class=\"preprocessor\">#define kRockingTransformMatrixID 0x8110C</span></div>\n\
<div class=\"line\"></div>\n\
<div class=\"line\"><span class=\"preprocessor\">#define ReturnOnError(status)              \\</span></div>\n\
<div class=\"line\"><span class=\"preprocessor\">        if (MS::kSuccess != status) {      \\</span></div>\n\
<div class=\"line\"><span class=\"preprocessor\">            return status;                \\</span></div>\n\
<div class=\"line\"><span class=\"preprocessor\">        }</span></div>\n\
<div class=\"line\"></div>\n\
<div class=\"line\"><span class=\"comment\">//</span></div>\n\
<div class=\"line\"><span class=\"comment\">// Class declarations -- matrix and transform</span></div>\n\
<div class=\"line\"><span class=\"comment\">//</span></div>\n\
<div class=\"line\"></div>\n\
<div class=\"line\"><span class=\"keyword\">class </span>rockingTransformMatrix : <span class=\"keyword\">public</span> <a name=\"_a0\"></a><a class=\"code\" href=\"#!/url=./cpp_ref/class_m_px_transformation_matrix.html\">MPxTransformationMatrix</a></div>\n\
<div class=\"line\">{</div>\n\
<div class=\"line\">    <span class=\"comment\">// A really simple implementation of MPxTransformationMatrix.</span></div>\n\
<div class=\"line\">    <span class=\"comment\">// The methods include:</span></div>\n\
<div class=\"line\">    <span class=\"comment\">// - Two accessor methods for getting and setting the </span></div>\n\
<div class=\"line\">    <span class=\"comment\">// rock</span></div>\n\
<div class=\"line\">    <span class=\"comment\">// - The virtual asMatrix() method which passes the matrix </span></div>\n\
<div class=\"line\">    <span class=\"comment\">// back to Maya when the command &quot;xform -q -ws -m&quot; is invoked</span></div>\n\
<div class=\"line\"></div>\n\
<div class=\"line\">    <span class=\"keyword\">public</span>:</div>\n\
<div class=\"line\">        rockingTransformMatrix();</div>\n\
<div class=\"line\">        <span class=\"keyword\">static</span> <a class=\"code\" href=\"#!/url=./cpp_ref/class_m_px_transformation_matrix.html\">MPxTransformationMatrix</a> *<a name=\"a1\"></a><a class=\"code\" href=\"#!/url=./cpp_ref/class_m_px_transformation_matrix.html#abf016974a6794e1253c407dc06abe27a\">creator</a>();</div>\n\
<div class=\"line\">        </div>\n\
<div class=\"line\">        <a name=\"_a2\"></a><a class=\"code\" href=\"#!/url=./cpp_ref/class_m_matrix.html\">MMatrix</a> <a name=\"a3\"></a><a class=\"code\" href=\"#!/url=./cpp_ref/class_m_px_transformation_matrix.html#a8e2933c5f73e8cfb7409366582caa596\">asMatrix</a>() <span class=\"keyword\">const override</span>;</div>\n\
<div class=\"line\">        <a class=\"code\" href=\"#!/url=./cpp_ref/class_m_matrix.html\">MMatrix</a> <a class=\"code\" href=\"#!/url=./cpp_ref/class_m_px_transformation_matrix.html#a8e2933c5f73e8cfb7409366582caa596\">asMatrix</a>(<span class=\"keywordtype\">double</span> percent) <span class=\"keyword\">const override</span>;</div>\n\
<div class=\"line\">        <a class=\"code\" href=\"#!/url=./cpp_ref/class_m_matrix.html\">MMatrix</a> <a name=\"a4\"></a><a class=\"code\" href=\"#!/url=./cpp_ref/class_m_px_transformation_matrix.html#a0fc23ca221db7b7640763d4ce8967138\">asRotateMatrix</a>() <span class=\"keyword\">const override</span>;</div>\n\
<div class=\"line\">        </div>\n\
<div class=\"line\">        <span class=\"comment\">// Degrees</span></div>\n\
<div class=\"line\">        <span class=\"keywordtype\">double</span>  getRockInX() <span class=\"keyword\">const</span>;</div>\n\
<div class=\"line\">        <span class=\"keywordtype\">void</span>    setRockInX( <span class=\"keywordtype\">double</span> rock );</div>\n\
<div class=\"line\">        </div>\n\
<div class=\"line\">        <span class=\"keyword\">static</span>  <a name=\"_a5\"></a><a class=\"code\" href=\"#!/url=./cpp_ref/class_m_type_id.html\">MTypeId</a> id;</div>\n\
<div class=\"line\">    <span class=\"keyword\">protected</span>:      </div>\n\
<div class=\"line\">        <span class=\"keyword\">typedef</span> <a class=\"code\" href=\"#!/url=./cpp_ref/class_m_px_transformation_matrix.html\">MPxTransformationMatrix</a> ParentClass;</div>\n\
<div class=\"line\">        <span class=\"comment\">// Degrees</span></div>\n\
<div class=\"line\">        <span class=\"keywordtype\">double</span> rockXValue;</div>\n\
<div class=\"line\">};</div>\n\
<div class=\"line\"></div>\n\
<div class=\"line\"><span class=\"keyword\">class </span>rockingTransformNode : <span class=\"keyword\">public</span> <a name=\"_a6\"></a><a class=\"code\" href=\"#!/url=./cpp_ref/class_m_px_transform.html\">MPxTransform</a> </div>\n\
<div class=\"line\">{</div>\n\
<div class=\"line\">    <span class=\"comment\">// A really simple custom transform.</span></div>\n\
<div class=\"line\">    <span class=\"keyword\">public</span>:</div>\n\
<div class=\"line\">        rockingTransformNode();</div>\n\
<div class=\"line\">        ~rockingTransformNode() <span class=\"keyword\">override</span>;</div>\n\
<div class=\"line\"></div>\n\
<div class=\"line\">        <a class=\"code\" href=\"#!/url=./cpp_ref/class_m_px_transformation_matrix.html\">MPxTransformationMatrix</a> *<a name=\"a7\"></a><a class=\"code\" href=\"#!/url=./cpp_ref/class_m_px_transform.html#a7521c42a2dbe5d8e2082233b7a280d48\">createTransformationMatrix</a>() <span class=\"keyword\">override</span>;</div>\n\
<div class=\"line\">                    </div>\n\
<div class=\"line\">        <span class=\"keywordtype\">void</span> <a name=\"a8\"></a><a class=\"code\" href=\"#!/url=./cpp_ref/class_m_px_transform.html#a5c13a6c88a839b5356861d1d09e820d9\">postConstructor</a>() <span class=\"keyword\">override</span>;</div>\n\
<div class=\"line\"></div>\n\
<div class=\"line\">        <a name=\"_a9\"></a><a class=\"code\" href=\"#!/url=./cpp_ref/class_m_status.html\">MStatus</a> <a name=\"a10\"></a><a class=\"code\" href=\"#!/url=./cpp_ref/class_m_px_transform.html#ace2cd11d9d4eade0bcb57a2e341faedb\">validateAndSetValue</a>(<span class=\"keyword\">const</span> <a name=\"_a11\"></a><a class=\"code\" href=\"#!/url=./cpp_ref/class_m_plug.html\">MPlug</a>&amp;, <span class=\"keyword\">const</span> <a name=\"_a12\"></a><a class=\"code\" href=\"#!/url=./cpp_ref/class_m_data_handle.html\">MDataHandle</a>&amp;) <span class=\"keyword\">override</span>;</div>\n\
<div class=\"line\">                    </div>\n\
<div class=\"line\">        <span class=\"keywordtype\">void</span>  <a name=\"a13\"></a><a class=\"code\" href=\"#!/url=./cpp_ref/class_m_px_transform.html#a5498f0a0e0349f4ed1a6cae61f81dd55\">resetTransformation</a> (<a class=\"code\" href=\"#!/url=./cpp_ref/class_m_px_transformation_matrix.html\">MPxTransformationMatrix</a> *) <span class=\"keyword\">override</span>;</div>\n\
<div class=\"line\">        <span class=\"keywordtype\">void</span>  <a class=\"code\" href=\"#!/url=./cpp_ref/class_m_px_transform.html#a5498f0a0e0349f4ed1a6cae61f81dd55\">resetTransformation</a> (<span class=\"keyword\">const</span> <a class=\"code\" href=\"#!/url=./cpp_ref/class_m_matrix.html\">MMatrix</a> &amp;) <span class=\"keyword\">override</span>;</div>\n\
<div class=\"line\">                    </div>\n\
<div class=\"line\">        <span class=\"comment\">// Utility for getting the related rock matrix pointer</span></div>\n\
<div class=\"line\">        rockingTransformMatrix *getRockingTransformMatrix();</div>\n\
<div class=\"line\">                </div>\n\
<div class=\"line\">        <span class=\"keyword\">const</span> <span class=\"keywordtype\">char</span>* <a name=\"a14\"></a><a class=\"code\" href=\"#!/url=./cpp_ref/class_m_px_transform.html#a774cd5d8fbebe8e7ed82a5aa587d1f04\">className</a>();</div>\n\
<div class=\"line\">        <span class=\"keyword\">static</span>  <span class=\"keywordtype\">void</span> *  creator();</div>\n\
<div class=\"line\">        <span class=\"keyword\">static</span>  <a class=\"code\" href=\"#!/url=./cpp_ref/class_m_status.html\">MStatus</a> initialize();</div>\n\
<div class=\"line\">        </div>\n\
<div class=\"line\">        <span class=\"keyword\">static</span>  <a class=\"code\" href=\"#!/url=./cpp_ref/class_m_type_id.html\">MTypeId</a> id;</div>\n\
<div class=\"line\">    <span class=\"keyword\">protected</span>:</div>\n\
<div class=\"line\">        <span class=\"comment\">// Degrees</span></div>\n\
<div class=\"line\">        <span class=\"keyword\">static</span>  <a name=\"_a15\"></a><a class=\"code\" href=\"#!/url=./cpp_ref/class_m_object.html\">MObject</a> aRockInX;</div>\n\
<div class=\"line\">        <span class=\"keywordtype\">double</span> rockXValue;</div>\n\
<div class=\"line\">        <span class=\"keyword\">typedef</span> <a class=\"code\" href=\"#!/url=./cpp_ref/class_m_px_transform.html\">MPxTransform</a> ParentClass;</div>\n\
<div class=\"line\">};</div>\n\
<div class=\"line\"></div>\n\
<div class=\"line\"><span class=\"keyword\">class </span>DegreeRadianConverter</div>\n\
<div class=\"line\">{</div>\n\
<div class=\"line\">    <span class=\"keyword\">public</span>:</div>\n\
<div class=\"line\">        <span class=\"keywordtype\">double</span> degreesToRadians( <span class=\"keywordtype\">double</span> degrees );</div>\n\
<div class=\"line\">        <span class=\"keywordtype\">double</span> radiansToDegrees( <span class=\"keywordtype\">double</span> radians );</div>\n\
<div class=\"line\">};</div>\n\
</div><!-- fragment --> </div><!-- contents -->\n\
</div><!-- doc-content -->\n\
<!-- start footer part -->\n\
\n\
      <div class=\"footer-block\"><a href=\"../html/ac.cmtdialog.htm\" class=\"comments-anchor\" target=\"_blank\"><span class=\"comments-link\">Please send us your comment about this page</span></a></div></div>\n\
   </div></body>\n\
</html>\n\
";