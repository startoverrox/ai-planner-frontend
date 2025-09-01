import { useState } from 'react'
import { useNavigate } from 'react-router'
import PwVisIcon from '@/assets/icons/pw-vis.svg?react'
import { cn } from '@/utils/cn'
import useToastStore from '@/store/toastStore'

const RegisterPage: React.FC = () => {
	const navigate = useNavigate()
	const { setToast } = useToastStore()

	const [pwVisible, setPwVisible] = useState(false)
	const [pwConfirmVisible, setPwConfirmVisible] = useState(false)

	const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
		e.preventDefault()
		const formData = new FormData(e.currentTarget)
		const name = formData.get('name') as string
		const email = formData.get('email') as string
		const password = formData.get('password') as string
		const passwordConfirm = formData.get('passwordConfirm') as string

		if (password !== passwordConfirm) {
			setToast({
				message: 'password does not match!',
				type: 'error',
			})
			return
		}

		// const success = await register(
		//   name,
		//   email,
		//   password,
		//   passwordConfirm,
		// );
		// if (success) {
		//   navigate("/login");
		//   setToast({
		//     message: "회원가입이 완료되었습니다! 로그인해주세요.",
		//     type: "success",
		//   });
		// } else {
		//   setToast({
		//     message: "회원가입에 실패했습니다. 다시 시도해주세요.",
		//     type: "error",
		//   });
		// }
	}

	return (
		<form onSubmit={handleSubmit}>
			<div className="flex w-60 flex-col items-center justify-center gap-2">
				<span className="text-3xl font-bold tracking-tight">LOGO</span>

				<div>
					<label htmlFor="name">name</label>
					<input
						className="w-full"
						type="text"
						id="name"
						name="name"
						placeholder="name"
						required
					/>
				</div>

				<div>
					<label htmlFor="email">email</label>
					<input
						className="w-full"
						type="email"
						id="email"
						name="email"
						placeholder="email"
						required
					/>
				</div>

				<div>
					<label htmlFor="password">password</label>
					<div className="relative w-full">
						<input
							className="w-full pr-8"
							type={pwVisible ? 'text' : 'password'}
							id="password"
							name="password"
							placeholder="password"
							required
						/>
						<div className="absolute top-1/2 right-2 -translate-y-1/2">
							<PwVisIcon
								className={cn('h-5 w-5 cursor-pointer transition-opacity', {
									'fill-gray-800': pwVisible,
									'fill-gray-500': !pwVisible,
								})}
								onClick={() => setPwVisible((prev) => !prev)}
							/>
						</div>
					</div>
				</div>

				<div>
					<label htmlFor="passwordConfirm">password confirm</label>
					<div className="relative w-full">
						<input
							className="w-full pr-8"
							type={pwConfirmVisible ? 'text' : 'password'}
							id="passwordConfirm"
							name="passwordConfirm"
							placeholder="password confirm"
							required
						/>
						<div className="absolute top-1/2 right-2 -translate-y-1/2">
							<PwVisIcon
								className={cn('h-5 w-5 cursor-pointer transition-opacity', {
									'fill-gray-800': pwConfirmVisible,
									'fill-gray-500': !pwConfirmVisible,
								})}
								onClick={() => setPwConfirmVisible((prev) => !prev)}
							/>
						</div>
					</div>
				</div>

				<button
					className="w-full rounded-md border p-1 text-white"
					type="submit"
				>
					register
				</button>

				<div className="flex w-full items-center justify-between gap-2">
					<span className="text-xs whitespace-nowrap">
						already have an account?
					</span>
					<button
						className="underline"
						type="button"
						onClick={() => navigate('/login')}
					>
						login
					</button>
				</div>
			</div>
		</form>
	)
}

export default RegisterPage
