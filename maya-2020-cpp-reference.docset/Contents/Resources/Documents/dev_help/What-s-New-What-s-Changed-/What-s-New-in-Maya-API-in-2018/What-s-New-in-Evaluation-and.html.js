var topic = "<!-- saved from url=(0024)http://docs.autodesk.com -->\n\
<html>\n\
   <head>\n\
<link href=\"../../../style/prettify.css\" type=\"text/css\" rel=\"stylesheet\" />\n\
<script type=\"text/javascript\" src=\"../../../scripts/prettify.js\"></script><script src=\"../../../scripts/lib/jquery-1.11.1.min.js\" type=\"text/javascript\"></script><meta http-equiv=\"Content-Type\" content=\"text/html; charset=utf-8\" /><meta http-equiv=\"Content-Style-Type\" content=\"text/css\" /><meta name=\"generator\" content=\"pandoc\" /><meta http-equiv=\"Content-Type\" content=\"text/html; charset=UTF-8\" /><script type=\"text/javascript\" src=\"../../../scripts/utils/adsk.redirect.js\"></script>\n\
      <title>What&#39;s New in Evaluation and Performance</title>\n\
   </head>\n\
   <body height=\"100%\"><div class=\"body_content\" id=\"body-content\"><style type=\"text/css\">code{white-space: pre;}</style><script>$(document).ready(function() { yepnope.injectJs(\"./scripts/multireflink.js\"); });</script><script>$(document).ready(function () { prettyPrint(); } );</script><script></script><script></script><div id=\"reflinkdiv\"></div>\n\
      <div>\n\
         <div class=\"head\">\n\
            <h1>What&#39;s New in Evaluation and Performance</h1>\n\
         </div>\n\
\n\
<div class=\'section\'><a id=\"whats-new-in-evaluation-and-performance\"></a></div>\n\
<div class=\'section\'><a id=\"additions-to-mdgcontext\"></a><h2 id=\"additions-to-mdgcontext\">Additions to MDGContext</h2></div>\n\
<p>New methods have been added to the <span class=\'code\'><a href=\"javascript:void(0)\" data-symbol=\"MDGContext\" class=\"a_multireflink\" data-reflinkdata=\"[{&quot;path&quot;:&quot;cpp_ref/class_m_d_g_context.html&quot;,&quot;title&quot;:&quot;C++ API Reference&quot;,&quot;relpathtoroot&quot;:&quot;../../../&quot;},{&quot;path&quot;:&quot;py_ref/class_open_maya_1_1_m_d_g_context.html&quot;,&quot;title&quot;:&quot;Python 2.0 API Reference&quot;,&quot;relpathtoroot&quot;:&quot;../../../&quot;}]\">MDGContext</a></span> class to help better manage the current evaluation contexts. These methods include:</p>\n\
<ul>\n\
<li><span class=\'code\'><a href=\"javascript:void(0)\" data-symbol=\"MDGContext::current()\" class=\"a_multireflink\" data-reflinkdata=\"[{&quot;path&quot;:&quot;cpp_ref/class_m_d_g_context.html#a11a98edcfc027fb57d3a66fcfbc580a8&quot;,&quot;title&quot;:&quot;C++ API Reference&quot;,&quot;relpathtoroot&quot;:&quot;../../../&quot;},{&quot;path&quot;:&quot;py_ref/class_open_maya_1_1_m_d_g_context.html#a6834aee4cb837cd1309a5def7615d83a&quot;,&quot;title&quot;:&quot;Python 2.0 API Reference&quot;,&quot;relpathtoroot&quot;:&quot;../../../&quot;}]\">MDGContext::current()</a></span> lets you determine the current context being used for evaluation.</li>\n\
<li><span class=\'code\'><a href=\"javascript:void(0)\" data-symbol=\"MDGContext::isCurrent()\" class=\"a_multireflink\" data-reflinkdata=\"[{&quot;path&quot;:&quot;cpp_ref/class_m_d_g_context.html#a8ad65a82f911cabfb47136fb334a1c57&quot;,&quot;title&quot;:&quot;C++ API Reference&quot;,&quot;relpathtoroot&quot;:&quot;../../../&quot;},{&quot;path&quot;:&quot;py_ref/class_open_maya_1_1_m_d_g_context.html#a0b2a17a7ae259c4caaa6af8b0259e5a0&quot;,&quot;title&quot;:&quot;Python 2.0 API Reference&quot;,&quot;relpathtoroot&quot;:&quot;../../../&quot;}]\">MDGContext::isCurrent()</a></span> lets you determine if a context is currently being used for evaluation.</li>\n\
<li><span class=\'code\'><a href=\"javascript:void(0)\" data-symbol=\"MDGContext::makeCurrent()\" class=\"a_multireflink\" data-reflinkdata=\"[{&quot;path&quot;:&quot;cpp_ref/class_m_d_g_context.html#a0a8c271d5088d769845269dc99d73a7e&quot;,&quot;title&quot;:&quot;C++ API Reference&quot;,&quot;relpathtoroot&quot;:&quot;../../../&quot;},{&quot;path&quot;:&quot;py_ref/class_open_maya_1_1_m_d_g_context.html#a3dcdc521f9d31ee6c93eb9991e615549&quot;,&quot;title&quot;:&quot;Python 2.0 API Reference&quot;,&quot;relpathtoroot&quot;:&quot;../../../&quot;}]\">MDGContext::makeCurrent()</a></span> sets a context to be the current evaluation context.</li>\n\
</ul>\n\
<p>Added a new <span class=\'code\'><a href=\"javascript:void(0)\" data-symbol=\"MDGContextGuard\" class=\"a_multireflink\" data-reflinkdata=\"[{&quot;path&quot;:&quot;cpp_ref/class_m_d_g_context_guard.html&quot;,&quot;title&quot;:&quot;C++ API Reference&quot;,&quot;relpathtoroot&quot;:&quot;../../../&quot;}]\">MDGContextGuard</a></span> class, which lets you use a scope object to modify evaluation context for a sequence of context-related calls.</p>\n\
<p>See <a href=\'#!/url=./dev_help/Evaluation-using-current-context-1.html\' title=\'\'>Evaluation using current context</a> for more information.</p>\n\
<div class=\'section\'><a id=\"classes-updated-for-current-context-evaluation\"></a><h2 id=\"classes-updated-for-current-context-evaluation\">Classes updated for current context evaluation</h2></div>\n\
<p>A number of methods from the following classes have been deprecated and replaced with current context versions.</p>\n\
<ul>\n\
<li><span class=\'code\'><a href=\"javascript:void(0)\" data-symbol=\"MPlug\" class=\"a_multireflink\" data-reflinkdata=\"[{&quot;path&quot;:&quot;cpp_ref/class_m_plug.html&quot;,&quot;title&quot;:&quot;C++ API Reference&quot;,&quot;relpathtoroot&quot;:&quot;../../../&quot;},{&quot;path&quot;:&quot;py_ref/class_open_maya_1_1_m_plug.html&quot;,&quot;title&quot;:&quot;Python 2.0 API Reference&quot;,&quot;relpathtoroot&quot;:&quot;../../../&quot;}]\">MPlug</a></span></li>\n\
<li><span class=\'code\'><a href=\"javascript:void(0)\" data-symbol=\"MRampAttribute\" class=\"a_multireflink\" data-reflinkdata=\"[{&quot;path&quot;:&quot;cpp_ref/class_m_ramp_attribute.html&quot;,&quot;title&quot;:&quot;C++ API Reference&quot;,&quot;relpathtoroot&quot;:&quot;../../../&quot;},{&quot;path&quot;:&quot;py_ref/class_open_maya_1_1_m_ramp_attribute.html&quot;,&quot;title&quot;:&quot;Python 2.0 API Reference&quot;,&quot;relpathtoroot&quot;:&quot;../../../&quot;}]\">MRampAttribute</a></span></li>\n\
<li><span class=\'code\'><a href=\"javascript:void(0)\" data-symbol=\"MPxTransform\" class=\"a_multireflink\" data-reflinkdata=\"[{&quot;path&quot;:&quot;cpp_ref/class_m_px_transform.html&quot;,&quot;title&quot;:&quot;C++ API Reference&quot;,&quot;relpathtoroot&quot;:&quot;../../../&quot;}]\">MPxTransform</a></span></li>\n\
<li><span class=\'code\'><a href=\"javascript:void(0)\" data-symbol=\"MPxNode\" class=\"a_multireflink\" data-reflinkdata=\"[{&quot;path&quot;:&quot;cpp_ref/class_m_px_node.html&quot;,&quot;title&quot;:&quot;C++ API Reference&quot;,&quot;relpathtoroot&quot;:&quot;../../../&quot;},{&quot;path&quot;:&quot;py_ref/class_open_maya_1_1_m_px_node.html&quot;,&quot;title&quot;:&quot;Python 2.0 API Reference&quot;,&quot;relpathtoroot&quot;:&quot;../../../&quot;}]\">MPxNode</a></span></li>\n\
<li><span class=\'code\'><a href=\"javascript:void(0)\" data-symbol=\"MFnTransform\" class=\"a_multireflink\" data-reflinkdata=\"[{&quot;path&quot;:&quot;cpp_ref/class_m_fn_transform.html&quot;,&quot;title&quot;:&quot;C++ API Reference&quot;,&quot;relpathtoroot&quot;:&quot;../../../&quot;},{&quot;path&quot;:&quot;py_ref/class_open_maya_1_1_m_fn_transform.html&quot;,&quot;title&quot;:&quot;Python 2.0 API Reference&quot;,&quot;relpathtoroot&quot;:&quot;../../../&quot;}]\">MFnTransform</a></span></li>\n\
<li><span class=\'code\'><a href=\"javascript:void(0)\" data-symbol=\"MPxAssembly\" class=\"a_multireflink\" data-reflinkdata=\"[{&quot;path&quot;:&quot;cpp_ref/class_m_px_assembly.html&quot;,&quot;title&quot;:&quot;C++ API Reference&quot;,&quot;relpathtoroot&quot;:&quot;../../../&quot;}]\">MPxAssembly</a></span></li>\n\
</ul>\n\
<p>See <a href=\'#!/url=./dev_help/Evaluation-using-current-context-1.html\' title=\'\'>Evaluation using current context</a> for more information.</p>\n\
<div class=\'section\'><a id=\"mprofiler-additions\"></a><h2 id=\"mprofiler-additions\">MProfiler additions</h2></div>\n\
<p>New methods have been added to the <span class=\'code\'><a href=\"javascript:void(0)\" data-symbol=\"MProfiler\" class=\"a_multireflink\" data-reflinkdata=\"[{&quot;path&quot;:&quot;cpp_ref/class_m_profiler.html&quot;,&quot;title&quot;:&quot;C++ API Reference&quot;,&quot;relpathtoroot&quot;:&quot;../../../&quot;}]\">MProfiler</a></span> class that allow plug-in writers to export a recording to either a .json or a .csv file, which can then be visualized in a spreadsheet or webpage, independently of Maya.</p>\n\
<p>These methods include:</p>\n\
<ul>\n\
<li><span class=\'code\'><a href=\"javascript:void(0)\" data-symbol=\"MProfiler::getThreadDuration()\" class=\"a_multireflink\" data-reflinkdata=\"[{&quot;path&quot;:&quot;cpp_ref/class_m_profiler.html#a352e9891e778dfe6d082137c0fd673fb&quot;,&quot;title&quot;:&quot;C++ API Reference&quot;,&quot;relpathtoroot&quot;:&quot;../../../&quot;}]\">MProfiler::getThreadDuration()</a></span></li>\n\
<li><span class=\'code\'><a href=\"javascript:void(0)\" data-symbol=\"MProfiler::eventDataAvailable()\" class=\"a_multireflink\" data-reflinkdata=\"[{&quot;path&quot;:&quot;cpp_ref/class_m_profiler.html#a3bc4781cf43260e51bc6f2b421c3568f&quot;,&quot;title&quot;:&quot;C++ API Reference&quot;,&quot;relpathtoroot&quot;:&quot;../../../&quot;}]\">MProfiler::eventDataAvailable()</a></span></li>\n\
<li><span class=\'code\'><a href=\"javascript:void(0)\" data-symbol=\"MProfiler::recordingActive()\" class=\"a_multireflink\" data-reflinkdata=\"[{&quot;path&quot;:&quot;cpp_ref/class_m_profiler.html#a475f603d3fd1b270ab5c4eaf490415f0&quot;,&quot;title&quot;:&quot;C++ API Reference&quot;,&quot;relpathtoroot&quot;:&quot;../../../&quot;}]\">MProfiler::recordingActive()</a></span></li>\n\
<li><span class=\'code\'><a href=\"javascript:void(0)\" data-symbol=\"MProfiler::resetRecording()\" class=\"a_multireflink\" data-reflinkdata=\"[{&quot;path&quot;:&quot;cpp_ref/class_m_profiler.html#abd20eaaed7b6d20c4cd54d03285278a2&quot;,&quot;title&quot;:&quot;C++ API Reference&quot;,&quot;relpathtoroot&quot;:&quot;../../../&quot;}]\">MProfiler::resetRecording()</a></span></li>\n\
<li><span class=\'code\'><a href=\"javascript:void(0)\" data-symbol=\"MProfiler::setRecordingActive()\" class=\"a_multireflink\" data-reflinkdata=\"[{&quot;path&quot;:&quot;cpp_ref/class_m_profiler.html#aef5018794c98b72e35b94adbd6cdac6c&quot;,&quot;title&quot;:&quot;C++ API Reference&quot;,&quot;relpathtoroot&quot;:&quot;../../../&quot;}]\">MProfiler::setRecordingActive()</a></span></li>\n\
<li><span class=\'code\'><a href=\"javascript:void(0)\" data-symbol=\"MProfiler::saveRecording()\" class=\"a_multireflink\" data-reflinkdata=\"[{&quot;path&quot;:&quot;cpp_ref/class_m_profiler.html#af1e5ed4ee23c58556afd9c19e37f1842&quot;,&quot;title&quot;:&quot;C++ API Reference&quot;,&quot;relpathtoroot&quot;:&quot;../../../&quot;}]\">MProfiler::saveRecording()</a></span></li>\n\
<li><span class=\'code\'><a href=\"javascript:void(0)\" data-symbol=\"MProfiler::loadRecording()\" class=\"a_multireflink\" data-reflinkdata=\"[{&quot;path&quot;:&quot;cpp_ref/class_m_profiler.html#ab21c108939d0f526d3cf42c1b04b7530&quot;,&quot;title&quot;:&quot;C++ API Reference&quot;,&quot;relpathtoroot&quot;:&quot;../../../&quot;}]\">MProfiler::loadRecording()</a></span></li>\n\
<li><span class=\'code\'><a href=\"javascript:void(0)\" data-symbol=\"MProfiler::isDataFromFile()\" class=\"a_multireflink\" data-reflinkdata=\"[{&quot;path&quot;:&quot;cpp_ref/class_m_profiler.html#aded7062b0a272bd60902923cc87a50da&quot;,&quot;title&quot;:&quot;C++ API Reference&quot;,&quot;relpathtoroot&quot;:&quot;../../../&quot;}]\">MProfiler::isDataFromFile()</a></span></li>\n\
<li><span class=\'code\'><a href=\"javascript:void(0)\" data-symbol=\"MProfiler::getNumberOfCPUs()\" class=\"a_multireflink\" data-reflinkdata=\"[{&quot;path&quot;:&quot;cpp_ref/class_m_profiler.html#af1379136bd4552551f3f3f2bd7f27df5&quot;,&quot;title&quot;:&quot;C++ API Reference&quot;,&quot;relpathtoroot&quot;:&quot;../../../&quot;}]\">MProfiler::getNumberOfCPUs()</a></span></li>\n\
</ul>\n\
<div class=\'section\'><a id=\"mevaluationnode-and-mpxnode\"></a><h2 id=\"mevaluationnode-and-mpxnode\">MEvaluationNode and MPxNode</h2></div>\n\
<p>The <span class=\'code\'><a href=\"javascript:void(0)\" data-symbol=\"MEvaluationNode\" class=\"a_multireflink\" data-reflinkdata=\"[{&quot;path&quot;:&quot;cpp_ref/class_m_evaluation_node.html&quot;,&quot;title&quot;:&quot;C++ API Reference&quot;,&quot;relpathtoroot&quot;:&quot;../../../&quot;},{&quot;path&quot;:&quot;py_ref/class_open_maya_1_1_m_evaluation_node.html&quot;,&quot;title&quot;:&quot;Python 2.0 API Reference&quot;,&quot;relpathtoroot&quot;:&quot;../../../&quot;}]\">MEvaluationNode</a></span> class is now exposed in the Python API.</p>\n\
<p>The <span class=\'code\'><a href=\"javascript:void(0)\" data-symbol=\"MPxNode\" class=\"a_multireflink\" data-reflinkdata=\"[{&quot;path&quot;:&quot;cpp_ref/class_m_px_node.html&quot;,&quot;title&quot;:&quot;C++ API Reference&quot;,&quot;relpathtoroot&quot;:&quot;../../../&quot;},{&quot;path&quot;:&quot;py_ref/class_open_maya_1_1_m_px_node.html&quot;,&quot;title&quot;:&quot;Python 2.0 API Reference&quot;,&quot;relpathtoroot&quot;:&quot;../../../&quot;}]\">MPxNode</a></span> class <span class=\'code\'><a href=\"javascript:void(0)\" data-symbol=\"MPxNode::preEvaluation()\" class=\"a_multireflink\" data-reflinkdata=\"[{&quot;path&quot;:&quot;cpp_ref/class_m_px_node.html#ad40cff55ba4000788eda78c8b4258b3d&quot;,&quot;title&quot;:&quot;C++ API Reference&quot;,&quot;relpathtoroot&quot;:&quot;../../../&quot;},{&quot;path&quot;:&quot;py_ref/class_open_maya_1_1_m_px_node.html#a05d578044e62c234e15380bae111a154&quot;,&quot;title&quot;:&quot;Python 2.0 API Reference&quot;,&quot;relpathtoroot&quot;:&quot;../../../&quot;}]\">MPxNode::preEvaluation()</a></span> and <span class=\'code\'><a href=\"javascript:void(0)\" data-symbol=\"MPxNode::postEvaluation()\" class=\"a_multireflink\" data-reflinkdata=\"[{&quot;path&quot;:&quot;cpp_ref/class_m_px_node.html#a93e355c11a2c9a0f19f8d7cfa887af2b&quot;,&quot;title&quot;:&quot;C++ API Reference&quot;,&quot;relpathtoroot&quot;:&quot;../../../&quot;},{&quot;path&quot;:&quot;py_ref/class_open_maya_1_1_m_px_node.html#a1bec68dc33fb12c27cdf7fa946b4774d&quot;,&quot;title&quot;:&quot;Python 2.0 API Reference&quot;,&quot;relpathtoroot&quot;:&quot;../../../&quot;}]\">MPxNode::postEvaluation()</a></span> virtual methods are now exposed in the Python API.</p>\n\
<div class=\'section\'><a id=\"drawing-performance\"></a><h2 id=\"drawing-performance\">Drawing performance</h2></div>\n\
<ul>\n\
<li>The drawing performance of simple plug-in shapes (such as locators) associated with <span class=\'code\'><a href=\"javascript:void(0)\" data-symbol=\"MHWRender\" class=\"a_multireflink\" data-reflinkdata=\"[{&quot;path&quot;:&quot;cpp_ref/namespace_m_h_w_render.html&quot;,&quot;title&quot;:&quot;C++ API Reference&quot;,&quot;relpathtoroot&quot;:&quot;../../../&quot;}]\">MHWRender</a></span> class override interfaces (and optionally using <span class=\'code\'><a href=\"javascript:void(0)\" data-symbol=\"MUIDrawManager\" class=\"a_multireflink\" data-reflinkdata=\"[{&quot;path&quot;:&quot;cpp_ref/class_m_h_w_render_1_1_m_u_i_draw_manager.html&quot;,&quot;title&quot;:&quot;C++ API Reference&quot;,&quot;relpathtoroot&quot;:&quot;../../../&quot;},{&quot;path&quot;:&quot;py_ref/class_open_maya_render_1_1_m_u_i_draw_manager.html&quot;,&quot;title&quot;:&quot;Python 2.0 API Reference&quot;,&quot;relpathtoroot&quot;:&quot;../../../&quot;}]\">MUIDrawManager</a></span>) has been improved. These improvements have been added the following:\n\
<ul>\n\
<li><span class=\'code\'><a href=\"javascript:void(0)\" data-symbol=\"MPxDrawOverride\" class=\"a_multireflink\" data-reflinkdata=\"[{&quot;path&quot;:&quot;cpp_ref/class_m_h_w_render_1_1_m_px_draw_override.html&quot;,&quot;title&quot;:&quot;C++ API Reference&quot;,&quot;relpathtoroot&quot;:&quot;../../../&quot;},{&quot;path&quot;:&quot;py_ref/class_open_maya_render_1_1_m_px_draw_override.html&quot;,&quot;title&quot;:&quot;Python 2.0 API Reference&quot;,&quot;relpathtoroot&quot;:&quot;../../../&quot;}]\">MPxDrawOverride</a></span></li>\n\
<li><span class=\'code\'><a href=\"javascript:void(0)\" data-symbol=\"MPxGeometryOverride\" class=\"a_multireflink\" data-reflinkdata=\"[{&quot;path&quot;:&quot;cpp_ref/class_m_h_w_render_1_1_m_px_geometry_override.html&quot;,&quot;title&quot;:&quot;C++ API Reference&quot;,&quot;relpathtoroot&quot;:&quot;../../../&quot;},{&quot;path&quot;:&quot;py_ref/class_open_maya_render_1_1_m_px_geometry_override.html&quot;,&quot;title&quot;:&quot;Python 2.0 API Reference&quot;,&quot;relpathtoroot&quot;:&quot;../../../&quot;}]\">MPxGeometryOverride</a></span></li>\n\
<li><span class=\'code\'><a href=\"javascript:void(0)\" data-symbol=\"MPxSubSceneOverride\" class=\"a_multireflink\" data-reflinkdata=\"[{&quot;path&quot;:&quot;cpp_ref/class_m_h_w_render_1_1_m_px_sub_scene_override.html&quot;,&quot;title&quot;:&quot;C++ API Reference&quot;,&quot;relpathtoroot&quot;:&quot;../../../&quot;},{&quot;path&quot;:&quot;py_ref/class_open_maya_render_1_1_m_px_sub_scene_override.html&quot;,&quot;title&quot;:&quot;Python 2.0 API Reference&quot;,&quot;relpathtoroot&quot;:&quot;../../../&quot;}]\">MPxSubSceneOverride</a></span></li>\n\
</ul></li>\n\
<li>The following footPrint devkit examples have been updated to demonstrate the best practices for optimizing performance.\n\
<ul>\n\
<li><span class=\'code\'>footPrintNode</span></li>\n\
<li><span class=\'code\'>footPrintManip</span></li>\n\
<li><span class=\'code\'>rawfootPrintNode</span></li>\n\
<li><span class=\'code\'>footPrintNode_GeometryOverride</span></li>\n\
</ul></li>\n\
<li>A new <span class=\'code\'>footPrintNode_SubSceneOverride</span> devkit example demonstrates how to implement sub-scene overrides for locator objects.</li>\n\
<li>Added the <span class=\'code\'><a href=\"javascript:void(0)\" data-symbol=\"MOpenCLInfo::supportsDoublePrecision()\" class=\"a_multireflink\" data-reflinkdata=\"[{&quot;path&quot;:&quot;cpp_ref/class_m_open_c_l_info.html#ae331414927e113e01a2bd15c204f4cc8&quot;,&quot;title&quot;:&quot;C++ API Reference&quot;,&quot;relpathtoroot&quot;:&quot;../../../&quot;}]\">MOpenCLInfo::supportsDoublePrecision()</a></span> method to check for GPU double precision support.</li>\n\
</ul>\n\
      <div class=\"footer-block\"><a href=\"../html/ac.cmtdialog.htm\" class=\"comments-anchor\" target=\"_blank\"><span class=\"comments-link\">Please send us your comment about this page</span></a></div></div>\n\
   </div></body>\n\
</html>\n\
";