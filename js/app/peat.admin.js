var PeatAdmin = wrench.appify({
	
	init: function () {
		// this will run after in the boot up process initiated by app.run();
		$("#peat").html("Peat admin initialized");
	},
	
	pages: {
	
		list: routePartial("pages/list").to(function () {
	    // fetch all the users and show them on the page
			console.log("list");
		}),
		
		add: routePartial("pages/new").to(function () {
			
		}),

		edit: routePartial("pages/edit/:id").to(function (params) {
			// find the page via params['id']
		}),
		
		// Save the page
		save: function (ev) {
			
		},
			
	},
	
	settings: {}
	
}).run();