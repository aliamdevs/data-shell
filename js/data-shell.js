// GLOBAL VARIBALES : 

// FUNCTIONS : 
function command_spliter(shell){
  return shell.replace("/;", " __$emi_col__ ").replace("\n", " ").split(";").map((str)=>str.trim().split(/\s+/).filter(s => s.length));
}

// MAIN CODE :
var els = document.body.getElementsByTagName("*");
for (let i = 0; i < els.length; i++) {
  const shell = els[i].getAttribute('data-shell')
  const commands = shell === null ? [] : command_spliter(shell);
  
  // els[i].setAttribute('style' ,els[i].getAttribute('style') + ";" + "display:block;width:100px;height:100px;background-color:black")
  // console.log(els[i].getAttribute('style'));
  // els[i].classList.add('anygthing')
  // console.log(els[i].classList.value);
  
  if(shell){
    for (const elm of commands) {
      console.log(elm[0]);
      elm[0]
    }
  }
}