import styles from './SideBar.module.css';
import { SideBarProps } from './SideBar.props';

export const SideBar = ({...props} : SideBarProps) => {

	return (
		<div {...props}>
			SideBar
		</div>
	);
};