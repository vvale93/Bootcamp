export interface Guild {
    "lastModified": number,
    "name": string,
    "realm": string,
    "battlegroup": string,
    "level": number,
    "side": number,
    "achievementPoints": number,
    "emblem": {
        "icon": number;
    }
    "members": [{
        "character": {
            "name": string,
            "realm": string,
            "class": number,
            "race": number,
            "level": number,
            "thumbnail": string        
        },
    }]
}
