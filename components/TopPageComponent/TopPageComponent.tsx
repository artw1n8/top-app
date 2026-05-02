'use client';
import { Htag } from '../Htag/Htag';
import { HhData } from '../HhData/HhData';
import { Tag } from '../Tag/Tag';
import styles from './TopPageComponent.module.css';
import { TopPageComponentProps } from './TopPageComponent.props';
import cn from 'classnames';
import { TopLevelCategory } from '@/interfaces/page.interface';
import { Advantages } from '../Advantages/Advantages';
import { Sort } from '../Sort/Sort';
import { SortEnum } from '../Sort/Sort.props';
import { useReducer } from 'react';
import { sortReducer } from './sort.reducer';
import { Product } from '../Product/Product';

export const TopPageComponent = ({page, products, firstCategory} : TopPageComponentProps) => {
	const [{products: sortedProducts, sort}, dispathSort] = useReducer(sortReducer, {products, sort: SortEnum.Rating});

	const setSort = (sort: SortEnum) => {
		dispathSort({type: sort});
	};

	return (
		<div className={styles.wrapper}>
			<div className={cn( styles.title)} >
				<Htag tag='h1'>{page.title}</Htag>
				{products && <Tag color='gray' size='medium'>{products.length}</Tag>}
				<Sort sort={sort} setSort={setSort}/>
			</div>
			<div>
				{sortedProducts && sortedProducts.map(p => (<Product key={p._id} product={p}/>))}
			</div>
			<div className={cn( styles.hhTitle)} >
				<Htag tag='h2'>Вакансии - {page.category}</Htag>
				<Tag color='red' size='medium'>hh.ru</Tag>
			</div>
			{firstCategory == TopLevelCategory.Courses && page.hh && <HhData {...page.hh}/>}
			{page.advantages && <Advantages advantages={page.advantages}/>}
			{page.seoText && <div className={styles.seo} dangerouslySetInnerHTML={{__html: page.seoText}}></div>}
			<Htag tag='h2'>Получаемые навыки</Htag>
			{page.tags.map(t => <Tag key={t} color='primary'>{t}</Tag>)}
		</div>
		
	);
};