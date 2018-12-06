
import { FslEditorConfig, FslEditorHandle } from './fsled_types';
import { EFactory }                         from './Editor';

let Handle: FslEditorHandle = undefined;





function bootstrap(cfg: FslEditorConfig): FslEditorHandle {
  return EFactory(cfg);
}





export { bootstrap };
