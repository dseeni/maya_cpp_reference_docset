var topic = "<!-- saved from url=(0024)http://docs.autodesk.com -->\n\
<html>\n\
   <head><script src=\"../scripts/yepnope.1.5.4-min.js\" type=\"text/javascript\"></script><script src=\"../scripts/lib/jquery-1.11.1.min.js\" type=\"text/javascript\"></script>\n\
      <title>C++ API Reference: glslShader/GLSLShaderSemantics.h</title>\n\
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
    cpp_ref_adsk_ref_toc.initNavTree(\'glsl_shader_2_g_l_s_l_shader_semantics_8h-example.html\', tocPrefix);\n\
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
            <h1>C++ API Reference: glslShader/GLSLShaderSemantics.h</h1>\n\
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
<div class=\"title\">glslShader/GLSLShaderSemantics.h</div>  </div>\n\
</div><!--header-->\n\
<div class=\"contents\">\n\
<div class=\"fragment\"><div class=\"line\"><span class=\"preprocessor\">#ifndef _GLSLSHADER_GLSLSHADERSEMANTICS_H</span></div>\n\
<div class=\"line\"><span class=\"preprocessor\">#define _GLSLSHADER_GLSLSHADERSEMANTICS_H</span></div>\n\
<div class=\"line\"><span class=\"comment\">// Copyright 2015 Autodesk, Inc. All rights reserved.</span></div>\n\
<div class=\"line\"><span class=\"comment\">// </span></div>\n\
<div class=\"line\"><span class=\"comment\">// Use of this software is subject to the terms of the Autodesk</span></div>\n\
<div class=\"line\"><span class=\"comment\">// license agreement provided at the time of installation or download,</span></div>\n\
<div class=\"line\"><span class=\"comment\">// or which otherwise accompanies this software in either electronic</span></div>\n\
<div class=\"line\"><span class=\"comment\">// or hard copy form.</span></div>\n\
<div class=\"line\"></div>\n\
<div class=\"line\"><span class=\"preprocessor\">#include &lt;maya/MUniformParameter.h&gt;</span></div>\n\
<div class=\"line\"></div>\n\
<div class=\"line\"><span class=\"keyword\">namespace </span>glslShaderSemantic</div>\n\
<div class=\"line\">{</div>\n\
<div class=\"line\">    <span class=\"keyword\">extern</span> <span class=\"keyword\">const</span> <span class=\"keywordtype\">char</span>* kSTANDARDSGLOBAL;</div>\n\
<div class=\"line\">    <span class=\"keyword\">extern</span> <span class=\"keyword\">const</span> <span class=\"keywordtype\">char</span>* kUndefined;</div>\n\
<div class=\"line\"></div>\n\
<div class=\"line\">    <span class=\"keyword\">extern</span> <span class=\"keyword\">const</span> <span class=\"keywordtype\">char</span>* kWorld;</div>\n\
<div class=\"line\">    <span class=\"keyword\">extern</span> <span class=\"keyword\">const</span> <span class=\"keywordtype\">char</span>* kWorldTranspose;</div>\n\
<div class=\"line\">    <span class=\"keyword\">extern</span> <span class=\"keyword\">const</span> <span class=\"keywordtype\">char</span>* kWorldInverse;</div>\n\
<div class=\"line\">    <span class=\"keyword\">extern</span> <span class=\"keyword\">const</span> <span class=\"keywordtype\">char</span>* kWorldInverseTranspose;</div>\n\
<div class=\"line\"></div>\n\
<div class=\"line\">    <span class=\"keyword\">extern</span> <span class=\"keyword\">const</span> <span class=\"keywordtype\">char</span>* kView;</div>\n\
<div class=\"line\">    <span class=\"keyword\">extern</span> <span class=\"keyword\">const</span> <span class=\"keywordtype\">char</span>* kViewTranspose;</div>\n\
<div class=\"line\">    <span class=\"keyword\">extern</span> <span class=\"keyword\">const</span> <span class=\"keywordtype\">char</span>* kViewInverse;</div>\n\
<div class=\"line\">    <span class=\"keyword\">extern</span> <span class=\"keyword\">const</span> <span class=\"keywordtype\">char</span>* kViewInverseTranspose;</div>\n\
<div class=\"line\"></div>\n\
<div class=\"line\">    <span class=\"keyword\">extern</span> <span class=\"keyword\">const</span> <span class=\"keywordtype\">char</span>* kProjection;</div>\n\
<div class=\"line\">    <span class=\"keyword\">extern</span> <span class=\"keyword\">const</span> <span class=\"keywordtype\">char</span>* kProjectionTranspose;</div>\n\
<div class=\"line\">    <span class=\"keyword\">extern</span> <span class=\"keyword\">const</span> <span class=\"keywordtype\">char</span>* kProjectionInverse;</div>\n\
<div class=\"line\">    <span class=\"keyword\">extern</span> <span class=\"keyword\">const</span> <span class=\"keywordtype\">char</span>* kProjectionInverseTranspose;</div>\n\
<div class=\"line\"></div>\n\
<div class=\"line\">    <span class=\"keyword\">extern</span> <span class=\"keyword\">const</span> <span class=\"keywordtype\">char</span>* kWorldView;</div>\n\
<div class=\"line\">    <span class=\"keyword\">extern</span> <span class=\"keyword\">const</span> <span class=\"keywordtype\">char</span>* kWorldViewTranspose;</div>\n\
<div class=\"line\">    <span class=\"keyword\">extern</span> <span class=\"keyword\">const</span> <span class=\"keywordtype\">char</span>* kWorldViewInverse;</div>\n\
<div class=\"line\">    <span class=\"keyword\">extern</span> <span class=\"keyword\">const</span> <span class=\"keywordtype\">char</span>* kWorldViewInverseTranspose;</div>\n\
<div class=\"line\"></div>\n\
<div class=\"line\">    <span class=\"keyword\">extern</span> <span class=\"keyword\">const</span> <span class=\"keywordtype\">char</span>* kViewProjection;</div>\n\
<div class=\"line\">    <span class=\"keyword\">extern</span> <span class=\"keyword\">const</span> <span class=\"keywordtype\">char</span>* kViewProjectionTranspose;</div>\n\
<div class=\"line\">    <span class=\"keyword\">extern</span> <span class=\"keyword\">const</span> <span class=\"keywordtype\">char</span>* kViewProjectionInverse;</div>\n\
<div class=\"line\">    <span class=\"keyword\">extern</span> <span class=\"keyword\">const</span> <span class=\"keywordtype\">char</span>* kViewProjectionInverseTranspose;</div>\n\
<div class=\"line\"></div>\n\
<div class=\"line\">    <span class=\"keyword\">extern</span> <span class=\"keyword\">const</span> <span class=\"keywordtype\">char</span>* kWorldViewProjection;</div>\n\
<div class=\"line\">    <span class=\"keyword\">extern</span> <span class=\"keyword\">const</span> <span class=\"keywordtype\">char</span>* kWorldViewProjectionTranspose;</div>\n\
<div class=\"line\">    <span class=\"keyword\">extern</span> <span class=\"keyword\">const</span> <span class=\"keywordtype\">char</span>* kWorldViewProjectionInverse;</div>\n\
<div class=\"line\">    <span class=\"keyword\">extern</span> <span class=\"keyword\">const</span> <span class=\"keywordtype\">char</span>* kWorldViewProjectionInverseTranspose;</div>\n\
<div class=\"line\"></div>\n\
<div class=\"line\">    <span class=\"keyword\">extern</span> <span class=\"keyword\">const</span> <span class=\"keywordtype\">char</span>* kViewDirection;</div>\n\
<div class=\"line\">    <span class=\"keyword\">extern</span> <span class=\"keyword\">const</span> <span class=\"keywordtype\">char</span>* kViewPosition;</div>\n\
<div class=\"line\">    <span class=\"keyword\">extern</span> <span class=\"keyword\">const</span> <span class=\"keywordtype\">char</span>* kLocalViewer;</div>\n\
<div class=\"line\"></div>\n\
<div class=\"line\">    <span class=\"keyword\">extern</span> <span class=\"keyword\">const</span> <span class=\"keywordtype\">char</span>* kViewportPixelSize;</div>\n\
<div class=\"line\">    <span class=\"keyword\">extern</span> <span class=\"keyword\">const</span> <span class=\"keywordtype\">char</span>* kBackgroundColor;</div>\n\
<div class=\"line\"></div>\n\
<div class=\"line\">    <span class=\"keyword\">extern</span> <span class=\"keyword\">const</span> <span class=\"keywordtype\">char</span>* kFrame;</div>\n\
<div class=\"line\">    <span class=\"keyword\">extern</span> <span class=\"keyword\">const</span> <span class=\"keywordtype\">char</span>* kFrameNumber;</div>\n\
<div class=\"line\">    <span class=\"keyword\">extern</span> <span class=\"keyword\">const</span> <span class=\"keywordtype\">char</span>* kAnimationTime;</div>\n\
<div class=\"line\">    <span class=\"keyword\">extern</span> <span class=\"keyword\">const</span> <span class=\"keywordtype\">char</span>* kTime;</div>\n\
<div class=\"line\"></div>\n\
<div class=\"line\">    <span class=\"keyword\">extern</span> <span class=\"keyword\">const</span> <span class=\"keywordtype\">char</span>* kNearClipPlane;</div>\n\
<div class=\"line\">    <span class=\"keyword\">extern</span> <span class=\"keyword\">const</span> <span class=\"keywordtype\">char</span>* kFarClipPlane;</div>\n\
<div class=\"line\">    </div>\n\
<div class=\"line\">    <span class=\"keyword\">extern</span> <span class=\"keyword\">const</span> <span class=\"keywordtype\">char</span>* kColor;</div>\n\
<div class=\"line\">    <span class=\"keyword\">extern</span> <span class=\"keyword\">const</span> <span class=\"keywordtype\">char</span>* kLightColor;</div>\n\
<div class=\"line\">    <span class=\"keyword\">extern</span> <span class=\"keyword\">const</span> <span class=\"keywordtype\">char</span>* kAmbient;</div>\n\
<div class=\"line\">    <span class=\"keyword\">extern</span> <span class=\"keyword\">const</span> <span class=\"keywordtype\">char</span>* kLightAmbientColor;</div>\n\
<div class=\"line\">    <span class=\"keyword\">extern</span> <span class=\"keyword\">const</span> <span class=\"keywordtype\">char</span>* kSpecular;</div>\n\
<div class=\"line\">    <span class=\"keyword\">extern</span> <span class=\"keyword\">const</span> <span class=\"keywordtype\">char</span>* kLightSpecularColor;</div>\n\
<div class=\"line\">    <span class=\"keyword\">extern</span> <span class=\"keyword\">const</span> <span class=\"keywordtype\">char</span>* kDiffuse;</div>\n\
<div class=\"line\">    <span class=\"keyword\">extern</span> <span class=\"keyword\">const</span> <span class=\"keywordtype\">char</span>* kLightDiffuseColor;</div>\n\
<div class=\"line\">    <span class=\"keyword\">extern</span> <span class=\"keyword\">const</span> <span class=\"keywordtype\">char</span>* kNormal;</div>\n\
<div class=\"line\">    <span class=\"keyword\">extern</span> <span class=\"keyword\">const</span> <span class=\"keywordtype\">char</span>* kBump;</div>\n\
<div class=\"line\">    <span class=\"keyword\">extern</span> <span class=\"keyword\">const</span> <span class=\"keywordtype\">char</span>* kEnvironment;</div>\n\
<div class=\"line\"></div>\n\
<div class=\"line\">    <span class=\"keyword\">extern</span> <span class=\"keyword\">const</span> <span class=\"keywordtype\">char</span>* kPosition;</div>\n\
<div class=\"line\">    <span class=\"keyword\">extern</span> <span class=\"keyword\">const</span> <span class=\"keywordtype\">char</span>* kAreaPosition0;</div>\n\
<div class=\"line\">    <span class=\"keyword\">extern</span> <span class=\"keyword\">const</span> <span class=\"keywordtype\">char</span>* kAreaPosition1;</div>\n\
<div class=\"line\">    <span class=\"keyword\">extern</span> <span class=\"keyword\">const</span> <span class=\"keywordtype\">char</span>* kAreaPosition2;</div>\n\
<div class=\"line\">    <span class=\"keyword\">extern</span> <span class=\"keyword\">const</span> <span class=\"keywordtype\">char</span>* kAreaPosition3;</div>\n\
<div class=\"line\">    <span class=\"keyword\">extern</span> <span class=\"keyword\">const</span> <span class=\"keywordtype\">char</span>* kDirection;</div>\n\
<div class=\"line\"></div>\n\
<div class=\"line\">    <span class=\"keyword\">extern</span> <span class=\"keyword\">const</span> <span class=\"keywordtype\">char</span>* kTexCoord;</div>\n\
<div class=\"line\">    <span class=\"keyword\">extern</span> <span class=\"keyword\">const</span> <span class=\"keywordtype\">char</span>* kTangent;</div>\n\
<div class=\"line\">    <span class=\"keyword\">extern</span> <span class=\"keyword\">const</span> <span class=\"keywordtype\">char</span>* kBinormal;</div>\n\
<div class=\"line\"></div>\n\
<div class=\"line\">    <span class=\"keyword\">extern</span> <span class=\"keyword\">const</span> <span class=\"keywordtype\">char</span>* kShadowMap;</div>\n\
<div class=\"line\">    <span class=\"keyword\">extern</span> <span class=\"keyword\">const</span> <span class=\"keywordtype\">char</span>* kPointLightShadowMap;</div>\n\
<div class=\"line\">    <span class=\"keyword\">extern</span> <span class=\"keyword\">const</span> <span class=\"keywordtype\">char</span>* kShadowColor;</div>\n\
<div class=\"line\">    <span class=\"keyword\">extern</span> <span class=\"keyword\">const</span> <span class=\"keywordtype\">char</span>* kShadowFlag;</div>\n\
<div class=\"line\">    <span class=\"keyword\">extern</span> <span class=\"keyword\">const</span> <span class=\"keywordtype\">char</span>* kShadowMapBias;</div>\n\
<div class=\"line\">    <span class=\"keyword\">extern</span> <span class=\"keyword\">const</span> <span class=\"keywordtype\">char</span>* kShadowMapMatrix;</div>\n\
<div class=\"line\">    <span class=\"keyword\">extern</span> <span class=\"keyword\">const</span> <span class=\"keywordtype\">char</span>* kShadowMapXForm;</div>\n\
<div class=\"line\">    <span class=\"keyword\">extern</span> <span class=\"keyword\">const</span> <span class=\"keywordtype\">char</span>* kStandardsGlobal;</div>\n\
<div class=\"line\"></div>\n\
<div class=\"line\">    <span class=\"keyword\">extern</span> <span class=\"keyword\">const</span> <span class=\"keywordtype\">char</span>* kLightEnable;</div>\n\
<div class=\"line\">    <span class=\"keyword\">extern</span> <span class=\"keyword\">const</span> <span class=\"keywordtype\">char</span>* kLightIntensity;</div>\n\
<div class=\"line\">    <span class=\"keyword\">extern</span> <span class=\"keyword\">const</span> <span class=\"keywordtype\">char</span>* kLightFalloff;</div>\n\
<div class=\"line\">    <span class=\"keyword\">extern</span> <span class=\"keyword\">const</span> <span class=\"keywordtype\">char</span>* kFalloff;</div>\n\
<div class=\"line\">    <span class=\"keyword\">extern</span> <span class=\"keyword\">const</span> <span class=\"keywordtype\">char</span>* kHotspot;</div>\n\
<div class=\"line\">    <span class=\"keyword\">extern</span> <span class=\"keyword\">const</span> <span class=\"keywordtype\">char</span>* kLightType;</div>\n\
<div class=\"line\">    <span class=\"keyword\">extern</span> <span class=\"keyword\">const</span> <span class=\"keywordtype\">char</span>* kDecayRate;</div>\n\
<div class=\"line\"></div>\n\
<div class=\"line\">    <span class=\"keyword\">extern</span> <span class=\"keyword\">const</span> <span class=\"keywordtype\">char</span>* kLightRange;</div>\n\
<div class=\"line\">    <span class=\"keyword\">extern</span> <span class=\"keyword\">const</span> <span class=\"keywordtype\">char</span>* kLightAttenuation0;</div>\n\
<div class=\"line\">    <span class=\"keyword\">extern</span> <span class=\"keyword\">const</span> <span class=\"keywordtype\">char</span>* kLightAttenuation1;</div>\n\
<div class=\"line\">    <span class=\"keyword\">extern</span> <span class=\"keyword\">const</span> <span class=\"keywordtype\">char</span>* kLightAttenuation2;</div>\n\
<div class=\"line\">    <span class=\"keyword\">extern</span> <span class=\"keyword\">const</span> <span class=\"keywordtype\">char</span>* kLightTheta;</div>\n\
<div class=\"line\">    <span class=\"keyword\">extern</span> <span class=\"keyword\">const</span> <span class=\"keywordtype\">char</span>* kLightPhi;</div>\n\
<div class=\"line\"></div>\n\
<div class=\"line\">    <span class=\"keyword\">extern</span> <span class=\"keyword\">const</span> <span class=\"keywordtype\">char</span>* kTranspDepthTexture;</div>\n\
<div class=\"line\">    <span class=\"keyword\">extern</span> <span class=\"keyword\">const</span> <span class=\"keywordtype\">char</span>* kOpaqueDepthTexture;</div>\n\
<div class=\"line\"></div>\n\
<div class=\"line\">    <span class=\"comment\">// Maya custom semantics</span></div>\n\
<div class=\"line\">    <span class=\"keyword\">extern</span> <span class=\"keyword\">const</span> <span class=\"keywordtype\">char</span>* kMayaSwatchRender;</div>\n\
<div class=\"line\">    <span class=\"keyword\">extern</span> <span class=\"keyword\">const</span> <span class=\"keywordtype\">char</span>* kBboxExtraScale;</div>\n\
<div class=\"line\">    <span class=\"keyword\">extern</span> <span class=\"keyword\">const</span> <span class=\"keywordtype\">char</span>* kOpacity;</div>\n\
<div class=\"line\">    <span class=\"keyword\">extern</span> <span class=\"keyword\">const</span> <span class=\"keywordtype\">char</span>* kMayaGammaCorrection;</div>\n\
<div class=\"line\">}</div>\n\
<div class=\"line\"></div>\n\
<div class=\"line\"><span class=\"keyword\">namespace </span>glslShaderAnnotation</div>\n\
<div class=\"line\">{</div>\n\
<div class=\"line\">    <span class=\"comment\">// Technique Annotations</span></div>\n\
<div class=\"line\">    <span class=\"keyword\">extern</span> <span class=\"keyword\">const</span> <span class=\"keywordtype\">char</span>* kTransparency;</div>\n\
<div class=\"line\">    <span class=\"keyword\">extern</span> <span class=\"keyword\">const</span> <span class=\"keywordtype\">char</span>* kSupportsAdvancedTransparency;</div>\n\
<div class=\"line\">    <span class=\"keyword\">extern</span> <span class=\"keyword\">const</span> <span class=\"keywordtype\">char</span>* kIndexBufferType;</div>\n\
<div class=\"line\">    <span class=\"keyword\">extern</span> <span class=\"keyword\">const</span> <span class=\"keywordtype\">char</span>* kTextureMipmaplevels;</div>\n\
<div class=\"line\">    <span class=\"keyword\">extern</span> <span class=\"keyword\">const</span> <span class=\"keywordtype\">char</span>* kObject;</div>\n\
<div class=\"line\"></div>\n\
<div class=\"line\">    <span class=\"keyword\">extern</span> <span class=\"keyword\">const</span> <span class=\"keywordtype\">char</span>* kOverridesDrawState;</div>\n\
<div class=\"line\">    <span class=\"keyword\">extern</span> <span class=\"keyword\">const</span> <span class=\"keywordtype\">char</span>* kVariableNameAsAttributeName;</div>\n\
<div class=\"line\">    <span class=\"keyword\">extern</span> <span class=\"keyword\">const</span> <span class=\"keywordtype\">char</span>* kExtraScale;</div>\n\
<div class=\"line\">    <span class=\"keyword\">extern</span> <span class=\"keyword\">const</span> <span class=\"keywordtype\">char</span>* kOverridesNonMaterialItems;</div>\n\
<div class=\"line\">    <span class=\"keyword\">extern</span> <span class=\"keyword\">const</span> <span class=\"keywordtype\">char</span>* kHandlesConsolidatedGeometry;</div>\n\
<div class=\"line\"></div>\n\
<div class=\"line\">    <span class=\"keyword\">extern</span> <span class=\"keyword\">const</span> <span class=\"keywordtype\">char</span>* kCustomSemantics;</div>\n\
<div class=\"line\"></div>\n\
<div class=\"line\">    <span class=\"comment\">// Pass annotations</span></div>\n\
<div class=\"line\">    <span class=\"keyword\">extern</span> <span class=\"keyword\">const</span> <span class=\"keywordtype\">char</span>* kDrawContext;</div>\n\
<div class=\"line\">    <span class=\"keyword\">extern</span> <span class=\"keyword\">const</span> <span class=\"keywordtype\">char</span>* kNonMaterialItemsPass;</div>\n\
<div class=\"line\">    <span class=\"keyword\">extern</span> <span class=\"keyword\">const</span> <span class=\"keywordtype\">char</span>* kPrimitiveFilter;</div>\n\
<div class=\"line\"></div>\n\
<div class=\"line\">    <span class=\"comment\">// Uniform annotations</span></div>\n\
<div class=\"line\">    <span class=\"keyword\">extern</span> <span class=\"keyword\">const</span> <span class=\"keywordtype\">char</span>* kUIMin;</div>\n\
<div class=\"line\">    <span class=\"keyword\">extern</span> <span class=\"keyword\">const</span> <span class=\"keywordtype\">char</span>* kUIMax;</div>\n\
<div class=\"line\">    <span class=\"keyword\">extern</span> <span class=\"keyword\">const</span> <span class=\"keywordtype\">char</span>* kUISoftMin;</div>\n\
<div class=\"line\">    <span class=\"keyword\">extern</span> <span class=\"keyword\">const</span> <span class=\"keywordtype\">char</span>* kUISoftMax;</div>\n\
<div class=\"line\">    <span class=\"keyword\">extern</span> <span class=\"keyword\">const</span> <span class=\"keywordtype\">char</span>* kSpace;</div>\n\
<div class=\"line\">    <span class=\"keyword\">extern</span> <span class=\"keyword\">const</span> <span class=\"keywordtype\">char</span>* kUIFieldNames;</div>\n\
<div class=\"line\"></div>\n\
<div class=\"line\">    <span class=\"keyword\">extern</span> <span class=\"keyword\">const</span> <span class=\"keywordtype\">char</span>* kSasBindAddress;</div>\n\
<div class=\"line\">    <span class=\"keyword\">extern</span> <span class=\"keyword\">const</span> <span class=\"keywordtype\">char</span>* kSasUiControl;</div>\n\
<div class=\"line\">    <span class=\"keyword\">extern</span> <span class=\"keyword\">const</span> <span class=\"keywordtype\">char</span>* kUIWidget;</div>\n\
<div class=\"line\">    <span class=\"keyword\">extern</span> <span class=\"keyword\">const</span> <span class=\"keywordtype\">char</span>* kUIGroup;</div>\n\
<div class=\"line\">    <span class=\"keyword\">extern</span> <span class=\"keyword\">const</span> <span class=\"keywordtype\">char</span>* kUIOrder;</div>\n\
<div class=\"line\"></div>\n\
<div class=\"line\">    <span class=\"comment\">// Texture annotations</span></div>\n\
<div class=\"line\">    <span class=\"keyword\">extern</span> <span class=\"keyword\">const</span> <span class=\"keywordtype\">char</span>* kMipmaplevels;</div>\n\
<div class=\"line\">}</div>\n\
<div class=\"line\"></div>\n\
<div class=\"line\"><span class=\"keyword\">namespace </span>glslShaderAnnotationValue</div>\n\
<div class=\"line\">{</div>\n\
<div class=\"line\">    <span class=\"keyword\">extern</span> <span class=\"keyword\">const</span> <span class=\"keywordtype\">char</span>* kValueTransparent;</div>\n\
<div class=\"line\">    <span class=\"keyword\">extern</span> <span class=\"keyword\">const</span> <span class=\"keywordtype\">char</span>* kValueOpaque;</div>\n\
<div class=\"line\">    <span class=\"keyword\">extern</span> <span class=\"keyword\">const</span> <span class=\"keywordtype\">char</span>* kValueTrue;</div>\n\
<div class=\"line\">    <span class=\"keyword\">extern</span> <span class=\"keyword\">const</span> <span class=\"keywordtype\">char</span>* kValueFalse;</div>\n\
<div class=\"line\"></div>\n\
<div class=\"line\">    <span class=\"keyword\">extern</span> <span class=\"keyword\">const</span> <span class=\"keywordtype\">char</span>* kPosition;</div>\n\
<div class=\"line\">    <span class=\"keyword\">extern</span> <span class=\"keyword\">const</span> <span class=\"keywordtype\">char</span>* kDirection;</div>\n\
<div class=\"line\">    <span class=\"keyword\">extern</span> <span class=\"keyword\">const</span> <span class=\"keywordtype\">char</span>* kColor;</div>\n\
<div class=\"line\">    <span class=\"keyword\">extern</span> <span class=\"keyword\">const</span> <span class=\"keywordtype\">char</span>* kColour;</div>\n\
<div class=\"line\">    <span class=\"keyword\">extern</span> <span class=\"keyword\">const</span> <span class=\"keywordtype\">char</span>* kDiffuse;</div>\n\
<div class=\"line\">    <span class=\"keyword\">extern</span> <span class=\"keyword\">const</span> <span class=\"keywordtype\">char</span>* kSpecular;</div>\n\
<div class=\"line\">    <span class=\"keyword\">extern</span> <span class=\"keyword\">const</span> <span class=\"keywordtype\">char</span>* kAmbient;</div>\n\
<div class=\"line\"></div>\n\
<div class=\"line\">    <span class=\"keyword\">extern</span> <span class=\"keyword\">const</span> <span class=\"keywordtype\">char</span>* kLight;</div>\n\
<div class=\"line\">    <span class=\"keyword\">extern</span> <span class=\"keyword\">const</span> <span class=\"keywordtype\">char</span>* kLamp;</div>\n\
<div class=\"line\">    <span class=\"keyword\">extern</span> <span class=\"keyword\">const</span> <span class=\"keywordtype\">char</span>* kPoint;</div>\n\
<div class=\"line\">    <span class=\"keyword\">extern</span> <span class=\"keyword\">const</span> <span class=\"keywordtype\">char</span>* kSpot;</div>\n\
<div class=\"line\">    <span class=\"keyword\">extern</span> <span class=\"keyword\">const</span> <span class=\"keywordtype\">char</span>* kDirectional;</div>\n\
<div class=\"line\"></div>\n\
<div class=\"line\">    <span class=\"keyword\">extern</span> <span class=\"keyword\">const</span> <span class=\"keywordtype\">char</span>* kObject;</div>\n\
<div class=\"line\">    <span class=\"keyword\">extern</span> <span class=\"keyword\">const</span> <span class=\"keywordtype\">char</span>* kWorld;</div>\n\
<div class=\"line\">    <span class=\"keyword\">extern</span> <span class=\"keyword\">const</span> <span class=\"keywordtype\">char</span>* kView;</div>\n\
<div class=\"line\">    <span class=\"keyword\">extern</span> <span class=\"keyword\">const</span> <span class=\"keywordtype\">char</span>* kCamera;</div>\n\
<div class=\"line\"></div>\n\
<div class=\"line\">    <span class=\"keyword\">extern</span> <span class=\"keyword\">const</span> <span class=\"keywordtype\">char</span>* kSas_Skeleton_MeshToJointToWorld_0_;</div>\n\
<div class=\"line\">    <span class=\"keyword\">extern</span> <span class=\"keyword\">const</span> <span class=\"keywordtype\">char</span>* kSas_Camera_WorldToView;</div>\n\
<div class=\"line\">    <span class=\"keyword\">extern</span> <span class=\"keyword\">const</span> <span class=\"keywordtype\">char</span>* kSas_Camera_Projection;</div>\n\
<div class=\"line\">    <span class=\"keyword\">extern</span> <span class=\"keyword\">const</span> <span class=\"keywordtype\">char</span>* kSas_Time_Now;</div>\n\
<div class=\"line\">    <span class=\"keyword\">extern</span> <span class=\"keyword\">const</span> <span class=\"keywordtype\">char</span>* k_Position;</div>\n\
<div class=\"line\">    <span class=\"keyword\">extern</span> <span class=\"keyword\">const</span> <span class=\"keywordtype\">char</span>* k_Direction;</div>\n\
<div class=\"line\">    <span class=\"keyword\">extern</span> <span class=\"keyword\">const</span> <span class=\"keywordtype\">char</span>* k_Directional;</div>\n\
<div class=\"line\"></div>\n\
<div class=\"line\">    <span class=\"keyword\">extern</span> <span class=\"keyword\">const</span> <span class=\"keywordtype\">char</span>* kColorPicker;</div>\n\
<div class=\"line\"></div>\n\
<div class=\"line\">    <span class=\"keyword\">extern</span> <span class=\"keyword\">const</span> <span class=\"keywordtype\">char</span>* kFatLine;</div>\n\
<div class=\"line\">    <span class=\"keyword\">extern</span> <span class=\"keyword\">const</span> <span class=\"keywordtype\">char</span>* kFatPoint;</div>\n\
<div class=\"line\">}</div>\n\
<div class=\"line\"></div>\n\
<div class=\"line\"></div>\n\
<div class=\"line\"><span class=\"preprocessor\">#endif</span></div>\n\
</div><!-- fragment --> </div><!-- contents -->\n\
</div><!-- doc-content -->\n\
<!-- start footer part -->\n\
\n\
      <div class=\"footer-block\"><a href=\"../html/ac.cmtdialog.htm\" class=\"comments-anchor\" target=\"_blank\"><span class=\"comments-link\">Please send us your comment about this page</span></a></div></div>\n\
   </div></body>\n\
</html>\n\
";