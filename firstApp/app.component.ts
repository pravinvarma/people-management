import { Component } from '@angular/core';
import {SocMem} from './member';
import {MemberDetailsComponent} from './member-details.component';
import {Header} from './header.component';
import {MemberEditComponent} from './member-edit.component';
    console.log(Header);

const MEMBERS:SocMem[] =[
    { id: 1, contact:997001964, name: 'Pravin',Flat:'B101',img:'firstApp/images.png' },
  { id: 2,contact:997001964, name: 'Rajiv',Flat:'B102',img:'firstApp/images.png' },
  { id: 3,contact:997001964, name: 'Rajesh',Flat:'B103',img:'firstApp/images.png' },
  { id: 4,contact:997001964, name: 'Soham',Flat:'B104',img:'firstApp/images.png' },
  { id: 5,contact:997001964, name: 'Nitin',Flat:'B105',img:'firstApp/images.png' },
  { id: 6,contact:997001964, name: 'Sushil',Flat:'B106',img:'firstApp/images.png' },
  { id: 7,contact:997001964, name: 'Sachin',Flat:'B107',img:'firstApp/images.png' },
  { id:8,contact:997001964,  name: 'Sahil',Flat:'B108',img:'firstApp/images.png' },
  { id: 9,contact:997001964, name: 'Manish',Flat:'B109',img:'firstApp/images.png' },
    { id: 10,contact:997001964, name: 'Pratik',Flat:'B110',img:'firstApp/tornado.jpg' }
]




@Component({ /* Component decorator*/
    selector: 'my-app',
    template: `<div class="container"><app-header [titleapp]="apptitle"></app-header>
    <div class="row">
    <div class="col-md-6">
    <table class="table-bordered table">
    <tr><th>Name</th><th>Flat</th><th>Contact</th></tr>
<tr *ngFor = "let member of members" (click)="onselect(member)"  [class.warning]="member==selectedMember" >
    <td>{{member.name}}</td>
    <td>{{member.Flat}}</td>
    <td>{{member.contact}}</td>
    </tr>
    </table>
    </div>
    <div class="col-md-6">
    <member-detail [member] = "selectedMember"></member-detail>
    <edit-member [member] = "selectedMember"></edit-member>
    </div></div></div>`,
directives: [Header,MemberDetailsComponent,MemberEditComponent] 
})


export class AppComponent {
members= MEMBERS;
selectedMember =  MEMBERS[0];  
   
onselect(member){ console.log(member);this.selectedMember = member;}    
    
}
    