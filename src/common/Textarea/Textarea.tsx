import './Textarea.scss';
import { ChangeEvent } from 'react';
import { CustomTextareaProps } from 'src/shared/models/textarea';

export const Textarea: React.FC<CustomTextareaProps> = ({
	label,
	onTextareaChange,
	placeholder,
	style,
	error,
	...rest
}) => {
	const handleChange = (event: ChangeEvent<HTMLTextAreaElement>) => {
		const value = event.target.value;
		onTextareaChange(value);
	};

	return (
		<div className={`${error ? 'textarea_error' : 'textarea'}`}>
			{label && <label className='textarea__label'>{label}</label>}
			<textarea
				className={`${error ? 'textarea__field_error' : 'textarea__field'}`}
				onChange={handleChange}
				placeholder={placeholder}
				style={style}
				{...rest}
			/>
			{error && <div className='textarea__message_error'>{error}</div>}
		</div>
	);
};
