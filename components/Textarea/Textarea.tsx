import styles from './Textarea.module.css';
import { TextareaProps } from './Textarea.props';
import cn from 'classnames';

export const Textarea = ({className,ref,error, ...props} : TextareaProps) => {
	return (
		<div className={cn(styles.textareaWrapper, className)}>
			<textarea ref={ref} className={cn(styles.textarea, {
				[styles.error]: error
			})} {...props} />
			{error && <span className={styles.errorMessage}>{error.message}</span>}
		</div>
	);
};