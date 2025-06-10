document.getElementById("showBtn").onclick = function () {
  document.querySelector(".hidden").style.display = "block";
  document.getElementById("showBtn").style.display = "none";
};

document.getElementById("hideBtn").onclick = function () {
  document.querySelector(".hidden").style.display = "none";
  document.getElementById("showBtn").style.display = "block";
};

fetch("https://visit.trencin.sk/wp-json/trencin/v1/event?since=2025-06-09?until=2025-06-10")
  .then((res) => res.json())
  .then((events) => {
    const ul = document.getElementById("events-list");
    events.forEach((e) => {
      const li = document.createElement("li");
      const date = new Date(e.start || e.date);
      const formatted = isNaN(date)
        ? "Neznámy dátum"
        : date.toLocaleDateString("sk-SK");
      li.innerHTML = `<strong>${e.name}</strong> – ${formatted}`;
      ul.appendChild(li);
    });
  });
