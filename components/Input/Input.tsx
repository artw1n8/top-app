import styles from './Input.module.css';
import { InputProps } from './Input.props';
import cn from 'classnames';

export const Input = ({className,error, ref, ...props} : InputProps) => {
	return (
		<div className={cn(styles.inputWrapper, className)}>
			<input ref={ref} className={cn(styles.input,  {
				[styles.error]: error
			})} {...props} />
			{error && <span className={styles.errorMessage}>{error.message}</span> }
		</div>
	);
};