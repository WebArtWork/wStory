import { NgModule } from '@angular/core';
import { CoreModule } from 'src/app/core/core.module';
import { WorldComponent } from './world.component';
import { Routes, RouterModule } from '@angular/router';
import { TypesPipe } from './types.pipe';

const routes: Routes = [
	{
		path: ':_id',
		component: WorldComponent
	}
];

@NgModule({
	imports: [RouterModule.forChild(routes), CoreModule, TypesPipe],
	declarations: [WorldComponent]
})
export class WorldModule {}
