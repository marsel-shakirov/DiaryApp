import { AddNote } from '@/widgets'

export const AddNotePage = () => {
	return (
		<>
			<title>DiaryApp | Добавить заметку</title>

			<section>
				<h1 className="visually-hidden">Добавить заметку</h1>
				<AddNote />
			</section>
		</>
	)
}
