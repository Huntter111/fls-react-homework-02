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
	const [chips, setChips] = useState('')
	const [answer, setAnswer] = useState('')
	useEffect(() => {
		setAnswer(
			`Ваше замовлення Пиво: ${beer ? beer : 'Не вибрали'}. Чипси: ${
				chips ? chips : 'Не вибрали'
			}`,
		)
	}, [beer, chips])

	function handleSelected(e, set) {
		const selectedOption = e.target.options[e.target.selectedIndex]
		set(selectedOption.text)
	}
	return (
		<div className="economy-category min-h-[350px] ">
			<div className="flex justify-center gap-32 p-4 mb-16">
				<div>
					<select
						name="beer"
						value={beer}
						className="text-white"
						onChange={(e) => handleSelected(e, setBeer)}
					>
						<option
							value=""
							disabled
							hidden
						>
							Виберіть пиво
						</option>
						{beersData.map((beer) => (
							<option
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
						onChange={(e) => handleSelected(e, setChips)}
					>
						<option
							value=""
							disabled
							hidden
						>
							Виберіть чипси
						</option>
						{chipsData.map((chip) => (
							<option
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
				<div>{answer}</div>
			</div>
		</div>
	)
}

export default EconomyCategory
