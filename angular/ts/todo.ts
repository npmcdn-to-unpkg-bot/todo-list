export class Todo {

    text:string;
    done:boolean;

    constructor(text:string) {
        this.text = text;
        this.done = false;
    }
}

export var TODOS : Todo[] = [
    {
        "text": "Hello World",
        "done": false
    },
    {
        "text": "Hello World!1111",
        "done": false
    },
    {
        "text": "Hello World!2222",
        "done": true
    }
]