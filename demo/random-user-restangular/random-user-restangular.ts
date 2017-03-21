import {InjectionToken} from "@angular/core";
import {Restangular} from "../../src/ng2-restangular";

export const RANDOM_USER = new InjectionToken<string>('RandomUser');
export function RestangularRandomUserFactory(restangular: Restangular) {
  return restangular.withConfig((RestangularConfigurer) => {
    RestangularConfigurer.setBaseUrl('https://randomuser.me/api/');
  });
}