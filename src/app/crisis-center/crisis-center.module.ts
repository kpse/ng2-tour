import {NgModule} from "@angular/core";
import {CommonModule} from "@angular/common";
import {CrisisCenterComponent} from "./crisis-center.component";
import crisisCenterRoutes from "./crisis-center.routes";

@NgModule({
  imports: [CommonModule, crisisCenterRoutes],
  declarations: [CrisisCenterComponent]
})

export default class CrisisCenterModule {
}
