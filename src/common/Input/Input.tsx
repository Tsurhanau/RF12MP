import './Input.scss';
import { ChangeEvent, FC } from 'react';
import { CustomInputProps } from 'src/shared/models/input';

export const Input: FC<CustomInputProps> = ({
	label,
	onInputChange,
	error,
	style,
	...rest
}) => {
	const handleChange = (event: ChangeEvent<HTMLInputElement>) => {
		const value = event.target.value;
		onInputChange(value);
	};

	return (
		<div className={`${error ? 'input_error' : 'input'}`}>
			{label && <label className='input__label'>{label}</label>}
			<input
				className={`${error ? 'input__field_error' : 'input__field'}`}
				onChange={handleChange}
				style={style}
				{...rest}
			/>
			{error && <div className='input__message_error'>{error}</div>}
		</div>
	);
};
