import React, { useEffect, useState } from "react";
import { data_shell_array } from "../bundler/js/engine";
import { injectStyle } from "../bundler/js/utils";
import ElementSelector from "./element-selector";

export const DataShellEnv = ({shell,style,className,type = 'div'}) => {
  const [NodeLists, setNodeLists] = useState(null);
  useEffect(() => {
    const tmp = data_shell_array(shell)
    setNodeLists(tmp);
    injectStyle(tmp);
  }, [shell]);

  const MakeElement = ({nodelist})=>{
    return(<React.Fragment>
      {nodelist === null ? null : nodelist.map((x,i)=>{return(<ElementSelector key={i} type={x.node} className={x.class.join(' ')} id={x.id === null ? '' : 'id="'+x.id+'"'} dsi={x.__DID}>{x.children.length !== 0 ? <MakeElement nodelist={x.children}/> : null}</ElementSelector>)})}
    </React.Fragment>)
  }

  return (
  <React.Fragment>
    <ElementSelector
      type={type}
      style={style}
      className={className}
    >
      <MakeElement nodelist={NodeLists}/>
    </ElementSelector>
  </React.Fragment>
  );
};
