var topic = "<!-- saved from url=(0024)http://docs.autodesk.com -->\n\
<html>\n\
   <head><script src=\"../scripts/yepnope.1.5.4-min.js\" type=\"text/javascript\"></script><script src=\"../scripts/lib/jquery-1.11.1.min.js\" type=\"text/javascript\"></script><meta http-equiv=\"Content-Type\" content=\"text/html; charset=UTF-8\"><meta name=\"product\" content=\"MAYAUL\"><meta name=\"release\" content=\"2017\"><meta name=\"book\" content=\"Developer\"><meta name=\"created\" content=\"2016-06-16\"><meta name=\"topicid\" content=\"GUID-02DEF634-1E7B-48C6-8ACD-2C934CA97887\"><meta name=\"topic-type\" content=\"concept\">\n\
      <title>Checkpointed Class Reference</title>\n\
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
    cpp_ref_adsk_ref_toc.initNavTree(\'classadsk_1_1_checkpointed.html\', tocPrefix);\n\
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
            <h1>Checkpointed Class Reference</h1>\n\
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
<div class=\"title\">Checkpointed Class Reference</div>  </div>\n\
<div class=\"summary\">\n\
<a href=\"classadsk_1_1_checkpointed.html#pub-methods\">Public Member Functions</a> &#124;\n\
<a href=\"classadsk_1_1_checkpointed.html#pub-static-methods\">Static Public Member Functions</a> &#124;\n\
<a href=\"classadsk_1_1_checkpointed.html#pro-methods\">Protected Member Functions</a> &#124;\n\
<a href=\"classadsk_1_1_checkpointed.html#pro-attribs\">Protected Attributes</a> &#124;\n\
<a href=\"classadsk_1_1_checkpointed.html#pro-static-attribs\">Static Protected Attributes</a>  </div></div><!--header-->\n\
<div class=\"contents\">\n\
\n\
<p><code>#include &lt;adskCheckpointed.h&gt;</code></p>\n\
<a name=\"details\" id=\"details\"></a><h2 class=\"groupheader\">Class Description</h2>\n\
<div class=\"textblock\"><p>Class implementing ability to keep track of when objects are changed. </p>\n\
<p>Often the question arises \"has this object changed since I did X?\". Using this class gives you the ability to create a unique monotonic ID to identify how recently something has changed, usually accompanied by the queryer remembering a checkpoint value to compare against.</p>\n\
<p>This class must be a mixin to the class being tracked. The important thing is to insert this call at every point that object is changed:</p>\n\
<div class=\"fragment\"><div class=\"line\"><a class=\"code\" href=\"#!/url=./cpp_ref/classadsk_1_1_checkpointed.html#aa3d7af44c8a88ceb6b7681e8575b1c2e\">objectChanged</a>();</div>\n\
</div><!-- fragment --><p>Since the virtual function table isn\'t correct until the top level class constructor is called unfortunately you also have to insert checkpoint updates into the constructors and destructor of your class. The macros</p>\n\
<div class=\"fragment\"><div class=\"line\">CheckpointCreate( MyClass );</div>\n\
<div class=\"line\">CheckpointDestroy( MyClass );</div>\n\
</div><!-- fragment --><p>will do that for you.</p>\n\
<p>Object changes will also flag the class as changed but if any other changes happen which apply to the class as a whole they can be tagged with:</p>\n\
<div class=\"fragment\"><div class=\"line\">classChanged();</div>\n\
</div><!-- fragment --><p>Example 1: An external object handler wishes to know when any object of class type MyObject was changed.</p>\n\
<div class=\"fragment\"><div class=\"line\"><span class=\"keyword\">class </span>MyObject : <span class=\"keyword\">public</span> <a class=\"code\" href=\"#!/url=./cpp_ref/classadsk_1_1_checkpointed.html\">adsk::Checkpointed</a> {</div>\n\
<div class=\"line\">...</div>\n\
<div class=\"line\">};</div>\n\
<div class=\"line\">MyObject::MyObject()</div>\n\
<div class=\"line\">    { CheckpointCreate(MyObject); ... }</div>\n\
<div class=\"line\">MyObject::~MyObject()</div>\n\
<div class=\"line\">    { CheckpointDestroy(MyObject); ... }</div>\n\
<div class=\"line\"><span class=\"keywordtype\">void</span> MyObject::anyMethodChangingAnObject()</div>\n\
<div class=\"line\">    { <a class=\"code\" href=\"#!/url=./cpp_ref/classadsk_1_1_checkpointed.html#aa3d7af44c8a88ceb6b7681e8575b1c2e\">objectChanged</a>(); doTheChanges(); }</div>\n\
<div class=\"line\"></div>\n\
<div class=\"line\">... in the handler ...</div>\n\
<div class=\"line\">adsk::Checkpoint <a class=\"code\" href=\"#!/url=./cpp_ref/classadsk_1_1_checkpointed.html#a5ffd4a05ad6ea8f302347779ba070b28\">checkpoint</a> = MyObject::sClassCheckpoint();</div>\n\
<div class=\"line\">doHandlerStuff();</div>\n\
<div class=\"line\"><span class=\"keywordflow\">if</span>( MyObject::sClassChangedSinceCheckpoint( <a class=\"code\" href=\"#!/url=./cpp_ref/classadsk_1_1_checkpointed.html#a5ffd4a05ad6ea8f302347779ba070b28\">checkpoint</a> ) )</div>\n\
<div class=\"line\">    doHandlerChangedStuff();</div>\n\
</div><!-- fragment --><p>Note that since construction and destruction of objects count as changes to \"the set of\" MyObject they also get the edit flag updated.</p>\n\
<p>Example 2: An external object handler wishes to know when a specific object has been changed.</p>\n\
<div class=\"fragment\"><div class=\"line\"><span class=\"keyword\">class </span>MyObject : <span class=\"keyword\">public</span> <a class=\"code\" href=\"#!/url=./cpp_ref/classadsk_1_1_checkpointed.html\">adsk::Checkpointed</a> {</div>\n\
<div class=\"line\">...</div>\n\
<div class=\"line\">};</div>\n\
<div class=\"line\">MyObject::MyObject()</div>\n\
<div class=\"line\">    { CheckpointCreate(MyObject); ... }</div>\n\
<div class=\"line\">MyObject::~MyObject()</div>\n\
<div class=\"line\">    { CheckpointDestroy(MyObject); ... }</div>\n\
<div class=\"line\"><span class=\"keywordtype\">void</span> MyObject::anyMethodChangingAnObject()</div>\n\
<div class=\"line\">    { <a class=\"code\" href=\"#!/url=./cpp_ref/classadsk_1_1_checkpointed.html#aa3d7af44c8a88ceb6b7681e8575b1c2e\">objectChanged</a>(); doTheChanges(); }</div>\n\
<div class=\"line\"></div>\n\
<div class=\"line\">... in the handler ...</div>\n\
<div class=\"line\">MyObject mObj;</div>\n\
<div class=\"line\"><a class=\"code\" href=\"#!/url=./cpp_ref/namespaceadsk.html#a1016f038c449137ecf4fef726cc3f444\">adsk::Checkpoint</a> <a class=\"code\" href=\"#!/url=./cpp_ref/classadsk_1_1_checkpointed.html#a5ffd4a05ad6ea8f302347779ba070b28\">checkpoint</a> = myObj.checkpoint();</div>\n\
<div class=\"line\">doObjectStuff( mObj );</div>\n\
<div class=\"line\"><span class=\"keywordflow\">if</span>( mObj.changedSinceCheckpoint( checkpoint ) )</div>\n\
<div class=\"line\">    doObjectChangedStuff();</div>\n\
</div><!-- fragment --> </div><div id=\"dynsection-0\" onclick=\"return toggleVisibility(this)\" class=\"dynheader closed\" style=\"cursor:pointer;\">\n\
  <img id=\"dynsection-0-trigger\" src=\"cpp_ref/closed.png\" alt=\"+\"> Inheritance diagram for Checkpointed:</div>\n\
<div id=\"dynsection-0-summary\" class=\"dynsummary\" style=\"display:block;\">\n\
</div>\n\
<div id=\"dynsection-0-content\" class=\"dyncontent\" style=\"display:none;\">\n\
 <div class=\"center\">\n\
  <img src=\"cpp_ref/classadsk_1_1_checkpointed.png\" usemap=\"#Checkpointed_map\" alt=\"\">\n\
  <map id=\"Checkpointed_map\" name=\"Checkpointed_map\">\n\
<area href=\"classadsk_1_1_data_1_1_structure.html\" title=\"Class handling the definition of the structure of a piece of data. \" alt=\"Structure\" shape=\"rect\" coords=\"0,56,89,80\">\n\
</map>\n\
 </div></div>\n\
<table class=\"memberdecls\">\n\
<tr class=\"heading\"><td colspan=\"2\"><h2 class=\"groupheader\"><a name=\"pub-methods\"></a>\n\
Public Member Functions</h2></td></tr>\n\
<tr class=\"memitem:a5ffd4a05ad6ea8f302347779ba070b28\"><td class=\"memItemLeft\" translate=\"no\" align=\"right\" valign=\"top\"><a class=\"el\" translate=\"no\" href=\"#!/url=./cpp_ref/namespaceadsk.html#a1016f038c449137ecf4fef726cc3f444\">Checkpoint</a>&#160;</td><td class=\"memItemRight\" translate=\"no\" valign=\"bottom\"><a class=\"el\" translate=\"no\" href=\"#!/url=./cpp_ref/classadsk_1_1_checkpointed.html#a5ffd4a05ad6ea8f302347779ba070b28\">checkpoint</a> () const </td></tr>\n\
<tr class=\"memdesc:a5ffd4a05ad6ea8f302347779ba070b28\"><td class=\"mdescLeft\">&#160;</td><td class=\"mdescRight\">Retrieve the current object checkpoint state.  <a href=\"classadsk_1_1_checkpointed.html#a5ffd4a05ad6ea8f302347779ba070b28\">More...</a><br></td></tr>\n\
<tr class=\"separator:a5ffd4a05ad6ea8f302347779ba070b28\"><td class=\"memSeparator\" colspan=\"2\">&#160;</td></tr>\n\
<tr class=\"memitem:ace27187efc378157330693b091679767\"><td class=\"memItemLeft\" translate=\"no\" align=\"right\" valign=\"top\">bool&#160;</td><td class=\"memItemRight\" translate=\"no\" valign=\"bottom\"><a class=\"el\" translate=\"no\" href=\"#!/url=./cpp_ref/classadsk_1_1_checkpointed.html#ace27187efc378157330693b091679767\">changedSinceCheckpoint</a> (const <a class=\"el\" translate=\"no\" href=\"#!/url=./cpp_ref/namespaceadsk.html#a1016f038c449137ecf4fef726cc3f444\">Checkpoint</a> &amp;check) const </td></tr>\n\
<tr class=\"memdesc:ace27187efc378157330693b091679767\"><td class=\"mdescLeft\">&#160;</td><td class=\"mdescRight\">Determine if the object has been altered since the given checkpoint.  <a href=\"classadsk_1_1_checkpointed.html#ace27187efc378157330693b091679767\">More...</a><br></td></tr>\n\
<tr class=\"separator:ace27187efc378157330693b091679767\"><td class=\"memSeparator\" colspan=\"2\">&#160;</td></tr>\n\
<tr class=\"memitem:afdd56685ecc84a841061ca25172fb1ce\"><td class=\"memItemLeft\" translate=\"no\" align=\"right\" valign=\"top\"><a class=\"anchor\" id=\"afdd56685ecc84a841061ca25172fb1ce\"></a>\n\
&#160;</td><td class=\"memItemRight\" translate=\"no\" valign=\"bottom\"><a class=\"el\" translate=\"no\" href=\"#!/url=./cpp_ref/classadsk_1_1_checkpointed.html#afdd56685ecc84a841061ca25172fb1ce\">Checkpointed</a> ()</td></tr>\n\
<tr class=\"memdesc:afdd56685ecc84a841061ca25172fb1ce\"><td class=\"mdescLeft\">&#160;</td><td class=\"mdescRight\">Default constructor - initialize counter. <br></td></tr>\n\
<tr class=\"separator:afdd56685ecc84a841061ca25172fb1ce\"><td class=\"memSeparator\" colspan=\"2\">&#160;</td></tr>\n\
<tr class=\"memitem:aa541711c8e802c05b1d5388afc590cd7\"><td class=\"memItemLeft\" translate=\"no\" align=\"right\" valign=\"top\"><a class=\"anchor\" id=\"aa541711c8e802c05b1d5388afc590cd7\"></a>\n\
virtual&#160;</td><td class=\"memItemRight\" translate=\"no\" valign=\"bottom\"><a class=\"el\" translate=\"no\" href=\"#!/url=./cpp_ref/classadsk_1_1_checkpointed.html#aa541711c8e802c05b1d5388afc590cd7\">~Checkpointed</a> ()</td></tr>\n\
<tr class=\"memdesc:aa541711c8e802c05b1d5388afc590cd7\"><td class=\"mdescLeft\">&#160;</td><td class=\"mdescRight\">Destructor, updates checkpoint count for the class. <br></td></tr>\n\
<tr class=\"separator:aa541711c8e802c05b1d5388afc590cd7\"><td class=\"memSeparator\" colspan=\"2\">&#160;</td></tr>\n\
<tr class=\"memitem:ae66f59dd112786cbe0c85fa9365637a0\"><td class=\"memItemLeft\" translate=\"no\" align=\"right\" valign=\"top\">&#160;</td><td class=\"memItemRight\" translate=\"no\" valign=\"bottom\"><a class=\"el\" translate=\"no\" href=\"#!/url=./cpp_ref/classadsk_1_1_checkpointed.html#ae66f59dd112786cbe0c85fa9365637a0\">Checkpointed</a> (const <a class=\"el\" translate=\"no\" href=\"#!/url=./cpp_ref/classadsk_1_1_checkpointed.html\">Checkpointed</a> &amp;rhs)</td></tr>\n\
<tr class=\"memdesc:ae66f59dd112786cbe0c85fa9365637a0\"><td class=\"mdescLeft\">&#160;</td><td class=\"mdescRight\">Copy constructor - counter starts where copy left off.  <a href=\"classadsk_1_1_checkpointed.html#ae66f59dd112786cbe0c85fa9365637a0\">More...</a><br></td></tr>\n\
<tr class=\"separator:ae66f59dd112786cbe0c85fa9365637a0\"><td class=\"memSeparator\" colspan=\"2\">&#160;</td></tr>\n\
<tr class=\"memitem:a22b02451aae941a4d24b76bca409fb67\"><td class=\"memItemLeft\" translate=\"no\" align=\"right\" valign=\"top\"><a class=\"el\" translate=\"no\" href=\"#!/url=./cpp_ref/classadsk_1_1_checkpointed.html\">Checkpointed</a> &amp;&#160;</td><td class=\"memItemRight\" translate=\"no\" valign=\"bottom\"><a class=\"el\" translate=\"no\" href=\"#!/url=./cpp_ref/classadsk_1_1_checkpointed.html#a22b02451aae941a4d24b76bca409fb67\">operator=</a> (const <a class=\"el\" translate=\"no\" href=\"#!/url=./cpp_ref/classadsk_1_1_checkpointed.html\">Checkpointed</a> &amp;rhs)</td></tr>\n\
<tr class=\"memdesc:a22b02451aae941a4d24b76bca409fb67\"><td class=\"mdescLeft\">&#160;</td><td class=\"mdescRight\">Assignment operator and copy constructor are just to allow objects with counters embedded or derived to copy properly.  <a href=\"classadsk_1_1_checkpointed.html#a22b02451aae941a4d24b76bca409fb67\">More...</a><br></td></tr>\n\
<tr class=\"separator:a22b02451aae941a4d24b76bca409fb67\"><td class=\"memSeparator\" colspan=\"2\">&#160;</td></tr>\n\
</table><table class=\"memberdecls\">\n\
<tr class=\"heading\"><td colspan=\"2\"><h2 class=\"groupheader\"><a name=\"pub-static-methods\"></a>\n\
Static Public Member Functions</h2></td></tr>\n\
<tr class=\"memitem:a67865c56868e2325a9d8089370cc9e7c\"><td class=\"memItemLeft\" translate=\"no\" align=\"right\" valign=\"top\">static <a class=\"el\" translate=\"no\" href=\"#!/url=./cpp_ref/namespaceadsk.html#a1016f038c449137ecf4fef726cc3f444\">Checkpoint</a>&#160;</td><td class=\"memItemRight\" translate=\"no\" valign=\"bottom\"><a class=\"el\" translate=\"no\" href=\"#!/url=./cpp_ref/classadsk_1_1_checkpointed.html#a67865c56868e2325a9d8089370cc9e7c\">globalCheckpoint</a> ()</td></tr>\n\
<tr class=\"memdesc:a67865c56868e2325a9d8089370cc9e7c\"><td class=\"mdescLeft\">&#160;</td><td class=\"mdescRight\">Retrieve the global checkpoint.  <a href=\"classadsk_1_1_checkpointed.html#a67865c56868e2325a9d8089370cc9e7c\">More...</a><br></td></tr>\n\
<tr class=\"separator:a67865c56868e2325a9d8089370cc9e7c\"><td class=\"memSeparator\" colspan=\"2\">&#160;</td></tr>\n\
<tr class=\"memitem:a269118d26e73eeb90ad439f954d7e4a2\"><td class=\"memItemLeft\" translate=\"no\" align=\"right\" valign=\"top\">static <a class=\"el\" translate=\"no\" href=\"#!/url=./cpp_ref/namespaceadsk.html#a1016f038c449137ecf4fef726cc3f444\">Checkpoint</a>&#160;</td><td class=\"memItemRight\" translate=\"no\" valign=\"bottom\"><a class=\"el\" translate=\"no\" href=\"#!/url=./cpp_ref/classadsk_1_1_checkpointed.html#a269118d26e73eeb90ad439f954d7e4a2\">globalChange</a> ()</td></tr>\n\
<tr class=\"memdesc:a269118d26e73eeb90ad439f954d7e4a2\"><td class=\"mdescLeft\">&#160;</td><td class=\"mdescRight\">Update the global checkpoint and return the new value.  <a href=\"classadsk_1_1_checkpointed.html#a269118d26e73eeb90ad439f954d7e4a2\">More...</a><br></td></tr>\n\
<tr class=\"separator:a269118d26e73eeb90ad439f954d7e4a2\"><td class=\"memSeparator\" colspan=\"2\">&#160;</td></tr>\n\
<tr class=\"memitem:a724c6f9f787d497a1abee3654922637b\"><td class=\"memItemLeft\" translate=\"no\" align=\"right\" valign=\"top\">static bool&#160;</td><td class=\"memItemRight\" translate=\"no\" valign=\"bottom\"><a class=\"el\" translate=\"no\" href=\"#!/url=./cpp_ref/classadsk_1_1_checkpointed.html#a724c6f9f787d497a1abee3654922637b\">Debug</a> (const <a class=\"el\" translate=\"no\" href=\"#!/url=./cpp_ref/classadsk_1_1_checkpointed.html\">Checkpointed</a> *me, <a class=\"el\" translate=\"no\" href=\"#!/url=./cpp_ref/classadsk_1_1_debug_1_1_print.html\">Debug::Print</a> &amp;request)</td></tr>\n\
<tr class=\"memdesc:a724c6f9f787d497a1abee3654922637b\"><td class=\"mdescLeft\">&#160;</td><td class=\"mdescRight\">Answer a Print request for a <a class=\"el\" translate=\"no\" href=\"#!/url=./cpp_ref/classadsk_1_1_checkpointed.html\" title=\"Class implementing ability to keep track of when objects are changed. \">Checkpointed</a> object.  <a href=\"classadsk_1_1_checkpointed.html#a724c6f9f787d497a1abee3654922637b\">More...</a><br></td></tr>\n\
<tr class=\"separator:a724c6f9f787d497a1abee3654922637b\"><td class=\"memSeparator\" colspan=\"2\">&#160;</td></tr>\n\
<tr class=\"memitem:a223c871dd10da8872e1deadca5983966\"><td class=\"memItemLeft\" translate=\"no\" align=\"right\" valign=\"top\">static bool&#160;</td><td class=\"memItemRight\" translate=\"no\" valign=\"bottom\"><a class=\"el\" translate=\"no\" href=\"#!/url=./cpp_ref/classadsk_1_1_checkpointed.html#a223c871dd10da8872e1deadca5983966\">Debug</a> (const <a class=\"el\" translate=\"no\" href=\"#!/url=./cpp_ref/classadsk_1_1_checkpointed.html\">Checkpointed</a> *me, <a class=\"el\" translate=\"no\" href=\"#!/url=./cpp_ref/classadsk_1_1_debug_1_1_footprint.html\">Debug::Footprint</a> &amp;request)</td></tr>\n\
<tr class=\"memdesc:a223c871dd10da8872e1deadca5983966\"><td class=\"mdescLeft\">&#160;</td><td class=\"mdescRight\">Answer a footprint request for an <a class=\"el\" translate=\"no\" href=\"#!/url=./cpp_ref/classadsk_1_1_checkpointed.html\" title=\"Class implementing ability to keep track of when objects are changed. \">Checkpointed</a> object.  <a href=\"classadsk_1_1_checkpointed.html#a223c871dd10da8872e1deadca5983966\">More...</a><br></td></tr>\n\
<tr class=\"separator:a223c871dd10da8872e1deadca5983966\"><td class=\"memSeparator\" colspan=\"2\">&#160;</td></tr>\n\
</table><table class=\"memberdecls\">\n\
<tr class=\"heading\"><td colspan=\"2\"><h2 class=\"groupheader\"><a name=\"pro-methods\"></a>\n\
Protected Member Functions</h2></td></tr>\n\
<tr class=\"memitem:aa3d7af44c8a88ceb6b7681e8575b1c2e\"><td class=\"memItemLeft\" translate=\"no\" align=\"right\" valign=\"top\"><a class=\"el\" translate=\"no\" href=\"#!/url=./cpp_ref/namespaceadsk.html#a1016f038c449137ecf4fef726cc3f444\">Checkpoint</a>&#160;</td><td class=\"memItemRight\" translate=\"no\" valign=\"bottom\"><a class=\"el\" translate=\"no\" href=\"#!/url=./cpp_ref/classadsk_1_1_checkpointed.html#aa3d7af44c8a88ceb6b7681e8575b1c2e\">objectChanged</a> ()</td></tr>\n\
<tr class=\"memdesc:aa3d7af44c8a88ceb6b7681e8575b1c2e\"><td class=\"mdescLeft\">&#160;</td><td class=\"mdescRight\">Call this whenever an object changes, increments the class and object checkpoint counters.  <a href=\"classadsk_1_1_checkpointed.html#aa3d7af44c8a88ceb6b7681e8575b1c2e\">More...</a><br></td></tr>\n\
<tr class=\"separator:aa3d7af44c8a88ceb6b7681e8575b1c2e\"><td class=\"memSeparator\" colspan=\"2\">&#160;</td></tr>\n\
</table><table class=\"memberdecls\">\n\
<tr class=\"heading\"><td colspan=\"2\"><h2 class=\"groupheader\"><a name=\"pro-attribs\"></a>\n\
Protected Attributes</h2></td></tr>\n\
<tr class=\"memitem:a523dfd647ebc2adedbbec7a34fc397a6\"><td class=\"memItemLeft\" translate=\"no\" align=\"right\" valign=\"top\"><a class=\"anchor\" id=\"a523dfd647ebc2adedbbec7a34fc397a6\"></a>\n\
<a class=\"el\" translate=\"no\" href=\"#!/url=./cpp_ref/namespaceadsk.html#a1016f038c449137ecf4fef726cc3f444\">Checkpoint</a>&#160;</td><td class=\"memItemRight\" translate=\"no\" valign=\"bottom\"><a class=\"el\" translate=\"no\" href=\"#!/url=./cpp_ref/classadsk_1_1_checkpointed.html#a523dfd647ebc2adedbbec7a34fc397a6\">fCheckpoint</a></td></tr>\n\
<tr class=\"memdesc:a523dfd647ebc2adedbbec7a34fc397a6\"><td class=\"mdescLeft\">&#160;</td><td class=\"mdescRight\">ID updating when the object changes. <br></td></tr>\n\
<tr class=\"separator:a523dfd647ebc2adedbbec7a34fc397a6\"><td class=\"memSeparator\" colspan=\"2\">&#160;</td></tr>\n\
</table><table class=\"memberdecls\">\n\
<tr class=\"heading\"><td colspan=\"2\"><h2 class=\"groupheader\"><a name=\"pro-static-attribs\"></a>\n\
Static Protected Attributes</h2></td></tr>\n\
<tr class=\"memitem:a0d98b32d84f3d41380ca4b066755b170\"><td class=\"memItemLeft\" translate=\"no\" align=\"right\" valign=\"top\">static <a class=\"el\" translate=\"no\" href=\"#!/url=./cpp_ref/namespaceadsk.html#a1016f038c449137ecf4fef726cc3f444\">Checkpoint</a>&#160;</td><td class=\"memItemRight\" translate=\"no\" valign=\"bottom\"><a class=\"el\" translate=\"no\" href=\"#!/url=./cpp_ref/classadsk_1_1_checkpointed.html#a0d98b32d84f3d41380ca4b066755b170\">sfGlobalCheckpoint</a> = 0</td></tr>\n\
<tr class=\"memdesc:a0d98b32d84f3d41380ca4b066755b170\"><td class=\"mdescLeft\">&#160;</td><td class=\"mdescRight\">Global monotonic checkpoint.  <a href=\"classadsk_1_1_checkpointed.html#a0d98b32d84f3d41380ca4b066755b170\">More...</a><br></td></tr>\n\
<tr class=\"separator:a0d98b32d84f3d41380ca4b066755b170\"><td class=\"memSeparator\" colspan=\"2\">&#160;</td></tr>\n\
</table>\n\
<h2 class=\"groupheader\">Constructor &amp; Destructor Documentation</h2>\n\
<a class=\"anchor\" id=\"ae66f59dd112786cbe0c85fa9365637a0\"></a>\n\
<div class=\"memitem\">\n\
<div class=\"memproto\">\n\
      <table class=\"memname\">\n\
        <tr>\n\
          <td class=\"memname\" translate=\"no\"><a class=\"el\" translate=\"no\" href=\"#!/url=./cpp_ref/classadsk_1_1_checkpointed.html\">Checkpointed</a> </td>\n\
          <td>(</td>\n\
          <td class=\"paramtype\">const <a class=\"el\" translate=\"no\" href=\"#!/url=./cpp_ref/classadsk_1_1_checkpointed.html\">Checkpointed</a> &amp;&#160;</td>\n\
          <td class=\"paramname\"><em>rhs</em></td><td>)</td>\n\
          <td></td>\n\
        </tr>\n\
      </table>\n\
</div><div class=\"memdoc\">\n\
\n\
<p>Copy constructor - counter starts where copy left off. </p>\n\
<p>It won\'t hurt to be higher and this prevents any unintended clash between objects who have copied counters.</p>\n\
<dl class=\"params\"><dt>Parameters</dt><dd>\n\
  <table class=\"params\">\n\
    <tr><td class=\"paramdir\">[in]</td><td class=\"paramname\">rhs</td><td>Counter to be copied </td></tr>\n\
  </table>\n\
  </dd>\n\
</dl>\n\
\n\
</div>\n\
</div>\n\
<h2 class=\"groupheader\">Member Function Documentation</h2>\n\
<a class=\"anchor\" id=\"aa3d7af44c8a88ceb6b7681e8575b1c2e\"></a>\n\
<div class=\"memitem\">\n\
<div class=\"memproto\">\n\
<table class=\"mlabels\">\n\
  <tr>\n\
  <td class=\"mlabels-left\">\n\
      <table class=\"memname\">\n\
        <tr>\n\
          <td class=\"memname\" translate=\"no\"><a class=\"el\" translate=\"no\" href=\"#!/url=./cpp_ref/namespaceadsk.html#a1016f038c449137ecf4fef726cc3f444\">Checkpoint</a> objectChanged </td>\n\
          <td>(</td>\n\
          <td class=\"paramname\"></td><td>)</td>\n\
          <td></td>\n\
        </tr>\n\
      </table>\n\
  </td>\n\
  <td class=\"mlabels-right\">\n\
<span class=\"mlabels\"><span class=\"mlabel\">protected</span></span>  </td>\n\
  </tr>\n\
</table>\n\
</div><div class=\"memdoc\">\n\
\n\
<p>Call this whenever an object changes, increments the class and object checkpoint counters. </p>\n\
<dl class=\"section return\"><dt>Returns</dt><dd>New object checkpoint value </dd></dl>\n\
\n\
</div>\n\
</div>\n\
<a class=\"anchor\" id=\"a5ffd4a05ad6ea8f302347779ba070b28\"></a>\n\
<div class=\"memitem\">\n\
<div class=\"memproto\">\n\
      <table class=\"memname\">\n\
        <tr>\n\
          <td class=\"memname\" translate=\"no\"><a class=\"el\" translate=\"no\" href=\"#!/url=./cpp_ref/namespaceadsk.html#a1016f038c449137ecf4fef726cc3f444\">Checkpoint</a> checkpoint </td>\n\
          <td>(</td>\n\
          <td class=\"paramname\"></td><td>)</td>\n\
          <td> const</td>\n\
        </tr>\n\
      </table>\n\
</div><div class=\"memdoc\">\n\
\n\
<p>Retrieve the current object checkpoint state. </p>\n\
<dl class=\"section return\"><dt>Returns</dt><dd>Current object checkpoint value </dd></dl>\n\
\n\
</div>\n\
</div>\n\
<a class=\"anchor\" id=\"ace27187efc378157330693b091679767\"></a>\n\
<div class=\"memitem\">\n\
<div class=\"memproto\">\n\
      <table class=\"memname\">\n\
        <tr>\n\
          <td class=\"memname\" translate=\"no\">bool changedSinceCheckpoint </td>\n\
          <td>(</td>\n\
          <td class=\"paramtype\">const <a class=\"el\" translate=\"no\" href=\"#!/url=./cpp_ref/namespaceadsk.html#a1016f038c449137ecf4fef726cc3f444\">Checkpoint</a> &amp;&#160;</td>\n\
          <td class=\"paramname\"><em>check</em></td><td>)</td>\n\
          <td> const</td>\n\
        </tr>\n\
      </table>\n\
</div><div class=\"memdoc\">\n\
\n\
<p>Determine if the object has been altered since the given checkpoint. </p>\n\
<dl class=\"params\"><dt>Parameters</dt><dd>\n\
  <table class=\"params\">\n\
    <tr><td class=\"paramdir\">[in]</td><td class=\"paramname\">check</td><td>Previous checkpoint to compare against</td></tr>\n\
  </table>\n\
  </dd>\n\
</dl>\n\
<dl class=\"section return\"><dt>Returns</dt><dd>True if the object has been changed since the checkpoint, otherwise false </dd></dl>\n\
\n\
</div>\n\
</div>\n\
<a class=\"anchor\" id=\"a22b02451aae941a4d24b76bca409fb67\"></a>\n\
<div class=\"memitem\">\n\
<div class=\"memproto\">\n\
      <table class=\"memname\">\n\
        <tr>\n\
          <td class=\"memname\" translate=\"no\"><a class=\"el\" translate=\"no\" href=\"#!/url=./cpp_ref/classadsk_1_1_checkpointed.html\">Checkpointed</a> &amp; operator= </td>\n\
          <td>(</td>\n\
          <td class=\"paramtype\">const <a class=\"el\" translate=\"no\" href=\"#!/url=./cpp_ref/classadsk_1_1_checkpointed.html\">Checkpointed</a> &amp;&#160;</td>\n\
          <td class=\"paramname\"><em>rhs</em></td><td>)</td>\n\
          <td></td>\n\
        </tr>\n\
      </table>\n\
</div><div class=\"memdoc\">\n\
\n\
<p>Assignment operator and copy constructor are just to allow objects with counters embedded or derived to copy properly. </p>\n\
<p>Assignment operator, updates the checkpoint and copies values.</p>\n\
<dl class=\"params\"><dt>Parameters</dt><dd>\n\
  <table class=\"params\">\n\
    <tr><td class=\"paramdir\">[in]</td><td class=\"paramname\">rhs</td><td>Counter to copy</td></tr>\n\
    <tr><td class=\"paramdir\">[in]</td><td class=\"paramname\">rhs</td><td>Counter to copy</td></tr>\n\
  </table>\n\
  </dd>\n\
</dl>\n\
<dl class=\"section return\"><dt>Returns</dt><dd>Reference to this copied object (to allow chained assignments) </dd></dl>\n\
\n\
</div>\n\
</div>\n\
<a class=\"anchor\" id=\"a67865c56868e2325a9d8089370cc9e7c\"></a>\n\
<div class=\"memitem\">\n\
<div class=\"memproto\">\n\
<table class=\"mlabels\">\n\
  <tr>\n\
  <td class=\"mlabels-left\">\n\
      <table class=\"memname\">\n\
        <tr>\n\
          <td class=\"memname\" translate=\"no\"><a class=\"el\" translate=\"no\" href=\"#!/url=./cpp_ref/namespaceadsk.html#a1016f038c449137ecf4fef726cc3f444\">Checkpoint</a> globalCheckpoint </td>\n\
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
<p>Retrieve the global checkpoint. </p>\n\
<p>Maintaining a single global checkpoint value ensures that any objects that are checkpointed can be compared against not only themselves but also each other. A fine enough grained timer would serve the same function but a monotonic counter is more flexible since its updates are asynchronous.</p>\n\
<dl class=\"section return\"><dt>Returns</dt><dd>Current global checkpoint value </dd></dl>\n\
\n\
</div>\n\
</div>\n\
<a class=\"anchor\" id=\"a269118d26e73eeb90ad439f954d7e4a2\"></a>\n\
<div class=\"memitem\">\n\
<div class=\"memproto\">\n\
<table class=\"mlabels\">\n\
  <tr>\n\
  <td class=\"mlabels-left\">\n\
      <table class=\"memname\">\n\
        <tr>\n\
          <td class=\"memname\" translate=\"no\"><a class=\"el\" translate=\"no\" href=\"#!/url=./cpp_ref/namespaceadsk.html#a1016f038c449137ecf4fef726cc3f444\">Checkpoint</a> globalChange </td>\n\
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
<p>Update the global checkpoint and return the new value. </p>\n\
<p>This is called after any change to any checkpointed object.</p>\n\
<dl class=\"section return\"><dt>Returns</dt><dd>New global checkpoint value </dd></dl>\n\
\n\
</div>\n\
</div>\n\
<a class=\"anchor\" id=\"a724c6f9f787d497a1abee3654922637b\"></a>\n\
<div class=\"memitem\">\n\
<div class=\"memproto\">\n\
<table class=\"mlabels\">\n\
  <tr>\n\
  <td class=\"mlabels-left\">\n\
      <table class=\"memname\">\n\
        <tr>\n\
          <td class=\"memname\" translate=\"no\">bool Debug </td>\n\
          <td>(</td>\n\
          <td class=\"paramtype\">const <a class=\"el\" translate=\"no\" href=\"#!/url=./cpp_ref/classadsk_1_1_checkpointed.html\">Checkpointed</a> *&#160;</td>\n\
          <td class=\"paramname\"><em>me</em>, </td>\n\
        </tr>\n\
        <tr>\n\
          <td class=\"paramkey\"></td>\n\
          <td></td>\n\
          <td class=\"paramtype\"><a class=\"el\" translate=\"no\" href=\"#!/url=./cpp_ref/classadsk_1_1_debug_1_1_print.html\">Debug::Print</a> &amp;&#160;</td>\n\
          <td class=\"paramname\"><em>request</em>&#160;</td>\n\
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
<p>Answer a Print request for a <a class=\"el\" translate=\"no\" href=\"#!/url=./cpp_ref/classadsk_1_1_checkpointed.html\" title=\"Class implementing ability to keep track of when objects are changed. \">Checkpointed</a> object. </p>\n\
<p>Use the request object to dump all information on the \"me\" <a class=\"el\" translate=\"no\" href=\"#!/url=./cpp_ref/classadsk_1_1_checkpointed.html\" title=\"Class implementing ability to keep track of when objects are changed. \">Checkpointed</a>, or all static <a class=\"el\" translate=\"no\" href=\"#!/url=./cpp_ref/classadsk_1_1_checkpointed.html\" title=\"Class implementing ability to keep track of when objects are changed. \">Checkpointed</a> information if \"me\" is NULL.</p>\n\
<dl class=\"params\"><dt>Parameters</dt><dd>\n\
  <table class=\"params\">\n\
    <tr><td class=\"paramdir\">[in]</td><td class=\"paramname\">me</td><td>Pointer to object to debug, NULL means class static </td></tr>\n\
    <tr><td class=\"paramdir\">[out]</td><td class=\"paramname\">request</td><td>Print request object</td></tr>\n\
  </table>\n\
  </dd>\n\
</dl>\n\
<dl class=\"section return\"><dt>Returns</dt><dd>True if the request was successfully processed. </dd></dl>\n\
\n\
</div>\n\
</div>\n\
<a class=\"anchor\" id=\"a223c871dd10da8872e1deadca5983966\"></a>\n\
<div class=\"memitem\">\n\
<div class=\"memproto\">\n\
<table class=\"mlabels\">\n\
  <tr>\n\
  <td class=\"mlabels-left\">\n\
      <table class=\"memname\">\n\
        <tr>\n\
          <td class=\"memname\" translate=\"no\">bool Debug </td>\n\
          <td>(</td>\n\
          <td class=\"paramtype\">const <a class=\"el\" translate=\"no\" href=\"#!/url=./cpp_ref/classadsk_1_1_checkpointed.html\">Checkpointed</a> *&#160;</td>\n\
          <td class=\"paramname\"><em>me</em>, </td>\n\
        </tr>\n\
        <tr>\n\
          <td class=\"paramkey\"></td>\n\
          <td></td>\n\
          <td class=\"paramtype\"><a class=\"el\" translate=\"no\" href=\"#!/url=./cpp_ref/classadsk_1_1_debug_1_1_footprint.html\">Debug::Footprint</a> &amp;&#160;</td>\n\
          <td class=\"paramname\"><em>request</em>&#160;</td>\n\
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
<p>Answer a footprint request for an <a class=\"el\" translate=\"no\" href=\"#!/url=./cpp_ref/classadsk_1_1_checkpointed.html\" title=\"Class implementing ability to keep track of when objects are changed. \">Checkpointed</a> object. </p>\n\
<p>Populate the Footprint request with the information on all data stored within this class if \"me\" is NULL, otherwise the information stored in the <a class=\"el\" translate=\"no\" href=\"#!/url=./cpp_ref/classadsk_1_1_checkpointed.html\" title=\"Class implementing ability to keep track of when objects are changed. \">Checkpointed</a> object pointed at by \"me\".</p>\n\
<dl class=\"params\"><dt>Parameters</dt><dd>\n\
  <table class=\"params\">\n\
    <tr><td class=\"paramdir\">[in]</td><td class=\"paramname\">me</td><td>Pointer to object to footprint, NULL means class static </td></tr>\n\
    <tr><td class=\"paramdir\">[out]</td><td class=\"paramname\">request</td><td>Footprint object to populate</td></tr>\n\
  </table>\n\
  </dd>\n\
</dl>\n\
<dl class=\"section return\"><dt>Returns</dt><dd>True if the request was successfully processed. The Footprint object will have all information added to it. </dd></dl>\n\
\n\
</div>\n\
</div>\n\
<h2 class=\"groupheader\">Member Data Documentation</h2>\n\
<a class=\"anchor\" id=\"a0d98b32d84f3d41380ca4b066755b170\"></a>\n\
<div class=\"memitem\">\n\
<div class=\"memproto\">\n\
<table class=\"mlabels\">\n\
  <tr>\n\
  <td class=\"mlabels-left\">\n\
      <table class=\"memname\">\n\
        <tr>\n\
          <td class=\"memname\" translate=\"no\"><a class=\"el\" translate=\"no\" href=\"#!/url=./cpp_ref/namespaceadsk.html#a1016f038c449137ecf4fef726cc3f444\">Checkpoint</a> sfGlobalCheckpoint = 0</td>\n\
        </tr>\n\
      </table>\n\
  </td>\n\
  <td class=\"mlabels-right\">\n\
<span class=\"mlabels\"><span class=\"mlabel\">static</span><span class=\"mlabel\">protected</span></span>  </td>\n\
  </tr>\n\
</table>\n\
</div><div class=\"memdoc\">\n\
\n\
<p>Global monotonic checkpoint. </p>\n\
<p>Monotonically increasing global checkpoint.</p>\n\
<p>Bumped any time any object or class of any time changes. </p>\n\
\n\
</div>\n\
</div>\n\
<hr>The documentation for this class was generated from the following files:<ul>\n\
<li>adskCheckpointed.h</li>\n\
<li>adskCheckpointed.cpp</li>\n\
</ul>\n\
</div><!-- contents -->\n\
</div><!-- doc-content -->\n\
          <div class=\"footer-block\"><a href=\"../html/ac.cmtdialog.htm\" class=\"comments-anchor\" target=\"_blank\"><span class=\"comments-link\">Please send us your comment about this page</span></a></div><br></div>\n\
   </div></body>\n\
</html>\n\
";