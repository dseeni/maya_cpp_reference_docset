var topic = "<!-- saved from url=(0024)http://docs.autodesk.com -->\n\
<html>\n\
   <head>\n\
<link href=\"../../../style/prettify.css\" type=\"text/css\" rel=\"stylesheet\">\n\
<script type=\"text/javascript\" src=\"../../../scripts/prettify.js\"></script><script src=\"../../../scripts/lib/jquery-1.11.1.min.js\" type=\"text/javascript\"></script><meta http-equiv=\"Content-Type\" content=\"text/html; charset=utf-8\"><meta http-equiv=\"Content-Style-Type\" content=\"text/css\"><meta name=\"generator\" content=\"pandoc\"><meta http-equiv=\"Content-Type\" content=\"text/html; charset=UTF-8\"><script type=\"text/javascript\" src=\"../../../scripts/utils/adsk.redirect.js\"></script>\n\
      <title>Using the Maya Python API</title>\n\
   <meta name=\"topic-subtype\" content=\"C++\"></head>\n\
   <body height=\"100%\"><div class=\"body_content\" id=\"body-content\"><style type=\"text/css\">code{white-space: pre;}</style><script>$(document).ready(function() { yepnope.injectJs(\"./scripts/multireflink.js\"); });</script><script>$(document).ready(function () { prettyPrint(); } );</script><script>$(\"div#WidgetFloaterPanels,link[href*=\'microsofttranslator.com\'],script[src*=\'microsofttranslator.com\'],script[src*=\'bing.com\']\").remove();</script><script type=\'text/javascript\'>$(\"div#navigation,div#breadcrumbs,div#banner\").attr(\"translate\",\"no\"); var mtLocation = ((location && location.href && location.href.indexOf(\'https\') == 0)?\'https://ssl.microsofttranslator.com\':\'http://www.microsofttranslator.com\')+\'/ajax/v3/WidgetV3.ashx?ctf=True&ui=true&settings=Manual&from=en&hidelanguages=\'; yepnope.injectJs(mtLocation, function() {}, { charset:\'utf-8\', type:\'text/javascript\' } );</script><script></script><script></script><!-- begin MT -->\n\
            \n\
            <div id=\'MicrosoftTranslatorWidget\' class=\'Dark\' style=\'float:right;z-index:100;color:white;background-color:#bbbbbb;height:58px;overflow:hidden\'></div><div id=\"reflinkdiv\"></div>\n\
      <div>\n\
         <div class=\"head\">\n\
            <h1>Using the Maya Python API</h1>\n\
         </div>\n\
\n\
<div class=\'section\'><a id=\"using-the-maya-python-api\"></a></div>\n\
<p>It is possible to write basic scripts that use the wrapper, iterator and function set classes of the Maya API. These scripts can query and manipulate the Maya model but are not fully integrated into Maya. A scripted plug-in provides a more complex solution that is tightly integrated into Maya. In this section, we discuss how to write both basic and scripted plug-in scripts along with standalone scripts.</p>\n\
<p>As this is a Python based API, knowledge of Python is required.</p>\n\
<div class=\'section\'><a id=\"importing-modules\"></a><h2 id=\"importing-modules\">Importing modules</h2></div>\n\
<p>The Maya Python API is contained in a number of Python modules. You must import the functionality that you wish to use in your script. Additionally, the Maya Python API lives in the Maya namespace; therefore, an extra prefix is required. To import the OpenMaya module, run the following:</p>\n\
<div class=\"codeBlock\"><pre class=\"prettyprint\">import maya.OpenMaya\n\
\n\
</pre></div><div class=\'section\'><a id=\"help-on-a-module-or-class\"></a><h2 id=\"help-on-a-module-or-class\">Help on a module or class</h2></div>\n\
<p>Information can be displayed about any of the modules or classes using the <span class=\'code\'>help</span> command. For example, if you wish to display the class information for <span class=\'code\'><a href=\"javascript:void(0)\" data-symbol=\"MVector\" class=\"a_multireflink\" data-reflinkdata=\"[{&quot;path&quot;:&quot;cpp_ref/class_m_vector.html&quot;,&quot;title&quot;:&quot;C++ API Reference&quot;,&quot;relpathtoroot&quot;:&quot;../../../&quot;},{&quot;path&quot;:&quot;py_ref/class_open_maya_1_1_m_vector.html&quot;,&quot;title&quot;:&quot;Maya Python API 2.0 Reference&quot;,&quot;relpathtoroot&quot;:&quot;../../../&quot;}]\">MVector</a></span>, use:</p>\n\
<p><span class=\'code\'>help(maya.OpenMaya.MVector)</span></p>\n\
<p>It is also possible to display the information of an entire module:</p>\n\
<p><span class=\'code\'>help(maya.OpenMaya)</span></p>\n\
<p>This operation will take a while to return since the OpenMaya module is very large.</p>\n\
<div class=\'section\'><a id=\"writing-scripts\"></a><h2 id=\"writing-scripts\">Writing scripts</h2></div>\n\
<p>The Maya Python API modules contain the classes that are available for Python programming. These classes are separated into different categories and have appropriate naming conventions to signify their association. Classes include:</p>\n\
<div class=\'section\'><a id=\"mfn\"></a><h3 id=\"mfn\">MFn</h3></div>\n\
<p>Any class with this prefix is a function set used to operate on <span class=\'code\'><a href=\"javascript:void(0)\" data-symbol=\"MObject\" class=\"a_multireflink\" data-reflinkdata=\"[{&quot;path&quot;:&quot;cpp_ref/class_m_object.html&quot;,&quot;title&quot;:&quot;C++ API Reference&quot;,&quot;relpathtoroot&quot;:&quot;../../../&quot;},{&quot;path&quot;:&quot;py_ref/class_open_maya_1_1_m_object.html&quot;,&quot;title&quot;:&quot;Maya Python API 2.0 Reference&quot;,&quot;relpathtoroot&quot;:&quot;../../../&quot;}]\">MObject</a></span>s of a particular type.</p>\n\
<div class=\'section\'><a id=\"mit\"></a><h3 id=\"mit\">MIt</h3></div>\n\
<p>These classes are iterators and work on <span class=\'code\'><a href=\"javascript:void(0)\" data-symbol=\"MObject\" class=\"a_multireflink\" data-reflinkdata=\"[{&quot;path&quot;:&quot;cpp_ref/class_m_object.html&quot;,&quot;title&quot;:&quot;C++ API Reference&quot;,&quot;relpathtoroot&quot;:&quot;../../../&quot;},{&quot;path&quot;:&quot;py_ref/class_open_maya_1_1_m_object.html&quot;,&quot;title&quot;:&quot;Maya Python API 2.0 Reference&quot;,&quot;relpathtoroot&quot;:&quot;../../../&quot;}]\">MObject</a></span>s similar to the way a function set does. For example, <span class=\'code\'><a href=\"javascript:void(0)\" data-symbol=\"MItCurveCV\" class=\"a_multireflink\" data-reflinkdata=\"[{&quot;path&quot;:&quot;cpp_ref/class_m_it_curve_c_v.html&quot;,&quot;title&quot;:&quot;C++ API Reference&quot;,&quot;relpathtoroot&quot;:&quot;../../../&quot;}]\">MItCurveCV</a></span> is used to operate on an individual NURBS curve CV (there is no <span class=\'code\'>MFnNurbsCurveCV</span>), or, iteratively, on all the CVs of a curve.</p>\n\
<div class=\'section\'><a id=\"mpx\"></a><h3 id=\"mpx\">MPx</h3></div>\n\
<p>Classes with this prefix are all &quot;Proxies&quot;, that is, API classes designed for you to derive from and create your own object types.</p>\n\
<div class=\'section\'><a id=\"m-classes\"></a><h3 id=\"m-classes\">M classes</h3></div>\n\
<p>Most, although not all, of these classes are &quot;Wrappers&quot;. Examples of this class are: <span class=\'code\'><a href=\"javascript:void(0)\" data-symbol=\"MVector\" class=\"a_multireflink\" data-reflinkdata=\"[{&quot;path&quot;:&quot;cpp_ref/class_m_vector.html&quot;,&quot;title&quot;:&quot;C++ API Reference&quot;,&quot;relpathtoroot&quot;:&quot;../../../&quot;},{&quot;path&quot;:&quot;py_ref/class_open_maya_1_1_m_vector.html&quot;,&quot;title&quot;:&quot;Maya Python API 2.0 Reference&quot;,&quot;relpathtoroot&quot;:&quot;../../../&quot;}]\">MVector</a></span>, <span class=\'code\'><a href=\"javascript:void(0)\" data-symbol=\"MIntArray\" class=\"a_multireflink\" data-reflinkdata=\"[{&quot;path&quot;:&quot;cpp_ref/class_m_int_array.html&quot;,&quot;title&quot;:&quot;C++ API Reference&quot;,&quot;relpathtoroot&quot;:&quot;../../../&quot;},{&quot;path&quot;:&quot;py_ref/class_open_maya_1_1_m_int_array.html&quot;,&quot;title&quot;:&quot;Maya Python API 2.0 Reference&quot;,&quot;relpathtoroot&quot;:&quot;../../../&quot;}]\">MIntArray</a></span>, and so forth.</p>\n\
<p>We can use wrapper and function set classes to write scripts such as the following:</p>\n\
<div class=\"codeBlock\"><pre class=\"prettyprint\">import maya.OpenMaya\n\
vector1 = maya.OpenMaya.MVector(0,1,0)\n\
vector2 = maya.OpenMaya.MVector(1,0,0)\n\
vector3 = maya.OpenMaya.MVector(0,0,2)\n\
newVector = vector1 + vector2 + vector3\n\
print &quot;newVector %f, %f, %f &quot; % (newVector.x, newVector.y, newVector.z)\n\
\n\
</pre></div><p>It is possible to shorten the symbol names used by modifying the import command:</p>\n\
<div class=\"codeBlock\"><pre class=\"prettyprint\">import maya.OpenMaya as OpenMaya\n\
vector1 = <a href=\"javascript:void(0)\" data-symbol=\"OpenMaya.MVector\" class=\"a_multireflink\" data-reflinkdata=\"[{&quot;path&quot;:&quot;py_ref/class_open_maya_1_1_m_vector.html&quot;,&quot;title&quot;:&quot;Maya Python API 2.0 Reference&quot;,&quot;relpathtoroot&quot;:&quot;../../../&quot;}]\">OpenMaya.MVector</a>(0,1,0)\n\
\n\
</pre></div><p>Scripts can access dependency graph information using the Maya Python API classes. The following is a script that finds the persp node and prints out its <span class=\'code\'>translateX</span> attribute value:</p>\n\
<div class=\"codeBlock\"><pre class=\"prettyprint\"># import the OpenMaya module\n\
import maya.OpenMaya as OpenMaya\n\
\n\
# function that returns a node object given a name\n\
def nameToNode( name ):\n\
    selectionList = <a href=\"javascript:void(0)\" data-symbol=\"OpenMaya.MSelectionList\" class=\"a_multireflink\" data-reflinkdata=\"[{&quot;path&quot;:&quot;py_ref/class_open_maya_1_1_m_selection_list.html&quot;,&quot;title&quot;:&quot;Maya Python API 2.0 Reference&quot;,&quot;relpathtoroot&quot;:&quot;../../../&quot;}]\">OpenMaya.MSelectionList</a>()\n\
    selectionList.add( name )\n\
    node = <a href=\"javascript:void(0)\" data-symbol=\"OpenMaya.MObject\" class=\"a_multireflink\" data-reflinkdata=\"[{&quot;path&quot;:&quot;py_ref/class_open_maya_1_1_m_object.html&quot;,&quot;title&quot;:&quot;Maya Python API 2.0 Reference&quot;,&quot;relpathtoroot&quot;:&quot;../../../&quot;}]\">OpenMaya.MObject</a>()\n\
    selectionList.getDependNode( 0, node )\n\
    return node\n\
\n\
# function that finds a plug given a node object and plug name\n\
def nameToNodePlug( attrName, nodeObject ):\n\
    depNodeFn = <a href=\"javascript:void(0)\" data-symbol=\"OpenMaya.MFnDependencyNode\" class=\"a_multireflink\" data-reflinkdata=\"[{&quot;path&quot;:&quot;py_ref/class_open_maya_1_1_m_fn_dependency_node.html&quot;,&quot;title&quot;:&quot;Maya Python API 2.0 Reference&quot;,&quot;relpathtoroot&quot;:&quot;../../../&quot;}]\">OpenMaya.MFnDependencyNode</a>( nodeObject )\n\
    attrObject = depNodeFn.attribute( attrName )\n\
    plug = <a href=\"javascript:void(0)\" data-symbol=\"OpenMaya.MPlug\" class=\"a_multireflink\" data-reflinkdata=\"[{&quot;path&quot;:&quot;py_ref/class_open_maya_1_1_m_plug.html&quot;,&quot;title&quot;:&quot;Maya Python API 2.0 Reference&quot;,&quot;relpathtoroot&quot;:&quot;../../../&quot;}]\">OpenMaya.MPlug</a>( nodeObject, attrObject )\n\
    return plug\n\
\n\
# Find the persp camera node\n\
print &quot;Find the persp camera&quot;\n\
perspNode = nameToNode( &quot;persp&quot; )\n\
print &quot;APItype %d&quot; % perspNode.apiType()\n\
print &quot;APItype string %s&quot; % perspNode.apiTypeStr()\n\
\n\
# Print the translateX value\n\
translatePlug = nameToNodePlug( &quot;translateX&quot;, perspNode )\n\
print &quot;Plug name: %s&quot; % translatePlug.name()\n\
print &quot;Plug value %g&quot; % translatePlug.asDouble())\n\
\n\
</pre></div><p>The example above demonstrates the following:</p>\n\
<ul>\n\
<li>To instantiate a class, use the <span class=\'code\'>fn = OpenMaya.MFnFunctionSet()</span> notation.</li>\n\
<li><span class=\'code\'><a href=\"javascript:void(0)\" data-symbol=\"MObject\" class=\"a_multireflink\" data-reflinkdata=\"[{&quot;path&quot;:&quot;cpp_ref/class_m_object.html&quot;,&quot;title&quot;:&quot;C++ API Reference&quot;,&quot;relpathtoroot&quot;:&quot;../../../&quot;},{&quot;path&quot;:&quot;py_ref/class_open_maya_1_1_m_object.html&quot;,&quot;title&quot;:&quot;Maya Python API 2.0 Reference&quot;,&quot;relpathtoroot&quot;:&quot;../../../&quot;}]\">MObject</a></span>s can be created using <span class=\'code\'>node = OpenMaya.MObject()</span>.</li>\n\
<li>Although Python is a typeless language, you must instantiate the correct type in order to pass it as a parameter of the class.</li>\n\
<li>Python strings are passed and returned in place of the <span class=\'code\'><a href=\"javascript:void(0)\" data-symbol=\"MString\" class=\"a_multireflink\" data-reflinkdata=\"[{&quot;path&quot;:&quot;cpp_ref/class_m_string.html&quot;,&quot;title&quot;:&quot;C++ API Reference&quot;,&quot;relpathtoroot&quot;:&quot;../../../&quot;}]\">MString</a></span> wrapper class.</li>\n\
</ul>\n\
<blockquote>\n\
<p><strong>Note:</strong> For the sake of clarity, the example above has omitted error checking.</p>\n\
</blockquote>\n\
<div class=\'section\'><a id=\"scripted-plug-ins\"></a><h2 id=\"scripted-plug-ins\">Scripted plug-ins</h2></div>\n\
<p>Scripted plug-ins allow a developer to create a solution that is tightly coupled with Maya. Scripted plug-ins allow a developer to support functionality such as the undoing of commands and the building of appropriate requires lines into the Maya scene file. Another advantage of using a scripted plug-in is that its functionality is available in both MEL and Python.</p>\n\
<div class=\'section\'><a id=\"using-a-scripted-plug-in\"></a><h3 id=\"using-a-scripted-plug-in\">Using a scripted plug-in</h3></div>\n\
<p>We have extended the Maya Plug-in Manager to support the loading and unloading of scripted plug-ins.</p>\n\
<div class=\'figure\'><img src=\'developer/images/plugin_manager_python_QT.png\' title=\'\'></div>\n\
<p>Any file ending with a <span class=\'code\'>.py</span> extension that is on the <span class=\'code\'>MAYA_PLUG_IN_PATH</span> is displayed in the Plug-in Manager. Select the Loaded check-box or the Auto load check box to either load or auto-load the scripted plug-in.</p>\n\
<blockquote>\n\
<p><strong>Note:</strong> Although, it is possible to have a non scripted plug-in <span class=\'code\'>.py</span> script on the <span class=\'code\'>MAYA_PLUG_IN_PATH</span>, these items will not load. Warnings will be issued that entry points cannot be found.</p>\n\
</blockquote>\n\
<p>The plug-in can either be loaded from the Plug-in Manager or from the MEL or Python command tabs. In MEL, use the <span class=\'code\'>loadPlugin()</span> command. In Python, use the <span class=\'code\'>maya.cmds.loadPlugin()</span> command</p>\n\
<p>To run an example such as <span class=\'code\'>helixCmd.py</span>, load the plug-in and enter the following in the Python Editor tab:</p>\n\
<div class=\"codeBlock\"><pre class=\"prettyprint\">import maya\n\
maya.cmds.spHelix().\n\
\n\
</pre></div><p>Invoking this Python script does the following:</p>\n\
<ul>\n\
<li>Import the Maya module so that the <span class=\'code\'>cmds</span> module becomes available</li>\n\
<li>Invoke the custom command <span class=\'code\'>spHelix()</span></li>\n\
</ul>\n\
<blockquote>\n\
<p><strong>Note:</strong></p>\n\
<ul>\n\
<li>The <span class=\'code\'>sp</span> prefix is used for &quot;scripted plug-in&quot;.</li>\n\
<li>Scripted plug-ins must be loaded using the loadPlugin command. It cannot be loaded by running the source of a scripted plug-in.</li>\n\
</ul>\n\
</blockquote>\n\
<p>This plug-in can also be unloaded using the Python command: <span class=\'code\'>maya.cmds.unloadPlugin(&quot;helixCmd.py&quot;)</span></p>\n\
<p>The load and execute steps can also be invoked in the MEL editor using:</p>\n\
<div class=\"codeBlock\"><pre class=\"prettyprint\">loadPlugin helixCmd.py;\n\
spHelix();\n\
\n\
</pre></div><div class=\'section\'><a id=\"writing-a-scripted-plug-in\"></a><h3 id=\"writing-a-scripted-plug-in\">Writing a scripted plug-in</h3></div>\n\
<p>Writing a scripted plug-in requires the definition of some specialized functions within the plug-in. The scripted plug-in must:</p>\n\
<ul>\n\
<li>Define <span class=\'code\'>initializePlugin</span> and <span class=\'code\'>uninitializePlugin</span> entry points.</li>\n\
<li>Register and unregister the proxy class within these entry points.</li>\n\
<li>Implement creator and initialize methods (as required) which Maya calls to build the proxy class.</li>\n\
<li>Implement the required functionality of the proxy class. This requires importing the necessary modules.</li>\n\
</ul>\n\
<p>The following sections describe these pieces in more detail with examples.</p>\n\
<div class=\'section\'><a id=\"importing\"></a><h4 id=\"importing\">Importing</h4></div>\n\
<p>Python uses the import keyword to include functionality from a module into a script. For example:</p>\n\
<div class=\"codeBlock\"><pre class=\"prettyprint\">import maya.OpenMaya as OpenMaya\n\
import maya.OpenMayaMPx as OpenMayaMPx\n\
import sys\n\
\n\
</pre></div><p>It is possible for a scripted plug-in to be split among several files. The import command is used to load the functionality of the secondary file into the scripted plug-in.</p>\n\
<div class=\"codeBlock\"><pre class=\"prettyprint\">import polyModifier\n\
\n\
</pre></div><p>Any secondary scripts must be located in the same directory as the scripted plug-in.</p>\n\
<div class=\'section\'><a id=\"scripted-plug-in-initialization\"></a><h4 id=\"scripted-plug-in-initialization\">Scripted plug-in initialization</h4></div>\n\
<p>When a scripted plug-in is loaded, Maya searches for an <span class=\'code\'>initializePlugin()</span> function in its definition. Within this function, all proxy nodes are registered:</p>\n\
<div class=\"codeBlock\"><pre class=\"prettyprint\"># Initialize the script plug-in\n\
def initializePlugin(mobject):\n\
    mplugin = OpenMayaMPx.MFnPlugin(mobject)\n\
    try:\n\
        mplugin.registerCommand( kPluginCmdName, cmdCreator )\n\
    except:\n\
        sys.stderr.write( &quot;Failed to register command: %s\\n&quot; % kPluginCmdName )\n\
        raise\n\
\n\
</pre></div><p>If the <span class=\'code\'>initializePlugin()</span> function is not found, the scripted plug-in fails to load. In addition, during the load, Maya searches for an <span class=\'code\'>uninitializePlugin()</span> function. If this is not found, then the scripted plug-in fails to load.</p>\n\
<div class=\'section\'><a id=\"scripted-plug-in-uninitialization\"></a><h4 id=\"scripted-plug-in-uninitialization\">Scripted plug-in uninitialization</h4></div>\n\
<p>When Maya is attempting to unload the plug-in, the previously found <span class=\'code\'>uninitializePlugin()</span> function is called to unload the resources of the plug-in.</p>\n\
<div class=\"codeBlock\"><pre class=\"prettyprint\">def uninitializePlugin(mobject):\n\
    mplugin = OpenMayaMPx.MFnPlugin(mobject)\n\
    try:\n\
        mplugin.deregisterCommand( kPluginCmdName )\n\
    except:\n\
        sys.stderr.write( &quot;Failed to unregister command: %s\\n&quot; % kPluginCmdName )\n\
        raise\n\
\n\
</pre></div><div class=\'section\'><a id=\"creator-functions\"></a><h4 id=\"creator-functions\">Creator functions</h4></div>\n\
<p>Creator functions are used to return a derived version of a proxy class to Maya. Virtual methods are implemented on the derived class which are called from Maya. An example of a class definition and a creator function is:</p>\n\
<div class=\"codeBlock\"><pre class=\"prettyprint\">class scriptedCommand(OpenMayaMPx.MPxCommand):\n\
    # ...\n\
def cmdCreator():\n\
    return OpenMayaMPx.asMPxPtr( scriptedCommand() )\n\
\n\
</pre></div><p>It is very important to call the <span class=\'code\'>OpenMayaMPx.asMPxPtr()</span> on the newly created proxy object. This call transfers ownership of the object from Python to Maya. Program errors will occur if you do not make this call since Python can unreference this object and destroy it. This will leave a dangling pointer in Maya.</p>\n\
<div class=\'section\'><a id=\"class-implementation\"></a><h4 id=\"class-implementation\">Class implementation</h4></div>\n\
<p>Implementing a proxy class requires deriving from the Maya Python API object.</p>\n\
<div class=\"codeBlock\"><pre class=\"prettyprint\">class scriptedCommand(OpenMayaMPx.MPxCommand):\n\
    def __init__(self):\n\
        OpenMayaMPx.MPxCommand.__init__(self)\n\
    def doIt(self,argList):\n\
        print &quot;Hello World!&quot;\n\
\n\
</pre></div><p>The <span class=\'code\'>scriptedCommand</span> class is derived from <span class=\'code\'>OpenMayaMPx.MPxCommand</span>. The constructor or <span class=\'code\'>__init__</span> method must call the parent class <span class=\'code\'>__init__</span> method. All class methods require <span class=\'code\'>self</span> as the first parameter, followed by the normal argument list. This command’s <span class=\'code\'>doIt()</span> method simply prints out &quot;Hello World!&quot;.</p>\n\
<div class=\'section\'><a id=\"initialization-functions\"></a><h4 id=\"initialization-functions\">Initialization Functions</h4></div>\n\
<p>Initialization functions are used within scripted plug-ins that define new proxy nodes using the <span class=\'code\'><a href=\"javascript:void(0)\" data-symbol=\"MPxNode\" class=\"a_multireflink\" data-reflinkdata=\"[{&quot;path&quot;:&quot;cpp_ref/class_m_px_node.html&quot;,&quot;title&quot;:&quot;C++ API Reference&quot;,&quot;relpathtoroot&quot;:&quot;../../../&quot;},{&quot;path&quot;:&quot;py_ref/class_open_maya_1_1_m_px_node.html&quot;,&quot;title&quot;:&quot;Maya Python API 2.0 Reference&quot;,&quot;relpathtoroot&quot;:&quot;../../../&quot;}]\">MPxNode</a></span> class. The following is an example that demonstrates how to create a simple scripted plug-in node, the output of which is the sine function.</p>\n\
<div class=\"codeBlock\"><pre class=\"prettyprint\">import math, sys\n\
import maya.OpenMaya as OpenMaya\n\
import maya.OpenMayaMPx as OpenMayaMPx\n\
kPluginNodeTypeName = &quot;spSineNode&quot;\n\
sineNodeId = <a href=\"javascript:void(0)\" data-symbol=\"OpenMaya.MTypeId\" class=\"a_multireflink\" data-reflinkdata=\"[{&quot;path&quot;:&quot;py_ref/class_open_maya_1_1_m_type_id.html&quot;,&quot;title&quot;:&quot;Maya Python API 2.0 Reference&quot;,&quot;relpathtoroot&quot;:&quot;../../../&quot;}]\">OpenMaya.MTypeId</a>(0x8700)\n\
\n\
# Node definition\n\
class sineNode(OpenMayaMPx.MPxNode):\n\
    # class variables\n\
    input = <a href=\"javascript:void(0)\" data-symbol=\"OpenMaya.MObject\" class=\"a_multireflink\" data-reflinkdata=\"[{&quot;path&quot;:&quot;py_ref/class_open_maya_1_1_m_object.html&quot;,&quot;title&quot;:&quot;Maya Python API 2.0 Reference&quot;,&quot;relpathtoroot&quot;:&quot;../../../&quot;}]\">OpenMaya.MObject</a>()\n\
    output = <a href=\"javascript:void(0)\" data-symbol=\"OpenMaya.MObject\" class=\"a_multireflink\" data-reflinkdata=\"[{&quot;path&quot;:&quot;py_ref/class_open_maya_1_1_m_object.html&quot;,&quot;title&quot;:&quot;Maya Python API 2.0 Reference&quot;,&quot;relpathtoroot&quot;:&quot;../../../&quot;}]\">OpenMaya.MObject</a>()\n\
    \n\
    def __init__(self):\n\
        OpenMayaMPx.MPxNode.__init__(self)\n\
        \n\
    def compute(self,plug,dataBlock):\n\
        if ( plug == sineNode.output ):\n\
            dataHandle = dataBlock.inputValue( sineNode.input )\n\
            \n\
            inputFloat = dataHandle.asFloat()\n\
            result = math.sin( inputFloat ) * 10.0\n\
            outputHandle = dataBlock.outputValue( sineNode.output )\n\
            outputHandle.setFloat( result )\n\
            dataBlock.setClean( plug )\n\
# creator\n\
def nodeCreator():\n\
    return OpenMayaMPx.asMPxPtr( sineNode() )\n\
    \n\
# initializer\n\
def nodeInitializer():\n\
    # input\n\
    nAttr = <a href=\"javascript:void(0)\" data-symbol=\"OpenMaya.MFnNumericAttribute\" class=\"a_multireflink\" data-reflinkdata=\"[{&quot;path&quot;:&quot;py_ref/class_open_maya_1_1_m_fn_numeric_attribute.html&quot;,&quot;title&quot;:&quot;Maya Python API 2.0 Reference&quot;,&quot;relpathtoroot&quot;:&quot;../../../&quot;}]\">OpenMaya.MFnNumericAttribute</a>()\n\
    sineNode.input = nAttr.create( &quot;input&quot;, &quot;in&quot;, <a href=\"javascript:void(0)\" data-symbol=\"OpenMaya.MFnNumericData.kFloat\" class=\"a_multireflink\" data-reflinkdata=\"[{&quot;path&quot;:&quot;py_ref/class_open_maya_1_1_m_fn_numeric_data.html#a5acb08282492d2ebdb11c2e7680bb48f&quot;,&quot;title&quot;:&quot;Maya Python API 2.0 Reference&quot;,&quot;relpathtoroot&quot;:&quot;../../../&quot;}]\">OpenMaya.MFnNumericData.kFloat</a>, 0.0 )\n\
    nAttr.setStorable(1)\n\
    # output\n\
    nAttr = <a href=\"javascript:void(0)\" data-symbol=\"OpenMaya.MFnNumericAttribute\" class=\"a_multireflink\" data-reflinkdata=\"[{&quot;path&quot;:&quot;py_ref/class_open_maya_1_1_m_fn_numeric_attribute.html&quot;,&quot;title&quot;:&quot;Maya Python API 2.0 Reference&quot;,&quot;relpathtoroot&quot;:&quot;../../../&quot;}]\">OpenMaya.MFnNumericAttribute</a>()\n\
    sineNode.output = nAttr.create( &quot;output&quot;, &quot;out&quot;, <a href=\"javascript:void(0)\" data-symbol=\"OpenMaya.MFnNumericData.kFloat\" class=\"a_multireflink\" data-reflinkdata=\"[{&quot;path&quot;:&quot;py_ref/class_open_maya_1_1_m_fn_numeric_data.html#a5acb08282492d2ebdb11c2e7680bb48f&quot;,&quot;title&quot;:&quot;Maya Python API 2.0 Reference&quot;,&quot;relpathtoroot&quot;:&quot;../../../&quot;}]\">OpenMaya.MFnNumericData.kFloat</a>, 0.0 )\n\
    nAttr.setStorable(1)\n\
    nAttr.setWritable(1)\n\
    # add attributes\n\
    sineNode.addAttribute( sineNode.input )\n\
    sineNode.addAttribute( sineNode.output )\n\
    sineNode.attributeAffects( sineNode.input, sineNode.output )\n\
    \n\
# initialize the script plug-in\n\
def initializePlugin(mobject):\n\
    mplugin = OpenMayaMPx.MFnPlugin(mobject)\n\
    try:\n\
        mplugin.registerNode( kPluginNodeTypeName, sineNodeId, nodeCreator, nodeInitializer )\n\
    except:\n\
        sys.stderr.write( &quot;Failed to register node: %s&quot; % kPluginNodeTypeName )\n\
        raise\n\
        \n\
# uninitialize the script plug-in\n\
def uninitializePlugin(mobject):\n\
    mplugin = OpenMayaMPx.MFnPlugin(mobject)\n\
    try:\n\
        mplugin.deregisterNode( sineNodeId )\n\
    except:\n\
        sys.stderr.write( &quot;Failed to register node: %s&quot; % kPluginNodeTypeName )\n\
        raise\n\
\n\
</pre></div><p>The <span class=\'code\'>nodeInitializer()</span> function is passed to <span class=\'code\'>registerNode()</span> in the <span class=\'code\'>initializePlugin()</span> function. As the plug-in loads, Maya calls the <span class=\'code\'>nodeInitializer()</span> function to create the attributes of the node.</p>\n\
<div class=\'section\'><a id=\"error-conditions\"></a><h4 id=\"error-conditions\">Error Conditions</h4></div>\n\
<p>The Maya Python API uses Python exceptions for querying and setting error states in script. In most cases, exceptions are used even though the class documentation indicates that a method has a return value. There are many situations where an exception can occur:</p>\n\
<ol>\n\
<li><p>A call fails and the failure state needs to be preserved:</p>\n\
<div class=\"codeBlock\"><pre class=\"prettyprint\">def uninitializePlugin(mobject):\n\
    mplugin = OpenMayaMPx.MFnPlugin(mobject)\n\
    try:\n\
        mplugin.deregisterNode( sineNodeId )\n\
    except:\n\
        sys.stderr.write( &quot;Failed to deregister node: %s&quot; % kPluginNodeTypeName )\n\
        raise\n\
\n\
</pre></div><p>In this example, if the <span class=\'code\'>deregisterNode()</span> call failed, the <span class=\'code\'>uninitializePlugin()</span> call passes the exception back to Maya and the plug-in fails to unload.</p></li>\n\
<li><p>A call fails and the failure state needs to be cleared:</p>\n\
<p>This code can be modified to catch the error and still allow the plug-in to unload if the <span class=\'code\'>deregisterNode()</span> call fails:</p>\n\
<div class=\"codeBlock\"><pre class=\"prettyprint\">def uninitializePlugin(mobject):\n\
    mplugin = OpenMayaMPx.MFnPlugin(mobject)\n\
    try:\n\
        mplugin.deregisterNode( sineNodeId )\n\
    except:\n\
        sys.stderr.write( &quot;Failed to deregister node: %s&quot; % kPluginNodeTypeName )\n\
        pass\n\
\n\
</pre></div><p>The only change being that the <span class=\'code\'>raise</span> keyword has been changed to <span class=\'code\'>pass</span>. This technique is useful for writing iterator code that may fail if incorrect objects are being examined.</p>\n\
<p>3. Unknown parameter return value</p>\n\
<p>In the Maya Python API, an unknown parameter return value is used to indicate that a method cannot handle a specific case and it is up to the caller to take care of the operation. One such method is <span class=\'code\'><a href=\"javascript:void(0)\" data-symbol=\"MPxNode::compute()\" class=\"a_multireflink\" data-reflinkdata=\"[{&quot;path&quot;:&quot;cpp_ref/class_m_px_node.html#a6e1aa1e50774080d5aee55f20ffa5503&quot;,&quot;title&quot;:&quot;C++ API Reference&quot;,&quot;relpathtoroot&quot;:&quot;../../../&quot;}]\">MPxNode::compute()</a></span>. In this situation, the Python code would return <span class=\'code\'>OpenMaya.kUnknownParameter.</span></p></li>\n\
</ol>\n\
<div class=\'section\'><a id=\"exceptions-versus-mstatus\"></a><h4 id=\"exceptions-versus-mstatus\">Exceptions versus MStatus</h4></div>\n\
<p>As noted in the previous section, the Maya Python API uses exceptions to communicate status information rather than MStatus values. When trying to divine the Pythonic behavior of an API method from its C++ documentation, the rules below hold.</p>\n\
<p>There are two ways in which C++ API methods can return MStatus values, either as the method&#39;s return value:</p>\n\
<div class=\"codeBlock\"><pre class=\"prettyprint\"><a href=\"javascript:void(0)\" data-symbol=\"MStatus\" class=\"a_multireflink\" data-reflinkdata=\"[{&quot;path&quot;:&quot;cpp_ref/class_m_status.html&quot;,&quot;title&quot;:&quot;C++ API Reference&quot;,&quot;relpathtoroot&quot;:&quot;../../../&quot;}]\">MStatus</a> someMethod(Type arg1, Type arg2, ...) \n\
\n\
</pre></div><p>or through an optional pointer to an MStatus variable in its parameter list, usually as the final parameter:</p>\n\
<div class=\"codeBlock\"><pre class=\"prettyprint\">Type someMethod(Type arg1, Type arg2, ..., <a href=\"javascript:void(0)\" data-symbol=\"MStatus\" class=\"a_multireflink\" data-reflinkdata=\"[{&quot;path&quot;:&quot;cpp_ref/class_m_status.html&quot;,&quot;title&quot;:&quot;C++ API Reference&quot;,&quot;relpathtoroot&quot;:&quot;../../../&quot;}]\">MStatus</a>* ReturnStatus = NULL) \n\
\n\
</pre></div><div class=\'section\'><a id=\"method-returns-mstatus-as-its-function-value\"></a><h5 id=\"method-returns-mstatus-as-its-function-value\">Method returns MStatus as its function value</h5></div>\n\
<p>When the method returns an <span class=\'code\'><a href=\"javascript:void(0)\" data-symbol=\"MStatus\" class=\"a_multireflink\" data-reflinkdata=\"[{&quot;path&quot;:&quot;cpp_ref/class_m_status.html&quot;,&quot;title&quot;:&quot;C++ API Reference&quot;,&quot;relpathtoroot&quot;:&quot;../../../&quot;}]\">MStatus</a></span> as its function value, that return value is handled in Python as follows:</p>\n\
<ul>\n\
<li>if the status is <span class=\'code\'>MS::kUnknownParameter</span>, then the string <span class=\'code\'>unknown</span> is returned to Python;</li>\n\
<li>if the status is <span class=\'code\'>MS::kSuccess</span>, then nothing is returned and no exception is raised;</li>\n\
<li>if the status is anything else, then nothing is returned but a <span class=\'code\'>RuntimeError</span> exception is raised.</li>\n\
</ul>\n\
<p>The reason for the special handling of <span class=\'code\'>MS::kUnknownParameter</span> is to accomodate <span class=\'code\'><a href=\"javascript:void(0)\" data-symbol=\"MPxNode::compute()\" class=\"a_multireflink\" data-reflinkdata=\"[{&quot;path&quot;:&quot;cpp_ref/class_m_px_node.html#a6e1aa1e50774080d5aee55f20ffa5503&quot;,&quot;title&quot;:&quot;C++ API Reference&quot;,&quot;relpathtoroot&quot;:&quot;../../../&quot;}]\">MPxNode::compute()</a></span>.</p>\n\
<p>There are no special API-specific exceptions. Maya simply uses Python&#39;s standard <span class=\'code\'>RuntimeError</span> and passes the error string as its argument.</p>\n\
<div class=\'section\'><a id=\"method-returns-mstatus-through-a-pointer-variable\"></a><h5 id=\"method-returns-mstatus-through-a-pointer-variable\">Method returns MStatus through a pointer variable</h5></div>\n\
<p>When an API method returns an <span class=\'code\'><a href=\"javascript:void(0)\" data-symbol=\"MStatus\" class=\"a_multireflink\" data-reflinkdata=\"[{&quot;path&quot;:&quot;cpp_ref/class_m_status.html&quot;,&quot;title&quot;:&quot;C++ API Reference&quot;,&quot;relpathtoroot&quot;:&quot;../../../&quot;}]\">MStatus</a></span> through a pointer variable in its parameter list, then that <span class=\'code\'><a href=\"javascript:void(0)\" data-symbol=\"MStatus\" class=\"a_multireflink\" data-reflinkdata=\"[{&quot;path&quot;:&quot;cpp_ref/class_m_status.html&quot;,&quot;title&quot;:&quot;C++ API Reference&quot;,&quot;relpathtoroot&quot;:&quot;../../../&quot;}]\">MStatus</a></span> is handled as follows:</p>\n\
<ul>\n\
<li>if the status is <span class=\'code\'>MS::kSuccess</span>, then no exception is raised;</li>\n\
<li>if the status is anything else, then nothing is returned but a <span class=\'code\'>RuntimeError</span> exception is raised.</li>\n\
</ul>\n\
<p>This means that users writing plug-ins in C++ can continue to return <span class=\'code\'><a href=\"javascript:void(0)\" data-symbol=\"MStatus\" class=\"a_multireflink\" data-reflinkdata=\"[{&quot;path&quot;:&quot;cpp_ref/class_m_status.html&quot;,&quot;title&quot;:&quot;C++ API Reference&quot;,&quot;relpathtoroot&quot;:&quot;../../../&quot;}]\">MStatus</a></span> codes as they normally would, regardless of whether their code is called from C++ or Python. Maya will internally convert those codes to Python exceptions if necessary.</p>\n\
<p>Users writing plug-ins in Python should raise exceptions rather than return <span class=\'code\'><a href=\"javascript:void(0)\" data-symbol=\"MStatus\" class=\"a_multireflink\" data-reflinkdata=\"[{&quot;path&quot;:&quot;cpp_ref/class_m_status.html&quot;,&quot;title&quot;:&quot;C++ API Reference&quot;,&quot;relpathtoroot&quot;:&quot;../../../&quot;}]\">MStatus</a></span> values, unless they want their <span class=\'code\'>compute()</span> method to indicate that it is not going to handle a plug. In this case, it should return <span class=\'code\'>maya.OpenMaya.kUnknownParameter</span>.</p>\n\
<div class=\'section\'><a id=\"classes-support-slicing\"></a><h4 id=\"classes-support-slicing\">Classes support slicing</h4></div>\n\
<p>All of the number arrays (<span class=\'code\'><a href=\"javascript:void(0)\" data-symbol=\"MIntArray\" class=\"a_multireflink\" data-reflinkdata=\"[{&quot;path&quot;:&quot;cpp_ref/class_m_int_array.html&quot;,&quot;title&quot;:&quot;C++ API Reference&quot;,&quot;relpathtoroot&quot;:&quot;../../../&quot;},{&quot;path&quot;:&quot;py_ref/class_open_maya_1_1_m_int_array.html&quot;,&quot;title&quot;:&quot;Maya Python API 2.0 Reference&quot;,&quot;relpathtoroot&quot;:&quot;../../../&quot;}]\">MIntArray</a></span>, <span class=\'code\'><a href=\"javascript:void(0)\" data-symbol=\"MUintArray\" class=\"a_multireflink\" data-reflinkdata=\"[{&quot;path&quot;:&quot;cpp_ref/class_m_uint_array.html&quot;,&quot;title&quot;:&quot;C++ API Reference&quot;,&quot;relpathtoroot&quot;:&quot;../../../&quot;},{&quot;path&quot;:&quot;py_ref/class_open_maya_1_1_m_uint_array.html&quot;,&quot;title&quot;:&quot;Maya Python API 2.0 Reference&quot;,&quot;relpathtoroot&quot;:&quot;../../../&quot;}]\">MUintArray</a></span>, <span class=\'code\'><a href=\"javascript:void(0)\" data-symbol=\"MUint64Array\" class=\"a_multireflink\" data-reflinkdata=\"[{&quot;path&quot;:&quot;cpp_ref/class_m_uint64_array.html&quot;,&quot;title&quot;:&quot;C++ API Reference&quot;,&quot;relpathtoroot&quot;:&quot;../../../&quot;},{&quot;path&quot;:&quot;py_ref/class_open_maya_1_1_m_uint64_array.html&quot;,&quot;title&quot;:&quot;Maya Python API 2.0 Reference&quot;,&quot;relpathtoroot&quot;:&quot;../../../&quot;}]\">MUint64Array</a></span>, <span class=\'code\'><a href=\"javascript:void(0)\" data-symbol=\"MFloatArray\" class=\"a_multireflink\" data-reflinkdata=\"[{&quot;path&quot;:&quot;cpp_ref/class_m_float_array.html&quot;,&quot;title&quot;:&quot;C++ API Reference&quot;,&quot;relpathtoroot&quot;:&quot;../../../&quot;},{&quot;path&quot;:&quot;py_ref/class_open_maya_1_1_m_float_array.html&quot;,&quot;title&quot;:&quot;Maya Python API 2.0 Reference&quot;,&quot;relpathtoroot&quot;:&quot;../../../&quot;}]\">MFloatArray</a></span>, and <span class=\'code\'><a href=\"javascript:void(0)\" data-symbol=\"MDoubleArray\" class=\"a_multireflink\" data-reflinkdata=\"[{&quot;path&quot;:&quot;cpp_ref/class_m_double_array.html&quot;,&quot;title&quot;:&quot;C++ API Reference&quot;,&quot;relpathtoroot&quot;:&quot;../../../&quot;},{&quot;path&quot;:&quot;py_ref/class_open_maya_1_1_m_double_array.html&quot;,&quot;title&quot;:&quot;Maya Python API 2.0 Reference&quot;,&quot;relpathtoroot&quot;:&quot;../../../&quot;}]\">MDoubleArray</a></span>) support Python-style slicing. For example:</p>\n\
<div class=\"codeBlock\"><pre class=\"prettyprint\">import maya.OpenMaya as OpenMaya \n\
array = <a href=\"javascript:void(0)\" data-symbol=\"OpenMaya.MUintArray\" class=\"a_multireflink\" data-reflinkdata=\"[{&quot;path&quot;:&quot;py_ref/class_open_maya_1_1_m_uint_array.html&quot;,&quot;title&quot;:&quot;Maya Python API 2.0 Reference&quot;,&quot;relpathtoroot&quot;:&quot;../../../&quot;}]\">OpenMaya.MUintArray</a>() \n\
for i in range(0,9):\n\
   array.append( i )\n\
array[2:8:2]\n\
\n\
</pre></div><p><span class=\'code\'># Result:[2, 4, 6] #</span></p>\n\
<div class=\'section\'><a id=\"accessing-static-mobjects-of-an-mpx-class\"></a><h4 id=\"accessing-static-mobjects-of-an-mpx-class\">Accessing static MObjects of an MPx class</h4></div>\n\
<p>The proxy classes provide some standard information to a developer about the node that is being used. This includes attribute objects that are used to define the node. To access a static class <span class=\'code\'><a href=\"javascript:void(0)\" data-symbol=\"MObject\" class=\"a_multireflink\" data-reflinkdata=\"[{&quot;path&quot;:&quot;cpp_ref/class_m_object.html&quot;,&quot;title&quot;:&quot;C++ API Reference&quot;,&quot;relpathtoroot&quot;:&quot;../../../&quot;},{&quot;path&quot;:&quot;py_ref/class_open_maya_1_1_m_object.html&quot;,&quot;title&quot;:&quot;Maya Python API 2.0 Reference&quot;,&quot;relpathtoroot&quot;:&quot;../../../&quot;}]\">MObject</a></span> in the Maya Python API, similar code can be used:</p>\n\
<div class=\"codeBlock\"><pre class=\"prettyprint\">envelope = OpenMayaMPx.cvar.MPxDeformerNode_envelope\n\
\n\
</pre></div><p>After making this call, the envelope will be an <span class=\'code\'><a href=\"javascript:void(0)\" data-symbol=\"MObject\" class=\"a_multireflink\" data-reflinkdata=\"[{&quot;path&quot;:&quot;cpp_ref/class_m_object.html&quot;,&quot;title&quot;:&quot;C++ API Reference&quot;,&quot;relpathtoroot&quot;:&quot;../../../&quot;},{&quot;path&quot;:&quot;py_ref/class_open_maya_1_1_m_object.html&quot;,&quot;title&quot;:&quot;Maya Python API 2.0 Reference&quot;,&quot;relpathtoroot&quot;:&quot;../../../&quot;}]\">MObject</a></span> for <span class=\'code\'>MPxDeformerNode::envelope</span>.</p>\n\
<div class=\'section\'><a id=\"messages\"></a><h4 id=\"messages\">Messages</h4></div>\n\
<p>Message classes are supported in the Maya Python API. A Python function is passed for the callback. This function must have the exact number of parameters required by the callback message. If it does not, an exception will occur when the message is invoked and information will be written to the console. Client data in the form of a python object can also be passed with most messages. The following is an example of a message:</p>\n\
<div class=\"codeBlock\"><pre class=\"prettyprint\"># Message callback\n\
def dagParentAddedCallback( child, parent, clientData ):\n\
    print &quot;dagParentAddedCallback...&quot;\n\
    print &quot;\\tchild %s&quot; % child.fullPathName()\n\
    print &quot;\\tparent %s&quot; % parent.fullPathName()\n\
    print &quot;\\tclient data %s&quot; % clientData\n\
\n\
# Create the mesage\n\
def createParentAddedCallback(stringData):\n\
    try:\n\
        id = <a href=\"javascript:void(0)\" data-symbol=\"OpenMaya.MDagMessage.addParentAddedCallback\" class=\"a_multireflink\" data-reflinkdata=\"[{&quot;path&quot;:&quot;py_ref/class_open_maya_1_1_m_dag_message.html#a56df287a6a45e5ae6b49689724a88556&quot;,&quot;title&quot;:&quot;Maya Python API 2.0 Reference&quot;,&quot;relpathtoroot&quot;:&quot;../../../&quot;}]\">OpenMaya.MDagMessage.addParentAddedCallback</a>( dagParentAddedCallback, stringData )\n\
    except:\n\
        sys.stderr.write( &quot;Failed to install dag parent added callback\\n&quot; )\n\
        messageIdSet = False\n\
    else:\n\
        messageIdSet = True\n\
    return id\n\
# Call the message creator\n\
messageId = createParentAddedCallback( &quot;_noData_&quot; )\n\
\n\
</pre></div><div class=\'section\'><a id=\"modify-parameter-values-instead-of-using-an-assignment\"></a><h4 id=\"modify-parameter-values-instead-of-using-an-assignment\">Modify Parameter Values Instead of Using an Assignment</h4></div>\n\
<p>In Python, it is best to modify a parameter rather than use an assignment. The code below contains an assignment and demonstrates how an error can occur:</p>\n\
<div class=\"codeBlock\"><pre class=\"prettyprint\">import maya.OpenMaya as OpenMaya \n\
def vectorTest(v): \n\
    lv = <a href=\"javascript:void(0)\" data-symbol=\"OpenMaya.MVector\" class=\"a_multireflink\" data-reflinkdata=\"[{&quot;path&quot;:&quot;py_ref/class_open_maya_1_1_m_vector.html&quot;,&quot;title&quot;:&quot;Maya Python API 2.0 Reference&quot;,&quot;relpathtoroot&quot;:&quot;../../../&quot;}]\">OpenMaya.MVector</a>(1,5,9) \n\
    v = lv \n\
    print &quot;%g %g %g&quot; % (v.x,v.y,v.z) \n\
v = <a href=\"javascript:void(0)\" data-symbol=\"OpenMaya.MVector\" class=\"a_multireflink\" data-reflinkdata=\"[{&quot;path&quot;:&quot;py_ref/class_open_maya_1_1_m_vector.html&quot;,&quot;title&quot;:&quot;Maya Python API 2.0 Reference&quot;,&quot;relpathtoroot&quot;:&quot;../../../&quot;}]\">OpenMaya.MVector</a>() \n\
vectorTest(v) \n\
print &quot;%g %g %g&quot; % (v.x,v.y,v.z)\n\
\n\
</pre></div><p>The second print command will emit all zeroes. In Python, either modify the parameter value or write the code so that a new value is returned. Rewrite the <span class=\'code\'>vectorTest()</span> function as follows:</p>\n\
<div class=\"codeBlock\"><pre class=\"prettyprint\">def vectorTest(v): \n\
    lv = <a href=\"javascript:void(0)\" data-symbol=\"OpenMaya.MVector\" class=\"a_multireflink\" data-reflinkdata=\"[{&quot;path&quot;:&quot;py_ref/class_open_maya_1_1_m_vector.html&quot;,&quot;title&quot;:&quot;Maya Python API 2.0 Reference&quot;,&quot;relpathtoroot&quot;:&quot;../../../&quot;}]\">OpenMaya.MVector</a>(1,5,9) \n\
    v.x = lv.x\n\
    v.y = lv.y\n\
    v.z = lv.z\n\
    print &quot;%g %g %g&quot; % (v.x,v.y,v.z) \n\
\n\
</pre></div><div class=\'section\'><a id=\"references-to-basic-types\"></a><h4 id=\"references-to-basic-types\">References to Basic Types</h4></div>\n\
<p>The Maya Python API contains many calls in which return values or parameters are references to basic types such as: int&amp;, char&amp;, float&amp; etc. In the Maya Python API, all references are treated as pointers. As a result, special calls are required to create, set and access the values of these items.</p>\n\
<p>A utility class called <span class=\'code\'><a href=\"javascript:void(0)\" data-symbol=\"MScriptUtil\" class=\"a_multireflink\" data-reflinkdata=\"[{&quot;path&quot;:&quot;cpp_ref/class_m_script_util.html&quot;,&quot;title&quot;:&quot;C++ API Reference&quot;,&quot;relpathtoroot&quot;:&quot;../../../&quot;}]\">MScriptUtil</a></span> that exists in the OpenMaya.py module provides methods for working with these type of parameters and return values. This class allows for creating data and then acquiring a pointer to the data so that information can be passed to class methods requiring references. See <span class=\'code\'><a href=\"javascript:void(0)\" data-symbol=\"MScriptUtil\" class=\"a_multireflink\" data-reflinkdata=\"[{&quot;path&quot;:&quot;cpp_ref/class_m_script_util.html&quot;,&quot;title&quot;:&quot;C++ API Reference&quot;,&quot;relpathtoroot&quot;:&quot;../../../&quot;}]\">MScriptUtil</a></span> in the API Reference documentation.</p>\n\
<p>The following example should help to clarify the usage of <span class=\'code\'><a href=\"javascript:void(0)\" data-symbol=\"MScriptUtil\" class=\"a_multireflink\" data-reflinkdata=\"[{&quot;path&quot;:&quot;cpp_ref/class_m_script_util.html&quot;,&quot;title&quot;:&quot;C++ API Reference&quot;,&quot;relpathtoroot&quot;:&quot;../../../&quot;}]\">MScriptUtil</a></span>. It shows how to get the x, y and z values from a call to <span class=\'code\'>MFnLattice.getDivisions()</span>:</p>\n\
<div class=\"codeBlock\"><pre class=\"prettyprint\">import maya.OpenMaya as OpenMaya\n\
import maya.OpenMayaAnim as Anim\n\
xutil = OpenMaya.MScriptUtil()\n\
xutil.createFromInt(0)\n\
xptr = xutil.asUintPtr()\n\
yutil = OpenMaya.MScriptUtil()\n\
yutil.createFromInt(0)\n\
yptr = yutil.asUintPtr()\n\
zutil = OpenMaya.MScriptUtil()\n\
zutil.createFromInt(0)\n\
zptr = zutil.asUintPtr()\n\
it = <a href=\"javascript:void(0)\" data-symbol=\"OpenMaya.MItDependencyNodes\" class=\"a_multireflink\" data-reflinkdata=\"[{&quot;path&quot;:&quot;py_ref/class_open_maya_1_1_m_it_dependency_nodes.html&quot;,&quot;title&quot;:&quot;Maya Python API 2.0 Reference&quot;,&quot;relpathtoroot&quot;:&quot;../../../&quot;}]\">OpenMaya.MItDependencyNodes</a>(OpenMaya.MFn.kFFD)\n\
while not it.isDone():\n\
    latDefFn = Anim.MFnLatticeDeformer( it.thisNode() )\n\
    latFn = Anim.MFnLattice( latDefFn.deformLattice() )\n\
    latFn.getDivisions(xptr, yptr, zptr)\n\
    x = xutil.getUint(xptr)\n\
    y = yutil.getUint(yptr)\n\
    z = zutil.getUint(zptr)\n\
    doSomethingUseful(x, y, z)\n\
    it.next()\n\
\n\
</pre></div><p>Since <span class=\'code\'>getUint()</span> is a static method of <span class=\'code\'><a href=\"javascript:void(0)\" data-symbol=\"MScriptUtil\" class=\"a_multireflink\" data-reflinkdata=\"[{&quot;path&quot;:&quot;cpp_ref/class_m_script_util.html&quot;,&quot;title&quot;:&quot;C++ API Reference&quot;,&quot;relpathtoroot&quot;:&quot;../../../&quot;}]\">MScriptUtil</a></span>, an alternative way of retrieving the final values is to call it directly from the class. For example:</p>\n\
<div class=\"codeBlock\"><pre class=\"prettyprint\">x = OpenMaya.MScriptUtil.getUint(xptr)\n\
\n\
</pre></div><p>References to enumerated types should be treated as references to short ints.</p>\n\
<div class=\'section\'><a id=\"commands-with-flags\"></a><h4 id=\"commands-with-flags\">Commands with Flags</h4></div>\n\
<p>A command which has flags must specify its syntax using an <span class=\'code\'><a href=\"javascript:void(0)\" data-symbol=\"MSyntax\" class=\"a_multireflink\" data-reflinkdata=\"[{&quot;path&quot;:&quot;cpp_ref/class_m_syntax.html&quot;,&quot;title&quot;:&quot;C++ API Reference&quot;,&quot;relpathtoroot&quot;:&quot;../../../&quot;},{&quot;path&quot;:&quot;py_ref/class_open_maya_1_1_m_syntax.html&quot;,&quot;title&quot;:&quot;Maya Python API 2.0 Reference&quot;,&quot;relpathtoroot&quot;:&quot;../../../&quot;}]\">MSyntax</a></span> object and parse the flags using the <span class=\'code\'><a href=\"javascript:void(0)\" data-symbol=\"MArgParser\" class=\"a_multireflink\" data-reflinkdata=\"[{&quot;path&quot;:&quot;cpp_ref/class_m_arg_parser.html&quot;,&quot;title&quot;:&quot;C++ API Reference&quot;,&quot;relpathtoroot&quot;:&quot;../../../&quot;},{&quot;path&quot;:&quot;py_ref/class_open_maya_1_1_m_arg_parser.html&quot;,&quot;title&quot;:&quot;Maya Python API 2.0 Reference&quot;,&quot;relpathtoroot&quot;:&quot;../../../&quot;}]\">MArgParser</a></span> or <span class=\'code\'><a href=\"javascript:void(0)\" data-symbol=\"MArgDatabase\" class=\"a_multireflink\" data-reflinkdata=\"[{&quot;path&quot;:&quot;cpp_ref/class_m_arg_database.html&quot;,&quot;title&quot;:&quot;C++ API Reference&quot;,&quot;relpathtoroot&quot;:&quot;../../../&quot;},{&quot;path&quot;:&quot;py_ref/class_open_maya_1_1_m_arg_database.html&quot;,&quot;title&quot;:&quot;Maya Python API 2.0 Reference&quot;,&quot;relpathtoroot&quot;:&quot;../../../&quot;}]\">MArgDatabase</a></span> classes, otherwise the flags will not be accessible when the command is used from within Python. This is true regardless of whether the command is written in Python or C++. Below is an example of a scripted plug-in which implements a command with flags:</p>\n\
<div class=\"codeBlock\"><pre class=\"prettyprint\">import maya.OpenMaya as OpenMaya\n\
import maya.OpenMayaMPx as OpenMayaMPx\n\
import sys, math\n\
kPluginCmdName=&quot;spHelix&quot;\n\
kPitchFlag = &quot;-p&quot;\n\
kPitchLongFlag = &quot;-pitch&quot;\n\
kRadiusFlag = &quot;-r&quot;\n\
kRadiusLongFlag = &quot;-radius&quot;\n\
\n\
# command\n\
class scriptedCommand(OpenMayaMPx.MPxCommand):\n\
    def __init__(self):\n\
        OpenMayaMPx.MPxCommand.__init__(self)\n\
    \n\
    def doIt(self, args):\n\
        deg = 3\n\
        ncvs = 20\n\
        spans = ncvs - deg\n\
        nknots = spans+2*deg-1\n\
        radius = 4.0\n\
        pitch = 0.5\n\
        \n\
        # Parse the arguments.\n\
        argData = <a href=\"javascript:void(0)\" data-symbol=\"OpenMaya.MArgDatabase\" class=\"a_multireflink\" data-reflinkdata=\"[{&quot;path&quot;:&quot;py_ref/class_open_maya_1_1_m_arg_database.html&quot;,&quot;title&quot;:&quot;Maya Python API 2.0 Reference&quot;,&quot;relpathtoroot&quot;:&quot;../../../&quot;}]\">OpenMaya.MArgDatabase</a>(self.syntax(), args)\n\
        if argData.isFlagSet(kPitchFlag):\n\
            pitch = argData.flagArgumentDouble(kPitchFlag, 0)\n\
        if argData.isFlagSet(kRadiusFlag):\n\
            radius = argData.flagArgumentDouble(kRadiusFlag, 0)\n\
        controlVertices = <a href=\"javascript:void(0)\" data-symbol=\"OpenMaya.MPointArray\" class=\"a_multireflink\" data-reflinkdata=\"[{&quot;path&quot;:&quot;py_ref/class_open_maya_1_1_m_point_array.html&quot;,&quot;title&quot;:&quot;Maya Python API 2.0 Reference&quot;,&quot;relpathtoroot&quot;:&quot;../../../&quot;}]\">OpenMaya.MPointArray</a>()\n\
        knotSequences = <a href=\"javascript:void(0)\" data-symbol=\"OpenMaya.MDoubleArray\" class=\"a_multireflink\" data-reflinkdata=\"[{&quot;path&quot;:&quot;py_ref/class_open_maya_1_1_m_double_array.html&quot;,&quot;title&quot;:&quot;Maya Python API 2.0 Reference&quot;,&quot;relpathtoroot&quot;:&quot;../../../&quot;}]\">OpenMaya.MDoubleArray</a>()\n\
        \n\
        # Set up cvs and knots for the helix\n\
        for i in range(0, ncvs):\n\
            controlVertices.append( <a href=\"javascript:void(0)\" data-symbol=\"OpenMaya.MPoint\" class=\"a_multireflink\" data-reflinkdata=\"[{&quot;path&quot;:&quot;py_ref/class_open_maya_1_1_m_point.html&quot;,&quot;title&quot;:&quot;Maya Python API 2.0 Reference&quot;,&quot;relpathtoroot&quot;:&quot;../../../&quot;}]\">OpenMaya.MPoint</a>( radius * math.cos(i),\n\
                pitch * i, radius * math.sin(i) ) )\n\
        for i in range(0, nknots):\n\
            knotSequences.append( i )\n\
        \n\
        # Now create the curve\n\
        curveFn = <a href=\"javascript:void(0)\" data-symbol=\"OpenMaya.MFnNurbsCurve\" class=\"a_multireflink\" data-reflinkdata=\"[{&quot;path&quot;:&quot;py_ref/class_open_maya_1_1_m_fn_nurbs_curve.html&quot;,&quot;title&quot;:&quot;Maya Python API 2.0 Reference&quot;,&quot;relpathtoroot&quot;:&quot;../../../&quot;}]\">OpenMaya.MFnNurbsCurve</a>()\n\
        \n\
        nullObj = <a href=\"javascript:void(0)\" data-symbol=\"OpenMaya.MObject\" class=\"a_multireflink\" data-reflinkdata=\"[{&quot;path&quot;:&quot;py_ref/class_open_maya_1_1_m_object.html&quot;,&quot;title&quot;:&quot;Maya Python API 2.0 Reference&quot;,&quot;relpathtoroot&quot;:&quot;../../../&quot;}]\">OpenMaya.MObject</a>()\n\
        try:\n\
            # This plugin normally creates the curve by passing in the\n\
            # cv&#39;s. A function to create curves by passing in the ep&#39;s\n\
            # has been added. Set this to False to get that behaviour.\n\
            if True:\n\
                curveFn.create( controlVertices, knotSequences, deg, OpenMaya.MFnNurbsCurve.kOpen, 0, 0, nullObj )\n\
            else:\n\
                curveFn.createWithEditPoints(controlVertices, 3, OpenMaya.MFnNurbsCurve.kOpen, False, False, False)\n\
        except:\n\
            sys.stderr.write( &quot;Error creating curve.\\n&quot; )\n\
            raise\n\
# Creator\n\
def cmdCreator():\n\
    # Create the command\n\
    return OpenMayaMPx.asMPxPtr( scriptedCommand() )\n\
\n\
# Syntax creator\n\
def syntaxCreator():\n\
    syntax = <a href=\"javascript:void(0)\" data-symbol=\"OpenMaya.MSyntax\" class=\"a_multireflink\" data-reflinkdata=\"[{&quot;path&quot;:&quot;py_ref/class_open_maya_1_1_m_syntax.html&quot;,&quot;title&quot;:&quot;Maya Python API 2.0 Reference&quot;,&quot;relpathtoroot&quot;:&quot;../../../&quot;}]\">OpenMaya.MSyntax</a>()\n\
    syntax.addFlag(kPitchFlag, kPitchLongFlag, <a href=\"javascript:void(0)\" data-symbol=\"OpenMaya.MSyntax.kDouble\" class=\"a_multireflink\" data-reflinkdata=\"[{&quot;path&quot;:&quot;py_ref/class_open_maya_1_1_m_syntax.html#a9b557d97e6ea6e2e7a3757b810a4c627&quot;,&quot;title&quot;:&quot;Maya Python API 2.0 Reference&quot;,&quot;relpathtoroot&quot;:&quot;../../../&quot;}]\">OpenMaya.MSyntax.kDouble</a>)\n\
    syntax.addFlag(kRadiusFlag, kRadiusLongFlag, <a href=\"javascript:void(0)\" data-symbol=\"OpenMaya.MSyntax.kDouble\" class=\"a_multireflink\" data-reflinkdata=\"[{&quot;path&quot;:&quot;py_ref/class_open_maya_1_1_m_syntax.html#a9b557d97e6ea6e2e7a3757b810a4c627&quot;,&quot;title&quot;:&quot;Maya Python API 2.0 Reference&quot;,&quot;relpathtoroot&quot;:&quot;../../../&quot;}]\">OpenMaya.MSyntax.kDouble</a>)\n\
    return syntax\n\
\n\
# Initialize the script plug-in\n\
def initializePlugin(mobject):\n\
    mplugin = OpenMayaMPx.MFnPlugin(mobject, &quot;Autodesk&quot;, &quot;1.0&quot;, &quot;Any&quot;)\n\
    try:\n\
        mplugin.registerCommand( kPluginCmdName, cmdCreator, syntaxCreator )\n\
    except:\n\
        sys.stderr.write( &quot;Failed to register command: %s\\n&quot; % kPluginCmdName )\n\
        raise\n\
        \n\
# Uninitialize the script plug-in\n\
def uninitializePlugin(mobject):\n\
    mplugin = OpenMayaMPx.MFnPlugin(mobject)\n\
    try:\n\
        mplugin.deregisterCommand( kPluginCmdName )\n\
    except:\n\
        sys.stderr.write( &quot;Failed to unregister command: %s\\n&quot; % kPluginCmdName )\n\
        raise\n\
\n\
</pre></div><p>This example includes the syntax creator function along with parsing operations in the <span class=\'code\'>doIt()</span> method of the class.</p>\n\
<div class=\'section\'><a id=\"protected-methods\"></a><h4 id=\"protected-methods\">Protected methods</h4></div>\n\
<p>The Maya Python API contains several methods that should only be called from the class the method belongs to. We follow the Python designation of using an _ as the first letter of the method name to indicate that protection applies to this method. Several examples of these methods exist in the <span class=\'code\'><a href=\"javascript:void(0)\" data-symbol=\"MPxNode\" class=\"a_multireflink\" data-reflinkdata=\"[{&quot;path&quot;:&quot;cpp_ref/class_m_px_node.html&quot;,&quot;title&quot;:&quot;C++ API Reference&quot;,&quot;relpathtoroot&quot;:&quot;../../../&quot;},{&quot;path&quot;:&quot;py_ref/class_open_maya_1_1_m_px_node.html&quot;,&quot;title&quot;:&quot;Maya Python API 2.0 Reference&quot;,&quot;relpathtoroot&quot;:&quot;../../../&quot;}]\">MPxNode</a></span> class:</p>\n\
<div class=\"codeBlock\"><pre class=\"prettyprint\">_forceCache()\n\
_setMPSafe()\n\
\n\
</pre></div><p>Please respect the method usage requirements of protected methods in the Maya Python API.</p>\n\
<div class=\'section\'><a id=\"getting-derived-object-from-mpx-base-object\"></a><h4 id=\"getting-derived-object-from-mpx-base-object\">Getting derived object from MPx base object</h4></div>\n\
<p>Some API methods return your custom objects as instances of their base <span class=\'code\'>MPx</span> class rather than instances of your derived class. For example, <span class=\'code\'>MPxContext._newToolCommand()</span> returns your custom tool command as an <span class=\'code\'><a href=\"javascript:void(0)\" data-symbol=\"MPxToolCommand\" class=\"a_multireflink\" data-reflinkdata=\"[{&quot;path&quot;:&quot;cpp_ref/class_m_px_tool_command.html&quot;,&quot;title&quot;:&quot;C++ API Reference&quot;,&quot;relpathtoroot&quot;:&quot;../../../&quot;}]\">MPxToolCommand</a></span> object and <span class=\'code\'><a href=\"javascript:void(0)\" data-symbol=\"MPxSurfaceShapeUI.surfaceShape()\" class=\"a_multireflink\" data-reflinkdata=\"[{&quot;path&quot;:&quot;py_ref/class_open_maya_u_i_1_1_m_px_surface_shape_u_i.html#a6a21cf4eb530aa3fd49f95b667400c4c&quot;,&quot;title&quot;:&quot;Maya Python API 2.0 Reference&quot;,&quot;relpathtoroot&quot;:&quot;../../../&quot;}]\">MPxSurfaceShapeUI.surfaceShape()</a></span> returns your custom surface shape as an <span class=\'code\'><a href=\"javascript:void(0)\" data-symbol=\"MPxSurfaceShape\" class=\"a_multireflink\" data-reflinkdata=\"[{&quot;path&quot;:&quot;cpp_ref/class_m_px_surface_shape.html&quot;,&quot;title&quot;:&quot;C++ API Reference&quot;,&quot;relpathtoroot&quot;:&quot;../../../&quot;},{&quot;path&quot;:&quot;py_ref/class_open_maya_1_1_m_px_surface_shape.html&quot;,&quot;title&quot;:&quot;Maya Python API 2.0 Reference&quot;,&quot;relpathtoroot&quot;:&quot;../../../&quot;}]\">MPxSurfaceShape</a></span> object. While these base instances refer to the same internal Maya objects as the original derived instances, they are separate Python objects which do not retain any of the member variable values set in the derived instances, so calling methods or accessing member variables on the returned objects may give incorrect results.</p>\n\
<p>You can work around this problem by taking advantage of the properties of the <span class=\'code\'>OpenMayaMPx.asHashable()</span> function. <span class=\'code\'>OpenMayaMPx.asHashable()</span> takes an <span class=\'code\'>MPx</span> object and returns a hash value which uniquely identifies the underlying Maya object. It doesn&#39;t matter whether the object is an instance of the base <span class=\'code\'>MPx</span> class or your derived class: so long as they both refer to the same underlying Maya object they will return the same hash value. This allows you to set up a dictionary which can translate a base instance into its corresponding derived instance.</p>\n\
<p>The first step is to add an empty dictionary to the class:</p>\n\
<div class=\"codeBlock\"><pre class=\"prettyprint\">class MoveToolCmd(OpenMayaMPx.MPxToolCommand):\n\
    kTrackingDictionary = {}\n\
\n\
</pre></div><p>In the class&#39;s <span class=\'code\'>__init__</span> method, add an entry to the dictionary, mapping the new object&#39;s hash value to the object itself:</p>\n\
<div class=\"codeBlock\"><pre class=\"prettyprint\">def __init__(self): \n\
    OpenMayaMPx.MPxToolCommand.__init__(self)\n\
    MoveToolCmd.kTrackingDictionary[OpenMayaMPx.asHashable(self)] = self \n\
\n\
\n\
</pre></div><p>In the class&#39;s <span class=\'code\'>__del__</span> method, remove the deleted object from the dictionary:</p>\n\
<div class=\"codeBlock\"><pre class=\"prettyprint\">def __del__(self): \n\
    del MoveToolCmd.kTrackingDictionary[OpenMayaMPx.asHashable(self)] \n\
\n\
\n\
</pre></div><p>Now that you have the tracking dictionary, you can use it to retrieve the derived object from its corresponding base object:</p>\n\
<div class=\"codeBlock\"><pre class=\"prettyprint\">class MoveContext(OpenMayaMPx.MPxSelectionContext): \n\
    ... \n\
    \n\
    def doPress(self, event): \n\
\n\
        # Create an instance of the move tool command. \n\
        baseCmd = self._newToolCommand() \n\
        derivedCmd = MoveToolCmd.kTrackingDictionary.get( \n\
                        OpenMayaMPx.asHashable(baseCmd), None \n\
                     ) \n\
\n\
        # Call its methods.\n\
        derivedCmd.setVector(0.0, 0.0, 0.0) \n\
\n\
\n\
</pre></div><p>When defining custom node types (<span class=\'code\'><a href=\"javascript:void(0)\" data-symbol=\"MPxNode\" class=\"a_multireflink\" data-reflinkdata=\"[{&quot;path&quot;:&quot;cpp_ref/class_m_px_node.html&quot;,&quot;title&quot;:&quot;C++ API Reference&quot;,&quot;relpathtoroot&quot;:&quot;../../../&quot;},{&quot;path&quot;:&quot;py_ref/class_open_maya_1_1_m_px_node.html&quot;,&quot;title&quot;:&quot;Maya Python API 2.0 Reference&quot;,&quot;relpathtoroot&quot;:&quot;../../../&quot;}]\">MPxNode</a></span>, <span class=\'code\'><a href=\"javascript:void(0)\" data-symbol=\"MPxSurfaceShape\" class=\"a_multireflink\" data-reflinkdata=\"[{&quot;path&quot;:&quot;cpp_ref/class_m_px_surface_shape.html&quot;,&quot;title&quot;:&quot;C++ API Reference&quot;,&quot;relpathtoroot&quot;:&quot;../../../&quot;},{&quot;path&quot;:&quot;py_ref/class_open_maya_1_1_m_px_surface_shape.html&quot;,&quot;title&quot;:&quot;Maya Python API 2.0 Reference&quot;,&quot;relpathtoroot&quot;:&quot;../../../&quot;}]\">MPxSurfaceShape</a></span>, etc) some additional effort is required. When Maya does a file open or new file operation it destroys the scene without executing the __del__ method for each node. That means that the entries for those nodes are never removed from the tracking dictionary. To get around this, callbacks must be set up in your initializePlugin method to clear their tracking dictionaries on file open and file new:</p>\n\
<div class=\"codeBlock\"><pre class=\"prettyprint\">fileOpenCB = 0\n\
fileNewCB = 0\n\
\n\
def clearTrackingDictionaries(unused):\n\
    MyNode.kTrackingDictionary = {} \n\
    MySurfaceShape.kTrackingDictionary = {}\n\
\n\
def initializePlugin(plugin): \n\
    ... \n\
    fileOpenCB = <a href=\"javascript:void(0)\" data-symbol=\"OpenMaya.MSceneMessage.addCallback\" class=\"a_multireflink\" data-reflinkdata=\"[{&quot;path&quot;:&quot;py_ref/class_open_maya_1_1_m_scene_message.html#abca4a003f2dc19d55b88798d0cb4aa32&quot;,&quot;title&quot;:&quot;Maya Python API 2.0 Reference&quot;,&quot;relpathtoroot&quot;:&quot;../../../&quot;}]\">OpenMaya.MSceneMessage.addCallback</a>(\n\
                     OpenMaya.MSceneMessage.kBeforeOpen, \n\
                     clearTrackingDictionaries \n\
                 )\n\
    fileNewCB  = <a href=\"javascript:void(0)\" data-symbol=\"OpenMaya.MSceneMessage.addCallback\" class=\"a_multireflink\" data-reflinkdata=\"[{&quot;path&quot;:&quot;py_ref/class_open_maya_1_1_m_scene_message.html#abca4a003f2dc19d55b88798d0cb4aa32&quot;,&quot;title&quot;:&quot;Maya Python API 2.0 Reference&quot;,&quot;relpathtoroot&quot;:&quot;../../../&quot;}]\">OpenMaya.MSceneMessage.addCallback</a>(\n\
                     OpenMaya.MSceneMessage.kBeforeNew, \n\
                     clearTrackingDictionaries \n\
                 )\n\
    ...\n\
}\n\
\n\
def uninitializePlugin(plugin): \n\
    ... \n\
    if fileOpenCB != 0:\n\
        OpenMaya.MSceneMessage.removeCallback(fileOpenCB) \n\
        fileOpenCB = 0 \n\
\n\
    if fileNewCB != 0: \n\
        OpenMaya.MSceneMessage.removeCallback(fileNewCB)\n\
        fileNewCB = 0\n\
\n\
</pre></div><div class=\'section\'><a id=\"operating-system-types\"></a><h4 id=\"operating-system-types\">Operating System Types</h4></div>\n\
<p>There are some methods in the Maya Python API that require <span class=\'code\'>&lt;iosteam&gt;</span> operating system types. As these are not included in Python, a <span class=\'code\'><a href=\"javascript:void(0)\" data-symbol=\"MStreamUtils\" class=\"a_multireflink\" data-reflinkdata=\"[{&quot;path&quot;:&quot;cpp_ref/class_m_stream_utils.html&quot;,&quot;title&quot;:&quot;C++ API Reference&quot;,&quot;relpathtoroot&quot;:&quot;../../../&quot;}]\">MStreamUtils</a></span> class is available for creating and using these type of objects. Please check the Developer Kit for examples on how to use this class.</p>\n\
<div class=\'section\'><a id=\"calling-into-the-parent-class\"></a><h4 id=\"calling-into-the-parent-class\">Calling into the Parent class</h4></div>\n\
<p>Often when writing an MPx proxy class, the scripts will require calling into the parent class. This is done using notation such as the following:</p>\n\
<p><span class=\'code\'>matrix = OpenMayaMPx.MPxTransformationMatrix.asMatrix(self)</span></p>\n\
<div class=\'section\'><a id=\"enum-values\"></a><h4 id=\"enum-values\">Enum values</h4></div>\n\
<p>Enum values are accessed using a moduleName.className.value notation such as:</p>\n\
<p><span class=\'code\'>OpenMaya.MSyntax.kDouble</span></p>\n\
<div class=\'section\'><a id=\"using-opengl\"></a><h4 id=\"using-opengl\">Using OpenGL</h4></div>\n\
<p>We have provided a wrapper class <span class=\'code\'><a href=\"javascript:void(0)\" data-symbol=\"MGLFunctionTable\" class=\"a_multireflink\" data-reflinkdata=\"[{&quot;path&quot;:&quot;cpp_ref/class_m_g_l_function_table.html&quot;,&quot;title&quot;:&quot;C++ API Reference&quot;,&quot;relpathtoroot&quot;:&quot;../../../&quot;}]\">MGLFunctionTable</a></span> for using OpenGL functionality in script on all of our support platforms. To acquire a reference to this class use the following code:</p>\n\
<div class=\"codeBlock\"><pre class=\"prettyprint\">glRenderer = OpenMayaRender.MHardwareRenderer.theRenderer()\n\
glFT = glRenderer.glFunctionTable()\n\
\n\
</pre></div><div class=\'section\'><a id=\"nested-iterators-and-garbage-collection\"></a><h4 id=\"nested-iterators-and-garbage-collection\">Nested iterators and Garbage Collection</h4></div>\n\
<p>When writing nested iterators, it is normal to have the current item of the outer loop passed into an inner loop. For example, the current item of an <span class=\'code\'><a href=\"javascript:void(0)\" data-symbol=\"MItSelectionList\" class=\"a_multireflink\" data-reflinkdata=\"[{&quot;path&quot;:&quot;cpp_ref/class_m_it_selection_list.html&quot;,&quot;title&quot;:&quot;C++ API Reference&quot;,&quot;relpathtoroot&quot;:&quot;../../../&quot;},{&quot;path&quot;:&quot;py_ref/class_open_maya_1_1_m_it_selection_list.html&quot;,&quot;title&quot;:&quot;Maya Python API 2.0 Reference&quot;,&quot;relpathtoroot&quot;:&quot;../../../&quot;}]\">MItSelectionList</a></span> is passed into a <span class=\'code\'><a href=\"javascript:void(0)\" data-symbol=\"MItSurfaceCV\" class=\"a_multireflink\" data-reflinkdata=\"[{&quot;path&quot;:&quot;cpp_ref/class_m_it_surface_c_v.html&quot;,&quot;title&quot;:&quot;C++ API Reference&quot;,&quot;relpathtoroot&quot;:&quot;../../../&quot;},{&quot;path&quot;:&quot;py_ref/class_open_maya_1_1_m_it_surface_c_v.html&quot;,&quot;title&quot;:&quot;Maya Python API 2.0 Reference&quot;,&quot;relpathtoroot&quot;:&quot;../../../&quot;}]\">MItSurfaceCV</a></span> iterator. You may encounter garbage collection issues in this case where the inner iterator is holding on to information that may no longer be valid. You can work around this by resetting the inner iterator to None once its loop has been completed. This releases the iterator’s information before the outer loop continues, which is important if current items are being rebuilt or updated.</p>\n\
<div class=\'section\'><a id=\"standalone-scripts\"></a><h2 id=\"standalone-scripts\">Standalone Scripts</h2></div>\n\
<p>It is possible to write standalone scripts that make use of the wrapper classes and function sets to modify the Maya model. These scripts are run from the command line. A simple &quot;hello world&quot; standalone script follows:</p>\n\
<div class=\"codeBlock\"><pre class=\"prettyprint\">import maya.standalone\n\
import maya.OpenMaya as OpenMaya\n\
import sys\n\
def main( argv = None ):\n\
    try:\n\
        maya.standalone.initialize( name=&#39;python&#39; )\n\
    except:\n\
        sys.stderr.write( &quot;Failed in initialize standalone application&quot; )\n\
        raise\n\
    sys.stderr.write( &quot;Hello world! (script output)\\n&quot; )\n\
    <a href=\"javascript:void(0)\" data-symbol=\"OpenMaya.MGlobal\" class=\"a_multireflink\" data-reflinkdata=\"[{&quot;path&quot;:&quot;py_ref/class_open_maya_1_1_m_global.html&quot;,&quot;title&quot;:&quot;Maya Python API 2.0 Reference&quot;,&quot;relpathtoroot&quot;:&quot;../../../&quot;}]\">OpenMaya.MGlobal</a>().executeCommand( &quot;print \\&quot;Hello world! (command script output)\\\\n\\&quot;&quot; )\n\
    maya.standalone.uninitialize()\n\
    \n\
if __name__ == &quot;__main__&quot;:\n\
    main()\n\
\n\
</pre></div><p>After the standalone is initialized, Maya commands and API classes can be used to create and modify a Maya model. When finished, the standalone is uninitialized to allow Maya to clean up after itself. Do not attempt to use Maya commands or API classes before the call to <span class=\'code\'>initialize()</span> or after the call to <span class=\'code\'>uninitialize()</span>; otherwise, unstable behaviour may result.</p>\n\
<p>A standalone script must be run using the Python executable that is supplied with Maya. For example:</p>\n\
<p><span class=\'code\'>$MAYA_LOCATION/bin/mayapy helloWorld.py</span></p>\n\
      <div class=\"footer-block\"><a href=\"../html/ac.cmtdialog.htm\" class=\"comments-anchor\" target=\"_blank\"><span class=\"comments-link\">Please send us your comment about this page</span></a></div></div>\n\
   </div></body>\n\
</html>\n\
";