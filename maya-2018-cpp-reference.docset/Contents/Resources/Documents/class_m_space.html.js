var topic = "<!-- saved from url=(0024)http://docs.autodesk.com -->\n\
<html>\n\
   <head><script src=\"../scripts/yepnope.1.5.4-min.js\" type=\"text/javascript\"></script><script src=\"../scripts/lib/jquery-1.11.1.min.js\" type=\"text/javascript\"></script><meta http-equiv=\"Content-Type\" content=\"text/html; charset=UTF-8\"><meta name=\"product\" content=\"MAYAUL\"><meta name=\"release\" content=\"2018\"><meta name=\"book\" content=\"Developer\"><meta name=\"created\" content=\"2017-06-22\"><meta name=\"topicid\" content=\"GUID-02DEF634-1E7B-48C6-8ACD-2C934CA97887\"><meta name=\"topic-type\" content=\"concept\">\n\
      <title>MSpace Class Reference</title>\n\
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
    cpp_ref_adsk_ref_toc.initNavTree(\'class_m_space.html\', tocPrefix);\n\
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
            <h1>MSpace Class Reference</h1>\n\
         </div>\n\
\n\
    <div id=\"top\"><!-- Generated by Doxygen 1.8.10 -->\n\
  <div id=\"navrow1\" class=\"tabs\">\n\
    <ul class=\"tablist\">\n\
      <li><a href=\"#!/url=./cpp_ref/index.html\"><span>Main&#160;Page</span></a></li>\n\
      <li><a href=\"#!/url=./cpp_ref/pages.html\"><span>Topics</span></a></li>\n\
      <li><a href=\"#!/url=./cpp_ref/modules.html\"><span>Modules</span></a></li>\n\
      <li><a href=\"#!/url=./cpp_ref/namespaces.html\"><span>Namespaces</span></a></li>\n\
      <li class=\"current\"><a href=\"#!/url=./cpp_ref/annotated.html\"><span>Classes</span></a></li>\n\
      <li><a href=\"#!/url=./cpp_ref/examples.html\"><span>Examples</span></a></li>\n\
    </ul>\n\
  </div>\n\
  <div id=\"navrow2\" class=\"tabs2\">\n\
    <ul class=\"tablist\">\n\
      <li><a href=\"#!/url=./cpp_ref/annotated.html\"><span>Class&#160;List</span></a></li>\n\
      <li><a href=\"#!/url=./cpp_ref/classes.html\"><span>Class&#160;Index</span></a></li>\n\
      <li><a href=\"#!/url=./cpp_ref/hierarchy.html\"><span>Class&#160;Hierarchy</span></a></li>\n\
      <li><a href=\"#!/url=./cpp_ref/functions.html\"><span>Class&#160;Members</span></a></li>\n\
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
  \n\
  <div class=\"headertitle\">\n\
<div class=\"title\">MSpace Class Reference</div>  </div>\n\
<div id=\"OverviewLinksDiv\"><div id=\"dynsection-overview\" onclick=\"return toggleVisibility(this)\" class=\"dynheader closed\" style=\"cursor:pointer;\"><img id=\"dynsection-overview-trigger\" src=\"cpp_ref/closed.png\" alt=\"+\"> Related help topics: </div><div id=\"dynsection-overview-content\" class=\"dyncontent\" style=\"display:none;\"><ul class=\"overviewLinks\">\n\
<li class=\"overviewLink\"><a href=\"#!/url=./files/GUID-C122F8DA-431C-4094-BA54-60B80495A734.htm\">What\'s New / What\'s Changed? &gt; What\'s New in Maya API in 2018</a></li>\n\
<li class=\"overviewLink\"><a href=\"#!/url=./files/DAG_Hierarchy_DAG_walking_example.htm\">DAG Hierarchy &gt; DAG walking example</a></li>\n\
<li class=\"overviewLink\"><a href=\"#!/url=./files/GUID-87D67E23-B8DB-4204-9B4B-2519C0A28669.htm\">Dependency graph plug-ins &gt; Evaluation using current context</a></li>\n\
<li class=\"overviewLink\"><a href=\"#!/url=./files/GUID-A88F1AEC-3B1F-45DC-91C1-61CCF5A7F51A.htm\">Evaluation using current context</a></li>\n\
<li class=\"overviewLink\"><a href=\"#!/url=./files/Writing_a_Custom_Transform_Node_Example_custom_transform.htm\">Writing a Custom Transform Node &gt; Example custom transform</a></li>\n\
<li class=\"overviewLink\"><a href=\"#!/url=./files/GUID-3824AD22-F46C-4806-9884-2C6292468762.htm\">Viewport 2.0 API &gt; Maya Viewport 2.0 API Guide &gt; Advanced Topics &gt; Camera information in relation to DirectX and OpenGL draw APIs</a></li>\n\
<li class=\"overviewLink\"><a href=\"#!/url=./files/Polygon_API_The_five_basic_polygonal_API_classes.htm\">Polygon API &gt; The five basic polygonal API classes</a></li>\n\
</ul></div></div>\n\
<div class=\"summary\">\n\
<a href=\"class_m_space.html#pub-types\">Public Types</a>  </div></div><!--header-->\n\
<div class=\"contents\">\n\
\n\
<p><code>#include &lt;MTypes.h&gt;</code></p>\n\
<a name=\"details\" id=\"details\"></a><h2 class=\"groupheader\">Class Description</h2>\n\
<div class=\"textblock\"><p>Space transformation identifiers. </p>\n\
<p><a class=\"el\" translate=\"no\" href=\"#!/url=./cpp_ref/class_m_space.html\" title=\"Space transformation identifiers. \">MSpace</a> encompasses all of the types of transformation possible. The <a class=\"el\" translate=\"no\" href=\"#!/url=./cpp_ref/class_m_space.html\" title=\"Space transformation identifiers. \">MSpace</a> identifiers are used to determine the space in which the user is applying or querying transformation or component (i.e. vertex positions) data of a Maya object.</p>\n\
<p>Note that not all the <a class=\"el\" translate=\"no\" href=\"#!/url=./cpp_ref/class_m_space.html\" title=\"Space transformation identifiers. \">MSpace</a> types can be passed into all methods which take an <a class=\"el\" translate=\"no\" href=\"#!/url=./cpp_ref/class_m_space.html\" title=\"Space transformation identifiers. \">MSpace</a> as a parameter. The <a class=\"el\" translate=\"no\" href=\"#!/url=./cpp_ref/class_m_space.html\" title=\"Space transformation identifiers. \">MSpace</a> enumerated type can be split into two parts, types which can be passed into <a class=\"el\" translate=\"no\" href=\"#!/url=./cpp_ref/class_m_fn_transform.html\" title=\"Create and access transform nodes. \">MFnTransform</a> and <a class=\"el\" translate=\"no\" href=\"#!/url=./cpp_ref/class_m_transformation_matrix.html\" title=\"Transformation matrix. \">MTransformationMatrix</a> classes (kTransform, kPreTransform and kPostTransform) and types which can be passed into shape classes such as <a class=\"el\" translate=\"no\" href=\"#!/url=./cpp_ref/class_m_fn_mesh.html\" title=\"Polygonal surface function set. \">MFnMesh</a>, <a class=\"el\" translate=\"no\" href=\"#!/url=./cpp_ref/class_m_fn_nurbs_surface.html\" title=\"NURBS surface function set. \">MFnNurbsSurface</a> and <a class=\"el\" translate=\"no\" href=\"#!/url=./cpp_ref/class_m_fn_camera.html\" title=\"Function set for cameras. \">MFnCamera</a> (kWorld and kObject).</p>\n\
<p>The following is a description of each of the <a class=\"el\" translate=\"no\" href=\"#!/url=./cpp_ref/class_m_space.html\" title=\"Space transformation identifiers. \">MSpace</a> types.</p>\n\
<dl>\n\
<dt><b>kInvalid</b> </dt>\n\
<dd><p class=\"startdd\">There are currently no methods in the API that return a result of type <a class=\"el\" translate=\"no\" href=\"#!/url=./cpp_ref/class_m_space.html\" title=\"Space transformation identifiers. \">MSpace</a>. This may be used for user defined methods that return a result of type <a class=\"el\" translate=\"no\" href=\"#!/url=./cpp_ref/class_m_space.html\" title=\"Space transformation identifiers. \">MSpace</a> to signify an invalid result.</p>\n\
<p class=\"enddd\">\n\
</dd>\n\
<dt><b>kTransform</b> </dt>\n\
<dd><p class=\"startdd\">The data applied or queried using the kTransform type represents a transform\'s local (or relative) coordinates system. This type is valid for methods of <a class=\"el\" translate=\"no\" href=\"#!/url=./cpp_ref/class_m_fn_transform.html\" title=\"Create and access transform nodes. \">MFnTransform</a> and <a class=\"el\" translate=\"no\" href=\"#!/url=./cpp_ref/class_m_transformation_matrix.html\" title=\"Transformation matrix. \">MTransformationMatrix</a> classes.</p>\n\
<p class=\"enddd\">\n\
</dd>\n\
<dt><b>kPreTransform</b> </dt>\n\
<dd><p class=\"startdd\">The data applied or queried using the kPreTransform type represents pre-transformed matrix data. Given a matrix which has had other matrix operations applied to it, this type is used to obtain a matrix that does not taken into consideration any other matrix operations. This type is valid for methods of the <a class=\"el\" translate=\"no\" href=\"#!/url=./cpp_ref/class_m_transformation_matrix.html\" title=\"Transformation matrix. \">MTransformationMatrix</a> classes.</p>\n\
<p class=\"enddd\">\n\
</dd>\n\
<dt><b>kPostTransform</b> </dt>\n\
<dd><p class=\"startdd\">The data applied or queried using the kPostTransform type represents post-transformed matrix data. Given a matrix which has had other matrix operations applied to it, this type is used to obtain a matrix that has taken into consideration all other matrix operations. This type is valid for methods of the <a class=\"el\" translate=\"no\" href=\"#!/url=./cpp_ref/class_m_transformation_matrix.html\" title=\"Transformation matrix. \">MTransformationMatrix</a> classes.</p>\n\
<p class=\"enddd\">\n\
</dd>\n\
<dt><b>kWorld</b> </dt>\n\
<dd><p class=\"startdd\">The data applied or queried using the kWorld type represents the data for the objects world coordinates system. The results of this type will take into consideration all the transforms in the objects hierarchy. This type can be used with shape classes such as <a class=\"el\" translate=\"no\" href=\"#!/url=./cpp_ref/class_m_fn_mesh.html\" title=\"Polygonal surface function set. \">MFnMesh</a>, <a class=\"el\" translate=\"no\" href=\"#!/url=./cpp_ref/class_m_fn_nurbs_surface.html\" title=\"NURBS surface function set. \">MFnNurbsSurface</a> and <a class=\"el\" translate=\"no\" href=\"#!/url=./cpp_ref/class_m_fn_camera.html\" title=\"Function set for cameras. \">MFnCamera</a> and the <a class=\"el\" translate=\"no\" href=\"#!/url=./cpp_ref/class_m_fn_transform.html\" title=\"Create and access transform nodes. \">MFnTransform</a> class. Note that to get the proper world space transformation data with <a class=\"el\" translate=\"no\" href=\"#!/url=./cpp_ref/class_m_space.html#ab11a1dda34491acff014ddfc9e6bafb8a45a60f04ac9114f0d6e865a6285f40b2\" title=\"transform in world space. \">MSpace::kWorld</a> you <b>MUST</b> use the class constructor which initializes the function set with an <a class=\"el\" translate=\"no\" href=\"#!/url=./cpp_ref/class_m_dag_path.html\" title=\"DAG Path. \">MDagPath</a> object.</p>\n\
<p class=\"enddd\">\n\
</dd>\n\
<dt><b>kObject</b> </dt>\n\
<dd><p class=\"startdd\">The data applied or queried using the kObject type represents the data for the objects local coordinates system. The results of this type will be in the local space of the object (object space). This enum can only be used with shape classes such as <a class=\"el\" translate=\"no\" href=\"#!/url=./cpp_ref/class_m_fn_mesh.html\" title=\"Polygonal surface function set. \">MFnMesh</a>, <a class=\"el\" translate=\"no\" href=\"#!/url=./cpp_ref/class_m_fn_nurbs_surface.html\" title=\"NURBS surface function set. \">MFnNurbsSurface</a> and <a class=\"el\" translate=\"no\" href=\"#!/url=./cpp_ref/class_m_fn_camera.html\" title=\"Function set for cameras. \">MFnCamera</a>.</p>\n\
<p class=\"enddd\">\n\
</dd>\n\
<dt><b>kLast</b> </dt>\n\
<dd><p class=\"startdd\">This simply signifies the end of the <a class=\"el\" translate=\"no\" href=\"#!/url=./cpp_ref/class_m_space.html\" title=\"Space transformation identifiers. \">MSpace</a> enumerated types. All values that precede this value represent a coordinate system (with the exception of kInvalid which represents an invalid result.)</p>\n\
<p class=\"enddd\">\n\
</dd>\n\
</dl>\n\
<dl class=\"section user\"><dt>Comparative Description:</dt><dd></dd></dl>\n\
<p>There are four spaces in which to apply a transformation.</p>\n\
<ul>\n\
<li>\n\
World Space - This is the space that an object is in after it has had all of its transformations applied to it. A world space transformation is the the very last transformation that would be applied to the object. </li>\n\
<li>\n\
Object Space - This is the space in which an object is defined. An object space transformation would be the first transformation that would be applied to an object. This is the same as pre-transform space. </li>\n\
<li>\n\
Post Transform Space - This is the space in which the object lives after having the transformations of its transform node applied. For example, when a primitive object is created in Maya, there is a shape node which defined the geometry and a transform node which positions/orients the geometry. The space that the geometry is in is object space. After applying the transformations of the transform node to the geometry, the transformed geometry is in post transform space. </li>\n\
<li>\n\
<p class=\"startli\">Transform Space - This space depends on the type of transformation being applied. Transform nodes define a fixed sequence of affine transformations. Basically, there is scale followed by rotation and finally translation. There are four spaces here:</p>\n\
<p>1) The space before applying the scale.<br>\n\
 2) The space after the scale but before the rotation.<br>\n\
 3) The space between the rotation and translation.<br>\n\
 4) The space after the translation.<br>\n\
 Space 1) is pre-transform space.<br>\n\
 Space 4) is post-transform space.<br>\n\
 Spaces 2) and 3) define transform spaces.<br>\n\
</p>\n\
<p class=\"endli\">If applying a transform space scale, this transform will be applied after the current scale but before the rotation (space 2). If applying a transform space rotation, this transform will be applied after the current rotation but before the translation. Applying a translation in transform space, the translation will be applied after the current translation. </p>\n\
</li>\n\
</ul>\n\
<dl class=\"section \"><div id=\"dynsection-example0\" class=\"dynheader closed\" onclick=\"return toggleVisibility(this)\" style=\"cursor:pointer;\"><dt><img id=\"dynsection-example0-trigger\" src=\"cpp_ref/closed.png\" alt=\"+\"> <b>Examples: </b></dt></div><div id=\"dynsection-example0-content\" class=\"dyncontent\" style=\"display:none;\"><dd><a class=\"el\" translate=\"no\" href=\"#!/url=./cpp_ref/api_mesh_shape_2api_mesh_creator_8cpp-example.html#_a25\">apiMeshShape/apiMeshCreator.cpp</a>.</dd></div>\n\
</dl></div><table class=\"memberdecls\">\n\
<tr class=\"heading\"><td colspan=\"2\"><h2 class=\"groupheader\"><a name=\"pub-types\"></a>\n\
Public Types</h2></td></tr>\n\
<tr class=\"memitem:ab11a1dda34491acff014ddfc9e6bafb8\"><td class=\"memItemLeft\" translate=\"no\" align=\"right\" valign=\"top\">enum &#160;</td><td class=\"memItemRight\" translate=\"no\" valign=\"bottom\"><a class=\"el\" translate=\"no\" href=\"#!/url=./cpp_ref/class_m_space.html#ab11a1dda34491acff014ddfc9e6bafb8\">Space</a> { <br>\n\
&#160;&#160;<a class=\"el\" translate=\"no\" href=\"#!/url=./cpp_ref/class_m_space.html#ab11a1dda34491acff014ddfc9e6bafb8a94dd08feda7b2cf0ff8262312c4fcc09\">kInvalid</a> = 0, \n\
<a class=\"el\" translate=\"no\" href=\"#!/url=./cpp_ref/class_m_space.html#ab11a1dda34491acff014ddfc9e6bafb8adafa274206df602835f0f22ae887e126\">kTransform</a> = 1, \n\
<a class=\"el\" translate=\"no\" href=\"#!/url=./cpp_ref/class_m_space.html#ab11a1dda34491acff014ddfc9e6bafb8afbe61c6bfc6e41f61ce5151adb33aa90\">kPreTransform</a> = 2, \n\
<a class=\"el\" translate=\"no\" href=\"#!/url=./cpp_ref/class_m_space.html#ab11a1dda34491acff014ddfc9e6bafb8aa8283f05e25167dc028384785199709a\">kPostTransform</a> = 3, \n\
<br>\n\
&#160;&#160;<a class=\"el\" translate=\"no\" href=\"#!/url=./cpp_ref/class_m_space.html#ab11a1dda34491acff014ddfc9e6bafb8a45a60f04ac9114f0d6e865a6285f40b2\">kWorld</a> = 4, \n\
<a class=\"el\" translate=\"no\" href=\"#!/url=./cpp_ref/class_m_space.html#ab11a1dda34491acff014ddfc9e6bafb8ad74f4c7c6562dc3f8339a8bba2d28dd0\">kObject</a> = kPreTransform, \n\
<a class=\"el\" translate=\"no\" href=\"#!/url=./cpp_ref/class_m_space.html#ab11a1dda34491acff014ddfc9e6bafb8ab737c21fdaade350afbb3859062a69a5\">kLast</a> = 5\n\
<br>\n\
 }<tr class=\"memdesc:ab11a1dda34491acff014ddfc9e6bafb8\"><td class=\"mdescLeft\">&#160;</td><td class=\"mdescRight\">Transformation spaces.  <a href=\"#!/url=./cpp_ref/class_m_space.html#ab11a1dda34491acff014ddfc9e6bafb8\">More...</a><br></td></tr>\n\
<tr class=\"separator:ab11a1dda34491acff014ddfc9e6bafb8\"><td class=\"memSeparator\" colspan=\"2\">&#160;</td></tr>\n\
</td></tr>\n\
</table>\n\
<h2 class=\"groupheader\">Member Enumeration Documentation</h2>\n\
<a class=\"anchor\" id=\"ab11a1dda34491acff014ddfc9e6bafb8\"></a>\n\
<div class=\"memitem\">\n\
<div class=\"memproto\">\n\
      <table class=\"memname\">\n\
        <tr>\n\
          <td class=\"memname\" translate=\"no\">enum <a class=\"el\" translate=\"no\" href=\"#!/url=./cpp_ref/class_m_space.html#ab11a1dda34491acff014ddfc9e6bafb8\">Space</a></td>\n\
        </tr>\n\
      </table>\n\
</div><div class=\"memdoc\">\n\
\n\
<p>Transformation spaces. </p>\n\
<table class=\"fieldtable\">\n\
<tr><th colspan=\"2\">Enumerator</th></tr><tr><td class=\"fieldname\"><a class=\"anchor\" id=\"ab11a1dda34491acff014ddfc9e6bafb8a94dd08feda7b2cf0ff8262312c4fcc09\"></a>kInvalid&#160;</td><td class=\"fielddoc\">\n\
<p>Invalid value. </p>\n\
</td></tr>\n\
<tr><td class=\"fieldname\"><a class=\"anchor\" id=\"ab11a1dda34491acff014ddfc9e6bafb8adafa274206df602835f0f22ae887e126\"></a>kTransform&#160;</td><td class=\"fielddoc\">\n\
<p>Transform matrix (relative) space. </p>\n\
</td></tr>\n\
<tr><td class=\"fieldname\"><a class=\"anchor\" id=\"ab11a1dda34491acff014ddfc9e6bafb8afbe61c6bfc6e41f61ce5151adb33aa90\"></a>kPreTransform&#160;</td><td class=\"fielddoc\">\n\
<p>Pre-transform matrix (geometry). </p>\n\
</td></tr>\n\
<tr><td class=\"fieldname\"><a class=\"anchor\" id=\"ab11a1dda34491acff014ddfc9e6bafb8aa8283f05e25167dc028384785199709a\"></a>kPostTransform&#160;</td><td class=\"fielddoc\">\n\
<p>Post-transform matrix (world) space. </p>\n\
</td></tr>\n\
<tr><td class=\"fieldname\"><a class=\"anchor\" id=\"ab11a1dda34491acff014ddfc9e6bafb8a45a60f04ac9114f0d6e865a6285f40b2\"></a>kWorld&#160;</td><td class=\"fielddoc\">\n\
<p>transform in world space. </p>\n\
</td></tr>\n\
<tr><td class=\"fieldname\"><a class=\"anchor\" id=\"ab11a1dda34491acff014ddfc9e6bafb8ad74f4c7c6562dc3f8339a8bba2d28dd0\"></a>kObject&#160;</td><td class=\"fielddoc\">\n\
<p>Same as pre-transform space. </p>\n\
</td></tr>\n\
<tr><td class=\"fieldname\"><a class=\"anchor\" id=\"ab11a1dda34491acff014ddfc9e6bafb8ab737c21fdaade350afbb3859062a69a5\"></a>kLast&#160;</td><td class=\"fielddoc\">\n\
<p>Last value, used for counting. </p>\n\
</td></tr>\n\
</table>\n\
\n\
</div>\n\
</div>\n\
<hr>The documentation for this class was generated from the following file:<ul>\n\
<li>MTypes.h</li>\n\
</ul>\n\
</div><!-- contents -->\n\
</div><!-- doc-content -->\n\
          <div class=\"footer-block\"><a href=\"../html/ac.cmtdialog.htm\" class=\"comments-anchor\" target=\"_blank\"><span class=\"comments-link\">Please send us your comment about this page</span></a></div></div>\n\
   </div></body>\n\
</html>\n\
";