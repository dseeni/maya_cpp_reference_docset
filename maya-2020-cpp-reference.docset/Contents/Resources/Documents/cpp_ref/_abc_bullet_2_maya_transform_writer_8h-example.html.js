var topic = "<!-- saved from url=(0024)http://docs.autodesk.com -->\n\
<html>\n\
   <head><script src=\"../scripts/yepnope.1.5.4-min.js\" type=\"text/javascript\"></script><script src=\"../scripts/lib/jquery-1.11.1.min.js\" type=\"text/javascript\"></script>\n\
      <title>C++ API Reference: AbcBullet/MayaTransformWriter.h</title>\n\
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
    cpp_ref_adsk_ref_toc.initNavTree(\'_abc_bullet_2_maya_transform_writer_8h-example.html\', tocPrefix);\n\
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
            <h1>C++ API Reference: AbcBullet/MayaTransformWriter.h</h1>\n\
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
<div class=\"title\">AbcBullet/MayaTransformWriter.h</div>  </div>\n\
</div><!--header-->\n\
<div class=\"contents\">\n\
<div class=\"fragment\"><div class=\"line\"><span class=\"comment\">//-*****************************************************************************</span></div>\n\
<div class=\"line\"><span class=\"comment\">//</span></div>\n\
<div class=\"line\"><span class=\"comment\">// Copyright (c) 2009-2011,</span></div>\n\
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
<div class=\"line\"><span class=\"preprocessor\">#ifndef _AlembicExport_MayaTransformWriter_h_</span></div>\n\
<div class=\"line\"><span class=\"preprocessor\">#define _AlembicExport_MayaTransformWriter_h_</span></div>\n\
<div class=\"line\"></div>\n\
<div class=\"line\"><span class=\"preprocessor\">#include &quot;Foundation.h&quot;</span></div>\n\
<div class=\"line\"></div>\n\
<div class=\"line\"><span class=\"preprocessor\">#include &lt;Alembic/AbcGeom/OXform.h&gt;</span></div>\n\
<div class=\"line\"><span class=\"preprocessor\">#include &lt;Alembic/AbcGeom/XformOp.h&gt;</span></div>\n\
<div class=\"line\"></div>\n\
<div class=\"line\"><span class=\"preprocessor\">#include &quot;AttributesWriter.h&quot;</span></div>\n\
<div class=\"line\"></div>\n\
<div class=\"line\"><span class=\"comment\">// AnimChan contains what animated plugs to get as a double, and the helper</span></div>\n\
<div class=\"line\"><span class=\"comment\">// info about what operation and which channel to set in mSample</span></div>\n\
<div class=\"line\"><span class=\"keyword\">struct </span>AnimSampler;</div>\n\
<div class=\"line\"></div>\n\
<div class=\"line\"><span class=\"keyword\">struct </span>AnimChan</div>\n\
<div class=\"line\">{</div>\n\
<div class=\"line\">    AnimChan()</div>\n\
<div class=\"line\">    : scale(1.0)</div>\n\
<div class=\"line\">    , opNum(0)</div>\n\
<div class=\"line\">    , channelNum(0)</div>\n\
<div class=\"line\">    , channelOp(Alembic::AbcGeom::kScaleOperation)</div>\n\
<div class=\"line\">    , sampler(NULL)</div>\n\
<div class=\"line\">    {</div>\n\
<div class=\"line\">    }</div>\n\
<div class=\"line\"></div>\n\
<div class=\"line\">    <span class=\"keywordtype\">double</span> asDouble(<span class=\"keywordtype\">void</span>);</div>\n\
<div class=\"line\"></div>\n\
<div class=\"line\">    <span class=\"comment\">// extra value to multiply the data off of the plug by, used to invert</span></div>\n\
<div class=\"line\">    <span class=\"comment\">// certain operations, and convert radians to degrees</span></div>\n\
<div class=\"line\">    <span class=\"keywordtype\">double</span> scale;</div>\n\
<div class=\"line\"></div>\n\
<div class=\"line\">    <a name=\"_a0\"></a><a class=\"code\" href=\"#!/url=./cpp_ref/class_m_plug.html\">MPlug</a> plug;</div>\n\
<div class=\"line\">    AnimSampler* sampler;</div>\n\
<div class=\"line\"></div>\n\
<div class=\"line\">    std::size_t opNum;</div>\n\
<div class=\"line\">    Alembic::AbcGeom::XformOperationType channelOp;</div>\n\
<div class=\"line\">    Alembic::Util::uint32_t channelNum;</div>\n\
<div class=\"line\">};</div>\n\
<div class=\"line\"></div>\n\
<div class=\"line\"><span class=\"keyword\">struct </span>AnimSampler</div>\n\
<div class=\"line\">{</div>\n\
<div class=\"line\">    <span class=\"keyword\">virtual</span> ~AnimSampler() {;}</div>\n\
<div class=\"line\"></div>\n\
<div class=\"line\">    <span class=\"keyword\">virtual</span> <span class=\"keyword\">const</span> <a name=\"_a1\"></a><a class=\"code\" href=\"#!/url=./cpp_ref/class_m_string.html\">MString</a>&amp; name() <span class=\"keyword\">const</span> = 0;</div>\n\
<div class=\"line\">    <span class=\"keyword\">virtual</span> <span class=\"keywordtype\">double</span> asDouble(Alembic::AbcGeom::XformOperationType channelOp, Alembic::Util::uint32_t channelNum) = 0;</div>\n\
<div class=\"line\">    <span class=\"keyword\">virtual</span> AnimChan animChan(Alembic::AbcGeom::XformOperationType channelOp, Alembic::Util::uint32_t channelNum, <span class=\"keywordtype\">double</span> scale = 1.0)<span class=\"keyword\"> const </span></div>\n\
<div class=\"line\"><span class=\"keyword\">    </span>{</div>\n\
<div class=\"line\">        AnimChan chan;</div>\n\
<div class=\"line\"></div>\n\
<div class=\"line\">        chan.channelOp = channelOp;</div>\n\
<div class=\"line\">        chan.channelNum = channelNum;</div>\n\
<div class=\"line\">        chan.sampler = (AnimSampler*)<span class=\"keyword\">this</span>;</div>\n\
<div class=\"line\">        chan.scale = scale;</div>\n\
<div class=\"line\"></div>\n\
<div class=\"line\">        <span class=\"keywordflow\">return</span> chan;</div>\n\
<div class=\"line\">    }</div>\n\
<div class=\"line\"></div>\n\
<div class=\"line\">    <span class=\"keywordtype\">bool</span> isTranslationChannel(Alembic::AbcGeom::XformOperationType channelOp, Alembic::Util::uint32_t channelNum)<span class=\"keyword\"> const </span></div>\n\
<div class=\"line\"><span class=\"keyword\">    </span>{ </div>\n\
<div class=\"line\">        <span class=\"keywordflow\">return</span> channelOp == Alembic::AbcGeom::kTranslateOperation &amp;&amp; channelNum &lt;= 2 <span class=\"comment\">/* channel2 */</span>; </div>\n\
<div class=\"line\">    }</div>\n\
<div class=\"line\">    <span class=\"keywordtype\">bool</span> isRotationChannel(Alembic::AbcGeom::XformOperationType channelOp, Alembic::Util::uint32_t channelNum)<span class=\"keyword\"> const </span></div>\n\
<div class=\"line\"><span class=\"keyword\">    </span>{ </div>\n\
<div class=\"line\">        <span class=\"keywordflow\">return</span> channelOp &gt;= Alembic::AbcGeom::kRotateXOperation &amp;&amp; </div>\n\
<div class=\"line\">               channelOp &lt;= Alembic::AbcGeom::kRotateZOperation &amp;&amp; </div>\n\
<div class=\"line\">               channelNum &lt;= 2 <span class=\"comment\">/* channel2 */</span>; </div>\n\
<div class=\"line\">    }</div>\n\
<div class=\"line\"></div>\n\
<div class=\"line\">};</div>\n\
<div class=\"line\"></div>\n\
<div class=\"line\"><span class=\"keyword\">inline</span>  <span class=\"keywordtype\">double</span> AnimChan::asDouble(<span class=\"keywordtype\">void</span>)</div>\n\
<div class=\"line\">{</div>\n\
<div class=\"line\">    <span class=\"keywordflow\">return</span> (sampler) ? sampler-&gt;asDouble( channelOp, channelNum ) : plug.asDouble();</div>\n\
<div class=\"line\">}</div>\n\
<div class=\"line\"></div>\n\
<div class=\"line\"><span class=\"comment\">// Writes an MFnTransform</span></div>\n\
<div class=\"line\"><span class=\"keyword\">class </span>MayaTransformWriter</div>\n\
<div class=\"line\">{</div>\n\
<div class=\"line\"><span class=\"keyword\">public</span>:</div>\n\
<div class=\"line\">    <span class=\"keyword\">enum</span> {</div>\n\
<div class=\"line\">        kChannel0=0,</div>\n\
<div class=\"line\">        kChannel1=1,</div>\n\
<div class=\"line\">        kChannel2=2,</div>\n\
<div class=\"line\">    };</div>\n\
<div class=\"line\"></div>\n\
<div class=\"line\">    MayaTransformWriter(Alembic::Abc::OObject &amp; iParent, <a name=\"_a2\"></a><a class=\"code\" href=\"#!/url=./cpp_ref/class_m_dag_path.html\">MDagPath</a> &amp; iDag, </div>\n\
<div class=\"line\">        Alembic::Util::uint32_t iTimeIndex, <span class=\"keyword\">const</span> JobArgs &amp; iArgs);</div>\n\
<div class=\"line\"></div>\n\
<div class=\"line\">    MayaTransformWriter(MayaTransformWriter &amp; iParent, <a class=\"code\" href=\"#!/url=./cpp_ref/class_m_dag_path.html\">MDagPath</a> &amp; iDag,</div>\n\
<div class=\"line\">        Alembic::Util::uint32_t iTimeIndex, <span class=\"keyword\">const</span> JobArgs &amp; iArgs);</div>\n\
<div class=\"line\"></div>\n\
<div class=\"line\">    MayaTransformWriter(Alembic::Abc::OObject &amp; iParent, </div>\n\
<div class=\"line\">        <span class=\"keyword\">const</span> AnimSampler&amp; sampler, </div>\n\
<div class=\"line\">        Alembic::Util::uint32_t iTimeIndex, <span class=\"keyword\">const</span> JobArgs &amp; iArgs);</div>\n\
<div class=\"line\"></div>\n\
<div class=\"line\">    ~MayaTransformWriter();</div>\n\
<div class=\"line\">    <span class=\"keywordtype\">void</span> write();</div>\n\
<div class=\"line\">    <span class=\"keywordtype\">bool</span> isAnimated() <span class=\"keyword\">const</span>;</div>\n\
<div class=\"line\">    Alembic::Abc::OObject getObject() {<span class=\"keywordflow\">return</span> mSchema.getObject();};</div>\n\
<div class=\"line\">    AttributesWriterPtr getAttrs() {<span class=\"keywordflow\">return</span> mAttrs;};</div>\n\
<div class=\"line\"></div>\n\
<div class=\"line\"><span class=\"keyword\">private</span>:</div>\n\
<div class=\"line\"></div>\n\
<div class=\"line\">    Alembic::AbcGeom::OXformSchema mSchema;</div>\n\
<div class=\"line\">    AttributesWriterPtr mAttrs;</div>\n\
<div class=\"line\"></div>\n\
<div class=\"line\">    <span class=\"keywordtype\">void</span> pushTransformStack(<span class=\"keyword\">const</span> <a name=\"_a3\"></a><a class=\"code\" href=\"#!/url=./cpp_ref/class_m_fn_transform.html\">MFnTransform</a> &amp; iTrans, <span class=\"keywordtype\">bool</span> iForceStatic);</div>\n\
<div class=\"line\">    <span class=\"keywordtype\">void</span> pushTransformStack(<span class=\"keyword\">const</span> <a name=\"_a4\"></a><a class=\"code\" href=\"#!/url=./cpp_ref/class_m_fn_ik_joint.html\">MFnIkJoint</a> &amp; iTrans, <span class=\"keywordtype\">bool</span> iForceStatic);</div>\n\
<div class=\"line\">    <span class=\"keywordtype\">void</span> pushTransformStack(<span class=\"keyword\">const</span> AnimSampler&amp; sampler, <span class=\"keywordtype\">bool</span> iForceStatic);</div>\n\
<div class=\"line\"></div>\n\
<div class=\"line\">    Alembic::AbcGeom::XformSample mSample;</div>\n\
<div class=\"line\"></div>\n\
<div class=\"line\">    std::vector &lt; AnimChan &gt; mAnimChanList;</div>\n\
<div class=\"line\">    <a class=\"code\" href=\"#!/url=./cpp_ref/class_m_plug.html\">MPlug</a> mInheritsPlug;</div>\n\
<div class=\"line\"></div>\n\
<div class=\"line\">    <span class=\"keywordtype\">size_t</span> mJointOrientOpIndex[3];</div>\n\
<div class=\"line\">    <span class=\"keywordtype\">size_t</span> mRotateOpIndex[3];</div>\n\
<div class=\"line\">    <span class=\"keywordtype\">size_t</span> mRotateAxisOpIndex[3];</div>\n\
<div class=\"line\"></div>\n\
<div class=\"line\">    <span class=\"keywordtype\">bool</span> mVerbose;</div>\n\
<div class=\"line\">    <span class=\"keywordtype\">bool</span> mFilterEulerRotations;</div>\n\
<div class=\"line\"></div>\n\
<div class=\"line\">    <span class=\"comment\">// NOTE: should be able to get mName from mSchema</span></div>\n\
<div class=\"line\">    <a class=\"code\" href=\"#!/url=./cpp_ref/class_m_string.html\">MString</a> mName;</div>\n\
<div class=\"line\">    <a name=\"_a5\"></a><a class=\"code\" href=\"#!/url=./cpp_ref/class_m_euler_rotation.html\">MEulerRotation</a> mPrevJointOrientSolution;</div>\n\
<div class=\"line\">    <a class=\"code\" href=\"#!/url=./cpp_ref/class_m_euler_rotation.html\">MEulerRotation</a> mPrevRotateSolution;</div>\n\
<div class=\"line\">    <a class=\"code\" href=\"#!/url=./cpp_ref/class_m_euler_rotation.html\">MEulerRotation</a> mPrevRotateAxisSolution;</div>\n\
<div class=\"line\">};</div>\n\
<div class=\"line\"></div>\n\
<div class=\"line\"><span class=\"keyword\">typedef</span> Alembic::Util::shared_ptr &lt; MayaTransformWriter &gt;</div>\n\
<div class=\"line\">    MayaTransformWriterPtr;</div>\n\
<div class=\"line\"></div>\n\
<div class=\"line\"><span class=\"preprocessor\">#endif  // _AlembicExport_MayaTransformWriter_h_</span></div>\n\
</div><!-- fragment --> </div><!-- contents -->\n\
</div><!-- doc-content -->\n\
<!-- start footer part -->\n\
\n\
      <div class=\"footer-block\"><a href=\"../html/ac.cmtdialog.htm\" class=\"comments-anchor\" target=\"_blank\"><span class=\"comments-link\">Please send us your comment about this page</span></a></div></div>\n\
   </div></body>\n\
</html>\n\
";