import { RanString ,isNumeric } from "./utils";
export function new_skeleton(command){
  let tempelate = "x1";
  const UINIQE = RanString(14);
  const _px = 10
  let _s=3 ,_a = 'round', _w ='380px' , _c1="#e4e4e4ff", _c2="#d8d8d8ff" , _cb='#f8f8f8ff' ,_f = false,_cbb="#f2f2f2" ,_rev=false , __ID=null , _p = false ;
  let i = 1;
  while(command[i]!==undefined){
    if(command[i][0] === '$'){
      __ID=command[i].replace(/^\$/, "");
      i++;
    }else if(command[i][0] === '-'){
      let tmp_px = true
      switch (command[i]) {
        case '-s':
        case '--scale':
          tmp_px = isNumeric(command[i+1]);
          _s = tmp_px ? parseFloat(command[i+1]) : 3.0;
          break;
        case '-w':
        case '--width':
          tmp_px = isNumeric(command[i+1][command[i+1].length-1]);
          _w = tmp_px ? command[i+1] + 'px' : command[i+1];
          break;
        case '-b':
        case '--background-color':
          _cb = command[i+1];
          break;
        case '-a':
        case '--avatar':
          _a = command[i+1];
          break;
        case '--border-color':
          _cbb = command[i+1];
          break;
        case '-c':
        case '--color':
          _c1 = command[i+1];
          _c2 = command[i+2];
          i++;
          break;
        case '-1':
          tempelate = 'x1';
          _s = 2.8;
          _w = "380px";
          i--;
          break;
        case '-2':
          tempelate = 'x2';
          _w= '380px';
          _a = 'square';
          i--;
          break;
        case '-3':
          tempelate = 'x3';
          _w= '230px';
          i--;
          break;
        case '-4':
          tempelate = 'x4';
          _a = 'square';
          _w = '200px'
          i--;
          break;
        default:
          i--;
          break;
      }
      i+=2
    }else{
      switch (command[i]) {
        case 'large':
          _s=4;
          break;
        case 'normal':
          _s=3;
          break;
        case 'small':
          _s=2;
          break;
        case "sharp":
          _p = true;
          break;
        case "reverse":
          _rev = true;
          break;
        case "frame":
          _f = true;
          break;
        case "noframe":
          _f = false;
          break;
        case 'dark':
          _c1 ="#252525ff";
          _c2 ="#333333ff";
          _cb ="#1c1c1cff";
          _cbb ="#202020ff";
          break;
        case 'light':
          _c1 ="#e4e4e4ff";
          _c2 ="#d8d8d8ff";
          _cb ="#f8f8f8ff";
          _cbb ="#f2f2f2";
          break;
        default:
          break;
      }
      i++
    }
  }

  let res = {__DID:UINIQE,node:'div' , id:__ID , class:['skeleton-tempalate-parent-xB00-'+UINIQE] , innerStyle:`
    .skeleton-tempalate-parent-xB00-${UINIQE} {
      width: ${_w};
      height:max-content;
      display: flex;
      flex-direction: column;
      justify-content: center;
      align-items: center;
      background-color: ${!_f ? 'transparent' : _cb};
      border: 1px solid ${!_f ? 'transparent' : _cbb};
      padding :11px;
      border-radius:${_p ? '0' : String((_s*(_px/2)))}px;
      row-gap: ${String((_s*(_px/3)))}px;
      box-sizing: border-box;
    }
    .line-skeleton-flex-row-xB00-${UINIQE} {
      width: 100%;
      display: flex;
      justify-content: center;
      align-items: center;
      column-gap: ${String((_s*(_px/3)))}px;
      box-sizing: border-box;
    }
    .line-skeleton-flex-row-xB02-${UINIQE} {
      width: 100%;
      display: flex;
      justify-content: center;
      align-items: flex-end;
      column-gap: ${String((_s*(_px/3)))}px;
      box-sizing: border-box;
    }
    .line-skeleton-flex-col-xB00-${UINIQE} {
      flex: 1;
      display: flex;
      flex-direction: column;
      justify-content: center;
      align-items: center;
      row-gap: ${String((_s*(_px/3)))}px;
      box-sizing: border-box;
    }
    .SLDS-xB00-hide-${UINIQE} {
      visibility: hidden;
    }
    .SLDS-xB00-unzel-${UINIQE} {
      width: ${String((((_s*4))*_px))}px;
      aspect-ratio: 1;
      border-radius: 10000000px;
      background-color: ${_c1};
    }
    .SLDS-xB00-fuzel-${UINIQE} {
      width: ${String(((_s*4))*_px)}px;
      aspect-ratio: 1;
      border-radius: ${_p ? '0' : String(_s*(_px/3))}px;
      background-color: ${_c1};
    }
    .SLDS-xB00-tezel-${UINIQE} {
      width: 100%;
      height: ${String(_s*_px)}px;
      border-radius: ${_p ? '0' : String(_s*(_px/3))}px;
      background-color: ${_c1};
    }
    .shimmer-data-shell-specific-${UINIQE} {
        background: linear-gradient(90deg,
                ${_c1} 30%,
                ${_c2} 50%,
                ${_c1} 70%);
        background-size: 400%;
        animation: shimmer-data-shell-specific-anim 1.5s infinite linear;
    }
    @keyframes shimmer-data-shell-specific-anim {
      0% {
        background-position: 100% 100%;
      }

      100% {
        background-position: 0 0;
      }
    }
    ` ,  
    children : []} ;

  let tmplst = [];
  switch (tempelate) {
    case 'x1':
      if(_rev){
        tmplst.push({__DID:UINIQE+'ch01',node:'div' , id:null , class:[`line-skeleton-flex-row-xB00-${UINIQE}`] , innerStyle:`` ,  children : [
          {__DID:UINIQE+'ch012',node:'div' , id:null , class:[`line-skeleton-flex-col-xB00-${UINIQE}`] , innerStyle:`` ,  children : [
            {__DID:UINIQE+'ch0121',node:'div' , id:null , class:[`line-skeleton-flex-row-xB00-${UINIQE}`] , innerStyle:`` ,  children : [
              {__DID:UINIQE+'ch01212',node:'div' , id:null , class:[`SLDS-xB00-tezel-${UINIQE}`, `SLDS-xB00-hide-${UINIQE}`] , innerStyle:`` ,  children : []},
              {__DID:UINIQE+'ch01211',node:'div' , id:null , class:[`SLDS-xB00-tezel-${UINIQE}`, `shimmer-data-shell-specific-${UINIQE}`] , innerStyle:`` ,  children : []},
            ]},
            {__DID:UINIQE+'ch0122',node:'div' , id:null , class:[`SLDS-xB00-tezel-${UINIQE}` , `shimmer-data-shell-specific-${UINIQE}`] , innerStyle:`` ,  children : []},
            {__DID:UINIQE+'ch0123',node:'div' , id:null , class:[`SLDS-xB00-tezel-${UINIQE}` , `shimmer-data-shell-specific-${UINIQE}`] , innerStyle:`` ,  children : []},
          ]},
          {__DID:UINIQE+'ch011',node:'div' , id:null , class:[`SLDS-xB00-${_a === 'round' ? 'unzel' : 'fuzel'}-${UINIQE}`,`shimmer-data-shell-specific-${UINIQE}`] , innerStyle:`` ,  children : []},
        ]})
      }else{
        tmplst.push({__DID:UINIQE+'ch01',node:'div' , id:null , class:[`line-skeleton-flex-row-xB00-${UINIQE}`] , innerStyle:`` ,  children : [
          {__DID:UINIQE+'ch011',node:'div' , id:null , class:[`SLDS-xB00-${_a === 'round' ? 'unzel' : 'fuzel'}-${UINIQE}`,`shimmer-data-shell-specific-${UINIQE}`] , innerStyle:`` ,  children : []},
          {__DID:UINIQE+'ch012',node:'div' , id:null , class:[`line-skeleton-flex-col-xB00-${UINIQE}`] , innerStyle:`` ,  children : [
            {__DID:UINIQE+'ch0121',node:'div' , id:null , class:[`line-skeleton-flex-row-xB00-${UINIQE}`] , innerStyle:`` ,  children : [
              {__DID:UINIQE+'ch01211',node:'div' , id:null , class:[`SLDS-xB00-tezel-${UINIQE}`, `shimmer-data-shell-specific-${UINIQE}`] , innerStyle:`` ,  children : []},
              {__DID:UINIQE+'ch01212',node:'div' , id:null , class:[`SLDS-xB00-tezel-${UINIQE}`, `SLDS-xB00-hide-${UINIQE}`] , innerStyle:`` ,  children : []},
            ]},
            {__DID:UINIQE+'ch0122',node:'div' , id:null , class:[`SLDS-xB00-tezel-${UINIQE}` , `shimmer-data-shell-specific-${UINIQE}`] , innerStyle:`` ,  children : []},
            {__DID:UINIQE+'ch0123',node:'div' , id:null , class:[`SLDS-xB00-tezel-${UINIQE}` , `shimmer-data-shell-specific-${UINIQE}`] , innerStyle:`` ,  children : []},
          ]}
        ]})
      }
      break;
    case 'x2':
      if(_rev){
        tmplst.push({__DID:UINIQE+'ch01',node:'div' , id:null , class:[`line-skeleton-flex-row-xB02-${UINIQE}`] , innerStyle:`` ,  children : [
          {__DID:UINIQE+'ch012',node:'div' , id:null , class:[`line-skeleton-flex-col-xB00-${UINIQE}`] , innerStyle:`` ,  children : [
            {__DID:UINIQE+'ch0121',node:'div' , id:null , class:[`line-skeleton-flex-row-xB00-${UINIQE}`] , innerStyle:`` ,  children : [
              {__DID:UINIQE+'ch01212',node:'div' , id:null , class:[`SLDS-xB00-tezel-${UINIQE}`, `SLDS-xB00-hide-${UINIQE}`] , innerStyle:`` ,  children : []},
              {__DID:UINIQE+'ch01211',node:'div' , id:null , class:[`SLDS-xB00-tezel-${UINIQE}`, `shimmer-data-shell-specific-${UINIQE}`] , innerStyle:`` ,  children : []},
            ]},
            {__DID:UINIQE+'ch0122',node:'div' , id:null , class:[`SLDS-xB00-tezel-${UINIQE}` , `shimmer-data-shell-specific-${UINIQE}`] , innerStyle:`` ,  children : []},
          ]},
          {__DID:UINIQE+'ch011',node:'div' , id:null , class:[`SLDS-xB00-${_a === 'round' ? 'unzel' : 'fuzel'}2-${UINIQE}`,`shimmer-data-shell-specific-${UINIQE}`] , innerStyle:`
             .SLDS-xB00-unzel2-${UINIQE} {
              width: ${String((((_s*2.5))*_px))}px;
              aspect-ratio: 1;
              border-radius: 10000000px;
              background-color: ${_c1};
            }
            .SLDS-xB00-fuzel2-${UINIQE} {
              width: ${String(((_s*2.5))*_px)}px;
              aspect-ratio: 1;
              border-radius: ${_p ? '0' : String(_s*(_px/3))}px;
              background-color: ${_c1};
            }
             ` ,  children : []},
        ]})
        tmplst.push({__DID:UINIQE+'ch10',node:'div' , id:null , class:[`SLDS-xB00-tezel2-${UINIQE}` , `shimmer-data-shell-specific-${UINIQE}`] , innerStyle:`
            .SLDS-xB00-tezel2-${UINIQE} {
              width: 100%;
              height: ${String(_s*_px)*3}px;
              border-radius: ${_p ? '0' : String(_s*(_px/3))}px;
              background-color: ${_c1};
            }
          ` ,  children : []})
      }else{
        tmplst.push({__DID:UINIQE+'ch01',node:'div' , id:null , class:[`line-skeleton-flex-row-xB02-${UINIQE}`] , innerStyle:`` ,  children : [
          {__DID:UINIQE+'ch011',node:'div' , id:null , class:[`SLDS-xB00-${_a === 'round' ? 'unzel' : 'fuzel'}2-${UINIQE}`,`shimmer-data-shell-specific-${UINIQE}`] , innerStyle:`
           .SLDS-xB00-unzel2-${UINIQE} {
              width: ${String((((_s*2.5))*_px))}px;
              aspect-ratio: 1;
              border-radius: 10000000px;
              background-color: ${_c1};
            }
            .SLDS-xB00-fuzel2-${UINIQE} {
              width: ${String(((_s*2.5))*_px)}px;
              aspect-ratio: 1;
              border-radius: ${_p ? '0' : String(_s*(_px/3))}px;
              background-color: ${_c1};
            } 
              ` ,  children : []},
          {__DID:UINIQE+'ch012',node:'div' , id:null , class:[`line-skeleton-flex-col-xB00-${UINIQE}`] , innerStyle:`` ,  children : [
            {__DID:UINIQE+'ch0121',node:'div' , id:null , class:[`line-skeleton-flex-row-xB00-${UINIQE}`] , innerStyle:`` ,  children : [
              {__DID:UINIQE+'ch01211',node:'div' , id:null , class:[`SLDS-xB00-tezel-${UINIQE}`, `shimmer-data-shell-specific-${UINIQE}`] , innerStyle:`` ,  children : []},
              {__DID:UINIQE+'ch01212',node:'div' , id:null , class:[`SLDS-xB00-tezel-${UINIQE}`, `SLDS-xB00-hide-${UINIQE}`] , innerStyle:`` ,  children : []},
            ]},
            {__DID:UINIQE+'ch0122',node:'div' , id:null , class:[`SLDS-xB00-tezel-${UINIQE}` , `shimmer-data-shell-specific-${UINIQE}`] , innerStyle:`` ,  children : []},
          ]},
        ]})
        tmplst.push({__DID:UINIQE+'ch10',node:'div' , id:null , class:[`SLDS-xB00-tezel2-${UINIQE}` , `shimmer-data-shell-specific-${UINIQE}`] , innerStyle:`
            .SLDS-xB00-tezel2-${UINIQE} {
              width: 100%;
              height: ${String(_s*_px)*3}px;
              border-radius: ${_p ? '0' : String(_s*(_px/3))}px;
              background-color: ${_c1};
            }
          ` ,  children : []})
      }
      break;
    case 'x3':
      tmplst.push(
        {__DID:UINIQE+'ch01',node:'div' , id:null , class:[`SLDS-xB00-${_a === 'round' ? 'unzel' : 'fuzel'}3-${UINIQE}`,`shimmer-data-shell-specific-${UINIQE}`] , innerStyle:`
          .SLDS-xB00-unzel3-${UINIQE} {
            width: ${String((((_s*3.2))*_px))}px;
            aspect-ratio: 1;
            border-radius: 10000000px;
            background-color: ${_c1};
          }
          .SLDS-xB00-fuzel3-${UINIQE} {
            width: ${String(((_s*3.2))*_px)}px;
            aspect-ratio: 1;
            border-radius: ${_p ? '0' : String(_s*(_px/3))}px;
            background-color: ${_c1};
          } 
            ` ,  children : []}
        )
      tmplst.push({__DID:UINIQE+'ch02',node:'div' , id:null , class:[`SLDS-xB00-tezel-${UINIQE}` , `shimmer-data-shell-specific-${UINIQE}`] , innerStyle:`` ,  children : []})
      tmplst.push({__DID:UINIQE+'ch03',node:'div' , id:null , class:[`SLDS-xB00-tezel-${UINIQE}` , `shimmer-data-shell-specific-${UINIQE}`] , innerStyle:`` ,  children : []})
      break;
    case 'x4':
      tmplst.push(
        {__DID:UINIQE+'ch02',node:'div' , id:null , class:[`SLDS-xB00-tezel-ar-1-${UINIQE}` , `shimmer-data-shell-specific-${UINIQE}`] , innerStyle:`
          .SLDS-xB00-tezel-ar-1-${UINIQE} {
            width: 100%;
            aspect-ratio : 1;
            border-radius: ${_p ? '0' : String(_s*(_px/3))}px;
            background-color: ${_c1};
          }
        ` ,  children : []}
        )
      tmplst.push(
        {__DID:UINIQE+'ch01',node:'div' , id:null , class:[`line-skeleton-flex-row-xB00-${UINIQE}`] , innerStyle:`` ,  children : [
          {__DID:UINIQE+'ch011',node:'div' , id:null , class:[`SLDS-xB00-${_a === 'round' ? 'unzel' : 'fuzel'}3-${UINIQE}`,`shimmer-data-shell-specific-${UINIQE}`] , innerStyle:`
           .SLDS-xB00-unzel3-${UINIQE} {
              width: ${String((((_s*2))*_px))}px;
              aspect-ratio: 1;
              border-radius: 10000000px;
              background-color: ${_c1};
            }
            .SLDS-xB00-fuzel3-${UINIQE} {
              width: ${String(((_s*2))*_px)}px;
              aspect-ratio: 1;
              border-radius: ${_p ? '0' : String(_s*(_px/3))}px;
              background-color: ${_c1};
            } 
              ` ,  children : []},
        {__DID:UINIQE+'ch012',node:'div' , id:null , class:[`SLDS-xB00-tezel-${UINIQE}` , `shimmer-data-shell-specific-${UINIQE}`] , innerStyle:`` ,  children : []}
      ]})
      break;
    default:
      break;
  }

  res.children = tmplst
  return res
}