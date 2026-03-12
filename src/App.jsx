import { useState, useMemo, useCallback, useEffect } from "react";

// ===== COMPLETE DATA FROM NOTEBOOKLM COURSE =====

const ELEMENTS = {
  fire: { name: "אש", nameEn: "Fire", color: "#DC2626", bg: "#FEF2F2", border: "#FECACA", icon: "🔥", organ: "לב / פריקרד", organEn: "Heart/PC" },
  earth: { name: "אדמה", nameEn: "Earth", color: "#B45309", bg: "#FFFBEB", border: "#FDE68A", icon: "🌍", organ: "טחול / קיבה", organEn: "SP/ST" },
  wood: { name: "עץ", nameEn: "Wood", color: "#15803D", bg: "#F0FDF4", border: "#BBF7D0", icon: "🌿", organ: "כבד / מרה", organEn: "LV/GB" },
  metal: { name: "מתכת", nameEn: "Metal", color: "#6B7280", bg: "#F9FAFB", border: "#E5E7EB", icon: "⚪", organ: "ריאות / מעי גס", organEn: "LU/LI" },
  water: { name: "מים", nameEn: "Water", color: "#1D4ED8", bg: "#EFF6FF", border: "#BFDBFE", icon: "💧", organ: "כליות / שלפוחית", organEn: "KD/BL" },
};

const FORMULAS = [
  // FIRE
  { id:"f1", name:"Dao Chi San", nameHe:"דאו צ'י סאן", element:"fire", tree:"Qi/SI", pattern:"Heart/SI Fire", indications:"עצבנות, אפטות בפה, שתן כואב", heatCold:"heat" },
  { id:"f2", name:"Dan Shen Yin", nameHe:"דאן שן יין", element:"fire", tree:"Xue/Stasis", pattern:"Mid/Upper Jiao Blood Stasis", indications:"כאב חזה ואפיגסטרי", heatCold:"neutral" },
  { id:"f3", name:"Bai Hu Tang", nameHe:"באי הו טאנג", element:"fire", tree:"Qi", pattern:"Yang Ming Qi-level Heat", indications:"4 הגדולים: חום גבוה, צמא, הזעה, דופק מהיר. משך: 1-3 שבועות", heatCold:"heat" },
  { id:"f4", name:"Huang Lian E Jiao Tang", nameHe:"הואנג ליין א ג'יאו טאנג", element:"fire", tree:"Huang Lian", pattern:"Heart Fire + Kidney Yin Xu", indications:"נדודי שינה חמורים, חומצת קיבה", heatCold:"heat" },
  { id:"f5", name:"Xue Fu Zhu Yu Tang", nameHe:"שואה פו ז'ו יו טאנג", element:"fire", tree:"Tao Ren", pattern:"Blood Stasis in Chest", indications:"כאבי ראש כרוניים, כאב חזה", heatCold:"neutral" },
  { id:"f6", name:"Tian Wang Bu Xin Dan", nameHe:"טיאן וואנג בו שין דאן", element:"fire", tree:"Xue", pattern:"Heart & Kidney Yin Xu", indications:"חרדה, הזעות לילה", heatCold:"heat" },
  { id:"f7", name:"Zhi Gan Cao Tang", nameHe:"ז'י גאן צאו טאנג", element:"fire", tree:"Qi", pattern:"Heart Qi & Blood Xu", indications:"דפיקות לב, דופק לא סדיר", heatCold:"cold" },
  { id:"f8", name:"An Shen Bu Xin Pian", nameHe:"אן שן בו שין פיאן", element:"fire", tree:"Xue", pattern:"Chronic Insomnia (Xu)", indications:"נדודי שינה כרוניים מחסר", heatCold:"cold" },
  { id:"f8b", name:"Te Xiao Zao Ren An Mian Pian", nameHe:"טה שיאו זאו רן אן מיאן פיאן", element:"fire", tree:"Xue", pattern:"Chronic Fever/Xu Insomnia", indications:"נדודי שינה כרוניים עם חום מחסר", heatCold:"heat" },
  { id:"f8c", name:"Ding Zhi Wan", nameHe:"דינג ז'י וואן", element:"fire", tree:"Qi", pattern:"SP & Heart Qi Xu / Spirit", indications:"דיכאון, קושי בקבלת החלטות", heatCold:"cold" },
  // EARTH
  { id:"f9", name:"Si Jun Zi Tang", nameHe:"סי ג'ון ז'י טאנג", element:"earth", tree:"Ren Shen", pattern:"Spleen Qi Xu", indications:"חולשה, לשון חיוורת", heatCold:"cold" },
  { id:"f10", name:"Liu Jun Zi Tang", nameHe:"ליו ג'ון ז'י טאנג", element:"earth", tree:"Ren Shen", pattern:"SP Qi Xu + Dampness", indications:"קשיי עיכול, תשוקה למתוק", heatCold:"cold" },
  { id:"f11", name:"Xiang Sha Liu Jun Zi Tang", nameHe:"שיאנג שא ליו ג'ון ז'י טאנג", element:"earth", tree:"Ren Shen", pattern:"SP Xu + Rebellious Qi", indications:"בחילות, מלאות אחרי אכילה", heatCold:"cold" },
  { id:"f12", name:"Chai Shao Liu Jun Zi Tang", nameHe:"צ'אי שאו ליו ג'ון ז'י טאנג", element:"earth", tree:"Ren Shen", pattern:"LV Qi Yu overriding SP Xu", indications:"כבד פוגע בטחול", heatCold:"neutral" },
  { id:"f13", name:"Shen Ling Bai Zhu San", nameHe:"שן לינג באי ג'ו סאן", element:"earth", tree:"Ren Shen", pattern:"SP Xu + Watery Diarrhea", indications:"שלשול מימי, הפרשות כרוניות", heatCold:"cold" },
  { id:"f14", name:"Li Zhong Wan", nameHe:"לי ג'ונג וואן", element:"earth", tree:"Ren Shen", pattern:"Internal Cold", indications:"קולות מים בבטן, מזון לא מעוכל בצואה", heatCold:"cold" },
  { id:"f15", name:"Bu Zhong Yi Qi Tang", nameHe:"בו ג'ונג יי צ'י טאנג", element:"earth", tree:"Qi", pattern:"SP Qi Sinking", indications:"צניחה, טחורים, עייפות כרונית", heatCold:"cold" },
  { id:"f16", name:"Er Chen Tang", nameHe:"אר צ'ן טאנג", element:"earth", tree:"Ban Xia", pattern:"Damp-Phlegm", indications:"בחילות, כיח לבן", heatCold:"cold" },
  { id:"f17", name:"Ban Xia Xie Xin Tang", nameHe:"באן שיה שיה שין טאנג", element:"earth", tree:"Ban Xia", pattern:"Mixed Heat & Cold in ST", indications:"קשיחות אפיגסטרית, גזים", heatCold:"neutral" },
  { id:"f18", name:"Ban Xia Hou Po Tang", nameHe:"באן שיה הו פו טאנג", element:"earth", tree:"Ban Xia", pattern:"Plum-Pit Qi", indications:"תחושת חנק בחזה וגרון", heatCold:"cold" },
  { id:"f19", name:"Ban Xia Bai Zhu Tian Ma Tang", nameHe:"באן שיה באי ג'ו טיאן מא טאנג", element:"earth", tree:"Ban Xia", pattern:"Phlegm + Liver Wind", indications:"צוואר קשיח, סחרחורת", heatCold:"neutral" },
  { id:"f20", name:"Ping Wei San", nameHe:"פינג ווי סאן", element:"earth", tree:"Qi", pattern:"Damp Accumulation", indications:"נפיחות בטנית, טעם מר", heatCold:"cold" },
  { id:"f21", name:"Yue Ju Wan", nameHe:"יואה ג'ו וואן", element:"earth", tree:"Qi", pattern:"Five Qi Stagnations", indications:"גזים בטניים, נפיחות", heatCold:"neutral" },
  { id:"f22", name:"Gan Mai Da Zao Tang", nameHe:"גאן מאי דא זאו טאנג", element:"earth", tree:"Qi", pattern:"Emotional Instability", indications:"היסטריה, שינה חסרת מנוחה. מתאים לילדים ומטופלים חלשים", heatCold:"neutral" },
  { id:"f23", name:"Xiao Jian Zhong Tang", nameHe:"שיאו ג'יאן ג'ונג טאנג", element:"earth", tree:"Gui Zhi", pattern:"SP/ST Spasms", indications:"כאב בטן שמשתפר בלחץ", heatCold:"cold" },
  { id:"f23b", name:"Huo Xiang Zheng Qi San", nameHe:"הואו שיאנג ז'נג צ'י סאן", element:"earth", tree:"Qi", pattern:"Damp-Phlegm / Gastric Flu", indications:"בחילות ושלשול (שפעת קיבה)", heatCold:"cold" },
  { id:"f23c", name:"Xuan Fu Dai Zhi Shi Tang", nameHe:"שואן פו דאי ז'י שי טאנג", element:"earth", tree:"Qi", pattern:"Rebellious ST Qi", indications:"שיהוקים, גיהוקים", heatCold:"neutral" },
  { id:"f23d", name:"Ju Pi Zhu Ru Tang", nameHe:"ג'ו פי ג'ו רו טאנג", element:"earth", tree:"Qi", pattern:"Rebellious ST Heat", indications:"שיהוקים והקאות מחום", heatCold:"heat" },
  { id:"f23e", name:"Pai Qi Yin", nameHe:"פאי צ'י יין", element:"earth", tree:"Qi", pattern:"Abdominal Gas", indications:"גזים והנפחה בטנית", heatCold:"neutral" },
  // WOOD
  { id:"f24", name:"Xiao Yao San", nameHe:"שיאו יאו סאן", element:"wood", tree:"Chai Hu", pattern:"LV Qi Yu + Qi/Blood Xu", indications:"PMS, שינויי מצב רוח, מתח בשדיים", heatCold:"neutral" },
  { id:"f25", name:"Jia Wei Xiao Yao Wan", nameHe:"ג'יה ווי שיאו יאו וואן", element:"wood", tree:"Chai Hu", pattern:"LV Qi Yu + Heat", indications:"עצבנות, תחושת חום", heatCold:"heat" },
  { id:"f26", name:"Xiao Chai Hu Tang", nameHe:"שיאו צ'אי הו טאנג", element:"wood", tree:"Chai Hu", pattern:"Shao Yang Harmonizer", indications:"טעם מר, צמרמורות וחום לסירוגין", heatCold:"neutral" },
  { id:"f27", name:"Da Chai Hu Tang", nameHe:"דא צ'אי הו טאנג", element:"wood", tree:"Chai Hu", pattern:"LV Fire + Yang Ming Heat", indications:"עצבנות חזקה, לחץ דם גבוה", heatCold:"heat" },
  { id:"f28", name:"Chai Hu Shu Gan Wan", nameHe:"צ'אי הו שו גאן וואן", element:"wood", tree:"Chai Hu", pattern:"LV Qi/Blood Stagnation", indications:"כאב בטני פיזי", heatCold:"neutral" },
  { id:"f29", name:"Si Ni San", nameHe:"סי ני סאן", element:"wood", tree:"Chai Hu", pattern:"LV/ST Qi Regulation", indications:"אצבעות קרות מסטרס", heatCold:"neutral" },
  { id:"f30", name:"Chai Hu Jia Long Gu Mu Li Tang", nameHe:"צ'אי הו ג'יה לונג גו מו לי טאנג", element:"wood", tree:"Qi", pattern:"Stress/Nervous Tension", indications:"מתח בגוף העליון, אוטואימוני", heatCold:"neutral" },
  { id:"f31", name:"Long Dan Xie Gan Tang", nameHe:"לונג דאן שיה גאן טאנג", element:"wood", tree:"Qi", pattern:"LV/GB Fire + Damp-Heat", indications:"גירוד גניטלי, הפרשה צהובה", heatCold:"heat" },
  { id:"f32", name:"Si Wu Tang", nameHe:"סי וו טאנג", element:"wood", tree:"Xue", pattern:"LV Blood Xu", indications:"עור יבש, ראייה מטושטשת, ציפורניים דקות", heatCold:"cold" },
  { id:"f33", name:"Suan Zao Ren Tang", nameHe:"סואן זאו רן טאנג", element:"wood", tree:"Xue", pattern:"Insomnia from LV Blood Xu", indications:"נדודי שינה מחסר דם כבד", heatCold:"cold" },
  { id:"f34", name:"Bu Gan Tang", nameHe:"בו גאן טאנג", element:"wood", tree:"Xue", pattern:"LV Blood & Yin Xu", indications:"התכווצויות שרירים, עיניים יבשות", heatCold:"cold" },
  { id:"f35", name:"Tian Ma Gou Teng Yin", nameHe:"טיאן מא גו טנג יין", element:"wood", tree:"Xue", pattern:"LV Wind", indications:"יל\"ד, סחרחורת, רעד", heatCold:"heat" },
  { id:"f36", name:"Wu Zhu Yu Tang", nameHe:"וו ג'ו יו טאנג", element:"wood", tree:"Gui Zhi", pattern:"ST/LV Shi Cold", indications:"כאב מפשעתי, הקאות", heatCold:"cold" },
  { id:"f37", name:"Yin Chen Hao Tang", nameHe:"יין צ'ן האו טאנג", element:"wood", tree:"Qi", pattern:"Damp-Heat / LV Infections", indications:"צהבת, סקלרה צהובה", heatCold:"heat" },
  { id:"f37b", name:"Tian Tai Wu Yao San", nameHe:"טיאן טאי וו יאו סאן", element:"wood", tree:"Qi", pattern:"LV Meridian Cold", indications:"הרניה, כאב אשכים", heatCold:"cold" },
  { id:"f37c", name:"Ling Jiao Gou Teng Tang", nameHe:"לינג ג'יאו גו טנג טאנג", element:"wood", tree:"Xue", pattern:"Wind-Heat / Fever", indications:"כל מצבי רוח-חום מבוססי חום", heatCold:"heat" },
  { id:"f37d", name:"Wu Mei Wan", nameHe:"וו מיי וואן", element:"wood", tree:"Jue Yin", pattern:"Jue Yin — Extreme Yin-Yang Imbalance", indications:"חום למעלה קור למטה, צמא חזק, רעב ללא רצון לאכול", heatCold:"neutral" },
  { id:"f37e", name:"Dang Gui Si Ni Tang", nameHe:"דאנג גווי סי ני טאנג", element:"wood", tree:"Jue Yin", pattern:"Jue Yin Meridian Cold", indications:"אצבעות קפואות, דופק דק", heatCold:"cold" },
  // METAL
  { id:"f38", name:"Bu Fei Tang", nameHe:"בו פיי טאנג", element:"metal", tree:"Huang Qi", pattern:"Lung Qi Xu", indications:"שיעול כרוני, חיסון חלש", heatCold:"cold" },
  { id:"f39", name:"Yu Ping Feng San", nameHe:"יו פינג פנג סאן", element:"metal", tree:"Huang Qi", pattern:"Wei Qi Xu / Allergies", indications:"חיסון חלש, אלרגיות", heatCold:"cold" },
  { id:"f40", name:"Ma Xing Shi Gan Tang", nameHe:"מא שינג שי גאן טאנג", element:"metal", tree:"Qi", pattern:"Lung Heat + Wheezing", indications:"אסתמה, צמא", heatCold:"heat" },
  { id:"f41", name:"Ding Chuan Tang", nameHe:"דינג צ'ואן טאנג", element:"metal", tree:"Qi", pattern:"Asthma + Yellow Phlegm", indications:"אסתמה עם כיח צהוב", heatCold:"heat" },
  { id:"f42", name:"Su Zi Jiang Qi Tang", nameHe:"סו ז'י ג'יאנג צ'י טאנג", element:"metal", tree:"Qi", pattern:"Cold Phlegm Asthma", indications:"קוצר נשימה", heatCold:"cold" },
  { id:"f43", name:"Ge Gen Tang", nameHe:"גה גן טאנג", element:"metal", tree:"Gui Zhi", pattern:"Tai Yang / Throat & Ear", indications:"זיהומי גרון ואוזניים", heatCold:"cold" },
  { id:"f44", name:"Wu Wei Xiao Du Yin", nameHe:"וו ווי שיאו דו יין", element:"metal", tree:"Qi", pattern:"Toxic Heat / Deep Skin", indications:"דלקת עור עמוקה עם מוגלה", heatCold:"heat" },
  { id:"f45", name:"Cang Er Zi San", nameHe:"צאנג אר ז'י סאן", element:"metal", tree:"Qi", pattern:"Nasal Congestion / Tai Yang", indications:"גודש באף, סינוסיטיס", heatCold:"heat" },
  { id:"f45b", name:"Ma Huang Tang", nameHe:"מא הואנג טאנג", element:"metal", tree:"Gui Zhi", pattern:"Tai Yang Wind-Cold (no sweat)", indications:"צפצופים ללא הזעה", heatCold:"cold" },
  { id:"f45c", name:"Gui Zhi Tang", nameHe:"גווי ז'י טאנג", element:"metal", tree:"Gui Zhi", pattern:"Tai Yang Wind-Heat (sweating)", indications:"חום עם הזעה, חימום ג'יאו אמצעי", heatCold:"neutral" },
  { id:"f45d", name:"Chuan Xiong Cha Tiao San", nameHe:"צ'ואן שיונג צ'א טיאו סאן", element:"metal", tree:"Qi", pattern:"External Wind Headache", indications:"כאבי ראש וצמרמורות", heatCold:"cold" },
  { id:"f45e", name:"Bei Mu Gua Lou San", nameHe:"ביי מו גואה לואו סאן", element:"metal", tree:"Qi", pattern:"Lung Heat / Dryness", indications:"שיעול דביק", heatCold:"heat" },
  { id:"f45f", name:"Tuo Li Xiao Du Yin", nameHe:"טואו לי שיאו דו יין", element:"metal", tree:"Qi", pattern:"Systemic Infection", indications:"זיהומים מערכתיים, ריפוי פצעים", heatCold:"heat" },
  { id:"f45g", name:"Zhi Zi Chi Tang", nameHe:"ז'י ז'י צ'י טאנג", element:"metal", tree:"Qi", pattern:"Constrained Heat (Tai Yang)", indications:"חום כלוא בשכבת טאי יאנג", heatCold:"heat" },
  // WATER
  { id:"f46", name:"Liu Wei Di Huang Wan", nameHe:"ליו ווי די הואנג וואן", element:"water", tree:"Xue", pattern:"KD & LV Yin Xu", indications:"הזעות לילה, כאב גב תחתון. משך: עד 4 חודשים-שנה", heatCold:"heat" },
  { id:"f47", name:"Ba Wei Di Huang Wan", nameHe:"בא ווי די הואנג וואן", element:"water", tree:"Fu Zi", pattern:"KD Yang Xu", indications:"גפיים קרות, קשיי השתנה", heatCold:"cold" },
  { id:"f48", name:"Zuo Gui Wan", nameHe:"זוו גווי וואן", element:"water", tree:"Xue", pattern:"Deep KD Yin Xu", indications:"חוסר חיוניות, הזדקנות", heatCold:"heat" },
  { id:"f49", name:"You Gui Wan", nameHe:"יאו גווי וואן", element:"water", tree:"Xue", pattern:"Strong KD Yang Xu", indications:"אימפוטנציה, תשישות", heatCold:"cold" },
  { id:"f50", name:"Zhen Wu Tang", nameHe:"ז'ן וו טאנג", element:"water", tree:"Fu Zi", pattern:"SP & KD Yang Xu + Edema", indications:"בצקת", heatCold:"cold" },
  { id:"f51", name:"Er Xian Tang", nameHe:"אר שיאן טאנג", element:"water", tree:"Xue", pattern:"KD Yin & Yang Xu", indications:"גלי חום מנופאוזליים", heatCold:"neutral" },
  { id:"f52", name:"Qi Bao Mei Ran Dan", nameHe:"צ'י באו מיי ראן דאן", element:"water", tree:"Xue", pattern:"KD & LV Jing/Blood Xu", indications:"אי-פוריות, נשירת שיער", heatCold:"cold" },
  { id:"f53", name:"Gui Zhi Fu Ling Wan", nameHe:"גווי ז'י פו לינג וואן", element:"water", tree:"Gui Zhi", pattern:"Blood Stasis Masses", indications:"שרירנים ברחם", heatCold:"neutral" },
  { id:"f54", name:"Shao Fu Zhu Yu Tang", nameHe:"שאו פו ז'ו יו טאנג", element:"water", tree:"Tao Ren", pattern:"Lower Abdomen Blood Stasis", indications:"כאבי מחזור", heatCold:"neutral" },
  { id:"f54b", name:"Zhi Bai Di Huang Wan", nameHe:"ז'י באי די הואנג וואן", element:"water", tree:"Xue", pattern:"KD Yin Xu + Empty Heat", indications:"חום ריק מחסר יין כליות", heatCold:"heat" },
  { id:"f54c", name:"Tu Si Zi Wan", nameHe:"טו סי ז'י וואן", element:"water", tree:"Xue", pattern:"KD Yang / Urinary", indications:"דליפת שתן", heatCold:"cold" },
  { id:"f54d", name:"Tao He Cheng Qi Tang", nameHe:"טאו הה צ'נג צ'י טאנג", element:"water", tree:"Da Huang", pattern:"Lower Jiao Blood Stasis + Heat", indications:"סטגנציית דם עם חום בג'יאו תחתון", heatCold:"heat" },
  { id:"f54e", name:"Si Ni Tang", nameHe:"סי ני טאנג", element:"water", tree:"Fu Zi", pattern:"Shao Yin Cold", indications:"רצון רק לישון, דופק דק מאוד, קור קיצוני", heatCold:"cold" },
  { id:"f54f", name:"Qi Ju Di Huang Wan", nameHe:"צ'י ג'ו די הואנג וואן", element:"water", tree:"Xue", pattern:"Shao Yin/Wood Eye Xu", indications:"בעיות עיניים מחסר שאו יין/עץ", heatCold:"heat" },
  { id:"f54g", name:"Bai Tou Weng Tang", nameHe:"באי טואו ונג טאנג", element:"water", tree:"Qi", pattern:"Toxic Heat / Dysentery", indications:"דיזנטריה זיהומית, שלשול רעיל", heatCold:"heat" },
  // YANG MING PURGING
  { id:"f55", name:"Da Cheng Qi Tang", nameHe:"דא צ'נג צ'י טאנג", element:"earth", tree:"Da Huang", pattern:"Yang Ming Interior Heat (Severe)", indications:"עצירות חמורה, נפיחות, חום גבוה, דיבור הזוי", heatCold:"heat" },
  { id:"f56", name:"Xiao Cheng Qi Tang", nameHe:"שיאו צ'נג צ'י טאנג", element:"earth", tree:"Da Huang", pattern:"Yang Ming Interior Heat (Mild)", indications:"עצירות קלה, נפיחות בטנית", heatCold:"heat" },
  { id:"f57", name:"Tiao Wei Cheng Qi Tang", nameHe:"טיאו ווי צ'נג צ'י טאנג", element:"earth", tree:"Da Huang", pattern:"Yang Ming Heat (Regulate ST)", indications:"ויסות חום קיבתי", heatCold:"heat" },
];

