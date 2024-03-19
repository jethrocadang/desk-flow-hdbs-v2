import * as handlebars from "handlebars"
import { emailTokenTemplate } from "./email"


export function compileEmailTokenTemplate(firstName: string, token: string, date: string){
    const template = handlebars.compile(emailTokenTemplate)
    const htmlBody = template({
        firstName,
        token,
        date
    })
    return htmlBody
}