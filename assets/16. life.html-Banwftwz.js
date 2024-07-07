import{_ as n,c as s,o as a,e as p}from"./app-s2P5H-ce.js";const e={},t=p(`<h1 id="生命值" tabindex="-1"><a class="header-anchor" href="#生命值"><span>生命值</span></a></h1><p>在本章中，您将会学习到:</p><ul><li>生命值增长原型</li><li>连击生命值增长设置</li><li>次要指标 UI 设置</li></ul><h2 id="生命值增长原型" tabindex="-1"><a class="header-anchor" href="#生命值增长原型"><span>生命值增长原型</span></a></h2><p>对于每一种原型，当玩家获得一种判定类型时，我们都可以奖励或惩罚玩家。</p><p>在我们的引擎中，我们将在玩家获得 Perfect 判定时奖励玩家 <code>10</code> 点生命值，并在玩家获得 Miss 判定时惩罚玩家 <code>100</code> 点生命值。</p><div class="language-cpp line-numbers-mode" data-highlighter="prismjs" data-ext="cpp" data-title="/engine/play/Initialization.cpp"><pre class="language-cpp"><code><span class="line"><span class="token keyword">class</span> <span class="token class-name">Initialization</span><span class="token operator">:</span> <span class="token base-clause"><span class="token keyword">public</span> <span class="token class-name">Archetype</span></span> <span class="token punctuation">{</span></span>
<span class="line">    <span class="token comment">// ...</span></span>
<span class="line"></span>
<span class="line">    <span class="token keyword">SonolusApi</span> <span class="token function">preprocess</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span></span>
<span class="line">        <span class="token keyword">FUNCBEGIN</span></span>
<span class="line">        <span class="token comment">// ...</span></span>
<span class="line"></span>
<span class="line">        lifes<span class="token punctuation">[</span><span class="token number">3</span><span class="token punctuation">]</span><span class="token punctuation">.</span><span class="token keyword">set</span><span class="token punctuation">(</span><span class="token number">10</span><span class="token punctuation">,</span> <span class="token number">0</span><span class="token punctuation">,</span> <span class="token number">0</span><span class="token punctuation">,</span> <span class="token operator">-</span><span class="token number">100</span><span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line">        <span class="token keyword">return</span> <span class="token constant">VOID</span><span class="token punctuation">;</span></span>
<span class="line">    <span class="token punctuation">}</span></span>
<span class="line"></span>
<span class="line">    <span class="token comment">// ...</span></span>
<span class="line"><span class="token punctuation">}</span><span class="token punctuation">;</span></span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="连击生命值增长" tabindex="-1"><a class="header-anchor" href="#连击生命值增长"><span>连击生命值增长</span></a></h2><p>与分数类似，无论哪种原型，我们都可以当玩家获得了大于等于一定数量的目标判定后，奖励或惩罚玩家。</p><p>在我们的引擎中，当玩家获得了连续 <code>10</code> 个 Perfect 判定后，就奖励 <code>50</code> 点生命值。</p><div class="language-cpp line-numbers-mode" data-highlighter="prismjs" data-ext="cpp" data-title="/engine/play/Initialization.cpp"><pre class="language-cpp"><code><span class="line"><span class="token keyword">class</span> <span class="token class-name">Initialization</span><span class="token operator">:</span> <span class="token base-clause"><span class="token keyword">public</span> <span class="token class-name">Archetype</span></span> <span class="token punctuation">{</span></span>
<span class="line">    <span class="token comment">// ...</span></span>
<span class="line"></span>
<span class="line">    <span class="token keyword">SonolusApi</span> <span class="token function">preprocess</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span></span>
<span class="line">        <span class="token keyword">FUNCBEGIN</span></span>
<span class="line">        <span class="token comment">// ...</span></span>
<span class="line"></span>
<span class="line">        LevelLife<span class="token punctuation">.</span><span class="token keyword">set</span><span class="token punctuation">(</span><span class="token number">0</span><span class="token punctuation">,</span> <span class="token number">50</span><span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line">        LevelLife<span class="token punctuation">.</span><span class="token keyword">set</span><span class="token punctuation">(</span><span class="token number">1</span><span class="token punctuation">,</span> <span class="token number">10</span><span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line">        <span class="token keyword">return</span> <span class="token constant">VOID</span><span class="token punctuation">;</span></span>
<span class="line">    <span class="token punctuation">}</span></span>
<span class="line"></span>
<span class="line">    <span class="token comment">// ...</span></span>
<span class="line"><span class="token punctuation">}</span><span class="token punctuation">;</span></span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="次要指标-ui" tabindex="-1"><a class="header-anchor" href="#次要指标-ui"><span>次要指标 UI</span></a></h2><p>与主要指标 UI 类似，Sonolus 提供了次要指标栏与次要指标值 UI，并通常用于显示生命值。</p><div class="language-cpp line-numbers-mode" data-highlighter="prismjs" data-ext="cpp" data-title="/engine/play/Initialization.cpp"><pre class="language-cpp"><code><span class="line"><span class="token keyword">class</span> <span class="token class-name">Initialization</span><span class="token operator">:</span> <span class="token base-clause"><span class="token keyword">public</span> <span class="token class-name">Archetype</span></span> <span class="token punctuation">{</span></span>
<span class="line">    <span class="token comment">// ...</span></span>
<span class="line"></span>
<span class="line">    <span class="token keyword">SonolusApi</span> <span class="token function">preprocess</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span></span>
<span class="line">        <span class="token keyword">FUNCBEGIN</span></span>
<span class="line">        <span class="token comment">// ...</span></span>
<span class="line"></span>
<span class="line">        <span class="token keyword">let</span> secondaryMetricBarX <span class="token operator">=</span> stage<span class="token punctuation">.</span>r <span class="token operator">-</span> <span class="token number">0.05</span><span class="token punctuation">;</span></span>
<span class="line">        <span class="token keyword">let</span> secondaryMetricBarY <span class="token operator">=</span> stage<span class="token punctuation">.</span>t <span class="token operator">-</span> <span class="token number">0.05</span> <span class="token operator">-</span> <span class="token number">0.15</span> <span class="token operator">*</span> <span class="token constant">ui</span><span class="token punctuation">.</span>secondaryMetricConfiguration<span class="token punctuation">.</span>scale <span class="token operator">-</span> <span class="token number">0.05</span><span class="token punctuation">;</span></span>
<span class="line">        <span class="token keyword">let</span> secondaryMetricBarWidth <span class="token operator">=</span> <span class="token number">0.75</span> <span class="token operator">*</span> <span class="token constant">ui</span><span class="token punctuation">.</span>secondaryMetricConfiguration<span class="token punctuation">.</span>scale<span class="token punctuation">;</span></span>
<span class="line">        <span class="token keyword">let</span> secondaryMetricBarHeight <span class="token operator">=</span> <span class="token number">0.15</span> <span class="token operator">*</span> <span class="token constant">ui</span><span class="token punctuation">.</span>secondaryMetricConfiguration<span class="token punctuation">.</span>scale<span class="token punctuation">;</span></span>
<span class="line">        <span class="token keyword">let</span> secondaryMetricValueX <span class="token operator">=</span> stage<span class="token punctuation">.</span>r <span class="token operator">-</span> <span class="token number">0.05</span> <span class="token operator">-</span> <span class="token number">0.035</span> <span class="token operator">*</span> <span class="token constant">ui</span><span class="token punctuation">.</span>secondaryMetricConfiguration<span class="token punctuation">.</span>scale<span class="token punctuation">;</span></span>
<span class="line">        <span class="token keyword">let</span> secondaryMetricValueY <span class="token operator">=</span> stage<span class="token punctuation">.</span>t <span class="token operator">-</span> <span class="token number">0.05</span> <span class="token operator">-</span> <span class="token number">0.15</span> <span class="token operator">*</span> <span class="token constant">ui</span><span class="token punctuation">.</span>secondaryMetricConfiguration<span class="token punctuation">.</span>scale <span class="token operator">-</span> <span class="token number">0.05</span> <span class="token operator">-</span> <span class="token number">0.035</span> <span class="token operator">*</span> <span class="token constant">ui</span><span class="token punctuation">.</span>secondaryMetricConfiguration<span class="token punctuation">.</span>scale<span class="token punctuation">;</span></span>
<span class="line">        <span class="token keyword">let</span> secondaryMetricValueWidth <span class="token operator">=</span> <span class="token number">0</span> <span class="token operator">*</span> <span class="token constant">ui</span><span class="token punctuation">.</span>secondaryMetricConfiguration<span class="token punctuation">.</span>scale<span class="token punctuation">;</span></span>
<span class="line">        <span class="token keyword">let</span> secondaryMetricValueHeight <span class="token operator">=</span> <span class="token number">0.08</span> <span class="token operator">*</span> <span class="token constant">ui</span><span class="token punctuation">.</span>secondaryMetricConfiguration<span class="token punctuation">.</span>scale<span class="token punctuation">;</span></span>
<span class="line">        <span class="token constant">ui</span><span class="token punctuation">.</span>secondaryMetricBar<span class="token punctuation">.</span><span class="token keyword">set</span><span class="token punctuation">(</span></span>
<span class="line">            secondaryMetricBarX<span class="token punctuation">,</span> secondaryMetricBarY<span class="token punctuation">,</span> </span>
<span class="line">            <span class="token number">1</span><span class="token punctuation">,</span> <span class="token number">1</span><span class="token punctuation">,</span> </span>
<span class="line">            secondaryMetricBarWidth<span class="token punctuation">,</span> secondaryMetricBarHeight<span class="token punctuation">,</span> </span>
<span class="line">            <span class="token number">0</span><span class="token punctuation">,</span> </span>
<span class="line">            <span class="token constant">ui</span><span class="token punctuation">.</span>secondaryMetricConfiguration<span class="token punctuation">.</span>alpha<span class="token punctuation">,</span> </span>
<span class="line">            <span class="token constant">HorizontalAlign</span><span class="token punctuation">.</span>Left<span class="token punctuation">,</span> </span>
<span class="line">            <span class="token boolean">true</span></span>
<span class="line">        <span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line">        <span class="token constant">ui</span><span class="token punctuation">.</span>secondaryMetricValue<span class="token punctuation">.</span><span class="token keyword">set</span><span class="token punctuation">(</span></span>
<span class="line">            secondaryMetricValueX<span class="token punctuation">,</span> secondaryMetricValueY<span class="token punctuation">,</span> </span>
<span class="line">            <span class="token number">1</span><span class="token punctuation">,</span> <span class="token number">1</span><span class="token punctuation">,</span> </span>
<span class="line">            secondaryMetricValueWidth<span class="token punctuation">,</span> secondaryMetricValueHeight<span class="token punctuation">,</span> </span>
<span class="line">            <span class="token number">0</span><span class="token punctuation">,</span> </span>
<span class="line">            <span class="token constant">ui</span><span class="token punctuation">.</span>secondaryMetricConfiguration<span class="token punctuation">.</span>alpha<span class="token punctuation">,</span> </span>
<span class="line">            <span class="token constant">HorizontalAlign</span><span class="token punctuation">.</span>Right<span class="token punctuation">,</span> </span>
<span class="line">            <span class="token boolean">false</span></span>
<span class="line">        <span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line">        </span>
<span class="line">        <span class="token comment">// ...</span></span>
<span class="line">        <span class="token keyword">return</span> <span class="token constant">VOID</span><span class="token punctuation">;</span>    </span>
<span class="line">    <span class="token punctuation">}</span></span>
<span class="line"></span>
<span class="line">    <span class="token comment">// ...</span></span>
<span class="line"><span class="token punctuation">}</span><span class="token punctuation">;</span></span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,14),c=[t];function l(o,i){return a(),s("div",null,c)}const r=n(e,[["render",l],["__file","16. life.html.vue"]]),k=JSON.parse('{"path":"/sonolus.h/play/16.%20life.html","title":"生命值","lang":"zh-CN","frontmatter":{},"headers":[{"level":2,"title":"生命值增长原型","slug":"生命值增长原型","link":"#生命值增长原型","children":[]},{"level":2,"title":"连击生命值增长","slug":"连击生命值增长","link":"#连击生命值增长","children":[]},{"level":2,"title":"次要指标 UI","slug":"次要指标-ui","link":"#次要指标-ui","children":[]}],"git":{"updatedTime":1720364737000,"contributors":[{"name":"LittleYang0531","email":"“littleyang0531@outlook.com”","commits":1}]},"filePathRelative":"sonolus.h/play/16. life.md"}');export{r as comp,k as data};
