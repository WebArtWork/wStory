import { Component } from '@angular/core';
import { Story } from 'src/app/modules/story/interfaces/story.interface';
import { StoryService } from 'src/app/modules/story/services/story.service';
import { Storyevent } from 'src/app/modules/story/interfaces/storyevent.interface';
import { StoryeventService } from 'src/app/modules/story/services/storyevent.service';
import { environment } from 'src/environments/environment';

@Component({
	templateUrl: './timeline.component.html',
	styleUrls: ['./timeline.component.scss'],
	standalone: false
})
export class TimelineComponent {
	readonly url = environment.url;

	stories: Story[] = [];

	events: Storyevent[] = [];

	constructor(
		private _storyService: StoryService,
		private _eventService: StoryeventService
	) {
		this._storyService
			.get({}, { name: 'public' })
			.subscribe((stories) => (this.stories = stories));
		this._eventService
			.get({}, { name: 'public' })
			.subscribe((events) => (this.events = events));
	}
}
