import{_ as n,c as s,o as a,e as p}from"./app-B1KZEIhd.js";const e={},l=p(`<h1 id="音符绘制" tabindex="-1"><a class="header-anchor" href="#音符绘制"><span>音符绘制</span></a></h1><p>在本章中，您将会学习到:</p><ul><li>可视时间的计算</li><li>音符精灵的声明</li><li>音符精灵的绘制</li><li>如何解决 Z 轴堆叠冲突</li></ul><h2 id="可视时间" tabindex="-1"><a class="header-anchor" href="#可视时间"><span>可视时间</span></a></h2><p>让我们计算一个音符的可视时间，包含最小与最大可视时间，并重构生成时间以使用最小可视时间:</p><div class="language-cpp line-numbers-mode" data-highlighter="prismjs" data-ext="cpp" data-title="/engine/play/Note.cpp"><pre><code><span class="line"><span class="token keyword">class</span> <span class="token class-name">Note</span><span class="token operator">:</span> <span class="token base-clause"><span class="token keyword">public</span> <span class="token class-name">Archetype</span></span> <span class="token punctuation">{</span></span>
<span class="line">    <span class="token comment">// ...</span></span>
<span class="line"></span>
<span class="line">    <span class="token keyword">Variable</span><span class="token operator">&lt;</span><span class="token constant">EntityMemoryId</span><span class="token operator">&gt;</span> minVisualTime<span class="token punctuation">;</span></span>
<span class="line">    <span class="token keyword">Variable</span><span class="token operator">&lt;</span><span class="token constant">EntityMemoryId</span><span class="token operator">&gt;</span> maxVisualTime<span class="token punctuation">;</span></span>
<span class="line"></span>
<span class="line">    <span class="token comment">// ...</span></span>
<span class="line"></span>
<span class="line">    <span class="token keyword">SonolusApi</span> <span class="token function">preprocess</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span></span>
<span class="line">        <span class="token keyword">FUNCBEGIN</span></span>
<span class="line">        <span class="token comment">// ...</span></span>
<span class="line"></span>
<span class="line">        maxVisualTime <span class="token operator">=</span> targetTime<span class="token punctuation">;</span></span>
<span class="line">        minVisualTime <span class="token operator">=</span> maxVisualTime <span class="token operator">-</span> <span class="token number">1</span><span class="token punctuation">;</span></span>
<span class="line"></span>
<span class="line">        spawnTime <span class="token operator">=</span> minVisualTime<span class="token punctuation">;</span></span>
<span class="line">        <span class="token keyword">return</span> <span class="token constant">VOID</span><span class="token punctuation">;</span></span>
<span class="line">    <span class="token punctuation">}</span></span>
<span class="line"></span>
<span class="line">    <span class="token comment">// ...</span></span>
<span class="line"><span class="token punctuation">}</span><span class="token punctuation">;</span></span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="声明" tabindex="-1"><a class="header-anchor" href="#声明"><span>声明</span></a></h2><p>就像 <code>Stage</code> 原型一样，为了简便，我们为我们的音符使用标准精灵:</p><div class="language-cpp line-numbers-mode" data-highlighter="prismjs" data-ext="cpp" data-title="/engine/skins.cpp"><pre><code><span class="line"><span class="token keyword">class</span> <span class="token class-name">Sprites</span> <span class="token punctuation">{</span></span>
<span class="line">    <span class="token comment">// ...</span></span>
<span class="line"></span>
<span class="line">    <span class="token keyword">int</span> note <span class="token operator">=</span> <span class="token number">1</span><span class="token punctuation">;</span></span>
<span class="line"><span class="token punctuation">}</span>Sprites<span class="token punctuation">;</span></span>
<span class="line"></span>
<span class="line"><span class="token keyword">auto</span> skins <span class="token operator">=</span> <span class="token keyword">defineSkins</span><span class="token operator">&lt;</span><span class="token keyword">class</span> <span class="token class-name">Sprites</span><span class="token operator">&gt;</span><span class="token punctuation">(</span><span class="token punctuation">{</span></span>
<span class="line">    <span class="token comment">// ...</span></span>
<span class="line"></span>
<span class="line">    <span class="token punctuation">{</span> <span class="token constant">SkinSpriteName</span><span class="token punctuation">.</span>NoteHeadCyan<span class="token punctuation">,</span> Sprites<span class="token punctuation">.</span>note <span class="token punctuation">}</span></span>
<span class="line"><span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="绘制" tabindex="-1"><a class="header-anchor" href="#绘制"><span>绘制</span></a></h2><p>有了最小和最大可视时间以及当前时间，我们可以计算音符的 <code>y</code> 坐标。它的计算也很简单:</p><div class="language-cpp line-numbers-mode" data-highlighter="prismjs" data-ext="cpp" data-title="/engine/play/Note.cpp"><pre><code><span class="line"><span class="token keyword">class</span> <span class="token class-name">Note</span><span class="token operator">:</span> <span class="token base-clause"><span class="token keyword">public</span> <span class="token class-name">Archetype</span></span> <span class="token punctuation">{</span></span>
<span class="line">    <span class="token comment">// ...</span></span>
<span class="line"></span>
<span class="line">    <span class="token keyword">SonolusApi</span> <span class="token function">updateParallel</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span></span>
<span class="line">        <span class="token keyword">FUNCBEGIN</span></span>
<span class="line">        <span class="token keyword">let</span> y <span class="token operator">=</span> <span class="token constant">screen</span><span class="token punctuation">.</span>top <span class="token operator">-</span> <span class="token punctuation">(</span><span class="token constant">screen</span><span class="token punctuation">.</span>top <span class="token operator">-</span> judgeLine<span class="token punctuation">.</span>y<span class="token punctuation">)</span> <span class="token operator">*</span> <span class="token punctuation">(</span><span class="token constant">times</span><span class="token punctuation">.</span>now <span class="token operator">-</span> minVisualTime<span class="token punctuation">)</span> <span class="token operator">/</span> <span class="token punctuation">(</span>maxVisualTime <span class="token operator">-</span> minVisualTime<span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line">        <span class="token keyword">return</span> <span class="token constant">VOID</span><span class="token punctuation">;</span></span>
<span class="line">    <span class="token punctuation">}</span></span>
<span class="line"><span class="token punctuation">}</span><span class="token punctuation">;</span></span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>计算了 <code>y</code> 坐标后，我们可以绘制音符:</p><div class="language-cpp line-numbers-mode" data-highlighter="prismjs" data-ext="cpp" data-title="/engine/play/Note.cpp"><pre><code><span class="line"><span class="token keyword">class</span> <span class="token class-name">Note</span><span class="token operator">:</span> <span class="token base-clause"><span class="token keyword">public</span> <span class="token class-name">Archetype</span></span> <span class="token punctuation">{</span></span>
<span class="line">    <span class="token comment">// ...</span></span>
<span class="line"></span>
<span class="line">    <span class="token keyword">SonolusApi</span> <span class="token function">updateParallel</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span></span>
<span class="line">        <span class="token keyword">FUNCBEGIN</span></span>
<span class="line">        <span class="token comment">// ...</span></span>
<span class="line"></span>
<span class="line">        <span class="token keyword">let</span> l <span class="token operator">=</span> <span class="token operator">-</span><span class="token number">1</span> <span class="token operator">*</span> note<span class="token punctuation">.</span>radius<span class="token punctuation">,</span> r <span class="token operator">=</span> note<span class="token punctuation">.</span>radius<span class="token punctuation">;</span></span>
<span class="line">        <span class="token keyword">let</span> t <span class="token operator">=</span> y <span class="token operator">+</span> note<span class="token punctuation">.</span>radius<span class="token punctuation">,</span> b <span class="token operator">=</span> y <span class="token operator">-</span> note<span class="token punctuation">.</span>radius<span class="token punctuation">;</span></span>
<span class="line"></span>
<span class="line">        <span class="token function">Draw</span><span class="token punctuation">(</span>Sprites<span class="token punctuation">.</span>note<span class="token punctuation">,</span> l<span class="token punctuation">,</span> b<span class="token punctuation">,</span> l<span class="token punctuation">,</span> t<span class="token punctuation">,</span> r<span class="token punctuation">,</span> t<span class="token punctuation">,</span> r<span class="token punctuation">,</span> b<span class="token punctuation">,</span> <span class="token number">0</span><span class="token punctuation">,</span> <span class="token number">1</span><span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line">        <span class="token keyword">return</span> <span class="token constant">VOID</span><span class="token punctuation">;</span></span>
<span class="line">    <span class="token punctuation">}</span></span>
<span class="line"><span class="token punctuation">}</span><span class="token punctuation">;</span></span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="z-轴堆叠冲突" tabindex="-1"><a class="header-anchor" href="#z-轴堆叠冲突"><span>Z 轴堆叠冲突</span></a></h2><p>尽管我们的引擎已经开始工作的，但仍然还有我们尚未解决的潜在问题: Z 轴堆叠冲突。</p><p>这是指当有许多对象在同一 <code>z</code> 坐标上渲染时，在帧与帧之间它们的顺序可能并不稳定，这会导致如果它们重叠时会发生闪烁。</p><p>为了解决这个问题，让我们将 <code>z</code> 坐标设置为 <code>1000</code> 减去目标时间，这样更早的音符将一直会在后面音符的上方。</p><p>这也是一个音符的不变属性，因此我们可以计算一次并将其存储在 <code>EntityMemory</code> 区块以重复使用。然而这个时间应该在 <code>initialize</code> 回调函数中计算而不是 <code>preprocess</code> 回调函数，因为它并不会被生成逻辑使用，因此我们可以减少计算来优化关卡加载时间:</p><div class="language-cpp line-numbers-mode" data-highlighter="prismjs" data-ext="cpp" data-title="/engine/play/Note.cpp"><pre><code><span class="line"><span class="token keyword">class</span> <span class="token class-name">Note</span><span class="token operator">:</span> <span class="token base-clause"><span class="token keyword">public</span> <span class="token class-name">Archetype</span></span> <span class="token punctuation">{</span></span>
<span class="line">    <span class="token comment">// ...</span></span>
<span class="line"></span>
<span class="line">    <span class="token keyword">Variable</span><span class="token operator">&lt;</span><span class="token constant">EntityMemoryId</span><span class="token operator">&gt;</span> z<span class="token punctuation">;</span></span>
<span class="line"></span>
<span class="line">    <span class="token comment">// ...</span></span>
<span class="line"></span>
<span class="line">    <span class="token keyword">SonolusApi</span> <span class="token function">initialize</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span></span>
<span class="line">        <span class="token keyword">FUNCBEGIN</span></span>
<span class="line">        z <span class="token operator">=</span> <span class="token number">1000</span> <span class="token operator">-</span> targetTime<span class="token punctuation">;</span></span>
<span class="line">        <span class="token keyword">return</span> <span class="token constant">VOID</span><span class="token punctuation">;</span></span>
<span class="line">    <span class="token punctuation">}</span></span>
<span class="line"></span>
<span class="line">    <span class="token keyword">SonolusApi</span> <span class="token function">updateParallel</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span></span>
<span class="line">        <span class="token keyword">FUNCBEGIN</span></span>
<span class="line">        <span class="token comment">// ...</span></span>
<span class="line"></span>
<span class="line">        <span class="token function">Draw</span><span class="token punctuation">(</span>Sprites<span class="token punctuation">.</span>note<span class="token punctuation">,</span> l<span class="token punctuation">,</span> b<span class="token punctuation">,</span> l<span class="token punctuation">,</span> t<span class="token punctuation">,</span> r<span class="token punctuation">,</span> t<span class="token punctuation">,</span> r<span class="token punctuation">,</span> b<span class="token punctuation">,</span> z<span class="token punctuation">,</span> <span class="token number">1</span><span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line">        <span class="token keyword">return</span> <span class="token constant">VOID</span><span class="token punctuation">;</span></span>
<span class="line">    <span class="token punctuation">}</span></span>
<span class="line"><span class="token punctuation">}</span><span class="token punctuation">;</span></span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,20),t=[l];function c(i,o){return a(),s("div",null,t)}const r=n(e,[["render",c],["__file","9. draw.html.vue"]]),d=JSON.parse('{"path":"/sonolus.h/play/9.%20draw.html","title":"音符绘制","lang":"zh-CN","frontmatter":{},"headers":[{"level":2,"title":"可视时间","slug":"可视时间","link":"#可视时间","children":[]},{"level":2,"title":"声明","slug":"声明","link":"#声明","children":[]},{"level":2,"title":"绘制","slug":"绘制","link":"#绘制","children":[]},{"level":2,"title":"Z 轴堆叠冲突","slug":"z-轴堆叠冲突","link":"#z-轴堆叠冲突","children":[]}],"git":{"updatedTime":1720451095000,"contributors":[{"name":"LittleYang0531","email":"“littleyang0531@outlook.com”","commits":3}]},"filePathRelative":"sonolus.h/play/9. draw.md"}');export{r as comp,d as data};
