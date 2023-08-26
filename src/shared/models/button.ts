import { ButtonHTMLAttributes, CSSProperties } from 'react';

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
	text: string;
}

export interface CustomButtonProps extends ButtonProps {
	style?: CSSProperties;
}
