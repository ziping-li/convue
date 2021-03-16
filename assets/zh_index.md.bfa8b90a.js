import{o as n,c as s,a}from"./app.d4385936.js";const p='{"title":"什么是 convue？","description":"","frontmatter":{},"headers":[{"level":2,"title":"动机与优势","slug":"动机与优势"},{"level":2,"title":"快速上手","slug":"快速上手"},{"level":2,"title":"使用脚手架（推荐）","slug":"使用脚手架（推荐）"},{"level":2,"title":"项目目录","slug":"项目目录"}],"relativePath":"zh/index.md","lastUpdated":1615889037889}',t={},o=a('<h1 id="什么是-convue？"><a class="header-anchor" href="#什么是-convue？" aria-hidden="true">#</a> 什么是 convue？</h1><p>convue 是一个基于 vite 和 vue3 开发的一个 vite 的插件，让你拥有一套快速开发项目的体验，类似于 nuxt 和 umi.js。</p><h2 id="动机与优势"><a class="header-anchor" href="#动机与优势" aria-hidden="true">#</a> 动机与优势</h2><ol><li>umi.js 暂时不支持 vue，而 nuxt 还没有完美支持 vue3 和 vite；</li><li>convue 因为只是 vite 的一个插件，更接近于 vue 官方的基础生态，能完美融合其他基础库；</li><li>convue 仅仅是一个开发依赖，相对于其他框架而言，构建之后的体积几乎为 0。</li></ol><h2 id="快速上手"><a class="header-anchor" href="#快速上手" aria-hidden="true">#</a> 快速上手</h2><ol><li>安装 convue.</li></ol><div class="language-bash"><pre><code><span class="token function">yarn</span> <span class="token function">add</span> convue -D\n</code></pre></div><ol start="2"><li>在项目中使用</li></ol><p>在 vite.config.js 中使用</p><div class="language-js"><pre><code><span class="token keyword">import</span> convue <span class="token keyword">from</span> <span class="token string">&#39;convue&#39;</span><span class="token punctuation">;</span>\n\n<span class="token keyword">export</span> <span class="token keyword">default</span> <span class="token function">defineConfig</span><span class="token punctuation">(</span><span class="token punctuation">{</span>\n  plugins<span class="token operator">:</span> <span class="token punctuation">[</span>\n    <span class="token operator">...</span><span class="token function">convue</span><span class="token punctuation">(</span><span class="token punctuation">{</span><span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">,</span>\n  <span class="token punctuation">]</span><span class="token punctuation">,</span>\n<span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n</code></pre></div><ol start="3"><li>在 main.js 中引入需要的包，如果不需要的则可以不引入</li></ol><div class="language-js"><pre><code><span class="token keyword">import</span> <span class="token punctuation">{</span> createApp <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">&#39;vue&#39;</span><span class="token punctuation">;</span>\n<span class="token keyword">import</span> App <span class="token keyword">from</span> <span class="token string">&#39;./src/App.vue&#39;</span><span class="token punctuation">;</span>\n<span class="token keyword">import</span> router <span class="token keyword">from</span> <span class="token string">&#39;pages-generated&#39;</span><span class="token punctuation">;</span>\n<span class="token keyword">import</span> globalComponent <span class="token keyword">from</span> <span class="token string">&#39;components-generated&#39;</span><span class="token punctuation">;</span>\n<span class="token keyword">import</span> store <span class="token keyword">from</span> <span class="token string">&#39;store-generated&#39;</span><span class="token punctuation">;</span>\n<span class="token keyword">import</span> plugin <span class="token keyword">from</span> <span class="token string">&#39;plugin-generated&#39;</span><span class="token punctuation">;</span>\n<span class="token keyword">import</span> i18n <span class="token keyword">from</span> <span class="token string">&#39;locale-generated&#39;</span><span class="token punctuation">;</span>\n\n<span class="token keyword">const</span> app <span class="token operator">=</span> <span class="token function">createApp</span><span class="token punctuation">(</span>App<span class="token punctuation">)</span><span class="token punctuation">;</span>\nwindow<span class="token punctuation">.</span>__APP__ <span class="token operator">=</span> app<span class="token punctuation">;</span> <span class="token comment">// 为了让 middleware 能获取到组件实例，如果不需要使用可以移除该行</span>\n\napp<span class="token punctuation">.</span><span class="token function">use</span><span class="token punctuation">(</span>router<span class="token punctuation">)</span><span class="token punctuation">;</span>\napp<span class="token punctuation">.</span><span class="token function">use</span><span class="token punctuation">(</span>globalComponent<span class="token punctuation">)</span><span class="token punctuation">;</span>\napp<span class="token punctuation">.</span><span class="token function">use</span><span class="token punctuation">(</span>store<span class="token punctuation">)</span><span class="token punctuation">;</span>\napp<span class="token punctuation">.</span><span class="token function">use</span><span class="token punctuation">(</span>plugin<span class="token punctuation">)</span><span class="token punctuation">;</span>\napp<span class="token punctuation">.</span><span class="token function">use</span><span class="token punctuation">(</span>i18n<span class="token punctuation">)</span><span class="token punctuation">;</span>\napp<span class="token punctuation">.</span><span class="token function">mount</span><span class="token punctuation">(</span><span class="token string">&#39;#app&#39;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n</code></pre></div><p>使用所有的包.</p><div class="language-js"><pre><code><span class="token keyword">import</span> <span class="token punctuation">{</span> createApp <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">&#39;vue&#39;</span><span class="token punctuation">;</span>\n<span class="token keyword">import</span> App <span class="token keyword">from</span> <span class="token string">&#39;. /src/App.vue&#39;</span><span class="token punctuation">;</span>\n<span class="token keyword">import</span> convue <span class="token keyword">from</span> <span class="token string">&#39;convue-package&#39;</span><span class="token punctuation">;</span>\n\n<span class="token keyword">const</span> app <span class="token operator">=</span> <span class="token function">createApp</span><span class="token punctuation">(</span>App<span class="token punctuation">)</span><span class="token punctuation">;</span>\napp<span class="token punctuation">.</span><span class="token function">use</span><span class="token punctuation">(</span>convue<span class="token punctuation">)</span><span class="token punctuation">;</span>\napp<span class="token punctuation">.</span><span class="token function">mount</span><span class="token punctuation">(</span><span class="token string">&#39;#app&#39;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n</code></pre></div><h2 id="使用脚手架（推荐）"><a class="header-anchor" href="#使用脚手架（推荐）" aria-hidden="true">#</a> 使用脚手架（推荐）</h2><p>convue 提供了一套初始化项目的脚手架工具，目前支持 sfc (vue 单文件) 形式和 tsx 方式两种开发模式。</p><div class="language-bash"><pre><code><span class="token comment"># step 1</span>\n<span class="token function">yarn</span> global <span class="token function">add</span> convue-cli\n<span class="token comment"># step 2</span>\n<span class="token function">mkdir</span> my-app <span class="token operator">&amp;&amp;</span> <span class="token builtin class-name">cd</span> my-app\n<span class="token comment"># step 3 - 在命令行中输入 convue, 后续会提示操作</span>\nconvue\n<span class="token comment"># step 4 - 开始</span>\n<span class="token function">npm</span> run dev\n</code></pre></div><h2 id="项目目录"><a class="header-anchor" href="#项目目录" aria-hidden="true">#</a> 项目目录</h2><p>convue 采用约定式的目录形式，因此我们需要遵守这一套开发方式.往往在项目中要做到统一规范，提高效率，这是一种有效的措施。</p><p>如果你需要改变目录结构，可以<a href="/convue/zh/config/page.html">参考配置项</a>。</p><p>以 tsx 形式为例：</p><div class="language-js"><pre><code><span class="token punctuation">.</span>\n├── <span class="token keyword">public</span>\n├── src\n    ├── components\n    ├── layouts\n        ├── <span class="token keyword">default</span><span class="token punctuation">.</span>tsx\n    ├── locales\n        ├── en<span class="token operator">-</span><span class="token constant">US</span><span class="token punctuation">.</span>ts\n        ├── zh<span class="token operator">-</span><span class="token constant">CN</span><span class="token punctuation">.</span>ts\n    ├── middleware\n    ├── pages\n        └── index<span class="token punctuation">.</span>tsx\n    ├── plugins\n    ├── store\n    └── App<span class="token punctuation">.</span>tsx\n├── <span class="token punctuation">.</span>babelrc\n├── <span class="token punctuation">.</span>eslintrc<span class="token punctuation">.</span>js\n├── <span class="token punctuation">.</span>gitignore\n├── <span class="token punctuation">.</span>prettierrc\n├── <span class="token punctuation">.</span>stylelintrc<span class="token punctuation">.</span>json\n├── index<span class="token punctuation">.</span>html\n├── <span class="token keyword">package</span><span class="token punctuation">.</span>json\n├── shims<span class="token punctuation">.</span>d<span class="token punctuation">.</span>ts\n├── tsconfig<span class="token punctuation">.</span>json\n├── vite<span class="token punctuation">.</span>config<span class="token punctuation">.</span>ts\n├── yarn<span class="token punctuation">.</span>lock\n</code></pre></div>',22);t.render=function(a,p,t,e,c,u){return n(),s("div",null,[o])};export default t;export{p as __pageData};