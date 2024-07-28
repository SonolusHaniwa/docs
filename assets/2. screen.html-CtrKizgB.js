import{_ as s,c as n,o as a,e}from"./app-B1KZEIhd.js";const p={},l=e(`<h1 id="屏幕" tabindex="-1"><a class="header-anchor" href="#屏幕"><span>屏幕</span></a></h1><p>在本章中，您将会学习到:</p><ul><li>面板设置</li><li>屏幕坐标系设置</li><li>画布设置</li></ul><h2 id="面板-panels" tabindex="-1"><a class="header-anchor" href="#面板-panels"><span>面板(Panels)</span></a></h2><p>在 VSRG (Vertical Scroll Rhythm Games，纵向滚动节奏游戏) 中，预览模式通常会渲染从左到右水平排列的多个垂直面板。</p><p>让我们设置面板的一些参数，我们假设每个面板宽度为 <code>7</code> 个单位 (<code>3</code> 个单位的轨道大小与两边大小为 <code>2</code> 个单位的填充)，展示两秒的游玩过程。随后，我们将根据关卡中的音符计算正确的面板数量，但就目前让我们假设只有 <code>10</code> 个面板。</p><div class="language-cpp line-numbers-mode" data-highlighter="prismjs" data-ext="cpp" data-title="/engine/constants.cpp"><pre><code><span class="line"><span class="token macro property"><span class="token directive-hash">#</span><span class="token directive keyword">ifdef</span> <span class="token expression">preview</span></span></span>
<span class="line"><span class="token keyword">class</span> <span class="token class-name">Panel</span> <span class="token punctuation">{</span></span>
<span class="line">    <span class="token keyword">public</span><span class="token operator">:</span></span>
<span class="line"></span>
<span class="line">    <span class="token keyword">let</span> w <span class="token operator">=</span> <span class="token number">7</span><span class="token punctuation">;</span></span>
<span class="line">    <span class="token keyword">let</span> h <span class="token operator">=</span> <span class="token number">2</span><span class="token punctuation">;</span></span>
<span class="line">    <span class="token keyword">let</span> count <span class="token operator">=</span> <span class="token number">10</span><span class="token punctuation">;</span></span>
<span class="line"><span class="token punctuation">}</span>panel<span class="token punctuation">;</span></span>
<span class="line"><span class="token macro property"><span class="token directive-hash">#</span><span class="token directive keyword">endif</span></span></span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="屏幕坐标系" tabindex="-1"><a class="header-anchor" href="#屏幕坐标系"><span>屏幕坐标系</span></a></h2><p>与引擎游玩模式类似，我们直接使用默认坐标系即可。</p><p>为了让渲染计算更简单，让我们认为 <code>1/20</code> 的屏幕高度为 X 方向的单位长度，以及一秒的游玩过程为 Y 方向的单位长度。</p><h2 id="画布" tabindex="-1"><a class="header-anchor" href="#画布"><span>画布</span></a></h2><p>对于画布，我们让它可以从左向右滚动，其滚动方向的大小会由面板数量计算得来。</p><div class="language-cpp line-numbers-mode" data-highlighter="prismjs" data-ext="cpp" data-title="/engine/preview/Initialization.cpp"><pre><code><span class="line"><span class="token keyword">class</span> <span class="token class-name">Initialization</span><span class="token operator">:</span> <span class="token base-clause"><span class="token keyword">public</span> <span class="token class-name">Archetype</span></span> <span class="token punctuation">{</span></span>
<span class="line">    <span class="token comment">// ...</span></span>
<span class="line"></span>
<span class="line">    <span class="token keyword">SonolusApi</span> <span class="token function">preprocess</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span></span>
<span class="line">        <span class="token keyword">FUNCBEGIN</span></span>
<span class="line">        <span class="token constant">canvas</span><span class="token punctuation">.</span><span class="token keyword">set</span><span class="token punctuation">(</span><span class="token constant">Scroll</span><span class="token punctuation">.</span>LeftToRight<span class="token punctuation">,</span> panel<span class="token punctuation">.</span>count <span class="token operator">*</span> panel<span class="token punctuation">.</span>w <span class="token operator">*</span> <span class="token constant">screen</span><span class="token punctuation">.</span>h <span class="token operator">/</span> <span class="token number">20</span><span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line">        <span class="token keyword">return</span> <span class="token constant">VOID</span><span class="token punctuation">;</span></span>
<span class="line">    <span class="token punctuation">}</span></span>
<span class="line"><span class="token punctuation">}</span><span class="token punctuation">;</span></span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,13),t=[l];function c(i,o){return a(),n("div",null,t)}const d=s(p,[["render",c],["__file","2. screen.html.vue"]]),u=JSON.parse('{"path":"/sonolus.h/preview/2.%20screen.html","title":"屏幕","lang":"zh-CN","frontmatter":{},"headers":[{"level":2,"title":"面板(Panels)","slug":"面板-panels","link":"#面板-panels","children":[]},{"level":2,"title":"屏幕坐标系","slug":"屏幕坐标系","link":"#屏幕坐标系","children":[]},{"level":2,"title":"画布","slug":"画布","link":"#画布","children":[]}],"git":{"updatedTime":1721830258000,"contributors":[{"name":"LittleYang0531","email":"“littleyang0531@outlook.com”","commits":2}]},"filePathRelative":"sonolus.h/preview/2. screen.md"}');export{d as comp,u as data};
