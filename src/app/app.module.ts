import { RouterModule, Routes, PreloadAllModules } from '@angular/router';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
// Core
import { GuestComponent } from './core/theme/guest/guest.component';
import { UserComponent } from './core/theme/user/user.component';
import { PublicComponent } from './core/theme/public/public.component';
import { AppComponent } from './app.component';
import { CoreModule } from 'src/app/core/core.module';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
// config
import { WacomModule, MetaGuard } from 'wacom';
import { environment } from 'src/environments/environment';
// guards
import { AuthenticatedGuard } from './core/guards/authenticated.guard';
import { GuestGuard } from './core/guards/guest.guard';
import { AdminsGuard } from './core/guards/admins.guard';
import { HashLocationStrategy, LocationStrategy } from '@angular/common';

const routes: Routes = [
	{
		path: '',
		redirectTo: '/worlds',
		pathMatch: 'full'
	},
	{
		path: '',
		canActivate: [GuestGuard],
		component: GuestComponent,
		children: [
			/* guest */
			{
				path: 'sign',
				canActivate: [MetaGuard],
				data: {
					meta: {
						title: 'Sign'
					}
				},
				loadChildren: () =>
					import('./pages/guest/sign/sign.module').then(
						(m) => m.SignModule
					)
			}
		]
	},
	{
		path: '',
		canActivate: [AuthenticatedGuard],
		component: UserComponent,
		children: [
			/* user */
			{
				path: 'artifacts',
				canActivate: [MetaGuard],
				data: {
					meta: {
						title: 'Artifacts'
					}
				},
				loadChildren: () =>
					import(
						'./modules/story/pages/artifacts/artifacts.routes'
					).then((r) => r.artifactsRoutes)
			},
			{
				path: 'skills',
				canActivate: [MetaGuard],
				data: {
					meta: {
						title: 'Skills'
					}
				},
				loadChildren: () =>
					import('./modules/story/pages/skills/skills.routes').then(
						(r) => r.skillsRoutes
					)
			},
			{
				path: 'bosses',
				canActivate: [MetaGuard],
				data: {
					meta: {
						title: 'Bosses'
					}
				},
				loadChildren: () =>
					import('./modules/story/pages/bosses/bosses.routes').then(
						(r) => r.bossesRoutes
					)
			},
			{
				path: 'character/types',
				canActivate: [MetaGuard],
				data: {
					meta: {
						title: 'Charactertypes'
					}
				},
				loadChildren: () =>
					import(
						'./modules/story/pages/charactertypes/charactertypes.routes'
					).then((r) => r.charactertypesRoutes)
			},
			{
				path: 'events',
				canActivate: [MetaGuard],
				data: {
					meta: {
						title: 'Events'
					}
				},
				loadChildren: () =>
					import('./modules/story/pages/events/events.module').then(
						(m) => m.EventsModule
					)
			},
			{
				path: 'characters',
				canActivate: [MetaGuard],
				data: {
					meta: {
						title: 'Characters'
					}
				},
				loadChildren: () =>
					import(
						'./modules/story/pages/characters/characters.routes'
					).then((r) => r.charactersRoutes)
			},
			{
				path: 'locations',
				canActivate: [MetaGuard],
				data: {
					meta: {
						title: 'Locations'
					}
				},
				loadChildren: () =>
					import(
						'./modules/story/pages/locations/locations.module'
					).then((m) => m.LocationsModule)
			},
			{
				path: 'change/types',
				canActivate: [MetaGuard],
				data: {
					meta: {
						title: 'Types'
					}
				},
				loadChildren: () =>
					import(
						'./modules/story/pages/changetypes/changetypes.routes'
					).then((m) => m.changetypesRoutes)
			},
			{
				path: 'changes',
				canActivate: [MetaGuard],
				data: {
					meta: {
						title: 'Changes'
					}
				},
				loadChildren: () =>
					import('./modules/story/pages/changes/changes.routes').then(
						(m) => m.changesRoutes
					)
			},
			{
				path: 'stories',
				canActivate: [MetaGuard],
				data: {
					meta: {
						title: 'Stories'
					}
				},
				loadChildren: () =>
					import('./modules/story/pages/stories/stories.routes').then(
						(m) => m.storiesRoutes
					)
			},
			{
				path: 'files',
				canActivate: [MetaGuard],
				data: {
					meta: {
						title: 'Files'
					}
				},
				loadChildren: () =>
					import('./core/modules/file/pages/files/files.module').then(
						(m) => m.FilesModule
					)
			},
			{
				path: 'profile',
				canActivate: [MetaGuard],
				data: {
					meta: {
						title: 'My Profile'
					}
				},
				loadChildren: () =>
					import('./pages/user/profile/profile.module').then(
						(m) => m.ProfileModule
					)
			}
		]
	},
	{
		path: '',
		component: PublicComponent,
		children: [
			{
				path: 'timeline',
				canActivate: [MetaGuard],
				data: {
					meta: {
						title: 'Timeline'
					}
				},
				loadChildren: () =>
					import('./pages/user/timeline/timeline.module').then(
						(m) => m.TimelineModule
					)
			},
			{
				path: 'event',
				canActivate: [MetaGuard],
				data: {
					meta: {
						title: 'Event'
					}
				},
				loadChildren: () =>
					import('./pages/user/event/event.module').then(
						(m) => m.EventModule
					)
			},
			{
				path: 'world',
				canActivate: [MetaGuard],
				data: {
					meta: {
						title: 'World'
					}
				},
				loadChildren: () =>
					import('./pages/user/world/world.module').then(
						(m) => m.WorldModule
					)
			},
			{
				path: 'worlds',
				canActivate: [MetaGuard],
				data: {
					meta: {
						title: 'Worlds'
					}
				},
				loadChildren: () =>
					import('./pages/user/worlds/worlds.module').then(
						(m) => m.WorldsModule
					)
			},
			{
				path: 'document',
				canActivate: [MetaGuard],
				data: {
					meta: {
						title: 'Document'
					}
				},
				loadChildren: () =>
					import('./pages/guest/document/document.module').then(
						(m) => m.DocumentModule
					)
			},
			{
				path: 'components',
				canActivate: [MetaGuard],
				data: {
					meta: {
						title: 'Components'
					}
				},
				loadChildren: () =>
					import('./pages/guest/components/components.module').then(
						(m) => m.ComponentsModule
					)
			}
		]
	},
	{
		path: 'admin',
		canActivate: [AdminsGuard],
		component: UserComponent,
		children: [
			/* admin */
			{
				path: 'users',
				canActivate: [MetaGuard],
				data: {
					meta: {
						title: 'Users'
					}
				},
				loadChildren: () =>
					import('./modules/user/pages/users/users.module').then(
						(m) => m.UsersModule
					)
			},
			{
				path: 'forms',
				canActivate: [MetaGuard],
				data: {
					meta: {
						title: 'Forms'
					}
				},
				loadChildren: () =>
					import(
						'./modules/customform/pages/customforms/customforms.module'
					).then((m) => m.CustomformsModule)
			},
			{
				path: 'translates',
				canActivate: [MetaGuard],
				data: {
					meta: {
						title: 'Translates'
					}
				},
				loadChildren: () =>
					import(
						'./core/modules/translate/pages/translates/translates.module'
					).then((m) => m.TranslatesModule)
			}
		]
	},
	{
		path: '**',
		redirectTo: 'worlds',
		pathMatch: 'full'
	}
];

