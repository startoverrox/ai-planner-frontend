import { Outlet } from 'react-router'
import { cn } from '@/utils/cn'
import useSettingStore from '@/store/settingStore'
import Header from '@/components/Header'

const DefaultLayout: React.FC = () => {
	const { darkMode } = useSettingStore()
	return (
		<div className={cn('flex h-screen flex-col', darkMode && 'dark')}>
			<Header />
			<div className="flex-1 overflow-y-auto">
				<Outlet />
			</div>
		</div>
	)
}

export default DefaultLayout
