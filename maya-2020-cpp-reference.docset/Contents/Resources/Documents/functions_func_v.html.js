var topic = "<!-- saved from url=(0024)http://docs.autodesk.com -->\n\
<html>\n\
   <head><script src=\"../scripts/yepnope.1.5.4-min.js\" type=\"text/javascript\"></script><script src=\"../scripts/lib/jquery-1.11.1.min.js\" type=\"text/javascript\"></script>\n\
      <title>C++ API Reference: Class Members - Functions</title>\n\
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
    cpp_ref_adsk_ref_toc.initNavTree(\'functions_func_v.html\', tocPrefix);\n\
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
            <h1>C++ API Reference: Class Members - Functions</h1>\n\
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
      <li><a href=\"#!/url=./cpp_ref/functions_func.html#index__\"><span>_</span></a></li>\n\
      <li><a href=\"#!/url=./cpp_ref/functions_func_a.html#index_a\"><span>a</span></a></li>\n\
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
      <li><a href=\"#!/url=./cpp_ref/functions_func_u.html#index_u\"><span>u</span></a></li>\n\
      <li class=\"current\"><a href=\"#!/url=./cpp_ref/functions_func_v.html#index_v\"><span>v</span></a></li>\n\
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
<!-- window showing the filter options -->\n\
\n\
\n\
<!-- iframe showing the search results (closed by default) -->\n\
\n\
\n\
<div class=\"contents\">\n\
&#160;\n\
\n\
<h3><a class=\"anchor\" id=\"index_v\"></a>- v -</h3><ul>\n\
<li>valid()\n\
: <a class=\"el\" href=\"#!/url=./cpp_ref/classadsk_1_1_data_1_1_stream_iterator.html#a8d985300b138b6c5556ab17ed4df3b38\">StreamIterator</a>\n\
, <a class=\"el\" href=\"#!/url=./cpp_ref/classadsk_1_1_data_1_1_structure_iterator.html#a8d985300b138b6c5556ab17ed4df3b38\">StructureIterator</a>\n\
, <a class=\"el\" href=\"#!/url=./cpp_ref/class_m_uuid.html#a8d985300b138b6c5556ab17ed4df3b38\">MUuid</a>\n\
</li>\n\
<li>validateAndSetValue()\n\
: <a class=\"el\" href=\"#!/url=./cpp_ref/class_m_px_transform.html#ace2cd11d9d4eade0bcb57a2e341faedb\">MPxTransform</a>\n\
</li>\n\
<li>validateMetadata()\n\
: <a class=\"el\" href=\"#!/url=./cpp_ref/class_m_fn_dependency_node.html#a9a27d24e2641c379dad274e938cd33d2\">MFnDependencyNode</a>\n\
, <a class=\"el\" href=\"#!/url=./cpp_ref/class_m_fn_mesh.html#a9a27d24e2641c379dad274e938cd33d2\">MFnMesh</a>\n\
</li>\n\
<li>validateName()\n\
: <a class=\"el\" href=\"#!/url=./cpp_ref/class_m_namespace.html#a43a85d2eaf4ef2bf701cff29349a0c57\">MNamespace</a>\n\
</li>\n\
<li>validateNodeInGraph()\n\
: <a class=\"el\" href=\"#!/url=./cpp_ref/class_m_g_p_u_deformer_registration_info.html#af612f89c960cf432dc7be0d3f1be8d93\">MGPUDeformerRegistrationInfo</a>\n\
</li>\n\
<li>validateNodeValues()\n\
: <a class=\"el\" href=\"#!/url=./cpp_ref/class_m_g_p_u_deformer_registration_info.html#a5211d6842c7677f9730a9c76cb258568\">MGPUDeformerRegistrationInfo</a>\n\
</li>\n\
<li>validGeometrySelected()\n\
: <a class=\"el\" href=\"#!/url=./cpp_ref/class_m_template_selection_context.html#af4cb6fc3ac6f028b8f5ca9ab68ca24ee\">MTemplateSelectionContext&lt; ContextNameString, ContextClass, NodeType, ManipulatorClass, ManipulatorNodeName &gt;</a>\n\
</li>\n\
<li>value()\n\
: <a class=\"el\" href=\"#!/url=./cpp_ref/class_m_angle.html#a324b14b7506c6e4f47912161956974ed\">MAngle</a>\n\
, <a class=\"el\" href=\"#!/url=./cpp_ref/class_m_distance.html#a324b14b7506c6e4f47912161956974ed\">MDistance</a>\n\
, <a class=\"el\" href=\"#!/url=./cpp_ref/class_m_fn_anim_curve.html#a97dd3da7fd2ad2e846278ac58cac033a\">MFnAnimCurve</a>\n\
, <a class=\"el\" href=\"#!/url=./cpp_ref/class_m_fn_keyframe_delta_add_remove.html#aad64ed0b7eb49038e31bed441887d811\">MFnKeyframeDeltaAddRemove</a>\n\
, <a class=\"el\" href=\"#!/url=./cpp_ref/class_m_it_keyframe.html#ae296109663523c9b30a109eaf3f2d6c3\">MItKeyframe</a>\n\
, <a class=\"el\" href=\"#!/url=./cpp_ref/class_m_time.html#a324b14b7506c6e4f47912161956974ed\">MTime</a>\n\
</li>\n\
<li>valueChangeRequiresFragmentRebuild()\n\
: <a class=\"el\" href=\"#!/url=./cpp_ref/class_m_h_w_render_1_1_m_px_shading_node_override.html#a859e59bdb0ab6e568540ee26225a3087\">MPxShadingNodeOverride</a>\n\
</li>\n\
<li>valueInNoiseTable()\n\
: <a class=\"el\" href=\"#!/url=./cpp_ref/class_m_render_util.html#a9af45a5223ef6b235a67e607e30e7f84\">MRenderUtil</a>\n\
</li>\n\
<li>vectorArray()\n\
: <a class=\"el\" href=\"#!/url=./cpp_ref/class_m_fn_array_attrs_data.html#a1bea9ef76320f5f9d5bdf71635be8a5d\">MFnArrayAttrsData</a>\n\
</li>\n\
<li>velocity()\n\
: <a class=\"el\" href=\"#!/url=./cpp_ref/class_m_fn_particle_system.html#a1deadb4a18c4dbac28e088f7bdbb63b8\">MFnParticleSystem</a>\n\
</li>\n\
<li>velocityGridSizes()\n\
: <a class=\"el\" href=\"#!/url=./cpp_ref/class_m_fn_fluid.html#ad291fe310d9780b6707869f47c102747\">MFnFluid</a>\n\
</li>\n\
<li>vendor()\n\
: <a class=\"el\" href=\"#!/url=./cpp_ref/class_m_fn_plugin.html#a39b45b041872d748b2563da27b5fb13c\">MFnPlugin</a>\n\
</li>\n\
<li>version()\n\
: <a class=\"el\" href=\"#!/url=./cpp_ref/class_m_fn_plugin.html#a44c6e3c84511e9572b873261c93c01e8\">MFnPlugin</a>\n\
</li>\n\
<li>vertex()\n\
: <a class=\"el\" href=\"#!/url=./cpp_ref/class_m_dyn_swept_line.html#a77482686329e113cc33e7ca9a4ab5149\">MDynSweptLine</a>\n\
, <a class=\"el\" href=\"#!/url=./cpp_ref/class_m_dyn_swept_triangle.html#a77482686329e113cc33e7ca9a4ab5149\">MDynSweptTriangle</a>\n\
, <a class=\"el\" href=\"#!/url=./cpp_ref/class_m_it_mesh_vertex.html#a9fc72a4849f2abe1e833ffb3f2ce29ed\">MItMeshVertex</a>\n\
</li>\n\
<li>vertexAdjacentVertices()\n\
: <a class=\"el\" href=\"#!/url=./cpp_ref/class_m_fn_subd.html#a0eced16d4f536398608cc8e3e152791d\">MFnSubd</a>\n\
</li>\n\
<li>vertexBaseIndexFromVertexId()\n\
: <a class=\"el\" href=\"#!/url=./cpp_ref/class_m_fn_subd.html#a3b720aa03c9ccee0274f67058b405f1a\">MFnSubd</a>\n\
</li>\n\
<li>vertexBaseMeshAdd()\n\
: <a class=\"el\" href=\"#!/url=./cpp_ref/class_m_fn_subd.html#ac8c1e0d99611bbd8bad855e569b77719\">MFnSubd</a>\n\
</li>\n\
<li>vertexBaseMeshAddWithIndex()\n\
: <a class=\"el\" href=\"#!/url=./cpp_ref/class_m_fn_subd.html#a9b1a96128ff73eafff4e8543fc442fa5\">MFnSubd</a>\n\
</li>\n\
<li>vertexBaseMeshGet()\n\
: <a class=\"el\" href=\"#!/url=./cpp_ref/class_m_fn_subd.html#aa99d6d4034d66e6224c22d68473aa9e5\">MFnSubd</a>\n\
</li>\n\
<li>vertexBaseMeshGetWithId()\n\
: <a class=\"el\" href=\"#!/url=./cpp_ref/class_m_fn_subd.html#a1ed5914b868a67af099ebbc98db7dd04\">MFnSubd</a>\n\
</li>\n\
<li>vertexBaseMeshSet()\n\
: <a class=\"el\" href=\"#!/url=./cpp_ref/class_m_fn_subd.html#ad77d634342f664726e644f2b55214ec4\">MFnSubd</a>\n\
</li>\n\
<li>vertexBaseMeshSetWithId()\n\
: <a class=\"el\" href=\"#!/url=./cpp_ref/class_m_fn_subd.html#a168d901cb464b5ec91e66151b7a521c0\">MFnSubd</a>\n\
</li>\n\
<li>vertexBuffer()\n\
: <a class=\"el\" href=\"#!/url=./cpp_ref/class_m_h_w_render_1_1_m_geometry.html#a8dbf1ef3c0feaff25da15a60fe968a80\">MGeometry</a>\n\
</li>\n\
<li>vertexBufferCount()\n\
: <a class=\"el\" href=\"#!/url=./cpp_ref/class_m_h_w_render_1_1_m_geometry.html#a2d6ad76bad123c47513c5941e7493914\">MGeometry</a>\n\
</li>\n\
<li>vertexChildren()\n\
: <a class=\"el\" href=\"#!/url=./cpp_ref/class_m_fn_subd.html#ab6b378047ce5279ffd44dc3a4c188393\">MFnSubd</a>\n\
</li>\n\
<li>vertexCount()\n\
: <a class=\"el\" href=\"#!/url=./cpp_ref/class_m_fn_subd.html#a61717b8e67af939b1c1ce3352aeb911d\">MFnSubd</a>\n\
, <a class=\"el\" href=\"#!/url=./cpp_ref/class_m_h_w_render_1_1_m_geometry_extractor.html#a42db940e8d3c623487a4e2c34024751c\">MGeometryExtractor</a>\n\
, <a class=\"el\" href=\"#!/url=./cpp_ref/class_m_h_w_render_1_1_m_vertex_buffer.html#a42db940e8d3c623487a4e2c34024751c\">MVertexBuffer</a>\n\
</li>\n\
<li>vertexCreaseRelevant()\n\
: <a class=\"el\" href=\"#!/url=./cpp_ref/class_m_fn_subd.html#a57418e2ac7a5cfa38ec78879d88b4cda\">MFnSubd</a>\n\
</li>\n\
<li>vertexEditGet()\n\
: <a class=\"el\" href=\"#!/url=./cpp_ref/class_m_fn_subd.html#a98d890d1fd0209ffbaa590afc841e6d0\">MFnSubd</a>\n\
</li>\n\
<li>vertexEditsClearAllNonBase()\n\
: <a class=\"el\" href=\"#!/url=./cpp_ref/class_m_fn_subd.html#aa74db95f38b50cd3ed10946f4051594d\">MFnSubd</a>\n\
</li>\n\
<li>vertexEditSet()\n\
: <a class=\"el\" href=\"#!/url=./cpp_ref/class_m_fn_subd.html#af797007a24a0052406c1b800eb76c189\">MFnSubd</a>\n\
</li>\n\
<li>vertexEditsGetAllNonBase()\n\
: <a class=\"el\" href=\"#!/url=./cpp_ref/class_m_fn_subd.html#a9fa5b7a69c9054687951498e00f927cf\">MFnSubd</a>\n\
</li>\n\
<li>vertexEditsSetAllNonBase()\n\
: <a class=\"el\" href=\"#!/url=./cpp_ref/class_m_fn_subd.html#a1efefe55db2aa85ad759802b2d6e7c6e\">MFnSubd</a>\n\
</li>\n\
<li>vertexIdFromBaseVertexIndex()\n\
: <a class=\"el\" href=\"#!/url=./cpp_ref/class_m_fn_subd.html#ad6584f090f4f486c58e0d29b0daa5aed\">MFnSubd</a>\n\
</li>\n\
<li>vertexIncidentEdges()\n\
: <a class=\"el\" href=\"#!/url=./cpp_ref/class_m_fn_subd.html#a11dc199b99301b9691b6ef9f35d380f1\">MFnSubd</a>\n\
</li>\n\
<li>vertexIncidentPolygons()\n\
: <a class=\"el\" href=\"#!/url=./cpp_ref/class_m_fn_subd.html#a9df592ced9a6b458d5d7700edae65317\">MFnSubd</a>\n\
</li>\n\
<li>vertexIndex()\n\
: <a class=\"el\" href=\"#!/url=./cpp_ref/class_m_it_mesh_polygon.html#af5bcb0d1feb3c8e5d3d6bea80e5eb521\">MItMeshPolygon</a>\n\
</li>\n\
<li>vertexIsBoundary()\n\
: <a class=\"el\" href=\"#!/url=./cpp_ref/class_m_fn_subd.html#a8449fa9b343e7b61fee3d6b1c9482d68\">MFnSubd</a>\n\
</li>\n\
<li>vertexIsCreased()\n\
: <a class=\"el\" href=\"#!/url=./cpp_ref/class_m_fn_subd.html#a038a0afb727b35db27dad2ba520706e1\">MFnSubd</a>\n\
</li>\n\
<li>vertexIsValid()\n\
: <a class=\"el\" href=\"#!/url=./cpp_ref/class_m_fn_subd.html#a6cb3b4e52eabdd8bebe81d344d61777a\">MFnSubd</a>\n\
</li>\n\
<li>vertexNormal()\n\
: <a class=\"el\" href=\"#!/url=./cpp_ref/class_m_fn_subd.html#a4cbe9cfb1a3dfa5d11dc0ac4ad3a5898\">MFnSubd</a>\n\
</li>\n\
<li>vertexOffsetDirection()\n\
: <a class=\"el\" href=\"#!/url=./cpp_ref/class_m_px_surface_shape.html#a53b5c9f420f95352364d44af3cf1dc77\">MPxSurfaceShape</a>\n\
</li>\n\
<li>vertexPositionGet()\n\
: <a class=\"el\" href=\"#!/url=./cpp_ref/class_m_fn_subd.html#ae8f03ac7517d4d45b56283307ba8fe18\">MFnSubd</a>\n\
</li>\n\
<li>vertexPositionGetNoEdit()\n\
: <a class=\"el\" href=\"#!/url=./cpp_ref/class_m_fn_subd.html#ac0e321b7e01fa7c1d120b3d7a2375b22\">MFnSubd</a>\n\
</li>\n\
<li>vertexPositionSet()\n\
: <a class=\"el\" href=\"#!/url=./cpp_ref/class_m_fn_subd.html#a591325e4e8aa8f236e5aa2d6b0353bd9\">MFnSubd</a>\n\
</li>\n\
<li>vertexRequirements()\n\
: <a class=\"el\" href=\"#!/url=./cpp_ref/class_m_h_w_render_1_1_m_geometry_requirements.html#a960f411f65fde2d97da465a6b276d774\">MGeometryRequirements</a>\n\
</li>\n\
<li>vertexSetCrease()\n\
: <a class=\"el\" href=\"#!/url=./cpp_ref/class_m_fn_subd.html#a518f839cd45fe6f77415448c47e9bfc8\">MFnSubd</a>\n\
</li>\n\
<li>vertexValence()\n\
: <a class=\"el\" href=\"#!/url=./cpp_ref/class_m_fn_subd.html#af280d40ae9f56f5ffe036184302a0b61\">MFnSubd</a>\n\
</li>\n\
<li>verticalFieldOfView()\n\
: <a class=\"el\" href=\"#!/url=./cpp_ref/class_m_fn_camera.html#a2ec3adec20a16448070289a1b727d2f8\">MFnCamera</a>\n\
</li>\n\
<li>verticalFilmAperture()\n\
: <a class=\"el\" href=\"#!/url=./cpp_ref/class_m_fn_camera.html#a6be704cddfab6058c7fd85f8a7205c04\">MFnCamera</a>\n\
</li>\n\
<li>verticalFilmOffset()\n\
: <a class=\"el\" href=\"#!/url=./cpp_ref/class_m_fn_camera.html#a42c20961bf4d7f88686cffb8ab92650a\">MFnCamera</a>\n\
</li>\n\
<li>verticalFlip()\n\
: <a class=\"el\" href=\"#!/url=./cpp_ref/class_m_image.html#ac84d6f0011d9b722d845eaa97042bca1\">MImage</a>\n\
</li>\n\
<li>verticalPan()\n\
: <a class=\"el\" href=\"#!/url=./cpp_ref/class_m_fn_camera.html#abea13efa76fa58d766386af70f3fddb9\">MFnCamera</a>\n\
</li>\n\
<li>verticalRollPivot()\n\
: <a class=\"el\" href=\"#!/url=./cpp_ref/class_m_fn_camera.html#ab36311f23fa721511abeb9b77616f412\">MFnCamera</a>\n\
</li>\n\
<li>verticalShake()\n\
: <a class=\"el\" href=\"#!/url=./cpp_ref/class_m_fn_camera.html#a5dc3d0cbcfab5a3e4f0d23ee655cb0b8\">MFnCamera</a>\n\
</li>\n\
<li>vertId()\n\
: <a class=\"el\" href=\"#!/url=./cpp_ref/class_m_it_mesh_face_vertex.html#a98f370f8111dfeae9b073b9a2fd0056e\">MItMeshFaceVertex</a>\n\
</li>\n\
<li>view()\n\
: <a class=\"el\" href=\"#!/url=./cpp_ref/class_m_draw_info.html#aa9f517a1406259b47e15937aa3166678\">MDrawInfo</a>\n\
, <a class=\"el\" href=\"#!/url=./cpp_ref/class_m_draw_request.html#aa9f517a1406259b47e15937aa3166678\">MDrawRequest</a>\n\
, <a class=\"el\" href=\"#!/url=./cpp_ref/class_m_select_info.html#a77faa45e5c6d7563829fb86054d97dd2\">MSelectInfo</a>\n\
</li>\n\
<li>viewDirection()\n\
: <a class=\"el\" href=\"#!/url=./cpp_ref/class_m_fn_camera.html#a8607e1142843f35474557b5daa9489de\">MFnCamera</a>\n\
</li>\n\
<li>viewDirectionAlongNegZ()\n\
: <a class=\"el\" href=\"#!/url=./cpp_ref/class_m_h_w_render_1_1_m_draw_context.html#a6913c6eda7d76d313d3ea1a8fab5318d\">MDrawContext</a>\n\
</li>\n\
<li>viewFrame()\n\
: <a class=\"el\" href=\"#!/url=./cpp_ref/class_m_global.html#ac919b5ecda7f12015e94792c0712726f\">MGlobal</a>\n\
</li>\n\
<li>viewIsFiltered()\n\
: <a class=\"el\" href=\"#!/url=./cpp_ref/class_m3d_view.html#af6dcf7f299baab571323208e5634308c\">M3dView</a>\n\
, <a class=\"el\" href=\"#!/url=./cpp_ref/class_m_px3d_model_view.html#af6dcf7f299baab571323208e5634308c\">MPx3dModelView</a>\n\
</li>\n\
<li>viewMatrix()\n\
: <a class=\"el\" href=\"#!/url=./cpp_ref/class_m_geometry_list.html#a53c16ec1239d17f326fb7216ba8b91d8\">MGeometryList</a>\n\
, <a class=\"el\" href=\"#!/url=./cpp_ref/class_m_rendering_info.html#a53c16ec1239d17f326fb7216ba8b91d8\">MRenderingInfo</a>\n\
</li>\n\
<li>viewMode()\n\
: <a class=\"el\" href=\"#!/url=./cpp_ref/class_m_anim_control.html#a558a50e12bdd08fa17ef4cc92467847c\">MAnimControl</a>\n\
</li>\n\
<li>viewport()\n\
: <a class=\"el\" href=\"#!/url=./cpp_ref/class_m3d_view.html#abf198a1eaaec64f89430b2bb7cca959d\">M3dView</a>\n\
</li>\n\
<li>viewportRectangleOverride()\n\
: <a class=\"el\" href=\"#!/url=./cpp_ref/class_m_h_w_render_1_1_m_render_operation.html#a81e0450eebf8c3882754248f39af0062\">MRenderOperation</a>\n\
</li>\n\
<li>viewportToWorld()\n\
: <a class=\"el\" href=\"#!/url=./cpp_ref/class_m_h_w_render_1_1_m_frame_context.html#a0f5a55195c724b06707730d7d52d915c\">MFrameContext</a>\n\
</li>\n\
<li>viewRect()\n\
: <a class=\"el\" href=\"#!/url=./cpp_ref/class_m_px_tex_context.html#a2ea4042b54ecadba5c2c999829125fb0\">MPxTexContext</a>\n\
</li>\n\
<li>viewSelected()\n\
: <a class=\"el\" href=\"#!/url=./cpp_ref/class_m_px3d_model_view.html#aa4e3bd75da7094f7bfbfd3282a30fd7d\">MPx3dModelView</a>\n\
</li>\n\
<li>viewSelectedPrefix()\n\
: <a class=\"el\" href=\"#!/url=./cpp_ref/class_m3d_view.html#a16a4b139821ae1df616e954879dee99d\">M3dView</a>\n\
, <a class=\"el\" href=\"#!/url=./cpp_ref/class_m_px3d_model_view.html#a16a4b139821ae1df616e954879dee99d\">MPx3dModelView</a>\n\
</li>\n\
<li>viewSelectedSet()\n\
: <a class=\"el\" href=\"#!/url=./cpp_ref/class_m_px3d_model_view.html#a2602b3c791fd00ca7709a00586c7c122\">MPx3dModelView</a>\n\
</li>\n\
<li>viewToObjectSpace()\n\
: <a class=\"el\" href=\"#!/url=./cpp_ref/class_m3d_view.html#af2f24f9045f5235c13400b22960a838a\">M3dView</a>\n\
, <a class=\"el\" href=\"#!/url=./cpp_ref/class_m_px3d_model_view.html#af2f24f9045f5235c13400b22960a838a\">MPx3dModelView</a>\n\
</li>\n\
<li>viewToPort()\n\
: <a class=\"el\" href=\"#!/url=./cpp_ref/class_m_px_tex_context.html#ae78a122b7c9b6ff7deebe75a1f5692c2\">MPxTexContext</a>\n\
</li>\n\
<li>viewToWorld()\n\
: <a class=\"el\" href=\"#!/url=./cpp_ref/class_m3d_view.html#a0accd26d35f3e627c34f521085366476\">M3dView</a>\n\
, <a class=\"el\" href=\"#!/url=./cpp_ref/class_m_px3d_model_view.html#a0accd26d35f3e627c34f521085366476\">MPx3dModelView</a>\n\
</li>\n\
<li>viewType()\n\
: <a class=\"el\" href=\"#!/url=./cpp_ref/class_m_px3d_model_view.html#a85a933d7490e625a898783fba6ee8895\">MPx3dModelView</a>\n\
</li>\n\
<li>visibleInReflections()\n\
: <a class=\"el\" href=\"#!/url=./cpp_ref/class_m_fn_particle_system.html#a2581dcefa11b41a90e24365ef23328a3\">MFnParticleSystem</a>\n\
</li>\n\
<li>visibleInRefractions()\n\
: <a class=\"el\" href=\"#!/url=./cpp_ref/class_m_fn_particle_system.html#a5aa66c46a696b14bd611005f507e3200\">MFnParticleSystem</a>\n\
</li>\n\
<li>volumeLightDirection()\n\
: <a class=\"el\" href=\"#!/url=./cpp_ref/class_m_fn_volume_light.html#a992e292f4b8a33c5440f8b090b6c47e2\">MFnVolumeLight</a>\n\
</li>\n\
<li>volumePrimitiveBoundingBox()\n\
: <a class=\"el\" href=\"#!/url=./cpp_ref/class_m_px_emitter_node.html#af940a846640dfbfc317a8e5f2ea90b72\">MPxEmitterNode</a>\n\
</li>\n\
<li>volumePrimitiveDistanceFromAxis()\n\
: <a class=\"el\" href=\"#!/url=./cpp_ref/class_m_px_emitter_node.html#abe8e3aaa7170ba883491278b040b9940\">MPxEmitterNode</a>\n\
</li>\n\
<li>volumePrimitivePointInside()\n\
: <a class=\"el\" href=\"#!/url=./cpp_ref/class_m_px_emitter_node.html#ace479154322b4e2295dcf89fec1ed8fb\">MPxEmitterNode</a>\n\
</li>\n\
<li>voxelCenterPosition()\n\
: <a class=\"el\" href=\"#!/url=./cpp_ref/class_m_fn_fluid.html#aae1c7857fc26a2a1e40f8598f08f7c0b\">MFnFluid</a>\n\
</li>\n\
</ul>\n\
</div><!-- contents -->\n\
</div><!-- doc-content -->\n\
<!-- start footer part -->\n\
\n\
      <div class=\"footer-block\"><a href=\"../html/ac.cmtdialog.htm\" class=\"comments-anchor\" target=\"_blank\"><span class=\"comments-link\">Please send us your comment about this page</span></a></div></div>\n\
   </div></div></body>\n\
</html>\n\
";