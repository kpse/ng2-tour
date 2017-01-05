/* tslint:disable:no-unused-variable */
import {async, ComponentFixture, TestBed} from "@angular/core/testing";
import {HomeComponent} from "./home.component";
import {ComponentFactoryResolver} from "@angular/core";
import {SimpleFormComponent} from "../simple-form/simple-form.component";
import {BrowserDynamicTestingModule} from "@angular/platform-browser-dynamic/testing";
import {FormsModule} from "@angular/forms";
import {BasicComponent} from "../basic/basic.component";
import {FirstDirective} from "../directives/first.directive";

describe('HomeComponent', () => {
  let component: HomeComponent;
  let fixture: ComponentFixture<HomeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HomeComponent, SimpleFormComponent, FirstDirective, BasicComponent ],
      imports: [ FormsModule ]
    });
    TestBed.overrideModule(BrowserDynamicTestingModule, {
      set: {
        entryComponents: [ SimpleFormComponent ],
      },
    });
    TestBed.compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HomeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
