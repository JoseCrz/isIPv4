export default function isipv4(inputString='') {
    let stringArray = inputString.split(".")
    
    if(stringArray.length != 4) {
      
      return false
    }
  
    for (let i=0; i<= stringArray.length-1; i++) {
      if (stringArray[i] == "") {
        
        return false
      }
  
      if (stringArray[i] > 255) {
        
        return false
      }
  
      let isnum = /^\d+$/.test(stringArray[i])
      if (isnum==false) {
        
        return false
      }
    }
  
  
    return true
  }
  
  