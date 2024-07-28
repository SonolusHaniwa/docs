import{_ as n,c as s,o as a,e as p}from"./app-B1KZEIhd.js";const e={},t=p(`<h1 id="输入判定" tabindex="-1"><a class="header-anchor" href="#输入判定"><span>输入判定</span></a></h1><p>在本章中，您将会学习到:</p><ul><li>什么是输入原型</li><li>如何设置原型输入</li><li>如何设置玩家输入结果</li><li>如何设置判定与连击 UI</li></ul><h2 id="输入原型" tabindex="-1"><a class="header-anchor" href="#输入原型"><span>输入原型</span></a></h2><p>你也许已经注意到了，尽管我们的音符已经功能齐全了，但 Sonolus 仍然不会正常地处理它们: 你可以立即跳过整个关卡，并且在结果页面，所有的数据都会显示 <code>0</code>。</p><p>为了让一个实体被 Sonolus 认为是可击打的音符，它的原型必须有输入。</p><div class="language-cpp line-numbers-mode" data-highlighter="prismjs" data-ext="cpp" data-title="/engine/play/Note.cpp"><pre><code><span class="line"><span class="token keyword">class</span> <span class="token class-name">Note</span><span class="token operator">:</span> <span class="token base-clause"><span class="token keyword">public</span> <span class="token class-name">Archetype</span></span> <span class="token punctuation">{</span></span>
<span class="line">    <span class="token comment">// ...</span></span>
<span class="line"></span>
<span class="line">    <span class="token keyword">bool</span> hasInput <span class="token operator">=</span> <span class="token boolean">true</span><span class="token punctuation">;</span></span>
<span class="line">    </span>
<span class="line">    <span class="token comment">// ...</span></span>
<span class="line"><span class="token punctuation">}</span><span class="token punctuation">;</span></span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>设置后:</p><ul><li>Sonolus 将会知道并会统计所有有输入的实体。</li><li>只有当所有有输入的实体全部销毁后，玩家才会被允许跳过剩下的关卡。</li><li>有输入的实体能够有权访问 <code>EntityInput</code> 区块，以告诉 Sonolus 玩家的表现情况。</li><li>Sonolus 将会基于其输入结果自动计算例如分数，连击数，Perfect 判定数等的数据。</li><li>当有新的输入结果出现时，相关 UI 也会更新并播放。</li><li>特定桶的输入结果也会被用来在结果界面绘制判定图像。</li></ul><h2 id="输入结果" tabindex="-1"><a class="header-anchor" href="#输入结果"><span>输入结果</span></a></h2><p>为了告诉 Sonolus 玩家在一个音符上的表现，我们只需要修改 <code>EntityInput</code> 区块即可。</p><p>对于 <code>EntityInput</code> 区块上的第 <code>0</code> 个值，表示判定结果。我们可以手动将其赋值为 <code>0</code>(Miss)，<code>1</code>(Perfect)，<code>2</code>(Great) 或 <code>3</code>(Good)。然而，更好的方法是直接使用 <code>Judge</code> 辅助函数。</p><p>对于 <code>EntityInput</code> 区块上的第 <code>1</code> 个值，表示输入偏差。我们应该直接将其赋值为以秒为单位的时间差。</p><div class="language-cpp line-numbers-mode" data-highlighter="prismjs" data-ext="cpp" data-title="/engine/play/Note.cpp"><pre><code><span class="line"><span class="token keyword">class</span> <span class="token class-name">Note</span><span class="token operator">:</span> <span class="token base-clause"><span class="token keyword">public</span> <span class="token class-name">Archetype</span></span> <span class="token punctuation">{</span></span>
<span class="line">    <span class="token comment">// ...</span></span>
<span class="line"></span>
<span class="line">    <span class="token keyword">SonolusApi</span> <span class="token function">initialize</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span></span>
<span class="line">        <span class="token keyword">FUNCBEGIN</span></span>
<span class="line">        <span class="token comment">// ...</span></span>
<span class="line"></span>
<span class="line">        EntityInput<span class="token punctuation">.</span><span class="token keyword">set</span><span class="token punctuation">(</span><span class="token number">1</span><span class="token punctuation">,</span> windows<span class="token punctuation">.</span>maxGood<span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line">        <span class="token keyword">return</span> <span class="token constant">VOID</span><span class="token punctuation">;</span></span>
<span class="line">    <span class="token punctuation">}</span></span>
<span class="line"></span>
<span class="line">    <span class="token keyword">SonolusApi</span> <span class="token function">touch</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span></span>
<span class="line">        <span class="token keyword">FUNCBEGIN</span></span>
<span class="line">        <span class="token comment">// ...</span></span>
<span class="line"></span>
<span class="line">        <span class="token keyword">FOR</span> <span class="token punctuation">(</span>i<span class="token punctuation">,</span> <span class="token number">0</span><span class="token punctuation">,</span> <span class="token constant">touches</span><span class="token punctuation">.</span>size<span class="token punctuation">,</span> <span class="token number">1</span><span class="token punctuation">)</span> <span class="token punctuation">{</span></span>
<span class="line">            <span class="token comment">// ...</span></span>
<span class="line"></span>
<span class="line">            EntityInput<span class="token punctuation">.</span><span class="token keyword">set</span><span class="token punctuation">(</span><span class="token number">0</span><span class="token punctuation">,</span> <span class="token function">Judge</span><span class="token punctuation">(</span></span>
<span class="line">                <span class="token constant">touches</span><span class="token punctuation">[</span>i<span class="token punctuation">]</span><span class="token punctuation">.</span>st<span class="token punctuation">,</span> targetTime<span class="token punctuation">,</span> </span>
<span class="line">                windows<span class="token punctuation">.</span>minPerfect<span class="token punctuation">,</span> windows<span class="token punctuation">.</span>maxPerfect<span class="token punctuation">,</span></span>
<span class="line">                windows<span class="token punctuation">.</span>minGreat<span class="token punctuation">,</span> windows<span class="token punctuation">.</span>maxGreat<span class="token punctuation">,</span></span>
<span class="line">                windows<span class="token punctuation">.</span>minGood<span class="token punctuation">,</span> windows<span class="token punctuation">.</span>maxGood</span>
<span class="line">            <span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line">            EntityInput<span class="token punctuation">.</span><span class="token keyword">set</span><span class="token punctuation">(</span><span class="token number">1</span><span class="token punctuation">,</span> <span class="token constant">touches</span><span class="token punctuation">[</span>i<span class="token punctuation">]</span><span class="token punctuation">.</span>st <span class="token operator">-</span> targetTime<span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line"></span>
<span class="line">            <span class="token comment">// ...</span></span>
<span class="line">        <span class="token punctuation">}</span> <span class="token keyword">DONE</span></span>
<span class="line">        <span class="token keyword">return</span> <span class="token constant">VOID</span><span class="token punctuation">;</span></span>
<span class="line">    <span class="token punctuation">}</span></span>
<span class="line"></span>
<span class="line">    <span class="token comment">// ...</span></span>
<span class="line"><span class="token punctuation">}</span><span class="token punctuation">;</span></span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="判定与连击-ui" tabindex="-1"><a class="header-anchor" href="#判定与连击-ui"><span>判定与连击 UI</span></a></h2><p>为了玩家在游玩时有即时的反馈，有一个判定和连击 UI 也是很重要的。</p><p>我们可以在 Initialization 原型中设置它们:</p><div class="language-cpp line-numbers-mode" data-highlighter="prismjs" data-ext="cpp" data-title="/engine/play/Initialization.cpp"><pre><code><span class="line"><span class="token keyword">class</span> <span class="token class-name">Initialization</span><span class="token operator">:</span> <span class="token base-clause"><span class="token keyword">public</span> <span class="token class-name">Archetype</span></span> <span class="token punctuation">{</span></span>
<span class="line">    <span class="token comment">// ...</span></span>
<span class="line"></span>
<span class="line">    <span class="token keyword">SonolusApi</span> <span class="token function">preprocess</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span></span>
<span class="line">        <span class="token keyword">FUNCBEGIN</span></span>
<span class="line">        <span class="token comment">// ...</span></span>
<span class="line"></span>
<span class="line">        <span class="token comment">// 判定指标参数</span></span>
<span class="line">        <span class="token keyword">let</span> judgmentX <span class="token operator">=</span> <span class="token number">0</span><span class="token punctuation">;</span></span>
<span class="line">        <span class="token keyword">let</span> judgmentY <span class="token operator">=</span> <span class="token operator">-</span><span class="token number">0.4</span><span class="token punctuation">;</span></span>
<span class="line">        <span class="token keyword">let</span> judgmentWidth <span class="token operator">=</span> <span class="token number">0</span> <span class="token operator">*</span> <span class="token constant">ui</span><span class="token punctuation">.</span>judgmentConfiguration<span class="token punctuation">.</span>scale<span class="token punctuation">;</span></span>
<span class="line">    	<span class="token keyword">let</span> judgmentHeight <span class="token operator">=</span> <span class="token number">0.15</span> <span class="token operator">*</span> <span class="token constant">ui</span><span class="token punctuation">.</span>judgmentConfiguration<span class="token punctuation">.</span>scale<span class="token punctuation">;</span></span>
<span class="line">        <span class="token constant">ui</span><span class="token punctuation">.</span>judgment<span class="token punctuation">.</span><span class="token keyword">set</span><span class="token punctuation">(</span></span>
<span class="line">            judgmentX<span class="token punctuation">,</span> judgmentY<span class="token punctuation">,</span> </span>
<span class="line">            <span class="token number">0.5</span><span class="token punctuation">,</span> <span class="token number">0</span><span class="token punctuation">,</span> </span>
<span class="line">            judgmentWidth<span class="token punctuation">,</span> judgmentHeight<span class="token punctuation">,</span> </span>
<span class="line">            <span class="token number">0</span><span class="token punctuation">,</span> </span>
<span class="line">            <span class="token constant">ui</span><span class="token punctuation">.</span>judgmentConfiguration<span class="token punctuation">.</span>alpha<span class="token punctuation">,</span> </span>
<span class="line">            <span class="token constant">HorizontalAlign</span><span class="token punctuation">.</span>Center<span class="token punctuation">,</span> </span>
<span class="line">            <span class="token boolean">false</span></span>
<span class="line">        <span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line"></span>
<span class="line">        <span class="token comment">// 连击指标参数</span></span>
<span class="line">        <span class="token keyword">let</span> comboValueX <span class="token operator">=</span> <span class="token constant">screen</span><span class="token punctuation">.</span>r <span class="token operator">*</span> <span class="token number">0.7</span><span class="token punctuation">;</span></span>
<span class="line">        <span class="token keyword">let</span> comboValueY <span class="token operator">=</span> <span class="token number">0</span><span class="token punctuation">;</span></span>
<span class="line">        <span class="token keyword">let</span> comboValueWidth <span class="token operator">=</span> <span class="token number">0</span> <span class="token operator">*</span> <span class="token constant">ui</span><span class="token punctuation">.</span>comboConfiguration<span class="token punctuation">.</span>scale<span class="token punctuation">;</span></span>
<span class="line">        <span class="token keyword">let</span> comboValueHeight <span class="token operator">=</span> <span class="token number">0.2</span> <span class="token operator">*</span> <span class="token constant">ui</span><span class="token punctuation">.</span>comboConfiguration<span class="token punctuation">.</span>scale<span class="token punctuation">;</span></span>
<span class="line">        <span class="token keyword">let</span> comboTextX <span class="token operator">=</span> <span class="token constant">screen</span><span class="token punctuation">.</span>r <span class="token operator">*</span> <span class="token number">0.7</span><span class="token punctuation">;</span></span>
<span class="line">        <span class="token keyword">let</span> comboTextY <span class="token operator">=</span> <span class="token number">0</span><span class="token punctuation">;</span></span>
<span class="line">        <span class="token keyword">let</span> comboTextWidth <span class="token operator">=</span> <span class="token number">0</span> <span class="token operator">*</span> <span class="token constant">ui</span><span class="token punctuation">.</span>comboConfiguration<span class="token punctuation">.</span>scale<span class="token punctuation">;</span></span>
<span class="line">        <span class="token keyword">let</span> comboTextHeight <span class="token operator">=</span> <span class="token number">0.12</span> <span class="token operator">*</span> <span class="token constant">ui</span><span class="token punctuation">.</span>comboConfiguration<span class="token punctuation">.</span>scale<span class="token punctuation">;</span></span>
<span class="line">        <span class="token constant">ui</span><span class="token punctuation">.</span>comboValue<span class="token punctuation">.</span><span class="token keyword">set</span><span class="token punctuation">(</span></span>
<span class="line">            comboValueX<span class="token punctuation">,</span> comboValueY<span class="token punctuation">,</span> </span>
<span class="line">            <span class="token number">0.5</span><span class="token punctuation">,</span> <span class="token number">0</span><span class="token punctuation">,</span> </span>
<span class="line">            comboValueWidth<span class="token punctuation">,</span> comboValueHeight<span class="token punctuation">,</span> </span>
<span class="line">            <span class="token number">0</span><span class="token punctuation">,</span> </span>
<span class="line">            <span class="token constant">ui</span><span class="token punctuation">.</span>comboConfiguration<span class="token punctuation">.</span>alpha<span class="token punctuation">,</span> </span>
<span class="line">            <span class="token constant">HorizontalAlign</span><span class="token punctuation">.</span>Center<span class="token punctuation">,</span> </span>
<span class="line">            <span class="token boolean">false</span></span>
<span class="line">        <span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line">        <span class="token constant">ui</span><span class="token punctuation">.</span>comboText<span class="token punctuation">.</span><span class="token keyword">set</span><span class="token punctuation">(</span></span>
<span class="line">            omboTextX<span class="token punctuation">,</span> comboTextY<span class="token punctuation">,</span> </span>
<span class="line">            <span class="token number">0.5</span><span class="token punctuation">,</span> <span class="token number">1</span><span class="token punctuation">,</span> </span>
<span class="line">            comboTextWidth<span class="token punctuation">,</span> comboTextHeight<span class="token punctuation">,</span> </span>
<span class="line">            <span class="token number">0</span><span class="token punctuation">,</span> </span>
<span class="line">            <span class="token constant">ui</span><span class="token punctuation">.</span>comboConfiguration<span class="token punctuation">.</span>alpha<span class="token punctuation">,</span> </span>
<span class="line">            <span class="token constant">HorizontalAlign</span><span class="token punctuation">.</span>Center<span class="token punctuation">,</span> </span>
<span class="line">            <span class="token boolean">false</span></span>
<span class="line">        <span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line">        <span class="token keyword">return</span> <span class="token constant">VOID</span><span class="token punctuation">;</span>    </span>
<span class="line">    <span class="token punctuation">}</span></span>
<span class="line"></span>
<span class="line">    <span class="token comment">// ...</span></span>
<span class="line"><span class="token punctuation">}</span><span class="token punctuation">;</span></span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>最后，让我们设置我们的判定与连击动画来它们变得更生动:</p><div class="language-cpp line-numbers-mode" data-highlighter="prismjs" data-ext="cpp" data-title="/engine/configuration/ui.cpp"><pre><code><span class="line"><span class="token keyword">bool</span> unused_configurationUI_unused <span class="token operator">=</span> <span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">{</span></span>
<span class="line">    engineConfiguration<span class="token punctuation">.</span><span class="token constant">ui</span> <span class="token operator">=</span> <span class="token punctuation">{</span></span>
<span class="line">        <span class="token comment">// ...</span></span>
<span class="line">        judgmentAnimation<span class="token operator">:</span> <span class="token punctuation">{</span></span>
<span class="line">            <span class="token comment">// ...</span></span>
<span class="line">            alpha<span class="token operator">:</span> <span class="token punctuation">{</span></span>
<span class="line">                from<span class="token operator">:</span> <span class="token number">1</span><span class="token punctuation">,</span></span>
<span class="line">                to<span class="token operator">:</span> <span class="token number">0</span><span class="token punctuation">,</span></span>
<span class="line">                duration<span class="token operator">:</span> <span class="token number">0.2</span><span class="token punctuation">,</span></span>
<span class="line">                ease<span class="token operator">:</span> AnimationEase<span class="token punctuation">.</span>OutCubic</span>
<span class="line">            <span class="token punctuation">}</span></span>
<span class="line">        <span class="token punctuation">}</span><span class="token punctuation">,</span></span>
<span class="line">        comboAnimation<span class="token operator">:</span> <span class="token punctuation">{</span></span>
<span class="line">            scale<span class="token operator">:</span> <span class="token punctuation">{</span></span>
<span class="line">                from<span class="token operator">:</span> <span class="token number">1.2</span><span class="token punctuation">,</span></span>
<span class="line">                to<span class="token operator">:</span> <span class="token number">1</span><span class="token punctuation">,</span></span>
<span class="line">                duration<span class="token operator">:</span> <span class="token number">0.2</span><span class="token punctuation">,</span></span>
<span class="line">                ease<span class="token operator">:</span> AnimationEase<span class="token punctuation">.</span>InCubic</span>
<span class="line">            <span class="token punctuation">}</span><span class="token punctuation">,</span></span>
<span class="line">            <span class="token comment">// ...</span></span>
<span class="line">        <span class="token punctuation">}</span><span class="token punctuation">,</span></span>
<span class="line">        <span class="token comment">// ...</span></span>
<span class="line">    <span class="token punctuation">}</span><span class="token punctuation">;</span></span>
<span class="line">    <span class="token keyword">return</span> <span class="token boolean">true</span><span class="token punctuation">;</span></span>
<span class="line"><span class="token punctuation">}</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line"></span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><div class="custom-container tip"><p class="custom-container-title">TIP</p><p>实际上，您可以不使用 Sonolus 提供的 UI，自行渲染 UI 也是可以的，并且这样做更能提升原作的还原度。</p><p>具体做法实在 <code>Stage</code> 原型中写入能够渲染 UI 的代码。</p><p>但是，<a href="https://github.com/NonSpicyBurrito" target="_blank" rel="noopener noreferrer">Burrito</a>(Sonolus 的开发者) 并不支持这种行为，因为它并不能为玩家提供高度的自定义功能，这违背了 Sonolus 设计的初衷。</p><p>因此，我们建议您在设计 UI 时，权衡 Sonolus 官方 UI 与自行渲染的利弊，根据自己的实际情况进行选择。</p><p>当然，更好的一种方案是在 <code>/engine/configuration/options.cpp</code> 加入是否使用 Sonolus 官方 UI 的选项，以此来达到一举两得的目的。</p></div>`,21),l=[t];function c(o,i){return a(),s("div",null,l)}const d=n(e,[["render",c],["__file","13. judgment.html.vue"]]),r=JSON.parse('{"path":"/sonolus.h/play/13.%20judgment.html","title":"输入判定","lang":"zh-CN","frontmatter":{},"headers":[{"level":2,"title":"输入原型","slug":"输入原型","link":"#输入原型","children":[]},{"level":2,"title":"输入结果","slug":"输入结果","link":"#输入结果","children":[]},{"level":2,"title":"判定与连击 UI","slug":"判定与连击-ui","link":"#判定与连击-ui","children":[]}],"git":{"updatedTime":1720416884000,"contributors":[{"name":"LittleYang0531","email":"“littleyang0531@outlook.com”","commits":2}]},"filePathRelative":"sonolus.h/play/13. judgment.md"}');export{d as comp,r as data};
