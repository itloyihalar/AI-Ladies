// Stories data for HerVoice
const stories = [
  {
    id: 1,
    name: "Iroda Gulomova",
    title: "Uning Tonggi Sukuti",
    text: "U dunyo uyg‘onishidan oldin uyg‘ondi — yumshoq pushti nurni qabul qilib, sukut so‘zdan ko‘ra ko‘proq gapirishini tushundi. Har bir kofe qahvasidagi qadoq unga shifo topish vaqt talab qilishini va tinchlik topilmay, asta-sekin qurilishini eslatdi.",
    quote: "Hech qachon yengilma!",
    image: "https://randomuser.me/api/portraits/women/3.jpg"  // was 1.jpg
  },
  {
    id: 2,
    name: "Gulisa Toshpulatova",
    title: "O‘zimga Yoshligimdagi Xatlardan",
    text: "Agar men bir paytlar bo‘lgan qizga shivirlashim mumkin bo‘lsa, unga shuni aytardim: sen yetarlisan, hatto o‘zingni ko‘rinmas his qilgan kunlaringda ham. Har bir yurak og‘rishi seni yumshoqlikka o‘rgatadi. Har bir yo‘qotish sizga donolik beradi. Va bir kun kelib, sen tushunasiz — sen doim kuchliding.",
    quote: "Har doyim o'zingga ishon!",
    image: "https://randomuser.me/api/portraits/women/4.jpg"  // was 2.jpg
  },
  {
    id: 3,
    name: "Khursana Rasuleva",
    title: "Yana Boshlash Jasorati",
    text: "Yana boshlash — bu muvaffaqiyatsizlik emas, balki sof jasorat. Eski narsalar yo‘q bo‘lganda yangi boshlanishlarga ishonishni tanlashdir. U kimdir uni qutqarishini kutmadi; u o‘zini o‘zi qutqardi.",
    quote: "Marra seniki!",
    image: "https://randomuser.me/api/portraits/women/3.jpg"
  },
];


document.querySelectorAll(".three-card").forEach(card => {
  card.addEventListener("click", () => {
    const name = card.querySelector(".name").textContent;
    const title = card.querySelector(".title").textContent;
    const quote = card.querySelector(".quote").textContent
    const text = card.querySelector(".text").textContent;
    const img = card.querySelector("img").src;

    const storyData = {
      name:name,
      title: title,
      quote: quote,
      text: text,
      img: img,
    };

    localStorage.setItem("selectedStory", JSON.stringify(storyData));
    window.location.href = "story.html";
  });
});
// ALLSTORIES
// Render stories
const container = document.getElementById("story-container");
if (container) {
  container.innerHTML = stories.map(story => `
    <div class="card" data-id="${story.id}">
      <img src="${story.image}" alt="${story.title}">
      <h3>${story.name}</h3>
      <p>${story.text.substring(0, 80)}...</p>
    </div>
  `).join('');

  // Open story in new page
  document.querySelectorAll(".card").forEach(card => {
    card.addEventListener("click", () => {
      const id = card.dataset.id;
      const story = stories.find(s => s.id == id);
      localStorage.setItem("selectedStory", JSON.stringify(story));
      window.location.href = "story.html";
    });
  });
}



// FOR MESSAGE
document.addEventListener("DOMContentLoaded", () => {
  const form = document.querySelector(".contact-form");
  const status = document.getElementById("form-status");

  if (form) {
    form.addEventListener("submit", (e) => {
      e.preventDefault();
      status.textContent = "Thank you for your message 💌";
      form.reset();
    });
  }
});



// CONTACT
function handleFormSubmit(e) {
      e.preventDefault();
      const status = document.getElementById("form-status");
      status.textContent = "Thank you for your message 💌";
      e.target.reset();
      return false;
    }
const menuBtns = document.querySelectorAll(".menu-btn");
  const closeBtn = document.getElementById("closeMenu");
  const menuOverlay = document.getElementById("menuOverlay");

// DROPDOWN
document.addEventListener("DOMContentLoaded", () => {
  
  menuBtns.forEach((btn) => {
    btn.addEventListener("click", () => {
      document.body.classList.add("menu-open");
      menuOverlay.classList.add("active");
    });
  });

  if (closeBtn) {
    closeBtn.addEventListener("click", () => {
      document.body.classList.remove("menu-open");
      menuOverlay.classList.remove("active");
    });
  }
});



  

// ALLSTORIES
document.querySelectorAll('.bg-pink-50').forEach(card => {
    card.addEventListener('click', () => {
      const name = card.querySelector('h3').textContent;
      const quote = card.querySelector('p.italic').textContent;
      const role = card.querySelector('p.text-sm').textContent;
      const img = card.querySelector('img').src;

      const storyData = {
        title: name,
        text: `${quote}\n\n${role}\n\nHere’s a more detailed version of ${name}’s story — her journey, challenges, and inspiration.`,
        image: img
      };

      localStorage.setItem('selectedStory', JSON.stringify(storyData));
      window.location.href = 'story.html';
    });
  });


