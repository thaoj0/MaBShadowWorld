Lecode.S_TBS.Config = {};


Lecode.S_TBS.Config.Colors = {
    ability_proc: "#A901DB"
};

/*-------------------------------------------------------------------------
* Sprites Poses
-------------------------------------------------------------------------*/
Lecode.S_TBS.Config.Battler_Sprites = {

    // Config_name: data
    "Default": [
        // [pose_name,filename,frames]
        ["idle", "_idle", 4]/*,
        ["dead", "_dead", 1]*/
    ],
/*
    "Angela": [
        ["idle", "_idle", 1],
        ["move", "_move", 4],
        ["cast", "_cast", 1],
        ["charge", "_cast", 1],
        ["atk", "_atk", 4],
        ["hit", "_hit", 1],
        ["dead", "_dead", 1],
        ["turn_start", "_victory", 5],
        ["victory", "_victory", 5]
    ],

    "Duran": [
        ["idle", "_idle", 1],
        ["move", "_move", 4],
        ["cast", "_cast", 3],
        ["atk", "_atk", 4],
        ["hit", "_hit", 1],
        ["dead", "_dead", 1]
    ],
    */
    "Rabbit": [
        ["idle", "_idle", 1],
        ["move", "_move", 3],
        ["atk", "_atk", 3],
        ["hit", "_hit", 1],
        ["dead", "_dead", 1]
    ],   
    
    "Mago": [
        ["idle", "_idle", 1],
        ["move", "_move", 3],
        ["cast", "_cast", 2],
        ["atk", "_atk", 4],
        ["hit", "_hit", 1],
        ["dead", "_dead", 1]
    ],

    "Evil Statue": [
        ["idle", "_idle", 1],
        ["cast", "_cast", 3],
        ["atk", "_cast", 3],
        ["dead", "_dead", 1]
    ],
     "Mark": [
        ["idle", "_idle", 3],
        //["move", "_move", 3],
        //["atk", "_atk", 4],
        //["hit", "_hit", 1],
        ["dead", "_dead", 1]
    ],
    
     "Maxie": [
        ["idle", "_idle", 1],
        //["move", "_move", 3],
        //["atk", "_atk", 3],
        //["hit", "_hit", 1],
        ["dead", "_dead", 1]
    ],
     
     "Reeve": [
        ["idle", "_idle", 3],
        //["move", "_move", 3],
        //["atk", "_atk", 4],
        //["hit", "_hit", 1],
        ["dead", "_dead", 1]
    ],
     
     "Diana": [
        ["idle", "_idle", 1],
        //["move", "_move", 3],
        //["atk", "_atk", 3],
        //["hit", "_hit", 1],
        ["dead", "_dead", 1]
    ],
     
     "Luke": [
        ["idle", "_idle", 3],
        //["move", "_move", 3],
        //["atk", "_atk", 4],
        //["hit", "_hit", 1],
        ["dead", "_dead", 1]
    ],
    
    "Aurora": [
        ["idle", "_idle", 1],
        //["move", "_move", 4],
        //["atk", "_atk", 4],
        //["hit", "_hit", 1],
        ["dead", "_dead", 1]
    ],
     
     "Renji": [
        ["idle", "_idle", 3],
        //["move", "_move", 3],
        //["atk", "_atk", 4],
        //["hit", "_hit", 1],
        ["dead", "_dead", 1]
    ],
    
    "Renji_beast": [
        ["idle", "_idle", 3],
        //["move", "_move", 3],
        //["atk", "_atk", 4],
        //["hit", "_hit", 1],
        ["dead", "_dead", 1]
    ],
     
     /*"Mai": [
        ["idle", "_idle", 3],
        //["move", "_move", 3],
        //["atk", "_atk", 3],
        //["hit", "_hit", 1],
        ["dead", "_dead", 1]
    ],*/
     
     "Sophia": [
        ["idle", "_idle", 1],
        //["move", "_move", 3],
        //["atk", "_atk", 4],
        //["hit", "_hit", 1],
        ["dead", "_dead", 1]
    ],
     
     "Calth": [
        ["idle", "_idle", 1],
        //["move", "_move", 3],
        //["atk", "_atk", 3],
        //["hit", "_hit", 1],
        ["dead", "_dead", 1]
    ],
     
     "Maxwell": [
        ["idle", "_idle", 3],
        //["move", "_move", 3],
        //["atk", "_atk", 4],
        //["hit", "_hit", 1],
        ["dead", "_dead", 1]
    ],
     
     "Xya": [
        ["idle", "_idle", 1],
        //["move", "_move", 3],
        //["atk", "_atk", 3],
        //["hit", "_hit", 1],
        ["dead", "_dead", 1]
    ]

};

/*-------------------------------------------------------------------------
* Tile effects
-------------------------------------------------------------------------*/
Lecode.S_TBS.Config.Tile_Effects = {

    50: {
        "entering,turn_start,turn_end": {
            skill_effects: 50,
            play_anim: true,
            aoe: "circle(0)",
            stop_movement: true,
            wait: 40
        }
    },

    51: {
        "entering": {
            skill_effects: 51,
            play_anim: true,
            aoe: "circle(0)",
            stop_movement: true,
            wait: 40
        },
        "leaving": {
            skill_effects: 52,
            play_anim: true,
            aoe: "circle(0)",
            stop_movement: false,
            wait: 40
        }
    },

    52: {
        "entering": {
            skill_effects: 50,
            play_anim: true,
            aoe: "circle(2)",
            stop_movement: true,
            wait: 40
        }
    },

    53: {
        "entering": {
            skill_effects: 53,
            play_anim: true,
            aoe: "circle(1)",
            stop_movement: true,
            wait: 40
        }
    },

    73: {
        "entering": {
            escape: true
        }
    }

};

/*-------------------------------------------------------------------------
* Marks
-------------------------------------------------------------------------*/
Lecode.S_TBS.Config.Marks = {
    
    "burn_field": {
        body_anim: 160,
        disappearing_anim: 0,
        size: "circle(0)",
        triggers: {
            "laid, entering, turn_end": {
                stop_movement: false,
                skill_effects: 196, // Burn Skill
                effects_aoe: "circle(0)"
            }
        },
        duration: [3, "turn_start"]
    }, 
    
    "soak_field": {
        body_anim: 161,
        disappearing_anim: 0,
        size: "circle(0)",
        triggers: {
            "laid, entering, turn_end": {
                stop_movement: false,
                skill_effects: 197, // Soak Skill
                effects_aoe: "circle(0)"
            }
        },
        duration: [3, "turn_start"]
    },
    
    "poison_field": {
        body_anim: 162,
        disappearing_anim: 0,
        size: "circle(0)",
        triggers: {
            "laid, entering, turn_end": {
                stop_movement: false,
                skill_effects: 198, // poison Skill
                effects_aoe: "circle(0)"
            }
        },
        duration: [3, "turn_start"]
    },
    
    "confuse_field": {
        body_anim: 163,
        disappearing_anim: 0,
        size: "circle(0)",
        triggers: {
            "laid, entering, turn_end": {
                stop_movement: false,
                skill_effects: 199, // confuse Skill
                effects_aoe: "circle(0)"
            }
        },
        duration: [3, "turn_start"]
    },
    
    "daze_field": {
        body_anim: 164,
        disappearing_anim: 0,
        size: "circle(0)",
        triggers: {
            "laid, entering, turn_end": {
                stop_movement: false,
                skill_effects: 200, // daze Skill
                effects_aoe: "circle(0)"
            }
        },
        duration: [3, "turn_start"]
    },
    
    "curse_field": {
        body_anim: 165,
        disappearing_anim: 0,
        size: "circle(0)",
        triggers: {
            "laid, entering, turn_end": {
                stop_movement: false,
                skill_effects: 201, // curse Skill
                effects_aoe: "circle(0)"
            }
        },
        duration: [3, "turn_start"]
    },
    
    "burning_justice": {
        body_anim: 158,
        disappearing_anim: 159,
        size: "square(1)",
        triggers: {
            "caster_start": {
                stop_movement: false,
                skill_effects: 192,
                effects_aoe: "circle(0)"
            }
        },
        max: 3,
        duration: [1, "turn_start"]
    },  
    
    "charged": {
        body_anim: 155,
        disappearing_anim: 156,
        size: "square(1)",
        triggers: {
            "caster_start": {
                stop_movement: false,
                skill_effects: 183,
                effects_aoe: "circle(0)"
            }
        },
        max: 1,
        duration: [1, "turn_start"]
    },    
    
    "sharpnel": {
        body_anim: 158,
        disappearing_anim: 159,
        size: "square(1)",
        triggers: {
            "caster_start": {
                stop_movement: false,
                skill_effects: 183,
                effects_aoe: "circle(0)"
            }
        },
        max: 1,
        duration: [1, "turn_start"]
    },  

    "explosive_mark": {
        body_anim: 174,
        disappearing_anim: 175,
        size: "square(1)",
        triggers: {
            "turn_end": {
                stop_movement: false,
                skill_effects: 77,
                effects_aoe: "circle(0)"
            }
        },
        max: 1,
        duration: [3, "turn_end"]
    },

    "volcano_cell": {
        body_anim: 150,
        size: "circle(0)",
        triggers: {
            "stepping, turn_start, turn_end": {
                stop_movement: false,
                skill_effects: 48,
                effects_aoe: "circle(0)"
            }
        },
        duration: [3, "turn_end"]
    },

    "magic_trap": {
        body_anim: 177,
        disappearing_anim: 178,
        size: "circle(0)",
        triggers: {
            "stepping": {
                stop_movement: true,
                skill_effects: 36,
                effects_aoe: "circle(0)"
            }
        },
        max_triggers: 1,
        duration: [1, "turn_start"]
    },

    "crystal_mark": {
        body_anim: 157,
        disappearing_anim: 158,
        size: "square(2)",
        triggers: {
            "stepping": {
                stop_movement: false,
                skill_effects: 45,
                effects_aoe: "circle(0)"
            }
        }
    },

    "anti_crystal_mark": {
        body_anim: 160,
        disappearing_anim: 161,
        size: "square(2)",
        triggers: {
            "stepping": {
                stop_movement: false,
                skill_effects: 47,
                effects_aoe: "circle(0)"
            }
        }
    },

    "mago_mark": {
        body_anim: 211,
        disappearing_anim: 212,
        size: "square(1)",
        triggers: {
            "turn_end": {
                stop_movement: false,
                skill_effects: 36,
                effects_aoe: "circle(0)"
            }
        },
        max: 1,
        duration: [3, "turn_end"]
    },
    
    "magic_attack": {
        body_anim: 211,
        disappearing_anim: 212,
        size: "square(1)",
        triggers: {
            "caster_start": {
                stop_movement: false,
                skill_effects: 108,
                effects_aoe: "circle(0)"
            }
        },
        max: 1,
        duration: [1, "turn_start"]
    },
    
    "sentinel_totem": {
        body_anim: 0, //189
        disappearing_anim: 190,
        size: "circle(2)",
        triggers: {
            "entering,turn_start": {
                stop_movement: true,
    
            }
        }
    },

};

