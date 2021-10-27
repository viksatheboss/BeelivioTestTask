import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListProducerComponent } from './list-producer.component';

describe('ListProducerComponent', () => {
  let component: ListProducerComponent;
  let fixture: ComponentFixture<ListProducerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ListProducerComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ListProducerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
