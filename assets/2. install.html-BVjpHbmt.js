import{_ as s,c as a,o as n,e}from"./app-s2P5H-ce.js";const l={},i=e(`<h1 id="安装服务" tabindex="-1"><a class="header-anchor" href="#安装服务"><span>安装服务</span></a></h1><p>该项目仅支持 Linux 和 Windows 系统。对于 MacOS 系统，由于我们并没有相应的设备进行开发和测试，因此我们不提供对 MacOS 系统的支持。如果你有能力的话，可以考虑帮助我们提供对 MacOS 系统的支持。</p><p>对于如上操作系统，我们提供了预编译压缩包和手动编译两种安装方式。如果您不放心我们提供的预编译压缩包，您可以自己拉取源码，手动进行编译。</p><h2 id="安装依赖" tabindex="-1"><a class="header-anchor" href="#安装依赖"><span>安装依赖</span></a></h2><p>对于 Linux 操作系统，无论哪种安装方式，您都需要自己安装程序所需的全部依赖库。安装指令如下:</p><div class="language-bash line-numbers-mode" data-highlighter="prismjs" data-ext="sh" data-title="sh"><pre class="language-bash"><code><span class="line"><span class="token comment"># 对于 Ubuntu 操作系统:</span></span>
<span class="line"><span class="token function">sudo</span> <span class="token function">apt</span> <span class="token function">install</span> g++ libjsoncpp-dev libmysqlclient-dev libssl-dev libsqlite3-dev libcurl4 libzip-dev <span class="token parameter variable">-y</span></span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div></div></div><p>对于 Windows 操作系统，由于 Windows 并没有依赖库源可供您安装所有必需依赖，配置环境相较于 Linux 操作系统麻烦数倍。因此我们建议您使用预编译安装包直接进行安装。</p><p>如果您执意要使用手动安装，以下是您需要准备的依赖库清单:</p><div class="language-bash line-numbers-mode" data-highlighter="prismjs" data-ext="sh" data-title="sh"><pre class="language-bash"><code><span class="line">MinGW</span>
<span class="line">libmysqlclient <span class="token punctuation">(</span>不是 MySQL Connector/C++<span class="token punctuation">)</span></span>
<span class="line">libjsoncpp</span>
<span class="line">libsqlite3</span>
<span class="line">openssl</span>
<span class="line">zlib</span>
<span class="line">libcurl</span>
<span class="line">libzip</span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="预编译压缩包" tabindex="-1"><a class="header-anchor" href="#预编译压缩包"><span>预编译压缩包</span></a></h2><p>所有预编译压缩包保证开启了所有功能，且所有功能均能正常运作。</p><ol><li>从 <a href="https://github.com/SonolusHaniwa/sonolus-server-cpp/releases/latest" target="_blank" rel="noopener noreferrer">Latest Release</a> 处下载对应系统和架构的预编译压缩包。</li><li>解压预编译压缩包，将其放在您喜欢的目录里。安装完成。</li></ol><h2 id="手动编译" tabindex="-1"><a class="header-anchor" href="#手动编译"><span>手动编译</span></a></h2><ol><li>使用以下指令从 Github 拉取所有源码</li></ol><div class="language-bash line-numbers-mode" data-highlighter="prismjs" data-ext="sh" data-title="sh"><pre class="language-bash"><code><span class="line"><span class="token function">git</span> clone <span class="token parameter variable">--recursive</span> https://github.com/SonolusHaniwa/sonolus-server-cpp</span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div></div></div><ol start="2"><li>进入源码文件夹，输入以下指令直接开始编译</li></ol><div class="language-bash line-numbers-mode" data-highlighter="prismjs" data-ext="sh" data-title="sh"><pre class="language-bash"><code><span class="line">g++ main.cpp <span class="token parameter variable">-o</span> sonolus <span class="token parameter variable">-ldl</span> <span class="token parameter variable">-lpthread</span> <span class="token parameter variable">-lcrypto</span> <span class="token parameter variable">-lssl</span> <span class="token parameter variable">-ljsoncpp</span> <span class="token parameter variable">-std</span><span class="token operator">=</span>c++14 <span class="token parameter variable">-O2</span> <span class="token parameter variable">-g</span></span>
<span class="line"><span class="token comment"># 附加编译指令列表:</span></span>
<span class="line"><span class="token comment"># -DENABLE_MYSQL -lmysqlclient 允许程序与 MySQL/MariaDB 数据库进行交互。</span></span>
<span class="line"><span class="token comment"># -DENABLE_SQLITE -lsqlite3 允许程序与 SQLite 数据库进行交互。</span></span>
<span class="line"><span class="token comment"># -DENABLE_CURL -lcurl 允许程序与外界互联网进行交互，关闭后将无法导出远程服务器资源。</span></span>
<span class="line"><span class="token comment"># -DENABLE_ZIP -lzip 允许程序解压 zip 压缩包，关闭后将无法导入官方 scp 数据包。</span></span>
<span class="line"><span class="token comment"># Windows 操作系统的编译指令可能会有所不同，具体看您静态库的文件名称。</span></span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ol start="3"><li>(可选)输入以下指令编译我们提供的插件</li></ol><div class="language-bash line-numbers-mode" data-highlighter="prismjs" data-ext="sh" data-title="sh"><pre class="language-bash"><code><span class="line"><span class="token comment"># 对于 Linux 操作系统</span></span>
<span class="line">g++ plugins/libsonolush/libsonolush.cpp <span class="token parameter variable">-o</span> plugins/libsonolush.so <span class="token parameter variable">-fPIC</span> <span class="token parameter variable">-shared</span> <span class="token parameter variable">-std</span><span class="token operator">=</span>c++17 <span class="token parameter variable">-DENABLE_MYSQL</span> <span class="token parameter variable">-DENABLE_SQLITE</span></span>
<span class="line"><span class="token comment"># 对于 Windows 操作系统</span></span>
<span class="line">g++ plugins/libsonolush/libsonolush.cpp <span class="token parameter variable">-o</span> plugins/libsonolush.dll <span class="token parameter variable">-fPIC</span> <span class="token parameter variable">-shared</span> <span class="token parameter variable">-std</span><span class="token operator">=</span>c++17 <span class="token parameter variable">-DENABLE_MYSQL</span> <span class="token parameter variable">-DENABLE_SQLITE</span></span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ol start="4"><li>进入数据库，将 <code>data.sql</code> 导入至数据库里。</li><li>如中途未出现错误，安装完成，源码文件夹下会出现一个名为 <code>sonolus(.exe)</code> 的可执行文件。</li></ol>`,20),p=[i];function t(r,c){return n(),a("div",null,p)}const d=s(l,[["render",t],["__file","2. install.html.vue"]]),m=JSON.parse('{"path":"/sonolus-server/2.%20install.html","title":"安装服务","lang":"zh-CN","frontmatter":{},"headers":[{"level":2,"title":"安装依赖","slug":"安装依赖","link":"#安装依赖","children":[]},{"level":2,"title":"预编译压缩包","slug":"预编译压缩包","link":"#预编译压缩包","children":[]},{"level":2,"title":"手动编译","slug":"手动编译","link":"#手动编译","children":[]}],"git":{"updatedTime":1720016854000,"contributors":[{"name":"LittleYang0531","email":"“littleyang0531@outlook.com”","commits":1}]},"filePathRelative":"sonolus-server/2. install.md"}');export{d as comp,m as data};