const TREES = [
  { id:"ren_shen", name:"Ren Shen", nameHe:"רן שן", element:"earth", focus:"חיזוק צ'י טחול, חולשת מערכת עיכול",
    description:"העץ המרכזי לחיזוק צ'י — בסיס לפורמולות טוניפיקציה של טחול וקיבה. משמש כשיש עייפות כרונית, תיאבון ירוד, שרירים רפויים, ודופק חלש.",
    layer:"טאי יין (Tai Yin)", organ:"טחול/קיבה",
    keyActions:["חיזוק צ'י טחול","העלאת יאנג צ'י","ייצור נוזלים","חיזוק ריאות"],
    diagnosticClues:"בטן רכה/אטונית, טבור שקוע, חולשה תת-טבורית. לשון חיוורת עם סימני שיניים. דופק חלש בגוואן ימני.",
    contraindications:"לא לשימוש בשי חזק (עודף), חום רטיבות פנימי, או סטגנציית צ'י חמורה ללא תנועה" },
  { id:"fu_zi", name:"Fu Zi", nameHe:"פו ז'י", element:"water", focus:"חימום יאנג כליות, תמיכה לבבית במטופלים חלשים/קשישים",
    description:"העץ החם ביותר — משחזר יאנג קורס (שאו יין קור). קריטי למטופלים עם קור פנימי עמוק, לחץ דם נמוך, ברדיקרדיה. הצמח הרעיל ביותר בפרמקופיאה — חייב עיבוד נכון.",
    layer:"שאו יין (Shao Yin)", organ:"כליות/לב",
    keyActions:["חימום יאנג כליות","שחזור יאנג קורס","חימום ג'יאו תחתון","גירוש קור פנימי"],
    diagnosticClues:"גפיים קרות, רצון רק לישון, דופק עמוק וחלש מאוד. בטן תחתונה קרה למגע. שתן שקוף ומרובה.",
    contraindications:"אסור בהיריון. אסור עם חום אמיתי (יין שו עם חום מדומה). חובה לבשל לפחות 60 דקות",
    huangHuang:{
      type:"טיפוס פו ז'י (Fu Zi)", body:"שמנמן/נפוח אך בקור — גפיים קרות, גב תחתון קר. יציבה כפופה, תנועה איטית",
      face:"חיוור, כהה או צהוב-כהה. עיניים כבויות. שפתיים כהות ויבשות. ביטוי עייף וריק",
      skin:"קר, לח. חיוור או כהה/סגלגל. בצקת מסוג קור. עור עבה אך חסר חיות",
      abdomen:"בטן קרה למגע (!). רכה, עשויה להיות מנופחת עם נוזלים. צלילי מים. בטן תחתונה קרה במיוחד",
      temperament:"לתרגי מאוד, מסוגר, חסר מוטיבציה. רוצה רק לישון. איטי בתגובה. אישיות קרה ופסיבית",
      markers:["גפיים קפואות (四逆) — סימן ההיכר","סלידה מקור — שכבות בגדים","שתן שקוף מרובה, נוקטוריה","שלשול מימי, במיוחד שחרית","ליבידו נמוך, אימפוטנציה","עייפות חמורה, רוצה לשכב תמיד","לשון: חיוורת, נפוחה, כהה, סימני שיניים","דופק: עמוק (chen), חלוש (wei), כמעט לא מורגש"],
      formula:"Si Ni Tang (四逆湯)",
      derivatives:["Zhen Wu Tang — אגירת מים ובצקת","Shen Fu Tang — קריסת צ'י (חירום)","Fu Zi Li Zhong Wan — יאנג טחול חסר","Ma Huang Xi Xin Fu Zi Tang — קור חיצוני שאו יין"],
      diff:"טיפוס הקור הקיצוני. גפיים קפואות + פנים חיוורים + דופק עמוק חלוש = חשוב על Fu Zi. הבדל מ-Gui Zhi (קור קל) ו-Gan Jiang (קור ממוקד בג'יאו אמצעי)."
    } },
  { id:"chai_hu", name:"Chai Hu", nameHe:"צ'אי הו", element:"wood", focus:"כבד ורמת שאו יאנג — סטרס, מתח, הפרעות איברים",
    description:"עץ הציר (Pivot) — מרמוניזציה בין חיצוני לפנימי. הפורמולות הנפוצות ביותר בקליניקה: Xiao Chai Hu Tang, Si Ni San. מתמחה בסטגנציית כבד, בעיות רגשיות, ותסמינים משתנים.",
    layer:"שאו יאנג (Shao Yang)", organ:"כבד/מרה",
    keyActions:["הרמוניזציית שאו יאנג","שחרור סטגנציית כבד","הרמת צ'י","ויסות רגשי"],
    diagnosticClues:"מתח תת-צלעי ימני (ST21R), Pigen חיובי. טעם מר בבוקר, תסמינים מחמירים מסטרס. דופק מתוח (Wiry).",
    contraindications:"לא לשימוש ביאנג עולה של כבד ללא עיגון. זהירות בשילוב עם יין שו כבד",
    huangHuang:{
      type:"טיפוס צ'אי הו (Chai Hu)", body:"בינוני עד חסון. כתפיים רחבות, צוואר קצר ועבה. חזה ובטן מלאים. שרירי, לא כבד",
      face:"פנים רחבים ועגולים. גוון צהוב-כהה עם גוון כחול-ירוק ברקות. ביטוי רציני, מתוח. מצח מקומט מסטרס. עיניים חדות",
      skin:"נורמלי עד שמנוני קלות. צבע עמום עם גוון צהוב-ירקרק",
      abdomen:"התנגדות ורגישות תת-צלעית ימנית (胸脇苦滿). גם מתח רקטוס שמאלי (ST25L). מתח אפיגסטרי",
      temperament:"נוטה לדיכוי רגשי, תסכול ועצבנות. מחזיק סטרס בפנים, נראה רגוע אבל רותח מבפנים. שינויי מצב רוח. נחרץ אך עקשן",
      markers:["מלאות ורגישות תת-צלעית (胸脇苦滿) — סימן ההיכר","תחושות חום וקור לסירוגין (往來寒熱)","טעם מר בפה, בעיקר בבוקר","גרון יבש, נטייה לאנחות תכופות","תנודתיות רגשית: עצבנות מתחלפת עם דיכאון","נפיחות בטנית, גרוע יותר מסטרס","לשון: ציפוי לבן דק או צהבהב","דופק: מתוח (xian), עשוי להיות מתוח-מהיר"],
      formula:"Xiao Chai Hu Tang (小柴胡湯)",
      derivatives:["Da Chai Hu Tang — חסון יותר, עצירות, חום יאנג מינג","Xiao Yao San — חסר טחול ודם (וריאנט חלש)","Si Ni San — עיכוב יאנג, גפיים קרות פרדוקס","Chai Hu Jia Long Gu Mu Li Tang — דפיקות, נדודי שינה, בניין חזק"],
      diff:"הטיפוס הקונסטיטוציוני של שאו יאנג. התנגדות תת-צלעית = סימן מפתח. הבדל בין Chai Hu חזק (Da Chai Hu → חסון, עצירות) לחלש (Xiao Yao San → עייפות, חיוורון)."
    } },
  { id:"huang_lian", name:"Huang Lian", nameHe:"הואנג ליין", element:"fire", focus:"ניקוי אש ורטיבות-חום מלב, קיבה וג'יאו עליון",
    description:"המנקה החזק ביותר של חום — מתמחה בחום-רטיבות בג'יאו אמצעי ועליון. נדודי שינה, חומצת קיבה, אפטות, עצבנות. שורש מר מאוד — מסמן את עוצמת פעולתו.",
    layer:"יאנג מינג (Yang Ming)", organ:"לב/קיבה",
    keyActions:["ניקוי אש לב","ייבוש רטיבות-חום","הורדת חום קיבה","עצירת הקאות/שלשול מחום"],
    diagnosticClues:"מתח תת-צלעי שמאלי (ST21L) עם קשיחות. לשון אדומה עם ציפוי צהוב שמנוני. חומצת קיבה, נדודי שינה עם חלומות מטרידים.",
    contraindications:"לא לשימוש ממושך — מייבש ופוגע בצ'י טחול. אסור בקור פנימי (טאי יין/שאו יין)",
    huangHuang:{
      type:"טיפוס הואנג ליין (Huang Lian)", body:"בינוני עד מוצק. נוטה לגוף קומפקטי. חום מטבולי גבוה — מרגיש חם, לא אוהב קיץ",
      face:"פנים אדומים או סמוקים, בעיקר לחיים. שפתיים אדומות, עיניים אדומות. עשוי להיות אקנה או רוזציאה. ביטוי אינטנסיבי או נסער",
      skin:"שמנוני, נוטה לאקנה, מורסות או פריחות. חם למגע. גוון אדום או שמנוני. נוטה לזיהומי עור",
      abdomen:"קשיחות ומלאות אפיגסטרית (心下痞). רגיש במישוש ב-CV12-CV14. בטן עשויה להיות חמה",
      temperament:"עצבני, חסר מנוח, נסער בקלות. נדודי שינה מפעילות מחשבתית יתר. חסר סבלנות, אגרסיבי לפעמים. נוטה לחרדה עם ביטויים גופניים",
      markers:["פנים ושפתיים אדומות — סימן ההיכר של חום","נדודי שינה — קושי להירדם עקב אגיטציה","קשיחות ואי-נוחות אפיגסטרית (心下痞)","טעם מר בפה, ריח רע","נטייה לאפטות, חומצת קיבה","שלשול דחוף (פרדוקס — חום למעלה, קור למטה)","לשון: אדומה, ציפוי צהוב (שמנוני)","דופק: מהיר, עשוי להיות חלקלק או מתוח-מהיר"],
      formula:"Huang Lian Jie Du Tang (黃連解毒湯)",
      derivatives:["Ban Xia Xie Xin Tang — חום-קור מעורב באפיגסטריום","Huang Lian E Jiao Tang — חסר יין עם נדודי שינה חמורים","Zuo Jin Wan — אש כבד על קיבה (חומצת קיבה)","Jiao Tai Wan — ניתוק לב-כליות (נדודי שינה)"],
      diff:"טיפוס 'חום עודף'. פנים אדומות + נדודי שינה + קשיחות אפיגסטרית = חשוב על Huang Lian. הבדל מ-Shi Gao (גדול יותר, חום גבוה עם הזעה) ו-Da Huang (חום עם עצירות)."
    } },
  { id:"ban_xia", name:"Ban Xia", nameHe:"באן שיה", element:"earth", focus:"פירוק ליחה ורטיבות — חזה וסרעפת",
    description:"עץ הליחה המרכזי — מפרק ליחה בכל הרמות (חזה, סרעפת, קיבה). Wen Dan Tang היא הפורמולה המייצגת. מתמחה בבעיות מליחה: סחרחורת, בחילות, גודש חזה, כיח.",
    layer:"טאי יין / שאו יאנג", organ:"טחול/ריאות/קיבה",
    keyActions:["פירוק ליחה","הורדת צ'י עולה (הקאות)","ייבוש רטיבות","פתיחת חזה"],
    diagnosticClues:"ST21R קשיח (ליחה-שומן). צלילי מים בקיבה (Splashing Water). כיח מוגזם, בחילות בוקר. לשון עם ציפוי לבן עבה ושמנוני.",
    contraindications:"אסור בהיריון. זהירות ביין שו עם יובש. הצמח רעיל ללא עיבוד — חובה לבשל עם זנגביל",
    huangHuang:{
      type:"טיפוס באן שיה (Ban Xia)", body:"שמנמן או נפוח, בשר רך, נטייה להשמנה. גוף כבד ואיטי. מחזיק מים בקלות. לא ספורטיבי",
      face:"חיוור או צהוב-נפוח. פנים עגולים, עשויים להיראות נפוחים. ביטוי עמום, לפעמים מעורפל. גודש אף, ניקוי גרון",
      skin:"לח, שמנוני. גוון צהבהב או עמום. נוטה לנודולות, ליפומות. עור לח או קריר-לח",
      abdomen:"רך, מלא, נפוח. צלילי מים במישוש (振水音). מלאות אפיגסטרית ונפיחות. בטן בצקית-רכה",
      temperament:"'אישיות גדולה' — עשוי להיות בטוח כלפי חוץ, ביצועיסט, אבל רגיש רגשית מתחת. נוטה למחשבות יתר וערפל מנטלי. גלובוס (גוש בגרון). סחרחורת וכובד ראש",
      markers:["בחילות ונטייה להקאות — סימן ההיכר","תחושת גוש בגרון (梅核氣 — שזיף-ליחה)","כיח מוגזם","סחרחורת, כובד ראש, ערפל מנטלי","צלילי מים בבטן","מלאות חזה ואפיגסטריום","לשון: חיוורת, נפוחה, ציפוי לבן עבה שמנוני","דופק: חלקלק (hua), עשוי להיות חלקלק-מתוח"],
      formula:"Ban Xia Hou Po Tang (半夏厚朴湯)",
      derivatives:["Er Chen Tang — בסיס ליחה-רטיבות","Ban Xia Xie Xin Tang — חום-קור מעורב עם קשיחות אפיגסטרית","Wen Dan Tang — ליחה-חום עם נדודי שינה/חרדה","Ban Xia Bai Zhu Tian Ma Tang — סחרחורת מליחה-רוח"],
      diff:"טיפוס הליחה. שמנמן + בחילות + כיח + ערפל ראש = חשוב על Ban Xia. הבדל מ-Huang Qi (גם נפוח אבל הזעה ספונטנית דומיננטית) ו-Gan Jiang (קור בטן, לא ליחה)."
    } },
  { id:"da_huang", name:"Da Huang", nameHe:"דא הואנג", element:"earth", focus:"שילשול חום יאנג מינג, פירוק סטגנציה עיקשת ודם",
    description:"עץ השילשול — מנקה חום ועצירות ברמת יאנג מינג. Cheng Qi Tang בוריאציות שונות. גם מניע דם (סטגנציית דם כרונית). משמש באבחון בטן כשהבטן קשה כלוח.",
    layer:"יאנג מינג (Yang Ming)", organ:"קיבה/מעי גס",
    keyActions:["שילשול חום יאנג מינג","פירוק עצירות","הנעת דם","ניקוי רעלנים"],
    diagnosticClues:"בטן קשה כלוח (אפיגסטרי). עצירות עם חום — פנים אדומות, עצבנות, ריח רע. דופק גדול ומלא. T12 Huato רגיש.",
    contraindications:"אסור בהיריון. לא בשלשול/חולשת טחול. לא בקור פנימי. להשתמש בזהירות בקשישים",
    huangHuang:{
      type:"טיפוס דא הואנג (Da Huang)", body:"גדול, חסון, כבד. שרירי חזק, עצמות עבות. טיפוס עודף — אף פעם לא שברירי. חם, סובל קור טוב",
      face:"פנים אדומים או כהים-אדומים. פנים מלאים ורחבים. שפתיים עבות. ביטוי אינטנסיבי או אגרסיבי. עיניים אדומות",
      skin:"עבה, מחוספס. שמנוני או גס. חם למגע. עשויות להיות כתמים כהים או היפרפיגמנטציה",
      abdomen:"מלא, נפוח, מוצק. רגיש עם התנגדות (拒按). עצירות עם צואה קשה ויבשה = ממצא מפתח. בטן חמה ומתוחה",
      temperament:"אגרסיבי, אסרטיבי, תקיף. עצבני עם התפרצויות. חשיבה אובססיבית (סטגנציית דם על שן). חזק-רצון, עקשן",
      markers:["עצירות עם צואה קשה/יבשה — סימן ההיכר","מלאות בטנית, נפיחות, כאב שדוחה לחיצה","פנים אדומות/כהות עם סימני חום","עצבנות, אגיטציה, לפעמים מאניה","מבנה גוף חזק — לעולם לא להשתמש ב-Da Huang בחולים חלשים","שתן כהה, מרוכז","לשון: אדומה או כהה, ציפוי צהוב יבש","דופק: חזק, מלא (shi), עשוי להיות מהיר"],
      formula:"Da Cheng Qi Tang (大承氣湯)",
      derivatives:["Xiao Cheng Qi Tang — מקרים קלים יותר","Tao He Cheng Qi Tang — סטגנציית דם + תסמינים נפשיים","Da Huang Mu Dan Pi Tang — אבצס מעי","Ma Zi Ren Wan — קשישים עם מעיים יבשים"],
      diff:"טיפוס 'חום עודף עם עצירות'. חסון + עצירות + מלאות בטנית + פנים אדומות = חשוב על Da Huang. הבדל מ-Huang Lian (חום ממוקד בג'יאו עליון/לב) ו-Shi Gao (חום עם הזעה רבה וצמא)."
    } },
  { id:"huang_qi", name:"Huang Qi", nameHe:"הואנג צ'י", element:"metal", focus:"חיזוק צ'י מגן (Wei Qi) וצ'י ריאות — חיסון",
    description:"עץ החיסון — מחזק את צ'י המגן (Wei Qi) וצ'י ריאות. Bu Zhong Yi Qi Tang היא הפורמולה המייצגת. מרים את היאנג צ'י — למניעת צניחת איברים, הזעת יתר, חיסון חלש.",
    layer:"טאי יין / טאי יאנג", organ:"ריאות/טחול",
    keyActions:["חיזוק Wei Qi","הרמת יאנג צ'י","עצירת הזעה","חיזוק שריר"],
    diagnosticClues:"מטופל עם הצטננויות חוזרות, הזעת יתר ספונטנית. צ'י חלש — קול חלש, עייפות. דופק חלש בצון ימני.",
    contraindications:"לא לשימוש בשי חיצוני (הצטננות אקוטית). זהירות ביאנג עולה של כבד",
    huangHuang:{
      type:"טיפוס הואנג צ'י (Huang Qi)", body:"רך, נפוח, חסר טונוס שרירי. בשר 'רפוי' (肌肉鬆軟). עשוי להיות שמן ממים ולא משומן. גפיים חלשות. נוטה לבצקת",
      face:"חיוור, נפוח. עשוי להיראות נפוח במיוחד בבוקר. גוון עמום — מראה 'שטוף'. ביטוי עייף או אפתי. עפעפיים נפוחות",
      skin:"רפוי, רך, אלסטיות ירודה. חיוור או צהבהב. הזעה ספונטנית, במיוחד במאמץ. פצעים מחלימים לאט. נוטה לבצקת (pitting בשוקיים)",
      abdomen:"רך, רפוי, חסר טונוס. עשוי להיות נפוח אך ללא התנגדות. טבור שקוע. רושם כללי של חולשה. לא רגיש — פשוט 'ריק'",
      temperament:"ביישן, חסר ביטחון, נוטה לדאגה. נכנע בקלות, כושר סיבולת נמוך. נמנע מעימותים, פסיבי. מסוגר חברתית מעייפות",
      markers:["הזעה ספונטנית — מזיע בקלות עם מאמץ מינימלי (סימן ההיכר)","הצטננויות חוזרות — Wei Qi / חיסון חלש","בצקת, במיוחד גפיים תחתונות ופנים בבוקר","עייפות וקוצר נשימה במאמץ","גוף רך, נפוח, ללא טונוס שרירי","פצעים מחלימים לאט","לשון: חיוורת, נפוחה, סימני שיניים, ציפוי לבן דק","דופק: חלש, רך, או צף-ריק (fu xu)"],
      formula:"Yu Ping Feng San (玉屏風散)",
      derivatives:["Bu Zhong Yi Qi Tang — צניחת איברים, עייפות כרונית","Dang Gui Bu Xue Tang — חסר דם (יחס 5:1)","Fang Ji Huang Qi Tang — בצקת רוח-רטיבות","Bu Yang Huan Wu Tang — אחרי שבץ (מינון 120 גרם)"],
      diff:"טיפוס חסר Wei Qi. נפוח + הזעה ספונטנית + הצטננויות + עייפות = חשוב על Huang Qi. הבדל מ-Gui Zhi (גם מזיע אבל רזה/עדין) ו-Ban Xia (גם נפוח אבל ליחה/בחילות דומיננטיות)."
    } },
  { id:"tao_ren", name:"Tao Ren", nameHe:"טאו רן", element:"fire", focus:"הנעת דם — גושים קבועים וסטגנציה כרונית",
    description:"עץ הדם — מתמחה בפירוק סטגנציית דם (Xue Yu). Xue Fu Zhu Yu Tang, Tao He Cheng Qi Tang. לטיפול בכאב קבוע, גושים, פיגמנטציה. קשור חזק למערכת ניקוד Xue Yu.",
    layer:"ג'ואה יין / יאנג מינג", organ:"כבד/לב",
    keyActions:["הנעת דם","פירוק גושים","שחרור כאב קבוע","טיפול בפיגמנטציה"],
    diagnosticClues:"כהות שפתיים/חניכיים, פיגמנטציה עפעפיים, ורידים סגולים מתחת ללשון. PP פריאומביליקלי חיובי. גוש קבוע (Ji) בבטן.",
    contraindications:"אסור בהיריון. זהירות בדימום פעיל. לא לשימוש בשו דם ללא סטגנציה" },
  { id:"gui_zhi", name:"Gui Zhi", nameHe:"גווי ז'י", element:"metal", focus:"הרמוניזציה חיצונית (טאי יאנג), ויסות קרדיווסקולרי",
    description:"עץ ההרמוניזציה — Gui Zhi Tang היא אם כל הפורמולות. מחמם ומפזר קור חיצוני, מווסת דופק לב, מחזק את פני השטח. גם משמש לפעימות צפות בבטן (שי).",
    layer:"טאי יאנג (Tai Yang)", organ:"ריאות/לב/שרירים",
    keyActions:["הרמוניזציית ין-וואי","פיזור קור חיצוני","חימום כלי דם","ויסות דופק לב"],
    diagnosticClues:"הצטננות עם הזעה (טאי יאנג שי), דופק צף ואיטי. פעימה צפה בבטן (שי — Gui Zhi). רגישות לרוח וקור.",
    contraindications:"לא לשימוש בחום פנימי (יאנג מינג). זהירות ביין שו עם סימני חום",
    huangHuang:{
      type:"טיפוס גווי ז'י (Gui Zhi)", body:"רזה עד ממוצע, טונוס שרירי מוצק אך יבש. נוטה לתת-משקל. מסגרת עדינה — פיזיקת 'תולעת ספרים'. ידיים ורגליים קרות, מחזור דם פריפרי לקוי",
      face:"חיוור או חלוש עם גוון כחול-ירוק ברקות או באזור יינטאנג (סימן הפנים של Gui Zhi לפי הואנג הואנג!). פנים רזים. שפתיים חיוורות או דובדבניות",
      skin:"דק, יבש (לא שמנוני). נוטה לחבורות. הזעה ספונטנית (זי האן). רגיש מאוד לשינויי טמפרטורה",
      abdomen:"רך, שטוח, טונוס שרירי ירוד. פעימה נראית או מורגשת באפיגסטריום (心下悸). בטן קרירה למגע. רקטוס דק אך מתוח",
      temperament:"חרד, רגיש, מופנם. נבהל בקלות, נוטה למחשבות יתר. עדין רגשית, קשיי שינה. אישיות 'חוקר' או 'אמן רגיש'",
      markers:["הזעה ספונטנית (自汗) — מזיע בקלות עם מאמץ מינימלי","סלידה מרוח — מרגיש טיוטות באופן חד","דפיקות לב ונטייה להיבהל בקלות","תסמינים חוזרים בגוף עליון: כאב ראש, צוואר קשיח, גודש אף","תיאבון ירוד אבל משתוקק למזון ושתייה חמים","לשון: חיוורת, לחה, ציפוי לבן דק","דופק: צף, מתון (fu huan), או חלש"],
      formula:"Gui Zhi Tang (桂枝湯)",
      derivatives:["Gui Zhi Jia Long Gu Mu Li Tang — חרדה, דפיקות, נבהל","Xiao Jian Zhong Tang — כאבי בטן, עיכול חלש בילדים","Gui Zhi Fu Ling Wan — סטגנציית דם בג'יאו תחתון","Dang Gui Si Ni Tang — גפיים קרות, ריינו"],
      diff:"הטיפוס הנפוץ ביותר של 'חסר-קור'. הבדל מ-Fu Zi (קור חמור/קריסת יאנג) ו-Huang Qi (חסר Wei Qi/חיסון). מטופל Gui Zhi מזיע בקלות ומרגיש רוח; מטופל Ma Huang לא מזיע ובעל עור עבה."
    } },
  { id:"jue_yin", name:"Jue Yin", nameHe:"ג'ואה יין", element:"wood", focus:"שכבה העמוקה ביותר — חוסר איזון יין-יאנג קיצוני",
    description:"השכבה העמוקה ביותר — חום למעלה וקור למטה בו-זמנית. Wu Mei Wan היא הפורמולה המייצגת. אוטואימוניות, מחלות כרוניות מורכבות, תולעים. כשהגוף 'מבולבל' בין חום לקור.",
    layer:"ג'ואה יין (Jue Yin)", organ:"כבד/קרום הלב",
    keyActions:["הרמוניזציית חום-קור","טיפול באוטואימוניות","גירוש תולעים","ויסות ג'ואה יין"],
    diagnosticClues:"תסמינים מעורבים — חום ברגליים+קור בבטן, שלשול עם צמא. בטן עם אזורים חמים וקרים. תסמינים לא עקביים שמשתנים.",
    contraindications:"אבחון מורכב — יש לוודא שזו באמת רמת ג'ואה יין ולא סתם תמונה מעורבת" },
  // === 3 עצים חדשים — משפחות פורמולה של הואנג הואנג ===
  { id:"ma_huang", name:"Ma Huang", nameHe:"מא הואנג", element:"metal", focus:"שחרור חיצוני חזק (טאי יאנג), פתיחת ריאות, אסתמה",
    description:"העץ החזק ביותר לפתיחת פני השטח — פותח נקבוביות סגורות לגירוש קור חיצוני. Ma Huang Tang לטאי יאנג שאנג האן ללא הזעה. מתמחה באסתמה, גודש אף, ובצקת רוח-מים.",
    layer:"טאי יאנג (Tai Yang)", organ:"ריאות/שלפוחית",
    keyActions:["הזעה לשחרור חיצוני","פתיחת צ'י ריאות","עצירת צפצופים","קידום השתנה"],
    diagnosticClues:"הצטננות חמורה ללא הזעה, כאבי גוף, דופק צף ומתוח. גודש אף חזק. עור עבה כהה, לא מזיע גם בחום.",
    contraindications:"לא ביתר לחץ דם. לא בהזעה ספונטנית/חסר יין. אסור בחולים חלשים. חומר מפוקח בהרבה מדינות (אפדרין)",
    huangHuang:{
      type:"טיפוס מא הואנג (Ma Huang)", body:"חסון, מוצק, שרירי. עצמות עבות, שרירים מפותחים. גוף צפוף וכבד. עור עבה שלא מזיע בקלות — נקבוביות 'חתומות'",
      face:"כהה או עמום, לפעמים צהבהב. פנים רחבים, לסת חזקה. גבות עבות. ביטוי סטואי. עשוי להיראות מבוגר מגילו",
      skin:"עבה, מחוספס, כהה. לא מזיע בקלות — גם בחום או מאמץ (המאפיין המגדיר!). עור הדוק, צפוף. עמיד אך איטי לביטוי חיצוני",
      abdomen:"מוצק, שרירי. לא נפוח אבל קשה. כאבי גוף כלליים ונוקשות. שרירים מתוחים ובלתי נכנעים",
      temperament:"סטואי, סובלני, קשוח. לא מתלונן בקלות. פיזי יותר מאינטלקטואלי — 'עושה' לא 'חושב'. מדכא כאב. ישיר, לפעמים בוטה",
      markers:["היעדר הזעה — לא יכול להזיע גם כשחם (סימן ההיכר)","כאבי גוף כלליים — שרירים מתוחים ונוקשים","סלידה מקור עם חום — טאי יאנג שאנג האן קלאסי","עור עבה, גוון כהה, מבנה חסון","גודש אף, קושי לנשום דרך האף","בצקת (סוג רוח-מים) — נפיחות פתאומית","לשון: נורמלית או חיוורת, ציפוי לבן דק","דופק: צף ומתוח (fu jin) — מתוח = קור מכווץ את הערוצים"],
      formula:"Ma Huang Tang (麻黃湯)",
      derivatives:["Ma Xing Shi Gan Tang — חום ריאות עם שיעול/אסתמה","Ma Huang Xi Xin Fu Zi Tang — שאו יין + חיצוני","Xiao Qing Long Tang — נוזל קר פנימי + כיח מימי","Yue Bi Jia Zhu Tang — בצקת רוח-מים","Da Qing Long Tang — קור חיצוני + חום פנימי"],
      diff:"טיפוס ה'חיצוני חתום' — ההפך של Gui Zhi! לא יכול להזיע + חסון + עור עבה + כאבי גוף = Ma Huang. מטופל Gui Zhi מזיע יותר מדי ורזה/עדין. זה אחד ההבדלים הבסיסיים ביותר בשיטת הואנג הואנג."
    } },
  { id:"shi_gao", name:"Shi Gao", nameHe:"שי גאו", element:"metal", focus:"ניקוי חום ברמת צ'י (יאנג מינג), צמא עז, חום גבוה",
    description:"המינרל הקר ביותר — מנקה חום ברמת צ'י של יאנג מינג. Bai Hu Tang (ארבע הגדולים: חום גדול, הזעה גדולה, צמא גדול, דופק גדול). משמש בחום גבוה, מחלות זיהומיות, וסוכרת מסוג חום.",
    layer:"יאנג מינג (Yang Ming)", organ:"ריאות/קיבה",
    keyActions:["ניקוי חום רמת צ'י","כיבוי אש קיבה","ייצור נוזלים","שיכוך צמא"],
    diagnosticClues:"חום גבוה עם הזעה רבה, צמא עז לשתייה קרה, דופק שוטף ומלא (洪大). פנים אדומות. מטופל חזק וחם.",
    contraindications:"אסור בחסר יאנג טחול/קיבה. לא בחום מדומה (שאו יין). לא בחסר דם עם חום. רק לחום עודף אמיתי",
    huangHuang:{
      type:"טיפוס שי גאו (Shi Gao)", body:"גדול, חזק, שרירי — האדם 'הגדול'. מוזן היטב, לרוב גבוה. חם מאוד, שונא קיץ. קצב מטבולי גבוה. עשוי להיות שמנמן אבל מוצק/שרירי ולא רך",
      face:"אדום, סמוק — לפעמים אדום בוהק. הזעה על הפנים. מאפיינים מלאים. שפתיים אדומות. עיניים בהירות או אדומות",
      skin:"חם או לוהט למגע, מזיע בשפע. עור אדמדם. מעדיף ללבוש פחות. פותח חלונות בחורף. עור לח מהזעה תמידית",
      abdomen:"מלא, חם. תחושת חום כללית. בטן חזקה ושרירית. צמא עם פה יבש. פחות ממצאים בטניים ספציפיים — החום מערכתי",
      temperament:"חסר מנוח מחום, עצבני כשחם. אנרגטי ומוחצן אבל נסער כשמתחמם. צמא כל הזמן, שותה כמויות גדולות. פעיל, לא יכול לסבול כליאה",
      markers:["חום גבוה עם הזעה רבה — סימן ההיכר (בניגוד ל-Ma Huang: בלי הזעה)","צמא עז — שותה כמויות גדולות של מים קרים","סלידה מחום — פותח חלונות, מוריד בגדים","דופק שוטף גדול (洪大) — מלא, חזק, קופצני","גוף גדול וחזק","פנים אדומות, הזעה, חוסר מנוח","לשון: אדומה, ציפוי צהוב (עשוי להיות יבש)","דופק: שוטף (hong), גדול (da), חזק"],
      formula:"Bai Hu Tang (白虎湯)",
      derivatives:["Bai Hu Jia Ren Shen Tang — נזק צ'י מחום (צמא + דופק חלש)","Ma Xing Shi Gan Tang — חום ריאות עם שיעול/אסתמה","Zhu Ye Shi Gao Tang — חום שיורי אחרי מחלה","Da Qing Long Tang — קור חיצוני + חום פנימי"],
      diff:"טיפוס 'חום רמת צ'י יאנג מינג'. חום גבוה + הזעה רבה + צמא עז + דופק שוטף + חסון = חשוב על Shi Gao. הבדל מ-Huang Lian (חום ממוקד לב/עליון, פחות הזעה) ו-Da Huang (חום עם עצירות, פחות הזעה). מטופל Shi Gao מזיע בשפע וצמא נואשות."
    } },
  { id:"gan_jiang", name:"Gan Jiang", nameHe:"גאן ג'יאנג", element:"earth", focus:"חימום ג'יאו אמצעי (טחול/קיבה), שלשול קר, בטן קרה",
    description:"חום האח — מחמם את המרכז (טחול/קיבה) באופן ממוקד. Li Zhong Wan היא הפורמולה המייצגת. לטיפול בבטן קרה, שלשול מימי, תיאבון ירוד. שונה מ-Fu Zi שמחמם את כל הגוף.",
    layer:"טאי יין (Tai Yin)", organ:"טחול/קיבה/לב/ריאות",
    keyActions:["חימום ג'יאו אמצעי","שחזור יאנג טחול","חימום ריאות לפירוק נוזלים","עצירת דימום (צורה שרופה)"],
    diagnosticClues:"בטן קרה למגע (!!) — ממצא מפתח. שלשול מימי, מזון לא מעוכל בצואה. תיאבון ירוד, משתוקק לחם. ייתכן ריור יתר.",
    contraindications:"אסור בחסר יין עם חום. זהירות בהיריון. לא בדימום מחום (רק צורה שרופה לדימום קר). לא בחום עודף",
    huangHuang:{
      type:"טיפוס גאן ג'יאנג (Gan Jiang)", body:"רזה עד ממוצע, עשוי להיות בתת-משקל. גוף קר אבל ממוקד במרכז — בטן קרה, אפיגסטריום קר. ידיים ורגליים עשויות להיות קרות אבל לא כמו Fu Zi. ייתכן ריור",
      face:"חיוור או צהוב-חלוש — איכות 'שטופה'. פנים חסרי צבע וחיוניות אבל לא כהים כמו Fu Zi. שפתיים חיוורות. ביטוי עייף, 'פני כאב בטן'",
      skin:"חיוור, קריר, במיוחד על הבטן. לא בהכרח לח (הבדל מ-Gui Zhi). עור חסר ברק. חיוור ולא כהה. קריר למגע במיוחד במרכז",
      abdomen:"בטן קרה במישוש — ממצא מפתח! אפיגסטריום ואזור פריאומביליקלי קרים ליד הבוחן. ייתכן נפיחות רכה. צלילי מים עדינים. כאב משתפר מחום ולחיצה",
      temperament:"שקט, מסוגר, חסר תיאבון לאוכל ולחיים. ייתכן דיכאון קל מחולשה עיכולית כרונית. משתוקק למזון חם. מתלונן על 'קיבה קרה'. עייף אחרי אכילה",
      markers:["בטן קרה במישוש — יד הבוחן מרגישה את הקור (סימן ההיכר)","שלשול מימי, צואה רופפת, מזון לא מעוכל","תיאבון ירוד, משתוקק למזון ושתייה חמים","ריור יתר (קור בטחול לא מעבד נוזלים)","כאב בטן משתפר מחום ולחיצה","ייתכן הקאות קרות (הקאת נוזל שקוף)","לשון: חיוורת, לחה, ציפוי לבן (עשוי להיות עבה)","דופק: עמוק (chen), איטי (chi), או מתון וחלש"],
      formula:"Li Zhong Wan (理中丸)",
      derivatives:["Si Ni Tang — קור עמוק יותר עם קריסת יאנג (הוסף Fu Zi)","Ban Xia Xie Xin Tang — חום-קור מעורב (הוסף Huang Lian)","Gan Cao Gan Jiang Tang — הפורמולה הפשוטה ביותר, חימום בסיסי","Xiao Qing Long Tang — נוזל קר בריאות (הוסף Ma Huang)","Ling Jiang Zhu Gan Tang — רטיבות-קור בגב תחתון"],
      diff:"טיפוס 'קור טחול' — קור ממוקד בג'יאו אמצעי. בטן קרה + שלשול + תיאבון ירוד + לשון חיוורת = חשוב על Gan Jiang. הבדל מ-Fu Zi (קור כל הגוף/קריסת יאנג — חמור יותר) ו-Gui Zhi (רגישות חיצונית לקור, הזעה). Gan Jiang = 'הכירה כבויה' (טחול לא מעבד); Fu Zi = 'האש נכבית' (קריסת יאנג)."
    } },
];

