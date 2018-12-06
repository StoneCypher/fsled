
interface FslEditorConfig {
  Title? : string;
  HostId : string;
}

interface FslEditorHandle {
  Instance : AceAjax.Ace;
  HostId   : string;
}





export { FslEditorConfig, FslEditorHandle };
