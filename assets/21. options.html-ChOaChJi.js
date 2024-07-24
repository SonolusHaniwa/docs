import{_ as n,c as s,o as a,e as p}from"./app-vD4oyv4I.js";const e={},l=p(`<h1 id="选项" tabindex="-1"><a class="header-anchor" href="#选项"><span>选项</span></a></h1><p>在本章中，您将会学习到:</p><ul><li>如何为引擎添加速度选项</li><li>如何为引擎添加音符大小选项</li></ul><h2 id="速度" tabindex="-1"><a class="header-anchor" href="#速度"><span>速度</span></a></h2><p>在节奏游戏中，最常使用的选项之一是可变的速度，其给予玩家快进/减慢关卡的能力来使得关卡更具挑战性/更容易练习。</p><p>让我们添加一个速度选项到我们的引擎设置中:</p><div class="language-cpp line-numbers-mode" data-highlighter="prismjs" data-ext="cpp" data-title="/engine/configurations/options.cpp"><pre class="language-cpp"><code><span class="line"><span class="token keyword">class</span> <span class="token class-name">Options</span> <span class="token punctuation">{</span></span>
<span class="line">    <span class="token keyword">public</span><span class="token operator">:</span></span>
<span class="line">    </span>
<span class="line">    <span class="token keyword">int</span> speed <span class="token operator">=</span> <span class="token number">0</span><span class="token punctuation">;</span></span>
<span class="line"><span class="token punctuation">}</span>Options<span class="token punctuation">;</span></span>
<span class="line"></span>
<span class="line"><span class="token keyword">auto</span> options <span class="token operator">=</span> defineOptions<span class="token operator">&lt;</span><span class="token keyword">class</span> <span class="token class-name">Options</span><span class="token operator">&gt;</span><span class="token punctuation">(</span><span class="token punctuation">{</span></span>
<span class="line">	<span class="token punctuation">{</span></span>
<span class="line">        name<span class="token operator">:</span> NameText<span class="token punctuation">.</span>NoteSpeed<span class="token punctuation">,</span></span>
<span class="line">        scope<span class="token operator">:</span> Scope<span class="token punctuation">,</span></span>
<span class="line">        standard<span class="token operator">:</span> <span class="token boolean">true</span><span class="token punctuation">,</span></span>
<span class="line">        type<span class="token operator">:</span> OptionType<span class="token punctuation">.</span>Slider<span class="token punctuation">,</span></span>
<span class="line">        def<span class="token operator">:</span> <span class="token number">1</span><span class="token punctuation">,</span></span>
<span class="line">        min<span class="token operator">:</span> <span class="token number">0.5</span><span class="token punctuation">,</span></span>
<span class="line">        max<span class="token operator">:</span> <span class="token number">2</span><span class="token punctuation">,</span></span>
<span class="line">        step<span class="token operator">:</span> <span class="token number">0.05</span><span class="token punctuation">,</span></span>
<span class="line">        unit<span class="token operator">:</span> UnitText<span class="token punctuation">.</span>Percentage</span>
<span class="line">    <span class="token punctuation">}</span></span>
<span class="line"><span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>令人惊讶的是，这就是我们需要做的全部事情。Sonolus 知道这个特殊的选项名 <code>NameText.NoteSpeed</code> 并会自动调整 BPM 速度以及 BPM 变化中的所有 BPM 值来匹配。由于我们已经完全基于 BPM 和节拍编写了我们的引擎，这不需要太大的修改就能工作。</p><h2 id="音符大小" tabindex="-1"><a class="header-anchor" href="#音符大小"><span>音符大小</span></a></h2><p>我们也会提供一个音符大小选项，这样玩家就可以将其调整到他们喜欢的大小。</p><p>让我们添加一个音符大小选项到我们的引擎设置中去:</p><div class="language-cpp line-numbers-mode" data-highlighter="prismjs" data-ext="cpp" data-title="/engine/configurations/options.cpp"><pre class="language-cpp"><code><span class="line"><span class="token keyword">class</span> <span class="token class-name">Options</span> <span class="token punctuation">{</span></span>
<span class="line">    <span class="token keyword">public</span><span class="token operator">:</span></span>
<span class="line">    </span>
<span class="line">    <span class="token comment">// ...</span></span>
<span class="line"></span>
<span class="line">    <span class="token keyword">int</span> noteSize <span class="token operator">=</span> <span class="token number">1</span><span class="token punctuation">;</span></span>
<span class="line"><span class="token punctuation">}</span>Options<span class="token punctuation">;</span></span>
<span class="line"></span>
<span class="line"><span class="token keyword">auto</span> options <span class="token operator">=</span> defineOptions<span class="token operator">&lt;</span><span class="token keyword">class</span> <span class="token class-name">Options</span><span class="token operator">&gt;</span><span class="token punctuation">(</span><span class="token punctuation">{</span></span>
<span class="line">	<span class="token punctuation">{</span></span>
<span class="line">        name<span class="token operator">:</span> NameText<span class="token punctuation">.</span>NoteSize<span class="token punctuation">,</span></span>
<span class="line">        scope<span class="token operator">:</span> Scope<span class="token punctuation">,</span></span>
<span class="line">        type<span class="token operator">:</span> OptionType<span class="token punctuation">.</span>Slider<span class="token punctuation">,</span></span>
<span class="line">        def<span class="token operator">:</span> <span class="token number">1</span><span class="token punctuation">,</span></span>
<span class="line">        min<span class="token operator">:</span> <span class="token number">0.1</span><span class="token punctuation">,</span></span>
<span class="line">        max<span class="token operator">:</span> <span class="token number">2</span><span class="token punctuation">,</span></span>
<span class="line">        step<span class="token operator">:</span> <span class="token number">0.05</span><span class="token punctuation">,</span></span>
<span class="line">        unit<span class="token operator">:</span> UnitText<span class="token punctuation">.</span>Percentage</span>
<span class="line">    <span class="token punctuation">}</span></span>
<span class="line"><span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>在那之后，让我们使用音符大小选项的值并调整音符半径:</p><div class="language-cpp line-numbers-mode" data-highlighter="prismjs" data-ext="cpp" data-title="/engine/play/Initialization.cpp"><pre class="language-cpp"><code><span class="line"><span class="token keyword">class</span> <span class="token class-name">Initialization</span><span class="token operator">:</span> <span class="token base-clause"><span class="token keyword">public</span> <span class="token class-name">Archetype</span></span> <span class="token punctuation">{</span></span>
<span class="line">    <span class="token comment">// ...</span></span>
<span class="line"></span>
<span class="line">    <span class="token keyword">SonolusApi</span> <span class="token function">preprocess</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span></span>
<span class="line">        <span class="token keyword">FUNCBEGIN</span></span>
<span class="line">        <span class="token keyword">let</span> noteRadius <span class="token operator">=</span> <span class="token number">0.2</span> <span class="token operator">*</span> LevelOptions<span class="token punctuation">.</span><span class="token function">get</span><span class="token punctuation">(</span>Options<span class="token punctuation">.</span>noteSize<span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line"></span>
<span class="line">        <span class="token comment">// ...</span></span>
<span class="line">        <span class="token keyword">return</span> <span class="token constant">VOID</span><span class="token punctuation">;</span></span>
<span class="line">    <span class="token punctuation">}</span></span>
<span class="line"></span>
<span class="line">    <span class="token comment">// ...</span></span>
<span class="line"><span class="token punctuation">}</span><span class="token punctuation">;</span></span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,14),t=[l];function i(c,o){return a(),s("div",null,t)}const r=n(e,[["render",i],["__file","21. options.html.vue"]]),d=JSON.parse('{"path":"/sonolus.h/play/21.%20options.html","title":"选项","lang":"zh-CN","frontmatter":{},"headers":[{"level":2,"title":"速度","slug":"速度","link":"#速度","children":[]},{"level":2,"title":"音符大小","slug":"音符大小","link":"#音符大小","children":[]}],"git":{"updatedTime":1720416884000,"contributors":[{"name":"LittleYang0531","email":"“littleyang0531@outlook.com”","commits":1}]},"filePathRelative":"sonolus.h/play/21. options.md"}');export{r as comp,d as data};