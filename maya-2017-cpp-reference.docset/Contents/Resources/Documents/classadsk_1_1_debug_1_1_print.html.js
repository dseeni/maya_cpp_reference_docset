var topic = "<!-- saved from url=(0024)http://docs.autodesk.com -->\n\
<html>\n\
   <head><script src=\"../scripts/yepnope.1.5.4-min.js\" type=\"text/javascript\"></script><script src=\"../scripts/lib/jquery-1.11.1.min.js\" type=\"text/javascript\"></script><meta http-equiv=\"Content-Type\" content=\"text/html; charset=UTF-8\"><meta name=\"product\" content=\"MAYAUL\"><meta name=\"release\" content=\"2017\"><meta name=\"book\" content=\"Developer\"><meta name=\"created\" content=\"2016-06-16\"><meta name=\"topicid\" content=\"GUID-02DEF634-1E7B-48C6-8ACD-2C934CA97887\"><meta name=\"topic-type\" content=\"concept\">\n\
      <title>Print Class Reference</title>\n\
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
    cpp_ref_adsk_ref_toc.initNavTree(\'classadsk_1_1_debug_1_1_print.html\', tocPrefix);\n\
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
            <h1>Print Class Reference</h1>\n\
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
<div class=\"title\">Print Class Reference</div>  </div>\n\
<div class=\"summary\">\n\
<a href=\"classadsk_1_1_debug_1_1_print.html#pub-methods\">Public Member Functions</a>  </div></div><!--header-->\n\
<div class=\"contents\">\n\
\n\
<p><code>#include &lt;adskDebugPrint.h&gt;</code></p>\n\
<a name=\"details\" id=\"details\"></a><h2 class=\"groupheader\">Class Description</h2>\n\
<div class=\"textblock\"><p>Class implementing debug printing operation. </p>\n\
<p>While most debuggers provide a way to examine the interior of objects oftentimes a simple structural and content analysis is insufficient to discern what is happening within an object.</p>\n\
<p>It\'s likewise more difficult to collect and compare information from several different locations over many iterations - dumping the data out to a stream provides the option of after-the-fact analysis.</p>\n\
<p>This debug request type provides a simple output mechanism including an arbitrary stream and automatic indenting styles to make the formatting of the data more readable. </p>\n\
</div><table class=\"memberdecls\">\n\
<tr class=\"heading\"><td colspan=\"2\"><h2 class=\"groupheader\"><a name=\"pub-methods\"></a>\n\
Public Member Functions</h2></td></tr>\n\
<tr class=\"memitem:a500a910b48a4ffa371b5391a643671b4\"><td class=\"memItemLeft\" translate=\"no\" align=\"right\" valign=\"top\"><a class=\"anchor\" id=\"a500a910b48a4ffa371b5391a643671b4\"></a>\n\
&#160;</td><td class=\"memItemRight\" translate=\"no\" valign=\"bottom\"><a class=\"el\" translate=\"no\" href=\"#!/url=./cpp_ref/classadsk_1_1_debug_1_1_print.html#a500a910b48a4ffa371b5391a643671b4\">Print</a> (std::ostream &amp;cdbg)</td></tr>\n\
<tr class=\"memdesc:a500a910b48a4ffa371b5391a643671b4\"><td class=\"mdescLeft\">&#160;</td><td class=\"mdescRight\">Default constructor - sets up the stream taking the output. <br></td></tr>\n\
<tr class=\"separator:a500a910b48a4ffa371b5391a643671b4\"><td class=\"memSeparator\" colspan=\"2\">&#160;</td></tr>\n\
<tr class=\"memitem:ac1dc6839e8f9241747529ebe3a197f2a\"><td class=\"memItemLeft\" translate=\"no\" align=\"right\" valign=\"top\"><a class=\"anchor\" id=\"ac1dc6839e8f9241747529ebe3a197f2a\"></a>\n\
&#160;</td><td class=\"memItemRight\" translate=\"no\" valign=\"bottom\"><a class=\"el\" translate=\"no\" href=\"#!/url=./cpp_ref/classadsk_1_1_debug_1_1_print.html#ac1dc6839e8f9241747529ebe3a197f2a\">Print</a> (const <a class=\"el\" translate=\"no\" href=\"#!/url=./cpp_ref/classadsk_1_1_debug_1_1_print.html\">Print</a> &amp;rhs)</td></tr>\n\
<tr class=\"memdesc:ac1dc6839e8f9241747529ebe3a197f2a\"><td class=\"mdescLeft\">&#160;</td><td class=\"mdescRight\">Copy constructor - sets up the stream taking the output. <br></td></tr>\n\
<tr class=\"separator:ac1dc6839e8f9241747529ebe3a197f2a\"><td class=\"memSeparator\" colspan=\"2\">&#160;</td></tr>\n\
<tr class=\"memitem:aabc81aaa1db1abae824009c8fde4c81f\"><td class=\"memItemLeft\" translate=\"no\" align=\"right\" valign=\"top\"><a class=\"anchor\" id=\"aabc81aaa1db1abae824009c8fde4c81f\"></a>\n\
<a class=\"el\" translate=\"no\" href=\"#!/url=./cpp_ref/classadsk_1_1_debug_1_1_print.html\">Print</a> &amp;&#160;</td><td class=\"memItemRight\" translate=\"no\" valign=\"bottom\"><a class=\"el\" translate=\"no\" href=\"#!/url=./cpp_ref/classadsk_1_1_debug_1_1_print.html#aabc81aaa1db1abae824009c8fde4c81f\">operator=</a> (const <a class=\"el\" translate=\"no\" href=\"#!/url=./cpp_ref/classadsk_1_1_debug_1_1_print.html\">Print</a> &amp;rhs)</td></tr>\n\
<tr class=\"memdesc:aabc81aaa1db1abae824009c8fde4c81f\"><td class=\"mdescLeft\">&#160;</td><td class=\"mdescRight\">Assignment operator. <br></td></tr>\n\
<tr class=\"separator:aabc81aaa1db1abae824009c8fde4c81f\"><td class=\"memSeparator\" colspan=\"2\">&#160;</td></tr>\n\
<tr class=\"memitem:a01f5243d7613ac5562749ebddfdeae13\"><td class=\"memItemLeft\" translate=\"no\" align=\"right\" valign=\"top\"><a class=\"anchor\" id=\"a01f5243d7613ac5562749ebddfdeae13\"></a>\n\
&#160;</td><td class=\"memItemRight\" translate=\"no\" valign=\"bottom\"><a class=\"el\" translate=\"no\" href=\"#!/url=./cpp_ref/classadsk_1_1_debug_1_1_print.html#a01f5243d7613ac5562749ebddfdeae13\">~Print</a> ()</td></tr>\n\
<tr class=\"memdesc:a01f5243d7613ac5562749ebddfdeae13\"><td class=\"mdescLeft\">&#160;</td><td class=\"mdescRight\">Default destructor - does nothing. <br></td></tr>\n\
<tr class=\"separator:a01f5243d7613ac5562749ebddfdeae13\"><td class=\"memSeparator\" colspan=\"2\">&#160;</td></tr>\n\
<tr class=\"memitem:ad4d5b6810aab67c774308dbb7f9a540b\"><td class=\"memItemLeft\" translate=\"no\" align=\"right\" valign=\"top\">std::ostream &amp;&#160;</td><td class=\"memItemRight\" translate=\"no\" valign=\"bottom\"><a class=\"el\" translate=\"no\" href=\"#!/url=./cpp_ref/classadsk_1_1_debug_1_1_print.html#ad4d5b6810aab67c774308dbb7f9a540b\">operator&lt;&lt;</a> (const void *ptr)</td></tr>\n\
<tr class=\"memdesc:ad4d5b6810aab67c774308dbb7f9a540b\"><td class=\"mdescLeft\">&#160;</td><td class=\"mdescRight\">Output operators - print value with indentation and return the real stream.  <a href=\"classadsk_1_1_debug_1_1_print.html#ad4d5b6810aab67c774308dbb7f9a540b\">More...</a><br></td></tr>\n\
<tr class=\"separator:ad4d5b6810aab67c774308dbb7f9a540b\"><td class=\"memSeparator\" colspan=\"2\">&#160;</td></tr>\n\
<tr class=\"memitem:a95836dee64e2e46e7192a35e0dae2cfc\"><td class=\"memItemLeft\" translate=\"no\" align=\"right\" valign=\"top\">void&#160;</td><td class=\"memItemRight\" translate=\"no\" valign=\"bottom\"><a class=\"el\" translate=\"no\" href=\"#!/url=./cpp_ref/classadsk_1_1_debug_1_1_print.html#a95836dee64e2e46e7192a35e0dae2cfc\">beginSection</a> (const char *title)</td></tr>\n\
<tr class=\"memdesc:a95836dee64e2e46e7192a35e0dae2cfc\"><td class=\"mdescLeft\">&#160;</td><td class=\"mdescRight\">Begin a new indented section.  <a href=\"classadsk_1_1_debug_1_1_print.html#a95836dee64e2e46e7192a35e0dae2cfc\">More...</a><br></td></tr>\n\
<tr class=\"separator:a95836dee64e2e46e7192a35e0dae2cfc\"><td class=\"memSeparator\" colspan=\"2\">&#160;</td></tr>\n\
<tr class=\"memitem:ace4c245882d2df48abd462570ca940d9\"><td class=\"memItemLeft\" translate=\"no\" align=\"right\" valign=\"top\">void&#160;</td><td class=\"memItemRight\" translate=\"no\" valign=\"bottom\"><a class=\"el\" translate=\"no\" href=\"#!/url=./cpp_ref/classadsk_1_1_debug_1_1_print.html#ace4c245882d2df48abd462570ca940d9\">endSection</a> ()</td></tr>\n\
<tr class=\"memdesc:ace4c245882d2df48abd462570ca940d9\"><td class=\"mdescLeft\">&#160;</td><td class=\"mdescRight\">Dump the standard indentation to the output stream.  <a href=\"classadsk_1_1_debug_1_1_print.html#ace4c245882d2df48abd462570ca940d9\">More...</a><br></td></tr>\n\
<tr class=\"separator:ace4c245882d2df48abd462570ca940d9\"><td class=\"memSeparator\" colspan=\"2\">&#160;</td></tr>\n\
<tr class=\"memitem:a4c8c8e2f5dd7d7aa4d01b281b50f84a4\"><td class=\"memItemLeft\" translate=\"no\" align=\"right\" valign=\"top\">eStyle&#160;</td><td class=\"memItemRight\" translate=\"no\" valign=\"bottom\"><a class=\"el\" translate=\"no\" href=\"#!/url=./cpp_ref/classadsk_1_1_debug_1_1_print.html#a4c8c8e2f5dd7d7aa4d01b281b50f84a4\">setSectionStyle</a> (eStyle newStyle)</td></tr>\n\
<tr class=\"memdesc:a4c8c8e2f5dd7d7aa4d01b281b50f84a4\"><td class=\"mdescLeft\">&#160;</td><td class=\"mdescRight\">Define the section style to be used for this object.  <a href=\"classadsk_1_1_debug_1_1_print.html#a4c8c8e2f5dd7d7aa4d01b281b50f84a4\">More...</a><br></td></tr>\n\
<tr class=\"separator:a4c8c8e2f5dd7d7aa4d01b281b50f84a4\"><td class=\"memSeparator\" colspan=\"2\">&#160;</td></tr>\n\
<tr class=\"memitem:ae8aea5a0febb021396a4a5ecf63489ec\"><td class=\"memItemLeft\" translate=\"no\" align=\"right\" valign=\"top\">void&#160;</td><td class=\"memItemRight\" translate=\"no\" valign=\"bottom\"><a class=\"el\" translate=\"no\" href=\"#!/url=./cpp_ref/classadsk_1_1_debug_1_1_print.html#ae8aea5a0febb021396a4a5ecf63489ec\">addFilter</a> (const std::string &amp;filterName, int filterValue)</td></tr>\n\
<tr class=\"memdesc:ae8aea5a0febb021396a4a5ecf63489ec\"><td class=\"mdescLeft\">&#160;</td><td class=\"mdescRight\">Add a new filter to the debug output.  <a href=\"classadsk_1_1_debug_1_1_print.html#ae8aea5a0febb021396a4a5ecf63489ec\">More...</a><br></td></tr>\n\
<tr class=\"separator:ae8aea5a0febb021396a4a5ecf63489ec\"><td class=\"memSeparator\" colspan=\"2\">&#160;</td></tr>\n\
<tr class=\"memitem:a0c7951b2643dcd7634a941c8fae8b536\"><td class=\"memItemLeft\" translate=\"no\" align=\"right\" valign=\"top\">void&#160;</td><td class=\"memItemRight\" translate=\"no\" valign=\"bottom\"><a class=\"el\" translate=\"no\" href=\"#!/url=./cpp_ref/classadsk_1_1_debug_1_1_print.html#a0c7951b2643dcd7634a941c8fae8b536\">removeFilter</a> (const std::string &amp;filterName)</td></tr>\n\
<tr class=\"memdesc:a0c7951b2643dcd7634a941c8fae8b536\"><td class=\"mdescLeft\">&#160;</td><td class=\"mdescRight\">Remove an existing filter to the debug output.  <a href=\"classadsk_1_1_debug_1_1_print.html#a0c7951b2643dcd7634a941c8fae8b536\">More...</a><br></td></tr>\n\
<tr class=\"separator:a0c7951b2643dcd7634a941c8fae8b536\"><td class=\"memSeparator\" colspan=\"2\">&#160;</td></tr>\n\
<tr class=\"memitem:aa95d716a7a127b4ea95cb556f8723cfc\"><td class=\"memItemLeft\" translate=\"no\" align=\"right\" valign=\"top\">bool&#160;</td><td class=\"memItemRight\" translate=\"no\" valign=\"bottom\"><a class=\"el\" translate=\"no\" href=\"#!/url=./cpp_ref/classadsk_1_1_debug_1_1_print.html#aa95d716a7a127b4ea95cb556f8723cfc\">findFilter</a> (const std::string &amp;filterName, int &amp;filterValue)</td></tr>\n\
<tr class=\"memdesc:aa95d716a7a127b4ea95cb556f8723cfc\"><td class=\"mdescLeft\">&#160;</td><td class=\"mdescRight\">Check for a filter\'s current value.  <a href=\"classadsk_1_1_debug_1_1_print.html#aa95d716a7a127b4ea95cb556f8723cfc\">More...</a><br></td></tr>\n\
<tr class=\"separator:aa95d716a7a127b4ea95cb556f8723cfc\"><td class=\"memSeparator\" colspan=\"2\">&#160;</td></tr>\n\
<tr class=\"memitem:a45389e4e8ecf1bec7ea35cd884a55d53\"><td class=\"memItemLeft\" translate=\"no\" align=\"right\" valign=\"top\">std::ostream &amp;&#160;</td><td class=\"memItemRight\" translate=\"no\" valign=\"bottom\"><a class=\"el\" translate=\"no\" href=\"#!/url=./cpp_ref/classadsk_1_1_debug_1_1_print.html#a45389e4e8ecf1bec7ea35cd884a55d53\">doIndent</a> ()</td></tr>\n\
<tr class=\"memdesc:a45389e4e8ecf1bec7ea35cd884a55d53\"><td class=\"mdescLeft\">&#160;</td><td class=\"mdescRight\">Dump the standard indentation to the output stream.  <a href=\"classadsk_1_1_debug_1_1_print.html#a45389e4e8ecf1bec7ea35cd884a55d53\">More...</a><br></td></tr>\n\
<tr class=\"separator:a45389e4e8ecf1bec7ea35cd884a55d53\"><td class=\"memSeparator\" colspan=\"2\">&#160;</td></tr>\n\
<tr class=\"memitem:ae0d70e9985b2f3baff3a6b8886008d40\"><td class=\"memItemLeft\" translate=\"no\" align=\"right\" valign=\"top\">bool&#160;</td><td class=\"memItemRight\" translate=\"no\" valign=\"bottom\"><a class=\"el\" translate=\"no\" href=\"#!/url=./cpp_ref/classadsk_1_1_debug_1_1_print.html#ae0d70e9985b2f3baff3a6b8886008d40\">skipNextIndent</a> (bool doSkip)</td></tr>\n\
<tr class=\"memdesc:ae0d70e9985b2f3baff3a6b8886008d40\"><td class=\"mdescLeft\">&#160;</td><td class=\"mdescRight\">Change the ability to skip the next indentation print.  <a href=\"classadsk_1_1_debug_1_1_print.html#ae0d70e9985b2f3baff3a6b8886008d40\">More...</a><br></td></tr>\n\
<tr class=\"separator:ae0d70e9985b2f3baff3a6b8886008d40\"><td class=\"memSeparator\" colspan=\"2\">&#160;</td></tr>\n\
<tr class=\"memitem:ae8ec1ab1dc20a9d6867ebf0854b91de1\"><td class=\"memItemLeft\" translate=\"no\" align=\"right\" valign=\"top\">int&#160;</td><td class=\"memItemRight\" translate=\"no\" valign=\"bottom\"><a class=\"el\" translate=\"no\" href=\"#!/url=./cpp_ref/classadsk_1_1_debug_1_1_print.html#ae8ec1ab1dc20a9d6867ebf0854b91de1\">indent</a> (int relativeChange)</td></tr>\n\
<tr class=\"memdesc:ae8ec1ab1dc20a9d6867ebf0854b91de1\"><td class=\"mdescLeft\">&#160;</td><td class=\"mdescRight\">Increment or decrement the current indentation level.  <a href=\"classadsk_1_1_debug_1_1_print.html#ae8ec1ab1dc20a9d6867ebf0854b91de1\">More...</a><br></td></tr>\n\
<tr class=\"separator:ae8ec1ab1dc20a9d6867ebf0854b91de1\"><td class=\"memSeparator\" colspan=\"2\">&#160;</td></tr>\n\
<tr class=\"memitem:a739c44c63c54a73cb15d50e1a760a35e\"><td class=\"memItemLeft\" translate=\"no\" align=\"right\" valign=\"top\">int&#160;</td><td class=\"memItemRight\" translate=\"no\" valign=\"bottom\"><a class=\"el\" translate=\"no\" href=\"#!/url=./cpp_ref/classadsk_1_1_debug_1_1_print.html#a739c44c63c54a73cb15d50e1a760a35e\">setIndent</a> (int newIndent)</td></tr>\n\
<tr class=\"memdesc:a739c44c63c54a73cb15d50e1a760a35e\"><td class=\"mdescLeft\">&#160;</td><td class=\"mdescRight\">Define a new indentation level, independently of the old one.  <a href=\"classadsk_1_1_debug_1_1_print.html#a739c44c63c54a73cb15d50e1a760a35e\">More...</a><br></td></tr>\n\
<tr class=\"separator:a739c44c63c54a73cb15d50e1a760a35e\"><td class=\"memSeparator\" colspan=\"2\">&#160;</td></tr>\n\
<tr class=\"memitem:aa97ccc03844c1af21965d689c125f1e0\"><td class=\"memItemLeft\" translate=\"no\" align=\"right\" valign=\"top\">std::string&#160;</td><td class=\"memItemRight\" translate=\"no\" valign=\"bottom\"><a class=\"el\" translate=\"no\" href=\"#!/url=./cpp_ref/classadsk_1_1_debug_1_1_print.html#aa97ccc03844c1af21965d689c125f1e0\">setIndentString</a> (const std::string &amp;newIndentString)</td></tr>\n\
<tr class=\"memdesc:aa97ccc03844c1af21965d689c125f1e0\"><td class=\"mdescLeft\">&#160;</td><td class=\"mdescRight\">Define a new indentation string.  <a href=\"classadsk_1_1_debug_1_1_print.html#aa97ccc03844c1af21965d689c125f1e0\">More...</a><br></td></tr>\n\
<tr class=\"separator:aa97ccc03844c1af21965d689c125f1e0\"><td class=\"memSeparator\" colspan=\"2\">&#160;</td></tr>\n\
</table>\n\
<h2 class=\"groupheader\">Member Function Documentation</h2>\n\
<a class=\"anchor\" id=\"ad4d5b6810aab67c774308dbb7f9a540b\"></a>\n\
<div class=\"memitem\">\n\
<div class=\"memproto\">\n\
      <table class=\"memname\">\n\
        <tr>\n\
          <td class=\"memname\" translate=\"no\">std::ostream &amp; operator&lt;&lt; </td>\n\
          <td>(</td>\n\
          <td class=\"paramtype\">const void *&#160;</td>\n\
          <td class=\"paramname\"><em>param</em></td><td>)</td>\n\
          <td></td>\n\
        </tr>\n\
      </table>\n\
</div><div class=\"memdoc\">\n\
\n\
<p>Output operators - print value with indentation and return the real stream. </p>\n\
<p>We\'d like to use this class the same way std::ostream is used while still enabling the indentation behaviour. This method provides the capability to enter a typical stream output sequence such as this:</p>\n\
<p>cdbg &lt;&lt; \"This is the first line\" &lt;&lt; std::endl;</p>\n\
<p>Since a std::ostream is returned this works the way you\'d expect it to work.</p>\n\
<dl class=\"params\"><dt>Parameters</dt><dd>\n\
  <table class=\"params\">\n\
    <tr><td class=\"paramdir\">[in]</td><td class=\"paramname\">param</td><td>Value to be printed</td></tr>\n\
  </table>\n\
  </dd>\n\
</dl>\n\
<dl class=\"section return\"><dt>Returns</dt><dd>Standard stream to use for further output </dd></dl>\n\
\n\
</div>\n\
</div>\n\
<a class=\"anchor\" id=\"a95836dee64e2e46e7192a35e0dae2cfc\"></a>\n\
<div class=\"memitem\">\n\
<div class=\"memproto\">\n\
      <table class=\"memname\">\n\
        <tr>\n\
          <td class=\"memname\" translate=\"no\">void beginSection </td>\n\
          <td>(</td>\n\
          <td class=\"paramtype\">const char *&#160;</td>\n\
          <td class=\"paramname\"><em>title</em></td><td>)</td>\n\
          <td></td>\n\
        </tr>\n\
      </table>\n\
</div><div class=\"memdoc\">\n\
\n\
<p>Begin a new indented section. </p>\n\
<p>Use the section style information to determine how the formatting should evolve inside a section. The two current options are C-Style with braces, and Python-Style relying solely on indentation.</p>\n\
<dl class=\"params\"><dt>Parameters</dt><dd>\n\
  <table class=\"params\">\n\
    <tr><td class=\"paramdir\">[in]</td><td class=\"paramname\">title</td><td>Section title to be printed at the top </td></tr>\n\
  </table>\n\
  </dd>\n\
</dl>\n\
\n\
</div>\n\
</div>\n\
<a class=\"anchor\" id=\"ace4c245882d2df48abd462570ca940d9\"></a>\n\
<div class=\"memitem\">\n\
<div class=\"memproto\">\n\
      <table class=\"memname\">\n\
        <tr>\n\
          <td class=\"memname\" translate=\"no\">void endSection </td>\n\
          <td>(</td>\n\
          <td class=\"paramname\"></td><td>)</td>\n\
          <td></td>\n\
        </tr>\n\
      </table>\n\
</div><div class=\"memdoc\">\n\
\n\
<p>Dump the standard indentation to the output stream. </p>\n\
<dl class=\"section return\"><dt>Returns</dt><dd><a class=\"el\" translate=\"no\" href=\"#!/url=./cpp_ref/classadsk_1_1_debug_1_1_print.html\" title=\"Class implementing debug printing operation. \">Print</a> object to use for chained output </dd></dl>\n\
\n\
</div>\n\
</div>\n\
<a class=\"anchor\" id=\"a4c8c8e2f5dd7d7aa4d01b281b50f84a4\"></a>\n\
<div class=\"memitem\">\n\
<div class=\"memproto\">\n\
      <table class=\"memname\">\n\
        <tr>\n\
          <td class=\"memname\" translate=\"no\">Print::eStyle setSectionStyle </td>\n\
          <td>(</td>\n\
          <td class=\"paramtype\">Print::eStyle&#160;</td>\n\
          <td class=\"paramname\"><em>newStyle</em></td><td>)</td>\n\
          <td></td>\n\
        </tr>\n\
      </table>\n\
</div><div class=\"memdoc\">\n\
\n\
<p>Define the section style to be used for this object. </p>\n\
<dl class=\"params\"><dt>Parameters</dt><dd>\n\
  <table class=\"params\">\n\
    <tr><td class=\"paramdir\">[in]</td><td class=\"paramname\">newStyle</td><td>New section style to be used</td></tr>\n\
  </table>\n\
  </dd>\n\
</dl>\n\
<dl class=\"section return\"><dt>Returns</dt><dd>The old style </dd></dl>\n\
\n\
</div>\n\
</div>\n\
<a class=\"anchor\" id=\"ae8aea5a0febb021396a4a5ecf63489ec\"></a>\n\
<div class=\"memitem\">\n\
<div class=\"memproto\">\n\
      <table class=\"memname\">\n\
        <tr>\n\
          <td class=\"memname\" translate=\"no\">void addFilter </td>\n\
          <td>(</td>\n\
          <td class=\"paramtype\">const std::string &amp;&#160;</td>\n\
          <td class=\"paramname\"><em>filterName</em>, </td>\n\
        </tr>\n\
        <tr>\n\
          <td class=\"paramkey\"></td>\n\
          <td></td>\n\
          <td class=\"paramtype\">int&#160;</td>\n\
          <td class=\"paramname\"><em>filterValue</em>&#160;</td>\n\
        </tr>\n\
        <tr>\n\
          <td></td>\n\
          <td>)</td>\n\
          <td></td><td></td>\n\
        </tr>\n\
      </table>\n\
</div><div class=\"memdoc\">\n\
\n\
<p>Add a new filter to the debug output. </p>\n\
<p>These filters are merely suggestions and it\'s up to the individual objects\' debugging methods to respect them or not. If the filter already existed it will just get the new value.</p>\n\
<dl class=\"params\"><dt>Parameters</dt><dd>\n\
  <table class=\"params\">\n\
    <tr><td class=\"paramdir\">[in]</td><td class=\"paramname\">filterName</td><td>Name of the filter to be added </td></tr>\n\
    <tr><td class=\"paramdir\">[in]</td><td class=\"paramname\">filterValue</td><td>Value of the filter to be added </td></tr>\n\
  </table>\n\
  </dd>\n\
</dl>\n\
\n\
</div>\n\
</div>\n\
<a class=\"anchor\" id=\"a0c7951b2643dcd7634a941c8fae8b536\"></a>\n\
<div class=\"memitem\">\n\
<div class=\"memproto\">\n\
      <table class=\"memname\">\n\
        <tr>\n\
          <td class=\"memname\" translate=\"no\">void removeFilter </td>\n\
          <td>(</td>\n\
          <td class=\"paramtype\">const std::string &amp;&#160;</td>\n\
          <td class=\"paramname\"><em>filterName</em></td><td>)</td>\n\
          <td></td>\n\
        </tr>\n\
      </table>\n\
</div><div class=\"memdoc\">\n\
\n\
<p>Remove an existing filter to the debug output. </p>\n\
<p>If the filter didn\'t exist this will just silently succeed.</p>\n\
<dl class=\"params\"><dt>Parameters</dt><dd>\n\
  <table class=\"params\">\n\
    <tr><td class=\"paramdir\">[in]</td><td class=\"paramname\">filterName</td><td>Name of the filter to be removed </td></tr>\n\
  </table>\n\
  </dd>\n\
</dl>\n\
\n\
</div>\n\
</div>\n\
<a class=\"anchor\" id=\"aa95d716a7a127b4ea95cb556f8723cfc\"></a>\n\
<div class=\"memitem\">\n\
<div class=\"memproto\">\n\
      <table class=\"memname\">\n\
        <tr>\n\
          <td class=\"memname\" translate=\"no\">bool findFilter </td>\n\
          <td>(</td>\n\
          <td class=\"paramtype\">const std::string &amp;&#160;</td>\n\
          <td class=\"paramname\"><em>filterName</em>, </td>\n\
        </tr>\n\
        <tr>\n\
          <td class=\"paramkey\"></td>\n\
          <td></td>\n\
          <td class=\"paramtype\">int &amp;&#160;</td>\n\
          <td class=\"paramname\"><em>filterValue</em>&#160;</td>\n\
        </tr>\n\
        <tr>\n\
          <td></td>\n\
          <td>)</td>\n\
          <td></td><td></td>\n\
        </tr>\n\
      </table>\n\
</div><div class=\"memdoc\">\n\
\n\
<p>Check for a filter\'s current value. </p>\n\
<p>If the filter exists then return true and set the value of the filter into the filterValue parameter, otherwise return false and the value of filterValue is undefined.</p>\n\
<dl class=\"params\"><dt>Parameters</dt><dd>\n\
  <table class=\"params\">\n\
    <tr><td class=\"paramdir\">[in]</td><td class=\"paramname\">filterName</td><td>Name of the filter to find </td></tr>\n\
    <tr><td class=\"paramdir\">[out]</td><td class=\"paramname\">filterValue</td><td>Value of the filter found, if it was found</td></tr>\n\
  </table>\n\
  </dd>\n\
</dl>\n\
<dl class=\"section return\"><dt>Returns</dt><dd>true if the filter existed </dd></dl>\n\
\n\
</div>\n\
</div>\n\
<a class=\"anchor\" id=\"a45389e4e8ecf1bec7ea35cd884a55d53\"></a>\n\
<div class=\"memitem\">\n\
<div class=\"memproto\">\n\
      <table class=\"memname\">\n\
        <tr>\n\
          <td class=\"memname\" translate=\"no\">std::ostream &amp; doIndent </td>\n\
          <td>(</td>\n\
          <td class=\"paramname\"></td><td>)</td>\n\
          <td></td>\n\
        </tr>\n\
      </table>\n\
</div><div class=\"memdoc\">\n\
\n\
<p>Dump the standard indentation to the output stream. </p>\n\
<dl class=\"section return\"><dt>Returns</dt><dd><a class=\"el\" translate=\"no\" href=\"#!/url=./cpp_ref/classadsk_1_1_debug_1_1_print.html\" title=\"Class implementing debug printing operation. \">Print</a> object to use for chained output </dd></dl>\n\
\n\
</div>\n\
</div>\n\
<a class=\"anchor\" id=\"ae0d70e9985b2f3baff3a6b8886008d40\"></a>\n\
<div class=\"memitem\">\n\
<div class=\"memproto\">\n\
      <table class=\"memname\">\n\
        <tr>\n\
          <td class=\"memname\" translate=\"no\">bool skipNextIndent </td>\n\
          <td>(</td>\n\
          <td class=\"paramtype\">bool&#160;</td>\n\
          <td class=\"paramname\"><em>doSkip</em></td><td>)</td>\n\
          <td></td>\n\
        </tr>\n\
      </table>\n\
</div><div class=\"memdoc\">\n\
\n\
<p>Change the ability to skip the next indentation print. </p>\n\
<dl class=\"params\"><dt>Parameters</dt><dd>\n\
  <table class=\"params\">\n\
    <tr><td class=\"paramdir\">[in]</td><td class=\"paramname\">doSkip</td><td>Should the next indent be skipped?</td></tr>\n\
  </table>\n\
  </dd>\n\
</dl>\n\
<dl class=\"section return\"><dt>Returns</dt><dd>Old indentation level </dd></dl>\n\
\n\
</div>\n\
</div>\n\
<a class=\"anchor\" id=\"ae8ec1ab1dc20a9d6867ebf0854b91de1\"></a>\n\
<div class=\"memitem\">\n\
<div class=\"memproto\">\n\
      <table class=\"memname\">\n\
        <tr>\n\
          <td class=\"memname\" translate=\"no\">int indent </td>\n\
          <td>(</td>\n\
          <td class=\"paramtype\">int&#160;</td>\n\
          <td class=\"paramname\"><em>relativeChange</em></td><td>)</td>\n\
          <td></td>\n\
        </tr>\n\
      </table>\n\
</div><div class=\"memdoc\">\n\
\n\
<p>Increment or decrement the current indentation level. </p>\n\
<dl class=\"params\"><dt>Parameters</dt><dd>\n\
  <table class=\"params\">\n\
    <tr><td class=\"paramdir\">[in]</td><td class=\"paramname\">relativeChange</td><td>Relative indentation level change</td></tr>\n\
  </table>\n\
  </dd>\n\
</dl>\n\
<dl class=\"section return\"><dt>Returns</dt><dd>Old indentation level </dd></dl>\n\
\n\
</div>\n\
</div>\n\
<a class=\"anchor\" id=\"a739c44c63c54a73cb15d50e1a760a35e\"></a>\n\
<div class=\"memitem\">\n\
<div class=\"memproto\">\n\
      <table class=\"memname\">\n\
        <tr>\n\
          <td class=\"memname\" translate=\"no\">int setIndent </td>\n\
          <td>(</td>\n\
          <td class=\"paramtype\">int&#160;</td>\n\
          <td class=\"paramname\"><em>newIndent</em></td><td>)</td>\n\
          <td></td>\n\
        </tr>\n\
      </table>\n\
</div><div class=\"memdoc\">\n\
\n\
<p>Define a new indentation level, independently of the old one. </p>\n\
<dl class=\"params\"><dt>Parameters</dt><dd>\n\
  <table class=\"params\">\n\
    <tr><td class=\"paramdir\">[in]</td><td class=\"paramname\">newIndent</td><td>New current indentation level</td></tr>\n\
  </table>\n\
  </dd>\n\
</dl>\n\
<dl class=\"section return\"><dt>Returns</dt><dd>The old indentation level </dd></dl>\n\
\n\
</div>\n\
</div>\n\
<a class=\"anchor\" id=\"aa97ccc03844c1af21965d689c125f1e0\"></a>\n\
<div class=\"memitem\">\n\
<div class=\"memproto\">\n\
      <table class=\"memname\">\n\
        <tr>\n\
          <td class=\"memname\" translate=\"no\">std::string setIndentString </td>\n\
          <td>(</td>\n\
          <td class=\"paramtype\">const std::string &amp;&#160;</td>\n\
          <td class=\"paramname\"><em>newIndentString</em></td><td>)</td>\n\
          <td></td>\n\
        </tr>\n\
      </table>\n\
</div><div class=\"memdoc\">\n\
\n\
<p>Define a new indentation string. </p>\n\
<p>The indentation string is what\'s repeated at the beginning of any new output. It repeats \"fIndentLevel\" times.</p>\n\
<dl class=\"params\"><dt>Parameters</dt><dd>\n\
  <table class=\"params\">\n\
    <tr><td class=\"paramdir\">[in]</td><td class=\"paramname\">newIndentString</td><td>New current indentation string</td></tr>\n\
  </table>\n\
  </dd>\n\
</dl>\n\
<dl class=\"section return\"><dt>Returns</dt><dd>The old indentation string </dd></dl>\n\
\n\
</div>\n\
</div>\n\
<hr>The documentation for this class was generated from the following files:<ul>\n\
<li>adskDebugPrint.h</li>\n\
<li>adskDebugPrint.cpp</li>\n\
</ul>\n\
</div><!-- contents -->\n\
</div><!-- doc-content -->\n\
          <div class=\"footer-block\"><a href=\"../html/ac.cmtdialog.htm\" class=\"comments-anchor\" target=\"_blank\"><span class=\"comments-link\">Please send us your comment about this page</span></a></div><br></div>\n\
   </div></body>\n\
</html>\n\
";