var topic = "<!-- saved from url=(0024)http://docs.autodesk.com -->\n\
<html>\n\
   <head><script src=\"../scripts/yepnope.1.5.4-min.js\" type=\"text/javascript\"></script><script src=\"../scripts/lib/jquery-1.11.1.min.js\" type=\"text/javascript\"></script>\n\
      <title>C++ API Reference: gpuCache/gpuCacheVBOProxy.h</title>\n\
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
    cpp_ref_adsk_ref_toc.initNavTree(\'gpu_cache_2gpu_cache_v_b_o_proxy_8h-example.html\', tocPrefix);\n\
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
            <h1>C++ API Reference: gpuCache/gpuCacheVBOProxy.h</h1>\n\
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
<div class=\"title\">gpuCache/gpuCacheVBOProxy.h</div>  </div>\n\
</div><!--header-->\n\
<div class=\"contents\">\n\
<div class=\"fragment\"><div class=\"line\"><span class=\"preprocessor\">#ifndef _gpuCacheVBOProxy_h_</span></div>\n\
<div class=\"line\"><span class=\"preprocessor\">#define _gpuCacheVBOProxy_h_</span></div>\n\
<div class=\"line\"></div>\n\
<div class=\"line\"><span class=\"comment\">//-</span></div>\n\
<div class=\"line\"><span class=\"comment\">//**************************************************************************/</span></div>\n\
<div class=\"line\"><span class=\"comment\">// Copyright 2015 Autodesk, Inc.  All rights reserved.</span></div>\n\
<div class=\"line\"><span class=\"comment\">//</span></div>\n\
<div class=\"line\"><span class=\"comment\">// Use of this software is subject to the terms of the Autodesk </span></div>\n\
<div class=\"line\"><span class=\"comment\">// license agreement provided at the time of installation or download, </span></div>\n\
<div class=\"line\"><span class=\"comment\">// or which otherwise accompanies this software in either electronic </span></div>\n\
<div class=\"line\"><span class=\"comment\">// or hard copy form.</span></div>\n\
<div class=\"line\"><span class=\"comment\">//**************************************************************************/</span></div>\n\
<div class=\"line\"><span class=\"comment\">//+</span></div>\n\
<div class=\"line\"></div>\n\
<div class=\"line\"><span class=\"preprocessor\">#include &quot;gpuCacheSample.h&quot;</span></div>\n\
<div class=\"line\"></div>\n\
<div class=\"line\"><span class=\"preprocessor\">#include &lt;maya/MGLdefinitions.h&gt;</span></div>\n\
<div class=\"line\"></div>\n\
<div class=\"line\"><span class=\"preprocessor\">#include &lt;memory&gt;</span></div>\n\
<div class=\"line\"></div>\n\
<div class=\"line\"></div>\n\
<div class=\"line\"><span class=\"keyword\">namespace </span>GPUCache {</div>\n\
<div class=\"line\"></div>\n\
<div class=\"line\"><span class=\"comment\">//</span></div>\n\
<div class=\"line\"><span class=\"comment\">// VBOBuffer</span></div>\n\
<div class=\"line\"><span class=\"comment\">//</span></div>\n\
<div class=\"line\"><span class=\"comment\">// This class represents a VBO buffer.</span></div>\n\
<div class=\"line\"><span class=\"comment\">// All functions assume a valid OpenGL context.</span></div>\n\
<div class=\"line\"><span class=\"comment\">//</span></div>\n\
<div class=\"line\"><span class=\"comment\"></span></div>\n\
<div class=\"line\"><span class=\"keyword\">class </span>VBOBuffer</div>\n\
<div class=\"line\">{</div>\n\
<div class=\"line\"><span class=\"keyword\">public</span>:</div>\n\
<div class=\"line\"></div>\n\
<div class=\"line\">    <span class=\"comment\">/*----- typedefs and enumerations -----*/</span></div>\n\
<div class=\"line\"></div>\n\
<div class=\"line\">    <span class=\"keyword\">typedef</span> ArrayBase::Key        Key;</div>\n\
<div class=\"line\">    <span class=\"keyword\">typedef</span> ArrayBase::KeyHash    KeyHash;</div>\n\
<div class=\"line\">    <span class=\"keyword\">typedef</span> ArrayBase::KeyEqualTo KeyEqualTo;</div>\n\
<div class=\"line\"></div>\n\
<div class=\"line\">    <span class=\"keyword\">enum</span> BufferType {</div>\n\
<div class=\"line\">        kIndexBufferType,</div>\n\
<div class=\"line\">        kVertexBufferType,</div>\n\
<div class=\"line\">        kFlippedNormalBufferType,</div>\n\
<div class=\"line\">        kNbBufferType</div>\n\
<div class=\"line\">    };</div>\n\
<div class=\"line\">    </div>\n\
<div class=\"line\">    <span class=\"comment\">/*----- static member functions -----*/</span></div>\n\
<div class=\"line\">    </div>\n\
<div class=\"line\">    <span class=\"comment\">// Allocate a VBO and upload the index buffer data to the VBO.</span></div>\n\
<div class=\"line\">    <span class=\"comment\">//</span></div>\n\
<div class=\"line\">    <span class=\"comment\">// A temporary VBO will be immediately discarded when no longer</span></div>\n\
<div class=\"line\">    <span class=\"comment\">// referenced. This is mainly used when running low on video</span></div>\n\
<div class=\"line\">    <span class=\"comment\">// memory and it is no longer possible to keep VBO loaded from</span></div>\n\
<div class=\"line\">    <span class=\"comment\">// frame to frame.</span></div>\n\
<div class=\"line\">    <span class=\"keyword\">static</span> std::shared_ptr&lt;const VBOBuffer&gt; create(</div>\n\
<div class=\"line\">        <span class=\"keyword\">const</span> std::shared_ptr&lt;const IndexBuffer&gt;&amp; buffer,</div>\n\
<div class=\"line\">        <span class=\"keyword\">const</span> <span class=\"keywordtype\">bool</span> isTemporary = <span class=\"keyword\">false</span>);</div>\n\
<div class=\"line\"></div>\n\
<div class=\"line\">    <span class=\"comment\">// Allocate a VBO and upload the vertex buffer data to the VBO</span></div>\n\
<div class=\"line\">    <span class=\"keyword\">static</span> std::shared_ptr&lt;const VBOBuffer&gt; create(</div>\n\
<div class=\"line\">        <span class=\"keyword\">const</span> std::shared_ptr&lt;const VertexBuffer&gt;&amp; buffer,</div>\n\
<div class=\"line\">        <span class=\"keyword\">const</span> <span class=\"keywordtype\">bool</span> isTemporary = <span class=\"keyword\">false</span>);</div>\n\
<div class=\"line\"></div>\n\
<div class=\"line\">    <span class=\"comment\">// Allocate a VBO and initialize it by flipping the normals of the</span></div>\n\
<div class=\"line\">    <span class=\"comment\">// passed VBO.</span></div>\n\
<div class=\"line\">    <span class=\"keyword\">static</span> std::shared_ptr&lt;const VBOBuffer&gt; createFlippedNormals(</div>\n\
<div class=\"line\">        <span class=\"keyword\">const</span> std::shared_ptr&lt;const VertexBuffer&gt;&amp; buffer,</div>\n\
<div class=\"line\">        <span class=\"keyword\">const</span> <span class=\"keywordtype\">bool</span> isTemporary = <span class=\"keyword\">false</span>);</div>\n\
<div class=\"line\"></div>\n\
<div class=\"line\">    </div>\n\
<div class=\"line\">    <span class=\"comment\">// Lookup to see if VBOBuffer for the given buffer already exists.</span></div>\n\
<div class=\"line\">    <span class=\"keyword\">static</span> std::shared_ptr&lt;const VBOBuffer&gt; lookup(</div>\n\
<div class=\"line\">        <span class=\"keyword\">const</span> std::shared_ptr&lt;const IndexBuffer&gt;&amp; buffer);</div>\n\
<div class=\"line\"></div>\n\
<div class=\"line\">    <span class=\"comment\">// Lookup to see if VBOBuffer for the given buffer already exists.</span></div>\n\
<div class=\"line\">    <span class=\"keyword\">static</span> std::shared_ptr&lt;const VBOBuffer&gt; lookup(</div>\n\
<div class=\"line\">        <span class=\"keyword\">const</span> std::shared_ptr&lt;const VertexBuffer&gt;&amp; buffer);</div>\n\
<div class=\"line\"></div>\n\
<div class=\"line\">    <span class=\"comment\">// Lookup to see if VBOBuffer for the given buffer already exists.</span></div>\n\
<div class=\"line\">    <span class=\"keyword\">static</span> std::shared_ptr&lt;const VBOBuffer&gt; lookupFlippedNormals(</div>\n\
<div class=\"line\">        <span class=\"keyword\">const</span> std::shared_ptr&lt;const VertexBuffer&gt;&amp; buffer);</div>\n\
<div class=\"line\"></div>\n\
<div class=\"line\">    </div>\n\
<div class=\"line\">    <span class=\"comment\">// Total size of all the VBOs currently allocated</span></div>\n\
<div class=\"line\">    <span class=\"keyword\">static</span> <span class=\"keywordtype\">size_t</span> nbAllocatedBytes();</div>\n\
<div class=\"line\">    <span class=\"keyword\">static</span> <span class=\"keywordtype\">size_t</span> nbIndexAllocatedBytes();</div>\n\
<div class=\"line\">    <span class=\"keyword\">static</span> <span class=\"keywordtype\">size_t</span> nbVertexAllocatedBytes();</div>\n\
<div class=\"line\"></div>\n\
<div class=\"line\">    <span class=\"comment\">// Number of VBOs currently allocated</span></div>\n\
<div class=\"line\">    <span class=\"keyword\">static</span> <span class=\"keywordtype\">size_t</span> nbAllocated();</div>\n\
<div class=\"line\">    <span class=\"keyword\">static</span> <span class=\"keywordtype\">size_t</span> nbIndexAllocated();</div>\n\
<div class=\"line\">    <span class=\"keyword\">static</span> <span class=\"keywordtype\">size_t</span> nbVertexAllocated();</div>\n\
<div class=\"line\"></div>\n\
<div class=\"line\">    <span class=\"comment\">// Statistics about the VBO operations that have occurred since</span></div>\n\
<div class=\"line\">    <span class=\"comment\">// the plug-in was loaded.</span></div>\n\
<div class=\"line\">    <span class=\"keyword\">static</span> <span class=\"keywordtype\">size_t</span> nbUploaded();</div>\n\
<div class=\"line\">    <span class=\"keyword\">static</span> <span class=\"keywordtype\">size_t</span> nbUploadedBytes();</div>\n\
<div class=\"line\">    <span class=\"keyword\">static</span> <span class=\"keywordtype\">size_t</span> nbEvicted();</div>\n\
<div class=\"line\">    <span class=\"keyword\">static</span> <span class=\"keywordtype\">size_t</span> nbEvictedBytes();</div>\n\
<div class=\"line\"></div>\n\
<div class=\"line\">    <span class=\"comment\">// Flush all VBO buffers.</span></div>\n\
<div class=\"line\">    <span class=\"keyword\">static</span> <span class=\"keywordtype\">void</span> clear();</div>\n\
<div class=\"line\"></div>\n\
<div class=\"line\">    <span class=\"comment\">// Tell the registry that we are about to start drawing a new</span></div>\n\
<div class=\"line\">    <span class=\"comment\">// frame. This is used as hint to mark some VBOs as potential</span></div>\n\
<div class=\"line\">    <span class=\"comment\">// candidates for eviction. </span></div>\n\
<div class=\"line\">    <span class=\"keyword\">static</span> <span class=\"keywordtype\">void</span> nextRefresh();</div>\n\
<div class=\"line\"></div>\n\
<div class=\"line\">    <span class=\"comment\">/*----- member functions -----*/</span></div>\n\
<div class=\"line\"></div>\n\
<div class=\"line\">    <span class=\"comment\">// Free the VBO</span></div>\n\
<div class=\"line\">    <span class=\"keyword\">virtual</span> ~VBOBuffer();</div>\n\
<div class=\"line\"></div>\n\
<div class=\"line\">    <span class=\"comment\">// The buffer type.</span></div>\n\
<div class=\"line\">    BufferType bufferType()<span class=\"keyword\"> const </span>{ <span class=\"keywordflow\">return</span> fBufferType; }</div>\n\
<div class=\"line\"></div>\n\
<div class=\"line\">    <span class=\"comment\">// The key used to lookup the buffer in maps.</span></div>\n\
<div class=\"line\">    <span class=\"keyword\">const</span> Key&amp; key()<span class=\"keyword\"> const </span>{ <span class=\"keywordflow\">return</span> fKey; }</div>\n\
<div class=\"line\"></div>\n\
<div class=\"line\">    <span class=\"comment\">// OpenGL VBO handle</span></div>\n\
<div class=\"line\">    MGLuint name()<span class=\"keyword\"> const </span>{ <span class=\"keywordflow\">return</span> fVBOName; }</div>\n\
<div class=\"line\"></div>\n\
<div class=\"line\">    </div>\n\
<div class=\"line\"><span class=\"keyword\">private</span>:</div>\n\
<div class=\"line\"></div>\n\
<div class=\"line\">    <span class=\"comment\">/*----- member functions -----*/</span></div>\n\
<div class=\"line\">    </div>\n\
<div class=\"line\">    <span class=\"keyword\">struct </span>MakeSharedEnabler;</div>\n\
<div class=\"line\"></div>\n\
<div class=\"line\">    <span class=\"comment\">// Construct the VBO Buffer with a memory address and size </span></div>\n\
<div class=\"line\">    VBOBuffer(BufferType bufferType, <span class=\"keyword\">const</span> Key&amp; key, <span class=\"keyword\">const</span> <span class=\"keywordtype\">void</span>* buffer);</div>\n\
<div class=\"line\"></div>\n\
<div class=\"line\">    <span class=\"comment\">// Construct the VBO Buffer with a VBO handle and  size</span></div>\n\
<div class=\"line\">    VBOBuffer(BufferType bufferType, <span class=\"keyword\">const</span> Key&amp; key, MGLuint vboName);</div>\n\
<div class=\"line\"></div>\n\
<div class=\"line\">    <span class=\"comment\">// Forbidden and not implemented.</span></div>\n\
<div class=\"line\">    VBOBuffer(<span class=\"keyword\">const</span> VBOBuffer&amp;);</div>\n\
<div class=\"line\">    <span class=\"keyword\">const</span> VBOBuffer&amp; operator=(<span class=\"keyword\">const</span> VBOBuffer&amp;);</div>\n\
<div class=\"line\"></div>\n\
<div class=\"line\">    <span class=\"comment\">/*----- static data members -----*/</span></div>\n\
<div class=\"line\">    </div>\n\
<div class=\"line\">    <span class=\"comment\">// This is used to limit the size of VBOs used in VP1.0 and in</span></div>\n\
<div class=\"line\">    <span class=\"comment\">// VP2.0 when using the MPxDrawOverride API.  The display driver</span></div>\n\
<div class=\"line\">    <span class=\"comment\">// will start to use system memory when the graphic card&#39;s video</span></div>\n\
<div class=\"line\">    <span class=\"comment\">// memory is used up.</span></div>\n\
<div class=\"line\">    <span class=\"keyword\">static</span> <span class=\"keywordtype\">size_t</span> fsTotalVBOSize;</div>\n\
<div class=\"line\"></div>\n\
<div class=\"line\">    <span class=\"comment\">// This is used to limit the number of VBOs used in VP1.0 and in</span></div>\n\
<div class=\"line\">    <span class=\"comment\">// VP2.0 when using the MPxDrawOverride API. Some display drivers</span></div>\n\
<div class=\"line\">    <span class=\"comment\">// behaves badly when too many VBOs are allocated.</span></div>\n\
<div class=\"line\">    <span class=\"keyword\">static</span> <span class=\"keywordtype\">size_t</span> fsNbAllocated;</div>\n\
<div class=\"line\"></div>\n\
<div class=\"line\">    <span class=\"comment\">// Statistics.</span></div>\n\
<div class=\"line\">    <span class=\"keyword\">static</span> <span class=\"keywordtype\">size_t</span> fsNbUploaded;</div>\n\
<div class=\"line\">    <span class=\"keyword\">static</span> <span class=\"keywordtype\">size_t</span> fsNbUploadedBytes;</div>\n\
<div class=\"line\">    <span class=\"keyword\">static</span> <span class=\"keywordtype\">size_t</span> fsNbEvicted;</div>\n\
<div class=\"line\">    <span class=\"keyword\">static</span> <span class=\"keywordtype\">size_t</span> fsNbEvictedBytes;</div>\n\
<div class=\"line\"></div>\n\
<div class=\"line\">    </div>\n\
<div class=\"line\">    <span class=\"comment\">/*----- data members -----*/</span></div>\n\
<div class=\"line\">    </div>\n\
<div class=\"line\">    <span class=\"keyword\">const</span> BufferType        fBufferType;</div>\n\
<div class=\"line\">    <span class=\"keyword\">const</span> ArrayBase::Key    fKey;</div>\n\
<div class=\"line\">    MGLuint                 fVBOName;</div>\n\
<div class=\"line\">};</div>\n\
<div class=\"line\"></div>\n\
<div class=\"line\"></div>\n\
<div class=\"line\"><span class=\"comment\">//</span></div>\n\
<div class=\"line\"><span class=\"comment\">// VBOProxy</span></div>\n\
<div class=\"line\"><span class=\"comment\">//</span></div>\n\
<div class=\"line\"><span class=\"comment\">// Helper class used to draw geometry samples using VBOs if the amount</span></div>\n\
<div class=\"line\"><span class=\"comment\">// of available graphic memory allows it, or using vertex arrays</span></div>\n\
<div class=\"line\"><span class=\"comment\">// otherwise.</span></div>\n\
<div class=\"line\"><span class=\"comment\">//</span></div>\n\
<div class=\"line\"><span class=\"comment\">// When the VBOProxy class is created, it assumes that no vertex</span></div>\n\
<div class=\"line\"><span class=\"comment\">// arrays are currently active and that no VBOs are currently</span></div>\n\
<div class=\"line\"><span class=\"comment\">// bound. It then takes charge of managing and cache the OpenGL client</span></div>\n\
<div class=\"line\"><span class=\"comment\">// state related to vertex arrays and VBOs. It attempts to minimize</span></div>\n\
<div class=\"line\"><span class=\"comment\">// the amount of OpenGL state changes necessary to draw multiple</span></div>\n\
<div class=\"line\"><span class=\"comment\">// samples.   </span></div>\n\
<div class=\"line\"><span class=\"comment\">//</span></div>\n\
<div class=\"line\"><span class=\"comment\"></span></div>\n\
<div class=\"line\"><span class=\"keyword\">class </span>VBOProxy</div>\n\
<div class=\"line\">{</div>\n\
<div class=\"line\"><span class=\"keyword\">public</span>:</div>\n\
<div class=\"line\"></div>\n\
<div class=\"line\">    <span class=\"comment\">/*----- typedefs and enumerations -----*/</span></div>\n\
<div class=\"line\"></div>\n\
<div class=\"line\">    <span class=\"keyword\">enum</span> NormalsMode {</div>\n\
<div class=\"line\">        kNoNormals,</div>\n\
<div class=\"line\">        kFrontNormals,</div>\n\
<div class=\"line\">        kBackNormals</div>\n\
<div class=\"line\">    };</div>\n\
<div class=\"line\"></div>\n\
<div class=\"line\">    <span class=\"keyword\">enum</span> UVsMode {</div>\n\
<div class=\"line\">        kNoUVs,</div>\n\
<div class=\"line\">        kUVs</div>\n\
<div class=\"line\">    };</div>\n\
<div class=\"line\"></div>\n\
<div class=\"line\">    <span class=\"keyword\">enum</span> VBOMode {</div>\n\
<div class=\"line\">        kUseVBOIfPossible,</div>\n\
<div class=\"line\">        kDontUseVBO</div>\n\
<div class=\"line\">    };</div>\n\
<div class=\"line\"></div>\n\
<div class=\"line\">    <span class=\"comment\">/*----- member functions -----*/</span></div>\n\
<div class=\"line\"></div>\n\
<div class=\"line\">    <span class=\"comment\">// Initializes the VBOProxy and takes over the OpenGL client state.</span></div>\n\
<div class=\"line\">    VBOProxy();</div>\n\
<div class=\"line\"></div>\n\
<div class=\"line\">    <span class=\"comment\">// Unbounds any currently active vertex array or VBO and releases</span></div>\n\
<div class=\"line\">    <span class=\"comment\">// control of the OpenGL client state.</span></div>\n\
<div class=\"line\">    ~VBOProxy();</div>\n\
<div class=\"line\"></div>\n\
<div class=\"line\">    <span class=\"comment\">// Draw the vertices of the given geometry sample</span></div>\n\
<div class=\"line\">    <span class=\"keywordtype\">void</span> drawVertices(</div>\n\
<div class=\"line\">        <span class=\"keyword\">const</span> std::shared_ptr&lt;const ShapeSample&gt;&amp; sample,</div>\n\
<div class=\"line\">        <span class=\"keyword\">const</span> VBOMode vboMode = kUseVBOIfPossible);</div>\n\
<div class=\"line\"></div>\n\
<div class=\"line\">    <span class=\"comment\">// Draw the wireframe of the given geometry sample</span></div>\n\
<div class=\"line\">    <span class=\"keywordtype\">void</span> drawWireframe(</div>\n\
<div class=\"line\">        <span class=\"keyword\">const</span> std::shared_ptr&lt;const ShapeSample&gt;&amp; sample,</div>\n\
<div class=\"line\">        <span class=\"keyword\">const</span> VBOMode vboMode = kUseVBOIfPossible);</div>\n\
<div class=\"line\"></div>\n\
<div class=\"line\">    <span class=\"comment\">// Draw the triangles of the given geometry sample</span></div>\n\
<div class=\"line\">    <span class=\"keywordtype\">void</span> drawTriangles(</div>\n\
<div class=\"line\">        <span class=\"keyword\">const</span> std::shared_ptr&lt;const ShapeSample&gt;&amp; sample,</div>\n\
<div class=\"line\">        <span class=\"keyword\">const</span> <span class=\"keywordtype\">size_t</span> groupId,</div>\n\
<div class=\"line\">        <span class=\"keyword\">const</span> NormalsMode normalsMode, <span class=\"keyword\">const</span> UVsMode uvsMode,</div>\n\
<div class=\"line\">        <span class=\"keyword\">const</span> VBOMode vboMode = kUseVBOIfPossible);</div>\n\
<div class=\"line\"></div>\n\
<div class=\"line\">    <span class=\"comment\">// Draw the bounding box of the given geometry sample</span></div>\n\
<div class=\"line\">    <span class=\"keywordtype\">void</span> drawBoundingBox(</div>\n\
<div class=\"line\">        <span class=\"keyword\">const</span> std::shared_ptr&lt;const ShapeSample&gt;&amp; sample,</div>\n\
<div class=\"line\">        <span class=\"keywordtype\">bool</span> overrideShadedState = <span class=\"keyword\">false</span>);</div>\n\
<div class=\"line\">    <span class=\"keywordtype\">void</span> drawBoundingBox(</div>\n\
<div class=\"line\">        <span class=\"keyword\">const</span> <a name=\"_a0\"></a><a class=\"code\" href=\"#!/url=./cpp_ref/class_m_bounding_box.html\">MBoundingBox</a>&amp; boundingBox,</div>\n\
<div class=\"line\">        <span class=\"keywordtype\">bool</span> overrideShadedState = <span class=\"keyword\">false</span>);</div>\n\
<div class=\"line\"></div>\n\
<div class=\"line\"><span class=\"keyword\">private</span>:</div>\n\
<div class=\"line\"></div>\n\
<div class=\"line\">    <span class=\"comment\">/*----- typedefs and enumerations -----*/</span></div>\n\
<div class=\"line\"></div>\n\
<div class=\"line\">    <span class=\"keyword\">typedef</span> IndexBuffer::index_t index_t;</div>\n\
<div class=\"line\">    </div>\n\
<div class=\"line\">    <span class=\"keyword\">enum</span> BindingType {</div>\n\
<div class=\"line\">        kPrimitives,</div>\n\
<div class=\"line\">        kVertexArrays,</div>\n\
<div class=\"line\">        kVBOs</div>\n\
<div class=\"line\">    };</div>\n\
<div class=\"line\">    </div>\n\
<div class=\"line\"></div>\n\
<div class=\"line\">    <span class=\"comment\">/*----- member functions -----*/</span></div>\n\
<div class=\"line\"></div>\n\
<div class=\"line\">    <span class=\"comment\">// Forbidden and not implemented.</span></div>\n\
<div class=\"line\">    VBOProxy(<span class=\"keyword\">const</span> VBOProxy&amp;);</div>\n\
<div class=\"line\">    <span class=\"keyword\">const</span> VBOProxy&amp; operator=(<span class=\"keyword\">const</span> VBOProxy&amp;);</div>\n\
<div class=\"line\">    </div>\n\
<div class=\"line\">    <span class=\"comment\">// Try to upload/bind all of the following buffers the graphic</span></div>\n\
<div class=\"line\">    <span class=\"comment\">// card. Returns an enum representing the graphic API that should</span></div>\n\
<div class=\"line\">    <span class=\"comment\">// be used to perform the drawing.</span></div>\n\
<div class=\"line\">    BindingType updateBuffers(</div>\n\
<div class=\"line\">        <span class=\"keyword\">const</span> std::shared_ptr&lt;const IndexBuffer&gt;&amp;   indices,</div>\n\
<div class=\"line\">        <span class=\"keyword\">const</span> std::shared_ptr&lt;const VertexBuffer&gt;&amp;  positions,</div>\n\
<div class=\"line\">        <span class=\"keyword\">const</span> std::shared_ptr&lt;const VertexBuffer&gt;&amp;  normals,</div>\n\
<div class=\"line\">        <span class=\"keyword\">const</span> std::shared_ptr&lt;const VertexBuffer&gt;&amp;  uvs,</div>\n\
<div class=\"line\">        <span class=\"keyword\">const</span> <span class=\"keywordtype\">bool</span>                                    areNormalsFlipped,</div>\n\
<div class=\"line\">        <span class=\"keyword\">const</span> VBOMode                                 vboMode,</div>\n\
<div class=\"line\">        VertexBuffer::ReadInterfacePtr&amp;               positionsRead,</div>\n\
<div class=\"line\">        VertexBuffer::ReadInterfacePtr&amp;               normalsRead,</div>\n\
<div class=\"line\">        VertexBuffer::ReadInterfacePtr&amp;               uvsRead</div>\n\
<div class=\"line\">    );</div>\n\
<div class=\"line\"></div>\n\
<div class=\"line\">    <span class=\"comment\">/*----- member functions -----*/</span></div>\n\
<div class=\"line\"></div>\n\
<div class=\"line\">    <span class=\"comment\">// Currently bound buffers.</span></div>\n\
<div class=\"line\">    std::shared_ptr&lt;const IndexBuffer&gt;    fIndices;</div>\n\
<div class=\"line\">    std::shared_ptr&lt;const VertexBuffer&gt;   fPositions;</div>\n\
<div class=\"line\">    std::shared_ptr&lt;const VertexBuffer&gt;   fNormals;</div>\n\
<div class=\"line\">    std::shared_ptr&lt;const VertexBuffer&gt;   fUVs;</div>\n\
<div class=\"line\"></div>\n\
<div class=\"line\">    <span class=\"comment\">// Currently bound VBOs.</span></div>\n\
<div class=\"line\">    std::shared_ptr&lt;const VBOBuffer&gt;      fVBOIndices;</div>\n\
<div class=\"line\">    std::shared_ptr&lt;const VBOBuffer&gt;      fVBOPositions;</div>\n\
<div class=\"line\">    std::shared_ptr&lt;const VBOBuffer&gt;      fVBONormals;</div>\n\
<div class=\"line\">    std::shared_ptr&lt;const VBOBuffer&gt;      fVBOUVs;</div>\n\
<div class=\"line\">    <span class=\"keywordtype\">bool</span>                                    fAreNormalsFlipped;</div>\n\
<div class=\"line\"></div>\n\
<div class=\"line\">    <span class=\"comment\">// Last binding type.</span></div>\n\
<div class=\"line\">    BindingType                             fLastBindingType;</div>\n\
<div class=\"line\">};</div>\n\
<div class=\"line\"></div>\n\
<div class=\"line\"></div>\n\
<div class=\"line\">}</div>\n\
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