import{_ as s,c as n,o as a,e as p}from"./app-s2P5H-ce.js";const e={},t=p(`<h1 id="配置文件标准" tabindex="-1"><a class="header-anchor" href="#配置文件标准"><span>配置文件标准</span></a></h1><p>配置文件是 Sonolus 服务器运行时的相关信息，您可以通过修改配置文件来修改 Sonolus 服务器的运行时行为。</p><p>请注意，由于本服务器不具备热重载功能，因此每次修改配置文件后，您都需要重新启动服务来使配置文件生效。</p><h2 id="基础配置文件" tabindex="-1"><a class="header-anchor" href="#基础配置文件"><span>基础配置文件</span></a></h2><p>在 <code>/config/database.json</code> 中:</p><div class="language-cpp line-numbers-mode" data-highlighter="prismjs" data-ext="cpp" data-title="cpp"><pre class="language-cpp"><code><span class="line"><span class="token keyword">class</span> <span class="token class-name">DatabaseUnit</span> <span class="token punctuation">{</span></span>
<span class="line">    <span class="token keyword">public</span><span class="token operator">:</span></span>
<span class="line"></span>
<span class="line">    <span class="token keyword">string</span> database       <span class="token operator">=</span> <span class="token string">&quot;sqlite&quot;</span> <span class="token operator">|</span> <span class="token string">&quot;mysql&quot;</span><span class="token punctuation">;</span> <span class="token comment">// 数据库类型</span></span>
<span class="line">    <span class="token keyword">string</span> sqlite<span class="token punctuation">.</span>dbfile  <span class="token operator">=</span> <span class="token string">&quot;sonolus.db&quot;</span><span class="token punctuation">;</span>       <span class="token comment">// SQLite 数据库文件地址</span></span>
<span class="line">    <span class="token keyword">string</span> mysql<span class="token punctuation">.</span>hostname <span class="token operator">=</span> <span class="token string">&quot;127.0.0.1&quot;</span><span class="token punctuation">;</span>        <span class="token comment">// MySQL 服务器监听地址。</span></span>
<span class="line">    <span class="token keyword">int</span>    mysql<span class="token punctuation">.</span>port     <span class="token operator">=</span> <span class="token number">3309</span><span class="token punctuation">;</span>               <span class="token comment">// MySQL 服务器监听端口。</span></span>
<span class="line">    <span class="token keyword">string</span> mysql<span class="token punctuation">.</span>username <span class="token operator">=</span> <span class="token string">&quot;root&quot;</span><span class="token punctuation">;</span>             <span class="token comment">// MySQL 用户名。</span></span>
<span class="line">    <span class="token keyword">string</span> mysql<span class="token punctuation">.</span>password <span class="token operator">=</span> <span class="token string">&quot;root&quot;</span><span class="token punctuation">;</span>             <span class="token comment">// MySQL 用户密码。</span></span>
<span class="line">    <span class="token keyword">string</span> mysql<span class="token punctuation">.</span>database <span class="token operator">=</span> <span class="token string">&quot;sonolus&quot;</span><span class="token punctuation">;</span>          <span class="token comment">// MySQL 目标数据库名。</span></span>
<span class="line"><span class="token punctuation">}</span><span class="token punctuation">;</span></span>
<span class="line"></span>
<span class="line"><span class="token keyword">typedef</span> <span class="token keyword">vector</span><span class="token operator">&lt;</span>DatabaseUnit<span class="token operator">&gt;</span> DatabaseConfig<span class="token punctuation">;</span> </span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>在 <code>/config/config.json</code> 中:</p><div class="language-cpp line-numbers-mode" data-highlighter="prismjs" data-ext="cpp" data-title="cpp"><pre class="language-cpp"><code><span class="line"><span class="token keyword">enum</span> <span class="token class-name">LOG_TARGET</span> <span class="token punctuation">{</span></span>
<span class="line">    LOG_TARGER_NONE <span class="token operator">=</span> <span class="token number">0</span><span class="token punctuation">,</span></span>
<span class="line">    LOG_TARGET_CONSOLE <span class="token operator">=</span> <span class="token number">1</span><span class="token punctuation">,</span></span>
<span class="line">    LOG_TARGET_FILE <span class="token operator">=</span> <span class="token number">2</span></span>
<span class="line"><span class="token punctuation">}</span><span class="token punctuation">;</span></span>
<span class="line"></span>
<span class="line"><span class="token keyword">class</span> <span class="token class-name">BaseConfig</span> <span class="token punctuation">{</span></span>
<span class="line">    <span class="token keyword">public</span><span class="token operator">:</span></span>
<span class="line"></span>
<span class="line">    <span class="token keyword">map</span><span class="token operator">&lt;</span><span class="token keyword">string</span><span class="token punctuation">,</span> <span class="token keyword">bool</span><span class="token operator">&gt;</span> tables <span class="token operator">=</span> <span class="token punctuation">{</span>                      <span class="token comment">// 指定各表的数据库源</span></span>
<span class="line">        <span class="token punctuation">{</span> <span class="token string">&quot;Level&quot;</span><span class="token punctuation">,</span> <span class="token number">0</span> <span class="token punctuation">}</span><span class="token punctuation">,</span></span>
<span class="line">        <span class="token punctuation">{</span> <span class="token string">&quot;Skin&quot;</span><span class="token punctuation">,</span> <span class="token number">0</span> <span class="token punctuation">}</span><span class="token punctuation">,</span></span>
<span class="line">        <span class="token punctuation">.</span><span class="token punctuation">.</span><span class="token punctuation">.</span></span>
<span class="line">    <span class="token punctuation">}</span><span class="token punctuation">;</span></span>
<span class="line">    <span class="token keyword">string</span> server<span class="token punctuation">.</span>listenHost    <span class="token operator">=</span> <span class="token string">&quot;0.0.0.0&quot;</span><span class="token punctuation">;</span>          <span class="token comment">// 服务器监听 IP，0.0.0.0 为监听所有可用 IP</span></span>
<span class="line">    <span class="token keyword">string</span> server<span class="token punctuation">.</span>listenPost    <span class="token operator">=</span> <span class="token string">&quot;8080&quot;</span><span class="token punctuation">;</span>             <span class="token comment">// 服务器监听端口</span></span>
<span class="line">    <span class="token keyword">string</span> server<span class="token punctuation">.</span>enableSSL     <span class="token operator">=</span> <span class="token boolean">false</span><span class="token punctuation">;</span>              <span class="token comment">// 是否启用 SSL(https)</span></span>
<span class="line">    <span class="token keyword">string</span> server<span class="token punctuation">.</span>httpsCacert   <span class="token operator">=</span> <span class="token string">&quot;cert.pem&quot;</span><span class="token punctuation">;</span>         <span class="token comment">// 如果启用了 SSL，在此填入证书路径</span></span>
<span class="line">    <span class="token keyword">string</span> server<span class="token punctuation">.</span>httpsPrivkey  <span class="token operator">=</span> <span class="token string">&quot;privkey.pem&quot;</span><span class="token punctuation">;</span>      <span class="token comment">// 如果启用了 SSL，在此填入私钥路径</span></span>
<span class="line">    <span class="token keyword">int</span>    server<span class="token punctuation">.</span>threadNumber  <span class="token operator">=</span> <span class="token number">8</span><span class="token punctuation">;</span>                  <span class="token comment">// 工作进程数</span></span>
<span class="line">    <span class="token keyword">bool</span>   logSystem<span class="token punctuation">.</span>debug      <span class="token operator">=</span> <span class="token boolean">false</span><span class="token punctuation">;</span>              <span class="token comment">// 是否启用 Debug 模式</span></span>
<span class="line">    <span class="token keyword">int</span>    logSystem<span class="token punctuation">.</span>target     <span class="token operator">=</span> LOG_TARGET_CONSOLE<span class="token punctuation">;</span> <span class="token comment">// 日志输出位置</span></span>
<span class="line">    <span class="token keyword">string</span> logSystem<span class="token punctuation">.</span>targetFile <span class="token operator">=</span> <span class="token string">&quot;./log.txt&quot;</span><span class="token punctuation">;</span>        <span class="token comment">// 日志文件路径</span></span>
<span class="line">    <span class="token keyword">string</span> sonolus<span class="token punctuation">.</span>version      <span class="token operator">=</span> <span class="token string">&quot;0.8.3&quot;</span><span class="token punctuation">;</span>            <span class="token comment">// 支持的 Sonolus 版本，为空表示全部支持</span></span>
<span class="line">    <span class="token keyword">int</span>    sonolus<span class="token punctuation">.</span>itemsPerPage <span class="token operator">=</span> <span class="token number">20</span><span class="token punctuation">;</span>                 <span class="token comment">// 每页结果数(目前该配置为无效配置)</span></span>
<span class="line">    <span class="token keyword">int</span>    session<span class="token punctuation">.</span>expireTime   <span class="token operator">=</span> <span class="token number">30</span><span class="token punctuation">;</span>                 <span class="token comment">// 会话过期时间(单位: 天)</span></span>
<span class="line">    <span class="token keyword">int</span>    <span class="token keyword">export</span><span class="token punctuation">.</span>retryTime     <span class="token operator">=</span> <span class="token number">5</span><span class="token punctuation">;</span>                  <span class="token comment">// 远程导出时连接重试次数</span></span>
<span class="line">    <span class="token keyword">int</span>    <span class="token keyword">export</span><span class="token punctuation">.</span>hashCheckTime <span class="token operator">=</span> <span class="token number">5</span><span class="token punctuation">;</span>                  <span class="token comment">// 远程导出时哈希检查重试次数</span></span>
<span class="line"><span class="token punctuation">}</span><span class="token punctuation">;</span></span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="单人游戏服务器配置文件" tabindex="-1"><a class="header-anchor" href="#单人游戏服务器配置文件"><span>单人游戏服务器配置文件</span></a></h2><p>在 <code>config/singleplayer_config.json</code> 中:</p><div class="language-cpp line-numbers-mode" data-highlighter="prismjs" data-ext="cpp" data-title="cpp"><pre class="language-cpp"><code><span class="line"><span class="token keyword">class</span> <span class="token class-name">SingleplayerServerButton</span> <span class="token punctuation">{</span></span>
<span class="line">    <span class="token keyword">public</span><span class="token operator">:</span></span>
<span class="line"></span>
<span class="line">    <span class="token keyword">string</span> type<span class="token punctuation">;</span> <span class="token comment">// 显示在服务器主页的按钮类型</span></span>
<span class="line"><span class="token punctuation">}</span><span class="token punctuation">;</span></span>
<span class="line"></span>
<span class="line"><span class="token keyword">class</span> <span class="token class-name">SingleplayerConfig</span> <span class="token punctuation">{</span></span>
<span class="line">    <span class="token keyword">public</span><span class="token operator">:</span></span>
<span class="line"></span>
<span class="line">    <span class="token keyword">string</span> server<span class="token punctuation">.</span>name                <span class="token operator">=</span> <span class="token string">&quot;Sonolus&quot;</span><span class="token punctuation">;</span>                                  <span class="token comment">// 服务器名称</span></span>
<span class="line">    <span class="token keyword">string</span> server<span class="token punctuation">.</span>title               <span class="token operator">=</span> <span class="token string">&quot;Test Server&quot;</span><span class="token punctuation">;</span>                              <span class="token comment">// 服务器标题</span></span>
<span class="line">    <span class="token keyword">string</span> server<span class="token punctuation">.</span>description         <span class="token operator">=</span> <span class="token string">&quot;A Test Server for Sonolus&quot;</span><span class="token punctuation">;</span>                <span class="token comment">// 服务器描述</span></span>
<span class="line">    <span class="token keyword">string</span> server<span class="token punctuation">.</span>logo                <span class="token operator">=</span> <span class="token string">&quot;c3e27937fb9578065038d7988c6d4f955b584d95&quot;</span><span class="token punctuation">;</span> <span class="token comment">// 服务器图标 SHA1 哈希</span></span>
<span class="line">    <span class="token keyword">string</span> server<span class="token punctuation">.</span>banner              <span class="token operator">=</span> <span class="token string">&quot;b4b42df0b336e852d14b4d334c3d99f8992626d8&quot;</span><span class="token punctuation">;</span> <span class="token comment">// 服务器导航图 SHA1 哈希</span></span>
<span class="line">    <span class="token keyword">string</span> server<span class="token punctuation">.</span>rootUrl             <span class="token operator">=</span> <span class="token string">&quot;127.0.0.1:8080&quot;</span><span class="token punctuation">;</span>                           <span class="token comment">// 服务器域名/地址</span></span>
<span class="line">    <span class="token keyword">string</span> server<span class="token punctuation">.</span>data<span class="token punctuation">.</span>prefix         <span class="token operator">=</span> <span class="token string">&quot;&quot;</span><span class="token punctuation">;</span>                                         <span class="token comment">// 使用外部资源文件时的路径前缀，为空表示使用本服务器上的资源</span></span>
<span class="line">    <span class="token keyword">string</span> server<span class="token punctuation">.</span>multiplayer<span class="token punctuation">.</span>address <span class="token operator">=</span> <span class="token string">&quot;ws://127.0.0.1:8080&quot;</span><span class="token punctuation">;</span>                      <span class="token comment">// 多人游戏服务器地址</span></span>
<span class="line">    <span class="token keyword">string</span> language<span class="token punctuation">.</span><span class="token keyword">default</span>           <span class="token operator">=</span> <span class="token string">&quot;en&quot;</span> <span class="token operator">|</span> <span class="token string">&quot;zhs&quot;</span> <span class="token operator">|</span> <span class="token string">&quot;ja&quot;</span> <span class="token operator">|</span> <span class="token string">&quot;ko&quot;</span><span class="token punctuation">;</span>                 <span class="token comment">// 默认语言包</span></span>
<span class="line">    <span class="token keyword">vector</span><span class="token operator">&lt;</span>SingleplayerServerButton<span class="token operator">&gt;</span> server<span class="token punctuation">.</span>button <span class="token operator">=</span> <span class="token punctuation">{</span>                              <span class="token comment">// 显示在服务器主页的按钮，可重复</span></span>
<span class="line">        <span class="token punctuation">{</span> type<span class="token operator">:</span> <span class="token string">&quot;authentication&quot;</span> <span class="token punctuation">}</span><span class="token punctuation">,</span></span>
<span class="line">        <span class="token punctuation">{</span> type<span class="token operator">:</span> <span class="token string">&quot;multiplayer&quot;</span> <span class="token punctuation">}</span><span class="token punctuation">,</span></span>
<span class="line">        <span class="token punctuation">.</span><span class="token punctuation">.</span><span class="token punctuation">.</span></span>
<span class="line">    <span class="token punctuation">}</span><span class="token punctuation">;</span></span>
<span class="line"><span class="token punctuation">}</span><span class="token punctuation">;</span></span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="多人游戏服务器配置文件" tabindex="-1"><a class="header-anchor" href="#多人游戏服务器配置文件"><span>多人游戏服务器配置文件</span></a></h2><p>在 <code>config/multiplayer_config.json</code> 中:</p><div class="language-cpp line-numbers-mode" data-highlighter="prismjs" data-ext="cpp" data-title="cpp"><pre class="language-cpp"><code><span class="line"><span class="token keyword">class</span> <span class="token class-name">MultiplayerConfig</span> <span class="token punctuation">{</span></span>
<span class="line">    <span class="token keyword">public</span><span class="token operator">:</span></span>
<span class="line"></span>
<span class="line">    <span class="token keyword">bool</span> server<span class="token punctuation">.</span>multiplayer<span class="token punctuation">.</span>enable            <span class="token operator">=</span> <span class="token boolean">true</span><span class="token punctuation">;</span> <span class="token comment">// 是否启用多人游戏服务器</span></span>
<span class="line">	<span class="token keyword">bool</span> server<span class="token punctuation">.</span>multiplayer<span class="token punctuation">.</span>allowOtherServers <span class="token operator">=</span> <span class="token boolean">true</span><span class="token punctuation">;</span> <span class="token comment">// 是否允许选择其他服务器的关卡</span></span>
<span class="line"><span class="token punctuation">}</span><span class="token punctuation">;</span></span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="各类型组件配置文件" tabindex="-1"><a class="header-anchor" href="#各类型组件配置文件"><span>各类型组件配置文件</span></a></h2><p>在 <code>config/&lt;itemType&gt;_config.json</code> 中，其中 <code>&lt;itemType&gt;</code> 为组件类型:</p><div class="language-cpp line-numbers-mode" data-highlighter="prismjs" data-ext="cpp" data-title="cpp"><pre class="language-cpp"><code><span class="line"><span class="token keyword">class</span> <span class="token class-name">SectionConfig</span> <span class="token punctuation">{</span></span>
<span class="line">    <span class="token keyword">public</span><span class="token operator">:</span></span>
<span class="line"></span>
<span class="line">    <span class="token keyword">string</span> title<span class="token punctuation">;</span>  <span class="token comment">// 项目标题</span></span>
<span class="line">    <span class="token keyword">string</span> icon<span class="token punctuation">;</span>   <span class="token comment">// 项目图标</span></span>
<span class="line">    <span class="token keyword">string</span> filter<span class="token punctuation">;</span> <span class="token comment">// 筛选时 SQL 代码</span></span>
<span class="line">    <span class="token keyword">string</span> order<span class="token punctuation">;</span>  <span class="token comment">// 排序时 SQL 代码</span></span>
<span class="line"><span class="token punctuation">}</span><span class="token punctuation">;</span></span>
<span class="line"></span>
<span class="line"><span class="token keyword">class</span> <span class="token class-name">SearchConfig</span> <span class="token punctuation">{</span></span>
<span class="line">    <span class="token keyword">public</span><span class="token operator">:</span></span>
<span class="line"></span>
<span class="line">    <span class="token keyword">string</span>         title<span class="token punctuation">;</span>   <span class="token comment">// 搜索标题</span></span>
<span class="line">    <span class="token keyword">string</span>         icon<span class="token punctuation">;</span>    <span class="token comment">// 搜索图标</span></span>
<span class="line">    <span class="token keyword">string</span>         type<span class="token punctuation">;</span>    <span class="token comment">// 搜索类型</span></span>
<span class="line">    <span class="token keyword">vector</span><span class="token operator">&lt;</span>Search<span class="token operator">&gt;</span> options<span class="token punctuation">;</span> <span class="token comment">// 搜索选项</span></span>
<span class="line">    <span class="token keyword">string</span>         filter<span class="token punctuation">;</span>  <span class="token comment">// 筛选时 SQL 代码</span></span>
<span class="line">    <span class="token keyword">string</span>         order<span class="token punctuation">;</span>   <span class="token comment">// 排序时 SQL 代码</span></span>
<span class="line"><span class="token punctuation">}</span><span class="token punctuation">;</span></span>
<span class="line"></span>
<span class="line"><span class="token keyword">class</span> <span class="token class-name">CreateConfig</span> <span class="token punctuation">{</span></span>
<span class="line">    <span class="token keyword">public</span><span class="token operator">:</span></span>
<span class="line"></span>
<span class="line">    <span class="token keyword">string</span>              title<span class="token punctuation">;</span>      <span class="token comment">// 资源创建标题</span></span>
<span class="line">    <span class="token keyword">string</span>              icon<span class="token punctuation">;</span>       <span class="token comment">// 资源创建图标</span></span>
<span class="line">    <span class="token keyword">string</span>              type<span class="token punctuation">;</span>       <span class="token comment">// 资源创建类型</span></span>
<span class="line">    <span class="token keyword">vector</span><span class="token operator">&lt;</span>Search<span class="token operator">&gt;</span>      options<span class="token punctuation">;</span>    <span class="token comment">// 资源创建选项</span></span>
<span class="line">    <span class="token keyword">map</span><span class="token operator">&lt;</span><span class="token keyword">string</span><span class="token punctuation">,</span> <span class="token keyword">string</span><span class="token operator">&gt;</span> values<span class="token punctuation">;</span>     <span class="token comment">// 数据表各项 SQL 值</span></span>
<span class="line">    <span class="token keyword">map</span><span class="token operator">&lt;</span><span class="token keyword">string</span><span class="token punctuation">,</span> <span class="token keyword">string</span><span class="token operator">&gt;</span> constructs<span class="token punctuation">;</span> <span class="token comment">// 重构选项默认值时的 JavaScript 代码</span></span>
<span class="line"><span class="token punctuation">}</span><span class="token punctuation">;</span></span>
<span class="line"></span>
<span class="line"><span class="token keyword">class</span> <span class="token class-name">ItemTypeConfig</span> <span class="token punctuation">{</span></span>
<span class="line">    <span class="token keyword">public</span><span class="token operator">:</span></span>
<span class="line"></span>
<span class="line">    <span class="token keyword">string</span>      itemType<span class="token punctuation">.</span>enableLike <span class="token operator">=</span> <span class="token boolean">true</span><span class="token punctuation">;</span>               <span class="token comment">// 是否启用点赞功能</span></span>
<span class="line">    <span class="token keyword">string</span>      itemType<span class="token punctuation">.</span>enableComment <span class="token operator">=</span> <span class="token boolean">true</span><span class="token punctuation">;</span>            <span class="token comment">// 是否启用评论功能</span></span>
<span class="line">    <span class="token keyword">string</span>      itemType<span class="token punctuation">.</span>enableRating <span class="token operator">=</span> <span class="token boolean">true</span><span class="token punctuation">;</span>             <span class="token comment">// 是否启用评分功能</span></span>
<span class="line">    <span class="token keyword">string</span>      itemType<span class="token punctuation">.</span>enableGUICreate <span class="token operator">=</span> <span class="token boolean">false</span><span class="token punctuation">;</span>         <span class="token comment">// 是否允许用户在网页上创建该类型资源</span></span>
<span class="line">    <span class="token keyword">string</span>      itemType<span class="token punctuation">.</span>enableSonolusCreate <span class="token operator">=</span> <span class="token boolean">false</span><span class="token punctuation">;</span>     <span class="token comment">// 是否允许用户在 Sonolus 里创建该类型资源</span></span>
<span class="line">    <span class="token keyword">vector</span><span class="token operator">&lt;</span><span class="token keyword">int</span><span class="token operator">&gt;</span> itemType<span class="token punctuation">.</span>exceptGUICreate <span class="token operator">=</span> <span class="token punctuation">{</span><span class="token punctuation">}</span><span class="token punctuation">;</span>            <span class="token comment">// 在网页创建的例外用户 uid</span></span>
<span class="line">    <span class="token keyword">vector</span><span class="token operator">&lt;</span><span class="token keyword">int</span><span class="token operator">&gt;</span> itemType<span class="token punctuation">.</span>exceptSonolusCreate <span class="token operator">=</span> <span class="token punctuation">{</span><span class="token punctuation">}</span><span class="token punctuation">;</span>        <span class="token comment">// 在 Sonolus 里创建的例外用户 uid</span></span>
<span class="line">    <span class="token keyword">int</span>         itemType<span class="token punctuation">.</span>pageSize<span class="token punctuation">.</span>info <span class="token operator">=</span> <span class="token number">5</span><span class="token punctuation">;</span>               <span class="token comment">// 在信息界面中每个条目的资源数</span></span>
<span class="line">    <span class="token keyword">int</span>         itemType<span class="token punctuation">.</span>pageSize<span class="token punctuation">.</span>list <span class="token operator">=</span> <span class="token number">20</span><span class="token punctuation">;</span>              <span class="token comment">// 在搜索界面中每页显示的资源数</span></span>
<span class="line">    <span class="token keyword">int</span>         itemType<span class="token punctuation">.</span>pageSize<span class="token punctuation">.</span>recommends <span class="token operator">=</span> <span class="token number">5</span><span class="token punctuation">;</span>         <span class="token comment">// 在每个资源下方的各条目的推荐资源数</span></span>
<span class="line">    <span class="token keyword">int</span>         itemType<span class="token punctuation">.</span>pageSize<span class="token punctuation">.</span>community <span class="token operator">=</span> <span class="token number">5</span><span class="token punctuation">;</span>          <span class="token comment">// 在社区中每页显示的评论数</span></span>
<span class="line">    <span class="token keyword">vector</span><span class="token operator">&lt;</span>SectionConfig<span class="token operator">&gt;</span> itemType<span class="token punctuation">.</span>info<span class="token punctuation">.</span>sections <span class="token operator">=</span> <span class="token punctuation">{</span><span class="token punctuation">}</span><span class="token punctuation">;</span>    <span class="token comment">// 信息界面中各项目配置</span></span>
<span class="line">    <span class="token keyword">vector</span><span class="token operator">&lt;</span>SectionConfig<span class="token operator">&gt;</span> itemType<span class="token punctuation">.</span>details<span class="token punctuation">.</span>sections <span class="token operator">=</span> <span class="token punctuation">{</span><span class="token punctuation">}</span><span class="token punctuation">;</span> <span class="token comment">// 资源下方各项目配置</span></span>
<span class="line">    <span class="token keyword">vector</span><span class="token operator">&lt;</span>SearchConfig<span class="token operator">&gt;</span>  itemType<span class="token punctuation">.</span>searches <span class="token operator">=</span> <span class="token punctuation">{</span><span class="token punctuation">}</span><span class="token punctuation">;</span>         <span class="token comment">// 搜索配置</span></span>
<span class="line">    <span class="token keyword">vector</span><span class="token operator">&lt;</span>CreateConfig<span class="token operator">&gt;</span>  itemType<span class="token punctuation">.</span>creates <span class="token operator">=</span> <span class="token punctuation">{</span><span class="token punctuation">}</span><span class="token punctuation">;</span>          <span class="token comment">// 资源创建配置</span></span>
<span class="line"><span class="token punctuation">}</span><span class="token punctuation">;</span></span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,17),o=[t];function l(c,i){return a(),n("div",null,o)}const u=s(e,[["render",l],["__file","3. config.html.vue"]]),k=JSON.parse('{"path":"/sonolus-server/3.%20config.html","title":"配置文件标准","lang":"zh-CN","frontmatter":{},"headers":[{"level":2,"title":"基础配置文件","slug":"基础配置文件","link":"#基础配置文件","children":[]},{"level":2,"title":"单人游戏服务器配置文件","slug":"单人游戏服务器配置文件","link":"#单人游戏服务器配置文件","children":[]},{"level":2,"title":"多人游戏服务器配置文件","slug":"多人游戏服务器配置文件","link":"#多人游戏服务器配置文件","children":[]},{"level":2,"title":"各类型组件配置文件","slug":"各类型组件配置文件","link":"#各类型组件配置文件","children":[]}],"git":{"updatedTime":1720016854000,"contributors":[{"name":"LittleYang0531","email":"“littleyang0531@outlook.com”","commits":1}]},"filePathRelative":"sonolus-server/3. config.md"}');export{u as comp,k as data};
