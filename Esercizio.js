document.addEventListener("DOMContentLoaded", function() {

    // Variabili per tenere traccia dell'indice dell'immagine corrente per ciascun carosello
    let indiceImmagineCorrente1 = 0;
    let indiceImmagineCorrente2 = 0;
    let indiceImmagineCorrente3 = 0;
    let indiceImmagineCorrente4 = 0;
    let indiceImmagineCorrente5 = 0;

    // Selezioniamo tutte le immagini nei vari caroselli tramite le classi esistenti
    const tutteLeImmagini = document.querySelectorAll(".immagini img");
    const tutteLeImmagini2 = document.querySelectorAll(".immagini2 img");
    const tutteLeImmagini3 = document.querySelectorAll(".immagini3 img");
    const tutteLeImmagini4 = document.querySelectorAll(".immagini4 img"); 
    const tutteLeImmagini5 = document.querySelectorAll(".immagini5 img"); 

    // Funzione per visualizzare la prossima immagine nel primo carosello
    function mostraImmagineSuccessiva1() {
        if (tutteLeImmagini.length === 0) return;
        tutteLeImmagini[indiceImmagineCorrente1].style.display = "none";
        indiceImmagineCorrente1 = (indiceImmagineCorrente1 + 1) % tutteLeImmagini.length;
        tutteLeImmagini[indiceImmagineCorrente1].style.display = "block";
    }

    // Funzione per visualizzare l'immagine precedente nel primo carosello
    function mostraImmaginePrecedente1() {
        if (tutteLeImmagini.length === 0) return;
        tutteLeImmagini[indiceImmagineCorrente1].style.display = "none";
        indiceImmagineCorrente1 = (indiceImmagineCorrente1 - 1 + tutteLeImmagini.length) % tutteLeImmagini.length;
        tutteLeImmagini[indiceImmagineCorrente1].style.display = "block";
    }

    // Aggiungi event listener per i bottoni avanti e indietro nel primo carosello
    document.getElementById("avanti").onclick = mostraImmagineSuccessiva1;
    document.getElementById("indietro").onclick = mostraImmaginePrecedente1;

    // Funzione per visualizzare la prossima immagine nel secondo carosello
    function mostraImmagineSuccessiva2() {
        if (tutteLeImmagini2.length === 0) return;
        tutteLeImmagini2[indiceImmagineCorrente2].style.display = "none";
        indiceImmagineCorrente2 = (indiceImmagineCorrente2 + 1) % tutteLeImmagini2.length;
        tutteLeImmagini2[indiceImmagineCorrente2].style.display = "block";
    }

    // Funzione per visualizzare l'immagine precedente nel secondo carosello
    function mostraImmaginePrecedente2() {
        if (tutteLeImmagini2.length === 0) return;
        tutteLeImmagini2[indiceImmagineCorrente2].style.display = "none";
        indiceImmagineCorrente2 = (indiceImmagineCorrente2 - 1 + tutteLeImmagini2.length) % tutteLeImmagini2.length;
        tutteLeImmagini2[indiceImmagineCorrente2].style.display = "block";
    }

    // Aggiungi event listener per i bottoni avanti e indietro nel secondo carosello
    document.getElementById("avanti1").onclick = mostraImmagineSuccessiva2;
    document.getElementById("indietro1").onclick = mostraImmaginePrecedente2;

    // Funzione per visualizzare la prossima immagine nel terzo carosello
    function mostraImmagineSuccessiva3() {
        if (tutteLeImmagini3.length === 0) return;
        tutteLeImmagini3[indiceImmagineCorrente3].style.display = "none";
        indiceImmagineCorrente3 = (indiceImmagineCorrente3 + 1) % tutteLeImmagini3.length;
        tutteLeImmagini3[indiceImmagineCorrente3].style.display = "block";
    }

    // Aggiungi event listener per il bottone delle offerte
    document.getElementById("offerte").onclick = mostraImmagineSuccessiva3;

    // Funzione per visualizzare la prossima immagine nel quarto carosello
    function mostraImmagineSuccessiva4() {
        if (tutteLeImmagini4.length === 0) return;
        tutteLeImmagini4[indiceImmagineCorrente4].style.display = "none";
        indiceImmagineCorrente4 = (indiceImmagineCorrente4 + 1) % tutteLeImmagini4.length;
        tutteLeImmagini4[indiceImmagineCorrente4].style.display = "block";
    }

    // Funzione per visualizzare l'immagine precedente nel quarto carosello
    function mostraImmaginePrecedente4() {
        if (tutteLeImmagini4.length === 0) return;
        tutteLeImmagini4[indiceImmagineCorrente4].style.display = "none";
        indiceImmagineCorrente4 = (indiceImmagineCorrente4 - 1 + tutteLeImmagini4.length) % tutteLeImmagini4.length;
        tutteLeImmagini4[indiceImmagineCorrente4].style.display = "block";
    }

    // Aggiungi event listener per i bottoni avanti e indietro nel quarto carosello
    document.getElementById("avanti2").onclick = mostraImmagineSuccessiva4;
    document.getElementById("indietro2").onclick = mostraImmaginePrecedente4;

    // Aggiungi anche un evento per il bottone avanti per il quarto carosello
    document.getElementById("offerte1").onclick = mostraImmagineSuccessiva4;

    // Funzione per visualizzare la prossima immagine nel quinto carosello
    function mostraImmagineSuccessiva5() {
        if (tutteLeImmagini5.length === 0) return;
        tutteLeImmagini5[indiceImmagineCorrente5].style.display = "none";
        indiceImmagineCorrente5 = (indiceImmagineCorrente5 + 1) % tutteLeImmagini5.length;
        tutteLeImmagini5[indiceImmagineCorrente5].style.display = "block";
    }

    // Funzione per visualizzare l'immagine precedente nel quinto carosello
    function mostraImmaginePrecedente5() {
        if (tutteLeImmagini5.length === 0) return;
        tutteLeImmagini5[indiceImmagineCorrente5].style.display = "none";
        indiceImmagineCorrente5 = (indiceImmagineCorrente5 - 1 + tutteLeImmagini5.length) % tutteLeImmagini5.length;
        tutteLeImmagini5[indiceImmagineCorrente5].style.display = "block";
    }

    // Aggiungi event listener per i bottoni avanti e indietro nel quinto carosello
    document.getElementById("avanti2").onclick = mostraImmagineSuccessiva5;
    document.getElementById("indietro2").onclick = mostraImmaginePrecedente5;

    // Eventi per le immagini che redirigono a URL specifici
    document.getElementById("img1").onclick = function() {
        window.location.href = "https://www.giuliuspetshop.it/shop/cani";
    };

    document.getElementById("img2").onclick = function() {
        window.location.href = "https://www.giuliuspetshop.it/shop/gatti";
    };

    document.getElementById("img3").onclick = function() {
        window.location.href = "https://www.giuliuspetshop.it/shop/rettili";
    };

    document.getElementById("img4").onclick = function() {
        window.location.href = "https://www.giuliuspetshop.it/shop/roditori";
    };

    document.getElementById("img5").onclick = function() {
        window.location.href = "https://www.giuliuspetshop.it/shop/pesci";
    };

    document.getElementById("img6").onclick = function() {
        window.location.href = "https://www.giuliuspetshop.it/shop/volatili";
    };

    
    document.getElementById("img7").onclick = function() {
        window.location.href = "https://www.giuliuspetshop.it/giulius";
    };

    document.getElementById("img8").onclick = function() {
        window.location.href = "https://www.giuliuspetshop.it/azienda/chi-siamo";
    };

    document.getElementById("img9").onclick = function() {
        window.location.href = "https://www.giuliuspetshop.it/info/fidelity";
    };

    document.getElementById("logo1").onclick = function() {
        window.location.href = "https://www.facebook.com/Giuliuspetshop";
    };

    document.getElementById("logo2").onclick = function() {
        window.location.href = "https://www.instagram.com/giuliuspetshop/";
    };

    document.getElementById("logo3").onclick = function() {
        window.location.href = "https://www.youtube.com/user/GiuliusPetTube";
    };


    document.getElementById("logo4").onclick = function() {
        window.location.href = "https://www.linkedin.com/company/giulius-pet-shop/";
    };

    document.getElementById("utente").onclick = function() {
        window.location.href = "https://www.giuliuspetshop.it/login";
    };

    
    document.getElementById("carrello").onclick = function() {
        window.location.href = "https://www.giuliuspetshop.it/carrello";
    };

    document.getElementById("bottone1").onclick = function() {
        window.location.href = "https://www.giuliuspetshop.it/giulius";
        document.getElementById("botton1").style.display="none";
    };

});
