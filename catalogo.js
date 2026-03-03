document.addEventListener("DOMContentLoaded", () => {

  const contenedor = document.getElementById("catalogo");

  const hoja = contenedor.dataset.hoja;
  const carpetaImg = contenedor.dataset.imgFolder;
  const tieneFiltros = contenedor.dataset.filtros === "true";

  const url = `https://opensheet.elk.sh/1QmhPMYJz44ofHM-jvuk17W1_l30i4bT8cuKxiIXQBfM/${hoja}`;

  contenedor.innerHTML = "<p>Cargando catálogo...</p>";

  fetch(url)
    .then(res => res.json())
    .then(productos => {

      let html = "";

      productos.forEach(p => {

        const precioLimpio = Number(
          String(p.PRECIO).replace(/[^0-9]/g, "")
        );

        html += `
          <div class="item" ${tieneFiltros ? `data-categoria="${p.CATEGORIA}"` : ""}>
            <img src="assets/imgs/${carpetaImg}/${p.imagen}" alt="${p.REFERENCIA}">
            <h3>${p.REFERENCIA}</h3>
            <p>${p.DESCRIPCION}</p>
            <h4 class="precio">
              ${precioLimpio
                ? `$${precioLimpio.toLocaleString("es-CO")}`
                : "Consultar precio"}
            </h4>
          </div>
        `;
      });

      contenedor.innerHTML = html;

      if (tieneFiltros) activarFiltros();

    })
    .catch(error => {
      console.error("Error:", error);
      contenedor.innerHTML = "<p>Error cargando catálogo</p>";
    });

  function activarFiltros() {

    const filterToggle = document.getElementById("filterToggle");
    const filterMenu = document.querySelector(".filters-menu");

    filterToggle.addEventListener("click", (e) => {
      e.stopPropagation();
      filterMenu.classList.toggle("active");
    });

    document.addEventListener("click", () => {
      filterMenu.classList.remove("active");
    });

    filterMenu.addEventListener("click", (e) => {

      if (e.target.tagName !== "BUTTON") return;

      const categoria = e.target.dataset.cat?.toUpperCase();
      if (!categoria) return;

      document.querySelectorAll(".item").forEach(card => {

        const cardCat = card.dataset.categoria?.trim().toUpperCase();

        card.style.display =
          categoria === "ALL" || cardCat === categoria
            ? "block"
            : "none";
      });

      filterToggle.textContent = e.target.textContent;
      filterMenu.classList.remove("active");
    });
  }

});