import{_ as s,c as n,o as a,e}from"./app-DLMeNV68.js";const p={},l=e(`<h1 id="音符生成" tabindex="-1"><a class="header-anchor" href="#音符生成"><span>音符生成</span></a></h1><p>在本章中，您将会学习到:</p><ul><li>目标时间与生成时间的计算</li><li>音符的生成逻辑</li></ul><h2 id="目标时间" tabindex="-1"><a class="header-anchor" href="#目标时间"><span>目标时间</span></a></h2><p>我们首先需要计算一个音符的目标时间。Sonolus.h 通过使用由 Sonolus 提供的低级函数来提供从节拍直接转为时间的绑定。</p><p>由于目标时间是每个音符实体的不变属性，并且是生成逻辑所需要，因此我们应该在 <code>preprocess</code> 回调函数中计算一次并将其存储在 <code>EntityMemory</code> 区块中。</p><div class="language-cpp line-numbers-mode" data-highlighter="prismjs" data-ext="cpp" data-title="/engine/play/Note.cpp"><pre><code><span class="line"><span class="token keyword">class</span> <span class="token class-name">Note</span><span class="token operator">:</span> <span class="token base-clause"><span class="token keyword">public</span> <span class="token class-name">Archetype</span></span> <span class="token punctuation">{</span></span>
<span class="line">    <span class="token comment">// ...</span></span>
<span class="line"></span>
<span class="line">    <span class="token keyword">Variable</span><span class="token operator">&lt;</span><span class="token constant">EntityMemoryId</span><span class="token operator">&gt;</span> targetTime<span class="token punctuation">;</span></span>
<span class="line"></span>
<span class="line">    <span class="token keyword">SonolusApi</span> <span class="token function">preprocess</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span></span>
<span class="line">        <span class="token keyword">FUNCBEGIN</span></span>
<span class="line">        targetTime <span class="token operator">=</span> <span class="token function">BeatToTime</span><span class="token punctuation">(</span>beat<span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line">        <span class="token keyword">return</span> <span class="token constant">VOID</span><span class="token punctuation">;</span></span>
<span class="line">    <span class="token punctuation">}</span></span>
<span class="line"></span>
<span class="line">    <span class="token comment">// ...</span></span>
<span class="line"><span class="token punctuation">}</span><span class="token punctuation">;</span></span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="生成时间" tabindex="-1"><a class="header-anchor" href="#生成时间"><span>生成时间</span></a></h2><p>现在我们已经计算了目标时间，我们定义，为了给玩家时间准备，我们想要音符在 <code>1</code> 秒前生成并且从上方下落。现在我们可以计算生成时间。</p><p>就像目标时间一样，生成时间也是每个音符实体的不变属性，并且也是生成逻辑所需要的，我们也应该在 <code>preprocess</code> 回调函数中计算一次并将其存储在 <code>LevelMemory</code> 区块中。</p><div class="language-cpp line-numbers-mode" data-highlighter="prismjs" data-ext="cpp" data-title="/engine/play/Note.cpp"><pre><code><span class="line"><span class="token keyword">class</span> <span class="token class-name">Note</span><span class="token operator">:</span> <span class="token base-clause"><span class="token keyword">public</span> <span class="token class-name">Archetype</span></span> <span class="token punctuation">{</span></span>
<span class="line">    <span class="token comment">// ...</span></span>
<span class="line"></span>
<span class="line">    <span class="token keyword">Variable</span><span class="token operator">&lt;</span><span class="token constant">EntityMemoryId</span><span class="token operator">&gt;</span> spawnTime<span class="token punctuation">;</span></span>
<span class="line"></span>
<span class="line">    <span class="token keyword">SonolusApi</span> <span class="token function">preprocess</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span></span>
<span class="line">        <span class="token keyword">FUNCBEGIN</span></span>
<span class="line">        <span class="token comment">// ...</span></span>
<span class="line"></span>
<span class="line">        spawnTime <span class="token operator">=</span> targetTime <span class="token operator">-</span> <span class="token number">1</span><span class="token punctuation">;</span></span>
<span class="line">        <span class="token keyword">return</span> <span class="token constant">VOID</span><span class="token punctuation">;</span></span>
<span class="line">    <span class="token punctuation">}</span></span>
<span class="line"></span>
<span class="line">    <span class="token comment">// ...</span></span>
<span class="line"><span class="token punctuation">}</span><span class="token punctuation">;</span></span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="生成逻辑" tabindex="-1"><a class="header-anchor" href="#生成逻辑"><span>生成逻辑</span></a></h2><p>音符应该根据它们的生成时间而生成，但是我们仍然需要保证音符只会在 <code>Initialization</code> 实体后生成。</p><p>一个很简单的方法就是加 <code>1000</code> 就行了:</p><div class="language-cpp line-numbers-mode" data-highlighter="prismjs" data-ext="cpp" data-title="/engine/play/Note.cpp"><pre><code><span class="line"><span class="token keyword">class</span> <span class="token class-name">Note</span><span class="token operator">:</span> <span class="token base-clause"><span class="token keyword">public</span> <span class="token class-name">Archetype</span></span> <span class="token punctuation">{</span></span>
<span class="line">    <span class="token comment">// ...</span></span>
<span class="line"></span>
<span class="line">    <span class="token keyword">SonolusApi</span> <span class="token function">spawnOrder</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span> <span class="token keyword">return</span> <span class="token number">1000</span> <span class="token operator">+</span> spawnTime<span class="token punctuation">;</span> <span class="token punctuation">}</span></span>
<span class="line"></span>
<span class="line">    <span class="token comment">// ...</span></span>
<span class="line"><span class="token punctuation">}</span><span class="token punctuation">;</span></span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>对于 <code>shouldSpawn</code> 回调函数，其逻辑应该是简单地将当前时间与生成时间进行比较:</p><div class="language-cpp line-numbers-mode" data-highlighter="prismjs" data-ext="cpp" data-title="/engine/play/Note.cpp"><pre><code><span class="line"><span class="token keyword">class</span> <span class="token class-name">Note</span><span class="token operator">:</span> <span class="token base-clause"><span class="token keyword">public</span> <span class="token class-name">Archetype</span></span> <span class="token punctuation">{</span></span>
<span class="line">    <span class="token comment">// ...</span></span>
<span class="line"></span>
<span class="line">    <span class="token keyword">SonolusApi</span> <span class="token function">shouldSpawn</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span> <span class="token keyword">return</span> <span class="token constant">times</span><span class="token punctuation">.</span>now <span class="token operator">&gt;=</span> spawnTime<span class="token punctuation">;</span> <span class="token punctuation">}</span></span>
<span class="line"></span>
<span class="line">    <span class="token comment">// ...</span></span>
<span class="line"><span class="token punctuation">}</span><span class="token punctuation">;</span></span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,17),c=[l];function t(i,o){return a(),n("div",null,c)}const r=s(p,[["render",t],["__file","8. spawn.html.vue"]]),u=JSON.parse('{"path":"/sonolus.h/play/8.%20spawn.html","title":"音符生成","lang":"zh-CN","frontmatter":{},"headers":[{"level":2,"title":"目标时间","slug":"目标时间","link":"#目标时间","children":[]},{"level":2,"title":"生成时间","slug":"生成时间","link":"#生成时间","children":[]},{"level":2,"title":"生成逻辑","slug":"生成逻辑","link":"#生成逻辑","children":[]}],"git":{"updatedTime":1720451095000,"contributors":[{"name":"LittleYang0531","email":"“littleyang0531@outlook.com”","commits":3}]},"filePathRelative":"sonolus.h/play/8. spawn.md"}');export{r as comp,u as data};
