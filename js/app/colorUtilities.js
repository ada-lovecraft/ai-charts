/*************************
Color Utilities
*************************/
define(function() {
	this.lerp = function(a,b,u) {
	    return (1-u) * a + u * b;
	}
	var self = this;
//converts a hex string to an rgb object
	return {
		palette: {
			darkGrey: { r:96, g: 106, b: 111 },
			grey:{r: 177, g: 181, b:184 },
			green: {r:0, g:175, b:142 },
			orange: { r:255,g:138,b:53},
			red: { r: 255, g: 67, b:77 },
			black: { r:0, g:0,b: 0},
			white: {r:255,g:255,b:255}
		},
		hexToRGB: function(hex) {
		    var result = /^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(hex);
		    return result ? {
		        r: parseInt(result[1], 16),
		        g: parseInt(result[2], 16),
		        b: parseInt(result[3], 16)
		    } : null;
		},
		//converts an rgb object to an rgb string (for css/javascript)
		rgbToString: function(obj) {
			return 'rgb('+obj.r+','+obj.g+','+obj.b+')';
		},
		//Returns a lerped color between startColor and endColor
		fade: function(startColor, endColor, totalSteps, currentStep) {
			var delta = 1.0/totalSteps;
			var mu = Number(delta * (currentStep+1));
			var color = {}
			color.r = parseInt(self.lerp(startColor.r,endColor.r,mu));
			color.g = parseInt(self.lerp(startColor.g,endColor.g,mu));
			color.b = parseInt(self.lerp(startColor.b,endColor.b,mu));
			return color;
		}
	}
});