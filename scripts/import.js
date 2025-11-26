var fileRead = '.\\guides\\GuideLime_TUGs_WOTLK.toc'

//Display the list of guide available
fetch(fileRead)
  	.then(response => response.text())
  	.then((data) => {
		splitData = data.toString().split('\r\n')

		
		let ul = document.getElementById("guide-list-display");
		let display = "Guide List"
		for (let index = 0; index < splitData.length; index++) {
			let element = splitData[index];
			element = element.split("\\")
			if (element[0] != null && element[0].length > 1) {
				if (element[2]) {
					display += "<li class='list-group-item guide-list-element'>"+element[2]+"</li>"
				} else {
					display += "<li class='list-group-item guide-list-element'>"+element[1]+"</li>"
				}
			}
		}	
		ul.innerHTML += display;
  	})

//Display guide when you click
