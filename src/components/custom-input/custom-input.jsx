import React from 'react';

import './custom-input.styles.scss';

const CustomInput = ({ label, name, type, placeholder, value, handleChange, isRequired }) => {
	return (
		<div className="custom-input">
			<label className="custom-input__label" htmlFor={name}>
				{label}
			</label>
			<input
				className="custom-input__input"
				id={name}
				name={name}
				type={type}
				placeholder={placeholder}
				value={value}
				onChange={handleChange}
				required={isRequired}
			/>
		</div>
	);
};

export default CustomInput;
