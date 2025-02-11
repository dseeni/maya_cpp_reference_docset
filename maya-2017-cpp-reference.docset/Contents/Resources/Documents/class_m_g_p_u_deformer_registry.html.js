var topic = "<!-- saved from url=(0024)http://docs.autodesk.com -->\n\
<html>\n\
   <head><script src=\"../scripts/yepnope.1.5.4-min.js\" type=\"text/javascript\"></script><script src=\"../scripts/lib/jquery-1.11.1.min.js\" type=\"text/javascript\"></script><meta http-equiv=\"Content-Type\" content=\"text/html; charset=UTF-8\"><meta name=\"product\" content=\"MAYAUL\"><meta name=\"release\" content=\"2017\"><meta name=\"book\" content=\"Developer\"><meta name=\"created\" content=\"2016-06-16\"><meta name=\"topicid\" content=\"GUID-02DEF634-1E7B-48C6-8ACD-2C934CA97887\"><meta name=\"topic-type\" content=\"concept\">\n\
      <title>MGPUDeformerRegistry Class Reference</title>\n\
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
    cpp_ref_adsk_ref_toc.initNavTree(\'class_m_g_p_u_deformer_registry.html\', tocPrefix);\n\
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
            <h1>MGPUDeformerRegistry Class Reference</h1>\n\
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
<div class=\"title\">MGPUDeformerRegistry Class Reference<div class=\"ingroups\"><a class=\"el\" translate=\"no\" href=\"#!/url=./cpp_ref/group___open_maya_anim.html\">OpenMayaAnim - API module for animation</a></div></div>  </div>\n\
<div id=\"OverviewLinksDiv\"><div id=\"dynsection-overview\" onclick=\"return toggleVisibility(this)\" class=\"dynheader closed\" style=\"cursor:pointer;\"><img id=\"dynsection-overview-trigger\" src=\"cpp_ref/closed.png\" alt=\"+\"> Related help topics: </div><div id=\"dynsection-overview-content\" class=\"dyncontent\" style=\"display:none;\"><ul class=\"overviewLinks\">\n\
<li class=\"overviewLink\"><a href=\"#!/url=./files/GUID-653104AC-D0E8-490F-AF00-71DEB76139A4.htm\">What\'s New / What\'s Changed? &gt; What\'s New in API in Maya 2016 Extension 2</a></li>\n\
<li class=\"overviewLink\"><a href=\"#!/url=./files/GUID-6644CF46-6648-45B8-A3D8-76EDD7712571.htm\">What\'s New / What\'s Changed? &gt; What\'s New in API in Maya 2016</a></li>\n\
<li class=\"overviewLink\"><a href=\"#!/url=./files/GUID-1BB599DB-D637-4D95-AD35-9F85AA5A35ED.htm\">What\'s New / What\'s Changed? &gt; What\'s New in API in Maya 2016 &gt; C++ API Changes in Maya 2016</a></li>\n\
</ul></div></div>\n\
<div class=\"summary\">\n\
<a href=\"class_m_g_p_u_deformer_registry.html#pub-static-methods\">Static Public Member Functions</a>  </div></div><!--header-->\n\
<div class=\"contents\">\n\
\n\
<p><code>#include &lt;MGPUDeformerRegistry.h&gt;</code></p>\n\
<a name=\"details\" id=\"details\"></a><h2 class=\"groupheader\">Class Description</h2>\n\
<div class=\"textblock\"><p>Registration class for <a class=\"el\" translate=\"no\" href=\"#!/url=./cpp_ref/class_m_px_g_p_u_deformer.html\" title=\"Base class for user defined GPU deformer override evaluators. \">MPxGPUDeformer</a>. </p>\n\
<p><a class=\"el\" translate=\"no\" href=\"#!/url=./cpp_ref/class_m_g_p_u_deformer_registry.html\" title=\"Registration class for MPxGPUDeformer. \">MGPUDeformerRegistry</a> allows each class derived from <a class=\"el\" translate=\"no\" href=\"#!/url=./cpp_ref/class_m_px_g_p_u_deformer.html\" title=\"Base class for user defined GPU deformer override evaluators. \">MPxGPUDeformer</a> to register the type of deformer it supports. Only one override registered at a time for each type of deformer node. Overrides provided by default are registered with registrantId \"Maya\". </p>\n\
</div><table class=\"memberdecls\">\n\
<tr class=\"heading\"><td colspan=\"2\"><h2 class=\"groupheader\"><a name=\"pub-static-methods\"></a>\n\
Static Public Member Functions</h2></td></tr>\n\
<tr class=\"memitem:adea377dddd00bec03a6cdf70360f567f\"><td class=\"memItemLeft\" translate=\"no\" align=\"right\" valign=\"top\">static <a class=\"el\" translate=\"no\" href=\"#!/url=./cpp_ref/class_m_status.html\">MStatus</a>&#160;</td><td class=\"memItemRight\" translate=\"no\" valign=\"bottom\"><a class=\"el\" translate=\"no\" href=\"#!/url=./cpp_ref/class_m_g_p_u_deformer_registry.html#adea377dddd00bec03a6cdf70360f567f\">registerGPUDeformerCreator</a> (const <a class=\"el\" translate=\"no\" href=\"#!/url=./cpp_ref/class_m_string.html\">MString</a> &amp;nodeClassName, const <a class=\"el\" translate=\"no\" href=\"#!/url=./cpp_ref/class_m_string.html\">MString</a> &amp;registrantId, <a class=\"el\" translate=\"no\" href=\"#!/url=./cpp_ref/class_m_g_p_u_deformer_registration_info.html\">MGPUDeformerRegistrationInfo</a> *registrationInfo)</td></tr>\n\
<tr class=\"memdesc:adea377dddd00bec03a6cdf70360f567f\"><td class=\"mdescLeft\">&#160;</td><td class=\"mdescRight\">This method is called to register an <a class=\"el\" translate=\"no\" href=\"#!/url=./cpp_ref/class_m_px_g_p_u_deformer.html\" title=\"Base class for user defined GPU deformer override evaluators. \">MPxGPUDeformer</a> that overrides a specific type of deformer node.  <a href=\"class_m_g_p_u_deformer_registry.html#adea377dddd00bec03a6cdf70360f567f\">More...</a><br></td></tr>\n\
<tr class=\"separator:adea377dddd00bec03a6cdf70360f567f\"><td class=\"memSeparator\" colspan=\"2\">&#160;</td></tr>\n\
<tr class=\"memitem:aa290ea8dc9cb67e1056f132b8e441d5f\"><td class=\"memItemLeft\" translate=\"no\" align=\"right\" valign=\"top\">static <a class=\"el\" translate=\"no\" href=\"#!/url=./cpp_ref/class_m_status.html\">MStatus</a>&#160;</td><td class=\"memItemRight\" translate=\"no\" valign=\"bottom\"><a class=\"el\" translate=\"no\" href=\"#!/url=./cpp_ref/class_m_g_p_u_deformer_registry.html#aa290ea8dc9cb67e1056f132b8e441d5f\">deregisterGPUDeformerCreator</a> (const <a class=\"el\" translate=\"no\" href=\"#!/url=./cpp_ref/class_m_string.html\">MString</a> &amp;nodeClassName, const <a class=\"el\" translate=\"no\" href=\"#!/url=./cpp_ref/class_m_string.html\">MString</a> &amp;registrantId)</td></tr>\n\
<tr class=\"memdesc:aa290ea8dc9cb67e1056f132b8e441d5f\"><td class=\"mdescLeft\">&#160;</td><td class=\"mdescRight\">This method is called to deregister an <a class=\"el\" translate=\"no\" href=\"#!/url=./cpp_ref/class_m_px_g_p_u_deformer.html\" title=\"Base class for user defined GPU deformer override evaluators. \">MPxGPUDeformer</a> that overrides a specific type of deformer node.  <a href=\"class_m_g_p_u_deformer_registry.html#aa290ea8dc9cb67e1056f132b8e441d5f\">More...</a><br></td></tr>\n\
<tr class=\"separator:aa290ea8dc9cb67e1056f132b8e441d5f\"><td class=\"memSeparator\" colspan=\"2\">&#160;</td></tr>\n\
<tr class=\"memitem:a2e96bdde07077e4af65457c6edb9c11a\"><td class=\"memItemLeft\" translate=\"no\" align=\"right\" valign=\"top\">static <a class=\"el\" translate=\"no\" href=\"#!/url=./cpp_ref/class_m_status.html\">MStatus</a>&#160;</td><td class=\"memItemRight\" translate=\"no\" valign=\"bottom\"><a class=\"el\" translate=\"no\" href=\"#!/url=./cpp_ref/class_m_g_p_u_deformer_registry.html#a2e96bdde07077e4af65457c6edb9c11a\">addConditionalAttribute</a> (const <a class=\"el\" translate=\"no\" href=\"#!/url=./cpp_ref/class_m_string.html\">MString</a> &amp;nodeClassName, const <a class=\"el\" translate=\"no\" href=\"#!/url=./cpp_ref/class_m_string.html\">MString</a> &amp;registrantId, const <a class=\"el\" translate=\"no\" href=\"#!/url=./cpp_ref/class_m_object.html\">MObject</a> &amp;conditionalAttribute)</td></tr>\n\
<tr class=\"memdesc:a2e96bdde07077e4af65457c6edb9c11a\"><td class=\"mdescLeft\">&#160;</td><td class=\"mdescRight\">This method is called to add a conditional attribute to an already registered GPU Deformer.  <a href=\"class_m_g_p_u_deformer_registry.html#a2e96bdde07077e4af65457c6edb9c11a\">More...</a><br></td></tr>\n\
<tr class=\"separator:a2e96bdde07077e4af65457c6edb9c11a\"><td class=\"memSeparator\" colspan=\"2\">&#160;</td></tr>\n\
</table>\n\
<h2 class=\"groupheader\">Member Function Documentation</h2>\n\
<a class=\"anchor\" id=\"adea377dddd00bec03a6cdf70360f567f\"></a>\n\
<div class=\"memitem\">\n\
<div class=\"memproto\">\n\
<table class=\"mlabels\">\n\
  <tr>\n\
  <td class=\"mlabels-left\">\n\
      <table class=\"memname\">\n\
        <tr>\n\
          <td class=\"memname\" translate=\"no\"><a class=\"el\" translate=\"no\" href=\"#!/url=./cpp_ref/class_m_status.html\">MStatus</a> registerGPUDeformerCreator </td>\n\
          <td>(</td>\n\
          <td class=\"paramtype\">const <a class=\"el\" translate=\"no\" href=\"#!/url=./cpp_ref/class_m_string.html\">MString</a> &amp;&#160;</td>\n\
          <td class=\"paramname\"><em>nodeClassName</em>, </td>\n\
        </tr>\n\
        <tr>\n\
          <td class=\"paramkey\"></td>\n\
          <td></td>\n\
          <td class=\"paramtype\">const <a class=\"el\" translate=\"no\" href=\"#!/url=./cpp_ref/class_m_string.html\">MString</a> &amp;&#160;</td>\n\
          <td class=\"paramname\"><em>registrantId</em>, </td>\n\
        </tr>\n\
        <tr>\n\
          <td class=\"paramkey\"></td>\n\
          <td></td>\n\
          <td class=\"paramtype\"><a class=\"el\" translate=\"no\" href=\"#!/url=./cpp_ref/class_m_g_p_u_deformer_registration_info.html\">MGPUDeformerRegistrationInfo</a> *&#160;</td>\n\
          <td class=\"paramname\"><em>registrationInfo</em>&#160;</td>\n\
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
<p>This method is called to register an <a class=\"el\" translate=\"no\" href=\"#!/url=./cpp_ref/class_m_px_g_p_u_deformer.html\" title=\"Base class for user defined GPU deformer override evaluators. \">MPxGPUDeformer</a> that overrides a specific type of deformer node. </p>\n\
<p>This method is passed the name of the override deformer type, an ID that represents the override provider, and a registration information class. Ownership of the registration information class remains with the caller. The registration information class must remain valid until after the override has been deregistered with <a class=\"el\" translate=\"no\" href=\"#!/url=./cpp_ref/class_m_g_p_u_deformer_registry.html#aa290ea8dc9cb67e1056f132b8e441d5f\" title=\"This method is called to deregister an MPxGPUDeformer that overrides a specific type of deformer node...\">deregisterGPUDeformerCreator()</a>.</p>\n\
<dl class=\"params\"><dt>Parameters</dt><dd>\n\
  <table class=\"params\">\n\
    <tr><td class=\"paramdir\">[in]</td><td class=\"paramname\">nodeClassName</td><td>The name of the deformer type to be overridden. </td></tr>\n\
    <tr><td class=\"paramdir\">[in]</td><td class=\"paramname\">registrantId</td><td>The ID of the override provider. </td></tr>\n\
    <tr><td class=\"paramdir\">[in]</td><td class=\"paramname\">registrationInfo</td><td>A <a class=\"el\" translate=\"no\" href=\"#!/url=./cpp_ref/class_m_g_p_u_deformer_registration_info.html\" title=\"Registration information for an MPxGPUDeformer. \">MGPUDeformerRegistrationInfo</a> describing the override.</td></tr>\n\
  </table>\n\
  </dd>\n\
</dl>\n\
<dl class=\"section return\"><dt>Returns</dt><dd><ul>\n\
<li><b><a class=\"el\" translate=\"no\" href=\"#!/url=./cpp_ref/class_m_status.html#a02ab596f4febca68da503aaf8dde3a80af0536797208144380691e2b376ffc1d1\" title=\"The operation was successful. \">MS::kSuccess</a></b> if the creator was successfully registered </li>\n\
<li><b><a class=\"el\" translate=\"no\" href=\"#!/url=./cpp_ref/class_m_status.html#a02ab596f4febca68da503aaf8dde3a80a1ef6c2d725fb4bec3e7e840d28adbc00\" title=\"The operation failed. \">MS::kFailure</a></b> if the creator could not be registered </li>\n\
</ul>\n\
</dd></dl>\n\
<dl class=\"section \"><div id=\"dynsection-example0\" class=\"dynheader closed\" onclick=\"return toggleVisibility(this)\" style=\"cursor:pointer;\"><dt><img id=\"dynsection-example0-trigger\" src=\"cpp_ref/closed.png\" alt=\"+\"> <b>Examples: </b></dt></div><div id=\"dynsection-example0-content\" class=\"dyncontent\" style=\"display:none;\"><dd><a class=\"el\" translate=\"no\" href=\"#!/url=./cpp_ref/identity_node_2identity_node_8cpp-example.html#a39\">identityNode/identityNode.cpp</a>, and <a class=\"el\" translate=\"no\" href=\"#!/url=./cpp_ref/offset_node_2offset_node_8cpp-example.html#a76\">offsetNode/offsetNode.cpp</a>.</dd></div>\n\
</dl>\n\
</div>\n\
</div>\n\
<a class=\"anchor\" id=\"aa290ea8dc9cb67e1056f132b8e441d5f\"></a>\n\
<div class=\"memitem\">\n\
<div class=\"memproto\">\n\
<table class=\"mlabels\">\n\
  <tr>\n\
  <td class=\"mlabels-left\">\n\
      <table class=\"memname\">\n\
        <tr>\n\
          <td class=\"memname\" translate=\"no\"><a class=\"el\" translate=\"no\" href=\"#!/url=./cpp_ref/class_m_status.html\">MStatus</a> deregisterGPUDeformerCreator </td>\n\
          <td>(</td>\n\
          <td class=\"paramtype\">const <a class=\"el\" translate=\"no\" href=\"#!/url=./cpp_ref/class_m_string.html\">MString</a> &amp;&#160;</td>\n\
          <td class=\"paramname\"><em>nodeClassName</em>, </td>\n\
        </tr>\n\
        <tr>\n\
          <td class=\"paramkey\"></td>\n\
          <td></td>\n\
          <td class=\"paramtype\">const <a class=\"el\" translate=\"no\" href=\"#!/url=./cpp_ref/class_m_string.html\">MString</a> &amp;&#160;</td>\n\
          <td class=\"paramname\"><em>registrantId</em>&#160;</td>\n\
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
<p>This method is called to deregister an <a class=\"el\" translate=\"no\" href=\"#!/url=./cpp_ref/class_m_px_g_p_u_deformer.html\" title=\"Base class for user defined GPU deformer override evaluators. \">MPxGPUDeformer</a> that overrides a specific type of deformer node. </p>\n\
<p>This method is passed the name of the override deformer type, along with an ID that represents the override provider.</p>\n\
<dl class=\"params\"><dt>Parameters</dt><dd>\n\
  <table class=\"params\">\n\
    <tr><td class=\"paramdir\">[in]</td><td class=\"paramname\">nodeClassName</td><td>The name of the deformer type to be overridden. </td></tr>\n\
    <tr><td class=\"paramdir\">[in]</td><td class=\"paramname\">registrantId</td><td>The ID of the override provider.</td></tr>\n\
  </table>\n\
  </dd>\n\
</dl>\n\
<dl class=\"section return\"><dt>Returns</dt><dd><ul>\n\
<li><b><a class=\"el\" translate=\"no\" href=\"#!/url=./cpp_ref/class_m_status.html#a02ab596f4febca68da503aaf8dde3a80af0536797208144380691e2b376ffc1d1\" title=\"The operation was successful. \">MS::kSuccess</a></b> if the creator was successfully deregistered. </li>\n\
<li><b><a class=\"el\" translate=\"no\" href=\"#!/url=./cpp_ref/class_m_status.html#a02ab596f4febca68da503aaf8dde3a80a1ef6c2d725fb4bec3e7e840d28adbc00\" title=\"The operation failed. \">MS::kFailure</a></b> if the creator could not be deregistered. </li>\n\
</ul>\n\
</dd></dl>\n\
<dl class=\"section \"><div id=\"dynsection-example1\" class=\"dynheader closed\" onclick=\"return toggleVisibility(this)\" style=\"cursor:pointer;\"><dt><img id=\"dynsection-example1-trigger\" src=\"cpp_ref/closed.png\" alt=\"+\"> <b>Examples: </b></dt></div><div id=\"dynsection-example1-content\" class=\"dyncontent\" style=\"display:none;\"><dd><a class=\"el\" translate=\"no\" href=\"#!/url=./cpp_ref/identity_node_2identity_node_8cpp-example.html#a40\">identityNode/identityNode.cpp</a>, and <a class=\"el\" translate=\"no\" href=\"#!/url=./cpp_ref/offset_node_2offset_node_8cpp-example.html#a78\">offsetNode/offsetNode.cpp</a>.</dd></div>\n\
</dl>\n\
</div>\n\
</div>\n\
<a class=\"anchor\" id=\"a2e96bdde07077e4af65457c6edb9c11a\"></a>\n\
<div class=\"memitem\">\n\
<div class=\"memproto\">\n\
<table class=\"mlabels\">\n\
  <tr>\n\
  <td class=\"mlabels-left\">\n\
      <table class=\"memname\">\n\
        <tr>\n\
          <td class=\"memname\" translate=\"no\"><a class=\"el\" translate=\"no\" href=\"#!/url=./cpp_ref/class_m_status.html\">MStatus</a> addConditionalAttribute </td>\n\
          <td>(</td>\n\
          <td class=\"paramtype\">const <a class=\"el\" translate=\"no\" href=\"#!/url=./cpp_ref/class_m_string.html\">MString</a> &amp;&#160;</td>\n\
          <td class=\"paramname\"><em>nodeClassName</em>, </td>\n\
        </tr>\n\
        <tr>\n\
          <td class=\"paramkey\"></td>\n\
          <td></td>\n\
          <td class=\"paramtype\">const <a class=\"el\" translate=\"no\" href=\"#!/url=./cpp_ref/class_m_string.html\">MString</a> &amp;&#160;</td>\n\
          <td class=\"paramname\"><em>registrantId</em>, </td>\n\
        </tr>\n\
        <tr>\n\
          <td class=\"paramkey\"></td>\n\
          <td></td>\n\
          <td class=\"paramtype\">const <a class=\"el\" translate=\"no\" href=\"#!/url=./cpp_ref/class_m_object.html\">MObject</a> &amp;&#160;</td>\n\
          <td class=\"paramname\"><em>conditionalAttribute</em>&#160;</td>\n\
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
<p>This method is called to add a conditional attribute to an already registered GPU Deformer. </p>\n\
<p>A conditional attribute is an attribute on a depend node where for some values of the attribute the <a class=\"el\" translate=\"no\" href=\"#!/url=./cpp_ref/class_m_px_g_p_u_deformer.html\" title=\"Base class for user defined GPU deformer override evaluators. \">MPxGPUDeformer</a> is supported and for other values of the attribute the <a class=\"el\" translate=\"no\" href=\"#!/url=./cpp_ref/class_m_px_g_p_u_deformer.html\" title=\"Base class for user defined GPU deformer override evaluators. \">MPxGPUDeformer</a> is not supported.</p>\n\
<p><a class=\"el\" translate=\"no\" href=\"#!/url=./cpp_ref/class_m_px_g_p_u_deformer.html\" title=\"Base class for user defined GPU deformer override evaluators. \">MPxGPUDeformer</a> will automatically be unsupported if a conditional attribute on the underlying depend node is animated.</p>\n\
<p><a class=\"el\" translate=\"no\" href=\"#!/url=./cpp_ref/class_m_px_g_p_u_deformer.html#aeb97b4186f7b3334a902bf6c10c07710\" title=\"This method is called each time the deformation chain is evaluated. \">MPxGPUDeformer::evaluate()</a> will not be called if the value of a conditional attribute on the underlying depend node changes and the change causes a call to <a class=\"el\" translate=\"no\" href=\"#!/url=./cpp_ref/class_m_g_p_u_deformer_registration_info.html#a5211d6842c7677f9730a9c76cb258568\" title=\"This method is called once for each instance of the overridden deformation node type in a Maya scene...\">MGPUDeformerRegistrationInfo::validateNodeValues()</a> to return false.</p>\n\
<dl class=\"params\"><dt>Parameters</dt><dd>\n\
  <table class=\"params\">\n\
    <tr><td class=\"paramdir\">[in]</td><td class=\"paramname\">nodeClassName</td><td>The name of the deformer type to be overridden. </td></tr>\n\
    <tr><td class=\"paramdir\">[in]</td><td class=\"paramname\">registrantId</td><td>The ID of the override provider. </td></tr>\n\
    <tr><td class=\"paramdir\">[in]</td><td class=\"paramname\">conditionalAttribute</td><td>The attribute which is conditionally supported by the <a class=\"el\" translate=\"no\" href=\"#!/url=./cpp_ref/class_m_px_g_p_u_deformer.html\" title=\"Base class for user defined GPU deformer override evaluators. \">MPxGPUDeformer</a></td></tr>\n\
  </table>\n\
  </dd>\n\
</dl>\n\
<dl class=\"section return\"><dt>Returns</dt><dd><ul>\n\
<li><b><a class=\"el\" translate=\"no\" href=\"#!/url=./cpp_ref/class_m_status.html#a02ab596f4febca68da503aaf8dde3a80af0536797208144380691e2b376ffc1d1\" title=\"The operation was successful. \">MS::kSuccess</a></b> if the attribute was successfully added as a conditional attribute. </li>\n\
<li><b><a class=\"el\" translate=\"no\" href=\"#!/url=./cpp_ref/class_m_status.html#a02ab596f4febca68da503aaf8dde3a80a1ef6c2d725fb4bec3e7e840d28adbc00\" title=\"The operation failed. \">MS::kFailure</a></b> if the attribute was not added. </li>\n\
</ul>\n\
</dd></dl>\n\
<dl class=\"section \"><div id=\"dynsection-example2\" class=\"dynheader closed\" onclick=\"return toggleVisibility(this)\" style=\"cursor:pointer;\"><dt><img id=\"dynsection-example2-trigger\" src=\"cpp_ref/closed.png\" alt=\"+\"> <b>Examples: </b></dt></div><div id=\"dynsection-example2-content\" class=\"dyncontent\" style=\"display:none;\"><dd><a class=\"el\" translate=\"no\" href=\"#!/url=./cpp_ref/offset_node_2offset_node_8cpp-example.html#a77\">offsetNode/offsetNode.cpp</a>.</dd></div>\n\
</dl>\n\
</div>\n\
</div>\n\
<hr>The documentation for this class was generated from the following files:<ul>\n\
<li>MGPUDeformerRegistry.h</li>\n\
<li>MGPUDeformerRegistry.cpp</li>\n\
</ul>\n\
</div><!-- contents -->\n\
</div><!-- doc-content -->\n\
          <div class=\"footer-block\"><a href=\"../html/ac.cmtdialog.htm\" class=\"comments-anchor\" target=\"_blank\"><span class=\"comments-link\">Please send us your comment about this page</span></a></div><br></div>\n\
   </div></body>\n\
</html>\n\
";