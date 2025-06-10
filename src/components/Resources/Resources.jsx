const resources = [
	{
		title: 'React Підручник - W3Schools українською',
		subTitle: 'W3SchoolsUA',
		link: 'https://w3schoolsua.github.io/react/index.html',
		description:
			'React — це бібліотека JavaScript для створення інтерфейсів користувача. React дозволяє нам створювати односторінкові програми.',
		icon: 'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABwAAAAcCAMAAABF0y+mAAAAYFBMVEX///+63c6gz7um0sCr1cSv18aYzLYmonRjtpTB4NP4/Pvu9/PT6eA3pnyFxKoAkFcAlV8AklpruZoAlV4AmmgAmGTi8evl8+4AiUmLx69Yso612ssupHgLnWxBqYHK5dqH3wIXAAAAq0lEQVR4AdzLgwEDQRRF0bu27f67zJuYDeQMv/gDlu24/OL5QYiI63luBMSup1+CpBlXeVGWhXK+3rKqkazxuCrbtquJm9aoemQYubJVLZJJt3QzTOlScXPOtbJ2Gk1xtiDlxm1UVa0h0Gfn1dYapY9VafTghXLSAauelVeBGXSAw4xavDC5DWPv2sblhXLVgpFWbcCbtLil5iLi3X4aTEhMFjMmxJFYQxIAAFFuC1yESb31AAAAAElFTkSuQmCC',
	},
	{
		title: 'Посібник: знайомство з React',
		subTitle: 'React',
		link: 'https://uk.reactjs.org/tutorial/tutorial.html',
		description:
			'Даний посібник не потребує попереднього ознайомлення з React. Перед початком роботи ви створите маленьку гру для практики.',
		icon: 'https://uk.reactjs.org/favicon.ico',
	},
	{
		title: 'React Старт - W3Schools українською',
		subTitle: 'W3SchoolsUA',
		link: 'https://w3schoolsua.github.io/react/react_getstarted.html',
		description:
			'Підручник React. Старт. React безпосередньо в HTML. Налаштування середовища React. Запуск першої програми.',
		icon: 'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABwAAAAcCAMAAABF0y+mAAAAYFBMVEX///+63c6gz7um0sCr1cSv18aYzLYmonRjtpTB4NP4/Pvu9/PT6eA3pnyFxKoAkFcAlV8AklpruZoAlV4AmmgAmGTi8evl8+4AiUmLx69Yso612ssupHgLnWxBqYHK5dqH3wIXAAAAq0lEQVR4AdzLgwEDQRRF0bu27f67zJuYDeQMv/gDlu24/OL5QYiI63luBMSup1+CpBlXeVGWhXK+3rKqkazxuCrbtquJm9aoemQYubJVLZJJt3QzTOlScXPOtbJ2Gk1xtiDlxm1UVa0h0Gfn1dYapY9VafTghXLSAauelVeBGXSAw4xavDC5DWPv2sblhXLVgpFWbcCbtLil5iLi3X4aTEhMFjMmxJFYQxIAAFFuC1yESb31AAAAAElFTkSuQmCC',
	},
	{
		title: 'Офіційна документація React українською',
		subTitle: 'React',
		link: 'https://uk.react.dev/',
		description:
			'Оновлена офіційна документація React українською мовою. Почніть з основ або заглибтесь у розробку компонентів.',
		icon: 'https://uk.react.dev/favicon.ico',
	},
]

const Resources = () => {
	return (
		<div className="borderBoxShadow flex flex-col justify-center items-center max-w-[900px] mx-auto my-5  border rounded-xl border-solid border-[#3b82f6] p-5">
			<div className="flex flex-col gap-4 mb-10">
				<h2 className="text-xl">
					Задача 5. Самостійно сформуйте масив даних та виведіть фрагмент на
					зразок поданого (дані не обов’язково повинні співпадати)
				</h2>
			</div>
			{resources.map((resource, i) => {
				return (
					<div
						className="mb-[30px]"
						key={i}
					>
						<a
							href={resource.link}
							className="flex flex-col group "
							target="_blank"
						>
							{/* <div className="w-[50px] h-[50px] bg-white flex justify-center items-center rounded-[50%]"> */}
							<div className="flex items-center gap-2">
								<div>
									<img
										className="rounded-[50%]"
										width={28}
										height={28}
										src={resource.icon}
										alt="icon"
									/>
								</div>
								<div className="flex flex-col gap-[2px]">
									<h3 className="text-sm">{resource.subTitle}</h3>
									<span
										className="text-xs"
										target="_blank"
									>
										{resource.link}
									</span>
								</div>
							</div>
							<h2 className="text-xl text-blue-800 group-hover:underline mt-[8px]">
								{resource.title}
							</h2>
						</a>
						<div>
							<p className="text-sm max-w-[550px] text-[#767676]">
								{resource.description}
							</p>
						</div>
					</div>
				)
			})}
		</div>
	)
}

export default Resources
