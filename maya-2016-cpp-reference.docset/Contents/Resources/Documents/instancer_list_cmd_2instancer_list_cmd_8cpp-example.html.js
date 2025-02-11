var topic = "<!-- saved from url=(0024)http://docs.autodesk.com -->\n\
<html>\n\
   <head><script src=\"../scripts/yepnope.1.5.4-min.js\" type=\"text/javascript\"></script><script src=\"../scripts/lib/jquery-1.11.1.min.js\" type=\"text/javascript\"></script><meta http-equiv=\"Content-Type\" content=\"text/html; charset=UTF-8\"><meta name=\"product\" content=\"MAYAUL\"><meta name=\"release\" content=\"2016\"><meta name=\"book\" content=\"Developer\"><meta name=\"created\" content=\"2015-10-14\"><meta name=\"topicid\" content=\"GUID-02DEF634-1E7B-48C6-8ACD-2C934CA97887\"><meta name=\"topic-type\" content=\"concept\">\n\
      <title>instancerListCmd/instancerListCmd.cpp</title>\n\
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
    cpp_ref_adsk_ref_toc.initNavTree(\'instancer_list_cmd_2instancer_list_cmd_8cpp-example.html\', tocPrefix);\n\
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
            <h1>instancerListCmd/instancerListCmd.cpp</h1>\n\
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
<div class=\"title\">instancerListCmd/instancerListCmd.cpp</div>  </div>\n\
</div><!--header-->\n\
<div class=\"contents\">\n\
<div class=\"fragment\"><div class=\"line\"><span class=\"comment\">//-</span></div>\n\
<div class=\"line\"><span class=\"comment\">// ==========================================================================</span></div>\n\
<div class=\"line\"><span class=\"comment\">// Copyright 1995,2006,2008 Autodesk, Inc. All rights reserved.</span></div>\n\
<div class=\"line\"><span class=\"comment\">//</span></div>\n\
<div class=\"line\"><span class=\"comment\">// Use of this software is subject to the terms of the Autodesk</span></div>\n\
<div class=\"line\"><span class=\"comment\">// license agreement provided at the time of installation or download,</span></div>\n\
<div class=\"line\"><span class=\"comment\">// or which otherwise accompanies this software in either electronic</span></div>\n\
<div class=\"line\"><span class=\"comment\">// or hard copy form.</span></div>\n\
<div class=\"line\"><span class=\"comment\">// ==========================================================================</span></div>\n\
<div class=\"line\"><span class=\"comment\">//+</span></div>\n\
<div class=\"line\"></div>\n\
<div class=\"line\"><span class=\"comment\">// Example Plugin: instancerListCmd.cpp</span></div>\n\
<div class=\"line\"><span class=\"comment\">//</span></div>\n\
<div class=\"line\"><span class=\"comment\">//  This plugin demonstrates how to use the MFnInstancer class and the </span></div>\n\
<div class=\"line\"><span class=\"comment\">//  MItInstancer class to enumerate particle instances in a scene.  If</span></div>\n\
<div class=\"line\"><span class=\"comment\">//  one or more instancer nodes are selected when the command is invoked,</span></div>\n\
<div class=\"line\"><span class=\"comment\">//  MFnInstancer will be used to enumerate each instancer&#39;s instances, with</span></div>\n\
<div class=\"line\"><span class=\"comment\">//  both the instancesForParticle() and allInstances() methods exercised.</span></div>\n\
<div class=\"line\"><span class=\"comment\">//  If no instancers are selected, then MItInstancer is used to iterate through</span></div>\n\
<div class=\"line\"><span class=\"comment\">//  all the particle instances in the scene.</span></div>\n\
<div class=\"line\"><span class=\"comment\">//</span></div>\n\
<div class=\"line\"></div>\n\
<div class=\"line\"><span class=\"preprocessor\">#include &lt;maya/MSimple.h&gt;</span></div>\n\
<div class=\"line\"><span class=\"preprocessor\">#include &lt;maya/MSelectionList.h&gt;</span></div>\n\
<div class=\"line\"><span class=\"preprocessor\">#include &lt;maya/MGlobal.h&gt;</span></div>\n\
<div class=\"line\"><span class=\"preprocessor\">#include &lt;maya/MItSelectionList.h&gt;</span></div>\n\
<div class=\"line\"><span class=\"preprocessor\">#include &lt;maya/MString.h&gt;</span></div>\n\
<div class=\"line\"><span class=\"preprocessor\">#include &lt;maya/MFnInstancer.h&gt;</span></div>\n\
<div class=\"line\"><span class=\"preprocessor\">#include &lt;maya/MItInstancer.h&gt;</span></div>\n\
<div class=\"line\"><span class=\"preprocessor\">#include &lt;maya/MDagPathArray.h&gt;</span></div>\n\
<div class=\"line\"><span class=\"preprocessor\">#include &lt;maya/MPoint.h&gt;</span></div>\n\
<div class=\"line\"><span class=\"preprocessor\">#include &lt;maya/MMatrixArray.h&gt;</span></div>\n\
<div class=\"line\"></div>\n\
<div class=\"line\"><a name=\"a0\"></a><a class=\"code\" href=\"#!/url=./cpp_ref/group___macros.html#gaf3b44fe07495c3792b926494fca7b517\">DeclareSimpleCommand</a>( listParticleInstances, PLUGIN_COMPANY, <span class=\"stringliteral\">&quot;8.0&quot;</span>);</div>\n\
<div class=\"line\"></div>\n\
<div class=\"line\"><span class=\"keywordtype\">void</span> printInstancerUsingFunctionSet( <span class=\"keyword\">const</span> <a name=\"_a1\"></a><a class=\"code\" href=\"#!/url=./cpp_ref/class_m_dag_path.html\">MDagPath</a>&amp; instancerPath )</div>\n\
<div class=\"line\">{</div>\n\
<div class=\"line\">    <span class=\"keywordtype\">char</span> str[256];</div>\n\
<div class=\"line\">    <a name=\"_a2\"></a><a class=\"code\" href=\"#!/url=./cpp_ref/class_m_string.html\">MString</a> pathName = instancerPath.<a name=\"a3\"></a><a class=\"code\" href=\"#!/url=./cpp_ref/class_m_dag_path.html#ac4b316731c4019c927aa63731d4749e8\">fullPathName</a>();</div>\n\
<div class=\"line\">    sprintf( str, <span class=\"stringliteral\">&quot;Instancer %s:&quot;</span>, pathName.<a name=\"a4\"></a><a class=\"code\" href=\"#!/url=./cpp_ref/class_m_string.html#aa9ab612f356c53479afc4c648c9ef94d\">asChar</a>() );</div>\n\
<div class=\"line\">    <a name=\"a5\"></a><a class=\"code\" href=\"#!/url=./cpp_ref/class_m_global.html#a3d14e9f9ed022a80f664eac0136c2f7a\">MGlobal::displayInfo</a>( <a class=\"code\" href=\"#!/url=./cpp_ref/class_m_string.html\">MString</a>(str) );</div>\n\
<div class=\"line\">        </div>\n\
<div class=\"line\">    <a name=\"_a6\"></a><a class=\"code\" href=\"#!/url=./cpp_ref/class_m_fn_instancer.html\">MFnInstancer</a> fnInst( instancerPath );</div>\n\
<div class=\"line\">    <span class=\"keywordtype\">int</span> numParticles = fnInst.particleCount();</div>\n\
<div class=\"line\">    sprintf( str, <span class=\"stringliteral\">&quot;    num particles = %d&quot;</span>, numParticles );</div>\n\
<div class=\"line\">    </div>\n\
<div class=\"line\">    <span class=\"comment\">//</span></div>\n\
<div class=\"line\">    <span class=\"comment\">//  Step 1: Use the MFnInstancer::instancesForParticle() to enumerate</span></div>\n\
<div class=\"line\">    <span class=\"comment\">//          the paths instanced under each particle.  </span></div>\n\
<div class=\"line\">    <span class=\"comment\">//</span></div>\n\
<div class=\"line\">    <a class=\"code\" href=\"#!/url=./cpp_ref/class_m_global.html#a3d14e9f9ed022a80f664eac0136c2f7a\">MGlobal::displayInfo</a>( <span class=\"stringliteral\">&quot;    Using instancesForParticle()....&quot;</span> );</div>\n\
<div class=\"line\">    <a name=\"_a7\"></a><a class=\"code\" href=\"#!/url=./cpp_ref/class_m_matrix.html\">MMatrix</a> instancerWorldMatrix = instancerPath.<a name=\"a8\"></a><a class=\"code\" href=\"#!/url=./cpp_ref/class_m_dag_path.html#a229ff721947ec3ded47b5a071a7311ec\">inclusiveMatrix</a>();</div>\n\
<div class=\"line\">    <span class=\"keywordtype\">int</span> p = 0;</div>\n\
<div class=\"line\">    <span class=\"keywordflow\">for</span>( p = 0; p &lt; numParticles; p++ )</div>\n\
<div class=\"line\">    {</div>\n\
<div class=\"line\">        <a class=\"code\" href=\"#!/url=./cpp_ref/class_m_matrix.html\">MMatrix</a> particleMatrix;</div>\n\
<div class=\"line\">        <a name=\"_a9\"></a><a class=\"code\" href=\"#!/url=./cpp_ref/class_m_dag_path_array.html\">MDagPathArray</a> particlePaths;</div>\n\
<div class=\"line\">        <span class=\"keywordtype\">int</span> numInstances = fnInst.instancesForParticle( p, particlePaths, particleMatrix );</div>\n\
<div class=\"line\"></div>\n\
<div class=\"line\">        <span class=\"comment\">//  iterate over all the instances under this particle</span></div>\n\
<div class=\"line\">        <span class=\"comment\">//      </span></div>\n\
<div class=\"line\">        <span class=\"keywordflow\">for</span>( <span class=\"keywordtype\">int</span> i = 0; i &lt; numInstances; i++ )</div>\n\
<div class=\"line\">        {</div>\n\
<div class=\"line\">            <span class=\"keyword\">const</span> <a class=\"code\" href=\"#!/url=./cpp_ref/class_m_dag_path.html\">MDagPath</a>&amp; instancedPath = particlePaths[i];</div>\n\
<div class=\"line\">            <a class=\"code\" href=\"#!/url=./cpp_ref/class_m_matrix.html\">MMatrix</a> instancedPathMatrix = instancedPath.<a class=\"code\" href=\"#!/url=./cpp_ref/class_m_dag_path.html#a229ff721947ec3ded47b5a071a7311ec\">inclusiveMatrix</a>();</div>\n\
<div class=\"line\"></div>\n\
<div class=\"line\">            <span class=\"comment\">//  the final world position of the instanced shape is determined</span></div>\n\
<div class=\"line\">            <span class=\"comment\">//  by the original path&#39;s matrix combined with the offset matrix</span></div>\n\
<div class=\"line\">            <span class=\"comment\">//  provided by the instancer</span></div>\n\
<div class=\"line\">            <span class=\"comment\">//</span></div>\n\
<div class=\"line\">            <a class=\"code\" href=\"#!/url=./cpp_ref/class_m_matrix.html\">MMatrix</a> finalMatrixForPath = instancedPathMatrix * particleMatrix;</div>\n\
<div class=\"line\">            <a name=\"_a10\"></a><a class=\"code\" href=\"#!/url=./cpp_ref/class_m_point.html\">MPoint</a> finalPoint = <a name=\"a11\"></a><a class=\"code\" href=\"#!/url=./cpp_ref/class_m_point.html#a00b995f41b11d33118a799cfb2bf00ac\">MPoint::origin</a> * finalMatrixForPath;</div>\n\
<div class=\"line\">                </div>\n\
<div class=\"line\">            <a class=\"code\" href=\"#!/url=./cpp_ref/class_m_string.html\">MString</a> instancedPathName = instancedPath.<a class=\"code\" href=\"#!/url=./cpp_ref/class_m_dag_path.html#ac4b316731c4019c927aa63731d4749e8\">fullPathName</a>();</div>\n\
<div class=\"line\">            sprintf( str, <span class=\"stringliteral\">&quot;        Path %-50s at position (%lf,%lf,%lf)&quot;</span>, instancedPathName.<a class=\"code\" href=\"#!/url=./cpp_ref/class_m_string.html#aa9ab612f356c53479afc4c648c9ef94d\">asChar</a>(), finalPoint.<a name=\"a12\"></a><a class=\"code\" href=\"#!/url=./cpp_ref/class_m_point.html#af88b946fb90d5f08b5fb740c70e98c10\">x</a>, finalPoint.<a name=\"a13\"></a><a class=\"code\" href=\"#!/url=./cpp_ref/class_m_point.html#ab927965981178aa1fba979a37168db2a\">y</a>, finalPoint.<a name=\"a14\"></a><a class=\"code\" href=\"#!/url=./cpp_ref/class_m_point.html#ab3e6ed577a7c669c19de1f9c1b46c872\">z</a> );</div>\n\
<div class=\"line\">            <a class=\"code\" href=\"#!/url=./cpp_ref/class_m_global.html#a3d14e9f9ed022a80f664eac0136c2f7a\">MGlobal::displayInfo</a>( str );</div>\n\
<div class=\"line\">        }</div>\n\
<div class=\"line\">    }</div>\n\
<div class=\"line\">    </div>\n\
<div class=\"line\">    <span class=\"comment\">//</span></div>\n\
<div class=\"line\">    <span class=\"comment\">//  Step 2: Use the MFnInstancer::allInstances() method to enumerate all</span></div>\n\
<div class=\"line\">    <span class=\"comment\">//          particle instances generated by this instancer.  The same</span></div>\n\
<div class=\"line\">    <span class=\"comment\">//          information that was extracted one particle at a time in </span></div>\n\
<div class=\"line\">    <span class=\"comment\">//          Step 1 is now retrieved with one function call, and stored in</span></div>\n\
<div class=\"line\">    <span class=\"comment\">//          a set of arrays.</span></div>\n\
<div class=\"line\">    <span class=\"comment\">//</span></div>\n\
<div class=\"line\">    <a class=\"code\" href=\"#!/url=./cpp_ref/class_m_global.html#a3d14e9f9ed022a80f664eac0136c2f7a\">MGlobal::displayInfo</a>( <span class=\"stringliteral\">&quot;    Using allInstances()....&quot;</span> );</div>\n\
<div class=\"line\">    <a class=\"code\" href=\"#!/url=./cpp_ref/class_m_dag_path_array.html\">MDagPathArray</a> allPaths;</div>\n\
<div class=\"line\">    <a name=\"_a15\"></a><a class=\"code\" href=\"#!/url=./cpp_ref/class_m_matrix_array.html\">MMatrixArray</a> allMatrices;</div>\n\
<div class=\"line\">    <a name=\"_a16\"></a><a class=\"code\" href=\"#!/url=./cpp_ref/class_m_int_array.html\">MIntArray</a> pathIndices;</div>\n\
<div class=\"line\">    <a class=\"code\" href=\"#!/url=./cpp_ref/class_m_int_array.html\">MIntArray</a> pathStartIndices;</div>\n\
<div class=\"line\">    </div>\n\
<div class=\"line\">    fnInst.allInstances( allPaths, allMatrices, pathStartIndices, pathIndices );</div>\n\
<div class=\"line\">    <span class=\"keywordflow\">for</span>( p = 0; p &lt; numParticles; p++ )</div>\n\
<div class=\"line\">    {</div>\n\
<div class=\"line\">        <a class=\"code\" href=\"#!/url=./cpp_ref/class_m_matrix.html\">MMatrix</a> particleMatrix = allMatrices[p];</div>\n\
<div class=\"line\"></div>\n\
<div class=\"line\">        <span class=\"comment\">//  the number of paths instanced under a particle is computed by</span></div>\n\
<div class=\"line\">        <span class=\"comment\">//  taking the difference between the starting path index for this</span></div>\n\
<div class=\"line\">        <span class=\"comment\">//  particle and that of the next particle.  The size of the start</span></div>\n\
<div class=\"line\">        <span class=\"comment\">//  index array is always one larger than the number of particles.</span></div>\n\
<div class=\"line\">        <span class=\"comment\">//</span></div>\n\
<div class=\"line\">        <span class=\"keywordtype\">int</span> numPaths = pathStartIndices[p+1]-pathStartIndices[p];</div>\n\
<div class=\"line\">        </div>\n\
<div class=\"line\">        <span class=\"comment\">//  the values pathIndices[pathStart...pathStart+numPaths] give the</span></div>\n\
<div class=\"line\">        <span class=\"comment\">//  indices in the allPaths array of the paths instanced under this</span></div>\n\
<div class=\"line\">        <span class=\"comment\">//  particular particle.  Remember, different paths can be instanced</span></div>\n\
<div class=\"line\">        <span class=\"comment\">//  under each particle.</span></div>\n\
<div class=\"line\">        <span class=\"comment\">//</span></div>\n\
<div class=\"line\">        <span class=\"keywordtype\">int</span> pathStart = pathStartIndices[p];</div>\n\
<div class=\"line\"></div>\n\
<div class=\"line\">        <span class=\"comment\">//  loop through the instanced paths for this particle</span></div>\n\
<div class=\"line\">        <span class=\"comment\">//</span></div>\n\
<div class=\"line\">        <span class=\"keywordflow\">for</span>( <span class=\"keywordtype\">int</span> i = pathStart; i &lt; pathStart+numPaths; i++ )</div>\n\
<div class=\"line\">        {</div>\n\
<div class=\"line\">            <span class=\"keywordtype\">int</span> curPathIndex = pathIndices[i];</div>\n\
<div class=\"line\">            <span class=\"keyword\">const</span> <a class=\"code\" href=\"#!/url=./cpp_ref/class_m_dag_path.html\">MDagPath</a>&amp; curPath = allPaths[curPathIndex];</div>\n\
<div class=\"line\"></div>\n\
<div class=\"line\">            <a class=\"code\" href=\"#!/url=./cpp_ref/class_m_matrix.html\">MMatrix</a> instancedPathMatrix = curPath.<a class=\"code\" href=\"#!/url=./cpp_ref/class_m_dag_path.html#a229ff721947ec3ded47b5a071a7311ec\">inclusiveMatrix</a>();</div>\n\
<div class=\"line\">            <a class=\"code\" href=\"#!/url=./cpp_ref/class_m_matrix.html\">MMatrix</a> finalMatrixForPath = instancedPathMatrix * particleMatrix;</div>\n\
<div class=\"line\">            <a class=\"code\" href=\"#!/url=./cpp_ref/class_m_point.html\">MPoint</a> finalPoint = <a class=\"code\" href=\"#!/url=./cpp_ref/class_m_point.html#a00b995f41b11d33118a799cfb2bf00ac\">MPoint::origin</a> * finalMatrixForPath;</div>\n\
<div class=\"line\">                </div>\n\
<div class=\"line\">            <a class=\"code\" href=\"#!/url=./cpp_ref/class_m_string.html\">MString</a> instancedPathName = curPath.<a class=\"code\" href=\"#!/url=./cpp_ref/class_m_dag_path.html#ac4b316731c4019c927aa63731d4749e8\">fullPathName</a>();</div>\n\
<div class=\"line\">            sprintf( str, <span class=\"stringliteral\">&quot;        Path %-50s at position (%lf,%lf,%lf)&quot;</span>, instancedPathName.<a class=\"code\" href=\"#!/url=./cpp_ref/class_m_string.html#aa9ab612f356c53479afc4c648c9ef94d\">asChar</a>(), finalPoint.<a class=\"code\" href=\"#!/url=./cpp_ref/class_m_point.html#af88b946fb90d5f08b5fb740c70e98c10\">x</a>, finalPoint.<a class=\"code\" href=\"#!/url=./cpp_ref/class_m_point.html#ab927965981178aa1fba979a37168db2a\">y</a>, finalPoint.<a class=\"code\" href=\"#!/url=./cpp_ref/class_m_point.html#ab3e6ed577a7c669c19de1f9c1b46c872\">z</a> );</div>\n\
<div class=\"line\">            <a class=\"code\" href=\"#!/url=./cpp_ref/class_m_global.html#a3d14e9f9ed022a80f664eac0136c2f7a\">MGlobal::displayInfo</a>( str );</div>\n\
<div class=\"line\">        }</div>\n\
<div class=\"line\">    }</div>\n\
<div class=\"line\">}</div>\n\
<div class=\"line\"></div>\n\
<div class=\"line\"><span class=\"keywordtype\">void</span> printAllInstancesUsingIterator()</div>\n\
<div class=\"line\">{</div>\n\
<div class=\"line\">    <span class=\"comment\">//</span></div>\n\
<div class=\"line\">    <span class=\"comment\">//  Just use the MItInstancer iterator to enumerate all particles in </span></div>\n\
<div class=\"line\">    <span class=\"comment\">//  all instancers in the scene.</span></div>\n\
<div class=\"line\">    <span class=\"comment\">//</span></div>\n\
<div class=\"line\">    <a name=\"_a17\"></a><a class=\"code\" href=\"#!/url=./cpp_ref/class_m_it_instancer.html\">MItInstancer</a> it;</div>\n\
<div class=\"line\">    <span class=\"keywordflow\">while</span>( !it.<a name=\"a18\"></a><a class=\"code\" href=\"#!/url=./cpp_ref/class_m_it_instancer.html#add4bf50abae421d88b5549de6c11fc75\">isDone</a>() )</div>\n\
<div class=\"line\">    {</div>\n\
<div class=\"line\">        <a name=\"_a19\"></a><a class=\"code\" href=\"#!/url=./cpp_ref/class_m_object.html\">MObject</a> instancerNode = it.<a name=\"a20\"></a><a class=\"code\" href=\"#!/url=./cpp_ref/class_m_it_instancer.html#add15a5ab3ad480108b311d3f27441c3f\">instancer</a>();</div>\n\
<div class=\"line\">        <a class=\"code\" href=\"#!/url=./cpp_ref/class_m_dag_path.html\">MDagPath</a> instancerPath = it.<a name=\"a21\"></a><a class=\"code\" href=\"#!/url=./cpp_ref/class_m_it_instancer.html#a2d28ad07fc4ef75ac9eb709f3a650ccc\">instancerPath</a>();</div>\n\
<div class=\"line\">        <a class=\"code\" href=\"#!/url=./cpp_ref/class_m_dag_path.html\">MDagPath</a> instancePath = it.<a name=\"a22\"></a><a class=\"code\" href=\"#!/url=./cpp_ref/class_m_it_instancer.html#affb767774efcdb59a2f2254be91963cf\">path</a>();</div>\n\
<div class=\"line\">        <a class=\"code\" href=\"#!/url=./cpp_ref/class_m_matrix.html\">MMatrix</a> instanceMatrix = it.<a name=\"a23\"></a><a class=\"code\" href=\"#!/url=./cpp_ref/class_m_it_instancer.html#a7dd645fc997712befd36b50a24bee5b3\">matrix</a>();</div>\n\
<div class=\"line\"></div>\n\
<div class=\"line\">        <a class=\"code\" href=\"#!/url=./cpp_ref/class_m_string.html\">MString</a> instancerNodeName = <a name=\"_a24\"></a><a class=\"code\" href=\"#!/url=./cpp_ref/class_m_fn_dependency_node.html\">MFnDependencyNode</a>(instancerNode).<a name=\"a25\"></a><a class=\"code\" href=\"#!/url=./cpp_ref/class_m_fn_dependency_node.html#a049384adbea0396ea2f03d1ad4d69df1\">name</a>();</div>\n\
<div class=\"line\">        <a class=\"code\" href=\"#!/url=./cpp_ref/class_m_string.html\">MString</a> instancerPathName = instancerPath.<a class=\"code\" href=\"#!/url=./cpp_ref/class_m_dag_path.html#ac4b316731c4019c927aa63731d4749e8\">fullPathName</a>();</div>\n\
<div class=\"line\">        <a class=\"code\" href=\"#!/url=./cpp_ref/class_m_string.html\">MString</a> instancePathName = instancePath.<a class=\"code\" href=\"#!/url=./cpp_ref/class_m_dag_path.html#ac4b316731c4019c927aa63731d4749e8\">fullPathName</a>();</div>\n\
<div class=\"line\">        </div>\n\
<div class=\"line\">        <a class=\"code\" href=\"#!/url=./cpp_ref/class_m_matrix.html\">MMatrix</a> pathMatrix = instancePath.<a class=\"code\" href=\"#!/url=./cpp_ref/class_m_dag_path.html#a229ff721947ec3ded47b5a071a7311ec\">inclusiveMatrix</a>();</div>\n\
<div class=\"line\">        <a class=\"code\" href=\"#!/url=./cpp_ref/class_m_matrix.html\">MMatrix</a> finalMatrixForPath = pathMatrix * instanceMatrix;</div>\n\
<div class=\"line\">        <a class=\"code\" href=\"#!/url=./cpp_ref/class_m_point.html\">MPoint</a> pos = <a class=\"code\" href=\"#!/url=./cpp_ref/class_m_point.html#a00b995f41b11d33118a799cfb2bf00ac\">MPoint::origin</a> * finalMatrixForPath;</div>\n\
<div class=\"line\"></div>\n\
<div class=\"line\">        <span class=\"keywordtype\">char</span> str[512];</div>\n\
<div class=\"line\">        sprintf( str, <span class=\"stringliteral\">&quot;Instancer node %s, instancer path %s, instancing path %s at position (%lf,%lf,%lf)&quot;</span>,</div>\n\
<div class=\"line\">                instancerNodeName.<a class=\"code\" href=\"#!/url=./cpp_ref/class_m_string.html#aa9ab612f356c53479afc4c648c9ef94d\">asChar</a>(), instancerPathName.<a class=\"code\" href=\"#!/url=./cpp_ref/class_m_string.html#aa9ab612f356c53479afc4c648c9ef94d\">asChar</a>(), instancePathName.<a class=\"code\" href=\"#!/url=./cpp_ref/class_m_string.html#aa9ab612f356c53479afc4c648c9ef94d\">asChar</a>(), pos.<a class=\"code\" href=\"#!/url=./cpp_ref/class_m_point.html#af88b946fb90d5f08b5fb740c70e98c10\">x</a>, pos.<a class=\"code\" href=\"#!/url=./cpp_ref/class_m_point.html#ab927965981178aa1fba979a37168db2a\">y</a>, pos.<a class=\"code\" href=\"#!/url=./cpp_ref/class_m_point.html#ab3e6ed577a7c669c19de1f9c1b46c872\">z</a> );</div>\n\
<div class=\"line\">        <a class=\"code\" href=\"#!/url=./cpp_ref/class_m_global.html#a3d14e9f9ed022a80f664eac0136c2f7a\">MGlobal::displayInfo</a>( <a class=\"code\" href=\"#!/url=./cpp_ref/class_m_string.html\">MString</a>(str) );</div>\n\
<div class=\"line\">        it.<a name=\"a26\"></a><a class=\"code\" href=\"#!/url=./cpp_ref/class_m_it_instancer.html#a73616f002814b8abe6d921db72d7a496\">next</a>();</div>\n\
<div class=\"line\">    }</div>\n\
<div class=\"line\">}</div>\n\
<div class=\"line\"></div>\n\
<div class=\"line\"><a name=\"_a27\"></a><a class=\"code\" href=\"#!/url=./cpp_ref/class_m_status.html\">MStatus</a> listParticleInstances::doIt( <span class=\"keyword\">const</span> <a name=\"_a28\"></a><a class=\"code\" href=\"#!/url=./cpp_ref/class_m_arg_list.html\">MArgList</a>&amp; )</div>\n\
<div class=\"line\">{</div>\n\
<div class=\"line\">    <a name=\"_a29\"></a><a class=\"code\" href=\"#!/url=./cpp_ref/class_m_selection_list.html\">MSelectionList</a> curSel;</div>\n\
<div class=\"line\">    <a name=\"a30\"></a><a class=\"code\" href=\"#!/url=./cpp_ref/class_m_global.html#a6d81d38246555884897fb153c93aaf42\">MGlobal::getActiveSelectionList</a>( curSel );</div>\n\
<div class=\"line\">        </div>\n\
<div class=\"line\">    <a name=\"_a31\"></a><a class=\"code\" href=\"#!/url=./cpp_ref/class_m_it_selection_list.html\">MItSelectionList</a> it( curSel, <a name=\"a32\"></a><a class=\"code\" href=\"#!/url=./cpp_ref/class_m_fn.html#a1d1cfd8ffb84e947f82999c682b666a7a93dcbcdaa9bb8b6da5aa195a30712b36\">MFn::kInstancer</a> ); </div>\n\
<div class=\"line\">        </div>\n\
<div class=\"line\">    <span class=\"keywordflow\">if</span>( it.<a class=\"code\" href=\"#!/url=./cpp_ref/class_m_it_instancer.html#add4bf50abae421d88b5549de6c11fc75\">isDone</a>() )</div>\n\
<div class=\"line\">    {</div>\n\
<div class=\"line\">        <span class=\"comment\">//  use MItInstancer to enumerate all particle instances </span></div>\n\
<div class=\"line\">        <span class=\"comment\">//</span></div>\n\
<div class=\"line\">        <a class=\"code\" href=\"#!/url=./cpp_ref/class_m_global.html#a3d14e9f9ed022a80f664eac0136c2f7a\">MGlobal::displayInfo</a>( <span class=\"stringliteral\">&quot;Using iterator to enumerate all particle instances...&quot;</span> );</div>\n\
<div class=\"line\">        printAllInstancesUsingIterator();</div>\n\
<div class=\"line\">    }</div>\n\
<div class=\"line\">    <span class=\"keywordflow\">else</span></div>\n\
<div class=\"line\">    {</div>\n\
<div class=\"line\">        <span class=\"comment\">//  use MFnInstancer to list instances</span></div>\n\
<div class=\"line\">        <span class=\"comment\">//</span></div>\n\
<div class=\"line\">        <span class=\"keywordflow\">while</span>( !it.<a class=\"code\" href=\"#!/url=./cpp_ref/class_m_it_instancer.html#add4bf50abae421d88b5549de6c11fc75\">isDone</a>() )</div>\n\
<div class=\"line\">        {</div>\n\
<div class=\"line\">            <a class=\"code\" href=\"#!/url=./cpp_ref/class_m_dag_path.html\">MDagPath</a> instancerPath;</div>\n\
<div class=\"line\">            <span class=\"keywordflow\">if</span>( it.getDagPath( instancerPath ) == <a name=\"a33\"></a><a class=\"code\" href=\"#!/url=./cpp_ref/class_m_status.html#a02ab596f4febca68da503aaf8dde3a80af0536797208144380691e2b376ffc1d1\">MS::kSuccess</a> )</div>\n\
<div class=\"line\">            {</div>\n\
<div class=\"line\">                printInstancerUsingFunctionSet( instancerPath );</div>\n\
<div class=\"line\">            }</div>\n\
<div class=\"line\">            <span class=\"keywordflow\">else</span></div>\n\
<div class=\"line\">            {</div>\n\
<div class=\"line\">                <a name=\"a34\"></a><a class=\"code\" href=\"#!/url=./cpp_ref/class_m_global.html#a4ddbe97e58a90e1ab05d45a62c006cf0\">MGlobal::displayError</a>( <span class=\"stringliteral\">&quot;Error retrieving instancer&quot;</span> );</div>\n\
<div class=\"line\">                <span class=\"keywordflow\">return</span> <a name=\"a35\"></a><a class=\"code\" href=\"#!/url=./cpp_ref/class_m_status.html#a02ab596f4febca68da503aaf8dde3a80a1ef6c2d725fb4bec3e7e840d28adbc00\">MS::kFailure</a>;</div>\n\
<div class=\"line\">            }</div>\n\
<div class=\"line\">            it.<a class=\"code\" href=\"#!/url=./cpp_ref/class_m_it_instancer.html#a73616f002814b8abe6d921db72d7a496\">next</a>();</div>\n\
<div class=\"line\">        }</div>\n\
<div class=\"line\">    }</div>\n\
<div class=\"line\">    <span class=\"keywordflow\">return</span> <a class=\"code\" href=\"#!/url=./cpp_ref/class_m_status.html#a02ab596f4febca68da503aaf8dde3a80af0536797208144380691e2b376ffc1d1\">MS::kSuccess</a>;</div>\n\
<div class=\"line\">}</div>\n\
<div class=\"line\">    </div>\n\
<div class=\"line\">    </div>\n\
</div><!-- fragment --> </div><!-- contents -->\n\
</div><!-- doc-content -->\n\
          <div class=\"footer-block\"><a href=\"../html/ac.cmtdialog.htm\" class=\"comments-anchor\" target=\"_blank\"><span class=\"comments-link\">Please send us your comment about this page</span></a></div><br></div>\n\
   </div></body>\n\
</html>\n\
";