/*-------------------------------------------------------------------------
* Aura
-------------------------------------------------------------------------*/
Lecode.S_TBS.Config.Aura = {

    "immoblize_aura": {
        size: "circle(1)",
        affect_caster: false,
        target_type: "enemy",
        states: [8],
        trigger_anim: 57
    },

    "intimidating_aura": {
        size: "circle(1)",
        affect_caster: false,
        target_type: "enemy",
        states: [43],
        trigger_anim: 142
    },

    "sentinel_totem": {
        size: "circle(2)",
        affect_caster: false,
        target_type: "enemy",
        states: [],
        stop_movement: true,
        action: {
            skill: 91
        }
    },
    
    "valor_rally": {
        size: "circle(2)",
        affect_caster: false,
        target_type: "ally",
        states: [64],
        trigger_anim: 52        
    },
    
    "fragile_flank": {
        size: "circle(1)",
        affect_caster: false,
        target_type: "enemy",
        states: [93],
        trigger_anim: 54        
    },
    
    "fear_flank": {
        size: "circle(1)",
        affect_caster: false,
        target_type: "enemy",
        states: [95],
        trigger_anim: 54        
    },
    
    "chaos_flank": {
        size: "circle(5)",
        affect_caster: false,
        target_type: "enemy",
        states: [98],
        trigger_anim: 54        
    },
    
    "guardian_flank": {
        size: "circle(2)",
        affect_caster: false,
        target_type: "enemy",
        states: [66],
        trigger_anim: 54
    }

};

/*-------------------------------------------------------------------------
* Projectiles
-------------------------------------------------------------------------*/
Lecode.S_TBS.Config.Projectiles = {
    
    "mainhanddagger": {
        anim: [228, 56, 50],
        adapt_angle: true,
        speed: 14,
        jump: 0
    },  
    
    "mainhandlongsword": {
        weapicon: [150, 32, 32],
        adapt_angle: true,
        speed: 9,
        jump: 0
    },
    
    "mainhandgreatsword": {
        weapicon: [150, 32, 32],
        adapt_angle: true,
        speed: 9,
        jump: 0
    },
    
    "mainhandscythe": {
        weapicon: [150, 32, 32],
        adapt_angle: true,
        speed: 9,
        jump: 0
    },
    
    "mainhandpolearm": {
        weapicon: [150, 32, 32],
        adapt_angle: true,
        speed: 9,
        jump: 0
    },
    
    "mainhandstaff": {
        weapicon: [150, 32, 32],
        adapt_angle: true,
        speed: 9,
        jump: 0
    },
    
    "mainhandmace": {
        weapicon: [150, 32, 32],
        adapt_angle: true,
        speed: 9,
        jump: 0
    },
    
    "mainhandshield": {
        weapicon: [150, 32, 32],
        adapt_angle: true,
        speed: 9,
        jump: 0
    },
    
    "gun_bullet": {
        filename: "Bullet",
        adapt_angle: true,
        speed: 10,
        jump: 0
    },
    
    "bow_arrow": {
        filename: "Arrow",
        adapt_angle: true,
        speed: 5,
        jump: 150
    },

    "ghost_arrow": {
        anim: [172, 36, 16],
        adapt_angle: true,
        speed: 9,
        jump: 0
    },

    "fire_ball": {
        anim: [147, 45, 38],
        adapt_angle: true,
        speed: 9,
        jump: 0
    },

    "fire_arrow": {
        anim: [179, 36, 16],
        adapt_angle: true,
        speed: 9,
        jump: 0
    },

    "phantom_slash": {
        anim: [131, 56, 50],
        adapt_angle: true,
        speed: 9,
        jump: 0
    },

    "great_wind": {
        anim: [228, 56, 50],
        adapt_angle: true,
        speed: 14,
        jump: 0
    },

    "mana_ball": {
        anim: [181, 34, 34],
        adapt_angle: false,
        speed: 6,
        jump: 250
    },
    
    "dagger": {
        filename: "Dagger",
        adapt_angle: true,
        speed: 9,
        jump: 0
    },

};

/*-------------------------------------------------------------------------
* Summons
-------------------------------------------------------------------------*/
Lecode.S_TBS.Config.Summons = {

    "justice": {
        turn_order: "after_caster",
        visible_in_timeline: true,
        type: "user_playable",
        kind: "actor",
        id: 22,
        tied_to_caster: true,
        stats: {
        }
    },

    "blood_slime": {
        turn_order: "after_caster",
        visible_in_timeline: true,
        type: "ai_playable",
        kind: "actor",
        id: 21,
        tied_to_caster: false,
        stats: {
        }
    },

    "ice_block": {
        turn_order: "none",
        kind: "enemy",
        id: 34,
        tied_to_caster: false,
        stats: {
            mhp: "+300%"
        }
    },
    
    "shard_block": {
        turn_order: "none",
        kind: "actor",
        id: 34,
        tied_to_caster: false,
        stats: {
            mhp: "+300%"
        }
    },

    "wind_spirit": {
        turn_order: "after_caster",
        visible_in_timeline: true,
        kind: "actor",
        id: 18,
        tied_to_caster: true,
        stats: {
            default: "90%",
            mhp: "70%",
            mmp: "+10%"
        }
    },

    "pyra": {
        turn_order: "after_caster",
        kind: "enemy",
        id: 7,
        tied_to_caster: true,
        stats: {
        }
    },

    "pixie": {
        turn_order: "after_caster",
        kind: "actor",
        id: 19,
        tied_to_caster: true,
        stats: {
            default: "90%",
            mhp: "60%",
            mmp: "+10%"
        }
    },

    "fire_chicken": {
        turn_order: "after_caster",
        kind: "actor",
        id: 20,
        tied_to_caster: false,
        stats: {
            default: "90%",
            mhp: "15%"
        }
    },

    "sentinel_totem": {
        turn_order: "none",
        kind: "actor",
        id: 14,
        tied_to_caster: true,
        stats: {
            default: "80%",
            mhp: "+5%",
            atk: "160%",
            mat: "160%"
        }
    },
};

