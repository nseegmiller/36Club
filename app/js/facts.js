var mathFacts = {
    "kindergarten": {
    },
    "first": {
    },
    "second": {
    },
    "third": {
    },
    "fourth": {
    },
    "fifth": {
    },
    "sixth": {
    }
};

var entry = {
    type: "addition",
    facts: [
        {a: 1, b: 1, op: '+'},
        {a: 1, b: 2, op: '+'},
        {a: 1, b: 3, op: '+'},
        {a: 1, b: 4, op: '+'},
        {a: 1, b: 5, op: '+'},
        {a: 1, b: 6, op: '+'},
        {a: 1, b: 7, op: '+'},
        {a: 1, b: 8, op: '+'},
        {a: 1, b: 9, op: '+'},
        {a: 2, b: 2, op: '+'},
        {a: 2, b: 3, op: '+'},
        {a: 2, b: 4, op: '+'},
        {a: 2, b: 5, op: '+'},
        {a: 2, b: 6, op: '+'},
        {a: 2, b: 7, op: '+'},
        {a: 2, b: 8, op: '+'},
        {a: 2, b: 9, op: '+'},
        {a: 3, b: 3, op: '+'},
        {a: 3, b: 4, op: '+'},
        {a: 3, b: 5, op: '+'},
        {a: 3, b: 6, op: '+'},
        {a: 3, b: 7, op: '+'},
        {a: 3, b: 8, op: '+'},
        {a: 3, b: 9, op: '+'},
        {a: 0, b: 1, op: '+'},
        {a: 0, b: 2, op: '+'},
        {a: 0, b: 3, op: '+'},
        {a: 0, b: 4, op: '+'},
        {a: 0, b: 5, op: '+'},
        {a: 0, b: 6, op: '+'},
        {a: 0, b: 7, op: '+'},
        {a: 0, b: 8, op: '+'},
        {a: 0, b: 9, op: '+'},
        {a: 0, b: 0, op: '+'}
    ]
};

mathFacts.kindergarten[entry.type] = (entry.facts);
mathFacts.first[entry.type] = (entry.facts);

entry = {
    type: "addition",
    facts: [
        {a: 2, b: 2, op: '+'},
        {a: 2, b: 3, op: '+'},
        {a: 2, b: 4, op: '+'},
        {a: 2, b: 5, op: '+'},
        {a: 2, b: 6, op: '+'},
        {a: 2, b: 7, op: '+'},
        {a: 2, b: 8, op: '+'},
        {a: 2, b: 9, op: '+'},
        {a: 3, b: 3, op: '+'},
        {a: 3, b: 4, op: '+'},
        {a: 3, b: 5, op: '+'},
        {a: 3, b: 6, op: '+'},
        {a: 3, b: 7, op: '+'},
        {a: 3, b: 8, op: '+'},
        {a: 3, b: 9, op: '+'},
        {a: 4, b: 4, op: '+'},
        {a: 4, b: 5, op: '+'},
        {a: 4, b: 6, op: '+'},
        {a: 4, b: 7, op: '+'},
        {a: 4, b: 8, op: '+'},
        {a: 4, b: 9, op: '+'},
        {a: 5, b: 5, op: '+'},
        {a: 5, b: 6, op: '+'},
        {a: 5, b: 7, op: '+'},
        {a: 5, b: 8, op: '+'},
        {a: 5, b: 9, op: '+'},
        {a: 6, b: 6, op: '+'},
        {a: 6, b: 7, op: '+'},
        {a: 6, b: 8, op: '+'},
        {a: 6, b: 9, op: '+'},
        {a: 7, b: 7, op: '+'},
        {a: 7, b: 8, op: '+'},
        {a: 7, b: 9, op: '+'},
        {a: 8, b: 8, op: '+'},
        {a: 8, b: 9, op: '+'},
        {a: 9, b: 9, op: '+'}
    ]
};

