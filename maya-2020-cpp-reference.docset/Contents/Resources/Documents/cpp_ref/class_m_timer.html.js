var topic = "<!-- saved from url=(0024)http://docs.autodesk.com -->\n\
<html>\n\
   <head><script src=\"../scripts/yepnope.1.5.4-min.js\" type=\"text/javascript\"></script><script src=\"../scripts/lib/jquery-1.11.1.min.js\" type=\"text/javascript\"></script>\n\
      <title>C++ API Reference: MTimer Class Reference</title>\n\
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
    cpp_ref_adsk_ref_toc.initNavTree(\'class_m_timer.html\', tocPrefix);\n\
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
            <h1>C++ API Reference: MTimer Class Reference</h1>\n\
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
<div class=\"title\">MTimer Class Reference<div class=\"ingroups\"><a class=\"el\" href=\"#!/url=./cpp_ref/group___open_maya.html\">OpenMaya - API module for common classes</a></div></div>  </div>\n\
<div id=\"OverviewLinksDiv\"><div id=\"dynsection-overview\" onclick=\"return toggleVisibility(this)\" class=\"dynheader closed\" style=\"cursor:pointer;\"><img id=\"dynsection-overview-trigger\" src=\"cpp_ref/closed.png\" alt=\"+\"> Related help topics: </div><div id=\"dynsection-overview-content\" class=\"dyncontent\" style=\"display:none;\"><ul class=\"overviewLinks\">\n\
<li class=\"overviewLink\"><a href=\"#!/url=./dev_help/Technical-Notes/Threading-and-Maya-API.html\">Technical Notes &gt; Threading and Maya API</a></li>\n\
</ul></div></div>\n\
<div class=\"summary\">\n\
<a href=\"class_m_timer.html#pub-methods\">Public Member Functions</a> &#124;\n\
<a href=\"#!/url=./cpp_ref/class_m_timer-members.html\">List of all members</a>  </div></div><!--header-->\n\
<div class=\"contents\">\n\
\n\
<p>This class works similar to timerX MEL command.  \n\
 <a href=\"#!/url=./cpp_ref/class_m_timer.html#details\">More...</a></p>\n\
\n\
<p><code>#include &lt;MTimer.h&gt;</code></p>\n\
<table class=\"memberdecls\">\n\
<tr class=\"heading\"><td colspan=\"2\"><h2 class=\"groupheader\"><a name=\"pub-methods\"></a>\n\
Public Member Functions</h2></td></tr>\n\
<tr class=\"memitem:acea88b3081b9f1bc2827d0f7e0e69e07\"><td class=\"memItemLeft\" align=\"right\" valign=\"top\"><a class=\"anchor\" id=\"acea88b3081b9f1bc2827d0f7e0e69e07\"></a>\n\
&#160;</td><td class=\"memItemRight\" valign=\"bottom\"><a class=\"el\" href=\"#!/url=./cpp_ref/class_m_timer.html#acea88b3081b9f1bc2827d0f7e0e69e07\">MTimer</a> ()</td></tr>\n\
<tr class=\"memdesc:acea88b3081b9f1bc2827d0f7e0e69e07\"><td class=\"mdescLeft\">&#160;</td><td class=\"mdescRight\">Default class constructor. <br></td></tr>\n\
<tr class=\"separator:acea88b3081b9f1bc2827d0f7e0e69e07\"><td class=\"memSeparator\" colspan=\"2\">&#160;</td></tr>\n\
<tr class=\"memitem:a50b092fb69c9031a15876d48cb37925f\"><td class=\"memItemLeft\" align=\"right\" valign=\"top\">&#160;</td><td class=\"memItemRight\" valign=\"bottom\"><a class=\"el\" href=\"#!/url=./cpp_ref/class_m_timer.html#a50b092fb69c9031a15876d48cb37925f\">MTimer</a> (const <a class=\"el\" href=\"#!/url=./cpp_ref/class_m_timer.html\">MTimer</a> &amp;)</td></tr>\n\
<tr class=\"memdesc:a50b092fb69c9031a15876d48cb37925f\"><td class=\"mdescLeft\">&#160;</td><td class=\"mdescRight\">Copy Constructor.  <a href=\"class_m_timer.html#a50b092fb69c9031a15876d48cb37925f\">More...</a><br></td></tr>\n\
<tr class=\"separator:a50b092fb69c9031a15876d48cb37925f\"><td class=\"memSeparator\" colspan=\"2\">&#160;</td></tr>\n\
<tr class=\"memitem:aaf02f4936f1de1b9fd1c3dbd3db7544a\"><td class=\"memItemLeft\" align=\"right\" valign=\"top\"><a class=\"anchor\" id=\"aaf02f4936f1de1b9fd1c3dbd3db7544a\"></a>\n\
&#160;</td><td class=\"memItemRight\" valign=\"bottom\"><a class=\"el\" href=\"#!/url=./cpp_ref/class_m_timer.html#aaf02f4936f1de1b9fd1c3dbd3db7544a\">~MTimer</a> ()</td></tr>\n\
<tr class=\"memdesc:aaf02f4936f1de1b9fd1c3dbd3db7544a\"><td class=\"mdescLeft\">&#160;</td><td class=\"mdescRight\">The class destructor. <br></td></tr>\n\
<tr class=\"separator:aaf02f4936f1de1b9fd1c3dbd3db7544a\"><td class=\"memSeparator\" colspan=\"2\">&#160;</td></tr>\n\
<tr class=\"memitem:ac336e3fea7e0479c0496beccd27ba152\"><td class=\"memItemLeft\" align=\"right\" valign=\"top\"><a class=\"anchor\" id=\"ac336e3fea7e0479c0496beccd27ba152\"></a>\n\
void&#160;</td><td class=\"memItemRight\" valign=\"bottom\"><a class=\"el\" href=\"#!/url=./cpp_ref/class_m_timer.html#ac336e3fea7e0479c0496beccd27ba152\">beginTimer</a> ()</td></tr>\n\
<tr class=\"memdesc:ac336e3fea7e0479c0496beccd27ba152\"><td class=\"mdescLeft\">&#160;</td><td class=\"mdescRight\">The call to this function starts the timer. <br></td></tr>\n\
<tr class=\"separator:ac336e3fea7e0479c0496beccd27ba152\"><td class=\"memSeparator\" colspan=\"2\">&#160;</td></tr>\n\
<tr class=\"memitem:ab1cd82365475316c3b987f456df5e14c\"><td class=\"memItemLeft\" align=\"right\" valign=\"top\"><a class=\"anchor\" id=\"ab1cd82365475316c3b987f456df5e14c\"></a>\n\
void&#160;</td><td class=\"memItemRight\" valign=\"bottom\"><a class=\"el\" href=\"#!/url=./cpp_ref/class_m_timer.html#ab1cd82365475316c3b987f456df5e14c\">endTimer</a> ()</td></tr>\n\
<tr class=\"memdesc:ab1cd82365475316c3b987f456df5e14c\"><td class=\"mdescLeft\">&#160;</td><td class=\"mdescRight\">The call to this function ends the timer. <br></td></tr>\n\
<tr class=\"separator:ab1cd82365475316c3b987f456df5e14c\"><td class=\"memSeparator\" colspan=\"2\">&#160;</td></tr>\n\
<tr class=\"memitem:af216bfafd4829e364522a4c93e737fe8\"><td class=\"memItemLeft\" align=\"right\" valign=\"top\"><a class=\"anchor\" id=\"af216bfafd4829e364522a4c93e737fe8\"></a>\n\
double&#160;</td><td class=\"memItemRight\" valign=\"bottom\"><a class=\"el\" href=\"#!/url=./cpp_ref/class_m_timer.html#af216bfafd4829e364522a4c93e737fe8\">elapsedTime</a> ()</td></tr>\n\
<tr class=\"memdesc:af216bfafd4829e364522a4c93e737fe8\"><td class=\"mdescLeft\">&#160;</td><td class=\"mdescRight\">This function returns the time elapsed between the calls to beginTimer and endTimer. <br></td></tr>\n\
<tr class=\"separator:af216bfafd4829e364522a4c93e737fe8\"><td class=\"memSeparator\" colspan=\"2\">&#160;</td></tr>\n\
<tr class=\"memitem:aa204da54f33dc94ee46a662d236a3232\"><td class=\"memItemLeft\" align=\"right\" valign=\"top\"><a class=\"el\" href=\"#!/url=./cpp_ref/class_m_timer.html\">MTimer</a> &amp;&#160;</td><td class=\"memItemRight\" valign=\"bottom\"><a class=\"el\" href=\"#!/url=./cpp_ref/class_m_timer.html#aa204da54f33dc94ee46a662d236a3232\">operator=</a> (const <a class=\"el\" href=\"#!/url=./cpp_ref/class_m_timer.html\">MTimer</a> &amp;rhs)</td></tr>\n\
<tr class=\"memdesc:aa204da54f33dc94ee46a662d236a3232\"><td class=\"mdescLeft\">&#160;</td><td class=\"mdescRight\">Assignment operator.  <a href=\"class_m_timer.html#aa204da54f33dc94ee46a662d236a3232\">More...</a><br></td></tr>\n\
<tr class=\"separator:aa204da54f33dc94ee46a662d236a3232\"><td class=\"memSeparator\" colspan=\"2\">&#160;</td></tr>\n\
<tr class=\"memitem:a8211569f04078d134ed618ce74428e8d\"><td class=\"memItemLeft\" align=\"right\" valign=\"top\">bool&#160;</td><td class=\"memItemRight\" valign=\"bottom\"><a class=\"el\" href=\"#!/url=./cpp_ref/class_m_timer.html#a8211569f04078d134ed618ce74428e8d\">operator==</a> (const <a class=\"el\" href=\"#!/url=./cpp_ref/class_m_timer.html\">MTimer</a> &amp;rhs) const </td></tr>\n\
<tr class=\"memdesc:a8211569f04078d134ed618ce74428e8d\"><td class=\"mdescLeft\">&#160;</td><td class=\"mdescRight\">Equality operator.  <a href=\"class_m_timer.html#a8211569f04078d134ed618ce74428e8d\">More...</a><br></td></tr>\n\
<tr class=\"separator:a8211569f04078d134ed618ce74428e8d\"><td class=\"memSeparator\" colspan=\"2\">&#160;</td></tr>\n\
<tr class=\"memitem:ab51a2386087b5f087175da0499fface3\"><td class=\"memItemLeft\" align=\"right\" valign=\"top\">bool&#160;</td><td class=\"memItemRight\" valign=\"bottom\"><a class=\"el\" href=\"#!/url=./cpp_ref/class_m_timer.html#ab51a2386087b5f087175da0499fface3\">operator!=</a> (const <a class=\"el\" href=\"#!/url=./cpp_ref/class_m_timer.html\">MTimer</a> &amp;rhs) const </td></tr>\n\
<tr class=\"memdesc:ab51a2386087b5f087175da0499fface3\"><td class=\"mdescLeft\">&#160;</td><td class=\"mdescRight\">InEquality operator.  <a href=\"class_m_timer.html#ab51a2386087b5f087175da0499fface3\">More...</a><br></td></tr>\n\
<tr class=\"separator:ab51a2386087b5f087175da0499fface3\"><td class=\"memSeparator\" colspan=\"2\">&#160;</td></tr>\n\
<tr class=\"memitem:ac8bb3912a3ce86b15842e79d0b421204\"><td class=\"memItemLeft\" align=\"right\" valign=\"top\"><a class=\"anchor\" id=\"ac8bb3912a3ce86b15842e79d0b421204\"></a>\n\
void&#160;</td><td class=\"memItemRight\" valign=\"bottom\"><a class=\"el\" href=\"#!/url=./cpp_ref/class_m_timer.html#ac8bb3912a3ce86b15842e79d0b421204\">clear</a> ()</td></tr>\n\
<tr class=\"memdesc:ac8bb3912a3ce86b15842e79d0b421204\"><td class=\"mdescLeft\">&#160;</td><td class=\"mdescRight\">This function resets the member variables so that same <a class=\"el\" href=\"#!/url=./cpp_ref/class_m_timer.html\" title=\"This class works similar to timerX MEL command. \">MTimer</a> object can be used to time other portions of the code. <br></td></tr>\n\
<tr class=\"separator:ac8bb3912a3ce86b15842e79d0b421204\"><td class=\"memSeparator\" colspan=\"2\">&#160;</td></tr>\n\
</table>\n\
<a name=\"details\" id=\"details\"></a><h2 class=\"groupheader\">Detailed Description</h2>\n\
<div class=\"textblock\"><p>This class works similar to timerX MEL command. </p>\n\
<p><a class=\"el\" href=\"#!/url=./cpp_ref/class_m_timer.html\" title=\"This class works similar to timerX MEL command. \">MTimer</a> class provides the functionality for calculating the time elapsed/consumed in executing a particular portion of the code. The portion of the code to be timed is embedded inbetween the calls to\'<a class=\"el\" href=\"#!/url=./cpp_ref/class_m_timer.html#ac336e3fea7e0479c0496beccd27ba152\" title=\"The call to this function starts the timer. \">beginTimer()</a>\' and \'<a class=\"el\" href=\"#!/url=./cpp_ref/class_m_timer.html#ab1cd82365475316c3b987f456df5e14c\" title=\"The call to this function ends the timer. \">endTimer()</a>\'. A call to \'<a class=\"el\" href=\"#!/url=./cpp_ref/class_m_timer.html#af216bfafd4829e364522a4c93e737fe8\" title=\"This function returns the time elapsed between the calls to beginTimer and endTimer. \">elapsedTime()</a>\' gives the time spent in executing that portion of the code. The calculated time in seconds will be with 2 decimal accuracy. </p>\n\
<dl class=\"section \"><div id=\"dynsection-example0\" class=\"dynheader closed\" onclick=\"return toggleVisibility(this)\" style=\"cursor:pointer;\"><dt><img id=\"dynsection-example0-trigger\" src=\"cpp_ref/closed.png\" alt=\"+\"> <b>Examples: </b></dt></div><div id=\"dynsection-example0-content\" class=\"dyncontent\" style=\"display:none;\"><dd><a class=\"el\" href=\"#!/url=./cpp_ref/_abc_bullet_2_abc_bullet_8cpp-example.html#_a50\">AbcBullet/AbcBullet.cpp</a>, <a class=\"el\" href=\"#!/url=./cpp_ref/splat_deformer_2splat_deformer_8cpp-example.html#_a42\">splatDeformer/splatDeformer.cpp</a>, <a class=\"el\" href=\"#!/url=./cpp_ref/sse_deformer_2sse_deformer_8cpp-example.html#_a36\">sseDeformer/sseDeformer.cpp</a>, <a class=\"el\" href=\"#!/url=./cpp_ref/threaded_bounding_box_2threaded_bounding_box_8cpp-example.html#_a18\">threadedBoundingBox/threadedBoundingBox.cpp</a>, <a class=\"el\" href=\"#!/url=./cpp_ref/threading_lock_tests_2threading_lock_tests_8cpp-example.html#_a13\">threadingLockTests/threadingLockTests.cpp</a>, <a class=\"el\" href=\"#!/url=./cpp_ref/thread_test_cmd_2thread_test_cmd_8cpp-example.html#_a15\">threadTestCmd/threadTestCmd.cpp</a>, and <a class=\"el\" href=\"#!/url=./cpp_ref/thread_test_with_locks_cmd_2thread_test_with_locks_cmd_8cpp-example.html#_a21\">threadTestWithLocksCmd/threadTestWithLocksCmd.cpp</a>.</dd></div>\n\
</dl></div><h2 class=\"groupheader\">Constructor &amp; Destructor Documentation</h2>\n\
<a class=\"anchor\" id=\"a50b092fb69c9031a15876d48cb37925f\"></a>\n\
<div class=\"memitem\">\n\
<div class=\"memproto\">\n\
      <table class=\"memname\">\n\
        <tr>\n\
          <td class=\"memname\"><a class=\"el\" href=\"#!/url=./cpp_ref/class_m_timer.html\">MTimer</a> </td>\n\
          <td>(</td>\n\
          <td class=\"paramtype\">const <a class=\"el\" href=\"#!/url=./cpp_ref/class_m_timer.html\">MTimer</a> &amp;&#160;</td>\n\
          <td class=\"paramname\"><em>src</em></td><td>)</td>\n\
          <td></td>\n\
        </tr>\n\
      </table>\n\
</div><div class=\"memdoc\">\n\
\n\
<p>Copy Constructor. </p>\n\
<dl class=\"params\"><dt>Parameters</dt><dd>\n\
  <table class=\"params\">\n\
    <tr><td class=\"paramdir\">[in]</td><td class=\"paramname\">src</td><td>the instance to copy </td></tr>\n\
  </table>\n\
  </dd>\n\
</dl>\n\
\n\
</div>\n\
</div>\n\
<h2 class=\"groupheader\">Member Function Documentation</h2>\n\
<a class=\"anchor\" id=\"aa204da54f33dc94ee46a662d236a3232\"></a>\n\
<div class=\"memitem\">\n\
<div class=\"memproto\">\n\
      <table class=\"memname\">\n\
        <tr>\n\
          <td class=\"memname\"><a class=\"el\" href=\"#!/url=./cpp_ref/class_m_timer.html\">MTimer</a> &amp; operator= </td>\n\
          <td>(</td>\n\
          <td class=\"paramtype\">const <a class=\"el\" href=\"#!/url=./cpp_ref/class_m_timer.html\">MTimer</a> &amp;&#160;</td>\n\
          <td class=\"paramname\"><em>rhs</em></td><td>)</td>\n\
          <td></td>\n\
        </tr>\n\
      </table>\n\
</div><div class=\"memdoc\">\n\
\n\
<p>Assignment operator. </p>\n\
<dl class=\"params\"><dt>Parameters</dt><dd>\n\
  <table class=\"params\">\n\
    <tr><td class=\"paramdir\">[in]</td><td class=\"paramname\">rhs</td><td>The timer to copy from. </td></tr>\n\
  </table>\n\
  </dd>\n\
</dl>\n\
\n\
</div>\n\
</div>\n\
<a class=\"anchor\" id=\"a8211569f04078d134ed618ce74428e8d\"></a>\n\
<div class=\"memitem\">\n\
<div class=\"memproto\">\n\
      <table class=\"memname\">\n\
        <tr>\n\
          <td class=\"memname\">bool operator== </td>\n\
          <td>(</td>\n\
          <td class=\"paramtype\">const <a class=\"el\" href=\"#!/url=./cpp_ref/class_m_timer.html\">MTimer</a> &amp;&#160;</td>\n\
          <td class=\"paramname\"><em>rhs</em></td><td>)</td>\n\
          <td> const</td>\n\
        </tr>\n\
      </table>\n\
</div><div class=\"memdoc\">\n\
\n\
<p>Equality operator. </p>\n\
<p>Checks whether the start time and end time are same.</p>\n\
<dl class=\"params\"><dt>Parameters</dt><dd>\n\
  <table class=\"params\">\n\
    <tr><td class=\"paramdir\">[in]</td><td class=\"paramname\">rhs</td><td>The timer to compare with. </td></tr>\n\
  </table>\n\
  </dd>\n\
</dl>\n\
\n\
</div>\n\
</div>\n\
<a class=\"anchor\" id=\"ab51a2386087b5f087175da0499fface3\"></a>\n\
<div class=\"memitem\">\n\
<div class=\"memproto\">\n\
      <table class=\"memname\">\n\
        <tr>\n\
          <td class=\"memname\">bool operator!= </td>\n\
          <td>(</td>\n\
          <td class=\"paramtype\">const <a class=\"el\" href=\"#!/url=./cpp_ref/class_m_timer.html\">MTimer</a> &amp;&#160;</td>\n\
          <td class=\"paramname\"><em>rhs</em></td><td>)</td>\n\
          <td> const</td>\n\
        </tr>\n\
      </table>\n\
</div><div class=\"memdoc\">\n\
\n\
<p>InEquality operator. </p>\n\
<dl class=\"params\"><dt>Parameters</dt><dd>\n\
  <table class=\"params\">\n\
    <tr><td class=\"paramdir\">[in]</td><td class=\"paramname\">rhs</td><td>The timer to compare with. </td></tr>\n\
  </table>\n\
  </dd>\n\
</dl>\n\
\n\
</div>\n\
</div>\n\
<hr>The documentation for this class was generated from the following files:<ul>\n\
<li>MTimer.h</li>\n\
<li>MTimer.cpp</li>\n\
</ul>\n\
</div><!-- contents -->\n\
</div><!-- doc-content -->\n\
<!-- start footer part -->\n\
\n\
      <div class=\"footer-block\"><a href=\"../html/ac.cmtdialog.htm\" class=\"comments-anchor\" target=\"_blank\"><span class=\"comments-link\">Please send us your comment about this page</span></a></div></div>\n\
   </div></body>\n\
</html>\n\
";