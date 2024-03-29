import React from 'react';

const SuccesfulPayment = () => {
	return (
		<div className="flex justify-center items-center flex-col relative">
			{/* <img src="./../../public/images/tick_circle.png" className="w-16" /> */}
			<svg
				xmlns="http://www.w3.org/2000/svg"
				fill="none"
				viewBox="0 0 24 24"
				strokeWidth="1.5"
				stroke="rgb(20 184 166)"
				className="w-24 h-24"
			>
				<path
					strokeLinecap="round"
					strokeLinejoin="round"
					d="M9 12.75 11.25 15 15 9.75M21 12c0 1.268-.63 2.39-1.593 3.068a3.745 3.745 0 0 1-1.043 3.296 3.745 3.745 0 0 1-3.296 1.043A3.745 3.745 0 0 1 12 21c-1.268 0-2.39-.63-3.068-1.593a3.746 3.746 0 0 1-3.296-1.043 3.745 3.745 0 0 1-1.043-3.296A3.745 3.745 0 0 1 3 12c0-1.268.63-2.39 1.593-3.068a3.745 3.745 0 0 1 1.043-3.296 3.746 3.746 0 0 1 3.296-1.043A3.746 3.746 0 0 1 12 3c1.268 0 2.39.63 3.068 1.593a3.746 3.746 0 0 1 3.296 1.043 3.746 3.746 0 0 1 1.043 3.296A3.745 3.745 0 0 1 21 12Z"
				/>
			</svg>

			<p className=" mt-3 font-semibold text-teal-500 text-lg">
				¡Pago Exitoso!
			</p>
			<p className="text-center font-medium w-3/4">
				La orden será procesada en breve
			</p>
		</div>
	);
};

export default SuccesfulPayment;
