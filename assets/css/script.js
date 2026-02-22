const propiedades_venta = [
  {
    nombre: "Apartamento de lujo en zona exclusiva",
    src: "img/venta1.jpg",
    descripcion: "Este apartamento de lujo está ubicado en una exclusiva zona residencial",
    ubicacion: "123 Luxury Lane, Prestige Suburb, CA",
    habitaciones: 4,
    costo: 5000,
    smoke: false,
    pets: false
  },
  {
    nombre: "Apartamento acogedor en la montaña",
    src: "img/venta2.jpg",
    descripcion: "Este apartamento acogedor está situado en lo alto de una montaña con impresionantes vistas",
    ubicacion: "789 Mountain Road, Summit Peaks, CA",
    habitaciones: 2,
    costo: 1200,
    smoke: true,
    pets: true
  },
  {
    nombre: "Penthouse de lujo con terraza panorámica",
    src: "img/venta3.jpg",
    descripcion: "Este penthouse de lujo ofrece una terraza panorámica con vistas espectaculares",
    ubicacion: "567 Skyline Avenue, Skyview City, CA",
    habitaciones: 3,
    costo: 4500,
    smoke: false,
    pets: true
  },
  {
    nombre: "Casa familiar con jardín",
    src: "img/venta4.jpg",
    descripcion: "Hermosa casa con amplio jardín y espacios luminosos",
    ubicacion: "456 Green Street, Suburbia, CA",
    habitaciones: 5,
    costo: 6000,
    smoke: true,
    pets: false
  }
];

const propiedades_alquiler = [
  {
    nombre: "Apartamento en el centro de la ciudad",
    src: "img/alquiler1.jpg",
    descripcion: "Este apartamento de 2 habitaciones está ubicado en el corazón de la ciudad",
    ubicacion: "123 Main Street, Anytown, CA",
    habitaciones: 2,
    costo: 2000,
    smoke: false,
    pets: true
  },
  {
    nombre: "Apartamento luminoso con vista al mar",
    src: "img/alquiler2.jpg",
    descripcion: "Este hermoso apartamento ofrece una vista impresionante al mar",
    ubicacion: "456 Ocean Avenue, Seaside Town, CA",
    habitaciones: 3,
    costo: 2500,
    smoke: true,
    pets: true
  },
  {
    nombre: "Condominio moderno en zona residencial",
    src: "img/alquiler3.jpg",
    descripcion: "Este elegante condominio moderno está ubicado en una tranquila zona residencial",
    ubicacion: "789 Quiet Road, Suburbia, CA",
    habitaciones: 2,
    costo: 2200,
    smoke: false,
    pets: false
  },
  {
    nombre: "Loft artístico en barrio bohemio",
    src: "img/alquiler4.jpg",
    descripcion: "Loft con estilo artístico, ideal para creativos",
    ubicacion: "321 Art Street, Bohemian Town, CA",
    habitaciones: 1,
    costo: 1800,
    smoke: true,
    pets: false
  }
];


function renderPropiedades(lista, contenedorId, max = null) {
  const contenedor = document.getElementById(contenedorId);
  if (!contenedor) return;

  let propiedades = lista;
  if (max) propiedades = lista.slice(0, max);

  contenedor.innerHTML = propiedades.map(prop => `
    <div class="card">
      <img src="${prop.src}" alt="${prop.nombre}">
      <h3>${prop.nombre}</h3>
      <p>${prop.descripcion}</p>
      <p><strong>Ubicación:</strong> ${prop.ubicacion}</p>
      <p><strong>${prop.habitaciones}</strong> Habitaciones | <strong>${prop.habitaciones}</strong> Baños</p>
      <p><strong>Precio:</strong> $${prop.costo}</p>
      <p>${prop.smoke ? "✅ Permitido fumar" : "❌ No se permite fumar"}</p>
      <p>${prop.pets ? "🐶 Mascotas permitidas" : "❌ No se permiten mascotas"}</p>
    </div>
  `).join("");
}


renderPropiedades(propiedades_venta, "ventaIndex", 3);
renderPropiedades(propiedades_alquiler, "alquilerIndex", 3);


renderPropiedades(propiedades_venta, "venta");
renderPropiedades(propiedades_alquiler, "alquiler");