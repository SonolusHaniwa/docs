import{_ as n,c as s,o as a,e}from"./app-ChA0w15D.js";const p={},l=e(`<h1 id="舞台" tabindex="-1"><a class="header-anchor" href="#舞台"><span>舞台</span></a></h1><p>在本章中，您将会学习到:</p><ul><li>什么是皮肤精灵</li><li>如何声明皮肤精灵</li><li>如何绘制判定线</li><li>如何让判定线响应触摸</li></ul><h2 id="皮肤精灵" tabindex="-1"><a class="header-anchor" href="#皮肤精灵"><span>皮肤精灵</span></a></h2><p>一般情况下，引擎无法访问玩家选择的皮肤中的任何精灵。为了使用一个精灵，引擎必须通过引用它的名字来声明它。</p><p>皮肤精灵的名字只是一个字符串，并且每个皮肤都应该包含已知名字的标准精灵。这些标准精灵允许皮肤被用在多种引擎中，并且引擎应该在期望的自定义精灵不存在时，使用标准精灵进行渲染。</p><h2 id="声明" tabindex="-1"><a class="header-anchor" href="#声明"><span>声明</span></a></h2><p>我们的舞台非常简单: 只有一条判定线。由于我们并不使用自定义精灵，因此我们应使用标准判定线精灵:</p><div class="language-cpp line-numbers-mode" data-highlighter="prismjs" data-ext="cpp" data-title="/engine/skins.cpp"><pre class="language-cpp"><code><span class="line"><span class="token keyword">class</span> <span class="token class-name">Sprites</span> <span class="token punctuation">{</span></span>
<span class="line">	<span class="token keyword">public</span><span class="token operator">:</span></span>
<span class="line"></span>
<span class="line">    <span class="token keyword">int</span> judgeLine <span class="token operator">=</span> <span class="token number">0</span><span class="token punctuation">;</span></span>
<span class="line"><span class="token punctuation">}</span>Sprites<span class="token punctuation">;</span></span>
<span class="line"></span>
<span class="line"><span class="token keyword">auto</span> skins <span class="token operator">=</span> defineSkins<span class="token operator">&lt;</span><span class="token keyword">class</span> <span class="token class-name">Sprites</span><span class="token operator">&gt;</span><span class="token punctuation">(</span><span class="token punctuation">{</span></span>
<span class="line">    <span class="token punctuation">{</span> <span class="token constant">SkinSpriteName</span><span class="token punctuation">.</span>JudgmentLine<span class="token punctuation">,</span> Sprites<span class="token punctuation">.</span>judgeLine <span class="token punctuation">}</span></span>
<span class="line"><span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>保存后，在 <code>/skins/</code> 中放入对应的精灵图片，并将其命名为 <code>#JUDGMENT_LINE.png</code>，这样在编译引擎时，Sonolus.h 会自动将判定线图片打包成皮肤上传至服务器。</p><h2 id="绘制" tabindex="-1"><a class="header-anchor" href="#绘制"><span>绘制</span></a></h2><p>在绘制前，让我们先初始化一个 <code>Stage</code> 原型:</p><div class="language-cpp line-numbers-mode" data-highlighter="prismjs" data-ext="cpp" data-title="/engine/play/Initialization.cpp"><pre class="language-cpp"><code><span class="line"><span class="token keyword">class</span> <span class="token class-name">Stage</span><span class="token operator">:</span> <span class="token base-clause"><span class="token keyword">public</span> <span class="token class-name">Archetype</span></span> <span class="token punctuation">{</span></span>
<span class="line">    <span class="token keyword">public</span><span class="token operator">:</span></span>
<span class="line"></span>
<span class="line">    <span class="token keyword">static</span> <span class="token keyword">constexpr</span> <span class="token keyword">const</span> <span class="token keyword">char</span><span class="token operator">*</span> name <span class="token operator">=</span> <span class="token string">&quot;My Stage&quot;</span><span class="token punctuation">;</span></span>
<span class="line"></span>
<span class="line"><span class="token punctuation">}</span><span class="token punctuation">;</span></span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><div class="language-diff line-numbers-mode" data-highlighter="prismjs" data-ext="diff" data-title="/engine/engine.cpp"><pre class="language-diff"><code><span class="line">// ...</span>
<span class="line"></span>
<span class="line">#ifdef play</span>
<span class="line">using namespace playData;</span>
<span class="line">#include&quot;play/Initialization.cpp&quot;</span>
<span class="line"><span class="token inserted-sign inserted"><span class="token prefix inserted">+</span><span class="token line"> #include&quot;play/Stage.cpp&quot;</span>
<span class="line"></span></span>#elif tutorial</span>
<span class="line"></span>
<span class="line">// ...</span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><div class="language-diff line-numbers-mode" data-highlighter="prismjs" data-ext="diff" data-title="/main.cpp"><pre class="language-diff"><code><span class="line">// ...</span>
<span class="line"></span>
<span class="line">#ifdef play</span>
<span class="line"><span class="token unchanged"><span class="token prefix unchanged"> </span><span class="token line">   buffer data, configuration;</span>
<span class="line"></span><span class="token prefix unchanged"> </span><span class="token line">   build&lt;</span>
<span class="line"></span><span class="token prefix unchanged"> </span><span class="token line">       // Replace with your archetypes here</span>
<span class="line"></span><span class="token prefix unchanged"> </span><span class="token line">       Initialization,</span>
<span class="line"></span></span><span class="token inserted-sign inserted"><span class="token prefix inserted">+</span><span class="token line">       Stage</span>
<span class="line"></span></span><span class="token unchanged"><span class="token prefix unchanged"> </span><span class="token line">   &gt;(configuration, data);</span>
<span class="line"></span></span></span>
<span class="line">// ...</span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>让我们定义，我们设想的判定线的宽度只有音符半径的 1 / 4，其绘制非常简单:</p><div class="language-cpp line-numbers-mode" data-highlighter="prismjs" data-ext="cpp" data-title="/engine/play/Stage.cpp"><pre class="language-cpp"><code><span class="line"><span class="token keyword">class</span> <span class="token class-name">Stage</span><span class="token operator">:</span> <span class="token base-clause"><span class="token keyword">public</span> <span class="token class-name">Archetype</span></span> <span class="token punctuation">{</span></span>
<span class="line">    <span class="token comment">// ...</span></span>
<span class="line"></span>
<span class="line">    <span class="token keyword">SonolusApi</span> <span class="token function">updateParallel</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span></span>
<span class="line">        <span class="token keyword">FUNCBEGIN</span></span>
<span class="line">        <span class="token keyword">let</span> l <span class="token operator">=</span> judgeLine<span class="token punctuation">.</span>l<span class="token punctuation">;</span></span>
<span class="line">        <span class="token keyword">let</span> r <span class="token operator">=</span> judgeLine<span class="token punctuation">.</span>r<span class="token punctuation">;</span></span>
<span class="line">        <span class="token keyword">let</span> t <span class="token operator">=</span> judgeLine<span class="token punctuation">.</span>y <span class="token operator">+</span> note<span class="token punctuation">.</span>radius <span class="token operator">/</span> <span class="token number">4</span><span class="token punctuation">;</span></span>
<span class="line">        <span class="token keyword">let</span> b <span class="token operator">=</span> judgeLine<span class="token punctuation">.</span>y <span class="token operator">-</span> note<span class="token punctuation">.</span>radius <span class="token operator">/</span> <span class="token number">4</span><span class="token punctuation">;</span></span>
<span class="line">        <span class="token function">Draw</span><span class="token punctuation">(</span>Sprites<span class="token punctuation">.</span>judgeLine<span class="token punctuation">,</span> l<span class="token punctuation">,</span> b<span class="token punctuation">,</span> l<span class="token punctuation">,</span> t<span class="token punctuation">,</span> r<span class="token punctuation">,</span> t<span class="token punctuation">,</span> r<span class="token punctuation">,</span> b<span class="token punctuation">,</span> <span class="token number">0</span><span class="token punctuation">,</span> <span class="token number">1</span><span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line">        <span class="token keyword">return</span> <span class="token constant">VOID</span><span class="token punctuation">;</span></span>
<span class="line">    <span class="token punctuation">}</span></span>
<span class="line"></span>
<span class="line">    <span class="token comment">// ...</span></span>
<span class="line"><span class="token punctuation">}</span><span class="token punctuation">;</span></span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="响应触摸" tabindex="-1"><a class="header-anchor" href="#响应触摸"><span>响应触摸</span></a></h2><p>让我们改进我们的判定线，使其能够响应我们的触摸:</p><div class="language-cpp line-numbers-mode" data-highlighter="prismjs" data-ext="cpp" data-title="/engine/play/Stage.cpp"><pre class="language-cpp"><code><span class="line"><span class="token keyword">class</span> <span class="token class-name">Stage</span><span class="token operator">:</span> <span class="token base-clause"><span class="token keyword">public</span> <span class="token class-name">Archetype</span></span> <span class="token punctuation">{</span></span>
<span class="line">    <span class="token comment">// ...</span></span>
<span class="line"></span>
<span class="line">    <span class="token keyword">SonolusApi</span> <span class="token function">updateParallel</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span></span>
<span class="line">        <span class="token keyword">FUNCBEGIN</span></span>
<span class="line">        <span class="token comment">// ...</span></span>
<span class="line">        </span>
<span class="line">        <span class="token function">Draw</span><span class="token punctuation">(</span>Sprites<span class="token punctuation">.</span>judgeLine<span class="token punctuation">,</span> l<span class="token punctuation">,</span> b<span class="token punctuation">,</span> l<span class="token punctuation">,</span> t<span class="token punctuation">,</span> r<span class="token punctuation">,</span> t<span class="token punctuation">,</span> r<span class="token punctuation">,</span> b<span class="token punctuation">,</span> <span class="token number">0</span><span class="token punctuation">,</span> <span class="token function">If</span><span class="token punctuation">(</span><span class="token constant">touches</span><span class="token punctuation">.</span><span class="token function">size</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">,</span> <span class="token number">1</span><span class="token punctuation">,</span> <span class="token number">0.5</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line">        <span class="token keyword">return</span> <span class="token constant">VOID</span><span class="token punctuation">;</span></span>
<span class="line">    <span class="token punctuation">}</span></span>
<span class="line"></span>
<span class="line">    <span class="token comment">// ...</span></span>
<span class="line"><span class="token punctuation">}</span></span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,20),t=[l];function i(c,o){return a(),s("div",null,t)}const d=n(p,[["render",i],["__file","5. stage.html.vue"]]),r=JSON.parse('{"path":"/sonolus.h/play/5.%20stage.html","title":"舞台","lang":"zh-CN","frontmatter":{},"headers":[{"level":2,"title":"皮肤精灵","slug":"皮肤精灵","link":"#皮肤精灵","children":[]},{"level":2,"title":"声明","slug":"声明","link":"#声明","children":[]},{"level":2,"title":"绘制","slug":"绘制","link":"#绘制","children":[]},{"level":2,"title":"响应触摸","slug":"响应触摸","link":"#响应触摸","children":[]}],"git":{"updatedTime":1720416884000,"contributors":[{"name":"LittleYang0531","email":"“littleyang0531@outlook.com”","commits":4}]},"filePathRelative":"sonolus.h/play/5. stage.md"}');export{d as comp,r as data};
