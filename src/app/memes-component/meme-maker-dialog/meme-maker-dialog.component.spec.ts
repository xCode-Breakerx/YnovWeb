import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MemeMakerDialogComponent } from './meme-maker-dialog.component';

describe('MemeMakerDialogComponent', () =>
{
  let component: MemeMakerDialogComponent;
  let fixture: ComponentFixture<MemeMakerDialogComponent>;

  beforeEach(async() =>
             {
               await TestBed.configureTestingModule({
                                                      declarations: [MemeMakerDialogComponent]
                                                    })
                            .compileComponents();

               fixture   = TestBed.createComponent(MemeMakerDialogComponent);
               component = fixture.componentInstance;
               fixture.detectChanges();
             });

  it('should create', () =>
  {
    expect(component).toBeTruthy();
  });
});
