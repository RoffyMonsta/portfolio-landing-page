import { Component } from '@angular/core';

export interface IContactMeMethod {
  textValue: string;
  link: string;
  displayValue: string;
}
@Component({
  selector: 'app-contact-me',
  templateUrl: './contact-me.component.html',
  styleUrls: ['./contact-me.component.scss']
})
export class ContactMeComponent {

  contactMeMethods: IContactMeMethod[] = [
    {
      textValue: 'Write me',
      link: 'mailto:anton.lomovatskyi@gmail.com?subject = Hey Anton!',
      displayValue: 'anton.lomovatskyi@gmail.com'
    },
    {
      textValue: 'Connect on',
      link: 'https://www.linkedin.com/in/anton-lomovatskyi-17a9661b1/',
      displayValue: 'LinkedIn'
    },
    {
      textValue: 'Follow me on',
      link: 'https://github.com/RoffyMonsta/',
      displayValue: 'GitHub'
    },
    {
      textValue: 'Get my CV',
      link: '/anton-lomovatskyi-cv.pdf',
      displayValue: 'CV in PDF format'
    },
    {
      textValue: 'Write me in',
      link: 'https://t.me/antsh_suzylee',
      displayValue: 'Telegram'
    },
    {
      textValue: 'Call me by phone',
      link: 'tel:+380990295403',
      displayValue: '+380990295403'
    },
  ]
}
