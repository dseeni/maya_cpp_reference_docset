var topic = "<!-- saved from url=(0024)http://docs.autodesk.com -->\n\
<html>\n\
   <head><script src=\"../scripts/yepnope.1.5.4-min.js\" type=\"text/javascript\"></script><script src=\"../scripts/lib/jquery-1.11.1.min.js\" type=\"text/javascript\"></script><meta http-equiv=\"Content-Type\" content=\"text/html; charset=UTF-8\"><script type=\"text/javascript\" src=\"../scripts/utils/adsk.redirect.js\"></script>\n\
      <title>MFnToolContext Class Reference</title>\n\
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
    cpp_ref_adsk_ref_toc.initNavTree(\'class_m_fn_tool_context.html\', tocPrefix);\n\
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
            <h1>MFnToolContext Class Reference</h1>\n\
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
<div class=\"title\">MFnToolContext Class Reference<div class=\"ingroups\"><a class=\"el\" translate=\"no\" href=\"#!/url=./cpp_ref/group___open_maya.html\">OpenMaya - API module for common classes</a> &#124; <a class=\"el\" translate=\"no\" href=\"#!/url=./cpp_ref/group___m_fn.html\">FunctionSet classes</a></div></div>  </div>\n\
<div id=\"OverviewLinksDiv\"><div id=\"dynsection-overview\" onclick=\"return toggleVisibility(this)\" class=\"dynheader closed\" style=\"cursor:pointer;\"><img id=\"dynsection-overview-trigger\" src=\"cpp_ref/closed.png\" alt=\"+\"> Related help topics: </div><div id=\"dynsection-overview-content\" class=\"dyncontent\" style=\"display:none;\"><ul class=\"overviewLinks\">\n\
<li class=\"overviewLink\"><a href=\"#!/url=./developer/What-s-New-What-s-Changed-/Autodesk-Maya-2015.html\">What&#39;s New / What&#39;s Changed? &gt; Autodesk Maya 2015</a></li>\n\
</ul></div></div>\n\
<div class=\"summary\">\n\
<a href=\"class_m_fn_tool_context.html#pub-methods\">Public Member Functions</a> &#124;\n\
<a href=\"class_m_fn_tool_context.html#pro-methods\">Protected Member Functions</a>  </div></div><!--header-->\n\
<div class=\"contents\">\n\
\n\
<p><code>#include &lt;MFnToolContext.h&gt;</code></p>\n\
<a name=\"details\" id=\"details\"></a><h2 class=\"groupheader\">Class Description</h2>\n\
<div class=\"textblock\"><p>Tool context function set. </p>\n\
<p><a class=\"el\" translate=\"no\" href=\"#!/url=./cpp_ref/class_m_fn_tool_context.html\" title=\"Tool context function set. \">MFnToolContext</a> is the function set that is used for querying tool contexts.</p>\n\
<p>Typically this could be used in conjunction with <a class=\"el\" translate=\"no\" href=\"#!/url=./cpp_ref/class_m_global.html#a9610c67a5c31bd0a58b6679a58823aec\" title=\"Returns the current tool context as an MObject. \">MGlobal::currentToolContext()</a>. </p>\n\
</div><div id=\"dynsection-0\" onclick=\"return toggleVisibility(this)\" class=\"dynheader closed\" style=\"cursor:pointer;\">\n\
  <img id=\"dynsection-0-trigger\" src=\"cpp_ref/closed.png\" alt=\"+\"> Inheritance diagram for MFnToolContext:</div>\n\
<div id=\"dynsection-0-summary\" class=\"dynsummary\" style=\"display:block;\">\n\
</div>\n\
<div id=\"dynsection-0-content\" class=\"dyncontent\" style=\"display:none;\">\n\
 <div class=\"center\">\n\
  <img src=\"cpp_ref/class_m_fn_tool_context.png\" usemap=\"#MFnToolContext_map\" alt=\"\">\n\
  <map id=\"MFnToolContext_map\" name=\"MFnToolContext_map\">\n\
<area href=\"class_m_fn_base.html\" title=\"Function Set Base Class. \" alt=\"MFnBase\" shape=\"rect\" coords=\"0,0,104,24\">\n\
</map>\n\
 </div></div>\n\
<table class=\"memberdecls\">\n\
<tr class=\"heading\"><td colspan=\"2\"><h2 class=\"groupheader\"><a name=\"pub-methods\"></a>\n\
Public Member Functions</h2></td></tr>\n\
<tr class=\"memitem:adc3250674414e8a0b2f4584959c6ec4c\"><td class=\"memItemLeft\" translate=\"no\" align=\"right\" valign=\"top\">virtual <a class=\"el\" translate=\"no\" href=\"#!/url=./cpp_ref/class_m_fn.html#a1d1cfd8ffb84e947f82999c682b666a7\">MFn::Type</a>&#160;</td><td class=\"memItemRight\" translate=\"no\" valign=\"bottom\"><a class=\"el\" translate=\"no\" href=\"#!/url=./cpp_ref/class_m_fn_tool_context.html#adc3250674414e8a0b2f4584959c6ec4c\">type</a> () const </td></tr>\n\
<tr class=\"memdesc:adc3250674414e8a0b2f4584959c6ec4c\"><td class=\"mdescLeft\">&#160;</td><td class=\"mdescRight\">Function set type.  <a href=\"class_m_fn_tool_context.html#adc3250674414e8a0b2f4584959c6ec4c\">More...</a><br></td></tr>\n\
<tr class=\"separator:adc3250674414e8a0b2f4584959c6ec4c\"><td class=\"memSeparator\" colspan=\"2\">&#160;</td></tr>\n\
<tr class=\"memitem:acbee78f6859a57603d2ceda65a547417\"><td class=\"memItemLeft\" translate=\"no\" align=\"right\" valign=\"top\"><a class=\"anchor\" id=\"acbee78f6859a57603d2ceda65a547417\"></a>\n\
virtual&#160;</td><td class=\"memItemRight\" translate=\"no\" valign=\"bottom\"><a class=\"el\" translate=\"no\" href=\"#!/url=./cpp_ref/class_m_fn_tool_context.html#acbee78f6859a57603d2ceda65a547417\">~MFnToolContext</a> ()</td></tr>\n\
<tr class=\"memdesc:acbee78f6859a57603d2ceda65a547417\"><td class=\"mdescLeft\">&#160;</td><td class=\"mdescRight\">Destructor. <br></td></tr>\n\
<tr class=\"separator:acbee78f6859a57603d2ceda65a547417\"><td class=\"memSeparator\" colspan=\"2\">&#160;</td></tr>\n\
<tr class=\"memitem:aa0a6257e0e46cb02501ba5f9d0b69989\"><td class=\"memItemLeft\" translate=\"no\" align=\"right\" valign=\"top\"><a class=\"anchor\" id=\"aa0a6257e0e46cb02501ba5f9d0b69989\"></a>\n\
&#160;</td><td class=\"memItemRight\" translate=\"no\" valign=\"bottom\"><a class=\"el\" translate=\"no\" href=\"#!/url=./cpp_ref/class_m_fn_tool_context.html#aa0a6257e0e46cb02501ba5f9d0b69989\">MFnToolContext</a> ()</td></tr>\n\
<tr class=\"memdesc:aa0a6257e0e46cb02501ba5f9d0b69989\"><td class=\"mdescLeft\">&#160;</td><td class=\"mdescRight\">Default constructor. <br></td></tr>\n\
<tr class=\"separator:aa0a6257e0e46cb02501ba5f9d0b69989\"><td class=\"memSeparator\" colspan=\"2\">&#160;</td></tr>\n\
<tr class=\"memitem:abf8f9ff06b301cf979835dde2248e8c6\"><td class=\"memItemLeft\" translate=\"no\" align=\"right\" valign=\"top\">&#160;</td><td class=\"memItemRight\" translate=\"no\" valign=\"bottom\"><a class=\"el\" translate=\"no\" href=\"#!/url=./cpp_ref/class_m_fn_tool_context.html#abf8f9ff06b301cf979835dde2248e8c6\">MFnToolContext</a> (<a class=\"el\" translate=\"no\" href=\"#!/url=./cpp_ref/class_m_object.html\">MObject</a> &amp;<a class=\"el\" translate=\"no\" href=\"#!/url=./cpp_ref/class_m_fn_base.html#a01c802c0a7fc219b5a9beff9787bcfa2\">object</a>, <a class=\"el\" translate=\"no\" href=\"#!/url=./cpp_ref/class_m_status.html\">MStatus</a> *ReturnStatus=NULL)</td></tr>\n\
<tr class=\"memdesc:abf8f9ff06b301cf979835dde2248e8c6\"><td class=\"mdescLeft\">&#160;</td><td class=\"mdescRight\">Constructor.  <a href=\"class_m_fn_tool_context.html#abf8f9ff06b301cf979835dde2248e8c6\">More...</a><br></td></tr>\n\
<tr class=\"separator:abf8f9ff06b301cf979835dde2248e8c6\"><td class=\"memSeparator\" colspan=\"2\">&#160;</td></tr>\n\
<tr class=\"memitem:a2459154c7b49fa9ef28a5d96d09ec801\"><td class=\"memItemLeft\" translate=\"no\" align=\"right\" valign=\"top\"><a class=\"el\" translate=\"no\" href=\"#!/url=./cpp_ref/class_m_string.html\">MString</a>&#160;</td><td class=\"memItemRight\" translate=\"no\" valign=\"bottom\"><a class=\"el\" translate=\"no\" href=\"#!/url=./cpp_ref/class_m_fn_tool_context.html#a2459154c7b49fa9ef28a5d96d09ec801\">name</a> (<a class=\"el\" translate=\"no\" href=\"#!/url=./cpp_ref/class_m_status.html\">MStatus</a> *=NULL) const </td></tr>\n\
<tr class=\"memdesc:a2459154c7b49fa9ef28a5d96d09ec801\"><td class=\"mdescLeft\">&#160;</td><td class=\"mdescRight\">Returns the tool context\'s name.  <a href=\"class_m_fn_tool_context.html#a2459154c7b49fa9ef28a5d96d09ec801\">More...</a><br></td></tr>\n\
<tr class=\"separator:a2459154c7b49fa9ef28a5d96d09ec801\"><td class=\"memSeparator\" colspan=\"2\">&#160;</td></tr>\n\
<tr class=\"memitem:a52bf8d99168fa7562aa2539b961301a2\"><td class=\"memItemLeft\" translate=\"no\" align=\"right\" valign=\"top\"><a class=\"el\" translate=\"no\" href=\"#!/url=./cpp_ref/class_m_string.html\">MString</a>&#160;</td><td class=\"memItemRight\" translate=\"no\" valign=\"bottom\"><a class=\"el\" translate=\"no\" href=\"#!/url=./cpp_ref/class_m_fn_tool_context.html#a52bf8d99168fa7562aa2539b961301a2\">title</a> (<a class=\"el\" translate=\"no\" href=\"#!/url=./cpp_ref/class_m_status.html\">MStatus</a> *=NULL) const </td></tr>\n\
<tr class=\"memdesc:a52bf8d99168fa7562aa2539b961301a2\"><td class=\"mdescLeft\">&#160;</td><td class=\"mdescRight\">Returns the tool context\'s title.  <a href=\"class_m_fn_tool_context.html#a52bf8d99168fa7562aa2539b961301a2\">More...</a><br></td></tr>\n\
<tr class=\"separator:a52bf8d99168fa7562aa2539b961301a2\"><td class=\"memSeparator\" colspan=\"2\">&#160;</td></tr>\n\
<tr class=\"memitem:aca3488e9beb7e30042cd9f9c306c0baa\"><td class=\"memItemLeft\" translate=\"no\" align=\"right\" valign=\"top\">&#160;</td><td class=\"memItemRight\" translate=\"no\" valign=\"bottom\"><a class=\"el\" translate=\"no\" href=\"#!/url=./cpp_ref/class_m_fn_tool_context.html#aca3488e9beb7e30042cd9f9c306c0baa\">MFnToolContext</a> (const <a class=\"el\" translate=\"no\" href=\"#!/url=./cpp_ref/class_m_object.html\">MObject</a> &amp;<a class=\"el\" translate=\"no\" href=\"#!/url=./cpp_ref/class_m_fn_base.html#a01c802c0a7fc219b5a9beff9787bcfa2\">object</a>, <a class=\"el\" translate=\"no\" href=\"#!/url=./cpp_ref/class_m_status.html\">MStatus</a> *ReturnStatus=NULL)</td></tr>\n\
<tr class=\"memdesc:aca3488e9beb7e30042cd9f9c306c0baa\"><td class=\"mdescLeft\">&#160;</td><td class=\"mdescRight\">Constructor.  <a href=\"class_m_fn_tool_context.html#aca3488e9beb7e30042cd9f9c306c0baa\">More...</a><br></td></tr>\n\
<tr class=\"separator:aca3488e9beb7e30042cd9f9c306c0baa\"><td class=\"memSeparator\" colspan=\"2\">&#160;</td></tr>\n\
<tr class=\"inherit_header pub_methods_class_m_fn_base\"><td colspan=\"2\" onclick=\"javascript:toggleInherit(\'pub_methods_class_m_fn_base\')\"><img src=\"cpp_ref/closed.png\" alt=\"-\">&#160;Public Member Functions inherited from <a class=\"el\" translate=\"no\" href=\"#!/url=./cpp_ref/class_m_fn_base.html\">MFnBase</a></td></tr>\n\
<tr class=\"memitem:a5ba621af875a0d489e1031eddac02b82 inherit pub_methods_class_m_fn_base\"><td class=\"memItemLeft\" translate=\"no\" align=\"right\" valign=\"top\">virtual&#160;</td><td class=\"memItemRight\" translate=\"no\" valign=\"bottom\"><a class=\"el\" translate=\"no\" href=\"#!/url=./cpp_ref/class_m_fn_base.html#a5ba621af875a0d489e1031eddac02b82\">~MFnBase</a> ()</td></tr>\n\
<tr class=\"memdesc:a5ba621af875a0d489e1031eddac02b82 inherit pub_methods_class_m_fn_base\"><td class=\"mdescLeft\">&#160;</td><td class=\"mdescRight\">Class Destructor.  <a href=\"class_m_fn_tool_context.html#a5ba621af875a0d489e1031eddac02b82\">More...</a><br></td></tr>\n\
<tr class=\"separator:a5ba621af875a0d489e1031eddac02b82 inherit pub_methods_class_m_fn_base\"><td class=\"memSeparator\" colspan=\"2\">&#160;</td></tr>\n\
<tr class=\"memitem:a5f2479ff74d96fda6f7cd31ee4c1c463 inherit pub_methods_class_m_fn_base\"><td class=\"memItemLeft\" translate=\"no\" align=\"right\" valign=\"top\">bool&#160;</td><td class=\"memItemRight\" translate=\"no\" valign=\"bottom\"><a class=\"el\" translate=\"no\" href=\"#!/url=./cpp_ref/class_m_fn_base.html#a5f2479ff74d96fda6f7cd31ee4c1c463\">hasObj</a> (<a class=\"el\" translate=\"no\" href=\"#!/url=./cpp_ref/class_m_fn.html#a1d1cfd8ffb84e947f82999c682b666a7\">MFn::Type</a>) const </td></tr>\n\
<tr class=\"memdesc:a5f2479ff74d96fda6f7cd31ee4c1c463 inherit pub_methods_class_m_fn_base\"><td class=\"mdescLeft\">&#160;</td><td class=\"mdescRight\">Determines whether or not the Function Set is compatible with the specified Maya Object within the API RTTI system.  <a href=\"class_m_fn_tool_context.html#a5f2479ff74d96fda6f7cd31ee4c1c463\">More...</a><br></td></tr>\n\
<tr class=\"separator:a5f2479ff74d96fda6f7cd31ee4c1c463 inherit pub_methods_class_m_fn_base\"><td class=\"memSeparator\" colspan=\"2\">&#160;</td></tr>\n\
<tr class=\"memitem:a28acbd3253b9c86a1e64b3457de9f4ea inherit pub_methods_class_m_fn_base\"><td class=\"memItemLeft\" translate=\"no\" align=\"right\" valign=\"top\">bool&#160;</td><td class=\"memItemRight\" translate=\"no\" valign=\"bottom\"><a class=\"el\" translate=\"no\" href=\"#!/url=./cpp_ref/class_m_fn_base.html#a28acbd3253b9c86a1e64b3457de9f4ea\">hasObj</a> (const <a class=\"el\" translate=\"no\" href=\"#!/url=./cpp_ref/class_m_object.html\">MObject</a> &amp;) const </td></tr>\n\
<tr class=\"memdesc:a28acbd3253b9c86a1e64b3457de9f4ea inherit pub_methods_class_m_fn_base\"><td class=\"mdescLeft\">&#160;</td><td class=\"mdescRight\">Determines whether or not the Function Set is compatible with the specified Maya Object within the API RTTI system.  <a href=\"class_m_fn_tool_context.html#a28acbd3253b9c86a1e64b3457de9f4ea\">More...</a><br></td></tr>\n\
<tr class=\"separator:a28acbd3253b9c86a1e64b3457de9f4ea inherit pub_methods_class_m_fn_base\"><td class=\"memSeparator\" colspan=\"2\">&#160;</td></tr>\n\
<tr class=\"memitem:a01c802c0a7fc219b5a9beff9787bcfa2 inherit pub_methods_class_m_fn_base\"><td class=\"memItemLeft\" translate=\"no\" align=\"right\" valign=\"top\"><a class=\"el\" translate=\"no\" href=\"#!/url=./cpp_ref/class_m_object.html\">MObject</a>&#160;</td><td class=\"memItemRight\" translate=\"no\" valign=\"bottom\"><a class=\"el\" translate=\"no\" href=\"#!/url=./cpp_ref/class_m_fn_base.html#a01c802c0a7fc219b5a9beff9787bcfa2\">object</a> (<a class=\"el\" translate=\"no\" href=\"#!/url=./cpp_ref/class_m_status.html\">MStatus</a> *ReturnStatus=NULL) const </td></tr>\n\
<tr class=\"memdesc:a01c802c0a7fc219b5a9beff9787bcfa2 inherit pub_methods_class_m_fn_base\"><td class=\"mdescLeft\">&#160;</td><td class=\"mdescRight\">Returns the <a class=\"el\" translate=\"no\" href=\"#!/url=./cpp_ref/class_m_object.html\" title=\"Generic Class for Accessing Internal Maya Objects. \">MObject</a> that is attached to the Function Set.  <a href=\"class_m_fn_tool_context.html#a01c802c0a7fc219b5a9beff9787bcfa2\">More...</a><br></td></tr>\n\
<tr class=\"separator:a01c802c0a7fc219b5a9beff9787bcfa2 inherit pub_methods_class_m_fn_base\"><td class=\"memSeparator\" colspan=\"2\">&#160;</td></tr>\n\
<tr class=\"memitem:ad09f5acece0f9926b3e0e55cff78c3be inherit pub_methods_class_m_fn_base\"><td class=\"memItemLeft\" translate=\"no\" align=\"right\" valign=\"top\">virtual <a class=\"el\" translate=\"no\" href=\"#!/url=./cpp_ref/class_m_status.html\">MStatus</a>&#160;</td><td class=\"memItemRight\" translate=\"no\" valign=\"bottom\"><a class=\"el\" translate=\"no\" href=\"#!/url=./cpp_ref/class_m_fn_base.html#ad09f5acece0f9926b3e0e55cff78c3be\">setObject</a> (<a class=\"el\" translate=\"no\" href=\"#!/url=./cpp_ref/class_m_object.html\">MObject</a> &amp;<a class=\"el\" translate=\"no\" href=\"#!/url=./cpp_ref/class_m_fn_base.html#a01c802c0a7fc219b5a9beff9787bcfa2\">object</a>)</td></tr>\n\
<tr class=\"memdesc:ad09f5acece0f9926b3e0e55cff78c3be inherit pub_methods_class_m_fn_base\"><td class=\"mdescLeft\">&#160;</td><td class=\"mdescRight\">Attaches the Function Set to the specified Maya Object.  <a href=\"class_m_fn_tool_context.html#ad09f5acece0f9926b3e0e55cff78c3be\">More...</a><br></td></tr>\n\
<tr class=\"separator:ad09f5acece0f9926b3e0e55cff78c3be inherit pub_methods_class_m_fn_base\"><td class=\"memSeparator\" colspan=\"2\">&#160;</td></tr>\n\
<tr class=\"memitem:a4a6adbb56d6259860ec665ab5d86bdb5 inherit pub_methods_class_m_fn_base\"><td class=\"memItemLeft\" translate=\"no\" align=\"right\" valign=\"top\">virtual <a class=\"el\" translate=\"no\" href=\"#!/url=./cpp_ref/class_m_status.html\">MStatus</a>&#160;</td><td class=\"memItemRight\" translate=\"no\" valign=\"bottom\"><a class=\"el\" translate=\"no\" href=\"#!/url=./cpp_ref/class_m_fn_base.html#a4a6adbb56d6259860ec665ab5d86bdb5\">setObject</a> (const <a class=\"el\" translate=\"no\" href=\"#!/url=./cpp_ref/class_m_object.html\">MObject</a> &amp;<a class=\"el\" translate=\"no\" href=\"#!/url=./cpp_ref/class_m_fn_base.html#a01c802c0a7fc219b5a9beff9787bcfa2\">object</a>)</td></tr>\n\
<tr class=\"memdesc:a4a6adbb56d6259860ec665ab5d86bdb5 inherit pub_methods_class_m_fn_base\"><td class=\"mdescLeft\">&#160;</td><td class=\"mdescRight\">NO SCRIPT SUPPORT.  <a href=\"class_m_fn_tool_context.html#a4a6adbb56d6259860ec665ab5d86bdb5\">More...</a><br></td></tr>\n\
<tr class=\"separator:a4a6adbb56d6259860ec665ab5d86bdb5 inherit pub_methods_class_m_fn_base\"><td class=\"memSeparator\" colspan=\"2\">&#160;</td></tr>\n\
</table><table class=\"memberdecls\">\n\
<tr class=\"heading\"><td colspan=\"2\"><h2 class=\"groupheader\"><a name=\"pro-methods\"></a>\n\
Protected Member Functions</h2></td></tr>\n\
<tr class=\"memitem:aa738bbefadab412b5cc9e600f5013322\"><td class=\"memItemLeft\" translate=\"no\" align=\"right\" valign=\"top\">virtual const char *&#160;</td><td class=\"memItemRight\" translate=\"no\" valign=\"bottom\"><a class=\"el\" translate=\"no\" href=\"#!/url=./cpp_ref/class_m_fn_tool_context.html#aa738bbefadab412b5cc9e600f5013322\">className</a> () const </td></tr>\n\
<tr class=\"memdesc:aa738bbefadab412b5cc9e600f5013322\"><td class=\"mdescLeft\">&#160;</td><td class=\"mdescRight\">Class name.  <a href=\"class_m_fn_tool_context.html#aa738bbefadab412b5cc9e600f5013322\">More...</a><br></td></tr>\n\
<tr class=\"separator:aa738bbefadab412b5cc9e600f5013322\"><td class=\"memSeparator\" colspan=\"2\">&#160;</td></tr>\n\
</table><table class=\"memberdecls\">\n\
<tr class=\"heading\"><td colspan=\"2\"><h2 class=\"groupheader\"><a name=\"inherited\"></a>\n\
Additional Inherited Members</h2></td></tr>\n\
<tr class=\"inherit_header pub_static_methods_class_m_fn_base\"><td colspan=\"2\" onclick=\"javascript:toggleInherit(\'pub_static_methods_class_m_fn_base\')\"><img src=\"cpp_ref/closed.png\" alt=\"-\">&#160;Static Public Member Functions inherited from <a class=\"el\" translate=\"no\" href=\"#!/url=./cpp_ref/class_m_fn_base.html\">MFnBase</a></td></tr>\n\
<tr class=\"memitem:a774cd5d8fbebe8e7ed82a5aa587d1f04 inherit pub_static_methods_class_m_fn_base\"><td class=\"memItemLeft\" translate=\"no\" align=\"right\" valign=\"top\">static const char *&#160;</td><td class=\"memItemRight\" translate=\"no\" valign=\"bottom\"><a class=\"el\" translate=\"no\" href=\"#!/url=./cpp_ref/class_m_fn_base.html#a774cd5d8fbebe8e7ed82a5aa587d1f04\">className</a> ()</td></tr>\n\
<tr class=\"memdesc:a774cd5d8fbebe8e7ed82a5aa587d1f04 inherit pub_static_methods_class_m_fn_base\"><td class=\"mdescLeft\">&#160;</td><td class=\"mdescRight\">Returns the name of this class.  <a href=\"class_m_fn_tool_context.html#a774cd5d8fbebe8e7ed82a5aa587d1f04\">More...</a><br></td></tr>\n\
<tr class=\"separator:a774cd5d8fbebe8e7ed82a5aa587d1f04 inherit pub_static_methods_class_m_fn_base\"><td class=\"memSeparator\" colspan=\"2\">&#160;</td></tr>\n\
</table>\n\
<h2 class=\"groupheader\">Constructor &amp; Destructor Documentation</h2>\n\
<a class=\"anchor\" id=\"abf8f9ff06b301cf979835dde2248e8c6\"></a>\n\
<div class=\"memitem\">\n\
<div class=\"memproto\">\n\
      <table class=\"memname\">\n\
        <tr>\n\
          <td class=\"memname\" translate=\"no\"><a class=\"el\" translate=\"no\" href=\"#!/url=./cpp_ref/class_m_fn_tool_context.html\">MFnToolContext</a> </td>\n\
          <td>(</td>\n\
          <td class=\"paramtype\"><a class=\"el\" translate=\"no\" href=\"#!/url=./cpp_ref/class_m_object.html\">MObject</a> &amp;&#160;</td>\n\
          <td class=\"paramname\"><em>object</em>, </td>\n\
        </tr>\n\
        <tr>\n\
          <td class=\"paramkey\"></td>\n\
          <td></td>\n\
          <td class=\"paramtype\"><a class=\"el\" translate=\"no\" href=\"#!/url=./cpp_ref/class_m_status.html\">MStatus</a> *&#160;</td>\n\
          <td class=\"paramname\"><em>ReturnStatus</em> = <code>NULL</code>&#160;</td>\n\
        </tr>\n\
        <tr>\n\
          <td></td>\n\
          <td>)</td>\n\
          <td></td><td></td>\n\
        </tr>\n\
      </table>\n\
</div><div class=\"memdoc\">\n\
\n\
<p>Constructor. </p>\n\
<p>Class constructor that initializes the function set to the given <a class=\"el\" translate=\"no\" href=\"#!/url=./cpp_ref/class_m_object.html\" title=\"Generic Class for Accessing Internal Maya Objects. \">MObject</a>.</p>\n\
<dl class=\"params\"><dt>Parameters</dt><dd>\n\
  <table class=\"params\">\n\
    <tr><td class=\"paramdir\">[in]</td><td class=\"paramname\">object</td><td>The <a class=\"el\" translate=\"no\" href=\"#!/url=./cpp_ref/class_m_object.html\" title=\"Generic Class for Accessing Internal Maya Objects. \">MObject</a> to attach the function set to </td></tr>\n\
    <tr><td class=\"paramdir\">[out]</td><td class=\"paramname\">ReturnStatus</td><td>the return status</td></tr>\n\
  </table>\n\
  </dd>\n\
</dl>\n\
<dl class=\"section user\"><dt>Status Codes:</dt><dd><ul>\n\
<li><b>MS::kSuccess</b> if the function set is successfully attached </li>\n\
<li><b>MS::kInvalidParameter</b> if the <a class=\"el\" translate=\"no\" href=\"#!/url=./cpp_ref/class_m_object.html\" title=\"Generic Class for Accessing Internal Maya Objects. \">MObject</a> does not represent a valid Maya object or if the function set is not allowed to attach to this <a class=\"el\" translate=\"no\" href=\"#!/url=./cpp_ref/class_m_object.html\" title=\"Generic Class for Accessing Internal Maya Objects. \">MObject</a> </li>\n\
</ul>\n\
</dd></dl>\n\
\n\
</div>\n\
</div>\n\
<a class=\"anchor\" id=\"aca3488e9beb7e30042cd9f9c306c0baa\"></a>\n\
<div class=\"memitem\">\n\
<div class=\"memproto\">\n\
      <table class=\"memname\">\n\
        <tr>\n\
          <td class=\"memname\" translate=\"no\"><a class=\"el\" translate=\"no\" href=\"#!/url=./cpp_ref/class_m_fn_tool_context.html\">MFnToolContext</a> </td>\n\
          <td>(</td>\n\
          <td class=\"paramtype\">const <a class=\"el\" translate=\"no\" href=\"#!/url=./cpp_ref/class_m_object.html\">MObject</a> &amp;&#160;</td>\n\
          <td class=\"paramname\"><em>object</em>, </td>\n\
        </tr>\n\
        <tr>\n\
          <td class=\"paramkey\"></td>\n\
          <td></td>\n\
          <td class=\"paramtype\"><a class=\"el\" translate=\"no\" href=\"#!/url=./cpp_ref/class_m_status.html\">MStatus</a> *&#160;</td>\n\
          <td class=\"paramname\"><em>ReturnStatus</em> = <code>NULL</code>&#160;</td>\n\
        </tr>\n\
        <tr>\n\
          <td></td>\n\
          <td>)</td>\n\
          <td></td><td></td>\n\
        </tr>\n\
      </table>\n\
</div><div class=\"memdoc\">\n\
\n\
<p>Constructor. </p>\n\
<p>Class constructor that initializes the function set to the given <a class=\"el\" translate=\"no\" href=\"#!/url=./cpp_ref/class_m_object.html\" title=\"Generic Class for Accessing Internal Maya Objects. \">MObject</a>.</p>\n\
<dl class=\"params\"><dt>Parameters</dt><dd>\n\
  <table class=\"params\">\n\
    <tr><td class=\"paramdir\">[in]</td><td class=\"paramname\">object</td><td>The <a class=\"el\" translate=\"no\" href=\"#!/url=./cpp_ref/class_m_object.html\" title=\"Generic Class for Accessing Internal Maya Objects. \">MObject</a> to attach the function set to </td></tr>\n\
    <tr><td class=\"paramdir\">[out]</td><td class=\"paramname\">ReturnStatus</td><td>the return status</td></tr>\n\
  </table>\n\
  </dd>\n\
</dl>\n\
<dl class=\"section user\"><dt>Status Codes:</dt><dd><ul>\n\
<li><b>MS::kSuccess</b> if the function set is successfully attached </li>\n\
<li><b>MS::kInvalidParameter</b> if the <a class=\"el\" translate=\"no\" href=\"#!/url=./cpp_ref/class_m_object.html\" title=\"Generic Class for Accessing Internal Maya Objects. \">MObject</a> does not represent a valid Maya object or if the function set is not allowed to attach to this <a class=\"el\" translate=\"no\" href=\"#!/url=./cpp_ref/class_m_object.html\" title=\"Generic Class for Accessing Internal Maya Objects. \">MObject</a> </li>\n\
</ul>\n\
</dd></dl>\n\
\n\
</div>\n\
</div>\n\
<h2 class=\"groupheader\">Member Function Documentation</h2>\n\
<a class=\"anchor\" id=\"adc3250674414e8a0b2f4584959c6ec4c\"></a>\n\
<div class=\"memitem\">\n\
<div class=\"memproto\">\n\
<table class=\"mlabels\">\n\
  <tr>\n\
  <td class=\"mlabels-left\">\n\
      <table class=\"memname\">\n\
        <tr>\n\
          <td class=\"memname\" translate=\"no\"><a class=\"el\" translate=\"no\" href=\"#!/url=./cpp_ref/class_m_fn.html#a1d1cfd8ffb84e947f82999c682b666a7\">MFn::Type</a> type </td>\n\
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
<p>Function set type. </p>\n\
<p>Return the class type : <a class=\"el\" translate=\"no\" href=\"#!/url=./cpp_ref/class_m_fn.html#a1d1cfd8ffb84e947f82999c682b666a7a5177beb743ac81a4dbd4a4397b5dfbcf\" title=\"Tool context. \">MFn::kToolContext</a>. </p>\n\
\n\
<p>Reimplemented from <a class=\"el\" translate=\"no\" href=\"#!/url=./cpp_ref/class_m_fn_base.html#adc3250674414e8a0b2f4584959c6ec4c\">MFnBase</a>.</p>\n\
\n\
</div>\n\
</div>\n\
<a class=\"anchor\" id=\"aa738bbefadab412b5cc9e600f5013322\"></a>\n\
<div class=\"memitem\">\n\
<div class=\"memproto\">\n\
<table class=\"mlabels\">\n\
  <tr>\n\
  <td class=\"mlabels-left\">\n\
      <table class=\"memname\">\n\
        <tr>\n\
          <td class=\"memname\" translate=\"no\">OPENMAYA_MAJOR_NAMESPACE_OPEN const char * className </td>\n\
          <td>(</td>\n\
          <td class=\"paramname\"></td><td>)</td>\n\
          <td> const</td>\n\
        </tr>\n\
      </table>\n\
  </td>\n\
  <td class=\"mlabels-right\">\n\
<span class=\"mlabels\"><span class=\"mlabel\">protected</span><span class=\"mlabel\">virtual</span></span>  </td>\n\
  </tr>\n\
</table>\n\
</div><div class=\"memdoc\">\n\
\n\
<p>Class name. </p>\n\
<p>Return the class name : \"MFnToolContext\". </p>\n\
\n\
</div>\n\
</div>\n\
<a class=\"anchor\" id=\"a2459154c7b49fa9ef28a5d96d09ec801\"></a>\n\
<div class=\"memitem\">\n\
<div class=\"memproto\">\n\
      <table class=\"memname\">\n\
        <tr>\n\
          <td class=\"memname\" translate=\"no\"><a class=\"el\" translate=\"no\" href=\"#!/url=./cpp_ref/class_m_string.html\">MString</a> name </td>\n\
          <td>(</td>\n\
          <td class=\"paramtype\"><a class=\"el\" translate=\"no\" href=\"#!/url=./cpp_ref/class_m_status.html\">MStatus</a> *&#160;</td>\n\
          <td class=\"paramname\"><em>ReturnStatus</em> = <code>NULL</code></td><td>)</td>\n\
          <td> const</td>\n\
        </tr>\n\
      </table>\n\
</div><div class=\"memdoc\">\n\
\n\
<p>Returns the tool context\'s name. </p>\n\
<dl class=\"params\"><dt>Parameters</dt><dd>\n\
  <table class=\"params\">\n\
    <tr><td class=\"paramdir\">[out]</td><td class=\"paramname\">ReturnStatus</td><td>return status</td></tr>\n\
  </table>\n\
  </dd>\n\
</dl>\n\
<dl class=\"section return\"><dt>Returns</dt><dd>Name string</dd></dl>\n\
<dl class=\"section user\"><dt>Status Codes:</dt><dd><ul>\n\
<li><b>MS::kSuccess</b> operation successful </li>\n\
<li><b>MS::kFailure</b> function set does not have a valid tool context </li>\n\
</ul>\n\
</dd></dl>\n\
\n\
</div>\n\
</div>\n\
<a class=\"anchor\" id=\"a52bf8d99168fa7562aa2539b961301a2\"></a>\n\
<div class=\"memitem\">\n\
<div class=\"memproto\">\n\
      <table class=\"memname\">\n\
        <tr>\n\
          <td class=\"memname\" translate=\"no\"><a class=\"el\" translate=\"no\" href=\"#!/url=./cpp_ref/class_m_string.html\">MString</a> title </td>\n\
          <td>(</td>\n\
          <td class=\"paramtype\"><a class=\"el\" translate=\"no\" href=\"#!/url=./cpp_ref/class_m_status.html\">MStatus</a> *&#160;</td>\n\
          <td class=\"paramname\"><em>ReturnStatus</em> = <code>NULL</code></td><td>)</td>\n\
          <td> const</td>\n\
        </tr>\n\
      </table>\n\
</div><div class=\"memdoc\">\n\
\n\
<p>Returns the tool context\'s title. </p>\n\
<dl class=\"params\"><dt>Parameters</dt><dd>\n\
  <table class=\"params\">\n\
    <tr><td class=\"paramdir\">[out]</td><td class=\"paramname\">ReturnStatus</td><td>return status</td></tr>\n\
  </table>\n\
  </dd>\n\
</dl>\n\
<dl class=\"section return\"><dt>Returns</dt><dd>Title string</dd></dl>\n\
<dl class=\"section user\"><dt>Status Codes:</dt><dd><ul>\n\
<li><b>MS::kSuccess</b> operation successful </li>\n\
<li><b>MS::kFailure</b> function set does not have a valid tool context </li>\n\
</ul>\n\
</dd></dl>\n\
\n\
</div>\n\
</div>\n\
<hr>The documentation for this class was generated from the following files:<ul>\n\
<li>MFnToolContext.h</li>\n\
<li>MFnToolContext.cpp</li>\n\
</ul>\n\
</div><!-- contents -->\n\
</div><!-- doc-content -->\n\
          <div class=\"footer-block\"><a href=\"../html/ac.cmtdialog.htm\" class=\"comments-anchor\" target=\"_blank\"><span class=\"comments-link\">Please send us your comment about this page</span></a></div></div>\n\
   </div></body>\n\
</html>\n\
";