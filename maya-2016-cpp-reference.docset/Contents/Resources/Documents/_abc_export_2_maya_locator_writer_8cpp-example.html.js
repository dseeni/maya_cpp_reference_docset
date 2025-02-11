var topic = "<!-- saved from url=(0024)http://docs.autodesk.com -->\n\
<html>\n\
   <head><script src=\"../scripts/yepnope.1.5.4-min.js\" type=\"text/javascript\"></script><script src=\"../scripts/lib/jquery-1.11.1.min.js\" type=\"text/javascript\"></script><meta http-equiv=\"Content-Type\" content=\"text/html; charset=UTF-8\"><meta name=\"product\" content=\"MAYAUL\"><meta name=\"release\" content=\"2016\"><meta name=\"book\" content=\"Developer\"><meta name=\"created\" content=\"2015-10-14\"><meta name=\"topicid\" content=\"GUID-02DEF634-1E7B-48C6-8ACD-2C934CA97887\"><meta name=\"topic-type\" content=\"concept\">\n\
      <title>AbcExport/MayaLocatorWriter.cpp</title>\n\
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
    cpp_ref_adsk_ref_toc.initNavTree(\'_abc_export_2_maya_locator_writer_8cpp-example.html\', tocPrefix);\n\
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
            <h1>AbcExport/MayaLocatorWriter.cpp</h1>\n\
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
<div class=\"title\">AbcExport/MayaLocatorWriter.cpp</div>  </div>\n\
</div><!--header-->\n\
<div class=\"contents\">\n\
<div class=\"fragment\"><div class=\"line\"><span class=\"comment\">//-*****************************************************************************</span></div>\n\
<div class=\"line\"><span class=\"comment\">//</span></div>\n\
<div class=\"line\"><span class=\"comment\">// Copyright (c) 2009-2012,</span></div>\n\
<div class=\"line\"><span class=\"comment\">//  Sony Pictures Imageworks Inc. and</span></div>\n\
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
<div class=\"line\"><span class=\"comment\">// Industrial Light &amp; Magic, nor the names of their contributors may be used</span></div>\n\
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
<div class=\"line\"><span class=\"preprocessor\">#include &quot;MayaLocatorWriter.h&quot;</span></div>\n\
<div class=\"line\"><span class=\"preprocessor\">#include &quot;MayaUtility.h&quot;</span></div>\n\
<div class=\"line\"></div>\n\
<div class=\"line\">MayaLocatorWriter::MayaLocatorWriter(<a name=\"_a0\"></a><a class=\"code\" href=\"#!/url=./cpp_ref/class_m_dag_path.html\">MDagPath</a> &amp; iDag,</div>\n\
<div class=\"line\">    Alembic::Abc::OObject &amp; iParent,</div>\n\
<div class=\"line\">    Alembic::Util::uint32_t iTimeIndex,</div>\n\
<div class=\"line\">    <span class=\"keyword\">const</span> JobArgs &amp; iArgs) :</div>\n\
<div class=\"line\">    mIsAnimated(false), mDagPath(iDag)</div>\n\
<div class=\"line\">{</div>\n\
<div class=\"line\">    <a name=\"_a1\"></a><a class=\"code\" href=\"#!/url=./cpp_ref/class_m_status.html\">MStatus</a> status = <a name=\"a2\"></a><a class=\"code\" href=\"#!/url=./cpp_ref/class_m_status.html#a02ab596f4febca68da503aaf8dde3a80af0536797208144380691e2b376ffc1d1\">MS::kSuccess</a>;</div>\n\
<div class=\"line\">    <a name=\"_a3\"></a><a class=\"code\" href=\"#!/url=./cpp_ref/class_m_fn_dag_node.html\">MFnDagNode</a> fnLocator(mDagPath, &amp;status);</div>\n\
<div class=\"line\">    <span class=\"keywordflow\">if</span> ( !status )</div>\n\
<div class=\"line\">    {</div>\n\
<div class=\"line\">        <a name=\"a4\"></a><a class=\"code\" href=\"#!/url=./cpp_ref/class_m_global.html#a4ddbe97e58a90e1ab05d45a62c006cf0\">MGlobal::displayError</a>(</div>\n\
<div class=\"line\">            <span class=\"stringliteral\">&quot;Failed to initialize MFnDagNode object for locator&quot;</span> );</div>\n\
<div class=\"line\">    }</div>\n\
<div class=\"line\"></div>\n\
<div class=\"line\">    <a name=\"_a5\"></a><a class=\"code\" href=\"#!/url=./cpp_ref/class_m_object.html\">MObject</a> locator = iDag.<a name=\"a6\"></a><a class=\"code\" href=\"#!/url=./cpp_ref/class_m_dag_path.html#ad1aa507eb8e63e89e8d46a0abc18aa8c\">node</a>();</div>\n\
<div class=\"line\"></div>\n\
<div class=\"line\">    <a name=\"_a7\"></a><a class=\"code\" href=\"#!/url=./cpp_ref/class_m_string.html\">MString</a> name = fnLocator.<a name=\"a8\"></a><a class=\"code\" href=\"#!/url=./cpp_ref/class_m_fn_dependency_node.html#a049384adbea0396ea2f03d1ad4d69df1\">name</a>();</div>\n\
<div class=\"line\">    name = util::stripNamespaces(name, iArgs.stripNamespace);</div>\n\
<div class=\"line\"></div>\n\
<div class=\"line\">    mXform = Alembic::AbcGeom::OXform(iParent, name.<a name=\"a9\"></a><a class=\"code\" href=\"#!/url=./cpp_ref/class_m_string.html#aa9ab612f356c53479afc4c648c9ef94d\">asChar</a>(), iTimeIndex);</div>\n\
<div class=\"line\"></div>\n\
<div class=\"line\">    Alembic::Abc::OCompoundProperty cp = mXform.getProperties();</div>\n\
<div class=\"line\"></div>\n\
<div class=\"line\">    <span class=\"comment\">// of type double[6]</span></div>\n\
<div class=\"line\">    Alembic::AbcCoreAbstract::DataType dType(Alembic::Util::kFloat64POD, 6);</div>\n\
<div class=\"line\"></div>\n\
<div class=\"line\">    <a name=\"_a10\"></a><a class=\"code\" href=\"#!/url=./cpp_ref/class_m_plug.html\">MPlug</a> posX = fnLocator.<a name=\"a11\"></a><a class=\"code\" href=\"#!/url=./cpp_ref/class_m_fn_dependency_node.html#aac29b4a3b51c9d236175e955638f7153\">findPlug</a>(<span class=\"stringliteral\">&quot;localPositionX&quot;</span>);</div>\n\
<div class=\"line\">    <a class=\"code\" href=\"#!/url=./cpp_ref/class_m_plug.html\">MPlug</a> posY = fnLocator.<a class=\"code\" href=\"#!/url=./cpp_ref/class_m_fn_dependency_node.html#aac29b4a3b51c9d236175e955638f7153\">findPlug</a>(<span class=\"stringliteral\">&quot;localPositionY&quot;</span>);</div>\n\
<div class=\"line\">    <a class=\"code\" href=\"#!/url=./cpp_ref/class_m_plug.html\">MPlug</a> posZ = fnLocator.<a class=\"code\" href=\"#!/url=./cpp_ref/class_m_fn_dependency_node.html#aac29b4a3b51c9d236175e955638f7153\">findPlug</a>(<span class=\"stringliteral\">&quot;localPositionZ&quot;</span>);</div>\n\
<div class=\"line\">    <a class=\"code\" href=\"#!/url=./cpp_ref/class_m_plug.html\">MPlug</a> pos = fnLocator.<a class=\"code\" href=\"#!/url=./cpp_ref/class_m_fn_dependency_node.html#aac29b4a3b51c9d236175e955638f7153\">findPlug</a>(<span class=\"stringliteral\">&quot;localPosition&quot;</span>);</div>\n\
<div class=\"line\"></div>\n\
<div class=\"line\">    <a class=\"code\" href=\"#!/url=./cpp_ref/class_m_plug.html\">MPlug</a> scaleX = fnLocator.<a class=\"code\" href=\"#!/url=./cpp_ref/class_m_fn_dependency_node.html#aac29b4a3b51c9d236175e955638f7153\">findPlug</a>(<span class=\"stringliteral\">&quot;localScaleX&quot;</span>);</div>\n\
<div class=\"line\">    <a class=\"code\" href=\"#!/url=./cpp_ref/class_m_plug.html\">MPlug</a> scaleY = fnLocator.<a class=\"code\" href=\"#!/url=./cpp_ref/class_m_fn_dependency_node.html#aac29b4a3b51c9d236175e955638f7153\">findPlug</a>(<span class=\"stringliteral\">&quot;localScaleY&quot;</span>);</div>\n\
<div class=\"line\">    <a class=\"code\" href=\"#!/url=./cpp_ref/class_m_plug.html\">MPlug</a> scaleZ = fnLocator.<a class=\"code\" href=\"#!/url=./cpp_ref/class_m_fn_dependency_node.html#aac29b4a3b51c9d236175e955638f7153\">findPlug</a>(<span class=\"stringliteral\">&quot;localScaleZ&quot;</span>);</div>\n\
<div class=\"line\">    <a class=\"code\" href=\"#!/url=./cpp_ref/class_m_plug.html\">MPlug</a> scale = fnLocator.<a class=\"code\" href=\"#!/url=./cpp_ref/class_m_fn_dependency_node.html#aac29b4a3b51c9d236175e955638f7153\">findPlug</a>(<span class=\"stringliteral\">&quot;localScale&quot;</span>);</div>\n\
<div class=\"line\"></div>\n\
<div class=\"line\">    <span class=\"keywordflow\">if</span> ( iTimeIndex != 0 &amp;&amp; (util::getSampledType(posX) != 0 ||</div>\n\
<div class=\"line\">        util::getSampledType(posY) != 0 ||</div>\n\
<div class=\"line\">        util::getSampledType(posZ) != 0 ||</div>\n\
<div class=\"line\">        util::getSampledType(pos) != 0 ||</div>\n\
<div class=\"line\">        util::getSampledType(scaleX) != 0 ||</div>\n\
<div class=\"line\">        util::getSampledType(scaleY) != 0 ||</div>\n\
<div class=\"line\">        util::getSampledType(scaleZ) != 0 ||</div>\n\
<div class=\"line\">        util::getSampledType(scale) != 0) )</div>\n\
<div class=\"line\">    {</div>\n\
<div class=\"line\">        mIsAnimated = <span class=\"keyword\">true</span>;</div>\n\
<div class=\"line\">        mSp = Alembic::Abc::OScalarProperty(cp,</div>\n\
<div class=\"line\">            <span class=\"stringliteral\">&quot;locator&quot;</span>, dType, iTimeIndex);</div>\n\
<div class=\"line\">    }</div>\n\
<div class=\"line\">    <span class=\"keywordflow\">else</span></div>\n\
<div class=\"line\">    {</div>\n\
<div class=\"line\">        mSp = Alembic::Abc::OScalarProperty(cp,</div>\n\
<div class=\"line\">            <span class=\"stringliteral\">&quot;locator&quot;</span>, dType);</div>\n\
<div class=\"line\">    }</div>\n\
<div class=\"line\"></div>\n\
<div class=\"line\">    <span class=\"keywordtype\">double</span> val[6];</div>\n\
<div class=\"line\">    val[0] = posX.<a name=\"a12\"></a><a class=\"code\" href=\"#!/url=./cpp_ref/class_m_plug.html#acb5276d3f8a82a3b48f4fcddb277a275\">asDouble</a>();</div>\n\
<div class=\"line\">    val[1] = posY.<a class=\"code\" href=\"#!/url=./cpp_ref/class_m_plug.html#acb5276d3f8a82a3b48f4fcddb277a275\">asDouble</a>();</div>\n\
<div class=\"line\">    val[2] = posZ.<a class=\"code\" href=\"#!/url=./cpp_ref/class_m_plug.html#acb5276d3f8a82a3b48f4fcddb277a275\">asDouble</a>();</div>\n\
<div class=\"line\">    val[3] = scaleX.<a class=\"code\" href=\"#!/url=./cpp_ref/class_m_plug.html#acb5276d3f8a82a3b48f4fcddb277a275\">asDouble</a>();</div>\n\
<div class=\"line\">    val[4] = scaleY.<a class=\"code\" href=\"#!/url=./cpp_ref/class_m_plug.html#acb5276d3f8a82a3b48f4fcddb277a275\">asDouble</a>();</div>\n\
<div class=\"line\">    val[5] = scaleZ.<a class=\"code\" href=\"#!/url=./cpp_ref/class_m_plug.html#acb5276d3f8a82a3b48f4fcddb277a275\">asDouble</a>();</div>\n\
<div class=\"line\">    mSp.set(val);</div>\n\
<div class=\"line\"></div>\n\
<div class=\"line\">    Alembic::Abc::OCompoundProperty arbGeom;</div>\n\
<div class=\"line\">    Alembic::Abc::OCompoundProperty userProps;</div>\n\
<div class=\"line\">    <span class=\"keywordflow\">if</span> (AttributesWriter::hasAnyAttr(fnLocator, iArgs))</div>\n\
<div class=\"line\">    {</div>\n\
<div class=\"line\">        arbGeom = mXform.getSchema().getArbGeomParams();</div>\n\
<div class=\"line\">        userProps = mXform.getSchema().getUserProperties();</div>\n\
<div class=\"line\">    }</div>\n\
<div class=\"line\"></div>\n\
<div class=\"line\">    mAttrs = AttributesWriterPtr(<span class=\"keyword\">new</span> AttributesWriter(arbGeom, userProps,</div>\n\
<div class=\"line\">                                                      mXform, fnLocator,</div>\n\
<div class=\"line\">                                                      iTimeIndex, iArgs));</div>\n\
<div class=\"line\">}</div>\n\
<div class=\"line\"></div>\n\
<div class=\"line\"></div>\n\
<div class=\"line\">MayaLocatorWriter::~MayaLocatorWriter()</div>\n\
<div class=\"line\">{</div>\n\
<div class=\"line\">    mSp.reset();</div>\n\
<div class=\"line\">}</div>\n\
<div class=\"line\"></div>\n\
<div class=\"line\"><span class=\"keywordtype\">void</span> MayaLocatorWriter::write()</div>\n\
<div class=\"line\">{</div>\n\
<div class=\"line\">    <a class=\"code\" href=\"#!/url=./cpp_ref/class_m_status.html\">MStatus</a> status = <a class=\"code\" href=\"#!/url=./cpp_ref/class_m_status.html#a02ab596f4febca68da503aaf8dde3a80af0536797208144380691e2b376ffc1d1\">MS::kSuccess</a>;</div>\n\
<div class=\"line\">    <a class=\"code\" href=\"#!/url=./cpp_ref/class_m_fn_dag_node.html\">MFnDagNode</a> fnLocator(mDagPath, &amp;status);</div>\n\
<div class=\"line\">    <span class=\"keywordflow\">if</span> ( !status )</div>\n\
<div class=\"line\">    {</div>\n\
<div class=\"line\">        <a class=\"code\" href=\"#!/url=./cpp_ref/class_m_global.html#a4ddbe97e58a90e1ab05d45a62c006cf0\">MGlobal::displayError</a>(</div>\n\
<div class=\"line\">            <span class=\"stringliteral\">&quot;Failed to initialize MFnDagNode object for locator&quot;</span> );</div>\n\
<div class=\"line\">    }</div>\n\
<div class=\"line\"></div>\n\
<div class=\"line\">    <span class=\"keywordtype\">double</span> val[6];</div>\n\
<div class=\"line\">    val[0] = fnLocator.findPlug(<span class=\"stringliteral\">&quot;localPositionX&quot;</span>).asDouble();</div>\n\
<div class=\"line\">    val[1] = fnLocator.findPlug(<span class=\"stringliteral\">&quot;localPositionY&quot;</span>).asDouble();</div>\n\
<div class=\"line\">    val[2] = fnLocator.findPlug(<span class=\"stringliteral\">&quot;localPositionZ&quot;</span>).asDouble();</div>\n\
<div class=\"line\">    val[3] = fnLocator.findPlug(<span class=\"stringliteral\">&quot;localScaleX&quot;</span>).asDouble();</div>\n\
<div class=\"line\">    val[4] = fnLocator.findPlug(<span class=\"stringliteral\">&quot;localScaleY&quot;</span>).asDouble();</div>\n\
<div class=\"line\">    val[5] = fnLocator.findPlug(<span class=\"stringliteral\">&quot;localScaleZ&quot;</span>).asDouble();</div>\n\
<div class=\"line\"></div>\n\
<div class=\"line\">    mSp.set(val);</div>\n\
<div class=\"line\">}</div>\n\
<div class=\"line\"></div>\n\
<div class=\"line\"><span class=\"keywordtype\">bool</span> MayaLocatorWriter::isAnimated()<span class=\"keyword\"> const</span></div>\n\
<div class=\"line\"><span class=\"keyword\"></span>{</div>\n\
<div class=\"line\">    <span class=\"keywordflow\">return</span> mIsAnimated;</div>\n\
<div class=\"line\">}</div>\n\
</div><!-- fragment --> </div><!-- contents -->\n\
</div><!-- doc-content -->\n\
          <div class=\"footer-block\"><a href=\"../html/ac.cmtdialog.htm\" class=\"comments-anchor\" target=\"_blank\"><span class=\"comments-link\">Please send us your comment about this page</span></a></div><br></div>\n\
   </div></body>\n\
</html>\n\
";