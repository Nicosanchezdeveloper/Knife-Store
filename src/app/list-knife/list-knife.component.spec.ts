import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListKnifeComponent } from './list-knife.component';

describe('ListKnifeComponent', () => {
  let component: ListKnifeComponent;
  let fixture: ComponentFixture<ListKnifeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ListKnifeComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ListKnifeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