const SIX_LAYERS = [
  { id:"taiyang", name:"Tai Yang", nameHe:"טאי יאנג", level:"חיצוני", element:"metal",
    symptoms:"דופק צף, צוואר קשיח, כאב ראש, סלידה מקור, כאב גוף כללי, אלרגיות ובעיות אף",
    abdominal:"מתח בגב עליון וצוואר, רגישות ברמת Metal בגב",
    formulas:"Gui Zhi Tang (רוח-חום/הזעה), Ma Huang Tang (קור/ללא הזעה), Zhi Zi Chi Tang (חום כלוא), Cang Er Zi San (אף)",
    treatment:"שחרור חיצוני דרך הזעה. דיקור: מוקסה על DU14, DU12, DU13",
    priority:"מטפלים ראשון אם קיים (אלרגיות/נשימתי)", color:"#94a3b8" },
  { id:"yangming", name:"Yang Ming", nameHe:"יאנג מינג", level:"פנימי-חום", element:"earth",
    symptoms:"דופק גדול ומלא, צמא עז, עצבנות, עצירות, דיבור הזוי",
    abdominal:"אפיגסטריום (CV12), בטן קשה כלוח. אישור: T12 Huato + קו 3 צון",
    formulas:"Bai Hu Tang (חום רמת צ'י), Da/Xiao/Tiao Wei Cheng Qi Tang (שילשול)",
    treatment:"שילשול דרסטי של חום ויובש. דיקור: ST34R, ST44B, SP4B",
    priority:"", color:"#f59e0b" },
  { id:"shaoyang", name:"Shao Yang", nameHe:"שאו יאנג", level:"ציר (Pivot)", element:"wood",
    symptoms:"טעם מר, גרון יבש, סחרחורת, חום וצמרמורות לסירוגין, כאב צלעות, דופק מתוח",
    abdominal:"כאב/מתח תת-צלעי ימני. נקודת Pigen (צד ימין בלבד)",
    formulas:"Xiao Chai Hu Tang (הרמוניזציה), Da Chai Hu Tang (שילשול), Chai Hu Jia Long Gu Mu Li Tang (סטרס/אוטואימוני)",
    treatment:"הרמוניזציית ציר, עבודה על כבד דרך מרה. נקודות: Pigen, Dan Nang Xin",
    priority:"", color:"#22c55e" },
  { id:"taiyin", name:"Tai Yin", nameHe:"טאי יין", level:"פנימי-קור", element:"earth",
    symptoms:"מלאות בטנית, הקאות, שלשול מימי, ללא צמא, עייפות, תשוקה למתוק. דופק חלש, לשון חיוורת+שיניים",
    abdominal:"חולשה תת-טבורית, טבור (CV8) רך/אטוני",
    formulas:"Si Jun Zi Tang, Li Zhong Wan, Bu Zhong Yi Qi Tang, Shen Ling Bai Zhu San",
    treatment:"חיזוק צ'י טחול וחימום. דיקור: SP4 (רגל חלשה בלבד), CV8 (מוקסה על מלח)",
    priority:"", color:"#b45309" },
  { id:"shaoyin", name:"Shao Yin", nameHe:"שאו יין", level:"עמוק", element:"water",
    symptoms:"הזעות לילה, גלי חום, דופק דק ועדין, עייפות אחה\"צ, לחץ דם נמוך, רצון רק לישון",
    abdominal:"רגישות לאורך רן מאי (קו אמצע), בטן תחתונה (CV4, CV6). בדיקת רגל היפרטונית (יין) vs אטונית (יאנג)",
    formulas:"Si Ni Tang (קור), Huang Lian E Jiao Tang (חום), Liu Wei Di Huang Wan (יין שו)",
    treatment:"שחזור חיוניות ליבה. דיקור: Qipang, ST27B, CV4, CV5, CV6",
    priority:"", color:"#3b82f6" },
  { id:"jueyin", name:"Jue Yin", nameHe:"ג'ואה יין", level:"עמוק ביותר", element:"wood",
    symptoms:"חוסר איזון יין-יאנג קיצוני: חום למעלה, קור למטה. צמא חזק, רעב ללא רצון לאכול, אצבעות קרות",
    abdominal:"ביטוי דומיננטי בבטן שמאל (ST25L), מתח בשריר רקטוס שמאלי",
    formulas:"Wu Mei Wan (חום/קור טרמינלי), Dang Gui Si Ni Tang (קור מרידיאני), Wu Zhu Yu Tang (קור שי כבד)",
    treatment:"פתרון סטגנציה פנימית קיצונית. דיקור: ST25L, LV4, LV5, SP10, LU5",
    priority:"", color:"#a855f7" },
];

