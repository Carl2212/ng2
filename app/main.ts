/**
 * Created by wxh on 2016/10/20.
 */
import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';
import { AppModule } from './root/app.module';

const platform = platformBrowserDynamic();
platform.bootstrapModule(AppModule);