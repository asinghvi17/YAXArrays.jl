import{_ as e,c as s,o as t,a4 as a}from"./chunks/framework.Ce33LqFc.js";const g=JSON.parse('{"title":"Contribute to Documentation","description":"","frontmatter":{},"headers":[],"relativePath":"HowdoI/contribute.md","filePath":"HowdoI/contribute.md","lastUpdated":null}'),i={name:"HowdoI/contribute.md"},o=a(`<h1 id="Contribute-to-Documentation" tabindex="-1">Contribute to Documentation <a class="header-anchor" href="#Contribute-to-Documentation" aria-label="Permalink to &quot;Contribute to Documentation {#Contribute-to-Documentation}&quot;">​</a></h1><p>Contributing with examples can be done by first creating a new file example <a href="https://github.com/JuliaDataCubes/YAXArrays.jl/tree/master/docs/examples/UserGuide" target="_blank" rel="noreferrer">here</a></p><div class="info custom-block"><p class="custom-block-title">new file</p><ul><li><code>your_new_file.md</code> at <code>docs/src/UserGuide/</code></li></ul></div><p>Once this is done you need to add a new entry <a href="https://github.com/JuliaDataCubes/YAXArrays.jl/blob/master/docs/src/.vitepress/config.mts" target="_blank" rel="noreferrer">here</a> at the appropriate level.</p><div class="info custom-block"><p class="custom-block-title">add entry to docs</p><p>Your new entry should look like:</p><ul><li>{ text: &#39;Your title example&#39;, link: &#39;/UserGuide/your_new_file.md&#39; }</li></ul></div><h2 id="Build-docs-locally" tabindex="-1">Build docs locally <a class="header-anchor" href="#Build-docs-locally" aria-label="Permalink to &quot;Build docs locally {#Build-docs-locally}&quot;">​</a></h2><p>If you want to take a look at the docs locally before doing a PR follow the next steps:</p><p>Install the dependencies in your system, locate yourself at the <code>docs</code> level folder, then do</p><div class="language-sh vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">sh</span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">npm</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> i</span></span></code></pre></div><p>Then simply go to your <code>docs</code> env and activate it, i.e.</p><div class="language-sh vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">sh</span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">docs&gt;</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> julia</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">julia&gt;</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> ]</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">pkg&gt;</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> activate</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> .</span></span></code></pre></div><p>Next, run the scripts. Generate files and build docs by running:</p><div class="language-sh vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">sh</span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">include(</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">&quot;make.jl&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">)</span></span></code></pre></div><p>Now go to your <code>terminal</code> in the same path <code>docs&gt;</code> and run:</p><div class="language-sh vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">sh</span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">npm</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> run</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> docs:dev</span></span></code></pre></div><p>This should ouput <code>http://localhost:5173/YAXArrays.jl/</code>, copy/paste this into your browser and you are all set.</p>`,16),l=[o];function n(d,c,p,r,h,u){return t(),s("div",null,l)}const y=e(i,[["render",n]]);export{g as __pageData,y as default};
