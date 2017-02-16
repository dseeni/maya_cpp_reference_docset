var topic = "<!-- saved from url=(0024)http://docs.autodesk.com -->\n\
<html>\n\
   <head><script src=\"../scripts/yepnope.1.5.4-min.js\" type=\"text/javascript\"></script><script src=\"../scripts/lib/jquery-1.11.1.min.js\" type=\"text/javascript\"></script><meta http-equiv=\"Content-Type\" content=\"text/html; charset=UTF-8\"><meta name=\"product\" content=\"MAYAUL\"><meta name=\"release\" content=\"2017\"><meta name=\"book\" content=\"Developer\"><meta name=\"created\" content=\"2016-06-16\"><meta name=\"topicid\" content=\"GUID-02DEF634-1E7B-48C6-8ACD-2C934CA97887\"><meta name=\"topic-type\" content=\"concept\">\n\
      <title>gpuCache/gpuCacheFrustum.h</title>\n\
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
    cpp_ref_adsk_ref_toc.initNavTree(\'gpu_cache_2gpu_cache_frustum_8h-example.html\', tocPrefix);\n\
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
            <h1>gpuCache/gpuCacheFrustum.h</h1>\n\
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
<div class=\"title\">gpuCache/gpuCacheFrustum.h</div>  </div>\n\
</div><!--header-->\n\
<div class=\"contents\">\n\
<div class=\"fragment\"><div class=\"line\"><span class=\"preprocessor\">#ifndef _gpuCacheFrustum_h_</span></div>\n\
<div class=\"line\"><span class=\"preprocessor\">#define _gpuCacheFrustum_h_</span></div>\n\
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
<div class=\"line\"><span class=\"preprocessor\">#include &lt;maya/MMatrix.h&gt;</span></div>\n\
<div class=\"line\"><span class=\"preprocessor\">#include &lt;maya/MBoundingBox.h&gt;</span></div>\n\
<div class=\"line\"></div>\n\
<div class=\"line\"><span class=\"preprocessor\">#include &lt;cassert&gt;</span></div>\n\
<div class=\"line\"></div>\n\
<div class=\"line\"><span class=\"keyword\">namespace </span>GPUCache {</div>\n\
<div class=\"line\">    </div>\n\
<div class=\"line\"><span class=\"comment\">//==============================================================================</span></div>\n\
<div class=\"line\"><span class=\"comment\">// CLASS Frustum</span></div>\n\
<div class=\"line\"><span class=\"comment\">//==============================================================================</span></div>\n\
<div class=\"line\"></div>\n\
<div class=\"line\"><span class=\"comment\">// Inspired from &quot;Optimized View Frustum Culling Algorithms&quot;, Ulf</span></div>\n\
<div class=\"line\"><span class=\"comment\">// Assarsson and Tomas Moller, Chalmers University, March 1999</span></div>\n\
<div class=\"line\"><span class=\"keyword\">class </span>Frustum</div>\n\
<div class=\"line\">{</div>\n\
<div class=\"line\"><span class=\"keyword\">public</span>:</div>\n\
<div class=\"line\">    </div>\n\
<div class=\"line\">    <span class=\"comment\">/*----- typedefs and enums -----*/</span></div>\n\
<div class=\"line\">    </div>\n\
<div class=\"line\">    <span class=\"keyword\">enum</span> ClippingResult {</div>\n\
<div class=\"line\">        kIntersectsLeft     = (1),</div>\n\
<div class=\"line\">        kIntersectsRight    = (1 &lt;&lt; 1),</div>\n\
<div class=\"line\">        kIntersectsBottom   = (1 &lt;&lt; 2),</div>\n\
<div class=\"line\">        kIntersectsTop      = (1 &lt;&lt; 3),</div>\n\
<div class=\"line\">        kIntersectsNear     = (1 &lt;&lt; 4),</div>\n\
<div class=\"line\">        kIntersectsFar      = (1 &lt;&lt; 5),</div>\n\
<div class=\"line\"></div>\n\
<div class=\"line\">        kIntersectsMask     = kIntersectsLeft | kIntersectsRight |</div>\n\
<div class=\"line\">                              kIntersectsBottom | kIntersectsTop |</div>\n\
<div class=\"line\">                              kIntersectsNear | kIntersectsFar,</div>\n\
<div class=\"line\"></div>\n\
<div class=\"line\">        kOutside            = (1 &lt;&lt; 6),</div>\n\
<div class=\"line\">        kInside             = (1 &lt;&lt; 7),</div>\n\
<div class=\"line\"></div>\n\
<div class=\"line\">        kIntersects         = kIntersectsMask,</div>\n\
<div class=\"line\">        kUnknown            = kIntersectsMask,</div>\n\
<div class=\"line\">    };</div>\n\
<div class=\"line\"></div>\n\
<div class=\"line\">    <span class=\"keyword\">enum</span> <a class=\"code\" href=\"#!/url=./cpp_ref/namespace_m_h_w_render.html#ad970d5c990d4803d0e9d73c1ff4fda49\">DrawAPI</a> {</div>\n\
<div class=\"line\">        <a class=\"code\" href=\"#!/url=./cpp_ref/namespace_m_h_w_render.html#ad970d5c990d4803d0e9d73c1ff4fda49a72361be679c1aca1c1be5f9b500a3315\">kOpenGL</a>,</div>\n\
<div class=\"line\">        kDirectX,</div>\n\
<div class=\"line\">    };</div>\n\
<div class=\"line\"></div>\n\
<div class=\"line\">    <span class=\"comment\">/*----- member functions -----*/</span></div>\n\
<div class=\"line\">    </div>\n\
<div class=\"line\">    Frustum(<a name=\"_a0\"></a><a class=\"code\" href=\"#!/url=./cpp_ref/class_m_matrix.html\">MMatrix</a> worldViewProjInvMatrix, <a class=\"code\" href=\"#!/url=./cpp_ref/namespace_m_h_w_render.html#ad970d5c990d4803d0e9d73c1ff4fda49\">DrawAPI</a> api = <a class=\"code\" href=\"#!/url=./cpp_ref/namespace_m_h_w_render.html#ad970d5c990d4803d0e9d73c1ff4fda49a72361be679c1aca1c1be5f9b500a3315\">kOpenGL</a>);</div>\n\
<div class=\"line\"></div>\n\
<div class=\"line\">    ClippingResult test(<span class=\"keyword\">const</span> <a name=\"_a1\"></a><a class=\"code\" href=\"#!/url=./cpp_ref/class_m_bounding_box.html\">MBoundingBox</a>&amp; bbox, </div>\n\
<div class=\"line\">        <span class=\"keyword\">const</span> ClippingResult&amp; parentResult = kUnknown)<span class=\"keyword\"> const</span></div>\n\
<div class=\"line\"><span class=\"keyword\">    </span>{</div>\n\
<div class=\"line\">        <span class=\"comment\">// kOutside and kInside should be processed before calling test()</span></div>\n\
<div class=\"line\">        assert(!(parentResult &amp; (kOutside | kInside)));</div>\n\
<div class=\"line\"></div>\n\
<div class=\"line\">        <span class=\"keyword\">const</span> <a name=\"_a2\"></a><a class=\"code\" href=\"#!/url=./cpp_ref/class_m_point.html\">MPoint</a> pmin = bbox.<a name=\"a3\"></a><a class=\"code\" href=\"#!/url=./cpp_ref/class_m_bounding_box.html#afb3213b98f3a6b4bda9759511e9b79a1\">min</a>();</div>\n\
<div class=\"line\">        <span class=\"keyword\">const</span> <a class=\"code\" href=\"#!/url=./cpp_ref/class_m_point.html\">MPoint</a> pmax = bbox.<a name=\"a4\"></a><a class=\"code\" href=\"#!/url=./cpp_ref/class_m_bounding_box.html#a1dfdbea9d5560e4aa09d34bdbd82480c\">max</a>();</div>\n\
<div class=\"line\">            </div>\n\
<div class=\"line\">        <span class=\"keywordtype\">int</span> result    = 0;</div>\n\
<div class=\"line\">        <span class=\"keywordtype\">int</span> intersect = 1;</div>\n\
<div class=\"line\"></div>\n\
<div class=\"line\">        <span class=\"keywordflow\">for</span> (<span class=\"keywordtype\">int</span> i=kFirstPlane; i&lt;=kLastPlane; ++i,intersect=intersect&lt;&lt;1) {</div>\n\
<div class=\"line\">            <span class=\"comment\">// Check the parent bounding box against the clipping plane.</span></div>\n\
<div class=\"line\">            <span class=\"comment\">// We don&#39;t need to check the clipping plane if</span></div>\n\
<div class=\"line\">            <span class=\"comment\">// the parent bounding box is fully inside the clipping plane,</span></div>\n\
<div class=\"line\">            <span class=\"keywordflow\">if</span> (parentResult &amp; intersect) {</div>\n\
<div class=\"line\">                <span class=\"comment\">// Parent bounding box intersects with the clipping plane</span></div>\n\
<div class=\"line\">                <span class=\"comment\">// Test this bounding box against the clipping plane</span></div>\n\
<div class=\"line\">                ClippingResult res = planes[i].test(pmin, pmax);</div>\n\
<div class=\"line\"></div>\n\
<div class=\"line\">                <span class=\"comment\">// Outside the clipping plane, return</span></div>\n\
<div class=\"line\">                <span class=\"keywordflow\">if</span> (res == kOutside) {</div>\n\
<div class=\"line\">                    <span class=\"keywordflow\">return</span> kOutside;</div>\n\
<div class=\"line\">                }</div>\n\
<div class=\"line\"></div>\n\
<div class=\"line\">                <span class=\"comment\">// Intersect the clipping plane, set the bit</span></div>\n\
<div class=\"line\">                <span class=\"keywordflow\">if</span> (res == kIntersects) {</div>\n\
<div class=\"line\">                    result = result | intersect;</div>\n\
<div class=\"line\">                }</div>\n\
<div class=\"line\">            }</div>\n\
<div class=\"line\">        }</div>\n\
<div class=\"line\"></div>\n\
<div class=\"line\">        <span class=\"comment\">// The bounding box does not intersect with any of the clipping plane.</span></div>\n\
<div class=\"line\">        <span class=\"keywordflow\">if</span> (!(result &amp; kIntersectsMask)) {</div>\n\
<div class=\"line\">            <span class=\"keywordflow\">return</span> kInside;</div>\n\
<div class=\"line\">        }</div>\n\
<div class=\"line\"></div>\n\
<div class=\"line\">        <span class=\"comment\">// The bounding box intersect with one of the clipping plane.</span></div>\n\
<div class=\"line\">        <span class=\"keywordflow\">return</span> (ClippingResult)result;</div>\n\
<div class=\"line\">    }        </div>\n\
<div class=\"line\">        </div>\n\
<div class=\"line\"><span class=\"keyword\">private</span>:</div>\n\
<div class=\"line\">        </div>\n\
<div class=\"line\">    <span class=\"comment\">/*----- typedefs and enums -----*/</span></div>\n\
<div class=\"line\">    </div>\n\
<div class=\"line\">    <span class=\"keyword\">enum</span> PlaneId {</div>\n\
<div class=\"line\">        kLeft,</div>\n\
<div class=\"line\">        kRight,</div>\n\
<div class=\"line\">        kBottom,</div>\n\
<div class=\"line\">        kTop,</div>\n\
<div class=\"line\">        kNear,</div>\n\
<div class=\"line\">        kFar,</div>\n\
<div class=\"line\"></div>\n\
<div class=\"line\">        kFirstPlane = kLeft,</div>\n\
<div class=\"line\">        kLastPlane = kFar</div>\n\
<div class=\"line\">    };</div>\n\
<div class=\"line\"></div>\n\
<div class=\"line\">    <span class=\"comment\">/*----- classes -----*/</span></div>\n\
<div class=\"line\">    </div>\n\
<div class=\"line\">    <span class=\"keyword\">class </span>Plane </div>\n\
<div class=\"line\">    {</div>\n\
<div class=\"line\">    <span class=\"keyword\">public</span>:</div>\n\
<div class=\"line\">            </div>\n\
<div class=\"line\">        <span class=\"comment\">// Setup plane given three non-colinear points.</span></div>\n\
<div class=\"line\">        <span class=\"comment\">//</span></div>\n\
<div class=\"line\">        <span class=\"comment\">// We also pass in a vertex that lies on the possitive</span></div>\n\
<div class=\"line\">        <span class=\"comment\">// side of the plane. We can&#39;t rely on the winding</span></div>\n\
<div class=\"line\">        <span class=\"comment\">// ordering of the vertices because the</span></div>\n\
<div class=\"line\">        <span class=\"comment\">// worldViewProjInvMatrix might contain reflections along</span></div>\n\
<div class=\"line\">        <span class=\"comment\">// arbitray axis.</span></div>\n\
<div class=\"line\">        <span class=\"comment\">//</span></div>\n\
<div class=\"line\">        <span class=\"comment\">// Note that we could check the orientation of only half</span></div>\n\
<div class=\"line\">        <span class=\"comment\">// the planes, but it seem simpler to simply check each</span></div>\n\
<div class=\"line\">        <span class=\"comment\">// planes.</span></div>\n\
<div class=\"line\">        <span class=\"keywordtype\">void</span> init(<span class=\"keyword\">const</span> <a class=\"code\" href=\"#!/url=./cpp_ref/class_m_point.html\">MPoint</a>&amp; p0,</div>\n\
<div class=\"line\">                  <span class=\"keyword\">const</span> <a class=\"code\" href=\"#!/url=./cpp_ref/class_m_point.html\">MPoint</a>&amp; p1,</div>\n\
<div class=\"line\">                  <span class=\"keyword\">const</span> <a class=\"code\" href=\"#!/url=./cpp_ref/class_m_point.html\">MPoint</a>&amp; p2,</div>\n\
<div class=\"line\">                  <span class=\"keyword\">const</span> <a class=\"code\" href=\"#!/url=./cpp_ref/class_m_point.html\">MPoint</a>&amp; opp)</div>\n\
<div class=\"line\">        {</div>\n\
<div class=\"line\">            <a name=\"_a5\"></a><a class=\"code\" href=\"#!/url=./cpp_ref/class_m_vector.html\">MVector</a> u = p2 - p1;</div>\n\
<div class=\"line\">            <a class=\"code\" href=\"#!/url=./cpp_ref/class_m_vector.html\">MVector</a> v = p0 - p1;</div>\n\
<div class=\"line\">            <a class=\"code\" href=\"#!/url=./cpp_ref/class_m_vector.html\">MVector</a> n = (u ^ v).normal();</div>\n\
<div class=\"line\">            a = n.<a name=\"a6\"></a><a class=\"code\" href=\"#!/url=./cpp_ref/class_m_vector.html#af88b946fb90d5f08b5fb740c70e98c10\">x</a>;</div>\n\
<div class=\"line\">            b = n.<a name=\"a7\"></a><a class=\"code\" href=\"#!/url=./cpp_ref/class_m_vector.html#ab927965981178aa1fba979a37168db2a\">y</a>;</div>\n\
<div class=\"line\">            c = n.<a name=\"a8\"></a><a class=\"code\" href=\"#!/url=./cpp_ref/class_m_vector.html#ab3e6ed577a7c669c19de1f9c1b46c872\">z</a>;</div>\n\
<div class=\"line\">            d = -(n.<a class=\"code\" href=\"#!/url=./cpp_ref/class_m_vector.html#af88b946fb90d5f08b5fb740c70e98c10\">x</a>*p1.x + n.<a class=\"code\" href=\"#!/url=./cpp_ref/class_m_vector.html#ab927965981178aa1fba979a37168db2a\">y</a>*p1.y + n.<a class=\"code\" href=\"#!/url=./cpp_ref/class_m_vector.html#ab3e6ed577a7c669c19de1f9c1b46c872\">z</a>*p1.z);</div>\n\
<div class=\"line\"></div>\n\
<div class=\"line\">            <span class=\"keywordflow\">if</span> (distance(opp) &lt; 0.0f) {</div>\n\
<div class=\"line\">                a = -a; b = -b; c = -c; d = -d;</div>\n\
<div class=\"line\">            }</div>\n\
<div class=\"line\">        }</div>\n\
<div class=\"line\"></div>\n\
<div class=\"line\">        <span class=\"keywordtype\">double</span> distance(<span class=\"keywordtype\">double</span> x, <span class=\"keywordtype\">double</span> y, <span class=\"keywordtype\">double</span> z)<span class=\"keyword\"> const</span></div>\n\
<div class=\"line\"><span class=\"keyword\">        </span>{</div>\n\
<div class=\"line\">            <span class=\"keywordflow\">return</span> a*x + b*y + c*z + d;</div>\n\
<div class=\"line\">        }</div>\n\
<div class=\"line\">            </div>\n\
<div class=\"line\">        <span class=\"keywordtype\">double</span> distance(<span class=\"keyword\">const</span> <a class=\"code\" href=\"#!/url=./cpp_ref/class_m_point.html\">MPoint</a>&amp; p)<span class=\"keyword\"> const</span></div>\n\
<div class=\"line\"><span class=\"keyword\">        </span>{</div>\n\
<div class=\"line\">            <span class=\"keywordflow\">return</span> distance(p.<a name=\"a9\"></a><a class=\"code\" href=\"#!/url=./cpp_ref/class_m_point.html#af88b946fb90d5f08b5fb740c70e98c10\">x</a>, p.<a name=\"a10\"></a><a class=\"code\" href=\"#!/url=./cpp_ref/class_m_point.html#ab927965981178aa1fba979a37168db2a\">y</a>, p.<a name=\"a11\"></a><a class=\"code\" href=\"#!/url=./cpp_ref/class_m_point.html#ab3e6ed577a7c669c19de1f9c1b46c872\">z</a>);</div>\n\
<div class=\"line\">        }</div>\n\
<div class=\"line\"></div>\n\
<div class=\"line\">        ClippingResult test(<span class=\"keyword\">const</span> <a class=\"code\" href=\"#!/url=./cpp_ref/class_m_point.html\">MPoint</a>&amp; pmin,</div>\n\
<div class=\"line\">                            <span class=\"keyword\">const</span> <a class=\"code\" href=\"#!/url=./cpp_ref/class_m_point.html\">MPoint</a>&amp; pmax)<span class=\"keyword\"> const</span></div>\n\
<div class=\"line\"><span class=\"keyword\">        </span>{</div>\n\
<div class=\"line\">            <span class=\"keyword\">const</span> <span class=\"keywordtype\">bool</span> sa = a &gt; 0.0;</div>\n\
<div class=\"line\">            <span class=\"keyword\">const</span> <span class=\"keywordtype\">bool</span> sb = b &gt; 0.0;</div>\n\
<div class=\"line\">            <span class=\"keyword\">const</span> <span class=\"keywordtype\">bool</span> sc = c &gt; 0.0;</div>\n\
<div class=\"line\"></div>\n\
<div class=\"line\">            <span class=\"comment\">// Test the p-vertex</span></div>\n\
<div class=\"line\">            <span class=\"keywordflow\">if</span> (distance(sa ? pmax.<a class=\"code\" href=\"#!/url=./cpp_ref/class_m_point.html#af88b946fb90d5f08b5fb740c70e98c10\">x</a> : pmin.<a class=\"code\" href=\"#!/url=./cpp_ref/class_m_point.html#af88b946fb90d5f08b5fb740c70e98c10\">x</a>,</div>\n\
<div class=\"line\">                         sb ? pmax.<a class=\"code\" href=\"#!/url=./cpp_ref/class_m_point.html#ab927965981178aa1fba979a37168db2a\">y</a> : pmin.<a class=\"code\" href=\"#!/url=./cpp_ref/class_m_point.html#ab927965981178aa1fba979a37168db2a\">y</a>,</div>\n\
<div class=\"line\">                         sc ? pmax.<a class=\"code\" href=\"#!/url=./cpp_ref/class_m_point.html#ab3e6ed577a7c669c19de1f9c1b46c872\">z</a> : pmin.<a class=\"code\" href=\"#!/url=./cpp_ref/class_m_point.html#ab3e6ed577a7c669c19de1f9c1b46c872\">z</a>) &lt; 0.0)</div>\n\
<div class=\"line\">                <span class=\"keywordflow\">return</span> kOutside;</div>\n\
<div class=\"line\"></div>\n\
<div class=\"line\">            <span class=\"comment\">// Test the n-vertex</span></div>\n\
<div class=\"line\">            <span class=\"keywordflow\">if</span> (distance(sa ? pmin.<a class=\"code\" href=\"#!/url=./cpp_ref/class_m_point.html#af88b946fb90d5f08b5fb740c70e98c10\">x</a> : pmax.<a class=\"code\" href=\"#!/url=./cpp_ref/class_m_point.html#af88b946fb90d5f08b5fb740c70e98c10\">x</a>,</div>\n\
<div class=\"line\">                         sb ? pmin.<a class=\"code\" href=\"#!/url=./cpp_ref/class_m_point.html#ab927965981178aa1fba979a37168db2a\">y</a> : pmax.<a class=\"code\" href=\"#!/url=./cpp_ref/class_m_point.html#ab927965981178aa1fba979a37168db2a\">y</a>,</div>\n\
<div class=\"line\">                         sc ? pmin.<a class=\"code\" href=\"#!/url=./cpp_ref/class_m_point.html#ab3e6ed577a7c669c19de1f9c1b46c872\">z</a> : pmax.<a class=\"code\" href=\"#!/url=./cpp_ref/class_m_point.html#ab3e6ed577a7c669c19de1f9c1b46c872\">z</a>) &gt; 0.0)</div>\n\
<div class=\"line\">                <span class=\"keywordflow\">return</span> kInside;</div>\n\
<div class=\"line\"></div>\n\
<div class=\"line\">            <span class=\"keywordflow\">return</span> kIntersects;</div>\n\
<div class=\"line\">        }</div>\n\
<div class=\"line\"></div>\n\
<div class=\"line\">        <span class=\"keywordtype\">void</span> print(<span class=\"keyword\">const</span> <span class=\"keywordtype\">char</span>* name,</div>\n\
<div class=\"line\">                   <span class=\"keyword\">const</span> <a class=\"code\" href=\"#!/url=./cpp_ref/class_m_point.html\">MPoint</a>&amp; op1,</div>\n\
<div class=\"line\">                   <span class=\"keyword\">const</span> <a class=\"code\" href=\"#!/url=./cpp_ref/class_m_point.html\">MPoint</a>&amp; op2,</div>\n\
<div class=\"line\">                   <span class=\"keyword\">const</span> <a class=\"code\" href=\"#!/url=./cpp_ref/class_m_point.html\">MPoint</a>&amp; op3,</div>\n\
<div class=\"line\">                   <span class=\"keyword\">const</span> <a class=\"code\" href=\"#!/url=./cpp_ref/class_m_point.html\">MPoint</a>&amp; op4);</div>\n\
<div class=\"line\">                    </div>\n\
<div class=\"line\">    <span class=\"keyword\">private</span>:</div>\n\
<div class=\"line\">            </div>\n\
<div class=\"line\">        <span class=\"comment\">// Plane equation a*x + b*y + c*z + d = 0</span></div>\n\
<div class=\"line\">        <span class=\"comment\">// ||a,b,c|| == 1.0</span></div>\n\
<div class=\"line\">        <span class=\"keywordtype\">double</span> a, b, c, d;</div>\n\
<div class=\"line\">    };</div>\n\
<div class=\"line\">    </div>\n\
<div class=\"line\">    <span class=\"comment\">/*----- data members -----*/</span></div>\n\
<div class=\"line\">    </div>\n\
<div class=\"line\">    Plane planes[6];</div>\n\
<div class=\"line\">};</div>\n\
<div class=\"line\"></div>\n\
<div class=\"line\">    </div>\n\
<div class=\"line\">} <span class=\"comment\">// namespace GPUCache</span></div>\n\
<div class=\"line\"></div>\n\
<div class=\"line\"><span class=\"preprocessor\">#endif</span></div>\n\
</div><!-- fragment --> </div><!-- contents -->\n\
</div><!-- doc-content -->\n\
          <div class=\"footer-block\"><a href=\"../html/ac.cmtdialog.htm\" class=\"comments-anchor\" target=\"_blank\"><span class=\"comments-link\">Please send us your comment about this page</span></a></div><br></div>\n\
   </div></body>\n\
</html>\n\
";