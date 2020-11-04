var topic = "<!-- saved from url=(0024)http://docs.autodesk.com -->\n\
<html>\n\
   <head><script src=\"../scripts/yepnope.1.5.4-min.js\" type=\"text/javascript\"></script><script src=\"../scripts/lib/jquery-1.11.1.min.js\" type=\"text/javascript\"></script>\n\
      <title>C++ API Reference: MAutoCLKernel Class Reference</title>\n\
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
    cpp_ref_adsk_ref_toc.initNavTree(\'class_m_auto_c_l_kernel.html\', tocPrefix);\n\
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
            <h1>C++ API Reference: MAutoCLKernel Class Reference</h1>\n\
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
<div class=\"title\">MAutoCLKernel Class Reference<div class=\"ingroups\"><a class=\"el\" href=\"#!/url=./cpp_ref/group___open_maya.html\">OpenMaya - API module for common classes</a></div></div>  </div>\n\
<div class=\"summary\">\n\
<a href=\"class_m_auto_c_l_kernel.html#pub-methods\">Public Member Functions</a> &#124;\n\
<a href=\"#!/url=./cpp_ref/class_m_auto_c_l_kernel-members.html\">List of all members</a>  </div></div><!--header-->\n\
<div class=\"contents\">\n\
\n\
<p>Auto pointer for cl_kernel objects.  \n\
 <a href=\"#!/url=./cpp_ref/class_m_auto_c_l_kernel.html#details\">More...</a></p>\n\
\n\
<p><code>#include &lt;MOpenCLAutoPtr.h&gt;</code></p>\n\
<table class=\"memberdecls\">\n\
<tr class=\"heading\"><td colspan=\"2\"><h2 class=\"groupheader\"><a name=\"pub-methods\"></a>\n\
Public Member Functions</h2></td></tr>\n\
<tr class=\"memitem:a3371c00046e124d335d3a337a6deef69\"><td class=\"memItemLeft\" align=\"right\" valign=\"top\"><a class=\"anchor\" id=\"a3371c00046e124d335d3a337a6deef69\"></a>\n\
&#160;</td><td class=\"memItemRight\" valign=\"bottom\"><a class=\"el\" href=\"#!/url=./cpp_ref/class_m_auto_c_l_kernel.html#a3371c00046e124d335d3a337a6deef69\">MAutoCLKernel</a> ()</td></tr>\n\
<tr class=\"memdesc:a3371c00046e124d335d3a337a6deef69\"><td class=\"mdescLeft\">&#160;</td><td class=\"mdescRight\">Construct a NULL <a class=\"el\" href=\"#!/url=./cpp_ref/class_m_auto_c_l_kernel.html\" title=\"Auto pointer for cl_kernel objects. \">MAutoCLKernel</a>. <br></td></tr>\n\
<tr class=\"separator:a3371c00046e124d335d3a337a6deef69\"><td class=\"memSeparator\" colspan=\"2\">&#160;</td></tr>\n\
<tr class=\"memitem:a2b7b3282a2a0c21a5e604a028960fe1b\"><td class=\"memItemLeft\" align=\"right\" valign=\"top\"><a class=\"anchor\" id=\"a2b7b3282a2a0c21a5e604a028960fe1b\"></a>\n\
&#160;</td><td class=\"memItemRight\" valign=\"bottom\"><a class=\"el\" href=\"#!/url=./cpp_ref/class_m_auto_c_l_kernel.html#a2b7b3282a2a0c21a5e604a028960fe1b\">~MAutoCLKernel</a> ()</td></tr>\n\
<tr class=\"memdesc:a2b7b3282a2a0c21a5e604a028960fe1b\"><td class=\"mdescLeft\">&#160;</td><td class=\"mdescRight\">Destructor. <br></td></tr>\n\
<tr class=\"separator:a2b7b3282a2a0c21a5e604a028960fe1b\"><td class=\"memSeparator\" colspan=\"2\">&#160;</td></tr>\n\
<tr class=\"memitem:aa60112efecb7ce79f3097695af3e0ce3\"><td class=\"memItemLeft\" align=\"right\" valign=\"top\">&#160;</td><td class=\"memItemRight\" valign=\"bottom\"><a class=\"el\" href=\"#!/url=./cpp_ref/class_m_auto_c_l_kernel.html#aa60112efecb7ce79f3097695af3e0ce3\">MAutoCLKernel</a> (const <a class=\"el\" href=\"#!/url=./cpp_ref/class_m_auto_c_l_kernel.html\">MAutoCLKernel</a> &amp;other)</td></tr>\n\
<tr class=\"memdesc:aa60112efecb7ce79f3097695af3e0ce3\"><td class=\"mdescLeft\">&#160;</td><td class=\"mdescRight\">The copy ctor increments the reference count of the cl_kernel.  <a href=\"class_m_auto_c_l_kernel.html#aa60112efecb7ce79f3097695af3e0ce3\">More...</a><br></td></tr>\n\
<tr class=\"separator:aa60112efecb7ce79f3097695af3e0ce3\"><td class=\"memSeparator\" colspan=\"2\">&#160;</td></tr>\n\
<tr class=\"memitem:a97dc81b848af40cbcaeb37976930a070\"><td class=\"memItemLeft\" align=\"right\" valign=\"top\"><a class=\"el\" href=\"#!/url=./cpp_ref/class_m_auto_c_l_kernel.html\">MAutoCLKernel</a> &amp;&#160;</td><td class=\"memItemRight\" valign=\"bottom\"><a class=\"el\" href=\"#!/url=./cpp_ref/class_m_auto_c_l_kernel.html#a97dc81b848af40cbcaeb37976930a070\">operator=</a> (const <a class=\"el\" href=\"#!/url=./cpp_ref/class_m_auto_c_l_kernel.html\">MAutoCLKernel</a> &amp;other)</td></tr>\n\
<tr class=\"memdesc:a97dc81b848af40cbcaeb37976930a070\"><td class=\"mdescLeft\">&#160;</td><td class=\"mdescRight\">The assignment operator increments the reference count of the cl_kernel.  <a href=\"class_m_auto_c_l_kernel.html#a97dc81b848af40cbcaeb37976930a070\">More...</a><br></td></tr>\n\
<tr class=\"separator:a97dc81b848af40cbcaeb37976930a070\"><td class=\"memSeparator\" colspan=\"2\">&#160;</td></tr>\n\
<tr class=\"memitem:ab8371e0aad5188f831c9ded0f6dd9d68\"><td class=\"memItemLeft\" align=\"right\" valign=\"top\">&#160;</td><td class=\"memItemRight\" valign=\"bottom\"><a class=\"el\" href=\"#!/url=./cpp_ref/class_m_auto_c_l_kernel.html#ab8371e0aad5188f831c9ded0f6dd9d68\">MAutoCLKernel</a> (cl_kernel value, NoRef dummy)</td></tr>\n\
<tr class=\"memdesc:ab8371e0aad5188f831c9ded0f6dd9d68\"><td class=\"mdescLeft\">&#160;</td><td class=\"mdescRight\">This ctor <b>does not</b> increment the reference count of value.  <a href=\"class_m_auto_c_l_kernel.html#ab8371e0aad5188f831c9ded0f6dd9d68\">More...</a><br></td></tr>\n\
<tr class=\"separator:ab8371e0aad5188f831c9ded0f6dd9d68\"><td class=\"memSeparator\" colspan=\"2\">&#160;</td></tr>\n\
<tr class=\"memitem:ad202067c2631e51f9417800d7e871d25\"><td class=\"memItemLeft\" align=\"right\" valign=\"top\">void&#160;</td><td class=\"memItemRight\" valign=\"bottom\"><a class=\"el\" href=\"#!/url=./cpp_ref/class_m_auto_c_l_kernel.html#ad202067c2631e51f9417800d7e871d25\">attach</a> (cl_kernel value)</td></tr>\n\
<tr class=\"memdesc:ad202067c2631e51f9417800d7e871d25\"><td class=\"mdescLeft\">&#160;</td><td class=\"mdescRight\">This method causes the \"this\" object to take over lifetime management for value.  <a href=\"class_m_auto_c_l_kernel.html#ad202067c2631e51f9417800d7e871d25\">More...</a><br></td></tr>\n\
<tr class=\"separator:ad202067c2631e51f9417800d7e871d25\"><td class=\"memSeparator\" colspan=\"2\">&#160;</td></tr>\n\
<tr class=\"memitem:a0491c79bbc9266cd9df8df76dec80726\"><td class=\"memItemLeft\" align=\"right\" valign=\"top\">cl_kernel&#160;</td><td class=\"memItemRight\" valign=\"bottom\"><a class=\"el\" href=\"#!/url=./cpp_ref/class_m_auto_c_l_kernel.html#a0491c79bbc9266cd9df8df76dec80726\">detach</a> ()</td></tr>\n\
<tr class=\"memdesc:a0491c79bbc9266cd9df8df76dec80726\"><td class=\"mdescLeft\">&#160;</td><td class=\"mdescRight\">This method causes the \"this\" object to stop managing the lifetime of its current cl_kernel.  <a href=\"class_m_auto_c_l_kernel.html#a0491c79bbc9266cd9df8df76dec80726\">More...</a><br></td></tr>\n\
<tr class=\"separator:a0491c79bbc9266cd9df8df76dec80726\"><td class=\"memSeparator\" colspan=\"2\">&#160;</td></tr>\n\
<tr class=\"memitem:ad20897c5c8bd47f5d4005989bead0e55\"><td class=\"memItemLeft\" align=\"right\" valign=\"top\">void&#160;</td><td class=\"memItemRight\" valign=\"bottom\"><a class=\"el\" href=\"#!/url=./cpp_ref/class_m_auto_c_l_kernel.html#ad20897c5c8bd47f5d4005989bead0e55\">reset</a> ()</td></tr>\n\
<tr class=\"memdesc:ad20897c5c8bd47f5d4005989bead0e55\"><td class=\"mdescLeft\">&#160;</td><td class=\"mdescRight\">This method causes the \"this\" object to stop managing the lifetime of its current cl_kernel.  <a href=\"class_m_auto_c_l_kernel.html#ad20897c5c8bd47f5d4005989bead0e55\">More...</a><br></td></tr>\n\
<tr class=\"separator:ad20897c5c8bd47f5d4005989bead0e55\"><td class=\"memSeparator\" colspan=\"2\">&#160;</td></tr>\n\
<tr class=\"memitem:a961a0b8c6fea141f8b57b7e48610db77\"><td class=\"memItemLeft\" align=\"right\" valign=\"top\">cl_kernel&#160;</td><td class=\"memItemRight\" valign=\"bottom\"><a class=\"el\" href=\"#!/url=./cpp_ref/class_m_auto_c_l_kernel.html#a961a0b8c6fea141f8b57b7e48610db77\">get</a> () const </td></tr>\n\
<tr class=\"memdesc:a961a0b8c6fea141f8b57b7e48610db77\"><td class=\"mdescLeft\">&#160;</td><td class=\"mdescRight\">This method returns the current cl_kernel whose lifetime is being managed by the \"this\" object.  <a href=\"class_m_auto_c_l_kernel.html#a961a0b8c6fea141f8b57b7e48610db77\">More...</a><br></td></tr>\n\
<tr class=\"separator:a961a0b8c6fea141f8b57b7e48610db77\"><td class=\"memSeparator\" colspan=\"2\">&#160;</td></tr>\n\
<tr class=\"memitem:ac02f2a4d7312eb91f40980adfd4e31b2\"><td class=\"memItemLeft\" align=\"right\" valign=\"top\">bool&#160;</td><td class=\"memItemRight\" valign=\"bottom\"><a class=\"el\" href=\"#!/url=./cpp_ref/class_m_auto_c_l_kernel.html#ac02f2a4d7312eb91f40980adfd4e31b2\">isNull</a> () const </td></tr>\n\
<tr class=\"memdesc:ac02f2a4d7312eb91f40980adfd4e31b2\"><td class=\"mdescLeft\">&#160;</td><td class=\"mdescRight\">This method checks if the \"this\" object actually manages a non-null cl_kernel object.  <a href=\"class_m_auto_c_l_kernel.html#ac02f2a4d7312eb91f40980adfd4e31b2\">More...</a><br></td></tr>\n\
<tr class=\"separator:ac02f2a4d7312eb91f40980adfd4e31b2\"><td class=\"memSeparator\" colspan=\"2\">&#160;</td></tr>\n\
<tr class=\"memitem:a61c361c2ba88ce10a332238d9547837c\"><td class=\"memItemLeft\" align=\"right\" valign=\"top\">const cl_kernel *&#160;</td><td class=\"memItemRight\" valign=\"bottom\"><a class=\"el\" href=\"#!/url=./cpp_ref/class_m_auto_c_l_kernel.html#a61c361c2ba88ce10a332238d9547837c\">getReadOnlyRef</a> () const </td></tr>\n\
<tr class=\"memdesc:a61c361c2ba88ce10a332238d9547837c\"><td class=\"mdescLeft\">&#160;</td><td class=\"mdescRight\">This method returns a const pointer to the cl_kernel whose lifetime is being managed by the \"this\" object.  <a href=\"class_m_auto_c_l_kernel.html#a61c361c2ba88ce10a332238d9547837c\">More...</a><br></td></tr>\n\
<tr class=\"separator:a61c361c2ba88ce10a332238d9547837c\"><td class=\"memSeparator\" colspan=\"2\">&#160;</td></tr>\n\
<tr class=\"memitem:a2b6127b171413e55dbfac53f8768e218\"><td class=\"memItemLeft\" align=\"right\" valign=\"top\">cl_kernel *&#160;</td><td class=\"memItemRight\" valign=\"bottom\"><a class=\"el\" href=\"#!/url=./cpp_ref/class_m_auto_c_l_kernel.html#a2b6127b171413e55dbfac53f8768e218\">getReferenceForAssignment</a> ()</td></tr>\n\
<tr class=\"memdesc:a2b6127b171413e55dbfac53f8768e218\"><td class=\"mdescLeft\">&#160;</td><td class=\"mdescRight\">This method returns a pointer to the memory appropriate for storing a cl_kernel.  <a href=\"class_m_auto_c_l_kernel.html#a2b6127b171413e55dbfac53f8768e218\">More...</a><br></td></tr>\n\
<tr class=\"separator:a2b6127b171413e55dbfac53f8768e218\"><td class=\"memSeparator\" colspan=\"2\">&#160;</td></tr>\n\
<tr class=\"memitem:af5944649c664e4801bd99185aef42545\"><td class=\"memItemLeft\" align=\"right\" valign=\"top\">bool&#160;</td><td class=\"memItemRight\" valign=\"bottom\"><a class=\"el\" href=\"#!/url=./cpp_ref/class_m_auto_c_l_kernel.html#af5944649c664e4801bd99185aef42545\">operator==</a> (const <a class=\"el\" href=\"#!/url=./cpp_ref/class_m_auto_c_l_kernel.html\">MAutoCLKernel</a> &amp;other) const </td></tr>\n\
<tr class=\"memdesc:af5944649c664e4801bd99185aef42545\"><td class=\"mdescLeft\">&#160;</td><td class=\"mdescRight\">operator equal  <a href=\"class_m_auto_c_l_kernel.html#af5944649c664e4801bd99185aef42545\">More...</a><br></td></tr>\n\
<tr class=\"separator:af5944649c664e4801bd99185aef42545\"><td class=\"memSeparator\" colspan=\"2\">&#160;</td></tr>\n\
<tr class=\"memitem:aea65da222d3308d4336a6c3eaf249337\"><td class=\"memItemLeft\" align=\"right\" valign=\"top\">bool&#160;</td><td class=\"memItemRight\" valign=\"bottom\"><a class=\"el\" href=\"#!/url=./cpp_ref/class_m_auto_c_l_kernel.html#aea65da222d3308d4336a6c3eaf249337\">operator==</a> (cl_kernel other) const </td></tr>\n\
<tr class=\"memdesc:aea65da222d3308d4336a6c3eaf249337\"><td class=\"mdescLeft\">&#160;</td><td class=\"mdescRight\">operator equal  <a href=\"class_m_auto_c_l_kernel.html#aea65da222d3308d4336a6c3eaf249337\">More...</a><br></td></tr>\n\
<tr class=\"separator:aea65da222d3308d4336a6c3eaf249337\"><td class=\"memSeparator\" colspan=\"2\">&#160;</td></tr>\n\
<tr class=\"memitem:ac8b1d32dbd52d431450c70b151cfa205\"><td class=\"memItemLeft\" align=\"right\" valign=\"top\">bool&#160;</td><td class=\"memItemRight\" valign=\"bottom\"><a class=\"el\" href=\"#!/url=./cpp_ref/class_m_auto_c_l_kernel.html#ac8b1d32dbd52d431450c70b151cfa205\">operator!</a> () const </td></tr>\n\
<tr class=\"memdesc:ac8b1d32dbd52d431450c70b151cfa205\"><td class=\"mdescLeft\">&#160;</td><td class=\"mdescRight\">operator not  <a href=\"class_m_auto_c_l_kernel.html#ac8b1d32dbd52d431450c70b151cfa205\">More...</a><br></td></tr>\n\
<tr class=\"separator:ac8b1d32dbd52d431450c70b151cfa205\"><td class=\"memSeparator\" colspan=\"2\">&#160;</td></tr>\n\
<tr class=\"memitem:a62aecc1b12650795e1dba36afef58c0f\"><td class=\"memItemLeft\" align=\"right\" valign=\"top\">void&#160;</td><td class=\"memItemRight\" valign=\"bottom\"><a class=\"el\" href=\"#!/url=./cpp_ref/class_m_auto_c_l_kernel.html#a62aecc1b12650795e1dba36afef58c0f\">swap</a> (<a class=\"el\" href=\"#!/url=./cpp_ref/class_m_auto_c_l_kernel.html\">MAutoCLKernel</a> &amp;other)</td></tr>\n\
<tr class=\"memdesc:a62aecc1b12650795e1dba36afef58c0f\"><td class=\"mdescLeft\">&#160;</td><td class=\"mdescRight\">This method swaps the cl_kernel managed by the \"this\" object with the cl_kernel managed by the other object.  <a href=\"class_m_auto_c_l_kernel.html#a62aecc1b12650795e1dba36afef58c0f\">More...</a><br></td></tr>\n\
<tr class=\"separator:a62aecc1b12650795e1dba36afef58c0f\"><td class=\"memSeparator\" colspan=\"2\">&#160;</td></tr>\n\
<tr class=\"memitem:afc865c97d932ccae5998f64cf61d5c18\"><td class=\"memItemLeft\" align=\"right\" valign=\"top\">bool&#160;</td><td class=\"memItemRight\" valign=\"bottom\"><a class=\"el\" href=\"#!/url=./cpp_ref/class_m_auto_c_l_kernel.html#afc865c97d932ccae5998f64cf61d5c18\">operator&lt;</a> (const <a class=\"el\" href=\"#!/url=./cpp_ref/class_m_auto_c_l_kernel.html\">MAutoCLKernel</a> &amp;other) const </td></tr>\n\
<tr class=\"memdesc:afc865c97d932ccae5998f64cf61d5c18\"><td class=\"mdescLeft\">&#160;</td><td class=\"mdescRight\">operator less than  <a href=\"class_m_auto_c_l_kernel.html#afc865c97d932ccae5998f64cf61d5c18\">More...</a><br></td></tr>\n\
<tr class=\"separator:afc865c97d932ccae5998f64cf61d5c18\"><td class=\"memSeparator\" colspan=\"2\">&#160;</td></tr>\n\
</table>\n\
<a name=\"details\" id=\"details\"></a><h2 class=\"groupheader\">Detailed Description</h2>\n\
<div class=\"textblock\"><p>Auto pointer for cl_kernel objects. </p>\n\
<p>cl_kernel objects in openCL are reference-counted objects. When created, a cl_kernel has a preexisting reference count of 1. An <a class=\"el\" href=\"#!/url=./cpp_ref/class_m_auto_c_l_kernel.html\" title=\"Auto pointer for cl_kernel objects. \">MAutoCLKernel</a> object <b>does not</b> need to increment the reference count when it takes over ownership of a cl_kernel from OpenCL. An <a class=\"el\" href=\"#!/url=./cpp_ref/class_m_auto_c_l_kernel.html\" title=\"Auto pointer for cl_kernel objects. \">MAutoCLKernel</a> object <b>does</b> need to increment the reference count of a cl_kernel object when the cl_kernel is shared between <a class=\"el\" href=\"#!/url=./cpp_ref/class_m_auto_c_l_kernel.html\" title=\"Auto pointer for cl_kernel objects. \">MAutoCLKernel</a> objects.</p>\n\
<p>Always use <a class=\"el\" href=\"#!/url=./cpp_ref/class_m_auto_c_l_kernel.html\" title=\"Auto pointer for cl_kernel objects. \">MAutoCLKernel</a> objects in user code. Only use raw cl_kernel handle when you use the OpenCL API.</p>\n\
<p>Assignment or construction with a raw cl_kernel <b>DOES NOT</b> increment the reference count. Assignment or construction from another <a class=\"el\" href=\"#!/url=./cpp_ref/class_m_auto_c_l_kernel.html\" title=\"Auto pointer for cl_kernel objects. \">MAutoCLKernel</a> <b>DOES</b> increment the reference count. </p>\n\
<dl class=\"section \"><div id=\"dynsection-example0\" class=\"dynheader closed\" onclick=\"return toggleVisibility(this)\" style=\"cursor:pointer;\"><dt><img id=\"dynsection-example0-trigger\" src=\"cpp_ref/closed.png\" alt=\"+\"> <b>Examples: </b></dt></div><div id=\"dynsection-example0-content\" class=\"dyncontent\" style=\"display:none;\"><dd><a class=\"el\" href=\"#!/url=./cpp_ref/identity_node_2identity_node_8cpp-example.html#_a21\">identityNode/identityNode.cpp</a>, and <a class=\"el\" href=\"#!/url=./cpp_ref/offset_node_2offset_node_8cpp-example.html#_a46\">offsetNode/offsetNode.cpp</a>.</dd></div>\n\
</dl></div><h2 class=\"groupheader\">Constructor &amp; Destructor Documentation</h2>\n\
<a class=\"anchor\" id=\"aa60112efecb7ce79f3097695af3e0ce3\"></a>\n\
<div class=\"memitem\">\n\
<div class=\"memproto\">\n\
      <table class=\"memname\">\n\
        <tr>\n\
          <td class=\"memname\"><a class=\"el\" href=\"#!/url=./cpp_ref/class_m_auto_c_l_kernel.html\">MAutoCLKernel</a> </td>\n\
          <td>(</td>\n\
          <td class=\"paramtype\">const <a class=\"el\" href=\"#!/url=./cpp_ref/class_m_auto_c_l_kernel.html\">MAutoCLKernel</a> &amp;&#160;</td>\n\
          <td class=\"paramname\"><em>other</em></td><td>)</td>\n\
          <td></td>\n\
        </tr>\n\
      </table>\n\
</div><div class=\"memdoc\">\n\
\n\
<p>The copy ctor increments the reference count of the cl_kernel. </p>\n\
<dl class=\"params\"><dt>Parameters</dt><dd>\n\
  <table class=\"params\">\n\
    <tr><td class=\"paramdir\">[in]</td><td class=\"paramname\">other</td><td>The <a class=\"el\" href=\"#!/url=./cpp_ref/class_m_auto_c_l_kernel.html\" title=\"Auto pointer for cl_kernel objects. \">MAutoCLKernel</a> to be copied. </td></tr>\n\
  </table>\n\
  </dd>\n\
</dl>\n\
\n\
</div>\n\
</div>\n\
<a class=\"anchor\" id=\"ab8371e0aad5188f831c9ded0f6dd9d68\"></a>\n\
<div class=\"memitem\">\n\
<div class=\"memproto\">\n\
      <table class=\"memname\">\n\
        <tr>\n\
          <td class=\"memname\"><a class=\"el\" href=\"#!/url=./cpp_ref/class_m_auto_c_l_kernel.html\">MAutoCLKernel</a> </td>\n\
          <td>(</td>\n\
          <td class=\"paramtype\">cl_kernel&#160;</td>\n\
          <td class=\"paramname\"><em>value</em>, </td>\n\
        </tr>\n\
        <tr>\n\
          <td class=\"paramkey\"></td>\n\
          <td></td>\n\
          <td class=\"paramtype\">NoRef&#160;</td>\n\
          <td class=\"paramname\"><em>dummy</em>&#160;</td>\n\
        </tr>\n\
        <tr>\n\
          <td></td>\n\
          <td>)</td>\n\
          <td></td><td></td>\n\
        </tr>\n\
      </table>\n\
</div><div class=\"memdoc\">\n\
\n\
<p>This ctor <b>does not</b> increment the reference count of value. </p>\n\
<p>The dummy parameter is included to prevent accidental use the ctor.</p>\n\
<dl class=\"params\"><dt>Parameters</dt><dd>\n\
  <table class=\"params\">\n\
    <tr><td class=\"paramdir\">[in]</td><td class=\"paramname\">value</td><td>The cl_kernel that the \"this\" object manages of the lifetime of. </td></tr>\n\
    <tr><td class=\"paramdir\">[in]</td><td class=\"paramname\">dummy</td><td>A dummy parameter to make this ctor difficult to call by accident. </td></tr>\n\
  </table>\n\
  </dd>\n\
</dl>\n\
\n\
</div>\n\
</div>\n\
<h2 class=\"groupheader\">Member Function Documentation</h2>\n\
<a class=\"anchor\" id=\"a97dc81b848af40cbcaeb37976930a070\"></a>\n\
<div class=\"memitem\">\n\
<div class=\"memproto\">\n\
      <table class=\"memname\">\n\
        <tr>\n\
          <td class=\"memname\"><a class=\"el\" href=\"#!/url=./cpp_ref/class_m_auto_c_l_kernel.html\">MAutoCLKernel</a> &amp; operator= </td>\n\
          <td>(</td>\n\
          <td class=\"paramtype\">const <a class=\"el\" href=\"#!/url=./cpp_ref/class_m_auto_c_l_kernel.html\">MAutoCLKernel</a> &amp;&#160;</td>\n\
          <td class=\"paramname\"><em>other</em></td><td>)</td>\n\
          <td></td>\n\
        </tr>\n\
      </table>\n\
</div><div class=\"memdoc\">\n\
\n\
<p>The assignment operator increments the reference count of the cl_kernel. </p>\n\
<dl class=\"params\"><dt>Parameters</dt><dd>\n\
  <table class=\"params\">\n\
    <tr><td class=\"paramdir\">[in]</td><td class=\"paramname\">other</td><td>The <a class=\"el\" href=\"#!/url=./cpp_ref/class_m_auto_c_l_kernel.html\" title=\"Auto pointer for cl_kernel objects. \">MAutoCLKernel</a> to be assigned to the \"this\" object. </td></tr>\n\
  </table>\n\
  </dd>\n\
</dl>\n\
\n\
</div>\n\
</div>\n\
<a class=\"anchor\" id=\"ad202067c2631e51f9417800d7e871d25\"></a>\n\
<div class=\"memitem\">\n\
<div class=\"memproto\">\n\
      <table class=\"memname\">\n\
        <tr>\n\
          <td class=\"memname\">void attach </td>\n\
          <td>(</td>\n\
          <td class=\"paramtype\">cl_kernel&#160;</td>\n\
          <td class=\"paramname\"><em>value</em></td><td>)</td>\n\
          <td></td>\n\
        </tr>\n\
      </table>\n\
</div><div class=\"memdoc\">\n\
\n\
<p>This method causes the \"this\" object to take over lifetime management for value. </p>\n\
<p>The reference count of value is not modified by <a class=\"el\" href=\"#!/url=./cpp_ref/class_m_auto_c_l_kernel.html#ad202067c2631e51f9417800d7e871d25\" title=\"This method causes the &quot;this&quot; object to take over lifetime management for value. \">attach()</a>. If \"this\" object already manages the lifetime of a cl_kernel object, the reference count of the old cl_kernel is decremented.</p>\n\
<dl class=\"params\"><dt>Parameters</dt><dd>\n\
  <table class=\"params\">\n\
    <tr><td class=\"paramdir\">[in]</td><td class=\"paramname\">value</td><td>The cl_kernel the \"this\" object should manage the lifetime of. </td></tr>\n\
  </table>\n\
  </dd>\n\
</dl>\n\
\n\
</div>\n\
</div>\n\
<a class=\"anchor\" id=\"a0491c79bbc9266cd9df8df76dec80726\"></a>\n\
<div class=\"memitem\">\n\
<div class=\"memproto\">\n\
      <table class=\"memname\">\n\
        <tr>\n\
          <td class=\"memname\">cl_kernel detach </td>\n\
          <td>(</td>\n\
          <td class=\"paramname\"></td><td>)</td>\n\
          <td></td>\n\
        </tr>\n\
      </table>\n\
</div><div class=\"memdoc\">\n\
\n\
<p>This method causes the \"this\" object to stop managing the lifetime of its current cl_kernel. </p>\n\
<p>The reference count of the cl_kernel is not modified by <a class=\"el\" href=\"#!/url=./cpp_ref/class_m_auto_c_l_kernel.html#a0491c79bbc9266cd9df8df76dec80726\" title=\"This method causes the &quot;this&quot; object to stop managing the lifetime of its current cl_kernel...\">detach()</a>.</p>\n\
<dl class=\"section return\"><dt>Returns</dt><dd>The cl_kernel that was being managed by the \"this\" object. </dd></dl>\n\
\n\
</div>\n\
</div>\n\
<a class=\"anchor\" id=\"ad20897c5c8bd47f5d4005989bead0e55\"></a>\n\
<div class=\"memitem\">\n\
<div class=\"memproto\">\n\
      <table class=\"memname\">\n\
        <tr>\n\
          <td class=\"memname\">void reset </td>\n\
          <td>(</td>\n\
          <td class=\"paramname\"></td><td>)</td>\n\
          <td></td>\n\
        </tr>\n\
      </table>\n\
</div><div class=\"memdoc\">\n\
\n\
<p>This method causes the \"this\" object to stop managing the lifetime of its current cl_kernel. </p>\n\
<p>The reference count of the cl_kernel is decremented. </p>\n\
\n\
</div>\n\
</div>\n\
<a class=\"anchor\" id=\"a961a0b8c6fea141f8b57b7e48610db77\"></a>\n\
<div class=\"memitem\">\n\
<div class=\"memproto\">\n\
      <table class=\"memname\">\n\
        <tr>\n\
          <td class=\"memname\">cl_kernel get </td>\n\
          <td>(</td>\n\
          <td class=\"paramname\"></td><td>)</td>\n\
          <td> const</td>\n\
        </tr>\n\
      </table>\n\
</div><div class=\"memdoc\">\n\
\n\
<p>This method returns the current cl_kernel whose lifetime is being managed by the \"this\" object. </p>\n\
<p>The reference count of the cl_kernel is not modified by <a class=\"el\" href=\"#!/url=./cpp_ref/class_m_auto_c_l_kernel.html#a961a0b8c6fea141f8b57b7e48610db77\" title=\"This method returns the current cl_kernel whose lifetime is being managed by the &quot;this&quot; object...\">get()</a>.</p>\n\
<dl class=\"section return\"><dt>Returns</dt><dd>The cl_kernel being managed by the \"this\" object. </dd></dl>\n\
\n\
</div>\n\
</div>\n\
<a class=\"anchor\" id=\"ac02f2a4d7312eb91f40980adfd4e31b2\"></a>\n\
<div class=\"memitem\">\n\
<div class=\"memproto\">\n\
      <table class=\"memname\">\n\
        <tr>\n\
          <td class=\"memname\">bool isNull </td>\n\
          <td>(</td>\n\
          <td class=\"paramname\"></td><td>)</td>\n\
          <td> const</td>\n\
        </tr>\n\
      </table>\n\
</div><div class=\"memdoc\">\n\
\n\
<p>This method checks if the \"this\" object actually manages a non-null cl_kernel object. </p>\n\
<dl class=\"section return\"><dt>Returns</dt><dd>True if the \"this\" object manages a non-null cl_kernel object. </dd></dl>\n\
<dl class=\"section \"><div id=\"dynsection-example1\" class=\"dynheader closed\" onclick=\"return toggleVisibility(this)\" style=\"cursor:pointer;\"><dt><img id=\"dynsection-example1-trigger\" src=\"cpp_ref/closed.png\" alt=\"+\"> <b>Examples: </b></dt></div><div id=\"dynsection-example1-content\" class=\"dyncontent\" style=\"display:none;\"><dd><a class=\"el\" href=\"#!/url=./cpp_ref/identity_node_2identity_node_8cpp-example.html#a32\">identityNode/identityNode.cpp</a>.</dd></div>\n\
</dl>\n\
</div>\n\
</div>\n\
<a class=\"anchor\" id=\"a61c361c2ba88ce10a332238d9547837c\"></a>\n\
<div class=\"memitem\">\n\
<div class=\"memproto\">\n\
      <table class=\"memname\">\n\
        <tr>\n\
          <td class=\"memname\">const cl_kernel * getReadOnlyRef </td>\n\
          <td>(</td>\n\
          <td class=\"paramname\"></td><td>)</td>\n\
          <td> const</td>\n\
        </tr>\n\
      </table>\n\
</div><div class=\"memdoc\">\n\
\n\
<p>This method returns a const pointer to the cl_kernel whose lifetime is being managed by the \"this\" object. </p>\n\
<p>The reference count of the cl_kernel is not modified.</p>\n\
<dl class=\"section return\"><dt>Returns</dt><dd>A pointer to the cl_kernel managed by the \"this\" object. </dd></dl>\n\
\n\
</div>\n\
</div>\n\
<a class=\"anchor\" id=\"a2b6127b171413e55dbfac53f8768e218\"></a>\n\
<div class=\"memitem\">\n\
<div class=\"memproto\">\n\
      <table class=\"memname\">\n\
        <tr>\n\
          <td class=\"memname\">cl_kernel * getReferenceForAssignment </td>\n\
          <td>(</td>\n\
          <td class=\"paramname\"></td><td>)</td>\n\
          <td></td>\n\
        </tr>\n\
      </table>\n\
</div><div class=\"memdoc\">\n\
\n\
<p>This method returns a pointer to the memory appropriate for storing a cl_kernel. </p>\n\
<p><a class=\"el\" href=\"#!/url=./cpp_ref/class_m_auto_c_l_kernel.html#a2b6127b171413e55dbfac53f8768e218\" title=\"This method returns a pointer to the memory appropriate for storing a cl_kernel. \">getReferenceForAssignment()</a> decrements the reference count of the cl_kernel before returning, which means it is not safe to dereference the returned value. The \"this\" object manages the lifetime of the cl_kernel stored in the returned pointer.</p>\n\
<dl class=\"section return\"><dt>Returns</dt><dd>A pointer to memory appropriate for storing a cl_kernel. </dd></dl>\n\
\n\
</div>\n\
</div>\n\
<a class=\"anchor\" id=\"af5944649c664e4801bd99185aef42545\"></a>\n\
<div class=\"memitem\">\n\
<div class=\"memproto\">\n\
      <table class=\"memname\">\n\
        <tr>\n\
          <td class=\"memname\">bool operator== </td>\n\
          <td>(</td>\n\
          <td class=\"paramtype\">const <a class=\"el\" href=\"#!/url=./cpp_ref/class_m_auto_c_l_kernel.html\">MAutoCLKernel</a> &amp;&#160;</td>\n\
          <td class=\"paramname\"><em>other</em></td><td>)</td>\n\
          <td> const</td>\n\
        </tr>\n\
      </table>\n\
</div><div class=\"memdoc\">\n\
\n\
<p>operator equal </p>\n\
<dl class=\"params\"><dt>Parameters</dt><dd>\n\
  <table class=\"params\">\n\
    <tr><td class=\"paramdir\">[in]</td><td class=\"paramname\">other</td><td>The <a class=\"el\" href=\"#!/url=./cpp_ref/class_m_auto_c_l_kernel.html\" title=\"Auto pointer for cl_kernel objects. \">MAutoCLKernel</a> to compare with the \"this\" object.</td></tr>\n\
  </table>\n\
  </dd>\n\
</dl>\n\
<dl class=\"section return\"><dt>Returns</dt><dd>True if the cl_kernel managed by the \"this\" object is the same as the cl_kernel managed by the other object. </dd></dl>\n\
\n\
</div>\n\
</div>\n\
<a class=\"anchor\" id=\"aea65da222d3308d4336a6c3eaf249337\"></a>\n\
<div class=\"memitem\">\n\
<div class=\"memproto\">\n\
      <table class=\"memname\">\n\
        <tr>\n\
          <td class=\"memname\">bool operator== </td>\n\
          <td>(</td>\n\
          <td class=\"paramtype\">cl_kernel&#160;</td>\n\
          <td class=\"paramname\"><em>other</em></td><td>)</td>\n\
          <td> const</td>\n\
        </tr>\n\
      </table>\n\
</div><div class=\"memdoc\">\n\
\n\
<p>operator equal </p>\n\
<dl class=\"params\"><dt>Parameters</dt><dd>\n\
  <table class=\"params\">\n\
    <tr><td class=\"paramdir\">[in]</td><td class=\"paramname\">other</td><td>The cl_kernel that compares with the \"this\" object.</td></tr>\n\
  </table>\n\
  </dd>\n\
</dl>\n\
<dl class=\"section return\"><dt>Returns</dt><dd>True if the cl_kernel managed by the \"this\" object is other. </dd></dl>\n\
\n\
</div>\n\
</div>\n\
<a class=\"anchor\" id=\"ac8b1d32dbd52d431450c70b151cfa205\"></a>\n\
<div class=\"memitem\">\n\
<div class=\"memproto\">\n\
      <table class=\"memname\">\n\
        <tr>\n\
          <td class=\"memname\">bool operator! </td>\n\
          <td>(</td>\n\
          <td class=\"paramname\"></td><td>)</td>\n\
          <td> const</td>\n\
        </tr>\n\
      </table>\n\
</div><div class=\"memdoc\">\n\
\n\
<p>operator not </p>\n\
<dl class=\"section return\"><dt>Returns</dt><dd>True if the cl_kernel managed by the \"this\" object is NULL. </dd></dl>\n\
\n\
</div>\n\
</div>\n\
<a class=\"anchor\" id=\"a62aecc1b12650795e1dba36afef58c0f\"></a>\n\
<div class=\"memitem\">\n\
<div class=\"memproto\">\n\
      <table class=\"memname\">\n\
        <tr>\n\
          <td class=\"memname\">void swap </td>\n\
          <td>(</td>\n\
          <td class=\"paramtype\"><a class=\"el\" href=\"#!/url=./cpp_ref/class_m_auto_c_l_kernel.html\">MAutoCLKernel</a> &amp;&#160;</td>\n\
          <td class=\"paramname\"><em>other</em></td><td>)</td>\n\
          <td></td>\n\
        </tr>\n\
      </table>\n\
</div><div class=\"memdoc\">\n\
\n\
<p>This method swaps the cl_kernel managed by the \"this\" object with the cl_kernel managed by the other object. </p>\n\
<p><a class=\"el\" href=\"#!/url=./cpp_ref/class_m_auto_c_l_kernel.html#a62aecc1b12650795e1dba36afef58c0f\" title=\"This method swaps the cl_kernel managed by the &quot;this&quot; object with the cl_kernel managed by the other ...\">swap()</a> does not modify the reference counts of either cl_kernel object.</p>\n\
<dl class=\"params\"><dt>Parameters</dt><dd>\n\
  <table class=\"params\">\n\
    <tr><td class=\"paramdir\">[in]</td><td class=\"paramname\">other</td><td>The <a class=\"el\" href=\"#!/url=./cpp_ref/class_m_auto_c_l_kernel.html\" title=\"Auto pointer for cl_kernel objects. \">MAutoCLKernel</a> to swap cl_kernel\'s with. </td></tr>\n\
  </table>\n\
  </dd>\n\
</dl>\n\
\n\
</div>\n\
</div>\n\
<a class=\"anchor\" id=\"afc865c97d932ccae5998f64cf61d5c18\"></a>\n\
<div class=\"memitem\">\n\
<div class=\"memproto\">\n\
      <table class=\"memname\">\n\
        <tr>\n\
          <td class=\"memname\">bool operator&lt; </td>\n\
          <td>(</td>\n\
          <td class=\"paramtype\">const <a class=\"el\" href=\"#!/url=./cpp_ref/class_m_auto_c_l_kernel.html\">MAutoCLKernel</a> &amp;&#160;</td>\n\
          <td class=\"paramname\"><em>other</em></td><td>)</td>\n\
          <td> const</td>\n\
        </tr>\n\
      </table>\n\
</div><div class=\"memdoc\">\n\
\n\
<p>operator less than </p>\n\
<dl class=\"params\"><dt>Parameters</dt><dd>\n\
  <table class=\"params\">\n\
    <tr><td class=\"paramdir\">[in]</td><td class=\"paramname\">other</td><td>the <a class=\"el\" href=\"#!/url=./cpp_ref/class_m_auto_c_l_kernel.html\" title=\"Auto pointer for cl_kernel objects. \">MAutoCLKernel</a> with which the \"this\" is compared.</td></tr>\n\
  </table>\n\
  </dd>\n\
</dl>\n\
<dl class=\"section return\"><dt>Returns</dt><dd>True if the \"this\" object is arbitrarily less than the other object. </dd></dl>\n\
\n\
</div>\n\
</div>\n\
<hr>The documentation for this class was generated from the following files:<ul>\n\
<li>MOpenCLAutoPtr.h</li>\n\
<li>MOpenCLAutoPtr.cpp</li>\n\
</ul>\n\
</div><!-- contents -->\n\
</div><!-- doc-content -->\n\
<!-- start footer part -->\n\
\n\
      <div class=\"footer-block\"><a href=\"../html/ac.cmtdialog.htm\" class=\"comments-anchor\" target=\"_blank\"><span class=\"comments-link\">Please send us your comment about this page</span></a></div></div>\n\
   </div></body>\n\
</html>\n\
";