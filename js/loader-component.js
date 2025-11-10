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
export default function new_loader(parent , command){
  let kind = "x1";
  const UINIQE = RanString(10);
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
        case 'spinner':
        case 'spin':
        case 't1':
        case 'type-1':
          kind = 'x1'
          break;
        case 'growing':
        case 'grow':
        case 't2':
        case 'type-2':
          kind = 'x2'
          _s='2000ms'
          break;
        case 'dottedspinner':
        case 'dotspin':
        case 't3':
        case 'type-3':
          kind = 'x3'
          _s='3000ms'
          break;
        case 'loading':
        case 'load':
        case 't4':
        case 'type-4':
          kind = 'x4'
          _s='2000ms'
          break;
        case 'moon':
        case 't5':
        case 'type-5':
          kind = 'x5'
          _s='2000ms'
          break;
        case 'scroll':
        case 't6':
        case 'type-6':
          kind = 'x6'
          _s='2000ms'

          break;
        default:
          break;
      }
      i++
    }
  }

  if(kind === 'x1'){
    parent.innerHTML += '<span '+(__ID !== null ? 'id="'+__ID+'"' : '')+' class="loader-spinner-x0000-'+UINIQE+'" style="width:'+_w+';height:'+_w+';border-width:'+_b+';border-color:'+_c+';border-bottom-color: transparent;animation-duration:'+_s+';" ></span>'
    Global_Style.push(`
      .loader-spinner-x0000-`+UINIQE+` {
          border-radius: 50%;
          border: 5px solid #212121;
          border-bottom-color: transparent;
          display: inline-block;
          box-sizing: border-box;
          animation: rotation-loader-snpinner-x0000 1s linear infinite;
      }
      @keyframes rotation-loader-snpinner-x0000 {
          0% {
              transform: rotate(0deg);
          }

          100% {
              transform: rotate(360deg);
          }
      }
    `)
  }else if(kind === 'x2'){
    parent.innerHTML += '<span '+(__ID !== null ? 'id="'+__ID+'"' : '')+' class="loader-spinner-x0001-'+UINIQE+'" style="" ></span>'
    const tmpdelay = _s[_s.length-2] === 'm' ? (String(parseFloat(_s)/2))+'ms' : (String(parseFloat(_s)/2))+'s';
    Global_Style.push(`
      .loader-spinner-x0001-`+UINIQE+` {
          width:`+_w+`;
          height:`+_w+`;
          display: inline-block;
          position: relative;
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
      `)
    Global_Style.push(`
      .loader-spinner-x0001-`+UINIQE+`::after,
      .loader-spinner-x0001-`+UINIQE+`::before{
        content: '';
        box-sizing: border-box;
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
      }`)
  }else if(kind === 'x3'){
    parent.innerHTML += '<span '+(__ID !== null ? 'id="'+__ID+'"' : '')+' class="loader-spinner-x0003-'+UINIQE+'" ></span>'
    Global_Style.push(`
      .loader-spinner-x0003-`+UINIQE+` {
        width: `+_w+`;
        height: `+_w+`;
        border: `+_b+` dotted `+_c+`;
        border-radius: 50%;
        display: inline-block;
        position: relative;
        box-sizing: border-box;
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
    `)
  }else if(kind === 'x4'){
    const tmpdelay = _s[_s.length-2] === 'm' ? (String(parseFloat(_s)/2))+'ms' : (String(parseFloat(_s)/2))+'s';
    parent.innerHTML += '<span '+(__ID !== null ? 'id="'+__ID+'"' : '')+' class="loader-spinner-x0004-'+UINIQE+'" ></span>'
    Global_Style.push(`
      .loader-spinner-x0004-`+UINIQE+` {
        width: `+_w+`;
        height: `+_w+`;
        display: inline-block;
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
          
    `)
  }else if(kind === 'x5'){
    parent.innerHTML += '<span '+(__ID !== null ? 'id="'+__ID+'"' : '')+' class="loader-spinner-x0005-'+UINIQE+'" ></span>'
    Global_Style.push(`
      .loader-spinner-x0005-`+UINIQE+` {
        width: `+_w+`;
        height: `+_w+`;
        border-radius: 50%;
        display: inline-block;
        box-sizing: border-box;
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
    `)
  }else if(kind === 'x6'){
    const tmpscale = _w[_w.length] === '%' ? '%' : (_w[_w.length] === 'm' ? 'em' : 'px')
    parent.innerHTML += '<span '+(__ID !== null ? 'id="'+__ID+'"' : '')+' class="loader-spinner-x0006-'+UINIQE+'" ></span>'
    Global_Style.push(`
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
    `)
  }
}