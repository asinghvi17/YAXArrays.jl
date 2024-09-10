import{_ as a,c as i,a2 as n,o as t}from"./chunks/framework.Bs0lzSQW.js";const g=JSON.parse('{"title":"Getting Started","description":"","frontmatter":{},"headers":[],"relativePath":"get_started.md","filePath":"get_started.md","lastUpdated":null}'),p={name:"get_started.md"};function l(e,s,h,k,r,d){return t(),i("div",null,s[0]||(s[0]=[n(`<h1 id="Getting-Started" tabindex="-1">Getting Started <a class="header-anchor" href="#Getting-Started" aria-label="Permalink to &quot;Getting Started {#Getting-Started}&quot;">​</a></h1><h2 id="installation" tabindex="-1">Installation <a class="header-anchor" href="#installation" aria-label="Permalink to &quot;Installation&quot;">​</a></h2><p>Install <a href="https://julialang.org/downloads/" target="_blank" rel="noreferrer">Julia v1.10 or above</a>. YAXArrays.jl is available through the Julia package manager. You can enter it by pressing <code>]</code> in the REPL and then typing</p><div class="language-julia vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">julia</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">pkg</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">&gt;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> add YAXArrays</span></span></code></pre></div><p>Alternatively, you can also do</p><div class="language-julia vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">julia</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">import</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> Pkg; Pkg</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">.</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">add</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;YAXArrays&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">)</span></span></code></pre></div><h2 id="quickstart" tabindex="-1">Quickstart <a class="header-anchor" href="#quickstart" aria-label="Permalink to &quot;Quickstart&quot;">​</a></h2><p>Create a simple array from random numbers given the size of each dimension or axis:</p><div class="language-julia vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">julia</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">using</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> YAXArrays</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">a </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">=</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> YAXArray</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">rand</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">2</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">,</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">3</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">))</span></span></code></pre></div><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span>╭─────────────────────────╮</span></span>
<span class="line"><span>│ 2×3 YAXArray{Float64,2} │</span></span>
<span class="line"><span>├─────────────────────────┴───────────────────────────────────── dims ┐</span></span>
<span class="line"><span>  ↓ Dim_1 Sampled{Int64} Base.OneTo(2) ForwardOrdered Regular Points,</span></span>
<span class="line"><span>  → Dim_2 Sampled{Int64} Base.OneTo(3) ForwardOrdered Regular Points</span></span>
<span class="line"><span>├─────────────────────────────────────────────────────────── metadata ┤</span></span>
<span class="line"><span>  Dict{String, Any}()</span></span>
<span class="line"><span>├────────────────────────────────────────────────────────── file size ┤ </span></span>
<span class="line"><span>  file size: 48.0 bytes</span></span>
<span class="line"><span>└─────────────────────────────────────────────────────────────────────┘</span></span></code></pre></div><p>Assemble a more complex <code>YAXArray</code> with 4 dimensions, i.e. time, x, y and a variable type:</p><div class="language-julia vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">julia</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">using</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> DimensionalData</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;"># axes or dimensions with name and tick values</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">axlist </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">=</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> (</span></span>
<span class="line"><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">    Dim{:time}</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">range</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">1</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">, </span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">20</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">, length</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">=</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">20</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">)),</span></span>
<span class="line"><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">    X</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">range</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">1</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">, </span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">10</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">, length</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">=</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">10</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">)),</span></span>
<span class="line"><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">    Y</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">range</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">1</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">, </span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">5</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">, length</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">=</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">15</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">)),</span></span>
<span class="line"><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">    Dim{:variable}</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">([</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;temperature&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">, </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;precipitation&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">])</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">)</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;"># the actual data matching the dimensions defined in axlist</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">data </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">=</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> rand</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">20</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">, </span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">10</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">, </span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">15</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">, </span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">2</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">)</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;"># metadata about the array</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">props </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">=</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> Dict</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(</span></span>
<span class="line"><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">    &quot;origin&quot;</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;"> =&gt;</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> &quot;YAXArrays.jl example&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">,</span></span>
<span class="line"><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">    &quot;x&quot;</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;"> =&gt;</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> &quot;longitude&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">,</span></span>
<span class="line"><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">    &quot;y&quot;</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;"> =&gt;</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> &quot;latitude&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">,</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">);</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">a2 </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">=</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> YAXArray</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(axlist, data, props)</span></span></code></pre></div><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span>╭────────────────────────────────╮</span></span>
<span class="line"><span>│ 20×10×15×2 YAXArray{Float64,4} │</span></span>
<span class="line"><span>├────────────────────────────────┴─────────────────────────────────────── dims ┐</span></span>
<span class="line"><span>  ↓ time     Sampled{Float64} 1.0:1.0:20.0 ForwardOrdered Regular Points,</span></span>
<span class="line"><span>  → X        Sampled{Float64} 1.0:1.0:10.0 ForwardOrdered Regular Points,</span></span>
<span class="line"><span>  ↗ Y        Sampled{Float64} 1.0:0.2857142857142857:5.0 ForwardOrdered Regular Points,</span></span>
<span class="line"><span>  ⬔ variable Categorical{String} [&quot;temperature&quot;, &quot;precipitation&quot;] ReverseOrdered</span></span>
<span class="line"><span>├──────────────────────────────────────────────────────────────────── metadata ┤</span></span>
<span class="line"><span>  Dict{String, String} with 3 entries:</span></span>
<span class="line"><span>  &quot;y&quot;      =&gt; &quot;latitude&quot;</span></span>
<span class="line"><span>  &quot;x&quot;      =&gt; &quot;longitude&quot;</span></span>
<span class="line"><span>  &quot;origin&quot; =&gt; &quot;YAXArrays.jl example&quot;</span></span>
<span class="line"><span>├─────────────────────────────────────────────────────────────────── file size ┤ </span></span>
<span class="line"><span>  file size: 46.88 KB</span></span>
<span class="line"><span>└──────────────────────────────────────────────────────────────────────────────┘</span></span></code></pre></div><p>Get the temperature map at the first point in time:</p><div class="language-julia vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">julia</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">a2[variable</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">=</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">At</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;temperature&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">), time</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">=</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">1</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">]</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">.</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">data</span></span></code></pre></div><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span>10×15 view(::Array{Float64, 4}, 1, :, :, 1) with eltype Float64:</span></span>
<span class="line"><span> 0.786388   0.848312  0.874871  0.751188  …  0.00094307  0.128799  0.898531</span></span>
<span class="line"><span> 0.649586   0.238587  0.159869  0.412462     0.901698    0.502015  0.807379</span></span>
<span class="line"><span> 0.517167   0.991223  0.43297   0.15034      0.838645    0.299747  0.193798</span></span>
<span class="line"><span> 0.0232393  0.716048  0.134584  0.906826     0.33777     0.358187  0.355266</span></span>
<span class="line"><span> 0.307961   0.287428  0.108197  0.739067     0.431233    0.258644  0.742444</span></span>
<span class="line"><span> 0.251963   0.811805  0.517496  0.903257  …  0.561088    0.387275  0.672077</span></span>
<span class="line"><span> 0.243569   0.27155   0.634162  0.636654     0.101639    0.622309  0.497096</span></span>
<span class="line"><span> 0.881279   0.215206  0.285906  0.346752     0.173768    0.341458  0.547842</span></span>
<span class="line"><span> 0.886789   0.854159  0.37706   0.83817      0.861002    0.76044   0.359557</span></span>
<span class="line"><span> 0.206875   0.781237  0.495915  0.578149     0.148831    0.680046  0.267327</span></span></code></pre></div><h2 id="updates" tabindex="-1">Updates <a class="header-anchor" href="#updates" aria-label="Permalink to &quot;Updates&quot;">​</a></h2><div class="tip custom-block"><p class="custom-block-title">TIP</p><p>The Julia Compiler is always improving. As such, we recommend using the latest stable version of Julia.</p></div><p>You may check the installed version with:</p><div class="language-julia vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">julia</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">pkg</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">&gt;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> st YAXArrays</span></span></code></pre></div><div class="info custom-block"><p class="custom-block-title">INFO</p><p>With <code>YAXArrays.jl 0.5</code> we switched the underlying data type to be a subtype of the DimensionalData.jl types. Therefore the indexing with named dimensions changed to the DimensionalData syntax. See the <a href="https://rafaqz.github.io/DimensionalData.jl/stable/" target="_blank" rel="noreferrer"><code>DimensionalData.jl docs</code></a>.</p></div>`,21)]))}const E=a(p,[["render",l]]);export{g as __pageData,E as default};
