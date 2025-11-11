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
  let cssstr = '';
  for(const stl in lst){
    console.log(stl);
    
    cssstr += lst[stl].innerStyle;
  }
  style.textContent = cssstr;
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