"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var core_1 = require('@angular/core');
var member_details_component_1 = require('./member-details.component');
var header_component_1 = require('./header.component');
var member_edit_component_1 = require('./member-edit.component');
console.log(header_component_1.Header);
var MEMBERS = [
    { id: 1, contact: 997001964, name: 'Pravin', Flat: 'B101', img: 'firstApp/images.png' },
    { id: 2, contact: 997001964, name: 'Rajiv', Flat: 'B102', img: 'firstApp/images.png' },
    { id: 3, contact: 997001964, name: 'Rajesh', Flat: 'B103', img: 'firstApp/images.png' },
    { id: 4, contact: 997001964, name: 'Soham', Flat: 'B104', img: 'firstApp/images.png' },
    { id: 5, contact: 997001964, name: 'Nitin', Flat: 'B105', img: 'firstApp/images.png' },
    { id: 6, contact: 997001964, name: 'Sushil', Flat: 'B106', img: 'firstApp/images.png' },
    { id: 7, contact: 997001964, name: 'Sachin', Flat: 'B107', img: 'firstApp/images.png' },
    { id: 8, contact: 997001964, name: 'Sahil', Flat: 'B108', img: 'firstApp/images.png' },
    { id: 9, contact: 997001964, name: 'Manish', Flat: 'B109', img: 'firstApp/images.png' },
    { id: 10, contact: 997001964, name: 'Pratik', Flat: 'B110', img: 'firstApp/tornado.jpg' }
];
var AppComponent = (function () {
    function AppComponent() {
        this.members = MEMBERS;
        this.selectedMember = MEMBERS[0];
    }
    AppComponent.prototype.onselect = function (member) { console.log(member); this.selectedMember = member; };
    AppComponent = __decorate([
        core_1.Component({
            selector: 'my-app',
            template: "<div class=\"container\"><app-header [titleapp]=\"apptitle\"></app-header>\n    <div class=\"row\">\n    <div class=\"col-md-6\">\n    <table class=\"table-bordered table\">\n    <tr><th>Name</th><th>Flat</th><th>Contact</th></tr>\n<tr *ngFor = \"let member of members\" (click)=\"onselect(member)\"  [class.warning]=\"member==selectedMember\" >\n    <td>{{member.name}}</td>\n    <td>{{member.Flat}}</td>\n    <td>{{member.contact}}</td>\n    </tr>\n    </table>\n    </div>\n    <div class=\"col-md-6\">\n    <member-detail [member] = \"selectedMember\"></member-detail>\n    <edit-member [member] = \"selectedMember\"></edit-member>\n    </div></div></div>",
            directives: [header_component_1.Header, member_details_component_1.MemberDetailsComponent, member_edit_component_1.MemberEditComponent]
        }), 
        __metadata('design:paramtypes', [])
    ], AppComponent);
    return AppComponent;
}());
exports.AppComponent = AppComponent;
//# sourceMappingURL=app.component.js.map