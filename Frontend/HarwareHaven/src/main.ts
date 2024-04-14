/// <reference types="@angular/localize" />

import { bootstrapApplication } from '@angular/platform-browser';
import { HomeComponent } from './app/home/home.component.js';
bootstrapApplication(HomeComponent)
  .catch((err) => console.error(err));
