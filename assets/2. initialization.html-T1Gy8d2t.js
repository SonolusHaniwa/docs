import{_ as n,c as s,o as a,e}from"./app-C90AFxgH.js";const p={},l=e(`<h1 id="初始化" tabindex="-1"><a class="header-anchor" href="#初始化"><span>初始化</span></a></h1><p>在本章中，您将会学习到:</p><ul><li>什么是初始化模式</li><li>如何编写初始化实体</li></ul><h2 id="初始化模式" tabindex="-1"><a class="header-anchor" href="#初始化模式"><span>初始化模式</span></a></h2><p>对于一个关卡来说，计算出一些全局变量并且供其他实体使用是很普遍的。</p><p>举个例子，舞台区域可能会随着屏幕的宽高比的变化而变化，显然如果我们在每次需要时都去计算一次是很不可取的。因此，我们可以在关卡开始前只计算一次，并将其存储在如 <code>LevelData</code> 的全局区块中即可。</p><p>我们创建初始化模式是为了实现这样一个目的: 有且仅有一个 <code>Initialization</code> 实体会在第一个被生成并且在合适的时机完成初始化工作，其他实体只会在 <code>Initialization</code> 实体销毁后生成。</p><h2 id="生成逻辑" tabindex="-1"><a class="header-anchor" href="#生成逻辑"><span>生成逻辑</span></a></h2><p>对于我们的 <code>Initialization</code> 实体来说，它的生成逻辑很简单: 我们只需要确保它是第一个立即生成的即可。</p><p>为了保证它是第一个生成的，我们只需要保证它的 <code>spawnOrder</code> 回调函数的返回值小于其他实体的即可。</p><p>在此例中，我们使用 <code>0</code> 来当作它的返回值。</p><div class="language-cpp line-numbers-mode" data-highlighter="prismjs" data-ext="cpp" data-title="/engine/play/Initialization.cpp"><pre class="language-cpp"><code><span class="line"><span class="token keyword">class</span> <span class="token class-name">Initialization</span><span class="token operator">:</span> <span class="token base-clause"><span class="token keyword">public</span> <span class="token class-name">Archetype</span></span> <span class="token punctuation">{</span></span>
<span class="line">    <span class="token comment">// ...</span></span>
<span class="line"></span>
<span class="line">    <span class="token keyword">SonolusApi</span> <span class="token function">spawnOrder</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span> <span class="token keyword">return</span> <span class="token number">0</span><span class="token punctuation">;</span> <span class="token punctuation">}</span></span>
<span class="line"></span>
<span class="line">    <span class="token comment">// ...</span></span>
<span class="line"><span class="token punctuation">}</span><span class="token punctuation">;</span></span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="初始化负载" tabindex="-1"><a class="header-anchor" href="#初始化负载"><span>初始化负载</span></a></h2><p>初始化负载可以被放在实体生命周期的任何时期，特别是在 <code>preprocess</code> 和 <code>updateSequential</code> 回调函数中。</p><p>就目前而言，我们并没有任何初始化负载需要在 <code>updateSequential</code> 回调函数中执行。</p><p><code>preprocess</code> 回调函数通常被用在关卡开始前，设置变换，游玩 UI，得分机制，生命机制等。我们需要编写设置菜单 UI 的代码便于我们能够退出开发关卡，下面是使用示例:</p><div class="language-cpp line-numbers-mode" data-highlighter="prismjs" data-ext="cpp" data-title="/engine/play/Initialization.cpp"><pre class="language-cpp"><code><span class="line"><span class="token keyword">class</span> <span class="token class-name">Initialization</span><span class="token operator">:</span> <span class="token base-clause"><span class="token keyword">public</span> <span class="token class-name">Archetype</span></span> <span class="token punctuation">{</span></span>
<span class="line">    <span class="token comment">// ...</span></span>
<span class="line"></span>
<span class="line">    <span class="token keyword">SonolusApi</span> <span class="token function">preprocess</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span></span>
<span class="line">        <span class="token keyword">FUNCBEGIN</span></span>
<span class="line">        <span class="token keyword">let</span> menuWidth <span class="token operator">=</span> <span class="token number">0.15</span> <span class="token operator">*</span> <span class="token constant">ui</span><span class="token punctuation">.</span>menuConfiguration<span class="token punctuation">.</span>scale<span class="token punctuation">;</span></span>
<span class="line">        <span class="token keyword">let</span> menuHeight <span class="token operator">=</span> <span class="token number">0.15</span> <span class="token operator">*</span> <span class="token constant">ui</span><span class="token punctuation">.</span>menuConfiguration<span class="token punctuation">.</span>scale<span class="token punctuation">;</span></span>
<span class="line">        <span class="token keyword">let</span> menuX <span class="token operator">=</span> <span class="token constant">screen</span><span class="token punctuation">.</span>r <span class="token operator">-</span> <span class="token number">0.05</span><span class="token punctuation">;</span></span>
<span class="line">        <span class="token keyword">let</span> menuY <span class="token operator">=</span> <span class="token constant">screen</span><span class="token punctuation">.</span>t <span class="token operator">-</span> <span class="token number">0.05</span><span class="token punctuation">;</span></span>
<span class="line">        <span class="token constant">ui</span><span class="token punctuation">.</span>menu<span class="token punctuation">.</span><span class="token keyword">set</span><span class="token punctuation">(</span></span>
<span class="line">            menuX<span class="token punctuation">,</span> menuY<span class="token punctuation">,</span>               <span class="token comment">// 菜单按钮位置</span></span>
<span class="line">            <span class="token number">1</span><span class="token punctuation">,</span> <span class="token number">1</span><span class="token punctuation">,</span>                       <span class="token comment">// 菜单按钮锚点坐标</span></span>
<span class="line">            menuWidth<span class="token punctuation">,</span> menuHeight<span class="token punctuation">,</span>      <span class="token comment">// 菜单按钮大小</span></span>
<span class="line">            <span class="token number">0</span><span class="token punctuation">,</span>                          <span class="token comment">// 旋转角度</span></span>
<span class="line">            <span class="token constant">ui</span><span class="token punctuation">.</span>menuConfiguration<span class="token punctuation">.</span>alpha<span class="token punctuation">,</span> <span class="token comment">// 透明度</span></span>
<span class="line">            <span class="token constant">HorizontalAlign</span><span class="token punctuation">.</span>Center<span class="token punctuation">,</span>     <span class="token comment">// 对齐方式</span></span>
<span class="line">            <span class="token boolean">true</span>                        <span class="token comment">// 是否需要背景</span></span>
<span class="line">        <span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line">        <span class="token keyword">return</span> <span class="token constant">VOID</span><span class="token punctuation">;</span></span>
<span class="line">    <span class="token punctuation">}</span></span>
<span class="line"></span>
<span class="line">    <span class="token comment">// ...</span></span>
<span class="line"><span class="token punctuation">}</span><span class="token punctuation">;</span></span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="销毁" tabindex="-1"><a class="header-anchor" href="#销毁"><span>销毁</span></a></h2><p>销毁 <code>Initialization</code> 实体与销毁其他实体是一样的: 只需要将 <code>EntityDespawn</code> 区块上的第 <code>0</code> 个值设置为 <code>true</code>，这个实体就会在当前帧结束后自动销毁。</p><p>在此例中，我们只需要在 <code>updateSequential</code> 回调函数中编写即可。</p><div class="language-cpp line-numbers-mode" data-highlighter="prismjs" data-ext="cpp" data-title="/engine/play/Initialization.cpp"><pre class="language-cpp"><code><span class="line"><span class="token keyword">class</span> <span class="token class-name">Initialization</span><span class="token operator">:</span> <span class="token base-clause"><span class="token keyword">public</span> <span class="token class-name">Archetype</span></span> <span class="token punctuation">{</span></span>
<span class="line">    <span class="token comment">// ...</span></span>
<span class="line"></span>
<span class="line">    <span class="token keyword">SonolusApi</span> <span class="token function">updateSequential</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span></span>
<span class="line">        <span class="token keyword">FUNCBEGIN</span></span>
<span class="line">        <span class="token constant">EntityDespawn</span><span class="token punctuation">.</span><span class="token keyword">set</span><span class="token punctuation">(</span><span class="token number">0</span><span class="token punctuation">,</span> <span class="token boolean">true</span><span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line">        <span class="token keyword">return</span> <span class="token constant">VOID</span><span class="token punctuation">;</span></span>
<span class="line">    <span class="token punctuation">}</span></span>
<span class="line">    </span>
<span class="line">    <span class="token comment">// ...</span></span>
<span class="line"><span class="token punctuation">}</span><span class="token punctuation">;</span></span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,21),t=[l];function c(i,o){return a(),s("div",null,t)}const d=n(p,[["render",c],["__file","2. initialization.html.vue"]]),r=JSON.parse('{"path":"/sonolus.h/play/2.%20initialization.html","title":"初始化","lang":"zh-CN","frontmatter":{},"headers":[{"level":2,"title":"初始化模式","slug":"初始化模式","link":"#初始化模式","children":[]},{"level":2,"title":"生成逻辑","slug":"生成逻辑","link":"#生成逻辑","children":[]},{"level":2,"title":"初始化负载","slug":"初始化负载","link":"#初始化负载","children":[]},{"level":2,"title":"销毁","slug":"销毁","link":"#销毁","children":[]}],"git":{"updatedTime":1720104934000,"contributors":[{"name":"LittleYang0531","email":"“littleyang0531@outlook.com”","commits":1}]},"filePathRelative":"sonolus.h/play/2. initialization.md"}');export{d as comp,r as data};
