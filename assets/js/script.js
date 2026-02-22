const propiedades_venta = [
  {
    nombre: "Apartamento de lujo en zona exclusiva",
    src: "https://images.unsplash.com/photo-1545324418-cc1a3fa10c00?w=800&q=80",
    descripcion: "Apartamento de lujo ubicado en una exclusiva zona residencial con acabados de primera clase.",
    ubicacion: "123 Luxury Lane, Prestige Suburb, CA",
    habitaciones: 4,
    banos: 3,
    costo: 5000,
    smoke: false,
    pets: false
  },
  {
    nombre: "Apartamento acogedor en la montaña",
    src: "https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=800&q=80",
    descripcion: "Apartamento situado en lo alto de una montaña con impresionantes vistas y aire puro.",
    ubicacion: "789 Mountain Road, Summit Peaks, CA",
    habitaciones: 2,
    banos: 1,
    costo: 1200,
    smoke: true,
    pets: true
  },
  {
    nombre: "Penthouse de lujo con terraza panorámica",
    src: "https://images.unsplash.com/photo-1512917774080-9991f1c4c750?w=800&q=80",
    descripcion: "Penthouse con terraza panorámica y vistas espectaculares a la ciudad.",
    ubicacion: "567 Skyline Avenue, Skyview City, CA",
    habitaciones: 3,
    banos: 2,
    costo: 4500,
    smoke: false,
    pets: true
  },
  {
    nombre: "Casa familiar con jardín",
    src: "https://images.unsplash.com/photo-1568605114967-8130f3a36994?w=800&q=80",
    descripcion: "Hermosa casa con amplio jardín privado, espacios luminosos y garaje doble.",
    ubicacion: "456 Green Street, Suburbia, CA",
    habitaciones: 5,
    banos: 3,
    costo: 6000,
    smoke: true,
    pets: false
  }
];

const propiedades_alquiler = [
  {
    nombre: "Apartamento en el centro de la ciudad",
    src: "https://images.unsplash.com/photo-1502672260266-1c1ef2d93688?w=800&q=80",
    descripcion: "Apartamento moderno en el corazón de la ciudad, a pasos de todo lo que necesitas.",
    ubicacion: "123 Main Street, Anytown, CA",
    habitaciones: 2,
    banos: 1,
    costo: 2000,
    smoke: false,
    pets: true
  },
  {
    nombre: "Apartamento luminoso con vista al mar",
    src: "https://images.unsplash.com/photo-1499793983690-e29da59ef1c2?w=800&q=80",
    descripcion: "Hermoso apartamento con vista impresionante al mar y balcón privado.",
    ubicacion: "456 Ocean Avenue, Seaside Town, CA",
    habitaciones: 3,
    banos: 2,
    costo: 2500,
    smoke: true,
    pets: true
  },
  {
    nombre: "Condominio moderno en zona residencial",
    src: "https://images.unsplash.com/photo-1484154218962-a197022b5858?w=800&q=80",
    descripcion: "Elegante condominio en zona residencial tranquila con amenidades completas.",
    ubicacion: "789 Quiet Road, Suburbia, CA",
    habitaciones: 2,
    banos: 2,
    costo: 2200,
    smoke: false,
    pets: false
  },
  {
    nombre: "Loft artístico en barrio bohemio",
    src: "https://images.unsplash.com/photo-1505873242700-f289a29e1e0f?w=800&q=80",
    descripcion: "Loft de estilo industrial con techos altos y espacios abiertos, ideal para creativos.",
    ubicacion: "321 Art Street, Bohemian Town, CA",
    habitaciones: 1,
    banos: 1,
    costo: 1800,
    smoke: true,
    pets: false
  }
];

function renderPropiedades(lista, contenedorId, max = null, tipo = "venta") {
  const contenedor = document.getElementById(contenedorId);
  if (!contenedor) return;

  const propiedades = max ? lista.slice(0, max) : lista;
  const esVenta = tipo === "venta";

  contenedor.innerHTML = propiedades.map(prop => `
    <div class="card">
      <div class="card-img-wrapper">
        <img src="${prop.src}" alt="${prop.nombre}" loading="lazy">
        <span class="card-badge ${esVenta ? 'badge-venta' : 'badge-alquiler'}">
          ${esVenta ? 'En Venta' : 'En Alquiler'}
        </span>
      </div>
      <div class="card-body">
        <h3>${prop.nombre}</h3>
        <p class="card-description">${prop.descripcion}</p>
        <div class="card-location">
          <span>📍</span> ${prop.ubicacion}
        </div>
        <div class="card-features">
          <div class="feature">🛏️ <strong>${prop.habitaciones}</strong>&nbsp;Hab.</div>
          <div class="feature">🚿 <strong>${prop.banos}</strong>&nbsp;Baños</div>
        </div>
        <div class="card-tags">
          ${prop.smoke
            ? '<span class="tag tag-allow">✅ Se puede fumar</span>'
            : '<span class="tag tag-deny">🚫 Sin fumar</span>'}
          ${prop.pets
            ? '<span class="tag tag-allow">🐶 Mascotas OK</span>'
            : '<span class="tag tag-deny">🚫 Sin mascotas</span>'}
        </div>
        <div class="card-footer">
          <div class="price">
            $${prop.costo.toLocaleString()}
            ${esVenta ? '' : '<span class="price-suffix">/mes</span>'}
          </div>
          <a href="#" class="btn-card">Ver detalle</a>
        </div>
      </div>
    </div>
  `).join("");
}

// index.html — muestra 3 de cada tipo
renderPropiedades(propiedades_venta,    "ventaIndex",    3, "venta");
renderPropiedades(propiedades_alquiler, "alquilerIndex", 3, "alquiler");

// páginas completas
renderPropiedades(propiedades_venta,    "venta",   null, "venta");
renderPropiedades(propiedades_alquiler, "alquiler", null, "alquiler");
