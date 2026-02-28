import styles from './Footer.module.css';
import { FooterProps } from './Footer.props';

export const Footer = ({...props} : FooterProps) => {

	return (
		<div {...props}>
			<div className={styles['footer_wrapper']} >
				<div className={styles['copyright']}>OwlTop © 2020 - {new Date().getFullYear()} Все права защищены</div>
				<div className={styles['footer-links']}>
					<a href="#">Пользовательское соглашение</a>
					<a href="#">Политика конфиденциальности</a>
				</div>
			</div>
		</div>
		
	);
};