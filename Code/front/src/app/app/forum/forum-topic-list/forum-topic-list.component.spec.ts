import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ForumTopicListComponent } from './forum-topic-list.component';

describe('ForumTopicListComponent', () => {
  let component: ForumTopicListComponent;
  let fixture: ComponentFixture<ForumTopicListComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ForumTopicListComponent]
    });
    fixture = TestBed.createComponent(ForumTopicListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
