import {Component, Input} from 'angular2/core';
import {Todo} from "./todo";

@Component({
    selector:'todo',
    templateUrl:'todo.html',
    inputs:['todo']
})
export class TodoComponent {
    todo : Todo
}
