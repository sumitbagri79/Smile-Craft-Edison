import { type SiteDataProps } from "../types/configDataTypes";

// Update this file with your site specific information
const siteData: SiteDataProps = {
	name: "Smile Craft Dental",
	// Your website's title and description (meta fields)
	title: "Smile Craft Dental — Soins dentaires modernes et attentionnés",
	description:
		"Smile Craft Dental offre des soins dentaires modernes et attentionnés pour toute la famille — dentisterie générale, soins esthétiques, implants et urgences.",

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
