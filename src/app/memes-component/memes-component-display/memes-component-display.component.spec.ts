import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MemesComponentDisplayComponent } from './memes-component-display.component';

describe('MemesComponentDisplayComponent', () => {
  let component: MemesComponentDisplayComponent;
  let fixture: ComponentFixture<MemesComponentDisplayComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MemesComponentDisplayComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MemesComponentDisplayComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
