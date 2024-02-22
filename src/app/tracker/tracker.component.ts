import { Component, DestroyRef, OnInit, inject } from '@angular/core';
import {
  FormControl,
  FormGroup,
  ReactiveFormsModule,
  Validators,
} from '@angular/forms';
import { ActivatedRoute, Params, Router } from '@angular/router';
import { Store } from '@ngrx/store';
import { Subscription, map } from 'rxjs';
import { AppState } from '../store/app.state';
import { TrackerService } from './tracker.service';
import { UniverseEnum } from './models/universe.enum';
import { GradeEnum } from './models/grade.enum';
import { addGundam, updateGundam } from './store/tracker.actions';

@Component({
  selector: 'app-tracker',
  standalone: true,
  imports: [ReactiveFormsModule],
  templateUrl: './tracker.component.html',
  styleUrl: './tracker.component.scss',
})
export class TrackerComponent implements OnInit {
  public name = '';

  public gundamForm!: FormGroup;
  public editMode = false;
  private storeSub!: Subscription;

  constructor(
    private route: ActivatedRoute,
    private trackerService: TrackerService,
    private router: Router,
    private store: Store<AppState>
  ) {
    inject(DestroyRef).onDestroy(() => {
      if (this.storeSub) {
        this.storeSub.unsubscribe();
      }
    });
  }

  public ngOnInit(): void {
    this.route.params.subscribe((params: Params) => {
      this.name = params['id'];
      this.editMode = params['id'] != null;
      this.initForm();
    });
  }

  public onSubmit(): void {
    if (this.editMode) {
      this.store.dispatch(
        updateGundam({
          name: this.name,
          universe: UniverseEnum.UniversalCentury,
          picture: '',
          collected: false,
          built: false,
          cost: '',
          grade: GradeEnum.EG,
          notes: '',
        })
      );
    } else {
      this.store.dispatch(addGundam(this.gundamForm.value));
    }
  }

  private initForm() {
    this.storeSub = this.store
      .select('tracker')
      .pipe(
        map((state) =>
          state.models.find(
            (model) =>
              model.name.toLowerCase() === this.name.toLowerCase()
          )
        )
      )
      .subscribe((gundam): void => {
        if (gundam) {
          this.gundamForm = new FormGroup({
            name: new FormControl(gundam!.name, Validators.required),
            universe: new FormControl(gundam!.universe, Validators.required),
            picture: new FormControl(gundam!.picture, Validators.required),
            collected: new FormControl(gundam!.collected, Validators.required),
            built: new FormControl(gundam!.built, Validators.required),
            cost: new FormControl(gundam!.cost, Validators.required),
            grade: new FormControl(gundam!.grade, Validators.required),
            notes: new FormControl(gundam!.notes, Validators.required),
          });
        }
      });
  }
}
