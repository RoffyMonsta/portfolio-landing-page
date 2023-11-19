import { Component } from '@angular/core';
import { assetUrl } from 'src/single-spa/asset-url';

export interface IContactMeMethod {
  textValue: string;
  iconPath: string;
  link: string;
  displayValue: string;
}
@Component({
  selector: 'app-contact-me',
  templateUrl: './contact-me.component.html',
  styleUrls: ['./contact-me.component.scss']
})
export class ContactMeComponent {

  emailIconPath = assetUrl('/icons/email.svg');
  linkedinIconPath = assetUrl('/icons/linkedin.svg');
  githubIconPath = assetUrl('/icons/github.svg');
  cvIconPath = assetUrl('/icons/cv.svg');

  contactMeMethods: IContactMeMethod[] = [
    {
      textValue: 'Write me',
      iconPath: assetUrl('/icons/email.svg'),
      link: 'mailto:anton.lomovatskyi@gmail.com?subject = Hey Anton!',
      displayValue: 'anton.lomovatskyigmail.com'
    },
    {
      textValue: 'Connect on',
      iconPath: assetUrl('/icons/linkedin.svg'),
      link: 'https://www.linkedin.com/in/anton-lomovatskyi-17a9661b1/',
      displayValue: 'LinkedIn'
    },
    {
      textValue: 'Follow me on',
      iconPath: assetUrl('/icons/github.svg'),
      link: 'https://github.com/RoffyMonsta/',
      displayValue: 'GitHub'
    },
    {
      textValue: 'Get my CV',
      iconPath: assetUrl('/icons/cv.svg'),
      link: '/anton-lomovatskyi-cv.pdf',
      displayValue: 'CV in PDF format'
    },
    {
      textValue: 'Write me in',
      iconPath: assetUrl('/icons/telegram.svg'),
      link: 'https://t.me/antsh_suzylee',
      displayValue: 'Telegram'
    },
    {
      textValue: 'Call me by phone',
      iconPath: assetUrl('/icons/phone.svg'),
      link: 'tel:+380990295403',
      displayValue: '+380990295403'
    },
  ]
}
