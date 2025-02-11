var topic = "<!-- saved from url=(0024)http://docs.autodesk.com -->\n\
<html>\n\
   <head><script src=\"../scripts/yepnope.1.5.4-min.js\" type=\"text/javascript\"></script><script src=\"../scripts/lib/jquery-1.11.1.min.js\" type=\"text/javascript\"></script><meta http-equiv=\"Content-Type\" content=\"text/html; charset=UTF-8\"><script type=\"text/javascript\" src=\"../scripts/utils/adsk.redirect.js\"></script>\n\
      <title>MGPUDeformerRegistrationInfo Class Reference</title>\n\
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
    cpp_ref_adsk_ref_toc.initNavTree(\'class_m_g_p_u_deformer_registration_info.html\', tocPrefix);\n\
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
            <h1>MGPUDeformerRegistrationInfo Class Reference</h1>\n\
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
<div class=\"title\">MGPUDeformerRegistrationInfo Class Reference<span class=\"mlabels\"><span class=\"mlabel\">abstract</span></span><div class=\"ingroups\"><a class=\"el\" translate=\"no\" href=\"#!/url=./cpp_ref/group___open_maya_anim.html\">OpenMayaAnim - API module for animation</a></div></div>  </div>\n\
<div id=\"OverviewLinksDiv\"><div id=\"dynsection-overview\" onclick=\"return toggleVisibility(this)\" class=\"dynheader closed\" style=\"cursor:pointer;\"><img id=\"dynsection-overview-trigger\" src=\"cpp_ref/closed.png\" alt=\"+\"> Related help topics: </div><div id=\"dynsection-overview-content\" class=\"dyncontent\" style=\"display:none;\"><ul class=\"overviewLinks\">\n\
<li class=\"overviewLink\"><a href=\"#!/url=./developer/What-s-New-What-s-Changed-/What-s-New-in-API-in-Maya-2016.html\">What&#39;s New / What&#39;s Changed? &gt; What&#39;s New in API in Maya 2016 Extension 2</a></li>\n\
<li class=\"overviewLink\"><a href=\"#!/url=./developer/What-s-New-What-s-Changed-/What-s-New-in-API-in-Maya-2016-2.html\">What&#39;s New / What&#39;s Changed? &gt; What&#39;s New in API in Maya 2016</a></li>\n\
<li class=\"overviewLink\"><a href=\"#!/url=./developer/What-s-New-What-s-Changed-/What-s-New-in-API-in-Maya-2016-2/C-API-Changes-in-Maya-2016.html\">What&#39;s New / What&#39;s Changed? &gt; What&#39;s New in API in Maya 2016 &gt; C++ API Changes in Maya 2016</a></li>\n\
</ul></div></div>\n\
<div class=\"summary\">\n\
<a href=\"class_m_g_p_u_deformer_registration_info.html#pub-methods\">Public Member Functions</a>  </div></div><!--header-->\n\
<div class=\"contents\">\n\
\n\
<p><code>#include &lt;MGPUDeformerRegistry.h&gt;</code></p>\n\
<a name=\"details\" id=\"details\"></a><h2 class=\"groupheader\">Class Description</h2>\n\
<div class=\"textblock\"><p>Registration information for an <a class=\"el\" translate=\"no\" href=\"#!/url=./cpp_ref/class_m_px_g_p_u_deformer.html\" title=\"Base class for user defined GPU deformer override evaluators. \">MPxGPUDeformer</a>. </p>\n\
<p><a class=\"el\" translate=\"no\" href=\"#!/url=./cpp_ref/class_m_g_p_u_deformer_registration_info.html\" title=\"Registration information for an MPxGPUDeformer. \">MGPUDeformerRegistrationInfo</a> provides a creator method to allocate <a class=\"el\" translate=\"no\" href=\"#!/url=./cpp_ref/class_m_px_g_p_u_deformer.html\" title=\"Base class for user defined GPU deformer override evaluators. \">MPxGPUDeformer</a> objects, validation methods to determine if a given node is supported by the <a class=\"el\" translate=\"no\" href=\"#!/url=./cpp_ref/class_m_px_g_p_u_deformer.html\" title=\"Base class for user defined GPU deformer override evaluators. \">MPxGPUDeformer</a>, as well as utility methods to tell the deformer evaluator which attributes are the input and output mesh attributes of the deformer node.</p>\n\
<p>You must implement <a class=\"el\" translate=\"no\" href=\"#!/url=./cpp_ref/class_m_g_p_u_deformer_registration_info.html#a69ee4850048ea760d9e03f2deaf957e4\" title=\"This method allocates an MPxGPUDeformer. \">createGPUDeformer()</a>, <a class=\"el\" translate=\"no\" href=\"#!/url=./cpp_ref/class_m_g_p_u_deformer_registration_info.html#af612f89c960cf432dc7be0d3f1be8d93\" title=\"This method is called once for each instance of the overridden deformation node type in a Maya scene...\">validateNodeInGraph()</a> and <a class=\"el\" translate=\"no\" href=\"#!/url=./cpp_ref/class_m_g_p_u_deformer_registration_info.html#a5211d6842c7677f9730a9c76cb258568\" title=\"This method is called once for each instance of the overridden deformation node type in a Maya scene...\">validateNodeValues()</a>. <a class=\"el\" translate=\"no\" href=\"#!/url=./cpp_ref/class_m_g_p_u_deformer_registration_info.html#a4c0b70c231ae3362260f85feb518dc5f\" title=\"This method returns the output mesh attribute for the node type being overridden. ...\">outputMeshAttribute()</a> and <a class=\"el\" translate=\"no\" href=\"#!/url=./cpp_ref/class_m_g_p_u_deformer_registration_info.html#af2b81cb6c5f4e81488afe71b317e9d79\" title=\"This method returns the input mesh attribute for the node type being overridden. \">inputMeshAttribute()</a> have default implementations which will work correctly if the node being overridden by <a class=\"el\" translate=\"no\" href=\"#!/url=./cpp_ref/class_m_px_g_p_u_deformer.html\" title=\"Base class for user defined GPU deformer override evaluators. \">MPxGPUDeformer</a> is an <a class=\"el\" translate=\"no\" href=\"#!/url=./cpp_ref/class_m_px_deformer_node.html\" title=\"Base class for user defined deformers with per-vertex weights. \">MPxDeformerNode</a>.</p>\n\
<p>If the attribute returned by <a class=\"el\" translate=\"no\" href=\"#!/url=./cpp_ref/class_m_g_p_u_deformer_registration_info.html#a4c0b70c231ae3362260f85feb518dc5f\" title=\"This method returns the output mesh attribute for the node type being overridden. ...\">outputMeshAttribute()</a> is a multi-attribute or a multi parent, then the attribute returned by <a class=\"el\" translate=\"no\" href=\"#!/url=./cpp_ref/class_m_g_p_u_deformer_registration_info.html#af2b81cb6c5f4e81488afe71b317e9d79\" title=\"This method returns the input mesh attribute for the node type being overridden. \">inputMeshAttribute()</a> must also be a multi-attribute or have a multi parent. The total number of multi attributes in the hierarchy of the output attribute (including the output attribute itself) must be exactly one. The total number of multi attributes in the hierarchy of the input attribute (including the input attribute itself) must be exactly one.</p>\n\
<p>For example, geometryFilter\'s input geometry attribute is inputGeometry. inputGeometry is not a multi attribute, but it has a single multi parent (input). geometryFilter\'s output geometry attribute is outputGeometry. outputGeometry is a multi attribute. In this case the input and output attribute hierarchies each have a single multi, so the GPU override works.</p>\n\
<p>Maya will match the multi index of each multi attribute in the input and output multi hierarchies for each connected input and output plug. In the geometryFilter example we use the multi index of the outputGeometry attribute as the multi index of aInput when attempting to determine if inputGeometry is connected. </p>\n\
<dl class=\"section \"><div id=\"dynsection-example0\" class=\"dynheader closed\" onclick=\"return toggleVisibility(this)\" style=\"cursor:pointer;\"><dt><img id=\"dynsection-example0-trigger\" src=\"cpp_ref/closed.png\" alt=\"+\"> <b>Examples: </b></dt></div><div id=\"dynsection-example0-content\" class=\"dyncontent\" style=\"display:none;\"><dd><a class=\"el\" translate=\"no\" href=\"#!/url=./cpp_ref/identity_node_2identity_node_8cpp-example.html#_a14\">identityNode/identityNode.cpp</a>, and <a class=\"el\" translate=\"no\" href=\"#!/url=./cpp_ref/offset_node_2offset_node_8cpp-example.html#_a40\">offsetNode/offsetNode.cpp</a>.</dd></div>\n\
</dl></div><table class=\"memberdecls\">\n\
<tr class=\"heading\"><td colspan=\"2\"><h2 class=\"groupheader\"><a name=\"pub-methods\"></a>\n\
Public Member Functions</h2></td></tr>\n\
<tr class=\"memitem:a69ee4850048ea760d9e03f2deaf957e4\"><td class=\"memItemLeft\" translate=\"no\" align=\"right\" valign=\"top\">virtual <a class=\"el\" translate=\"no\" href=\"#!/url=./cpp_ref/class_m_px_g_p_u_deformer.html\">MPxGPUDeformer</a> *&#160;</td><td class=\"memItemRight\" translate=\"no\" valign=\"bottom\"><a class=\"el\" translate=\"no\" href=\"#!/url=./cpp_ref/class_m_g_p_u_deformer_registration_info.html#a69ee4850048ea760d9e03f2deaf957e4\">createGPUDeformer</a> ()=0</td></tr>\n\
<tr class=\"memdesc:a69ee4850048ea760d9e03f2deaf957e4\"><td class=\"mdescLeft\">&#160;</td><td class=\"mdescRight\">This method allocates an <a class=\"el\" translate=\"no\" href=\"#!/url=./cpp_ref/class_m_px_g_p_u_deformer.html\" title=\"Base class for user defined GPU deformer override evaluators. \">MPxGPUDeformer</a>.  <a href=\"class_m_g_p_u_deformer_registration_info.html#a69ee4850048ea760d9e03f2deaf957e4\">More...</a><br></td></tr>\n\
<tr class=\"separator:a69ee4850048ea760d9e03f2deaf957e4\"><td class=\"memSeparator\" colspan=\"2\">&#160;</td></tr>\n\
<tr class=\"memitem:af612f89c960cf432dc7be0d3f1be8d93\"><td class=\"memItemLeft\" translate=\"no\" align=\"right\" valign=\"top\">virtual bool&#160;</td><td class=\"memItemRight\" translate=\"no\" valign=\"bottom\"><a class=\"el\" translate=\"no\" href=\"#!/url=./cpp_ref/class_m_g_p_u_deformer_registration_info.html#af612f89c960cf432dc7be0d3f1be8d93\">validateNodeInGraph</a> (<a class=\"el\" translate=\"no\" href=\"#!/url=./cpp_ref/class_m_data_block.html\">MDataBlock</a> &amp;block, const <a class=\"el\" translate=\"no\" href=\"#!/url=./cpp_ref/class_m_evaluation_node.html\">MEvaluationNode</a> &amp;evaluationNode, const <a class=\"el\" translate=\"no\" href=\"#!/url=./cpp_ref/class_m_plug.html\">MPlug</a> &amp;plug, <a class=\"el\" translate=\"no\" href=\"#!/url=./cpp_ref/class_m_string_array.html\">MStringArray</a> *messages)=0</td></tr>\n\
<tr class=\"memdesc:af612f89c960cf432dc7be0d3f1be8d93\"><td class=\"mdescLeft\">&#160;</td><td class=\"mdescRight\">This method is called once for each instance of the overridden deformation node type in a Maya scene.  <a href=\"class_m_g_p_u_deformer_registration_info.html#af612f89c960cf432dc7be0d3f1be8d93\">More...</a><br></td></tr>\n\
<tr class=\"separator:af612f89c960cf432dc7be0d3f1be8d93\"><td class=\"memSeparator\" colspan=\"2\">&#160;</td></tr>\n\
<tr class=\"memitem:a5211d6842c7677f9730a9c76cb258568\"><td class=\"memItemLeft\" translate=\"no\" align=\"right\" valign=\"top\">virtual bool&#160;</td><td class=\"memItemRight\" translate=\"no\" valign=\"bottom\"><a class=\"el\" translate=\"no\" href=\"#!/url=./cpp_ref/class_m_g_p_u_deformer_registration_info.html#a5211d6842c7677f9730a9c76cb258568\">validateNodeValues</a> (<a class=\"el\" translate=\"no\" href=\"#!/url=./cpp_ref/class_m_data_block.html\">MDataBlock</a> &amp;block, const <a class=\"el\" translate=\"no\" href=\"#!/url=./cpp_ref/class_m_evaluation_node.html\">MEvaluationNode</a> &amp;evaluationNode, const <a class=\"el\" translate=\"no\" href=\"#!/url=./cpp_ref/class_m_plug.html\">MPlug</a> &amp;plug, <a class=\"el\" translate=\"no\" href=\"#!/url=./cpp_ref/class_m_string_array.html\">MStringArray</a> *messages)=0</td></tr>\n\
<tr class=\"memdesc:a5211d6842c7677f9730a9c76cb258568\"><td class=\"mdescLeft\">&#160;</td><td class=\"mdescRight\">This method is called once for each instance of the overridden deformation node type in a Maya scene.  <a href=\"class_m_g_p_u_deformer_registration_info.html#a5211d6842c7677f9730a9c76cb258568\">More...</a><br></td></tr>\n\
<tr class=\"separator:a5211d6842c7677f9730a9c76cb258568\"><td class=\"memSeparator\" colspan=\"2\">&#160;</td></tr>\n\
<tr class=\"memitem:a4c0b70c231ae3362260f85feb518dc5f\"><td class=\"memItemLeft\" translate=\"no\" align=\"right\" valign=\"top\">virtual const <a class=\"el\" translate=\"no\" href=\"#!/url=./cpp_ref/class_m_object.html\">MObject</a>&#160;</td><td class=\"memItemRight\" translate=\"no\" valign=\"bottom\"><a class=\"el\" translate=\"no\" href=\"#!/url=./cpp_ref/class_m_g_p_u_deformer_registration_info.html#a4c0b70c231ae3362260f85feb518dc5f\">outputMeshAttribute</a> ()</td></tr>\n\
<tr class=\"memdesc:a4c0b70c231ae3362260f85feb518dc5f\"><td class=\"mdescLeft\">&#160;</td><td class=\"mdescRight\">This method returns the output mesh attribute for the node type being overridden.  <a href=\"class_m_g_p_u_deformer_registration_info.html#a4c0b70c231ae3362260f85feb518dc5f\">More...</a><br></td></tr>\n\
<tr class=\"separator:a4c0b70c231ae3362260f85feb518dc5f\"><td class=\"memSeparator\" colspan=\"2\">&#160;</td></tr>\n\
<tr class=\"memitem:af2b81cb6c5f4e81488afe71b317e9d79\"><td class=\"memItemLeft\" translate=\"no\" align=\"right\" valign=\"top\">virtual const <a class=\"el\" translate=\"no\" href=\"#!/url=./cpp_ref/class_m_object.html\">MObject</a>&#160;</td><td class=\"memItemRight\" translate=\"no\" valign=\"bottom\"><a class=\"el\" translate=\"no\" href=\"#!/url=./cpp_ref/class_m_g_p_u_deformer_registration_info.html#af2b81cb6c5f4e81488afe71b317e9d79\">inputMeshAttribute</a> ()</td></tr>\n\
<tr class=\"memdesc:af2b81cb6c5f4e81488afe71b317e9d79\"><td class=\"mdescLeft\">&#160;</td><td class=\"mdescRight\">This method returns the input mesh attribute for the node type being overridden.  <a href=\"class_m_g_p_u_deformer_registration_info.html#af2b81cb6c5f4e81488afe71b317e9d79\">More...</a><br></td></tr>\n\
<tr class=\"separator:af2b81cb6c5f4e81488afe71b317e9d79\"><td class=\"memSeparator\" colspan=\"2\">&#160;</td></tr>\n\
</table>\n\
<h2 class=\"groupheader\">Member Function Documentation</h2>\n\
<a class=\"anchor\" id=\"a69ee4850048ea760d9e03f2deaf957e4\"></a>\n\
<div class=\"memitem\">\n\
<div class=\"memproto\">\n\
<table class=\"mlabels\">\n\
  <tr>\n\
  <td class=\"mlabels-left\">\n\
      <table class=\"memname\">\n\
        <tr>\n\
          <td class=\"memname\" translate=\"no\">OPENMAYA_MAJOR_NAMESPACE_OPENMPxGPUDeformer * createGPUDeformer </td>\n\
          <td>(</td>\n\
          <td class=\"paramname\"></td><td>)</td>\n\
          <td></td>\n\
        </tr>\n\
      </table>\n\
  </td>\n\
  <td class=\"mlabels-right\">\n\
<span class=\"mlabels\"><span class=\"mlabel\">pure virtual</span></span>  </td>\n\
  </tr>\n\
</table>\n\
</div><div class=\"memdoc\">\n\
\n\
<p>This method allocates an <a class=\"el\" translate=\"no\" href=\"#!/url=./cpp_ref/class_m_px_g_p_u_deformer.html\" title=\"Base class for user defined GPU deformer override evaluators. \">MPxGPUDeformer</a>. </p>\n\
<dl class=\"section return\"><dt>Returns</dt><dd>An <a class=\"el\" translate=\"no\" href=\"#!/url=./cpp_ref/class_m_px_g_p_u_deformer.html\" title=\"Base class for user defined GPU deformer override evaluators. \">MPxGPUDeformer</a> of the appropriate type. </dd></dl>\n\
<dl class=\"section \"><div id=\"dynsection-example1\" class=\"dynheader closed\" onclick=\"return toggleVisibility(this)\" style=\"cursor:pointer;\"><dt><img id=\"dynsection-example1-trigger\" src=\"cpp_ref/closed.png\" alt=\"+\"> <b>Examples: </b></dt></div><div id=\"dynsection-example1-content\" class=\"dyncontent\" style=\"display:none;\"><dd><a class=\"el\" translate=\"no\" href=\"#!/url=./cpp_ref/identity_node_2identity_node_8cpp-example.html#a22\">identityNode/identityNode.cpp</a>, and <a class=\"el\" translate=\"no\" href=\"#!/url=./cpp_ref/offset_node_2offset_node_8cpp-example.html#a44\">offsetNode/offsetNode.cpp</a>.</dd></div>\n\
</dl>\n\
</div>\n\
</div>\n\
<a class=\"anchor\" id=\"af612f89c960cf432dc7be0d3f1be8d93\"></a>\n\
<div class=\"memitem\">\n\
<div class=\"memproto\">\n\
<table class=\"mlabels\">\n\
  <tr>\n\
  <td class=\"mlabels-left\">\n\
      <table class=\"memname\">\n\
        <tr>\n\
          <td class=\"memname\" translate=\"no\">bool validateNodeInGraph </td>\n\
          <td>(</td>\n\
          <td class=\"paramtype\"><a class=\"el\" translate=\"no\" href=\"#!/url=./cpp_ref/class_m_data_block.html\">MDataBlock</a> &amp;&#160;</td>\n\
          <td class=\"paramname\"><em>block</em>, </td>\n\
        </tr>\n\
        <tr>\n\
          <td class=\"paramkey\"></td>\n\
          <td></td>\n\
          <td class=\"paramtype\">const <a class=\"el\" translate=\"no\" href=\"#!/url=./cpp_ref/class_m_evaluation_node.html\">MEvaluationNode</a> &amp;&#160;</td>\n\
          <td class=\"paramname\"><em>evaluationNode</em>, </td>\n\
        </tr>\n\
        <tr>\n\
          <td class=\"paramkey\"></td>\n\
          <td></td>\n\
          <td class=\"paramtype\">const <a class=\"el\" translate=\"no\" href=\"#!/url=./cpp_ref/class_m_plug.html\">MPlug</a> &amp;&#160;</td>\n\
          <td class=\"paramname\"><em>plug</em>, </td>\n\
        </tr>\n\
        <tr>\n\
          <td class=\"paramkey\"></td>\n\
          <td></td>\n\
          <td class=\"paramtype\"><a class=\"el\" translate=\"no\" href=\"#!/url=./cpp_ref/class_m_string_array.html\">MStringArray</a> *&#160;</td>\n\
          <td class=\"paramname\"><em>messages</em>&#160;</td>\n\
        </tr>\n\
        <tr>\n\
          <td></td>\n\
          <td>)</td>\n\
          <td></td><td></td>\n\
        </tr>\n\
      </table>\n\
  </td>\n\
  <td class=\"mlabels-right\">\n\
<span class=\"mlabels\"><span class=\"mlabel\">pure virtual</span></span>  </td>\n\
  </tr>\n\
</table>\n\
</div><div class=\"memdoc\">\n\
\n\
<p>This method is called once for each instance of the overridden deformation node type in a Maya scene. </p>\n\
<p>This method returns True if the specific instance of the node represented by <a class=\"el\" translate=\"no\" href=\"#!/url=./cpp_ref/class_m_evaluation_node.html\" title=\"Provides access to Evaluation Manager node information. \">MEvaluationNode</a> and <a class=\"el\" translate=\"no\" href=\"#!/url=./cpp_ref/class_m_data_block.html\" title=\"Dependency node data block. \">MDataBlock</a> is supported by the corresponding <a class=\"el\" translate=\"no\" href=\"#!/url=./cpp_ref/class_m_px_g_p_u_deformer.html\" title=\"Base class for user defined GPU deformer override evaluators. \">MPxGPUDeformer</a>. A return value of False from this method prevents the deformation chain that includes this specific instance of the deformer from being included in GPU evaluation. See <a class=\"el\" translate=\"no\" href=\"#!/url=./cpp_ref/class_m_px_g_p_u_deformer.html\" title=\"Base class for user defined GPU deformer override evaluators. \">MPxGPUDeformer</a> documentation for more information about deformation chains.</p>\n\
<p>validateNodeInGraph should test conditions which depend on the topology of Maya\'s dependency graph (connected attributes, global state) or values which can only change when the topology of the graph changes. validateNodeInGraph should not test specific values of attributes in the data block. Attribute value tests should be performed in validateNodeValues.</p>\n\
<p>validateNodeInGraph is only called during evaluation manager graph scheduling and will not be called again until the graph is re-scheduled.</p>\n\
<dl class=\"params\"><dt>Parameters</dt><dd>\n\
  <table class=\"params\">\n\
    <tr><td class=\"paramdir\">[in]</td><td class=\"paramname\">block</td><td>The data block of the deformer node to be validated. </td></tr>\n\
    <tr><td class=\"paramdir\">[in]</td><td class=\"paramname\">evaluationNode</td><td>The evaluation node that corresponds to the deformer to be validated. </td></tr>\n\
    <tr><td class=\"paramdir\">[in]</td><td class=\"paramname\">plug</td><td>The output plug of the deformer to be validated. </td></tr>\n\
    <tr><td class=\"paramdir\">[in]</td><td class=\"paramname\">messages</td><td>If non-NULL store messages to the user explaining why the node was not validated.</td></tr>\n\
  </table>\n\
  </dd>\n\
</dl>\n\
<dl class=\"section return\"><dt>Returns</dt><dd>True if the deformer is supported. </dd></dl>\n\
<dl class=\"section \"><div id=\"dynsection-example2\" class=\"dynheader closed\" onclick=\"return toggleVisibility(this)\" style=\"cursor:pointer;\"><dt><img id=\"dynsection-example2-trigger\" src=\"cpp_ref/closed.png\" alt=\"+\"> <b>Examples: </b></dt></div><div id=\"dynsection-example2-content\" class=\"dyncontent\" style=\"display:none;\"><dd><a class=\"el\" translate=\"no\" href=\"#!/url=./cpp_ref/identity_node_2identity_node_8cpp-example.html#a23\">identityNode/identityNode.cpp</a>, and <a class=\"el\" translate=\"no\" href=\"#!/url=./cpp_ref/offset_node_2offset_node_8cpp-example.html#a45\">offsetNode/offsetNode.cpp</a>.</dd></div>\n\
</dl>\n\
</div>\n\
</div>\n\
<a class=\"anchor\" id=\"a5211d6842c7677f9730a9c76cb258568\"></a>\n\
<div class=\"memitem\">\n\
<div class=\"memproto\">\n\
<table class=\"mlabels\">\n\
  <tr>\n\
  <td class=\"mlabels-left\">\n\
      <table class=\"memname\">\n\
        <tr>\n\
          <td class=\"memname\" translate=\"no\">bool validateNodeValues </td>\n\
          <td>(</td>\n\
          <td class=\"paramtype\"><a class=\"el\" translate=\"no\" href=\"#!/url=./cpp_ref/class_m_data_block.html\">MDataBlock</a> &amp;&#160;</td>\n\
          <td class=\"paramname\"><em>block</em>, </td>\n\
        </tr>\n\
        <tr>\n\
          <td class=\"paramkey\"></td>\n\
          <td></td>\n\
          <td class=\"paramtype\">const <a class=\"el\" translate=\"no\" href=\"#!/url=./cpp_ref/class_m_evaluation_node.html\">MEvaluationNode</a> &amp;&#160;</td>\n\
          <td class=\"paramname\"><em>evaluationNode</em>, </td>\n\
        </tr>\n\
        <tr>\n\
          <td class=\"paramkey\"></td>\n\
          <td></td>\n\
          <td class=\"paramtype\">const <a class=\"el\" translate=\"no\" href=\"#!/url=./cpp_ref/class_m_plug.html\">MPlug</a> &amp;&#160;</td>\n\
          <td class=\"paramname\"><em>plug</em>, </td>\n\
        </tr>\n\
        <tr>\n\
          <td class=\"paramkey\"></td>\n\
          <td></td>\n\
          <td class=\"paramtype\"><a class=\"el\" translate=\"no\" href=\"#!/url=./cpp_ref/class_m_string_array.html\">MStringArray</a> *&#160;</td>\n\
          <td class=\"paramname\"><em>messages</em>&#160;</td>\n\
        </tr>\n\
        <tr>\n\
          <td></td>\n\
          <td>)</td>\n\
          <td></td><td></td>\n\
        </tr>\n\
      </table>\n\
  </td>\n\
  <td class=\"mlabels-right\">\n\
<span class=\"mlabels\"><span class=\"mlabel\">pure virtual</span></span>  </td>\n\
  </tr>\n\
</table>\n\
</div><div class=\"memdoc\">\n\
\n\
<p>This method is called once for each instance of the overridden deformation node type in a Maya scene. </p>\n\
<p>This method returns True if the specific instance of the node represented by <a class=\"el\" translate=\"no\" href=\"#!/url=./cpp_ref/class_m_evaluation_node.html\" title=\"Provides access to Evaluation Manager node information. \">MEvaluationNode</a> and <a class=\"el\" translate=\"no\" href=\"#!/url=./cpp_ref/class_m_data_block.html\" title=\"Dependency node data block. \">MDataBlock</a> is supported by the corresponding <a class=\"el\" translate=\"no\" href=\"#!/url=./cpp_ref/class_m_px_g_p_u_deformer.html\" title=\"Base class for user defined GPU deformer override evaluators. \">MPxGPUDeformer</a>. A return value of False from this method prevents the deformation chain that includes this specific instance of the deformer from being included in GPU evaluation. See <a class=\"el\" translate=\"no\" href=\"#!/url=./cpp_ref/class_m_px_g_p_u_deformer.html\" title=\"Base class for user defined GPU deformer override evaluators. \">MPxGPUDeformer</a> documentation for more information about deformation chains.</p>\n\
<p>validateNodeValues should test specific values of attributes in the data block. validateNodeValues should not test conditions which depend on the topology of Maya\'s dependency graph.</p>\n\
<p>validateNodeValues will be called before each call to <a class=\"el\" translate=\"no\" href=\"#!/url=./cpp_ref/class_m_px_g_p_u_deformer.html#a070259639bc552fd702c9e8e042f0331\" title=\"This method is deprecated and should no longer be used. \">MPxGPUDeformer::evaluate</a> to ensure that the state of the underlying Maya node has not changed in a way which prevents the <a class=\"el\" translate=\"no\" href=\"#!/url=./cpp_ref/class_m_px_g_p_u_deformer.html\" title=\"Base class for user defined GPU deformer override evaluators. \">MPxGPUDeformer</a> from supporting it.</p>\n\
<p>validateNodeValues will be called for unsupported nodes each time the value a conditional attribute changes. If the previously unsupported node is now supported, GPU Override will enable for the node.</p>\n\
<dl class=\"params\"><dt>Parameters</dt><dd>\n\
  <table class=\"params\">\n\
    <tr><td class=\"paramdir\">[in]</td><td class=\"paramname\">block</td><td>The data block of the deformer node to be validated. </td></tr>\n\
    <tr><td class=\"paramdir\">[in]</td><td class=\"paramname\">evaluationNode</td><td>The evaluation node that corresponds to the deformer to be validated. </td></tr>\n\
    <tr><td class=\"paramdir\">[in]</td><td class=\"paramname\">plug</td><td>The output plug of the deformer to be validated. </td></tr>\n\
    <tr><td class=\"paramdir\">[in]</td><td class=\"paramname\">messages</td><td>If non-NULL store messages to the user explaining why the node was not validated.</td></tr>\n\
  </table>\n\
  </dd>\n\
</dl>\n\
<dl class=\"section return\"><dt>Returns</dt><dd>True if the deformer is supported. </dd></dl>\n\
<dl class=\"section \"><div id=\"dynsection-example3\" class=\"dynheader closed\" onclick=\"return toggleVisibility(this)\" style=\"cursor:pointer;\"><dt><img id=\"dynsection-example3-trigger\" src=\"cpp_ref/closed.png\" alt=\"+\"> <b>Examples: </b></dt></div><div id=\"dynsection-example3-content\" class=\"dyncontent\" style=\"display:none;\"><dd><a class=\"el\" translate=\"no\" href=\"#!/url=./cpp_ref/identity_node_2identity_node_8cpp-example.html#a24\">identityNode/identityNode.cpp</a>, and <a class=\"el\" translate=\"no\" href=\"#!/url=./cpp_ref/offset_node_2offset_node_8cpp-example.html#a46\">offsetNode/offsetNode.cpp</a>.</dd></div>\n\
</dl>\n\
</div>\n\
</div>\n\
<a class=\"anchor\" id=\"a4c0b70c231ae3362260f85feb518dc5f\"></a>\n\
<div class=\"memitem\">\n\
<div class=\"memproto\">\n\
<table class=\"mlabels\">\n\
  <tr>\n\
  <td class=\"mlabels-left\">\n\
      <table class=\"memname\">\n\
        <tr>\n\
          <td class=\"memname\" translate=\"no\">const <a class=\"el\" translate=\"no\" href=\"#!/url=./cpp_ref/class_m_object.html\">MObject</a> outputMeshAttribute </td>\n\
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
<p>This method returns the output mesh attribute for the node type being overridden. </p>\n\
<p>If outputMeshAttribute is a multi-attribute, input mesh attribute must also be a multi-attribute. This method is optional if and only if the <a class=\"el\" translate=\"no\" href=\"#!/url=./cpp_ref/class_m_px_g_p_u_deformer.html\" title=\"Base class for user defined GPU deformer override evaluators. \">MPxGPUDeformer</a> is being used to override an <a class=\"el\" translate=\"no\" href=\"#!/url=./cpp_ref/class_m_px_deformer_node.html\" title=\"Base class for user defined deformers with per-vertex weights. \">MPxDeformerNode</a> or a geometryFilter.</p>\n\
<dl class=\"section return\"><dt>Returns</dt><dd>An <a class=\"el\" translate=\"no\" href=\"#!/url=./cpp_ref/class_m_object.html\" title=\"Generic Class for Accessing Internal Maya Objects. \">MObject</a> representing the output mesh attribute. </dd></dl>\n\
\n\
</div>\n\
</div>\n\
<a class=\"anchor\" id=\"af2b81cb6c5f4e81488afe71b317e9d79\"></a>\n\
<div class=\"memitem\">\n\
<div class=\"memproto\">\n\
<table class=\"mlabels\">\n\
  <tr>\n\
  <td class=\"mlabels-left\">\n\
      <table class=\"memname\">\n\
        <tr>\n\
          <td class=\"memname\" translate=\"no\">const <a class=\"el\" translate=\"no\" href=\"#!/url=./cpp_ref/class_m_object.html\">MObject</a> inputMeshAttribute </td>\n\
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
<p>This method returns the input mesh attribute for the node type being overridden. </p>\n\
<p>If inputMeshAttribute is a multi-attribute, output mesh attribute must also be a multi-attribute. This method is optional if and only if the <a class=\"el\" translate=\"no\" href=\"#!/url=./cpp_ref/class_m_px_g_p_u_deformer.html\" title=\"Base class for user defined GPU deformer override evaluators. \">MPxGPUDeformer</a> is being used to override an <a class=\"el\" translate=\"no\" href=\"#!/url=./cpp_ref/class_m_px_deformer_node.html\" title=\"Base class for user defined deformers with per-vertex weights. \">MPxDeformerNode</a> or a geometryFilter.</p>\n\
<dl class=\"section return\"><dt>Returns</dt><dd>An <a class=\"el\" translate=\"no\" href=\"#!/url=./cpp_ref/class_m_object.html\" title=\"Generic Class for Accessing Internal Maya Objects. \">MObject</a> representing the input mesh attribute. </dd></dl>\n\
\n\
</div>\n\
</div>\n\
<hr>The documentation for this class was generated from the following files:<ul>\n\
<li>MGPUDeformerRegistry.h</li>\n\
<li>MGPUDeformerRegistry.cpp</li>\n\
</ul>\n\
</div><!-- contents -->\n\
</div><!-- doc-content -->\n\
          <div class=\"footer-block\"><a href=\"../html/ac.cmtdialog.htm\" class=\"comments-anchor\" target=\"_blank\"><span class=\"comments-link\">Please send us your comment about this page</span></a></div></div>\n\
   </div></body>\n\
</html>\n\
";