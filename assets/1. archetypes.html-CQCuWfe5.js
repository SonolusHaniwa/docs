import{_ as n,c as s,o as a,e}from"./app-vD4oyv4I.js";const p={},t=e(`<h1 id="原型和实体" tabindex="-1"><a class="header-anchor" href="#原型和实体"><span>原型和实体</span></a></h1><p>在本章中，您将会学习到:</p><ul><li>原型的概念</li><li>编写第一个原型</li><li>实体的概念</li></ul><h2 id="原型" tabindex="-1"><a class="header-anchor" href="#原型"><span>原型</span></a></h2><p>原型是一种由引擎定义的实体的抽象概念。</p><p>在本章中，我们的引擎将会有以下四种原型: <code>Initialization</code>, <code>InputManager</code>, <code>Stage</code> 以及 <code>Note</code>。其中，<code>Initialization</code> 负责对关卡进行初始化; <code>InputManager</code> 负责管理用户输入; <code>Stage</code> 原型负责管理用户与舞台的交互以及舞台渲染; 最后，<code>Hote</code> 负责管理用户与音符的交互以及音符的渲染。</p><p>注意到一种原型代表着许多实体的抽象概念。比如说，在一个关卡中可能有 <code>100</code> 个音符，它们在某些地方有所不同(比如生成时间不同或者击打时间不同)，但它们都属于 <code>Note</code> 原型。</p><p>在面向对象的编程语言中，一种原型由类来表示。</p><p>使用 Sonolus.h，一种原型由 C++ 类来表示，例如 <code>Stage</code> 类的代码如下:</p><div class="language-cpp line-numbers-mode" data-highlighter="prismjs" data-ext="cpp" data-title="/engine/play/Stage.cpp"><pre class="language-cpp"><code><span class="line"><span class="token keyword">class</span> <span class="token class-name">Stage</span><span class="token operator">:</span> <span class="token base-clause"><span class="token keyword">public</span> <span class="token class-name">Archetype</span></span> <span class="token punctuation">{</span></span>
<span class="line">    <span class="token keyword">public</span><span class="token operator">:</span></span>
<span class="line"></span>
<span class="line">    <span class="token keyword">static</span> <span class="token keyword">constexpr</span> <span class="token keyword">const</span> <span class="token keyword">char</span><span class="token operator">*</span> name <span class="token operator">=</span> <span class="token string">&quot;Stage&quot;</span><span class="token punctuation">;</span> <span class="token comment">// 设置原型名</span></span>
<span class="line">    <span class="token keyword">bool</span> hasInput <span class="token operator">=</span> <span class="token boolean">false</span><span class="token punctuation">;</span></span>
<span class="line"></span>
<span class="line">    <span class="token keyword">SonolusApi</span> <span class="token function">spawnOrder</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span> <span class="token keyword">return</span> <span class="token number">1</span><span class="token punctuation">;</span> <span class="token punctuation">}</span></span>
<span class="line"></span>
<span class="line">    <span class="token keyword">SonolusApi</span> <span class="token function">shouldSpawn</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span> </span>
<span class="line">        <span class="token keyword">return</span> <span class="token constant">EntityInfoArray</span><span class="token punctuation">[</span><span class="token number">0</span><span class="token punctuation">]</span><span class="token punctuation">.</span><span class="token function">get</span><span class="token punctuation">(</span><span class="token number">2</span><span class="token punctuation">)</span> <span class="token operator">==</span> <span class="token constant">EntityState</span><span class="token punctuation">.</span>Despawned<span class="token punctuation">;</span></span>
<span class="line">    <span class="token punctuation">}</span></span>
<span class="line"></span>
<span class="line">    <span class="token keyword">SonolusApi</span> <span class="token function">updateParallel</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span></span>
<span class="line">        <span class="token keyword">FUNCBEGIN</span></span>
<span class="line">        <span class="token function">Debuglog</span><span class="token punctuation">(</span><span class="token constant">times</span><span class="token punctuation">.</span>now<span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line">        <span class="token keyword">return</span> <span class="token constant">VOID</span><span class="token punctuation">;</span></span>
<span class="line">    <span class="token punctuation">}</span></span>
<span class="line"><span class="token punctuation">}</span><span class="token punctuation">;</span></span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="实体" tabindex="-1"><a class="header-anchor" href="#实体"><span>实体</span></a></h2><p>实体是由关卡定义的原型的示例。</p><p>不同的关卡可能使用相同的引擎，不同的玩法是由不同的实体定义的。举个例子，一个关卡可能有一个 <code>Initialization</code> 实体，一个 <code>Stage</code> 实体，以及 50 个 <code>Note</code> 实体; 而另一个关卡除了有 100 个 <code>Note</code> 实体外，与前一个关卡几乎相同。</p><p>在面向对象的编程语言中，一个实体是类的一个实例。</p><p>Sonolus.h 与官方提供的 Sonolus.js 相比，不仅能够编写引擎，而且还能够创建测试关卡，以及引擎所需的全部资源(粒子效果除外)，这些都会在后面的章节中一一讲到。</p>`,15),o=[t];function c(l,i){return a(),s("div",null,o)}const d=n(p,[["render",c],["__file","1. archetypes.html.vue"]]),r=JSON.parse('{"path":"/sonolus.h/play/1.%20archetypes.html","title":"原型和实体","lang":"zh-CN","frontmatter":{},"headers":[{"level":2,"title":"原型","slug":"原型","link":"#原型","children":[]},{"level":2,"title":"实体","slug":"实体","link":"#实体","children":[]}],"git":{"updatedTime":1720451095000,"contributors":[{"name":"LittleYang0531","email":"“littleyang0531@outlook.com”","commits":3}]},"filePathRelative":"sonolus.h/play/1. archetypes.md"}');export{d as comp,r as data};
