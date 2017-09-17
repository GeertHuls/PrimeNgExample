import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ProfileComponent } from './profile.component';
import { DragDropModule, GalleriaModule, GrowlModule, PanelModule } from 'primeng/primeng';
import { NoopAnimationsModule } from '@angular/platform-browser/animations';
import createSpy = jasmine.createSpy;
import { By } from '@angular/platform-browser';

describe('ProfileComponent', () => {
  let component: ProfileComponent;
  let fixture: ComponentFixture<ProfileComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ProfileComponent ],
      imports: [ GrowlModule, GalleriaModule, DragDropModule, PanelModule,
        NoopAnimationsModule]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ProfileComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should stop the slideshow on starting drag', () => {
    const mockGalleria = {
      activeIndex: 2,
      stopSlideshow: createSpy('stopSlideshow')
    };

    this.component.onDragStart(mockGalleria);
    expect(mockGalleria.stopSlideshow).toHaveBeenCalled();
  });

  it('should update the image on drop', () => {
    const mockGalleria = {
      activeIndex: 2,
      stopSlideshow: createSpy('stopSlideshow')
    };

    this.component.onDragStart(mockGalleria);
    this.component.onPicDrop();

    fixture.detectChanges();

    expect(component.profileImage).toEqual('http://i.pravatar.cc/300?u=Mary');
    const imgElement = fixture.debugElement.query(By.css('#profilePic')).nativeElement;
    expect(imgElement).toBeTruthy();
  });
});
