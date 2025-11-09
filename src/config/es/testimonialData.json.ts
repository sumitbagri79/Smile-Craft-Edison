import Aniket from "@images/testimonials/aniket_p.jpg";
import BowTiedFocus from "@images/testimonials/BowTiedFocus.jpg";
import Connor from "@images/testimonials/connor.webp";
import Damiano from "@images/testimonials/damiano.jpg";
import David from "@images/testimonials/david-g-davedev.png";
import Geoffrey from "@images/testimonials/geoffrey.webp";

import { type TestimonialItem } from "../types/configDataTypes";

export const testimonialData: TestimonialItem[] = [
	{
		avatar: Geoffrey,
		name: "Geoffrey",
		title: "Paciente desde 2020",
		testimonial: `Recomiendo mucho esta clínica. Excelente atención y profesionalismo.`,
	},
	{
		avatar: Connor,
		name: "Connor D",
		title: "Paciente desde 2023",
		testimonial: `Muy buena experiencia, personal amable y tratamientos efectivos.`,
	},
	{
		avatar: BowTiedFocus,
		name: "BowTiedFocus",
		title: "Paciente desde 2019",
		testimonial: `El servicio es impecable y el equipo muy profesional.`,
	},
];

export default testimonialData;
