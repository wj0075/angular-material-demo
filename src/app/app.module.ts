import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

// 路由相关


import { AppComponent } from './app.component';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {ShareMaterialModule} from './shareMaterialModule';
import {AppRoutingModule} from './app-routing.module';
import { DashboardComponent } from './dashboard/dashboard.component';

// 想要取消动效的话，可以改为加入NoopAnimationsModule
// 如果想要所有的浏览器支持动效，需要安装web-animation.js
// npm install --save web-animations-js
// 在src/polyfills.ts 解禁 import 'web-animations-js'
// 在style.css中引入主题css文件@import "~@angular/material/prebuilt-themes/indigo-pink.css";

// 手势支持 hammer.js npm i,
//     DashboardComponentnstall --save hammerjs
// 在src/main.ts 引入import 'hammerjs';
 @NgModule({
  declarations: [
    AppComponent,
    DashboardComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    AppRoutingModule,
    ShareMaterialModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
