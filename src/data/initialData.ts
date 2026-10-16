

export const initialData: {
  categories: {
    name: string;
    slug: string;
  }[];
  products: {
    title: string;
    description: string;
    price: number;
    brand: string;
    inStock: number;
    capacity: number;
    unitCapacity: string;
    slug: string;
    category: string;
    images: string[];
  }[];
   
} = {
  categories: [
    {
      name: "Cosméticos",
      slug: "cosmeticos",
    },
    {
      name: "Ropa de cama",
      slug: "ropa-de-cama",
    },
  ],
  products: [
    {
      title: "Crema facial antiarrugas",
      description: "Crema facial de 50 ml",
      price: 20,
      inStock: 10,
      capacity: Math.random() * 100,
      unitCapacity: "ml",
      brand: "Brand A",
      slug: "crema-facial-antiarrugas",
      category: "facial",
      images: [
        "/products/facial/crema-facial-antiage.webp",
        "/products/facial/crema-facial-antiage-2.webp",
      ],
    },
    {
      title: "Crema facial noche",
      description: "Crema facial para noche de 50 ml",
      price: 20,
      inStock: 10,
      capacity: Math.random() * 100,
      unitCapacity: "ml",
      brand: "Brand B",
      slug: "crema-facial-noche",
      category: "facial",
      images: [
        "/products/facial/crema-noche.webp",
        "/products/facial/crema-noche-2.webp",
      ],
    },
    {
      title: "Champú Anti-Frizz",
      description: "Champú de 250 ml",
      price: 15,
      inStock: 10,
      capacity: Math.random() * 100,
      unitCapacity: "ml",
      brand: "Brand C",
      slug: "champu-anti-frizz",
      category: "cabello",
      images: [
        "/products/cabello/anti-frizz.png",
      ],
    },
    {
      title: "Acondicionador Anti-Frizz",
      description: "Acondicionador de 250 ml",
      price: 15,
      inStock: 10,
      capacity: Math.random() * 100,
      unitCapacity: "ml",
      brand: "Brand D",
      slug: "acondicionador-anti-frizz",
      category: "cabello",
      images: [
        "/products/cabello/acondicionador-anti-frizz.png",
      ],
    },
    {
      title: "Crema corporal protectora",
      description: "Crema corporal de 200 ml",
      price: 25,
      inStock: 10,
      capacity: Math.random() * 100,
      unitCapacity: "ml",
      brand: "Brand E",
      slug: "crema-corporal-protectora",
      category: "cuerpo",
      images: [
        "/products/cuerpo/crema-protect.webp",
        "/products/cuerpo/crema-protect-2.webp",
      ],
    },
    {
      title: "Crema de manos",
      description: "Crema de manos de 50 ml",
      price: 10,
      inStock: 10,
      capacity: Math.random() * 100,
      unitCapacity: "ml",
      brand: "Brand F",
      slug: "crema-manos",
      category: "manos-y-pies",
      images: [
        "/products/manos-pies/crema-manos.jpg",
      ],
    },
    {
      title: "Kit Restauración",
      description: "Kit restauracion de 100 ml cada uno",
      price: 30,
      inStock: 10,
      capacity: Math.random() * 100,
      unitCapacity: "ml",
      brand: "Brand G",
      slug: "perfume",
      category: "kits",
      images: [
        "/products/kits/kit-restauracion.webp",
        "/products/kits/kit-restauracion-2.webp",
      ],
    },
    {
      title: "Protector solar fps 50",
      description: "Protector solar de 200 ml fps 50",
      price: 35,
      inStock: 10,
      capacity: Math.random() * 100,
      unitCapacity: "ml",
      brand: "Brand H",
      slug: "protector-solar-50",
      category: "solares",
      images: [
        "/products/solares/protector-fps-50.webp",
        "/products/solares/protector-fps-50-2.webp",
      ],
    },
    {
      title: "Protector solar fps 30",
      description: "Protector solar de 200 ml fps 30",
      price: 35,
      inStock: 10,
      capacity: Math.random() * 100,
      unitCapacity: "ml",
      brand: "Brand I",
      slug: "protector-solar-30",
      category: "solares",
      images: [
        "/products/solares/protector-fps-30.webp",
        "/products/solares/protector-fps-30-2.webp",
      ],
    },
    {
      title: "Crema facial hombre",
      description: "Crema facial de 50 ml para hombre",
      price: 20,
      inStock: 10,
      capacity: Math.random() * 100,
      unitCapacity: "ml",
      brand: "Brand J",
      slug: "crema-facial-hombre",
      category: "hombre",
      images: [
        "/products/hombre/crema.webp",
        "/products/hombre/crema-2.webp",
      ],
    },
  ],
  
 
};
