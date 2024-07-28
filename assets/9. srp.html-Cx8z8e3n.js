import{_ as t,c as e,o as d,e as s}from"./app-BJrKKWBD.js";const r={},a=s('<h1 id="关于-srp-资源包" tabindex="-1"><a class="header-anchor" href="#关于-srp-资源包"><span>关于 srp 资源包</span></a></h1><p>本页面记载了关于 srp 资源包 (原 Sonolus Server 资源包) 的相关信息。</p><h2 id="定义" tabindex="-1"><a class="header-anchor" href="#定义"><span>定义</span></a></h2><p>srp 资源包 (Sonolus Resources Package)，记录了适用于 Sonolus Server 的资源相关信息。</p><p>与官方的 scp 格式有所不同，官方是基于 zip 格式进行打包的，现有的大部分压缩软件都可以解包。而 srp 是利用另行定义的二进制信息来进行打包的，无法使用现有的压缩软件进行解包（除非您用下面的标准自行编写了解压软件）。</p><h2 id="文件格式" tabindex="-1"><a class="header-anchor" href="#文件格式"><span>文件格式</span></a></h2><table><thead><tr><th>偏移地址</th><th>字节数</th><th>数据类型</th><th>字段名称</th><th>字段说明</th></tr></thead><tbody><tr><td>0</td><td>4</td><td>字符串</td><td>文档标识</td><td>字符串 <code>.srp</code>，用于表示该文件为有效的 srp 数据包</td></tr><tr><td>4</td><td>8</td><td>长整型数</td><td>文件数量</td><td>标识了该数据包存储有多少文件</td></tr><tr><td>12</td><td>x</td><td>object</td><td>文件正文</td><td>前 20 字节表示文件 sha1 哈希，后 8 字节表示该文件大小，后面就是文件正文</td></tr><tr><td>12 + ?</td><td>8</td><td>长整型数</td><td>组件数量</td><td>表示了该数据包存储有多少组件</td></tr><tr><td>20 + ?</td><td>y</td><td>object</td><td>组件正文</td><td>前 1 字节表示组件类型，后 8 字节表示组件 json 大小，后面就是组件 json 正文</td></tr></tbody></table><h2 id="filelist" tabindex="-1"><a class="header-anchor" href="#filelist"><span>filelist</span></a></h2><p>一行一个资源信息。</p><p>如果要导出远程服务器的资源，直接这一行填写资源 <code>url</code> 就行了。</p><p>如果要导出本地资源，先填写组件类型，空一格后填写组件名称。</p>',11),l=[a];function o(n,i){return d(),e("div",null,l)}const p=t(r,[["render",o],["__file","9. srp.html.vue"]]),c=JSON.parse('{"path":"/sonolus-server/9.%20srp.html","title":"关于 srp 资源包","lang":"zh-CN","frontmatter":{},"headers":[{"level":2,"title":"定义","slug":"定义","link":"#定义","children":[]},{"level":2,"title":"文件格式","slug":"文件格式","link":"#文件格式","children":[]},{"level":2,"title":"filelist","slug":"filelist","link":"#filelist","children":[]}],"git":{"updatedTime":1720016854000,"contributors":[{"name":"LittleYang0531","email":"“littleyang0531@outlook.com”","commits":1}]},"filePathRelative":"sonolus-server/9. srp.md"}');export{p as comp,c as data};