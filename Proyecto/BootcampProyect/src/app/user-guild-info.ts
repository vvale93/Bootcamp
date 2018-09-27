export interface UserGuildInfo {
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
    "guild": {
        "name": string,
        "realm": string,
        "battlegroup": string,
        "members": number,
        "achievementPoints": number,
        "emblem": {
            "icon": number,
            "iconColor": string,
            "iconColorId": number,
            "border": number,
            "borderColor": string,
            "borderColorId": number,
            "backgroundColor": string,
            "backgroundColorId": number
        }
    },
    "totalHonorableKills": number
}
