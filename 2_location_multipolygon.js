// Creating map options
                 let mapOptions = {
                    center: [48, 2],
                    zoom: 10
                 }
                 
                 // Creating a map object
                 let map = new L.map('map', mapOptions);
                 
                 // Creating a Layer object
                 let layer = new 
	         L.TileLayer('http://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png');
                 
		let polygon = new L.Polygon([

		
			[
			[48.8702, 2.3368],
			[48.8741, 2.3368],
			[48.8724, 2.33]
			],
			[
			[48.8707, 2.3372],
			[48.8745, 2.3372],
			[48.8726, 2.335]
			]
		
		]);

		map.addLayer(polygon);

		
                 // Adding layer to the map
                 map.addLayer(layer);	

		 let locations = [
    			{
        			"id": 1,
        			"lat": 48.8702,
        			"long": 2.3368,
        			"src": 'images/1.jpg',
        			"title": "Mizuumi Boutique Hotel",
        			"url":"https://www.booking.com/"
    			},
    			{
        			"id": 2,
        			"lat": 48.8741,
        			"long": 2.3368,
        			"src": 'images/2.jpg',
        			"title": "Hotel Sulina International",
        			"url":"https://www.google.com/"
    			},
    			{
        			"id": 3,
        			"lat": 48.8724,
        			"long": 2.3428,
        			"src": 'images/3.jpg',
        			"title": "Iaki Conference & Spa Hotel",
        			"url":"https://www.booking.com/"
    			},
    			{
        			"id": 4,
        			"lat": 48.87,
        			"long": 2.3397,
        			"src": 'images/4.jpg',
    			}
		]
		
		locations.forEach(element => {
    			new L.Marker([element.lat,element.long]).addTo(map)
    			.on("mouseover",event =>{
        			event.target.bindPopup('content').openPopup();
    			})
    			.on("mouseout", event => {
        			event.target.closePopup();
    			})
		});

