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
		redirectTo: '/sign',
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
				path: 'events',
				canActivate: [MetaGuard],
				data: {
					meta: {
						title: 'Events'
					}
				},
				loadChildren: () => import('./modules/storyevent/pages/events/events.module').then(m => m.EventsModule)
			}, 
			{
				path: 'world',
				canActivate: [MetaGuard],
				data: {
					meta: {
						title: 'World'
					}
				},
				loadChildren: () => import('./pages/user/world/world.module').then(m => m.WorldModule)
			}, 
			{
				path: 'worlds',
				canActivate: [MetaGuard],
				data: {
					meta: {
						title: 'Worlds'
					}
				},
				loadChildren: () => import('./pages/user/worlds/worlds.module').then(m => m.WorldsModule)
			}, 
			{
				path: 'characters',
				canActivate: [MetaGuard],
				data: {
					meta: {
						title: 'Characters'
					}
				},
				loadChildren: () => import('./modules/storycharacter/pages/characters/characters.module').then(m => m.CharactersModule)
			}, 
			{
				path: 'locations',
				canActivate: [MetaGuard],
				data: {
					meta: {
						title: 'Locations'
					}
				},
				loadChildren: () => import('./modules/storylocation/pages/locations/locations.module').then(m => m.LocationsModule)
			}, 
			{
				path: 'types',
				canActivate: [MetaGuard],
				data: {
					meta: {
						title: 'Types'
					}
				},
				loadChildren: () => import('./modules/storychangetype/pages/types/types.module').then(m => m.TypesModule)
			}, 
			{
				path: 'changes',
				canActivate: [MetaGuard],
				data: {
					meta: {
						title: 'Changes'
					}
				},
				loadChildren: () => import('./modules/storychange/pages/changes/changes.module').then(m => m.ChangesModule)
			}, 
			{
				path: 'stories',
				canActivate: [MetaGuard],
				data: {
					meta: {
						title: 'Stories'
					}
				},
				loadChildren: () => import('./modules/story/pages/stories/stories.module').then(m => m.StoriesModule)
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
			/* user */
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
		redirectTo: 'profile',
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
