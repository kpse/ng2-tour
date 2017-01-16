import {RouterModule} from "@angular/router";
import {HeroesComponent} from "./heroes/heroes.component";
import {CrisisCenterComponent} from "./crisis-center/crisis-center.component";

export const routes = [
  {path: "", redirectTo: 'heroes', pathMatch: 'full'},
  // {path: "crisis-center", loadChildren: 'app/crisis-center/crisis-center.module'},
  {path: "crisis-center", component: CrisisCenterComponent},
  {path: "heroes", component: HeroesComponent}
]

export default RouterModule.forRoot(routes)
