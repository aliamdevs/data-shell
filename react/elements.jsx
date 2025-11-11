import React, { useEffect, useState } from "react";
import { data_shell_array } from "../bundler/js/engine";
import ElementSelector from "./element-selector";
import { injectStyle } from "../bundler/js/utils";

export const DataShellEnv = ({shell,style,className,type = 'div'}) => {
  const [NodeLists, setNodeLists] = useState(null);
  useEffect(() => {
    const tmp = data_shell_array(shell)
    setNodeLists(tmp);
    injectStyle(tmp);
  }, [shell]);

  return (
  <React.Fragment>
    <ElementSelector
      type={type}
      style={style}
      className={className}
    >
      {NodeLists === null ? null : NodeLists.map((x,i)=>{return(<ElementSelector key={i} type={x.node} className={x.class.join(' ')} id={x.id === null ? '' : 'id="'+x.id+'"'} dsi={x.__DID}></ElementSelector>)})}
    </ElementSelector>
  </React.Fragment>
  );
};
