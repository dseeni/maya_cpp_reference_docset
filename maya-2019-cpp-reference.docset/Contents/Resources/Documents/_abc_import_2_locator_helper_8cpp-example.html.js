var topic = "<!-- saved from url=(0024)http://docs.autodesk.com -->\n\
<html>\n\
   <head><script src=\"../scripts/yepnope.1.5.4-min.js\" type=\"text/javascript\"></script><script src=\"../scripts/lib/jquery-1.11.1.min.js\" type=\"text/javascript\"></script><meta http-equiv=\"Content-Type\" content=\"text/html; charset=UTF-8\"><script type=\"text/javascript\" src=\"../scripts/utils/adsk.redirect.js\"></script>\n\
      <title>AbcImport/LocatorHelper.cpp</title>\n\
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
    cpp_ref_adsk_ref_toc.initNavTree(\'_abc_import_2_locator_helper_8cpp-example.html\', tocPrefix);\n\
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
            <h1>AbcImport/LocatorHelper.cpp</h1>\n\
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
      <li><a href=\"#!/url=./cpp_ref/files.html\"><span>Files</span></a></li>\n\
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
<div class=\"title\">AbcImport/LocatorHelper.cpp</div>  </div>\n\
</div><!--header-->\n\
<div class=\"contents\">\n\
<div class=\"fragment\"><div class=\"line\"><span class=\"comment\">//-*****************************************************************************</span></div>\n\
<div class=\"line\"><span class=\"comment\">//</span></div>\n\
<div class=\"line\"><span class=\"comment\">// Copyright (c) 2009-2011,</span></div>\n\
<div class=\"line\"><span class=\"comment\">//  Sony Pictures Imageworks, Inc. and</span></div>\n\
<div class=\"line\"><span class=\"comment\">//  Industrial Light &amp; Magic, a division of Lucasfilm Entertainment Company Ltd.</span></div>\n\
<div class=\"line\"><span class=\"comment\">//</span></div>\n\
<div class=\"line\"><span class=\"comment\">// All rights reserved.</span></div>\n\
<div class=\"line\"><span class=\"comment\">//</span></div>\n\
<div class=\"line\"><span class=\"comment\">// Redistribution and use in source and binary forms, with or without</span></div>\n\
<div class=\"line\"><span class=\"comment\">// modification, are permitted provided that the following conditions are</span></div>\n\
<div class=\"line\"><span class=\"comment\">// met:</span></div>\n\
<div class=\"line\"><span class=\"comment\">// *       Redistributions of source code must retain the above copyright</span></div>\n\
<div class=\"line\"><span class=\"comment\">// notice, this list of conditions and the following disclaimer.</span></div>\n\
<div class=\"line\"><span class=\"comment\">// *       Redistributions in binary form must reproduce the above</span></div>\n\
<div class=\"line\"><span class=\"comment\">// copyright notice, this list of conditions and the following disclaimer</span></div>\n\
<div class=\"line\"><span class=\"comment\">// in the documentation and/or other materials provided with the</span></div>\n\
<div class=\"line\"><span class=\"comment\">// distribution.</span></div>\n\
<div class=\"line\"><span class=\"comment\">// *       Neither the name of Sony Pictures Imageworks, nor</span></div>\n\
<div class=\"line\"><span class=\"comment\">// Industrial Light &amp; Magic nor the names of their contributors may be used</span></div>\n\
<div class=\"line\"><span class=\"comment\">// to endorse or promote products derived from this software without specific</span></div>\n\
<div class=\"line\"><span class=\"comment\">// prior written permission.</span></div>\n\
<div class=\"line\"><span class=\"comment\">//</span></div>\n\
<div class=\"line\"><span class=\"comment\">// THIS SOFTWARE IS PROVIDED BY THE COPYRIGHT HOLDERS AND CONTRIBUTORS</span></div>\n\
<div class=\"line\"><span class=\"comment\">// &quot;AS IS&quot; AND ANY EXPRESS OR IMPLIED WARRANTIES, INCLUDING, BUT NOT</span></div>\n\
<div class=\"line\"><span class=\"comment\">// LIMITED TO, THE IMPLIED WARRANTIES OF MERCHANTABILITY AND FITNESS FOR</span></div>\n\
<div class=\"line\"><span class=\"comment\">// A PARTICULAR PURPOSE ARE DISCLAIMED. IN NO EVENT SHALL THE COPYRIGHT</span></div>\n\
<div class=\"line\"><span class=\"comment\">// OWNER OR CONTRIBUTORS BE LIABLE FOR ANY DIRECT, INDIRECT, INCIDENTAL,</span></div>\n\
<div class=\"line\"><span class=\"comment\">// SPECIAL, EXEMPLARY, OR CONSEQUENTIAL DAMAGES (INCLUDING, BUT NOT</span></div>\n\
<div class=\"line\"><span class=\"comment\">// LIMITED TO, PROCUREMENT OF SUBSTITUTE GOODS OR SERVICES; LOSS OF USE,</span></div>\n\
<div class=\"line\"><span class=\"comment\">// DATA, OR PROFITS; OR BUSINESS INTERRUPTION) HOWEVER CAUSED AND ON ANY</span></div>\n\
<div class=\"line\"><span class=\"comment\">// THEORY OF LIABILITY, WHETHER IN CONTRACT, STRICT LIABILITY, OR TORT</span></div>\n\
<div class=\"line\"><span class=\"comment\">// (INCLUDING NEGLIGENCE OR OTHERWISE) ARISING IN ANY WAY OUT OF THE USE</span></div>\n\
<div class=\"line\"><span class=\"comment\">// OF THIS SOFTWARE, EVEN IF ADVISED OF THE POSSIBILITY OF SUCH DAMAGE.</span></div>\n\
<div class=\"line\"><span class=\"comment\">//</span></div>\n\
<div class=\"line\"><span class=\"comment\">//-*****************************************************************************</span></div>\n\
<div class=\"line\"></div>\n\
<div class=\"line\"><span class=\"preprocessor\">#include &quot;util.h&quot;</span></div>\n\
<div class=\"line\"><span class=\"preprocessor\">#include &quot;LocatorHelper.h&quot;</span></div>\n\
<div class=\"line\"><span class=\"preprocessor\">#include &quot;NodeIteratorVisitorHelper.h&quot;</span></div>\n\
<div class=\"line\"></div>\n\
<div class=\"line\"><span class=\"preprocessor\">#include &lt;maya/MObject.h&gt;</span></div>\n\
<div class=\"line\"><span class=\"preprocessor\">#include &lt;maya/MFnTransform.h&gt;</span></div>\n\
<div class=\"line\"><span class=\"preprocessor\">#include &lt;maya/MString.h&gt;</span></div>\n\
<div class=\"line\"><span class=\"preprocessor\">#include &lt;maya/MVector.h&gt;</span></div>\n\
<div class=\"line\"><span class=\"preprocessor\">#include &lt;maya/MGlobal.h&gt;</span></div>\n\
<div class=\"line\"><span class=\"preprocessor\">#include &lt;maya/MDagModifier.h&gt;</span></div>\n\
<div class=\"line\"></div>\n\
<div class=\"line\"></div>\n\
<div class=\"line\"><a name=\"_a0\"></a><a class=\"code\" href=\"#!/url=./cpp_ref/class_m_object.html\">MObject</a> create(Alembic::AbcGeom::IXform &amp; iLocator,</div>\n\
<div class=\"line\">               <a class=\"code\" href=\"#!/url=./cpp_ref/class_m_object.html\">MObject</a> &amp; iParent,</div>\n\
<div class=\"line\">               Alembic::Abc::IScalarProperty &amp; iLocProp)</div>\n\
<div class=\"line\">{</div>\n\
<div class=\"line\">    <a name=\"_a1\"></a><a class=\"code\" href=\"#!/url=./cpp_ref/class_m_status.html\">MStatus</a> status = MS::kSuccess;</div>\n\
<div class=\"line\">    <a class=\"code\" href=\"#!/url=./cpp_ref/class_m_object.html\">MObject</a> locatorObj = <a name=\"a2\"></a><a class=\"code\" href=\"#!/url=./cpp_ref/class_m_object.html#af2a707b4254eb54763167aeced863e63\">MObject::kNullObj</a>;</div>\n\
<div class=\"line\"></div>\n\
<div class=\"line\">    <a name=\"_a3\"></a><a class=\"code\" href=\"#!/url=./cpp_ref/class_m_string.html\">MString</a> name(iLocator.getName().c_str());</div>\n\
<div class=\"line\"></div>\n\
<div class=\"line\">    <a name=\"_a4\"></a><a class=\"code\" href=\"#!/url=./cpp_ref/class_m_dag_modifier.html\">MDagModifier</a> modifier;</div>\n\
<div class=\"line\">    locatorObj = modifier.createNode(<span class=\"stringliteral\">&quot;locator&quot;</span>, iParent, &amp;status);</div>\n\
<div class=\"line\">    status = modifier.doIt();</div>\n\
<div class=\"line\">    <span class=\"keywordflow\">if</span> (status != MS::kSuccess)</div>\n\
<div class=\"line\">    {</div>\n\
<div class=\"line\">        <a class=\"code\" href=\"#!/url=./cpp_ref/class_m_string.html\">MString</a> theError(<span class=\"stringliteral\">&quot;Failed to create locator node &quot;</span>);</div>\n\
<div class=\"line\">        theError += name;</div>\n\
<div class=\"line\">        printError(theError);</div>\n\
<div class=\"line\">        <span class=\"keywordflow\">return</span> locatorObj;</div>\n\
<div class=\"line\">    }</div>\n\
<div class=\"line\"></div>\n\
<div class=\"line\">    <a name=\"_a5\"></a><a class=\"code\" href=\"#!/url=./cpp_ref/class_m_fn_dag_node.html\">MFnDagNode</a> fnLocator(locatorObj);</div>\n\
<div class=\"line\">    fnLocator.<a name=\"a6\"></a><a class=\"code\" href=\"#!/url=./cpp_ref/class_m_fn_dependency_node.html#a386bb83443e16a98e6fa10c683e76b6c\">setName</a>(name);</div>\n\
<div class=\"line\"></div>\n\
<div class=\"line\">    <span class=\"keywordflow\">if</span> (iLocProp.isConstant())</div>\n\
<div class=\"line\">    {</div>\n\
<div class=\"line\">        <span class=\"comment\">// read the value from iLocProp</span></div>\n\
<div class=\"line\">        <span class=\"keywordtype\">double</span> oSample[6];</div>\n\
<div class=\"line\">        iLocProp.get(oSample, 0);</div>\n\
<div class=\"line\"></div>\n\
<div class=\"line\">        <span class=\"comment\">// set the plugs and be done</span></div>\n\
<div class=\"line\">        <a name=\"_a7\"></a><a class=\"code\" href=\"#!/url=./cpp_ref/class_m_plug.html\">MPlug</a> dstPlug;</div>\n\
<div class=\"line\">        dstPlug = fnLocator.<a name=\"a8\"></a><a class=\"code\" href=\"#!/url=./cpp_ref/class_m_fn_dependency_node.html#aac29b4a3b51c9d236175e955638f7153\">findPlug</a>(<span class=\"stringliteral\">&quot;localPositionX&quot;</span>, <span class=\"keyword\">true</span>);</div>\n\
<div class=\"line\">        dstPlug.<a name=\"a9\"></a><a class=\"code\" href=\"#!/url=./cpp_ref/class_m_plug.html#aec7c3792a53d27a61ece4f7b81cc123b\">setValue</a>(oSample[0]);</div>\n\
<div class=\"line\">        dstPlug = fnLocator.<a class=\"code\" href=\"#!/url=./cpp_ref/class_m_fn_dependency_node.html#aac29b4a3b51c9d236175e955638f7153\">findPlug</a>(<span class=\"stringliteral\">&quot;localPositionY&quot;</span>, <span class=\"keyword\">true</span>);</div>\n\
<div class=\"line\">        dstPlug.<a class=\"code\" href=\"#!/url=./cpp_ref/class_m_plug.html#aec7c3792a53d27a61ece4f7b81cc123b\">setValue</a>(oSample[1]);</div>\n\
<div class=\"line\">        dstPlug = fnLocator.<a class=\"code\" href=\"#!/url=./cpp_ref/class_m_fn_dependency_node.html#aac29b4a3b51c9d236175e955638f7153\">findPlug</a>(<span class=\"stringliteral\">&quot;localPositionZ&quot;</span>, <span class=\"keyword\">true</span>);</div>\n\
<div class=\"line\">        dstPlug.<a class=\"code\" href=\"#!/url=./cpp_ref/class_m_plug.html#aec7c3792a53d27a61ece4f7b81cc123b\">setValue</a>(oSample[2]);</div>\n\
<div class=\"line\">        dstPlug = fnLocator.<a class=\"code\" href=\"#!/url=./cpp_ref/class_m_fn_dependency_node.html#aac29b4a3b51c9d236175e955638f7153\">findPlug</a>(<span class=\"stringliteral\">&quot;localScaleX&quot;</span>, <span class=\"keyword\">true</span>);</div>\n\
<div class=\"line\">        dstPlug.<a class=\"code\" href=\"#!/url=./cpp_ref/class_m_plug.html#aec7c3792a53d27a61ece4f7b81cc123b\">setValue</a>(oSample[3]);</div>\n\
<div class=\"line\">        dstPlug = fnLocator.<a class=\"code\" href=\"#!/url=./cpp_ref/class_m_fn_dependency_node.html#aac29b4a3b51c9d236175e955638f7153\">findPlug</a>(<span class=\"stringliteral\">&quot;localScaleY&quot;</span>, <span class=\"keyword\">true</span>);</div>\n\
<div class=\"line\">        dstPlug.<a class=\"code\" href=\"#!/url=./cpp_ref/class_m_plug.html#aec7c3792a53d27a61ece4f7b81cc123b\">setValue</a>(oSample[4]);</div>\n\
<div class=\"line\">        dstPlug = fnLocator.<a class=\"code\" href=\"#!/url=./cpp_ref/class_m_fn_dependency_node.html#aac29b4a3b51c9d236175e955638f7153\">findPlug</a>(<span class=\"stringliteral\">&quot;localScaleZ&quot;</span>, <span class=\"keyword\">true</span>);</div>\n\
<div class=\"line\">        dstPlug.<a class=\"code\" href=\"#!/url=./cpp_ref/class_m_plug.html#aec7c3792a53d27a61ece4f7b81cc123b\">setValue</a>(oSample[5]);</div>\n\
<div class=\"line\">    }</div>\n\
<div class=\"line\"></div>\n\
<div class=\"line\">    <span class=\"keywordflow\">return</span> locatorObj;</div>\n\
<div class=\"line\">}</div>\n\
<div class=\"line\"></div>\n\
<div class=\"line\"><span class=\"keywordtype\">void</span> read(<span class=\"keywordtype\">double</span> iFrame,</div>\n\
<div class=\"line\">          Alembic::AbcGeom::IXform &amp; iLocator,</div>\n\
<div class=\"line\">          std::vector&lt; double &gt; &amp; oArray)</div>\n\
<div class=\"line\">{</div>\n\
<div class=\"line\">    oArray.resize(6);</div>\n\
<div class=\"line\"></div>\n\
<div class=\"line\">    Alembic::Abc::ICompoundProperty props = iLocator.getProperties();</div>\n\
<div class=\"line\">    Alembic::Abc::IScalarProperty locProp(props, <span class=\"stringliteral\">&quot;locator&quot;</span>);</div>\n\
<div class=\"line\"></div>\n\
<div class=\"line\">    Alembic::AbcCoreAbstract::index_t index, ceilIndex;</div>\n\
<div class=\"line\">    <span class=\"keywordtype\">double</span> alpha = getWeightAndIndex(iFrame,</div>\n\
<div class=\"line\">                                     locProp.getTimeSampling(),</div>\n\
<div class=\"line\">                                     locProp.getNumSamples(),</div>\n\
<div class=\"line\">                                     index,</div>\n\
<div class=\"line\">                                     ceilIndex);</div>\n\
<div class=\"line\">    <span class=\"keywordtype\">double</span> samp[6];</div>\n\
<div class=\"line\">    locProp.get(samp, index);</div>\n\
<div class=\"line\"></div>\n\
<div class=\"line\">    <span class=\"keywordflow\">if</span> (fabs(alpha) &gt; 1e-6)  <span class=\"comment\">// interpolation</span></div>\n\
<div class=\"line\">    {</div>\n\
<div class=\"line\">        <span class=\"keywordtype\">double</span> ceilSamp[6];</div>\n\
<div class=\"line\">        locProp.get(ceilSamp, ceilIndex);</div>\n\
<div class=\"line\">        <span class=\"keywordflow\">for</span> (<span class=\"keywordtype\">unsigned</span> <span class=\"keywordtype\">int</span> i = 0; i &lt; 6; i++)</div>\n\
<div class=\"line\">            oArray[i] = simpleLerp&lt; double &gt;(alpha, samp[i], ceilSamp[i]);</div>\n\
<div class=\"line\">    }</div>\n\
<div class=\"line\">    <span class=\"keywordflow\">else</span></div>\n\
<div class=\"line\">    {</div>\n\
<div class=\"line\">        <span class=\"keywordflow\">for</span> (<span class=\"keywordtype\">unsigned</span> <span class=\"keywordtype\">int</span> i = 0; i &lt; 6; i++)</div>\n\
<div class=\"line\">            oArray[i] = samp[i];</div>\n\
<div class=\"line\">    }</div>\n\
<div class=\"line\">}</div>\n\
</div><!-- fragment --> </div><!-- contents -->\n\
</div><!-- doc-content -->\n\
          <div class=\"footer-block\"><a href=\"../html/ac.cmtdialog.htm\" class=\"comments-anchor\" target=\"_blank\"><span class=\"comments-link\">Please send us your comment about this page</span></a></div></div>\n\
   </div></body>\n\
</html>\n\
";