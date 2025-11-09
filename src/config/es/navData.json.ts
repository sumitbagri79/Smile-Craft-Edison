import { type navItem } from "../types/configDataTypes";

const navConfig: navItem[] = [
	{
		text: "Resumen",
		link: "/overview",
	},
	{
		text: "Páginas",
		dropdown: [
			{ text: "Inicio", link: "/" },
			{ text: "Acerca de", link: "/about" },
			{ text: "Servicios", link: "/services" },
			{ text: "Blog", link: "/blog" },
			{ text: "Categorías", link: "/categories" },
		],
	},
	{
		text: "Servicios",
		link: "/services",
	},
	{
		text: "Blog",
		link: "/blog",
	},
	{
		text: "Acerca de",
		link: "/about",
	},
];

export default navConfig;
