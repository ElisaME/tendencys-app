import React, { useEffect, useState } from 'react';
import { Item, Order } from '../../interfaces/orders.interfaces';
import ProductsTable from '../products-table/ProductsTable';
import NewProductForm from '../NewProductForm/NewProductForm';

type Props = {
	order: Order;
	onPay: () => void;
};

const OrderDetail: React.FC<Props> = (props: Props) => {
	const { order, onPay } = props;
	const [orderData, setOrderData] = useState<Order>();

	const addProduct = (product: Item) => {
		setOrderData((prevState) => {
			if (prevState) {
				return {
					...prevState,
					items: [...prevState.items, product],
				};
			}
		});
	};

	useEffect(() => {
		setOrderData(order);
	}, [order]);

	return (
		<div>
			<div className="flex justify-between items-center">
				<h2 className="font-bold">Orden #{order.number}</h2>
				<button
					className="bg-teal-500 bg-opacity-65 rounded-full mt-2 w-32 p-1 text-black font-medium"
					onClick={onPay}
				>
					Pagar
				</button>
			</div>
			<NewProductForm addNewProduct={addProduct} />
			{orderData?.items && <ProductsTable items={orderData.items} />}
		</div>
	);
};

export default OrderDetail;
