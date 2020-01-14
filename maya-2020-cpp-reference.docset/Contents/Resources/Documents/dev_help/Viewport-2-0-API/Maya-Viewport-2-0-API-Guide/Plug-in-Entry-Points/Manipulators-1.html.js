var topic = "<!-- saved from url=(0024)http://docs.autodesk.com -->\n\
<html>\n\
   <head>\n\
<link href=\"../../../../style/prettify.css\" type=\"text/css\" rel=\"stylesheet\" />\n\
<script type=\"text/javascript\" src=\"../../../../scripts/prettify.js\"></script><script src=\"../../../../scripts/lib/jquery-1.11.1.min.js\" type=\"text/javascript\"></script><meta http-equiv=\"Content-Type\" content=\"text/html; charset=utf-8\" /><meta http-equiv=\"Content-Style-Type\" content=\"text/css\" /><meta name=\"generator\" content=\"pandoc\" /><meta http-equiv=\"Content-Type\" content=\"text/html; charset=UTF-8\" /><script type=\"text/javascript\" src=\"../../../../scripts/utils/adsk.redirect.js\"></script>\n\
      <title>Manipulators</title>\n\
   </head>\n\
   <body height=\"100%\"><div class=\"body_content\" id=\"body-content\"><style type=\"text/css\">code{white-space: pre;}</style><script>$(document).ready(function() { yepnope.injectJs(\"./scripts/multireflink.js\"); });</script><script>$(document).ready(function () { prettyPrint(); } );</script><script></script><script></script><div id=\"reflinkdiv\"></div>\n\
      <div>\n\
         <div class=\"head\">\n\
            <h1>Manipulators</h1>\n\
         </div>\n\
\n\
<div class=\'section\'><a id=\"manipulators\"></a></div>\n\
<p>Manipulators (<span class=\'code\'><a href=\"javascript:void(0)\" data-symbol=\"MPxManipulatorNode\" class=\"a_multireflink\" data-reflinkdata=\"[{&quot;path&quot;:&quot;cpp_ref/class_m_px_manipulator_node.html&quot;,&quot;title&quot;:&quot;C++ API Reference&quot;,&quot;relpathtoroot&quot;:&quot;../../../../&quot;},{&quot;path&quot;:&quot;py_ref/class_open_maya_u_i_1_1_m_px_manipulator_node.html&quot;,&quot;title&quot;:&quot;Python 2.0 API Reference&quot;,&quot;relpathtoroot&quot;:&quot;../../../../&quot;}]\">MPxManipulatorNode</a></span>, and <span class=\'code\'><a href=\"javascript:void(0)\" data-symbol=\"MPxManipContainer\" class=\"a_multireflink\" data-reflinkdata=\"[{&quot;path&quot;:&quot;cpp_ref/class_m_px_manip_container.html&quot;,&quot;title&quot;:&quot;C++ API Reference&quot;,&quot;relpathtoroot&quot;:&quot;../../../../&quot;},{&quot;path&quot;:&quot;py_ref/class_open_maya_u_i_1_1_m_px_manip_container.html&quot;,&quot;title&quot;:&quot;Python 2.0 API Reference&quot;,&quot;relpathtoroot&quot;:&quot;../../../../&quot;}]\">MPxManipContainer</a></span>) are drawn in the old viewport using the following interface:</p>\n\
<ul>\n\
<li><span class=\'code\'>virtual void draw(<a href=\"javascript:void(0)\" data-symbol=\"M3dView\" class=\"a_multireflink\" data-reflinkdata=\"[{&quot;path&quot;:&quot;cpp_ref/class_m3d_view.html&quot;,&quot;title&quot;:&quot;C++ API Reference&quot;,&quot;relpathtoroot&quot;:&quot;../../../../&quot;},{&quot;path&quot;:&quot;py_ref/class_open_maya_u_i_1_1_m3d_view.html&quot;,&quot;title&quot;:&quot;Python 2.0 API Reference&quot;,&quot;relpathtoroot&quot;:&quot;../../../../&quot;}]\">M3dView</a> &amp; view, const <a href=\"javascript:void(0)\" data-symbol=\"MDagPath\" class=\"a_multireflink\" data-reflinkdata=\"[{&quot;path&quot;:&quot;cpp_ref/class_m_dag_path.html&quot;,&quot;title&quot;:&quot;C++ API Reference&quot;,&quot;relpathtoroot&quot;:&quot;../../../../&quot;},{&quot;path&quot;:&quot;py_ref/class_open_maya_1_1_m_dag_path.html&quot;,&quot;title&quot;:&quot;Python 2.0 API Reference&quot;,&quot;relpathtoroot&quot;:&quot;../../../../&quot;}]\">MDagPath</a> &amp; path, M3dView::DisplayStyle style,M3dView::DisplayStatus status);</span></li>\n\
</ul>\n\
<p>The Viewport 2.0 interfaces attempt to match the old interface signatures, but branch off to allow access to an <span class=\'code\'><a href=\"javascript:void(0)\" data-symbol=\"MUIDrawManager\" class=\"a_multireflink\" data-reflinkdata=\"[{&quot;path&quot;:&quot;cpp_ref/class_m_h_w_render_1_1_m_u_i_draw_manager.html&quot;,&quot;title&quot;:&quot;C++ API Reference&quot;,&quot;relpathtoroot&quot;:&quot;../../../../&quot;},{&quot;path&quot;:&quot;py_ref/class_open_maya_render_1_1_m_u_i_draw_manager.html&quot;,&quot;title&quot;:&quot;Python 2.0 API Reference&quot;,&quot;relpathtoroot&quot;:&quot;../../../../&quot;}]\">MUIDrawManager</a></span> and a frame context (<span class=\'code\'><a href=\"javascript:void(0)\" data-symbol=\"MFrameContext\" class=\"a_multireflink\" data-reflinkdata=\"[{&quot;path&quot;:&quot;cpp_ref/class_m_h_w_render_1_1_m_frame_context.html&quot;,&quot;title&quot;:&quot;C++ API Reference&quot;,&quot;relpathtoroot&quot;:&quot;../../../../&quot;},{&quot;path&quot;:&quot;py_ref/class_open_maya_render_1_1_m_frame_context.html&quot;,&quot;title&quot;:&quot;Python 2.0 API Reference&quot;,&quot;relpathtoroot&quot;:&quot;../../../../&quot;}]\">MFrameContext</a></span>):</p>\n\
<ul>\n\
<li>Data Caching: <span class=\'code\'>virtual void preDrawUI( const <a href=\"javascript:void(0)\" data-symbol=\"M3dView\" class=\"a_multireflink\" data-reflinkdata=\"[{&quot;path&quot;:&quot;cpp_ref/class_m3d_view.html&quot;,&quot;title&quot;:&quot;C++ API Reference&quot;,&quot;relpathtoroot&quot;:&quot;../../../../&quot;},{&quot;path&quot;:&quot;py_ref/class_open_maya_u_i_1_1_m3d_view.html&quot;,&quot;title&quot;:&quot;Python 2.0 API Reference&quot;,&quot;relpathtoroot&quot;:&quot;../../../../&quot;}]\">M3dView</a> &amp;view );</span></li>\n\
<li>Data Draw: <span class=\'code\'>virtual void drawUI( <a href=\"javascript:void(0)\" data-symbol=\"MHWRender::MUIDrawManager\" class=\"a_multireflink\" data-reflinkdata=\"[{&quot;path&quot;:&quot;cpp_ref/class_m_h_w_render_1_1_m_u_i_draw_manager.html&quot;,&quot;title&quot;:&quot;C++ API Reference&quot;,&quot;relpathtoroot&quot;:&quot;../../../../&quot;}]\">MHWRender::MUIDrawManager</a>&amp; drawManager, const <a href=\"javascript:void(0)\" data-symbol=\"MHWRender::MFrameContext\" class=\"a_multireflink\" data-reflinkdata=\"[{&quot;path&quot;:&quot;cpp_ref/class_m_h_w_render_1_1_m_frame_context.html&quot;,&quot;title&quot;:&quot;C++ API Reference&quot;,&quot;relpathtoroot&quot;:&quot;../../../../&quot;}]\">MHWRender::MFrameContext</a>&amp; frameContext) const;</span></li>\n\
</ul>\n\
<p>One key difference between Viewport 2.0 and the old viewport is that an <span class=\'code\'><a href=\"javascript:void(0)\" data-symbol=\"M3dView\" class=\"a_multireflink\" data-reflinkdata=\"[{&quot;path&quot;:&quot;cpp_ref/class_m3d_view.html&quot;,&quot;title&quot;:&quot;C++ API Reference&quot;,&quot;relpathtoroot&quot;:&quot;../../../../&quot;},{&quot;path&quot;:&quot;py_ref/class_open_maya_u_i_1_1_m3d_view.html&quot;,&quot;title&quot;:&quot;Python 2.0 API Reference&quot;,&quot;relpathtoroot&quot;:&quot;../../../../&quot;}]\">M3dView</a></span> (3d viewport wrapper) is no longer available for use at draw time. The equivalent state information is to be extracted from the frame context.</p>\n\
<p>Sample code from the example plug-in <em>footPrintLocatorManip</em> is shown below:</p>\n\
<div class=\"codeBlock\"><pre class=\"prettyprint\">void footPrintLocatorManip::preDrawUI( const <a href=\"javascript:void(0)\" data-symbol=\"M3dView\" class=\"a_multireflink\" data-reflinkdata=\"[{&quot;path&quot;:&quot;cpp_ref/class_m3d_view.html&quot;,&quot;title&quot;:&quot;C++ API Reference&quot;,&quot;relpathtoroot&quot;:&quot;../../../../&quot;},{&quot;path&quot;:&quot;py_ref/class_open_maya_u_i_1_1_m3d_view.html&quot;,&quot;title&quot;:&quot;Python 2.0 API Reference&quot;,&quot;relpathtoroot&quot;:&quot;../../../../&quot;}]\">M3dView</a> &amp;view )\n\
{\n\
   // Update text drawing position\n\
   fTextPosition = // DG evaluation\n\
}\n\
\n\
void footPrintLocatorManip::drawUI(\n\
<a href=\"javascript:void(0)\" data-symbol=\"MHWRender::MUIDrawManager\" class=\"a_multireflink\" data-reflinkdata=\"[{&quot;path&quot;:&quot;cpp_ref/class_m_h_w_render_1_1_m_u_i_draw_manager.html&quot;,&quot;title&quot;:&quot;C++ API Reference&quot;,&quot;relpathtoroot&quot;:&quot;../../../../&quot;}]\">MHWRender::MUIDrawManager</a>&amp; drawManager,\n\
const <a href=\"javascript:void(0)\" data-symbol=\"MHWRender::MFrameContext\" class=\"a_multireflink\" data-reflinkdata=\"[{&quot;path&quot;:&quot;cpp_ref/class_m_h_w_render_1_1_m_frame_context.html&quot;,&quot;title&quot;:&quot;C++ API Reference&quot;,&quot;relpathtoroot&quot;:&quot;../../../../&quot;}]\">MHWRender::MFrameContext</a>&amp; frameContext ) const\n\
{\n\
// Draw some text\n\
    drawManager.beginDrawable();\n\
    drawManager.setColor( <a href=\"javascript:void(0)\" data-symbol=\"MColor\" class=\"a_multireflink\" data-reflinkdata=\"[{&quot;path&quot;:&quot;cpp_ref/class_m_color.html&quot;,&quot;title&quot;:&quot;C++ API Reference&quot;,&quot;relpathtoroot&quot;:&quot;../../../../&quot;}]\">MColor</a>( 0.0f, 1.0f, 0.1f ) );\n\
    drawManager.text( fTextPosition, “Some text&quot;, MHWRender::MUIDrawManager::kLeft );\n\
    drawManager.text2d( <a href=\"javascript:void(0)\" data-symbol=\"MPoint\" class=\"a_multireflink\" data-reflinkdata=\"[{&quot;path&quot;:&quot;cpp_ref/class_m_point.html&quot;,&quot;title&quot;:&quot;C++ API Reference&quot;,&quot;relpathtoroot&quot;:&quot;../../../../&quot;}]\">MPoint</a>(100,100), “Some text in 2D&quot;, MHWRender::MUIDrawManager::kLeft );\n\
    drawManager.endDrawable();\n\
}\n\
</pre></div><p>Here, a text position is computed and stored in <span class=\'code\'>fTextPosition</span>. This value is then used at draw time to set the position to draw text using the <span class=\'code\'><a href=\"javascript:void(0)\" data-symbol=\"MUIDrawManager\" class=\"a_multireflink\" data-reflinkdata=\"[{&quot;path&quot;:&quot;cpp_ref/class_m_h_w_render_1_1_m_u_i_draw_manager.html&quot;,&quot;title&quot;:&quot;C++ API Reference&quot;,&quot;relpathtoroot&quot;:&quot;../../../../&quot;},{&quot;path&quot;:&quot;py_ref/class_open_maya_render_1_1_m_u_i_draw_manager.html&quot;,&quot;title&quot;:&quot;Python 2.0 API Reference&quot;,&quot;relpathtoroot&quot;:&quot;../../../../&quot;}]\">MUIDrawManager</a></span> instance.</p>\n\
<p>For selection, it is recommended that you have a series of manipulators which are part of a <span class=\'code\'><a href=\"javascript:void(0)\" data-symbol=\"MPxManipContainer\" class=\"a_multireflink\" data-reflinkdata=\"[{&quot;path&quot;:&quot;cpp_ref/class_m_px_manip_container.html&quot;,&quot;title&quot;:&quot;C++ API Reference&quot;,&quot;relpathtoroot&quot;:&quot;../../../../&quot;},{&quot;path&quot;:&quot;py_ref/class_open_maya_u_i_1_1_m_px_manip_container.html&quot;,&quot;title&quot;:&quot;Python 2.0 API Reference&quot;,&quot;relpathtoroot&quot;:&quot;../../../../&quot;}]\">MPxManipContainer</a></span>. If the plug-in wishes to select a sub-part or <em>handle</em>, then the <span class=\'code\'>void MUIDrawManager::beginDrawable(unsigned int name, bool nameIsPickable);</span> method can be used. The <em>name</em> argument is device independent and can be used with the <span class=\'code\'><a href=\"javascript:void(0)\" data-symbol=\"MPxManipulatorNode::glActiveName()\" class=\"a_multireflink\" data-reflinkdata=\"[{&quot;path&quot;:&quot;cpp_ref/class_m_px_manipulator_node.html#abdf1510cdb61935badc76d738d5afa56&quot;,&quot;title&quot;:&quot;C++ API Reference&quot;,&quot;relpathtoroot&quot;:&quot;../../../../&quot;},{&quot;path&quot;:&quot;py_ref/class_open_maya_u_i_1_1_m_px_manipulator_node.html#a48a4fca882d039253eadcfafde0e58b5&quot;,&quot;title&quot;:&quot;Python 2.0 API Reference&quot;,&quot;relpathtoroot&quot;:&quot;../../../../&quot;}]\">MPxManipulatorNode::glActiveName()</a></span> method. The name is only used for selection and is be ignored in the regular draw pass.</p>\n\
<p>The <span class=\'code\'>lineManip</span> plug-in shows a sample usage:</p>\n\
<div class=\"codeBlock\"><pre class=\"prettyprint\">void    lineManip::drawUI( \n\
    <a href=\"javascript:void(0)\" data-symbol=\"MHWRender::MUIDrawManager\" class=\"a_multireflink\" data-reflinkdata=\"[{&quot;path&quot;:&quot;cpp_ref/class_m_h_w_render_1_1_m_u_i_draw_manager.html&quot;,&quot;title&quot;:&quot;C++ API Reference&quot;,&quot;relpathtoroot&quot;:&quot;../../../../&quot;}]\">MHWRender::MUIDrawManager</a>&amp; drawManager, \n\
    const <a href=\"javascript:void(0)\" data-symbol=\"MHWRender::MFrameContext\" class=\"a_multireflink\" data-reflinkdata=\"[{&quot;path&quot;:&quot;cpp_ref/class_m_h_w_render_1_1_m_frame_context.html&quot;,&quot;title&quot;:&quot;C++ API Reference&quot;,&quot;relpathtoroot&quot;:&quot;../../../../&quot;}]\">MHWRender::MFrameContext</a>&amp; frameContext ) const\n\
{\n\
    // Find out if we should draw using selected color\n\
    bool drawAsSelected = false;\n\
    shouldDrawHandleAsSelected(lineName, drawAsSelected);\n\
    \n\
    // Everything from begin/endDrawable has the lineName handle and is considered to be pickable\n\
    drawManager.beginDrawable(lineName, true);\n\
    drawManager.setColorIndex( drawAsSelected ? fSelectedLineColorIndex : fLineColorIndex );\n\
    drawManager.line( fLineStart, fLineEnd );\n\
    drawManager.endDrawable();\n\
\n\
    // The text is not considered to be pickable\n\
    drawManager.beginDrawable();\n\
    drawManager.setColorIndex( fLineColorIndex );\n\
    drawManager.text( fLineStart, <a href=\"javascript:void(0)\" data-symbol=\"MString\" class=\"a_multireflink\" data-reflinkdata=\"[{&quot;path&quot;:&quot;cpp_ref/class_m_string.html&quot;,&quot;title&quot;:&quot;C++ API Reference&quot;,&quot;relpathtoroot&quot;:&quot;../../../../&quot;}]\">MString</a>(&quot;line manip&quot;));\n\
    drawManager.endDrawable();\n\
\n\
    // The 2d line is considered to be pickable and has the same handle.\n\
    drawManager.beginDrawable(lineName, true);\n\
    drawManager.setColorIndex( drawAsSelected ? fSelectedLineColorIndex : fLineColorIndex );\n\
    drawManager.line2d(<a href=\"javascript:void(0)\" data-symbol=\"MPoint\" class=\"a_multireflink\" data-reflinkdata=\"[{&quot;path&quot;:&quot;cpp_ref/class_m_point.html&quot;,&quot;title&quot;:&quot;C++ API Reference&quot;,&quot;relpathtoroot&quot;:&quot;../../../../&quot;}]\">MPoint</a>(100, 100), <a href=\"javascript:void(0)\" data-symbol=\"MPoint\" class=\"a_multireflink\" data-reflinkdata=\"[{&quot;path&quot;:&quot;cpp_ref/class_m_point.html&quot;,&quot;title&quot;:&quot;C++ API Reference&quot;,&quot;relpathtoroot&quot;:&quot;../../../../&quot;}]\">MPoint</a>(200, 100));\n\
    drawManager.setLineWidth(5.0f);\n\
    drawManager.endDrawable();\n\
\n\
    // The 2d text is not considered to be pickable\n\
    drawManager.beginDrawable();\n\
    drawManager.setColorIndex( fLineColorIndex );\n\
    drawManager.setLineWidth(5.0f);\n\
    drawManager.text2d(<a href=\"javascript:void(0)\" data-symbol=\"MPoint\" class=\"a_multireflink\" data-reflinkdata=\"[{&quot;path&quot;:&quot;cpp_ref/class_m_point.html&quot;,&quot;title&quot;:&quot;C++ API Reference&quot;,&quot;relpathtoroot&quot;:&quot;../../../../&quot;}]\">MPoint</a>(100, 105), <a href=\"javascript:void(0)\" data-symbol=\"MString\" class=\"a_multireflink\" data-reflinkdata=\"[{&quot;path&quot;:&quot;cpp_ref/class_m_string.html&quot;,&quot;title&quot;:&quot;C++ API Reference&quot;,&quot;relpathtoroot&quot;:&quot;../../../../&quot;}]\">MString</a>(&quot;line manip 2D&quot;));\n\
    drawManager.endDrawable();\n\
}\n\
</pre></div>      <div class=\"footer-block\"><a href=\"../html/ac.cmtdialog.htm\" class=\"comments-anchor\" target=\"_blank\"><span class=\"comments-link\">Please send us your comment about this page</span></a></div></div>\n\
   </div></body>\n\
</html>\n\
";