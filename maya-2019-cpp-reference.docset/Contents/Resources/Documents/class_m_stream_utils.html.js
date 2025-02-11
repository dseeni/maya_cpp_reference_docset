var topic = "<!-- saved from url=(0024)http://docs.autodesk.com -->\n\
<html>\n\
   <head><script src=\"../scripts/yepnope.1.5.4-min.js\" type=\"text/javascript\"></script><script src=\"../scripts/lib/jquery-1.11.1.min.js\" type=\"text/javascript\"></script><meta http-equiv=\"Content-Type\" content=\"text/html; charset=UTF-8\"><script type=\"text/javascript\" src=\"../scripts/utils/adsk.redirect.js\"></script>\n\
      <title>MStreamUtils Class Reference</title>\n\
   \n\
\n\
<meta name=\"topic-subtype\" content=\"C++\"></head>\n\
   <body height=\"100%\"><div class=\"body_content\" id=\"body-content\"><link rel=\"stylesheet\" type=\"text/css\" href=\"cpp_ref/navtree.css\"><link rel=\"stylesheet\" type=\"text/css\" href=\"cpp_ref/doxygen.css\"><link rel=\"stylesheet\" type=\"text/css\" href=\"cpp_ref/tabs.css\"><link rel=\"stylesheet\" type=\"text/css\" href=\"style/adsk.cpm.css\"><script type=\"text/javascript\">\n\
var tocSystemNeedsToBeLoaded = typeof(cpp_ref_adsk_ref_toc) == \'undefined\';\n\
var weAreIn21 = $(\'div#main.view-active\').length;\n\
var tocPrefix = \'\';\n\
if (weAreIn21)\n\
{ tocPrefix = \'cpp_ref/\'; }\n\
function cpp_ref_initializeToc(forceTrigger) {\n\
    cpp_ref_adsk_ref_toc.initResizable();\n\
    cpp_ref_adsk_ref_toc.initNavTree(\'class_m_stream_utils.html\', tocPrefix);\n\
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
            <h1>MStreamUtils Class Reference</h1>\n\
         </div>\n\
