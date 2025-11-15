// GLOBAL VARIBALES : 
export const main_color = "#8c5cdfff";
export const prim_color = "#212121ff"
// FUNCTIONS : 
export function injectStyle(lst) {
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
export function command_spliter(shell){
  return shell.replace("/;", " __$emi_col__ ").replace("\n", " ").split(";").map((str)=>str.trim().split(/\s+/).filter(s => s.length));
}
export function RanString(length) {
    var result = '';
    var characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
    var charactersLength = characters.length;
    for ( var i = 0; i < length; i++ ) {
        result += characters.charAt(Math.floor(Math.random() * charactersLength));
    }
    return result;
}
export function isNumeric(str) {
  if (typeof str != "string") return false 
  return !isNaN(str) && !isNaN(parseFloat(str))
}