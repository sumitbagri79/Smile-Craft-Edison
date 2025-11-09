import { type SiteDataProps } from "../types/configDataTypes";

// Update this file with your site specific information
const siteData: SiteDataProps = {
	name: "Smile Craft Dental",
	// Your website's title and description (meta fields)
	title: "Smile Craft Dental — Compassionate, modern dental care",
	description:
		"Smile Craft Dental provides compassionate, modern dental care for the whole family — general dentistry, cosmetic treatments, implants, and emergency care.",

	// Your information for blog post purposes / site owner
	author: {
		name: "Smile Craft Dental",
		email: "smilecraftedison@gmail.com",
		twitter: "",
	},

	// default image for meta tags if the page doesn't have an image already
	defaultImage: {
		src: "/images/theme.jpg",
		alt: "Smile Craft Dental",
	},
};

export default siteData;
