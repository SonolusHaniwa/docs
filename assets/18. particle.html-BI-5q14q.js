import{_ as n,c as s,o as a,e}from"./app-DLMeNV68.js";const p={},t=e(`<h1 id="粒子效果" tabindex="-1"><a class="header-anchor" href="#粒子效果"><span>粒子效果</span></a></h1><p>在本章中，您将会学习到:</p><ul><li>粒子效果的声明</li><li>在 <code>Note</code> 原型中使用粒子效果</li></ul><h2 id="粒子效果-1" tabindex="-1"><a class="header-anchor" href="#粒子效果-1"><span>粒子效果</span></a></h2><p>就像皮肤精灵一样，我们需要通过引用它们的名字来声明我们想要访问的粒子效果。</p><div class="language-cpp line-numbers-mode" data-highlighter="prismjs" data-ext="cpp" data-title="/engine/particles.cpp"><pre><code><span class="line"><span class="token keyword">class</span> <span class="token class-name">Effects</span> <span class="token punctuation">{</span></span>
<span class="line">    <span class="token keyword">public</span><span class="token operator">:</span></span>
<span class="line"></span>
<span class="line">    <span class="token keyword">int</span> note <span class="token operator">=</span> <span class="token number">0</span><span class="token punctuation">;</span></span>
<span class="line"><span class="token punctuation">}</span>Effects<span class="token punctuation">;</span></span>
<span class="line"></span>
<span class="line"><span class="token keyword">auto</span> particles <span class="token operator">=</span> defineParticles<span class="token operator">&lt;</span><span class="token keyword">class</span> <span class="token class-name">Effects</span><span class="token operator">&gt;</span><span class="token punctuation">(</span><span class="token punctuation">{</span></span>
<span class="line">    <span class="token punctuation">{</span> <span class="token constant">ParticleEffectName</span><span class="token punctuation">.</span>NoteCircularTapCyan<span class="token punctuation">,</span> Effects<span class="token punctuation">.</span>note <span class="token punctuation">}</span></span>
<span class="line"><span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>保存后，将 <code>ParticleData</code> 和 <code>ParticleTexture</code> 复制到 <code>/dist</code> 目录下，重新编译引擎后，Sonolus.h 会自动将粒子效果上传至服务器。</p><h2 id="音符" tabindex="-1"><a class="header-anchor" href="#音符"><span>音符</span></a></h2><p>为了在判定时添加粒子效果，我们需要使用 <code>SpawnParticleEffect</code> 来播放粒子效果。</p><p>让我们将我们的粒子效果设为音符的两倍大小，持续 <code>0.3</code> 秒，并且不循环:</p><div class="language-cpp line-numbers-mode" data-highlighter="prismjs" data-ext="cpp" data-title="/engine/play/Note.cpp"><pre><code><span class="line"><span class="token keyword">class</span> <span class="token class-name">Note</span><span class="token operator">:</span> <span class="token base-clause"><span class="token keyword">public</span> <span class="token class-name">Archetype</span></span> <span class="token punctuation">{</span></span>
<span class="line">    <span class="token comment">// ...</span></span>
<span class="line"></span>
<span class="line">    <span class="token keyword">SonolusApi</span> <span class="token function">touch</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span></span>
<span class="line">        <span class="token keyword">FUNCBEGIN</span></span>
<span class="line">        <span class="token comment">// ...</span></span>
<span class="line"></span>
<span class="line">        <span class="token keyword">FOR</span> <span class="token punctuation">(</span>i<span class="token punctuation">,</span> <span class="token number">0</span><span class="token punctuation">,</span> <span class="token constant">touches</span><span class="token punctuation">.</span>size<span class="token punctuation">,</span> <span class="token number">1</span><span class="token punctuation">)</span> <span class="token punctuation">{</span></span>
<span class="line">            <span class="token comment">// ...</span></span>
<span class="line"></span>
<span class="line">            <span class="token keyword">let</span> l <span class="token operator">=</span> <span class="token operator">-</span><span class="token number">1</span> <span class="token operator">*</span> note<span class="token punctuation">.</span>radius<span class="token punctuation">,</span> r <span class="token operator">=</span> note<span class="token punctuation">.</span>radius<span class="token punctuation">;</span></span>
<span class="line">            <span class="token keyword">let</span> b <span class="token operator">=</span> judgeLine<span class="token punctuation">.</span>y <span class="token operator">-</span> note<span class="token punctuation">.</span>radius<span class="token punctuation">,</span> t <span class="token operator">=</span> judgeLine<span class="token punctuation">.</span>y <span class="token operator">+</span> note<span class="token punctuation">.</span>radius<span class="token punctuation">;</span></span>
<span class="line">            <span class="token function">SpawnParticleEffect</span><span class="token punctuation">(</span>Effects<span class="token punctuation">.</span>note<span class="token punctuation">,</span> l<span class="token punctuation">,</span> b<span class="token punctuation">,</span> l<span class="token punctuation">,</span> t<span class="token punctuation">,</span> r<span class="token punctuation">,</span> t<span class="token punctuation">,</span> r<span class="token punctuation">,</span> b<span class="token punctuation">,</span> <span class="token number">0.3</span><span class="token punctuation">,</span> <span class="token boolean">false</span><span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line"></span>
<span class="line">            <span class="token comment">// ...</span></span>
<span class="line">        <span class="token punctuation">}</span> <span class="token keyword">DONE</span></span>
<span class="line">        <span class="token keyword">return</span> <span class="token constant">VOID</span><span class="token punctuation">;</span></span>
<span class="line">    <span class="token punctuation">}</span></span>
<span class="line"></span>
<span class="line">    <span class="token comment">// ...</span></span>
<span class="line"><span class="token punctuation">}</span><span class="token punctuation">;</span></span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,11),l=[t];function c(o,i){return a(),s("div",null,l)}const r=n(p,[["render",c],["__file","18. particle.html.vue"]]),d=JSON.parse('{"path":"/sonolus.h/play/18.%20particle.html","title":"粒子效果","lang":"zh-CN","frontmatter":{},"headers":[{"level":2,"title":"粒子效果","slug":"粒子效果-1","link":"#粒子效果-1","children":[]},{"level":2,"title":"音符","slug":"音符","link":"#音符","children":[]}],"git":{"updatedTime":1720416884000,"contributors":[{"name":"LittleYang0531","email":"“littleyang0531@outlook.com”","commits":2}]},"filePathRelative":"sonolus.h/play/18. particle.md"}');export{r as comp,d as data};