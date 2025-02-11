var topic = "<!-- saved from url=(0024)http://docs.autodesk.com -->\n\
<html>\n\
   <head>\n\
<link href=\"../../style/prettify.css\" type=\"text/css\" rel=\"stylesheet\">\n\
<script type=\"text/javascript\" src=\"../../scripts/prettify.js\"></script><script src=\"../../scripts/lib/jquery-1.11.1.min.js\" type=\"text/javascript\"></script><meta http-equiv=\"Content-Type\" content=\"text/html; charset=utf-8\"><meta http-equiv=\"Content-Style-Type\" content=\"text/css\"><meta name=\"generator\" content=\"pandoc\"><meta http-equiv=\"Content-Type\" content=\"text/html; charset=UTF-8\"><script type=\"text/javascript\" src=\"../../scripts/utils/adsk.redirect.js\"></script>\n\
      <title>OpenMP</title>\n\
   <meta name=\"topic-subtype\" content=\"C++\"></head>\n\
   <body height=\"100%\"><div class=\"body_content\" id=\"body-content\"><style type=\"text/css\">code{white-space: pre;}</style><script>$(document).ready(function() { yepnope.injectJs(\"./scripts/multireflink.js\"); });</script><script>$(document).ready(function () { prettyPrint(); } );</script><script>$(\"div#WidgetFloaterPanels,link[href*=\'microsofttranslator.com\'],script[src*=\'microsofttranslator.com\'],script[src*=\'bing.com\']\").remove();</script><script type=\'text/javascript\'>$(\"div#navigation,div#breadcrumbs,div#banner\").attr(\"translate\",\"no\"); var mtLocation = ((location && location.href && location.href.indexOf(\'https\') == 0)?\'https://ssl.microsofttranslator.com\':\'http://www.microsofttranslator.com\')+\'/ajax/v3/WidgetV3.ashx?ctf=True&ui=true&settings=Manual&from=en&hidelanguages=\'; yepnope.injectJs(mtLocation, function() {}, { charset:\'utf-8\', type:\'text/javascript\' } );</script><script></script><script></script><!-- begin MT -->\n\
            \n\
            <div id=\'MicrosoftTranslatorWidget\' class=\'Dark\' style=\'float:right;z-index:100;color:white;background-color:#bbbbbb;height:58px;overflow:hidden\'></div><div id=\"reflinkdiv\"></div>\n\
      <div>\n\
         <div class=\"head\">\n\
            <h1>OpenMP</h1>\n\
         </div>\n\
\n\
<div class=\'section\'><a id=\"openmp\"></a></div>\n\
<div class=\'section\'><a id=\"openmp-overview\"></a><h2 id=\"openmp-overview\">OpenMP overview</h2></div>\n\
<p>OpenMP is a higher level threading abstraction primarily designed for data parallelism applied to <strong>for</strong> loops. It is supported by VS2005 and by the Intel compiler on all platforms. The version of gcc required by Maya on OSX and Linux does not support OpenMP.</p>\n\
<p>OpenMP is implemented via compiler pragmas. Compared with native threading, it presents a very simple interface to the user. All the thread creation and management and most data partitioning is hidden from the user. OpenMP uses thread pools, which are created the first time a parallel region is encountered (for this reason it is important to ignore the very first threaded loop traversal in an application when profiling OpenMP code.)</p>\n\
<p>Here is a simple example of a threaded loop:</p>\n\
<div class=\"codeBlock\"><pre class=\"prettyprint\">#pragma omp parallel for\n\
for(int i=0; i&lt;imax; i++) {\n\
    doThreadsafeWork(i);\n\
}\n\
\n\
</pre></div><p>This code will be converted by the compiler into a function that is run in parallel by multiple threads, by default one thread per logical processor. The first processor takes the first (imax/numThreads) elements of the loop, the second processor takes the next equally sized chunk and so on. This ensures good <strong>cache affinity</strong>, that is, the processor is usually working with adjacent data elements and so minimizes cache misses.</p>\n\
<p>Here is a more complex example:</p>\n\
<div class=\"codeBlock\"><pre class=\"prettyprint\">#pragma omp parallel for schedule(guided) if(imax&gt;1000)\n\
for(int i=0; i&lt;imax; i++) {\n\
    doThreadsafeWork(i);\n\
    #pragma omp critical\n\
    doNonThreadsafeWork(i);\n\
}\n\
\n\
</pre></div><p>This code also breaks the loop into chunks, but the guided scheduling option causes it to use chunks smaller than size (imax/numThreads), and to send a new chunk to each thread as it finished an existing chunk. This provides better <strong>load balancing</strong> for cases where workload varies between iterations of the loop, since at runtime additional chunks of work are assigned to any threads that finish early. The <span class=\'code\'>critical</span> pragma places a lock on the line which follows it.</p>\n\
<p>The <span class=\'code\'>if</span> conditional on the main pragma causes the loop to be run in parallel only if the trip count (number of loop iterations) exceeds the specified value. There is overhead to invoking a parallel region, so it does not make sense to parallelize the evaluation if the trip count is too low. A good rule of thumb is to assume an overhead of 10k clock cycles to start and end a parallel region, so the cutoff trip count should try to exceed this work. This is particularly important for an application like Maya, where the same algorithm may be invoked on a single very dense object or a large number of very simple objects. In the latter case, the extra startup overhead of thousands of very short threaded evaluations could easily overwhelm any threading benefit, and you might actually get significant slowdowns with threaded code that does not have a cutoff. Note that even if the threading is not cut off by the conditional, the code inside the loop is still extracted by the compiler into a separate function and will take the hit of a function call.</p>\n\
<div class=\'section\'><a id=\"pros-and-cons-of-openmp\"></a><h2 id=\"pros-and-cons-of-openmp\">Pros and cons of OpenMP</h2></div>\n\
<p>The benefits of OpenMP are cross-platform support, simple implementation, and ease of removal. Simply disabling the pragma causes the code to revert to its serial form, and can be used as a quick way to check that the behavior is the same. A surprisingly large amount of code can be threaded using very simple OpenMP pragmas such as those in the examples above. It is very useful for quickly prototyping and evaluating possible threading benefits, even if the final implementation will be done using a different threading library.</p>\n\
<p>The downsides are limited algorithm applicability, and incompatibility between implementations. The VS2005 and Intel OpenMP libraries can be used together, but they do not recognize each other&#39;s implementations. So a threaded loop compiled with VC2005 that calls a function compiled with the Intel compiler will ignore any OpenMP locks defined by the Intel compiler.</p>\n\
<p>OpenMP is also problematical with nested threading, where higher level threads are spawned that call into code that is itself threaded at a lower level. This causes more threads to be activated than there are cores on the system. This is known as <strong>oversubscription</strong>, and leads to poor performance. Oversubscription becomes increasingly problematical as more threading is added to an application, since a developer may not even realize that a function being called in parallel is itself threaded.</p>\n\
<p><strong>Oversubscription</strong> is especially a problem during Evaluation Manager parallel evaluation.</p>\n\
<div class=\'section\'><a id=\"openmp-and-maya-spin-wait-time\"></a><h2 id=\"openmp-and-maya-spin-wait-time\">OpenMP and Maya spin-wait time</h2></div>\n\
<p>Some algorithms in Maya are threaded using OpenMP, including the fluids and dynamics solvers. Most data parallel loops use Intel® Threading Building Blocks (TBB), which avoids issues when using the Evaluation Manager. See <a href=\'#!/url=./developer/Multithreading-plug-ins/Intel-Threading-Building-Blocks.html\' title=\'\'>Intel Threading Building Blocks</a>.</p>\n\
<p>Typically, the spin-wait time should be set to zero and not changed. If you are using Intel OpenMP in a plug-in, and want to set a nonzero spin-wait time, you can include the Intel compiler version of the header file <span class=\'code\'>omp.h</span> and then use the <span class=\'code\'>kmp_set_blocktime()</span> function.</p>\n\
<p>When doing this, be aware of potential race conditions between different plugins when setting the block time during Evaluation Manager parallel evaluation. To avoid these potential races, set the block time during plugin initialization and not during evaluation. Also. be very careful to set the spin- wait time back to zero before exiting the plug-in and returning control to Maya: <span class=\'code\'>kmp_set_blocktime(0);</span></p>\n\
<p>Maya uses the Intel compiler for OpenMP on all platforms.</p>\n\
      <div class=\"footer-block\"><a href=\"../html/ac.cmtdialog.htm\" class=\"comments-anchor\" target=\"_blank\"><span class=\"comments-link\">Please send us your comment about this page</span></a></div></div>\n\
   </div></body>\n\
</html>\n\
";