var topic = "<!-- saved from url=(0024)http://docs.autodesk.com -->\n\
<html>\n\
   <head><script src=\"../scripts/yepnope.1.5.4-min.js\" type=\"text/javascript\"></script><script src=\"../scripts/lib/jquery-1.11.1.min.js\" type=\"text/javascript\"></script>\n\
      <title>C++ API Reference: AssociationsSerializer Class Reference</title>\n\
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
    cpp_ref_adsk_ref_toc.initNavTree(\'classadsk_1_1_data_1_1_associations_serializer.html\', tocPrefix);\n\
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
            <h1>C++ API Reference: AssociationsSerializer Class Reference</h1>\n\
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
<div class=\"title\">AssociationsSerializer Class Reference<span class=\"mlabels\"><span class=\"mlabel\">abstract</span></span></div>  </div>\n\
<div class=\"summary\">\n\
<a href=\"classadsk_1_1_data_1_1_associations_serializer.html#pub-methods\">Public Member Functions</a> &#124;\n\
<a href=\"#!/url=./cpp_ref/classadsk_1_1_data_1_1_associations_serializer-members.html\">List of all members</a>  </div></div><!--header-->\n\
<div class=\"contents\">\n\
\n\
<p>Class handling the definition of the format for serialization of <a class=\"el\" href=\"#!/url=./cpp_ref/classadsk_1_1_data_1_1_associations.html\" title=\"Class handling associations between internal and external data. \">adsk::Data::Associations</a>.  \n\
 <a href=\"#!/url=./cpp_ref/classadsk_1_1_data_1_1_associations_serializer.html#details\">More...</a></p>\n\
\n\
<p><code>#include &lt;adskDataAssociationsSerializer.h&gt;</code></p>\n\
<table class=\"memberdecls\">\n\
<tr class=\"heading\"><td colspan=\"2\"><h2 class=\"groupheader\"><a name=\"pub-methods\"></a>\n\
Public Member Functions</h2></td></tr>\n\
<tr class=\"memitem:a0fc90e56eb291e029e77de65503aa7fd\"><td class=\"memItemLeft\" align=\"right\" valign=\"top\"><a class=\"anchor\" id=\"a0fc90e56eb291e029e77de65503aa7fd\"></a>\n\
&#160;</td><td class=\"memItemRight\" valign=\"bottom\"><a class=\"el\" href=\"#!/url=./cpp_ref/classadsk_1_1_data_1_1_associations_serializer.html#a0fc90e56eb291e029e77de65503aa7fd\">AssociationsSerializer</a> ()</td></tr>\n\
<tr class=\"memdesc:a0fc90e56eb291e029e77de65503aa7fd\"><td class=\"mdescLeft\">&#160;</td><td class=\"mdescRight\">Default constructor, does nothing. <br></td></tr>\n\
<tr class=\"separator:a0fc90e56eb291e029e77de65503aa7fd\"><td class=\"memSeparator\" colspan=\"2\">&#160;</td></tr>\n\
<tr class=\"memitem:a45545d906858891fa84b3109ba52c889\"><td class=\"memItemLeft\" align=\"right\" valign=\"top\"><a class=\"anchor\" id=\"a45545d906858891fa84b3109ba52c889\"></a>\n\
virtual&#160;</td><td class=\"memItemRight\" valign=\"bottom\"><a class=\"el\" href=\"#!/url=./cpp_ref/classadsk_1_1_data_1_1_associations_serializer.html#a45545d906858891fa84b3109ba52c889\">~AssociationsSerializer</a> ()</td></tr>\n\
<tr class=\"memdesc:a45545d906858891fa84b3109ba52c889\"><td class=\"mdescLeft\">&#160;</td><td class=\"mdescRight\">Default destructor, does nothing. <br></td></tr>\n\
<tr class=\"separator:a45545d906858891fa84b3109ba52c889\"><td class=\"memSeparator\" colspan=\"2\">&#160;</td></tr>\n\
<tr class=\"memitem:ac53646fcc90674247fd2a2a14455e240\"><td class=\"memItemLeft\" align=\"right\" valign=\"top\">virtual <a class=\"el\" href=\"#!/url=./cpp_ref/classadsk_1_1_data_1_1_associations.html\">Associations</a> *&#160;</td><td class=\"memItemRight\" valign=\"bottom\"><a class=\"el\" href=\"#!/url=./cpp_ref/classadsk_1_1_data_1_1_associations_serializer.html#ac53646fcc90674247fd2a2a14455e240\">read</a> (std::istream &amp;cSrc, std::string &amp;errors) const  =0</td></tr>\n\
<tr class=\"memdesc:ac53646fcc90674247fd2a2a14455e240\"><td class=\"mdescLeft\">&#160;</td><td class=\"mdescRight\">Implement this to parse the serialized form of an <a class=\"el\" href=\"#!/url=./cpp_ref/classadsk_1_1_data_1_1_associations.html\" title=\"Class handling associations between internal and external data. \">adsk::Data::Associations</a> object.  <a href=\"classadsk_1_1_data_1_1_associations_serializer.html#ac53646fcc90674247fd2a2a14455e240\">More...</a><br></td></tr>\n\
<tr class=\"separator:ac53646fcc90674247fd2a2a14455e240\"><td class=\"memSeparator\" colspan=\"2\">&#160;</td></tr>\n\
<tr class=\"memitem:a62b54f26331d85ff2f6142543ba3a13d\"><td class=\"memItemLeft\" align=\"right\" valign=\"top\">virtual int&#160;</td><td class=\"memItemRight\" valign=\"bottom\"><a class=\"el\" href=\"#!/url=./cpp_ref/classadsk_1_1_data_1_1_associations_serializer.html#a62b54f26331d85ff2f6142543ba3a13d\">write</a> (const <a class=\"el\" href=\"#!/url=./cpp_ref/classadsk_1_1_data_1_1_associations.html\">Associations</a> &amp;dataToWrite, std::ostream &amp;cDst, std::string &amp;errors) const  =0</td></tr>\n\
<tr class=\"memdesc:a62b54f26331d85ff2f6142543ba3a13d\"><td class=\"mdescLeft\">&#160;</td><td class=\"mdescRight\">Implement this to output the <a class=\"el\" href=\"#!/url=./cpp_ref/classadsk_1_1_data_1_1_associations.html\" title=\"Class handling associations between internal and external data. \">adsk::Data::Associations</a> definition in your serialization format.  <a href=\"classadsk_1_1_data_1_1_associations_serializer.html#a62b54f26331d85ff2f6142543ba3a13d\">More...</a><br></td></tr>\n\
<tr class=\"separator:a62b54f26331d85ff2f6142543ba3a13d\"><td class=\"memSeparator\" colspan=\"2\">&#160;</td></tr>\n\
<tr class=\"memitem:a093c45f6d5cfb70297875c9e67da5b3b\"><td class=\"memItemLeft\" align=\"right\" valign=\"top\">virtual void&#160;</td><td class=\"memItemRight\" valign=\"bottom\"><a class=\"el\" href=\"#!/url=./cpp_ref/classadsk_1_1_data_1_1_associations_serializer.html#a093c45f6d5cfb70297875c9e67da5b3b\">getFormatDescription</a> (std::ostream &amp;info) const  =0</td></tr>\n\
<tr class=\"memdesc:a093c45f6d5cfb70297875c9e67da5b3b\"><td class=\"mdescLeft\">&#160;</td><td class=\"mdescRight\">Implement this to provide a description of your <a class=\"el\" href=\"#!/url=./cpp_ref/classadsk_1_1_data_1_1_associations.html\" title=\"Class handling associations between internal and external data. \">adsk::Data::Associations</a> serialization format.  <a href=\"classadsk_1_1_data_1_1_associations_serializer.html#a093c45f6d5cfb70297875c9e67da5b3b\">More...</a><br></td></tr>\n\
<tr class=\"separator:a093c45f6d5cfb70297875c9e67da5b3b\"><td class=\"memSeparator\" colspan=\"2\">&#160;</td></tr>\n\
</table>\n\
<a name=\"details\" id=\"details\"></a><h2 class=\"groupheader\">Detailed Description</h2>\n\
<div class=\"textblock\"><p>Class handling the definition of the format for serialization of <a class=\"el\" href=\"#!/url=./cpp_ref/classadsk_1_1_data_1_1_associations.html\" title=\"Class handling associations between internal and external data. \">adsk::Data::Associations</a>. </p>\n\
<p>The <a class=\"el\" href=\"#!/url=./cpp_ref/classadsk_1_1_data_1_1_associations.html\" title=\"Class handling associations between internal and external data. \">adsk::Data::Associations</a> class manages <a class=\"el\" href=\"#!/url=./cpp_ref/classadsk_1_1_data_1_1_associations.html\" title=\"Class handling associations between internal and external data. \">Associations</a> definitions. They are persisted using a serialization format implemented through the <a class=\"el\" href=\"#!/url=./cpp_ref/classadsk_1_1_data_1_1_associations_serializer.html\" title=\"Class handling the definition of the format for serialization of adsk::Data::Associations. \">adsk::Data::AssociationsSerializer</a> hierarchy. The base class defines the interface and manages the list of available <a class=\"el\" href=\"#!/url=./cpp_ref/classadsk_1_1_data_1_1_associations.html\" title=\"Class handling associations between internal and external data. \">Associations</a> serialization formats. </p>\n\
<dl class=\"section \"><div id=\"dynsection-example0\" class=\"dynheader closed\" onclick=\"return toggleVisibility(this)\" style=\"cursor:pointer;\"><dt><img id=\"dynsection-example0-trigger\" src=\"cpp_ref/closed.png\" alt=\"+\"> <b>Examples: </b></dt></div><div id=\"dynsection-example0-content\" class=\"dyncontent\" style=\"display:none;\"><dd><a class=\"el\" href=\"#!/url=./cpp_ref/_metadata_sample_2export_metadata_cmd_8cpp-example.html#_a11\">MetadataSample/exportMetadataCmd.cpp</a>, <a class=\"el\" href=\"#!/url=./cpp_ref/_metadata_sample_2metadata_base_8cpp-example.html#_a6\">MetadataSample/metadataBase.cpp</a>, <a class=\"el\" href=\"#!/url=./cpp_ref/_metadata_sample_2metadata_base_8h-example.html#_a12\">MetadataSample/metadataBase.h</a>, <a class=\"el\" href=\"#!/url=./cpp_ref/_metadata_x_m_l_2associations_serializer_x_m_l_8cpp-example.html#_a0\">MetadataXML/associationsSerializerXML.cpp</a>, and <a class=\"el\" href=\"#!/url=./cpp_ref/_metadata_x_m_l_2associations_serializer_x_m_l_8h-example.html#_a0\">MetadataXML/associationsSerializerXML.h</a>.</dd></div>\n\
</dl></div><h2 class=\"groupheader\">Member Function Documentation</h2>\n\
<a class=\"anchor\" id=\"ac53646fcc90674247fd2a2a14455e240\"></a>\n\
<div class=\"memitem\">\n\
<div class=\"memproto\">\n\
<table class=\"mlabels\">\n\
  <tr>\n\
  <td class=\"mlabels-left\">\n\
      <table class=\"memname\">\n\
        <tr>\n\
          <td class=\"memname\"><a class=\"el\" href=\"#!/url=./cpp_ref/classadsk_1_1_data_1_1_associations.html\">Associations</a> * read </td>\n\
          <td>(</td>\n\
          <td class=\"paramtype\">std::istream &amp;&#160;</td>\n\
          <td class=\"paramname\"><em>cSrc</em>, </td>\n\
        </tr>\n\
        <tr>\n\
          <td class=\"paramkey\"></td>\n\
          <td></td>\n\
          <td class=\"paramtype\">std::string &amp;&#160;</td>\n\
          <td class=\"paramname\"><em>errors</em>&#160;</td>\n\
        </tr>\n\
        <tr>\n\
          <td></td>\n\
          <td>)</td>\n\
          <td></td><td> const</td>\n\
        </tr>\n\
      </table>\n\
  </td>\n\
  <td class=\"mlabels-right\">\n\
<span class=\"mlabels\"><span class=\"mlabel\">pure virtual</span></span>  </td>\n\
  </tr>\n\
</table>\n\
</div><div class=\"memdoc\">\n\
\n\
<p>Implement this to parse the serialized form of an <a class=\"el\" href=\"#!/url=./cpp_ref/classadsk_1_1_data_1_1_associations.html\" title=\"Class handling associations between internal and external data. \">adsk::Data::Associations</a> object. </p>\n\
<p>Given an input stream containing your serialization of an <a class=\"el\" href=\"#!/url=./cpp_ref/classadsk_1_1_data_1_1_associations.html\" title=\"Class handling associations between internal and external data. \">adsk::Data::Associations</a> object parse the data and create the <a class=\"el\" href=\"#!/url=./cpp_ref/classadsk_1_1_data_1_1_associations.html\" title=\"Class handling associations between internal and external data. \">adsk::Data::Associations</a> object it describes.</p>\n\
<p>If there are any problems the detailed error information should be returned in the errors string.</p>\n\
<p>The <a class=\"el\" href=\"#!/url=./cpp_ref/classadsk_1_1_data_1_1_associations.html\" title=\"Class handling associations between internal and external data. \">adsk::Data::Associations</a> parsing should also recursively populate any adsk::Data::Channels and adsk::Data::Streams within the <a class=\"el\" href=\"#!/url=./cpp_ref/classadsk_1_1_data_1_1_associations.html\" title=\"Class handling associations between internal and external data. \">adsk::Data::Associations</a>.</p>\n\
<p>This method should be capable of understanding any data your <a class=\"el\" href=\"#!/url=./cpp_ref/classadsk_1_1_data_1_1_associations_serializer.html#a62b54f26331d85ff2f6142543ba3a13d\" title=\"Implement this to output the adsk::Data::Associations definition in your serialization format...\">adsk::Data::AssociationsSerializer::write()</a> method can provide.</p>\n\
<dl class=\"params\"><dt>Parameters</dt><dd>\n\
  <table class=\"params\">\n\
    <tr><td class=\"paramdir\">[in]</td><td class=\"paramname\">cSrc</td><td>Input stream containing serialization of the <a class=\"el\" href=\"#!/url=./cpp_ref/classadsk_1_1_data_1_1_associations.html\" title=\"Class handling associations between internal and external data. \">adsk::Data::Associations</a> object </td></tr>\n\
    <tr><td class=\"paramdir\">[out]</td><td class=\"paramname\">errors</td><td>String containing description of parse errors</td></tr>\n\
  </table>\n\
  </dd>\n\
</dl>\n\
<dl class=\"section return\"><dt>Returns</dt><dd>Pointer to the newly created <a class=\"el\" href=\"#!/url=./cpp_ref/classadsk_1_1_data_1_1_associations.html\" title=\"Class handling associations between internal and external data. \">adsk::Data::Associations</a> object </dd></dl>\n\
\n\
</div>\n\
</div>\n\
<a class=\"anchor\" id=\"a62b54f26331d85ff2f6142543ba3a13d\"></a>\n\
<div class=\"memitem\">\n\
<div class=\"memproto\">\n\
<table class=\"mlabels\">\n\
  <tr>\n\
  <td class=\"mlabels-left\">\n\
      <table class=\"memname\">\n\
        <tr>\n\
          <td class=\"memname\">int write </td>\n\
          <td>(</td>\n\
          <td class=\"paramtype\">const <a class=\"el\" href=\"#!/url=./cpp_ref/classadsk_1_1_data_1_1_associations.html\">Associations</a> &amp;&#160;</td>\n\
          <td class=\"paramname\"><em>dataToWrite</em>, </td>\n\
        </tr>\n\
        <tr>\n\
          <td class=\"paramkey\"></td>\n\
          <td></td>\n\
          <td class=\"paramtype\">std::ostream &amp;&#160;</td>\n\
          <td class=\"paramname\"><em>cDst</em>, </td>\n\
        </tr>\n\
        <tr>\n\
          <td class=\"paramkey\"></td>\n\
          <td></td>\n\
          <td class=\"paramtype\">std::string &amp;&#160;</td>\n\
          <td class=\"paramname\"><em>errors</em>&#160;</td>\n\
        </tr>\n\
        <tr>\n\
          <td></td>\n\
          <td>)</td>\n\
          <td></td><td> const</td>\n\
        </tr>\n\
      </table>\n\
  </td>\n\
  <td class=\"mlabels-right\">\n\
<span class=\"mlabels\"><span class=\"mlabel\">pure virtual</span></span>  </td>\n\
  </tr>\n\
</table>\n\
</div><div class=\"memdoc\">\n\
\n\
<p>Implement this to output the <a class=\"el\" href=\"#!/url=./cpp_ref/classadsk_1_1_data_1_1_associations.html\" title=\"Class handling associations between internal and external data. \">adsk::Data::Associations</a> definition in your serialization format. </p>\n\
<p>Given an <a class=\"el\" href=\"#!/url=./cpp_ref/classadsk_1_1_data_1_1_associations.html\" title=\"Class handling associations between internal and external data. \">adsk::Data::Associations</a> object and an output stream as destination write out enough information so that you can recreate the <a class=\"el\" href=\"#!/url=./cpp_ref/classadsk_1_1_data_1_1_associations.html\" title=\"Class handling associations between internal and external data. \">adsk::Data::Associations</a> from data in the output stream using your <a class=\"el\" href=\"#!/url=./cpp_ref/classadsk_1_1_data_1_1_associations_serializer.html#ac53646fcc90674247fd2a2a14455e240\" title=\"Implement this to parse the serialized form of an adsk::Data::Associations object. \">adsk::Data::AssociationsSerializer::read()</a> method.</p>\n\
<p>This recursively includes all adsk::Data::Channels used by the <a class=\"el\" href=\"#!/url=./cpp_ref/classadsk_1_1_data_1_1_associations.html\" title=\"Class handling associations between internal and external data. \">adsk::Data::Associations</a>, adsk::Data::Streams within those adsk::Data::Channels, and data within the adsk::Data::Streams.</p>\n\
<dl class=\"params\"><dt>Parameters</dt><dd>\n\
  <table class=\"params\">\n\
    <tr><td class=\"paramdir\">[in]</td><td class=\"paramname\">dataToWrite</td><td><a class=\"el\" href=\"#!/url=./cpp_ref/classadsk_1_1_data_1_1_associations.html\" title=\"Class handling associations between internal and external data. \">adsk::Data::Associations</a> to be serialized </td></tr>\n\
    <tr><td class=\"paramdir\">[out]</td><td class=\"paramname\">cDst</td><td>Output stream to which the object is to be serialized </td></tr>\n\
    <tr><td class=\"paramdir\">[out]</td><td class=\"paramname\">errors</td><td>String containing description of output errors</td></tr>\n\
  </table>\n\
  </dd>\n\
</dl>\n\
<dl class=\"section return\"><dt>Returns</dt><dd>number of errors found during write (0 means success) </dd></dl>\n\
\n\
</div>\n\
</div>\n\
<a class=\"anchor\" id=\"a093c45f6d5cfb70297875c9e67da5b3b\"></a>\n\
<div class=\"memitem\">\n\
<div class=\"memproto\">\n\
<table class=\"mlabels\">\n\
  <tr>\n\
  <td class=\"mlabels-left\">\n\
      <table class=\"memname\">\n\
        <tr>\n\
          <td class=\"memname\">void getFormatDescription </td>\n\
          <td>(</td>\n\
          <td class=\"paramtype\">std::ostream &amp;&#160;</td>\n\
          <td class=\"paramname\"><em>info</em></td><td>)</td>\n\
          <td> const</td>\n\
        </tr>\n\
      </table>\n\
  </td>\n\
  <td class=\"mlabels-right\">\n\
<span class=\"mlabels\"><span class=\"mlabel\">pure virtual</span></span>  </td>\n\
  </tr>\n\
</table>\n\
</div><div class=\"memdoc\">\n\
\n\
<p>Implement this to provide a description of your <a class=\"el\" href=\"#!/url=./cpp_ref/classadsk_1_1_data_1_1_associations.html\" title=\"Class handling associations between internal and external data. \">adsk::Data::Associations</a> serialization format. </p>\n\
<p>Output a textual description of your serialization format into the given stream.</p>\n\
<dl class=\"params\"><dt>Parameters</dt><dd>\n\
  <table class=\"params\">\n\
    <tr><td class=\"paramdir\">[out]</td><td class=\"paramname\">info</td><td>Output stream to receive your serialization format description </td></tr>\n\
  </table>\n\
  </dd>\n\
</dl>\n\
\n\
</div>\n\
</div>\n\
<hr>The documentation for this class was generated from the following files:<ul>\n\
<li>adskDataAssociationsSerializer.h</li>\n\
<li>adskDataAssociationsSerializer.cpp</li>\n\
</ul>\n\
</div><!-- contents -->\n\
</div><!-- doc-content -->\n\
<!-- start footer part -->\n\
\n\
      <div class=\"footer-block\"><a href=\"../html/ac.cmtdialog.htm\" class=\"comments-anchor\" target=\"_blank\"><span class=\"comments-link\">Please send us your comment about this page</span></a></div></div>\n\
   </div></body>\n\
</html>\n\
";