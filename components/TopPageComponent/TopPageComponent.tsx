import { Card } from '../Card/Card';
import { Htag } from '../Htag/Htag';
import { HhData } from '../HhData/HhData';
import { Tag } from '../Tag/Tag';
import styles from './TopPageComponent.module.css';
import { TopPageComponentProps } from './TopPageComponent.props';
import cn from 'classnames';
import { TopLevelCategory } from '@/interfaces/page.interface';
import { Advantages } from '../Advantages/Advantages';
import { P } from '../P/P';

export const TopPageComponent = ({page, products, firstCategory} : TopPageComponentProps) => {

	return (
		<div className={styles.wrapper}>
			<div className={cn( styles.title)} >
				<Htag tag='h1'>{page.title}</Htag>
				{products && <Tag color='gray' size='medium'>{products.length}</Tag>}
				<span>Сортировка</span>
			</div>
			<div>
				{products && products.map(p => (<div key={p._id}>{p.title}</div>))}
			</div>
			<div className={cn( styles.hhTitle)} >
				<Htag tag='h2'>Вакансии - {page.category}</Htag>
				<Tag color='red' size='medium'>hh.ru</Tag>
			</div>
			{firstCategory == TopLevelCategory.Courses	&& <HhData {...page.hh}/>}
			{page.advantages && <Advantages advantages={page.advantages}/>}
			{page.seoText && <P>{page.seoText}</P>}
			<Htag tag='h2'>Получаемые навыки</Htag>
			{page.tags.map(t => <Tag key={t} color='primary'>{t}</Tag>)}
		</div>
		
	);
};