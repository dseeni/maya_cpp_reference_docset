var topic = "<!-- saved from url=(0024)http://docs.autodesk.com -->\n\
<html>\n\
   <head><script src=\"../scripts/yepnope.1.5.4-min.js\" type=\"text/javascript\"></script><script src=\"../scripts/lib/jquery-1.11.1.min.js\" type=\"text/javascript\"></script><meta http-equiv=\"Content-Type\" content=\"text/html; charset=UTF-8\"><meta name=\"product\" content=\"MAYAUL\"><meta name=\"release\" content=\"2017\"><meta name=\"book\" content=\"Developer\"><meta name=\"created\" content=\"2016-06-16\"><meta name=\"topicid\" content=\"GUID-02DEF634-1E7B-48C6-8ACD-2C934CA97887\"><meta name=\"topic-type\" content=\"concept\">\n\
      <title>hwReflectBumpShader_NV20/MTexture.cpp</title>\n\
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
    cpp_ref_adsk_ref_toc.initNavTree(\'hw_reflect_bump_shader__n_v20_2_m_texture_8cpp-example.html\', tocPrefix);\n\
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
            <h1>hwReflectBumpShader_NV20/MTexture.cpp</h1>\n\
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
<div class=\"title\">hwReflectBumpShader_NV20/MTexture.cpp</div>  </div>\n\
</div><!--header-->\n\
<div class=\"contents\">\n\
<div class=\"fragment\"><div class=\"line\"><span class=\"comment\">//-</span></div>\n\
<div class=\"line\"><span class=\"comment\">// ==========================================================================</span></div>\n\
<div class=\"line\"><span class=\"comment\">// Copyright (C) 1995 - 2006 Autodesk, Inc. and/or its licensors.  All </span></div>\n\
<div class=\"line\"><span class=\"comment\">// rights reserved.</span></div>\n\
<div class=\"line\"><span class=\"comment\">//</span></div>\n\
<div class=\"line\"><span class=\"comment\">// The coded instructions, statements, computer programs, and/or related </span></div>\n\
<div class=\"line\"><span class=\"comment\">// material (collectively the &quot;Data&quot;) in these files contain unpublished </span></div>\n\
<div class=\"line\"><span class=\"comment\">// information proprietary to Autodesk, Inc. (&quot;Autodesk&quot;) and/or its </span></div>\n\
<div class=\"line\"><span class=\"comment\">// licensors, which is protected by U.S. and Canadian federal copyright </span></div>\n\
<div class=\"line\"><span class=\"comment\">// law and by international treaties.</span></div>\n\
<div class=\"line\"><span class=\"comment\">//</span></div>\n\
<div class=\"line\"><span class=\"comment\">// The Data is provided for use exclusively by You. You have the right </span></div>\n\
<div class=\"line\"><span class=\"comment\">// to use, modify, and incorporate this Data into other products for </span></div>\n\
<div class=\"line\"><span class=\"comment\">// purposes authorized by the Autodesk software license agreement, </span></div>\n\
<div class=\"line\"><span class=\"comment\">// without fee.</span></div>\n\
<div class=\"line\"><span class=\"comment\">//</span></div>\n\
<div class=\"line\"><span class=\"comment\">// The copyright notices in the Software and this entire statement, </span></div>\n\
<div class=\"line\"><span class=\"comment\">// including the above license grant, this restriction and the </span></div>\n\
<div class=\"line\"><span class=\"comment\">// following disclaimer, must be included in all copies of the </span></div>\n\
<div class=\"line\"><span class=\"comment\">// Software, in whole or in part, and all derivative works of </span></div>\n\
<div class=\"line\"><span class=\"comment\">// the Software, unless such copies or derivative works are solely </span></div>\n\
<div class=\"line\"><span class=\"comment\">// in the form of machine-executable object code generated by a </span></div>\n\
<div class=\"line\"><span class=\"comment\">// source language processor.</span></div>\n\
<div class=\"line\"><span class=\"comment\">//</span></div>\n\
<div class=\"line\"><span class=\"comment\">// THE SOFTWARE IS PROVIDED &quot;AS IS&quot;, WITHOUT WARRANTY OF ANY KIND. </span></div>\n\
<div class=\"line\"><span class=\"comment\">// AUTODESK DOES NOT MAKE AND HEREBY DISCLAIMS ANY EXPRESS OR IMPLIED </span></div>\n\
<div class=\"line\"><span class=\"comment\">// WARRANTIES INCLUDING, BUT NOT LIMITED TO, THE WARRANTIES OF </span></div>\n\
<div class=\"line\"><span class=\"comment\">// NON-INFRINGEMENT, MERCHANTABILITY OR FITNESS FOR A PARTICULAR </span></div>\n\
<div class=\"line\"><span class=\"comment\">// PURPOSE, OR ARISING FROM A COURSE OF DEALING, USAGE, OR </span></div>\n\
<div class=\"line\"><span class=\"comment\">// TRADE PRACTICE. IN NO EVENT WILL AUTODESK AND/OR ITS LICENSORS </span></div>\n\
<div class=\"line\"><span class=\"comment\">// BE LIABLE FOR ANY LOST REVENUES, DATA, OR PROFITS, OR SPECIAL, </span></div>\n\
<div class=\"line\"><span class=\"comment\">// DIRECT, INDIRECT, OR CONSEQUENTIAL DAMAGES, EVEN IF AUTODESK </span></div>\n\
<div class=\"line\"><span class=\"comment\">// AND/OR ITS LICENSORS HAS BEEN ADVISED OF THE POSSIBILITY </span></div>\n\
<div class=\"line\"><span class=\"comment\">// OR PROBABILITY OF SUCH DAMAGES.</span></div>\n\
<div class=\"line\"><span class=\"comment\">//</span></div>\n\
<div class=\"line\"><span class=\"comment\">// ==========================================================================</span></div>\n\
<div class=\"line\"><span class=\"comment\">//+</span></div>\n\
<div class=\"line\"></div>\n\
<div class=\"line\"><span class=\"comment\">// MTexture.cpp</span></div>\n\
<div class=\"line\"></div>\n\
<div class=\"line\"><span class=\"comment\">// DESCRIPTION: Texture object, that can be mipmapped. Eventually,</span></div>\n\
<div class=\"line\"><span class=\"comment\">//              this class will likely end up in the Maya API.</span></div>\n\
<div class=\"line\"><span class=\"comment\">//</span></div>\n\
<div class=\"line\"><span class=\"comment\">// AUTHOR: Christian Laforte</span></div>\n\
<div class=\"line\"><span class=\"comment\">//</span></div>\n\
<div class=\"line\"><span class=\"comment\"></span></div>\n\
<div class=\"line\"><span class=\"preprocessor\">#include &quot;MTexture.h&quot;</span></div>\n\
<div class=\"line\"><span class=\"preprocessor\">#include &lt;maya/MStatus.h&gt;</span></div>\n\
<div class=\"line\"><span class=\"preprocessor\">#include &lt;maya/MGlobal.h&gt;</span></div>\n\
<div class=\"line\"><span class=\"preprocessor\">#include &quot;MNormalMapConverter.h&quot;</span></div>\n\
<div class=\"line\"></div>\n\
<div class=\"line\">MTexture::MTexture()</div>\n\
<div class=\"line\">{</div>\n\
<div class=\"line\">    <span class=\"comment\">// Initialize everything</span></div>\n\
<div class=\"line\">    m_levels = NULL;</div>\n\
<div class=\"line\">    m_numLevels = 0;</div>\n\
<div class=\"line\">}</div>\n\
<div class=\"line\"></div>\n\
<div class=\"line\"><span class=\"preprocessor\">#define MIN(x, y) (((x) &lt; (y)) ? (x) : (y) )</span></div>\n\
<div class=\"line\"><span class=\"preprocessor\">#define MAX(x, y) (((x) &gt; (y)) ? (x) : (y) )</span></div>\n\
<div class=\"line\"></div>\n\
<div class=\"line\"><span class=\"keywordtype\">bool</span> MTexture::load(<a name=\"_a0\"></a><a class=\"code\" href=\"#!/url=./cpp_ref/class_m_string.html\">MString</a> filename, </div>\n\
<div class=\"line\">                    MTexture::Type type, </div>\n\
<div class=\"line\">                    <span class=\"keywordtype\">bool</span> mipmapped <span class=\"comment\">/* = true */</span>,</div>\n\
<div class=\"line\">                    GLenum target <span class=\"comment\">/* = GL_TEXTURE_2D */</span>)</div>\n\
<div class=\"line\">{</div>\n\
<div class=\"line\">    <a name=\"_a1\"></a><a class=\"code\" href=\"#!/url=./cpp_ref/class_m_image.html\">MImage</a> image;</div>\n\
<div class=\"line\">    <a name=\"_a2\"></a><a class=\"code\" href=\"#!/url=./cpp_ref/class_m_status.html\">MStatus</a> stat = image.<a name=\"a3\"></a><a class=\"code\" href=\"#!/url=./cpp_ref/class_m_image.html#a6c0b6d3f857fa6adc999243f3ff6283a\">readFromFile</a>(filename);</div>\n\
<div class=\"line\">    <span class=\"keywordflow\">if</span> (!stat)</div>\n\
<div class=\"line\">    {</div>\n\
<div class=\"line\">        <a name=\"a4\"></a><a class=\"code\" href=\"#!/url=./cpp_ref/class_m_global.html#acb043e7fc4eb7fc0f39833d31364b8a4\">MGlobal::displayWarning</a>(<span class=\"stringliteral\">&quot;In MTexture::load(), file not found: \\&quot;&quot;</span> + filename + <span class=\"stringliteral\">&quot;\\&quot;.&quot;</span>);</div>\n\
<div class=\"line\">        <span class=\"keywordflow\">return</span> <span class=\"keyword\">false</span>;</div>\n\
<div class=\"line\">    }</div>\n\
<div class=\"line\"></div>\n\
<div class=\"line\">    <span class=\"keywordflow\">return</span> set( image, type, mipmapped, target );</div>\n\
<div class=\"line\">}</div>\n\
<div class=\"line\"></div>\n\
<div class=\"line\"><span class=\"keywordtype\">bool</span> MTexture::set(<a class=\"code\" href=\"#!/url=./cpp_ref/class_m_image.html\">MImage</a> &amp;image, Type type, </div>\n\
<div class=\"line\">                   <span class=\"keywordtype\">bool</span> mipmapped <span class=\"comment\">/* = true */</span>, </div>\n\
<div class=\"line\">                   GLenum target <span class=\"comment\">/* = GL_TEXTURE_2D) */</span>)</div>\n\
<div class=\"line\">{</div>\n\
<div class=\"line\">    <span class=\"keywordtype\">unsigned</span> <span class=\"keywordtype\">int</span> i; <span class=\"comment\">// used as a temporary index.</span></div>\n\
<div class=\"line\"></div>\n\
<div class=\"line\">    <span class=\"comment\">// Store the type of texture, and derive other parameters.</span></div>\n\
<div class=\"line\">    <span class=\"comment\">// (Depth is assumed to be 4 bytes per pixel RGBA.</span></div>\n\
<div class=\"line\">    <span class=\"comment\">// MImage always returns that pixel format anyway.)</span></div>\n\
<div class=\"line\">    m_type = type;</div>\n\
<div class=\"line\">    <span class=\"keywordflow\">if</span> ( (m_type == RGBA) || (m_type == NMAP) )</div>\n\
<div class=\"line\">    {</div>\n\
<div class=\"line\">        m_internalFormat = GL_RGBA8;</div>\n\
<div class=\"line\">        m_format = GL_RGBA;</div>\n\
<div class=\"line\">        m_componentFormat = GL_UNSIGNED_BYTE;</div>\n\
<div class=\"line\">    }</div>\n\
<div class=\"line\">    <span class=\"keywordflow\">else</span> <span class=\"keywordflow\">if</span> (m_type == HILO)</div>\n\
<div class=\"line\">    {</div>\n\
<div class=\"line\"><span class=\"preprocessor\">#if NVIDIA_SPECIFIC</span></div>\n\
<div class=\"line\">        m_internalFormat = GL_SIGNED_HILO_NV;</div>\n\
<div class=\"line\">        m_format = GL_HILO_NV;</div>\n\
<div class=\"line\">        m_componentFormat = GL_SHORT;</div>\n\
<div class=\"line\"><span class=\"preprocessor\">#endif</span></div>\n\
<div class=\"line\">    }</div>\n\
<div class=\"line\">    <span class=\"keywordflow\">else</span> assert(0);</div>\n\
<div class=\"line\"></div>\n\
<div class=\"line\"></div>\n\
<div class=\"line\">    <span class=\"comment\">// Get the dimension of the texture.</span></div>\n\
<div class=\"line\">    <a class=\"code\" href=\"#!/url=./cpp_ref/class_m_status.html\">MStatus</a> stat = image.<a name=\"a5\"></a><a class=\"code\" href=\"#!/url=./cpp_ref/class_m_image.html#acab1f6acf34fc74e4d717322fa35241a\">getSize</a>(m_width, m_height);</div>\n\
<div class=\"line\">    assert(stat);</div>\n\
<div class=\"line\">    m_mipmapped = mipmapped;</div>\n\
<div class=\"line\"></div>\n\
<div class=\"line\">    <span class=\"keywordtype\">unsigned</span> <span class=\"keywordtype\">int</span> maxWidthLevels  = highestPowerOf2(m_width);</div>\n\
<div class=\"line\">    <span class=\"keywordtype\">unsigned</span> <span class=\"keywordtype\">int</span> maxHeightLevels = highestPowerOf2(m_height);</div>\n\
<div class=\"line\"></div>\n\
<div class=\"line\">    <span class=\"comment\">// Standard OpenGL doesn&#39;t accept width or height that are not power of 2.</span></div>\n\
<div class=\"line\">    <span class=\"comment\">// If that&#39;s the case we resize the picture to the closest larger valid rectangle.</span></div>\n\
<div class=\"line\">    <span class=\"keywordtype\">bool</span> widthIsExponent = (m_width == (<span class=\"keywordtype\">unsigned</span> int) (1 &lt;&lt; maxWidthLevels));</div>\n\
<div class=\"line\">    <span class=\"keywordtype\">bool</span> heightIsExponent = (m_height == (<span class=\"keywordtype\">unsigned</span> int) (1 &lt;&lt; maxHeightLevels));</div>\n\
<div class=\"line\"></div>\n\
<div class=\"line\">    <span class=\"keywordflow\">if</span> (!widthIsExponent || !heightIsExponent)</div>\n\
<div class=\"line\">    {</div>\n\
<div class=\"line\">        <span class=\"comment\">// Calculate the new width/height.</span></div>\n\
<div class=\"line\">        <span class=\"keywordflow\">if</span> (!widthIsExponent)</div>\n\
<div class=\"line\">            maxWidthLevels++;</div>\n\
<div class=\"line\">        <span class=\"keywordflow\">if</span> (!heightIsExponent)</div>\n\
<div class=\"line\">            maxHeightLevels++;</div>\n\
<div class=\"line\"></div>\n\
<div class=\"line\">        <span class=\"comment\">// Resize the image, without bothering to preserve the aspect ratio.</span></div>\n\
<div class=\"line\">        m_width = 1 &lt;&lt; maxWidthLevels;</div>\n\
<div class=\"line\">        m_height = 1 &lt;&lt; maxHeightLevels;</div>\n\
<div class=\"line\">        image.<a name=\"a6\"></a><a class=\"code\" href=\"#!/url=./cpp_ref/class_m_image.html#aa099a65eabd0fe2c81af181d5f96b71a\">resize</a>(m_width, m_height, <span class=\"keyword\">false</span>);</div>\n\
<div class=\"line\">    }</div>\n\
<div class=\"line\"></div>\n\
<div class=\"line\">    <span class=\"comment\">// Deallocate any existing levels</span></div>\n\
<div class=\"line\">    <span class=\"keywordflow\">if</span> (m_levels != NULL)</div>\n\
<div class=\"line\">    {</div>\n\
<div class=\"line\">        <span class=\"keywordflow\">for</span> (i=0; i &lt; m_numLevels; i++)</div>\n\
<div class=\"line\">        {</div>\n\
<div class=\"line\">            <span class=\"keywordflow\">if</span> (m_levels[i])</div>\n\
<div class=\"line\">            {</div>\n\
<div class=\"line\">                <span class=\"keyword\">delete</span> [] m_levels[i];</div>\n\
<div class=\"line\">                m_levels[i] = NULL;</div>\n\
<div class=\"line\">            }</div>\n\
<div class=\"line\">        }       </div>\n\
<div class=\"line\">        <span class=\"keyword\">delete</span> [] m_levels;</div>\n\
<div class=\"line\">    }</div>\n\
<div class=\"line\"></div>\n\
<div class=\"line\">    <span class=\"comment\">// The number of mipmap levels cannot be greater than the exponent of width or height.</span></div>\n\
<div class=\"line\">    <span class=\"comment\">// The number of mipmap levels is 1 for a non-mipmapped texture.</span></div>\n\
<div class=\"line\">    <span class=\"comment\">// For mipmapped textures, m_numLevels = max level + 1.</span></div>\n\
<div class=\"line\">    m_numLevels = mipmapped ? MAX(maxWidthLevels, maxHeightLevels) + 1 : 1;</div>\n\
<div class=\"line\"></div>\n\
<div class=\"line\">    <span class=\"comment\">// Allocate the proper amount of memory, for the base level and the mipmaps.</span></div>\n\
<div class=\"line\">    m_levels = <span class=\"keyword\">new</span> <span class=\"keywordtype\">unsigned</span> <span class=\"keywordtype\">char</span>* [m_numLevels];</div>\n\
<div class=\"line\">    <span class=\"keywordflow\">for</span> (i=0; i &lt; m_numLevels; i++)</div>\n\
<div class=\"line\">    {</div>\n\
<div class=\"line\">        m_levels[i] = <span class=\"keyword\">new</span> <span class=\"keywordtype\">unsigned</span> <span class=\"keywordtype\">char</span> [width(i) * height(i) * 4];</div>\n\
<div class=\"line\">    }</div>\n\
<div class=\"line\"></div>\n\
<div class=\"line\">    <span class=\"comment\">// Copy the base level. (the actual file texture)</span></div>\n\
<div class=\"line\">    memcpy(m_levels[0], image.<a name=\"a7\"></a><a class=\"code\" href=\"#!/url=./cpp_ref/class_m_image.html#aba6def80dd70f1c9af3dbd348fe270ac\">pixels</a>(), m_width * m_height * 4);</div>\n\
<div class=\"line\">    </div>\n\
<div class=\"line\">    <span class=\"comment\">// Create the mipmapped levels.</span></div>\n\
<div class=\"line\">    <span class=\"comment\">// NOTE REGARDING THE width_ratio and height_ratio:</span></div>\n\
<div class=\"line\">    <span class=\"comment\">//     The smallest mipmap levels of non-square textures must be handled</span></div>\n\
<div class=\"line\">    <span class=\"comment\">// carefully. Say we have a 8x2 texture. Mipmap levels will be</span></div>\n\
<div class=\"line\">    <span class=\"comment\">// 4x1, 2x1, 1x1. We cannot simply multiply the current st coordinate by</span></div>\n\
<div class=\"line\">    <span class=\"comment\">// 2 like we do for square textures to find the source st coordinates, </span></div>\n\
<div class=\"line\">    <span class=\"comment\">// or we&#39;ll end up fetching outside of the source level. Instead, we</span></div>\n\
<div class=\"line\">    <span class=\"comment\">// multiply the target s, t coordinates by the width and height ratio respectively.</span></div>\n\
<div class=\"line\">    <span class=\"keywordflow\">for</span> (<span class=\"keywordtype\">unsigned</span> <span class=\"keywordtype\">int</span> current_level = 1; current_level &lt; m_numLevels; current_level++)</div>\n\
<div class=\"line\">    {</div>\n\
<div class=\"line\">        <span class=\"keywordtype\">unsigned</span> <span class=\"keywordtype\">int</span> width_ratio = width(i-1) / width(i);</div>\n\
<div class=\"line\">        <span class=\"keywordtype\">unsigned</span> <span class=\"keywordtype\">int</span> height_ratio = height(i-1) / height(i-1);</div>\n\
<div class=\"line\">        <span class=\"keywordtype\">unsigned</span> <span class=\"keywordtype\">int</span> previous_level = current_level - 1;</div>\n\
<div class=\"line\"></div>\n\
<div class=\"line\">        <span class=\"keywordflow\">for</span> (<span class=\"keywordtype\">unsigned</span> <span class=\"keywordtype\">int</span> target_t = 0; target_t &lt; height(current_level); target_t++)</div>\n\
<div class=\"line\">        {</div>\n\
<div class=\"line\">            <span class=\"keywordflow\">for</span> (<span class=\"keywordtype\">unsigned</span> <span class=\"keywordtype\">int</span> target_s = 0; target_s &lt; width(current_level); target_s++)</div>\n\
<div class=\"line\">            {</div>\n\
<div class=\"line\">                <span class=\"comment\">// The st coordinates from the source level.</span></div>\n\
<div class=\"line\">                <span class=\"keywordtype\">unsigned</span> <span class=\"keywordtype\">int</span> source_s = target_s * width_ratio;</div>\n\
<div class=\"line\">                <span class=\"keywordtype\">unsigned</span> <span class=\"keywordtype\">int</span> source_t = target_t * height_ratio;</div>\n\
<div class=\"line\">                <span class=\"keywordtype\">unsigned</span> <span class=\"keywordtype\">int</span> source_s2 = source_s + ((width_ratio == 2) ? 1 : 0);</div>\n\
<div class=\"line\">                <span class=\"keywordtype\">unsigned</span> <span class=\"keywordtype\">int</span> source_t2 = source_t + ((height_ratio == 2) ? 1 : 0);</div>\n\
<div class=\"line\"></div>\n\
<div class=\"line\">                <span class=\"keywordtype\">unsigned</span> <span class=\"keywordtype\">char</span> *destination  = internalFetch(target_s,   target_t,   current_level);</div>\n\
<div class=\"line\">                <span class=\"keywordtype\">unsigned</span> <span class=\"keywordtype\">char</span> *source1      = internalFetch(source_s,   source_t,   previous_level);</div>\n\
<div class=\"line\">                <span class=\"keywordtype\">unsigned</span> <span class=\"keywordtype\">char</span> *source2      = internalFetch(source_s2,  source_t,   previous_level);</div>\n\
<div class=\"line\">                <span class=\"keywordtype\">unsigned</span> <span class=\"keywordtype\">char</span> *source3      = internalFetch(source_s,   source_t2,  previous_level);</div>\n\
<div class=\"line\">                <span class=\"keywordtype\">unsigned</span> <span class=\"keywordtype\">char</span> *source4      = internalFetch(source_s2,  source_t2,  previous_level);</div>\n\
<div class=\"line\"></div>\n\
<div class=\"line\">                <span class=\"comment\">// Average byte per byte.</span></div>\n\
<div class=\"line\">                <span class=\"keywordtype\">unsigned</span> <span class=\"keywordtype\">int</span> average1 = (*source1++ + *source2++ + *source3++ + *source4++) / 4;</div>\n\
<div class=\"line\">                *destination++ = average1;</div>\n\
<div class=\"line\"></div>\n\
<div class=\"line\">                <span class=\"keywordtype\">unsigned</span> <span class=\"keywordtype\">int</span> average2 = (*source1++ + *source2++ + *source3++ + *source4++) / 4;</div>\n\
<div class=\"line\">                *destination++ = average2;</div>\n\
<div class=\"line\"></div>\n\
<div class=\"line\">                <span class=\"keywordtype\">unsigned</span> <span class=\"keywordtype\">int</span> average3 = (*source1++ + *source2++ + *source3++ + *source4++) / 4;</div>\n\
<div class=\"line\">                *destination++ = average3;</div>\n\
<div class=\"line\"></div>\n\
<div class=\"line\">                <span class=\"keywordtype\">unsigned</span> <span class=\"keywordtype\">int</span> average4 = (*source1++ + *source2++ + *source3++ + *source4++) / 4;</div>\n\
<div class=\"line\">                *destination++ = average4;</div>\n\
<div class=\"line\">            }</div>\n\
<div class=\"line\">        }</div>\n\
<div class=\"line\">    }</div>\n\
<div class=\"line\"></div>\n\
<div class=\"line\">    <span class=\"keywordflow\">if</span>( type == NMAP )</div>\n\
<div class=\"line\">    {</div>\n\
<div class=\"line\">        <span class=\"comment\">// Convert each level to the NORMAL map format</span></div>\n\
<div class=\"line\">        <span class=\"comment\">//</span></div>\n\
<div class=\"line\">        MNormalMapConverter mapConverter;</div>\n\
<div class=\"line\"></div>\n\
<div class=\"line\">        <span class=\"keywordflow\">for</span> (<span class=\"keywordtype\">unsigned</span> <span class=\"keywordtype\">int</span> i = 0; i &lt; m_numLevels; i++)</div>\n\
<div class=\"line\">        {</div>\n\
<div class=\"line\">            mapConverter.convertToNormalMap( m_levels[i], width(i), height(i), MNormalMapConverter::RGBA, 2.0f );</div>\n\
<div class=\"line\">        }</div>\n\
<div class=\"line\">    }</div>\n\
<div class=\"line\"></div>\n\
<div class=\"line\">    specify(target);</div>\n\
<div class=\"line\"></div>\n\
<div class=\"line\">    <span class=\"keywordflow\">return</span> <span class=\"keyword\">true</span>;</div>\n\
<div class=\"line\">}</div>\n\
<div class=\"line\"></div>\n\
<div class=\"line\"><span class=\"keywordtype\">bool</span> MTexture::specify(GLenum target <span class=\"comment\">/* = GL_TEXTURE_2D */</span>)</div>\n\
<div class=\"line\">{</div>\n\
<div class=\"line\">    assert(glGetError() == GL_NO_ERROR);</div>\n\
<div class=\"line\"></div>\n\
<div class=\"line\">    m_texObj.bind();</div>\n\
<div class=\"line\"></div>\n\
<div class=\"line\">    assert(glGetError() == GL_NO_ERROR);</div>\n\
<div class=\"line\"></div>\n\
<div class=\"line\">    <span class=\"keywordflow\">for</span> (<span class=\"keywordtype\">unsigned</span> <span class=\"keywordtype\">int</span> i=0; i &lt; m_numLevels; i++)</div>\n\
<div class=\"line\">    {</div>\n\
<div class=\"line\">        glTexImage2D(target, i, m_internalFormat, width(i), height(i), 0,</div>\n\
<div class=\"line\">                     m_format, m_componentFormat, m_levels[i]);</div>\n\
<div class=\"line\"></div>\n\
<div class=\"line\">        assert(glGetError() == GL_NO_ERROR);</div>\n\
<div class=\"line\">    }</div>\n\
<div class=\"line\"></div>\n\
<div class=\"line\">    <span class=\"keywordflow\">if</span> (mipmapped())</div>\n\
<div class=\"line\">    {</div>\n\
<div class=\"line\">        <span class=\"comment\">// Mipmapping enabled</span></div>\n\
<div class=\"line\">        m_texObj.parameter(GL_TEXTURE_MIN_FILTER, GL_LINEAR_MIPMAP_LINEAR);</div>\n\
<div class=\"line\">        assert(glGetError() == GL_NO_ERROR);</div>\n\
<div class=\"line\"></div>\n\
<div class=\"line\">        m_texObj.parameter(GL_TEXTURE_MAG_FILTER, GL_LINEAR);</div>\n\
<div class=\"line\">        assert(glGetError() == GL_NO_ERROR);</div>\n\
<div class=\"line\">    }</div>\n\
<div class=\"line\">    <span class=\"keywordflow\">else</span></div>\n\
<div class=\"line\">    {</div>\n\
<div class=\"line\">        m_texObj.parameter(GL_TEXTURE_MIN_FILTER, GL_LINEAR);</div>\n\
<div class=\"line\">        m_texObj.parameter(GL_TEXTURE_MAG_FILTER, GL_LINEAR);</div>\n\
<div class=\"line\">    }</div>\n\
<div class=\"line\"></div>\n\
<div class=\"line\">    m_texObj.parameter(GL_TEXTURE_WRAP_S, GL_CLAMP);</div>\n\
<div class=\"line\">    m_texObj.parameter(GL_TEXTURE_WRAP_T, GL_CLAMP);</div>\n\
<div class=\"line\"></div>\n\
<div class=\"line\">    <span class=\"keywordflow\">return</span> <span class=\"keyword\">true</span>;</div>\n\
<div class=\"line\">}</div>\n\
<div class=\"line\"></div>\n\
<div class=\"line\"><span class=\"keywordtype\">bool</span> MTexture::bind()</div>\n\
<div class=\"line\">{</div>\n\
<div class=\"line\">    m_texObj.bind();</div>\n\
<div class=\"line\">    <span class=\"comment\">//specify(GL_TEXTURE_2D);</span></div>\n\
<div class=\"line\"></div>\n\
<div class=\"line\">    <span class=\"keywordflow\">return</span> <span class=\"keyword\">true</span>;</div>\n\
<div class=\"line\">}</div>\n\
<div class=\"line\"></div>\n\
<div class=\"line\"></div>\n\
<div class=\"line\"><span class=\"keywordtype\">int</span> highestPowerOf2(<span class=\"keywordtype\">int</span> num)</div>\n\
<div class=\"line\">{</div>\n\
<div class=\"line\">    <span class=\"keywordtype\">int</span> power = 0;</div>\n\
<div class=\"line\"></div>\n\
<div class=\"line\">    <span class=\"keywordflow\">while</span> (num &gt; 1)</div>\n\
<div class=\"line\">    {</div>\n\
<div class=\"line\">        power++;</div>\n\
<div class=\"line\">        num = num &gt;&gt; 1;</div>\n\
<div class=\"line\">    }</div>\n\
<div class=\"line\"></div>\n\
<div class=\"line\">    <span class=\"keywordflow\">return</span> power;</div>\n\
<div class=\"line\">}</div>\n\
<div class=\"line\"></div>\n\
<div class=\"line\"></div>\n\
</div><!-- fragment --> </div><!-- contents -->\n\
</div><!-- doc-content -->\n\
          <div class=\"footer-block\"><a href=\"../html/ac.cmtdialog.htm\" class=\"comments-anchor\" target=\"_blank\"><span class=\"comments-link\">Please send us your comment about this page</span></a></div><br></div>\n\
   </div></body>\n\
</html>\n\
";