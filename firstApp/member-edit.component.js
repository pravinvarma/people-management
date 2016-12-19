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
var member_1 = require('./member');
var MemberEditComponent = (function () {
    function MemberEditComponent() {
    }
    __decorate([
        core_1.Input(), 
        __metadata('design:type', member_1.SocMem)
    ], MemberEditComponent.prototype, "member", void 0);
    MemberEditComponent = __decorate([
        core_1.Component({
            selector: 'edit-member',
            template: "\n\n  <ul class=\"nav nav-tabs\" role=\"tablist\" style=\"margin:30px 0 0 0\">\n    <li role=\"presentation\" class=\"active\"><a href=\"#edit\" aria-controls=\"home\" role=\"tab\" data-toggle=\"tab\">Edit</a></li>\n    <li role=\"presentation\"><a href=\"#message\" aria-controls=\"message\" role=\"tab\" data-toggle=\"tab\">Message</a></li>\n\n  </ul>        \n<div class=\"tab-content\" >       \n<div role=\"tabpanel\" class=\"tab-pane active\" id=\"edit\">\n<div class=\"form-group\"><input [(ngModel)] = member.name type=\"text\" class=\"form-control\"/></div>\n<div class=\"form-group\"><input [(ngModel)] = member.Flat type=\"text\" class=\"form-control\"/></div>\n<div class=\"form-group\"><input [(ngModel)] = member.contact type=\"text\" class=\"form-control\"/></div>\n<input type='button' value='Submit' class=\"btn btn-success\"/><input type='button' value='Delete' class=\"btn btn-danger\"/>\n</div>\n<div role=\"tabpanel\" class=\"tab-pane\" id=\"message\"><div><textarea class=\"form-control\"></textarea></div>  </div>      \n</div>              \n"
        }), 
        __metadata('design:paramtypes', [])
    ], MemberEditComponent);
    return MemberEditComponent;
}());
exports.MemberEditComponent = MemberEditComponent;
//# sourceMappingURL=member-edit.component.js.map