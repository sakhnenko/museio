import List from 'list.js'


if (document.getElementsByClassName("searchable")[0]!=null){
    var options = {
        valueNames: [ 'story_title', 'artPiece', 'artLoc']
      }
    var storyList = new List('stories', options)
    storyList.on("updated", function(list){
      if (list.searched == true) { 
        hj('vpv', '/search/story/'+document.getElementsByClassName('search')[0].value); 
      };
    })

    var options2 = {
        valueNames: [ 'museumLabel' ]
      };
      
    var galleryList = new List('galleries', options2);
    galleryList.on("updated", function(list){
        if (list.searched == true) {
            console.log("Searched")
            hj('vpv', '/search/gallery/'+document.getElementsByClassName('search')[0].value); 
            document.getElementById("gal_display").style.display = 'none'
            document.getElementById("gal_search").style.display = 'flex '
          } else {
            document.getElementById("gal_display").style.display = 'block'
            document.getElementById("gal_search").style.display = 'none'
          }
    })

}
