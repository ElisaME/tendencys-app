import React from 'react';

type Props = {
	isOpen: boolean;
	onClose: () => void;
	children: React.ReactNode;
};

const Modal = (props: Props) => {
	const { isOpen, onClose, children } = props;
	const backdropStyle = isOpen ? 'block' : 'hidden';

	const modalStyle = isOpen
		? 'transform opacity-100 translate-y-0'
		: 'transform opacity-0 -translate-y-full';
	return (
		<div
			className={`fixed inset-0 bg-gray-900 bg-opacity-50 transition-opacity ${backdropStyle}`}
		>
			<div
				className={`${modalStyle} absolute inset-0 flex items-center justify-center z-50`}
			>
				<div className="bg-white p-6 rounded-lg shadow-lg w-80">
					<div className="flex justify-end">
						<button
							onClick={onClose}
							className="text-gray-500 hover:text-gray-700"
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
					<div className="mt-4">{children}</div>
				</div>
			</div>
		</div>
	);
};

export default Modal;
