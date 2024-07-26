import{_ as s,c as a,o as n,a4 as i}from"./chunks/framework.lPGI5Sft.js";const y=JSON.parse('{"title":"Convert YAXArrays","description":"","frontmatter":{},"headers":[],"relativePath":"UserGuide/convert.md","filePath":"UserGuide/convert.md","lastUpdated":null}'),p={name:"UserGuide/convert.md"},e=i(`<h1 id="Convert-YAXArrays" tabindex="-1">Convert YAXArrays <a class="header-anchor" href="#Convert-YAXArrays" aria-label="Permalink to &quot;Convert YAXArrays {#Convert-YAXArrays}&quot;">​</a></h1><p>This section describes how to convert variables from types of other Julia packages into YAXArrays and vice versa.</p><div class="warning custom-block"><p class="custom-block-title">WARNING</p><p>YAXArrays is designed to work with large datasets that are way larger than the memory. However, most types are designed to work in memory. Those conversions are only possible if the entire dataset fits into memory. In addition, metadata might be lost during conversion.</p></div><h2 id="Convert-Base.Array" tabindex="-1">Convert <code>Base.Array</code> <a class="header-anchor" href="#Convert-Base.Array" aria-label="Permalink to &quot;Convert \`Base.Array\` {#Convert-Base.Array}&quot;">​</a></h2><p>Convert <code>Base.Array</code> to <code>YAXArray</code>:</p><div class="language-julia vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">julia</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">using</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> YAXArrays</span></span>
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
<span class="line"><span> 0.0479824  0.21733   0.503822   0.471616   …  0.727172  0.859895   0.835692</span></span>
<span class="line"><span> 0.313251   0.690378  0.276406   0.0524268     0.580563  0.799858   0.794808</span></span>
<span class="line"><span> 0.261339   0.248805  0.0272231  0.482603      0.435339  0.817619   0.459364</span></span>
<span class="line"><span> 0.253175   0.218575  0.516812   0.816341      0.112915  0.0898559  0.628495</span></span>
<span class="line"><span> 0.347648   0.411819  0.65062    0.866521      0.365944  0.929291   0.693457</span></span></code></pre></div><h2 id="Convert-Raster" tabindex="-1">Convert <code>Raster</code> <a class="header-anchor" href="#Convert-Raster" aria-label="Permalink to &quot;Convert \`Raster\` {#Convert-Raster}&quot;">​</a></h2><p>A <code>Raster</code> as defined in <a href="https://rafaqz.github.io/Rasters.jl/stable/" target="_blank" rel="noreferrer">Rasters.jl</a> has a same supertype of a <code>YAXArray</code>, i.e. <code>AbstractDimArray</code>, allowing easy conversion between those types:</p><div class="language-julia vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">julia</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">using</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> Rasters</span></span>
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
<span class="line"><span>  ↓ →  25          26         27         28         29          30</span></span>
<span class="line"><span> 25     0.632948    0.68686    0.705456   0.960694   0.671561    0.166385</span></span>
<span class="line"><span> 26     0.598948    0.844498   0.783346   0.142439   0.0439638   0.896142</span></span>
<span class="line"><span> 27     0.130873    0.716444   0.414494   0.459177   0.691192    0.00800633</span></span>
<span class="line"><span> 28     0.0337353   0.469808   0.263889   0.873889   0.432649    0.723609</span></span>
<span class="line"><span> 29     0.940098    0.83113    0.6651     0.813735   0.0502287   0.851757</span></span>
<span class="line"><span> 30     0.578336    0.798949   0.72069    0.741497   0.935314    0.972381</span></span></code></pre></div><h2 id="Convert-DimArray" tabindex="-1">Convert <code>DimArray</code> <a class="header-anchor" href="#Convert-DimArray" aria-label="Permalink to &quot;Convert \`DimArray\` {#Convert-DimArray}&quot;">​</a></h2><p>A <code>DimArray</code> as defined in <a href="https://rafaqz.github.io/DimensionalData.jl/dev/dimarrays" target="_blank" rel="noreferrer">DimensionalData.jl</a> has a same supertype of a <code>YAXArray</code>, i.e. <code>AbstractDimArray</code>, allowing easy conversion between those types.</p><p>Convert <code>DimArray</code> to <code>YAXArray</code>:</p><div class="language-julia vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">julia</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">using</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> DimensionalData</span></span>
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
<span class="line"><span> ↓ →  10.0       11.0       12.0       13.0       14.0       15.0</span></span>
<span class="line"><span> 1     0.881921   0.541503   0.340663   0.575957   0.433296   0.602085</span></span>
<span class="line"><span> 2     0.73388    0.244494   0.559203   0.556982   0.393411   0.880507</span></span>
<span class="line"><span> 3     0.647451   0.450589   0.603671   0.681068   0.536156   0.994356</span></span>
<span class="line"><span> 4     0.148048   0.51328    0.182729   0.577165   0.175644   0.0470657</span></span>
<span class="line"><span> 5     0.897744   0.898278   0.279639   0.235205   0.395856   0.0687852</span></span></code></pre></div><div class="info custom-block"><p class="custom-block-title">INFO</p><p>At the moment there is no support to save a DimArray directly into disk as a <code>NetCDF</code> or a <code>Zarr</code> file.</p></div>`,25),l=[e];function t(r,h,d,k,o,c){return n(),a("div",null,l)}const E=s(p,[["render",t]]);export{y as __pageData,E as default};
