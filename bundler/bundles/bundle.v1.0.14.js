/* Auto-generated bundle v1.0.14 - 2025-11-25T09:44:41.248Z */

// GLOBAL VARIBALES : 
const main_color = "#8c5cdfff";
const prim_color = "#212121ff"
// FUNCTIONS : 
function injectStyle(lst) {
  const styleId = "9566ec883cfc66c1d8e693110ee4290f1b6476864"; 
  let oldStyle = document.getElementById(styleId);
  if (oldStyle) {
    oldStyle.remove();
  }
  const style = document.createElement("style");
  style.id = styleId;

  function style_extract(ulm){
    let cssstr = '';
    for(const stl of ulm){
      cssstr += stl.innerStyle;
      if(stl.children.length !== 0){
        cssstr += style_extract(stl.children)
      }
    }
    return(cssstr);
  }

  style.textContent = style_extract(lst);
  document.head.appendChild(style);
}
function command_spliter(shell){
  return shell.replace("/;", " __$emi_col__ ").replace("\n", " ").split(";").map((str)=>str.trim().split(/\s+/).filter(s => s.length));
}
function RanString(length) {
    var result = '';
    var characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
    var charactersLength = characters.length;
    for ( var i = 0; i < length; i++ ) {
        result += characters.charAt(Math.floor(Math.random() * charactersLength));
    }
    return result;
}
function isNumeric(str) {
  if (typeof str != "string") return false 
  return !isNaN(str) && !isNaN(parseFloat(str))
}

