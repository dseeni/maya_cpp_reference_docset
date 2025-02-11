var topic = "<!-- saved from url=(0024)http://docs.autodesk.com -->\n\
<html>\n\
   <head><script src=\"../scripts/yepnope.1.5.4-min.js\" type=\"text/javascript\"></script><script src=\"../scripts/lib/jquery-1.11.1.min.js\" type=\"text/javascript\"></script><meta http-equiv=\"Content-Type\" content=\"text/html; charset=UTF-8\"><meta name=\"product\" content=\"MAYAUL\"><meta name=\"release\" content=\"2018\"><meta name=\"book\" content=\"Developer\"><meta name=\"created\" content=\"2017-06-22\"><meta name=\"topicid\" content=\"GUID-02DEF634-1E7B-48C6-8ACD-2C934CA97887\"><meta name=\"topic-type\" content=\"concept\">\n\
      <title>MetadataXML/structureSerializerXML.cpp</title>\n\
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
    cpp_ref_adsk_ref_toc.initNavTree(\'_metadata_x_m_l_2structure_serializer_x_m_l_8cpp-example.html\', tocPrefix);\n\
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
            <h1>MetadataXML/structureSerializerXML.cpp</h1>\n\
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
<div class=\"title\">MetadataXML/structureSerializerXML.cpp</div>  </div>\n\
</div><!--header-->\n\
<div class=\"contents\">\n\
<div class=\"fragment\"><div class=\"line\"><span class=\"preprocessor\">#include &quot;structureSerializerXML.h&quot;</span></div>\n\
<div class=\"line\"><span class=\"preprocessor\">#include &quot;metadataXML.h&quot;</span></div>\n\
<div class=\"line\"><span class=\"preprocessor\">#include &quot;metadataXMLPluginStrings.h&quot;</span></div>\n\
<div class=\"line\"><span class=\"preprocessor\">#include &lt;sstream&gt;</span></div>\n\
<div class=\"line\"><span class=\"preprocessor\">#include &lt;stdlib.h&gt;</span></div>\n\
<div class=\"line\"><span class=\"preprocessor\">#include &lt;string.h&gt;</span></div>\n\
<div class=\"line\"><span class=\"preprocessor\">#include &lt;string&gt;</span></div>\n\
<div class=\"line\"><span class=\"preprocessor\">#include &lt;maya/MString.h&gt;</span></div>\n\
<div class=\"line\"><span class=\"preprocessor\">#include &lt;maya/MStringResource.h&gt;</span></div>\n\
<div class=\"line\"><span class=\"preprocessor\">#include &lt;maya/adskDataStructure.h&gt;</span></div>\n\
<div class=\"line\"><span class=\"preprocessor\">#include &lt;assert.h&gt;</span></div>\n\
<div class=\"line\"><span class=\"preprocessor\">#include &lt;libxml/globals.h&gt;</span></div>\n\
<div class=\"line\"><span class=\"preprocessor\">#include &lt;libxml/xmlreader.h&gt;</span></div>\n\
<div class=\"line\"><span class=\"preprocessor\">#include &lt;libxml/parser.h&gt;</span></div>\n\
<div class=\"line\"><span class=\"preprocessor\">#include &lt;libxml/tree.h&gt;</span></div>\n\
<div class=\"line\"></div>\n\
<div class=\"line\">ImplementSerializerFormat(StructureSerializerXML,StructureSerializer,xmlFormatType);</div>\n\
<div class=\"line\"></div>\n\
<div class=\"line\"><span class=\"comment\">//----------------------------------------------------------------------</span></div>\n\
<div class=\"line\"><span class=\"comment\">//</span></div>\n\
<div class=\"line\"><span class=\"comment\"></span><span class=\"comment\">//</span></div>\n\
<div class=\"line\">StructureSerializerXML::StructureSerializerXML()</div>\n\
<div class=\"line\">{</div>\n\
<div class=\"line\">}</div>\n\
<div class=\"line\"></div>\n\
<div class=\"line\"><span class=\"comment\">//----------------------------------------------------------------------</span></div>\n\
<div class=\"line\"><span class=\"comment\">//</span></div>\n\
<div class=\"line\"><span class=\"comment\"></span><span class=\"comment\">//</span></div>\n\
<div class=\"line\">StructureSerializerXML::~StructureSerializerXML ()</div>\n\
<div class=\"line\">{</div>\n\
<div class=\"line\">}</div>\n\
<div class=\"line\"></div>\n\
<div class=\"line\"><span class=\"comment\">//----------------------------------------------------------------------</span></div>\n\
<div class=\"line\"><span class=\"comment\">//</span></div>\n\
<div class=\"line\"><span class=\"comment\"></span><span class=\"comment\">//</span></div>\n\
<div class=\"line\"><span class=\"comment\"></span><span class=\"comment\">//</span></div>\n\
<div class=\"line\"><span class=\"comment\"></span><span class=\"comment\">//</span></div>\n\
<div class=\"line\">Structure*</div>\n\
<div class=\"line\">StructureSerializerXML::read(</div>\n\
<div class=\"line\">    std::istream&amp;           cSrc,</div>\n\
<div class=\"line\">    std::string&amp;            errors )<span class=\"keyword\">    const</span></div>\n\
<div class=\"line\"><span class=\"keyword\"></span>{</div>\n\
<div class=\"line\">    <span class=\"keywordtype\">unsigned</span> <span class=\"keywordtype\">int</span> errorCount = 0;</div>\n\
<div class=\"line\">    Structure* newStructure = NULL;</div>\n\
<div class=\"line\">    errors = <span class=\"stringliteral\">&quot;&quot;</span>;</div>\n\
<div class=\"line\"></div>\n\
<div class=\"line\">    <span class=\"comment\">// The boilerplate part of this code was taken from the libxml website</span></div>\n\
<div class=\"line\">    <span class=\"comment\">// examples. (http://www.xmlsoft.org/examples)</span></div>\n\
<div class=\"line\">    xmlDocPtr doc = NULL;</div>\n\
<div class=\"line\"></div>\n\
<div class=\"line\">    <span class=\"comment\">// this initialize the library and check potential ABI mismatches</span></div>\n\
<div class=\"line\">    <span class=\"comment\">// between the version it was compiled for and the actual shared</span></div>\n\
<div class=\"line\">    <span class=\"comment\">// library used.</span></div>\n\
<div class=\"line\">    LIBXML_TEST_VERSION</div>\n\
<div class=\"line\"></div>\n\
<div class=\"line\">    <span class=\"comment\">// Since these files can never be too big it&#39;s okay to slurp the entire</span></div>\n\
<div class=\"line\">    <span class=\"comment\">// thing into memory and process it as a string.</span></div>\n\
<div class=\"line\">    cSrc.seekg (0, std::ios::end);</div>\n\
<div class=\"line\">    <span class=\"keywordtype\">int</span> size = (int) cSrc.tellg();</div>\n\
<div class=\"line\">    <span class=\"keywordtype\">char</span>* memblock = <span class=\"keyword\">new</span> <span class=\"keywordtype\">char</span> [size];</div>\n\
<div class=\"line\">    cSrc.seekg (0, std::ios::beg);</div>\n\
<div class=\"line\">    cSrc.read (memblock, size);</div>\n\
<div class=\"line\"></div>\n\
<div class=\"line\">    doc = xmlReadMemory(memblock, size, NULL, NULL, 0);</div>\n\
<div class=\"line\"></div>\n\
<div class=\"line\">    xmlNode* structureNode = XML::Util::findNamedNode( xmlDocGetRootElement(doc), xmlTagStructure );</div>\n\
<div class=\"line\">    <span class=\"keywordflow\">do</span></div>\n\
<div class=\"line\">    {</div>\n\
<div class=\"line\">        <span class=\"keywordflow\">if</span>( ! structureNode )</div>\n\
<div class=\"line\">        {</div>\n\
<div class=\"line\">            REPORT_ERROR_AT_LINE(kStructureXMLStructureTagNotFound, 1);</div>\n\
<div class=\"line\">            <span class=\"keywordflow\">break</span>;</div>\n\
<div class=\"line\">        }</div>\n\
<div class=\"line\"></div>\n\
<div class=\"line\">        <span class=\"comment\">// Below the &lt;structure&gt; tag is a &lt;name&gt; tag and a set of &lt;member&gt; tags.</span></div>\n\
<div class=\"line\">        xmlNode* structureNameNode = XML::Util::findNamedNode( structureNode-&gt;children, xmlTagStructureName );</div>\n\
<div class=\"line\"></div>\n\
<div class=\"line\">        <span class=\"comment\">// First process the &lt;name&gt; tag to get the structure name</span></div>\n\
<div class=\"line\">        xmlChar* structureName = XML::Util::findText( doc, structureNameNode );</div>\n\
<div class=\"line\">        <span class=\"keywordflow\">if</span>( ! structureName )</div>\n\
<div class=\"line\">        {</div>\n\
<div class=\"line\">            REPORT_ERROR_AT_LINE(kStructureXMLStructureNameNotFound, structureNameNode ? structureNameNode-&gt;line : structureNode-&gt;line);</div>\n\
<div class=\"line\">            <span class=\"keywordflow\">break</span>;</div>\n\
<div class=\"line\">        }</div>\n\
<div class=\"line\"></div>\n\
<div class=\"line\">        <span class=\"comment\">// Need to create the structure this way so that on Windows the</span></div>\n\
<div class=\"line\">        <span class=\"comment\">// structure is not in the plug-in&#39;s heap, which would cause crashes</span></div>\n\
<div class=\"line\">        <span class=\"comment\">// when the main application tries to delete it or the plug-in is</span></div>\n\
<div class=\"line\">        <span class=\"comment\">// unloaded.</span></div>\n\
<div class=\"line\">        newStructure = Structure::create();</div>\n\
<div class=\"line\"></div>\n\
<div class=\"line\">        newStructure-&gt;setName( (<span class=\"keyword\">const</span> <span class=\"keywordtype\">char</span>*)structureName );</div>\n\
<div class=\"line\">        xmlFree( structureName );</div>\n\
<div class=\"line\">    </div>\n\
<div class=\"line\">        <span class=\"comment\">// Next walk the list of &lt;member&gt; child tags</span></div>\n\
<div class=\"line\">        <span class=\"keywordflow\">for</span> (xmlNode* childNode = structureNode-&gt;children; childNode; childNode = childNode-&gt;next)</div>\n\
<div class=\"line\">        {</div>\n\
<div class=\"line\">            <span class=\"comment\">// Skip anything unrecognized, for maximum flexibility</span></div>\n\
<div class=\"line\">            <span class=\"keywordflow\">if</span>( (childNode-&gt;type != XML_ELEMENT_NODE)</div>\n\
<div class=\"line\">            ||  ( 0 != strcmp((<span class=\"keyword\">const</span> <span class=\"keywordtype\">char</span>*)childNode-&gt;name, xmlTagStructureMember) ) )</div>\n\
<div class=\"line\">            {</div>\n\
<div class=\"line\">                <span class=\"keywordflow\">continue</span>;</div>\n\
<div class=\"line\">            }</div>\n\
<div class=\"line\"></div>\n\
<div class=\"line\">            <span class=\"comment\">// &lt;dim&gt; tag is optional for all members</span></div>\n\
<div class=\"line\">            xmlNode* memberDimNode = XML::Util::findNamedNode( childNode-&gt;children, xmlTagStructureMemberDim );</div>\n\
<div class=\"line\">            <span class=\"keywordtype\">int</span> memberDim = 1;</div>\n\
<div class=\"line\">            <span class=\"keywordflow\">if</span>( memberDimNode )</div>\n\
<div class=\"line\">            {</div>\n\
<div class=\"line\">                xmlChar* value = XML::Util::findText( doc, memberDimNode );</div>\n\
<div class=\"line\">                <span class=\"keywordflow\">if</span>( value )</div>\n\
<div class=\"line\">                {</div>\n\
<div class=\"line\">                    memberDim = atol( (<span class=\"keyword\">const</span> <span class=\"keywordtype\">char</span>*)value );</div>\n\
<div class=\"line\">                    xmlFree( value );</div>\n\
<div class=\"line\">                }</div>\n\
<div class=\"line\">                <span class=\"keywordflow\">else</span></div>\n\
<div class=\"line\">                {</div>\n\
<div class=\"line\">                    REPORT_ERROR_AT_LINE( kStructureXMLMemberDimNotFound, memberDimNode-&gt;line );</div>\n\
<div class=\"line\">                    <span class=\"keywordflow\">break</span>;</div>\n\
<div class=\"line\">                }</div>\n\
<div class=\"line\">            }</div>\n\
<div class=\"line\"></div>\n\
<div class=\"line\">            <span class=\"comment\">// &lt;name&gt; tag is mandatory for all members</span></div>\n\
<div class=\"line\">            xmlNode* memberNameNode = XML::Util::findNamedNode( childNode-&gt;children, xmlTagStructureMemberName );</div>\n\
<div class=\"line\">            xmlChar* memberName = memberNameNode ? XML::Util::findText( doc, memberNameNode ) : NULL;</div>\n\
<div class=\"line\">            <span class=\"keywordflow\">if</span>( ! memberName )</div>\n\
<div class=\"line\">            {</div>\n\
<div class=\"line\">                REPORT_ERROR_AT_LINE(kStructureXMLMemberNameNotFound, (memberNameNode ? memberNameNode-&gt;line : childNode-&gt;line));</div>\n\
<div class=\"line\">                <span class=\"keywordflow\">break</span>;</div>\n\
<div class=\"line\">            }</div>\n\
<div class=\"line\"></div>\n\
<div class=\"line\">            <span class=\"comment\">// &lt;type&gt; tag is mandatory for all members</span></div>\n\
<div class=\"line\">            xmlNode* memberTypeNode = XML::Util::findNamedNode( childNode-&gt;children, xmlTagStructureMemberType );</div>\n\
<div class=\"line\">            xmlChar* memberType = memberTypeNode ? XML::Util::findText( doc, memberTypeNode ) : NULL;</div>\n\
<div class=\"line\">            <span class=\"keywordflow\">if</span>( ! memberType )</div>\n\
<div class=\"line\">            {</div>\n\
<div class=\"line\">                REPORT_ERROR_AT_LINE(kStructureXMLMemberTypeNotFound, (memberTypeNode ? memberTypeNode-&gt;line : childNode-&gt;line));</div>\n\
<div class=\"line\">                xmlFree( memberName );</div>\n\
<div class=\"line\">                <span class=\"keywordflow\">break</span>;</div>\n\
<div class=\"line\">            }</div>\n\
<div class=\"line\">            Member::eDataType dataType = Member::typeFromName((<span class=\"keyword\">const</span> <span class=\"keywordtype\">char</span>*)memberType);</div>\n\
<div class=\"line\">            <span class=\"keywordflow\">if</span>( dataType == Member::kInvalidType )</div>\n\
<div class=\"line\">            {</div>\n\
<div class=\"line\">                REPORT_ERROR_AT_LINE(kStructureXMLMemberTypeInvalid, memberTypeNode-&gt;line);</div>\n\
<div class=\"line\">            }</div>\n\
<div class=\"line\">            <span class=\"keywordflow\">else</span></div>\n\
<div class=\"line\">            {</div>\n\
<div class=\"line\">                newStructure-&gt;addMember( dataType, memberDim, (<span class=\"keyword\">const</span> <span class=\"keywordtype\">char</span>*) memberName );</div>\n\
<div class=\"line\">            }</div>\n\
<div class=\"line\">            xmlFree( memberType );</div>\n\
<div class=\"line\">            xmlFree( memberName );</div>\n\
<div class=\"line\">        }</div>\n\
<div class=\"line\">        <span class=\"keywordflow\">break</span>;</div>\n\
<div class=\"line\">    } <span class=\"keywordflow\">while</span>( <span class=\"keyword\">true</span> );</div>\n\
<div class=\"line\"></div>\n\
<div class=\"line\">    <span class=\"keyword\">delete</span>[] memblock;</div>\n\
<div class=\"line\"></div>\n\
<div class=\"line\">    <span class=\"comment\">// Free the document</span></div>\n\
<div class=\"line\">    xmlFreeDoc(doc);</div>\n\
<div class=\"line\"></div>\n\
<div class=\"line\">    <span class=\"comment\">// If there were errors any structure created will be incorrect so pass</span></div>\n\
<div class=\"line\">    <span class=\"comment\">// back nothing rather than bad data.</span></div>\n\
<div class=\"line\">    <span class=\"keywordflow\">if</span>( errorCount &gt; 0 )</div>\n\
<div class=\"line\">    {</div>\n\
<div class=\"line\">        <span class=\"comment\">// Sneaky little trick to get the structure to delete itself even</span></div>\n\
<div class=\"line\">        <span class=\"comment\">// though the destructor cannot be called directly.</span></div>\n\
<div class=\"line\">        <span class=\"keywordflow\">if</span>( newStructure )</div>\n\
<div class=\"line\">        {</div>\n\
<div class=\"line\">            newStructure-&gt;ref();</div>\n\
<div class=\"line\">            newStructure-&gt;unref();</div>\n\
<div class=\"line\">            newStructure = NULL;</div>\n\
<div class=\"line\">        }</div>\n\
<div class=\"line\">    }</div>\n\
<div class=\"line\">    <span class=\"keywordflow\">return</span> newStructure;</div>\n\
<div class=\"line\">}</div>\n\
<div class=\"line\"></div>\n\
<div class=\"line\"><span class=\"comment\">//----------------------------------------------------------------------</span></div>\n\
<div class=\"line\"><span class=\"comment\">//</span></div>\n\
<div class=\"line\"><span class=\"comment\"></span><span class=\"comment\">//</span></div>\n\
<div class=\"line\"><span class=\"comment\"></span><span class=\"comment\">//</span></div>\n\
<div class=\"line\"><span class=\"comment\"></span><span class=\"comment\">//</span></div>\n\
<div class=\"line\"><span class=\"keywordtype\">int</span></div>\n\
<div class=\"line\">StructureSerializerXML::write(</div>\n\
<div class=\"line\">    <span class=\"keyword\">const</span> Structure&amp;    dataToWrite,</div>\n\
<div class=\"line\">    std::ostream&amp;       cDst )<span class=\"keyword\">  const</span></div>\n\
<div class=\"line\"><span class=\"keyword\"></span>{</div>\n\
<div class=\"line\">    cDst &lt;&lt; <span class=\"stringliteral\">&quot;&lt;?xml version=&#39;1.0&#39; encoding=&#39;UTF-8&#39;?&gt;&quot;</span>  &lt;&lt; std::endl;</div>\n\
<div class=\"line\"></div>\n\
<div class=\"line\">    xmlChar* structureName = xmlEncodeSpecialChars(NULL, (<span class=\"keyword\">const</span> xmlChar*)dataToWrite.name());</div>\n\
<div class=\"line\"></div>\n\
<div class=\"line\">    <span class=\"comment\">// Start with the main structure tag containing the name</span></div>\n\
<div class=\"line\">    cDst &lt;&lt; <span class=\"stringliteral\">&quot;&lt;&quot;</span> &lt;&lt; xmlTagStructure &lt;&lt; <span class=\"stringliteral\">&quot;&gt;&quot;</span> &lt;&lt; std::endl;</div>\n\
<div class=\"line\">    cDst &lt;&lt; <span class=\"stringliteral\">&quot;    &lt;&quot;</span> &lt;&lt; xmlTagStructureName &lt;&lt; <span class=\"stringliteral\">&quot;&gt;&quot;</span></div>\n\
<div class=\"line\">                    &lt;&lt; structureName</div>\n\
<div class=\"line\">         &lt;&lt; <span class=\"stringliteral\">&quot;    &lt;/&quot;</span> &lt;&lt; xmlTagStructureName &lt;&lt; <span class=\"stringliteral\">&quot;&gt;&quot;</span> &lt;&lt; std::endl;</div>\n\
<div class=\"line\">    cDst &lt;&lt; <span class=\"stringliteral\">&quot;&lt;/&quot;</span> &lt;&lt; xmlTagStructureName &lt;&lt; <span class=\"stringliteral\">&quot;&gt;&quot;</span> &lt;&lt; std::endl;</div>\n\
<div class=\"line\"></div>\n\
<div class=\"line\">    xmlFree( structureName );</div>\n\
<div class=\"line\"></div>\n\
<div class=\"line\">    <span class=\"comment\">// Write out each structure member in its own tag</span></div>\n\
<div class=\"line\">    <span class=\"keywordflow\">for</span>( Structure::iterator structIt = dataToWrite.begin();</div>\n\
<div class=\"line\">         structIt != dataToWrite.end();</div>\n\
<div class=\"line\">         ++structIt )</div>\n\
<div class=\"line\">    {</div>\n\
<div class=\"line\">        xmlChar* memberName = xmlEncodeSpecialChars(NULL, (<span class=\"keyword\">const</span> xmlChar*)structIt-&gt;name());</div>\n\
<div class=\"line\">        xmlChar* memberType = xmlEncodeSpecialChars(NULL, (<span class=\"keyword\">const</span> xmlChar*)Member::typeName(structIt-&gt;type()));</div>\n\
<div class=\"line\"></div>\n\
<div class=\"line\">        cDst &lt;&lt; <span class=\"stringliteral\">&quot;    &lt;&quot;</span> &lt;&lt; xmlTagStructureMember &lt;&lt; <span class=\"stringliteral\">&quot;&gt;&quot;</span> &lt;&lt; std::endl;</div>\n\
<div class=\"line\">        cDst &lt;&lt; <span class=\"stringliteral\">&quot;        &lt;&quot;</span> &lt;&lt; xmlTagStructureMemberName &lt;&lt; <span class=\"stringliteral\">&quot;&gt;&quot;</span> &lt;&lt; memberName</div>\n\
<div class=\"line\">             &lt;&lt; <span class=\"stringliteral\">&quot;        &lt;/&quot;</span> &lt;&lt; xmlTagStructureMemberName &lt;&lt; <span class=\"stringliteral\">&quot;&gt;&quot;</span> &lt;&lt; std::endl;</div>\n\
<div class=\"line\">        cDst &lt;&lt; <span class=\"stringliteral\">&quot;        &lt;&quot;</span> &lt;&lt; xmlTagStructureMemberType &lt;&lt; <span class=\"stringliteral\">&quot;&gt;&quot;</span> &lt;&lt; memberType</div>\n\
<div class=\"line\">             &lt;&lt; <span class=\"stringliteral\">&quot;        &lt;/&quot;</span> &lt;&lt; xmlTagStructureMemberType &lt;&lt; <span class=\"stringliteral\">&quot;&gt;&quot;</span> &lt;&lt; std::endl;</div>\n\
<div class=\"line\">        <span class=\"keywordflow\">if</span>( structIt-&gt;length() != 1 )</div>\n\
<div class=\"line\">        {</div>\n\
<div class=\"line\">            cDst &lt;&lt; <span class=\"stringliteral\">&quot;        &lt;&quot;</span> &lt;&lt; xmlTagStructureMemberDim &lt;&lt; <span class=\"stringliteral\">&quot;&gt;&quot;</span> &lt;&lt; structIt-&gt;length()</div>\n\
<div class=\"line\">                 &lt;&lt; <span class=\"stringliteral\">&quot;        &lt;/&quot;</span> &lt;&lt; xmlTagStructureMemberDim &lt;&lt; <span class=\"stringliteral\">&quot;&gt;&quot;</span> &lt;&lt; std::endl;</div>\n\
<div class=\"line\">        }</div>\n\
<div class=\"line\">        cDst &lt;&lt; <span class=\"stringliteral\">&quot;    &lt;/&quot;</span> &lt;&lt; xmlTagStructureMember &lt;&lt; <span class=\"stringliteral\">&quot;&gt;&quot;</span> &lt;&lt; std::endl;</div>\n\
<div class=\"line\"></div>\n\
<div class=\"line\">        xmlFree( memberName );</div>\n\
<div class=\"line\">        xmlFree( memberType );</div>\n\
<div class=\"line\">    }</div>\n\
<div class=\"line\">    cDst &lt;&lt; <span class=\"stringliteral\">&quot;&lt;/&quot;</span> &lt;&lt; xmlTagStructure &lt;&lt; <span class=\"stringliteral\">&quot;&gt;&quot;</span> &lt;&lt; std::endl;</div>\n\
<div class=\"line\">    <span class=\"keywordflow\">return</span> 0;</div>\n\
<div class=\"line\">}</div>\n\
<div class=\"line\"></div>\n\
<div class=\"line\"><span class=\"comment\">//----------------------------------------------------------------------</span></div>\n\
<div class=\"line\"><span class=\"comment\">//</span></div>\n\
<div class=\"line\"><span class=\"comment\"></span><span class=\"comment\">//</span></div>\n\
<div class=\"line\"><span class=\"comment\"></span><span class=\"comment\">//</span></div>\n\
<div class=\"line\"><span class=\"keywordtype\">void</span></div>\n\
<div class=\"line\">StructureSerializerXML::getFormatDescription(</div>\n\
<div class=\"line\">    std::ostream&amp;   info )<span class=\"keyword\"> const</span></div>\n\
<div class=\"line\"><span class=\"keyword\"></span>{</div>\n\
<div class=\"line\">    <a name=\"_a0\"></a><a class=\"code\" href=\"#!/url=./cpp_ref/class_m_status.html\">MStatus</a> status;</div>\n\
<div class=\"line\">    <span class=\"comment\">// The message is split into two parts to make it easier to insert the</span></div>\n\
<div class=\"line\">    <span class=\"comment\">// list of accepted structure member types.</span></div>\n\
<div class=\"line\">    <a name=\"_a1\"></a><a class=\"code\" href=\"#!/url=./cpp_ref/class_m_string.html\">MString</a> msgPre = <a name=\"a2\"></a><a class=\"code\" href=\"#!/url=./cpp_ref/class_m_string_resource.html#a121315f443a9c4ea512738dc1d39414d\">MStringResource::getString</a>(kStructureXMLInfoPre, status);</div>\n\
<div class=\"line\">    <a class=\"code\" href=\"#!/url=./cpp_ref/class_m_string.html\">MString</a> msgPost = <a class=\"code\" href=\"#!/url=./cpp_ref/class_m_string_resource.html#a121315f443a9c4ea512738dc1d39414d\">MStringResource::getString</a>(kStructureXMLInfoPost, status);</div>\n\
<div class=\"line\"></div>\n\
<div class=\"line\">    info &lt;&lt; msgPre.<a name=\"a3\"></a><a class=\"code\" href=\"#!/url=./cpp_ref/class_m_string.html#aa9ab612f356c53479afc4c648c9ef94d\">asChar</a>();</div>\n\
<div class=\"line\">    <span class=\"keywordflow\">for</span>( <span class=\"keywordtype\">unsigned</span> <span class=\"keywordtype\">int</span> i=Member::kFirstType; i&lt;Member::kLastType; i++ )</div>\n\
<div class=\"line\">    {</div>\n\
<div class=\"line\">        <span class=\"keywordflow\">if</span>( i != Member::kFirstType ) info &lt;&lt; <span class=\"stringliteral\">&quot;, &quot;</span>;</div>\n\
<div class=\"line\">        info &lt;&lt; Member::typeName((Member::eDataType)i);</div>\n\
<div class=\"line\">    }</div>\n\
<div class=\"line\">    info &lt;&lt; msgPost.<a class=\"code\" href=\"#!/url=./cpp_ref/class_m_string.html#aa9ab612f356c53479afc4c648c9ef94d\">asChar</a>();</div>\n\
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
          <div class=\"footer-block\"><a href=\"../html/ac.cmtdialog.htm\" class=\"comments-anchor\" target=\"_blank\"><span class=\"comments-link\">Please send us your comment about this page</span></a></div></div>\n\
   </div></body>\n\
</html>\n\
";