import {z} from "zod";

const validationSchema = z.object({
	title: z
		.string({
			message: "Title is required",
		})
		.min(0, "Title must be at least 6 characters long"),
});

export const defaultValues = {title: ""};

export default validationSchema;
