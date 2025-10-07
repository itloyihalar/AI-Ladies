// Stories data for HerVoice
const stories = [
  {
    id: 1,
    title: "Her Morning Silence",
    text: "She woke up before the world did — in the soft pink light, she learned that silence can speak louder than words. Every sip of her morning coffee became a reminder that healing takes time, and peace is not found, but built slowly.",
    image: "https://images.unsplash.com/photo-1515378791036-0648a3ef77b2"
  },
  {
    id: 2,
    title: "Letters to My Younger Self",
    text: "If I could whisper to the girl I once was, I would tell her: you are enough, even on the days you feel invisible. Every heartbreak will teach you softness. Every loss will give you wisdom. And one day, you will understand — you were always strong.",
    image: "https://images.unsplash.com/photo-1529626455594-4ff0802cfb7e"
  },
  {
    id: 3,
    title: "The Courage to Begin Again",
    text: "Starting over is not failure — it’s bravery in its purest form. It’s choosing to believe in new beginnings when the old ones fade. She didn’t wait for someone to save her; she became her own rescue.",
    image: "https://images.unsplash.com/photo-1503342217505-b0a15ec3261c"
  }
];

// Render stories
const container = document.getElementById("story-container");
if (container) {
  container.innerHTML = stories.map(story => `
    <div class="card" data-id="${story.id}">
      <img src="${story.image}" alt="${story.title}">
      <h3>${story.title}</h3>
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
