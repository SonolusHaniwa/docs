import{_ as s,c as n,o as a,e}from"./app-B1KZEIhd.js";const p={},l=e(`<h1 id="独立下落速度" tabindex="-1"><a class="header-anchor" href="#独立下落速度"><span>独立下落速度</span></a></h1><p>在本章中，您将会学习到:</p><ul><li>如何实现独立下落速度</li></ul><h2 id="独立下落速度-1" tabindex="-1"><a class="header-anchor" href="#独立下落速度-1"><span>独立下落速度</span></a></h2><p>独立下落速度是节奏游戏中的另一个普遍功能，每一个音符都可能以不同的速度下落。在某些游戏中，音符的下落速度是由 BPM 决定的，而在另外一些游戏中，它有可能被手动调整以创建有意思的效果。</p><p>在我们的引擎中，我们将基于 BPM 来实现不同速度的下落。</p><p>当前所有音符的下落速度都是相同的，因为音符的位置是在最小和最大可视时间内插值得到的，并且最小可视时间仅仅是简单的将最大可视时间减 <code>1</code> 得到的。为了改变下落速度，我们可以简单地改变下落时间。</p><p>让我们假设 <code>120</code> BPM 对应 <code>1</code> 秒的下落时间，否则按照 BPM 的大小进行缩放。(例如 <code>240</code> BPM 对应 <code>0.5</code> 秒的下落时间)</p><div class="language-cpp line-numbers-mode" data-highlighter="prismjs" data-ext="cpp" data-title="/engine/play/Note.cpp"><pre><code><span class="line"><span class="token keyword">class</span> <span class="token class-name">Note</span><span class="token operator">:</span> <span class="token base-clause"><span class="token keyword">public</span> <span class="token class-name">Archetype</span></span> <span class="token punctuation">{</span></span>
<span class="line">    <span class="token comment">// ...</span></span>
<span class="line"></span>
<span class="line">    <span class="token keyword">SonolusApi</span> <span class="token function">preprocess</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span></span>
<span class="line">        <span class="token keyword">FUNCBEGIN</span></span>
<span class="line">        <span class="token comment">// ...</span></span>
<span class="line"></span>
<span class="line">        minVisualTime <span class="token operator">=</span> maxVisualTime <span class="token operator">-</span> <span class="token number">120</span> <span class="token operator">/</span> <span class="token function">BeatToBPM</span><span class="token punctuation">(</span>beat<span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line"></span>
<span class="line">        <span class="token comment">// ...</span></span>
<span class="line">        <span class="token keyword">return</span> <span class="token constant">VOID</span><span class="token punctuation">;</span></span>
<span class="line">    <span class="token punctuation">}</span></span>
<span class="line"></span>
<span class="line">    <span class="token comment">// ...</span></span>
<span class="line"><span class="token punctuation">}</span><span class="token punctuation">;</span></span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,9),c=[l];function t(i,o){return a(),n("div",null,c)}const r=s(p,[["render",t],["__file","20. speed.html.vue"]]),u=JSON.parse('{"path":"/sonolus.h/play/20.%20speed.html","title":"独立下落速度","lang":"zh-CN","frontmatter":{},"headers":[{"level":2,"title":"独立下落速度","slug":"独立下落速度-1","link":"#独立下落速度-1","children":[]}],"git":{"updatedTime":1720416884000,"contributors":[{"name":"LittleYang0531","email":"“littleyang0531@outlook.com”","commits":2}]},"filePathRelative":"sonolus.h/play/20. speed.md"}');export{r as comp,u as data};
