const UnorderedList = () => {
	const workersList2 = [
		{
			id: '101',
			name: 'Шевченко',
			salary: 12000,
		},
		{
			id: '102',
			name: 'Коваль',
			salary: 18000,
		},

		{
			id: '103',
			name: 'Бондар',
			salary: 20000,
		},
		{
			id: '104',
			name: 'Кравченко',
			salary: 22000,
		},

		{
			id: '105',
			name: 'Ткаченко',
			salary: 25000,
		},
		{
			id: '106',
			name: 'Романенко',
			salary: 30000,
		},
		{
			id: '107',
			name: 'Савченко',
			salary: 27000,
		},
		{
			id: '108',
			name: 'Лисенко',
			salary: 24000,
		},
	]

	return (
		<div className="borderBoxShadow flex flex-col justify-center items-center max-w-[900px] mx-auto my-5  border rounded-xl border-solid border-[#3b82f6] p-5">
			<h2 className="text-xl mb-8">
				4. Вивести список як маркований список з елементами у форматі (name:
				salary)
			</h2>
			<ul>
				{workersList2.map((worker) => (
					<li key={worker.id}>
						{worker.name} : {worker.salary}
					</li>
				))}
			</ul>
		</div>
	)
}

export default UnorderedList
