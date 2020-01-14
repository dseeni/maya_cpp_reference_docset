var topic = "<!-- saved from url=(0024)http://docs.autodesk.com -->\n\
<html>\n\
   <head><script src=\"../scripts/yepnope.1.5.4-min.js\" type=\"text/javascript\"></script><script src=\"../scripts/lib/jquery-1.11.1.min.js\" type=\"text/javascript\"></script>\n\
      <title>C++ API Reference: hwApiTextureTest/hwApiTextureTestStrings.cpp</title>\n\
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
    cpp_ref_adsk_ref_toc.initNavTree(\'hw_api_texture_test_2hw_api_texture_test_strings_8cpp-example.html\', tocPrefix);\n\
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
            <h1>C++ API Reference: hwApiTextureTest/hwApiTextureTestStrings.cpp</h1>\n\
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
      <li><a href=\"#!/url=./cpp_ref/annotated.html\"><span>Classes</span></a></li>\n\
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
  <div class=\"headertitle\">\n\
<div class=\"title\">hwApiTextureTest/hwApiTextureTestStrings.cpp</div>  </div>\n\
</div><!--header-->\n\
<div class=\"contents\">\n\
<div class=\"fragment\"><div class=\"line\"><span class=\"preprocessor\">#include &quot;hwApiTextureTestStrings.h&quot;</span></div>\n\
<div class=\"line\"></div>\n\
<div class=\"line\"><span class=\"preprocessor\">#include &lt;maya/MStringResource.h&gt;</span></div>\n\
<div class=\"line\"><span class=\"preprocessor\">#include &lt;maya/MString.h&gt;</span></div>\n\
<div class=\"line\"></div>\n\
<div class=\"line\"><span class=\"keyword\">namespace </span>hwApiTextureTestStrings</div>\n\
<div class=\"line\">{</div>\n\
<div class=\"line\"><span class=\"preprocessor\">    #define kPluginId  &quot;hwApiTextureTest&quot;</span></div>\n\
<div class=\"line\"></div>\n\
<div class=\"line\">    <span class=\"comment\">// Common</span></div>\n\
<div class=\"line\">    <span class=\"keyword\">const</span> <a name=\"_a0\"></a><a class=\"code\" href=\"#!/url=./cpp_ref/class_m_string_resource_id.html\">MStringResourceId</a> kErrorRenderer          ( kPluginId, <span class=\"stringliteral\">&quot;kErrorRenderer&quot;</span>,          <a name=\"_a1\"></a><a class=\"code\" href=\"#!/url=./cpp_ref/class_m_string.html\">MString</a>( <span class=\"stringliteral\">&quot;hwApiTextureTest : Failed to acquire renderer.&quot;</span> ) );</div>\n\
<div class=\"line\">    <span class=\"keyword\">const</span> <a class=\"code\" href=\"#!/url=./cpp_ref/class_m_string_resource_id.html\">MStringResourceId</a> kErrorTargetManager     ( kPluginId, <span class=\"stringliteral\">&quot;kErrorTargetManager&quot;</span>,     <a class=\"code\" href=\"#!/url=./cpp_ref/class_m_string.html\">MString</a>( <span class=\"stringliteral\">&quot;hwApiTextureTest : Failed to acquire target manager.&quot;</span> ) );</div>\n\
<div class=\"line\">    <span class=\"keyword\">const</span> <a class=\"code\" href=\"#!/url=./cpp_ref/class_m_string_resource_id.html\">MStringResourceId</a> kErrorTextureManager    ( kPluginId, <span class=\"stringliteral\">&quot;kErrorTextureManager&quot;</span>,    <a class=\"code\" href=\"#!/url=./cpp_ref/class_m_string.html\">MString</a>( <span class=\"stringliteral\">&quot;hwApiTextureTest : Failed to acquire texture manager.&quot;</span> ) );</div>\n\
<div class=\"line\"></div>\n\
<div class=\"line\">    <span class=\"comment\">// Load specific</span></div>\n\
<div class=\"line\">    <span class=\"keyword\">const</span> <a class=\"code\" href=\"#!/url=./cpp_ref/class_m_string_resource_id.html\">MStringResourceId</a> kBeginLoadTest          ( kPluginId, <span class=\"stringliteral\">&quot;kBeginLoadTest&quot;</span>,          <a class=\"code\" href=\"#!/url=./cpp_ref/class_m_string.html\">MString</a>( <span class=\"stringliteral\">&quot;hwApiTextureTest load start ...&quot;</span> ) );</div>\n\
<div class=\"line\">    <span class=\"keyword\">const</span> <a class=\"code\" href=\"#!/url=./cpp_ref/class_m_string_resource_id.html\">MStringResourceId</a> kEndLoadTest            ( kPluginId, <span class=\"stringliteral\">&quot;kEndLoadTest&quot;</span>,            <a class=\"code\" href=\"#!/url=./cpp_ref/class_m_string.html\">MString</a>( <span class=\"stringliteral\">&quot;hwApiTextureTest load done.&quot;</span> ) );</div>\n\
<div class=\"line\">    <span class=\"keyword\">const</span> <a class=\"code\" href=\"#!/url=./cpp_ref/class_m_string_resource_id.html\">MStringResourceId</a> kErrorLoadPathArg       ( kPluginId, <span class=\"stringliteral\">&quot;kErrorLoadPathArg&quot;</span>,       <a class=\"code\" href=\"#!/url=./cpp_ref/class_m_string.html\">MString</a>( <span class=\"stringliteral\">&quot;hwApiTextureTest : Failed to parse path argument.&quot;</span> ) );</div>\n\
<div class=\"line\">    <span class=\"keyword\">const</span> <a class=\"code\" href=\"#!/url=./cpp_ref/class_m_string_resource_id.html\">MStringResourceId</a> kErrorLoadNoTexture     ( kPluginId, <span class=\"stringliteral\">&quot;kErrorLoadNoTexture&quot;</span>,     <a class=\"code\" href=\"#!/url=./cpp_ref/class_m_string.html\">MString</a>( <span class=\"stringliteral\">&quot;hwApiTextureTest : No texture found.&quot;</span> ) );</div>\n\
<div class=\"line\">    <span class=\"keyword\">const</span> <a class=\"code\" href=\"#!/url=./cpp_ref/class_m_string_resource_id.html\">MStringResourceId</a> kErrorLoadTexture       ( kPluginId, <span class=\"stringliteral\">&quot;kErrorLoadTexture&quot;</span>,       <a class=\"code\" href=\"#!/url=./cpp_ref/class_m_string.html\">MString</a>( <span class=\"stringliteral\">&quot;Failed to load texture &lt;&lt;^1s&gt;&gt;.&quot;</span> ) );</div>\n\
<div class=\"line\">    <span class=\"keyword\">const</span> <a class=\"code\" href=\"#!/url=./cpp_ref/class_m_string_resource_id.html\">MStringResourceId</a> kSuccessLoadTexture     ( kPluginId, <span class=\"stringliteral\">&quot;kSuccessLoadTexture&quot;</span>,     <a class=\"code\" href=\"#!/url=./cpp_ref/class_m_string.html\">MString</a>( <span class=\"stringliteral\">&quot;Texture &lt;&lt;^1s&gt;&gt; loaded successfully.&quot;</span> ) );</div>\n\
<div class=\"line\">    <span class=\"keyword\">const</span> <a class=\"code\" href=\"#!/url=./cpp_ref/class_m_string_resource_id.html\">MStringResourceId</a> kErrorTileTexture       ( kPluginId, <span class=\"stringliteral\">&quot;kErrorTileTexture&quot;</span>,       <a class=\"code\" href=\"#!/url=./cpp_ref/class_m_string.html\">MString</a>( <span class=\"stringliteral\">&quot;Failed to tile texture &lt;&lt;^1s&gt;&gt;.&quot;</span> ) );</div>\n\
<div class=\"line\">    <span class=\"keyword\">const</span> <a class=\"code\" href=\"#!/url=./cpp_ref/class_m_string_resource_id.html\">MStringResourceId</a> kTileTransform          ( kPluginId, <span class=\"stringliteral\">&quot;kTileTransform&quot;</span>,          <a class=\"code\" href=\"#!/url=./cpp_ref/class_m_string.html\">MString</a>( <span class=\"stringliteral\">&quot;Texture UV scale ^1s,^2s, UV offset=^3s,^4s.&quot;</span> ) );</div>\n\
<div class=\"line\"></div>\n\
<div class=\"line\">    <span class=\"comment\">// Save specific</span></div>\n\
<div class=\"line\">    <span class=\"keyword\">const</span> <a class=\"code\" href=\"#!/url=./cpp_ref/class_m_string_resource_id.html\">MStringResourceId</a> kBeginSaveTest          ( kPluginId, <span class=\"stringliteral\">&quot;kBeginSaveTest&quot;</span>,          <a class=\"code\" href=\"#!/url=./cpp_ref/class_m_string.html\">MString</a>( <span class=\"stringliteral\">&quot;hwApiTextureTest save start ...&quot;</span> ) );</div>\n\
<div class=\"line\">    <span class=\"keyword\">const</span> <a class=\"code\" href=\"#!/url=./cpp_ref/class_m_string_resource_id.html\">MStringResourceId</a> kEndSaveTest            ( kPluginId, <span class=\"stringliteral\">&quot;kEndSaveTest&quot;</span>,            <a class=\"code\" href=\"#!/url=./cpp_ref/class_m_string.html\">MString</a>( <span class=\"stringliteral\">&quot;hwApiTextureTest save done.&quot;</span> ) );</div>\n\
<div class=\"line\">    <span class=\"keyword\">const</span> <a class=\"code\" href=\"#!/url=./cpp_ref/class_m_string_resource_id.html\">MStringResourceId</a> kErrorSavePathArg       ( kPluginId, <span class=\"stringliteral\">&quot;kErrorSavePathArg&quot;</span>,       <a class=\"code\" href=\"#!/url=./cpp_ref/class_m_string.html\">MString</a>( <span class=\"stringliteral\">&quot;hwApiTextureTest : Failed to parse path argument.&quot;</span> ) );</div>\n\
<div class=\"line\">    <span class=\"keyword\">const</span> <a class=\"code\" href=\"#!/url=./cpp_ref/class_m_string_resource_id.html\">MStringResourceId</a> kErrorSaveFormatArg     ( kPluginId, <span class=\"stringliteral\">&quot;kErrorSaveFormatArg&quot;</span>,     <a class=\"code\" href=\"#!/url=./cpp_ref/class_m_string.html\">MString</a>( <span class=\"stringliteral\">&quot;hwApiTextureTest : Failed to parse format argument.&quot;</span> ) );</div>\n\
<div class=\"line\">    <span class=\"keyword\">const</span> <a class=\"code\" href=\"#!/url=./cpp_ref/class_m_string_resource_id.html\">MStringResourceId</a> kErrorSaveGrabArg       ( kPluginId, <span class=\"stringliteral\">&quot;kErrorSaveGrabArg&quot;</span>,       <a class=\"code\" href=\"#!/url=./cpp_ref/class_m_string.html\">MString</a>( <span class=\"stringliteral\">&quot;hwApiTextureTest : Failed to grab screen pixels.&quot;</span> ) );</div>\n\
<div class=\"line\">    <span class=\"keyword\">const</span> <a class=\"code\" href=\"#!/url=./cpp_ref/class_m_string_resource_id.html\">MStringResourceId</a> kErrorSaveAcquireTexture( kPluginId, <span class=\"stringliteral\">&quot;kErrorSaveAcquireTexture&quot;</span>,<a class=\"code\" href=\"#!/url=./cpp_ref/class_m_string.html\">MString</a>( <span class=\"stringliteral\">&quot;hwApiTextureTest : Failed to acquire texture from screen pixels.&quot;</span> ) );</div>\n\
<div class=\"line\">    <span class=\"keyword\">const</span> <a class=\"code\" href=\"#!/url=./cpp_ref/class_m_string_resource_id.html\">MStringResourceId</a> kErrorSaveTexture       ( kPluginId, <span class=\"stringliteral\">&quot;kErrorSaveTexture&quot;</span>,       <a class=\"code\" href=\"#!/url=./cpp_ref/class_m_string.html\">MString</a>( <span class=\"stringliteral\">&quot;Failed to save texture &lt;&lt;^1s&gt;&gt; &lt;&lt;^2s&gt;&gt;.&quot;</span> ) );</div>\n\
<div class=\"line\">    <span class=\"keyword\">const</span> <a class=\"code\" href=\"#!/url=./cpp_ref/class_m_string_resource_id.html\">MStringResourceId</a> kSuccessSaveTexture     ( kPluginId, <span class=\"stringliteral\">&quot;kSuccessSaveTexture&quot;</span>,     <a class=\"code\" href=\"#!/url=./cpp_ref/class_m_string.html\">MString</a>( <span class=\"stringliteral\">&quot;Texture &lt;&lt;^1s&gt;&gt; &lt;&lt;^2s&gt;&gt; saved successfully.&quot;</span> ) );</div>\n\
<div class=\"line\"></div>\n\
<div class=\"line\">    <span class=\"comment\">// DX specific</span></div>\n\
<div class=\"line\">    <span class=\"keyword\">const</span> <a class=\"code\" href=\"#!/url=./cpp_ref/class_m_string_resource_id.html\">MStringResourceId</a> kDxErrorEffect          ( kPluginId, <span class=\"stringliteral\">&quot;kDxErrorEffect&quot;</span>,          <a class=\"code\" href=\"#!/url=./cpp_ref/class_m_string.html\">MString</a>( <span class=\"stringliteral\">&quot;Failed to create effect &lt;&lt;^1s&gt;&gt;.&quot;</span> ) );</div>\n\
<div class=\"line\">    <span class=\"keyword\">const</span> <a class=\"code\" href=\"#!/url=./cpp_ref/class_m_string_resource_id.html\">MStringResourceId</a> kDxErrorInputLayout     ( kPluginId, <span class=\"stringliteral\">&quot;kDxErrorInputLayout&quot;</span>,     <a class=\"code\" href=\"#!/url=./cpp_ref/class_m_string.html\">MString</a>( <span class=\"stringliteral\">&quot;Failed to create input layout.&quot;</span> ) );</div>\n\
<div class=\"line\">}</div>\n\
<div class=\"line\"></div>\n\
<div class=\"line\"></div>\n\
<div class=\"line\"><span class=\"comment\">// Register all strings</span></div>\n\
<div class=\"line\"><span class=\"comment\">//</span></div>\n\
<div class=\"line\"><a name=\"_a2\"></a><a class=\"code\" href=\"#!/url=./cpp_ref/class_m_status.html\">MStatus</a> hwApiTextureTestStrings::registerMStringResources()</div>\n\
<div class=\"line\">{</div>\n\
<div class=\"line\">    <span class=\"comment\">// Common</span></div>\n\
<div class=\"line\">    <a name=\"a3\"></a><a class=\"code\" href=\"#!/url=./cpp_ref/class_m_string_resource.html#a02fc22430bb24b5bfe27a65bd2d9a762\">MStringResource::registerString</a>( kErrorRenderer );</div>\n\
<div class=\"line\">    <a class=\"code\" href=\"#!/url=./cpp_ref/class_m_string_resource.html#a02fc22430bb24b5bfe27a65bd2d9a762\">MStringResource::registerString</a>( kErrorTargetManager );</div>\n\
<div class=\"line\">    <a class=\"code\" href=\"#!/url=./cpp_ref/class_m_string_resource.html#a02fc22430bb24b5bfe27a65bd2d9a762\">MStringResource::registerString</a>( kErrorTextureManager );</div>\n\
<div class=\"line\"></div>\n\
<div class=\"line\">    <span class=\"comment\">// Load specific</span></div>\n\
<div class=\"line\">    <a class=\"code\" href=\"#!/url=./cpp_ref/class_m_string_resource.html#a02fc22430bb24b5bfe27a65bd2d9a762\">MStringResource::registerString</a>( kBeginLoadTest );</div>\n\
<div class=\"line\">    <a class=\"code\" href=\"#!/url=./cpp_ref/class_m_string_resource.html#a02fc22430bb24b5bfe27a65bd2d9a762\">MStringResource::registerString</a>( kEndLoadTest );</div>\n\
<div class=\"line\">    <a class=\"code\" href=\"#!/url=./cpp_ref/class_m_string_resource.html#a02fc22430bb24b5bfe27a65bd2d9a762\">MStringResource::registerString</a>( kErrorLoadPathArg );</div>\n\
<div class=\"line\">    <a class=\"code\" href=\"#!/url=./cpp_ref/class_m_string_resource.html#a02fc22430bb24b5bfe27a65bd2d9a762\">MStringResource::registerString</a>( kErrorLoadNoTexture );</div>\n\
<div class=\"line\">    <a class=\"code\" href=\"#!/url=./cpp_ref/class_m_string_resource.html#a02fc22430bb24b5bfe27a65bd2d9a762\">MStringResource::registerString</a>( kErrorLoadTexture );</div>\n\
<div class=\"line\">    <a class=\"code\" href=\"#!/url=./cpp_ref/class_m_string_resource.html#a02fc22430bb24b5bfe27a65bd2d9a762\">MStringResource::registerString</a>( kSuccessLoadTexture );</div>\n\
<div class=\"line\"></div>\n\
<div class=\"line\">    <span class=\"comment\">// Save specific</span></div>\n\
<div class=\"line\">    <a class=\"code\" href=\"#!/url=./cpp_ref/class_m_string_resource.html#a02fc22430bb24b5bfe27a65bd2d9a762\">MStringResource::registerString</a>( kBeginSaveTest );</div>\n\
<div class=\"line\">    <a class=\"code\" href=\"#!/url=./cpp_ref/class_m_string_resource.html#a02fc22430bb24b5bfe27a65bd2d9a762\">MStringResource::registerString</a>( kEndSaveTest );</div>\n\
<div class=\"line\">    <a class=\"code\" href=\"#!/url=./cpp_ref/class_m_string_resource.html#a02fc22430bb24b5bfe27a65bd2d9a762\">MStringResource::registerString</a>( kErrorSavePathArg );</div>\n\
<div class=\"line\">    <a class=\"code\" href=\"#!/url=./cpp_ref/class_m_string_resource.html#a02fc22430bb24b5bfe27a65bd2d9a762\">MStringResource::registerString</a>( kErrorSaveFormatArg );</div>\n\
<div class=\"line\">    <a class=\"code\" href=\"#!/url=./cpp_ref/class_m_string_resource.html#a02fc22430bb24b5bfe27a65bd2d9a762\">MStringResource::registerString</a>( kErrorSaveGrabArg );</div>\n\
<div class=\"line\">    <a class=\"code\" href=\"#!/url=./cpp_ref/class_m_string_resource.html#a02fc22430bb24b5bfe27a65bd2d9a762\">MStringResource::registerString</a>( kErrorSaveAcquireTexture );</div>\n\
<div class=\"line\">    <a class=\"code\" href=\"#!/url=./cpp_ref/class_m_string_resource.html#a02fc22430bb24b5bfe27a65bd2d9a762\">MStringResource::registerString</a>( kErrorSaveTexture );</div>\n\
<div class=\"line\">    <a class=\"code\" href=\"#!/url=./cpp_ref/class_m_string_resource.html#a02fc22430bb24b5bfe27a65bd2d9a762\">MStringResource::registerString</a>( kSuccessSaveTexture );</div>\n\
<div class=\"line\"></div>\n\
<div class=\"line\">    <span class=\"comment\">// DX specific</span></div>\n\
<div class=\"line\">    <a class=\"code\" href=\"#!/url=./cpp_ref/class_m_string_resource.html#a02fc22430bb24b5bfe27a65bd2d9a762\">MStringResource::registerString</a>( kDxErrorEffect );</div>\n\
<div class=\"line\">    <a class=\"code\" href=\"#!/url=./cpp_ref/class_m_string_resource.html#a02fc22430bb24b5bfe27a65bd2d9a762\">MStringResource::registerString</a>( kDxErrorInputLayout );</div>\n\
<div class=\"line\"></div>\n\
<div class=\"line\">    <span class=\"keywordflow\">return</span> MS::kSuccess;</div>\n\
<div class=\"line\">}</div>\n\
<div class=\"line\"></div>\n\
<div class=\"line\"><a class=\"code\" href=\"#!/url=./cpp_ref/class_m_string.html\">MString</a> hwApiTextureTestStrings::getString(<span class=\"keyword\">const</span> <a class=\"code\" href=\"#!/url=./cpp_ref/class_m_string_resource_id.html\">MStringResourceId</a> &amp;stringId)</div>\n\
<div class=\"line\">{</div>\n\
<div class=\"line\">    <a class=\"code\" href=\"#!/url=./cpp_ref/class_m_status.html\">MStatus</a> status;</div>\n\
<div class=\"line\">    <span class=\"keywordflow\">return</span> <a name=\"a4\"></a><a class=\"code\" href=\"#!/url=./cpp_ref/class_m_string_resource.html#a121315f443a9c4ea512738dc1d39414d\">MStringResource::getString</a>( stringId, status );</div>\n\
<div class=\"line\">}</div>\n\
<div class=\"line\"></div>\n\
<div class=\"line\"><a class=\"code\" href=\"#!/url=./cpp_ref/class_m_string.html\">MString</a> hwApiTextureTestStrings::getString(<span class=\"keyword\">const</span> <a class=\"code\" href=\"#!/url=./cpp_ref/class_m_string_resource_id.html\">MStringResourceId</a> &amp;stringId, <span class=\"keyword\">const</span> <a class=\"code\" href=\"#!/url=./cpp_ref/class_m_string.html\">MString</a>&amp; arg)</div>\n\
<div class=\"line\">{</div>\n\
<div class=\"line\">    <a class=\"code\" href=\"#!/url=./cpp_ref/class_m_string.html\">MString</a> string;</div>\n\
<div class=\"line\">    <span class=\"keywordtype\">string</span>.<a name=\"a5\"></a><a class=\"code\" href=\"#!/url=./cpp_ref/class_m_string.html#a07ae464181c795f43fa1bcc288acff91\">format</a>( hwApiTextureTestStrings::getString( stringId ), arg );</div>\n\
<div class=\"line\">    <span class=\"keywordflow\">return</span> string;</div>\n\
<div class=\"line\">}</div>\n\
<div class=\"line\"></div>\n\
<div class=\"line\"><a class=\"code\" href=\"#!/url=./cpp_ref/class_m_string.html\">MString</a> hwApiTextureTestStrings::getString(<span class=\"keyword\">const</span> <a class=\"code\" href=\"#!/url=./cpp_ref/class_m_string_resource_id.html\">MStringResourceId</a> &amp;stringId, <span class=\"keyword\">const</span> <a class=\"code\" href=\"#!/url=./cpp_ref/class_m_string.html\">MString</a>&amp; arg1, <span class=\"keyword\">const</span> <a class=\"code\" href=\"#!/url=./cpp_ref/class_m_string.html\">MString</a>&amp; arg2)</div>\n\
<div class=\"line\">{</div>\n\
<div class=\"line\">    <a class=\"code\" href=\"#!/url=./cpp_ref/class_m_string.html\">MString</a> string;</div>\n\
<div class=\"line\">    <span class=\"keywordtype\">string</span>.<a class=\"code\" href=\"#!/url=./cpp_ref/class_m_string.html#a07ae464181c795f43fa1bcc288acff91\">format</a>( hwApiTextureTestStrings::getString( stringId ), arg1, arg2 );</div>\n\
<div class=\"line\">    <span class=\"keywordflow\">return</span> string;</div>\n\
<div class=\"line\">}</div>\n\
<div class=\"line\"></div>\n\
<div class=\"line\"><a class=\"code\" href=\"#!/url=./cpp_ref/class_m_string.html\">MString</a> hwApiTextureTestStrings::getString(<span class=\"keyword\">const</span> <a class=\"code\" href=\"#!/url=./cpp_ref/class_m_string_resource_id.html\">MStringResourceId</a> &amp;stringId, <span class=\"keywordtype\">float</span> arg1, <span class=\"keywordtype\">float</span> arg2, <span class=\"keywordtype\">float</span> arg3, <span class=\"keywordtype\">float</span> arg4)</div>\n\
<div class=\"line\">{</div>\n\
<div class=\"line\">    <a class=\"code\" href=\"#!/url=./cpp_ref/class_m_string.html\">MString</a> string;</div>\n\
<div class=\"line\">    <a class=\"code\" href=\"#!/url=./cpp_ref/class_m_string.html\">MString</a> arg1String; arg1String += arg1;</div>\n\
<div class=\"line\">    <a class=\"code\" href=\"#!/url=./cpp_ref/class_m_string.html\">MString</a> arg2String; arg2String += arg2;</div>\n\
<div class=\"line\">    <a class=\"code\" href=\"#!/url=./cpp_ref/class_m_string.html\">MString</a> arg3String; arg3String += arg3;</div>\n\
<div class=\"line\">    <a class=\"code\" href=\"#!/url=./cpp_ref/class_m_string.html\">MString</a> arg4String; arg4String += arg4;</div>\n\
<div class=\"line\">    <span class=\"keywordtype\">string</span>.<a class=\"code\" href=\"#!/url=./cpp_ref/class_m_string.html#a07ae464181c795f43fa1bcc288acff91\">format</a>( hwApiTextureTestStrings::getString( stringId ), arg1String, arg2String, arg3String, arg4String );</div>\n\
<div class=\"line\">    <span class=\"keywordflow\">return</span> string;</div>\n\
<div class=\"line\">}</div>\n\
<div class=\"line\"></div>\n\
<div class=\"line\"><span class=\"comment\">//-</span></div>\n\
<div class=\"line\"><span class=\"comment\">// Copyright 2013 Autodesk, Inc.  All rights reserved.</span></div>\n\
<div class=\"line\"><span class=\"comment\">//</span></div>\n\
<div class=\"line\"><span class=\"comment\">// Use of this software is subject to the terms of the Autodesk license agreement</span></div>\n\
<div class=\"line\"><span class=\"comment\">// provided at the time of installation or download, or which otherwise</span></div>\n\
<div class=\"line\"><span class=\"comment\">// accompanies this software in either electronic or hard copy form.</span></div>\n\
<div class=\"line\"><span class=\"comment\">//+</span></div>\n\
</div><!-- fragment --> </div><!-- contents -->\n\
</div><!-- doc-content -->\n\
<!-- start footer part -->\n\
\n\
      <div class=\"footer-block\"><a href=\"../html/ac.cmtdialog.htm\" class=\"comments-anchor\" target=\"_blank\"><span class=\"comments-link\">Please send us your comment about this page</span></a></div></div>\n\
   </div></body>\n\
</html>\n\
";