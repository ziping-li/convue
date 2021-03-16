import{o as n,c as s,a}from"./app.d4385936.js";const t='{"title":"Router","description":"","frontmatter":{},"headers":[{"level":2,"title":"Dynamic routing","slug":"dynamic-routing"},{"level":2,"title":"Add routing information","slug":"add-routing-information"},{"level":2,"title":"Route redirect","slug":"route-redirect"}],"relativePath":"guide/router.md","lastUpdated":1614564227143}',e={},o=a('<h1 id="router"><a class="header-anchor" href="#router" aria-hidden="true">#</a> Router</h1><p>By default, convue will automatically load the .vue|.js|.jsx|.ts|.tsx file in the /src/pages directory and generate a route corresponding to the file name.</p><p>For example, the routing address corresponding to the index.tsx file in the /src/pages directory is /, and the routing address corresponding to the user.tsx file is /user.</p><h2 id="dynamic-routing"><a class="header-anchor" href="#dynamic-routing" aria-hidden="true">#</a> Dynamic routing</h2><p>The naming rule for dynamic routing is _param[.vue|.js|.jsx|.ts|.tsx]</p><h2 id="add-routing-information"><a class="header-anchor" href="#add-routing-information" aria-hidden="true">#</a> Add routing information</h2><p>Add a route tag in the /src/pages/index.tsx file.</p><div class="language-js"><pre><code><span class="token punctuation">{</span>\n  <span class="token comment">/* &lt;route&gt;\n  name:&#39;test&#39;\n  meta:\n    title: 111\n&lt;/route&gt; */</span>\n<span class="token punctuation">}</span>\n\n<span class="token keyword">import</span> <span class="token punctuation">{</span>defineComponent<span class="token punctuation">}</span> <span class="token keyword">from</span><span class="token string">&#39;vue&#39;</span><span class="token punctuation">;</span>\n\n<span class="token keyword">export</span> <span class="token keyword">default</span> <span class="token function">defineComponent</span><span class="token punctuation">(</span><span class="token punctuation">{</span>\n  <span class="token function">setup</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>\n    <span class="token keyword">return</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token operator">&lt;</span>div<span class="token operator">&gt;</span><span class="token operator">&lt;</span><span class="token operator">/</span>div<span class="token operator">&gt;</span><span class="token punctuation">;</span>\n  <span class="token punctuation">}</span><span class="token punctuation">,</span>\n<span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n</code></pre></div><p>If it is sfc (vue single file), no comment is required.</p><p>The syntax supported by the route tag is&#39;json5&#39; |&#39;json&#39; |&#39;yaml&#39;, the default is yaml, if it is json syntax, just specify the lang of the route.</p><div class="language-js"><pre><code><span class="token punctuation">{</span>\n  <span class="token comment">/* &lt;route lang=&quot;json&quot;&gt;\n  {\n    name:&#39;test&#39;,\n    meta: {\n      title: 111\n    }\n  }\n&lt;/route&gt; */</span>\n<span class="token punctuation">}</span>\n\n<span class="token keyword">import</span> <span class="token punctuation">{</span>defineComponent<span class="token punctuation">}</span> <span class="token keyword">from</span><span class="token string">&#39;vue&#39;</span><span class="token punctuation">;</span>\n\n<span class="token keyword">export</span> <span class="token keyword">default</span> <span class="token function">defineComponent</span><span class="token punctuation">(</span><span class="token punctuation">{</span>\n  <span class="token function">setup</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>\n    <span class="token keyword">return</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token operator">&lt;</span>div<span class="token operator">&gt;</span><span class="token operator">&lt;</span><span class="token operator">/</span>div<span class="token operator">&gt;</span><span class="token punctuation">;</span>\n  <span class="token punctuation">}</span><span class="token punctuation">,</span>\n<span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n</code></pre></div><h2 id="route-redirect"><a class="header-anchor" href="#route-redirect" aria-hidden="true">#</a> Route redirect</h2><p>When the address of the website is not in the routing registry, if there is a 404 page under /src/pages, it will be redirected to the /404 address, otherwise it will be redirected to the / address.</p><p>For other rules, please <a href="/convue/config/page.html">refer to page configuration item</a>.</p>',14);e.render=function(a,t,e,p,r,i){return n(),s("div",null,[o])};export default e;export{t as __pageData};
