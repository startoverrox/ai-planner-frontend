import { create } from 'zustand'
import { devtools, persist } from 'zustand/middleware'
import type { Setting } from '@/types/setting'

const useSettingStore = create<Setting>()(
	devtools(
		persist(
			(set) => ({
				darkMode: false,
				setDarkMode: (prev: boolean) => {
					set({ darkMode: !prev })
				},
			}),
			{ name: 'settingStore' },
		),
		{ name: 'settingStore' },
	),
)

export default useSettingStore
