import { NgModule } from '@angular/core'
import { BrowserModule} from '@angular/platform-browser'
import { RouterModule} from '@angular/router'
import { FormsModule, ReactiveFormsModule } from '@angular/forms'

import {
    EventsListComponent,
    EventThumbnailComponent,
    EventService,
    EventDetailsComponent,
    CreateEventComponent,
    EventRouteActivator,
    EventListResolver,
    CreateSessionComponent,
    SessionListCompoent,
    DurationPipe
} from './events/index'

import { EventsAppComponent } from './events-app-component'
import { NavBarComponent } from './nav/navbar.component'

import { JQ_TOKEN,
     CollapsibleWellComponent, 
     TOASTR_TOKEN, 
     Toastr,
     SimpleModalComponent,
     ModalTriggerDirective
} from './common/index'

import { appRoutes} from './routes'
import { Error404Component } from './errors/404.component'

import { AuthService } from './user/auth.service'

declare let toastr: Toastr
declare let jQuery: Object;

@NgModule({
    imports: [
        BrowserModule,
        FormsModule,
        ReactiveFormsModule,
        RouterModule.forRoot(appRoutes)
    ],
    declarations: [
        EventsAppComponent, 
        EventsListComponent,
        EventThumbnailComponent,
        NavBarComponent,
        EventDetailsComponent,
        CreateEventComponent,
        Error404Component,
        CreateSessionComponent,
        SessionListCompoent,
        CollapsibleWellComponent,
        DurationPipe,
        SimpleModalComponent,
        ModalTriggerDirective
    ],
    providers: [
        EventService,
        {
            provide: TOASTR_TOKEN,
            useValue: toastr
        },
        { 
            provide: JQ_TOKEN,
            useValue: jQuery
        },
        EventRouteActivator,
        {
            provide: 'canDeactivateCreateEvent', 
            useValue: checkDirtyState 
        },
        EventListResolver,
        AuthService
    ],
    bootstrap: [EventsAppComponent]
})
export class AppModule {}

function checkDirtyState(component:CreateEventComponent) {
    if (component.isDirty)
        return window.confirm('You have not saved this event, are you sure you want to continue?')
    
    return true
}