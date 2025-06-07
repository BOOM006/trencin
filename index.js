document.addEventListener("DOMContentLoaded", function () {
  const images = [
    {
      id: "one",
      defaultSrc: "/obrazky/city_black.png",
      hoverSrc: "/obrazky/city.png",
    },
    {
      id: "two",
      defaultSrc: "/obrazky/sightseeing_black.png",
      hoverSrc: "/obrazky/sightseeing.jpg",
    },
    {
      id: "three",
      defaultSrc: "/obrazky/cityhall_black.png",
      hoverSrc: "/obrazky/cityhall.png",
    },
    {
      id: "four",
      defaultSrc: "/obrazky/tourism_black.png",
      hoverSrc: "/obrazky/tourism.png",
    },
  ];

  images.forEach((img) => {
    const divElement = document.getElementById(img.id); // Priamo div s ID (one, two, three, four)
    const imgElement = divElement.querySelector("img"); // Nájde obrázok vo vnútri divu

    if (divElement && imgElement) {
      divElement.addEventListener("mouseover", () => {
        imgElement.src = img.hoverSrc;
      });
      divElement.addEventListener("mouseout", () => {
        imgElement.src = img.defaultSrc;
      });
    }
  });
});

fetch("https://api.rss2json.com/v1/api.json?rss_url=https://trencin.sk/feed/")
  .then((res) => res.json())
  .then((data) => {
    const ul = document.getElementById("rss-list");
    data.items.slice(0, 3).forEach((item) => {
      const li = document.createElement("li");
      const date = new Date(item.pubDate).toLocaleDateString("sk-SK");
      li.innerHTML = `<p><strong>${date}:</strong> <a href="${item.link}" target="_blank">${item.title}</a></p>`;
      ul.appendChild(li);
    });
  })
  .catch((err) => {
    console.error("Nepodarilo sa načítať aktuality:", err);
    const ul = document.getElementById("rss-list");
    ul.innerHTML = "<li>Aktuality momentálne nie sú dostupné.</li>";
  });
