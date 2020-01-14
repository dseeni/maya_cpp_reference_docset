var topic = "<!-- saved from url=(0024)http://docs.autodesk.com -->\n\
<html>\n\
   <head>\n\
<link href=\"../../../../style/prettify.css\" type=\"text/css\" rel=\"stylesheet\" />\n\
<script type=\"text/javascript\" src=\"../../../../scripts/prettify.js\"></script><script src=\"../../../../scripts/lib/jquery-1.11.1.min.js\" type=\"text/javascript\"></script><meta http-equiv=\"Content-Type\" content=\"text/html; charset=utf-8\" /><meta http-equiv=\"Content-Style-Type\" content=\"text/css\" /><meta name=\"generator\" content=\"pandoc\" /><meta http-equiv=\"Content-Type\" content=\"text/html; charset=UTF-8\" /><script type=\"text/javascript\" src=\"../../../../scripts/utils/adsk.redirect.js\"></script>\n\
      <title>Command Arguments and Flags</title>\n\
   </head>\n\
   <body height=\"100%\"><div class=\"body_content\" id=\"body-content\"><style type=\"text/css\">code{white-space: pre;}</style><script>$(document).ready(function() { yepnope.injectJs(\"./scripts/multireflink.js\"); });</script><script>$(document).ready(function () { prettyPrint(); } );</script><script></script><script></script><div id=\"reflinkdiv\"></div>\n\
      <div>\n\
         <div class=\"head\">\n\
            <h1>Command Arguments and Flags</h1>\n\
         </div>\n\
\n\
<div class=\'section\'><a id=\"command-arguments-and-flags\"></a></div>\n\
<p>In this topic, we present the use of arguments and flags within a command.</p>\n\
<div class=\'section\'><a id=\"flags-and-command-arguments\"></a><h2 id=\"flags-and-command-arguments\">&quot;Flags&quot; and &quot;Command Arguments&quot;</h2></div>\n\
<p>In the context of the Maya API documentation, the terms &quot;flag&quot; and &quot;command argument&quot; carry specific meanings, which we clarify as follows:</p>\n\
<ul>\n\
<li><p><strong>&quot;Flag&quot;</strong> - Flags are optional to the normal functioning of a command. Each flag has a long and short name. When used in a MEL command, a flag is prefixed by a hyphen (&#39;<span class=\'code\'>-</span>&#39;). In Python, flags appear as named function arguments without the hyphen. In the following example, the &#39;<span class=\'code\'>sx</span>&#39;, &#39;<span class=\'code\'>sy</span>&#39;, &#39;<span class=\'code\'>sz</span>&#39;, and &#39;<span class=\'code\'>h</span>&#39; flags specify the number of subdivisions along each axis, as well as the height of the cube created with <span class=\'code\'>cmds.polyCube()</span>:</p>\n\
<div class=\"codeBlock\"><pre class=\"prettyprint\">import maya.cmds as cmds\n\
cmds.polyCube( sx=10, sy=15, sz=5, h=20 )\n\
<blockquote>\n\
</blockquote></pre></div><p><strong>Note:</strong> A single flag can also accept a tuple of values, for example the <span class=\'code\'>(r,g,b)</span> value of a color. Each item in a tuple is referred to as a flag <em>parameter</em>. We expand on parsing multiple flag parameters <a href=\'#!/url=./dev_help/Maya-Python-API/Maya-Python-Plug-in-Learning/Command-Plug-in-Basics/Command-Arguments-and-Flags.html#parsing-flags-with-multiple-parameters\' title=\'\'>below</a>.</p>\n\
</li>\n\
<li><p><strong>&quot;Command Argument&quot;</strong> - Command arguments do not have associated names. When they are used in a MEL command, they appear at the end of the call. By contrast, due to the language design of Python, command arguments appear at the beginning of <span class=\'code\'>maya.cmds</span> function calls. The example below illustrates the difference between <em>command arguments</em> and <em>flags</em>:</p>\n\
<div class=\"codeBlock\"><pre class=\"prettyprint\">import maya.cmds as cmds\n\
cmds.group( &#39;circle1&#39;, &#39;sphere1&#39;, n=&#39;group1&#39; )\n\
</pre></div><p>Here, <span class=\'code\'>&#39;circle1&#39;</span> and <span class=\'code\'>&#39;sphere1&#39;</span> are the command arguments of <span class=\'code\'>cmds.group()</span>. They are placed before the optional &#39;<span class=\'code\'>n</span>&#39; flag, which is used to specify the name of the resulting group.</p></li>\n\
</ul>\n\
<p>It is also possible to use the currently selected Maya <em>objects</em> as arguments to your command. In this case, <em>command arguments</em> and <em>objects</em> are incompatible and must not be combined in the syntax definition of your command. For more information, consult the <span class=\'code\'><a href=\"javascript:void(0)\" data-symbol=\"MSyntax\" class=\"a_multireflink\" data-reflinkdata=\"[{&quot;path&quot;:&quot;cpp_ref/class_m_syntax.html&quot;,&quot;title&quot;:&quot;C++ API Reference&quot;,&quot;relpathtoroot&quot;:&quot;../../../../&quot;},{&quot;path&quot;:&quot;py_ref/class_open_maya_1_1_m_syntax.html&quot;,&quot;title&quot;:&quot;Python 2.0 API Reference&quot;,&quot;relpathtoroot&quot;:&quot;../../../../&quot;}]\">MSyntax</a></span> class documentation.</p>\n\
<div class=\'section\'><a id=\"sample-command-plug-in-creating-a-flag\"></a><h2 id=\"sample-command-plug-in-creating-a-flag\">Sample Command Plug-in: Creating a Flag</h2></div>\n\
<p>In the plug-in code below, we create a command which prints the value associated with the passed flag. The <span class=\'code\'><a href=\"javascript:void(0)\" data-symbol=\"MSyntax\" class=\"a_multireflink\" data-reflinkdata=\"[{&quot;path&quot;:&quot;cpp_ref/class_m_syntax.html&quot;,&quot;title&quot;:&quot;C++ API Reference&quot;,&quot;relpathtoroot&quot;:&quot;../../../../&quot;},{&quot;path&quot;:&quot;py_ref/class_open_maya_1_1_m_syntax.html&quot;,&quot;title&quot;:&quot;Python 2.0 API Reference&quot;,&quot;relpathtoroot&quot;:&quot;../../../../&quot;}]\">MSyntax</a></span> and <span class=\'code\'><a href=\"javascript:void(0)\" data-symbol=\"MArgParser\" class=\"a_multireflink\" data-reflinkdata=\"[{&quot;path&quot;:&quot;cpp_ref/class_m_arg_parser.html&quot;,&quot;title&quot;:&quot;C++ API Reference&quot;,&quot;relpathtoroot&quot;:&quot;../../../../&quot;},{&quot;path&quot;:&quot;py_ref/class_open_maya_1_1_m_arg_parser.html&quot;,&quot;title&quot;:&quot;Python 2.0 API Reference&quot;,&quot;relpathtoroot&quot;:&quot;../../../../&quot;}]\">MArgParser</a></span> class documentation contains additional information about using flags, arguments, and selected objects in your commands.</p>\n\
<p>Python API 2.0:</p>\n\
<div class=\"codeBlock\"><pre class=\"prettyprint\"># pySampleCommandFlag.py\n\
\n\
import sys\n\
\n\
import maya.api.OpenMaya as OpenMaya\n\
# ... additional imports here ...\n\
\n\
kPluginCmdName = &#39;myCommandWithFlag&#39;\n\
\n\
kShortFlagName = &#39;-mf&#39;\n\
kLongFlagName = &#39;-myFlag&#39;\n\
\n\
def maya_useNewAPI():\n\
    &quot;&quot;&quot;\n\
    The presence of this function tells Maya that the plugin produces, and\n\
    expects to be passed, objects created using the Maya Python API 2.0.\n\
    &quot;&quot;&quot;\n\
    pass\n\
    \n\
##########################################################\n\
# Plug-in \n\
##########################################################\n\
class MyCommandWithFlagClass( OpenMaya.MPxCommand ):\n\
    \n\
    def __init__(self):\n\
        &#39;&#39;&#39; Constructor. &#39;&#39;&#39;\n\
        OpenMaya.MPxCommand.__init__(self)\n\
    \n\
    def doIt(self, args):\n\
        &#39;&#39;&#39; Command execution. &#39;&#39;&#39;\n\
        \n\
        # We recommend parsing your arguments first.\n\
        self.parseArguments( args )\n\
\n\
        # Remove the following &#39;pass&#39; keyword and replace it with the code you want to run. \n\
        pass\n\
    \n\
    def parseArguments(self, args):\n\
        &#39;&#39;&#39; \n\
        The presence of this function is not enforced,\n\
        but helps separate argument parsing code from other\n\
        command code. \n\
        &#39;&#39;&#39;\n\
        \n\
        # The following <a href=\"javascript:void(0)\" data-symbol=\"MArgParser\" class=\"a_multireflink\" data-reflinkdata=\"[{&quot;path&quot;:&quot;cpp_ref/class_m_arg_parser.html&quot;,&quot;title&quot;:&quot;C++ API Reference&quot;,&quot;relpathtoroot&quot;:&quot;../../../../&quot;},{&quot;path&quot;:&quot;py_ref/class_open_maya_1_1_m_arg_parser.html&quot;,&quot;title&quot;:&quot;Python 2.0 API Reference&quot;,&quot;relpathtoroot&quot;:&quot;../../../../&quot;}]\">MArgParser</a> object allows you to check if specific flags are set.\n\
        argData = OpenMaya.MArgParser( self.syntax(), args )\n\
        \n\
        if argData.isFlagSet( kShortFlagName ):\n\
                \n\
            # In this case, we print the passed flag&#39;s value as an integer.\n\
            # We use the &#39;0&#39; to index the flag&#39;s first and only parameter.\n\
            flagValue = argData.flagArgumentInt( kShortFlagName, 0 )\n\
            print kLongFlagName + &#39;: &#39; + str( flagValue )\n\
            \n\
        \n\
        # ... If there are more flags, process them here ...\n\
\n\
##########################################################\n\
# Plug-in initialization.\n\
##########################################################\n\
def cmdCreator():\n\
    &#39;&#39;&#39; Create an instance of our command. &#39;&#39;&#39;\n\
    return MyCommandWithFlagClass() \n\
\n\
def syntaxCreator():\n\
    &#39;&#39;&#39; Defines the argument and flag syntax for this command. &#39;&#39;&#39;\n\
    syntax = OpenMaya.MSyntax()\n\
    \n\
    # In this example, our flag will be expecting a numeric value, denoted by OpenMaya.MSyntax.kDouble. \n\
    syntax.addFlag( kShortFlagName, kLongFlagName, OpenMaya.MSyntax.kDouble )\n\
    \n\
    # ... Add more flags here ...\n\
        \n\
    return syntax\n\
    \n\
def initializePlugin( mobject ):\n\
    &#39;&#39;&#39; Initialize the plug-in when Maya loads it. &#39;&#39;&#39;\n\
    mplugin = OpenMaya.MFnPlugin( mobject )\n\
    try:\n\
        mplugin.registerCommand( kPluginCmdName, cmdCreator, syntaxCreator )\n\
    except:\n\
        sys.stderr.write( &#39;Failed to register command: &#39; + kPluginCmdName )\n\
\n\
def uninitializePlugin( mobject ):\n\
    &#39;&#39;&#39; Uninitialize the plug-in when Maya un-loads it. &#39;&#39;&#39;\n\
    mplugin = OpenMaya.MFnPlugin( mobject )\n\
    try:\n\
        mplugin.deregisterCommand( kPluginCmdName )\n\
    except:\n\
        sys.stderr.write( &#39;Failed to unregister command: &#39; + kPluginCmdName )\n\
\n\
##########################################################\n\
# Sample usage.\n\
##########################################################\n\
&#39;&#39;&#39; \n\
# Copy the following lines and run them in Maya&#39;s Python Script Editor:\n\
\n\
import maya.cmds as cmds\n\
cmds.loadPlugin( &#39;sampleCommandFlag.py&#39; )\n\
cmds.myCommandWithFlag( myFlag = 4 )\n\
\n\
&#39;&#39;&#39;\n\
</pre></div><p>Python API 1.0:</p>\n\
<div class=\"codeBlock\"><pre class=\"prettyprint\"># sampleCommandFlag.py\n\
\n\
import sys\n\
import maya.OpenMayaMPx as OpenMayaMPx\n\
import maya.OpenMaya as OpenMaya\n\
# ... additional imports here ...\n\
\n\
kPluginCmdName = &#39;myCommandWithFlag&#39;\n\
\n\
kShortFlagName = &#39;-mf&#39;\n\
kLongFlagName = &#39;-myFlag&#39;\n\
\n\
##########################################################\n\
# Plug-in \n\
##########################################################\n\
class MyCommandWithFlagClass( OpenMayaMPx.MPxCommand ):\n\
    \n\
    def __init__(self):\n\
        &#39;&#39;&#39; Constructor. &#39;&#39;&#39;\n\
        OpenMayaMPx.MPxCommand.__init__(self)\n\
    \n\
    def doIt(self, args):\n\
        &#39;&#39;&#39; Command execution. &#39;&#39;&#39;\n\
        \n\
        # We recommend parsing your arguments first.\n\
        self.parseArguments( args )\n\
\n\
        # Remove the following &#39;pass&#39; keyword and replace it with the code you want to run. \n\
        pass\n\
    \n\
    def parseArguments(self, args):\n\
        &#39;&#39;&#39; \n\
        The presence of this function is not enforced,\n\
        but helps separate argument parsing code from other\n\
        command code. \n\
        &#39;&#39;&#39;\n\
        \n\
        # The following <a href=\"javascript:void(0)\" data-symbol=\"MArgParser\" class=\"a_multireflink\" data-reflinkdata=\"[{&quot;path&quot;:&quot;cpp_ref/class_m_arg_parser.html&quot;,&quot;title&quot;:&quot;C++ API Reference&quot;,&quot;relpathtoroot&quot;:&quot;../../../../&quot;},{&quot;path&quot;:&quot;py_ref/class_open_maya_1_1_m_arg_parser.html&quot;,&quot;title&quot;:&quot;Python 2.0 API Reference&quot;,&quot;relpathtoroot&quot;:&quot;../../../../&quot;}]\">MArgParser</a> object allows you to check if specific flags are set.\n\
        argData = OpenMaya.MArgParser( self.syntax(), args )\n\
        \n\
        if argData.isFlagSet( kShortFlagName ):\n\
                \n\
            # In this case, we print the passed flag&#39;s value as an integer.\n\
            # We use the &#39;0&#39; to index the flag&#39;s first and only parameter.\n\
            flagValue = argData.flagArgumentInt( kShortFlagName, 0 )\n\
            print kLongFlagName + &#39;: &#39; + str( flagValue )\n\
            \n\
        \n\
        # ... If there are more flags, process them here ...\n\
\n\
##########################################################\n\
# Plug-in initialization.\n\
##########################################################\n\
def cmdCreator():\n\
    &#39;&#39;&#39; Create an instance of our command. &#39;&#39;&#39;\n\
    return OpenMayaMPx.asMPxPtr( MyCommandWithFlagClass() )\n\
\n\
def syntaxCreator():\n\
    &#39;&#39;&#39; Defines the argument and flag syntax for this command. &#39;&#39;&#39;\n\
    syntax = OpenMaya.MSyntax()\n\
    \n\
    # In this example, our flag will be expecting a numeric value, denoted by OpenMaya.MSyntax.kDouble. \n\
    syntax.addFlag( kShortFlagName, kLongFlagName, OpenMaya.MSyntax.kDouble )\n\
    \n\
    # ... Add more flags here ...\n\
        \n\
    return syntax\n\
    \n\
def initializePlugin( mobject ):\n\
    &#39;&#39;&#39; Initialize the plug-in when Maya loads it. &#39;&#39;&#39;\n\
    mplugin = OpenMayaMPx.MFnPlugin( mobject )\n\
    try:\n\
        mplugin.registerCommand( kPluginCmdName, cmdCreator, syntaxCreator )\n\
    except:\n\
        sys.stderr.write( &#39;Failed to register command: &#39; + kPluginCmdName )\n\
\n\
def uninitializePlugin( mobject ):\n\
    &#39;&#39;&#39; Uninitialize the plug-in when Maya un-loads it. &#39;&#39;&#39;\n\
    mplugin = OpenMayaMPx.MFnPlugin( mobject )\n\
    try:\n\
        mplugin.deregisterCommand( kPluginCmdName )\n\
    except:\n\
        sys.stderr.write( &#39;Failed to unregister command: &#39; + kPluginCmdName )\n\
\n\
##########################################################\n\
# Sample usage.\n\
##########################################################\n\
&#39;&#39;&#39; \n\
# Copy the following lines and run them in Maya&#39;s Python Script Editor:\n\
\n\
import maya.cmds as cmds\n\
cmds.loadPlugin( &#39;sampleCommandFlag.py&#39; )\n\
cmds.myCommandWithFlag( myFlag = 4 )\n\
\n\
&#39;&#39;&#39;\n\
<blockquote>\n\
</blockquote></pre></div><p><strong>Note:</strong> For a more practical example of using command arguments, see <a href=\'#!/url=./dev_help/Maya-Python-API/Maya-Python-Plug-in-Learning/Command-Plug-in-Basics/Example-Creating-an-IK-Joint.html\' title=\'\'>Example: Creating an IK Joint Chain</a>.</p>\n\
\n\
<div class=\'section\'><a id=\"maya-plug-in-entry-and-exit-points---registering-the-argument-syntax\"></a><h2 id=\"maya-plug-in-entry-and-exit-points---registering-the-argument-syntax\">Maya Plug-in Entry and Exit Points - Registering the Argument Syntax</h2></div>\n\
<p>Compared to commands which do not process arguments or flags, the <span class=\'code\'>initializePlugin()</span> entry point needs to be modified to include the command&#39;s argument syntax.</p>\n\
<div class=\"codeBlock\"><pre class=\"prettyprint\">mplugin.registerCommand( kPluginCmdName, cmdCreator, syntaxCreator )\n\
    \n\
</pre></div><p>In particular, the call to <span class=\'code\'>MFnPlugin.registerCommand()</span> must have a third parameter: <span class=\'code\'>syntaxCreator</span>. We list the function parameters of <span class=\'code\'>MFnPlugin.registerCommand()</span> as follows:</p>\n\
<ol>\n\
<li><strong>Command Name</strong> - The name of the command: <span class=\'code\'>&#39;myCommandWithFlag&#39;</span>. This determines how the command is executed either through MEL or using the Python <span class=\'code\'>maya.cmds</span> module.</li>\n\
<li><strong>Command Creation Function Reference</strong> - A reference to the function which creates an instance of our command: <span class=\'code\'>cmdCreator</span>.</li>\n\
<li><p><strong>Syntax Creation Function</strong> - A reference to the function which returns an <span class=\'code\'><a href=\"javascript:void(0)\" data-symbol=\"MSyntax\" class=\"a_multireflink\" data-reflinkdata=\"[{&quot;path&quot;:&quot;cpp_ref/class_m_syntax.html&quot;,&quot;title&quot;:&quot;C++ API Reference&quot;,&quot;relpathtoroot&quot;:&quot;../../../../&quot;},{&quot;path&quot;:&quot;py_ref/class_open_maya_1_1_m_syntax.html&quot;,&quot;title&quot;:&quot;Python 2.0 API Reference&quot;,&quot;relpathtoroot&quot;:&quot;../../../../&quot;}]\">MSyntax</a></span> object: <span class=\'code\'>syntaxCreator</span>. This returned <span class=\'code\'><a href=\"javascript:void(0)\" data-symbol=\"MSyntax\" class=\"a_multireflink\" data-reflinkdata=\"[{&quot;path&quot;:&quot;cpp_ref/class_m_syntax.html&quot;,&quot;title&quot;:&quot;C++ API Reference&quot;,&quot;relpathtoroot&quot;:&quot;../../../../&quot;},{&quot;path&quot;:&quot;py_ref/class_open_maya_1_1_m_syntax.html&quot;,&quot;title&quot;:&quot;Python 2.0 API Reference&quot;,&quot;relpathtoroot&quot;:&quot;../../../../&quot;}]\">MSyntax</a></span> object defines the long and short names of each flag, as well as the expected type(s) of each flag. The short flag name (<span class=\'code\'>kShortFlagName</span>) should be a one or two letter string prefixed by a hyphen: <span class=\'code\'>&#39;-mf&#39;</span>. The long flag name (<span class=\'code\'>kLongFlagName</span>) is generally more descriptive and should also be prefixed by a hyphen: <span class=\'code\'>&#39;-myFlag&#39;</span>.</p>\n\
<div class=\"codeBlock\"><pre class=\"prettyprint\">kShortFlagName = &#39;-mf&#39;\n\
kLongFlagName = &#39;-myFlag&#39;\n\
\n\
# ...\n\
\n\
def syntaxCreator():\n\
    &#39;&#39;&#39; Defines the argument and flag syntax for this command. &#39;&#39;&#39;\n\
    syntax = OpenMaya.MSyntax()\n\
\n\
    # In this example, our flag will be expecting a numeric value, denoted by OpenMaya.MSyntax.kDouble. \n\
    syntax.addFlag( kShortFlagName, kLongFlagName, OpenMaya.MSyntax.kDouble )\n\
\n\
    # ... Add more flags here ...\n\
\n\
    return syntax\n\
<blockquote>\n\
</blockquote></pre></div><p><strong>Note:</strong> To add a <em>command argument</em>, the <span class=\'code\'>MSyntax.addArg()</span> function can be used. Consult the <span class=\'code\'><a href=\"javascript:void(0)\" data-symbol=\"MSyntax\" class=\"a_multireflink\" data-reflinkdata=\"[{&quot;path&quot;:&quot;cpp_ref/class_m_syntax.html&quot;,&quot;title&quot;:&quot;C++ API Reference&quot;,&quot;relpathtoroot&quot;:&quot;../../../../&quot;},{&quot;path&quot;:&quot;py_ref/class_open_maya_1_1_m_syntax.html&quot;,&quot;title&quot;:&quot;Python 2.0 API Reference&quot;,&quot;relpathtoroot&quot;:&quot;../../../../&quot;}]\">MSyntax</a></span> class documentation for more details.</p>\n\
</li>\n\
</ol>\n\
<div class=\'section\'><a id=\"command-behavior---parsing-flags\"></a><h2 id=\"command-behavior---parsing-flags\">Command Behavior - Parsing Flags</h2></div>\n\
<p>The <span class=\'code\'>doIt()</span> method of our command should have some code dedicated to parsing its passed arguments and flags. In <span class=\'code\'>parseArguments()</span>, we instantiate an <span class=\'code\'><a href=\"javascript:void(0)\" data-symbol=\"MArgParser\" class=\"a_multireflink\" data-reflinkdata=\"[{&quot;path&quot;:&quot;cpp_ref/class_m_arg_parser.html&quot;,&quot;title&quot;:&quot;C++ API Reference&quot;,&quot;relpathtoroot&quot;:&quot;../../../../&quot;},{&quot;path&quot;:&quot;py_ref/class_open_maya_1_1_m_arg_parser.html&quot;,&quot;title&quot;:&quot;Python 2.0 API Reference&quot;,&quot;relpathtoroot&quot;:&quot;../../../../&quot;}]\">MArgParser</a></span> object using an <span class=\'code\'><a href=\"javascript:void(0)\" data-symbol=\"MSyntax\" class=\"a_multireflink\" data-reflinkdata=\"[{&quot;path&quot;:&quot;cpp_ref/class_m_syntax.html&quot;,&quot;title&quot;:&quot;C++ API Reference&quot;,&quot;relpathtoroot&quot;:&quot;../../../../&quot;},{&quot;path&quot;:&quot;py_ref/class_open_maya_1_1_m_syntax.html&quot;,&quot;title&quot;:&quot;Python 2.0 API Reference&quot;,&quot;relpathtoroot&quot;:&quot;../../../../&quot;}]\">MSyntax</a></span> object (obtained from <span class=\'code\'>self.syntax()</span>), and the <span class=\'code\'><a href=\"javascript:void(0)\" data-symbol=\"MArgList\" class=\"a_multireflink\" data-reflinkdata=\"[{&quot;path&quot;:&quot;cpp_ref/class_m_arg_list.html&quot;,&quot;title&quot;:&quot;C++ API Reference&quot;,&quot;relpathtoroot&quot;:&quot;../../../../&quot;},{&quot;path&quot;:&quot;py_ref/class_open_maya_1_1_m_arg_list.html&quot;,&quot;title&quot;:&quot;Python 2.0 API Reference&quot;,&quot;relpathtoroot&quot;:&quot;../../../../&quot;}]\">MArgList</a></span> object (<span class=\'code\'>args</span>). We check for the existence of specific flags using <span class=\'code\'>MArgParser.isFlagSet()</span>. The call to <span class=\'code\'>MArgParser.flagArgumentInt()</span> extracts the value associated with a specific flag as an integer.</p>\n\
<div class=\"codeBlock\"><pre class=\"prettyprint\">    def doIt(self, args):\n\
        &#39;&#39;&#39; Command execution. &#39;&#39;&#39;\n\
        \n\
        # We recommend parsing your arguments first.\n\
        self.parseArguments( args )\n\
\n\
        # Remove the following &#39;pass&#39; keyword and replace it with the code you want to run. \n\
        pass\n\
    \n\
    def parseArguments(self, args):\n\
        &#39;&#39;&#39; \n\
        The presence of this function is not enforced,\n\
        but helps separate argument parsing code from other\n\
        command code. \n\
        &#39;&#39;&#39;\n\
        \n\
        # The following <a href=\"javascript:void(0)\" data-symbol=\"MArgParser\" class=\"a_multireflink\" data-reflinkdata=\"[{&quot;path&quot;:&quot;cpp_ref/class_m_arg_parser.html&quot;,&quot;title&quot;:&quot;C++ API Reference&quot;,&quot;relpathtoroot&quot;:&quot;../../../../&quot;},{&quot;path&quot;:&quot;py_ref/class_open_maya_1_1_m_arg_parser.html&quot;,&quot;title&quot;:&quot;Python 2.0 API Reference&quot;,&quot;relpathtoroot&quot;:&quot;../../../../&quot;}]\">MArgParser</a> object allows you to check if specific flags are set.\n\
        argData = OpenMaya.MArgParser( self.syntax(), args )\n\
        \n\
        if argData.isFlagSet( kShortFlagName ):\n\
                \n\
            # In this case, we print the passed flag&#39;s value as an integer.\n\
            # We use the &#39;0&#39; to index the flag&#39;s first and only parameter.\n\
            flagValue = argData.flagArgumentInt( kShortFlagName, 0 )\n\
            print kLongFlagName + &#39;: &#39; + str( flagValue )\n\
            \n\
        \n\
        # ... If there are more flags, process them here ...\n\
<blockquote>\n\
</blockquote></pre></div><p><strong>Note:</strong> To parse a <em>command argument</em>, the <span class=\'code\'>MArgParser.commandArgument*()</span> functions can be used. Consult the <span class=\'code\'><a href=\"javascript:void(0)\" data-symbol=\"MArgParser\" class=\"a_multireflink\" data-reflinkdata=\"[{&quot;path&quot;:&quot;cpp_ref/class_m_arg_parser.html&quot;,&quot;title&quot;:&quot;C++ API Reference&quot;,&quot;relpathtoroot&quot;:&quot;../../../../&quot;},{&quot;path&quot;:&quot;py_ref/class_open_maya_1_1_m_arg_parser.html&quot;,&quot;title&quot;:&quot;Python 2.0 API Reference&quot;,&quot;relpathtoroot&quot;:&quot;../../../../&quot;}]\">MArgParser</a></span> class documentation for more details.</p>\n\
\n\
<div class=\'section\'><a id=\"parsing-flags-with-multiple-parameters\"></a><h2 id=\"parsing-flags-with-multiple-parameters\">Parsing Flags with Multiple Parameters</h2></div>\n\
<p>Suppose we wanted to parse a flag which contained multiple <em>parameters</em>, for example a three-dimensional vector, similarly to the following use case:</p>\n\
<div class=\"codeBlock\"><pre class=\"prettyprint\">import maya.cmds as cmds\n\
cmds.loadPlugin( &#39;sampleCommandFlagTuple.py&#39; )\n\
cmds.myCommandWithTupleFlag( myTupleFlag = (10, 20, 30) )\n\
</pre></div><p>To achieve this, we must modify two sections of our code:</p>\n\
<ol>\n\
<li><p><strong>Syntax Creation Function</strong> - The syntax creation function would require a tuple of three <span class=\'code\'>OpenMaya.MSyntax.kDouble</span> parameters in the call to <span class=\'code\'>MSyntax.addFlag()</span>. This new flag syntax definition would tell Maya to expect a tuple of three numbers, instead of just a single number for that flag.</p>\n\
<div class=\"codeBlock\"><pre class=\"prettyprint\">def syntaxCreator():\n\
    &#39;&#39;&#39; Defines the argument and flag syntax for this command. &#39;&#39;&#39;\n\
    syntax = OpenMaya.MSyntax()\n\
\n\
    # In this example, our flag will be expecting three OpenMaya.MSyntax.kDouble parameters. \n\
    syntax.addFlag( kShortFlagName, kLongFlagName, (OpenMaya.MSyntax.kDouble, OpenMaya.MSyntax.kDouble, OpenMaya.MSyntax.kDouble) )\n\
\n\
    # ... Add more flags here ...\n\
\n\
    return syntax</pre></div></li>\n\
</ol>\n\
<blockquote>\n\
<p><strong>Note:</strong> In the Python API 1.0, the parameters are not passed in a tuple.</p>\n\
</blockquote>\n\
<ol>\n\
<li><p><strong>Argument Parsing</strong> - In the method body of <span class=\'code\'>parseArguments()</span>, we parse the flag&#39;s three parameters using indexes <span class=\'code\'>0</span> to <span class=\'code\'>2</span> in three separate calls to <span class=\'code\'>MArgParser.flagArgumentInt()</span>:</p>\n\
<div class=\"codeBlock\"><pre class=\"prettyprint\">    def doIt(self, args):\n\
        &#39;&#39;&#39; Command execution. &#39;&#39;&#39;\n\
\n\
        # We recommend parsing your arguments first.\n\
        self.parseArguments( args )\n\
\n\
        # Remove the following &#39;pass&#39; keyword and replace it with the code you want to run. \n\
        pass\n\
\n\
    def parseArguments(self, args):\n\
        &#39;&#39;&#39; \n\
        The presence of this function is not enforced,\n\
        but helps separate argument parsing code from other\n\
        command code. \n\
        &#39;&#39;&#39;\n\
\n\
        # The following <a href=\"javascript:void(0)\" data-symbol=\"MArgParser\" class=\"a_multireflink\" data-reflinkdata=\"[{&quot;path&quot;:&quot;cpp_ref/class_m_arg_parser.html&quot;,&quot;title&quot;:&quot;C++ API Reference&quot;,&quot;relpathtoroot&quot;:&quot;../../../../&quot;},{&quot;path&quot;:&quot;py_ref/class_open_maya_1_1_m_arg_parser.html&quot;,&quot;title&quot;:&quot;Python 2.0 API Reference&quot;,&quot;relpathtoroot&quot;:&quot;../../../../&quot;}]\">MArgParser</a> object allows you to check if specific flags are set.\n\
        argData = OpenMaya.MArgParser( self.syntax(), args )\n\
\n\
        if argData.isFlagSet( kShortFlagName ):\n\
\n\
            # In this case, we print the passed flags&#39;s three parameters, indexed from 0 to 2.\n\
            flagParam0 = argData.flagArgumentInt( kShortFlagName, 0 )\n\
            flagParam1 = argData.flagArgumentInt( kShortFlagName, 1 )\n\
            flagParam2 = argData.flagArgumentInt( kShortFlagName, 2 )\n\
\n\
            print kLongFlagName + &#39;[0]: &#39; + str( flagParam0 )\n\
            print kLongFlagName + &#39;[1]: &#39; + str( flagParam1 )\n\
            print kLongFlagName + &#39;[2]: &#39; + str( flagParam2 )</pre></div></li>\n\
</ol>\n\
<div class=\'section\'><a id=\"sample-command-plug-in-one-flag-with-multiple-parameters\"></a><h2 id=\"sample-command-plug-in-one-flag-with-multiple-parameters\">Sample Command Plug-in: One Flag with Multiple Parameters</h2></div>\n\
<p>The following Python code creates a command which prints the three parameters passed with the given flag.</p>\n\
<p>Python API 2.0:</p>\n\
<div class=\"codeBlock\"><pre class=\"prettyprint\"># pySampleCommandFlagTuple.py\n\
\n\
import sys\n\
import maya.api.OpenMaya as OpenMaya\n\
# ... additional imports here ...\n\
\n\
kPluginCmdName = &#39;myCommandWithTupleFlag&#39;\n\
\n\
kShortFlagName = &#39;-tf&#39;\n\
kLongFlagName = &#39;-myTupleFlag&#39;\n\
\n\
def maya_useNewAPI():\n\
    &quot;&quot;&quot;\n\
    The presence of this function tells Maya that the plugin produces, and\n\
    expects to be passed, objects created using the Maya Python API 2.0.\n\
    &quot;&quot;&quot;\n\
    pass\n\
    \n\
##########################################################\n\
# Plug-in \n\
##########################################################\n\
class MyCommandWithFlagTupleClass( OpenMaya.MPxCommand ):\n\
    \n\
    def __init__(self):\n\
        &#39;&#39;&#39; Constructor. &#39;&#39;&#39;\n\
        OpenMaya.MPxCommand.__init__(self)\n\
    \n\
    def doIt(self, args):\n\
        &#39;&#39;&#39; Command execution. &#39;&#39;&#39;\n\
        \n\
        # We recommend parsing your arguments first.\n\
        self.parseArguments( args )\n\
\n\
        # Remove the following &#39;pass&#39; keyword and replace it with the code you want to run. \n\
        pass\n\
    \n\
    def parseArguments(self, args):\n\
        &#39;&#39;&#39; \n\
        The presence of this function is not enforced,\n\
        but helps separate argument parsing code from other\n\
        command code. \n\
        &#39;&#39;&#39;\n\
        \n\
        # The following <a href=\"javascript:void(0)\" data-symbol=\"MArgParser\" class=\"a_multireflink\" data-reflinkdata=\"[{&quot;path&quot;:&quot;cpp_ref/class_m_arg_parser.html&quot;,&quot;title&quot;:&quot;C++ API Reference&quot;,&quot;relpathtoroot&quot;:&quot;../../../../&quot;},{&quot;path&quot;:&quot;py_ref/class_open_maya_1_1_m_arg_parser.html&quot;,&quot;title&quot;:&quot;Python 2.0 API Reference&quot;,&quot;relpathtoroot&quot;:&quot;../../../../&quot;}]\">MArgParser</a> object allows you to check if specific flags are set.\n\
        argData = OpenMaya.MArgParser( self.syntax(), args )\n\
        \n\
        if argData.isFlagSet( kShortFlagName ):\n\
                \n\
            # In this case, we print the passed flags&#39;s three parameters, indexed from 0 to 2.\n\
            flagParam0 = argData.flagArgumentInt( kShortFlagName, 0 )\n\
            flagParam1 = argData.flagArgumentInt( kShortFlagName, 1 )\n\
            flagParam2 = argData.flagArgumentInt( kShortFlagName, 2 )\n\
            \n\
            print kLongFlagName + &#39;[0]: &#39; + str( flagParam0 )\n\
            print kLongFlagName + &#39;[1]: &#39; + str( flagParam1 )\n\
            print kLongFlagName + &#39;[2]: &#39; + str( flagParam2 )\n\
            \n\
        \n\
        # ... If there are more flags, process them here ...\n\
\n\
##########################################################\n\
# Plug-in initialization.\n\
##########################################################\n\
def cmdCreator():\n\
    &#39;&#39;&#39; Create an instance of our command. &#39;&#39;&#39;\n\
    return MyCommandWithFlagTupleClass()\n\
\n\
def syntaxCreator():\n\
    &#39;&#39;&#39; Defines the argument and flag syntax for this command. &#39;&#39;&#39;\n\
    syntax = OpenMaya.MSyntax()\n\
    \n\
    # In this example, our flag will be expecting three OpenMaya.MSyntax.kDouble parameters. \n\
    syntax.addFlag( kShortFlagName, kLongFlagName, (OpenMaya.MSyntax.kDouble, OpenMaya.MSyntax.kDouble, OpenMaya.MSyntax.kDouble) )\n\
    \n\
    # ... Add more flags here ...\n\
        \n\
    return syntax\n\
    \n\
def initializePlugin( mobject ):\n\
    &#39;&#39;&#39; Initialize the plug-in when Maya loads it. &#39;&#39;&#39;\n\
    mplugin = OpenMaya.MFnPlugin( mobject )\n\
    try:\n\
        mplugin.registerCommand( kPluginCmdName, cmdCreator, syntaxCreator )\n\
    except:\n\
        sys.stderr.write( &#39;Failed to register command: &#39; + kPluginCmdName )\n\
\n\
def uninitializePlugin( mobject ):\n\
    &#39;&#39;&#39; Uninitialize the plug-in when Maya un-loads it. &#39;&#39;&#39;\n\
    mplugin = OpenMaya.MFnPlugin( mobject )\n\
    try:\n\
        mplugin.deregisterCommand( kPluginCmdName )\n\
    except:\n\
        sys.stderr.write( &#39;Failed to unregister command: &#39; + kPluginCmdName )\n\
\n\
##########################################################\n\
# Sample usage.\n\
##########################################################\n\
&#39;&#39;&#39; \n\
# Copy the following lines and run them in Maya&#39;s Python Script Editor:\n\
\n\
import maya.cmds as cmds\n\
cmds.loadPlugin( &#39;sampleCommandFlagTuple.py&#39; )\n\
cmds.myCommandWithTupleFlag( myTupleFlag = (10, 20, 30) )\n\
\n\
&#39;&#39;&#39;\n\
</pre></div><p>Python API 1.0:</p>\n\
<div class=\"codeBlock\"><pre class=\"prettyprint\"># sampleCommandFlagTuple.py\n\
\n\
import sys\n\
import maya.OpenMayaMPx as OpenMayaMPx\n\
import maya.OpenMaya as OpenMaya\n\
# ... additional imports here ...\n\
\n\
kPluginCmdName = &#39;myCommandWithTupleFlag&#39;\n\
\n\
kShortFlagName = &#39;-tf&#39;\n\
kLongFlagName = &#39;-myTupleFlag&#39;\n\
\n\
##########################################################\n\
# Plug-in \n\
##########################################################\n\
class MyCommandWithFlagTupleClass( OpenMayaMPx.MPxCommand ):\n\
    \n\
    def __init__(self):\n\
        &#39;&#39;&#39; Constructor. &#39;&#39;&#39;\n\
        OpenMayaMPx.MPxCommand.__init__(self)\n\
    \n\
    def doIt(self, args):\n\
        &#39;&#39;&#39; Command execution. &#39;&#39;&#39;\n\
        \n\
        # We recommend parsing your arguments first.\n\
        self.parseArguments( args )\n\
\n\
        # Remove the following &#39;pass&#39; keyword and replace it with the code you want to run. \n\
        pass\n\
    \n\
    def parseArguments(self, args):\n\
        &#39;&#39;&#39; \n\
        The presence of this function is not enforced,\n\
        but helps separate argument parsing code from other\n\
        command code. \n\
        &#39;&#39;&#39;\n\
        \n\
        # The following <a href=\"javascript:void(0)\" data-symbol=\"MArgParser\" class=\"a_multireflink\" data-reflinkdata=\"[{&quot;path&quot;:&quot;cpp_ref/class_m_arg_parser.html&quot;,&quot;title&quot;:&quot;C++ API Reference&quot;,&quot;relpathtoroot&quot;:&quot;../../../../&quot;},{&quot;path&quot;:&quot;py_ref/class_open_maya_1_1_m_arg_parser.html&quot;,&quot;title&quot;:&quot;Python 2.0 API Reference&quot;,&quot;relpathtoroot&quot;:&quot;../../../../&quot;}]\">MArgParser</a> object allows you to check if specific flags are set.\n\
        argData = OpenMaya.MArgParser( self.syntax(), args )\n\
        \n\
        if argData.isFlagSet( kShortFlagName ):\n\
                \n\
            # In this case, we print the passed flags&#39;s three parameters, indexed from 0 to 2.\n\
            flagParam0 = argData.flagArgumentInt( kShortFlagName, 0 )\n\
            flagParam1 = argData.flagArgumentInt( kShortFlagName, 1 )\n\
            flagParam2 = argData.flagArgumentInt( kShortFlagName, 2 )\n\
            \n\
            print kLongFlagName + &#39;[0]: &#39; + str( flagParam0 )\n\
            print kLongFlagName + &#39;[1]: &#39; + str( flagParam1 )\n\
            print kLongFlagName + &#39;[2]: &#39; + str( flagParam2 )\n\
            \n\
        \n\
        # ... If there are more flags, process them here ...\n\
\n\
##########################################################\n\
# Plug-in initialization.\n\
##########################################################\n\
def cmdCreator():\n\
    &#39;&#39;&#39; Create an instance of our command. &#39;&#39;&#39;\n\
    return OpenMayaMPx.asMPxPtr( MyCommandWithFlagTupleClass() )\n\
\n\
def syntaxCreator():\n\
    &#39;&#39;&#39; Defines the argument and flag syntax for this command. &#39;&#39;&#39;\n\
    syntax = OpenMaya.MSyntax()\n\
    \n\
    # In this example, our flag will be expecting three OpenMaya.MSyntax.kDouble parameters. \n\
    syntax.addFlag( kShortFlagName, kLongFlagName, OpenMaya.MSyntax.kDouble, OpenMaya.MSyntax.kDouble, OpenMaya.MSyntax.kDouble )\n\
    \n\
    # ... Add more flags here ...\n\
        \n\
    return syntax\n\
    \n\
def initializePlugin( mobject ):\n\
    &#39;&#39;&#39; Initialize the plug-in when Maya loads it. &#39;&#39;&#39;\n\
    mplugin = OpenMayaMPx.MFnPlugin( mobject )\n\
    try:\n\
        mplugin.registerCommand( kPluginCmdName, cmdCreator, syntaxCreator )\n\
    except:\n\
        sys.stderr.write( &#39;Failed to register command: &#39; + kPluginCmdName )\n\
\n\
def uninitializePlugin( mobject ):\n\
    &#39;&#39;&#39; Uninitialize the plug-in when Maya un-loads it. &#39;&#39;&#39;\n\
    mplugin = OpenMayaMPx.MFnPlugin( mobject )\n\
    try:\n\
        mplugin.deregisterCommand( kPluginCmdName )\n\
    except:\n\
        sys.stderr.write( &#39;Failed to unregister command: &#39; + kPluginCmdName )\n\
\n\
##########################################################\n\
# Sample usage.\n\
##########################################################\n\
&#39;&#39;&#39; \n\
# Copy the following lines and run them in Maya&#39;s Python Script Editor:\n\
\n\
import maya.cmds as cmds\n\
cmds.loadPlugin( &#39;sampleCommandFlagTuple.py&#39; )\n\
cmds.myCommandWithTupleFlag( myTupleFlag = (10, 20, 30) )\n\
\n\
&#39;&#39;&#39;\n\
</pre></div>      <div class=\"footer-block\"><a href=\"../html/ac.cmtdialog.htm\" class=\"comments-anchor\" target=\"_blank\"><span class=\"comments-link\">Please send us your comment about this page</span></a></div></div>\n\
   </div></body>\n\
</html>\n\
";