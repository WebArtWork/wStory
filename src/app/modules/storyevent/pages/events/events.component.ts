import { Component } from '@angular/core';
import { AlertService, CoreService } from 'wacom';
import { StoryeventService } from '../../services/storyevent.service';
import { Storyevent } from '../../interfaces/storyevent.interface';
import { FormService } from 'src/app/core/modules/form/form.service';
import { TranslateService } from 'src/app/core/modules/translate/translate.service';
import { FormInterface } from 'src/app/core/modules/form/interfaces/form.interface';
import { storyeventFormComponents } from '../../formcomponents/storyevent.formcomponents';
import { firstValueFrom } from 'rxjs';

@Component({
	templateUrl: './events.component.html',
	styleUrls: ['./events.component.scss'],
	standalone: false,
})
export class EventsComponent {
	columns = ['name', 'description'];

	form: FormInterface = this._form.getForm('storyevent', storyeventFormComponents);

	config = {
		paginate: this.setRows.bind(this),
		perPage: 20,
		setPerPage: this._storyeventService.setPerPage.bind(this._storyeventService),
		allDocs: false,
		create: (): void => {
			this._form.modal<Storyevent>(this.form, {
				label: 'Create',
				click: async (created: unknown, close: () => void) => {
					close();

					this._preCreate(created as Storyevent);

					await firstValueFrom(
						this._storyeventService.create(created as Storyevent)
					);

					this.setRows();
				},
			});
		},
		update: (doc: Storyevent): void => {
			this._form
				.modal<Storyevent>(this.form, [], doc)
				.then((updated: Storyevent) => {
					this._core.copy(updated, doc);

					this._storyeventService.update(doc);
				});
		},
		delete: (doc: Storyevent): void => {
			this._alert.question({
				text: this._translate.translate(
					'Common.Are you sure you want to delete this storyevent?'
				),
				buttons: [
					{
						text: this._translate.translate('Common.No'),
					},
					{
						text: this._translate.translate('Common.Yes'),
						callback: async (): Promise<void> => {
							await firstValueFrom(this._storyeventService.delete(doc));

							this.setRows();
						},
					},
				],
			});
		},
		buttons: [
			{
				icon: 'cloud_download',
				click: (doc: Storyevent): void => {
					this._form.modalUnique<Storyevent>('storyevent', 'url', doc);
				},
			},
		],
		headerButtons: [
			{
				icon: 'playlist_add',
				click: this._bulkManagement(),
				class: 'playlist',
			},
			{
				icon: 'edit_note',
				click: this._bulkManagement(false),
				class: 'edit',
			},
		],
	};

	rows: Storyevent[] = [];

	constructor(
		private _translate: TranslateService,
		private _storyeventService: StoryeventService,
		private _alert: AlertService,
		private _form: FormService,
		private _core: CoreService
	) {
		this.setRows();
	}

	setRows(page = this._page): void {
		this._page = page;

		this._core.afterWhile(
			this,
			() => {
				this._storyeventService.get({ page }).subscribe((rows) => {
					this.rows.splice(0, this.rows.length);

					this.rows.push(...rows);
				});
			},
			250
		);
	}

	private _page = 1;

	private _bulkManagement(create = true): () => void {
		return (): void => {
			this._form
				.modalDocs<Storyevent>(create ? [] : this.rows)
				.then(async (storyevents: Storyevent[]) => {
					if (create) {
						for (const storyevent of storyevents) {
							this._preCreate(storyevent);

							await firstValueFrom(
								this._storyeventService.create(storyevent)
							);
						}
					} else {
						for (const storyevent of this.rows) {
							if (
								!storyevents.find(
									(localStoryevent) => localStoryevent._id === storyevent._id
								)
							) {
								await firstValueFrom(
									this._storyeventService.delete(storyevent)
								);
							}
						}

						for (const storyevent of storyevents) {
							const localStoryevent = this.rows.find(
								(localStoryevent) => localStoryevent._id === storyevent._id
							);

							if (localStoryevent) {
								this._core.copy(storyevent, localStoryevent);

								await firstValueFrom(
									this._storyeventService.update(localStoryevent)
								);
							} else {
								this._preCreate(storyevent);

								await firstValueFrom(
									this._storyeventService.create(storyevent)
								);
							}
						}
					}

					this.setRows();
				});
		};
	}

	private _preCreate(storyevent: Storyevent): void {
		delete storyevent.__created;
	}
}
