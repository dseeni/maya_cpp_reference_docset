var topic = "<!-- saved from url=(0024)http://docs.autodesk.com -->\n\
<html>\n\
   <head><script src=\"../scripts/yepnope.1.5.4-min.js\" type=\"text/javascript\"></script><script src=\"../scripts/lib/jquery-1.11.1.min.js\" type=\"text/javascript\"></script><meta http-equiv=\"Content-Type\" content=\"text/html; charset=UTF-8\"><meta name=\"product\" content=\"MAYAUL\"><meta name=\"release\" content=\"2017\"><meta name=\"book\" content=\"Developer\"><meta name=\"created\" content=\"2016-06-16\"><meta name=\"topicid\" content=\"GUID-02DEF634-1E7B-48C6-8ACD-2C934CA97887\"><meta name=\"topic-type\" content=\"concept\">\n\
      <title>hwDecalBumpShader_NV20/ShadingConnection.cpp</title>\n\
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
    cpp_ref_adsk_ref_toc.initNavTree(\'hw_decal_bump_shader__n_v20_2_shading_connection_8cpp-example.html\', tocPrefix);\n\
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
            <h1>hwDecalBumpShader_NV20/ShadingConnection.cpp</h1>\n\
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
<div class=\"title\">hwDecalBumpShader_NV20/ShadingConnection.cpp</div>  </div>\n\
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
<div class=\"line\"><span class=\"comment\">// ShadingConnection.cpp</span></div>\n\
<div class=\"line\"></div>\n\
<div class=\"line\"><span class=\"comment\">// DESCRIPTION:  This class stores useful information about</span></div>\n\
<div class=\"line\"><span class=\"comment\">//               a shader&#39;s attribute, including what&#39;s connected upstream of it.</span></div>\n\
<div class=\"line\"><span class=\"comment\">//               It also automatically passes through shader switches.</span></div>\n\
<div class=\"line\"><span class=\"comment\">//</span></div>\n\
<div class=\"line\"><span class=\"comment\">// AUTHOR: Christian Laforte</span></div>\n\
<div class=\"line\"><span class=\"comment\">//</span></div>\n\
<div class=\"line\"><span class=\"comment\"></span></div>\n\
<div class=\"line\"><span class=\"preprocessor\">#include &lt;maya/MObject.h&gt;</span></div>\n\
<div class=\"line\"><span class=\"preprocessor\">#include &lt;maya/MColor.h&gt;</span></div>\n\
<div class=\"line\"><span class=\"preprocessor\">#include &lt;maya/MString.h&gt;</span></div>\n\
<div class=\"line\"><span class=\"preprocessor\">#include &lt;maya/MStringArray.h&gt;</span></div>\n\
<div class=\"line\"><span class=\"preprocessor\">#include &lt;maya/MFnDependencyNode.h&gt;</span></div>\n\
<div class=\"line\"><span class=\"preprocessor\">#include &lt;maya/MPlug.h&gt;</span></div>\n\
<div class=\"line\"><span class=\"preprocessor\">#include &lt;maya/MPlugArray.h&gt;</span></div>\n\
<div class=\"line\"></div>\n\
<div class=\"line\"><span class=\"preprocessor\">#include &lt;assert.h&gt;</span></div>\n\
<div class=\"line\"></div>\n\
<div class=\"line\"></div>\n\
<div class=\"line\"><span class=\"preprocessor\">#include &quot;ShadingConnection.h&quot;</span></div>\n\
<div class=\"line\"></div>\n\
<div class=\"line\">ShadingConnection::ShadingConnection(<a name=\"_a0\"></a><a class=\"code\" href=\"#!/url=./cpp_ref/class_m_object.html\">MObject</a> shaderObj, <a name=\"_a1\"></a><a class=\"code\" href=\"#!/url=./cpp_ref/class_m_string.html\">MString</a> shapeName, <a class=\"code\" href=\"#!/url=./cpp_ref/class_m_string.html\">MString</a> attribute <span class=\"comment\">/* = &quot;&quot; */</span>)</div>\n\
<div class=\"line\">{</div>\n\
<div class=\"line\">    <span class=\"comment\">// Store those input values for later use.</span></div>\n\
<div class=\"line\">    this-&gt;m_shaderObj = shaderObj;</div>\n\
<div class=\"line\">    this-&gt;m_shapeName = shapeName;</div>\n\
<div class=\"line\"></div>\n\
<div class=\"line\">    <span class=\"comment\">// By default, the connection is direct until proven otherwise.</span></div>\n\
<div class=\"line\">    this-&gt;m_directConnection = <span class=\"keyword\">true</span>;</div>\n\
<div class=\"line\"></div>\n\
<div class=\"line\">    <span class=\"keywordflow\">if</span> (attribute != <span class=\"stringliteral\">&quot;&quot;</span>)</div>\n\
<div class=\"line\">        traverseAttribute(attribute);</div>\n\
<div class=\"line\">}</div>\n\
<div class=\"line\"></div>\n\
<div class=\"line\">ShadingConnection::TYPE ShadingConnection::traverseAttribute(<a class=\"code\" href=\"#!/url=./cpp_ref/class_m_string.html\">MString</a> attributeName)</div>\n\
<div class=\"line\">{</div>\n\
<div class=\"line\">    <span class=\"comment\">// Get a plug to the attribute.</span></div>\n\
<div class=\"line\">    <a name=\"_a2\"></a><a class=\"code\" href=\"#!/url=./cpp_ref/class_m_status.html\">MStatus</a> status;</div>\n\
<div class=\"line\">    <a name=\"_a3\"></a><a class=\"code\" href=\"#!/url=./cpp_ref/class_m_fn_dependency_node.html\">MFnDependencyNode</a> shaderNode(m_shaderObj);</div>\n\
<div class=\"line\"></div>\n\
<div class=\"line\">    <a name=\"_a4\"></a><a class=\"code\" href=\"#!/url=./cpp_ref/class_m_plug.html\">MPlug</a> plug = shaderNode.findPlug( attributeName, &amp;status );</div>\n\
<div class=\"line\">    assert(status);</div>\n\
<div class=\"line\"></div>\n\
<div class=\"line\">    this-&gt;m_attributeName = attributeName;</div>\n\
<div class=\"line\"></div>\n\
<div class=\"line\">    <span class=\"keywordflow\">return</span> analyzePlug(plug);</div>\n\
<div class=\"line\">}</div>\n\
<div class=\"line\">    </div>\n\
<div class=\"line\">ShadingConnection::TYPE ShadingConnection::analyzePlug(<a class=\"code\" href=\"#!/url=./cpp_ref/class_m_plug.html\">MPlug</a> plug)</div>\n\
<div class=\"line\">{</div>\n\
<div class=\"line\">    <a class=\"code\" href=\"#!/url=./cpp_ref/class_m_status.html\">MStatus</a> status;</div>\n\
<div class=\"line\"></div>\n\
<div class=\"line\">    <span class=\"comment\">// Find all incoming connections.</span></div>\n\
<div class=\"line\">    <a name=\"_a5\"></a><a class=\"code\" href=\"#!/url=./cpp_ref/class_m_plug_array.html\">MPlugArray</a> connectedElements;</div>\n\
<div class=\"line\">    plug.<a name=\"a6\"></a><a class=\"code\" href=\"#!/url=./cpp_ref/class_m_plug.html#a3727c18c58fc5ba8be5fb2582b5d06f1\">connectedTo</a>( connectedElements, <span class=\"keyword\">true</span>, <span class=\"keyword\">false</span>, &amp;status );</div>\n\
<div class=\"line\">    assert(status);</div>\n\
<div class=\"line\">    </div>\n\
<div class=\"line\">    <span class=\"keywordflow\">if</span> (connectedElements.<a name=\"a7\"></a><a class=\"code\" href=\"#!/url=./cpp_ref/class_m_plug_array.html#a580388f31f60c46fac867ca48a48da1e\">length</a>() == 0)</div>\n\
<div class=\"line\">    {</div>\n\
<div class=\"line\">        <span class=\"comment\">// It&#39;s a constant color... set it now and return.</span></div>\n\
<div class=\"line\">        <span class=\"keywordtype\">unsigned</span> <span class=\"keywordtype\">int</span> numChildren = plug.<a name=\"a8\"></a><a class=\"code\" href=\"#!/url=./cpp_ref/class_m_plug.html#a0a27cb351cc1a05aa82d4329d7f99bd1\">numChildren</a>();</div>\n\
<div class=\"line\">        assert(numChildren == 3);</div>\n\
<div class=\"line\"></div>\n\
<div class=\"line\">        <span class=\"keywordtype\">float</span> red, green, blue;</div>\n\
<div class=\"line\">        plug.<a name=\"a9\"></a><a class=\"code\" href=\"#!/url=./cpp_ref/class_m_plug.html#ae9e2ba9ea7be1790e7e13fd2c49bd143\">child</a>(0).<a name=\"a10\"></a><a class=\"code\" href=\"#!/url=./cpp_ref/class_m_plug.html#a64f7093bfde5c5eb9d89b32635b772aa\">getValue</a>(red);</div>\n\
<div class=\"line\">        plug.<a class=\"code\" href=\"#!/url=./cpp_ref/class_m_plug.html#ae9e2ba9ea7be1790e7e13fd2c49bd143\">child</a>(1).<a class=\"code\" href=\"#!/url=./cpp_ref/class_m_plug.html#a64f7093bfde5c5eb9d89b32635b772aa\">getValue</a>(green);</div>\n\
<div class=\"line\">        plug.<a class=\"code\" href=\"#!/url=./cpp_ref/class_m_plug.html#ae9e2ba9ea7be1790e7e13fd2c49bd143\">child</a>(2).<a class=\"code\" href=\"#!/url=./cpp_ref/class_m_plug.html#a64f7093bfde5c5eb9d89b32635b772aa\">getValue</a>(blue);</div>\n\
<div class=\"line\"></div>\n\
<div class=\"line\">        <span class=\"keywordflow\">return</span> setConstantColor(<a name=\"_a11\"></a><a class=\"code\" href=\"#!/url=./cpp_ref/class_m_color.html\">MColor</a>(red, green, blue, 1.0));</div>\n\
<div class=\"line\">    }</div>\n\
<div class=\"line\">    </div>\n\
<div class=\"line\">    <span class=\"comment\">// The plug is actually connected on a different shading node.</span></div>\n\
<div class=\"line\">    <a class=\"code\" href=\"#!/url=./cpp_ref/class_m_object.html\">MObject</a> connectedObject = connectedElements[0].node(&amp;status);</div>\n\
<div class=\"line\">    assert(status);</div>\n\
<div class=\"line\"></div>\n\
<div class=\"line\">    <span class=\"comment\">// If this is a triple shading switch, go through it.</span></div>\n\
<div class=\"line\">    <span class=\"keywordflow\">if</span> (connectedObject.<a name=\"a12\"></a><a class=\"code\" href=\"#!/url=./cpp_ref/class_m_object.html#af0af77f14f96d1134fb8e8e60dc7e420\">hasFn</a>(<a name=\"a13\"></a><a class=\"code\" href=\"#!/url=./cpp_ref/class_m_fn.html#a1d1cfd8ffb84e947f82999c682b666a7af4feda59f088b9fdba6ea42bea02dd6d\">MFn::kTripleShadingSwitch</a>))</div>\n\
<div class=\"line\">    {</div>\n\
<div class=\"line\">        <span class=\"keywordflow\">return</span> traverseTripleShadingSwitch(connectedObject);</div>\n\
<div class=\"line\">    }</div>\n\
<div class=\"line\"></div>\n\
<div class=\"line\">    <span class=\"comment\">// Set the object and return the appropriate type.</span></div>\n\
<div class=\"line\">    <span class=\"keywordflow\">return</span> setTexture(connectedObject);</div>\n\
<div class=\"line\">}</div>\n\
<div class=\"line\"></div>\n\
<div class=\"line\">ShadingConnection::TYPE ShadingConnection::traverseTripleShadingSwitch(<a class=\"code\" href=\"#!/url=./cpp_ref/class_m_object.html\">MObject</a> connectedObject)</div>\n\
<div class=\"line\">{           </div>\n\
<div class=\"line\">    <span class=\"comment\">// The connection cannot be direct anymore.</span></div>\n\
<div class=\"line\">    m_directConnection = <span class=\"keyword\">false</span>;</div>\n\
<div class=\"line\">    </div>\n\
<div class=\"line\">    <a class=\"code\" href=\"#!/url=./cpp_ref/class_m_fn_dependency_node.html\">MFnDependencyNode</a> node(connectedObject);</div>\n\
<div class=\"line\"></div>\n\
<div class=\"line\">    <a class=\"code\" href=\"#!/url=./cpp_ref/class_m_status.html\">MStatus</a> status;</div>\n\
<div class=\"line\">    <a class=\"code\" href=\"#!/url=./cpp_ref/class_m_plug.html\">MPlug</a> inputPlug = node.findPlug( <span class=\"stringliteral\">&quot;input&quot;</span> );</div>\n\
<div class=\"line\">    </div>\n\
<div class=\"line\">    <span class=\"keywordtype\">unsigned</span> <span class=\"keywordtype\">int</span> numElements = inputPlug.<a name=\"a14\"></a><a class=\"code\" href=\"#!/url=./cpp_ref/class_m_plug.html#a12c4005d04ff520718c343dd894b2efd\">numElements</a>();</div>\n\
<div class=\"line\">    <span class=\"keywordtype\">unsigned</span> <span class=\"keywordtype\">int</span> numChildren = inputPlug.<a class=\"code\" href=\"#!/url=./cpp_ref/class_m_plug.html#a0a27cb351cc1a05aa82d4329d7f99bd1\">numChildren</a>();</div>\n\
<div class=\"line\">    </div>\n\
<div class=\"line\">    <span class=\"comment\">// It is assumed that the first child of this input compound attribute is</span></div>\n\
<div class=\"line\">    <span class=\"comment\">// a &quot;inTexture&quot; attribute and the the second child is the inShape attribute.</span></div>\n\
<div class=\"line\">    <span class=\"comment\">// This assumption should always be safe, unless some drastic changes occured in the</span></div>\n\
<div class=\"line\">    <span class=\"comment\">// implementation of the shading switches... in which case this code won&#39;t work, so</span></div>\n\
<div class=\"line\">    <span class=\"comment\">// we would throw an exception.</span></div>\n\
<div class=\"line\">    assert( numChildren &gt;= 2); <span class=\"comment\">// &quot;Abnormal hierarchy in switching node.&quot;</span></div>\n\
<div class=\"line\">    </div>\n\
<div class=\"line\">    <span class=\"comment\">// Go through each row of the switch table.</span></div>\n\
<div class=\"line\">    <span class=\"keywordflow\">for</span> (<span class=\"keywordtype\">unsigned</span> <span class=\"keywordtype\">int</span> index = 0; index &lt; numElements; index++)</div>\n\
<div class=\"line\">    {</div>\n\
<div class=\"line\">        <a class=\"code\" href=\"#!/url=./cpp_ref/class_m_plug.html\">MPlug</a> inTexturePlug = inputPlug.<a name=\"a15\"></a><a class=\"code\" href=\"#!/url=./cpp_ref/class_m_plug.html#aa79cd2ef3e019dbb57cfe28019932b46\">elementByPhysicalIndex</a>(index).<a class=\"code\" href=\"#!/url=./cpp_ref/class_m_plug.html#ae9e2ba9ea7be1790e7e13fd2c49bd143\">child</a>(0);</div>\n\
<div class=\"line\">        <a class=\"code\" href=\"#!/url=./cpp_ref/class_m_plug.html\">MPlug</a> inShapePlug = inputPlug.<a class=\"code\" href=\"#!/url=./cpp_ref/class_m_plug.html#aa79cd2ef3e019dbb57cfe28019932b46\">elementByPhysicalIndex</a>(index).<a class=\"code\" href=\"#!/url=./cpp_ref/class_m_plug.html#ae9e2ba9ea7be1790e7e13fd2c49bd143\">child</a>(1);               </div>\n\
<div class=\"line\"></div>\n\
<div class=\"line\">        <a class=\"code\" href=\"#!/url=./cpp_ref/class_m_plug_array.html\">MPlugArray</a> inShapeConnections;</div>\n\
<div class=\"line\">        inShapePlug.<a class=\"code\" href=\"#!/url=./cpp_ref/class_m_plug.html#a3727c18c58fc5ba8be5fb2582b5d06f1\">connectedTo</a>( inShapeConnections, <span class=\"keyword\">true</span>, <span class=\"keyword\">false</span>, &amp;status );</div>\n\
<div class=\"line\">        </div>\n\
<div class=\"line\">        <span class=\"comment\">// Check if one of the corresponding shapes matches the given shape name.</span></div>\n\
<div class=\"line\">        <span class=\"keywordtype\">unsigned</span> <span class=\"keywordtype\">int</span> numCorrespondingShapes = inShapeConnections.<a class=\"code\" href=\"#!/url=./cpp_ref/class_m_plug_array.html#a580388f31f60c46fac867ca48a48da1e\">length</a>();</div>\n\
<div class=\"line\">        <span class=\"keywordflow\">for</span> (<span class=\"keywordtype\">unsigned</span> <span class=\"keywordtype\">int</span> shapeNum = 0; shapeNum &lt; numCorrespondingShapes; shapeNum++)</div>\n\
<div class=\"line\">        {</div>\n\
<div class=\"line\">            <a class=\"code\" href=\"#!/url=./cpp_ref/class_m_object.html\">MObject</a> inShapeObj = inShapeConnections[0].node(&amp;status);</div>\n\
<div class=\"line\">            assert(status);</div>\n\
<div class=\"line\">            </div>\n\
<div class=\"line\">            <a class=\"code\" href=\"#!/url=./cpp_ref/class_m_fn_dependency_node.html\">MFnDependencyNode</a> inShape(inShapeObj);</div>\n\
<div class=\"line\">            <a class=\"code\" href=\"#!/url=./cpp_ref/class_m_string.html\">MString</a> inShapeName = inShape.name();</div>\n\
<div class=\"line\"></div>\n\
<div class=\"line\">            <span class=\"keywordflow\">if</span> (inShapeName == m_shapeName)</div>\n\
<div class=\"line\">                <span class=\"keywordflow\">return</span> analyzePlug(inTexturePlug);</div>\n\
<div class=\"line\">        }</div>\n\
<div class=\"line\">    }</div>\n\
<div class=\"line\"></div>\n\
<div class=\"line\">    <span class=\"comment\">// If there was no special case in the switch for our shape, check the default.</span></div>\n\
<div class=\"line\">    <a class=\"code\" href=\"#!/url=./cpp_ref/class_m_plug.html\">MPlug</a> defaultPlug = node.findPlug(<span class=\"stringliteral\">&quot;default&quot;</span>);</div>\n\
<div class=\"line\">    <span class=\"keywordflow\">return</span> analyzePlug(defaultPlug);</div>\n\
<div class=\"line\">}</div>\n\
<div class=\"line\"></div>\n\
<div class=\"line\">ShadingConnection::TYPE ShadingConnection::type()</div>\n\
<div class=\"line\">{</div>\n\
<div class=\"line\">    <span class=\"keywordflow\">return</span> m_type;</div>\n\
<div class=\"line\">}</div>\n\
<div class=\"line\"></div>\n\
<div class=\"line\"><a class=\"code\" href=\"#!/url=./cpp_ref/class_m_color.html\">MColor</a> ShadingConnection::constantColor()</div>\n\
<div class=\"line\">{</div>\n\
<div class=\"line\">    assert(m_type == CONSTANT_COLOR);</div>\n\
<div class=\"line\">    <span class=\"keywordflow\">return</span> m_constantColor;</div>\n\
<div class=\"line\">}</div>\n\
<div class=\"line\"></div>\n\
<div class=\"line\"><a class=\"code\" href=\"#!/url=./cpp_ref/class_m_object.html\">MObject</a> ShadingConnection::texture()</div>\n\
<div class=\"line\">{</div>\n\
<div class=\"line\">    assert(m_type == TEXTURE);</div>\n\
<div class=\"line\">    <span class=\"keywordflow\">return</span> m_texture;</div>\n\
<div class=\"line\">}</div>\n\
<div class=\"line\"></div>\n\
<div class=\"line\"><a class=\"code\" href=\"#!/url=./cpp_ref/class_m_object.html\">MObject</a> ShadingConnection::shaderObj()</div>\n\
<div class=\"line\">{</div>\n\
<div class=\"line\">    <span class=\"keywordflow\">return</span> m_shaderObj;</div>\n\
<div class=\"line\">}</div>\n\
<div class=\"line\"></div>\n\
<div class=\"line\"><a class=\"code\" href=\"#!/url=./cpp_ref/class_m_string.html\">MString</a> ShadingConnection::shaderName()</div>\n\
<div class=\"line\">{</div>\n\
<div class=\"line\">    <a class=\"code\" href=\"#!/url=./cpp_ref/class_m_status.html\">MStatus</a> stat;</div>\n\
<div class=\"line\">    <a class=\"code\" href=\"#!/url=./cpp_ref/class_m_fn_dependency_node.html\">MFnDependencyNode</a> shaderNode(m_shaderObj, &amp;stat);</div>\n\
<div class=\"line\">    assert(stat);</div>\n\
<div class=\"line\">    <span class=\"keywordflow\">return</span> shaderNode.name();</div>\n\
<div class=\"line\">}</div>\n\
<div class=\"line\"></div>\n\
<div class=\"line\"><a class=\"code\" href=\"#!/url=./cpp_ref/class_m_string.html\">MString</a> ShadingConnection::attributeName()</div>\n\
<div class=\"line\">{</div>\n\
<div class=\"line\">    <span class=\"keywordflow\">return</span> m_attributeName;</div>\n\
<div class=\"line\">}</div>\n\
<div class=\"line\"></div>\n\
<div class=\"line\"><a class=\"code\" href=\"#!/url=./cpp_ref/class_m_string.html\">MString</a> ShadingConnection::shapeName()</div>\n\
<div class=\"line\">{</div>\n\
<div class=\"line\">    <span class=\"keywordflow\">return</span> m_shapeName;</div>\n\
<div class=\"line\">}</div>\n\
<div class=\"line\"></div>\n\
<div class=\"line\">ShadingConnection::TYPE ShadingConnection::setConstantColor(<a class=\"code\" href=\"#!/url=./cpp_ref/class_m_color.html\">MColor</a> col)</div>\n\
<div class=\"line\">{</div>\n\
<div class=\"line\">    m_constantColor = col;</div>\n\
<div class=\"line\">    m_type = CONSTANT_COLOR;</div>\n\
<div class=\"line\"></div>\n\
<div class=\"line\">    <span class=\"comment\">// Reset m_texture to prevent misinterpretation.</span></div>\n\
<div class=\"line\">    m_texture = <a class=\"code\" href=\"#!/url=./cpp_ref/class_m_object.html\">MObject</a>();</div>\n\
<div class=\"line\"></div>\n\
<div class=\"line\">    <span class=\"keywordflow\">return</span> m_type;</div>\n\
<div class=\"line\">}</div>\n\
<div class=\"line\"></div>\n\
<div class=\"line\">ShadingConnection::TYPE ShadingConnection::setTexture(<a class=\"code\" href=\"#!/url=./cpp_ref/class_m_object.html\">MObject</a> texture)</div>\n\
<div class=\"line\">{</div>\n\
<div class=\"line\">    m_texture = texture;</div>\n\
<div class=\"line\">    m_type = TEXTURE;</div>\n\
<div class=\"line\"></div>\n\
<div class=\"line\">    <span class=\"comment\">// Reset m_color to prevent misinterpretation.</span></div>\n\
<div class=\"line\">    m_constantColor = <a class=\"code\" href=\"#!/url=./cpp_ref/class_m_color.html\">MColor</a>();</div>\n\
<div class=\"line\"></div>\n\
<div class=\"line\">    <span class=\"keywordflow\">return</span> m_type;</div>\n\
<div class=\"line\">}</div>\n\
<div class=\"line\"></div>\n\
<div class=\"line\"><span class=\"keywordtype\">bool</span> ShadingConnection::isDirectConnection()</div>\n\
<div class=\"line\">{</div>\n\
<div class=\"line\">    <span class=\"keywordflow\">return</span> m_directConnection;</div>\n\
<div class=\"line\">}</div>\n\
</div><!-- fragment --> </div><!-- contents -->\n\
</div><!-- doc-content -->\n\
          <div class=\"footer-block\"><a href=\"../html/ac.cmtdialog.htm\" class=\"comments-anchor\" target=\"_blank\"><span class=\"comments-link\">Please send us your comment about this page</span></a></div><br></div>\n\
   </div></body>\n\
</html>\n\
";