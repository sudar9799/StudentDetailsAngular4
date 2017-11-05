import { async } from '@angular/core/testing';
import { StudentDetailComponent } from './studentdetails.component';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

describe('StudentDetailComponent', () => {
    
    let fixture: ComponentFixture<StudentDetailComponent>;
    let de: DebugElement;
    let el: HTMLElement;

    beforeEach(async(() => {
        TestBed.configureTestingModule({
            declarations: [
                StudentDetailComponent
            ],
        }).compileComponents();
    }));

    it(`Is Student Component Created`, async(() => {
        const fixture = TestBed.createComponent(StudentDetailComponent);
        let comp: StudentDetailComponent;
        
        let de = fixture.debugElement.query(By.css('studentDetailsTable'));
        let el = de.nativeElement;
    }));

    it(`Is Student Details populated`, async(() => {
        const fixture = TestBed.createComponent(StudentDetailComponent);
        let comp: StudentDetailComponent;
        
        let de = fixture.debugElement.query(By.css('studentGridData'));
        let el = de.nativeElement;
        
        expect(comp.userName).toBe("");
    }));

    it(`Check for Data is not persisting after logout`, async(() => {
        const fixture = TestBed.createComponent(StudentDetailComponent);
        let comp: StudentDetailComponent;
        
        expect(comp.userName).toBe("");
    }));

});
