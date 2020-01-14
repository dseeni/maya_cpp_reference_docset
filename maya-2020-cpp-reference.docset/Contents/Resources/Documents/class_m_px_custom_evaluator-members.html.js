var topic = "<!-- saved from url=(0024)http://docs.autodesk.com -->\n\
<html>\n\
   <head><script src=\"../scripts/yepnope.1.5.4-min.js\" type=\"text/javascript\"></script><script src=\"../scripts/lib/jquery-1.11.1.min.js\" type=\"text/javascript\"></script>\n\
      <title>C++ API Reference: Member List</title>\n\
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
    cpp_ref_adsk_ref_toc.initNavTree(\'class_m_px_custom_evaluator-members.html\', tocPrefix);\n\
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
      <div><div class=\"related-links\">\n\
         <div class=\"head\">\n\
            <h1>C++ API Reference: Member List</h1>\n\
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
  <div class=\"headertitle\">\n\
<div class=\"title\">MPxCustomEvaluator Member List</div>  </div>\n\
</div><!--header-->\n\
<div class=\"contents\">\n\
\n\
<p>This is the complete list of members for <a class=\"el\" href=\"#!/url=./cpp_ref/class_m_px_custom_evaluator.html\">MPxCustomEvaluator</a>, including all inherited members.</p>\n\
<table class=\"directory\">\n\
  <tr class=\"even\"><td class=\"entry\"><a class=\"el\" href=\"#!/url=./cpp_ref/class_m_px_custom_evaluator.html#af5e06a8424d24a99dd2fba4e24c685cf\">active</a>(MStatus *ReturnStatus=NULL) const </td><td class=\"entry\"><a class=\"el\" href=\"#!/url=./cpp_ref/class_m_px_custom_evaluator.html\">MPxCustomEvaluator</a></td><td class=\"entry\"></td></tr>\n\
  <tr><td class=\"entry\"><a class=\"el\" href=\"#!/url=./cpp_ref/class_m_px_custom_evaluator.html#a774cd5d8fbebe8e7ed82a5aa587d1f04\">className</a>()</td><td class=\"entry\"><a class=\"el\" href=\"#!/url=./cpp_ref/class_m_px_custom_evaluator.html\">MPxCustomEvaluator</a></td><td class=\"entry\"><span class=\"mlabel\">static</span></td></tr>\n\
  <tr class=\"even\"><td class=\"entry\"><a class=\"el\" href=\"#!/url=./cpp_ref/class_m_px_custom_evaluator.html#a9bded60be46fea26c410402438aa331a\">clusterEvaluate</a>(const MCustomEvaluatorClusterNode *cluster)</td><td class=\"entry\"><a class=\"el\" href=\"#!/url=./cpp_ref/class_m_px_custom_evaluator.html\">MPxCustomEvaluator</a></td><td class=\"entry\"><span class=\"mlabel\">virtual</span></td></tr>\n\
  <tr><td class=\"entry\"><a class=\"el\" href=\"#!/url=./cpp_ref/class_m_px_custom_evaluator.html#aadcd7c91ee41f0f4ac48923ed11db44b\">clusterInitialize</a>(const MCustomEvaluatorClusterNode *cluster)</td><td class=\"entry\"><a class=\"el\" href=\"#!/url=./cpp_ref/class_m_px_custom_evaluator.html\">MPxCustomEvaluator</a></td><td class=\"entry\"><span class=\"mlabel\">virtual</span></td></tr>\n\
  <tr class=\"even\"><td class=\"entry\"><a class=\"el\" href=\"#!/url=./cpp_ref/class_m_px_custom_evaluator.html#a809a944bd923a0c7180818fcdc257df1\">clusterReady</a>(const MCustomEvaluatorClusterNode *cluster)</td><td class=\"entry\"><a class=\"el\" href=\"#!/url=./cpp_ref/class_m_px_custom_evaluator.html\">MPxCustomEvaluator</a></td><td class=\"entry\"><span class=\"mlabel\">virtual</span></td></tr>\n\
  <tr><td class=\"entry\"><a class=\"el\" href=\"#!/url=./cpp_ref/class_m_px_custom_evaluator.html#a93f7f73d9a911cd75458e64fa9b4a29b\">clusterTerminate</a>(const MCustomEvaluatorClusterNode *cluster)</td><td class=\"entry\"><a class=\"el\" href=\"#!/url=./cpp_ref/class_m_px_custom_evaluator.html\">MPxCustomEvaluator</a></td><td class=\"entry\"><span class=\"mlabel\">virtual</span></td></tr>\n\
  <tr class=\"even\"><td class=\"entry\"><a class=\"el\" href=\"#!/url=./cpp_ref/class_m_px_custom_evaluator.html#aba7bd9fe65bdf5715869b7a1a7406d4b\">consolidation</a>(MStatus *ReturnStatus=NULL) const </td><td class=\"entry\"><a class=\"el\" href=\"#!/url=./cpp_ref/class_m_px_custom_evaluator.html\">MPxCustomEvaluator</a></td><td class=\"entry\"></td></tr>\n\
  <tr><td class=\"entry\"><a class=\"el\" href=\"#!/url=./cpp_ref/class_m_px_custom_evaluator.html#ac62b7251c633544aa1e605c03504fc13\">ConsolidationType</a> enum name</td><td class=\"entry\"><a class=\"el\" href=\"#!/url=./cpp_ref/class_m_px_custom_evaluator.html\">MPxCustomEvaluator</a></td><td class=\"entry\"></td></tr>\n\
  <tr class=\"even\"><td class=\"entry\"><a class=\"el\" href=\"#!/url=./cpp_ref/class_m_px_custom_evaluator.html#ac62b7251c633544aa1e605c03504fc13a3c6a6117da4931da39a675c6cf786a66\">kConsolidateFlood</a> enum value</td><td class=\"entry\"><a class=\"el\" href=\"#!/url=./cpp_ref/class_m_px_custom_evaluator.html\">MPxCustomEvaluator</a></td><td class=\"entry\"></td></tr>\n\
  <tr><td class=\"entry\"><a class=\"el\" href=\"#!/url=./cpp_ref/class_m_px_custom_evaluator.html#ac62b7251c633544aa1e605c03504fc13a18adbb94887c3632e2ec7e359a020401\">kConsolidateNone</a> enum value</td><td class=\"entry\"><a class=\"el\" href=\"#!/url=./cpp_ref/class_m_px_custom_evaluator.html\">MPxCustomEvaluator</a></td><td class=\"entry\"></td></tr>\n\
  <tr class=\"even\"><td class=\"entry\"><a class=\"el\" href=\"#!/url=./cpp_ref/class_m_px_custom_evaluator.html#ac62b7251c633544aa1e605c03504fc13a9697f410fb4942415edb75a110930d2e\">kConsolidateSubgraph</a> enum value</td><td class=\"entry\"><a class=\"el\" href=\"#!/url=./cpp_ref/class_m_px_custom_evaluator.html\">MPxCustomEvaluator</a></td><td class=\"entry\"></td></tr>\n\
  <tr><td class=\"entry\"><a class=\"el\" href=\"#!/url=./cpp_ref/class_m_px_custom_evaluator.html#ab796c49be826aa53c78faf09f05ab0c8\">markIfSupported</a>(const MEvaluationNode *node)</td><td class=\"entry\"><a class=\"el\" href=\"#!/url=./cpp_ref/class_m_px_custom_evaluator.html\">MPxCustomEvaluator</a></td><td class=\"entry\"><span class=\"mlabel\">virtual</span></td></tr>\n\
  <tr class=\"even\"><td class=\"entry\"><a class=\"el\" href=\"#!/url=./cpp_ref/class_m_px_custom_evaluator.html#a292fecdb56c1c47c54f1f43a6213e182\">MPxCustomEvaluator</a>()</td><td class=\"entry\"><a class=\"el\" href=\"#!/url=./cpp_ref/class_m_px_custom_evaluator.html\">MPxCustomEvaluator</a></td><td class=\"entry\"></td></tr>\n\
  <tr><td class=\"entry\"><a class=\"el\" href=\"#!/url=./cpp_ref/class_m_px_custom_evaluator.html#a15601c71655108beeb74c77bf70b021a\">postEvaluate</a>(const MEvaluationGraph *graph)</td><td class=\"entry\"><a class=\"el\" href=\"#!/url=./cpp_ref/class_m_px_custom_evaluator.html\">MPxCustomEvaluator</a></td><td class=\"entry\"><span class=\"mlabel\">virtual</span></td></tr>\n\
  <tr class=\"even\"><td class=\"entry\"><a class=\"el\" href=\"#!/url=./cpp_ref/class_m_px_custom_evaluator.html#a0ee39c4c551994ada0ae27f4b9407c48\">preEvaluate</a>(const MEvaluationGraph *graph)</td><td class=\"entry\"><a class=\"el\" href=\"#!/url=./cpp_ref/class_m_px_custom_evaluator.html\">MPxCustomEvaluator</a></td><td class=\"entry\"><span class=\"mlabel\">virtual</span></td></tr>\n\
  <tr><td class=\"entry\"><a class=\"el\" href=\"#!/url=./cpp_ref/class_m_px_custom_evaluator.html#aeb7154b3dcb7b962b28307438e37c925\">ready</a>(MStatus *ReturnStatus=NULL) const </td><td class=\"entry\"><a class=\"el\" href=\"#!/url=./cpp_ref/class_m_px_custom_evaluator.html\">MPxCustomEvaluator</a></td><td class=\"entry\"></td></tr>\n\
  <tr class=\"even\"><td class=\"entry\"><a class=\"el\" href=\"#!/url=./cpp_ref/class_m_px_custom_evaluator.html#a5e62d77c96dee4a2931f171ed1c67f51\">setActive</a>(bool isNowActive, MStatus *ReturnStatus=NULL)</td><td class=\"entry\"><a class=\"el\" href=\"#!/url=./cpp_ref/class_m_px_custom_evaluator.html\">MPxCustomEvaluator</a></td><td class=\"entry\"></td></tr>\n\
  <tr><td class=\"entry\"><a class=\"el\" href=\"#!/url=./cpp_ref/class_m_px_custom_evaluator.html#ad6f681126d716fb7a1ec115b9ed2b499\">setConsolidation</a>(ConsolidationType newType, MStatus *ReturnStatus=NULL)</td><td class=\"entry\"><a class=\"el\" href=\"#!/url=./cpp_ref/class_m_px_custom_evaluator.html\">MPxCustomEvaluator</a></td><td class=\"entry\"></td></tr>\n\
  <tr class=\"even\"><td class=\"entry\"><a class=\"el\" href=\"#!/url=./cpp_ref/class_m_px_custom_evaluator.html#a119a9c34d5af547faa7f61031029e055\">setReady</a>(bool isNowReady, MStatus *ReturnStatus=NULL)</td><td class=\"entry\"><a class=\"el\" href=\"#!/url=./cpp_ref/class_m_px_custom_evaluator.html\">MPxCustomEvaluator</a></td><td class=\"entry\"></td></tr>\n\
  <tr><td class=\"entry\"><a class=\"el\" href=\"#!/url=./cpp_ref/class_m_px_custom_evaluator.html#a188af6acb8469842161ad03495cc214f\">~MPxCustomEvaluator</a>()</td><td class=\"entry\"><a class=\"el\" href=\"#!/url=./cpp_ref/class_m_px_custom_evaluator.html\">MPxCustomEvaluator</a></td><td class=\"entry\"><span class=\"mlabel\">virtual</span></td></tr>\n\
</table></div><!-- contents -->\n\
</div><!-- doc-content -->\n\
<!-- start footer part -->\n\
\n\
      <div class=\"footer-block\"><a href=\"../html/ac.cmtdialog.htm\" class=\"comments-anchor\" target=\"_blank\"><span class=\"comments-link\">Please send us your comment about this page</span></a></div></div>\n\
   </div></div></body>\n\
</html>\n\
";