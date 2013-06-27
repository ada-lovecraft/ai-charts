/*************************
Color Utilities
*************************/
define(function() {
	this.lerp = function(a,b,u) {
	    return (1-u) * a + u * b;
	};

	this.componentToHex = function(c) {
    	var hex = c.toString(16);
    	return hex.length == 1 ? "0" + hex : hex;
	};

	this.subColors = {
		'DCS':'black',
		'PRG':'blue'
	};
	this.usedColors = ['black','blue'];
	var self = this;

	this.palette = {
		text: {
			lightGray:{r: 204, g: 204, b:204 },
			darkGray:{r:66, g:66, b:66}
		},
		ui: {
			green: {r:55, g:178, b:14},
			orange: { r:255,g:153,b:0},
			red: { r: 228, g: 11, b:11 },
			black: { r:0, g:0,b: 0},
			blue: {r: 0,g:159,b:218}
		}
	};

	return {
		getUIColor: function(color) {
			return self.palette.ui[color];
		},
		getTextColor: function(color) {
			return self.palette.text[color];
		},
		getSubColor: function(sub) {
			if(sub in subColors) {
				return self.palette.ui[subColors[sub]];
			} else {
				//TODO: add a shim for IE7
				if (self.usedColors.length >= Object.keys(self.palette.ui).length) 
					self.usedColors = ['black','blue'];
				for(var color in self.palette.ui) {
					if (self.usedColors.indexOf(color) == -1) {
						self.usedColors.push(color);
						self.subColors[sub] = color;
						return self.palette.ui[color];
					} 
				}
			}
		},
		dumpSubs: function () {
			console.log(self.subColors);
			console.log(self.usedColors);
		},
		rgbToHex: function(color) {
    		return "#" + self.componentToHex(color.r) + self.componentToHex(color.g) + self.componentToHex(color.b);
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
		rgbaToString: function(obj,opacity) {
			return 'rgba(' + obj.r + ',' + obj.g + ',' + obj.b + ',' + opacity + ')';
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