import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

    const correctPassword = "1234";
    const feedback = document.getElementById("feedback");
    const passwordInput = document.getElementById("password");
    const form = document.getElementById("form-group");

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
    });

    




