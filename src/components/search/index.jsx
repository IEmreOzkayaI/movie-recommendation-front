import { Form, FormField, FormItem } from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { zodResolver } from "@hookform/resolvers/zod";
import { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import useFormHandlers from "./useFormHandlers";
import validationSchema, { defaultValues } from "./validationSchema";

const Search = () => {
	const form = useForm({resolver: zodResolver(validationSchema), defaultValues, mode: "onChange"});
	const {onSubmit, onError, clearInfo} = useFormHandlers();
	const [debounceTimeout, setDebounceTimeout] = useState(null);

	// Watch the 'title' field and trigger onSubmit with debouncing
	const title = form.watch("title");

	useEffect(() => {
		if (title !== "") {
			if (debounceTimeout) {
				clearTimeout(debounceTimeout);
			}
			const timeout = setTimeout(() => {
				form.handleSubmit(onSubmit, onError)();
			}, 1000);
			setDebounceTimeout(timeout);
		}
		return () => {
			clearTimeout(debounceTimeout);
			clearInfo();
		};
	}, [title]);

	return (
		<div
			className='fixed left-[270px] bottom-24 -translate-x-1/2
		w-[200px] md:bottom-6 lg:bottom-6 xl:bottom-6 2xl:bottom-6
        md:w-[500px] lg:w-[500px] xl:w-[500px] 2xl:w-[500px]
		md:p-4 lg:p-4 xl:p-4 2xl:p-4
		 rounded-md bg-slate-950 p-1 overflow-auto
        z-10 border border-[1px] border-white shadow-xxl'>
			<Form {...form}>
				<form onSubmit={form.handleSubmit(onSubmit, onError)}>
					<div className='grid gap-4'>
						<FormField
							control={form.control}
							name='title'
							render={({field}) => (
								<FormItem>
									<div className='grid gap-2 font-bold '>
										<Input className='bg-slate-950 border-none focus-visible:ring-offset-0 text-white' id='title' type='text' placeholder='Movie name...' {...field} autoComplete='title' />
									</div>
								</FormItem>
							)}
						/>
					</div>
				</form>
			</Form>
		</div>
	);
};

export default Search;
