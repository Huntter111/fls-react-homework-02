import { useEffect, useState } from 'react'
import styles from './EconomyCategory.module.scss'
const EconomyCategory = () => {
	const beersData = [
		{ value: 'heineken', name: 'Heineken' },
		{ value: 'budweiser', name: 'Budweiser' },
		{ value: 'corona', name: 'Corona Extra' },
		{ value: 'stella_artois', name: 'Stella Artois' },
		{ value: 'guinness', name: 'Guinness' },
	]
	const chipsData = [
		{ value: 'lays_classic', name: 'Lays Classic' },
		{ value: 'pringles_original', name: 'Pringles Original' },
		{ value: 'doritos_nacho', name: 'Doritos Nacho Cheese' },
		{ value: 'cheetos', name: 'Cheetos' },
		{ value: 'ritz_bits', name: 'Ritz Bits' },
	]
	const [beer, setBeer] = useState('')
	console.log(' EconomyCategory ~ beer:', beer)
	const [chips, setChips] = useState('')
	const [answer, setAnswer] = useState({
		beer: 'Не вибрали',
		chips: 'Не вибрали',
	})
	const [message, setMessage] = useState('')
	useEffect(() => {
		setMessage(`Ваше замовлення Пиво: ${answer.beer}. Чипси: ${answer.chips}`)
	}, [answer])

	function handleSelected(e, set, value) {
		const selectedOption = e.target.options[e.target.selectedIndex]
		set(e.target.value)
		if (value === 'beer') {
			setAnswer((prevAnswer) => ({ ...prevAnswer, beer: selectedOption.text }))
		} else if (value === 'chips') {
			setAnswer((prevAnswer) => ({ ...prevAnswer, chips: selectedOption.text }))
		}
	}
	return (
		<div className="economy-category min-h-[350px] ">
			<div className="flex justify-center gap-32 p-4 mb-16">
				<div>
					<select
						name="beer"
						value={beer}
						className="text-white"
						onChange={(e) => handleSelected(e, setBeer, 'beer')}
					>
						<option
							value=""
							disabled
							hidden
						>
							Виберіть пиво
						</option>
						{beersData.map((beer, index) => (
							<option
								key={index}
								value={beer.value}
								className={styles.option}
							>
								{beer.name}
							</option>
						))}
					</select>
				</div>
				<div>
					<select
						name="chips"
						value={chips}
						className={'text-white'}
						onChange={(e) => handleSelected(e, setChips, 'chips')}
					>
						<option
							value=""
							disabled
							hidden
						>
							Виберіть чипси
						</option>
						{chipsData.map((chip, index) => (
							<option
								key={index}
								value={chip.value}
								className={styles.option}
							>
								{chip.name}
							</option>
						))}
					</select>
				</div>
			</div>
			<div className="text-white text-xl  flex justify-center p-4  ">
				<div>{message}</div>
			</div>
		</div>
	)
}

export default EconomyCategory
