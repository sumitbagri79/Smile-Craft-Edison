import { type CollectionEntry } from "astro:content";

import { defaultLocale } from "@/config/siteSettings.json";
import { getTranslatedData } from "@/js/translationUtils";

// data - siteData.title should not change based on locale so this should be fine
const siteData = getTranslatedData("siteData", defaultLocale);

interface GeneralProps {
	type: "general";
}

export interface BlogProps {
	type: "blog";
	postFrontmatter: CollectionEntry<"blog">["data"];
	image: ImageMetadata; // result of getImage() from Seo.astro
	authors: CollectionEntry<"authors">[];
	canonicalUrl: URL;
}

export type JsonLDProps = BlogProps | GeneralProps;

export default function jsonLDGenerator(props: JsonLDProps) {
	const { type } = props;
	if (type === "blog") {
		const { postFrontmatter, image, authors, canonicalUrl } = props as BlogProps;

		const authorsJsonLdArray = authors.map((author) => {
			return {
				"@type": "Person",
				name: author.data.name,
				url: author.data.authorLink,
			};
		});

		let authorsJsonLd;

		if (authorsJsonLdArray.length === 1) {
			authorsJsonLd = authorsJsonLdArray[0];
		} else {
			authorsJsonLd = authorsJsonLdArray;
		}

		return `<script type="application/ld+json">
      {
        "@context": "https://schema.org",
        "@type": "Blogposting",
        "mainEntityOfPage": {
          "@type": "WebPage",
          "@id": "${canonicalUrl}"
        },
        "headline": "${postFrontmatter.title}",
        "description": "${postFrontmatter.description}",
        "image": "${image.src}",
        "author": ${JSON.stringify(authorsJsonLd)},
        "datePublished": "${postFrontmatter.pubDate}",
        "dateModified": "${postFrontmatter.updatedDate}"
      }
    </script>`;
	}
	// General site JSON-LD (WebSite) plus optional LocalBusiness / Dentist JSON-LD
	const websiteObj = {
		"@context": "https://schema.org/",
		"@type": "WebSite",
		name: siteData.title,
		url: import.meta.env.SITE || siteData.url || "",
	};

	const ldArray: any[] = [websiteObj];

	// Add Dentist / LocalBusiness structured data when business info is present
	const hasBusinessInfo = !!(siteData.phone || siteData.address || siteData.url || siteData.geo);

	if (hasBusinessInfo) {
		const dentistObj: any = {
			"@context": "https://schema.org",
			"@type": "Dentist",
			name: siteData.name || siteData.title,
			description: siteData.description,
			url: siteData.url || import.meta.env.SITE || "",
		};

		if (siteData.phone) dentistObj.telephone = siteData.phone;

		if (siteData.sameAs && siteData.sameAs.length > 0) dentistObj.sameAs = siteData.sameAs.filter(Boolean);

		if (siteData.defaultImage?.src) {
			const imgUrl = (import.meta.env.SITE || siteData.url || "") + siteData.defaultImage.src;
			dentistObj.image = imgUrl;
		}

		if (siteData.address) {
			const { streetAddress, addressLocality, addressRegion, postalCode, addressCountry } = siteData.address;
			dentistObj.address = {
				"@type": "PostalAddress",
				streetAddress: streetAddress || undefined,
				addressLocality: addressLocality || undefined,
				addressRegion: addressRegion || undefined,
				postalCode: postalCode || undefined,
				addressCountry: addressCountry || undefined,
			};
		}

		if (siteData.geo && (siteData.geo.latitude || siteData.geo.longitude)) {
			dentistObj.geo = {
				"@type": "GeoCoordinates",
				latitude: siteData.geo.latitude || undefined,
				longitude: siteData.geo.longitude || undefined,
			};
		}

		if (siteData.openingHours && siteData.openingHours.length > 0) {
			dentistObj.openingHours = siteData.openingHours;
		}

		ldArray.push(dentistObj);
	}

	return `<script type="application/ld+json">${JSON.stringify(ldArray, null, 2)}</script>`;
}
