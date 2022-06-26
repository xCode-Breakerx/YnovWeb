import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MaterialIcon360Component } from './material-icon360.component';

describe('Materialicon360Component', () =>
{
  let component: MaterialIcon360Component;
  let fixture: ComponentFixture<MaterialIcon360Component>;

  beforeEach(async() =>
             {
               await TestBed.configureTestingModule({
                                                      declarations: [MaterialIcon360Component]
                                                    })
                            .compileComponents();

               fixture   = TestBed.createComponent(MaterialIcon360Component);
               component = fixture.componentInstance;
               fixture.detectChanges();
             });

  it('should create', () =>
  {
    expect(component).toBeTruthy();
  });
});
