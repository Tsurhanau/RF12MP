import { InputHTMLAttributes } from 'react';

export interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
	label?: string;
	onInputChange: (value: string) => void;
}
