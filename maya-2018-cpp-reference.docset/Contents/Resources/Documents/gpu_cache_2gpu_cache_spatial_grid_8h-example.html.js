var topic = "<!-- saved from url=(0024)http://docs.autodesk.com -->\n\
<html>\n\
   <head><script src=\"../scripts/yepnope.1.5.4-min.js\" type=\"text/javascript\"></script><script src=\"../scripts/lib/jquery-1.11.1.min.js\" type=\"text/javascript\"></script><meta http-equiv=\"Content-Type\" content=\"text/html; charset=UTF-8\"><meta name=\"product\" content=\"MAYAUL\"><meta name=\"release\" content=\"2018\"><meta name=\"book\" content=\"Developer\"><meta name=\"created\" content=\"2017-06-22\"><meta name=\"topicid\" content=\"GUID-02DEF634-1E7B-48C6-8ACD-2C934CA97887\"><meta name=\"topic-type\" content=\"concept\">\n\
      <title>gpuCache/gpuCacheSpatialGrid.h</title>\n\
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
    cpp_ref_adsk_ref_toc.initNavTree(\'gpu_cache_2gpu_cache_spatial_grid_8h-example.html\', tocPrefix);\n\
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
            <h1>gpuCache/gpuCacheSpatialGrid.h</h1>\n\
         </div>\n\
\n\
    <div id=\"top\"><!-- Generated by Doxygen 1.8.10 -->\n\
  <div id=\"navrow1\" class=\"tabs\">\n\
    <ul class=\"tablist\">\n\
      <li><a href=\"#!/url=./cpp_ref/index.html\"><span>Main&#160;Page</span></a></li>\n\
      <li><a href=\"#!/url=./cpp_ref/pages.html\"><span>Topics</span></a></li>\n\
      <li><a href=\"#!/url=./cpp_ref/modules.html\"><span>Modules</span></a></li>\n\
      <li><a href=\"#!/url=./cpp_ref/namespaces.html\"><span>Namespaces</span></a></li>\n\
      <li><a href=\"#!/url=./cpp_ref/annotated.html\"><span>Classes</span></a></li>\n\
      <li><a href=\"#!/url=./cpp_ref/examples.html\"><span>Examples</span></a></li>\n\
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
  <div class=\"headertitle\">\n\
<div class=\"title\">gpuCache/gpuCacheSpatialGrid.h</div>  </div>\n\
</div><!--header-->\n\
<div class=\"contents\">\n\
<div class=\"fragment\"><div class=\"line\"><span class=\"preprocessor\">#ifndef __SpatialGrid_h </span></div>\n\
<div class=\"line\"><span class=\"preprocessor\">#define __SpatialGrid_h </span></div>\n\
<div class=\"line\"><span class=\"comment\">//-----------------------------------------------------------------------------</span></div>\n\
<div class=\"line\"><span class=\"comment\">//</span></div>\n\
<div class=\"line\"><span class=\"comment\">//  Class: SpatialGrid</span></div>\n\
<div class=\"line\"><span class=\"comment\">//  </span></div>\n\
<div class=\"line\"><span class=\"comment\">//  Purpose: </span></div>\n\
<div class=\"line\"><span class=\"comment\">//           This class just provides a bunch of grid cells containing</span></div>\n\
<div class=\"line\"><span class=\"comment\">//           lists of index data, and some indexing functions to find</span></div>\n\
<div class=\"line\"><span class=\"comment\">//           grid cells corresponding to bounding boxes in space.  The</span></div>\n\
<div class=\"line\"><span class=\"comment\">//           voxel grid is axis-aligned.</span></div>\n\
<div class=\"line\"><span class=\"comment\">//</span></div>\n\
<div class=\"line\"><span class=\"comment\">//           The SpatialGridWalker iterator knows how to walk through</span></div>\n\
<div class=\"line\"><span class=\"comment\">//           the grid cells that are intersected by a ray.</span></div>\n\
<div class=\"line\"><span class=\"comment\">//</span></div>\n\
<div class=\"line\"><span class=\"comment\">//           The voxels are organized into a flat array, in X-Y-Z order</span></div>\n\
<div class=\"line\"><span class=\"comment\">//           (moving linearly through array, X coordinate grows fastest,</span></div>\n\
<div class=\"line\"><span class=\"comment\">//           then Y, then Z).</span></div>\n\
<div class=\"line\"><span class=\"comment\">// </span></div>\n\
<div class=\"line\"><span class=\"comment\">//           Data in the spatial grid is blind, i.e. the underlying</span></div>\n\
<div class=\"line\"><span class=\"comment\">//           class does not understand anything about the data (other</span></div>\n\
<div class=\"line\"><span class=\"comment\">//           than it is a uint). The ideal way to store data in</span></div>\n\
<div class=\"line\"><span class=\"comment\">//           the table would be to create your own array of data then</span></div>\n\
<div class=\"line\"><span class=\"comment\">//           use the indices of that array to map the contents of the</span></div>\n\
<div class=\"line\"><span class=\"comment\">//           grid to your domain specific data.</span></div>\n\
<div class=\"line\"><span class=\"comment\">// </span></div>\n\
<div class=\"line\"><span class=\"comment\">//</span></div>\n\
<div class=\"line\"><span class=\"comment\">//-----------------------------------------------------------------------------</span></div>\n\
<div class=\"line\"></div>\n\
<div class=\"line\"><span class=\"preprocessor\">#include &lt;maya/MBoundingBox.h&gt;</span></div>\n\
<div class=\"line\"><span class=\"preprocessor\">#include &lt;maya/MIntArray.h&gt;</span></div>\n\
<div class=\"line\"><span class=\"preprocessor\">#include &lt;maya/MUintArray.h&gt;</span></div>\n\
<div class=\"line\"></div>\n\
<div class=\"line\"><span class=\"preprocessor\">#include &lt;vector&gt;</span></div>\n\
<div class=\"line\"></div>\n\
<div class=\"line\"><span class=\"comment\">// Class represents a 3-integer index to the spatial grid.</span></div>\n\
<div class=\"line\"><span class=\"comment\">// Contains a comparison value to be used in </span></div>\n\
<div class=\"line\"><span class=\"comment\">// sorting grid points (used along with std::set)</span></div>\n\
<div class=\"line\"><span class=\"keyword\">template</span> &lt;<span class=\"keyword\">class</span> T&gt;</div>\n\
<div class=\"line\"><span class=\"keyword\">class </span>gridPoint3 {</div>\n\
<div class=\"line\"><span class=\"keyword\">public</span>:</div>\n\
<div class=\"line\">    gridPoint3(){}</div>\n\
<div class=\"line\">    gridPoint3(T _1, T _2, T _3){</div>\n\
<div class=\"line\">        fData[0] = _1;</div>\n\
<div class=\"line\">        fData[1] = _2;</div>\n\
<div class=\"line\">        fData[2] = _3;</div>\n\
<div class=\"line\">        fCompareVal = fData[0]+3083*fData[1]+7919*fData[2]; <span class=\"comment\">//using two prime numbers</span></div>\n\
<div class=\"line\">    }</div>\n\
<div class=\"line\"></div>\n\
<div class=\"line\">    <span class=\"keyword\">operator</span> T *(){<span class=\"keywordflow\">return</span> fData;}</div>\n\
<div class=\"line\">    <span class=\"keyword\">operator</span> <span class=\"keyword\">const</span> T *() <span class=\"keyword\">const</span>{<span class=\"keywordflow\">return</span> fData;}</div>\n\
<div class=\"line\">    <span class=\"keywordtype\">double</span> compareVal()<span class=\"keyword\">const </span>{ <span class=\"keywordflow\">return</span> fCompareVal; }</div>\n\
<div class=\"line\">    </div>\n\
<div class=\"line\">    gridPoint3 operator+ (<span class=\"keyword\">const</span> gridPoint3&amp; x)<span class=\"keyword\"> const</span>{gridPoint3 y(x); y.fData[0]+=fData[0]; y.fData[1]+=fData[1]; y.fData[2]+=fData[2]; <span class=\"keywordflow\">return</span> y; }</div>\n\
<div class=\"line\">    gridPoint3 operator+ (<span class=\"keyword\">const</span> T&amp; x)<span class=\"keyword\"> const</span>{ gridPoint3 y(*<span class=\"keyword\">this</span>); y.fData[0]+=x; y.fData[1]+=x; y.fData[2]+=x; <span class=\"keywordflow\">return</span> y; }</div>\n\
<div class=\"line\">    gridPoint3 operator- (<span class=\"keyword\">const</span> T&amp; x)<span class=\"keyword\"> const</span>{ gridPoint3 y(*<span class=\"keyword\">this</span>); y.fData[0]-=x; y.fData[1]-=x; y.fData[2]-=x; <span class=\"keywordflow\">return</span> y; }</div>\n\
<div class=\"line\">    gridPoint3 operator* (<span class=\"keyword\">const</span> gridPoint3&amp; x)<span class=\"keyword\"> const</span>{gridPoint3 y(x); y.fData[0]*=fData[0]; y.fData[1]*=fData[1]; y.fData[2]*=fData[2]; <span class=\"keywordflow\">return</span> y;}</div>\n\
<div class=\"line\">    gridPoint3 operator* (<span class=\"keyword\">const</span> T&amp; x)<span class=\"keyword\">  const</span>{ gridPoint3 y(*<span class=\"keyword\">this</span>); y.fData[0]*=x; y.fData[1]*=x; y.fData[2]*=x; <span class=\"keywordflow\">return</span> y; }</div>\n\
<div class=\"line\"></div>\n\
<div class=\"line\">    gridPoint3&amp; operator+= (<span class=\"keyword\">const</span> gridPoint3&amp; x){ fData[0]+=x[0]; fData[1]+=x[1]; fData[2]+=x[2]; <span class=\"keywordflow\">return</span> *<span class=\"keyword\">this</span>;}</div>\n\
<div class=\"line\">    gridPoint3&amp; operator*= (<span class=\"keyword\">const</span> gridPoint3&amp; x){fData[0]*=x[0]; fData[1]*=x[1]; fData[2]*=x[2]; <span class=\"keywordflow\">return</span> *<span class=\"keyword\">this</span>;}</div>\n\
<div class=\"line\">    gridPoint3&amp; operator*= (<span class=\"keyword\">const</span> T&amp; x){fData[0]*=x;    fData[1]*=x;    fData[2]*=x;    <span class=\"keywordflow\">return</span> *<span class=\"keyword\">this</span>;}</div>\n\
<div class=\"line\"></div>\n\
<div class=\"line\">    <span class=\"keywordtype\">bool</span> operator&lt; (<span class=\"keyword\">const</span> gridPoint3&amp; y)<span class=\"keyword\"> const</span>{</div>\n\
<div class=\"line\">        <span class=\"keywordflow\">return</span> fCompareVal &lt; y.compareVal();</div>\n\
<div class=\"line\">    }</div>\n\
<div class=\"line\"></div>\n\
<div class=\"line\"><span class=\"keyword\">private</span>:</div>\n\
<div class=\"line\">    T fData[3];</div>\n\
<div class=\"line\">    <span class=\"keywordtype\">double</span> fCompareVal;</div>\n\
<div class=\"line\">};</div>\n\
<div class=\"line\"></div>\n\
<div class=\"line\"><span class=\"keyword\">class </span>SpatialGridWalker;</div>\n\
<div class=\"line\"></div>\n\
<div class=\"line\"><span class=\"keyword\">class </span>SpatialGrid { </div>\n\
<div class=\"line\"><span class=\"keyword\">public</span>:</div>\n\
<div class=\"line\">    <span class=\"comment\">//  constructor specifies region of space to be gridded, and number of</span></div>\n\
<div class=\"line\">    <span class=\"comment\">//  grid cells along each dimension</span></div>\n\
<div class=\"line\">    <span class=\"comment\">//</span></div>\n\
<div class=\"line\">    SpatialGrid( <span class=\"keyword\">const</span> <a name=\"_a0\"></a><a class=\"code\" href=\"#!/url=./cpp_ref/class_m_bounding_box.html\">MBoundingBox</a>&amp; bound, <span class=\"keyword\">const</span> gridPoint3&lt;int&gt;&amp; numVoxels );</div>\n\
<div class=\"line\"></div>\n\
<div class=\"line\">    <span class=\"keyword\">virtual</span> ~SpatialGrid();</div>\n\
<div class=\"line\"></div>\n\
<div class=\"line\">    <span class=\"comment\">//  retrieves an iterator that walks through grid cells intersected</span></div>\n\
<div class=\"line\">    <span class=\"comment\">//  by the ray from &quot;origin&quot; along &quot;direction&quot;</span></div>\n\
<div class=\"line\">    <span class=\"comment\">//</span></div>\n\
<div class=\"line\">    SpatialGridWalker getRayIterator( <span class=\"keyword\">const</span> <a name=\"_a1\"></a><a class=\"code\" href=\"#!/url=./cpp_ref/class_m_point.html\">MPoint</a>&amp; origin,</div>\n\
<div class=\"line\">        <span class=\"keyword\">const</span> <a name=\"_a2\"></a><a class=\"code\" href=\"#!/url=./cpp_ref/class_m_vector.html\">MVector</a>&amp; direction );</div>\n\
<div class=\"line\"></div>\n\
<div class=\"line\">    <span class=\"comment\">//  computes x,y,z voxel coords for given 3d point (assumed to be </span></div>\n\
<div class=\"line\">    <span class=\"comment\">//  inside bounding box).  Optionally returns residual, which is</span></div>\n\
<div class=\"line\">    <span class=\"comment\">//  distances from point to next-lowest grid lines in x, y, z</span></div>\n\
<div class=\"line\">    <span class=\"comment\">//</span></div>\n\
<div class=\"line\">    <span class=\"keywordtype\">void</span> getVoxelCoords( <span class=\"keyword\">const</span> <a class=\"code\" href=\"#!/url=./cpp_ref/class_m_point.html\">MPoint</a>&amp; point, </div>\n\
<div class=\"line\">        gridPoint3&lt;int&gt;&amp; coords, </div>\n\
<div class=\"line\">        <a class=\"code\" href=\"#!/url=./cpp_ref/class_m_point.html\">MPoint</a> *residual = NULL ) <span class=\"keyword\">const</span>;</div>\n\
<div class=\"line\"></div>\n\
<div class=\"line\">    <span class=\"keywordtype\">void</span> getClosestVoxelCoords( <span class=\"keyword\">const</span> <a class=\"code\" href=\"#!/url=./cpp_ref/class_m_point.html\">MPoint</a>&amp; point, </div>\n\
<div class=\"line\">        gridPoint3&lt;int&gt;&amp; coords) <span class=\"keyword\">const</span>;</div>\n\
<div class=\"line\"></div>\n\
<div class=\"line\">    <span class=\"keywordtype\">bool</span> isValidVoxel(gridPoint3&lt;int&gt;&amp; vox);</div>\n\
<div class=\"line\"></div>\n\
<div class=\"line\">    <span class=\"comment\">//  returns x, y, z index ranges of voxels at least partially</span></div>\n\
<div class=\"line\">    <span class=\"comment\">//  intersected by given bounding box</span></div>\n\
<div class=\"line\">    <span class=\"comment\">//</span></div>\n\
<div class=\"line\">    <span class=\"keywordtype\">void</span> getVoxelRange( <span class=\"keyword\">const</span> <a class=\"code\" href=\"#!/url=./cpp_ref/class_m_bounding_box.html\">MBoundingBox</a>&amp; box, </div>\n\
<div class=\"line\">        gridPoint3&lt;int&gt;&amp; minIndices, </div>\n\
<div class=\"line\">        gridPoint3&lt;int&gt;&amp; maxIndices ) <span class=\"keyword\">const</span>;</div>\n\
<div class=\"line\"></div>\n\
<div class=\"line\">    <span class=\"comment\">//  gets triangle list for given voxel</span></div>\n\
<div class=\"line\">    <span class=\"comment\">//                      </span></div>\n\
<div class=\"line\">    <a name=\"_a3\"></a><a class=\"code\" href=\"#!/url=./cpp_ref/class_m_uint_array.html\">MUintArray</a> *            getVoxelContents( <span class=\"keyword\">const</span> gridPoint3&lt;int&gt;&amp; index );</div>\n\
<div class=\"line\"></div>\n\
<div class=\"line\">    <span class=\"comment\">//  accessors useful for debugging output</span></div>\n\
<div class=\"line\">    <span class=\"comment\">//</span></div>\n\
<div class=\"line\">    <span class=\"keyword\">const</span> gridPoint3&lt;int&gt;&amp;          getNumVoxels();</div>\n\
<div class=\"line\">    <span class=\"keyword\">virtual</span> <span class=\"keywordtype\">float</span>           getMemoryFootprint();</div>\n\
<div class=\"line\"></div>\n\
<div class=\"line\">    <a class=\"code\" href=\"#!/url=./cpp_ref/class_m_bounding_box.html\">MBoundingBox</a> getBounds(){ <span class=\"keywordflow\">return</span> fBounds;}</div>\n\
<div class=\"line\">    <span class=\"comment\">//  iterator gets internal access</span></div>\n\
<div class=\"line\">    <span class=\"comment\">//</span></div>\n\
<div class=\"line\">    <span class=\"keyword\">friend</span> <span class=\"keyword\">class </span>SpatialGridWalker; </div>\n\
<div class=\"line\"></div>\n\
<div class=\"line\"><span class=\"keyword\">private</span>:</div>\n\
<div class=\"line\">    <span class=\"comment\">//  accessors for bounding box, bounding box corners</span></div>\n\
<div class=\"line\">    <span class=\"comment\">//</span></div>\n\
<div class=\"line\">    <span class=\"keyword\">const</span> <a class=\"code\" href=\"#!/url=./cpp_ref/class_m_bounding_box.html\">MBoundingBox</a>&amp; bounds();</div>\n\
<div class=\"line\">    <span class=\"keywordtype\">void</span> bounds( <a class=\"code\" href=\"#!/url=./cpp_ref/class_m_point.html\">MPoint</a>&amp; lowCorner, </div>\n\
<div class=\"line\">        <a class=\"code\" href=\"#!/url=./cpp_ref/class_m_point.html\">MPoint</a>&amp; highCorner );</div>\n\
<div class=\"line\"></div>\n\
<div class=\"line\">    <span class=\"comment\">//  converts from x,y,z index to linear index into </span></div>\n\
<div class=\"line\">    <span class=\"comment\">//  voxel array</span></div>\n\
<div class=\"line\">    <span class=\"comment\">//  </span></div>\n\
<div class=\"line\">    <span class=\"keywordtype\">int</span> getLinearVoxelIndex( <span class=\"keyword\">const</span> gridPoint3&lt;int&gt;&amp; index ) <span class=\"keyword\">const</span>;</div>\n\
<div class=\"line\"></div>\n\
<div class=\"line\">    <span class=\"comment\">//  bounding box for the entire grid</span></div>\n\
<div class=\"line\">    <span class=\"comment\">//</span></div>\n\
<div class=\"line\">    <a class=\"code\" href=\"#!/url=./cpp_ref/class_m_bounding_box.html\">MBoundingBox</a>                fBounds;</div>\n\
<div class=\"line\"></div>\n\
<div class=\"line\">    <span class=\"comment\">//  number of grid cells along each axis</span></div>\n\
<div class=\"line\">    <span class=\"comment\">//</span></div>\n\
<div class=\"line\">    gridPoint3&lt;int&gt;                     fNumVoxels;</div>\n\
<div class=\"line\"></div>\n\
<div class=\"line\">    <span class=\"comment\">//  dimensions of each voxel in x, y, z</span></div>\n\
<div class=\"line\">    <span class=\"comment\">//</span></div>\n\
<div class=\"line\">    gridPoint3&lt;float&gt;                       fVoxelSizes;</div>\n\
<div class=\"line\"></div>\n\
<div class=\"line\">    <span class=\"comment\">//  The actual voxel grid contents, one array entry for each voxel.</span></div>\n\
<div class=\"line\">    <span class=\"comment\">//  Each voxel stores a pointer to a index array, pointers are</span></div>\n\
<div class=\"line\">    <span class=\"comment\">//  all NULL originally. The index array is intended to be data blind.</span></div>\n\
<div class=\"line\">    <span class=\"comment\">//  That is, we don&#39;t know what the indices they refer to.  </span></div>\n\
<div class=\"line\">    <span class=\"comment\">//</span></div>\n\
<div class=\"line\">    std::vector&lt;MUintArray*&gt;        fVoxels;</div>\n\
<div class=\"line\"></div>\n\
<div class=\"line\">    <span class=\"keywordtype\">void</span> expandBBoxByPercentage( </div>\n\
<div class=\"line\">        <a class=\"code\" href=\"#!/url=./cpp_ref/class_m_bounding_box.html\">MBoundingBox</a>&amp; bbox,</div>\n\
<div class=\"line\">        <span class=\"keywordtype\">double</span> percentage,</div>\n\
<div class=\"line\">        <span class=\"keywordtype\">double</span> min[3] </div>\n\
<div class=\"line\">    );</div>\n\
<div class=\"line\">    </div>\n\
<div class=\"line\">};</div>\n\
<div class=\"line\"><span class=\"preprocessor\">#endif</span></div>\n\
</div><!-- fragment --> </div><!-- contents -->\n\
</div><!-- doc-content -->\n\
          <div class=\"footer-block\"><a href=\"../html/ac.cmtdialog.htm\" class=\"comments-anchor\" target=\"_blank\"><span class=\"comments-link\">Please send us your comment about this page</span></a></div></div>\n\
   </div></body>\n\
</html>\n\
";