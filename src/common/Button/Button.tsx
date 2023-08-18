import React from 'react';
import './Button.scss';
import { ButtonProps } from 'src/shared/models/button';

export const Button: React.FC<ButtonProps> = ({ text, onClick }) => (
	<button className='button' onClick={onClick}>
		<span>{text}</span>
	</button>
);
