import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AlbumPageComponent } from './album-page.component';

describe('AlbumPageComponent', () => {
  let component: AlbumPageComponent;
  let fixture: ComponentFixture<AlbumPageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AlbumPageComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(AlbumPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
