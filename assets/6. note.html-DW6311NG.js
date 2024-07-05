import{_ as n,c as s,o as a,e}from"./app-D_87_CTj.js";const p={},t=e(`<h1 id="按键和实体数据" tabindex="-1"><a class="header-anchor" href="#按键和实体数据"><span>按键和实体数据</span></a></h1><p>在本章中，您将会学习到:</p><ul><li>如何创建按键原型</li><li>如何编写谱面转换器</li></ul><h2 id="按键原型" tabindex="-1"><a class="header-anchor" href="#按键原型"><span>按键原型</span></a></h2><p>让我们先初始化一个 <code>Note</code> 原型:</p><div class="language-cpp line-numbers-mode" data-highlighter="prismjs" data-ext="cpp" data-title="/engine/play/Note.cpp"><pre class="language-cpp"><code><span class="line"><span class="token keyword">class</span> <span class="token class-name">Note</span><span class="token operator">:</span> <span class="token base-clause"><span class="token keyword">public</span> <span class="token class-name">Archetype</span></span> <span class="token punctuation">{</span></span>
<span class="line">    <span class="token keyword">public</span><span class="token operator">:</span></span>
<span class="line"></span>
<span class="line">    <span class="token keyword">static</span> <span class="token keyword">constexpr</span> <span class="token keyword">const</span> <span class="token keyword">char</span><span class="token operator">*</span> name <span class="token operator">=</span> <span class="token string">&quot;My Note&quot;</span><span class="token punctuation">;</span></span>
<span class="line">    <span class="token keyword">bool</span> hasInput <span class="token operator">=</span> <span class="token boolean">true</span><span class="token punctuation">;</span></span>
<span class="line"></span>
<span class="line"><span class="token punctuation">}</span><span class="token punctuation">;</span></span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><div class="language-diff line-numbers-mode" data-highlighter="prismjs" data-ext="diff" data-title="/engine/engine.cpp"><pre class="language-diff"><code><span class="line">// ...</span>
<span class="line"></span>
<span class="line">#ifdef play</span>
<span class="line">using namespace playData;</span>
<span class="line">#include&quot;play/Initialization.cpp&quot;</span>
<span class="line">#include&quot;play/Stage.cpp&quot;</span>
<span class="line"><span class="token inserted-sign inserted"><span class="token prefix inserted">+</span><span class="token line"> #include&quot;play/Note.cpp&quot;</span>
<span class="line"></span></span>#elif tutorial</span>
<span class="line"></span>
<span class="line">// ...</span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><div class="language-diff line-numbers-mode" data-highlighter="prismjs" data-ext="diff" data-title="/main.cpp"><pre class="language-diff"><code><span class="line">// ...</span>
<span class="line"></span>
<span class="line">#ifdef play</span>
<span class="line"><span class="token unchanged"><span class="token prefix unchanged"> </span><span class="token line">   buffer data, configuration;</span>
<span class="line"></span><span class="token prefix unchanged"> </span><span class="token line">   build&lt;</span>
<span class="line"></span><span class="token prefix unchanged"> </span><span class="token line">       // Replace with your archetypes here</span>
<span class="line"></span><span class="token prefix unchanged"> </span><span class="token line">       Initialization,</span>
<span class="line"></span><span class="token prefix unchanged"> </span><span class="token line">       Stage,</span>
<span class="line"></span></span><span class="token inserted-sign inserted"><span class="token prefix inserted">+</span><span class="token line">       Note</span>
<span class="line"></span></span><span class="token unchanged"><span class="token prefix unchanged"> </span><span class="token line">   &gt;(configuration, data);</span>
<span class="line"></span></span></span>
<span class="line">// ...</span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="实体数据" tabindex="-1"><a class="header-anchor" href="#实体数据"><span>实体数据</span></a></h2><p>直到现在，我们都只有 <code>Initialization</code> 原型和 <code>Stage</code> 原型，他们在所有关卡的行为都应该是一样的。</p><p>然而按键并不是那样的: 在一个关卡里，第一个按键可能在 <code>5</code> 秒处，而在另一个关卡里，第一个按键可能在 <code>2</code> 秒处; 一个关卡可以有 <code>200</code> 个按键，而在另一个关卡里可能只有 <code>30</code> 个按键。</p><p>那么引擎要如何才能处理由关卡提供的有不同数量，不同信息的按键呢？那就是 <code>EntityData</code> 发挥作用的地方。每一个关卡可以指定所有的实体并且向其注入数据。</p><p>让我们定义 <code>Note</code> 原型有一个名为 <code>time</code> 的数据，代表按键所在的时间。我们可以使用它的名字来导入数据:</p><div class="language-cpp line-numbers-mode" data-highlighter="prismjs" data-ext="cpp" data-title="/engine/play/Note.cpp"><pre class="language-cpp"><code><span class="line"><span class="token keyword">class</span> <span class="token class-name">Note</span><span class="token operator">:</span> <span class="token base-clause"><span class="token keyword">public</span> <span class="token class-name">Archetype</span></span> <span class="token punctuation">{</span></span>
<span class="line">    <span class="token comment">// ...</span></span>
<span class="line"></span>
<span class="line">    <span class="token function">defineImports</span><span class="token punctuation">(</span>time<span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line"><span class="token punctuation">}</span><span class="token punctuation">;</span></span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>现在我们可以很轻松地访问它了。为了测试一下，让我们将它输出到日志中:</p><div class="language-cpp line-numbers-mode" data-highlighter="prismjs" data-ext="cpp" data-title="/engine/play/Note.cpp"><pre class="language-cpp"><code><span class="line"><span class="token keyword">class</span> <span class="token class-name">Note</span><span class="token operator">:</span> <span class="token base-clause"><span class="token keyword">public</span> <span class="token class-name">Archetype</span></span> <span class="token punctuation">{</span></span>
<span class="line">    <span class="token comment">// ...</span></span>
<span class="line"></span>
<span class="line">    <span class="token keyword">SonolusApi</span> <span class="token function">updateParallel</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span></span>
<span class="line">        <span class="token keyword">FUNCBEGIN</span></span>
<span class="line">        <span class="token function">Debuglog</span><span class="token punctuation">(</span>time<span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line">        <span class="token keyword">return</span> <span class="token constant">VOID</span><span class="token punctuation">;</span></span>
<span class="line">    <span class="token punctuation">}</span></span>
<span class="line"><span class="token punctuation">}</span><span class="token punctuation">;</span></span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="数据转换" tabindex="-1"><a class="header-anchor" href="#数据转换"><span>数据转换</span></a></h2><p>现在，我们该创建我们的关卡了。</p><p>在 Sonolus.js 中，并没有辅助开发者创建关卡数据的套件。但在 Sonolus.h 里，您可以很轻松地处理来自原始格式的谱面数据(例如 <code>*.sus</code> 和 <code>*.txt</code>)。</p><p>在此例中，我们假设用户提供一个很简单的文本文件，其中每行包含一个实数数据，表示按键所在的时间。</p><p>我们能够很简单地创建一个谱面转换器:</p><div class="language-cpp line-numbers-mode" data-highlighter="prismjs" data-ext="cpp" data-title="/convert.h"><pre class="language-cpp"><code><span class="line"><span class="token keyword">class</span> <span class="token class-name">InitializationEntity</span><span class="token operator">:</span> <span class="token base-clause"><span class="token keyword">public</span> <span class="token class-name">LevelEntity</span></span> <span class="token punctuation">{</span></span>
<span class="line">	<span class="token keyword">public</span><span class="token operator">:</span></span>
<span class="line"></span>
<span class="line">	<span class="token function">defineArchetypeName</span><span class="token punctuation">(</span><span class="token string">&quot;My Initialization&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line"><span class="token punctuation">}</span><span class="token punctuation">;</span></span>
<span class="line"></span>
<span class="line"><span class="token keyword">class</span> <span class="token class-name">StageEntity</span><span class="token operator">:</span> <span class="token base-clause"><span class="token keyword">public</span> <span class="token class-name">LevelEntity</span></span> <span class="token punctuation">{</span></span>
<span class="line">	<span class="token keyword">public</span><span class="token operator">:</span></span>
<span class="line"></span>
<span class="line">	<span class="token function">defineArchetypeName</span><span class="token punctuation">(</span><span class="token string">&quot;My Stage&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line"><span class="token punctuation">}</span><span class="token punctuation">;</span></span>
<span class="line"></span>
<span class="line"><span class="token keyword">class</span> <span class="token class-name">NoteEntity</span><span class="token operator">:</span> <span class="token base-clause"><span class="token keyword">public</span> <span class="token class-name">LevelEntity</span></span> <span class="token punctuation">{</span></span>
<span class="line">    <span class="token keyword">public</span><span class="token operator">:</span></span>
<span class="line"></span>
<span class="line">    <span class="token function">defineArchetypeName</span><span class="token punctuation">(</span><span class="token string">&quot;My Note&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line">    <span class="token function">defineLevelDataValue</span><span class="token punctuation">(</span>time<span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line"><span class="token punctuation">}</span><span class="token punctuation">;</span></span>
<span class="line"></span>
<span class="line"><span class="token keyword">string</span> <span class="token function">fromTXT</span><span class="token punctuation">(</span><span class="token keyword">string</span> path<span class="token punctuation">)</span> <span class="token punctuation">{</span></span>
<span class="line">	LevelRawData levelData<span class="token punctuation">;</span></span>
<span class="line">    levelData<span class="token punctuation">.</span><span class="token function">append</span><span class="token punctuation">(</span><span class="token function">InitializationEntity</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">// 插入一个 Initialization 实体</span></span>
<span class="line">    levelData<span class="token punctuation">.</span><span class="token function">append</span><span class="token punctuation">(</span><span class="token function">StageEntity</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">// 插入一个 Stage 实体</span></span>
<span class="line"></span>
<span class="line">    <span class="token keyword">ifstream</span> <span class="token function">fin</span><span class="token punctuation">(</span>path<span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line">    <span class="token keyword">while</span> <span class="token punctuation">(</span><span class="token operator">!</span>fin<span class="token punctuation">.</span><span class="token function">eof</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span> <span class="token punctuation">{</span></span>
<span class="line">        <span class="token keyword">double</span> time<span class="token punctuation">;</span></span>
<span class="line">        fin <span class="token operator">&gt;&gt;</span> time<span class="token punctuation">;</span> <span class="token comment">// 读取时间</span></span>
<span class="line"></span>
<span class="line">        NoteEntity note<span class="token punctuation">;</span> <span class="token comment">// 定义一个 Note 实体</span></span>
<span class="line">        note<span class="token punctuation">.</span>time <span class="token operator">=</span> time<span class="token punctuation">;</span> <span class="token comment">// 修改实体数据</span></span>
<span class="line">        levelData<span class="token punctuation">.</span><span class="token function">append</span><span class="token punctuation">(</span>note<span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">// 插入该实体</span></span>
<span class="line">    <span class="token punctuation">}</span></span>
<span class="line">    fin<span class="token punctuation">.</span><span class="token function">close</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line"></span>
<span class="line">    <span class="token keyword">return</span> <span class="token function">json_encode</span><span class="token punctuation">(</span>levelData<span class="token punctuation">.</span><span class="token function">toJsonObject</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">// 输出为 json 数据</span></span>
<span class="line"><span class="token punctuation">}</span></span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>现在，我们需要给我们的程序提供能够转换谱面的接口，这也很容易实现:</p><div class="language-cpp line-numbers-mode" data-highlighter="prismjs" data-ext="cpp" data-title="/main.cpp"><pre class="language-cpp"><code><span class="line"><span class="token comment">// ...</span></span>
<span class="line"></span>
<span class="line"><span class="token keyword">int</span> <span class="token function">main</span><span class="token punctuation">(</span><span class="token keyword">int</span> argc<span class="token punctuation">,</span> <span class="token keyword">char</span><span class="token operator">*</span><span class="token operator">*</span> argv<span class="token punctuation">)</span> <span class="token punctuation">{</span></span>
<span class="line">    <span class="token keyword">if</span> <span class="token punctuation">(</span>argc <span class="token operator">&gt;</span> <span class="token number">3</span><span class="token punctuation">)</span> <span class="token punctuation">{</span></span>
<span class="line">        <span class="token keyword">string</span> txtPath <span class="token operator">=</span> argv<span class="token punctuation">[</span><span class="token number">1</span><span class="token punctuation">]</span><span class="token punctuation">,</span> dataPath <span class="token operator">=</span> argv<span class="token punctuation">[</span><span class="token number">2</span><span class="token punctuation">]</span><span class="token punctuation">;</span> <span class="token comment">// 从命令行获取文件路径</span></span>
<span class="line">        <span class="token keyword">string</span> rawData <span class="token operator">=</span> <span class="token function">fromTXT</span><span class="token punctuation">(</span>txtPath<span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">// 转换谱面为 json 格式</span></span>
<span class="line">        <span class="token keyword">string</span> data <span class="token operator">=</span> <span class="token function">compress_gzip</span><span class="token punctuation">(</span>rawData<span class="token punctuation">,</span> <span class="token number">9</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">asString</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">// 压缩 json 数据，转为 LevelData 数据</span></span>
<span class="line">        <span class="token keyword">ofstream</span> <span class="token function">fout</span><span class="token punctuation">(</span>dataPath<span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">// 输出 LevelData</span></span>
<span class="line">        fout<span class="token punctuation">.</span><span class="token function">write</span><span class="token punctuation">(</span>data<span class="token punctuation">.</span><span class="token function">c_str</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">,</span> data<span class="token punctuation">.</span><span class="token function">size</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line">        fout<span class="token punctuation">.</span><span class="token function">close</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token keyword">return</span> <span class="token number">0</span><span class="token punctuation">;</span> <span class="token comment">// 直接退出程序，避免再生成一次引擎数据，浪费时间</span></span>
<span class="line">    <span class="token punctuation">}</span></span>
<span class="line"></span>
<span class="line"><span class="token comment">// ...</span></span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>接下来，在引擎根目录下创建一个文件 <code>chart.txt</code>，并向其中写入按键数据。然后修改 <code>package.json</code> 中的测试关卡信息，并向关卡信息中的 <code>generate</code> 选项填写 <code>chart.txt dist/LevelData</code>，编译引擎后用 Sonolus 打开便可以看到您所创建的关卡了。</p>`,25),l=[t];function c(i,o){return a(),s("div",null,l)}const d=n(p,[["render",c],["__file","6. note.html.vue"]]),r=JSON.parse('{"path":"/sonolus.h/play/6.%20note.html","title":"按键和实体数据","lang":"zh-CN","frontmatter":{},"headers":[{"level":2,"title":"按键原型","slug":"按键原型","link":"#按键原型","children":[]},{"level":2,"title":"实体数据","slug":"实体数据","link":"#实体数据","children":[]},{"level":2,"title":"数据转换","slug":"数据转换","link":"#数据转换","children":[]}],"git":{"updatedTime":1720190162000,"contributors":[{"name":"LittleYang0531","email":"“littleyang0531@outlook.com”","commits":1}]},"filePathRelative":"sonolus.h/play/6. note.md"}');export{d as comp,r as data};
