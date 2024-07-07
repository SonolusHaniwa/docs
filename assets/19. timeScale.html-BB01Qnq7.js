import{_ as n,c as s,o as a,e}from"./app-s2P5H-ce.js";const p={},l=e(`<h1 id="倍速" tabindex="-1"><a class="header-anchor" href="#倍速"><span>倍速</span></a></h1><p>在本章中，您将会学习到:</p><ul><li>倍速是什么</li><li>如何设置倍速变化</li><li>如何处理倍速变化</li></ul><h2 id="倍速-1" tabindex="-1"><a class="header-anchor" href="#倍速-1"><span>倍速</span></a></h2><p>倍速是许多节奏游戏的一个普遍功能，其别名为 Soflan。在本章中，我们将要实现倍速功能，准确来说倍速就是让整个谱面变快/变慢。</p><p>由于倍速的流行，Sonolus 也提供了方便的函数来实现倍速。</p><h2 id="倍速变化" tabindex="-1"><a class="header-anchor" href="#倍速变化"><span>倍速变化</span></a></h2><p>就像 BPM 变化一样，Sonolus 也有一个针对倍速变化的特殊原型名以及针对倍速值的特殊原型数据名。让我们添加一系列的倍速变化到我们的测试关卡中:</p><div class="language-cpp line-numbers-mode" data-highlighter="prismjs" data-ext="cpp" data-title="/convert.h"><pre class="language-cpp"><code><span class="line"><span class="token keyword">class</span> <span class="token class-name">TimeScaleEntity</span><span class="token operator">:</span> <span class="token base-clause"><span class="token keyword">public</span> <span class="token class-name">LevelEntity</span></span> <span class="token punctuation">{</span></span>
<span class="line">	<span class="token keyword">public</span><span class="token operator">:</span></span>
<span class="line"></span>
<span class="line">	<span class="token function">defineArchetypeName</span><span class="token punctuation">(</span><span class="token string">&quot;#TIMESCALE_CHANGE&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line">    <span class="token function">defineLevelDataValueDetailed</span><span class="token punctuation">(</span>beat<span class="token punctuation">,</span> <span class="token string">&quot;#BEAT&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line">    <span class="token function">defineLevelDataValueDetailed</span><span class="token punctuation">(</span>timeScale<span class="token punctuation">,</span> <span class="token string">&quot;#TIMESCALE&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line"><span class="token punctuation">}</span><span class="token punctuation">;</span></span>
<span class="line"></span>
<span class="line"><span class="token comment">// ...</span></span>
<span class="line"></span>
<span class="line"><span class="token keyword">string</span> <span class="token function">fromTXT</span><span class="token punctuation">(</span><span class="token keyword">string</span> path<span class="token punctuation">,</span> <span class="token keyword">string</span> timeScalePath<span class="token punctuation">)</span> <span class="token punctuation">{</span></span>
<span class="line">    <span class="token comment">// ...</span></span>
<span class="line">    </span>
<span class="line">    <span class="token keyword">ifstream</span> <span class="token function">fin2</span><span class="token punctuation">(</span>timeScalePath<span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line">    <span class="token keyword">while</span> <span class="token punctuation">(</span><span class="token operator">!</span>fin2<span class="token punctuation">.</span><span class="token function">eof</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span> <span class="token punctuation">{</span></span>
<span class="line">        <span class="token keyword">double</span> beat<span class="token punctuation">,</span> value<span class="token punctuation">;</span></span>
<span class="line">        fin2 <span class="token operator">&gt;&gt;</span> beat <span class="token operator">&gt;&gt;</span> value<span class="token punctuation">;</span> <span class="token comment">// 读取时间与倍速</span></span>
<span class="line"></span>
<span class="line">        TimeScaleEntity timeScale<span class="token punctuation">;</span> <span class="token comment">// 定义一个 TimeScale 实体</span></span>
<span class="line">        timeScale<span class="token punctuation">.</span>beat <span class="token operator">=</span> beat<span class="token punctuation">;</span></span>
<span class="line">        timeScale<span class="token punctuation">.</span>timeScale <span class="token operator">=</span> value<span class="token punctuation">;</span> <span class="token comment">// 修改实体数据</span></span>
<span class="line">        levelData<span class="token punctuation">.</span><span class="token function">append</span><span class="token punctuation">(</span>timeScale<span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">// 插入该实体</span></span>
<span class="line">    <span class="token punctuation">}</span></span>
<span class="line">    fin2<span class="token punctuation">.</span><span class="token function">close</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line"></span>
<span class="line">    <span class="token comment">// ...</span></span>
<span class="line"><span class="token punctuation">}</span></span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><div class="language-cpp line-numbers-mode" data-highlighter="prismjs" data-ext="cpp" data-title="/main.cpp"><pre class="language-cpp"><code><span class="line"><span class="token comment">// ...</span></span>
<span class="line"></span>
<span class="line"><span class="token keyword">int</span> <span class="token function">main</span><span class="token punctuation">(</span><span class="token keyword">int</span> argc<span class="token punctuation">,</span> <span class="token keyword">char</span><span class="token operator">*</span><span class="token operator">*</span> argv<span class="token punctuation">)</span> <span class="token punctuation">{</span></span>
<span class="line">    <span class="token keyword">if</span> <span class="token punctuation">(</span>argc <span class="token operator">&gt;</span> <span class="token number">4</span><span class="token punctuation">)</span> <span class="token punctuation">{</span></span>
<span class="line">        <span class="token keyword">string</span> txtPath <span class="token operator">=</span> argv<span class="token punctuation">[</span><span class="token number">1</span><span class="token punctuation">]</span><span class="token punctuation">,</span> dataPath <span class="token operator">=</span> argv<span class="token punctuation">[</span><span class="token number">2</span><span class="token punctuation">]</span><span class="token punctuation">,</span> timeScalePath <span class="token operator">=</span> argv<span class="token punctuation">[</span><span class="token number">4</span><span class="token punctuation">]</span><span class="token punctuation">;</span> <span class="token comment">// 从命令行获取文件路径</span></span>
<span class="line">        <span class="token keyword">string</span> rawData <span class="token operator">=</span> <span class="token function">fromTXT</span><span class="token punctuation">(</span>txtPath<span class="token punctuation">,</span> timeScalePath<span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">// 转换谱面为 json 格式</span></span>
<span class="line"></span>
<span class="line">        <span class="token comment">// ...</span></span>
<span class="line">    <span class="token punctuation">}</span></span>
<span class="line">    </span>
<span class="line">    <span class="token comment">// ...</span></span>
<span class="line"><span class="token punctuation">}</span></span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><div class="language-json line-numbers-mode" data-highlighter="prismjs" data-ext="json" data-title="/package.json"><pre class="language-json"><code><span class="line"><span class="token punctuation">{</span></span>
<span class="line">  <span class="token comment">// ...</span></span>
<span class="line">  <span class="token property">&quot;level&quot;</span><span class="token operator">:</span> <span class="token punctuation">{</span></span>
<span class="line">    <span class="token comment">// ...</span></span>
<span class="line">    <span class="token property">&quot;generate&quot;</span><span class="token operator">:</span> <span class="token string">&quot;chart.txt timeScale.txt dist/LevelData&quot;</span></span>
<span class="line">    <span class="token comment">// ...</span></span>
<span class="line">  <span class="token punctuation">}</span></span>
<span class="line"><span class="token punctuation">}</span></span>
<span class="line"></span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>新建 <code>/timeScale.txt</code> 文件，每一行两个数字，表示倍速变化的时间与倍速值。引擎编译后，Sonolus.h 会自动转换谱面并上传至服务器。</p><h2 id="按键" tabindex="-1"><a class="header-anchor" href="#按键"><span>按键</span></a></h2><p>为了对 <code>Note</code> 原型实现倍速功能，我们只需要简单地将所有渲染相关逻辑转换为使用倍速时间即可。</p><p>注意到我们并没有改变输入相关逻辑，因为倍速功能应该保持原始的视觉特征并且不应该影响到输入的处理方式。</p><div class="language-cpp line-numbers-mode" data-highlighter="prismjs" data-ext="cpp" data-title="/engine/play/Note.cpp"><pre class="language-cpp"><code><span class="line"><span class="token keyword">class</span> <span class="token class-name">Note</span><span class="token operator">:</span> <span class="token base-clause"><span class="token keyword">public</span> <span class="token class-name">Archetype</span></span> <span class="token punctuation">{</span></span>
<span class="line">    <span class="token comment">// ...</span></span>
<span class="line"></span>
<span class="line">    <span class="token keyword">SonolusApi</span> <span class="token function">preprocess</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span></span>
<span class="line">        <span class="token keyword">FUNCBEGIN</span></span>
<span class="line">        <span class="token comment">// ...</span></span>
<span class="line"></span>
<span class="line">        maxVisualTime <span class="token operator">=</span> <span class="token function">TimeToScaledTime</span><span class="token punctuation">(</span>targetTime<span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line"></span>
<span class="line">        <span class="token comment">// ...</span></span>
<span class="line">        <span class="token keyword">return</span> <span class="token constant">VOID</span><span class="token punctuation">;</span></span>
<span class="line">    <span class="token punctuation">}</span></span>
<span class="line"></span>
<span class="line">    <span class="token comment">// ...</span></span>
<span class="line"></span>
<span class="line">    <span class="token keyword">SonolusApi</span> <span class="token function">shouldSpawn</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span> <span class="token keyword">return</span> <span class="token constant">times</span><span class="token punctuation">.</span>scaled <span class="token operator">&gt;=</span> spawnTime<span class="token punctuation">;</span> <span class="token punctuation">}</span></span>
<span class="line"></span>
<span class="line">    <span class="token comment">// ...</span></span>
<span class="line"></span>
<span class="line">    <span class="token keyword">SonolusApi</span> <span class="token function">updateParallel</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span></span>
<span class="line">        <span class="token keyword">FUNCBEGIN</span></span>
<span class="line">        <span class="token comment">// ...</span></span>
<span class="line"></span>
<span class="line">        <span class="token keyword">let</span> y <span class="token operator">=</span> <span class="token function">Unlerp</span><span class="token punctuation">(</span>minVisualTime<span class="token punctuation">,</span> maxVisualTime<span class="token punctuation">,</span> <span class="token constant">times</span><span class="token punctuation">.</span>scaled<span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line"></span>
<span class="line">        <span class="token comment">// ...</span></span>
<span class="line">        <span class="token keyword">return</span> <span class="token constant">VOID</span><span class="token punctuation">;</span></span>
<span class="line">    <span class="token punctuation">}</span></span>
<span class="line"><span class="token punctuation">}</span><span class="token punctuation">;</span></span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,16),t=[l];function c(i,o){return a(),s("div",null,t)}const d=n(p,[["render",c],["__file","19. timeScale.html.vue"]]),r=JSON.parse('{"path":"/sonolus.h/play/19.%20timeScale.html","title":"倍速","lang":"zh-CN","frontmatter":{},"headers":[{"level":2,"title":"倍速","slug":"倍速-1","link":"#倍速-1","children":[]},{"level":2,"title":"倍速变化","slug":"倍速变化","link":"#倍速变化","children":[]},{"level":2,"title":"按键","slug":"按键","link":"#按键","children":[]}],"git":{"updatedTime":1720364737000,"contributors":[{"name":"LittleYang0531","email":"“littleyang0531@outlook.com”","commits":1}]},"filePathRelative":"sonolus.h/play/19. timeScale.md"}');export{d as comp,r as data};
