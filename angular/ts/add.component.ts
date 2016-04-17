import {Component, Input} from 'angular2/core';
import {Todo} from "./todo";
@Component({
    selector:'add',
    templateUrl:'add.html',
    input: ['addItem']
})
export class AddComponent {
    text:string

    @Input() addItem : (todo:Todo) => void;
    
    onkey(event:any) {
        if(event.keyCode==13) {
            this.addItem(new Todo(this.text));
            this.text = "";
        }
    }

}
