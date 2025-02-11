var topic = "<!-- saved from url=(0024)http://docs.autodesk.com -->\n\
<html>\n\
   <head><script src=\"../scripts/yepnope.1.5.4-min.js\" type=\"text/javascript\"></script><script src=\"../scripts/lib/jquery-1.11.1.min.js\" type=\"text/javascript\"></script><meta http-equiv=\"Content-Type\" content=\"text/html; charset=UTF-8\"><script type=\"text/javascript\" src=\"../scripts/utils/adsk.redirect.js\"></script>\n\
      <title>Class Members - Variables</title>\n\
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
    cpp_ref_adsk_ref_toc.initNavTree(\'functions_vars_o.html\', tocPrefix);\n\
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
            <h1>Class Members - Variables</h1>\n\
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
      <li class=\"current\"><a href=\"#!/url=./cpp_ref/functions.html\"><span>Class&#160;Members</span></a></li>\n\
    </ul>\n\
  </div>\n\
  <div id=\"navrow3\" class=\"tabs2\">\n\
    <ul class=\"tablist\">\n\
      <li><a href=\"#!/url=./cpp_ref/functions.html\"><span>All</span></a></li>\n\
      <li><a href=\"#!/url=./cpp_ref/functions_func.html\"><span>Functions</span></a></li>\n\
      <li class=\"current\"><a href=\"#!/url=./cpp_ref/functions_vars.html\"><span>Variables</span></a></li>\n\
      <li><a href=\"#!/url=./cpp_ref/functions_type.html\"><span>Typedefs</span></a></li>\n\
      <li><a href=\"#!/url=./cpp_ref/functions_enum.html\"><span>Enumerations</span></a></li>\n\
      <li><a href=\"#!/url=./cpp_ref/functions_eval.html\"><span>Enumerator</span></a></li>\n\
      <li><a href=\"#!/url=./cpp_ref/functions_rela.html\"><span>Related&#160;Functions</span></a></li>\n\
    </ul>\n\
  </div>\n\
  <div id=\"navrow4\" class=\"tabs3\">\n\
    <ul class=\"tablist\">\n\
      <li><a href=\"#!/url=./cpp_ref/functions_vars.html#index_a\"><span>a</span></a></li>\n\
      <li><a href=\"#!/url=./cpp_ref/functions_vars_b.html#index_b\"><span>b</span></a></li>\n\
      <li><a href=\"#!/url=./cpp_ref/functions_vars_c.html#index_c\"><span>c</span></a></li>\n\
      <li><a href=\"#!/url=./cpp_ref/functions_vars_d.html#index_d\"><span>d</span></a></li>\n\
      <li><a href=\"#!/url=./cpp_ref/functions_vars_e.html#index_e\"><span>e</span></a></li>\n\
      <li><a href=\"#!/url=./cpp_ref/functions_vars_f.html#index_f\"><span>f</span></a></li>\n\
      <li><a href=\"#!/url=./cpp_ref/functions_vars_g.html#index_g\"><span>g</span></a></li>\n\
      <li><a href=\"#!/url=./cpp_ref/functions_vars_h.html#index_h\"><span>h</span></a></li>\n\
      <li><a href=\"#!/url=./cpp_ref/functions_vars_i.html#index_i\"><span>i</span></a></li>\n\
      <li><a href=\"#!/url=./cpp_ref/functions_vars_k.html#index_k\"><span>k</span></a></li>\n\
      <li><a href=\"#!/url=./cpp_ref/functions_vars_l.html#index_l\"><span>l</span></a></li>\n\
      <li><a href=\"#!/url=./cpp_ref/functions_vars_m.html#index_m\"><span>m</span></a></li>\n\
      <li><a href=\"#!/url=./cpp_ref/functions_vars_n.html#index_n\"><span>n</span></a></li>\n\
      <li class=\"current\"><a href=\"#!/url=./cpp_ref/functions_vars_o.html#index_o\"><span>o</span></a></li>\n\
      <li><a href=\"#!/url=./cpp_ref/functions_vars_p.html#index_p\"><span>p</span></a></li>\n\
      <li><a href=\"#!/url=./cpp_ref/functions_vars_r.html#index_r\"><span>r</span></a></li>\n\
      <li><a href=\"#!/url=./cpp_ref/functions_vars_s.html#index_s\"><span>s</span></a></li>\n\
      <li><a href=\"#!/url=./cpp_ref/functions_vars_t.html#index_t\"><span>t</span></a></li>\n\
      <li><a href=\"#!/url=./cpp_ref/functions_vars_u.html#index_u\"><span>u</span></a></li>\n\
      <li><a href=\"#!/url=./cpp_ref/functions_vars_v.html#index_v\"><span>v</span></a></li>\n\
      <li><a href=\"#!/url=./cpp_ref/functions_vars_w.html#index_w\"><span>w</span></a></li>\n\
      <li><a href=\"#!/url=./cpp_ref/functions_vars_x.html#index_x\"><span>x</span></a></li>\n\
      <li><a href=\"#!/url=./cpp_ref/functions_vars_y.html#index_y\"><span>y</span></a></li>\n\
      <li><a href=\"#!/url=./cpp_ref/functions_vars_z.html#index_z\"><span>z</span></a></li>\n\
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
<div class=\"contents\">\n\
&#160;\n\
\n\
<h3><a class=\"anchor\" id=\"index_o\"></a>- o -</h3><ul>\n\
<li>objectColor\n\
: <a class=\"el\" translate=\"no\" href=\"#!/url=./cpp_ref/class_m_px_locator_node.html#a9edb9e827f6f659034c033a07b434dc7\">MPxLocatorNode</a>\n\
, <a class=\"el\" translate=\"no\" href=\"#!/url=./cpp_ref/class_m_px_surface_shape.html#a9edb9e827f6f659034c033a07b434dc7\">MPxSurfaceShape</a>\n\
, <a class=\"el\" translate=\"no\" href=\"#!/url=./cpp_ref/class_m_px_transform.html#a9edb9e827f6f659034c033a07b434dc7\">MPxTransform</a>\n\
</li>\n\
<li>objectGroupColor\n\
: <a class=\"el\" translate=\"no\" href=\"#!/url=./cpp_ref/class_m_px_locator_node.html#a0b6d8b9bfd2a0a151c58775e47ba9d19\">MPxLocatorNode</a>\n\
, <a class=\"el\" translate=\"no\" href=\"#!/url=./cpp_ref/class_m_px_surface_shape.html#a0b6d8b9bfd2a0a151c58775e47ba9d19\">MPxSurfaceShape</a>\n\
, <a class=\"el\" translate=\"no\" href=\"#!/url=./cpp_ref/class_m_px_transform.html#a0b6d8b9bfd2a0a151c58775e47ba9d19\">MPxTransform</a>\n\
</li>\n\
<li>objectGroupId\n\
: <a class=\"el\" translate=\"no\" href=\"#!/url=./cpp_ref/class_m_px_locator_node.html#a7eebfe684c5005ecb6b607ea5ba05bbc\">MPxLocatorNode</a>\n\
, <a class=\"el\" translate=\"no\" href=\"#!/url=./cpp_ref/class_m_px_surface_shape.html#a7eebfe684c5005ecb6b607ea5ba05bbc\">MPxSurfaceShape</a>\n\
, <a class=\"el\" translate=\"no\" href=\"#!/url=./cpp_ref/class_m_px_transform.html#a7eebfe684c5005ecb6b607ea5ba05bbc\">MPxTransform</a>\n\
</li>\n\
<li>objectGroups\n\
: <a class=\"el\" translate=\"no\" href=\"#!/url=./cpp_ref/class_m_px_locator_node.html#a1f6d0343b05ddc81f724513487a657d9\">MPxLocatorNode</a>\n\
, <a class=\"el\" translate=\"no\" href=\"#!/url=./cpp_ref/class_m_px_surface_shape.html#a1f6d0343b05ddc81f724513487a657d9\">MPxSurfaceShape</a>\n\
, <a class=\"el\" translate=\"no\" href=\"#!/url=./cpp_ref/class_m_px_transform.html#a1f6d0343b05ddc81f724513487a657d9\">MPxTransform</a>\n\
</li>\n\
<li>objectGrpCompList\n\
: <a class=\"el\" translate=\"no\" href=\"#!/url=./cpp_ref/class_m_px_locator_node.html#abdc64f3b0c12aa2e5582a4c77f15b897\">MPxLocatorNode</a>\n\
, <a class=\"el\" translate=\"no\" href=\"#!/url=./cpp_ref/class_m_px_surface_shape.html#abdc64f3b0c12aa2e5582a4c77f15b897\">MPxSurfaceShape</a>\n\
, <a class=\"el\" translate=\"no\" href=\"#!/url=./cpp_ref/class_m_px_transform.html#abdc64f3b0c12aa2e5582a4c77f15b897\">MPxTransform</a>\n\
</li>\n\
<li>offset\n\
: <a class=\"el\" translate=\"no\" href=\"#!/url=./cpp_ref/class_m_px_image_plane.html#a702ab0d26fb9a8cd4abab0e481624df1\">MPxImagePlane</a>\n\
</li>\n\
<li>offsetX\n\
: <a class=\"el\" translate=\"no\" href=\"#!/url=./cpp_ref/class_m_px_image_plane.html#a9fe15c399c2c4f7df4d2df3e36d06c4f\">MPxImagePlane</a>\n\
</li>\n\
<li>offsetY\n\
: <a class=\"el\" translate=\"no\" href=\"#!/url=./cpp_ref/class_m_px_image_plane.html#a302d1529bd4ff2f45ebf00e980053626\">MPxImagePlane</a>\n\
</li>\n\
<li>one\n\
: <a class=\"el\" translate=\"no\" href=\"#!/url=./cpp_ref/class_m_float_vector.html#a137d8f308cef92fb113356dcd83f40a7\">MFloatVector</a>\n\
, <a class=\"el\" translate=\"no\" href=\"#!/url=./cpp_ref/class_m_vector.html#a86623da5c7e2e16cbc4753cbce07e598\">MVector</a>\n\
</li>\n\
<li>order\n\
: <a class=\"el\" translate=\"no\" href=\"#!/url=./cpp_ref/class_m_euler_rotation.html#af4131b978023e6f696059d7406f33d92\">MEulerRotation</a>\n\
, <a class=\"el\" translate=\"no\" href=\"#!/url=./cpp_ref/class_m_px_camera_set.html#a8363ecd89a7f32f6edd9b115be89c544\">MPxCameraSet</a>\n\
</li>\n\
<li>orientationMarkerTime\n\
: <a class=\"el\" translate=\"no\" href=\"#!/url=./cpp_ref/class_m_px_motion_path_node.html#ada89e9cbd4dfe03e051a1d18e380db32\">MPxMotionPathNode</a>\n\
</li>\n\
<li>orientMatrix\n\
: <a class=\"el\" translate=\"no\" href=\"#!/url=./cpp_ref/class_m_px_motion_path_node.html#a6ade6e9b1c48d5c143fb63b1d7cb46ff\">MPxMotionPathNode</a>\n\
</li>\n\
<li>origin\n\
: <a class=\"el\" translate=\"no\" href=\"#!/url=./cpp_ref/class_m_float_point.html#a4314eb9031541655a539e74616e5ad1e\">MFloatPoint</a>\n\
, <a class=\"el\" translate=\"no\" href=\"#!/url=./cpp_ref/class_m_point.html#a00b995f41b11d33118a799cfb2bf00ac\">MPoint</a>\n\
</li>\n\
<li>outColor\n\
: <a class=\"el\" translate=\"no\" href=\"#!/url=./cpp_ref/class_m_px_hardware_shader.html#a6557dbc4119bbe22dbd137ef4a2ecfbd\">MPxHardwareShader</a>\n\
, <a class=\"el\" translate=\"no\" href=\"#!/url=./cpp_ref/class_m_px_hw_shader_node.html#a6557dbc4119bbe22dbd137ef4a2ecfbd\">MPxHwShaderNode</a>\n\
</li>\n\
<li>outColorB\n\
: <a class=\"el\" translate=\"no\" href=\"#!/url=./cpp_ref/class_m_px_hardware_shader.html#a9df6eb33c4bb82ef95fd2e8e9e9d79b5\">MPxHardwareShader</a>\n\
, <a class=\"el\" translate=\"no\" href=\"#!/url=./cpp_ref/class_m_px_hw_shader_node.html#a9df6eb33c4bb82ef95fd2e8e9e9d79b5\">MPxHwShaderNode</a>\n\
</li>\n\
<li>outColorG\n\
: <a class=\"el\" translate=\"no\" href=\"#!/url=./cpp_ref/class_m_px_hardware_shader.html#abb8a0c842715de056c734b7b35b77ffb\">MPxHardwareShader</a>\n\
, <a class=\"el\" translate=\"no\" href=\"#!/url=./cpp_ref/class_m_px_hw_shader_node.html#abb8a0c842715de056c734b7b35b77ffb\">MPxHwShaderNode</a>\n\
</li>\n\
<li>outColorPP\n\
: <a class=\"el\" translate=\"no\" href=\"#!/url=./cpp_ref/class_m_px_particle_attribute_mapper_node.html#ae2fe8bdb6857872e67da2a195dd12ed9\">MPxParticleAttributeMapperNode</a>\n\
</li>\n\
<li>outColorR\n\
: <a class=\"el\" translate=\"no\" href=\"#!/url=./cpp_ref/class_m_px_hardware_shader.html#a1aab211931f616583648323bf05b92cd\">MPxHardwareShader</a>\n\
, <a class=\"el\" translate=\"no\" href=\"#!/url=./cpp_ref/class_m_px_hw_shader_node.html#a1aab211931f616583648323bf05b92cd\">MPxHwShaderNode</a>\n\
</li>\n\
<li>outGlowColor\n\
: <a class=\"el\" translate=\"no\" href=\"#!/url=./cpp_ref/class_m_px_hw_shader_node.html#a39cfc8b4aea943d6daff25690df2845d\">MPxHwShaderNode</a>\n\
</li>\n\
<li>outGlowColorB\n\
: <a class=\"el\" translate=\"no\" href=\"#!/url=./cpp_ref/class_m_px_hw_shader_node.html#a4f72dfbd66579c5baa6f4b7523bc2bb4\">MPxHwShaderNode</a>\n\
</li>\n\
<li>outGlowColorG\n\
: <a class=\"el\" translate=\"no\" href=\"#!/url=./cpp_ref/class_m_px_hw_shader_node.html#a32c96c25ab67a4e3693a903865f6a8de\">MPxHwShaderNode</a>\n\
</li>\n\
<li>outGlowColorR\n\
: <a class=\"el\" translate=\"no\" href=\"#!/url=./cpp_ref/class_m_px_hw_shader_node.html#afa54dc8de0572ce68ffff45b02f31fff\">MPxHwShaderNode</a>\n\
</li>\n\
<li>outMatteOpacity\n\
: <a class=\"el\" translate=\"no\" href=\"#!/url=./cpp_ref/class_m_px_hw_shader_node.html#aafd35db87b20969cd6d8a1185741b4cf\">MPxHwShaderNode</a>\n\
</li>\n\
<li>outMatteOpacityB\n\
: <a class=\"el\" translate=\"no\" href=\"#!/url=./cpp_ref/class_m_px_hw_shader_node.html#a9345279ad5901916423f63330ad71e43\">MPxHwShaderNode</a>\n\
</li>\n\
<li>outMatteOpacityG\n\
: <a class=\"el\" translate=\"no\" href=\"#!/url=./cpp_ref/class_m_px_hw_shader_node.html#a788aa5195f0a8a4d86ca31cfa3afd0f8\">MPxHwShaderNode</a>\n\
</li>\n\
<li>outMatteOpacityR\n\
: <a class=\"el\" translate=\"no\" href=\"#!/url=./cpp_ref/class_m_px_hw_shader_node.html#ad1412be7ca560575f16f5fffb29ced3d\">MPxHwShaderNode</a>\n\
</li>\n\
<li>outMaxValue\n\
: <a class=\"el\" translate=\"no\" href=\"#!/url=./cpp_ref/class_m_px_particle_attribute_mapper_node.html#a2afde5d82b5f491455272f10a0a17093\">MPxParticleAttributeMapperNode</a>\n\
</li>\n\
<li>outMinValue\n\
: <a class=\"el\" translate=\"no\" href=\"#!/url=./cpp_ref/class_m_px_particle_attribute_mapper_node.html#a59040c2fe50526b2ccce7b91148ffa61\">MPxParticleAttributeMapperNode</a>\n\
</li>\n\
<li>output\n\
: <a class=\"el\" translate=\"no\" href=\"#!/url=./cpp_ref/class_m_px_threaded_device_node.html#a77275ebc3fa98906328eff0ca2343545\">MPxThreadedDeviceNode</a>\n\
</li>\n\
<li>outputGeom\n\
: <a class=\"el\" translate=\"no\" href=\"#!/url=./cpp_ref/class_m_px_geometry_filter.html#a45a46b4670a182a8af07f22c412f1613\">MPxGeometryFilter</a>\n\
</li>\n\
<li>outTransparency\n\
: <a class=\"el\" translate=\"no\" href=\"#!/url=./cpp_ref/class_m_px_hw_shader_node.html#a35fa1b6d719d1944851f482cedd8592f\">MPxHwShaderNode</a>\n\
</li>\n\
<li>outTransparencyB\n\
: <a class=\"el\" translate=\"no\" href=\"#!/url=./cpp_ref/class_m_px_hw_shader_node.html#a60999e04cdd8573397d345577247b6b4\">MPxHwShaderNode</a>\n\
</li>\n\
<li>outTransparencyG\n\
: <a class=\"el\" translate=\"no\" href=\"#!/url=./cpp_ref/class_m_px_hw_shader_node.html#a760cdafbac5f927586860b27131cc055\">MPxHwShaderNode</a>\n\
</li>\n\
<li>outTransparencyR\n\
: <a class=\"el\" translate=\"no\" href=\"#!/url=./cpp_ref/class_m_px_hw_shader_node.html#aa102575e67c75dafcd45a25e120201e8\">MPxHwShaderNode</a>\n\
</li>\n\
<li>outValuePP\n\
: <a class=\"el\" translate=\"no\" href=\"#!/url=./cpp_ref/class_m_px_particle_attribute_mapper_node.html#a74cfb7f31ced6c221470809f3da5408c\">MPxParticleAttributeMapperNode</a>\n\
</li>\n\
<li>overrideColor\n\
: <a class=\"el\" translate=\"no\" href=\"#!/url=./cpp_ref/class_m_px_transform.html#a15959bd331d073e9990c20087a12976d\">MPxTransform</a>\n\
</li>\n\
<li>overrideDisplayType\n\
: <a class=\"el\" translate=\"no\" href=\"#!/url=./cpp_ref/class_m_px_transform.html#ae2103f388f0c941fd3184e84d65e6043\">MPxTransform</a>\n\
</li>\n\
<li>overrideEnabled\n\
: <a class=\"el\" translate=\"no\" href=\"#!/url=./cpp_ref/class_m_px_transform.html#ad3bc4ac7c40246718ddf0687ca879cd6\">MPxTransform</a>\n\
</li>\n\
<li>overrideLevelOfDetail\n\
: <a class=\"el\" translate=\"no\" href=\"#!/url=./cpp_ref/class_m_px_transform.html#a3e0830216aacf25774911c73bb6b0301\">MPxTransform</a>\n\
</li>\n\
<li>overrideName\n\
: <a class=\"el\" translate=\"no\" href=\"#!/url=./cpp_ref/struct_m_h_w_render_1_1_m_frame_context_1_1_render_override_information.html#a7d246d5345a44680468aa6cae4cfc648\">MFrameContext::RenderOverrideInformation</a>\n\
</li>\n\
<li>overridePlayback\n\
: <a class=\"el\" translate=\"no\" href=\"#!/url=./cpp_ref/class_m_px_transform.html#a5a5230c14b65bac10d0be7a9b47bed03\">MPxTransform</a>\n\
</li>\n\
<li>overrideShading\n\
: <a class=\"el\" translate=\"no\" href=\"#!/url=./cpp_ref/class_m_px_transform.html#aa6bd103a76a67ff296540aafda8b98fa\">MPxTransform</a>\n\
</li>\n\
<li>overrideTexturing\n\
: <a class=\"el\" translate=\"no\" href=\"#!/url=./cpp_ref/class_m_px_transform.html#af073d9676e6886bffc848b02bdb1a676\">MPxTransform</a>\n\
</li>\n\
<li>overrideVisibility\n\
: <a class=\"el\" translate=\"no\" href=\"#!/url=./cpp_ref/class_m_px_transform.html#a187a53b00e3dd020e94c1d8eeeda3679\">MPxTransform</a>\n\
</li>\n\
</ul>\n\
</div><!-- contents -->\n\
</div><!-- doc-content -->\n\
          <div class=\"footer-block\"><a href=\"../html/ac.cmtdialog.htm\" class=\"comments-anchor\" target=\"_blank\"><span class=\"comments-link\">Please send us your comment about this page</span></a></div></div>\n\
   </div></div></body>\n\
</html>\n\
";