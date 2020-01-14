var topic = "<!-- saved from url=(0024)http://docs.autodesk.com -->\n\
<html>\n\
   <head><script src=\"../scripts/yepnope.1.5.4-min.js\" type=\"text/javascript\"></script><script src=\"../scripts/lib/jquery-1.11.1.min.js\" type=\"text/javascript\"></script>\n\
      <title>C++ API Reference: MSwatchRenderRegister Class Reference</title>\n\
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
    cpp_ref_adsk_ref_toc.initNavTree(\'class_m_swatch_render_register.html\', tocPrefix);\n\
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
      <div>\n\
         <div class=\"head\">\n\
            <h1>C++ API Reference: MSwatchRenderRegister Class Reference</h1>\n\
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
<!-- window showing the filter options -->\n\
\n\
\n\
<!-- iframe showing the search results (closed by default) -->\n\
\n\
\n\
<div class=\"header\">\n\
  \n\
  <div class=\"headertitle\">\n\
<div class=\"title\">MSwatchRenderRegister Class Reference<div class=\"ingroups\"><a class=\"el\" href=\"#!/url=./cpp_ref/group___open_maya_render.html\">OpenMayaRender - API module for rendering</a></div></div>  </div>\n\
<div class=\"summary\">\n\
<a href=\"class_m_swatch_render_register.html#pub-static-methods\">Static Public Member Functions</a> &#124;\n\
<a href=\"#!/url=./cpp_ref/class_m_swatch_render_register-members.html\">List of all members</a>  </div></div><!--header-->\n\
<div class=\"contents\">\n\
\n\
<p>Manages swatch generators.  \n\
 <a href=\"#!/url=./cpp_ref/class_m_swatch_render_register.html#details\">More...</a></p>\n\
\n\
<p><code>#include &lt;MSwatchRenderRegister.h&gt;</code></p>\n\
<table class=\"memberdecls\">\n\
<tr class=\"heading\"><td colspan=\"2\"><h2 class=\"groupheader\"><a name=\"pub-static-methods\"></a>\n\
Static Public Member Functions</h2></td></tr>\n\
<tr class=\"memitem:a0eb6fd347dae82b48e1ff1f1da9c18a6\"><td class=\"memItemLeft\" align=\"right\" valign=\"top\">static <a class=\"el\" href=\"#!/url=./cpp_ref/class_m_status.html\">MStatus</a>&#160;</td><td class=\"memItemRight\" valign=\"bottom\"><a class=\"el\" href=\"#!/url=./cpp_ref/class_m_swatch_render_register.html#a0eb6fd347dae82b48e1ff1f1da9c18a6\">registerSwatchRender</a> (<a class=\"el\" href=\"#!/url=./cpp_ref/class_m_string.html\">MString</a> swatchGenName, MSwatchRenderCreatorFnPtr fnPtr)</td></tr>\n\
<tr class=\"memdesc:a0eb6fd347dae82b48e1ff1f1da9c18a6\"><td class=\"mdescLeft\">&#160;</td><td class=\"mdescRight\">registers a new swatch generator creation function by name.  <a href=\"class_m_swatch_render_register.html#a0eb6fd347dae82b48e1ff1f1da9c18a6\">More...</a><br></td></tr>\n\
<tr class=\"separator:a0eb6fd347dae82b48e1ff1f1da9c18a6\"><td class=\"memSeparator\" colspan=\"2\">&#160;</td></tr>\n\
<tr class=\"memitem:aaf631cf464914a7a8bae8205ec591ab8\"><td class=\"memItemLeft\" align=\"right\" valign=\"top\">static <a class=\"el\" href=\"#!/url=./cpp_ref/class_m_status.html\">MStatus</a>&#160;</td><td class=\"memItemRight\" valign=\"bottom\"><a class=\"el\" href=\"#!/url=./cpp_ref/class_m_swatch_render_register.html#aaf631cf464914a7a8bae8205ec591ab8\">unregisterSwatchRender</a> (<a class=\"el\" href=\"#!/url=./cpp_ref/class_m_string.html\">MString</a> swatchGenName)</td></tr>\n\
<tr class=\"memdesc:aaf631cf464914a7a8bae8205ec591ab8\"><td class=\"mdescLeft\">&#160;</td><td class=\"mdescRight\">removes the previously registered swatch generator  <a href=\"class_m_swatch_render_register.html#aaf631cf464914a7a8bae8205ec591ab8\">More...</a><br></td></tr>\n\
<tr class=\"separator:aaf631cf464914a7a8bae8205ec591ab8\"><td class=\"memSeparator\" colspan=\"2\">&#160;</td></tr>\n\
</table>\n\
<a name=\"details\" id=\"details\"></a><h2 class=\"groupheader\">Detailed Description</h2>\n\
<div class=\"textblock\"><p>Manages swatch generators. </p>\n\
<p>Provides an interface for plugins to register/unregister swatch generator classes (derived from <a class=\"el\" href=\"#!/url=./cpp_ref/class_m_swatch_render_base.html\" title=\"Swatch Render Base class. \">MSwatchRenderBase</a>) with Maya. Whenever a swatch needs to be generated for a node, it checks the classfication string of the node for the preferred swatch generator. If a match is found, it creates and manages the swatch generator object (that is it deletes the swatch generator object once the image has been generated). The doIteration function is called for generating the swatch. The doIteration function is called repeatedly (during idle events) till it returns true. This allows for generation of the swatch in stages. </p>\n\
</div><h2 class=\"groupheader\">Member Function Documentation</h2>\n\
<a class=\"anchor\" id=\"a0eb6fd347dae82b48e1ff1f1da9c18a6\"></a>\n\
<div class=\"memitem\">\n\
<div class=\"memproto\">\n\
<table class=\"mlabels\">\n\
  <tr>\n\
  <td class=\"mlabels-left\">\n\
      <table class=\"memname\">\n\
        <tr>\n\
          <td class=\"memname\">OPENMAYA_MAJOR_NAMESPACE_OPEN <a class=\"el\" href=\"#!/url=./cpp_ref/class_m_status.html\">MStatus</a> registerSwatchRender </td>\n\
          <td>(</td>\n\
          <td class=\"paramtype\"><a class=\"el\" href=\"#!/url=./cpp_ref/class_m_string.html\">MString</a>&#160;</td>\n\
          <td class=\"paramname\"><em>swatchGenName</em>, </td>\n\
        </tr>\n\
        <tr>\n\
          <td class=\"paramkey\"></td>\n\
          <td></td>\n\
          <td class=\"paramtype\">MSwatchRenderCreatorFnPtr&#160;</td>\n\
          <td class=\"paramname\"><em>fnPtr</em>&#160;</td>\n\
        </tr>\n\
        <tr>\n\
          <td></td>\n\
          <td>)</td>\n\
          <td></td><td></td>\n\
        </tr>\n\
      </table>\n\
  </td>\n\
  <td class=\"mlabels-right\">\n\
<span class=\"mlabels\"><span class=\"mlabel\">static</span></span>  </td>\n\
  </tr>\n\
</table>\n\
</div><div class=\"memdoc\">\n\
\n\
<p>registers a new swatch generator creation function by name. </p>\n\
<p>Register the swatch rendering object creation function with the swatch render manager.</p>\n\
<dl class=\"params\"><dt>Parameters</dt><dd>\n\
  <table class=\"params\">\n\
    <tr><td class=\"paramdir\">[in]</td><td class=\"paramname\">swatchGenName</td><td>A name to identify the swatch generator. Should match the name used in the \"swatch\" classfication string of the nodes</td></tr>\n\
    <tr><td class=\"paramdir\">[in]</td><td class=\"paramname\">fnPtr</td><td>Pointer to a function which takes the node and resolution of the swatch image to be generated and creates the swatch generator object.</td></tr>\n\
  </table>\n\
  </dd>\n\
</dl>\n\
<p>The signature of the function needs to be as follows: </p><div class=\"fragment\"><div class=\"line\"><a class=\"code\" href=\"#!/url=./cpp_ref/class_m_swatch_render_base.html\">MSwatchRenderBase</a>* fn_name(<a class=\"code\" href=\"#!/url=./cpp_ref/class_m_object.html\">MObject</a> dependNode, <a class=\"code\" href=\"#!/url=./cpp_ref/class_m_object.html\">MObject</a> renderNode, <span class=\"keywordtype\">int</span> imageResolution)</div>\n\
</div><!-- fragment --><p>This function needs to allocate the swatch generator object using new and return the pointer. (This is necessary because delete is called on the returned pointer by Maya when work is done.)</p>\n\
<dl class=\"section return\"><dt>Returns</dt><dd><ul>\n\
<li>MS::kFailure if an error occured. Common potential errors include: the swatch generator name has already been used. </li>\n\
<li>MS::kSuccess otherwise. </li>\n\
</ul>\n\
</dd></dl>\n\
<dl class=\"section \"><div id=\"dynsection-example0\" class=\"dynheader closed\" onclick=\"return toggleVisibility(this)\" style=\"cursor:pointer;\"><dt><img id=\"dynsection-example0-trigger\" src=\"cpp_ref/closed.png\" alt=\"+\"> <b>Examples: </b></dt></div><div id=\"dynsection-example0-content\" class=\"dyncontent\" style=\"display:none;\"><dd><a class=\"el\" href=\"#!/url=./cpp_ref/dx11_shader_2dx11_shader_plugin_main_8cpp-example.html#a6\">dx11Shader/dx11ShaderPluginMain.cpp</a>, and <a class=\"el\" href=\"#!/url=./cpp_ref/hlsl_shader_2hlsl_plugin_main_8cpp-example.html#a5\">hlslShader/hlslPluginMain.cpp</a>.</dd></div>\n\
</dl>\n\
</div>\n\
</div>\n\
<a class=\"anchor\" id=\"aaf631cf464914a7a8bae8205ec591ab8\"></a>\n\
<div class=\"memitem\">\n\
<div class=\"memproto\">\n\
<table class=\"mlabels\">\n\
  <tr>\n\
  <td class=\"mlabels-left\">\n\
      <table class=\"memname\">\n\
        <tr>\n\
          <td class=\"memname\"><a class=\"el\" href=\"#!/url=./cpp_ref/class_m_status.html\">MStatus</a> unregisterSwatchRender </td>\n\
          <td>(</td>\n\
          <td class=\"paramtype\"><a class=\"el\" href=\"#!/url=./cpp_ref/class_m_string.html\">MString</a>&#160;</td>\n\
          <td class=\"paramname\"><em>swatchGen</em></td><td>)</td>\n\
          <td></td>\n\
        </tr>\n\
      </table>\n\
  </td>\n\
  <td class=\"mlabels-right\">\n\
<span class=\"mlabels\"><span class=\"mlabel\">static</span></span>  </td>\n\
  </tr>\n\
</table>\n\
</div><div class=\"memdoc\">\n\
\n\
<p>removes the previously registered swatch generator </p>\n\
<p>Un-register the swatch rendering object from the swatch render manager.</p>\n\
<dl class=\"params\"><dt>Parameters</dt><dd>\n\
  <table class=\"params\">\n\
    <tr><td class=\"paramdir\">[in]</td><td class=\"paramname\">swatchGen</td><td>The name which was used for the swatch generator. Should match the name used during registration.</td></tr>\n\
  </table>\n\
  </dd>\n\
</dl>\n\
<dl class=\"section return\"><dt>Returns</dt><dd><ul>\n\
<li>MS::kFailure if an error occured. Common potential errors include: the swatch generator has already been unregistered. </li>\n\
<li>MS::kSuccess otherwise. </li>\n\
</ul>\n\
</dd></dl>\n\
\n\
</div>\n\
</div>\n\
<hr>The documentation for this class was generated from the following files:<ul>\n\
<li>MSwatchRenderRegister.h</li>\n\
<li>MSwatchRenderRegister.cpp</li>\n\
</ul>\n\
</div><!-- contents -->\n\
</div><!-- doc-content -->\n\
<!-- start footer part -->\n\
\n\
      <div class=\"footer-block\"><a href=\"../html/ac.cmtdialog.htm\" class=\"comments-anchor\" target=\"_blank\"><span class=\"comments-link\">Please send us your comment about this page</span></a></div></div>\n\
   </div></body>\n\
</html>\n\
";