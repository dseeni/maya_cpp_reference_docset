var topic = "<!-- saved from url=(0024)http://docs.autodesk.com -->\n\
<html>\n\
   <head><script src=\"../scripts/yepnope.1.5.4-min.js\" type=\"text/javascript\"></script><script src=\"../scripts/lib/jquery-1.11.1.min.js\" type=\"text/javascript\"></script><meta http-equiv=\"Content-Type\" content=\"text/html; charset=UTF-8\"><meta name=\"product\" content=\"MAYAUL\"><meta name=\"release\" content=\"2016\"><meta name=\"book\" content=\"Developer\"><meta name=\"created\" content=\"2015-10-14\"><meta name=\"topicid\" content=\"GUID-02DEF634-1E7B-48C6-8ACD-2C934CA97887\"><meta name=\"topic-type\" content=\"concept\">\n\
      <title>MExternalDropCallback Class Reference</title>\n\
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
    cpp_ref_adsk_ref_toc.initNavTree(\'class_m_external_drop_callback.html\', tocPrefix);\n\
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
</script><script>$(\"div#WidgetFloaterPanels,link[href*=\'microsofttranslator.com\'],script[src*=\'microsofttranslator.com\'],script[src*=\'bing.com\']\").remove();</script><script type=\'text/javascript\'>$(\"div#navigation,div#breadcrumbs,div#banner\").attr(\"translate\",\"no\"); var mtLocation = ((location && location.href && location.href.indexOf(\'https\') == 0)?\'https://ssl.microsofttranslator.com\':\'http://www.microsofttranslator.com\')+\'/ajax/v3/WidgetV3.ashx?siteData=y5CYlxTRD0znCzRLDwX0Wy7-g1EdC1XA4dSC-Y1LtaeScyli8_Ps5jPKqTr4xKxMI0OOUfkDplvX3uxN0JnPclebSYW8_J1HBzf4VLQEzQ8M4PsYXF_cMyp1Oumaetky&category=5297189e-446b-459e-ae1d-9d0360400781_tech&ctf=True&ui=true&settings=Manual&from=en&hidelanguages=\'; yepnope.injectJs(mtLocation, function() {}, { charset:\'utf-8\', type:\'text/javascript\' } );</script><script>\n\
 if (!tocSystemNeedsToBeLoaded) { cpp_ref_initializeToc(); }\n\
 </script><!-- begin MT -->\n\
            \n\
            <div id=\'MicrosoftTranslatorWidget\' class=\'Dark\' style=\'position:absolute;right:20px;top:5px;z-index:100;color:white;background-color:#555555;height:58px;overflow:hidden\'></div>\n\
      <div>\n\
         <div class=\"head\">\n\
            <h1>MExternalDropCallback Class Reference</h1>\n\
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
<div class=\"title\">MExternalDropCallback Class Reference<span class=\"mlabels\"><span class=\"mlabel\">abstract</span></span><div class=\"ingroups\"><a class=\"el\" translate=\"no\" href=\"#!/url=./cpp_ref/group___open_maya_u_i.html\">OpenMayaUI - API module for user interface</a></div></div>  </div>\n\
<div id=\"OverviewLinksDiv\"><div id=\"dynsection-overview\" onclick=\"return toggleVisibility(this)\" class=\"dynheader closed\" style=\"cursor:pointer;\"><img id=\"dynsection-overview-trigger\" src=\"cpp_ref/closed.png\" alt=\"+\"> Related help topics: </div><div id=\"dynsection-overview-content\" class=\"dyncontent\" style=\"display:none;\"><ul class=\"overviewLinks\">\n\
<li class=\"overviewLink\"><a href=\"#!/url=./files/GUID-6AEBAFF0-CF7B-443E-96CD-B9EBA1B927DF.htm\">What\'s New / What\'s Changed? &gt; Autodesk Maya 2013</a></li>\n\
</ul></div></div>\n\
<div class=\"summary\">\n\
<a href=\"class_m_external_drop_callback.html#pub-types\">Public Types</a> &#124;\n\
<a href=\"class_m_external_drop_callback.html#pub-methods\">Public Member Functions</a> &#124;\n\
<a href=\"class_m_external_drop_callback.html#pub-static-methods\">Static Public Member Functions</a>  </div></div><!--header-->\n\
<div class=\"contents\">\n\
\n\
<p><code>#include &lt;MExternalDropCallback.h&gt;</code></p>\n\
<a name=\"details\" id=\"details\"></a><h2 class=\"groupheader\">Class Description</h2>\n\
<div class=\"textblock\"><p>Provides a callback hook into Maya\'s drag-and-drop mechanism. </p>\n\
<p>This class is used to register callbacks to gain access to Maya\'s drag-and-drop information during dropping an external object to Maya. You can replace or augment Maya\'s drop behavior for external drag-and-drop operations.</p>\n\
<p>To register callbacks, inherit from this class and override <a class=\"el\" translate=\"no\" href=\"#!/url=./cpp_ref/class_m_external_drop_callback.html#a617b46b41220bce4862bef36fdd62ed2\" title=\"This pure virtual method must be implemented by derived callback classes. \">externalDropCallback()</a>. The method can be overridden by the callback. Then register the callbacks by calling the <a class=\"el\" translate=\"no\" href=\"#!/url=./cpp_ref/class_m_external_drop_callback.html#ae61f6a4e2784a5a5a70fb4fb1007274b\" title=\"Add a callback to the list. \">addCallback()</a> method.</p>\n\
<p>Each of the callback methods gets passed the name of the drop site control and an <a class=\"el\" translate=\"no\" href=\"#!/url=./cpp_ref/class_m_external_drop_data.html\" title=\"Drag-and-drop data, used with MExternalDropCallback. \">MExternalDropData</a> instance which contains additional information provided by the system (for example, text or URL information associated with the drop).</p>\n\
<p>If multiple callbacks need to be registered, the order of invocation can be set by adding each callback with a priority number, 0 being the highest priority. Callbacks are then invoked in priority order. Note that the first callback that does not return kMayaDefault will cause the invocations to stop; lower priority callbacks will then not be invoked. </p>\n\
<dl class=\"section \"><div id=\"dynsection-example0\" class=\"dynheader closed\" onclick=\"return toggleVisibility(this)\" style=\"cursor:pointer;\"><dt><img id=\"dynsection-example0-trigger\" src=\"cpp_ref/closed.png\" alt=\"+\"> <b>Examples: </b></dt></div><div id=\"dynsection-example0-content\" class=\"dyncontent\" style=\"display:none;\"><dd><a class=\"el\" translate=\"no\" href=\"#!/url=./cpp_ref/external_drop_callback_2external_drop_callback_8cpp-example.html#_a0\">externalDropCallback/externalDropCallback.cpp</a>.</dd></div>\n\
</dl></div><table class=\"memberdecls\">\n\
<tr class=\"heading\"><td colspan=\"2\"><h2 class=\"groupheader\"><a name=\"pub-types\"></a>\n\
Public Types</h2></td></tr>\n\
<tr class=\"memitem:acc5abda9d60fadda68bc2b5b21e6bc07\"><td class=\"memItemLeft\" translate=\"no\" align=\"right\" valign=\"top\">enum &#160;</td><td class=\"memItemRight\" translate=\"no\" valign=\"bottom\"><a class=\"el\" translate=\"no\" href=\"#!/url=./cpp_ref/class_m_external_drop_callback.html#acc5abda9d60fadda68bc2b5b21e6bc07\">MExternalDropStatus</a> { <a class=\"el\" translate=\"no\" href=\"#!/url=./cpp_ref/class_m_external_drop_callback.html#acc5abda9d60fadda68bc2b5b21e6bc07a552439e38fe53513a22f61cbabead680\">kMayaDefault</a> = 0, \n\
<a class=\"el\" translate=\"no\" href=\"#!/url=./cpp_ref/class_m_external_drop_callback.html#acc5abda9d60fadda68bc2b5b21e6bc07a64cfd24bf98bfe9ccb1053678400809c\">kNoMayaDefaultAndAccept</a>, \n\
<a class=\"el\" translate=\"no\" href=\"#!/url=./cpp_ref/class_m_external_drop_callback.html#acc5abda9d60fadda68bc2b5b21e6bc07a963ec81e2a12228e641fe5f6555d809c\">kNoMayaDefaultAndNoAccept</a>\n\
 }<tr class=\"memdesc:acc5abda9d60fadda68bc2b5b21e6bc07\"><td class=\"mdescLeft\">&#160;</td><td class=\"mdescRight\">Possible return values from <a class=\"el\" translate=\"no\" href=\"#!/url=./cpp_ref/class_m_external_drop_callback.html#a617b46b41220bce4862bef36fdd62ed2\" title=\"This pure virtual method must be implemented by derived callback classes. \">externalDropCallback()</a>, used to inform Maya of what further action to take, if any.  <a href=\"#!/url=./cpp_ref/class_m_external_drop_callback.html#acc5abda9d60fadda68bc2b5b21e6bc07\">More...</a><br></td></tr>\n\
<tr class=\"separator:acc5abda9d60fadda68bc2b5b21e6bc07\"><td class=\"memSeparator\" colspan=\"2\">&#160;</td></tr>\n\
</td></tr>\n\
</table><table class=\"memberdecls\">\n\
<tr class=\"heading\"><td colspan=\"2\"><h2 class=\"groupheader\"><a name=\"pub-methods\"></a>\n\
Public Member Functions</h2></td></tr>\n\
<tr class=\"memitem:a77f4111a48f5c380c0cedc22e70a5713\"><td class=\"memItemLeft\" translate=\"no\" align=\"right\" valign=\"top\"><a class=\"anchor\" id=\"a77f4111a48f5c380c0cedc22e70a5713\"></a>\n\
&#160;</td><td class=\"memItemRight\" translate=\"no\" valign=\"bottom\"><a class=\"el\" translate=\"no\" href=\"#!/url=./cpp_ref/class_m_external_drop_callback.html#a77f4111a48f5c380c0cedc22e70a5713\">MExternalDropCallback</a> ()</td></tr>\n\
<tr class=\"memdesc:a77f4111a48f5c380c0cedc22e70a5713\"><td class=\"mdescLeft\">&#160;</td><td class=\"mdescRight\">Constructor. <br></td></tr>\n\
<tr class=\"separator:a77f4111a48f5c380c0cedc22e70a5713\"><td class=\"memSeparator\" colspan=\"2\">&#160;</td></tr>\n\
<tr class=\"memitem:ae575bf5c1858448b785e93e0aa906e65\"><td class=\"memItemLeft\" translate=\"no\" align=\"right\" valign=\"top\"><a class=\"anchor\" id=\"ae575bf5c1858448b785e93e0aa906e65\"></a>\n\
virtual&#160;</td><td class=\"memItemRight\" translate=\"no\" valign=\"bottom\"><a class=\"el\" translate=\"no\" href=\"#!/url=./cpp_ref/class_m_external_drop_callback.html#ae575bf5c1858448b785e93e0aa906e65\">~MExternalDropCallback</a> ()</td></tr>\n\
<tr class=\"memdesc:ae575bf5c1858448b785e93e0aa906e65\"><td class=\"mdescLeft\">&#160;</td><td class=\"mdescRight\">Destructor. <br></td></tr>\n\
<tr class=\"separator:ae575bf5c1858448b785e93e0aa906e65\"><td class=\"memSeparator\" colspan=\"2\">&#160;</td></tr>\n\
<tr class=\"memitem:a617b46b41220bce4862bef36fdd62ed2\"><td class=\"memItemLeft\" translate=\"no\" align=\"right\" valign=\"top\">virtual <a class=\"el\" translate=\"no\" href=\"#!/url=./cpp_ref/class_m_external_drop_callback.html#acc5abda9d60fadda68bc2b5b21e6bc07\">MExternalDropStatus</a>&#160;</td><td class=\"memItemRight\" translate=\"no\" valign=\"bottom\"><a class=\"el\" translate=\"no\" href=\"#!/url=./cpp_ref/class_m_external_drop_callback.html#a617b46b41220bce4862bef36fdd62ed2\">externalDropCallback</a> (bool doDrop, const <a class=\"el\" translate=\"no\" href=\"#!/url=./cpp_ref/class_m_string.html\">MString</a> &amp;controlName, const <a class=\"el\" translate=\"no\" href=\"#!/url=./cpp_ref/class_m_external_drop_data.html\">MExternalDropData</a> &amp;data)=0</td></tr>\n\
<tr class=\"memdesc:a617b46b41220bce4862bef36fdd62ed2\"><td class=\"mdescLeft\">&#160;</td><td class=\"mdescRight\">This pure virtual method must be implemented by derived callback classes.  <a href=\"class_m_external_drop_callback.html#a617b46b41220bce4862bef36fdd62ed2\">More...</a><br></td></tr>\n\
<tr class=\"separator:a617b46b41220bce4862bef36fdd62ed2\"><td class=\"memSeparator\" colspan=\"2\">&#160;</td></tr>\n\
</table><table class=\"memberdecls\">\n\
<tr class=\"heading\"><td colspan=\"2\"><h2 class=\"groupheader\"><a name=\"pub-static-methods\"></a>\n\
Static Public Member Functions</h2></td></tr>\n\
<tr class=\"memitem:ae61f6a4e2784a5a5a70fb4fb1007274b\"><td class=\"memItemLeft\" translate=\"no\" align=\"right\" valign=\"top\">static <a class=\"el\" translate=\"no\" href=\"#!/url=./cpp_ref/class_m_status.html\">MStatus</a>&#160;</td><td class=\"memItemRight\" translate=\"no\" valign=\"bottom\"><a class=\"el\" translate=\"no\" href=\"#!/url=./cpp_ref/class_m_external_drop_callback.html#ae61f6a4e2784a5a5a70fb4fb1007274b\">addCallback</a> (<a class=\"el\" translate=\"no\" href=\"#!/url=./cpp_ref/class_m_external_drop_callback.html\">MExternalDropCallback</a> *, int priority=0)</td></tr>\n\
<tr class=\"memdesc:ae61f6a4e2784a5a5a70fb4fb1007274b\"><td class=\"mdescLeft\">&#160;</td><td class=\"mdescRight\">Add a callback to the list.  <a href=\"class_m_external_drop_callback.html#ae61f6a4e2784a5a5a70fb4fb1007274b\">More...</a><br></td></tr>\n\
<tr class=\"separator:ae61f6a4e2784a5a5a70fb4fb1007274b\"><td class=\"memSeparator\" colspan=\"2\">&#160;</td></tr>\n\
<tr class=\"memitem:a1ab82d842401fc86e56501998f993ec7\"><td class=\"memItemLeft\" translate=\"no\" align=\"right\" valign=\"top\">static <a class=\"el\" translate=\"no\" href=\"#!/url=./cpp_ref/class_m_status.html\">MStatus</a>&#160;</td><td class=\"memItemRight\" translate=\"no\" valign=\"bottom\"><a class=\"el\" translate=\"no\" href=\"#!/url=./cpp_ref/class_m_external_drop_callback.html#a1ab82d842401fc86e56501998f993ec7\">removeCallback</a> (<a class=\"el\" translate=\"no\" href=\"#!/url=./cpp_ref/class_m_external_drop_callback.html\">MExternalDropCallback</a> *)</td></tr>\n\
<tr class=\"memdesc:a1ab82d842401fc86e56501998f993ec7\"><td class=\"mdescLeft\">&#160;</td><td class=\"mdescRight\">Remove a callback from the list.  <a href=\"class_m_external_drop_callback.html#a1ab82d842401fc86e56501998f993ec7\">More...</a><br></td></tr>\n\
<tr class=\"separator:a1ab82d842401fc86e56501998f993ec7\"><td class=\"memSeparator\" colspan=\"2\">&#160;</td></tr>\n\
</table>\n\
<h2 class=\"groupheader\">Member Enumeration Documentation</h2>\n\
<a class=\"anchor\" id=\"acc5abda9d60fadda68bc2b5b21e6bc07\"></a>\n\
<div class=\"memitem\">\n\
<div class=\"memproto\">\n\
      <table class=\"memname\">\n\
        <tr>\n\
          <td class=\"memname\" translate=\"no\">enum <a class=\"el\" translate=\"no\" href=\"#!/url=./cpp_ref/class_m_external_drop_callback.html#acc5abda9d60fadda68bc2b5b21e6bc07\">MExternalDropStatus</a></td>\n\
        </tr>\n\
      </table>\n\
</div><div class=\"memdoc\">\n\
\n\
<p>Possible return values from <a class=\"el\" translate=\"no\" href=\"#!/url=./cpp_ref/class_m_external_drop_callback.html#a617b46b41220bce4862bef36fdd62ed2\" title=\"This pure virtual method must be implemented by derived callback classes. \">externalDropCallback()</a>, used to inform Maya of what further action to take, if any. </p>\n\
<table class=\"fieldtable\">\n\
<tr><th colspan=\"2\">Enumerator</th></tr><tr><td class=\"fieldname\"><a class=\"anchor\" id=\"acc5abda9d60fadda68bc2b5b21e6bc07a552439e38fe53513a22f61cbabead680\"></a>kMayaDefault&#160;</td><td class=\"fielddoc\">\n\
<p>Run Maya default action. </p>\n\
</td></tr>\n\
<tr><td class=\"fieldname\"><a class=\"anchor\" id=\"acc5abda9d60fadda68bc2b5b21e6bc07a64cfd24bf98bfe9ccb1053678400809c\"></a>kNoMayaDefaultAndAccept&#160;</td><td class=\"fielddoc\">\n\
<p>Skip Maya default action and accept the drop. </p>\n\
</td></tr>\n\
<tr><td class=\"fieldname\"><a class=\"anchor\" id=\"acc5abda9d60fadda68bc2b5b21e6bc07a963ec81e2a12228e641fe5f6555d809c\"></a>kNoMayaDefaultAndNoAccept&#160;</td><td class=\"fielddoc\">\n\
<p>Skip Maya default action and do not accept the drop. </p>\n\
</td></tr>\n\
</table>\n\
\n\
</div>\n\
</div>\n\
<h2 class=\"groupheader\">Member Function Documentation</h2>\n\
<a class=\"anchor\" id=\"a617b46b41220bce4862bef36fdd62ed2\"></a>\n\
<div class=\"memitem\">\n\
<div class=\"memproto\">\n\
<table class=\"mlabels\">\n\
  <tr>\n\
  <td class=\"mlabels-left\">\n\
      <table class=\"memname\">\n\
        <tr>\n\
          <td class=\"memname\" translate=\"no\"><a class=\"el\" translate=\"no\" href=\"#!/url=./cpp_ref/class_m_external_drop_callback.html#acc5abda9d60fadda68bc2b5b21e6bc07\">MExternalDropCallback::MExternalDropStatus</a> externalDropCallback </td>\n\
          <td>(</td>\n\
          <td class=\"paramtype\">bool&#160;</td>\n\
          <td class=\"paramname\"><em>doDrop</em>, </td>\n\
        </tr>\n\
        <tr>\n\
          <td class=\"paramkey\"></td>\n\
          <td></td>\n\
          <td class=\"paramtype\">const <a class=\"el\" translate=\"no\" href=\"#!/url=./cpp_ref/class_m_string.html\">MString</a> &amp;&#160;</td>\n\
          <td class=\"paramname\"><em>controlName</em>, </td>\n\
        </tr>\n\
        <tr>\n\
          <td class=\"paramkey\"></td>\n\
          <td></td>\n\
          <td class=\"paramtype\">const <a class=\"el\" translate=\"no\" href=\"#!/url=./cpp_ref/class_m_external_drop_data.html\">MExternalDropData</a> &amp;&#160;</td>\n\
          <td class=\"paramname\"><em>data</em>&#160;</td>\n\
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
<p>This pure virtual method must be implemented by derived callback classes. </p>\n\
<p>It is called one or more times during a drag-and-drop operation, as a user drags the mouse over various UI elements.</p>\n\
<p>When called with doDrop <em>false</em>, the callback is simply checking whether it is valid to drop the current item onto the control in question. If doDrop is <em>true</em>, the callback should actually perform the drop operation, if any.</p>\n\
<p>The controlName provided is the full path to the control, and can be for example passed to MEL commands that query or operate on UI objects.</p>\n\
<p>The <a class=\"el\" translate=\"no\" href=\"#!/url=./cpp_ref/class_m_external_drop_data.html\" title=\"Drag-and-drop data, used with MExternalDropCallback. \">MExternalDropData</a> instance contains the actual drop data provided by the operating system. For example, if a file is being dragged from the desktop into Maya, the drop data might contain the path (as a URL) of the file.</p>\n\
<dl class=\"params\"><dt>Parameters</dt><dd>\n\
  <table class=\"params\">\n\
    <tr><td class=\"paramdir\">[in]</td><td class=\"paramname\">doDrop</td><td>true if the drop action should actually be performed (on mouse up), or false if this callback is just checking for a valid drop (on mouse drag) </td></tr>\n\
    <tr><td class=\"paramdir\">[in]</td><td class=\"paramname\">controlName</td><td>the full name of the UI element onto which the drop will take place </td></tr>\n\
    <tr><td class=\"paramdir\">[in]</td><td class=\"paramname\">data</td><td>an instance of <a class=\"el\" translate=\"no\" href=\"#!/url=./cpp_ref/class_m_external_drop_data.html\" title=\"Drag-and-drop data, used with MExternalDropCallback. \">MExternalDropData</a>, allowing access to the data associated with the drop</td></tr>\n\
  </table>\n\
  </dd>\n\
</dl>\n\
<dl class=\"section return\"><dt>Returns</dt><dd>a status code indicating what action Maya should take following the callback </dd></dl>\n\
<dl class=\"section \"><div id=\"dynsection-example1\" class=\"dynheader closed\" onclick=\"return toggleVisibility(this)\" style=\"cursor:pointer;\"><dt><img id=\"dynsection-example1-trigger\" src=\"cpp_ref/closed.png\" alt=\"+\"> <b>Examples: </b></dt></div><div id=\"dynsection-example1-content\" class=\"dyncontent\" style=\"display:none;\"><dd><a class=\"el\" translate=\"no\" href=\"#!/url=./cpp_ref/external_drop_callback_2external_drop_callback_8cpp-example.html#a1\">externalDropCallback/externalDropCallback.cpp</a>.</dd></div>\n\
</dl>\n\
</div>\n\
</div>\n\
<a class=\"anchor\" id=\"ae61f6a4e2784a5a5a70fb4fb1007274b\"></a>\n\
<div class=\"memitem\">\n\
<div class=\"memproto\">\n\
<table class=\"mlabels\">\n\
  <tr>\n\
  <td class=\"mlabels-left\">\n\
      <table class=\"memname\">\n\
        <tr>\n\
          <td class=\"memname\" translate=\"no\"><a class=\"el\" translate=\"no\" href=\"#!/url=./cpp_ref/class_m_status.html\">MStatus</a> addCallback </td>\n\
          <td>(</td>\n\
          <td class=\"paramtype\"><a class=\"el\" translate=\"no\" href=\"#!/url=./cpp_ref/class_m_external_drop_callback.html\">MExternalDropCallback</a> *&#160;</td>\n\
          <td class=\"paramname\"><em>cb</em>, </td>\n\
        </tr>\n\
        <tr>\n\
          <td class=\"paramkey\"></td>\n\
          <td></td>\n\
          <td class=\"paramtype\">int&#160;</td>\n\
          <td class=\"paramname\"><em>priority</em> = <code>0</code>&#160;</td>\n\
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
<p>Add a callback to the list. </p>\n\
<dl class=\"params\"><dt>Parameters</dt><dd>\n\
  <table class=\"params\">\n\
    <tr><td class=\"paramdir\">[in]</td><td class=\"paramname\">cb</td><td>The callback object to add. </td></tr>\n\
    <tr><td class=\"paramdir\">[in]</td><td class=\"paramname\">priority</td><td>The priority of the callback (zero is highest priority).</td></tr>\n\
  </table>\n\
  </dd>\n\
</dl>\n\
<dl class=\"section return\"><dt>Returns</dt><dd>status code</dd></dl>\n\
<dl class=\"section user\"><dt>Status Codes:</dt><dd><ul>\n\
<li><b><a class=\"el\" translate=\"no\" href=\"#!/url=./cpp_ref/class_m_status.html#a02ab596f4febca68da503aaf8dde3a80af0536797208144380691e2b376ffc1d1\" title=\"The operation was successful. \">MS::kSuccess</a></b> operation successful </li>\n\
<li><b><a class=\"el\" translate=\"no\" href=\"#!/url=./cpp_ref/class_m_status.html#a02ab596f4febca68da503aaf8dde3a80a1ef6c2d725fb4bec3e7e840d28adbc00\" title=\"The operation failed. \">MS::kFailure</a></b> operation failed - the callback object has already been added </li>\n\
<li><b><a class=\"el\" translate=\"no\" href=\"#!/url=./cpp_ref/class_m_status.html#a02ab596f4febca68da503aaf8dde3a80af8c5f748892ec74b32719c8fba7767e1\" title=\"An invalid parameter was provided. \">MS::kInvalidParameter</a></b> invalid callback object provided </li>\n\
</ul>\n\
</dd></dl>\n\
<dl class=\"section \"><div id=\"dynsection-example2\" class=\"dynheader closed\" onclick=\"return toggleVisibility(this)\" style=\"cursor:pointer;\"><dt><img id=\"dynsection-example2-trigger\" src=\"cpp_ref/closed.png\" alt=\"+\"> <b>Examples: </b></dt></div><div id=\"dynsection-example2-content\" class=\"dyncontent\" style=\"display:none;\"><dd><a class=\"el\" translate=\"no\" href=\"#!/url=./cpp_ref/external_drop_callback_2external_drop_callback_8cpp-example.html#a20\">externalDropCallback/externalDropCallback.cpp</a>.</dd></div>\n\
</dl>\n\
</div>\n\
</div>\n\
<a class=\"anchor\" id=\"a1ab82d842401fc86e56501998f993ec7\"></a>\n\
<div class=\"memitem\">\n\
<div class=\"memproto\">\n\
<table class=\"mlabels\">\n\
  <tr>\n\
  <td class=\"mlabels-left\">\n\
      <table class=\"memname\">\n\
        <tr>\n\
          <td class=\"memname\" translate=\"no\"><a class=\"el\" translate=\"no\" href=\"#!/url=./cpp_ref/class_m_status.html\">MStatus</a> removeCallback </td>\n\
          <td>(</td>\n\
          <td class=\"paramtype\"><a class=\"el\" translate=\"no\" href=\"#!/url=./cpp_ref/class_m_external_drop_callback.html\">MExternalDropCallback</a> *&#160;</td>\n\
          <td class=\"paramname\"><em>cb</em></td><td>)</td>\n\
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
<p>Remove a callback from the list. </p>\n\
<dl class=\"params\"><dt>Parameters</dt><dd>\n\
  <table class=\"params\">\n\
    <tr><td class=\"paramdir\">[in]</td><td class=\"paramname\">cb</td><td>The callback object to remove.</td></tr>\n\
  </table>\n\
  </dd>\n\
</dl>\n\
<dl class=\"section return\"><dt>Returns</dt><dd>status code</dd></dl>\n\
<dl class=\"section user\"><dt>Status Codes:</dt><dd><ul>\n\
<li><b><a class=\"el\" translate=\"no\" href=\"#!/url=./cpp_ref/class_m_status.html#a02ab596f4febca68da503aaf8dde3a80af0536797208144380691e2b376ffc1d1\" title=\"The operation was successful. \">MS::kSuccess</a></b> operation successful </li>\n\
<li><b><a class=\"el\" translate=\"no\" href=\"#!/url=./cpp_ref/class_m_status.html#a02ab596f4febca68da503aaf8dde3a80a1ef6c2d725fb4bec3e7e840d28adbc00\" title=\"The operation failed. \">MS::kFailure</a></b> operation failed - the callback object has not been previously added </li>\n\
<li><b><a class=\"el\" translate=\"no\" href=\"#!/url=./cpp_ref/class_m_status.html#a02ab596f4febca68da503aaf8dde3a80af8c5f748892ec74b32719c8fba7767e1\" title=\"An invalid parameter was provided. \">MS::kInvalidParameter</a></b> invalid callback object provided </li>\n\
</ul>\n\
</dd></dl>\n\
<dl class=\"section \"><div id=\"dynsection-example3\" class=\"dynheader closed\" onclick=\"return toggleVisibility(this)\" style=\"cursor:pointer;\"><dt><img id=\"dynsection-example3-trigger\" src=\"cpp_ref/closed.png\" alt=\"+\"> <b>Examples: </b></dt></div><div id=\"dynsection-example3-content\" class=\"dyncontent\" style=\"display:none;\"><dd><a class=\"el\" translate=\"no\" href=\"#!/url=./cpp_ref/external_drop_callback_2external_drop_callback_8cpp-example.html#a21\">externalDropCallback/externalDropCallback.cpp</a>.</dd></div>\n\
</dl>\n\
</div>\n\
</div>\n\
<hr>The documentation for this class was generated from the following files:<ul>\n\
<li>MExternalDropCallback.h</li>\n\
<li>MExternalDropCallback.cpp</li>\n\
</ul>\n\
</div><!-- contents -->\n\
</div><!-- doc-content -->\n\
          <div class=\"footer-block\"><a href=\"../html/ac.cmtdialog.htm\" class=\"comments-anchor\" target=\"_blank\"><span class=\"comments-link\">Please send us your comment about this page</span></a></div><br></div>\n\
   </div></body>\n\
</html>\n\
";