/*-------------------------------------------------------------------------
* Custom Scopes
-------------------------------------------------------------------------*/
Lecode.S_TBS.Config.Custom_Scopes = {

    "fire_storm": {
        data: "[cx,cy-2],[cx-1,cy-1],[cx+1,cy-1],[cx-2,cy],[cx+2,cy],[cx-1,cy+1],[cx+1,cy+1],[cx,cy+2]"
    },

    "rush": {
        data: "[cx+3,cy],[cx-3,cy],[cx,cy+3],[cx,cy-3]"
    },

    "volcano_ground": {
        data: "[cx-2,cy-2],[cx,cy-2],[cx+2,cy-2],[cx-1,cy-1],[cx+1,cy-1],[cx-2,cy],[cx+2,cy],[cx-1,cy+1],[cx+1,cy+1],[cx-2,cy+2],[cx,cy+2],[cx+2,cy+2]"
    },

    "fire_ball": {
        data: "[cx,cy+1],[cx-1,cy+2],[cx,cy+2],[cx+1,cy+2],[cx-2,cy+3],[cx-1,cy+3],[cx,cy+3],[cx+1,cy+3],[cx+2,cy+3],[cx-3,cy+4],[cx-2,cy+4],[cx-1,cy+4],[cx,cy+4],[cx+1,cy+4],[cx+2,cy+4],[cx+3,cy+4],[cx-4,cy+5],[cx-3,cy+5],[cx-2,cy+5],[cx-1,cy+5],[cx,cy+5],[cx+1,cy+5],[cx+2,cy+5],[cx+3,cy+5],[cx+4,cy+5],[cx-5,cy+6],[cx-4,cy+6],[cx-3,cy+6],[cx-2,cy+6],[cx-1,cy+6],[cx,cy+6],[cx+1,cy+6],[cx+2,cy+6],[cx+3,cy+6],[cx+4,cy+6],[cx+5,cy+6]"
    },

    "ice_fury": {
        data_right: "[cx,cy],[cx+1,cy],[cx+2,cy]",
        data_left: "[cx-2,cy],[cx-1,cy],[cx,cy]",
        data_up: "[cx,cy-2],[cx,cy-1],[cx,cy]",
        data_down: "[cx,cy],[cx,cy+1],[cx,cy+2]"
    },

    "fire_arrows": {
        data_right: "[cx+2,cy-2],[cx+1,cy-1],[cx+2,cy-1],[cx,cy],[cx+1,cy],[cx+2,cy],[cx+1,cy+1],[cx+2,cy+1],[cx+2,cy+2]",
        data_left: "[cx-2,cy-2],[cx-2,cy-1],[cx-1,cy-1],[cx-2,cy],[cx-1,cy],[cx,cy],[cx-2,cy+1],[cx-1,cy+1],[cx-2,cy+2]",
        data_up: "[cx-2,cy-2],[cx-1,cy-2],[cx,cy-2],[cx+1,cy-2],[cx+2,cy-2],[cx-1,cy-1],[cx,cy-1],[cx+1,cy-1],[cx,cy]",
        data_down: "[cx,cy],[cx-1,cy+1],[cx,cy+1],[cx+1,cy+1],[cx-2,cy+2],[cx-1,cy+2],[cx,cy+2],[cx+1,cy+2],[cx+2,cy+2]"
    },

    "ice_wall": {
        data_right: "[cx,cy-1],[cx,cy],[cx,cy+1]",
        data_left: "[cx,cy-1],[cx,cy],[cx,cy+1]",
        data_up: "[cx-1,cy],[cx,cy],[cx+1,cy]",
        data_down: "[cx-1,cy],[cx,cy],[cx+1,cy]"
    },

    "ice_prison": {
        data: "[cx-1,cy-1],[cx,cy-1],[cx+1,cy-1],[cx-1,cy],[cx+1,cy],[cx-1,cy+1],[cx,cy+1],[cx+1,cy+1]"
    },
    
    "elementshard": {
        data_right: "[cx,cy],[cx+1,cy],[cx+2,cy]",
        data_left: "[cx-2,cy],[cx-1,cy],[cx,cy]",
        data_up: "[cx,cy-2],[cx,cy-1],[cx,cy]",
        data_down: "[cx,cy],[cx,cy+1],[cx,cy+2]"
    },
    
    "lunge": {
        data_right: "[cx,cy],[cx+1,cy]",
        data_left: "[cx-1,cy],[cx,cy]",
        data_up: "[cx,cy-1],[cx,cy]",
        data_down: "[cx,cy],[cx,cy+1]"
    },
    
    "sweep": {
        data_right: "[cx,cy-1],[cx,cy],[cx,cy+1]",
        data_left: "[cx,cy-1],[cx,cy],[cx,cy+1]",
        data_up: "[cx-1,cy],[cx,cy],[cx+1,cy]",
        data_down: "[cx-1,cy],[cx,cy],[cx+1,cy]"
    },
    
    "slayer": {
        data_right: "[cx,cy-1],[cx+1,cy-1],[cx,cy],[cx+1,cy],[cx,cy+1],[cx+1,cy+1]",
        data_left: "[cx-1,cy-1],[cx,cy-1],[cx-1,cy],[cx,cy],[cx-1,cy+1],[cx,cy+1]",
        data_up: "[cx-1,cy-1],[cx,cy-1],[cx+1,cy-1],[cx-1,cy],[cx,cy],[cx+1,cy]",
        data_down: "[cx-1,cy],[cx,cy],[cx+1,cy],[cx-1,cy+1],[cx,cy+1],[cx+1,cy+1]"
    },
    
    "darkcross": {
        data_right: "[cx,cy-1],[cx+2,cy-1],[cx+1,cy],[cx,cy+1],[cx+2,cy+1]",
        data_left: "[cx-2,cy-1],[cx,cy-1],[cx-1,cy],[cx-2,cy+1],[cx,cy+1]",
        data_up: "[cx-1,cy-2],[cx+1,cy-2],[cx,cy-1],[cx-1,cy],[cx+1,cy]",
        data_down: "[cx-1,cy],[cx+1,cy],[cx,cy+1],[cx-1,cy+2],[cx+1,cy+2]"
    },
    
    "holycross": {
        data_right: "[cx+1,cy-1],[cx+1,cy],[cx+2,cy],[cx+1,cy+1]",
        data_left: "[cx-1,cy-1],[cx-2,cy],[cx-1,cy],[cx-1,cy+1]",
        data_up: "[cx,cy-2],[cx-1,cy-1],[cx,cy-1],[cx+1,cy-1]",
        data_down: "[cx-1,cy+1],[cx,cy+1],[cx+1,cy+1],[cx,cy+2]"
    },
    
    "sword_rain":{
        data_right: "[cx+2,cy-2],[cx+1,cy-1],[cx+2,cy-1],[cx,cy],[cx+1,cy],[cx+2,cy],[cx+1,cy+1],[cx+2,cy+1],[cx+2,cy+2]",
        data_left: "[cx-2,cy-2],[cx-2,cy-1],[cx-1,cy-1],[cx-2,cy],[cx-1,cy],[cx,cy],[cx-2,cy+1],[cx-1,cy+1],[cx-2,cy+2]",
        data_up: "[cx-2,cy-2],[cx-1,cy-2],[cx,cy-2],[cx+1,cy-2],[cx+2,cy-2],[cx-1,cy-1],[cx,cy-1],[cx+1,cy-1],[cx,cy]",
        data_down: "[cx,cy],[cx-1,cy+1],[cx,cy+1],[cx+1,cy+1],[cx-2,cy+2],[cx-1,cy+2],[cx,cy+2],[cx+1,cy+2],[cx+2,cy+2]"
    }
};

