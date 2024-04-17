/// <reference types="@angular/localize" />
<<<<<<< HEAD:Frontend/HarwareHaven/src/main.ts
=======

import { bootstrapApplication } from '@angular/platform-browser';
import { appConfig } from './app/app.config';
import { AppComponent } from './app/app.component';
>>>>>>> Goingon20240411:Frontend/HardwareHaven/src/main.ts

import { bootstrapApplication } from '@angular/platform-browser';
import { HomeComponent } from './app/home/home.component.js';
bootstrapApplication(HomeComponent)
  .catch((err) => console.error(err));
