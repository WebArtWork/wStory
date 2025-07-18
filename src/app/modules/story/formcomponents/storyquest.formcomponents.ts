export const storyquestFormComponents = {
	formId: 'storyquest',
	title: 'Storyquest',
	components: [
		{
			name: 'Text',
			key: 'name',
			focused: true,
			fields: [
				{
					name: 'Placeholder',
					value: 'fill storyquest title',
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
					value: 'fill storyquest description',
				},
				{
					name: 'Label',
					value: 'Description',
				}
			]
		}
	]
}
