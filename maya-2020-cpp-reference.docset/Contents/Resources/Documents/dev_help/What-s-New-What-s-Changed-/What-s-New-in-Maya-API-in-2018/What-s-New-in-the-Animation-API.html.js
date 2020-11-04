var topic = "<!-- saved from url=(0024)http://docs.autodesk.com -->\n\
<html>\n\
   <head>\n\
<link href=\"../../../style/prettify.css\" type=\"text/css\" rel=\"stylesheet\" />\n\
<script type=\"text/javascript\" src=\"../../../scripts/prettify.js\"></script><script src=\"../../../scripts/lib/jquery-1.11.1.min.js\" type=\"text/javascript\"></script><meta http-equiv=\"Content-Type\" content=\"text/html; charset=utf-8\" /><meta http-equiv=\"Content-Style-Type\" content=\"text/css\" /><meta name=\"generator\" content=\"pandoc\" /><meta http-equiv=\"Content-Type\" content=\"text/html; charset=UTF-8\" /><script type=\"text/javascript\" src=\"../../../scripts/utils/adsk.redirect.js\"></script>\n\
      <title>What&#39;s New in the Animation API</title>\n\
   </head>\n\
   <body height=\"100%\"><div class=\"body_content\" id=\"body-content\"><style type=\"text/css\">code{white-space: pre;}</style><script>$(document).ready(function() { yepnope.injectJs(\"./scripts/multireflink.js\"); });</script><script>$(document).ready(function () { prettyPrint(); } );</script><script></script><script></script><div id=\"reflinkdiv\"></div>\n\
      <div>\n\
         <div class=\"head\">\n\
            <h1>What&#39;s New in the Animation API</h1>\n\
         </div>\n\
\n\
<div class=\'section\'><a id=\"whats-new-in-the-animation-api\"></a></div>\n\
<div class=\'section\'><a id=\"gpu-override-api-updates\"></a><h2 id=\"gpu-override-api-updates\">GPU Override API updates</h2></div>\n\
<p>Changes to the GPU Override API gives you access to the geometry matrix and inverse geometry matrix in your GPU deformers. These updates also provide more flexibility by letting you define custom output steams for a deformer, which you can then use as inputs to other deformers.</p>\n\
<p>Previous versions of the API restricted you to a single input buffer (positions) and a single output buffer (positions). Updates to the API now allow an unlimited number of input and output buffers. For example, you can now create a deformer that deforms normals as well as positions.</p>\n\
<p>The new buffers are only used for deformation. They do not correct to Viewport 2.0, so you cannot produce a normal buffer and then have Viewport 2.0 render using that buffer.</p>\n\
<p>The new functionality is implemented by two new classes <span class=\'code\'><a href=\"javascript:void(0)\" data-symbol=\"MGPUDeformerBuffer\" class=\"a_multireflink\" data-reflinkdata=\"[{&quot;path&quot;:&quot;cpp_ref/class_m_g_p_u_deformer_buffer.html&quot;,&quot;title&quot;:&quot;C++ API Reference&quot;,&quot;relpathtoroot&quot;:&quot;../../../&quot;}]\">MGPUDeformerBuffer</a></span> and <span class=\'code\'><a href=\"javascript:void(0)\" data-symbol=\"MGPUDeformerData\" class=\"a_multireflink\" data-reflinkdata=\"[{&quot;path&quot;:&quot;cpp_ref/class_m_g_p_u_deformer_data.html&quot;,&quot;title&quot;:&quot;C++ API Reference&quot;,&quot;relpathtoroot&quot;:&quot;../../../&quot;}]\">MGPUDeformerData</a></span>. New methods include the following:</p>\n\
<ul>\n\
<li><p>A new version of <span class=\'code\'><a href=\"javascript:void(0)\" data-symbol=\"MPxGPUDeformer::evaluate()\" class=\"a_multireflink\" data-reflinkdata=\"[{&quot;path&quot;:&quot;cpp_ref/class_m_px_g_p_u_deformer.html#a070259639bc552fd702c9e8e042f0331&quot;,&quot;title&quot;:&quot;C++ API Reference&quot;,&quot;relpathtoroot&quot;:&quot;../../../&quot;}]\">MPxGPUDeformer::evaluate()</a></span> that uses different parameters than before.</p>\n\
<p>The new version of this method is the preferred version. The old method is still available for purposes of backwards compatibility. Only one of the evaluate methods should be implemented.</p></li>\n\
<li><p><span class=\'code\'><a href=\"javascript:void(0)\" data-symbol=\"MPxGPUDeformer::createOutputBuffer()\" class=\"a_multireflink\" data-reflinkdata=\"[{&quot;path&quot;:&quot;cpp_ref/class_m_px_g_p_u_deformer.html#af684dd523a1adfe5f06de3e513e8146a&quot;,&quot;title&quot;:&quot;C++ API Reference&quot;,&quot;relpathtoroot&quot;:&quot;../../../&quot;}]\">MPxGPUDeformer::createOutputBuffer()</a></span>, which creates the output buffer based on the input buffer.</p></li>\n\
</ul>\n\
<div class=\'section\'><a id=\"other-updates\"></a><h2 id=\"other-updates\">Other updates</h2></div>\n\
<ul>\n\
<li><p>The <span class=\'code\'><a href=\"javascript:void(0)\" data-symbol=\"MFnAnimCurve::setTangent()\" class=\"a_multireflink\" data-reflinkdata=\"[{&quot;path&quot;:&quot;cpp_ref/class_m_fn_anim_curve.html#a7832d85597922310b7e82ec60b74569a&quot;,&quot;title&quot;:&quot;C++ API Reference&quot;,&quot;relpathtoroot&quot;:&quot;../../../&quot;},{&quot;path&quot;:&quot;py_ref/class_open_maya_anim_1_1_m_fn_anim_curve.html#afec0e12c97b1c3f9d116d25c30d9c153&quot;,&quot;title&quot;:&quot;Python 2.0 API Reference&quot;,&quot;relpathtoroot&quot;:&quot;../../../&quot;}]\">MFnAnimCurve::setTangent()</a></span> and <span class=\'code\'><a href=\"javascript:void(0)\" data-symbol=\"MFnAnimCurve::getTangent()\" class=\"a_multireflink\" data-reflinkdata=\"[{&quot;path&quot;:&quot;cpp_ref/class_m_fn_anim_curve.html#a72b4a68c26b0902e7be1e860611bfac2&quot;,&quot;title&quot;:&quot;C++ API Reference&quot;,&quot;relpathtoroot&quot;:&quot;../../../&quot;}]\">MFnAnimCurve::getTangent()</a></span> signatures include changes that may impact scripts and plug-ins.</p>\n\
<p>Variants that passed references to float for x and y tangent components now use the <span class=\'code\'><a href=\"javascript:void(0)\" data-symbol=\"MFnAnimCurve::TangentValue\" class=\"a_multireflink\" data-reflinkdata=\"[{&quot;path&quot;:&quot;cpp_ref/class_m_fn_anim_curve.html#a32c185e31dc2bda6fa5cd0af87b81578&quot;,&quot;title&quot;:&quot;C++ API Reference&quot;,&quot;relpathtoroot&quot;:&quot;../../../&quot;}]\">MFnAnimCurve::TangentValue</a></span> with <span class=\'code\'>typedef</span> set to <span class=\'code\'>TangentValue</span>, which resolves to double.</p></li>\n\
</ul>\n\
      <div class=\"footer-block\"><a href=\"../html/ac.cmtdialog.htm\" class=\"comments-anchor\" target=\"_blank\"><span class=\"comments-link\">Please send us your comment about this page</span></a></div></div>\n\
   </div></body>\n\
</html>\n\
";