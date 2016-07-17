import {Component, Input} from '@angular/core';
import {MemberDetailsComponent} from './member-details.component';
import {SocMem} from './member';

    @Component({
        selector:'edit-member',
        template:`

  <ul class="nav nav-tabs" role="tablist" style="margin:30px 0 0 0">
    <li role="presentation" class="active"><a href="#edit" aria-controls="home" role="tab" data-toggle="tab">Edit</a></li>
    <li role="presentation"><a href="#message" aria-controls="message" role="tab" data-toggle="tab">Message</a></li>

  </ul>        
<div class="tab-content" >       
<div role="tabpanel" class="tab-pane active" id="edit">
<div class="form-group"><input [(ngModel)] = member.name type="text" class="form-control"/></div>
<div class="form-group"><input [(ngModel)] = member.Flat type="text" class="form-control"/></div>
<div class="form-group"><input [(ngModel)] = member.contact type="text" class="form-control"/></div>
<input type='button' value='Submit' class="btn btn-success"/><input type='button' value='Delete' class="btn btn-danger"/>
</div>
<div role="tabpanel" class="tab-pane" id="message"><div><textarea class="form-control"></textarea></div>  </div>      
</div>              
`
})

export class MemberEditComponent{
 @Input()
member:SocMem;
 
}