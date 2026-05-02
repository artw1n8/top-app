import { Htag } from '../Htag/Htag';
import styles from './AdvantageBlock.module.css';
import { AdvantageBlockProps } from './AdvantageBlock.props';
import CheckIcon from './check.svg';

export const AdvantageBlock = ({ title, description}: AdvantageBlockProps) => {
	return <div className={styles.wrapper}>
		<div className={styles.check}><CheckIcon/></div>
		<Htag tag='h3'>{title}</Htag>
		<div className={styles.line}></div>
		<div className={styles.desc}>{description}</div>
	</div>;
};