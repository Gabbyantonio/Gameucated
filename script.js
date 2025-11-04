// === COACH SLIDER FUNCTIONALITY (FINAL CLEAN VERSION) ===
document.addEventListener("DOMContentLoaded", () => {
  const coachName = document.getElementById("coachName");
  const coachRole = document.getElementById("coachRole");
  const coachBio = document.getElementById("coachBio");
  const coachImage = document.getElementById("coachImage");
  const counter = document.getElementById("counter");
  const prevBtn = document.getElementById("prevBtn");
  const nextBtn = document.getElementById("nextBtn");

  if (!coachName || !coachImage || !prevBtn || !nextBtn) {
    console.warn("Coach slider: Missing elements. Aborting.");
    return;
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
      bio: "Prince develops reflexes, map awareness, and communication — bringing out the tactical side of every player.",
      img: "https://dying-amaranth-5zbv48y6b0.edgeone.app/486820805_638306459090302_8238139458490198721_n.jpg"
    },
    {
      name: "Carl",
      role: "DOTA Coach",
      bio: "Carl focuses on macro strategy, hero synergy, and leadership — preparing teams for both ranked and tournament play.",
      img: "https://primary-beige-v6xxrpubws.edgeone.app/1000075397.jpeg"
    },
    {
      name: "Coach Angel",
      role: "Life & Study Coach",
      bio: "Angel teaches mental clarity, focus, and productivity — helping students and gamers find balance and perform their best.",
      img: "https://conventional-violet-i3x8tbblbe.edgeone.app/1000018995.jpeg"
    },
    {
      name: "Coach Rigel",
      role: "Wild Rift Coach",
      bio: "Rigel develops leadership and team synergy in mobile MOBA gameplay. His analytical approach sharpens map awareness and communication.",
      img: "https://delighted-pink-pdfpvxevdx.edgeone.app/90bc9955-02b6-4175-afd1-4cf30fce86a8.jpg"
    }
  ];

  let index = 0;

  function renderCoach(i) {
    const c = coaches[i];
    coachName.textContent = c.name;
    coachRole.textContent = c.role;
    coachBio.textContent = c.bio;
    counter.textContent = `${i + 1} / ${coaches.length}`;
    coachImage.classList.add("fade");
    setTimeout(() => {
      coachImage.src = c.img;
      coachImage.classList.remove("fade");
    }, 220);
  }

  prevBtn.addEventListener("click", () => {
    index = (index - 1 + coaches.length) % coaches.length;
    renderCoach(index);
  });

  nextBtn.addEventListener("click", () => {
    index = (index + 1) % coaches.length;
    renderCoach(index);
  });

  document.addEventListener("keydown", e => {
    if (e.key === "ArrowLeft") prevBtn.click();
    if (e.key === "ArrowRight") nextBtn.click();
  });

  renderCoach(index);
});
// === LOGIN/SIGNUP TOGGLE + QUOTES ===
document.addEventListener("DOMContentLoaded", () => {
  const loginForm = document.getElementById("login-form");
  const signupForm = document.getElementById("signup-form");
  const showSignup = document.getElementById("show-signup");
  const showLogin = document.getElementById("show-login");
  const authTitle = document.getElementById("auth-title");
  const quoteText = document.getElementById("quote-text");

  // Toggle Login/Signup
  if (showSignup && showLogin) {
    showSignup.addEventListener("click", (e) => {
      e.preventDefault();
      loginForm.classList.remove("active");
      signupForm.classList.add("active");
      authTitle.textContent = "Create Account";
    });

    showLogin.addEventListener("click", (e) => {
      e.preventDefault();
      signupForm.classList.remove("active");
      loginForm.classList.add("active");
      authTitle.textContent = "Welcome Back";
    });
  }

  // Rotating quotes
  const quotes = [
    `"Level up your mind, not just your rank."`,
    `"Grind smarter. Learn faster. Gameucated stronger."`,
    `"Every defeat is a lesson — every win is growth."`,
    `"Don’t just play the game. Master it."`,
    `"Train your aim, train your brain."`
  ];
  let index = 0;
  setInterval(() => {
    index = (index + 1) % quotes.length;
    quoteText.style.opacity = 0;
    setTimeout(() => {
      quoteText.textContent = quotes[index];
      quoteText.style.opacity = 1;
    }, 400);
  }, 4000);
});
document.addEventListener("DOMContentLoaded", () => {
  // 🌟 Motivational quotes rotation
  const quotes = [
    "Level up your mind, not just your rank.",
    "Grind smarter. Learn faster.",
    "Train your aim, train your brain.",
    "Play. Learn. Dominate.",
  ];

  const quoteText = document.getElementById("quote-text");
  let q = 0;

  setInterval(() => {
    q = (q + 1) % quotes.length;
    quoteText.style.opacity = 0;
    setTimeout(() => {
      quoteText.textContent = `"${quotes[q]}"`;
      quoteText.style.opacity = 1;
    }, 400);
  }, 4000);

  // 🔁 Toggle between login/signup
  const showSignup = document.getElementById("show-signup");
  const showLogin = document.getElementById("show-login");
  const loginForm = document.getElementById("login-form");
  const signupForm = document.getElementById("signup-form");
  const authTitle = document.getElementById("auth-title");

  showSignup.addEventListener("click", (e) => {
    e.preventDefault();
    loginForm.classList.remove("active");
    signupForm.classList.add("active");
    authTitle.textContent = "Create Account";
  });

  showLogin.addEventListener("click", (e) => {
    e.preventDefault();
    signupForm.classList.remove("active");
    loginForm.classList.add("active");
    authTitle.textContent = "Welcome Back";
  });
});