\n\
    <div id=\"top\"><!-- Generated by Doxygen 1.8.10 -->\n\
  <div id=\"navrow1\" class=\"tabs\">\n\
    <ul class=\"tablist\">\n\
      <li><a href=\"#!/url=./cpp_ref/index.html\"><span>Main&#160;Page</span></a></li>\n\
      <li><a href=\"#!/url=./cpp_ref/pages.html\"><span>Topics</span></a></li>\n\
      <li><a href=\"#!/url=./cpp_ref/modules.html\"><span>Modules</span></a></li>\n\
      <li><a href=\"#!/url=./cpp_ref/namespaces.html\"><span>Namespaces</span></a></li>\n\
      <li class=\"current\"><a href=\"#!/url=./cpp_ref/annotated.html\"><span>Classes</span></a></li>\n\
      <li><a href=\"#!/url=./cpp_ref/files.html\"><span>Files</span></a></li>\n\
      <li><a href=\"#!/url=./cpp_ref/examples.html\"><span>Examples</span></a></li>\n\
    </ul>\n\
  </div>\n\
  <div id=\"navrow2\" class=\"tabs2\">\n\
    <ul class=\"tablist\">\n\
      <li><a href=\"#!/url=./cpp_ref/annotated.html\"><span>Class&#160;List</span></a></li>\n\
      <li><a href=\"#!/url=./cpp_ref/classes.html\"><span>Class&#160;Index</span></a></li>\n\
      <li><a href=\"#!/url=./cpp_ref/hierarchy.html\"><span>Class&#160;Hierarchy</span></a></li>\n\
      <li><a href=\"#!/url=./cpp_ref/functions.html\"><span>Class&#160;Members</span></a></li>\n\
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
  \n\
  <div class=\"headertitle\">\n\
<div class=\"title\">MStreamUtils Class Reference<div class=\"ingroups\"><a class=\"el\" translate=\"no\" href=\"#!/url=./cpp_ref/group___open_maya.html\">OpenMaya - API module for common classes</a></div></div>  </div>\n\
<div id=\"OverviewLinksDiv\"><div id=\"dynsection-overview\" onclick=\"return toggleVisibility(this)\" class=\"dynheader closed\" style=\"cursor:pointer;\"><img id=\"dynsection-overview-trigger\" src=\"cpp_ref/closed.png\" alt=\"+\"> Related help topics: </div><div id=\"dynsection-overview-content\" class=\"dyncontent\" style=\"display:none;\"><ul class=\"overviewLinks\">\n\
<li class=\"overviewLink\"><a href=\"#!/url=./developer/Maya-Python-API/Maya-Python-API-1-0/Using-the-Maya-Python-API.html\">Maya Python API &gt; Maya Python API 1.0 &gt; Using the Maya Python API</a></li>\n\
</ul></div></div>\n\
<div class=\"summary\">\n\
<a href=\"class_m_stream_utils.html#pub-static-methods\">Static Public Member Functions</a>  </div></div><!--header-->\n\
<div class=\"contents\">\n\
\n\
<p><code>#include &lt;MStreamUtils.h&gt;</code></p>\n\
<a name=\"details\" id=\"details\"></a><h2 class=\"groupheader\">Class Description</h2>\n\
<div class=\"textblock\"><p>Stream functionality. </p>\n\
<p>This class provides some standard stream functionality for developers working in C++ or script. Write methods are provided for writing to ASCII or binary. Read methods are only binary. </p>\n\
</div><table class=\"memberdecls\">\n\
<tr class=\"heading\"><td colspan=\"2\"><h2 class=\"groupheader\"><a name=\"pub-static-methods\"></a>\n\
Static Public Member Functions</h2></td></tr>\n\
<tr class=\"memitem:a115ec5a021768e34c52895e08d303a24\"><td class=\"memItemLeft\" translate=\"no\" align=\"right\" valign=\"top\"><a class=\"anchor\" id=\"a115ec5a021768e34c52895e08d303a24\"></a>\n\
static std::ostream &amp;&#160;</td><td class=\"memItemRight\" translate=\"no\" valign=\"bottom\"><a class=\"el\" translate=\"no\" href=\"#!/url=./cpp_ref/class_m_stream_utils.html#a115ec5a021768e34c52895e08d303a24\">stdErrorStream</a> ()</td></tr>\n\
<tr class=\"memdesc:a115ec5a021768e34c52895e08d303a24\"><td class=\"mdescLeft\">&#160;</td><td class=\"mdescRight\">This method returns the cerr ostream. <br></td></tr>\n\
<tr class=\"separator:a115ec5a021768e34c52895e08d303a24\"><td class=\"memSeparator\" colspan=\"2\">&#160;</td></tr>\n\
<tr class=\"memitem:a68a044c30de27a0ccac1041624796ab5\"><td class=\"memItemLeft\" translate=\"no\" align=\"right\" valign=\"top\"><a class=\"anchor\" id=\"a68a044c30de27a0ccac1041624796ab5\"></a>\n\
static std::ostream &amp;&#160;</td><td class=\"memItemRight\" translate=\"no\" valign=\"bottom\"><a class=\"el\" translate=\"no\" href=\"#!/url=./cpp_ref/class_m_stream_utils.html#a68a044c30de27a0ccac1041624796ab5\">stdOutStream</a> ()</td></tr>\n\
<tr class=\"memdesc:a68a044c30de27a0ccac1041624796ab5\"><td class=\"mdescLeft\">&#160;</td><td class=\"mdescRight\">This method returns the cout ostream. <br></td></tr>\n\
<tr class=\"separator:a68a044c30de27a0ccac1041624796ab5\"><td class=\"memSeparator\" colspan=\"2\">&#160;</td></tr>\n\
<tr class=\"memitem:add5f279cc6c8ee5b1f18162cc47db5df\"><td class=\"memItemLeft\" translate=\"no\" align=\"right\" valign=\"top\">static <a class=\"el\" translate=\"no\" href=\"#!/url=./cpp_ref/class_m_status.html\">MStatus</a>&#160;</td><td class=\"memItemRight\" translate=\"no\" valign=\"bottom\"><a class=\"el\" translate=\"no\" href=\"#!/url=./cpp_ref/class_m_stream_utils.html#add5f279cc6c8ee5b1f18162cc47db5df\">writeChar</a> (std::ostream &amp;out, const char value, bool binary=false)</td></tr>\n\
<tr class=\"memdesc:add5f279cc6c8ee5b1f18162cc47db5df\"><td class=\"mdescLeft\">&#160;</td><td class=\"mdescRight\">This method is used to write out a \"char\" value to an ostream.  <a href=\"class_m_stream_utils.html#add5f279cc6c8ee5b1f18162cc47db5df\">More...</a><br></td></tr>\n\
<tr class=\"separator:add5f279cc6c8ee5b1f18162cc47db5df\"><td class=\"memSeparator\" colspan=\"2\">&#160;</td></tr>\n\
<tr class=\"memitem:a7f1dd15092f97a2502678b87b241815d\"><td class=\"memItemLeft\" translate=\"no\" align=\"right\" valign=\"top\">static <a class=\"el\" translate=\"no\" href=\"#!/url=./cpp_ref/class_m_status.html\">MStatus</a>&#160;</td><td class=\"memItemRight\" translate=\"no\" valign=\"bottom\"><a class=\"el\" translate=\"no\" href=\"#!/url=./cpp_ref/class_m_stream_utils.html#a7f1dd15092f97a2502678b87b241815d\">writeCharBuffer</a> (std::ostream &amp;out, const char *value, bool binary=false)</td></tr>\n\
<tr class=\"memdesc:a7f1dd15092f97a2502678b87b241815d\"><td class=\"mdescLeft\">&#160;</td><td class=\"mdescRight\">This method is used to write out a mull-terminated string (const char*) to an ostream.  <a href=\"class_m_stream_utils.html#a7f1dd15092f97a2502678b87b241815d\">More...</a><br></td></tr>\n\
<tr class=\"separator:a7f1dd15092f97a2502678b87b241815d\"><td class=\"memSeparator\" colspan=\"2\">&#160;</td></tr>\n\
<tr class=\"memitem:aaf500a5027242e9adbd00a1929726d54\"><td class=\"memItemLeft\" translate=\"no\" align=\"right\" valign=\"top\">static <a class=\"el\" translate=\"no\" href=\"#!/url=./cpp_ref/class_m_status.html\">MStatus</a>&#160;</td><td class=\"memItemRight\" translate=\"no\" valign=\"bottom\"><a class=\"el\" translate=\"no\" href=\"#!/url=./cpp_ref/class_m_stream_utils.html#aaf500a5027242e9adbd00a1929726d54\">writeInt</a> (std::ostream &amp;out, const int value, bool binary=false)</td></tr>\n\
<tr class=\"memdesc:aaf500a5027242e9adbd00a1929726d54\"><td class=\"mdescLeft\">&#160;</td><td class=\"mdescRight\">This method is used to write out a \"int\" value to an ostream.  <a href=\"class_m_stream_utils.html#aaf500a5027242e9adbd00a1929726d54\">More...</a><br></td></tr>\n\
<tr class=\"separator:aaf500a5027242e9adbd00a1929726d54\"><td class=\"memSeparator\" colspan=\"2\">&#160;</td></tr>\n\
<tr class=\"memitem:a96863c5e3f39303a6154312bd192f96f\"><td class=\"memItemLeft\" translate=\"no\" align=\"right\" valign=\"top\">static <a class=\"el\" translate=\"no\" href=\"#!/url=./cpp_ref/class_m_status.html\">MStatus</a>&#160;</td><td class=\"memItemRight\" translate=\"no\" valign=\"bottom\"><a class=\"el\" translate=\"no\" href=\"#!/url=./cpp_ref/class_m_stream_utils.html#a96863c5e3f39303a6154312bd192f96f\">writeFloat</a> (std::ostream &amp;out, const float value, bool binary=false)</td></tr>\n\
<tr class=\"memdesc:a96863c5e3f39303a6154312bd192f96f\"><td class=\"mdescLeft\">&#160;</td><td class=\"mdescRight\">This method is used to write out a \"float\" value to an ostream.  <a href=\"class_m_stream_utils.html#a96863c5e3f39303a6154312bd192f96f\">More...</a><br></td></tr>\n\
<tr class=\"separator:a96863c5e3f39303a6154312bd192f96f\"><td class=\"memSeparator\" colspan=\"2\">&#160;</td></tr>\n\
<tr class=\"memitem:a2ba07e47541f03c58f2c3602124e8d9e\"><td class=\"memItemLeft\" translate=\"no\" align=\"right\" valign=\"top\">static <a class=\"el\" translate=\"no\" href=\"#!/url=./cpp_ref/class_m_status.html\">MStatus</a>&#160;</td><td class=\"memItemRight\" translate=\"no\" valign=\"bottom\"><a class=\"el\" translate=\"no\" href=\"#!/url=./cpp_ref/class_m_stream_utils.html#a2ba07e47541f03c58f2c3602124e8d9e\">writeDouble</a> (std::ostream &amp;out, const double value, bool binary=false)</td></tr>\n\
<tr class=\"memdesc:a2ba07e47541f03c58f2c3602124e8d9e\"><td class=\"mdescLeft\">&#160;</td><td class=\"mdescRight\">This method is used to write out a \"double\" value to an ostream.  <a href=\"class_m_stream_utils.html#a2ba07e47541f03c58f2c3602124e8d9e\">More...</a><br></td></tr>\n\
<tr class=\"separator:a2ba07e47541f03c58f2c3602124e8d9e\"><td class=\"memSeparator\" colspan=\"2\">&#160;</td></tr>\n\
<tr class=\"memitem:acba7a1d8f950736b395f64b84e5ed09e\"><td class=\"memItemLeft\" translate=\"no\" align=\"right\" valign=\"top\">static <a class=\"el\" translate=\"no\" href=\"#!/url=./cpp_ref/class_m_status.html\">MStatus</a>&#160;</td><td class=\"memItemRight\" translate=\"no\" valign=\"bottom\"><a class=\"el\" translate=\"no\" href=\"#!/url=./cpp_ref/class_m_stream_utils.html#acba7a1d8f950736b395f64b84e5ed09e\">readChar</a> (std::istream &amp;in, char &amp;value, bool binary=false)</td></tr>\n\
<tr class=\"memdesc:acba7a1d8f950736b395f64b84e5ed09e\"><td class=\"mdescLeft\">&#160;</td><td class=\"mdescRight\">This method is used to read a \"char\" binary value from an istream.  <a href=\"class_m_stream_utils.html#acba7a1d8f950736b395f64b84e5ed09e\">More...</a><br></td></tr>\n\
<tr class=\"separator:acba7a1d8f950736b395f64b84e5ed09e\"><td class=\"memSeparator\" colspan=\"2\">&#160;</td></tr>\n\
<tr class=\"memitem:a25f90e010da91c33f37ae5f1f1016cd5\"><td class=\"memItemLeft\" translate=\"no\" align=\"right\" valign=\"top\">static <a class=\"el\" translate=\"no\" href=\"#!/url=./cpp_ref/class_m_status.html\">MStatus</a>&#160;</td><td class=\"memItemRight\" translate=\"no\" valign=\"bottom\"><a class=\"el\" translate=\"no\" href=\"#!/url=./cpp_ref/class_m_stream_utils.html#a25f90e010da91c33f37ae5f1f1016cd5\">readCharBuffer</a> (std::istream &amp;in, char *&amp;value, unsigned int length, bool binary=false)</td></tr>\n\
<tr class=\"memdesc:a25f90e010da91c33f37ae5f1f1016cd5\"><td class=\"mdescLeft\">&#160;</td><td class=\"mdescRight\">This method is used to read a character string (char*) from an istream.  <a href=\"class_m_stream_utils.html#a25f90e010da91c33f37ae5f1f1016cd5\">More...</a><br></td></tr>\n\
<tr class=\"separator:a25f90e010da91c33f37ae5f1f1016cd5\"><td class=\"memSeparator\" colspan=\"2\">&#160;</td></tr>\n\
<tr class=\"memitem:a07b6f0c479bed94c33f2502b50474753\"><td class=\"memItemLeft\" translate=\"no\" align=\"right\" valign=\"top\">static <a class=\"el\" translate=\"no\" href=\"#!/url=./cpp_ref/class_m_status.html\">MStatus</a>&#160;</td><td class=\"memItemRight\" translate=\"no\" valign=\"bottom\"><a class=\"el\" translate=\"no\" href=\"#!/url=./cpp_ref/class_m_stream_utils.html#a07b6f0c479bed94c33f2502b50474753\">readInt</a> (std::istream &amp;in, int &amp;value, bool binary=false)</td></tr>\n\
<tr class=\"memdesc:a07b6f0c479bed94c33f2502b50474753\"><td class=\"mdescLeft\">&#160;</td><td class=\"mdescRight\">This method is used to read a \"int\" binary value from an istream.  <a href=\"class_m_stream_utils.html#a07b6f0c479bed94c33f2502b50474753\">More...</a><br></td></tr>\n\
<tr class=\"separator:a07b6f0c479bed94c33f2502b50474753\"><td class=\"memSeparator\" colspan=\"2\">&#160;</td></tr>\n\
<tr class=\"memitem:a81b2892a352f27b40501c9172409f446\"><td class=\"memItemLeft\" translate=\"no\" align=\"right\" valign=\"top\">static <a class=\"el\" translate=\"no\" href=\"#!/url=./cpp_ref/class_m_status.html\">MStatus</a>&#160;</td><td class=\"memItemRight\" translate=\"no\" valign=\"bottom\"><a class=\"el\" translate=\"no\" href=\"#!/url=./cpp_ref/class_m_stream_utils.html#a81b2892a352f27b40501c9172409f446\">readFloat</a> (std::istream &amp;in, float &amp;value, bool binary=false)</td></tr>\n\
<tr class=\"memdesc:a81b2892a352f27b40501c9172409f446\"><td class=\"mdescLeft\">&#160;</td><td class=\"mdescRight\">This method is used to read a \"float\" binary value from an istream.  <a href=\"class_m_stream_utils.html#a81b2892a352f27b40501c9172409f446\">More...</a><br></td></tr>\n\
<tr class=\"separator:a81b2892a352f27b40501c9172409f446\"><td class=\"memSeparator\" colspan=\"2\">&#160;</td></tr>\n\
<tr class=\"memitem:a42c17ff59965fcd71385b121151266b6\"><td class=\"memItemLeft\" translate=\"no\" align=\"right\" valign=\"top\">static <a class=\"el\" translate=\"no\" href=\"#!/url=./cpp_ref/class_m_status.html\">MStatus</a>&#160;</td><td class=\"memItemRight\" translate=\"no\" valign=\"bottom\"><a class=\"el\" translate=\"no\" href=\"#!/url=./cpp_ref/class_m_stream_utils.html#a42c17ff59965fcd71385b121151266b6\">readDouble</a> (std::istream &amp;in, double &amp;value, bool binary=false)</td></tr>\n\
<tr class=\"memdesc:a42c17ff59965fcd71385b121151266b6\"><td class=\"mdescLeft\">&#160;</td><td class=\"mdescRight\">This method is used to read a \"double\" binary value from an istream.  <a href=\"class_m_stream_utils.html#a42c17ff59965fcd71385b121151266b6\">More...</a><br></td></tr>\n\
<tr class=\"separator:a42c17ff59965fcd71385b121151266b6\"><td class=\"memSeparator\" colspan=\"2\">&#160;</td></tr>\n\
</table>\n\
<h2 class=\"groupheader\">Member Function Documentation</h2>\n\
<a class=\"anchor\" id=\"add5f279cc6c8ee5b1f18162cc47db5df\"></a>\n\
<div class=\"memitem\">\n\
<div class=\"memproto\">\n\
<table class=\"mlabels\">\n\
  <tr>\n\
  <td class=\"mlabels-left\">\n\
      <table class=\"memname\">\n\
        <tr>\n\
          <td class=\"memname\" translate=\"no\"><a class=\"el\" translate=\"no\" href=\"#!/url=./cpp_ref/class_m_status.html\">MStatus</a> writeChar </td>\n\
          <td>(</td>\n\
          <td class=\"paramtype\">std::ostream &amp;&#160;</td>\n\
          <td class=\"paramname\"><em>out</em>, </td>\n\
        </tr>\n\
        <tr>\n\
          <td class=\"paramkey\"></td>\n\
          <td></td>\n\
          <td class=\"paramtype\">const char&#160;</td>\n\
          <td class=\"paramname\"><em>value</em>, </td>\n\
        </tr>\n\
        <tr>\n\
          <td class=\"paramkey\"></td>\n\
          <td></td>\n\
          <td class=\"paramtype\">bool&#160;</td>\n\
          <td class=\"paramname\"><em>binary</em> = <code>false</code>&#160;</td>\n\
        </tr>\n\
        <tr>\n\
          <td></td>\n\
          <td>)</td>\n\
          <td></td><td></td>\n\
        </tr>\n\
      </table>\n\
  </td>\n\
  <td class=\"mlabels-right\">\n\
<span class=\"mlabels\"><span class=\"mlabel\">static</span></span>  </td>\n\
  </tr>\n\
</table>\n\
</div><div class=\"memdoc\">\n\
\n\
<p>This method is used to write out a \"char\" value to an ostream. </p>\n\
<dl class=\"params\"><dt>Parameters</dt><dd>\n\
  <table class=\"params\">\n\
    <tr><td class=\"paramdir\">[in]</td><td class=\"paramname\">out</td><td>the output ostream </td></tr>\n\
    <tr><td class=\"paramdir\">[in]</td><td class=\"paramname\">value</td><td>value to write out </td></tr>\n\
    <tr><td class=\"paramdir\">[in]</td><td class=\"paramname\">binary</td><td>If true, the byte(s) of value are written out. If false, the string representation is written out.</td></tr>\n\
  </table>\n\
  </dd>\n\
</dl>\n\
<dl class=\"section return\"><dt>Returns</dt><dd><ul>\n\
<li><b>MS::kSuccess</b> write worked </li>\n\
<li><b>MS::kFailure</b> stream failed to write value </li>\n\
</ul>\n\
</dd></dl>\n\
\n\
</div>\n\
</div>\n\
<a class=\"anchor\" id=\"a7f1dd15092f97a2502678b87b241815d\"></a>\n\
<div class=\"memitem\">\n\
<div class=\"memproto\">\n\
<table class=\"mlabels\">\n\
  <tr>\n\
  <td class=\"mlabels-left\">\n\
      <table class=\"memname\">\n\
        <tr>\n\
          <td class=\"memname\" translate=\"no\"><a class=\"el\" translate=\"no\" href=\"#!/url=./cpp_ref/class_m_status.html\">MStatus</a> writeCharBuffer </td>\n\
          <td>(</td>\n\
          <td class=\"paramtype\">std::ostream &amp;&#160;</td>\n\
          <td class=\"paramname\"><em>out</em>, </td>\n\
        </tr>\n\
        <tr>\n\
          <td class=\"paramkey\"></td>\n\
          <td></td>\n\
          <td class=\"paramtype\">const char *&#160;</td>\n\
          <td class=\"paramname\"><em>value</em>, </td>\n\
        </tr>\n\
        <tr>\n\
          <td class=\"paramkey\"></td>\n\
          <td></td>\n\
          <td class=\"paramtype\">bool&#160;</td>\n\
          <td class=\"paramname\"><em>binary</em> = <code>false</code>&#160;</td>\n\
        </tr>\n\
        <tr>\n\
          <td></td>\n\
          <td>)</td>\n\
          <td></td><td></td>\n\
        </tr>\n\
      </table>\n\
  </td>\n\
  <td class=\"mlabels-right\">\n\
<span class=\"mlabels\"><span class=\"mlabel\">static</span></span>  </td>\n\
  </tr>\n\
</table>\n\
</div><div class=\"memdoc\">\n\
\n\
<p>This method is used to write out a mull-terminated string (const char*) to an ostream. </p>\n\
<dl class=\"params\"><dt>Parameters</dt><dd>\n\
  <table class=\"params\">\n\
    <tr><td class=\"paramdir\">[in]</td><td class=\"paramname\">out</td><td>the output ostream </td></tr>\n\
    <tr><td class=\"paramdir\">[in]</td><td class=\"paramname\">value</td><td>string to write out </td></tr>\n\
    <tr><td class=\"paramdir\">[in]</td><td class=\"paramname\">binary</td><td>If true, the byte(s) of the value string are written out. If false, the string representation is written out.</td></tr>\n\
  </table>\n\
  </dd>\n\
</dl>\n\
<dl class=\"section return\"><dt>Returns</dt><dd><ul>\n\
<li><b>MS::kSuccess</b> write worked </li>\n\
<li><b>MS::kFailure</b> value is NULL or stream failed to write value </li>\n\
</ul>\n\
</dd></dl>\n\
\n\
</div>\n\
</div>\n\
<a class=\"anchor\" id=\"aaf500a5027242e9adbd00a1929726d54\"></a>\n\
<div class=\"memitem\">\n\
<div class=\"memproto\">\n\
<table class=\"mlabels\">\n\
  <tr>\n\
  <td class=\"mlabels-left\">\n\
      <table class=\"memname\">\n\
        <tr>\n\
          <td class=\"memname\" translate=\"no\"><a class=\"el\" translate=\"no\" href=\"#!/url=./cpp_ref/class_m_status.html\">MStatus</a> writeInt </td>\n\
          <td>(</td>\n\
          <td class=\"paramtype\">std::ostream &amp;&#160;</td>\n\
          <td class=\"paramname\"><em>out</em>, </td>\n\
        </tr>\n\
        <tr>\n\
          <td class=\"paramkey\"></td>\n\
          <td></td>\n\
          <td class=\"paramtype\">const int&#160;</td>\n\
          <td class=\"paramname\"><em>value</em>, </td>\n\
        </tr>\n\
        <tr>\n\
          <td class=\"paramkey\"></td>\n\
          <td></td>\n\
          <td class=\"paramtype\">bool&#160;</td>\n\
          <td class=\"paramname\"><em>binary</em> = <code>false</code>&#160;</td>\n\
        </tr>\n\
        <tr>\n\
          <td></td>\n\
          <td>)</td>\n\
          <td></td><td></td>\n\
        </tr>\n\
      </table>\n\
  </td>\n\
  <td class=\"mlabels-right\">\n\
<span class=\"mlabels\"><span class=\"mlabel\">static</span></span>  </td>\n\
  </tr>\n\
</table>\n\
</div><div class=\"memdoc\">\n\
\n\
<p>This method is used to write out a \"int\" value to an ostream. </p>\n\
<dl class=\"params\"><dt>Parameters</dt><dd>\n\
  <table class=\"params\">\n\
    <tr><td class=\"paramdir\">[in]</td><td class=\"paramname\">out</td><td>the output ostream </td></tr>\n\
    <tr><td class=\"paramdir\">[in]</td><td class=\"paramname\">value</td><td>value to write out </td></tr>\n\
    <tr><td class=\"paramdir\">[in]</td><td class=\"paramname\">binary</td><td>If true, the byte(s) of value are written out. If false, the string representation is written out.</td></tr>\n\
  </table>\n\
  </dd>\n\
</dl>\n\
<dl class=\"section return\"><dt>Returns</dt><dd><ul>\n\
<li><b>MS::kSuccess</b> write worked </li>\n\
<li><b>MS::kFailure</b> stream failed to write value </li>\n\
</ul>\n\
</dd></dl>\n\
\n\
</div>\n\
</div>\n\
<a class=\"anchor\" id=\"a96863c5e3f39303a6154312bd192f96f\"></a>\n\
<div class=\"memitem\">\n\
<div class=\"memproto\">\n\
<table class=\"mlabels\">\n\
  <tr>\n\
  <td class=\"mlabels-left\">\n\
      <table class=\"memname\">\n\
        <tr>\n\
          <td class=\"memname\" translate=\"no\"><a class=\"el\" translate=\"no\" href=\"#!/url=./cpp_ref/class_m_status.html\">MStatus</a> writeFloat </td>\n\
          <td>(</td>\n\
          <td class=\"paramtype\">std::ostream &amp;&#160;</td>\n\
          <td class=\"paramname\"><em>out</em>, </td>\n\
        </tr>\n\
        <tr>\n\
          <td class=\"paramkey\"></td>\n\
          <td></td>\n\
          <td class=\"paramtype\">const float&#160;</td>\n\
          <td class=\"paramname\"><em>value</em>, </td>\n\
        </tr>\n\
        <tr>\n\
          <td class=\"paramkey\"></td>\n\
          <td></td>\n\
          <td class=\"paramtype\">bool&#160;</td>\n\
          <td class=\"paramname\"><em>binary</em> = <code>false</code>&#160;</td>\n\
        </tr>\n\
        <tr>\n\
          <td></td>\n\
          <td>)</td>\n\
          <td></td><td></td>\n\
        </tr>\n\
      </table>\n\
  </td>\n\
  <td class=\"mlabels-right\">\n\
<span class=\"mlabels\"><span class=\"mlabel\">static</span></span>  </td>\n\
  </tr>\n\
</table>\n\
</div><div class=\"memdoc\">\n\
\n\
<p>This method is used to write out a \"float\" value to an ostream. </p>\n\
<dl class=\"params\"><dt>Parameters</dt><dd>\n\
  <table class=\"params\">\n\
    <tr><td class=\"paramdir\">[in]</td><td class=\"paramname\">out</td><td>the output ostream </td></tr>\n\
    <tr><td class=\"paramdir\">[in]</td><td class=\"paramname\">value</td><td>value to write out </td></tr>\n\
    <tr><td class=\"paramdir\">[in]</td><td class=\"paramname\">binary</td><td>If true, the byte(s) of value are written out. If false, the string representation is written out.</td></tr>\n\
  </table>\n\
  </dd>\n\
</dl>\n\
<dl class=\"section return\"><dt>Returns</dt><dd><ul>\n\
<li><b>MS::kSuccess</b> write worked </li>\n\
<li><b>MS::kFailure</b> stream failed to write value </li>\n\
</ul>\n\
</dd></dl>\n\
\n\
</div>\n\
</div>\n\
<a class=\"anchor\" id=\"a2ba07e47541f03c58f2c3602124e8d9e\"></a>\n\
<div class=\"memitem\">\n\
<div class=\"memproto\">\n\
<table class=\"mlabels\">\n\
  <tr>\n\
  <td class=\"mlabels-left\">\n\
      <table class=\"memname\">\n\
        <tr>\n\
          <td class=\"memname\" translate=\"no\"><a class=\"el\" translate=\"no\" href=\"#!/url=./cpp_ref/class_m_status.html\">MStatus</a> writeDouble </td>\n\
          <td>(</td>\n\
          <td class=\"paramtype\">std::ostream &amp;&#160;</td>\n\
          <td class=\"paramname\"><em>out</em>, </td>\n\
        </tr>\n\
        <tr>\n\
          <td class=\"paramkey\"></td>\n\
          <td></td>\n\
          <td class=\"paramtype\">const double&#160;</td>\n\
          <td class=\"paramname\"><em>value</em>, </td>\n\
        </tr>\n\
        <tr>\n\
          <td class=\"paramkey\"></td>\n\
          <td></td>\n\
          <td class=\"paramtype\">bool&#160;</td>\n\
          <td class=\"paramname\"><em>binary</em> = <code>false</code>&#160;</td>\n\
        </tr>\n\
        <tr>\n\
          <td></td>\n\
          <td>)</td>\n\
          <td></td><td></td>\n\
        </tr>\n\
      </table>\n\
  </td>\n\
  <td class=\"mlabels-right\">\n\
<span class=\"mlabels\"><span class=\"mlabel\">static</span></span>  </td>\n\
  </tr>\n\
</table>\n\
</div><div class=\"memdoc\">\n\
\n\
<p>This method is used to write out a \"double\" value to an ostream. </p>\n\
<dl class=\"params\"><dt>Parameters</dt><dd>\n\
  <table class=\"params\">\n\
    <tr><td class=\"paramdir\">[in]</td><td class=\"paramname\">out</td><td>the output ostream </td></tr>\n\
    <tr><td class=\"paramdir\">[in]</td><td class=\"paramname\">value</td><td>value to write out </td></tr>\n\
    <tr><td class=\"paramdir\">[in]</td><td class=\"paramname\">binary</td><td>If true, the byte(s) of value are written out. If false, the string representation is written out.</td></tr>\n\
  </table>\n\
  </dd>\n\
</dl>\n\
<dl class=\"section return\"><dt>Returns</dt><dd><ul>\n\
<li><b>MS::kSuccess</b> write worked </li>\n\
<li><b>MS::kFailure</b> stream failed to write value </li>\n\
</ul>\n\
</dd></dl>\n\
\n\
</div>\n\
</div>\n\
<a class=\"anchor\" id=\"acba7a1d8f950736b395f64b84e5ed09e\"></a>\n\
<div class=\"memitem\">\n\
<div class=\"memproto\">\n\
<table class=\"mlabels\">\n\
  <tr>\n\
  <td class=\"mlabels-left\">\n\
      <table class=\"memname\">\n\
        <tr>\n\
          <td class=\"memname\" translate=\"no\"><a class=\"el\" translate=\"no\" href=\"#!/url=./cpp_ref/class_m_status.html\">MStatus</a> readChar </td>\n\
          <td>(</td>\n\
          <td class=\"paramtype\">std::istream &amp;&#160;</td>\n\
          <td class=\"paramname\"><em>in</em>, </td>\n\
        </tr>\n\
        <tr>\n\
          <td class=\"paramkey\"></td>\n\
          <td></td>\n\
          <td class=\"paramtype\">char &amp;&#160;</td>\n\
          <td class=\"paramname\"><em>value</em>, </td>\n\
        </tr>\n\
        <tr>\n\
          <td class=\"paramkey\"></td>\n\
          <td></td>\n\
          <td class=\"paramtype\">bool&#160;</td>\n\
          <td class=\"paramname\"><em>binary</em> = <code>false</code>&#160;</td>\n\
        </tr>\n\
        <tr>\n\
          <td></td>\n\
          <td>)</td>\n\
          <td></td><td></td>\n\
        </tr>\n\
      </table>\n\
  </td>\n\
  <td class=\"mlabels-right\">\n\
<span class=\"mlabels\"><span class=\"mlabel\">static</span></span>  </td>\n\
  </tr>\n\
</table>\n\
</div><div class=\"memdoc\">\n\
\n\
<p>This method is used to read a \"char\" binary value from an istream. </p>\n\
<dl class=\"params\"><dt>Parameters</dt><dd>\n\
  <table class=\"params\">\n\
    <tr><td class=\"paramdir\">[in]</td><td class=\"paramname\">in</td><td>the input istream </td></tr>\n\
    <tr><td class=\"paramdir\">[out]</td><td class=\"paramname\">value</td><td>where the input is stored </td></tr>\n\
    <tr><td class=\"paramdir\">[in]</td><td class=\"paramname\">binary</td><td>if true the value appears in the input stream in binary form, otherwise it is in string form</td></tr>\n\
  </table>\n\
  </dd>\n\
</dl>\n\
<dl class=\"section return\"><dt>Returns</dt><dd><ul>\n\
<li><b>MS::kSuccess</b> read worked </li>\n\
<li><b>MS::kFailure</b> stream failed to read value </li>\n\
</ul>\n\
</dd></dl>\n\
\n\
</div>\n\
</div>\n\
<a class=\"anchor\" id=\"a25f90e010da91c33f37ae5f1f1016cd5\"></a>\n\
<div class=\"memitem\">\n\
<div class=\"memproto\">\n\
<table class=\"mlabels\">\n\
  <tr>\n\
  <td class=\"mlabels-left\">\n\
      <table class=\"memname\">\n\
        <tr>\n\
          <td class=\"memname\" translate=\"no\"><a class=\"el\" translate=\"no\" href=\"#!/url=./cpp_ref/class_m_status.html\">MStatus</a> readCharBuffer </td>\n\
          <td>(</td>\n\
          <td class=\"paramtype\">std::istream &amp;&#160;</td>\n\
          <td class=\"paramname\"><em>in</em>, </td>\n\
        </tr>\n\
        <tr>\n\
          <td class=\"paramkey\"></td>\n\
          <td></td>\n\
          <td class=\"paramtype\">char *&amp;&#160;</td>\n\
          <td class=\"paramname\"><em>value</em>, </td>\n\
        </tr>\n\
        <tr>\n\
          <td class=\"paramkey\"></td>\n\
          <td></td>\n\
          <td class=\"paramtype\">unsigned int&#160;</td>\n\
          <td class=\"paramname\"><em>length</em>, </td>\n\
        </tr>\n\
        <tr>\n\
          <td class=\"paramkey\"></td>\n\
          <td></td>\n\
          <td class=\"paramtype\">bool&#160;</td>\n\
          <td class=\"paramname\"><em>binary</em> = <code>false</code>&#160;</td>\n\
        </tr>\n\
        <tr>\n\
          <td></td>\n\
          <td>)</td>\n\
          <td></td><td></td>\n\
        </tr>\n\
      </table>\n\
  </td>\n\
  <td class=\"mlabels-right\">\n\
<span class=\"mlabels\"><span class=\"mlabel\">static</span></span>  </td>\n\
  </tr>\n\
</table>\n\
</div><div class=\"memdoc\">\n\
\n\
<p>This method is used to read a character string (char*) from an istream. </p>\n\
<dl class=\"params\"><dt>Parameters</dt><dd>\n\
  <table class=\"params\">\n\
    <tr><td class=\"paramdir\">[in]</td><td class=\"paramname\">in</td><td>the input istream </td></tr>\n\
    <tr><td class=\"paramdir\">[out]</td><td class=\"paramname\">value</td><td>where the input is stored </td></tr>\n\
    <tr><td class=\"paramdir\">[in]</td><td class=\"paramname\">length</td><td>number of characters to read </td></tr>\n\
    <tr><td class=\"paramdir\">[in]</td><td class=\"paramname\">binary</td><td>if true the value appears in the input stream in binary form, otherwise it is in string form</td></tr>\n\
  </table>\n\
  </dd>\n\
</dl>\n\
<dl class=\"section return\"><dt>Returns</dt><dd><ul>\n\
<li><b>MS::kSuccess</b> read worked </li>\n\
<li><b>MS::kFailure</b> value is NULL or stream failed to read value </li>\n\
</ul>\n\
</dd></dl>\n\
\n\
</div>\n\
</div>\n\
<a class=\"anchor\" id=\"a07b6f0c479bed94c33f2502b50474753\"></a>\n\
<div class=\"memitem\">\n\
<div class=\"memproto\">\n\
<table class=\"mlabels\">\n\
  <tr>\n\
  <td class=\"mlabels-left\">\n\
      <table class=\"memname\">\n\
        <tr>\n\
          <td class=\"memname\" translate=\"no\"><a class=\"el\" translate=\"no\" href=\"#!/url=./cpp_ref/class_m_status.html\">MStatus</a> readInt </td>\n\
          <td>(</td>\n\
          <td class=\"paramtype\">std::istream &amp;&#160;</td>\n\
          <td class=\"paramname\"><em>in</em>, </td>\n\
        </tr>\n\
        <tr>\n\
          <td class=\"paramkey\"></td>\n\
          <td></td>\n\
          <td class=\"paramtype\">int &amp;&#160;</td>\n\
          <td class=\"paramname\"><em>value</em>, </td>\n\
        </tr>\n\
        <tr>\n\
          <td class=\"paramkey\"></td>\n\
          <td></td>\n\
          <td class=\"paramtype\">bool&#160;</td>\n\
          <td class=\"paramname\"><em>binary</em> = <code>false</code>&#160;</td>\n\
        </tr>\n\
        <tr>\n\
          <td></td>\n\
          <td>)</td>\n\
          <td></td><td></td>\n\
        </tr>\n\
      </table>\n\
  </td>\n\
  <td class=\"mlabels-right\">\n\
<span class=\"mlabels\"><span class=\"mlabel\">static</span></span>  </td>\n\
  </tr>\n\
</table>\n\
</div><div class=\"memdoc\">\n\
\n\
<p>This method is used to read a \"int\" binary value from an istream. </p>\n\
<dl class=\"params\"><dt>Parameters</dt><dd>\n\
  <table class=\"params\">\n\
    <tr><td class=\"paramdir\">[in]</td><td class=\"paramname\">in</td><td>the input istream </td></tr>\n\
    <tr><td class=\"paramdir\">[out]</td><td class=\"paramname\">value</td><td>where the input is stored </td></tr>\n\
    <tr><td class=\"paramdir\">[in]</td><td class=\"paramname\">binary</td><td>if true the value appears in the input stream in binary form, otherwise it is in string form</td></tr>\n\
  </table>\n\
  </dd>\n\
</dl>\n\
<dl class=\"section return\"><dt>Returns</dt><dd><ul>\n\
<li><b>MS::kSuccess</b> read worked </li>\n\
<li><b>MS::kFailure</b> stream failed to read value </li>\n\
</ul>\n\
</dd></dl>\n\
\n\
</div>\n\
</div>\n\
<a class=\"anchor\" id=\"a81b2892a352f27b40501c9172409f446\"></a>\n\
<div class=\"memitem\">\n\
<div class=\"memproto\">\n\
<table class=\"mlabels\">\n\
  <tr>\n\
  <td class=\"mlabels-left\">\n\
      <table class=\"memname\">\n\
        <tr>\n\
          <td class=\"memname\" translate=\"no\"><a class=\"el\" translate=\"no\" href=\"#!/url=./cpp_ref/class_m_status.html\">MStatus</a> readFloat </td>\n\
          <td>(</td>\n\
          <td class=\"paramtype\">std::istream &amp;&#160;</td>\n\
          <td class=\"paramname\"><em>in</em>, </td>\n\
        </tr>\n\
        <tr>\n\
          <td class=\"paramkey\"></td>\n\
          <td></td>\n\
          <td class=\"paramtype\">float &amp;&#160;</td>\n\
          <td class=\"paramname\"><em>value</em>, </td>\n\
        </tr>\n\
        <tr>\n\
          <td class=\"paramkey\"></td>\n\
          <td></td>\n\
          <td class=\"paramtype\">bool&#160;</td>\n\
          <td class=\"paramname\"><em>binary</em> = <code>false</code>&#160;</td>\n\
        </tr>\n\
        <tr>\n\
          <td></td>\n\
          <td>)</td>\n\
          <td></td><td></td>\n\
        </tr>\n\
      </table>\n\
  </td>\n\
  <td class=\"mlabels-right\">\n\
<span class=\"mlabels\"><span class=\"mlabel\">static</span></span>  </td>\n\
  </tr>\n\
</table>\n\
</div><div class=\"memdoc\">\n\
\n\
<p>This method is used to read a \"float\" binary value from an istream. </p>\n\
<dl class=\"params\"><dt>Parameters</dt><dd>\n\
  <table class=\"params\">\n\
    <tr><td class=\"paramdir\">[in]</td><td class=\"paramname\">in</td><td>the input istream </td></tr>\n\
    <tr><td class=\"paramdir\">[out]</td><td class=\"paramname\">value</td><td>where the input is stored </td></tr>\n\
    <tr><td class=\"paramdir\">[in]</td><td class=\"paramname\">binary</td><td>if true the value appears in the input stream in binary form, otherwise it is in string form</td></tr>\n\
  </table>\n\
  </dd>\n\
</dl>\n\
<dl class=\"section return\"><dt>Returns</dt><dd><ul>\n\
<li><b>MS::kSuccess</b> read worked </li>\n\
<li><b>MS::kFailure</b> stream failed to read value </li>\n\
</ul>\n\
</dd></dl>\n\
\n\
</div>\n\
</div>\n\
<a class=\"anchor\" id=\"a42c17ff59965fcd71385b121151266b6\"></a>\n\
<div class=\"memitem\">\n\
<div class=\"memproto\">\n\
<table class=\"mlabels\">\n\
  <tr>\n\
  <td class=\"mlabels-left\">\n\
      <table class=\"memname\">\n\
        <tr>\n\
          <td class=\"memname\" translate=\"no\"><a class=\"el\" translate=\"no\" href=\"#!/url=./cpp_ref/class_m_status.html\">MStatus</a> readDouble </td>\n\
          <td>(</td>\n\
          <td class=\"paramtype\">std::istream &amp;&#160;</td>\n\
          <td class=\"paramname\"><em>in</em>, </td>\n\
        </tr>\n\
        <tr>\n\
          <td class=\"paramkey\"></td>\n\
          <td></td>\n\
          <td class=\"paramtype\">double &amp;&#160;</td>\n\
          <td class=\"paramname\"><em>value</em>, </td>\n\
        </tr>\n\
        <tr>\n\
          <td class=\"paramkey\"></td>\n\
          <td></td>\n\
          <td class=\"paramtype\">bool&#160;</td>\n\
          <td class=\"paramname\"><em>binary</em> = <code>false</code>&#160;</td>\n\
        </tr>\n\
        <tr>\n\
          <td></td>\n\
          <td>)</td>\n\
          <td></td><td></td>\n\
        </tr>\n\
      </table>\n\
  </td>\n\
  <td class=\"mlabels-right\">\n\
<span class=\"mlabels\"><span class=\"mlabel\">static</span></span>  </td>\n\
  </tr>\n\
</table>\n\
</div><div class=\"memdoc\">\n\
\n\
<p>This method is used to read a \"double\" binary value from an istream. </p>\n\
<dl class=\"params\"><dt>Parameters</dt><dd>\n\
  <table class=\"params\">\n\
    <tr><td class=\"paramdir\">[in]</td><td class=\"paramname\">in</td><td>the input istream </td></tr>\n\
    <tr><td class=\"paramdir\">[out]</td><td class=\"paramname\">value</td><td>where the input is stored </td></tr>\n\
    <tr><td class=\"paramdir\">[in]</td><td class=\"paramname\">binary</td><td>if true the value appears in the input stream in binary form, otherwise it is in string form</td></tr>\n\
  </table>\n\
  </dd>\n\
</dl>\n\
<dl class=\"section return\"><dt>Returns</dt><dd><ul>\n\
<li><b>MS::kSuccess</b> read worked </li>\n\
<li><b>MS::kFailure</b> stream failed to read value </li>\n\
</ul>\n\
</dd></dl>\n\
\n\
</div>\n\
</div>\n\
<hr>The documentation for this class was generated from the following files:<ul>\n\
<li>MStreamUtils.h</li>\n\
<li>MStreamUtils.cpp</li>\n\
</ul>\n\
</div><!-- contents -->\n\
</div><!-- doc-content -->\n\
          <div class=\"footer-block\"><a href=\"../html/ac.cmtdialog.htm\" class=\"comments-anchor\" target=\"_blank\"><span class=\"comments-link\">Please send us your comment about this page</span></a></div></div>\n\
   </div></body>\n\
</html>\n\
";