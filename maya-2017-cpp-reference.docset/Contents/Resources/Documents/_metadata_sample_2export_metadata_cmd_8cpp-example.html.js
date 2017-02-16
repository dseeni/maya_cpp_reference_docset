var topic = "<!-- saved from url=(0024)http://docs.autodesk.com -->\n\
<html>\n\
   <head><script src=\"../scripts/yepnope.1.5.4-min.js\" type=\"text/javascript\"></script><script src=\"../scripts/lib/jquery-1.11.1.min.js\" type=\"text/javascript\"></script><meta http-equiv=\"Content-Type\" content=\"text/html; charset=UTF-8\"><meta name=\"product\" content=\"MAYAUL\"><meta name=\"release\" content=\"2017\"><meta name=\"book\" content=\"Developer\"><meta name=\"created\" content=\"2016-06-16\"><meta name=\"topicid\" content=\"GUID-02DEF634-1E7B-48C6-8ACD-2C934CA97887\"><meta name=\"topic-type\" content=\"concept\">\n\
      <title>MetadataSample/exportMetadataCmd.cpp</title>\n\
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
    cpp_ref_adsk_ref_toc.initNavTree(\'_metadata_sample_2export_metadata_cmd_8cpp-example.html\', tocPrefix);\n\
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
            <h1>MetadataSample/exportMetadataCmd.cpp</h1>\n\
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
<div class=\"title\">MetadataSample/exportMetadataCmd.cpp</div>  </div>\n\
</div><!--header-->\n\
<div class=\"contents\">\n\
<div class=\"fragment\"><div class=\"line\"><span class=\"preprocessor\">#include &quot;exportMetadataCmd.h&quot;</span></div>\n\
<div class=\"line\"><span class=\"preprocessor\">#include &quot;metadataPluginStrings.h&quot;</span></div>\n\
<div class=\"line\"><span class=\"preprocessor\">#include &lt;maya/MObject.h&gt;</span></div>\n\
<div class=\"line\"><span class=\"preprocessor\">#include &lt;maya/MSyntax.h&gt;</span></div>\n\
<div class=\"line\"><span class=\"preprocessor\">#include &lt;maya/MPxCommand.h&gt;</span></div>\n\
<div class=\"line\"><span class=\"preprocessor\">#include &lt;maya/MStatus.h&gt;</span></div>\n\
<div class=\"line\"><span class=\"preprocessor\">#include &lt;maya/MString.h&gt;</span></div>\n\
<div class=\"line\"><span class=\"preprocessor\">#include &lt;maya/MStringResource.h&gt;</span></div>\n\
<div class=\"line\"><span class=\"preprocessor\">#include &lt;maya/MArgDatabase.h&gt;</span></div>\n\
<div class=\"line\"><span class=\"preprocessor\">#include &lt;maya/MFileObject.h&gt;</span></div>\n\
<div class=\"line\"><span class=\"preprocessor\">#include &lt;maya/MFnDependencyNode.h&gt;</span></div>\n\
<div class=\"line\"><span class=\"preprocessor\">#include &lt;iostream&gt;</span></div>\n\
<div class=\"line\"><span class=\"preprocessor\">#include &lt;sstream&gt;</span></div>\n\
<div class=\"line\"><span class=\"preprocessor\">#include &lt;fstream&gt;</span></div>\n\
<div class=\"line\"><span class=\"preprocessor\">#include &lt;maya/adskDataChannel.h&gt;</span></div>\n\
<div class=\"line\"><span class=\"preprocessor\">#include &lt;maya/adskDataAssociations.h&gt;</span></div>\n\
<div class=\"line\"><span class=\"preprocessor\">#include &lt;maya/adskDataAssociationsSerializer.h&gt;</span></div>\n\
<div class=\"line\"><span class=\"preprocessor\">#include &lt;maya/adskDataChannelSerializer.h&gt;</span></div>\n\
<div class=\"line\"><span class=\"preprocessor\">#include &lt;maya/adskDataStreamSerializer.h&gt;</span></div>\n\
<div class=\"line\"><span class=\"preprocessor\">#include &lt;maya/adskDataStructureSerializer.h&gt;</span></div>\n\
<div class=\"line\"></div>\n\
<div class=\"line\"><span class=\"comment\">//======================================================================</span></div>\n\
<div class=\"line\"><span class=\"comment\">//</span></div>\n\
<div class=\"line\"><span class=\"comment\">// Creator function: returns a new command object</span></div>\n\
<div class=\"line\"><span class=\"comment\">//</span></div>\n\
<div class=\"line\"><span class=\"keywordtype\">void</span>* exportMetadataCmd::creator()</div>\n\
<div class=\"line\">{</div>\n\
<div class=\"line\">    <span class=\"keywordflow\">return</span> <span class=\"keyword\">new</span> exportMetadataCmd ;</div>\n\
<div class=\"line\">}</div>\n\
<div class=\"line\"></div>\n\
<div class=\"line\"><span class=\"comment\">//======================================================================</span></div>\n\
<div class=\"line\"><span class=\"comment\">//</span></div>\n\
<div class=\"line\"><span class=\"comment\">// Returns the name of this command</span></div>\n\
<div class=\"line\"><span class=\"comment\">//</span></div>\n\
<div class=\"line\"><span class=\"keyword\">const</span> <span class=\"keywordtype\">char</span>* exportMetadataCmd::name()</div>\n\
<div class=\"line\">{</div>\n\
<div class=\"line\">    <span class=\"keywordflow\">return</span> <span class=\"stringliteral\">&quot;exportMetadata&quot;</span>;</div>\n\
<div class=\"line\">}</div>\n\
<div class=\"line\"></div>\n\
<div class=\"line\"><span class=\"comment\">//======================================================================</span></div>\n\
<div class=\"line\"><span class=\"comment\">//</span></div>\n\
<div class=\"line\"><span class=\"comment\">// Get the base syntax and allow query mode</span></div>\n\
<div class=\"line\"><span class=\"comment\">//</span></div>\n\
<div class=\"line\"><a name=\"_a0\"></a><a class=\"code\" href=\"#!/url=./cpp_ref/class_m_syntax.html\">MSyntax</a> exportMetadataCmd::cmdSyntax()</div>\n\
<div class=\"line\">{</div>\n\
<div class=\"line\">    <a class=\"code\" href=\"#!/url=./cpp_ref/class_m_syntax.html\">MSyntax</a> mySyntax = metadataBase::cmdSyntax();</div>\n\
<div class=\"line\">    mySyntax.<a name=\"a1\"></a><a class=\"code\" href=\"#!/url=./cpp_ref/class_m_syntax.html#a414088ac458bc323845634fcf7663e69\">enableQuery</a>( <span class=\"keyword\">true</span> );</div>\n\
<div class=\"line\">    <span class=\"keywordflow\">return</span> mySyntax;</div>\n\
<div class=\"line\">}</div>\n\
<div class=\"line\"></div>\n\
<div class=\"line\"><span class=\"comment\">//======================================================================</span></div>\n\
<div class=\"line\"><span class=\"comment\">//</span></div>\n\
<div class=\"line\"><span class=\"comment\">// Default command constructor</span></div>\n\
<div class=\"line\"><span class=\"comment\">//</span></div>\n\
<div class=\"line\">exportMetadataCmd::exportMetadataCmd()</div>\n\
<div class=\"line\">{</div>\n\
<div class=\"line\">}</div>\n\
<div class=\"line\"></div>\n\
<div class=\"line\"><span class=\"comment\">//======================================================================</span></div>\n\
<div class=\"line\"><span class=\"comment\">//</span></div>\n\
<div class=\"line\"><span class=\"comment\">// Destructor, does nothing</span></div>\n\
<div class=\"line\"><span class=\"comment\">//</span></div>\n\
<div class=\"line\">exportMetadataCmd::~exportMetadataCmd()</div>\n\
<div class=\"line\">{</div>\n\
<div class=\"line\">}</div>\n\
<div class=\"line\"></div>\n\
<div class=\"line\"><span class=\"comment\">//======================================================================</span></div>\n\
<div class=\"line\"><span class=\"comment\">//</span></div>\n\
<div class=\"line\"><span class=\"comment\">// Check the parsed arguments</span></div>\n\
<div class=\"line\"><span class=\"comment\">//</span></div>\n\
<div class=\"line\"><a name=\"_a2\"></a><a class=\"code\" href=\"#!/url=./cpp_ref/class_m_status.html\">MStatus</a> exportMetadataCmd::checkArgs(<a name=\"_a3\"></a><a class=\"code\" href=\"#!/url=./cpp_ref/class_m_arg_database.html\">MArgDatabase</a>&amp; argsDb)</div>\n\
<div class=\"line\">{</div>\n\
<div class=\"line\">    <span class=\"keywordflow\">return</span> metadataBase::checkArgs( argsDb );</div>\n\
<div class=\"line\">}</div>\n\
<div class=\"line\"></div>\n\
<div class=\"line\"><span class=\"comment\">//======================================================================</span></div>\n\
<div class=\"line\"><span class=\"comment\">//</span></div>\n\
<div class=\"line\"><span class=\"comment\">// Do the command in create mode. Run the export, which sends all of the</span></div>\n\
<div class=\"line\"><span class=\"comment\">// specified metadata out to a file (if the -file flag was specified) or</span></div>\n\
<div class=\"line\"><span class=\"comment\">// as a returned string (if the -file flag was not specified)</span></div>\n\
<div class=\"line\"><span class=\"comment\">//</span></div>\n\
<div class=\"line\"><a class=\"code\" href=\"#!/url=./cpp_ref/class_m_status.html\">MStatus</a> exportMetadataCmd::doCreate()</div>\n\
<div class=\"line\">{</div>\n\
<div class=\"line\">    assert( fSerializer );</div>\n\
<div class=\"line\">    <a class=\"code\" href=\"#!/url=./cpp_ref/class_m_status.html\">MStatus</a> status;</div>\n\
<div class=\"line\"></div>\n\
<div class=\"line\">    assert( fObjects.length() == 1 );</div>\n\
<div class=\"line\">    <a name=\"_a4\"></a><a class=\"code\" href=\"#!/url=./cpp_ref/class_m_fn_dependency_node.html\">MFnDependencyNode</a> node( fObjects[0], &amp;status );</div>\n\
<div class=\"line\"></div>\n\
<div class=\"line\">    <span class=\"comment\">// Should have filtered out non-objects already</span></div>\n\
<div class=\"line\">    assert( status );</div>\n\
<div class=\"line\">    <span class=\"keywordflow\">if</span>( ! status ) <span class=\"keywordflow\">return</span> status;</div>\n\
<div class=\"line\"></div>\n\
<div class=\"line\">    displayInfo( node.name(&amp;status) );</div>\n\
<div class=\"line\"></div>\n\
<div class=\"line\">    <span class=\"keyword\">const</span> <a name=\"_a5\"></a><a class=\"code\" href=\"#!/url=./cpp_ref/classadsk_1_1_data_1_1_associations.html\">adsk::Data::Associations</a>* associationsToWrite = node.metadata();</div>\n\
<div class=\"line\">    <span class=\"keywordflow\">if</span>( ! associationsToWrite ) <span class=\"keywordflow\">return</span> <a name=\"a6\"></a><a class=\"code\" href=\"#!/url=./cpp_ref/class_m_status.html#a02ab596f4febca68da503aaf8dde3a80a1ef6c2d725fb4bec3e7e840d28adbc00\">MS::kFailure</a>;</div>\n\
<div class=\"line\">    std::string errors;</div>\n\
<div class=\"line\"></div>\n\
<div class=\"line\">    <span class=\"comment\">// Dump either to a file or the return string, depending on which was</span></div>\n\
<div class=\"line\">    <span class=\"comment\">// requested.</span></div>\n\
<div class=\"line\">    <span class=\"comment\">//</span></div>\n\
<div class=\"line\">    status = <a name=\"a7\"></a><a class=\"code\" href=\"#!/url=./cpp_ref/class_m_status.html#a02ab596f4febca68da503aaf8dde3a80af0536797208144380691e2b376ffc1d1\">MS::kSuccess</a>;</div>\n\
<div class=\"line\">    <span class=\"keywordflow\">if</span>( fFile )</div>\n\
<div class=\"line\">    {</div>\n\
<div class=\"line\">        <a name=\"_a8\"></a><a class=\"code\" href=\"#!/url=./cpp_ref/class_m_string.html\">MString</a> path( fFile-&gt;resolvedFullName() );</div>\n\
<div class=\"line\">        std::ofstream destination( fFile-&gt;resolvedFullName().asChar() );</div>\n\
<div class=\"line\">        <span class=\"keywordflow\">if</span>( fSerializer-&gt;write( *associationsToWrite, destination, errors ) == 0 )</div>\n\
<div class=\"line\">        {</div>\n\
<div class=\"line\">            setResult( path );</div>\n\
<div class=\"line\">        }</div>\n\
<div class=\"line\">        <span class=\"keywordflow\">else</span></div>\n\
<div class=\"line\">        {</div>\n\
<div class=\"line\">            <a class=\"code\" href=\"#!/url=./cpp_ref/class_m_string.html\">MString</a> errMsg( <a name=\"a9\"></a><a class=\"code\" href=\"#!/url=./cpp_ref/class_m_string_resource.html#a121315f443a9c4ea512738dc1d39414d\">MStringResource::getString</a>(kExportMetadataFailedFileWrite, status) );</div>\n\
<div class=\"line\">            displayError( errMsg );</div>\n\
<div class=\"line\">            status = <a class=\"code\" href=\"#!/url=./cpp_ref/class_m_status.html#a02ab596f4febca68da503aaf8dde3a80a1ef6c2d725fb4bec3e7e840d28adbc00\">MS::kFailure</a>;</div>\n\
<div class=\"line\">        }</div>\n\
<div class=\"line\">        destination.close();</div>\n\
<div class=\"line\">    }</div>\n\
<div class=\"line\">    <span class=\"keywordflow\">else</span></div>\n\
<div class=\"line\">    {</div>\n\
<div class=\"line\">        std::stringstream   writtenData;</div>\n\
<div class=\"line\">        <span class=\"keywordflow\">if</span>( fSerializer-&gt;write( *associationsToWrite, writtenData, errors ) == 0 )</div>\n\
<div class=\"line\">        {</div>\n\
<div class=\"line\">            setResult( writtenData.str().c_str() );</div>\n\
<div class=\"line\">        }</div>\n\
<div class=\"line\">        <span class=\"keywordflow\">else</span></div>\n\
<div class=\"line\">        {</div>\n\
<div class=\"line\">            <a class=\"code\" href=\"#!/url=./cpp_ref/class_m_string.html\">MString</a> errMsg( <a class=\"code\" href=\"#!/url=./cpp_ref/class_m_string_resource.html#a121315f443a9c4ea512738dc1d39414d\">MStringResource::getString</a>(kExportMetadataFailedStringWrite, status) );</div>\n\
<div class=\"line\">            displayError( errMsg );</div>\n\
<div class=\"line\">            status = <a class=\"code\" href=\"#!/url=./cpp_ref/class_m_status.html#a02ab596f4febca68da503aaf8dde3a80a1ef6c2d725fb4bec3e7e840d28adbc00\">MS::kFailure</a>;</div>\n\
<div class=\"line\">        }</div>\n\
<div class=\"line\">    }</div>\n\
<div class=\"line\"></div>\n\
<div class=\"line\">    <span class=\"keywordflow\">if</span>( errors.length() &gt; 0 )</div>\n\
<div class=\"line\">    {</div>\n\
<div class=\"line\">        displayError( errors.c_str() );</div>\n\
<div class=\"line\">        <span class=\"keywordflow\">return</span> <a class=\"code\" href=\"#!/url=./cpp_ref/class_m_status.html#a02ab596f4febca68da503aaf8dde3a80a1ef6c2d725fb4bec3e7e840d28adbc00\">MS::kFailure</a>;</div>\n\
<div class=\"line\">    }</div>\n\
<div class=\"line\"></div>\n\
<div class=\"line\">    <span class=\"keywordflow\">return</span> <a class=\"code\" href=\"#!/url=./cpp_ref/class_m_status.html#a02ab596f4febca68da503aaf8dde3a80af0536797208144380691e2b376ffc1d1\">MS::kSuccess</a>;</div>\n\
<div class=\"line\">}</div>\n\
<div class=\"line\"></div>\n\
<div class=\"line\"><span class=\"comment\">//======================================================================</span></div>\n\
<div class=\"line\"><span class=\"comment\">//</span></div>\n\
<div class=\"line\"><span class=\"comment\">// Do the command in query mode. It only does one thing, print the Stream,</span></div>\n\
<div class=\"line\"><span class=\"comment\">// Channel, Associations, and Structure formats available.</span></div>\n\
<div class=\"line\"><span class=\"comment\">//</span></div>\n\
<div class=\"line\"><a class=\"code\" href=\"#!/url=./cpp_ref/class_m_status.html\">MStatus</a> exportMetadataCmd::doQuery()</div>\n\
<div class=\"line\">{</div>\n\
<div class=\"line\">    assert( fSerializer );</div>\n\
<div class=\"line\">    <a class=\"code\" href=\"#!/url=./cpp_ref/class_m_status.html\">MStatus</a> status = <a class=\"code\" href=\"#!/url=./cpp_ref/class_m_status.html#a02ab596f4febca68da503aaf8dde3a80af0536797208144380691e2b376ffc1d1\">MS::kSuccess</a>;</div>\n\
<div class=\"line\"></div>\n\
<div class=\"line\">    std::set&lt;const adsk::Data::StreamSerializer*&gt;::iterator sFmtIt;</div>\n\
<div class=\"line\">    <span class=\"keywordflow\">for</span>( sFmtIt = adsk::Data::StreamSerializer::allFormats().begin();</div>\n\
<div class=\"line\">         sFmtIt != adsk::Data::StreamSerializer::allFormats().end(); sFmtIt++ )</div>\n\
<div class=\"line\">    {</div>\n\
<div class=\"line\">        <span class=\"keyword\">const</span> <a name=\"_a10\"></a><a class=\"code\" href=\"#!/url=./cpp_ref/classadsk_1_1_data_1_1_stream_serializer.html\">adsk::Data::StreamSerializer</a>* fmt = *sFmtIt;</div>\n\
<div class=\"line\">        <a class=\"code\" href=\"#!/url=./cpp_ref/class_m_string.html\">MString</a> fmtMsg( <a class=\"code\" href=\"#!/url=./cpp_ref/class_m_string_resource.html#a121315f443a9c4ea512738dc1d39414d\">MStringResource::getString</a>(kExportMetadataFormatType, status) );</div>\n\
<div class=\"line\">        <a class=\"code\" href=\"#!/url=./cpp_ref/class_m_string.html\">MString</a> fmtType( <span class=\"stringliteral\">&quot;Stream&quot;</span> );</div>\n\
<div class=\"line\">        <a class=\"code\" href=\"#!/url=./cpp_ref/class_m_string.html\">MString</a> fmtName( fmt-&gt;formatType() );</div>\n\
<div class=\"line\">        <a class=\"code\" href=\"#!/url=./cpp_ref/class_m_string.html\">MString</a> msg;</div>\n\
<div class=\"line\">        msg.<a name=\"a11\"></a><a class=\"code\" href=\"#!/url=./cpp_ref/class_m_string.html#a07ae464181c795f43fa1bcc288acff91\">format</a>( fmtMsg, fmtType, fmtName );</div>\n\
<div class=\"line\">        appendToResult( msg );</div>\n\
<div class=\"line\">    }</div>\n\
<div class=\"line\"></div>\n\
<div class=\"line\">    std::set&lt;const adsk::Data::ChannelSerializer*&gt;::iterator cFmtIt;</div>\n\
<div class=\"line\">    <span class=\"keywordflow\">for</span>( cFmtIt = adsk::Data::ChannelSerializer::allFormats().begin();</div>\n\
<div class=\"line\">         cFmtIt != adsk::Data::ChannelSerializer::allFormats().end(); cFmtIt++ )</div>\n\
<div class=\"line\">    {</div>\n\
<div class=\"line\">        <span class=\"keyword\">const</span> <a name=\"_a12\"></a><a class=\"code\" href=\"#!/url=./cpp_ref/classadsk_1_1_data_1_1_channel_serializer.html\">adsk::Data::ChannelSerializer</a>* fmt = *cFmtIt;</div>\n\
<div class=\"line\">        <a class=\"code\" href=\"#!/url=./cpp_ref/class_m_string.html\">MString</a> fmtMsg( <a class=\"code\" href=\"#!/url=./cpp_ref/class_m_string_resource.html#a121315f443a9c4ea512738dc1d39414d\">MStringResource::getString</a>(kExportMetadataFormatType, status) );</div>\n\
<div class=\"line\">        <a class=\"code\" href=\"#!/url=./cpp_ref/class_m_string.html\">MString</a> fmtType( <span class=\"stringliteral\">&quot;Channel&quot;</span> );</div>\n\
<div class=\"line\">        <a class=\"code\" href=\"#!/url=./cpp_ref/class_m_string.html\">MString</a> fmtName( fmt-&gt;formatType() );</div>\n\
<div class=\"line\">        <a class=\"code\" href=\"#!/url=./cpp_ref/class_m_string.html\">MString</a> msg;</div>\n\
<div class=\"line\">        msg.<a class=\"code\" href=\"#!/url=./cpp_ref/class_m_string.html#a07ae464181c795f43fa1bcc288acff91\">format</a>( fmtMsg, fmtType, fmtName );</div>\n\
<div class=\"line\">        appendToResult( msg );</div>\n\
<div class=\"line\">    }</div>\n\
<div class=\"line\"></div>\n\
<div class=\"line\">    std::set&lt;const adsk::Data::AssociationsSerializer*&gt;::iterator aFmtIt;</div>\n\
<div class=\"line\">    <span class=\"keywordflow\">for</span>( aFmtIt = adsk::Data::AssociationsSerializer::allFormats().begin();</div>\n\
<div class=\"line\">         aFmtIt != adsk::Data::AssociationsSerializer::allFormats().end(); aFmtIt++ )</div>\n\
<div class=\"line\">    {</div>\n\
<div class=\"line\">        <span class=\"keyword\">const</span> <a name=\"_a13\"></a><a class=\"code\" href=\"#!/url=./cpp_ref/classadsk_1_1_data_1_1_associations_serializer.html\">adsk::Data::AssociationsSerializer</a>* fmt = *aFmtIt;</div>\n\
<div class=\"line\">        <a class=\"code\" href=\"#!/url=./cpp_ref/class_m_string.html\">MString</a> fmtMsg( <a class=\"code\" href=\"#!/url=./cpp_ref/class_m_string_resource.html#a121315f443a9c4ea512738dc1d39414d\">MStringResource::getString</a>(kExportMetadataFormatType, status) );</div>\n\
<div class=\"line\">        <a class=\"code\" href=\"#!/url=./cpp_ref/class_m_string.html\">MString</a> fmtType( <span class=\"stringliteral\">&quot;Associations&quot;</span> );</div>\n\
<div class=\"line\">        <a class=\"code\" href=\"#!/url=./cpp_ref/class_m_string.html\">MString</a> fmtName( fmt-&gt;formatType() );</div>\n\
<div class=\"line\">        <a class=\"code\" href=\"#!/url=./cpp_ref/class_m_string.html\">MString</a> msg;</div>\n\
<div class=\"line\">        msg.<a class=\"code\" href=\"#!/url=./cpp_ref/class_m_string.html#a07ae464181c795f43fa1bcc288acff91\">format</a>( fmtMsg, fmtType, fmtName );</div>\n\
<div class=\"line\">        appendToResult( msg );</div>\n\
<div class=\"line\">    }</div>\n\
<div class=\"line\"></div>\n\
<div class=\"line\">    std::set&lt;const adsk::Data::StructureSerializer*&gt;::iterator fmtIt;</div>\n\
<div class=\"line\">    <span class=\"keywordflow\">for</span>( fmtIt = adsk::Data::StructureSerializer::allFormats().begin();</div>\n\
<div class=\"line\">         fmtIt != adsk::Data::StructureSerializer::allFormats().end(); fmtIt++ )</div>\n\
<div class=\"line\">    {</div>\n\
<div class=\"line\">        <span class=\"keyword\">const</span> <a name=\"_a14\"></a><a class=\"code\" href=\"#!/url=./cpp_ref/classadsk_1_1_data_1_1_structure_serializer.html\">adsk::Data::StructureSerializer</a>* fmt = *fmtIt;</div>\n\
<div class=\"line\">        <a class=\"code\" href=\"#!/url=./cpp_ref/class_m_string.html\">MString</a> fmtMsg( <a class=\"code\" href=\"#!/url=./cpp_ref/class_m_string_resource.html#a121315f443a9c4ea512738dc1d39414d\">MStringResource::getString</a>(kExportMetadataFormatType, status) );</div>\n\
<div class=\"line\">        <a class=\"code\" href=\"#!/url=./cpp_ref/class_m_string.html\">MString</a> fmtType( <span class=\"stringliteral\">&quot;Structure&quot;</span> );</div>\n\
<div class=\"line\">        <a class=\"code\" href=\"#!/url=./cpp_ref/class_m_string.html\">MString</a> fmtName( fmt-&gt;formatType() );</div>\n\
<div class=\"line\">        <a class=\"code\" href=\"#!/url=./cpp_ref/class_m_string.html\">MString</a> msg;</div>\n\
<div class=\"line\">        msg.<a class=\"code\" href=\"#!/url=./cpp_ref/class_m_string.html#a07ae464181c795f43fa1bcc288acff91\">format</a>( fmtMsg, fmtType, fmtName );</div>\n\
<div class=\"line\">        appendToResult( msg );</div>\n\
<div class=\"line\">    }</div>\n\
<div class=\"line\"></div>\n\
<div class=\"line\">    <span class=\"keywordflow\">return</span> status;</div>\n\
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
          <div class=\"footer-block\"><a href=\"../html/ac.cmtdialog.htm\" class=\"comments-anchor\" target=\"_blank\"><span class=\"comments-link\">Please send us your comment about this page</span></a></div><br></div>\n\
   </div></body>\n\
</html>\n\
";