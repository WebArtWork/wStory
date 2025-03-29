import { Component } from '@angular/core';
import { UserService } from 'src/app/modules/user/services/user.service';
import { FormInterface } from 'src/app/core/modules/form/interfaces/form.interface';
import { FormService } from 'src/app/core/modules/form/form.service';
import { StoryService } from 'src/app/modules/story/services/story.service';
import { Router } from '@angular/router';
import { environment } from 'src/environments/environment';
import { StorychangetypeService } from 'src/app/modules/storychangetype/services/storychangetype.service';
import { StorychangeService } from 'src/app/modules/storychange/services/storychange.service';
import { StorylocationService } from 'src/app/modules/storylocation/services/storylocation.service';
import { StorycharacterService } from 'src/app/modules/storycharacter/services/storycharacter.service';
import { Storycharacter } from 'src/app/modules/storycharacter/interfaces/storycharacter.interface';
import { Storylocation } from 'src/app/modules/storylocation/interfaces/storylocation.interface';
import { Storychange } from 'src/app/modules/storychange/interfaces/storychange.interface';
import { Storychangetype } from 'src/app/modules/storychangetype/interfaces/storychangetype.interface';

@Component({
	templateUrl: './world.component.html',
	styleUrls: ['./world.component.scss'],
	standalone: false
})
export class WorldComponent {
	readonly url = environment.url;

	readonly storyId = this._router.url.replace('/world/', '');

	formDoc: FormInterface = this._form.getForm('docForm', {
		formId: 'docForm',
		title: 'Doc form',
		components: [
			{
				name: 'Text',
				key: 'name',
				focused: true,
				fields: [
					{
						name: 'Placeholder',
						value: 'Enter your name'
					},
					{
						name: 'Label',
						value: 'Name'
					}
				]
			},
			{
				name: 'Text',
				key: 'phone',
				fields: [
					{
						name: 'Placeholder',
						value: 'Enter your phone'
					},
					{
						name: 'Label',
						value: 'Phone'
					}
				]
			},
			{
				name: 'Text',
				key: 'bio',
				fields: [
					{
						name: 'Placeholder',
						value: 'Enter your bio'
					},
					{
						name: 'Label',
						value: 'Bio'
					},
					{
						name: 'Textarea',
						value: true
					}
				]
			},
			{
				name: 'Button',
				fields: [
					{
						name: 'Label',
						value: "Let's go"
					},
					{
						name: 'Submit',
						value: true
					}
				]
			}
		]
	});

	isMenuOpen = false;

	story = this._storyService.new();

	characters: Storycharacter[] = [];

	locations: Storylocation[] = [];

	types: Storychangetype[] = [];

	changes: Storychange[] = [];

	constructor(
		private _storycharacterService: StorycharacterService,
		private _storylocationService: StorylocationService,
		private _storytypeService: StorychangetypeService,
		private _storychangeService: StorychangeService,
		private _storyService: StoryService,
		public userService: UserService,
		private _form: FormService,
		private _router: Router
	) {
		this._storyService
			.fetch(
				{
					_id: this.storyId
				},
				{ name: 'public' }
			)
			.subscribe((story) => (this.story = story));

		this._storycharacterService
			.get(
				{
					query: 'story=' + this.storyId
				},
				{ name: 'public' }
			)
			.subscribe((characters) => (this.characters = characters));
		this._storylocationService
			.get(
				{
					query: 'story=' + this.storyId
				},
				{ name: 'public' }
			)
			.subscribe((locations) => (this.locations = locations));
		this._storytypeService
			.get(
				{
					query: 'story=' + this.storyId
				},
				{ name: 'public' }
			)
			.subscribe((types) => (this.types = types));
		this._storychangeService
			.get(
				{
					query: 'story=' + this.storyId
				},
				{ name: 'public' }
			)
			.subscribe((changes) => (this.changes = changes));
	}

	back(): void {
		window.history.back();
	}
}
