const displayAuthorQuote = () => {

    const citatAutor = (autor, citat) => {
        return {
            autor: autor,
            citat: citat,
        };
    };

    const c1 = citatAutor('Tudor Arghezi', 'In iubire, totul se schimba, toate devin insemnate: dintr-un nimic se naste un colos.');

    const c2 = citatAutor('Grigore Vieru', 'Poate ca, intr-adevar, ochii femeii iubite sunt marginea lumii');

    const c3 = citatAutor('Ion Creanga', 'Daca toata lumea ar invata carte, n-ar mai avea cine sa ne traga ciubotele');

    const c4 = citatAutor('Mihai Eminescu', 'Menirea vieţii tale e să te cauţi pe tine însuţi');

    const c5 = citatAutor('Mihai Eminescu', 'Egalitatea nu există decât în matematică.');

    const c6 = citatAutor('Dimitrie Cantemir', 'Omul doreşte să ştie tot ce se poate şti; deci să cercetăm, să căutăm, să aflăm, să ştim.');


    const quotes = [c1, c2, c3, c4, c5, c6];

    let random = Math.floor(Math.random() * 6);
    let randomQuote = quotes[random];

    document.getElementById('p').innerHTML = `${randomQuote.autor}: '${randomQuote.citat}'`;
};

let button = document.getElementById('btn');
button.addEventListener('click', displayAuthorQuote);