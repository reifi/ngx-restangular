import { ModuleWithProviders, NgModule, Optional, SkipSelf, InjectionToken } from '@angular/core';
import { provideHttpClient, withInterceptorsFromDi } from '@angular/common/http';
import { RESTANGULAR, RestangularFactory } from './ngx-restangular.config';
import { Restangular } from './ngx-restangular';
import { RestangularHttp } from './ngx-restangular-http';

export const CONFIG_OBJ = new InjectionToken<string>('configObj');

@NgModule({ imports: [], providers: [RestangularHttp, Restangular, provideHttpClient(withInterceptorsFromDi())] })
export class RestangularModule {

  constructor(@Optional() @SkipSelf() parentModule: RestangularModule) {
    if (parentModule) {
      throw new Error(
        'RestangularModule is already loaded. Import it in the AppModule only');
    }
  }

  static forRoot(configFunction?: (provider: any, ...arg: any[]) => void): ModuleWithProviders<RestangularModule>;
  static forRoot(providers?: any[], configFunction?: (provider: any, ...arg: any[]) => void): ModuleWithProviders<RestangularModule>;
  static forRoot(config1?, config2?): ModuleWithProviders<RestangularModule> {
    return {
      ngModule: RestangularModule,
      providers: [
        {provide: CONFIG_OBJ, useValue: [config1, config2]},
        {provide: RESTANGULAR, useFactory: RestangularFactory, deps: [CONFIG_OBJ]},
      ]
    };
  }

}
