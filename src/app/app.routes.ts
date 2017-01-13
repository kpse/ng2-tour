import {RouterModule} from "@angular/router";
import {HeroesComponent} from "./heroes/heroes.component";
import {CrisisCenterComponent} from "./crisis-center/crisis-center.component";

export const routes = [
  {path: "", component: CrisisCenterComponent},
  {path: "crisis-center", component: CrisisCenterComponent},
  {path: "heroes", component: HeroesComponent}
]

export default RouterModule.forRoot(routes)
