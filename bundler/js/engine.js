function run_data_shell_replacer (){
    let GLOBAL_ELEMENTS = []
    const els = document.body.getElementsByTagName("*");
    for (let i = 0; i < els.length; i++) {
        const shell = els[i].getAttribute("data-shell");
        if (!shell) continue;
        const commands = command_spliter(shell);
        for (const elm of commands) {
            if (elm[0] === "loader") {
                const ulm = new_loader(elm)
                GLOBAL_ELEMENTS.push(ulm)
                els[i].innerHTML += `<${ulm.node} ${ulm.id === null ? '' : 'id="'+ulm.id+'"'} class=${ulm.class.join(' ')} data-shell-id=${ulm.__DID} >${ulm.children.join('')}</${ulm.node}>`
            };
        }
    }
    injectStyle(GLOBAL_ELEMENTS);
}

import { new_loader } from "./loader";
import { command_spliter } from "./utils";

export function data_shell_array(shell) {
    let GLOBAL_ELEMENTS = []
    if(shell){
      const commands = command_spliter(shell);
      for (const elm of commands) {
          if (elm[0] === "loader") {
              GLOBAL_ELEMENTS.push(new_loader(elm))
          };
      }
    }
    return GLOBAL_ELEMENTS
}
