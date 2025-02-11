var topic = "<!-- saved from url=(0024)http://docs.autodesk.com -->\n\
<html>\n\
   <head><script src=\"../scripts/yepnope.1.5.4-min.js\" type=\"text/javascript\"></script><script src=\"../scripts/lib/jquery-1.11.1.min.js\" type=\"text/javascript\"></script><meta http-equiv=\"Content-Type\" content=\"text/html; charset=UTF-8\"><meta name=\"product\" content=\"MAYAUL\"><meta name=\"release\" content=\"2018\"><meta name=\"book\" content=\"Developer\"><meta name=\"created\" content=\"2017-06-22\"><meta name=\"topicid\" content=\"GUID-02DEF634-1E7B-48C6-8ACD-2C934CA97887\"><meta name=\"topic-type\" content=\"concept\">\n\
      <title>Class Members - Variables</title>\n\
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
    cpp_ref_adsk_ref_toc.initNavTree(\'functions_vars_r.html\', tocPrefix);\n\
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
      <li><a href=\"#!/url=./cpp_ref/functions_vars_o.html#index_o\"><span>o</span></a></li>\n\
      <li><a href=\"#!/url=./cpp_ref/functions_vars_p.html#index_p\"><span>p</span></a></li>\n\
      <li class=\"current\"><a href=\"#!/url=./cpp_ref/functions_vars_r.html#index_r\"><span>r</span></a></li>\n\
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
<h3><a class=\"anchor\" id=\"index_r\"></a>- r -</h3><ul>\n\
<li>r\n\
: <a class=\"el\" translate=\"no\" href=\"#!/url=./cpp_ref/class_m_color.html#a4788d82c901b9367dd5c0daff8a7616b\">MColor</a>\n\
, <a class=\"el\" translate=\"no\" href=\"#!/url=./cpp_ref/struct_r_v___p_i_x_e_l.html#a4788d82c901b9367dd5c0daff8a7616b\">RV_PIXEL</a>\n\
</li>\n\
<li>renderableOnlySet\n\
: <a class=\"el\" translate=\"no\" href=\"#!/url=./cpp_ref/class_m_px_object_set.html#aeb8a897b54f68c45fe117722396e10f6\">MPxObjectSet</a>\n\
</li>\n\
<li>renderAll\n\
: <a class=\"el\" translate=\"no\" href=\"#!/url=./cpp_ref/class_m_common_render_settings_data.html#a675f97a8e9ca14c715a0ccb94dc76718\">MCommonRenderSettingsData</a>\n\
</li>\n\
<li>renderInfo\n\
: <a class=\"el\" translate=\"no\" href=\"#!/url=./cpp_ref/class_m_px_transform.html#a1831e17a559325761d9ba2aa9fa0183e\">MPxTransform</a>\n\
</li>\n\
<li>renderLayerColor\n\
: <a class=\"el\" translate=\"no\" href=\"#!/url=./cpp_ref/class_m_px_transform.html#ae25af7072974449a583008b975e83eae\">MPxTransform</a>\n\
</li>\n\
<li>renderLayerId\n\
: <a class=\"el\" translate=\"no\" href=\"#!/url=./cpp_ref/class_m_px_transform.html#af31fece3f9b2fed246f1fa59332fa8c0\">MPxTransform</a>\n\
</li>\n\
<li>renderLayerInfo\n\
: <a class=\"el\" translate=\"no\" href=\"#!/url=./cpp_ref/class_m_px_transform.html#afc9cebedacad6b4ca09ed756ed7310da\">MPxTransform</a>\n\
</li>\n\
<li>renderLayerRenderable\n\
: <a class=\"el\" translate=\"no\" href=\"#!/url=./cpp_ref/class_m_px_transform.html#aa8615a4cb159e5ca8ebfcc39e11b4fd6\">MPxTransform</a>\n\
</li>\n\
<li>renumberBy\n\
: <a class=\"el\" translate=\"no\" href=\"#!/url=./cpp_ref/class_m_common_render_settings_data.html#a3085051fc67470a44ccf36928a17c0d1\">MCommonRenderSettingsData</a>\n\
</li>\n\
<li>renumberFrames\n\
: <a class=\"el\" translate=\"no\" href=\"#!/url=./cpp_ref/class_m_common_render_settings_data.html#a0b3505cfc459919a353b1d7c6a170aa7\">MCommonRenderSettingsData</a>\n\
</li>\n\
<li>renumberStart\n\
: <a class=\"el\" translate=\"no\" href=\"#!/url=./cpp_ref/class_m_common_render_settings_data.html#a4acae2eba42d47e7792905bae50b26da\">MCommonRenderSettingsData</a>\n\
</li>\n\
<li>resX\n\
: <a class=\"el\" translate=\"no\" href=\"#!/url=./cpp_ref/class_m_render_data.html#aabad222674160ca9c561204912620c91\">MRenderData</a>\n\
</li>\n\
<li>resY\n\
: <a class=\"el\" translate=\"no\" href=\"#!/url=./cpp_ref/class_m_render_data.html#a7a2723fa8ab8196850aded6554929d2d\">MRenderData</a>\n\
</li>\n\
<li>rgbaArr\n\
: <a class=\"el\" translate=\"no\" href=\"#!/url=./cpp_ref/class_m_render_data.html#a3eba2629fe6535882e5749c4bca06cb2\">MRenderData</a>\n\
</li>\n\
<li>right\n\
: <a class=\"el\" translate=\"no\" href=\"#!/url=./cpp_ref/class_m_px_renderer_1_1_refresh_params.html#a78b0fed184c642b78f32fd34b228a5f9\">MPxRenderer::RefreshParams</a>\n\
, <a class=\"el\" translate=\"no\" href=\"#!/url=./cpp_ref/class_m_render_data.html#aff8907081e42db096b302372a40a194b\">MRenderData</a>\n\
</li>\n\
<li>rotate\n\
: <a class=\"el\" translate=\"no\" href=\"#!/url=./cpp_ref/class_m_px_image_plane.html#a929db3d0bef90b2cfb29a1a6c4bff827\">MPxImagePlane</a>\n\
, <a class=\"el\" translate=\"no\" href=\"#!/url=./cpp_ref/class_m_px_motion_path_node.html#a929db3d0bef90b2cfb29a1a6c4bff827\">MPxMotionPathNode</a>\n\
, <a class=\"el\" translate=\"no\" href=\"#!/url=./cpp_ref/class_m_px_transform.html#a929db3d0bef90b2cfb29a1a6c4bff827\">MPxTransform</a>\n\
</li>\n\
<li>rotateAxis\n\
: <a class=\"el\" translate=\"no\" href=\"#!/url=./cpp_ref/class_m_px_transform.html#a9aa742d41306eead11bf6fbed2410490\">MPxTransform</a>\n\
</li>\n\
<li>rotateAxisX\n\
: <a class=\"el\" translate=\"no\" href=\"#!/url=./cpp_ref/class_m_px_transform.html#ada28236fd5c7dac7ba409f0bdc5d2fe5\">MPxTransform</a>\n\
</li>\n\
<li>rotateAxisY\n\
: <a class=\"el\" translate=\"no\" href=\"#!/url=./cpp_ref/class_m_px_transform.html#a9cdf6999a051e5bb36a8f8bbbdc96828\">MPxTransform</a>\n\
</li>\n\
<li>rotateAxisZ\n\
: <a class=\"el\" translate=\"no\" href=\"#!/url=./cpp_ref/class_m_px_transform.html#af520207cdeebf4e0b3ef17779e3125bc\">MPxTransform</a>\n\
</li>\n\
<li>rotateOrder\n\
: <a class=\"el\" translate=\"no\" href=\"#!/url=./cpp_ref/class_m_px_motion_path_node.html#af6f48efb31ad73d027080285fd231ce3\">MPxMotionPathNode</a>\n\
, <a class=\"el\" translate=\"no\" href=\"#!/url=./cpp_ref/class_m_px_transform.html#af6f48efb31ad73d027080285fd231ce3\">MPxTransform</a>\n\
</li>\n\
<li>rotateOrientationValue\n\
: <a class=\"el\" translate=\"no\" href=\"#!/url=./cpp_ref/class_m_px_transformation_matrix.html#a7359cbbbdd57c182e940cc64eeb1a32f\">MPxTransformationMatrix</a>\n\
</li>\n\
<li>rotatePivot\n\
: <a class=\"el\" translate=\"no\" href=\"#!/url=./cpp_ref/class_m_px_transform.html#a28d1fca09bfe8a4167d9f7562ec774c8\">MPxTransform</a>\n\
</li>\n\
<li>rotatePivotTranslate\n\
: <a class=\"el\" translate=\"no\" href=\"#!/url=./cpp_ref/class_m_px_transform.html#a64efcae120e157b9b90eeca628bdfc2e\">MPxTransform</a>\n\
</li>\n\
<li>rotatePivotTranslateX\n\
: <a class=\"el\" translate=\"no\" href=\"#!/url=./cpp_ref/class_m_px_transform.html#aefc16222d2e16f2610e80fb1773b7b8c\">MPxTransform</a>\n\
</li>\n\
<li>rotatePivotTranslateY\n\
: <a class=\"el\" translate=\"no\" href=\"#!/url=./cpp_ref/class_m_px_transform.html#addfc15a153bce3320b9fb860a5e51b59\">MPxTransform</a>\n\
</li>\n\
<li>rotatePivotTranslateZ\n\
: <a class=\"el\" translate=\"no\" href=\"#!/url=./cpp_ref/class_m_px_transform.html#a24ff6f5c76bdf07f6cdb1f3205edd435\">MPxTransform</a>\n\
</li>\n\
<li>rotatePivotTranslationValue\n\
: <a class=\"el\" translate=\"no\" href=\"#!/url=./cpp_ref/class_m_px_transformation_matrix.html#acc3a86d3a3ec9f3678a61185eef6bbce\">MPxTransformationMatrix</a>\n\
</li>\n\
<li>rotatePivotValue\n\
: <a class=\"el\" translate=\"no\" href=\"#!/url=./cpp_ref/class_m_px_transformation_matrix.html#afda01b20e203984e3bad067c12506118\">MPxTransformationMatrix</a>\n\
</li>\n\
<li>rotatePivotX\n\
: <a class=\"el\" translate=\"no\" href=\"#!/url=./cpp_ref/class_m_px_transform.html#a1baebc3b9b6ae059349de1b1eec17a8c\">MPxTransform</a>\n\
</li>\n\
<li>rotatePivotY\n\
: <a class=\"el\" translate=\"no\" href=\"#!/url=./cpp_ref/class_m_px_transform.html#aa3a10085b1be3e727dc909313dc69270\">MPxTransform</a>\n\
</li>\n\
<li>rotatePivotZ\n\
: <a class=\"el\" translate=\"no\" href=\"#!/url=./cpp_ref/class_m_px_transform.html#ab7bec8f251c71b61ddc1ceac3e330282\">MPxTransform</a>\n\
</li>\n\
<li>rotateQuaternion\n\
: <a class=\"el\" translate=\"no\" href=\"#!/url=./cpp_ref/class_m_px_transform.html#acf265bc898678ed06148e1a0dc38302b\">MPxTransform</a>\n\
</li>\n\
<li>rotateQuaternionW\n\
: <a class=\"el\" translate=\"no\" href=\"#!/url=./cpp_ref/class_m_px_transform.html#aeaa2ce2e755a180b10a1dd7122bc9fb2\">MPxTransform</a>\n\
</li>\n\
<li>rotateQuaternionX\n\
: <a class=\"el\" translate=\"no\" href=\"#!/url=./cpp_ref/class_m_px_transform.html#a84d1f30450dd64803c58e78043498f22\">MPxTransform</a>\n\
</li>\n\
<li>rotateQuaternionY\n\
: <a class=\"el\" translate=\"no\" href=\"#!/url=./cpp_ref/class_m_px_transform.html#ae863a5f1ca125e92c83c7a2d584eb488\">MPxTransform</a>\n\
</li>\n\
<li>rotateQuaternionZ\n\
: <a class=\"el\" translate=\"no\" href=\"#!/url=./cpp_ref/class_m_px_transform.html#a12f096a8a69b12010f83bf620c14221a\">MPxTransform</a>\n\
</li>\n\
<li>rotateX\n\
: <a class=\"el\" translate=\"no\" href=\"#!/url=./cpp_ref/class_m_px_motion_path_node.html#aa8c3579e14b209fcc582e5de604d4109\">MPxMotionPathNode</a>\n\
, <a class=\"el\" translate=\"no\" href=\"#!/url=./cpp_ref/class_m_px_transform.html#aa8c3579e14b209fcc582e5de604d4109\">MPxTransform</a>\n\
</li>\n\
<li>rotateY\n\
: <a class=\"el\" translate=\"no\" href=\"#!/url=./cpp_ref/class_m_px_motion_path_node.html#a4738726ca61c8cbc9631f8932b04f154\">MPxMotionPathNode</a>\n\
, <a class=\"el\" translate=\"no\" href=\"#!/url=./cpp_ref/class_m_px_transform.html#a4738726ca61c8cbc9631f8932b04f154\">MPxTransform</a>\n\
</li>\n\
<li>rotateZ\n\
: <a class=\"el\" translate=\"no\" href=\"#!/url=./cpp_ref/class_m_px_motion_path_node.html#ae1e98e8840226a76316feeeac479929f\">MPxMotionPathNode</a>\n\
, <a class=\"el\" translate=\"no\" href=\"#!/url=./cpp_ref/class_m_px_transform.html#ae1e98e8840226a76316feeeac479929f\">MPxTransform</a>\n\
</li>\n\
<li>rotationInterpolation\n\
: <a class=\"el\" translate=\"no\" href=\"#!/url=./cpp_ref/class_m_px_transform.html#a23c441326c5fdfe59ee85c7832042579\">MPxTransform</a>\n\
</li>\n\
<li>rotationValue\n\
: <a class=\"el\" translate=\"no\" href=\"#!/url=./cpp_ref/class_m_px_transformation_matrix.html#aa7a84c269b27cee8dcf20228e91e4567\">MPxTransformationMatrix</a>\n\
</li>\n\
</ul>\n\
</div><!-- contents -->\n\
</div><!-- doc-content -->\n\
          <div class=\"footer-block\"><a href=\"../html/ac.cmtdialog.htm\" class=\"comments-anchor\" target=\"_blank\"><span class=\"comments-link\">Please send us your comment about this page</span></a></div></div>\n\
   </div></div></body>\n\
</html>\n\
";