const questions = [
    {
        id: 1,
        contents: "How much are you going to spend?",
        options: [
            "Up to 5000000",
            "Up to 10000000",
            "Up to 15000000",
            "Up to 20000000",
            "Up to 25000000",
            "Up to 30000000",
            "Another range",
            "Unlimited",
        ],
        required: true,
        mutiple: false,
    },
    {
        id: 2,
        contents: "What will you mainly use your laptop for?",
        options: [
            "Personal Use",
            "Professional Use",
        ],
        required: false,
        mutiple: false,
    },
    {
        id: 3,
        contents: "Which of the following will you use frequently?",
        options: [
            "Web browsing",
            "Social Media",
            "Email",
            "Document",
            "Watching Movies",
            "Light Gaming",
            "Medium Gaming",
            "Heavy Gaming",
            "Light photo or Video Editing",
            "Heavy photo or video Editing"
        ],
        required: true,
        mutiple: true,
    },
    {
        id: 4,
        contents: "Where will you use your laptop?",
        options: [
            "All around the house",
            "Public places",
            "Long journeys",
            "At your desk"
        ],
        required: false,
        mutiple: false,
    },
    {
        id: 5,
        contents: "Are any of these important to you?",
        options: [
            "Using laptop as a tablet",
            "Touchscreen laptop",
            "Need to work continously for long time",
            "Working in low light conditions",
            "Fingerprint",
        ],
        required: false,
        mutiple: true,
    },
    {
        id: 6,
        contents: "Is there a specific screen size you prefer?",
        options: [
            "Very small",
            "Small",
            "Medium",
            "Large",
            "Any size"
        ],
        required: true,
        mutiple: true,
    },
    {
        id: 7,
        contents: "Which operating system are you comfortable with?",
        options: [
            "Microsoft windows",
            "Mac os",
            "Linux",
            "Any os"
        ],
        required: true,
        mutiple: true,
    },
]

export default {
    getQuestion (callback) {
      setTimeout(() => callback(questions), 100)
    },
}

