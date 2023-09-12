import './AuthorItem.scss';
import { CSSProperties, FC, ReactElement } from 'react';
import { Button } from 'src/common/Button/Button';
import { AuthorItemProps } from 'src/shared/models/author';

export const AuthorItem: FC<AuthorItemProps> = ({
	author,
	add,
	remove,
}): ReactElement => {
	const customButtonStyle: CSSProperties = {
		padding: '0.5rem',
		fontSize: '1rem',
		background: '#fff',
		color: 'black',
		border: 'none',
	};

	return (
		<span className='author-item'>
			<p className='author-item__name'>{author.name}</p>
			<div className='author-item__buttons'>
				<Button
					text='add'
					style={customButtonStyle}
					onClick={(event) => add(author, event)}
				/>
				<Button
					text='remove'
					style={customButtonStyle}
					onClick={(event) => remove(author, event)}
				/>
			</div>
		</span>
	);
};
