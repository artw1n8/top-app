import { Button } from '../Button/Button';
import { Input } from '../Input/Input';
import { Rating } from '../Rating/Rating';
import { Textarea } from '../Textarea/Textarea';
import styles from './ReviewForm.module.css';
import CloseIcon from './close.svg';
import { ReviewFormProps } from './ReviewForm.props';
import cn from 'classnames';

export const ReviewForm = ({productId,className, ...props} : ReviewFormProps) => {
	
	return <>
		<div className={cn(styles.reviewForm, className)} {...props}>
			<Input className={styles.input} placeholder="Имя" />
			<Input className={styles.title} placeholder="Заголовок отзыва" />
			<div className={styles.rating}>
				<span>Оценка:</span>
				<Rating rating={0} isEditable />
			</div>
			<Textarea  placeholder="Текст отзыва" className={styles.description}/>
			<div className={styles.submit}>
				<Button apperance="primary">Отправить</Button>
				<span className={styles.info}>*Перед публикацией отзыв пройдет предварительную модерацию и проверку</span>
			</div>
		</div>
		<div className={styles.success}>
			<div className={styles.successTitle}>Ваш отзыв отправлен!</div>
			<div>Спасибо, ваш отзыв будет виден после проверки</div>
			<CloseIcon className={styles.close}/>
		</div>
	</>;
};