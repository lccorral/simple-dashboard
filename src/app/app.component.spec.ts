import { HttpClientModule } from '@angular/common/http';
import { TestBed, async, ComponentFixture } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { of } from 'rxjs';
import { AppComponent } from './app.component';
import { DataListService } from './services/data-list/data-list.service';

describe('AppComponent', () => {
  let component: AppComponent;
  let fixture: ComponentFixture<AppComponent>;
  let serviceRest: DataListService;

  const MOCK = {
    "date": "2020-09-13",
    "explanation": "Are stars better appreciated for their art after they die?  Actually, stars usually create their most artistic displays as they die.  In the case of low-mass stars like our Sun and M2-9 pictured here, the stars transform themselves from normal stars to white dwarfs by casting off their outer gaseous envelopes.  The expended gas frequently forms an impressive display called a planetary nebula that fades gradually over thousands of years.  M2-9, a butterfly planetary nebula 2100 light-years away shown in representative colors, has wings that tell a strange but incomplete tale.  In the center, two stars orbit inside a gaseous disk 10 times the orbit of Pluto.  The expelled envelope of the dying star breaks out from the disk creating the bipolar appearance.  Much remains unknown about the physical processes that cause and shape planetary nebulae.   Almost Hyperspace: Random APOD Generator",
    "hdurl": "https://apod.nasa.gov/apod/image/2009/M2D9_HubbleSchmidt_985.jpg",
    "media_type": "image",
    "service_version": "v1",
    "title": "M2-9: Wings of a Butterfly Nebula",
    "url": "https://apod.nasa.gov/apod/image/2009/M2D9_HubbleSchmidt_985.jpg"
  };

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [
        RouterTestingModule,
        HttpClientModule
      ],
      declarations: [
        AppComponent
      ],
      providers: [DataListService],
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AppComponent);
    component = fixture.componentInstance;
    serviceRest = TestBed.inject(DataListService);
  });

  it('should create the app', () => {
    expect(component).toBeTruthy();
  });

  it('should call onInit', () => {
    const spyInit = spyOn(component, 'getData');
    component.ngOnInit();
    expect(spyInit).toHaveBeenCalled();
    serviceRest.getData('2020-09-13').subscribe(
      (profile) => {
        expect(profile).toEqual(MOCK);
      }
    );
  });

  it('should call getData', () => {
    component.getData();
    serviceRest.getData('2020-09-13').subscribe(
      (profile) => {
        expect(profile).toEqual(MOCK);
      }
    );
  });

  it("should call getUsers and return list of users", async(() => {
    spyOn(serviceRest, 'getData').and.returnValue(of(MOCK))

    component.getData();
    fixture.detectChanges();

    expect(serviceRest.auxData).toBeTruthy();
  }));
});
