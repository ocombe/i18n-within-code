import { I18n } from "app/i18n";

export class MyI18nDefs {
    // one parameter decorator, based on current html attributes
    @I18n("m|d@@id") title = "It works";

    // no @I18n decorator if we only provide a simple message ?
    // you can use params with key names if you use an object of params
    msgWithParams = "Some message with params {$someParam} & {$otherParam} (and again {$someParam})";
    // also works with numeric params if you use an array of params
    otherMsgWithParams = "Some other message with params {$0} & {$1} (and again {$0})";
}

export class MyOtherI18nDefs {
    // alternative: object parameter decorator
    @I18n({
        id: "id",
        meaning: "m",
        description: "d"
    })
    test = "Test";
}