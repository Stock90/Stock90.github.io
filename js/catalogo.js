document.addEventListener("DOMContentLoaded", () => {
 
  const params = new URLSearchParams(window.location.search);
  const marca = params.get("marca") || "jbl";
 
  const hoja = marca.toUpperCase();
  const carpetaImg = marca;
 
  const nombresMarca = {
    akg:        "AKG",
    crown:      "Crown",
    dbx:        "DBX",
    elation:    "Elation",
    jbl:        "JBL",
    kym:        "König & Meyer",
    martin:     "Martin",
    obsidian:   "Obsidian",
    powersoft:  "Powersoft",
    prolyte:    "Prolyte",
    se:         "SE Electronics",
    soundcraft: "Soundcraft",
  };
 
  const nombreMarca = nombresMarca[marca] || hoja;
  document.title = `${nombreMarca} | Catálogo de Audio Profesional`;
 
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
 
        filterToggle.classList.add("visible");
 
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
 
        const img = document.createElement("img");
        img.src      = `assets/imgs/${carpetaImg}/${p.imagen}`;
        img.alt      = p.REFERENCIA;
        img.loading  = "lazy";
        img.decoding = "async";
 
        const h3 = document.createElement("h3");
        h3.textContent = p.REFERENCIA;
 
        const desc = document.createElement("p");
        desc.textContent = p.DESCRIPCION;
 
        const precio = document.createElement("h4");
        precio.className   = "precio";
        precio.textContent = precioLimpio
          ? `$${precioLimpio.toLocaleString("es-CO")}`
          : "Consultar precio";
 
        item.append(img, h3, desc, precio);
 
        fragment.appendChild(item);
 
      });
 
      contenedor.innerHTML = "";
      contenedor.appendChild(fragment);
 
      const sinResultados = document.createElement("p");
      sinResultados.id            = "sin-resultados";
      sinResultados.textContent   = "No se encontraron productos.";
      sinResultados.style.display = "none";
      contenedor.after(sinResultados);
 
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
      contenedor.innerHTML = `
        <p>No se pudo cargar el catálogo. Por favor recarga la página o contáctanos por 
          <a href="https://api.whatsapp.com/send/?phone=573183501209" target="_blank" rel="noopener noreferrer">WhatsApp</a>.
        </p>
      `;
    });
 
  /* =============================
     ESTADO COMPARTIDO DE FILTROS
  ============================== */
 
  let categoriaActiva = "ALL";
  let textoBusqueda   = "";
 
  function aplicarFiltros() {
 
    const cards         = document.querySelectorAll(".item");
    const sinResultados = document.getElementById("sin-resultados");
    let   visibles      = 0;
 
    cards.forEach(card => {
 
      const cardCat    = card.dataset.categoria?.trim().toUpperCase() ?? "";
      const referencia = card.querySelector("h3").textContent.toUpperCase();
 
      const pasaCategoria = categoriaActiva === "ALL" || cardCat === categoriaActiva;
      const pasaBusqueda  = referencia.includes(textoBusqueda);
      const visible       = pasaCategoria && pasaBusqueda;
 
      card.style.display = visible ? "block" : "none";
 
      if (visible) visibles++;
 
    });
 
    if (sinResultados) {
      sinResultados.style.display = visibles === 0 ? "block" : "none";
    }
 
  }
 
  /* =============================
     SISTEMA DE FILTROS
  ============================== */
 
  function activarFiltros() {
 
    const filterToggle = document.getElementById("filterToggle");
    const filterMenu   = document.querySelector(".filters-menu");
 
    filterToggle.addEventListener("click", (e) => {
      e.stopPropagation();
      const abierto = filterMenu.classList.toggle("active");
      filterToggle.setAttribute("aria-expanded", abierto);
    });
 
    document.addEventListener("click", () => {
      filterMenu.classList.remove("active");
      filterToggle.setAttribute("aria-expanded", "false");
    });
 
    filterMenu.addEventListener("click", (e) => {
      e.stopPropagation();
 
      if (e.target.tagName !== "BUTTON") return;
 
      const categoria = e.target.dataset.cat?.toUpperCase();
      if (!categoria) return;
 
      categoriaActiva = categoria;
      aplicarFiltros();
 
      filterToggle.textContent = e.target.textContent;
      filterMenu.classList.remove("active");
      filterToggle.setAttribute("aria-expanded", "false");
 
    });
 
  }
 
  /* =============================
     BUSCADOR
  ============================== */
 
  function activarBusqueda() {
 
    const searchInput = document.getElementById("searchInput");
 
    if (!searchInput) return;
 
    searchInput.addEventListener("input", () => {
 
      textoBusqueda = searchInput.value.toUpperCase().trim();
      aplicarFiltros();
 
    });
 
    /* limpiar con ESC */
 
    searchInput.addEventListener("keydown", (e) => {
 
      if (e.key === "Escape") {
        searchInput.value = "";
        textoBusqueda = "";
        aplicarFiltros();
      }
 
    });
 
  }
 
});
