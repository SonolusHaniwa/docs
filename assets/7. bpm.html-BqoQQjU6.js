import{_ as n,c as s,o as a,e as p}from"./app-DLMeNV68.js";const e={},t=p(`<h1 id="bpm-与节拍" tabindex="-1"><a class="header-anchor" href="#bpm-与节拍"><span>BPM 与节拍</span></a></h1><p>在本章中，您将会学习到:</p><ul><li>BPM 与节拍的优势</li><li>如何使用 BPM 与节拍</li><li>重构音符实体</li></ul><h2 id="bpm-与节拍-1" tabindex="-1"><a class="header-anchor" href="#bpm-与节拍-1"><span>BPM 与节拍</span></a></h2><p>目前 <code>Note</code> 原型使用的是以秒为单位的时间，然而那并不是一个节奏游戏谱面的通常做法。通常情况下，每个音符都有一个节拍数，其时间是通过节拍数以及一系列的背景音乐的 BPM(每分钟节拍数) 计算出来的。</p><p>尽管引擎能够存储 BPM 并自行进行转换，但 Sonolus 提供更方便的函数来进行转换。让我们来看一下如何将这项功能移植到我们的引擎中。</p><h2 id="bpm-变化" tabindex="-1"><a class="header-anchor" href="#bpm-变化"><span>BPM 变化</span></a></h2><p>我们首先需要告诉 Sonolus 所有的 BPM 变化。</p><p>通过在关卡数据中使用一系列包含针对 BPM 变化的特殊原型名，针对节拍以及 BPM 值的特殊数据名称的实体列表，这项工作能够很轻松地完成。</p><div class="language-cpp line-numbers-mode" data-highlighter="prismjs" data-ext="cpp" data-title="/convert.h"><pre><code><span class="line"><span class="token keyword">class</span> <span class="token class-name">BpmChangeEntity</span><span class="token operator">:</span> <span class="token base-clause"><span class="token keyword">public</span> <span class="token class-name">LevelEntity</span></span> <span class="token punctuation">{</span></span>
<span class="line">	<span class="token keyword">public</span><span class="token operator">:</span></span>
<span class="line"></span>
<span class="line">	<span class="token function">defineArchetypeName</span><span class="token punctuation">(</span><span class="token string">&quot;#BPM_CHANGE&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line">    <span class="token function">defineLevelDataValueDetailed</span><span class="token punctuation">(</span>beat<span class="token punctuation">,</span> <span class="token string">&quot;#BEAT&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line">    <span class="token function">defineLevelDataValueDetailed</span><span class="token punctuation">(</span>bpm<span class="token punctuation">,</span> <span class="token string">&quot;#BPM&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line"><span class="token punctuation">}</span><span class="token punctuation">;</span></span>
<span class="line"></span>
<span class="line"><span class="token comment">// ...</span></span>
<span class="line"></span>
<span class="line"><span class="token keyword">string</span> <span class="token function">fromTXT</span><span class="token punctuation">(</span><span class="token keyword">string</span> path<span class="token punctuation">)</span> <span class="token punctuation">{</span></span>
<span class="line">    <span class="token comment">// ...</span></span>
<span class="line">    </span>
<span class="line">    BpmChangeEntity bpmChange<span class="token punctuation">;</span> bpmChange<span class="token punctuation">.</span>beat <span class="token operator">=</span> <span class="token number">0</span><span class="token punctuation">;</span> bpmChange<span class="token punctuation">.</span>bpm <span class="token operator">=</span> <span class="token number">120</span><span class="token punctuation">;</span></span>
<span class="line">    levelData<span class="token punctuation">.</span><span class="token function">append</span><span class="token punctuation">(</span>bpmChange<span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">// 插入一个 BpmChange 实体</span></span>
<span class="line"></span>
<span class="line">    <span class="token comment">// ...</span></span>
<span class="line"><span class="token punctuation">}</span></span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>这个实体告诉 Sonolus 在第 <code>0</code> 拍时，BPM 变为了 <code>120</code>。</p><p>注意到我们不需要实现 BPM 变化原型。总的来说，任何带有没有实现的原型名的实体会被忽略，因此我们可以安全地使用它们在我们的关卡中存储元数据。</p><h2 id="重构" tabindex="-1"><a class="header-anchor" href="#重构"><span>重构</span></a></h2><p>有了 BPM 变化的设置，我们可以重构 <code>Note</code> 原型，以使用关卡数据中的节拍而不是时间:</p><div class="language-cpp line-numbers-mode" data-highlighter="prismjs" data-ext="cpp" data-title="/convert.h"><pre><code><span class="line"><span class="token comment">// ...</span></span>
<span class="line"></span>
<span class="line"><span class="token keyword">class</span> <span class="token class-name">NoteEntity</span><span class="token operator">:</span> <span class="token base-clause"><span class="token keyword">public</span> <span class="token class-name">LevelEntity</span></span> <span class="token punctuation">{</span></span>
<span class="line">    <span class="token keyword">public</span><span class="token operator">:</span></span>
<span class="line"></span>
<span class="line">    <span class="token function">defineArchetypeName</span><span class="token punctuation">(</span><span class="token string">&quot;My Note&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line">    <span class="token function">defineLevelDataValue</span><span class="token punctuation">(</span>beat<span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line"><span class="token punctuation">}</span><span class="token punctuation">;</span></span>
<span class="line"></span>
<span class="line"><span class="token comment">// ...</span></span>
<span class="line"><span class="token keyword">string</span> <span class="token function">fromTXT</span><span class="token punctuation">(</span><span class="token keyword">string</span> path<span class="token punctuation">)</span> <span class="token punctuation">{</span></span>
<span class="line">    <span class="token comment">// ...</span></span>
<span class="line"></span>
<span class="line">    <span class="token keyword">ifstream</span> <span class="token function">fin</span><span class="token punctuation">(</span>path<span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line">    <span class="token keyword">while</span> <span class="token punctuation">(</span><span class="token operator">!</span>fin<span class="token punctuation">.</span><span class="token function">eof</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span> <span class="token punctuation">{</span></span>
<span class="line">        <span class="token keyword">double</span> beat<span class="token punctuation">;</span></span>
<span class="line">        fin <span class="token operator">&gt;&gt;</span> beat<span class="token punctuation">;</span> <span class="token comment">// 读取节拍</span></span>
<span class="line"></span>
<span class="line">        NoteEntity note<span class="token punctuation">;</span> <span class="token comment">// 定义一个 Note 实体</span></span>
<span class="line">        note<span class="token punctuation">.</span>beat <span class="token operator">=</span> beat<span class="token punctuation">;</span> <span class="token comment">// 修改实体数据</span></span>
<span class="line">        levelData<span class="token punctuation">.</span><span class="token function">append</span><span class="token punctuation">(</span>note<span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">// 插入该实体</span></span>
<span class="line">    <span class="token punctuation">}</span></span>
<span class="line">    fin<span class="token punctuation">.</span><span class="token function">close</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line"></span>
<span class="line">    <span class="token comment">// ...</span></span>
<span class="line"><span class="token punctuation">}</span></span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>注意到，在这里我们可以不使用针对节拍的特殊数据名。</p>`,16),l=[t];function c(i,o){return a(),s("div",null,l)}const d=n(e,[["render",c],["__file","7. bpm.html.vue"]]),r=JSON.parse('{"path":"/sonolus.h/play/7.%20bpm.html","title":"BPM 与节拍","lang":"zh-CN","frontmatter":{},"headers":[{"level":2,"title":"BPM 与节拍","slug":"bpm-与节拍-1","link":"#bpm-与节拍-1","children":[]},{"level":2,"title":"BPM 变化","slug":"bpm-变化","link":"#bpm-变化","children":[]},{"level":2,"title":"重构","slug":"重构","link":"#重构","children":[]}],"git":{"updatedTime":1720416884000,"contributors":[{"name":"LittleYang0531","email":"“littleyang0531@outlook.com”","commits":2}]},"filePathRelative":"sonolus.h/play/7. bpm.md"}');export{d as comp,r as data};
