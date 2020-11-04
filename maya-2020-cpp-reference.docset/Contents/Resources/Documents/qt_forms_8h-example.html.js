var topic = "<!-- saved from url=(0024)http://docs.autodesk.com -->\n\
<html>\n\
   <head><script src=\"../scripts/yepnope.1.5.4-min.js\" type=\"text/javascript\"></script><script src=\"../scripts/lib/jquery-1.11.1.min.js\" type=\"text/javascript\"></script>\n\
      <title>C++ API Reference: qtForms.h</title>\n\
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
    cpp_ref_adsk_ref_toc.initNavTree(\'qt_forms_8h-example.html\', tocPrefix);\n\
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
            <h1>C++ API Reference: qtForms.h</h1>\n\
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
<div class=\"title\">qtForms.h</div>  </div>\n\
</div><!--header-->\n\
<div class=\"contents\">\n\
<div class=\"fragment\"><div class=\"line\"><span class=\"preprocessor\">#ifndef qtForms_h</span></div>\n\
<div class=\"line\"><span class=\"preprocessor\">#define qtForms_h</span></div>\n\
<div class=\"line\"><span class=\"comment\">// ===========================================================================</span></div>\n\
<div class=\"line\"><span class=\"comment\">// Copyright 2017 Autodesk, Inc. All rights reserved.</span></div>\n\
<div class=\"line\"><span class=\"comment\">//</span></div>\n\
<div class=\"line\"><span class=\"comment\">// Use of this software is subject to the terms of the Autodesk license</span></div>\n\
<div class=\"line\"><span class=\"comment\">// agreement provided at the time of installation or download, or which</span></div>\n\
<div class=\"line\"><span class=\"comment\">// otherwise accompanies this software in either electronic or hard copy form.</span></div>\n\
<div class=\"line\"><span class=\"comment\">// ===========================================================================</span></div>\n\
<div class=\"line\"></div>\n\
<div class=\"line\"><span class=\"preprocessor\">#include &lt;QtWidgets/QDialog&gt;</span></div>\n\
<div class=\"line\"><span class=\"preprocessor\">#include &lt;QtCore/QPointer&gt;</span></div>\n\
<div class=\"line\"><span class=\"preprocessor\">#include &lt;maya/MPxCommand.h&gt;</span></div>\n\
<div class=\"line\"></div>\n\
<div class=\"line\"><span class=\"preprocessor\">#include &lt;ui_cubeForm.h&gt;</span></div>\n\
<div class=\"line\"></div>\n\
<div class=\"line\"><span class=\"keyword\">class </span>QDialogButtonBox;</div>\n\
<div class=\"line\"><span class=\"keyword\">class </span>QLineEdit;</div>\n\
<div class=\"line\"><span class=\"keyword\">class </span>QSlider;</div>\n\
<div class=\"line\"><span class=\"keyword\">class </span>QComboBox;</div>\n\
<div class=\"line\"></div>\n\
<div class=\"line\"></div>\n\
<div class=\"line\"><span class=\"comment\">//  This class uses a form which was built in Qt Designer and compiled at</span></div>\n\
<div class=\"line\"><span class=\"comment\">//  build time.</span></div>\n\
<div class=\"line\"><span class=\"keyword\">class </span>CubeCreator : <span class=\"keyword\">public</span> QDialog, <span class=\"keyword\">private</span> Ui::CubeForm</div>\n\
<div class=\"line\">{</div>\n\
<div class=\"line\">    Q_OBJECT</div>\n\
<div class=\"line\"></div>\n\
<div class=\"line\"><span class=\"keyword\">public</span>:</div>\n\
<div class=\"line\">            CubeCreator(QWidget* parent = 0);</div>\n\
<div class=\"line\"></div>\n\
<div class=\"line\">signals:</div>\n\
<div class=\"line\">    <span class=\"keywordtype\">void</span>    objectCreated(<span class=\"keyword\">const</span> QString&amp; objectName);</div>\n\
<div class=\"line\"></div>\n\
<div class=\"line\"><span class=\"keyword\">private</span> slots:</div>\n\
<div class=\"line\">    <span class=\"keywordtype\">void</span>    accept();</div>\n\
<div class=\"line\">    <span class=\"keywordtype\">void</span>    fieldChanged(<span class=\"keyword\">const</span> QString&amp; newValue);</div>\n\
<div class=\"line\">    <span class=\"keywordtype\">void</span>    sliderChanged(<span class=\"keywordtype\">int</span> newValue);</div>\n\
<div class=\"line\"></div>\n\
<div class=\"line\"><span class=\"keyword\">private</span>:</div>\n\
<div class=\"line\">    <span class=\"keywordtype\">double</span>              fCurValue;</div>\n\
<div class=\"line\">};</div>\n\
<div class=\"line\"></div>\n\
<div class=\"line\"></div>\n\
<div class=\"line\"><span class=\"comment\">//  This class uses a form which was built in Qt Designer and is loaded</span></div>\n\
<div class=\"line\"><span class=\"comment\">//  from a resource at run time.</span></div>\n\
<div class=\"line\"><span class=\"keyword\">class </span>SphereCreator : <span class=\"keyword\">public</span> QWidget</div>\n\
<div class=\"line\">{</div>\n\
<div class=\"line\">    Q_OBJECT</div>\n\
<div class=\"line\"></div>\n\
<div class=\"line\"><span class=\"keyword\">public</span>:</div>\n\
<div class=\"line\">            SphereCreator(QWidget* parent = 0);</div>\n\
<div class=\"line\"></div>\n\
<div class=\"line\">signals:</div>\n\
<div class=\"line\">    <span class=\"keywordtype\">void</span>    objectCreated(<span class=\"keyword\">const</span> QString&amp; objectName);</div>\n\
<div class=\"line\"></div>\n\
<div class=\"line\"><span class=\"keyword\">private</span> slots:</div>\n\
<div class=\"line\">    <span class=\"keywordtype\">void</span>    accept();</div>\n\
<div class=\"line\">    <span class=\"keywordtype\">void</span>    fieldChanged(<span class=\"keyword\">const</span> QString&amp; newValue);</div>\n\
<div class=\"line\">    <span class=\"keywordtype\">void</span>    sliderChanged(<span class=\"keywordtype\">int</span> newValue);</div>\n\
<div class=\"line\"></div>\n\
<div class=\"line\"><span class=\"keyword\">private</span>:</div>\n\
<div class=\"line\">    QDialogButtonBox*   fButtonBox;</div>\n\
<div class=\"line\">    <span class=\"keywordtype\">double</span>              fCurValue;</div>\n\
<div class=\"line\">    QLineEdit*          fField;</div>\n\
<div class=\"line\">    QPointer&lt;QWidget&gt;   fForm;</div>\n\
<div class=\"line\">    QSlider*            fSlider;</div>\n\
<div class=\"line\">};</div>\n\
<div class=\"line\"></div>\n\
<div class=\"line\"></div>\n\
<div class=\"line\"><span class=\"comment\">//  This class uses embedded C++ code to build the form at run time.</span></div>\n\
<div class=\"line\"><span class=\"keyword\">class </span>ObjectTypeDialog : <span class=\"keyword\">public</span> QDialog</div>\n\
<div class=\"line\">{</div>\n\
<div class=\"line\">    Q_OBJECT</div>\n\
<div class=\"line\"></div>\n\
<div class=\"line\"><span class=\"keyword\">public</span>:</div>\n\
<div class=\"line\">            ObjectTypeDialog(QWidget* parent = 0);</div>\n\
<div class=\"line\">    <span class=\"keyword\">virtual</span> ~ObjectTypeDialog();</div>\n\
<div class=\"line\"></div>\n\
<div class=\"line\"><span class=\"keyword\">public</span> slots:</div>\n\
<div class=\"line\">    <span class=\"keywordtype\">void</span>    displayObjectDialog(<span class=\"keyword\">const</span> QString&amp; item);</div>\n\
<div class=\"line\">    <span class=\"keywordtype\">void</span>    resetSelector();</div>\n\
<div class=\"line\"></div>\n\
<div class=\"line\"><span class=\"keyword\">private</span>:</div>\n\
<div class=\"line\">    QPointer&lt;QObject&gt;   fCurrentDialog;</div>\n\
<div class=\"line\">    QLineEdit*          fMostRecentField;</div>\n\
<div class=\"line\">    QComboBox*          fSelectObjList;</div>\n\
<div class=\"line\">    <span class=\"keywordtype\">float</span>               fOffset;</div>\n\
<div class=\"line\">};</div>\n\
<div class=\"line\"></div>\n\
<div class=\"line\"></div>\n\
<div class=\"line\"><span class=\"keyword\">class </span>qtFormsCmd: <span class=\"keyword\">public</span> <a name=\"_a0\"></a><a class=\"code\" href=\"#!/url=./cpp_ref/class_m_px_command.html\">MPxCommand</a></div>\n\
<div class=\"line\">{</div>\n\
<div class=\"line\"><span class=\"keyword\">public</span>:</div>\n\
<div class=\"line\">    <span class=\"keyword\">static</span> <span class=\"keywordtype\">void</span>     cleanup();</div>\n\
<div class=\"line\">    <span class=\"keyword\">static</span> <span class=\"keywordtype\">void</span>*    creator()       { <span class=\"keywordflow\">return</span> <span class=\"keyword\">new</span> qtFormsCmd(); }</div>\n\
<div class=\"line\"></div>\n\
<div class=\"line\">    <a name=\"_a1\"></a><a class=\"code\" href=\"#!/url=./cpp_ref/class_m_status.html\">MStatus</a>         <a name=\"a2\"></a><a class=\"code\" href=\"#!/url=./cpp_ref/class_m_px_command.html#ade7d0a873cbe811d6eab464e695390a9\">doIt</a>(<span class=\"keyword\">const</span> <a name=\"_a3\"></a><a class=\"code\" href=\"#!/url=./cpp_ref/class_m_arg_list.html\">MArgList</a>&amp; args);</div>\n\
<div class=\"line\"></div>\n\
<div class=\"line\">    <span class=\"keyword\">static</span> QPointer&lt;ObjectTypeDialog&gt;   fsObjectCreator;</div>\n\
<div class=\"line\">    <span class=\"keyword\">static</span> <span class=\"keyword\">const</span> <a name=\"_a4\"></a><a class=\"code\" href=\"#!/url=./cpp_ref/class_m_string.html\">MString</a>                fsCommandName;</div>\n\
<div class=\"line\">};</div>\n\
<div class=\"line\"></div>\n\
<div class=\"line\"><span class=\"preprocessor\">#endif</span></div>\n\
</div><!-- fragment --> </div><!-- contents -->\n\
</div><!-- doc-content -->\n\
<!-- start footer part -->\n\
\n\
      <div class=\"footer-block\"><a href=\"../html/ac.cmtdialog.htm\" class=\"comments-anchor\" target=\"_blank\"><span class=\"comments-link\">Please send us your comment about this page</span></a></div></div>\n\
   </div></body>\n\
</html>\n\
";