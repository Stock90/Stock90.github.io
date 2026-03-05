document.addEventListener("DOMContentLoaded", () => {

  const params = new URLSearchParams(window.location.search);
  const marca = params.get("marca") || "jbl";

  const hoja = marca.toUpperCase();
  const carpetaImg = marca;

  document.title = `${hoja} | Catálogo`;

  const contenedor = document.getElementById("catalogo");
  const url = `https://opensheet.elk.sh/1QmhPMYJz44ofHM-jvuk17W1_l30i4bT8cuKxiIXQBfM/${hoja}`;

  contenedor.innerHTML = "<p>Cargando catálogo...</p>";

  fetch(url)
    .then(res => res.json())
    .then(productos => {

      /* =============================
         GENERAR CATEGORÍAS AUTOMÁTICAS
      ============================== */

      const categorias = new Set();

      productos.forEach(p => {
        if (p.CATEGORIA) {
          categorias.add(p.CATEGORIA.trim());
        }
      });

      const filterMenu = document.getElementById("filters-menu");
      const filterToggle = document.getElementById("filterToggle");

      if (categorias.size === 0) {

        /* no hay categorias → no mostrar botón */

      } else {

        filterToggle.style.display = "block";

        filterMenu.innerHTML = '<button data-cat="all">Todos</button>';

        categorias.forEach(cat => {

          const btn = document.createElement("button");

          btn.dataset.cat = cat.toUpperCase();
          btn.textContent = cat;

          filterMenu.appendChild(btn);

        });

      }

      /* =============================
         CREAR PRODUCTOS
      ============================== */

      const fragment = document.createDocumentFragment();

      productos.forEach(p => {

        const item = document.createElement("div");
        item.className = "item";

        if (p.CATEGORIA) {
          item.dataset.categoria = p.CATEGORIA;
        }

        const precioLimpio = Number(
          String(p.PRECIO).replace(/[^0-9]/g, "")
        );

        item.innerHTML = `
          <img 
            src="assets/imgs/${carpetaImg}/${p.imagen}" 
            alt="${p.REFERENCIA}"
            loading="lazy"
            decoding="async"
          >
          <h3>${p.REFERENCIA}</h3>
          <p>${p.DESCRIPCION}</p>
          <h4 class="precio">
            ${precioLimpio
              ? `$${precioLimpio.toLocaleString("es-CO")}`
              : "Consultar precio"}
          </h4>
        `;

        fragment.appendChild(item);

      });

      contenedor.innerHTML = "";
      contenedor.appendChild(fragment);

      /* =============================
         ACTIVAR FILTROS SOLO SI EXISTEN
      ============================== */

      if (categorias.size > 0) {
        activarFiltros();
      }

      activarBusqueda();

    })
    .catch(error => {
      console.error("Error:", error);
      contenedor.innerHTML = "<p>Error cargando catálogo</p>";
    });

  /* =============================
     SISTEMA DE FILTROS
  ============================== */

  function activarFiltros() {

    const filterToggle = document.getElementById("filterToggle");
    const filterMenu = document.querySelector(".filters-menu");
    const cards = document.querySelectorAll(".item");

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

      cards.forEach(card => {

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

  /* =============================
     BUSCADOR
  ============================== */

  function activarBusqueda() {

    const searchInput = document.getElementById("searchInput");
    const cards = document.querySelectorAll(".item");

    if (!searchInput) return;

    searchInput.addEventListener("input", () => {

      const texto = searchInput.value.toUpperCase().trim();

      cards.forEach(card => {

        const referencia = card.querySelector("h3").textContent.toUpperCase();

        card.style.display =
          referencia.includes(texto)
            ? "block"
            : "none";

      });

    });

    /* limpiar con ESC */

    searchInput.addEventListener("keydown", (e) => {

      if (e.key === "Escape") {

        searchInput.value = "";

        cards.forEach(card => {
          card.style.display = "block";
        });

      }

    });

  }

});