import {
	SimpleChanges,
	EventEmitter,
	Component,
	OnChanges,
	Output,
	Input,
} from '@angular/core';
import { SelectModule } from 'src/app/core/modules/select/select.module';
import { StorybuildingService } from '../../services/storybuilding.service';
import { Storybuilding } from '../../interfaces/storybuilding.interface';

@Component({
	selector: 'storybuilding-selector',
	templateUrl: './storybuilding-selector.component.html',
	styleUrls: ['./storybuilding-selector.component.scss'],
	imports: [SelectModule],
})
export class StorybuildingSelectorComponent implements OnChanges {
	@Input() value: string;

	@Output() wChange = new EventEmitter();

	get items(): Storybuilding[] {
		return this._storybuildingService.storybuildings;
	}

	constructor(private _storybuildingService: StorybuildingService) {}

	ngOnChanges(changes: SimpleChanges): void {
		if (changes['value'] && !changes['value'].firstChange) {
			this.value = changes['value'].currentValue;
		}
	}
}
