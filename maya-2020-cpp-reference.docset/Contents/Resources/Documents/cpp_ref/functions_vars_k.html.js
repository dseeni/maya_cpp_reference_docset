var topic = "<!-- saved from url=(0024)http://docs.autodesk.com -->\n\
<html>\n\
   <head><script src=\"../scripts/yepnope.1.5.4-min.js\" type=\"text/javascript\"></script><script src=\"../scripts/lib/jquery-1.11.1.min.js\" type=\"text/javascript\"></script>\n\
      <title>C++ API Reference: Class Members - Variables</title>\n\
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
    cpp_ref_adsk_ref_toc.initNavTree(\'functions_vars_k.html\', tocPrefix);\n\
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
            <h1>C++ API Reference: Class Members - Variables</h1>\n\
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
      <li class=\"current\"><a href=\"#!/url=./cpp_ref/functions_vars_k.html#index_k\"><span>k</span></a></li>\n\
      <li><a href=\"#!/url=./cpp_ref/functions_vars_l.html#index_l\"><span>l</span></a></li>\n\
      <li><a href=\"#!/url=./cpp_ref/functions_vars_m.html#index_m\"><span>m</span></a></li>\n\
      <li><a href=\"#!/url=./cpp_ref/functions_vars_n.html#index_n\"><span>n</span></a></li>\n\
      <li><a href=\"#!/url=./cpp_ref/functions_vars_o.html#index_o\"><span>o</span></a></li>\n\
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
<!-- window showing the filter options -->\n\
\n\
\n\
<!-- iframe showing the search results (closed by default) -->\n\
\n\
\n\
<div class=\"contents\">\n\
&#160;\n\
\n\
<h3><a class=\"anchor\" id=\"index_k\"></a>- k -</h3><ul>\n\
<li>kBeginRenderSemantic\n\
: <a class=\"el\" href=\"#!/url=./cpp_ref/class_m_h_w_render_1_1_m_pass_context.html#ad934a68929f94a0353d31cf5037edebf\">MPassContext</a>\n\
</li>\n\
<li>kBeginSceneRenderSemantic\n\
: <a class=\"el\" href=\"#!/url=./cpp_ref/class_m_h_w_render_1_1_m_pass_context.html#ac014667cd1015f6ed2723003b2a8573e\">MPassContext</a>\n\
</li>\n\
<li>kCAT\n\
: <a class=\"el\" href=\"#!/url=./cpp_ref/class_m_iff_tag.html#aa58cfda20e5487b78cd304784c8e92d4\">MIffTag</a>\n\
</li>\n\
<li>kCAT4\n\
: <a class=\"el\" href=\"#!/url=./cpp_ref/class_m_iff_tag.html#a47738cf2bd746948c9d705a3694a5ba7\">MIffTag</a>\n\
</li>\n\
<li>kCAT8\n\
: <a class=\"el\" href=\"#!/url=./cpp_ref/class_m_iff_tag.html#a375df9bfb6100fef6bcd9aa09eacb739\">MIffTag</a>\n\
</li>\n\
<li>kColorPassSemantic\n\
: <a class=\"el\" href=\"#!/url=./cpp_ref/class_m_h_w_render_1_1_m_pass_context.html#a97ffcfc5e6c4bd512eab6727c58a9ae8\">MPassContext</a>\n\
</li>\n\
<li>kCullBackSemantic\n\
: <a class=\"el\" href=\"#!/url=./cpp_ref/class_m_h_w_render_1_1_m_pass_context.html#a99397c595d39f3decd87dfb85faf16a9\">MPassContext</a>\n\
</li>\n\
<li>kCullFrontSemantic\n\
: <a class=\"el\" href=\"#!/url=./cpp_ref/class_m_h_w_render_1_1_m_pass_context.html#a6715518f047f0e552636b74d311dfffd\">MPassContext</a>\n\
</li>\n\
<li>kDebugType\n\
: <a class=\"el\" href=\"#!/url=./cpp_ref/classadsk_1_1_data_1_1_handle.html#ad484bb7e6b11386d5999323336b85322\">Handle</a>\n\
</li>\n\
<li>kDefaultDataLocation\n\
: <a class=\"el\" href=\"#!/url=./cpp_ref/class_m_fn_plugin.html#a1c4a285d41daeacc2f1614839e570b99\">MFnPlugin</a>\n\
</li>\n\
<li>kDepthPassSemantic\n\
: <a class=\"el\" href=\"#!/url=./cpp_ref/class_m_h_w_render_1_1_m_pass_context.html#a67e11eaab888b31695e3bc19dc1c26ef\">MPassContext</a>\n\
</li>\n\
<li>kDOFPassSemantic\n\
: <a class=\"el\" href=\"#!/url=./cpp_ref/class_m_h_w_render_1_1_m_pass_context.html#a730755c181d1c16d7abde72c447fac04\">MPassContext</a>\n\
</li>\n\
<li>kEndRenderSemantic\n\
: <a class=\"el\" href=\"#!/url=./cpp_ref/class_m_h_w_render_1_1_m_pass_context.html#a780076ccaa2af55f6023c67eaed79fae\">MPassContext</a>\n\
</li>\n\
<li>kEndSceneRenderSemantic\n\
: <a class=\"el\" href=\"#!/url=./cpp_ref/class_m_h_w_render_1_1_m_pass_context.html#a73be45b2fb0d7ad17652f9a0f98baa67\">MPassContext</a>\n\
</li>\n\
<li>kExcludeAll\n\
: <a class=\"el\" href=\"#!/url=./cpp_ref/class_m_h_w_render_1_1_m_frame_context.html#a2f1b44d3d818ff1fe647a9dc80434822\">MFrameContext</a>\n\
</li>\n\
<li>kExcludeCameras\n\
: <a class=\"el\" href=\"#!/url=./cpp_ref/class_m_h_w_render_1_1_m_frame_context.html#a2265439f1faefdf8bf923c219f2624f0\">MFrameContext</a>\n\
</li>\n\
<li>kExcludeClipGhosts\n\
: <a class=\"el\" href=\"#!/url=./cpp_ref/class_m_h_w_render_1_1_m_frame_context.html#a832f6df0d8de787303036322a9d140dc\">MFrameContext</a>\n\
</li>\n\
<li>kExcludeControllers\n\
: <a class=\"el\" href=\"#!/url=./cpp_ref/class_m_h_w_render_1_1_m_frame_context.html#a36d333ac930b95c6d0009366d438a279\">MFrameContext</a>\n\
</li>\n\
<li>kExcludeCVs\n\
: <a class=\"el\" href=\"#!/url=./cpp_ref/class_m_h_w_render_1_1_m_frame_context.html#a770c98f88405bab8058d3e5ae6f43342\">MFrameContext</a>\n\
</li>\n\
<li>kExcludeDeformers\n\
: <a class=\"el\" href=\"#!/url=./cpp_ref/class_m_h_w_render_1_1_m_frame_context.html#ae33b4aa43f55270d0c71a445f30c1b7e\">MFrameContext</a>\n\
</li>\n\
<li>kExcludeDimensions\n\
: <a class=\"el\" href=\"#!/url=./cpp_ref/class_m_h_w_render_1_1_m_frame_context.html#a967528898bc4e0f010e11e364020d2e2\">MFrameContext</a>\n\
</li>\n\
<li>kExcludeDynamicConstraints\n\
: <a class=\"el\" href=\"#!/url=./cpp_ref/class_m_h_w_render_1_1_m_frame_context.html#a6b7c2852337fbfc59a6ef537d148ae55\">MFrameContext</a>\n\
</li>\n\
<li>kExcludeDynamics\n\
: <a class=\"el\" href=\"#!/url=./cpp_ref/class_m_h_w_render_1_1_m_frame_context.html#adedf9629d861ec88a4fe1f2f6f5ab92a\">MFrameContext</a>\n\
</li>\n\
<li>kExcludeFluids\n\
: <a class=\"el\" href=\"#!/url=./cpp_ref/class_m_h_w_render_1_1_m_frame_context.html#a1e98b44eb1e96485c94228b69163e618\">MFrameContext</a>\n\
</li>\n\
<li>kExcludeFollicles\n\
: <a class=\"el\" href=\"#!/url=./cpp_ref/class_m_h_w_render_1_1_m_frame_context.html#a38c360cee5e043155077cfee2c8ee432\">MFrameContext</a>\n\
</li>\n\
<li>kExcludeGreasePencils\n\
: <a class=\"el\" href=\"#!/url=./cpp_ref/class_m_h_w_render_1_1_m_frame_context.html#a11ec30d814c696a5c4c3565b7a2fe52d\">MFrameContext</a>\n\
</li>\n\
<li>kExcludeGrid\n\
: <a class=\"el\" href=\"#!/url=./cpp_ref/class_m_h_w_render_1_1_m_frame_context.html#ac952f34f07906371d0a7cf39a2b6e825\">MFrameContext</a>\n\
</li>\n\
<li>kExcludeHairSystems\n\
: <a class=\"el\" href=\"#!/url=./cpp_ref/class_m_h_w_render_1_1_m_frame_context.html#a488c3706eb8be1b19b86d9e77af32997\">MFrameContext</a>\n\
</li>\n\
<li>kExcludeHoldOuts\n\
: <a class=\"el\" href=\"#!/url=./cpp_ref/class_m_h_w_render_1_1_m_frame_context.html#a6c7cc9d8563c08d856412af6c866c8c7\">MFrameContext</a>\n\
</li>\n\
<li>kExcludeHUD\n\
: <a class=\"el\" href=\"#!/url=./cpp_ref/class_m_h_w_render_1_1_m_frame_context.html#a19e5b2fee997e6804502d1e45887530c\">MFrameContext</a>\n\
</li>\n\
<li>kExcludeHulls\n\
: <a class=\"el\" href=\"#!/url=./cpp_ref/class_m_h_w_render_1_1_m_frame_context.html#ae14ead64070852995e348dc4ed4c4de6\">MFrameContext</a>\n\
</li>\n\
<li>kExcludeIkHandles\n\
: <a class=\"el\" href=\"#!/url=./cpp_ref/class_m_h_w_render_1_1_m_frame_context.html#abb4356cd32d62cc3792ef93b3a91c5bf\">MFrameContext</a>\n\
</li>\n\
<li>kExcludeImagePlane\n\
: <a class=\"el\" href=\"#!/url=./cpp_ref/class_m_h_w_render_1_1_m_frame_context.html#af6b2ecf5ee11bd057fa6853c65189af2\">MFrameContext</a>\n\
</li>\n\
<li>kExcludeJoints\n\
: <a class=\"el\" href=\"#!/url=./cpp_ref/class_m_h_w_render_1_1_m_frame_context.html#a5f4b7faab541fb9cbd9d22127074dabe\">MFrameContext</a>\n\
</li>\n\
<li>kExcludeLights\n\
: <a class=\"el\" href=\"#!/url=./cpp_ref/class_m_h_w_render_1_1_m_frame_context.html#a6be6eccb50a49f2a7c92cf687e9ff6d0\">MFrameContext</a>\n\
</li>\n\
<li>kExcludeLocators\n\
: <a class=\"el\" href=\"#!/url=./cpp_ref/class_m_h_w_render_1_1_m_frame_context.html#a631efff94793222cefc921fae615d2e9\">MFrameContext</a>\n\
</li>\n\
<li>kExcludeManipulators\n\
: <a class=\"el\" href=\"#!/url=./cpp_ref/class_m_h_w_render_1_1_m_frame_context.html#a01ff39f9f38157c7acae37e62028b5af\">MFrameContext</a>\n\
</li>\n\
<li>kExcludeMeshes\n\
: <a class=\"el\" href=\"#!/url=./cpp_ref/class_m_h_w_render_1_1_m_frame_context.html#ae96d5e7dbf99e6cfec3ddd2f3fa18073\">MFrameContext</a>\n\
</li>\n\
<li>kExcludeMotionTrails\n\
: <a class=\"el\" href=\"#!/url=./cpp_ref/class_m_h_w_render_1_1_m_frame_context.html#abe4ec3f6c7c9d26b32b060050595a4d0\">MFrameContext</a>\n\
</li>\n\
<li>kExcludeNCloths\n\
: <a class=\"el\" href=\"#!/url=./cpp_ref/class_m_h_w_render_1_1_m_frame_context.html#ab02ded8ddcafbb2322a0bc84c550cad6\">MFrameContext</a>\n\
</li>\n\
<li>kExcludeNone\n\
: <a class=\"el\" href=\"#!/url=./cpp_ref/class_m_h_w_render_1_1_m_frame_context.html#aead2b990feebcfbdb09f74705ddf3698\">MFrameContext</a>\n\
</li>\n\
<li>kExcludeNParticles\n\
: <a class=\"el\" href=\"#!/url=./cpp_ref/class_m_h_w_render_1_1_m_frame_context.html#a53d26c88d652d9018e01674563fd3694\">MFrameContext</a>\n\
</li>\n\
<li>kExcludeNRigids\n\
: <a class=\"el\" href=\"#!/url=./cpp_ref/class_m_h_w_render_1_1_m_frame_context.html#a4ddbe516885981033dea40fa975d641d\">MFrameContext</a>\n\
</li>\n\
<li>kExcludeNurbsCurves\n\
: <a class=\"el\" href=\"#!/url=./cpp_ref/class_m_h_w_render_1_1_m_frame_context.html#aa5b2f44180cea99fc3e9a8629b0c4d6a\">MFrameContext</a>\n\
</li>\n\
<li>kExcludeNurbsSurfaces\n\
: <a class=\"el\" href=\"#!/url=./cpp_ref/class_m_h_w_render_1_1_m_frame_context.html#a661bf21087bbeabdf2dd427de9b68c2b\">MFrameContext</a>\n\
</li>\n\
<li>kExcludeParticleInstancers\n\
: <a class=\"el\" href=\"#!/url=./cpp_ref/class_m_h_w_render_1_1_m_frame_context.html#a9b13467c402b895800aa83b4a3adfc53\">MFrameContext</a>\n\
</li>\n\
<li>kExcludePivots\n\
: <a class=\"el\" href=\"#!/url=./cpp_ref/class_m_h_w_render_1_1_m_frame_context.html#ad8b04fd81fabf2515cf3d51761d8f1ec\">MFrameContext</a>\n\
</li>\n\
<li>kExcludePlanes\n\
: <a class=\"el\" href=\"#!/url=./cpp_ref/class_m_h_w_render_1_1_m_frame_context.html#a2d57a764a2dd3bad812a763ee252cc75\">MFrameContext</a>\n\
</li>\n\
<li>kExcludePluginShapes\n\
: <a class=\"el\" href=\"#!/url=./cpp_ref/class_m_h_w_render_1_1_m_frame_context.html#ad7bdabe5ece97e23d82287005e91e2fb\">MFrameContext</a>\n\
</li>\n\
<li>kExcludeSelectHandles\n\
: <a class=\"el\" href=\"#!/url=./cpp_ref/class_m_h_w_render_1_1_m_frame_context.html#adc2a4bc02f6bda24301d0b5b1424bb53\">MFrameContext</a>\n\
</li>\n\
<li>kExcludeStrokes\n\
: <a class=\"el\" href=\"#!/url=./cpp_ref/class_m_h_w_render_1_1_m_frame_context.html#a935b7c436ae8bcd2d008d34f88a9c6db\">MFrameContext</a>\n\
</li>\n\
<li>kExcludeSubdivSurfaces\n\
: <a class=\"el\" href=\"#!/url=./cpp_ref/class_m_h_w_render_1_1_m_frame_context.html#adf18dc2686a018049b1b9df761a71edc\">MFrameContext</a>\n\
</li>\n\
<li>kExcludeTextures\n\
: <a class=\"el\" href=\"#!/url=./cpp_ref/class_m_h_w_render_1_1_m_frame_context.html#ae0e1b1b58e3460142235f67cd1316f79\">MFrameContext</a>\n\
</li>\n\
<li>kFOR4\n\
: <a class=\"el\" href=\"#!/url=./cpp_ref/class_m_iff_tag.html#a845067db0c360850f05d02da839f0826\">MIffTag</a>\n\
</li>\n\
<li>kFOR8\n\
: <a class=\"el\" href=\"#!/url=./cpp_ref/class_m_iff_tag.html#a538ff9b900fb5ff1df0b3fe781ba4ec6\">MIffTag</a>\n\
</li>\n\
<li>kFORM\n\
: <a class=\"el\" href=\"#!/url=./cpp_ref/class_m_iff_tag.html#a8462f1a9a38b3d8150acd4d63e79a65d\">MIffTag</a>\n\
</li>\n\
<li>kLIS4\n\
: <a class=\"el\" href=\"#!/url=./cpp_ref/class_m_iff_tag.html#ab5a3d8d308f67e420f74aff5be06e6b6\">MIffTag</a>\n\
</li>\n\
<li>kLIS8\n\
: <a class=\"el\" href=\"#!/url=./cpp_ref/class_m_iff_tag.html#a861eaef7c9d15b2efdcb51fa49d9dd6a\">MIffTag</a>\n\
</li>\n\
<li>kLIST\n\
: <a class=\"el\" href=\"#!/url=./cpp_ref/class_m_iff_tag.html#acbc3abe43fdee1019bb4c26594db3e94\">MIffTag</a>\n\
</li>\n\
<li>kMaterialOverrideSemantic\n\
: <a class=\"el\" href=\"#!/url=./cpp_ref/class_m_h_w_render_1_1_m_pass_context.html#aeab00787a25fdaf547b7dccd9af7cf8e\">MPassContext</a>\n\
</li>\n\
<li>kMaxTargets\n\
: <a class=\"el\" href=\"#!/url=./cpp_ref/class_m_h_w_render_1_1_m_blend_state.html#ab6b4785ac0e20c5947d74921bacc49b8\">MBlendState</a>\n\
</li>\n\
<li>kMotionVectorPassSemantic\n\
: <a class=\"el\" href=\"#!/url=./cpp_ref/class_m_h_w_render_1_1_m_pass_context.html#a2781bebea5ef7c30f94bda5bf9c38a36\">MPassContext</a>\n\
</li>\n\
<li>kNonPEPatternPassSemantic\n\
: <a class=\"el\" href=\"#!/url=./cpp_ref/class_m_h_w_render_1_1_m_pass_context.html#a8f503e129a06c3b3e69d38572579cf63\">MPassContext</a>\n\
</li>\n\
<li>kNormalDepthPassSemantic\n\
: <a class=\"el\" href=\"#!/url=./cpp_ref/class_m_h_w_render_1_1_m_pass_context.html#a30804db03c6cccf4fd8d480fe4af0660\">MPassContext</a>\n\
</li>\n\
<li>kNullObj\n\
: <a class=\"el\" href=\"#!/url=./cpp_ref/class_m_object.html#af2a707b4254eb54763167aeced863e63\">MObject</a>\n\
</li>\n\
<li>kOpaqueBlack\n\
: <a class=\"el\" href=\"#!/url=./cpp_ref/class_m_color.html#a7adf58ad74b346fd7d2839354f07c390\">MColor</a>\n\
</li>\n\
<li>kOpaqueGeometrySemantic\n\
: <a class=\"el\" href=\"#!/url=./cpp_ref/class_m_h_w_render_1_1_m_pass_context.html#adb72fdd740b1a4bbfcf963fa08703dab\">MPassContext</a>\n\
</li>\n\
<li>kOpaqueUISemantic\n\
: <a class=\"el\" href=\"#!/url=./cpp_ref/class_m_h_w_render_1_1_m_pass_context.html#a97ae5331e1466c51fc35b434c5e46601\">MPassContext</a>\n\
</li>\n\
<li>kPEPatternPassSemantic\n\
: <a class=\"el\" href=\"#!/url=./cpp_ref/class_m_h_w_render_1_1_m_pass_context.html#a21eddbaf1720cec960972c79d2cde72a\">MPassContext</a>\n\
</li>\n\
<li>kPointLightShadowPassSemantic\n\
: <a class=\"el\" href=\"#!/url=./cpp_ref/class_m_h_w_render_1_1_m_pass_context.html#a9c065e94d2a953c1d1fc069c957ab861\">MPassContext</a>\n\
</li>\n\
<li>kPostUIGeometrySemantic\n\
: <a class=\"el\" href=\"#!/url=./cpp_ref/class_m_h_w_render_1_1_m_pass_context.html#a702cd344fc5a426244be54df81e24cae\">MPassContext</a>\n\
</li>\n\
<li>kPreUIGeometrySemantic\n\
: <a class=\"el\" href=\"#!/url=./cpp_ref/class_m_h_w_render_1_1_m_pass_context.html#a2853efc53f04d372684cb613c0839d5d\">MPassContext</a>\n\
</li>\n\
<li>kPRO4\n\
: <a class=\"el\" href=\"#!/url=./cpp_ref/class_m_iff_tag.html#a1815e576c2d3c9944e2a5656eb3d702b\">MIffTag</a>\n\
</li>\n\
<li>kPRO8\n\
: <a class=\"el\" href=\"#!/url=./cpp_ref/class_m_iff_tag.html#a6d19d301d781944e19d88df71e61d770\">MIffTag</a>\n\
</li>\n\
<li>kPROP\n\
: <a class=\"el\" href=\"#!/url=./cpp_ref/class_m_iff_tag.html#a0b4d50b8329656f3a2c72ce75c61a57f\">MIffTag</a>\n\
</li>\n\
<li>kSelectionPassSemantic\n\
: <a class=\"el\" href=\"#!/url=./cpp_ref/class_m_h_w_render_1_1_m_pass_context.html#a728fc00f0764227a6f345c089058c998\">MPassContext</a>\n\
</li>\n\
<li>kShadowPassSemantic\n\
: <a class=\"el\" href=\"#!/url=./cpp_ref/class_m_h_w_render_1_1_m_pass_context.html#ab0d481f367db0fa41c2b3a1aeb2074c8\">MPassContext</a>\n\
</li>\n\
<li>kTransparentGeometrySemantic\n\
: <a class=\"el\" href=\"#!/url=./cpp_ref/class_m_h_w_render_1_1_m_pass_context.html#a5d97dca0f38fda2f0993548ef576e664\">MPassContext</a>\n\
</li>\n\
<li>kTransparentPeelAndAvgSemantic\n\
: <a class=\"el\" href=\"#!/url=./cpp_ref/class_m_h_w_render_1_1_m_pass_context.html#ad9f3e908d48e77144e99c804074485b1\">MPassContext</a>\n\
</li>\n\
<li>kTransparentPeelSemantic\n\
: <a class=\"el\" href=\"#!/url=./cpp_ref/class_m_h_w_render_1_1_m_pass_context.html#a9160078f7d16515ce7b689a7e0356c90\">MPassContext</a>\n\
</li>\n\
<li>kTransparentUISemantic\n\
: <a class=\"el\" href=\"#!/url=./cpp_ref/class_m_h_w_render_1_1_m_pass_context.html#a065de49d1b4977f6a82b4ab0fbee53ca\">MPassContext</a>\n\
</li>\n\
<li>kTransparentWeightedAvgSemantic\n\
: <a class=\"el\" href=\"#!/url=./cpp_ref/class_m_h_w_render_1_1_m_pass_context.html#a70c9d0658fe61e3154bb60cb40daf2a2\">MPassContext</a>\n\
</li>\n\
<li>kUIGeometrySemantic\n\
: <a class=\"el\" href=\"#!/url=./cpp_ref/class_m_h_w_render_1_1_m_pass_context.html#a6c5d1bb1a7e64922c7db3af0bbb805df\">MPassContext</a>\n\
</li>\n\
<li>kUserPassSemantic\n\
: <a class=\"el\" href=\"#!/url=./cpp_ref/class_m_h_w_render_1_1_m_pass_context.html#aa596d88abf6f7abf27c45aed0532907f\">MPassContext</a>\n\
</li>\n\
<li>kXrayUISemantic\n\
: <a class=\"el\" href=\"#!/url=./cpp_ref/class_m_h_w_render_1_1_m_pass_context.html#afa0943a269c9a0c85a5d4cb0d14a4b0c\">MPassContext</a>\n\
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