import{_ as e}from"./_plugin-vue_export-helper.cdc0426e.js";import{o as s,c as n,f as i}from"./app.7ac5edfc.js";const a={},r=i(`<h2 id="\u5F00\u542Froot\u6743\u9650" tabindex="-1"><a class="header-anchor" href="#\u5F00\u542Froot\u6743\u9650" aria-hidden="true">#</a> \u5F00\u542Froot\u6743\u9650</h2><ol><li><p>\u8BBE\u7F6Eroot\u5BC6\u7801\uFF0C\u9700\u7262\u8BB0</p><p><code>sudo passwd root</code></p></li><li><p>\u4FEE\u6539 50-ubuntu.conf \u6587\u4EF6</p><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code><span class="token function">sudo</span> gedit /usr/share/lightdm/lightdm.conf.d/50-ubuntu.conf

<span class="token comment"># \u6587\u4EF6\u672B\u5C3E\u65B0\u589E</span>
greeter-show-manual-login<span class="token operator">=</span>true
all-guest<span class="token operator">=</span>false
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></li><li><p>\u4FEE\u6539 gdm-autologin \u6587\u4EF6</p><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code><span class="token function">sudo</span> gedit /etc/pam.d/gdm-autologin

<span class="token comment"># \u6CE8\u91CA\u6389\u4EE5\u4E0B\u5185\u5BB9</span>
<span class="token comment"># auth required pam_succeed_if.so user != root quiet_success</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></li><li><p>\u4FEE\u6539 gdm-password \u6587\u4EF6</p><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code><span class="token function">sudo</span> gedit /etc/pam.d/gdm-password

<span class="token comment"># \u6CE8\u91CA\u6389\u4EE5\u4E0B\u5185\u5BB9</span>
<span class="token comment"># auth required pam_succeed_if.so user != root quiet_success</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></li><li><p>\u4FEE\u6539 /root/.profile \u6587\u4EF6</p><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code><span class="token function">sudo</span> gedit /root/.profile

<span class="token comment"># \u4FEE\u6539 mesg n 2&gt; /dev/null || true \u4E3A\u4EE5\u4E0B\u5185\u5BB9</span>
<span class="token comment">#mesg n 2&gt; /dev/null || true</span>
<span class="token function">tty</span> <span class="token parameter variable">-s</span> <span class="token operator">&amp;&amp;</span> mesg n <span class="token operator">||</span> <span class="token boolean">true</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></li><li><p>\u91CD\u542F\u7CFB\u7EDF\uFF0C\u4EE5root\u7528\u6237\u767B\u5F55\u5373\u53EF</p></li></ol><h2 id="\u963F\u91CC\u6E90\u4E0B\u8F7D\u914D\u7F6E" tabindex="-1"><a class="header-anchor" href="#\u963F\u91CC\u6E90\u4E0B\u8F7D\u914D\u7F6E" aria-hidden="true">#</a> \u963F\u91CC\u6E90\u4E0B\u8F7D\u914D\u7F6E</h2><p>ubuntu\u963F\u91CC\u6E90\u5730\u5740\uFF1Ahttps://developer.aliyun.com/mirror/ubuntu</p><ol><li><p>\u5907\u4EFD\u539F\u6765\u7684\u914D\u7F6E\u6587\u4EF6</p><p><code>cp /etc/apt/sources.list /etc/apt/sources.list.bak</code></p></li><li><p>\u66FF\u6362 sources.list \u5185\u5BB9</p><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code>gedit /etc/apt/sources.list

<span class="token comment">#\u66FF\u6362\u4EE5\u4E0B\u5185\u5BB9</span>
deb https://mirrors.aliyun.com/ubuntu/ focal main restricted universe multiverse
deb-src https://mirrors.aliyun.com/ubuntu/ focal main restricted universe multiverse

deb https://mirrors.aliyun.com/ubuntu/ focal-security main restricted universe multiverse
deb-src https://mirrors.aliyun.com/ubuntu/ focal-security main restricted universe multiverse

deb https://mirrors.aliyun.com/ubuntu/ focal-updates main restricted universe multiverse
deb-src https://mirrors.aliyun.com/ubuntu/ focal-updates main restricted universe multiverse

<span class="token comment"># deb https://mirrors.aliyun.com/ubuntu/ focal-proposed main restricted universe multiverse</span>
<span class="token comment"># deb-src https://mirrors.aliyun.com/ubuntu/ focal-proposed main restricted universe multiverse</span>

deb https://mirrors.aliyun.com/ubuntu/ focal-backports main restricted universe multiverse
deb-src https://mirrors.aliyun.com/ubuntu/ focal-backports main restricted universe multiverse
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></li><li><p>\u66F4\u65B0 apt \u6E90\u548C\u670D\u52A1</p><p><code>apt-get update &amp;&amp; apt-get upgrade -y</code></p></li></ol><h2 id="\u5F00\u542Fssh\u8FDE\u63A5\u670D\u52A1" tabindex="-1"><a class="header-anchor" href="#\u5F00\u542Fssh\u8FDE\u63A5\u670D\u52A1" aria-hidden="true">#</a> \u5F00\u542FSSH\u8FDE\u63A5\u670D\u52A1</h2><ol><li><p>\u5B89\u88C5 ssh-server</p><p><code>apt-get install -y openssh-server</code></p></li><li><p>\u5F00\u542Fssh\u670D\u52A1</p><p><code>service ssh start</code></p></li></ol><h2 id="\u914D\u7F6E\u9759\u6001\u7F51\u7EDC" tabindex="-1"><a class="header-anchor" href="#\u914D\u7F6E\u9759\u6001\u7F51\u7EDC" aria-hidden="true">#</a> \u914D\u7F6E\u9759\u6001\u7F51\u7EDC</h2><ol><li><p>\u5B89\u88C5 net-tools\uFF0C\u7528\u4E8E\u67E5\u770B\u7F51\u7EDC\u4FE1\u606F</p><p><code>apt-get install -y net-tools</code></p></li><li></li></ol>`,9),l=[r];function t(d,c){return s(),n("div",null,l)}const p=e(a,[["render",t],["__file","01config.html.vue"]]);export{p as default};
