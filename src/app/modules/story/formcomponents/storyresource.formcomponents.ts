export const storyresourceFormComponents = {
	formId: 'storyresource',
	title: 'Storyresource',
	components: [
		{
			name: 'Text',
			key: 'name',
			focused: true,
			fields: [
				{
					name: 'Placeholder',
					value: 'fill storyresource title',
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
					value: 'fill storyresource description',
				},
				{
					name: 'Label',
					value: 'Description',
				}
			]
		}
	]
}
