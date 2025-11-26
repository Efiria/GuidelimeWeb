var fileRead = '.\\guides\\GuideLime_TUGs_WOTLK.toc'

//Display the list of guide available
fetch(fileRead)
  	.then(response => response.text())
  	.then((data) => {
		console.log(data)
		splitData = data.toString().split(/\r\n|\r|\n/g)
		console.log(splitData)
		let ul = document.getElementById("guide-list-display")
		let display = "Guide List"
		for (let index = 0; index < splitData.length; index++) {
			let fullPath = splitData[index]
			let element = fullPath.split("\\")
			
			let formatedPath= ('"guides_'+element[0] +'_'+ element[1]+'_'+ element[2])
			console.log(element)
			if (element[0] != null && element[0].length > 1) {
				if (element[2]) {
					display += "<li class='list-group-item guide-list-element' onclick='loadGuide("+formatedPath+")'>"+element[2]+"</li>"
				} else {
					display += "<li class='list-group-item guide-list-element' onclick='loadGuide("+formatedPath+")'>"+element[1]+"</li>"
				}
			}
		}	
		ul.innerHTML += display
  	})

//Display guide when you click
function loadGuide(fullPath) {
	if (fullPath == "default") {
		fullPath = ".\\guides\\TUGs\\Alliance\\1-9Human.lua"
	} 
	fullPath = fullPath.replaceAll('_','\\')
	console.log(fullPath)
	let guideViewer = document.getElementById("guide-viewer")
	let display = ''

	fetch(fullPath)
	.then(response => response.text())
	.then((data) => {
		splitData = data.toString().split(/\r\n|\r|\n/g)
		for (let index = 0; index < splitData.length; index++) {
			const element = splitData[index];
			if (index > 2 && index < (splitData.length-1)) {
				display += '<div class="col-12">'+element+'</div>'
				console.log(element)
			}
			
		}
		guideViewer.innerHTML = display
		// console.log(splitData)
	})
}
