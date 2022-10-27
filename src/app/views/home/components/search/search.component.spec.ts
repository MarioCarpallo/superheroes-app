import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SearchComponent } from './search.component';

describe('SearchComponent', () => {
  let component: SearchComponent;
  let fixture: ComponentFixture<SearchComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SearchComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SearchComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should call editHeroe emiter with data', () => {
    spyOn(component.searchEvent, 'emit');
    const event = {
      target: {
        value: 'test'
      }
    }
    component.searchKey(event)
    expect(component.searchEvent.emit).toHaveBeenCalledWith('test');
  });

  it('should call editHeroe emiter without', () => {
    spyOn(component.searchEvent, 'emit');
    const event = {
      target: {
        value: ''
      }
    }
    component.searchKey(event)
    expect(component.searchEvent.emit).toHaveBeenCalledWith(null);
  });
});
