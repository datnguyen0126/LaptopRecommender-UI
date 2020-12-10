const questions = [
    {
        "id": 0,
        "answers": [
            {
                "id": 1,
                "content": "Up to 5000000",
                "question": 0
            },
            {
                "id": 2,
                "content": "Up to 10000000",
                "question": 0
            },
            {
                "id": 3,
                "content": "Up to 15000000",
                "question": 0
            },
            {
                "id": 4,
                "content": "Up to 20000000",
                "question": 0
            },
            {
                "id": 5,
                "content": "Up to 25000000",
                "question": 0
            },
            {
                "id": 6,
                "content": "Up to 30000000",
                "question": 0
            },
            {
                "id": 7,
                "content": "Up to 40000000",
                "question": 0
            },
            {
                "id": 8,
                "content": "Unlimited",
                "question": 0
            }
        ],
        "content": "How much are you going to spend?",
        "required": true,
        "multiple": false,
        "spec": false
    },
    {
        "id": 1,
        "answers": [
            {
                "id": 9,
                "content": "Web browsing",
                "question": 1
            },
            {
                "id": 10,
                "content": "Social Media",
                "question": 1
            },
            {
                "id": 11,
                "content": "Email",
                "question": 1
            },
            {
                "id": 12,
                "content": "Document",
                "question": 1
            },
            {
                "id": 13,
                "content": "Watching Movies",
                "question": 1
            },
            {
                "id": 14,
                "content": "Light Gaming",
                "question": 1
            },
            {
                "id": 15,
                "content": "Medium Gaming",
                "question": 1
            },
            {
                "id": 16,
                "content": "Heavy Gaming",
                "question": 1
            },
            {
                "id": 17,
                "content": "Photo editing (pro)",
                "question": 1
            },
            {
                "id": 18,
                "content": "Photo editing (basic)",
                "question": 1
            },
            {
                "id": 19,
                "content": "Video production (pro)",
                "question": 1
            },
            {
                "id": 20,
                "content": "Video production basic)",
                "question": 1
            },
            {
                "id": 21,
                "content": "3D design",
                "question": 1
            },
            {
                "id": 22,
                "content": "Front-end developer",
                "question": 1
            },
            {
                "id": 23,
                "content": "Back-end Tech",
                "question": 1
            }
        ],
        "content": "Which of the following will you use frequently?",
        "required": true,
        "multiple": true,
        "spec": false
    },
    {
        "id": 2,
        "answers": [
            {
                "id": 24,
                "content": "All around the house",
                "question": 2
            },
            {
                "id": 25,
                "content": "Public places",
                "question": 2
            },
            {
                "id": 26,
                "content": "Long journeys",
                "question": 2
            },
            {
                "id": 27,
                "content": "At your desk",
                "question": 2
            }
        ],
        "content": "Where will you use your laptop?",
        "required": false,
        "multiple": false,
        "spec": false
    },
    {
        "id": 3,
        "answers": [
            {
                "id": 28,
                "content": "Using laptop as a tablet",
                "question": 3
            },
            {
                "id": 29,
                "content": "Touchscreen laptop",
                "question": 3
            },
            {
                "id": 30,
                "content": "Need to work continuously for long time",
                "question": 3
            },
            {
                "id": 31,
                "content": "Working in low light conditions",
                "question": 3
            },
            {
                "id": 32,
                "content": "Fingerprint",
                "question": 3
            }
        ],
        "content": "Are any of these important to you?",
        "required": false,
        "multiple": true,
        "spec": false
    },
    {
        "id": 4,
        "answers": [
            {
                "id": 33,
                "content": "Very small (<= 13')",
                "question": 4
            },
            {
                "id": 34,
                "content": "Small (14')",
                "question": 4
            },
            {
                "id": 35,
                "content": "Medium (15')",
                "question": 4
            },
            {
                "id": 36,
                "content": "Large (> 17')",
                "question": 4
            },
            {
                "id": 37,
                "content": "Any size",
                "question": 4
            }
        ],
        "content": "Is there a specific screen size you prefer?",
        "required": true,
        "multiple": true,
        "spec": false
    },
    {
        "id": 5,
        "answers": [
            {
                "id": 38,
                "content": "Microsoft windows",
                "question": 5
            },
            {
                "id": 39,
                "content": "Mac os",
                "question": 5
            },
            {
                "id": 40,
                "content": "Linux",
                "question": 5
            },
            {
                "id": 41,
                "content": "Any os",
                "question": 5
            }
        ],
        "content": "Which operating system are you comfortable with?",
        "required": true,
        "multiple": false,
        "spec": false
    },
    {
        "id": 6,
        "answers": [
            {
                "id": 42,
                "content": "Intel pentium",
                "question": 6
            },
            {
                "id": 43,
                "content": "Intel core i3",
                "question": 6
            },
            {
                "id": 44,
                "content": "Intel core i5",
                "question": 6
            },
            {
                "id": 45,
                "content": "Intel core i7",
                "question": 6
            },
            {
                "id": 46,
                "content": "Amd",
                "question": 6
            }
        ],
        "content": "Which series cpu you prefer?",
        "required": false,
        "multiple": true,
        "spec": true
    },
    {
        "id": 7,
        "answers": [
            {
                "id": 47,
                "content": "Integrated intel",
                "question": 7
            },
            {
                "id": 48,
                "content": "Nvidia geforce GT series",
                "question": 7
            },
            {
                "id": 49,
                "content": "Nvidia geforce GTX series",
                "question": 7
            },
            {
                "id": 50,
                "content": "Amd radeon series",
                "question": 7
            },
            {
                "id": 51,
                "content": "Amd vega series",
                "question": 7
            }
        ],
        "content": "Do you want a good graphic cards?",
        "required": false,
        "multiple": true,
        "spec": true
    },
    {
        "id": 8,
        "answers": [
            {
                "id": 52,
                "content": "Very light (1.5kg)",
                "question": 8
            },
            {
                "id": 53,
                "content": "Medium (2kg)",
                "question": 8
            },
            {
                "id": 54,
                "content": "Little heavy (2.5kg)",
                "question": 8
            },
            {
                "id": 55,
                "content": "No problem",
                "question": 8
            }
        ],
        "content": "How about weight?",
        "required": false,
        "multiple": true,
        "spec": true
    }
]

export default {
    getQuestion (callback) {
      setTimeout(() => callback(questions), 100)
    },
}

