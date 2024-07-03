import{_ as n,c as s,o as a,e}from"./app-By1V28Uf.js";const p={},t=e(`<h1 id="插件开发标准" tabindex="-1"><a class="header-anchor" href="#插件开发标准"><span>插件开发标准</span></a></h1><p>插件是整个 Sonolus 服务器系统的一个重要核心功能。接下来，本页面将向您介绍如何自行开发一个插件。</p><p>请注意，插件编写需要您对所有的类和函数有一个全面细致的了解。详细信息参见 <a href="https://wiki.sonolus.com/custom-server-specs/" target="_blank" rel="noopener noreferrer">Custom Server Specs</a>。</p><h2 id="基础模板" tabindex="-1"><a class="header-anchor" href="#基础模板"><span>基础模板</span></a></h2><p>在项目根目录下创建一个文件夹 <code>libtest</code>，并在里面新建文件 <code>libtest.cpp</code>，填写代码如下:</p><div class="language-cpp line-numbers-mode" data-highlighter="prismjs" data-ext="cpp" data-title="cpp"><pre class="language-cpp"><code><span class="line"><span class="token macro property"><span class="token directive-hash">#</span><span class="token directive keyword">include</span><span class="token string">&quot;../../main.cpp&quot;</span></span></span>
<span class="line"><span class="token macro property"><span class="token directive-hash">#</span><span class="token directive keyword">include</span><span class="token string">&lt;bits/stdc++.h&gt;</span></span></span>
<span class="line"><span class="token keyword">using</span> <span class="token keyword">namespace</span> std<span class="token punctuation">;</span></span>
<span class="line"></span>
<span class="line"><span class="token keyword">class</span> <span class="token class-name">Plugin</span><span class="token operator">:</span> <span class="token base-clause"><span class="token keyword">public</span> <span class="token class-name">SonolusServerPlugin</span></span> <span class="token punctuation">{</span></span>
<span class="line">    <span class="token keyword">public</span><span class="token operator">:</span></span>
<span class="line">    </span>
<span class="line">    <span class="token keyword">string</span> <span class="token function">onPluginName</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token keyword">const</span> <span class="token punctuation">{</span></span>
<span class="line">        <span class="token keyword">return</span> <span class="token string">&quot;&quot;</span><span class="token punctuation">;</span></span>
<span class="line">    <span class="token punctuation">}</span></span>
<span class="line">    <span class="token keyword">string</span> <span class="token function">onPluginDescription</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token keyword">const</span> <span class="token punctuation">{</span></span>
<span class="line">        <span class="token keyword">return</span> <span class="token string">&quot;&quot;</span><span class="token punctuation">;</span></span>
<span class="line">    <span class="token punctuation">}</span></span>
<span class="line">    <span class="token keyword">string</span> <span class="token function">onPluginVersion</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token keyword">const</span> <span class="token punctuation">{</span></span>
<span class="line">        <span class="token keyword">return</span> <span class="token string">&quot;&quot;</span><span class="token punctuation">;</span></span>
<span class="line">    <span class="token punctuation">}</span></span>
<span class="line">    <span class="token keyword">string</span> <span class="token function">onPluginPlatformVersion</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token keyword">const</span> <span class="token punctuation">{</span></span>
<span class="line">        <span class="token keyword">return</span> <span class="token string">&quot;&quot;</span><span class="token punctuation">;</span></span>
<span class="line">    <span class="token punctuation">}</span></span>
<span class="line">    <span class="token keyword">string</span> <span class="token function">onPluginAuthor</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token keyword">const</span> <span class="token punctuation">{</span></span>
<span class="line">        <span class="token keyword">return</span> <span class="token string">&quot;&quot;</span><span class="token punctuation">;</span></span>
<span class="line">    <span class="token punctuation">}</span></span>
<span class="line">    <span class="token keyword">string</span> <span class="token function">onPluginLicense</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token keyword">const</span> <span class="token punctuation">{</span></span>
<span class="line">        <span class="token keyword">return</span> <span class="token string">&quot;&quot;</span><span class="token punctuation">;</span></span>
<span class="line">    <span class="token punctuation">}</span></span>
<span class="line">    <span class="token keyword">string</span> <span class="token function">onPluginWebsite</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token keyword">const</span> <span class="token punctuation">{</span></span>
<span class="line">        <span class="token keyword">return</span> <span class="token string">&quot;&quot;</span><span class="token punctuation">;</span></span>
<span class="line">    <span class="token punctuation">}</span></span>
<span class="line">    <span class="token keyword">vector</span><span class="token operator">&lt;</span><span class="token keyword">string</span><span class="token operator">&gt;</span> <span class="token function">onPluginHelp</span><span class="token punctuation">(</span><span class="token keyword">char</span><span class="token operator">*</span><span class="token operator">*</span> argv<span class="token punctuation">)</span> <span class="token keyword">const</span> <span class="token punctuation">{</span></span>
<span class="line">        <span class="token keyword">return</span> <span class="token punctuation">{</span><span class="token punctuation">}</span><span class="token punctuation">;</span></span>
<span class="line">    <span class="token punctuation">}</span></span>
<span class="line">    <span class="token keyword">void</span> <span class="token function">onPluginRunner</span><span class="token punctuation">(</span><span class="token keyword">int</span> argc<span class="token punctuation">,</span> <span class="token keyword">char</span><span class="token operator">*</span><span class="token operator">*</span> argv<span class="token punctuation">)</span> <span class="token keyword">const</span> <span class="token punctuation">{</span></span>
<span class="line"></span>
<span class="line">    <span class="token punctuation">}</span></span>
<span class="line">    <span class="token keyword">void</span> <span class="token function">onPluginRouter</span><span class="token punctuation">(</span><span class="token keyword">int</span> argc<span class="token punctuation">,</span> <span class="token keyword">char</span><span class="token operator">*</span><span class="token operator">*</span> argv<span class="token punctuation">,</span> application <span class="token operator">*</span>app<span class="token punctuation">)</span> <span class="token keyword">const</span> <span class="token punctuation">{</span></span>
<span class="line">        <span class="token function">preload</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line"></span>
<span class="line">    <span class="token punctuation">}</span></span>
<span class="line"><span class="token punctuation">}</span><span class="token punctuation">;</span></span>
<span class="line"></span>
<span class="line"><span class="token function">PLUMA_INHERIT_PROVIDER</span><span class="token punctuation">(</span>Plugin<span class="token punctuation">,</span> SonolusServerPlugin<span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line"></span>
<span class="line">PLUMA_CONNECTOR</span>
<span class="line"><span class="token keyword">bool</span> <span class="token function">pluma_connect</span><span class="token punctuation">(</span>pluma<span class="token double-colon punctuation">::</span>Host<span class="token operator">&amp;</span> host<span class="token punctuation">)</span> <span class="token punctuation">{</span></span>
<span class="line">    host<span class="token punctuation">.</span><span class="token function">add</span><span class="token punctuation">(</span> <span class="token keyword">new</span> <span class="token function">PluginProvider</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line">    <span class="token keyword">return</span> <span class="token boolean">true</span><span class="token punctuation">;</span></span>
<span class="line"><span class="token punctuation">}</span></span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="函数解释" tabindex="-1"><a class="header-anchor" href="#函数解释"><span>函数解释</span></a></h2><ul><li><code>string onPluginName()</code>: 提供插件名称。</li><li><code>string onPluginDescription()</code>: 提供插件描述，用于在 <code>./sonolus plugin info [plugin]</code> 中显示。</li><li><code>string onPluginVersion()</code>: 提供插件版本号。</li><li><code>string onPluginPlatformVersion()</code>: 提供目标平台版本号。只有当目标平台版本号与 Sonolus 服务器版本号相匹配时，该插件才会被载入。</li><li><code>string onPluginAuthor()</code>: 提供插件作者。</li><li><code>string onPluginLicense()</code>: 提供插件协议信息。</li><li><code>string onPluginWebsite()</code>: 提供插件网站信息。</li><li><code>vector&lt;string&gt; onPluginHelp(char** argv)</code>: 提供额外帮助信息，<code>argv</code> 为主程序接收到的参数信息。</li><li><code>void onPluginRunner(int argc, char** argv)</code>: 处理主程序接收到的参数信息。</li><li><code>void onPluginRouter(int argc, char** argv, application *app)</code>: 提供额外的终结点，用于服务器的运行。所有终结点函数需要插入到 <code>app-&gt;route</code> 中去。</li></ul><h2 id="插件示例" tabindex="-1"><a class="header-anchor" href="#插件示例"><span>插件示例</span></a></h2><ul><li><a href="https://github.com/SonolusHaniwa/sonolus-server-plugin-libsonolush" target="_blank" rel="noopener noreferrer">libsonolush</a>: 这些插件提供了对 <code>onPluginHelp</code> 函数和 <code>onPluginRunner</code> 函数的示例。</li><li><a href="https://github.com/SonolusHaniwa/sonolus-server-plugin-libonedrive" target="_blank" rel="noopener noreferrer">libonedrive</a>: 该插件提供了对 <code>onPluginRouter</code> 函数的示例。</li></ul><h2 id="部署" tabindex="-1"><a class="header-anchor" href="#部署"><span>部署</span></a></h2><p>代码编写完毕后，退出代码编辑器，重新编译您的插件即可。</p>`,12),l=[t];function o(c,i){return a(),s("div",null,l)}const r=n(p,[["render",o],["__file","7. plugin.html.vue"]]),d=JSON.parse('{"path":"/sonolus-server/7.%20plugin.html","title":"插件开发标准","lang":"zh-CN","frontmatter":{},"headers":[{"level":2,"title":"基础模板","slug":"基础模板","link":"#基础模板","children":[]},{"level":2,"title":"函数解释","slug":"函数解释","link":"#函数解释","children":[]},{"level":2,"title":"插件示例","slug":"插件示例","link":"#插件示例","children":[]},{"level":2,"title":"部署","slug":"部署","link":"#部署","children":[]}],"git":{"updatedTime":1720016854000,"contributors":[{"name":"LittleYang0531","email":"“littleyang0531@outlook.com”","commits":1}]},"filePathRelative":"sonolus-server/7. plugin.md"}');export{r as comp,d as data};
