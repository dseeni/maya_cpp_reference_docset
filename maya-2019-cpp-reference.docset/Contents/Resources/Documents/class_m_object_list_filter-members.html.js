var topic = "<!-- saved from url=(0024)http://docs.autodesk.com -->\n\
<html>\n\
   <head><script src=\"../scripts/yepnope.1.5.4-min.js\" type=\"text/javascript\"></script><script src=\"../scripts/lib/jquery-1.11.1.min.js\" type=\"text/javascript\"></script><meta http-equiv=\"Content-Type\" content=\"text/html; charset=UTF-8\"><script type=\"text/javascript\" src=\"../scripts/utils/adsk.redirect.js\"></script>\n\
      <title>Member List</title>\n\
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
    cpp_ref_adsk_ref_toc.initNavTree(\'class_m_object_list_filter-members.html\', tocPrefix);\n\
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
      <div><div class=\"related-links\">\n\
         <div class=\"head\">\n\
            <h1>Member List</h1>\n\
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
  <div class=\"headertitle\">\n\
<div class=\"title\">MObjectListFilter Member List</div>  </div>\n\
</div><!--header-->\n\
<div class=\"contents\">\n\
\n\
<p>This is the complete list of members for <a class=\"el\" translate=\"no\" href=\"#!/url=./cpp_ref/class_m_object_list_filter.html\">MObjectListFilter</a>, including all inherited members.</p>\n\
<table class=\"directory\">\n\
  <tr class=\"even\"><td class=\"entry\"><a class=\"el\" translate=\"no\" href=\"#!/url=./cpp_ref/class_m_object_list_filter.html#a774cd5d8fbebe8e7ed82a5aa587d1f04\">className</a>()</td><td class=\"entry\"><a class=\"el\" translate=\"no\" href=\"#!/url=./cpp_ref/class_m_object_list_filter.html\">MObjectListFilter</a></td><td class=\"entry\"><span class=\"mlabel\">static</span></td></tr>\n\
  <tr><td class=\"entry\"><a class=\"el\" translate=\"no\" href=\"#!/url=./cpp_ref/class_m_object_list_filter.html#a883766c39abad6ed34d1b81e95c16871\">dependentOnSceneUpdates</a>()</td><td class=\"entry\"><a class=\"el\" translate=\"no\" href=\"#!/url=./cpp_ref/class_m_object_list_filter.html\">MObjectListFilter</a></td><td class=\"entry\"><span class=\"mlabel\">virtual</span></td></tr>\n\
  <tr class=\"even\"><td class=\"entry\"><a class=\"el\" translate=\"no\" href=\"#!/url=./cpp_ref/class_m_object_list_filter.html#a1f9784cce88b53ca3f6ac4c46b1c7758\">deregisterFilter</a>(const MObjectListFilter &amp;filter)</td><td class=\"entry\"><a class=\"el\" translate=\"no\" href=\"#!/url=./cpp_ref/class_m_object_list_filter.html\">MObjectListFilter</a></td><td class=\"entry\"><span class=\"mlabel\">static</span></td></tr>\n\
  <tr><td class=\"entry\"><a class=\"el\" translate=\"no\" href=\"#!/url=./cpp_ref/class_m_object_list_filter.html#a3f907e30b550e6cd81280dd7b3154bdd\">filterType</a>() const </td><td class=\"entry\"><a class=\"el\" translate=\"no\" href=\"#!/url=./cpp_ref/class_m_object_list_filter.html\">MObjectListFilter</a></td><td class=\"entry\"></td></tr>\n\
  <tr class=\"even\"><td class=\"entry\"><a class=\"el\" translate=\"no\" href=\"#!/url=./cpp_ref/class_m_object_list_filter.html#a86b787153313fab40c122a0f73861303\">getList</a>(MSelectionList &amp;list)=0</td><td class=\"entry\"><a class=\"el\" translate=\"no\" href=\"#!/url=./cpp_ref/class_m_object_list_filter.html\">MObjectListFilter</a></td><td class=\"entry\"><span class=\"mlabel\">pure virtual</span></td></tr>\n\
  <tr><td class=\"entry\"><a class=\"el\" translate=\"no\" href=\"#!/url=./cpp_ref/class_m_object_list_filter.html#a4685e4fbf6664911b053f778a3da8090a1ae0c4277955d68336567de009d1d915\">kAddRemoveObjects</a> enum value</td><td class=\"entry\"><a class=\"el\" translate=\"no\" href=\"#!/url=./cpp_ref/class_m_object_list_filter.html\">MObjectListFilter</a></td><td class=\"entry\"></td></tr>\n\
  <tr class=\"even\"><td class=\"entry\"><a class=\"el\" translate=\"no\" href=\"#!/url=./cpp_ref/class_m_object_list_filter.html#afd930bb75aee6942f8ca2e977ac1d756ad5a92fbdc3dec6dd70ab739999ba1610\">kExclusionList</a> enum value</td><td class=\"entry\"><a class=\"el\" translate=\"no\" href=\"#!/url=./cpp_ref/class_m_object_list_filter.html\">MObjectListFilter</a></td><td class=\"entry\"></td></tr>\n\
  <tr><td class=\"entry\"><a class=\"el\" translate=\"no\" href=\"#!/url=./cpp_ref/class_m_object_list_filter.html#afd930bb75aee6942f8ca2e977ac1d756a73dbd2099ad8bef9f34ba6fce7f5d9ac\">kInclusionList</a> enum value</td><td class=\"entry\"><a class=\"el\" translate=\"no\" href=\"#!/url=./cpp_ref/class_m_object_list_filter.html\">MObjectListFilter</a></td><td class=\"entry\"></td></tr>\n\
  <tr class=\"even\"><td class=\"entry\"><a class=\"el\" translate=\"no\" href=\"#!/url=./cpp_ref/class_m_object_list_filter.html#a4685e4fbf6664911b053f778a3da8090a634ee767a8e90ff4d56e140459cca31f\">kNone</a> enum value</td><td class=\"entry\"><a class=\"el\" translate=\"no\" href=\"#!/url=./cpp_ref/class_m_object_list_filter.html\">MObjectListFilter</a></td><td class=\"entry\"></td></tr>\n\
  <tr><td class=\"entry\"><a class=\"el\" translate=\"no\" href=\"#!/url=./cpp_ref/class_m_object_list_filter.html#afd930bb75aee6942f8ca2e977ac1d756a469f982ae3b9507943dc528679b9361d\">kNumberOfFilterTypes</a> enum value</td><td class=\"entry\"><a class=\"el\" translate=\"no\" href=\"#!/url=./cpp_ref/class_m_object_list_filter.html\">MObjectListFilter</a></td><td class=\"entry\"></td></tr>\n\
  <tr class=\"even\"><td class=\"entry\"><a class=\"el\" translate=\"no\" href=\"#!/url=./cpp_ref/class_m_object_list_filter.html#afd930bb75aee6942f8ca2e977ac1d756\">MFilterType</a> enum name</td><td class=\"entry\"><a class=\"el\" translate=\"no\" href=\"#!/url=./cpp_ref/class_m_object_list_filter.html\">MObjectListFilter</a></td><td class=\"entry\"></td></tr>\n\
  <tr><td class=\"entry\"><a class=\"el\" translate=\"no\" href=\"#!/url=./cpp_ref/class_m_object_list_filter.html#a5833677946b54cf08f7d6e4342ae910d\">MObjectListFilter</a>(const MString &amp;name)</td><td class=\"entry\"><a class=\"el\" translate=\"no\" href=\"#!/url=./cpp_ref/class_m_object_list_filter.html\">MObjectListFilter</a></td><td class=\"entry\"></td></tr>\n\
  <tr class=\"even\"><td class=\"entry\"><a class=\"el\" translate=\"no\" href=\"#!/url=./cpp_ref/class_m_object_list_filter.html#a4685e4fbf6664911b053f778a3da8090\">MSceneUpdateType</a> enum name</td><td class=\"entry\"><a class=\"el\" translate=\"no\" href=\"#!/url=./cpp_ref/class_m_object_list_filter.html\">MObjectListFilter</a></td><td class=\"entry\"></td></tr>\n\
  <tr><td class=\"entry\"><a class=\"el\" translate=\"no\" href=\"#!/url=./cpp_ref/class_m_object_list_filter.html#ac556578d6219804b38b9387f8c344ef7\">name</a>() const </td><td class=\"entry\"><a class=\"el\" translate=\"no\" href=\"#!/url=./cpp_ref/class_m_object_list_filter.html\">MObjectListFilter</a></td><td class=\"entry\"></td></tr>\n\
  <tr class=\"even\"><td class=\"entry\"><a class=\"el\" translate=\"no\" href=\"#!/url=./cpp_ref/class_m_object_list_filter.html#aec608954dbbe18eec3ba6f7836a68b70\">registerFilter</a>(const MObjectListFilter &amp;filter)</td><td class=\"entry\"><a class=\"el\" translate=\"no\" href=\"#!/url=./cpp_ref/class_m_object_list_filter.html\">MObjectListFilter</a></td><td class=\"entry\"><span class=\"mlabel\">static</span></td></tr>\n\
  <tr><td class=\"entry\"><a class=\"el\" translate=\"no\" href=\"#!/url=./cpp_ref/class_m_object_list_filter.html#a887205c9aead78e286eb632237a0f2c5\">requireListUpdate</a>()=0</td><td class=\"entry\"><a class=\"el\" translate=\"no\" href=\"#!/url=./cpp_ref/class_m_object_list_filter.html\">MObjectListFilter</a></td><td class=\"entry\"><span class=\"mlabel\">pure virtual</span></td></tr>\n\
  <tr class=\"even\"><td class=\"entry\"><a class=\"el\" translate=\"no\" href=\"#!/url=./cpp_ref/class_m_object_list_filter.html#af5479d0388c3e6c6678d299fbea86ae9\">setFilterType</a>(MFilterType filterType)</td><td class=\"entry\"><a class=\"el\" translate=\"no\" href=\"#!/url=./cpp_ref/class_m_object_list_filter.html\">MObjectListFilter</a></td><td class=\"entry\"></td></tr>\n\
  <tr><td class=\"entry\"><a class=\"el\" translate=\"no\" href=\"#!/url=./cpp_ref/class_m_object_list_filter.html#adbfe78c43fc2ef5833f2529f4b98df03\">setUIName</a>(const MString &amp;name)</td><td class=\"entry\"><a class=\"el\" translate=\"no\" href=\"#!/url=./cpp_ref/class_m_object_list_filter.html\">MObjectListFilter</a></td><td class=\"entry\"></td></tr>\n\
  <tr class=\"even\"><td class=\"entry\"><a class=\"el\" translate=\"no\" href=\"#!/url=./cpp_ref/class_m_object_list_filter.html#a604548678d9de6e6c0ebe96563b43a3c\">UIname</a>() const </td><td class=\"entry\"><a class=\"el\" translate=\"no\" href=\"#!/url=./cpp_ref/class_m_object_list_filter.html\">MObjectListFilter</a></td><td class=\"entry\"></td></tr>\n\
  <tr><td class=\"entry\"><a class=\"el\" translate=\"no\" href=\"#!/url=./cpp_ref/class_m_object_list_filter.html#af51735ea15ae5538d31ad40be92b712d\">~MObjectListFilter</a>()</td><td class=\"entry\"><a class=\"el\" translate=\"no\" href=\"#!/url=./cpp_ref/class_m_object_list_filter.html\">MObjectListFilter</a></td><td class=\"entry\"><span class=\"mlabel\">virtual</span></td></tr>\n\
</table></div><!-- contents -->\n\
</div><!-- doc-content -->\n\
          <div class=\"footer-block\"><a href=\"../html/ac.cmtdialog.htm\" class=\"comments-anchor\" target=\"_blank\"><span class=\"comments-link\">Please send us your comment about this page</span></a></div></div>\n\
   </div></div></body>\n\
</html>\n\
";