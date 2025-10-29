// global behaviors for site
document.addEventListener('DOMContentLoaded', () => {
  // disable right-click on images
  document.addEventListener('contextmenu', e => {
    if (e.target && e.target.tagName === 'IMG') e.preventDefault();
  });

  // COURSE toggle
  window.toggleCourse = function(card) {
    card.classList.toggle('active');
  };

  // COACH expand sideways behavior
  const coachCards = document.querySelectorAll('.coach-card');
  if (coachCards.length) {
    coachCards.forEach(card => {
      card.addEventListener('click', () => {
        // if this card already expanded, collapse it
        const isExpanded = card.classList.contains('expanded');

        // collapse all
        coachCards.forEach(c => {
          c.classList.remove('expanded');
          // remove extra details if present
          const extra = c.querySelector('.coach-extra');
          if (extra) extra.remove();
        });

        if (!isExpanded) {
          // expand clicked card
          card.classList.add('expanded');

          // create extra details block (reads from data-role)
          const detailText = card.getAttribute('data-role') || '';
          const extra = document.createElement('div');
          extra.className = 'coach-extra';
          extra.innerHTML = `<strong>About:</strong> ${escapeHtml(detailText)}`;
          // insert after coach-info
          const info = card.querySelector('.coach-info');
          info.insertAdjacentElement('afterend', extra);
        }
      });
    });
  }

  // small utility: escape HTML for safety
  function escapeHtml(str) {
    return str.replace(/[&<>"']/g, function(m) {
      return ({'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;',"'":"&#39;"})[m];
    });
  }
});
document.addEventListener("DOMContentLoaded", () => {
  // disable right-click on images
  document.addEventListener("contextmenu", e => {
    if (e.target.tagName === "IMG") e.preventDefault();
  });

  const cards = document.querySelectorAll(".coach-card");

  cards.forEach(card => {
    card.addEventListener("click", () => {
      const isExpanded = card.classList.contains("expanded");

      // collapse others
      cards.forEach(c => c.classList.remove("expanded"));

      // toggle current
      if (!isExpanded) {
        card.classList.add("expanded");
      }
    });
  });
});
function toggleCourse(card) {
  card.classList.toggle('active');
}
function enroll(courseName) {
  alert(`You have selected "${courseName}"!\nEnrollment feature coming soon 🔥`);
}
const coaches = [
  {
    name: "Gabrielle",
    role: "Valorant Coach",
    bio: "Gabrielle leads our Valorant division — focusing on aim refinement, teamwork, and confidence. She turns ranked anxiety into performance precision, helping players think like pros and act like leaders.",
    img: "https://random-copper-ge7wf1e8bx.edgeone.app/IMG_20251014_191214.jpg"
  },
  {
    name: "Prince",
    role: "CS2 Coach",
    bio: "Prince is all about tactics and mental fortitude. His training emphasizes map control, team synergy, and composure under pressure — key skills for dominating CS2 and beyond.",
    img: "https://dying-amaranth-5zbv48y6b0.edgeone.app/486820805_638306459090302_8238139458490198721_n.jpg"
  },
  {
    name: "Carl",
    role: "DOTA Coach",
    bio: "Carl is a master strategist. He breaks down complex game mechanics into leadership lessons — from analyzing drafts to managing pressure in high-stakes matches.",
    img: "https://primary-beige-v6xxrpubws.edgeone.app/1000075397.jpeg"
  },
  {
    name: "Coach Angel",
    role: "Life & Study Coach",
    bio: "Angel transforms players’ mindsets beyond gaming. Her sessions focus on productivity, focus, and balancing academics with passion — true mental game mastery.",
    img: "https://conventional-violet-i3x8tbblbe.edgeone.app/1000018995.jpeg"
  },
  {
    name: "Coach Rigel",
    role: "Wild Rift Coach",
    bio: "Rigel focuses on tactical movement and teamwork. His Wild Rift training blends communication, analysis, and leadership to help players think several steps ahead.",
    img: "https://delighted-pink-pdfpvxevdx.edgeone.app/90bc9955-02b6-4175-afd1-4cf30fce86a8.jpg"
  }
];

let currentCoach = 0;

const nameEl = document.getElementById("coachName");
const roleEl = document.getElementById("coachRole");
const bioEl = document.getElementById("coachBio");
const imgEl = document.getElementById("coachImage");
const counterEl = document.getElementById("counter");

document.getElementById("nextBtn").addEventListener("click", () => {
  currentCoach = (currentCoach + 1) % coaches.length;
  updateCoach();
});

document.getElementById("prevBtn").addEventListener("click", () => {
  currentCoach = (currentCoach - 1 + coaches.length) % coaches.length;
  updateCoach();
});

function updateCoach() {
  const coach = coaches[currentCoach];
  nameEl.textContent = coach.name;
  roleEl.textContent = coach.role;
  bioEl.textContent = coach.bio;
  imgEl.src = coach.img;
  counterEl.textContent = `${currentCoach + 1} / ${coaches.length}`;
}
const slider = document.querySelector(".coaches-wrapper");
const cards = document.querySelectorAll(".coach-card");
let index = 0;

function updateSlider() {
  cards.forEach((card, i) => {
    card.classList.remove("active");
    card.style.opacity = "0.5";
    card.style.transform = "scale(0.8)";
  });

  cards[index].classList.add("active");
  cards[index].style.opacity = "1";
  cards[index].style.transform = "scale(1)";
  slider.style.transform = `translateX(-${index * (cards[0].offsetWidth + 60)}px)`;
}

document.getElementById("nextBtn").addEventListener("click", () => {
  index = (index + 1) % cards.length;
  updateSlider();
});

document.getElementById("prevBtn").addEventListener("click", () => {
  index = (index - 1 + cards.length) % cards.length;
  updateSlider();
});

updateSlider();
