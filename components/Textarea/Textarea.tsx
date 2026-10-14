import styles from './Textarea.module.css';
import { TextareaProps } from './Textarea.props';
import cn from 'classnames';

export const Textarea = ({className,ref, ...props} : TextareaProps) => {
	return (
		<textarea ref={ref} className={cn(styles.textarea, className)} {...props} />
	);
};