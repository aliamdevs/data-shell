import { injectStyle } from "./utils";
import { new_loader } from "./loader";
import { command_spliter } from "./utils";
import { new_skeleton } from "./skeleton";

export function run_data_shell_replacer (){
    function make_element(ulm){
        let childtmp = '';
        if(ulm.children.length !== 0){
            for (const elm of ulm.children) {
                childtmp += make_element(elm);
            }
        }
        return `<${ulm.node} ${ulm.id === null ? '' : 'id="'+ulm.id+'"'} class="${ulm.class.join(' ')}" data-shell-id="${ulm.__DID}" >${childtmp}</${ulm.node}>`
    }
    let GLOBAL_ELEMENTS = []
    const els = document.body.getElementsByTagName("*");
    for (let i = 0; i < els.length; i++) {
        const shell = els[i].getAttribute("data-shell");
        if (!shell) continue;
        const commands = command_spliter(shell);
        for (const elm of commands) {
            let ulm ;
            switch (elm[0]) {
                case "loader":
                    ulm = new_loader(elm);
                    break;
                case "skeleton":
                    ulm = new_skeleton(elm);
                    break;
                default:
                ulm = new_loader(elm);
                    break;
            }
            GLOBAL_ELEMENTS.push(ulm);
            els[i].innerHTML += make_element(ulm);
        }
    }
    injectStyle(GLOBAL_ELEMENTS);
}

export function data_shell_array(shell) {
    let GLOBAL_ELEMENTS = []
    if(shell){
      const commands = command_spliter(shell);
      for (const elm of commands) {
          switch (elm[0]) {
            case 'loader':
              GLOBAL_ELEMENTS.push(new_loader(elm))
              break;
            case 'skeleton':
              GLOBAL_ELEMENTS.push(new_skeleton(elm))
              break;

            default:
              break;
          }
      }
    }
    return GLOBAL_ELEMENTS
}
