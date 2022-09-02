import{_ as t}from"./plugin-vue_export-helper.21dcd24c.js";import{o as p,c as r,a as n,d as e,b as s,e as o,r as i}from"./app.a35fa967.js";const l={},c=n("h2",{id:"\u5B89\u88C5",tabindex:"-1"},[n("a",{class:"header-anchor",href:"#\u5B89\u88C5","aria-hidden":"true"},"#"),s(" \u5B89\u88C5")],-1),u=n("h3",{id:"docker-\u7248\u672C",tabindex:"-1"},[n("a",{class:"header-anchor",href:"#docker-\u7248\u672C","aria-hidden":"true"},"#"),s(" Docker \u7248\u672C")],-1),d={href:"https://hub.docker.com/_/solr",target:"_blank",rel:"noopener noreferrer"},k=s("https://hub.docker.com/_/solr"),h=o('<ol><li><p>\u62C9\u53D6\u955C\u50CF</p><p><code>docker pull solr:8.11.2</code></p></li><li><p>\u8FD0\u884C\u955C\u50CF\uFF0C\u751F\u6210\u5BB9\u5668</p><p><code>docker run --name my-solr -d -p 8983:8983 solr:8.11.2</code></p></li><li><p>\u8FDB\u5165\u5BB9\u5668\u5B9E\u4F8B\u8FDB\u884C\u914D\u7F6E</p><p><code>docker exec -u root -it my-solr /bin/bash</code></p></li></ol><h2 id="\u914D\u7F6E" tabindex="-1"><a class="header-anchor" href="#\u914D\u7F6E" aria-hidden="true">#</a> \u914D\u7F6E</h2><h3 id="\u914D\u7F6E\u7528\u6237\u540D\u5BC6\u7801" tabindex="-1"><a class="header-anchor" href="#\u914D\u7F6E\u7528\u6237\u540D\u5BC6\u7801" aria-hidden="true">#</a> \u914D\u7F6E\u7528\u6237\u540D\u5BC6\u7801</h3>',3),v={href:"https://solr.apache.org/guide/solr/latest/deployment-guide/basic-authentication-plugin.html",target:"_blank",rel:"noopener noreferrer"},m=s("https://solr.apache.org/guide/solr/latest/deployment-guide/basic-authentication-plugin.html"),b=o(`<p>docker \u5BB9\u5668\u4E2D\u9700\u8981\u5C06 security.json \u914D\u7F6E\u5230 /var/solr/data/ \u76EE\u5F55\u4E0B</p><p>security.json \u4EE5\u4E0B\u4E3A root:123456 \u7684\u914D\u7F6E\u793A\u4F8B</p><div class="language-json ext-json line-numbers-mode"><pre class="language-json"><code><span class="token punctuation">{</span>
  <span class="token property">&quot;authentication&quot;</span><span class="token operator">:</span> <span class="token punctuation">{</span>
    <span class="token property">&quot;blockUnknown&quot;</span><span class="token operator">:</span> <span class="token boolean">true</span><span class="token punctuation">,</span>
    <span class="token property">&quot;class&quot;</span><span class="token operator">:</span> <span class="token string">&quot;solr.BasicAuthPlugin&quot;</span><span class="token punctuation">,</span>
    <span class="token property">&quot;credentials&quot;</span><span class="token operator">:</span> <span class="token punctuation">{</span>
      <span class="token property">&quot;root&quot;</span><span class="token operator">:</span> <span class="token string">&quot;Z5dtYJIw3ADbjHRCJb+GQnlJb0Z6LKGth3/qky2oxOM= X6XSApBJQh2zebpPKjP8h4fPVJcDc7sKfadfdNRGghQ=&quot;</span>
    <span class="token punctuation">}</span><span class="token punctuation">,</span>
    <span class="token property">&quot;realm&quot;</span><span class="token operator">:</span> <span class="token string">&quot;My Solr users&quot;</span><span class="token punctuation">,</span>
    <span class="token property">&quot;forwardCredentials&quot;</span><span class="token operator">:</span> <span class="token boolean">false</span>
  <span class="token punctuation">}</span><span class="token punctuation">,</span>
  <span class="token property">&quot;authorization&quot;</span><span class="token operator">:</span> <span class="token punctuation">{</span>
    <span class="token property">&quot;class&quot;</span><span class="token operator">:</span> <span class="token string">&quot;solr.RuleBasedAuthorizationPlugin&quot;</span><span class="token punctuation">,</span>
    <span class="token property">&quot;permissions&quot;</span><span class="token operator">:</span> <span class="token punctuation">[</span>
      <span class="token punctuation">{</span>
        <span class="token property">&quot;name&quot;</span><span class="token operator">:</span> <span class="token string">&quot;security-edit&quot;</span><span class="token punctuation">,</span>
        <span class="token property">&quot;role&quot;</span><span class="token operator">:</span> <span class="token string">&quot;admin&quot;</span>
      <span class="token punctuation">}</span>
    <span class="token punctuation">]</span><span class="token punctuation">,</span>
    <span class="token property">&quot;user-role&quot;</span><span class="token operator">:</span> <span class="token punctuation">{</span>
      <span class="token property">&quot;root&quot;</span><span class="token operator">:</span> <span class="token string">&quot;admin&quot;</span>
    <span class="token punctuation">}</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="\u4E2D\u6587\u5206\u8BCD\u5668\u914D\u7F6E" tabindex="-1"><a class="header-anchor" href="#\u4E2D\u6587\u5206\u8BCD\u5668\u914D\u7F6E" aria-hidden="true">#</a> \u4E2D\u6587\u5206\u8BCD\u5668\u914D\u7F6E</h3><h2 id="\u4F7F\u7528" tabindex="-1"><a class="header-anchor" href="#\u4F7F\u7528" aria-hidden="true">#</a> \u4F7F\u7528</h2><h3 id="\u5E38\u7528\u547D\u4EE4" tabindex="-1"><a class="header-anchor" href="#\u5E38\u7528\u547D\u4EE4" aria-hidden="true">#</a> \u5E38\u7528\u547D\u4EE4</h3><ol><li><p>\u521B\u5EFA Solr \u5B9E\u4F8B</p><p><code>docker exec -it {container_id} solr create_core -c {instance_solr}</code></p></li></ol>`,7);function q(_,f){const a=i("ExternalLinkIcon");return p(),r("div",null,[c,u,n("p",null,[n("a",d,[k,e(a)])]),h,n("p",null,[n("a",v,[m,e(a)])]),b])}var x=t(l,[["render",q],["__file","00install.html.vue"]]);export{x as default};