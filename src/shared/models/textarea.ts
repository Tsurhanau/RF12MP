import { CSSProperties } from 'react';

export interface TextareaProps {
	label?: string;
	value?: string;
	error?: string;
	onTextareaChange: (value: string) => void;
	placeholder?: string;
}

export interface CustomTextareaProps extends TextareaProps {
	style?: CSSProperties;
}
