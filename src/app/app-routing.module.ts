import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";
import { JhayxComponent } from "./jhayx/jhayx.component";

const routes: Routes = [{ path: "", component: JhayxComponent }];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
