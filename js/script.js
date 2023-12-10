"use strict";

window.addEventListener("DOMContentLoaded", () => {
  fix100vh();
  findHeight();
  animation();
  window.addEventListener("resize", () => {
    fix100vh();
    findHeight();
  });
});

let promo = document.querySelector(".promo");

function fix100vh() {
  let vh = window.innerHeight * 0.01;
  document.documentElement.style.setProperty("--vh", `${vh}px`);
}

function findHeight() {
  let fullHeight = document.documentElement.clientHeight,
    fullWidth = document.documentElement.clientWidth;
  if (fullWidth > 768 && fullWidth <= 1024) {
    if (fullHeight < 730) {
      promo.classList.add("no-full");
    } else {
      if (promo.classList.contains("no-full")) {
        promo.classList.remove("no-full");
      }
    }
  } else if (fullWidth > 576 && fullWidth <= 768) {
    if (fullHeight < 700) {
      promo.classList.add("no-full");
    } else {
      if (promo.classList.contains("no-full")) {
        promo.classList.remove("no-full");
      }
    }
  } else if (fullWidth <= 576) {
    if (fullHeight < 700) {
      promo.classList.add("no-full");
    } else {
      if (promo.classList.contains("no-full")) {
        promo.classList.remove("no-full");
      }
    }
  }
}

