import { Component } from '@angular/core';

    @Component({
        selector:'app-header',
        template:`<nav class="navbar navbar-inverse "><div class="navbar-header"><a href="#" class="navbar-brand">{{titleapp}}</a></div></nav>`
        })

export class Header{
    titleapp='People Management Application';
}