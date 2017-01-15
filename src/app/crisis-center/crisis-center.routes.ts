import {RouterModule} from "@angular/router";
import {CrisisCenterComponent} from "./crisis-center.component";

const routes = [
  {path: '', component: CrisisCenterComponent}
]

export default RouterModule.forChild(routes)
