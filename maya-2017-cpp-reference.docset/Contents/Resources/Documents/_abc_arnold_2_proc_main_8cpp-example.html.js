var topic = "<!-- saved from url=(0024)http://docs.autodesk.com -->\n\
<html>\n\
   <head><script src=\"../scripts/yepnope.1.5.4-min.js\" type=\"text/javascript\"></script><script src=\"../scripts/lib/jquery-1.11.1.min.js\" type=\"text/javascript\"></script><meta http-equiv=\"Content-Type\" content=\"text/html; charset=UTF-8\"><meta name=\"product\" content=\"MAYAUL\"><meta name=\"release\" content=\"2017\"><meta name=\"book\" content=\"Developer\"><meta name=\"created\" content=\"2016-06-16\"><meta name=\"topicid\" content=\"GUID-02DEF634-1E7B-48C6-8ACD-2C934CA97887\"><meta name=\"topic-type\" content=\"concept\">\n\
      <title>AbcArnold/ProcMain.cpp</title>\n\
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
    cpp_ref_adsk_ref_toc.initNavTree(\'_abc_arnold_2_proc_main_8cpp-example.html\', tocPrefix);\n\
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
            <h1>AbcArnold/ProcMain.cpp</h1>\n\
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
<div class=\"title\">AbcArnold/ProcMain.cpp</div>  </div>\n\
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
<div class=\"line\"><span class=\"preprocessor\">#include &lt;cstring&gt;</span></div>\n\
<div class=\"line\"><span class=\"preprocessor\">#include &lt;memory&gt;</span></div>\n\
<div class=\"line\"><span class=\"preprocessor\">#include &quot;ProcArgs.h&quot;</span></div>\n\
<div class=\"line\"><span class=\"preprocessor\">#include &quot;PathUtil.h&quot;</span></div>\n\
<div class=\"line\"><span class=\"preprocessor\">#include &quot;SampleUtil.h&quot;</span></div>\n\
<div class=\"line\"><span class=\"preprocessor\">#include &quot;WriteGeo.h&quot;</span></div>\n\
<div class=\"line\"></div>\n\
<div class=\"line\"><span class=\"preprocessor\">#include &lt;Alembic/AbcGeom/All.h&gt;</span></div>\n\
<div class=\"line\"><span class=\"preprocessor\">#include &lt;Alembic/AbcCoreHDF5/All.h&gt;</span></div>\n\
<div class=\"line\"></div>\n\
<div class=\"line\"></div>\n\
<div class=\"line\"><span class=\"keyword\">namespace</span></div>\n\
<div class=\"line\">{</div>\n\
<div class=\"line\"></div>\n\
<div class=\"line\"><span class=\"keyword\">using namespace </span>Alembic::AbcGeom;</div>\n\
<div class=\"line\"></div>\n\
<div class=\"line\"></div>\n\
<div class=\"line\"></div>\n\
<div class=\"line\"><span class=\"keywordtype\">void</span> WalkObject( IObject parent, <span class=\"keyword\">const</span> ObjectHeader &amp;ohead, ProcArgs &amp;args,</div>\n\
<div class=\"line\">             PathList::const_iterator I, PathList::const_iterator E,</div>\n\
<div class=\"line\">                    MatrixSampleMap * xformSamples)</div>\n\
<div class=\"line\">{</div>\n\
<div class=\"line\">    <span class=\"comment\">//Accumulate transformation samples and pass along as an argument</span></div>\n\
<div class=\"line\">    <span class=\"comment\">//to WalkObject</span></div>\n\
<div class=\"line\">    </div>\n\
<div class=\"line\">    IObject nextParentObject;</div>\n\
<div class=\"line\">    </div>\n\
<div class=\"line\">    std::auto_ptr&lt;MatrixSampleMap&gt; concatenatedXformSamples;</div>\n\
<div class=\"line\">    </div>\n\
<div class=\"line\">    <span class=\"keywordflow\">if</span> ( IXform::matches( ohead ) )</div>\n\
<div class=\"line\">    {</div>\n\
<div class=\"line\">        <span class=\"keywordflow\">if</span> ( args.excludeXform )</div>\n\
<div class=\"line\">        {</div>\n\
<div class=\"line\">            nextParentObject = IObject( parent, ohead.getName() );</div>\n\
<div class=\"line\">        }</div>\n\
<div class=\"line\">        <span class=\"keywordflow\">else</span></div>\n\
<div class=\"line\">        {</div>\n\
<div class=\"line\">            IXform xform( parent, ohead.getName() );</div>\n\
<div class=\"line\">            </div>\n\
<div class=\"line\">            IXformSchema &amp;xs = xform.getSchema();</div>\n\
<div class=\"line\">            </div>\n\
<div class=\"line\">            <span class=\"keywordflow\">if</span> ( xs.getNumOps() &gt; 0 )</div>\n\
<div class=\"line\">            { </div>\n\
<div class=\"line\">                TimeSamplingPtr ts = xs.getTimeSampling();</div>\n\
<div class=\"line\">                <span class=\"keywordtype\">size_t</span> numSamples = xs.getNumSamples();</div>\n\
<div class=\"line\">                </div>\n\
<div class=\"line\">                SampleTimeSet sampleTimes;</div>\n\
<div class=\"line\">                GetRelevantSampleTimes( args, ts, numSamples, sampleTimes,</div>\n\
<div class=\"line\">                        xformSamples);</div>\n\
<div class=\"line\">                </div>\n\
<div class=\"line\">                MatrixSampleMap localXformSamples;</div>\n\
<div class=\"line\">                </div>\n\
<div class=\"line\">                MatrixSampleMap * localXformSamplesToFill = 0;</div>\n\
<div class=\"line\">                </div>\n\
<div class=\"line\">                concatenatedXformSamples.reset(<span class=\"keyword\">new</span> MatrixSampleMap);</div>\n\
<div class=\"line\">                </div>\n\
<div class=\"line\">                <span class=\"keywordflow\">if</span> ( !xformSamples )</div>\n\
<div class=\"line\">                {</div>\n\
<div class=\"line\">                    <span class=\"comment\">// If we don&#39;t have parent xform samples, we can fill</span></div>\n\
<div class=\"line\">                    <span class=\"comment\">// in the map directly.</span></div>\n\
<div class=\"line\">                    localXformSamplesToFill = concatenatedXformSamples.get();</div>\n\
<div class=\"line\">                }</div>\n\
<div class=\"line\">                <span class=\"keywordflow\">else</span></div>\n\
<div class=\"line\">                {</div>\n\
<div class=\"line\">                    <span class=\"comment\">//otherwise we need to fill in a temporary map</span></div>\n\
<div class=\"line\">                    localXformSamplesToFill = &amp;localXformSamples;</div>\n\
<div class=\"line\">                }</div>\n\
<div class=\"line\">                </div>\n\
<div class=\"line\">                </div>\n\
<div class=\"line\">                <span class=\"keywordflow\">for</span> (SampleTimeSet::iterator I = sampleTimes.begin();</div>\n\
<div class=\"line\">                        I != sampleTimes.end(); ++I)</div>\n\
<div class=\"line\">                {</div>\n\
<div class=\"line\">                    XformSample sample = xform.getSchema().getValue(</div>\n\
<div class=\"line\">                            Abc::ISampleSelector(*I));</div>\n\
<div class=\"line\">                    (*localXformSamplesToFill)[(*I)] = sample.getMatrix();</div>\n\
<div class=\"line\">                }</div>\n\
<div class=\"line\">                </div>\n\
<div class=\"line\">                <span class=\"keywordflow\">if</span> ( xformSamples )</div>\n\
<div class=\"line\">                {</div>\n\
<div class=\"line\">                    ConcatenateXformSamples(args,</div>\n\
<div class=\"line\">                            *xformSamples,</div>\n\
<div class=\"line\">                            localXformSamples,</div>\n\
<div class=\"line\">                            *concatenatedXformSamples.get());</div>\n\
<div class=\"line\">                }</div>\n\
<div class=\"line\">                </div>\n\
<div class=\"line\">                </div>\n\
<div class=\"line\">                xformSamples = concatenatedXformSamples.get();</div>\n\
<div class=\"line\">                </div>\n\
<div class=\"line\">            }</div>\n\
<div class=\"line\">            </div>\n\
<div class=\"line\">            nextParentObject = xform;</div>\n\
<div class=\"line\">        }</div>\n\
<div class=\"line\">    }</div>\n\
<div class=\"line\">    <span class=\"keywordflow\">else</span> <span class=\"keywordflow\">if</span> ( ISubD::matches( ohead ) )</div>\n\
<div class=\"line\">    {</div>\n\
<div class=\"line\">        std::string faceSetName;</div>\n\
<div class=\"line\">        </div>\n\
<div class=\"line\">        ISubD subd( parent, ohead.getName() );</div>\n\
<div class=\"line\">        </div>\n\
<div class=\"line\">        <span class=\"comment\">//if we haven&#39;t reached the end of a specified -objectpath,</span></div>\n\
<div class=\"line\">        <span class=\"comment\">//check to see if the next token is a faceset name.</span></div>\n\
<div class=\"line\">        <span class=\"comment\">//If it is, send the name to ProcessSubD for addition of</span></div>\n\
<div class=\"line\">        <span class=\"comment\">//&quot;face_visibility&quot; tags for the non-matching faces</span></div>\n\
<div class=\"line\">        <span class=\"keywordflow\">if</span> ( I != E )</div>\n\
<div class=\"line\">        {</div>\n\
<div class=\"line\">            <span class=\"keywordflow\">if</span> ( subd.getSchema().hasFaceSet( *I ) )</div>\n\
<div class=\"line\">            {</div>\n\
<div class=\"line\">                faceSetName = *I;</div>\n\
<div class=\"line\">            }</div>\n\
<div class=\"line\">        }</div>\n\
<div class=\"line\">        </div>\n\
<div class=\"line\">        ProcessSubD( subd, args, xformSamples, faceSetName );</div>\n\
<div class=\"line\">        </div>\n\
<div class=\"line\">        <span class=\"comment\">//if we found a matching faceset, don&#39;t traverse below</span></div>\n\
<div class=\"line\">        <span class=\"keywordflow\">if</span> ( faceSetName.empty() )</div>\n\
<div class=\"line\">        {</div>\n\
<div class=\"line\">            nextParentObject = subd;</div>\n\
<div class=\"line\">        }</div>\n\
<div class=\"line\">    }</div>\n\
<div class=\"line\">    <span class=\"keywordflow\">else</span> <span class=\"keywordflow\">if</span> ( IPolyMesh::matches( ohead ) )</div>\n\
<div class=\"line\">    {</div>\n\
<div class=\"line\">        std::string faceSetName;</div>\n\
<div class=\"line\">        </div>\n\
<div class=\"line\">        IPolyMesh polymesh( parent, ohead.getName() );</div>\n\
<div class=\"line\">        </div>\n\
<div class=\"line\">        <span class=\"comment\">//if we haven&#39;t reached the end of a specified -objectpath,</span></div>\n\
<div class=\"line\">        <span class=\"comment\">//check to see if the next token is a faceset name.</span></div>\n\
<div class=\"line\">        <span class=\"comment\">//If it is, send the name to ProcessSubD for addition of</span></div>\n\
<div class=\"line\">        <span class=\"comment\">//&quot;face_visibility&quot; tags for the non-matching faces</span></div>\n\
<div class=\"line\">        <span class=\"keywordflow\">if</span> ( I != E )</div>\n\
<div class=\"line\">        {</div>\n\
<div class=\"line\">            <span class=\"keywordflow\">if</span> ( polymesh.getSchema().hasFaceSet( *I ) )</div>\n\
<div class=\"line\">            {</div>\n\
<div class=\"line\">                faceSetName = *I;</div>\n\
<div class=\"line\">            }</div>\n\
<div class=\"line\">        }</div>\n\
<div class=\"line\">        </div>\n\
<div class=\"line\">        ProcessPolyMesh( polymesh, args, xformSamples, faceSetName );</div>\n\
<div class=\"line\">        </div>\n\
<div class=\"line\">        <span class=\"comment\">//if we found a matching faceset, don&#39;t traverse below</span></div>\n\
<div class=\"line\">        <span class=\"keywordflow\">if</span> ( faceSetName.empty() )</div>\n\
<div class=\"line\">        {</div>\n\
<div class=\"line\">            nextParentObject = polymesh;</div>\n\
<div class=\"line\">        }</div>\n\
<div class=\"line\">    }</div>\n\
<div class=\"line\">    <span class=\"keywordflow\">else</span> <span class=\"keywordflow\">if</span> ( INuPatch::matches( ohead ) )</div>\n\
<div class=\"line\">    {</div>\n\
<div class=\"line\">        INuPatch patch( parent, ohead.getName() );</div>\n\
<div class=\"line\">        <span class=\"comment\">// TODO ProcessNuPatch( patch, args );</span></div>\n\
<div class=\"line\">        </div>\n\
<div class=\"line\">        nextParentObject = patch;</div>\n\
<div class=\"line\">    }</div>\n\
<div class=\"line\">    <span class=\"keywordflow\">else</span> <span class=\"keywordflow\">if</span> ( IPoints::matches( ohead ) )</div>\n\
<div class=\"line\">    {</div>\n\
<div class=\"line\">        IPoints points( parent, ohead.getName() );</div>\n\
<div class=\"line\">        <span class=\"comment\">// TODO ProcessPoints( points, args );</span></div>\n\
<div class=\"line\">        </div>\n\
<div class=\"line\">        nextParentObject = points;</div>\n\
<div class=\"line\">    }</div>\n\
<div class=\"line\">    <span class=\"keywordflow\">else</span> <span class=\"keywordflow\">if</span> ( ICurves::matches( ohead ) )</div>\n\
<div class=\"line\">    {</div>\n\
<div class=\"line\">        ICurves curves( parent, ohead.getName() );</div>\n\
<div class=\"line\">        <span class=\"comment\">// TODO ProcessCurves( curves, args );</span></div>\n\
<div class=\"line\">        </div>\n\
<div class=\"line\">        nextParentObject = curves;</div>\n\
<div class=\"line\">    }</div>\n\
<div class=\"line\">    <span class=\"keywordflow\">else</span> <span class=\"keywordflow\">if</span> ( IFaceSet::matches( ohead ) )</div>\n\
<div class=\"line\">    {</div>\n\
<div class=\"line\">        <span class=\"comment\">//don&#39;t complain about discovering a faceset upon traversal</span></div>\n\
<div class=\"line\">    }</div>\n\
<div class=\"line\">    <span class=\"keywordflow\">else</span></div>\n\
<div class=\"line\">    {</div>\n\
<div class=\"line\">        std::cerr &lt;&lt; <span class=\"stringliteral\">&quot;could not determine type of &quot;</span> &lt;&lt; ohead.getName()</div>\n\
<div class=\"line\">                  &lt;&lt; std::endl;</div>\n\
<div class=\"line\">        </div>\n\
<div class=\"line\">        std::cerr &lt;&lt; ohead.getName() &lt;&lt; <span class=\"stringliteral\">&quot; has MetaData: &quot;</span></div>\n\
<div class=\"line\">                  &lt;&lt; ohead.getMetaData().serialize() &lt;&lt; std::endl;</div>\n\
<div class=\"line\">        </div>\n\
<div class=\"line\">        nextParentObject = parent.getChild(ohead.getName());</div>\n\
<div class=\"line\">    }</div>\n\
<div class=\"line\">    </div>\n\
<div class=\"line\">    <span class=\"keywordflow\">if</span> ( nextParentObject.valid() )</div>\n\
<div class=\"line\">    {</div>\n\
<div class=\"line\">        <span class=\"comment\">//std::cerr &lt;&lt; nextParentObject.getFullName() &lt;&lt; std::endl;</span></div>\n\
<div class=\"line\">        </div>\n\
<div class=\"line\">        <span class=\"keywordflow\">if</span> ( I == E )</div>\n\
<div class=\"line\">        {</div>\n\
<div class=\"line\">            <span class=\"keywordflow\">for</span> ( <span class=\"keywordtype\">size_t</span> i = 0; i &lt; nextParentObject.getNumChildren() ; ++i )</div>\n\
<div class=\"line\">            {</div>\n\
<div class=\"line\">                WalkObject( nextParentObject,</div>\n\
<div class=\"line\">                            nextParentObject.getChildHeader( i ),</div>\n\
<div class=\"line\">                            args, I, E, xformSamples);</div>\n\
<div class=\"line\">            }</div>\n\
<div class=\"line\">        }</div>\n\
<div class=\"line\">        <span class=\"keywordflow\">else</span></div>\n\
<div class=\"line\">        {</div>\n\
<div class=\"line\">            <span class=\"keyword\">const</span> ObjectHeader *nextChildHeader =</div>\n\
<div class=\"line\">                nextParentObject.getChildHeader( *I );</div>\n\
<div class=\"line\">            </div>\n\
<div class=\"line\">            <span class=\"keywordflow\">if</span> ( nextChildHeader != NULL )</div>\n\
<div class=\"line\">            {</div>\n\
<div class=\"line\">                WalkObject( nextParentObject, *nextChildHeader, args, I+1, E,</div>\n\
<div class=\"line\">                    xformSamples);</div>\n\
<div class=\"line\">            }</div>\n\
<div class=\"line\">        }</div>\n\
<div class=\"line\">    }</div>\n\
<div class=\"line\">    </div>\n\
<div class=\"line\">    </div>\n\
<div class=\"line\">    </div>\n\
<div class=\"line\">}</div>\n\
<div class=\"line\"></div>\n\
<div class=\"line\"><span class=\"comment\">//-*************************************************************************</span></div>\n\
<div class=\"line\"></div>\n\
<div class=\"line\"><span class=\"keywordtype\">int</span> ProcInit( <span class=\"keyword\">struct</span> AtNode *node, <span class=\"keywordtype\">void</span> **user_ptr )</div>\n\
<div class=\"line\">{</div>\n\
<div class=\"line\">    ProcArgs * args = <span class=\"keyword\">new</span> ProcArgs( AiNodeGetStr( node, <span class=\"stringliteral\">&quot;data&quot;</span> ) );</div>\n\
<div class=\"line\">    args-&gt;proceduralNode = node;</div>\n\
<div class=\"line\">    *user_ptr = args;</div>\n\
<div class=\"line\">    </div>\n\
<div class=\"line\"><span class=\"preprocessor\">#if (AI_VERSION_ARCH_NUM == 3 &amp;&amp; AI_VERSION_MAJOR_NUM &lt; 3) || AI_VERSION_ARCH_NUM &lt; 3</span></div>\n\
<div class=\"line\"><span class=\"preprocessor\">    #error Arnold version 3.3+ required for AlembicArnoldProcedural</span></div>\n\
<div class=\"line\"><span class=\"preprocessor\">#endif</span></div>\n\
<div class=\"line\">    </div>\n\
<div class=\"line\">    <span class=\"keywordflow\">if</span> (!AiCheckAPIVersion(AI_VERSION_ARCH, AI_VERSION_MAJOR, AI_VERSION_MINOR))</div>\n\
<div class=\"line\">    {</div>\n\
<div class=\"line\">        std::cout &lt;&lt; <span class=\"stringliteral\">&quot;AlembicArnoldProcedural compiled with arnold-&quot;</span></div>\n\
<div class=\"line\">                  &lt;&lt; AI_VERSION</div>\n\
<div class=\"line\">                  &lt;&lt; <span class=\"stringliteral\">&quot; but is running with incompatible arnold-&quot;</span></div>\n\
<div class=\"line\">                  &lt;&lt; AiGetVersion(NULL, NULL, NULL, NULL) &lt;&lt; std::endl;</div>\n\
<div class=\"line\">        <span class=\"keywordflow\">return</span> 1;</div>\n\
<div class=\"line\">    }</div>\n\
<div class=\"line\"></div>\n\
<div class=\"line\">    <span class=\"keywordflow\">if</span> ( args-&gt;filename.empty() )</div>\n\
<div class=\"line\">    {</div>\n\
<div class=\"line\">        args-&gt;usage();</div>\n\
<div class=\"line\">        <span class=\"keywordflow\">return</span> 1;</div>\n\
<div class=\"line\">    }</div>\n\
<div class=\"line\"></div>\n\
<div class=\"line\">    IArchive archive( ::Alembic::AbcCoreHDF5::ReadArchive(),</div>\n\
<div class=\"line\">                      args-&gt;filename );</div>\n\
<div class=\"line\"></div>\n\
<div class=\"line\">    IObject root = archive.getTop();</div>\n\
<div class=\"line\"></div>\n\
<div class=\"line\">    PathList path;</div>\n\
<div class=\"line\">    TokenizePath( args-&gt;objectpath, path );</div>\n\
<div class=\"line\"></div>\n\
<div class=\"line\">    <span class=\"keywordflow\">try</span></div>\n\
<div class=\"line\">    {</div>\n\
<div class=\"line\">        <span class=\"keywordflow\">if</span> ( path.empty() ) <span class=\"comment\">//walk the entire scene</span></div>\n\
<div class=\"line\">        {</div>\n\
<div class=\"line\">            <span class=\"keywordflow\">for</span> ( <span class=\"keywordtype\">size_t</span> i = 0; i &lt; root.getNumChildren(); ++i )</div>\n\
<div class=\"line\">            {</div>\n\
<div class=\"line\">                WalkObject( root, root.getChildHeader(i), *args,</div>\n\
<div class=\"line\">                            path.end(), path.end(), 0 );</div>\n\
<div class=\"line\">            }</div>\n\
<div class=\"line\">        }</div>\n\
<div class=\"line\">        <span class=\"keywordflow\">else</span> <span class=\"comment\">//walk to a location + its children</span></div>\n\
<div class=\"line\">        {</div>\n\
<div class=\"line\">            PathList::const_iterator I = path.begin();</div>\n\
<div class=\"line\"></div>\n\
<div class=\"line\">            <span class=\"keyword\">const</span> ObjectHeader *nextChildHeader =</div>\n\
<div class=\"line\">                    root.getChildHeader( *I );</div>\n\
<div class=\"line\">            <span class=\"keywordflow\">if</span> ( nextChildHeader != NULL )</div>\n\
<div class=\"line\">            {</div>\n\
<div class=\"line\">                WalkObject( root, *nextChildHeader, *args, I+1,</div>\n\
<div class=\"line\">                        path.end(), 0);</div>\n\
<div class=\"line\">            }</div>\n\
<div class=\"line\">        }</div>\n\
<div class=\"line\">    }</div>\n\
<div class=\"line\">    <span class=\"keywordflow\">catch</span> ( <span class=\"keyword\">const</span> std::exception &amp;e )</div>\n\
<div class=\"line\">    {</div>\n\
<div class=\"line\">        std::cerr &lt;&lt; <span class=\"stringliteral\">&quot;exception thrown during ProcInit: &quot;</span></div>\n\
<div class=\"line\">              &lt;&lt; e.what() &lt;&lt; std::endl;</div>\n\
<div class=\"line\">    }</div>\n\
<div class=\"line\">    <span class=\"keywordflow\">catch</span> (...)</div>\n\
<div class=\"line\">    {</div>\n\
<div class=\"line\">        std::cerr &lt;&lt; <span class=\"stringliteral\">&quot;exception thrown\\n&quot;</span>;</div>\n\
<div class=\"line\">    }</div>\n\
<div class=\"line\">    </div>\n\
<div class=\"line\">    </div>\n\
<div class=\"line\">    <span class=\"keywordflow\">return</span> 1;</div>\n\
<div class=\"line\">}</div>\n\
<div class=\"line\"></div>\n\
<div class=\"line\"><span class=\"comment\">//-*************************************************************************</span></div>\n\
<div class=\"line\"></div>\n\
<div class=\"line\"><span class=\"keywordtype\">int</span> ProcCleanup( <span class=\"keywordtype\">void</span> *user_ptr )</div>\n\
<div class=\"line\">{</div>\n\
<div class=\"line\">    <span class=\"keyword\">delete</span> <span class=\"keyword\">reinterpret_cast&lt;</span>ProcArgs*<span class=\"keyword\">&gt;</span>( user_ptr );</div>\n\
<div class=\"line\">    <span class=\"keywordflow\">return</span> 1;</div>\n\
<div class=\"line\">}</div>\n\
<div class=\"line\"></div>\n\
<div class=\"line\"><span class=\"comment\">//-*************************************************************************</span></div>\n\
<div class=\"line\"></div>\n\
<div class=\"line\"><span class=\"keywordtype\">int</span> ProcNumNodes( <span class=\"keywordtype\">void</span> *user_ptr )</div>\n\
<div class=\"line\">{</div>\n\
<div class=\"line\">    ProcArgs * args = <span class=\"keyword\">reinterpret_cast&lt;</span>ProcArgs*<span class=\"keyword\">&gt;</span>( user_ptr );</div>\n\
<div class=\"line\">    <span class=\"keywordflow\">return</span> (<span class=\"keywordtype\">int</span>) args-&gt;createdNodes.size();</div>\n\
<div class=\"line\">}</div>\n\
<div class=\"line\"></div>\n\
<div class=\"line\"><span class=\"comment\">//-*************************************************************************</span></div>\n\
<div class=\"line\"></div>\n\
<div class=\"line\"><span class=\"keyword\">struct </span>AtNode* ProcGetNode(<span class=\"keywordtype\">void</span> *user_ptr, <span class=\"keywordtype\">int</span> i)</div>\n\
<div class=\"line\">{</div>\n\
<div class=\"line\">    ProcArgs * args = <span class=\"keyword\">reinterpret_cast&lt;</span>ProcArgs*<span class=\"keyword\">&gt;</span>( user_ptr );</div>\n\
<div class=\"line\">    </div>\n\
<div class=\"line\">    <span class=\"keywordflow\">if</span> ( i &gt;= 0 &amp;&amp; i &lt; (<span class=\"keywordtype\">int</span>) args-&gt;createdNodes.size() )</div>\n\
<div class=\"line\">    {</div>\n\
<div class=\"line\">        <span class=\"keywordflow\">return</span> args-&gt;createdNodes[i];</div>\n\
<div class=\"line\">    }</div>\n\
<div class=\"line\">    </div>\n\
<div class=\"line\">    <span class=\"keywordflow\">return</span> NULL;</div>\n\
<div class=\"line\">}</div>\n\
<div class=\"line\"></div>\n\
<div class=\"line\">} <span class=\"comment\">//end of anonymous namespace</span></div>\n\
<div class=\"line\"></div>\n\
<div class=\"line\"></div>\n\
<div class=\"line\"></div>\n\
<div class=\"line\"><span class=\"keyword\">extern</span> <span class=\"stringliteral\">&quot;C&quot;</span></div>\n\
<div class=\"line\">{</div>\n\
<div class=\"line\">    <span class=\"keywordtype\">int</span> ProcLoader(AtProcVtable* api)</div>\n\
<div class=\"line\">    {</div>\n\
<div class=\"line\">        api-&gt;Init        = ProcInit;</div>\n\
<div class=\"line\">        api-&gt;Cleanup     = ProcCleanup;</div>\n\
<div class=\"line\">        api-&gt;NumNodes    = ProcNumNodes;</div>\n\
<div class=\"line\">        api-&gt;GetNode     = ProcGetNode;</div>\n\
<div class=\"line\">        strcpy(api-&gt;version, AI_VERSION);</div>\n\
<div class=\"line\">        <span class=\"keywordflow\">return</span> 1;</div>\n\
<div class=\"line\">    }</div>\n\
<div class=\"line\">}</div>\n\
</div><!-- fragment --> </div><!-- contents -->\n\
</div><!-- doc-content -->\n\
          <div class=\"footer-block\"><a href=\"../html/ac.cmtdialog.htm\" class=\"comments-anchor\" target=\"_blank\"><span class=\"comments-link\">Please send us your comment about this page</span></a></div><br></div>\n\
   </div></body>\n\
</html>\n\
";