var topic = "<!-- saved from url=(0024)http://docs.autodesk.com -->\n\
<html>\n\
   <head><script src=\"../scripts/yepnope.1.5.4-min.js\" type=\"text/javascript\"></script><script src=\"../scripts/lib/jquery-1.11.1.min.js\" type=\"text/javascript\"></script>\n\
      <title>C++ API Reference: sceneAssembly/sceneAssemblyStrings.h</title>\n\
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
    cpp_ref_adsk_ref_toc.initNavTree(\'scene_assembly_2scene_assembly_strings_8h-example.html\', tocPrefix);\n\
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
            <h1>C++ API Reference: sceneAssembly/sceneAssemblyStrings.h</h1>\n\
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
<div class=\"title\">sceneAssembly/sceneAssemblyStrings.h</div>  </div>\n\
</div><!--header-->\n\
<div class=\"contents\">\n\
<div class=\"fragment\"><div class=\"line\"><span class=\"preprocessor\">#ifndef _sceneAssemblyStrings_h_</span></div>\n\
<div class=\"line\"><span class=\"preprocessor\">#define _sceneAssemblyStrings_h_</span></div>\n\
<div class=\"line\"></div>\n\
<div class=\"line\"><span class=\"comment\">//</span></div>\n\
<div class=\"line\"><span class=\"comment\">// sceneAssembly plugin localization strings</span></div>\n\
<div class=\"line\"><span class=\"comment\">//</span></div>\n\
<div class=\"line\"><span class=\"comment\"></span></div>\n\
<div class=\"line\"><span class=\"preprocessor\">#include &lt;maya/MStringResource.h&gt;</span></div>\n\
<div class=\"line\"><span class=\"preprocessor\">#include &lt;maya/MStringResourceId.h&gt;</span></div>\n\
<div class=\"line\"><span class=\"comment\">// MStringResourceIds contain plug-in id, unique resource id for</span></div>\n\
<div class=\"line\"><span class=\"comment\">// each string and the default value for the string.</span></div>\n\
<div class=\"line\"></div>\n\
<div class=\"line\"><span class=\"preprocessor\">#define kPluginId               &quot;sceneAssembly&quot;</span></div>\n\
<div class=\"line\"></div>\n\
<div class=\"line\"><span class=\"comment\">// If a MStringResourceId is added to this list, please register in registerMStringRes() </span></div>\n\
<div class=\"line\"><span class=\"comment\">// in sceneAssemblyPluginMain.cpp</span></div>\n\
<div class=\"line\"></div>\n\
<div class=\"line\"><span class=\"preprocessor\">#define rRegisterUIStringError            MStringResourceId( kPluginId, &quot;rRegisterUIStringError&quot;,               &quot;Failed to register ^1s.&quot;)</span></div>\n\
<div class=\"line\"><span class=\"preprocessor\">#define rRegisterNodeError                MStringResourceId( kPluginId, &quot;rRegisterNodeError&quot;,                   &quot;Failed to register ^1s node: ^2s.&quot;)</span></div>\n\
<div class=\"line\"><span class=\"preprocessor\">#define rDeregisterNodeError              MStringResourceId( kPluginId, &quot;rDeregisterNodeError&quot;,                 &quot;Failed to deregister ^1s node: ^2s.&quot;)</span></div>\n\
<div class=\"line\"><span class=\"preprocessor\">#define rRegisterAssembliesError          MStringResourceId( kPluginId, &quot;rRegisterAssembliesError&quot;,             &quot;Failed to register assemblies: ^1s.&quot;)</span></div>\n\
<div class=\"line\"><span class=\"preprocessor\">#define rRegisterRepresentationsError     MStringResourceId( kPluginId, &quot;rRegisterRepresentationsError&quot;,        &quot;Failed to register representations: ^1s.&quot;)</span></div>\n\
<div class=\"line\"><span class=\"preprocessor\">#define rRegisterCmdError                 MStringResourceId( kPluginId, &quot;rRegisterCmdError&quot;,                    &quot;Failed to register ^1s command: ^2s.&quot;)</span></div>\n\
<div class=\"line\"><span class=\"preprocessor\">#define rAssemblyDefnImportError          MStringResourceId( kPluginId, &quot;rAssemblyDefnImportError&quot;,             &quot;Failed to import assembly definition file ^1s into assembly reference ^2s.&quot;)</span></div>\n\
<div class=\"line\"><span class=\"preprocessor\">#define rAssemblyDefnNotFoundError        MStringResourceId( kPluginId, &quot;rAssemblyDefnNotFoundError&quot;,           &quot;Assembly definition node not found in file ^1s for assembly reference ^2s.&quot;)</span></div>\n\
<div class=\"line\"><span class=\"preprocessor\">#define rMultAssemblyDefnFoundError       MStringResourceId( kPluginId, &quot;rMultAssemblyDefnFoundError&quot;,          &quot;Multiple assembly definition nodes found in file ^1s for assembly reference ^2s.&quot;)</span></div>\n\
<div class=\"line\"><span class=\"preprocessor\">#define rRegisterRepFactoryError          MStringResourceId( kPluginId, &quot;rRegisterRepFactoryError&quot;,             &quot;Failed to register factory for representation type ^1s.&quot;)</span></div>\n\
<div class=\"line\"><span class=\"preprocessor\">#define rDeregisterRepFactoryError        MStringResourceId( kPluginId, &quot;rDeregisterRepFactoryError&quot;,           &quot;Failed to deregister factory for representation type ^1s.&quot;)</span></div>\n\
<div class=\"line\"><span class=\"preprocessor\">#define rCreateGPUCacheNodeError          MStringResourceId( kPluginId, &quot;rCreateGPUCacheNodeError&quot;,             &quot;Failed to create gpuCache node, the gpuCache plugin is not loaded.&quot;)</span></div>\n\
<div class=\"line\"><span class=\"preprocessor\">#define rEditQueryError                   MStringResourceId( kPluginId, &quot;rEditQueryError&quot;,                      &quot;Can not specify -edit and -query flags simultaneously.&quot;)</span></div>\n\
<div class=\"line\"><span class=\"preprocessor\">#define rRepTypeObjArgError               MStringResourceId( kPluginId, &quot;rRepTypeObjArgError&quot;,                  &quot;Missing the object string as a representation type.&quot;)</span></div>\n\
<div class=\"line\"><span class=\"preprocessor\">#define rListRepTypesFlagError            MStringResourceId( kPluginId, &quot;rListRepTypesFlagError&quot;,               &quot;The flag -listRepTypes can only be used in query mode.&quot;)</span></div>\n\
<div class=\"line\"><span class=\"preprocessor\">#define rRegisterFilePathEditorError      MStringResourceId( kPluginId, &quot;rRegisterFilePathEditorError&quot;,         &quot;Failed to register ^1s to FilePathEditor.&quot;)</span></div>\n\
<div class=\"line\"><span class=\"preprocessor\">#define rDeregisterFilePathEditorError    MStringResourceId( kPluginId, &quot;rDeregisterFilePathEditorError&quot;,       &quot;Failed to deregister ^1s from FilePathEditor.&quot;)</span></div>\n\
<div class=\"line\"><span class=\"preprocessor\">#define rChannelNameFlagError             MStringResourceId( kPluginId, &quot;rChannelNameFlagError&quot;,                &quot;The -channelName flag was not set.&quot;)</span></div>\n\
<div class=\"line\"><span class=\"preprocessor\">#define rAccessorNotFoundError            MStringResourceId( kPluginId, &quot;rAccessorNotFoundError&quot;,               &quot;Can not find accessor for file ^1s.&quot;)</span></div>\n\
<div class=\"line\"><span class=\"preprocessor\">#define rCannotReadFileError              MStringResourceId( kPluginId, &quot;rCannotReadFileError&quot;,                 &quot;Can not read file ^1s (errors = ^2s).&quot;)</span></div>\n\
<div class=\"line\"><span class=\"preprocessor\">#define rMissingStreamInChannelError      MStringResourceId( kPluginId, &quot;rMissingStreamInChannelError&quot;,         &quot;Can not find a stream for channel ^1s.&quot;)</span></div>\n\
<div class=\"line\"><span class=\"preprocessor\">#define rMissingElementInStreamError      MStringResourceId( kPluginId, &quot;rMissingElementInStreamError&quot;,         &quot;Can not find an element in the stream for channel ^1s.&quot;)</span></div>\n\
<div class=\"line\"><span class=\"preprocessor\">#define rMissingMemberInElementError      MStringResourceId( kPluginId, &quot;rMissingMemberInElementError&quot;,         &quot;Can not find data member ^1s in the stream for channel ^2s.&quot;)</span></div>\n\
<div class=\"line\"><span class=\"preprocessor\">#define rInvalidMemberDataTypeError       MStringResourceId( kPluginId, &quot;rInvalidMemberDataTypeError&quot;,          &quot;Invalid data type for member in stream for channel ^1s. Expected a string type.&quot;)</span></div>\n\
<div class=\"line\"><span class=\"preprocessor\">#define rSetDataOnChannelError            MStringResourceId( kPluginId, &quot;rSetDataOnChannelError&quot;,               &quot;Error while setting the data in channel ^1s (^2s).&quot;)</span></div>\n\
<div class=\"line\"><span class=\"preprocessor\">#define rWriteMetadataError               MStringResourceId( kPluginId, &quot;rWriteMetadataError&quot;,                  &quot;Error while writing metadata.&quot;)</span></div>\n\
<div class=\"line\"><span class=\"preprocessor\">#define rDataFlagError                    MStringResourceId( kPluginId, &quot;rDataFlagError&quot;,                       &quot;The flag -data can only be used in edit mode.&quot;)</span></div>\n\
<div class=\"line\"></div>\n\
<div class=\"line\"><span class=\"preprocessor\">#endif</span></div>\n\
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
<!-- start footer part -->\n\
\n\
      <div class=\"footer-block\"><a href=\"../html/ac.cmtdialog.htm\" class=\"comments-anchor\" target=\"_blank\"><span class=\"comments-link\">Please send us your comment about this page</span></a></div></div>\n\
   </div></body>\n\
</html>\n\
";