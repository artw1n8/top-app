import styles from './TopPageComponent.module.css';
import { TopPageComponentProps } from './TopPageComponent.props';
import cn from 'classnames';

export const TopPageComponent = ({page, products, firstCategory} : TopPageComponentProps) => {

	return (
		<div className={cn( styles.sidebar)} >
			{products && products.length}
		</div>
	);
};