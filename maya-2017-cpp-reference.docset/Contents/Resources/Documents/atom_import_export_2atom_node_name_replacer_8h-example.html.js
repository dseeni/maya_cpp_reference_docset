var topic = "<!-- saved from url=(0024)http://docs.autodesk.com -->\n\
<html>\n\
   <head><script src=\"../scripts/yepnope.1.5.4-min.js\" type=\"text/javascript\"></script><script src=\"../scripts/lib/jquery-1.11.1.min.js\" type=\"text/javascript\"></script><meta http-equiv=\"Content-Type\" content=\"text/html; charset=UTF-8\"><meta name=\"product\" content=\"MAYAUL\"><meta name=\"release\" content=\"2017\"><meta name=\"book\" content=\"Developer\"><meta name=\"created\" content=\"2016-06-16\"><meta name=\"topicid\" content=\"GUID-02DEF634-1E7B-48C6-8ACD-2C934CA97887\"><meta name=\"topic-type\" content=\"concept\">\n\
      <title>atomImportExport/atomNodeNameReplacer.h</title>\n\
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
    cpp_ref_adsk_ref_toc.initNavTree(\'atom_import_export_2atom_node_name_replacer_8h-example.html\', tocPrefix);\n\
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
            <h1>atomImportExport/atomNodeNameReplacer.h</h1>\n\
         </div>\n\
\n\
    <div id=\"top\"><!-- Generated by Doxygen 1.8.10 -->\n\
  <div id=\"navrow1\" class=\"tabs\">\n\
    <ul class=\"tablist\">\n\
      <li><a href=\"#!/url=./cpp_ref/index.html\"><span>Main&#160;Page</span></a></li>\n\
      <li><a href=\"#!/url=./cpp_ref/pages.html\"><span>Topics</span></a></li>\n\
      <li><a href=\"#!/url=./cpp_ref/modules.html\"><span>Modules</span></a></li>\n\
      <li><a href=\"#!/url=./cpp_ref/namespaces.html\"><span>Namespaces</span></a></li>\n\
      <li><a href=\"#!/url=./cpp_ref/annotated.html\"><span>Classes</span></a></li>\n\
      <li><a href=\"#!/url=./cpp_ref/examples.html\"><span>Examples</span></a></li>\n\
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
<div class=\"title\">atomImportExport/atomNodeNameReplacer.h</div>  </div>\n\
</div><!--header-->\n\
<div class=\"contents\">\n\
<div class=\"fragment\"><div class=\"line\"></div>\n\
<div class=\"line\"><span class=\"comment\">//  File Name:  atomNodeNameReplacer.h</span></div>\n\
<div class=\"line\"><span class=\"comment\">//</span></div>\n\
<div class=\"line\"><span class=\"comment\">//   The atomeNodeNameReplacer is a class that returns a new node name based upon how we are replacing it ,either by string replacment</span></div>\n\
<div class=\"line\"><span class=\"comment\">//  or by finding it in a map file.</span></div>\n\
<div class=\"line\"></div>\n\
<div class=\"line\"></div>\n\
<div class=\"line\"><span class=\"preprocessor\">#ifndef _atomNodeNameReplacer</span></div>\n\
<div class=\"line\"><span class=\"preprocessor\">#define _atomNodeNameReplacer</span></div>\n\
<div class=\"line\"></div>\n\
<div class=\"line\"><span class=\"preprocessor\">#include &lt;vector&gt;</span></div>\n\
<div class=\"line\"><span class=\"preprocessor\">#include &lt;maya/MString.h&gt;</span> </div>\n\
<div class=\"line\"><span class=\"preprocessor\">#include &lt;maya/MFStream.h&gt;</span></div>\n\
<div class=\"line\"><span class=\"preprocessor\">#include &lt;maya/MStringArray.h&gt;</span></div>\n\
<div class=\"line\"><span class=\"preprocessor\">#include &lt;maya/MSelectionList.h&gt;</span></div>\n\
<div class=\"line\"></div>\n\
<div class=\"line\"><span class=\"comment\">//base class for reader text files</span></div>\n\
<div class=\"line\"><span class=\"keyword\">class </span>streamIO</div>\n\
<div class=\"line\">{</div>\n\
<div class=\"line\"><span class=\"keyword\">public</span>:</div>\n\
<div class=\"line\">    streamIO();</div>\n\
<div class=\"line\">    <span class=\"keyword\">virtual</span> ~streamIO(){};</div>\n\
<div class=\"line\"></div>\n\
<div class=\"line\">    <span class=\"keywordtype\">double</span>                      asDouble(ifstream &amp;);</div>\n\
<div class=\"line\">    <span class=\"keywordtype\">char</span> *                      asString(ifstream &amp;);</div>\n\
<div class=\"line\">    <span class=\"keywordtype\">char</span> *                      asWord(ifstream &amp;, <span class=\"keywordtype\">bool</span> = <span class=\"keyword\">false</span>);</div>\n\
<div class=\"line\">    <span class=\"keywordtype\">char</span>                        asChar(ifstream &amp;);</div>\n\
<div class=\"line\">    <span class=\"keywordtype\">int</span>                         asInt(ifstream &amp;);</div>\n\
<div class=\"line\">    <span class=\"keywordtype\">short</span>                       asShort(ifstream &amp;);</div>\n\
<div class=\"line\"></div>\n\
<div class=\"line\">    <span class=\"keywordtype\">bool</span>                        isNextNumeric(ifstream &amp;);</div>\n\
<div class=\"line\"></div>\n\
<div class=\"line\">    <span class=\"keywordtype\">void</span>                        advance(ifstream &amp;);</div>\n\
<div class=\"line\"></div>\n\
<div class=\"line\">    <span class=\"keywordtype\">bool</span>                        doesFileExist(<span class=\"keyword\">const</span> <a name=\"_a0\"></a><a class=\"code\" href=\"#!/url=./cpp_ref/class_m_string.html\">MString</a> &amp;fName);</div>\n\
<div class=\"line\"></div>\n\
<div class=\"line\">};</div>\n\
<div class=\"line\"></div>\n\
<div class=\"line\"></div>\n\
<div class=\"line\"><span class=\"comment\">// Class to modify the string of a node based upon either strings or some specified map file</span></div>\n\
<div class=\"line\"><span class=\"keyword\">class </span>atomNodeNameReplacer : <span class=\"keyword\">public</span> streamIO</div>\n\
<div class=\"line\">{</div>\n\
<div class=\"line\"></div>\n\
<div class=\"line\"><span class=\"keyword\">public</span>:</div>\n\
<div class=\"line\">    <span class=\"keyword\">enum</span> NodeType {eDag = 0, eShape, eDepend, eAnimLayer};</div>\n\
<div class=\"line\">    <span class=\"keyword\">enum</span> ReplaceType {eHierarchy = 0, eSearchReplace, eMapFile};</div>\n\
<div class=\"line\"></div>\n\
<div class=\"line\">    atomNodeNameReplacer(ReplaceType type, <a name=\"_a1\"></a><a class=\"code\" href=\"#!/url=./cpp_ref/class_m_selection_list.html\">MSelectionList</a> &amp;list,std::vector&lt;unsigned int&gt; &amp;depths, <a class=\"code\" href=\"#!/url=./cpp_ref/class_m_string.html\">MString</a> &amp;prefix, <a class=\"code\" href=\"#!/url=./cpp_ref/class_m_string.html\">MString</a> &amp;suffix,</div>\n\
<div class=\"line\">        <a class=\"code\" href=\"#!/url=./cpp_ref/class_m_string.html\">MString</a> &amp;search, <a class=\"code\" href=\"#!/url=./cpp_ref/class_m_string.html\">MString</a> &amp;replace, <a class=\"code\" href=\"#!/url=./cpp_ref/class_m_string.html\">MString</a> &amp;mapFile);</div>\n\
<div class=\"line\">    <span class=\"keyword\">virtual</span> ~atomNodeNameReplacer(){};</div>\n\
<div class=\"line\"></div>\n\
<div class=\"line\">    <span class=\"comment\">//return node in the scene that matches it.</span></div>\n\
<div class=\"line\">    <span class=\"keywordtype\">bool</span>                findNode(atomNodeNameReplacer::NodeType nodeType, <a class=\"code\" href=\"#!/url=./cpp_ref/class_m_string.html\">MString</a> &amp;nodeName, <span class=\"keywordtype\">unsigned</span> <span class=\"keywordtype\">int</span> depth, <span class=\"keywordtype\">unsigned</span> <span class=\"keywordtype\">int</span> childCount);</div>\n\
<div class=\"line\">    <span class=\"keywordtype\">void</span>                setAddMainPlaceholderNamespace(<span class=\"keywordtype\">bool</span>);</div>\n\
<div class=\"line\"></div>\n\
<div class=\"line\">    <span class=\"keywordtype\">void</span>                turnOffHierarchy() {<span class=\"keywordflow\">if</span>(fReplaceType == eHierarchy) fReplaceType = eSearchReplace;};</div>\n\
<div class=\"line\"><span class=\"keyword\">private</span>:</div>\n\
<div class=\"line\"></div>\n\
<div class=\"line\">    <a class=\"code\" href=\"#!/url=./cpp_ref/class_m_selection_list.html\">MSelectionList</a>      fSelectionList; <span class=\"comment\">//this is the original list of objects</span></div>\n\
<div class=\"line\">    std::vector&lt;unsigned int&gt; fDepths;</div>\n\
<div class=\"line\">    ReplaceType         fReplaceType;</div>\n\
<div class=\"line\">    <span class=\"keywordtype\">bool</span>                fAddMainPlaceholderNamespace;</div>\n\
<div class=\"line\">    <a class=\"code\" href=\"#!/url=./cpp_ref/class_m_string.html\">MString</a>             fPrefix;</div>\n\
<div class=\"line\">    <a class=\"code\" href=\"#!/url=./cpp_ref/class_m_string.html\">MString</a>             fSuffix;</div>\n\
<div class=\"line\">    <a class=\"code\" href=\"#!/url=./cpp_ref/class_m_string.html\">MString</a>             fSearch;</div>\n\
<div class=\"line\">    <a class=\"code\" href=\"#!/url=./cpp_ref/class_m_string.html\">MString</a>             fReplace;</div>\n\
<div class=\"line\">    <a class=\"code\" href=\"#!/url=./cpp_ref/class_m_string.html\">MString</a>             fMapFile;</div>\n\
<div class=\"line\"></div>\n\
<div class=\"line\">    <span class=\"comment\">//these two arrays should be in sync</span></div>\n\
<div class=\"line\">    <a name=\"_a2\"></a><a class=\"code\" href=\"#!/url=./cpp_ref/class_m_string_array.html\">MStringArray</a>        fCurrentNames;</div>\n\
<div class=\"line\">    <a class=\"code\" href=\"#!/url=./cpp_ref/class_m_string_array.html\">MStringArray</a>        fNewNames;</div>\n\
<div class=\"line\"><span class=\"keyword\">protected</span>:</div>\n\
<div class=\"line\">    <a class=\"code\" href=\"#!/url=./cpp_ref/class_m_string.html\">MString</a>         replacedNameFromMapFileStrings(<a class=\"code\" href=\"#!/url=./cpp_ref/class_m_string.html\">MString</a> &amp;current);</div>\n\
<div class=\"line\">    <span class=\"keywordtype\">bool</span>            matchByName(); <span class=\"comment\">//do we match by name or not?</span></div>\n\
<div class=\"line\">    <span class=\"comment\">//we call this now to change the name of the incoming</span></div>\n\
<div class=\"line\">    <span class=\"comment\">//node based upon any search/replace or mapping parameters.</span></div>\n\
<div class=\"line\">    <a class=\"code\" href=\"#!/url=./cpp_ref/class_m_string.html\">MString</a>             replacedName(<a class=\"code\" href=\"#!/url=./cpp_ref/class_m_string.html\">MString</a> &amp;name);</div>\n\
<div class=\"line\">};</div>\n\
<div class=\"line\"></div>\n\
<div class=\"line\"><span class=\"preprocessor\">#endif </span></div>\n\
<div class=\"line\"></div>\n\
</div><!-- fragment --> </div><!-- contents -->\n\
</div><!-- doc-content -->\n\
          <div class=\"footer-block\"><a href=\"../html/ac.cmtdialog.htm\" class=\"comments-anchor\" target=\"_blank\"><span class=\"comments-link\">Please send us your comment about this page</span></a></div><br></div>\n\
   </div></body>\n\
</html>\n\
";