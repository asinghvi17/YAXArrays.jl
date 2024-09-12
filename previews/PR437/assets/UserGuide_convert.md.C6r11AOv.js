import{_ as a,c as n,a2 as i,o as p}from"./chunks/framework.BxolPc_T.js";const c=JSON.parse('{"title":"Convert YAXArrays","description":"","frontmatter":{},"headers":[],"relativePath":"UserGuide/convert.md","filePath":"UserGuide/convert.md","lastUpdated":null}'),e={name:"UserGuide/convert.md"};function l(t,s,r,h,d,k){return p(),n("div",null,s[0]||(s[0]=[i(`<h1 id="Convert-YAXArrays" tabindex="-1">Convert YAXArrays <a class="header-anchor" href="#Convert-YAXArrays" aria-label="Permalink to &quot;Convert YAXArrays {#Convert-YAXArrays}&quot;">​</a></h1><p>This section describes how to convert variables from types of other Julia packages into YAXArrays and vice versa.</p><div class="warning custom-block"><p class="custom-block-title">WARNING</p><p>YAXArrays is designed to work with large datasets that are way larger than the memory. However, most types are designed to work in memory. Those conversions are only possible if the entire dataset fits into memory. In addition, metadata might be lost during conversion.</p></div><h2 id="Convert-Base.Array" tabindex="-1">Convert <code>Base.Array</code> <a class="header-anchor" href="#Convert-Base.Array" aria-label="Permalink to &quot;Convert \`Base.Array\` {#Convert-Base.Array}&quot;">​</a></h2><p>Convert <code>Base.Array</code> to <code>YAXArray</code>:</p><div class="language-julia vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">julia</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">using</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> YAXArrays</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">m </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">=</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> rand</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">5</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">,</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">10</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">)</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">a </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">=</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> YAXArray</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(m)</span></span></code></pre></div><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span>╭──────────────────────────╮</span></span>
<span class="line"><span>│ 5×10 YAXArray{Float64,2} │</span></span>
<span class="line"><span>├──────────────────────────┴──────────────────────────────────── dims ┐</span></span>
<span class="line"><span>  ↓ Dim_1 Sampled{Int64} Base.OneTo(5) ForwardOrdered Regular Points,</span></span>
<span class="line"><span>  → Dim_2 Sampled{Int64} Base.OneTo(10) ForwardOrdered Regular Points</span></span>
<span class="line"><span>├─────────────────────────────────────────────────────────── metadata ┤</span></span>
<span class="line"><span>  Dict{String, Any}()</span></span>
<span class="line"><span>├────────────────────────────────────────────────────────── file size ┤ </span></span>
<span class="line"><span>  file size: 400.0 bytes</span></span>
<span class="line"><span>└─────────────────────────────────────────────────────────────────────┘</span></span></code></pre></div><p>Convert <code>YAXArray</code> to <code>Base.Array</code>:</p><div class="language-julia vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">julia</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">m2 </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">=</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> collect</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(a</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">.</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">data)</span></span></code></pre></div><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span>5×10 Matrix{Float64}:</span></span>
<span class="line"><span> 0.858268  0.761891  0.227667  0.4259    …  0.681888   0.426309   0.842765</span></span>
<span class="line"><span> 0.650156  0.506528  0.374929  0.318258     0.0091371  0.845724   0.683414</span></span>
<span class="line"><span> 0.633047  0.556317  0.914242  0.376204     0.0628139  0.492263   0.671899</span></span>
<span class="line"><span> 0.346637  0.187742  0.762808  0.589179     0.759786   0.260837   0.133956</span></span>
<span class="line"><span> 0.445081  0.755086  0.464874  0.122056     0.584248   0.0965151  0.0712714</span></span></code></pre></div><h2 id="Convert-Raster" tabindex="-1">Convert <code>Raster</code> <a class="header-anchor" href="#Convert-Raster" aria-label="Permalink to &quot;Convert \`Raster\` {#Convert-Raster}&quot;">​</a></h2><p>A <code>Raster</code> as defined in <a href="https://rafaqz.github.io/Rasters.jl/stable/" target="_blank" rel="noreferrer">Rasters.jl</a> has a same supertype of a <code>YAXArray</code>, i.e. <code>AbstractDimArray</code>, allowing easy conversion between those types:</p><div class="language-julia vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">julia</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">using</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> Rasters</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">lon, lat </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">=</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> X</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">25</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">:</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">1</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">:</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">30</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">), </span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">Y</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">25</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">:</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">1</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">:</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">30</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">)</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">time </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">=</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> Ti</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">2000</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">:</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">2024</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">)</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">ras </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">=</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> Raster</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">rand</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(lon, lat, time))</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">a </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">=</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> YAXArray</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">dims</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(ras), ras</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">.</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">data)</span></span></code></pre></div><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span>╭────────────────────────────╮</span></span>
<span class="line"><span>│ 6×6×25 YAXArray{Float64,3} │</span></span>
<span class="line"><span>├────────────────────────────┴────────────────────────── dims ┐</span></span>
<span class="line"><span>  ↓ X  Sampled{Int64} 25:1:30 ForwardOrdered Regular Points,</span></span>
<span class="line"><span>  → Y  Sampled{Int64} 25:1:30 ForwardOrdered Regular Points,</span></span>
<span class="line"><span>  ↗ Ti Sampled{Int64} 2000:2024 ForwardOrdered Regular Points</span></span>
<span class="line"><span>├─────────────────────────────────────────────────── metadata ┤</span></span>
<span class="line"><span>  Dict{String, Any}()</span></span>
<span class="line"><span>├────────────────────────────────────────────────── file size ┤ </span></span>
<span class="line"><span>  file size: 7.03 KB</span></span>
<span class="line"><span>└─────────────────────────────────────────────────────────────┘</span></span></code></pre></div><div class="language-julia vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">julia</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">ras2 </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">=</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> Raster</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(a)</span></span></code></pre></div><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span>╭──────────────────────────╮</span></span>
<span class="line"><span>│ 6×6×25 Raster{Float64,3} │</span></span>
<span class="line"><span>├──────────────────────────┴──────────────────────────── dims ┐</span></span>
<span class="line"><span>  ↓ X  Sampled{Int64} 25:1:30 ForwardOrdered Regular Points,</span></span>
<span class="line"><span>  → Y  Sampled{Int64} 25:1:30 ForwardOrdered Regular Points,</span></span>
<span class="line"><span>  ↗ Ti Sampled{Int64} 2000:2024 ForwardOrdered Regular Points</span></span>
<span class="line"><span>├─────────────────────────────────────────────────── metadata ┤</span></span>
<span class="line"><span>  Dict{String, Any}()</span></span>
<span class="line"><span>├───────────────────────────────────────────────────── raster ┤</span></span>
<span class="line"><span>  extent: Extent(X = (25, 30), Y = (25, 30), Ti = (2000, 2024))</span></span>
<span class="line"><span></span></span>
<span class="line"><span>└─────────────────────────────────────────────────────────────┘</span></span>
<span class="line"><span>[:, :, 1]</span></span>
<span class="line"><span>  ↓ →  25         26          27          28          29         30</span></span>
<span class="line"><span> 25     0.599319   0.739738    0.517224    0.46464     0.246447   0.524222</span></span>
<span class="line"><span> 26     0.97597    0.0212324   0.901439    0.588787    0.995902   0.0223311</span></span>
<span class="line"><span> 27     0.054274   0.727952    0.207609    0.512466    0.169759   0.334198</span></span>
<span class="line"><span> 28     0.424863   0.578732    0.459622    0.925022    0.942675   0.195091</span></span>
<span class="line"><span> 29     0.470587   0.30611     0.559707    0.0794776   0.920299   0.960171</span></span>
<span class="line"><span> 30     0.541502   0.567559    0.0887351   0.132132    0.010879   0.462092</span></span></code></pre></div><h2 id="Convert-DimArray" tabindex="-1">Convert <code>DimArray</code> <a class="header-anchor" href="#Convert-DimArray" aria-label="Permalink to &quot;Convert \`DimArray\` {#Convert-DimArray}&quot;">​</a></h2><p>A <code>DimArray</code> as defined in <a href="https://rafaqz.github.io/DimensionalData.jl/dev/dimarrays" target="_blank" rel="noreferrer">DimensionalData.jl</a> has a same supertype of a <code>YAXArray</code>, i.e. <code>AbstractDimArray</code>, allowing easy conversion between those types.</p><p>Convert <code>DimArray</code> to <code>YAXArray</code>:</p><div class="language-julia vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">julia</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">using</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> DimensionalData</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">using</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> YAXArrayBase</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">dim_arr </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">=</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> rand</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">X</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">1</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">:</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">5</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">), </span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">Y</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">10.0</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">:</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">15.0</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">), metadata </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">=</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> Dict{String, Any}</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">())</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">a </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">=</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> yaxconvert</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(YAXArray, dim_arr)</span></span></code></pre></div><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span>╭─────────────────────────╮</span></span>
<span class="line"><span>│ 5×6 YAXArray{Float64,2} │</span></span>
<span class="line"><span>├─────────────────────────┴────────────────────────────────── dims ┐</span></span>
<span class="line"><span>  ↓ X Sampled{Int64} 1:5 ForwardOrdered Regular Points,</span></span>
<span class="line"><span>  → Y Sampled{Float64} 10.0:1.0:15.0 ForwardOrdered Regular Points</span></span>
<span class="line"><span>├──────────────────────────────────────────────────────── metadata ┤</span></span>
<span class="line"><span>  Dict{String, Any}()</span></span>
<span class="line"><span>├─────────────────────────────────────────────────────── file size ┤ </span></span>
<span class="line"><span>  file size: 240.0 bytes</span></span>
<span class="line"><span>└──────────────────────────────────────────────────────────────────┘</span></span></code></pre></div><p>Convert <code>YAXArray</code> to <code>DimArray</code>:</p><div class="language-julia vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">julia</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">dim_arr2 </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">=</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> yaxconvert</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(DimArray, a)</span></span></code></pre></div><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span>╭─────────────────────────╮</span></span>
<span class="line"><span>│ 5×6 DimArray{Float64,2} │</span></span>
<span class="line"><span>├─────────────────────────┴────────────────────────────────── dims ┐</span></span>
<span class="line"><span>  ↓ X Sampled{Int64} 1:5 ForwardOrdered Regular Points,</span></span>
<span class="line"><span>  → Y Sampled{Float64} 10.0:1.0:15.0 ForwardOrdered Regular Points</span></span>
<span class="line"><span>├──────────────────────────────────────────────────────── metadata ┤</span></span>
<span class="line"><span>  Dict{String, Any}()</span></span>
<span class="line"><span>└──────────────────────────────────────────────────────────────────┘</span></span>
<span class="line"><span> ↓ →  10.0       11.0        12.0       13.0       14.0        15.0</span></span>
<span class="line"><span> 1     0.823042   0.449413    0.281295   0.546387   0.699989    0.734074</span></span>
<span class="line"><span> 2     0.835672   0.843106    0.360396   0.752808   0.741504    0.186652</span></span>
<span class="line"><span> 3     0.803008   0.0149607   0.28115    0.513483   0.073411    0.805815</span></span>
<span class="line"><span> 4     0.833533   0.0556497   0.907737   0.776019   0.973776    0.364239</span></span>
<span class="line"><span> 5     0.183432   0.0937125   0.767355   0.608077   0.0921096   0.395939</span></span></code></pre></div><div class="info custom-block"><p class="custom-block-title">INFO</p><p>At the moment there is no support to save a DimArray directly into disk as a <code>NetCDF</code> or a <code>Zarr</code> file.</p></div>`,25)]))}const g=a(e,[["render",l]]);export{c as __pageData,g as default};