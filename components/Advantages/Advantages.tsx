import { AdvantageBlock } from '../AdvantageBlock/AdvantageBlock';
import { Htag } from '../Htag/Htag';
import styles from './Advantages.module.css';
import { AdvantagesProps } from './Advantages.props';

export const Advantages = ({advantages}: AdvantagesProps) => {
	return <div className={styles.advantages}>
		<Htag tag='h2'>Преимущества</Htag>
		<div className={styles.wrapper}>
			{advantages && advantages.map(a => (
			<div key={a?._id} className={styles.advantage} >
				<AdvantageBlock title={a.title} description={a.description}/>
			</div>
			))}
		</div>
		
	</div>;
};