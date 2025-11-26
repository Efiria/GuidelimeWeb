var fileRead = '.\\guides\\GuideLime_TUGs_WOTLK.toc'

fetch(fileRead)
  .then(response => response.text())
  .then((data) => {
    console.log(data)
  })