import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MemeMakerComponent } from './meme-maker.component';

describe('MememakerComponent', () =>
{
  let component: MemeMakerComponent;
  let fixture: ComponentFixture<MemeMakerComponent>;

  beforeEach(async() =>
             {
               await TestBed.configureTestingModule({
                                                      declarations: [MemeMakerComponent]
                                                    })
                            .compileComponents();

               fixture   = TestBed.createComponent(MemeMakerComponent);
               component = fixture.componentInstance;
               fixture.detectChanges();
             });

  it('should create', () =>
  {
    expect(component).toBeTruthy();
  });
});