mathFacts.first[entry.type + ' set 2'] = entry.facts;
mathFacts.second[entry.type] = entry.facts;
mathFacts.third[entry.type] = entry.facts;
mathFacts.fourth[entry.type] = entry.facts;
mathFacts.fifth[entry.type] = entry.facts;
mathFacts.sixth[entry.type] = entry.facts;

entry = {
    type: "subtraction",
    facts: [
        {a: 0, b: 0, op: '-'},
        {a: 1, b: 0, op: '-'},
        {a: 2, b: 0, op: '-'},
        {a: 3, b: 0, op: '-'},
        {a: 4, b: 0, op: '-'},
        {a: 5, b: 0, op: '-'},
        {a: 6, b: 0, op: '-'},
        {a: 7, b: 0, op: '-'},
        {a: 8, b: 0, op: '-'},
        {a: 9, b: 0, op: '-'},
        {a: 1, b: 1, op: '-'},
        {a: 2, b: 1, op: '-'},
        {a: 3, b: 1, op: '-'},
        {a: 4, b: 1, op: '-'},
        {a: 5, b: 1, op: '-'},
        {a: 6, b: 1, op: '-'},
        {a: 7, b: 1, op: '-'},
        {a: 8, b: 1, op: '-'},
        {a: 9, b: 1, op: '-'},
        {a: 2, b: 2, op: '-'},
        {a: 3, b: 2, op: '-'},
        {a: 4, b: 2, op: '-'},
        {a: 5, b: 2, op: '-'},
        {a: 6, b: 2, op: '-'},
        {a: 7, b: 2, op: '-'},
        {a: 8, b: 2, op: '-'},
        {a: 9, b: 2, op: '-'},
        {a: 3, b: 3, op: '-'},
        {a: 4, b: 3, op: '-'},
        {a: 5, b: 3, op: '-'},
        {a: 6, b: 3, op: '-'},
        {a: 7, b: 3, op: '-'},
        {a: 8, b: 3, op: '-'},
        {a: 9, b: 3, op: '-'}
    ]
};

mathFacts.first[entry.type] = entry.facts;
mathFacts.second[entry.type] = entry.facts;

entry = {
    type: "subtraction",
    facts: [
        {a: 4, b: 2, op: '-'},
        {a: 5, b: 2, op: '-'},
        {a: 6, b: 2, op: '-'},
        {a: 7, b: 2, op: '-'},
        {a: 8, b: 2, op: '-'},
        {a: 9, b: 2, op: '-'},
        {a: 10, b: 2, op: '-'},
        {a: 11, b: 2, op: '-'},
        {a: 6, b: 3, op: '-'},
        {a: 7, b: 3, op: '-'},
        {a: 8, b: 3, op: '-'},
        {a: 9, b: 3, op: '-'},
        {a: 10, b: 3, op: '-'},
        {a: 11, b: 3, op: '-'},
        {a: 12, b: 3, op: '-'},
        {a: 8, b: 4, op: '-'},
        {a: 9, b: 4, op: '-'},
        {a: 10, b: 4, op: '-'},
        {a: 11, b: 4, op: '-'},
        {a: 12, b: 4, op: '-'},
        {a: 13, b: 4, op: '-'},
        {a: 10, b: 5, op: '-'},
        {a: 11, b: 5, op: '-'},
        {a: 12, b: 5, op: '-'},
        {a: 13, b: 5, op: '-'},
        {a: 14, b: 5, op: '-'},
        {a: 12, b: 6, op: '-'},
        {a: 13, b: 6, op: '-'},
        {a: 14, b: 6, op: '-'},
        {a: 15, b: 6, op: '-'},
        {a: 14, b: 7, op: '-'},
        {a: 15, b: 7, op: '-'},
        {a: 16, b: 7, op: '-'},
        {a: 16, b: 8, op: '-'},
        {a: 17, b: 8, op: '-'},
        {a: 18, b: 9, op: '-'}
    ]
};

mathFacts.second[entry.type] = entry.facts;
mathFacts.third[entry.type] = entry.facts;
mathFacts.fourth[entry.type] = entry.facts;
mathFacts.fifth[entry.type] = entry.facts;
mathFacts.sixth[entry.type] = entry.facts;

