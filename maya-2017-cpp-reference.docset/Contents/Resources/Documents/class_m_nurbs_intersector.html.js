var topic = "<!-- saved from url=(0024)http://docs.autodesk.com -->\n\
<html>\n\
   <head><script src=\"../scripts/yepnope.1.5.4-min.js\" type=\"text/javascript\"></script><script src=\"../scripts/lib/jquery-1.11.1.min.js\" type=\"text/javascript\"></script><meta http-equiv=\"Content-Type\" content=\"text/html; charset=UTF-8\"><meta name=\"product\" content=\"MAYAUL\"><meta name=\"release\" content=\"2017\"><meta name=\"book\" content=\"Developer\"><meta name=\"created\" content=\"2016-06-16\"><meta name=\"topicid\" content=\"GUID-02DEF634-1E7B-48C6-8ACD-2C934CA97887\"><meta name=\"topic-type\" content=\"concept\">\n\
      <title>MNurbsIntersector Class Reference</title>\n\
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
    cpp_ref_adsk_ref_toc.initNavTree(\'class_m_nurbs_intersector.html\', tocPrefix);\n\
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
            <h1>MNurbsIntersector Class Reference</h1>\n\
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
<div class=\"title\">MNurbsIntersector Class Reference<div class=\"ingroups\"><a class=\"el\" translate=\"no\" href=\"#!/url=./cpp_ref/group___open_maya.html\">OpenMaya - API module for common classes</a></div></div>  </div>\n\
<div class=\"summary\">\n\
<a href=\"class_m_nurbs_intersector.html#pub-methods\">Public Member Functions</a> &#124;\n\
<a href=\"class_m_nurbs_intersector.html#pub-static-methods\">Static Public Member Functions</a>  </div></div><!--header-->\n\
<div class=\"contents\">\n\
\n\
<p><code>#include &lt;MNurbsIntersector.h&gt;</code></p>\n\
<a name=\"details\" id=\"details\"></a><h2 class=\"groupheader\">Class Description</h2>\n\
<div class=\"textblock\"><p>Nurbs intersector. </p>\n\
<p>The <a class=\"el\" translate=\"no\" href=\"#!/url=./cpp_ref/class_m_nurbs_intersector.html\" title=\"Nurbs intersector. \">MNurbsIntersector</a> class contains methods for efficiently finding the closest point to a NURBS surface. A tree-based algorithm is used to find the closest point.</p>\n\
<p>The <a class=\"el\" translate=\"no\" href=\"#!/url=./cpp_ref/class_m_nurbs_intersector.html#ab2282fca7c906658df21fddb46f8227c\" title=\"This method creates the data required by the intersector. \">create()</a> method builds the internal data required for the algorithm. As a result, calls to it should be minimized as it is a heavy operation. If the NURBS surface or matrix changes, you will need to recreate the tree based data to correspond, again using the <a class=\"el\" translate=\"no\" href=\"#!/url=./cpp_ref/class_m_nurbs_intersector.html#ab2282fca7c906658df21fddb46f8227c\" title=\"This method creates the data required by the intersector. \">create()</a> method.</p>\n\
<p>This class is not threadsafe. </p>\n\
<dl class=\"section \"><div id=\"dynsection-example0\" class=\"dynheader closed\" onclick=\"return toggleVisibility(this)\" style=\"cursor:pointer;\"><dt><img id=\"dynsection-example0-trigger\" src=\"cpp_ref/closed.png\" alt=\"+\"> <b>Examples: </b></dt></div><div id=\"dynsection-example0-content\" class=\"dyncontent\" style=\"display:none;\"><dd><a class=\"el\" translate=\"no\" href=\"#!/url=./cpp_ref/closest_point_on_nurbs_surface_cmd_2closest_point_on_nurbs_surface_cmd_8cpp-example.html#_a17\">closestPointOnNurbsSurfaceCmd/closestPointOnNurbsSurfaceCmd.cpp</a>, and <a class=\"el\" translate=\"no\" href=\"#!/url=./cpp_ref/intersect_on_nurbs_surface_cmd_2intersect_on_nurbs_surface_cmd_8cpp-example.html#_a17\">intersectOnNurbsSurfaceCmd/intersectOnNurbsSurfaceCmd.cpp</a>.</dd></div>\n\
</dl></div><table class=\"memberdecls\">\n\
<tr class=\"heading\"><td colspan=\"2\"><h2 class=\"groupheader\"><a name=\"pub-methods\"></a>\n\
Public Member Functions</h2></td></tr>\n\
<tr class=\"memitem:afa118b12bbdf5beaba2aa2818e0f352d\"><td class=\"memItemLeft\" translate=\"no\" align=\"right\" valign=\"top\"><a class=\"anchor\" id=\"afa118b12bbdf5beaba2aa2818e0f352d\"></a>\n\
&#160;</td><td class=\"memItemRight\" translate=\"no\" valign=\"bottom\"><a class=\"el\" translate=\"no\" href=\"#!/url=./cpp_ref/class_m_nurbs_intersector.html#afa118b12bbdf5beaba2aa2818e0f352d\">MNurbsIntersector</a> (void)</td></tr>\n\
<tr class=\"memdesc:afa118b12bbdf5beaba2aa2818e0f352d\"><td class=\"mdescLeft\">&#160;</td><td class=\"mdescRight\">Constructor. <br></td></tr>\n\
<tr class=\"separator:afa118b12bbdf5beaba2aa2818e0f352d\"><td class=\"memSeparator\" colspan=\"2\">&#160;</td></tr>\n\
<tr class=\"memitem:a945b6cb8c1000aec99e61084cad06162\"><td class=\"memItemLeft\" translate=\"no\" align=\"right\" valign=\"top\"><a class=\"anchor\" id=\"a945b6cb8c1000aec99e61084cad06162\"></a>\n\
virtual&#160;</td><td class=\"memItemRight\" translate=\"no\" valign=\"bottom\"><a class=\"el\" translate=\"no\" href=\"#!/url=./cpp_ref/class_m_nurbs_intersector.html#a945b6cb8c1000aec99e61084cad06162\">~MNurbsIntersector</a> (void)</td></tr>\n\
<tr class=\"memdesc:a945b6cb8c1000aec99e61084cad06162\"><td class=\"mdescLeft\">&#160;</td><td class=\"mdescRight\">Destructor. <br></td></tr>\n\
<tr class=\"separator:a945b6cb8c1000aec99e61084cad06162\"><td class=\"memSeparator\" colspan=\"2\">&#160;</td></tr>\n\
<tr class=\"memitem:ab2282fca7c906658df21fddb46f8227c\"><td class=\"memItemLeft\" translate=\"no\" align=\"right\" valign=\"top\"><a class=\"el\" translate=\"no\" href=\"#!/url=./cpp_ref/class_m_status.html\">MStatus</a>&#160;</td><td class=\"memItemRight\" translate=\"no\" valign=\"bottom\"><a class=\"el\" translate=\"no\" href=\"#!/url=./cpp_ref/class_m_nurbs_intersector.html#ab2282fca7c906658df21fddb46f8227c\">create</a> (<a class=\"el\" translate=\"no\" href=\"#!/url=./cpp_ref/class_m_object.html\">MObject</a> &amp;nurbsObject, const <a class=\"el\" translate=\"no\" href=\"#!/url=./cpp_ref/class_m_matrix.html\">MMatrix</a> &amp;matrix=<a class=\"el\" translate=\"no\" href=\"#!/url=./cpp_ref/class_m_matrix.html#a85de986c9f953535d185c6780cecb77e\">MMatrix::identity</a>)</td></tr>\n\
<tr class=\"memdesc:ab2282fca7c906658df21fddb46f8227c\"><td class=\"mdescLeft\">&#160;</td><td class=\"mdescRight\">This method creates the data required by the intersector.  <a href=\"class_m_nurbs_intersector.html#ab2282fca7c906658df21fddb46f8227c\">More...</a><br></td></tr>\n\
<tr class=\"separator:ab2282fca7c906658df21fddb46f8227c\"><td class=\"memSeparator\" colspan=\"2\">&#160;</td></tr>\n\
<tr class=\"memitem:abaa7c3054b7ffbd3495e9082769fa4e1\"><td class=\"memItemLeft\" translate=\"no\" align=\"right\" valign=\"top\">bool&#160;</td><td class=\"memItemRight\" translate=\"no\" valign=\"bottom\"><a class=\"el\" translate=\"no\" href=\"#!/url=./cpp_ref/class_m_nurbs_intersector.html#abaa7c3054b7ffbd3495e9082769fa4e1\">isCreated</a> (void) const </td></tr>\n\
<tr class=\"memdesc:abaa7c3054b7ffbd3495e9082769fa4e1\"><td class=\"mdescLeft\">&#160;</td><td class=\"mdescRight\">This method returns true if the intersector is created.  <a href=\"class_m_nurbs_intersector.html#abaa7c3054b7ffbd3495e9082769fa4e1\">More...</a><br></td></tr>\n\
<tr class=\"separator:abaa7c3054b7ffbd3495e9082769fa4e1\"><td class=\"memSeparator\" colspan=\"2\">&#160;</td></tr>\n\
<tr class=\"memitem:a7f9ea2c9e2f92cc1ae80eca94ef9d5d9\"><td class=\"memItemLeft\" translate=\"no\" align=\"right\" valign=\"top\"><a class=\"el\" translate=\"no\" href=\"#!/url=./cpp_ref/class_m_status.html\">MStatus</a>&#160;</td><td class=\"memItemRight\" translate=\"no\" valign=\"bottom\"><a class=\"el\" translate=\"no\" href=\"#!/url=./cpp_ref/class_m_nurbs_intersector.html#a7f9ea2c9e2f92cc1ae80eca94ef9d5d9\">getClosestPoint</a> (const <a class=\"el\" translate=\"no\" href=\"#!/url=./cpp_ref/class_m_point.html\">MPoint</a> &amp;point, MPointOnNurbs &amp;nurbsPoint, double maxDistance=DBL_MAX) const </td></tr>\n\
<tr class=\"memdesc:a7f9ea2c9e2f92cc1ae80eca94ef9d5d9\"><td class=\"mdescLeft\">&#160;</td><td class=\"mdescRight\">This method finds the closest point.  <a href=\"class_m_nurbs_intersector.html#a7f9ea2c9e2f92cc1ae80eca94ef9d5d9\">More...</a><br></td></tr>\n\
<tr class=\"separator:a7f9ea2c9e2f92cc1ae80eca94ef9d5d9\"><td class=\"memSeparator\" colspan=\"2\">&#160;</td></tr>\n\
<tr class=\"memitem:a227ff041d1063471ffe121871231ee5b\"><td class=\"memItemLeft\" translate=\"no\" align=\"right\" valign=\"top\"><a class=\"el\" translate=\"no\" href=\"#!/url=./cpp_ref/class_m_status.html\">MStatus</a>&#160;</td><td class=\"memItemRight\" translate=\"no\" valign=\"bottom\"><a class=\"el\" translate=\"no\" href=\"#!/url=./cpp_ref/class_m_nurbs_intersector.html#a227ff041d1063471ffe121871231ee5b\">getIntersects</a> (const <a class=\"el\" translate=\"no\" href=\"#!/url=./cpp_ref/class_m_point.html\">MPoint</a> &amp;rayStartingPoint, const <a class=\"el\" translate=\"no\" href=\"#!/url=./cpp_ref/class_m_vector.html\">MVector</a> &amp;alongThisDirection, <a class=\"el\" translate=\"no\" href=\"#!/url=./cpp_ref/class_m_double_array.html\">MDoubleArray</a> &amp;uArray, <a class=\"el\" translate=\"no\" href=\"#!/url=./cpp_ref/class_m_double_array.html\">MDoubleArray</a> &amp;vArray, <a class=\"el\" translate=\"no\" href=\"#!/url=./cpp_ref/class_m_point_array.html\">MPointArray</a> &amp;points, double tolerance) const </td></tr>\n\
<tr class=\"memdesc:a227ff041d1063471ffe121871231ee5b\"><td class=\"mdescLeft\">&#160;</td><td class=\"mdescRight\">This method finds all the points of intersection of the NURBS surface with a ray (a vector at a point).  <a href=\"class_m_nurbs_intersector.html#a227ff041d1063471ffe121871231ee5b\">More...</a><br></td></tr>\n\
<tr class=\"separator:a227ff041d1063471ffe121871231ee5b\"><td class=\"memSeparator\" colspan=\"2\">&#160;</td></tr>\n\
<tr class=\"memitem:a55cad560ace6d38618ffaa64d9aad4c7\"><td class=\"memItemLeft\" translate=\"no\" align=\"right\" valign=\"top\"><a class=\"el\" translate=\"no\" href=\"#!/url=./cpp_ref/class_m_status.html\">MStatus</a>&#160;</td><td class=\"memItemRight\" translate=\"no\" valign=\"bottom\"><a class=\"el\" translate=\"no\" href=\"#!/url=./cpp_ref/class_m_nurbs_intersector.html#a55cad560ace6d38618ffaa64d9aad4c7\">getIntersect</a> (const <a class=\"el\" translate=\"no\" href=\"#!/url=./cpp_ref/class_m_point.html\">MPoint</a> &amp;rayStartingPoint, const <a class=\"el\" translate=\"no\" href=\"#!/url=./cpp_ref/class_m_vector.html\">MVector</a> &amp;alongThisDirection, double &amp;u, double &amp;v, <a class=\"el\" translate=\"no\" href=\"#!/url=./cpp_ref/class_m_point.html\">MPoint</a> &amp;pntOfIntersection, double tolerance) const </td></tr>\n\
<tr class=\"memdesc:a55cad560ace6d38618ffaa64d9aad4c7\"><td class=\"mdescLeft\">&#160;</td><td class=\"mdescRight\">This method finds the first point of intersection of the NURBS surface with a ray (a vector at a point).  <a href=\"class_m_nurbs_intersector.html#a55cad560ace6d38618ffaa64d9aad4c7\">More...</a><br></td></tr>\n\
<tr class=\"separator:a55cad560ace6d38618ffaa64d9aad4c7\"><td class=\"memSeparator\" colspan=\"2\">&#160;</td></tr>\n\
</table><table class=\"memberdecls\">\n\
<tr class=\"heading\"><td colspan=\"2\"><h2 class=\"groupheader\"><a name=\"pub-static-methods\"></a>\n\
Static Public Member Functions</h2></td></tr>\n\
<tr class=\"memitem:a774cd5d8fbebe8e7ed82a5aa587d1f04\"><td class=\"memItemLeft\" translate=\"no\" align=\"right\" valign=\"top\">static const char *&#160;</td><td class=\"memItemRight\" translate=\"no\" valign=\"bottom\"><a class=\"el\" translate=\"no\" href=\"#!/url=./cpp_ref/class_m_nurbs_intersector.html#a774cd5d8fbebe8e7ed82a5aa587d1f04\">className</a> ()</td></tr>\n\
<tr class=\"memdesc:a774cd5d8fbebe8e7ed82a5aa587d1f04\"><td class=\"mdescLeft\">&#160;</td><td class=\"mdescRight\">Returns the name of this class.  <a href=\"class_m_nurbs_intersector.html#a774cd5d8fbebe8e7ed82a5aa587d1f04\">More...</a><br></td></tr>\n\
<tr class=\"separator:a774cd5d8fbebe8e7ed82a5aa587d1f04\"><td class=\"memSeparator\" colspan=\"2\">&#160;</td></tr>\n\
</table>\n\
<h2 class=\"groupheader\">Member Function Documentation</h2>\n\
<a class=\"anchor\" id=\"ab2282fca7c906658df21fddb46f8227c\"></a>\n\
<div class=\"memitem\">\n\
<div class=\"memproto\">\n\
      <table class=\"memname\">\n\
        <tr>\n\
          <td class=\"memname\" translate=\"no\"><a class=\"el\" translate=\"no\" href=\"#!/url=./cpp_ref/class_m_status.html\">MStatus</a> create </td>\n\
          <td>(</td>\n\
          <td class=\"paramtype\"><a class=\"el\" translate=\"no\" href=\"#!/url=./cpp_ref/class_m_object.html\">MObject</a> &amp;&#160;</td>\n\
          <td class=\"paramname\"><em>nurbsObject</em>, </td>\n\
        </tr>\n\
        <tr>\n\
          <td class=\"paramkey\"></td>\n\
          <td></td>\n\
          <td class=\"paramtype\">const <a class=\"el\" translate=\"no\" href=\"#!/url=./cpp_ref/class_m_matrix.html\">MMatrix</a> &amp;&#160;</td>\n\
          <td class=\"paramname\"><em>matrix</em> = <code><a class=\"el\" translate=\"no\" href=\"#!/url=./cpp_ref/class_m_matrix.html#a85de986c9f953535d185c6780cecb77e\">MMatrix::identity</a></code>&#160;</td>\n\
        </tr>\n\
        <tr>\n\
          <td></td>\n\
          <td>)</td>\n\
          <td></td><td></td>\n\
        </tr>\n\
      </table>\n\
</div><div class=\"memdoc\">\n\
\n\
<p>This method creates the data required by the intersector. </p>\n\
<p>It is a heavy operation that should be called only when necessary, such as when the underlying NURBS surface or the matrix changes.</p>\n\
<dl class=\"params\"><dt>Parameters</dt><dd>\n\
  <table class=\"params\">\n\
    <tr><td class=\"paramdir\">[in]</td><td class=\"paramname\">nurbsObject</td><td>a NURBS surface object . </td></tr>\n\
    <tr><td class=\"paramdir\">[in]</td><td class=\"paramname\">matrix</td><td>specify the mapping to apply for transforming points that are specified in the getClosestPoint method into the object space of the NURBS surface.</td></tr>\n\
  </table>\n\
  </dd>\n\
</dl>\n\
<dl class=\"section return\"><dt>Returns</dt><dd>Status code</dd></dl>\n\
<dl class=\"section user\"><dt>Status Codes:</dt><dd><ul>\n\
<li><b><a class=\"el\" translate=\"no\" href=\"#!/url=./cpp_ref/class_m_status.html#a02ab596f4febca68da503aaf8dde3a80af0536797208144380691e2b376ffc1d1\" title=\"The operation was successful. \">MS::kSuccess</a></b> The NURBS intersector was created . </li>\n\
<li><b><a class=\"el\" translate=\"no\" href=\"#!/url=./cpp_ref/class_m_status.html#a02ab596f4febca68da503aaf8dde3a80af8c5f748892ec74b32719c8fba7767e1\" title=\"An invalid parameter was provided. \">MS::kInvalidParameter</a></b> Object is not a kNurbsSurface, a kNurbsSurfaceData or a kNurbsSurfaceGeom. </li>\n\
<li><b><a class=\"el\" translate=\"no\" href=\"#!/url=./cpp_ref/class_m_status.html#a02ab596f4febca68da503aaf8dde3a80a1ef6c2d725fb4bec3e7e840d28adbc00\" title=\"The operation failed. \">MS::kFailure</a></b> Other internal failure . </li>\n\
</ul>\n\
</dd></dl>\n\
<dl class=\"section \"><div id=\"dynsection-example1\" class=\"dynheader closed\" onclick=\"return toggleVisibility(this)\" style=\"cursor:pointer;\"><dt><img id=\"dynsection-example1-trigger\" src=\"cpp_ref/closed.png\" alt=\"+\"> <b>Examples: </b></dt></div><div id=\"dynsection-example1-content\" class=\"dyncontent\" style=\"display:none;\"><dd><a class=\"el\" translate=\"no\" href=\"#!/url=./cpp_ref/closest_point_on_nurbs_surface_cmd_2closest_point_on_nurbs_surface_cmd_8cpp-example.html#a18\">closestPointOnNurbsSurfaceCmd/closestPointOnNurbsSurfaceCmd.cpp</a>, and <a class=\"el\" translate=\"no\" href=\"#!/url=./cpp_ref/intersect_on_nurbs_surface_cmd_2intersect_on_nurbs_surface_cmd_8cpp-example.html#a18\">intersectOnNurbsSurfaceCmd/intersectOnNurbsSurfaceCmd.cpp</a>.</dd></div>\n\
</dl>\n\
</div>\n\
</div>\n\
<a class=\"anchor\" id=\"abaa7c3054b7ffbd3495e9082769fa4e1\"></a>\n\
<div class=\"memitem\">\n\
<div class=\"memproto\">\n\
      <table class=\"memname\">\n\
        <tr>\n\
          <td class=\"memname\" translate=\"no\">bool isCreated </td>\n\
          <td>(</td>\n\
          <td class=\"paramtype\">void&#160;</td>\n\
          <td class=\"paramname\"></td><td>)</td>\n\
          <td> const</td>\n\
        </tr>\n\
      </table>\n\
</div><div class=\"memdoc\">\n\
\n\
<p>This method returns true if the intersector is created. </p>\n\
<p>False is returned otherwise. </p>\n\
\n\
</div>\n\
</div>\n\
<a class=\"anchor\" id=\"a7f9ea2c9e2f92cc1ae80eca94ef9d5d9\"></a>\n\
<div class=\"memitem\">\n\
<div class=\"memproto\">\n\
      <table class=\"memname\">\n\
        <tr>\n\
          <td class=\"memname\" translate=\"no\"><a class=\"el\" translate=\"no\" href=\"#!/url=./cpp_ref/class_m_status.html\">MStatus</a> getClosestPoint </td>\n\
          <td>(</td>\n\
          <td class=\"paramtype\">const <a class=\"el\" translate=\"no\" href=\"#!/url=./cpp_ref/class_m_point.html\">MPoint</a> &amp;&#160;</td>\n\
          <td class=\"paramname\"><em>point</em>, </td>\n\
        </tr>\n\
        <tr>\n\
          <td class=\"paramkey\"></td>\n\
          <td></td>\n\
          <td class=\"paramtype\">MPointOnNurbs &amp;&#160;</td>\n\
          <td class=\"paramname\"><em>nurbsPoint</em>, </td>\n\
        </tr>\n\
        <tr>\n\
          <td class=\"paramkey\"></td>\n\
          <td></td>\n\
          <td class=\"paramtype\">double&#160;</td>\n\
          <td class=\"paramname\"><em>maxDistance</em> = <code>DBL_MAX</code>&#160;</td>\n\
        </tr>\n\
        <tr>\n\
          <td></td>\n\
          <td>)</td>\n\
          <td></td><td> const</td>\n\
        </tr>\n\
      </table>\n\
</div><div class=\"memdoc\">\n\
\n\
<p>This method finds the closest point. </p>\n\
<p>Information is returned in the nurbsPoint object.</p>\n\
<dl class=\"params\"><dt>Parameters</dt><dd>\n\
  <table class=\"params\">\n\
    <tr><td class=\"paramdir\">[in]</td><td class=\"paramname\">point</td><td>Specifies the location for which to evaluate the closest point on the NURBS surface. `point\' is transformed using the matrix parameter passed to the <a class=\"el\" translate=\"no\" href=\"#!/url=./cpp_ref/class_m_nurbs_intersector.html#ab2282fca7c906658df21fddb46f8227c\" title=\"This method creates the data required by the intersector. \">create()</a> method, so for example if your matrix maps world to object space, then `point\' should be specified in world space. </td></tr>\n\
    <tr><td class=\"paramdir\">[out]</td><td class=\"paramname\">nurbsPoint</td><td>Resulting closest point in object space. </td></tr>\n\
    <tr><td class=\"paramdir\">[in]</td><td class=\"paramname\">maxDistance</td><td>Maximum distance to consider in object space.</td></tr>\n\
  </table>\n\
  </dd>\n\
</dl>\n\
<dl class=\"section return\"><dt>Returns</dt><dd>Status code</dd></dl>\n\
<dl class=\"section user\"><dt>Status Codes:</dt><dd><ul>\n\
<li><b><a class=\"el\" translate=\"no\" href=\"#!/url=./cpp_ref/class_m_status.html#a02ab596f4febca68da503aaf8dde3a80af0536797208144380691e2b376ffc1d1\" title=\"The operation was successful. \">MS::kSuccess</a></b> The NURBS point was found. </li>\n\
<li><b><a class=\"el\" translate=\"no\" href=\"#!/url=./cpp_ref/class_m_status.html#a02ab596f4febca68da503aaf8dde3a80a1ef6c2d725fb4bec3e7e840d28adbc00\" title=\"The operation failed. \">MS::kFailure</a></b> object error, or create hasn\'t been called beforehand. </li>\n\
</ul>\n\
</dd></dl>\n\
<dl class=\"section \"><div id=\"dynsection-example2\" class=\"dynheader closed\" onclick=\"return toggleVisibility(this)\" style=\"cursor:pointer;\"><dt><img id=\"dynsection-example2-trigger\" src=\"cpp_ref/closed.png\" alt=\"+\"> <b>Examples: </b></dt></div><div id=\"dynsection-example2-content\" class=\"dyncontent\" style=\"display:none;\"><dd><a class=\"el\" translate=\"no\" href=\"#!/url=./cpp_ref/closest_point_on_nurbs_surface_cmd_2closest_point_on_nurbs_surface_cmd_8cpp-example.html#a19\">closestPointOnNurbsSurfaceCmd/closestPointOnNurbsSurfaceCmd.cpp</a>.</dd></div>\n\
</dl>\n\
</div>\n\
</div>\n\
<a class=\"anchor\" id=\"a227ff041d1063471ffe121871231ee5b\"></a>\n\
<div class=\"memitem\">\n\
<div class=\"memproto\">\n\
      <table class=\"memname\">\n\
        <tr>\n\
          <td class=\"memname\" translate=\"no\"><a class=\"el\" translate=\"no\" href=\"#!/url=./cpp_ref/class_m_status.html\">MStatus</a> getIntersects </td>\n\
          <td>(</td>\n\
          <td class=\"paramtype\">const <a class=\"el\" translate=\"no\" href=\"#!/url=./cpp_ref/class_m_point.html\">MPoint</a> &amp;&#160;</td>\n\
          <td class=\"paramname\"><em>rayStartingPoint</em>, </td>\n\
        </tr>\n\
        <tr>\n\
          <td class=\"paramkey\"></td>\n\
          <td></td>\n\
          <td class=\"paramtype\">const <a class=\"el\" translate=\"no\" href=\"#!/url=./cpp_ref/class_m_vector.html\">MVector</a> &amp;&#160;</td>\n\
          <td class=\"paramname\"><em>alongThisDirection</em>, </td>\n\
        </tr>\n\
        <tr>\n\
          <td class=\"paramkey\"></td>\n\
          <td></td>\n\
          <td class=\"paramtype\"><a class=\"el\" translate=\"no\" href=\"#!/url=./cpp_ref/class_m_double_array.html\">MDoubleArray</a> &amp;&#160;</td>\n\
          <td class=\"paramname\"><em>uArray</em>, </td>\n\
        </tr>\n\
        <tr>\n\
          <td class=\"paramkey\"></td>\n\
          <td></td>\n\
          <td class=\"paramtype\"><a class=\"el\" translate=\"no\" href=\"#!/url=./cpp_ref/class_m_double_array.html\">MDoubleArray</a> &amp;&#160;</td>\n\
          <td class=\"paramname\"><em>vArray</em>, </td>\n\
        </tr>\n\
        <tr>\n\
          <td class=\"paramkey\"></td>\n\
          <td></td>\n\
          <td class=\"paramtype\"><a class=\"el\" translate=\"no\" href=\"#!/url=./cpp_ref/class_m_point_array.html\">MPointArray</a> &amp;&#160;</td>\n\
          <td class=\"paramname\"><em>points</em>, </td>\n\
        </tr>\n\
        <tr>\n\
          <td class=\"paramkey\"></td>\n\
          <td></td>\n\
          <td class=\"paramtype\">double&#160;</td>\n\
          <td class=\"paramname\"><em>tolerance</em>&#160;</td>\n\
        </tr>\n\
        <tr>\n\
          <td></td>\n\
          <td>)</td>\n\
          <td></td><td> const</td>\n\
        </tr>\n\
      </table>\n\
</div><div class=\"memdoc\">\n\
\n\
<p>This method finds all the points of intersection of the NURBS surface with a ray (a vector at a point). </p>\n\
<p>The points are returned in the points object, and the U and V parameters of the points are returned in the uArray and vArray objects respectively.</p>\n\
<dl class=\"params\"><dt>Parameters</dt><dd>\n\
  <table class=\"params\">\n\
    <tr><td class=\"paramdir\">[in]</td><td class=\"paramname\">rayStartingPoint</td><td>Starting location of ray to test </td></tr>\n\
    <tr><td class=\"paramdir\">[in]</td><td class=\"paramname\">alongThisDirection</td><td>Direction of ray to test </td></tr>\n\
    <tr><td class=\"paramdir\">[in]</td><td class=\"paramname\">uArray</td><td>U parameters of intersection (if any) </td></tr>\n\
    <tr><td class=\"paramdir\">[in]</td><td class=\"paramname\">vArray</td><td>V parameters of intersection (if any) </td></tr>\n\
    <tr><td class=\"paramdir\">[out]</td><td class=\"paramname\">points</td><td>Storage for points of intersection (if any) </td></tr>\n\
    <tr><td class=\"paramdir\">[in]</td><td class=\"paramname\">tolerance</td><td>The epsilon value in the calculation</td></tr>\n\
  </table>\n\
  </dd>\n\
</dl>\n\
<dl class=\"section return\"><dt>Returns</dt><dd>Status code</dd></dl>\n\
<dl class=\"section user\"><dt>Status Codes:</dt><dd><ul>\n\
<li><b><a class=\"el\" translate=\"no\" href=\"#!/url=./cpp_ref/class_m_status.html#a02ab596f4febca68da503aaf8dde3a80af0536797208144380691e2b376ffc1d1\" title=\"The operation was successful. \">MS::kSuccess</a></b> An intersection point has been found </li>\n\
<li><b><a class=\"el\" translate=\"no\" href=\"#!/url=./cpp_ref/class_m_status.html#a02ab596f4febca68da503aaf8dde3a80a1ef6c2d725fb4bec3e7e840d28adbc00\" title=\"The operation failed. \">MS::kFailure</a></b> No intersection points found </li>\n\
</ul>\n\
</dd></dl>\n\
\n\
</div>\n\
</div>\n\
<a class=\"anchor\" id=\"a55cad560ace6d38618ffaa64d9aad4c7\"></a>\n\
<div class=\"memitem\">\n\
<div class=\"memproto\">\n\
      <table class=\"memname\">\n\
        <tr>\n\
          <td class=\"memname\" translate=\"no\"><a class=\"el\" translate=\"no\" href=\"#!/url=./cpp_ref/class_m_status.html\">MStatus</a> getIntersect </td>\n\
          <td>(</td>\n\
          <td class=\"paramtype\">const <a class=\"el\" translate=\"no\" href=\"#!/url=./cpp_ref/class_m_point.html\">MPoint</a> &amp;&#160;</td>\n\
          <td class=\"paramname\"><em>rayStartingPoint</em>, </td>\n\
        </tr>\n\
        <tr>\n\
          <td class=\"paramkey\"></td>\n\
          <td></td>\n\
          <td class=\"paramtype\">const <a class=\"el\" translate=\"no\" href=\"#!/url=./cpp_ref/class_m_vector.html\">MVector</a> &amp;&#160;</td>\n\
          <td class=\"paramname\"><em>alongThisDirection</em>, </td>\n\
        </tr>\n\
        <tr>\n\
          <td class=\"paramkey\"></td>\n\
          <td></td>\n\
          <td class=\"paramtype\">double &amp;&#160;</td>\n\
          <td class=\"paramname\"><em>u</em>, </td>\n\
        </tr>\n\
        <tr>\n\
          <td class=\"paramkey\"></td>\n\
          <td></td>\n\
          <td class=\"paramtype\">double &amp;&#160;</td>\n\
          <td class=\"paramname\"><em>v</em>, </td>\n\
        </tr>\n\
        <tr>\n\
          <td class=\"paramkey\"></td>\n\
          <td></td>\n\
          <td class=\"paramtype\"><a class=\"el\" translate=\"no\" href=\"#!/url=./cpp_ref/class_m_point.html\">MPoint</a> &amp;&#160;</td>\n\
          <td class=\"paramname\"><em>pntOfIntersection</em>, </td>\n\
        </tr>\n\
        <tr>\n\
          <td class=\"paramkey\"></td>\n\
          <td></td>\n\
          <td class=\"paramtype\">double&#160;</td>\n\
          <td class=\"paramname\"><em>tolerance</em>&#160;</td>\n\
        </tr>\n\
        <tr>\n\
          <td></td>\n\
          <td>)</td>\n\
          <td></td><td> const</td>\n\
        </tr>\n\
      </table>\n\
</div><div class=\"memdoc\">\n\
\n\
<p>This method finds the first point of intersection of the NURBS surface with a ray (a vector at a point). </p>\n\
<p>The point is returned in the pntOfIntersection object, and the U and V parameters of the point are returned in the u and v variables respectively.</p>\n\
<dl class=\"params\"><dt>Parameters</dt><dd>\n\
  <table class=\"params\">\n\
    <tr><td class=\"paramdir\">[in]</td><td class=\"paramname\">rayStartingPoint</td><td>Starting location of ray to test </td></tr>\n\
    <tr><td class=\"paramdir\">[in]</td><td class=\"paramname\">alongThisDirection</td><td>Direction of ray to test </td></tr>\n\
    <tr><td class=\"paramdir\">[in]</td><td class=\"paramname\">u</td><td>U parameter of intersection (if any) </td></tr>\n\
    <tr><td class=\"paramdir\">[in]</td><td class=\"paramname\">v</td><td>V parameter of intersection (if any) </td></tr>\n\
    <tr><td class=\"paramdir\">[out]</td><td class=\"paramname\">pntOfIntersection</td><td>Storage for closest point of intersection (if any) </td></tr>\n\
    <tr><td class=\"paramdir\">[in]</td><td class=\"paramname\">tolerance</td><td>The epsilon value in the calculation</td></tr>\n\
  </table>\n\
  </dd>\n\
</dl>\n\
<dl class=\"section return\"><dt>Returns</dt><dd>Status code</dd></dl>\n\
<dl class=\"section user\"><dt>Status Codes:</dt><dd><ul>\n\
<li><b><a class=\"el\" translate=\"no\" href=\"#!/url=./cpp_ref/class_m_status.html#a02ab596f4febca68da503aaf8dde3a80af0536797208144380691e2b376ffc1d1\" title=\"The operation was successful. \">MS::kSuccess</a></b> An intersection point has been found </li>\n\
<li><b><a class=\"el\" translate=\"no\" href=\"#!/url=./cpp_ref/class_m_status.html#a02ab596f4febca68da503aaf8dde3a80a1ef6c2d725fb4bec3e7e840d28adbc00\" title=\"The operation failed. \">MS::kFailure</a></b> No intersection points found </li>\n\
</ul>\n\
</dd></dl>\n\
<dl class=\"section \"><div id=\"dynsection-example3\" class=\"dynheader closed\" onclick=\"return toggleVisibility(this)\" style=\"cursor:pointer;\"><dt><img id=\"dynsection-example3-trigger\" src=\"cpp_ref/closed.png\" alt=\"+\"> <b>Examples: </b></dt></div><div id=\"dynsection-example3-content\" class=\"dyncontent\" style=\"display:none;\"><dd><a class=\"el\" translate=\"no\" href=\"#!/url=./cpp_ref/intersect_on_nurbs_surface_cmd_2intersect_on_nurbs_surface_cmd_8cpp-example.html#a19\">intersectOnNurbsSurfaceCmd/intersectOnNurbsSurfaceCmd.cpp</a>.</dd></div>\n\
</dl>\n\
</div>\n\
</div>\n\
<a class=\"anchor\" id=\"a774cd5d8fbebe8e7ed82a5aa587d1f04\"></a>\n\
<div class=\"memitem\">\n\
<div class=\"memproto\">\n\
<table class=\"mlabels\">\n\
  <tr>\n\
  <td class=\"mlabels-left\">\n\
      <table class=\"memname\">\n\
        <tr>\n\
          <td class=\"memname\" translate=\"no\">const char * className </td>\n\
          <td>(</td>\n\
          <td class=\"paramname\"></td><td>)</td>\n\
          <td></td>\n\
        </tr>\n\
      </table>\n\
  </td>\n\
  <td class=\"mlabels-right\">\n\
<span class=\"mlabels\"><span class=\"mlabel\">static</span></span>  </td>\n\
  </tr>\n\
</table>\n\
</div><div class=\"memdoc\">\n\
\n\
<p>Returns the name of this class. </p>\n\
<dl class=\"section return\"><dt>Returns</dt><dd>Name of this class. </dd></dl>\n\
\n\
</div>\n\
</div>\n\
<hr>The documentation for this class was generated from the following files:<ul>\n\
<li>MNurbsIntersector.h</li>\n\
<li>MNurbsIntersector.cpp</li>\n\
</ul>\n\
</div><!-- contents -->\n\
</div><!-- doc-content -->\n\
          <div class=\"footer-block\"><a href=\"../html/ac.cmtdialog.htm\" class=\"comments-anchor\" target=\"_blank\"><span class=\"comments-link\">Please send us your comment about this page</span></a></div><br></div>\n\
   </div></body>\n\
</html>\n\
";