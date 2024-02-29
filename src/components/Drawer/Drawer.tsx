import React, { ReactNode } from 'react';

type Props = {
	open: boolean;
	children: ReactNode;
	close: () => void;
};

const Drawer = (props: Props) => {
	const { open, children, close } = props;
	const backdropStyle = open ? 'block' : 'hidden';

	return (
		<>
			{/* Backdrop */}
			<div
				className={`fixed inset-0 bg-gray-900 bg-opacity-50 transition-opacity ${backdropStyle}`}
				onClick={close}
			></div>

			{/* Drawer */}
			<div
				className={`fixed inset-y-0 right-0 w-1/2 bg-white shadow z-50 ${
					open ? 'translate-x-0' : 'translate-x-full'
				} transition-transform ease-in-out duration-300`}
			>
				<div className="flex justify-end p-4">
					<button
						onClick={close}
						className="text-gray-600 hover:text-gray-800 focus:outline-none"
					>
						<svg
							className="h-6 w-6"
							fill="none"
							viewBox="0 0 24 24"
							stroke="currentColor"
						>
							<path
								strokeLinecap="round"
								strokeLinejoin="round"
								strokeWidth="2"
								d="M6 18L18 6M6 6l12 12"
							/>
						</svg>
					</button>
				</div>
				<div className="py-2 px-4">{children}</div>
			</div>
		</>
	);
};

export default Drawer;
