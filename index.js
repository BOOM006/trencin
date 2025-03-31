document.addEventListener("DOMContentLoaded", function () {
    const images = [
        { id: "one", defaultSrc: "/obrazky/city_black.png", hoverSrc: "/obrazky/city.png" },
        { id: "two", defaultSrc: "/obrazky/sightseeing_black.png", hoverSrc: "/obrazky/sightseeing.jpg" },
        { id: "three", defaultSrc: "/obrazky/cityhall_black.png", hoverSrc: "/obrazky/cityhall.png" },
        { id: "four", defaultSrc: "/obrazky/tourism_black.png", hoverSrc: "/obrazky/tourism.png" }
    ];

    images.forEach(img => {
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
