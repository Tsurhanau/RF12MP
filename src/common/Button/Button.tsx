import { FC } from 'react';
import './Button.scss';
import { CustomButtonProps } from 'src/shared/models/button';

export const Button: FC<CustomButtonProps> = ({
	text,
	onClick,
	style,
	type,
	...rest
}) => (
	<button
		className='button'
		style={style}
		onClick={onClick}
		type={type}
		{...rest}
	>
		<span>{text}</span>
	</button>
);
