import './Input.scss';
import React, { ChangeEvent } from 'react';
import { InputProps } from 'src/shared/models/input';

const Input: React.FC<InputProps> = ({ label, onInputChange, ...rest }) => {
	const handleChange = (event: ChangeEvent<HTMLInputElement>) => {
		const value = event.target.value;
		onInputChange(value);
	};

	return (
		<div className='input'>
			<label className='input__label'>{label}</label>
			<input className='input__field' onChange={handleChange} {...rest} />
		</div>
	);
};

export default Input;
