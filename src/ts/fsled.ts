
import { FslEditorConfig, FslEditorHandle } from './fsled_types';

let Handle: FslEditorHandle = { Host: undefined };





function bootstrap(cfg: FslEditorConfig): FslEditorHandle {

  Handle.Host = cfg.Host;
  return Handle;

}





export { bootstrap };
