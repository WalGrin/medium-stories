import { NgModule } from '@angular/core';
import { ServerModule, ServerTransferStateModule } from '@angular/platform-server';
import { TranslateLoader, TranslateModule } from '@ngx-translate/core';

import { APP_DIST } from '@medium-stories/common';
import { serverTranslateFactory, TRANSLATION_PREFIX, TRANSLATION_SUFFIX } from '@medium-stories/translation';

import { AppComponent } from './app.component';
import { AppModule } from './app.module';

@NgModule({
  imports: [
    AppModule,
    ServerModule,
    TranslateModule.forRoot({
      loader: {
        provide: TranslateLoader,
        useFactory: serverTranslateFactory,
        deps: [APP_DIST, TRANSLATION_PREFIX, TRANSLATION_SUFFIX]
      }
    }),
    ServerTransferStateModule
  ],
  providers: [
    {
      provide: APP_DIST,
      useValue: 'frontend/infinite-scroll'
    }
  ],
  bootstrap: [AppComponent]
})
export class AppServerModule {}
