export const storylocationFormComponents = {
	formId: 'storylocation',
	title: 'Storylocation',
	components: [
		{
			name: 'Text',
			key: 'name',
			focused: true,
			fields: [
				{
					name: 'Placeholder',
					value: 'fill storylocation title'
				},
				{
					name: 'Label',
					value: 'Title'
				}
			]
		},
		{
			name: 'Number',
			key: 'latitude',
			fields: [
				{
					name: 'Placeholder',
					value: 'fill location latitude'
				},
				{
					name: 'Label',
					value: 'Latitude'
				}
			]
		},
		{
			name: 'Number',
			key: 'longitude',
			fields: [
				{
					name: 'Placeholder',
					value: 'fill location longitude'
				},
				{
					name: 'Label',
					value: 'Longitude'
				}
			]
		},
		{
			name: 'Text',
			key: 'description',
			fields: [
				{
					name: 'Placeholder',
					value: 'fill storylocation description'
				},
				{
					name: 'Label',
					value: 'Description'
				}
			]
		}
	]
};
