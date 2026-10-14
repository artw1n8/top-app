import { Button } from '../Button/Button';
import { Input } from '../Input/Input';
import { Rating } from '../Rating/Rating';
import { Textarea } from '../Textarea/Textarea';
import styles from './ReviewForm.module.css';
import CloseIcon from './close.svg';
import { ReviewFormProps } from './ReviewForm.props';
import cn from 'classnames';
import { useForm, Controller } from 'react-hook-form';
import { IReviewForm } from './ReviewForm.interface';

export const ReviewForm = ({productId,className, ...props} : ReviewFormProps) => {
	const {register, control, handleSubmit} = useForm<IReviewForm>();

	const onSubmit = (data: IReviewForm) => {
		console.log(data);
	};

	return <form onSubmit={handleSubmit(onSubmit)}>
		<div className={cn(styles.reviewForm, className)} {...props}>
			<Input {...register('name')} className={styles.input} placeholder="Имя" />
			<Input {...register('title')} className={styles.title} placeholder="Заголовок отзыва" />
			<div className={styles.rating}>
				<span>Оценка:</span>
				<Controller control={control} name='rating' render={
					({field}) => (
						<Rating rating={field.value} isEditable setRating={field.onChange}/>
					)
				}/>
			</div>
			<Textarea {...register('description')} placeholder="Текст отзыва" className={styles.description}/>
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
	</form>;
};