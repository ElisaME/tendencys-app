import { useEffect, useState } from 'react';
import './App.css';
import getOrder from './services/orders';
import { Order } from './interfaces/orders.interfaces';
import OrdersList from './components/OrdersList/OrdersList';

function App() {
	const [orders, setOrders] = useState<Order[]>([]);
	const [error, setError] = useState<string>();

	useEffect(() => {
		async function fetchData() {
			try {
				const orderData = await getOrder();
				setOrders(orderData);
			} catch (error: any) {
				setError(error.message);
			}
		}
		fetchData();
	}, []);

	return (
		<>
			<section className="App-content">
				{orders && (
					<div>
						<h2 className="my-2 font-bold text-xl">Órdenes de compra</h2>
						<OrdersList orders={orders} />
					</div>
				)}
				{error && <p className="font-medium my-1">{error}</p>}
			</section>
		</>
	);
}

export default App;
