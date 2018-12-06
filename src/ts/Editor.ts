
import { FslEditorConfig, FslEditorHandle } from './fsled_types';





import * as ace from 'brace';
import 'brace/mode/javascript';
//import 'brace/mode/fsl';
import 'brace/mode/jssm';
import 'brace/theme/solarized_dark';





function EFactory(cfg: FslEditorConfig): FslEditorHandle {

  const editor = ace.edit(cfg.HostId);
        editor.getSession().setMode('ace/mode/jssm');
        editor.setTheme('ace/theme/solarized_dark');
        editor.setOptions({ enableBasicAutocompletion: true });

  let Handle: FslEditorHandle = {
    Instance : editor,
    HostId   : cfg.HostId
  };

  return Handle;

}





export { EFactory };
