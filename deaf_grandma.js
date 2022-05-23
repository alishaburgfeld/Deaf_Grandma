function deafGrandma() {
      let count=0
      let text=window.prompt("What would you like to say to grandma?")
      let lowerRegex=/[a-z]/
      let upperRegex=/[A-Z]/
      if (text=="") {
            text=window.prompt("WHAT?!")
            deafGrandma(text)
      }
      else if (text.match(lowerRegex)) {
            text=window.prompt("SPEAK UP, KID!") 
            deafGrandma(text)     
      }
      else if (text.match(upperRegex)) {
            text=window.prompt("NO, NOT SINCE 1946!") 
            deafGrandma(text)     
      }
      else if (text==="GOODBYE!" && count===0) {
            text=window.prompt("LEAVING SO SOON?")
            count+=1
            deafGrandma(text)
      }
      
      else if (text==="GOODBYE!" && count!==0) {
            return alert("LATER, SKATER!")
      }
}

deafGrandma();