import { useEffect, useState } from 'react'
import styles from './BusinessCategory.module.scss'
const BusinessCategory = () => {
	const cognacsData = [
		{
			cognacValue: 'hennessy_vs',
			cognacName: 'Hennessy VS',
		},
		{
			cognacValue: 'remy_martin_vsop',
			cognacName: 'Rémy Martin VSOP',
		},
		{
			cognacValue: 'courvoisier_vs',
			cognacName: 'Courvoisier VS',
		},
		{
			cognacValue: 'martell_cordon_bleu',
			cognacName: 'Martell Cordon Bleu',
		},
		{
			cognacValue: 'kvint_5_star',
			cognacName: 'KVINT 5 Stars',
		},
	]
	const newspapersData = [
		{
			value: 'fakty_ictv',
			name: 'Факти ICTV',
		},
		{
			value: 'segodnya',
			name: 'Сьогодні',
		},
		{
			value: 'gazeta_ua',
			name: 'Gazeta.ua',
		},
		{
			value: 'ukrainska_pravda',
			name: 'Українська правда',
		},
		{
			value: 'visnyk_ua',
			name: 'Вісник+К',
		},
	]
	const [cognac, setCognac] = useState('')
	const [newspaper, setNewspaper] = useState('')
	const [snack, setSnack] = useState('')
	const [isSnackVisible, setIsSnackVisible] = useState(false)
	const [answer, setAnswer] = useState({
		cognac: 'Не вибрано',
		newspaper: 'Не вибрано',
		snack: 'Не вибрано',
	})
	const [message, setMessage] = useState('')
	useEffect(() => {
		setMessage(
			`Ваше замовлення. Коньяк - ${answer.cognac}. Газета - ${answer.newspaper}. Закуска - ${answer.snack}`,
		)
	}, [answer])

	function handleSelectedChange(e, set, value) {
		const selectedOption = e.target.options[e.target.selectedIndex]
		const selectName = e.target.name
		set(e.target.value)
		if (selectName === 'cognac') {
			setIsSnackVisible(true)
		}
		if (value === 'cognac') {
			setAnswer((prev) => ({
				...prev,
				cognac: selectedOption.text,
				snack: 'Не вибрано',
			}))
		} else if (value === 'newspaper') {
			setAnswer((prev) => ({ ...prev, newspaper: selectedOption.text }))
		}
	}

	function handleSnackCheck(snack) {
		if (snack === 'yes') {
			setSnack(true)
			setIsSnackVisible(false)
			setAnswer((prevV) => ({ ...prevV, snack: 'Додаємо' }))
		} else if (snack === 'no') {
			setSnack(false)
			setIsSnackVisible(false)
			setAnswer((prevV) => ({ ...prevV, snack: 'Не вибрано' }))
		}
	}
	return (
		<>
			<div className="business-category min-h-[350px]">
				<h3 className="mb-8 text-white text-xl font-bold text-center">
					Виберіть коньяк та газету
				</h3>
				<div className="flex justify-center items-center gap-16">
					<div>
						<select
							value={cognac}
							onChange={(e) => handleSelectedChange(e, setCognac, 'cognac')}
							className="text-white"
							name="cognac"
						>
							<option
								value=""
								disabled
								hidden
								className="text-black"
							>
								Оберіть коньяк:
							</option>
							{cognacsData.map((cognac, index) => (
								<option
									key={index}
									className={styles.option}
									value={cognac.cognacValue}
								>
									{cognac.cognacName}
								</option>
							))}
						</select>
					</div>
					<div>
						<select
							value={newspaper}
							name="newspaper"
							className="text-white"
							onChange={(e) =>
								handleSelectedChange(e, setNewspaper, 'newspaper')
							}
						>
							<option
								value=""
								disabled
								hidden
								className="text-black"
							>
								Оберіть газету:
							</option>
							{newspapersData.map((newspaper, index) => (
								<option
									key={index}
									className={styles.option}
									value={newspaper.value}
								>
									{newspaper.name}
								</option>
							))}
						</select>
					</div>
				</div>
				<div className="text-white h-[80px] flex justify-center mt-8 relative">
					{isSnackVisible && (
						<div>
							<h3 className="mb-4">Бажаєте закуску?</h3>
							<div className="flex gap-4">
								<button onClick={() => handleSnackCheck('yes')}>Так</button>
								<button onClick={() => handleSnackCheck('no')}>Ні</button>
							</div>
						</div>
					)}
					<div className={styles.answer}>{message}</div>
				</div>
			</div>
		</>
	)
}

export default BusinessCategory