const ABDOMEN_ZONES = [
  { id:"subcardiac", name:"תת-לבבי", nameEn:"Subcardiac", element:"fire", points:"CV15, CV14",
    description:"לב ופריקרד — נדודי שינה, חרדה, מצוקה לבבית. CV14=מכני, CV15=נפשי (דורש יותר תמיכה מילולית)",
    findings:["רגישות","קשיחות","דפיקות","מתח שמאל"],
    protocols:[
      { name:"אש — שי/עודף", points:"CV12, ST25L, PC6L, LU7R, K6B" },
      { name:"לבבי שי (שמאל)", points:"K25L, PC3L, LI15, קו Jianeiling" },
      { name:"מכני לבבי", points:"PC1L, SP21L" },
      { name:"מתח אפיגסטרי", points:"CV12, ST21L" },
      { name:"אש שו/חסר", points:"K23L, SI1L, QIPANG, CV6" },
      { name:"ניקוי חום", points:"H6 (ימין/PP), PC4 (ימין/PP)" },
      { name:"נדודי שינה", points:"K1 (מוקסה ישירה בלבד), Anmian" },
    ]},
  { id:"subcostal", name:"תת-צלעי", nameEn:"Subcostal", element:"wood", points:"ST21L, ST21R",
    description:"אזור תת-צלעי — ST21 משני הצדדים. שני אזורים קליניים נפרדים: ימין = שאו יאנג (מרה/ליחה), שמאל = יאנג מינג (קיבה/חום-רטיבות). מתח תת-צלעי = סימן היכר לסטגנציית כבד",
    diagnosticGuide:"ST21R קשיח → עץ Ban Xia (ליחה-שומן, Wen Dan Tang). ST21L רך → רטיבות סוכר/לבלב. ST21L קשיח → עץ Huang Lian (חום-רטיבות, Huang Lian Tang). פעימה צפה = שי (Gui Zhi), פעימה עמוקה = שו (Tian Wang Bu Xin Dan)",
    subcostalZones: {
      right: {
        name:"תת-צלעי ימין — שאו יאנג",
        nameEn:"Right Subcostal — Shao Yang",
        layer:"שאו יאנג (Shao Yang)",
        element:"wood",
        organ:"מרה / כבד",
        keyPoint:"ST21R + Pigen",
        description:"אזור שאו יאנג — מתח או קשיחות מצד ימין מצביע על בעיית ציר (Pivot). קשיחות = ליחה-שומן מצריכת חלבון מהחי, שומן, מוצרי חלב. גוש = Pigen (גוש קבוע בצד ימין בלבד).",
        findings:["קשיחות (ליחה-שומן)","מתח (סטגנציה)","גוש Pigen","רגישות בלחיצה","מלאות"],
        trees:["Ban Xia — ליחה (Wen Dan Tang, Ban Xia Xie Xin Tang)","Chai Hu — הרמוניזציה (Xiao Chai Hu Tang, Da Chai Hu Tang)"],
        formulas:["Xiao Chai Hu Tang — הרמוניזציית שאו יאנג","Da Chai Hu Tang — שאו יאנג + יאנג מינג (עם עצירות)","Wen Dan Tang — ליחה-שומן בסרעפת","Chai Hu Jia Long Gu Mu Li Tang — סטרס/אוטואימוני"],
        clinicalNotes:"טעם מר בבוקר, חום וצמרמורות לסירוגין, כאב צלעות = אישור שאו יאנג. Dan Nang Xin רגיש = אישור מרה."
      },
      left: {
        name:"תת-צלעי שמאל — יאנג מינג",
        nameEn:"Left Subcostal — Yang Ming",
        layer:"יאנג מינג (Yang Ming)",
        element:"fire",
        organ:"קיבה / טחול",
        keyPoint:"ST21L + CV12",
        description:"אזור יאנג מינג — שמאל מתקשר לקיבה ולחום-רטיבות. רכות = רטיבות מסוכר/פחמימות ריקות (לבלב חלש). קשיחות = חום-רטיבות (Huang Lian). קשיחות עם דא באו/שו לי = בלבול מנטלי.",
        findings:["רכות (רטיבות/סוכר)","קשיחות (חום-רטיבות)","מתח (כבד על קיבה)","פעימה צפה (שי)","פעימה עמוקה (שו)"],
        trees:["Huang Lian — חום-רטיבות (Huang Lian Tang, Ban Xia Xie Xin Tang)","Da Huang — שילשול חום (Cheng Qi Tang)"],
        formulas:["Huang Lian Tang — חום-רטיבות קיבה","Ban Xia Xie Xin Tang — חום+קור מעורב בקיבה","Xiao Xian Xiong Tang — ליחה-חום בחזה","Zuo Jin Wan — כבד עולה על קיבה (חומצת קיבה)"],
        clinicalNotes:"חומצת קיבה, בחילות, ריח רע מהפה = חום-רטיבות. תשוקה למתוק + רכות = רטיבות טחול. פעימה צפה = שי → Gui Zhi, פעימה עמוקה = שו → Tian Wang Bu Xin Dan."
      }
    },
    findings:["מתח ימין (שאו יאנג)","מתח שמאל (יאנג מינג)","מתח דו-צדדי","רגישות","קשיחות ימין (ליחה)","קשיחות שמאל (חום-רטיבות)","גוש Pigen (ימין)","רכות שמאל (רטיבות)","פעימה צפה (שי)","פעימה עמוקה (שו)"],
    protocols:[
      { name:"שאו יאנג (ימין)", points:"ST21R, Pigen, GB34R, GB40R, Dan Nang Xin, TW5R" },
      { name:"יאנג מינג — חום-רטיבות (שמאל)", points:"ST21L, CV12, ST44B, LI11R, PC6L" },
      { name:"כבד-קיבה (שמאל)", points:"ST21L, CV12, LV14R, PC6L, ST36L" },
      { name:"כבד עולה על קיבה", points:"ST21L&R, CV12, LV3B, ST36B, SP4 (רגל חלשה)" },
      { name:"סטגנציית צ'י כבד", points:"ST21L, ST25L, LV3B, LV14R, GB34R" },
      { name:"דאי מאי + תת-צלעי", points:"ST21L&R, GB41, GB26, Huanzhong (רגל אטונית)" },
      { name:"מתח דו-צדדי (שי)", points:"ST21L&R, LV3B, LI4B, PC6B, ST34R" },
      { name:"שאו יאנג + יאנג מינג (דו-צדדי)", points:"ST21L&R, Pigen, CV12, GB34R, ST44B" },
    ]},
  { id:"epigastric", name:"אפיגסטרי", nameEn:"Epigastrium", element:"earth", points:"CV12",
    description:"קיבה — עיכול, גזים, צלילי מים. 'אכילת זוחל' = סטגנציית קיבה",
    findings:["צליל מים","גז","כאב בלחיצה","קשיחות","לוח קשיח"],
    protocols:[
      { name:"קיבה צ'י יו (יאנג)", points:"ST34R, ST44B, SP4B. +CV11/CV9 אם PP מתחת ל-CV12" },
      { name:"קיבה הצטברות (יין)", points:"CV13, CV12, CV11, ST21L&R" },
      { name:"קיבה פנים/לסת", points:"ST6L, PC6L" },
      { name:"קו צ'י קיבה (גזים)", points:"קו ST Qi ברגל חזקה (L)" },
    ]},
  { id:"navel", name:"טבור", nameEn:"Navel", element:"earth", points:"CV8",
    description:"טחול — חולשת מבנה, חסר צ'י. טבור נע = חולשה מבנית. כיוון הזזת הטבור מעיד: למעלה=קיבה שי/כליות שו, למטה=כליות/GIT, שמאלה=כבד שי, ימינה=ריאות/כבד Xue Yu",
    navelShifting: true,
    findings:["רכות","הזזה למעלה","הזזה למטה","הזזה שמאלה","הזזה ימינה","אטוניה","רגישות סביב"],
    protocols:[
      { name:"טחול צ'י שו", points:"SP4, SP3, או SP4½ ברגל חלשה בלבד" },
      { name:"מוקסה CV8", points:"CV8 — מוקסה על מלח בלבד" },
      { name:"תחליף CV6 חמור", points:"Qi Zhong Bian (3 נקודות סביב הטבור)" },
      { name:"סוכר/תשוקות", points:"Bai Chong Wu (שמאל), Nei Huai Jian" },
    ]},
  { id:"left", name:"בטן שמאל", nameEn:"Left Abdomen", element:"wood", points:"ST25L",
    description:"כבד — רמת צ'י. סטגנציה תפקודית, סטרס, הורמונים, מתח שריר רקטוס שמאלי. קשור להפרעות שחלות/אשכים ומתח רגשי. מתח קיצוני ברקטוס שמאלי = ג'ואה יין (Wu Mei Wan). סטגנציית דם 'חדשה' → עץ Tao Ren. פעימה עמוקה עם PP = צ'י כבד, דורש Long Gu + Mu Li לעיגון",
    findings:["מתח","כאב","קשיחות","גוש","מתח רקטוס","פעימה עמוקה"],
    protocols:[
      { name:"הרמוניה כללית", points:"ST25L, TW5R, LV14R, LV3B, LV5L, SP10L" },
      { name:"כבד מרידיאן (יפני)", points:"ST25L, LV4, LV5, SP10, LU5" },
      { name:"כבד מרידיאן (מערבי)", points:"ST25L, LV4, LV8" },
      { name:"חסר דם כבד", points:"LV3, SP6, LV8, CV4" },
      { name:"כבד יאנג + דאי מאי", points:"LI4L, ST25L, ST34L, SP10L, LV5L, LV3L" },
      { name:"כבד חום", points:"ST25L, LV8L, LV4L. +K10L לחום חמור, +K6L ליין שו" },
    ]},
  { id:"right", name:"בטן ימין", nameEn:"Right Abdomen", element:"metal", points:"ST25R",
    description:"ריאות/מעי גס — רמת דם (Xue). סטגנציית דם כרונית 'ישנה', חיסון/לימפה, דלקת מעי כרונית. ממצאי Xue Yu: קשיחות, גושים קבועים (Ji), בטן כלוח, עור יבש/מפוספס, פיגמנטציה כהה, ורידים סגולים תת-לשוניים. צמחים עדיפים על דיקור — עץ Da Huang לסטגנציה ישנה. PP פריאומביליקלי ימין = 10 נק' ב-Xue Yu",
    findings:["מתח","רגישות","קשיחות","גוש קבוע (Ji)","עור יבש/מפוספס","פעימה עמוקה"],
    protocols:[
      { name:"סטגנציית מתכת (כתף/צוואר)", points:"ST25/26R, LU2R, LU9L" },
      { name:"מתכת עודף (כתף/גוף עליון)", points:"TW3B, SI3B, LI4B, LU5R, LU5/6R, LU8" },
      { name:"מתכת חסר (חיסון/ריאות)", points:"LI10, קו Qi (מוקסה על מחט דו-צדדי)" },
      { name:"נשימה/צפצופים", points:"K26R, K25R, K24R, K23R" },
      { name:"חיסון חלש", points:"SI17, TW16, TW17" },
      { name:"סטגנציה מעי", points:"4 שערים (LI4/LV3), ST37, ST39" },
    ]},
  { id:"lower", name:"בטן תחתונה", nameEn:"Lower Abdomen", element:"water", points:"CV4, CV6",
    description:"כליות — חיוניות, הורמונים, אנרגיה. בדיקת רגל היפרטונית (יין) vs אטונית (יאנג)",
    findings:["הדוקות","אטוניה","קור","רגישות עמוקה","Linea Alba עמוקה"],
    protocols:[
      { name:"הרמוניה כללית", points:"Qipang, ST27, CV6/4, K27, K16, LV8, K10, K6, K1" },
      { name:"כליות צ'י יאנג (קור)", points:"Qipang R, CV6, K27L, SP9R, K7R (מוקסה על מחט ×2)" },
      { name:"כליות צ'י יין (חום)", points:"K27R, K16L, CV4, ST27L, LV8L, K10L, K6L (רגל היפרטונית)" },
      { name:"טראומת לידה (בטן רגישה)", points:"נקודות אוזן קודם: Shen Men, נקודת 0, Tranquilizer, אדרנל/כליות" },
    ]},
];

const EV_PROTOCOLS = [
  { id:"ev1", name:"Ren Mai", nameHe:"רן מאי", element:"fire", indication:"מצוקה לבבית ונפשית", points:"CV12, CV4/5, ST25L, LU7B, K6B" },
  { id:"ev2", name:"Yin Wei Mai", nameHe:"יין ווי מאי", element:"fire", indication:"הפרעות נפשיות ממקור קיבתי מכני", points:"CV12, ST25L, PC6L" },
  { id:"ev3", name:"Du Mai", nameHe:"דו מאי", element:"water", indication:"אף, אלרגיות, עמוד שדרה", points:"Shikishima (Josen), DU14, DU13, DU12" },
  { id:"ev4", name:"Yang Wei Mai", nameHe:"יאנג ווי מאי", element:"wood", indication:"סטרס בכתפיים, צוואר, פנים", points:"Huato T1-T3, B43" },
  { id:"ev5", name:"Dai Mai", nameHe:"דאי מאי", element:"wood", indication:"מיגרנות, כאב גב תחתון", points:"GB41, Huanzhong (רגל אטונית), נקודות סקרואילאק" },
  { id:"ev6", name:"Chong Mai", nameHe:"צ'ונג מאי", element:"earth", indication:"היפרמנוריאה, חולשת GIT", points:"SP4 (רגל חזקה בלבד), SP10, ST30, Zi Gong" },
  { id:"ev7", name:"Yang Qiao Mai", nameHe:"יאנג צ'יאו מאי", element:"water", indication:"כאב גב, עייפות בוקר", points:"Xiajishu, Yaoyan (רגל אטונית), SI9, SI10" },
  { id:"ev8", name:"Yin Qiao Mai", nameHe:"יין צ'יאו מאי", element:"water", indication:"סטגנציית דם באגן, פרוסטטה, BPH", points:"K6, Yi Jing (צד חזק), נקודות אגן" },
];

const EXTRA_POINTS = [
  { category:"ראש, פנים וצוואר", points:[
    { name:"Anmian", nameHe:"אנמיאן", location:"בתהליך המסטואיד במקום PP", treats:"נדודי שינה, סטרס", usage:"בשילובי כבד צד ימין" },
    { name:"Liaochengjiang", nameHe:"ליאוצ'נגג'יאנג", location:"1 צון לטרלי ל-Ren 24 על הלסת", treats:"הפרעות חניכיים, קשיחות פה", usage:"עם ST6, ST4" },
    { name:"Yiming", nameHe:"יימינג", location:"ליד האוזן והמסטואיד", treats:"טינטון, כאבי ראש, חריקת שיניים", usage:"שילובי יין ווי או יאנג ווי פנים ימין" },
    { name:"Si Shen Cong", nameHe:"סי שן צונג", location:"4 נקודות, 1 צון מ-DU20", treats:"הרגעת שן, עיניים ואוזניים, העלאת יאנג", usage:"שילובי טחול" },
    { name:"Bitong", nameHe:"ביטונג", location:"הנקודה הגבוהה ביותר בחריץ הנזולביאלי", treats:"הפרעות אף, סינוסיטיס", usage:"שילובי טאי יאנג/אף" },
  ]},
  { category:"בטן ואגן", points:[
    { name:"Zi Gong", nameHe:"ז'י גונג", location:"3 צון לטרלי ל-Ren 3", treats:"וויסות מחזור, כאב", usage:"הפרעות גינקולוגיות מרידיאן כבד" },
    { name:"Yi Jing", nameHe:"יי ג'ינג", location:"בטן תחתונה", treats:"הפרעות מיניות", usage:"צד חלש ליאנג צ'יאו / צד חזק ליין צ'יאו עם BPH" },
    { name:"Tituo", nameHe:"טיטואו", location:"4 צון לטרלי ל-Ren 4", treats:"קריסת יאנג טחול, הרניה, צניחת רחם", usage:"מוקסה בצד חלש, שילוב יאנג צ'יאו כליות" },
    { name:"Qi Pang", nameHe:"צ'י פאנג", location:"ליד Ren 4", treats:"כל הפרעות כליות", usage:"צד חלש ליאנג צ'יאו / חסר כליות" },
    { name:"Qi Zhong Bian", nameHe:"צ'י ג'ונג ביאן", location:"קבוצת נקודות סביב הטבור", treats:"חסר טחול חמור, שלשול", usage:"תחליף ל-CV6 במקרים חמורים" },
  ]},
  { category:"גפיים תחתונות", points:[
    { name:"Xi Ding", nameHe:"שי דינג", location:"על הברך", treats:"כאב ברך קיבתי", usage:"רק אם ST34 באותו צד רגיש" },
    { name:"Dan Nang Xin", nameHe:"דאן נאנג שין", location:"על השוק", treats:"הפרעות מרה/כבד", usage:"רגל חזקה בלבד, שאו יאנג, עם GB40" },
    { name:"Bai Chong Wu", nameHe:"באי צ'ונג וו", location:"1 צון מעל SP10, ירך פנימי", treats:"הפרעות עור, הפחתת תשוקה לסוכר", usage:"צד שמאל. רגל חזקה=קיבה, רגל חלשה=טחול" },
    { name:"Nei Huai Jian", nameHe:"ניי הואי ג'יאן", location:"קרסול מדיאלי", treats:"איזון סוכר, התכווצויות שוק לילה", usage:"רגל חלשה, שילובי טחול" },
  ]},
  { category:"גפיים עליונות", points:[
    { name:"Er Bai", nameHe:"אר באי", location:"2 נקודות על האמה בין הגידים", treats:"טחורים", usage:"חסר צ'י טחול או שילובי יין ווי/פריקרד מסטרס" },
    { name:"Luo Zhen", nameHe:"לואו ז'ן", location:"גב כף היד בין מטקרפל 2-3", treats:"כאב צוואר וכתף", usage:"שילובי כבד/יאנג ווי ימין" },
    { name:"Jian Nei Ling", nameHe:"ג'יאן ניי לינג", location:"חזית מפרק הכתף", treats:"כאב צוואר/כתף, חריקת שיניים מסטרס", usage:"שילובי כבד/יאנג ווי (סוג מעי גס)" },
    { name:"Yao Tong Dian", nameHe:"יאו טונג דיאן", location:"גב כף היד", treats:"כאב גב תחתון", usage:"באותו צד ככאב, שילובי כבד/דאי מאי" },
  ]},
  { category:"גב ועמוד שדרה", points:[
    { name:"Huanzhong", nameHe:"הואנג'ונג", location:"על הישבן ליד GB30", treats:"כאב גב תחתון, מיגרנות, סטרס", usage:"רגל אטונית, פרוטוקול דאי מאי" },
    { name:"Pigen", nameHe:"פיגן", location:"3.5 צון לטרלי ל-L1", treats:"הפרעות כבד, סטגנציית דם", usage:"צד ימין בלבד, שאו יאנג" },
    { name:"Shikishima (Josen)", nameHe:"שיקישימה (ג'וסן)", location:"גוף חוליית L5", treats:"דו מאי, יאנג צ'יאו", usage:"נקודת אבחון וטיפול ראשית" },
    { name:"Xiajishu / Yaoyan", nameHe:"שיאג'ישו / יאויאן", location:"ליד L3-L4", treats:"כאב גב עליון ותחתון", usage:"צד קשיח, שילוב כליות/יאנג צ'יאו" },
    { name:"Jiehexue", nameHe:"ג'יהשואה", location:"3.5 צון לטרלי ל-C7", treats:"נשימה או חרדה (שמאל), יאנג ווי (ימין)", usage:"שמאל לנשימה/חרדה, ימין ליאנג ווי" },
    { name:"Bailuo (Jingbailuo)", nameHe:"באילואו", location:"2 צון מעל DU14 ו-1 צון לטרלי", treats:"הפרעות נשימה", usage:"שילובי טאי יאנג ומתכת" },
  ]},
];

const XUE_YU_SIGNS = [
  { sign:"פיגמנטציה עפעפיים (ועור סביב עיניים)", male:10, female:10 },
  { sign:"פיגמנטציה פנים", male:2, female:2 },
  { sign:"עור יבש (עם סדקים)", male:2, female:5 },
  { sign:"כהות שפתיים", male:2, female:2 },
  { sign:"כהות חניכיים", male:10, female:5 },
  { sign:"לשון: סגולה, אדומה, או שתיהן", male:10, female:10 },
  { sign:"עורקים דקים ועדינים", male:5, female:5 },
  { sign:"כתמים כהים (extravasation תת-עורית)", male:2, female:10 },
  { sign:"אריתמה פלמרית (ידיים אדומות חמות)", male:2, female:5 },
  { sign:"רגישות פריאומביליקלית (LLQ — סימן 5)", male:5, female:4 },
  { sign:"רגישות פריאומביליקלית (LRQ — דומיננטי)", male:10, female:10 },
  { sign:"רגישות פריאומביליקלית (מרכז — סימן 6)", male:5, female:5 },
  { sign:"PP אזור ileocecal (LRQ — סימן 7)", male:5, female:5 },
  { sign:"PP היפוכונדריום (סימן 8)", male:5, female:5 },
  { sign:"טחורים או פיסורה אנאלית", male:10, female:5 },
  { sign:"הפרעות מחזור", male:0, female:10 },
];

const TREATMENT_RULES = [
  { icon:"🔥", rule:"חום לפני קור", detail:"תמיד מטפלים בחום (Heat) לפני שמטפלים בקור (Cold)" },
  { icon:"💪", rule:"שי לפני שו", detail:"מטפלים בעודף (Excess) לפני שמטפלים בחסר (Deficiency)" },
  { icon:"🌬️", rule:"טאי יאנג ראשון", detail:"אם קיים מצב טאי יאנג (אלרגיה/נשימתי) — מטפלים בו ראשון" },
  { icon:"😴", rule:"סיבה אורגנית לשינה", detail:"תמיד מטפלים בסיבה אורגנית (כמו השתנה לילית) לפני פרוטוקול נדודי שינה כללי" },
  { icon:"🔙", rule:"כלל הגב/חזית", detail:"מבנה חזק → מתחילים מהגב. מבנה חלש → מתחילים מהחזית" },
  { icon:"📅", rule:"בדיקה אחרי שבוע", detail:"בודקים תגובה לפורמולה אחרי בדיוק שבוע ומתאימים בהתאם" },
];

const NEEDLE_MOXA = [
  { technique:"טוניפיקציה (שו)", description:"מחטים דקות, פחות נקודות, גירוי קל. מחכים שהרקמה תתהדק סביב המחט לפני שליפה — 'להוציא את הצ'י'", forType:"חלש" },
  { technique:"סדציה (שי)", description:"מחטים עבות, גירוי חזק ליצירת כאב מקרין או דימום מקומי", forType:"חזק" },
  { technique:"Fire Needling", description:"טכניקה למיקומי שו: מחט נכנסת עמוק, מסתובבת לתפוס צ'י, נשלפת בהדרגה לפצוע רקמה ולהזרים דם לשטח", forType:"חסר" },
  { technique:"מוקסה על מחט (NM)", description:"לנקודות עמוקות מ-0.5 צון להפעלת יאנג צ'י", forType:"כל" },
  { technique:"מוקסה ישירה", description:"לנקודות שטח (מעל 0.3 צון) לוויסות צ'י ודם", forType:"כל" },
  { technique:"מוקסה על מלח", description:"באופן בלעדי ל-CV8 בטבור", forType:"טחול" },
  { technique:"ספירת מוקסה — קו C", description:"קו C (חסר) דורש 2 סבבי מוקסה (מחט + ישירה). קווים A/B (עודף) — מחט עבה, 1 סבב מוקסה או ללא", forType:"גב" },
  { technique:"Press Tack (Take Away)", description:"מחטי סדציה שנשארות עד שבוע לשמירה על אפקט טיפולי. עובי ואורך המחט קובעים את עוצמת הגירוי", forType:"שי" },
];

const CONTRAINDICATIONS = [
  { icon:"⚠️", warning:"גרעינים מונבטים (Gu Ya, Ma Ya)", detail:"אסור לתת לנשים מניקות — עוצרים חלב!" },
  { icon:"⚠️", warning:"טאי יאנג עליון — גב", detail:"אין להשתמש בפרוטוקול גב עליון על מטופלים עם לחץ דם בית-שחי גבוה — גורם להתכווצות מוגזמת" },
  { icon:"⚠️", warning:"בדיקת Splashing Water", detail:"לא לחזור על מישוש יותר מכמה שניות — כואב למטופל" },
  { icon:"⚠️", warning:"ויאגרה", detail:"החומר מזהיר מויאגרה ומציע טוניקי יאנג צמחיים כחלופה אנטומית בטוחה יותר" },
  { icon:"⚠️", warning:"ירידה מהירה במשקל / צום", detail:"עלול לגרום להתלקחות אלרגית פתאומית — זהירות במטופלי מתכת/ריאות" },
];

const DIET_RULES = {
  general: [
    { rule:"זמן קבוע", detail:"אוכלים בשעות קבועות — לא מחכים לרעב" },
    { rule:"לעיסה יסודית", detail:"לועסים לאט ויסודי. דיקור פנים אם צריך להרפות לסת" },
    { rule:"שליטת מנות", detail:"משתמשים בקערה וכף במקום צלחת. מחכים 25 דקות אחרי אכילה לתחושת שובע" },
    { rule:"התאמת סוג", detail:"מתאימים סוג מזון לאבחנה רק אחרי שכללים 1-3 מיושמים" },
  ],
  byElement: [
    { element:"earth", avoid:"מוצרי חלב, שמרים, פחמימות פשוטות", note:"אוכלים מהירים — לרוב בעיות לסת/שיניים ('אכילת זוחל')" },
    { element:"water", avoid:"מלח וקפאין עודפים", note:"תשוקה למלח = תשישות אדרנל/אנדוקרינית" },
    { element:"wood", avoid:"מזון שמנוני, אכילה מאוחרת בלילה", note:"צום — ההתערבות ההתנהגותית החשובה ביותר לדפוסי כבד" },
    { element:"metal", avoid:"ירידה אגרסיבית במשקל, צום קיצוני", note:"עלול לגרום להתלקחויות אלרגיות" },
    { element:"fire", avoid:"", note:"מטופלי חום (יאנג מינג) נוטים לתשוקה למזון גולמי ובשר" },
  ],
};

