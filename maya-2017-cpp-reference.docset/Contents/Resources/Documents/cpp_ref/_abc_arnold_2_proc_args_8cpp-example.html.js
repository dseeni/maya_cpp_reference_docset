var topic = "<!-- saved from url=(0024)http://docs.autodesk.com -->\n\
<html>\n\
   <head><script src=\"../scripts/yepnope.1.5.4-min.js\" type=\"text/javascript\"></script><script src=\"../scripts/lib/jquery-1.11.1.min.js\" type=\"text/javascript\"></script><meta http-equiv=\"Content-Type\" content=\"text/html; charset=UTF-8\"><meta name=\"product\" content=\"MAYAUL\"><meta name=\"release\" content=\"2017\"><meta name=\"book\" content=\"Developer\"><meta name=\"created\" content=\"2016-06-16\"><meta name=\"topicid\" content=\"GUID-02DEF634-1E7B-48C6-8ACD-2C934CA97887\"><meta name=\"topic-type\" content=\"concept\">\n\
      <title>AbcArnold/ProcArgs.cpp</title>\n\
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
    cpp_ref_adsk_ref_toc.initNavTree(\'_abc_arnold_2_proc_args_8cpp-example.html\', tocPrefix);\n\
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
            <h1>AbcArnold/ProcArgs.cpp</h1>\n\
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
<div class=\"title\">AbcArnold/ProcArgs.cpp</div>  </div>\n\
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
<div class=\"line\"><span class=\"preprocessor\">#include &quot;ProcArgs.h&quot;</span></div>\n\
<div class=\"line\"></div>\n\
<div class=\"line\"><span class=\"preprocessor\">#include &lt;boost/tokenizer.hpp&gt;</span></div>\n\
<div class=\"line\"></div>\n\
<div class=\"line\"><span class=\"preprocessor\">#include &lt;vector&gt;</span></div>\n\
<div class=\"line\"><span class=\"preprocessor\">#include &lt;algorithm&gt;</span></div>\n\
<div class=\"line\"><span class=\"preprocessor\">#include &lt;iostream&gt;</span></div>\n\
<div class=\"line\"></div>\n\
<div class=\"line\"><span class=\"comment\">//-*****************************************************************************</span></div>\n\
<div class=\"line\"><span class=\"comment\">//INSERT YOUR OWN TOKENIZATION CODE AND STYLE HERE</span></div>\n\
<div class=\"line\">ProcArgs::ProcArgs( <span class=\"keyword\">const</span> <span class=\"keywordtype\">char</span> * paramStr )</div>\n\
<div class=\"line\">  : frame(0.0)</div>\n\
<div class=\"line\">  , fps(24.0)</div>\n\
<div class=\"line\">  , shutterOpen(0)</div>\n\
<div class=\"line\">  , shutterClose(0)</div>\n\
<div class=\"line\">  , excludeXform(false)</div>\n\
<div class=\"line\">  , makeInstance(false)</div>\n\
<div class=\"line\">  , subdIterations(0)</div>\n\
<div class=\"line\">  , proceduralNode(0)</div>\n\
<div class=\"line\">{</div>\n\
<div class=\"line\">    <span class=\"comment\">// TODO, grab the shutter a camera attached to AiUniverse if present</span></div>\n\
<div class=\"line\">    </div>\n\
<div class=\"line\">    <span class=\"keyword\">typedef</span> boost::char_separator&lt;char&gt; Separator;</div>\n\
<div class=\"line\">    <span class=\"keyword\">typedef</span> boost::tokenizer&lt;Separator&gt; Tokenizer;</div>\n\
<div class=\"line\">    </div>\n\
<div class=\"line\">    std::vector&lt;std::string&gt; tokens;</div>\n\
<div class=\"line\">    std::string params( paramStr );</div>\n\
<div class=\"line\"></div>\n\
<div class=\"line\">    Tokenizer tokenizer( params, Separator(<span class=\"stringliteral\">&quot; &quot;</span>) );</div>\n\
<div class=\"line\">    <span class=\"keywordflow\">for</span> ( Tokenizer::iterator iter = tokenizer.begin(); iter != tokenizer.end() ;</div>\n\
<div class=\"line\">          ++iter )</div>\n\
<div class=\"line\">    {</div>\n\
<div class=\"line\">        <span class=\"keywordflow\">if</span> ( (*iter).empty() ) { <span class=\"keywordflow\">continue</span>; }</div>\n\
<div class=\"line\"></div>\n\
<div class=\"line\">        tokens.push_back( *iter );</div>\n\
<div class=\"line\">    }</div>\n\
<div class=\"line\"></div>\n\
<div class=\"line\">    <span class=\"keywordflow\">for</span> ( <span class=\"keywordtype\">size_t</span> i = 0; i &lt; tokens.size(); ++i )</div>\n\
<div class=\"line\">    {</div>\n\
<div class=\"line\">        std::string token = tokens[i];</div>\n\
<div class=\"line\">        std::transform( token.begin(), token.end(), token.begin(), ::tolower );</div>\n\
<div class=\"line\"></div>\n\
<div class=\"line\">        <span class=\"keywordflow\">if</span> ( token == <span class=\"stringliteral\">&quot;-frame&quot;</span> )</div>\n\
<div class=\"line\">        {</div>\n\
<div class=\"line\">            ++i;</div>\n\
<div class=\"line\">            <span class=\"keywordflow\">if</span> ( i &lt; tokens.size() )</div>\n\
<div class=\"line\">            {</div>\n\
<div class=\"line\">                frame = atof( tokens[i].c_str() );</div>\n\
<div class=\"line\">            }</div>\n\
<div class=\"line\">        }</div>\n\
<div class=\"line\">        <span class=\"keywordflow\">else</span> <span class=\"keywordflow\">if</span> ( token == <span class=\"stringliteral\">&quot;-fps&quot;</span> )</div>\n\
<div class=\"line\">        {</div>\n\
<div class=\"line\">            ++i;</div>\n\
<div class=\"line\">            <span class=\"keywordflow\">if</span> ( i &lt; tokens.size() )</div>\n\
<div class=\"line\">            {</div>\n\
<div class=\"line\">                fps = atof( tokens[i].c_str() );</div>\n\
<div class=\"line\">            }</div>\n\
<div class=\"line\">        }</div>\n\
<div class=\"line\">        <span class=\"keywordflow\">else</span> <span class=\"keywordflow\">if</span> ( token == <span class=\"stringliteral\">&quot;-shutteropen&quot;</span> )</div>\n\
<div class=\"line\">        {</div>\n\
<div class=\"line\">            ++i;</div>\n\
<div class=\"line\">            <span class=\"keywordflow\">if</span> ( i &lt; tokens.size() )</div>\n\
<div class=\"line\">            {</div>\n\
<div class=\"line\">                shutterOpen = atof( tokens[i].c_str() );</div>\n\
<div class=\"line\">            }</div>\n\
<div class=\"line\">        }</div>\n\
<div class=\"line\">        <span class=\"keywordflow\">else</span> <span class=\"keywordflow\">if</span> ( token == <span class=\"stringliteral\">&quot;-shutterclose&quot;</span> )</div>\n\
<div class=\"line\">        {</div>\n\
<div class=\"line\">            ++i;</div>\n\
<div class=\"line\">            <span class=\"keywordflow\">if</span> ( i &lt; tokens.size() )</div>\n\
<div class=\"line\">            {</div>\n\
<div class=\"line\">                shutterClose = atof( tokens[i].c_str() );</div>\n\
<div class=\"line\">            }</div>\n\
<div class=\"line\">        }</div>\n\
<div class=\"line\">        <span class=\"keywordflow\">else</span> <span class=\"keywordflow\">if</span> ( token == <span class=\"stringliteral\">&quot;-filename&quot;</span> )</div>\n\
<div class=\"line\">        {</div>\n\
<div class=\"line\">            ++i;</div>\n\
<div class=\"line\">            <span class=\"keywordflow\">if</span> ( i &lt; tokens.size() )</div>\n\
<div class=\"line\">            {</div>\n\
<div class=\"line\">                filename = tokens[i];</div>\n\
<div class=\"line\">            }</div>\n\
<div class=\"line\">        }</div>\n\
<div class=\"line\">        <span class=\"keywordflow\">else</span> <span class=\"keywordflow\">if</span> ( token == <span class=\"stringliteral\">&quot;-nameprefix&quot;</span> )</div>\n\
<div class=\"line\">        {</div>\n\
<div class=\"line\">            ++i;</div>\n\
<div class=\"line\">            <span class=\"keywordflow\">if</span> ( i &lt; tokens.size() )</div>\n\
<div class=\"line\">            {</div>\n\
<div class=\"line\">                nameprefix = tokens[i];</div>\n\
<div class=\"line\">            }</div>\n\
<div class=\"line\">        }</div>\n\
<div class=\"line\">        <span class=\"keywordflow\">else</span> <span class=\"keywordflow\">if</span> ( token == <span class=\"stringliteral\">&quot;-objectpath&quot;</span> )</div>\n\
<div class=\"line\">        {</div>\n\
<div class=\"line\">            ++i;</div>\n\
<div class=\"line\">            <span class=\"keywordflow\">if</span> ( i &lt; tokens.size() )</div>\n\
<div class=\"line\">            {</div>\n\
<div class=\"line\">                objectpath = tokens[i];</div>\n\
<div class=\"line\">            }</div>\n\
<div class=\"line\">        }</div>\n\
<div class=\"line\">        <span class=\"keywordflow\">else</span> <span class=\"keywordflow\">if</span> ( token == <span class=\"stringliteral\">&quot;-excludexform&quot;</span> )</div>\n\
<div class=\"line\">        {</div>\n\
<div class=\"line\">            excludeXform = <span class=\"keyword\">true</span>;</div>\n\
<div class=\"line\">            </div>\n\
<div class=\"line\">        }</div>\n\
<div class=\"line\">        <span class=\"keywordflow\">else</span> <span class=\"keywordflow\">if</span> ( token == <span class=\"stringliteral\">&quot;-subditerations&quot;</span> )</div>\n\
<div class=\"line\">        {</div>\n\
<div class=\"line\">            ++i;</div>\n\
<div class=\"line\">            <span class=\"keywordflow\">if</span> ( i &lt; tokens.size() )</div>\n\
<div class=\"line\">            {</div>\n\
<div class=\"line\">                subdIterations = atoi( tokens[i].c_str() );</div>\n\
<div class=\"line\">            }</div>\n\
<div class=\"line\">        }</div>\n\
<div class=\"line\">        <span class=\"keywordflow\">else</span> <span class=\"keywordflow\">if</span> ( token == <span class=\"stringliteral\">&quot;-makeinstance&quot;</span> )</div>\n\
<div class=\"line\">        {</div>\n\
<div class=\"line\">            makeInstance = <span class=\"keyword\">true</span>;</div>\n\
<div class=\"line\">        }</div>\n\
<div class=\"line\">        </div>\n\
<div class=\"line\">    }</div>\n\
<div class=\"line\">}</div>\n\
<div class=\"line\"></div>\n\
<div class=\"line\"></div>\n\
<div class=\"line\"><span class=\"keywordtype\">void</span> ProcArgs::usage()</div>\n\
<div class=\"line\">{</div>\n\
<div class=\"line\">    std::cerr &lt;&lt; <span class=\"stringliteral\">&quot;AlembicArnoldProcedural usage:&quot;</span> &lt;&lt; std::endl;</div>\n\
<div class=\"line\">    std::cerr &lt;&lt; std::endl;</div>\n\
<div class=\"line\">    </div>\n\
<div class=\"line\">    </div>\n\
<div class=\"line\">    std::cerr &lt;&lt; <span class=\"stringliteral\">&quot;-filename /path/to/some/archive.abc&quot;</span> &lt;&lt; std::endl;</div>\n\
<div class=\"line\">    std::cerr &lt;&lt; std::endl;</div>\n\
<div class=\"line\">    </div>\n\
<div class=\"line\">    std::cerr &lt;&lt; <span class=\"stringliteral\">&quot;This is the only required argument. &quot;</span></div>\n\
<div class=\"line\">                 <span class=\"stringliteral\">&quot;It has no default value.&quot;</span> &lt;&lt; std::endl;</div>\n\
<div class=\"line\">    std::cerr &lt;&lt; std::endl;</div>\n\
<div class=\"line\">    </div>\n\
<div class=\"line\"></div>\n\
<div class=\"line\">    std::cerr &lt;&lt; <span class=\"stringliteral\">&quot;-frame 42&quot;</span> &lt;&lt; std::endl;</div>\n\
<div class=\"line\">    std::cerr &lt;&lt; std::endl;</div>\n\
<div class=\"line\"></div>\n\
<div class=\"line\">    std::cerr &lt;&lt; <span class=\"stringliteral\">&quot;The frame number to load from within the archive. &quot;</span></div>\n\
<div class=\"line\">                 <span class=\"stringliteral\">&quot;The default value is 0. This is combined with -fps to map &quot;</span></div>\n\
<div class=\"line\">                 <span class=\"stringliteral\">&quot;to Alembic time units (double-precision seconds).&quot;</span>;</div>\n\
<div class=\"line\">    </div>\n\
<div class=\"line\">    std::cerr &lt;&lt; std::endl;</div>\n\
<div class=\"line\">    std::cerr &lt;&lt; std::endl;</div>\n\
<div class=\"line\">    </div>\n\
<div class=\"line\">    std::cerr &lt;&lt; <span class=\"stringliteral\">&quot;-fps 24&quot;</span> &lt;&lt; std::endl;</div>\n\
<div class=\"line\">    std::cerr &lt;&lt; std::endl;</div>\n\
<div class=\"line\">    </div>\n\
<div class=\"line\">    std::cerr &lt;&lt; <span class=\"stringliteral\">&quot;Combined with -frame above. The default value is 24.0.&quot;</span>;</div>\n\
<div class=\"line\">    std::cerr &lt;&lt; std::endl;</div>\n\
<div class=\"line\">    std::cerr &lt;&lt; std::endl;</div>\n\
<div class=\"line\">    </div>\n\
<div class=\"line\">    </div>\n\
<div class=\"line\">    std::cerr &lt;&lt; <span class=\"stringliteral\">&quot;-shutteropen 0.0&quot;</span> &lt;&lt; std::endl;</div>\n\
<div class=\"line\">    std::cerr &lt;&lt; <span class=\"stringliteral\">&quot;-shutterclose 0.5&quot;</span> &lt;&lt; std::endl;</div>\n\
<div class=\"line\">    std::cerr &lt;&lt; std::endl;</div>\n\
<div class=\"line\"></div>\n\
<div class=\"line\"></div>\n\
<div class=\"line\">    std::cerr &lt;&lt; <span class=\"stringliteral\">&quot;These are frame-relative values which specify the shutter &quot;</span></div>\n\
<div class=\"line\">                 <span class=\"stringliteral\">&quot;window. The procedural will include all samples present in &quot;</span></div>\n\
<div class=\"line\">                 <span class=\"stringliteral\">&quot;the archive which are relevant to the shutter window. &quot;</span></div>\n\
<div class=\"line\">                 <span class=\"stringliteral\">&quot;The default value of both is 0.0 (no motion blur).&quot;</span>;</div>\n\
<div class=\"line\">    std::cerr &lt;&lt; std::endl;</div>\n\
<div class=\"line\">    std::cerr &lt;&lt; std::endl;</div>\n\
<div class=\"line\"></div>\n\
<div class=\"line\"></div>\n\
<div class=\"line\">    std::cerr &lt;&lt; <span class=\"stringliteral\">&quot;-objectpath /assetroot/characters&quot;</span> &lt;&lt; std::endl;</div>\n\
<div class=\"line\">    std::cerr &lt;&lt; std::endl;</div>\n\
<div class=\"line\">    </div>\n\
<div class=\"line\">    std::cerr &lt;&lt; <span class=\"stringliteral\">&quot;If specified, only objects at or below the provided path &quot;</span></div>\n\
<div class=\"line\">                 <span class=\"stringliteral\">&quot;(within the archive) will be emitted. When combined with &quot;</span></div>\n\
<div class=\"line\">                 <span class=\"stringliteral\">&quot;-excludexform, this can also be used to load individual &quot;</span></div>\n\
<div class=\"line\">                 <span class=\"stringliteral\">&quot;leaf locations within an externally defined hierarchy. Be &quot;</span></div>\n\
<div class=\"line\">                 <span class=\"stringliteral\">&quot;aware that in that case, you&#39;d need to set the \\&quot;matrix\\&quot; &quot;</span></div>\n\
<div class=\"line\">                 <span class=\"stringliteral\">&quot;and \\&quot;inherit_xform\\&quot; parameters on the procedural node &quot;</span></div>\n\
<div class=\"line\">                 <span class=\"stringliteral\">&quot;itself. If the path points to a single \\&quot;faceset\\&quot; object &quot;</span></div>\n\
<div class=\"line\">                 <span class=\"stringliteral\">&quot;directly beneath a polymesh or subdivision mesh, it&#39;ll add &quot;</span></div>\n\
<div class=\"line\">                 <span class=\"stringliteral\">&quot;a \\&quot;face_visibility\\&quot; user data array.&quot;</span>;</div>\n\
<div class=\"line\">    std::cerr &lt;&lt; std::endl;</div>\n\
<div class=\"line\">    std::cerr &lt;&lt; std::endl;</div>\n\
<div class=\"line\">    </div>\n\
<div class=\"line\">    std::cerr &lt;&lt; <span class=\"stringliteral\">&quot;-excludexform&quot;</span> &lt;&lt; std::endl;</div>\n\
<div class=\"line\">    std::cerr &lt;&lt; std::endl;</div>\n\
<div class=\"line\">    </div>\n\
<div class=\"line\">    std::cerr &lt;&lt; <span class=\"stringliteral\">&quot;If specified, the \\&quot;matrix\\&quot; parameter will not be set on &quot;</span></div>\n\
<div class=\"line\">                 <span class=\"stringliteral\">&quot;the resulting primitive nodes.&quot;</span> &lt;&lt; std::endl;</div>\n\
<div class=\"line\">    std::cerr &lt;&lt; std::endl;</div>\n\
<div class=\"line\">    </div>\n\
<div class=\"line\">    std::cerr &lt;&lt; <span class=\"stringliteral\">&quot;-subditerations 2&quot;</span> &lt;&lt; std::endl;</div>\n\
<div class=\"line\">    std::cerr &lt;&lt; std::endl;</div>\n\
<div class=\"line\">    </div>\n\
<div class=\"line\">    std::cerr &lt;&lt; <span class=\"stringliteral\">&quot;For AbcGeom::ISubD objects, this option specifies the &quot;</span></div>\n\
<div class=\"line\">                 <span class=\"stringliteral\">&quot;\\&quot;subdiv_iterations\\&quot; value. It currently has no effect for &quot;</span></div>\n\
<div class=\"line\">                 <span class=\"stringliteral\">&quot;other primitive types. The default value is 0.&quot;</span>;</div>\n\
<div class=\"line\">    std::cerr &lt;&lt; std::endl;</div>\n\
<div class=\"line\">    std::cerr &lt;&lt; std::endl;</div>\n\
<div class=\"line\">    </div>\n\
<div class=\"line\">    std::cerr &lt;&lt; <span class=\"stringliteral\">&quot;-nameprefix some_prefix__&quot;</span> &lt;&lt; std::endl;</div>\n\
<div class=\"line\">    std::cerr &lt;&lt; std::endl;</div>\n\
<div class=\"line\">    </div>\n\
<div class=\"line\">    std::cerr &lt;&lt; <span class=\"stringliteral\">&quot;Because node names are unique scene-wide in arnold, this &quot;</span></div>\n\
<div class=\"line\">                 <span class=\"stringliteral\">&quot;allows you control potential name clashes when loading or &quot;</span></div>\n\
<div class=\"line\">                 <span class=\"stringliteral\">&quot;instancing an archive (or multiple equivalently named &quot;</span></div>\n\
<div class=\"line\">                 <span class=\"stringliteral\">&quot;archives) multiple times. The default name of each node is &quot;</span></div>\n\
<div class=\"line\">                 <span class=\"stringliteral\">&quot;its full path within the alembic archive.&quot;</span>;</div>\n\
<div class=\"line\">    std::cerr &lt;&lt; std::endl;</div>\n\
<div class=\"line\">    std::cerr &lt;&lt; std::endl;</div>\n\
<div class=\"line\">    </div>\n\
<div class=\"line\">    std::cerr &lt;&lt; <span class=\"stringliteral\">&quot;-makeinstance&quot;</span> &lt;&lt; std::endl;</div>\n\
<div class=\"line\">    std::cerr &lt;&lt; std::endl;</div>\n\
<div class=\"line\">    </div>\n\
<div class=\"line\">    std::cerr &lt;&lt; <span class=\"stringliteral\">&quot;This behavior is disabled by default. If enabled, the &quot;</span></div>\n\
<div class=\"line\">                 <span class=\"stringliteral\">&quot;procedural will attempt to identify identical primitives &quot;</span></div>\n\
<div class=\"line\">                 <span class=\"stringliteral\">&quot;(using Alembic&#39;s per-array-property hash keys) and create &quot;</span></div>\n\
<div class=\"line\">                 <span class=\"stringliteral\">&quot;corresponding \\&quot;ginstance\\&quot; nodes. Two primitives are &quot;</span></div>\n\
<div class=\"line\">                 <span class=\"stringliteral\">&quot;considered equivalent if the keys of their relevant point &quot;</span></div>\n\
<div class=\"line\">                 <span class=\"stringliteral\">&quot;position samples match along with any specified &quot;</span></div>\n\
<div class=\"line\">                 <span class=\"stringliteral\">&quot;subdivision values. This works across multiple archives or &quot;</span></div>\n\
<div class=\"line\">                 <span class=\"stringliteral\">&quot;invokations of the procedural. It currently does not write &quot;</span></div>\n\
<div class=\"line\">                 <span class=\"stringliteral\">&quot;unique user data per instance but will likely do so &quot;</span></div>\n\
<div class=\"line\">                 <span class=\"stringliteral\">&quot;automatically (when necessary) in a future release. &quot;</span></div>\n\
<div class=\"line\">                 <span class=\"stringliteral\">&quot;The ray visibility of the source primitive will be set to &quot;</span></div>\n\
<div class=\"line\">                 <span class=\"stringliteral\">&quot;AI_RAY_NONE and the \\&quot;ginstance\\&quot; node&#39;s will be set to &quot;</span></div>\n\
<div class=\"line\">                 <span class=\"stringliteral\">&quot;that of the calling \\&quot;procedural\\&quot; node.&quot;</span>;</div>\n\
<div class=\"line\">    </div>\n\
<div class=\"line\">    std::cerr &lt;&lt; std::endl;</div>\n\
<div class=\"line\"></div>\n\
<div class=\"line\">    </div>\n\
<div class=\"line\">}</div>\n\
</div><!-- fragment --> </div><!-- contents -->\n\
</div><!-- doc-content -->\n\
          <div class=\"footer-block\"><a href=\"../html/ac.cmtdialog.htm\" class=\"comments-anchor\" target=\"_blank\"><span class=\"comments-link\">Please send us your comment about this page</span></a></div><br></div>\n\
   </div></body>\n\
</html>\n\
";