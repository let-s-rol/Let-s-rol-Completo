import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ForumTopicDetailComponent } from './forum-topic-detail.component';

describe('ForumTopicDetailComponent', () => {
  let component: ForumTopicDetailComponent;
  let fixture: ComponentFixture<ForumTopicDetailComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ForumTopicDetailComponent]
    });
    fixture = TestBed.createComponent(ForumTopicDetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
