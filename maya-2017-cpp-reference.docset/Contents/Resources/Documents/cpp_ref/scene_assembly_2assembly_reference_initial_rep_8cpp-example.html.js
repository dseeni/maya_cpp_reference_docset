var topic = "<!-- saved from url=(0024)http://docs.autodesk.com -->\n\
<html>\n\
   <head><script src=\"../scripts/yepnope.1.5.4-min.js\" type=\"text/javascript\"></script><script src=\"../scripts/lib/jquery-1.11.1.min.js\" type=\"text/javascript\"></script><meta http-equiv=\"Content-Type\" content=\"text/html; charset=UTF-8\"><meta name=\"product\" content=\"MAYAUL\"><meta name=\"release\" content=\"2017\"><meta name=\"book\" content=\"Developer\"><meta name=\"created\" content=\"2016-06-16\"><meta name=\"topicid\" content=\"GUID-02DEF634-1E7B-48C6-8ACD-2C934CA97887\"><meta name=\"topic-type\" content=\"concept\">\n\
      <title>sceneAssembly/assemblyReferenceInitialRep.cpp</title>\n\
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
    cpp_ref_adsk_ref_toc.initNavTree(\'scene_assembly_2assembly_reference_initial_rep_8cpp-example.html\', tocPrefix);\n\
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
            <h1>sceneAssembly/assemblyReferenceInitialRep.cpp</h1>\n\
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
<div class=\"title\">sceneAssembly/assemblyReferenceInitialRep.cpp</div>  </div>\n\
</div><!--header-->\n\
<div class=\"contents\">\n\
<div class=\"fragment\"><div class=\"line\"><span class=\"preprocessor\">#include &quot;assemblyReferenceInitialRep.h&quot;</span></div>\n\
<div class=\"line\"><span class=\"preprocessor\">#include &lt;maya/MGlobal.h&gt;</span></div>\n\
<div class=\"line\"><span class=\"preprocessor\">#include &lt;maya/MFnAssembly.h&gt;</span></div>\n\
<div class=\"line\"></div>\n\
<div class=\"line\"></div>\n\
<div class=\"line\"><span class=\"keyword\">namespace </span>{</div>\n\
<div class=\"line\"></div>\n\
<div class=\"line\"><span class=\"comment\">//==============================================================================</span></div>\n\
<div class=\"line\"><span class=\"comment\">// LOCAL DECLARATIONS</span></div>\n\
<div class=\"line\"><span class=\"comment\">//==============================================================================</span></div>\n\
<div class=\"line\"></div>\n\
<div class=\"line\">    <span class=\"comment\">// Preamble added to python calls</span></div>\n\
<div class=\"line\">    <span class=\"keyword\">const</span> <a name=\"_a0\"></a><a class=\"code\" href=\"#!/url=./cpp_ref/class_m_string.html\">MString</a> pyPreamble1(<span class=\"stringliteral\">&quot;import maya.app.sceneAssembly.assemblyReferenceInitialRep as iRep\\n&quot;</span>);</div>\n\
<div class=\"line\">    <span class=\"keyword\">const</span> <a class=\"code\" href=\"#!/url=./cpp_ref/class_m_string.html\">MString</a> pyPreamble2(<span class=\"stringliteral\">&quot;ir=iRep.assemblyReferenceInitialRep()\\n&quot;</span>);</div>\n\
<div class=\"line\"></div>\n\
<div class=\"line\">    <span class=\"comment\">// Global enable/disable of the feature</span></div>\n\
<div class=\"line\">    <span class=\"comment\">// TODO: could add an env variable or other external mechanism to control this</span></div>\n\
<div class=\"line\">    <span class=\"keywordtype\">bool</span> fsEnable = <span class=\"keyword\">true</span>;</div>\n\
<div class=\"line\"></div>\n\
<div class=\"line\">}</div>\n\
<div class=\"line\"></div>\n\
<div class=\"line\"></div>\n\
<div class=\"line\"><span class=\"comment\">//------------------------------------------------------------------------------</span></div>\n\
<div class=\"line\"><span class=\"comment\">//</span></div>\n\
<div class=\"line\">assemblyReferenceInitialRep::assemblyReferenceInitialRep()</div>\n\
<div class=\"line\">{</div>\n\
<div class=\"line\">}</div>\n\
<div class=\"line\"></div>\n\
<div class=\"line\"><span class=\"comment\">//------------------------------------------------------------------------------</span></div>\n\
<div class=\"line\"><span class=\"comment\">//</span></div>\n\
<div class=\"line\">assemblyReferenceInitialRep::~assemblyReferenceInitialRep()</div>\n\
<div class=\"line\">{</div>\n\
<div class=\"line\">}</div>\n\
<div class=\"line\"></div>\n\
<div class=\"line\"></div>\n\
<div class=\"line\"><span class=\"comment\">//------------------------------------------------------------------------------</span></div>\n\
<div class=\"line\"><span class=\"comment\">// Read in the initial representation data from a top level assembly node</span></div>\n\
<div class=\"line\"><span class=\"comment\">// Note: it is expected that reader() will be called before calls to </span></div>\n\
<div class=\"line\"><span class=\"comment\">// getInitialRep attempt to acces the data.</span></div>\n\
<div class=\"line\"><span class=\"comment\">//</span></div>\n\
<div class=\"line\"><span class=\"keywordtype\">bool</span> assemblyReferenceInitialRep::reader(<span class=\"keyword\">const</span>  <a name=\"_a1\"></a><a class=\"code\" href=\"#!/url=./cpp_ref/class_m_object.html\">MObject</a> &amp;rootAssembly) </div>\n\
<div class=\"line\">{</div>\n\
<div class=\"line\"></div>\n\
<div class=\"line\">    <span class=\"keywordflow\">if</span> (!fsEnable)</div>\n\
<div class=\"line\">        <span class=\"keywordflow\">return</span> <span class=\"keyword\">true</span>;</div>\n\
<div class=\"line\"></div>\n\
<div class=\"line\">    <a name=\"_a2\"></a><a class=\"code\" href=\"#!/url=./cpp_ref/class_m_fn_assembly.html\">MFnAssembly</a> aFn(rootAssembly);</div>\n\
<div class=\"line\">    <a name=\"_a3\"></a><a class=\"code\" href=\"#!/url=./cpp_ref/class_m_status.html\">MStatus</a> status;</div>\n\
<div class=\"line\">    <a class=\"code\" href=\"#!/url=./cpp_ref/class_m_string.html\">MString</a> pyCmd;</div>\n\
<div class=\"line\"></div>\n\
<div class=\"line\">    <span class=\"comment\">// Invoke: assemblyReferenceInitialRep.reader(rootAssemblyName)</span></div>\n\
<div class=\"line\">    pyCmd += pyPreamble1;</div>\n\
<div class=\"line\">    pyCmd += pyPreamble2;</div>\n\
<div class=\"line\">    pyCmd += <span class=\"stringliteral\">&quot;ir.reader(\\&#39;&quot;</span>;</div>\n\
<div class=\"line\">    pyCmd += aFn.name();</div>\n\
<div class=\"line\">    pyCmd += <span class=\"stringliteral\">&quot;\\&#39;)\\n&quot;</span>;</div>\n\
<div class=\"line\"></div>\n\
<div class=\"line\">    status = <a name=\"a4\"></a><a class=\"code\" href=\"#!/url=./cpp_ref/class_m_global.html#af47e37db0e53940620c6cd1f1111e41d\">MGlobal::executePythonCommand</a>(pyCmd);</div>\n\
<div class=\"line\">    <span class=\"keywordflow\">return</span> status == <a name=\"a5\"></a><a class=\"code\" href=\"#!/url=./cpp_ref/class_m_status.html#a02ab596f4febca68da503aaf8dde3a80af0536797208144380691e2b376ffc1d1\">MStatus::kSuccess</a>;</div>\n\
<div class=\"line\">}</div>\n\
<div class=\"line\"></div>\n\
<div class=\"line\"><span class=\"comment\">//------------------------------------------------------------------------------</span></div>\n\
<div class=\"line\"><span class=\"comment\">// Write out the initial representation for a top level assembly node</span></div>\n\
<div class=\"line\"><span class=\"comment\">//</span></div>\n\
<div class=\"line\"><span class=\"keywordtype\">bool</span> assemblyReferenceInitialRep::writer(<span class=\"keyword\">const</span> <a class=\"code\" href=\"#!/url=./cpp_ref/class_m_object.html\">MObject</a> &amp;rootAssembly)<span class=\"keyword\"> const</span></div>\n\
<div class=\"line\"><span class=\"keyword\"></span>{</div>\n\
<div class=\"line\">    <span class=\"keywordflow\">if</span> (!fsEnable)</div>\n\
<div class=\"line\">        <span class=\"keywordflow\">return</span> <span class=\"keyword\">true</span>;</div>\n\
<div class=\"line\"></div>\n\
<div class=\"line\">    <a class=\"code\" href=\"#!/url=./cpp_ref/class_m_fn_assembly.html\">MFnAssembly</a> aFn(rootAssembly);</div>\n\
<div class=\"line\">    <a class=\"code\" href=\"#!/url=./cpp_ref/class_m_status.html\">MStatus</a> status;</div>\n\
<div class=\"line\">    <a class=\"code\" href=\"#!/url=./cpp_ref/class_m_string.html\">MString</a> pyCmd;</div>\n\
<div class=\"line\"></div>\n\
<div class=\"line\">    <span class=\"comment\">// Invoke: assemblyReferenceInitialRep.writer(rootAssemblyName)</span></div>\n\
<div class=\"line\">    pyCmd += pyPreamble1;</div>\n\
<div class=\"line\">    pyCmd += pyPreamble2;</div>\n\
<div class=\"line\">    pyCmd += <span class=\"stringliteral\">&quot;ir.writer(\\&#39;&quot;</span>;</div>\n\
<div class=\"line\">    pyCmd += aFn.name();</div>\n\
<div class=\"line\">    pyCmd += <span class=\"stringliteral\">&quot;\\&#39;)\\n&quot;</span>;</div>\n\
<div class=\"line\"></div>\n\
<div class=\"line\">    status = <a class=\"code\" href=\"#!/url=./cpp_ref/class_m_global.html#af47e37db0e53940620c6cd1f1111e41d\">MGlobal::executePythonCommand</a>(pyCmd);</div>\n\
<div class=\"line\">    <span class=\"keywordflow\">return</span> status == <a class=\"code\" href=\"#!/url=./cpp_ref/class_m_status.html#a02ab596f4febca68da503aaf8dde3a80af0536797208144380691e2b376ffc1d1\">MStatus::kSuccess</a>;</div>\n\
<div class=\"line\">}</div>\n\
<div class=\"line\"></div>\n\
<div class=\"line\"><span class=\"comment\">//------------------------------------------------------------------------------</span></div>\n\
<div class=\"line\"><span class=\"comment\">//</span></div>\n\
<div class=\"line\"><span class=\"comment\">// Get the initial representation for an assembly node</span></div>\n\
<div class=\"line\"><span class=\"comment\">// Note: it is expected that reader() will have been previously called</span></div>\n\
<div class=\"line\"><span class=\"comment\">// to initialize the initialRep data.</span></div>\n\
<div class=\"line\"></div>\n\
<div class=\"line\"><a class=\"code\" href=\"#!/url=./cpp_ref/class_m_string.html\">MString</a> assemblyReferenceInitialRep::getInitialRep(<span class=\"keyword\">const</span> <a class=\"code\" href=\"#!/url=./cpp_ref/class_m_object.html\">MObject</a> &amp;targetAssembly, <span class=\"keywordtype\">bool</span> &amp;hasInitialRep)<span class=\"keyword\"> const</span></div>\n\
<div class=\"line\"><span class=\"keyword\"></span>{</div>\n\
<div class=\"line\"></div>\n\
<div class=\"line\">    <span class=\"keywordflow\">if</span> (!fsEnable)</div>\n\
<div class=\"line\">        <span class=\"keywordflow\">return</span> <a class=\"code\" href=\"#!/url=./cpp_ref/class_m_string.html\">MString</a>();</div>\n\
<div class=\"line\"></div>\n\
<div class=\"line\">    <a class=\"code\" href=\"#!/url=./cpp_ref/class_m_fn_assembly.html\">MFnAssembly</a> aFn(targetAssembly);</div>\n\
<div class=\"line\">    <a class=\"code\" href=\"#!/url=./cpp_ref/class_m_string.html\">MString</a> result;</div>\n\
<div class=\"line\">    <a name=\"_a6\"></a><a class=\"code\" href=\"#!/url=./cpp_ref/class_m_string_array.html\">MStringArray</a> stringArrayResult;</div>\n\
<div class=\"line\"></div>\n\
<div class=\"line\">    <span class=\"comment\">// Invoke: assemblyReferenceInitialRep.getInitialRep(targetAssemblyName)</span></div>\n\
<div class=\"line\"></div>\n\
<div class=\"line\">    <span class=\"comment\">// Note: to get string result from python, it must execute a single command,</span></div>\n\
<div class=\"line\">    <span class=\"comment\">// so wrap it in a proc</span></div>\n\
<div class=\"line\"></div>\n\
<div class=\"line\">    <a class=\"code\" href=\"#!/url=./cpp_ref/class_m_string.html\">MString</a> pyCmd1;</div>\n\
<div class=\"line\">    pyCmd1 = <span class=\"stringliteral\">&quot;def tempGetInitialRepProc():\\n&quot;</span>;</div>\n\
<div class=\"line\">    pyCmd1 += <span class=\"stringliteral\">&quot;\\t&quot;</span> + pyPreamble1;</div>\n\
<div class=\"line\">    pyCmd1 += <span class=\"stringliteral\">&quot;\\t&quot;</span> + pyPreamble2;</div>\n\
<div class=\"line\">    pyCmd1 += <span class=\"stringliteral\">&quot;\\treturn ir.getInitialRep(\\&#39;&quot;</span>;</div>\n\
<div class=\"line\">    pyCmd1 += aFn.name();</div>\n\
<div class=\"line\">    pyCmd1 += <span class=\"stringliteral\">&quot;\\&#39;)\\n&quot;</span>;</div>\n\
<div class=\"line\">    <a class=\"code\" href=\"#!/url=./cpp_ref/class_m_global.html#af47e37db0e53940620c6cd1f1111e41d\">MGlobal::executePythonCommand</a>(pyCmd1);</div>\n\
<div class=\"line\"></div>\n\
<div class=\"line\">    <a class=\"code\" href=\"#!/url=./cpp_ref/class_m_string.html\">MString</a> pyCmd2;</div>\n\
<div class=\"line\">    pyCmd2 = <span class=\"stringliteral\">&quot;tempGetInitialRepProc()&quot;</span>;</div>\n\
<div class=\"line\">    <a class=\"code\" href=\"#!/url=./cpp_ref/class_m_global.html#af47e37db0e53940620c6cd1f1111e41d\">MGlobal::executePythonCommand</a>(pyCmd2, stringArrayResult);</div>\n\
<div class=\"line\">    <span class=\"comment\">// The Python boolean value has been converted to a string since it&#39;s returned in a MStringArray.</span></div>\n\
<div class=\"line\">    hasInitialRep = stringArrayResult[1] == <span class=\"stringliteral\">&quot;True&quot;</span>;</div>\n\
<div class=\"line\">        </div>\n\
<div class=\"line\">    <span class=\"keywordflow\">return</span> stringArrayResult[0];</div>\n\
<div class=\"line\">}</div>\n\
<div class=\"line\"></div>\n\
<div class=\"line\"><span class=\"comment\">//------------------------------------------------------------------------------</span></div>\n\
<div class=\"line\"><span class=\"comment\">// Clear the initial representation data that for a top level assembly node</span></div>\n\
<div class=\"line\"><span class=\"comment\">// Note: The data would have been previously read in by the reader() method.</span></div>\n\
<div class=\"line\"><span class=\"comment\">// This method can be called when the data is not longer required (subsequent</span></div>\n\
<div class=\"line\"><span class=\"comment\">// calls to getInitialRep will not return any data).</span></div>\n\
<div class=\"line\"><span class=\"comment\">//</span></div>\n\
<div class=\"line\"><span class=\"keywordtype\">bool</span> assemblyReferenceInitialRep::clear(<span class=\"keyword\">const</span> <a class=\"code\" href=\"#!/url=./cpp_ref/class_m_object.html\">MObject</a> &amp;rootAssembly)<span class=\"keyword\"> const</span></div>\n\
<div class=\"line\"><span class=\"keyword\"></span>{</div>\n\
<div class=\"line\">    <span class=\"keywordflow\">if</span> (!fsEnable)</div>\n\
<div class=\"line\">        <span class=\"keywordflow\">return</span> <span class=\"keyword\">true</span>;</div>\n\
<div class=\"line\"></div>\n\
<div class=\"line\">    <a class=\"code\" href=\"#!/url=./cpp_ref/class_m_fn_assembly.html\">MFnAssembly</a> aFn(rootAssembly);</div>\n\
<div class=\"line\">    <a class=\"code\" href=\"#!/url=./cpp_ref/class_m_status.html\">MStatus</a> status;</div>\n\
<div class=\"line\">    <a class=\"code\" href=\"#!/url=./cpp_ref/class_m_string.html\">MString</a> pyCmd;</div>\n\
<div class=\"line\"></div>\n\
<div class=\"line\">    <span class=\"comment\">// Invoke: assemblyReferenceInitialRep.clear(rootAssemblyName)</span></div>\n\
<div class=\"line\">    pyCmd += pyPreamble1;</div>\n\
<div class=\"line\">    pyCmd += pyPreamble2;</div>\n\
<div class=\"line\">    pyCmd += <span class=\"stringliteral\">&quot;ir.clear(\\&#39;&quot;</span>;</div>\n\
<div class=\"line\">    pyCmd += aFn.name();</div>\n\
<div class=\"line\">    pyCmd += <span class=\"stringliteral\">&quot;\\&#39;)\\n&quot;</span>;</div>\n\
<div class=\"line\"></div>\n\
<div class=\"line\">    status = <a class=\"code\" href=\"#!/url=./cpp_ref/class_m_global.html#af47e37db0e53940620c6cd1f1111e41d\">MGlobal::executePythonCommand</a>(pyCmd);</div>\n\
<div class=\"line\">    <span class=\"keywordflow\">return</span> status == <a class=\"code\" href=\"#!/url=./cpp_ref/class_m_status.html#a02ab596f4febca68da503aaf8dde3a80af0536797208144380691e2b376ffc1d1\">MStatus::kSuccess</a>;</div>\n\
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