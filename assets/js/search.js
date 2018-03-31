import List from 'list.js'


if (document.getElementById("features")!=null){
    var options = {
        valueNames: [ 'story_title']
      }
    var storyList = new List('stories', options)


    var options2 = {
        valueNames: [ 'museum_name' ]
      };
      
    var galleryList = new List('galleries', options2);
    galleryList.on("updated", function(list){
        if (list.searched == true) {
            document.getElementById("gal_display").style.display = 'none'
            document.getElementById("gal_search").style.display = 'block'
          } else {
            document.getElementById("gal_display").style.display = 'block'
            document.getElementById("gal_search").style.display = 'none'
          }
    })

}
