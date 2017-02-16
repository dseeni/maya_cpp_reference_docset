var topic = "<!-- saved from url=(0024)http://docs.autodesk.com -->\n\
<html>\n\
   <head><script src=\"../scripts/yepnope.1.5.4-min.js\" type=\"text/javascript\"></script><script src=\"../scripts/lib/jquery-1.11.1.min.js\" type=\"text/javascript\"></script><meta http-equiv=\"Content-Type\" content=\"text/html; charset=UTF-8\"><meta name=\"product\" content=\"MAYAUL\"><meta name=\"release\" content=\"2017\"><meta name=\"book\" content=\"Developer\"><meta name=\"created\" content=\"2016-06-16\"><meta name=\"topicid\" content=\"GUID-02DEF634-1E7B-48C6-8ACD-2C934CA97887\"><meta name=\"topic-type\" content=\"concept\">\n\
      <title>MTargetBlendDesc Class Reference</title>\n\
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
    cpp_ref_adsk_ref_toc.initNavTree(\'class_m_h_w_render_1_1_m_target_blend_desc.html\', tocPrefix);\n\
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
            <h1>MTargetBlendDesc Class Reference</h1>\n\
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
<div class=\"title\">MTargetBlendDesc Class Reference<div class=\"ingroups\"><a class=\"el\" translate=\"no\" href=\"#!/url=./cpp_ref/group___open_maya_render.html\">OpenMayaRender - API module for rendering</a></div></div>  </div>\n\
<div class=\"summary\">\n\
<a href=\"class_m_h_w_render_1_1_m_target_blend_desc.html#pub-methods\">Public Member Functions</a> &#124;\n\
<a href=\"class_m_h_w_render_1_1_m_target_blend_desc.html#pub-static-methods\">Static Public Member Functions</a> &#124;\n\
<a href=\"class_m_h_w_render_1_1_m_target_blend_desc.html#pub-attribs\">Public Attributes</a>  </div></div><!--header-->\n\
<div class=\"contents\">\n\
\n\
<p><code>#include &lt;MStateManager.h&gt;</code></p>\n\
<a name=\"details\" id=\"details\"></a><h2 class=\"groupheader\">Class Description</h2>\n\
<div class=\"textblock\"><p>Descriptor for a blend state for a single render target. </p>\n\
<p>This class holds the complete blend state for a single render target. The blended result will be: result = !BlendEnable ? source : blendOperation(sourceBlendOption(source), destinationBlendOption(destination));</p>\n\
<p><a class=\"el\" translate=\"no\" href=\"#!/url=./cpp_ref/class_m_h_w_render_1_1_m_blend_state_desc.html\" title=\"Descriptor for a complete blend state. \">MBlendStateDesc</a> maintains an array of <a class=\"el\" translate=\"no\" href=\"#!/url=./cpp_ref/class_m_h_w_render_1_1_m_target_blend_desc.html\" title=\"Descriptor for a blend state for a single render target. \">MTargetBlendDesc</a> of size <a class=\"el\" translate=\"no\" href=\"#!/url=./cpp_ref/class_m_h_w_render_1_1_m_blend_state.html#ab6b4785ac0e20c5947d74921bacc49b8\" title=\"Maximum number of simulatanious render targets. \">MBlendState::kMaxTargets</a>. </p>\n\
</div><table class=\"memberdecls\">\n\
<tr class=\"heading\"><td colspan=\"2\"><h2 class=\"groupheader\"><a name=\"pub-methods\"></a>\n\
Public Member Functions</h2></td></tr>\n\
<tr class=\"memitem:a4fa1ae3d7e0cdeba289425562c7507a7\"><td class=\"memItemLeft\" translate=\"no\" align=\"right\" valign=\"top\"><a class=\"anchor\" id=\"a4fa1ae3d7e0cdeba289425562c7507a7\"></a>\n\
&#160;</td><td class=\"memItemRight\" translate=\"no\" valign=\"bottom\"><a class=\"el\" translate=\"no\" href=\"#!/url=./cpp_ref/class_m_h_w_render_1_1_m_target_blend_desc.html#a4fa1ae3d7e0cdeba289425562c7507a7\">MTargetBlendDesc</a> ()</td></tr>\n\
<tr class=\"memdesc:a4fa1ae3d7e0cdeba289425562c7507a7\"><td class=\"mdescLeft\">&#160;</td><td class=\"mdescRight\">Constructor, builds a default target blend descriptor. <br></td></tr>\n\
<tr class=\"separator:a4fa1ae3d7e0cdeba289425562c7507a7\"><td class=\"memSeparator\" colspan=\"2\">&#160;</td></tr>\n\
<tr class=\"memitem:aff03f9fd1035ae902379bdff43606633\"><td class=\"memItemLeft\" translate=\"no\" align=\"right\" valign=\"top\"><a class=\"anchor\" id=\"aff03f9fd1035ae902379bdff43606633\"></a>\n\
&#160;</td><td class=\"memItemRight\" translate=\"no\" valign=\"bottom\"><a class=\"el\" translate=\"no\" href=\"#!/url=./cpp_ref/class_m_h_w_render_1_1_m_target_blend_desc.html#aff03f9fd1035ae902379bdff43606633\">~MTargetBlendDesc</a> ()</td></tr>\n\
<tr class=\"memdesc:aff03f9fd1035ae902379bdff43606633\"><td class=\"mdescLeft\">&#160;</td><td class=\"mdescRight\">Destructor. <br></td></tr>\n\
<tr class=\"separator:aff03f9fd1035ae902379bdff43606633\"><td class=\"memSeparator\" colspan=\"2\">&#160;</td></tr>\n\
<tr class=\"memitem:a8a64466bfb43094b3aec845670b959b4\"><td class=\"memItemLeft\" translate=\"no\" align=\"right\" valign=\"top\"><a class=\"anchor\" id=\"a8a64466bfb43094b3aec845670b959b4\"></a>\n\
void&#160;</td><td class=\"memItemRight\" translate=\"no\" valign=\"bottom\"><a class=\"el\" translate=\"no\" href=\"#!/url=./cpp_ref/class_m_h_w_render_1_1_m_target_blend_desc.html#a8a64466bfb43094b3aec845670b959b4\">setDefaults</a> ()</td></tr>\n\
<tr class=\"memdesc:a8a64466bfb43094b3aec845670b959b4\"><td class=\"mdescLeft\">&#160;</td><td class=\"mdescRight\">Set all values for the target blend state to their default values. <br></td></tr>\n\
<tr class=\"separator:a8a64466bfb43094b3aec845670b959b4\"><td class=\"memSeparator\" colspan=\"2\">&#160;</td></tr>\n\
<tr class=\"memitem:ab69fd066fb44d2bee2b973a012caeb17\"><td class=\"memItemLeft\" translate=\"no\" align=\"right\" valign=\"top\">&#160;</td><td class=\"memItemRight\" translate=\"no\" valign=\"bottom\"><a class=\"el\" translate=\"no\" href=\"#!/url=./cpp_ref/class_m_h_w_render_1_1_m_target_blend_desc.html#ab69fd066fb44d2bee2b973a012caeb17\">MTargetBlendDesc</a> (const <a class=\"el\" translate=\"no\" href=\"#!/url=./cpp_ref/class_m_h_w_render_1_1_m_target_blend_desc.html\">MTargetBlendDesc</a> &amp;rDesc)</td></tr>\n\
<tr class=\"memdesc:ab69fd066fb44d2bee2b973a012caeb17\"><td class=\"mdescLeft\">&#160;</td><td class=\"mdescRight\">NO SCRIPT SUPPORT.  <a href=\"class_m_h_w_render_1_1_m_target_blend_desc.html#ab69fd066fb44d2bee2b973a012caeb17\">More...</a><br></td></tr>\n\
<tr class=\"separator:ab69fd066fb44d2bee2b973a012caeb17\"><td class=\"memSeparator\" colspan=\"2\">&#160;</td></tr>\n\
<tr class=\"memitem:a58551b1ff4786a78f583ac39a952c544\"><td class=\"memItemLeft\" translate=\"no\" align=\"right\" valign=\"top\"><a class=\"el\" translate=\"no\" href=\"#!/url=./cpp_ref/class_m_h_w_render_1_1_m_target_blend_desc.html\">MTargetBlendDesc</a> &amp;&#160;</td><td class=\"memItemRight\" translate=\"no\" valign=\"bottom\"><a class=\"el\" translate=\"no\" href=\"#!/url=./cpp_ref/class_m_h_w_render_1_1_m_target_blend_desc.html#a58551b1ff4786a78f583ac39a952c544\">operator=</a> (const <a class=\"el\" translate=\"no\" href=\"#!/url=./cpp_ref/class_m_h_w_render_1_1_m_target_blend_desc.html\">MTargetBlendDesc</a> &amp;rDesc)</td></tr>\n\
<tr class=\"memdesc:a58551b1ff4786a78f583ac39a952c544\"><td class=\"mdescLeft\">&#160;</td><td class=\"mdescRight\">NO SCRIPT SUPPORT.  <a href=\"class_m_h_w_render_1_1_m_target_blend_desc.html#a58551b1ff4786a78f583ac39a952c544\">More...</a><br></td></tr>\n\
<tr class=\"separator:a58551b1ff4786a78f583ac39a952c544\"><td class=\"memSeparator\" colspan=\"2\">&#160;</td></tr>\n\
</table><table class=\"memberdecls\">\n\
<tr class=\"heading\"><td colspan=\"2\"><h2 class=\"groupheader\"><a name=\"pub-static-methods\"></a>\n\
Static Public Member Functions</h2></td></tr>\n\
<tr class=\"memitem:a774cd5d8fbebe8e7ed82a5aa587d1f04\"><td class=\"memItemLeft\" translate=\"no\" align=\"right\" valign=\"top\">static const char *&#160;</td><td class=\"memItemRight\" translate=\"no\" valign=\"bottom\"><a class=\"el\" translate=\"no\" href=\"#!/url=./cpp_ref/class_m_h_w_render_1_1_m_target_blend_desc.html#a774cd5d8fbebe8e7ed82a5aa587d1f04\">className</a> ()</td></tr>\n\
<tr class=\"memdesc:a774cd5d8fbebe8e7ed82a5aa587d1f04\"><td class=\"mdescLeft\">&#160;</td><td class=\"mdescRight\">Returns the name of this class.  <a href=\"class_m_h_w_render_1_1_m_target_blend_desc.html#a774cd5d8fbebe8e7ed82a5aa587d1f04\">More...</a><br></td></tr>\n\
<tr class=\"separator:a774cd5d8fbebe8e7ed82a5aa587d1f04\"><td class=\"memSeparator\" colspan=\"2\">&#160;</td></tr>\n\
</table><table class=\"memberdecls\">\n\
<tr class=\"heading\"><td colspan=\"2\"><h2 class=\"groupheader\"><a name=\"pub-attribs\"></a>\n\
Public Attributes</h2></td></tr>\n\
<tr class=\"memitem:af69e3282d64f8cfe88a2759960788417\"><td class=\"memItemLeft\" translate=\"no\" align=\"right\" valign=\"top\"><a class=\"anchor\" id=\"af69e3282d64f8cfe88a2759960788417\"></a>\n\
bool&#160;</td><td class=\"memItemRight\" translate=\"no\" valign=\"bottom\"><a class=\"el\" translate=\"no\" href=\"#!/url=./cpp_ref/class_m_h_w_render_1_1_m_target_blend_desc.html#af69e3282d64f8cfe88a2759960788417\">blendEnable</a></td></tr>\n\
<tr class=\"memdesc:af69e3282d64f8cfe88a2759960788417\"><td class=\"mdescLeft\">&#160;</td><td class=\"mdescRight\">Enable blending on this target, default is false. <br></td></tr>\n\
<tr class=\"separator:af69e3282d64f8cfe88a2759960788417\"><td class=\"memSeparator\" colspan=\"2\">&#160;</td></tr>\n\
<tr class=\"memitem:a5c49c83334018fa4b2f69ac30b60d003\"><td class=\"memItemLeft\" translate=\"no\" align=\"right\" valign=\"top\"><a class=\"anchor\" id=\"a5c49c83334018fa4b2f69ac30b60d003\"></a>\n\
<a class=\"el\" translate=\"no\" href=\"#!/url=./cpp_ref/class_m_h_w_render_1_1_m_blend_state.html#acdb056fac09601eaa8b5f1b5df3ee4ea\">MBlendState::BlendOption</a>&#160;</td><td class=\"memItemRight\" translate=\"no\" valign=\"bottom\"><a class=\"el\" translate=\"no\" href=\"#!/url=./cpp_ref/class_m_h_w_render_1_1_m_target_blend_desc.html#a5c49c83334018fa4b2f69ac30b60d003\">sourceBlend</a></td></tr>\n\
<tr class=\"memdesc:a5c49c83334018fa4b2f69ac30b60d003\"><td class=\"mdescLeft\">&#160;</td><td class=\"mdescRight\">The blend factor for the source color, default is one. <br></td></tr>\n\
<tr class=\"separator:a5c49c83334018fa4b2f69ac30b60d003\"><td class=\"memSeparator\" colspan=\"2\">&#160;</td></tr>\n\
<tr class=\"memitem:adadc1ea4b5fca51312ae451f346434e3\"><td class=\"memItemLeft\" translate=\"no\" align=\"right\" valign=\"top\"><a class=\"anchor\" id=\"adadc1ea4b5fca51312ae451f346434e3\"></a>\n\
<a class=\"el\" translate=\"no\" href=\"#!/url=./cpp_ref/class_m_h_w_render_1_1_m_blend_state.html#acdb056fac09601eaa8b5f1b5df3ee4ea\">MBlendState::BlendOption</a>&#160;</td><td class=\"memItemRight\" translate=\"no\" valign=\"bottom\"><a class=\"el\" translate=\"no\" href=\"#!/url=./cpp_ref/class_m_h_w_render_1_1_m_target_blend_desc.html#adadc1ea4b5fca51312ae451f346434e3\">destinationBlend</a></td></tr>\n\
<tr class=\"memdesc:adadc1ea4b5fca51312ae451f346434e3\"><td class=\"mdescLeft\">&#160;</td><td class=\"mdescRight\">The blend factor for the destination color, default is zero. <br></td></tr>\n\
<tr class=\"separator:adadc1ea4b5fca51312ae451f346434e3\"><td class=\"memSeparator\" colspan=\"2\">&#160;</td></tr>\n\
<tr class=\"memitem:a919cbb29a19a1fc79843f58e68ccad57\"><td class=\"memItemLeft\" translate=\"no\" align=\"right\" valign=\"top\"><a class=\"anchor\" id=\"a919cbb29a19a1fc79843f58e68ccad57\"></a>\n\
<a class=\"el\" translate=\"no\" href=\"#!/url=./cpp_ref/class_m_h_w_render_1_1_m_blend_state.html#ad3316ff174eff6a45c45f0e90d84eabe\">MBlendState::BlendOperation</a>&#160;</td><td class=\"memItemRight\" translate=\"no\" valign=\"bottom\"><a class=\"el\" translate=\"no\" href=\"#!/url=./cpp_ref/class_m_h_w_render_1_1_m_target_blend_desc.html#a919cbb29a19a1fc79843f58e68ccad57\">blendOperation</a></td></tr>\n\
<tr class=\"memdesc:a919cbb29a19a1fc79843f58e68ccad57\"><td class=\"mdescLeft\">&#160;</td><td class=\"mdescRight\">The blend operation, default is add. <br></td></tr>\n\
<tr class=\"separator:a919cbb29a19a1fc79843f58e68ccad57\"><td class=\"memSeparator\" colspan=\"2\">&#160;</td></tr>\n\
<tr class=\"memitem:a9fbc968d46ad9a7107696211e34b4e51\"><td class=\"memItemLeft\" translate=\"no\" align=\"right\" valign=\"top\"><a class=\"anchor\" id=\"a9fbc968d46ad9a7107696211e34b4e51\"></a>\n\
<a class=\"el\" translate=\"no\" href=\"#!/url=./cpp_ref/class_m_h_w_render_1_1_m_blend_state.html#acdb056fac09601eaa8b5f1b5df3ee4ea\">MBlendState::BlendOption</a>&#160;</td><td class=\"memItemRight\" translate=\"no\" valign=\"bottom\"><a class=\"el\" translate=\"no\" href=\"#!/url=./cpp_ref/class_m_h_w_render_1_1_m_target_blend_desc.html#a9fbc968d46ad9a7107696211e34b4e51\">alphaSourceBlend</a></td></tr>\n\
<tr class=\"memdesc:a9fbc968d46ad9a7107696211e34b4e51\"><td class=\"mdescLeft\">&#160;</td><td class=\"mdescRight\">The blend factor for the source alpha, default is one. <br></td></tr>\n\
<tr class=\"separator:a9fbc968d46ad9a7107696211e34b4e51\"><td class=\"memSeparator\" colspan=\"2\">&#160;</td></tr>\n\
<tr class=\"memitem:aa0f38fbd90e3171cc6c092e80ff25c7c\"><td class=\"memItemLeft\" translate=\"no\" align=\"right\" valign=\"top\"><a class=\"anchor\" id=\"aa0f38fbd90e3171cc6c092e80ff25c7c\"></a>\n\
<a class=\"el\" translate=\"no\" href=\"#!/url=./cpp_ref/class_m_h_w_render_1_1_m_blend_state.html#acdb056fac09601eaa8b5f1b5df3ee4ea\">MBlendState::BlendOption</a>&#160;</td><td class=\"memItemRight\" translate=\"no\" valign=\"bottom\"><a class=\"el\" translate=\"no\" href=\"#!/url=./cpp_ref/class_m_h_w_render_1_1_m_target_blend_desc.html#aa0f38fbd90e3171cc6c092e80ff25c7c\">alphaDestinationBlend</a></td></tr>\n\
<tr class=\"memdesc:aa0f38fbd90e3171cc6c092e80ff25c7c\"><td class=\"mdescLeft\">&#160;</td><td class=\"mdescRight\">The blend factor for the destination alpha, default is zero. <br></td></tr>\n\
<tr class=\"separator:aa0f38fbd90e3171cc6c092e80ff25c7c\"><td class=\"memSeparator\" colspan=\"2\">&#160;</td></tr>\n\
<tr class=\"memitem:a4d3de738732021fb87a82040e77f0aa4\"><td class=\"memItemLeft\" translate=\"no\" align=\"right\" valign=\"top\"><a class=\"anchor\" id=\"a4d3de738732021fb87a82040e77f0aa4\"></a>\n\
<a class=\"el\" translate=\"no\" href=\"#!/url=./cpp_ref/class_m_h_w_render_1_1_m_blend_state.html#ad3316ff174eff6a45c45f0e90d84eabe\">MBlendState::BlendOperation</a>&#160;</td><td class=\"memItemRight\" translate=\"no\" valign=\"bottom\"><a class=\"el\" translate=\"no\" href=\"#!/url=./cpp_ref/class_m_h_w_render_1_1_m_target_blend_desc.html#a4d3de738732021fb87a82040e77f0aa4\">alphaBlendOperation</a></td></tr>\n\
<tr class=\"memdesc:a4d3de738732021fb87a82040e77f0aa4\"><td class=\"mdescLeft\">&#160;</td><td class=\"mdescRight\">The blend operation for alpha, default is add. <br></td></tr>\n\
<tr class=\"separator:a4d3de738732021fb87a82040e77f0aa4\"><td class=\"memSeparator\" colspan=\"2\">&#160;</td></tr>\n\
<tr class=\"memitem:a187b082600ea97d72d0298d34778c252\"><td class=\"memItemLeft\" translate=\"no\" align=\"right\" valign=\"top\"><a class=\"el\" translate=\"no\" href=\"#!/url=./cpp_ref/class_m_h_w_render_1_1_m_blend_state.html#a508bf9ce7f09728669b77bdc572a2340\">MBlendState::ChannelMask</a>&#160;</td><td class=\"memItemRight\" translate=\"no\" valign=\"bottom\"><a class=\"el\" translate=\"no\" href=\"#!/url=./cpp_ref/class_m_h_w_render_1_1_m_target_blend_desc.html#a187b082600ea97d72d0298d34778c252\">targetWriteMask</a></td></tr>\n\
<tr class=\"memdesc:a187b082600ea97d72d0298d34778c252\"><td class=\"mdescLeft\">&#160;</td><td class=\"mdescRight\">Indicates what color components(red, green, blue, alpha) are writable, the default is RGBA.  <a href=\"class_m_h_w_render_1_1_m_target_blend_desc.html#a187b082600ea97d72d0298d34778c252\">More...</a><br></td></tr>\n\
<tr class=\"separator:a187b082600ea97d72d0298d34778c252\"><td class=\"memSeparator\" colspan=\"2\">&#160;</td></tr>\n\
</table>\n\
<h2 class=\"groupheader\">Constructor &amp; Destructor Documentation</h2>\n\
<a class=\"anchor\" id=\"ab69fd066fb44d2bee2b973a012caeb17\"></a>\n\
<div class=\"memitem\">\n\
<div class=\"memproto\">\n\
      <table class=\"memname\">\n\
        <tr>\n\
          <td class=\"memname\" translate=\"no\"><a class=\"el\" translate=\"no\" href=\"#!/url=./cpp_ref/class_m_h_w_render_1_1_m_target_blend_desc.html\">MTargetBlendDesc</a> </td>\n\
          <td>(</td>\n\
          <td class=\"paramtype\">const <a class=\"el\" translate=\"no\" href=\"#!/url=./cpp_ref/class_m_h_w_render_1_1_m_target_blend_desc.html\">MTargetBlendDesc</a> &amp;&#160;</td>\n\
          <td class=\"paramname\"><em>rDesc</em></td><td>)</td>\n\
          <td></td>\n\
        </tr>\n\
      </table>\n\
</div><div class=\"memdoc\">\n\
\n\
<p>NO SCRIPT SUPPORT. </p>\n\
<p>Copy constructor.</p>\n\
<dl class=\"params\"><dt>Parameters</dt><dd>\n\
  <table class=\"params\">\n\
    <tr><td class=\"paramdir\">[in]</td><td class=\"paramname\">rDesc</td><td>The descriptor to copy </td></tr>\n\
  </table>\n\
  </dd>\n\
</dl>\n\
\n\
</div>\n\
</div>\n\
<h2 class=\"groupheader\">Member Function Documentation</h2>\n\
<a class=\"anchor\" id=\"a58551b1ff4786a78f583ac39a952c544\"></a>\n\
<div class=\"memitem\">\n\
<div class=\"memproto\">\n\
      <table class=\"memname\">\n\
        <tr>\n\
          <td class=\"memname\" translate=\"no\"><a class=\"el\" translate=\"no\" href=\"#!/url=./cpp_ref/class_m_h_w_render_1_1_m_target_blend_desc.html\">MTargetBlendDesc</a> &amp; operator= </td>\n\
          <td>(</td>\n\
          <td class=\"paramtype\">const <a class=\"el\" translate=\"no\" href=\"#!/url=./cpp_ref/class_m_h_w_render_1_1_m_target_blend_desc.html\">MTargetBlendDesc</a> &amp;&#160;</td>\n\
          <td class=\"paramname\"><em>rDesc</em></td><td>)</td>\n\
          <td></td>\n\
        </tr>\n\
      </table>\n\
</div><div class=\"memdoc\">\n\
\n\
<p>NO SCRIPT SUPPORT. </p>\n\
<p>Assignment operator.</p>\n\
<dl class=\"params\"><dt>Parameters</dt><dd>\n\
  <table class=\"params\">\n\
    <tr><td class=\"paramdir\">[in]</td><td class=\"paramname\">rDesc</td><td>The descriptor to copy</td></tr>\n\
  </table>\n\
  </dd>\n\
</dl>\n\
<dl class=\"section return\"><dt>Returns</dt><dd>Reference to this descriptor </dd></dl>\n\
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
<h2 class=\"groupheader\">Member Data Documentation</h2>\n\
<a class=\"anchor\" id=\"a187b082600ea97d72d0298d34778c252\"></a>\n\
<div class=\"memitem\">\n\
<div class=\"memproto\">\n\
      <table class=\"memname\">\n\
        <tr>\n\
          <td class=\"memname\" translate=\"no\"><a class=\"el\" translate=\"no\" href=\"#!/url=./cpp_ref/class_m_h_w_render_1_1_m_blend_state.html#a508bf9ce7f09728669b77bdc572a2340\">MBlendState::ChannelMask</a> targetWriteMask</td>\n\
        </tr>\n\
      </table>\n\
</div><div class=\"memdoc\">\n\
\n\
<p>Indicates what color components(red, green, blue, alpha) are writable, the default is RGBA. </p>\n\
<dl class=\"section \"><div id=\"dynsection-example0\" class=\"dynheader closed\" onclick=\"return toggleVisibility(this)\" style=\"cursor:pointer;\"><dt><img id=\"dynsection-example0-trigger\" src=\"cpp_ref/closed.png\" alt=\"+\"> <b>Examples: </b></dt></div><div id=\"dynsection-example0-content\" class=\"dyncontent\" style=\"display:none;\"><dd><a class=\"el\" translate=\"no\" href=\"#!/url=./cpp_ref/cg_fx_2cgfx_pass_state_setter_8cpp-example.html#a54\">cgFx/cgfxPassStateSetter.cpp</a>.</dd></div>\n\
</dl>\n\
</div>\n\
</div>\n\
<hr>The documentation for this class was generated from the following files:<ul>\n\
<li>MStateManager.h</li>\n\
<li>MStateManager.cpp</li>\n\
</ul>\n\
</div><!-- contents -->\n\
</div><!-- doc-content -->\n\
          <div class=\"footer-block\"><a href=\"../html/ac.cmtdialog.htm\" class=\"comments-anchor\" target=\"_blank\"><span class=\"comments-link\">Please send us your comment about this page</span></a></div><br></div>\n\
   </div></body>\n\
</html>\n\
";