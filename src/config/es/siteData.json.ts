import { type SiteDataProps } from "../types/configDataTypes";

// Datos del sitio — actualice esto con la información de su clínica
const siteData: SiteDataProps = {
	name: "Smile Craft Dental",
	// Título y descripción del sitio web (campos meta)
	title: "Smile Craft Dental — Atención dental moderna y cercana",
	description:
		"Smile Craft Dental ofrece atención dental moderna y cercana para toda la familia — odontología general, tratamientos estéticos, implantes y atención de urgencias.",

	// Información del autor/propietario del sitio
	author: {
		name: "Smile Craft Dental",
		email: "smilecraftedison@gmail.com",
		twitter: "",
	},

	// imagen por defecto para meta tags si la página no tiene imagen
	defaultImage: {
		src: "/images/theme.jpg",
		alt: "Smile Craft Dental",
	},

	// Información de negocio (actualice con los datos reales)
	url: "https://www.smilecraftedison.com",
	phone: "",
	address: {
		streetAddress: "",
		addressLocality: "Edison",
		addressRegion: "NJ",
		postalCode: "",
		addressCountry: "US",
	},
	geo: {
		latitude: "",
		longitude: "",
	},
	openingHours: ["Mo-Fr 08:30-17:00"],
	sameAs: [""],
};

export default siteData;
