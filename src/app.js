// DOMAIN NAME GENERATOR - NICO EUGUI

let pronouns = ['the', 'our'];
let adjetives = ['great', 'big'];
let nouns = ['jogger', 'racoon', 'internet', 'lastOfUs', 'puedes'];
let extensions = ['.com', '.net', '.us', '.io', '.es', '.os'];

const specialDomain = {
  "internet": ".net",
  "puedes": ".es",
  "lastOfUs": ".os"
};


function generateDomainNames() {
  let domainNames = [];

  for(let pronoun of pronouns) {
    for(let adjetive of adjetives) {
      for(let noun of nouns) {
        for(let extension of extensions) {
  
          let showPronum = pronouns[Math.floor(Math.random() * pronouns.length)];
          let showAdj = adjetives[Math.floor(Math.random() * adjetives.length)];
          let showNoun = nouns[Math.floor(Math.random() * nouns.length)];
          let showExt = extensions[Math.floor(Math.random() * extensions.length)];
  
          //console.log(showPronum + showAdj + showNoun + showExt);
          let newDomain = "";

          if(noun in specialDomain && specialDomain[noun] === extension) {
            //domainNames.push(`${noun.slice(0,-extension.length+1)}${extension}`);
            newDomain = `${noun.slice(0, -extension.length + 1)}${extension}`;
          } else {
            //domainNames.push(`${showPronum + showAdj + showNoun + showExt}`);
            newDomain = `${showPronum + showAdj + showNoun + showExt}`;
          }

          if (!domainNames.includes(newDomain)) {
            domainNames.push(newDomain);
          }
        }
      }
    }
  }
  return domainNames;
}


function printDomainNames(domainNames) {
  for (const domain of domainNames) {
    // eslint-disable-next-line no-console
    console.log(domain);
  }
}
const domainNames = generateDomainNames();
printDomainNames(domainNames);