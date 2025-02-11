var topic = "<!-- saved from url=(0024)http://docs.autodesk.com -->\n\
<html>\n\
   <head><script src=\"../scripts/yepnope.1.5.4-min.js\" type=\"text/javascript\"></script><script src=\"../scripts/lib/jquery-1.11.1.min.js\" type=\"text/javascript\"></script><meta http-equiv=\"Content-Type\" content=\"text/html; charset=UTF-8\"><meta name=\"product\" content=\"MAYAUL\"><meta name=\"release\" content=\"2016\"><meta name=\"book\" content=\"Developer\"><meta name=\"created\" content=\"2015-10-14\"><meta name=\"topicid\" content=\"GUID-02DEF634-1E7B-48C6-8ACD-2C934CA97887\"><meta name=\"topic-type\" content=\"concept\">\n\
      <title>gpuCache/gpuCacheMaterialNodes.h</title>\n\
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
    cpp_ref_adsk_ref_toc.initNavTree(\'gpu_cache_2gpu_cache_material_nodes_8h-example.html\', tocPrefix);\n\
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
      <div>\n\
         <div class=\"head\">\n\
            <h1>gpuCache/gpuCacheMaterialNodes.h</h1>\n\
         </div>\n\
\n\
    <div id=\"top\"><!-- Generated by Doxygen 1.8.10 -->\n\
  <div id=\"navrow1\" class=\"tabs\">\n\
    <ul class=\"tablist\">\n\
      <li><a href=\"#!/url=./cpp_ref/index.html\"><span>Main&#160;Page</span></a></li>\n\
      <li><a href=\"#!/url=./cpp_ref/pages.html\"><span>Topics</span></a></li>\n\
      <li><a href=\"#!/url=./cpp_ref/modules.html\"><span>Modules</span></a></li>\n\
      <li><a href=\"#!/url=./cpp_ref/namespaces.html\"><span>Namespaces</span></a></li>\n\
      <li><a href=\"#!/url=./cpp_ref/annotated.html\"><span>Classes</span></a></li>\n\
      <li><a href=\"#!/url=./cpp_ref/examples.html\"><span>Examples</span></a></li>\n\
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
  <div class=\"headertitle\">\n\
<div class=\"title\">gpuCache/gpuCacheMaterialNodes.h</div>  </div>\n\
</div><!--header-->\n\
<div class=\"contents\">\n\
<div class=\"fragment\"><div class=\"line\"><span class=\"preprocessor\">#ifndef _gpuCacheMaterialNodes_h_</span></div>\n\
<div class=\"line\"><span class=\"preprocessor\">#define _gpuCacheMaterialNodes_h_</span></div>\n\
<div class=\"line\"></div>\n\
<div class=\"line\"><span class=\"comment\">//-</span></div>\n\
<div class=\"line\"><span class=\"comment\">//**************************************************************************/</span></div>\n\
<div class=\"line\"><span class=\"comment\">// Copyright 2012 Autodesk, Inc. All rights reserved. </span></div>\n\
<div class=\"line\"><span class=\"comment\">//</span></div>\n\
<div class=\"line\"><span class=\"comment\">// Use of this software is subject to the terms of the Autodesk </span></div>\n\
<div class=\"line\"><span class=\"comment\">// license agreement provided at the time of installation or download, </span></div>\n\
<div class=\"line\"><span class=\"comment\">// or which otherwise accompanies this software in either electronic </span></div>\n\
<div class=\"line\"><span class=\"comment\">// or hard copy form.</span></div>\n\
<div class=\"line\"><span class=\"comment\">//**************************************************************************/</span></div>\n\
<div class=\"line\"><span class=\"comment\">//+</span></div>\n\
<div class=\"line\"></div>\n\
<div class=\"line\"><span class=\"preprocessor\">#include &quot;gpuCacheMaterial.h&quot;</span></div>\n\
<div class=\"line\"></div>\n\
<div class=\"line\"></div>\n\
<div class=\"line\"><span class=\"keyword\">namespace </span>GPUCache {</div>\n\
<div class=\"line\"></div>\n\
<div class=\"line\"><span class=\"comment\">/*==============================================================================</span></div>\n\
<div class=\"line\"><span class=\"comment\"> * CLASS SurfaceMaterial</span></div>\n\
<div class=\"line\"><span class=\"comment\"> *============================================================================*/</span></div>\n\
<div class=\"line\"></div>\n\
<div class=\"line\"><span class=\"comment\">// Base class for all surface materials (lambert, phong, ...)</span></div>\n\
<div class=\"line\"><span class=\"keyword\">class </span>SurfaceMaterial : <span class=\"keyword\">public</span> MaterialNode</div>\n\
<div class=\"line\">{</div>\n\
<div class=\"line\"><span class=\"keyword\">public</span>:</div>\n\
<div class=\"line\">    SurfaceMaterial(<span class=\"keyword\">const</span> <a name=\"_a0\"></a><a class=\"code\" href=\"#!/url=./cpp_ref/class_m_string.html\">MString</a>&amp; name, <span class=\"keyword\">const</span> <a class=\"code\" href=\"#!/url=./cpp_ref/class_m_string.html\">MString</a>&amp; type = <span class=\"stringliteral\">&quot;surfaceShader&quot;</span>);</div>\n\
<div class=\"line\"></div>\n\
<div class=\"line\">    <span class=\"keyword\">virtual</span> <span class=\"keywordtype\">void</span> accept(MaterialNodeVisitor&amp; visitor) <span class=\"keyword\">const</span>;</div>\n\
<div class=\"line\"></div>\n\
<div class=\"line\"><span class=\"keyword\">public</span>:</div>\n\
<div class=\"line\">    MaterialPropertyRef OutColor;</div>\n\
<div class=\"line\">    MaterialPropertyRef OutTransparency;</div>\n\
<div class=\"line\">};</div>\n\
<div class=\"line\"></div>\n\
<div class=\"line\"><span class=\"comment\">// Acyclic visitor</span></div>\n\
<div class=\"line\"><span class=\"keyword\">class </span>SurfaceMaterialVisitor : <span class=\"keyword\">public</span> <span class=\"keyword\">virtual</span> MaterialNodeVisitor</div>\n\
<div class=\"line\">{</div>\n\
<div class=\"line\"><span class=\"keyword\">public</span>:</div>\n\
<div class=\"line\">    <span class=\"keyword\">virtual</span> <span class=\"keywordtype\">void</span> visit(<span class=\"keyword\">const</span> SurfaceMaterial&amp; node) = 0;</div>\n\
<div class=\"line\">};</div>\n\
<div class=\"line\"></div>\n\
<div class=\"line\"><span class=\"comment\">/*==============================================================================</span></div>\n\
<div class=\"line\"><span class=\"comment\"> * CLASS LambertMaterial</span></div>\n\
<div class=\"line\"><span class=\"comment\"> *============================================================================*/</span></div>\n\
<div class=\"line\"></div>\n\
<div class=\"line\"><span class=\"comment\">// Lambert material</span></div>\n\
<div class=\"line\"><span class=\"keyword\">class </span>LambertMaterial : <span class=\"keyword\">public</span> SurfaceMaterial</div>\n\
<div class=\"line\">{</div>\n\
<div class=\"line\"><span class=\"keyword\">public</span>:</div>\n\
<div class=\"line\">    LambertMaterial(<span class=\"keyword\">const</span> <a class=\"code\" href=\"#!/url=./cpp_ref/class_m_string.html\">MString</a>&amp; name, <span class=\"keyword\">const</span> <a class=\"code\" href=\"#!/url=./cpp_ref/class_m_string.html\">MString</a>&amp; type = <span class=\"stringliteral\">&quot;lambert&quot;</span>);</div>\n\
<div class=\"line\"></div>\n\
<div class=\"line\">    <span class=\"keyword\">virtual</span> <span class=\"keywordtype\">void</span> accept(MaterialNodeVisitor&amp; visitor) <span class=\"keyword\">const</span>;</div>\n\
<div class=\"line\"></div>\n\
<div class=\"line\"><span class=\"keyword\">public</span>:</div>\n\
<div class=\"line\">    MaterialPropertyRef Color;</div>\n\
<div class=\"line\">    MaterialPropertyRef Transparency;</div>\n\
<div class=\"line\">    MaterialPropertyRef AmbientColor;</div>\n\
<div class=\"line\">    MaterialPropertyRef Incandescence;</div>\n\
<div class=\"line\">    MaterialPropertyRef Diffuse;</div>\n\
<div class=\"line\">    MaterialPropertyRef Translucence;</div>\n\
<div class=\"line\">    MaterialPropertyRef TranslucenceDepth;</div>\n\
<div class=\"line\">    MaterialPropertyRef TranslucenceFocus;</div>\n\
<div class=\"line\">    MaterialPropertyRef HideSource;</div>\n\
<div class=\"line\">    MaterialPropertyRef GlowIntensity;</div>\n\
<div class=\"line\">};</div>\n\
<div class=\"line\"></div>\n\
<div class=\"line\"><span class=\"comment\">// Acyclic visitor</span></div>\n\
<div class=\"line\"><span class=\"keyword\">class </span>LambertMaterialVisitor : <span class=\"keyword\">public</span> <span class=\"keyword\">virtual</span> MaterialNodeVisitor</div>\n\
<div class=\"line\">{</div>\n\
<div class=\"line\"><span class=\"keyword\">public</span>:</div>\n\
<div class=\"line\">    <span class=\"keyword\">virtual</span> <span class=\"keywordtype\">void</span> visit(<span class=\"keyword\">const</span> LambertMaterial&amp; node) = 0;</div>\n\
<div class=\"line\">};</div>\n\
<div class=\"line\"></div>\n\
<div class=\"line\"><span class=\"comment\">/*==============================================================================</span></div>\n\
<div class=\"line\"><span class=\"comment\"> * CLASS PhongMaterial</span></div>\n\
<div class=\"line\"><span class=\"comment\"> *============================================================================*/</span></div>\n\
<div class=\"line\"></div>\n\
<div class=\"line\"><span class=\"comment\">// Phong material</span></div>\n\
<div class=\"line\"><span class=\"keyword\">class </span>PhongMaterial : <span class=\"keyword\">public</span> LambertMaterial</div>\n\
<div class=\"line\">{</div>\n\
<div class=\"line\"><span class=\"keyword\">public</span>:</div>\n\
<div class=\"line\">    PhongMaterial(<span class=\"keyword\">const</span> <a class=\"code\" href=\"#!/url=./cpp_ref/class_m_string.html\">MString</a>&amp; name, <span class=\"keyword\">const</span> <a class=\"code\" href=\"#!/url=./cpp_ref/class_m_string.html\">MString</a>&amp; type = <span class=\"stringliteral\">&quot;phong&quot;</span>);</div>\n\
<div class=\"line\"></div>\n\
<div class=\"line\">    <span class=\"keyword\">virtual</span> <span class=\"keywordtype\">void</span> accept(MaterialNodeVisitor&amp; visitor) <span class=\"keyword\">const</span>;</div>\n\
<div class=\"line\"></div>\n\
<div class=\"line\"><span class=\"keyword\">public</span>:</div>\n\
<div class=\"line\">    MaterialPropertyRef CosinePower;</div>\n\
<div class=\"line\">    MaterialPropertyRef SpecularColor;</div>\n\
<div class=\"line\">    MaterialPropertyRef Reflectivity;</div>\n\
<div class=\"line\">    MaterialPropertyRef ReflectedColor;</div>\n\
<div class=\"line\">};</div>\n\
<div class=\"line\"></div>\n\
<div class=\"line\"><span class=\"comment\">// Acyclic visitor</span></div>\n\
<div class=\"line\"><span class=\"keyword\">class </span>PhongMaterialVisitor : <span class=\"keyword\">public</span> <span class=\"keyword\">virtual</span> MaterialNodeVisitor</div>\n\
<div class=\"line\">{</div>\n\
<div class=\"line\"><span class=\"keyword\">public</span>:</div>\n\
<div class=\"line\">    <span class=\"keyword\">virtual</span> <span class=\"keywordtype\">void</span> visit(<span class=\"keyword\">const</span> PhongMaterial&amp; node) = 0;</div>\n\
<div class=\"line\">};</div>\n\
<div class=\"line\"></div>\n\
<div class=\"line\"><span class=\"comment\">/*==============================================================================</span></div>\n\
<div class=\"line\"><span class=\"comment\"> * CLASS BlinnMaterial</span></div>\n\
<div class=\"line\"><span class=\"comment\"> *============================================================================*/</span></div>\n\
<div class=\"line\"></div>\n\
<div class=\"line\"><span class=\"comment\">// Blinn material</span></div>\n\
<div class=\"line\"><span class=\"keyword\">class </span>BlinnMaterial : <span class=\"keyword\">public</span> LambertMaterial</div>\n\
<div class=\"line\">{</div>\n\
<div class=\"line\"><span class=\"keyword\">public</span>:</div>\n\
<div class=\"line\">    BlinnMaterial(<span class=\"keyword\">const</span> <a class=\"code\" href=\"#!/url=./cpp_ref/class_m_string.html\">MString</a>&amp; name, <span class=\"keyword\">const</span> <a class=\"code\" href=\"#!/url=./cpp_ref/class_m_string.html\">MString</a>&amp; type = <span class=\"stringliteral\">&quot;blinn&quot;</span>);</div>\n\
<div class=\"line\"></div>\n\
<div class=\"line\">    <span class=\"keyword\">virtual</span> <span class=\"keywordtype\">void</span> accept(MaterialNodeVisitor&amp; visitor) <span class=\"keyword\">const</span>;</div>\n\
<div class=\"line\"></div>\n\
<div class=\"line\"><span class=\"keyword\">public</span>:</div>\n\
<div class=\"line\">    MaterialPropertyRef Eccentricity;</div>\n\
<div class=\"line\">    MaterialPropertyRef SpecularRollOff;</div>\n\
<div class=\"line\">    MaterialPropertyRef SpecularColor;</div>\n\
<div class=\"line\">    MaterialPropertyRef Reflectivity;</div>\n\
<div class=\"line\">    MaterialPropertyRef ReflectedColor;</div>\n\
<div class=\"line\">};</div>\n\
<div class=\"line\"></div>\n\
<div class=\"line\"><span class=\"comment\">// Acyclic visitor</span></div>\n\
<div class=\"line\"><span class=\"keyword\">class </span>BlinnMaterialVisitor : <span class=\"keyword\">public</span> <span class=\"keyword\">virtual</span> MaterialNodeVisitor</div>\n\
<div class=\"line\">{</div>\n\
<div class=\"line\"><span class=\"keyword\">public</span>:</div>\n\
<div class=\"line\">    <span class=\"keyword\">virtual</span> <span class=\"keywordtype\">void</span> visit(<span class=\"keyword\">const</span> BlinnMaterial&amp; node) = 0;</div>\n\
<div class=\"line\">};</div>\n\
<div class=\"line\"></div>\n\
<div class=\"line\"><span class=\"comment\">/*==============================================================================</span></div>\n\
<div class=\"line\"><span class=\"comment\"> * CLASS Texture2d</span></div>\n\
<div class=\"line\"><span class=\"comment\"> *============================================================================*/</span></div>\n\
<div class=\"line\"></div>\n\
<div class=\"line\"><span class=\"comment\">// 2D Texture.</span></div>\n\
<div class=\"line\"><span class=\"comment\">// Textures are not supported. We just make use of the .defaultColor attribute.</span></div>\n\
<div class=\"line\"><span class=\"keyword\">class </span>Texture2d : <span class=\"keyword\">public</span> MaterialNode</div>\n\
<div class=\"line\">{</div>\n\
<div class=\"line\"><span class=\"keyword\">public</span>:</div>\n\
<div class=\"line\">    Texture2d(<span class=\"keyword\">const</span> <a class=\"code\" href=\"#!/url=./cpp_ref/class_m_string.html\">MString</a>&amp; name, <span class=\"keyword\">const</span> <a class=\"code\" href=\"#!/url=./cpp_ref/class_m_string.html\">MString</a>&amp; type = <span class=\"stringliteral\">&quot;texture2d&quot;</span>);</div>\n\
<div class=\"line\"></div>\n\
<div class=\"line\">    <span class=\"keyword\">virtual</span> <span class=\"keywordtype\">void</span> accept(MaterialNodeVisitor&amp; visitor) <span class=\"keyword\">const</span>;</div>\n\
<div class=\"line\"></div>\n\
<div class=\"line\"><span class=\"keyword\">public</span>:</div>\n\
<div class=\"line\">    MaterialPropertyRef DefaultColor;</div>\n\
<div class=\"line\">    MaterialPropertyRef OutColor;</div>\n\
<div class=\"line\">    MaterialPropertyRef OutAlpha;</div>\n\
<div class=\"line\">};</div>\n\
<div class=\"line\"></div>\n\
<div class=\"line\"><span class=\"comment\">// Acyclic visitor</span></div>\n\
<div class=\"line\"><span class=\"keyword\">class </span>Texture2dVisitor : <span class=\"keyword\">public</span> <span class=\"keyword\">virtual</span> MaterialNodeVisitor</div>\n\
<div class=\"line\">{</div>\n\
<div class=\"line\"><span class=\"keyword\">public</span>:</div>\n\
<div class=\"line\">    <span class=\"keyword\">virtual</span> <span class=\"keywordtype\">void</span> visit(<span class=\"keyword\">const</span> Texture2d&amp; node) = 0;</div>\n\
<div class=\"line\">};</div>\n\
<div class=\"line\"></div>\n\
<div class=\"line\"><span class=\"comment\">/*==============================================================================</span></div>\n\
<div class=\"line\"><span class=\"comment\"> * CLASS FileTexture</span></div>\n\
<div class=\"line\"><span class=\"comment\"> *============================================================================*/</span></div>\n\
<div class=\"line\"></div>\n\
<div class=\"line\"><span class=\"comment\">// File Texture</span></div>\n\
<div class=\"line\"><span class=\"comment\">// Textures are not supported. We just make use of the .defaultColor attribute.</span></div>\n\
<div class=\"line\"><span class=\"keyword\">class </span>FileTexture : <span class=\"keyword\">public</span> Texture2d</div>\n\
<div class=\"line\">{</div>\n\
<div class=\"line\"><span class=\"keyword\">public</span>:</div>\n\
<div class=\"line\">    FileTexture(<span class=\"keyword\">const</span> <a class=\"code\" href=\"#!/url=./cpp_ref/class_m_string.html\">MString</a>&amp; name, <span class=\"keyword\">const</span> <a class=\"code\" href=\"#!/url=./cpp_ref/class_m_string.html\">MString</a>&amp; type = <span class=\"stringliteral\">&quot;file&quot;</span>);</div>\n\
<div class=\"line\"></div>\n\
<div class=\"line\">    <span class=\"keyword\">virtual</span> <span class=\"keywordtype\">void</span> accept(MaterialNodeVisitor&amp; visitor) <span class=\"keyword\">const</span>;</div>\n\
<div class=\"line\"></div>\n\
<div class=\"line\"><span class=\"keyword\">public</span>:</div>\n\
<div class=\"line\">    MaterialPropertyRef OutTransparency;</div>\n\
<div class=\"line\">    MaterialPropertyRef FileTextureName;</div>\n\
<div class=\"line\"></div>\n\
<div class=\"line\">    <span class=\"comment\">// Nothing. Textures are not supported!</span></div>\n\
<div class=\"line\">};</div>\n\
<div class=\"line\"></div>\n\
<div class=\"line\"><span class=\"comment\">// Acyclic visitor</span></div>\n\
<div class=\"line\"><span class=\"keyword\">class </span>FileTextureVisitor : <span class=\"keyword\">public</span> <span class=\"keyword\">virtual</span> MaterialNodeVisitor</div>\n\
<div class=\"line\">{</div>\n\
<div class=\"line\"><span class=\"keyword\">public</span>:</div>\n\
<div class=\"line\">    <span class=\"keyword\">virtual</span> <span class=\"keywordtype\">void</span> visit(<span class=\"keyword\">const</span> FileTexture&amp; node) = 0;</div>\n\
<div class=\"line\">};</div>\n\
<div class=\"line\"></div>\n\
<div class=\"line\"><span class=\"comment\">/*==============================================================================</span></div>\n\
<div class=\"line\"><span class=\"comment\"> * CLASS UnknownTexture2d</span></div>\n\
<div class=\"line\"><span class=\"comment\"> *============================================================================*/</span></div>\n\
<div class=\"line\"></div>\n\
<div class=\"line\"><span class=\"comment\">// This is a generic texture2d node that we don&#39;t recognize the node type.</span></div>\n\
<div class=\"line\"><span class=\"keyword\">class </span>UnknownTexture2d : <span class=\"keyword\">public</span> Texture2d</div>\n\
<div class=\"line\">{</div>\n\
<div class=\"line\"><span class=\"keyword\">public</span>:</div>\n\
<div class=\"line\">    UnknownTexture2d(<span class=\"keyword\">const</span> <a class=\"code\" href=\"#!/url=./cpp_ref/class_m_string.html\">MString</a>&amp; name, <span class=\"keyword\">const</span> <a class=\"code\" href=\"#!/url=./cpp_ref/class_m_string.html\">MString</a>&amp; type = <span class=\"stringliteral\">&quot;unknownTexture2d&quot;</span>);</div>\n\
<div class=\"line\"></div>\n\
<div class=\"line\">    <span class=\"keyword\">virtual</span> <span class=\"keywordtype\">void</span> accept(MaterialNodeVisitor&amp; visitor) <span class=\"keyword\">const</span>;</div>\n\
<div class=\"line\">};</div>\n\
<div class=\"line\"></div>\n\
<div class=\"line\"><span class=\"comment\">// Acyclic visitor</span></div>\n\
<div class=\"line\"><span class=\"keyword\">class </span>UnknownTexture2dVisitor : <span class=\"keyword\">public</span> <span class=\"keyword\">virtual</span> MaterialNodeVisitor</div>\n\
<div class=\"line\">{</div>\n\
<div class=\"line\"><span class=\"keyword\">public</span>:</div>\n\
<div class=\"line\">    <span class=\"comment\">// Optional to visit unknown texture2d node.</span></div>\n\
<div class=\"line\">    <span class=\"keyword\">virtual</span> <span class=\"keywordtype\">void</span> visit(<span class=\"keyword\">const</span> UnknownTexture2d&amp; node) {}</div>\n\
<div class=\"line\">};</div>\n\
<div class=\"line\"></div>\n\
<div class=\"line\"><span class=\"comment\">/*==============================================================================</span></div>\n\
<div class=\"line\"><span class=\"comment\"> * CLASS UnknownMaterialNode</span></div>\n\
<div class=\"line\"><span class=\"comment\"> *============================================================================*/</span></div>\n\
<div class=\"line\"></div>\n\
<div class=\"line\"><span class=\"comment\">// This is a generic material node that we don&#39;t recognize the node type.</span></div>\n\
<div class=\"line\"><span class=\"keyword\">class </span>UnknownMaterialNode : <span class=\"keyword\">public</span> MaterialNode</div>\n\
<div class=\"line\">{</div>\n\
<div class=\"line\"><span class=\"keyword\">public</span>:</div>\n\
<div class=\"line\">    UnknownMaterialNode(<span class=\"keyword\">const</span> <a class=\"code\" href=\"#!/url=./cpp_ref/class_m_string.html\">MString</a>&amp; name, <span class=\"keyword\">const</span> <a class=\"code\" href=\"#!/url=./cpp_ref/class_m_string.html\">MString</a>&amp; type = <span class=\"stringliteral\">&quot;unknown&quot;</span>);</div>\n\
<div class=\"line\"></div>\n\
<div class=\"line\">    <span class=\"keyword\">virtual</span> <span class=\"keywordtype\">void</span> accept(MaterialNodeVisitor&amp; visitor) <span class=\"keyword\">const</span>;</div>\n\
<div class=\"line\">};</div>\n\
<div class=\"line\"></div>\n\
<div class=\"line\"><span class=\"comment\">// Acyclic visitor</span></div>\n\
<div class=\"line\"><span class=\"keyword\">class </span>UnknownMaterialNodeVisitor : <span class=\"keyword\">public</span> <span class=\"keyword\">virtual</span> MaterialNodeVisitor</div>\n\
<div class=\"line\">{</div>\n\
<div class=\"line\"><span class=\"keyword\">public</span>:</div>\n\
<div class=\"line\">    <span class=\"comment\">// Optional to visit unknown node.</span></div>\n\
<div class=\"line\">    <span class=\"keyword\">virtual</span> <span class=\"keywordtype\">void</span> visit(<span class=\"keyword\">const</span> UnknownMaterialNode&amp; node) {}</div>\n\
<div class=\"line\">};</div>\n\
<div class=\"line\"></div>\n\
<div class=\"line\"></div>\n\
<div class=\"line\"><span class=\"comment\">/*==============================================================================</span></div>\n\
<div class=\"line\"><span class=\"comment\"> * CLASS ConcreteMaterialNodeVisitor</span></div>\n\
<div class=\"line\"><span class=\"comment\"> *============================================================================*/</span></div>\n\
<div class=\"line\"></div>\n\
<div class=\"line\"><span class=\"keyword\">class </span>ConcreteMaterialNodeVisitor :</div>\n\
<div class=\"line\">    <span class=\"keyword\">public</span> SurfaceMaterialVisitor,</div>\n\
<div class=\"line\">    <span class=\"keyword\">public</span> LambertMaterialVisitor,</div>\n\
<div class=\"line\">    <span class=\"keyword\">public</span> PhongMaterialVisitor,</div>\n\
<div class=\"line\">    <span class=\"keyword\">public</span> BlinnMaterialVisitor,</div>\n\
<div class=\"line\">    <span class=\"keyword\">public</span> Texture2dVisitor,</div>\n\
<div class=\"line\">    <span class=\"keyword\">public</span> FileTextureVisitor,</div>\n\
<div class=\"line\">    <span class=\"keyword\">public</span> UnknownTexture2dVisitor,</div>\n\
<div class=\"line\">    <span class=\"keyword\">public</span> UnknownMaterialNodeVisitor</div>\n\
<div class=\"line\">{};</div>\n\
<div class=\"line\"></div>\n\
<div class=\"line\"></div>\n\
<div class=\"line\">} <span class=\"comment\">// namespace GPUCache</span></div>\n\
<div class=\"line\"></div>\n\
<div class=\"line\"><span class=\"preprocessor\">#endif</span></div>\n\
<div class=\"line\"></div>\n\
</div><!-- fragment --> </div><!-- contents -->\n\
</div><!-- doc-content -->\n\
          <div class=\"footer-block\"><a href=\"../html/ac.cmtdialog.htm\" class=\"comments-anchor\" target=\"_blank\"><span class=\"comments-link\">Please send us your comment about this page</span></a></div><br></div>\n\
   </div></body>\n\
</html>\n\
";