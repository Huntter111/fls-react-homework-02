import { useState } from 'react'
import styles from './Kitchen.module.scss'
const Kitchen = () => {
	const [dish, setDish] = useState('')
	const [waitingList, setWaitingList] = useState(() => [
		{ dish: 'Голубці', id: 1 },
		{ dish: 'Грибковий суп', id: 2 },
	])

	const [processingList, setProcessingList] = useState(() => [
		{ dish: 'Блінчики з сиром', id: 3 },
		{ dish: 'Салат "Цезар"', id: 4 },
	])
	const [completedList, setCompletedList] = useState(() => [
		{ dish: 'Борщ', id: 5 },
		{ dish: 'Плов з овочами', id: 6 },
	])
	function handleAddDish() {
		if (!dish.trim()) return
		const newDish = {
			id: new Date().getTime(),
			dish: dish,
		}
		setWaitingList((prevWaitingList) => [...prevWaitingList, newDish])
		setDish('')
	}
	// Для оптимізації можна зробити універсальну функцію для перенесення страв, без дублювання коду
	function handleWaitingDish(id) {
		const itemDish = waitingList.find((item) => item.id === id)
		setWaitingList((prevWaitingList) =>
			[...prevWaitingList].filter((arr) => arr.id !== id),
		)
		setProcessingList((prevProcessingList) => [...prevProcessingList, itemDish])
	}
	function handleCookedDish(id) {
		const itemDish = processingList.find((arr) => arr.id === id)
		setProcessingList((prevProcessingList) =>
			[...prevProcessingList].filter((arr) => arr.id !== id),
		)
		setCompletedList((prevCompletedList) => [...prevCompletedList, itemDish])
	}
	function handleRemoveDish(id) {
		setCompletedList((prevCompleteList) =>
			[...prevCompleteList].filter((arr) => arr.id !== id),
		)
	}
	return (
		<div className="borderBoxShadow flex flex-col justify-center items-center max-w-[900px] mx-auto my-5  border rounded-xl border-solid border-[#3b82f6] p-5">
			<div className="flex flex-col gap-4 mb-10">
				<h2 className="text-xl">
					Задача 6. Задача. На кухню поступають замовлення. Спочатку ми додаємо
					їх у список “Очікують на виконання”, якщо повар береться робити —
					замовлення переходить у список “Виконуються”, якщо замовлення виконано
					— переходить у список “Готові до виносу”. Якщо натиснути на “Подано” -
					страва зникає з таблиці
				</h2>
			</div>
			<div>
				<div className="flex gap-4 justify-center mb-8">
					<label>
						Нова замовлена страва:
						<input
							type="text"
							value={dish}
							onChange={(e) => setDish(e.target.value)}
						/>
					</label>
					<button onClick={handleAddDish}>Додати</button>
				</div>
				<div className={styles.grid}>
					<ul className={styles.list}>
						<h2>Очікують на виконання</h2>
						{waitingList.length === 0 ? (
							<li className={styles.itemEmpty}>
								Наразі немає страв, що очікують на виконання.
							</li>
						) : (
							waitingList.map((waitingItem) => (
								<li
									key={waitingItem.id}
									className={styles.item}
								>
									<span>{waitingItem.dish}</span>
									<button onClick={() => handleWaitingDish(waitingItem.id)}>
										Готувати
									</button>
								</li>
							))
						)}
					</ul>
					<ul className={styles.list}>
						<h2>Виконуються</h2>
						{processingList.length === 0 ? (
							<li className={styles.itemEmpty}>
								Наразі немає страв, що виконуються.
							</li>
						) : (
							processingList.map((processingItem) => (
								<li
									key={processingItem.id}
									className={styles.item}
								>
									<span>{processingItem.dish}</span>
									<button onClick={() => handleCookedDish(processingItem.id)}>
										Приготовлено
									</button>
								</li>
							))
						)}
					</ul>
					<ul className={styles.list}>
						<h2>Готові до виносу</h2>
						{completedList.length === 0 ? (
							<li className={styles.itemEmpty}>
								Наразі немає страв, що готові до виносу.
							</li>
						) : (
							completedList.map((completeItem) => (
								<li
									key={completeItem.id}
									className={styles.item}
								>
									<span>{completeItem.dish}</span>
									<button onClick={() => handleRemoveDish(completeItem.id)}>
										Подано
									</button>
								</li>
							))
						)}
					</ul>
					{/* <table>
						<thead>
							<tr>
								<th>Очікують на виконання</th>
								<th>Виконується</th>
								<th>Готові до виносу</th>
							</tr>
						</thead>
						<tbody>
							{Array.from({
								length: Math.max(
									awaitingPreparation.length,
									inProgressDishes.length,
									readyForServing.length,
								),
							}).map((_, index) => (
								<tr key={index}>
									<td>
										{awaitingPreparation[index] ? (
											<>
												{awaitingPreparation[index].dish}
												{awaitingPreparation[index].action && (
													<button>{awaitingPreparation[index].action}</button>
												)}
											</>
										) : (
											''
										)}
									</td>
									<td>
										{inProgressDishes[index] ? (
											<>
												{inProgressDishes[index].dish}
												{inProgressDishes[index].action && (
													<button>{inProgressDishes[index].action}</button>
												)}
											</>
										) : (
											''
										)}
									</td>
									<td>
										{readyForServing[index] ? (
											<>
												{readyForServing[index].dish}
												{readyForServing[index].action && (
													<button>{readyForServing[index].action}</button>
												)}
											</>
										) : (
											''
										)}
									</td>
								</tr>
							))}
						</tbody> 
					</table> */}
				</div>
			</div>
		</div>
	)
}

export default Kitchen
