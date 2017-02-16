var topic = "<!-- saved from url=(0024)http://docs.autodesk.com -->\n\
<html>\n\
   <head><script src=\"../scripts/yepnope.1.5.4-min.js\" type=\"text/javascript\"></script><script src=\"../scripts/lib/jquery-1.11.1.min.js\" type=\"text/javascript\"></script><meta http-equiv=\"Content-Type\" content=\"text/html; charset=UTF-8\"><meta name=\"product\" content=\"MAYAUL\"><meta name=\"release\" content=\"2017\"><meta name=\"book\" content=\"Developer\"><meta name=\"created\" content=\"2016-06-16\"><meta name=\"topicid\" content=\"GUID-02DEF634-1E7B-48C6-8ACD-2C934CA97887\"><meta name=\"topic-type\" content=\"concept\">\n\
      <title>sceneAssembly/assemblyDefinitionFileCache.cpp</title>\n\
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
    cpp_ref_adsk_ref_toc.initNavTree(\'scene_assembly_2assembly_definition_file_cache_8cpp-example.html\', tocPrefix);\n\
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
            <h1>sceneAssembly/assemblyDefinitionFileCache.cpp</h1>\n\
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
<div class=\"title\">sceneAssembly/assemblyDefinitionFileCache.cpp</div>  </div>\n\
</div><!--header-->\n\
<div class=\"contents\">\n\
<div class=\"fragment\"><div class=\"line\"><span class=\"comment\">//==============================================================================</span></div>\n\
<div class=\"line\"><span class=\"comment\">// EXTERNAL DECLARATIONS</span></div>\n\
<div class=\"line\"><span class=\"comment\">//==============================================================================</span></div>\n\
<div class=\"line\"></div>\n\
<div class=\"line\"><span class=\"preprocessor\">#include &quot;assemblyDefinitionFileCache.h&quot;</span></div>\n\
<div class=\"line\"></div>\n\
<div class=\"line\"><span class=\"preprocessor\">#include &lt;sys/types.h&gt;</span>          <span class=\"comment\">// For stat()</span></div>\n\
<div class=\"line\"><span class=\"preprocessor\">#include &lt;sys/stat.h&gt;</span></div>\n\
<div class=\"line\"></div>\n\
<div class=\"line\"><span class=\"preprocessor\">#include &lt;cassert&gt;</span></div>\n\
<div class=\"line\"><span class=\"preprocessor\">#include &lt;utility&gt;</span></div>\n\
<div class=\"line\"></div>\n\
<div class=\"line\"></div>\n\
<div class=\"line\"><span class=\"keyword\">namespace </span>{</div>\n\
<div class=\"line\"></div>\n\
<div class=\"line\"><span class=\"comment\">//==============================================================================</span></div>\n\
<div class=\"line\"><span class=\"comment\">// LOCAL DECLARATIONS</span></div>\n\
<div class=\"line\"><span class=\"comment\">//==============================================================================</span></div>\n\
<div class=\"line\"></div>\n\
<div class=\"line\"><span class=\"comment\">/*----- variables -----*/</span></div>\n\
<div class=\"line\"></div>\n\
<div class=\"line\">AssemblyDefinitionFileCache fsTheInstance;</div>\n\
<div class=\"line\"></div>\n\
<div class=\"line\">}</div>\n\
<div class=\"line\"></div>\n\
<div class=\"line\"><span class=\"comment\">//==============================================================================</span></div>\n\
<div class=\"line\"><span class=\"comment\">// PUBLIC FUNCTIONS</span></div>\n\
<div class=\"line\"><span class=\"comment\">//==============================================================================</span></div>\n\
<div class=\"line\"></div>\n\
<div class=\"line\"><span class=\"comment\">//==============================================================================</span></div>\n\
<div class=\"line\"><span class=\"comment\">// CLASS AssemblyDefinitionFileCache::Timestamp</span></div>\n\
<div class=\"line\"><span class=\"comment\">//==============================================================================</span></div>\n\
<div class=\"line\"></div>\n\
<div class=\"line\"><span class=\"comment\">//------------------------------------------------------------------------------</span></div>\n\
<div class=\"line\"><span class=\"comment\">//</span></div>\n\
<div class=\"line\">AssemblyDefinitionFileCache::Timestamp::Timestamp(<span class=\"keyword\">const</span> <a name=\"_a0\"></a><a class=\"code\" href=\"#!/url=./cpp_ref/class_m_string.html\">MString</a>&amp; path)</div>\n\
<div class=\"line\">    : fFileSize(-1)</div>\n\
<div class=\"line\">{</div>\n\
<div class=\"line\">    <span class=\"keyword\">struct </span>stat stat_buf;</div>\n\
<div class=\"line\"></div>\n\
<div class=\"line\">    <span class=\"keywordflow\">if</span> (stat(path.<a name=\"a1\"></a><a class=\"code\" href=\"#!/url=./cpp_ref/class_m_string.html#aa9ab612f356c53479afc4c648c9ef94d\">asChar</a>(), &amp;stat_buf) != 0)</div>\n\
<div class=\"line\">        <span class=\"keywordflow\">return</span>;</div>\n\
<div class=\"line\"></div>\n\
<div class=\"line\">    fFileSize      = stat_buf.st_size;</div>\n\
<div class=\"line\">    fMTime         = stat_buf.st_mtime;</div>\n\
<div class=\"line\">}</div>\n\
<div class=\"line\">    </div>\n\
<div class=\"line\"></div>\n\
<div class=\"line\"><span class=\"comment\">//------------------------------------------------------------------------------</span></div>\n\
<div class=\"line\"><span class=\"comment\">//</span></div>\n\
<div class=\"line\"><span class=\"keyword\">inline</span> <span class=\"keywordtype\">bool</span> operator==(<span class=\"keyword\">const</span> AssemblyDefinitionFileCache::Timestamp&amp; lhs,</div>\n\
<div class=\"line\">                       <span class=\"keyword\">const</span> AssemblyDefinitionFileCache::Timestamp&amp; rhs)</div>\n\
<div class=\"line\">{</div>\n\
<div class=\"line\">    <span class=\"keywordflow\">return</span> (lhs.fFileSize == rhs.fFileSize &amp;&amp;</div>\n\
<div class=\"line\">            lhs.fMTime    == rhs.fMTime    );</div>\n\
<div class=\"line\">}</div>\n\
<div class=\"line\"></div>\n\
<div class=\"line\"></div>\n\
<div class=\"line\"><span class=\"comment\">//==============================================================================</span></div>\n\
<div class=\"line\"><span class=\"comment\">// CLASS AssemblyDefinitionFileCache::Entry</span></div>\n\
<div class=\"line\"><span class=\"comment\">//==============================================================================</span></div>\n\
<div class=\"line\"></div>\n\
<div class=\"line\"><span class=\"comment\">//------------------------------------------------------------------------------</span></div>\n\
<div class=\"line\"><span class=\"comment\">//</span></div>\n\
<div class=\"line\"><span class=\"keywordtype\">void</span> AssemblyDefinitionFileCache::Entry::Deleter::operator()(Entry* entry)</div>\n\
<div class=\"line\">{</div>\n\
<div class=\"line\">    AssemblyDefinitionFileCache&amp; cache =</div>\n\
<div class=\"line\">        AssemblyDefinitionFileCache::getInstance();</div>\n\
<div class=\"line\">    Entries::iterator it = cache.fEntries.find(entry-&gt;fDefnFile);</div>\n\
<div class=\"line\"></div>\n\
<div class=\"line\">    <span class=\"comment\">// The deleter might be invoked after AssemblyDefinitionFileCache::get()</span></div>\n\
<div class=\"line\">    <span class=\"comment\">// has removed the entry from the cache if the file timestamp ended-up</span></div>\n\
<div class=\"line\">    <span class=\"comment\">// being different. We therefore have to explicitly test for that</span></div>\n\
<div class=\"line\">    <span class=\"comment\">// possibility.</span></div>\n\
<div class=\"line\">    <span class=\"keywordflow\">if</span> (it != cache.fEntries.end()) {</div>\n\
<div class=\"line\">        <span class=\"comment\">// No assemblyReference node is referring to that entry anymore. We</span></div>\n\
<div class=\"line\">        <span class=\"comment\">// should therefore remove the now expired pointer to this entry from</span></div>\n\
<div class=\"line\">        <span class=\"comment\">// the cache. But, we have to be careful. It is possible that the cache</span></div>\n\
<div class=\"line\">        <span class=\"comment\">// entry has been replaced with one with a newer timestamp. This case</span></div>\n\
<div class=\"line\">        <span class=\"comment\">// is detected by double-checking that the pointer has expired before</span></div>\n\
<div class=\"line\">        <span class=\"comment\">// attempting to erase the entry from the cache.</span></div>\n\
<div class=\"line\">        <span class=\"keywordflow\">if</span> (it-&gt;second.expired()) {</div>\n\
<div class=\"line\">            cache.fEntries.erase(it);</div>\n\
<div class=\"line\">        }</div>\n\
<div class=\"line\">    }</div>\n\
<div class=\"line\">    </div>\n\
<div class=\"line\">    <span class=\"keyword\">delete</span> entry;</div>\n\
<div class=\"line\">}</div>\n\
<div class=\"line\"></div>\n\
<div class=\"line\"></div>\n\
<div class=\"line\"><span class=\"comment\">//==============================================================================</span></div>\n\
<div class=\"line\"><span class=\"comment\">// CLASS AssemblyDefinitionFileCache</span></div>\n\
<div class=\"line\"><span class=\"comment\">//==============================================================================</span></div>\n\
<div class=\"line\"></div>\n\
<div class=\"line\"><span class=\"comment\">//------------------------------------------------------------------------------</span></div>\n\
<div class=\"line\"><span class=\"comment\">//</span></div>\n\
<div class=\"line\">AssemblyDefinitionFileCache&amp; AssemblyDefinitionFileCache::getInstance()</div>\n\
<div class=\"line\">{</div>\n\
<div class=\"line\">    <span class=\"keywordflow\">return</span> fsTheInstance;</div>\n\
<div class=\"line\">}</div>\n\
<div class=\"line\"></div>\n\
<div class=\"line\"></div>\n\
<div class=\"line\"><span class=\"comment\">//------------------------------------------------------------------------------</span></div>\n\
<div class=\"line\"><span class=\"comment\">//</span></div>\n\
<div class=\"line\">AssemblyDefinitionFileCache::EntryPtr</div>\n\
<div class=\"line\">AssemblyDefinitionFileCache::get(<span class=\"keyword\">const</span> <a class=\"code\" href=\"#!/url=./cpp_ref/class_m_string.html\">MString</a>&amp; defnFile)</div>\n\
<div class=\"line\">{</div>\n\
<div class=\"line\">    <span class=\"keyword\">using namespace </span>std::rel_ops;</div>\n\
<div class=\"line\"></div>\n\
<div class=\"line\">    Entries::iterator it = fEntries.find(std::string(defnFile.<a class=\"code\" href=\"#!/url=./cpp_ref/class_m_string.html#aa9ab612f356c53479afc4c648c9ef94d\">asChar</a>()));</div>\n\
<div class=\"line\">    <span class=\"keywordflow\">if</span> (it == fEntries.end()) <span class=\"keywordflow\">return</span> EntryPtr();</div>\n\
<div class=\"line\"></div>\n\
<div class=\"line\">    EntryPtr entry(it-&gt;second);</div>\n\
<div class=\"line\">    <span class=\"keywordflow\">if</span> (!entry) <span class=\"keywordflow\">return</span> EntryPtr();</div>\n\
<div class=\"line\"></div>\n\
<div class=\"line\">    <span class=\"keyword\">const</span> Timestamp timestamp(defnFile);</div>\n\
<div class=\"line\">    <span class=\"keywordflow\">if</span> (entry-&gt;getTimestamp() != timestamp) {</div>\n\
<div class=\"line\">        <span class=\"comment\">// The file has changed since it was last read and cached. Get</span></div>\n\
<div class=\"line\">        <span class=\"comment\">// rid of the stale cache entry and read it again.</span></div>\n\
<div class=\"line\">        fEntries.erase(it);</div>\n\
<div class=\"line\">        <span class=\"keywordflow\">return</span> EntryPtr();</div>\n\
<div class=\"line\">    }</div>\n\
<div class=\"line\"></div>\n\
<div class=\"line\">    <span class=\"keywordflow\">return</span> entry;</div>\n\
<div class=\"line\">}</div>\n\
<div class=\"line\">    </div>\n\
<div class=\"line\"></div>\n\
<div class=\"line\"><span class=\"comment\">//------------------------------------------------------------------------------</span></div>\n\
<div class=\"line\"><span class=\"comment\">//</span></div>\n\
<div class=\"line\">AssemblyDefinitionFileCache::EntryPtr</div>\n\
<div class=\"line\">AssemblyDefinitionFileCache::insert(</div>\n\
<div class=\"line\">    <span class=\"keyword\">const</span> <a class=\"code\" href=\"#!/url=./cpp_ref/class_m_string.html\">MString</a>&amp;              defnFile,</div>\n\
<div class=\"line\">    <span class=\"keyword\">const</span> RepCreationArgsList&amp;  repCreationArgsList)</div>\n\
<div class=\"line\">{</div>\n\
<div class=\"line\">    <span class=\"keyword\">const</span> std::string defnFileString(defnFile.<a class=\"code\" href=\"#!/url=./cpp_ref/class_m_string.html#aa9ab612f356c53479afc4c648c9ef94d\">asChar</a>());</div>\n\
<div class=\"line\">    EntryPtr entry(</div>\n\
<div class=\"line\">        <span class=\"keyword\">new</span> Entry(defnFileString,</div>\n\
<div class=\"line\">                  Timestamp(defnFile),</div>\n\
<div class=\"line\">                  repCreationArgsList),</div>\n\
<div class=\"line\">        Entry::Deleter());</div>\n\
<div class=\"line\">        </div>\n\
<div class=\"line\"><span class=\"preprocessor\">#ifndef NDEBUG</span></div>\n\
<div class=\"line\">    std::pair&lt;Entries::iterator, bool&gt; result =</div>\n\
<div class=\"line\"><span class=\"preprocessor\">#endif            </span></div>\n\
<div class=\"line\">        fEntries.insert(std::make_pair(defnFileString, entry));</div>\n\
<div class=\"line\">    assert(result.second);</div>\n\
<div class=\"line\"></div>\n\
<div class=\"line\">    <span class=\"keywordflow\">return</span> entry;</div>\n\
<div class=\"line\">}</div>\n\
<div class=\"line\">    </div>\n\
<div class=\"line\"></div>\n\
<div class=\"line\"><span class=\"comment\">//-</span></div>\n\
<div class=\"line\"><span class=\"comment\">// Copyright 2015 Autodesk, Inc. All rights reserved.</span></div>\n\
<div class=\"line\"><span class=\"comment\">// </span></div>\n\
<div class=\"line\"><span class=\"comment\">// Use of this software is subject to the terms of the Autodesk</span></div>\n\
<div class=\"line\"><span class=\"comment\">// license agreement provided at the time of installation or download,</span></div>\n\
<div class=\"line\"><span class=\"comment\">// or which otherwise accompanies this software in either electronic</span></div>\n\
<div class=\"line\"><span class=\"comment\">// or hard copy form.</span></div>\n\
<div class=\"line\"><span class=\"comment\">//+</span></div>\n\
<div class=\"line\"></div>\n\
</div><!-- fragment --> </div><!-- contents -->\n\
</div><!-- doc-content -->\n\
          <div class=\"footer-block\"><a href=\"../html/ac.cmtdialog.htm\" class=\"comments-anchor\" target=\"_blank\"><span class=\"comments-link\">Please send us your comment about this page</span></a></div><br></div>\n\
   </div></body>\n\
</html>\n\
";