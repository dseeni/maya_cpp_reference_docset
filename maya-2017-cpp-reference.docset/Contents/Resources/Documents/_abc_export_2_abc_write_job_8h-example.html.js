var topic = "<!-- saved from url=(0024)http://docs.autodesk.com -->\n\
<html>\n\
   <head><script src=\"../scripts/yepnope.1.5.4-min.js\" type=\"text/javascript\"></script><script src=\"../scripts/lib/jquery-1.11.1.min.js\" type=\"text/javascript\"></script><meta http-equiv=\"Content-Type\" content=\"text/html; charset=UTF-8\"><meta name=\"product\" content=\"MAYAUL\"><meta name=\"release\" content=\"2017\"><meta name=\"book\" content=\"Developer\"><meta name=\"created\" content=\"2016-06-16\"><meta name=\"topicid\" content=\"GUID-02DEF634-1E7B-48C6-8ACD-2C934CA97887\"><meta name=\"topic-type\" content=\"concept\">\n\
      <title>AbcExport/AbcWriteJob.h</title>\n\
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
    cpp_ref_adsk_ref_toc.initNavTree(\'_abc_export_2_abc_write_job_8h-example.html\', tocPrefix);\n\
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
            <h1>AbcExport/AbcWriteJob.h</h1>\n\
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
<div class=\"title\">AbcExport/AbcWriteJob.h</div>  </div>\n\
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
<div class=\"line\"><span class=\"preprocessor\">#ifndef _AbcExport_AbcWriteJob_h_</span></div>\n\
<div class=\"line\"><span class=\"preprocessor\">#define _AbcExport_AbcWriteJob_h_</span></div>\n\
<div class=\"line\"></div>\n\
<div class=\"line\"><span class=\"preprocessor\">#include &quot;Foundation.h&quot;</span></div>\n\
<div class=\"line\"></div>\n\
<div class=\"line\"><span class=\"preprocessor\">#include &quot;MayaCameraWriter.h&quot;</span></div>\n\
<div class=\"line\"><span class=\"preprocessor\">#include &quot;MayaMeshWriter.h&quot;</span></div>\n\
<div class=\"line\"><span class=\"preprocessor\">#include &quot;MayaNurbsCurveWriter.h&quot;</span></div>\n\
<div class=\"line\"><span class=\"preprocessor\">#include &quot;MayaPointPrimitiveWriter.h&quot;</span></div>\n\
<div class=\"line\"><span class=\"preprocessor\">#include &quot;MayaTransformWriter.h&quot;</span></div>\n\
<div class=\"line\"><span class=\"preprocessor\">#include &quot;MayaLocatorWriter.h&quot;</span></div>\n\
<div class=\"line\"><span class=\"preprocessor\">#include &quot;MayaNurbsSurfaceWriter.h&quot;</span></div>\n\
<div class=\"line\"></div>\n\
<div class=\"line\"><span class=\"preprocessor\">#include &quot;MayaUtility.h&quot;</span></div>\n\
<div class=\"line\"></div>\n\
<div class=\"line\"><span class=\"keyword\">typedef</span> Alembic::Util::shared_ptr &lt; MayaMeshWriter &gt;</div>\n\
<div class=\"line\">    MayaMeshWriterPtr;</div>\n\
<div class=\"line\"><span class=\"keyword\">typedef</span> Alembic::Util::shared_ptr &lt; MayaNurbsCurveWriter &gt;</div>\n\
<div class=\"line\">    MayaNurbsCurveWriterPtr;</div>\n\
<div class=\"line\"><span class=\"keyword\">typedef</span> Alembic::Util::shared_ptr &lt; MayaCameraWriter &gt;</div>\n\
<div class=\"line\">    MayaCameraWriterPtr;</div>\n\
<div class=\"line\"><span class=\"keyword\">typedef</span> Alembic::Util::shared_ptr &lt; MayaLocatorWriter &gt;</div>\n\
<div class=\"line\">    MayaLocatorWriterPtr;</div>\n\
<div class=\"line\"><span class=\"keyword\">typedef</span> Alembic::Util::shared_ptr &lt; MayaPointPrimitiveWriter &gt;</div>\n\
<div class=\"line\">    MayaPointPrimitiveWriterPtr;</div>\n\
<div class=\"line\"><span class=\"keyword\">typedef</span> Alembic::Util::shared_ptr &lt; MayaNurbsSurfaceWriter &gt;</div>\n\
<div class=\"line\">    MayaNurbsSurfaceWriterPtr;</div>\n\
<div class=\"line\"></div>\n\
<div class=\"line\"><span class=\"keyword\">struct </span>AbcWriteJobStatistics</div>\n\
<div class=\"line\">{</div>\n\
<div class=\"line\">    AbcWriteJobStatistics()</div>\n\
<div class=\"line\">    {</div>\n\
<div class=\"line\">        mSubDStaticNum = 0;</div>\n\
<div class=\"line\">        mSubDAnimNum = 0;</div>\n\
<div class=\"line\">        mSubDStaticFaces = 0;</div>\n\
<div class=\"line\">        mSubDAnimFaces = 0;</div>\n\
<div class=\"line\">        mSubDStaticCVs = 0;</div>\n\
<div class=\"line\">        mSubDAnimCVs = 0;</div>\n\
<div class=\"line\"></div>\n\
<div class=\"line\">        mPolyStaticNum = 0;</div>\n\
<div class=\"line\">        mPolyAnimNum = 0;</div>\n\
<div class=\"line\">        mPolyStaticFaces = 0;</div>\n\
<div class=\"line\">        mPolyAnimFaces = 0;</div>\n\
<div class=\"line\">        mPolyStaticCVs = 0;</div>\n\
<div class=\"line\">        mPolyAnimCVs = 0;</div>\n\
<div class=\"line\"></div>\n\
<div class=\"line\">        mCurveStaticNum = 0;</div>\n\
<div class=\"line\">        mCurveStaticCurves = 0;</div>\n\
<div class=\"line\">        mCurveAnimNum = 0;</div>\n\
<div class=\"line\">        mCurveAnimCurves = 0;</div>\n\
<div class=\"line\">        mCurveStaticCVs = 0;</div>\n\
<div class=\"line\">        mCurveAnimCVs = 0;</div>\n\
<div class=\"line\"></div>\n\
<div class=\"line\">        mPointStaticNum = 0;</div>\n\
<div class=\"line\">        mPointAnimNum = 0;</div>\n\
<div class=\"line\">        mPointStaticCVs = 0;</div>\n\
<div class=\"line\">        mPointAnimCVs = 0;</div>\n\
<div class=\"line\"></div>\n\
<div class=\"line\">        mNurbsStaticNum = 0;</div>\n\
<div class=\"line\">        mNurbsAnimNum = 0;</div>\n\
<div class=\"line\">        mNurbsStaticCVs = 0;</div>\n\
<div class=\"line\">        mNurbsAnimCVs = 0;</div>\n\
<div class=\"line\"></div>\n\
<div class=\"line\">        mTransStaticNum = 0;</div>\n\
<div class=\"line\">        mTransAnimNum = 0;</div>\n\
<div class=\"line\"></div>\n\
<div class=\"line\">        mLocatorStaticNum = 0;</div>\n\
<div class=\"line\">        mLocatorAnimNum = 0;</div>\n\
<div class=\"line\"></div>\n\
<div class=\"line\">        mCameraStaticNum = 0;</div>\n\
<div class=\"line\">        mCameraAnimNum = 0;</div>\n\
<div class=\"line\">    }</div>\n\
<div class=\"line\"></div>\n\
<div class=\"line\">    <span class=\"comment\">// for the statistic string</span></div>\n\
<div class=\"line\">    <span class=\"keywordtype\">unsigned</span> <span class=\"keywordtype\">int</span> mSubDStaticNum;</div>\n\
<div class=\"line\">    <span class=\"keywordtype\">unsigned</span> <span class=\"keywordtype\">int</span> mSubDAnimNum;</div>\n\
<div class=\"line\">    <span class=\"keywordtype\">unsigned</span> <span class=\"keywordtype\">int</span> mSubDStaticFaces;</div>\n\
<div class=\"line\">    <span class=\"keywordtype\">unsigned</span> <span class=\"keywordtype\">int</span> mSubDAnimFaces;</div>\n\
<div class=\"line\">    <span class=\"keywordtype\">unsigned</span> <span class=\"keywordtype\">int</span> mSubDStaticCVs;</div>\n\
<div class=\"line\">    <span class=\"keywordtype\">unsigned</span> <span class=\"keywordtype\">int</span> mSubDAnimCVs;</div>\n\
<div class=\"line\"></div>\n\
<div class=\"line\">    <span class=\"keywordtype\">unsigned</span> <span class=\"keywordtype\">int</span> mPolyStaticNum;</div>\n\
<div class=\"line\">    <span class=\"keywordtype\">unsigned</span> <span class=\"keywordtype\">int</span> mPolyAnimNum;</div>\n\
<div class=\"line\">    <span class=\"keywordtype\">unsigned</span> <span class=\"keywordtype\">int</span> mPolyStaticFaces;</div>\n\
<div class=\"line\">    <span class=\"keywordtype\">unsigned</span> <span class=\"keywordtype\">int</span> mPolyAnimFaces;</div>\n\
<div class=\"line\">    <span class=\"keywordtype\">unsigned</span> <span class=\"keywordtype\">int</span> mPolyStaticCVs;</div>\n\
<div class=\"line\">    <span class=\"keywordtype\">unsigned</span> <span class=\"keywordtype\">int</span> mPolyAnimCVs;</div>\n\
<div class=\"line\"></div>\n\
<div class=\"line\">    <span class=\"keywordtype\">unsigned</span> <span class=\"keywordtype\">int</span> mCurveStaticNum;</div>\n\
<div class=\"line\">    <span class=\"keywordtype\">unsigned</span> <span class=\"keywordtype\">int</span> mCurveStaticCurves;</div>\n\
<div class=\"line\">    <span class=\"keywordtype\">unsigned</span> <span class=\"keywordtype\">int</span> mCurveAnimNum;</div>\n\
<div class=\"line\">    <span class=\"keywordtype\">unsigned</span> <span class=\"keywordtype\">int</span> mCurveAnimCurves;</div>\n\
<div class=\"line\">    <span class=\"keywordtype\">unsigned</span> <span class=\"keywordtype\">int</span> mCurveStaticCVs;</div>\n\
<div class=\"line\">    <span class=\"keywordtype\">unsigned</span> <span class=\"keywordtype\">int</span> mCurveAnimCVs;</div>\n\
<div class=\"line\"></div>\n\
<div class=\"line\">    <span class=\"keywordtype\">unsigned</span> <span class=\"keywordtype\">int</span> mPointStaticNum;</div>\n\
<div class=\"line\">    <span class=\"keywordtype\">unsigned</span> <span class=\"keywordtype\">int</span> mPointAnimNum;</div>\n\
<div class=\"line\">    <span class=\"keywordtype\">unsigned</span> <span class=\"keywordtype\">int</span> mPointStaticCVs;</div>\n\
<div class=\"line\">    <span class=\"keywordtype\">unsigned</span> <span class=\"keywordtype\">int</span> mPointAnimCVs;</div>\n\
<div class=\"line\"></div>\n\
<div class=\"line\">    <span class=\"keywordtype\">unsigned</span> <span class=\"keywordtype\">int</span> mNurbsStaticNum;</div>\n\
<div class=\"line\">    <span class=\"keywordtype\">unsigned</span> <span class=\"keywordtype\">int</span> mNurbsAnimNum;</div>\n\
<div class=\"line\">    <span class=\"keywordtype\">unsigned</span> <span class=\"keywordtype\">int</span> mNurbsStaticCVs;</div>\n\
<div class=\"line\">    <span class=\"keywordtype\">unsigned</span> <span class=\"keywordtype\">int</span> mNurbsAnimCVs;</div>\n\
<div class=\"line\"></div>\n\
<div class=\"line\">    <span class=\"keywordtype\">unsigned</span> <span class=\"keywordtype\">int</span> mTransStaticNum;</div>\n\
<div class=\"line\">    <span class=\"keywordtype\">unsigned</span> <span class=\"keywordtype\">int</span> mTransAnimNum;</div>\n\
<div class=\"line\"></div>\n\
<div class=\"line\">    <span class=\"keywordtype\">unsigned</span> <span class=\"keywordtype\">int</span> mLocatorStaticNum;</div>\n\
<div class=\"line\">    <span class=\"keywordtype\">unsigned</span> <span class=\"keywordtype\">int</span> mLocatorAnimNum;</div>\n\
<div class=\"line\"></div>\n\
<div class=\"line\">    <span class=\"keywordtype\">unsigned</span> <span class=\"keywordtype\">int</span> mCameraStaticNum;</div>\n\
<div class=\"line\">    <span class=\"keywordtype\">unsigned</span> <span class=\"keywordtype\">int</span> mCameraAnimNum;</div>\n\
<div class=\"line\">};</div>\n\
<div class=\"line\"></div>\n\
<div class=\"line\"><span class=\"keyword\">class </span>AbcWriteJob</div>\n\
<div class=\"line\">{</div>\n\
<div class=\"line\">  <span class=\"keyword\">public</span>:</div>\n\
<div class=\"line\"></div>\n\
<div class=\"line\">    AbcWriteJob(<span class=\"keyword\">const</span> <span class=\"keywordtype\">char</span> * iFileName, <span class=\"keywordtype\">bool</span> asOgawa,</div>\n\
<div class=\"line\">        std::set&lt;double&gt; &amp; iTransFrames,</div>\n\
<div class=\"line\">        Alembic::AbcCoreAbstract::TimeSamplingPtr iTransTime,</div>\n\
<div class=\"line\">        std::set&lt;double&gt; &amp; iShapeFrames,</div>\n\
<div class=\"line\">        Alembic::AbcCoreAbstract::TimeSamplingPtr iShapeTime,</div>\n\
<div class=\"line\">        <span class=\"keyword\">const</span> JobArgs &amp; iArgs);</div>\n\
<div class=\"line\"></div>\n\
<div class=\"line\">    ~AbcWriteJob();</div>\n\
<div class=\"line\"></div>\n\
<div class=\"line\">    <span class=\"comment\">// returns true if eval has been called on the last frame</span></div>\n\
<div class=\"line\">    <span class=\"keywordtype\">bool</span> eval(<span class=\"keywordtype\">double</span> iFrame);</div>\n\
<div class=\"line\"></div>\n\
<div class=\"line\">  <span class=\"keyword\">private</span>:</div>\n\
<div class=\"line\"></div>\n\
<div class=\"line\">    <span class=\"keywordtype\">void</span> perFrameCallback(<span class=\"keywordtype\">double</span> iFrame);</div>\n\
<div class=\"line\">    <span class=\"keywordtype\">void</span> postCallback(<span class=\"keywordtype\">double</span> iFrame);</div>\n\
<div class=\"line\"></div>\n\
<div class=\"line\">    <a name=\"_a0\"></a><a class=\"code\" href=\"#!/url=./cpp_ref/class_m_bounding_box.html\">MBoundingBox</a> getBoundingBox(<span class=\"keywordtype\">double</span> iFrame, <span class=\"keyword\">const</span> <a name=\"_a1\"></a><a class=\"code\" href=\"#!/url=./cpp_ref/class_m_matrix.html\">MMatrix</a> &amp; eMInvMat);</div>\n\
<div class=\"line\">    <span class=\"keywordtype\">void</span> setup(<span class=\"keywordtype\">double</span> iFrame, MayaTransformWriterPtr iParent,</div>\n\
<div class=\"line\">               GetMembersMap&amp; gmMap);</div>\n\
<div class=\"line\"></div>\n\
<div class=\"line\">    <span class=\"comment\">// Currently Arnold and Renderman can not handle curve groups where the</span></div>\n\
<div class=\"line\">    <span class=\"comment\">// degrees and closed status are different per curve.</span></div>\n\
<div class=\"line\">    <span class=\"comment\">// return true if the degree and close state of each curve</span></div>\n\
<div class=\"line\">    <span class=\"comment\">// in the group is the same</span></div>\n\
<div class=\"line\">    <span class=\"keywordtype\">bool</span> checkCurveGrp();</div>\n\
<div class=\"line\"></div>\n\
<div class=\"line\">    std::vector&lt; MayaTransformWriterPtr &gt; mTransList;</div>\n\
<div class=\"line\">    std::vector&lt; AttributesWriterPtr &gt; mTransAttrList;</div>\n\
<div class=\"line\"></div>\n\
<div class=\"line\">    std::vector&lt; MayaCameraWriterPtr &gt; mCameraList;</div>\n\
<div class=\"line\">    std::vector&lt; MayaMeshWriterPtr &gt; mMeshList;</div>\n\
<div class=\"line\">    std::vector&lt; MayaNurbsCurveWriterPtr &gt; mCurveList;</div>\n\
<div class=\"line\">    std::vector&lt; MayaNurbsSurfaceWriterPtr &gt; mNurbsList;</div>\n\
<div class=\"line\">    std::vector&lt; MayaLocatorWriterPtr &gt; mLocatorList;</div>\n\
<div class=\"line\">    std::vector&lt; MayaPointPrimitiveWriterPtr &gt; mPointList;</div>\n\
<div class=\"line\">    std::vector&lt; AttributesWriterPtr &gt; mShapeAttrList;</div>\n\
<div class=\"line\"></div>\n\
<div class=\"line\">    <span class=\"comment\">// helper dag path map for bounding box calculation</span></div>\n\
<div class=\"line\">    std::map&lt; MDagPath, util::ShapeSet, util::cmpDag &gt; mBBoxShapeMap;</div>\n\
<div class=\"line\"></div>\n\
<div class=\"line\">    <span class=\"comment\">// helper dag path for recursive calculations</span></div>\n\
<div class=\"line\">    <a name=\"_a2\"></a><a class=\"code\" href=\"#!/url=./cpp_ref/class_m_dag_path.html\">MDagPath</a> mCurDag;</div>\n\
<div class=\"line\"></div>\n\
<div class=\"line\">    <span class=\"comment\">// the root world node of the scene</span></div>\n\
<div class=\"line\">    Alembic::Abc::OArchive mRoot;</div>\n\
<div class=\"line\"></div>\n\
<div class=\"line\">    std::string mFileName;</div>\n\
<div class=\"line\">    <span class=\"keywordtype\">bool</span> mAsOgawa;</div>\n\
<div class=\"line\"></div>\n\
<div class=\"line\">    <a name=\"_a3\"></a><a class=\"code\" href=\"#!/url=./cpp_ref/class_m_selection_list.html\">MSelectionList</a> mSList;</div>\n\
<div class=\"line\">    std::set&lt;double&gt; mShapeFrames;</div>\n\
<div class=\"line\">    Alembic::AbcCoreAbstract::TimeSamplingPtr mShapeTime;</div>\n\
<div class=\"line\">    Alembic::Util::uint32_t mShapeTimeIndex;</div>\n\
<div class=\"line\">    Alembic::Util::uint32_t mShapeSamples;</div>\n\
<div class=\"line\"></div>\n\
<div class=\"line\">    std::set&lt;double&gt; mTransFrames;</div>\n\
<div class=\"line\">    Alembic::AbcCoreAbstract::TimeSamplingPtr mTransTime;</div>\n\
<div class=\"line\">    Alembic::Util::uint32_t mTransTimeIndex;</div>\n\
<div class=\"line\">    Alembic::Util::uint32_t mTransSamples;</div>\n\
<div class=\"line\"></div>\n\
<div class=\"line\">    <span class=\"comment\">// when eval is called and the time is the first frame</span></div>\n\
<div class=\"line\">    <span class=\"comment\">// then we run the setup</span></div>\n\
<div class=\"line\">    <span class=\"keywordtype\">double</span> mFirstFrame;</div>\n\
<div class=\"line\"></div>\n\
<div class=\"line\">    <span class=\"comment\">// when eval is called and the time is the last frame</span></div>\n\
<div class=\"line\">    <span class=\"comment\">// then we also call the post callback</span></div>\n\
<div class=\"line\">    <span class=\"keywordtype\">double</span> mLastFrame;</div>\n\
<div class=\"line\"></div>\n\
<div class=\"line\">    Alembic::Abc::OBox3dProperty mBoxProp;</div>\n\
<div class=\"line\">    <span class=\"keywordtype\">unsigned</span> <span class=\"keywordtype\">int</span> mBoxIndex;</div>\n\
<div class=\"line\"></div>\n\
<div class=\"line\">    AbcWriteJobStatistics mStats;</div>\n\
<div class=\"line\">    JobArgs mArgs;</div>\n\
<div class=\"line\">};</div>\n\
<div class=\"line\"></div>\n\
<div class=\"line\"><span class=\"keyword\">typedef</span> Alembic::Util::shared_ptr &lt; AbcWriteJob &gt; AbcWriteJobPtr;</div>\n\
<div class=\"line\"></div>\n\
<div class=\"line\"><span class=\"preprocessor\">#endif  // _AbcExport_AbcWriteJob_h_</span></div>\n\
</div><!-- fragment --> </div><!-- contents -->\n\
</div><!-- doc-content -->\n\
          <div class=\"footer-block\"><a href=\"../html/ac.cmtdialog.htm\" class=\"comments-anchor\" target=\"_blank\"><span class=\"comments-link\">Please send us your comment about this page</span></a></div><br></div>\n\
   </div></body>\n\
</html>\n\
";