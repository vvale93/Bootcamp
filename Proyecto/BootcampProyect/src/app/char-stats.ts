export interface CharStats {
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
    "stats": {
        "health": number,
        "powerType": string,
        "power": number,
        "str": number,
        "agi": number,
        "int": number,
        "sta": number,
        "speedRating": number,
        "speedRatingBonus": number,
        "crit": number,
        "critRating": number,
        "haste": number,
        "hasteRating": number,
        "hasteRatingPercent": number,
        "mastery": number,
        "masteryRating": number,
        "leech": number,
        "leechRating": number,
        "leechRatingBonus": number,
        "versatility": number,
        "versatilityDamageDoneBonus": number,
        "versatilityHealingDoneBonus": number,
        "versatilityDamageTakenBonus": number,
        "avoidanceRating": number,
        "avoidanceRatingBonus": number,
        "spellPen": number,
        "spellCrit": number,
        "spellCritRating": number,
        "mana5": number,
        "mana5Combat": number,
        "armor": number,
        "dodge": number,
        "dodgeRating": number,
        "parry": number,
        "parryRating": number,
        "block": number,
        "blockRating": number,
        "mainHandDmgMin": number,
        "mainHandDmgMax": number,
        "mainHandSpeed": number,
        "mainHandDps": number,
        "offHandDmgMin": number,
        "offHandDmgMax": number,
        "offHandSpeed": number,
        "offHandDps": number,
        "rangedDmgMin": number,
        "rangedDmgMax": number,
        "rangedSpeed": number,
        "rangedDps": number
    },
    "totalHonorableKills": number
}
