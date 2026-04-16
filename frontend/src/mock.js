// Mock data for El Callejero Restaurant

export const restaurantInfo = {
  name: "El Callejero",
  tagline: "Street Food Gourmet",
  description: "Bienvenido a la página Oficial del Callejero. Disfruta de la mejor experiencia culinaria.",
  phone: "2665-4111",
  whatsapp: "+50688644396",
  address: "JHM5+5XM, Liberia, Los Cerros",
  rating: 4.6,
  logo: "https://ugc.production.linktr.ee/fc2e11ba-3366-43ff-ab92-1686df684a0b_IMG-6311.jpeg",
  schedule: {
    monday: "Cerrado",
    tuesday: "11:00 - 22:00",
    wednesday: "11:00 - 22:00",
    thursday: "11:00 - 22:00",
    friday: "11:00 - 22:00",
    saturday: "11:00 - 22:00",
    sunday: "11:00 - 22:00"
  }
};

export const socialLinks = {
  facebook: "https://www.facebook.com/share/19RTBffDvQ/?mibextid=wwXIfr",
  instagram: "https://www.instagram.com/el_callejero_liberia?igsh=cXRneGx2ZzYyOXpi",
  tiktok: "https://www.tiktok.com/@el.callejero5?_t=zm-8wla41rxbny&_r=1",
  pedidosya: "https://www.pedidosya.cr/restaurantes/liberia/el-callejero-liberia-menu",
  menuLink: "http://entucelular.com/callejero"
};

export const menuCategories = [
  {
    id: 1,
    name: "Hamburguesas Gourmet",
    description: "Nuestras hamburguesas premium con ingredientes frescos",
    image: "https://images.unsplash.com/photo-1627378378955-a3f4e406c5de?crop=entropy&cs=srgb&fm=jpg&ixid=M3w4NjY2NjV8MHwxfHNlYXJjaHw0fHxnb3VybWV0JTIwYnVyZ2VyfGVufDB8fHx8MTc3NjM2ODU5M3ww&ixlib=rb-4.1.0&q=85",
    items: [
      {
        name: "Classic Burger",
        description: "Carne Angus, queso, lechuga, tomate y salsa especial",
        featured: true
      },
      {
        name: "BBQ Bacon Burger",
        description: "Carne Angus, bacon, queso cheddar, salsa BBQ",
        featured: true
      },
      {
        name: "Vegetarian Delight",
        description: "Hamburguesa vegetariana con aguacate y vegetales frescos",
        featured: false
      }
    ]
  },
  {
    id: 2,
    name: "Comida Mexicana",
    description: "Auténticos sabores mexicanos con un toque gourmet",
    image: "https://images.unsplash.com/photo-1603088549155-6ae9395b928f?crop=entropy&cs=srgb&fm=jpg&ixid=M3w4NTYxOTJ8MHwxfHNlYXJjaHwyfHxzdHJlZXQlMjBmb29kfGVufDB8fHx8MTc3NjM2ODU5N3ww&ixlib=rb-4.1.0&q=85",
    items: [
      {
        name: "Tacos Especiales",
        description: "Tacos con carne marinada y vegetales frescos",
        featured: true
      },
      {
        name: "Quesadillas",
        description: "Quesadillas de queso con pollo o carne",
        featured: false
      },
      {
        name: "Burritos",
        description: "Burritos rellenos con ingredientes premium",
        featured: true
      }
    ]
  },
  {
    id: 3,
    name: "Ensaladas Frescas",
    description: "Ensaladas nutritivas y deliciosas",
    image: "https://images.pexels.com/photos/2271107/pexels-photo-2271107.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940",
    items: [
      {
        name: "Caesar Salad",
        description: "Lechuga romana, pollo, parmesano y aderezo Caesar",
        featured: false
      },
      {
        name: "Mediterranean Salad",
        description: "Mezcla de vegetales mediterráneos con aceite de oliva",
        featured: false
      }
    ]
  },
  {
    id: 4,
    name: "Especialidades",
    description: "Nuestros platos especiales de la casa",
    image: "https://images.pexels.com/photos/1108117/pexels-photo-1108117.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940",
    items: [
      {
        name: "Wings & Fries",
        description: "Alitas picantes con papas fritas gourmet",
        featured: true
      },
      {
        name: "Loaded Nachos",
        description: "Nachos con queso, carne y guacamole",
        featured: false
      }
    ]
  }
];

export const heroImages = [
  "https://images.unsplash.com/photo-1550547660-d9450f859349?crop=entropy&cs=srgb&fm=jpg&ixid=M3w4NjY2NjV8MHwxfHNlYXJjaHwxfHxnb3VybWV0JTIwYnVyZ2VyfGVufDB8fHx8MTc3NjM2ODU5M3ww&ixlib=rb-4.1.0&q=85",
  "https://images.unsplash.com/photo-1603088549155-6ae9395b928f?crop=entropy&cs=srgb&fm=jpg&ixid=M3w4NTYxOTJ8MHwxfHNlYXJjaHwyfHxzdHJlZXQlMjBmb29kfGVufDB8fHx8MTc3NjM2ODU5N3ww&ixlib=rb-4.1.0&q=85",
  "https://images.pexels.com/photos/32701555/pexels-photo-32701555.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940"
];

export const testimonials = [
  {
    id: 1,
    name: "María González",
    rating: 5,
    comment: "¡La mejor hamburguesa que he probado! El ambiente es increíble."
  },
  {
    id: 2,
    name: "Carlos Ramírez",
    rating: 5,
    comment: "Comida deliciosa y servicio excelente. Totalmente recomendado."
  },
  {
    id: 3,
    name: "Ana Mora",
    rating: 4,
    comment: "Excelente calidad y sabor. El lugar perfecto para disfrutar."
  }
];
