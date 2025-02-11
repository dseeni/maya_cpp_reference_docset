var topic = "<!-- saved from url=(0024)http://docs.autodesk.com -->\n\
<html>\n\
   <head><script src=\"../scripts/yepnope.1.5.4-min.js\" type=\"text/javascript\"></script><script src=\"../scripts/lib/jquery-1.11.1.min.js\" type=\"text/javascript\"></script><meta http-equiv=\"Content-Type\" content=\"text/html; charset=UTF-8\"><meta name=\"product\" content=\"MAYAUL\"><meta name=\"release\" content=\"2018\"><meta name=\"book\" content=\"Developer\"><meta name=\"created\" content=\"2017-06-22\"><meta name=\"topicid\" content=\"GUID-02DEF634-1E7B-48C6-8ACD-2C934CA97887\"><meta name=\"topic-type\" content=\"concept\">\n\
      <title>MGraphNodeIterator Class Reference</title>\n\
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
    cpp_ref_adsk_ref_toc.initNavTree(\'class_m_graph_node_iterator.html\', tocPrefix);\n\
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
            <h1>MGraphNodeIterator Class Reference</h1>\n\
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
<div class=\"title\">MGraphNodeIterator Class Reference<div class=\"ingroups\"><a class=\"el\" translate=\"no\" href=\"#!/url=./cpp_ref/group___open_maya.html\">OpenMaya - API module for common classes</a></div></div>  </div>\n\
<div id=\"OverviewLinksDiv\"><div id=\"dynsection-overview\" onclick=\"return toggleVisibility(this)\" class=\"dynheader closed\" style=\"cursor:pointer;\"><img id=\"dynsection-overview-trigger\" src=\"cpp_ref/closed.png\" alt=\"+\"> Related help topics: </div><div id=\"dynsection-overview-content\" class=\"dyncontent\" style=\"display:none;\"><ul class=\"overviewLinks\">\n\
<li class=\"overviewLink\"><a href=\"#!/url=./files/GUID-B18DB085-600A-4A52-8440-4494590F76EC.htm\">What\'s New / What\'s Changed? &gt; What\'s New in API in Maya 2017 &gt; New C++ API classes in Maya 2017</a></li>\n\
</ul></div></div>\n\
<div class=\"summary\">\n\
<a href=\"class_m_graph_node_iterator.html#pub-methods\">Public Member Functions</a> &#124;\n\
<a href=\"class_m_graph_node_iterator.html#pub-static-methods\">Static Public Member Functions</a> &#124;\n\
<a href=\"class_m_graph_node_iterator.html#friends\">Friends</a>  </div></div><!--header-->\n\
<div class=\"contents\">\n\
\n\
<p><code>#include &lt;MGraphNodeIterator.h&gt;</code></p>\n\
<a name=\"details\" id=\"details\"></a><h2 class=\"groupheader\">Class Description</h2>\n\
<div class=\"textblock\"><p>Provides access to the cluster nodes in a given evaluation graph. </p>\n\
<dl class=\"section \"><div id=\"dynsection-example0\" class=\"dynheader closed\" onclick=\"return toggleVisibility(this)\" style=\"cursor:pointer;\"><dt><img id=\"dynsection-example0-trigger\" src=\"cpp_ref/closed.png\" alt=\"+\"> <b>Examples: </b></dt></div><div id=\"dynsection-example0-content\" class=\"dyncontent\" style=\"display:none;\"><dd><a class=\"el\" translate=\"no\" href=\"#!/url=./cpp_ref/constraint_evaluator_2constraint_evaluator_8cpp-example.html#_a23\">constraintEvaluator/constraintEvaluator.cpp</a>.</dd></div>\n\
</dl></div><table class=\"memberdecls\">\n\
<tr class=\"heading\"><td colspan=\"2\"><h2 class=\"groupheader\"><a name=\"pub-methods\"></a>\n\
Public Member Functions</h2></td></tr>\n\
<tr class=\"memitem:ac4229b506a23961bd5bc4784435792ff\"><td class=\"memItemLeft\" translate=\"no\" align=\"right\" valign=\"top\">&#160;</td><td class=\"memItemRight\" translate=\"no\" valign=\"bottom\"><a class=\"el\" translate=\"no\" href=\"#!/url=./cpp_ref/class_m_graph_node_iterator.html#ac4229b506a23961bd5bc4784435792ff\">MGraphNodeIterator</a> (const <a class=\"el\" translate=\"no\" href=\"#!/url=./cpp_ref/class_m_custom_evaluator_cluster_node.html\">MCustomEvaluatorClusterNode</a> *cluster, <a class=\"el\" translate=\"no\" href=\"#!/url=./cpp_ref/class_m_status.html\">MStatus</a> *ReturnStatus)</td></tr>\n\
<tr class=\"memdesc:ac4229b506a23961bd5bc4784435792ff\"><td class=\"mdescLeft\">&#160;</td><td class=\"mdescRight\">Constructor.  <a href=\"class_m_graph_node_iterator.html#ac4229b506a23961bd5bc4784435792ff\">More...</a><br></td></tr>\n\
<tr class=\"separator:ac4229b506a23961bd5bc4784435792ff\"><td class=\"memSeparator\" colspan=\"2\">&#160;</td></tr>\n\
<tr class=\"memitem:a37650f723bbb68187b0cc7b91ebff8d0\"><td class=\"memItemLeft\" translate=\"no\" align=\"right\" valign=\"top\">&#160;</td><td class=\"memItemRight\" translate=\"no\" valign=\"bottom\"><a class=\"el\" translate=\"no\" href=\"#!/url=./cpp_ref/class_m_graph_node_iterator.html#a37650f723bbb68187b0cc7b91ebff8d0\">MGraphNodeIterator</a> (const <a class=\"el\" translate=\"no\" href=\"#!/url=./cpp_ref/class_m_graph_node_iterator.html\">MGraphNodeIterator</a> &amp;iterator, <a class=\"el\" translate=\"no\" href=\"#!/url=./cpp_ref/class_m_status.html\">MStatus</a> *ReturnStatus)</td></tr>\n\
<tr class=\"memdesc:a37650f723bbb68187b0cc7b91ebff8d0\"><td class=\"mdescLeft\">&#160;</td><td class=\"mdescRight\">Constructor.  <a href=\"class_m_graph_node_iterator.html#a37650f723bbb68187b0cc7b91ebff8d0\">More...</a><br></td></tr>\n\
<tr class=\"separator:a37650f723bbb68187b0cc7b91ebff8d0\"><td class=\"memSeparator\" colspan=\"2\">&#160;</td></tr>\n\
<tr class=\"memitem:a8b6dbf6fbab6f4e7bf50a309124cbf4c\"><td class=\"memItemLeft\" translate=\"no\" align=\"right\" valign=\"top\">bool&#160;</td><td class=\"memItemRight\" translate=\"no\" valign=\"bottom\"><a class=\"el\" translate=\"no\" href=\"#!/url=./cpp_ref/class_m_graph_node_iterator.html#a8b6dbf6fbab6f4e7bf50a309124cbf4c\">isDone</a> (<a class=\"el\" translate=\"no\" href=\"#!/url=./cpp_ref/class_m_status.html\">MStatus</a> *ReturnStatus=NULL) const </td></tr>\n\
<tr class=\"memdesc:a8b6dbf6fbab6f4e7bf50a309124cbf4c\"><td class=\"mdescLeft\">&#160;</td><td class=\"mdescRight\">Checks to see if the iterator has reached the end of the iteration.  <a href=\"class_m_graph_node_iterator.html#a8b6dbf6fbab6f4e7bf50a309124cbf4c\">More...</a><br></td></tr>\n\
<tr class=\"separator:a8b6dbf6fbab6f4e7bf50a309124cbf4c\"><td class=\"memSeparator\" colspan=\"2\">&#160;</td></tr>\n\
<tr class=\"memitem:aa2f7e301a557d98993e2e7a7ba5bc91b\"><td class=\"memItemLeft\" translate=\"no\" align=\"right\" valign=\"top\"><a class=\"el\" translate=\"no\" href=\"#!/url=./cpp_ref/class_m_evaluation_node.html\">MEvaluationNode</a>&#160;</td><td class=\"memItemRight\" translate=\"no\" valign=\"bottom\"><a class=\"el\" translate=\"no\" href=\"#!/url=./cpp_ref/class_m_graph_node_iterator.html#aa2f7e301a557d98993e2e7a7ba5bc91b\">currentEvaluationNode</a> (<a class=\"el\" translate=\"no\" href=\"#!/url=./cpp_ref/class_m_status.html\">MStatus</a> *ReturnStatus=NULL) const </td></tr>\n\
<tr class=\"memdesc:aa2f7e301a557d98993e2e7a7ba5bc91b\"><td class=\"mdescLeft\">&#160;</td><td class=\"mdescRight\">Returns the evaluation node at the current iterator position.  <a href=\"class_m_graph_node_iterator.html#aa2f7e301a557d98993e2e7a7ba5bc91b\">More...</a><br></td></tr>\n\
<tr class=\"separator:aa2f7e301a557d98993e2e7a7ba5bc91b\"><td class=\"memSeparator\" colspan=\"2\">&#160;</td></tr>\n\
<tr class=\"memitem:a5f62f0d210be4586c8e05dccf2c41810\"><td class=\"memItemLeft\" translate=\"no\" align=\"right\" valign=\"top\">void&#160;</td><td class=\"memItemRight\" translate=\"no\" valign=\"bottom\"><a class=\"el\" translate=\"no\" href=\"#!/url=./cpp_ref/class_m_graph_node_iterator.html#a5f62f0d210be4586c8e05dccf2c41810\">next</a> (<a class=\"el\" translate=\"no\" href=\"#!/url=./cpp_ref/class_m_status.html\">MStatus</a> *ReturnStatus=NULL) const </td></tr>\n\
<tr class=\"memdesc:a5f62f0d210be4586c8e05dccf2c41810\"><td class=\"mdescLeft\">&#160;</td><td class=\"mdescRight\">Advances the iterator to the next position in its evaluation graph.  <a href=\"class_m_graph_node_iterator.html#a5f62f0d210be4586c8e05dccf2c41810\">More...</a><br></td></tr>\n\
<tr class=\"separator:a5f62f0d210be4586c8e05dccf2c41810\"><td class=\"memSeparator\" colspan=\"2\">&#160;</td></tr>\n\
<tr class=\"memitem:a48418b0344b7baa497daf08c1d8a3c72\"><td class=\"memItemLeft\" translate=\"no\" align=\"right\" valign=\"top\">void&#160;</td><td class=\"memItemRight\" translate=\"no\" valign=\"bottom\"><a class=\"el\" translate=\"no\" href=\"#!/url=./cpp_ref/class_m_graph_node_iterator.html#a48418b0344b7baa497daf08c1d8a3c72\">reset</a> (<a class=\"el\" translate=\"no\" href=\"#!/url=./cpp_ref/class_m_status.html\">MStatus</a> *ReturnStatus=NULL)</td></tr>\n\
<tr class=\"memdesc:a48418b0344b7baa497daf08c1d8a3c72\"><td class=\"mdescLeft\">&#160;</td><td class=\"mdescRight\">Resets the iterator to the first position in its evaluation graph.  <a href=\"class_m_graph_node_iterator.html#a48418b0344b7baa497daf08c1d8a3c72\">More...</a><br></td></tr>\n\
<tr class=\"separator:a48418b0344b7baa497daf08c1d8a3c72\"><td class=\"memSeparator\" colspan=\"2\">&#160;</td></tr>\n\
</table><table class=\"memberdecls\">\n\
<tr class=\"heading\"><td colspan=\"2\"><h2 class=\"groupheader\"><a name=\"pub-static-methods\"></a>\n\
Static Public Member Functions</h2></td></tr>\n\
<tr class=\"memitem:a774cd5d8fbebe8e7ed82a5aa587d1f04\"><td class=\"memItemLeft\" translate=\"no\" align=\"right\" valign=\"top\">static const char *&#160;</td><td class=\"memItemRight\" translate=\"no\" valign=\"bottom\"><a class=\"el\" translate=\"no\" href=\"#!/url=./cpp_ref/class_m_graph_node_iterator.html#a774cd5d8fbebe8e7ed82a5aa587d1f04\">className</a> ()</td></tr>\n\
<tr class=\"memdesc:a774cd5d8fbebe8e7ed82a5aa587d1f04\"><td class=\"mdescLeft\">&#160;</td><td class=\"mdescRight\">Returns the name of this class.  <a href=\"class_m_graph_node_iterator.html#a774cd5d8fbebe8e7ed82a5aa587d1f04\">More...</a><br></td></tr>\n\
<tr class=\"separator:a774cd5d8fbebe8e7ed82a5aa587d1f04\"><td class=\"memSeparator\" colspan=\"2\">&#160;</td></tr>\n\
</table><table class=\"memberdecls\">\n\
<tr class=\"heading\"><td colspan=\"2\"><h2 class=\"groupheader\"><a name=\"friends\"></a>\n\
Friends</h2></td></tr>\n\
<tr class=\"memitem:a837bf0c019ddb06489f1632d69d3c095\"><td class=\"memItemLeft\" translate=\"no\" align=\"right\" valign=\"top\"><a class=\"anchor\" id=\"a837bf0c019ddb06489f1632d69d3c095\"></a>\n\
class&#160;</td><td class=\"memItemRight\" translate=\"no\" valign=\"bottom\"><b>MCustomEvaluatorClusterNode</b></td></tr>\n\
<tr class=\"separator:a837bf0c019ddb06489f1632d69d3c095\"><td class=\"memSeparator\" colspan=\"2\">&#160;</td></tr>\n\
</table>\n\
<h2 class=\"groupheader\">Constructor &amp; Destructor Documentation</h2>\n\
<a class=\"anchor\" id=\"ac4229b506a23961bd5bc4784435792ff\"></a>\n\
<div class=\"memitem\">\n\
<div class=\"memproto\">\n\
      <table class=\"memname\">\n\
        <tr>\n\
          <td class=\"memname\" translate=\"no\"><a class=\"el\" translate=\"no\" href=\"#!/url=./cpp_ref/class_m_graph_node_iterator.html\">MGraphNodeIterator</a> </td>\n\
          <td>(</td>\n\
          <td class=\"paramtype\">const <a class=\"el\" translate=\"no\" href=\"#!/url=./cpp_ref/class_m_custom_evaluator_cluster_node.html\">MCustomEvaluatorClusterNode</a> *&#160;</td>\n\
          <td class=\"paramname\"><em>cluster</em>, </td>\n\
        </tr>\n\
        <tr>\n\
          <td class=\"paramkey\"></td>\n\
          <td></td>\n\
          <td class=\"paramtype\"><a class=\"el\" translate=\"no\" href=\"#!/url=./cpp_ref/class_m_status.html\">MStatus</a> *&#160;</td>\n\
          <td class=\"paramname\"><em>ReturnStatus</em>&#160;</td>\n\
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
<dl class=\"params\"><dt>Parameters</dt><dd>\n\
  <table class=\"params\">\n\
    <tr><td class=\"paramdir\">[in]</td><td class=\"paramname\">cluster</td><td>an evaluation cluster. A cluster is a grouping of nodes within the Evaluation Graph that are evaluated together as a single unit. The iterator will point to the root of the cluster. </td></tr>\n\
    <tr><td class=\"paramdir\">[out]</td><td class=\"paramname\">ReturnStatus</td><td>return status</td></tr>\n\
  </table>\n\
  </dd>\n\
</dl>\n\
<dl class=\"section user\"><dt>Status Codes:</dt><dd><ul>\n\
<li><b>MS::kSuccess</b> the operation succeeded </li>\n\
<li><b>MS::kFailure</b> the operation failed (the provided cluster object is possibly invalid) </li>\n\
</ul>\n\
</dd></dl>\n\
\n\
</div>\n\
</div>\n\
<a class=\"anchor\" id=\"a37650f723bbb68187b0cc7b91ebff8d0\"></a>\n\
<div class=\"memitem\">\n\
<div class=\"memproto\">\n\
      <table class=\"memname\">\n\
        <tr>\n\
          <td class=\"memname\" translate=\"no\"><a class=\"el\" translate=\"no\" href=\"#!/url=./cpp_ref/class_m_graph_node_iterator.html\">MGraphNodeIterator</a> </td>\n\
          <td>(</td>\n\
          <td class=\"paramtype\">const <a class=\"el\" translate=\"no\" href=\"#!/url=./cpp_ref/class_m_graph_node_iterator.html\">MGraphNodeIterator</a> &amp;&#160;</td>\n\
          <td class=\"paramname\"><em>iterator</em>, </td>\n\
        </tr>\n\
        <tr>\n\
          <td class=\"paramkey\"></td>\n\
          <td></td>\n\
          <td class=\"paramtype\"><a class=\"el\" translate=\"no\" href=\"#!/url=./cpp_ref/class_m_status.html\">MStatus</a> *&#160;</td>\n\
          <td class=\"paramname\"><em>ReturnStatus</em>&#160;</td>\n\
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
<dl class=\"params\"><dt>Parameters</dt><dd>\n\
  <table class=\"params\">\n\
    <tr><td class=\"paramdir\">[in]</td><td class=\"paramname\">iterator</td><td>another graph iterator object </td></tr>\n\
    <tr><td class=\"paramdir\">[out]</td><td class=\"paramname\">ReturnStatus</td><td>return status</td></tr>\n\
  </table>\n\
  </dd>\n\
</dl>\n\
<dl class=\"section user\"><dt>Status Codes:</dt><dd><ul>\n\
<li><b>MS::kSuccess</b> the operation succeeded </li>\n\
<li><b>MS::kFailure</b> the operation failed (internal failure) </li>\n\
</ul>\n\
</dd></dl>\n\
\n\
</div>\n\
</div>\n\
<h2 class=\"groupheader\">Member Function Documentation</h2>\n\
<a class=\"anchor\" id=\"a8b6dbf6fbab6f4e7bf50a309124cbf4c\"></a>\n\
<div class=\"memitem\">\n\
<div class=\"memproto\">\n\
      <table class=\"memname\">\n\
        <tr>\n\
          <td class=\"memname\" translate=\"no\">bool isDone </td>\n\
          <td>(</td>\n\
          <td class=\"paramtype\"><a class=\"el\" translate=\"no\" href=\"#!/url=./cpp_ref/class_m_status.html\">MStatus</a> *&#160;</td>\n\
          <td class=\"paramname\"><em>ReturnStatus</em> = <code>NULL</code></td><td>)</td>\n\
          <td> const</td>\n\
        </tr>\n\
      </table>\n\
</div><div class=\"memdoc\">\n\
\n\
<p>Checks to see if the iterator has reached the end of the iteration. </p>\n\
<dl class=\"params\"><dt>Parameters</dt><dd>\n\
  <table class=\"params\">\n\
    <tr><td class=\"paramdir\">[out]</td><td class=\"paramname\">ReturnStatus</td><td>return status</td></tr>\n\
  </table>\n\
  </dd>\n\
</dl>\n\
<dl class=\"section return\"><dt>Returns</dt><dd>True if the iteration has completed</dd></dl>\n\
<dl class=\"section user\"><dt>Status Codes:</dt><dd><ul>\n\
<li><b>MS::kSuccess</b> the operation succeeded </li>\n\
<li><b>MS::kFailure</b> the operation failed (the iterator object is possibly invalid) </li>\n\
</ul>\n\
</dd></dl>\n\
\n\
</div>\n\
</div>\n\
<a class=\"anchor\" id=\"aa2f7e301a557d98993e2e7a7ba5bc91b\"></a>\n\
<div class=\"memitem\">\n\
<div class=\"memproto\">\n\
      <table class=\"memname\">\n\
        <tr>\n\
          <td class=\"memname\" translate=\"no\"><a class=\"el\" translate=\"no\" href=\"#!/url=./cpp_ref/class_m_evaluation_node.html\">MEvaluationNode</a> currentEvaluationNode </td>\n\
          <td>(</td>\n\
          <td class=\"paramtype\"><a class=\"el\" translate=\"no\" href=\"#!/url=./cpp_ref/class_m_status.html\">MStatus</a> *&#160;</td>\n\
          <td class=\"paramname\"><em>ReturnStatus</em> = <code>NULL</code></td><td>)</td>\n\
          <td> const</td>\n\
        </tr>\n\
      </table>\n\
</div><div class=\"memdoc\">\n\
\n\
<p>Returns the evaluation node at the current iterator position. </p>\n\
<p>Returns NULL if the iterator is illegal.</p>\n\
<dl class=\"params\"><dt>Parameters</dt><dd>\n\
  <table class=\"params\">\n\
    <tr><td class=\"paramdir\">[out]</td><td class=\"paramname\">ReturnStatus</td><td>return status</td></tr>\n\
  </table>\n\
  </dd>\n\
</dl>\n\
<dl class=\"section return\"><dt>Returns</dt><dd>evaluation node at current position</dd></dl>\n\
<dl class=\"section user\"><dt>Status Codes:</dt><dd><ul>\n\
<li><b>MS::kSuccess</b> the operation succeeded </li>\n\
<li><b>MS::kFailure</b> the operation failed (internal failure) </li>\n\
</ul>\n\
</dd></dl>\n\
\n\
</div>\n\
</div>\n\
<a class=\"anchor\" id=\"a5f62f0d210be4586c8e05dccf2c41810\"></a>\n\
<div class=\"memitem\">\n\
<div class=\"memproto\">\n\
      <table class=\"memname\">\n\
        <tr>\n\
          <td class=\"memname\" translate=\"no\">void next </td>\n\
          <td>(</td>\n\
          <td class=\"paramtype\"><a class=\"el\" translate=\"no\" href=\"#!/url=./cpp_ref/class_m_status.html\">MStatus</a> *&#160;</td>\n\
          <td class=\"paramname\"><em>ReturnStatus</em> = <code>NULL</code></td><td>)</td>\n\
          <td> const</td>\n\
        </tr>\n\
      </table>\n\
</div><div class=\"memdoc\">\n\
\n\
<p>Advances the iterator to the next position in its evaluation graph. </p>\n\
<dl class=\"params\"><dt>Parameters</dt><dd>\n\
  <table class=\"params\">\n\
    <tr><td class=\"paramdir\">[out]</td><td class=\"paramname\">ReturnStatus</td><td>return status</td></tr>\n\
  </table>\n\
  </dd>\n\
</dl>\n\
<dl class=\"section user\"><dt>Status Codes:</dt><dd><ul>\n\
<li><b>MS::kSuccess</b> the operation succeeded </li>\n\
<li><b>MS::kFailure</b> the operation failed (internal failure) </li>\n\
</ul>\n\
</dd></dl>\n\
\n\
</div>\n\
</div>\n\
<a class=\"anchor\" id=\"a48418b0344b7baa497daf08c1d8a3c72\"></a>\n\
<div class=\"memitem\">\n\
<div class=\"memproto\">\n\
      <table class=\"memname\">\n\
        <tr>\n\
          <td class=\"memname\" translate=\"no\">void reset </td>\n\
          <td>(</td>\n\
          <td class=\"paramtype\"><a class=\"el\" translate=\"no\" href=\"#!/url=./cpp_ref/class_m_status.html\">MStatus</a> *&#160;</td>\n\
          <td class=\"paramname\"><em>ReturnStatus</em> = <code>NULL</code></td><td>)</td>\n\
          <td></td>\n\
        </tr>\n\
      </table>\n\
</div><div class=\"memdoc\">\n\
\n\
<p>Resets the iterator to the first position in its evaluation graph. </p>\n\
<dl class=\"params\"><dt>Parameters</dt><dd>\n\
  <table class=\"params\">\n\
    <tr><td class=\"paramdir\">[out]</td><td class=\"paramname\">ReturnStatus</td><td>return status</td></tr>\n\
  </table>\n\
  </dd>\n\
</dl>\n\
<dl class=\"section user\"><dt>Status Codes:</dt><dd><ul>\n\
<li><b>MS::kSuccess</b> the operation succeeded </li>\n\
<li><b>MS::kFailure</b> the operation failed (internal failure) </li>\n\
</ul>\n\
</dd></dl>\n\
\n\
</div>\n\
</div>\n\
<a class=\"anchor\" id=\"a774cd5d8fbebe8e7ed82a5aa587d1f04\"></a>\n\
<div class=\"memitem\">\n\
<div class=\"memproto\">\n\
<table class=\"mlabels\">\n\
  <tr>\n\
  <td class=\"mlabels-left\">\n\
      <table class=\"memname\">\n\
        <tr>\n\
          <td class=\"memname\" translate=\"no\">const char * className </td>\n\
          <td>(</td>\n\
          <td class=\"paramname\"></td><td>)</td>\n\
          <td></td>\n\
        </tr>\n\
      </table>\n\
  </td>\n\
  <td class=\"mlabels-right\">\n\
<span class=\"mlabels\"><span class=\"mlabel\">static</span></span>  </td>\n\
  </tr>\n\
</table>\n\
</div><div class=\"memdoc\">\n\
\n\
<p>Returns the name of this class. </p>\n\
<dl class=\"section return\"><dt>Returns</dt><dd>Name of this class. </dd></dl>\n\
\n\
</div>\n\
</div>\n\
<hr>The documentation for this class was generated from the following files:<ul>\n\
<li>MGraphNodeIterator.h</li>\n\
<li>MGraphNodeIterator.cpp</li>\n\
</ul>\n\
</div><!-- contents -->\n\
</div><!-- doc-content -->\n\
          <div class=\"footer-block\"><a href=\"../html/ac.cmtdialog.htm\" class=\"comments-anchor\" target=\"_blank\"><span class=\"comments-link\">Please send us your comment about this page</span></a></div></div>\n\
   </div></body>\n\
</html>\n\
";