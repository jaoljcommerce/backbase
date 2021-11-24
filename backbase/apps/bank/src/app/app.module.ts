import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { PreloadAllModules, RouterModule } from '@angular/router';
import { HttpClientModule } from '@angular/common/http';
import {
  translocoConfig,
  TranslocoModule,
  TRANSLOCO_CONFIG,
  TRANSLOCO_LOADER,
} from '@ngneat/transloco';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgxsModule } from '@ngxs/store';
import { NgxsFormPluginModule } from '@ngxs/form-plugin';

import { SharedComponentsModule } from '@backbase/shared/components';

import { AppComponent } from './app.component';
import { AppRouting } from './app.routing';
import { PageComponent } from './components/page/page.component';
import { HeaderComponent } from './components/header/header.component';
import { FooterComponent } from './components/footer/footer.component';
import { environment } from '../environments/environment';
import { TranslocoHttpLoader } from './core/translation/transloco-http-loader.service';

@NgModule({
  declarations: [AppComponent, PageComponent, HeaderComponent, FooterComponent],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    HttpClientModule,
    RouterModule.forRoot(AppRouting, {
      initialNavigation: 'enabled',
      preloadingStrategy: PreloadAllModules,
    }),
    NgxsModule.forRoot([], {
      developmentMode: !environment.production,
      selectorOptions: {
        injectContainerState: false,
        suppressErrors: false,
      },
    }),
    NgxsFormPluginModule.forRoot(),
    TranslocoModule,
    SharedComponentsModule,
  ],
  providers: [
    {
      provide: TRANSLOCO_LOADER,
      useClass: TranslocoHttpLoader,
    },
    {
      provide: TRANSLOCO_CONFIG,
      useValue: translocoConfig({
        availableLangs: ['en'],
        defaultLang: 'en',
        reRenderOnLangChange: true,
        prodMode: environment.production,
      }),
    },
  ],
  bootstrap: [AppComponent],
})
export class AppModule {}
