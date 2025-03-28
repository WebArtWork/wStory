import { NgModule } from '@angular/core';
import { CoreModule } from 'src/app/core/core.module';
import { WorldComponent } from './world.component';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
	{
		path: '',
		component: WorldComponent
	}
];

@NgModule({
	imports: [RouterModule.forChild(routes), CoreModule],
	declarations: [WorldComponent]
})
export class WorldModule {}
