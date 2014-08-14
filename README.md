Threex.paths
============
Threex.paths is a [threex game extension for three.js](http://www.threejsgames.com/extensions/). It lets you define a path and make a mesh move along it.

Examples
========
[examples/basic.html](http://harveybrezinaconniffe.github.io/threex.paths/basic.html)

How to install it
=================
You can install it via script tag

```
<script src='threex.paths.js'></script>
```

Or you can install it with [bower](http://bower.io)

'''
bower install threex.paths
'''

How to use it
=============
First of all you have to make a path

'''
var path = new THREEx.path([ [0, 0, 0], [3, 0, 0], [3, 3, 0], [-3, 2, -4] ]);
'''

When creating a new path you **HAVE** to input 2 dimensional array of all the points, it will now create a path between those points.

Next update the path in the render function

'''
updateFcts.push(function(delta, now){	
	path.update(delta, now);
});
'''

So now you have a path that is being updated but there are no objects on it, to make a object follow a path run this

'''
path.follow(object, 0.01, true);
'''

The 1st variable that you input is the object that you want to follow, The 2nd variable is the speed( How far it will move on each update ), and the 3rd is a boolean of whether to loop or not, If it is false at the end of the path the object will stop and the finish function will be called, If it is true it will travel from the last point to the first point in a loop;

Some more functions are,

'''
path.loop(function(mesh) {
  alert("loop "+mesh);
});
'''

That will be called when the object reaches the end and loops,

'''
path.finish(function(mesh) {
  alert("finish "+mesh);
});
'''

That will be called when the object reaches the	end if loop is false,

'''
path.change(function(mesh) {
  alert("change "+mesh);
});
'''

And finally that will be called when the object reaches a new point in the array.
All of those functions get one input that is the object it was called for.

**NOTE: This has been testes with meshes but should work with particals.**

Possible Improvements
=====================
* Make a function that draws a visible line along the path