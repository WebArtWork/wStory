import { Component } from '@angular/core';
import { UserService } from 'src/app/modules/user/services/user.service';
import { FormInterface } from 'src/app/core/modules/form/interfaces/form.interface';
import { FormService } from 'src/app/core/modules/form/form.service';
import { StoryeventService } from 'src/app/modules/storyevent/services/storyevent.service';
import { Router } from '@angular/router';

@Component({
	templateUrl: './event.component.html',
	styleUrls: ['./event.component.scss'],
	standalone: false
})
export class EventComponent {
	event = this._eventService.doc(this._router.url.replace('/event/', ''));

	constructor(
		private _eventService: StoryeventService,
		private _router: Router
	) {}

	back(): void {
		window.history.back();
	}
}
