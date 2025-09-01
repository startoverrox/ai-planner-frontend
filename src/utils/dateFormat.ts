import dayjs from 'dayjs'

export const formatSqlDateTime = (dateString: string): string => {
	if (!dateString) {
		return ''
	}

	try {
		return dayjs(dateString).format('YYYY-MM-DD HH:mm:ss')
	} catch (error) {
		console.error('error during date format:', error)
		return dateString
	}
}
