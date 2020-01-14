var topic = "<!-- saved from url=(0024)http://docs.autodesk.com -->\n\
<html>\n\
   <head><script src=\"../scripts/yepnope.1.5.4-min.js\" type=\"text/javascript\"></script><script src=\"../scripts/lib/jquery-1.11.1.min.js\" type=\"text/javascript\"></script>\n\
      <title>C++ API Reference: MetadataSample/importMetadataCmd.cpp</title>\n\
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
    cpp_ref_adsk_ref_toc.initNavTree(\'_metadata_sample_2import_metadata_cmd_8cpp-example.html\', tocPrefix);\n\
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
            <h1>C++ API Reference: MetadataSample/importMetadataCmd.cpp</h1>\n\
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
<div class=\"title\">MetadataSample/importMetadataCmd.cpp</div>  </div>\n\
</div><!--header-->\n\
<div class=\"contents\">\n\
<div class=\"fragment\"><div class=\"line\"><span class=\"preprocessor\">#include &quot;importMetadataCmd.h&quot;</span></div>\n\
<div class=\"line\"><span class=\"preprocessor\">#include &quot;metadataPluginStrings.h&quot;</span></div>\n\
<div class=\"line\"><span class=\"preprocessor\">#include &lt;maya/MObject.h&gt;</span></div>\n\
<div class=\"line\"><span class=\"preprocessor\">#include &lt;maya/MSyntax.h&gt;</span></div>\n\
<div class=\"line\"><span class=\"preprocessor\">#include &lt;maya/MStatus.h&gt;</span></div>\n\
<div class=\"line\"><span class=\"preprocessor\">#include &lt;maya/MString.h&gt;</span></div>\n\
<div class=\"line\"><span class=\"preprocessor\">#include &lt;maya/MStringResource.h&gt;</span></div>\n\
<div class=\"line\"><span class=\"preprocessor\">#include &lt;maya/MArgDatabase.h&gt;</span></div>\n\
<div class=\"line\"><span class=\"preprocessor\">#include &lt;maya/MFileObject.h&gt;</span></div>\n\
<div class=\"line\"><span class=\"preprocessor\">#include &lt;maya/adskDataStream.h&gt;</span></div>\n\
<div class=\"line\"><span class=\"preprocessor\">#include &lt;maya/adskDataChannel.h&gt;</span></div>\n\
<div class=\"line\"><span class=\"preprocessor\">#include &lt;maya/adskDataAssociations.h&gt;</span></div>\n\
<div class=\"line\"><span class=\"preprocessor\">#include &lt;maya/adskDataAssociationsSerializer.h&gt;</span></div>\n\
<div class=\"line\"><span class=\"preprocessor\">#include &lt;maya/adskDataChannelSerializer.h&gt;</span></div>\n\
<div class=\"line\"><span class=\"preprocessor\">#include &lt;sstream&gt;</span></div>\n\
<div class=\"line\"><span class=\"preprocessor\">#include &lt;iostream&gt;</span></div>\n\
<div class=\"line\"><span class=\"preprocessor\">#include &lt;fstream&gt;</span></div>\n\
<div class=\"line\"><span class=\"preprocessor\">#include &lt;string&gt;</span></div>\n\
<div class=\"line\"></div>\n\
<div class=\"line\"><span class=\"keyword\">using namespace </span><a class=\"code\" href=\"#!/url=./cpp_ref/namespaceadsk_1_1_data.html\">adsk::Data</a>;</div>\n\
<div class=\"line\"></div>\n\
<div class=\"line\"><span class=\"comment\">// Flags specific to the import command</span></div>\n\
<div class=\"line\"><span class=\"keyword\">static</span> <span class=\"keyword\">const</span> <span class=\"keywordtype\">char</span>* flagString       ( <span class=\"stringliteral\">&quot;-s&quot;</span> );</div>\n\
<div class=\"line\"><span class=\"keyword\">static</span> <span class=\"keyword\">const</span> <span class=\"keywordtype\">char</span>* flagStringLong   ( <span class=\"stringliteral\">&quot;-string&quot;</span> );</div>\n\
<div class=\"line\"></div>\n\
<div class=\"line\"><span class=\"comment\">//======================================================================</span></div>\n\
<div class=\"line\"><span class=\"comment\">//</span></div>\n\
<div class=\"line\"><span class=\"comment\">// Creator function: returns a new command object</span></div>\n\
<div class=\"line\"><span class=\"comment\">//</span></div>\n\
<div class=\"line\"><span class=\"keywordtype\">void</span>* importMetadataCmd::creator()</div>\n\
<div class=\"line\">{</div>\n\
<div class=\"line\">    <span class=\"keywordflow\">return</span> <span class=\"keyword\">new</span> importMetadataCmd;</div>\n\
<div class=\"line\">}</div>\n\
<div class=\"line\"></div>\n\
<div class=\"line\"><span class=\"comment\">//======================================================================</span></div>\n\
<div class=\"line\"><span class=\"comment\">//</span></div>\n\
<div class=\"line\"><span class=\"comment\">// Returns the name of this command</span></div>\n\
<div class=\"line\"><span class=\"comment\">//</span></div>\n\
<div class=\"line\"><span class=\"keyword\">const</span> <span class=\"keywordtype\">char</span>* importMetadataCmd::name()</div>\n\
<div class=\"line\">{</div>\n\
<div class=\"line\">    <span class=\"keywordflow\">return</span> <span class=\"stringliteral\">&quot;importMetadata&quot;</span>;</div>\n\
<div class=\"line\">}</div>\n\
<div class=\"line\"></div>\n\
<div class=\"line\"><span class=\"comment\">//======================================================================</span></div>\n\
<div class=\"line\"><span class=\"comment\">//</span></div>\n\
<div class=\"line\"><span class=\"comment\">// Create default syntax and add command-specific syntax</span></div>\n\
<div class=\"line\"><span class=\"comment\">//</span></div>\n\
<div class=\"line\"><a name=\"_a0\"></a><a class=\"code\" href=\"#!/url=./cpp_ref/class_m_syntax.html\">MSyntax</a> importMetadataCmd::cmdSyntax()</div>\n\
<div class=\"line\">{</div>\n\
<div class=\"line\">    <a class=\"code\" href=\"#!/url=./cpp_ref/class_m_syntax.html\">MSyntax</a> syntax = metadataBase::cmdSyntax();</div>\n\
<div class=\"line\"></div>\n\
<div class=\"line\">    syntax.<a name=\"a1\"></a><a class=\"code\" href=\"#!/url=./cpp_ref/class_m_syntax.html#aeaeaac3794bb4de8004afb1ac1829488\">addFlag</a>(flagString,  flagStringLong, MSyntax::kString);</div>\n\
<div class=\"line\"></div>\n\
<div class=\"line\">    <span class=\"keywordflow\">return</span> syntax;</div>\n\
<div class=\"line\">}</div>\n\
<div class=\"line\"></div>\n\
<div class=\"line\"><span class=\"comment\">//======================================================================</span></div>\n\
<div class=\"line\"><span class=\"comment\">//</span></div>\n\
<div class=\"line\"><span class=\"comment\">// Default command constructor</span></div>\n\
<div class=\"line\"><span class=\"comment\">//</span></div>\n\
<div class=\"line\">importMetadataCmd::importMetadataCmd()</div>\n\
<div class=\"line\">{</div>\n\
<div class=\"line\">}</div>\n\
<div class=\"line\"></div>\n\
<div class=\"line\"><span class=\"comment\">//======================================================================</span></div>\n\
<div class=\"line\"><span class=\"comment\">//</span></div>\n\
<div class=\"line\"><span class=\"comment\">// Destructor, does nothing</span></div>\n\
<div class=\"line\"><span class=\"comment\">//</span></div>\n\
<div class=\"line\">importMetadataCmd::~importMetadataCmd()</div>\n\
<div class=\"line\">{</div>\n\
<div class=\"line\">}</div>\n\
<div class=\"line\"></div>\n\
<div class=\"line\"><span class=\"comment\">//======================================================================</span></div>\n\
<div class=\"line\"><span class=\"comment\">//</span></div>\n\
<div class=\"line\"><span class=\"comment\">// This command is undoable (but must be in create mode)</span></div>\n\
<div class=\"line\"><span class=\"comment\">//</span></div>\n\
<div class=\"line\"><span class=\"keywordtype\">bool</span></div>\n\
<div class=\"line\">importMetadataCmd::isUndoable()<span class=\"keyword\"> const</span></div>\n\
<div class=\"line\"><span class=\"keyword\"></span>{</div>\n\
<div class=\"line\">    <span class=\"keywordflow\">return</span> fMode == kCreate;</div>\n\
<div class=\"line\">}</div>\n\
<div class=\"line\"></div>\n\
<div class=\"line\"><span class=\"comment\">//======================================================================</span></div>\n\
<div class=\"line\"><span class=\"comment\">//</span></div>\n\
<div class=\"line\"><span class=\"comment\">// Check the parsed arguments and do/undo/redo the command as appropriate</span></div>\n\
<div class=\"line\"><span class=\"comment\">//</span></div>\n\
<div class=\"line\"><a name=\"_a2\"></a><a class=\"code\" href=\"#!/url=./cpp_ref/class_m_status.html\">MStatus</a> importMetadataCmd::checkArgs(<a name=\"_a3\"></a><a class=\"code\" href=\"#!/url=./cpp_ref/class_m_arg_database.html\">MArgDatabase</a>&amp; argsDb)</div>\n\
<div class=\"line\">{</div>\n\
<div class=\"line\">    <a class=\"code\" href=\"#!/url=./cpp_ref/class_m_status.html\">MStatus</a> status = metadataBase::checkArgs( argsDb );</div>\n\
<div class=\"line\">    <span class=\"keywordflow\">if</span>( status != MS::kSuccess ) <span class=\"keywordflow\">return</span> status;</div>\n\
<div class=\"line\"></div>\n\
<div class=\"line\">    <span class=\"comment\">//----------------------------------------</span></div>\n\
<div class=\"line\">    <span class=\"comment\">// -string flag</span></div>\n\
<div class=\"line\">    <span class=\"comment\">//</span></div>\n\
<div class=\"line\">    <span class=\"comment\">// If specified then the -file flag is not allowed.</span></div>\n\
<div class=\"line\">    <span class=\"comment\">//</span></div>\n\
<div class=\"line\">    fStringFlag.parse(argsDb, flagString);</div>\n\
<div class=\"line\">    <span class=\"keywordflow\">if</span>( fStringFlag.isSet() )</div>\n\
<div class=\"line\">    {</div>\n\
<div class=\"line\">        <span class=\"keywordflow\">if</span>( fFile )</div>\n\
<div class=\"line\">        {</div>\n\
<div class=\"line\">            <a name=\"_a4\"></a><a class=\"code\" href=\"#!/url=./cpp_ref/class_m_string.html\">MString</a> fmt = <a name=\"a5\"></a><a class=\"code\" href=\"#!/url=./cpp_ref/class_m_string_resource.html#a121315f443a9c4ea512738dc1d39414d\">MStringResource::getString</a>(kFileIgnored, status);</div>\n\
<div class=\"line\">            <a class=\"code\" href=\"#!/url=./cpp_ref/class_m_string.html\">MString</a> msg;</div>\n\
<div class=\"line\">            msg.<a name=\"a6\"></a><a class=\"code\" href=\"#!/url=./cpp_ref/class_m_string.html#a07ae464181c795f43fa1bcc288acff91\">format</a>( fmt, flagString );</div>\n\
<div class=\"line\">            displayWarning( msg );</div>\n\
<div class=\"line\">        }</div>\n\
<div class=\"line\"></div>\n\
<div class=\"line\">        <span class=\"keywordflow\">if</span>( !fStringFlag.isModeValid(fMode) )</div>\n\
<div class=\"line\">        {</div>\n\
<div class=\"line\">            <a class=\"code\" href=\"#!/url=./cpp_ref/class_m_string.html\">MString</a> fmt = <a class=\"code\" href=\"#!/url=./cpp_ref/class_m_string_resource.html#a121315f443a9c4ea512738dc1d39414d\">MStringResource::getString</a>(kOnlyCreateModeMsg, status);</div>\n\
<div class=\"line\">            <a class=\"code\" href=\"#!/url=./cpp_ref/class_m_string.html\">MString</a> msg;</div>\n\
<div class=\"line\">            msg.<a class=\"code\" href=\"#!/url=./cpp_ref/class_m_string.html#a07ae464181c795f43fa1bcc288acff91\">format</a>( fmt, flagString );</div>\n\
<div class=\"line\">            displayError(msg);</div>\n\
<div class=\"line\">            <span class=\"keywordflow\">return</span> MS::kFailure;</div>\n\
<div class=\"line\">        }</div>\n\
<div class=\"line\">        <span class=\"keywordflow\">if</span>( ! fStringFlag.isArgValid() )</div>\n\
<div class=\"line\">        {</div>\n\
<div class=\"line\">            <a class=\"code\" href=\"#!/url=./cpp_ref/class_m_string.html\">MString</a> errMsg( <a class=\"code\" href=\"#!/url=./cpp_ref/class_m_string_resource.html#a121315f443a9c4ea512738dc1d39414d\">MStringResource::getString</a>(kInvalidString, status) );</div>\n\
<div class=\"line\">            displayError( errMsg );</div>\n\
<div class=\"line\">            <span class=\"keywordflow\">return</span> MS::kFailure;</div>\n\
<div class=\"line\">        }</div>\n\
<div class=\"line\">        fString = fStringFlag.arg();</div>\n\
<div class=\"line\">    }</div>\n\
<div class=\"line\">    <span class=\"keywordflow\">else</span> <span class=\"keywordflow\">if</span>( ! fFile )</div>\n\
<div class=\"line\">    {</div>\n\
<div class=\"line\">        <a class=\"code\" href=\"#!/url=./cpp_ref/class_m_string.html\">MString</a> fmt = <a class=\"code\" href=\"#!/url=./cpp_ref/class_m_string_resource.html#a121315f443a9c4ea512738dc1d39414d\">MStringResource::getString</a>(kFileOrStringNeeded, status);</div>\n\
<div class=\"line\">        <a class=\"code\" href=\"#!/url=./cpp_ref/class_m_string.html\">MString</a> msg;</div>\n\
<div class=\"line\">        msg.<a class=\"code\" href=\"#!/url=./cpp_ref/class_m_string.html#a07ae464181c795f43fa1bcc288acff91\">format</a>( fmt, flagString );</div>\n\
<div class=\"line\">        displayError( msg );</div>\n\
<div class=\"line\">        <span class=\"keywordflow\">return</span> MS::kFailure;</div>\n\
<div class=\"line\">    }</div>\n\
<div class=\"line\">    <span class=\"keywordflow\">else</span> <span class=\"keywordflow\">if</span>( ! fFile-&gt;exists() )</div>\n\
<div class=\"line\">    {</div>\n\
<div class=\"line\">        <a class=\"code\" href=\"#!/url=./cpp_ref/class_m_string.html\">MString</a> fmt = <a class=\"code\" href=\"#!/url=./cpp_ref/class_m_string_resource.html#a121315f443a9c4ea512738dc1d39414d\">MStringResource::getString</a>(kFileNotFound, status);</div>\n\
<div class=\"line\">        <a class=\"code\" href=\"#!/url=./cpp_ref/class_m_string.html\">MString</a> msg;</div>\n\
<div class=\"line\">        msg.<a class=\"code\" href=\"#!/url=./cpp_ref/class_m_string.html#a07ae464181c795f43fa1bcc288acff91\">format</a>( fmt, fFileFlag.arg().<a name=\"a7\"></a><a class=\"code\" href=\"#!/url=./cpp_ref/class_m_string.html#aa9ab612f356c53479afc4c648c9ef94d\">asChar</a>() );</div>\n\
<div class=\"line\">        displayError(msg);</div>\n\
<div class=\"line\">        status = MS::kNotFound;</div>\n\
<div class=\"line\">    }</div>\n\
<div class=\"line\"></div>\n\
<div class=\"line\">    <span class=\"keywordflow\">return</span> status;</div>\n\
<div class=\"line\">}</div>\n\
<div class=\"line\"></div>\n\
<div class=\"line\"><span class=\"comment\">//======================================================================</span></div>\n\
<div class=\"line\"><span class=\"comment\">//</span></div>\n\
<div class=\"line\"><span class=\"comment\">// Do the import in create mode. The metadata will be retrieved from the</span></div>\n\
<div class=\"line\"><span class=\"comment\">// file or string and imported onto the selected object(s) presuming the</span></div>\n\
<div class=\"line\"><span class=\"comment\">// specified format. Successful execution will see the imported metadata on</span></div>\n\
<div class=\"line\"><span class=\"comment\">// the object(s), returning the names of the newly created or modified streams</span></div>\n\
<div class=\"line\"><span class=\"comment\">// in the format OBJECT/CHANNEL_TYPE/STREAM</span></div>\n\
<div class=\"line\"><span class=\"comment\">//</span></div>\n\
<div class=\"line\"><span class=\"comment\">// The previously existing metadata is preserved for later undo.</span></div>\n\
<div class=\"line\"><span class=\"comment\">//</span></div>\n\
<div class=\"line\"><a class=\"code\" href=\"#!/url=./cpp_ref/class_m_status.html\">MStatus</a> importMetadataCmd::doCreate()</div>\n\
<div class=\"line\">{</div>\n\
<div class=\"line\">    assert( fSerializer );</div>\n\
<div class=\"line\">    std::string errors;</div>\n\
<div class=\"line\"></div>\n\
<div class=\"line\">    <a name=\"_a8\"></a><a class=\"code\" href=\"#!/url=./cpp_ref/classadsk_1_1_data_1_1_associations.html\">Associations</a>* associationsRead = (<a class=\"code\" href=\"#!/url=./cpp_ref/classadsk_1_1_data_1_1_associations.html\">Associations</a>*)0;</div>\n\
<div class=\"line\">    <a class=\"code\" href=\"#!/url=./cpp_ref/class_m_status.html\">MStatus</a> status;</div>\n\
<div class=\"line\"></div>\n\
<div class=\"line\">    <span class=\"keywordflow\">if</span>( fString.length() &gt; 0 )</div>\n\
<div class=\"line\">    {</div>\n\
<div class=\"line\">        std::stringstream inStream( fString.asChar() );</div>\n\
<div class=\"line\">        associationsRead = fSerializer-&gt;read( inStream, errors );</div>\n\
<div class=\"line\">        <span class=\"keywordflow\">if</span>( ! associationsRead )</div>\n\
<div class=\"line\">        {</div>\n\
<div class=\"line\">            <a class=\"code\" href=\"#!/url=./cpp_ref/class_m_string.html\">MString</a> fmt = <a class=\"code\" href=\"#!/url=./cpp_ref/class_m_string_resource.html#a121315f443a9c4ea512738dc1d39414d\">MStringResource::getString</a>(kImportMetadataStringReadFailed, status);</div>\n\
<div class=\"line\">            <a class=\"code\" href=\"#!/url=./cpp_ref/class_m_string.html\">MString</a> msg;</div>\n\
<div class=\"line\">            <a class=\"code\" href=\"#!/url=./cpp_ref/class_m_string.html\">MString</a> err( errors.c_str() );</div>\n\
<div class=\"line\">            msg.<a class=\"code\" href=\"#!/url=./cpp_ref/class_m_string.html#a07ae464181c795f43fa1bcc288acff91\">format</a>( fmt, err );</div>\n\
<div class=\"line\">            displayError(msg);</div>\n\
<div class=\"line\">            <span class=\"keywordflow\">return</span> MS::kFailure;</div>\n\
<div class=\"line\">        }</div>\n\
<div class=\"line\">    }</div>\n\
<div class=\"line\">    <span class=\"keywordflow\">else</span> <span class=\"keywordflow\">if</span>( fFile )</div>\n\
<div class=\"line\">    {</div>\n\
<div class=\"line\">        std::ifstream inStream( fFile-&gt;resolvedFullName().asChar() );</div>\n\
<div class=\"line\">        associationsRead = fSerializer-&gt;read( inStream, errors );</div>\n\
<div class=\"line\">        inStream.close();</div>\n\
<div class=\"line\">        <span class=\"keywordflow\">if</span>( ! associationsRead )</div>\n\
<div class=\"line\">        {</div>\n\
<div class=\"line\">            <a class=\"code\" href=\"#!/url=./cpp_ref/class_m_string.html\">MString</a> fmt = <a class=\"code\" href=\"#!/url=./cpp_ref/class_m_string_resource.html#a121315f443a9c4ea512738dc1d39414d\">MStringResource::getString</a>(kImportMetadataFileReadFailed, status);</div>\n\
<div class=\"line\">            <a class=\"code\" href=\"#!/url=./cpp_ref/class_m_string.html\">MString</a> msg;</div>\n\
<div class=\"line\">            <a class=\"code\" href=\"#!/url=./cpp_ref/class_m_string.html\">MString</a> err( errors.c_str() );</div>\n\
<div class=\"line\">            msg.<a class=\"code\" href=\"#!/url=./cpp_ref/class_m_string.html#a07ae464181c795f43fa1bcc288acff91\">format</a>( fmt, fFile-&gt;resolvedFullName(), err );</div>\n\
<div class=\"line\">            displayError(msg);</div>\n\
<div class=\"line\">            <span class=\"keywordflow\">return</span> MS::kFailure;</div>\n\
<div class=\"line\">        }</div>\n\
<div class=\"line\">    }</div>\n\
<div class=\"line\">    <span class=\"keywordflow\">else</span></div>\n\
<div class=\"line\">    {</div>\n\
<div class=\"line\">        <span class=\"comment\">// This isn&#39;t a recoverable error since this situation should have</span></div>\n\
<div class=\"line\">        <span class=\"comment\">// been reported in the arg checking. Just assert and fail</span></div>\n\
<div class=\"line\">        <span class=\"comment\">// immediately.</span></div>\n\
<div class=\"line\">        assert( fFile );</div>\n\
<div class=\"line\">        <span class=\"keywordflow\">return</span> MS::kFailure;</div>\n\
<div class=\"line\">    }</div>\n\
<div class=\"line\"></div>\n\
<div class=\"line\">    <span class=\"comment\">// Should have already handled this</span></div>\n\
<div class=\"line\">    assert( associationsRead );</div>\n\
<div class=\"line\"></div>\n\
<div class=\"line\">    <a class=\"code\" href=\"#!/url=./cpp_ref/class_m_string.html\">MString</a> resultFmt = <a class=\"code\" href=\"#!/url=./cpp_ref/class_m_string_resource.html#a121315f443a9c4ea512738dc1d39414d\">MStringResource::getString</a>(kImportMetadataResult, status);</div>\n\
<div class=\"line\">    <span class=\"keywordflow\">for</span>( <span class=\"keywordtype\">unsigned</span> <span class=\"keywordtype\">int</span> i=0; i&lt;fObjects.length(); ++i )</div>\n\
<div class=\"line\">    {</div>\n\
<div class=\"line\">        <a name=\"_a9\"></a><a class=\"code\" href=\"#!/url=./cpp_ref/class_m_fn_dependency_node.html\">MFnDependencyNode</a> node( fObjects[i], &amp;status );</div>\n\
<div class=\"line\">        <span class=\"comment\">// Should have filtered out non-objects already but check anyway</span></div>\n\
<div class=\"line\">        <span class=\"keywordflow\">if</span>( MS::kSuccess != status ) <span class=\"keywordflow\">continue</span>;</div>\n\
<div class=\"line\"></div>\n\
<div class=\"line\">        displayInfo( node.name(&amp;status) );</div>\n\
<div class=\"line\"></div>\n\
<div class=\"line\">        fDGModifier.setMetadata( fObjects[i], *associationsRead );</div>\n\
<div class=\"line\"></div>\n\
<div class=\"line\">        <span class=\"keywordflow\">if</span>( MS::kSuccess == fDGModifier.doIt() )</div>\n\
<div class=\"line\">        {</div>\n\
<div class=\"line\">            <span class=\"keywordflow\">for</span>( <span class=\"keywordtype\">unsigned</span> <span class=\"keywordtype\">int</span> c=0; c&lt;associationsRead-&gt;channelCount(); ++c )</div>\n\
<div class=\"line\">            {</div>\n\
<div class=\"line\">                <a name=\"_a10\"></a><a class=\"code\" href=\"#!/url=./cpp_ref/classadsk_1_1_data_1_1_channel.html\">adsk::Data::Channel</a> channel = associationsRead-&gt;channelAt(c);</div>\n\
<div class=\"line\">                <a class=\"code\" href=\"#!/url=./cpp_ref/class_m_string.html\">MString</a> cName( channel.<a name=\"a11\"></a><a class=\"code\" href=\"#!/url=./cpp_ref/classadsk_1_1_data_1_1_channel.html#af8370604529de0f829b8424e1288a104\">name</a>().c_str() );</div>\n\
<div class=\"line\">                <span class=\"keywordflow\">for</span>( <span class=\"keywordtype\">unsigned</span> <span class=\"keywordtype\">int</span> s=0; s&lt;channel.<a name=\"a12\"></a><a class=\"code\" href=\"#!/url=./cpp_ref/classadsk_1_1_data_1_1_channel.html#a11affd2a422744763272e4efff4099aa\">dataStreamCount</a>(); ++s )</div>\n\
<div class=\"line\">                {</div>\n\
<div class=\"line\">                    <a name=\"_a13\"></a><a class=\"code\" href=\"#!/url=./cpp_ref/classadsk_1_1_data_1_1_stream.html\">adsk::Data::Stream</a>* cStream = channel.<a name=\"a14\"></a><a class=\"code\" href=\"#!/url=./cpp_ref/classadsk_1_1_data_1_1_channel.html#a77cda1334521e31c93dee2153900d451\">dataStream</a>(s);</div>\n\
<div class=\"line\">                    <span class=\"keywordflow\">if</span>( cStream )</div>\n\
<div class=\"line\">                    {</div>\n\
<div class=\"line\">                        <a class=\"code\" href=\"#!/url=./cpp_ref/class_m_string.html\">MString</a> sName( cStream-&gt;<a name=\"a15\"></a><a class=\"code\" href=\"#!/url=./cpp_ref/classadsk_1_1_data_1_1_stream.html#af8370604529de0f829b8424e1288a104\">name</a>().c_str() );</div>\n\
<div class=\"line\">                        <a class=\"code\" href=\"#!/url=./cpp_ref/class_m_string.html\">MString</a> msg;</div>\n\
<div class=\"line\">                        msg.<a class=\"code\" href=\"#!/url=./cpp_ref/class_m_string.html#a07ae464181c795f43fa1bcc288acff91\">format</a>( resultFmt, node.name(), cName, sName );</div>\n\
<div class=\"line\">                        appendToResult( msg );</div>\n\
<div class=\"line\">                    }</div>\n\
<div class=\"line\">                }</div>\n\
<div class=\"line\">            }</div>\n\
<div class=\"line\">        }</div>\n\
<div class=\"line\">        <span class=\"keywordflow\">else</span></div>\n\
<div class=\"line\">        {</div>\n\
<div class=\"line\">            <a class=\"code\" href=\"#!/url=./cpp_ref/class_m_string.html\">MString</a> fmt = <a class=\"code\" href=\"#!/url=./cpp_ref/class_m_string_resource.html#a121315f443a9c4ea512738dc1d39414d\">MStringResource::getString</a>(kImportMetadataSetMetadataFailed, status);</div>\n\
<div class=\"line\">            <a class=\"code\" href=\"#!/url=./cpp_ref/class_m_string.html\">MString</a> msg;</div>\n\
<div class=\"line\">            msg.<a class=\"code\" href=\"#!/url=./cpp_ref/class_m_string.html#a07ae464181c795f43fa1bcc288acff91\">format</a>( fmt, node.name() );</div>\n\
<div class=\"line\">            displayError( msg );</div>\n\
<div class=\"line\">            status = MS::kFailure;</div>\n\
<div class=\"line\">        }</div>\n\
<div class=\"line\">    }</div>\n\
<div class=\"line\"></div>\n\
<div class=\"line\">    <span class=\"keywordflow\">return</span> status;</div>\n\
<div class=\"line\">}</div>\n\
<div class=\"line\"></div>\n\
<div class=\"line\"><span class=\"comment\">//======================================================================</span></div>\n\
<div class=\"line\"><span class=\"comment\">//</span></div>\n\
<div class=\"line\"><span class=\"comment\">// Redo the import, restoring the originally imported metadata onto the</span></div>\n\
<div class=\"line\"><span class=\"comment\">// object(s).</span></div>\n\
<div class=\"line\"><span class=\"comment\">//</span></div>\n\
<div class=\"line\"><a class=\"code\" href=\"#!/url=./cpp_ref/class_m_status.html\">MStatus</a> importMetadataCmd::redoIt()</div>\n\
<div class=\"line\">{</div>\n\
<div class=\"line\">    <span class=\"keywordflow\">return</span> fDGModifier.doIt();</div>\n\
<div class=\"line\">}</div>\n\
<div class=\"line\"></div>\n\
<div class=\"line\"><span class=\"comment\">//======================================================================</span></div>\n\
<div class=\"line\"><span class=\"comment\">//</span></div>\n\
<div class=\"line\"><span class=\"comment\">// Undo the import, restoring the prior metadata to the object(s).</span></div>\n\
<div class=\"line\"><span class=\"comment\">//</span></div>\n\
<div class=\"line\"><a class=\"code\" href=\"#!/url=./cpp_ref/class_m_status.html\">MStatus</a> importMetadataCmd::undoIt()</div>\n\
<div class=\"line\">{</div>\n\
<div class=\"line\">    <span class=\"keywordflow\">return</span> fDGModifier.undoIt();</div>\n\
<div class=\"line\">}</div>\n\
<div class=\"line\"></div>\n\
<div class=\"line\"><span class=\"comment\">//-</span></div>\n\
<div class=\"line\"><span class=\"comment\">// ==================================================================</span></div>\n\
<div class=\"line\"><span class=\"comment\">// Copyright 2015 Autodesk, Inc.  All rights reserved.</span></div>\n\
<div class=\"line\"><span class=\"comment\">// </span></div>\n\
<div class=\"line\"><span class=\"comment\">// This computer source code  and related  instructions and comments are</span></div>\n\
<div class=\"line\"><span class=\"comment\">// the unpublished confidential and proprietary information of Autodesk,</span></div>\n\
<div class=\"line\"><span class=\"comment\">// Inc. and are  protected  under applicable  copyright and trade secret</span></div>\n\
<div class=\"line\"><span class=\"comment\">// law. They may not  be disclosed to, copied or used by any third party</span></div>\n\
<div class=\"line\"><span class=\"comment\">// without the prior written consent of Autodesk, Inc.</span></div>\n\
<div class=\"line\"><span class=\"comment\">// ==================================================================</span></div>\n\
<div class=\"line\"><span class=\"comment\">//+</span></div>\n\
</div><!-- fragment --> </div><!-- contents -->\n\
</div><!-- doc-content -->\n\
<!-- start footer part -->\n\
\n\
      <div class=\"footer-block\"><a href=\"../html/ac.cmtdialog.htm\" class=\"comments-anchor\" target=\"_blank\"><span class=\"comments-link\">Please send us your comment about this page</span></a></div></div>\n\
   </div></body>\n\
</html>\n\
";