var topic = "<!-- saved from url=(0024)http://docs.autodesk.com -->\n\
<html>\n\
   <head><script src=\"../scripts/yepnope.1.5.4-min.js\" type=\"text/javascript\"></script><script src=\"../scripts/lib/jquery-1.11.1.min.js\" type=\"text/javascript\"></script>\n\
      <title>C++ API Reference: MGeometryLegacy Class Reference</title>\n\
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
    cpp_ref_adsk_ref_toc.initNavTree(\'class_m_geometry_legacy.html\', tocPrefix);\n\
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
            <h1>C++ API Reference: MGeometryLegacy Class Reference</h1>\n\
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
      <li class=\"current\"><a href=\"#!/url=./cpp_ref/annotated.html\"><span>Classes</span></a></li>\n\
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
<!-- window showing the filter options -->\n\
\n\
\n\
<!-- iframe showing the search results (closed by default) -->\n\
\n\
\n\
<div class=\"header\">\n\
  \n\
  <div class=\"headertitle\">\n\
<div class=\"title\">MGeometryLegacy Class Reference<div class=\"ingroups\"><a class=\"el\" href=\"#!/url=./cpp_ref/group___open_maya_render.html\">OpenMayaRender - API module for rendering</a></div></div>  </div>\n\
<div id=\"OverviewLinksDiv\"><div id=\"dynsection-overview\" onclick=\"return toggleVisibility(this)\" class=\"dynheader closed\" style=\"cursor:pointer;\"><img id=\"dynsection-overview-trigger\" src=\"cpp_ref/closed.png\" alt=\"+\"> Related help topics: </div><div id=\"dynsection-overview-content\" class=\"dyncontent\" style=\"display:none;\"><ul class=\"overviewLinks\">\n\
<li class=\"overviewLink\"><a href=\"#!/url=./dev_help/What-s-New-What-s-Changed-/What-s-New-in-Maya-API-in-2018/What-s-New-in-the-Rendering-and.html\">What&#39;s New / What&#39;s Changed? &gt; What-s-New-in-Maya-API-in-2018 &gt; What&#39;s New in the Rendering and Lighting API</a></li>\n\
</ul></div></div>\n\
<div class=\"summary\">\n\
<a href=\"class_m_geometry_legacy.html#pub-methods\">Public Member Functions</a> &#124;\n\
<a href=\"class_m_geometry_legacy.html#friends\">Friends</a> &#124;\n\
<a href=\"#!/url=./cpp_ref/class_m_geometry_legacy-members.html\">List of all members</a>  </div></div><!--header-->\n\
<div class=\"contents\">\n\
\n\
<p>This method is obsolete.  \n\
 <a href=\"#!/url=./cpp_ref/class_m_geometry_legacy.html#details\">More...</a></p>\n\
\n\
<p><code>#include &lt;MGeometry.h&gt;</code></p>\n\
<table class=\"memberdecls\">\n\
<tr class=\"heading\"><td colspan=\"2\"><h2 class=\"groupheader\"><a name=\"pub-methods\"></a>\n\
Public Member Functions</h2></td></tr>\n\
<tr class=\"memitem:af2df149aae8d8ae41efb8d7d2da97bff\"><td class=\"memItemLeft\" align=\"right\" valign=\"top\"><a class=\"anchor\" id=\"af2df149aae8d8ae41efb8d7d2da97bff\"></a>\n\
&#160;</td><td class=\"memItemRight\" valign=\"bottom\"><a class=\"el\" href=\"#!/url=./cpp_ref/class_m_geometry_legacy.html#af2df149aae8d8ae41efb8d7d2da97bff\">~MGeometryLegacy</a> ()</td></tr>\n\
<tr class=\"memdesc:af2df149aae8d8ae41efb8d7d2da97bff\"><td class=\"mdescLeft\">&#160;</td><td class=\"mdescRight\">Class destructor. <br></td></tr>\n\
<tr class=\"separator:af2df149aae8d8ae41efb8d7d2da97bff\"><td class=\"memSeparator\" colspan=\"2\">&#160;</td></tr>\n\
<tr class=\"memitem:a56a73c94bd1139fe3b74d9a200ccafaf\"><td class=\"memItemLeft\" align=\"right\" valign=\"top\">&#160;</td><td class=\"memItemRight\" valign=\"bottom\"><a class=\"el\" href=\"#!/url=./cpp_ref/class_m_geometry_legacy.html#a56a73c94bd1139fe3b74d9a200ccafaf\">MGeometryLegacy</a> (const <a class=\"el\" href=\"#!/url=./cpp_ref/class_m_geometry_legacy.html\">MGeometryLegacy</a> &amp;geom)</td></tr>\n\
<tr class=\"memdesc:a56a73c94bd1139fe3b74d9a200ccafaf\"><td class=\"mdescLeft\">&#160;</td><td class=\"mdescRight\">Copy constructor.  <a href=\"class_m_geometry_legacy.html#a56a73c94bd1139fe3b74d9a200ccafaf\">More...</a><br></td></tr>\n\
<tr class=\"separator:a56a73c94bd1139fe3b74d9a200ccafaf\"><td class=\"memSeparator\" colspan=\"2\">&#160;</td></tr>\n\
<tr class=\"memitem:a9f4986a73a45b91c5b0632aae688d411\"><td class=\"memItemLeft\" align=\"right\" valign=\"top\"><a class=\"el\" href=\"#!/url=./cpp_ref/class_m_geometry_legacy.html\">MGeometryLegacy</a> &amp;&#160;</td><td class=\"memItemRight\" valign=\"bottom\"><a class=\"el\" href=\"#!/url=./cpp_ref/class_m_geometry_legacy.html#a9f4986a73a45b91c5b0632aae688d411\">operator=</a> (const <a class=\"el\" href=\"#!/url=./cpp_ref/class_m_geometry_legacy.html\">MGeometryLegacy</a> &amp;rhs)</td></tr>\n\
<tr class=\"memdesc:a9f4986a73a45b91c5b0632aae688d411\"><td class=\"mdescLeft\">&#160;</td><td class=\"mdescRight\">Copy constructor.  <a href=\"class_m_geometry_legacy.html#a9f4986a73a45b91c5b0632aae688d411\">More...</a><br></td></tr>\n\
<tr class=\"separator:a9f4986a73a45b91c5b0632aae688d411\"><td class=\"memSeparator\" colspan=\"2\">&#160;</td></tr>\n\
<tr class=\"memitem:a1a7e6f6f8f6d3be99f6f0524ab76ad85\"><td class=\"memItemLeft\" align=\"right\" valign=\"top\">unsigned int&#160;</td><td class=\"memItemRight\" valign=\"bottom\"><a class=\"el\" href=\"#!/url=./cpp_ref/class_m_geometry_legacy.html#a1a7e6f6f8f6d3be99f6f0524ab76ad85\">primitiveArrayCount</a> () const </td></tr>\n\
<tr class=\"memdesc:a1a7e6f6f8f6d3be99f6f0524ab76ad85\"><td class=\"mdescLeft\">&#160;</td><td class=\"mdescRight\">Get the number of primitive arrays for this surface.  <a href=\"class_m_geometry_legacy.html#a1a7e6f6f8f6d3be99f6f0524ab76ad85\">More...</a><br></td></tr>\n\
<tr class=\"separator:a1a7e6f6f8f6d3be99f6f0524ab76ad85\"><td class=\"memSeparator\" colspan=\"2\">&#160;</td></tr>\n\
<tr class=\"memitem:ad0b84023dd720ca2b0b8b05893dab358\"><td class=\"memItemLeft\" align=\"right\" valign=\"top\">const <a class=\"el\" href=\"#!/url=./cpp_ref/class_m_geometry_primitive.html\">MGeometryPrimitive</a>&#160;</td><td class=\"memItemRight\" valign=\"bottom\"><a class=\"el\" href=\"#!/url=./cpp_ref/class_m_geometry_legacy.html#ad0b84023dd720ca2b0b8b05893dab358\">primitiveArray</a> (unsigned int arrayNumber) const </td></tr>\n\
<tr class=\"memdesc:ad0b84023dd720ca2b0b8b05893dab358\"><td class=\"mdescLeft\">&#160;</td><td class=\"mdescRight\">Get the primitive indexing data for this surface.  <a href=\"class_m_geometry_legacy.html#ad0b84023dd720ca2b0b8b05893dab358\">More...</a><br></td></tr>\n\
<tr class=\"separator:ad0b84023dd720ca2b0b8b05893dab358\"><td class=\"memSeparator\" colspan=\"2\">&#160;</td></tr>\n\
<tr class=\"memitem:a117087d6021defde4f3202650c48f3ce\"><td class=\"memItemLeft\" align=\"right\" valign=\"top\">const <a class=\"el\" href=\"#!/url=./cpp_ref/class_m_geometry_data.html\">MGeometryData</a>&#160;</td><td class=\"memItemRight\" valign=\"bottom\"><a class=\"el\" href=\"#!/url=./cpp_ref/class_m_geometry_legacy.html#a117087d6021defde4f3202650c48f3ce\">position</a> ()</td></tr>\n\
<tr class=\"memdesc:a117087d6021defde4f3202650c48f3ce\"><td class=\"mdescLeft\">&#160;</td><td class=\"mdescRight\">Get the position data for this surface.  <a href=\"class_m_geometry_legacy.html#a117087d6021defde4f3202650c48f3ce\">More...</a><br></td></tr>\n\
<tr class=\"separator:a117087d6021defde4f3202650c48f3ce\"><td class=\"memSeparator\" colspan=\"2\">&#160;</td></tr>\n\
<tr class=\"memitem:aa6680785c2ecf1772013b55775fbcc2d\"><td class=\"memItemLeft\" align=\"right\" valign=\"top\">const <a class=\"el\" href=\"#!/url=./cpp_ref/class_m_geometry_data.html\">MGeometryData</a>&#160;</td><td class=\"memItemRight\" valign=\"bottom\"><a class=\"el\" href=\"#!/url=./cpp_ref/class_m_geometry_legacy.html#aa6680785c2ecf1772013b55775fbcc2d\">normal</a> ()</td></tr>\n\
<tr class=\"memdesc:aa6680785c2ecf1772013b55775fbcc2d\"><td class=\"mdescLeft\">&#160;</td><td class=\"mdescRight\">Get the normal data for this surface.  <a href=\"class_m_geometry_legacy.html#aa6680785c2ecf1772013b55775fbcc2d\">More...</a><br></td></tr>\n\
<tr class=\"separator:aa6680785c2ecf1772013b55775fbcc2d\"><td class=\"memSeparator\" colspan=\"2\">&#160;</td></tr>\n\
<tr class=\"memitem:aa97059353f7099fad25356cbe4bdc417\"><td class=\"memItemLeft\" align=\"right\" valign=\"top\">const <a class=\"el\" href=\"#!/url=./cpp_ref/class_m_geometry_data.html\">MGeometryData</a>&#160;</td><td class=\"memItemRight\" valign=\"bottom\"><a class=\"el\" href=\"#!/url=./cpp_ref/class_m_geometry_legacy.html#aa97059353f7099fad25356cbe4bdc417\">componentId</a> ()</td></tr>\n\
<tr class=\"memdesc:aa97059353f7099fad25356cbe4bdc417\"><td class=\"mdescLeft\">&#160;</td><td class=\"mdescRight\">Get the Maya component id data for this surface.  <a href=\"class_m_geometry_legacy.html#aa97059353f7099fad25356cbe4bdc417\">More...</a><br></td></tr>\n\
<tr class=\"separator:aa97059353f7099fad25356cbe4bdc417\"><td class=\"memSeparator\" colspan=\"2\">&#160;</td></tr>\n\
<tr class=\"memitem:a6a5f2937533ee58b7c2c7c1d64c203c2\"><td class=\"memItemLeft\" align=\"right\" valign=\"top\">const <a class=\"el\" href=\"#!/url=./cpp_ref/class_m_geometry_data.html\">MGeometryData</a>&#160;</td><td class=\"memItemRight\" valign=\"bottom\"><a class=\"el\" href=\"#!/url=./cpp_ref/class_m_geometry_legacy.html#a6a5f2937533ee58b7c2c7c1d64c203c2\">texCoord</a> (const <a class=\"el\" href=\"#!/url=./cpp_ref/class_m_string.html\">MString</a> &amp;name)</td></tr>\n\
<tr class=\"memdesc:a6a5f2937533ee58b7c2c7c1d64c203c2\"><td class=\"mdescLeft\">&#160;</td><td class=\"mdescRight\">Get a texture coordinate set by name.  <a href=\"class_m_geometry_legacy.html#a6a5f2937533ee58b7c2c7c1d64c203c2\">More...</a><br></td></tr>\n\
<tr class=\"separator:a6a5f2937533ee58b7c2c7c1d64c203c2\"><td class=\"memSeparator\" colspan=\"2\">&#160;</td></tr>\n\
<tr class=\"memitem:aa778ce908f5a55b137620434ae2ecaf4\"><td class=\"memItemLeft\" align=\"right\" valign=\"top\">const <a class=\"el\" href=\"#!/url=./cpp_ref/class_m_geometry_data.html\">MGeometryData</a>&#160;</td><td class=\"memItemRight\" valign=\"bottom\"><a class=\"el\" href=\"#!/url=./cpp_ref/class_m_geometry_legacy.html#aa778ce908f5a55b137620434ae2ecaf4\">color</a> (const <a class=\"el\" href=\"#!/url=./cpp_ref/class_m_string.html\">MString</a> &amp;name)</td></tr>\n\
<tr class=\"memdesc:aa778ce908f5a55b137620434ae2ecaf4\"><td class=\"mdescLeft\">&#160;</td><td class=\"mdescRight\">Get a color set by name.  <a href=\"class_m_geometry_legacy.html#aa778ce908f5a55b137620434ae2ecaf4\">More...</a><br></td></tr>\n\
<tr class=\"separator:aa778ce908f5a55b137620434ae2ecaf4\"><td class=\"memSeparator\" colspan=\"2\">&#160;</td></tr>\n\
<tr class=\"memitem:af81121404b85458ac375447fdff3b31e\"><td class=\"memItemLeft\" align=\"right\" valign=\"top\">const <a class=\"el\" href=\"#!/url=./cpp_ref/class_m_geometry_data.html\">MGeometryData</a>&#160;</td><td class=\"memItemRight\" valign=\"bottom\"><a class=\"el\" href=\"#!/url=./cpp_ref/class_m_geometry_legacy.html#af81121404b85458ac375447fdff3b31e\">tangent</a> (const <a class=\"el\" href=\"#!/url=./cpp_ref/class_m_string.html\">MString</a> &amp;name)</td></tr>\n\
<tr class=\"memdesc:af81121404b85458ac375447fdff3b31e\"><td class=\"mdescLeft\">&#160;</td><td class=\"mdescRight\">Get a tangent set by name.  <a href=\"class_m_geometry_legacy.html#af81121404b85458ac375447fdff3b31e\">More...</a><br></td></tr>\n\
<tr class=\"separator:af81121404b85458ac375447fdff3b31e\"><td class=\"memSeparator\" colspan=\"2\">&#160;</td></tr>\n\
<tr class=\"memitem:a221789fde015ae3d8b1c6ac68b90f497\"><td class=\"memItemLeft\" align=\"right\" valign=\"top\">const <a class=\"el\" href=\"#!/url=./cpp_ref/class_m_geometry_data.html\">MGeometryData</a>&#160;</td><td class=\"memItemRight\" valign=\"bottom\"><a class=\"el\" href=\"#!/url=./cpp_ref/class_m_geometry_legacy.html#a221789fde015ae3d8b1c6ac68b90f497\">binormal</a> (const <a class=\"el\" href=\"#!/url=./cpp_ref/class_m_string.html\">MString</a> &amp;name)</td></tr>\n\
<tr class=\"memdesc:a221789fde015ae3d8b1c6ac68b90f497\"><td class=\"mdescLeft\">&#160;</td><td class=\"mdescRight\">Get a binormal set by name.  <a href=\"class_m_geometry_legacy.html#a221789fde015ae3d8b1c6ac68b90f497\">More...</a><br></td></tr>\n\
<tr class=\"separator:a221789fde015ae3d8b1c6ac68b90f497\"><td class=\"memSeparator\" colspan=\"2\">&#160;</td></tr>\n\
<tr class=\"memitem:a74adee93d4635de206fd753875bee472\"><td class=\"memItemLeft\" align=\"right\" valign=\"top\">const <a class=\"el\" href=\"#!/url=./cpp_ref/class_m_geometry_data.html\">MGeometryData</a>&#160;</td><td class=\"memItemRight\" valign=\"bottom\"><a class=\"el\" href=\"#!/url=./cpp_ref/class_m_geometry_legacy.html#a74adee93d4635de206fd753875bee472\">data</a> (<a class=\"el\" href=\"#!/url=./cpp_ref/class_m_geometry_data.html#ad8ed01ff3ff33333d8e19db4d2818bb6\">MGeometryData::DataType</a> what, const <a class=\"el\" href=\"#!/url=./cpp_ref/class_m_string.html\">MString</a> &amp;name)</td></tr>\n\
<tr class=\"memdesc:a74adee93d4635de206fd753875bee472\"><td class=\"mdescLeft\">&#160;</td><td class=\"mdescRight\">Get arbitrary surface data by name.  <a href=\"class_m_geometry_legacy.html#a74adee93d4635de206fd753875bee472\">More...</a><br></td></tr>\n\
<tr class=\"separator:a74adee93d4635de206fd753875bee472\"><td class=\"memSeparator\" colspan=\"2\">&#160;</td></tr>\n\
</table><table class=\"memberdecls\">\n\
<tr class=\"heading\"><td colspan=\"2\"><h2 class=\"groupheader\"><a name=\"friends\"></a>\n\
Friends</h2></td></tr>\n\
<tr class=\"memitem:a596ad41dee9b92b1e29f9baef8f2a103\"><td class=\"memItemLeft\" align=\"right\" valign=\"top\"><a class=\"anchor\" id=\"a596ad41dee9b92b1e29f9baef8f2a103\"></a>\n\
class&#160;</td><td class=\"memItemRight\" valign=\"bottom\"><b>MGeometryManager</b></td></tr>\n\
<tr class=\"separator:a596ad41dee9b92b1e29f9baef8f2a103\"><td class=\"memSeparator\" colspan=\"2\">&#160;</td></tr>\n\
<tr class=\"memitem:a40a604fab3fe933c413c62ecc30a3b4e\"><td class=\"memItemLeft\" align=\"right\" valign=\"top\"><a class=\"anchor\" id=\"a40a604fab3fe933c413c62ecc30a3b4e\"></a>\n\
class&#160;</td><td class=\"memItemRight\" valign=\"bottom\"><b>MGeometryList</b></td></tr>\n\
<tr class=\"separator:a40a604fab3fe933c413c62ecc30a3b4e\"><td class=\"memSeparator\" colspan=\"2\">&#160;</td></tr>\n\
<tr class=\"memitem:aa01eb6c3bd79f19e738ec582567c060b\"><td class=\"memItemLeft\" align=\"right\" valign=\"top\"><a class=\"anchor\" id=\"aa01eb6c3bd79f19e738ec582567c060b\"></a>\n\
class&#160;</td><td class=\"memItemRight\" valign=\"bottom\"><b>MVaryingParameter</b></td></tr>\n\
<tr class=\"separator:aa01eb6c3bd79f19e738ec582567c060b\"><td class=\"memSeparator\" colspan=\"2\">&#160;</td></tr>\n\
</table>\n\
<a name=\"details\" id=\"details\"></a><h2 class=\"groupheader\">Detailed Description</h2>\n\
<div class=\"textblock\"><p>This method is obsolete. </p>\n\
<dl class=\"deprecated\"><dt><b><a class=\"el\" href=\"#!/url=./cpp_ref/deprecated.html#_deprecated000195\">Deprecated:</a></b></dt><dd>Use <a class=\"el\" href=\"#!/url=./cpp_ref/class_m_h_w_render_1_1_m_geometry.html\" title=\"Class for working with geometric structures used to draw objects. \">MHWRender::MGeometry</a> and <a class=\"el\" href=\"#!/url=./cpp_ref/class_m_h_w_render_1_1_m_geometry_extractor.html\" title=\"Class for extracting renderable geometry. \">MHWRender::MGeometryExtractor</a> instead.</dd></dl>\n\
<p><a class=\"el\" href=\"#!/url=./cpp_ref/class_m_geometry_legacy.html\" title=\"This method is obsolete. \">MGeometryLegacy</a> stores the collection of <a class=\"el\" href=\"#!/url=./cpp_ref/class_m_geometry_data.html\" title=\"This method is obsolete. \">MGeometryData</a> arrays which describe a Maya surface, including per-component data such as UV mapping and colour.</p>\n\
<p>Various methods are provided for returning <a class=\"el\" href=\"#!/url=./cpp_ref/class_m_geometry_data.html\" title=\"This method is obsolete. \">MGeometryData</a> containing the data for different properties of the geometry: the <a class=\"el\" href=\"#!/url=./cpp_ref/class_m_geometry_legacy.html#a117087d6021defde4f3202650c48f3ce\" title=\"Get the position data for this surface. \">position()</a> method returns position data, the <a class=\"el\" href=\"#!/url=./cpp_ref/class_m_geometry_legacy.html#aa6680785c2ecf1772013b55775fbcc2d\" title=\"Get the normal data for this surface. \">normal()</a> method returns normals, and so on.</p>\n\
<p>The <a class=\"el\" href=\"#!/url=./cpp_ref/class_m_geometry_legacy.html#ad0b84023dd720ca2b0b8b05893dab358\" title=\"Get the primitive indexing data for this surface. \">primitiveArray()</a> method returns <a class=\"el\" href=\"#!/url=./cpp_ref/class_m_geometry_primitive.html\" title=\"This method is obsolete. \">MGeometryPrimitive</a>\'s which provide indexing into those property arrays for each primitive to be drawn. </p>\n\
<dl class=\"section \"><div id=\"dynsection-example0\" class=\"dynheader closed\" onclick=\"return toggleVisibility(this)\" style=\"cursor:pointer;\"><dt><img id=\"dynsection-example0-trigger\" src=\"cpp_ref/closed.png\" alt=\"+\"> <b>Examples: </b></dt></div><div id=\"dynsection-example0-content\" class=\"dyncontent\" style=\"display:none;\"><dd><a class=\"el\" href=\"#!/url=./cpp_ref/dx11_shader_2dx11_shader_8cpp-example.html#_a173\">dx11Shader/dx11Shader.cpp</a>, <a class=\"el\" href=\"#!/url=./cpp_ref/glsl_shader_2_g_l_s_l_shader_8cpp-example.html#_a72\">glslShader/GLSLShader.cpp</a>, and <a class=\"el\" href=\"#!/url=./cpp_ref/hlsl_shader_2hlsl_shader_8cpp-example.html#_a55\">hlslShader/hlslShader.cpp</a>.</dd></div>\n\
</dl></div><h2 class=\"groupheader\">Constructor &amp; Destructor Documentation</h2>\n\
<a class=\"anchor\" id=\"a56a73c94bd1139fe3b74d9a200ccafaf\"></a>\n\
<div class=\"memitem\">\n\
<div class=\"memproto\">\n\
      <table class=\"memname\">\n\
        <tr>\n\
          <td class=\"memname\"><a class=\"el\" href=\"#!/url=./cpp_ref/class_m_geometry_legacy.html\">MGeometryLegacy</a> </td>\n\
          <td>(</td>\n\
          <td class=\"paramtype\">const <a class=\"el\" href=\"#!/url=./cpp_ref/class_m_geometry_legacy.html\">MGeometryLegacy</a> &amp;&#160;</td>\n\
          <td class=\"paramname\"><em>geom</em></td><td>)</td>\n\
          <td></td>\n\
        </tr>\n\
      </table>\n\
</div><div class=\"memdoc\">\n\
\n\
<p>Copy constructor. </p>\n\
<dl class=\"params\"><dt>Parameters</dt><dd>\n\
  <table class=\"params\">\n\
    <tr><td class=\"paramdir\">[in]</td><td class=\"paramname\">geom</td><td><a class=\"el\" href=\"#!/url=./cpp_ref/class_m_geometry_legacy.html\" title=\"This method is obsolete. \">MGeometryLegacy</a> to copy. </td></tr>\n\
  </table>\n\
  </dd>\n\
</dl>\n\
\n\
</div>\n\
</div>\n\
<h2 class=\"groupheader\">Member Function Documentation</h2>\n\
<a class=\"anchor\" id=\"a9f4986a73a45b91c5b0632aae688d411\"></a>\n\
<div class=\"memitem\">\n\
<div class=\"memproto\">\n\
      <table class=\"memname\">\n\
        <tr>\n\
          <td class=\"memname\"><a class=\"el\" href=\"#!/url=./cpp_ref/class_m_geometry_legacy.html\">MGeometryLegacy</a> &amp; operator= </td>\n\
          <td>(</td>\n\
          <td class=\"paramtype\">const <a class=\"el\" href=\"#!/url=./cpp_ref/class_m_geometry_legacy.html\">MGeometryLegacy</a> &amp;&#160;</td>\n\
          <td class=\"paramname\"><em>rhs</em></td><td>)</td>\n\
          <td></td>\n\
        </tr>\n\
      </table>\n\
</div><div class=\"memdoc\">\n\
\n\
<p>Copy constructor. </p>\n\
<dl class=\"params\"><dt>Parameters</dt><dd>\n\
  <table class=\"params\">\n\
    <tr><td class=\"paramdir\">[in]</td><td class=\"paramname\">rhs</td><td><a class=\"el\" href=\"#!/url=./cpp_ref/class_m_geometry_legacy.html\" title=\"This method is obsolete. \">MGeometryLegacy</a> to copy</td></tr>\n\
  </table>\n\
  </dd>\n\
</dl>\n\
<dl class=\"section return\"><dt>Returns</dt><dd><a class=\"el\" href=\"#!/url=./cpp_ref/class_m_geometry_legacy.html\" title=\"This method is obsolete. \">MGeometryLegacy</a> copied into. </dd></dl>\n\
\n\
</div>\n\
</div>\n\
<a class=\"anchor\" id=\"a1a7e6f6f8f6d3be99f6f0524ab76ad85\"></a>\n\
<div class=\"memitem\">\n\
<div class=\"memproto\">\n\
      <table class=\"memname\">\n\
        <tr>\n\
          <td class=\"memname\">unsigned int primitiveArrayCount </td>\n\
          <td>(</td>\n\
          <td class=\"paramname\"></td><td>)</td>\n\
          <td> const</td>\n\
        </tr>\n\
      </table>\n\
</div><div class=\"memdoc\">\n\
\n\
<p>Get the number of primitive arrays for this surface. </p>\n\
<dl class=\"section return\"><dt>Returns</dt><dd>Number of primitive arrays </dd></dl>\n\
<dl class=\"section \"><div id=\"dynsection-example1\" class=\"dynheader closed\" onclick=\"return toggleVisibility(this)\" style=\"cursor:pointer;\"><dt><img id=\"dynsection-example1-trigger\" src=\"cpp_ref/closed.png\" alt=\"+\"> <b>Examples: </b></dt></div><div id=\"dynsection-example1-content\" class=\"dyncontent\" style=\"display:none;\"><dd><a class=\"el\" href=\"#!/url=./cpp_ref/dx11_shader_2dx11_shader_8cpp-example.html#a185\">dx11Shader/dx11Shader.cpp</a>, and <a class=\"el\" href=\"#!/url=./cpp_ref/glsl_shader_2_g_l_s_l_shader_8cpp-example.html#a84\">glslShader/GLSLShader.cpp</a>.</dd></div>\n\
</dl>\n\
</div>\n\
</div>\n\
<a class=\"anchor\" id=\"ad0b84023dd720ca2b0b8b05893dab358\"></a>\n\
<div class=\"memitem\">\n\
<div class=\"memproto\">\n\
      <table class=\"memname\">\n\
        <tr>\n\
          <td class=\"memname\">const <a class=\"el\" href=\"#!/url=./cpp_ref/class_m_geometry_primitive.html\">MGeometryPrimitive</a> primitiveArray </td>\n\
          <td>(</td>\n\
          <td class=\"paramtype\">unsigned int&#160;</td>\n\
          <td class=\"paramname\"><em>arrayNumber</em></td><td>)</td>\n\
          <td> const</td>\n\
        </tr>\n\
      </table>\n\
</div><div class=\"memdoc\">\n\
\n\
<p>Get the primitive indexing data for this surface. </p>\n\
<p>The surface geometry may consist of more than one <a class=\"el\" href=\"#!/url=./cpp_ref/class_m_geometry_primitive.html\" title=\"This method is obsolete. \">MGeometryPrimitive</a>, each representing an array of primitives. For example, if the surface was composed of both triangles and quads there might be one <a class=\"el\" href=\"#!/url=./cpp_ref/class_m_geometry_primitive.html\" title=\"This method is obsolete. \">MGeometryPrimitive</a> for the triangles and a second for the quads. The <em>arrayNumber</em> parameter is used to select between these.</p>\n\
<p>Each <a class=\"el\" href=\"#!/url=./cpp_ref/class_m_geometry_primitive.html\" title=\"This method is obsolete. \">MGeometryPrimitive</a> contains indices which are used to map the <a class=\"el\" href=\"#!/url=./cpp_ref/class_m_geometry_data.html\" title=\"This method is obsolete. \">MGeometryData</a> returned by the other methods of this class onto the primitives. For example, if the returned <a class=\"el\" href=\"#!/url=./cpp_ref/class_m_geometry_primitive.html\" title=\"This method is obsolete. \">MGeometryPrimitive</a> is for an array of triangles it will contain three indices for each triangle. Those indices can be used to index into the position data returned by the <a class=\"el\" href=\"#!/url=./cpp_ref/class_m_geometry_legacy.html#a117087d6021defde4f3202650c48f3ce\" title=\"Get the position data for this surface. \">position()</a> method, the normal data returned by the <a class=\"el\" href=\"#!/url=./cpp_ref/class_m_geometry_legacy.html#aa6680785c2ecf1772013b55775fbcc2d\" title=\"Get the normal data for this surface. \">normal()</a> method, and so on.</p>\n\
<dl class=\"params\"><dt>Parameters</dt><dd>\n\
  <table class=\"params\">\n\
    <tr><td class=\"paramdir\">[in]</td><td class=\"paramname\">arrayNumber</td><td>Number of the index data to retrieve. Must be in the range 0 to <a class=\"el\" href=\"#!/url=./cpp_ref/class_m_geometry_legacy.html#a1a7e6f6f8f6d3be99f6f0524ab76ad85\" title=\"Get the number of primitive arrays for this surface. \">primitiveArrayCount()</a> - 1.</td></tr>\n\
  </table>\n\
  </dd>\n\
</dl>\n\
<dl class=\"section return\"><dt>Returns</dt><dd>Primitive data structure, which may be empty. </dd></dl>\n\
<dl class=\"section \"><div id=\"dynsection-example2\" class=\"dynheader closed\" onclick=\"return toggleVisibility(this)\" style=\"cursor:pointer;\"><dt><img id=\"dynsection-example2-trigger\" src=\"cpp_ref/closed.png\" alt=\"+\"> <b>Examples: </b></dt></div><div id=\"dynsection-example2-content\" class=\"dyncontent\" style=\"display:none;\"><dd><a class=\"el\" href=\"#!/url=./cpp_ref/dx11_shader_2dx11_shader_8cpp-example.html#a187\">dx11Shader/dx11Shader.cpp</a>, <a class=\"el\" href=\"#!/url=./cpp_ref/glsl_shader_2_g_l_s_l_shader_8cpp-example.html#a86\">glslShader/GLSLShader.cpp</a>, and <a class=\"el\" href=\"#!/url=./cpp_ref/hlsl_shader_2hlsl_shader_8cpp-example.html#a60\">hlslShader/hlslShader.cpp</a>.</dd></div>\n\
</dl>\n\
</div>\n\
</div>\n\
<a class=\"anchor\" id=\"a117087d6021defde4f3202650c48f3ce\"></a>\n\
<div class=\"memitem\">\n\
<div class=\"memproto\">\n\
      <table class=\"memname\">\n\
        <tr>\n\
          <td class=\"memname\">const <a class=\"el\" href=\"#!/url=./cpp_ref/class_m_geometry_data.html\">MGeometryData</a> position </td>\n\
          <td>(</td>\n\
          <td class=\"paramname\"></td><td>)</td>\n\
          <td></td>\n\
        </tr>\n\
      </table>\n\
</div><div class=\"memdoc\">\n\
\n\
<p>Get the position data for this surface. </p>\n\
<dl class=\"section return\"><dt>Returns</dt><dd>The position data (which may be empty). </dd></dl>\n\
<dl class=\"section \"><div id=\"dynsection-example3\" class=\"dynheader closed\" onclick=\"return toggleVisibility(this)\" style=\"cursor:pointer;\"><dt><img id=\"dynsection-example3-trigger\" src=\"cpp_ref/closed.png\" alt=\"+\"> <b>Examples: </b></dt></div><div id=\"dynsection-example3-content\" class=\"dyncontent\" style=\"display:none;\"><dd><a class=\"el\" href=\"#!/url=./cpp_ref/dx11_shader_2dx11_shader_8cpp-example.html#a177\">dx11Shader/dx11Shader.cpp</a>, <a class=\"el\" href=\"#!/url=./cpp_ref/glsl_shader_2_g_l_s_l_shader_8cpp-example.html#a76\">glslShader/GLSLShader.cpp</a>, and <a class=\"el\" href=\"#!/url=./cpp_ref/hlsl_shader_2hlsl_shader_8cpp-example.html#a65\">hlslShader/hlslShader.cpp</a>.</dd></div>\n\
</dl>\n\
</div>\n\
</div>\n\
<a class=\"anchor\" id=\"aa6680785c2ecf1772013b55775fbcc2d\"></a>\n\
<div class=\"memitem\">\n\
<div class=\"memproto\">\n\
      <table class=\"memname\">\n\
        <tr>\n\
          <td class=\"memname\">const <a class=\"el\" href=\"#!/url=./cpp_ref/class_m_geometry_data.html\">MGeometryData</a> normal </td>\n\
          <td>(</td>\n\
          <td class=\"paramname\"></td><td>)</td>\n\
          <td></td>\n\
        </tr>\n\
      </table>\n\
</div><div class=\"memdoc\">\n\
\n\
<p>Get the normal data for this surface. </p>\n\
<dl class=\"section return\"><dt>Returns</dt><dd>The normal data (which may be empty). </dd></dl>\n\
<dl class=\"section \"><div id=\"dynsection-example4\" class=\"dynheader closed\" onclick=\"return toggleVisibility(this)\" style=\"cursor:pointer;\"><dt><img id=\"dynsection-example4-trigger\" src=\"cpp_ref/closed.png\" alt=\"+\"> <b>Examples: </b></dt></div><div id=\"dynsection-example4-content\" class=\"dyncontent\" style=\"display:none;\"><dd><a class=\"el\" href=\"#!/url=./cpp_ref/dx11_shader_2dx11_shader_8cpp-example.html#a184\">dx11Shader/dx11Shader.cpp</a>, and <a class=\"el\" href=\"#!/url=./cpp_ref/glsl_shader_2_g_l_s_l_shader_8cpp-example.html#a83\">glslShader/GLSLShader.cpp</a>.</dd></div>\n\
</dl>\n\
</div>\n\
</div>\n\
<a class=\"anchor\" id=\"aa97059353f7099fad25356cbe4bdc417\"></a>\n\
<div class=\"memitem\">\n\
<div class=\"memproto\">\n\
      <table class=\"memname\">\n\
        <tr>\n\
          <td class=\"memname\">const <a class=\"el\" href=\"#!/url=./cpp_ref/class_m_geometry_data.html\">MGeometryData</a> componentId </td>\n\
          <td>(</td>\n\
          <td class=\"paramname\"></td><td>)</td>\n\
          <td></td>\n\
        </tr>\n\
      </table>\n\
</div><div class=\"memdoc\">\n\
\n\
<p>Get the Maya component id data for this surface. </p>\n\
<p>This array allows you to correlate <a class=\"el\" href=\"#!/url=./cpp_ref/class_m_geometry_legacy.html\" title=\"This method is obsolete. \">MGeometryLegacy</a> entries with the corresponding component on the Maya surface (e.g. for meshes, this array will contains the vertex id).</p>\n\
<dl class=\"section return\"><dt>Returns</dt><dd>The component id data (which may be empty). </dd></dl>\n\
\n\
</div>\n\
</div>\n\
<a class=\"anchor\" id=\"a6a5f2937533ee58b7c2c7c1d64c203c2\"></a>\n\
<div class=\"memitem\">\n\
<div class=\"memproto\">\n\
      <table class=\"memname\">\n\
        <tr>\n\
          <td class=\"memname\">const <a class=\"el\" href=\"#!/url=./cpp_ref/class_m_geometry_data.html\">MGeometryData</a> texCoord </td>\n\
          <td>(</td>\n\
          <td class=\"paramtype\">const <a class=\"el\" href=\"#!/url=./cpp_ref/class_m_string.html\">MString</a> &amp;&#160;</td>\n\
          <td class=\"paramname\"><em>name</em></td><td>)</td>\n\
          <td></td>\n\
        </tr>\n\
      </table>\n\
</div><div class=\"memdoc\">\n\
\n\
<p>Get a texture coordinate set by name. </p>\n\
<dl class=\"params\"><dt>Parameters</dt><dd>\n\
  <table class=\"params\">\n\
    <tr><td class=\"paramdir\">[in]</td><td class=\"paramname\">name</td><td>the name of the set to return</td></tr>\n\
  </table>\n\
  </dd>\n\
</dl>\n\
<dl class=\"section return\"><dt>Returns</dt><dd>The texture coordinate data (which may be empty). </dd></dl>\n\
\n\
</div>\n\
</div>\n\
<a class=\"anchor\" id=\"aa778ce908f5a55b137620434ae2ecaf4\"></a>\n\
<div class=\"memitem\">\n\
<div class=\"memproto\">\n\
      <table class=\"memname\">\n\
        <tr>\n\
          <td class=\"memname\">const <a class=\"el\" href=\"#!/url=./cpp_ref/class_m_geometry_data.html\">MGeometryData</a> color </td>\n\
          <td>(</td>\n\
          <td class=\"paramtype\">const <a class=\"el\" href=\"#!/url=./cpp_ref/class_m_string.html\">MString</a> &amp;&#160;</td>\n\
          <td class=\"paramname\"><em>name</em></td><td>)</td>\n\
          <td></td>\n\
        </tr>\n\
      </table>\n\
</div><div class=\"memdoc\">\n\
\n\
<p>Get a color set by name. </p>\n\
<dl class=\"params\"><dt>Parameters</dt><dd>\n\
  <table class=\"params\">\n\
    <tr><td class=\"paramdir\">[in]</td><td class=\"paramname\">name</td><td>the name of the set to return</td></tr>\n\
  </table>\n\
  </dd>\n\
</dl>\n\
<dl class=\"section return\"><dt>Returns</dt><dd>The color data (which may be empty). </dd></dl>\n\
\n\
</div>\n\
</div>\n\
<a class=\"anchor\" id=\"af81121404b85458ac375447fdff3b31e\"></a>\n\
<div class=\"memitem\">\n\
<div class=\"memproto\">\n\
      <table class=\"memname\">\n\
        <tr>\n\
          <td class=\"memname\">const <a class=\"el\" href=\"#!/url=./cpp_ref/class_m_geometry_data.html\">MGeometryData</a> tangent </td>\n\
          <td>(</td>\n\
          <td class=\"paramtype\">const <a class=\"el\" href=\"#!/url=./cpp_ref/class_m_string.html\">MString</a> &amp;&#160;</td>\n\
          <td class=\"paramname\"><em>name</em></td><td>)</td>\n\
          <td></td>\n\
        </tr>\n\
      </table>\n\
</div><div class=\"memdoc\">\n\
\n\
<p>Get a tangent set by name. </p>\n\
<dl class=\"params\"><dt>Parameters</dt><dd>\n\
  <table class=\"params\">\n\
    <tr><td class=\"paramdir\">[in]</td><td class=\"paramname\">name</td><td>the name of the uv set tangent data should be returned for</td></tr>\n\
  </table>\n\
  </dd>\n\
</dl>\n\
<dl class=\"section return\"><dt>Returns</dt><dd>The tangent data (which may be empty). </dd></dl>\n\
\n\
</div>\n\
</div>\n\
<a class=\"anchor\" id=\"a221789fde015ae3d8b1c6ac68b90f497\"></a>\n\
<div class=\"memitem\">\n\
<div class=\"memproto\">\n\
      <table class=\"memname\">\n\
        <tr>\n\
          <td class=\"memname\">const <a class=\"el\" href=\"#!/url=./cpp_ref/class_m_geometry_data.html\">MGeometryData</a> binormal </td>\n\
          <td>(</td>\n\
          <td class=\"paramtype\">const <a class=\"el\" href=\"#!/url=./cpp_ref/class_m_string.html\">MString</a> &amp;&#160;</td>\n\
          <td class=\"paramname\"><em>name</em></td><td>)</td>\n\
          <td></td>\n\
        </tr>\n\
      </table>\n\
</div><div class=\"memdoc\">\n\
\n\
<p>Get a binormal set by name. </p>\n\
<dl class=\"params\"><dt>Parameters</dt><dd>\n\
  <table class=\"params\">\n\
    <tr><td class=\"paramdir\">[in]</td><td class=\"paramname\">name</td><td>the name of the uv set binormal data should be returned for</td></tr>\n\
  </table>\n\
  </dd>\n\
</dl>\n\
<dl class=\"section return\"><dt>Returns</dt><dd>The binormal data (which may be empty). </dd></dl>\n\
\n\
</div>\n\
</div>\n\
<a class=\"anchor\" id=\"a74adee93d4635de206fd753875bee472\"></a>\n\
<div class=\"memitem\">\n\
<div class=\"memproto\">\n\
      <table class=\"memname\">\n\
        <tr>\n\
          <td class=\"memname\">const <a class=\"el\" href=\"#!/url=./cpp_ref/class_m_geometry_data.html\">MGeometryData</a> data </td>\n\
          <td>(</td>\n\
          <td class=\"paramtype\"><a class=\"el\" href=\"#!/url=./cpp_ref/class_m_geometry_data.html#ad8ed01ff3ff33333d8e19db4d2818bb6\">MGeometryData::DataType</a>&#160;</td>\n\
          <td class=\"paramname\"><em>what</em>, </td>\n\
        </tr>\n\
        <tr>\n\
          <td class=\"paramkey\"></td>\n\
          <td></td>\n\
          <td class=\"paramtype\">const <a class=\"el\" href=\"#!/url=./cpp_ref/class_m_string.html\">MString</a> &amp;&#160;</td>\n\
          <td class=\"paramname\"><em>name</em>&#160;</td>\n\
        </tr>\n\
        <tr>\n\
          <td></td>\n\
          <td>)</td>\n\
          <td></td><td></td>\n\
        </tr>\n\
      </table>\n\
</div><div class=\"memdoc\">\n\
\n\
<p>Get arbitrary surface data by name. </p>\n\
<dl class=\"params\"><dt>Parameters</dt><dd>\n\
  <table class=\"params\">\n\
    <tr><td class=\"paramdir\">[in]</td><td class=\"paramname\">what</td><td>the type of data requested </td></tr>\n\
    <tr><td class=\"paramdir\">[in]</td><td class=\"paramname\">name</td><td>the name of the data set requested</td></tr>\n\
  </table>\n\
  </dd>\n\
</dl>\n\
<dl class=\"section return\"><dt>Returns</dt><dd>The geometry data (which may be empty). </dd></dl>\n\
\n\
</div>\n\
</div>\n\
<hr>The documentation for this class was generated from the following files:<ul>\n\
<li>MGeometry.h</li>\n\
<li>MGeometry.cpp</li>\n\
</ul>\n\
</div><!-- contents -->\n\
</div><!-- doc-content -->\n\
<!-- start footer part -->\n\
\n\
      <div class=\"footer-block\"><a href=\"../html/ac.cmtdialog.htm\" class=\"comments-anchor\" target=\"_blank\"><span class=\"comments-link\">Please send us your comment about this page</span></a></div></div>\n\
   </div></body>\n\
</html>\n\
";