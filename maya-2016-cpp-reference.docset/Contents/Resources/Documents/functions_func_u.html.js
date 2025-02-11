var topic = "<!-- saved from url=(0024)http://docs.autodesk.com -->\n\
<html>\n\
   <head><script src=\"../scripts/yepnope.1.5.4-min.js\" type=\"text/javascript\"></script><script src=\"../scripts/lib/jquery-1.11.1.min.js\" type=\"text/javascript\"></script><meta http-equiv=\"Content-Type\" content=\"text/html; charset=UTF-8\"><meta name=\"product\" content=\"MAYAUL\"><meta name=\"release\" content=\"2016\"><meta name=\"book\" content=\"Developer\"><meta name=\"created\" content=\"2015-10-14\"><meta name=\"topicid\" content=\"GUID-02DEF634-1E7B-48C6-8ACD-2C934CA97887\"><meta name=\"topic-type\" content=\"concept\">\n\
      <title>Class Members - Functions</title>\n\
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
    cpp_ref_adsk_ref_toc.initNavTree(\'functions_func_u.html\', tocPrefix);\n\
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
      <div><div class=\"related-links\">\n\
         <div class=\"head\">\n\
            <h1>Class Members - Functions</h1>\n\
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
      <li><a href=\"#!/url=./cpp_ref/functions.html\"><span>All</span></a></li>\n\
      <li class=\"current\"><a href=\"#!/url=./cpp_ref/functions_func.html\"><span>Functions</span></a></li>\n\
      <li><a href=\"#!/url=./cpp_ref/functions_vars.html\"><span>Variables</span></a></li>\n\
      <li><a href=\"#!/url=./cpp_ref/functions_type.html\"><span>Typedefs</span></a></li>\n\
      <li><a href=\"#!/url=./cpp_ref/functions_enum.html\"><span>Enumerations</span></a></li>\n\
      <li><a href=\"#!/url=./cpp_ref/functions_eval.html\"><span>Enumerator</span></a></li>\n\
      <li><a href=\"#!/url=./cpp_ref/functions_rela.html\"><span>Related&#160;Functions</span></a></li>\n\
    </ul>\n\
  </div>\n\
  <div id=\"navrow4\" class=\"tabs3\">\n\
    <ul class=\"tablist\">\n\
      <li><a href=\"#!/url=./cpp_ref/functions_func.html#index_a\"><span>a</span></a></li>\n\
      <li><a href=\"#!/url=./cpp_ref/functions_func_b.html#index_b\"><span>b</span></a></li>\n\
      <li><a href=\"#!/url=./cpp_ref/functions_func_c.html#index_c\"><span>c</span></a></li>\n\
      <li><a href=\"#!/url=./cpp_ref/functions_func_d.html#index_d\"><span>d</span></a></li>\n\
      <li><a href=\"#!/url=./cpp_ref/functions_func_e.html#index_e\"><span>e</span></a></li>\n\
      <li><a href=\"#!/url=./cpp_ref/functions_func_f.html#index_f\"><span>f</span></a></li>\n\
      <li><a href=\"#!/url=./cpp_ref/functions_func_g.html#index_g\"><span>g</span></a></li>\n\
      <li><a href=\"#!/url=./cpp_ref/functions_func_h.html#index_h\"><span>h</span></a></li>\n\
      <li><a href=\"#!/url=./cpp_ref/functions_func_i.html#index_i\"><span>i</span></a></li>\n\
      <li><a href=\"#!/url=./cpp_ref/functions_func_j.html#index_j\"><span>j</span></a></li>\n\
      <li><a href=\"#!/url=./cpp_ref/functions_func_k.html#index_k\"><span>k</span></a></li>\n\
      <li><a href=\"#!/url=./cpp_ref/functions_func_l.html#index_l\"><span>l</span></a></li>\n\
      <li><a href=\"#!/url=./cpp_ref/functions_func_m.html#index_m\"><span>m</span></a></li>\n\
      <li><a href=\"#!/url=./cpp_ref/functions_func_n.html#index_n\"><span>n</span></a></li>\n\
      <li><a href=\"#!/url=./cpp_ref/functions_func_o.html#index_o\"><span>o</span></a></li>\n\
      <li><a href=\"#!/url=./cpp_ref/functions_func_p.html#index_p\"><span>p</span></a></li>\n\
      <li><a href=\"#!/url=./cpp_ref/functions_func_r.html#index_r\"><span>r</span></a></li>\n\
      <li><a href=\"#!/url=./cpp_ref/functions_func_s.html#index_s\"><span>s</span></a></li>\n\
      <li><a href=\"#!/url=./cpp_ref/functions_func_t.html#index_t\"><span>t</span></a></li>\n\
      <li class=\"current\"><a href=\"#!/url=./cpp_ref/functions_func_u.html#index_u\"><span>u</span></a></li>\n\
      <li><a href=\"#!/url=./cpp_ref/functions_func_v.html#index_v\"><span>v</span></a></li>\n\
      <li><a href=\"#!/url=./cpp_ref/functions_func_w.html#index_w\"><span>w</span></a></li>\n\
      <li><a href=\"#!/url=./cpp_ref/functions_func_x.html#index_x\"><span>x</span></a></li>\n\
      <li><a href=\"#!/url=./cpp_ref/functions_func_y.html#index_y\"><span>y</span></a></li>\n\
      <li><a href=\"#!/url=./cpp_ref/functions_func_z.html#index_z\"><span>z</span></a></li>\n\
      <li><a href=\"#!/url=./cpp_ref/functions_func_~.html#index_~\"><span>~</span></a></li>\n\
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
<h3><a class=\"anchor\" id=\"index_u\"></a>- u -</h3><ul>\n\
<li>uEnd()\n\
: <a class=\"el\" translate=\"no\" href=\"#!/url=./cpp_ref/class_m_fn_motion_path.html#a0234c8baca4f3b91755c7c586ebe6f26\">MFnMotionPath</a>\n\
</li>\n\
<li>UIHidden()\n\
: <a class=\"el\" translate=\"no\" href=\"#!/url=./cpp_ref/class_m_uniform_parameter.html#a29c8c0e9c80c503cabd09f7f6262123b\">MUniformParameter</a>\n\
</li>\n\
<li>uiName()\n\
: <a class=\"el\" translate=\"no\" href=\"#!/url=./cpp_ref/class_m_h_w_render_1_1_m_render_override.html#aa313aa1923be350cc23326c961c33d50\">MRenderOverride</a>\n\
, <a class=\"el\" translate=\"no\" href=\"#!/url=./cpp_ref/class_m_h_w_render_1_1_m_shader_instance.html#aa876e5b0cec80084b3b00e71023aa0e1\">MShaderInstance</a>\n\
</li>\n\
<li>UIname()\n\
: <a class=\"el\" translate=\"no\" href=\"#!/url=./cpp_ref/class_m_object_list_filter.html#a604548678d9de6e6c0ebe96563b43a3c\">MObjectListFilter</a>\n\
, <a class=\"el\" translate=\"no\" href=\"#!/url=./cpp_ref/class_m_viewport_renderer.html#a604548678d9de6e6c0ebe96563b43a3c\">MViewportRenderer</a>\n\
</li>\n\
<li>uiToInternal()\n\
: <a class=\"el\" translate=\"no\" href=\"#!/url=./cpp_ref/class_m_angle.html#ab55ddb7914cee93afb2fea1ecbe24141\">MAngle</a>\n\
, <a class=\"el\" translate=\"no\" href=\"#!/url=./cpp_ref/class_m_distance.html#ab55ddb7914cee93afb2fea1ecbe24141\">MDistance</a>\n\
</li>\n\
<li>uiUnit()\n\
: <a class=\"el\" translate=\"no\" href=\"#!/url=./cpp_ref/class_m_angle.html#abc881d829b53f0f3871fcf9a8ab173b1\">MAngle</a>\n\
, <a class=\"el\" translate=\"no\" href=\"#!/url=./cpp_ref/class_m_distance.html#ad7868b7deab93de1213d816364e634cc\">MDistance</a>\n\
, <a class=\"el\" translate=\"no\" href=\"#!/url=./cpp_ref/class_m_time.html#a5b08f84ff68e42c0a32dbd8e0a2d6506\">MTime</a>\n\
</li>\n\
<li>uiWidget()\n\
: <a class=\"el\" translate=\"no\" href=\"#!/url=./cpp_ref/class_m_h_w_render_1_1_m_shader_instance.html#a832b4dcdaca5b69433b92681f87261c9\">MShaderInstance</a>\n\
</li>\n\
<li>unbind()\n\
: <a class=\"el\" translate=\"no\" href=\"#!/url=./cpp_ref/class_m_h_w_render_1_1_m_shader_instance.html#ac4a9d5b839ed15d1bc1330b7ce663f19\">MShaderInstance</a>\n\
, <a class=\"el\" translate=\"no\" href=\"#!/url=./cpp_ref/class_m_px_hw_shader_node.html#a1add8314dc908073f9126b81dc187ce7\">MPxHwShaderNode</a>\n\
</li>\n\
<li>unbindFbo()\n\
: <a class=\"el\" translate=\"no\" href=\"#!/url=./cpp_ref/class_m_px_gl_buffer.html#abcb405d5ec528e9b29817bb28856e92c\">MPxGlBuffer</a>\n\
</li>\n\
<li>undeleteComponents()\n\
: <a class=\"el\" translate=\"no\" href=\"#!/url=./cpp_ref/class_m_px_surface_shape.html#ab8472cd960255565b5d9228e7297ab7a\">MPxSurfaceShape</a>\n\
</li>\n\
<li>undoIt()\n\
: <a class=\"el\" translate=\"no\" href=\"#!/url=./cpp_ref/class_m_anim_curve_change.html#a0789a8d51244cad0495abb2b811c39db\">MAnimCurveChange</a>\n\
, <a class=\"el\" translate=\"no\" href=\"#!/url=./cpp_ref/class_m_d_g_modifier.html#a0789a8d51244cad0495abb2b811c39db\">MDGModifier</a>\n\
, <a class=\"el\" translate=\"no\" href=\"#!/url=./cpp_ref/class_m_px_command.html#a0789a8d51244cad0495abb2b811c39db\">MPxCommand</a>\n\
, <a class=\"el\" translate=\"no\" href=\"#!/url=./cpp_ref/class_m_px_constraint_command.html#a0789a8d51244cad0495abb2b811c39db\">MPxConstraintCommand</a>\n\
, <a class=\"el\" translate=\"no\" href=\"#!/url=./cpp_ref/class_m_template_create_node_command.html#a2b7d485190b6f089c23678218f6bc20b\">MTemplateCreateNodeCommand&lt; CommandClass, CommandName, NodeName &gt;</a>\n\
</li>\n\
<li>uniformGridParams()\n\
: <a class=\"el\" translate=\"no\" href=\"#!/url=./cpp_ref/class_m_fn_mesh.html#a6935c5bb858e53b60ad6d04ab5025899\">MFnMesh</a>\n\
</li>\n\
<li>uninitialize()\n\
: <a class=\"el\" translate=\"no\" href=\"#!/url=./cpp_ref/class_m_viewport_renderer.html#a14ae6a0dfa0a52df5eebaaabd9c98771\">MViewportRenderer</a>\n\
</li>\n\
<li>uniqueID()\n\
: <a class=\"el\" translate=\"no\" href=\"#!/url=./cpp_ref/class_m_geometry_data.html#a9daf68d761d48b661dab360616d4ad84\">MGeometryData</a>\n\
, <a class=\"el\" translate=\"no\" href=\"#!/url=./cpp_ref/class_m_geometry_primitive.html#a9daf68d761d48b661dab360616d4ad84\">MGeometryPrimitive</a>\n\
</li>\n\
<li>uniqueSolution()\n\
: <a class=\"el\" translate=\"no\" href=\"#!/url=./cpp_ref/class_m_px_ik_solver_node.html#abcc27ef0b2021ff37e8651d6594d2538\">MPxIkSolverNode</a>\n\
</li>\n\
<li>unit()\n\
: <a class=\"el\" translate=\"no\" href=\"#!/url=./cpp_ref/class_m_angle.html#a49317345141b11272d6f16b5d1941c26\">MAngle</a>\n\
, <a class=\"el\" translate=\"no\" href=\"#!/url=./cpp_ref/class_m_distance.html#a9810fbed813494e085cf7e29b8b46d96\">MDistance</a>\n\
, <a class=\"el\" translate=\"no\" href=\"#!/url=./cpp_ref/class_m_time.html#ad2dfb23055aad35d27a0e0ec3f77f86c\">MTime</a>\n\
</li>\n\
<li>unitConversion()\n\
: <a class=\"el\" translate=\"no\" href=\"#!/url=./cpp_ref/class_m_fn_expression.html#aa2e16cb51a13418141a941ff494d2adb\">MFnExpression</a>\n\
</li>\n\
<li>unitlessAnimCurveTypeForPlug()\n\
: <a class=\"el\" translate=\"no\" href=\"#!/url=./cpp_ref/class_m_fn_anim_curve.html#a222264534d6a8ae1505f2ade8229e8cc\">MFnAnimCurve</a>\n\
</li>\n\
<li>unitlessInput()\n\
: <a class=\"el\" translate=\"no\" href=\"#!/url=./cpp_ref/class_m_fn_anim_curve.html#a509a5e48fcff509378d856494ca58f1b\">MFnAnimCurve</a>\n\
</li>\n\
<li>unitType()\n\
: <a class=\"el\" translate=\"no\" href=\"#!/url=./cpp_ref/class_m_fn_numeric_attribute.html#a475558f03040cb41c9af196253650823\">MFnNumericAttribute</a>\n\
, <a class=\"el\" translate=\"no\" href=\"#!/url=./cpp_ref/class_m_fn_unit_attribute.html#a6ff6374ca6950cff3dc67fe25758feef\">MFnUnitAttribute</a>\n\
</li>\n\
<li>unlinkExtensionAttributeFromPlugin()\n\
: <a class=\"el\" translate=\"no\" href=\"#!/url=./cpp_ref/class_m_d_g_modifier.html#a78a1f0f7a523e5f072aee000f334163e\">MDGModifier</a>\n\
</li>\n\
<li>unload()\n\
: <a class=\"el\" translate=\"no\" href=\"#!/url=./cpp_ref/class_m_h_w_render_1_1_m_index_buffer.html#a75d84312cb36261792b879ffc61e7e16\">MIndexBuffer</a>\n\
, <a class=\"el\" translate=\"no\" href=\"#!/url=./cpp_ref/class_m_h_w_render_1_1_m_vertex_buffer.html#a75d84312cb36261792b879ffc61e7e16\">MVertexBuffer</a>\n\
</li>\n\
<li>unloadReference()\n\
: <a class=\"el\" translate=\"no\" href=\"#!/url=./cpp_ref/class_m_file_i_o.html#a1aee1344c469f4c5279859fe0f21dae7\">MFileIO</a>\n\
</li>\n\
<li>unloadReferenceByNode()\n\
: <a class=\"el\" translate=\"no\" href=\"#!/url=./cpp_ref/class_m_file_i_o.html#acbb9760b1869d43f13e5fd85ca57c495\">MFileIO</a>\n\
</li>\n\
<li>unlock()\n\
: <a class=\"el\" translate=\"no\" href=\"#!/url=./cpp_ref/class_m_mutex_lock.html#a9278be8203e1c42e2619179882ae4403\">MMutexLock</a>\n\
, <a class=\"el\" translate=\"no\" href=\"#!/url=./cpp_ref/class_m_spin_lock.html#a9278be8203e1c42e2619179882ae4403\">MSpinLock</a>\n\
</li>\n\
<li>unlockFaceVertexNormals()\n\
: <a class=\"el\" translate=\"no\" href=\"#!/url=./cpp_ref/class_m_fn_mesh.html#a1fa6951580cf45b1056fc54788652a96\">MFnMesh</a>\n\
</li>\n\
<li>unlockVertexNormals()\n\
: <a class=\"el\" translate=\"no\" href=\"#!/url=./cpp_ref/class_m_fn_mesh.html#a36af178d046a0fffc4fbffaba5288251\">MFnMesh</a>\n\
</li>\n\
<li>unmap()\n\
: <a class=\"el\" translate=\"no\" href=\"#!/url=./cpp_ref/class_m_h_w_render_1_1_m_index_buffer.html#a1ffeb3b5abb3d61f62b58a391816201c\">MIndexBuffer</a>\n\
, <a class=\"el\" translate=\"no\" href=\"#!/url=./cpp_ref/class_m_h_w_render_1_1_m_vertex_buffer.html#a1ffeb3b5abb3d61f62b58a391816201c\">MVertexBuffer</a>\n\
</li>\n\
<li>unregisterBakeEngine()\n\
: <a class=\"el\" translate=\"no\" href=\"#!/url=./cpp_ref/class_m_fn_plugin.html#a5eb265538465a26fc6de363ea8ffaf3e\">MFnPlugin</a>\n\
</li>\n\
<li>unregisterCollisionSolverCollide()\n\
: <a class=\"el\" translate=\"no\" href=\"#!/url=./cpp_ref/class_m_hair_system.html#aed270f78aa2c10fe69fef015be60921a\">MHairSystem</a>\n\
</li>\n\
<li>unregisterCollisionSolverPreFrame()\n\
: <a class=\"el\" translate=\"no\" href=\"#!/url=./cpp_ref/class_m_hair_system.html#a01eeb1c0cf1fd6abe5b9a609157e3fca\">MHairSystem</a>\n\
</li>\n\
<li>unregisterMaterialInfo()\n\
: <a class=\"el\" translate=\"no\" href=\"#!/url=./cpp_ref/class_m_fn_plugin.html#a7cdf6a6b5eae02f9b8415bc7b9a47033\">MFnPlugin</a>\n\
</li>\n\
<li>unregisterSwatchRender()\n\
: <a class=\"el\" translate=\"no\" href=\"#!/url=./cpp_ref/class_m_swatch_render_register.html#aaf631cf464914a7a8bae8205ec591ab8\">MSwatchRenderRegister</a>\n\
</li>\n\
<li>unregisterTrgFunction()\n\
: <a class=\"el\" translate=\"no\" href=\"#!/url=./cpp_ref/class_m_px_poly_trg.html#a7839c3da90b1e14528050409e02db9a7\">MPxPolyTrg</a>\n\
</li>\n\
<li>unselect()\n\
: <a class=\"el\" translate=\"no\" href=\"#!/url=./cpp_ref/class_m_global.html#a0538aec04d25673f789464fd128821f2\">MGlobal</a>\n\
</li>\n\
<li>unselectByName()\n\
: <a class=\"el\" translate=\"no\" href=\"#!/url=./cpp_ref/class_m_global.html#a4fea35df930416a5b29219af6fab4b30\">MGlobal</a>\n\
</li>\n\
<li>unsetOutputTargetOverrideSize()\n\
: <a class=\"el\" translate=\"no\" href=\"#!/url=./cpp_ref/class_m_h_w_render_1_1_m_renderer.html#af25fd0c611b5d859d7461de32f248f8c\">MRenderer</a>\n\
</li>\n\
<li>unSquishIt()\n\
: <a class=\"el\" translate=\"no\" href=\"#!/url=./cpp_ref/class_m_px_transformation_matrix.html#a077a6b00048a92480374e4fa8a0a0467\">MPxTransformationMatrix</a>\n\
</li>\n\
<li>unSquishMatrix()\n\
: <a class=\"el\" translate=\"no\" href=\"#!/url=./cpp_ref/class_m_px_transformation_matrix.html#a26f1db93e9baf690de12f9a3eddbdbeb\">MPxTransformationMatrix</a>\n\
</li>\n\
<li>upAxis()\n\
: <a class=\"el\" translate=\"no\" href=\"#!/url=./cpp_ref/class_m_fn_motion_path.html#a1d4ecf4f981b3dcf46ffcefed1866fa4\">MFnMotionPath</a>\n\
, <a class=\"el\" translate=\"no\" href=\"#!/url=./cpp_ref/class_m_global.html#a2b69f64d6203c46c6f7971ebcf22c85f\">MGlobal</a>\n\
</li>\n\
<li>update()\n\
: <a class=\"el\" translate=\"no\" href=\"#!/url=./cpp_ref/class_m_h_w_render_1_1_m_index_buffer.html#ac26b69fe0c36cb3ee56d827a7fb467cf\">MIndexBuffer</a>\n\
, <a class=\"el\" translate=\"no\" href=\"#!/url=./cpp_ref/class_m_h_w_render_1_1_m_px_sub_scene_override.html#ac74e57c764a59c2fa2a8e6a5b72090d5\">MPxSubSceneOverride</a>\n\
, <a class=\"el\" translate=\"no\" href=\"#!/url=./cpp_ref/class_m_h_w_render_1_1_m_texture.html#a3d365396b4e87bce3f2c6b8d93ea4d69\">MTexture</a>\n\
, <a class=\"el\" translate=\"no\" href=\"#!/url=./cpp_ref/class_m_h_w_render_1_1_m_vertex_buffer.html#af083045e46c6c887e538a390aaf503cc\">MVertexBuffer</a>\n\
</li>\n\
<li>updateAllEditsAndCreases()\n\
: <a class=\"el\" translate=\"no\" href=\"#!/url=./cpp_ref/class_m_fn_subd.html#a9b220217d059d26219ff853e0ff7dfba\">MFnSubd</a>\n\
</li>\n\
<li>updateCompleteVertexGroup()\n\
: <a class=\"el\" translate=\"no\" href=\"#!/url=./cpp_ref/class_m_px_geometry_data.html#a2c361aa99532421d6e4dc661f1a62ac3\">MPxGeometryData</a>\n\
</li>\n\
<li>updateCurve()\n\
: <a class=\"el\" translate=\"no\" href=\"#!/url=./cpp_ref/class_m_fn_nurbs_curve.html#a4ba2a3c5e544f53bd55738a5ba877dbb\">MFnNurbsCurve</a>\n\
, <a class=\"el\" translate=\"no\" href=\"#!/url=./cpp_ref/class_m_it_curve_c_v.html#a4ba2a3c5e544f53bd55738a5ba877dbb\">MItCurveCV</a>\n\
</li>\n\
<li>updateDescription()\n\
: <a class=\"el\" translate=\"no\" href=\"#!/url=./cpp_ref/class_m_h_w_render_1_1_m_render_target.html#ad3c82c6bf98ed514ccb8e35b573f9f85\">MRenderTarget</a>\n\
</li>\n\
<li>updateDevice()\n\
: <a class=\"el\" translate=\"no\" href=\"#!/url=./cpp_ref/class_m_h_w_render_1_1_m_px_shader_override.html#a84ad0250e8df6abe4a2bab23778c24de\">MPxShaderOverride</a>\n\
</li>\n\
<li>updateDG()\n\
: <a class=\"el\" translate=\"no\" href=\"#!/url=./cpp_ref/class_m_h_w_render_1_1_m_px_geometry_override.html#a66874f312bfb87c0159dfbfacafbc3fd\">MPxGeometryOverride</a>\n\
, <a class=\"el\" translate=\"no\" href=\"#!/url=./cpp_ref/class_m_h_w_render_1_1_m_px_shader_override.html#a3b74f9aeed8e4a00450e3d2045b53b39\">MPxShaderOverride</a>\n\
, <a class=\"el\" translate=\"no\" href=\"#!/url=./cpp_ref/class_m_h_w_render_1_1_m_px_shading_node_override.html#a23b698292591f9980d9daa5af9451326\">MPxShadingNodeOverride</a>\n\
</li>\n\
<li>updateGrid()\n\
: <a class=\"el\" translate=\"no\" href=\"#!/url=./cpp_ref/class_m_fn_fluid.html#a182e3f1e96ee60604ee614e591a39b54\">MFnFluid</a>\n\
</li>\n\
<li>updateInstanceTransform()\n\
: <a class=\"el\" translate=\"no\" href=\"#!/url=./cpp_ref/class_m_h_w_render_1_1_m_px_sub_scene_override.html#aa33d933e42a4fde68622dc759d9477b1\">MPxSubSceneOverride</a>\n\
</li>\n\
<li>updateManipulators()\n\
: <a class=\"el\" translate=\"no\" href=\"#!/url=./cpp_ref/class_m_template_selection_context.html#ad1437c9d480c35d9c4565814799abc39\">MTemplateSelectionContext&lt; ContextNameString, ContextClass, NodeType, ManipulatorClass, ManipulatorNodeName &gt;</a>\n\
</li>\n\
<li>updateMatrixAttrs()\n\
: <a class=\"el\" translate=\"no\" href=\"#!/url=./cpp_ref/class_m_px_transform.html#a8ed631f0b363e2b609a6924c5cec09e0\">MPxTransform</a>\n\
</li>\n\
<li>updateParameters()\n\
: <a class=\"el\" translate=\"no\" href=\"#!/url=./cpp_ref/class_m_h_w_render_1_1_m_shader_instance.html#a12c3058fbb93f63ab42f17ba09385e6c\">MShaderInstance</a>\n\
</li>\n\
<li>updatePixels()\n\
: <a class=\"el\" translate=\"no\" href=\"#!/url=./cpp_ref/class_m_render_view.html#a933dc6f93a84fdd9ebb889d1af7b9a6a\">MRenderView</a>\n\
</li>\n\
<li>updateRenderItems()\n\
: <a class=\"el\" translate=\"no\" href=\"#!/url=./cpp_ref/class_m_h_w_render_1_1_m_px_geometry_override.html#abad8e8b1f0e06eea32e2be8f97200941\">MPxGeometryOverride</a>\n\
</li>\n\
<li>updateRepNamespace()\n\
: <a class=\"el\" translate=\"no\" href=\"#!/url=./cpp_ref/class_m_px_assembly.html#a9f62f671ea1b3325ff5e661efb061729\">MPxAssembly</a>\n\
</li>\n\
<li>updateSelectionGranularity()\n\
: <a class=\"el\" translate=\"no\" href=\"#!/url=./cpp_ref/class_m_h_w_render_1_1_m_px_draw_override.html#a35db327011e850bc4f290c65fdc8d8fd\">MPxDrawOverride</a>\n\
, <a class=\"el\" translate=\"no\" href=\"#!/url=./cpp_ref/class_m_h_w_render_1_1_m_px_geometry_override.html#a35db327011e850bc4f290c65fdc8d8fd\">MPxGeometryOverride</a>\n\
, <a class=\"el\" translate=\"no\" href=\"#!/url=./cpp_ref/class_m_h_w_render_1_1_m_px_sub_scene_override.html#a35db327011e850bc4f290c65fdc8d8fd\">MPxSubSceneOverride</a>\n\
</li>\n\
<li>updateShader()\n\
: <a class=\"el\" translate=\"no\" href=\"#!/url=./cpp_ref/class_m_h_w_render_1_1_m_px_shading_node_override.html#af45c45875cf1342536ef1aefd996ce89\">MPxShadingNodeOverride</a>\n\
</li>\n\
<li>updateSubdSurface()\n\
: <a class=\"el\" translate=\"no\" href=\"#!/url=./cpp_ref/class_m_fn_subd.html#a4029418189156161725753d829324d49\">MFnSubd</a>\n\
</li>\n\
<li>updateSurface()\n\
: <a class=\"el\" translate=\"no\" href=\"#!/url=./cpp_ref/class_m_fn_mesh.html#aadc717faffda37e0542fa7aae370905b\">MFnMesh</a>\n\
, <a class=\"el\" translate=\"no\" href=\"#!/url=./cpp_ref/class_m_fn_nurbs_surface.html#aadc717faffda37e0542fa7aae370905b\">MFnNurbsSurface</a>\n\
, <a class=\"el\" translate=\"no\" href=\"#!/url=./cpp_ref/class_m_it_mesh_edge.html#aadc717faffda37e0542fa7aae370905b\">MItMeshEdge</a>\n\
, <a class=\"el\" translate=\"no\" href=\"#!/url=./cpp_ref/class_m_it_mesh_face_vertex.html#aadc717faffda37e0542fa7aae370905b\">MItMeshFaceVertex</a>\n\
, <a class=\"el\" translate=\"no\" href=\"#!/url=./cpp_ref/class_m_it_mesh_polygon.html#aadc717faffda37e0542fa7aae370905b\">MItMeshPolygon</a>\n\
, <a class=\"el\" translate=\"no\" href=\"#!/url=./cpp_ref/class_m_it_mesh_vertex.html#aadc717faffda37e0542fa7aae370905b\">MItMeshVertex</a>\n\
, <a class=\"el\" translate=\"no\" href=\"#!/url=./cpp_ref/class_m_it_surface_c_v.html#aadc717faffda37e0542fa7aae370905b\">MItSurfaceCV</a>\n\
</li>\n\
<li>updateViewingParameters()\n\
: <a class=\"el\" translate=\"no\" href=\"#!/url=./cpp_ref/class_m3d_view.html#a040f4d7897624173c9ead0640cc564f4\">M3dView</a>\n\
, <a class=\"el\" translate=\"no\" href=\"#!/url=./cpp_ref/class_m_px3d_model_view.html#a040f4d7897624173c9ead0640cc564f4\">MPx3dModelView</a>\n\
</li>\n\
<li>upDirection()\n\
: <a class=\"el\" translate=\"no\" href=\"#!/url=./cpp_ref/class_m_fn_camera.html#a02c40747377d923d863cc514ef0b4d3d\">MFnCamera</a>\n\
</li>\n\
<li>upVectorAttribute()\n\
: <a class=\"el\" translate=\"no\" href=\"#!/url=./cpp_ref/class_m_px_constraint_command.html#afd7ecb996bfececa24bb485f257926f1\">MPxConstraintCommand</a>\n\
</li>\n\
<li>uriScheme()\n\
: <a class=\"el\" translate=\"no\" href=\"#!/url=./cpp_ref/class_m_px_file_resolver.html#ad1b0e9127aaa7d4780770e6962478699\">MPxFileResolver</a>\n\
</li>\n\
<li>urls()\n\
: <a class=\"el\" translate=\"no\" href=\"#!/url=./cpp_ref/class_m_external_drop_data.html#a09cee26594e819dc690019894dafaccf\">MExternalDropData</a>\n\
</li>\n\
<li>useClosestPointForSelection()\n\
: <a class=\"el\" translate=\"no\" href=\"#!/url=./cpp_ref/class_m_px_locator_node.html#a46219280be6a8c5debd03bea8d8ebf4f\">MPxLocatorNode</a>\n\
</li>\n\
<li>useDecayRegions()\n\
: <a class=\"el\" translate=\"no\" href=\"#!/url=./cpp_ref/class_m_fn_spot_light.html#afa707eeed089c7ee6e35f0b233d8fab3\">MFnSpotLight</a>\n\
</li>\n\
<li>useDefaults()\n\
: <a class=\"el\" translate=\"no\" href=\"#!/url=./cpp_ref/classadsk_1_1_data_1_1_stream.html#ac1bf479c154ec18cdb0376c1a196638e\">Stream</a>\n\
</li>\n\
<li>useDenseStorage()\n\
: <a class=\"el\" translate=\"no\" href=\"#!/url=./cpp_ref/classadsk_1_1_data_1_1_stream.html#aa03b6b91252d3d3b867ab318fae9d6ba\">Stream</a>\n\
</li>\n\
<li>useDepthMapAutoFocus()\n\
: <a class=\"el\" translate=\"no\" href=\"#!/url=./cpp_ref/class_m_fn_non_extended_light.html#ac964341265525542a0aa5b42f439a8df\">MFnNonExtendedLight</a>\n\
</li>\n\
<li>useDepthMapShadows()\n\
: <a class=\"el\" translate=\"no\" href=\"#!/url=./cpp_ref/class_m_fn_non_extended_light.html#ae13f222ac28a332cfd838f260d508a88\">MFnNonExtendedLight</a>\n\
</li>\n\
<li>useDirection()\n\
: <a class=\"el\" translate=\"no\" href=\"#!/url=./cpp_ref/class_m_fn_drag_field.html#a15a12230e47cc89aa098380261fea7d7\">MFnDragField</a>\n\
</li>\n\
<li>useGradient()\n\
: <a class=\"el\" translate=\"no\" href=\"#!/url=./cpp_ref/class_m_h_w_render_1_1_m_renderer.html#a0a37f5441ac2ecc2683c434a77e93234\">MRenderer</a>\n\
</li>\n\
<li>useLightPosition()\n\
: <a class=\"el\" translate=\"no\" href=\"#!/url=./cpp_ref/class_m_fn_directional_light.html#aec95bee2392843820948aee7c66be33a\">MFnDirectionalLight</a>\n\
</li>\n\
<li>useMaterialAsTexture()\n\
: <a class=\"el\" translate=\"no\" href=\"#!/url=./cpp_ref/class_m_px_material_information.html#a09a92de3cdaceeb736174dc0b14bc3b9\">MPxMaterialInformation</a>\n\
</li>\n\
<li>useMaxDistance()\n\
: <a class=\"el\" translate=\"no\" href=\"#!/url=./cpp_ref/class_m_fn_field.html#a5eb16ed029fe3b448d10f88afc600bbb\">MFnField</a>\n\
</li>\n\
<li>useNormal()\n\
: <a class=\"el\" translate=\"no\" href=\"#!/url=./cpp_ref/class_m_fn_motion_path.html#ab598179a66b8f28ba3642b99d9e16c9f\">MFnMotionPath</a>\n\
</li>\n\
<li>usePivotAsLocalSpace()\n\
: <a class=\"el\" translate=\"no\" href=\"#!/url=./cpp_ref/class_m_fn_camera.html#ab8372770249e876d400b51c05d2f506c\">MFnCamera</a>\n\
</li>\n\
<li>useRayTraceShadows()\n\
: <a class=\"el\" translate=\"no\" href=\"#!/url=./cpp_ref/class_m_fn_light.html#a67d8d0f075751a6f8b0566c43f7f1bb4\">MFnLight</a>\n\
</li>\n\
<li>userChangingViewContext()\n\
: <a class=\"el\" translate=\"no\" href=\"#!/url=./cpp_ref/class_m_draw_info.html#a961ff89605b39dc437e568cf43e7fb54\">MDrawInfo</a>\n\
, <a class=\"el\" translate=\"no\" href=\"#!/url=./cpp_ref/class_m_h_w_render_1_1_m_frame_context.html#acae6b9f8aa6589912296983df9f1aca8\">MFrameContext</a>\n\
</li>\n\
<li>userData()\n\
: <a class=\"el\" translate=\"no\" href=\"#!/url=./cpp_ref/class_m_uniform_parameter.html#aabc6dea98709831626d182f1bce0c69a\">MUniformParameter</a>\n\
</li>\n\
<li>userDefinedColorIndex()\n\
: <a class=\"el\" translate=\"no\" href=\"#!/url=./cpp_ref/class_m3d_view.html#ae79f13aa014cabc62bf5333fabadf80d\">M3dView</a>\n\
, <a class=\"el\" translate=\"no\" href=\"#!/url=./cpp_ref/class_m_px3d_model_view.html#ae79f13aa014cabc62bf5333fabadf80d\">MPx3dModelView</a>\n\
</li>\n\
<li>userNode()\n\
: <a class=\"el\" translate=\"no\" href=\"#!/url=./cpp_ref/class_m_fn_dependency_node.html#a4f2c53c9d1dcf25a6462c70fb25aead1\">MFnDependencyNode</a>\n\
</li>\n\
<li>usesArrayDataBuilder()\n\
: <a class=\"el\" translate=\"no\" href=\"#!/url=./cpp_ref/class_m_fn_attribute.html#a88b90f1b23f0f7a31968142b87b36d21\">MFnAttribute</a>\n\
</li>\n\
<li>useSelectionAsDefault()\n\
: <a class=\"el\" translate=\"no\" href=\"#!/url=./cpp_ref/class_m_syntax.html#a16e72b75488e20aafdc0c3c64e663bea\">MSyntax</a>\n\
</li>\n\
<li>usesFiltering()\n\
: <a class=\"el\" translate=\"no\" href=\"#!/url=./cpp_ref/class_m_fn_render_pass.html#ac3289550c11092a79102d5f9d0fcf8aa\">MFnRenderPass</a>\n\
</li>\n\
<li>usesStructure()\n\
: <a class=\"el\" translate=\"no\" href=\"#!/url=./cpp_ref/classadsk_1_1_data_1_1_handle.html#a15b5b535b8641cd75e066df680ed453b\">Handle</a>\n\
</li>\n\
<li>usingDefaultMaterial()\n\
: <a class=\"el\" translate=\"no\" href=\"#!/url=./cpp_ref/class_m3d_view.html#ae4b4678ef01f58e0ef190c045559f9ae\">M3dView</a>\n\
</li>\n\
<li>usingHiliteColor()\n\
: <a class=\"el\" translate=\"no\" href=\"#!/url=./cpp_ref/class_m_fn_dag_node.html#ad9fdaa5e3e5601e6227d178c5c5599b6\">MFnDagNode</a>\n\
</li>\n\
<li>usingMipmappedTextures()\n\
: <a class=\"el\" translate=\"no\" href=\"#!/url=./cpp_ref/class_m3d_view.html#a96692adcdc5ac73c5750641719df6cfa\">M3dView</a>\n\
</li>\n\
<li>usingObjectColor()\n\
: <a class=\"el\" translate=\"no\" href=\"#!/url=./cpp_ref/class_m_fn_dag_node.html#af6a57cc523bd8f59b1c0bf9388d2e2e4\">MFnDagNode</a>\n\
</li>\n\
<li>uStart()\n\
: <a class=\"el\" translate=\"no\" href=\"#!/url=./cpp_ref/class_m_fn_motion_path.html#a21bf6787bfec2bf34ad2bc9ab2ee2baf\">MFnMotionPath</a>\n\
</li>\n\
<li>uTimeEnd()\n\
: <a class=\"el\" translate=\"no\" href=\"#!/url=./cpp_ref/class_m_fn_motion_path.html#a06b25fc79b069d1169b09b30ce67bf8f\">MFnMotionPath</a>\n\
</li>\n\
<li>uTimeStart()\n\
: <a class=\"el\" translate=\"no\" href=\"#!/url=./cpp_ref/class_m_fn_motion_path.html#a3ec1432ebe0cc516c6784cdabf17196d\">MFnMotionPath</a>\n\
</li>\n\
<li>uuid()\n\
: <a class=\"el\" translate=\"no\" href=\"#!/url=./cpp_ref/class_m_fn_dependency_node.html#a985f6747fe491d93740f7c0e54f0bbcb\">MFnDependencyNode</a>\n\
</li>\n\
<li>uvPoint()\n\
: <a class=\"el\" translate=\"no\" href=\"#!/url=./cpp_ref/class_m_dyn_swept_triangle.html#a6eafbf52344a92f8a388d7e5440de793\">MDynSweptTriangle</a>\n\
</li>\n\
</ul>\n\
</div><!-- contents -->\n\
</div><!-- doc-content -->\n\
          <div class=\"footer-block\"><a href=\"../html/ac.cmtdialog.htm\" class=\"comments-anchor\" target=\"_blank\"><span class=\"comments-link\">Please send us your comment about this page</span></a></div><br></div>\n\
   </div></div></body>\n\
</html>\n\
";