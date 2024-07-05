import{_ as n,c as s,o as a,e as p}from"./app-D_87_CTj.js";const e={},l=p(`<h1 id="按键输入" tabindex="-1"><a class="header-anchor" href="#按键输入"><span>按键输入</span></a></h1><p>在本章中，您将会学习到:</p><ul><li>如何处理玩家输入</li><li>判定窗口的概念与设置</li><li>输入偏移的处理</li></ul><h2 id="基础输入" tabindex="-1"><a class="header-anchor" href="#基础输入"><span>基础输入</span></a></h2><p>让我们先实现非常基础的输入交互: 如果玩家点击，按键消失。</p><p>在 <code>touch</code> 回调函数中，我们可以遍历 <code>touches</code> 来寻找刚开始的触摸。如果找到，销毁按键并返回。</p><p>为了防止按键在准备销毁的那一帧的 <code>updatePatallel</code> 回调函数中仍然被绘制，我们需要添加一个简单的销毁检查:</p><div class="language-cpp line-numbers-mode" data-highlighter="prismjs" data-ext="cpp" data-title="/engine/play/Note.cpp"><pre class="language-cpp"><code><span class="line"><span class="token keyword">class</span> <span class="token class-name">Note</span><span class="token operator">:</span> <span class="token base-clause"><span class="token keyword">public</span> <span class="token class-name">Archetype</span></span> <span class="token punctuation">{</span></span>
<span class="line">    <span class="token comment">// ...</span></span>
<span class="line"></span>
<span class="line">    <span class="token keyword">SonolusApi</span> <span class="token function">touch</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span></span>
<span class="line">        <span class="token keyword">FUNCBEGIN</span></span>
<span class="line">        <span class="token keyword">FOR</span> <span class="token punctuation">(</span>i<span class="token punctuation">,</span> <span class="token number">0</span><span class="token punctuation">,</span> <span class="token constant">touches</span><span class="token punctuation">.</span>size<span class="token punctuation">,</span> <span class="token number">1</span><span class="token punctuation">)</span> <span class="token punctuation">{</span></span>
<span class="line">            <span class="token keyword">IF</span> <span class="token punctuation">(</span><span class="token operator">!</span><span class="token constant">touches</span><span class="token punctuation">[</span>i<span class="token punctuation">]</span><span class="token punctuation">.</span>started<span class="token punctuation">)</span> <span class="token keyword">CONTINUE</span><span class="token punctuation">;</span> <span class="token keyword">FI</span></span>
<span class="line">            <span class="token constant">EntityDespawn</span><span class="token punctuation">.</span><span class="token keyword">set</span><span class="token punctuation">(</span><span class="token number">0</span><span class="token punctuation">,</span> <span class="token boolean">true</span><span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line">            <span class="token function">Return</span><span class="token punctuation">(</span><span class="token number">0</span><span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line">        <span class="token punctuation">}</span> <span class="token keyword">DONE</span></span>
<span class="line">        <span class="token keyword">return</span> <span class="token constant">VOID</span><span class="token punctuation">;</span></span>
<span class="line">    <span class="token punctuation">}</span></span>
<span class="line"></span>
<span class="line">    <span class="token keyword">SonolusApi</span> <span class="token function">updateParallel</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span></span>
<span class="line">        <span class="token keyword">FUNCBEGIN</span></span>
<span class="line">        <span class="token keyword">IF</span> <span class="token punctuation">(</span><span class="token constant">EntityDespawn</span><span class="token punctuation">.</span><span class="token function">get</span><span class="token punctuation">(</span><span class="token number">0</span><span class="token punctuation">)</span><span class="token punctuation">)</span> <span class="token function">Return</span><span class="token punctuation">(</span><span class="token number">0</span><span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token keyword">FI</span></span>
<span class="line"></span>
<span class="line">        <span class="token comment">// ...</span></span>
<span class="line">        <span class="token keyword">return</span> <span class="token constant">VOID</span><span class="token punctuation">;</span></span>
<span class="line">    <span class="token punctuation">}</span></span>
<span class="line"><span class="token punctuation">}</span><span class="token punctuation">;</span></span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><div class="custom-container tip"><p class="custom-container-title">TIP</p><p>实际上，Sonolus 的性能优化做的非常好，基本上所有支持的设备在游玩任意引擎时都能达到至少 <code>60</code> 帧。</p><p>在这种情况下，即使在 <code>updateParallel</code> 回调函数中不做销毁检查，玩家看上去也没有太大区别。</p></div><h2 id="判定窗口" tabindex="-1"><a class="header-anchor" href="#判定窗口"><span>判定窗口</span></a></h2><p>虽然我们的引擎现在开始工作了，但它绝对不像正常的节奏游戏那样工作。</p><p>一个按键当且仅当当前时间在按键的判定窗口时才能被击打: 如果时间太早，击打不会触发判定; 如果时间太晚，这将会被判定为 Miss 并且按键会自行销毁。</p><p>对我们的引擎来说，让我们定义，当你在目标时间 <code>50ms</code> 以内击打时，你将获得 Perfect 判定; <code>100ms</code> 以内会获得 Great 判定; <code>200ms</code> 以内会获得 Good 判定; 如果偏差时间更大，将不会触发判定或是获得 Miss 判定。</p><div class="language-cpp line-numbers-mode" data-highlighter="prismjs" data-ext="cpp" data-title="/engine/constants.cpp"><pre class="language-cpp"><code><span class="line"><span class="token keyword">class</span> <span class="token class-name">Windows</span> <span class="token punctuation">{</span></span>
<span class="line">    <span class="token keyword">public</span><span class="token operator">:</span></span>
<span class="line"></span>
<span class="line">    <span class="token keyword">let</span> minPerfect <span class="token operator">=</span> <span class="token operator">-</span><span class="token number">0.05</span><span class="token punctuation">;</span></span>
<span class="line">    <span class="token keyword">let</span> maxPerfect <span class="token operator">=</span> <span class="token number">0.05</span><span class="token punctuation">;</span></span>
<span class="line">    <span class="token keyword">let</span> minGreat <span class="token operator">=</span> <span class="token operator">-</span><span class="token number">0.1</span><span class="token punctuation">;</span></span>
<span class="line">    <span class="token keyword">let</span> maxGreat <span class="token operator">=</span> <span class="token number">0.1</span><span class="token punctuation">;</span></span>
<span class="line">    <span class="token keyword">let</span> minGood <span class="token operator">=</span> <span class="token operator">-</span><span class="token number">0.2</span><span class="token punctuation">;</span></span>
<span class="line">    <span class="token keyword">let</span> maxGood <span class="token operator">=</span> <span class="token number">0.2</span><span class="token punctuation">;</span></span>
<span class="line"><span class="token punctuation">}</span>windows<span class="token punctuation">;</span></span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="输入偏移" tabindex="-1"><a class="header-anchor" href="#输入偏移"><span>输入偏移</span></a></h2><p>当玩家物理上触摸屏幕时，在此次输入在 Sonolus 里被注册并广播到所有的 <code>touch</code> 回调函数前有一些延迟。这很可能来自硬件的延迟并且无可避免。</p><p>输入偏移可以允许玩家告诉 Sonolus 将这部分时间考虑在内。</p><p>举个例子，玩家在 <code>00:01.00</code> 时触摸了屏幕，但需要花费一些时间并在 <code>00:01.06</code> 被 <code>touch</code> 回调函数检测到。如果玩家正确校准了他们的输入并给您 <code>0.06</code> 的输入偏移，引擎就可以将其从触摸时间上减去，并基于他们真实的触摸时间 <code>00:01.00</code> 正确判定玩家输入。</p><p>Sonolus 提供的触摸时间已经考虑了输入偏移。然而，涉及到其他方面的输入偏移，引擎仍需要手动考虑它们，并确保给与所有玩家一个公平的游玩体验。</p><h2 id="过早输入" tabindex="-1"><a class="header-anchor" href="#过早输入"><span>过早输入</span></a></h2><p>让我们计算一下玩家能够击打的最早时间:</p><div class="language-cpp line-numbers-mode" data-highlighter="prismjs" data-ext="cpp" data-title="/engine/play/Note.cpp"><pre class="language-cpp"><code><span class="line"><span class="token keyword">class</span> <span class="token class-name">Note</span><span class="token operator">:</span> <span class="token base-clause"><span class="token keyword">public</span> <span class="token class-name">Archetype</span></span> <span class="token punctuation">{</span></span>
<span class="line">    <span class="token comment">// ...</span></span>
<span class="line"></span>
<span class="line">    <span class="token keyword">Variable</span><span class="token operator">&lt;</span><span class="token constant">EntityMemoryId</span><span class="token operator">&gt;</span> minInputTime<span class="token punctuation">;</span></span>
<span class="line"></span>
<span class="line">    <span class="token keyword">SonolusApi</span> <span class="token function">initialize</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span></span>
<span class="line">        <span class="token keyword">FUNCBEGIN</span></span>
<span class="line">        minInputTime <span class="token operator">=</span> targetTime <span class="token operator">+</span> windows<span class="token punctuation">.</span>minGood <span class="token operator">+</span> <span class="token constant">RuntimeEnvironment</span><span class="token punctuation">.</span><span class="token function">get</span><span class="token punctuation">(</span><span class="token number">3</span><span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line">        </span>
<span class="line">        <span class="token comment">// ...</span></span>
<span class="line">        <span class="token keyword">return</span> <span class="token constant">VOID</span><span class="token punctuation">;</span></span>
<span class="line">    <span class="token punctuation">}</span></span>
<span class="line"><span class="token punctuation">}</span><span class="token punctuation">;</span></span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>接下来我们需要让 <code>touch</code> 回调函数只会在最小输入时间后执行:</p><div class="language-cpp line-numbers-mode" data-highlighter="prismjs" data-ext="cpp" data-title="/engine/play/Note.cpp"><pre class="language-cpp"><code><span class="line"><span class="token keyword">class</span> <span class="token class-name">Note</span><span class="token operator">:</span> <span class="token base-clause"><span class="token keyword">public</span> <span class="token class-name">Archetype</span></span> <span class="token punctuation">{</span></span>
<span class="line">    <span class="token comment">// ...</span></span>
<span class="line"></span>
<span class="line">    <span class="token keyword">SonolusApi</span> <span class="token function">touch</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span></span>
<span class="line">        <span class="token keyword">FUNCBEGIN</span></span>
<span class="line">        <span class="token keyword">IF</span> <span class="token punctuation">(</span><span class="token constant">times</span><span class="token punctuation">.</span>now <span class="token operator">&lt;</span> minInputTime<span class="token punctuation">)</span> <span class="token function">Return</span><span class="token punctuation">(</span><span class="token number">0</span><span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token keyword">FI</span></span>
<span class="line"></span>
<span class="line">        <span class="token comment">// ...</span></span>
<span class="line">        <span class="token keyword">return</span> <span class="token constant">VOID</span><span class="token punctuation">;</span></span>
<span class="line">    <span class="token punctuation">}</span></span>
<span class="line"></span>
<span class="line">    <span class="token comment">// ...</span></span>
<span class="line"><span class="token punctuation">}</span><span class="token punctuation">;</span></span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="过晚输入" tabindex="-1"><a class="header-anchor" href="#过晚输入"><span>过晚输入</span></a></h2><p>与过早输入类似，让我们计算一下玩家能够击打的最晚时间:</p><div class="language-cpp line-numbers-mode" data-highlighter="prismjs" data-ext="cpp" data-title="/engine/play/Note.cpp"><pre class="language-cpp"><code><span class="line"><span class="token keyword">class</span> <span class="token class-name">Note</span><span class="token operator">:</span> <span class="token base-clause"><span class="token keyword">public</span> <span class="token class-name">Archetype</span></span> <span class="token punctuation">{</span></span>
<span class="line">    <span class="token comment">// ...</span></span>
<span class="line"></span>
<span class="line">    <span class="token keyword">Variable</span><span class="token operator">&lt;</span><span class="token constant">EntityMemoryId</span><span class="token operator">&gt;</span> maxInputTime<span class="token punctuation">;</span></span>
<span class="line"></span>
<span class="line">    <span class="token keyword">SonolusApi</span> <span class="token function">initialize</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span></span>
<span class="line">        <span class="token keyword">FUNCBEGIN</span></span>
<span class="line">        <span class="token comment">// ...</span></span>
<span class="line"></span>
<span class="line">        maxInputTime <span class="token operator">=</span> targetTime <span class="token operator">+</span> windows<span class="token punctuation">.</span>maxGood <span class="token operator">+</span> <span class="token constant">RuntimeEnvironment</span><span class="token punctuation">.</span><span class="token function">get</span><span class="token punctuation">(</span><span class="token number">3</span><span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line">        </span>
<span class="line">        <span class="token comment">// ...</span></span>
<span class="line">        <span class="token keyword">return</span> <span class="token constant">VOID</span><span class="token punctuation">;</span></span>
<span class="line">    <span class="token punctuation">}</span></span>
<span class="line"><span class="token punctuation">}</span><span class="token punctuation">;</span></span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>如果时间已经超过最大输入时间，我们应该让按键自动销毁:</p><div class="language-cpp line-numbers-mode" data-highlighter="prismjs" data-ext="cpp" data-title="/engine/play/Note.cpp"><pre class="language-cpp"><code><span class="line"><span class="token keyword">class</span> <span class="token class-name">Note</span><span class="token operator">:</span> <span class="token base-clause"><span class="token keyword">public</span> <span class="token class-name">Archetype</span></span> <span class="token punctuation">{</span></span>
<span class="line">    <span class="token comment">// ...</span></span>
<span class="line"></span>
<span class="line">    <span class="token keyword">SonolusApi</span> <span class="token function">updateParallel</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span></span>
<span class="line">        <span class="token keyword">FUNCBEGIN</span></span>
<span class="line">        <span class="token keyword">IF</span> <span class="token punctuation">(</span><span class="token constant">times</span><span class="token punctuation">.</span>now <span class="token operator">&gt;</span> maxInputTime<span class="token punctuation">)</span> <span class="token constant">EntityDespawn</span><span class="token punctuation">.</span><span class="token keyword">set</span><span class="token punctuation">(</span><span class="token number">0</span><span class="token punctuation">,</span> <span class="token boolean">true</span><span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token keyword">FI</span></span>
<span class="line"></span>
<span class="line">        <span class="token comment">// ...</span></span>
<span class="line">        <span class="token keyword">return</span> <span class="token constant">VOID</span><span class="token punctuation">;</span></span>
<span class="line">    <span class="token punctuation">}</span></span>
<span class="line"><span class="token punctuation">}</span><span class="token punctuation">;</span></span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,29),t=[l];function c(o,i){return a(),s("div",null,t)}const d=n(e,[["render",c],["__file","10. input.html.vue"]]),r=JSON.parse('{"path":"/sonolus.h/play/10.%20input.html","title":"按键输入","lang":"zh-CN","frontmatter":{},"headers":[{"level":2,"title":"基础输入","slug":"基础输入","link":"#基础输入","children":[]},{"level":2,"title":"判定窗口","slug":"判定窗口","link":"#判定窗口","children":[]},{"level":2,"title":"输入偏移","slug":"输入偏移","link":"#输入偏移","children":[]},{"level":2,"title":"过早输入","slug":"过早输入","link":"#过早输入","children":[]},{"level":2,"title":"过晚输入","slug":"过晚输入","link":"#过晚输入","children":[]}],"git":{"updatedTime":1720190162000,"contributors":[{"name":"LittleYang0531","email":"“littleyang0531@outlook.com”","commits":1}]},"filePathRelative":"sonolus.h/play/10. input.md"}');export{d as comp,r as data};
