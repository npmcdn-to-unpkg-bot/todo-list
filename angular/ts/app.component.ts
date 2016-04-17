import {Component} from 'angular2/core'
import {TodoComponent} from './todo.component'
import {AddComponent} from './add.component'
import {Todo, TODOS} from './todo'

@Component({
    selector:'app',
    templateUrl:'main.html',
    directives : [
        TodoComponent,
        AddComponent
    ]
})
export class AppComponent {
    todos : Todo[] = [];

    addTodo : (todo:Todo) => void = (todo:Todo) => {
        this.todos.push(todo)
    }
}