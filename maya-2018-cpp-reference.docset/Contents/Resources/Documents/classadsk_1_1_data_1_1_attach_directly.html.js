var topic = "<!-- saved from url=(0024)http://docs.autodesk.com -->\n\
<html>\n\
   <head><script src=\"../scripts/yepnope.1.5.4-min.js\" type=\"text/javascript\"></script><script src=\"../scripts/lib/jquery-1.11.1.min.js\" type=\"text/javascript\"></script><meta http-equiv=\"Content-Type\" content=\"text/html; charset=UTF-8\"><meta name=\"product\" content=\"MAYAUL\"><meta name=\"release\" content=\"2018\"><meta name=\"book\" content=\"Developer\"><meta name=\"created\" content=\"2017-06-22\"><meta name=\"topicid\" content=\"GUID-02DEF634-1E7B-48C6-8ACD-2C934CA97887\"><meta name=\"topic-type\" content=\"concept\">\n\
      <title>AttachDirectly Class Reference</title>\n\
   \n\
\n\
<meta name=\"topic-subtype\" content=\"C++\"></head>\n\
   <body height=\"100%\"><div class=\"body_content\" id=\"body-content\"><link rel=\"stylesheet\" type=\"text/css\" href=\"cpp_ref/navtree.css\"><link rel=\"stylesheet\" type=\"text/css\" href=\"cpp_ref/doxygen.css\"><link rel=\"stylesheet\" type=\"text/css\" href=\"cpp_ref/tabs.css\"><link rel=\"stylesheet\" type=\"text/css\" href=\"style/adsk.cpm.css\"><script language=\"javascript\">var index = \'index.html\';</script><script>$(document).ready(function() { yepnope.injectJs(\"./scripts/ac_common.js\"); });</script><script type=\"text/javascript\">\n\
var tocSystemNeedsToBeLoaded = typeof(cpp_ref_adsk_ref_toc) == \'undefined\';\n\
var weAreIn21 = $(\'div#main.view-active\').length;\n\
var tocPrefix = \'\';\n\
if (weAreIn21)\n\
{ tocPrefix = \'cpp_ref/\'; }\n\
function cpp_ref_initializeToc(forceTrigger) {\n\
    cpp_ref_adsk_ref_toc.initResizable();\n\
    cpp_ref_adsk_ref_toc.initNavTree(\'classadsk_1_1_data_1_1_attach_directly.html\', tocPrefix);\n\
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
            <h1>AttachDirectly Class Reference</h1>\n\
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
<div class=\"title\">AttachDirectly Class Reference</div>  </div>\n\
<div class=\"summary\">\n\
<a href=\"classadsk_1_1_data_1_1_attach_directly.html#pub-methods\">Public Member Functions</a> &#124;\n\
<a href=\"classadsk_1_1_data_1_1_attach_directly.html#pro-attribs\">Protected Attributes</a>  </div></div><!--header-->\n\
<div class=\"contents\">\n\
\n\
<p><code>#include &lt;adskDataAttachDirectly.h&gt;</code></p>\n\
<a name=\"details\" id=\"details\"></a><h2 class=\"groupheader\">Class Description</h2>\n\
<div class=\"textblock\"><p>Helper class to provide a simple implementation the the <a class=\"el\" translate=\"no\" href=\"#!/url=./cpp_ref/classadsk_1_1_data_1_1_attach.html\" title=\"Helper class to manage attachment of metadata to other class objects. \">adsk::Data::Attach</a> interface. </p>\n\
<p>Simply stores the metadata directly in the class.</p>\n\
<p>Use this class as a mix-in to any class to which you want metadata added </p>\n\
</div><div id=\"dynsection-0\" onclick=\"return toggleVisibility(this)\" class=\"dynheader closed\" style=\"cursor:pointer;\">\n\
  <img id=\"dynsection-0-trigger\" src=\"cpp_ref/closed.png\" alt=\"+\"> Inheritance diagram for AttachDirectly:</div>\n\
<div id=\"dynsection-0-summary\" class=\"dynsummary\" style=\"display:block;\">\n\
</div>\n\
<div id=\"dynsection-0-content\" class=\"dyncontent\" style=\"display:none;\">\n\
 <div class=\"center\">\n\
  <img src=\"cpp_ref/classadsk_1_1_data_1_1_attach_directly.png\" usemap=\"#AttachDirectly_map\" alt=\"\">\n\
  <map id=\"AttachDirectly_map\" name=\"AttachDirectly_map\">\n\
<area href=\"classadsk_1_1_data_1_1_attach.html\" title=\"Helper class to manage attachment of metadata to other class objects. \" alt=\"Attach\" shape=\"rect\" coords=\"0,0,92,24\">\n\
</map>\n\
 </div></div>\n\
<table class=\"memberdecls\">\n\
<tr class=\"heading\"><td colspan=\"2\"><h2 class=\"groupheader\"><a name=\"pub-methods\"></a>\n\
Public Member Functions</h2></td></tr>\n\
<tr class=\"memitem:a14aa784115d29be4e9d25c97169e49df\"><td class=\"memItemLeft\" translate=\"no\" align=\"right\" valign=\"top\"><a class=\"anchor\" id=\"a14aa784115d29be4e9d25c97169e49df\"></a>\n\
&#160;</td><td class=\"memItemRight\" translate=\"no\" valign=\"bottom\"><a class=\"el\" translate=\"no\" href=\"#!/url=./cpp_ref/classadsk_1_1_data_1_1_attach_directly.html#a14aa784115d29be4e9d25c97169e49df\">AttachDirectly</a> ()</td></tr>\n\
<tr class=\"memdesc:a14aa784115d29be4e9d25c97169e49df\"><td class=\"mdescLeft\">&#160;</td><td class=\"mdescRight\">Default constructor. <br></td></tr>\n\
<tr class=\"separator:a14aa784115d29be4e9d25c97169e49df\"><td class=\"memSeparator\" colspan=\"2\">&#160;</td></tr>\n\
<tr class=\"memitem:a838f9acb2eee0b7701483540a8956e2c\"><td class=\"memItemLeft\" translate=\"no\" align=\"right\" valign=\"top\"><a class=\"anchor\" id=\"a838f9acb2eee0b7701483540a8956e2c\"></a>\n\
virtual&#160;</td><td class=\"memItemRight\" translate=\"no\" valign=\"bottom\"><a class=\"el\" translate=\"no\" href=\"#!/url=./cpp_ref/classadsk_1_1_data_1_1_attach_directly.html#a838f9acb2eee0b7701483540a8956e2c\">~AttachDirectly</a> ()</td></tr>\n\
<tr class=\"memdesc:a838f9acb2eee0b7701483540a8956e2c\"><td class=\"mdescLeft\">&#160;</td><td class=\"mdescRight\">Default destructor. <br></td></tr>\n\
<tr class=\"separator:a838f9acb2eee0b7701483540a8956e2c\"><td class=\"memSeparator\" colspan=\"2\">&#160;</td></tr>\n\
<tr class=\"memitem:ac9e4209f669aa5153e46195def03e099\"><td class=\"memItemLeft\" translate=\"no\" align=\"right\" valign=\"top\">&#160;</td><td class=\"memItemRight\" translate=\"no\" valign=\"bottom\"><a class=\"el\" translate=\"no\" href=\"#!/url=./cpp_ref/classadsk_1_1_data_1_1_attach_directly.html#ac9e4209f669aa5153e46195def03e099\">AttachDirectly</a> (const <a class=\"el\" translate=\"no\" href=\"#!/url=./cpp_ref/classadsk_1_1_data_1_1_attach_directly.html\">AttachDirectly</a> &amp;)</td></tr>\n\
<tr class=\"memdesc:ac9e4209f669aa5153e46195def03e099\"><td class=\"mdescLeft\">&#160;</td><td class=\"mdescRight\">Copy constructor, duplicates the metadata, which is ref-counted.  <a href=\"classadsk_1_1_data_1_1_attach_directly.html#ac9e4209f669aa5153e46195def03e099\">More...</a><br></td></tr>\n\
<tr class=\"separator:ac9e4209f669aa5153e46195def03e099\"><td class=\"memSeparator\" colspan=\"2\">&#160;</td></tr>\n\
<tr class=\"memitem:ab7f4218759154b896620780578bf1a7b\"><td class=\"memItemLeft\" translate=\"no\" align=\"right\" valign=\"top\">virtual <a class=\"el\" translate=\"no\" href=\"#!/url=./cpp_ref/classadsk_1_1_data_1_1_associations.html\">adsk::Data::Associations</a> *&#160;</td><td class=\"memItemRight\" translate=\"no\" valign=\"bottom\"><a class=\"el\" translate=\"no\" href=\"#!/url=./cpp_ref/classadsk_1_1_data_1_1_attach_directly.html#ab7f4218759154b896620780578bf1a7b\">editableMetadata</a> ()</td></tr>\n\
<tr class=\"memdesc:ab7f4218759154b896620780578bf1a7b\"><td class=\"mdescLeft\">&#160;</td><td class=\"mdescRight\">Get the metadata associated with this object in an editable form.  <a href=\"classadsk_1_1_data_1_1_attach_directly.html#ab7f4218759154b896620780578bf1a7b\">More...</a><br></td></tr>\n\
<tr class=\"separator:ab7f4218759154b896620780578bf1a7b\"><td class=\"memSeparator\" colspan=\"2\">&#160;</td></tr>\n\
<tr class=\"memitem:a02e9ab389b685af685e20ed0ea40e57e\"><td class=\"memItemLeft\" translate=\"no\" align=\"right\" valign=\"top\">virtual const <a class=\"el\" translate=\"no\" href=\"#!/url=./cpp_ref/classadsk_1_1_data_1_1_associations.html\">adsk::Data::Associations</a> *&#160;</td><td class=\"memItemRight\" translate=\"no\" valign=\"bottom\"><a class=\"el\" translate=\"no\" href=\"#!/url=./cpp_ref/classadsk_1_1_data_1_1_attach_directly.html#a02e9ab389b685af685e20ed0ea40e57e\">metadata</a> () const </td></tr>\n\
<tr class=\"memdesc:a02e9ab389b685af685e20ed0ea40e57e\"><td class=\"mdescLeft\">&#160;</td><td class=\"mdescRight\">Get the metadata associated with this object.  <a href=\"classadsk_1_1_data_1_1_attach_directly.html#a02e9ab389b685af685e20ed0ea40e57e\">More...</a><br></td></tr>\n\
<tr class=\"separator:a02e9ab389b685af685e20ed0ea40e57e\"><td class=\"memSeparator\" colspan=\"2\">&#160;</td></tr>\n\
<tr class=\"memitem:a1226d53471a99fc0cfd1f0937043c3ff\"><td class=\"memItemLeft\" translate=\"no\" align=\"right\" valign=\"top\">virtual bool&#160;</td><td class=\"memItemRight\" translate=\"no\" valign=\"bottom\"><a class=\"el\" translate=\"no\" href=\"#!/url=./cpp_ref/classadsk_1_1_data_1_1_attach_directly.html#a1226d53471a99fc0cfd1f0937043c3ff\">setMetadata</a> (const <a class=\"el\" translate=\"no\" href=\"#!/url=./cpp_ref/classadsk_1_1_data_1_1_associations.html\">adsk::Data::Associations</a> &amp;)</td></tr>\n\
<tr class=\"memdesc:a1226d53471a99fc0cfd1f0937043c3ff\"><td class=\"mdescLeft\">&#160;</td><td class=\"mdescRight\">Replace the object\'s metadata.  <a href=\"classadsk_1_1_data_1_1_attach_directly.html#a1226d53471a99fc0cfd1f0937043c3ff\">More...</a><br></td></tr>\n\
<tr class=\"separator:a1226d53471a99fc0cfd1f0937043c3ff\"><td class=\"memSeparator\" colspan=\"2\">&#160;</td></tr>\n\
<tr class=\"memitem:a67652e4b400141aa54f90821c86c6026\"><td class=\"memItemLeft\" translate=\"no\" align=\"right\" valign=\"top\">virtual bool&#160;</td><td class=\"memItemRight\" translate=\"no\" valign=\"bottom\"><a class=\"el\" translate=\"no\" href=\"#!/url=./cpp_ref/classadsk_1_1_data_1_1_attach_directly.html#a67652e4b400141aa54f90821c86c6026\">deleteMetadata</a> ()</td></tr>\n\
<tr class=\"memdesc:a67652e4b400141aa54f90821c86c6026\"><td class=\"mdescLeft\">&#160;</td><td class=\"mdescRight\">Remove the object\'s metadata.  <a href=\"classadsk_1_1_data_1_1_attach_directly.html#a67652e4b400141aa54f90821c86c6026\">More...</a><br></td></tr>\n\
<tr class=\"separator:a67652e4b400141aa54f90821c86c6026\"><td class=\"memSeparator\" colspan=\"2\">&#160;</td></tr>\n\
<tr class=\"inherit_header pub_methods_classadsk_1_1_data_1_1_attach\"><td colspan=\"2\" onclick=\"javascript:toggleInherit(\'pub_methods_classadsk_1_1_data_1_1_attach\')\"><img src=\"cpp_ref/closed.png\" alt=\"-\">&#160;Public Member Functions inherited from <a class=\"el\" translate=\"no\" href=\"#!/url=./cpp_ref/classadsk_1_1_data_1_1_attach.html\">Attach</a></td></tr>\n\
<tr class=\"memitem:a0545da80a486749a4d75af86225c331d inherit pub_methods_classadsk_1_1_data_1_1_attach\"><td class=\"memItemLeft\" translate=\"no\" align=\"right\" valign=\"top\"><a class=\"anchor\" id=\"a0545da80a486749a4d75af86225c331d\"></a>\n\
&#160;</td><td class=\"memItemRight\" translate=\"no\" valign=\"bottom\"><a class=\"el\" translate=\"no\" href=\"#!/url=./cpp_ref/classadsk_1_1_data_1_1_attach.html#a0545da80a486749a4d75af86225c331d\">Attach</a> ()</td></tr>\n\
<tr class=\"memdesc:a0545da80a486749a4d75af86225c331d inherit pub_methods_classadsk_1_1_data_1_1_attach\"><td class=\"mdescLeft\">&#160;</td><td class=\"mdescRight\">Default constructor. <br></td></tr>\n\
<tr class=\"separator:a0545da80a486749a4d75af86225c331d inherit pub_methods_classadsk_1_1_data_1_1_attach\"><td class=\"memSeparator\" colspan=\"2\">&#160;</td></tr>\n\
<tr class=\"memitem:a0192315d3bfe9e72cd2568364a8b9e6f inherit pub_methods_classadsk_1_1_data_1_1_attach\"><td class=\"memItemLeft\" translate=\"no\" align=\"right\" valign=\"top\"><a class=\"anchor\" id=\"a0192315d3bfe9e72cd2568364a8b9e6f\"></a>\n\
virtual&#160;</td><td class=\"memItemRight\" translate=\"no\" valign=\"bottom\"><a class=\"el\" translate=\"no\" href=\"#!/url=./cpp_ref/classadsk_1_1_data_1_1_attach.html#a0192315d3bfe9e72cd2568364a8b9e6f\">~Attach</a> ()</td></tr>\n\
<tr class=\"memdesc:a0192315d3bfe9e72cd2568364a8b9e6f inherit pub_methods_classadsk_1_1_data_1_1_attach\"><td class=\"mdescLeft\">&#160;</td><td class=\"mdescRight\">Default destructor. <br></td></tr>\n\
<tr class=\"separator:a0192315d3bfe9e72cd2568364a8b9e6f inherit pub_methods_classadsk_1_1_data_1_1_attach\"><td class=\"memSeparator\" colspan=\"2\">&#160;</td></tr>\n\
<tr class=\"memitem:ad1cdc42aa925a8c2c6c9dcc0e37c6ce5 inherit pub_methods_classadsk_1_1_data_1_1_attach\"><td class=\"memItemLeft\" translate=\"no\" align=\"right\" valign=\"top\">&#160;</td><td class=\"memItemRight\" translate=\"no\" valign=\"bottom\"><a class=\"el\" translate=\"no\" href=\"#!/url=./cpp_ref/classadsk_1_1_data_1_1_attach.html#ad1cdc42aa925a8c2c6c9dcc0e37c6ce5\">Attach</a> (const <a class=\"el\" translate=\"no\" href=\"#!/url=./cpp_ref/classadsk_1_1_data_1_1_attach.html\">Attach</a> &amp;)</td></tr>\n\
<tr class=\"memdesc:ad1cdc42aa925a8c2c6c9dcc0e37c6ce5 inherit pub_methods_classadsk_1_1_data_1_1_attach\"><td class=\"mdescLeft\">&#160;</td><td class=\"mdescRight\">Copy constructor, does nothing since there is no data.  <a href=\"classadsk_1_1_data_1_1_attach_directly.html#ad1cdc42aa925a8c2c6c9dcc0e37c6ce5\">More...</a><br></td></tr>\n\
<tr class=\"separator:ad1cdc42aa925a8c2c6c9dcc0e37c6ce5 inherit pub_methods_classadsk_1_1_data_1_1_attach\"><td class=\"memSeparator\" colspan=\"2\">&#160;</td></tr>\n\
</table><table class=\"memberdecls\">\n\
<tr class=\"heading\"><td colspan=\"2\"><h2 class=\"groupheader\"><a name=\"pro-attribs\"></a>\n\
Protected Attributes</h2></td></tr>\n\
<tr class=\"memitem:a637e785a67030c98d1e3ef4b2f327c62\"><td class=\"memItemLeft\" translate=\"no\" align=\"right\" valign=\"top\"><a class=\"anchor\" id=\"a637e785a67030c98d1e3ef4b2f327c62\"></a>\n\
<a class=\"el\" translate=\"no\" href=\"#!/url=./cpp_ref/classadsk_1_1_data_1_1_associations.html\">adsk::Data::Associations</a> *&#160;</td><td class=\"memItemRight\" translate=\"no\" valign=\"bottom\"><a class=\"el\" translate=\"no\" href=\"#!/url=./cpp_ref/classadsk_1_1_data_1_1_attach_directly.html#a637e785a67030c98d1e3ef4b2f327c62\">fMetadata</a></td></tr>\n\
<tr class=\"memdesc:a637e785a67030c98d1e3ef4b2f327c62\"><td class=\"mdescLeft\">&#160;</td><td class=\"mdescRight\">Metadata stored as a pointer to allow differentiation between \"no metadata\" and \"empty metadata\" if necessary. <br></td></tr>\n\
<tr class=\"separator:a637e785a67030c98d1e3ef4b2f327c62\"><td class=\"memSeparator\" colspan=\"2\">&#160;</td></tr>\n\
</table>\n\
<h2 class=\"groupheader\">Constructor &amp; Destructor Documentation</h2>\n\
<a class=\"anchor\" id=\"ac9e4209f669aa5153e46195def03e099\"></a>\n\
<div class=\"memitem\">\n\
<div class=\"memproto\">\n\
      <table class=\"memname\">\n\
        <tr>\n\
          <td class=\"memname\" translate=\"no\"><a class=\"el\" translate=\"no\" href=\"#!/url=./cpp_ref/classadsk_1_1_data_1_1_attach_directly.html\">AttachDirectly</a> </td>\n\
          <td>(</td>\n\
          <td class=\"paramtype\">const <a class=\"el\" translate=\"no\" href=\"#!/url=./cpp_ref/classadsk_1_1_data_1_1_attach_directly.html\">AttachDirectly</a> &amp;&#160;</td>\n\
          <td class=\"paramname\"><em>rhs</em></td><td>)</td>\n\
          <td></td>\n\
        </tr>\n\
      </table>\n\
</div><div class=\"memdoc\">\n\
\n\
<p>Copy constructor, duplicates the metadata, which is ref-counted. </p>\n\
<dl class=\"params\"><dt>Parameters</dt><dd>\n\
  <table class=\"params\">\n\
    <tr><td class=\"paramdir\">[in]</td><td class=\"paramname\">rhs</td><td><a class=\"el\" translate=\"no\" href=\"#!/url=./cpp_ref/classadsk_1_1_data_1_1_attach_directly.html\" title=\"Helper class to provide a simple implementation the the adsk::Data::Attach interface. \">AttachDirectly</a> data to be copied </td></tr>\n\
  </table>\n\
  </dd>\n\
</dl>\n\
\n\
</div>\n\
</div>\n\
<h2 class=\"groupheader\">Member Function Documentation</h2>\n\
<a class=\"anchor\" id=\"ab7f4218759154b896620780578bf1a7b\"></a>\n\
<div class=\"memitem\">\n\
<div class=\"memproto\">\n\
<table class=\"mlabels\">\n\
  <tr>\n\
  <td class=\"mlabels-left\">\n\
      <table class=\"memname\">\n\
        <tr>\n\
          <td class=\"memname\" translate=\"no\"><a class=\"el\" translate=\"no\" href=\"#!/url=./cpp_ref/classadsk_1_1_data_1_1_associations.html\">adsk::Data::Associations</a> * editableMetadata </td>\n\
          <td>(</td>\n\
          <td class=\"paramname\"></td><td>)</td>\n\
          <td></td>\n\
        </tr>\n\
      </table>\n\
  </td>\n\
  <td class=\"mlabels-right\">\n\
<span class=\"mlabels\"><span class=\"mlabel\">virtual</span></span>  </td>\n\
  </tr>\n\
</table>\n\
</div><div class=\"memdoc\">\n\
\n\
<p>Get the metadata associated with this object in an editable form. </p>\n\
<p>Normally you wouldn\'t use this method to get metadata since modifying it directly bypasses the undo mechanism but sometimes that is the expediant thing to do.</p>\n\
<dl class=\"section return\"><dt>Returns</dt><dd>Pointer to metadata associated with the object, or NULL if there isn\'t any </dd></dl>\n\
\n\
<p>Implements <a class=\"el\" translate=\"no\" href=\"#!/url=./cpp_ref/classadsk_1_1_data_1_1_attach.html#a7bba65733dab69a16f441fbcf3e784f2\">Attach</a>.</p>\n\
\n\
</div>\n\
</div>\n\
<a class=\"anchor\" id=\"a02e9ab389b685af685e20ed0ea40e57e\"></a>\n\
<div class=\"memitem\">\n\
<div class=\"memproto\">\n\
<table class=\"mlabels\">\n\
  <tr>\n\
  <td class=\"mlabels-left\">\n\
      <table class=\"memname\">\n\
        <tr>\n\
          <td class=\"memname\" translate=\"no\">const <a class=\"el\" translate=\"no\" href=\"#!/url=./cpp_ref/classadsk_1_1_data_1_1_associations.html\">adsk::Data::Associations</a> * metadata </td>\n\
          <td>(</td>\n\
          <td class=\"paramname\"></td><td>)</td>\n\
          <td> const</td>\n\
        </tr>\n\
      </table>\n\
  </td>\n\
  <td class=\"mlabels-right\">\n\
<span class=\"mlabels\"><span class=\"mlabel\">virtual</span></span>  </td>\n\
  </tr>\n\
</table>\n\
</div><div class=\"memdoc\">\n\
\n\
<p>Get the metadata associated with this object. </p>\n\
<dl class=\"section return\"><dt>Returns</dt><dd>Pointer to metadata associated with the object, or NULL if there isn\'t any </dd></dl>\n\
\n\
<p>Implements <a class=\"el\" translate=\"no\" href=\"#!/url=./cpp_ref/classadsk_1_1_data_1_1_attach.html#ad2c260ae26428580b8ef50d98d13e042\">Attach</a>.</p>\n\
\n\
</div>\n\
</div>\n\
<a class=\"anchor\" id=\"a1226d53471a99fc0cfd1f0937043c3ff\"></a>\n\
<div class=\"memitem\">\n\
<div class=\"memproto\">\n\
<table class=\"mlabels\">\n\
  <tr>\n\
  <td class=\"mlabels-left\">\n\
      <table class=\"memname\">\n\
        <tr>\n\
          <td class=\"memname\" translate=\"no\">bool setMetadata </td>\n\
          <td>(</td>\n\
          <td class=\"paramtype\">const <a class=\"el\" translate=\"no\" href=\"#!/url=./cpp_ref/classadsk_1_1_data_1_1_associations.html\">adsk::Data::Associations</a> &amp;&#160;</td>\n\
          <td class=\"paramname\"><em>newMetadata</em></td><td>)</td>\n\
          <td></td>\n\
        </tr>\n\
      </table>\n\
  </td>\n\
  <td class=\"mlabels-right\">\n\
<span class=\"mlabels\"><span class=\"mlabel\">virtual</span></span>  </td>\n\
  </tr>\n\
</table>\n\
</div><div class=\"memdoc\">\n\
\n\
<p>Replace the object\'s metadata. </p>\n\
<dl class=\"params\"><dt>Parameters</dt><dd>\n\
  <table class=\"params\">\n\
    <tr><td class=\"paramdir\">[in]</td><td class=\"paramname\">newMetadata</td><td>New metadata to be set, replaces existing metadata</td></tr>\n\
  </table>\n\
  </dd>\n\
</dl>\n\
<dl class=\"section return\"><dt>Returns</dt><dd>True if the new metadata was successfully set </dd></dl>\n\
\n\
<p>Implements <a class=\"el\" translate=\"no\" href=\"#!/url=./cpp_ref/classadsk_1_1_data_1_1_attach.html#ace3a47eeee7a24746df878b8c626fb84\">Attach</a>.</p>\n\
\n\
</div>\n\
</div>\n\
<a class=\"anchor\" id=\"a67652e4b400141aa54f90821c86c6026\"></a>\n\
<div class=\"memitem\">\n\
<div class=\"memproto\">\n\
<table class=\"mlabels\">\n\
  <tr>\n\
  <td class=\"mlabels-left\">\n\
      <table class=\"memname\">\n\
        <tr>\n\
          <td class=\"memname\" translate=\"no\">bool deleteMetadata </td>\n\
          <td>(</td>\n\
          <td class=\"paramname\"></td><td>)</td>\n\
          <td></td>\n\
        </tr>\n\
      </table>\n\
  </td>\n\
  <td class=\"mlabels-right\">\n\
<span class=\"mlabels\"><span class=\"mlabel\">virtual</span></span>  </td>\n\
  </tr>\n\
</table>\n\
</div><div class=\"memdoc\">\n\
\n\
<p>Remove the object\'s metadata. </p>\n\
<dl class=\"section return\"><dt>Returns</dt><dd>True if the new metadata was successfully removed </dd></dl>\n\
\n\
<p>Implements <a class=\"el\" translate=\"no\" href=\"#!/url=./cpp_ref/classadsk_1_1_data_1_1_attach.html#a99c25c9d340312b146ca8d6c2848d632\">Attach</a>.</p>\n\
\n\
</div>\n\
</div>\n\
<hr>The documentation for this class was generated from the following files:<ul>\n\
<li>adskDataAttachDirectly.h</li>\n\
<li>adskDataAttachDirectly.cpp</li>\n\
</ul>\n\
</div><!-- contents -->\n\
</div><!-- doc-content -->\n\
          <div class=\"footer-block\"><a href=\"../html/ac.cmtdialog.htm\" class=\"comments-anchor\" target=\"_blank\"><span class=\"comments-link\">Please send us your comment about this page</span></a></div></div>\n\
   </div></body>\n\
</html>\n\
";