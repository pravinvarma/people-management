import { Component, Input } from '@angular/core';
import { SocMem } from './member';
    console.log('ds'+SocMem);
@Component({
selector:'member-detail',
    template:`
    <div class="pull-left">
    <img src={{member.img}} width="100" height="100"/>
    </div>
    <div class="col-md-6">
    <h2 >{{member.name}}  <small>{{member.Flat}}</small></h2>
   

    </div>
    <div class="clearfix"></div>
    
    `
})

export class MemberDetailsComponent{
@Input()
member:SocMem;

}
   