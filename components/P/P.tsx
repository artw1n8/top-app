import styles from './P.module.css';
import { P_Props } from './P.props';
import cn from 'classnames';

export const P = ({size = 'medium',className, children, ...props} : P_Props) => {
	return <p className={cn(styles.p, className, {
		[styles.small]: size === 'small',
		[styles.medium]: size === 'medium',
		[styles.big]: size === 'big',
	})} {...props}>
		{children}
	</p>;
};