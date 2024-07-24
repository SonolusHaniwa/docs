import{_ as s,c as n,o as a,e}from"./app-DLMeNV68.js";const p={},o=e(`<h1 id="自定义搜索函数" tabindex="-1"><a class="header-anchor" href="#自定义搜索函数"><span>自定义搜索函数</span></a></h1><p>搜索是 Sonolus 服务器的一个核心功能。接下来，本页面将向您介绍如何自定义搜索函数。</p><p>Sonolus 默认会自带一个 <code>quick</code> 类型的快速搜索，其它的就需要您自行配置。</p><h2 id="配置语法" tabindex="-1"><a class="header-anchor" href="#配置语法"><span>配置语法</span></a></h2><p>Search 类的结构介绍<a href="https://wiki.sonolus.com/custom-server-specs/misc/server-form.html#syntax" target="_blank" rel="noopener noreferrer">在这里</a>(官方叫 <code>ServerOption</code>)。</p><div class="language-cpp line-numbers-mode" data-highlighter="prismjs" data-ext="cpp" data-title="cpp"><pre><code><span class="line"><span class="token keyword">class</span> <span class="token class-name">SearchConfig</span> <span class="token punctuation">{</span></span>
<span class="line">    <span class="token keyword">public</span><span class="token operator">:</span></span>
<span class="line"></span>
<span class="line">    <span class="token keyword">string</span>         title<span class="token punctuation">;</span>   <span class="token comment">// 搜索标题</span></span>
<span class="line">    <span class="token keyword">string</span>         icon<span class="token punctuation">;</span>    <span class="token comment">// 搜索图标</span></span>
<span class="line">    <span class="token keyword">string</span>         type<span class="token punctuation">;</span>    <span class="token comment">// 搜索类型</span></span>
<span class="line">    <span class="token keyword">vector</span><span class="token operator">&lt;</span>Search<span class="token operator">&gt;</span> options<span class="token punctuation">;</span> <span class="token comment">// 搜索选项</span></span>
<span class="line">    <span class="token keyword">string</span>         filter<span class="token punctuation">;</span>  <span class="token comment">// 筛选时 SQL 代码</span></span>
<span class="line">    <span class="token keyword">string</span>         order<span class="token punctuation">;</span>   <span class="token comment">// 排序时 SQL 代码</span></span>
<span class="line"><span class="token punctuation">}</span><span class="token punctuation">;</span></span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ul><li><code>title</code> 可以使用 Sonolus 的文本内容，详见 <a href="https://github.com/Sonolus/sonolus-core/blob/main/src/common/core/text.ts" target="_blank" rel="noopener noreferrer">Sonolus/sonolus-core</a>。</li><li><code>icon</code> 只能使用 Sonolus 支持的图标代号，详见 <a href="https://github.com/Sonolus/sonolus-core/blob/main/src/common/core/icon.ts" target="_blank" rel="noopener noreferrer">Sonolus/sonolus-core</a>。</li><li><code>filter</code> 和 <code>order</code> 的值为 SQL 表达式，可以使用 <code>{{xxx}}</code> 结构来代表查询参数。</li><li><code>type</code> 的值不可以为 <code>quick</code>，否则会与 Sonolus 的默认搜索冲突。</li><li>目前暂时还不支持 <code>multi</code> 类型的 <code>options</code>，请慎用。</li></ul><h2 id="配置示例" tabindex="-1"><a class="header-anchor" href="#配置示例"><span>配置示例</span></a></h2><h3 id="快速搜索" tabindex="-1"><a class="header-anchor" href="#快速搜索"><span>快速搜索</span></a></h3><p>本配置复刻了 Sonolus 的关卡快速搜索功能，实际无法运用到 Sonolus 中，会导致类型冲突。</p><div class="language-json line-numbers-mode" data-highlighter="prismjs" data-ext="json" data-title="json"><pre><code><span class="line"><span class="token punctuation">{</span></span>
<span class="line">    <span class="token property">&quot;title&quot;</span><span class="token operator">:</span> <span class="token string">&quot;#SEARCH&quot;</span><span class="token punctuation">,</span></span>
<span class="line">    <span class="token property">&quot;icon&quot;</span><span class="token operator">:</span> <span class="token string">&quot;search&quot;</span><span class="token punctuation">,</span></span>
<span class="line">    <span class="token property">&quot;type&quot;</span><span class="token operator">:</span> <span class="token string">&quot;quick&quot;</span><span class="token punctuation">,</span></span>
<span class="line">    <span class="token property">&quot;options&quot;</span><span class="token operator">:</span> <span class="token punctuation">[</span></span>
<span class="line">        <span class="token punctuation">{</span></span>
<span class="line">            <span class="token property">&quot;query&quot;</span><span class="token operator">:</span> <span class="token string">&quot;keyword&quot;</span><span class="token punctuation">,</span></span>
<span class="line">            <span class="token property">&quot;name&quot;</span><span class="token operator">:</span> <span class="token string">&quot;#KEYWORD&quot;</span><span class="token punctuation">,</span></span>
<span class="line">            <span class="token property">&quot;type&quot;</span><span class="token operator">:</span> <span class="token string">&quot;text&quot;</span><span class="token punctuation">,</span></span>
<span class="line">            <span class="token property">&quot;placeholder&quot;</span><span class="token operator">:</span> <span class="token string">&quot;#KEYWORD_PLACEHOLDER&quot;</span><span class="token punctuation">,</span></span>
<span class="line">            <span class="token property">&quot;limit&quot;</span><span class="token operator">:</span> <span class="token number">0</span></span>
<span class="line">        <span class="token punctuation">}</span></span>
<span class="line">    <span class="token punctuation">]</span><span class="token punctuation">,</span></span>
<span class="line">    <span class="token property">&quot;filter&quot;</span><span class="token operator">:</span> <span class="token string">&quot;title LIKE \\&quot;%{{keyword}}%\\&quot;&quot;</span><span class="token punctuation">,</span></span>
<span class="line">    <span class="token property">&quot;order&quot;</span><span class="token operator">:</span> <span class="token string">&quot;id DESC&quot;</span></span>
<span class="line"><span class="token punctuation">}</span></span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>如果你访问 <code>/sonolus/levels/list?type=quick&amp;keyword=Test</code> 或 <code>/levels/list?type=quick&amp;keyword=Test</code>，生成的 SQL 如下:</p><div class="language-sql line-numbers-mode" data-highlighter="prismjs" data-ext="sql" data-title="sql"><pre><code><span class="line"><span class="token keyword">SELECT</span> <span class="token operator">*</span> <span class="token keyword">FROM</span> <span class="token keyword">Level</span> </span>
<span class="line"><span class="token keyword">WHERE</span> <span class="token punctuation">(</span>title <span class="token operator">LIKE</span> <span class="token string">&quot;%Test%&quot;</span><span class="token punctuation">)</span> </span>
<span class="line"><span class="token keyword">ORDER</span> <span class="token keyword">BY</span> id <span class="token keyword">DESC</span></span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="随机排序" tabindex="-1"><a class="header-anchor" href="#随机排序"><span>随机排序</span></a></h3><p>本配置实现了随机排列 Sonolus 的关卡，仅供参考。</p><div class="language-json line-numbers-mode" data-highlighter="prismjs" data-ext="json" data-title="json"><pre><code><span class="line"><span class="token punctuation">{</span></span>
<span class="line">    <span class="token property">&quot;title&quot;</span><span class="token operator">:</span> <span class="token string">&quot;#RANDOM&quot;</span><span class="token punctuation">,</span></span>
<span class="line">    <span class="token property">&quot;icon&quot;</span><span class="token operator">:</span> <span class="token string">&quot;search&quot;</span><span class="token punctuation">,</span></span>
<span class="line">    <span class="token property">&quot;type&quot;</span><span class="token operator">:</span> <span class="token string">&quot;random&quot;</span><span class="token punctuation">,</span></span>
<span class="line">    <span class="token property">&quot;options&quot;</span><span class="token operator">:</span> <span class="token punctuation">[</span></span>
<span class="line">        <span class="token punctuation">{</span></span>
<span class="line">            <span class="token property">&quot;query&quot;</span><span class="token operator">:</span> <span class="token string">&quot;random&quot;</span><span class="token punctuation">,</span></span>
<span class="line">            <span class="token property">&quot;name&quot;</span><span class="token operator">:</span> <span class="token string">&quot;#RANDOM&quot;</span><span class="token punctuation">,</span></span>
<span class="line">            <span class="token property">&quot;type&quot;</span><span class="token operator">:</span> <span class="token string">&quot;toggle&quot;</span><span class="token punctuation">,</span></span>
<span class="line">            <span class="token property">&quot;def&quot;</span><span class="token operator">:</span> <span class="token number">0</span></span>
<span class="line">        <span class="token punctuation">}</span></span>
<span class="line">    <span class="token punctuation">]</span><span class="token punctuation">,</span></span>
<span class="line">    <span class="token property">&quot;filter&quot;</span><span class="token operator">:</span> <span class="token string">&quot;&quot;</span><span class="token punctuation">,</span></span>
<span class="line">    <span class="token property">&quot;order&quot;</span><span class="token operator">:</span> <span class="token string">&quot;CASE {{random}} WHEN 0 THEN id WHEN 1 THEN RANDOM() END DESC&quot;</span></span>
<span class="line"><span class="token punctuation">}</span></span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>如果你访问 <code>/sonolus/levels/list?type=random&amp;random=0</code> 或 <code>/levels/list?type=random&amp;random=0</code>，生成的 SQL 如下:</p><div class="language-sql line-numbers-mode" data-highlighter="prismjs" data-ext="sql" data-title="sql"><pre><code><span class="line"><span class="token keyword">SELECT</span> <span class="token operator">*</span> <span class="token keyword">FROM</span> <span class="token keyword">Level</span> </span>
<span class="line"><span class="token keyword">WHERE</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> </span>
<span class="line"><span class="token keyword">ORDER</span> <span class="token keyword">BY</span> </span>
<span class="line"><span class="token keyword">CASE</span> <span class="token number">0</span> </span>
<span class="line">    <span class="token keyword">WHEN</span> <span class="token number">0</span> <span class="token keyword">THEN</span> id</span>
<span class="line">    <span class="token keyword">WHEN</span> <span class="token number">1</span> <span class="token keyword">THEN</span> RANDOM<span class="token punctuation">(</span><span class="token punctuation">)</span></span>
<span class="line"><span class="token keyword">END</span> <span class="token keyword">DESC</span></span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>如果你访问 <code>/sonolus/levels/list?type=random&amp;random=1</code> 或 <code>/levels/list?type=random&amp;random=1</code>，生成的 SQL 如下:</p><div class="language-sql line-numbers-mode" data-highlighter="prismjs" data-ext="sql" data-title="sql"><pre><code><span class="line"><span class="token keyword">SELECT</span> <span class="token operator">*</span> <span class="token keyword">FROM</span> <span class="token keyword">Level</span> </span>
<span class="line"><span class="token keyword">WHERE</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> </span>
<span class="line"><span class="token keyword">ORDER</span> <span class="token keyword">BY</span> </span>
<span class="line"><span class="token keyword">CASE</span> <span class="token number">1</span> </span>
<span class="line">    <span class="token keyword">WHEN</span> <span class="token number">0</span> <span class="token keyword">THEN</span> id</span>
<span class="line">    <span class="token keyword">WHEN</span> <span class="token number">1</span> <span class="token keyword">THEN</span> RANDOM<span class="token punctuation">(</span><span class="token punctuation">)</span></span>
<span class="line"><span class="token keyword">END</span> <span class="token keyword">DESC</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,20),t=[o];function l(c,i){return a(),n("div",null,t)}const u=s(p,[["render",l],["__file","5. search.html.vue"]]),d=JSON.parse('{"path":"/sonolus-server/5.%20search.html","title":"自定义搜索函数","lang":"zh-CN","frontmatter":{},"headers":[{"level":2,"title":"配置语法","slug":"配置语法","link":"#配置语法","children":[]},{"level":2,"title":"配置示例","slug":"配置示例","link":"#配置示例","children":[{"level":3,"title":"快速搜索","slug":"快速搜索","link":"#快速搜索","children":[]},{"level":3,"title":"随机排序","slug":"随机排序","link":"#随机排序","children":[]}]}],"git":{"updatedTime":1720451095000,"contributors":[{"name":"LittleYang0531","email":"“littleyang0531@outlook.com”","commits":2}]},"filePathRelative":"sonolus-server/5. search.md"}');export{u as comp,d as data};
