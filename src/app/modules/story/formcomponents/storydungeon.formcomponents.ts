export const storydungeonFormComponents = {
	formId: 'storydungeon',
	title: 'Storydungeon',
	components: [
		{
			name: 'Text',
			key: 'name',
			focused: true,
			fields: [
				{
					name: 'Placeholder',
					value: 'fill storydungeon title',
				},
				{
					name: 'Label',
					value: 'Title',
				}
			]
		},
		{
			name: 'Text',
			key: 'description',
			fields: [
				{
					name: 'Placeholder',
					value: 'fill storydungeon description',
				},
				{
					name: 'Label',
					value: 'Description',
				}
			]
		}
	]
}
