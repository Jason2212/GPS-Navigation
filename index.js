var app = {
	initialize: function() {
		this.bindEvents();
	},
	bindEvents: function() {
		document.addEventListener('deviceready', this.onDeviceReady, false);
	},
	onDeviceReady: function() {
		navigator.geolocation.getCurrentPosition(app.onSuccess, app.onError);
	},
	onSuccess: function(position) {
		var longitude = position.coords.longitude;
		var latitude = position.coords.latitude;
		var latlong = new google.maps.latlong(latitude, longitude);
		
		var mapOptions = {
			center: latlong,
			Zoom: 16,
			mapTypeId: google.maps.MapTypeId.ROADMAP
		};
		var map=new google.maps.Map(document.getElementById("geolocation"), mapOptions);
	},
	onError: function(error) {
	alert('code: '	+ error.code	+ '/n' + 'message:' + error.message + '/n');
	},
};