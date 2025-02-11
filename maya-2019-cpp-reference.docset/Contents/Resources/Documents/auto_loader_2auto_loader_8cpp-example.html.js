var topic = "<!-- saved from url=(0024)http://docs.autodesk.com -->\n\
<html>\n\
   <head><script src=\"../scripts/yepnope.1.5.4-min.js\" type=\"text/javascript\"></script><script src=\"../scripts/lib/jquery-1.11.1.min.js\" type=\"text/javascript\"></script><meta http-equiv=\"Content-Type\" content=\"text/html; charset=UTF-8\"><script type=\"text/javascript\" src=\"../scripts/utils/adsk.redirect.js\"></script>\n\
      <title>autoLoader/autoLoader.cpp</title>\n\
   \n\
\n\
<meta name=\"topic-subtype\" content=\"C++\"></head>\n\
   <body height=\"100%\"><div class=\"body_content\" id=\"body-content\"><link rel=\"stylesheet\" type=\"text/css\" href=\"cpp_ref/navtree.css\"><link rel=\"stylesheet\" type=\"text/css\" href=\"cpp_ref/doxygen.css\"><link rel=\"stylesheet\" type=\"text/css\" href=\"cpp_ref/tabs.css\"><link rel=\"stylesheet\" type=\"text/css\" href=\"style/adsk.cpm.css\"><script type=\"text/javascript\">\n\
var tocSystemNeedsToBeLoaded = typeof(cpp_ref_adsk_ref_toc) == \'undefined\';\n\
var weAreIn21 = $(\'div#main.view-active\').length;\n\
var tocPrefix = \'\';\n\
if (weAreIn21)\n\
{ tocPrefix = \'cpp_ref/\'; }\n\
function cpp_ref_initializeToc(forceTrigger) {\n\
    cpp_ref_adsk_ref_toc.initResizable();\n\
    cpp_ref_adsk_ref_toc.initNavTree(\'auto_loader_2auto_loader_8cpp-example.html\', tocPrefix);\n\
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
            <h1>autoLoader/autoLoader.cpp</h1>\n\
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
      <li><a href=\"#!/url=./cpp_ref/files.html\"><span>Files</span></a></li>\n\
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
<div class=\"title\">autoLoader/autoLoader.cpp</div>  </div>\n\
</div><!--header-->\n\
<div class=\"contents\">\n\
<div class=\"fragment\"><div class=\"line\"><span class=\"comment\">//</span></div>\n\
<div class=\"line\"><span class=\"comment\">//  Copyright 2012 Autodesk, Inc.  All rights reserved.</span></div>\n\
<div class=\"line\"><span class=\"comment\">//</span></div>\n\
<div class=\"line\"><span class=\"comment\">//  Use of this software is subject to the terms of the Autodesk license </span></div>\n\
<div class=\"line\"><span class=\"comment\">//  agreement provided at the time of installation or download, or which </span></div>\n\
<div class=\"line\"><span class=\"comment\">//  otherwise accompanies this software in either electronic or hard copy form.   </span></div>\n\
<div class=\"line\"><span class=\"comment\">//</span></div>\n\
<div class=\"line\"></div>\n\
<div class=\"line\"><span class=\"comment\">//-----------------------------------------------------------------------------</span></div>\n\
<div class=\"line\"><span class=\"preprocessor\">#include &quot;StdAfx.h&quot;</span></div>\n\
<div class=\"line\"></div>\n\
<div class=\"line\"><span class=\"preprocessor\">#include &lt;maya/MFnPlugin.h&gt;</span></div>\n\
<div class=\"line\"></div>\n\
<div class=\"line\"><span class=\"preprocessor\">#include &quot;moduleLogicCmd.h&quot;</span></div>\n\
<div class=\"line\"></div>\n\
<div class=\"line\"><span class=\"comment\">//-----------------------------------------------------------------------------</span></div>\n\
<div class=\"line\"><a class=\"code\" href=\"#!/url=./cpp_ref/_m_message_8h.html#a42e6e9d54a954c3e2d798a156091ca1d\">MCallbackId</a> mayaExitingId =0 ;</div>\n\
<div class=\"line\"><span class=\"keywordtype\">void</span> mayaExitingCB (<span class=\"keywordtype\">void</span> *clientData) {</div>\n\
<div class=\"line\"><span class=\"preprocessor\">#ifdef AUTOLOADER_THREAD</span></div>\n\
<div class=\"line\">    <span class=\"keywordflow\">if</span> ( <a name=\"a0\"></a><a class=\"code\" href=\"#!/url=./cpp_ref/class_m_global.html#ac7296da94b1d0b659833fc653a6af10e\">MGlobal::mayaState</a> () != <a name=\"a1\"></a><a class=\"code\" href=\"#!/url=./cpp_ref/class_m_global.html#afb0008b4212928b7913ba9cfc64fe88ba347100316aff63bf166232d8145a44f6\">MGlobal::kBatch</a> )</div>\n\
<div class=\"line\">    {</div>\n\
<div class=\"line\">        threadData::stopThread () ;</div>\n\
<div class=\"line\">    }</div>\n\
<div class=\"line\"><span class=\"preprocessor\">#endif</span></div>\n\
<div class=\"line\">}</div>\n\
<div class=\"line\"></div>\n\
<div class=\"line\"><span class=\"comment\">//-----------------------------------------------------------------------------</span></div>\n\
<div class=\"line\"><span class=\"comment\">//- initializePlugin is called when the plug-in is loaded into Maya. It </span></div>\n\
<div class=\"line\"><span class=\"comment\">//- registers all of the services that this plug-in provides with Maya.</span></div>\n\
<div class=\"line\"><span class=\"comment\">//-     obj - a handle to the plug-in object (use MFnPlugin to access it)</span></div>\n\
<div class=\"line\"><a name=\"_a2\"></a><a class=\"code\" href=\"#!/url=./cpp_ref/class_m_status.html\">MStatus</a> initializePlugin (<a name=\"_a3\"></a><a class=\"code\" href=\"#!/url=./cpp_ref/class_m_object.html\">MObject</a> obj) {</div>\n\
<div class=\"line\">    <a name=\"_a4\"></a><a class=\"code\" href=\"#!/url=./cpp_ref/class_m_fn_plugin.html\">MFnPlugin</a> plugin (obj, PLUGIN_COMPANY, _T(<span class=\"stringliteral\">&quot;1.0&quot;</span>), _T(<span class=\"stringliteral\">&quot;Any&quot;</span>)) ;</div>\n\
<div class=\"line\"></div>\n\
<div class=\"line\">    <span class=\"comment\">// Before launching the module detection, we need to collected the ones </span></div>\n\
<div class=\"line\">    <span class=\"comment\">// already present.</span></div>\n\
<div class=\"line\">    MModuleLogic::ModuleDetectionLogicInit (threadData::getThreadData ()) ;</div>\n\
<div class=\"line\"></div>\n\
<div class=\"line\">    plugin.registerCommand (kmoduleLogicCmdName, moduleLogicCmd::creator) ;</div>\n\
<div class=\"line\"><span class=\"preprocessor\">#ifdef AUTOLOADER_THREAD</span></div>\n\
<div class=\"line\">    <span class=\"keywordflow\">if</span> ( <a class=\"code\" href=\"#!/url=./cpp_ref/class_m_global.html#ac7296da94b1d0b659833fc653a6af10e\">MGlobal::mayaState</a> () != <a class=\"code\" href=\"#!/url=./cpp_ref/class_m_global.html#afb0008b4212928b7913ba9cfc64fe88ba347100316aff63bf166232d8145a44f6\">MGlobal::kBatch</a> )</div>\n\
<div class=\"line\">    {</div>\n\
<div class=\"line\">        threadData::startThread () ;</div>\n\
<div class=\"line\">    }</div>\n\
<div class=\"line\"><span class=\"preprocessor\">#endif</span></div>\n\
<div class=\"line\"></div>\n\
<div class=\"line\">    mayaExitingId =<a name=\"a5\"></a><a class=\"code\" href=\"#!/url=./cpp_ref/class_m_scene_message.html#a44771b834e9a0ad7291ecdcc880106fe\">MSceneMessage::addCallback</a> (<a name=\"a6\"></a><a class=\"code\" href=\"#!/url=./cpp_ref/class_m_scene_message.html#a4f09127c805cc1f5ee20e67db7b45efaa1efff7ad75eeef5a2ac9e3c0e890dbd0\">MSceneMessage::kMayaExiting</a>, mayaExitingCB) ;</div>\n\
<div class=\"line\"></div>\n\
<div class=\"line\">    <span class=\"keywordflow\">return</span> (MS::kSuccess) ;</div>\n\
<div class=\"line\">}</div>\n\
<div class=\"line\"></div>\n\
<div class=\"line\"><span class=\"comment\">//- uninitializePlugin is called when the plug-in is unloaded from Maya. It </span></div>\n\
<div class=\"line\"><span class=\"comment\">//- deregisters all of the services that it was providing.</span></div>\n\
<div class=\"line\"><span class=\"comment\">//-     obj - a handle to the plug-in object (use MFnPlugin to access it)</span></div>\n\
<div class=\"line\"><a class=\"code\" href=\"#!/url=./cpp_ref/class_m_status.html\">MStatus</a> uninitializePlugin (<a class=\"code\" href=\"#!/url=./cpp_ref/class_m_object.html\">MObject</a> obj) {</div>\n\
<div class=\"line\">    <a class=\"code\" href=\"#!/url=./cpp_ref/class_m_fn_plugin.html\">MFnPlugin</a> plugin (obj) ;</div>\n\
<div class=\"line\"></div>\n\
<div class=\"line\">    <a name=\"a7\"></a><a class=\"code\" href=\"#!/url=./cpp_ref/class_m_message.html#a50fe995add3ce133b8b56551abb4ed09\">MSceneMessage::removeCallback</a> (mayaExitingId) ;</div>\n\
<div class=\"line\"></div>\n\
<div class=\"line\"><span class=\"preprocessor\">#ifdef AUTOLOADER_THREAD</span></div>\n\
<div class=\"line\">    <span class=\"keywordflow\">if</span> ( <a class=\"code\" href=\"#!/url=./cpp_ref/class_m_global.html#ac7296da94b1d0b659833fc653a6af10e\">MGlobal::mayaState</a> () != <a class=\"code\" href=\"#!/url=./cpp_ref/class_m_global.html#afb0008b4212928b7913ba9cfc64fe88ba347100316aff63bf166232d8145a44f6\">MGlobal::kBatch</a> )</div>\n\
<div class=\"line\">    {</div>\n\
<div class=\"line\">        threadData::stopThread () ;</div>\n\
<div class=\"line\">    }</div>\n\
<div class=\"line\"><span class=\"preprocessor\">#endif</span></div>\n\
<div class=\"line\">    plugin.deregisterCommand (kmoduleLogicCmdName) ;</div>\n\
<div class=\"line\"></div>\n\
<div class=\"line\">    <span class=\"keywordflow\">return</span> (MS::kSuccess) ;</div>\n\
<div class=\"line\">}</div>\n\
</div><!-- fragment --> </div><!-- contents -->\n\
</div><!-- doc-content -->\n\
          <div class=\"footer-block\"><a href=\"../html/ac.cmtdialog.htm\" class=\"comments-anchor\" target=\"_blank\"><span class=\"comments-link\">Please send us your comment about this page</span></a></div></div>\n\
   </div></body>\n\
</html>\n\
";