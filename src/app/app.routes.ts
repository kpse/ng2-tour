import {RouterModule} from "@angular/router";
import {HeroesComponent} from "./heroes/heroes.component";
import {HomeComponent} from "./home/home.component";
import {CrisisCenterComponent} from "./crisis-center/crisis-center.component";

export const routes = [
  {path: "", component: HomeComponent},
  // {path: "crisis-center", loadChildren: 'app/crisis-center/crisis-center.module#CrisisCenterModule'},
  {path: "crisis-center", component: CrisisCenterComponent},
  {path: "heroes", component: HeroesComponent}
]

export default RouterModule.forRoot(routes)