/*-------------------------------------------------------------------------
* Sequences
-------------------------------------------------------------------------*/
Lecode.S_TBS.Config.Sequences = {

    /*-------------------------------------------------------------------------
    * Events Sequences
    -------------------------------------------------------------------------*/

    "battle_start": [

    ],

    "turn_start": [
        "play_pose: user, turn_start"
    ],

    "victory": [
        "play_pose: user, victory, victory"
    ],

    "dead": [
        "anim: user, collapse_anim",
        "play_pose: user, dead, dead",
        "wait: 40"
        //"perform_collapse: user"
    ],
    
    "dead_no_loop": [
        "anim: user, collapse_anim",
        "play_pose: user, dead",
        "set_frame: user, dead, last",
        "wait: 40"
    ],

    "dead_vanish": [
        "play_pose: user, dead",
        "anim: user, collapse_anim",
        "set_frame: user, dead, last",
        "wait: 20",
        "sprite_prop: user, opacity, 0"
    ],

    "revived": [
        "sprite_prop: user, opacity, 255",
        "play_pose: user, idle, idle",
    ],

    "damaged": [
        "sprite_shake: user, 6, 30",
        "play_pose: user, hit",
        "set_frame: user, hit, last",
        "wait: 5",
        "play_pose: user, idle"
    ],

    "evaded": [

    ],

    "healed": [

    ],

    "buffed": [

    ],

    "weakened": [

    ],

    /*-------------------------------------------------------------------------
    * Default Action Sequences
    -------------------------------------------------------------------------*/

    "atk": [
        "play_pose: user, atk",
        "wait: 10",
        "effects: {aoe}_battlers, current_obj, obj_anim",
        "wait: 60"
    ],

    "cast(loop)": [
        "play_pose: user, cast, cast",
        "wait: 4",
        "map_anim: user_cell, 248, 0, true"
    ],

    "pre-skill": [
        "call: cast(loop)",
        "wait: 4",
        "play_pose: user, atk, wait",
        //"set_frame: user, atk, last",
        "wait: 2"
    ],

    "post-skill": [
        "wait: 10",
        "play_pose: user, idle",
        "wait: 10"
    ],

    "skill": [
        "call: pre-skill",
        "effects: {aoe}_battlers, current_obj, obj_anim, 0, true",
        "call: post-skill"
    ],

    "map_skill": [
        "call: pre-skill",
        "map_effects: {aoe}, current_obj, obj_anim, 0, true",
        "call: post-skill"
    ],

    "item": [
        "play_pose: user, item",
        "wait: 10",
        "effects: {aoe}_battlers, current_obj, obj_anim",
        "wait: 60"
    ],

    "skill_neutral": [
        "play_pose: user, cast",
        "wait: 15",
        "effects: {aoe}_battlers, current_obj, obj_anim, 0, true",
        "play_pose: user, idle",
        "wait: 20"
    ],

    "map_skill_neutral": [
        "play_pose: user, cast",
        "wait: 15",
        "map_effects: {aoe}, current_obj, obj_anim, 0, true",
        "play_pose: user, idle",
        "wait: 20"
    ],
    
    
    "burnbomb": [
        "play_pose: user, atk",
        "wait: 10",
        "mark: burn_field, {aoe}",
        "wait: 60"
    ], 
    
    "soakbomb": [
        "play_pose: user, atk",
        "wait: 10",
        "mark: soak_field, {aoe}",
        "wait: 60"
    ], 
    
    "poisonbomb": [
        "play_pose: user, atk",
        "wait: 10",
        "mark: poison_field, {aoe}",
        "wait: 60"
    ], 
    
    "confusebomb": [
        "play_pose: user, atk",
        "wait: 10",
        "mark: confuse_field, {aoe}",
        "wait: 60"
    ], 
    
    "dazebomb": [
        "play_pose: user, atk",
        "wait: 10",
        "mark: daze_field, {aoe}",
        "wait: 60"
    ], 
    
    "cursebomb": [
        "play_pose: user, atk",
        "wait: 10",
        "mark: curse_field, {aoe}",
        "wait: 60"
    ], 
    
    "remove_field": [
        "script: for(var i = 0; i < BattleManagerTBS._actionAoE.length; i++){BattleManagerTBS._marksManager.removeFieldAt(BattleManagerTBS._actionAoE[i]);}",
        "wait: 10"
    ], 
    
    "remove_field_saved": [
        "script: BattleManagerTBS._marksManager.removeFieldSaved();",
        "wait: 10"
    ], 
    
    "trigger_field": [
        "if: BattleManagerTBS.getFieldInCell(BattleManagerTBS._activeCell) === 1",
            //"call: burnbomb, 1",
            "use_skill: user, 105",
        "end_if",
        "if: BattleManagerTBS.getFieldInCell(BattleManagerTBS._activeCell) === 2",
            "use_skill: user, 105",
        "end_if",
        "wait: 10"
    ], 
    
    "conquer": [
        "play_pose: user, atk",
        "wait: 10",
        "projectile: gun_bullet, user_cell, {aoe}_battlers, current_obj, obj_anim",
        //"effects: {circle(1)}, current_obj, obj_anim, 0, true",
        "wait: 60"
    ], 
    
    "divide": [
        "play_pose: user, atk",
        "wait: 10",
        "projectile: gun_bullet, user_cell, cursor_cell, current_obj, obj_anim",
        "wait: 10",
        //"if: isHit('{circle(1)}_battlers')", // Force
          "set_speed: {circle(1)}, +6",
          "push: {circle(1)}, cursor_cell, 1",
          "set_speed: {circle(1)}, reset",
        //"end_if",
        "wait: 60"
    ], 
    
    "projectile": [
        "play_pose: user, atk",
        "wait: 10",
        "projectile: $1, user_cell, {aoe}_battlers, current_obj, obj_anim",
        "wait: 60"
    ],
    
    "darkcross": [
        "play_pose: user, atk",
        "wait: 10",
        "effects: {aoe}_battlers, current_obj, obj_anim",
        "wait: 10",
        "effects: {aoe}_battlers, current_obj, obj_anim",
        "wait: 10",
        "effects: {aoe}_battlers, current_obj, obj_anim",
        "wait: 60"
    ],
    
    "darkcrossrush": [
        "wait: 10",
        "set_frame: user, atk, 0",
        "wait: 30",
        "play_pose: user, atk",
        "directional_anim: user, user, 126, 127, 128, 129",
        "look_at: user, cursor_cell",
        "set_speed: user, +6",
        //"move_straight: user, 2",
        "jump_to_cell: user, cursor_cell",
        "set_speed: user, reset",
        "set_frame: user, atk, last",
        "wait: 12",
        "effects: {aoe}_battlers, current_obj, obj_anim",
        "wait: 10",
        "effects: {aoe}_battlers, current_obj, obj_anim",
        "wait: 10",
        "effects: {aoe}_battlers, current_obj, obj_anim",
        "wait: 20",
        "play_pose: user, idle",
        "wait: 10"
    ],
    
    "holycrossrush": [
        "wait: 10",
        "set_frame: user, atk, 0",
        "wait: 30",
        "play_pose: user, atk",
        "directional_anim: user, user, 126, 127, 128, 129",
        "look_at: user, cursor_cell",
        "set_speed: user, +6",
        //"move_straight: user, 2",
        "jump_to_cell: user, cursor_cell",
        "set_speed: user, reset",
        "set_frame: user, atk, last",
        "wait: 12",
        "effects: {aoe}_battlers, current_obj, obj_anim",
        "wait: 20",
        "play_pose: user, idle",
        "wait: 10"
    ],
    
    "randomAttack": [
        "play_pose: user, atk",
        "wait: 10",
        "effects: 1_battlers_in_{aoe}, current_obj, obj_anim",
        "wait: 60"
    ],
    
    "bow_arrow": [
        "play_pose: user, atk",
        "wait: 10",
        
        "look_at: user, cursor_cell",
        "directional_anim: user, user, 200, 201, 202, 203",
        "projectile: bow_arrow, user_cell, 3_cells_in_{aoe}, current_obj, obj_anim",
        
        "directional_anim: user, user, 200, 201, 202, 203",
        "projectile: bow_arrow, user_cell, 3_cells_in_{aoe}, current_obj, obj_anim",
        "wait: 60"
    ],
    
    "sunder": [
        "play_pose: user, atk",
        "wait: 10",
        //"projectile: dagger, user_cell, {aoe}_battlers, current_obj, obj_anim",
        
        "look_at: user, cursor_cell",
        "directional_anim: user, user, 188, 189, 190, 191",
        "effects: {aoe}_battlers, current_obj, obj_anim",
        
        "if: isHit('{aoe}_battlers') && $gameVariables.value(1) == -1", // Force
          "set_speed: {aoe}_battlers, +6",
          "push: {aoe}_battlers, user_cell, 1",
          "set_speed: {aoe}_battlers, reset",
        "end_if",
        "if: isHit('{aoe}_battlers') && $gameVariables.value(1) == -2", // Force
          "set_speed: {aoe}_battlers, +6",
          "pull: {aoe}_battlers, user_cell, 1",
          "set_speed: {aoe}_battlers, reset",
        "end_if",
        "wait: 60"
    ],    
    
    "sunder2": [
        "play_pose: user, atk",
        "wait: 10",
        
        "look_at: user, cursor_cell",
        "directional_anim: user, user, 188, 189, 190, 191",
        "effects: {aoe}_battlers, current_obj, obj_anim",
        "wait: 60",
        
        
        "look_at: user, cursor_cell",
        "directional_anim: user, user, 188, 189, 190, 191",
        "effects: {aoe}_battlers, current_obj, obj_anim",
        "if: isHit('{aoe}_battlers') && $gameVariables.value(1) == -1", // Force
          "set_speed: {aoe}_battlers, +6",
          "push: {aoe}_battlers, user_cell, 1",
          "set_speed: {aoe}_battlers, reset",
        "end_if",
        "if: isHit('{aoe}_battlers') && $gameVariables.value(1) == -2", // Force
          "set_speed: {aoe}_battlers, +6",
          "pull: {aoe}_battlers, user_cell, 1",
          "set_speed: {aoe}_battlers, reset",
        "end_if",
        "wait: 60"
    ],  
    
   "lunge": [
        "play_pose: user, atk",
        "wait: 10",
        //"projectile: mainhandpolearm, user_cell, {aoe}_battlers, current_obj, obj_anim",
       
        "look_at: user, cursor_cell",
        "directional_anim: user, user, 192, 193, 194, 195",
        "effects: {aoe}_battlers, current_obj, obj_anim",
       
        "if: isHit('{aoe}_battlers') && $gameVariables.value(1) == -1", // Force
          "set_speed: {aoe}_battlers, +6",
          "push: {aoe}_battlers, user_cell, 1",
          "set_speed: {aoe}_battlers, reset",
        "end_if",
        "if: isHit('{aoe}_battlers') && $gameVariables.value(1) == -2", // Force
          "set_speed: {aoe}_battlers, +6",
          "pull: {aoe}_battlers, user_cell, 1",
          "set_speed: {aoe}_battlers, reset",
        "end_if",
        "wait: 60"
    ],   
    
    "mace": [
        "play_pose: user, atk",
        "wait: 10",
        //"projectile: mainhandmace, user_cell, {aoe}_battlers, current_obj, obj_anim",
        
        "look_at: user, cursor_cell",
        "directional_anim: user, user, 196, 197, 198, 199",
        "effects: {aoe}_battlers, current_obj, obj_anim",
        
        "if: isHit('{aoe}_battlers') && $gameVariables.value(1) == -1", // Force
          "set_speed: {aoe}_battlers, +6",
          "push: {aoe}_battlers, user_cell, 1",
          "set_speed: {aoe}_battlers, reset",
        "end_if",
        "if: isHit('{aoe}_battlers') && $gameVariables.value(1) == -2", // Force
          "set_speed: {aoe}_battlers, +6",
          "pull: {aoe}_battlers, user_cell, 1",
          "set_speed: {aoe}_battlers, reset",
        "end_if",
        "wait: 60"
    ],  
    
    "gun_bullet": [
        "play_pose: user, atk",
        "wait: 10",
        "look_at: user, cursor_cell",
        "directional_anim: user, user, 184, 185, 186, 187",
        "projectile: gun_bullet, user_cell, {aoe}_battlers, current_obj, obj_anim",
        "if: $gameVariables.value(1) > 1",
          "wait: 10",
          "directional_anim: user, user, 184, 185, 186, 187",
          "projectile: gun_bullet, user_cell, {aoe}_battlers, current_obj, obj_anim",
        "end_if",
        "if: $gameVariables.value(1) > 2",
          "wait: 10",
          "directional_anim: user, user, 184, 185, 186, 187",
          "projectile: gun_bullet, user_cell, {aoe}_battlers, current_obj, obj_anim",
        "end_if",
        "if: $gameVariables.value(1) > 3",
          "wait: 10",
          "directional_anim: user, user, 184, 185, 186, 187",
          "projectile: gun_bullet, user_cell, {aoe}_battlers, current_obj, obj_anim",
        "end_if",
        "if: $gameVariables.value(1) > 4",
          "wait: 10",
          "directional_anim: user, user, 184, 185, 186, 187",
          "projectile: gun_bullet, user_cell, {aoe}_battlers, current_obj, obj_anim",
        "end_if",
        "wait: 60"
    ],
    
    "tempest": [
        "call: pre-skill",
        "map_anim: {aoe}_battlers, obj_anim",
        "effects: {aoe}_battlers, current_obj, obj_anim, 0, true",
        "call: remove_field, 1",
        "set_speed: {aoe}_battlers, +6",
        "push: {aoe}_battlers, user_cell, 2",
        "set_speed: {aoe}_battlers, reset",
        "call: post-skill"
    ],
    
    "grace": [
        "call: pre-skill",
        "map_anim: {aoe}_battlers, obj_anim",
        "set_speed: {aoe}_battlers, +6",
        "pull: {aoe}_battlers, user_cell, 2",
        "mark: confuse_field, {aoe}",
        "set_speed: {aoe}_battlers, reset",
        "effects: {aoe}_battlers, current_obj, obj_anim, 0, true",
        "call: post-skill"
    ],

    "perforate": [
        "play_pose: user, atk",
        "wait: 10",
        "projectile: dagger, user_cell, {aoe}_battlers, current_obj, obj_anim",
        "if: $gameVariables.value(1) > 0", // +1 hit
          "wait: 10",
          "projectile: dagger, user_cell, {aoe}_battlers, current_obj, obj_anim",
        "end_if",
        "if: $gameVariables.value(1) > 1", // +2 hit
          "wait: 10",
          "projectile: dagger, user_cell, {aoe}_battlers, current_obj, obj_anim",
        "end_if",
        "if: $gameVariables.value(1) > 2", // +3 hit
          "wait: 10",
          "projectile: dagger, user_cell, {aoe}_battlers, current_obj, obj_anim",
        "end_if",
        "if: $gameVariables.value(1) > 3", // +4 hit
          "wait: 10",
          "projectile: dagger, user_cell, {aoe}_battlers, current_obj, obj_anim",
        "end_if",
        "wait: 60"
    ],    
    
    "counter": [
        "anim: user, 257, 0, true",
        "wait: 15"
    ],

    "summon": [
        "call: pre-skill",
        "map_anim: {aoe}, obj_anim",
        "wait: 15",
        "summon: $1, {aoe}",
        "call: post-skill"
    ],

    "atk_push": [
        "play_pose: user, atk",
        "wait: 10",
        "effects: {aoe}_battlers, current_obj, obj_anim",
        "if: isHit('{aoe}_battlers')",
            "set_speed: {aoe}_battlers, +6",
            "push: {aoe}_battlers, user_cell, $1",
            "set_speed: {aoe}_battlers, reset",
        "end_if",
        "wait: 60"
    ],

    "atk_pull": [
        "play_pose: user, atk",
        "wait: 10",
        "effects: {aoe}_battlers, current_obj, obj_anim",
        "set_speed: {aoe}_battlers, +6",
        "pull: {aoe}_battlers, user_cell, $1",
        "set_speed: {aoe}_battlers, reset",
        "wait: 60"
    ],

    "skill_push": [
        "call: pre-skill",
        "effects: {aoe}_battlers, current_obj, obj_anim, 0, true",
        "set_speed: {aoe}_battlers, +6",
        "push: {aoe}_battlers, user_cell, $1",
        "set_speed: {aoe}_battlers, reset",
        "call: post-skill",
    ],

    "skill_pull": [
        "call: pre-skill",
        "effects: {aoe}_battlers, current_obj, obj_anim, 0, true",
        "set_speed: {aoe}_battlers, +6",
        "pull: {aoe}_battlers, user_cell, $1",
        "set_speed: {aoe}_battlers, reset",
        "call: post-skill",
    ],

    "blood_sunder": [
        "set_frame: user, atk, 0",
        "wait: 15",
        "play_pose: user, atk",
        "effects: all, current_obj, obj_anim",
    ],    
    
    "blood_art": [
        "call: pre-skill",
        "map_anim: cursor_cell, obj_anim",
        "effects: {circle(1)}, skill(132), obj_anim",
        "wait: 15",
        "summon: blood_slime, cursor_cell",
        "script: BattleManagerTBS._activeCell.getEntity().battler().gainTp(BattleManagerTBS._activeCell.getEntity().battler().agi/2);",
        "call: post-skill"
    ],
    
    "summon_justice": [
        "call: pre-skill",
        "map_anim: cursor_cell, obj_anim",
        "wait: 15",
        "summon: justice, cursor_cell",
        "script: BattleManagerTBS._activeCell.getEntity().battler().gainTp(BattleManagerTBS._activeCell.getEntity().battler().agi/2);",
        "call: post-skill"
    ],
    
    "summon_crystal": [
        "call: pre-skill",
        "map_anim: {aoe}, obj_anim",
        "wait: 15",
        "summon: shard_block, {aoe}",
        "call: post-skill"
    ],
    
    "implode": [
        "call: pre-skill",
        "wait: 10",
        "projectile: dagger, user_cell, cursor_cell, current_obj, obj_anim",
        "wait: 30",
        "if: isHit('cursor_cell')",
            "effects: {circle(1)}, skill(172), current_obj",
        "end_if",
        "script: BattleManagerTBS._marksManager.removeFieldAt(BattleManagerTBS._activeCell);",
        "call: post-skill"
    ],
    
    "swap": [
        "play_pose: user, atk",
        "wait: 10",
        "projectile: dagger, user_cell, cursor_cell, current_obj, obj_anim",
        "if: isHit('cursor_cell')",
            //"save_cells: remove_field_saved, {circle(1)}",
            "if: isHit('cursor_cell') && BattleManagerTBS.getFieldInCell(BattleManagerTBS.activeEntity().getCell()) === 1",
                "mark: burn_field, {circle(1)}",
            "end_if",
            "if: isHit('cursor_cell') && BattleManagerTBS.getFieldInCell(BattleManagerTBS.activeEntity().getCell()) === 2",
                "mark: soak_field, {circle(1)}",
            "end_if",
            "if: isHit('cursor_cell') && BattleManagerTBS.getFieldInCell(BattleManagerTBS.activeEntity().getCell()) === 3",
                "mark: poison_field, {circle(1)}",
            "end_if",
            "if: isHit('cursor_cell') && BattleManagerTBS.getFieldInCell(BattleManagerTBS.activeEntity().getCell()) === 4",
                "mark: confuse_field, {circle(1)}",
            "end_if",
            "if: isHit('cursor_cell') && BattleManagerTBS.getFieldInCell(BattleManagerTBS.activeEntity().getCell()) === 5",
                "mark: daze_field, {circle(1)}",
            "end_if",
            "if: isHit('cursor_cell') && BattleManagerTBS.getFieldInCell(BattleManagerTBS.activeEntity().getCell()) === 6",
                "mark: curse_field, {circle(1)}",
            "end_if",
            "switch_cells: user, cursor_cell",
        "end_if",
        "wait: 60"
    ], 
    
    "firebolt": [
        "call: pre-skill",
        "wait: 10",
        "mark: burn_field, {aoe}",
        "wait: 60"
    ], 
    
    "poisonbolt": [
        "call: pre-skill",
        "wait: 10",
        "mark: poison_field, {aoe}",
        "wait: 60"
    ], 
    
    "windbolt": [
        "call: pre-skill",
        "wait: 10",
        //"effects: {aoe}_battlers, current_obj, obj_anim",
        "push: {circle(1)}, cursor_cell, 1, true, false",
        "mark: confuse_field, {aoe}",
        "wait: 60"
    ], 
    
    "soakbolt": [
        "call: pre-skill",
        "wait: 10",
        "effects: {aoe}_battlers, current_obj, obj_anim",
        "if: isHit('cursor_cell')",
            "if: isHit('cursor_cell') && BattleManagerTBS.getFieldInCell(BattleManagerTBS._activeCell) === 1",
                "mark: burn_field, {circle(1)}",
            "end_if",
            "if: isHit('cursor_cell') && BattleManagerTBS.getFieldInCell(BattleManagerTBS._activeCell) === 2",
                "mark: soak_field, {circle(1)}",
            "end_if",
            "if: isHit('cursor_cell') && BattleManagerTBS.getFieldInCell(BattleManagerTBS._activeCell) === 3",
                "mark: poison_field, {circle(1)}",
            "end_if",
            "if: isHit('cursor_cell') && BattleManagerTBS.getFieldInCell(BattleManagerTBS._activeCell) === 4",
                "mark: confuse_field, {circle(1)}",
            "end_if",
            "if: isHit('cursor_cell') && BattleManagerTBS.getFieldInCell(BattleManagerTBS._activeCell) === 5",
                "mark: daze_field, {circle(1)}",
            "end_if",
            "if: isHit('cursor_cell') && BattleManagerTBS.getFieldInCell(BattleManagerTBS._activeCell) === 6",
                "mark: curse_field, {circle(1)}",
            "end_if",
        "end_if",
        "mark: soak_field, {aoe}",
        "wait: 60"
    ], 
    
    
    "vemonfire": [
        "call: pre-skill",
        "wait: 10",
        "effects: {aoe}_battlers, current_obj, obj_anim",
        "mark: burn_field, {aoe}",
        "wait: 60"
    ], 
    
    "lightning": [
        "call: pre-skill",
        "wait: 10",
        "effects: {aoe}_battlers, current_obj, obj_anim",
        "if: isHit('cursor_cell')",
            "if: isHit('cursor_cell') && BattleManagerTBS.getFieldInCell(BattleManagerTBS._activeCell) === 1",
                "mark: burn_field, {circle(1)}",
            "end_if",
            "if: isHit('cursor_cell') && BattleManagerTBS.getFieldInCell(BattleManagerTBS._activeCell) === 2",
                "mark: soak_field, {circle(1)}",
            "end_if",
            "if: isHit('cursor_cell') && BattleManagerTBS.getFieldInCell(BattleManagerTBS._activeCell) === 3",
                "mark: poison_field, {circle(1)}",
            "end_if",
            "if: isHit('cursor_cell') && BattleManagerTBS.getFieldInCell(BattleManagerTBS._activeCell) === 4",
                "mark: confuse_field, {circle(1)}",
            "end_if",
            "if: isHit('cursor_cell') && BattleManagerTBS.getFieldInCell(BattleManagerTBS._activeCell) === 5",
                "mark: daze_field, {circle(1)}",
            "end_if",
            "if: isHit('cursor_cell') && BattleManagerTBS.getFieldInCell(BattleManagerTBS._activeCell) === 6",
                "mark: curse_field, {circle(1)}",
            "end_if",
        "end_if",
        "wait: 60"
    ],     
    
    "steal": [
        "play_pose: user, atk",
        "wait: 10",
        "save_cells: remove_field_saved, user_cell",
        "effects: {aoe}_battlers, current_obj, obj_anim",
        "wait: 10",
        "if: isTarget('cursor_cell')",
            "if: hasState('cursor_cell',5)",
                "itemsteal: user, cursor_cell, steal",
            "end_if",
            "itemsteal: user, cursor_cell, steal",
            "switch_cells: user, cursor_cell",
            "mark: confuse_field, saved(remove_field_saved)",
        "end_if",
        "wait: 60"
    ], 
    
    "absolute": [
        "play_pose: user, atk",
        "wait: 10",
        
        "look_at: user, cursor_cell",
        "directional_anim: user, user, 215, 216, 217, 218",
        "effects: {aoe}_battlers, current_obj, obj_anim",
        "wait: 60"
    ],   
        
    "techskill": [
        "play_pose: user, cast, cast",
        "wait: 4",
        "map_anim: user_cell, 246, 0, true"
    ],
    
    "technical": [
        "play_pose: user, atk",
        "call: techskill",
        "wait: 10",
        "directional_anim: user, user, 269, 270, 271, 272",
        "effects: {aoe}_battlers, current_obj, obj_anim",
        "wait: 60"
    ],
    /*-------------------------------------------------------------------------
    * Your Sequences
    -------------------------------------------------------------------------*/
    "flash_jump": [
        "set_frame: user, atk, 0",
        "wait: 15",
        "jump_to_cell: user, cursor_cell",
        "play_pose: user, atk",
        "map_effects: {aoe}, current_obj, obj_anim"
    ],
    
    "leap": [
        "set_frame: user, atk, 0",
        "wait: 15",
        "jump_to_cell: user, cursor_cell",
        "play_pose: user, atk",
        "effects: {aoe}_battlers, current_obj, obj_anim",
        "if: isHit('{aoe}_battlers')",
            "push: {aoe}_battlers, user_cell, 1",
        "end_if"
    ],
    
    "chain": [
        "set_frame: user, atk, 0",
        "wait: 15",
        "jump_to_cell: user, cursor_cell",
        "play_pose: user, atk",
        "effects: {aoe}_battlers, current_obj, obj_anim",
        "if: isHit('{aoe}_battlers')",
            "pull: {aoe}_battlers, user_cell, 1",
        "end_if"
    ],

    "rush": [
        "wait: 10",
        "set_frame: user, atk, 0",
        "wait: 30",
        "play_pose: user, atk",
        "directional_anim: user, user, 126, 127, 128, 129",
        "look_at: user, cursor_cell",
        "set_speed: user, +6",
        "move_straight: user, 2",
        "set_speed: user, reset",
        "set_frame: user, atk, last",
        "wait: 12",
        "effects: {aoe}_battlers, current_obj, obj_anim",
        "wait: 20",
        "play_pose: user, idle",
        "wait: 10"
    ],

    "phantom_slash": [
        "play_pose: user, atk",
        "wait: 10",
        "projectile: phantom_slash, user_cell, cursor_cell",
        "effects: {aoe}_battlers, current_obj, 153",
        "anim: user, 133",
        "wait: 20",
        "reach_target: user, {aoe}_battlers, back, true",
        "anim: user, 134",
        "look_at: user, cursor_cell",
        "play_pose: user, atk",
        "wait: 10",
        "effects: {aoe}_battlers, current_obj, obj_anim",
        "wait: 60"
    ],

    //-

    "spark": [
        "call: pre-skill",
        "map_anim: cursor_cell, obj_anim",
        "wait: 20",
        "effects: {aoe}_battlers, current_obj, obj_anim",
        "call: post-skill"
    ],

    "lightning_storm": [
        "call: pre-skill",
        "call: lightning_storm_effects, 3",
        "call: post-skill"
    ],

    "lightning_storm_effects": [
        "effects: 1_battlers_in_{aoe}, current_obj, obj_anim",
        "wait: 60"
    ],

    "fire_storm": [
        "call: pre-skill",
        "call: fire_storm_effects, 6",
        "call: post-skill"
    ],

    "fire_storm_effects": [
        "map_effects: 1_cells_in_{aoe}, current_obj, obj_anim",
        "wait: 60"
    ],

    "fire_support": [
        "filter_cells: {circle(1)}_allies, cursor_battler, new_cells",
        "ask_call: fire_support_attack, saved(new_cells)",
        "call: skill"
    ],

    "fire_support_attack": [
        "look_at: user, cursor_cell",
        "call: cast(loop)",
        "wait: 4",
        "call: atk"
    ],

    "volcano_ground": [
        "call: pre-skill",
        "map_anim: {aoe}, obj_anim",
        "wait: 20",
        "mark: volcano_cell, {aoe}",
        "wait: 60",
        "call: post-skill"
    ],
    
    "solar": [
        "call: pre-skill",
        "set_frame: user, atk, 0",
        "play_pose: user, atk",
        "call: remove_field, 1",
        "call_for_every_cell: walking_fire_dmg, {aoe}, close->far",
        "move_to_cell: user, cursor_cell, true",
        "wait: 15",
        "call: post-skill"
    ],
    
    "walking_fire": [
        "call: pre-skill",
        "call_for_every_cell: walking_fire_dmg, {aoe}, close->far",
        "call: post-skill"
    ],

    "walking_fire_dmg": [
        "map_anim: saved(every_cell), obj_anim",
        "map_effects: saved(every_cell), current_obj, obj_anim",
        "mark: burn_field, saved(every_cell)",
        "wait: 30"
    ],

    "ice_wall": [
        "call: pre-skill",
        "map_anim: cursor_cell, obj_anim",
        "wait: 30",
        "summon: ice_block, {aoe}",
        "call: post-skill"
    ],

    "ice_prison": [
        "call: pre-skill",
        "map_anim: cursor_cell, obj_anim",
        "wait: 30",
        "summon: ice_block, {aoe}",
        "call: post-skill"
    ],
    
    "elementshard": [
        "call: pre-skill",
        "map_anim: cursor_cell, obj_anim",
        "wait: 30",
        "map_effects: {aoe}, current_obj, obj_anim",
        "wait: 30",
        "summon: shard_block, {aoe}",
        "call: post-skill"
    ],

    "witch_escape": [
        "call: pre-skill",
        "anim: user, 169",
        "wait: 40",
        "save_cells: witch_escape_old, user_cell",
        "move_to_cell: user, cursor_cell, true",
        "anim: user, 170",
        "wait: 60",
        "set_cursor: saved(witch_escape_old)",
        "look_at: user, cursor_cell",
        "use_skill: user, 43"
    ],

    "mega_spark": [
        "call: pre-skill",
        "call_for_every_mscope: mega_spark_hit",
        "call: post-skill"
    ],

    "mega_spark_hit": [
        "map_anim: saved(mscope_center), obj_anim",
        "wait: 20",
        "effects: saved(mscope_aoe), current_obj, obj_anim"
    ],

    "fire_queen": [
        "screen_tone: -88, -88, -88, 0, 30",
        "wait: 30",
        "call: pre-skill",
        "effects: 1_enemies_in_{circle(6)}, current_obj, obj_anim",
        "wait: 25",
        "call: post-skill",
        "screen_tone: 0, 0, 0, 0, 30",
    ],


    //-

    "heal": [
        "call: pre-skill",
        "anim: {aoe}_battlers, obj_anim",
        "wait: 20",
        "effects: {aoe}_battlers, current_obj, obj_anim",
        "call: post-skill"
    ],

    "teleportation": [
        "call: pre-skill",
        "anim: user, 169",
        "wait: 40",
        "move_to_cell: user, cursor_cell, true",
        "anim: user, 170",
        "wait: 60",
        "call: post-skill"
    ],

    "salvation": [
        "call: pre-skill",
        "anim: user, obj_anim",
        "filter_entities: {aoe}_allies, user, new_targets",
        "pull: saved(new_targets), user_cell, 2, false",
        "wait: 20",
        "effects: saved(new_targets), current_obj, obj_anim",
        "wait: 60",
        "call: post-skill"
    ],

    "teleportation_sup": [
        "script: user.setDir(user._lastDir);",
        "call: pre-skill",
        "save_cells: battler_toward_user, battler_pos",
        "anim: last_targets, 169",
        "wait: 40",
        "move_to_cell: saved(battler_pos), cursor_cell, true",
        "anim: last_targets, 170",
        "wait: 60",
        "call: post-skill"
    ],

    "explosive_mark": [
        "call: pre-skill",
        "map_anim: cursor_cell, obj_anim",
        "wait: 20",
        "mark: explosive_mark, cursor_cell",
        "wait: 60",
        "call: post-skill"
    ],

    "ghost_arrow": [
        "call: pre-skill",
        "projectile: ghost_arrow, user_cell, cursor_cell",
        "effects: {aoe}_battlers, current_obj, obj_anim",
        "wait: 60",
        "call: post-skill"
    ],

    "magic_trap": [
        "call: pre-skill",
        "map_anim: cursor_cell, obj_anim",
        "wait: 20",
        "mark: magic_trap, cursor_cell",
        "wait: 60",
        "call: post-skill"
    ],

    "fire_arrows": [
        "call: pre-skill",
        "call_for_every_entity: fire_arrow_dmg, {aoe}_battlers",
        "call: post-skill"
    ],

    "fire_arrow_dmg": [
        "projectile: fire_arrow, user_cell, saved(every_entity)",
        "effects: saved(every_entity), current_obj, obj_anim"
    ],

    "wind_spirit": [
        "call: pre-skill",
        "map_anim: cursor_cell, obj_anim",
        "wait: 15",
        "summon: wind_spirit, cursor_cell",
        "call: post-skill"
    ],

    "great_wind": [
        "call: pre-skill",
        "projectile: great_wind, user_cell, cursor_cell",
        "effects: {aoe}_battlers, current_obj, obj_anim",
        "set_speed: {aoe}_battlers, +12",
        "push: {aoe}_battlers, user_cell, 3",
        "set_speed: {aoe}_battlers, reset",
        "call: post-skill"
    ],

    "transposition": [
        "call: pre-skill",
        "anim: user, obj_anim",
        "anim: {aoe}_battlers, obj_anim",
        "wait: 40",
        "switch_cells: user, {aoe}_battlers",
        "call: post-skill"
    ],

    "summon_pixie": [
        "call: pre-skill",
        "map_anim: cursor_cell, obj_anim",
        "wait: 15",
        "summon: pixie, cursor_cell",
        "call: post-skill"
    ],

    "shamanism": [
        "call: pre-skill",
        "anim: {aoe}_dead_battlers, obj_anim",
        "wait: 20",
        "call_for_every_entity: shamanism_effects, {aoe}_dead_battlers",
        "call: post-skill"
    ],

    "shamanism_effects": [
        "anim: allies, 169",
        "effects: allies, current_obj, obj_anim",
        "wait: 60",
    ],

    "ally_teleport": [
        "wait: 60",
        "save_entities: ally_teleport, cursor_battler",
        "request_selection: skill(85)",
        "call: pre-skill",
        "anim: saved(ally_teleport), 169",
        "wait: 40",
        "move_to_cell: saved(ally_teleport), cursor_cell, true",
        "anim: saved(ally_teleport), 170",
        "wait: 60",
        "call: post-skill"
    ],

    "mana_ball": [
        "call: pre-skill",
        "bounce: mana_ball_effects, cursor_battler, 2, circle(3), enemy",
        "call: post-skill"
    ],

    "mana_ball_effects": [
        "projectile: mana_ball, saved(bounce_entity1), saved(bounce_entity2)",
        "effects: saved(bounce_entity2), current_obj, obj_anim",
    ],

    //-

    "fire_ball": [
        "call: pre-skill",
        "projectile: fire_ball, user_cell, cursor_cell",
        "effects: {aoe}_battlers, current_obj, obj_anim",
        "wait: 60",
        "call: post-skill"
    ],

    "crystal_mark": [
        "map_anim: cursor_cell, obj_anim",
        "wait: 20",
        "mark: crystal_mark, cursor_cell"
    ],

    "anti_crystal_mark": [
        "map_anim: cursor_cell, obj_anim",
        "wait: 20",
        "mark: anti_crystal_mark, cursor_cell"
    ],

    "mago_mark": [
        "call: pre-skill",
        "map_anim: cursor_cell, obj_anim",
        "wait: 20",
        "mark: mago_mark, cursor_cell",
        "wait: 60",
        "call: post-skill"
    ],
    
    "magic_attack": [
        "call: pre-skill",
        "map_anim: cursor_cell, obj_anim",
        "wait: 20",
        "mark: magic_attack, cursor_cell",
        "wait: 60",
        "call: post-skill"
    ],
    
    "burning_justice": [
        "call: pre-skill",
        "map_anim: cursor_cell, obj_anim",
        "wait: 20",
        "mark: burning_justice, cursor_cell",
        "wait: 60",
        "call: post-skill"
    ],
    
    "charged": [
        "projectile: gun_bullet, user_cell, cursor_cell, current_obj, obj_anim",
        "wait: 10",
        //"call: pre-skill",
        //"map_anim: cursor_cell, obj_anim",
        //"wait: 20",
        "mark: charged, cursor_cell",
        "wait: 60",
        "call: post-skill"
    ],
    
    "sharpnel": [
        "projectile: gun_bullet, user_cell, cursor_cell, current_obj, obj_anim",
        "wait: 10",
        //"call: pre-skill",
        //"map_anim: cursor_cell, obj_anim",
        //"wait: 20",
        //"mark: sharpnel, cursor_cell",
        
        "if: isAnyHit('{aoe}_battlers') && isHit('{aoe}_battlers')",
          "effects: {circle(1)}, skill(130), obj_anim",
          "wait: 30",
        "end_if",
        
        "call: remove_field, 1",
        "mark: poison_field, cursor_cell",
        "wait: 30"
    ],

    "sharpnelsplash": [
        "map_effects: {aoe}, current_obj, obj_anim"
    ],
    
    
    "rabbit_jump": [
        "set_frame: user, atk, 0",
        "wait: 8",
        "map_anim: user_cell, obj_anim",
        "jump_to_cell: user, cursor_cell",
        "play_pose: user, atk",
        "map_effects: user_cell, current_obj, obj_anim"
    ],

    "summon_pyra": [
        "call: pre-skill",
        "map_anim: cursor_cell, obj_anim",
        "wait: 15",
        "summon: pyra, cursor_cell",
        "call: post-skill"
    ],

    //-

    "rush_sup": [
        "wait: 20",
        "directional_anim: user, user, 131, 132, 133, 134",
        "look_at: user, cursor_cell",
        "move_straight: user, 2",
        "wait: 10",
        "effects: {aoe}_battlers, current_obj, obj_anim",
        "look_away: {aoe}_battlers, user_cell",
        "wait: 5",
        "delegate_call: rush_sup_action, {aoe}_battlers"
    ],

    "rush_sup_action": [
        "directional_anim: user, user, 131, 132, 133, 134",
        "move_straight: user, 2",
        "wait: 10",
        "set_battler_targets: battler_toward_user",
        "effects: last_targets, current_obj, obj_anim",
        "look_away: last_targets, user_cell",
        "wait: 5",
        "end_delegated_call:",
        "delegate_call: rush_sup_action, last_targets"
    ]


};

