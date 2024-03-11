import * as handlebars from "handlebars"
import { emailTokenTemplate } from "./email"


export function compileEmailTokenTemplate(name: string, token: string, date: string){
    const template = handlebars.compile(emailTokenTemplate)
    const htmlBody = template({
        name,
        token,
        date
    })
    return htmlBody
}