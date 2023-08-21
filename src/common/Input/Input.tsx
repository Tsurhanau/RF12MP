import './Input.scss';
import { ChangeEvent, FC } from 'react';
import { InputProps } from 'src/shared/models/input';

export const Input: FC<InputProps> = ({ label, onInputChange, ...rest }) => {
	const handleChange = (event: ChangeEvent<HTMLInputElement>) => {
		const value = event.target.value;
		onInputChange(value);
	};

	return (
		<div className='input'>
			{label && <label className='input__label'>{label}</label>}
			<input className='input__field' onChange={handleChange} {...rest} />
		</div>
	);
};
