export const storyunitFormComponents = {
	formId: 'storyunit',
	title: 'Storyunit',
	components: [
		{
			name: 'Text',
			key: 'name',
			focused: true,
			fields: [
				{
					name: 'Placeholder',
					value: 'fill storyunit title',
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
					value: 'fill storyunit description',
				},
				{
					name: 'Label',
					value: 'Description',
				}
			]
		}
	]
}
