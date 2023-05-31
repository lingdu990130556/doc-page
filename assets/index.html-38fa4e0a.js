import{_ as e,o as a,c as n,e as s}from"./app-9a7305ee.js";const i="/doc-page/assets/img-f7ea6e45.png",c="/doc-page/assets/img_1-711fae6e.png",d="/doc-page/assets/img_3-70f4adbf.png",o="/doc-page/assets/img_4-c9e68082.png",l="/doc-page/assets/img_2-a8e40763.png",r={},t=s('<h1 id="node" tabindex="-1"><a class="header-anchor" href="#node" aria-hidden="true">#</a> Node</h1><h2 id="yarn" tabindex="-1"><a class="header-anchor" href="#yarn" aria-hidden="true">#</a> yarn</h2><h3 id="问题" tabindex="-1"><a class="header-anchor" href="#问题" aria-hidden="true">#</a> 问题</h3><p>yarn : 无法加载文件 D:\\ruanjian\\Node\\node_global\\yarn.ps1，因为在此系统上禁止运行脚本。有关详细信息，请参阅 https:/go.microsoft.com/fwlink/?LinkID=135170 中的 about_Execution_Policies。</p><figure><img src="'+i+'" alt="img.png" tabindex="0" loading="lazy"><figcaption>img.png</figcaption></figure><h3 id="解决" tabindex="-1"><a class="header-anchor" href="#解决" aria-hidden="true">#</a> 解决</h3><ol><li><p>在windows搜索powershell，右键以管理员身份运行<br> 直接在文件地址栏输入<code>powershell</code> ,然后回车会自动打开程序 <img src="'+c+'" alt="" loading="lazy"><img src="'+d+'" alt="" loading="lazy"> 去掉最后的<code>powershell.exe</code>再回车到达目标文件夹，右键以管理员身份运行 <img src="'+o+`" alt="" loading="lazy"></p></li><li><p>在本地计算机上运行您编写的未签名脚本和来自其他用户的签名脚本，使用以下命令将计算机上的 执行策略更改为 RemoteSigned<br> 执行：</p></li></ol><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code>set-ExecutionPolicy RemoteSigned
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p><img src="`+l+`" alt="" loading="lazy"> 选择Y，回车</p><p>再次运行yarn ***，问题解决了</p><h2 id="npm" tabindex="-1"><a class="header-anchor" href="#npm" aria-hidden="true">#</a> npm</h2><h3 id="问题-1" tabindex="-1"><a class="header-anchor" href="#问题-1" aria-hidden="true">#</a> 问题</h3><p>npm install卡住 获取不到core-js问题解决</p><ul><li>1.卡住的地方</li></ul><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token comment"># 卡住的地方</span>
reify:core-js: http fetch GET <span class="token number">200</span> https://cdn.npmmirror.com/packages/core-js/3.19.1/core-js-3.19.1.tgz 9260ms <span class="token punctuation">(</span>cache miss<span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><ul><li>2.解决方案</li></ul><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token comment"># 解决方案 执行</span>
<span class="token function">npm</span> <span class="token function">install</span> core-js@3
<span class="token comment"># 看你自己的core-js版本 有的是 core-js@2</span>
<span class="token function">npm</span> <span class="token function">install</span> core-js@2

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,17),p=[t];function m(h,u){return a(),n("div",null,p)}const b=e(r,[["render",m],["__file","index.html.vue"]]);export{b as default};