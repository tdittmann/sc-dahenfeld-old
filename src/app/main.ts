import {platformBrowserDynamic} from '@angular/platform-browser-dynamic';

import {AppModule} from './app.module';
import {enableProdMode} from "@angular/core";
import {registerLocaleData} from "@angular/common";
import localeDe from '@angular/common/locales/de';

enableProdMode();
registerLocaleData(localeDe);

platformBrowserDynamic().bootstrapModule(AppModule);
