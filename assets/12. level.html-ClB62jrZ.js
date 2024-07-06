import{_ as e,c as l,o as a,e as s}from"./app-Cn0ZaqMv.js";const n={},t=s(`<h1 id="测试关卡" tabindex="-1"><a class="header-anchor" href="#测试关卡"><span>测试关卡</span></a></h1><p>在本章中，您将会学习到:</p><ul><li>如何上传关卡封面与背景音乐</li><li>如何设置测试谱面</li></ul><h2 id="关卡封面与背景音乐" tabindex="-1"><a class="header-anchor" href="#关卡封面与背景音乐"><span>关卡封面与背景音乐</span></a></h2><p>由于 Sonolus.h 需要搭配上 <a href="https://github.com/SonolusHaniwa/sonolus-server-cpp" target="_blank" rel="noopener noreferrer">Sonolus Server</a> 才能启动开发服务器，因此在本教程的最开始就要求您安装了 Sonolus Server。</p><p>为了上传我们的关卡封面与背景音乐，您只需要在 <code>/dist</code> 文件夹下，将自己的关卡封面重命名为 <code>LevelCover</code>，背景音乐重命名为 <code>LevelBgm</code>，并复制一份命名为 <code>LevelPreview</code>(三个文件都没有后缀名)，并移动到此文件夹即可。</p><p>重新编译引擎，Sonolus.h 会自动上传您放置的关卡封面与背景音乐。</p><h2 id="谱面" tabindex="-1"><a class="header-anchor" href="#谱面"><span>谱面</span></a></h2><p>我们还需要准备好测试谱面:</p><div class="language-txt line-numbers-mode" data-highlighter="prismjs" data-ext="txt" data-title="/chart.txt"><pre class="language-txt"><code><span class="line">1.0</span>
<span class="line">2.0</span>
<span class="line">3.0</span>
<span class="line">4.0</span>
<span class="line">...</span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>重新编译引擎，Sonolus.h 会转换您的谱面并上传至服务器。</p>`,11),i=[t];function o(r,c){return a(),l("div",null,i)}const p=e(n,[["render",o],["__file","12. level.html.vue"]]),h=JSON.parse('{"path":"/sonolus.h/play/12.%20level.html","title":"测试关卡","lang":"zh-CN","frontmatter":{},"headers":[{"level":2,"title":"关卡封面与背景音乐","slug":"关卡封面与背景音乐","link":"#关卡封面与背景音乐","children":[]},{"level":2,"title":"谱面","slug":"谱面","link":"#谱面","children":[]}],"git":{"updatedTime":1720278408000,"contributors":[{"name":"LittleYang0531","email":"“littleyang0531@outlook.com”","commits":1}]},"filePathRelative":"sonolus.h/play/12. level.md"}');export{p as comp,h as data};