const PALPATION_TECHNIQUE = [
  { level:1, name:"שטח (Level 1)", description:"הערכת איכות עור — לח vs יבש, טמפרטורה. משתמשים בכף היד (H8)", icon:"🖐️" },
  { level:2, name:"אמצע (Level 2)", description:"הרגשת רמת צ'י — סטגנציה תפקודית, טונוס שרירי. לחץ בינוני", icon:"👆" },
  { level:3, name:"עומק (Level 3)", description:"לחיצה בזווית 90° — הערכת קשיחות איבר, גושים קבועים, פעימה עמוקה", icon:"👊" },
];

const PALPATION_SIGNS = [
  { finding:"קשיחות / לוח קשיח", meaning:"שי (עודף) או Xue Yu (סטגנציית דם)", color:"#ef4444" },
  { finding:"רכות / אטוניה", meaning:"שו (חסר) או רטיבות פשוטה", color:"#3b82f6" },
  { finding:"ריבאונד (הרקמה דוחפת חזרה)", meaning:"אישור מצב שי", color:"#f59e0b" },
  { finding:"פעימה צפה", meaning:"שי — לעיתים דורש עץ Gui Zhi", color:"#f97316" },
  { finding:"פעימה עמוקה", meaning:"שו — חסר יין לב/כליות, לעיתים Tian Wang Bu Xin Dan", color:"#8b5cf6" },
  { finding:"כאב מקרין (הקרנה)", meaning:"מעורבות ברמת מרידיאן ולא רק סטגנציה מקומית", color:"#22c55e" },
];

const PALPATION_WARNINGS = [
  { warning:"גוש קבוע (Ji)", detail:"אסור ללחוץ ישירות על הגוש — רק על השוליים שלו כדי למנוע פגיעה" },
  { warning:"בדיקת Splashing Water", detail:"לא לחזור על מישוש יותר מכמה שניות — כואב למטופל" },
  { warning:"תגובת פנים", detail:"תמיד לעקוב אחרי הבעת הפנים של המטופל בלחיצה עמוקה — כאב מקרין מאשר מעורבות מרידיאנית" },
];

const ST21_GUIDE = [
  { side:"ימין", finding:"קשיחות", element:"earth", tree:"Ban Xia", meaning:"ליחה-לב משומן/חלבון מהחי → מתח סרעפת וצוואר", formula:"Wen Dan Tang, Ban Xia Xie Xin Tang", color:"#b45309" },
  { side:"שמאל", finding:"רכות", element:"earth", tree:"Huang Lian", meaning:"רטיבות מסוכר/פחמימות ריקות → גירוי לבלב", formula:"Er Chen Tang, Ping Wei San", color:"#f59e0b" },
  { side:"שמאל", finding:"קשיחות", element:"fire", tree:"Huang Lian", meaning:"דא באו/שו לי → משפיע על מוח, בלבול מנטלי, התנהגות מאנית", formula:"Huang Lian Tang, Huang Lian E Jiao Tang", color:"#ef4444" },
];

const ST25_COMPARISON = [
  { side:"שמאל (ST25L)", element:"wood", level:"צ'י (Qi)", nature:"תפקודי — סטגנציה, סטרס, מתח מרידיאני", stasis:"סטגנציית דם 'חדשה' — גינקולוגי, שחלות, מתח תפקודי", tree:"Tao Ren, Chai Hu", jueYin:"מתח קיצוני ברקטוס שמאלי = ג'ואה יין → Wu Mei Wan", xueYuScore:"PP פריאומביליקלי שמאל = 5 נק'", color:"#22c55e" },
  { side:"ימין (ST25R)", element:"metal", level:"דם (Xue)", nature:"מבני — הצטברות כרונית, חיסון, דלקת מעי", stasis:"סטגנציית דם 'ישנה' — גושים Ji, קרוהן, דלקת כרונית", tree:"Da Huang (עדיף על דיקור)", jueYin:"—", xueYuScore:"PP פריאומביליקלי ימין = 10 נק' (דומיננטי)", color:"#6b7280" },
];

const DIAGNOSTIC_SIGNS = [
  { name:"סימן האצבע השנייה", description:"אצבע שנייה גדולה פיזית מהראשונה → בעיות קיבה מבניות (constitutional)" },
  { name:"יחס ראש-גוף", description:"ראש גדול מ-1/7 מאורך הגוף = מבנה חזק. קטן מ-1/7 = מבנה חלש" },
  { name:"Linea Alba עמוקה", description:"רמה 3 — סימן היכר לחסר יאנג כליות. טיפול: Ba Wei Di Huang Wan" },
  { name:"Pinch Test", description:"עור בריא ניתן לצביטה בקלות. עור 'עורי' = חסר צ'י כליות או יין. חוסר לחות/גמישות = חסר דם או יין ריאות" },
  { name:"אכילת זוחל (Reptilian Eating)", description:"מטופלים שאוכלים מהר מדי — אינדיקטור התנהגותי לסטגנציית קיבה (CV12)" },
  { name:"טמפרטורת עור", description:"נבדקת עם כף היד (H8). קור בגב תחתון = חסר יאנג כליות. עור מקולף/יבש = התייבשות נוזלי גוף" },
];

const CASE_STUDIES = [
  { title:"הרופאה", description:"רופאה עם לחץ בחזה ובעיות עיכול. היססה לקחת Lexapro. טופלה בהצלחה עם פורמולת 'אדמה' לקיבה — הלחץ בחזה והבעיות העיכוליות נפתרו ללא תרופות פסיכיאטריות.", elements:["earth","fire"], keyLesson:"CV14 = מכני, CV15 = נפשי. לפעמים פורמולה לקיבה פותרת 'בעיות לב'" },
  { title:"הסטודנטית בת 27", description:"סטודנטית לרפואה סינית עם מחזור לא סדיר, דימום טרום-מחזורי, כאבי מחזור. מבנה 'רטוב' (כפות ידיים/רגליים לחות), כתף שמאל פנימה. צרידות מהירה (תת-לבבי/אש), רגישות ב-CV6, Qipang, ואזורי יין כבד/יין צ'יאו.", elements:["water","fire","wood"], keyLesson:"ריבוי ממצאים — צריך לתעדף לפי כללי הטיפול" },
  { title:"מטופל CVA/מסתם", description:"מטופל שעבר CVA קטן עם בעיית מסתם לב. האבחנה קישרה בעיית מסתם לבעיות כליות. דם חומצי יוצר נטייה לקרישה. המלצה: תזונה טבעונית להפחתת חומציות דם + Dan Shen לקירור דם והאטת קצב לב.", elements:["water","fire"], keyLesson:"קישור כליות-לב, תזונה כטיפול ראשוני" },
];

const BACK_LINES = [
  { line:"A", name:"Huato / 0.5 cun", type:"acute", indication:"מצבים חריפים — שי (עודף)", treatment:"סדציה, מחט עבה, 1 סבב מוקסה או ללא" },
  { line:"B", name:"Chronic / 3 cun", type:"chronic", indication:"מצבים כרוניים (2+ חודשים) — שינויים מבניים", treatment:"סדציה, מחט עבה" },
  { line:"C", name:"Opposite Side", type:"subacute", indication:"תת-חריף/כרוני — שו (חסר)", treatment:"טוניפיקציה + 2 סבבי מוקסה (מחט + ישירה)" },
];

const CONSTITUTION_TYPES = [
  { type:"strong", name:"חזק (שי)", description:"עור עבה, שרירים מפותחים, טונוס מנוחה גבוה. ראש > 1/7 מהגוף", treatment:"מחטים עבות, יותר נקודות, סדציה חזקה, מתחילים מהגב", icon:"💪" },
  { type:"mid", name:"בינוני", description:"ראש נכנס בדיוק ~7 פעמים באורך הגוף", treatment:"תמיכה בסיסית למערכת העיכול", icon:"⚖️" },
  { type:"weak", name:"חלש (שו)", description:"עור דק, טונוס שרירי נמוך, רגישות יתר. ראש < 1/7 מהגוף", treatment:"מחטים דקות, פחות נקודות, טוניפיקציה, מוקסה, מתחילים מהחזית", icon:"🌙" },
];

const TONGUE_PULSE = [
  { pattern:"חום שי (עודף חום)", tongue:"אדום כהה עם ציפוי", pulse:"חזק, מהיר, מלא; צון שי", color:"#ef4444" },
  { pattern:"חום שו (חסר חום)", tongue:"אדום, יבש, ללא ציפוי", pulse:"דק, מהיר, צף", color:"#f97316" },
  { pattern:"קור שי (עודף קור)", tongue:"ללא צבע או סגול-כחול, יבש", pulse:"מהיר/איטי, מתוח, חזק", color:"#3b82f6" },
  { pattern:"קור שו (חסר קור)", tongue:"חיוור, סימני שיניים, רטוב", pulse:"עמוק, איטי/מהיר, חלש, דק", color:"#06b6d4" },
  { pattern:"כבד (עץ)", tongue:"לעיתים סגולה (Xue Yu)", pulse:"מתוח (Wiry)", color:"#22c55e" },
  { pattern:"טחול (אדמה)", tongue:"חיוורת, סימני שיניים, ציפוי לבן", pulse:"חלש", color:"#b45309" },
];

const WEAK_QI_SIGNS = [
  { sign:"גוף כבד ('שרירי סוכר')", points:10 },
  { sign:"אנרגיה נמוכה/ללא אנרגיה", points:10 },
  { sign:"מתעייף בקלות", points:10 },
  { sign:"חולשת מערכת עיכול (GIT)", points:10 },
  { sign:"חיסון חלש (הצטננויות תכופות)", points:8 },
  { sign:"לשון חיוורת ואטונית", points:8 },
  { sign:"דופק חלש", points:8 },
  { sign:"בטן חלשה/אטונית", points:8 },
  { sign:"ישנוניות במהלך היום", points:6 },
  { sign:"עיניים עמומות / קול חלש", points:6 },
  { sign:"חולשה תת-טבורית ורגישות (SP/K)", points:6 },
  { sign:"תיאבון ירוד", points:4 },
  { sign:"נבהל בקלות", points:4 },
  { sign:"צואה רופפת", points:4 },
];

const QI_STAGNATION_SIGNS = [
  { sign:"נטייה לסטגנציה (מצב רוח/סטרס)", points:18 },
  { sign:"גודש גרון (חומצת קיבה)", points:12 },
  { sign:"כאב ראש עמום (משתנה/צמרמורות)", points:8 },
  { sign:"גודש חזה (אפיגסטריום)", points:8 },
  { sign:"סטגנציית היפוכונדריום", points:8 },
  { sign:"נפיחות בטנית", points:8 },
  { sign:"תסמינים מחמירים מחזורית", points:8 },
  { sign:"קושי לקום בבוקר (עצבנות)", points:8 },
  { sign:"אסציטס (טימפניות בטנית)", points:8 },
  { sign:"גזים / הנפחה", points:6 },
  { sign:"גיהוקים", points:4 },
  { sign:"תחושת אצירת שתן", points:4 },
];

const WATER_RETENTION_SIGNS = [
  { sign:"בצקת / צלילי מים בקיבה (Splashing)", points:15 },
  { sign:"תפליט פלאורלי / בצקת לבבית / אסציטס", points:15 },
  { sign:"קשיחות בוקר", points:7 },
  { sign:"ירידה בנפח שתן", points:7 },
  { sign:"כאב ראש פועם (תחושת כובד)", points:6 },
  { sign:"מחלת תנועה", points:5 },
  { sign:"סחרחורת / קלות ראש", points:5 },
  { sign:"התעלפות (Syncope)", points:5 },
  { sign:"PP אפיאומביליקלי עומק 3 (SP/K)", points:5 },
  { sign:"שלשול מימי", points:5 },
  { sign:"דיורזיס (השתנה מרובה)", points:5 },
  { sign:"כיח מוגזם", points:4 },
  { sign:"כובד גוף", points:3 },
  { sign:"כאב ראש עמום", points:3 },
  { sign:"נזלת מימית", points:3 },
  { sign:"רגישות לרעש (Hypersialosis)", points:3 },
  { sign:"בחילות / הקאות", points:3 },
  { sign:"גרגורי בטן מוגברים", points:3 },
];

const NAVEL_SHIFTING = [
  { direction:"למעלה", icon:"\u2B06\uFE0F", meaning:"צעירים: קיבה שי (עודף). מבוגרים: כליות שו (חסר)", color:"#f59e0b" },
  { direction:"למטה", icon:"\u2B07\uFE0F", meaning:"כליות שי (כבד), כליות שו (יאנג צ'יאו), או חולשת GIT (קיבה/טחול)", color:"#3b82f6" },
  { direction:"שמאלה", icon:"\u2B05\uFE0F", meaning:"כבד שי (עודף) — סטגנציית צ'י כבד", color:"#22c55e" },
  { direction:"ימינה", icon:"\u27A1\uFE0F", meaning:"ריאות שי (דלקת), ריאות שו (עם כליות), או כבד שי (Xue Yu)", color:"#6b7280" },
];

// ===== STORAGE HELPERS =====
const storage = {
  async save(key, data) {
    try {
      localStorage.setItem(key, JSON.stringify(data));
      return true;
    } catch { return false; }
  },
  async load(key) {
    try {
      const r = localStorage.getItem(key);
      return r ? JSON.parse(r) : null;
    } catch { return null; }
  },
  async list(prefix) {
    try {
      return Object.keys(localStorage).filter(k => k.startsWith(prefix));
    } catch { return []; }
  },
  async remove(key) {
    try {
      localStorage.removeItem(key);
      return true;
    } catch { return false; }
  }
};

// ===== SMALL COMPONENTS =====
const ElementBadge = ({ element, small }) => {
  const el = ELEMENTS[element]; if (!el) return null;
  return <span style={{ display:"inline-flex", alignItems:"center", gap:4, padding:small?"2px 8px":"3px 10px", borderRadius:20, backgroundColor:el.bg, border:`1px solid ${el.border}`, color:el.color, fontSize:small?11:12, fontWeight:600, whiteSpace:"nowrap" }}>{el.icon} {el.name}</span>;
};

const HeatColdBadge = ({ hc }) => {
  const m = { heat:{ bg:"#7f1d1d", color:"#fca5a5", label:"🔥 חם" }, cold:{ bg:"#1e3a5f", color:"#93c5fd", label:"❄️ קר" }, neutral:{ bg:"#2d2d44", color:"#94a3b8", label:"↔️ ניטרלי" } };
  const v = m[hc] || m.neutral;
  return <span style={{ padding:"2px 8px", borderRadius:10, fontSize:10, fontWeight:600, background:v.bg, color:v.color }}>{v.label}</span>;
};

const Tab = ({ active, onClick, children }) => (
  <button onClick={onClick} style={{
    padding:"8px 14px", borderRadius:10, border:"none", cursor:"pointer", fontSize:12, fontWeight:600,
    background:active?"#818cf8":"#1a1a2e", color:active?"#fff":"#94a3b8", transition:"all 0.2s", whiteSpace:"nowrap"
  }}>{children}</button>
);

const Card = ({ children, style, onClick }) => (
  <div onClick={onClick} style={{ background:"rgba(26,26,46,0.7)", border:"1px solid #2d2d44", borderRadius:14, padding:16, marginBottom:12, backdropFilter:"blur(8px)", boxShadow:"0 4px 20px rgba(0,0,0,0.15)", transition:"all 0.2s", ...style }}>{children}</div>
);

// ===== ABDOMEN SVG =====
const AbdomenDiagram = ({ selectedZones, onToggleZone, abdominalFindings }) => {
  const zones = [
    { id:"subcardiac", cx:150, cy:48, rx:48, ry:20 },
    { id:"subcostal", cx:85, cy:82, rx:32, ry:16, mirror:true, mirrorCx:215 },
    { id:"epigastric", cx:150, cy:112, rx:42, ry:18 },
    { id:"navel", cx:150, cy:165, rx:26, ry:20 },
    { id:"left", cx:78, cy:162, rx:34, ry:26 },
    { id:"right", cx:222, cy:162, rx:34, ry:26 },
    { id:"lower", cx:150, cy:228, rx:52, ry:24 },
  ];
  return (
    <svg viewBox="0 0 300 280" style={{ width:"100%", maxWidth:340, margin:"0 auto", display:"block" }}>
      <text x="150" y="18" textAnchor="middle" fill="#4b5563" fontSize="7" fontStyle="italic">↑ רמת צ'י (Qi)</text>
      <text x="150" y="272" textAnchor="middle" fill="#4b5563" fontSize="7" fontStyle="italic">↓ רמת דם (Xue)</text>
      <text x="28" y="148" textAnchor="middle" fill="#4b5563" fontSize="7" fontStyle="italic" transform="rotate(-90,28,148)">צ'י (Qi) ←</text>
      <text x="272" y="148" textAnchor="middle" fill="#4b5563" fontSize="7" fontStyle="italic" transform="rotate(90,272,148)">→ דם (Xue)</text>
      <ellipse cx="150" cy="148" rx="118" ry="130" fill="#1a1a2e" stroke="#2d2d44" strokeWidth="2" />
      <ellipse cx="150" cy="148" rx="108" ry="120" fill="#13132a" stroke="#2d2d44" strokeWidth="1" />
      <line x1="150" y1="25" x2="150" y2="270" stroke="#2d2d44" strokeWidth="1" strokeDasharray="4,4" />
      {zones.map(z => {
        const zone = ABDOMEN_ZONES.find(a => a.id === z.id); const el = ELEMENTS[zone.element]; const sel = selectedZones.includes(z.id); const hasFindings = (abdominalFindings[z.id]||[]).length > 0;
        return (
          <g key={z.id} onClick={() => onToggleZone(z.id)} style={{ cursor:"pointer" }}>
            <ellipse cx={z.cx} cy={z.cy} rx={z.rx} ry={z.ry} fill={sel?el.color+"33":hasFindings?el.color+"22":el.color+"12"} stroke={sel?el.color:hasFindings?el.color+"aa":el.color+"55"} strokeWidth={sel?2.5:hasFindings?2:1.5} style={{ transition:"all 0.2s" }} />
            {z.mirror && <ellipse cx={z.mirrorCx} cy={z.cy} rx={z.rx} ry={z.ry} fill={sel?el.color+"33":hasFindings?el.color+"22":el.color+"12"} stroke={sel?el.color:hasFindings?el.color+"aa":el.color+"55"} strokeWidth={sel?2.5:hasFindings?2:1.5} style={{ transition:"all 0.2s" }} />}
            {hasFindings && !sel && <circle cx={z.mirror?z.cx+z.rx-4:z.cx+z.rx-4} cy={z.cy-z.ry+4} r="4" fill={el.color} />}
            {z.mirror ? (<>
              <text x={z.cx} y={z.cy-3} textAnchor="middle" fill={sel?"#fff":el.color} fontSize="8" fontWeight="700" style={{ pointerEvents:"none" }}>ST21L</text>
              <text x={z.cx} y={z.cy+8} textAnchor="middle" fill={sel?"#ccc":"#666"} fontSize="7" style={{ pointerEvents:"none" }}>תת-צלעי</text>
              <text x={z.mirrorCx} y={z.cy-3} textAnchor="middle" fill={sel?"#fff":el.color} fontSize="8" fontWeight="700" style={{ pointerEvents:"none" }}>ST21R</text>
              <text x={z.mirrorCx} y={z.cy+8} textAnchor="middle" fill={sel?"#ccc":"#666"} fontSize="7" style={{ pointerEvents:"none" }}>תת-צלעי</text>
            </>) : (<>
              <text x={z.cx} y={z.cy-4} textAnchor="middle" fill={sel?"#fff":el.color} fontSize="10" fontWeight="700" style={{ pointerEvents:"none" }}>{zone.nameEn}</text>
              <text x={z.cx} y={z.cy+9} textAnchor="middle" fill={sel?"#ccc":"#666"} fontSize="8" style={{ pointerEvents:"none" }}>{zone.points}</text>
            </>)}
          </g>
        );
      })}
    </svg>
  );
};

