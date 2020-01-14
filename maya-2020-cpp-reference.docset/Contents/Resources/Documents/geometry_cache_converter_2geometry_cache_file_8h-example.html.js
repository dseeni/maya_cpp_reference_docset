var topic = "<!-- saved from url=(0024)http://docs.autodesk.com -->\n\
<html>\n\
   <head><script src=\"../scripts/yepnope.1.5.4-min.js\" type=\"text/javascript\"></script><script src=\"../scripts/lib/jquery-1.11.1.min.js\" type=\"text/javascript\"></script>\n\
      <title>C++ API Reference: geometryCacheConverter/geometryCacheFile.h</title>\n\
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
    cpp_ref_adsk_ref_toc.initNavTree(\'geometry_cache_converter_2geometry_cache_file_8h-example.html\', tocPrefix);\n\
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
            <h1>C++ API Reference: geometryCacheConverter/geometryCacheFile.h</h1>\n\
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
<div class=\"title\">geometryCacheConverter/geometryCacheFile.h</div>  </div>\n\
</div><!--header-->\n\
<div class=\"contents\">\n\
<div class=\"fragment\"><div class=\"line\"><span class=\"preprocessor\">#ifndef _GEOMETRY_CACHE_FILE</span></div>\n\
<div class=\"line\"><span class=\"preprocessor\">#define _GEOMETRY_CACHE_FILE</span></div>\n\
<div class=\"line\"></div>\n\
<div class=\"line\"><span class=\"comment\">//-</span></div>\n\
<div class=\"line\"><span class=\"comment\">// ==========================================================================</span></div>\n\
<div class=\"line\"><span class=\"comment\">// Copyright 2015 Autodesk, Inc.  All rights reserved.</span></div>\n\
<div class=\"line\"><span class=\"comment\">//</span></div>\n\
<div class=\"line\"><span class=\"comment\">// Use of this software is subject to the terms of the Autodesk</span></div>\n\
<div class=\"line\"><span class=\"comment\">// license agreement provided at the time of installation or download,</span></div>\n\
<div class=\"line\"><span class=\"comment\">// or which otherwise accompanies this software in either electronic</span></div>\n\
<div class=\"line\"><span class=\"comment\">// or hard copy form.</span></div>\n\
<div class=\"line\"><span class=\"comment\">// ==========================================================================</span></div>\n\
<div class=\"line\"><span class=\"comment\">//+</span></div>\n\
<div class=\"line\"></div>\n\
<div class=\"line\"><span class=\"comment\">//</span></div>\n\
<div class=\"line\"><span class=\"comment\">// File Name: geometryCacheFile.h</span></div>\n\
<div class=\"line\"><span class=\"comment\">//</span></div>\n\
<div class=\"line\"><span class=\"comment\">// Description : </span></div>\n\
<div class=\"line\"><span class=\"comment\">//      An interface used for reading cache file data, storing it</span></div>\n\
<div class=\"line\"><span class=\"comment\">//      and converting it to ASCII.  The geometry cache file data is </span></div>\n\
<div class=\"line\"><span class=\"comment\">//      currently being stored in the Maya IFF format.  However, note that </span></div>\n\
<div class=\"line\"><span class=\"comment\">//      the file format is subject to change in future versions of Maya.  </span></div>\n\
<div class=\"line\"><span class=\"comment\">//      The following is the typical tag format for a single file cache.</span></div>\n\
<div class=\"line\"><span class=\"comment\">//</span></div>\n\
<div class=\"line\"><span class=\"comment\">//  |---CACH (Group)    // Header</span></div>\n\
<div class=\"line\"><span class=\"comment\">//  |     |---VRSN      // Version Number (char*)</span></div>\n\
<div class=\"line\"><span class=\"comment\">//  |     |---STIM      // Start Time of the Cache File (int)</span></div>\n\
<div class=\"line\"><span class=\"comment\">//  |     |---ETIM      // End Time of the Cache File (int)</span></div>\n\
<div class=\"line\"><span class=\"comment\">//  |</span></div>\n\
<div class=\"line\"><span class=\"comment\">//  |---MYCH (Group)    // 1st Time </span></div>\n\
<div class=\"line\"><span class=\"comment\">//  |     |---TIME      // Time (int)</span></div>\n\
<div class=\"line\"><span class=\"comment\">//  |     |---CHNM      // 1st Channel Name (char*)</span></div>\n\
<div class=\"line\"><span class=\"comment\">//  |     |---SIZE      // 1st Channel Size</span></div>\n\
<div class=\"line\"><span class=\"comment\">//  |     |---DVCA      // 1st Channel Data (Double Vector Array)</span></div>\n\
<div class=\"line\"><span class=\"comment\">//  |     |---CHNM      // n-th Channel Name</span></div>\n\
<div class=\"line\"><span class=\"comment\">//  |     |---SIZE      // n-th Channel Size</span></div>\n\
<div class=\"line\"><span class=\"comment\">//  |     |---DVCA      // n-th Channel Data (Double Vector Array)</span></div>\n\
<div class=\"line\"><span class=\"comment\">//  |     |..</span></div>\n\
<div class=\"line\"><span class=\"comment\">//  |</span></div>\n\
<div class=\"line\"><span class=\"comment\">//  |---MYCH (Group)    // 2nd Time </span></div>\n\
<div class=\"line\"><span class=\"comment\">//  |     |---TIME      // Time</span></div>\n\
<div class=\"line\"><span class=\"comment\">//  |     |---CHNM      // 1st Channel Name</span></div>\n\
<div class=\"line\"><span class=\"comment\">//  |     |---SIZE      // 1st Channel Size</span></div>\n\
<div class=\"line\"><span class=\"comment\">//  |     |---DVCA      // 1st Channel Data (Double Vector Array)</span></div>\n\
<div class=\"line\"><span class=\"comment\">//  |     |---CHNM      // n-th Channel Name</span></div>\n\
<div class=\"line\"><span class=\"comment\">//  |     |---SIZE      // n-th Channel Size</span></div>\n\
<div class=\"line\"><span class=\"comment\">//  |     |---DVCA      // n-th Channel Data (Double Vector Array)</span></div>\n\
<div class=\"line\"><span class=\"comment\">//  |     |..</span></div>\n\
<div class=\"line\"><span class=\"comment\">//  |</span></div>\n\
<div class=\"line\"><span class=\"comment\">//  |---..</span></div>\n\
<div class=\"line\"><span class=\"comment\">//  |</span></div>\n\
<div class=\"line\"><span class=\"comment\">//</span></div>\n\
<div class=\"line\"><span class=\"comment\">//      The above example shows a cache file containing channels of double</span></div>\n\
<div class=\"line\"><span class=\"comment\">//      vector array data.  Maya can also store float vector array data,</span></div>\n\
<div class=\"line\"><span class=\"comment\">//      using the IFF key &quot;FVCA&quot;.</span></div>\n\
<div class=\"line\"><span class=\"comment\">//</span></div>\n\
<div class=\"line\"><span class=\"comment\">//      In a multiple file caches, the only difference is that after the </span></div>\n\
<div class=\"line\"><span class=\"comment\">//      header &quot;CACH&quot; group, there is only one MYCH group and there is no </span></div>\n\
<div class=\"line\"><span class=\"comment\">//      TIME chunk. Note that the value of the header&#39;s STIM and ETIM chunk </span></div>\n\
<div class=\"line\"><span class=\"comment\">//      are only relevant with multiple file caches.</span></div>\n\
<div class=\"line\"><span class=\"comment\">//</span></div>\n\
<div class=\"line\"><span class=\"comment\"></span></div>\n\
<div class=\"line\"><span class=\"comment\">// Project includes</span></div>\n\
<div class=\"line\"><span class=\"comment\">//</span></div>\n\
<div class=\"line\"><span class=\"preprocessor\">#include &quot;geometryCacheBlockBase.h&quot;</span></div>\n\
<div class=\"line\"></div>\n\
<div class=\"line\"><span class=\"comment\">// Maya includes</span></div>\n\
<div class=\"line\"><span class=\"comment\">//</span></div>\n\
<div class=\"line\"><span class=\"preprocessor\">#include &lt;maya/MString.h&gt;</span></div>\n\
<div class=\"line\"><span class=\"preprocessor\">#include &lt;maya/MIffFile.h&gt;</span></div>\n\
<div class=\"line\"></div>\n\
<div class=\"line\"><span class=\"comment\">// Other includes</span></div>\n\
<div class=\"line\"><span class=\"comment\">//</span></div>\n\
<div class=\"line\"><span class=\"preprocessor\">#include &lt;list&gt;</span></div>\n\
<div class=\"line\"></div>\n\
<div class=\"line\"><span class=\"comment\">// Typedef of STL containers to store our chunks of data</span></div>\n\
<div class=\"line\"><span class=\"comment\">//</span></div>\n\
<div class=\"line\"><span class=\"keyword\">typedef</span> std::list&lt;geometryCacheBlockBase*&gt; cacheBlockList;</div>\n\
<div class=\"line\"><span class=\"keyword\">typedef</span> std::list&lt;geometryCacheBlockBase*&gt;::iterator cacheBlockIterator;</div>\n\
<div class=\"line\"></div>\n\
<div class=\"line\"><span class=\"keyword\">class </span>geometryCacheFile</div>\n\
<div class=\"line\">{</div>\n\
<div class=\"line\"><span class=\"keyword\">public</span>:</div>\n\
<div class=\"line\">    <span class=\"comment\">// Constructor / Destructor methods</span></div>\n\
<div class=\"line\">    <span class=\"comment\">//</span></div>\n\
<div class=\"line\">                geometryCacheFile( <span class=\"keyword\">const</span> <a name=\"_a0\"></a><a class=\"code\" href=\"#!/url=./cpp_ref/class_m_string.html\">MString</a>&amp; fileName, <a name=\"_a1\"></a><a class=\"code\" href=\"#!/url=./cpp_ref/class_m_iff_file.html\">MIffFile</a>* iffFile );</div>\n\
<div class=\"line\">    <span class=\"keyword\">virtual</span>     ~geometryCacheFile();</div>\n\
<div class=\"line\"></div>\n\
<div class=\"line\">    <span class=\"comment\">// Accessor methods</span></div>\n\
<div class=\"line\">    <span class=\"comment\">//</span></div>\n\
<div class=\"line\">    <span class=\"keyword\">const</span> <a class=\"code\" href=\"#!/url=./cpp_ref/class_m_string.html\">MString</a>&amp;  fileName();</div>\n\
<div class=\"line\">    <span class=\"keyword\">const</span> <span class=\"keywordtype\">bool</span>&amp;     isRead();</div>\n\
<div class=\"line\"></div>\n\
<div class=\"line\">    <span class=\"comment\">// Read cache method</span></div>\n\
<div class=\"line\">    <span class=\"comment\">//</span></div>\n\
<div class=\"line\">    <span class=\"keywordtype\">bool</span>    readCacheFiles();</div>\n\
<div class=\"line\"></div>\n\
<div class=\"line\">    <span class=\"comment\">// Convert cache method</span></div>\n\
<div class=\"line\">    <span class=\"comment\">//</span></div>\n\
<div class=\"line\">    <span class=\"keywordtype\">bool</span>    convertToAscii();</div>\n\
<div class=\"line\"></div>\n\
<div class=\"line\"><span class=\"keyword\">private</span>:</div>\n\
<div class=\"line\">    <span class=\"comment\">// Read header methods</span></div>\n\
<div class=\"line\">    <span class=\"comment\">//</span></div>\n\
<div class=\"line\">    <span class=\"keywordtype\">bool</span>    readHeaderGroup( <a name=\"_a2\"></a><a class=\"code\" href=\"#!/url=./cpp_ref/class_m_status.html\">MStatus</a>&amp; status );</div>\n\
<div class=\"line\">    <span class=\"keywordtype\">bool</span>    readHeaderVersion();</div>\n\
<div class=\"line\">    <span class=\"keywordtype\">bool</span>    readHeaderTimeRange();</div>\n\
<div class=\"line\"></div>\n\
<div class=\"line\">    <span class=\"comment\">// Read channel methods</span></div>\n\
<div class=\"line\">    <span class=\"comment\">//    </span></div>\n\
<div class=\"line\">    <span class=\"keywordtype\">bool</span>    readChannelGroup( <a class=\"code\" href=\"#!/url=./cpp_ref/class_m_status.html\">MStatus</a>&amp; groupStatus );</div>\n\
<div class=\"line\">    </div>\n\
<div class=\"line\">    <span class=\"keywordtype\">bool</span>    readChannelTime();</div>\n\
<div class=\"line\">    <span class=\"keywordtype\">bool</span>    readChannel( <a class=\"code\" href=\"#!/url=./cpp_ref/class_m_status.html\">MStatus</a>&amp; channelStatus );</div>\n\
<div class=\"line\">    <span class=\"keywordtype\">bool</span>    readChannelName( <a class=\"code\" href=\"#!/url=./cpp_ref/class_m_status.html\">MStatus</a>&amp; channelStatus );</div>\n\
<div class=\"line\">    <span class=\"keywordtype\">bool</span>    readChannelData();</div>\n\
<div class=\"line\"></div>\n\
<div class=\"line\">    <span class=\"comment\">// These methods are for modifying the data in the </span></div>\n\
<div class=\"line\">    <span class=\"comment\">// cacheBlockList member called &quot;blockList&quot;</span></div>\n\
<div class=\"line\">    <span class=\"comment\">//</span></div>\n\
<div class=\"line\">    <span class=\"keywordtype\">void</span>    storeCacheBlock( <span class=\"keyword\">const</span> <a class=\"code\" href=\"#!/url=./cpp_ref/class_m_string.html\">MString</a>&amp; tag );</div>\n\
<div class=\"line\">    <span class=\"keywordtype\">void</span>    storeCacheBlock( <span class=\"keyword\">const</span> <a class=\"code\" href=\"#!/url=./cpp_ref/class_m_string.html\">MString</a>&amp; tag, <span class=\"keyword\">const</span> <span class=\"keywordtype\">int</span>&amp; value );</div>\n\
<div class=\"line\">    <span class=\"keywordtype\">void</span>    storeCacheBlock( <span class=\"keyword\">const</span> <a class=\"code\" href=\"#!/url=./cpp_ref/class_m_string.html\">MString</a>&amp; tag, <span class=\"keyword\">const</span> <a class=\"code\" href=\"#!/url=./cpp_ref/class_m_string.html\">MString</a>&amp; value  );</div>\n\
<div class=\"line\">    <span class=\"keywordtype\">void</span>    storeCacheBlock( <span class=\"keyword\">const</span> <a class=\"code\" href=\"#!/url=./cpp_ref/class_m_string.html\">MString</a>&amp; tag, </div>\n\
<div class=\"line\">                        <span class=\"keyword\">const</span> <span class=\"keywordtype\">double</span>* value, </div>\n\
<div class=\"line\">                        <span class=\"keyword\">const</span> <span class=\"keywordtype\">unsigned</span> <span class=\"keywordtype\">int</span>&amp; size );</div>\n\
<div class=\"line\">    <span class=\"keywordtype\">void</span>    storeCacheBlock( <span class=\"keyword\">const</span> <a class=\"code\" href=\"#!/url=./cpp_ref/class_m_string.html\">MString</a>&amp; tag, </div>\n\
<div class=\"line\">                        <span class=\"keyword\">const</span> <span class=\"keywordtype\">float</span>* value, </div>\n\
<div class=\"line\">                        <span class=\"keyword\">const</span> <span class=\"keywordtype\">unsigned</span> <span class=\"keywordtype\">int</span>&amp; size );</div>\n\
<div class=\"line\"></div>\n\
<div class=\"line\">    <span class=\"comment\">// Data members</span></div>\n\
<div class=\"line\">    <span class=\"comment\">//</span></div>\n\
<div class=\"line\">    <a class=\"code\" href=\"#!/url=./cpp_ref/class_m_iff_file.html\">MIffFile</a>*           iffFilePtr;     <span class=\"comment\">// Object that reads the cache files</span></div>\n\
<div class=\"line\">    <a class=\"code\" href=\"#!/url=./cpp_ref/class_m_string.html\">MString</a>             cacheFileName;  <span class=\"comment\">// The cache file name</span></div>\n\
<div class=\"line\">    <span class=\"keywordtype\">bool</span>                readStatus;     <span class=\"comment\">// Indicates if the file was read</span></div>\n\
<div class=\"line\">    cacheBlockList      blockList;      <span class=\"comment\">// List of read data blocks from file</span></div>\n\
<div class=\"line\">};</div>\n\
<div class=\"line\"></div>\n\
<div class=\"line\"><span class=\"preprocessor\">#endif</span></div>\n\
<div class=\"line\"></div>\n\
</div><!-- fragment --> </div><!-- contents -->\n\
</div><!-- doc-content -->\n\
<!-- start footer part -->\n\
\n\
      <div class=\"footer-block\"><a href=\"../html/ac.cmtdialog.htm\" class=\"comments-anchor\" target=\"_blank\"><span class=\"comments-link\">Please send us your comment about this page</span></a></div></div>\n\
   </div></body>\n\
</html>\n\
";