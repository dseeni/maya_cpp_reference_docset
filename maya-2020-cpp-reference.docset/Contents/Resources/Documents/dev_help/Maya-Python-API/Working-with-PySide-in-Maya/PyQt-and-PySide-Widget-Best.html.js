var topic = "<!-- saved from url=(0024)http://docs.autodesk.com -->\n\
<html>\n\
   <head>\n\
<link href=\"../../../style/prettify.css\" type=\"text/css\" rel=\"stylesheet\" />\n\
<script type=\"text/javascript\" src=\"../../../scripts/prettify.js\"></script><script src=\"../../../scripts/lib/jquery-1.11.1.min.js\" type=\"text/javascript\"></script><meta http-equiv=\"Content-Type\" content=\"text/html; charset=utf-8\" /><meta http-equiv=\"Content-Style-Type\" content=\"text/css\" /><meta name=\"generator\" content=\"pandoc\" /><meta http-equiv=\"Content-Type\" content=\"text/html; charset=UTF-8\" /><script type=\"text/javascript\" src=\"../../../scripts/utils/adsk.redirect.js\"></script>\n\
      <title>PyQt and PySide Widget Best Practices</title>\n\
   </head>\n\
   <body height=\"100%\"><div class=\"body_content\" id=\"body-content\"><style type=\"text/css\">code{white-space: pre;}</style><script>$(document).ready(function() { yepnope.injectJs(\"./scripts/multireflink.js\"); });</script><script>$(document).ready(function () { prettyPrint(); } );</script><script></script><script></script><div id=\"reflinkdiv\"></div>\n\
      <div>\n\
         <div class=\"head\">\n\
            <h1>PyQt and PySide Widget Best Practices</h1>\n\
         </div>\n\
\n\
<div class=\'section\'><a id=\"pyqt-and-pyside-widget-best-practices\"></a></div>\n\
<div class=\'section\'><a id=\"maintain-a-reference-to-your-widget\"></a><h2 id=\"maintain-a-reference-to-your-widget\">Maintain a Reference to your Widget</h2></div>\n\
<div class=\'figure\'><img src=\'dev_help/images/Updated%20_Odd-to-Even.png\' title=\'\' /></div>\n\
<p>If you are using PyQt5 or PySide2 to customize Maya&#39;s user interface, be sure to parent your widget under an existing Maya widget, such as Maya&#39;s main window. Otherwise, if the widget is un-parented, it may be destroyed by the Python interpreter&#39;s garbage collector if a reference to it is not maintained.</p>\n\
<p>The following code sample exemplifies this best practice. Note that this code also works by importing the PyQt5 modules instead of PySide2.</p>\n\
<div class=\"codeBlock\"><pre class=\"prettyprint\">from maya import OpenMayaUI as omui \n\
\n\
from PySide2.QtCore import * \n\
from PySide2.QtGui import * \n\
from PySide2.QtWidgets import *\n\
from PySide2 import __version__\n\
from shiboken2 import wrapInstance \n\
\n\
mayaMainWindowPtr = omui.MQtUtil.mainWindow() \n\
mayaMainWindow= wrapInstance(long(mayaMainWindowPtr), QWidget) \n\
\n\
# WORKS: Widget is fine \n\
hello = QLabel(&quot;Hello, World&quot;, parent=mayaMainWindow) \n\
hello.setObjectName(&#39;MyLabel&#39;) \n\
hello.setWindowFlags(Qt.Window) # Make this widget a standalone window even though it is parented \n\
hello.show() \n\
hello = None # the &quot;hello&quot; widget is parented, so it will not be destroyed. \n\
\n\
# BROKEN: Widget is destroyed \n\
hello = QLabel(&quot;Hello, World&quot;, parent=None) \n\
hello.setObjectName(&#39;MyLabel&#39;) \n\
hello.show() \n\
hello = None # the &quot;hello&quot; widget is not parented, so it will be destroyed.\n\
</pre></div><div class=\'section\'><a id=\"use-the-maya.app.general.mayamixin-classes\"></a><h2 id=\"use-the-maya.app.general.mayamixin-classes\">Use the maya.app.general.mayaMixin Classes</h2></div>\n\
<p>See <a href=\'#!/url=./dev_help/Writing-Workspace-controls.html\' title=\'\'>Writing Workspace controls</a> for details on how to write PyQt and PySide widgets that are compatible with Maya workspaces.</p>\n\
      <div class=\"footer-block\"><a href=\"../html/ac.cmtdialog.htm\" class=\"comments-anchor\" target=\"_blank\"><span class=\"comments-link\">Please send us your comment about this page</span></a></div></div>\n\
   </div></body>\n\
</html>\n\
";