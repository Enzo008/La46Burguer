;(function(){
    let sticky = false
    let currentPosition= 0

    const imageCounter= 5
    
    $("#stickyNavegation").slideUp(0)
    $("#stickyNavegation").removeClass("hidden")
    isOpen()
    checkScroll()
    $("#menu-opener").on("click",toggleNav)

    $(".menu-link").on("click",toggleNav)
    $(".sandwich").on("click",toggleNav)

    setInterval(()=>{
        if(currentPosition<imageCounter){
            currentPosition++
        }else{
            currentPosition=0
        }
        $("#gallery .inner").css({
            left: "-"+ currentPosition*100 +"%"
        })
    },4000)

    //Esta parte de aca es para que cuando pasemos el video la 
    //navegacion se oculte o se transforme.
    $(window).scroll(checkScroll)

    function checkScroll(){
        const inBottom = isInBottom()

        if(inBottom && !sticky){
            //Mostrar la navegacion
            sticky=true
            stickyNavegation()
        }
        if(!inBottom && sticky){
            //Ocultar la navegacion
            sticky=false
            unStickyNavegation()
        }
    }

    function stickyNavegation(){
        $("#description").addClass("fixed").removeClass("absolute")
        $("#navegation").slideUp("fast")
        $("#sticky-navegation").slideDown("fast")
    }
    function unStickyNavegation(){
        $("#description").removeClass("fixed").addClass("absolute")
        $("#navegation").slideDown("fast")
        $("#sticky-navegation").slideUp("fast")
    }


    function toggleNav(){
        $("#responsive-nav ul").toggleClass("active")
        $("#menu-opener").toggleClass("bi bi-x-octagon")
    }

    function isOpen(){
        //Reloj 24 => 18pm - 22pm
        let date = new Date()
        const current_hour = date.getHours()
        if(current_hour < 18 || current_hour > 22){
            $("#is-open .text").html("Cerrado Ahora <br> Abierto de 6:00pm - 10:00pm  ")
        }
    }

    function isInBottom(){
        const $description = $("#description")
        const descriptionHeight = $description.height()
        return $(window).scrollTop() > $(window).height() - (descriptionHeight * 2)
    }
})()