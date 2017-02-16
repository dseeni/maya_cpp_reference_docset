var topic = "<!-- saved from url=(0024)http://docs.autodesk.com -->\n\
<html>\n\
   <head><script src=\"../scripts/yepnope.1.5.4-min.js\" type=\"text/javascript\"></script><script src=\"../scripts/lib/jquery-1.11.1.min.js\" type=\"text/javascript\"></script><meta http-equiv=\"Content-Type\" content=\"text/html; charset=UTF-8\"><meta name=\"product\" content=\"MAYAUL\"><meta name=\"release\" content=\"2017\"><meta name=\"book\" content=\"Developer\"><meta name=\"created\" content=\"2016-06-16\"><meta name=\"topicid\" content=\"GUID-02DEF634-1E7B-48C6-8ACD-2C934CA97887\"><meta name=\"topic-type\" content=\"concept\">\n\
      <title>sceneAssembly/adskRepresentationCmd.cpp</title>\n\
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
    cpp_ref_adsk_ref_toc.initNavTree(\'scene_assembly_2adsk_representation_cmd_8cpp-example.html\', tocPrefix);\n\
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
            <h1>sceneAssembly/adskRepresentationCmd.cpp</h1>\n\
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
<div class=\"title\">sceneAssembly/adskRepresentationCmd.cpp</div>  </div>\n\
</div><!--header-->\n\
<div class=\"contents\">\n\
<div class=\"fragment\"><div class=\"line\"><span class=\"preprocessor\">#include &quot;sceneAssemblyStrings.h&quot;</span></div>\n\
<div class=\"line\"><span class=\"preprocessor\">#include &quot;adskRepresentationCmd.h&quot;</span></div>\n\
<div class=\"line\"><span class=\"preprocessor\">#include &quot;assemblyDefinition.h&quot;</span></div>\n\
<div class=\"line\"></div>\n\
<div class=\"line\"><span class=\"preprocessor\">#include &lt;maya/MSyntax.h&gt;</span></div>\n\
<div class=\"line\"><span class=\"preprocessor\">#include &lt;maya/MGlobal.h&gt;</span></div>\n\
<div class=\"line\"></div>\n\
<div class=\"line\"><span class=\"preprocessor\">#include &lt;iostream&gt;</span></div>\n\
<div class=\"line\"><span class=\"preprocessor\">#include &lt;string&gt;</span></div>\n\
<div class=\"line\"></div>\n\
<div class=\"line\"><span class=\"preprocessor\">#include &lt;ciso646&gt;</span></div>\n\
<div class=\"line\"><span class=\"preprocessor\">#if defined( _WIN32 ) || defined( _LIBCPP_VERSION )</span></div>\n\
<div class=\"line\"><span class=\"preprocessor\">#include &lt;unordered_map&gt;</span></div>\n\
<div class=\"line\"><span class=\"preprocessor\">#define ADSTD std</span></div>\n\
<div class=\"line\"><span class=\"preprocessor\">#else</span></div>\n\
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
<div class=\"line\"><span class=\"keyword\">using namespace </span>std;</div>\n\
<div class=\"line\"></div>\n\
<div class=\"line\"><span class=\"keyword\">namespace </span>{</div>\n\
<div class=\"line\"></div>\n\
<div class=\"line\"><span class=\"comment\">//==============================================================================</span></div>\n\
<div class=\"line\"><span class=\"comment\">// LOCAL DECLARATIONS</span></div>\n\
<div class=\"line\"><span class=\"comment\">//==============================================================================</span></div>\n\
<div class=\"line\"></div>\n\
<div class=\"line\"><span class=\"comment\">/*----- classes -----*/</span></div>\n\
<div class=\"line\"></div>\n\
<div class=\"line\"><span class=\"keyword\">class </span>RegistryEntry {</div>\n\
<div class=\"line\"></div>\n\
<div class=\"line\"><span class=\"keyword\">public</span>:</div>\n\
<div class=\"line\"></div>\n\
<div class=\"line\">   <span class=\"comment\">/*----- types and enumerations -----*/</span></div>\n\
<div class=\"line\"></div>\n\
<div class=\"line\">   <span class=\"comment\">// Copy ctor and assignment optor not defined, as</span></div>\n\
<div class=\"line\">   <span class=\"comment\">// compiler defaults (memberwise default ctor, memberwise copy,</span></div>\n\
<div class=\"line\">   <span class=\"comment\">// memberwise assignment, respectively) are fine.</span></div>\n\
<div class=\"line\">   RegistryEntry() : fTypeLabel() {}  </div>\n\
<div class=\"line\">   ~RegistryEntry() {}</div>\n\
<div class=\"line\">  </div>\n\
<div class=\"line\">   <a name=\"_a0\"></a><a class=\"code\" href=\"#!/url=./cpp_ref/class_m_string.html\">MString</a> typeLabel()<span class=\"keyword\"> const </span>{ <span class=\"keywordflow\">return</span> fTypeLabel; }</div>\n\
<div class=\"line\">   <a class=\"code\" href=\"#!/url=./cpp_ref/class_m_string.html\">MString</a> aeRepresentationProc()<span class=\"keyword\"> const </span>{ <span class=\"keywordflow\">return</span> fAERepresentationProc; }</div>\n\
<div class=\"line\">   </div>\n\
<div class=\"line\">   <span class=\"keywordtype\">void</span>    setTypeLabel(<span class=\"keyword\">const</span> <a class=\"code\" href=\"#!/url=./cpp_ref/class_m_string.html\">MString</a>&amp; typeLabel) {</div>\n\
<div class=\"line\">      fTypeLabel = typeLabel;</div>\n\
<div class=\"line\">   }  </div>\n\
<div class=\"line\">   </div>\n\
<div class=\"line\">   <span class=\"keywordtype\">void</span>    setAERepresentationProc(<span class=\"keyword\">const</span> <a class=\"code\" href=\"#!/url=./cpp_ref/class_m_string.html\">MString</a>&amp; proc) {</div>\n\
<div class=\"line\">      fAERepresentationProc = proc;</div>\n\
<div class=\"line\">   }  </div>\n\
<div class=\"line\"></div>\n\
<div class=\"line\"><span class=\"keyword\">private</span>: </div>\n\
<div class=\"line\">   <a class=\"code\" href=\"#!/url=./cpp_ref/class_m_string.html\">MString</a> fTypeLabel;</div>\n\
<div class=\"line\">   <a class=\"code\" href=\"#!/url=./cpp_ref/class_m_string.html\">MString</a> fAERepresentationProc;    </div>\n\
<div class=\"line\">};</div>\n\
<div class=\"line\"></div>\n\
<div class=\"line\"><span class=\"comment\">/*----- types and enumerations -----*/</span></div>\n\
<div class=\"line\"></div>\n\
<div class=\"line\"><span class=\"keyword\">typedef</span> ADSTD::unordered_map&lt; std::string, RegistryEntry &gt; AdskRepresentationRegistry;</div>\n\
<div class=\"line\"></div>\n\
<div class=\"line\"><span class=\"comment\">/*----- variables -----*/</span></div>\n\
<div class=\"line\"></div>\n\
<div class=\"line\">AdskRepresentationRegistry fRegistry;       <span class=\"comment\">// Representation manager registry.</span></div>\n\
<div class=\"line\"></div>\n\
<div class=\"line\">}</div>\n\
<div class=\"line\"></div>\n\
<div class=\"line\"><span class=\"comment\">//==============================================================================</span></div>\n\
<div class=\"line\"><span class=\"comment\">// CLASS AdskRepresentationCmd</span></div>\n\
<div class=\"line\"><span class=\"comment\">//==============================================================================</span></div>\n\
<div class=\"line\"></div>\n\
<div class=\"line\"></div>\n\
<div class=\"line\"><span class=\"comment\">//------------------------------------------------------------------------------</span></div>\n\
<div class=\"line\"><span class=\"comment\">//</span></div>\n\
<div class=\"line\">AdskRepresentationCmd::AdskRepresentationCmd()</div>\n\
<div class=\"line\">   : fMode(kEdit)</div>\n\
<div class=\"line\">{}</div>\n\
<div class=\"line\"></div>\n\
<div class=\"line\"><span class=\"comment\">//------------------------------------------------------------------------------</span></div>\n\
<div class=\"line\"><span class=\"comment\">//</span></div>\n\
<div class=\"line\">AdskRepresentationCmd::~AdskRepresentationCmd()</div>\n\
<div class=\"line\">{}</div>\n\
<div class=\"line\"></div>\n\
<div class=\"line\"><span class=\"comment\">//------------------------------------------------------------------------------</span></div>\n\
<div class=\"line\"><span class=\"comment\">//</span></div>\n\
<div class=\"line\"><span class=\"keywordtype\">void</span>* AdskRepresentationCmd::creator()</div>\n\
<div class=\"line\">{</div>\n\
<div class=\"line\">    <span class=\"keywordflow\">return</span> <span class=\"keyword\">new</span> AdskRepresentationCmd();</div>\n\
<div class=\"line\">}</div>\n\
<div class=\"line\"></div>\n\
<div class=\"line\"><span class=\"comment\">//------------------------------------------------------------------------------</span></div>\n\
<div class=\"line\"><span class=\"comment\">//</span></div>\n\
<div class=\"line\"><a name=\"_a1\"></a><a class=\"code\" href=\"#!/url=./cpp_ref/class_m_syntax.html\">MSyntax</a> AdskRepresentationCmd::cmdSyntax()</div>\n\
<div class=\"line\">{</div>\n\
<div class=\"line\">    <a class=\"code\" href=\"#!/url=./cpp_ref/class_m_syntax.html\">MSyntax</a> syntax;</div>\n\
<div class=\"line\">    </div>\n\
<div class=\"line\">    syntax.<a name=\"a2\"></a><a class=\"code\" href=\"#!/url=./cpp_ref/class_m_syntax.html#aeaeaac3794bb4de8004afb1ac1829488\">addFlag</a>(<span class=\"stringliteral\">&quot;-tl&quot;</span>,  <span class=\"stringliteral\">&quot;-typeLabel&quot;</span>,      <a name=\"a3\"></a><a class=\"code\" href=\"#!/url=./cpp_ref/class_m_syntax.html#ae6f2057f0d0419845a48c1eb6813f2adafab53ea4a643325262b9c140af093279\">MSyntax::kString</a>);   </div>\n\
<div class=\"line\">    syntax.<a class=\"code\" href=\"#!/url=./cpp_ref/class_m_syntax.html#aeaeaac3794bb4de8004afb1ac1829488\">addFlag</a>(<span class=\"stringliteral\">&quot;-rcp&quot;</span>, <span class=\"stringliteral\">&quot;-updateAERepresentationProc&quot;</span>,      <a class=\"code\" href=\"#!/url=./cpp_ref/class_m_syntax.html#ae6f2057f0d0419845a48c1eb6813f2adafab53ea4a643325262b9c140af093279\">MSyntax::kString</a>);   </div>\n\
<div class=\"line\">    syntax.<a class=\"code\" href=\"#!/url=./cpp_ref/class_m_syntax.html#aeaeaac3794bb4de8004afb1ac1829488\">addFlag</a>(<span class=\"stringliteral\">&quot;-lrt&quot;</span>, <span class=\"stringliteral\">&quot;-listRepTypes&quot;</span>,      <a class=\"code\" href=\"#!/url=./cpp_ref/class_m_syntax.html#ae6f2057f0d0419845a48c1eb6813f2adafab53ea4a643325262b9c140af093279\">MSyntax::kString</a>);</div>\n\
<div class=\"line\">  </div>\n\
<div class=\"line\">    syntax.<a name=\"a4\"></a><a class=\"code\" href=\"#!/url=./cpp_ref/class_m_syntax.html#a299f2c91c864387f1b4208e99a72631d\">setObjectType</a>(<a name=\"a5\"></a><a class=\"code\" href=\"#!/url=./cpp_ref/class_m_syntax.html#a72b517c34c0de9b91ce4b5342675186ba95ae214c27f08b1e9d9a19245cca42fb\">MSyntax::kStringObjects</a>);</div>\n\
<div class=\"line\">    syntax.<a name=\"a6\"></a><a class=\"code\" href=\"#!/url=./cpp_ref/class_m_syntax.html#a414088ac458bc323845634fcf7663e69\">enableQuery</a>(<span class=\"keyword\">true</span>);</div>\n\
<div class=\"line\">    syntax.<a name=\"a7\"></a><a class=\"code\" href=\"#!/url=./cpp_ref/class_m_syntax.html#a2a329cd0b0d89bc1b9721c522d6d0006\">enableEdit</a>(<span class=\"keyword\">true</span>);</div>\n\
<div class=\"line\"></div>\n\
<div class=\"line\">    <span class=\"keywordflow\">return</span> syntax;</div>\n\
<div class=\"line\">}</div>\n\
<div class=\"line\"></div>\n\
<div class=\"line\"><span class=\"comment\">//------------------------------------------------------------------------------</span></div>\n\
<div class=\"line\"><span class=\"comment\">//</span></div>\n\
<div class=\"line\"><span class=\"keyword\">const</span> <span class=\"keywordtype\">char</span>* AdskRepresentationCmd::name()</div>\n\
<div class=\"line\">{</div>\n\
<div class=\"line\">    <span class=\"keywordflow\">return</span> <span class=\"stringliteral\">&quot;adskRepresentation&quot;</span>;</div>\n\
<div class=\"line\">}</div>\n\
<div class=\"line\"></div>\n\
<div class=\"line\"><span class=\"comment\">//------------------------------------------------------------------------------</span></div>\n\
<div class=\"line\"><span class=\"comment\">//</span></div>\n\
<div class=\"line\"><a name=\"_a8\"></a><a class=\"code\" href=\"#!/url=./cpp_ref/class_m_status.html\">MStatus</a> AdskRepresentationCmd::doIt(<span class=\"keyword\">const</span> <a name=\"_a9\"></a><a class=\"code\" href=\"#!/url=./cpp_ref/class_m_arg_list.html\">MArgList</a>&amp; args)</div>\n\
<div class=\"line\">{</div>\n\
<div class=\"line\">   <a class=\"code\" href=\"#!/url=./cpp_ref/class_m_status.html\">MStatus</a> status;</div>\n\
<div class=\"line\">    </div>\n\
<div class=\"line\">   <a name=\"_a10\"></a><a class=\"code\" href=\"#!/url=./cpp_ref/class_m_arg_database.html\">MArgDatabase</a> argsDb(syntax(), args, &amp;status);</div>\n\
<div class=\"line\">   <span class=\"keywordflow\">if</span> (!status) <span class=\"keywordflow\">return</span> status;</div>\n\
<div class=\"line\"></div>\n\
<div class=\"line\">   <span class=\"keywordflow\">if</span> (argsDb.isEdit()) {</div>\n\
<div class=\"line\">      <span class=\"keywordflow\">if</span> (argsDb.isQuery()) {</div>\n\
<div class=\"line\">         displayError( <a name=\"a11\"></a><a class=\"code\" href=\"#!/url=./cpp_ref/class_m_string_resource.html#a121315f443a9c4ea512738dc1d39414d\">MStringResource::getString</a>( rEditQueryError, status));</div>\n\
<div class=\"line\">         <span class=\"keywordflow\">return</span> <a name=\"a12\"></a><a class=\"code\" href=\"#!/url=./cpp_ref/class_m_status.html#a02ab596f4febca68da503aaf8dde3a80a1ef6c2d725fb4bec3e7e840d28adbc00\">MS::kFailure</a>;</div>\n\
<div class=\"line\">      }</div>\n\
<div class=\"line\">      fMode = kEdit;</div>\n\
<div class=\"line\">   }</div>\n\
<div class=\"line\">   <span class=\"keywordflow\">else</span> <span class=\"keywordflow\">if</span> (argsDb.isQuery()) {</div>\n\
<div class=\"line\">      fMode = kQuery;</div>\n\
<div class=\"line\">   }</div>\n\
<div class=\"line\"></div>\n\
<div class=\"line\">   fTypeLabelFlag.parse( argsDb, <span class=\"stringliteral\">&quot;-typeLabel&quot;</span>);   </div>\n\
<div class=\"line\">   fAERepresentationProcFlag.parse( argsDb, <span class=\"stringliteral\">&quot;-updateAERepresentationProc&quot;</span>); </div>\n\
<div class=\"line\">   </div>\n\
<div class=\"line\">   fListRepTypesFlag.parse( argsDb, <span class=\"stringliteral\">&quot;-listRepTypes&quot;</span>);  </div>\n\
<div class=\"line\">   <span class=\"keywordflow\">if</span> (!fListRepTypesFlag.isModeValid(fMode)) {</div>\n\
<div class=\"line\">      displayError( <a class=\"code\" href=\"#!/url=./cpp_ref/class_m_string_resource.html#a121315f443a9c4ea512738dc1d39414d\">MStringResource::getString</a>( rListRepTypesFlagError, status));</div>\n\
<div class=\"line\">      <span class=\"keywordflow\">return</span> <a class=\"code\" href=\"#!/url=./cpp_ref/class_m_status.html#a02ab596f4febca68da503aaf8dde3a80a1ef6c2d725fb4bec3e7e840d28adbc00\">MS::kFailure</a>;</div>\n\
<div class=\"line\">   }</div>\n\
<div class=\"line\"></div>\n\
<div class=\"line\">   <a name=\"_a13\"></a><a class=\"code\" href=\"#!/url=./cpp_ref/class_m_string_array.html\">MStringArray</a> objs;   </div>\n\
<div class=\"line\">   status = argsDb.getObjects(objs);</div>\n\
<div class=\"line\">   <a name=\"a14\"></a><a class=\"code\" href=\"#!/url=./cpp_ref/group___macros.html#ga2f3f1ac62ed663f5efd20ff99991335b\">CHECK_MSTATUS_AND_RETURN_IT</a>(status);</div>\n\
<div class=\"line\">   </div>\n\
<div class=\"line\">   <a class=\"code\" href=\"#!/url=./cpp_ref/class_m_string.html\">MString</a> repType;</div>\n\
<div class=\"line\">   </div>\n\
<div class=\"line\">   <span class=\"keywordflow\">if</span> (objs.<a name=\"a15\"></a><a class=\"code\" href=\"#!/url=./cpp_ref/class_m_string_array.html#a580388f31f60c46fac867ca48a48da1e\">length</a>() == 0) {</div>\n\
<div class=\"line\">      <span class=\"keywordflow\">if</span>(needObjectArg()) {</div>\n\
<div class=\"line\">         displayError( <a class=\"code\" href=\"#!/url=./cpp_ref/class_m_string_resource.html#a121315f443a9c4ea512738dc1d39414d\">MStringResource::getString</a>( rRepTypeObjArgError, status));</div>\n\
<div class=\"line\">         <span class=\"keywordflow\">return</span> <a class=\"code\" href=\"#!/url=./cpp_ref/class_m_status.html#a02ab596f4febca68da503aaf8dde3a80a1ef6c2d725fb4bec3e7e840d28adbc00\">MS::kFailure</a>;</div>\n\
<div class=\"line\">      }</div>\n\
<div class=\"line\">   } <span class=\"keywordflow\">else</span> {</div>\n\
<div class=\"line\">      repType = objs[0];</div>\n\
<div class=\"line\">   }</div>\n\
<div class=\"line\">   </div>\n\
<div class=\"line\">    </div>\n\
<div class=\"line\">   <span class=\"keywordflow\">switch</span> (fMode) {     </div>\n\
<div class=\"line\">      <span class=\"keywordflow\">case</span> kEdit:     status = doEdit(repType);  <span class=\"keywordflow\">break</span>;</div>\n\
<div class=\"line\">      <span class=\"keywordflow\">case</span> kQuery:    status = doQuery(repType); <span class=\"keywordflow\">break</span>;</div>\n\
<div class=\"line\">   }</div>\n\
<div class=\"line\">    </div>\n\
<div class=\"line\">   <span class=\"keywordflow\">return</span> status;</div>\n\
<div class=\"line\">}</div>\n\
<div class=\"line\"></div>\n\
<div class=\"line\"><span class=\"comment\">//------------------------------------------------------------------------------</span></div>\n\
<div class=\"line\"><span class=\"comment\">//</span></div>\n\
<div class=\"line\"><a class=\"code\" href=\"#!/url=./cpp_ref/class_m_status.html\">MStatus</a> AdskRepresentationCmd::doEdit(<span class=\"keyword\">const</span> <a class=\"code\" href=\"#!/url=./cpp_ref/class_m_string.html\">MString</a>&amp; repType)</div>\n\
<div class=\"line\">{</div>\n\
<div class=\"line\">   <a class=\"code\" href=\"#!/url=./cpp_ref/class_m_status.html\">MStatus</a> status;  </div>\n\
<div class=\"line\">   </div>\n\
<div class=\"line\">   <span class=\"keywordflow\">if</span> (fTypeLabelFlag.isSet()) {</div>\n\
<div class=\"line\">      assert(fTypeLabelFlag.isArgValid());</div>\n\
<div class=\"line\">      </div>\n\
<div class=\"line\">      AdskRepresentationRegistry::iterator found = fRegistry.find(repType.<a name=\"a16\"></a><a class=\"code\" href=\"#!/url=./cpp_ref/class_m_string.html#aa9ab612f356c53479afc4c648c9ef94d\">asChar</a>());</div>\n\
<div class=\"line\">      RegistryEntry entry = (found == fRegistry.end()) ? RegistryEntry() : found-&gt;second;</div>\n\
<div class=\"line\">      entry.setTypeLabel(fTypeLabelFlag.arg());</div>\n\
<div class=\"line\">      fRegistry[string(repType.<a class=\"code\" href=\"#!/url=./cpp_ref/class_m_string.html#aa9ab612f356c53479afc4c648c9ef94d\">asChar</a>())] = entry;</div>\n\
<div class=\"line\">      setResult(fTypeLabelFlag.arg());</div>\n\
<div class=\"line\">   }</div>\n\
<div class=\"line\">   <span class=\"keywordflow\">else</span> <span class=\"keywordflow\">if</span> (fAERepresentationProcFlag.isSet()) {</div>\n\
<div class=\"line\">      assert(fAERepresentationProcFlag.isArgValid());</div>\n\
<div class=\"line\">      </div>\n\
<div class=\"line\">      AdskRepresentationRegistry::iterator found = fRegistry.find(repType.<a class=\"code\" href=\"#!/url=./cpp_ref/class_m_string.html#aa9ab612f356c53479afc4c648c9ef94d\">asChar</a>());</div>\n\
<div class=\"line\">      RegistryEntry entry = (found == fRegistry.end()) ? RegistryEntry() : found-&gt;second;</div>\n\
<div class=\"line\">      entry.setAERepresentationProc(fAERepresentationProcFlag.arg());</div>\n\
<div class=\"line\">      fRegistry[string(repType.<a class=\"code\" href=\"#!/url=./cpp_ref/class_m_string.html#aa9ab612f356c53479afc4c648c9ef94d\">asChar</a>())] = entry;</div>\n\
<div class=\"line\">      setResult(fAERepresentationProcFlag.arg());</div>\n\
<div class=\"line\">   }   </div>\n\
<div class=\"line\"></div>\n\
<div class=\"line\">   <span class=\"keywordflow\">return</span> <a name=\"a17\"></a><a class=\"code\" href=\"#!/url=./cpp_ref/class_m_status.html#a02ab596f4febca68da503aaf8dde3a80af0536797208144380691e2b376ffc1d1\">MS::kSuccess</a>;</div>\n\
<div class=\"line\">}</div>\n\
<div class=\"line\"></div>\n\
<div class=\"line\"><span class=\"comment\">//------------------------------------------------------------------------------</span></div>\n\
<div class=\"line\"><span class=\"comment\">//</span></div>\n\
<div class=\"line\"><a class=\"code\" href=\"#!/url=./cpp_ref/class_m_status.html\">MStatus</a> AdskRepresentationCmd::doQuery(<span class=\"keyword\">const</span> <a class=\"code\" href=\"#!/url=./cpp_ref/class_m_string.html\">MString</a>&amp; repType)</div>\n\
<div class=\"line\">{    </div>\n\
<div class=\"line\">    <span class=\"keywordflow\">if</span> (fTypeLabelFlag.isSet()) {   </div>\n\
<div class=\"line\"></div>\n\
<div class=\"line\">       <span class=\"comment\">// Get the representation type label from the registry. </span></div>\n\
<div class=\"line\">       AdskRepresentationRegistry::const_iterator found = fRegistry.find(repType.<a class=\"code\" href=\"#!/url=./cpp_ref/class_m_string.html#aa9ab612f356c53479afc4c648c9ef94d\">asChar</a>());</div>\n\
<div class=\"line\">       <span class=\"keywordflow\">if</span> (found == fRegistry.end()) {</div>\n\
<div class=\"line\">          <span class=\"keywordflow\">return</span> <a class=\"code\" href=\"#!/url=./cpp_ref/class_m_status.html#a02ab596f4febca68da503aaf8dde3a80a1ef6c2d725fb4bec3e7e840d28adbc00\">MS::kFailure</a>;</div>\n\
<div class=\"line\">       }            </div>\n\
<div class=\"line\">       setResult(found-&gt;second.typeLabel());</div>\n\
<div class=\"line\">    }<span class=\"keywordflow\">else</span> <span class=\"keywordflow\">if</span> (fAERepresentationProcFlag.isSet()) {   </div>\n\
<div class=\"line\"></div>\n\
<div class=\"line\">       <span class=\"comment\">// Get the representation procedure from the registry. </span></div>\n\
<div class=\"line\">       AdskRepresentationRegistry::const_iterator found = fRegistry.find(repType.<a class=\"code\" href=\"#!/url=./cpp_ref/class_m_string.html#aa9ab612f356c53479afc4c648c9ef94d\">asChar</a>());</div>\n\
<div class=\"line\">       <span class=\"keywordflow\">if</span> (found == fRegistry.end()) {</div>\n\
<div class=\"line\">          <span class=\"keywordflow\">return</span> <a class=\"code\" href=\"#!/url=./cpp_ref/class_m_status.html#a02ab596f4febca68da503aaf8dde3a80a1ef6c2d725fb4bec3e7e840d28adbc00\">MS::kFailure</a>;</div>\n\
<div class=\"line\">       }             </div>\n\
<div class=\"line\">       setResult(found-&gt;second.aeRepresentationProc());     </div>\n\
<div class=\"line\">    }<span class=\"keywordflow\">else</span> <span class=\"keywordflow\">if</span> (fListRepTypesFlag.isSet()) {            </div>\n\
<div class=\"line\">        <a class=\"code\" href=\"#!/url=./cpp_ref/class_m_string_array.html\">MStringArray</a> representations = AssemblyDefinition::registeredTypes();</div>\n\
<div class=\"line\">        setResult(representations);</div>\n\
<div class=\"line\">    } </div>\n\
<div class=\"line\">       </div>\n\
<div class=\"line\">    <span class=\"keywordflow\">return</span> <a class=\"code\" href=\"#!/url=./cpp_ref/class_m_status.html#a02ab596f4febca68da503aaf8dde3a80af0536797208144380691e2b376ffc1d1\">MS::kSuccess</a>;</div>\n\
<div class=\"line\">}</div>\n\
<div class=\"line\"></div>\n\
<div class=\"line\"><span class=\"comment\">//------------------------------------------------------------------------------</span></div>\n\
<div class=\"line\"><span class=\"comment\">//</span></div>\n\
<div class=\"line\"><span class=\"keywordtype\">bool</span> AdskRepresentationCmd::needObjectArg()<span class=\"keyword\"> const</span></div>\n\
<div class=\"line\"><span class=\"keyword\"></span>{</div>\n\
<div class=\"line\">   <span class=\"keywordflow\">return</span> !fListRepTypesFlag.isSet();</div>\n\
<div class=\"line\">}</div>\n\
<div class=\"line\"></div>\n\
<div class=\"line\"><span class=\"comment\">//-</span></div>\n\
<div class=\"line\"><span class=\"comment\">//*****************************************************************************</span></div>\n\
<div class=\"line\"><span class=\"comment\">// Copyright 2015 Autodesk, Inc.  All rights reserved.</span></div>\n\
<div class=\"line\"><span class=\"comment\">// </span></div>\n\
<div class=\"line\"><span class=\"comment\">// Use of this software is subject to the terms of the Autodesk license</span></div>\n\
<div class=\"line\"><span class=\"comment\">// agreement provided at the time of installation or download, or which</span></div>\n\
<div class=\"line\"><span class=\"comment\">// otherwise accompanies this software in either electronic or hard copy</span></div>\n\
<div class=\"line\"><span class=\"comment\">// form.</span></div>\n\
<div class=\"line\"><span class=\"comment\">//*****************************************************************************</span></div>\n\
<div class=\"line\"><span class=\"comment\">//+</span></div>\n\
</div><!-- fragment --> </div><!-- contents -->\n\
</div><!-- doc-content -->\n\
          <div class=\"footer-block\"><a href=\"../html/ac.cmtdialog.htm\" class=\"comments-anchor\" target=\"_blank\"><span class=\"comments-link\">Please send us your comment about this page</span></a></div><br></div>\n\
   </div></body>\n\
</html>\n\
";