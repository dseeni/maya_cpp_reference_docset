var topic = "<!-- saved from url=(0024)http://docs.autodesk.com -->\n\
<html>\n\
   <head><script src=\"../scripts/yepnope.1.5.4-min.js\" type=\"text/javascript\"></script><script src=\"../scripts/lib/jquery-1.11.1.min.js\" type=\"text/javascript\"></script><meta http-equiv=\"Content-Type\" content=\"text/html; charset=UTF-8\"><meta name=\"product\" content=\"MAYAUL\"><meta name=\"release\" content=\"2017\"><meta name=\"book\" content=\"Developer\"><meta name=\"created\" content=\"2016-06-16\"><meta name=\"topicid\" content=\"GUID-02DEF634-1E7B-48C6-8ACD-2C934CA97887\"><meta name=\"topic-type\" content=\"concept\">\n\
      <title>apiMeshShape/apiMeshCreator.h</title>\n\
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
    cpp_ref_adsk_ref_toc.initNavTree(\'api_mesh_shape_2api_mesh_creator_8h-example.html\', tocPrefix);\n\
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
            <h1>apiMeshShape/apiMeshCreator.h</h1>\n\
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
<div class=\"title\">apiMeshShape/apiMeshCreator.h</div>  </div>\n\
</div><!--header-->\n\
<div class=\"contents\">\n\
<div class=\"fragment\"><div class=\"line\"><span class=\"comment\">//-</span></div>\n\
<div class=\"line\"><span class=\"comment\">// ==========================================================================</span></div>\n\
<div class=\"line\"><span class=\"comment\">// Copyright 1995,2006,2008 Autodesk, Inc. All rights reserved.</span></div>\n\
<div class=\"line\"><span class=\"comment\">//</span></div>\n\
<div class=\"line\"><span class=\"comment\">// Use of this software is subject to the terms of the Autodesk</span></div>\n\
<div class=\"line\"><span class=\"comment\">// license agreement provided at the time of installation or download,</span></div>\n\
<div class=\"line\"><span class=\"comment\">// or which otherwise accompanies this software in either electronic</span></div>\n\
<div class=\"line\"><span class=\"comment\">// or hard copy form.</span></div>\n\
<div class=\"line\"><span class=\"comment\">// ==========================================================================</span></div>\n\
<div class=\"line\"><span class=\"comment\">//+</span></div>\n\
<div class=\"line\"></div>\n\
<div class=\"line\"></div>\n\
<div class=\"line\"><span class=\"preprocessor\">#ifndef _apiMeshCreator</span></div>\n\
<div class=\"line\"><span class=\"preprocessor\">#define _apiMeshCreator</span></div>\n\
<div class=\"line\"></div>\n\
<div class=\"line\"><span class=\"comment\">//</span></div>\n\
<div class=\"line\"><span class=\"comment\">// apiMeshCreator.h</span></div>\n\
<div class=\"line\"><span class=\"comment\">//</span></div>\n\
<div class=\"line\"><span class=\"comment\">// A DG node that takes a maya mesh as input and outputs apiMeshData.</span></div>\n\
<div class=\"line\"><span class=\"comment\">// If there is no input then the node creates a cube or sphere</span></div>\n\
<div class=\"line\"><span class=\"comment\">// depending on what the shapeType attribute is set to.</span></div>\n\
<div class=\"line\"><span class=\"comment\">//</span></div>\n\
<div class=\"line\"><span class=\"comment\"></span></div>\n\
<div class=\"line\"><span class=\"preprocessor\">#include &lt;maya/MPxNode.h&gt;</span></div>\n\
<div class=\"line\"><span class=\"preprocessor\">#include &lt;maya/MTypeId.h&gt;</span></div>\n\
<div class=\"line\"><span class=\"preprocessor\">#include &lt;maya/MPointArray.h&gt;</span></div>\n\
<div class=\"line\"><span class=\"preprocessor\">#include &lt;maya/MIntArray.h&gt;</span></div>\n\
<div class=\"line\"><span class=\"preprocessor\">#include &lt;maya/MVectorArray.h&gt;</span></div>\n\
<div class=\"line\"><span class=\"preprocessor\">#include &lt;maya/MDoubleArray.h&gt;</span> </div>\n\
<div class=\"line\"></div>\n\
<div class=\"line\"><span class=\"keyword\">class </span>apiMeshGeomUV; </div>\n\
<div class=\"line\"></div>\n\
<div class=\"line\"><span class=\"keyword\">class </span>apiMeshCreator : <span class=\"keyword\">public</span> <a name=\"_a0\"></a><a class=\"code\" href=\"#!/url=./cpp_ref/class_m_px_node.html\">MPxNode</a></div>\n\
<div class=\"line\">{</div>\n\
<div class=\"line\"><span class=\"keyword\">public</span>:</div>\n\
<div class=\"line\">    apiMeshCreator();</div>\n\
<div class=\"line\">    <span class=\"keyword\">virtual</span> ~apiMeshCreator(); </div>\n\
<div class=\"line\"></div>\n\
<div class=\"line\">    <span class=\"comment\">//</span></div>\n\
<div class=\"line\">    <span class=\"comment\">// Overrides</span></div>\n\
<div class=\"line\">    <span class=\"comment\">//</span></div>\n\
<div class=\"line\"><span class=\"comment\"></span></div>\n\
<div class=\"line\">    <span class=\"keyword\">virtual</span> <a name=\"_a1\"></a><a class=\"code\" href=\"#!/url=./cpp_ref/class_m_status.html\">MStatus</a>         <a name=\"a2\"></a><a class=\"code\" href=\"#!/url=./cpp_ref/class_m_px_node.html#a5cb7edfa1f67c75588bec1c38b7bf5f8\">compute</a>( <span class=\"keyword\">const</span> <a name=\"_a3\"></a><a class=\"code\" href=\"#!/url=./cpp_ref/class_m_plug.html\">MPlug</a>&amp; plug, <a name=\"_a4\"></a><a class=\"code\" href=\"#!/url=./cpp_ref/class_m_data_block.html\">MDataBlock</a>&amp; data );</div>\n\
<div class=\"line\"></div>\n\
<div class=\"line\">    <span class=\"comment\">//</span></div>\n\
<div class=\"line\">    <span class=\"comment\">// Helper methods</span></div>\n\
<div class=\"line\">    <span class=\"comment\">//</span></div>\n\
<div class=\"line\"><span class=\"comment\"></span></div>\n\
<div class=\"line\">    <span class=\"keyword\">static</span>  <span class=\"keywordtype\">void</span> *          creator();</div>\n\
<div class=\"line\">    <span class=\"keyword\">static</span>  <a class=\"code\" href=\"#!/url=./cpp_ref/class_m_status.html\">MStatus</a>         initialize();</div>\n\
<div class=\"line\"></div>\n\
<div class=\"line\">    <a class=\"code\" href=\"#!/url=./cpp_ref/class_m_status.html\">MStatus</a>                 computeInputMesh( <span class=\"keyword\">const</span> <a class=\"code\" href=\"#!/url=./cpp_ref/class_m_plug.html\">MPlug</a>&amp; plug,</div>\n\
<div class=\"line\">                                              <a class=\"code\" href=\"#!/url=./cpp_ref/class_m_data_block.html\">MDataBlock</a>&amp; datablock,</div>\n\
<div class=\"line\">                                              <a name=\"_a5\"></a><a class=\"code\" href=\"#!/url=./cpp_ref/class_m_point_array.html\">MPointArray</a>&amp; vertices,</div>\n\
<div class=\"line\">                                              <a name=\"_a6\"></a><a class=\"code\" href=\"#!/url=./cpp_ref/class_m_int_array.html\">MIntArray</a>&amp; counts,</div>\n\
<div class=\"line\">                                              <a class=\"code\" href=\"#!/url=./cpp_ref/class_m_int_array.html\">MIntArray</a>&amp; connects,</div>\n\
<div class=\"line\">                                              <a name=\"_a7\"></a><a class=\"code\" href=\"#!/url=./cpp_ref/class_m_vector_array.html\">MVectorArray</a>&amp; normals,</div>\n\
<div class=\"line\">                                              apiMeshGeomUV &amp;uvs ); </div>\n\
<div class=\"line\"></div>\n\
<div class=\"line\">    <span class=\"keywordtype\">void</span>                    buildCube( <span class=\"keywordtype\">double</span> cube_size,</div>\n\
<div class=\"line\">                                       <a class=\"code\" href=\"#!/url=./cpp_ref/class_m_point_array.html\">MPointArray</a>&amp; pa,</div>\n\
<div class=\"line\">                                       <a class=\"code\" href=\"#!/url=./cpp_ref/class_m_int_array.html\">MIntArray</a>&amp; faceCounts,</div>\n\
<div class=\"line\">                                       <a class=\"code\" href=\"#!/url=./cpp_ref/class_m_int_array.html\">MIntArray</a>&amp; faceConnects,</div>\n\
<div class=\"line\">                                       <a class=\"code\" href=\"#!/url=./cpp_ref/class_m_vector_array.html\">MVectorArray</a>&amp; normals,</div>\n\
<div class=\"line\">                                       apiMeshGeomUV&amp; uvs ); </div>\n\
<div class=\"line\"></div>\n\
<div class=\"line\">    <span class=\"keywordtype\">void</span>                    buildSphere( <span class=\"keywordtype\">double</span> radius,</div>\n\
<div class=\"line\">                                         <span class=\"keywordtype\">int</span> divisions,</div>\n\
<div class=\"line\">                                         <a class=\"code\" href=\"#!/url=./cpp_ref/class_m_point_array.html\">MPointArray</a>&amp; pa,</div>\n\
<div class=\"line\">                                         <a class=\"code\" href=\"#!/url=./cpp_ref/class_m_int_array.html\">MIntArray</a>&amp; faceCounts,</div>\n\
<div class=\"line\">                                         <a class=\"code\" href=\"#!/url=./cpp_ref/class_m_int_array.html\">MIntArray</a>&amp; faceConnects,</div>\n\
<div class=\"line\">                                         <a class=\"code\" href=\"#!/url=./cpp_ref/class_m_vector_array.html\">MVectorArray</a>&amp; normals, </div>\n\
<div class=\"line\">                                         apiMeshGeomUV&amp; uvs ); </div>\n\
<div class=\"line\"></div>\n\
<div class=\"line\"><span class=\"keyword\">public</span>:</div>\n\
<div class=\"line\">    <span class=\"comment\">//</span></div>\n\
<div class=\"line\">    <span class=\"comment\">// Attributes</span></div>\n\
<div class=\"line\">    <span class=\"comment\">//</span></div>\n\
<div class=\"line\"><span class=\"comment\"></span>    <span class=\"keyword\">static</span>  <a name=\"_a8\"></a><a class=\"code\" href=\"#!/url=./cpp_ref/class_m_object.html\">MObject</a>         size;</div>\n\
<div class=\"line\">    <span class=\"keyword\">static</span>  <a class=\"code\" href=\"#!/url=./cpp_ref/class_m_object.html\">MObject</a>         shapeType;</div>\n\
<div class=\"line\">    <span class=\"keyword\">static</span>  <a class=\"code\" href=\"#!/url=./cpp_ref/class_m_object.html\">MObject</a>         inputMesh;</div>\n\
<div class=\"line\">    <span class=\"keyword\">static</span>  <a class=\"code\" href=\"#!/url=./cpp_ref/class_m_object.html\">MObject</a>         outputSurface;</div>\n\
<div class=\"line\">        </div>\n\
<div class=\"line\"><span class=\"keyword\">public</span>: </div>\n\
<div class=\"line\">    <span class=\"keyword\">static</span>  <a name=\"_a9\"></a><a class=\"code\" href=\"#!/url=./cpp_ref/class_m_type_id.html\">MTypeId</a>     id;</div>\n\
<div class=\"line\">};</div>\n\
<div class=\"line\"></div>\n\
<div class=\"line\"><span class=\"preprocessor\">#endif </span><span class=\"comment\">/* _apiMeshCreator */</span><span class=\"preprocessor\"></span></div>\n\
</div><!-- fragment --> </div><!-- contents -->\n\
</div><!-- doc-content -->\n\
          <div class=\"footer-block\"><a href=\"../html/ac.cmtdialog.htm\" class=\"comments-anchor\" target=\"_blank\"><span class=\"comments-link\">Please send us your comment about this page</span></a></div><br></div>\n\
   </div></body>\n\
</html>\n\
";