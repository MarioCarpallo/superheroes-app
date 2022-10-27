import { ComponentFixture, TestBed } from '@angular/core/testing';
import { HEROE_MOCK } from 'src/app/shared/mocks/heroe.mock';

import { HeroeCardComponent } from './heroe-card.component';

describe('HeroeCardComponent', () => {
  let component: HeroeCardComponent;
  let fixture: ComponentFixture<HeroeCardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HeroeCardComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(HeroeCardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should call editHeroe emiter', () => {
    spyOn(component.editHeroeEvent, 'emit');
    component.editHeroe(HEROE_MOCK[0])
    expect(component.editHeroeEvent.emit).toHaveBeenCalled();
  });

});
