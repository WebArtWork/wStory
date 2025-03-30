import { NgModule } from '@angular/core';
import { CoreModule } from 'src/app/core/core.module';
import { TimelineComponent } from './timeline.component';
import { Routes, RouterModule } from '@angular/router';
import { EventsPipe } from './events.pipe';

const routes: Routes = [
	{
		path: '',
		component: TimelineComponent
	}
];

@NgModule({
	imports: [RouterModule.forChild(routes), CoreModule, EventsPipe],
	declarations: [TimelineComponent]
})
export class TimelineModule {}
