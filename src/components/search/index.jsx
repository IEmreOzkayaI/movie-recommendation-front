import React, {useEffect, useState} from "react";
import {Button} from "@/components/ui/button";
import {Form, FormField, FormItem} from "@/components/ui/form";
import {Input} from "@/components/ui/input";
import {Label} from "@/components/ui/label";
import {logInStatus} from "@/states/feature/auth/login";
import {zodResolver} from "@hookform/resolvers/zod";
import {useForm} from "react-hook-form";
import {useSelector} from "react-redux";
import {Link} from "react-router-dom";
import Loading from "../loading";
import showToast from "../toast";
import {Toaster} from "../ui/toaster";
import useFormHandlers from "./useFormHandlers";
import validationSchema, {defaultValues} from "./validationSchema";

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
			className='fixed left-[270px] bottom-6 -translate-x-1/2
        w-[500px] rounded-md bg-slate-950 p-4 overflow-auto
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
										<Input className='bg-black border-none focus-visible:ring-offset-0 text-white' id='title' type='text' placeholder='Movie name...' {...field} autoComplete='title' />
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
