$("document").ready(function(){
    $('.seasons a').click(function(e){//find all a tags inside class of seasons
        e.preventDefault();//stop default submission
        var season = $(this).attr("href");//contents of href attribute of this element
        alert(season);

        season = season.toLowerCase();

        switch(season){

                case "spring" :
                    $("#logo").attr("src","images/spring.gif");

                    //#2B7129
                    $("html").css("backround-color","#2B7129")

                break;

                case "summer" :
                    $("#logo").attr("src","images/summer.gif");

                    //#EBA52B
                    $("html").css("backround-color","#EBA52B")

                break;

                case "fall" :
                    $("#logo").attr("src","images/fall.gif");

                    //#A81124
                    $("html").css("backround-color","#A81124")

                break;

                case "winter" :
                    $("#logo").attr("src","images/winter.gif");

                //#005393
                $("html").css("backround-color","#005393")

            break;

                default:
                    alert("You didnt hit a case!");
        }
    });
});


