import { async } from '@angular/core/testing';
import { EnrollmentDetailsComponent } from './enrollmentDetails.component';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

describe('AssignmentHistoryComponent', () => {
    
    let fixture: ComponentFixture<EnrollmentDetailsComponent>;
    let de: DebugElement;
    let el: HTMLElement;

    beforeEach(async(() => {
        TestBed.configureTestingModule({
            declarations: [
                EnrollmentDetailsComponent
            ],
        }).compileComponents();
    }));

    it(`Is Component Created`, async(() => {
        const fixture = TestBed.createComponent(EnrollmentDetailsComponent);
        let comp: EnrollmentDetailsComponent;
        
        let de = fixture.debugElement.query(By.css('enrollmentTable'));
        let el = de.nativeElement;
    }));

    it(`Is Enrollment Data populated`, async(() => {
        const fixture = TestBed.createComponent(EnrollmentDetailsComponent);
        let comp: EnrollmentDetailsComponent;
        
        let de = fixture.debugElement.query(By.css('enrollmentData'));
        let el = de.nativeElement;
    }));

    it(`Check for Data is not persisting after logout`, async(() => {
        const fixture = TestBed.createComponent(EnrollmentDetailsComponent);
        let comp: EnrollmentDetailsComponent;
        
        expect(comp.userName).toBe("");
    }));

    it(`Check for user data clearance`, async(() => {
        const fixture = TestBed.createComponent(EnrollmentDetailsComponent);
        let comp: EnrollmentDetailsComponent;
        
        expect(comp.studentDet).toBe("");
    }));
});
