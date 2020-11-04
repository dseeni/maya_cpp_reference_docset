var topic = "<!-- saved from url=(0024)http://docs.autodesk.com -->\n\
<html>\n\
   <head><script src=\"../scripts/yepnope.1.5.4-min.js\" type=\"text/javascript\"></script><script src=\"../scripts/lib/jquery-1.11.1.min.js\" type=\"text/javascript\"></script>\n\
      <title>C++ API Reference: Class Members - Related Functions</title>\n\
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
    cpp_ref_adsk_ref_toc.initNavTree(\'functions_rela.html\', tocPrefix);\n\
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
            <h1>C++ API Reference: Class Members - Related Functions</h1>\n\
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
      <li><a href=\"#!/url=./cpp_ref/functions_vars.html\"><span>Variables</span></a></li>\n\
      <li><a href=\"#!/url=./cpp_ref/functions_type.html\"><span>Typedefs</span></a></li>\n\
      <li><a href=\"#!/url=./cpp_ref/functions_enum.html\"><span>Enumerations</span></a></li>\n\
      <li><a href=\"#!/url=./cpp_ref/functions_eval.html\"><span>Enumerator</span></a></li>\n\
      <li class=\"current\"><a href=\"#!/url=./cpp_ref/functions_rela.html\"><span>Related&#160;Functions</span></a></li>\n\
    </ul>\n\
  </div>\n\
  <div id=\"navrow4\" class=\"tabs3\">\n\
    <ul class=\"tablist\">\n\
      <li><a href=\"functions_rela.html#index_c\"><span>c</span></a></li>\n\
      <li><a href=\"functions_rela.html#index_d\"><span>d</span></a></li>\n\
      <li><a href=\"functions_rela.html#index_o\"><span>o</span></a></li>\n\
      <li class=\"current\"><a href=\"functions_rela.html#index_s\"><span>s</span></a></li>\n\
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
<h3><a class=\"anchor\" id=\"index_c\"></a>- c -</h3><ul>\n\
<li>CRTP_IndexType&lt; IndexPair &gt;\n\
: <a class=\"el\" href=\"#!/url=./cpp_ref/classadsk_1_1_data_1_1_index_pair.html#a9e997d341fc948c5b1197fdf02552591\">IndexPair</a>\n\
</li>\n\
<li>CRTP_IndexType&lt; IndexString &gt;\n\
: <a class=\"el\" href=\"#!/url=./cpp_ref/classadsk_1_1_data_1_1_index_string.html#a6a6068bdfb4ac45e41da87744845d85d\">IndexString</a>\n\
</li>\n\
</ul>\n\
\n\
\n\
<h3><a class=\"anchor\" id=\"index_d\"></a>- d -</h3><ul>\n\
<li>dslerp\n\
: <a class=\"el\" href=\"#!/url=./cpp_ref/class_m_quaternion.html#a873ec146b26984295b2e829a5fd9b6ce\">MQuaternion</a>\n\
</li>\n\
</ul>\n\
\n\
\n\
<h3><a class=\"anchor\" id=\"index_o\"></a>- o -</h3><ul>\n\
<li>operator!=\n\
: <a class=\"el\" href=\"#!/url=./cpp_ref/class_m_status.html#ae8965581e430f2fbb2ff0d71fe396332\">MStatus</a>\n\
</li>\n\
<li>operator*\n\
: <a class=\"el\" href=\"#!/url=./cpp_ref/class_m_color.html#a2bf6514c7752c9cbd6b5986e845a0e4a\">MColor</a>\n\
, <a class=\"el\" href=\"#!/url=./cpp_ref/class_m_euler_rotation.html#aefd1f541e8e83687962a050bdcd33a07\">MEulerRotation</a>\n\
, <a class=\"el\" href=\"#!/url=./cpp_ref/class_m_float_matrix.html#a3673fab0b78b95a67b58dbb639cc6766\">MFloatMatrix</a>\n\
, <a class=\"el\" href=\"#!/url=./cpp_ref/class_m_float_point.html#a6c3bb8980a0889b3d934888203b633e1\">MFloatPoint</a>\n\
, <a class=\"el\" href=\"#!/url=./cpp_ref/class_m_float_vector.html#ab9453f7290cd6963db82da706fe799db\">MFloatVector</a>\n\
, <a class=\"el\" href=\"#!/url=./cpp_ref/class_m_matrix.html#a10386f42ea723098c6267532c9d79887\">MMatrix</a>\n\
, <a class=\"el\" href=\"#!/url=./cpp_ref/class_m_point.html#a8621ccf2d9c4b47fc6d7f54728533553\">MPoint</a>\n\
, <a class=\"el\" href=\"#!/url=./cpp_ref/class_m_quaternion.html#a90c59e5b2cad81cfc10941f7fcd0869c\">MQuaternion</a>\n\
, <a class=\"el\" href=\"#!/url=./cpp_ref/class_m_vector.html#a10470a7799ea02867165f3667bfdac31\">MVector</a>\n\
</li>\n\
<li>operator+\n\
: <a class=\"el\" href=\"#!/url=./cpp_ref/class_m_string.html#a6217edf3d756bfa061e2aa0bafca1442\">MString</a>\n\
</li>\n\
<li>operator&lt;&lt;\n\
: <a class=\"el\" href=\"#!/url=./cpp_ref/class_m_arg_list.html#a5e9301d032529282c4924f2dadd7f976\">MArgList</a>\n\
, <a class=\"el\" href=\"#!/url=./cpp_ref/class_m_attribute_pattern_array.html#ae61871182d931949437eb05b3f51e0e7\">MAttributePatternArray</a>\n\
, <a class=\"el\" href=\"#!/url=./cpp_ref/class_m_callback_id_array.html#a246a99da42f217a241ff482c1e6912e4\">MCallbackIdArray</a>\n\
, <a class=\"el\" href=\"#!/url=./cpp_ref/class_m_color.html#a650d8e4abee8a6e3360bfa684d8dcf07\">MColor</a>\n\
, <a class=\"el\" href=\"#!/url=./cpp_ref/class_m_color_array.html#a3ea647d5cb27b704d10431a83d273d7f\">MColorArray</a>\n\
, <a class=\"el\" href=\"#!/url=./cpp_ref/class_m_dag_path_array.html#a07a2fa17309061ff4e85a999404fd1f9\">MDagPathArray</a>\n\
, <a class=\"el\" href=\"#!/url=./cpp_ref/class_m_double_array.html#a4aa3633e6bf271052167b4ea5440500c\">MDoubleArray</a>\n\
, <a class=\"el\" href=\"#!/url=./cpp_ref/class_m_euler_rotation.html#a519b165246ba7f2d12549de5f901ccb7\">MEulerRotation</a>\n\
, <a class=\"el\" href=\"#!/url=./cpp_ref/class_m_float_array.html#a5f6de40b0f05e83d1b3ff5295bed9831\">MFloatArray</a>\n\
, <a class=\"el\" href=\"#!/url=./cpp_ref/class_m_float_matrix.html#a83694a90372cf4ab70814def6aa9aaed\">MFloatMatrix</a>\n\
, <a class=\"el\" href=\"#!/url=./cpp_ref/class_m_float_point.html#a62028a66e3873f88d9eb35baeed4fe63\">MFloatPoint</a>\n\
, <a class=\"el\" href=\"#!/url=./cpp_ref/class_m_float_point_array.html#afab77b3166163c859a3ad63358d20942\">MFloatPointArray</a>\n\
, <a class=\"el\" href=\"#!/url=./cpp_ref/class_m_float_vector.html#af0c61a35d8e8d1589d63cec7fededebf\">MFloatVector</a>\n\
, <a class=\"el\" href=\"#!/url=./cpp_ref/class_m_float_vector_array.html#a12c391336cb48d792e4bdfcf63cf97ac\">MFloatVectorArray</a>\n\
, <a class=\"el\" href=\"#!/url=./cpp_ref/class_m_int64_array.html#a218ac9d90a3d2f83267b41f1485e6442\">MInt64Array</a>\n\
, <a class=\"el\" href=\"#!/url=./cpp_ref/class_m_int_array.html#a1346b244c31f7b1dfb913c9b3979ed3a\">MIntArray</a>\n\
, <a class=\"el\" href=\"#!/url=./cpp_ref/class_m_matrix.html#a6a8081f2fd019f97c257625716fa677f\">MMatrix</a>\n\
, <a class=\"el\" href=\"#!/url=./cpp_ref/class_m_matrix_array.html#ac90e5edd1c649060b650f9451ef75b54\">MMatrixArray</a>\n\
, <a class=\"el\" href=\"#!/url=./cpp_ref/class_m_point.html#a87be6dabcd8e9eb4445649c62672cb10\">MPoint</a>\n\
, <a class=\"el\" href=\"#!/url=./cpp_ref/class_m_point_array.html#ac1ef71b3e1b3e7832167c6a79c767e95\">MPointArray</a>\n\
, <a class=\"el\" href=\"#!/url=./cpp_ref/class_m_px_transformation_matrix.html#a4d4a0e27c760b9ae985a0d24f2751543\">MPxTransformationMatrix</a>\n\
, <a class=\"el\" href=\"#!/url=./cpp_ref/class_m_quaternion.html#a9440d08c89b7ece2a4972182a83583a2\">MQuaternion</a>\n\
, <a class=\"el\" href=\"#!/url=./cpp_ref/class_m_status.html#aeff51e231248f27dc792fb99e908b7af\">MStatus</a>\n\
, <a class=\"el\" href=\"#!/url=./cpp_ref/class_m_string.html#a5782126e2c0a26641dd61a08e8c930da\">MString</a>\n\
, <a class=\"el\" href=\"#!/url=./cpp_ref/class_m_string_array.html#ab5a9bf6511d7f6a191abeece0e3f1fa4\">MStringArray</a>\n\
, <a class=\"el\" href=\"#!/url=./cpp_ref/class_m_time.html#ae9465f076bd93b571f5c5989ebb6bc7c\">MTime</a>\n\
, <a class=\"el\" href=\"#!/url=./cpp_ref/class_m_time_array.html#af7a89ade2c3dc68e1decabb0892406e7\">MTimeArray</a>\n\
, <a class=\"el\" href=\"#!/url=./cpp_ref/class_m_uint64_array.html#acd974e71860862a708dd0e4b7c2972e9\">MUint64Array</a>\n\
, <a class=\"el\" href=\"#!/url=./cpp_ref/class_m_uint_array.html#a27d19bfd56dfa11872de8f74e917b37f\">MUintArray</a>\n\
, <a class=\"el\" href=\"#!/url=./cpp_ref/class_m_vector.html#a5bd0dfda9e1d3dec624828296c806cf4\">MVector</a>\n\
, <a class=\"el\" href=\"#!/url=./cpp_ref/class_m_vector_array.html#af2b6ba97a286f837b087058a1516d3c0\">MVectorArray</a>\n\
</li>\n\
<li>operator==\n\
: <a class=\"el\" href=\"#!/url=./cpp_ref/class_m_status.html#a6934f617ae8538af900c2227823f336b\">MStatus</a>\n\
</li>\n\
</ul>\n\
\n\
\n\
<h3><a class=\"anchor\" id=\"index_s\"></a>- s -</h3><ul>\n\
<li>slerp\n\
: <a class=\"el\" href=\"#!/url=./cpp_ref/class_m_quaternion.html#af29999d0878913d063066c3ab59e23c4\">MQuaternion</a>\n\
</li>\n\
<li>squad\n\
: <a class=\"el\" href=\"#!/url=./cpp_ref/class_m_quaternion.html#a0733ff6b5dab3fb6f7ed3a8e46320478\">MQuaternion</a>\n\
</li>\n\
<li>squadPt\n\
: <a class=\"el\" href=\"#!/url=./cpp_ref/class_m_quaternion.html#afc5e34e4387fbf067a791a6eea49da02\">MQuaternion</a>\n\
</li>\n\
<li>Stream\n\
: <a class=\"el\" href=\"#!/url=./cpp_ref/classadsk_1_1_data_1_1_stream_iterator.html#ad8c01c67eaeefab6268f2f0872b47035\">StreamIterator</a>\n\
</li>\n\
<li>StreamImpl\n\
: <a class=\"el\" href=\"#!/url=./cpp_ref/classadsk_1_1_data_1_1_handle.html#a55b192e2d9a15d95ed91c13c6240e884\">Handle</a>\n\
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