console.log("Hello, World!");

document.querySelectorAll('[data-popup]').forEach(section => {
    section.addEventListener('click', () => {
      const popupId = section.getAttribute('data-popup');
      document.getElementById(popupId).classList.add('active');
    });
  });

  
  
  document.querySelectorAll('.close-btn').forEach(btn => {
    btn.addEventListener('click', () => {
      btn.closest('.backdrop').classList.remove('active');
    });
  });
  
  // Optioneel: sluit popup bij klikken op de donkere achtergrond
  document.querySelectorAll('.backdrop').forEach(backdrop => {
    backdrop.addEventListener('click', (e) => {
      if (e.target === backdrop) {
        backdrop.classList.remove('active');
      }
    });
  });

  
 
  

  gsap.from('[aria-label="vaardigheden"] div ',{
	duration:1,
    x: window.innerWidth,
    stagger:.3,
    ease: "power4.out",
    scrollTrigger: {
        trigger: '[aria-label="vaardigheden"]',
        start: "top 70%",
        toggleActions: "play none none none"
      }});