function animation() {
  function animSmall() {
    // Секция 1.
    // Вылет h1 Point Office space
    const tlPromo = gsap.timeline({});

    tlPromo
      .to(".promo__title span:first-child", {
        duration: 1.5,
        x: 0,
        ease: "back.out(1.1)",
      })
      .to(
        ".promo__title span:last-child",
        {
          duration: 1.5,
          x: 0,
          ease: "back.out(1.1)",
        },
        "<",
      );

    // Работа с картинками под h1
    const tlImages = gsap.timeline({
      scrollTrigger: {
        trigger: ".promo",
        start: "top top",
        end: "+=50%",
        scrub: 1,
      },
    });

    tlImages
      .to(".promo__bottom", {
        opacity: 1,
        y: 0,
      })
      .fromTo(
        ".promo__bottom img",
        {
          y: -80,
        },
        {
          y: 40,
        },
        "<",
      );

    // Секция 2. Бегущие строки
    const tlLines = gsap.timeline({
      scrollTrigger: {
        trigger: ".choose__wrap",
        start: "top bottom",
        end: "bottom top",
        scrub: true,
      },
    });
    tlLines
      .to(".choose__wrap .top", {
        xPercent: -60,
      })
      .to(
        ".choose__wrap .bottom",
        {
          xPercent: 12,
        },
        "<",
      );

    // Секция 3. Вылет карточек поочередно, с обратным эффектом
    gsap.from(".rates__wrap", {
      yPercent: 50,
      scrollTrigger: {
        trigger: ".rates",
        start: "top 80%",
        end: "bottom bottom",
        scrub: true,
      },
    });

    // Секция 4. Горизонтальный скролл

    // Секция 5. Заливка фона + работа с изображениями
    // Заливка фона
    const tlPoint = gsap.timeline({
      scrollTrigger: {
        trigger: ".point",
        start: "top center",
        end: "+=300",
        toggleActions: "play reverse play reverse",
      },
    });
    tlPoint
      .to("body", {
        backgroundColor: "#000",
      })
      .to(
        ".plus-block__text",
        {
          color: "#fff",
        },
        "<",
      )
      .to(
        ".plus-block__title span:last-child",
        {
          color: "#fff",
        },
        "<",
      )
      .to(
        ".point__title",
        {
          color: "#fff",
        },
        "<",
      )
      .to(
        ".point__descr",
        {
          color: "#fff",
        },
        "<",
      );

    // Работа с изображениями scale
    const tlImg = gsap.timeline({
      scrollTrigger: {
        trigger: ".point__wrapper",
        start: "top center",
        end: "bottom bottom",
        scrub: 1,
      },
    });

    tlImg.to(".point__img:first-child img", {
      scale: 1,
    });
    tlImg.to(
      ".point__img:last-child img",
      {
        scale: 0,
      },
      "<",
    );

    // Секция 6. Элемент "Точка"
    // Скролл элемента "Точки" до footer-а
    gsap.to(".footer__point", {
      y: 0,
      scrollTrigger: {
        trigger: ".main",
        start: "top top",
        end: "bottom 70%",
        scrub: true,
      },
    });
    // Изменение размера (scale) и цвета элемента
    const tlFooter = gsap.timeline({
      scrollTrigger: {
        trigger: ".footer",
        start: "top 70%",
        end: "bottom bottom",
        scrub: 1,
      },
    });
    tlFooter
      .to(".footer__point", {
        scale: 1,
      })
      .to(
        ".footer__point svg path",
        {
          fill: "#ff0027",
          opacity: 1,
        },
        "<",
      );
  }

  // Адаптив
  let mediaAnimation = gsap.matchMedia();

  mediaAnimation.add("(min-width: 1025px)", () => {
    // Секция 1.
    // Вылет h1 Point Office space
    const tlPromo = gsap.timeline({});

    tlPromo
      .to(".promo__title span:first-child", {
        duration: 1.5,
        x: 0,
        ease: "back.out(1.1)",
      })
      .to(
        ".promo__title span:last-child",
        {
          duration: 1.5,
          x: 0,
          ease: "back.out(1.1)",
        },
        "<",
      );

    // Работа с картинками под h1
    const tlImages = gsap.timeline({
      scrollTrigger: {
        trigger: ".promo",
        start: "top top",
        end: "+=50%",
        scrub: 1,
        pin: true,
      },
    });

    tlImages
      .to(".promo__bottom", {
        opacity: 1,
        y: 0,
      })
      .fromTo(
        ".promo__bottom img",
        {
          y: -80,
        },
        {
          y: 40,
        },
        "<",
      );

    // Секция 2. Бегущие строки
    const tlLines = gsap.timeline({
      scrollTrigger: {
        trigger: ".choose__wrap",
        start: "top bottom",
        end: "bottom top",
        scrub: true,
      },
    });
    tlLines
      .to(".choose__wrap .top", {
        xPercent: -60,
      })
      .to(
        ".choose__wrap .bottom",
        {
          xPercent: 20,
        },
        "<",
      );

    // Секция 3. Вылет карточек поочередно, с обратным эффектом
    gsap.from(".rates-card", {
      stagger: 0.3,
      opacity: 0,
      yPercent: 100,
      scrollTrigger: {
        trigger: ".rates",
        start: "top 10%",
        toggleActions: "play none none reverse",
      },
    });

    // Секция 4. Горизонтальный скролл
    let sections = gsap.utils.toArray(".plus__block");

    gsap.to(sections, {
      xPercent: -100 * (sections.length - 1),
      delay: 0.3,
      scrollTrigger: {
        trigger: ".plus",
        start: "top top",
        end: `+=${sections.length * 1000}`,
        pin: true,
        scrub: true,
      },
    });

    // Секция 5. Заливка фона + работа с изображениями
    // Заливка фона
    const tlPoint = gsap.timeline({
      scrollTrigger: {
        trigger: ".point",
        start: "top center",
        end: "bottom bottom",
        toggleActions: "play reverse play reverse",
      },
    });
    tlPoint
      .to("body", {
        backgroundColor: "#000",
      })
      .to(
        ".plus-block__text",
        {
          color: "#fff",
        },
        "<",
      )
      .to(
        ".plus-block__title span:last-child",
        {
          color: "#fff",
        },
        "<",
      )
      .to(
        ".point__title",
        {
          color: "#fff",
        },
        "<",
      )
      .to(
        ".point__descr",
        {
          color: "#fff",
        },
        "<",
      );

    // Работа с изображениями scale
    const tlImg = gsap.timeline({
      scrollTrigger: {
        trigger: ".point__wrapper",
        start: "top top",
        pin: true,
        scrub: 1,
      },
    });

    tlImg.to(".point__img:first-child img", {
      scale: 1,
    });
    tlImg.to(
      ".point__img:last-child img",
      {
        scale: 0,
      },
      "<",
    );

    // Секция 6. Элемент "Точка"
    // Скролл элемента "Точки" до footer-а
    gsap.to(".footer__point", {
      y: 0,
      scrollTrigger: {
        trigger: ".main",
        start: "top top",
        end: "bottom 70%",
        scrub: true,
      },
    });
    // Изменение размера (scale) и цвета элемента
    const tlFooter = gsap.timeline({
      scrollTrigger: {
        trigger: ".footer",
        start: "top 70%",
        end: "bottom bottom",
        scrub: 1,
      },
    });
    tlFooter
      .to(".footer__point", {
        scale: 1,
      })
      .to(
        ".footer__point svg path",
        {
          fill: "#ff0027",
          opacity: 1,
        },
        "<",
      );
  });

  mediaAnimation.add("(min-width: 577px) and (max-width: 1024px)", () => {
    animSmall();
  });

  mediaAnimation.add("(max-width: 576px)", () => {
    animSmall();
  });
}
