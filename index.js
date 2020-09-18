class Formatter {
  //add static methods here
  static capitalize(sentence){
    let a= sentence.toUpperCase().charAt(0);
    return a+sentence.substr(1);
  }
  static sanitize(sentence){

    let a = sentence.replace(/[&@^!\/\\#,+()$~%.":*?<>{}]/g, "");
    return a;

  }
  static titleize(sentence){
    let wordArray = sentence.split(' ');
    let superWord="";
        for (let i = 0; i < wordArray.length; i++) {
          if (i==0)
<<<<<<< HEAD
          superWord += Formatter.capitalize(wordArray[i])+' ';
=======
          superWord += Formatter.capitalize(wordArray[i])+' ';}
>>>>>>> 34cc6d4f9362e5a7e955ce237a81f6d5f17e70d0
        else  if( wordArray[i]=="the"||  wordArray[i]=="a"|| wordArray[i]== "an"||  wordArray[i]=="but"||  wordArray[i]=="of"|| wordArray[i]== "and"|| wordArray[i]== "for"|| wordArray[i]== "at"||  wordArray[i]=="by"|| wordArray[i]== "from")
          superWord+=wordArray[i]+' ';

          else
        {  if(i+1==wordArray.length)
          superWord += Formatter.capitalize(wordArray[i]);
            else
            superWord += Formatter.capitalize(wordArray[i])+' ';}

            // superWord += wordArray[i].charAt(0).toUpperCase();
        }
        return superWord;

  }
}