// ===== MAIN APP =====
export default function TCMApp() {
  const [mode, setMode] = useState("home");
  const [kbTab, setKbTab] = useState("formulas");
  const [search, setSearch] = useState("");
  const [filterEl, setFilterEl] = useState("all");
  const [filterTree, setFilterTree] = useState("all");
  const [selectedZones, setSelectedZones] = useState([]);
  const toggleZone = useCallback((id) => setSelectedZones(prev => prev.includes(id) ? prev.filter(z => z !== id) : [...prev, id]), []);
  const [diagStep, setDiagStep] = useState(0);
  const [scoreTab, setScoreTab] = useState("xueyu");
  const [diagData, setDiagData] = useState({ constitution:null, sleep:"", eating:"", moving:"", complaint:"", history:"", notes:"", abdominalFindings:{}, backFindings:{}, heatCold:null, shiXu:null, xueYuChecks:{}, patientGender:"male", patientName:"", patientAge:"" });
  const [savedDiags, setSavedDiags] = useState([]);
  const [loadingStorage, setLoadingStorage] = useState(false);

  const ud = useCallback((k, v) => setDiagData(p => ({ ...p, [k]:v })), []);

  // Load saved diagnoses
  useEffect(() => {
    (async () => {
      const keys = await storage.list("diag:");
      const items = [];
      for (const k of keys) {
        const d = await storage.load(k);
        if (d) items.push({ key:k, ...d });
      }
      items.sort((a, b) => (b.savedAt || 0) - (a.savedAt || 0));
      setSavedDiags(items);
    })();
  }, []);

  const saveDiagnosis = async () => {
    setLoadingStorage(true);
    const key = `diag:${Date.now()}`;
    const data = { ...diagData, savedAt:Date.now() };
    const ok = await storage.save(key, data);
    if (ok) setSavedDiags(p => [{ key, ...data }, ...p]);
    setLoadingStorage(false);
  };

  const loadDiagnosis = (d) => { setDiagData(d); setMode("diagnose"); setDiagStep(0); };

  const deleteDiagnosis = async (key) => {
    await storage.remove(key);
    setSavedDiags(p => p.filter(d => d.key !== key));
  };

  const xueYuScore = useMemo(() => {
    const g = diagData.patientGender;
    return XUE_YU_SIGNS.reduce((sum, s, i) => sum + (diagData.xueYuChecks[i] ? (g === "male" ? s.male : s.female) : 0), 0);
  }, [diagData.xueYuChecks, diagData.patientGender]);

  const xueYuLevel = xueYuScore > 40 ? 3 : xueYuScore > 20 ? 2 : xueYuScore > 0 ? 1 : 0;

  const [weakQiChecks, setWeakQiChecks] = useState({});
  const [qiStagChecks, setQiStagChecks] = useState({});
  const [waterRetChecks, setWaterRetChecks] = useState({});

  const weakQiScore = useMemo(() => WEAK_QI_SIGNS.reduce((sum, s, i) => sum + (weakQiChecks[i] ? s.points : 0), 0), [weakQiChecks]);
  const qiStagScore = useMemo(() => QI_STAGNATION_SIGNS.reduce((sum, s, i) => sum + (qiStagChecks[i] ? s.points : 0), 0), [qiStagChecks]);
  const waterRetScore = useMemo(() => WATER_RETENTION_SIGNS.reduce((sum, s, i) => sum + (waterRetChecks[i] ? s.points : 0), 0), [waterRetChecks]);

  const filteredFormulas = useMemo(() => {
    return FORMULAS.filter(f => {
      const ms = !search || [f.name, f.nameHe, f.pattern, f.indications, f.tree].some(x => x.toLowerCase().includes(search.toLowerCase()));
      return ms && (filterEl === "all" || f.element === filterEl) && (filterTree === "all" || f.tree === filterTree);
    });
  }, [search, filterEl, filterTree]);

  const uniqueTrees = useMemo(() => [...new Set(FORMULAS.map(f => f.tree))].sort(), []);

  const recommendedFormulas = useMemo(() => {
    const findings = diagData.abdominalFindings;
    const elements = Object.keys(findings).filter(k => findings[k]?.length > 0).map(k => ABDOMEN_ZONES.find(z => z.id === k)?.element).filter(Boolean);
    if (!elements.length) return [];
    let c = FORMULAS.filter(f => elements.includes(f.element));
    if (diagData.heatCold === "heat") c = c.filter(f => f.heatCold !== "cold");
    if (diagData.heatCold === "cold") c = c.filter(f => f.heatCold !== "heat");
    return c;
  }, [diagData]);

  const s = {
    app:{ fontFamily:"'Noto Sans Hebrew','Noto Sans',sans-serif", background:"#0f0f1a", color:"#e2e8f0", minHeight:"100vh", direction:"rtl", fontSize:13 },
    header:{ background:"rgba(26,26,46,0.85)", borderBottom:"1px solid #2d2d44", padding:"12px 16px", display:"flex", alignItems:"center", justifyContent:"space-between", flexWrap:"wrap", gap:8, position:"sticky", top:0, zIndex:100, backdropFilter:"blur(16px)" },
    main:{ maxWidth:920, margin:"0 auto", padding:"16px 12px" },
    input:{ background:"#16162a", border:"1px solid #2d2d44", borderRadius:10, padding:"9px 12px", color:"#e2e8f0", fontSize:13, width:"100%", boxSizing:"border-box", outline:"none", direction:"rtl" },
    select:{ background:"#16162a", border:"1px solid #2d2d44", borderRadius:10, padding:"7px 10px", color:"#e2e8f0", fontSize:12, outline:"none" },
    btn:(c="#818cf8") => ({ padding:"9px 18px", borderRadius:10, border:"none", cursor:"pointer", background:c, color:"#fff", fontSize:13, fontWeight:600, transition:"all 0.2s", boxShadow:"0 2px 8px rgba(0,0,0,0.2)" }),
    tag:(on, c="#818cf8") => ({ padding:"5px 12px", borderRadius:20, cursor:"pointer", fontSize:12, fontWeight:600, border:`1px solid ${on?c:"#2d2d44"}`, background:on?c+"22":"transparent", color:on?c:"#94a3b8", transition:"all 0.15s" }),
    sectionTitle:{ fontSize:15, fontWeight:700, color:"#818cf8", marginBottom:10, background:"linear-gradient(90deg,#818cf8,#c084fc)", WebkitBackgroundClip:"text", WebkitTextFillColor:"transparent", display:"inline-block" },
  };

  const DIAG_STEPS = [
    { title:"אנמנזה", icon:"📋" }, { title:"בדיקה גופנית", icon:"👁️" }, { title:"אבחון בטני", icon:"🫃" },
    { title:"אבחון גב", icon:"🔙" }, { title:"זיהוי דפוס", icon:"🧩" }, { title:"Xue Yu", icon:"🩸" },
    { title:"המלצת טיפול", icon:"💊" },
  ];

  // ===== RENDER DIAGNOSTIC STEPS =====
  const renderDiagStep = () => {
    switch (diagStep) {
      case 0: return (
        <div style={{ display:"grid", gap:12 }}>
          <div style={{ display:"grid", gridTemplateColumns:"2fr 1fr 1fr", gap:10 }}>
            <div><label style={{ fontSize:11, color:"#94a3b8", display:"block", marginBottom:4 }}>שם מטופל</label><input style={s.input} value={diagData.patientName} onChange={e => ud("patientName", e.target.value)} placeholder="שם..." /></div>
            <div><label style={{ fontSize:11, color:"#94a3b8", display:"block", marginBottom:4 }}>גיל</label><input style={s.input} type="number" value={diagData.patientAge} onChange={e => ud("patientAge", e.target.value)} placeholder="גיל" /></div>
            <div><label style={{ fontSize:11, color:"#94a3b8", display:"block", marginBottom:4 }}>מגדר</label>
              <div style={{ display:"flex", gap:6 }}>{[["male","👨 זכר"],["female","👩 נקבה"]].map(([v,l]) =>
                <button key={v} onClick={() => ud("patientGender",v)} style={s.tag(diagData.patientGender===v)}>{l}</button>
              )}</div></div>
          </div>
          <div><label style={{ fontSize:11, color:"#94a3b8", display:"block", marginBottom:4 }}>תלונה עיקרית</label><textarea style={{ ...s.input, minHeight:50, resize:"vertical" }} value={diagData.complaint} onChange={e => ud("complaint",e.target.value)} placeholder="מיקום, משך, טריגרים..." /></div>
          <div><label style={{ fontSize:11, color:"#94a3b8", display:"block", marginBottom:4 }}>היסטוריה רפואית</label><textarea style={{ ...s.input, minHeight:40, resize:"vertical" }} value={diagData.history} onChange={e => ud("history",e.target.value)} placeholder="מחלות, תרופות, ניתוחים..." /></div>
          <div><label style={{ fontSize:11, color:"#94a3b8", display:"block", marginBottom:4 }}>הערות קליניות</label><textarea style={{ ...s.input, minHeight:35, resize:"vertical" }} value={diagData.notes} onChange={e => ud("notes",e.target.value)} placeholder="הערות חופשיות, ממצאים ראשוניים..." /></div>
          <div style={s.sectionTitle}>3 מקורות צ'י</div>
          <div style={{ display:"grid", gridTemplateColumns:"1fr 1fr 1fr", gap:8 }}>
            {[["sleep","😴 שינה",["תקינה","קושי להירדם","התעוררויות","התעוררות מוקדמת","אין שינה"]],
              ["eating","🍚 אכילה",["תקין","תיאבון ירוד","אכילת יתר","לא סדיר","ריפלוקס/בחילות"]],
              ["moving","🏃 תנועה",["פעיל","מתון","ישבני","תשוש"]]
            ].map(([k,label,opts]) => (
              <div key={k}><label style={{ fontSize:11, color:"#94a3b8", display:"block", marginBottom:4 }}>{label}</label>
                <select style={{ ...s.select, width:"100%" }} value={diagData[k]} onChange={e => ud(k,e.target.value)}>
                  <option value="">בחר...</option>{opts.map(o => <option key={o} value={o}>{o}</option>)}
                </select></div>
            ))}
          </div>
        </div>
      );
      case 1: return (
        <div>
          <div style={s.sectionTitle}>מבנה גוף</div>
          <div style={{ display:"flex", gap:8, marginBottom:16, flexWrap:"wrap" }}>
            {CONSTITUTION_TYPES.map(ct => (
              <div key={ct.type} onClick={() => ud("constitution",ct.type)} style={{ flex:"1 1 140px", padding:12, borderRadius:12, cursor:"pointer", background:diagData.constitution===ct.type?"#2d2d44":"#16162a", border:diagData.constitution===ct.type?"2px solid #818cf8":"1px solid #2d2d44" }}>
                <div style={{ fontSize:14, fontWeight:700, color:diagData.constitution===ct.type?"#818cf8":"#e2e8f0" }}>{ct.icon} {ct.name}</div>
                <div style={{ fontSize:11, color:"#94a3b8", marginTop:4 }}>{ct.description}</div>
                <div style={{ fontSize:11, color:"#c084fc", marginTop:4 }}>↳ {ct.treatment}</div>
              </div>
            ))}
          </div>
          <div style={s.sectionTitle}>סימנים אבחוניים מיוחדים</div>
          <div style={{ display:"grid", gap:6 }}>
            {DIAGNOSTIC_SIGNS.map((ds,i) => (
              <div key={i} style={{ padding:10, background:"#16162a", borderRadius:10, display:"flex", gap:8 }}>
                <span style={{ fontSize:12, fontWeight:700, color:"#f59e0b", minWidth:140 }}>{ds.name}</span>
                <span style={{ fontSize:12, color:"#94a3b8" }}>{ds.description}</span>
              </div>
            ))}
          </div>
          <div style={{ ...s.sectionTitle, marginTop:16 }}>לשון ודופק</div>
          <div style={{ display:"grid", gap:6 }}>
            {TONGUE_PULSE.map((tp,i) => (
              <div key={i} style={{ padding:10, background:"#16162a", borderRadius:10, borderRight:`3px solid ${tp.color}` }}>
                <div style={{ fontWeight:700, fontSize:13, color:"#e2e8f0", marginBottom:4 }}>{tp.pattern}</div>
                <div style={{ display:"flex", gap:16, fontSize:12 }}>
                  <span style={{ color:"#f472b6" }}>👅 {tp.tongue}</span>
                  <span style={{ color:"#60a5fa" }}>💓 {tp.pulse}</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      );
      case 2: return (
        <div style={{ display:"flex", gap:16, flexWrap:"wrap" }}>
          <div style={{ flex:"0 0 320px" }}>
            <AbdomenDiagram selectedZones={selectedZones} onToggleZone={toggleZone} abdominalFindings={diagData.abdominalFindings} />
            <p style={{ fontSize:10, color:"#64748b", textAlign:"center", marginTop:6 }}>💡 לחץ על כמה אזורים לבחירה מרובה</p>
            {selectedZones.length > 1 && <div style={{ textAlign:"center", marginTop:4 }}><span onClick={() => setSelectedZones([])} style={{ fontSize:11, color:"#ef4444", cursor:"pointer", textDecoration:"underline" }}>נקה בחירה</span></div>}
          </div>
          <div style={{ flex:1, minWidth:240 }}>
            {selectedZones.length > 0 ? (
              <div style={{ display:"flex", flexDirection:"column", gap:16 }}>
                {selectedZones.map(zoneId => {
                  const zone = ABDOMEN_ZONES.find(z => z.id === zoneId); const el = ELEMENTS[zone.element];
                  return (
                    <div key={zoneId} style={{ padding:12, background:"#16162a", borderRadius:12, border:`1px solid ${el.color}44`, borderRight:`4px solid ${el.color}` }}>
                      <div style={{ display:"flex", alignItems:"center", gap:6, marginBottom:6 }}>
                        <ElementBadge element={zone.element} />
                        <span style={{ fontSize:15, fontWeight:700 }}>{zone.name}</span>
                        <span style={{ fontSize:11, color:"#64748b" }}>{zone.points}</span>
                        <span onClick={() => toggleZone(zoneId)} style={{ marginRight:"auto", marginLeft:4, fontSize:11, color:"#ef4444", cursor:"pointer", opacity:0.7 }}>✕</span>
                      </div>
                      <p style={{ fontSize:12, color:"#94a3b8", marginBottom:10 }}>{zone.description}</p>
                      {zone.diagnosticGuide && <div style={{ padding:8, background:"#1e1b4b", borderRadius:8, marginBottom:10, fontSize:11, color:"#c084fc", lineHeight:1.6 }}>📐 <b>מדריך אבחון:</b> {zone.diagnosticGuide}</div>}
                      {zone.subcostalZones && <div style={{ display:"grid", gridTemplateColumns:"1fr 1fr", gap:8, marginBottom:12 }}>
                        {[zone.subcostalZones.right, zone.subcostalZones.left].map((sz, i) => {
                          const szEl = ELEMENTS[sz.element]||ELEMENTS.wood;
                          return <div key={i} style={{ padding:10, background:"#0f0f20", borderRadius:10, border:`1px solid ${szEl.color}33`, borderTop:`3px solid ${szEl.color}` }}>
                            <div style={{ fontSize:13, fontWeight:700, color:szEl.color, marginBottom:4 }}>{sz.name}</div>
                            <div style={{ fontSize:10, color:"#64748b", marginBottom:6 }}>{sz.keyPoint} • {sz.organ}</div>
                            <div style={{ fontSize:11, color:"#94a3b8", lineHeight:1.5, marginBottom:6 }}>{sz.description}</div>
                            <div style={{ fontSize:10, fontWeight:600, color:"#c084fc", marginBottom:3 }}>עצים:</div>
                            {sz.trees.map((tr,j) => <div key={j} style={{ fontSize:10, color:"#a5b4fc", marginBottom:2 }}>• {tr}</div>)}
                            <div style={{ fontSize:10, fontWeight:600, color:"#c084fc", marginTop:4, marginBottom:3 }}>פורמולות:</div>
                            {sz.formulas.map((fm,j) => <div key={j} style={{ fontSize:10, color:"#94a3b8", marginBottom:2 }}>• {fm}</div>)}
                            {sz.clinicalNotes && <div style={{ fontSize:10, color:"#f59e0b", marginTop:6, padding:"4px 6px", background:"rgba(245,158,11,0.08)", borderRadius:4 }}>💡 {sz.clinicalNotes}</div>}
                          </div>;
                        })}
                      </div>}
                      <div style={{ fontSize:12, fontWeight:600, color:"#94a3b8", marginBottom:6 }}>ממצאים:</div>
                      <div style={{ display:"flex", gap:5, flexWrap:"wrap", marginBottom:12 }}>
                        {zone.findings.map(f => { const on = (diagData.abdominalFindings[zoneId]||[]).includes(f);
                          return <span key={f} onClick={() => { const cur=diagData.abdominalFindings[zoneId]||[]; ud("abdominalFindings",{...diagData.abdominalFindings,[zoneId]:on?cur.filter(x=>x!==f):[...cur,f]}); }} style={s.tag(on,el.color)}>{f}</span>;
                        })}
                      </div>
                      <div style={{ fontSize:12, fontWeight:600, color:"#94a3b8", marginBottom:6 }}>פרוטוקולי דיקור:</div>
                      {zone.protocols.map((p,i) => (
                        <div key={i} style={{ padding:8, background:"#0f0f20", borderRadius:8, marginBottom:4, fontSize:12 }}>
                          <span style={{ color:"#c084fc", fontWeight:600 }}>{p.name}: </span><span style={{ color:"#e2e8f0" }}>{p.points}</span>
                        </div>
                      ))}
                      {zone.navelShifting && (<div style={{ marginTop:10 }}>
                        <div style={{ fontSize:12, fontWeight:600, color:"#94a3b8", marginBottom:6 }}>כיוון הזזת טבור:</div>
                        {NAVEL_SHIFTING.map((ns, i) => (
                          <div key={i} style={{ display:"flex", gap:8, alignItems:"center", padding:"6px 8px", background:"#0f0f20", borderRadius:8, marginBottom:4 }}>
                            <span style={{ fontSize:16 }}>{ns.icon}</span>
                            <span style={{ fontSize:12, fontWeight:700, color:ns.color, minWidth:50 }}>{ns.direction}</span>
                            <span style={{ fontSize:12, color:"#94a3b8" }}>{ns.meaning}</span>
                          </div>
                        ))}
                      </div>)}
                    </div>
                  );
                })}
              </div>
            ) : <div style={{ textAlign:"center", color:"#64748b", padding:40, fontSize:13 }}>👆 לחץ על אזורים בדיאגרמה — ניתן לבחור כמה אזורים במקביל</div>}
          </div>
          {Object.keys(diagData.abdominalFindings).filter(k => diagData.abdominalFindings[k]?.length).length > 0 && (
            <div style={{ width:"100%", padding:10, background:"#16162a", borderRadius:10, marginTop:4 }}>
              <div style={{ fontSize:12, fontWeight:700, color:"#818cf8", marginBottom:6 }}>סיכום ממצאים ({Object.values(diagData.abdominalFindings).flat().length} ממצאים ב-{Object.keys(diagData.abdominalFindings).filter(k => diagData.abdominalFindings[k]?.length).length} אזורים):</div>
              {Object.entries(diagData.abdominalFindings).filter(([,v])=>v?.length).map(([k,v]) => {
                const z = ABDOMEN_ZONES.find(a=>a.id===k);
                return <div key={k} style={{ display:"flex", alignItems:"center", gap:6, marginBottom:3 }}><ElementBadge element={z.element} small /><span style={{ fontSize:12 }}>{z.name}: {v.join(", ")}</span></div>;
              })}
            </div>
          )}
        </div>
      );
      case 3: return (
        <div>
          <p style={{ fontSize:12, color:"#94a3b8", marginBottom:12 }}>סדר אלמנטים מלמעלה למטה: מתכת → אש → עץ → אדמה → מים. ממצא שי = רגישות/מתח | ממצא שו = שקע עמוק רגיש</p>
          <div style={{ display:"flex", gap:10, justifyContent:"center", flexWrap:"wrap", marginBottom:16 }}>
            {BACK_LINES.map(bl => (
              <div key={bl.line} style={{ flex:"1 1 140px", maxWidth:200, padding:14, borderRadius:12, background:"#1a1a2e", border:"1px solid #2d2d44" }}>
                <div style={{ fontSize:22, fontWeight:800, color:"#818cf8" }}>Line {bl.line}</div>
                <div style={{ fontSize:12, color:"#e2e8f0", fontWeight:600 }}>{bl.name}</div>
                <div style={{ fontSize:11, color:"#94a3b8", marginTop:4 }}>{bl.indication}</div>
                <div style={{ fontSize:11, color:"#c084fc", marginTop:4 }}>טיפול: {bl.treatment}</div>
              </div>
            ))}
          </div>
          <div style={{ ...s.sectionTitle, marginTop:8 }}>ממצאי גב — סמן אזורים רגישים</div>
          <div style={{ display:"grid", gap:6 }}>
            {[["metal","T1-T3","מתכת — ריאות/כתפיים"],["fire","T4-T5","אש — לב/חזה"],["wood","T6-T9","עץ — כבד/מרה/סרעפת"],["earth","T10-T12","אדמה — קיבה/טחול"],["water","L1-L5","מים — כליות/גב תחתון"]].map(([el,level,desc]) => {
              const backKey = `back_${el}`;
              const findings = diagData.backFindings?.[el] || [];
              return (
                <div key={el} style={{ padding:10, background:"#16162a", borderRadius:10, borderRight:`3px solid ${ELEMENTS[el].color}` }}>
                  <div style={{ display:"flex", alignItems:"center", gap:6, marginBottom:6 }}>
                    <ElementBadge element={el} small />
                    <span style={{ fontSize:12, fontWeight:600, color:"#e2e8f0" }}>{level} — {desc}</span>
                  </div>
                  <div style={{ display:"flex", gap:4, flexWrap:"wrap" }}>
                    {["Line A (שי)","Line B (כרוני)","Line C (שו)","ללא ממצא"].map(f => {
                      const on = findings.includes(f);
                      return <span key={f} onClick={() => {
                        const cur = diagData.backFindings || {};
                        const curEl = cur[el] || [];
                        ud("backFindings", { ...cur, [el]: on ? curEl.filter(x=>x!==f) : [...curEl.filter(x=>x!=="ללא ממצא"), ...(f==="ללא ממצא"?["ללא ממצא"]:[f])] });
                      }} style={s.tag(on, ELEMENTS[el].color)}>{f}</span>;
                    })}
                  </div>
                </div>
              );
            })}
          </div>
          {Object.entries(diagData.backFindings || {}).filter(([,v])=>v?.length && !v.includes("ללא ממצא")).length > 0 && (
            <div style={{ padding:10, background:"#16162a", borderRadius:10, marginTop:10 }}>
              <div style={{ fontSize:12, fontWeight:700, color:"#818cf8", marginBottom:6 }}>סיכום ממצאי גב:</div>
              {Object.entries(diagData.backFindings).filter(([,v])=>v?.length && !v.includes("ללא ממצא")).map(([el,v]) => (
                <div key={el} style={{ display:"flex", alignItems:"center", gap:6, marginBottom:3 }}>
                  <ElementBadge element={el} small /><span style={{ fontSize:12 }}>{v.join(", ")}</span>
                </div>
              ))}
            </div>
          )}
        </div>
      );
      case 4: return (
        <div>
          <div style={{ marginBottom:16 }}>
            <div style={s.sectionTitle}>חם vs קר</div>
            <div style={{ display:"flex", gap:8 }}>
              {[["heat","🔥 חם","#ef4444"],["cold","❄️ קר","#3b82f6"],["neutral","↔️ מעורב","#8b5cf6"]].map(([v,l,c]) =>
                <button key={v} onClick={() => ud("heatCold",v)} style={{ ...s.tag(diagData.heatCold===v,c), padding:"10px 16px" }}>{l}</button>
              )}
            </div>
          </div>
          <div style={{ marginBottom:16 }}>
            <div style={s.sectionTitle}>שי vs שו</div>
            <div style={{ display:"flex", gap:8 }}>
              {[["shi","💪 שי (עודף)","#f59e0b"],["xu","🌙 שו (חסר)","#06b6d4"],["mixed","🔀 מעורב","#8b5cf6"]].map(([v,l,c]) =>
                <button key={v} onClick={() => ud("shiXu",v)} style={{ ...s.tag(diagData.shiXu===v,c), padding:"10px 16px" }}>{l}</button>
              )}
            </div>
          </div>
          <Card style={{ padding:12 }}>
            <div style={{ fontSize:13, fontWeight:700, color:"#c084fc", marginBottom:6 }}>כללי החלטה</div>
            <div style={{ fontSize:12, color:"#94a3b8", lineHeight:1.8 }}>
              • <b style={{ color:"#ef4444" }}>חם/קר</b> — בחירת פורמולה צמחית<br/>
              • <b style={{ color:"#f59e0b" }}>שי/שו</b> — עוצמת טיפול: חזק→סדציה, חלש→טוניפיקציה<br/>
              • <b style={{ color:"#22c55e" }}>ז'נג vs שו</b> — תסמונת מופשטת מול ביטוי פיזי
            </div>
          </Card>
        </div>
      );
      case 5: {
        const scoreTabs = [
          { id:"xueyu", label:"\ud83e\ude78 Xue Yu", score:xueYuScore, max:100, color:xueYuLevel>=3?"#ef4444":xueYuLevel>=2?"#f97316":xueYuLevel>=1?"#f59e0b":"#64748b" },
          { id:"weakqi", label:"\ud83d\udcaa Weak Qi", score:weakQiScore, max:102, color:weakQiScore>30?"#ef4444":weakQiScore>15?"#f59e0b":"#22c55e" },
          { id:"qistag", label:"\ud83c\udf00 Qi Stagnation", score:qiStagScore, max:110, color:qiStagScore>30?"#ef4444":qiStagScore>15?"#f59e0b":"#22c55e" },
          { id:"water", label:"\ud83d\udca7 Water Retention", score:waterRetScore, max:120, color:waterRetScore>30?"#ef4444":waterRetScore>15?"#f59e0b":"#22c55e" },
        ];
        const activeScoreTab = scoreTabs.find(t => t.id === scoreTab) || scoreTabs[0];
        return (
        <div>
          <div style={{ display:"flex", gap:4, marginBottom:12, overflowX:"auto", paddingBottom:4 }}>
            {scoreTabs.map(t => (
              <button key={t.id} onClick={() => setScoreTab(t.id)} style={{
                padding:"8px 14px", borderRadius:10, border:"none", cursor:"pointer", fontSize:12, fontWeight:600,
                background:scoreTab===t.id?"#818cf8":"#1a1a2e", color:scoreTab===t.id?"#fff":"#94a3b8", transition:"all 0.2s", whiteSpace:"nowrap"
              }}>{t.label} ({t.score})</button>
            ))}
          </div>
          <div style={{ display:"flex", alignItems:"center", gap:12, marginBottom:8 }}>
            <span style={{ fontSize:22, fontWeight:800, color:activeScoreTab.color }}>{activeScoreTab.score} נק'</span>
            <span style={{ fontSize:13, color:"#94a3b8" }}>{activeScoreTab.label}</span>
          </div>
          <div style={{ height:6, borderRadius:3, background:"#1a1a2e", marginBottom:12, overflow:"hidden" }}>
            <div style={{ height:"100%", borderRadius:3, width: Math.min(100, activeScoreTab.score / activeScoreTab.max * 100) + "%", background: activeScoreTab.color, transition:"width 0.3s" }} />
          </div>
          <div style={{ display:"grid", gap:4 }}>
            {scoreTab === "xueyu" && XUE_YU_SIGNS.map((sg, i) => {
              const pts = diagData.patientGender === "male" ? sg.male : sg.female;
              if (pts === 0) return null;
              const on = !!diagData.xueYuChecks[i];
              return (
                <div key={i} onClick={() => ud("xueYuChecks", { ...diagData.xueYuChecks, [i]:!on })}
                  style={{ display:"flex", alignItems:"center", gap:8, padding:"8px 10px", borderRadius:8, cursor:"pointer", background:on?"#2d2d44":"#16162a", border:on?"1px solid #818cf8":"1px solid transparent" }}>
                  <span style={{ fontSize:16, width:20, textAlign:"center" }}>{on?"\u2705":"\u2B1C"}</span>
                  <span style={{ flex:1, fontSize:12, color:on?"#e2e8f0":"#94a3b8" }}>{sg.sign}</span>
                  <span style={{ fontSize:12, fontWeight:700, color:on?"#818cf8":"#4b5563" }}>{pts}</span>
                </div>
              );
            })}
            {scoreTab === "weakqi" && WEAK_QI_SIGNS.map((sg, i) => {
              const on = !!weakQiChecks[i];
              return (
                <div key={i} onClick={() => setWeakQiChecks(p => ({ ...p, [i]:!on }))}
                  style={{ display:"flex", alignItems:"center", gap:8, padding:"8px 10px", borderRadius:8, cursor:"pointer", background:on?"#2d2d44":"#16162a", border:on?"1px solid #818cf8":"1px solid transparent" }}>
                  <span style={{ fontSize:16, width:20, textAlign:"center" }}>{on?"\u2705":"\u2B1C"}</span>
                  <span style={{ flex:1, fontSize:12, color:on?"#e2e8f0":"#94a3b8" }}>{sg.sign}</span>
                  <span style={{ fontSize:12, fontWeight:700, color:on?"#818cf8":"#4b5563" }}>{sg.points}</span>
                </div>
              );
            })}
            {scoreTab === "qistag" && QI_STAGNATION_SIGNS.map((sg, i) => {
              const on = !!qiStagChecks[i];
              return (
                <div key={i} onClick={() => setQiStagChecks(p => ({ ...p, [i]:!on }))}
                  style={{ display:"flex", alignItems:"center", gap:8, padding:"8px 10px", borderRadius:8, cursor:"pointer", background:on?"#2d2d44":"#16162a", border:on?"1px solid #818cf8":"1px solid transparent" }}>
                  <span style={{ fontSize:16, width:20, textAlign:"center" }}>{on?"\u2705":"\u2B1C"}</span>
                  <span style={{ flex:1, fontSize:12, color:on?"#e2e8f0":"#94a3b8" }}>{sg.sign}</span>
                  <span style={{ fontSize:12, fontWeight:700, color:on?"#818cf8":"#4b5563" }}>{sg.points}</span>
                </div>
              );
            })}
            {scoreTab === "water" && WATER_RETENTION_SIGNS.map((sg, i) => {
              const on = !!waterRetChecks[i];
              return (
                <div key={i} onClick={() => setWaterRetChecks(p => ({ ...p, [i]:!on }))}
                  style={{ display:"flex", alignItems:"center", gap:8, padding:"8px 10px", borderRadius:8, cursor:"pointer", background:on?"#2d2d44":"#16162a", border:on?"1px solid #818cf8":"1px solid transparent" }}>
                  <span style={{ fontSize:16, width:20, textAlign:"center" }}>{on?"\u2705":"\u2B1C"}</span>
                  <span style={{ flex:1, fontSize:12, color:on?"#e2e8f0":"#94a3b8" }}>{sg.sign}</span>
                  <span style={{ fontSize:12, fontWeight:700, color:on?"#818cf8":"#4b5563" }}>{sg.points}</span>
                </div>
              );
            })}
          </div>
        </div>
        );
      }
      case 6: return (
        <div>
          {/* Patient Summary Header */}
          <div style={{ padding:12, background:"#16162a", borderRadius:10, marginBottom:14, display:"flex", gap:16, flexWrap:"wrap", alignItems:"center" }}>
            <div style={{ fontSize:14, fontWeight:700, color:"#e2e8f0" }}>{diagData.patientName || "ללא שם"} {diagData.patientAge ? `(${diagData.patientAge})` : ""} {diagData.patientGender==="female"?"👩":"👨"}</div>
            {diagData.constitution && <span style={s.tag(true, "#818cf8")}>מבנה: {CONSTITUTION_TYPES.find(c=>c.type===diagData.constitution)?.name}</span>}
            {diagData.heatCold && <span style={s.tag(true, diagData.heatCold==="heat"?"#ef4444":"#3b82f6")}>{diagData.heatCold==="heat"?"🔥 חם":diagData.heatCold==="cold"?"❄️ קר":"🔀 מעורב"}</span>}
            {diagData.shiXu && <span style={s.tag(true, "#f59e0b")}>{diagData.shiXu==="shi"?"💪 שי":diagData.shiXu==="xu"?"🌙 שו":"🔀 מעורב"}</span>}
            {xueYuScore > 0 && <span style={s.tag(true, xueYuLevel>=3?"#ef4444":"#f97316")}>🩸 Xue Yu: {xueYuScore} (L{xueYuLevel})</span>}
          </div>

          {recommendedFormulas.length > 0 && (<>
            <div style={s.sectionTitle}>🎯 פורמולות מומלצות ({recommendedFormulas.length})</div>
            <div style={{ display:"grid", gap:6, marginBottom:16 }}>
              {recommendedFormulas.slice(0,15).map(f => (
                <div key={f.id} style={{ padding:10, background:"#16162a", borderRadius:10, display:"flex", alignItems:"center", gap:8, flexWrap:"wrap" }}>
                  <ElementBadge element={f.element} small /><span style={{ fontWeight:700, fontSize:13 }}>{f.name}</span><span style={{ fontSize:12, color:"#64748b" }}>{f.nameHe}</span>
                  <span style={{ fontSize:11, color:"#818cf8", marginRight:"auto" }}>🌿{f.tree}</span><HeatColdBadge hc={f.heatCold} />
                  <div style={{ width:"100%", fontSize:12, color:"#94a3b8" }}>{f.pattern} — {f.indications}</div>
                </div>
              ))}
            </div>
          </>)}

          <div style={s.sectionTitle}>📍 פרוטוקולי דיקור לפי ממצא בטני</div>
          {ABDOMEN_ZONES.filter(z => diagData.abdominalFindings[z.id]?.length).length === 0 
            ? <div style={{ fontSize:12, color:"#4b5563", marginBottom:12 }}>לא סומנו ממצאים בטניים</div>
            : ABDOMEN_ZONES.filter(z => diagData.abdominalFindings[z.id]?.length).map(z => (
            <Card key={z.id} style={{ padding:10, marginBottom:8 }}>
              <div style={{ display:"flex", alignItems:"center", gap:6, marginBottom:4 }}><ElementBadge element={z.element} small /><span style={{ fontWeight:600 }}>{z.name}</span><span style={{ fontSize:11, color:"#64748b" }}>{(diagData.abdominalFindings[z.id]||[]).join(", ")}</span></div>
              {z.protocols.map((p,i) => <div key={i} style={{ fontSize:12, color:"#c084fc", marginBottom:2 }}><b>{p.name}:</b> <span style={{ color:"#e2e8f0" }}>{p.points}</span></div>)}
            </Card>
          ))}

          {/* Back findings summary */}
          {Object.entries(diagData.backFindings || {}).filter(([,v])=>v?.length && !v.includes("ללא ממצא")).length > 0 && (<>
            <div style={{ ...s.sectionTitle, marginTop:12 }}>🔙 ממצאי גב</div>
            {Object.entries(diagData.backFindings).filter(([,v])=>v?.length && !v.includes("ללא ממצא")).map(([el,v]) => (
              <div key={el} style={{ display:"flex", alignItems:"center", gap:6, marginBottom:4, padding:8, background:"#16162a", borderRadius:8 }}>
                <ElementBadge element={el} small /><span style={{ fontSize:12, color:"#e2e8f0" }}>{v.join(", ")}</span>
              </div>
            ))}
          </>)}

          {/* EV Suggestions based on findings */}
          {(() => {
            const activeEls = Object.keys(diagData.abdominalFindings).filter(k => diagData.abdominalFindings[k]?.length > 0).map(k => ABDOMEN_ZONES.find(z => z.id === k)?.element).filter(Boolean);
            const suggestedEVs = EV_PROTOCOLS.filter(ev => activeEls.includes(ev.element));
            if (!suggestedEVs.length) return null;
            return (<>
              <div style={{ ...s.sectionTitle, marginTop:12 }}>⚡ כלים יוצאי דופן מוצעים</div>
              {suggestedEVs.map(ev => (
                <div key={ev.id} style={{ padding:8, background:"#16162a", borderRadius:8, marginBottom:4, display:"flex", alignItems:"center", gap:8, flexWrap:"wrap" }}>
                  <ElementBadge element={ev.element} small /><span style={{ fontWeight:600, fontSize:13 }}>{ev.name}</span><span style={{ fontSize:11, color:"#94a3b8" }}>{ev.indication}</span>
                  <div style={{ width:"100%", fontSize:12, color:"#818cf8" }}>📍 {ev.points}</div>
                </div>
              ))}
            </>);
          })()}

          {xueYuScore > 20 && <Card style={{ borderRight:"3px solid #ef4444", padding:12, marginTop:12 }}>
            <div style={{ fontSize:13, fontWeight:700, color:"#ef4444" }}>⚠️ Xue Yu Level {xueYuLevel} ({xueYuScore} נק')</div>
            <div style={{ fontSize:12, color:"#94a3b8", marginTop:4 }}>{xueYuLevel >= 3 ? "סטגנציה חמורה — פורמולות Tao Ren / Da Huang" : "סטגנציה משמעותית — נדרשת פורמולה להנעת דם"}</div>
          </Card>}

          {/* Clinical notes */}
          {diagData.notes && <div style={{ padding:10, background:"#16162a", borderRadius:10, marginTop:10 }}>
            <div style={{ fontSize:12, fontWeight:600, color:"#94a3b8", marginBottom:4 }}>📝 הערות:</div>
            <div style={{ fontSize:12, color:"#e2e8f0" }}>{diagData.notes}</div>
          </div>}

          <div style={{ marginTop:14, display:"flex", gap:8 }}>
            <button onClick={saveDiagnosis} disabled={loadingStorage} style={s.btn("#22c55e")}>💾 {loadingStorage?"שומר...":"שמור אבחון"}</button>
          </div>
        </div>
      );
      default: return null;
    }
  };

  // ===== KB RENDERERS =====
  const renderFormulas = () => (
    <div>
      <div style={{ display:"flex", gap:6, marginBottom:10, flexWrap:"wrap" }}>
        <input style={{ ...s.input, flex:1, minWidth:160 }} placeholder="🔍 חפש..." value={search} onChange={e => setSearch(e.target.value)} />
        <select style={s.select} value={filterEl} onChange={e => setFilterEl(e.target.value)}><option value="all">כל האלמנטים</option>{Object.entries(ELEMENTS).map(([k,v])=><option key={k} value={k}>{v.icon} {v.name}</option>)}</select>
        <select style={s.select} value={filterTree} onChange={e => setFilterTree(e.target.value)}><option value="all">כל העצים</option>{uniqueTrees.map(t=><option key={t} value={t}>{t}</option>)}</select>
      </div>
      <div style={{ fontSize:12, color:"#64748b", marginBottom:6 }}>{filteredFormulas.length} פורמולות</div>
      <div style={{ display:"grid", gap:6 }}>
        {filteredFormulas.map(f => (
          <div key={f.id} style={{ padding:10, background:"#1a1a2e", border:"1px solid #2d2d44", borderRadius:10, transition:"all 0.2s", cursor:"default" }}
            onMouseEnter={e => e.currentTarget.style.borderColor = ELEMENTS[f.element].color} onMouseLeave={e => e.currentTarget.style.borderColor = '#2d2d44'}>
            <div style={{ display:"flex", alignItems:"center", gap:6, flexWrap:"wrap", marginBottom:4 }}>
              <ElementBadge element={f.element} small /><span style={{ fontWeight:700, fontSize:14 }}>{f.name}</span><span style={{ fontSize:12, color:"#94a3b8" }}>{f.nameHe}</span>
              <span style={{ padding:"2px 8px", borderRadius:10, fontSize:10, fontWeight:600, background:"#1e1b4b", color:"#818cf8", marginRight:"auto" }}>🌿 {f.tree}</span>
              <HeatColdBadge hc={f.heatCold} />
            </div>
            <div style={{ fontSize:12, color:"#c084fc", fontWeight:600 }}>{f.pattern}</div>
            <div style={{ fontSize:12, color:"#94a3b8" }}>{f.indications}</div>
          </div>
        ))}
      </div>
    </div>
  );

  const renderSixLayers = () => (
    <div style={{ display:"grid", gap:10 }}>
      {SIX_LAYERS.map(l => (
        <Card key={l.id} style={{ borderRight:`3px solid ${l.color}`, padding:14 }}>
          <div style={{ display:"flex", alignItems:"center", gap:8, marginBottom:6 }}>
            <ElementBadge element={l.element} /><span style={{ fontSize:16, fontWeight:800 }}>{l.name}</span><span style={{ fontSize:13, color:"#94a3b8" }}>{l.nameHe}</span>
            <span style={{ fontSize:11, color:l.color, fontWeight:700, marginRight:"auto" }}>{l.level}</span>
          </div>
          {l.priority && <div style={{ fontSize:12, color:"#f59e0b", fontWeight:700, marginBottom:4 }}>⭐ {l.priority}</div>}
          <div style={{ fontSize:12, color:"#e2e8f0", marginBottom:4 }}><b style={{ color:"#f472b6" }}>תסמינים:</b> {l.symptoms}</div>
          <div style={{ fontSize:12, color:"#e2e8f0", marginBottom:4 }}><b style={{ color:"#60a5fa" }}>בטן/גב:</b> {l.abdominal}</div>
          <div style={{ fontSize:12, color:"#e2e8f0", marginBottom:4 }}><b style={{ color:"#22c55e" }}>פורמולות:</b> {l.formulas}</div>
          <div style={{ fontSize:12, color:"#e2e8f0" }}><b style={{ color:"#c084fc" }}>טיפול:</b> {l.treatment}</div>
        </Card>
      ))}
    </div>
  );

  const renderExtraPoints = () => (
    <div>{EXTRA_POINTS.map(cat => (
      <div key={cat.category} style={{ marginBottom:16 }}>
        <div style={{ ...s.sectionTitle, borderBottom:"1px solid #2d2d44", paddingBottom:6 }}>{cat.category}</div>
        <div style={{ display:"grid", gap:6 }}>
          {cat.points.map(p => (
            <div key={p.name} style={{ padding:10, background:"#16162a", borderRadius:10 }}>
              <div style={{ display:"flex", gap:8, alignItems:"center", marginBottom:4 }}>
                <span style={{ fontWeight:700, fontSize:14, color:"#e2e8f0" }}>{p.name}</span>
                <span style={{ fontSize:12, color:"#94a3b8" }}>{p.nameHe}</span>
              </div>
              <div style={{ fontSize:12, color:"#60a5fa", marginBottom:2 }}>📍 {p.location}</div>
              <div style={{ fontSize:12, color:"#f472b6", marginBottom:2 }}>💊 {p.treats}</div>
              <div style={{ fontSize:12, color:"#94a3b8" }}>🔧 {p.usage}</div>
            </div>
          ))}
        </div>
      </div>
    ))}</div>
  );

  const renderClinical = () => (
    <div>
      {/* ST25 Comparison */}
      <div style={s.sectionTitle}>🔀 ST25 שמאל vs ימין — צ'י מול דם</div>
      <div style={{ display:"grid", gridTemplateColumns:"1fr 1fr", gap:10, marginBottom:20 }}>
        {ST25_COMPARISON.map((c,i) => (
          <Card key={i} style={{ padding:14, borderTop:`3px solid ${c.color}` }}>
            <div style={{ fontSize:16, fontWeight:800, color:c.color, marginBottom:6 }}>{c.side}</div>
            <div style={{ display:"flex", gap:6, marginBottom:8 }}><ElementBadge element={c.element} small /><span style={{ fontSize:12, color:"#818cf8", fontWeight:700 }}>רמת {c.level}</span></div>
            <div style={{ fontSize:12, color:"#e2e8f0", marginBottom:4 }}><b style={{ color:"#f472b6" }}>אופי:</b> {c.nature}</div>
            <div style={{ fontSize:12, color:"#e2e8f0", marginBottom:4 }}><b style={{ color:"#ef4444" }}>סטגנציית דם:</b> {c.stasis}</div>
            <div style={{ fontSize:12, color:"#e2e8f0", marginBottom:4 }}><b style={{ color:"#22c55e" }}>עצים:</b> {c.tree}</div>
            {c.jueYin !== "—" && <div style={{ fontSize:12, color:"#c084fc", marginBottom:4 }}><b>ג'ואה יין:</b> {c.jueYin}</div>}
            <div style={{ fontSize:11, padding:"4px 8px", background:"#1e1b4b", borderRadius:6, color:"#818cf8", fontWeight:600 }}>{c.xueYuScore}</div>
          </Card>
        ))}
      </div>

      {/* ST21 Guide */}
      <div style={s.sectionTitle}>📐 מדריך אבחון ST21 — בחירת עץ פורמולה</div>
      <div style={{ display:"grid", gap:6, marginBottom:20 }}>
        {ST21_GUIDE.map((g,i) => (
          <div key={i} style={{ padding:12, background:"#16162a", borderRadius:10, borderRight:`3px solid ${g.color}` }}>
            <div style={{ display:"flex", alignItems:"center", gap:8, marginBottom:4 }}>
              <span style={{ fontSize:14, fontWeight:800, color:g.color }}>ST21 {g.side}</span>
              <span style={{ padding:"2px 8px", borderRadius:10, fontSize:10, fontWeight:600, background:g.finding==="קשיחות"?"#7f1d1d":"#1e3a5f", color:g.finding==="קשיחות"?"#fca5a5":"#93c5fd" }}>{g.finding}</span>
              <span style={{ fontSize:11, color:"#818cf8", marginRight:"auto" }}>🌿 {g.tree}</span>
            </div>
            <div style={{ fontSize:12, color:"#e2e8f0", marginBottom:4 }}>{g.meaning}</div>
            <div style={{ fontSize:12, color:"#22c55e", fontWeight:600 }}>💊 {g.formula}</div>
          </div>
        ))}
      </div>

      {/* Palpation Technique */}
      <div style={s.sectionTitle}>🖐️ טכניקת מישוש בטני — 3 רמות</div>
      <div style={{ display:"grid", gap:6, marginBottom:12 }}>
        {PALPATION_TECHNIQUE.map(p => (
          <div key={p.level} style={{ display:"flex", gap:10, padding:10, background:"#16162a", borderRadius:10, alignItems:"center" }}>
            <span style={{ fontSize:22 }}>{p.icon}</span>
            <div><div style={{ fontWeight:700, fontSize:13, color:"#818cf8" }}>Level {p.level} — {p.name}</div><div style={{ fontSize:12, color:"#94a3b8" }}>{p.description}</div></div>
          </div>
        ))}
      </div>
      <div style={{ fontSize:13, fontWeight:700, color:"#94a3b8", marginBottom:8 }}>סימנים ומשמעותם:</div>
      <div style={{ display:"grid", gap:4, marginBottom:12 }}>
        {PALPATION_SIGNS.map((ps,i) => (
          <div key={i} style={{ display:"flex", gap:8, padding:8, background:"#16162a", borderRadius:8, alignItems:"center" }}>
            <span style={{ width:8, height:8, borderRadius:"50%", background:ps.color, flexShrink:0 }} />
            <span style={{ fontSize:12, fontWeight:700, color:"#e2e8f0", minWidth:180 }}>{ps.finding}</span>
            <span style={{ fontSize:12, color:"#94a3b8" }}>{ps.meaning}</span>
          </div>
        ))}
      </div>
      <div style={{ display:"grid", gap:4, marginBottom:20 }}>
        {PALPATION_WARNINGS.map((pw,i) => (
          <div key={i} style={{ padding:8, background:"#1a0e0e", border:"1px solid #4a1515", borderRadius:8 }}>
            <span style={{ fontWeight:700, fontSize:12, color:"#fca5a5" }}>⚠️ {pw.warning}: </span><span style={{ fontSize:12, color:"#d4a0a0" }}>{pw.detail}</span>
          </div>
        ))}
      </div>

      <div style={s.sectionTitle}>כללי סדר טיפול</div>
      <div style={{ display:"grid", gap:6, marginBottom:20 }}>
        {TREATMENT_RULES.map((r,i) => (
          <div key={i} style={{ display:"flex", gap:10, padding:10, background:"#16162a", borderRadius:10, alignItems:"center" }}>
            <span style={{ fontSize:22 }}>{r.icon}</span>
            <div><div style={{ fontWeight:700, fontSize:13, color:"#e2e8f0" }}>{r.rule}</div><div style={{ fontSize:12, color:"#94a3b8" }}>{r.detail}</div></div>
          </div>
        ))}
      </div>
      <div style={s.sectionTitle}>טכניקות מחט ומוקסה</div>
      <div style={{ display:"grid", gap:6, marginBottom:20 }}>
        {NEEDLE_MOXA.map((t,i) => (
          <div key={i} style={{ padding:10, background:"#16162a", borderRadius:10 }}>
            <div style={{ display:"flex", alignItems:"center", gap:8, marginBottom:4 }}>
              <span style={{ fontWeight:700, fontSize:13, color:"#e2e8f0" }}>{t.technique}</span>
              <span style={{ fontSize:10, padding:"2px 8px", borderRadius:10, background:"#1e1b4b", color:"#818cf8" }}>{t.forType}</span>
            </div>
            <div style={{ fontSize:12, color:"#94a3b8" }}>{t.description}</div>
          </div>
        ))}
      </div>
      <div style={s.sectionTitle}>⚠️ אזהרות וקונטראינדיקציות</div>
      <div style={{ display:"grid", gap:6, marginBottom:20 }}>
        {CONTRAINDICATIONS.map((c,i) => (
          <div key={i} style={{ padding:10, background:"#1a0e0e", border:"1px solid #4a1515", borderRadius:10 }}>
            <div style={{ fontWeight:700, fontSize:13, color:"#fca5a5" }}>{c.icon} {c.warning}</div>
            <div style={{ fontSize:12, color:"#d4a0a0", marginTop:2 }}>{c.detail}</div>
          </div>
        ))}
      </div>
      <div style={s.sectionTitle}>🍽️ 4 כללי האכילה</div>
      <div style={{ display:"grid", gap:6, marginBottom:12 }}>
        {DIET_RULES.general.map((r,i) => (
          <div key={i} style={{ display:"flex", gap:8, padding:10, background:"#16162a", borderRadius:10, alignItems:"center" }}>
            <span style={{ fontSize:18, fontWeight:800, color:"#f59e0b", minWidth:24 }}>{i+1}</span>
            <div><div style={{ fontWeight:700, fontSize:13, color:"#e2e8f0" }}>{r.rule}</div><div style={{ fontSize:12, color:"#94a3b8" }}>{r.detail}</div></div>
          </div>
        ))}
      </div>
      <div style={{ fontSize:13, fontWeight:700, color:"#94a3b8", marginBottom:8 }}>הנחיות תזונתיות לפי אלמנט:</div>
      <div style={{ display:"grid", gap:6, marginBottom:20 }}>
        {DIET_RULES.byElement.filter(d=>d.avoid||d.note).map((d,i) => (
          <div key={i} style={{ padding:10, background:"#16162a", borderRadius:10, display:"flex", gap:8, alignItems:"flex-start" }}>
            <ElementBadge element={d.element} small />
            <div style={{ fontSize:12, color:"#94a3b8" }}>{d.avoid && <><b style={{ color:"#ef4444" }}>להימנע:</b> {d.avoid}. </>}{d.note}</div>
          </div>
        ))}
      </div>
      <div style={s.sectionTitle}>📝 מקרי בוחן</div>
      <div style={{ display:"grid", gap:10 }}>
        {CASE_STUDIES.map((cs,i) => (
          <Card key={i} style={{ padding:14 }}>
            <div style={{ fontSize:15, fontWeight:700, color:"#e2e8f0", marginBottom:4 }}>{cs.title}</div>
            <div style={{ display:"flex", gap:4, marginBottom:6 }}>{cs.elements.map(e => <ElementBadge key={e} element={e} small />)}</div>
            <div style={{ fontSize:12, color:"#94a3b8", marginBottom:6 }}>{cs.description}</div>
            <div style={{ fontSize:12, color:"#f59e0b", fontWeight:600 }}>💡 {cs.keyLesson}</div>
          </Card>
        ))}
      </div>
    </div>
  );

  // ===== KB TABS =====
  const KB_TABS = [
    { id:"formulas", label:`📋 פורמולות (${FORMULAS.length})` },
    { id:"trees", label:`🌿 עצים (${TREES.length})` },
    { id:"layers", label:"📊 6 שכבות" },
    { id:"zones", label:"🫃 בטן" },
    { id:"ev", label:"⚡ כלים יוצ\"ד" },
    { id:"extra", label:`📍 נק' מיוחדות` },
    { id:"clinical", label:"🏥 קליני" },
  ];

  return (
    <div style={s.app}>
      <link href="https://fonts.googleapis.com/css2?family=Noto+Sans+Hebrew:wght@300;400;600;700;800&display=swap" rel="stylesheet" />
      <header style={s.header}>
        <div style={{ fontSize:18, fontWeight:800, cursor:"pointer", display:"flex", alignItems:"center", gap:6 }} onClick={() => { setMode("home"); setDiagStep(0); }}>🏥 TCM Dx System</div>
        <div style={{ display:"flex", gap:4 }}>
          <Tab active={mode==="home"} onClick={() => setMode("home")}>🏠</Tab>
          <Tab active={mode==="diagnose"} onClick={() => setMode("diagnose")}>🔬 אבחון</Tab>
          <Tab active={mode==="kb"} onClick={() => setMode("kb")}>📚 ידע</Tab>
          <Tab active={mode==="saved"} onClick={() => setMode("saved")}>💾 שמורים{savedDiags.length>0&&` (${savedDiags.length})`}</Tab>
        </div>
      </header>
      <main style={s.main}>

        {/* HOME */}
        {mode === "home" && (
          <div style={{ textAlign:"center", background:"radial-gradient(ellipse at 50% 0%, rgba(129,140,248,0.08) 0%, transparent 60%)", paddingTop:40 }}>
            <div style={{ fontSize:52, marginBottom:8 }}>🏥</div>
            <h1 style={{ fontSize:28, fontWeight:800, margin:"0 0 6px" }}>TCM Diagnostic System</h1>
            <p style={{ color:"#64748b", marginBottom:12, fontSize:13 }}>מערכת אבחון אינטראקטיבית + מאגר ידע קליני מקיף • {ABDOMEN_ZONES.length} אזורי בטן</p>
            <div style={{ display:"flex", gap:16, justifyContent:"center", flexWrap:"wrap", marginBottom:28, fontSize:13, color:"#64748b" }}>
              <span>{FORMULAS.length} פורמולות</span><span>•</span><span>{ABDOMEN_ZONES.length} אזורי בטן</span><span>•</span><span>6 שכבות</span><span>•</span><span>{TREES.length} עצים</span><span>•</span><span>{EXTRA_POINTS.reduce((s,c)=>s+c.points.length,0)} נק' מיוחדות</span>
            </div>
            <div style={{ display:"flex", gap:12, justifyContent:"center", flexWrap:"wrap", marginBottom:24 }}>
              {[["diagnose","🔬","אבחון אינטראקטיבי","7 שלבים + Xue Yu + שמירה","#818cf8"],["kb","📚","מאגר ידע",`${FORMULAS.length} פורמולות, 6 שכבות, ${EXTRA_POINTS.reduce((s,c)=>s+c.points.length,0)} נק' מיוחדות`,"#22c55e"],["saved","💾","אבחונים שמורים",`${savedDiags.length} שמורים`,"#f59e0b"]].map(([m,icon,title,sub,c]) => (
                <div key={m} onClick={() => setMode(m)} style={{ width:220, padding:16, borderRadius:14, cursor:"pointer", background:"#1a1a2e", border:"1px solid #2d2d44", transition:"all 0.3s", boxShadow:"0 4px 20px rgba(0,0,0,0.2)" }}
                  onMouseEnter={e => { e.currentTarget.style.transform="translateY(-3px)"; e.currentTarget.style.boxShadow="0 8px 32px rgba(129,140,248,0.15)"; }} onMouseLeave={e => { e.currentTarget.style.transform="translateY(0)"; e.currentTarget.style.boxShadow="0 4px 20px rgba(0,0,0,0.2)"; }}>
                  <div style={{ fontSize:32, marginBottom:6 }}>{icon}</div>
                  <div style={{ fontSize:15, fontWeight:700, color:c }}>{title}</div>
                  <div style={{ fontSize:11, color:"#64748b", marginTop:2 }}>{sub}</div>
                </div>
              ))}
            </div>
            <div style={{ display:"flex", gap:6, justifyContent:"center", flexWrap:"wrap" }}>
              {Object.entries(ELEMENTS).map(([k,v]) => <span key={k} style={{ padding:"4px 10px", borderRadius:16, background:v.bg, color:v.color, fontSize:11, fontWeight:600, border:`1px solid ${v.border}` }}>{v.icon} {v.name}</span>)}
            </div>
          </div>
        )}

        {/* DIAGNOSE */}
        {mode === "diagnose" && (
          <div>
            <div style={{ display:"flex", alignItems:"center", justifyContent:"space-between", marginBottom:10 }}>
              <div style={{ fontSize:15, fontWeight:700, color:"#818cf8" }}>🔬 אבחון אינטראקטיבי</div>
              <button onClick={() => { setDiagData({ constitution:null, sleep:"", eating:"", moving:"", complaint:"", history:"", notes:"", abdominalFindings:{}, backFindings:{}, heatCold:null, shiXu:null, xueYuChecks:{}, patientGender:"male", patientName:"", patientAge:"" }); setDiagStep(0); setSelectedZones([]); }} style={{ padding:"5px 12px", borderRadius:8, border:"1px solid #4a1515", background:"transparent", color:"#fca5a5", cursor:"pointer", fontSize:11, fontWeight:600 }}>🔄 איפוס</button>
            </div>
            <div style={{ display:"flex", gap:2, alignItems:"flex-start", marginBottom:14, overflowX:"auto", paddingBottom:4 }}>
              {DIAG_STEPS.map((st,i) => (
                <div key={i} style={{ display:"flex", alignItems:"center", gap:2 }}>
                  <div style={{ display:"flex", flexDirection:"column", alignItems:"center", gap:3, minWidth:42 }}>
                    <div onClick={() => setDiagStep(i)} style={{ width:34, height:34, borderRadius:"50%", display:"flex", alignItems:"center", justifyContent:"center", fontSize:15, cursor:"pointer", background:diagStep===i?"#818cf8":diagStep>i?"#22c55e":"#1a1a2e", border:diagStep===i?"2px solid #818cf8":"1px solid #2d2d44", color:diagStep===i||diagStep>i?"#fff":"#64748b", transition:"all 0.2s" }} title={st.title}>{st.icon}</div>
                    <span style={{ fontSize:8, color:diagStep===i?"#818cf8":diagStep>i?"#22c55e":"#4b5563", fontWeight:diagStep===i?700:400, textAlign:"center", lineHeight:1.1 }}>{st.title}</span>
                  </div>
                  {i < DIAG_STEPS.length-1 && <div style={{ width:10, height:2, background:diagStep>i?"#22c55e":"#2d2d44", marginTop:-12 }} />}
                </div>
              ))}
            </div>
            <Card>
              <div style={{ display:"flex", alignItems:"center", gap:6, marginBottom:10 }}>
                <span style={{ fontSize:18 }}>{DIAG_STEPS[diagStep].icon}</span>
                <span style={{ fontSize:17, fontWeight:800 }}>שלב {diagStep+1}: {DIAG_STEPS[diagStep].title}</span>
              </div>
              {renderDiagStep()}
            </Card>
            <div style={{ display:"flex", justifyContent:"space-between", marginTop:8 }}>
              <button onClick={() => setDiagStep(Math.max(0,diagStep-1))} disabled={diagStep===0} style={{ padding:"8px 16px", borderRadius:10, border:"1px solid #2d2d44", background:"transparent", color:diagStep===0?"#333":"#94a3b8", cursor:diagStep===0?"default":"pointer", fontSize:13 }}>← הקודם</button>
              <button onClick={() => setDiagStep(Math.min(6,diagStep+1))} disabled={diagStep===6} style={{ ...s.btn(), opacity:diagStep===6?0.4:1 }}>הבא →</button>
            </div>
          </div>
        )}

        {/* KB */}
        {mode === "kb" && (
          <div>
            <div style={{ display:"flex", gap:4, marginBottom:14, overflowX:"auto", paddingBottom:4 }}>
              {KB_TABS.map(t => <Tab key={t.id} active={kbTab===t.id} onClick={() => setKbTab(t.id)}>{t.label}</Tab>)}
            </div>
            {kbTab === "formulas" && renderFormulas()}
            {kbTab === "trees" && <div style={{ display:"grid", gap:10 }}>{TREES.map(t => {
              const treeFormulas = FORMULAS.filter(f => f.tree.includes(t.name.split(" ")[0]));
              const el = ELEMENTS[t.element]||ELEMENTS.earth;
              return (
              <Card key={t.id} style={{ padding:14, borderRight:`3px solid ${el.color}` }}>
                <div style={{ display:"flex", alignItems:"center", gap:8, marginBottom:6 }}><ElementBadge element={t.element} /><span style={{ fontSize:17, fontWeight:800 }}>{t.name}</span><span style={{ fontSize:13, color:"#94a3b8" }}>{t.nameHe}</span>{t.layer && <span style={{ fontSize:10, padding:"2px 8px", borderRadius:8, background:el.color+"22", color:el.color, marginRight:"auto" }}>{t.layer}</span>}</div>
                <div style={{ fontSize:12, color:"#c4b5fd", marginBottom:6, fontWeight:600 }}>{t.focus}</div>
                {t.description && <div style={{ fontSize:12, color:"#94a3b8", marginBottom:8, lineHeight:1.6 }}>{t.description}</div>}
                {t.keyActions && <div style={{ display:"flex", gap:4, flexWrap:"wrap", marginBottom:8 }}>{t.keyActions.map((a,i) => <span key={i} style={{ fontSize:10, padding:"2px 8px", borderRadius:8, background:"rgba(129,140,248,0.12)", color:"#a5b4fc", border:"1px solid rgba(129,140,248,0.2)" }}>{a}</span>)}</div>}
                {t.organ && <div style={{ fontSize:11, color:"#64748b", marginBottom:4 }}>🏛️ <strong style={{ color:"#94a3b8" }}>איבר:</strong> {t.organ}</div>}
                {t.diagnosticClues && <div style={{ fontSize:11, color:"#64748b", marginBottom:4 }}>🔍 <strong style={{ color:"#94a3b8" }}>רמזים לאבחון:</strong> {t.diagnosticClues}</div>}
                {t.contraindications && <div style={{ fontSize:11, color:"#f87171", marginBottom:4, padding:"4px 8px", background:"rgba(248,113,113,0.08)", borderRadius:6, border:"1px solid rgba(248,113,113,0.15)" }}>⚠️ {t.contraindications}</div>}
                <div style={{ fontSize:11, color:"#64748b", marginTop:6 }}>📋 <strong style={{ color:"#94a3b8" }}>פורמולות ({treeFormulas.length}):</strong> {treeFormulas.map(f=>f.name).join(", ")||"—"}</div>
                {t.huangHuang && <div style={{ marginTop:10, padding:10, background:"rgba(251,191,36,0.06)", borderRadius:8, border:"1px solid rgba(251,191,36,0.15)" }}>
                  <div style={{ fontSize:12, fontWeight:800, color:"#fbbf24", marginBottom:6 }}>🧬 {t.huangHuang.type} — טיפוס קונסטיטוציוני (הואנג הואנג)</div>
                  <div style={{ display:"grid", gap:4, fontSize:11 }}>
                    <div><strong style={{ color:"#94a3b8" }}>🏋️ מבנה גוף:</strong> <span style={{ color:"#cbd5e1" }}>{t.huangHuang.body}</span></div>
                    <div><strong style={{ color:"#94a3b8" }}>😐 פנים:</strong> <span style={{ color:"#cbd5e1" }}>{t.huangHuang.face}</span></div>
                    <div><strong style={{ color:"#94a3b8" }}>🖐️ עור:</strong> <span style={{ color:"#cbd5e1" }}>{t.huangHuang.skin}</span></div>
                    <div><strong style={{ color:"#94a3b8" }}>🔘 בטן:</strong> <span style={{ color:"#cbd5e1" }}>{t.huangHuang.abdomen}</span></div>
                    <div><strong style={{ color:"#94a3b8" }}>🧠 אופי:</strong> <span style={{ color:"#cbd5e1" }}>{t.huangHuang.temperament}</span></div>
                  </div>
                  <div style={{ marginTop:6 }}>
                    <div style={{ fontSize:11, fontWeight:700, color:"#fbbf24", marginBottom:3 }}>סמנים אבחוניים:</div>
                    {t.huangHuang.markers.map((m,i) => <div key={i} style={{ fontSize:10, color:"#a5b4fc", marginBottom:2, paddingRight:8 }}>• {m}</div>)}
                  </div>
                  <div style={{ marginTop:6, fontSize:11 }}>
                    <strong style={{ color:"#22c55e" }}>פורמולה מייצגת:</strong> <span style={{ color:"#e2e8f0" }}>{t.huangHuang.formula}</span>
                  </div>
                  {t.huangHuang.derivatives && <div style={{ marginTop:4, fontSize:10, color:"#64748b" }}>
                    <strong style={{ color:"#94a3b8" }}>נגזרות:</strong> {t.huangHuang.derivatives.join(" | ")}
                  </div>}
                  <div style={{ marginTop:6, fontSize:10, color:"#f59e0b", fontStyle:"italic", padding:"4px 6px", background:"rgba(251,191,36,0.08)", borderRadius:4 }}>💡 {t.huangHuang.diff}</div>
                </div>}
              </Card>);
            })}</div>}
            {kbTab === "layers" && renderSixLayers()}
            {kbTab === "zones" && <div>
              <AbdomenDiagram selectedZones={selectedZones} onToggleZone={toggleZone} abdominalFindings={diagData.abdominalFindings} />
              <div style={{ marginTop:12, display:"grid", gap:8 }}>{ABDOMEN_ZONES.map(z => (
                <Card key={z.id} onClick={() => toggleZone(z.id)} style={{ cursor:"pointer", padding:12, border:selectedZones.includes(z.id)?`2px solid ${ELEMENTS[z.element].color}`:"1px solid #2d2d44" }}>
                  <div style={{ display:"flex", alignItems:"center", gap:6, marginBottom:4 }}><ElementBadge element={z.element} /><span style={{ fontSize:14, fontWeight:700 }}>{z.name}</span><span style={{ fontSize:11, color:"#64748b" }}>{z.points}</span></div>
                  <div style={{ fontSize:12, color:"#94a3b8", marginBottom:6 }}>{z.description}</div>
                  {z.protocols.map((p,i) => <div key={i} style={{ fontSize:11, marginBottom:2 }}><span style={{ color:"#818cf8", fontWeight:600 }}>{p.name}:</span> <span style={{ color:"#e2e8f0" }}>{p.points}</span></div>)}
                  <div style={{ marginTop:6, fontSize:11, color:"#64748b" }}>
                    <span style={{ fontWeight:600 }}>פורמולות {ELEMENTS[z.element].name}: </span>
                    {FORMULAS.filter(f => f.element === z.element).slice(0,5).map(f => f.name).join(", ")}
                    {FORMULAS.filter(f => f.element === z.element).length > 5 && ` (+${FORMULAS.filter(f => f.element === z.element).length - 5})`}
                  </div>
                </Card>
              ))}</div>
            </div>}
            {kbTab === "ev" && <div style={{ display:"grid", gap:8 }}>{EV_PROTOCOLS.map(ev => (
              <Card key={ev.id} style={{ padding:12 }}>
                <div style={{ display:"flex", alignItems:"center", gap:6, marginBottom:4 }}><ElementBadge element={ev.element} /><span style={{ fontSize:15, fontWeight:800 }}>{ev.name}</span><span style={{ fontSize:12, color:"#94a3b8" }}>{ev.nameHe}</span></div>
                <div style={{ fontSize:12, color:"#94a3b8" }}>{ev.indication}</div>
                <div style={{ fontSize:12, color:"#818cf8", fontWeight:600, marginTop:2 }}>📍 {ev.points}</div>
              </Card>
            ))}</div>}
            {kbTab === "extra" && renderExtraPoints()}
            {kbTab === "clinical" && renderClinical()}
          </div>
        )}

        {/* SAVED */}
        {mode === "saved" && (
          <div>
            <div style={s.sectionTitle}>💾 אבחונים שמורים ({savedDiags.length})</div>
            {savedDiags.length === 0 ? <Card style={{ textAlign:"center", color:"#64748b", padding:30 }}>אין אבחונים שמורים עדיין</Card> :
              <div style={{ display:"grid", gap:8 }}>
                {savedDiags.map(d => (
                  <Card key={d.key} style={{ padding:12 }}>
                    <div style={{ display:"flex", alignItems:"center", justifyContent:"space-between", marginBottom:6 }}>
                      <div><span style={{ fontWeight:700, fontSize:14, color:"#e2e8f0" }}>{d.patientName || "ללא שם"}</span><span style={{ fontSize:11, color:"#64748b", marginRight:8 }}> {d.patientGender === "female" ? "👩" : "👨"}{d.patientAge ? ` ${d.patientAge}` : ""} • {d.savedAt ? new Date(d.savedAt).toLocaleDateString("he-IL") : ""}</span></div>
                      <div style={{ display:"flex", gap:6 }}>
                        <button onClick={() => loadDiagnosis(d)} style={s.btn()}>📂 טען</button>
                        <button onClick={() => deleteDiagnosis(d.key)} style={{ ...s.btn("#ef4444"), padding:"6px 12px" }}>🗑️</button>
                      </div>
                    </div>
                    <div style={{ fontSize:12, color:"#94a3b8" }}>
                      {d.complaint && <div>תלונה: {d.complaint.slice(0,60)}{d.complaint.length>60?"...":""}</div>}
                      <div style={{ display:"flex", gap:6, marginTop:4, flexWrap:"wrap" }}>
                        {d.constitution && <span style={s.tag(true)}>מבנה: {d.constitution}</span>}
                        {d.heatCold && <span style={s.tag(true, d.heatCold==="heat"?"#ef4444":"#3b82f6")}>{d.heatCold==="heat"?"🔥 חם":"❄️ קר"}</span>}
                        {d.shiXu && <span style={s.tag(true, "#f59e0b")}>{d.shiXu==="shi"?"💪 שי":"🌙 שו"}</span>}
                      </div>
                    </div>
                  </Card>
                ))}
              </div>
            }
          </div>
        )}

      </main>
    </div>
  );
}
