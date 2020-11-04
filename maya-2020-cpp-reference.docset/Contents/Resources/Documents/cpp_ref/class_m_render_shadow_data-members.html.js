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
    cpp_ref_adsk_ref_toc.initNavTree(\'class_m_render_shadow_data-members.html\', tocPrefix);\n\
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
<div class=\"title\">MRenderShadowData Member List</div>  </div>\n\
</div><!--header-->\n\
<div class=\"contents\">\n\
\n\
<p>This is the complete list of members for <a class=\"el\" href=\"#!/url=./cpp_ref/class_m_render_shadow_data.html\">MRenderShadowData</a>, including all inherited members.</p>\n\
<table class=\"directory\">\n\
  <tr class=\"even\"><td class=\"entry\"><a class=\"el\" href=\"#!/url=./cpp_ref/class_m_render_shadow_data.html#a727078df563626e5cab7bc54a46a1a94\">depthMaps</a></td><td class=\"entry\"><a class=\"el\" href=\"#!/url=./cpp_ref/class_m_render_shadow_data.html\">MRenderShadowData</a></td><td class=\"entry\"></td></tr>\n\
  <tr><td class=\"entry\"><a class=\"el\" href=\"#!/url=./cpp_ref/class_m_render_shadow_data.html#adc3ec8293e6a97ebe43f0196b9a7f638adc2689f35fef9ea8e24d61db45e3c1ba\">kDirectional</a> enum value</td><td class=\"entry\"><a class=\"el\" href=\"#!/url=./cpp_ref/class_m_render_shadow_data.html\">MRenderShadowData</a></td><td class=\"entry\"></td></tr>\n\
  <tr class=\"even\"><td class=\"entry\"><a class=\"el\" href=\"#!/url=./cpp_ref/class_m_render_shadow_data.html#adc3ec8293e6a97ebe43f0196b9a7f638a94dd08feda7b2cf0ff8262312c4fcc09\">kInvalid</a> enum value</td><td class=\"entry\"><a class=\"el\" href=\"#!/url=./cpp_ref/class_m_render_shadow_data.html\">MRenderShadowData</a></td><td class=\"entry\"></td></tr>\n\
  <tr><td class=\"entry\"><a class=\"el\" href=\"#!/url=./cpp_ref/class_m_render_shadow_data.html#adc3ec8293e6a97ebe43f0196b9a7f638a38146a834eece30f0cbb59d1f0e05145\">kPoint</a> enum value</td><td class=\"entry\"><a class=\"el\" href=\"#!/url=./cpp_ref/class_m_render_shadow_data.html\">MRenderShadowData</a></td><td class=\"entry\"></td></tr>\n\
  <tr class=\"even\"><td class=\"entry\"><a class=\"el\" href=\"#!/url=./cpp_ref/class_m_render_shadow_data.html#adc3ec8293e6a97ebe43f0196b9a7f638a382aa286e0a0cafea66bbd5615b4e95e\">kSpot</a> enum value</td><td class=\"entry\"><a class=\"el\" href=\"#!/url=./cpp_ref/class_m_render_shadow_data.html\">MRenderShadowData</a></td><td class=\"entry\"></td></tr>\n\
  <tr><td class=\"entry\"><a class=\"el\" href=\"#!/url=./cpp_ref/class_m_render_shadow_data.html#aff38e2efce26cf2a0a67020b56bada2b\">lightPosition</a></td><td class=\"entry\"><a class=\"el\" href=\"#!/url=./cpp_ref/class_m_render_shadow_data.html\">MRenderShadowData</a></td><td class=\"entry\"></td></tr>\n\
  <tr class=\"even\"><td class=\"entry\"><a class=\"el\" href=\"#!/url=./cpp_ref/class_m_render_shadow_data.html#aab93abda5f726897e2f9c8f4d8856962\">lightType</a></td><td class=\"entry\"><a class=\"el\" href=\"#!/url=./cpp_ref/class_m_render_shadow_data.html\">MRenderShadowData</a></td><td class=\"entry\"></td></tr>\n\
  <tr><td class=\"entry\"><a class=\"el\" href=\"#!/url=./cpp_ref/class_m_render_shadow_data.html#adc3ec8293e6a97ebe43f0196b9a7f638\">LightType</a> enum name</td><td class=\"entry\"><a class=\"el\" href=\"#!/url=./cpp_ref/class_m_render_shadow_data.html\">MRenderShadowData</a></td><td class=\"entry\"></td></tr>\n\
  <tr class=\"even\"><td class=\"entry\"><a class=\"el\" href=\"#!/url=./cpp_ref/class_m_render_shadow_data.html#ab7651480485642a70586c1efbb63b4e9\">midDistMaps</a></td><td class=\"entry\"><a class=\"el\" href=\"#!/url=./cpp_ref/class_m_render_shadow_data.html\">MRenderShadowData</a></td><td class=\"entry\"></td></tr>\n\
  <tr><td class=\"entry\"><a class=\"el\" href=\"#!/url=./cpp_ref/class_m_render_shadow_data.html#a323cb56b9ea6b39e6f532f564187621c\">MRenderShadowData</a>()</td><td class=\"entry\"><a class=\"el\" href=\"#!/url=./cpp_ref/class_m_render_shadow_data.html\">MRenderShadowData</a></td><td class=\"entry\"></td></tr>\n\
  <tr class=\"even\"><td class=\"entry\"><a class=\"el\" href=\"#!/url=./cpp_ref/class_m_render_shadow_data.html#a35bef8d4568a5e59f4a5b01ca78d8378\">perspective</a></td><td class=\"entry\"><a class=\"el\" href=\"#!/url=./cpp_ref/class_m_render_shadow_data.html\">MRenderShadowData</a></td><td class=\"entry\"></td></tr>\n\
  <tr><td class=\"entry\"><a class=\"el\" href=\"#!/url=./cpp_ref/class_m_render_shadow_data.html#a4c7b37d34317e6f0320f5923f8c1a141\">perspectiveMatrix</a></td><td class=\"entry\"><a class=\"el\" href=\"#!/url=./cpp_ref/class_m_render_shadow_data.html\">MRenderShadowData</a></td><td class=\"entry\"></td></tr>\n\
  <tr class=\"even\"><td class=\"entry\"><a class=\"el\" href=\"#!/url=./cpp_ref/class_m_render_shadow_data.html#a291f9f563aa7b923efaea2386037c7dd\">projectionMatrix</a></td><td class=\"entry\"><a class=\"el\" href=\"#!/url=./cpp_ref/class_m_render_shadow_data.html\">MRenderShadowData</a></td><td class=\"entry\"></td></tr>\n\
  <tr><td class=\"entry\"><a class=\"el\" href=\"#!/url=./cpp_ref/class_m_render_shadow_data.html#a7a0f709012a299b8a74a184b0a36fc96\">shadowResX</a></td><td class=\"entry\"><a class=\"el\" href=\"#!/url=./cpp_ref/class_m_render_shadow_data.html\">MRenderShadowData</a></td><td class=\"entry\"></td></tr>\n\
  <tr class=\"even\"><td class=\"entry\"><a class=\"el\" href=\"#!/url=./cpp_ref/class_m_render_shadow_data.html#a6423da0eb2fc36ea6e1ac3f3b6c88100\">shadowResY</a></td><td class=\"entry\"><a class=\"el\" href=\"#!/url=./cpp_ref/class_m_render_shadow_data.html\">MRenderShadowData</a></td><td class=\"entry\"></td></tr>\n\
  <tr><td class=\"entry\"><a class=\"el\" href=\"#!/url=./cpp_ref/class_m_render_shadow_data.html#aaf7d72df5235c2ee4cc9d622e5ff72df\">useMidDistMap</a></td><td class=\"entry\"><a class=\"el\" href=\"#!/url=./cpp_ref/class_m_render_shadow_data.html\">MRenderShadowData</a></td><td class=\"entry\"></td></tr>\n\
  <tr class=\"even\"><td class=\"entry\"><a class=\"el\" href=\"#!/url=./cpp_ref/class_m_render_shadow_data.html#af7197a88d9d4c7a9f02ed240b2d67592\">worldToZbuffer</a>(const MFloatPoint &amp;worldPoint, MFloatPoint &amp;screenPoint) const </td><td class=\"entry\"><a class=\"el\" href=\"#!/url=./cpp_ref/class_m_render_shadow_data.html\">MRenderShadowData</a></td><td class=\"entry\"></td></tr>\n\
  <tr><td class=\"entry\"><a class=\"el\" href=\"#!/url=./cpp_ref/class_m_render_shadow_data.html#ae2c3e9ae8ba99ee773a2368052527532\">zbufferToWorld</a>(const MFloatPoint &amp;screenPoint, MFloatPoint &amp;worldPoint) const </td><td class=\"entry\"><a class=\"el\" href=\"#!/url=./cpp_ref/class_m_render_shadow_data.html\">MRenderShadowData</a></td><td class=\"entry\"></td></tr>\n\
</table></div><!-- contents -->\n\
</div><!-- doc-content -->\n\
<!-- start footer part -->\n\
\n\
      <div class=\"footer-block\"><a href=\"../html/ac.cmtdialog.htm\" class=\"comments-anchor\" target=\"_blank\"><span class=\"comments-link\">Please send us your comment about this page</span></a></div></div>\n\
   </div></div></body>\n\
</html>\n\
";