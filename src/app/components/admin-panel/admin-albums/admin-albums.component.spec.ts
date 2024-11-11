import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminAlbumsComponent } from './admin-albums.component';

describe('AdminAlbumsComponent', () => {
  let component: AdminAlbumsComponent;
  let fixture: ComponentFixture<AdminAlbumsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AdminAlbumsComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(AdminAlbumsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
