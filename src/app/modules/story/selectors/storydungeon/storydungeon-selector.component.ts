import {
	SimpleChanges,
	EventEmitter,
	Component,
	OnChanges,
	Output,
	Input,
} from '@angular/core';
import { SelectModule } from 'src/app/core/modules/select/select.module';
import { StorydungeonService } from '../../services/storydungeon.service';
import { Storydungeon } from '../../interfaces/storydungeon.interface';

@Component({
	selector: 'storydungeon-selector',
	templateUrl: './storydungeon-selector.component.html',
	styleUrls: ['./storydungeon-selector.component.scss'],
	imports: [SelectModule],
})
export class StorydungeonSelectorComponent implements OnChanges {
	@Input() value: string;

	@Output() wChange = new EventEmitter();

	get items(): Storydungeon[] {
		return this._storydungeonService.storydungeons;
	}

	constructor(private _storydungeonService: StorydungeonService) {}

	ngOnChanges(changes: SimpleChanges): void {
		if (changes['value'] && !changes['value'].firstChange) {
			this.value = changes['value'].currentValue;
		}
	}
}
