import './CreateCourse.scss';
import nextId from 'react-id-generator';
import { CSSProperties, FC, FormEvent, ReactElement, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Button } from 'src/common/Button/Button';
import { Input } from 'src/common/Input/Input';
import { Textarea } from 'src/common/Textarea/Textarea';
import {
	INITIAL_DURATION,
	getCourseDuration,
} from 'src/helpers/getCourseDuration';
import { BUTTON_TEXT } from 'src/shared/constants/button';
import { CREATE_COURSE_FORM } from 'src/shared/constants/create-course';
import { noneCRR } from 'src/shared/constants/http';
import { CustomResponseStatus } from 'src/shared/enums/http';
import { RoutePath } from 'src/shared/enums/router';
import { Author } from 'src/shared/models/author';
import { CustomResponseResult } from 'src/shared/models/http';
import { AuthorItem } from './components/AuthorItem/AuthorItem';
import { hasMinLength } from 'src/helpers/hasMinLength';
import { Course } from 'src/shared/models/course';
import { getCurrentDate } from 'src/helpers/getCurrentDate';
import { mockedAuthorsList, mockedCoursesList } from 'src/assets/mocks/courses';

export const CreateCourse: FC = (): ReactElement => {
	const navigate = useNavigate();

	const [durationValue, setDurationValue] = useState(
		getCourseDuration(INITIAL_DURATION)
	);

	const [title, setTitle] = useState('');
	const [description, setDescription] = useState('');
	const [duration, setDuration] = useState('');
	const [authorName, setAuthorName] = useState('');

	const [titleError, setTitleError] = useState('');
	const [descriptionError, setDescriptionError] = useState('');
	const [durationError, setDurationError] = useState('');
	const [authorNameError, setAuthorNameError] = useState('');

	const [authors, setAuthors] = useState<Author[]>([]);
	const [courseAuthors, setCourseAuthors] = useState<Author[]>([]);

	const [requestResult, setRequestResult] =
		useState<CustomResponseResult>(noneCRR);

	const changeTitle = (value: string) => {
		setTitle(value);
		setTitleError('');
		setRequestResult(noneCRR);
	};

	const changeDescription = (value: string) => {
		setDescription(value);
		setDescriptionError('');
		setRequestResult(noneCRR);
	};

	const changeDuration = (value: string) => {
		setDuration(value);
		setDurationError('');
		setRequestResult(noneCRR);

		changeDurationValue(value);
	};

	const changeDurationValue = (value: string) => {
		if (+value === INITIAL_DURATION && value !== '') {
			setDurationError('Duration should be more than 0 minutes');
		} else {
			const durationValue = getCourseDuration(+value);
			setDurationValue(durationValue);
		}
	};

	const changeAuthorName = (value: string) => {
		setAuthorName(value);
		setAuthorNameError('');
		setRequestResult(noneCRR);
	};

	const createAuthor = (event: FormEvent<HTMLButtonElement>) => {
		event.preventDefault();

		if (isAuthorNameValid()) {
			const newAuthor: Author = {
				id: nextId(),
				name: authorName,
			};
			setAuthors([...authors, newAuthor]);
			setAuthorName('');
		}
	};

	const isAuthorNameValid = (): boolean => {
		const isAuthorNameValidLength = hasMinLength(authorName, 2);

		if (!authorName || !isAuthorNameValidLength) {
			!authorName
				? setAuthorNameError('Author name is required')
				: setAuthorNameError(
						'Author name length should be at least 2 characters'
				  );

			return false;
		}

		return true;
	};

	const submitForm = async (event: FormEvent<HTMLFormElement>) => {
		event.preventDefault();

		if (isFormValid()) {
			const course: Course = {
				id: nextId(),
				title: title,
				description: description,
				creationDate: getCurrentDate(),
				duration: +duration,
				authors: courseAuthors.map((courseAuthor) => courseAuthor.id),
			};

			courseAuthors.forEach((author) => mockedAuthorsList.push(author));

			mockedCoursesList.push(course);

			navigate(RoutePath.Courses, { replace: true });
		}
	};

	const isTitleValid = (): boolean => {
		const isTitleValidLength = hasMinLength(title, 2);

		if (!title || !isTitleValidLength) {
			!title
				? setTitleError('Title is required')
				: setTitleError('Title length should be at least 2 characters');

			return false;
		}

		return true;
	};

	const isDescriptionValid = (): boolean => {
		const isDescriptionValidLength = hasMinLength(description, 2);

		if (!description || !isDescriptionValidLength) {
			!description
				? setDescriptionError('Description is required')
				: setDescriptionError(
						'Description length should be at least 2 characters'
				  );

			return false;
		}

		return true;
	};

	const isDurationValid = (): boolean => {
		const isDurationValidLength = hasMinLength(duration, 2);

		if (!duration || !isDurationValidLength) {
			!duration
				? setDurationError('Duration is required')
				: setDurationError('Duration length should be at least 2 characters');

			return false;
		}

		return true;
	};

	const isFormValid = (): boolean => {
		const isDurationFieldValid = isDurationValid();
		const isDescriptionFieldValid = isDescriptionValid();
		const isTitleFieldValid = isTitleValid();

		return isDurationFieldValid && isDescriptionFieldValid && isTitleFieldValid;
	};

	const addAuthorToCourse = (
		author: Author,
		event?: FormEvent<HTMLButtonElement>
	) => {
		if (event) {
			event.preventDefault();
		}

		if (
			!courseAuthors.some((existingAuthor) => existingAuthor.id === author.id)
		) {
			setCourseAuthors((prevAuthors) => [...prevAuthors, author]);
			setAuthors((prevAuthors) =>
				prevAuthors.filter((searchAuthor) => searchAuthor.id !== author.id)
			);
		} else {
			console.log('Author already exists in courseAuthors');
		}
	};

	const removeAuthorFromCourse = (
		author: Author,
		event?: FormEvent<HTMLButtonElement>
	) => {
		if (event) {
			event.preventDefault();
		}

		setCourseAuthors((prevAuthors) =>
			prevAuthors.filter((searchAuthor) => searchAuthor.id !== author.id)
		);

		if (!authors.some((existingAuthor) => existingAuthor.id === author.id)) {
			setAuthors((prevAuthors) => [...prevAuthors, author]);
		}
	};

	const renderMainSection = (): ReactElement => {
		return (
			<div className='main'>
				<div className='form__sub-title'>Main Info</div>
				<Input
					label='Title'
					type='text'
					error={titleError}
					placeholder={CREATE_COURSE_FORM.PLACEHOLDER}
					onInputChange={changeTitle}
				/>
				<Textarea
					label='Description:'
					error={descriptionError}
					placeholder={CREATE_COURSE_FORM.PLACEHOLDER}
					style={customDescriptionStyle}
					onTextareaChange={changeDescription}
				/>
			</div>
		);
	};

	const renderDurationSection = (): ReactElement => {
		return (
			<div className='duration'>
				<div className='form__sub-title'>Duration</div>
				<div className='duration__container'>
					<Input
						label='Duration'
						type='number'
						min='1'
						step='1'
						error={durationError}
						placeholder={CREATE_COURSE_FORM.PLACEHOLDER}
						onInputChange={changeDuration}
					/>
					<span className='duration__time'>{durationValue}</span>
				</div>
			</div>
		);
	};

	const renderAuthorsSection = (): ReactElement => {
		return (
			<div className='authors'>
				<div className='authors__block-1'>
					<div className='form__sub-title'>Authors</div>
					<div className='authors__form'>
						<Input
							label='Author Name'
							type='text'
							value={authorName}
							error={authorNameError}
							placeholder={CREATE_COURSE_FORM.PLACEHOLDER}
							onInputChange={changeAuthorName}
						/>
						<Button
							text={BUTTON_TEXT.CREATE_AUTHOR}
							onClick={createAuthor}
							type='submit'
							style={customButtonStyle}
						/>
					</div>
					<div className='authors__list'>
						<div className='form__sub-title'>Authors List</div>
						{renderAuthorList(authors)}
					</div>
				</div>
				<div className='authors__block-2'>
					<div className='authors__courses'>
						<div className='form__sub-title'>Course Authors</div>
						{renderAuthorList(courseAuthors)}
					</div>
				</div>
			</div>
		);
	};

	const renderAuthorList = (authorsList: Author[]): ReactElement => {
		return (
			<>
				{authorsList.length === 0 ? (
					<p>Authors list is empty</p>
				) : (
					authorsList.map((author) => (
						<AuthorItem
							key={author.id}
							author={author}
							add={addAuthorToCourse}
							remove={removeAuthorFromCourse}
						/>
					))
				)}
			</>
		);
	};

	const cancel = () => {
		navigate(RoutePath.Courses);
	};

	const customDescriptionStyle: CSSProperties = {
		width: '100%',
		height: '15rem',
	};

	const customButtonStyle: CSSProperties = {
		height: '5rem',
	};

	return (
		<div className='create-course'>
			<div className='create-course__title'>
				<h2>{CREATE_COURSE_FORM.TITLE}</h2>
			</div>
			<form className='form' id='create-course-form' onSubmit={submitForm}>
				{renderMainSection()}.{renderDurationSection()}.{renderAuthorsSection()}
				{requestResult.status !== CustomResponseStatus.None && (
					<p
						className={
							requestResult.status === CustomResponseStatus.Success
								? 'form__request-result_success'
								: 'form__request-result_fail'
						}
					>
						{requestResult.value}
					</p>
				)}
			</form>
			<div className='create-course__buttons'>
				<Button
					text={BUTTON_TEXT.CANCEL}
					style={customButtonStyle}
					onClick={cancel}
				/>
				<Button
					form='create-course-form'
					type='submit'
					text={BUTTON_TEXT.CREATE_COURSE}
					style={customButtonStyle}
				/>
			</div>
		</div>
	);
};
