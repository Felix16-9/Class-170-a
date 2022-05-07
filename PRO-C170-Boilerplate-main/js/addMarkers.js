AFRAME.registerComponent("create-markers", {
  
  //Add Code Here!
  init:async function(){
    var mainscene = doc.querySelector("name-scene")
    var dishes=await this.getdishes()
    dishes.map(dish=>{
      var marker=createElement("a-marker")
      marker.setAttribute({"id",dish.id})
      marker.setAttribute({"type,pattern"})
      marker.setAttribute({"url",dish.marker})
      

      })
      marker.setAttribute("markerHandler", {})
      mainscene.appendChild(marker)
      var mainplain = doc.createElement("mainplain")
      mainplain.setAttribute("id.mainplain")
      mainplain.setAttribute("position",{
        x:5, y:8, z:-4
      })
      mainplain.setAttribute("rotation",{
        x:-90, y:90, z:90
      })
      mainplain.setAttribute("width",{
        4
      })
      mainplain.setAttribute("height",{(
        10
      })
      Marker.appendChild(mainplain)
    })
    var titleplain = doc.createElement("titleplain")
    titleplain.setAttribute("id.titleplain")
    titleplain.setAttribute("position",{
      x: 7, y:3, z: -5
    })
    titleplain.setATtribute("rotation",{(
      1
    })
    titleplain.setAttribute("height")
    8

  }
  });
