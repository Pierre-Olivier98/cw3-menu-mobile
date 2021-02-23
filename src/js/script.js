document.addEventListener("DOMContentLoaded", function(event) {

    //Un commentaire
    console.log("Ça fonctionne!!!");

    var hamburger = document.querySelector('.hamburger-animated');
    var menMobile = document.querySelector(".nav-primary-mobile")


    hamburger.addEventListener('click', openMenu);

    function openMenu(evt) {
        evt.preventDefault();

        var cible = evt.currentTarget;

        if(cible.classList.contains('open')){
            cible.classList.remove("open");
            menMobile.classList.remove('open')
        }else{
            cible.classList.add("open");
            menMobile.classList.add("open");

        }
    }

});

