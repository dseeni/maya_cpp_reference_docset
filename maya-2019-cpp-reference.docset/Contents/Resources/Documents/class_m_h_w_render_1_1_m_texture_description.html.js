var topic = "<!-- saved from url=(0024)http://docs.autodesk.com -->\n\
<html>\n\
   <head><script src=\"../scripts/yepnope.1.5.4-min.js\" type=\"text/javascript\"></script><script src=\"../scripts/lib/jquery-1.11.1.min.js\" type=\"text/javascript\"></script><meta http-equiv=\"Content-Type\" content=\"text/html; charset=UTF-8\"><script type=\"text/javascript\" src=\"../scripts/utils/adsk.redirect.js\"></script>\n\
      <title>MTextureDescription Class Reference</title>\n\
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
    cpp_ref_adsk_ref_toc.initNavTree(\'class_m_h_w_render_1_1_m_texture_description.html\', tocPrefix);\n\
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
            <h1>MTextureDescription Class Reference</h1>\n\
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
  \n\
  <div class=\"headertitle\">\n\
<div class=\"title\">MTextureDescription Class Reference</div>  </div>\n\
<div id=\"OverviewLinksDiv\"><div id=\"dynsection-overview\" onclick=\"return toggleVisibility(this)\" class=\"dynheader closed\" style=\"cursor:pointer;\"><img id=\"dynsection-overview-trigger\" src=\"cpp_ref/closed.png\" alt=\"+\"> Related help topics: </div><div id=\"dynsection-overview-content\" class=\"dyncontent\" style=\"display:none;\"><ul class=\"overviewLinks\">\n\
<li class=\"overviewLink\"><a href=\"#!/url=./developer/Viewport-2-0-API/Overview-of-the-Viewport-2-0-API/Framework-Classes.html\">Viewport 2.0 API &gt; Overview of the Viewport 2.0 API &gt; Framework Classes</a></li>\n\
<li class=\"overviewLink\"><a href=\"#!/url=./developer/Viewport-2-0-API/Maya-Viewport-2-0-API-Guide/API-constructs/Texture-creation-and-texture.html\">Viewport 2.0 API &gt; Maya Viewport 2.0 API Guide &gt; API constructs &gt; Texture creation and texture manager</a></li>\n\
</ul></div></div>\n\
<div class=\"summary\">\n\
<a href=\"class_m_h_w_render_1_1_m_texture_description.html#pub-methods\">Public Member Functions</a> &#124;\n\
<a href=\"class_m_h_w_render_1_1_m_texture_description.html#pub-attribs\">Public Attributes</a>  </div></div><!--header-->\n\
<div class=\"contents\">\n\
\n\
<p><code>#include &lt;MTextureManager.h&gt;</code></p>\n\
<a name=\"details\" id=\"details\"></a><h2 class=\"groupheader\">Class Description</h2>\n\
<div class=\"textblock\"><p>Texture description. </p>\n\
<p>Provides sufficient information to describe how a block of data can be interpreted as a texture. </p>\n\
<dl class=\"section \"><div id=\"dynsection-example0\" class=\"dynheader closed\" onclick=\"return toggleVisibility(this)\" style=\"cursor:pointer;\"><dt><img id=\"dynsection-example0-trigger\" src=\"cpp_ref/closed.png\" alt=\"+\"> <b>Examples: </b></dt></div><div id=\"dynsection-example0-content\" class=\"dyncontent\" style=\"display:none;\"><dd><a class=\"el\" translate=\"no\" href=\"#!/url=./cpp_ref/api_mesh_shape_2api_mesh_geometry_override_8cpp-example.html#_a123\">apiMeshShape/apiMeshGeometryOverride.cpp</a>, <a class=\"el\" translate=\"no\" href=\"#!/url=./cpp_ref/cg_fx_2cgfx_shader_node_8cpp-example.html#_a91\">cgFx/cgfxShaderNode.cpp</a>, <a class=\"el\" translate=\"no\" href=\"#!/url=./cpp_ref/custom_image_plane_2custom_image_plane_8cpp-example.html#_a28\">customImagePlane/customImagePlane.cpp</a>, <a class=\"el\" translate=\"no\" href=\"#!/url=./cpp_ref/custom_texture_shader_2custom_texture_shader_override_8h-example.html#_a19\">customTextureShader/customTextureShaderOverride.h</a>, <a class=\"el\" translate=\"no\" href=\"#!/url=./cpp_ref/dx11_shader_2dx11_shader_8cpp-example.html#_a304\">dx11Shader/dx11Shader.cpp</a>, <a class=\"el\" translate=\"no\" href=\"#!/url=./cpp_ref/glsl_shader_2_g_l_s_l_shader_8cpp-example.html#_a337\">glslShader/GLSLShader.cpp</a>, <a class=\"el\" translate=\"no\" href=\"#!/url=./cpp_ref/hlsl_shader_2hlsl_shader_8cpp-example.html#_a196\">hlslShader/hlslShader.cpp</a>, <a class=\"el\" translate=\"no\" href=\"#!/url=./cpp_ref/hw_api_texture_test_2hw_api_texture_test_8cpp-example.html#_a48\">hwApiTextureTest/hwApiTextureTest.cpp</a>, <a class=\"el\" translate=\"no\" href=\"#!/url=./cpp_ref/hw_api_texture_test_2hw_renderer_helper_8cpp-example.html#_a14\">hwApiTextureTest/hwRendererHelper.cpp</a>, <a class=\"el\" translate=\"no\" href=\"#!/url=./cpp_ref/hw_api_texture_test_2hw_renderer_helper_g_l_8cpp-example.html#_a8\">hwApiTextureTest/hwRendererHelperGL.cpp</a>, <a class=\"el\" translate=\"no\" href=\"#!/url=./cpp_ref/simple_noise_shader_2simple_noise_shader_override_8cpp-example.html#_a32\">simpleNoiseShader/simpleNoiseShaderOverride.cpp</a>, and <a class=\"el\" translate=\"no\" href=\"#!/url=./cpp_ref/view_image_blit_override_2view_image_blit_override_8h-example.html#_a6\">viewImageBlitOverride/viewImageBlitOverride.h</a>.</dd></div>\n\
</dl></div><table class=\"memberdecls\">\n\
<tr class=\"heading\"><td colspan=\"2\"><h2 class=\"groupheader\"><a name=\"pub-methods\"></a>\n\
Public Member Functions</h2></td></tr>\n\
<tr class=\"memitem:ad1381bd49c9b737ad9e4755ba31fc9fb\"><td class=\"memItemLeft\" translate=\"no\" align=\"right\" valign=\"top\"><a class=\"anchor\" id=\"ad1381bd49c9b737ad9e4755ba31fc9fb\"></a>\n\
void&#160;</td><td class=\"memItemRight\" translate=\"no\" valign=\"bottom\"><a class=\"el\" translate=\"no\" href=\"#!/url=./cpp_ref/class_m_h_w_render_1_1_m_texture_description.html#ad1381bd49c9b737ad9e4755ba31fc9fb\">setToDefault2DTexture</a> ()</td></tr>\n\
<tr class=\"memdesc:ad1381bd49c9b737ad9e4755ba31fc9fb\"><td class=\"mdescLeft\">&#160;</td><td class=\"mdescRight\">Utility to set texture description to describe a 0 size 2-dimensional texture. <br></td></tr>\n\
<tr class=\"separator:ad1381bd49c9b737ad9e4755ba31fc9fb\"><td class=\"memSeparator\" colspan=\"2\">&#160;</td></tr>\n\
</table><table class=\"memberdecls\">\n\
<tr class=\"heading\"><td colspan=\"2\"><h2 class=\"groupheader\"><a name=\"pub-attribs\"></a>\n\
Public Attributes</h2></td></tr>\n\
<tr class=\"memitem:a2582291699b63f6ddc938c371b54344e\"><td class=\"memItemLeft\" translate=\"no\" align=\"right\" valign=\"top\"><a class=\"anchor\" id=\"a2582291699b63f6ddc938c371b54344e\"></a>\n\
unsigned int&#160;</td><td class=\"memItemRight\" translate=\"no\" valign=\"bottom\"><a class=\"el\" translate=\"no\" href=\"#!/url=./cpp_ref/class_m_h_w_render_1_1_m_texture_description.html#a2582291699b63f6ddc938c371b54344e\">fWidth</a></td></tr>\n\
<tr class=\"memdesc:a2582291699b63f6ddc938c371b54344e\"><td class=\"mdescLeft\">&#160;</td><td class=\"mdescRight\">Width in pixels. <br></td></tr>\n\
<tr class=\"separator:a2582291699b63f6ddc938c371b54344e\"><td class=\"memSeparator\" colspan=\"2\">&#160;</td></tr>\n\
<tr class=\"memitem:aa3b84951e55674788c9ae0f404a8ee17\"><td class=\"memItemLeft\" translate=\"no\" align=\"right\" valign=\"top\"><a class=\"anchor\" id=\"aa3b84951e55674788c9ae0f404a8ee17\"></a>\n\
unsigned int&#160;</td><td class=\"memItemRight\" translate=\"no\" valign=\"bottom\"><a class=\"el\" translate=\"no\" href=\"#!/url=./cpp_ref/class_m_h_w_render_1_1_m_texture_description.html#aa3b84951e55674788c9ae0f404a8ee17\">fHeight</a></td></tr>\n\
<tr class=\"memdesc:aa3b84951e55674788c9ae0f404a8ee17\"><td class=\"mdescLeft\">&#160;</td><td class=\"mdescRight\">Height in pixels. <br></td></tr>\n\
<tr class=\"separator:aa3b84951e55674788c9ae0f404a8ee17\"><td class=\"memSeparator\" colspan=\"2\">&#160;</td></tr>\n\
<tr class=\"memitem:accfe55705bc42a1e0375259fdfb5ab15\"><td class=\"memItemLeft\" translate=\"no\" align=\"right\" valign=\"top\">unsigned int&#160;</td><td class=\"memItemRight\" translate=\"no\" valign=\"bottom\"><a class=\"el\" translate=\"no\" href=\"#!/url=./cpp_ref/class_m_h_w_render_1_1_m_texture_description.html#accfe55705bc42a1e0375259fdfb5ab15\">fDepth</a></td></tr>\n\
<tr class=\"memdesc:accfe55705bc42a1e0375259fdfb5ab15\"><td class=\"mdescLeft\">&#160;</td><td class=\"mdescRight\">Depth in pixels.  <a href=\"class_m_h_w_render_1_1_m_texture_description.html#accfe55705bc42a1e0375259fdfb5ab15\">More...</a><br></td></tr>\n\
<tr class=\"separator:accfe55705bc42a1e0375259fdfb5ab15\"><td class=\"memSeparator\" colspan=\"2\">&#160;</td></tr>\n\
<tr class=\"memitem:af5f44f019f03059d0b50fca4b0500c0c\"><td class=\"memItemLeft\" translate=\"no\" align=\"right\" valign=\"top\"><a class=\"anchor\" id=\"af5f44f019f03059d0b50fca4b0500c0c\"></a>\n\
unsigned int&#160;</td><td class=\"memItemRight\" translate=\"no\" valign=\"bottom\"><a class=\"el\" translate=\"no\" href=\"#!/url=./cpp_ref/class_m_h_w_render_1_1_m_texture_description.html#af5f44f019f03059d0b50fca4b0500c0c\">fBytesPerRow</a></td></tr>\n\
<tr class=\"memdesc:af5f44f019f03059d0b50fca4b0500c0c\"><td class=\"mdescLeft\">&#160;</td><td class=\"mdescRight\">Number of bytes in a row of pixels. <br></td></tr>\n\
<tr class=\"separator:af5f44f019f03059d0b50fca4b0500c0c\"><td class=\"memSeparator\" colspan=\"2\">&#160;</td></tr>\n\
<tr class=\"memitem:a45f9eb1cc1e6bf34ccd9839c6ac64b8b\"><td class=\"memItemLeft\" translate=\"no\" align=\"right\" valign=\"top\"><a class=\"anchor\" id=\"a45f9eb1cc1e6bf34ccd9839c6ac64b8b\"></a>\n\
unsigned int&#160;</td><td class=\"memItemRight\" translate=\"no\" valign=\"bottom\"><a class=\"el\" translate=\"no\" href=\"#!/url=./cpp_ref/class_m_h_w_render_1_1_m_texture_description.html#a45f9eb1cc1e6bf34ccd9839c6ac64b8b\">fBytesPerSlice</a></td></tr>\n\
<tr class=\"memdesc:a45f9eb1cc1e6bf34ccd9839c6ac64b8b\"><td class=\"mdescLeft\">&#160;</td><td class=\"mdescRight\">Number of bytes in a slice (if an array) <br></td></tr>\n\
<tr class=\"separator:a45f9eb1cc1e6bf34ccd9839c6ac64b8b\"><td class=\"memSeparator\" colspan=\"2\">&#160;</td></tr>\n\
<tr class=\"memitem:a943c843873579cb41682ad4befe52a4c\"><td class=\"memItemLeft\" translate=\"no\" align=\"right\" valign=\"top\">unsigned int&#160;</td><td class=\"memItemRight\" translate=\"no\" valign=\"bottom\"><a class=\"el\" translate=\"no\" href=\"#!/url=./cpp_ref/class_m_h_w_render_1_1_m_texture_description.html#a943c843873579cb41682ad4befe52a4c\">fMipmaps</a></td></tr>\n\
<tr class=\"memdesc:a943c843873579cb41682ad4befe52a4c\"><td class=\"mdescLeft\">&#160;</td><td class=\"mdescRight\">Number of mipmap levels.  <a href=\"class_m_h_w_render_1_1_m_texture_description.html#a943c843873579cb41682ad4befe52a4c\">More...</a><br></td></tr>\n\
<tr class=\"separator:a943c843873579cb41682ad4befe52a4c\"><td class=\"memSeparator\" colspan=\"2\">&#160;</td></tr>\n\
<tr class=\"memitem:ac7f01de9d9624dfac51f8b3f9de86781\"><td class=\"memItemLeft\" translate=\"no\" align=\"right\" valign=\"top\">unsigned int&#160;</td><td class=\"memItemRight\" translate=\"no\" valign=\"bottom\"><a class=\"el\" translate=\"no\" href=\"#!/url=./cpp_ref/class_m_h_w_render_1_1_m_texture_description.html#ac7f01de9d9624dfac51f8b3f9de86781\">fArraySlices</a></td></tr>\n\
<tr class=\"memdesc:ac7f01de9d9624dfac51f8b3f9de86781\"><td class=\"mdescLeft\">&#160;</td><td class=\"mdescRight\">Number of array slices.  <a href=\"class_m_h_w_render_1_1_m_texture_description.html#ac7f01de9d9624dfac51f8b3f9de86781\">More...</a><br></td></tr>\n\
<tr class=\"separator:ac7f01de9d9624dfac51f8b3f9de86781\"><td class=\"memSeparator\" colspan=\"2\">&#160;</td></tr>\n\
<tr class=\"memitem:a970a52e15a6db4682fede9dead7982cc\"><td class=\"memItemLeft\" translate=\"no\" align=\"right\" valign=\"top\"><a class=\"anchor\" id=\"a970a52e15a6db4682fede9dead7982cc\"></a>\n\
::<a class=\"el\" translate=\"no\" href=\"#!/url=./cpp_ref/namespace_m_h_w_render.html#ab8dcc38685c6e5601a32fb70764742dc\">MHWRender::MRasterFormat</a>&#160;</td><td class=\"memItemRight\" translate=\"no\" valign=\"bottom\"><a class=\"el\" translate=\"no\" href=\"#!/url=./cpp_ref/class_m_h_w_render_1_1_m_texture_description.html#a970a52e15a6db4682fede9dead7982cc\">fFormat</a></td></tr>\n\
<tr class=\"memdesc:a970a52e15a6db4682fede9dead7982cc\"><td class=\"mdescLeft\">&#160;</td><td class=\"mdescRight\">Pixel / raster format. <br></td></tr>\n\
<tr class=\"separator:a970a52e15a6db4682fede9dead7982cc\"><td class=\"memSeparator\" colspan=\"2\">&#160;</td></tr>\n\
<tr class=\"memitem:ad905f7a59df4f73faa690967c4d48bdd\"><td class=\"memItemLeft\" translate=\"no\" align=\"right\" valign=\"top\"><a class=\"anchor\" id=\"ad905f7a59df4f73faa690967c4d48bdd\"></a>\n\
::<a class=\"el\" translate=\"no\" href=\"#!/url=./cpp_ref/namespace_m_h_w_render.html#aaad5d927ce0bd1ecf45d5ddff4e3e030\">MHWRender::MTextureType</a>&#160;</td><td class=\"memItemRight\" translate=\"no\" valign=\"bottom\"><a class=\"el\" translate=\"no\" href=\"#!/url=./cpp_ref/class_m_h_w_render_1_1_m_texture_description.html#ad905f7a59df4f73faa690967c4d48bdd\">fTextureType</a></td></tr>\n\
<tr class=\"memdesc:ad905f7a59df4f73faa690967c4d48bdd\"><td class=\"mdescLeft\">&#160;</td><td class=\"mdescRight\">Type of texture. <br></td></tr>\n\
<tr class=\"separator:ad905f7a59df4f73faa690967c4d48bdd\"><td class=\"memSeparator\" colspan=\"2\">&#160;</td></tr>\n\
<tr class=\"memitem:a15346f90ba0fee63a1b2496e0eb9485b\"><td class=\"memItemLeft\" translate=\"no\" align=\"right\" valign=\"top\"><a class=\"anchor\" id=\"a15346f90ba0fee63a1b2496e0eb9485b\"></a>\n\
::<a class=\"el\" translate=\"no\" href=\"#!/url=./cpp_ref/namespace_m_h_w_render.html#a732fcbd8ea04b09b6077d4fe73e5e624\">MHWRender::MEnvironmentMapType</a>&#160;</td><td class=\"memItemRight\" translate=\"no\" valign=\"bottom\"><a class=\"el\" translate=\"no\" href=\"#!/url=./cpp_ref/class_m_h_w_render_1_1_m_texture_description.html#a15346f90ba0fee63a1b2496e0eb9485b\">fEnvMapType</a></td></tr>\n\
<tr class=\"memdesc:a15346f90ba0fee63a1b2496e0eb9485b\"><td class=\"mdescLeft\">&#160;</td><td class=\"mdescRight\">Type of environment mapping. <br></td></tr>\n\
<tr class=\"separator:a15346f90ba0fee63a1b2496e0eb9485b\"><td class=\"memSeparator\" colspan=\"2\">&#160;</td></tr>\n\
</table>\n\
<h2 class=\"groupheader\">Member Data Documentation</h2>\n\
<a class=\"anchor\" id=\"accfe55705bc42a1e0375259fdfb5ab15\"></a>\n\
<div class=\"memitem\">\n\
<div class=\"memproto\">\n\
      <table class=\"memname\">\n\
        <tr>\n\
          <td class=\"memname\" translate=\"no\">unsigned int fDepth</td>\n\
        </tr>\n\
      </table>\n\
</div><div class=\"memdoc\">\n\
\n\
<p>Depth in pixels. </p>\n\
<p>A 2D texture has depth of 1. </p>\n\
<dl class=\"section \"><div id=\"dynsection-example1\" class=\"dynheader closed\" onclick=\"return toggleVisibility(this)\" style=\"cursor:pointer;\"><dt><img id=\"dynsection-example1-trigger\" src=\"cpp_ref/closed.png\" alt=\"+\"> <b>Examples: </b></dt></div><div id=\"dynsection-example1-content\" class=\"dyncontent\" style=\"display:none;\"><dd><a class=\"el\" translate=\"no\" href=\"#!/url=./cpp_ref/api_mesh_shape_2api_mesh_geometry_override_8cpp-example.html#a127\">apiMeshShape/apiMeshGeometryOverride.cpp</a>, <a class=\"el\" translate=\"no\" href=\"#!/url=./cpp_ref/hw_api_texture_test_2hw_renderer_helper_8cpp-example.html#a19\">hwApiTextureTest/hwRendererHelper.cpp</a>, and <a class=\"el\" translate=\"no\" href=\"#!/url=./cpp_ref/simple_noise_shader_2simple_noise_shader_override_8cpp-example.html#a36\">simpleNoiseShader/simpleNoiseShaderOverride.cpp</a>.</dd></div>\n\
</dl>\n\
</div>\n\
</div>\n\
<a class=\"anchor\" id=\"a943c843873579cb41682ad4befe52a4c\"></a>\n\
<div class=\"memitem\">\n\
<div class=\"memproto\">\n\
      <table class=\"memname\">\n\
        <tr>\n\
          <td class=\"memname\" translate=\"no\">unsigned int fMipmaps</td>\n\
        </tr>\n\
      </table>\n\
</div><div class=\"memdoc\">\n\
\n\
<p>Number of mipmap levels. </p>\n\
<p>0 means the entire mipmap chain. </p>\n\
<dl class=\"section \"><div id=\"dynsection-example2\" class=\"dynheader closed\" onclick=\"return toggleVisibility(this)\" style=\"cursor:pointer;\"><dt><img id=\"dynsection-example2-trigger\" src=\"cpp_ref/closed.png\" alt=\"+\"> <b>Examples: </b></dt></div><div id=\"dynsection-example2-content\" class=\"dyncontent\" style=\"display:none;\"><dd><a class=\"el\" translate=\"no\" href=\"#!/url=./cpp_ref/api_mesh_shape_2api_mesh_geometry_override_8cpp-example.html#a130\">apiMeshShape/apiMeshGeometryOverride.cpp</a>, <a class=\"el\" translate=\"no\" href=\"#!/url=./cpp_ref/hw_api_texture_test_2hw_renderer_helper_8cpp-example.html#a22\">hwApiTextureTest/hwRendererHelper.cpp</a>, and <a class=\"el\" translate=\"no\" href=\"#!/url=./cpp_ref/simple_noise_shader_2simple_noise_shader_override_8cpp-example.html#a42\">simpleNoiseShader/simpleNoiseShaderOverride.cpp</a>.</dd></div>\n\
</dl>\n\
</div>\n\
</div>\n\
<a class=\"anchor\" id=\"ac7f01de9d9624dfac51f8b3f9de86781\"></a>\n\
<div class=\"memitem\">\n\
<div class=\"memproto\">\n\
      <table class=\"memname\">\n\
        <tr>\n\
          <td class=\"memname\" translate=\"no\">unsigned int fArraySlices</td>\n\
        </tr>\n\
      </table>\n\
</div><div class=\"memdoc\">\n\
\n\
<p>Number of array slices. </p>\n\
<p>e.g. 6 would be required for a cube-map </p>\n\
<dl class=\"section \"><div id=\"dynsection-example3\" class=\"dynheader closed\" onclick=\"return toggleVisibility(this)\" style=\"cursor:pointer;\"><dt><img id=\"dynsection-example3-trigger\" src=\"cpp_ref/closed.png\" alt=\"+\"> <b>Examples: </b></dt></div><div id=\"dynsection-example3-content\" class=\"dyncontent\" style=\"display:none;\"><dd><a class=\"el\" translate=\"no\" href=\"#!/url=./cpp_ref/api_mesh_shape_2api_mesh_geometry_override_8cpp-example.html#a131\">apiMeshShape/apiMeshGeometryOverride.cpp</a>, and <a class=\"el\" translate=\"no\" href=\"#!/url=./cpp_ref/hw_api_texture_test_2hw_renderer_helper_8cpp-example.html#a23\">hwApiTextureTest/hwRendererHelper.cpp</a>.</dd></div>\n\
</dl>\n\
</div>\n\
</div>\n\
<hr>The documentation for this class was generated from the following file:<ul>\n\
<li>MTextureManager.h</li>\n\
</ul>\n\
</div><!-- contents -->\n\
</div><!-- doc-content -->\n\
          <div class=\"footer-block\"><a href=\"../html/ac.cmtdialog.htm\" class=\"comments-anchor\" target=\"_blank\"><span class=\"comments-link\">Please send us your comment about this page</span></a></div></div>\n\
   </div></body>\n\
</html>\n\
";