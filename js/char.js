/* 英雄天賦加減數值，士兵補正，最終職業&數字&大心 */
var char = [{
    NAME: '莉亞娜', JOBS: 2,
    SOLDHPPLUS:0.4, SOLDATKPLUS:0.1, SOLDDEFPLUS:0.1, SOLDMDEFPLUS:0.4,
    TALENT: '行動結束時驅散2格內其他友軍2個弱化效果並治療生命值，治療量為自身智力的3倍。',
    JOB1:'先知', ARMY1: '僧侶',
    JOB1DISCA:'部隊生命低於50%時，遭受傷害降低10%。',
    JOB1DISCB:'主動攻擊進入戰鬥時，傷害提升10%。',
    JOB2:'隱士', ARMY2: '法師',
    JOB2DISCA:'受到遠程攻擊時，遭受魔法傷害降低10%。',
    JOB2DISCB:'受到物理攻擊進入戰鬥時，傷害提升10%。'
},{
    NAME: '拉娜', JOBS: 2,
    SOLDHPPLUS:0.1, SOLDATKPLUS:0.4, SOLDDEFPLUS:0.1, SOLDMDEFPLUS:0.4,
    TALENT: '進入戰鬥時，魔法傷害提升30%，使用技能時射程提升1。',
    JOB1:'聖者', ARMY1: '僧侶',
    JOB1DISCA:'部隊血量100%時，遭受傷害降低10%。',
    JOB1DISCB:'受到具有「弱化效果」的部隊攻擊進入戰鬥時，遭受傷害降低10%。',
    JOB2:'黑暗公主', ARMY2: '法師',
    JOB2DISCA:'受到魔法攻擊進入戰鬥時，傷害提升10%。',
    JOB2DISCB:'受到物理攻擊進入戰鬥時，傷害提升10%。'
},{
    NAME: '芙蕾雅', JOBS: 2,
    SOLDHPPLUS:0.35, SOLDATKPLUS:0.1, SOLDDEFPLUS:0.4, SOLDMDEFPLUS:0.1,
    TALENT: '遭受暴擊率降低50%，進入戰鬥前，如果自身生命在50%以上，對敵軍造成一次傷害，傷害數值為英雄防禦的2倍。',
    JOB1:'女武神', ARMY1: '僧侶',
    JOB1DISCA:'受到攻擊進入戰鬥時，遭受魔法傷害降低10%。',
    JOB1DISCB:'受到攻擊時，士兵傷害提升20%。',
    JOB2:'皇家衛士', ARMY2: '槍兵',
    JOB2DISCA:'受到攻擊進入戰鬥時，遭受物理傷害降低10%。',
    JOB2DISCB:'主動攻擊時，士兵傷害提升20%。'
},{
    NAME: '雪莉', JOBS: 2,
    SOLDHPPLUS:0.1, SOLDATKPLUS:0.2, SOLDDEFPLUS:0.35, SOLDMDEFPLUS:0.35,
    TALENT: '周圍2格沒有友軍時，遭受所有傷害降低25%。擊殺敵軍後，可以額外行動1次，[觸發冷卻]該效果需要間隔2回合才可以再次觸發。',
    JOB1:'龍騎統帥', ARMY1: '飛兵',
    JOB1DISCA:'部隊血量低於70%時，進入戰鬥後遭受傷害降低10%。',
    JOB1DISCB:'範圍傷害提升10%。',
    JOB2:'大統帥', ARMY2: '刺客',
    JOB2DISCA:'遭受範圍傷害降低10%。',
    JOB2DISCB:'受到遠程攻擊進入戰鬥時，傷害提升10%。'
},{
    NAME: '克拉蕾特', JOBS: 2,
    SOLDHPPLUS:0.1, SOLDATKPLUS:0.25, SOLDDEFPLUS:0.35, SOLDMDEFPLUS:0.3,
    TALENT: '主動攻擊進入戰鬥時，傷害提升20%，遭受傷害降低20%。行動結束時，會將剩餘的初始移動力附加於自身，最高不超過5格',
    JOB1:'龍騎統帥', ARMY1: '飛兵',
    JOB1DISCA:'受到近戰攻擊時，遭受物理傷害降低10%。',
    JOB1DISCB:'部隊血量低於70%時，進入戰鬥後傷害提升10%。',
    JOB2:'劍姬', ARMY2: '劍兵',
    JOB2DISCA:'受到遠程攻擊時，遭受物理傷害降低10%。',
    JOB2DISCB:'受到攻擊進入戰鬥時，傷害提升10%。'
},{
    NAME: '浦飯幽助', JOBS: 2,
    SOLDHPPLUS:0.15, SOLDATKPLUS:0.35, SOLDDEFPLUS:0.35, SOLDMDEFPLUS:0.15,
    TALENT: '自身2格範圍有友軍部隊時，攻防提升15%。當友軍死亡時，恢復30%生命，並獲得效果[憤怒]：除生命以外全屬性提升10%，移動力+1，部隊射程+1，持續3回合。（該效果不可驅散）',
    JOB1:'靈界偵探', ARMY1: '僧侶',
    JOB1DISCA:'被血量百分比高於自身的部隊攻擊時，進入戰鬥後遭受傷害降低10%。',
    JOB1DISCB:'主動攻擊血量百分比高於自身的部隊時，進入戰鬥後傷害提升10%。',
    JOB2:'魔界王選', ARMY2: '魔物',
    JOB2DISCA:'受到攻擊進入戰鬥時，遭受魔法傷害降低10%。',
    JOB2DISCB:'部隊血量低於70%時，進入戰鬥後傷害提升10%。'
},{
    NAME: '麗可麗絲', JOBS: 2,
    SOLDHPPLUS:0.15, SOLDATKPLUS:0.2, SOLDDEFPLUS:0.3, SOLDMDEFPLUS:0.35,
    TALENT: '治療量增加20%。範圍技能會令命中的所有格子獲得2回合的特殊效果[生命之息]：“當友軍單位移動至其上，在行動結束時驅散自身1個弱化效果，並治療生命值，治療量為麗可麗絲智力的1倍。',
    JOB1:'魔王化身', ARMY1: '魔物',
    JOB1DISCA:'主動攻擊進入戰鬥時，部隊遭受傷害降低10%。',
    JOB1DISCB:'受到物理攻擊進入戰鬥時，傷害提升10%。',
    JOB2:'影依聖女', ARMY2: '僧侶',
    JOB2DISCA:'被血量百分比高於自身的部隊攻擊時，進入戰鬥後遭受傷害降低10%。',
    JOB2DISCB:'受到魔法攻擊進入戰鬥時，傷害提升10%。'
},{
    NAME: '蕾伽爾', JOBS: 2,
    SOLDHPPLUS:0.1, SOLDATKPLUS:0.3, SOLDDEFPLUS:0.2, SOLDMDEFPLUS:0.4,
    TALENT: '造成傷害提升30%。主動造成傷害以後，在回合結束時驅散3格內其他友軍部隊2個弱化效果，並治療生命值，治療量為蕾伽爾智力的3倍。',
    JOB1:'魔能核心', ARMY1: '法師',
    JOB1DISCA:'受到攻擊進入戰鬥時，遭受魔法傷害降低10%。',
    JOB1DISCB:'遭受範圍傷害降低10%。',
    JOB2:'神使', ARMY2: '僧侶',
    JOB2DISCA:'部隊血量100%時，傷害提高10%。',
    JOB2DISCB:'治療效果+10%。'
},{
    NAME: '蒂亞莉絲', JOBS: 2,
    SOLDHPPLUS:0.1, SOLDATKPLUS:0.1, SOLDDEFPLUS:0.4, SOLDMDEFPLUS:0.4,
    TALENT: '行動結束時，使周圍2格的友軍獲得[治愈]：戰後100%回复蒂亞莉絲智力3倍的生命。',
    JOB1:'聖女騎士', ARMY1: '僧侶',
    JOB1DISCA:'部隊血量100%時，遭受傷害降低10%。',
    JOB1DISCB:'受到遠程攻擊時，遭受物理傷害降低10%。',
    JOB2:'獨角獸統帥', ARMY2: '法師',
    JOB2DISCA:'主動攻擊進入戰鬥時，傷害提升10%。',
    JOB2DISCB:'受到魔法攻擊進入戰鬥時，傷害提升10%。'
},{
    NAME: '古巨拉', JOBS: 3,
    SOLDHPPLUS:0.4, SOLDATKPLUS:0.15, SOLDDEFPLUS:0.35, SOLDMDEFPLUS:0.1,
    TALENT: '部隊移動時所有可通過地形都視為“平地”。每損失一個士兵，則英雄獲得遭受傷害降低3%的效果。被攻擊受到傷害後，恢復其他友軍生命。（恢復量為古巨拉當前部隊生命的30%）',
    JOB1:'貝希摩斯', ARMY1: '騎兵',
    JOB1DISCA:'主動攻擊進入戰鬥時，部隊遭受傷害降低10%。',
    JOB1DISCB:'部隊血量低於70%時，傷害提升10%。',
    JOB2:'海德拉', ARMY2: '水兵',
    JOB2DISCA:'部隊血量高於80%時，遭受暴擊率降低10%。',
    JOB2DISCB:'受到近戰攻擊進入戰鬥時，傷害提升10%。',
    JOB3:'巴哈姆特', ARMY3: '龍',
    JOB3DISCA:'部隊血量100%時，遭受傷害降低10%。',
    JOB3DISCB:'受到攻擊時，士兵傷害提升20%。'
},{
    NAME: '尤利婭', JOBS: 2,
    SOLDHPPLUS:0.15, SOLDATKPLUS:0.4, SOLDDEFPLUS:0.1, SOLDMDEFPLUS:0.35,
    TALENT: '當部隊生命高於和等於70%時獲得效果：傷害提升30%，且無法被一擊致命（每場戰鬥最多觸發3次），並在每次進入戰鬥後，有100%的概率恢復生命，恢復量為部隊造成傷害的30%。',
    JOB1:'女神之刃', ARMY1: '僧侶',
    JOB1DISCA:'與血量百分比低於自身的部隊交戰時，進入戰鬥後遭受傷害降低10%。',
    JOB1DISCB:'與血量百分比低於自身的部隊交戰時，進入戰鬥後傷害提升10%。',
    JOB2:'聖劍公主', ARMY2: '劍兵',
    JOB2DISCA:'主動攻擊進入戰鬥時，部隊遭受傷害降低10%。',
    JOB2DISCB:'主動攻擊進入戰鬥時，部隊遭受傷害降低10%。'
},{
    NAME: '艾米莉亞', JOBS: 2,
    SOLDHPPLUS:0.4, SOLDATKPLUS:0.1, SOLDDEFPLUS:0.15, SOLDMDEFPLUS:0.35,
    TALENT: '部隊血量越高時，減少遭受魔法傷害越多，最多減少30%。並且在遭受致命傷害時不會死亡，之後生命值恢復30%。該效果每場戰鬥最多觸發1次。',
    JOB1:'聖槍統帥', ARMY1: '槍兵',
    JOB1DISCA:'部隊血量高於80%時，遭受暴擊率降低10%。',
    JOB1DISCB:'主動攻擊進入戰鬥時，部隊遭受傷害降低10%。',
    JOB2:'聖騎統帥', ARMY2: '僧侶',
    JOB2DISCA:'受到遠程攻擊進入戰鬥時，傷害提升10%。',
    JOB2DISCB:'主動攻擊進入戰鬥時，傷害提升10%。'
},{
    NAME: '神崎堇', JOBS: 2,
    SOLDHPPLUS:0.35, SOLDATKPLUS:0.2, SOLDDEFPLUS:0.35, SOLDMDEFPLUS:0.1,
    TALENT: '普通攻擊時，英雄的射程增加1。每損失一個士兵，則獲得攻擊、技巧提升4%的效果。',
    JOB1:'光武·改', ARMY1: '騎兵',
    JOB1DISCA:'部隊血量100%時，遭受傷害降低10%。',
    JOB1DISCB:'部隊血量低於50%時，傷害提升10%。',
    JOB2:'鳳凰之舞(職業)', ARMY2: '槍兵',
    JOB2DISCA:'遭受範圍傷害降低10%。',
    JOB2DISCB:'與血量百分比高於自身的部隊交戰時，進入戰鬥後傷害提升10%。'
},{
    NAME: '雅里安洛德', JOBS: 2,
    SOLDHPPLUS:0.15, SOLDATKPLUS:0.2, SOLDDEFPLUS:0.3, SOLDMDEFPLUS:0.35,
    TALENT: '部隊生命高於70%時，遭受傷害降低15%。受到傷害後或回合結束時處於[危險範圍]內，獲得效果：攻擊提升5%，傷害提升5%，遭受傷害降低5%，移動力+1。可累積，最高可以累積3個。行動結束時，當部隊生命值低於70%，可以額外行動1次。（[觸發冷卻]再行動效果需要間隔2回合才可以再次觸發。）',
    JOB1:'槍之聖女', ARMY1: '槍職',
    JOB1DISCA:'遭受範圍傷害降低10%。',
    JOB1DISCB:'受到近戰攻擊進入戰鬥時，傷害提升10%。',
    JOB2:'鋼之聖女', ARMY2: '聖職',
    JOB2DISCA:'受到攻擊進入戰鬥時，遭受魔法傷害降低10%。',
    JOB2DISCB:'主動攻擊血量百分比高於自身的部隊時，進入戰鬥後傷害提升10%。'
},{
    NAME: '蒂德莉特', JOBS: 2,
    SOLDHPPLUS:0.15, SOLDATKPLUS:0.35, SOLDDEFPLUS:0.15, SOLDMDEFPLUS:0.35,
    TALENT: '本次行動每移動1格，則在行動結束時為自身附加智力、防禦提升8%（最高24%），持續1回合。在行動結束時，如果處於[危險範圍]內，且未造成過傷害，則可再次行動。（再行動效果需要間隔2回合才可以再次觸發。）',
    JOB1:'精靈劍士', ARMY1: '劍兵',
    JOB1DISCA:'主動攻擊進入戰鬥時，部隊遭受傷害降低10%。',
    JOB1DISCB:'受到攻擊進入戰鬥時，傷害提升10%。',
    JOB2:'高等精靈', ARMY2: '法師',
    JOB2DISCA:'與血量百分比低於自身的部隊交戰時，進入戰鬥後遭受傷害降低10%。',
    JOB2DISCB:'治療效果+10%。'
},{
    NAME: '維拉', JOBS: 2,
    SOLDHPPLUS:0.4, SOLDATKPLUS:0.15, SOLDDEFPLUS:0.25, SOLDMDEFPLUS:0.35,
    TALENT: '使用輔助技能時射程增加2。士兵全屬性提升20%。英雄死亡時，驅散5格以內所有友軍2個弱化效果，並獲得“死守”：戰前恢復威拉智力5倍的生命，持續3回合。',
    JOB1:'軍師', ARMY1: '僧侶',
    JOB1DISCA:'部隊血量100%時，遭受傷害降低10%。',
    JOB1DISCB:'部隊血量100%時，傷害提升10%。',
    JOB2:'先知', ARMY2: '僧侶',
    JOB2DISCA:'遭受範圍傷害降低10%。',
    JOB2DISCB:'主動攻擊進入戰鬥時，傷害提升10%。'
},{
    NAME: '弗洛朗蒂婭', JOBS: 2,
    SOLDHPPLUS:0.4, SOLDATKPLUS:0.15, SOLDDEFPLUS:0.35, SOLDMDEFPLUS:0.2,
    TALENT: '部隊生命100%時，士兵除生命以外全屬性提升25%，每場戰鬥開始時自身獲得5個[戰謀]。在行動結束時，自身如果擁有“超絕強化”的特殊效果則獲得2個[戰謀]，最高可以累積10個。在行動結束前，可額外釋放一次戰謀技能（[急行]提升目標部隊移動力、[突襲]使目標部隊再次行動、[援軍]恢復目標部隊士兵生命。）',
    JOB1:'軍師', ARMY1: '僧侶',
    JOB1DISCA:'部隊血量100%時，遭受傷害降低10%。',
    JOB1DISCB:'部隊血量高於80%時，遭受暴擊率降低10%。',
    JOB2:'帝國宰相', ARMY2: '法師',
    JOB2DISCA:'部隊血量100%時，傷害提升10%。',
    JOB2DISCB:'範圍傷害提升10%。'
},{
    NAME: '西格瑪', JOBS: 2,
    SOLDHPPLUS:0.3, SOLDATKPLUS:0.4, SOLDDEFPLUS:0.1, SOLDMDEFPLUS:0.2,
    TALENT: '主動攻擊時，攻擊提升15%。如果本回合沒有進行攻擊，且自身處於防禦增加的地形上，則可以額外行動1次，同時獲得狀態“狙擊”：部隊射程+2，且無法移動，持續1回合。（[觸發冷卻]該效果無法驅散，且需要間隔2回合才可以再次觸發。）',
    JOB1:'劍鬥統帥', ARMY1: '劍兵',
    JOB1DISCA:'受到遠程攻擊時，進入戰鬥後，遭受傷害降低10%。',
    JOB1DISCB:'近戰攻擊時，進入戰鬥後傷害提升10%。',
    JOB2:'遊俠', ARMY2: '弓兵',
    JOB2DISCA:'受到具有“弱化效果”的部隊攻擊進入戰鬥時，遭受傷害降低10%。',
    JOB2DISCB:'主動攻擊血量百分比高於自身的部隊時，進入戰鬥後傷害提升10%。'
},{
    NAME: '艾拉斯卓', JOBS: 2,
    SOLDHPPLUS:0.2, SOLDATKPLUS:0.35, SOLDDEFPLUS:0.35, SOLDMDEFPLUS:0.1,
    TALENT: '每移動1格，造成傷害、暴擊率提升4%。（最高20%）通過防禦地形時，可以獲得4格免除移動力降低的機會。',
    JOB1:'狼騎統帥', ARMY1: '弓兵',
    JOB1DISCA:'部隊血量低於70%時，進入戰鬥後遭受傷害降低10%。',
    JOB1DISCB:'受到近戰攻擊進入戰鬥時，傷害提升10%。',
    JOB2:'遊俠', ARMY2: '弓兵',
    JOB2DISCA:'遭受範圍傷害降低10%。',
    JOB2DISCB:'受到遠程攻擊進入戰鬥時，傷害提升10%。'
},{
    NAME: '雷因法魯斯', JOBS: 2,
    SOLDHPPLUS:0.2, SOLDATKPLUS:0.2, SOLDDEFPLUS:0.35, SOLDMDEFPLUS:0.25,
    TALENT: '每對一名敵軍造成傷害後，可以獲得一個“異星之力”:除生命以外全屬性提升4%，可累積，最高可以累積7個。行動結束時，若擁有7個“異星之力”，可以額外行動1次，並在此次行動結束時，將自己傳送至距離最近的友軍身邊，並將身上所有“異星之力”效果清除。',
    JOB1:'劍聖', ARMY1: '劍兵',
    JOB1DISCA:'受到遠程攻擊進入戰鬥時，遭受魔法傷害降低10%。',
    JOB1DISCB:'部隊血量高於80%時，暴擊傷害提升10%。',
    JOB2:'異星王子', ARMY2: '刺客',
    JOB2DISCA:'部隊血量高於80%時，遭受暴擊率降低10%。',
    JOB2DISCB:'部隊血量高於80%時，暴擊率提升10%。'
},{
    NAME: '維拉玖', JOBS: 2,
    SOLDHPPLUS:0.35, SOLDATKPLUS:0.4, SOLDDEFPLUS:0.15, SOLDMDEFPLUS:0.1,
    TALENT: '部隊血量越低時，物理傷害越高，最多增加50%。在遭受致命傷害時不會死亡，並獲得效果“不死者”：該狀態生效期間，英雄受到致命傷害時不會死亡，一旦該狀態消失，則英雄在回合結束時直接死亡，持續3回合。不屈效果每場戰鬥最多觸發6次。（該效果無法被免疫和驅散）',
    JOB1:'海鬥統帥', ARMY1: '水兵',
    JOB1DISCA:'部隊血量低於70%時，進入戰鬥後遭受傷害降低10%。',
    JOB1DISCB:'受到攻擊進入戰鬥時，傷害提升10%。',
    JOB2:'劍士統帥', ARMY2: '劍兵',
    JOB2DISCA:'主動攻擊進入戰鬥時，部隊遭受傷害降低10%。',
    JOB2DISCB:'與具有“弱化效果”的部隊戰鬥時，傷害提升10%。'
},{
    NAME: '阿雷斯', JOBS: 2,
    SOLDHPPLUS:0.15, SOLDATKPLUS:0.4, SOLDDEFPLUS:0.3, SOLDMDEFPLUS:0.15,
    TALENT: '周圍3圈內每有1個敵軍，除生命以外全屬性提升5%（最高20%）。
移動時無視敵軍單位阻擋。在造成傷害前以及行動結束時，本回合每穿過1個敵軍單位，可以獲得1個[掠陣]效果：“暴擊率提升8%，可累積（最高累積5個）。”；若本回合觸發暴擊，會在行動結束時清空之前獲得的所有[掠陣]效果。',
    JOB1:'龍騎統帥', ARMY1: '飛兵',
    JOB1DISCA:'部隊血量低於70%時，進入戰鬥後遭受傷害降低10%。',
    JOB1DISCB:'部隊血量低於70%時，進入戰鬥後傷害提升10%。',
    JOB2:'皇帝', ARMY2: '劍兵',
    JOB2DISCA:'部隊血量高於80%時，遭受暴擊率降低10%。',
    JOB2DISCB:'受到攻擊進入戰鬥時，暴擊傷害提升10%。'
},{
    NAME: '黎恩', JOBS: 2,
    SOLDHPPLUS:0.15, SOLDATKPLUS:0.25, SOLDDEFPLUS:0.3, SOLDMDEFPLUS:0.3,
    TALENT: '使用技能後，恢復20%生命，並且除生命以外全屬性提升4%，可以累積，最高可以累積5個。當友軍死亡時，所有技能冷卻時間減少1回合。並進入[鬼人]狀態：“傷害提升30%，遭受傷害降低30%，移動力+1，並在對敵方部隊造成傷害後，對其施加1個隨機的弱化效果”，持續2回合。若已經處於[鬼人]狀態下，則此效果替換為延長[鬼人]狀態時間2回合。[鬼人]狀態結束後，獲得“無法使用主動技能”，持續2回合。（若已經死亡超過2名以上友軍時，[鬼人]狀態變為永久持續）（該效果不可免疫和驅散）',
    JOB1:'劍聖', ARMY1: '劍兵',
    JOB1DISCA:'部隊血量低於50%時，遭受傷害降低10%。',
    JOB1DISCB:'部隊血量低於50%時，傷害提升10%。',
    JOB2:'灰之英雄', ARMY2: '劍兵',
    JOB2DISCA:'部隊血量低於70%時，進入戰鬥後遭受傷害降低10%。',
    JOB2DISCB:'部隊血量低於70%時，進入戰鬥後傷害提升10%。'
},{
    NAME: '萊恩哈特', JOBS: 2,
    SOLDHPPLUS:0.2, SOLDATKPLUS:0.2, SOLDDEFPLUS:0.25, SOLDMDEFPLUS:0.35,
    TALENT: '周圍1格沒有友軍時，除生命以外全屬性提升20%。若一次攻擊對2名及以上的敵軍造成傷害，則可以恢復50%生命，並額外行動1次。（[觸發冷卻]再行動效果需要間隔2回合才可以再次觸發。）',
    JOB1:'劍帝', ARMY1: '劍兵',
    JOB1DISCA:'與血量百分比低於自身的部隊交戰時，進入戰鬥後遭受傷害降低10%。',
    JOB1DISCB:'與血量百分比低於自身的部隊交戰時，進入戰鬥後傷害提升10%。',
    JOB2:'修羅', ARMY2: '劍兵',
    JOB2DISCA:'部隊血量高於80%時，遭受暴擊率降低10%。',
    JOB2DISCB:'部隊血量高於80%時，暴擊率提升10%。'
},{
    NAME: '巴恩哈特', JOBS: 2,
    SOLDHPPLUS:0.35, SOLDATKPLUS:0.35, SOLDDEFPLUS:0.15, SOLDMDEFPLUS:0.15,
    TALENT: '進入戰鬥時，造成傷害提升20%。周圍2格內所有敵軍攻防降低15%。',
    JOB1:'勇者', ARMY1: '劍兵',
    JOB1DISCA:'遭受範圍傷害降低10%。',
    JOB1DISCB:'受到近戰攻擊進入戰鬥時，傷害提升10%。',
    JOB2:'皇帝', ARMY2: '劍兵',
    JOB2DISCA:'主動攻擊進入戰鬥時，部隊遭受傷害降低10%。',
    JOB2DISCB:'範圍傷害提升10%。'
},{
    NAME: '希琳卡', JOBS: 2,
    SOLDHPPLUS:0.25, SOLDATKPLUS:0.35, SOLDDEFPLUS:0.25, SOLDMDEFPLUS:0.15,
    TALENT: '行動結束時，如果自身2格範圍內沒有友軍部隊，則傷害提升20%，遭受傷害降低20%，持續1回合。若沒有處於[休眠]的狀態時，在遭受致命傷害時不會死亡，之後生命值恢復90%，並進入[休眠]：“無法行動，在效果結束時，恢復50%的生命”，持續1回合。（該效果無法免疫和驅散，每場戰鬥最多觸發1次）',
    JOB1:'破滅之翼', ARMY1: '弓兵',
    JOB1DISCA:'部隊血量低於70%時，進入戰鬥後遭受傷害降低10%。',
    JOB1DISCB:'受到遠程攻擊進入戰鬥時，傷害提升10%。',
    JOB2:'劍聖', ARMY2: '劍兵',
    JOB2DISCA:'與血量百分比低於自身的部隊交戰時，進入戰鬥後遭受傷害降低10%。',
    JOB2DISCB:'受到近戰攻擊進入戰鬥時，傷害提升10 %。'
},{
    NAME: '艾爾文', JOBS: 2,
    SOLDHPPLUS:0.15, SOLDATKPLUS:0.35, SOLDDEFPLUS:0.35, SOLDMDEFPLUS:0.15,
    TALENT: '主動攻擊進入戰鬥時，傷害提升30%。戰鬥後，有100%概率恢復生命，恢復量為英雄造成傷害的30%。',
    JOB1:'英雄', ARMY1: '劍兵',
    JOB1DISCA:'部隊血量高於80%時，進入戰鬥後遭受傷害降低10%。',
    JOB1DISCB:'部隊血量高於80%時，進入戰鬥後傷害提升10%。',
    JOB2:'大元帥', ARMY2: '槍兵',
    JOB2DISCA:'血量百分比低於自身的部隊交戰時，進入戰鬥後遭受傷害降低10%。',
    JOB2DISCB:'與血量百分比低於自身的部隊交戰時，進入戰鬥後傷害提升10%。'
},{
    NAME: '貝蒂', JOBS: 2,
    SOLDHPPLUS:0.2, SOLDATKPLUS:0.25, SOLDDEFPLUS:0.35, SOLDMDEFPLUS:0.2,
    TALENT: '遭受範圍傷害降低30%。當周圍3格內的一名友軍被攻擊後，對攻擊者造成貝蒂攻擊1倍的[固定傷害]（該效果無法免疫），並有30%的概率對其施加1個隨機的弱化效果。之後提升自身20%攻擊和魔防，持續2回合。',
    JOB1:'皇后', ARMY1: '劍兵',
    JOB1DISCA:'主動攻擊進入戰鬥時，部隊遭受傷害降低10%。',
    JOB1DISCB:'受到近戰攻擊進入戰鬥時，傷害提升10%。',
    JOB2:'劍士統帥', ARMY2: '劍兵',
    JOB2DISCA:'部隊血量高於80%時，遭受暴擊傷害降低10%。',
    JOB2DISCB:'範圍傷害提升10%。'
},{
    NAME: '真宮寺櫻', JOBS: 2,
    SOLDHPPLUS:0.2, SOLDATKPLUS:0.35, SOLDDEFPLUS:0.25, SOLDMDEFPLUS:0.2,
    TALENT: '擊殺敵軍後，除生命以外全屬性提升10%，可以累積，最高可以累積4層。（該效果不可驅散）進入戰鬥前，如果自身技巧高於敵軍，會先於敵軍進行攻擊。',
    JOB1:'光武·改', ARMY1: '騎兵',
    JOB1DISCA:'部隊血量低於50%時，遭受傷害降低10%。',
    JOB1DISCB:'主動攻擊血量百分比高於自身的部隊時，進入戰鬥後傷害提升10%。',
    JOB2:'破邪劍征', ARMY2: '劍兵',
    JOB2DISCA:'受到近戰攻擊時，遭受物理傷害降低10%。',
    JOB2DISCB:'受到近戰攻擊時，傷害提升10%。'
},{
    NAME: '雷丁', JOBS: 2,
    SOLDHPPLUS:0.35, SOLDATKPLUS:0.1, SOLDDEFPLUS:0.35, SOLDMDEFPLUS:0.2,
    TALENT: '遭受所有傷害降低15%。英雄生命50%以上被近戰攻擊進入戰鬥時，可以攻擊2次。',
    JOB1:'聖騎統帥', ARMY1: '僧侶',
    JOB1DISCA:'受到攻擊進入戰鬥時，遭受魔法傷害降低10%。',
    JOB1DISCB:'受到具有“強化效果”的部隊攻擊進入戰鬥時，傷害提升10%。',
    JOB2:'王者', ARMY2: '劍兵',
    JOB2DISCA:'受到攻擊進入戰鬥時，遭受物理傷害降低10%。',
    JOB2DISCB:'主動攻擊進入戰鬥時，傷害提升10%。'
},{
    NAME: '約書亞', JOBS: 2,
    SOLDHPPLUS:0.2, SOLDATKPLUS:0.4, SOLDDEFPLUS:0.1, SOLDMDEFPLUS:0.3,
    TALENT: '暴擊率提升20%。造成暴擊後，對敵軍再造成一次[固定傷害]。（數值為英雄攻擊的2倍）。',
    JOB1:'漆黑之牙', ARMY1: '魔物',
    JOB1DISCA:'部隊血量100%時，遭受暴擊率降低10%。',
    JOB1DISCB:'部隊血量100%時，暴擊率提升10%。',
    JOB2:'影', ARMY2: '刺客',
    JOB2DISCA:'部隊血量100%時，遭受傷害降低10%。',
    JOB2DISCB:'部隊血量100%時，傷害提升10%。'
},{
    NAME: '澤瑞達', JOBS: 2,
    SOLDHPPLUS:0.1, SOLDATKPLUS:0.4, SOLDDEFPLUS:0.1, SOLDMDEFPLUS:0.4,
    TALENT: '暴擊率提升20%。在行動結束時，如果處於[危險範圍]外，則進入“潛行”狀態：“暴擊率、暴擊傷害提升30%，遭受傷害降低30%，移動力提升4，持續1回合”。',
    JOB1:'混沌化身', ARMY1: '魔物',
    JOB1DISCA:'部隊血量低於50%時，遭受傷害降低10%。',
    JOB1DISCB:'受到物理攻擊進入戰鬥時，傷害提升10%。',
    JOB2:'影', ARMY2: '刺客',
    JOB2DISCA:'部隊血量100%時，遭受傷害降低10%。',
    JOB2DISCB:'受到魔法攻擊進入戰鬥時，傷害提升10%。'
},{
    NAME: '燕', JOBS: 2,
    SOLDHPPLUS:0.1, SOLDATKPLUS:0.4, SOLDDEFPLUS:0.1, SOLDMDEFPLUS:0.4,
    TALENT: '周圍3格內每有1個敵軍，攻擊、技巧提升8%（最高24%）。行動結束時，沒有造成和受到過傷害，且自身周圍2圈沒有敵軍，則獲得[隱匿]：“無法被敵軍普通攻擊及技能鎖定為目標（不可驅散，遭受傷害或造成傷害後，或相鄰1格範圍內有敵軍時，該效果失效）”天賦獲得的[隱匿]失效後需要間隔2回合才可以再次觸發。”',
    JOB1:'影', ARMY1: '刺客',
    JOB1DISCA:'主動攻擊進入戰鬥時，部隊遭受傷害降低10%。',
    JOB1DISCB:'受到攻擊進入戰鬥時，傷害提升10%。',
    JOB2:'遊俠', ARMY2: '弓兵',
    JOB2DISCA:'受到具有“弱化效果”的部隊攻擊進入戰鬥時，遭受傷害降低10%。',
    JOB2DISCB:'部隊血量高於80%時，暴擊傷害提升10%。'
},{
    NAME: '歐米伽', JOBS: 2,
    SOLDHPPLUS:0.15, SOLDATKPLUS:0.4, SOLDDEFPLUS:0.2, SOLDMDEFPLUS:0.25,
    TALENT: '與生命高於和等於70%的部隊戰鬥時，攻擊和暴擊率提升20%。擊殺敵方部隊後，傳送回攻擊之前所在位置，並可以再次移動3格。',
    JOB1:'大統帥', ARMY1: '刺客',
    JOB1DISCA:'受到近戰攻擊時，遭受物理傷害降低10%。',
    JOB1DISCB:'受到物理攻擊進入戰鬥時，傷害提升10%。',
    JOB2:'遊俠', ARMY2: '弓兵',
    JOB2DISCA:'部隊血量高於80%時，遭受暴擊率降低10%。',
    JOB2DISCB:'部隊血量高於80%時，暴擊傷害提升10%。'
},{
    NAME: '戶愚呂兄弟', JOBS: 2,
    SOLDHPPLUS:0.4, SOLDATKPLUS:0.4, SOLDDEFPLUS:0.1, SOLDMDEFPLUS:0.1,
    TALENT: '行動結束時，獲得[肉體強化]：攻擊、技巧提升2%，可以累積，最多可以累積15個。主動攻擊進入戰鬥前和擊殺敵軍後，也可獲得以上效果。',
    JOB1:'力·100%', ARMY1: '魔物',
    JOB1DISCA:'部隊血量100%時，遭受傷害降低10%。',
    JOB1DISCB:'部隊血量100%時，傷害提升10%。',
    JOB2:'武態·劍', ARMY2: '騎兵',
    JOB2DISCA:'本部隊有10個以上的強化狀態時，戰鬥中遭受傷害降低10%。',
    JOB2DISCB:'本部隊有10個以上的強化狀態時，戰鬥中傷害提升10%。'
},{
    NAME: '伊露希亞', JOBS: 2,
    SOLDHPPLUS:0.4, SOLDATKPLUS:0.1, SOLDDEFPLUS:0.35, SOLDMDEFPLUS:0.15,
    TALENT: '在水中時，部隊移動方式視作[水行]，同時受到物理傷害降低20%，且在遭受致命傷害時不會死亡，之後生命值恢復20%。該效果每場戰鬥最多觸發1次。被攻擊進入戰鬥後，令敵軍所處地形視為“水中”，持續2回合；若敵軍已經處於“水中”則有50%概率令敵方無法行動，持續1回合。',
    JOB1:'皇家衛士', ARMY1: '槍兵',
    JOB1DISCA:'主動攻擊進入戰鬥時，部隊遭受傷害降低10%。',
    JOB1DISCB:'主動攻擊時，士兵傷害提升20%。',
    JOB2:'海騎統帥', ARMY2: '水兵',
    JOB2DISCA:'遭受範圍傷害降低10%。',
    JOB2DISCB:'在水中時，物理傷害提升10%。'
},{
    NAME: '謎之騎士', JOBS: 2,
    SOLDHPPLUS:0.2, SOLDATKPLUS:0.35, SOLDDEFPLUS:0.2, SOLDMDEFPLUS:0.25,
    TALENT: '每移動1格，傷害提升4%（最高20%），魔防提升20%（最高100%）。當移動累積20格後，在回合結束時，將自身所有技能冷卻時間清零。',
    JOB1:'法騎統帥', ARMY1: '騎兵',
    JOB1DISCA:'主動攻擊進入戰鬥時，部隊遭受傷害降低10%。',
    JOB1DISCB:'部隊血量低於70%時，傷害提升10%。',
    JOB2:'獨角獸統帥', ARMY2: '法師',
    JOB2DISCA:'遭受範圍傷害降低10%。',
    JOB2DISCB:'範圍傷害提升10%。'
},{
    NAME: '艾絲蒂爾', JOBS: 2,
    SOLDHPPLUS:0.4, SOLDATKPLUS:0.1, SOLDDEFPLUS:0.35, SOLDMDEFPLUS:0.15,
    TALENT: '替相鄰友軍承受物理攻擊。主動攻擊造成傷害後，獲得效果：攻擊、防禦提升15%，護衛範圍提升至2格，持續2回合。行動結束時，令周圍3格的4名其他友軍部隊“造成傷害”提升10%，持續2回合。',
    JOB1:'櫻花無雙', ARMY1: '槍兵',
    JOB1DISCA:'部隊血量高於80%時，進入戰鬥後遭受傷害降低10%。',
    JOB1DISCB:'部隊血量高於80%時，進入戰鬥後傷害提升10%。',
    JOB2:'烈波無雙', ARMY2: '槍兵',
    JOB2DISCA:'遭受範圍傷害降低10%。',
    JOB2DISCB:'範圍傷害提升10%。'
},{
    NAME: '妮絲蒂爾', JOBS: 2,
    SOLDHPPLUS:0.3, SOLDATKPLUS:0.1, SOLDDEFPLUS:0.2, SOLDMDEFPLUS:0.4,
    TALENT: '將自身魔防的1.5倍代替智力。部隊無視兵種克制。對敵方部隊造成傷害後，施加“傷口詛咒”：被施加的治療直接轉變為治療量50%的傷害，持續1回合。',
    JOB1:'魔神', ARMY1: '魔物',
    JOB1DISCA:'部隊血量低於50%時，遭受傷害降低10%。',
    JOB1DISCB:'部隊血量低於50%時，傷害提升10%。',
    JOB2:'血魔姬', ARMY2: '魔物',
    JOB2DISCA:'遭受範圍傷害降低10%。',
    JOB2DISCB:'受到攻擊進入戰鬥時，傷害提升10%。'
},{
    NAME: '阿卡婭', JOBS: 2,
    SOLDHPPLUS:0.25, SOLDATKPLUS:0.25, SOLDDEFPLUS:0.25, SOLDMDEFPLUS:0.25,
    TALENT: '當戰場上有部隊陣亡時，則在自己身邊召喚一個[狼魂]，此狼魂的屬性繼承自此部隊將領的屬性，但是不能超過阿卡婭對應屬性的150%。（該效果需要間隔1回合才可以再次觸發，狼魂同時只能存在一隻，且狼魂陣亡同時無法觸發召喚）當狼魂陣亡後，會將其除生命以外全部屬性的20%附加於阿卡婭身上，並恢復阿卡婭的生命，恢復量為狼魂最高生命值的20%。',
    JOB1:'西卡招魂師', ARMY1: '法師',
    JOB1DISCA:'部隊血量低於70%時，進入戰鬥後遭受傷害降低10%。',
    JOB1DISCB:'部隊血量低於70%時，傷害提升10%。',
    JOB2:'西卡聖女', ARMY2: '騎兵',
    JOB2DISCA:'主動攻擊進入戰鬥時，部隊遭受傷害降低10%。',
    JOB2DISCB:'受到攻擊進入戰鬥時，傷害提升10%。'
},{
    NAME: '安潔麗娜', JOBS: 2,
    SOLDHPPLUS:0.2, SOLDATKPLUS:0.2, SOLDDEFPLUS:0.35, SOLDMDEFPLUS:0.25,
    TALENT: '在有防禦增加效果的地形上，遭受所有傷害降低20%。反之，攻擊力提升20%。',
    JOB1:'海騎統帥', ARMY1: '水兵',
    JOB1DISCA:'在水中時，遭受物理傷害降低10%。',
    JOB1DISCB:'在水中時，物理傷害提升10%。',
    JOB2:'龍騎統帥', ARMY2: '飛兵',
    JOB2DISCA:'部隊血量低於70%時，進入戰鬥後遭受傷害降低10%。',
    JOB2DISCB:'部隊血量低於70%時，進入戰鬥後傷害提升10%。'
},{
    NAME: '露娜', JOBS: 2,
    SOLDHPPLUS:0.1, SOLDATKPLUS:0.4, SOLDDEFPLUS:0.1, SOLDMDEFPLUS:0.4,
    TALENT: '魔防提升20%。周圍2格友軍遭受魔法傷害降低30%。',
    JOB1:'弓騎統帥', ARMY1: '弓兵',
    JOB1DISCA:'部隊血量低於70%時，進入戰鬥後遭受傷害降低10%。',
    JOB1DISCB:'受到遠程攻擊進入戰鬥時，傷害提升10%。',
    JOB2:'聖天馬統帥', ARMY2: '飛兵',
    JOB2DISCA:'主動攻擊進入戰鬥時，部隊遭受傷害降低10%。',
    JOB2DISCB:'受到近戰攻擊進入戰鬥時，傷害提升10%。'
},{
    NAME: '迪哈爾特', JOBS: 2,
    SOLDHPPLUS:0.2, SOLDATKPLUS:0.35, SOLDDEFPLUS:0.35, SOLDMDEFPLUS:0.1,
    TALENT: '暴擊率提升30%。擊殺敵軍後，觸發[煙霧]:遭受所有傷害降低30%，持續1回合，[觸發冷卻]該效果需要間隔1回合才可以再次觸發。',
    JOB1:'皇家騎士', ARMY1: '騎兵',
    JOB1DISCA:'主動攻擊進入戰鬥時，部隊遭受傷害降低10%。',
    JOB1DISCB:'受到攻擊進入戰鬥時，遭受魔法傷害降低10%。',
    JOB2:'大統帥', ARMY2: '刺客',
    JOB2DISCA:'部隊血量低於70%時，暴擊傷害提升10%。',
    JOB2DISCB:'受到攻擊進入戰鬥時，暴擊傷害提升10%。'
},{
    NAME: '利昂', JOBS: 2,
    SOLDHPPLUS:0.4, SOLDATKPLUS:0.4, SOLDDEFPLUS:0.1, SOLDMDEFPLUS:0.1,
    TALENT: '每移動1格，傷害提升4%，防禦提升20%，攻擊後，可以再次移動3格。',
    JOB1:'突擊騎士', ARMY1: '騎兵',
    JOB1DISCA:'部隊血量低於70%時，進入戰鬥後遭受傷害降低10%。',
    JOB1DISCB:'部隊血量低於70%時，進入戰鬥後傷害提升10%。',
    JOB2:'皇家騎士', ARMY2: '騎兵',
    JOB2DISCA:'被血量百分比高於自身的部隊攻擊時，進入戰鬥後遭受傷害降低10%。',
    JOB2DISCB:'主動攻擊血量百分比高於自身的部隊時，進入戰鬥後傷害提升10%。'
},{
    NAME: '亞修拉姆', JOBS: 2,
    SOLDHPPLUS:0.4, SOLDATKPLUS:0.4, SOLDDEFPLUS:0.1, SOLDMDEFPLUS:0.1,
    TALENT: '每移動1格，攻擊提升4%（最高20%），防禦提升20%（最高100%）。進入戰鬥前，如果自身攻擊力高於敵軍，會先於敵軍進行攻擊。',
    JOB1:'龍騎統帥', ARMY1: '飛兵',
    JOB1DISCA:'部隊血量低於70%時，進入戰鬥後遭受傷害降低10%。',
    JOB1DISCB:'範圍傷害提升10%。',
    JOB2:'皇家騎士', ARMY2: '騎兵',
    JOB2DISCA:'主動攻擊進入戰鬥時，部隊遭受傷害降低10%。',
    JOB2DISCB:'主動攻擊血量百分比高於自身的部隊時，進入戰鬥後傷害提升10%。'
},{
    NAME: '海倫娜', JOBS: 2,
    SOLDHPPLUS:0.4, SOLDATKPLUS:0.35, SOLDDEFPLUS:0.15, SOLDMDEFPLUS:0.1,
    TALENT: '每移動1格，傷害提升4%（最高20%），周圍2格沒有友軍時，防禦提升25%。在行動結束時，使自身本回合經過的所有格子獲得1回合的特殊效果[璨晶]：“當敵軍玩家英雄移動至其上，在行動結束時100%概率獲得'隨機裝備技能失效（最大生命值除外）'，持續2回合。當目標為非玩家英雄時，效果替換為'隨機屬性降低25% '，持續1回合。”通過具有友方[璨晶]效果的地形時，不消耗移動力（再移動時無效），移動時無視敵軍單位阻擋。',
    JOB1:'突擊騎士', ARMY1: '騎兵',
    JOB1DISCA:'部隊血量低於70%時，進入戰鬥後遭受傷害降低10%。',
    JOB1DISCB:'受到攻擊進入戰鬥時，傷害提升10%。',
    JOB2:'皇家騎士', ARMY2: '騎兵',
    JOB2DISCA:'遭受範圍傷害降低10%。',
    JOB2DISCB:'主動攻擊血量百分比高於自身的部隊時，進入戰鬥後傷害提升10%。'
},{
    NAME: '傑利奧魯&蕾拉', JOBS: 2,
    SOLDHPPLUS:0.15, SOLDATKPLUS:0.35, SOLDDEFPLUS:0.35, SOLDMDEFPLUS:0.15,
    TALENT: '攻擊不受近戰傷害減免影響。主動遠程攻擊後，為其他友軍恢復傑利奧魯&蕾拉攻擊與智力之和的1.5倍生命，並驅散1個弱化狀態。主動近戰攻擊後，為自身部隊恢復造成傷害30%的生命，並令自身“免疫”，持續1回合。',
    JOB1:'黑騎士', ARMY1: '騎兵',
    JOB1DISCA:'本部隊有5個以上的強化狀態時，戰鬥中遭受傷害降低10%。',
    JOB1DISCB:'主動近戰攻擊進入戰鬥時，傷害提升10%。',
    JOB2:'皇家特使', ARMY2: '僧侶',
    JOB2DISCA:'本部隊有弱化狀態時，戰鬥中遭受傷害降低10%。',
    JOB2DISCB:'主動遠程攻擊進入戰鬥時，傷害提升10%。'
},{
    NAME: '蘭芳特', JOBS: 2,
    SOLDHPPLUS:0.4, SOLDATKPLUS:0.4, SOLDDEFPLUS:0.1, SOLDMDEFPLUS:0.1,
    TALENT: '周圍2格所有友軍除生命以外全屬性提升15%。（該效果與指揮技能不能同生效）',
    JOB1:'劍聖', ARMY1: '劍兵',
    JOB1DISCA:'主動攻擊進入戰鬥時，部隊遭受傷害降低10%。',
    JOB1DISCB:'與血量百分比低於自身的部隊交戰時，進入戰鬥後傷害提升10%。',
    JOB2:'騎士統帥', ARMY2: '騎兵',
    JOB2DISCA:'攻擊前每移動1格，部隊遭受傷害降低3%。（上限15%）',
    JOB2DISCB:'與血量百分比高於自身的部隊交戰時，進入戰鬥後傷害提升10%。'
},{
    NAME: '布琳達', JOBS: 2,
    SOLDHPPLUS:0.15, SOLDATKPLUS:0.35, SOLDDEFPLUS:0.35, SOLDMDEFPLUS:0.15,
    TALENT: '與生命百分比低於和等於自己的部隊戰鬥時，傷害提升30%。當主動攻擊和被攻擊進入戰鬥的次數累積3次後，在行動結束時，可以額外行動一次。',
    JOB1:'鬥神', ARMY1: '槍兵',
    JOB1DISCA:'受到遠程攻擊時，遭受物理傷害降低10%。',
    JOB1DISCB:'與具有“弱化效果”的部隊戰鬥時，傷害提升10%。',
    JOB2:'皇家騎士', ARMY2: '騎兵',
    JOB2DISCA:'主動攻擊進入戰鬥時，部隊遭受傷害降低10%。',
    JOB2DISCB:'主動攻擊進入戰鬥時，部隊遭受傷害降低10%。'
},{
    NAME: '羅莎莉婭', JOBS: 2,
    SOLDHPPLUS:0.2, SOLDATKPLUS:0.4, SOLDDEFPLUS:0.15, SOLDMDEFPLUS:0.25,
    TALENT: '當生命50%以上進入戰鬥時攻擊、防禦提升20%。進入戰鬥前或行動結束自身2圈範圍內有敵軍時，獲得[信仰]：造成傷害提升5%，遭受傷害降低5%可以累積，最多可以累積3個。（該效果無法被驅散）',
    JOB1:'銀騎統帥', ARMY1: '僧侶',
    JOB1DISCA:'主動攻擊進入戰鬥時，部隊遭受傷害降低10%。',
    JOB1DISCB:'部隊血量低於70%時，傷害提升10%。',
    JOB2:'皇家騎士', ARMY2: '騎兵',
    JOB2DISCA:'部隊血量高於80%時，遭受暴擊率降低10%。',
    JOB2DISCB:'受到近戰攻擊進入戰鬥時，傷害提升10%。'
},{
    NAME: '蘭迪烏斯', JOBS: 2,
    SOLDHPPLUS:0.2, SOLDATKPLUS:0.35, SOLDDEFPLUS:0.35, SOLDMDEFPLUS:0.1,
    TALENT: '行動結束時，如果自身3格範圍內有友軍部隊，則攻擊提升20%，並將攻擊的15%增加到防禦和魔防上，持續1回合。被遠程攻擊時，遭受傷害降低20%，並可以對2格距離的遠程攻擊進行反擊。',
    JOB1:'大元帥', ARMY1: '槍兵',
    JOB1DISCA:'部隊血量低於70%時，進入戰鬥後遭受傷害降低10%。',
    JOB1DISCB:'部隊血量低於70%時，進入戰鬥後傷害提升10%。',
    JOB2:'皇家騎士', ARMY2: '騎兵',
    JOB2DISCA:'受到攻擊進入戰鬥時，遭受物理傷害降低10%。',
    JOB2DISCB:'主動攻擊進入戰鬥時，傷害提升10%。'
},{
    NAME: '諾埃米', JOBS: 2,
    SOLDHPPLUS:0.25, SOLDATKPLUS:0.4, SOLDDEFPLUS:0.15, SOLDMDEFPLUS:0.2,
    TALENT: '本部隊有3個以下的弱化狀態時，智力提升15%。第1次行動結束時和英雄死亡時，為所有友軍部隊施加[魔法新衣]：“如果部隊生命值低於80%時，遭受的下一次傷害降低50% ”（該效果無法驅散）',
    JOB1:'織魔師', ARMY1: '法師',
    JOB1DISCA:'受到具有“弱化效果”的部隊攻擊進入戰鬥時，遭受傷害降低10%。',
    JOB1DISCB:'受到魔法攻擊進入戰鬥時，傷害提升10%。',
    JOB2:'巫師', ARMY2: '法師',
    JOB2DISCA:'遭受範圍傷害降低10%。',
    JOB2DISCB:'受到物理攻擊進入戰鬥時，傷害提升10%。'
},{
    NAME: '波贊魯', JOBS: 2,
    SOLDHPPLUS:0.4, SOLDATKPLUS:0.1, SOLDDEFPLUS:0.1, SOLDMDEFPLUS:0.4,
    TALENT: '將自身魔防的1.5倍代替智力。對敵軍造成傷害後，100%概率對其施加1個隨機的弱化效果。',
    JOB1:'死神領主', ARMY1: '魔物',
    JOB1DISCA:'受到具有“弱化效果”的部隊攻擊進入戰鬥時，遭受傷害降低10%。',
    JOB1DISCB:'受到魔法攻擊進入戰鬥時，傷害提升10%。',
    JOB2:'黑暗王子', ARMY2: '法師',
    JOB2DISCA:'受到遠程攻擊時，遭受物理傷害降低10%。',
    JOB2DISCB:'受到物理攻擊進入戰鬥時，傷害提升10%。'
},{
    NAME: '拉姆達', JOBS: 2,
    SOLDHPPLUS:0.25, SOLDATKPLUS:0.15, SOLDDEFPLUS:0.2, SOLDMDEFPLUS:0.4,
    TALENT: '如果自身2格範圍有友軍部隊，智力提升15%。釋放範圍技能時，技能範圍+1；釋放直線技能時，技能射程+1；並且範圍技能傷害提升15%。',
    JOB1:'巫師', ARMY1: '法師',
    JOB1DISCA:'部隊血量低於50%時，遭受傷害降低10%。',
    JOB1DISCB:'主動攻擊血量百分比低於自身的部隊時，進入戰鬥後傷害提升10%。',
    JOB2:'木賢者', ARMY2: '僧侶',
    JOB2DISCA:'被血量百分比高於自身的部隊攻擊時，進入戰鬥後遭受傷害降低10%。',
    JOB2DISCB:'部隊血量高於80%時，進入戰鬥後傷害提升10%。'
},{
    NAME: '拉娜', JOBS: 2,
    SOLDHPPLUS:0.1, SOLDATKPLUS:0.4, SOLDDEFPLUS:0.1, SOLDMDEFPLUS:0.4,
    TALENT: '進入戰鬥時，魔法傷害提升30%，使用技能時射程提升1。',
    JOB1:'聖者', ARMY1: '僧侶',
    JOB1DISCA:'部隊血量100%時，遭受傷害降低10%。',
    JOB1DISCB:'受到魔法攻擊進入戰鬥時，傷害提升10%。',
    JOB2:'黑暗公主', ARMY2: '法師',
    JOB2DISCA:'受到具有“弱化效果”的部隊攻擊進入戰鬥時，遭受傷害降低10%。',
    JOB2DISCB:'受到物理攻擊進入戰鬥時，傷害提升10%。'
},{
    NAME: '樹之賢者', JOBS: 2,
    SOLDHPPLUS:0.2, SOLDATKPLUS:0.15, SOLDDEFPLUS:0.35, SOLDMDEFPLUS:0.3,
    TALENT: '自身3格範圍內有友軍部隊，則智力提升20%。部隊不會受到近戰攻擊減免效果影響。英雄死亡時，驅散自身為中心5格範圍內友軍所有弱化效果。並令命中的所有格子獲得4回合的特殊效果[炫光]：“所有移動方式為[飛行]、[騎行]以及移動時所有可以通過的地形都視為“平地”的敵軍部隊移動至其上時，額外消耗1點移動力。所有移動方式為[步行]、[水行]的友軍部隊移動至其上時，攻擊後可再移動2格。”',
    JOB1:'巫師', ARMY1: '法師',
    JOB1DISCA:'受到具有“弱化效果”的部隊攻擊進入戰鬥時，遭受傷害降低10%。',
    JOB1DISCB:'主動攻擊血量百分比低於自身的部隊時，進入戰鬥後傷害提升10%。',
    JOB2:'大賢者', ARMY2: '僧侶',
    JOB2DISCA:'受到攻擊進入戰鬥時，遭受物理傷害降低10%。',
    JOB2DISCB:'部隊血量高於80%時，進入戰鬥後傷害提升10%。'
},{
    NAME: '基扎洛夫', JOBS: 2,
    SOLDHPPLUS:0.2, SOLDATKPLUS:0.1, SOLDDEFPLUS:0.35, SOLDMDEFPLUS:0.35,
    TALENT: '生命提升20%。主動對敵軍造成傷害後，如果戰場上有基扎洛夫召喚的“構造體”，則對“構造體”實施1次隨機的“改造”。英雄死亡時，召喚一個“構造體”，並對其實施5次隨機的“改造”。',
    JOB1:'科學狂人', ARMY1: '法師',
    JOB1DISCA:'主動攻擊進入戰鬥時，部隊遭受傷害降低10%。',
    JOB1DISCB:'與血量百分比低於自身的部隊交戰時，進入戰鬥後傷害提升10%。',
    JOB2:'魔導元帥', ARMY2: '魔物',
    JOB2DISCA:'部隊血量100%時，遭受暴擊率降低10%。',
    JOB2DISCB:'部隊血量100%時，暴擊率提升10%。'
},{
    NAME: '女神化身', JOBS: 2,
    SOLDHPPLUS:0.2, SOLDATKPLUS:0.35, SOLDDEFPLUS:0.15, SOLDMDEFPLUS:0.3,
    TALENT: '距離目標越遠，則傷害越高，每相隔多1格距離傷害提高8%。若本回合原地待機，則在行動結束時，獲得“移動力+ 2 ”，持續1回合。',
    JOB1:'聖者', ARMY1: '僧侶',
    JOB1DISCA:'主動攻擊進入戰鬥時，部隊遭受傷害降低10%。',
    JOB1DISCB:'部隊血量低於70%時，傷害提升10%。',
    JOB2:'巫師', ARMY2: '法師',
    JOB2DISCA:'受到具有“弱化效果”的部隊攻擊進入戰鬥時，遭受傷害降低10%。',
    JOB2DISCB:'受到攻擊進入戰鬥時，傷害提升10%。'
},{
    NAME: '蕾恩', JOBS: 2,
    SOLDHPPLUS:0.25, SOLDATKPLUS:0.3, SOLDDEFPLUS:0.2, SOLDMDEFPLUS:0.25,
    TALENT: '與帶有“弱化效果”的敵軍交戰時，智力、防禦、魔防提升15%。對敵方部隊造成傷害後，為敵軍施加2個隨機的弱化效果。',
    JOB1:'巫師', ARMY1: '法師',
    JOB1DISCA:'受到具有“弱化效果”的部隊攻擊進入戰鬥時，遭受傷害-10%',
    JOB1DISCB:'範圍傷害+10%',
    JOB2:'殲滅天使', ARMY2: '魔物',
    JOB2DISCA:'部隊血量低於70%時，進入戰鬥後遭受傷害-10%',
    JOB2DISCB:'部隊血量低於70%時，進入戰鬥後傷害+10%'
},{
    NAME: '梅雅', JOBS: 2,
    SOLDHPPLUS:0.4, SOLDATKPLUS:0.15, SOLDDEFPLUS:0.2, SOLDMDEFPLUS:0.25,
    TALENT: '周圍3格內有敵軍時，智力提升15%。對敵方部隊主動造成傷害前，有100%概率驅散敵軍1個強化效果並使其遭受傷害提升20%，持續1回合。在行動結束時驅散3格內其他友軍部隊1個弱化效果。',
    JOB1:'聖者', ARMY1: '僧侶',
    JOB1DISCA:'部隊血量100%時，遭受傷害降低10%。',
    JOB1DISCB:'部隊血量低於70%時，傷害提升10%。',
    JOB2:'皇家女僕', ARMY2: '法師',
    JOB2DISCA:'受到具有“弱化效果”的部隊攻擊進入戰鬥時，遭受傷害降低10%。',
    JOB2DISCB:'受到攻擊進入戰鬥時，傷害提升10%。'
},{
    NAME: '雪露法妮爾', JOBS: 2,
    SOLDHPPLUS:0.2, SOLDATKPLUS:0.2, SOLDDEFPLUS:0.25, SOLDMDEFPLUS:0.35,
    TALENT: '部隊血量越高時，智力越高，最高提升20%。每當使用技能造成傷害後，該技能的冷卻時間減少3。',
    JOB1:'王女', ARMY1: '僧侶',
    JOB1DISCA:'受到具有“弱化效果”的部隊攻擊進入戰鬥時，遭受傷害降低10%。',
    JOB1DISCB:'部隊血量高於80%時，進入戰鬥後傷害提升10%。',
    JOB2:'巫師', ARMY2: '法師',
    JOB2DISCA:'部隊血量高於80%時，進入戰鬥後遭受傷害降低10%。',
    JOB2DISCB:'主動攻擊血量百分比低於自身的部隊時，進入戰鬥後傷害提升10%。'
},{
    NAME: '飛影', JOBS: 2,
    SOLDHPPLUS:0.2, SOLDATKPLUS:0.3, SOLDDEFPLUS:0.25, SOLDMDEFPLUS:0.25,
    TALENT: '主動攻擊進入戰鬥時，攻擊和暴擊率提升15%。進入戰鬥前使敵軍的一項隨機屬性降低30%，持續1回合。被範圍技能攻擊時，如果處於範圍技能的邊緣，則可以免除此次傷害。（該效果，每場戰鬥最多觸發2次）',
    JOB1:'邪眼師', ARMY1: '刺客',
    JOB1DISCA:'部隊血量高於80%時，遭受暴擊率降低10%。',
    JOB1DISCB:'部隊血量高於80%時，暴擊率提升10%。',
    JOB2:'邪王炎殺', ARMY2: '魔物',
    JOB2DISCA:'部隊血量低於70%時，進入戰鬥後遭受傷害降低10%。',
    JOB2DISCB:'受到遠程攻擊進入戰鬥時，傷害提升10%。'
},{
    NAME: '藏馬', JOBS: 2,
    SOLDHPPLUS:0.2, SOLDATKPLUS:0.35, SOLDDEFPLUS:0.15, SOLDMDEFPLUS:0.3,
    TALENT: '若自身處於“樹林”“山地”“草地”“洞穴”“沼澤”和“水中”時，智力、魔防提升20%，且在行動結束時，有100%的概率所有技能冷卻減少1。',
    JOB1:'前世之力', ARMY1: '魔物',
    JOB1DISCA:'受到攻擊進入戰鬥時，遭受魔法傷害降低10%。',
    JOB1DISCB:'範圍傷害提升10%。',
    JOB2:'魔薔薇之棘', ARMY2: '法師',
    JOB2DISCA:'到近戰攻擊進入戰鬥時，遭受物理傷害降低10%。',
    JOB2DISCB:'受到攻擊進入戰鬥時，傷害提升10%。'
},{
    NAME: '亞魯特繆拉', JOBS: 2,
    SOLDHPPLUS:0.4, SOLDATKPLUS:0.4, SOLDDEFPLUS:0.1, SOLDMDEFPLUS:0.1,
    TALENT: '每次進入戰鬥前，攻擊提升10%，遭受物理傷害降低5%，持續4回合，最高可以累積4層。',
    JOB1:'大元帥', ARMY1: '槍兵',
    JOB1DISCA:'遭受範圍傷害降低10%。',
    JOB1DISCB:'與具有“弱化效果”的部隊戰鬥時，傷害提升10%。',
    JOB2:'龍騎統帥', ARMY2: '飛兵',
    JOB2DISCA:'主動攻擊進入戰鬥時，部隊遭受傷害降低10%。',
    JOB2DISCB:'範圍傷害提升10%。'
},{
    NAME: '克拉蕾特', JOBS: 2,
    SOLDHPPLUS:0.1, SOLDATKPLUS:0.25, SOLDDEFPLUS:0.35, SOLDMDEFPLUS:0.3,
    TALENT: '主動攻擊進入戰鬥時，傷害提升20%，遭受傷害降低20%。行動結束時，會將剩餘的初始移動力附加於自身，最高不超過5格。',
    JOB1:'龍騎統帥', ARMY1: '飛兵',
    JOB1DISCA:'受到近戰攻擊時，遭受物理傷害降低10%。',
    JOB1DISCB:'部隊血量低於70%時，進入戰鬥後傷害提升10%。',
    JOB2:'劍姬', ARMY2: '劍兵',
    JOB2DISCA:'受到遠程攻擊時，遭受物理傷害降低10%。',
    JOB2DISCB:'受到攻擊進入戰鬥時，傷害提升10%。'
},{
    NAME: '雪莉', JOBS: 2,
    SOLDHPPLUS:0.1, SOLDATKPLUS:0.2, SOLDDEFPLUS:0.35, SOLDMDEFPLUS:0.35,
    TALENT: '周圍2格沒有友軍時，遭受所有傷害降低25%。擊殺敵軍後，可以額外行動1次，[觸發冷卻]該效果需要間隔2回合才可以再次觸發。',
    JOB1:'龍騎統帥', ARMY1: '飛兵',
    JOB1DISCA:'部隊血量低於70%時，進入戰鬥後遭受傷害降低10%。',
    JOB1DISCB:'範圍傷害提升10%。',
    JOB2:'大統帥', ARMY2: '刺客',
    JOB2DISCA:'遭受範圍傷害降低10%。',
    JOB2DISCB:'受到遠程攻擊進入戰鬥時，傷害提升10%。'
},{
    NAME: '蕾娜塔', JOBS: 2,
    SOLDHPPLUS:0.15, SOLDATKPLUS:0.35, SOLDDEFPLUS:0.15, SOLDMDEFPLUS:0.35,
    TALENT: '若周圍1圈有任意友軍被攻擊受到傷害，則自身獲得“移動力”+ 2，持續1回合。並對造成傷害的敵方目標施加[龍印]：“受到來自蕾娜塔的攻擊時，自身無法被護衛且遭受傷害增加40% ”，無法觸發“再移動”類效果，以及“被動技能無法生效”，持續1回合。',
    JOB1:'鬥神', ARMY1: '槍兵',
    JOB1DISCA:'受到遠程攻擊時，遭受物理傷害降低10%。',
    JOB1DISCB:'與具有“弱化效果”的部隊戰鬥時，傷害提升10%。',
    JOB2:'龍族統帥', ARMY2: '飛兵',
    JOB2DISCA:'部隊血量高於80%時，遭受暴擊率降低10%。',
    JOB2DISCB:'主動攻擊血量百分比高於自身的部隊時，進入戰鬥後傷害提升10%。'
},{
    NAME: '桑原和真', JOBS: 2,
    SOLDHPPLUS:0.4, SOLDATKPLUS:0.1, SOLDDEFPLUS:0.35, SOLDMDEFPLUS:0.1,
    TALENT: '行動結束時，如果自身3格範圍內存在“女性”友軍或名為“浦飯幽助”的友軍時，遭受物理傷害降低30%，持續1回合。戰鬥結束時如果生命低於40%，可以恢復30%的生命。',
    JOB1:'靈劍鬥將', ARMY1: '劍兵',
    JOB1DISCA:'遭受範圍傷害降低10%。',
    JOB1DISCB:'主動攻擊進入戰鬥時，傷害提升10%。',
    JOB2:'靈槍鬥士', ARMY2: '槍兵',
    JOB2DISCA:'受到攻擊進入戰鬥時，遭受魔法傷害降低10%。',
    JOB2DISCB:'受到攻擊進入戰鬥時，傷害提升10%。'
},{
    NAME: '愛麗絲', JOBS: 2,
    SOLDHPPLUS:0.35, SOLDATKPLUS:0.1, SOLDDEFPLUS:0.2, SOLDMDEFPLUS:0.3,
    TALENT: '行動結束時，使周圍2格的其他友軍部隊獲得[夢幻之吻]：行動結束時恢復愛麗絲智力3倍的生命，持續2回合。',
    JOB1:'夢幻之吻', ARMY1: '僧侶',
    JOB1DISCA:'部隊血量低於50%時，遭受傷害降低10%。',
    JOB1DISCB:'主動攻擊進入戰鬥時，士兵傷害提升20%。',
    JOB2:'光武·改', ARMY2: '騎兵',
    JOB2DISCA:'部隊血量高於80%時，遭受暴擊率降低10%。',
    JOB2DISCB:'主動攻擊進入戰鬥時，傷害提升10%。'
},{
    NAME: '梅露帕妮', JOBS: 2,
    SOLDHPPLUS:0.15, SOLDATKPLUS:0.1, SOLDDEFPLUS:0.35, SOLDMDEFPLUS:0.35,
    TALENT: '如果自身周圍2格有友軍部隊，智力、魔防提升20%。當其他英雄護衛梅露帕妮時，戰鬥前可以恢復梅露帕妮智力3倍的生命。',
    JOB1:'巫師', ARMY1: '法師',
    JOB1DISCA:'主動攻擊進入戰鬥時，部隊遭受傷害降低10%。',
    JOB1DISCB:'受到遠程攻擊進入戰鬥時，傷害提升10%。',
    JOB2:'公主', ARMY2: '僧侶',
    JOB2DISCA:'遭受範圍傷害降低10%。',
    JOB2DISCB:'治療效果提升10%。'
},{
    NAME: '索菲亞', JOBS: 2,
    SOLDHPPLUS:0.15, SOLDATKPLUS:0.1, SOLDDEFPLUS:0.35, SOLDMDEFPLUS:0.35,
    TALENT: '對友軍釋放技能時附加效果:接受治療效果+30%，防禦提升30%。持續2回合。',
    JOB1:'先知', ARMY1: '僧侶',
    JOB1DISCA:'部隊血量高於80%時，遭受暴擊率降低10%。',
    JOB1DISCB:'受到攻擊進入戰鬥時，傷害提升10%。',
    JOB2:'聖者', ARMY2: '僧侶',
    JOB2DISCA:'部隊血量低於50%時，遭受傷害降低10%。',
    JOB2DISCB:'主動攻擊進入戰鬥時，士兵傷害提升20%。'
},{
    NAME: '弗拉基亞', JOBS: 2,
    SOLDHPPLUS:0.35, SOLDATKPLUS:0.15, SOLDDEFPLUS:0.1, SOLDMDEFPLUS:0.35,
    TALENT: '主動攻擊進入戰鬥後，英雄自身兵種將會變成敵軍英雄的兵種，若本回合進行過兵種的變換，就可以額外行動1次，並且獲得攻擊提升25%效果，持續1回合。[觸發冷卻]該效果需要間隔2回合才可以再次觸發。',
    JOB1:'漆黑魅影', ARMY1: '刺客',
    JOB1DISCA:'與血量百分比低於自身的部隊交戰時，進入戰鬥後遭受傷害降低10%。',
    JOB1DISCB:'受到近戰攻擊進入戰鬥時，傷害提升10%。',
    JOB2:'幻影魔姬', ARMY2: '魔物',
    JOB2DISCA:'遭受範圍傷害降低10%。',
    JOB2DISCB:'受到遠程攻擊進入戰鬥時，傷害提升10%。'
},{
    NAME: '芙蕾雅', JOBS: 2,
    SOLDHPPLUS:0.35, SOLDATKPLUS:0.1, SOLDDEFPLUS:0.4, SOLDMDEFPLUS:0.1,
    TALENT: '遭受暴擊率降低50%，進入戰鬥前，如果自身生命在50%以上，對敵軍造成一次傷害，傷害數值為英雄防禦的2倍。',
    JOB1:'女武神', ARMY1: '僧侶',
    JOB1DISCA:'受到攻擊進入戰鬥時，遭受魔法傷害降低10%。',
    JOB1DISCB:'受到攻擊時，士兵傷害提升20%。',
    JOB2:'皇家衛士', ARMY2: '槍兵',
    JOB2DISCA:'受到攻擊進入戰鬥時，遭受物理傷害降低10%。',
    JOB2DISCB:'主動攻擊時，士兵傷害提升20%。'
},{
    NAME: '巴爾加斯', JOBS: 2,
    SOLDHPPLUS:0.4, SOLDATKPLUS:0.1, SOLDDEFPLUS:0.35, SOLDMDEFPLUS:0.1,
    TALENT: '部隊血量越高時，減少遭受物理傷害越多，最多減少30%，並且在遭受致命傷害時不會死亡，之後生命值恢復30%，該效果每場戰鬥最多觸發1次。',
    JOB1:'勇者', ARMY1: '劍兵',
    JOB1DISCA:'主動攻擊進入戰鬥時，部隊遭受傷害降低10%。',
    JOB1DISCB:'主動攻擊進入戰鬥時，傷害提升10%。',
    JOB2:'皇家衛士', ARMY2: '槍兵',
    JOB2DISCA:'受到具有“弱化效果”的部隊攻擊進入戰鬥時，遭受傷害降低10%。',
    JOB2DISCB:'受到近戰攻擊進入戰鬥時，傷害提升10%。'
},{
    NAME: '塞蕾娜', JOBS: 2,
    SOLDHPPLUS:0.2, SOLDATKPLUS:0.15, SOLDDEFPLUS:0.35, SOLDMDEFPLUS:0.25,
    TALENT: '部隊生命60%及以上時，遭受所有傷害降低30%。替3格以內失去士兵的友軍承受所有攻擊。',
    JOB1:'盾劍統帥', ARMY1: '槍兵',
    JOB1DISCA:'主動攻擊進入戰鬥時，部隊遭受傷害降低10%。',
    JOB1DISCB:'主動攻擊進入戰鬥時，傷害提升10%。',
    JOB2:'皇家衛士', ARMY2: '劍兵',
    JOB2DISCA:'遭受範圍傷害降低10%。',
    JOB2DISCB:'受到攻擊進入戰鬥時，傷害提升10%。'
},{
    NAME: '娜姆', JOBS: 2,
    SOLDHPPLUS:0.1, SOLDATKPLUS:0.4, SOLDDEFPLUS:0.35, SOLDMDEFPLUS:0.1,
    TALENT: '主動攻擊進入戰鬥時，攻擊提升15%，並使得對方的移動力降低3，且無法進行護衛，持續1回合。（[觸發冷卻]該效果需要間隔1回合才可以再次觸發。）',
    JOB1:'遊俠', ARMY1: '弓兵',
    JOB1DISCA:'受到具有“弱化效果”的部隊攻擊進入戰鬥時，遭受傷害降低10%。',
    JOB1DISCB:'部隊血量高於80%時，暴擊傷害提升10%。',
    JOB2:'聖天馬統帥', ARMY2: '飛兵',
    JOB2DISCA:'受到遠程攻擊時，遭受物理傷害降低10%。',
    JOB2DISCB:'受到近戰攻擊進入戰鬥時，傷害提升10%。'
},{
    NAME: '法娜', JOBS: 2,
    SOLDHPPLUS:0.15, SOLDATKPLUS:0.2, SOLDDEFPLUS:0.35, SOLDMDEFPLUS:0.25,
    TALENT: '行動結束時，為周圍2格所有友軍附加效果:範圍技能傷害提升20%，持續1回合。',
    JOB1:'遊俠', ARMY1: '弓兵',
    JOB1DISCA:'遭受範圍傷害降低10%。',
    JOB1DISCB:'部隊血量100%時，傷害提高10%。',
    JOB2:'龍騎統帥', ARMY2: '飛兵',
    JOB2DISCA:'受到具有“弱化效果”的部隊攻擊進入戰鬥時，遭受傷害降低10%。',
    JOB2DISCB:'本部隊有5個以上的強化狀態時，戰鬥中傷害提升10%。'
},{
    NAME: '奧利維爾', JOBS: 2,
    SOLDHPPLUS:0.15, SOLDATKPLUS:0.30, SOLDDEFPLUS:0.35, SOLDMDEFPLUS:0.15,
    TALENT: '部隊生命100%時，攻擊提升30%。行動結束時，令周圍3格的5名其他友軍“遭受傷害”降低10%，持續2回合。',
    JOB1:'帝國皇子', ARMY1: '弓兵',
    JOB1DISCA:'被血量百分比高於自身的部隊攻擊時，進入戰鬥後遭受傷害降低10%。',
    JOB1DISCB:'主動攻擊血量百分比高於自身的部隊時，進入戰鬥後傷害提升10%。',
    JOB2:'吟遊詩人', ARMY2: '弓兵',
    JOB2DISCA:'受到攻擊進入戰鬥時，遭受魔法傷害降低10%。',
    JOB2DISCB:'受到遠程攻擊進入戰鬥時，傷害提升10%。'
},{
    NAME: '克麗絲', JOBS: 2,
    SOLDHPPLUS:0.1, SOLDATKPLUS:0.1, SOLDDEFPLUS:0.35, SOLDMDEFPLUS:0.4,
    TALENT: '造成傷害提升20%。行動結束時，為周圍2格的4名其他友軍，驅散1個弱化狀態，並隨機附加1個強化狀態。',
    JOB1:'女武神', ARMY1: '僧侶',
    JOB1DISCA:'受到遠程攻擊時，遭受魔法傷害降低10%。',
    JOB1DISCB:'範圍傷害提升10%。',
    JOB2:'公主', ARMY2: '僧侶',
    JOB2DISCA:'受到近戰攻擊時，遭受物理傷害降低10%。',
    JOB2DISCB:'主動攻擊進入戰鬥時，傷害提升10%。'
},{
    NAME: '克蘿賽', JOBS: 2,
    SOLDHPPLUS:0.1, SOLDATKPLUS:0.25, SOLDDEFPLUS:0.35, SOLDMDEFPLUS:0.25,
    TALENT: '治療效果提升30%。行動結束時，令周圍2格的4名其他友軍隨機附加1個額外的免疫效果，持續2回合',
    JOB1:'女武神', ARMY1: '僧侶',
    JOB1DISCA:'受到攻擊進入戰鬥時，遭受物理傷害降低10%。',
    JOB1DISCB:'範圍傷害提升10%。',
    JOB2:'利貝爾女王', ARMY2: '法師',
    JOB2DISCA:'受到攻擊進入戰鬥時，遭受魔法傷害降低10%。',
    JOB2DISCB:'主動攻擊進入戰鬥時，傷害提升10%。'
},{
    NAME: '帕恩', JOBS: 2,
    SOLDHPPLUS:0.15, SOLDATKPLUS:0.35, SOLDDEFPLUS:0.3, SOLDMDEFPLUS:0.15,
    TALENT: '受到傷害後，獲得效果[猛進]：攻擊、技巧+3%，移動力+1，持續2回合，可累積，最高可以累積3個。當自身擁有移動力提升的強化效果時造成的傷害提升20%。',
    JOB1:'英雄', ARMY1: '劍兵',
    JOB1DISCA:'攻擊前每移動1格，部隊遭受傷害降低3%。（上限15%）',
    JOB1DISCB:'與血量百分比低於自身的部隊交戰時，進入戰鬥後傷害提升10%。',
    JOB2:'突擊騎士', ARMY2: '騎兵',
    JOB2DISCA:'遭受範圍傷害降低10%。',
    JOB2DISCB:'部隊血量低於70%時，進入戰鬥後傷害提升10%。'
},{
    NAME: '阿爾弗雷德', JOBS: 2,
    SOLDHPPLUS:0.2, SOLDATKPLUS:0.3, SOLDDEFPLUS:0.35, SOLDMDEFPLUS:0.1,
    TALENT: '每移動1格，除生命以外全屬性提升5%。（最高25%）通過“水”、“沼澤”、“激流”時，可以獲得5格免除移動力降低的機會。',
    JOB1:'劍士統帥', ARMY1: '劍兵',
    JOB1DISCA:'遭受範圍傷害降低10%。',
    JOB1DISCB:'主動攻擊血量百分比低於自身的部隊時，進入戰鬥後傷害提升10%。',
    JOB2:'海騎統帥', ARMY2: '水兵',
    JOB2DISCA:'在水中時，遭受魔法傷害降低10%。',
    JOB2DISCB:'在水中時，暴擊率提升10%。'
},{
    NAME: '霧風', JOBS: 2,
    SOLDHPPLUS:0.35, SOLDATKPLUS:0.4, SOLDDEFPLUS:0.1, SOLDMDEFPLUS:0.1,
    TALENT: '暴擊率提升15%。進入戰鬥時如果觸發暴擊，戰後恢復傷害30%的生命。同時100%概率使技能冷卻時間減少1回合。',
    JOB1:'影', ARMY1: '刺客',
    JOB1DISCA:'受到攻擊進入戰鬥時，遭受魔法傷害降低10%。',
    JOB1DISCB:'部隊血量低於70%時，暴擊傷害提升10%。',
    JOB2:'劍聖', ARMY2: '劍聖',
    JOB2DISCA:'部隊血量高於80%時，進入戰鬥後遭受傷害降低10%。',
    JOB2DISCB:'部隊血量高於80%時，暴擊傷害提升10%。'
},{
    NAME: '奧利佛', JOBS: 2,
    SOLDHPPLUS:0.2, SOLDATKPLUS:0.3, SOLDDEFPLUS:0.25, SOLDMDEFPLUS:0.2,
    TALENT: '除生命以外全屬性提升25%，自身周圍2格每有1名友軍，全屬性降低5%（最多降低25%）。進入戰鬥前，如果自身技巧高於敵軍，會偷取1個強化狀態。',
    JOB1:'大統帥', ARMY1: '刺客',
    JOB1DISCA:'遭受範圍傷害降低10%。',
    JOB1DISCB:'部隊血量100%時，暴擊率提升10%。',
    JOB2:'閃擊統帥', ARMY2: '刺客',
    JOB2DISCA:'部隊血量100%時，遭受暴擊率降低10%。',
    JOB2DISCB:'本部隊有6個以上的強化狀態時，戰鬥中傷害提升10%。'
},{
    NAME: '銀狼', JOBS: 2,
    SOLDHPPLUS:0.4, SOLDATKPLUS:0.35, SOLDDEFPLUS:0.1, SOLDMDEFPLUS:0.1,
    TALENT: '身上每有一個強化狀態，則攻防提升7%，最高可以提升21%。如果發生了暴擊，戰鬥後偷取對方身上的2個強化狀態。',
    JOB1:'影', ARMY1: '刺客',
    JOB1DISCA:'動攻擊進入戰鬥時，部隊遭受傷害降低10%。',
    JOB1DISCB:'受到攻擊進入戰鬥時，暴擊傷害提升10%。',
    JOB2:'遊俠', ARMY2: '遊俠',
    JOB2DISCA:'受到攻擊進入戰鬥時，遭受物理傷害降低10%。',
    JOB2DISCB:'部隊血量高於80%時，暴擊傷害提升10%。'
},{
    NAME: '比蘿蒂絲', JOBS: 2,
    SOLDHPPLUS:0.2, SOLDATKPLUS:0.3, SOLDDEFPLUS:0.1, SOLDMDEFPLUS:0.35,
    TALENT: '部隊生命低於100%時，攻擊、技巧提升30%。進入戰鬥前，如果自身技巧高於敵軍，會給敵軍附加1個強力弱化狀態。',
    JOB1:'遊俠', ARMY1: '弓兵',
    JOB1DISCA:'本部隊有5個以上的強化狀態時，戰鬥中遭受傷害降低10%。',
    JOB1DISCB:'本部隊有5個以上的強化狀態時，戰鬥中傷害提升10%。',
    JOB2:'黑妖刺客', ARMY2: '刺客',
    JOB2DISCA:'部隊血量低於70%時，進入戰鬥後遭受傷害降低10%。',
    JOB2DISCB:'部隊血量高於80%時，暴擊率提升10%。'
},{
    NAME: '索尼婭', JOBS: 2,
    SOLDHPPLUS:0.35, SOLDATKPLUS:0.4, SOLDDEFPLUS:0.1, SOLDMDEFPLUS:0.1,
    TALENT: '每次擊殺一個敵軍，可以再次移動3格。同時自身攻擊、智力、防禦、魔防提升20%，持續3回合，最高可以累積2層。',
    JOB1:'獨角獸統帥', ARMY1: '法師',
    JOB1DISCA:'受到攻擊進入戰鬥時，遭受魔法傷害降低10%。',
    JOB1DISCB:'部隊血量高於80%時，傷害提升10%。',
    JOB2:'強襲統帥', ARMY2: '騎兵',
    JOB2DISCA:'攻擊前每移動1格，部隊遭受傷害降低3%。（上限15%）',
    JOB2DISCB:'攻擊前每移動1格，傷害提升3%。（上限15%）'
},{
    NAME: '艾馬林克', JOBS: 2,
    SOLDHPPLUS:0.35, SOLDATKPLUS:0.1, SOLDDEFPLUS:0.35, SOLDMDEFPLUS:0.1,
    TALENT: '主動攻擊時，攻擊提升20%，被攻擊時，遭受傷害降低20%。周圍2格內所有敵軍移動力降低2，且無法進行護衛。',
    JOB1:'大元帥', ARMY1: '槍兵',
    JOB1DISCA:'受到攻擊進入戰鬥時，遭受物理傷害降低10%。',
    JOB1DISCB:'部隊血量高於80%時，傷害提升10%。',
    JOB2:'騎士統帥', ARMY2: '騎兵',
    JOB2DISCA:'主動攻擊進入戰鬥時，部隊遭受傷害降低10%。',
    JOB2DISCB:'部隊血量低於70%時，傷害提升10%。'
},{
    NAME: '亞爾緹娜', JOBS: 2,
    SOLDHPPLUS:0.2, SOLDATKPLUS:0.3, SOLDDEFPLUS:0.15, SOLDMDEFPLUS:0.3,
    TALENT: '行動結束時，令周圍4格內的3名敵軍部隊的防禦和魔防中數值較高的一項屬性降低10%，持續1回合。並令周圍3格內的4名其他友軍部隊的防禦和魔防中數值較低的一項屬性提升10%，持續1回合。',
    JOB1:'巫師', ARMY1: '法師',
    JOB1DISCA:'主動攻擊進入戰鬥時，部隊遭受傷害降低10%。',
    JOB1DISCB:'主動攻擊血量百分比低於自身的部隊時，進入戰鬥後傷害提升10%。',
    JOB2:'帝國密使', ARMY2: '飛兵',
    JOB2DISCA:'攻擊前每移動1格，部隊遭受傷害降低3%。（上限15%）',
    JOB2DISCB:'主動攻擊進入戰鬥時，士兵傷害提升20%。'
},{
    NAME: '伊梅爾達', JOBS: 2,
    SOLDHPPLUS:0.35, SOLDATKPLUS:0.4, SOLDDEFPLUS:0.1, SOLDMDEFPLUS:0.1,
    TALENT: '本部隊造成傷害提升20%。行動結束時，使周圍2格4個友軍獲得[鐵腕]:主動攻擊進入戰鬥時，英雄傷害提升20%，戰後損失10%生命。',
    JOB1:'神使', ARMY1: '僧侶',
    JOB1DISCA:'受到近戰攻擊時，遭受物理傷害降低10%。',
    JOB1DISCB:'主動攻擊進入戰鬥時，傷害提升10%。',
    JOB2:'女王', ARMY2: '法師',
    JOB2DISCA:'遭受範圍傷害降低10%。',
    JOB2DISCB:'範圍傷害提升10%。'
},{
    NAME: '莉法妮', JOBS: 2,
    SOLDHPPLUS:0.1, SOLDATKPLUS:0.4, SOLDDEFPLUS:0.1, SOLDMDEFPLUS:0.35,
    TALENT: '行動結束時，為自身3格範圍內2個敵軍附加“魔法爆彈”:在行動結束後，受到一次施法者智力的4倍的[固定傷害]。',
    JOB1:'隱士', ARMY1: '法師',
    JOB1DISCA:'受到具有“弱化效果”的部隊攻擊進入戰鬥時，遭受傷害降低10%。',
    JOB1DISCB:'與具有“弱化效果”的部隊戰鬥時，傷害提升10%。',
    JOB2:'巫師', ARMY2: '法師',
    JOB2DISCA:'部隊血量100%時，遭受傷害降低10%。',
    JOB2DISCB:'部隊血量100%時，傷害提高10%。'
},{
    NAME: '安潔莉卡', JOBS: 1,
    SOLDHPPLUS:0.35, SOLDATKPLUS:0.1, SOLDDEFPLUS:0.35, SOLDMDEFPLUS:0.15,
    TALENT: '進入戰鬥前，自身攜帶的士兵兵種將會變成敵軍士兵的兵種。行動結束時，恢復自身士兵100%的生命。',
    JOB1:'創造家', ARMY1: '法師',
    JOB1DISCA:'部隊血量高於80%時，遭受暴擊率降低10%。',
    JOB1DISCB:'受到攻擊時，士兵傷害提升20%。',

},{
    NAME: '埃格貝爾特', JOBS: 2,
    SOLDHPPLUS:0.35, SOLDATKPLUS:0.1, SOLDDEFPLUS:0.15, SOLDMDEFPLUS:0.35,
    TALENT: '主動對敵軍造成傷害後，額外造成一次[固定傷害]，傷害值為智力的2倍。',
    JOB1:'黑暗統帥', ARMY1: '法師',
    JOB1DISCA:'受到具有“弱化效果”的部隊攻擊進入戰鬥時，遭受傷害降低10%。',
    JOB1DISCB:'受到遠程攻擊進入戰鬥時，傷害提升10%。',
    JOB2:'隱士', ARMY2: '法師',
    JOB2DISCA:'部隊血量低於70%時，遭受傷害降低10%。',
    JOB2DISCB:'主動攻擊血量百分比高於自身的部隊時，進入戰鬥後傷害提升10%。'
},{
    NAME: '海恩', JOBS: 2,
    SOLDHPPLUS:0.1, SOLDATKPLUS:0.4, SOLDDEFPLUS:0.1, SOLDMDEFPLUS:0.35,
    TALENT: '每次行動結束時，智力提升6%，持續5回合，最高可以累積4層。',
    JOB1:'聖者', ARMY1: '僧侶',
    JOB1DISCA:'部隊血量100%時，遭受傷害降低10%。',
    JOB1DISCB:'部隊血量100%時，傷害提高10%。',
    JOB2:'巫師', ARMY2: '',
    JOB2DISCA:'本部隊有7個以上的強化狀態時，戰鬥中遭受傷害降低10%。',
    JOB2DISCB:'本部隊有7個以上的強化狀態時，進入戰鬥後傷害提升10%。'
},{
    NAME: '蘭斯', JOBS: 2,
    SOLDHPPLUS:0.35, SOLDATKPLUS:0.15, SOLDDEFPLUS:0.35, SOLDMDEFPLUS:0.1,
    TALENT: '對戰“飛兵”與“騎兵”部隊時，攻擊和防禦提升30%。',
    JOB1:'皇家騎士', ARMY1: '騎兵',
    JOB1DISCA:'受到攻擊進入戰鬥時，遭受魔法傷害降低10%。',
    JOB1DISCB:'部隊血量低於70%時，傷害提升10%。',
    JOB2:'龍騎統帥', ARMY2: '飛兵',
    JOB2DISCA:'部隊血量100%時，遭受傷害降低10%。',
    JOB2DISCB:'部隊血量100%時，傷害提高10%。'
},{
    NAME: '', JOBS: 2,
    SOLDHPPLUS:0.0, SOLDATKPLUS:0.0, SOLDDEFPLUS:0.0, SOLDMDEFPLUS:0.0,
    TALENT: '',
    JOB1:'', ARMY1: '',
    JOB1DISCA:'',
    JOB1DISCB:'',
    JOB2:'', ARMY2: '',
    JOB2DISCA:'',
    JOB2DISCB:''
},{
    NAME: '', JOBS: 2,
    SOLDHPPLUS:0.0, SOLDATKPLUS:0.0, SOLDDEFPLUS:0.0, SOLDMDEFPLUS:0.0,
    TALENT: '',
    JOB1:'', ARMY1: '',
    JOB1DISCA:'',
    JOB1DISCB:'',
    JOB2:'', ARMY2: '',
    JOB2DISCA:'',
    JOB2DISCB:''
},{
    NAME: '', JOBS: 2,
    SOLDHPPLUS:0.0, SOLDATKPLUS:0.0, SOLDDEFPLUS:0.0, SOLDMDEFPLUS:0.0,
    TALENT: '',
    JOB1:'', ARMY1: '',
    JOB1DISCA:'',
    JOB1DISCB:'',
    JOB2:'', ARMY2: '',
    JOB2DISCA:'',
    JOB2DISCB:''
},{
    NAME: '', JOBS: 2,
    SOLDHPPLUS:0.0, SOLDATKPLUS:0.0, SOLDDEFPLUS:0.0, SOLDMDEFPLUS:0.0,
    TALENT: '',
    JOB1:'', ARMY1: '',
    JOB1DISCA:'',
    JOB1DISCB:'',
    JOB2:'', ARMY2: '',
    JOB2DISCA:'',
    JOB2DISCB:''
},{
    NAME: '', JOBS: 2,
    SOLDHPPLUS:0.0, SOLDATKPLUS:0.0, SOLDDEFPLUS:0.0, SOLDMDEFPLUS:0.0,
    TALENT: '',
    JOB1:'', ARMY1: '',
    JOB1DISCA:'',
    JOB1DISCB:'',
    JOB2:'', ARMY2: '',
    JOB2DISCA:'',
    JOB2DISCB:''
},{
    NAME: '', JOBS: 2,
    SOLDHPPLUS:0.0, SOLDATKPLUS:0.0, SOLDDEFPLUS:0.0, SOLDMDEFPLUS:0.0,
    TALENT: '',
    JOB1:'', ARMY1: '',
    JOB1DISCA:'',
    JOB1DISCB:'',
    JOB2:'', ARMY2: '',
    JOB2DISCA:'',
    JOB2DISCB:''
},{
    NAME: '', JOBS: 2,
    SOLDHPPLUS:0.0, SOLDATKPLUS:0.0, SOLDDEFPLUS:0.0, SOLDMDEFPLUS:0.0,
    TALENT: '',
    JOB1:'', ARMY1: '',
    JOB1DISCA:'',
    JOB1DISCB:'',
    JOB2:'', ARMY2: '',
    JOB2DISCA:'',
    JOB2DISCB:''
},{
    NAME: '', JOBS: 2,
    SOLDHPPLUS:0.0, SOLDATKPLUS:0.0, SOLDDEFPLUS:0.0, SOLDMDEFPLUS:0.0,
    TALENT: '',
    JOB1:'', ARMY1: '',
    JOB1DISCA:'',
    JOB1DISCB:'',
    JOB2:'', ARMY2: '',
    JOB2DISCA:'',
    JOB2DISCB:''
},{
    NAME: '', JOBS: 2,
    SOLDHPPLUS:0.0, SOLDATKPLUS:0.0, SOLDDEFPLUS:0.0, SOLDMDEFPLUS:0.0,
    TALENT: '',
    JOB1:'', ARMY1: '',
    JOB1DISCA:'',
    JOB1DISCB:'',
    JOB2:'', ARMY2: '',
    JOB2DISCA:'',
    JOB2DISCB:''
},{
    NAME: '', JOBS: 2,
    SOLDHPPLUS:0.0, SOLDATKPLUS:0.0, SOLDDEFPLUS:0.0, SOLDMDEFPLUS:0.0,
    TALENT: '',
    JOB1:'', ARMY1: '',
    JOB1DISCA:'',
    JOB1DISCB:'',
    JOB2:'', ARMY2: '',
    JOB2DISCA:'',
    JOB2DISCB:''
},{
    NAME: '', JOBS: 2,
    SOLDHPPLUS:0.0, SOLDATKPLUS:0.0, SOLDDEFPLUS:0.0, SOLDMDEFPLUS:0.0,
    TALENT: '',
    JOB1:'', ARMY1: '',
    JOB1DISCA:'',
    JOB1DISCB:'',
    JOB2:'', ARMY2: '',
    JOB2DISCA:'',
    JOB2DISCB:''
},{
    NAME: '', JOBS: 2,
    SOLDHPPLUS:0.0, SOLDATKPLUS:0.0, SOLDDEFPLUS:0.0, SOLDMDEFPLUS:0.0,
    TALENT: '',
    JOB1:'', ARMY1: '',
    JOB1DISCA:'',
    JOB1DISCB:'',
    JOB2:'', ARMY2: '',
    JOB2DISCA:'',
    JOB2DISCB:''
},{
    NAME: '', JOBS: 2,
    SOLDHPPLUS:0.0, SOLDATKPLUS:0.0, SOLDDEFPLUS:0.0, SOLDMDEFPLUS:0.0,
    TALENT: '',
    JOB1:'', ARMY1: '',
    JOB1DISCA:'',
    JOB1DISCB:'',
    JOB2:'', ARMY2: '',
    JOB2DISCA:'',
    JOB2DISCB:''
},{
    NAME: '', JOBS: 2,
    SOLDHPPLUS:0.0, SOLDATKPLUS:0.0, SOLDDEFPLUS:0.0, SOLDMDEFPLUS:0.0,
    TALENT: '',
    JOB1:'', ARMY1: '',
    JOB1DISCA:'',
    JOB1DISCB:'',
    JOB2:'', ARMY2: '',
    JOB2DISCA:'',
    JOB2DISCB:''
},{
    NAME: '', JOBS: 2,
    SOLDHPPLUS:0.0, SOLDATKPLUS:0.0, SOLDDEFPLUS:0.0, SOLDMDEFPLUS:0.0,
    TALENT: '',
    JOB1:'', ARMY1: '',
    JOB1DISCA:'',
    JOB1DISCB:'',
    JOB2:'', ARMY2: '',
    JOB2DISCA:'',
    JOB2DISCB:''
},{
    NAME: '', JOBS: 2,
    SOLDHPPLUS:0.0, SOLDATKPLUS:0.0, SOLDDEFPLUS:0.0, SOLDMDEFPLUS:0.0,
    TALENT: '',
    JOB1:'', ARMY1: '',
    JOB1DISCA:'',
    JOB1DISCB:'',
    JOB2:'', ARMY2: '',
    JOB2DISCA:'',
    JOB2DISCB:''
},{
    NAME: '', JOBS: 2,
    SOLDHPPLUS:0.0, SOLDATKPLUS:0.0, SOLDDEFPLUS:0.0, SOLDMDEFPLUS:0.0,
    TALENT: '',
    JOB1:'', ARMY1: '',
    JOB1DISCA:'',
    JOB1DISCB:'',
    JOB2:'', ARMY2: '',
    JOB2DISCA:'',
    JOB2DISCB:''
},{
    NAME: '', JOBS: 2,
    SOLDHPPLUS:0.0, SOLDATKPLUS:0.0, SOLDDEFPLUS:0.0, SOLDMDEFPLUS:0.0,
    TALENT: '',
    JOB1:'', ARMY1: '',
    JOB1DISCA:'',
    JOB1DISCB:'',
    JOB2:'', ARMY2: '',
    JOB2DISCA:'',
    JOB2DISCB:''
},{
    NAME: '', JOBS: 2,
    SOLDHPPLUS:0.0, SOLDATKPLUS:0.0, SOLDDEFPLUS:0.0, SOLDMDEFPLUS:0.0,
    TALENT: '',
    JOB1:'', ARMY1: '',
    JOB1DISCA:'',
    JOB1DISCB:'',
    JOB2:'', ARMY2: '',
    JOB2DISCA:'',
    JOB2DISCB:''
}];