@NgModule({
	declarations: [
		AppComponent,
		GuestComponent,
		UserComponent,
		PublicComponent
	],
	imports: [
		CoreModule,
		BrowserModule,
		BrowserAnimationsModule,
		WacomModule.forRoot({
			store: {},
			http: {
				url: environment.url
			},
			socket: environment.production,
			meta: {
				useTitleSuffix: true,
				defaults: {
					title: environment.meta.title,
					favicon: environment.meta.favicon,
					description: environment.meta.description,
					titleSuffix: ' | ' + environment.meta.title,
					'og:image': environment.meta.image
				}
			},
			modal: {
				modals: {
					/* modals */
				}
			},
			alert: {
				alerts: {
					/* alerts */
				}
			},
			loader: {
				loaders: {
					/* loaders */
				}
			},
			popup: {
				popups: {
					/* popups */
				}
			}
		}),
		RouterModule.forRoot(routes, {
			scrollPositionRestoration: 'enabled',
			preloadingStrategy: PreloadAllModules
		})
	],
	providers: [
		/* providers */
		{ provide: LocationStrategy, useClass: HashLocationStrategy },
		AuthenticatedGuard,
		GuestGuard,
		AdminsGuard
	],
	bootstrap: [AppComponent]
})
export class AppModule {}
