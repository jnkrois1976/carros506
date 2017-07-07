import { BrowserModule } from '@angular/platform-browser';
import { HttpModule } from '@angular/http';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SectionsModule } from "app/sections/sections.module";
import { LayoutModule } from "app/layout/layout.module";
import { HeaderComponent } from "app/layout/header/header.component";
import { NavComponent } from "app/layout/nav/nav.component";
import { ContentComponent } from "app/layout/content/content.component";
import { FooterComponent } from "app/layout/footer/footer.component";
import { CarmakesService } from './services/carmakes.service';

@NgModule({
  declarations: [
    AppComponent,
	HeaderComponent,
	NavComponent,
	ContentComponent,
	FooterComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
	LayoutModule,
	SectionsModule,
	HttpModule
  ],
  providers: [CarmakesService],
  bootstrap: [AppComponent]
})
export class AppModule { }
