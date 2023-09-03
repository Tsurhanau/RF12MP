import './SearchBar.scss';
import { BUTTON_TEXT } from 'src/shared/constants/button';
import { Button } from '../Button/Button';
import { Input } from '../Input/Input';
import { SearchBarProps } from 'src/shared/models/searchBar';
import { FC, useState } from 'react';

export const SearchBar: FC<SearchBarProps> = ({
	onSubmitSearch,
}: SearchBarProps) => {
	const [inputValue, setInputValue] = useState<string>('');

	const changeInput = (value: string): void => {
		setInputValue(value);
	};

	const search = (): void => {
		onSubmitSearch(inputValue);
	};

	return (
		<div className='search-bar'>
			<div className='search-bar__input'>
				<Input placeholder='Input text' onInputChange={changeInput} />
			</div>
			<div className='search-bar__button'>
				<Button text={BUTTON_TEXT.SEARCH} onClick={search} />
			</div>
		</div>
	);
};
