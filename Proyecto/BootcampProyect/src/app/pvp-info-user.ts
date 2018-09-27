export interface PvpInfoUser {
    "lastModified": number,
    "name": string,
    "realm": string,
    "battlegroup": string,
    "class": number,
    "race": number,
    "gender": number,
    "level": number,
    "achievementPoints": number,
    "thumbnail": string,
    "calcClass": string,
    "faction": number,
    "pvp": {
        "brackets": {
            "ARENA_BRACKET_2v2": {
                "slug": string,
                "rating": 2719,
                "weeklyPlayed": number,
                "weeklyWon": number,
                "weeklyLost": number,
                "seasonPlayed": number,
                "seasonWon": number,
                "seasonLost": number
            },
            "ARENA_BRACKET_3v3": {
                "slug": string,
                "rating": number,
                "weeklyPlayed": number,
                "weeklyWon": number,
                "weeklyLost": number,
                "seasonPlayed": number,
                "seasonWon": number,
                "seasonLost": number
            },
            "ARENA_BRACKET_RBG": {
                "slug": string,
                "rating": number,
                "weeklyPlayed": number,
                "weeklyWon": number,
                "weeklyLost": number,
                "seasonPlayed": number,
                "seasonWon": number,
                "seasonLost": number
            }
        }
    },
    "totalHonorableKills": number
}

