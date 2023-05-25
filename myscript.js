var color = ["#222f33e", "#f368e0", "#ee5253", "#0abde3", "#10ac84", "#5f27cd"];
          var i = 0;
          document.querySelector("body").addEventListener("click",function(){
            i = i < color.length ? ++i : 0;
            document.querySelector("body").style.backgroundColor = color[i]
          })