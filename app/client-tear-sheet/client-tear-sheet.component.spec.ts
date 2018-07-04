import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ClientTearSheetComponent } from './client-tear-sheet.component';

describe('ClientTearSheetComponent', () => {
  let component: ClientTearSheetComponent;
  let fixture: ComponentFixture<ClientTearSheetComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ClientTearSheetComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ClientTearSheetComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
