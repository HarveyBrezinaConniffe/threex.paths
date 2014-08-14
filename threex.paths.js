var THREEx = THREEx || {};

THREEx.path = function(points) {
    var onRenderFcts = [];
    
    
    var onfinish = function(mesh) {

    };

    var onchange = function(mesh) {

    };

    var onloop = function(mesh) {

    }

    this.finish = function(finishf) {
	onfinish = finishf;
    }
    
    this.change = function(changef) {
	onchange = changef;
    }

    this.loop = function(loopf) {
	onloop = loopf;
    }

    this.follow = function(mesh, speed, loop) {
	
	var cpoint = 1;
	mesh.position.set(points[0][0], points[0][1], points[0][2]);

	onRenderFcts.push(function callback(delta, now) {
	    
	    if(points[cpoint][0] == Math.round(mesh.position.x) && points[cpoint][1] == Math.round(mesh.position.y) && points[cpoint][2] == Math.round(mesh.position.z)) {
		if(loop == true && points.length-1 == cpoint) {
		    onloop(mesh);
		    cpoint = 0;
		}
		
		else if(loop == false && points.length-1 == cpoint) {
		    onfinish(mesh);
		    onRenderFcts.splice(0, 1);
		}
		
		else if(points.length-1 != cpoint) {
		    cpoint ++;
		    onchange(mesh);
		}
	    
	    }
	    
	    if(mesh.position.x < points[cpoint][0]) {
		mesh.position.x += speed;
	    }
	    else if(mesh.position.x > points[cpoint][0]) {
		mesh.position.x -= speed;
	    }
	    
	    if(mesh.position.y < points[cpoint][1]) {
		mesh.position.y += speed;
	    }
	    else if(mesh.position.y > points[cpoint][1]) {
		mesh.position.y -= speed;
	    }
	    
	    if(mesh.position.z < points[cpoint][2]) {
		mesh.position.z += speed;
	    }
	    else if(mesh.position.z > points[cpoint][2]) {
		mesh.position.z -= speed;
	    }
	    
	});
	
    }
    
    this.update = function(delta, now) {
	onRenderFcts.forEach(function(updateFct){
	    updateFct(delta, now);
	});
    }
};
