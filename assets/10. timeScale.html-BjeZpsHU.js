import{_ as n,c as s,o as a,e}from"./app-B1KZEIhd.js";const p={},l=e(`<h1 id="倍速" tabindex="-1"><a class="header-anchor" href="#倍速"><span>倍速</span></a></h1><p>在本章中，您将会学习到:</p><ul><li>倍速变化的绘制</li></ul><h2 id="倍速变化" tabindex="-1"><a class="header-anchor" href="#倍速变化"><span>倍速变化</span></a></h2><p>倍速变化原型的实现与前面章节的 BPM 变化原型非常类似。</p><div class="language-cpp line-numbers-mode" data-highlighter="prismjs" data-ext="cpp" data-title="/engine/skins.cpp"><pre><code><span class="line"><span class="token keyword">class</span> <span class="token class-name">Sprites</span> <span class="token punctuation">{</span></span>
<span class="line">	<span class="token keyword">public</span><span class="token operator">:</span></span>
<span class="line"></span>
<span class="line">    <span class="token comment">// ...</span></span>
<span class="line">    <span class="token keyword">int</span> timeScaleChangeLine <span class="token operator">=</span> <span class="token number">7</span><span class="token punctuation">;</span></span>
<span class="line"><span class="token punctuation">}</span>Sprites<span class="token punctuation">;</span></span>
<span class="line"></span>
<span class="line"><span class="token keyword">auto</span> skins <span class="token operator">=</span> <span class="token keyword">defineSkins</span><span class="token operator">&lt;</span><span class="token keyword">class</span> <span class="token class-name">Sprites</span><span class="token operator">&gt;</span><span class="token punctuation">(</span><span class="token punctuation">{</span></span>
<span class="line">    <span class="token comment">// ...</span></span>
<span class="line">    <span class="token punctuation">{</span> <span class="token constant">SkinSpriteName</span><span class="token punctuation">.</span>GridYellow<span class="token punctuation">,</span> Sprites<span class="token punctuation">.</span>timeScaleChangeLine <span class="token punctuation">}</span></span>
<span class="line"><span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><div class="language-cpp line-numbers-mode" data-highlighter="prismjs" data-ext="cpp" data-title="/engine/preview/TimeScaleChange.cpp"><pre><code><span class="line"><span class="token keyword">class</span> <span class="token class-name">TimeScaleChange</span><span class="token operator">:</span> <span class="token base-clause"><span class="token keyword">public</span> <span class="token class-name">Archetype</span></span> <span class="token punctuation">{</span></span>
<span class="line">    <span class="token keyword">public</span><span class="token operator">:</span></span>
<span class="line"></span>
<span class="line">    <span class="token keyword">static</span> <span class="token keyword">constexpr</span> <span class="token keyword">const</span> <span class="token keyword">char</span><span class="token operator">*</span> name <span class="token operator">=</span> <span class="token string">&quot;#TIMESCALE_CHANGE&quot;</span><span class="token punctuation">;</span></span>
<span class="line"></span>
<span class="line">    <span class="token keyword">vector</span><span class="token operator">&lt;</span><span class="token keyword">pair</span><span class="token operator">&lt;</span><span class="token keyword">string</span><span class="token punctuation">,</span> <span class="token keyword">int</span><span class="token operator">&gt;</span> <span class="token operator">&gt;</span> imports <span class="token operator">=</span> <span class="token punctuation">{</span></span>
<span class="line">        <span class="token punctuation">{</span> <span class="token string">&quot;#BEAT&quot;</span><span class="token punctuation">,</span> <span class="token number">0</span> <span class="token punctuation">}</span><span class="token punctuation">,</span> </span>
<span class="line">        <span class="token punctuation">{</span> <span class="token string">&quot;#TIMESCALE&quot;</span><span class="token punctuation">,</span> <span class="token number">1</span> <span class="token punctuation">}</span></span>
<span class="line">    <span class="token punctuation">}</span><span class="token punctuation">;</span></span>
<span class="line">    <span class="token keyword">Variable</span><span class="token operator">&lt;</span><span class="token constant">EntityDataId</span><span class="token operator">&gt;</span> <span class="token function">beat</span><span class="token punctuation">(</span><span class="token number">0</span><span class="token punctuation">,</span> <span class="token boolean">true</span><span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line">    <span class="token keyword">Variable</span><span class="token operator">&lt;</span><span class="token constant">EntityDataId</span><span class="token operator">&gt;</span> <span class="token function">timeScale</span><span class="token punctuation">(</span><span class="token number">1</span><span class="token punctuation">,</span> <span class="token boolean">true</span><span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line"></span>
<span class="line">    <span class="token keyword">SonolusApi</span> <span class="token function">render</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span></span>
<span class="line">        <span class="token keyword">FUNCBEGIN</span></span>
<span class="line">        <span class="token function">line</span><span class="token punctuation">(</span>Sprites<span class="token punctuation">.</span>timeScaleChangeLine<span class="token punctuation">,</span> beat<span class="token punctuation">,</span> <span class="token number">0.5</span><span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line">        <span class="token function">print</span><span class="token punctuation">(</span>timeScale<span class="token punctuation">,</span> <span class="token function">BeatToTime</span><span class="token punctuation">(</span>beat<span class="token punctuation">)</span><span class="token punctuation">,</span> <span class="token constant">PrintFormat</span><span class="token punctuation">.</span>TimeScale<span class="token punctuation">,</span> <span class="token operator">-</span><span class="token number">1</span><span class="token punctuation">,</span> <span class="token constant">PrintColor</span><span class="token punctuation">.</span>Yellow<span class="token punctuation">,</span> <span class="token boolean">true</span><span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line">        <span class="token keyword">return</span> <span class="token constant">VOID</span><span class="token punctuation">;</span></span>
<span class="line">    <span class="token punctuation">}</span></span>
<span class="line"><span class="token punctuation">}</span><span class="token punctuation">;</span></span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><div class="language-diff line-numbers-mode" data-highlighter="prismjs" data-ext="diff" data-title="/engine/engine.cpp"><pre><code><span class="line">// ...</span>
<span class="line"></span>
<span class="line">#ifdef preview</span>
<span class="line">using namespace previewData;</span>
<span class="line">#include&quot;preview/Initialization.cpp&quot;</span>
<span class="line">#include&quot;preview/Stage.cpp&quot;</span>
<span class="line">#include&quot;preview/Note.cpp&quot;</span>
<span class="line">#include&quot;preview/BpmChange.cpp&quot;</span>
<span class="line"><span class="token inserted-sign inserted"><span class="token prefix inserted">+</span><span class="token line"> #include&quot;preview/TimeScaleChange.cpp&quot;</span>
<span class="line"></span></span>#elif watch</span>
<span class="line"></span>
<span class="line">// ...</span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><div class="language-diff line-numbers-mode" data-highlighter="prismjs" data-ext="diff" data-title="/main.cpp"><pre><code><span class="line">// ...</span>
<span class="line"></span>
<span class="line">#ifdef preview</span>
<span class="line"><span class="token unchanged"><span class="token prefix unchanged"> </span><span class="token line">   buffer data, configuration;</span>
<span class="line"></span><span class="token prefix unchanged"> </span><span class="token line">   build&lt;</span>
<span class="line"></span><span class="token prefix unchanged"> </span><span class="token line">       // Replace with your archetypes here</span>
<span class="line"></span><span class="token prefix unchanged"> </span><span class="token line">       Initialization,</span>
<span class="line"></span><span class="token prefix unchanged"> </span><span class="token line">       Stage,</span>
<span class="line"></span><span class="token prefix unchanged"> </span><span class="token line">       Note,</span>
<span class="line"></span><span class="token prefix unchanged"> </span><span class="token line">       BpmChange,</span>
<span class="line"></span></span><span class="token inserted-sign inserted"><span class="token prefix inserted">+</span><span class="token line">       TimeScaleChange</span>
<span class="line"></span></span><span class="token unchanged"><span class="token prefix unchanged"> </span><span class="token line">   &gt;(configuration, data);</span>
<span class="line"></span></span></span>
<span class="line">// ...</span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,9),t=[l];function i(c,o){return a(),s("div",null,t)}const r=n(p,[["render",i],["__file","10. timeScale.html.vue"]]),d=JSON.parse('{"path":"/sonolus.h/preview/10.%20timeScale.html","title":"倍速","lang":"zh-CN","frontmatter":{},"headers":[{"level":2,"title":"倍速变化","slug":"倍速变化","link":"#倍速变化","children":[]}],"git":{"updatedTime":1721830258000,"contributors":[{"name":"LittleYang0531","email":"“littleyang0531@outlook.com”","commits":1}]},"filePathRelative":"sonolus.h/preview/10. timeScale.md"}');export{r as comp,d as data};