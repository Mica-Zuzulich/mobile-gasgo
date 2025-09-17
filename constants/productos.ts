export type Producto = {
  id: number;
  nombre: string;
  precio: number;
  imagen: any;
};

export const productosBase: Producto[] = [
  {
    id: 1,
    nombre: "Garrafa 10kg",
    precio: 1000,
    imagen: require("../assets/images/garrafa10.jpg"),
  },
  {
    id: 2,
    nombre: "Garrafa 15kg",
    precio: 1500,
    imagen: require("../assets/images/garrafa15.jpg"),
  },
  {
    id: 3,
    nombre: "Garrafa 45kg",
    precio: 4000,
    imagen: require("../assets/images/garrafa45.jpg"),
  },
];