entry = {
    type: "multiplication",
    facts: [
        {a: 2, b: 2, op: '*'},
        {a: 3, b: 2, op: '*'},
        {a: 4, b: 2, op: '*'},
        {a: 5, b: 2, op: '*'},
        {a: 6, b: 2, op: '*'},
        {a: 7, b: 2, op: '*'},
        {a: 8, b: 2, op: '*'},
        {a: 9, b: 2, op: '*'},
        {a: 3, b: 3, op: '*'},
        {a: 4, b: 3, op: '*'},
        {a: 5, b: 3, op: '*'},
        {a: 6, b: 3, op: '*'},
        {a: 7, b: 3, op: '*'},
        {a: 8, b: 3, op: '*'},
        {a: 9, b: 3, op: '*'},
        {a: 4, b: 4, op: '*'},
        {a: 5, b: 4, op: '*'},
        {a: 6, b: 4, op: '*'},
        {a: 7, b: 4, op: '*'},
        {a: 8, b: 4, op: '*'},
        {a: 9, b: 4, op: '*'},
        {a: 5, b: 5, op: '*'},
        {a: 6, b: 5, op: '*'},
        {a: 7, b: 5, op: '*'},
        {a: 8, b: 5, op: '*'},
        {a: 9, b: 5, op: '*'},
        {a: 6, b: 6, op: '*'},
        {a: 7, b: 6, op: '*'},
        {a: 8, b: 6, op: '*'},
        {a: 9, b: 6, op: '*'},
        {a: 7, b: 7, op: '*'},
        {a: 8, b: 7, op: '*'},
        {a: 9, b: 7, op: '*'},
        {a: 8, b: 8, op: '*'},
        {a: 9, b: 8, op: '*'},
        {a: 9, b: 9, op: '*'}
    ]
};

mathFacts.third[entry.type] = entry.facts;
mathFacts.fourth[entry.type] = entry.facts;
mathFacts.fifth[entry.type] = entry.facts;
mathFacts.sixth[entry.type] = entry.facts;

entry = {
    type: "division",
    facts: [
        {a: 16, b: 4, op: '/'},
        {a: 21, b: 3, op: '/'},
        {a: 9, b: 3, op: '/'},
        {a: 16, b: 2, op: '/'},
        {a: 10, b: 2, op: '/'},
        {a: 4, b: 2, op: '/'},
        {a: 20, b: 4, op: '/'},
        {a: 24, b: 3, op: '/'},
        {a: 12, b: 3, op: '/'},
        {a: 18, b: 2, op: '/'},
        {a: 12, b: 2, op: '/'},
        {a: 6, b: 2, op: '/'},
        {a: 24, b: 4, op: '/'},
        {a: 27, b: 3, op: '/'},
        {a: 15, b: 3, op: '/'},
        {a: 18, b: 3, op: '/'},
        {a: 14, b: 2, op: '/'},
        {a: 8, b: 2, op: '/'},
        {a: 64, b: 8, op: '/'},
        {a: 49, b: 7, op: '/'},
        {a: 42, b: 6, op: '/'},
        {a: 40, b: 5, op: '/'},
        {a: 25, b: 5, op: '/'},
        {a: 28, b: 4, op: '/'},
        {a: 72, b: 8, op: '/'},
        {a: 56, b: 7, op: '/'},
        {a: 48, b: 6, op: '/'},
        {a: 45, b: 5, op: '/'},
        {a: 30, b: 5, op: '/'},
        {a: 32, b: 4, op: '/'},
        {a: 81, b: 9, op: '/'},
        {a: 63, b: 7, op: '/'},
        {a: 54, b: 6, op: '/'},
        {a: 36, b: 6, op: '/'},
        {a: 35, b: 5, op: '/'},
        {a: 36, b: 4, op: '/'}
    ]
};

mathFacts.fourth[entry.type] = entry.facts;
mathFacts.fifth[entry.type] = entry.facts;
mathFacts.sixth[entry.type] = entry.facts;