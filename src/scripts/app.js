'use strict';

//ZONE CLIQUABLE SUR ÉCRAN PC

    document.addEventListener('DOMContentLoaded', () => {
    
        const clickArea = document.getElementById("click-area");
        
        if (clickArea) {
            clickArea.addEventListener("click", function(e) {
                e.preventDefault();
                window.location.href = "login.html";
            }); 
        }  
    });

//SCRIPT POUR LE MDP

    const correctPassword = "1234";
    const feedback = document.getElementById("feedback");
    const passwordInput = document.getElementById("password");
    const form = document.getElementById("form-group");

    if (form) {

    const clues = [
        "What comes after zero?",
        "Can you count up to four?",
        "The password is 1234… Nice try, though!",
        "By the ancient runes of convenience… the password remains: 1234.",
        "If I have to say 1234 one more time, I’m uninstalling myself.",
    ];

    let attempts = 0;

    form.addEventListener("submit", function (e) {
        e.preventDefault(); // empêche le rechargement de la page

        const value = passwordInput.value;
        if (value === correctPassword) {
            if (attempts === 0) {
                feedback.textContent = "Wow, Sherlock would be proud! You cracked it on the first try!";
            } else {
                feedback.textContent = "You did it! Honestly, we were starting to worry.";
            }
            feedback.style.color = "green";
            feedback.classList.add("visible");
            passwordInput.value = ""; // réinitialise le champ de mot de passe
            attempts = 0; // réinitialise le nombre de tentatives

            form.querySelector("button[type='submit']").disabled = true;

            setTimeout(() => {
                window.location.href = "home.html";
            }, 3000); // délai de 1.5 seconde pour que le message s'affiche
        }

        else {
        attempts++;
        feedback.classList.add("visible");
        
        if (attempts == 1) {
            feedback.textContent = "Incorrect password. Please try again.";
            feedback.style.color = "#FF0000"; // couleur rouge
            passwordInput.value = ""; // réinitialise le champ de mot de passe
        } else if (attempts >= 2 && attempts <= 6) {
            feedback.textContent = clues[attempts - 2];
            feedback.style.color = "#FF3B5B";
            passwordInput.value = ""; // réinitialise le champ de mot de passe
        } else {
        feedback.textContent = "Maybe you should get a notebook. Or a memory upgrade."
        passwordInput.value = ""; // réinitialise le champ de mot de passe
        }
        }

    })};

//BURGER MENU

    var burgerMenu = document.getElementById('burger-menu');
    var menu = document.getElementById('menu');

    if (burgerMenu || menu) {

    burgerMenu.addEventListener('click', function () {

    menu.classList.toggle('active');
    burgerMenu.classList.toggle('open');
    });
    }

//SCRIPT POUR ACCESS DENIED

    const restrictedLinks = document.querySelectorAll(".restricted-link");
    const message = document.getElementById("message");

    if (restrictedLinks) {
        
        restrictedLinks.forEach( link => {
            link.addEventListener("click", function(e) {
                e.preventDefault();
                message.textContent = "Sorry, your current role doesn’t authorize access to this section.";
                message.style.opacity = "1";

                setTimeout(() => {
                message.style.opacity = "0";
            }, 4000);

            });
        });
    }

//SCRIPT POUR AVOIR ACCESS À LA PAGE USER PROFILE

    const card = document.getElementById("card");
    const cardDisabled = document.querySelectorAll(".card-disabled");
    const messageOffline = document.getElementById("message-offline");

    if (card) {

        card.addEventListener("click", function(e) {
            e.preventDefault();
            window.location.href = "user-profile.html";
        });
    }

    if (cardDisabled) {
        cardDisabled.forEach(card => {
            card.addEventListener("click", function(e) {
                e.preventDefault();
                message.textContent = "Sorry, but this user is currently offline.";
                message.style.opacity = "1";

                setTimeout(() => {
                    message.style.opacity = "0";
                }, 4000);

            });
        });
    }

//SCRIPT POUR CACHER MENU SUR ORDI POUR CERTAINES PAGES - AIDE IA

const pages = ["user-list.html", "user-profile.html"];
const menuNav = document.getElementById("menu");

function toggleMenuOnResize() {
    const currentPage = window.location.pathname.split("/").pop();

    if (window.innerWidth >= 1440 && pages.includes(currentPage)) {
        if (menu) {
            menu.style.display = "none";
        }
    } else {
    
        if (menu) {
            menu.style.display = "";
        }
    }
}

window.addEventListener("DOMContentLoaded", toggleMenuOnResize);
window.addEventListener("resize", toggleMenuOnResize);

//SCRIPT POUR HOVER BTN IMG

    const btnImg = document.getElementById("btn-action");

    if (btnImg) {
        btnImg.addEventListener("mouseenter", () => {
        btnImg.src = "assets/images/user-action-btn-hover.svg";

    });

        btnImg.addEventListener("mouseleave", () => {
        btnImg.src = "assets/images/user-action-btn.svg";
    });
    }

//SCRIPT POUR CHOIX

    const image = document.getElementById("btn-action");
    const options = document.getElementById("options");
    const messageOption = document.getElementById("message-action");

    if (image && options && messageOption) {
        image.addEventListener("click", () => {
        options.classList.add("visible");
        message.textContent = ""; // Reset le message si on clique à nouveau
    });

document.querySelectorAll(".option").forEach(button => {
  button.addEventListener("click", () => {
    const choice = button.dataset.choice;
    if (choice === "A") {
      message.textContent = "Hannah, who’s nearby, shares your love for Blade Runner 2049 and quiet Sundays. Feel like chatting? - Sent to Cassian Rutherford";
      message.style.opacity = "1";
    } else if (choice === "B") {
      message.textContent = "Hey, just a reminder that you’re not alone. When you’re ready, jump in and chat — we’d love to hear from you. - Sent to Cassian Rutherford";
      message.style.opacity = "1";
    }
    options.classList.remove("visible");

    setTimeout(() => {
        message.style.opacity = "0";
    }, 6000);

    setTimeout(() => {
    window.location.href = "/error.html"; // Redirige vers la nouvelle page
    }, 7000);
  });
});
}
