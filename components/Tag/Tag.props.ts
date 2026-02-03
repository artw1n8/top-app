import { ReactNode } from 'react';
import { HTMLAttributes } from 'react';

export interface TagProps extends HTMLAttributes<HTMLDivElement> {
	size?: 'small' | 'medium',
	children: ReactNode,
	color?: 'ghost' | 'red' | 'green' | 'gray' | 'primary',
	href?: string
}