function new_loader(command){
  let kind = "x1";
  const UINIQE = RanString(14);
  let _w='40px' , _h='71.6px' , _b='3px' , _c=prim_color , _s='1000ms' , __ID=null
  let i = 1;
  while(command[i]!==undefined){
    if(command[i][0] === '$'){
      __ID=command[i].replace(/^\$/, "");
      i++;
    }else if(command[i][0] === '-'){
      let tmp_px = true
      switch (command[i]) {
        case '-w':
        case '--width':
          tmp_px = isNumeric(command[i+1][command[i+1].length-1]);
          _w = tmp_px ? command[i+1] + 'px' : command[i+1]
          break;
        case '-h':
        case '--height':
          tmp_px = isNumeric(command[i+1][command[i+1].length-1]);
          _h = tmp_px ? command[i+1] + 'px' : command[i+1]
          break;
        case '-b':
        case '--border':
          tmp_px = isNumeric(command[i+1][command[i+1].length-1]);
          _b = tmp_px ? command[i+1] + 'px' : command[i+1]
          break;
        case '-c':
        case '--color':
          _c = command[i+1]
          break;
        case '-s':
        case '--speed':
          tmp_px = isNumeric(command[i+1][command[i+1].length-1]);
          _s = tmp_px ? command[i+1] + 'ms' : command[i+1]
          break;
        case '-1':
          kind = 'x1'
          i--;
          break;
        case '-2':
          kind = 'x2'
          _s='2000ms'
          i--;
          break;
        case '-3':
          kind = 'x3'
          _s='3000ms'
          i--;
          break;
        case '-4':
          kind = 'x4'
          _s='2000ms'
          i--;
          break;
        case '-5':
          kind = 'x5'
          _s='2000ms'
          i--;
          break;
        case '-6':
          kind = 'x6'
          _s='2000ms'
          i--;
          break;
        default:
          i--
          break;
      }
      i+=2
    }else{
      switch (command[i]) {
        case 'large':
          _w='60px';_h="107.5px";_b="7px"
          break;
        case 'normal':
          _w='40px';_h="71.6px";_b="4px"
          break;
        case 'thin':
          _w='48px';_h="86px";_b="2px"
          break;
        case 'small':
          _w='30px';_h="53.7px";_b="2px"
          break;
        default:
          break;
      }
      i++
    }
  }

  let res = {} ;

  if(kind === 'x1'){
    res = {__DID:UINIQE,node:'span' , id:__ID , class:['loader-spinner-x0000-'+UINIQE] , innerStyle:`
      .loader-spinner-x0000-`+UINIQE+` {
          width:`+_w+`;height:`+_w+`;
          border-radius: 50%;
          border: `+_b+` solid `+_c+`;
          border-bottom-color: transparent;
          display: inline-block;
          box-sizing: border-box;
          cursor: progress;
          animation: rotation-loader-snpinner-x0000 `+_s+` linear infinite;
      }
      @keyframes rotation-loader-snpinner-x0000 {
          0% {
              transform: rotate(0deg);
          }

          100% {
              transform: rotate(360deg);
          }
      }` ,  
      children : []
    }
  }else if(kind === 'x2'){
    const tmpdelay = _s[_s.length-2] === 'm' ? (String(parseFloat(_s)/2))+'ms' : (String(parseFloat(_s)/2))+'s';
    res = {__DID:UINIQE,node:'span' , id:__ID , class:['loader-spinner-x0001-'+UINIQE] , innerStyle:
      `.loader-spinner-x0001-`+UINIQE+` {
          width:`+_w+`;
          height:`+_w+`;
          display: inline-block;
          cursor: progress;
          position: relative;
      }
      .loader-spinner-x0001-`+UINIQE+`::after,
      .loader-spinner-x0001-`+UINIQE+`::before{
        content: '';
        box-sizing: border-box;
        cursor: progress;
        width: `+_w+`;
        height: `+_w+`;
        border-radius: 50%;
        border: `+_b+` solid `+_c+`;
        position: absolute;
        left: 0;
        top: 0;
        animation: animloader-loader-spinner-x0001 `+_s+` linear infinite;
      }
      .loader-spinner-x0001-`+UINIQE+`::after {
          animation-delay: `+tmpdelay+`;
      }
      @keyframes animloader-loader-spinner-x0001 {
          0% {
              transform: scale(0);
              opacity: 1;
          }
          100% {
              transform: scale(1);
              opacity: 0;
          }
        }
      
      ` ,  
      children : []
    }
  }else if(kind === 'x3'){
    res = {__DID:UINIQE,node:'span' , id:__ID , class:['loader-spinner-x0003-'+UINIQE] , children : [], innerStyle:
      `
      .loader-spinner-x0003-`+UINIQE+` {
        width: `+_w+`;
        height: `+_w+`;
        border: `+_b+` dotted `+_c+`;
        border-radius: 50%;
        display: inline-block;
        position: relative;
        box-sizing: border-box;
        cursor: progress;
        animation: rotation-loader-spinner-x0003 `+_s+` linear infinite;
      }
      @keyframes rotation-loader-spinner-x0003 {
        0% {
          transform: rotate(0deg);
        }
        100% {
          transform: rotate(360deg);
        }
      } 
      ` 
    }
  }else if(kind === 'x4'){
    const tmpdelay = _s[_s.length-2] === 'm' ? (String(parseFloat(_s)/2))+'ms' : (String(parseFloat(_s)/2))+'s';
    res = {__DID:UINIQE,node:'span' , id:__ID , class:['loader-spinner-x0004-'+UINIQE] , children : [], innerStyle:
      `
           .loader-spinner-x0004-`+UINIQE+` {
        width: `+_w+`;
        height: `+_w+`;
        display: inline-block;
        cursor: progress;
        position: relative;
      }
      .loader-spinner-x0004-`+UINIQE+`::after,
      .loader-spinner-x0004-`+UINIQE+`::before {
        content: '';  
        box-sizing: border-box;
        width: `+_w+`;
        height: `+_w+`;
        border-radius: 50%;
        background: `+_c+`;
        position: absolute;
        cursor: progress;
        left: 0;
        top: 0;
        animation: animloader-loader-spinner-x0004 `+_s+` linear infinite;
      }
      .loader-spinner-x0004-`+UINIQE+`::after {
        animation-delay: `+tmpdelay+`;
      }
      @keyframes animloader-loader-spinner-x0004 {
        0% {
          transform: scale(0);
          opacity: 1;
        }
        100% {
          transform: scale(1);
          opacity: 0;
        }
      }
       
      ` 
    }
  }else if(kind === 'x5'){
    res = {__DID:UINIQE,node:'span' , id:__ID , class:['loader-spinner-x0005-'+UINIQE] , children : [], innerStyle:
      `
      .loader-spinner-x0005-`+UINIQE+` {
        width: `+_w+`;
        height: `+_w+`;
        border-radius: 50%;
        display: inline-block;
        box-sizing: border-box;
        cursor: progress;
        animation: animloader-loader-spinner-x0005 `+_s+` linear infinite;
      }

      @keyframes animloader-loader-spinner-x0005 {
        0% {
          box-shadow: -`+String(parseFloat(_w)*1.5)+`px 0 `+_c+` inset;
        }
        100% {
          box-shadow: `+_w+` 0 `+_c+` inset;
        }
      }  
      ` 
    }
  }else if(kind === 'x6'){
    const tmpscale = _w[_w.length] === '%' ? '%' : (_w[_w.length] === 'm' ? 'em' : 'px')
    res = {__DID:UINIQE,node:'span' , id:__ID , class:['loader-spinner-x0006-'+UINIQE] , children : [], innerStyle:
      `
      .loader-spinner-x0006-`+UINIQE+` {
        width: `+_w+`;
        height: `+_h+`;
        position: relative;
      }

      .loader-spinner-x0006-`+UINIQE+`::before {
        content: '';
        position: absolute;
        left: 50%;
        top: 0;
        transform: translate(-50% , 50%);
        width: `+String(parseFloat(_w)*0.2083333333)+tmpscale+`;
        height: `+String(parseFloat(_w)*0.2083333333)+tmpscale+`;
        background: `+_c+`;
        border-radius: 50%;
        animation: bounce-loader-spinner-x0006 1s ease-in infinite alternate;
      }
      .loader-spinner-x0006-`+UINIQE+`::after {
        content: '';
        left: 0;
        top: 0;
        position: absolute;
        width: `+_w+`;
        height: `+_h+`;
        box-sizing: border-box;
        border: `+_b+` solid `+_c+`;
        border-radius: 50% 50% 50% 50% / 25% 25% 25% 25%;
        animation: kick-loader-spinner-x0006-`+UINIQE+` 1s ease-in infinite alternate;
      }
      @keyframes bounce-loader-spinner-x0006 {
        0% {
          top: 0%;
          opacity: 1;
        }
        100% {
          top: 75%;
          opacity: 0.2;
        }
      }
      @keyframes kick-loader-spinner-x0006-`+UINIQE+` {
        0% , 75% {
          height: `+_h+`
        }
        100% {
          height: `+String(parseFloat(_h)*0.9)+tmpscale+`
        }
      }
      ` 
    }
  }

  return res
}

function new_skeleton(command){
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
          if(tempelate === 'x1' || tempelate === 'x2'){
            _w = '450px';
          }else if(tempelate === 'x3'){
            _w = '300px';
          }else if(tempelate === 'x4'){
            _w = '270px';
          }
          _s = 4;
          break;
        case 'normal':
          if(tempelate === 'x1' || tempelate === 'x2'){
            _w = '380px';
          }else if(tempelate === 'x3'){
            _w = '230px';
          }else if(tempelate === 'x4'){
            _w = '200px';
          }
          _s = 3;
          break;
        case 'small':
          if(tempelate === 'x1' || tempelate === 'x2'){
            _w = '290px';
          }else if(tempelate === 'x3'){
            _w = '150px';
          }else if(tempelate === 'x4'){
            _w = '140px';
          }
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




function run_data_shell_replacer (){
    document.head.innerHTML += '<link rel="stylesheet" href="https://cdn.jsdelivr.net/gh/aliamdevs/airy-icons@latest/css/airy.min.css" />'
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

function data_shell_array(shell) {
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


function useDataShell(){
    run_data_shell_replacer();
}

run_data_shell_replacer();
