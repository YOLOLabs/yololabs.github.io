var Contact = function () {

    return {
        
        //Set Map location 
        initMap: function () {
			var map;
			$(document).ready(function(){
			  map = new GMaps({
				div: '#map',
				lat: 21.002662,
				lng: 105.822389
			  });
			   var marker = map.addMarker({
		            lat: 21.002662,
					lng: 105.822389,
		            title: 'YOLOLabs'
		        });
			});
        }

    };
}();