document.addEventListener("DOMContentLoaded", function () {
  const images = [
    {
      id: "one",
      defaultSrc: "/obrazky/hotel-sign.png",
      hoverSrc: "/obrazky/hotel-sign-white.png",
    },
    {
      id: "two",
      defaultSrc: "/obrazky/bus-sign.png",
      hoverSrc: "/obrazky/bus-sign-white.png",
    },
    {
      id: "three",
      defaultSrc: "/obrazky/eating-sign.png",
      hoverSrc: "/obrazky/eating-sign-white.png",
    },
    {
      id: "four",
      defaultSrc: "/obrazky/attracion-sign.png",
      hoverSrc: "/obrazky/attracion-sign-white.png",
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
