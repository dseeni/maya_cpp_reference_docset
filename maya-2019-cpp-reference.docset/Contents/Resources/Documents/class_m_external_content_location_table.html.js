var topic = "<!-- saved from url=(0024)http://docs.autodesk.com -->\n\
<html>\n\
   <head><script src=\"../scripts/yepnope.1.5.4-min.js\" type=\"text/javascript\"></script><script src=\"../scripts/lib/jquery-1.11.1.min.js\" type=\"text/javascript\"></script><meta http-equiv=\"Content-Type\" content=\"text/html; charset=UTF-8\"><script type=\"text/javascript\" src=\"../scripts/utils/adsk.redirect.js\"></script>\n\
      <title>MExternalContentLocationTable Class Reference</title>\n\
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
    cpp_ref_adsk_ref_toc.initNavTree(\'class_m_external_content_location_table.html\', tocPrefix);\n\
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
            <h1>MExternalContentLocationTable Class Reference</h1>\n\
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
<div class=\"title\">MExternalContentLocationTable Class Reference<div class=\"ingroups\"><a class=\"el\" translate=\"no\" href=\"#!/url=./cpp_ref/group___open_maya.html\">OpenMaya - API module for common classes</a></div></div>  </div>\n\
<div id=\"OverviewLinksDiv\"><div id=\"dynsection-overview\" onclick=\"return toggleVisibility(this)\" class=\"dynheader closed\" style=\"cursor:pointer;\"><img id=\"dynsection-overview-trigger\" src=\"cpp_ref/closed.png\" alt=\"+\"> Related help topics: </div><div id=\"dynsection-overview-content\" class=\"dyncontent\" style=\"display:none;\"><ul class=\"overviewLinks\">\n\
<li class=\"overviewLink\"><a href=\"#!/url=./developer/What-s-New-What-s-Changed-/Autodesk-Maya-2014.html\">What&#39;s New / What&#39;s Changed? &gt; Autodesk Maya 2014</a></li>\n\
</ul></div></div>\n\
<div class=\"summary\">\n\
<a href=\"class_m_external_content_location_table.html#pub-methods\">Public Member Functions</a> &#124;\n\
<a href=\"class_m_external_content_location_table.html#friends\">Friends</a>  </div></div><!--header-->\n\
<div class=\"contents\">\n\
\n\
<p><code>#include &lt;MExternalContentLocationTable.h&gt;</code></p>\n\
<a name=\"details\" id=\"details\"></a><h2 class=\"groupheader\">Class Description</h2>\n\
<div class=\"textblock\"><p>This is a table of the all the external content locations for a given <a class=\"el\" translate=\"no\" href=\"#!/url=./cpp_ref/class_m_px_node.html\" title=\"Base class for user defined dependency nodes. \">MPxNode</a>. </p>\n\
<p>It is a subset of the information contained in MExternalContentInfo: it has as many entries, but each entry only states the key and location.</p>\n\
<p>While <a class=\"el\" translate=\"no\" href=\"#!/url=./cpp_ref/class_m_external_content_info_table.html\" title=\"This is a table of all the external content for a given MPxNode. \">MExternalContentInfoTable</a> is meant to query external content from a <a class=\"el\" translate=\"no\" href=\"#!/url=./cpp_ref/class_m_px_node.html\" title=\"Base class for user defined dependency nodes. \">MPxNode</a>, <a class=\"el\" translate=\"no\" href=\"#!/url=./cpp_ref/class_m_external_content_location_table.html\" title=\"This is a table of the all the external content locations for a given MPxNode. \">MExternalContentLocationTable</a> is meant to pass modified locations back to the <a class=\"el\" translate=\"no\" href=\"#!/url=./cpp_ref/class_m_px_node.html\" title=\"Base class for user defined dependency nodes. \">MPxNode</a>.</p>\n\
<p>Key: Same as for <a class=\"el\" translate=\"no\" href=\"#!/url=./cpp_ref/class_m_external_content_info_table.html\" title=\"This is a table of all the external content for a given MPxNode. \">MExternalContentInfoTable</a>.</p>\n\
<p>Value: New location of the content for this entry (path, URI, ...). </p>\n\
<dl class=\"section \"><div id=\"dynsection-example0\" class=\"dynheader closed\" onclick=\"return toggleVisibility(this)\" style=\"cursor:pointer;\"><dt><img id=\"dynsection-example0-trigger\" src=\"cpp_ref/closed.png\" alt=\"+\"> <b>Examples: </b></dt></div><div id=\"dynsection-example0-content\" class=\"dyncontent\" style=\"display:none;\"><dd><a class=\"el\" translate=\"no\" href=\"#!/url=./cpp_ref/_abc_import_2_alembic_node_8cpp-example.html#_a113\">AbcImport/AlembicNode.cpp</a>, <a class=\"el\" translate=\"no\" href=\"#!/url=./cpp_ref/_abc_import_2_alembic_node_8h-example.html#_a16\">AbcImport/AlembicNode.h</a>, <a class=\"el\" translate=\"no\" href=\"#!/url=./cpp_ref/dx11_shader_2dx11_shader_8cpp-example.html#_a451\">dx11Shader/dx11Shader.cpp</a>, <a class=\"el\" translate=\"no\" href=\"#!/url=./cpp_ref/dx11_shader_2dx11_shader_8h-example.html#_a43\">dx11Shader/dx11Shader.h</a>, <a class=\"el\" translate=\"no\" href=\"#!/url=./cpp_ref/glsl_shader_2_g_l_s_l_shader_8cpp-example.html#_a327\">glslShader/GLSLShader.cpp</a>, <a class=\"el\" translate=\"no\" href=\"#!/url=./cpp_ref/glsl_shader_2_g_l_s_l_shader_8h-example.html#_a36\">glslShader/GLSLShader.h</a>, <a class=\"el\" translate=\"no\" href=\"#!/url=./cpp_ref/gpu_cache_2gpu_cache_shape_node_8cpp-example.html#_a157\">gpuCache/gpuCacheShapeNode.cpp</a>, <a class=\"el\" translate=\"no\" href=\"#!/url=./cpp_ref/gpu_cache_2gpu_cache_shape_node_8h-example.html#_a15\">gpuCache/gpuCacheShapeNode.h</a>, <a class=\"el\" translate=\"no\" href=\"#!/url=./cpp_ref/scene_assembly_2adsk_representations_8cpp-example.html#_a21\">sceneAssembly/adskRepresentations.cpp</a>, <a class=\"el\" translate=\"no\" href=\"#!/url=./cpp_ref/scene_assembly_2adsk_representations_8h-example.html#_a8\">sceneAssembly/adskRepresentations.h</a>, <a class=\"el\" translate=\"no\" href=\"#!/url=./cpp_ref/scene_assembly_2assembly_definition_8cpp-example.html#_a26\">sceneAssembly/assemblyDefinition.cpp</a>, <a class=\"el\" translate=\"no\" href=\"#!/url=./cpp_ref/scene_assembly_2assembly_definition_8h-example.html#_a9\">sceneAssembly/assemblyDefinition.h</a>, <a class=\"el\" translate=\"no\" href=\"#!/url=./cpp_ref/scene_assembly_2assembly_reference_8cpp-example.html#_a19\">sceneAssembly/assemblyReference.cpp</a>, and <a class=\"el\" translate=\"no\" href=\"#!/url=./cpp_ref/scene_assembly_2assembly_reference_8h-example.html#_a4\">sceneAssembly/assemblyReference.h</a>.</dd></div>\n\
</dl></div><table class=\"memberdecls\">\n\
<tr class=\"heading\"><td colspan=\"2\"><h2 class=\"groupheader\"><a name=\"pub-methods\"></a>\n\
Public Member Functions</h2></td></tr>\n\
<tr class=\"memitem:a1a5721a73d5c587a83d1f92fcf7eed82\"><td class=\"memItemLeft\" translate=\"no\" align=\"right\" valign=\"top\"><a class=\"anchor\" id=\"a1a5721a73d5c587a83d1f92fcf7eed82\"></a>\n\
&#160;</td><td class=\"memItemRight\" translate=\"no\" valign=\"bottom\"><a class=\"el\" translate=\"no\" href=\"#!/url=./cpp_ref/class_m_external_content_location_table.html#a1a5721a73d5c587a83d1f92fcf7eed82\">MExternalContentLocationTable</a> ()</td></tr>\n\
<tr class=\"memdesc:a1a5721a73d5c587a83d1f92fcf7eed82\"><td class=\"mdescLeft\">&#160;</td><td class=\"mdescRight\">Class constructor. <br></td></tr>\n\
<tr class=\"separator:a1a5721a73d5c587a83d1f92fcf7eed82\"><td class=\"memSeparator\" colspan=\"2\">&#160;</td></tr>\n\
<tr class=\"memitem:a2c7a9ef45b638235efdb8a0f2f147358\"><td class=\"memItemLeft\" translate=\"no\" align=\"right\" valign=\"top\"><a class=\"anchor\" id=\"a2c7a9ef45b638235efdb8a0f2f147358\"></a>\n\
&#160;</td><td class=\"memItemRight\" translate=\"no\" valign=\"bottom\"><a class=\"el\" translate=\"no\" href=\"#!/url=./cpp_ref/class_m_external_content_location_table.html#a2c7a9ef45b638235efdb8a0f2f147358\">~MExternalContentLocationTable</a> ()</td></tr>\n\
<tr class=\"memdesc:a2c7a9ef45b638235efdb8a0f2f147358\"><td class=\"mdescLeft\">&#160;</td><td class=\"mdescRight\">Class destructor. <br></td></tr>\n\
<tr class=\"separator:a2c7a9ef45b638235efdb8a0f2f147358\"><td class=\"memSeparator\" colspan=\"2\">&#160;</td></tr>\n\
<tr class=\"memitem:a6488faa3dec73da625fe519162a1cec0\"><td class=\"memItemLeft\" translate=\"no\" align=\"right\" valign=\"top\"><a class=\"el\" translate=\"no\" href=\"#!/url=./cpp_ref/class_m_status.html\">MStatus</a>&#160;</td><td class=\"memItemRight\" translate=\"no\" valign=\"bottom\"><a class=\"el\" translate=\"no\" href=\"#!/url=./cpp_ref/class_m_external_content_location_table.html#a6488faa3dec73da625fe519162a1cec0\">addEntry</a> (const <a class=\"el\" translate=\"no\" href=\"#!/url=./cpp_ref/class_m_string.html\">MString</a> &amp;key, const <a class=\"el\" translate=\"no\" href=\"#!/url=./cpp_ref/class_m_string.html\">MString</a> &amp;location)</td></tr>\n\
<tr class=\"memdesc:a6488faa3dec73da625fe519162a1cec0\"><td class=\"mdescLeft\">&#160;</td><td class=\"mdescRight\">Adds an external content location and its key to the table.  <a href=\"class_m_external_content_location_table.html#a6488faa3dec73da625fe519162a1cec0\">More...</a><br></td></tr>\n\
<tr class=\"separator:a6488faa3dec73da625fe519162a1cec0\"><td class=\"memSeparator\" colspan=\"2\">&#160;</td></tr>\n\
<tr class=\"memitem:a64fc25e6e6fa3433ee41b9bff040e834\"><td class=\"memItemLeft\" translate=\"no\" align=\"right\" valign=\"top\"><a class=\"el\" translate=\"no\" href=\"#!/url=./cpp_ref/class_m_status.html\">MStatus</a>&#160;</td><td class=\"memItemRight\" translate=\"no\" valign=\"bottom\"><a class=\"el\" translate=\"no\" href=\"#!/url=./cpp_ref/class_m_external_content_location_table.html#a64fc25e6e6fa3433ee41b9bff040e834\">getEntry</a> (unsigned int index, <a class=\"el\" translate=\"no\" href=\"#!/url=./cpp_ref/class_m_string.html\">MString</a> &amp;key, <a class=\"el\" translate=\"no\" href=\"#!/url=./cpp_ref/class_m_string.html\">MString</a> &amp;location) const </td></tr>\n\
<tr class=\"memdesc:a64fc25e6e6fa3433ee41b9bff040e834\"><td class=\"mdescLeft\">&#160;</td><td class=\"mdescRight\">NO SCRIPT SUPPORT.  <a href=\"class_m_external_content_location_table.html#a64fc25e6e6fa3433ee41b9bff040e834\">More...</a><br></td></tr>\n\
<tr class=\"separator:a64fc25e6e6fa3433ee41b9bff040e834\"><td class=\"memSeparator\" colspan=\"2\">&#160;</td></tr>\n\
<tr class=\"memitem:afaca888acb17d3160255da4f65ac5b7f\"><td class=\"memItemLeft\" translate=\"no\" align=\"right\" valign=\"top\"><a class=\"el\" translate=\"no\" href=\"#!/url=./cpp_ref/class_m_status.html\">MStatus</a>&#160;</td><td class=\"memItemRight\" translate=\"no\" valign=\"bottom\"><a class=\"el\" translate=\"no\" href=\"#!/url=./cpp_ref/class_m_external_content_location_table.html#afaca888acb17d3160255da4f65ac5b7f\">getLocation</a> (const <a class=\"el\" translate=\"no\" href=\"#!/url=./cpp_ref/class_m_string.html\">MString</a> &amp;key, <a class=\"el\" translate=\"no\" href=\"#!/url=./cpp_ref/class_m_string.html\">MString</a> &amp;location) const </td></tr>\n\
<tr class=\"memdesc:afaca888acb17d3160255da4f65ac5b7f\"><td class=\"mdescLeft\">&#160;</td><td class=\"mdescRight\">NO SCRIPT SUPPORT.  <a href=\"class_m_external_content_location_table.html#afaca888acb17d3160255da4f65ac5b7f\">More...</a><br></td></tr>\n\
<tr class=\"separator:afaca888acb17d3160255da4f65ac5b7f\"><td class=\"memSeparator\" colspan=\"2\">&#160;</td></tr>\n\
<tr class=\"memitem:a580388f31f60c46fac867ca48a48da1e\"><td class=\"memItemLeft\" translate=\"no\" align=\"right\" valign=\"top\">unsigned int&#160;</td><td class=\"memItemRight\" translate=\"no\" valign=\"bottom\"><a class=\"el\" translate=\"no\" href=\"#!/url=./cpp_ref/class_m_external_content_location_table.html#a580388f31f60c46fac867ca48a48da1e\">length</a> () const </td></tr>\n\
<tr class=\"memdesc:a580388f31f60c46fac867ca48a48da1e\"><td class=\"mdescLeft\">&#160;</td><td class=\"mdescRight\">Retrieves the number of entries in the table.  <a href=\"class_m_external_content_location_table.html#a580388f31f60c46fac867ca48a48da1e\">More...</a><br></td></tr>\n\
<tr class=\"separator:a580388f31f60c46fac867ca48a48da1e\"><td class=\"memSeparator\" colspan=\"2\">&#160;</td></tr>\n\
</table><table class=\"memberdecls\">\n\
<tr class=\"heading\"><td colspan=\"2\"><h2 class=\"groupheader\"><a name=\"friends\"></a>\n\
Friends</h2></td></tr>\n\
<tr class=\"memitem:a5b526ac01795855afe260c5a282c1132\"><td class=\"memItemLeft\" translate=\"no\" align=\"right\" valign=\"top\"><a class=\"anchor\" id=\"a5b526ac01795855afe260c5a282c1132\"></a>\n\
class&#160;</td><td class=\"memItemRight\" translate=\"no\" valign=\"bottom\"><b>MPxNode</b></td></tr>\n\
<tr class=\"separator:a5b526ac01795855afe260c5a282c1132\"><td class=\"memSeparator\" colspan=\"2\">&#160;</td></tr>\n\
<tr class=\"memitem:ae81cb943c3d6496877f8a953ce46f02f\"><td class=\"memItemLeft\" translate=\"no\" align=\"right\" valign=\"top\"><a class=\"anchor\" id=\"ae81cb943c3d6496877f8a953ce46f02f\"></a>\n\
class&#160;</td><td class=\"memItemRight\" translate=\"no\" valign=\"bottom\"><b>MFnDependencyNode</b></td></tr>\n\
<tr class=\"separator:ae81cb943c3d6496877f8a953ce46f02f\"><td class=\"memSeparator\" colspan=\"2\">&#160;</td></tr>\n\
</table>\n\
<h2 class=\"groupheader\">Member Function Documentation</h2>\n\
<a class=\"anchor\" id=\"a6488faa3dec73da625fe519162a1cec0\"></a>\n\
<div class=\"memitem\">\n\
<div class=\"memproto\">\n\
      <table class=\"memname\">\n\
        <tr>\n\
          <td class=\"memname\" translate=\"no\"><a class=\"el\" translate=\"no\" href=\"#!/url=./cpp_ref/class_m_status.html\">MStatus</a> addEntry </td>\n\
          <td>(</td>\n\
          <td class=\"paramtype\">const <a class=\"el\" translate=\"no\" href=\"#!/url=./cpp_ref/class_m_string.html\">MString</a> &amp;&#160;</td>\n\
          <td class=\"paramname\"><em>key</em>, </td>\n\
        </tr>\n\
        <tr>\n\
          <td class=\"paramkey\"></td>\n\
          <td></td>\n\
          <td class=\"paramtype\">const <a class=\"el\" translate=\"no\" href=\"#!/url=./cpp_ref/class_m_string.html\">MString</a> &amp;&#160;</td>\n\
          <td class=\"paramname\"><em>location</em>&#160;</td>\n\
        </tr>\n\
        <tr>\n\
          <td></td>\n\
          <td>)</td>\n\
          <td></td><td></td>\n\
        </tr>\n\
      </table>\n\
</div><div class=\"memdoc\">\n\
\n\
<p>Adds an external content location and its key to the table. </p>\n\
<dl class=\"params\"><dt>Parameters</dt><dd>\n\
  <table class=\"params\">\n\
    <tr><td class=\"paramdir\">[in]</td><td class=\"paramname\">key</td><td>An arbitrary string defined by the node. This will typically be an attribute name for situations where the content location is stored verbatim in a plug\'s value. </td></tr>\n\
    <tr><td class=\"paramdir\">[in]</td><td class=\"paramname\">location</td><td>Full path to the content referenced by the key.</td></tr>\n\
  </table>\n\
  </dd>\n\
</dl>\n\
<dl class=\"section return\"><dt>Returns</dt><dd>Return status. </dd></dl>\n\
<dl class=\"section user\"><dt>Status Codes:</dt><dd><ul>\n\
<li><b>MS::kSuccess</b> The method successfully added the entry. </li>\n\
<li><b>MS::kFailure</b> The method failed to add the entry. </li>\n\
</ul>\n\
</dd></dl>\n\
<dl class=\"section \"><div id=\"dynsection-example1\" class=\"dynheader closed\" onclick=\"return toggleVisibility(this)\" style=\"cursor:pointer;\"><dt><img id=\"dynsection-example1-trigger\" src=\"cpp_ref/closed.png\" alt=\"+\"> <b>Examples: </b></dt></div><div id=\"dynsection-example1-content\" class=\"dyncontent\" style=\"display:none;\"><dd><a class=\"el\" translate=\"no\" href=\"#!/url=./cpp_ref/scene_assembly_2assembly_definition_8cpp-example.html#a32\">sceneAssembly/assemblyDefinition.cpp</a>.</dd></div>\n\
</dl>\n\
</div>\n\
</div>\n\
<a class=\"anchor\" id=\"a64fc25e6e6fa3433ee41b9bff040e834\"></a>\n\
<div class=\"memitem\">\n\
<div class=\"memproto\">\n\
      <table class=\"memname\">\n\
        <tr>\n\
          <td class=\"memname\" translate=\"no\"><a class=\"el\" translate=\"no\" href=\"#!/url=./cpp_ref/class_m_status.html\">MStatus</a> getEntry </td>\n\
          <td>(</td>\n\
          <td class=\"paramtype\">unsigned int&#160;</td>\n\
          <td class=\"paramname\"><em>index</em>, </td>\n\
        </tr>\n\
        <tr>\n\
          <td class=\"paramkey\"></td>\n\
          <td></td>\n\
          <td class=\"paramtype\"><a class=\"el\" translate=\"no\" href=\"#!/url=./cpp_ref/class_m_string.html\">MString</a> &amp;&#160;</td>\n\
          <td class=\"paramname\"><em>key</em>, </td>\n\
        </tr>\n\
        <tr>\n\
          <td class=\"paramkey\"></td>\n\
          <td></td>\n\
          <td class=\"paramtype\"><a class=\"el\" translate=\"no\" href=\"#!/url=./cpp_ref/class_m_string.html\">MString</a> &amp;&#160;</td>\n\
          <td class=\"paramname\"><em>location</em>&#160;</td>\n\
        </tr>\n\
        <tr>\n\
          <td></td>\n\
          <td>)</td>\n\
          <td></td><td> const</td>\n\
        </tr>\n\
      </table>\n\
</div><div class=\"memdoc\">\n\
\n\
<p>NO SCRIPT SUPPORT. </p>\n\
<p>Retrieves an entry\'s key and location based on its index in the table.</p>\n\
<dl class=\"params\"><dt>Parameters</dt><dd>\n\
  <table class=\"params\">\n\
    <tr><td class=\"paramdir\">[in]</td><td class=\"paramname\">index</td><td>Position of the entry to retrieve information from. </td></tr>\n\
    <tr><td class=\"paramdir\">[out]</td><td class=\"paramname\">key</td><td>See documentation for <a class=\"el\" translate=\"no\" href=\"#!/url=./cpp_ref/class_m_external_content_location_table.html#a6488faa3dec73da625fe519162a1cec0\" title=\"Adds an external content location and its key to the table. \">MExternalContentLocationTable::addEntry</a>. </td></tr>\n\
    <tr><td class=\"paramdir\">[out]</td><td class=\"paramname\">location</td><td>See documentation for <a class=\"el\" translate=\"no\" href=\"#!/url=./cpp_ref/class_m_external_content_location_table.html#a6488faa3dec73da625fe519162a1cec0\" title=\"Adds an external content location and its key to the table. \">MExternalContentLocationTable::addEntry</a>.</td></tr>\n\
  </table>\n\
  </dd>\n\
</dl>\n\
<p>Note: In Python, this method has a different signature: </p><div class=\"fragment\"><div class=\"line\">def getEntryByIndex( </div>\n\
<div class=\"line\">  index,      # input integer</div>\n\
<div class=\"line\">  keyLocation # output array filled with [ key, location ]</div>\n\
<div class=\"line\">)</div>\n\
</div><!-- fragment --><dl class=\"section return\"><dt>Returns</dt><dd>Return status. </dd></dl>\n\
<dl class=\"section user\"><dt>Status Codes:</dt><dd><ul>\n\
<li><b>MS::kSuccess</b> The method successfully retrieved the entry. </li>\n\
<li><b>MS::kFailure</b> The method failed to retrieved the entry. </li>\n\
</ul>\n\
</dd></dl>\n\
<dl class=\"section \"><div id=\"dynsection-example2\" class=\"dynheader closed\" onclick=\"return toggleVisibility(this)\" style=\"cursor:pointer;\"><dt><img id=\"dynsection-example2-trigger\" src=\"cpp_ref/closed.png\" alt=\"+\"> <b>Examples: </b></dt></div><div id=\"dynsection-example2-content\" class=\"dyncontent\" style=\"display:none;\"><dd><a class=\"el\" translate=\"no\" href=\"#!/url=./cpp_ref/scene_assembly_2assembly_definition_8cpp-example.html#a28\">sceneAssembly/assemblyDefinition.cpp</a>.</dd></div>\n\
</dl>\n\
</div>\n\
</div>\n\
<a class=\"anchor\" id=\"afaca888acb17d3160255da4f65ac5b7f\"></a>\n\
<div class=\"memitem\">\n\
<div class=\"memproto\">\n\
      <table class=\"memname\">\n\
        <tr>\n\
          <td class=\"memname\" translate=\"no\"><a class=\"el\" translate=\"no\" href=\"#!/url=./cpp_ref/class_m_status.html\">MStatus</a> getLocation </td>\n\
          <td>(</td>\n\
          <td class=\"paramtype\">const <a class=\"el\" translate=\"no\" href=\"#!/url=./cpp_ref/class_m_string.html\">MString</a> &amp;&#160;</td>\n\
          <td class=\"paramname\"><em>key</em>, </td>\n\
        </tr>\n\
        <tr>\n\
          <td class=\"paramkey\"></td>\n\
          <td></td>\n\
          <td class=\"paramtype\"><a class=\"el\" translate=\"no\" href=\"#!/url=./cpp_ref/class_m_string.html\">MString</a> &amp;&#160;</td>\n\
          <td class=\"paramname\"><em>location</em>&#160;</td>\n\
        </tr>\n\
        <tr>\n\
          <td></td>\n\
          <td>)</td>\n\
          <td></td><td> const</td>\n\
        </tr>\n\
      </table>\n\
</div><div class=\"memdoc\">\n\
\n\
<p>NO SCRIPT SUPPORT. </p>\n\
<p>Retrieves an entry\'s location based on the associated key.</p>\n\
<dl class=\"params\"><dt>Parameters</dt><dd>\n\
  <table class=\"params\">\n\
    <tr><td class=\"paramdir\">[in]</td><td class=\"paramname\">key</td><td>See documentation for <a class=\"el\" translate=\"no\" href=\"#!/url=./cpp_ref/class_m_external_content_location_table.html#a6488faa3dec73da625fe519162a1cec0\" title=\"Adds an external content location and its key to the table. \">MExternalContentLocationTable::addEntry</a>. </td></tr>\n\
    <tr><td class=\"paramdir\">[out]</td><td class=\"paramname\">location</td><td>See documentation for <a class=\"el\" translate=\"no\" href=\"#!/url=./cpp_ref/class_m_external_content_location_table.html#a6488faa3dec73da625fe519162a1cec0\" title=\"Adds an external content location and its key to the table. \">MExternalContentLocationTable::addEntry</a>.</td></tr>\n\
  </table>\n\
  </dd>\n\
</dl>\n\
<p>Note: In Python, this method has a different signature: </p><div class=\"fragment\"><div class=\"line\">def getLocationByKey( </div>\n\
<div class=\"line\">  key # input <span class=\"keywordtype\">string</span></div>\n\
<div class=\"line\">)</div>\n\
</div><!-- fragment --><p> The function returns a string.</p>\n\
<dl class=\"section return\"><dt>Returns</dt><dd>Return status. </dd></dl>\n\
<dl class=\"section user\"><dt>Status Codes:</dt><dd><ul>\n\
<li><b>MS::kSuccess</b> The method successfully added the entry. </li>\n\
<li><b>MS::kFailure</b> The method failed to add the entry. </li>\n\
</ul>\n\
</dd></dl>\n\
<dl class=\"section \"><div id=\"dynsection-example3\" class=\"dynheader closed\" onclick=\"return toggleVisibility(this)\" style=\"cursor:pointer;\"><dt><img id=\"dynsection-example3-trigger\" src=\"cpp_ref/closed.png\" alt=\"+\"> <b>Examples: </b></dt></div><div id=\"dynsection-example3-content\" class=\"dyncontent\" style=\"display:none;\"><dd><a class=\"el\" translate=\"no\" href=\"#!/url=./cpp_ref/scene_assembly_2adsk_representations_8cpp-example.html#a22\">sceneAssembly/adskRepresentations.cpp</a>, and <a class=\"el\" translate=\"no\" href=\"#!/url=./cpp_ref/scene_assembly_2assembly_reference_8cpp-example.html#a20\">sceneAssembly/assemblyReference.cpp</a>.</dd></div>\n\
</dl>\n\
</div>\n\
</div>\n\
<a class=\"anchor\" id=\"a580388f31f60c46fac867ca48a48da1e\"></a>\n\
<div class=\"memitem\">\n\
<div class=\"memproto\">\n\
      <table class=\"memname\">\n\
        <tr>\n\
          <td class=\"memname\" translate=\"no\">unsigned int length </td>\n\
          <td>(</td>\n\
          <td class=\"paramname\"></td><td>)</td>\n\
          <td> const</td>\n\
        </tr>\n\
      </table>\n\
</div><div class=\"memdoc\">\n\
\n\
<p>Retrieves the number of entries in the table. </p>\n\
<dl class=\"section return\"><dt>Returns</dt><dd>Number of entries. </dd></dl>\n\
<dl class=\"section \"><div id=\"dynsection-example4\" class=\"dynheader closed\" onclick=\"return toggleVisibility(this)\" style=\"cursor:pointer;\"><dt><img id=\"dynsection-example4-trigger\" src=\"cpp_ref/closed.png\" alt=\"+\"> <b>Examples: </b></dt></div><div id=\"dynsection-example4-content\" class=\"dyncontent\" style=\"display:none;\"><dd><a class=\"el\" translate=\"no\" href=\"#!/url=./cpp_ref/scene_assembly_2assembly_definition_8cpp-example.html#a27\">sceneAssembly/assemblyDefinition.cpp</a>.</dd></div>\n\
</dl>\n\
</div>\n\
</div>\n\
<hr>The documentation for this class was generated from the following files:<ul>\n\
<li>MExternalContentLocationTable.h</li>\n\
<li>MExternalContentLocationTable.cpp</li>\n\
</ul>\n\
</div><!-- contents -->\n\
</div><!-- doc-content -->\n\
          <div class=\"footer-block\"><a href=\"../html/ac.cmtdialog.htm\" class=\"comments-anchor\" target=\"_blank\"><span class=\"comments-link\">Please send us your comment about this page</span></a></div></div>\n\
   </div></body>\n\
</html>\n\
";