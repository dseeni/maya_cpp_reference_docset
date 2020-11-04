var topic = "<!-- saved from url=(0024)http://docs.autodesk.com -->\n\
<html>\n\
   <head>\n\
<link href=\"../../style/prettify.css\" type=\"text/css\" rel=\"stylesheet\" />\n\
<script type=\"text/javascript\" src=\"../../scripts/prettify.js\"></script><script src=\"../../scripts/lib/jquery-1.11.1.min.js\" type=\"text/javascript\"></script><meta http-equiv=\"Content-Type\" content=\"text/html; charset=utf-8\" /><meta http-equiv=\"Content-Style-Type\" content=\"text/css\" /><meta name=\"generator\" content=\"pandoc\" /><meta http-equiv=\"Content-Type\" content=\"text/html; charset=UTF-8\" /><script type=\"text/javascript\" src=\"../../scripts/utils/adsk.redirect.js\"></script>\n\
      <title>Flags</title>\n\
   </head>\n\
   <body height=\"100%\"><div class=\"body_content\" id=\"body-content\"><style type=\"text/css\">code{white-space: pre;}</style><script>$(document).ready(function() { yepnope.injectJs(\"./scripts/multireflink.js\"); });</script><script>$(document).ready(function () { prettyPrint(); } );</script><script></script><script></script><div id=\"reflinkdiv\"></div>\n\
      <div>\n\
         <div class=\"head\">\n\
            <h1>Flags</h1>\n\
         </div>\n\
\n\
<div class=\'section\'><a id=\"flags\"></a></div>\n\
<p>While it is possible for a command to parse flag-like strings directly from the <span class=\'code\'><a href=\"javascript:void(0)\" data-symbol=\"MArgList\" class=\"a_multireflink\" data-reflinkdata=\"[{&quot;path&quot;:&quot;cpp_ref/class_m_arg_list.html&quot;,&quot;title&quot;:&quot;C++ API Reference&quot;,&quot;relpathtoroot&quot;:&quot;../../&quot;},{&quot;path&quot;:&quot;py_ref/class_open_maya_1_1_m_arg_list.html&quot;,&quot;title&quot;:&quot;Python 2.0 API Reference&quot;,&quot;relpathtoroot&quot;:&quot;../../&quot;}]\">MArgList</a></span> passed to its <span class=\'code\'>doIt()</span> method, that will only work if the command is called from MEL. Python uses a completely different syntax for specifying flags and they are not even accessible from the <span class=\'code\'><a href=\"javascript:void(0)\" data-symbol=\"MArgList\" class=\"a_multireflink\" data-reflinkdata=\"[{&quot;path&quot;:&quot;cpp_ref/class_m_arg_list.html&quot;,&quot;title&quot;:&quot;C++ API Reference&quot;,&quot;relpathtoroot&quot;:&quot;../../&quot;},{&quot;path&quot;:&quot;py_ref/class_open_maya_1_1_m_arg_list.html&quot;,&quot;title&quot;:&quot;Python 2.0 API Reference&quot;,&quot;relpathtoroot&quot;:&quot;../../&quot;}]\">MArgList</a></span>.</p>\n\
<p>A syntax object simplifies the task of specifying, validating and parsing your command&#39;s flags, and allows you to do so in a manner which will work in both MEL and Python.</p>\n\
<p>When defining flags you need to specify both short and long versions of the flag names. Short flags are three letters or less; long flags are four letters or more.</p>\n\
<p>Define these flags in one place using the <span class=\'code\'>#define</span> declaration. For example, <span class=\'code\'>scanDagSyntax</span> uses the following flags:</p>\n\
<div class=\"codeBlock\"><pre class=\"prettyprint\">#define kBreadthFlag &quot;-b&quot;\n\
#define kBreadthFlagLong &quot;-breadthFirst&quot;\n\
#define kDepthFlag &quot;-d&quot;\n\
#define kDepthFlagLong &quot;-depthFirst&quot;\n\
\n\
</pre></div><div class=\'section\'><a id=\"creating-the-syntax-object\"></a><h2 id=\"creating-the-syntax-object\">Creating the Syntax Object</h2></div>\n\
<p>In your command class, you need to write a newSyntax method in which the syntax for your command is set up. This method needs to be a static method that returns the syntax object, <span class=\'code\'><a href=\"javascript:void(0)\" data-symbol=\"MSyntax\" class=\"a_multireflink\" data-reflinkdata=\"[{&quot;path&quot;:&quot;cpp_ref/class_m_syntax.html&quot;,&quot;title&quot;:&quot;C++ API Reference&quot;,&quot;relpathtoroot&quot;:&quot;../../&quot;},{&quot;path&quot;:&quot;py_ref/class_open_maya_1_1_m_syntax.html&quot;,&quot;title&quot;:&quot;Python 2.0 API Reference&quot;,&quot;relpathtoroot&quot;:&quot;../../&quot;}]\">MSyntax</a></span>.</p>\n\
<p>Inside your newSyntax method, you need to add the necessary flags to a syntax object and then return it.</p>\n\
<p>The scanDagSyntax class’s newSyntax is defined in the following way:</p>\n\
<div class=\"codeBlock\"><pre class=\"prettyprint\">class scanDagSyntax: public <a href=\"javascript:void(0)\" data-symbol=\"MPxCommand\" class=\"a_multireflink\" data-reflinkdata=\"[{&quot;path&quot;:&quot;cpp_ref/class_m_px_command.html&quot;,&quot;title&quot;:&quot;C++ API Reference&quot;,&quot;relpathtoroot&quot;:&quot;../../&quot;}]\">MPxCommand</a>\n\
{\n\
    public:\n\
        ...\n\
        static <a href=\"javascript:void(0)\" data-symbol=\"MSyntax\" class=\"a_multireflink\" data-reflinkdata=\"[{&quot;path&quot;:&quot;cpp_ref/class_m_syntax.html&quot;,&quot;title&quot;:&quot;C++ API Reference&quot;,&quot;relpathtoroot&quot;:&quot;../../&quot;},{&quot;path&quot;:&quot;py_ref/class_open_maya_1_1_m_syntax.html&quot;,&quot;title&quot;:&quot;Python 2.0 API Reference&quot;,&quot;relpathtoroot&quot;:&quot;../../&quot;}]\">MSyntax</a> newSyntax();\n\
        ...\n\
};\n\
<a href=\"javascript:void(0)\" data-symbol=\"MSyntax\" class=\"a_multireflink\" data-reflinkdata=\"[{&quot;path&quot;:&quot;cpp_ref/class_m_syntax.html&quot;,&quot;title&quot;:&quot;C++ API Reference&quot;,&quot;relpathtoroot&quot;:&quot;../../&quot;},{&quot;path&quot;:&quot;py_ref/class_open_maya_1_1_m_syntax.html&quot;,&quot;title&quot;:&quot;Python 2.0 API Reference&quot;,&quot;relpathtoroot&quot;:&quot;../../&quot;}]\">MSyntax</a> scanDagSyntax::newSyntax()\n\
{\n\
    <a href=\"javascript:void(0)\" data-symbol=\"MSyntax\" class=\"a_multireflink\" data-reflinkdata=\"[{&quot;path&quot;:&quot;cpp_ref/class_m_syntax.html&quot;,&quot;title&quot;:&quot;C++ API Reference&quot;,&quot;relpathtoroot&quot;:&quot;../../&quot;},{&quot;path&quot;:&quot;py_ref/class_open_maya_1_1_m_syntax.html&quot;,&quot;title&quot;:&quot;Python 2.0 API Reference&quot;,&quot;relpathtoroot&quot;:&quot;../../&quot;}]\">MSyntax</a> syntax;\n\
    syntax.addFlag(kBreadthFlag, kBreadthFlagLong);\n\
    syntax.addFlag(kDepthFlag, kDepthFlagLong);\n\
    ...\n\
    return syntax;\n\
}\n\
\n\
</pre></div><div class=\'section\'><a id=\"parsing-the-arguments\"></a><h2 id=\"parsing-the-arguments\">Parsing the Arguments</h2></div>\n\
<p>By convention, the arguments to your command are typically parsed in a <span class=\'code\'>parseArgs</span> method which is called from <span class=\'code\'>doIt</span>. This <span class=\'code\'>parseArgs</span> method creates a local <span class=\'code\'><a href=\"javascript:void(0)\" data-symbol=\"MArgDatabase\" class=\"a_multireflink\" data-reflinkdata=\"[{&quot;path&quot;:&quot;cpp_ref/class_m_arg_database.html&quot;,&quot;title&quot;:&quot;C++ API Reference&quot;,&quot;relpathtoroot&quot;:&quot;../../&quot;},{&quot;path&quot;:&quot;py_ref/class_open_maya_1_1_m_arg_database.html&quot;,&quot;title&quot;:&quot;Python 2.0 API Reference&quot;,&quot;relpathtoroot&quot;:&quot;../../&quot;}]\">MArgDatabase</a></span> which is initialized with a syntax object and the arguments to the command. <span class=\'code\'><a href=\"javascript:void(0)\" data-symbol=\"MArgDatabase\" class=\"a_multireflink\" data-reflinkdata=\"[{&quot;path&quot;:&quot;cpp_ref/class_m_arg_database.html&quot;,&quot;title&quot;:&quot;C++ API Reference&quot;,&quot;relpathtoroot&quot;:&quot;../../&quot;},{&quot;path&quot;:&quot;py_ref/class_open_maya_1_1_m_arg_database.html&quot;,&quot;title&quot;:&quot;Python 2.0 API Reference&quot;,&quot;relpathtoroot&quot;:&quot;../../&quot;}]\">MArgDatabase</a></span> has convenient methods which enable you to determine which flags are set.</p>\n\
<blockquote>\n\
<p><strong>Note:</strong> Unless otherwise specified, all API methods use Maya internal units—cm and radians.</p>\n\
</blockquote>\n\
<div class=\"codeBlock\"><pre class=\"prettyprint\"><a href=\"javascript:void(0)\" data-symbol=\"MStatus\" class=\"a_multireflink\" data-reflinkdata=\"[{&quot;path&quot;:&quot;cpp_ref/class_m_status.html&quot;,&quot;title&quot;:&quot;C++ API Reference&quot;,&quot;relpathtoroot&quot;:&quot;../../&quot;}]\">MStatus</a> scanDagSyntax::parseArgs(const <a href=\"javascript:void(0)\" data-symbol=\"MArgList\" class=\"a_multireflink\" data-reflinkdata=\"[{&quot;path&quot;:&quot;cpp_ref/class_m_arg_list.html&quot;,&quot;title&quot;:&quot;C++ API Reference&quot;,&quot;relpathtoroot&quot;:&quot;../../&quot;},{&quot;path&quot;:&quot;py_ref/class_open_maya_1_1_m_arg_list.html&quot;,&quot;title&quot;:&quot;Python 2.0 API Reference&quot;,&quot;relpathtoroot&quot;:&quot;../../&quot;}]\">MArgList</a> &amp;args,\n\
                                 MItDag::TraversalType &amp;\n\
                                 traversalType,\n\
                                 <a href=\"javascript:void(0)\" data-symbol=\"MFn::Type\" class=\"a_multireflink\" data-reflinkdata=\"[{&quot;path&quot;:&quot;cpp_ref/class_m_fn.html#a1d1cfd8ffb84e947f82999c682b666a7&quot;,&quot;title&quot;:&quot;C++ API Reference&quot;,&quot;relpathtoroot&quot;:&quot;../../&quot;}]\">MFn::Type</a> &amp;filter,\n\
                                 bool &amp;quiet)\n\
{\n\
    <a href=\"javascript:void(0)\" data-symbol=\"MArgDatabase\" class=\"a_multireflink\" data-reflinkdata=\"[{&quot;path&quot;:&quot;cpp_ref/class_m_arg_database.html&quot;,&quot;title&quot;:&quot;C++ API Reference&quot;,&quot;relpathtoroot&quot;:&quot;../../&quot;},{&quot;path&quot;:&quot;py_ref/class_open_maya_1_1_m_arg_database.html&quot;,&quot;title&quot;:&quot;Python 2.0 API Reference&quot;,&quot;relpathtoroot&quot;:&quot;../../&quot;}]\">MArgDatabase</a> argData(syntax(), args);\n\
    if (argData.isFlagSet(kBreadthFlag))\n\
        traversalType = MItDag::kBreadthFirst;\n\
    else if (argData.isFlagSet(kDepthFlag))\n\
        traversalType = MItDag::kDepthFirst;\n\
    ...\n\
    return MS::kSuccess;\n\
}\n\
\n\
</pre></div><div class=\'section\'><a id=\"using-a-command-flag-more-than-once\"></a><h2 id=\"using-a-command-flag-more-than-once\">Using a command flag more than once</h2></div>\n\
<p>The <span class=\'code\'><a href=\"javascript:void(0)\" data-symbol=\"MSyntax\" class=\"a_multireflink\" data-reflinkdata=\"[{&quot;path&quot;:&quot;cpp_ref/class_m_syntax.html&quot;,&quot;title&quot;:&quot;C++ API Reference&quot;,&quot;relpathtoroot&quot;:&quot;../../&quot;},{&quot;path&quot;:&quot;py_ref/class_open_maya_1_1_m_syntax.html&quot;,&quot;title&quot;:&quot;Python 2.0 API Reference&quot;,&quot;relpathtoroot&quot;:&quot;../../&quot;}]\">MSyntax</a></span> class allows a flag to be re-used in a command call. For example, you may wish to specify several strings to a command as in:</p>\n\
<div class=\"codeBlock\"><pre class=\"prettyprint\">    printDagNodeInfo -name &quot;pSphere1&quot; -name &quot;pSphere2&quot;;\n\
\n\
</pre></div><p>Supporting multi use flags in a plug-in command requires some extra coding to find out the positions where the flag repeats. The following code snippet illustrates how to use multi use flags.</p>\n\
<div class=\"codeBlock\"><pre class=\"prettyprint\">#define NFLAG &quot;-nm&quot;\n\
#define NFLAGLONG &quot;-name&quot;\n\
<a href=\"javascript:void(0)\" data-symbol=\"MSyntax\" class=\"a_multireflink\" data-reflinkdata=\"[{&quot;path&quot;:&quot;cpp_ref/class_m_syntax.html&quot;,&quot;title&quot;:&quot;C++ API Reference&quot;,&quot;relpathtoroot&quot;:&quot;../../&quot;},{&quot;path&quot;:&quot;py_ref/class_open_maya_1_1_m_syntax.html&quot;,&quot;title&quot;:&quot;Python 2.0 API Reference&quot;,&quot;relpathtoroot&quot;:&quot;../../&quot;}]\">MSyntax</a> nodeInfo::newSyntax()\n\
{\n\
    <a href=\"javascript:void(0)\" data-symbol=\"MSyntax\" class=\"a_multireflink\" data-reflinkdata=\"[{&quot;path&quot;:&quot;cpp_ref/class_m_syntax.html&quot;,&quot;title&quot;:&quot;C++ API Reference&quot;,&quot;relpathtoroot&quot;:&quot;../../&quot;},{&quot;path&quot;:&quot;py_ref/class_open_maya_1_1_m_syntax.html&quot;,&quot;title&quot;:&quot;Python 2.0 API Reference&quot;,&quot;relpathtoroot&quot;:&quot;../../&quot;}]\">MSyntax</a> syntax;\n\
    syntax.addFlag(NFLAG, NFLAGLONG, MSyntax::kString) ;\n\
    syntax.makeFlagMultiUse(NFLAG) ;\n\
    return syntax;\n\
}\n\
<a href=\"javascript:void(0)\" data-symbol=\"MStatus\" class=\"a_multireflink\" data-reflinkdata=\"[{&quot;path&quot;:&quot;cpp_ref/class_m_status.html&quot;,&quot;title&quot;:&quot;C++ API Reference&quot;,&quot;relpathtoroot&quot;:&quot;../../&quot;}]\">MStatus</a> nodeInfo::parseArgs( const <a href=\"javascript:void(0)\" data-symbol=\"MArgList\" class=\"a_multireflink\" data-reflinkdata=\"[{&quot;path&quot;:&quot;cpp_ref/class_m_arg_list.html&quot;,&quot;title&quot;:&quot;C++ API Reference&quot;,&quot;relpathtoroot&quot;:&quot;../../&quot;},{&quot;path&quot;:&quot;py_ref/class_open_maya_1_1_m_arg_list.html&quot;,&quot;title&quot;:&quot;Python 2.0 API Reference&quot;,&quot;relpathtoroot&quot;:&quot;../../&quot;}]\">MArgList</a>&amp; args )\n\
{\n\
    <a href=\"javascript:void(0)\" data-symbol=\"MStatus\" class=\"a_multireflink\" data-reflinkdata=\"[{&quot;path&quot;:&quot;cpp_ref/class_m_status.html&quot;,&quot;title&quot;:&quot;C++ API Reference&quot;,&quot;relpathtoroot&quot;:&quot;../../&quot;}]\">MStatus</a> status = MS::kSuccess;\n\
    // Arg database and also find the\n\
    // number of uses of the NFLAG\n\
    <a href=\"javascript:void(0)\" data-symbol=\"MSyntax\" class=\"a_multireflink\" data-reflinkdata=\"[{&quot;path&quot;:&quot;cpp_ref/class_m_syntax.html&quot;,&quot;title&quot;:&quot;C++ API Reference&quot;,&quot;relpathtoroot&quot;:&quot;../../&quot;},{&quot;path&quot;:&quot;py_ref/class_open_maya_1_1_m_syntax.html&quot;,&quot;title&quot;:&quot;Python 2.0 API Reference&quot;,&quot;relpathtoroot&quot;:&quot;../../&quot;}]\">MSyntax</a> syntax = newSyntax();\n\
    <a href=\"javascript:void(0)\" data-symbol=\"MArgDatabase\" class=\"a_multireflink\" data-reflinkdata=\"[{&quot;path&quot;:&quot;cpp_ref/class_m_arg_database.html&quot;,&quot;title&quot;:&quot;C++ API Reference&quot;,&quot;relpathtoroot&quot;:&quot;../../&quot;},{&quot;path&quot;:&quot;py_ref/class_open_maya_1_1_m_arg_database.html&quot;,&quot;title&quot;:&quot;Python 2.0 API Reference&quot;,&quot;relpathtoroot&quot;:&quot;../../&quot;}]\">MArgDatabase</a> parse( syntax, args) ;\n\
    int num = parse.numberOfFlagUses(NFLAG) ;\n\
    // Iterate and find all uses of the NFLAG\n\
    unsigned int pos;\n\
    for(int i = 0 ; i &lt; num ; i++)\n\
    {\n\
        // First we get the position\n\
        status = parse.getFlagArgumentPosition(NFLAG, i, pos) ;\n\
        if(status != MS::kSuccess)\n\
        return status;\n\
\n\
        // Then we get the argument\n\
        <a href=\"javascript:void(0)\" data-symbol=\"MArgList\" class=\"a_multireflink\" data-reflinkdata=\"[{&quot;path&quot;:&quot;cpp_ref/class_m_arg_list.html&quot;,&quot;title&quot;:&quot;C++ API Reference&quot;,&quot;relpathtoroot&quot;:&quot;../../&quot;},{&quot;path&quot;:&quot;py_ref/class_open_maya_1_1_m_arg_list.html&quot;,&quot;title&quot;:&quot;Python 2.0 API Reference&quot;,&quot;relpathtoroot&quot;:&quot;../../&quot;}]\">MArgList</a> mArgs1;\n\
        parse.getFlagArgumentList(NFLAG, i, mArgs1);\n\
        <a href=\"javascript:void(0)\" data-symbol=\"MString\" class=\"a_multireflink\" data-reflinkdata=\"[{&quot;path&quot;:&quot;cpp_ref/class_m_string.html&quot;,&quot;title&quot;:&quot;C++ API Reference&quot;,&quot;relpathtoroot&quot;:&quot;../../&quot;}]\">MString</a> str( mArgs1.asString(0) );\n\
        <a href=\"javascript:void(0)\" data-symbol=\"MGlobal::displayInfo\" class=\"a_multireflink\" data-reflinkdata=\"[{&quot;path&quot;:&quot;cpp_ref/class_m_global.html#a3d14e9f9ed022a80f664eac0136c2f7a&quot;,&quot;title&quot;:&quot;C++ API Reference&quot;,&quot;relpathtoroot&quot;:&quot;../../&quot;}]\">MGlobal::displayInfo</a>( str );\n\
    } \n\
    return status;\n\
} \n\
\n\
</pre></div><div class=\'section\'><a id=\"registration\"></a><h2 id=\"registration\">Registration</h2></div>\n\
<p>The method that creates the syntax object is registered with the command in the <span class=\'code\'>initializePlugin</span> method.</p>\n\
<div class=\"codeBlock\"><pre class=\"prettyprint\"><a href=\"javascript:void(0)\" data-symbol=\"MStatus\" class=\"a_multireflink\" data-reflinkdata=\"[{&quot;path&quot;:&quot;cpp_ref/class_m_status.html&quot;,&quot;title&quot;:&quot;C++ API Reference&quot;,&quot;relpathtoroot&quot;:&quot;../../&quot;}]\">MStatus</a> initializePlugin( <a href=\"javascript:void(0)\" data-symbol=\"MObject\" class=\"a_multireflink\" data-reflinkdata=\"[{&quot;path&quot;:&quot;cpp_ref/class_m_object.html&quot;,&quot;title&quot;:&quot;C++ API Reference&quot;,&quot;relpathtoroot&quot;:&quot;../../&quot;}]\">MObject</a> obj )\n\
{ \n\
    <a href=\"javascript:void(0)\" data-symbol=\"MStatus\" class=\"a_multireflink\" data-reflinkdata=\"[{&quot;path&quot;:&quot;cpp_ref/class_m_status.html&quot;,&quot;title&quot;:&quot;C++ API Reference&quot;,&quot;relpathtoroot&quot;:&quot;../../&quot;}]\">MStatus</a> status;\n\
    <a href=\"javascript:void(0)\" data-symbol=\"MFnPlugin\" class=\"a_multireflink\" data-reflinkdata=\"[{&quot;path&quot;:&quot;cpp_ref/class_m_fn_plugin.html&quot;,&quot;title&quot;:&quot;C++ API Reference&quot;,&quot;relpathtoroot&quot;:&quot;../../&quot;}]\">MFnPlugin</a> plugin(obj, &quot;Autodesk - Example&quot;, \n\
        &quot;2.0&quot;, &quot;Any&quot;);\n\
    status = plugin.registerCommand(&quot;scanDagSyntax&quot;,\n\
        scanDagSyntax::creator,\n\
        scanDagSyntax::newSyntax); \n\
    return status;\n\
}\n\
</pre></div>      <div class=\"footer-block\"><a href=\"../html/ac.cmtdialog.htm\" class=\"comments-anchor\" target=\"_blank\"><span class=\"comments-link\">Please send us your comment about this page</span></a></div></div>\n\
   </div></body>\n\
</html>\n\
";