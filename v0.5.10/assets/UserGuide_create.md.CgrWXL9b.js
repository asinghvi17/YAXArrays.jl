import{_ as s,c as a,o as i,a4 as n}from"./chunks/framework.lPGI5Sft.js";const c=JSON.parse('{"title":"Create YAXArrays and Datasets","description":"","frontmatter":{},"headers":[],"relativePath":"UserGuide/create.md","filePath":"UserGuide/create.md","lastUpdated":null}'),t={name:"UserGuide/create.md"},e=n(`<h1 id="Create-YAXArrays-and-Datasets" tabindex="-1">Create YAXArrays and Datasets <a class="header-anchor" href="#Create-YAXArrays-and-Datasets" aria-label="Permalink to &quot;Create YAXArrays and Datasets {#Create-YAXArrays-and-Datasets}&quot;">​</a></h1><p>This section describes how to create arrays and datasets by filling values directly.</p><h2 id="Create-a-YAXArray" tabindex="-1">Create a YAXArray <a class="header-anchor" href="#Create-a-YAXArray" aria-label="Permalink to &quot;Create a YAXArray {#Create-a-YAXArray}&quot;">​</a></h2><p>We can create a new YAXArray by filling the values directly:</p><div class="language-julia vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">julia</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">using</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> YAXArrays</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">a1 </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">=</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> YAXArray</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">rand</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">10</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">, </span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">20</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">, </span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">5</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">))</span></span></code></pre></div><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span>╭─────────────────────────────╮</span></span>
<span class="line"><span>│ 10×20×5 YAXArray{Float64,3} │</span></span>
<span class="line"><span>├─────────────────────────────┴────────────────────────────────── dims ┐</span></span>
<span class="line"><span>  ↓ Dim_1 Sampled{Int64} Base.OneTo(10) ForwardOrdered Regular Points,</span></span>
<span class="line"><span>  → Dim_2 Sampled{Int64} Base.OneTo(20) ForwardOrdered Regular Points,</span></span>
<span class="line"><span>  ↗ Dim_3 Sampled{Int64} Base.OneTo(5) ForwardOrdered Regular Points</span></span>
<span class="line"><span>├──────────────────────────────────────────────────────────── metadata ┤</span></span>
<span class="line"><span>  Dict{String, Any}()</span></span>
<span class="line"><span>├─────────────────────────────────────────────────────────── file size ┤ </span></span>
<span class="line"><span>  file size: 7.81 KB</span></span>
<span class="line"><span>└──────────────────────────────────────────────────────────────────────┘</span></span></code></pre></div><p>The dimensions have only generic names, e.g. <code>Dim_1</code> and only integer values. We can also specify the dimensions with custom names enabling easier access:</p><div class="language-julia vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">julia</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">using</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> Dates</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">axlist </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">=</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> (</span></span>
<span class="line"><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">    Dim{:time}</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">Date</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;2022-01-01&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">)</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">:</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">Day</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">1</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">)</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">:</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">Date</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;2022-01-30&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">)),</span></span>
<span class="line"><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">    Dim{:lon}</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">range</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">1</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">, </span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">10</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">, length</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">=</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">10</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">)),</span></span>
<span class="line"><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">    Dim{:lat}</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">range</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">1</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">, </span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">5</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">, length</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">=</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">15</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">)),</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">)</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">data2 </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">=</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> rand</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">30</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">, </span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">10</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">, </span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">15</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">)</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">properties </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">=</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> Dict</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">:origin</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;"> =&gt;</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> &quot;user guide&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">)</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">a2 </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">=</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> YAXArray</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(axlist, data2, properties)</span></span></code></pre></div><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span>╭──────────────────────────────╮</span></span>
<span class="line"><span>│ 30×10×15 YAXArray{Float64,3} │</span></span>
<span class="line"><span>├──────────────────────────────┴───────────────────────────────────────── dims ┐</span></span>
<span class="line"><span>  ↓ time Sampled{Date} Date(&quot;2022-01-01&quot;):Dates.Day(1):Date(&quot;2022-01-30&quot;) ForwardOrdered Regular Points,</span></span>
<span class="line"><span>  → lon  Sampled{Float64} 1.0:1.0:10.0 ForwardOrdered Regular Points,</span></span>
<span class="line"><span>  ↗ lat  Sampled{Float64} 1.0:0.2857142857142857:5.0 ForwardOrdered Regular Points</span></span>
<span class="line"><span>├──────────────────────────────────────────────────────────────────── metadata ┤</span></span>
<span class="line"><span>  Dict{Symbol, String} with 1 entry:</span></span>
<span class="line"><span>  :origin =&gt; &quot;user guide&quot;</span></span>
<span class="line"><span>├─────────────────────────────────────────────────────────────────── file size ┤ </span></span>
<span class="line"><span>  file size: 35.16 KB</span></span>
<span class="line"><span>└──────────────────────────────────────────────────────────────────────────────┘</span></span></code></pre></div><div class="language-julia vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">julia</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">a2</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">.</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">properties</span></span></code></pre></div><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span>Dict{Symbol, String} with 1 entry:</span></span>
<span class="line"><span>  :origin =&gt; &quot;user guide&quot;</span></span></code></pre></div><div class="language-julia vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">julia</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">a2</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">.</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">axes</span></span></code></pre></div><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span>↓ time Sampled{Date} Date(&quot;2022-01-01&quot;):Dates.Day(1):Date(&quot;2022-01-30&quot;) ForwardOrdered Regular Points,</span></span>
<span class="line"><span>→ lon  Sampled{Float64} 1.0:1.0:10.0 ForwardOrdered Regular Points,</span></span>
<span class="line"><span>↗ lat  Sampled{Float64} 1.0:0.2857142857142857:5.0 ForwardOrdered Regular Points</span></span></code></pre></div><h2 id="Create-a-Dataset" tabindex="-1">Create a Dataset <a class="header-anchor" href="#Create-a-Dataset" aria-label="Permalink to &quot;Create a Dataset {#Create-a-Dataset}&quot;">​</a></h2><div class="language-julia vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">julia</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">data3 </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">=</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> rand</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">30</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">, </span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">10</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">, </span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">15</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">)</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">a3 </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">=</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> YAXArray</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(axlist, data3, properties)</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">arrays </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">=</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> Dict</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">:a2</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;"> =&gt;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> a2, </span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">:a3</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;"> =&gt;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> a3)</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">ds </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">=</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> Dataset</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(; properties, arrays</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">...</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">)</span></span></code></pre></div><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span>YAXArray Dataset</span></span>
<span class="line"><span>Shared Axes: </span></span>
<span class="line"><span>↓ time Sampled{Date} Date(&quot;2022-01-01&quot;):Dates.Day(1):Date(&quot;2022-01-30&quot;) ForwardOrdered Regular Points,</span></span>
<span class="line"><span>→ lon  Sampled{Float64} 1.0:1.0:10.0 ForwardOrdered Regular Points,</span></span>
<span class="line"><span>↗ lat  Sampled{Float64} 1.0:0.2857142857142857:5.0 ForwardOrdered Regular Points</span></span>
<span class="line"><span>Variables: </span></span>
<span class="line"><span>a2</span></span>
<span class="line"><span>a3</span></span>
<span class="line"><span></span></span>
<span class="line"><span>Properties: Dict(:origin =&gt; &quot;user guide&quot;)</span></span></code></pre></div>`,16),p=[e];function l(h,k,r,d,E,g){return i(),a("div",null,p)}const y=s(t,[["render",l]]);export{c as __pageData,y as default};
