export class Quotes{
  constructor(langSetting, numRandom){
      this.langSetting = langSetting;  
      this.number = numRandom;
      this.quote = document.querySelector('.quote');
      this.author = document.querySelector('.author');
      this.getQuotes();

    
  }
   async getQuotes() {  
    const quotes = 'src/assets/data.json';
    const res = await fetch(quotes);
    const data = await res.json(); 
   
    this.quote.textContent = data[this.number][this.langSetting].text;
    this.author.textContent = data[this.number][this.langSetting].author;   
  }   

      
}



