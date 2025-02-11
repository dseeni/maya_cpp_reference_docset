var topic = "<!-- saved from url=(0024)http://docs.autodesk.com -->\n\
<html>\n\
   <head><script src=\"../scripts/yepnope.1.5.4-min.js\" type=\"text/javascript\"></script><script src=\"../scripts/lib/jquery-1.11.1.min.js\" type=\"text/javascript\"></script><meta http-equiv=\"Content-Type\" content=\"text/html; charset=UTF-8\"><meta name=\"product\" content=\"MAYAUL\"><meta name=\"release\" content=\"2016\"><meta name=\"book\" content=\"Developer\"><meta name=\"created\" content=\"2015-10-14\"><meta name=\"topicid\" content=\"GUID-02DEF634-1E7B-48C6-8ACD-2C934CA97887\"><meta name=\"topic-type\" content=\"concept\">\n\
      <title>ddsFloatReader.h</title>\n\
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
    cpp_ref_adsk_ref_toc.initNavTree(\'dds_float_reader_8h-example.html\', tocPrefix);\n\
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
</script><script>$(\"div#WidgetFloaterPanels,link[href*=\'microsofttranslator.com\'],script[src*=\'microsofttranslator.com\'],script[src*=\'bing.com\']\").remove();</script><script type=\'text/javascript\'>$(\"div#navigation,div#breadcrumbs,div#banner\").attr(\"translate\",\"no\"); var mtLocation = ((location && location.href && location.href.indexOf(\'https\') == 0)?\'https://ssl.microsofttranslator.com\':\'http://www.microsofttranslator.com\')+\'/ajax/v3/WidgetV3.ashx?siteData=y5CYlxTRD0znCzRLDwX0Wy7-g1EdC1XA4dSC-Y1LtaeScyli8_Ps5jPKqTr4xKxMI0OOUfkDplvX3uxN0JnPclebSYW8_J1HBzf4VLQEzQ8M4PsYXF_cMyp1Oumaetky&category=5297189e-446b-459e-ae1d-9d0360400781_tech&ctf=True&ui=true&settings=Manual&from=en&hidelanguages=\'; yepnope.injectJs(mtLocation, function() {}, { charset:\'utf-8\', type:\'text/javascript\' } );</script><script>\n\
 if (!tocSystemNeedsToBeLoaded) { cpp_ref_initializeToc(); }\n\
 </script><!-- begin MT -->\n\
            \n\
            <div id=\'MicrosoftTranslatorWidget\' class=\'Dark\' style=\'position:absolute;right:20px;top:5px;z-index:100;color:white;background-color:#555555;height:58px;overflow:hidden\'></div>\n\
      <div>\n\
         <div class=\"head\">\n\
            <h1>ddsFloatReader.h</h1>\n\
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
<div class=\"title\">ddsFloatReader.h</div>  </div>\n\
</div><!--header-->\n\
<div class=\"contents\">\n\
<div class=\"fragment\"><div class=\"line\"><span class=\"comment\">//</span></div>\n\
<div class=\"line\"><span class=\"comment\">//-</span></div>\n\
<div class=\"line\"><span class=\"comment\">// ==========================================================================</span></div>\n\
<div class=\"line\"><span class=\"comment\">// Copyright 1995,2006,2008 Autodesk, Inc. All rights reserved.</span></div>\n\
<div class=\"line\"><span class=\"comment\">//</span></div>\n\
<div class=\"line\"><span class=\"comment\">// Use of this software is subject to the terms of the Autodesk</span></div>\n\
<div class=\"line\"><span class=\"comment\">// license agreement provided at the time of installation or download,</span></div>\n\
<div class=\"line\"><span class=\"comment\">// or which otherwise accompanies this software in either electronic</span></div>\n\
<div class=\"line\"><span class=\"comment\">// or hard copy form.</span></div>\n\
<div class=\"line\"><span class=\"comment\">// ==========================================================================</span></div>\n\
<div class=\"line\"><span class=\"comment\">//+</span></div>\n\
<div class=\"line\"><span class=\"comment\">//</span></div>\n\
<div class=\"line\"></div>\n\
<div class=\"line\"><span class=\"preprocessor\">#ifndef DDS_FLOAT_READER_H</span></div>\n\
<div class=\"line\"><span class=\"preprocessor\">#define DDS_FLOAT_READER_H</span></div>\n\
<div class=\"line\"></div>\n\
<div class=\"line\"><span class=\"preprocessor\">#define DEBUG_DDS( x) </span></div>\n\
<div class=\"line\"><span class=\"comment\">//#define DEBUG_DDS( x) x</span></div>\n\
<div class=\"line\"></div>\n\
<div class=\"line\"><span class=\"preprocessor\">#ifdef _WIN32</span></div>\n\
<div class=\"line\"><span class=\"preprocessor\">#pragma pack(1)</span></div>\n\
<div class=\"line\"><span class=\"preprocessor\">#endif</span></div>\n\
<div class=\"line\"></div>\n\
<div class=\"line\"><span class=\"preprocessor\">#ifndef _WIN32</span></div>\n\
<div class=\"line\"><span class=\"keyword\">typedef</span> <span class=\"keywordtype\">unsigned</span> <span class=\"keywordtype\">char</span> BYTE;</div>\n\
<div class=\"line\"><span class=\"keyword\">typedef</span> <span class=\"keywordtype\">unsigned</span> <span class=\"keywordtype\">int</span> DWORD;</div>\n\
<div class=\"line\"><span class=\"keyword\">typedef</span> <span class=\"keywordtype\">unsigned</span> <span class=\"keywordtype\">short</span> WORD;</div>\n\
<div class=\"line\"><span class=\"preprocessor\">#endif</span></div>\n\
<div class=\"line\"></div>\n\
<div class=\"line\"><span class=\"keyword\">namespace </span>dds_Float_Reader</div>\n\
<div class=\"line\">{</div>\n\
<div class=\"line\"><span class=\"comment\">// </span></div>\n\
<div class=\"line\"><span class=\"comment\">// Our DDS constants</span></div>\n\
<div class=\"line\"><span class=\"comment\">//</span></div>\n\
<div class=\"line\"></div>\n\
<div class=\"line\"><span class=\"preprocessor\">#define DDS_MAGIC_NUMBER                0x20534444</span></div>\n\
<div class=\"line\"></div>\n\
<div class=\"line\"><span class=\"preprocessor\">#define DDS_CAPS_FLAG                   0x00000001</span></div>\n\
<div class=\"line\"><span class=\"preprocessor\">#define DDS_HEIGHT_FLAG                 0x00000002</span></div>\n\
<div class=\"line\"><span class=\"preprocessor\">#define DDS_WIDTH_FLAG                  0x00000004</span></div>\n\
<div class=\"line\"><span class=\"preprocessor\">#define DDS_PITCH_FLAG                  0x00000008</span></div>\n\
<div class=\"line\"><span class=\"preprocessor\">#define DDS_PIXEL_FORMAT_FLAG           0x00001000</span></div>\n\
<div class=\"line\"><span class=\"preprocessor\">#define DDS_MIPMAP_COUNT_FLAG           0x00020000</span></div>\n\
<div class=\"line\"><span class=\"preprocessor\">#define DDS_LINEARSIZE_FLAG             0x00080000</span></div>\n\
<div class=\"line\"><span class=\"preprocessor\">#define DDS_DEPTH_FLAG                  0x00800000</span></div>\n\
<div class=\"line\"><span class=\"preprocessor\">#define DDS_HAS_ALPHA_FLAG              0x00000001</span></div>\n\
<div class=\"line\"><span class=\"preprocessor\">#define DDS_FOURCC_FLAG                 0x00000004</span></div>\n\
<div class=\"line\"><span class=\"preprocessor\">#define DDS_RGB_FLAG                    0x00000040</span></div>\n\
<div class=\"line\"><span class=\"preprocessor\">#define DDS_PALETTEINDEXED8             0x00000020          </span></div>\n\
<div class=\"line\"><span class=\"preprocessor\">#define DDS_PALETTEINDEXED4TO8          0x00000010</span></div>\n\
<div class=\"line\"><span class=\"preprocessor\">#define DDS_PALETTEINDEXED4             0x00000008</span></div>\n\
<div class=\"line\"></div>\n\
<div class=\"line\"><span class=\"preprocessor\">#define DDSCAPS_COMPLEX_FLAG            0x00000008</span></div>\n\
<div class=\"line\"><span class=\"preprocessor\">#define DDSCAPS_TEXTURE_FLAG            0x00001000</span></div>\n\
<div class=\"line\"><span class=\"preprocessor\">#define DDSCAPS_MIPMAP_FLAG             0x00400000</span></div>\n\
<div class=\"line\"></div>\n\
<div class=\"line\"><span class=\"preprocessor\">#define DDSCAPS2_CUBEMAP_FLAG           0x00000200</span></div>\n\
<div class=\"line\"><span class=\"preprocessor\">#define DDSCAPS2_CUBEMAP_POSITIVEX_FLAG 0x00000400</span></div>\n\
<div class=\"line\"><span class=\"preprocessor\">#define DDSCAPS2_CUBEMAP_NEGATIVEX_FLAG 0x00000800</span></div>\n\
<div class=\"line\"><span class=\"preprocessor\">#define DDSCAPS2_CUBEMAP_POSITIVEY_FLAG 0x00001000</span></div>\n\
<div class=\"line\"><span class=\"preprocessor\">#define DDSCAPS2_CUBEMAP_NEGATIVEY_FLAG 0x00002000</span></div>\n\
<div class=\"line\"><span class=\"preprocessor\">#define DDSCAPS2_CUBEMAP_POSITIVEZ_FLAG 0x00004000</span></div>\n\
<div class=\"line\"><span class=\"preprocessor\">#define DDSCAPS2_CUBEMAP_NEGATIVEZ_FLAG 0x00008000</span></div>\n\
<div class=\"line\"></div>\n\
<div class=\"line\"><span class=\"preprocessor\">#define DDSCAPS2_VOLUME_FLAG            0x00200000</span></div>\n\
<div class=\"line\"></div>\n\
<div class=\"line\"><span class=\"preprocessor\">#define DDS_DXT1                        0x31545844</span></div>\n\
<div class=\"line\"><span class=\"preprocessor\">#define DDS_DXT2                        0x32545844</span></div>\n\
<div class=\"line\"><span class=\"preprocessor\">#define DDS_DXT3                        0x33545844</span></div>\n\
<div class=\"line\"><span class=\"preprocessor\">#define DDS_DXT4                        0x34545844</span></div>\n\
<div class=\"line\"><span class=\"preprocessor\">#define DDS_DXT5                        0x35545844</span></div>\n\
<div class=\"line\"></div>\n\
<div class=\"line\"></div>\n\
<div class=\"line\"><span class=\"comment\">// Float and half float formats specified in FourCC</span></div>\n\
<div class=\"line\"><span class=\"preprocessor\">#define DDS_R16F                        111</span></div>\n\
<div class=\"line\"><span class=\"preprocessor\">#define DDS_G16R16F                     112</span></div>\n\
<div class=\"line\"><span class=\"preprocessor\">#define DDS_A16B16G16R16F               113</span></div>\n\
<div class=\"line\"><span class=\"preprocessor\">#define DDS_R32F                        114</span></div>\n\
<div class=\"line\"><span class=\"preprocessor\">#define DDS_G32R32F                     115</span></div>\n\
<div class=\"line\"><span class=\"preprocessor\">#define DDS_A32B32G32R32F               116</span></div>\n\
<div class=\"line\"></div>\n\
<div class=\"line\"><span class=\"comment\">//</span></div>\n\
<div class=\"line\"><span class=\"comment\">// This structure describes the format of the file&#39;s pixel data </span></div>\n\
<div class=\"line\"><span class=\"comment\">//</span></div>\n\
<div class=\"line\"><span class=\"keyword\">typedef</span> <span class=\"keyword\">struct </span>DDS_FORMAT {</div>\n\
<div class=\"line\">    DWORD       fSize;</div>\n\
<div class=\"line\">    DWORD       fFlags;</div>\n\
<div class=\"line\">    DWORD       fPixelFormat; <span class=\"comment\">//fFourCC;</span></div>\n\
<div class=\"line\">    DWORD       fRGBBitCount;</div>\n\
<div class=\"line\">    DWORD       fRedBitMask;</div>\n\
<div class=\"line\">    DWORD       fGreenBitMask;</div>\n\
<div class=\"line\">    DWORD       fBlueBitMask;</div>\n\
<div class=\"line\">    DWORD       fAlphaBitMask;</div>\n\
<div class=\"line\">} DDS_FORMAT;</div>\n\
<div class=\"line\"></div>\n\
<div class=\"line\"></div>\n\
<div class=\"line\"><span class=\"comment\">//</span></div>\n\
<div class=\"line\"><span class=\"comment\">// DDS capabilities structure</span></div>\n\
<div class=\"line\"><span class=\"comment\">//</span></div>\n\
<div class=\"line\"><span class=\"keyword\">typedef</span> <span class=\"keyword\">struct </span>DDSCAPS2 {</div>\n\
<div class=\"line\">    DWORD       dwCaps;         <span class=\"comment\">// capabilities of surface wanted</span></div>\n\
<div class=\"line\">    DWORD       dwCaps2;</div>\n\
<div class=\"line\">    DWORD       dwCaps3;</div>\n\
<div class=\"line\">    <span class=\"keyword\">union</span></div>\n\
<div class=\"line\">    {</div>\n\
<div class=\"line\">        DWORD       dwCaps4;</div>\n\
<div class=\"line\">        DWORD       dwVolumeDepth;</div>\n\
<div class=\"line\">    };</div>\n\
<div class=\"line\">} DDSCAPS2;</div>\n\
<div class=\"line\"></div>\n\
<div class=\"line\"></div>\n\
<div class=\"line\"><span class=\"comment\">//</span></div>\n\
<div class=\"line\"><span class=\"comment\">// The header for a DDS file</span></div>\n\
<div class=\"line\"><span class=\"comment\">//</span></div>\n\
<div class=\"line\"><span class=\"keyword\">typedef</span> <span class=\"keyword\">struct </span>DDS_HEADER {</div>\n\
<div class=\"line\">    DWORD       fDDSMagicNumber;</div>\n\
<div class=\"line\">    DWORD       fSize;</div>\n\
<div class=\"line\">    DWORD       fFlags;</div>\n\
<div class=\"line\">    DWORD       fHeight;</div>\n\
<div class=\"line\">    DWORD       fWidth;</div>\n\
<div class=\"line\">    <span class=\"keyword\">union </span>{</div>\n\
<div class=\"line\">        DWORD       fUncompressedPitch;</div>\n\
<div class=\"line\">        DWORD       fCompressedSize;</div>\n\
<div class=\"line\">    };</div>\n\
<div class=\"line\">    DWORD       fDepth;</div>\n\
<div class=\"line\">    DWORD       fMipMapCount;</div>\n\
<div class=\"line\">    DWORD       fReserved1[11];</div>\n\
<div class=\"line\">    DDS_FORMAT  fFormat;            <span class=\"comment\">// Pixel format </span></div>\n\
<div class=\"line\">    DDSCAPS2    fCapabilities;</div>\n\
<div class=\"line\">    DWORD       fReserved2;</div>\n\
<div class=\"line\">} DDS_HEADER;</div>\n\
<div class=\"line\"></div>\n\
<div class=\"line\">}</div>\n\
<div class=\"line\"></div>\n\
<div class=\"line\"><span class=\"preprocessor\">#ifdef _WIN32</span></div>\n\
<div class=\"line\"><span class=\"preprocessor\">#pragma pack()</span></div>\n\
<div class=\"line\"><span class=\"preprocessor\">#endif </span><span class=\"comment\">/*WIN32*/</span><span class=\"preprocessor\"></span></div>\n\
<div class=\"line\"></div>\n\
<div class=\"line\"><span class=\"preprocessor\">#endif </span></div>\n\
</div><!-- fragment --> </div><!-- contents -->\n\
</div><!-- doc-content -->\n\
          <div class=\"footer-block\"><a href=\"../html/ac.cmtdialog.htm\" class=\"comments-anchor\" target=\"_blank\"><span class=\"comments-link\">Please send us your comment about this page</span></a></div><br></div>\n\
   </div></body>\n\
</html>\n\
";