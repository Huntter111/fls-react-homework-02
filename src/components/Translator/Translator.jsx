import { useEffect, useState } from 'react'
import { cn } from '../../utils/utils'

const englishWords = [
	{
		word: 'apple',
		translation: 'яблуко',
		image:
			'https://cdn.pixabay.com/photo/2014/02/01/17/28/apple-256261_1280.jpg',
	},
	{
		word: 'dog',
		translation: ['пес', 'собака'],
		image: 'https://thumbs.dreamstime.com/b/golden-retriever-dog-21668976.jpg',
	},
	{
		word: 'house',
		translation: ['будинок', 'дім'],
		image:
			'https://media.istockphoto.com/id/1442148484/photo/3d-rendering-of-modern-suburban-house-in-the-garden.jpg?s=612x612&w=0&k=20&c=8Iu_h5cFOEnlPz4_n2nfSUtOyfM_a-hHx9rmlxMF2rI=',
	},
	{
		word: 'car',
		translation: ['автомобіль', 'машина', 'bmw', 'бмв'],
		image: 'https://motorscout.ua/wp-content/uploads/2020/12/main-img.jpg',
	},
	{
		word: 'book',
		translation: 'книга',
		image:
			'https://media.istockphoto.com/id/495477978/photo/open-book.jpg?s=612x612&w=0&k=20&c=vwJ6__M7CVPdjkQFUv9j2pr7QJiQ9bWW_5jXjR9TcjY=',
	},
	{
		word: 'tree',
		translation: 'дерево',
		image:
			'https://treenewal.com/wp-content/uploads/2020/11/environmental_factors_affecting_trees.png',
	},
]

const Translator = () => {
	function getRandomWord() {
		const randomIndex = Math.floor(Math.random() * englishWords.length)
		return englishWords[randomIndex]
	}

	const [word, setWord] = useState(() => getRandomWord())
	const [userWord, setUserWord] = useState('')
	const [message, setMessage] = useState('')
	const [error, setError] = useState('')

	function handleCheckWord() {
		const inputUserWord = userWord.toLocaleLowerCase().trim()

		const translations = Array.isArray(word.translation)
			? word.translation
			: [word.translation]

		if (translations.includes(inputUserWord)) {
			setMessage('Добре. Молодець!')
			setError('valid')
		} else {
			setMessage('Невірно, спробуйте ще раз')
			setError('error')
		}
	}
	useEffect(() => {
		if (error === 'valid') {
			const timer = setTimeout(() => {
				setUserWord('')
				setWord(getRandomWord())
				setMessage('')
				setError('')
			}, 1000)
			return () => {
				clearTimeout(timer)
			}
		}
	}, [error])
	function handleUserWord(e) {
		const val = e.target.value
		if (val === '') {
			setError('')
		}
		setUserWord(val)
	}
	return (
		<div className="borderBoxShadow flex flex-col justify-center items-center max-w-[900px] mx-auto my-5  border rounded-xl border-solid border-[#3b82f6] p-5">
			<div className="flex flex-col gap-4 mb-10">
				<h2 className="text-xl">
					Задача 3. Елемент тренажера англійської. Виводимо зображення елемента
					і слово. Користувач вводить відповідь. Якщо вірно – відтворюємо фразу
					«Добре. Молодець!» (і додаємо зелену рамку до елемента), якщо ні - то
					відтворюємо фразу «Невірно, спробуйте ще раз» (і додаємо червону
					рамку).
				</h2>
			</div>
			<div
				className={cn(
					'flex flex-col items-center border-transparent border-2 border-solid p-4 rounded-[8px]',
					{
						' border-red-500 ': error === 'error',
						' border-green-600': error === 'valid',
					},
				)}
			>
				<div className="flex flex-col items-center gap-2">
					<img
						src={word.image}
						alt={word.image}
						className="rounded-xl w-[300px] h-[220px] object-cover drop-shadow-lg"
					/>
					<span className="text-3xl">{word.word}</span>
				</div>
				<label className="mt-4 flex flex-col items-center">
					Ваш переклад:
					<input
						type="text"
						value={userWord}
						onChange={handleUserWord}
					/>
				</label>
				<button
					onClick={handleCheckWord}
					className="mt-4 w-[100%]"
				>
					Перевірити
				</button>
				<div className="h-[40px] p-4 text-xl">{message}</div>
			</div>
		</div>
	)
}

export default Translator
