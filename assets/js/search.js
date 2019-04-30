import List from 'list.js'


if (document.getElementsByClassName("searchable")[0]!=null){
    var options = {
        valueNames: [ 'story_title', 'artPiece', 'artLoc']
      }
    var storyList = new List('stories', options)


    var options2 = {
        valueNames: [ 'museumLabel' ]
      };
      
    var galleryList = new List('galleries', options2);
    galleryList.on("updated", function(list){
        if (list.searched == true) {
            document.getElementById("gal_display").style.display = 'none !important'
            document.getElementById("gal_search").style.display = 'flex !important'
          } else {
            document.getElementById("gal_display").style.display = 'flex !important'
            document.getElementById("gal_search").style.display = 'none !important'
          }
    })

}
