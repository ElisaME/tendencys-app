import React, { useState } from 'react';
import { Item, Order } from '../../interfaces/orders.interfaces';
import formatCurrency from '../../utils/FormatCurrency';
import Drawer from '../Drawer/Drawer';
import OrderDetail from '../OrderDetail/OrderDetail';
import Modal from '../Modal/Modal';
import SuccesfulPayment from '../SucessfulPayment/SuccesfulPayment';

type TableProps = {
	orders: Order[];
};

const OrdersList: React.FC<TableProps> = (props: TableProps) => {
	const { orders } = props;
	const [openDrawer, setOpenDrawer] = useState<boolean>(false);
	const onClose = () => setOpenDrawer(false);
	const [orderSelected, setOrderSelected] = useState<Order>();
	const [openModal, setOpenModal] = useState(false);
	const showModal = () => {
		onClose();
		setOpenModal(true);
	};

	const selectOrder = (order: Order) => {
		setOrderSelected(order);
		setOpenDrawer(true);
	};

	return (
		<div className=" bg-slate-100 rounded-lg py-3 px-6 h-[85vh] overflow-y-auto">
			<table className="w-full my-0 align-middle text-dark border-neutral-200 ">
				<thead className="align-button">
					<tr className="font-semibold text-[0.9rem] text-gray-600 uppercase">
						<th className="pb-3 text-start">Número de orden</th>
						<th className="pb-3 text-end">Total</th>
					</tr>
				</thead>
				<tbody>
					{orders?.map((order) => (
						<tr
							className="border-b border-slate-300 last:border-0 font-medium text-sm"
							key={order.id}
						>
							<td className="p-3 text-start">#{order.number}</td>
							<td className="p-3 text-end">
								{formatCurrency(order.totals.total)}
							</td>
							<td
								className="p-3 text-end cursor-pointer"
								onClick={() => selectOrder(order)}
							>
								Ver detalle &gt;
							</td>
						</tr>
					))}
				</tbody>
			</table>
			<Drawer
				open={openDrawer}
				children={
					orderSelected && (
						<OrderDetail order={orderSelected} onPay={showModal} />
					)
				}
				close={onClose}
			/>
			<Modal
				isOpen={openModal}
				onClose={() => setOpenModal(false)}
				children={<SuccesfulPayment />}
			/>
		</div>
	);
};

export default OrdersList;
