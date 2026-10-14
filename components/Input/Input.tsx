import styles from './Input.module.css';
import { InputProps } from './Input.props';
import cn from 'classnames';

export const Input = ({className, ref, ...props} : InputProps) => {
	return (
		<input ref={ref} className={cn(styles.input, className)} {...props} />
	);
};