var topic = "<!-- saved from url=(0024)http://docs.autodesk.com -->\n\
<html>\n\
   <head><script src=\"../scripts/yepnope.1.5.4-min.js\" type=\"text/javascript\"></script><script src=\"../scripts/lib/jquery-1.11.1.min.js\" type=\"text/javascript\"></script><meta http-equiv=\"Content-Type\" content=\"text/html; charset=UTF-8\"><meta name=\"product\" content=\"MAYAUL\"><meta name=\"release\" content=\"2018\"><meta name=\"book\" content=\"Developer\"><meta name=\"created\" content=\"2017-06-22\"><meta name=\"topicid\" content=\"GUID-02DEF634-1E7B-48C6-8ACD-2C934CA97887\"><meta name=\"topic-type\" content=\"concept\">\n\
      <title>Class Members</title>\n\
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
    cpp_ref_adsk_ref_toc.initNavTree(\'functions_w.html\', tocPrefix);\n\
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
            <h1>Class Members</h1>\n\
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
      <li class=\"current\"><a href=\"#!/url=./cpp_ref/functions.html\"><span>Class&#160;Members</span></a></li>\n\
    </ul>\n\
  </div>\n\
  <div id=\"navrow3\" class=\"tabs2\">\n\
    <ul class=\"tablist\">\n\
      <li class=\"current\"><a href=\"#!/url=./cpp_ref/functions.html\"><span>All</span></a></li>\n\
      <li><a href=\"#!/url=./cpp_ref/functions_func.html\"><span>Functions</span></a></li>\n\
      <li><a href=\"#!/url=./cpp_ref/functions_vars.html\"><span>Variables</span></a></li>\n\
      <li><a href=\"#!/url=./cpp_ref/functions_type.html\"><span>Typedefs</span></a></li>\n\
      <li><a href=\"#!/url=./cpp_ref/functions_enum.html\"><span>Enumerations</span></a></li>\n\
      <li><a href=\"#!/url=./cpp_ref/functions_eval.html\"><span>Enumerator</span></a></li>\n\
      <li><a href=\"#!/url=./cpp_ref/functions_rela.html\"><span>Related&#160;Functions</span></a></li>\n\
    </ul>\n\
  </div>\n\
  <div id=\"navrow4\" class=\"tabs3\">\n\
    <ul class=\"tablist\">\n\
      <li><a href=\"#!/url=./cpp_ref/functions.html#index__\"><span>_</span></a></li>\n\
      <li><a href=\"#!/url=./cpp_ref/functions_a.html#index_a\"><span>a</span></a></li>\n\
      <li><a href=\"#!/url=./cpp_ref/functions_b.html#index_b\"><span>b</span></a></li>\n\
      <li><a href=\"#!/url=./cpp_ref/functions_c.html#index_c\"><span>c</span></a></li>\n\
      <li><a href=\"#!/url=./cpp_ref/functions_d.html#index_d\"><span>d</span></a></li>\n\
      <li><a href=\"#!/url=./cpp_ref/functions_e.html#index_e\"><span>e</span></a></li>\n\
      <li><a href=\"#!/url=./cpp_ref/functions_f.html#index_f\"><span>f</span></a></li>\n\
      <li><a href=\"#!/url=./cpp_ref/functions_g.html#index_g\"><span>g</span></a></li>\n\
      <li><a href=\"#!/url=./cpp_ref/functions_h.html#index_h\"><span>h</span></a></li>\n\
      <li><a href=\"#!/url=./cpp_ref/functions_i.html#index_i\"><span>i</span></a></li>\n\
      <li><a href=\"#!/url=./cpp_ref/functions_j.html#index_j\"><span>j</span></a></li>\n\
      <li><a href=\"#!/url=./cpp_ref/functions_k.html#index_k\"><span>k</span></a></li>\n\
      <li><a href=\"#!/url=./cpp_ref/functions_l.html#index_l\"><span>l</span></a></li>\n\
      <li><a href=\"#!/url=./cpp_ref/functions_m.html#index_m\"><span>m</span></a></li>\n\
      <li><a href=\"#!/url=./cpp_ref/functions_n.html#index_n\"><span>n</span></a></li>\n\
      <li><a href=\"#!/url=./cpp_ref/functions_o.html#index_o\"><span>o</span></a></li>\n\
      <li><a href=\"#!/url=./cpp_ref/functions_p.html#index_p\"><span>p</span></a></li>\n\
      <li><a href=\"#!/url=./cpp_ref/functions_r.html#index_r\"><span>r</span></a></li>\n\
      <li><a href=\"#!/url=./cpp_ref/functions_s.html#index_s\"><span>s</span></a></li>\n\
      <li><a href=\"#!/url=./cpp_ref/functions_t.html#index_t\"><span>t</span></a></li>\n\
      <li><a href=\"#!/url=./cpp_ref/functions_u.html#index_u\"><span>u</span></a></li>\n\
      <li><a href=\"#!/url=./cpp_ref/functions_v.html#index_v\"><span>v</span></a></li>\n\
      <li class=\"current\"><a href=\"#!/url=./cpp_ref/functions_w.html#index_w\"><span>w</span></a></li>\n\
      <li><a href=\"#!/url=./cpp_ref/functions_x.html#index_x\"><span>x</span></a></li>\n\
      <li><a href=\"#!/url=./cpp_ref/functions_y.html#index_y\"><span>y</span></a></li>\n\
      <li><a href=\"#!/url=./cpp_ref/functions_z.html#index_z\"><span>z</span></a></li>\n\
      <li><a href=\"#!/url=./cpp_ref/functions_~.html#index_~\"><span>~</span></a></li>\n\
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
<div class=\"textblock\">Here is a list of all documented class members with links to the class documentation for each member:</div>\n\
\n\
<h3><a class=\"anchor\" id=\"index_w\"></a>- w -</h3><ul>\n\
<li>w\n\
: <a class=\"el\" translate=\"no\" href=\"#!/url=./cpp_ref/class_m_float_point.html#a56eca241e2896b9f57a79589e76fd24b\">MFloatPoint</a>\n\
, <a class=\"el\" translate=\"no\" href=\"#!/url=./cpp_ref/class_m_point.html#afb3248bab1c7ee0ad97e9d4c275b4c67\">MPoint</a>\n\
, <a class=\"el\" translate=\"no\" href=\"#!/url=./cpp_ref/class_m_quaternion.html#afb3248bab1c7ee0ad97e9d4c275b4c67\">MQuaternion</a>\n\
</li>\n\
<li>wantStereoGLBuffer()\n\
: <a class=\"el\" translate=\"no\" href=\"#!/url=./cpp_ref/class_m_px3d_model_view.html#ae5600570ef8e39bf3a70373b2634dab0\">MPx3dModelView</a>\n\
</li>\n\
<li>wantSubSceneConsolidation()\n\
: <a class=\"el\" translate=\"no\" href=\"#!/url=./cpp_ref/class_m_h_w_render_1_1_m_render_item.html#a627aca1fe5775cca0f2f816c84794e0a\">MRenderItem</a>\n\
</li>\n\
<li>wantUserSelection()\n\
: <a class=\"el\" translate=\"no\" href=\"#!/url=./cpp_ref/class_m_h_w_render_1_1_m_px_draw_override.html#a04c3f281942eb55197bf023faf5654b9\">MPxDrawOverride</a>\n\
</li>\n\
<li>wasBreakdown()\n\
: <a class=\"el\" translate=\"no\" href=\"#!/url=./cpp_ref/class_m_fn_keyframe_delta_breakdown.html#a22438ebe73e0b52599020cdfa792b905\">MFnKeyframeDeltaBreakdown</a>\n\
</li>\n\
<li>wasWeighted()\n\
: <a class=\"el\" translate=\"no\" href=\"#!/url=./cpp_ref/class_m_fn_keyframe_delta_weighted.html#aed0ff5360ce246cbbdfc50dbd8834827\">MFnKeyframeDeltaWeighted</a>\n\
</li>\n\
<li>weight()\n\
: <a class=\"el\" translate=\"no\" href=\"#!/url=./cpp_ref/class_m_fn_blend_shape_deformer.html#a105829d045f0bcf9b902c0f488ce8bc3\">MFnBlendShapeDeformer</a>\n\
, <a class=\"el\" translate=\"no\" href=\"#!/url=./cpp_ref/class_m_fn_component.html#a1ad693c92af89f76873cab0e325afea5\">MFnComponent</a>\n\
, <a class=\"el\" translate=\"no\" href=\"#!/url=./cpp_ref/class_m_fn_ik_handle.html#a92283f7d08a8e0eab72618a3f4ccce6b\">MFnIkHandle</a>\n\
, <a class=\"el\" translate=\"no\" href=\"#!/url=./cpp_ref/class_m_it_geometry.html#a149288467ec31a97bd675a567443cb2c\">MItGeometry</a>\n\
, <a class=\"el\" translate=\"no\" href=\"#!/url=./cpp_ref/class_m_px_blend_shape.html#a9f80413b46a39d2df8fbb3bc215f400b\">MPxBlendShape</a>\n\
</li>\n\
<li>weightAttribute()\n\
: <a class=\"el\" translate=\"no\" href=\"#!/url=./cpp_ref/class_m_px_constraint.html#a8ca3b699c63f758b049d6cbde2499e64\">MPxConstraint</a>\n\
</li>\n\
<li>weightedTangents()\n\
: <a class=\"el\" translate=\"no\" href=\"#!/url=./cpp_ref/class_m_anim_control.html#afb407e909ca8dfedfd3cc03dfba59d07\">MAnimControl</a>\n\
</li>\n\
<li>weightedTransformUsing()\n\
: <a class=\"el\" translate=\"no\" href=\"#!/url=./cpp_ref/class_m_px_surface_shape.html#a66ccd127d36b5dc896459eddff2b7587\">MPxSurfaceShape</a>\n\
</li>\n\
<li>weightedTweakUsing()\n\
: <a class=\"el\" translate=\"no\" href=\"#!/url=./cpp_ref/class_m_px_surface_shape.html#aa704affe596b61074b4eb2bf087e8092\">MPxSurfaceShape</a>\n\
</li>\n\
<li>weightIndexList()\n\
: <a class=\"el\" translate=\"no\" href=\"#!/url=./cpp_ref/class_m_fn_blend_shape_deformer.html#a0f672f612dac576151845c34f87f64ab\">MFnBlendShapeDeformer</a>\n\
</li>\n\
<li>weightList\n\
: <a class=\"el\" translate=\"no\" href=\"#!/url=./cpp_ref/class_m_px_deformer_node.html#a35a26e066faae03152b67f2067b1d53f\">MPxDeformerNode</a>\n\
, <a class=\"el\" translate=\"no\" href=\"#!/url=./cpp_ref/class_m_px_skin_cluster.html#a35a26e066faae03152b67f2067b1d53f\">MPxSkinCluster</a>\n\
</li>\n\
<li>weightPlugStrings()\n\
: <a class=\"el\" translate=\"no\" href=\"#!/url=./cpp_ref/class_m_fn_weight_geometry_filter.html#a6f96d7a8923a5a1af41ed906509bcf42\">MFnWeightGeometryFilter</a>\n\
</li>\n\
<li>weights\n\
: <a class=\"el\" translate=\"no\" href=\"#!/url=./cpp_ref/class_m_px_deformer_node.html#ae4200be6c5a30e8d817e6a3b51d20402\">MPxDeformerNode</a>\n\
, <a class=\"el\" translate=\"no\" href=\"#!/url=./cpp_ref/class_m_px_skin_cluster.html#ae4200be6c5a30e8d817e6a3b51d20402\">MPxSkinCluster</a>\n\
</li>\n\
<li>weightsLocked()\n\
: <a class=\"el\" translate=\"no\" href=\"#!/url=./cpp_ref/class_m_fn_anim_curve.html#a9687680a0340102d75027852143519a8\">MFnAnimCurve</a>\n\
</li>\n\
<li>weightValue()\n\
: <a class=\"el\" translate=\"no\" href=\"#!/url=./cpp_ref/class_m_px_deformer_node.html#a57ea39dc62f04da1e5600cf6f0753f91\">MPxDeformerNode</a>\n\
, <a class=\"el\" translate=\"no\" href=\"#!/url=./cpp_ref/class_m_px_skin_cluster.html#a57ea39dc62f04da1e5600cf6f0753f91\">MPxSkinCluster</a>\n\
</li>\n\
<li>whiteness()\n\
: <a class=\"el\" translate=\"no\" href=\"#!/url=./cpp_ref/class_m_fn_phong_e_shader.html#a0b0c17bd2e5f4dd782ade315c6f6ab51\">MFnPhongEShader</a>\n\
</li>\n\
<li>widget()\n\
: <a class=\"el\" translate=\"no\" href=\"#!/url=./cpp_ref/class_m3d_view.html#a8f30ecdb455af5be1558fcb197cce2d2\">M3dView</a>\n\
</li>\n\
<li>width()\n\
: <a class=\"el\" translate=\"no\" href=\"#!/url=./cpp_ref/class_m_bounding_box.html#a6cddcbf72c80144aa2e6501abb150c30\">MBoundingBox</a>\n\
, <a class=\"el\" translate=\"no\" href=\"#!/url=./cpp_ref/class_m_common_render_settings_data.html#aca34d28e3d8bcbcadb8edb4e3af24f8c\">MCommonRenderSettingsData</a>\n\
, <a class=\"el\" translate=\"no\" href=\"#!/url=./cpp_ref/class_m_h_w_render_1_1_m_render_target_description.html#a7b736ec9a05be5c498760d35a0406ed3\">MRenderTargetDescription</a>\n\
, <a class=\"el\" translate=\"no\" href=\"#!/url=./cpp_ref/class_m_image_file_info.html#a62c14b6802ed8b00b884d4fd6e6c6c4f\">MImageFileInfo</a>\n\
, <a class=\"el\" translate=\"no\" href=\"#!/url=./cpp_ref/class_m_px_image_plane.html#ae51f998aaf3f7f6fc7916a7e971ea4a6\">MPxImagePlane</a>\n\
, <a class=\"el\" translate=\"no\" href=\"#!/url=./cpp_ref/class_m_px_renderer_1_1_refresh_params.html#aca34d28e3d8bcbcadb8edb4e3af24f8c\">MPxRenderer::RefreshParams</a>\n\
, <a class=\"el\" translate=\"no\" href=\"#!/url=./cpp_ref/class_m_rendering_info.html#a7b736ec9a05be5c498760d35a0406ed3\">MRenderingInfo</a>\n\
, <a class=\"el\" translate=\"no\" href=\"#!/url=./cpp_ref/class_m_render_target_legacy.html#a8486e338fcda95e70c71ad373dfc9555\">MRenderTargetLegacy</a>\n\
</li>\n\
<li>willTraverseUnderWorld()\n\
: <a class=\"el\" translate=\"no\" href=\"#!/url=./cpp_ref/class_m_it_dag.html#a0cc1893141a0ac9d23e7837706127a58\">MItDag</a>\n\
</li>\n\
<li>window()\n\
: <a class=\"el\" translate=\"no\" href=\"#!/url=./cpp_ref/class_m3d_view.html#a5e2ce0b96a5610a094a961a00e63f7f7\">M3dView</a>\n\
</li>\n\
<li>wire()\n\
: <a class=\"el\" translate=\"no\" href=\"#!/url=./cpp_ref/class_m_fn_wire_deformer.html#afab7f90df2fd6241b3c990949e1ea18b\">MFnWireDeformer</a>\n\
</li>\n\
<li>wireDropOffDistance()\n\
: <a class=\"el\" translate=\"no\" href=\"#!/url=./cpp_ref/class_m_fn_wire_deformer.html#a66f4216961f6495b81f150c992ae230c\">MFnWireDeformer</a>\n\
</li>\n\
<li>wireframeColor()\n\
: <a class=\"el\" translate=\"no\" href=\"#!/url=./cpp_ref/class_m_h_w_render_1_1_m_geometry_utilities.html#a6221bc7407b14246b14f79a751496276\">MGeometryUtilities</a>\n\
</li>\n\
<li>wireframeOnlyInShadedMode()\n\
: <a class=\"el\" translate=\"no\" href=\"#!/url=./cpp_ref/class_m3d_view.html#a188d3b58624a398784f595b0059843af\">M3dView</a>\n\
</li>\n\
<li>wireframeOnShaded()\n\
: <a class=\"el\" translate=\"no\" href=\"#!/url=./cpp_ref/class_m3d_view.html#a60237ce77a011fbec5a49e12888f19b0\">M3dView</a>\n\
</li>\n\
<li>wireOnShadedMode()\n\
: <a class=\"el\" translate=\"no\" href=\"#!/url=./cpp_ref/class_m_h_w_render_1_1_m_frame_context.html#a00b9329ceb9cd9a48aa82fd3ab28fcda\">MFrameContext</a>\n\
</li>\n\
<li>WireOnShadedMode\n\
: <a class=\"el\" translate=\"no\" href=\"#!/url=./cpp_ref/class_m_h_w_render_1_1_m_frame_context.html#a412d9516b93bcc54229ad6b895baa1ae\">MFrameContext</a>\n\
</li>\n\
<li>wireScale()\n\
: <a class=\"el\" translate=\"no\" href=\"#!/url=./cpp_ref/class_m_fn_wire_deformer.html#a0b11f87086e75629504a5663bba6b221\">MFnWireDeformer</a>\n\
</li>\n\
<li>worldConstraintPoint()\n\
: <a class=\"el\" translate=\"no\" href=\"#!/url=./cpp_ref/class_m_px_constraint.html#a45de359e76132461563e1e39ba21190b\">MPxConstraint</a>\n\
</li>\n\
<li>worldInverseMatrix\n\
: <a class=\"el\" translate=\"no\" href=\"#!/url=./cpp_ref/class_m_px_locator_node.html#a5750667fd6aab34b3019c86af66e56c1\">MPxLocatorNode</a>\n\
, <a class=\"el\" translate=\"no\" href=\"#!/url=./cpp_ref/class_m_px_surface_shape.html#a5750667fd6aab34b3019c86af66e56c1\">MPxSurfaceShape</a>\n\
, <a class=\"el\" translate=\"no\" href=\"#!/url=./cpp_ref/class_m_px_transform.html#a5750667fd6aab34b3019c86af66e56c1\">MPxTransform</a>\n\
</li>\n\
<li>worldMatrix\n\
: <a class=\"el\" translate=\"no\" href=\"#!/url=./cpp_ref/class_m_px_locator_node.html#aae8765de146707c69dc4c25709b15456\">MPxLocatorNode</a>\n\
, <a class=\"el\" translate=\"no\" href=\"#!/url=./cpp_ref/class_m_px_surface_shape.html#aae8765de146707c69dc4c25709b15456\">MPxSurfaceShape</a>\n\
, <a class=\"el\" translate=\"no\" href=\"#!/url=./cpp_ref/class_m_px_transform.html#aae8765de146707c69dc4c25709b15456\">MPxTransform</a>\n\
</li>\n\
<li>worldPosition\n\
: <a class=\"el\" translate=\"no\" href=\"#!/url=./cpp_ref/class_m_px_locator_node.html#a9d0585534cdf9cb84315d2e672bf1cfb\">MPxLocatorNode</a>\n\
</li>\n\
<li>worldPositionX\n\
: <a class=\"el\" translate=\"no\" href=\"#!/url=./cpp_ref/class_m_px_locator_node.html#a299eecdca817bcdfc95367e23bb414bb\">MPxLocatorNode</a>\n\
</li>\n\
<li>worldPositionY\n\
: <a class=\"el\" translate=\"no\" href=\"#!/url=./cpp_ref/class_m_px_locator_node.html#a0f3ac14172f14415e66c1e8cb8f2a940\">MPxLocatorNode</a>\n\
</li>\n\
<li>worldPositionZ\n\
: <a class=\"el\" translate=\"no\" href=\"#!/url=./cpp_ref/class_m_px_locator_node.html#a6110d501e21e0a95b042ddca819fcf83\">MPxLocatorNode</a>\n\
</li>\n\
<li>worldShapeOutAttr()\n\
: <a class=\"el\" translate=\"no\" href=\"#!/url=./cpp_ref/class_m_px_surface_shape.html#abbae36badd1c32ac41370f6d4a47d374\">MPxSurfaceShape</a>\n\
</li>\n\
<li>worldToEyeMatrix\n\
: <a class=\"el\" translate=\"no\" href=\"#!/url=./cpp_ref/class_m_render_data.html#ac016c599b4f999770c062a938591a514\">MRenderData</a>\n\
</li>\n\
<li>worldToScreen()\n\
: <a class=\"el\" translate=\"no\" href=\"#!/url=./cpp_ref/class_m_render_data.html#a3bd0ef731d8219ea96fa3e5054776d2d\">MRenderData</a>\n\
</li>\n\
<li>worldToView()\n\
: <a class=\"el\" translate=\"no\" href=\"#!/url=./cpp_ref/class_m3d_view.html#a187f0712a1a973e26c87fc6dba9acede\">M3dView</a>\n\
, <a class=\"el\" translate=\"no\" href=\"#!/url=./cpp_ref/class_m_px3d_model_view.html#a187f0712a1a973e26c87fc6dba9acede\">MPx3dModelView</a>\n\
</li>\n\
<li>worldToViewport()\n\
: <a class=\"el\" translate=\"no\" href=\"#!/url=./cpp_ref/class_m_h_w_render_1_1_m_frame_context.html#af45610f0e3a84029c4dfa9a1a0790aea\">MFrameContext</a>\n\
</li>\n\
<li>worldToZbuffer()\n\
: <a class=\"el\" translate=\"no\" href=\"#!/url=./cpp_ref/class_m_render_shadow_data.html#af7197a88d9d4c7a9f02ed240b2d67592\">MRenderShadowData</a>\n\
</li>\n\
<li>worldUpMatrix\n\
: <a class=\"el\" translate=\"no\" href=\"#!/url=./cpp_ref/class_m_px_motion_path_node.html#ab223785f7a1580c4404340c4d159a0ae\">MPxMotionPathNode</a>\n\
</li>\n\
<li>worldUpMatrixAttribute()\n\
: <a class=\"el\" translate=\"no\" href=\"#!/url=./cpp_ref/class_m_px_constraint_command.html#a7f753a4ff92e18c5c1c9b4249decf8e8\">MPxConstraintCommand</a>\n\
</li>\n\
<li>worldUpType\n\
: <a class=\"el\" translate=\"no\" href=\"#!/url=./cpp_ref/class_m_px_motion_path_node.html#a90a7f213c73ac9be13c83905c1c05335\">MPxMotionPathNode</a>\n\
</li>\n\
<li>worldUpTypeAttribute()\n\
: <a class=\"el\" translate=\"no\" href=\"#!/url=./cpp_ref/class_m_px_constraint_command.html#a8b41271f087c1c1fdcafe8faf00c3fb9\">MPxConstraintCommand</a>\n\
</li>\n\
<li>worldUpVector()\n\
: <a class=\"el\" translate=\"no\" href=\"#!/url=./cpp_ref/class_m_px_constraint.html#aeb1c6f49d099d173588958d32c022796\">MPxConstraint</a>\n\
, <a class=\"el\" translate=\"no\" href=\"#!/url=./cpp_ref/class_m_px_motion_path_node.html#a4308fa215676aa25b159f6a77e1993c0\">MPxMotionPathNode</a>\n\
</li>\n\
<li>worldUpVectorAttribute()\n\
: <a class=\"el\" translate=\"no\" href=\"#!/url=./cpp_ref/class_m_px_constraint_command.html#aa7f9feda6e0a179118db37c03f4500ed\">MPxConstraintCommand</a>\n\
</li>\n\
<li>worldUpVectorValue\n\
: <a class=\"el\" translate=\"no\" href=\"#!/url=./cpp_ref/class_m_px_motion_path_node.html#ae57445616b7f0578a5c579efb53efa08\">MPxMotionPathNode</a>\n\
</li>\n\
<li>wraparoundFractionalValue()\n\
: <a class=\"el\" translate=\"no\" href=\"#!/url=./cpp_ref/class_m_px_motion_path_node.html#a3d3af809b2aa80c4fbdc6dd6cdd0e643\">MPxMotionPathNode</a>\n\
</li>\n\
<li>writableTargets()\n\
: <a class=\"el\" translate=\"no\" href=\"#!/url=./cpp_ref/class_m_h_w_render_1_1_m_render_operation.html#a79c58e8264a55a4e519b3d80e68583ea\">MRenderOperation</a>\n\
</li>\n\
<li>write()\n\
: <a class=\"el\" translate=\"no\" href=\"#!/url=./cpp_ref/classadsk_1_1_data_1_1_accessor.html#a4d8ef07caad1f76d030904fd5e0b26c3\">Accessor</a>\n\
, <a class=\"el\" translate=\"no\" href=\"#!/url=./cpp_ref/classadsk_1_1_data_1_1_associations_serializer.html#a62b54f26331d85ff2f6142543ba3a13d\">AssociationsSerializer</a>\n\
, <a class=\"el\" translate=\"no\" href=\"#!/url=./cpp_ref/classadsk_1_1_data_1_1_channel_serializer.html#a023b8d3245f6acbdda551ca9ddbc8022\">ChannelSerializer</a>\n\
, <a class=\"el\" translate=\"no\" href=\"#!/url=./cpp_ref/classadsk_1_1_data_1_1_stream_serializer.html#a0ffb777d548869421e676f0f86ac5996\">StreamSerializer</a>\n\
, <a class=\"el\" translate=\"no\" href=\"#!/url=./cpp_ref/classadsk_1_1_data_1_1_structure_serializer.html#a31352a205f1b3acd5139be287c9ad59d\">StructureSerializer</a>\n\
, <a class=\"el\" translate=\"no\" href=\"#!/url=./cpp_ref/classadsk_1_1_data_1_1_structure_serializer_debug.html#a7d2179c50f350d241d052f739bb1cf4d\">StructureSerializerDebug</a>\n\
</li>\n\
<li>Writeable\n\
: <a class=\"el\" translate=\"no\" href=\"#!/url=./cpp_ref/class_m_px_hw_shader_node.html#a7651e76afd0dc74cf00b0d704373c27c\">MPxHwShaderNode</a>\n\
</li>\n\
<li>writeASCII()\n\
: <a class=\"el\" translate=\"no\" href=\"#!/url=./cpp_ref/class_m_px_data.html#a710ce8f845213b90126e20c9813533b5\">MPxData</a>\n\
</li>\n\
<li>writeBinary()\n\
: <a class=\"el\" translate=\"no\" href=\"#!/url=./cpp_ref/class_m_px_data.html#a0741811ec0ab4fc1baa5b1b3b1767ed6\">MPxData</a>\n\
</li>\n\
<li>writeChannelName()\n\
: <a class=\"el\" translate=\"no\" href=\"#!/url=./cpp_ref/class_m_px_cache_format.html#a62bc617b8d7c50d0574fc3ca6eabd5f7\">MPxCacheFormat</a>\n\
</li>\n\
<li>writeChar()\n\
: <a class=\"el\" translate=\"no\" href=\"#!/url=./cpp_ref/class_m_stream_utils.html#add5f279cc6c8ee5b1f18162cc47db5df\">MStreamUtils</a>\n\
</li>\n\
<li>writeCharBuffer()\n\
: <a class=\"el\" translate=\"no\" href=\"#!/url=./cpp_ref/class_m_stream_utils.html#a7f1dd15092f97a2502678b87b241815d\">MStreamUtils</a>\n\
</li>\n\
<li>writeColorBuffer()\n\
: <a class=\"el\" translate=\"no\" href=\"#!/url=./cpp_ref/class_m3d_view.html#a1a329cac7ac49083ab198cc78c38fa1f\">M3dView</a>\n\
, <a class=\"el\" translate=\"no\" href=\"#!/url=./cpp_ref/class_m_render_target_legacy.html#af6a698f3a33421cea5bd8ecbad97f102\">MRenderTargetLegacy</a>\n\
</li>\n\
<li>writeDescription()\n\
: <a class=\"el\" translate=\"no\" href=\"#!/url=./cpp_ref/class_m_px_cache_format.html#a0395b13d05074767720460546a6e8f13\">MPxCacheFormat</a>\n\
</li>\n\
<li>writeDouble()\n\
: <a class=\"el\" translate=\"no\" href=\"#!/url=./cpp_ref/class_m_stream_utils.html#a2ba07e47541f03c58f2c3602124e8d9e\">MStreamUtils</a>\n\
</li>\n\
<li>writeDoubleArray()\n\
: <a class=\"el\" translate=\"no\" href=\"#!/url=./cpp_ref/class_m_px_cache_format.html#aed60b50149ca29c73c9bd3672aa67413\">MPxCacheFormat</a>\n\
</li>\n\
<li>writeDoubleVectorArray()\n\
: <a class=\"el\" translate=\"no\" href=\"#!/url=./cpp_ref/class_m_px_cache_format.html#a9646fb288cfac42a9a17ef28923499a9\">MPxCacheFormat</a>\n\
</li>\n\
<li>writeEffectSourceToFile()\n\
: <a class=\"el\" translate=\"no\" href=\"#!/url=./cpp_ref/class_m_h_w_render_1_1_m_shader_instance.html#afcbf6a45dfeef2b89b6017448c1309ac\">MShaderInstance</a>\n\
</li>\n\
<li>writeFloat()\n\
: <a class=\"el\" translate=\"no\" href=\"#!/url=./cpp_ref/class_m_stream_utils.html#a96863c5e3f39303a6154312bd192f96f\">MStreamUtils</a>\n\
</li>\n\
<li>writeFloatArray()\n\
: <a class=\"el\" translate=\"no\" href=\"#!/url=./cpp_ref/class_m_px_cache_format.html#a1f2e81739795d492726cccac54f38954\">MPxCacheFormat</a>\n\
</li>\n\
<li>writeFloatVectorArray()\n\
: <a class=\"el\" translate=\"no\" href=\"#!/url=./cpp_ref/class_m_px_cache_format.html#a60b04a47daa021b70186313cf183a20e\">MPxCacheFormat</a>\n\
</li>\n\
<li>writeHeader()\n\
: <a class=\"el\" translate=\"no\" href=\"#!/url=./cpp_ref/class_m_px_cache_format.html#a6bf79e3b5e3db35af397565f063d848c\">MPxCacheFormat</a>\n\
</li>\n\
<li>writeInt()\n\
: <a class=\"el\" translate=\"no\" href=\"#!/url=./cpp_ref/class_m_stream_utils.html#aaf500a5027242e9adbd00a1929726d54\">MStreamUtils</a>\n\
</li>\n\
<li>writeInt32()\n\
: <a class=\"el\" translate=\"no\" href=\"#!/url=./cpp_ref/class_m_px_cache_format.html#ade47e440802f9726318677624aabb5a3\">MPxCacheFormat</a>\n\
</li>\n\
<li>writeIntArray()\n\
: <a class=\"el\" translate=\"no\" href=\"#!/url=./cpp_ref/class_m_px_cache_format.html#a79aae6fa990b994de6e4fc54366be11c\">MPxCacheFormat</a>\n\
</li>\n\
<li>writePostConnectAttrsBlock()\n\
: <a class=\"el\" translate=\"no\" href=\"#!/url=./cpp_ref/class_m_px_maya_ascii_filter.html#ab7d33836f3aa80cde431b5e57b259a80\">MPxMayaAsciiFilter</a>\n\
</li>\n\
<li>writePostCreateNodesBlock()\n\
: <a class=\"el\" translate=\"no\" href=\"#!/url=./cpp_ref/class_m_px_maya_ascii_filter.html#a4334e914e62a2009f4b71f6f4e497f43\">MPxMayaAsciiFilter</a>\n\
</li>\n\
<li>writePostHeader()\n\
: <a class=\"el\" translate=\"no\" href=\"#!/url=./cpp_ref/class_m_px_maya_ascii_filter.html#ad549e96d9b1da6dca7e3c928e034fffd\">MPxMayaAsciiFilter</a>\n\
</li>\n\
<li>writePostRequires()\n\
: <a class=\"el\" translate=\"no\" href=\"#!/url=./cpp_ref/class_m_px_maya_ascii_filter.html#a45c3754d674f0dcc164a5165f06ff383\">MPxMayaAsciiFilter</a>\n\
</li>\n\
<li>writePreConnectAttrsBlock()\n\
: <a class=\"el\" translate=\"no\" href=\"#!/url=./cpp_ref/class_m_px_maya_ascii_filter.html#ae8b31ce6420a1a2c34a5ca4af9ca9304\">MPxMayaAsciiFilter</a>\n\
</li>\n\
<li>writePreCreateNodesBlock()\n\
: <a class=\"el\" translate=\"no\" href=\"#!/url=./cpp_ref/class_m_px_maya_ascii_filter.html#a2d8b3977b055767dc491a11ea474eb55\">MPxMayaAsciiFilter</a>\n\
</li>\n\
<li>writePreTrailer()\n\
: <a class=\"el\" translate=\"no\" href=\"#!/url=./cpp_ref/class_m_px_maya_ascii_filter.html#a7adf0e8d621ea5f1b493e4aa641a02e7\">MPxMayaAsciiFilter</a>\n\
</li>\n\
<li>writer()\n\
: <a class=\"el\" translate=\"no\" href=\"#!/url=./cpp_ref/class_m_px_file_translator.html#a7d2e676fd6823e199ba4fe1da95098ac\">MPxFileTranslator</a>\n\
, <a class=\"el\" translate=\"no\" href=\"#!/url=./cpp_ref/class_m_px_maya_ascii_filter.html#a7d2e676fd6823e199ba4fe1da95098ac\">MPxMayaAsciiFilter</a>\n\
</li>\n\
<li>writesConnectAttr()\n\
: <a class=\"el\" translate=\"no\" href=\"#!/url=./cpp_ref/class_m_px_maya_ascii_filter.html#a952ad009cb08ba14af1e200419926169\">MPxMayaAsciiFilter</a>\n\
</li>\n\
<li>writesCreateNode()\n\
: <a class=\"el\" translate=\"no\" href=\"#!/url=./cpp_ref/class_m_px_maya_ascii_filter.html#ac007e2373765cb669036564e15f1c6de\">MPxMayaAsciiFilter</a>\n\
</li>\n\
<li>writesDisconnectAttr()\n\
: <a class=\"el\" translate=\"no\" href=\"#!/url=./cpp_ref/class_m_px_maya_ascii_filter.html#a4aea73225b25c77eaa6bfaf9e740c7a6\">MPxMayaAsciiFilter</a>\n\
</li>\n\
<li>writesFileReference()\n\
: <a class=\"el\" translate=\"no\" href=\"#!/url=./cpp_ref/class_m_px_maya_ascii_filter.html#a9cbb167ec1ea4ee9d84a97f6ce9a80ca\">MPxMayaAsciiFilter</a>\n\
</li>\n\
<li>writesMetadata()\n\
: <a class=\"el\" translate=\"no\" href=\"#!/url=./cpp_ref/class_m_px_maya_ascii_filter.html#a3c09ac08533e47d2c26c9e0676789bc4\">MPxMayaAsciiFilter</a>\n\
</li>\n\
<li>writesParentNode()\n\
: <a class=\"el\" translate=\"no\" href=\"#!/url=./cpp_ref/class_m_px_maya_ascii_filter.html#ab2b964b073b7040c4b5f380ec5605cf8\">MPxMayaAsciiFilter</a>\n\
</li>\n\
<li>writesRequirements()\n\
: <a class=\"el\" translate=\"no\" href=\"#!/url=./cpp_ref/class_m_px_maya_ascii_filter.html#a076c2050498f7461ca43535a3ee18e42\">MPxMayaAsciiFilter</a>\n\
</li>\n\
<li>writesSelectNode()\n\
: <a class=\"el\" translate=\"no\" href=\"#!/url=./cpp_ref/class_m_px_maya_ascii_filter.html#abdb297dd95faaa124d143e7d4090cc6a\">MPxMayaAsciiFilter</a>\n\
</li>\n\
<li>writesSetAttr()\n\
: <a class=\"el\" translate=\"no\" href=\"#!/url=./cpp_ref/class_m_px_maya_ascii_filter.html#a1f8a657c77662c4c9504f83baff55983\">MPxMayaAsciiFilter</a>\n\
</li>\n\
<li>writeTime()\n\
: <a class=\"el\" translate=\"no\" href=\"#!/url=./cpp_ref/class_m_px_cache_format.html#a0327b0a99e69fb910ad80834d40d40b3\">MPxCacheFormat</a>\n\
</li>\n\
<li>writeToFile()\n\
: <a class=\"el\" translate=\"no\" href=\"#!/url=./cpp_ref/class_m_image.html#a99baff74083ba3886142bcf267fa46e4\">MImage</a>\n\
</li>\n\
<li>writeToFileWithDepth()\n\
: <a class=\"el\" translate=\"no\" href=\"#!/url=./cpp_ref/class_m_image.html#aa7b7a342ea04844cd3a21eac74c141cb\">MImage</a>\n\
</li>\n\
</ul>\n\
</div><!-- contents -->\n\
</div><!-- doc-content -->\n\
          <div class=\"footer-block\"><a href=\"../html/ac.cmtdialog.htm\" class=\"comments-anchor\" target=\"_blank\"><span class=\"comments-link\">Please send us your comment about this page</span></a></div></div>\n\
   </div></div></body>\n\
</html>\n\
";