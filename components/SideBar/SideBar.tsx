import Menu from '../Menu/Menu';
import styles from './SideBar.module.css';
import { SideBarProps } from './SideBar.props';
import Logo from '../../public/logo.svg';
import cn from 'classnames';

export const SideBar = ({className,...props} : SideBarProps) => {

	return (
		<div className={cn(className, styles.sidebar)} {...props} >
			<Logo className={styles.logo}/>
			<div>Поиск</div>
			<Menu/>
		</div>
	);
};