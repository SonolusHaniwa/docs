import{_ as n,c as s,o as a,e as p}from"./app-Cn0ZaqMv.js";const e={},t=p(`<h1 id="函数与重要宏定义" tabindex="-1"><a class="header-anchor" href="#函数与重要宏定义"><span>函数与重要宏定义</span></a></h1><p>在本章中，您将会学习到:</p><ul><li>定义一个 SonolusApi 函数</li><li>使用 IF/FOR/WHILE 语句块</li></ul><h2 id="函数定义" tabindex="-1"><a class="header-anchor" href="#函数定义"><span>函数定义</span></a></h2><p>Sonolus 的引擎数据本身是由 json 来进行编写的，可读性非常差，这就需要 Sonolus.h 或 Sonolus.js 来辅助您将 C/C++ 或 JavaScript/TypeScript 的代码转为机器可读的 json 代码。</p><p>为了使您所编写出来的代码更具现代高级语言的风格，我们采用了侵入式写法，这导致了 Sonolus.h 中函数的定义方法不同于正常 C/C++ 函数的定义方法。</p><p>下面是基本的 C/C++ 函数的定义方法与 Sonolus.h 函数的定义方法。</p><div class="language-cpp line-numbers-mode" data-highlighter="prismjs" data-ext="cpp" data-title="cpp"><pre class="language-cpp"><code><span class="line"><span class="token keyword">int</span> <span class="token function">add</span><span class="token punctuation">(</span><span class="token keyword">int</span> a<span class="token punctuation">,</span> <span class="token keyword">int</span> b<span class="token punctuation">)</span> <span class="token punctuation">{</span></span>
<span class="line">    <span class="token keyword">return</span> a <span class="token operator">+</span> b<span class="token punctuation">;</span></span>
<span class="line"><span class="token punctuation">}</span></span>
<span class="line"><span class="token keyword">void</span> <span class="token function">add2</span><span class="token punctuation">(</span><span class="token keyword">int</span> a<span class="token punctuation">,</span> <span class="token keyword">int</span> b<span class="token punctuation">)</span> <span class="token punctuation">{</span></span>
<span class="line">    cout <span class="token operator">&lt;&lt;</span> a <span class="token operator">+</span> b <span class="token operator">&lt;&lt;</span> endl<span class="token punctuation">;</span></span>
<span class="line">    <span class="token keyword">return</span><span class="token punctuation">;</span></span>
<span class="line"><span class="token punctuation">}</span></span>
<span class="line"></span>
<span class="line"><span class="token keyword">SonolusApi</span> <span class="token function">add</span><span class="token punctuation">(</span><span class="token keyword">let</span> a<span class="token punctuation">,</span> <span class="token keyword">let</span> b<span class="token punctuation">)</span> <span class="token punctuation">{</span></span>
<span class="line">    <span class="token keyword">FUNCBEGIN</span></span>
<span class="line">    <span class="token function">Return</span><span class="token punctuation">(</span>a <span class="token operator">+</span> b<span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line">    <span class="token keyword">return</span> <span class="token constant">VAR</span><span class="token punctuation">;</span></span>
<span class="line"><span class="token punctuation">}</span></span>
<span class="line"><span class="token keyword">SonolusApi</span> <span class="token function">add2</span><span class="token punctuation">(</span><span class="token keyword">let</span> a<span class="token punctuation">,</span> <span class="token keyword">let</span> b<span class="token punctuation">)</span> <span class="token punctuation">{</span></span>
<span class="line">    <span class="token keyword">FUNCBEGIN</span></span>
<span class="line">    <span class="token function">Debuglog</span><span class="token punctuation">(</span>a <span class="token operator">+</span> b<span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line">    <span class="token keyword">return</span> <span class="token constant">VOID</span><span class="token punctuation">;</span></span>
<span class="line"><span class="token punctuation">}</span></span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>首先，只要是 Sonolus.h 的函数定义，返回值类型都必须是 <code>SonolusApi</code>；并且函数的第一行一定是 <code>FUNCBEGIN</code> 来表明这是一个 Sonolus.h 的函数定义。</p><p>接下来看具体实现上的差别。首先，关于有返回值的函数，在 C/C++ 中直接使用 <code>return</code> 返回就行了。而在 Sonolus.h 的函数定义中，您需要先使用 <code>Return(num)</code> 函数返回这个函数的返回值，最后在函数的最后一行使用 <code>return VAR;</code> 来表明这是一个有返回值的函数。</p><p>其次，关于无返回值的函数，在 C/C++ 中直接 <code>return;</code> 结束就行了，而在 Sonolus.h 的函数定义中，在最后一行使用一个简单的 <code>return VOID;</code> 表明没有返回值就行了。</p><p>请注意，在 Sonolus.h 函数定义中, <code>return VAR;</code> 和 <code>return VOID;</code> 都只能放在函数的最末尾，放在中间会导致这句话后面的所有语句都不会执行。</p><p>当然，您还可以使用正常 C/C++ 函数来快速编写一个 <strong>简单的有返回值的 Sonolus.h 函数</strong>，下面是简单示例:</p><div class="language-cpp line-numbers-mode" data-highlighter="prismjs" data-ext="cpp" data-title="cpp"><pre class="language-cpp"><code><span class="line"><span class="token keyword">SonolusApi</span> <span class="token function">add</span><span class="token punctuation">(</span><span class="token keyword">let</span> a<span class="token punctuation">,</span> <span class="token keyword">let</span> b<span class="token punctuation">)</span> <span class="token punctuation">{</span></span>
<span class="line">    <span class="token keyword">return</span> a <span class="token operator">+</span> b<span class="token punctuation">;</span></span>
<span class="line"><span class="token punctuation">}</span></span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>在这种写法中，直接使用 <code>return</code> 函数返回值即可，不需要也不能使用 <code>FUNCBEGIN</code> 来指定为 Sonolus.h 函数，否则会出现未知问题。</p><p>请注意，在这种写法中，所有变量 <code>var</code> 都不能被正常存储在内存中，只能以表达式 <code>let</code> 形式进行运算，因此这种写法只适合一些简单的运算。</p><h2 id="语句块" tabindex="-1"><a class="header-anchor" href="#语句块"><span>语句块</span></a></h2><p>C/C++ 中的 <code>if</code>/<code>for</code>/<code>while</code>/<code>continue</code>/<code>break</code> 函数是自带函数，我们无法对其重定义，因此我们额外设置了 <code>IF/FI</code>/<code>FOR/DONE</code>/<code>WHILE/DONE</code>/<code>CONTINUE</code>/<code>BREAK</code> 宏定义来在 Sonolus 中实现上述功能。</p><p>使用方法与 C/C++ 原来的函数几乎一模一样，下面是基本使用示例:</p><div class="language-cpp line-numbers-mode" data-highlighter="prismjs" data-ext="cpp" data-title="cpp"><pre class="language-cpp"><code><span class="line"><span class="token keyword">SonolusApi</span> <span class="token function">TestFunc</span><span class="token punctuation">(</span><span class="token keyword">let</span> a<span class="token punctuation">)</span> <span class="token punctuation">{</span></span>
<span class="line">    <span class="token keyword">IF</span> <span class="token punctuation">(</span>a <span class="token operator">==</span> <span class="token number">114514</span> <span class="token operator">||</span> a <span class="token operator">==</span> <span class="token number">1919810</span><span class="token punctuation">)</span> <span class="token punctuation">{</span></span>
<span class="line">        <span class="token function">Debuglog</span><span class="token punctuation">(</span>a<span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line">    <span class="token punctuation">}</span> <span class="token keyword">FI</span></span>
<span class="line"></span>
<span class="line">    <span class="token keyword">FOR</span> <span class="token punctuation">(</span>i<span class="token punctuation">,</span> <span class="token number">0</span><span class="token punctuation">,</span> a<span class="token punctuation">,</span> <span class="token number">1</span><span class="token punctuation">)</span> <span class="token punctuation">{</span></span>
<span class="line">        <span class="token keyword">IF</span> <span class="token punctuation">(</span>i <span class="token operator">==</span> <span class="token number">114514</span> <span class="token operator">||</span> i <span class="token operator">==</span> <span class="token number">1919810</span><span class="token punctuation">)</span> <span class="token punctuation">{</span></span>
<span class="line">            <span class="token keyword">CONTINUE</span><span class="token punctuation">;</span></span>
<span class="line">        <span class="token punctuation">}</span> <span class="token keyword">ELSE</span> <span class="token punctuation">{</span></span>
<span class="line">            <span class="token function">Debuglog</span><span class="token punctuation">(</span><span class="token number">114514</span><span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line">        <span class="token punctuation">}</span> <span class="token keyword">FI</span></span>
<span class="line">        <span class="token function">Debuglog</span><span class="token punctuation">(</span>i<span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line">        <span class="token keyword">BREAK</span><span class="token punctuation">;</span></span>
<span class="line">    <span class="token punctuation">}</span> <span class="token keyword">DONE</span></span>
<span class="line"></span>
<span class="line">    <span class="token keyword">var</span> it <span class="token operator">=</span> a<span class="token punctuation">;</span></span>
<span class="line">    <span class="token keyword">WHILE</span> <span class="token punctuation">(</span>it <span class="token operator">&gt;=</span> <span class="token number">0</span><span class="token punctuation">)</span> <span class="token punctuation">{</span></span>
<span class="line">        <span class="token function">Debuglog</span><span class="token punctuation">(</span>it<span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line">        it <span class="token operator">=</span> it <span class="token operator">-</span> <span class="token number">1</span><span class="token punctuation">;</span> <span class="token comment">// 注意：如果这里使用 a 变量来迭代会无法赋值导致死循环</span></span>
<span class="line">    <span class="token punctuation">}</span> <span class="token keyword">DONE</span></span>
<span class="line"><span class="token punctuation">}</span></span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>下面是一些您需要注意的点:</p><ul><li><code>FOR (i, st, en, step)</code> 定义中，<code>i</code> 可以是您自定义的任意符合 C/C++ 命名标准的变量名，<code>i</code> 的范围包括 <code>st</code> 不包括 <code>en</code>。</li><li>这些语句块的实现基础都是匿名 Sonolus.h 函数，因此你不需要在语句块中使用 <code>return VAR;</code> 或 <code>return VOID;</code> 语句。</li><li>由于语句块是由宏定义实现的，你还可以写成以下类似 Python 语句的形式:</li></ul><div class="language-cpp line-numbers-mode" data-highlighter="prismjs" data-ext="cpp" data-title="cpp"><pre class="language-cpp"><code><span class="line"><span class="token keyword">SonolusApi</span> <span class="token function">TestFunc</span><span class="token punctuation">(</span><span class="token keyword">let</span> a<span class="token punctuation">)</span> <span class="token punctuation">{</span></span>
<span class="line">    <span class="token keyword">IF</span> <span class="token punctuation">(</span>a <span class="token operator">==</span> <span class="token number">114514</span> <span class="token operator">||</span> a <span class="token operator">==</span> <span class="token number">1919810</span><span class="token punctuation">)</span></span>
<span class="line">        <span class="token function">Debuglog</span><span class="token punctuation">(</span>a<span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line">    <span class="token keyword">FI</span></span>
<span class="line"></span>
<span class="line">    <span class="token keyword">FOR</span> <span class="token punctuation">(</span>i<span class="token punctuation">,</span> <span class="token number">0</span><span class="token punctuation">,</span> a<span class="token punctuation">,</span> <span class="token number">1</span><span class="token punctuation">)</span></span>
<span class="line">        <span class="token keyword">IF</span> <span class="token punctuation">(</span>i <span class="token operator">==</span> <span class="token number">114514</span> <span class="token operator">||</span> i <span class="token operator">==</span> <span class="token number">1919810</span><span class="token punctuation">)</span></span>
<span class="line">            <span class="token keyword">CONTINUE</span><span class="token punctuation">;</span></span>
<span class="line">        <span class="token keyword">ELSE</span></span>
<span class="line">            <span class="token function">Debuglog</span><span class="token punctuation">(</span><span class="token number">114514</span><span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line">        <span class="token keyword">FI</span></span>
<span class="line">        <span class="token function">Debuglog</span><span class="token punctuation">(</span>i<span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line">        <span class="token keyword">BREAK</span><span class="token punctuation">;</span></span>
<span class="line">    <span class="token keyword">DONE</span></span>
<span class="line"></span>
<span class="line">    <span class="token keyword">var</span> it <span class="token operator">=</span> a<span class="token punctuation">;</span></span>
<span class="line">    <span class="token keyword">WHILE</span> <span class="token punctuation">(</span>it <span class="token operator">&gt;=</span> <span class="token number">0</span><span class="token punctuation">)</span></span>
<span class="line">        <span class="token function">Debuglog</span><span class="token punctuation">(</span>it<span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line">        it <span class="token operator">=</span> it <span class="token operator">-</span> <span class="token number">1</span><span class="token punctuation">;</span> <span class="token comment">// 注意：如果这里使用 a 变量来迭代会无法赋值导致死循环</span></span>
<span class="line">    <span class="token keyword">DONE</span></span>
<span class="line"><span class="token punctuation">}</span></span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,23),o=[t];function c(l,i){return a(),s("div",null,o)}const d=n(e,[["render",c],["__file","4. function.html.vue"]]),r=JSON.parse('{"path":"/sonolus.h/basic/4.%20function.html","title":"函数与重要宏定义","lang":"zh-CN","frontmatter":{},"headers":[{"level":2,"title":"函数定义","slug":"函数定义","link":"#函数定义","children":[]},{"level":2,"title":"语句块","slug":"语句块","link":"#语句块","children":[]}],"git":{"updatedTime":1720016854000,"contributors":[{"name":"LittleYang0531","email":"“littleyang0531@outlook.com”","commits":1}]},"filePathRelative":"sonolus.h/basic/4. function.md"}');export{d as comp,r as data};
