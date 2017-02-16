var topic = "<!-- saved from url=(0024)http://docs.autodesk.com -->\n\
<html>\n\
   <head><script src=\"../scripts/yepnope.1.5.4-min.js\" type=\"text/javascript\"></script><script src=\"../scripts/lib/jquery-1.11.1.min.js\" type=\"text/javascript\"></script><meta http-equiv=\"Content-Type\" content=\"text/html; charset=UTF-8\"><meta name=\"product\" content=\"MAYAUL\"><meta name=\"release\" content=\"2017\"><meta name=\"book\" content=\"Developer\"><meta name=\"created\" content=\"2016-06-16\"><meta name=\"topicid\" content=\"GUID-02DEF634-1E7B-48C6-8ACD-2C934CA97887\"><meta name=\"topic-type\" content=\"concept\">\n\
      <title>MItInstancer Class Reference</title>\n\
   \n\
\n\
<meta name=\"topic-subtype\" content=\"C++\"></head>\n\
   <body height=\"100%\"><div class=\"body_content\" id=\"body-content\"><link rel=\"stylesheet\" type=\"text/css\" href=\"cpp_ref/navtree.css\"><link rel=\"stylesheet\" type=\"text/css\" href=\"cpp_ref/doxygen.css\"><link rel=\"stylesheet\" type=\"text/css\" href=\"cpp_ref/tabs.css\"><link rel=\"stylesheet\" type=\"text/css\" href=\"style/adsk.cpm.css\"><script language=\"javascript\">var index = \'index.html\';</script><script>$(document).ready(function() { yepnope.injectJs(\"./scripts/ac_common.js\"); });</script><script type=\"text/javascript\">\n\
var tocSystemNeedsToBeLoaded = typeof(cpp_ref_adsk_ref_toc) == \'undefined\';\n\
var weAreIn21 = $(\'div#main.view-active\').length;\n\
var tocPrefix = \'\';\n\
if (weAreIn21)\n\
{ tocPrefix = \'cpp_ref/\'; }\n\
function cpp_ref_initializeToc(forceTrigger) {\n\
    cpp_ref_adsk_ref_toc.initResizable();\n\
    cpp_ref_adsk_ref_toc.initNavTree(\'class_m_it_instancer.html\', tocPrefix);\n\
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
</script><script>$(\"div#WidgetFloaterPanels,link[href*=\'microsofttranslator.com\'],script[src*=\'microsofttranslator.com\'],script[src*=\'bing.com\']\").remove();</script><script type=\'text/javascript\'>$(\"div#navigation,div#breadcrumbs,div#banner\").attr(\"translate\",\"no\"); var mtLocation = ((location && location.href && location.href.indexOf(\'https\') == 0)?\'https://ssl.microsofttranslator.com\':\'http://www.microsofttranslator.com\')+\'/ajax/v3/WidgetV3.ashx?ctf=True&ui=true&settings=Manual&from=en&hidelanguages=\'; yepnope.injectJs(mtLocation, function() {}, { charset:\'utf-8\', type:\'text/javascript\' } );</script><script>\n\
 if (!tocSystemNeedsToBeLoaded) { cpp_ref_initializeToc(); }\n\
 </script><!-- begin MT -->\n\
            \n\
            <div id=\'MicrosoftTranslatorWidget\' class=\'Dark\' style=\'float:right;z-index:100;color:white;background-color:#bbbbbb;height:58px;overflow:hidden\'></div>\n\
      <div>\n\
         <div class=\"head\">\n\
            <h1>MItInstancer Class Reference</h1>\n\
         </div>\n\
\n\
    <div id=\"top\"><!-- Generated by Doxygen 1.8.10 -->\n\
  <div id=\"navrow1\" class=\"tabs\">\n\
    <ul class=\"tablist\">\n\
      <li><a href=\"#!/url=./cpp_ref/index.html\"><span>Main&#160;Page</span></a></li>\n\
      <li><a href=\"#!/url=./cpp_ref/pages.html\"><span>Topics</span></a></li>\n\
      <li><a href=\"#!/url=./cpp_ref/modules.html\"><span>Modules</span></a></li>\n\
      <li><a href=\"#!/url=./cpp_ref/namespaces.html\"><span>Namespaces</span></a></li>\n\
      <li class=\"current\"><a href=\"#!/url=./cpp_ref/annotated.html\"><span>Classes</span></a></li>\n\
      <li><a href=\"#!/url=./cpp_ref/examples.html\"><span>Examples</span></a></li>\n\
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
<div class=\"header\">\n\
  \n\
  <div class=\"headertitle\">\n\
<div class=\"title\">MItInstancer Class Reference<div class=\"ingroups\"><a class=\"el\" translate=\"no\" href=\"#!/url=./cpp_ref/group___open_maya.html\">OpenMaya - API module for common classes</a></div></div>  </div>\n\
<div class=\"summary\">\n\
<a href=\"class_m_it_instancer.html#pub-methods\">Public Member Functions</a> &#124;\n\
<a href=\"class_m_it_instancer.html#pub-static-methods\">Static Public Member Functions</a>  </div></div><!--header-->\n\
<div class=\"contents\">\n\
\n\
<p><code>#include &lt;MItInstancer.h&gt;</code></p>\n\
<a name=\"details\" id=\"details\"></a><h2 class=\"groupheader\">Class Description</h2>\n\
<div class=\"textblock\"><p>Particle iterator. </p>\n\
<p>Maya\'s Particle Replacement aka Particle Instancing feature allows geometry to be instanced and those instances transformed using particles. More precisely, particles are replaced by arbitrary DAG nodes which maya be transforms with many shapes under them, and multiple DAG paths to those shapes.</p>\n\
<p>The Instancer Iterator Class (<a class=\"el\" translate=\"no\" href=\"#!/url=./cpp_ref/class_m_it_instancer.html\" title=\"Particle iterator. \">MItInstancer</a>) provides methods for iterating over all the dag paths to the shapes created in the scene by the replacement of particles by dag nodes.</p>\n\
<p>When particles are being replaced by a shape node there will be one dag path corresponding with each particle. If, say, particles are instead being replaced by a transform with five shape nodes somewhere underneath it, then this iterator will visit five paths for every particle. Dag-instancing is also respected: if the given dag node has two child transforms each of which is a path to one shape underneath them, then this iterator will visit two paths. In other words, this iterator does not distinguish between paths resulting from a multiplicity of actual shapes and paths resulting from DAG-instances of individual shapes: all appear as different paths for the current particle.</p>\n\
<p>A simple usage might look like:</p>\n\
<p><a class=\"el\" translate=\"no\" href=\"#!/url=./cpp_ref/class_m_it_instancer.html\" title=\"Particle iterator. \">MItInstancer</a> it; while( ! it.isDone() ) { <a class=\"el\" translate=\"no\" href=\"#!/url=./cpp_ref/class_m_dag_path.html\" title=\"DAG Path. \">MDagPath</a> path = it.path(); <a class=\"el\" translate=\"no\" href=\"#!/url=./cpp_ref/class_m_string.html\" title=\"Manipulate strings. \">MString</a> label = path.fullPathName(); MGlobal::displayInfo( label ); it.next(); } </p>\n\
<dl class=\"section \"><div id=\"dynsection-example0\" class=\"dynheader closed\" onclick=\"return toggleVisibility(this)\" style=\"cursor:pointer;\"><dt><img id=\"dynsection-example0-trigger\" src=\"cpp_ref/closed.png\" alt=\"+\"> <b>Examples: </b></dt></div><div id=\"dynsection-example0-content\" class=\"dyncontent\" style=\"display:none;\"><dd><a class=\"el\" translate=\"no\" href=\"#!/url=./cpp_ref/instancer_list_cmd_2instancer_list_cmd_8cpp-example.html#_a17\">instancerListCmd/instancerListCmd.cpp</a>.</dd></div>\n\
</dl></div><table class=\"memberdecls\">\n\
<tr class=\"heading\"><td colspan=\"2\"><h2 class=\"groupheader\"><a name=\"pub-methods\"></a>\n\
Public Member Functions</h2></td></tr>\n\
<tr class=\"memitem:ac45273c1a33323c0ba3844fe2e775622\"><td class=\"memItemLeft\" translate=\"no\" align=\"right\" valign=\"top\"><a class=\"anchor\" id=\"ac45273c1a33323c0ba3844fe2e775622\"></a>\n\
&#160;</td><td class=\"memItemRight\" translate=\"no\" valign=\"bottom\"><a class=\"el\" translate=\"no\" href=\"#!/url=./cpp_ref/class_m_it_instancer.html#ac45273c1a33323c0ba3844fe2e775622\">MItInstancer</a> ()</td></tr>\n\
<tr class=\"memdesc:ac45273c1a33323c0ba3844fe2e775622\"><td class=\"mdescLeft\">&#160;</td><td class=\"mdescRight\">Constructs a dag-path-to-replaced-particle Iterator and resets it See <a class=\"el\" translate=\"no\" href=\"#!/url=./cpp_ref/class_m_it_instancer.html#ac734f26ff1c92ecec3572a31f5e4435c\" title=\"Moves the iterator to the first dag-path to the first replaced-particle in the scene. \">reset()</a> for more information. <br></td></tr>\n\
<tr class=\"separator:ac45273c1a33323c0ba3844fe2e775622\"><td class=\"memSeparator\" colspan=\"2\">&#160;</td></tr>\n\
<tr class=\"memitem:a05dba97e7e87f5293b9b56a0df3fbf8b\"><td class=\"memItemLeft\" translate=\"no\" align=\"right\" valign=\"top\"><a class=\"anchor\" id=\"a05dba97e7e87f5293b9b56a0df3fbf8b\"></a>\n\
virtual&#160;</td><td class=\"memItemRight\" translate=\"no\" valign=\"bottom\"><a class=\"el\" translate=\"no\" href=\"#!/url=./cpp_ref/class_m_it_instancer.html#a05dba97e7e87f5293b9b56a0df3fbf8b\">~MItInstancer</a> ()</td></tr>\n\
<tr class=\"memdesc:a05dba97e7e87f5293b9b56a0df3fbf8b\"><td class=\"mdescLeft\">&#160;</td><td class=\"mdescRight\">Class destructor. <br></td></tr>\n\
<tr class=\"separator:a05dba97e7e87f5293b9b56a0df3fbf8b\"><td class=\"memSeparator\" colspan=\"2\">&#160;</td></tr>\n\
<tr class=\"memitem:ac734f26ff1c92ecec3572a31f5e4435c\"><td class=\"memItemLeft\" translate=\"no\" align=\"right\" valign=\"top\"><a class=\"el\" translate=\"no\" href=\"#!/url=./cpp_ref/class_m_status.html\">MStatus</a>&#160;</td><td class=\"memItemRight\" translate=\"no\" valign=\"bottom\"><a class=\"el\" translate=\"no\" href=\"#!/url=./cpp_ref/class_m_it_instancer.html#ac734f26ff1c92ecec3572a31f5e4435c\">reset</a> ()</td></tr>\n\
<tr class=\"memdesc:ac734f26ff1c92ecec3572a31f5e4435c\"><td class=\"mdescLeft\">&#160;</td><td class=\"mdescRight\">Moves the iterator to the first dag-path to the first replaced-particle in the scene.  <a href=\"class_m_it_instancer.html#ac734f26ff1c92ecec3572a31f5e4435c\">More...</a><br></td></tr>\n\
<tr class=\"separator:ac734f26ff1c92ecec3572a31f5e4435c\"><td class=\"memSeparator\" colspan=\"2\">&#160;</td></tr>\n\
<tr class=\"memitem:a73616f002814b8abe6d921db72d7a496\"><td class=\"memItemLeft\" translate=\"no\" align=\"right\" valign=\"top\"><a class=\"el\" translate=\"no\" href=\"#!/url=./cpp_ref/class_m_status.html\">MStatus</a>&#160;</td><td class=\"memItemRight\" translate=\"no\" valign=\"bottom\"><a class=\"el\" translate=\"no\" href=\"#!/url=./cpp_ref/class_m_it_instancer.html#a73616f002814b8abe6d921db72d7a496\">next</a> ()</td></tr>\n\
<tr class=\"memdesc:a73616f002814b8abe6d921db72d7a496\"><td class=\"mdescLeft\">&#160;</td><td class=\"mdescRight\">Advances the iterator to the next replaced-particle dag-path in the scene.  <a href=\"class_m_it_instancer.html#a73616f002814b8abe6d921db72d7a496\">More...</a><br></td></tr>\n\
<tr class=\"separator:a73616f002814b8abe6d921db72d7a496\"><td class=\"memSeparator\" colspan=\"2\">&#160;</td></tr>\n\
<tr class=\"memitem:aa58f3ea5e74e9ea5fec25d8194b1c1af\"><td class=\"memItemLeft\" translate=\"no\" align=\"right\" valign=\"top\"><a class=\"el\" translate=\"no\" href=\"#!/url=./cpp_ref/class_m_status.html\">MStatus</a>&#160;</td><td class=\"memItemRight\" translate=\"no\" valign=\"bottom\"><a class=\"el\" translate=\"no\" href=\"#!/url=./cpp_ref/class_m_it_instancer.html#aa58f3ea5e74e9ea5fec25d8194b1c1af\">nextParticle</a> ()</td></tr>\n\
<tr class=\"memdesc:aa58f3ea5e74e9ea5fec25d8194b1c1af\"><td class=\"mdescLeft\">&#160;</td><td class=\"mdescRight\">Advances the iterator to the next replaced-particle in the scene, skipping over any remaining dag-paths associated with the current replaced-particle.  <a href=\"class_m_it_instancer.html#aa58f3ea5e74e9ea5fec25d8194b1c1af\">More...</a><br></td></tr>\n\
<tr class=\"separator:aa58f3ea5e74e9ea5fec25d8194b1c1af\"><td class=\"memSeparator\" colspan=\"2\">&#160;</td></tr>\n\
<tr class=\"memitem:a99bf4beec34af5a2e3cb889591847e16\"><td class=\"memItemLeft\" translate=\"no\" align=\"right\" valign=\"top\"><a class=\"el\" translate=\"no\" href=\"#!/url=./cpp_ref/class_m_status.html\">MStatus</a>&#160;</td><td class=\"memItemRight\" translate=\"no\" valign=\"bottom\"><a class=\"el\" translate=\"no\" href=\"#!/url=./cpp_ref/class_m_it_instancer.html#a99bf4beec34af5a2e3cb889591847e16\">nextInstancer</a> ()</td></tr>\n\
<tr class=\"memdesc:a99bf4beec34af5a2e3cb889591847e16\"><td class=\"mdescLeft\">&#160;</td><td class=\"mdescRight\">Advances the iterator to the next instancer in the scene, skipping over any remaining particles associated with the current instancer.  <a href=\"class_m_it_instancer.html#a99bf4beec34af5a2e3cb889591847e16\">More...</a><br></td></tr>\n\
<tr class=\"separator:a99bf4beec34af5a2e3cb889591847e16\"><td class=\"memSeparator\" colspan=\"2\">&#160;</td></tr>\n\
<tr class=\"memitem:add4bf50abae421d88b5549de6c11fc75\"><td class=\"memItemLeft\" translate=\"no\" align=\"right\" valign=\"top\">bool&#160;</td><td class=\"memItemRight\" translate=\"no\" valign=\"bottom\"><a class=\"el\" translate=\"no\" href=\"#!/url=./cpp_ref/class_m_it_instancer.html#add4bf50abae421d88b5549de6c11fc75\">isDone</a> () const </td></tr>\n\
<tr class=\"memdesc:add4bf50abae421d88b5549de6c11fc75\"><td class=\"mdescLeft\">&#160;</td><td class=\"mdescRight\">Returns <b>true</b> if the iteration is finished, i.e.  <a href=\"class_m_it_instancer.html#add4bf50abae421d88b5549de6c11fc75\">More...</a><br></td></tr>\n\
<tr class=\"separator:add4bf50abae421d88b5549de6c11fc75\"><td class=\"memSeparator\" colspan=\"2\">&#160;</td></tr>\n\
<tr class=\"memitem:add15a5ab3ad480108b311d3f27441c3f\"><td class=\"memItemLeft\" translate=\"no\" align=\"right\" valign=\"top\"><a class=\"el\" translate=\"no\" href=\"#!/url=./cpp_ref/class_m_object.html\">MObject</a>&#160;</td><td class=\"memItemRight\" translate=\"no\" valign=\"bottom\"><a class=\"el\" translate=\"no\" href=\"#!/url=./cpp_ref/class_m_it_instancer.html#add15a5ab3ad480108b311d3f27441c3f\">instancer</a> () const </td></tr>\n\
<tr class=\"memdesc:add15a5ab3ad480108b311d3f27441c3f\"><td class=\"mdescLeft\">&#160;</td><td class=\"mdescRight\">Returns the current instancer node as an <a class=\"el\" translate=\"no\" href=\"#!/url=./cpp_ref/class_m_object.html\" title=\"Generic Class for Accessing Internal Maya Objects. \">MObject</a>.  <a href=\"class_m_it_instancer.html#add15a5ab3ad480108b311d3f27441c3f\">More...</a><br></td></tr>\n\
<tr class=\"separator:add15a5ab3ad480108b311d3f27441c3f\"><td class=\"memSeparator\" colspan=\"2\">&#160;</td></tr>\n\
<tr class=\"memitem:a2d28ad07fc4ef75ac9eb709f3a650ccc\"><td class=\"memItemLeft\" translate=\"no\" align=\"right\" valign=\"top\"><a class=\"el\" translate=\"no\" href=\"#!/url=./cpp_ref/class_m_dag_path.html\">MDagPath</a>&#160;</td><td class=\"memItemRight\" translate=\"no\" valign=\"bottom\"><a class=\"el\" translate=\"no\" href=\"#!/url=./cpp_ref/class_m_it_instancer.html#a2d28ad07fc4ef75ac9eb709f3a650ccc\">instancerPath</a> () const </td></tr>\n\
<tr class=\"memdesc:a2d28ad07fc4ef75ac9eb709f3a650ccc\"><td class=\"mdescLeft\">&#160;</td><td class=\"mdescRight\">Returns the full DAG path to the instancer that generated the current particle instance.  <a href=\"class_m_it_instancer.html#a2d28ad07fc4ef75ac9eb709f3a650ccc\">More...</a><br></td></tr>\n\
<tr class=\"separator:a2d28ad07fc4ef75ac9eb709f3a650ccc\"><td class=\"memSeparator\" colspan=\"2\">&#160;</td></tr>\n\
<tr class=\"memitem:affb767774efcdb59a2f2254be91963cf\"><td class=\"memItemLeft\" translate=\"no\" align=\"right\" valign=\"top\"><a class=\"el\" translate=\"no\" href=\"#!/url=./cpp_ref/class_m_dag_path.html\">MDagPath</a>&#160;</td><td class=\"memItemRight\" translate=\"no\" valign=\"bottom\"><a class=\"el\" translate=\"no\" href=\"#!/url=./cpp_ref/class_m_it_instancer.html#affb767774efcdb59a2f2254be91963cf\">path</a> ()</td></tr>\n\
<tr class=\"memdesc:affb767774efcdb59a2f2254be91963cf\"><td class=\"mdescLeft\">&#160;</td><td class=\"mdescRight\">Returns the replaced-particle dag-path which the iterator is currently pointing to.  <a href=\"class_m_it_instancer.html#affb767774efcdb59a2f2254be91963cf\">More...</a><br></td></tr>\n\
<tr class=\"separator:affb767774efcdb59a2f2254be91963cf\"><td class=\"memSeparator\" colspan=\"2\">&#160;</td></tr>\n\
<tr class=\"memitem:a7dd645fc997712befd36b50a24bee5b3\"><td class=\"memItemLeft\" translate=\"no\" align=\"right\" valign=\"top\"><a class=\"el\" translate=\"no\" href=\"#!/url=./cpp_ref/class_m_matrix.html\">MMatrix</a>&#160;</td><td class=\"memItemRight\" translate=\"no\" valign=\"bottom\"><a class=\"el\" translate=\"no\" href=\"#!/url=./cpp_ref/class_m_it_instancer.html#a7dd645fc997712befd36b50a24bee5b3\">matrix</a> ()</td></tr>\n\
<tr class=\"memdesc:a7dd645fc997712befd36b50a24bee5b3\"><td class=\"mdescLeft\">&#160;</td><td class=\"mdescRight\">Returns the transformation matrix represented by the current path.  <a href=\"class_m_it_instancer.html#a7dd645fc997712befd36b50a24bee5b3\">More...</a><br></td></tr>\n\
<tr class=\"separator:a7dd645fc997712befd36b50a24bee5b3\"><td class=\"memSeparator\" colspan=\"2\">&#160;</td></tr>\n\
<tr class=\"memitem:a587f059bccf5223f41985802befcc5a3\"><td class=\"memItemLeft\" translate=\"no\" align=\"right\" valign=\"top\">MUintPtrSz&#160;</td><td class=\"memItemRight\" translate=\"no\" valign=\"bottom\"><a class=\"el\" translate=\"no\" href=\"#!/url=./cpp_ref/class_m_it_instancer.html#a587f059bccf5223f41985802befcc5a3\">instancerId</a> () const </td></tr>\n\
<tr class=\"memdesc:a587f059bccf5223f41985802befcc5a3\"><td class=\"mdescLeft\">&#160;</td><td class=\"mdescRight\">Returns a unique identifier for the current instancer.  <a href=\"class_m_it_instancer.html#a587f059bccf5223f41985802befcc5a3\">More...</a><br></td></tr>\n\
<tr class=\"separator:a587f059bccf5223f41985802befcc5a3\"><td class=\"memSeparator\" colspan=\"2\">&#160;</td></tr>\n\
<tr class=\"memitem:af860e2ed97889b3f82e52d9a3aa6757d\"><td class=\"memItemLeft\" translate=\"no\" align=\"right\" valign=\"top\">unsigned int&#160;</td><td class=\"memItemRight\" translate=\"no\" valign=\"bottom\"><a class=\"el\" translate=\"no\" href=\"#!/url=./cpp_ref/class_m_it_instancer.html#af860e2ed97889b3f82e52d9a3aa6757d\">particleId</a> () const </td></tr>\n\
<tr class=\"memdesc:af860e2ed97889b3f82e52d9a3aa6757d\"><td class=\"mdescLeft\">&#160;</td><td class=\"mdescRight\">Returns a unique identifier for the current particle.  <a href=\"class_m_it_instancer.html#af860e2ed97889b3f82e52d9a3aa6757d\">More...</a><br></td></tr>\n\
<tr class=\"separator:af860e2ed97889b3f82e52d9a3aa6757d\"><td class=\"memSeparator\" colspan=\"2\">&#160;</td></tr>\n\
<tr class=\"memitem:a16e7932e6211b13b6ca688083ad00e46\"><td class=\"memItemLeft\" translate=\"no\" align=\"right\" valign=\"top\">unsigned int&#160;</td><td class=\"memItemRight\" translate=\"no\" valign=\"bottom\"><a class=\"el\" translate=\"no\" href=\"#!/url=./cpp_ref/class_m_it_instancer.html#a16e7932e6211b13b6ca688083ad00e46\">pathId</a> () const </td></tr>\n\
<tr class=\"memdesc:a16e7932e6211b13b6ca688083ad00e46\"><td class=\"mdescLeft\">&#160;</td><td class=\"mdescRight\">Returns a unique identifier for the current path.  <a href=\"class_m_it_instancer.html#a16e7932e6211b13b6ca688083ad00e46\">More...</a><br></td></tr>\n\
<tr class=\"separator:a16e7932e6211b13b6ca688083ad00e46\"><td class=\"memSeparator\" colspan=\"2\">&#160;</td></tr>\n\
</table><table class=\"memberdecls\">\n\
<tr class=\"heading\"><td colspan=\"2\"><h2 class=\"groupheader\"><a name=\"pub-static-methods\"></a>\n\
Static Public Member Functions</h2></td></tr>\n\
<tr class=\"memitem:a774cd5d8fbebe8e7ed82a5aa587d1f04\"><td class=\"memItemLeft\" translate=\"no\" align=\"right\" valign=\"top\">static const char *&#160;</td><td class=\"memItemRight\" translate=\"no\" valign=\"bottom\"><a class=\"el\" translate=\"no\" href=\"#!/url=./cpp_ref/class_m_it_instancer.html#a774cd5d8fbebe8e7ed82a5aa587d1f04\">className</a> ()</td></tr>\n\
<tr class=\"memdesc:a774cd5d8fbebe8e7ed82a5aa587d1f04\"><td class=\"mdescLeft\">&#160;</td><td class=\"mdescRight\">Returns the name of this class.  <a href=\"class_m_it_instancer.html#a774cd5d8fbebe8e7ed82a5aa587d1f04\">More...</a><br></td></tr>\n\
<tr class=\"separator:a774cd5d8fbebe8e7ed82a5aa587d1f04\"><td class=\"memSeparator\" colspan=\"2\">&#160;</td></tr>\n\
</table>\n\
<h2 class=\"groupheader\">Member Function Documentation</h2>\n\
<a class=\"anchor\" id=\"ac734f26ff1c92ecec3572a31f5e4435c\"></a>\n\
<div class=\"memitem\">\n\
<div class=\"memproto\">\n\
      <table class=\"memname\">\n\
        <tr>\n\
          <td class=\"memname\" translate=\"no\"><a class=\"el\" translate=\"no\" href=\"#!/url=./cpp_ref/class_m_status.html\">MStatus</a> reset </td>\n\
          <td>(</td>\n\
          <td class=\"paramname\"></td><td>)</td>\n\
          <td></td>\n\
        </tr>\n\
      </table>\n\
</div><div class=\"memdoc\">\n\
\n\
<p>Moves the iterator to the first dag-path to the first replaced-particle in the scene. </p>\n\
<p>If none exist, then <a class=\"el\" translate=\"no\" href=\"#!/url=./cpp_ref/class_m_it_instancer.html#add4bf50abae421d88b5549de6c11fc75\" title=\"Returns true if the iteration is finished, i.e. \">isDone()</a> will be immediately <b>true</b>.</p>\n\
<dl class=\"section return\"><dt>Returns</dt><dd><ul>\n\
<li><b><a class=\"el\" translate=\"no\" href=\"#!/url=./cpp_ref/class_m_status.html#a02ab596f4febca68da503aaf8dde3a80af0536797208144380691e2b376ffc1d1\" title=\"The operation was successful. \">MS::kSuccess</a></b> The method was successful. </li>\n\
<li><b><a class=\"el\" translate=\"no\" href=\"#!/url=./cpp_ref/class_m_status.html#a02ab596f4febca68da503aaf8dde3a80a1ef6c2d725fb4bec3e7e840d28adbc00\" title=\"The operation failed. \">MS::kFailure</a></b> An object error has occurred. </li>\n\
</ul>\n\
</dd></dl>\n\
\n\
</div>\n\
</div>\n\
<a class=\"anchor\" id=\"a73616f002814b8abe6d921db72d7a496\"></a>\n\
<div class=\"memitem\">\n\
<div class=\"memproto\">\n\
      <table class=\"memname\">\n\
        <tr>\n\
          <td class=\"memname\" translate=\"no\"><a class=\"el\" translate=\"no\" href=\"#!/url=./cpp_ref/class_m_status.html\">MStatus</a> next </td>\n\
          <td>(</td>\n\
          <td class=\"paramname\"></td><td>)</td>\n\
          <td></td>\n\
        </tr>\n\
      </table>\n\
</div><div class=\"memdoc\">\n\
\n\
<p>Advances the iterator to the next replaced-particle dag-path in the scene. </p>\n\
<p>Calling <a class=\"el\" translate=\"no\" href=\"#!/url=./cpp_ref/class_m_it_instancer.html#ac734f26ff1c92ecec3572a31f5e4435c\" title=\"Moves the iterator to the first dag-path to the first replaced-particle in the scene. \">reset()</a>, then repeatedly calling this method until <a class=\"el\" translate=\"no\" href=\"#!/url=./cpp_ref/class_m_it_instancer.html#add4bf50abae421d88b5549de6c11fc75\" title=\"Returns true if the iteration is finished, i.e. \">isDone()</a> becomes <b>true</b> is equivalent to the following loop structure:</p>\n\
<p>For every instancer For every particle For every dagPath connected to this instancer</p>\n\
<dl class=\"section return\"><dt>Returns</dt><dd><ul>\n\
<li><b><a class=\"el\" translate=\"no\" href=\"#!/url=./cpp_ref/class_m_status.html#a02ab596f4febca68da503aaf8dde3a80af0536797208144380691e2b376ffc1d1\" title=\"The operation was successful. \">MS::kSuccess</a></b> The method was successful. </li>\n\
<li><b><a class=\"el\" translate=\"no\" href=\"#!/url=./cpp_ref/class_m_status.html#a02ab596f4febca68da503aaf8dde3a80a1ef6c2d725fb4bec3e7e840d28adbc00\" title=\"The operation failed. \">MS::kFailure</a></b> An object error has occurred. </li>\n\
</ul>\n\
</dd></dl>\n\
<dl class=\"section \"><div id=\"dynsection-example1\" class=\"dynheader closed\" onclick=\"return toggleVisibility(this)\" style=\"cursor:pointer;\"><dt><img id=\"dynsection-example1-trigger\" src=\"cpp_ref/closed.png\" alt=\"+\"> <b>Examples: </b></dt></div><div id=\"dynsection-example1-content\" class=\"dyncontent\" style=\"display:none;\"><dd><a class=\"el\" translate=\"no\" href=\"#!/url=./cpp_ref/instancer_list_cmd_2instancer_list_cmd_8cpp-example.html#a26\">instancerListCmd/instancerListCmd.cpp</a>.</dd></div>\n\
</dl>\n\
</div>\n\
</div>\n\
<a class=\"anchor\" id=\"aa58f3ea5e74e9ea5fec25d8194b1c1af\"></a>\n\
<div class=\"memitem\">\n\
<div class=\"memproto\">\n\
      <table class=\"memname\">\n\
        <tr>\n\
          <td class=\"memname\" translate=\"no\"><a class=\"el\" translate=\"no\" href=\"#!/url=./cpp_ref/class_m_status.html\">MStatus</a> nextParticle </td>\n\
          <td>(</td>\n\
          <td class=\"paramname\"></td><td>)</td>\n\
          <td></td>\n\
        </tr>\n\
      </table>\n\
</div><div class=\"memdoc\">\n\
\n\
<p>Advances the iterator to the next replaced-particle in the scene, skipping over any remaining dag-paths associated with the current replaced-particle. </p>\n\
<p>If there are no more particles associated with the current instancer then the iterator will advance to the next instancer in order to point at the next particle.</p>\n\
<dl class=\"section return\"><dt>Returns</dt><dd><ul>\n\
<li><b><a class=\"el\" translate=\"no\" href=\"#!/url=./cpp_ref/class_m_status.html#a02ab596f4febca68da503aaf8dde3a80af0536797208144380691e2b376ffc1d1\" title=\"The operation was successful. \">MS::kSuccess</a></b> The method was successful. </li>\n\
<li><b><a class=\"el\" translate=\"no\" href=\"#!/url=./cpp_ref/class_m_status.html#a02ab596f4febca68da503aaf8dde3a80a1ef6c2d725fb4bec3e7e840d28adbc00\" title=\"The operation failed. \">MS::kFailure</a></b> An object error has occurred. </li>\n\
</ul>\n\
</dd></dl>\n\
\n\
</div>\n\
</div>\n\
<a class=\"anchor\" id=\"a99bf4beec34af5a2e3cb889591847e16\"></a>\n\
<div class=\"memitem\">\n\
<div class=\"memproto\">\n\
      <table class=\"memname\">\n\
        <tr>\n\
          <td class=\"memname\" translate=\"no\"><a class=\"el\" translate=\"no\" href=\"#!/url=./cpp_ref/class_m_status.html\">MStatus</a> nextInstancer </td>\n\
          <td>(</td>\n\
          <td class=\"paramname\"></td><td>)</td>\n\
          <td></td>\n\
        </tr>\n\
      </table>\n\
</div><div class=\"memdoc\">\n\
\n\
<p>Advances the iterator to the next instancer in the scene, skipping over any remaining particles associated with the current instancer. </p>\n\
<dl class=\"section return\"><dt>Returns</dt><dd><ul>\n\
<li><b><a class=\"el\" translate=\"no\" href=\"#!/url=./cpp_ref/class_m_status.html#a02ab596f4febca68da503aaf8dde3a80af0536797208144380691e2b376ffc1d1\" title=\"The operation was successful. \">MS::kSuccess</a></b> The method was successful. </li>\n\
<li><b><a class=\"el\" translate=\"no\" href=\"#!/url=./cpp_ref/class_m_status.html#a02ab596f4febca68da503aaf8dde3a80a1ef6c2d725fb4bec3e7e840d28adbc00\" title=\"The operation failed. \">MS::kFailure</a></b> An object error has occurred. </li>\n\
</ul>\n\
</dd></dl>\n\
\n\
</div>\n\
</div>\n\
<a class=\"anchor\" id=\"add4bf50abae421d88b5549de6c11fc75\"></a>\n\
<div class=\"memitem\">\n\
<div class=\"memproto\">\n\
      <table class=\"memname\">\n\
        <tr>\n\
          <td class=\"memname\" translate=\"no\">bool isDone </td>\n\
          <td>(</td>\n\
          <td class=\"paramname\"></td><td>)</td>\n\
          <td> const</td>\n\
        </tr>\n\
      </table>\n\
</div><div class=\"memdoc\">\n\
\n\
<p>Returns <b>true</b> if the iteration is finished, i.e. </p>\n\
<p>there are no more dag-paths to replaced-particles in the scene.</p>\n\
<dl class=\"section return\"><dt>Returns</dt><dd><ul>\n\
<li><b>true</b> There are no more items to iterate over. </li>\n\
<li><b>false</b> There are more items in the iteration. </li>\n\
</ul>\n\
</dd></dl>\n\
<dl class=\"section \"><div id=\"dynsection-example2\" class=\"dynheader closed\" onclick=\"return toggleVisibility(this)\" style=\"cursor:pointer;\"><dt><img id=\"dynsection-example2-trigger\" src=\"cpp_ref/closed.png\" alt=\"+\"> <b>Examples: </b></dt></div><div id=\"dynsection-example2-content\" class=\"dyncontent\" style=\"display:none;\"><dd><a class=\"el\" translate=\"no\" href=\"#!/url=./cpp_ref/instancer_list_cmd_2instancer_list_cmd_8cpp-example.html#a18\">instancerListCmd/instancerListCmd.cpp</a>.</dd></div>\n\
</dl>\n\
</div>\n\
</div>\n\
<a class=\"anchor\" id=\"add15a5ab3ad480108b311d3f27441c3f\"></a>\n\
<div class=\"memitem\">\n\
<div class=\"memproto\">\n\
      <table class=\"memname\">\n\
        <tr>\n\
          <td class=\"memname\" translate=\"no\"><a class=\"el\" translate=\"no\" href=\"#!/url=./cpp_ref/class_m_object.html\">MObject</a> instancer </td>\n\
          <td>(</td>\n\
          <td class=\"paramname\"></td><td>)</td>\n\
          <td> const</td>\n\
        </tr>\n\
      </table>\n\
</div><div class=\"memdoc\">\n\
\n\
<p>Returns the current instancer node as an <a class=\"el\" translate=\"no\" href=\"#!/url=./cpp_ref/class_m_object.html\" title=\"Generic Class for Accessing Internal Maya Objects. \">MObject</a>. </p>\n\
<dl class=\"section return\"><dt>Returns</dt><dd>See description. </dd></dl>\n\
<dl class=\"section \"><div id=\"dynsection-example3\" class=\"dynheader closed\" onclick=\"return toggleVisibility(this)\" style=\"cursor:pointer;\"><dt><img id=\"dynsection-example3-trigger\" src=\"cpp_ref/closed.png\" alt=\"+\"> <b>Examples: </b></dt></div><div id=\"dynsection-example3-content\" class=\"dyncontent\" style=\"display:none;\"><dd><a class=\"el\" translate=\"no\" href=\"#!/url=./cpp_ref/instancer_list_cmd_2instancer_list_cmd_8cpp-example.html#a20\">instancerListCmd/instancerListCmd.cpp</a>.</dd></div>\n\
</dl>\n\
</div>\n\
</div>\n\
<a class=\"anchor\" id=\"a2d28ad07fc4ef75ac9eb709f3a650ccc\"></a>\n\
<div class=\"memitem\">\n\
<div class=\"memproto\">\n\
      <table class=\"memname\">\n\
        <tr>\n\
          <td class=\"memname\" translate=\"no\"><a class=\"el\" translate=\"no\" href=\"#!/url=./cpp_ref/class_m_dag_path.html\">MDagPath</a> instancerPath </td>\n\
          <td>(</td>\n\
          <td class=\"paramname\"></td><td>)</td>\n\
          <td> const</td>\n\
        </tr>\n\
      </table>\n\
</div><div class=\"memdoc\">\n\
\n\
<p>Returns the full DAG path to the instancer that generated the current particle instance. </p>\n\
<p>A NULL path will be returned if there is no current instancer being iterated</p>\n\
<dl class=\"section return\"><dt>Returns</dt><dd>See description. </dd></dl>\n\
<dl class=\"section \"><div id=\"dynsection-example4\" class=\"dynheader closed\" onclick=\"return toggleVisibility(this)\" style=\"cursor:pointer;\"><dt><img id=\"dynsection-example4-trigger\" src=\"cpp_ref/closed.png\" alt=\"+\"> <b>Examples: </b></dt></div><div id=\"dynsection-example4-content\" class=\"dyncontent\" style=\"display:none;\"><dd><a class=\"el\" translate=\"no\" href=\"#!/url=./cpp_ref/instancer_list_cmd_2instancer_list_cmd_8cpp-example.html#a21\">instancerListCmd/instancerListCmd.cpp</a>.</dd></div>\n\
</dl>\n\
</div>\n\
</div>\n\
<a class=\"anchor\" id=\"affb767774efcdb59a2f2254be91963cf\"></a>\n\
<div class=\"memitem\">\n\
<div class=\"memproto\">\n\
      <table class=\"memname\">\n\
        <tr>\n\
          <td class=\"memname\" translate=\"no\"><a class=\"el\" translate=\"no\" href=\"#!/url=./cpp_ref/class_m_dag_path.html\">MDagPath</a> path </td>\n\
          <td>(</td>\n\
          <td class=\"paramname\"></td><td>)</td>\n\
          <td></td>\n\
        </tr>\n\
      </table>\n\
</div><div class=\"memdoc\">\n\
\n\
<p>Returns the replaced-particle dag-path which the iterator is currently pointing to. </p>\n\
<p>Each path is to a shape. If the particle is replaced by a shape directly then there will be only one path per particle. If a particle is replaced by a transform with many child shapes then each one of those shapes will have a path. Amongst the paths corresponding to a given particle there may be multiple paths to multiple shapes. If there is no such path, a null path will be returned.</p>\n\
<dl class=\"section return\"><dt>Returns</dt><dd>See description. </dd></dl>\n\
<dl class=\"section \"><div id=\"dynsection-example5\" class=\"dynheader closed\" onclick=\"return toggleVisibility(this)\" style=\"cursor:pointer;\"><dt><img id=\"dynsection-example5-trigger\" src=\"cpp_ref/closed.png\" alt=\"+\"> <b>Examples: </b></dt></div><div id=\"dynsection-example5-content\" class=\"dyncontent\" style=\"display:none;\"><dd><a class=\"el\" translate=\"no\" href=\"#!/url=./cpp_ref/instancer_list_cmd_2instancer_list_cmd_8cpp-example.html#a22\">instancerListCmd/instancerListCmd.cpp</a>.</dd></div>\n\
</dl>\n\
</div>\n\
</div>\n\
<a class=\"anchor\" id=\"a7dd645fc997712befd36b50a24bee5b3\"></a>\n\
<div class=\"memitem\">\n\
<div class=\"memproto\">\n\
      <table class=\"memname\">\n\
        <tr>\n\
          <td class=\"memname\" translate=\"no\"><a class=\"el\" translate=\"no\" href=\"#!/url=./cpp_ref/class_m_matrix.html\">MMatrix</a> matrix </td>\n\
          <td>(</td>\n\
          <td class=\"paramname\"></td><td>)</td>\n\
          <td></td>\n\
        </tr>\n\
      </table>\n\
</div><div class=\"memdoc\">\n\
\n\
<p>Returns the transformation matrix represented by the current path. </p>\n\
<p>If there is no such path, identity matrix will be returned.</p>\n\
<dl class=\"section return\"><dt>Returns</dt><dd>See description. </dd></dl>\n\
<dl class=\"section \"><div id=\"dynsection-example6\" class=\"dynheader closed\" onclick=\"return toggleVisibility(this)\" style=\"cursor:pointer;\"><dt><img id=\"dynsection-example6-trigger\" src=\"cpp_ref/closed.png\" alt=\"+\"> <b>Examples: </b></dt></div><div id=\"dynsection-example6-content\" class=\"dyncontent\" style=\"display:none;\"><dd><a class=\"el\" translate=\"no\" href=\"#!/url=./cpp_ref/instancer_list_cmd_2instancer_list_cmd_8cpp-example.html#a23\">instancerListCmd/instancerListCmd.cpp</a>.</dd></div>\n\
</dl>\n\
</div>\n\
</div>\n\
<a class=\"anchor\" id=\"a587f059bccf5223f41985802befcc5a3\"></a>\n\
<div class=\"memitem\">\n\
<div class=\"memproto\">\n\
      <table class=\"memname\">\n\
        <tr>\n\
          <td class=\"memname\" translate=\"no\">MUintPtrSz instancerId </td>\n\
          <td>(</td>\n\
          <td class=\"paramname\"></td><td>)</td>\n\
          <td> const</td>\n\
        </tr>\n\
      </table>\n\
</div><div class=\"memdoc\">\n\
\n\
<p>Returns a unique identifier for the current instancer. </p>\n\
<p>Collectively, this id together with the particle id and the path id uniquely identify a \"replaced particle\".</p>\n\
<dl class=\"section return\"><dt>Returns</dt><dd>See description. </dd></dl>\n\
\n\
</div>\n\
</div>\n\
<a class=\"anchor\" id=\"af860e2ed97889b3f82e52d9a3aa6757d\"></a>\n\
<div class=\"memitem\">\n\
<div class=\"memproto\">\n\
      <table class=\"memname\">\n\
        <tr>\n\
          <td class=\"memname\" translate=\"no\">unsigned int particleId </td>\n\
          <td>(</td>\n\
          <td class=\"paramname\"></td><td>)</td>\n\
          <td> const</td>\n\
        </tr>\n\
      </table>\n\
</div><div class=\"memdoc\">\n\
\n\
<p>Returns a unique identifier for the current particle. </p>\n\
<p>Collectively, this id together with the instancer id and the path id uniquely identify a \"replaced particle\".</p>\n\
<dl class=\"section return\"><dt>Returns</dt><dd>See description. </dd></dl>\n\
\n\
</div>\n\
</div>\n\
<a class=\"anchor\" id=\"a16e7932e6211b13b6ca688083ad00e46\"></a>\n\
<div class=\"memitem\">\n\
<div class=\"memproto\">\n\
      <table class=\"memname\">\n\
        <tr>\n\
          <td class=\"memname\" translate=\"no\">unsigned int pathId </td>\n\
          <td>(</td>\n\
          <td class=\"paramname\"></td><td>)</td>\n\
          <td> const</td>\n\
        </tr>\n\
      </table>\n\
</div><div class=\"memdoc\">\n\
\n\
<p>Returns a unique identifier for the current path. </p>\n\
<p>Collectively, this id together with the instancer id and the particle id uniquely identify a \"replaced particle\".</p>\n\
<dl class=\"section return\"><dt>Returns</dt><dd>See description. </dd></dl>\n\
\n\
</div>\n\
</div>\n\
<a class=\"anchor\" id=\"a774cd5d8fbebe8e7ed82a5aa587d1f04\"></a>\n\
<div class=\"memitem\">\n\
<div class=\"memproto\">\n\
<table class=\"mlabels\">\n\
  <tr>\n\
  <td class=\"mlabels-left\">\n\
      <table class=\"memname\">\n\
        <tr>\n\
          <td class=\"memname\" translate=\"no\">const char * className </td>\n\
          <td>(</td>\n\
          <td class=\"paramname\"></td><td>)</td>\n\
          <td></td>\n\
        </tr>\n\
      </table>\n\
  </td>\n\
  <td class=\"mlabels-right\">\n\
<span class=\"mlabels\"><span class=\"mlabel\">static</span></span>  </td>\n\
  </tr>\n\
</table>\n\
</div><div class=\"memdoc\">\n\
\n\
<p>Returns the name of this class. </p>\n\
<dl class=\"section return\"><dt>Returns</dt><dd>The name of this class. </dd></dl>\n\
\n\
</div>\n\
</div>\n\
<hr>The documentation for this class was generated from the following files:<ul>\n\
<li>MItInstancer.h</li>\n\
<li>MItInstancer.cpp</li>\n\
</ul>\n\
</div><!-- contents -->\n\
</div><!-- doc-content -->\n\
          <div class=\"footer-block\"><a href=\"../html/ac.cmtdialog.htm\" class=\"comments-anchor\" target=\"_blank\"><span class=\"comments-link\">Please send us your comment about this page</span></a></div><br></div>\n\
   </div></body>\n\
</html>\n\
";