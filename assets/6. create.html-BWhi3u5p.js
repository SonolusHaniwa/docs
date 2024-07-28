import{_ as s,c as n,o as a,e}from"./app-B1KZEIhd.js";const o={},p=e(`<h1 id="自定义资源创建接口" tabindex="-1"><a class="header-anchor" href="#自定义资源创建接口"><span>自定义资源创建接口</span></a></h1><p>资源创建是 Sonolus 的另一个核心功能。接下来，本页面将向您介绍如何自定义资源创建接口。</p><h2 id="配置语法" tabindex="-1"><a class="header-anchor" href="#配置语法"><span>配置语法</span></a></h2><p>Search 类的结构介绍<a href="https://wiki.sonolus.com/custom-server-specs/misc/server-form.html#syntax" target="_blank" rel="noopener noreferrer">在这里</a>(官方叫 <code>ServerOption</code>)。</p><div class="language-cpp line-numbers-mode" data-highlighter="prismjs" data-ext="cpp" data-title="cpp"><pre><code><span class="line"><span class="token keyword">class</span> <span class="token class-name">CreateConfig</span> <span class="token punctuation">{</span></span>
<span class="line">    <span class="token keyword">public</span><span class="token operator">:</span></span>
<span class="line"></span>
<span class="line">    <span class="token keyword">string</span>              title<span class="token punctuation">;</span>      <span class="token comment">// 资源创建标题</span></span>
<span class="line">    <span class="token keyword">string</span>              icon<span class="token punctuation">;</span>       <span class="token comment">// 资源创建图标</span></span>
<span class="line">    <span class="token keyword">string</span>              type<span class="token punctuation">;</span>       <span class="token comment">// 资源创建类型</span></span>
<span class="line">    <span class="token keyword">vector</span><span class="token operator">&lt;</span>Search<span class="token operator">&gt;</span>      options<span class="token punctuation">;</span>    <span class="token comment">// 资源创建选项</span></span>
<span class="line">    <span class="token keyword">map</span><span class="token operator">&lt;</span><span class="token keyword">string</span><span class="token punctuation">,</span> <span class="token keyword">string</span><span class="token operator">&gt;</span> values<span class="token punctuation">;</span>     <span class="token comment">// 数据表各项 SQL 值</span></span>
<span class="line">    <span class="token keyword">map</span><span class="token operator">&lt;</span><span class="token keyword">string</span><span class="token punctuation">,</span> <span class="token keyword">string</span><span class="token operator">&gt;</span> constructs<span class="token punctuation">;</span> <span class="token comment">// 重构选项默认值时的 JavaScript 代码</span></span>
<span class="line"><span class="token punctuation">}</span><span class="token punctuation">;</span></span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ul><li><code>title</code> 可以使用 Sonolus 的文本内容，详见 <a href="https://github.com/Sonolus/sonolus-core/blob/main/src/common/core/text.ts" target="_blank" rel="noopener noreferrer">Sonolus/sonolus-core</a>。</li><li><code>icon</code> 只能使用 Sonolus 支持的图标代号，详见 <a href="https://github.com/Sonolus/sonolus-core/blob/main/src/common/core/icon.ts" target="_blank" rel="noopener noreferrer">Sonolus/sonolus-core</a>。</li><li><code>values</code> 的值为 SQL 表达式，可以使用 <code>{{xxx}}</code> 结构来代表用户输入参数。</li><li><code>constructs</code> 的值为 JavaScript 表达式，可以使用 <code>{{xxx}}</code> 结构来代表资源信息参数，使用 <code>.</code> 来访问 JSON 结构。资源信息 <code>{{tags}}</code> 比较特殊，为序列化的 <code>Tag</code> 数组。由于部分限制，当目标变量名为 <code>levels</code> 时必须为普通字符串，不能为 JavaScript 表达式。具体资源结构信息详见 <a href="https://wiki.sonolus.com" target="_blank" rel="noopener noreferrer">Sonolus Wiki</a>。</li><li>对于 <code>mutli</code> 类型的 Search 类，有以下特殊属性，具体使用方法可以参考 <code>level_config.json</code> 中的 <code>Advanced Search</code>:</li></ul><div class="language-cpp line-numbers-mode" data-highlighter="prismjs" data-ext="cpp" data-title="cpp"><pre><code><span class="line"><span class="token keyword">class</span> <span class="token class-name">SearchMultiOptionVariable</span> <span class="token punctuation">{</span></span>
<span class="line">    <span class="token keyword">public</span><span class="token operator">:</span></span>
<span class="line"></span>
<span class="line">    <span class="token keyword">string</span> name <span class="token operator">=</span> <span class="token string">&quot;&quot;</span><span class="token punctuation">;</span>      <span class="token comment">// 自定义的变量名称</span></span>
<span class="line">    <span class="token keyword">string</span> expr <span class="token operator">=</span> <span class="token string">&quot;&quot;</span><span class="token punctuation">;</span>      <span class="token comment">// 自定义的 SQL 变量表达式，只能使用该选项的用户输入参数</span></span>
<span class="line">    <span class="token keyword">string</span> connector <span class="token operator">=</span> <span class="token string">&quot;&quot;</span><span class="token punctuation">;</span> <span class="token comment">// 每两项之间的逻辑运算符</span></span>
<span class="line">    <span class="token keyword">string</span> <span class="token keyword">default</span> <span class="token operator">=</span> <span class="token string">&quot;&quot;</span><span class="token punctuation">;</span>   <span class="token comment">// 用户没有选择时的默认值</span></span>
<span class="line"><span class="token punctuation">}</span><span class="token punctuation">;</span></span>
<span class="line"></span>
<span class="line"><span class="token keyword">class</span> <span class="token class-name">SearchMultiOption</span> <span class="token punctuation">{</span></span>
<span class="line">    <span class="token keyword">public</span><span class="token operator">:</span></span>
<span class="line"></span>
<span class="line">    <span class="token comment">// ...</span></span>
<span class="line">    <span class="token keyword">vector</span><span class="token operator">&lt;</span>SearchMultiOptionVariable<span class="token operator">&gt;</span> variables<span class="token punctuation">;</span> <span class="token comment">// 自定义变量</span></span>
<span class="line"><span class="token punctuation">}</span></span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="配置示例" tabindex="-1"><a class="header-anchor" href="#配置示例"><span>配置示例</span></a></h2><p>详见各资源配置文件中的 <code>itemType.creates</code>。</p>`,9),t=[p];function l(c,i){return a(),n("div",null,t)}const d=s(o,[["render",l],["__file","6. create.html.vue"]]),u=JSON.parse('{"path":"/sonolus-server/6.%20create.html","title":"自定义资源创建接口","lang":"zh-CN","frontmatter":{},"headers":[{"level":2,"title":"配置语法","slug":"配置语法","link":"#配置语法","children":[]},{"level":2,"title":"配置示例","slug":"配置示例","link":"#配置示例","children":[]}],"git":{"updatedTime":1722176859000,"contributors":[{"name":"LittleYang0531","email":"“littleyang0531@outlook.com”","commits":2}]},"filePathRelative":"sonolus-server/6. create.md"}');export{d as comp,u as data};
