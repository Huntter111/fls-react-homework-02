// Задача 1. Вводимо логіна і пароль. Якщо логін вірний відображаємо смайл. Якщо ні, то:
// 1) якщо логін = Іван – колір повідомлення про помилку синій
// 2) якщо хтось інший, то колір повідомлення червоний

import { useEffect, useState } from 'react'
import { cn } from '../../utils/utils'

const Login = () => {
	const data = [
		{
			login: 'qwert',
			password: '1234',
		},
	]
	const [userData, setUserData] = useState({
		login: '',
		password: '',
	})
	const [message, setMessage] = useState('')
	const [status, setStatus] = useState(null)
	const userIvan = userData.login.toLocaleLowerCase() === 'ivan'
	useEffect(() => {
		if (message) {
			const timer = setTimeout(() => {
				setMessage('')
				setStatus(null)
			}, 2500)
			return () => {
				clearTimeout(timer)
			}
		}
	}, [message])

	function handlerClick() {
		const findLogin = data.find(
			(d) => d.login === userData.login && d.password === userData.password,
		)
		if (findLogin) {
			setMessage(<Smile />)
			setUserData({ login: '', password: '' })
		} else if (userIvan) {
			setMessage('Ваш логін Ivan)')
			setStatus('error-ivan')
			setUserData({ login: '', password: '' })
		} else {
			setMessage('Ваш логін не знайдено!')
			setStatus('error-other')
		}
	}

	return (
		<div className="borderBoxShadow flex flex-col justify-center items-center max-w-[900px] mx-auto my-5  border rounded-xl border-solid border-[#3b82f6] p-5">
			<div className="flex flex-col gap-4 mb-10">
				<h2 className="text-xl">
					Задача 1. Вводимо логіна і пароль. Якщо логін вірний відображаємо
					смайл. Якщо ні, то:
				</h2>
				<ol>
					<li className="list-[number] ml-4">
						якщо логін = Іван – колір повідомлення про помилку синій{' '}
					</li>
					<li className="list-[number] ml-4">
						якщо хтось інший, то колір повідомлення червоний{' '}
					</li>
				</ol>
			</div>
			<div className="gap-8 lg:flex justify-between">
				<div className="flex flex-col gap-4">
					<label>
						Login
						<input
							type="text"
							value={userData.login}
							onChange={(e) =>
								setUserData((prevUserData) => ({
									...prevUserData,
									login: e.target.value,
								}))
							}
						/>
					</label>
					<label>
						Password
						<input
							type="password"
							value={userData.password}
							onChange={(e) =>
								setUserData((prevUserData) => ({
									...prevUserData,
									password: e.target.value,
								}))
							}
						/>
					</label>
					<button
						onClick={handlerClick}
						className="self-start"
					>
						Login
					</button>
				</div>
				<div className="min-w-sm">
					<span
						className={cn('text-black', {
							' text-blue-400': status === 'error-ivan',
							'text-red-500': status === 'error-other',
						})}
					>
						{message}
					</span>
				</div>
			</div>
		</div>
	)
}
export default Login

function Smile() {
	return (
		<div>
			<img
				width={150}
				src="https://upload.wikimedia.org/wikipedia/commons/8/85/Smiley.svg"
				alt="Image"
			/>
		</div>
	)
}
