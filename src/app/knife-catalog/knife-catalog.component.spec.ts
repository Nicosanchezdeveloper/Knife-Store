import { ComponentFixture, TestBed } from '@angular/core/testing';

import { KnifeCatalogComponent } from './knife-catalog.component';

describe('KnifeCatalogComponent', () => {
  let component: KnifeCatalogComponent;
  let fixture: ComponentFixture<KnifeCatalogComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [KnifeCatalogComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(KnifeCatalogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
