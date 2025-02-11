var topic = "<!-- saved from url=(0024)http://docs.autodesk.com -->\n\
<html>\n\
   <head><script src=\"../scripts/yepnope.1.5.4-min.js\" type=\"text/javascript\"></script><script src=\"../scripts/lib/jquery-1.11.1.min.js\" type=\"text/javascript\"></script><meta http-equiv=\"Content-Type\" content=\"text/html; charset=UTF-8\"><meta name=\"product\" content=\"MAYAUL\"><meta name=\"release\" content=\"2018\"><meta name=\"book\" content=\"Developer\"><meta name=\"created\" content=\"2017-06-22\"><meta name=\"topicid\" content=\"GUID-02DEF634-1E7B-48C6-8ACD-2C934CA97887\"><meta name=\"topic-type\" content=\"concept\">\n\
      <title>MRenderTargetManager Class Reference</title>\n\
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
    cpp_ref_adsk_ref_toc.initNavTree(\'class_m_h_w_render_1_1_m_render_target_manager.html\', tocPrefix);\n\
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
            <h1>MRenderTargetManager Class Reference</h1>\n\
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
<div class=\"title\">MRenderTargetManager Class Reference<div class=\"ingroups\"><a class=\"el\" translate=\"no\" href=\"#!/url=./cpp_ref/group___open_maya_render.html\">OpenMayaRender - API module for rendering</a></div></div>  </div>\n\
<div id=\"OverviewLinksDiv\"><div id=\"dynsection-overview\" onclick=\"return toggleVisibility(this)\" class=\"dynheader closed\" style=\"cursor:pointer;\"><img id=\"dynsection-overview-trigger\" src=\"cpp_ref/closed.png\" alt=\"+\"> Related help topics: </div><div id=\"dynsection-overview-content\" class=\"dyncontent\" style=\"display:none;\"><ul class=\"overviewLinks\">\n\
<li class=\"overviewLink\"><a href=\"#!/url=./files/GUID-92F04A2C-DD33-494E-80E8-7CCB082A9961.htm\">What\'s New / What\'s Changed? &gt; What\'s New in Maya API in 2018 &gt; What\'s New in the Rendering and Lighting API</a></li>\n\
<li class=\"overviewLink\"><a href=\"#!/url=./files/GUID-F0CA7A2C-EE99-4A95-9E5E-C187F000092C.htm\">What\'s New / What\'s Changed? &gt; Extension for Autodesk Maya 2013</a></li>\n\
<li class=\"overviewLink\"><a href=\"#!/url=./files/GUID-24BAA64A-DAEA-43DB-8FF0-5625F371AE67.htm\">Viewport 2.0 API &gt; Overview of the Viewport 2.0 API &gt; Framework Classes</a></li>\n\
<li class=\"overviewLink\"><a href=\"#!/url=./files/GUID-463B61EA-ABBB-4237-BC78-5073DA1390F4.htm\">Viewport 2.0 API &gt; Maya Viewport 2.0 API Guide &gt; API constructs &gt; Texture creation and texture manager</a></li>\n\
<li class=\"overviewLink\"><a href=\"#!/url=./files/GUID-20C84E3A-D004-4D9E-9632-D15C795DEB66.htm\">Viewport 2.0 API &gt; Maya Viewport 2.0 API Guide &gt; API constructs &gt; Render Targets and Render Target Manager</a></li>\n\
<li class=\"overviewLink\"><a href=\"#!/url=./files/GUID-DF09606A-B690-4FD3-8AA6-22889BA577CF.htm\">Viewport 2.0 API &gt; Maya Viewport 2.0 API Guide &gt; Plug-in Entry Points &gt; The Renderer</a></li>\n\
</ul></div></div>\n\
<div class=\"summary\">\n\
<a href=\"class_m_h_w_render_1_1_m_render_target_manager.html#pub-methods\">Public Member Functions</a> &#124;\n\
<a href=\"class_m_h_w_render_1_1_m_render_target_manager.html#pub-static-methods\">Static Public Member Functions</a>  </div></div><!--header-->\n\
<div class=\"contents\">\n\
\n\
<p><code>#include &lt;MRenderTargetManager.h&gt;</code></p>\n\
<a name=\"details\" id=\"details\"></a><h2 class=\"groupheader\">Class Description</h2>\n\
<div class=\"textblock\"><p>Provides access to <a class=\"el\" translate=\"no\" href=\"#!/url=./cpp_ref/class_m_h_w_render_1_1_m_render_target.html\" title=\"An instance of a render target that may be used with Viewport 2.0. \">MRenderTarget</a> objects for use in Viewport 2.0. </p>\n\
<p>This class generates <a class=\"el\" translate=\"no\" href=\"#!/url=./cpp_ref/class_m_h_w_render_1_1_m_render_target.html\" title=\"An instance of a render target that may be used with Viewport 2.0. \">MRenderTarget</a> objects for use with <a class=\"el\" translate=\"no\" href=\"#!/url=./cpp_ref/class_m_h_w_render_1_1_m_render_operation.html\" title=\"Class which defines a rendering operation. \">MRenderOperation</a> objects. Any <a class=\"el\" translate=\"no\" href=\"#!/url=./cpp_ref/class_m_h_w_render_1_1_m_render_target.html\" title=\"An instance of a render target that may be used with Viewport 2.0. \">MRenderTarget</a> objects created by this class are owned by the caller. </p>\n\
<dl class=\"section \"><div id=\"dynsection-example0\" class=\"dynheader closed\" onclick=\"return toggleVisibility(this)\" style=\"cursor:pointer;\"><dt><img id=\"dynsection-example0-trigger\" src=\"cpp_ref/closed.png\" alt=\"+\"> <b>Examples: </b></dt></div><div id=\"dynsection-example0-content\" class=\"dyncontent\" style=\"display:none;\"><dd><a class=\"el\" translate=\"no\" href=\"#!/url=./cpp_ref/blast2_cmd_2blast2_cmd_8cpp-example.html#_a41\">blast2Cmd/blast2Cmd.cpp</a>, <a class=\"el\" translate=\"no\" href=\"#!/url=./cpp_ref/capture_view_render_cmd_2capture_view_render_cmd_8cpp-example.html#_a3\">captureViewRenderCmd/captureViewRenderCmd.cpp</a>, <a class=\"el\" translate=\"no\" href=\"#!/url=./cpp_ref/dx11_shader_2dx11_shader_8cpp-example.html#_a255\">dx11Shader/dx11Shader.cpp</a>, <a class=\"el\" translate=\"no\" href=\"#!/url=./cpp_ref/hw_api_texture_test_2hw_renderer_helper_8cpp-example.html#_a4\">hwApiTextureTest/hwRendererHelper.cpp</a>, <a class=\"el\" translate=\"no\" href=\"#!/url=./cpp_ref/view_d_x11_device_access_2view_d_x11_device_access_8cpp-example.html#_a114\">viewDX11DeviceAccess/viewDX11DeviceAccess.cpp</a>, <a class=\"el\" translate=\"no\" href=\"#!/url=./cpp_ref/view_render_override_2view_render_override_8cpp-example.html#_a6\">viewRenderOverride/viewRenderOverride.cpp</a>, <a class=\"el\" translate=\"no\" href=\"#!/url=./cpp_ref/view_render_override_frame_cache_2view_render_override_frame_cache_8cpp-example.html#_a24\">viewRenderOverrideFrameCache/viewRenderOverrideFrameCache.cpp</a>, <a class=\"el\" translate=\"no\" href=\"#!/url=./cpp_ref/view_render_override_m_r_t_2view_render_override_m_r_t_8cpp-example.html#_a8\">viewRenderOverrideMRT/viewRenderOverrideMRT.cpp</a>, <a class=\"el\" translate=\"no\" href=\"#!/url=./cpp_ref/view_render_override_m_r_t_2view_render_override_m_r_t_8h-example.html#_a12\">viewRenderOverrideMRT/viewRenderOverrideMRT.h</a>, and <a class=\"el\" translate=\"no\" href=\"#!/url=./cpp_ref/view_render_override_targets_2view_render_override_targets_8cpp-example.html#_a17\">viewRenderOverrideTargets/viewRenderOverrideTargets.cpp</a>.</dd></div>\n\
</dl></div><table class=\"memberdecls\">\n\
<tr class=\"heading\"><td colspan=\"2\"><h2 class=\"groupheader\"><a name=\"pub-methods\"></a>\n\
Public Member Functions</h2></td></tr>\n\
<tr class=\"memitem:a34596dab85af525cd42532e7e5e5c39e\"><td class=\"memItemLeft\" translate=\"no\" align=\"right\" valign=\"top\"><a class=\"el\" translate=\"no\" href=\"#!/url=./cpp_ref/class_m_h_w_render_1_1_m_render_target.html\">MRenderTarget</a> *&#160;</td><td class=\"memItemRight\" translate=\"no\" valign=\"bottom\"><a class=\"el\" translate=\"no\" href=\"#!/url=./cpp_ref/class_m_h_w_render_1_1_m_render_target_manager.html#a34596dab85af525cd42532e7e5e5c39e\">acquireRenderTarget</a> (const <a class=\"el\" translate=\"no\" href=\"#!/url=./cpp_ref/class_m_h_w_render_1_1_m_render_target_description.html\">MRenderTargetDescription</a> &amp;targetDescription) const </td></tr>\n\
<tr class=\"memdesc:a34596dab85af525cd42532e7e5e5c39e\"><td class=\"mdescLeft\">&#160;</td><td class=\"mdescRight\">Acquire an instance of a render target.  <a href=\"class_m_h_w_render_1_1_m_render_target_manager.html#a34596dab85af525cd42532e7e5e5c39e\">More...</a><br></td></tr>\n\
<tr class=\"separator:a34596dab85af525cd42532e7e5e5c39e\"><td class=\"memSeparator\" colspan=\"2\">&#160;</td></tr>\n\
<tr class=\"memitem:a1b0da7ddbe3556d678cd0593714f44e8\"><td class=\"memItemLeft\" translate=\"no\" align=\"right\" valign=\"top\"><a class=\"el\" translate=\"no\" href=\"#!/url=./cpp_ref/class_m_h_w_render_1_1_m_render_target.html\">MRenderTarget</a> *&#160;</td><td class=\"memItemRight\" translate=\"no\" valign=\"bottom\"><a class=\"el\" translate=\"no\" href=\"#!/url=./cpp_ref/class_m_h_w_render_1_1_m_render_target_manager.html#a1b0da7ddbe3556d678cd0593714f44e8\">acquireRenderTargetFromScreen</a> (const <a class=\"el\" translate=\"no\" href=\"#!/url=./cpp_ref/class_m_string.html\">MString</a> &amp;targetName) const </td></tr>\n\
<tr class=\"memdesc:a1b0da7ddbe3556d678cd0593714f44e8\"><td class=\"mdescLeft\">&#160;</td><td class=\"mdescRight\">Acquire an instance of a render target with the same characteristics as the current on-screen target.  <a href=\"class_m_h_w_render_1_1_m_render_target_manager.html#a1b0da7ddbe3556d678cd0593714f44e8\">More...</a><br></td></tr>\n\
<tr class=\"separator:a1b0da7ddbe3556d678cd0593714f44e8\"><td class=\"memSeparator\" colspan=\"2\">&#160;</td></tr>\n\
<tr class=\"memitem:a40caec1e38932c3f1bf6f99eacf58e79\"><td class=\"memItemLeft\" translate=\"no\" align=\"right\" valign=\"top\">bool&#160;</td><td class=\"memItemRight\" translate=\"no\" valign=\"bottom\"><a class=\"el\" translate=\"no\" href=\"#!/url=./cpp_ref/class_m_h_w_render_1_1_m_render_target_manager.html#a40caec1e38932c3f1bf6f99eacf58e79\">formatSupportsSRGBWrite</a> (::<a class=\"el\" translate=\"no\" href=\"#!/url=./cpp_ref/namespace_m_h_w_render.html#ab8dcc38685c6e5601a32fb70764742dc\">MHWRender::MRasterFormat</a> format) const </td></tr>\n\
<tr class=\"memdesc:a40caec1e38932c3f1bf6f99eacf58e79\"><td class=\"mdescLeft\">&#160;</td><td class=\"mdescRight\">This method will perform a check to determine whether gamma correction can be performed by the GPU when writing pixels to a render target of a given format.  <a href=\"class_m_h_w_render_1_1_m_render_target_manager.html#a40caec1e38932c3f1bf6f99eacf58e79\">More...</a><br></td></tr>\n\
<tr class=\"separator:a40caec1e38932c3f1bf6f99eacf58e79\"><td class=\"memSeparator\" colspan=\"2\">&#160;</td></tr>\n\
<tr class=\"memitem:a3ac81120f77bddaf281b6f1ba21c83d1\"><td class=\"memItemLeft\" translate=\"no\" align=\"right\" valign=\"top\">void&#160;</td><td class=\"memItemRight\" translate=\"no\" valign=\"bottom\"><a class=\"el\" translate=\"no\" href=\"#!/url=./cpp_ref/class_m_h_w_render_1_1_m_render_target_manager.html#a3ac81120f77bddaf281b6f1ba21c83d1\">releaseRenderTarget</a> (const <a class=\"el\" translate=\"no\" href=\"#!/url=./cpp_ref/class_m_h_w_render_1_1_m_render_target.html\">MRenderTarget</a> *target) const </td></tr>\n\
<tr class=\"memdesc:a3ac81120f77bddaf281b6f1ba21c83d1\"><td class=\"mdescLeft\">&#160;</td><td class=\"mdescRight\">Deletes the <a class=\"el\" translate=\"no\" href=\"#!/url=./cpp_ref/class_m_h_w_render_1_1_m_render_target.html\" title=\"An instance of a render target that may be used with Viewport 2.0. \">MRenderTarget</a> and releases the reference to the underlying target which is held by the <a class=\"el\" translate=\"no\" href=\"#!/url=./cpp_ref/class_m_h_w_render_1_1_m_render_target.html\" title=\"An instance of a render target that may be used with Viewport 2.0. \">MRenderTarget</a> object.  <a href=\"class_m_h_w_render_1_1_m_render_target_manager.html#a3ac81120f77bddaf281b6f1ba21c83d1\">More...</a><br></td></tr>\n\
<tr class=\"separator:a3ac81120f77bddaf281b6f1ba21c83d1\"><td class=\"memSeparator\" colspan=\"2\">&#160;</td></tr>\n\
</table><table class=\"memberdecls\">\n\
<tr class=\"heading\"><td colspan=\"2\"><h2 class=\"groupheader\"><a name=\"pub-static-methods\"></a>\n\
Static Public Member Functions</h2></td></tr>\n\
<tr class=\"memitem:a774cd5d8fbebe8e7ed82a5aa587d1f04\"><td class=\"memItemLeft\" translate=\"no\" align=\"right\" valign=\"top\">static const char *&#160;</td><td class=\"memItemRight\" translate=\"no\" valign=\"bottom\"><a class=\"el\" translate=\"no\" href=\"#!/url=./cpp_ref/class_m_h_w_render_1_1_m_render_target_manager.html#a774cd5d8fbebe8e7ed82a5aa587d1f04\">className</a> ()</td></tr>\n\
<tr class=\"memdesc:a774cd5d8fbebe8e7ed82a5aa587d1f04\"><td class=\"mdescLeft\">&#160;</td><td class=\"mdescRight\">Returns the name of this class.  <a href=\"class_m_h_w_render_1_1_m_render_target_manager.html#a774cd5d8fbebe8e7ed82a5aa587d1f04\">More...</a><br></td></tr>\n\
<tr class=\"separator:a774cd5d8fbebe8e7ed82a5aa587d1f04\"><td class=\"memSeparator\" colspan=\"2\">&#160;</td></tr>\n\
</table>\n\
<h2 class=\"groupheader\">Member Function Documentation</h2>\n\
<a class=\"anchor\" id=\"a34596dab85af525cd42532e7e5e5c39e\"></a>\n\
<div class=\"memitem\">\n\
<div class=\"memproto\">\n\
      <table class=\"memname\">\n\
        <tr>\n\
          <td class=\"memname\" translate=\"no\"><a class=\"el\" translate=\"no\" href=\"#!/url=./cpp_ref/class_m_h_w_render_1_1_m_render_target.html\">MRenderTarget</a> * acquireRenderTarget </td>\n\
          <td>(</td>\n\
          <td class=\"paramtype\">const <a class=\"el\" translate=\"no\" href=\"#!/url=./cpp_ref/class_m_h_w_render_1_1_m_render_target_description.html\">MRenderTargetDescription</a> &amp;&#160;</td>\n\
          <td class=\"paramname\"><em>targetDescription</em></td><td>)</td>\n\
          <td> const</td>\n\
        </tr>\n\
      </table>\n\
</div><div class=\"memdoc\">\n\
\n\
<p>Acquire an instance of a render target. </p>\n\
<p>When the object is no longer needed, MRenderTargetManager::releaseTarget() should be called to notify the target manager that the caller is done with the render target.</p>\n\
<p>If a target with the same identifier already exists then no new target will be created as render targets cannot be instanced. A NULL value will be returned.</p>\n\
<dl class=\"params\"><dt>Parameters</dt><dd>\n\
  <table class=\"params\">\n\
    <tr><td class=\"paramdir\">[in]</td><td class=\"paramname\">targetDescription</td><td>Description of the target</td></tr>\n\
  </table>\n\
  </dd>\n\
</dl>\n\
<dl class=\"section return\"><dt>Returns</dt><dd>A pointer to an instance of the requested target, or NULL on failure </dd></dl>\n\
<dl class=\"section \"><div id=\"dynsection-example1\" class=\"dynheader closed\" onclick=\"return toggleVisibility(this)\" style=\"cursor:pointer;\"><dt><img id=\"dynsection-example1-trigger\" src=\"cpp_ref/closed.png\" alt=\"+\"> <b>Examples: </b></dt></div><div id=\"dynsection-example1-content\" class=\"dyncontent\" style=\"display:none;\"><dd><a class=\"el\" translate=\"no\" href=\"#!/url=./cpp_ref/dx11_shader_2dx11_shader_8cpp-example.html#a258\">dx11Shader/dx11Shader.cpp</a>, <a class=\"el\" translate=\"no\" href=\"#!/url=./cpp_ref/hw_api_texture_test_2hw_renderer_helper_8cpp-example.html#a33\">hwApiTextureTest/hwRendererHelper.cpp</a>, <a class=\"el\" translate=\"no\" href=\"#!/url=./cpp_ref/view_d_x11_device_access_2view_d_x11_device_access_8cpp-example.html#a127\">viewDX11DeviceAccess/viewDX11DeviceAccess.cpp</a>, <a class=\"el\" translate=\"no\" href=\"#!/url=./cpp_ref/view_render_override_2view_render_override_8cpp-example.html#a18\">viewRenderOverride/viewRenderOverride.cpp</a>, and <a class=\"el\" translate=\"no\" href=\"#!/url=./cpp_ref/view_render_override_m_r_t_2view_render_override_m_r_t_8cpp-example.html#a19\">viewRenderOverrideMRT/viewRenderOverrideMRT.cpp</a>.</dd></div>\n\
</dl>\n\
</div>\n\
</div>\n\
<a class=\"anchor\" id=\"a1b0da7ddbe3556d678cd0593714f44e8\"></a>\n\
<div class=\"memitem\">\n\
<div class=\"memproto\">\n\
      <table class=\"memname\">\n\
        <tr>\n\
          <td class=\"memname\" translate=\"no\"><a class=\"el\" translate=\"no\" href=\"#!/url=./cpp_ref/class_m_h_w_render_1_1_m_render_target.html\">MRenderTarget</a> * acquireRenderTargetFromScreen </td>\n\
          <td>(</td>\n\
          <td class=\"paramtype\">const <a class=\"el\" translate=\"no\" href=\"#!/url=./cpp_ref/class_m_string.html\">MString</a> &amp;&#160;</td>\n\
          <td class=\"paramname\"><em>targetName</em></td><td>)</td>\n\
          <td> const</td>\n\
        </tr>\n\
      </table>\n\
</div><div class=\"memdoc\">\n\
\n\
<p>Acquire an instance of a render target with the same characteristics as the current on-screen target. </p>\n\
<p>When the object is no longer needed, MRenderTargetManager::releaseTarget() should be called to notify the target manager that the caller is done with the render target. releaseTarget() will delete the target after which it is no longer safe to use.</p>\n\
<p>If a target with the same identifier already exists then no new target will be created as render targets cannot be instanced. A NULL value will be returned.</p>\n\
<p>The new target will be given the current on-screen render target properties (width, heigth, format), and will be filled by its content.</p>\n\
<dl class=\"params\"><dt>Parameters</dt><dd>\n\
  <table class=\"params\">\n\
    <tr><td class=\"paramdir\">[in]</td><td class=\"paramname\">targetName</td><td>Name of the target</td></tr>\n\
  </table>\n\
  </dd>\n\
</dl>\n\
<dl class=\"section return\"><dt>Returns</dt><dd>A pointer to an instance of the requested target, or NULL on failure </dd></dl>\n\
<dl class=\"section \"><div id=\"dynsection-example2\" class=\"dynheader closed\" onclick=\"return toggleVisibility(this)\" style=\"cursor:pointer;\"><dt><img id=\"dynsection-example2-trigger\" src=\"cpp_ref/closed.png\" alt=\"+\"> <b>Examples: </b></dt></div><div id=\"dynsection-example2-content\" class=\"dyncontent\" style=\"display:none;\"><dd><a class=\"el\" translate=\"no\" href=\"#!/url=./cpp_ref/capture_view_render_cmd_2capture_view_render_cmd_8cpp-example.html#a5\">captureViewRenderCmd/captureViewRenderCmd.cpp</a>, and <a class=\"el\" translate=\"no\" href=\"#!/url=./cpp_ref/hw_api_texture_test_2hw_renderer_helper_8cpp-example.html#a8\">hwApiTextureTest/hwRendererHelper.cpp</a>.</dd></div>\n\
</dl>\n\
</div>\n\
</div>\n\
<a class=\"anchor\" id=\"a40caec1e38932c3f1bf6f99eacf58e79\"></a>\n\
<div class=\"memitem\">\n\
<div class=\"memproto\">\n\
      <table class=\"memname\">\n\
        <tr>\n\
          <td class=\"memname\" translate=\"no\">bool formatSupportsSRGBWrite </td>\n\
          <td>(</td>\n\
          <td class=\"paramtype\">::<a class=\"el\" translate=\"no\" href=\"#!/url=./cpp_ref/namespace_m_h_w_render.html#ab8dcc38685c6e5601a32fb70764742dc\">MHWRender::MRasterFormat</a>&#160;</td>\n\
          <td class=\"paramname\"><em>format</em></td><td>)</td>\n\
          <td> const</td>\n\
        </tr>\n\
      </table>\n\
</div><div class=\"memdoc\">\n\
\n\
<p>This method will perform a check to determine whether gamma correction can be performed by the GPU when writing pixels to a render target of a given format. </p>\n\
<p>Hardware support assumes a gamma value of 2.2 which is equivalent to converting to sRGB space. Thus, the capability of the render target is often referred as supporting \"sRGB write\".</p>\n\
<dl class=\"params\"><dt>Parameters</dt><dd>\n\
  <table class=\"params\">\n\
    <tr><td class=\"paramdir\">[in]</td><td class=\"paramname\">format</td><td>Render target format to check</td></tr>\n\
  </table>\n\
  </dd>\n\
</dl>\n\
<dl class=\"section return\"><dt>Returns</dt><dd>true if format supports sRGB write </dd></dl>\n\
<dl class=\"section \"><div id=\"dynsection-example3\" class=\"dynheader closed\" onclick=\"return toggleVisibility(this)\" style=\"cursor:pointer;\"><dt><img id=\"dynsection-example3-trigger\" src=\"cpp_ref/closed.png\" alt=\"+\"> <b>Examples: </b></dt></div><div id=\"dynsection-example3-content\" class=\"dyncontent\" style=\"display:none;\"><dd><a class=\"el\" translate=\"no\" href=\"#!/url=./cpp_ref/view_render_override_2view_render_override_8cpp-example.html#a17\">viewRenderOverride/viewRenderOverride.cpp</a>.</dd></div>\n\
</dl>\n\
</div>\n\
</div>\n\
<a class=\"anchor\" id=\"a3ac81120f77bddaf281b6f1ba21c83d1\"></a>\n\
<div class=\"memitem\">\n\
<div class=\"memproto\">\n\
      <table class=\"memname\">\n\
        <tr>\n\
          <td class=\"memname\" translate=\"no\">void releaseRenderTarget </td>\n\
          <td>(</td>\n\
          <td class=\"paramtype\">const <a class=\"el\" translate=\"no\" href=\"#!/url=./cpp_ref/class_m_h_w_render_1_1_m_render_target.html\">MRenderTarget</a> *&#160;</td>\n\
          <td class=\"paramname\"><em>target</em></td><td>)</td>\n\
          <td> const</td>\n\
        </tr>\n\
      </table>\n\
</div><div class=\"memdoc\">\n\
\n\
<p>Deletes the <a class=\"el\" translate=\"no\" href=\"#!/url=./cpp_ref/class_m_h_w_render_1_1_m_render_target.html\" title=\"An instance of a render target that may be used with Viewport 2.0. \">MRenderTarget</a> and releases the reference to the underlying target which is held by the <a class=\"el\" translate=\"no\" href=\"#!/url=./cpp_ref/class_m_h_w_render_1_1_m_render_target.html\" title=\"An instance of a render target that may be used with Viewport 2.0. \">MRenderTarget</a> object. </p>\n\
<p>After calling this method it is an error to try to use the <a class=\"el\" translate=\"no\" href=\"#!/url=./cpp_ref/class_m_h_w_render_1_1_m_render_target.html\" title=\"An instance of a render target that may be used with Viewport 2.0. \">MRenderTarget</a> and attempting to do so will result in instability. The underlying target might not be deleted immediately if it is in use by the renderer.</p>\n\
<dl class=\"params\"><dt>Parameters</dt><dd>\n\
  <table class=\"params\">\n\
    <tr><td class=\"paramdir\">[in]</td><td class=\"paramname\">target</td><td>The target to release </td></tr>\n\
  </table>\n\
  </dd>\n\
</dl>\n\
<dl class=\"section \"><div id=\"dynsection-example4\" class=\"dynheader closed\" onclick=\"return toggleVisibility(this)\" style=\"cursor:pointer;\"><dt><img id=\"dynsection-example4-trigger\" src=\"cpp_ref/closed.png\" alt=\"+\"> <b>Examples: </b></dt></div><div id=\"dynsection-example4-content\" class=\"dyncontent\" style=\"display:none;\"><dd><a class=\"el\" translate=\"no\" href=\"#!/url=./cpp_ref/blast2_cmd_2blast2_cmd_8cpp-example.html#a43\">blast2Cmd/blast2Cmd.cpp</a>, <a class=\"el\" translate=\"no\" href=\"#!/url=./cpp_ref/capture_view_render_cmd_2capture_view_render_cmd_8cpp-example.html#a7\">captureViewRenderCmd/captureViewRenderCmd.cpp</a>, <a class=\"el\" translate=\"no\" href=\"#!/url=./cpp_ref/dx11_shader_2dx11_shader_8cpp-example.html#a260\">dx11Shader/dx11Shader.cpp</a>, <a class=\"el\" translate=\"no\" href=\"#!/url=./cpp_ref/hw_api_texture_test_2hw_renderer_helper_8cpp-example.html#a13\">hwApiTextureTest/hwRendererHelper.cpp</a>, <a class=\"el\" translate=\"no\" href=\"#!/url=./cpp_ref/view_d_x11_device_access_2view_d_x11_device_access_8cpp-example.html#a116\">viewDX11DeviceAccess/viewDX11DeviceAccess.cpp</a>, <a class=\"el\" translate=\"no\" href=\"#!/url=./cpp_ref/view_render_override_2view_render_override_8cpp-example.html#a8\">viewRenderOverride/viewRenderOverride.cpp</a>, and <a class=\"el\" translate=\"no\" href=\"#!/url=./cpp_ref/view_render_override_m_r_t_2view_render_override_m_r_t_8cpp-example.html#a10\">viewRenderOverrideMRT/viewRenderOverrideMRT.cpp</a>.</dd></div>\n\
</dl>\n\
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
<hr>The documentation for this class was generated from the following files:<ul>\n\
<li>MRenderTargetManager.h</li>\n\
<li>MRenderTargetManager.cpp</li>\n\
</ul>\n\
</div><!-- contents -->\n\
</div><!-- doc-content -->\n\
          <div class=\"footer-block\"><a href=\"../html/ac.cmtdialog.htm\" class=\"comments-anchor\" target=\"_blank\"><span class=\"comments-link\">Please send us your comment about this page</span></a></div></div>\n\
   </div></body>\n\
</html>\n\
";