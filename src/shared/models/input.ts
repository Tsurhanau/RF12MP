import { CSSProperties, InputHTMLAttributes } from 'react';

export interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
	label?: string;
	error?: string;
	onInputChange: (value: string) => void;
}

export interface CustomInputProps extends InputProps {
	style?: CSSProperties;
}
