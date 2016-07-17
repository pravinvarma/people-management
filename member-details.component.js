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
console.log('ds' + member_1.SocMem);
var MemberDetailsComponent = (function () {
    function MemberDetailsComponent() {
    }
    __decorate([
        core_1.Input(), 
        __metadata('design:type', member_1.SocMem)
    ], MemberDetailsComponent.prototype, "member", void 0);
    MemberDetailsComponent = __decorate([
        core_1.Component({
            selector: 'member-detail',
            template: "\n    <div class=\"pull-left\">\n    <img src={{member.img}} width=\"100\" height=\"100\"/>\n    </div>\n    <div class=\"col-md-6\">\n    <h2 >{{member.name}}  <small>{{member.Flat}}</small></h2>\n   \n\n    </div>\n    <div class=\"clearfix\"></div>\n    \n    "
        }), 
        __metadata('design:paramtypes', [])
    ], MemberDetailsComponent);
    return MemberDetailsComponent;
}());
exports.MemberDetailsComponent = MemberDetailsComponent;
//# sourceMappingURL=member-details.component.js.map