/*-------------------------------------------------------------------------
* AI
-------------------------------------------------------------------------*/
Lecode.S_TBS.Config.AI = {

    BehaviorsOrder: [
        "healing",
        "escape",
        "summon",
        "support",
        "offense" // <- Keep offense at the end, for now
    ],

    "default": [
        "process_behaviors",
        "process_behaviors",
        "process_behaviors",
        "call_behavior: end_of_turn"
    ],

    "end_of_turn": [
        "wait: 5",
        "pass: look_closest_enemy"
    ],

    "action_requested": [
        "process_requested_action",
        "force_end"
    ],


    /*-------------------------------------------------------------------------
    * Default behaviors
    -------------------------------------------------------------------------*/

    "use_healing": [
        "search_target: self, 100%, healing",
        "if: !isTargetValid()",
        "search_target: lowest_ally, 100%, healing",
        "if: !isTargetValid()",
        "search_target: closest_ally, 100%, healing",
        "endif",
        "endif",
        "if: isTargetValid()",
        "set_action: healing, average",
        "move_for_action: null",
        "use: defined_action",
        "endif",
        "call_behavior: after_healing"
    ],

    "after_healing": [
        "if: user.hpRate() <= 0.3",
        "call_behavior: smart_move_away_enemies",
        "else",
        "call_behavior: after_offense",
        "endif"
    ],

    "use_support": [
        "search_target: lowest_ally, 100%, support",
        "if: !isTargetValid()",
        "search_target: self, 100%, support",
        "if: !isTargetValid()",
        "search_target: closest_ally, 100%, support",
        "endif",
        "endif",
        "if: isTargetValid()",
        "set_action: support, average",
        "move_for_action: null",
        "use: defined_action",
        "call_behavior: after_support",
        "else",
        "move: toward_enemies, 20%",
        "endif"
    ],

    "after_support": [
        "if: canUseEscape()",
        "call_behavior: escape",
        "else",
        "if: pattern('ranged_fighter')",
        "call_behavior: smart_move_away_enemies",
        "else",
        "move: toward_enemies, 75%",
        "endif",
        "endif"
    ],

    "use_summon": [
        "if: distanceToEnemies() > entity.getMovePoints() + 1",
        "move: toward_enemies, 75%",
        "endif",
        "set_action: summon",
        "move_for_action: null",
        "use: defined_action",
        "call_behavior: after_summon"
    ],

    "after_summon": [
        "call_behavior: after_support"
    ],

    "use_offense": [
        /*"if: chance(70)",
            "search_target: lowest_enemy, 100%, offense",
            "if: !isTargetValid()",
                "search_target: closest_enemy, 100%, offense",
            "endif",
        "else",
            "search_target: closest_enemy, 100%, offense",
        "endif",*/
        
        "search_target: closest_enemy, 100%, offense",
        "if: isTargetValid()",
        "set_action: damage, average",
        "move_for_action: null",
        "use: defined_action",
        "call_behavior: after_offense",
        "else",
        "move: toward_enemies, 75%",
        "endif"
        
    ],

    "cant_use_offense": [
        "if: failureCode() === 'out_of_range'",
        "call_behavior: out_of_range",
        "else",
        "move: away_enemies, 100%",
        "endif"
    ],

    "after_offense": [
        //"if: canUseEscape()",
        //    "call_behavior: escape",
        //"else",
            //"if: pattern('ranged_fighter')",
            //    "call_behavior: smart_move_away_enemies",
            //"else",
            //    "if: !isInMeleeWith('defined_target')",
            //        "move: toward_enemies, 100%",
            //    "endif",
            //"endif",
        //"endif"
    ],

    "out_of_range": [
        "if: canUseRush()",
        "set_action: move, toward",
        "move_for_action: null",
        "use: defined_action",
        "endif",
        /*"if: chance(40)",
        "move: toward_enemies, 80%",
        "else",
        "move: toward_enemies, 100%",
        "endif"*/
        "if: chance(50)",
        //"if: pattern('ranged_fighter')",
        "move: toward_enemies, 50%",
        //"else",
        //"move: toward_enemies, 75%",
        //"endif",
        "endif"
    ],

    "escape": [
        "set_action: move, away",
        "move_for_action: null",
        "use: defined_action",
        "wait: 10",
        "call_behavior: smart_move_away_enemies",
    ],

    "smart_move_away_enemies": [
        "if: distanceToEnemies() >= 5",
        "move: toward_enemies, 75%",
        "else",
        "move: away_enemies, 75%",
        "endif",
    ]

    /*-------------------------------------------------------------------------
    * Your behaviors
    -------------------------------------------------------------------------*/
};