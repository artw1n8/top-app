import { ReactNode } from 'react';
import { HTMLAttributes } from 'react';

export interface CardProps extends HTMLAttributes<HTMLDivElement> {
	color?: 'white' | 'blue',
	children: ReactNode
}