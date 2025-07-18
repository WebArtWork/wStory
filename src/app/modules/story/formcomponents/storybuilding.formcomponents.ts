export const storybuildingFormComponents = {
	formId: 'storybuilding',
	title: 'Storybuilding',
	components: [
		{
			name: 'Text',
			key: 'name',
			focused: true,
			fields: [
				{
					name: 'Placeholder',
					value: 'fill storybuilding title',
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
					value: 'fill storybuilding description',
				},
				{
					name: 'Label',
					value: 'Description',
				}
			]
		}
	]
}
