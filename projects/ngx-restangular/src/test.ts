// This file is required by karma.conf.js and loads recursively all the .spec and framework files

import 'zone.js/dist/zone';
import 'zone.js/dist/zone-testing';
import { getTestBed } from '@angular/core/testing';
import {
  BrowserDynamicTestingModule
} from '@angular/platform-browser-dynamic/testing';
import { platformBrowserTesting } from "@angular/platform-browser/testing";

// First, initialize the Angular testing environment.
getTestBed().initTestEnvironment(
  BrowserDynamicTestingModule,
  platformBrowserTesting(),
  {
    teardown: { destroyAfterEach: false }
  }
);
