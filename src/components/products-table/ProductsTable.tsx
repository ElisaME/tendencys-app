import React from 'react';
import { Item } from '../../interfaces/orders.interfaces';
import formatCurrency from '../../utils/FormatCurrency';

type TableProps = {
	items: Item[];
};

const ProductsTable: React.FC<TableProps> = (props: TableProps) => {
	const items: Item[] = props.items;
	return (
		<div className=" bg-zinc-100 rounded-lg py-3 px-6 h-[350px] overflow-y-auto">
			<table className="table-fixed w-full my-0 align-middle text-dark border-neutral-200">
				<thead className="align-button">
					<tr className="font-semibold text-[0.9rem] text-gray-600 uppercase">
						<th className="pb-3 text-start">Nombre</th>
						<th className="pb-3 text-end">SKU</th>
						<th className="pb-3 text-end">Cantidad</th>
						<th className="pb-3 text-end">Precio</th>
					</tr>
				</thead>
				<tbody>
					{items?.map((item) => (
						<tr
							className="border-b border-slate-300 last:border-0 font-medium text-sm"
							key={item.id}
						>
							<td className="p-3 text-start">{item.name}</td>
							<td className="p-3 text-end">{item.sku}</td>
							<td className="p-3 text-end">{item.quantity}</td>
							<td className="p-3 text-end">{formatCurrency(item.price)}</td>
						</tr>
					))}
				</tbody>
			</table>
		</div>
	);
};

export default ProductsTable;
