var topic = "<!-- saved from url=(0024)http://docs.autodesk.com -->\n\
<html>\n\
   <head><script src=\"../scripts/yepnope.1.5.4-min.js\" type=\"text/javascript\"></script><script src=\"../scripts/lib/jquery-1.11.1.min.js\" type=\"text/javascript\"></script>\n\
      <title>C++ API Reference: AccessorFactory&lt; AccessorType &gt; Class Template Reference</title>\n\
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
    cpp_ref_adsk_ref_toc.initNavTree(\'classadsk_1_1_data_1_1_accessor_factory.html\', tocPrefix);\n\
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
            <h1>C++ API Reference: AccessorFactory&lt; AccessorType &gt; Class Template Reference</h1>\n\
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
      <li class=\"current\"><a href=\"#!/url=./cpp_ref/annotated.html\"><span>Classes</span></a></li>\n\
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
<!-- window showing the filter options -->\n\
\n\
\n\
<!-- iframe showing the search results (closed by default) -->\n\
\n\
\n\
<div class=\"header\">\n\
  \n\
  <div class=\"headertitle\">\n\
<div class=\"title\">AccessorFactory&lt; AccessorType &gt; Class Template Reference</div>  </div>\n\
<div class=\"summary\">\n\
<a href=\"classadsk_1_1_data_1_1_accessor_factory.html#pub-methods\">Public Member Functions</a> &#124;\n\
<a href=\"#!/url=./cpp_ref/classadsk_1_1_data_1_1_accessor_factory-members.html\">List of all members</a>  </div></div><!--header-->\n\
<div class=\"contents\">\n\
\n\
<p>Calls the specified <a class=\"el\" href=\"#!/url=./cpp_ref/classadsk_1_1_data_1_1_accessor.html\" title=\"Class used to read and write metadata from/to an existing file. \">Accessor</a> type\'s default constructor.  \n\
 <a href=\"#!/url=./cpp_ref/classadsk_1_1_data_1_1_accessor_factory.html#details\">More...</a></p>\n\
\n\
<p><code>#include &lt;adskDataAccessor.h&gt;</code></p>\n\
<div id=\"dynsection-0\" onclick=\"return toggleVisibility(this)\" class=\"dynheader closed\" style=\"cursor:pointer;\">\n\
  <img id=\"dynsection-0-trigger\" src=\"cpp_ref/closed.png\" alt=\"+\"> Inheritance diagram for AccessorFactory&lt; AccessorType &gt;:</div>\n\
<div id=\"dynsection-0-summary\" class=\"dynsummary\" style=\"display:block;\">\n\
</div>\n\
<div id=\"dynsection-0-content\" class=\"dyncontent\" style=\"display:none;\">\n\
 <div class=\"center\">\n\
  <img src=\"cpp_ref/classadsk_1_1_data_1_1_accessor_factory.png\" usemap=\"#AccessorFactory&lt; AccessorType &gt;_map\" alt=\"\">\n\
  <map id=\"AccessorFactory&lt; AccessorType &gt;_map\" name=\"AccessorFactory&lt; AccessorType &gt;_map\">\n\
<area href=\"classadsk_1_1_data_1_1_accessor_factory_base.html\" title=\"Base class for Accessor factories. \" alt=\"AccessorFactoryBase\" shape=\"rect\" coords=\"0,0,216,24\">\n\
</map>\n\
 </div></div>\n\
<table class=\"memberdecls\">\n\
<tr class=\"heading\"><td colspan=\"2\"><h2 class=\"groupheader\"><a name=\"pub-methods\"></a>\n\
Public Member Functions</h2></td></tr>\n\
<tr class=\"memitem:a6a46096521a6c231cf51e858454afa42\"><td class=\"memItemLeft\" align=\"right\" valign=\"top\">virtual std::unique_ptr&lt; <a class=\"el\" href=\"#!/url=./cpp_ref/classadsk_1_1_data_1_1_accessor.html\">Accessor</a> &gt;&#160;</td><td class=\"memItemRight\" valign=\"bottom\"><a class=\"el\" href=\"#!/url=./cpp_ref/classadsk_1_1_data_1_1_accessor_factory.html#a6a46096521a6c231cf51e858454afa42\">create</a> () const </td></tr>\n\
<tr class=\"memdesc:a6a46096521a6c231cf51e858454afa42\"><td class=\"mdescLeft\">&#160;</td><td class=\"mdescRight\">Returns a factory for creating accessors handling the supported file type.  <a href=\"classadsk_1_1_data_1_1_accessor_factory.html#a6a46096521a6c231cf51e858454afa42\">More...</a><br></td></tr>\n\
<tr class=\"separator:a6a46096521a6c231cf51e858454afa42\"><td class=\"memSeparator\" colspan=\"2\">&#160;</td></tr>\n\
<tr class=\"inherit_header pub_methods_classadsk_1_1_data_1_1_accessor_factory_base\"><td colspan=\"2\" onclick=\"javascript:toggleInherit(\'pub_methods_classadsk_1_1_data_1_1_accessor_factory_base\')\"><img src=\"cpp_ref/closed.png\" alt=\"-\">&#160;Public Member Functions inherited from <a class=\"el\" href=\"#!/url=./cpp_ref/classadsk_1_1_data_1_1_accessor_factory_base.html\">AccessorFactoryBase</a></td></tr>\n\
<tr class=\"memitem:a16ab15cf7313059e027f169be93fcade inherit pub_methods_classadsk_1_1_data_1_1_accessor_factory_base\"><td class=\"memItemLeft\" align=\"right\" valign=\"top\"><a class=\"anchor\" id=\"a16ab15cf7313059e027f169be93fcade\"></a>\n\
virtual&#160;</td><td class=\"memItemRight\" valign=\"bottom\"><a class=\"el\" href=\"#!/url=./cpp_ref/classadsk_1_1_data_1_1_accessor_factory_base.html#a16ab15cf7313059e027f169be93fcade\">~AccessorFactoryBase</a> ()</td></tr>\n\
<tr class=\"memdesc:a16ab15cf7313059e027f169be93fcade inherit pub_methods_classadsk_1_1_data_1_1_accessor_factory_base\"><td class=\"mdescLeft\">&#160;</td><td class=\"mdescRight\">Unregisters the factory. <br></td></tr>\n\
<tr class=\"separator:a16ab15cf7313059e027f169be93fcade inherit pub_methods_classadsk_1_1_data_1_1_accessor_factory_base\"><td class=\"memSeparator\" colspan=\"2\">&#160;</td></tr>\n\
</table><table class=\"memberdecls\">\n\
<tr class=\"heading\"><td colspan=\"2\"><h2 class=\"groupheader\"><a name=\"inherited\"></a>\n\
Additional Inherited Members</h2></td></tr>\n\
<tr class=\"inherit_header pro_methods_classadsk_1_1_data_1_1_accessor_factory_base\"><td colspan=\"2\" onclick=\"javascript:toggleInherit(\'pro_methods_classadsk_1_1_data_1_1_accessor_factory_base\')\"><img src=\"cpp_ref/closed.png\" alt=\"-\">&#160;Protected Member Functions inherited from <a class=\"el\" href=\"#!/url=./cpp_ref/classadsk_1_1_data_1_1_accessor_factory_base.html\">AccessorFactoryBase</a></td></tr>\n\
<tr class=\"memitem:acf4bd5bf8ed0283ee6301d00b50a90d5 inherit pro_methods_classadsk_1_1_data_1_1_accessor_factory_base\"><td class=\"memItemLeft\" align=\"right\" valign=\"top\">&#160;</td><td class=\"memItemRight\" valign=\"bottom\"><a class=\"el\" href=\"#!/url=./cpp_ref/classadsk_1_1_data_1_1_accessor_factory_base.html#acf4bd5bf8ed0283ee6301d00b50a90d5\">AccessorFactoryBase</a> (const std::string &amp;fileNameExtension)</td></tr>\n\
<tr class=\"memdesc:acf4bd5bf8ed0283ee6301d00b50a90d5 inherit pro_methods_classadsk_1_1_data_1_1_accessor_factory_base\"><td class=\"mdescLeft\">&#160;</td><td class=\"mdescRight\">Registers the factory.  <a href=\"classadsk_1_1_data_1_1_accessor_factory.html#acf4bd5bf8ed0283ee6301d00b50a90d5\">More...</a><br></td></tr>\n\
<tr class=\"separator:acf4bd5bf8ed0283ee6301d00b50a90d5 inherit pro_methods_classadsk_1_1_data_1_1_accessor_factory_base\"><td class=\"memSeparator\" colspan=\"2\">&#160;</td></tr>\n\
</table>\n\
<a name=\"details\" id=\"details\"></a><h2 class=\"groupheader\">Detailed Description</h2>\n\
<div class=\"textblock\"><h3>template&lt;typename AccessorType&gt;<br>\n\
class adsk::Data::AccessorFactory&lt; AccessorType &gt;</h3>\n\
\n\
<p>Calls the specified <a class=\"el\" href=\"#!/url=./cpp_ref/classadsk_1_1_data_1_1_accessor.html\" title=\"Class used to read and write metadata from/to an existing file. \">Accessor</a> type\'s default constructor. </p>\n\
<p><a class=\"el\" href=\"#!/url=./cpp_ref/classadsk_1_1_data_1_1_accessor.html\" title=\"Class used to read and write metadata from/to an existing file. \">Accessor</a> factories automatically register themselves upon construction and deregister themselves upon destruction. So the creator of a factory must maintain it in-scope as long as the factory for the supported file extension(s) is needed. Typically, this will be a file-scope variable declared with the accessor implementation.</p>\n\
<p>For example (in myAccessor.cpp), to support *.myext files:</p>\n\
<p>class MyAccessor : public <a class=\"el\" href=\"#!/url=./cpp_ref/classadsk_1_1_data_1_1_accessor.html\" title=\"Class used to read and write metadata from/to an existing file. \">adsk::Data::Accessor</a> { ... };</p>\n\
<p>adsk::Data::AccessorFactory&lt; MyAccessor &gt; myFactory( \"myext\" ); </p>\n\
</div><h2 class=\"groupheader\">Member Function Documentation</h2>\n\
<a class=\"anchor\" id=\"a6a46096521a6c231cf51e858454afa42\"></a>\n\
<div class=\"memitem\">\n\
<div class=\"memproto\">\n\
<table class=\"mlabels\">\n\
  <tr>\n\
  <td class=\"mlabels-left\">\n\
      <table class=\"memname\">\n\
        <tr>\n\
          <td class=\"memname\">virtual std::unique_ptr&lt; <a class=\"el\" href=\"#!/url=./cpp_ref/classadsk_1_1_data_1_1_accessor.html\">Accessor</a> &gt; create </td>\n\
          <td>(</td>\n\
          <td class=\"paramname\"></td><td>)</td>\n\
          <td> const</td>\n\
        </tr>\n\
      </table>\n\
  </td>\n\
  <td class=\"mlabels-right\">\n\
<span class=\"mlabels\"><span class=\"mlabel\">inline</span><span class=\"mlabel\">virtual</span></span>  </td>\n\
  </tr>\n\
</table>\n\
</div><div class=\"memdoc\">\n\
\n\
<p>Returns a factory for creating accessors handling the supported file type. </p>\n\
<dl class=\"section return\"><dt>Returns</dt><dd>A new accessor for the file type supported by the concrete factory. </dd></dl>\n\
\n\
<p>Implements <a class=\"el\" href=\"#!/url=./cpp_ref/classadsk_1_1_data_1_1_accessor_factory_base.html#a14fbdfd8a114862c13e16d7f35d7685e\">AccessorFactoryBase</a>.</p>\n\
\n\
</div>\n\
</div>\n\
<hr>The documentation for this class was generated from the following file:<ul>\n\
<li>adskDataAccessor.h</li>\n\
</ul>\n\
</div><!-- contents -->\n\
</div><!-- doc-content -->\n\
<!-- start footer part -->\n\
\n\
      <div class=\"footer-block\"><a href=\"../html/ac.cmtdialog.htm\" class=\"comments-anchor\" target=\"_blank\"><span class=\"comments-link\">Please send us your comment about this page</span></a></div></div>\n\
   </div></body>\n\
</html>\n\
";