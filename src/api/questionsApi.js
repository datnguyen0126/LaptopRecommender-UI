const questions = [
    {
        id: 1,
        contents: "How many provices does Viet Nam have?",
        options: [
            "62",
            "63",
            "64",
            "65"
        ],
        level: "easy",
        answer: "64"
    },
    {
        id: 2,
        contents: "How many days do we have in a week?",
        options: [
            "3",
            "4",
            "5",
            "7"
        ],
        level: "easy",        
        answer: "64"
    },
    {
        id: 3,
        contents: "How many days are there in a normal year?",
        options: [
            "62",
            "63",
            "64",
            "65"
        ],
        level: "hard",
        answer: "64"
    },
    {
        id: 4,
        contents: "How many colors are there in a rainbow?",
        options: [
            "4",
            "7",
            "9",
            "10"
        ],
        level: "hard",
        answer: "64"
    },
    {
        id: 5,
        contents: "Which animal is known as the 'Ship of the Desert?",
        options: [
            "62",
            "63",
            "64",
            "65"
        ],
        level: "hard",
        answer: "64"
    },
    {
        id: 6,
        contents: "How many letters are there in the English alphabet?",
        options: [
            "4",
            "7",
            "9",
            "10"
        ],
        level: "hard",
        answer: "64"
    },
    {
        id: 7,
        contents: "How many consonants are there in the English alphabet?",
        options: [
            "62",
            "63",
            "64",
            "65"
        ],
        level: "hard",
        answer: "64"
    },
    {
        id: 8,
        contents: "What do you call a house made of ice?",
        options: [
            "4",
            "7",
            "9",
            "10"
        ],
        level: "hard",
        answer: "64"
    },
    {
        id: 9,
        contents: "Which is the largest animal in the world?",
        options: [
            "62",
            "63",
            "64",
            "65"
        ],
        level: "hard",
        answer: "64"
    },
    {
        id: 10,
        contents: "Which is the tallest animal on the earth?",
        options: [
            "62",
            "63",
            "64",
            "65"
        ],
        level: "hard",
        answer: "64"
    },
]

export default {
    getQuestion (callback) {
      setTimeout(() => callback(questions), 100)
    },
}

