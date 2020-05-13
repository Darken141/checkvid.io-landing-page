import React from 'react';

import './custom-textarea.styles.scss';

const CustomTextarea = ({ name, label, rows, placeholder, value, handleChange, isRequired }) => {
	return (
		<div className="custom-textarea">
			<label className="custom-textarea__label" htmlFor={name}>
				{label}
			</label>
			<textarea
				className="custom-textarea__textarea"
				name={name}
				id={name}
				rows={rows}
				placeholder={placeholder}
				value={value}
				onChange={handleChange}
				required={isRequired}
			/>
		</div>
	);
};

export default CustomTextarea;
