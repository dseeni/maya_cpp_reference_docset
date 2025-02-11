var topic = "<!-- saved from url=(0024)http://docs.autodesk.com -->\n\
<html>\n\
   <head><script src=\"../scripts/yepnope.1.5.4-min.js\" type=\"text/javascript\"></script><script src=\"../scripts/lib/jquery-1.11.1.min.js\" type=\"text/javascript\"></script><meta http-equiv=\"Content-Type\" content=\"text/html; charset=UTF-8\"><meta name=\"product\" content=\"MAYAUL\"><meta name=\"release\" content=\"2018\"><meta name=\"book\" content=\"Developer\"><meta name=\"created\" content=\"2017-06-22\"><meta name=\"topicid\" content=\"GUID-02DEF634-1E7B-48C6-8ACD-2C934CA97887\"><meta name=\"topic-type\" content=\"concept\">\n\
      <title>Member List</title>\n\
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
    cpp_ref_adsk_ref_toc.initNavTree(\'class_m_manip_data-members.html\', tocPrefix);\n\
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
<div class=\"title\">MManipData Member List</div>  </div>\n\
</div><!--header-->\n\
<div class=\"contents\">\n\
\n\
<p>This is the complete list of members for <a class=\"el\" translate=\"no\" href=\"#!/url=./cpp_ref/class_m_manip_data.html\">MManipData</a>, including all inherited members.</p>\n\
<table class=\"directory\">\n\
  <tr class=\"even\"><td class=\"entry\"><a class=\"el\" translate=\"no\" href=\"#!/url=./cpp_ref/class_m_manip_data.html#addba4304454416a12b045b32c31a74f9\">asBool</a>() const </td><td class=\"entry\"><a class=\"el\" translate=\"no\" href=\"#!/url=./cpp_ref/class_m_manip_data.html\">MManipData</a></td><td class=\"entry\"></td></tr>\n\
  <tr><td class=\"entry\"><a class=\"el\" translate=\"no\" href=\"#!/url=./cpp_ref/class_m_manip_data.html#ae44088c92a012eb256e3c45ed35a32c1\">asDouble</a>() const </td><td class=\"entry\"><a class=\"el\" translate=\"no\" href=\"#!/url=./cpp_ref/class_m_manip_data.html\">MManipData</a></td><td class=\"entry\"></td></tr>\n\
  <tr class=\"even\"><td class=\"entry\"><a class=\"el\" translate=\"no\" href=\"#!/url=./cpp_ref/class_m_manip_data.html#a4ee970e89a6bacad47332ec981b459e3\">asFloat</a>() const </td><td class=\"entry\"><a class=\"el\" translate=\"no\" href=\"#!/url=./cpp_ref/class_m_manip_data.html\">MManipData</a></td><td class=\"entry\"></td></tr>\n\
  <tr><td class=\"entry\"><a class=\"el\" translate=\"no\" href=\"#!/url=./cpp_ref/class_m_manip_data.html#acaef84acf37a7537f7ecbc8a9d0d05e7\">asLong</a>() const </td><td class=\"entry\"><a class=\"el\" translate=\"no\" href=\"#!/url=./cpp_ref/class_m_manip_data.html\">MManipData</a></td><td class=\"entry\"></td></tr>\n\
  <tr class=\"even\"><td class=\"entry\"><a class=\"el\" translate=\"no\" href=\"#!/url=./cpp_ref/class_m_manip_data.html#a517e8f5b6d09d2cae2c38bb103f23f23\">asMObject</a>() const </td><td class=\"entry\"><a class=\"el\" translate=\"no\" href=\"#!/url=./cpp_ref/class_m_manip_data.html\">MManipData</a></td><td class=\"entry\"></td></tr>\n\
  <tr><td class=\"entry\"><a class=\"el\" translate=\"no\" href=\"#!/url=./cpp_ref/class_m_manip_data.html#a334d768e0a52d7c2b051f542ceb4d566\">asShort</a>() const </td><td class=\"entry\"><a class=\"el\" translate=\"no\" href=\"#!/url=./cpp_ref/class_m_manip_data.html\">MManipData</a></td><td class=\"entry\"></td></tr>\n\
  <tr class=\"even\"><td class=\"entry\"><a class=\"el\" translate=\"no\" href=\"#!/url=./cpp_ref/class_m_manip_data.html#a33a3313205686174bef095f523f9408b\">asUnsigned</a>() const </td><td class=\"entry\"><a class=\"el\" translate=\"no\" href=\"#!/url=./cpp_ref/class_m_manip_data.html\">MManipData</a></td><td class=\"entry\"></td></tr>\n\
  <tr><td class=\"entry\"><a class=\"el\" translate=\"no\" href=\"#!/url=./cpp_ref/class_m_manip_data.html#a774cd5d8fbebe8e7ed82a5aa587d1f04\">className</a>()</td><td class=\"entry\"><a class=\"el\" translate=\"no\" href=\"#!/url=./cpp_ref/class_m_manip_data.html\">MManipData</a></td><td class=\"entry\"><span class=\"mlabel\">static</span></td></tr>\n\
  <tr class=\"even\"><td class=\"entry\"><a class=\"el\" translate=\"no\" href=\"#!/url=./cpp_ref/class_m_manip_data.html#a1173815e97366bb5478b113f3bdb96f4\">isSimple</a>() const </td><td class=\"entry\"><a class=\"el\" translate=\"no\" href=\"#!/url=./cpp_ref/class_m_manip_data.html\">MManipData</a></td><td class=\"entry\"></td></tr>\n\
  <tr><td class=\"entry\"><a class=\"el\" translate=\"no\" href=\"#!/url=./cpp_ref/class_m_manip_data.html#a6905338020350cb38860a41c1071a880\">MManipData</a>()</td><td class=\"entry\"><a class=\"el\" translate=\"no\" href=\"#!/url=./cpp_ref/class_m_manip_data.html\">MManipData</a></td><td class=\"entry\"></td></tr>\n\
  <tr class=\"even\"><td class=\"entry\"><a class=\"el\" translate=\"no\" href=\"#!/url=./cpp_ref/class_m_manip_data.html#a599378c2e7edc0a429b9df0ad360c786\">MManipData</a>(const MManipData &amp;)</td><td class=\"entry\"><a class=\"el\" translate=\"no\" href=\"#!/url=./cpp_ref/class_m_manip_data.html\">MManipData</a></td><td class=\"entry\"></td></tr>\n\
  <tr><td class=\"entry\"><a class=\"el\" translate=\"no\" href=\"#!/url=./cpp_ref/class_m_manip_data.html#a0f0bd7207375fb317907899dfd099527\">MManipData</a>(bool)</td><td class=\"entry\"><a class=\"el\" translate=\"no\" href=\"#!/url=./cpp_ref/class_m_manip_data.html\">MManipData</a></td><td class=\"entry\"></td></tr>\n\
  <tr class=\"even\"><td class=\"entry\"><a class=\"el\" translate=\"no\" href=\"#!/url=./cpp_ref/class_m_manip_data.html#a0097fb4f273f2fc45c974df1250c8963\">MManipData</a>(short)</td><td class=\"entry\"><a class=\"el\" translate=\"no\" href=\"#!/url=./cpp_ref/class_m_manip_data.html\">MManipData</a></td><td class=\"entry\"></td></tr>\n\
  <tr><td class=\"entry\"><a class=\"el\" translate=\"no\" href=\"#!/url=./cpp_ref/class_m_manip_data.html#a1e9e95f22cd9ca34e7017695a0ddb2fe\">MManipData</a>(int)</td><td class=\"entry\"><a class=\"el\" translate=\"no\" href=\"#!/url=./cpp_ref/class_m_manip_data.html\">MManipData</a></td><td class=\"entry\"></td></tr>\n\
  <tr class=\"even\"><td class=\"entry\"><a class=\"el\" translate=\"no\" href=\"#!/url=./cpp_ref/class_m_manip_data.html#a648cdef50a06edf7c89c0d01bc12d913\">MManipData</a>(unsigned int)</td><td class=\"entry\"><a class=\"el\" translate=\"no\" href=\"#!/url=./cpp_ref/class_m_manip_data.html\">MManipData</a></td><td class=\"entry\"></td></tr>\n\
  <tr><td class=\"entry\"><a class=\"el\" translate=\"no\" href=\"#!/url=./cpp_ref/class_m_manip_data.html#af72bfdb75ef37908829620fe24d9c284\">MManipData</a>(float)</td><td class=\"entry\"><a class=\"el\" translate=\"no\" href=\"#!/url=./cpp_ref/class_m_manip_data.html\">MManipData</a></td><td class=\"entry\"></td></tr>\n\
  <tr class=\"even\"><td class=\"entry\"><a class=\"el\" translate=\"no\" href=\"#!/url=./cpp_ref/class_m_manip_data.html#a6595792ff51ab3990cc502e2c446e70a\">MManipData</a>(double)</td><td class=\"entry\"><a class=\"el\" translate=\"no\" href=\"#!/url=./cpp_ref/class_m_manip_data.html\">MManipData</a></td><td class=\"entry\"></td></tr>\n\
  <tr><td class=\"entry\"><a class=\"el\" translate=\"no\" href=\"#!/url=./cpp_ref/class_m_manip_data.html#a96e7a8189a0cdae36d9ef565d0a011b6\">MManipData</a>(const MObject &amp;)</td><td class=\"entry\"><a class=\"el\" translate=\"no\" href=\"#!/url=./cpp_ref/class_m_manip_data.html\">MManipData</a></td><td class=\"entry\"></td></tr>\n\
  <tr class=\"even\"><td class=\"entry\"><a class=\"el\" translate=\"no\" href=\"#!/url=./cpp_ref/class_m_manip_data.html#a10dcac00064576057381639ac9d614f2\">operator=</a>(const MManipData &amp;)</td><td class=\"entry\"><a class=\"el\" translate=\"no\" href=\"#!/url=./cpp_ref/class_m_manip_data.html\">MManipData</a></td><td class=\"entry\"></td></tr>\n\
  <tr><td class=\"entry\"><a class=\"el\" translate=\"no\" href=\"#!/url=./cpp_ref/class_m_manip_data.html#a324915873dad8d4b1010b74f2ac8368f\">operator=</a>(bool)</td><td class=\"entry\"><a class=\"el\" translate=\"no\" href=\"#!/url=./cpp_ref/class_m_manip_data.html\">MManipData</a></td><td class=\"entry\"></td></tr>\n\
  <tr class=\"even\"><td class=\"entry\"><a class=\"el\" translate=\"no\" href=\"#!/url=./cpp_ref/class_m_manip_data.html#a365af9567ca7eb77e82967df4225f4b5\">operator=</a>(short)</td><td class=\"entry\"><a class=\"el\" translate=\"no\" href=\"#!/url=./cpp_ref/class_m_manip_data.html\">MManipData</a></td><td class=\"entry\"></td></tr>\n\
  <tr><td class=\"entry\"><a class=\"el\" translate=\"no\" href=\"#!/url=./cpp_ref/class_m_manip_data.html#a06ed2aeefbdc1aa3c0d6a286a5e183a1\">operator=</a>(int)</td><td class=\"entry\"><a class=\"el\" translate=\"no\" href=\"#!/url=./cpp_ref/class_m_manip_data.html\">MManipData</a></td><td class=\"entry\"></td></tr>\n\
  <tr class=\"even\"><td class=\"entry\"><a class=\"el\" translate=\"no\" href=\"#!/url=./cpp_ref/class_m_manip_data.html#ada7e14af600e5e4fb2123029a717008a\">operator=</a>(unsigned int)</td><td class=\"entry\"><a class=\"el\" translate=\"no\" href=\"#!/url=./cpp_ref/class_m_manip_data.html\">MManipData</a></td><td class=\"entry\"></td></tr>\n\
  <tr><td class=\"entry\"><a class=\"el\" translate=\"no\" href=\"#!/url=./cpp_ref/class_m_manip_data.html#ac5fd4587312be475a15389c0397166cf\">operator=</a>(float)</td><td class=\"entry\"><a class=\"el\" translate=\"no\" href=\"#!/url=./cpp_ref/class_m_manip_data.html\">MManipData</a></td><td class=\"entry\"></td></tr>\n\
  <tr class=\"even\"><td class=\"entry\"><a class=\"el\" translate=\"no\" href=\"#!/url=./cpp_ref/class_m_manip_data.html#a571131f36bad3e1dc60395594534dfb2\">operator=</a>(double)</td><td class=\"entry\"><a class=\"el\" translate=\"no\" href=\"#!/url=./cpp_ref/class_m_manip_data.html\">MManipData</a></td><td class=\"entry\"></td></tr>\n\
  <tr><td class=\"entry\"><a class=\"el\" translate=\"no\" href=\"#!/url=./cpp_ref/class_m_manip_data.html#a64bc875eed5dc7bac3f7483e1dfaf526\">operator=</a>(const MObject &amp;)</td><td class=\"entry\"><a class=\"el\" translate=\"no\" href=\"#!/url=./cpp_ref/class_m_manip_data.html\">MManipData</a></td><td class=\"entry\"></td></tr>\n\
  <tr class=\"even\"><td class=\"entry\"><a class=\"el\" translate=\"no\" href=\"#!/url=./cpp_ref/class_m_manip_data.html#a38d7710fb237d003c2caa8e76fa075f6\">~MManipData</a>()</td><td class=\"entry\"><a class=\"el\" translate=\"no\" href=\"#!/url=./cpp_ref/class_m_manip_data.html\">MManipData</a></td><td class=\"entry\"></td></tr>\n\
</table></div><!-- contents -->\n\
</div><!-- doc-content -->\n\
          <div class=\"footer-block\"><a href=\"../html/ac.cmtdialog.htm\" class=\"comments-anchor\" target=\"_blank\"><span class=\"comments-link\">Please send us your comment about this page</span></a></div></div>\n\
   </div></div></body>\n\
</html>\n\
";