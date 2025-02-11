var topic = "<!-- saved from url=(0024)http://docs.autodesk.com -->\n\
<html>\n\
   <head><script src=\"../scripts/yepnope.1.5.4-min.js\" type=\"text/javascript\"></script><script src=\"../scripts/lib/jquery-1.11.1.min.js\" type=\"text/javascript\"></script>\n\
      <title>C++ API Reference: sceneAssembly/assemblyDefinitionFileCache.h</title>\n\
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
    cpp_ref_adsk_ref_toc.initNavTree(\'scene_assembly_2assembly_definition_file_cache_8h-example.html\', tocPrefix);\n\
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
            <h1>C++ API Reference: sceneAssembly/assemblyDefinitionFileCache.h</h1>\n\
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
<div class=\"title\">sceneAssembly/assemblyDefinitionFileCache.h</div>  </div>\n\
</div><!--header-->\n\
<div class=\"contents\">\n\
<div class=\"fragment\"><div class=\"line\"><span class=\"preprocessor\">#ifndef _assemblyDefinitionFileCache_h_</span></div>\n\
<div class=\"line\"><span class=\"preprocessor\">#define _assemblyDefinitionFileCache_h_</span></div>\n\
<div class=\"line\"></div>\n\
<div class=\"line\"><span class=\"comment\">/*==============================================================================</span></div>\n\
<div class=\"line\"><span class=\"comment\"> * EXTERNAL DECLARATIONS</span></div>\n\
<div class=\"line\"><span class=\"comment\"> *============================================================================*/</span></div>\n\
<div class=\"line\"></div>\n\
<div class=\"line\"><span class=\"preprocessor\">#include &lt;maya/MString.h&gt;</span></div>\n\
<div class=\"line\"></div>\n\
<div class=\"line\"><span class=\"preprocessor\">#include &lt;ciso646&gt;</span></div>\n\
<div class=\"line\"><span class=\"preprocessor\">#if defined( _WIN32 ) || defined( _LIBCPP_VERSION )</span></div>\n\
<div class=\"line\"><span class=\"preprocessor\">#include &lt;memory&gt;</span></div>\n\
<div class=\"line\"><span class=\"preprocessor\">#include &lt;unordered_map&gt;</span></div>\n\
<div class=\"line\"><span class=\"preprocessor\">#define ADSTD std</span></div>\n\
<div class=\"line\"><span class=\"preprocessor\">#else</span></div>\n\
<div class=\"line\"><span class=\"preprocessor\">#include &lt;tr1/memory&gt;</span></div>\n\
<div class=\"line\"><span class=\"comment\">// Note:</span></div>\n\
<div class=\"line\"><span class=\"comment\">// We found tr1::unordered_map::begin() is O(n) on Linux. </span></div>\n\
<div class=\"line\"><span class=\"comment\">// The C++11 standard clearly states that begin() must be O(1) </span></div>\n\
<div class=\"line\"><span class=\"comment\">// for all std containers This means that the platform </span></div>\n\
<div class=\"line\"><span class=\"comment\">// implementation of tr1::unordered_map is not C++11 compliant yet.</span></div>\n\
<div class=\"line\"><span class=\"comment\">// If meet performance issue with tr1::unordered_map, suggest to </span></div>\n\
<div class=\"line\"><span class=\"comment\">// use boost library, which is cross-platform and boost::unordered_map</span></div>\n\
<div class=\"line\"><span class=\"comment\">// is C++11 compliant.</span></div>\n\
<div class=\"line\"><span class=\"preprocessor\">#include &lt;tr1/unordered_map&gt;</span></div>\n\
<div class=\"line\"><span class=\"preprocessor\">#define ADSTD std::tr1</span></div>\n\
<div class=\"line\"><span class=\"preprocessor\">#endif</span></div>\n\
<div class=\"line\"></div>\n\
<div class=\"line\"><span class=\"preprocessor\">#include &lt;string&gt;</span></div>\n\
<div class=\"line\"><span class=\"preprocessor\">#include &lt;vector&gt;</span></div>\n\
<div class=\"line\"></div>\n\
<div class=\"line\"><span class=\"preprocessor\">#include &lt;time.h&gt;</span>               <span class=\"comment\">// For time_t.</span></div>\n\
<div class=\"line\"></div>\n\
<div class=\"line\"></div>\n\
<div class=\"line\"><span class=\"comment\">/*==============================================================================</span></div>\n\
<div class=\"line\"><span class=\"comment\"> * CLASS AssemblyDefinitionFileCache</span></div>\n\
<div class=\"line\"><span class=\"comment\"> *============================================================================*/</span></div>\n\
<div class=\"line\"></div>\n\
<div class=\"line\"><span class=\"comment\">// Cache the content of definition files.</span></div>\n\
<div class=\"line\"><span class=\"comment\">//</span></div>\n\
<div class=\"line\"><span class=\"comment\">// This is useful when several assemblyReference nodes are referring</span></div>\n\
<div class=\"line\"><span class=\"comment\">// to the same assembly definition file. In turns out that the process</span></div>\n\
<div class=\"line\"><span class=\"comment\">// of reading the definition file is costly (MEL interpretation</span></div>\n\
<div class=\"line\"><span class=\"comment\">// overhead, Maya scene file common information, post scene read</span></div>\n\
<div class=\"line\"><span class=\"comment\">// callbacks, etc.). By caching the content of the definition file, we</span></div>\n\
<div class=\"line\"><span class=\"comment\">// can avoid paying that cost over and over again.</span></div>\n\
<div class=\"line\"><span class=\"keyword\">class </span>AssemblyDefinitionFileCache </div>\n\
<div class=\"line\">{</div>\n\
<div class=\"line\"><span class=\"keyword\">private</span>:</div>\n\
<div class=\"line\"></div>\n\
<div class=\"line\">    <span class=\"comment\">/*----- types -----*/</span></div>\n\
<div class=\"line\">    </div>\n\
<div class=\"line\">    <span class=\"comment\">// Information used to determine if a file has changed since it</span></div>\n\
<div class=\"line\">    <span class=\"comment\">// was last read or accessed. We are currently using the</span></div>\n\
<div class=\"line\">    <span class=\"comment\">// combination of the file size and the last modification</span></div>\n\
<div class=\"line\">    <span class=\"comment\">// time. Alternatively, a cryptographic checksum (MD5, Murmur3,</span></div>\n\
<div class=\"line\">    <span class=\"comment\">// etc.) could also have been used.</span></div>\n\
<div class=\"line\">    <span class=\"keyword\">class </span>Timestamp </div>\n\
<div class=\"line\">    {</div>\n\
<div class=\"line\">    <span class=\"keyword\">public</span>:</div>\n\
<div class=\"line\">        Timestamp(<span class=\"keyword\">const</span> <a name=\"_a0\"></a><a class=\"code\" href=\"#!/url=./cpp_ref/class_m_string.html\">MString</a>&amp; path);</div>\n\
<div class=\"line\"></div>\n\
<div class=\"line\">        MInt64   fFileSize;  <span class=\"comment\">// File size.</span></div>\n\
<div class=\"line\">        time_t   fMTime;     <span class=\"comment\">// Last modification time.</span></div>\n\
<div class=\"line\">    };</div>\n\
<div class=\"line\"></div>\n\
<div class=\"line\">    <span class=\"keyword\">friend</span> <span class=\"keyword\">inline</span> <span class=\"keywordtype\">bool</span> operator==(<span class=\"keyword\">const</span> Timestamp&amp; lhs,</div>\n\
<div class=\"line\">                                  <span class=\"keyword\">const</span> Timestamp&amp; rhs);</div>\n\
<div class=\"line\"></div>\n\
<div class=\"line\"><span class=\"keyword\">public</span>:</div>\n\
<div class=\"line\"></div>\n\
<div class=\"line\">    <span class=\"comment\">/*----- types -----*/</span></div>\n\
<div class=\"line\"></div>\n\
<div class=\"line\">    <span class=\"comment\">// Information necessary to create a given representation.</span></div>\n\
<div class=\"line\">    <span class=\"keyword\">class </span>RepresentationCreationArgs </div>\n\
<div class=\"line\">    {</div>\n\
<div class=\"line\">    <span class=\"keyword\">public</span>:</div>\n\
<div class=\"line\"></div>\n\
<div class=\"line\">        <span class=\"comment\">/*----- member functions -----*/</span></div>\n\
<div class=\"line\"></div>\n\
<div class=\"line\">        RepresentationCreationArgs(<span class=\"keyword\">const</span> <a class=\"code\" href=\"#!/url=./cpp_ref/class_m_string.html\">MString</a>&amp; name,</div>\n\
<div class=\"line\">                                   <span class=\"keyword\">const</span> <a class=\"code\" href=\"#!/url=./cpp_ref/class_m_string.html\">MString</a>&amp; type,</div>\n\
<div class=\"line\">                                   <span class=\"keyword\">const</span> <a class=\"code\" href=\"#!/url=./cpp_ref/class_m_string.html\">MString</a>&amp; label,</div>\n\
<div class=\"line\">                                   <span class=\"keyword\">const</span> <a class=\"code\" href=\"#!/url=./cpp_ref/class_m_string.html\">MString</a>&amp; data)</div>\n\
<div class=\"line\">            : fName(name), fType(type), fLabel(label), fData(data)</div>\n\
<div class=\"line\">        {}</div>\n\
<div class=\"line\"></div>\n\
<div class=\"line\">        <span class=\"keyword\">const</span> <a class=\"code\" href=\"#!/url=./cpp_ref/class_m_string.html\">MString</a>&amp; getName()<span class=\"keyword\">  const </span>{ <span class=\"keywordflow\">return</span> fName;  }</div>\n\
<div class=\"line\">        <span class=\"keyword\">const</span> <a class=\"code\" href=\"#!/url=./cpp_ref/class_m_string.html\">MString</a>&amp; getType()<span class=\"keyword\">  const </span>{ <span class=\"keywordflow\">return</span> fType;  }</div>\n\
<div class=\"line\">        <span class=\"keyword\">const</span> <a class=\"code\" href=\"#!/url=./cpp_ref/class_m_string.html\">MString</a>&amp; getLabel()<span class=\"keyword\"> const </span>{ <span class=\"keywordflow\">return</span> fLabel; }</div>\n\
<div class=\"line\">        <span class=\"keyword\">const</span> <a class=\"code\" href=\"#!/url=./cpp_ref/class_m_string.html\">MString</a>&amp; getData()<span class=\"keyword\">  const </span>{ <span class=\"keywordflow\">return</span> fData;  }</div>\n\
<div class=\"line\">    </div>\n\
<div class=\"line\">    <span class=\"keyword\">private</span>:</div>\n\
<div class=\"line\"></div>\n\
<div class=\"line\">        <span class=\"comment\">/*----- data members -----*/</span></div>\n\
<div class=\"line\">    </div>\n\
<div class=\"line\">        <a class=\"code\" href=\"#!/url=./cpp_ref/class_m_string.html\">MString</a> fName;</div>\n\
<div class=\"line\">        <a class=\"code\" href=\"#!/url=./cpp_ref/class_m_string.html\">MString</a> fType;</div>\n\
<div class=\"line\">        <a class=\"code\" href=\"#!/url=./cpp_ref/class_m_string.html\">MString</a> fLabel;</div>\n\
<div class=\"line\">        <a class=\"code\" href=\"#!/url=./cpp_ref/class_m_string.html\">MString</a> fData;</div>\n\
<div class=\"line\">    };</div>\n\
<div class=\"line\"></div>\n\
<div class=\"line\">    <span class=\"keyword\">typedef</span> std::vector&lt;RepresentationCreationArgs&gt; RepCreationArgsList;</div>\n\
<div class=\"line\"></div>\n\
<div class=\"line\">    <span class=\"keyword\">class </span>Entry </div>\n\
<div class=\"line\">    {</div>\n\
<div class=\"line\">    <span class=\"keyword\">public</span>:</div>\n\
<div class=\"line\">        </div>\n\
<div class=\"line\">        <span class=\"comment\">/*----- member functions -----*/</span></div>\n\
<div class=\"line\"></div>\n\
<div class=\"line\">        <span class=\"keyword\">const</span> RepCreationArgsList&amp; getRepCreationArgsList()<span class=\"keyword\"> const</span></div>\n\
<div class=\"line\"><span class=\"keyword\">        </span>{ <span class=\"keywordflow\">return</span> fRepCreationArgsList; }</div>\n\
<div class=\"line\"></div>\n\
<div class=\"line\"></div>\n\
<div class=\"line\">    <span class=\"keyword\">private</span>:</div>\n\
<div class=\"line\">        <span class=\"keyword\">friend</span> <span class=\"keyword\">class </span>AssemblyDefinitionFileCache;</div>\n\
<div class=\"line\">        </div>\n\
<div class=\"line\">        <span class=\"comment\">/*----- types -----*/</span></div>\n\
<div class=\"line\"></div>\n\
<div class=\"line\">        <span class=\"keyword\">struct </span>Deleter { <span class=\"keywordtype\">void</span> operator()(Entry* entry); };</div>\n\
<div class=\"line\">        </div>\n\
<div class=\"line\"></div>\n\
<div class=\"line\">        <span class=\"comment\">/*----- member functions -----*/</span></div>\n\
<div class=\"line\"></div>\n\
<div class=\"line\">        <span class=\"comment\">// Note that it would have been nice to be able to use C++11</span></div>\n\
<div class=\"line\">        <span class=\"comment\">// move semantic to avoid copying the repCreationArgsList</span></div>\n\
<div class=\"line\">        <span class=\"comment\">// here.</span></div>\n\
<div class=\"line\">        Entry(<span class=\"keyword\">const</span> std::string&amp;         defnFile,</div>\n\
<div class=\"line\">              <span class=\"keyword\">const</span> Timestamp&amp;           timestamp,</div>\n\
<div class=\"line\">              <span class=\"keyword\">const</span> RepCreationArgsList&amp; repCreationArgsList)</div>\n\
<div class=\"line\">            : fDefnFile(            defnFile),</div>\n\
<div class=\"line\">              fTimestamp(           timestamp),</div>\n\
<div class=\"line\">              fRepCreationArgsList( repCreationArgsList)</div>\n\
<div class=\"line\">        {}</div>\n\
<div class=\"line\"></div>\n\
<div class=\"line\">        <span class=\"keyword\">const</span> Timestamp&amp; getTimestamp()<span class=\"keyword\"> const</span></div>\n\
<div class=\"line\"><span class=\"keyword\">        </span>{ <span class=\"keywordflow\">return</span> fTimestamp; }</div>\n\
<div class=\"line\"></div>\n\
<div class=\"line\">        </div>\n\
<div class=\"line\">        <span class=\"comment\">/*----- data members -----*/</span></div>\n\
<div class=\"line\"></div>\n\
<div class=\"line\">        std::string         fDefnFile;</div>\n\
<div class=\"line\">        Timestamp           fTimestamp;</div>\n\
<div class=\"line\">        RepCreationArgsList fRepCreationArgsList;</div>\n\
<div class=\"line\">    };</div>\n\
<div class=\"line\"></div>\n\
<div class=\"line\">    </div>\n\
<div class=\"line\">    <span class=\"keyword\">typedef</span> ADSTD::shared_ptr&lt;Entry&gt; EntryPtr;</div>\n\
<div class=\"line\"></div>\n\
<div class=\"line\"></div>\n\
<div class=\"line\">    <span class=\"comment\">/*----- static member functions -----*/</span></div>\n\
<div class=\"line\"></div>\n\
<div class=\"line\">    <span class=\"keyword\">static</span> AssemblyDefinitionFileCache&amp; getInstance();</div>\n\
<div class=\"line\"></div>\n\
<div class=\"line\"></div>\n\
<div class=\"line\">    <span class=\"comment\">/*----- member functions -----*/</span></div>\n\
<div class=\"line\"></div>\n\
<div class=\"line\">    <span class=\"comment\">// Look-up the cache for an entry matching the corresponding</span></div>\n\
<div class=\"line\">    <span class=\"comment\">// definition file. Returns a null pointer if no matching entries</span></div>\n\
<div class=\"line\">    <span class=\"comment\">// are found.</span></div>\n\
<div class=\"line\">    EntryPtr <span class=\"keyword\">get</span>(<span class=\"keyword\">const</span> <a class=\"code\" href=\"#!/url=./cpp_ref/class_m_string.html\">MString</a>&amp; defnFile);</div>\n\
<div class=\"line\"></div>\n\
<div class=\"line\">    <span class=\"comment\">// Insert a new entry into the cache. The entry is for the given</span></div>\n\
<div class=\"line\">    <span class=\"comment\">// definition file containing the given list of</span></div>\n\
<div class=\"line\">    <span class=\"comment\">// representations. Returns pointer to the newly created</span></div>\n\
<div class=\"line\">    <span class=\"comment\">// entry. The caller is responsible for first calling get() to</span></div>\n\
<div class=\"line\">    <span class=\"comment\">// ensure that no matching entry exists for the given definition</span></div>\n\
<div class=\"line\">    <span class=\"comment\">// file before attempting to insert the entry into the cache.</span></div>\n\
<div class=\"line\">    EntryPtr insert(<span class=\"keyword\">const</span> <a class=\"code\" href=\"#!/url=./cpp_ref/class_m_string.html\">MString</a>&amp;              defnFile,</div>\n\
<div class=\"line\">                    <span class=\"keyword\">const</span> RepCreationArgsList&amp;  repCreationArgsList);</div>\n\
<div class=\"line\"></div>\n\
<div class=\"line\"><span class=\"keyword\">private</span>:</div>\n\
<div class=\"line\"></div>\n\
<div class=\"line\">    <span class=\"comment\">/*----- types -----*/</span></div>\n\
<div class=\"line\">    </div>\n\
<div class=\"line\">    <span class=\"keyword\">typedef</span> ADSTD::unordered_map&lt;std::string, ADSTD::weak_ptr&lt;Entry&gt; &gt; Entries;</div>\n\
<div class=\"line\"></div>\n\
<div class=\"line\">    <span class=\"comment\">/*----- data members -----*/</span></div>\n\
<div class=\"line\">    </div>\n\
<div class=\"line\">    Entries fEntries;</div>\n\
<div class=\"line\">};</div>\n\
<div class=\"line\"></div>\n\
<div class=\"line\"><span class=\"preprocessor\">#endif</span></div>\n\
<div class=\"line\"></div>\n\
<div class=\"line\"><span class=\"comment\">//-</span></div>\n\
<div class=\"line\"><span class=\"comment\">//*****************************************************************************</span></div>\n\
<div class=\"line\"><span class=\"comment\">// Copyright 2013 Autodesk, Inc.</span></div>\n\
<div class=\"line\"><span class=\"comment\">// All rights reserved.</span></div>\n\
<div class=\"line\"><span class=\"comment\">// </span></div>\n\
<div class=\"line\"><span class=\"comment\">// Use of this software is subject to the terms of the Autodesk license</span></div>\n\
<div class=\"line\"><span class=\"comment\">// agreement provided at the time of installation or download, or which</span></div>\n\
<div class=\"line\"><span class=\"comment\">// otherwise accompanies this software in either electronic or hard copy</span></div>\n\
<div class=\"line\"><span class=\"comment\">// form.</span></div>\n\
<div class=\"line\"><span class=\"comment\">//*****************************************************************************</span></div>\n\
<div class=\"line\"><span class=\"comment\">//+</span></div>\n\
</div><!-- fragment --> </div><!-- contents -->\n\
</div><!-- doc-content -->\n\
<!-- start footer part -->\n\
\n\
      <div class=\"footer-block\"><a href=\"../html/ac.cmtdialog.htm\" class=\"comments-anchor\" target=\"_blank\"><span class=\"comments-link\">Please send us your comment about this page</span></a></div></div>\n\
   </div></body>\n\
</html>\n\
";