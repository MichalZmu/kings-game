export const CardOptions = {
  cardTypes: [
    {id: 1, name: '2', type: 'hearts'},
    {id: 2, name: '3', type: 'hearts'},
    {id: 3, name: '4', type: 'hearts'},
    {id: 5, name: '5', type: 'hearts'},
    {id: 6, name: '6', type: 'hearts'},
    {id: 7, name: '7', type: 'hearts'},
    {id: 8, name: '8', type: 'hearts'},
    {id: 9, name: '9', type: 'hearts'},
    {id: 10, name: '10', type: 'hearts'},
    {id: 11, name: 'jack', type: 'hearts'},
    {id: 12, name: 'queen', type: 'hearts'},
    {id: 13, name: 'king', type: 'hearts'},
    {id: 14, name: 'ace', type: 'hearts'},
    {id: 15, name: '2', type: 'tiles'},
    {id: 16, name: '3', type: 'tiles'},
    {id: 17, name: '4', type: 'tiles'},
    {id: 19, name: '5', type: 'tiles'},
    {id: 20, name: '6', type: 'tiles'},
    {id: 21, name: '7', type: 'tiles'},
    {id: 22, name: '8', type: 'tiles'},
    {id: 23, name: '9', type: 'tiles'},
    {id: 24, name: '10', type: 'tiles'},
    {id: 25, name: 'jack', type: 'tiles'},
    {id: 26, name: 'queen', type: 'tiles'},
    {id: 27, name: 'king', type: 'tiles'},
    {id: 28, name: 'ace', type: 'tiles'},
    {id: 29, name: '2', type: 'pikes'},
    {id: 30, name: '3', type: 'pikes'},
    {id: 31, name: '4', type: 'pikes'},
    {id: 33, name: '5', type: 'pikes'},
    {id: 34, name: '6', type: 'pikes'},
    {id: 35, name: '7', type: 'pikes'},
    {id: 36, name: '8', type: 'pikes'},
    {id: 37, name: '9', type: 'pikes'},
    {id: 38, name: '10', type: 'pikes'},
    {id: 39, name: 'jack', type: 'pikes'},
    {id: 40, name: 'queen', type: 'pikes'},
    {id: 41, name: 'king', type: 'pikes'},
    {id: 42, name: 'ace', type: 'pikes'},
    {id: 43, name: '2', type: 'clovers'},
    {id: 44, name: '3', type: 'clovers'},
    {id: 45, name: '4', type: 'clovers'},
    {id: 47, name: '5', type: 'clovers'},
    {id: 48, name: '6', type: 'clovers'},
    {id: 49, name: '7', type: 'clovers'},
    {id: 50, name: '8', type: 'clovers'},
    {id: 51, name: '9', type: 'clovers'},
    {id: 52, name: '10', type: 'clovers'},
    {id: 53, name: 'jack', type: 'clovers'},
    {id: 54, name: 'queen', type: 'clovers'},
    {id: 55, name: 'king', type: 'clovers'},
    {id: 56, name: 'ace', type: 'clovers'}
  ],

  cardRules: [
    {
      number: '2', rule: 'Two is you!', description: {
        en: 'Choose the one person who have to drink!',
        pl: 'Wybierz jedną osobę, która musi się napić!'
      }
    },
    {
      number: '3', rule: 'Three is me!',
      description: {
        en: 'You are drinking!',
        pl: 'Ty pijesz!'
      }
    },
    {number: '4', rule: 'Four is whore!', description: {en: 'All the girls are drinking!', pl: 'Wszystkie kobiety piją!'}},
    {
      number: '5',
      rule: 'Five is tap master!',
      description: {
        en: 'You can put your finger on the top of the table at any time. All the players must notice that and put their fingers too. The last person have to drink!',
        pl: 'Od momentu wylosowania karty możesz położyć po cichu palec na blacie stołu. Inni graczę muszą powtórzyć tę czynność po Tobie (ty cały czas trzymasz). Ostatnia osoba która się nie zorientuje musi się napić!'
      }
    },
    {number: '6', rule: 'Six is dicks!', description: {en: 'All the boys are drinking!', pl: 'Faceci piją!'}},
    {
      number: '7',
      rule: 'Seven is heaven!',
      description: {en: 'Hands up, the last person have to drink!', pl: 'Ręcę do góry! Ostatnia osoba, która podniesie rękę pije!'}
    },
    {
      number: '8',
      rule: 'Eight is mate!',
      description: {
        en: 'Choose your mate, he or she will have to drink when you do!',
        pl: 'Wybierz swojego partnera, który będzie musiał pić wtedy kiedy ty!'
      }
    },
    {
      number: '9',
      rule: 'Nine is rhyme!',
      description: {
        en: 'Say the word, other people will have to rhyme to it.',
        pl: 'Wymyśl słowo, inne osoby (zgodnie z ruchem wskazówek zegara) będą musiały do niego zarymować. Kto nic nie wymyśli, pije!'
      }
    },
    {
      number: '10',
      rule: 'Ten is category!',
      description: {
        en: 'Come up with the category, e.g. car brands. Each person in sequence have to say one, otherwise have to drink!',
        pl: 'Wymyśl kategorię np. marki samochodów. Każda osoba będzie musiała podać jeden pasujący przykład. Wymieniamy aż do skucia!'
      }
    },
    {
      number: 'jack',
      rule: 'Choose a rule!',
      description: {
        en: 'Come up with the rule. All the players must respect that until the end of the game, e.g. when you are drinking one hand must be up.',
        pl: 'Wymyśl zasadę, która będzie obowiązywać do końca gry np. podczas picia jedna ręką musi być uniesiona'
      }
    },
    {
      number: 'queen',
      rule: 'Question master!',
      description: {
        en: 'You can questioning other players, if somebody answer your question, he or she has to drink.',
        pl: 'Zadawaj pytania innym graczom. Nie mogą odpowiedzieć Ci na pytanie, w przeciwnym wypadku muszą się napić. Karta obowiązuje do końca gry lub do wyciągnięcia damy przez innego gracza.'
      }
    },
    {
      number: 'king',
      rule: 'Crown on the head!',
      description: {
        en: 'Put the crown on your head, e.g. a pack of cigarettes. If it drops, you have to drink. You are the king until the next person draws this card.',
        pl: 'Załóż koronę na głowę np. paczkę papierosów. Jeśli spadnie, pijesz! Jesteś królem do końca gry lub wylosowania karty przez innego gracza.'
      }
    },
    {number: 'ace', rule: 'Ace is wave!', description: {en: 'Everyone has to drink!', pl: 'Wszyscy piją!'}}
  ]
};


