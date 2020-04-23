import { AfterViewInit, Component, OnInit } from '@angular/core';
import { TranslocoService } from '@ngneat/transloco';
import { AvailableLanguages } from '../../transloco/enum';
import { Meta, Title } from '@angular/platform-browser';

@Component({
  selector: 'app-sandbox-root',
  templateUrl: './sandbox-root.component.html',
  styleUrls: ['./sandbox-root.component.scss']
})
export class SandboxRootComponent implements OnInit, AfterViewInit {
  public activeLanguage: AvailableLanguages = AvailableLanguages.English;
  public titleData = {
    name: 'Michael Jordan',
    bio: 'Former baseball player',
    image: 'avatar.png'
  };

  constructor(
    private translocoService: TranslocoService,
    private title: Title, private meta: Meta
    // private translocoToggleService: TranslocoToggleLanguageService
  ) {}

  public ngOnInit() {
    this.title.setTitle(this.titleData.name);
    this.meta.addTags([
      { name: 'twitter:card', content: 'summary' },
      { name: 'og:url', content: '/about' },
      { name: 'og:title', content: this.titleData.name },
      { name: 'og:description', content: this.titleData.bio },
      { name: 'og:image', content: this.titleData.image }
    ]);
  }


  public ngAfterViewInit() {
    // this.activeLanguage = this.translocoService.getActiveLang() as AvailableLanguages;
  }

  public onLanguageChange() {
    // this.activeLanguage = this.translocoToggleService.toggleLanguage();
  }

}
