function display_version(){
    var ver = "0.1.2";
    document.getElementById("version").innerHTML = ver;
};

/* 劍, 槍, 騎, 飛, 水, 刺, 弓, 僧, 魔, 龍 */
var offense="僧", defense="魔";

function display_offense(offense){
    document.getElementById("offense").innerHTML = offense;
};

function display_defense(defense){
    document.getElementById("defense").innerHTML = defense;
};

function display_counter(offense, defense){
    document.getElementById("counter").innerHTML = cal_counter(offense, defense);
};

function cal_counter(offense, defense){
    switch(offense){
        case "劍":
            if(defense == "槍")
                return 0.4;
            else if(defense == "騎")
                return -0.3;
            else return 0.0; break;
        case "槍":
            if(defense == "劍")
                return -0.2;
            else if(defense == "騎")
                return 0.3;
            else return 0.0; break;
        case "騎":
            if(defense == "劍")
                return 0.2;
            else if(defense == "槍")
                return -0.3;
            else return 0.0; break;
        case "弓":
            if(defense == "飛")
                return 0.3;
            else return 0.0; break;
        case "僧":
            if(defense == "魔")
                return 0.8;
            else return 0.0; break;
        case "魔":
            if(defense == "僧")
                return -0.4;
            else return 0.0; break;
        default:
            return 0.0;
    }
};