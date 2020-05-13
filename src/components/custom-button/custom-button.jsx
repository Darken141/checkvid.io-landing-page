import React from 'react';

import './custom-button.styles.scss';

const CustomButton = () => {
	const type = 'submit';
	const text = 'Send';

	return (
		<button className="custom-button" type={type}>
			{text}
		</button>
	);
};

export default CustomButton;
