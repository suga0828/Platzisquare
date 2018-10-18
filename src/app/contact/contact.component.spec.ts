import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ContactComponent } from './contact.component';

describe('ContactComponent', () => {

    beforeEach( () => {
        TestBed.configureTestingModule({
            declarations: [ContactComponent]
        });
    });

    it('should create', () => {
        let fixture = TestBed.createComponent(ContactComponent)
        let contact = fixture.debugElement.componentInstance;
        expect(contact).toBeTruthy();
    });
});
