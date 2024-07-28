import{_ as n,c as s,o as a,e as p}from"./app-B1KZEIhd.js";const e={},t=p(`<h1 id="节拍刻度线" tabindex="-1"><a class="header-anchor" href="#节拍刻度线"><span>节拍刻度线</span></a></h1><p>在本章中，您将会学习到:</p><ul><li>刻度线实用函数</li><li>如何绘制节拍刻度线</li></ul><h2 id="刻度线" tabindex="-1"><a class="header-anchor" href="#刻度线"><span>刻度线</span></a></h2><p>刻度线可以让玩家更精确地测量音符的位置。</p><p>就像打印一样，让我们使用一个实用函数来绘制刻度线：</p><div class="language-cpp line-numbers-mode" data-highlighter="prismjs" data-ext="cpp" data-title="/engine/utils.cpp"><pre><code><span class="line"><span class="token keyword">SonolusApi</span> <span class="token function">line</span><span class="token punctuation">(</span><span class="token keyword">let</span> sprite<span class="token punctuation">,</span> <span class="token keyword">let</span> beat<span class="token punctuation">,</span> <span class="token keyword">let</span> a<span class="token punctuation">)</span> <span class="token punctuation">{</span></span>
<span class="line">    <span class="token keyword">FUNCBEGIN</span></span>
<span class="line">    <span class="token keyword">auto</span> pos <span class="token operator">=</span> panel<span class="token punctuation">.</span><span class="token function">getPos</span><span class="token punctuation">(</span><span class="token function">BeatToTime</span><span class="token punctuation">(</span>beat<span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line">    <span class="token keyword">let</span> l <span class="token operator">=</span> pos<span class="token punctuation">.</span>first <span class="token operator">-</span> <span class="token number">3</span> <span class="token operator">*</span> <span class="token constant">screen</span><span class="token punctuation">.</span>h <span class="token operator">/</span> <span class="token number">20</span><span class="token punctuation">,</span> r <span class="token operator">=</span> pos<span class="token punctuation">.</span>first <span class="token operator">+</span> <span class="token number">3</span> <span class="token operator">*</span> <span class="token constant">screen</span><span class="token punctuation">.</span>h <span class="token operator">/</span> <span class="token number">20</span><span class="token punctuation">;</span></span>
<span class="line">    <span class="token keyword">let</span> b <span class="token operator">=</span> pos<span class="token punctuation">.</span>second <span class="token operator">-</span> <span class="token number">0.01</span> <span class="token operator">*</span> <span class="token constant">screen</span><span class="token punctuation">.</span>h <span class="token operator">/</span> <span class="token number">20</span><span class="token punctuation">,</span> t <span class="token operator">=</span> pos<span class="token punctuation">.</span>second <span class="token operator">+</span> <span class="token number">0.01</span> <span class="token operator">*</span> <span class="token constant">screen</span><span class="token punctuation">.</span>h <span class="token operator">/</span> <span class="token number">20</span><span class="token punctuation">;</span></span>
<span class="line">    <span class="token function">Draw</span><span class="token punctuation">(</span>sprite<span class="token punctuation">,</span> l<span class="token punctuation">,</span> b<span class="token punctuation">,</span> l<span class="token punctuation">,</span> t<span class="token punctuation">,</span> r<span class="token punctuation">,</span> t<span class="token punctuation">,</span> r<span class="token punctuation">,</span> b<span class="token punctuation">,</span> <span class="token number">1</span><span class="token punctuation">,</span> a<span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line">    <span class="token keyword">return</span> <span class="token constant">VOID</span><span class="token punctuation">;</span></span>
<span class="line"><span class="token punctuation">}</span></span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="声明" tabindex="-1"><a class="header-anchor" href="#声明"><span>声明</span></a></h2><p>标准方格精灵可以被用来绘制刻度线：</p><div class="language-cpp line-numbers-mode" data-highlighter="prismjs" data-ext="cpp" data-title="/engine/skins.cpp"><pre><code><span class="line"><span class="token keyword">class</span> <span class="token class-name">Sprites</span> <span class="token punctuation">{</span></span>
<span class="line">	<span class="token keyword">public</span><span class="token operator">:</span></span>
<span class="line"></span>
<span class="line">    <span class="token comment">// ...</span></span>
<span class="line">    <span class="token keyword">int</span> beatLine <span class="token operator">=</span> <span class="token number">5</span><span class="token punctuation">;</span></span>
<span class="line"><span class="token punctuation">}</span>Sprites<span class="token punctuation">;</span></span>
<span class="line"></span>
<span class="line"><span class="token keyword">auto</span> skins <span class="token operator">=</span> <span class="token keyword">defineSkins</span><span class="token operator">&lt;</span><span class="token keyword">class</span> <span class="token class-name">Sprites</span><span class="token operator">&gt;</span><span class="token punctuation">(</span><span class="token punctuation">{</span></span>
<span class="line">    <span class="token comment">// ...</span></span>
<span class="line">    <span class="token punctuation">{</span> <span class="token constant">SkinSpriteName</span><span class="token punctuation">.</span>GridNeutral<span class="token punctuation">,</span> Sprites<span class="token punctuation">.</span>beatLine <span class="token punctuation">}</span></span>
<span class="line"><span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="节拍刻度线-1" tabindex="-1"><a class="header-anchor" href="#节拍刻度线-1"><span>节拍刻度线</span></a></h2><p>现在我们可以循环节拍，并在每一拍绘制一条刻度线来强调当前刻度：</p><div class="language-cpp line-numbers-mode" data-highlighter="prismjs" data-ext="cpp" data-title="/engine/preview/Stage.cpp"><pre><code><span class="line"><span class="token keyword">class</span> <span class="token class-name">Stage</span><span class="token operator">:</span> <span class="token base-clause"><span class="token keyword">public</span> <span class="token class-name">Archetype</span></span> <span class="token punctuation">{</span></span>
<span class="line">    <span class="token comment">// ...</span></span>
<span class="line"></span>
<span class="line">    <span class="token keyword">SonolusApi</span> <span class="token function">renderBeats</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span></span>
<span class="line">        <span class="token keyword">FUNCBEGIN</span></span>
<span class="line">        <span class="token keyword">FOR</span> <span class="token punctuation">(</span>i<span class="token punctuation">,</span> <span class="token number">0</span><span class="token punctuation">,</span> <span class="token function">Floor</span><span class="token punctuation">(</span>chart<span class="token punctuation">.</span>beats<span class="token punctuation">)</span> <span class="token operator">+</span> <span class="token number">1</span><span class="token punctuation">,</span> <span class="token number">1</span><span class="token punctuation">)</span> <span class="token punctuation">{</span></span>
<span class="line">            <span class="token function">line</span><span class="token punctuation">(</span>Sprites<span class="token punctuation">.</span>beatLine<span class="token punctuation">,</span> i<span class="token punctuation">,</span> <span class="token function">If</span><span class="token punctuation">(</span>i <span class="token operator">%</span> <span class="token number">4</span> <span class="token operator">==</span> <span class="token number">0</span><span class="token punctuation">,</span> <span class="token number">0.25</span><span class="token punctuation">,</span> <span class="token number">0.125</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line">        <span class="token punctuation">}</span> <span class="token keyword">DONE</span></span>
<span class="line">        <span class="token keyword">return</span> <span class="token constant">VOID</span><span class="token punctuation">;</span></span>
<span class="line">    <span class="token punctuation">}</span></span>
<span class="line">    <span class="token keyword">SonolusApi</span> <span class="token function">render</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span></span>
<span class="line">        <span class="token keyword">FUNCBEGIN</span></span>
<span class="line">        <span class="token comment">// ...</span></span>
<span class="line">        <span class="token function">renderBeats</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line">        <span class="token keyword">return</span> <span class="token constant">VOID</span><span class="token punctuation">;</span></span>
<span class="line">    <span class="token punctuation">}</span></span>
<span class="line"><span class="token punctuation">}</span><span class="token punctuation">;</span></span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,13),c=[t];function l(o,i){return a(),s("div",null,c)}const r=n(e,[["render",l],["__file","8. line.html.vue"]]),k=JSON.parse('{"path":"/sonolus.h/preview/8.%20line.html","title":"节拍刻度线","lang":"zh-CN","frontmatter":{},"headers":[{"level":2,"title":"刻度线","slug":"刻度线","link":"#刻度线","children":[]},{"level":2,"title":"声明","slug":"声明","link":"#声明","children":[]},{"level":2,"title":"节拍刻度线","slug":"节拍刻度线-1","link":"#节拍刻度线-1","children":[]}],"git":{"updatedTime":1721830258000,"contributors":[{"name":"LittleYang0531","email":"“littleyang0531@outlook.com”","commits":1}]},"filePathRelative":"sonolus.h/preview/8. line.md"}');export{r as comp,k as data};