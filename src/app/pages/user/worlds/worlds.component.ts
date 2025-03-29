import { Component } from '@angular/core';
import { Story } from 'src/app/modules/story/interfaces/story.interface';
import { StoryService } from 'src/app/modules/story/services/story.service';
import { environment } from 'src/environments/environment';

@Component({
	templateUrl: './worlds.component.html',
	styleUrls: ['./worlds.component.scss'],
	standalone: false
})
export class WorldsComponent {
	readonly url = environment.url;

	stories: Story[] = [];

	constructor(private _storyService: StoryService) {
		this._storyService
			.get(
				{},
				{
					name: 'public'
				}
			)
			.subscribe((stories) => (this.stories = stories));
	}
}
