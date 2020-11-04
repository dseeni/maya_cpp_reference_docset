var topic = "<!-- saved from url=(0024)http://docs.autodesk.com -->\n\
<html>\n\
   <head><script src=\"../scripts/yepnope.1.5.4-min.js\" type=\"text/javascript\"></script><script src=\"../scripts/lib/jquery-1.11.1.min.js\" type=\"text/javascript\"></script>\n\
      <title>C++ API Reference: MGPUEventList Class Reference</title>\n\
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
    cpp_ref_adsk_ref_toc.initNavTree(\'class_m_g_p_u_event_list.html\', tocPrefix);\n\
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
            <h1>C++ API Reference: MGPUEventList Class Reference</h1>\n\
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
<div class=\"title\">MGPUEventList Class Reference<div class=\"ingroups\"><a class=\"el\" href=\"#!/url=./cpp_ref/group___open_maya_anim.html\">OpenMayaAnim - API module for animation</a></div></div>  </div>\n\
<div class=\"summary\">\n\
<a href=\"class_m_g_p_u_event_list.html#pub-methods\">Public Member Functions</a> &#124;\n\
<a href=\"#!/url=./cpp_ref/class_m_g_p_u_event_list-members.html\">List of all members</a>  </div></div><!--header-->\n\
<div class=\"contents\">\n\
\n\
<p>Helper class to keep track of CL events.  \n\
 <a href=\"#!/url=./cpp_ref/class_m_g_p_u_event_list.html#details\">More...</a></p>\n\
\n\
<p><code>#include &lt;MPxGPUDeformer.h&gt;</code></p>\n\
<table class=\"memberdecls\">\n\
<tr class=\"heading\"><td colspan=\"2\"><h2 class=\"groupheader\"><a name=\"pub-methods\"></a>\n\
Public Member Functions</h2></td></tr>\n\
<tr class=\"memitem:a6af74509dd2444bacb21708e84888187\"><td class=\"memItemLeft\" align=\"right\" valign=\"top\"><a class=\"anchor\" id=\"a6af74509dd2444bacb21708e84888187\"></a>\n\
&#160;</td><td class=\"memItemRight\" valign=\"bottom\"><a class=\"el\" href=\"#!/url=./cpp_ref/class_m_g_p_u_event_list.html#a6af74509dd2444bacb21708e84888187\">MGPUEventList</a> ()</td></tr>\n\
<tr class=\"memdesc:a6af74509dd2444bacb21708e84888187\"><td class=\"mdescLeft\">&#160;</td><td class=\"mdescRight\">Constructs a <a class=\"el\" href=\"#!/url=./cpp_ref/class_m_g_p_u_event_list.html\" title=\"Helper class to keep track of CL events. \">MGPUEventList</a>. <br></td></tr>\n\
<tr class=\"separator:a6af74509dd2444bacb21708e84888187\"><td class=\"memSeparator\" colspan=\"2\">&#160;</td></tr>\n\
<tr class=\"memitem:a59f620aea9c58683cb1eb71eeead4438\"><td class=\"memItemLeft\" align=\"right\" valign=\"top\">&#160;</td><td class=\"memItemRight\" valign=\"bottom\"><a class=\"el\" href=\"#!/url=./cpp_ref/class_m_g_p_u_event_list.html#a59f620aea9c58683cb1eb71eeead4438\">MGPUEventList</a> (const <a class=\"el\" href=\"#!/url=./cpp_ref/class_m_g_p_u_event_list.html\">MGPUEventList</a> &amp;)</td></tr>\n\
<tr class=\"memdesc:a59f620aea9c58683cb1eb71eeead4438\"><td class=\"mdescLeft\">&#160;</td><td class=\"mdescRight\">Constructs a <a class=\"el\" href=\"#!/url=./cpp_ref/class_m_g_p_u_event_list.html\" title=\"Helper class to keep track of CL events. \">MGPUEventList</a>.  <a href=\"class_m_g_p_u_event_list.html#a59f620aea9c58683cb1eb71eeead4438\">More...</a><br></td></tr>\n\
<tr class=\"separator:a59f620aea9c58683cb1eb71eeead4438\"><td class=\"memSeparator\" colspan=\"2\">&#160;</td></tr>\n\
<tr class=\"memitem:a08c8d8ac28e10e27644faf3e3255d8d8\"><td class=\"memItemLeft\" align=\"right\" valign=\"top\"><a class=\"anchor\" id=\"a08c8d8ac28e10e27644faf3e3255d8d8\"></a>\n\
&#160;</td><td class=\"memItemRight\" valign=\"bottom\"><a class=\"el\" href=\"#!/url=./cpp_ref/class_m_g_p_u_event_list.html#a08c8d8ac28e10e27644faf3e3255d8d8\">~MGPUEventList</a> ()</td></tr>\n\
<tr class=\"memdesc:a08c8d8ac28e10e27644faf3e3255d8d8\"><td class=\"mdescLeft\">&#160;</td><td class=\"mdescRight\">Destructor. <br></td></tr>\n\
<tr class=\"separator:a08c8d8ac28e10e27644faf3e3255d8d8\"><td class=\"memSeparator\" colspan=\"2\">&#160;</td></tr>\n\
<tr class=\"memitem:a8692d830f89f7fb213410850e6e1bec6\"><td class=\"memItemLeft\" align=\"right\" valign=\"top\">void&#160;</td><td class=\"memItemRight\" valign=\"bottom\"><a class=\"el\" href=\"#!/url=./cpp_ref/class_m_g_p_u_event_list.html#a8692d830f89f7fb213410850e6e1bec6\">add</a> (const <a class=\"el\" href=\"#!/url=./cpp_ref/class_m_auto_c_l_event.html\">MAutoCLEvent</a> &amp;event)</td></tr>\n\
<tr class=\"memdesc:a8692d830f89f7fb213410850e6e1bec6\"><td class=\"mdescLeft\">&#160;</td><td class=\"mdescRight\">This method adds a new event to the list.  <a href=\"class_m_g_p_u_event_list.html#a8692d830f89f7fb213410850e6e1bec6\">More...</a><br></td></tr>\n\
<tr class=\"separator:a8692d830f89f7fb213410850e6e1bec6\"><td class=\"memSeparator\" colspan=\"2\">&#160;</td></tr>\n\
<tr class=\"memitem:a61344b2abf47ba035328d5b82b74a0f1\"><td class=\"memItemLeft\" align=\"right\" valign=\"top\">void&#160;</td><td class=\"memItemRight\" valign=\"bottom\"><a class=\"el\" href=\"#!/url=./cpp_ref/class_m_g_p_u_event_list.html#a61344b2abf47ba035328d5b82b74a0f1\">add</a> (<a class=\"el\" href=\"#!/url=./cpp_ref/class_m_open_c_l_buffer.html\">MOpenCLBuffer</a> &amp;buf)</td></tr>\n\
<tr class=\"memdesc:a61344b2abf47ba035328d5b82b74a0f1\"><td class=\"mdescLeft\">&#160;</td><td class=\"mdescRight\">This method adds the bufferReadyEvent of a buffer to the list.  <a href=\"class_m_g_p_u_event_list.html#a61344b2abf47ba035328d5b82b74a0f1\">More...</a><br></td></tr>\n\
<tr class=\"separator:a61344b2abf47ba035328d5b82b74a0f1\"><td class=\"memSeparator\" colspan=\"2\">&#160;</td></tr>\n\
<tr class=\"memitem:ad249694f568f0d014f2e0285062c05bd\"><td class=\"memItemLeft\" align=\"right\" valign=\"top\">const cl_event *&#160;</td><td class=\"memItemRight\" valign=\"bottom\"><a class=\"el\" href=\"#!/url=./cpp_ref/class_m_g_p_u_event_list.html#ad249694f568f0d014f2e0285062c05bd\">array</a> () const </td></tr>\n\
<tr class=\"memdesc:ad249694f568f0d014f2e0285062c05bd\"><td class=\"mdescLeft\">&#160;</td><td class=\"mdescRight\">This method returns the array of events contained in the <a class=\"el\" href=\"#!/url=./cpp_ref/class_m_g_p_u_event_list.html\" title=\"Helper class to keep track of CL events. \">MGPUEventList</a>.  <a href=\"class_m_g_p_u_event_list.html#ad249694f568f0d014f2e0285062c05bd\">More...</a><br></td></tr>\n\
<tr class=\"separator:ad249694f568f0d014f2e0285062c05bd\"><td class=\"memSeparator\" colspan=\"2\">&#160;</td></tr>\n\
<tr class=\"memitem:ae2b6b45ee3c5562875d44e5c502f63c7\"><td class=\"memItemLeft\" align=\"right\" valign=\"top\">cl_uint&#160;</td><td class=\"memItemRight\" valign=\"bottom\"><a class=\"el\" href=\"#!/url=./cpp_ref/class_m_g_p_u_event_list.html#ae2b6b45ee3c5562875d44e5c502f63c7\">size</a> () const </td></tr>\n\
<tr class=\"memdesc:ae2b6b45ee3c5562875d44e5c502f63c7\"><td class=\"mdescLeft\">&#160;</td><td class=\"mdescRight\">This method returns the number of events contained in the <a class=\"el\" href=\"#!/url=./cpp_ref/class_m_g_p_u_event_list.html\" title=\"Helper class to keep track of CL events. \">MGPUEventList</a>.  <a href=\"class_m_g_p_u_event_list.html#ae2b6b45ee3c5562875d44e5c502f63c7\">More...</a><br></td></tr>\n\
<tr class=\"separator:ae2b6b45ee3c5562875d44e5c502f63c7\"><td class=\"memSeparator\" colspan=\"2\">&#160;</td></tr>\n\
</table>\n\
<a name=\"details\" id=\"details\"></a><h2 class=\"groupheader\">Detailed Description</h2>\n\
<div class=\"textblock\"><p>Helper class to keep track of CL events. </p>\n\
<p><a class=\"el\" href=\"#!/url=./cpp_ref/class_m_g_p_u_event_list.html\" title=\"Helper class to keep track of CL events. \">MGPUEventList</a> is a simple class to make it easier to manage an event wait list for kernels that are queued up. </p>\n\
<dl class=\"section \"><div id=\"dynsection-example0\" class=\"dynheader closed\" onclick=\"return toggleVisibility(this)\" style=\"cursor:pointer;\"><dt><img id=\"dynsection-example0-trigger\" src=\"cpp_ref/closed.png\" alt=\"+\"> <b>Examples: </b></dt></div><div id=\"dynsection-example0-content\" class=\"dyncontent\" style=\"display:none;\"><dd><a class=\"el\" href=\"#!/url=./cpp_ref/offset_node_2offset_node_8cpp-example.html#_a53\">offsetNode/offsetNode.cpp</a>.</dd></div>\n\
</dl></div><h2 class=\"groupheader\">Constructor &amp; Destructor Documentation</h2>\n\
<a class=\"anchor\" id=\"a59f620aea9c58683cb1eb71eeead4438\"></a>\n\
<div class=\"memitem\">\n\
<div class=\"memproto\">\n\
      <table class=\"memname\">\n\
        <tr>\n\
          <td class=\"memname\"><a class=\"el\" href=\"#!/url=./cpp_ref/class_m_g_p_u_event_list.html\">MGPUEventList</a> </td>\n\
          <td>(</td>\n\
          <td class=\"paramtype\">const <a class=\"el\" href=\"#!/url=./cpp_ref/class_m_g_p_u_event_list.html\">MGPUEventList</a> &amp;&#160;</td>\n\
          <td class=\"paramname\"><em>other</em></td><td>)</td>\n\
          <td></td>\n\
        </tr>\n\
      </table>\n\
</div><div class=\"memdoc\">\n\
\n\
<p>Constructs a <a class=\"el\" href=\"#!/url=./cpp_ref/class_m_g_p_u_event_list.html\" title=\"Helper class to keep track of CL events. \">MGPUEventList</a>. </p>\n\
<dl class=\"params\"><dt>Parameters</dt><dd>\n\
  <table class=\"params\">\n\
    <tr><td class=\"paramdir\">[in]</td><td class=\"paramname\">other</td><td>The <a class=\"el\" href=\"#!/url=./cpp_ref/class_m_g_p_u_event_list.html\" title=\"Helper class to keep track of CL events. \">MGPUEventList</a> to copy. </td></tr>\n\
  </table>\n\
  </dd>\n\
</dl>\n\
\n\
</div>\n\
</div>\n\
<h2 class=\"groupheader\">Member Function Documentation</h2>\n\
<a class=\"anchor\" id=\"a8692d830f89f7fb213410850e6e1bec6\"></a>\n\
<div class=\"memitem\">\n\
<div class=\"memproto\">\n\
      <table class=\"memname\">\n\
        <tr>\n\
          <td class=\"memname\">void add </td>\n\
          <td>(</td>\n\
          <td class=\"paramtype\">const <a class=\"el\" href=\"#!/url=./cpp_ref/class_m_auto_c_l_event.html\">MAutoCLEvent</a> &amp;&#160;</td>\n\
          <td class=\"paramname\"><em>event</em></td><td>)</td>\n\
          <td></td>\n\
        </tr>\n\
      </table>\n\
</div><div class=\"memdoc\">\n\
\n\
<p>This method adds a new event to the list. </p>\n\
<dl class=\"params\"><dt>Parameters</dt><dd>\n\
  <table class=\"params\">\n\
    <tr><td class=\"paramdir\">[in]</td><td class=\"paramname\">event</td><td>The event to add </td></tr>\n\
  </table>\n\
  </dd>\n\
</dl>\n\
<dl class=\"section \"><div id=\"dynsection-example1\" class=\"dynheader closed\" onclick=\"return toggleVisibility(this)\" style=\"cursor:pointer;\"><dt><img id=\"dynsection-example1-trigger\" src=\"cpp_ref/closed.png\" alt=\"+\"> <b>Examples: </b></dt></div><div id=\"dynsection-example1-content\" class=\"dyncontent\" style=\"display:none;\"><dd><a class=\"el\" href=\"#!/url=./cpp_ref/offset_node_2offset_node_8cpp-example.html#a54\">offsetNode/offsetNode.cpp</a>.</dd></div>\n\
</dl>\n\
</div>\n\
</div>\n\
<a class=\"anchor\" id=\"a61344b2abf47ba035328d5b82b74a0f1\"></a>\n\
<div class=\"memitem\">\n\
<div class=\"memproto\">\n\
      <table class=\"memname\">\n\
        <tr>\n\
          <td class=\"memname\">void add </td>\n\
          <td>(</td>\n\
          <td class=\"paramtype\"><a class=\"el\" href=\"#!/url=./cpp_ref/class_m_open_c_l_buffer.html\">MOpenCLBuffer</a> &amp;&#160;</td>\n\
          <td class=\"paramname\"><em>buf</em></td><td>)</td>\n\
          <td></td>\n\
        </tr>\n\
      </table>\n\
</div><div class=\"memdoc\">\n\
\n\
<p>This method adds the bufferReadyEvent of a buffer to the list. </p>\n\
<dl class=\"params\"><dt>Parameters</dt><dd>\n\
  <table class=\"params\">\n\
    <tr><td class=\"paramdir\">[in]</td><td class=\"paramname\">buf</td><td>The buffer of which we want to add the bufferReadyEvent </td></tr>\n\
  </table>\n\
  </dd>\n\
</dl>\n\
\n\
</div>\n\
</div>\n\
<a class=\"anchor\" id=\"ad249694f568f0d014f2e0285062c05bd\"></a>\n\
<div class=\"memitem\">\n\
<div class=\"memproto\">\n\
      <table class=\"memname\">\n\
        <tr>\n\
          <td class=\"memname\">const cl_event * array </td>\n\
          <td>(</td>\n\
          <td class=\"paramname\"></td><td>)</td>\n\
          <td> const</td>\n\
        </tr>\n\
      </table>\n\
</div><div class=\"memdoc\">\n\
\n\
<p>This method returns the array of events contained in the <a class=\"el\" href=\"#!/url=./cpp_ref/class_m_g_p_u_event_list.html\" title=\"Helper class to keep track of CL events. \">MGPUEventList</a>. </p>\n\
<dl class=\"section return\"><dt>Returns</dt><dd>the pointer to the array containg the events </dd></dl>\n\
<dl class=\"section \"><div id=\"dynsection-example2\" class=\"dynheader closed\" onclick=\"return toggleVisibility(this)\" style=\"cursor:pointer;\"><dt><img id=\"dynsection-example2-trigger\" src=\"cpp_ref/closed.png\" alt=\"+\"> <b>Examples: </b></dt></div><div id=\"dynsection-example2-content\" class=\"dyncontent\" style=\"display:none;\"><dd><a class=\"el\" href=\"#!/url=./cpp_ref/offset_node_2offset_node_8cpp-example.html#a59\">offsetNode/offsetNode.cpp</a>.</dd></div>\n\
</dl>\n\
</div>\n\
</div>\n\
<a class=\"anchor\" id=\"ae2b6b45ee3c5562875d44e5c502f63c7\"></a>\n\
<div class=\"memitem\">\n\
<div class=\"memproto\">\n\
      <table class=\"memname\">\n\
        <tr>\n\
          <td class=\"memname\">cl_uint size </td>\n\
          <td>(</td>\n\
          <td class=\"paramname\"></td><td>)</td>\n\
          <td> const</td>\n\
        </tr>\n\
      </table>\n\
</div><div class=\"memdoc\">\n\
\n\
<p>This method returns the number of events contained in the <a class=\"el\" href=\"#!/url=./cpp_ref/class_m_g_p_u_event_list.html\" title=\"Helper class to keep track of CL events. \">MGPUEventList</a>. </p>\n\
<dl class=\"section return\"><dt>Returns</dt><dd>the number of events </dd></dl>\n\
<dl class=\"section \"><div id=\"dynsection-example3\" class=\"dynheader closed\" onclick=\"return toggleVisibility(this)\" style=\"cursor:pointer;\"><dt><img id=\"dynsection-example3-trigger\" src=\"cpp_ref/closed.png\" alt=\"+\"> <b>Examples: </b></dt></div><div id=\"dynsection-example3-content\" class=\"dyncontent\" style=\"display:none;\"><dd><a class=\"el\" href=\"#!/url=./cpp_ref/offset_node_2offset_node_8cpp-example.html#a58\">offsetNode/offsetNode.cpp</a>.</dd></div>\n\
</dl>\n\
</div>\n\
</div>\n\
<hr>The documentation for this class was generated from the following files:<ul>\n\
<li>MPxGPUDeformer.h</li>\n\
<li>MPxGPUDeformer.cpp</li>\n\
</ul>\n\
</div><!-- contents -->\n\
</div><!-- doc-content -->\n\
<!-- start footer part -->\n\
\n\
      <div class=\"footer-block\"><a href=\"../html/ac.cmtdialog.htm\" class=\"comments-anchor\" target=\"_blank\"><span class=\"comments-link\">Please send us your comment about this page</span></a></div></div>\n\
   </div></body>\n\
</html>\n\
";