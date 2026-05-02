'use client';
import { KeyboardEvent } from 'react';
import { useState } from 'react';
import { Button } from '../Button/Button';
import { Input } from '../Input/Input';
import styles from './Search.module.css';
import { SearchProps } from './Search.props';
import cn from 'classnames';
import GlassIcon from './glass.svg';
import { useRouter } from 'next/navigation';

export const Search = ({className, ...props} : SearchProps) => {
	const [search, setSearch] = useState('');
	const router = useRouter();

	const goToSearch = () => {
		router.push(`/search?q=${search}`);
	};

	const handleKeyDown = (e: KeyboardEvent<HTMLInputElement>) => {
		if(e.key === 'Enter') {
			goToSearch();
		}
	};

	return (
		<div className={cn(className, styles.search)} {...props}>
			<Input 
			className={styles.input}
				placeholder='Поиск...'
				value={search}
				onChange={(e) => setSearch(e.target.value)}
				onKeyDown={handleKeyDown}
			/>
			<Button 
				apperance='primary' 
				className={styles.button} 
				onClick={goToSearch}
			>
				<GlassIcon/>
			</Button>
		</div>
	);
};