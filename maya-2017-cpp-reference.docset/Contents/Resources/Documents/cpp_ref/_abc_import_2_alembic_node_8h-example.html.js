var topic = "<!-- saved from url=(0024)http://docs.autodesk.com -->\n\
<html>\n\
   <head><script src=\"../scripts/yepnope.1.5.4-min.js\" type=\"text/javascript\"></script><script src=\"../scripts/lib/jquery-1.11.1.min.js\" type=\"text/javascript\"></script><meta http-equiv=\"Content-Type\" content=\"text/html; charset=UTF-8\"><meta name=\"product\" content=\"MAYAUL\"><meta name=\"release\" content=\"2017\"><meta name=\"book\" content=\"Developer\"><meta name=\"created\" content=\"2016-06-16\"><meta name=\"topicid\" content=\"GUID-02DEF634-1E7B-48C6-8ACD-2C934CA97887\"><meta name=\"topic-type\" content=\"concept\">\n\
      <title>AbcImport/AlembicNode.h</title>\n\
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
    cpp_ref_adsk_ref_toc.initNavTree(\'_abc_import_2_alembic_node_8h-example.html\', tocPrefix);\n\
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
            <h1>AbcImport/AlembicNode.h</h1>\n\
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
<div class=\"title\">AbcImport/AlembicNode.h</div>  </div>\n\
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
<div class=\"line\"><span class=\"preprocessor\">#ifndef ABCIMPORT_ALEMBIC_NODE_H_</span></div>\n\
<div class=\"line\"><span class=\"preprocessor\">#define ABCIMPORT_ALEMBIC_NODE_H_</span></div>\n\
<div class=\"line\"></div>\n\
<div class=\"line\"><span class=\"preprocessor\">#include &quot;NodeIteratorVisitorHelper.h&quot;</span></div>\n\
<div class=\"line\"></div>\n\
<div class=\"line\"><span class=\"preprocessor\">#include &lt;maya/MDataHandle.h&gt;</span></div>\n\
<div class=\"line\"><span class=\"preprocessor\">#include &lt;maya/MDGContext.h&gt;</span></div>\n\
<div class=\"line\"><span class=\"preprocessor\">#include &lt;maya/MPlug.h&gt;</span></div>\n\
<div class=\"line\"><span class=\"preprocessor\">#include &lt;maya/MPlugArray.h&gt;</span></div>\n\
<div class=\"line\"><span class=\"preprocessor\">#include &lt;maya/MPxNode.h&gt;</span></div>\n\
<div class=\"line\"><span class=\"preprocessor\">#include &lt;maya/MStatus.h&gt;</span></div>\n\
<div class=\"line\"><span class=\"preprocessor\">#include &lt;maya/MString.h&gt;</span></div>\n\
<div class=\"line\"></div>\n\
<div class=\"line\"><span class=\"preprocessor\">#include &lt;set&gt;</span></div>\n\
<div class=\"line\"><span class=\"preprocessor\">#include &lt;vector&gt;</span></div>\n\
<div class=\"line\"><span class=\"preprocessor\">#include &lt;string&gt;</span></div>\n\
<div class=\"line\"></div>\n\
<div class=\"line\"><span class=\"keyword\">class </span>AlembicNode : <span class=\"keyword\">public</span> <a name=\"_a0\"></a><a class=\"code\" href=\"#!/url=./cpp_ref/class_m_px_node.html\">MPxNode</a></div>\n\
<div class=\"line\">{</div>\n\
<div class=\"line\"><span class=\"keyword\">public</span>:</div>\n\
<div class=\"line\"></div>\n\
<div class=\"line\">    AlembicNode() : mFileInitialized(0), mDebugOn(<span class=\"keyword\">false</span>)</div>\n\
<div class=\"line\">    {</div>\n\
<div class=\"line\">        mCurTime = DBL_MAX;</div>\n\
<div class=\"line\"></div>\n\
<div class=\"line\">        <span class=\"comment\">// 0 mOutPropArrayAttr</span></div>\n\
<div class=\"line\">        <span class=\"comment\">// 1 mOutTransOpArrayAttr</span></div>\n\
<div class=\"line\">        <span class=\"comment\">// 2 mOutSubDArrayAttr</span></div>\n\
<div class=\"line\">        <span class=\"comment\">// 3 mOutPolyArrayAttr</span></div>\n\
<div class=\"line\">        <span class=\"comment\">// 4 mOutCameraArrayAttr</span></div>\n\
<div class=\"line\">        <span class=\"comment\">// 5 mOutNurbsSurfaceArrayAttr</span></div>\n\
<div class=\"line\">        <span class=\"comment\">// 6 mOutNurbsCurveGrpArrayAttr</span></div>\n\
<div class=\"line\">        <span class=\"comment\">// 7 mOutParticlePosArrayAttr, mOutParticleIdArrayAttr</span></div>\n\
<div class=\"line\">        <span class=\"comment\">// 8 mOutLocatorPosScaleArrayAttr</span></div>\n\
<div class=\"line\">        mOutRead = std::vector&lt;bool&gt;(9, <span class=\"keyword\">false</span>);</div>\n\
<div class=\"line\">    }</div>\n\
<div class=\"line\"></div>\n\
<div class=\"line\">    <span class=\"keyword\">virtual</span> ~AlembicNode() {}</div>\n\
<div class=\"line\"></div>\n\
<div class=\"line\">    <span class=\"comment\">// avoid calling createSceneVisitor twice by getting the</span></div>\n\
<div class=\"line\">    <span class=\"comment\">// list of hdf reader pointers</span></div>\n\
<div class=\"line\">    <span class=\"keywordtype\">void</span> setReaderPtrList(<span class=\"keyword\">const</span> WriterData &amp; iData)</div>\n\
<div class=\"line\">    {</div>\n\
<div class=\"line\">        mData = iData;</div>\n\
<div class=\"line\">    }</div>\n\
<div class=\"line\"></div>\n\
<div class=\"line\">    <span class=\"keyword\">static</span> <span class=\"keyword\">const</span> <a name=\"_a1\"></a><a class=\"code\" href=\"#!/url=./cpp_ref/class_m_type_id.html\">MTypeId</a> mMayaNodeId;</div>\n\
<div class=\"line\"></div>\n\
<div class=\"line\">    <span class=\"comment\">// input attributes</span></div>\n\
<div class=\"line\">    <span class=\"keyword\">static</span> <a name=\"_a2\"></a><a class=\"code\" href=\"#!/url=./cpp_ref/class_m_object.html\">MObject</a> mTimeAttr;</div>\n\
<div class=\"line\">    <span class=\"keyword\">static</span> <a class=\"code\" href=\"#!/url=./cpp_ref/class_m_object.html\">MObject</a> mAbcFileNameAttr;</div>\n\
<div class=\"line\">    <span class=\"keyword\">static</span> <a class=\"code\" href=\"#!/url=./cpp_ref/class_m_object.html\">MObject</a> mSpeedAttr;</div>\n\
<div class=\"line\">    <span class=\"keyword\">static</span> <a class=\"code\" href=\"#!/url=./cpp_ref/class_m_object.html\">MObject</a> mOffsetAttr;</div>\n\
<div class=\"line\">    <span class=\"keyword\">static</span> <a class=\"code\" href=\"#!/url=./cpp_ref/class_m_object.html\">MObject</a> mCycleTypeAttr;</div>\n\
<div class=\"line\">    <span class=\"keyword\">static</span> <a class=\"code\" href=\"#!/url=./cpp_ref/class_m_object.html\">MObject</a> mIncludeFilterAttr;</div>\n\
<div class=\"line\">    <span class=\"keyword\">static</span> <a class=\"code\" href=\"#!/url=./cpp_ref/class_m_object.html\">MObject</a> mExcludeFilterAttr;</div>\n\
<div class=\"line\"></div>\n\
<div class=\"line\">    <span class=\"comment\">// output attributes</span></div>\n\
<div class=\"line\">    <span class=\"keyword\">static</span> <a class=\"code\" href=\"#!/url=./cpp_ref/class_m_object.html\">MObject</a> mOutPropArrayAttr;</div>\n\
<div class=\"line\">    <span class=\"keyword\">static</span> <a class=\"code\" href=\"#!/url=./cpp_ref/class_m_object.html\">MObject</a> mOutSubDArrayAttr;</div>\n\
<div class=\"line\">    <span class=\"keyword\">static</span> <a class=\"code\" href=\"#!/url=./cpp_ref/class_m_object.html\">MObject</a> mOutPolyArrayAttr;</div>\n\
<div class=\"line\">    <span class=\"keyword\">static</span> <a class=\"code\" href=\"#!/url=./cpp_ref/class_m_object.html\">MObject</a> mOutCameraArrayAttr;</div>\n\
<div class=\"line\">    <span class=\"keyword\">static</span> <a class=\"code\" href=\"#!/url=./cpp_ref/class_m_object.html\">MObject</a> mOutNurbsCurveGrpArrayAttr;</div>\n\
<div class=\"line\">    <span class=\"keyword\">static</span> <a class=\"code\" href=\"#!/url=./cpp_ref/class_m_object.html\">MObject</a> mOutNurbsSurfaceArrayAttr;</div>\n\
<div class=\"line\">    <span class=\"keyword\">static</span> <a class=\"code\" href=\"#!/url=./cpp_ref/class_m_object.html\">MObject</a> mOutTransOpArrayAttr;</div>\n\
<div class=\"line\">    <span class=\"keyword\">static</span> <a class=\"code\" href=\"#!/url=./cpp_ref/class_m_object.html\">MObject</a> mOutLocatorPosScaleArrayAttr;</div>\n\
<div class=\"line\"></div>\n\
<div class=\"line\">    <span class=\"comment\">// output informational attrs</span></div>\n\
<div class=\"line\">    <span class=\"keyword\">static</span> <a class=\"code\" href=\"#!/url=./cpp_ref/class_m_object.html\">MObject</a> mStartFrameAttr;</div>\n\
<div class=\"line\">    <span class=\"keyword\">static</span> <a class=\"code\" href=\"#!/url=./cpp_ref/class_m_object.html\">MObject</a> mEndFrameAttr;</div>\n\
<div class=\"line\"></div>\n\
<div class=\"line\">    <span class=\"comment\">// override virtual methods from MPxNode</span></div>\n\
<div class=\"line\">    <span class=\"keyword\">virtual</span> <a name=\"_a3\"></a><a class=\"code\" href=\"#!/url=./cpp_ref/class_m_status.html\">MStatus</a> <a name=\"a4\"></a><a class=\"code\" href=\"#!/url=./cpp_ref/class_m_px_node.html#a5cb7edfa1f67c75588bec1c38b7bf5f8\">compute</a>(<span class=\"keyword\">const</span> <a name=\"_a5\"></a><a class=\"code\" href=\"#!/url=./cpp_ref/class_m_plug.html\">MPlug</a> &amp; plug, <a name=\"_a6\"></a><a class=\"code\" href=\"#!/url=./cpp_ref/class_m_data_block.html\">MDataBlock</a> &amp; dataBlock);</div>\n\
<div class=\"line\"></div>\n\
<div class=\"line\">    <span class=\"comment\">// return a pointer to a new instance of the class</span></div>\n\
<div class=\"line\">    <span class=\"comment\">// (derived from MPxNode) that implements the new node type</span></div>\n\
<div class=\"line\">    <span class=\"keyword\">static</span> <span class=\"keywordtype\">void</span>* creator() { <span class=\"keywordflow\">return</span> (<span class=\"keyword\">new</span> AlembicNode()); }</div>\n\
<div class=\"line\"></div>\n\
<div class=\"line\">    <span class=\"comment\">// override virtual methods from MPxNode</span></div>\n\
<div class=\"line\">    <span class=\"keyword\">virtual</span> <a class=\"code\" href=\"#!/url=./cpp_ref/class_m_status.html\">MStatus</a> <a name=\"a7\"></a><a class=\"code\" href=\"#!/url=./cpp_ref/class_m_px_node.html#abd7d1dad4e4f0b922bf5ac4fc9c0230a\">setDependentsDirty</a>(<span class=\"keyword\">const</span> <a class=\"code\" href=\"#!/url=./cpp_ref/class_m_plug.html\">MPlug</a>&amp; plug, <a name=\"_a8\"></a><a class=\"code\" href=\"#!/url=./cpp_ref/class_m_plug_array.html\">MPlugArray</a>&amp; plugArray);</div>\n\
<div class=\"line\">    <span class=\"keyword\">virtual</span> <span class=\"keywordtype\">bool</span> <a name=\"a9\"></a><a class=\"code\" href=\"#!/url=./cpp_ref/class_m_px_node.html#a10946d26d90a65b82a061305b1ee019a\">isPassiveOutput</a>(<span class=\"keyword\">const</span> <a class=\"code\" href=\"#!/url=./cpp_ref/class_m_plug.html\">MPlug</a> &amp; plug) <span class=\"keyword\">const</span>;</div>\n\
<div class=\"line\">    <span class=\"keyword\">virtual</span> SchedulingType <a name=\"a10\"></a><a class=\"code\" href=\"#!/url=./cpp_ref/class_m_px_node.html#a9c9e8bdcf0b5283a027a66a7671b7088\">schedulingType</a>()<span class=\"keyword\">const</span>;</div>\n\
<div class=\"line\"></div>\n\
<div class=\"line\">    <span class=\"comment\">// initialize all the attributes to default values</span></div>\n\
<div class=\"line\">    <span class=\"keyword\">static</span> <a class=\"code\" href=\"#!/url=./cpp_ref/class_m_status.html\">MStatus</a> initialize();</div>\n\
<div class=\"line\"></div>\n\
<div class=\"line\">    <span class=\"comment\">// override virtual methods from MPxNode, returns the list of</span></div>\n\
<div class=\"line\">    <span class=\"comment\">// files to archive.</span></div>\n\
<div class=\"line\">    <span class=\"keyword\">virtual</span> <a name=\"_a11\"></a><a class=\"code\" href=\"#!/url=./cpp_ref/class_m_string_array.html\">MStringArray</a> <a name=\"a12\"></a><a class=\"code\" href=\"#!/url=./cpp_ref/class_m_px_node.html#aae473f13648099a8046a067e45d35a2d\">getFilesToArchive</a>(<span class=\"keywordtype\">bool</span> shortName,</div>\n\
<div class=\"line\">                                           <span class=\"keywordtype\">bool</span> unresolvedName,</div>\n\
<div class=\"line\">                                           <span class=\"keywordtype\">bool</span> markCouldBeImageSequence) <span class=\"keyword\">const</span>;</div>\n\
<div class=\"line\">    <span class=\"keyword\">virtual</span> <span class=\"keywordtype\">void</span> <a name=\"a13\"></a><a class=\"code\" href=\"#!/url=./cpp_ref/class_m_px_node.html#abfc494661ea0f7f957a9e437cebb2642\">getExternalContent</a>(<a name=\"_a14\"></a><a class=\"code\" href=\"#!/url=./cpp_ref/class_m_external_content_info_table.html\">MExternalContentInfoTable</a>&amp; table) <span class=\"keyword\">const</span>;</div>\n\
<div class=\"line\">    <span class=\"keyword\">virtual</span> <span class=\"keywordtype\">void</span> <a name=\"a15\"></a><a class=\"code\" href=\"#!/url=./cpp_ref/class_m_px_node.html#a6f6412d2df249be356a8f2cf5844b763\">setExternalContent</a>(<span class=\"keyword\">const</span> <a name=\"_a16\"></a><a class=\"code\" href=\"#!/url=./cpp_ref/class_m_external_content_location_table.html\">MExternalContentLocationTable</a>&amp; table);</div>\n\
<div class=\"line\"></div>\n\
<div class=\"line\">    <span class=\"keywordtype\">void</span>   setDebugMode(<span class=\"keywordtype\">bool</span> iDebugOn){ mDebugOn = iDebugOn; }</div>\n\
<div class=\"line\">    <span class=\"keywordtype\">void</span>   setIncludeFilterString(<span class=\"keyword\">const</span> <a name=\"_a17\"></a><a class=\"code\" href=\"#!/url=./cpp_ref/class_m_string.html\">MString</a> &amp; iIncludeFilterString)</div>\n\
<div class=\"line\">    {</div>\n\
<div class=\"line\">        mIncludeFilterString = iIncludeFilterString;</div>\n\
<div class=\"line\">    }</div>\n\
<div class=\"line\">    <span class=\"keywordtype\">void</span>   setExcludeFilterString(<span class=\"keyword\">const</span> <a class=\"code\" href=\"#!/url=./cpp_ref/class_m_string.html\">MString</a> &amp; iExcludeFilterString)</div>\n\
<div class=\"line\">    {</div>\n\
<div class=\"line\">        mExcludeFilterString = iExcludeFilterString;</div>\n\
<div class=\"line\">    }</div>\n\
<div class=\"line\"></div>\n\
<div class=\"line\"><span class=\"keyword\">private</span>:</div>\n\
<div class=\"line\">    <span class=\"comment\">// compute the adjusted time from inputTime, speed and time offset.</span></div>\n\
<div class=\"line\">    <span class=\"keywordtype\">double</span> computeAdjustedTime(<span class=\"keyword\">const</span> <span class=\"keywordtype\">double</span> inputTime,</div>\n\
<div class=\"line\">                               <span class=\"keyword\">const</span> <span class=\"keywordtype\">double</span> speed,</div>\n\
<div class=\"line\">                               <span class=\"keyword\">const</span> <span class=\"keywordtype\">double</span> timeOffset);</div>\n\
<div class=\"line\"></div>\n\
<div class=\"line\">    <span class=\"comment\">// retime based on the playstyle: hold(use current time), loop and bound</span></div>\n\
<div class=\"line\">    <span class=\"keyword\">enum</span></div>\n\
<div class=\"line\">    {</div>\n\
<div class=\"line\">        PLAYTYPE_HOLD = 0,</div>\n\
<div class=\"line\">        PLAYTYPE_LOOP,</div>\n\
<div class=\"line\">        PLAYTYPE_REVERSE,</div>\n\
<div class=\"line\">        PLAYTYPE_BOUNCE</div>\n\
<div class=\"line\">    };</div>\n\
<div class=\"line\">    <span class=\"keywordtype\">double</span> computeRetime(<span class=\"keyword\">const</span> <span class=\"keywordtype\">double</span> inputTime,</div>\n\
<div class=\"line\">                         <span class=\"keyword\">const</span> <span class=\"keywordtype\">double</span> firstTime,</div>\n\
<div class=\"line\">                         <span class=\"keyword\">const</span> <span class=\"keywordtype\">double</span> lastTime,</div>\n\
<div class=\"line\">                         <span class=\"keyword\">const</span> <span class=\"keywordtype\">short</span> playStyle);</div>\n\
<div class=\"line\">    <span class=\"keywordtype\">double</span> getFPS();</div>\n\
<div class=\"line\"></div>\n\
<div class=\"line\">    <span class=\"comment\">// flag indicating if the input file should be opened again</span></div>\n\
<div class=\"line\">    <span class=\"keywordtype\">bool</span>    mFileInitialized;</div>\n\
<div class=\"line\"></div>\n\
<div class=\"line\">    <span class=\"comment\">// flag indicating either this is the first time a mesh plug is computed or</span></div>\n\
<div class=\"line\">    <span class=\"comment\">// there&#39;s a topology change from last frame to this one</span></div>\n\
<div class=\"line\">    <span class=\"keywordtype\">bool</span>    mSubDInitialized;</div>\n\
<div class=\"line\">    <span class=\"keywordtype\">bool</span>    mPolyInitialized;</div>\n\
<div class=\"line\"></div>\n\
<div class=\"line\">    <span class=\"keywordtype\">double</span>   mSequenceStartTime;</div>\n\
<div class=\"line\">    <span class=\"keywordtype\">double</span>   mSequenceEndTime;</div>\n\
<div class=\"line\">    <span class=\"keywordtype\">double</span>   mCurTime;</div>\n\
<div class=\"line\"></div>\n\
<div class=\"line\">    <span class=\"keywordtype\">bool</span>    mDebugOn;</div>\n\
<div class=\"line\"></div>\n\
<div class=\"line\">    <span class=\"comment\">// bool for each output plug, (the 2 transform plugs are lumped together,</span></div>\n\
<div class=\"line\">    <span class=\"comment\">// when updating) this is to prevent rereading the same</span></div>\n\
<div class=\"line\">    <span class=\"comment\">// frame when above or below the frame range</span></div>\n\
<div class=\"line\">    std::vector&lt;bool&gt; mOutRead;</div>\n\
<div class=\"line\"></div>\n\
<div class=\"line\">    <span class=\"keywordtype\">bool</span>    mConnect;</div>\n\
<div class=\"line\">    <span class=\"keywordtype\">bool</span>    mCreateIfNotFound;</div>\n\
<div class=\"line\">    <span class=\"keywordtype\">bool</span>    mRemoveIfNoUpdate;</div>\n\
<div class=\"line\">    <a class=\"code\" href=\"#!/url=./cpp_ref/class_m_string.html\">MString</a> mConnectRootNodes;</div>\n\
<div class=\"line\">    <a class=\"code\" href=\"#!/url=./cpp_ref/class_m_string.html\">MString</a> mIncludeFilterString;</div>\n\
<div class=\"line\">    <a class=\"code\" href=\"#!/url=./cpp_ref/class_m_string.html\">MString</a> mExcludeFilterString;</div>\n\
<div class=\"line\"></div>\n\
<div class=\"line\">    WriterData mData;</div>\n\
<div class=\"line\">};</div>\n\
<div class=\"line\"></div>\n\
<div class=\"line\"><span class=\"preprocessor\">#endif  // ABCIMPORT_ALEMBIC_NODE_H_</span></div>\n\
</div><!-- fragment --> </div><!-- contents -->\n\
</div><!-- doc-content -->\n\
          <div class=\"footer-block\"><a href=\"../html/ac.cmtdialog.htm\" class=\"comments-anchor\" target=\"_blank\"><span class=\"comments-link\">Please send us your comment about this page</span></a></div><br></div>\n\
   </div></body>\n\
</html>\n\
";