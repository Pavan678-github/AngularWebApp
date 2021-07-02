import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TrumbowygComponent } from './trumbowyg.component';

describe('TrumbowygComponent', () => {
  let component: TrumbowygComponent;
  let fixture: ComponentFixture<TrumbowygComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TrumbowygComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TrumbowygComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
