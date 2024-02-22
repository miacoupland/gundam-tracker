import { ComponentFixture, TestBed } from '@angular/core/testing';
import { TrackerComponent } from './tracker.component';
import { ActivatedRoute } from '@angular/router';
import { provideMockStore } from '@ngrx/store/testing';
import { of } from 'rxjs';

describe('TrackerComponent', () => {
  let component: TrackerComponent;
  let fixture: ComponentFixture<TrackerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [TrackerComponent],
      providers: [{ provide: ActivatedRoute, useValue: { 'params': of([{ 'id': 1 }]) } }, provideMockStore({})],
    }).compileComponents();

    fixture = TestBed.createComponent(TrackerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
