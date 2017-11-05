import { async } from '@angular/core/testing';
import { AssignmentHistoryComponent } from './assignmentHistory.component';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

describe('AssignmentHistoryComponent', () => {
    
    let fixture: ComponentFixture<AssignmentHistoryComponent>;
    let de: DebugElement;
    let el: HTMLElement;

    beforeEach(async(() => {
        TestBed.configureTestingModule({
            declarations: [
                AssignmentHistoryComponent
            ],
        }).compileComponents();
    }));

    it(`Is Component Created`, async(() => {
        const fixture = TestBed.createComponent(AssignmentHistoryComponent);
        let comp: AssignmentHistoryComponent;
        
        let de = fixture.debugElement.query(By.css('assignmentTable'));
        let el = de.nativeElement;
    }));

    it(`Is Data populated in the Component`, async(() => {
        const fixture = TestBed.createComponent(AssignmentHistoryComponent);
        let comp: AssignmentHistoryComponent;
        
        let de = fixture.debugElement.query(By.css('dataPopulation'));
        let el = de.nativeElement;
    }));

    it(`Check for user data clearance`, async(() => {
        const fixture = TestBed.createComponent(AssignmentHistoryComponent);
        let comp: AssignmentHistoryComponent;
        
        expect(comp.userName).toBe("");
    }));
});
