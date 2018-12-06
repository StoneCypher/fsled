
import { FslEditorConfig, FslEditorHandle } from './fsled_types';





import * as ace from 'brace';
import 'brace/mode/javascript';
import 'brace/theme/monokai';





function EFactory(cfg: FslEditorConfig): FslEditorHandle {

  const editor = ace.edit(cfg.HostId);
        editor.getSession().setMode('ace/mode/javascript');
        editor.setTheme('ace/theme/monokai');

  let Handle: FslEditorHandle = {
    Instance : editor,
    HostId   : cfg.HostId
  };

  return Handle;

}





export { EFactory };
