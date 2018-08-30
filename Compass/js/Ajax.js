

//Menu Ajax
        $(document).ready(function () {
            LoadInicio();
        });

        $("#reload ul li a").click(function () {
             //$("#show").load("Pages.html #" + $(this).attr("href"),
            $("#show").load("../pages/Pages.html #" + $(this).attr("href"), 
                function () { 
                    LoadWhatWeDo(); 
                    LoadInicio(); 
                    myMap();
                });    
            return false;
      });

       //FancyBox
        function LoadInicio() {
                $("a[rel=example_group]").fancybox({
                    'transitionIn': 'none',
                    'transitionOut': 'none',
                    'titlePosition': 'over',
                    'titleFormat': function (title, currentArray, currentIndex, currentOpts) {
                        return '<span id="fancybox-title-over">Image ' + (currentIndex + 1) + ' / ' + currentArray.length + (title.length ? ' &nbsp; ' + title : '') + '</span>';
                    }
                });
         }


        //Google Maps
        function myMap() {
            var mapProp = {
                center: new google.maps.LatLng(43.370611, -5.854016),
                zoom: 15, 
            };
            var map = new google.maps.Map(document.getElementById("googleMap"), mapProp);
        }

        //function initMap() {
        //    var location = { lat: 43.370611, long: -5.854016 };
        //    var map= new google.maps.Map(document.getElementById("Map"), {
        //    zoom: 4,
        //    center: location
        //    });
        //}
    


   
        //Accordion
        function LoadWhatWeDo() {
            var acc = document.getElementsByClassName("accordion");
            var i;

            for (i = 0; i < acc.length; i++) {
                acc[i].addEventListener("click", function () {
                    this.classList.toggle("active");
                    var panel = this.nextElementSibling;
                    if (panel.style.display === "block") {
                        panel.style.display = "none";
                    } else {
                        panel.style.display = "block";
                    }
                });
            }
        }




