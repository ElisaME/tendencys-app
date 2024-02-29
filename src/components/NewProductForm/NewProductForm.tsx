import React, { useState } from 'react';
import { useForm, SubmitHandler } from 'react-hook-form';
import { Item } from '../../interfaces/orders.interfaces';
import formatCurrency from '../../utils/FormatCurrency';

type Props = {
	addNewProduct: (product: Item) => void;
};

export default function NewProductForm(props: Props) {
	const {
		register,
		handleSubmit,
		formState: { errors },
		reset,
		setValue,
	} = useForm<Item>();

	const onSubmit: SubmitHandler<Item> = (data) => {
		props.addNewProduct(data);
		reset();
	};

	const inputStyles = (error: boolean) => {
		const defaultStyles = 'border-2 bg-slate-100 p-2 rounded-lg w-4/5';
		const errorStyles = 'border-red-300';
		return [defaultStyles, error ? errorStyles : 'border-gray-300'].join(' ');
	};

	return (
		<div className="border border-gray-300 rounded-lg py-2 px-4 my-4">
			{/* <h3 className="font-semibold my-1">Agregar Producto</h3> */}
			<form onSubmit={handleSubmit(onSubmit)}>
				<div className="grid grid-cols-2 gap-2">
					<div>
						<label className="w-full float-left font-semibold">Nombre</label>
						<input
							className={inputStyles(errors && errors.name ? true : false)}
							placeholder="Ingresa nombre de producto"
							{...register('name', { required: true })}
						/>
					</div>
					<div>
						<label className="w-full float-left font-semibold">SKU</label>
						<input
							className={inputStyles(errors && errors.sku ? true : false)}
							placeholder="Ej. 0001234"
							{...register('sku', { required: true })}
						/>
					</div>
					<div>
						<label className="w-full float-left font-semibold">Cantidad</label>
						<input
							className={inputStyles(errors && errors.quantity ? true : false)}
							placeholder="Ingresa una cantidad"
							{...register('quantity', { required: true })}
						/>
					</div>
					<div>
						<label className="w-full float-left font-semibold">Precio</label>
						<input
							className={inputStyles(errors && errors.price ? true : false)}
							placeholder="Ingresa un precio"
							{...register('price', { required: true })}
						/>
					</div>
					<button
						type="submit"
						className="border-2 border-teal-500 text-teal-500 rounded-full font-medium my-2 w-4/5 p-1.5"
					>
						+ Agregar Producto
					</button>
				</div>
			</form>
		</div>
	);
}
