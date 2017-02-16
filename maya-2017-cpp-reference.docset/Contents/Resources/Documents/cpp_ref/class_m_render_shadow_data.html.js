var topic = "<!-- saved from url=(0024)http://docs.autodesk.com -->\n\
<html>\n\
   <head><script src=\"../scripts/yepnope.1.5.4-min.js\" type=\"text/javascript\"></script><script src=\"../scripts/lib/jquery-1.11.1.min.js\" type=\"text/javascript\"></script><meta http-equiv=\"Content-Type\" content=\"text/html; charset=UTF-8\"><meta name=\"product\" content=\"MAYAUL\"><meta name=\"release\" content=\"2017\"><meta name=\"book\" content=\"Developer\"><meta name=\"created\" content=\"2016-06-16\"><meta name=\"topicid\" content=\"GUID-02DEF634-1E7B-48C6-8ACD-2C934CA97887\"><meta name=\"topic-type\" content=\"concept\">\n\
      <title>MRenderShadowData Class Reference</title>\n\
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
    cpp_ref_adsk_ref_toc.initNavTree(\'class_m_render_shadow_data.html\', tocPrefix);\n\
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
            <h1>MRenderShadowData Class Reference</h1>\n\
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
<div class=\"title\">MRenderShadowData Class Reference<div class=\"ingroups\"><a class=\"el\" translate=\"no\" href=\"#!/url=./cpp_ref/group___open_maya_render.html\">OpenMayaRender - API module for rendering</a></div></div>  </div>\n\
<div class=\"summary\">\n\
<a href=\"class_m_render_shadow_data.html#pub-types\">Public Types</a> &#124;\n\
<a href=\"class_m_render_shadow_data.html#pub-methods\">Public Member Functions</a> &#124;\n\
<a href=\"class_m_render_shadow_data.html#pub-attribs\">Public Attributes</a>  </div></div><!--header-->\n\
<div class=\"contents\">\n\
\n\
<p><code>#include &lt;MRenderShadowData.h&gt;</code></p>\n\
<a name=\"details\" id=\"details\"></a><h2 class=\"groupheader\">Class Description</h2>\n\
<div class=\"textblock\"><p>Access Rendering Shadow Map Data. </p>\n\
<p>The shadow map can be changed by instanciating a <a class=\"el\" translate=\"no\" href=\"#!/url=./cpp_ref/class_m_render_callback.html\" title=\"Rendering Callbacks. \">MRenderCallback</a> and overriding shadowCastCallback(). When this is invoked, a <a class=\"el\" translate=\"no\" href=\"#!/url=./cpp_ref/class_m_render_shadow_data.html\" title=\"Access Rendering Shadow Map Data. \">MRenderShadowData</a> is passed as an argument; the depthMaps and midDistMaps members can then be changed by this API. Methods and data are provided to assist in transforming back and forth from world space to z buffer space. Paint Effects and Fur are two examples which use this mechanism to change the shadow map.</p>\n\
<p>To prevent self shadowing, Maya uses a mid distance map to resolve the ambiguity. Details of this technique can be obtained from Graphics Gems III, \"The Shadow Depth Map Revisited\". </p>\n\
<dl class=\"section \"><div id=\"dynsection-example0\" class=\"dynheader closed\" onclick=\"return toggleVisibility(this)\" style=\"cursor:pointer;\"><dt><img id=\"dynsection-example0-trigger\" src=\"cpp_ref/closed.png\" alt=\"+\"> <b>Examples: </b></dt></div><div id=\"dynsection-example0-content\" class=\"dyncontent\" style=\"display:none;\"><dd><a class=\"el\" translate=\"no\" href=\"#!/url=./cpp_ref/render_access_node_2render_access_node_8cpp-example.html#_a3\">renderAccessNode/renderAccessNode.cpp</a>.</dd></div>\n\
</dl></div><table class=\"memberdecls\">\n\
<tr class=\"heading\"><td colspan=\"2\"><h2 class=\"groupheader\"><a name=\"pub-types\"></a>\n\
Public Types</h2></td></tr>\n\
<tr class=\"memitem:adc3ec8293e6a97ebe43f0196b9a7f638\"><td class=\"memItemLeft\" translate=\"no\" align=\"right\" valign=\"top\">enum &#160;</td><td class=\"memItemRight\" translate=\"no\" valign=\"bottom\"><a class=\"el\" translate=\"no\" href=\"#!/url=./cpp_ref/class_m_render_shadow_data.html#adc3ec8293e6a97ebe43f0196b9a7f638\">LightType</a> { <a class=\"el\" translate=\"no\" href=\"#!/url=./cpp_ref/class_m_render_shadow_data.html#adc3ec8293e6a97ebe43f0196b9a7f638a94dd08feda7b2cf0ff8262312c4fcc09\">kInvalid</a>, \n\
<a class=\"el\" translate=\"no\" href=\"#!/url=./cpp_ref/class_m_render_shadow_data.html#adc3ec8293e6a97ebe43f0196b9a7f638a38146a834eece30f0cbb59d1f0e05145\">kPoint</a>, \n\
<a class=\"el\" translate=\"no\" href=\"#!/url=./cpp_ref/class_m_render_shadow_data.html#adc3ec8293e6a97ebe43f0196b9a7f638adc2689f35fef9ea8e24d61db45e3c1ba\">kDirectional</a>, \n\
<a class=\"el\" translate=\"no\" href=\"#!/url=./cpp_ref/class_m_render_shadow_data.html#adc3ec8293e6a97ebe43f0196b9a7f638a382aa286e0a0cafea66bbd5615b4e95e\">kSpot</a>\n\
 }<tr class=\"memdesc:adc3ec8293e6a97ebe43f0196b9a7f638\"><td class=\"mdescLeft\">&#160;</td><td class=\"mdescRight\">Light Types.  <a href=\"#!/url=./cpp_ref/class_m_render_shadow_data.html#adc3ec8293e6a97ebe43f0196b9a7f638\">More...</a><br></td></tr>\n\
<tr class=\"separator:adc3ec8293e6a97ebe43f0196b9a7f638\"><td class=\"memSeparator\" colspan=\"2\">&#160;</td></tr>\n\
</td></tr>\n\
</table><table class=\"memberdecls\">\n\
<tr class=\"heading\"><td colspan=\"2\"><h2 class=\"groupheader\"><a name=\"pub-methods\"></a>\n\
Public Member Functions</h2></td></tr>\n\
<tr class=\"memitem:a27ce5cdb8f9b968b879f20a27f360a36\"><td class=\"memItemLeft\" translate=\"no\" align=\"right\" valign=\"top\"><a class=\"anchor\" id=\"a27ce5cdb8f9b968b879f20a27f360a36\"></a>\n\
&#160;</td><td class=\"memItemRight\" translate=\"no\" valign=\"bottom\"><a class=\"el\" translate=\"no\" href=\"#!/url=./cpp_ref/class_m_render_shadow_data.html#a27ce5cdb8f9b968b879f20a27f360a36\">MRenderShadowData</a> ()</td></tr>\n\
<tr class=\"memdesc:a27ce5cdb8f9b968b879f20a27f360a36\"><td class=\"mdescLeft\">&#160;</td><td class=\"mdescRight\">Default Constructor. <br></td></tr>\n\
<tr class=\"separator:a27ce5cdb8f9b968b879f20a27f360a36\"><td class=\"memSeparator\" colspan=\"2\">&#160;</td></tr>\n\
<tr class=\"memitem:af7197a88d9d4c7a9f02ed240b2d67592\"><td class=\"memItemLeft\" translate=\"no\" align=\"right\" valign=\"top\">void&#160;</td><td class=\"memItemRight\" translate=\"no\" valign=\"bottom\"><a class=\"el\" translate=\"no\" href=\"#!/url=./cpp_ref/class_m_render_shadow_data.html#af7197a88d9d4c7a9f02ed240b2d67592\">worldToZbuffer</a> (const <a class=\"el\" translate=\"no\" href=\"#!/url=./cpp_ref/class_m_float_point.html\">MFloatPoint</a> &amp;worldPoint, <a class=\"el\" translate=\"no\" href=\"#!/url=./cpp_ref/class_m_float_point.html\">MFloatPoint</a> &amp;screenPoint) const </td></tr>\n\
<tr class=\"memdesc:af7197a88d9d4c7a9f02ed240b2d67592\"><td class=\"mdescLeft\">&#160;</td><td class=\"mdescRight\">Converts world space point to shadow map.  <a href=\"class_m_render_shadow_data.html#af7197a88d9d4c7a9f02ed240b2d67592\">More...</a><br></td></tr>\n\
<tr class=\"separator:af7197a88d9d4c7a9f02ed240b2d67592\"><td class=\"memSeparator\" colspan=\"2\">&#160;</td></tr>\n\
<tr class=\"memitem:ae2c3e9ae8ba99ee773a2368052527532\"><td class=\"memItemLeft\" translate=\"no\" align=\"right\" valign=\"top\">void&#160;</td><td class=\"memItemRight\" translate=\"no\" valign=\"bottom\"><a class=\"el\" translate=\"no\" href=\"#!/url=./cpp_ref/class_m_render_shadow_data.html#ae2c3e9ae8ba99ee773a2368052527532\">zbufferToWorld</a> (const <a class=\"el\" translate=\"no\" href=\"#!/url=./cpp_ref/class_m_float_point.html\">MFloatPoint</a> &amp;screenPoint, <a class=\"el\" translate=\"no\" href=\"#!/url=./cpp_ref/class_m_float_point.html\">MFloatPoint</a> &amp;worldPoint) const </td></tr>\n\
<tr class=\"memdesc:ae2c3e9ae8ba99ee773a2368052527532\"><td class=\"mdescLeft\">&#160;</td><td class=\"mdescRight\">Converts shadow map point to world space.  <a href=\"class_m_render_shadow_data.html#ae2c3e9ae8ba99ee773a2368052527532\">More...</a><br></td></tr>\n\
<tr class=\"separator:ae2c3e9ae8ba99ee773a2368052527532\"><td class=\"memSeparator\" colspan=\"2\">&#160;</td></tr>\n\
</table><table class=\"memberdecls\">\n\
<tr class=\"heading\"><td colspan=\"2\"><h2 class=\"groupheader\"><a name=\"pub-attribs\"></a>\n\
Public Attributes</h2></td></tr>\n\
<tr class=\"memitem:a35bef8d4568a5e59f4a5b01ca78d8378\"><td class=\"memItemLeft\" translate=\"no\" align=\"right\" valign=\"top\"><a class=\"anchor\" id=\"a35bef8d4568a5e59f4a5b01ca78d8378\"></a>\n\
bool&#160;</td><td class=\"memItemRight\" translate=\"no\" valign=\"bottom\"><a class=\"el\" translate=\"no\" href=\"#!/url=./cpp_ref/class_m_render_shadow_data.html#a35bef8d4568a5e59f4a5b01ca78d8378\">perspective</a></td></tr>\n\
<tr class=\"memdesc:a35bef8d4568a5e59f4a5b01ca78d8378\"><td class=\"mdescLeft\">&#160;</td><td class=\"mdescRight\">set if the light has a perspective projection <br></td></tr>\n\
<tr class=\"separator:a35bef8d4568a5e59f4a5b01ca78d8378\"><td class=\"memSeparator\" colspan=\"2\">&#160;</td></tr>\n\
<tr class=\"memitem:aaf7d72df5235c2ee4cc9d622e5ff72df\"><td class=\"memItemLeft\" translate=\"no\" align=\"right\" valign=\"top\"><a class=\"anchor\" id=\"aaf7d72df5235c2ee4cc9d622e5ff72df\"></a>\n\
bool&#160;</td><td class=\"memItemRight\" translate=\"no\" valign=\"bottom\"><a class=\"el\" translate=\"no\" href=\"#!/url=./cpp_ref/class_m_render_shadow_data.html#aaf7d72df5235c2ee4cc9d622e5ff72df\">useMidDistMap</a></td></tr>\n\
<tr class=\"memdesc:aaf7d72df5235c2ee4cc9d622e5ff72df\"><td class=\"mdescLeft\">&#160;</td><td class=\"mdescRight\">set if the light generates a depth and midDist map <br></td></tr>\n\
<tr class=\"separator:aaf7d72df5235c2ee4cc9d622e5ff72df\"><td class=\"memSeparator\" colspan=\"2\">&#160;</td></tr>\n\
<tr class=\"memitem:aab93abda5f726897e2f9c8f4d8856962\"><td class=\"memItemLeft\" translate=\"no\" align=\"right\" valign=\"top\"><a class=\"anchor\" id=\"aab93abda5f726897e2f9c8f4d8856962\"></a>\n\
<a class=\"el\" translate=\"no\" href=\"#!/url=./cpp_ref/class_m_render_shadow_data.html#adc3ec8293e6a97ebe43f0196b9a7f638\">LightType</a>&#160;</td><td class=\"memItemRight\" translate=\"no\" valign=\"bottom\"><a class=\"el\" translate=\"no\" href=\"#!/url=./cpp_ref/class_m_render_shadow_data.html#aab93abda5f726897e2f9c8f4d8856962\">lightType</a></td></tr>\n\
<tr class=\"memdesc:aab93abda5f726897e2f9c8f4d8856962\"><td class=\"mdescLeft\">&#160;</td><td class=\"mdescRight\">the type of light the shadow map is generated for <br></td></tr>\n\
<tr class=\"separator:aab93abda5f726897e2f9c8f4d8856962\"><td class=\"memSeparator\" colspan=\"2\">&#160;</td></tr>\n\
<tr class=\"memitem:a7a0f709012a299b8a74a184b0a36fc96\"><td class=\"memItemLeft\" translate=\"no\" align=\"right\" valign=\"top\"><a class=\"anchor\" id=\"a7a0f709012a299b8a74a184b0a36fc96\"></a>\n\
unsigned short&#160;</td><td class=\"memItemRight\" translate=\"no\" valign=\"bottom\"><a class=\"el\" translate=\"no\" href=\"#!/url=./cpp_ref/class_m_render_shadow_data.html#a7a0f709012a299b8a74a184b0a36fc96\">shadowResX</a></td></tr>\n\
<tr class=\"memdesc:a7a0f709012a299b8a74a184b0a36fc96\"><td class=\"mdescLeft\">&#160;</td><td class=\"mdescRight\">the x resolution of shadow map <br></td></tr>\n\
<tr class=\"separator:a7a0f709012a299b8a74a184b0a36fc96\"><td class=\"memSeparator\" colspan=\"2\">&#160;</td></tr>\n\
<tr class=\"memitem:a6423da0eb2fc36ea6e1ac3f3b6c88100\"><td class=\"memItemLeft\" translate=\"no\" align=\"right\" valign=\"top\"><a class=\"anchor\" id=\"a6423da0eb2fc36ea6e1ac3f3b6c88100\"></a>\n\
unsigned short&#160;</td><td class=\"memItemRight\" translate=\"no\" valign=\"bottom\"><a class=\"el\" translate=\"no\" href=\"#!/url=./cpp_ref/class_m_render_shadow_data.html#a6423da0eb2fc36ea6e1ac3f3b6c88100\">shadowResY</a></td></tr>\n\
<tr class=\"memdesc:a6423da0eb2fc36ea6e1ac3f3b6c88100\"><td class=\"mdescLeft\">&#160;</td><td class=\"mdescRight\">the y resolution of the shadow map <br></td></tr>\n\
<tr class=\"separator:a6423da0eb2fc36ea6e1ac3f3b6c88100\"><td class=\"memSeparator\" colspan=\"2\">&#160;</td></tr>\n\
<tr class=\"memitem:aff38e2efce26cf2a0a67020b56bada2b\"><td class=\"memItemLeft\" translate=\"no\" align=\"right\" valign=\"top\"><a class=\"anchor\" id=\"aff38e2efce26cf2a0a67020b56bada2b\"></a>\n\
<a class=\"el\" translate=\"no\" href=\"#!/url=./cpp_ref/class_m_float_point.html\">MFloatPoint</a>&#160;</td><td class=\"memItemRight\" translate=\"no\" valign=\"bottom\"><a class=\"el\" translate=\"no\" href=\"#!/url=./cpp_ref/class_m_render_shadow_data.html#aff38e2efce26cf2a0a67020b56bada2b\">lightPosition</a></td></tr>\n\
<tr class=\"memdesc:aff38e2efce26cf2a0a67020b56bada2b\"><td class=\"mdescLeft\">&#160;</td><td class=\"mdescRight\">position of the light in world space <br></td></tr>\n\
<tr class=\"separator:aff38e2efce26cf2a0a67020b56bada2b\"><td class=\"memSeparator\" colspan=\"2\">&#160;</td></tr>\n\
<tr class=\"memitem:a291f9f563aa7b923efaea2386037c7dd\"><td class=\"memItemLeft\" translate=\"no\" align=\"right\" valign=\"top\"><a class=\"anchor\" id=\"a291f9f563aa7b923efaea2386037c7dd\"></a>\n\
<a class=\"el\" translate=\"no\" href=\"#!/url=./cpp_ref/class_m_float_matrix.html\">MFloatMatrix</a>&#160;</td><td class=\"memItemRight\" translate=\"no\" valign=\"bottom\"><a class=\"el\" translate=\"no\" href=\"#!/url=./cpp_ref/class_m_render_shadow_data.html#a291f9f563aa7b923efaea2386037c7dd\">projectionMatrix</a></td></tr>\n\
<tr class=\"memdesc:a291f9f563aa7b923efaea2386037c7dd\"><td class=\"mdescLeft\">&#160;</td><td class=\"mdescRight\">projection matrix for the light <br></td></tr>\n\
<tr class=\"separator:a291f9f563aa7b923efaea2386037c7dd\"><td class=\"memSeparator\" colspan=\"2\">&#160;</td></tr>\n\
<tr class=\"memitem:a4c7b37d34317e6f0320f5923f8c1a141\"><td class=\"memItemLeft\" translate=\"no\" align=\"right\" valign=\"top\"><a class=\"anchor\" id=\"a4c7b37d34317e6f0320f5923f8c1a141\"></a>\n\
<a class=\"el\" translate=\"no\" href=\"#!/url=./cpp_ref/class_m_float_matrix.html\">MFloatMatrix</a>&#160;</td><td class=\"memItemRight\" translate=\"no\" valign=\"bottom\"><a class=\"el\" translate=\"no\" href=\"#!/url=./cpp_ref/class_m_render_shadow_data.html#a4c7b37d34317e6f0320f5923f8c1a141\">perspectiveMatrix</a></td></tr>\n\
<tr class=\"memdesc:a4c7b37d34317e6f0320f5923f8c1a141\"><td class=\"mdescLeft\">&#160;</td><td class=\"mdescRight\">perspective matrix for the light <br></td></tr>\n\
<tr class=\"separator:a4c7b37d34317e6f0320f5923f8c1a141\"><td class=\"memSeparator\" colspan=\"2\">&#160;</td></tr>\n\
<tr class=\"memitem:a727078df563626e5cab7bc54a46a1a94\"><td class=\"memItemLeft\" translate=\"no\" align=\"right\" valign=\"top\"><a class=\"anchor\" id=\"a727078df563626e5cab7bc54a46a1a94\"></a>\n\
float *&#160;</td><td class=\"memItemRight\" translate=\"no\" valign=\"bottom\"><a class=\"el\" translate=\"no\" href=\"#!/url=./cpp_ref/class_m_render_shadow_data.html#a727078df563626e5cab7bc54a46a1a94\">depthMaps</a></td></tr>\n\
<tr class=\"memdesc:a727078df563626e5cab7bc54a46a1a94\"><td class=\"mdescLeft\">&#160;</td><td class=\"mdescRight\">the output depth map <br></td></tr>\n\
<tr class=\"separator:a727078df563626e5cab7bc54a46a1a94\"><td class=\"memSeparator\" colspan=\"2\">&#160;</td></tr>\n\
<tr class=\"memitem:ab7651480485642a70586c1efbb63b4e9\"><td class=\"memItemLeft\" translate=\"no\" align=\"right\" valign=\"top\"><a class=\"anchor\" id=\"ab7651480485642a70586c1efbb63b4e9\"></a>\n\
float *&#160;</td><td class=\"memItemRight\" translate=\"no\" valign=\"bottom\"><a class=\"el\" translate=\"no\" href=\"#!/url=./cpp_ref/class_m_render_shadow_data.html#ab7651480485642a70586c1efbb63b4e9\">midDistMaps</a></td></tr>\n\
<tr class=\"memdesc:ab7651480485642a70586c1efbb63b4e9\"><td class=\"mdescLeft\">&#160;</td><td class=\"mdescRight\">the output mid distance map <br></td></tr>\n\
<tr class=\"separator:ab7651480485642a70586c1efbb63b4e9\"><td class=\"memSeparator\" colspan=\"2\">&#160;</td></tr>\n\
</table>\n\
<h2 class=\"groupheader\">Member Enumeration Documentation</h2>\n\
<a class=\"anchor\" id=\"adc3ec8293e6a97ebe43f0196b9a7f638\"></a>\n\
<div class=\"memitem\">\n\
<div class=\"memproto\">\n\
      <table class=\"memname\">\n\
        <tr>\n\
          <td class=\"memname\" translate=\"no\">enum <a class=\"el\" translate=\"no\" href=\"#!/url=./cpp_ref/class_m_render_shadow_data.html#adc3ec8293e6a97ebe43f0196b9a7f638\">LightType</a></td>\n\
        </tr>\n\
      </table>\n\
</div><div class=\"memdoc\">\n\
\n\
<p>Light Types. </p>\n\
<table class=\"fieldtable\">\n\
<tr><th colspan=\"2\">Enumerator</th></tr><tr><td class=\"fieldname\"><a class=\"anchor\" id=\"adc3ec8293e6a97ebe43f0196b9a7f638a94dd08feda7b2cf0ff8262312c4fcc09\"></a>kInvalid&#160;</td><td class=\"fielddoc\">\n\
<p>&#160; </p>\n\
</td></tr>\n\
<tr><td class=\"fieldname\"><a class=\"anchor\" id=\"adc3ec8293e6a97ebe43f0196b9a7f638a38146a834eece30f0cbb59d1f0e05145\"></a>kPoint&#160;</td><td class=\"fielddoc\">\n\
<p>&#160; </p>\n\
</td></tr>\n\
<tr><td class=\"fieldname\"><a class=\"anchor\" id=\"adc3ec8293e6a97ebe43f0196b9a7f638adc2689f35fef9ea8e24d61db45e3c1ba\"></a>kDirectional&#160;</td><td class=\"fielddoc\">\n\
<p>&#160; </p>\n\
</td></tr>\n\
<tr><td class=\"fieldname\"><a class=\"anchor\" id=\"adc3ec8293e6a97ebe43f0196b9a7f638a382aa286e0a0cafea66bbd5615b4e95e\"></a>kSpot&#160;</td><td class=\"fielddoc\">\n\
<p>&#160; </p>\n\
</td></tr>\n\
</table>\n\
\n\
</div>\n\
</div>\n\
<h2 class=\"groupheader\">Member Function Documentation</h2>\n\
<a class=\"anchor\" id=\"af7197a88d9d4c7a9f02ed240b2d67592\"></a>\n\
<div class=\"memitem\">\n\
<div class=\"memproto\">\n\
      <table class=\"memname\">\n\
        <tr>\n\
          <td class=\"memname\" translate=\"no\">void worldToZbuffer </td>\n\
          <td>(</td>\n\
          <td class=\"paramtype\">const <a class=\"el\" translate=\"no\" href=\"#!/url=./cpp_ref/class_m_float_point.html\">MFloatPoint</a> &amp;&#160;</td>\n\
          <td class=\"paramname\"><em>inPoint</em>, </td>\n\
        </tr>\n\
        <tr>\n\
          <td class=\"paramkey\"></td>\n\
          <td></td>\n\
          <td class=\"paramtype\"><a class=\"el\" translate=\"no\" href=\"#!/url=./cpp_ref/class_m_float_point.html\">MFloatPoint</a> &amp;&#160;</td>\n\
          <td class=\"paramname\"><em>outPoint</em>&#160;</td>\n\
        </tr>\n\
        <tr>\n\
          <td></td>\n\
          <td>)</td>\n\
          <td></td><td> const</td>\n\
        </tr>\n\
      </table>\n\
</div><div class=\"memdoc\">\n\
\n\
<p>Converts world space point to shadow map. </p>\n\
<p>Shadow depth is stored in inPoint.z</p>\n\
<dl class=\"params\"><dt>Parameters</dt><dd>\n\
  <table class=\"params\">\n\
    <tr><td class=\"paramdir\">[in]</td><td class=\"paramname\">inPoint</td><td>The original point in world space </td></tr>\n\
    <tr><td class=\"paramdir\">[out]</td><td class=\"paramname\">outPoint</td><td>The converted point in shadow map </td></tr>\n\
  </table>\n\
  </dd>\n\
</dl>\n\
<dl class=\"section \"><div id=\"dynsection-example1\" class=\"dynheader closed\" onclick=\"return toggleVisibility(this)\" style=\"cursor:pointer;\"><dt><img id=\"dynsection-example1-trigger\" src=\"cpp_ref/closed.png\" alt=\"+\"> <b>Examples: </b></dt></div><div id=\"dynsection-example1-content\" class=\"dyncontent\" style=\"display:none;\"><dd><a class=\"el\" translate=\"no\" href=\"#!/url=./cpp_ref/render_access_node_2render_access_node_8cpp-example.html#a31\">renderAccessNode/renderAccessNode.cpp</a>.</dd></div>\n\
</dl>\n\
</div>\n\
</div>\n\
<a class=\"anchor\" id=\"ae2c3e9ae8ba99ee773a2368052527532\"></a>\n\
<div class=\"memitem\">\n\
<div class=\"memproto\">\n\
      <table class=\"memname\">\n\
        <tr>\n\
          <td class=\"memname\" translate=\"no\">void zbufferToWorld </td>\n\
          <td>(</td>\n\
          <td class=\"paramtype\">const <a class=\"el\" translate=\"no\" href=\"#!/url=./cpp_ref/class_m_float_point.html\">MFloatPoint</a> &amp;&#160;</td>\n\
          <td class=\"paramname\"><em>inPoint</em>, </td>\n\
        </tr>\n\
        <tr>\n\
          <td class=\"paramkey\"></td>\n\
          <td></td>\n\
          <td class=\"paramtype\"><a class=\"el\" translate=\"no\" href=\"#!/url=./cpp_ref/class_m_float_point.html\">MFloatPoint</a> &amp;&#160;</td>\n\
          <td class=\"paramname\"><em>outPoint</em>&#160;</td>\n\
        </tr>\n\
        <tr>\n\
          <td></td>\n\
          <td>)</td>\n\
          <td></td><td> const</td>\n\
        </tr>\n\
      </table>\n\
</div><div class=\"memdoc\">\n\
\n\
<p>Converts shadow map point to world space. </p>\n\
<p>Shadow depth is stored in inPoint.z.</p>\n\
<dl class=\"params\"><dt>Parameters</dt><dd>\n\
  <table class=\"params\">\n\
    <tr><td class=\"paramdir\">[in]</td><td class=\"paramname\">inPoint</td><td>The original point in shadow map </td></tr>\n\
    <tr><td class=\"paramdir\">[out]</td><td class=\"paramname\">outPoint</td><td>The converted point in world space </td></tr>\n\
  </table>\n\
  </dd>\n\
</dl>\n\
<dl class=\"section \"><div id=\"dynsection-example2\" class=\"dynheader closed\" onclick=\"return toggleVisibility(this)\" style=\"cursor:pointer;\"><dt><img id=\"dynsection-example2-trigger\" src=\"cpp_ref/closed.png\" alt=\"+\"> <b>Examples: </b></dt></div><div id=\"dynsection-example2-content\" class=\"dyncontent\" style=\"display:none;\"><dd><a class=\"el\" translate=\"no\" href=\"#!/url=./cpp_ref/render_access_node_2render_access_node_8cpp-example.html#a32\">renderAccessNode/renderAccessNode.cpp</a>.</dd></div>\n\
</dl>\n\
</div>\n\
</div>\n\
<hr>The documentation for this class was generated from the following files:<ul>\n\
<li>MRenderShadowData.h</li>\n\
<li>MRenderShadowData.cpp</li>\n\
</ul>\n\
</div><!-- contents -->\n\
</div><!-- doc-content -->\n\
          <div class=\"footer-block\"><a href=\"../html/ac.cmtdialog.htm\" class=\"comments-anchor\" target=\"_blank\"><span class=\"comments-link\">Please send us your comment about this page</span></a></div><br></div>\n\
   </div></body>\n\
</html>\n\
";