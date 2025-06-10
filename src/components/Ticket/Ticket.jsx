import { useState } from 'react'
import styles from './Ticket.module.scss'
console.log(' styles:', styles)
import BusinessCategory from './BusinessCategory'
import EconomyCategory from './EconomyCategory'
const Ticket = () => {
	const [ticket, setTicket] = useState('')
	const [block, setBlock] = useState('')

	function handleChange(e) {
		const val = e.target.value
		if (val === 'business') {
			setTicket(val)
			setBlock(<BusinessCategory />)
		} else if (val === 'economy') {
			setTicket(val)
			setBlock(<EconomyCategory />)
		}
	}
	return (
		<div>
			<div className="borderBoxShadow flex flex-col justify-center items-center max-w-[900px] mx-auto my-5  border rounded-xl border-solid border-[#3b82f6] p-5">
				<div className="flex flex-col gap-4 mb-10">
					<h2 className="text-xl">
						Задача 2. Із випадаючого списку вибираємо клас квитка у літаку. Якщо
					</h2>
					<ol>
						<li className="list-[number] ml-4">
							бізнес - виводимо елементи для вибору газети та коньяку (якщо
							вибрано коньяк, то запропонувати закуску (так/ні)), на фоні
							зображення бізнес кают
						</li>
						<li className="list-[number] ml-4">
							економ – виводимо елементи для вибору типу пива і чипсів, на фоні
							хмарки.
						</li>
					</ol>
				</div>
				<div className="mb-4 ">
					{ticket && <label className="mb-[8px]">Оберіть клас квитка:</label>}
					<select
						value={ticket}
						onChange={handleChange}
						className=" mr-[4px] "
					>
						<option
							value=""
							disabled
							hidden
						>
							Оберіть клас квитка:
						</option>
						<option value="business">Бізнес</option>
						<option value="economy">Економ</option>
					</select>
				</div>
				<div className="min-h-[300px] min-w-[100%] ">{block}</div>
			</div>
		</div>
	)
}

export default Ticket
