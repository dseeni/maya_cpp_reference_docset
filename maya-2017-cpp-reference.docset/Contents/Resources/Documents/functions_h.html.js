var topic = "<!-- saved from url=(0024)http://docs.autodesk.com -->\n\
<html>\n\
   <head><script src=\"../scripts/yepnope.1.5.4-min.js\" type=\"text/javascript\"></script><script src=\"../scripts/lib/jquery-1.11.1.min.js\" type=\"text/javascript\"></script><meta http-equiv=\"Content-Type\" content=\"text/html; charset=UTF-8\"><meta name=\"product\" content=\"MAYAUL\"><meta name=\"release\" content=\"2017\"><meta name=\"book\" content=\"Developer\"><meta name=\"created\" content=\"2016-06-16\"><meta name=\"topicid\" content=\"GUID-02DEF634-1E7B-48C6-8ACD-2C934CA97887\"><meta name=\"topic-type\" content=\"concept\">\n\
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
    cpp_ref_adsk_ref_toc.initNavTree(\'functions_h.html\', tocPrefix);\n\
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
      <li><a href=\"#!/url=./cpp_ref/functions.html#index_a\"><span>a</span></a></li>\n\
      <li><a href=\"#!/url=./cpp_ref/functions_b.html#index_b\"><span>b</span></a></li>\n\
      <li><a href=\"#!/url=./cpp_ref/functions_c.html#index_c\"><span>c</span></a></li>\n\
      <li><a href=\"#!/url=./cpp_ref/functions_d.html#index_d\"><span>d</span></a></li>\n\
      <li><a href=\"#!/url=./cpp_ref/functions_e.html#index_e\"><span>e</span></a></li>\n\
      <li><a href=\"#!/url=./cpp_ref/functions_f.html#index_f\"><span>f</span></a></li>\n\
      <li><a href=\"#!/url=./cpp_ref/functions_g.html#index_g\"><span>g</span></a></li>\n\
      <li class=\"current\"><a href=\"#!/url=./cpp_ref/functions_h.html#index_h\"><span>h</span></a></li>\n\
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
      <li><a href=\"#!/url=./cpp_ref/functions_w.html#index_w\"><span>w</span></a></li>\n\
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
<h3><a class=\"anchor\" id=\"index_h\"></a>- h -</h3><ul>\n\
<li>handCursor\n\
: <a class=\"el\" translate=\"no\" href=\"#!/url=./cpp_ref/class_m_cursor.html#a7b880b1c2581a3f6884c3c7cffb8f3d6\">MCursor</a>\n\
</li>\n\
<li>Handle()\n\
: <a class=\"el\" translate=\"no\" href=\"#!/url=./cpp_ref/classadsk_1_1_data_1_1_handle.html#a1df0bb6aef2d606bc6bf84cce3ea6ba2\">Handle</a>\n\
</li>\n\
<li>handle()\n\
: <a class=\"el\" translate=\"no\" href=\"#!/url=./cpp_ref/class_m_ik_handle_group.html#a944d8fa790977c9f78ca7686d1a5e8ec\">MIkHandleGroup</a>\n\
</li>\n\
<li>handleCount()\n\
: <a class=\"el\" translate=\"no\" href=\"#!/url=./cpp_ref/class_m_ik_handle_group.html#a279e7a19e369b1d1b0471efed2e19634\">MIkHandleGroup</a>\n\
</li>\n\
<li>handleGroup()\n\
: <a class=\"el\" translate=\"no\" href=\"#!/url=./cpp_ref/class_m_px_ik_solver.html#a8762fbb445e1f49c4da3688adfb720ab\">MPxIkSolver</a>\n\
, <a class=\"el\" translate=\"no\" href=\"#!/url=./cpp_ref/class_m_px_ik_solver_node.html#a8762fbb445e1f49c4da3688adfb720ab\">MPxIkSolverNode</a>\n\
</li>\n\
<li>handleNewTargets()\n\
: <a class=\"el\" translate=\"no\" href=\"#!/url=./cpp_ref/class_m_px_constraint_command.html#a40dd27c0a1d94265e971851e1bf1272c\">MPxConstraintCommand</a>\n\
</li>\n\
<li>handlesAddEdits()\n\
: <a class=\"el\" translate=\"no\" href=\"#!/url=./cpp_ref/class_m_fn_assembly.html#a6c10d4d333d678289034440956888af6\">MFnAssembly</a>\n\
, <a class=\"el\" translate=\"no\" href=\"#!/url=./cpp_ref/class_m_px_assembly.html#af627a02d4870961f619705ad60345fe5\">MPxAssembly</a>\n\
</li>\n\
<li>handlesConsolidatedGeometry()\n\
: <a class=\"el\" translate=\"no\" href=\"#!/url=./cpp_ref/class_m_h_w_render_1_1_m_px_shader_override.html#a19006d5cfe9051bab45477aea767f346\">MPxShaderOverride</a>\n\
</li>\n\
<li>handlesDescription()\n\
: <a class=\"el\" translate=\"no\" href=\"#!/url=./cpp_ref/class_m_px_cache_format.html#a8ebde10b0327bbe1e68564756147054d\">MPxCacheFormat</a>\n\
</li>\n\
<li>handlesDraw()\n\
: <a class=\"el\" translate=\"no\" href=\"#!/url=./cpp_ref/class_m_h_w_render_1_1_m_px_shader_override.html#a3b5dcab1b6940e042c0d4843a6ab6787\">MPxShaderOverride</a>\n\
</li>\n\
<li>handleSize()\n\
: <a class=\"el\" translate=\"no\" href=\"#!/url=./cpp_ref/class_m_fn_manip3_d.html#aea2351376d1b1b3dd3cfe4e11cec6e27\">MFnManip3D</a>\n\
</li>\n\
<li>handleTraceMessage()\n\
: <a class=\"el\" translate=\"no\" href=\"#!/url=./cpp_ref/class_m_h_w_render_1_1_m_px_draw_override.html#a4ff99ebf5c2ae4a67e7ea54547c2e10b\">MPxDrawOverride</a>\n\
, <a class=\"el\" translate=\"no\" href=\"#!/url=./cpp_ref/class_m_h_w_render_1_1_m_px_geometry_override.html#a4ff99ebf5c2ae4a67e7ea54547c2e10b\">MPxGeometryOverride</a>\n\
</li>\n\
<li>hardwareColor()\n\
: <a class=\"el\" translate=\"no\" href=\"#!/url=./cpp_ref/class_m_fn_layered_shader.html#ad41aabb585865982d15cd29bf0f07b8f\">MFnLayeredShader</a>\n\
</li>\n\
<li>hardwareShader()\n\
: <a class=\"el\" translate=\"no\" href=\"#!/url=./cpp_ref/class_m_fn_layered_shader.html#a247a54b8c6a03b77eb085e4d0f9335a0\">MFnLayeredShader</a>\n\
</li>\n\
<li>hardwareType()\n\
: <a class=\"el\" translate=\"no\" href=\"#!/url=./cpp_ref/class_m_image_file_info.html#a8e20c60c914128a4914fdd18a82ec73b\">MImageFileInfo</a>\n\
</li>\n\
<li>has()\n\
: <a class=\"el\" translate=\"no\" href=\"#!/url=./cpp_ref/class_m_fn_component_list_data.html#a7ab5e33d52bdf658bf5fa271a6194c56\">MFnComponentListData</a>\n\
</li>\n\
<li>hasActiveComponents()\n\
: <a class=\"el\" translate=\"no\" href=\"#!/url=./cpp_ref/class_m_px_surface_shape.html#a168e1b383c958be627e8935a4ffdd7cb\">MPxSurfaceShape</a>\n\
</li>\n\
<li>hasAlpha()\n\
: <a class=\"el\" translate=\"no\" href=\"#!/url=./cpp_ref/class_m_h_w_render_1_1_m_texture.html#a2d7736529ea585cdfe23bd37a6e61f22\">MTexture</a>\n\
, <a class=\"el\" translate=\"no\" href=\"#!/url=./cpp_ref/class_m_image_file_info.html#a0d8c12ec6df0ac9ad6e8941329ffd4f0\">MImageFileInfo</a>\n\
</li>\n\
<li>hasAlphaChannels()\n\
: <a class=\"el\" translate=\"no\" href=\"#!/url=./cpp_ref/class_m_fn_mesh.html#a29c14970fc689e97ce67f95f19d38ea6\">MFnMesh</a>\n\
</li>\n\
<li>hasAttribute()\n\
: <a class=\"el\" translate=\"no\" href=\"#!/url=./cpp_ref/class_m_fn_dependency_node.html#a62ffa50a6a1c929dc606648269f1d0fe\">MFnDependencyNode</a>\n\
, <a class=\"el\" translate=\"no\" href=\"#!/url=./cpp_ref/class_m_node_class.html#a9a5cad4380acb3f63fffaf9bc051e158\">MNodeClass</a>\n\
</li>\n\
<li>hasAttributeBeenModified()\n\
: <a class=\"el\" translate=\"no\" href=\"#!/url=./cpp_ref/class_m_px_g_p_u_deformer.html#abb7238dc52214c1b33a9c4000c1f237e\">MPxGPUDeformer</a>\n\
</li>\n\
<li>hasBlindData()\n\
: <a class=\"el\" translate=\"no\" href=\"#!/url=./cpp_ref/class_m_fn_mesh.html#a5e98180f88babf1b2d45c7c16d8ae286\">MFnMesh</a>\n\
</li>\n\
<li>hasBlindDataComponentId()\n\
: <a class=\"el\" translate=\"no\" href=\"#!/url=./cpp_ref/class_m_fn_mesh.html#a487f967198f594a077152f3999839726\">MFnMesh</a>\n\
</li>\n\
<li>hasCategory()\n\
: <a class=\"el\" translate=\"no\" href=\"#!/url=./cpp_ref/class_m_fn_attribute.html#a6a3eddfcbd9aa2a566e9d92ddf7d058b\">MFnAttribute</a>\n\
</li>\n\
<li>hasChanged()\n\
: <a class=\"el\" translate=\"no\" href=\"#!/url=./cpp_ref/class_m_uniform_parameter.html#a9d4d257e5bb7e85eb9fdeca499dc9361\">MUniformParameter</a>\n\
</li>\n\
<li>hasChild()\n\
: <a class=\"el\" translate=\"no\" href=\"#!/url=./cpp_ref/class_m_fn_dag_node.html#a59dfb5113547bc4cb73fb1c030d3c6b9\">MFnDagNode</a>\n\
</li>\n\
<li>hasChildren()\n\
: <a class=\"el\" translate=\"no\" href=\"#!/url=./cpp_ref/class_m_device_channel.html#a01bb24bf55c9a7237fa7e1f7f6ba6ae8\">MDeviceChannel</a>\n\
</li>\n\
<li>hasColor()\n\
: <a class=\"el\" translate=\"no\" href=\"#!/url=./cpp_ref/class_m_external_drop_data.html#a67b75e4e15ca0553f3899e159a1a2c46\">MExternalDropData</a>\n\
, <a class=\"el\" translate=\"no\" href=\"#!/url=./cpp_ref/class_m_it_mesh_face_vertex.html#a3157a6f859832213366a320b831cfc32\">MItMeshFaceVertex</a>\n\
, <a class=\"el\" translate=\"no\" href=\"#!/url=./cpp_ref/class_m_it_mesh_polygon.html#a3157a6f859832213366a320b831cfc32\">MItMeshPolygon</a>\n\
, <a class=\"el\" translate=\"no\" href=\"#!/url=./cpp_ref/class_m_it_mesh_vertex.html#a3157a6f859832213366a320b831cfc32\">MItMeshVertex</a>\n\
</li>\n\
<li>hasColorChannels()\n\
: <a class=\"el\" translate=\"no\" href=\"#!/url=./cpp_ref/class_m_fn_mesh.html#a0e34a918fc6c4c6eb697fc029610bf97\">MFnMesh</a>\n\
</li>\n\
<li>hasComponents()\n\
: <a class=\"el\" translate=\"no\" href=\"#!/url=./cpp_ref/class_m_it_selection_list.html#a92d079398d0738af52f0ef1cead18c0e\">MItSelectionList</a>\n\
</li>\n\
<li>hasCustomResourceHandle()\n\
: <a class=\"el\" translate=\"no\" href=\"#!/url=./cpp_ref/class_m_h_w_render_1_1_m_index_buffer.html#aa8d1538f7339521cd85c52d140d0bc6c\">MIndexBuffer</a>\n\
, <a class=\"el\" translate=\"no\" href=\"#!/url=./cpp_ref/class_m_h_w_render_1_1_m_vertex_buffer.html#aa8d1538f7339521cd85c52d140d0bc6c\">MVertexBuffer</a>\n\
</li>\n\
<li>hasData()\n\
: <a class=\"el\" translate=\"no\" href=\"#!/url=./cpp_ref/classadsk_1_1_data_1_1_handle.html#a0effbd4cf91891700ac41e86defe4aa6\">Handle</a>\n\
</li>\n\
<li>hasEditData()\n\
: <a class=\"el\" translate=\"no\" href=\"#!/url=./cpp_ref/class_m_edit.html#acb98fda2bb8e8e010e6bf5bfb4480bee\">MEdit</a>\n\
</li>\n\
<li>hasElement()\n\
: <a class=\"el\" translate=\"no\" href=\"#!/url=./cpp_ref/classadsk_1_1_data_1_1_stream.html#ad0e96cf98bea11b307a25d881e7dc34a\">Stream</a>\n\
</li>\n\
<li>hasEmission()\n\
: <a class=\"el\" translate=\"no\" href=\"#!/url=./cpp_ref/class_m_fn_particle_system.html#a15ec61d7413d4361349f54e291e987a3\">MFnParticleSystem</a>\n\
</li>\n\
<li>hasFn()\n\
: <a class=\"el\" translate=\"no\" href=\"#!/url=./cpp_ref/class_m_dag_path.html#abea5b1e5057d0e1088877be2573be47b\">MDagPath</a>\n\
, <a class=\"el\" translate=\"no\" href=\"#!/url=./cpp_ref/class_m_object.html#af0af77f14f96d1134fb8e8e60dc7e420\">MObject</a>\n\
</li>\n\
<li>hasFormat()\n\
: <a class=\"el\" translate=\"no\" href=\"#!/url=./cpp_ref/class_m_external_drop_data.html#a619eb9cf0e990ba7a9ac586223f22896\">MExternalDropData</a>\n\
</li>\n\
<li>hasFragment()\n\
: <a class=\"el\" translate=\"no\" href=\"#!/url=./cpp_ref/class_m_h_w_render_1_1_m_fragment_manager.html#af82d71b3a71c8752d51d0a9cb6081877\">MFragmentManager</a>\n\
</li>\n\
<li>hashCode()\n\
: <a class=\"el\" translate=\"no\" href=\"#!/url=./cpp_ref/class_m_object_handle.html#a23a0c64be863c23d2cf8214243d59bb1\">MObjectHandle</a>\n\
</li>\n\
<li>hasHistoryOnCreate()\n\
: <a class=\"el\" translate=\"no\" href=\"#!/url=./cpp_ref/class_m_fn_nurbs_curve.html#a113552b2ae2b2ed9cd29916998b100b9\">MFnNurbsCurve</a>\n\
, <a class=\"el\" translate=\"no\" href=\"#!/url=./cpp_ref/class_m_fn_nurbs_surface.html#a113552b2ae2b2ed9cd29916998b100b9\">MFnNurbsSurface</a>\n\
, <a class=\"el\" translate=\"no\" href=\"#!/url=./cpp_ref/class_m_it_curve_c_v.html#a113552b2ae2b2ed9cd29916998b100b9\">MItCurveCV</a>\n\
, <a class=\"el\" translate=\"no\" href=\"#!/url=./cpp_ref/class_m_it_surface_c_v.html#a113552b2ae2b2ed9cd29916998b100b9\">MItSurfaceCV</a>\n\
</li>\n\
<li>hasHtml()\n\
: <a class=\"el\" translate=\"no\" href=\"#!/url=./cpp_ref/class_m_external_drop_data.html#ad5cddcd35479a43dab83925e88051424\">MExternalDropData</a>\n\
</li>\n\
<li>hasImage()\n\
: <a class=\"el\" translate=\"no\" href=\"#!/url=./cpp_ref/class_m_external_drop_data.html#a332244bfe31a90eac3fc44b88e45b3d4\">MExternalDropData</a>\n\
</li>\n\
<li>hasIndex()\n\
: <a class=\"el\" translate=\"no\" href=\"#!/url=./cpp_ref/class_m_curve_attribute.html#a0d0e7910e9fa55e0bedd210e7e2764b8\">MCurveAttribute</a>\n\
, <a class=\"el\" translate=\"no\" href=\"#!/url=./cpp_ref/class_m_ramp_attribute.html#a0d0e7910e9fa55e0bedd210e7e2764b8\">MRampAttribute</a>\n\
</li>\n\
<li>hasItem()\n\
: <a class=\"el\" translate=\"no\" href=\"#!/url=./cpp_ref/class_m_selection_list.html#a8ccfcfbdcebf501f9667ee617419892c\">MSelectionList</a>\n\
</li>\n\
<li>hasItemPartly()\n\
: <a class=\"el\" translate=\"no\" href=\"#!/url=./cpp_ref/class_m_selection_list.html#a425aec173c651f6ae8c71e8d13809e44\">MSelectionList</a>\n\
</li>\n\
<li>hasJointLimitSupport()\n\
: <a class=\"el\" translate=\"no\" href=\"#!/url=./cpp_ref/class_m_px_ik_solver.html#a2bbc48ac2262d20cdade5452bb3b5f34\">MPxIkSolver</a>\n\
, <a class=\"el\" translate=\"no\" href=\"#!/url=./cpp_ref/class_m_px_ik_solver_node.html#a2bbc48ac2262d20cdade5452bb3b5f34\">MPxIkSolverNode</a>\n\
</li>\n\
<li>hasLifespan()\n\
: <a class=\"el\" translate=\"no\" href=\"#!/url=./cpp_ref/class_m_fn_particle_system.html#aa50794c1b60714cb91108698530a9c3a\">MFnParticleSystem</a>\n\
</li>\n\
<li>hasLowerBound()\n\
: <a class=\"el\" translate=\"no\" href=\"#!/url=./cpp_ref/class_m_attribute_index.html#a6ccae4069bed342bc3099a27e95f1fbb\">MAttributeIndex</a>\n\
</li>\n\
<li>hasMax()\n\
: <a class=\"el\" translate=\"no\" href=\"#!/url=./cpp_ref/class_m_fn_numeric_attribute.html#a5b1ba68393fede3d8d2078add520f168\">MFnNumericAttribute</a>\n\
, <a class=\"el\" translate=\"no\" href=\"#!/url=./cpp_ref/class_m_fn_unit_attribute.html#a5b1ba68393fede3d8d2078add520f168\">MFnUnitAttribute</a>\n\
</li>\n\
<li>hasMin()\n\
: <a class=\"el\" translate=\"no\" href=\"#!/url=./cpp_ref/class_m_fn_numeric_attribute.html#a1635117fc1cd56e612895c54a0996491\">MFnNumericAttribute</a>\n\
, <a class=\"el\" translate=\"no\" href=\"#!/url=./cpp_ref/class_m_fn_unit_attribute.html#a1635117fc1cd56e612895c54a0996491\">MFnUnitAttribute</a>\n\
</li>\n\
<li>hasMipMaps()\n\
: <a class=\"el\" translate=\"no\" href=\"#!/url=./cpp_ref/class_m_image_file_info.html#a17713e581792d770f3b903ef8da67bd0\">MImageFileInfo</a>\n\
</li>\n\
<li>hasNormals()\n\
: <a class=\"el\" translate=\"no\" href=\"#!/url=./cpp_ref/class_m_px_geometry_iterator.html#aaef566ca5e22f5d67edd0252fc82c0ce\">MPxGeometryIterator</a>\n\
</li>\n\
<li>hasObj()\n\
: <a class=\"el\" translate=\"no\" href=\"#!/url=./cpp_ref/class_m_fn_base.html#a5f2479ff74d96fda6f7cd31ee4c1c463\">MFnBase</a>\n\
</li>\n\
<li>hasObjectGroup()\n\
: <a class=\"el\" translate=\"no\" href=\"#!/url=./cpp_ref/class_m_fn_geometry_data.html#a4a1d4bc4a74c489154c633334c18f8b3\">MFnGeometryData</a>\n\
</li>\n\
<li>hasOpacity()\n\
: <a class=\"el\" translate=\"no\" href=\"#!/url=./cpp_ref/class_m_fn_particle_system.html#a6f3a1e6f560c1f66fa4b1c8219a80665\">MFnParticleSystem</a>\n\
</li>\n\
<li>hasParent()\n\
: <a class=\"el\" translate=\"no\" href=\"#!/url=./cpp_ref/class_m_fn_dag_node.html#ae44174b85fc62850f863823a9f9f418f\">MFnDagNode</a>\n\
</li>\n\
<li>hasPoints()\n\
: <a class=\"el\" translate=\"no\" href=\"#!/url=./cpp_ref/class_m_px_geometry_iterator.html#ac3fc4ac8c80b5bf64c0bf095d7fde94b\">MPxGeometryIterator</a>\n\
</li>\n\
<li>hasRange()\n\
: <a class=\"el\" translate=\"no\" href=\"#!/url=./cpp_ref/class_m_attribute_index.html#ae359bc9b15542342f2eb06887e8a72b5\">MAttributeIndex</a>\n\
</li>\n\
<li>hasRenderer()\n\
: <a class=\"el\" translate=\"no\" href=\"#!/url=./cpp_ref/class_m_render_profile.html#a03c41780d4785ce5e234fb4ae23a3aa8\">MRenderProfile</a>\n\
</li>\n\
<li>hasRestrictions()\n\
: <a class=\"el\" translate=\"no\" href=\"#!/url=./cpp_ref/class_m_fn_set.html#a7c9670151c016b109142bbfae0e1cc1e\">MFnSet</a>\n\
</li>\n\
<li>hasRgb()\n\
: <a class=\"el\" translate=\"no\" href=\"#!/url=./cpp_ref/class_m_fn_particle_system.html#a2ac98be3afd97156e69ddc06fb579b37\">MFnParticleSystem</a>\n\
</li>\n\
<li>hasSamePerspective()\n\
: <a class=\"el\" translate=\"no\" href=\"#!/url=./cpp_ref/class_m_fn_camera.html#acdf883e2d3792aff8dcebdfa09db3f74\">MFnCamera</a>\n\
</li>\n\
<li>hasShaderOverride()\n\
: <a class=\"el\" translate=\"no\" href=\"#!/url=./cpp_ref/class_m_h_w_render_1_1_m_pass_context.html#a54cb1ff5e4a10ffc51cb05ddab8e69ab\">MPassContext</a>\n\
</li>\n\
<li>hasSoftMax()\n\
: <a class=\"el\" translate=\"no\" href=\"#!/url=./cpp_ref/class_m_fn_numeric_attribute.html#a563766a920e62cba567fdc71af3be8e4\">MFnNumericAttribute</a>\n\
, <a class=\"el\" translate=\"no\" href=\"#!/url=./cpp_ref/class_m_fn_unit_attribute.html#a563766a920e62cba567fdc71af3be8e4\">MFnUnitAttribute</a>\n\
</li>\n\
<li>hasSoftMin()\n\
: <a class=\"el\" translate=\"no\" href=\"#!/url=./cpp_ref/class_m_fn_numeric_attribute.html#a917aaf6e8026c32ca2f402c51e531b69\">MFnNumericAttribute</a>\n\
, <a class=\"el\" translate=\"no\" href=\"#!/url=./cpp_ref/class_m_fn_unit_attribute.html#a917aaf6e8026c32ca2f402c51e531b69\">MFnUnitAttribute</a>\n\
</li>\n\
<li>hasStereoBufferSupport()\n\
: <a class=\"el\" translate=\"no\" href=\"#!/url=./cpp_ref/class_m_px3d_model_view.html#a424ff8bb7030827801676f3a90928863\">MPx3dModelView</a>\n\
</li>\n\
<li>hasSyntax()\n\
: <a class=\"el\" translate=\"no\" href=\"#!/url=./cpp_ref/class_m_px_command.html#a8121b9d1e18f95acf1f634e29e3b3d54\">MPxCommand</a>\n\
</li>\n\
<li>hasText()\n\
: <a class=\"el\" translate=\"no\" href=\"#!/url=./cpp_ref/class_m_external_drop_data.html#a417bd36d17ed80a5a4047e86b30213fe\">MExternalDropData</a>\n\
</li>\n\
<li>hasTransparency\n\
: <a class=\"el\" translate=\"no\" href=\"#!/url=./cpp_ref/class_material_input_data.html#a2bf18ac58248c436035ff99048b84d45\">MaterialInputData</a>\n\
, <a class=\"el\" translate=\"no\" href=\"#!/url=./cpp_ref/class_m_px_hw_shader_node.html#a48045e919e9cafe71b7883de1c4875de\">MPxHwShaderNode</a>\n\
</li>\n\
<li>hasTransparentAlpha()\n\
: <a class=\"el\" translate=\"no\" href=\"#!/url=./cpp_ref/class_m_h_w_render_1_1_m_texture.html#a8445d17a0417192a35264425fae85515\">MTexture</a>\n\
</li>\n\
<li>hasUIDrawables()\n\
: <a class=\"el\" translate=\"no\" href=\"#!/url=./cpp_ref/class_m_h_w_render_1_1_m_h_u_d_render.html#a05c70618c28196399681a784a3686b50\">MHUDRender</a>\n\
, <a class=\"el\" translate=\"no\" href=\"#!/url=./cpp_ref/class_m_h_w_render_1_1_m_px_draw_override.html#a05c70618c28196399681a784a3686b50\">MPxDrawOverride</a>\n\
, <a class=\"el\" translate=\"no\" href=\"#!/url=./cpp_ref/class_m_h_w_render_1_1_m_px_geometry_override.html#a05c70618c28196399681a784a3686b50\">MPxGeometryOverride</a>\n\
, <a class=\"el\" translate=\"no\" href=\"#!/url=./cpp_ref/class_m_h_w_render_1_1_m_px_sub_scene_override.html#a05c70618c28196399681a784a3686b50\">MPxSubSceneOverride</a>\n\
, <a class=\"el\" translate=\"no\" href=\"#!/url=./cpp_ref/class_m_h_w_render_1_1_m_scene_render.html#a05c70618c28196399681a784a3686b50\">MSceneRender</a>\n\
, <a class=\"el\" translate=\"no\" href=\"#!/url=./cpp_ref/class_m_h_w_render_1_1_m_user_render_operation.html#a05c70618c28196399681a784a3686b50\">MUserRenderOperation</a>\n\
</li>\n\
<li>hasUniqueName()\n\
: <a class=\"el\" translate=\"no\" href=\"#!/url=./cpp_ref/class_m_fn_dependency_node.html#ae482e56641ea79c1656a51fcd548f9aa\">MFnDependencyNode</a>\n\
</li>\n\
<li>hasUniqueSolution()\n\
: <a class=\"el\" translate=\"no\" href=\"#!/url=./cpp_ref/class_m_px_ik_solver.html#a0580f930629a3e9de07da84307fb5c8f\">MPxIkSolver</a>\n\
, <a class=\"el\" translate=\"no\" href=\"#!/url=./cpp_ref/class_m_px_ik_solver_node.html#a0580f930629a3e9de07da84307fb5c8f\">MPxIkSolverNode</a>\n\
</li>\n\
<li>hasUpperBound()\n\
: <a class=\"el\" translate=\"no\" href=\"#!/url=./cpp_ref/class_m_attribute_index.html#a91fe8323a865ca2f0789be32ede111b3\">MAttributeIndex</a>\n\
</li>\n\
<li>hasUrls()\n\
: <a class=\"el\" translate=\"no\" href=\"#!/url=./cpp_ref/class_m_external_drop_data.html#ab4e7d57e02210616bb1b794ab26e5a6d\">MExternalDropData</a>\n\
</li>\n\
<li>hasUVs()\n\
: <a class=\"el\" translate=\"no\" href=\"#!/url=./cpp_ref/class_m_it_mesh_face_vertex.html#a19dedba03566fc8ee19e177939c0ca90\">MItMeshFaceVertex</a>\n\
, <a class=\"el\" translate=\"no\" href=\"#!/url=./cpp_ref/class_m_it_mesh_polygon.html#aa93237aec198ded879d4bd0853b7bc39\">MItMeshPolygon</a>\n\
</li>\n\
<li>hasValidDynamics2dTexture()\n\
: <a class=\"el\" translate=\"no\" href=\"#!/url=./cpp_ref/class_m_dynamics_util.html#a3a86cde27a1d7012d202b9565a61c8ac\">MDynamicsUtil</a>\n\
</li>\n\
<li>hasValidEmission2dTexture()\n\
: <a class=\"el\" translate=\"no\" href=\"#!/url=./cpp_ref/class_m_px_emitter_node.html#a5916214b5f88b327bc284baa0643be45\">MPxEmitterNode</a>\n\
</li>\n\
<li>hasValidRange()\n\
: <a class=\"el\" translate=\"no\" href=\"#!/url=./cpp_ref/class_m_attribute_index.html#a5ba05edf364151e3a07513d0f19dc5d9\">MAttributeIndex</a>\n\
</li>\n\
<li>hasValidTriangulation()\n\
: <a class=\"el\" translate=\"no\" href=\"#!/url=./cpp_ref/class_m_it_mesh_polygon.html#accb6e05661526f9253c331b4f10f41eb\">MItMeshPolygon</a>\n\
</li>\n\
<li>hasVectorFlags()\n\
: <a class=\"el\" translate=\"no\" href=\"#!/url=./cpp_ref/class_m_px_constraint_command.html#a53eb02ee411b5622c2b4e978be0eeff4\">MPxConstraintCommand</a>\n\
</li>\n\
<li>hasWeights()\n\
: <a class=\"el\" translate=\"no\" href=\"#!/url=./cpp_ref/class_m_fn_component.html#a167255d70b17aa49ebd60a982d3e7624\">MFnComponent</a>\n\
</li>\n\
<li>hasZeroAlpha()\n\
: <a class=\"el\" translate=\"no\" href=\"#!/url=./cpp_ref/class_m_h_w_render_1_1_m_texture.html#a2e6ca6b3fc3a2101cc12bfe956d66843\">MTexture</a>\n\
</li>\n\
<li>haveDepth()\n\
: <a class=\"el\" translate=\"no\" href=\"#!/url=./cpp_ref/class_m_image.html#a80e46aa14cc7068b4b802d27f5e08c0d\">MImage</a>\n\
</li>\n\
<li>haveNamespaceSupport()\n\
: <a class=\"el\" translate=\"no\" href=\"#!/url=./cpp_ref/class_m_px_file_translator.html#afca676f2056a1a37aac4bf499d82b793\">MPxFileTranslator</a>\n\
</li>\n\
<li>haveReadMethod()\n\
: <a class=\"el\" translate=\"no\" href=\"#!/url=./cpp_ref/class_m_px_file_translator.html#a5bdde07c444bcc490367efe4f3424ade\">MPxFileTranslator</a>\n\
, <a class=\"el\" translate=\"no\" href=\"#!/url=./cpp_ref/class_m_px_maya_ascii_filter.html#a5bdde07c444bcc490367efe4f3424ade\">MPxMayaAsciiFilter</a>\n\
</li>\n\
<li>haveReferenceMethod()\n\
: <a class=\"el\" translate=\"no\" href=\"#!/url=./cpp_ref/class_m_px_file_translator.html#a43ef24125f987f9f3a27639afe4b6ffc\">MPxFileTranslator</a>\n\
</li>\n\
<li>haveWriteMethod()\n\
: <a class=\"el\" translate=\"no\" href=\"#!/url=./cpp_ref/class_m_px_file_translator.html#ab58322cfe1d3437d3fc627be3a49121c\">MPxFileTranslator</a>\n\
, <a class=\"el\" translate=\"no\" href=\"#!/url=./cpp_ref/class_m_px_maya_ascii_filter.html#ab58322cfe1d3437d3fc627be3a49121c\">MPxMayaAsciiFilter</a>\n\
</li>\n\
<li>height()\n\
: <a class=\"el\" translate=\"no\" href=\"#!/url=./cpp_ref/class_m_bounding_box.html#afa7750092d5dcf402c83fb5adba91453\">MBoundingBox</a>\n\
, <a class=\"el\" translate=\"no\" href=\"#!/url=./cpp_ref/class_m_common_render_settings_data.html#ab2e78c61905b4419fcc7b4cfc500fe85\">MCommonRenderSettingsData</a>\n\
, <a class=\"el\" translate=\"no\" href=\"#!/url=./cpp_ref/class_m_h_w_render_1_1_m_render_target_description.html#aa420a28166e708e3f8b9ecc8e527fc09\">MRenderTargetDescription</a>\n\
, <a class=\"el\" translate=\"no\" href=\"#!/url=./cpp_ref/class_m_image_file_info.html#ae7959bfb381f7272887c88bfa42be127\">MImageFileInfo</a>\n\
, <a class=\"el\" translate=\"no\" href=\"#!/url=./cpp_ref/class_m_px_image_plane.html#aa1eceed1f6245f74711eee9c0fbbf38a\">MPxImagePlane</a>\n\
, <a class=\"el\" translate=\"no\" href=\"#!/url=./cpp_ref/class_m_px_renderer_1_1_refresh_params.html#ab2e78c61905b4419fcc7b4cfc500fe85\">MPxRenderer::RefreshParams</a>\n\
, <a class=\"el\" translate=\"no\" href=\"#!/url=./cpp_ref/class_m_rendering_info.html#aa420a28166e708e3f8b9ecc8e527fc09\">MRenderingInfo</a>\n\
, <a class=\"el\" translate=\"no\" href=\"#!/url=./cpp_ref/class_m_render_target.html#aa420a28166e708e3f8b9ecc8e527fc09\">MRenderTarget</a>\n\
</li>\n\
<li>helpStateHasChanged()\n\
: <a class=\"el\" translate=\"no\" href=\"#!/url=./cpp_ref/class_m_px_context.html#aface6bd7d2f5f7670a2a5d41ca7891d9\">MPxContext</a>\n\
, <a class=\"el\" translate=\"no\" href=\"#!/url=./cpp_ref/class_m_px_selection_context.html#a55157871a24dfac85b49b3fb35c92293\">MPxSelectionContext</a>\n\
</li>\n\
<li>hemisphereCoverage()\n\
: <a class=\"el\" translate=\"no\" href=\"#!/url=./cpp_ref/class_m_render_util.html#acd5237ebe21e824d53e2c021dd93d029\">MRenderUtil</a>\n\
</li>\n\
<li>hideSource()\n\
: <a class=\"el\" translate=\"no\" href=\"#!/url=./cpp_ref/class_m_fn_lambert_shader.html#ae735af8c3f57c3a53dda52c0415082fd\">MFnLambertShader</a>\n\
</li>\n\
<li>highestPriority()\n\
: <a class=\"el\" translate=\"no\" href=\"#!/url=./cpp_ref/class_m_select_info.html#a85b6776e32ca776eb106498f9c5cdbb1\">MSelectInfo</a>\n\
</li>\n\
<li>highlightSize()\n\
: <a class=\"el\" translate=\"no\" href=\"#!/url=./cpp_ref/class_m_fn_phong_e_shader.html#a3064933823deb7f675b4315dd7a7e36a\">MFnPhongEShader</a>\n\
</li>\n\
<li>hikJointName()\n\
: <a class=\"el\" translate=\"no\" href=\"#!/url=./cpp_ref/class_m_fn_ik_joint.html#a10915465bf61324638e009e022882976\">MFnIkJoint</a>\n\
</li>\n\
<li>hiliteColor()\n\
: <a class=\"el\" translate=\"no\" href=\"#!/url=./cpp_ref/class_m3d_view.html#ada31e22c2333ef13ec19f0b94a4274f7\">M3dView</a>\n\
, <a class=\"el\" translate=\"no\" href=\"#!/url=./cpp_ref/class_m_fn_dag_node.html#ab4b5280533ebe636e26701929b8cb916\">MFnDagNode</a>\n\
</li>\n\
<li>historyLocation()\n\
: <a class=\"el\" translate=\"no\" href=\"#!/url=./cpp_ref/class_m_fn_blend_shape_deformer.html#afb813583370f58bed4a8500a8b21cf10\">MFnBlendShapeDeformer</a>\n\
</li>\n\
<li>HistoryLocation\n\
: <a class=\"el\" translate=\"no\" href=\"#!/url=./cpp_ref/class_m_fn_blend_shape_deformer.html#aecd5328f224e56ed7679b090606f222e\">MFnBlendShapeDeformer</a>\n\
</li>\n\
<li>holdGPUMemory()\n\
: <a class=\"el\" translate=\"no\" href=\"#!/url=./cpp_ref/class_m_h_w_render_1_1_m_renderer.html#ab4c1def24e934781098b800fd8b16cdd\">MRenderer</a>\n\
</li>\n\
<li>holdingShape()\n\
: <a class=\"el\" translate=\"no\" href=\"#!/url=./cpp_ref/class_m_fn_wire_deformer.html#a4a7fed769a9cfe5492c94d474a767c5e\">MFnWireDeformer</a>\n\
</li>\n\
<li>homogenize()\n\
: <a class=\"el\" translate=\"no\" href=\"#!/url=./cpp_ref/class_m_float_matrix.html#ab406586355c06ec347a76f50038657b2\">MFloatMatrix</a>\n\
, <a class=\"el\" translate=\"no\" href=\"#!/url=./cpp_ref/class_m_float_point.html#a2f1b60514cac1dfff5318829824060b5\">MFloatPoint</a>\n\
, <a class=\"el\" translate=\"no\" href=\"#!/url=./cpp_ref/class_m_matrix.html#afd856dfc5130cd3979c618e85c29674a\">MMatrix</a>\n\
, <a class=\"el\" translate=\"no\" href=\"#!/url=./cpp_ref/class_m_point.html#a038c747ad8e5343c8e6cc563b9e431d4\">MPoint</a>\n\
</li>\n\
<li>horizontalFieldOfView()\n\
: <a class=\"el\" translate=\"no\" href=\"#!/url=./cpp_ref/class_m_fn_camera.html#ae4fb94d1931ac252c18144f896613be9\">MFnCamera</a>\n\
</li>\n\
<li>horizontalFilmAperture()\n\
: <a class=\"el\" translate=\"no\" href=\"#!/url=./cpp_ref/class_m_fn_camera.html#a6293fe9fc06e610883e1c2fca2bfe947\">MFnCamera</a>\n\
</li>\n\
<li>horizontalFilmOffset()\n\
: <a class=\"el\" translate=\"no\" href=\"#!/url=./cpp_ref/class_m_fn_camera.html#ab16831a91859ae26a17854c86526bb3c\">MFnCamera</a>\n\
</li>\n\
<li>horizontalPan()\n\
: <a class=\"el\" translate=\"no\" href=\"#!/url=./cpp_ref/class_m_fn_camera.html#a38b24fc5c8958ab76b8f328c5208832a\">MFnCamera</a>\n\
</li>\n\
<li>horizontalRollPivot()\n\
: <a class=\"el\" translate=\"no\" href=\"#!/url=./cpp_ref/class_m_fn_camera.html#ae60eb212a3e1bf918faf18a0e8b7a218\">MFnCamera</a>\n\
</li>\n\
<li>horizontalShake()\n\
: <a class=\"el\" translate=\"no\" href=\"#!/url=./cpp_ref/class_m_fn_camera.html#a092f3f1e85df03a8476f9aa7dc4ffe5c\">MFnCamera</a>\n\
</li>\n\
<li>html()\n\
: <a class=\"el\" translate=\"no\" href=\"#!/url=./cpp_ref/class_m_external_drop_data.html#a90ededfca700facc9363867fab4643b9\">MExternalDropData</a>\n\
</li>\n\
<li>HwFogColor\n\
: <a class=\"el\" translate=\"no\" href=\"#!/url=./cpp_ref/struct_m_h_w_render_1_1_m_frame_context_1_1_hw_fog_params.html#a145d982480d906036f1de9abd0eb6333\">MFrameContext::HwFogParams</a>\n\
</li>\n\
<li>HwFogDensity\n\
: <a class=\"el\" translate=\"no\" href=\"#!/url=./cpp_ref/struct_m_h_w_render_1_1_m_frame_context_1_1_hw_fog_params.html#ab98580d56f9bccc16b7ab408055774e3\">MFrameContext::HwFogParams</a>\n\
</li>\n\
<li>HwFogEnabled\n\
: <a class=\"el\" translate=\"no\" href=\"#!/url=./cpp_ref/struct_m_h_w_render_1_1_m_frame_context_1_1_hw_fog_params.html#ae127077f7a1eda466f6837a3a1dc8277\">MFrameContext::HwFogParams</a>\n\
</li>\n\
<li>HwFogEnd\n\
: <a class=\"el\" translate=\"no\" href=\"#!/url=./cpp_ref/struct_m_h_w_render_1_1_m_frame_context_1_1_hw_fog_params.html#a2080b4810338eb92be71796f16e547d5\">MFrameContext::HwFogParams</a>\n\
</li>\n\
<li>HwFogMode\n\
: <a class=\"el\" translate=\"no\" href=\"#!/url=./cpp_ref/struct_m_h_w_render_1_1_m_frame_context_1_1_hw_fog_params.html#aa283269f91a1d2ddac0f0af5a485ff39\">MFrameContext::HwFogParams</a>\n\
</li>\n\
<li>HwFogStart\n\
: <a class=\"el\" translate=\"no\" href=\"#!/url=./cpp_ref/struct_m_h_w_render_1_1_m_frame_context_1_1_hw_fog_params.html#aab8b5ae43dd8979294e7a9e933be5934\">MFrameContext::HwFogParams</a>\n\
</li>\n\
</ul>\n\
</div><!-- contents -->\n\
</div><!-- doc-content -->\n\
          <div class=\"footer-block\"><a href=\"../html/ac.cmtdialog.htm\" class=\"comments-anchor\" target=\"_blank\"><span class=\"comments-link\">Please send us your comment about this page</span></a></div><br></div>\n\
   </div></div></body>\n\
</html>\n\
";