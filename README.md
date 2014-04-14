loremAll.js
===========

Dynamically add placeholder text without making a mess of your markup

Include this file after jQuery:
<a target="_blank" href="https://rawgithub.com/brhendr/loremAll.js/master/loremAll.js">&lt;script src='loremAll.js' type='text/javascript'&gt;&lt;/script&gt;</a><br>



<br>
<br>





<br>
<a target="_blank" href="http://benjaminhendric.com/imgCrop/cropDemo.html">View Demo Page</a><br>
<a target="_blank" href="http://codepen.io/ben10886/pen/uhKep">Codepen Demo (plus cats)</a>

<h3>Download</h3>
<ul>
  <li><a href="https://raw.githubusercontent.com/brhendr/imgCrop/master/imgCrop.js">imgCrop.js</a> (3kb)</li>
  <li><a href="https://raw.githubusercontent.com/brhendr/imgCrop/master/build/imgCrop.min.js">imgCrop.min.js</a> (1kb)</li>
</ul>
<h3>Usage</h3>
<h5>HTML</h5>
```html
<h2>Image Crop Demo</h2>

<div class="container">
    <div class="fn-img-crop"><img src="scale.jpg" width="100%"></div>
</div>
```
<h5>Script</h5>
```html
<script type="text/javascript">
  $('.fn-img-crop').imgCrop({
      minWidth: 800, //Width where image stops scaling
      centerPercent: 50 //percentage of image centered on screen (left = 0)
  });
</script>
```
<h5>Style</h5>
```css
<style>
  .fn-img-crop{
      overflow: hidden; /*Hide overflow*/
  }
</style>
```

