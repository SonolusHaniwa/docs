import{_ as l,c as t,a as n,d as s,b as o,w as p,e as a,r as c,o as i}from"./app-D_87_CTj.js";const u={},d=a(`<h1 id="服务使用方法" tabindex="-1"><a class="header-anchor" href="#服务使用方法"><span>服务使用方法</span></a></h1><div class="language-bash line-numbers-mode" data-highlighter="prismjs" data-ext="sh" data-title="sh"><pre class="language-bash"><code><span class="line">Sonolus Server v1.6.2 <span class="token punctuation">(</span>WebServer Core v1.0.6<span class="token punctuation">)</span></span>
<span class="line">The highest supported version of Sonolus: <span class="token number">0.8</span>.3</span>
<span class="line">Copyright <span class="token punctuation">(</span>c<span class="token punctuation">)</span> <span class="token number">2023</span> LittleYang0531, <span class="token function">all</span> rights reserved.</span>
<span class="line">Compiled at Jun <span class="token number">29</span> <span class="token number">2024</span> 08:51:23.</span>
<span class="line"></span>
<span class="line">Usage: <span class="token function">./sonolus</span> <span class="token punctuation">[</span>command<span class="token punctuation">]</span></span>
<span class="line">Basic commands: </span>
<span class="line">    help: <span class="token function">./sonolus</span> <span class="token builtin class-name">help</span></span>
<span class="line">    serve: <span class="token function">./sonolus</span> <span class="token function">serve</span></span>
<span class="line">    cgi: <span class="token function">./sonolus</span> cgi <span class="token punctuation">[</span>request<span class="token punctuation">]</span> <span class="token punctuation">[</span>response<span class="token punctuation">]</span></span>
<span class="line">Import <span class="token operator">&amp;</span> Export commands: </span>
<span class="line">    import: <span class="token function">./sonolus</span> <span class="token function">import</span> <span class="token punctuation">[</span>file<span class="token punctuation">]</span></span>
<span class="line">    export: <span class="token function">./sonolus</span> <span class="token builtin class-name">export</span> <span class="token punctuation">[</span>type<span class="token punctuation">]</span> <span class="token punctuation">[</span>name<span class="token punctuation">]</span> <span class="token punctuation">[</span>file<span class="token punctuation">]</span> <span class="token punctuation">(</span>name<span class="token punctuation">)</span></span>
<span class="line">    <span class="token builtin class-name">export</span> remote: <span class="token function">./sonolus</span> <span class="token builtin class-name">export</span> remote <span class="token punctuation">[</span>url<span class="token punctuation">]</span> <span class="token punctuation">[</span>file<span class="token punctuation">]</span> <span class="token punctuation">(</span>name<span class="token punctuation">)</span></span>
<span class="line">    <span class="token builtin class-name">export</span> all: <span class="token function">./sonolus</span> <span class="token builtin class-name">export</span> <span class="token function">all</span> <span class="token punctuation">[</span>file<span class="token punctuation">]</span> <span class="token punctuation">(</span>name<span class="token punctuation">)</span></span>
<span class="line">    <span class="token builtin class-name">export</span> remote all: <span class="token function">./sonolus</span> <span class="token builtin class-name">export</span> remote-all <span class="token punctuation">[</span>url<span class="token punctuation">]</span> <span class="token punctuation">[</span>file<span class="token punctuation">]</span> <span class="token punctuation">(</span>name<span class="token punctuation">)</span></span>
<span class="line">    <span class="token builtin class-name">export</span> filelist: <span class="token function">./sonolus</span> <span class="token builtin class-name">export</span> filelist <span class="token punctuation">[</span>source<span class="token punctuation">]</span> <span class="token punctuation">[</span>target<span class="token punctuation">]</span> <span class="token punctuation">(</span>name<span class="token punctuation">)</span></span>
<span class="line">    list tasks: <span class="token function">./sonolus</span> task list</span>
<span class="line">    manage task: <span class="token function">./sonolus</span> task <span class="token operator">&lt;</span>confinue/terminate/info<span class="token operator">&gt;</span> <span class="token punctuation">[</span>name<span class="token punctuation">]</span></span>
<span class="line">    <span class="token builtin class-name">test</span> package: <span class="token function">./sonolus</span> <span class="token builtin class-name">test</span> <span class="token punctuation">[</span>file<span class="token punctuation">]</span></span>
<span class="line">Plugin commands: </span>
<span class="line">    list plugin: <span class="token function">./sonolus</span> plugin list</span>
<span class="line">    manage plugin: <span class="token function">./sonolus</span> plugin <span class="token operator">&lt;</span>info/enable/disable<span class="token operator">&gt;</span> <span class="token punctuation">[</span>plugin<span class="token punctuation">]</span></span>
<span class="line">    Sonolus.h sync: <span class="token function">./sonolus</span> <span class="token function">synccpp</span></span>
<span class="line">    Sonolus.h update: <span class="token function">./sonolus</span> <span class="token function">updatecpp</span> <span class="token punctuation">[</span>name<span class="token punctuation">]</span></span>
<span class="line">    Sonolus.h init: <span class="token function">./sonolus</span> <span class="token function">initcpp</span> <span class="token punctuation">[</span>name<span class="token punctuation">]</span></span>
<span class="line">    Sonolus.h build: <span class="token function">./sonolus</span> <span class="token function">buildcpp</span> <span class="token operator">&lt;</span>play/tutorial/preview/watch<span class="token operator">&gt;</span> <span class="token punctuation">[</span>name<span class="token punctuation">]</span> <span class="token punctuation">[</span>args<span class="token punctuation">]</span></span>
<span class="line">If you have any question about command, please visit Sonolus Server wiki to see the full defination.</span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>基础指令:</p><ul><li><code>help</code>: 显示帮助信息</li><li><code>serve</code>: 启动服务器</li><li><code>cgi</code>: 通用网关接口(cgi)</li></ul><p>导入导出指令:</p>`,5),r=a("<li><code>import</code>: 从文件中导入 Sonolus 资源，<code>scp</code> 格式需要 <code>-DENABLE_ZIP</code> 选项支持</li><li><code>export</code>: 从本服务器中导出单个资源</li><li><code>export remote</code>: 从远程服务器中导出单个资源，需要 <code>-DENABLE_CURL</code> 选项支持</li><li><code>export all</code>: 从本服务器中导出全部资源</li><li><code>export remote all</code>: 从远程服务器中导出全部资源，尽量不要使用，否则后果自负。需要 <code>-DENABLE_CURL</code> 选项支持</li>",5),k=n("code",null,"export filelist",-1),m=n("li",null,[n("code",null,"list tasks"),s(": 列出所有导出任务")],-1),v=n("li",null,[n("code",null,"manage task"),s(": 管理导出任务")],-1),b=n("li",null,[n("code",null,"test package"),s(": 测试包是否合法，"),n("code",null,"scp"),s(" 格式需要 "),n("code",null,"-DENABLE_ZIP"),s(" 选项支持")],-1),f=a("<p>插件指令:</p><ul><li><code>list plugin</code>: 列出全部插件</li><li><code>manage plugin</code>: 管理插件</li></ul><p>Sonolus.h 指令:</p><ul><li><code>sync</code>: 使 sonolus.h 与上游仓库保持同步</li><li><code>update</code>: 更新 sonolus.h 项目</li><li><code>init</code>: 初始化一个 sonolus.h 项目</li><li><code>build</code>: 构建一个 sonolus.h 项目</li></ul>",4);function h(g,_){const e=c("RouteLink");return i(),t("div",null,[d,n("ul",null,[r,n("li",null,[k,s(": 一次导出多项数据，详见"),o(e,{to:"/sonolus-server/9.%20srp.html#filelist"},{default:p(()=>[s("filelist")]),_:1})]),m,v,b]),f])}const S=l(u,[["render",h],["__file","4. help.html.vue"]]),y=JSON.parse('{"path":"/sonolus-server/4.%20help.html","title":"服务使用方法","lang":"zh-CN","frontmatter":{},"headers":[],"git":{"updatedTime":1720016854000,"contributors":[{"name":"LittleYang0531","email":"“littleyang0531@outlook.com”","commits":1}]},"filePathRelative":"sonolus-server/4. help.md"}');export{S as comp,y as data};
