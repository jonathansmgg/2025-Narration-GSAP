/** GSAP Plugin */

gsap.registerPlugin(ScrollTrigger, Observer, ScrollToPlugin, Draggable, MotionPathPlugin);






/** Animation d'entrée du site web du Titre */



//J'ai trouvé ça sur un site GSAP pour pouvoir séparer le texte lettre par lettre pour pouvoir animer mon texte lettre par lettre
const title = document.querySelector(".section1Text");


title.innerHTML = title.textContent.split("").map(letter => {
  return `<span class="letter">${letter}</span>`;
}).join("");




gsap.from(".letter", {
  opacity: 0,
  y: 40,
  stagger: 0.07, 
  duration: 0.8,
  ease: "power3.out"
});



//Je fais pareil avec le texte <p> en dessous

const subText = document.querySelector(".section1PText");

subText.innerHTML = subText.textContent.split("").map(letter => {
  if(letter === " ") return "&nbsp;";
  return `<span class="letter">${letter}</span>`;
}).join("");

gsap.from(".section1PText .letter", {
  opacity: 0,
  y: 20,
  stagger: 0.1,
  duration: 0.8,
  ease: "power3.out"
});









/** GSAP Animation - Section 1 - Texte qui disparaît vers le haut pour une transition */


gsap.to(".section1Text", {
  scrollTrigger: {
    trigger: "#section1",
    start: "top top",
    end: "bottom top",
    scrub: true
  },
  opacity: 0, //ici le texte disparait petit à petit
  y: -50, //c'est pour faire genre que le texte remonte léger
  ease: "power1.out"
});




gsap.to(".section1PText", {
  scrollTrigger: {
    trigger: "#section1",
    start: "top top",
    end: "bottom top",
    scrub: true
  },
  opacity: 0,
  y: -20, //là je crée une esèpece de cassure entre le h1 et le p pour faire en sorte que ça soit moins prononcé que le titre h1
  ease: "power1.out"
});










/** GSAP Animation - Section 2 - Image arrive de la droite et le texte de la gauche */


// Texte qui arrive depuis la gauche


gsap.registerPlugin(ScrollTrigger)

gsap.from(".CardSect", {
    scrollTrigger: {
        trigger: "#section2",
        start: "top 100%",
        end: "top 0%",
        scrub: 2
    },
    x: -150,
    opacity: 0,
    duration: 1,
    ease: "power2.out"
});


//Image avec son tag qui arrive de la droite

gsap.from(".charleUn", {
    scrollTrigger: {
        trigger: "#section2",
        start: "top 100%",
        end: "top 0%",
        scrub: 2
    },
    x: 150,
    opacity: 0,
    duration: 1,
    ease: "power2.out"

});

gsap.from(".tagUn", {
    scrollTrigger: {
        trigger: "#section2",
        start: "top 100%",
        end: "top 0%",
        scrub: 2
    },
    scale: 0,
    opacity: 0,
    duration: 1,
    ease: "back.out(1;7)"
});




/** GSAP Animation - Section 3 - Paragraphe Lettre par Lettre */


//animation du texte



gsap.from(".anim-text", {
  scrollTrigger: {
    trigger: "#section3",
    start: "top 85%",  
    end: "top 50%",
    scrub: 2
  },
  opacity: 0,
  y: 80,       // je mets l'élement plus bas de 80px pour que ca fasse un effet pop avec le scale 0.7
  scale: 0.7,  // ca va créer un effet de zoom en le mettant a 70%
  duration: 2,
  ease: "power1.out"
});

// animation du logo 


gsap.from(".imgQuatre", {
  scrollTrigger: {
    trigger: "#section3",
    start: "top 90%",
    end: "top 50%",
    scrub: 2
  },
  opacity: 0,
  y: -40,      // le logo descend comparé au texte pour faire un effet différent
  scale: 1.3,  // zoom pour attirer l'oeil
  duration: 3,
  ease: "power1.out"
});



/** GSAP Animation - Section 4 - Un qui arrive de la gauche, l'autre de la droite */




gsap.from(".sectUnQuatre .charleSideProfDeux", {
  scrollTrigger: {
    trigger: ".sectUnQuatre",
    start: "top 80%",
    toggleActions: "play none none reverse",
    markers: true
  },
  x: -200,
  opacity: 0,
  duration: 1,
  ease: "power1.out"
});

gsap.from(".sectUnQuatre .textSect4Deux2", {
  scrollTrigger: {
    trigger: ".sectUnQuatre",
    start: "top 80%",
    toggleActions: "play none none reverse"
  },
  x: -100,
  opacity: 0,
  duration: 1,
  ease: "power1.out"
});




/** ON TRACK : image et texte viennent de la droite */


gsap.from(".sectDeuxQuatre .charleSideProf", {
  scrollTrigger: {
    trigger: ".sectDeuxQuatre",
    start: "top 80%",
    toggleActions: "play none none reverse",
    markers: true
  },
  x: 200,
  opacity: 0,
  duration: 1,
  ease: "power1.out"
});

gsap.from(".sectDeuxQuatre .textSect4Deux", {
  scrollTrigger: {
    trigger: ".sectDeuxQuatre",
    start: "top 80%",
    toggleActions: "play none none reverse"
  },
  x: 100,
  opacity: 0,
  duration: 1,
  ease: "power1.out"
});



/** Draggable image horizontal */


Draggable.create(".charleSideProf", {
  type: "x", //ça permet de devenir draggable que sur l'horizontal 
  bounds: ".sectDeuxQuatre", //ça limite l'image pour pas qu'elle puisse sortir de mon conteneur
  inertia: true, //ça j'ai trouvé sur internet ca fait un drag fluide et naturel stylé
  edgeResistance: 0.7 //ça me permet de faire genre que ya une résistance quand je veux le sortir du conteneur
});

Draggable.create(".charleSideProfDeux", {
  type: "x",
  bounds: ".sectUnQuatre",
  inertia: true,
  edgeResistance: 0.7
});



/**  Timeline : léger mouvement flottant des images */


const tl = gsap.timeline({repeat: -1, yoyo: true}); //ici je crée une timeline qui se repète à l'infini avec le -1 ça va le loop à l'infini et j'ai utilisé le truc du yoyo qu'on avait vu pour que ça fasse un effet de va et vient 


tl.to(".charleSideProf", {y: -10, duration: 1.5, ease: "sine.inOut"}, 0) //le sine.inOut va me servir à faire un espèce d'effet genre ça accélère puis ça ralentit
  .to(".charleSideProfDeux", {y: 10, duration: 1.2, ease: "sine.inOut"}, 0); //pareil






