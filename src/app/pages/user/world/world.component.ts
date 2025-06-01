import { Component } from '@angular/core';
import { UserService } from 'src/app/modules/user/services/user.service';
import { FormInterface } from 'src/app/core/modules/form/interfaces/form.interface';
import { FormService } from 'src/app/core/modules/form/form.service';
import { StoryService } from 'src/app/modules/story/services/story.service';
import { Router } from '@angular/router';
import { environment } from 'src/environments/environment';
import { StorychangetypeService } from 'src/app/modules/story/services/storychangetype.service';
import { StorychangeService } from 'src/app/modules/story/services/storychange.service';
import { StorylocationService } from 'src/app/modules/story/services/storylocation.service';
import { StorycharacterService } from 'src/app/modules/story/services/storycharacter.service';
import { Storycharacter } from 'src/app/modules/story/interfaces/storycharacter.interface';
import { Storylocation } from 'src/app/modules/story/interfaces/storylocation.interface';
import { Storychange } from 'src/app/modules/story/interfaces/storychange.interface';
import { Storychangetype } from 'src/app/modules/story/interfaces/storychangetype.interface';
import { StoryeventService } from 'src/app/modules/story/services/storyevent.service';
import { Storyevent } from 'src/app/modules/story/interfaces/storyevent.interface';

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

	events: Storyevent[] = [];

	constructor(
		private _characterService: StorycharacterService,
		private _locationService: StorylocationService,
		private _typeService: StorychangetypeService,
		private _changeService: StorychangeService,
		private _eventService: StoryeventService,
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

		this._characterService
			.get(
				{
					query: 'story=' + this.storyId
				},
				{ name: 'public' }
			)
			.subscribe((characters) => (this.characters = characters));
		this._locationService
			.get(
				{
					query: 'story=' + this.storyId
				},
				{ name: 'public' }
			)
			.subscribe((locations) => (this.locations = locations));
		this._typeService
			.get(
				{
					query: 'story=' + this.storyId
				},
				{ name: 'public' }
			)
			.subscribe((types) => (this.types = types));
		this._changeService
			.get(
				{
					query: 'story=' + this.storyId
				},
				{ name: 'public' }
			)
			.subscribe((changes) => (this.changes = changes));
		this._eventService
			.get(
				{
					query: 'story=' + this.storyId
				},
				{ name: 'public' }
			)
			.subscribe((events) => (this.events = events));
	}

	back(): void {
		window.history.back();
	}
}
