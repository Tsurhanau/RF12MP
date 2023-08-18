import './SearchBar.scss';
import { BUTTON_TEXT } from 'src/shared/constants/button';
import { Button } from '../Button/Button';
import Input from '../Input/Input';
import { SearchBarProps } from 'src/shared/models/searchBar';
import { useState } from 'react';

export function SearchBar({ onSubmitSearch }: SearchBarProps): JSX.Element {
	const [inputValue, setInputValue] = useState<string>('');

	function changeInput(value: string) {
		setInputValue(value);
	}

	function search() {
		onSubmitSearch(inputValue);
	}

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
}
