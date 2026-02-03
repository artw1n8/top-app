import styles from './Tag.module.css';
import { TagProps } from './Tag.props';
import cn from 'classnames';

export const Tag = ({size = 'medium',className, children, color = 'ghost',href, ...props} : TagProps) => {
	return <div className={cn(styles.tag, className, {
		[styles.small]: size === 'small',
		[styles.medium]: size === 'medium',
		[styles.ghost]: color === 'ghost',
		[styles.red]: color === 'red',
		[styles.green]: color === 'green',
		[styles.gray]: color === 'gray',
		[styles.primary]: color === 'primary',

	})} {...props}> 
	{href ? <a href={href}>{children}</a> : children}
	</div>;
};