import { ReactNode } from 'react';
import { HTMLAttributes } from 'react';

export interface P_Props extends HTMLAttributes<HTMLParagraphElement> {
	size?: 'small' | 'medium' | 'big',
	children: ReactNode
}