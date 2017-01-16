import {RouterModule} from "@angular/router";
import {HeroesComponent} from "./heroes/heroes.component";
import {CrisisCenterComponent} from "./crisis-center/crisis-center.component";
import {HeroComponent} from "./hero/hero.component";

export const routes = [
  {path: "", redirectTo: 'heroes', pathMatch: 'full'},
  // {path: "crisis-center", loadChildren: 'app/crisis-center/crisis-center.module'},
  {path: "crisis-center", component: CrisisCenterComponent},
  {path: "heroes", component: HeroesComponent},
  {path: "hero/:id", component: HeroComponent}
]

export default RouterModule.forRoot(routes)
