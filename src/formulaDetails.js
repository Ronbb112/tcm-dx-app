export const FORMULA_DETAILS = {
  // ============================================================
  // 1. XIAO YAO SAN 逍遥散
  // ============================================================
  "xiao-yao-san": {
    id: "xiao-yao-san",
    name_pinyin: "Xiāo Yáo Sǎn",
    name_chinese: "逍遥散",
    name_english: "Free and Easy Wanderer Powder",
    category: "Harmonizing Formulas (和解剂)",
    source: "Tai Ping Hui Min He Ji Ju Fang (1151 CE)",
    source_chinese: "太平惠民和剂局方",

    composition: [
      { pinyin: "Chai Hu", chinese: "柴胡", latin: "Radix Bupleuri", dosage: "9g", role: "jun", role_name: "King", function: "Spreads Liver Qi, relieves constraint" },
      { pinyin: "Dang Gui", chinese: "当归", latin: "Radix Angelicae Sinensis", dosage: "9g", role: "chen", role_name: "Minister", function: "Nourishes Blood, harmonizes Liver" },
      { pinyin: "Bai Shao", chinese: "白芍", latin: "Radix Paeoniae Alba", dosage: "12g", role: "chen", role_name: "Minister", function: "Nourishes Liver Blood, softens Liver" },
      { pinyin: "Bai Zhu", chinese: "白术", latin: "Rhizoma Atractylodis Macrocephalae", dosage: "9g", role: "zuo", role_name: "Assistant", function: "Strengthens Spleen, dries Dampness" },
      { pinyin: "Fu Ling", chinese: "茯苓", latin: "Poria", dosage: "12g", role: "zuo", role_name: "Assistant", function: "Strengthens Spleen, leaches Dampness" },
      { pinyin: "Sheng Jiang", chinese: "生姜", latin: "Rhizoma Zingiberis Recens", dosage: "3 slices", role: "zuo", role_name: "Assistant", function: "Warms Middle Jiao, aids digestion" },
      { pinyin: "Bo He", chinese: "薄荷", latin: "Herba Menthae", dosage: "3g", role: "shi", role_name: "Envoy", function: "Assists Chai Hu in spreading Liver Qi, clears head" },
      { pinyin: "Zhi Gan Cao", chinese: "炙甘草", latin: "Radix Glycyrrhizae Praeparata", dosage: "3g", role: "shi", role_name: "Envoy", function: "Harmonizes all herbs, tonifies Qi" },
    ],

    clinical_picture: {
      summary: "The classic formula for Liver Qi Stagnation invading the Spleen. The patient feels emotionally 'stuck' — irritable or depressed, with digestive symptoms that worsen with stress. This is the person who gets diarrhea or loses appetite before an exam, whose shoulders are always tight, and who sighs frequently.",
      tongue: "Pale-red body, thin white coating. May show slight swelling (Spleen Qi Xu) with reddish edges (Liver heat)",
      pulse: "Wiry (弦 xián) and deficient (虚 xū), especially on the left Guan position",
      key_symptoms: [
        "Alternating irritability and depression",
        "Hypochondriac distension or pain (flanks/ribs)",
        "Irregular menstruation (variable cycle, PMS)",
        "Fatigue that worsens with emotional stress",
        "Poor appetite or bloating after eating",
        "Loose stools that worsen with stress",
        "Frequent sighing",
        "Headaches (temporal, related to stress or menstruation)",
      ],
      constitutional_type: "Chai Hu Type (柴胡体质) — Medium build, tendency to emotional stress, irritable yet fatigued. Average-to-thin constitution, NOT robust.",
      typical_patient: "A 35-year-old office worker who comes in saying 'I feel fine physically, but I'm just... exhausted and irritable all the time.' She sighs a lot during the consultation, mentions her digestion falls apart during stressful weeks, and has PMS with mood swings, bloating, and breast tenderness. Her shoulders are tight, she sometimes feels a lump in her throat, and she craves sweets when stressed.",
    },

    actions: [
      "Spreads Liver Qi (疏肝解郁)",
      "Nourishes Blood (养血)",
      "Strengthens Spleen (健脾)",
      "Harmonizes Liver and Spleen (调和肝脾)",
    ],
    actions_chinese: "疏肝解郁，养血健脾",

    pattern: "Liver Qi Stagnation with Spleen Deficiency and Blood Deficiency",
    pattern_chinese: "肝郁脾虚血虚证",

    contraindications: [
      "Strong/robust patients with excess heat — use Long Dan Xie Gan Tang instead",
      "Pure Liver Fire with red face, constipation, strong pulse — too tonifying",
      "Yin deficiency with prominent night sweats and empty heat — needs Yin nourishment first",
      "Severe Blood Stasis — needs activating formulas like Xue Fu Zhu Yu Tang",
    ],
    cautions: [
      "If heat signs prominent (hot flashes, red tongue edges), switch to Jia Wei Xiao Yao Wan (add Mu Dan Pi + Zhi Zi)",
      "Not suitable as sole formula for severe depression — may need stronger Qi-moving herbs",
      "Monitor for dryness in patients with pre-existing Yin Xu",
    ],

    differentiators: [
      { formula: "Chai Hu Shu Gan Wan", difference: "Chai Hu Shu Gan Wan is for LV Qi Stagnation WITHOUT Spleen involvement. Use it when the main complaint is hypochondriac PAIN and the patient is stronger. Xiao Yao San addresses the FATIGUE + MOOD + DIGESTION triad." },
      { formula: "Jia Wei Xiao Yao Wan", difference: "Same base but adds Mu Dan Pi and Zhi Zi to clear heat. Choose Jia Wei when there are heat signs: hot flashes, PMS with irritability worse in heat, red tongue edges." },
      { formula: "Si Wu Tang", difference: "Si Wu Tang is purely blood-nourishing — no Qi-moving component. Use when Blood Xu is dominant WITHOUT Liver Qi Stagnation (dry skin, blurry vision, pale tongue without wiry pulse)." },
      { formula: "Long Dan Xie Gan Tang", difference: "Long Dan Xie Gan Tang drains EXCESS Liver Fire/Damp-Heat in strong patients. Xiao Yao San is for DEFICIENT patients with stagnation. Wrong choice if patient is robust with red face and strong pulse." },
    ],

    modifications: [
      { condition: "Heat signs (hot flashes, PMS fever)", herbs_add: "Mu Dan Pi 9g, Zhi Zi 6g → becomes Jia Wei Xiao Yao Wan" },
      { condition: "Fibrocystic breast changes", herbs_add: "Wang Bu Liu Xing 9g, Ji Xue Teng 15g" },
      { condition: "Severe Spleen Xu with diarrhea", herbs_add: "Shan Yao 15g, Yi Yi Ren 15g" },
      { condition: "Insomnia from Blood Xu", herbs_add: "Suan Zao Ren 15g, He Huan Pi 9g" },
      { condition: "Menstrual irregularity", herbs_add: "Xiang Fu 9g, Yi Mu Cao 12g" },
      { condition: "Stress, neck disorders", herbs_add: "Tian Ma" },
      { condition: "Dysmenorrhea", herbs_add: "Yan Hu Suo, Xiang Fu, Mu Xiang" },
    ],

    modern_applications: [
      "Premenstrual syndrome (PMS)",
      "Irritable Bowel Syndrome (IBS) — stress-related",
      "Chronic fatigue syndrome",
      "Mild-to-moderate depression/anxiety",
      "Functional dyspepsia",
      "Fibrocystic breast disease",
      "Menopausal mood swings",
      "Chronic hepatitis with Liver Qi stagnation pattern",
    ],

    color: "#4db89e",
  },

  // ============================================================
  // 2. DA CHAI HU TANG 大柴胡汤
  // ============================================================
  "da-chai-hu-tang": {
    id: "da-chai-hu-tang",
    name_pinyin: "Dà Chái Hú Tāng",
    name_chinese: "大柴胡汤",
    name_english: "Major Bupleurum Decoction",
    category: "Harmonizing Formulas (和解剂)",
    source: "Shang Han Lun (c. 220 CE, Zhang Zhongjing)",
    source_chinese: "伤寒论",

    composition: [
      { pinyin: "Chai Hu", chinese: "柴胡", latin: "Radix Bupleuri", dosage: "12g", role: "jun", role_name: "King", function: "Releases Shao Yang, spreads Liver Qi" },
      { pinyin: "Huang Qin", chinese: "黄芩", latin: "Radix Scutellariae", dosage: "9g", role: "chen", role_name: "Minister", function: "Clears Shao Yang heat, drains Gallbladder fire" },
      { pinyin: "Bai Shao", chinese: "白芍", latin: "Radix Paeoniae Alba", dosage: "9g", role: "chen", role_name: "Minister", function: "Softens Liver, relieves pain, preserves Yin" },
      { pinyin: "Ban Xia", chinese: "半夏", latin: "Rhizoma Pinelliae", dosage: "9g", role: "zuo", role_name: "Assistant", function: "Descends rebellious Qi, resolves phlegm" },
      { pinyin: "Zhi Shi", chinese: "枳实", latin: "Fructus Aurantii Immaturus", dosage: "6g", role: "zuo", role_name: "Assistant", function: "Breaks Qi stagnation, moves bowels" },
      { pinyin: "Da Huang", chinese: "大黄", latin: "Radix et Rhizoma Rhei", dosage: "6g", role: "zuo", role_name: "Assistant", function: "Purges heat accumulation, moves stool" },
      { pinyin: "Sheng Jiang", chinese: "生姜", latin: "Rhizoma Zingiberis Recens", dosage: "5 slices", role: "shi", role_name: "Envoy", function: "Harmonizes Stomach, assists Ban Xia" },
      { pinyin: "Da Zao", chinese: "大枣", latin: "Fructus Jujubae", dosage: "4 pieces", role: "shi", role_name: "Envoy", function: "Nourishes Qi, moderates harsh herbs" },
    ],

    clinical_picture: {
      summary: "The 'big gun' for Shao Yang + Yang Ming combined pattern in STRONG patients. This is a robust, thick-set person who runs hot, is constipated, has subcostal fullness/resistance, and presents with excess signs everywhere. The body is 'overflowing' — excess heat above (bitter taste, headache) with stagnation below (constipation, abdominal fullness).",
      tongue: "Red body, thick yellow coating (may be greasy)",
      pulse: "Wiry (弦), forceful (有力), rapid (数). Strong in both Guan positions.",
      key_symptoms: [
        "Subcostal fullness and resistance on palpation (胸胁苦满)",
        "Bitter taste in the mouth",
        "Nausea or vomiting",
        "Constipation or dry stool",
        "Epigastric/abdominal fullness and pain",
        "Irritability, easily angered",
        "Headache (temporal, throbbing)",
        "Alternating chills and fever (but heat dominant)",
      ],
      constitutional_type: "Da Huang Type (大黄体质) — Robust, red-faced, constipated, abdominal fullness, aggressive. Strong body, thick build. NEVER use for thin/deficient patients.",
      typical_patient: "A 50-year-old businessman, stocky build, red face, comes in with severe hypochondriac pain radiating to the back, hasn't had a bowel movement in 3 days. He's irritable, snapping at everyone, has a bitter taste in his mouth every morning. When you press his subcostal region, there's strong resistance and he flinches. His appetite is actually increased despite the nausea. He runs hot — always opens windows, kicks off blankets.",
    },

    actions: [
      "Harmonizes and releases the Shao Yang (和解少阳)",
      "Purges interior heat and accumulation (内泻热结)",
      "Moves Qi stagnation in the Liver and Gallbladder",
    ],
    actions_chinese: "和解少阳，内泻热结",

    pattern: "Shao Yang + Yang Ming combined pattern (excess heat with Liver-Gallbladder fire)",
    pattern_chinese: "少阳阳明合病",

    contraindications: [
      "THIN or DEFICIENT patients — will deplete Qi and Blood dangerously",
      "Patients with loose stools or Spleen Qi deficiency",
      "Pregnancy — Da Huang is strongly contraindicated",
      "Chronic illness with underlying deficiency — even if current symptoms look excess",
      "Elderly patients with weak constitution",
    ],
    cautions: [
      "Monitor bowel movements — reduce Da Huang if diarrhea occurs",
      "Short-term use only (7-14 days typically) — not for long-term tonification",
      "Reduce dosage once excess heat begins to clear",
      "Always reassess constitution: if the 'strong' patient turns out to have underlying deficiency, STOP immediately",
    ],

    differentiators: [
      { formula: "Xiao Chai Hu Tang", difference: "Xiao Chai Hu Tang is the MILD version — for average-constitution Shao Yang pattern WITHOUT constipation or Yang Ming excess. If there's no constipation and no strong abdominal resistance, use Xiao Chai Hu Tang." },
      { formula: "Long Dan Xie Gan Tang", difference: "Long Dan Xie Gan Tang focuses on DAMP-HEAT in the Liver/Gallbladder (genital itching, UTI, yellow vaginal discharge). Da Chai Hu Tang focuses on DRY HEAT with constipation and Shao Yang signs." },
      { formula: "Chai Hu Shu Gan Wan", difference: "Chai Hu Shu Gan Wan is for Qi STAGNATION without heat excess. No constipation, no yellow tongue coating. Much milder than Da Chai Hu Tang." },
    ],

    modifications: [
      { condition: "Jaundice or gallstones", herbs_add: "Yin Chen Hao 15g, Jin Qian Cao 30g" },
      { condition: "Severe constipation", herbs_add: "Increase Da Huang to 9-12g, add Mang Xiao 6g" },
      { condition: "Chest pain with Qi stagnation", herbs_add: "Mu Xiang 6g, Yu Jin 9g" },
      { condition: "High blood pressure with Liver fire", herbs_add: "Tian Ma 9g, Gou Teng 12g" },
      { condition: "Vomiting dominant", herbs_add: "Increase Ban Xia to 12g, add Zhu Ru 9g" },
    ],

    modern_applications: [
      "Acute cholecystitis and gallstones",
      "Acute pancreatitis (early stage)",
      "Hypertension (Liver fire type)",
      "Metabolic syndrome with constipation",
      "Biliary dyskinesia",
      "Peptic ulcer (excess heat type)",
      "Acute hepatitis with jaundice",
    ],

    color: "#e54b4b",
  },

  // ============================================================
  // 3. SI WU TANG 四物汤
  // ============================================================
  "si-wu-tang": {
    id: "si-wu-tang",
    name_pinyin: "Sì Wù Tāng",
    name_chinese: "四物汤",
    name_english: "Four Substance Decoction",
    category: "Blood-Nourishing Formulas (补血剂)",
    source: "Tai Ping Hui Min He Ji Ju Fang (1151 CE)",
    source_chinese: "太平惠民和剂局方",

    composition: [
      { pinyin: "Shu Di Huang", chinese: "熟地黄", latin: "Radix Rehmanniae Praeparata", dosage: "12g", role: "jun", role_name: "King", function: "Nourishes Blood and Yin, fills the Liver and Kidney" },
      { pinyin: "Dang Gui", chinese: "当归", latin: "Radix Angelicae Sinensis", dosage: "9g", role: "chen", role_name: "Minister", function: "Nourishes and invigorates Blood, regulates menstruation" },
      { pinyin: "Bai Shao", chinese: "白芍", latin: "Radix Paeoniae Alba", dosage: "9g", role: "zuo", role_name: "Assistant", function: "Nourishes Blood, softens Liver, relieves pain" },
      { pinyin: "Chuan Xiong", chinese: "川芎", latin: "Rhizoma Chuanxiong", dosage: "6g", role: "shi", role_name: "Envoy", function: "Moves Blood, prevents stasis from tonification, relieves headache" },
    ],

    clinical_picture: {
      summary: "The foundational Blood-nourishing formula. This patient looks 'drained' — pale, dry, tired, with signs of Blood emptiness everywhere. The genius of this formula is the balance: three herbs NOURISH Blood while Chuan Xiong MOVES it, preventing the heavy tonics from creating stagnation. It's the 'mother formula' for all Blood-related conditions.",
      tongue: "Pale body (especially pale lips), thin coating, may be dry. In severe cases, the tongue looks almost white.",
      pulse: "Thin (细 xì) and choppy/rough (涩 sè). May also be weak, especially in the Liver (left Guan) and Kidney (chi) positions.",
      key_symptoms: [
        "Dizziness, especially when standing up",
        "Pale, lusterless complexion — looks 'washed out'",
        "Dry skin, brittle nails, hair loss",
        "Blurry vision, dry eyes",
        "Scanty menstruation or amenorrhea",
        "Pale menstrual blood, or late periods",
        "Muscle cramps and tension (Blood not nourishing sinews)",
        "Palpitations, mild anxiety (Heart Blood Xu)",
        "Generalized numbness or tingling",
      ],
      constitutional_type: "Thin, dry type. Often women of childbearing age. Pale complexion, soft voice, fatigue. The 'blood-deficient constitution' — not necessarily Chai Hu type.",
      typical_patient: "A 30-year-old woman who comes in looking pale and exhausted. She says her periods have become very scanty (just 2 days of light flow), her hair is falling out, her nails keep breaking, and her vision gets blurry when she's tired. She has muscle cramps at night, especially in her calves. Her skin is dry despite using moisturizer. She's always cold but doesn't have the DEEP cold of Yang Xu — it's more that she lacks the warming power of Blood.",
    },

    actions: [
      "Nourishes and harmonizes Blood (补血和血)",
      "Regulates menstruation (调经)",
      "Moistens dryness from Blood deficiency",
    ],
    actions_chinese: "补血和血，调经",

    pattern: "Blood Deficiency (Liver Blood Xu primarily)",
    pattern_chinese: "血虚证（肝血虚为主）",

    contraindications: [
      "Spleen Qi deficiency with loose stools — Shu Di Huang is too heavy/cloying, will worsen digestion",
      "Excess heat or fire patterns — tonifying Blood feeds the fire",
      "Dampness or Phlegm accumulation — heavy, sweet herbs worsen dampness",
      "Active bleeding — nourish Blood only AFTER bleeding stops",
    ],
    cautions: [
      "Shu Di Huang can be heavy on digestion — add Sha Ren or Chen Pi if patient has weak Spleen",
      "In Blood STASIS (not just deficiency), increase Chuan Xiong or add Tao Ren + Hong Hua",
      "Not enough for severe Qi + Blood dual deficiency — consider Ba Zhen Tang instead",
    ],

    differentiators: [
      { formula: "Xiao Yao San", difference: "Xiao Yao San addresses Blood Xu + Liver Qi STAGNATION + Spleen Xu. Si Wu Tang is PURELY Blood-nourishing. If the patient has mood swings and digestive issues with stress, use Xiao Yao San. If the dominant picture is 'pale, dry, scanty periods' without stagnation signs, use Si Wu Tang." },
      { formula: "Ba Zhen Tang", difference: "Ba Zhen Tang = Si Wu Tang + Si Jun Zi Tang. It treats DUAL Qi + Blood deficiency. If the patient has Blood Xu signs PLUS significant fatigue, shortness of breath, and weak pulse on BOTH sides, upgrade to Ba Zhen Tang." },
      { formula: "Bu Gan Tang", difference: "Bu Gan Tang is Si Wu Tang + Suan Zao Ren + Mu Gua + Zhi Gan Cao. It targets Blood/Yin Xu with NEUROLOGICAL symptoms: severe muscle cramps, dry eyes, specific insomnia pattern. Use it when Blood Xu has progressed to sinew malnutrition." },
      { formula: "Dang Gui Shao Yao San", difference: "Dang Gui Shao Yao San focuses on Blood Xu with DAMPNESS and PAIN (abdominal). Si Wu Tang is for pure Blood Xu without dampness." },
    ],

    modifications: [
      { condition: "Blood stasis (dark clotted periods)", herbs_add: "Tao Ren 9g, Hong Hua 6g → becomes Tao Hong Si Wu Tang" },
      { condition: "Qi deficiency alongside Blood Xu", herbs_add: "Ren Shen 9g, Bai Zhu 9g, Fu Ling 12g, Zhi Gan Cao 3g → becomes Ba Zhen Tang" },
      { condition: "Insomnia + muscle cramps (sinew malnutrition)", herbs_add: "Suan Zao Ren 15g, Mu Gua 9g, Zhi Gan Cao 6g → becomes Bu Gan Tang" },
      { condition: "Internal cold with Blood Xu", herbs_add: "Rou Gui 3g, Wu Zhu Yu 3g → warming blood nourishment, or use Wen Jing Tang" },
      { condition: "Heavy/prolonged menstruation", herbs_add: "Ai Ye 9g, E Jiao 9g (melted)" },
      { condition: "Heat in the Xue", herbs_add: "Sheng Di. Severe: add Chi Shao" },
      { condition: "Short menses", herbs_add: "Di Gu Pi, Mu Dan Pi" },
      { condition: "Cold womb", herbs_add: "Ai Ye, Xiang Fu" },
    ],

    modern_applications: [
      "Iron deficiency anemia",
      "Irregular menstruation (scanty/late periods)",
      "Post-partum blood loss recovery",
      "Chronic fatigue with Blood deficiency pattern",
      "Dermatological conditions (dry skin, eczema from Blood Xu)",
      "Restless leg syndrome",
      "Hair loss (alopecia from Blood deficiency)",
    ],

    color: "#c74b8e",
  },

  // ============================================================
  // 4. XIAO CHAI HU TANG 小柴胡汤
  // ============================================================
  "xiao-chai-hu-tang": {
    id: "xiao-chai-hu-tang",
    name_pinyin: "Xiǎo Chái Hú Tāng",
    name_chinese: "小柴胡汤",
    name_english: "Minor Bupleurum Decoction",
    category: "Harmonizing Formulas (和解剂)",
    source: "Shang Han Lun (c. 220 CE, Zhang Zhongjing)",
    source_chinese: "伤寒论",

    composition: [
      { pinyin: "Chai Hu", chinese: "柴胡", latin: "Radix Bupleuri", dosage: "12g", role: "jun", role_name: "King", function: "Releases the exterior, spreads Liver Qi, raises Yang Qi" },
      { pinyin: "Huang Qin", chinese: "黄芩", latin: "Radix Scutellariae", dosage: "9g", role: "chen", role_name: "Minister", function: "Clears interior heat, dries dampness" },
      { pinyin: "Ban Xia", chinese: "半夏", latin: "Rhizoma Pinelliae", dosage: "9g", role: "zuo", role_name: "Assistant", function: "Harmonizes Stomach, descends rebellious Qi, resolves phlegm" },
      { pinyin: "Ren Shen", chinese: "人参", latin: "Radix Ginseng", dosage: "6g", role: "zuo", role_name: "Assistant", function: "Tonifies Qi, supports Zheng Qi to expel pathogen" },
      { pinyin: "Sheng Jiang", chinese: "生姜", latin: "Rhizoma Zingiberis Recens", dosage: "9g", role: "zuo", role_name: "Assistant", function: "Warms Middle, assists Ban Xia, releases exterior" },
      { pinyin: "Da Zao", chinese: "大枣", latin: "Fructus Jujubae", dosage: "4 pieces", role: "shi", role_name: "Envoy", function: "Nourishes Qi and Blood, harmonizes Ying and Wei" },
      { pinyin: "Zhi Gan Cao", chinese: "炙甘草", latin: "Radix Glycyrrhizae Praeparata", dosage: "6g", role: "shi", role_name: "Envoy", function: "Harmonizes all herbs, tonifies Middle Qi" },
    ],

    clinical_picture: {
      summary: "The quintessential Shao Yang formula — the pathogen is 'half-exterior, half-interior.' The patient is stuck between stages of illness: not fully sick, not fully well. The hallmark is alternating symptoms and the characteristic right subcostal fullness. This formula 'pivots' the pathogen out.",
      tongue: "Thin white coating, may have slight yellow tinge. Body normal or slightly red on sides.",
      pulse: "Wiry (弦 xián), may be slightly rapid. The key is the WIRY quality, especially at the right Guan position.",
      key_symptoms: [
        "Alternating chills and fever (往来寒热) — the signature symptom",
        "Fullness and discomfort in the chest and hypochondrium",
        "Right subcostal resistance on palpation",
        "Bitter taste in the mouth, especially morning",
        "Dry throat",
        "Nausea, poor appetite",
        "Blurred vision, dizziness",
        "Irritability, feeling 'stuck'",
      ],
      constitutional_type: "Chai Hu Type (柴胡体质) — Medium build, subcostal tension, emotional reactivity. Average constitution — not as strong as Da Chai Hu Tang type, not as weak as Xiao Yao San type.",
      typical_patient: "A 40-year-old teacher who's had a cold for over a week that won't fully resolve. She feels feverish in the afternoon then chilly in the evening. Her right side under the ribs feels tight and uncomfortable. She has a bitter taste every morning, no appetite, and feels nauseated but doesn't actually vomit. She's irritable about being sick for so long. She's not the robust type who needs Da Chai Hu Tang — she's average build, somewhat stressed.",
    },

    actions: [
      "Harmonizes Shao Yang (和解少阳)",
      "Releases half-exterior, half-interior patterns",
      "Regulates Qi mechanism of the Triple Burner",
    ],
    actions_chinese: "和解少阳",

    pattern: "Shao Yang Pattern (half-exterior, half-interior)",
    pattern_chinese: "少阳病证",

    contraindications: [
      "Pure exterior pattern (Tai Yang) — still needs to be released, not harmonized",
      "Pure interior excess heat (Yang Ming) — needs purging, not harmonizing",
      "Liver Blood/Yin deficiency — Chai Hu can be too drying and ascending",
      "Upper excess with lower deficiency — Chai Hu raises Yang which may worsen headache",
    ],
    cautions: [
      "If patient has true Yin Xu, Chai Hu's ascending nature may aggravate night sweats",
      "Long-term use should be monitored — can deplete Yin if used too long",
      "In practice, rarely used as a standalone formula — usually modified",
    ],

    differentiators: [
      { formula: "Da Chai Hu Tang", difference: "Da Chai Hu Tang adds purging (Da Huang, Zhi Shi) for Shao Yang + Yang Ming combined pattern with constipation. Use Xiao Chai Hu Tang when there's NO constipation and NO Yang Ming excess." },
      { formula: "Chai Hu Gui Zhi Gan Jiang Tang", difference: "For Shao Yang + interior COLD. The patient has chills dominant over fever, chest discomfort, and thirst without desire to drink. Replace warming strategy." },
      { formula: "Xiao Yao San", difference: "Xiao Yao San is for CHRONIC Liver-Spleen disharmony. Xiao Chai Hu Tang is more for ACUTE/sub-acute Shao Yang pathogen." },
    ],

    modifications: [
      { condition: "Severe chest fullness", herbs_add: "Zhi Shi 6g, Gua Lou 12g", herbs_remove: "Da Zao" },
      { condition: "Pronounced thirst", herbs_add: "Tian Hua Fen 12g", herbs_remove: "Ban Xia" },
      { condition: "Abdominal pain", herbs_add: "Bai Shao 12g", herbs_remove: "Huang Qin" },
      { condition: "Palpitations with urinary difficulty", herbs_add: "Fu Ling 12g, Gui Zhi 6g", herbs_remove: "Huang Qin" },
      { condition: "Cough with phlegm", herbs_add: "Wu Wei Zi 6g, Gan Jiang 3g", herbs_remove: "Ren Shen, Da Zao" },
      { condition: "Damp accumulation", herbs_add: "Ping Wei San → becomes Chai Ping Tang" },
      { condition: "Phlegm heat accumulation", herbs_add: "→ See Chai Xian Tang" },
      { condition: "Tai yang, shao yang disorder with common cold", herbs_add: "→ See Chai Hu Gui Zhi Tang" },
      { condition: "Nausea, vomiting", herbs_add: "Mu Xiang, Sha Ren → See Xiang Sha Chai Hu Tang" },
      { condition: "Liver (organ) disorders, Hepatitis C", herbs_add: "Yin Chen Hao Tang, if xue yu + yan hu sou" },
      { condition: "Vertigo", herbs_add: "Ju Hua, Gou Teng, Jue Ming Zi" },
      { condition: "Headache", herbs_add: "Chuan Xiong" },
    ],

    modern_applications: [
      "Common cold/flu that lingers (post-viral syndrome)",
      "Chronic hepatitis and liver inflammation",
      "Cholecystitis (mild, non-surgical)",
      "Malaria and intermittent fevers",
      "Chronic fatigue with Shao Yang pattern",
      "Autoimmune conditions with alternating flares",
      "Post-COVID lingering symptoms",
    ],

    dpiRemarks: "Use food stagnation herbs in relation to the food sensitivity. Xiao Chai Hu Tang regulates the Shao Yang, treats mild condition or chronic condition. Medium constitution.",
    treatmentTime: "Variable. Use as base formula with modifications.",

    color: "#4b7ee5",
  },

  // ============================================================
  // 5. LONG DAN XIE GAN TANG 龙胆泻肝汤
  // ============================================================
  "long-dan-xie-gan-tang": {
    id: "long-dan-xie-gan-tang",
    name_pinyin: "Lóng Dǎn Xiè Gān Tāng",
    name_chinese: "龙胆泻肝汤",
    name_english: "Gentiana Decoction to Drain the Liver",
    category: "Heat-Clearing Formulas (清热剂)",
    source: "Yi Fang Ji Jie (1682 CE, Wang Ang)",
    source_chinese: "医方集解",

    composition: [
      { pinyin: "Long Dan Cao", chinese: "龙胆草", latin: "Radix Gentianae", dosage: "6g", role: "jun", role_name: "King", function: "Drains Liver/Gallbladder fire, clears Damp-Heat from lower Jiao" },
      { pinyin: "Huang Qin", chinese: "黄芩", latin: "Radix Scutellariae", dosage: "9g", role: "chen", role_name: "Minister", function: "Clears heat from upper and middle Jiao" },
      { pinyin: "Zhi Zi", chinese: "栀子", latin: "Fructus Gardeniae", dosage: "9g", role: "chen", role_name: "Minister", function: "Clears heat from all three Jiao, drains fire downward" },
      { pinyin: "Ze Xie", chinese: "泽泻", latin: "Rhizoma Alismatis", dosage: "12g", role: "zuo", role_name: "Assistant", function: "Drains Damp-Heat through urination" },
      { pinyin: "Mu Tong", chinese: "木通", latin: "Caulis Akebiae", dosage: "6g", role: "zuo", role_name: "Assistant", function: "Clears Heart heat, promotes urination" },
      { pinyin: "Che Qian Zi", chinese: "车前子", latin: "Semen Plantaginis", dosage: "9g", role: "zuo", role_name: "Assistant", function: "Promotes urination, clears Damp-Heat" },
      { pinyin: "Dang Gui", chinese: "当归", latin: "Radix Angelicae Sinensis", dosage: "6g", role: "zuo", role_name: "Assistant", function: "Protects Blood/Yin from harsh cold herbs" },
      { pinyin: "Sheng Di Huang", chinese: "生地黄", latin: "Radix Rehmanniae", dosage: "9g", role: "zuo", role_name: "Assistant", function: "Nourishes Yin, prevents cold herbs from damaging Yin" },
      { pinyin: "Chai Hu", chinese: "柴胡", latin: "Radix Bupleuri", dosage: "6g", role: "shi", role_name: "Envoy", function: "Guides herbs to the Liver channel" },
      { pinyin: "Gan Cao", chinese: "甘草", latin: "Radix Glycyrrhizae", dosage: "3g", role: "shi", role_name: "Envoy", function: "Harmonizes, protects Stomach from bitter/cold herbs" },
    ],

    clinical_picture: {
      summary: "The 'fire extinguisher' for Liver/Gallbladder excess fire and Damp-Heat in the lower Jiao. This formula is ONLY for STRONG patients with clear excess heat signs. The patient looks and feels HOT — red face, red eyes, irritable, strong pulse. There's often a damp-heat component in the lower body (urinary or genital symptoms).",
      tongue: "Red body, thick yellow greasy coating. May have red spots on the sides (Liver area).",
      pulse: "Wiry (弦), rapid (数), forceful (有力). Strong, full — never thin or weak.",
      key_symptoms: [
        "Red, swollen, painful eyes (acute conjunctivitis pattern)",
        "Headache (throbbing, temporal or vertex)",
        "Bitter taste in the mouth — intense, not mild",
        "Irritability and angry outbursts",
        "Tinnitus (sudden onset, loud, high-pitched)",
        "Hypochondriac pain (sharp, not dull)",
        "Dark, scanty, burning urination",
        "Genital itching, swelling, or discharge (Damp-Heat)",
        "Herpes outbreaks (genital or oral)",
      ],
      constitutional_type: "Da Huang Type (大黄体质) or strong Chai Hu Type — MUST be robust. Red face, strong voice, forceful pulse. NEVER use for thin/pale/deficient patients.",
      typical_patient: "A 45-year-old man, stocky, red-faced, who comes in furious about his sudden hearing loss (tinnitus). His eyes are bloodshot, he has a splitting headache, and he mentions burning urination and testicular itching. His blood pressure is elevated. He smells slightly of alcohol and admits to heavy drinking. When you check his pulse, it's pounding — strong and rapid. His tongue is bright red with thick yellow coating. This is a FULL EXCESS pattern.",
    },

    actions: [
      "Drains Liver and Gallbladder fire (泻肝胆实火)",
      "Clears and drains Damp-Heat from the lower Jiao (清利下焦湿热)",
    ],
    actions_chinese: "泻肝胆实火，清利下焦湿热",

    pattern: "Liver/Gallbladder Excess Fire + Lower Jiao Damp-Heat",
    pattern_chinese: "肝胆实火上扰证 / 肝经湿热下注证",

    contraindications: [
      "DEFICIENT patients — this is a strongly draining formula that will harm Spleen Yang and deplete Qi",
      "Spleen Qi deficiency with loose stools — will cause severe diarrhea",
      "Yin deficiency with empty heat — looks like fire but is deficiency, will make worse",
      "Pregnancy — too cold and draining",
      "Long-term use — maximum 1-2 weeks, then reassess",
      "Elderly or chronically ill patients with underlying weakness",
    ],
    cautions: [
      "SHORT-TERM USE ONLY — 7-14 days maximum. This formula damages Spleen Yang with prolonged use.",
      "Monitor digestion closely — if stools become loose, reduce or stop",
      "Mu Tong (Caulis Akebiae) has been associated with nephrotoxicity — use Guan Mu Tong (Aristolochia manshuriensis) alternatives carefully",
      "Always confirm the patient is truly EXCESS before prescribing — Yin Xu empty heat mimics this pattern",
    ],

    differentiators: [
      { formula: "Da Chai Hu Tang", difference: "Da Chai Hu Tang treats Shao Yang + Yang Ming with CONSTIPATION and DRY heat. Long Dan Xie Gan Tang treats Liver Fire + DAMP-Heat (urinary/genital symptoms). Different heat types — dry vs. damp." },
      { formula: "Xiao Yao San", difference: "Completely opposite approach! Xiao Yao San TONIFIES a DEFICIENT Liver. Long Dan Xie Gan Tang DRAINS an EXCESS Liver. Using Xiao Yao San on a Long Dan patient would be like adding fuel to fire. Using Long Dan on a Xiao Yao patient would devastate their Qi." },
      { formula: "Tian Ma Gou Teng Yin", difference: "Tian Ma Gou Teng Yin treats Liver WIND from Yin deficiency (tremors, HBP, dizziness). Long Dan Xie Gan Tang treats Liver FIRE excess. Wind vs. Fire, deficiency root vs. excess root." },
    ],

    modifications: [
      { condition: "Severe constipation with heat", herbs_add: "Da Huang 6g" },
      { condition: "High blood pressure crisis", herbs_add: "Xia Ku Cao 12g, Ju Hua 9g" },
      { condition: "Severe eye inflammation", herbs_add: "Ju Hua 9g, Jue Ming Zi 12g" },
      { condition: "Genital herpes outbreak", herbs_add: "Ban Lan Gen 15g, Tu Fu Ling 15g" },
    ],

    modern_applications: [
      "Acute conjunctivitis",
      "Acute otitis media",
      "Hypertension crisis (Liver fire type)",
      "Urinary tract infection (acute)",
      "Genital herpes / herpes zoster",
      "Acute migraine (Liver fire type)",
      "Hyperthyroidism with excess heat pattern",
      "Acute cholecystitis",
    ],

    color: "#e5a34b",
  },

  // ============================================================
  // 6. BU ZHONG YI QI TANG 补中益气汤
  // ============================================================
  "bu-zhong-yi-qi-tang": {
    id: "bu-zhong-yi-qi-tang",
    name_pinyin: "Bǔ Zhōng Yì Qì Tāng",
    name_chinese: "补中益气汤",
    name_english: "Tonify the Middle and Augment the Qi Decoction",
    category: "Qi-Tonifying Formulas (补气剂)",
    source: "Pi Wei Lun (1249 CE, Li Dong-Yuan)",
    source_chinese: "脾胃论",

    composition: [
      { pinyin: "Huang Qi", chinese: "黄芪", latin: "Radix Astragali", dosage: "15-30g", role: "jun", role_name: "King", function: "Tonifies Qi, raises Yang, stabilizes the exterior" },
      { pinyin: "Ren Shen", chinese: "人参", latin: "Radix Ginseng", dosage: "9g", role: "chen", role_name: "Minister", function: "Strongly tonifies Yuan Qi, strengthens Spleen" },
      { pinyin: "Bai Zhu", chinese: "白术", latin: "Rhizoma Atractylodis Macrocephalae", dosage: "9g", role: "chen", role_name: "Minister", function: "Strengthens Spleen, dries Dampness" },
      { pinyin: "Zhi Gan Cao", chinese: "炙甘草", latin: "Radix Glycyrrhizae Praeparata", dosage: "6g", role: "zuo", role_name: "Assistant", function: "Tonifies Qi, harmonizes all herbs" },
      { pinyin: "Dang Gui", chinese: "当归", latin: "Radix Angelicae Sinensis", dosage: "6g", role: "zuo", role_name: "Assistant", function: "Nourishes Blood to support Qi (Qi leads Blood)" },
      { pinyin: "Chen Pi", chinese: "陈皮", latin: "Pericarpium Citri Reticulatae", dosage: "6g", role: "zuo", role_name: "Assistant", function: "Regulates Qi, prevents stagnation from tonifying herbs" },
      { pinyin: "Sheng Ma", chinese: "升麻", latin: "Rhizoma Cimicifugae", dosage: "3g", role: "shi", role_name: "Envoy", function: "Raises Yang Qi, lifts sunken Qi" },
      { pinyin: "Chai Hu", chinese: "柴胡", latin: "Radix Bupleuri", dosage: "3g", role: "shi", role_name: "Envoy", function: "Raises Yang Qi, guides formula upward" },
    ],

    clinical_picture: {
      summary: "The master formula for Spleen/Stomach Qi deficiency with 'sinking' Yang Qi. Everything is falling: energy, organs (prolapse), mood, appetite. The patient is exhausted, can't hold things up — literally (organ prolapse) or figuratively (chronic fatigue, low motivation). Li Dong-Yuan created this specifically for conditions caused by overwork, poor diet, and emotional strain damaging the Spleen.",
      tongue: "Pale body, thin white coating. May show teeth marks (Spleen Qi Xu). Often looks swollen and flabby.",
      pulse: "Deficient (虚), soft (濡), especially weak at the right Guan (Spleen) position. May feel like it 'sinks' under pressure.",
      key_symptoms: [
        "Chronic fatigue — worse after eating or physical activity",
        "Spontaneous sweating (Qi can't hold Wei Qi)",
        "Shortness of breath, reluctance to speak",
        "Loose stools, poor appetite, bloating after meals",
        "Organ prolapse (uterine, rectal, gastric, hemorrhoids)",
        "Chronic diarrhea that doesn't resolve",
        "Feeling of 'heaviness' and bearing-down sensation",
        "Low-grade fever that worsens with exertion (Qi deficiency fever)",
        "Dizziness when standing (Qi can't raise clear Yang)",
      ],
      constitutional_type: "Huang Qi Type (黄芪体质) — Puffy, soft flesh, spontaneous sweating, weak immunity, slow healing. The 'soft, saggy' constitution.",
      typical_patient: "A 55-year-old woman who says 'I have no energy for anything.' She sweats just from walking up stairs, has loose stools 3-4 times daily, and recently noticed a feeling of heaviness in her lower abdomen (early uterine prolapse). She catches every cold that goes around. She looks puffy — not overweight, but soft and swollen. Her face is pale-yellow. She speaks softly and sighs often — not from Liver Qi stagnation, but from sheer exhaustion.",
    },

    actions: [
      "Tonifies Middle Qi (补中益气)",
      "Raises sunken Yang Qi (升阳举陷)",
      "Treats Qi deficiency fever (甘温除大热)",
    ],
    actions_chinese: "补中益气，升阳举陷",

    pattern: "Spleen/Stomach Qi Deficiency with Qi Sinking",
    pattern_chinese: "脾胃气虚，中气下陷证",

    contraindications: [
      "Excess heat patterns — tonifying Qi feeds fire",
      "Yin deficiency with heat signs — Huang Qi and Chai Hu will worsen",
      "Hypertension from Liver Yang rising — Sheng Ma and Chai Hu raise Yang dangerously",
      "External pathogen present (cold/flu) — must resolve exterior first, then tonify",
    ],
    cautions: [
      "In patients with any Yin Xu signs, reduce Huang Qi dose and monitor for dryness",
      "Sheng Ma and Chai Hu doses should stay LOW (3g) — they are to 'lift', not to 'spread'",
      "If patient develops thirst or feels warm after taking, reduce dose",
    ],

    differentiators: [
      { formula: "Si Jun Zi Tang", difference: "Si Jun Zi Tang is the BASE Spleen Qi tonic without the raising/lifting component. Use Si Jun Zi Tang when there's simple Spleen Qi Xu without sinking/prolapse symptoms." },
      { formula: "Yu Ping Feng San", difference: "Yu Ping Feng San focuses on Wei Qi (defensive Qi) — frequent colds, spontaneous sweating. Bu Zhong Yi Qi Tang addresses deeper Middle Qi deficiency with sinking/prolapse." },
      { formula: "Xiao Yao San", difference: "Both address Spleen weakness, but Xiao Yao San's primary target is LIVER Qi stagnation affecting Spleen. Bu Zhong Yi Qi Tang targets the Spleen DIRECTLY when it's simply too weak." },
    ],

    modifications: [
      { condition: "Severe prolapse", herbs_add: "Increase Huang Qi to 30g, add Zhi Ke 6g" },
      { condition: "Chronic diarrhea", herbs_add: "Ge Gen 12g, Shan Yao 15g" },
      { condition: "Qi deficiency fever", herbs_add: "Increase Huang Qi to 30g" },
      { condition: "Heavy uterine bleeding from Qi not holding Blood", herbs_add: "Ai Ye 9g, E Jiao 9g" },
    ],

    modern_applications: [
      "Chronic fatigue syndrome",
      "Uterine prolapse",
      "Rectal prolapse",
      "Gastroptosis (stomach prolapse)",
      "Myasthenia gravis",
      "Chronic diarrhea",
      "Recurrent infections (weak immunity)",
      "Post-surgical recovery with exhaustion",
    ],

    dpiRemarks: "Huang Qi tree formula. The key raising formula for sunken Qi. When SP qi sinks it manifests as prolapse, hemorrhoids, chronic fatigue. Very commonly used with Yi Qi Chong Ming Tang for eye and ear function decline.",
    treatmentTime: "2-6 months, mid to low dosage. Long-term use possible with monitoring.",

    color: "#e5c94b",
  },

  // ============================================================
  // 7. GUI ZHI FU LING WAN 桂枝茯苓丸
  // ============================================================
  "gui-zhi-fu-ling-wan": {
    id: "gui-zhi-fu-ling-wan",
    name_pinyin: "Guì Zhī Fú Líng Wán",
    name_chinese: "桂枝茯苓丸",
    name_english: "Cinnamon Twig and Poria Pill",
    category: "Blood-Activating Formulas (活血化瘀剂)",
    source: "Jin Gui Yao Lue (c. 220 CE, Zhang Zhongjing)",
    source_chinese: "金匮要略",

    composition: [
      { pinyin: "Gui Zhi", chinese: "桂枝", latin: "Ramulus Cinnamomi", dosage: "9g", role: "jun", role_name: "King", function: "Warms channels, moves Blood, dissolves masses" },
      { pinyin: "Fu Ling", chinese: "茯苓", latin: "Poria", dosage: "9g", role: "chen", role_name: "Minister", function: "Strengthens Spleen, drains Dampness, calms spirit" },
      { pinyin: "Mu Dan Pi", chinese: "牡丹皮", latin: "Cortex Moutan", dosage: "9g", role: "zuo", role_name: "Assistant", function: "Cools Blood, disperses Blood stasis, clears heat from deficiency" },
      { pinyin: "Tao Ren", chinese: "桃仁", latin: "Semen Persicae", dosage: "9g", role: "zuo", role_name: "Assistant", function: "Breaks Blood stasis, moistens intestines" },
      { pinyin: "Chi Shao", chinese: "赤芍", latin: "Radix Paeoniae Rubra", dosage: "9g", role: "zuo", role_name: "Assistant", function: "Clears heat, cools Blood, disperses stasis" },
    ],

    clinical_picture: {
      summary: "Zhang Zhongjing's formula for Blood stasis in the lower Jiao — especially in gynecology. Originally for pregnant women with 'masses' causing restless fetus, it's now the go-to formula for any lower abdominal Blood stasis: cysts, fibroids, endometriosis. The formula is gentle but effective — it moves stasis without being too aggressive, making it safe for longer-term use.",
      tongue: "Dark or purple body, may have dark spots or purple sublingual veins. Coating may be normal or thin.",
      pulse: "Choppy/rough (涩 sè), may be wiry. There's a quality of obstruction — the Blood isn't flowing smoothly.",
      key_symptoms: [
        "Fixed, stabbing lower abdominal pain (不通则痛)",
        "Painful menstruation with dark, clotted blood",
        "Ovarian cysts or uterine fibroids",
        "Dark complexion, spider veins, varicose veins",
        "Purple or dark sublingual veins",
        "Masses or lumps in the lower abdomen",
        "History of surgical scars or trauma in pelvic area",
        "Endometriosis symptoms",
      ],
      constitutional_type: "Various — this is more pattern-based than constitutional. Often seen in women of reproductive age. Can occur in any body type when Blood stasis develops.",
      typical_patient: "A 38-year-old woman with diagnosed ovarian cysts who has painful periods with dark, clotted blood. She points to a specific spot in her lower left abdomen that always hurts — fixed location pain. Her complexion has a slightly dark, dull quality. Under her tongue, the veins are dark purple and distended. She may have had a history of pelvic surgery or difficult delivery. The pain is worse with pressure and worse at night.",
    },

    actions: [
      "Invigorates Blood and transforms stasis (活血化瘀)",
      "Dissolves masses and accumulations (消癥散结)",
    ],
    actions_chinese: "活血化瘀，消癥散结",

    pattern: "Blood Stasis in the Lower Jiao (with possible masses/accumulations)",
    pattern_chinese: "瘀血阻滞证（癥块）",

    contraindications: [
      "Pregnancy — Blood-moving herbs can cause miscarriage (though Zhang Zhongjing originally used it IN pregnancy for specific conditions, this requires expert judgment)",
      "Active heavy bleeding — moving Blood during hemorrhage worsens it",
      "Severe Qi/Blood deficiency — must tonify first, then move stasis",
      "Blood deficiency without stasis — this formula MOVES, doesn't NOURISH",
    ],
    cautions: [
      "During menstruation, may increase flow — this can be therapeutic (clearing stasis) but monitor",
      "If patient is also Blood-deficient, combine with Blood tonics (Si Wu Tang herbs)",
      "Long-term use is generally safe but reassess every 2-3 months",
    ],

    differentiators: [
      { formula: "Tao He Cheng Qi Tang", difference: "Tao He Cheng Qi Tang is for Blood stasis + HEAT in the lower Jiao with CONSTIPATION and mental agitation. It's much STRONGER — includes Da Huang for purging. Gui Zhi Fu Ling Wan is gentler, for chronic stasis without heat excess." },
      { formula: "Xue Fu Zhu Yu Tang", difference: "Xue Fu Zhu Yu Tang targets Blood stasis in the CHEST and UPPER body (chronic headaches, chest pain). Gui Zhi Fu Ling Wan targets LOWER Jiao stasis (gynecological, pelvic)." },
      { formula: "Dang Gui Shao Yao San", difference: "Dang Gui Shao Yao San treats Blood Xu + Dampness with PAIN. It NOURISHES and drains. Gui Zhi Fu Ling Wan MOVES stasis. If the patient is pale and deficient with pain, use Dang Gui Shao Yao San. If there are dark clots and fixed pain, use Gui Zhi Fu Ling Wan." },
    ],

    modifications: [
      { condition: "Uterine fibroids (large)", herbs_add: "San Leng 9g, E Zhu 9g" },
      { condition: "Endometriosis with severe pain", herbs_add: "Yan Hu Suo 9g, Wu Ling Zhi 9g" },
      { condition: "Blood stasis with Qi stagnation", herbs_add: "Xiang Fu 9g, Wu Yao 9g" },
      { condition: "Blood stasis with cold", herbs_add: "Increase Gui Zhi to 12g, add Wu Zhu Yu 3g" },
    ],

    modern_applications: [
      "Ovarian cysts",
      "Uterine fibroids",
      "Endometriosis",
      "Dysmenorrhea (Blood stasis type)",
      "Pelvic inflammatory disease (chronic)",
      "Post-surgical adhesions",
      "Prostatic hyperplasia",
      "Varicose veins",
    ],

    color: "#9b4be5",
  },

  // ============================================================
  // 8. BAN XIA XIE XIN TANG 半夏泻心汤
  // ============================================================
  "ban-xia-xie-xin-tang": {
    id: "ban-xia-xie-xin-tang",
    name_pinyin: "Bàn Xià Xiè Xīn Tāng",
    name_chinese: "半夏泻心汤",
    name_english: "Pinellia Decoction to Drain the Epigastrium",
    category: "Harmonizing Formulas (和解剂)",
    source: "Shang Han Lun (c. 220 CE, Zhang Zhongjing)",
    source_chinese: "伤寒论",

    composition: [
      { pinyin: "Ban Xia", chinese: "半夏", latin: "Rhizoma Pinelliae", dosage: "12g", role: "jun", role_name: "King", function: "Descends rebellious Qi, dissolves phlegm, stops vomiting" },
      { pinyin: "Huang Qin", chinese: "黄芩", latin: "Radix Scutellariae", dosage: "9g", role: "chen", role_name: "Minister", function: "Clears heat from the upper/middle Jiao" },
      { pinyin: "Huang Lian", chinese: "黄连", latin: "Rhizoma Coptidis", dosage: "3g", role: "chen", role_name: "Minister", function: "Clears Stomach heat, dries dampness" },
      { pinyin: "Gan Jiang", chinese: "干姜", latin: "Rhizoma Zingiberis", dosage: "6g", role: "zuo", role_name: "Assistant", function: "Warms Middle Jiao, dispels cold" },
      { pinyin: "Ren Shen", chinese: "人参", latin: "Radix Ginseng", dosage: "9g", role: "zuo", role_name: "Assistant", function: "Tonifies Spleen Qi, supports Middle Jiao" },
      { pinyin: "Da Zao", chinese: "大枣", latin: "Fructus Jujubae", dosage: "4 pieces", role: "shi", role_name: "Envoy", function: "Nourishes Qi, harmonizes Middle" },
      { pinyin: "Zhi Gan Cao", chinese: "炙甘草", latin: "Radix Glycyrrhizae Praeparata", dosage: "6g", role: "shi", role_name: "Envoy", function: "Harmonizes cold and hot herbs, protects Stomach" },
    ],

    clinical_picture: {
      summary: "The formula for the 'tangled' epigastrium — a condition where HEAT above and COLD below create a 'knot' (痞) in the stomach area. The patient feels a stubborn fullness in the epigastrium that isn't relieved by pressing (unlike food stagnation). This is a mixed hot-cold pattern: the Stomach has heat (nausea, bitter taste) while the Spleen has cold (diarrhea, borborygmus). The genius of this formula is using BOTH hot herbs (Gan Jiang) and cold herbs (Huang Qin, Huang Lian) simultaneously.",
      tongue: "Red tip, white greasy coating in the center/root. The tongue itself may show the hot-cold split: red edges but pale center.",
      pulse: "Wiry (弦) and slightly slippery (滑). May feel 'knotted' or uneven.",
      key_symptoms: [
        "Epigastric fullness and discomfort (心下痞) — the KEY symptom",
        "Fullness that is NOT hard on palpation (soft 痞, not hard 结)",
        "Nausea or vomiting",
        "Borborygmus (stomach rumbling)",
        "Diarrhea or loose stools",
        "Poor appetite with feeling of 'stuff stuck' in the stomach",
        "Bitter taste (heat above) + watery stools (cold below)",
        "May have belching or acid reflux",
      ],
      constitutional_type: "Ban Xia Type (半夏体质) or Huang Lian Type (黄连体质) — often overweight/puffy, phlegm-prone, with digestive issues. Can also be average build with chronic digestive complaints.",
      typical_patient: "A 45-year-old man who complains of constant bloating and fullness right in his stomach area. He says it feels like 'something is stuck there' but when you press, it's actually soft — no mass. He has nausea in the morning, a bitter taste, and his stomach rumbles loudly. Despite the fullness, he also has loose stools 2-3 times daily. He's been treated with antacids but they only partially help. He often feels both hot (in his chest/stomach area) and cold (in his lower abdomen/legs) at the same time.",
    },

    actions: [
      "Harmonizes Stomach, descends rebellious Qi (和胃降逆)",
      "Opens the 'knot' and disperses fullness (开结消痞)",
      "Simultaneously clears heat above and warms cold below",
    ],
    actions_chinese: "和胃降逆，开结消痞",

    pattern: "Mixed Cold-Heat with Qi knotting in the Epigastrium",
    pattern_chinese: "寒热错杂之痞证",

    contraindications: [
      "True food stagnation with hard, painful epigastrium — needs Bao He Wan first",
      "Pure cold pattern (Stomach Yang Xu) — doesn't need the bitter cold herbs",
      "Pure heat pattern (Stomach Fire) — doesn't need the warming herbs",
      "Yin deficiency with dry mouth and thirst — bitter/dry herbs will worsen",
    ],
    cautions: [
      "If heat dominates, increase Huang Lian; if cold dominates, increase Gan Jiang",
      "Ban Xia requires proper preparation (Zhi Ban Xia) to reduce toxicity",
      "Monitor for dryness in patients prone to Yin deficiency",
    ],

    differentiators: [
      { formula: "Li Zhong Wan", difference: "Li Zhong Wan is for PURE COLD in the Middle Jiao — no heat component at all. Use when everything is cold: pale tongue, white coating, no bitter taste, no nausea, just cold pain and watery diarrhea." },
      { formula: "Bao He Wan", difference: "Bao He Wan treats FOOD STAGNATION — the fullness is from overeating, it's HARD and painful on pressure, with foul belching. Ban Xia Xie Xin Tang treats Qi KNOTTING — the fullness is SOFT and not relieved by eating or fasting." },
      { formula: "Xiao Chai Hu Tang", difference: "Both use Chai Hu-Huang Qin. But Xiao Chai Hu Tang is for SHAO YANG pattern (alternating fever/chills, subcostal fullness). Ban Xia Xie Xin Tang is for EPIGASTRIC fullness with mixed cold-heat. Different location, different mechanism." },
    ],

    modifications: [
      { condition: "Acid reflux dominant", herbs_add: "Wu Zhu Yu 3g, increase Huang Lian to 6g → becomes Zuo Jin Wan idea within the formula" },
      { condition: "Severe diarrhea with undigested food", herbs_add: "Increase Gan Jiang to 9g, add Bai Zhu 9g" },
      { condition: "Pronounced nausea", herbs_add: "Increase Ban Xia to 15g, add Sheng Jiang 6g" },
      { condition: "Food stagnation component", herbs_add: "Shan Zha 12g, Shen Qu 9g" },
    ],

    modern_applications: [
      "Chronic gastritis",
      "Peptic ulcer disease",
      "Gastroesophageal reflux disease (GERD)",
      "Functional dyspepsia",
      "Irritable Bowel Syndrome (mixed type)",
      "H. pylori infection (adjunct therapy)",
      "Oral ulcers (recurrent aphthous stomatitis)",
      "Nausea from chemotherapy",
    ],

    dpiRemarks: "Qi type formula. Ban xia tree. The overall ban xia condition is either hard to diagnose or the patient has epigastric stiffness with a shift condition, fever, chill, tend to damp or phlegm cold or hot. In most conditions there will be no splashing water. Don't modify - move to the next stage.",
    treatmentTime: "Subacute to chronic. High mid to lower dosage. Overuse or high dosage will weaken the SP, but less common. Post ban xia xie xin tang can be many conditions. From qi xu to qi xu...",

    color: "#4bc9e5",
  },

  // ============================================================
  // 9. LIU WEI DI HUANG WAN 六味地黄丸
  // ============================================================
  "liu-wei-di-huang-wan": {
    id: "liu-wei-di-huang-wan",
    name_pinyin: "Liù Wèi Dì Huáng Wán",
    name_chinese: "六味地黄丸",
    name_english: "Six-Ingredient Pill with Rehmannia",
    category: "Yin-Tonifying Formulas (补阴剂)",
    source: "Xiao Er Yao Zheng Zhi Jue (1119 CE, Qian Yi)",
    source_chinese: "小儿药证直诀",

    composition: [
      { pinyin: "Shu Di Huang", chinese: "熟地黄", latin: "Radix Rehmanniae Praeparata", dosage: "24g", role: "jun", role_name: "King", function: "Nourishes Kidney Yin, fills the marrow" },
      { pinyin: "Shan Zhu Yu", chinese: "山茱萸", latin: "Fructus Corni", dosage: "12g", role: "chen", role_name: "Minister", function: "Nourishes Liver, secures Kidney essence" },
      { pinyin: "Shan Yao", chinese: "山药", latin: "Rhizoma Dioscoreae", dosage: "12g", role: "chen", role_name: "Minister", function: "Tonifies Spleen and Kidney, stabilizes essence" },
      { pinyin: "Ze Xie", chinese: "泽泻", latin: "Rhizoma Alismatis", dosage: "9g", role: "zuo", role_name: "Assistant", function: "Drains Kidney fire/dampness, prevents Shu Di from being too cloying" },
      { pinyin: "Mu Dan Pi", chinese: "牡丹皮", latin: "Cortex Moutan", dosage: "9g", role: "zuo", role_name: "Assistant", function: "Clears Liver fire/deficiency heat, cools Blood" },
      { pinyin: "Fu Ling", chinese: "茯苓", latin: "Poria", dosage: "9g", role: "zuo", role_name: "Assistant", function: "Strengthens Spleen, drains dampness, assists Shan Yao" },
    ],

    clinical_picture: {
      summary: "The 'three tonics, three drainers' formula — elegant balance. Three herbs NOURISH (Shu Di, Shan Zhu Yu, Shan Yao = Liver, Kidney, Spleen) while three herbs DRAIN (Ze Xie, Mu Dan Pi, Fu Ling = drain Kidney dampness, Liver fire, Spleen dampness). The result is gentle, sustainable Yin nourishment without creating stagnation. This is THE foundational Kidney Yin formula — the mother of all Yin tonics.",
      tongue: "Red body (may be deep red), little or no coating. In severe cases, the tongue is shiny and 'peeled' (geographic tongue). May have cracks.",
      pulse: "Thin (细 xì), rapid (数 shuò). May be floating and empty at the chi (Kidney) position. A 'fast but weak' pulse.",
      key_symptoms: [
        "Soreness and weakness in the lower back and knees (腰膝酸软) — the hallmark",
        "Night sweats (盗汗)",
        "Tinnitus (chronic, low-grade)",
        "Dizziness, especially with fatigue",
        "Dry mouth and throat, especially at night",
        "Five-palm heat (hands, feet, chest feel warm)",
        "Afternoon/evening low-grade fever",
        "Premature graying, tooth loosening",
        "Nocturnal emissions or decreased libido",
      ],
      constitutional_type: "Thin, dry constitution. May have been overworked or chronically ill. The 'burned-out' type — spent too much Yin through overwork, stress, or aging.",
      typical_patient: "A 52-year-old professional who works 60+ hours weekly. He's thin, with slightly flushed cheekbones. He complains of lower back pain that's WEAK (not sharp — that would be stasis), ringing in his ears that's been gradually worsening for years, and night sweats that soak his shirt. His mouth is always dry at night. His palms feel warm. He looks older than his age — hair graying early, skin dry. His pulse is thin and slightly fast. His tongue is red with almost no coating — just a bare, slightly cracked red surface.",
    },

    actions: [
      "Nourishes Kidney Yin (滋阴补肾)",
      "Fills the marrow, strengthens bones",
      "Clears deficiency heat",
    ],
    actions_chinese: "滋阴补肾",

    pattern: "Kidney Yin Deficiency",
    pattern_chinese: "肾阴虚证",

    contraindications: [
      "Spleen Yang deficiency with loose stools — Shu Di is too heavy and cloying",
      "Cold pattern with pale tongue and slow pulse — this patient needs YANG tonification",
      "Phlegm-Damp accumulation — heavy, sweet herbs worsen dampness",
      "Acute external pathogen — resolve the exterior first",
    ],
    cautions: [
      "Shu Di Huang is heavy on digestion — take with or after meals",
      "If digestion is weak, start with lower doses and build up",
      "Not a quick-fix formula — requires 2-3 months minimum for effect",
    ],

    differentiators: [
      { formula: "Ba Wei Di Huang Wan (Jin Gui Shen Qi Wan)", difference: "Ba Wei Di Huang Wan = Liu Wei + Fu Zi + Rou Gui. It treats Kidney YANG deficiency. If the patient feels COLD (cold limbs, cold lower back, frequent clear urination, pale tongue), use Ba Wei. If the patient feels HOT/dry, use Liu Wei." },
      { formula: "Zuo Gui Yin", difference: "Zuo Gui Yin is a STRONGER Yin tonic — it removes the three draining herbs and adds more tonics. For severe Yin Xu. Liu Wei Di Huang Wan is the standard, balanced approach." },
      { formula: "Tian Wang Bu Xin Dan", difference: "Tian Wang Bu Xin Dan nourishes Heart + Kidney Yin specifically for INSOMNIA and palpitations. Use when Yin Xu manifests primarily as sleep and Heart symptoms." },
    ],

    modifications: [
      { condition: "Kidney Yang Xu (cold signs)", herbs_add: "Fu Zi 6g, Rou Gui 3g → becomes Ba Wei Di Huang Wan" },
      { condition: "Liver Yin Xu with eye symptoms", herbs_add: "Gou Qi Zi 12g, Ju Hua 9g → becomes Qi Ju Di Huang Wan" },
      { condition: "Lung Yin Xu with cough", herbs_add: "Mai Dong 12g, Wu Wei Zi 6g → becomes Mai Wei Di Huang Wan" },
      { condition: "Night sweats severe", herbs_add: "Mu Li 30g (煅), Wu Wei Zi 6g" },
      { condition: "Whizzing or when formula doesn't work well", herbs_add: "→ Du Qi Wan. If dry caught add Mai Men Dong (Bu Xiang Chang Shuo Wan)" },
      { condition: "Night sweating", herbs_add: "→ Zhi Bai Di Huang Wan" },
      { condition: "Excessive sweating during day with xue xu", herbs_add: "→ Ba Wei Di Huang Wan (not the classical, this is du qi wan + huang qi)" },
      { condition: "Neck disorders with dizziness, vertigo, tinnitus", herbs_add: "+ Tian Ma or → Tian Ma Gou Teng Wan" },
      { condition: "Back / knee pain", herbs_add: "Niu Xi, Du Zhong" },
      { condition: "Excessive urination", herbs_add: "Yi Zhi Ren or add Tu Si Zi Wan" },
      { condition: "Tinnitus", herbs_add: "Wu Wei Zi, Shi Chang Pu, Ci Shi" },
      { condition: "Insomnia", herbs_add: "Suan Zao Ren, Bai Zi Ren. Or add Suan Zao Ren Tang" },
    ],

    modern_applications: [
      "Chronic kidney disease (early stages)",
      "Diabetes mellitus (Yin Xu type)",
      "Hypertension (Yin Xu type)",
      "Menopausal syndrome",
      "Chronic tinnitus",
      "Osteoporosis",
      "Premature aging",
      "Chronic fatigue from overwork",
    ],

    dpiRemarks: "Xue type formula. Classic SHAO YIN formula that nourishes K yin and clear empty heat from above with dryness at the upper part of the body. Main function is to produce urination, activate the kidney organ and by that making the person drink more water. Usually Du qi wan is more common to use since its more potent or a stronger version. That's why more of the modification/variation formulas are for Du qi wan. The night sweating at Liu wei di huang wan it's not that common.",
    treatmentTime: "4 months to 1 year. Mid to low dosage level.",

    color: "#3d85c6",
  },

  // ============================================================
  // 10. DANG GUI SHAO YAO SAN 当归芍药散
  // ============================================================
  "dang-gui-shao-yao-san": {
    id: "dang-gui-shao-yao-san",
    name_pinyin: "Dāng Guī Sháo Yào Sǎn",
    name_chinese: "当归芍药散",
    name_english: "Tangkuei and Peony Powder",
    category: "Blood-Regulating Formulas (理血剂)",
    source: "Jin Gui Yao Lue (c. 220 CE, Zhang Zhongjing)",
    source_chinese: "金匮要略",

    composition: [
      { pinyin: "Bai Shao", chinese: "白芍", latin: "Radix Paeoniae Alba", dosage: "30g", role: "jun", role_name: "King", function: "Nourishes Blood, softens Liver, relieves pain — high dose is key" },
      { pinyin: "Dang Gui", chinese: "当归", latin: "Radix Angelicae Sinensis", dosage: "9g", role: "chen", role_name: "Minister", function: "Nourishes and moves Blood" },
      { pinyin: "Chuan Xiong", chinese: "川芎", latin: "Rhizoma Chuanxiong", dosage: "9g", role: "chen", role_name: "Minister", function: "Moves Blood, relieves pain" },
      { pinyin: "Bai Zhu", chinese: "白术", latin: "Rhizoma Atractylodis Macrocephalae", dosage: "12g", role: "zuo", role_name: "Assistant", function: "Strengthens Spleen, dries Dampness" },
      { pinyin: "Ze Xie", chinese: "泽泻", latin: "Rhizoma Alismatis", dosage: "12g", role: "zuo", role_name: "Assistant", function: "Drains Dampness, promotes urination" },
      { pinyin: "Fu Ling", chinese: "茯苓", latin: "Poria", dosage: "12g", role: "zuo", role_name: "Assistant", function: "Strengthens Spleen, drains Dampness" },
    ],

    clinical_picture: {
      summary: "Zhang Zhongjing's formula for Blood deficiency + Dampness with abdominal pain. Originally for pregnancy abdominal pain, it's now used broadly for gynecological pain where Blood Xu and Dampness coexist. The KEY insight: the high dose of Bai Shao (30g) — this is unusual and critical. It 'softens the Liver and nourishes Blood' while the three dampness-draining herbs (Bai Zhu, Ze Xie, Fu Ling) handle the water metabolism. It's gentler than Gui Zhi Fu Ling Wan.",
      tongue: "Pale body, may have teeth marks, slightly swollen. Coating white and slightly moist/greasy.",
      pulse: "Thin (细), may be slightly slippery (滑). Softer and weaker than average.",
      key_symptoms: [
        "Abdominal pain (dull, continuous, relieved by warmth and pressure)",
        "Edema — facial puffiness, ankle swelling",
        "Heavy feeling in the body and limbs",
        "Pale complexion with slight puffiness",
        "Vaginal discharge (white, thin, excessive)",
        "Irregular menstruation with abdominal discomfort",
        "Urinary difficulty or reduced urination",
        "Dizziness from Dampness obstructing clear Yang",
      ],
      constitutional_type: "Pale, puffy, soft body type. Often women with water retention. The 'damp-Blood-Xu' constitution — swollen and pale rather than thin and dry.",
      typical_patient: "A 32-year-old pregnant woman (or woman trying to conceive) who has chronic dull lower abdominal pain. Her face is puffy, especially in the morning. Her ankles swell by evening. She has excessive clear vaginal discharge. She feels heavy and tired, not from Qi Xu per se, but from dampness weighing her down. Her complexion is pale but slightly bloated — not the dry, thin pale of Si Wu Tang, but a WET pale. She retains water easily.",
    },

    actions: [
      "Nourishes Blood (养血)",
      "Softens the Liver and relieves pain (柔肝止痛)",
      "Strengthens Spleen and drains Dampness (健脾利湿)",
    ],
    actions_chinese: "养血柔肝，健脾利湿",

    pattern: "Blood Deficiency with Dampness Accumulation and Liver-Spleen Disharmony",
    pattern_chinese: "血虚湿阻，肝脾不和证",

    contraindications: [
      "Blood stasis with dark clots — not enough Blood-moving power, use Gui Zhi Fu Ling Wan",
      "Yin deficiency with dryness — dampness-draining herbs will worsen dryness",
      "Excess heat patterns — this is for deficiency-dampness, not excess heat",
    ],
    cautions: [
      "The high dose of Bai Shao (30g) is intentional — reducing it weakens the formula",
      "Safe during pregnancy (one of its original indications)",
      "If Blood stasis develops alongside, consider adding Gui Zhi Fu Ling Wan",
    ],

    differentiators: [
      { formula: "Si Wu Tang", difference: "Si Wu Tang is for PURE Blood Xu without dampness. If the patient is thin and DRY (dry skin, dry tongue), use Si Wu Tang. If the patient is pale but PUFFY and WET, use Dang Gui Shao Yao San." },
      { formula: "Gui Zhi Fu Ling Wan", difference: "Gui Zhi Fu Ling Wan MOVES Blood stasis (dark clots, fixed sharp pain, purple tongue). Dang Gui Shao Yao San NOURISHES Blood and drains Dampness (dull pain, puffiness, pale tongue). Stasis vs. Deficiency+Dampness." },
      { formula: "Xiao Yao San", difference: "Both address Liver-Spleen disharmony. But Xiao Yao San focuses on Liver QI STAGNATION (mood, stress). Dang Gui Shao Yao San focuses on Blood + DAMPNESS (physical pain, edema). Emotional vs. Physical emphasis." },
    ],

    modifications: [
      { condition: "Threatened miscarriage", herbs_add: "Xu Duan 12g, Sang Ji Sheng 12g" },
      { condition: "Severe edema", herbs_add: "Increase Ze Xie to 18g, add Yi Yi Ren 30g" },
      { condition: "Cold abdomen", herbs_add: "Ai Ye 9g, Xiang Fu 9g" },
      { condition: "Headache from dampness", herbs_add: "Tian Ma 9g, Ge Gen 12g" },
    ],

    modern_applications: [
      "Pregnancy-related abdominal pain (safe in pregnancy)",
      "Threatened miscarriage",
      "Chronic pelvic inflammatory disease",
      "Edema and water retention (hormonal)",
      "Polycystic ovary syndrome (PCOS) with dampness pattern",
      "Infertility (Blood Xu + Dampness type)",
      "Meniere's disease (dampness pattern)",
      "Chronic kidney disease (mild, with edema)",
    ],

    color: "#e5a3b3",
  },

  // ============================================================
  // 11. WEN JING TANG 温经汤
  // ============================================================
  "wen-jing-tang": {
    id: "wen-jing-tang",
    name_pinyin: "Wēn Jīng Tāng",
    name_chinese: "温经汤",
    name_english: "Warm the Menses Decoction",
    category: "Blood-Regulating Formulas (理血剂)",
    source: "Jin Gui Yao Lue (c. 220 CE, Zhang Zhongjing)",
    source_chinese: "金匮要略",

    composition: [
      { pinyin: "Wu Zhu Yu", chinese: "吴茱萸", latin: "Fructus Evodiae", dosage: "9g", role: "jun", role_name: "King", function: "Warms the Chong and Ren channels, disperses cold, moves Qi" },
      { pinyin: "Gui Zhi", chinese: "桂枝", latin: "Ramulus Cinnamomi", dosage: "6g", role: "jun", role_name: "King", function: "Warms channels, moves Blood, disperses cold" },
      { pinyin: "Dang Gui", chinese: "当归", latin: "Radix Angelicae Sinensis", dosage: "6g", role: "chen", role_name: "Minister", function: "Nourishes and moves Blood" },
      { pinyin: "Chuan Xiong", chinese: "川芎", latin: "Rhizoma Chuanxiong", dosage: "6g", role: "chen", role_name: "Minister", function: "Moves Blood, relieves pain" },
      { pinyin: "Bai Shao", chinese: "白芍", latin: "Radix Paeoniae Alba", dosage: "6g", role: "chen", role_name: "Minister", function: "Nourishes Blood, softens Liver" },
      { pinyin: "E Jiao", chinese: "阿胶", latin: "Colla Corii Asini", dosage: "6g", role: "zuo", role_name: "Assistant", function: "Nourishes Blood and Yin, stops bleeding" },
      { pinyin: "Mai Dong", chinese: "麦冬", latin: "Radix Ophiopogonis", dosage: "9g", role: "zuo", role_name: "Assistant", function: "Nourishes Yin, moistens dryness" },
      { pinyin: "Mu Dan Pi", chinese: "牡丹皮", latin: "Cortex Moutan", dosage: "6g", role: "zuo", role_name: "Assistant", function: "Clears deficiency heat, cools Blood, moves stasis" },
      { pinyin: "Ren Shen", chinese: "人参", latin: "Radix Ginseng", dosage: "6g", role: "zuo", role_name: "Assistant", function: "Tonifies Qi, supports Blood production" },
      { pinyin: "Ban Xia", chinese: "半夏", latin: "Rhizoma Pinelliae", dosage: "6g", role: "zuo", role_name: "Assistant", function: "Descends Qi, resolves phlegm" },
      { pinyin: "Sheng Jiang", chinese: "生姜", latin: "Rhizoma Zingiberis Recens", dosage: "3 slices", role: "shi", role_name: "Envoy", function: "Warms Stomach, assists Wu Zhu Yu" },
      { pinyin: "Gan Cao", chinese: "甘草", latin: "Radix Glycyrrhizae", dosage: "3g", role: "shi", role_name: "Envoy", function: "Harmonizes all herbs" },
    ],

    clinical_picture: {
      summary: "A sophisticated formula for deficiency-cold in the Chong and Ren channels with Blood stasis AND Blood/Yin deficiency. The clinical picture seems contradictory: the patient has COLD (in the uterus/lower Jiao) but also shows some HEAT signs (warm palms, dry lips). This is because deficiency-cold has damaged Yin over time, creating a mixed picture. The formula simultaneously WARMS cold, NOURISHES Blood/Yin, and MOVES stasis.",
      tongue: "Pale or pale-purple body. May have thin coating. Dry lips are characteristic.",
      pulse: "Thin (细), may be choppy (涩). Often slightly tight from cold.",
      key_symptoms: [
        "Irregular menstruation (early, late, or prolonged)",
        "Menstrual bleeding that is either excessive or prolonged spotting",
        "Cold lower abdomen (feels cold to touch)",
        "Warm palms in the evening (despite cold lower body) — the paradox",
        "Dry lips and mouth",
        "Infertility (cold uterus type)",
        "Lower abdominal pain relieved by warmth",
        "History of miscarriage",
      ],
      constitutional_type: "Women with cold constitution but showing some dryness/heat signs from long-term Yin damage. The 'cold below, dry above' type.",
      typical_patient: "A 36-year-old woman struggling with infertility. Her periods are irregular — sometimes early, sometimes late, and the blood is pale with small dark clots. Her lower abdomen feels cold — she always uses a hot water bottle. But oddly, her palms feel warm in the evening and her lips are dry. She's had two early miscarriages. Her gynecologist found no structural issue. She craves warmth but also gets thirsty easily. This mixed picture — cold uterus with Yin depletion — is classic Wen Jing Tang territory.",
    },

    actions: [
      "Warms the Chong and Ren channels (温经散寒)",
      "Nourishes Blood (养血)",
      "Dispels Blood stasis (祛瘀)",
      "Moistens Yin dryness (滋阴润燥)",
    ],
    actions_chinese: "温经散寒，养血祛瘀",

    pattern: "Deficiency-Cold in the Chong and Ren with Blood Stasis and Yin Damage",
    pattern_chinese: "冲任虚寒，瘀血阻滞证",

    contraindications: [
      "Excess heat pattern — warming herbs will fuel the fire",
      "Damp-Heat in the lower Jiao — warming + dampness creates more problems",
      "Active heavy menstrual bleeding with bright red blood — this indicates heat, not cold",
      "Pregnancy (once achieved) — Blood-moving components",
    ],
    cautions: [
      "Complex formula — 12 herbs with competing actions. Dosage balance is critical",
      "If primarily cold, emphasize Wu Zhu Yu and Gui Zhi; if primarily Yin Xu, emphasize Mai Dong and E Jiao",
      "Long-term formula — expect 3-6 months for fertility cases",
    ],

    differentiators: [
      { formula: "Si Wu Tang", difference: "Si Wu Tang is PURELY Blood-nourishing without warming. Use when Blood Xu is the main issue without cold signs. If the patient has a cold lower abdomen, Wen Jing Tang is more appropriate." },
      { formula: "Gui Zhi Fu Ling Wan", difference: "Gui Zhi Fu Ling Wan MOVES Blood stasis (strong pattern — dark clots, purple tongue). Wen Jing Tang treats deficiency-cold stasis (weaker pattern — pale clots, cold abdomen). Gui Zhi Fu Ling Wan doesn't nourish Yin." },
      { formula: "Ai Fu Nuan Gong Wan", difference: "Ai Fu Nuan Gong Wan is simpler — just warms the uterus. Wen Jing Tang is more comprehensive, addressing the Yin damage and Blood stasis alongside the cold." },
    ],

    modifications: [
      { condition: "Severe cold with minimal Yin Xu", herbs_add: "Increase Wu Zhu Yu to 12g, add Ai Ye 9g", herbs_remove: "Reduce Mai Dong" },
      { condition: "Pronounced Yin Xu (severe dry lips, night sweats)", herbs_add: "Increase Mai Dong to 12g, add Sheng Di 12g" },
      { condition: "Heavy menstrual bleeding", herbs_add: "Increase E Jiao to 9g, add Ai Ye 9g (charred)" },
      { condition: "Severe lower abdominal cold pain", herbs_add: "Xiao Hui Xiang 6g, Rou Gui 3g" },
    ],

    modern_applications: [
      "Female infertility (cold uterus type)",
      "Dysfunctional uterine bleeding",
      "Recurrent miscarriage",
      "Dysmenorrhea (cold-deficiency type)",
      "Anovulatory cycles",
      "Premature ovarian failure",
      "Menopausal syndrome (cold type with dryness)",
    ],

    color: "#e57a4b",
  },

  // ============================================================
  // 12. TIAN MA GOU TENG YIN 天麻钩藤饮
  // ============================================================
  "tian-ma-gou-teng-yin": {
    id: "tian-ma-gou-teng-yin",
    name_pinyin: "Tiān Má Gōu Téng Yǐn",
    name_chinese: "天麻钩藤饮",
    name_english: "Gastrodia and Uncaria Decoction",
    category: "Wind-Extinguishing Formulas (息风剂)",
    source: "Za Bing Zheng Zhi Xin Yi (1958 CE, Hu Guang-Ci)",
    source_chinese: "杂病证治新义",

    composition: [
      { pinyin: "Tian Ma", chinese: "天麻", latin: "Rhizoma Gastrodiae", dosage: "9g", role: "jun", role_name: "King", function: "Extinguishes Liver Wind, calms tremors and dizziness" },
      { pinyin: "Gou Teng", chinese: "钩藤", latin: "Ramulus Uncariae Cum Uncis", dosage: "12g", role: "jun", role_name: "King", function: "Clears Liver heat, extinguishes Wind, lowers blood pressure" },
      { pinyin: "Shi Jue Ming", chinese: "石决明", latin: "Concha Haliotidis", dosage: "18g", role: "chen", role_name: "Minister", function: "Subdues Liver Yang, clears Liver heat, improves vision" },
      { pinyin: "Zhi Zi", chinese: "栀子", latin: "Fructus Gardeniae", dosage: "9g", role: "chen", role_name: "Minister", function: "Clears heat, eliminates irritability" },
      { pinyin: "Huang Qin", chinese: "黄芩", latin: "Radix Scutellariae", dosage: "9g", role: "zuo", role_name: "Assistant", function: "Clears heat from upper Jiao" },
      { pinyin: "Niu Xi", chinese: "牛膝", latin: "Radix Achyranthis Bidentatae", dosage: "12g", role: "zuo", role_name: "Assistant", function: "Guides Blood downward, nourishes Liver/Kidney" },
      { pinyin: "Du Zhong", chinese: "杜仲", latin: "Cortex Eucommiae", dosage: "9g", role: "zuo", role_name: "Assistant", function: "Tonifies Liver/Kidney, strengthens sinews" },
      { pinyin: "Sang Ji Sheng", chinese: "桑寄生", latin: "Herba Taxilli", dosage: "9g", role: "zuo", role_name: "Assistant", function: "Nourishes Liver/Kidney, expels Wind-Dampness" },
      { pinyin: "Ye Jiao Teng", chinese: "夜交藤", latin: "Caulis Polygoni Multiflori", dosage: "9g", role: "zuo", role_name: "Assistant", function: "Calms spirit, nourishes Heart Blood" },
      { pinyin: "Fu Shen", chinese: "茯神", latin: "Sclerotium Poriae Pararadicis", dosage: "9g", role: "shi", role_name: "Envoy", function: "Calms spirit, tranquilizes mind" },
    ],

    clinical_picture: {
      summary: "For Liver Yang Rising with internal Wind — the classic hypertension formula in TCM. The patient has a 'top-heavy' feeling: dizziness, headache, tinnitus all concentrated in the head, while the lower body feels weak (Kidney Yin Xu below). Liver Yang rises unchecked because Kidney Yin can no longer anchor it. This formula subdues the rising Yang, extinguishes the Wind, and nourishes the Kidney root.",
      tongue: "Red body, may have yellow coating. Trembling tongue in severe cases.",
      pulse: "Wiry (弦) and strong, especially at the left Guan (Liver position). May be rapid.",
      key_symptoms: [
        "Headache (throbbing, vertex or temporal — feels like head will explode)",
        "Dizziness and vertigo (room spinning)",
        "Tinnitus (like rushing water or high-pitched)",
        "Insomnia, especially difficulty falling asleep",
        "Tremors or numbness in extremities",
        "Blurred vision, seeing 'spots'",
        "Irritability, feeling 'wired'",
        "Hypertension",
        "Lower back weakness (Kidney Yin Xu root)",
      ],
      constitutional_type: "Often middle-aged to elderly. May have been strong earlier in life but Yin has gradually depleted. Now has 'excess above, deficiency below' — strong upper body symptoms with weak lower body.",
      typical_patient: "A 58-year-old man recently diagnosed with hypertension. He has persistent headaches at the top and sides of his head, feels dizzy when he stands, and has developed a tremor in his hands. He can't sleep — his mind races at night. He has tinnitus that sounds like rushing water. His face appears flushed. Despite the upper body intensity, his lower back is weak and sore, and his knees feel unstable. His pulse is strongly wiry, especially on the left side.",
    },

    actions: [
      "Calms the Liver and extinguishes Wind (平肝息风)",
      "Clears heat and invigorates Blood (清热活血)",
      "Nourishes Kidney Yin to anchor Yang (补益肝肾)",
    ],
    actions_chinese: "平肝息风，清热活血，补益肝肾",

    pattern: "Liver Yang Rising with Liver Wind and Kidney Yin Deficiency",
    pattern_chinese: "肝阳上亢，肝风内动证",

    contraindications: [
      "Liver Blood/Yin deficiency without Yang rising — subduing Yang in a deficient patient worsens weakness",
      "Yang Qi deficiency with cold signs — these are cool/cold herbs that will damage Yang",
      "Wind-Cold exterior pattern — must resolve exterior first",
    ],
    cautions: [
      "Gou Teng should be added LAST when decocting (后下) — loses potency with prolonged boiling",
      "For acute hypertensive crisis, this formula may be too slow — consider emergency measures first",
      "Long-term management requires addressing the Kidney Yin root more aggressively",
    ],

    differentiators: [
      { formula: "Long Dan Xie Gan Tang", difference: "Long Dan Xie Gan Tang drains Liver FIRE excess (red eyes, bitter taste, burning urine). Tian Ma Gou Teng Yin treats Liver YANG RISING with WIND (dizziness, tremors, hypertension). Fire vs. Wind, though both involve the Liver." },
      { formula: "Liu Wei Di Huang Wan", difference: "Liu Wei Di Huang Wan nourishes Kidney Yin as the ROOT treatment. Tian Ma Gou Teng Yin addresses both the BRANCH (subduing Wind/Yang) and the ROOT (nourishing Kidney). For acute symptoms, use Tian Ma Gou Teng Yin; for long-term Yin nourishment, use Liu Wei Di Huang Wan." },
      { formula: "Zhen Gan Xi Feng Tang", difference: "Zhen Gan Xi Feng Tang is STRONGER for more severe Wind (pre-stroke, severe hypertension). It uses heavy minerals (Long Gu, Mu Li) to anchor Yang aggressively. Tian Ma Gou Teng Yin is more moderate and balanced." },
    ],

    modifications: [
      { condition: "Severe headache", herbs_add: "Ju Hua 9g, Man Jing Zi 9g" },
      { condition: "Pronounced tremors (pre-stroke warning)", herbs_add: "Long Gu 30g, Mu Li 30g (pre-cooked)" },
      { condition: "Severe insomnia", herbs_add: "Suan Zao Ren 15g, Long Gu 15g" },
      { condition: "Constipation with heat", herbs_add: "Da Huang 6g (added later)" },
    ],

    modern_applications: [
      "Essential hypertension",
      "Stroke prevention (TIA, warning signs)",
      "Meniere's disease (Liver Wind type)",
      "Essential tremor",
      "Migraine (Liver Yang type)",
      "Tinnitus (Liver Yang rising type)",
      "Eclampsia prevention",
      "Parkinson's disease (adjunct, Liver Wind pattern)",
    ],

    color: "#6b8e23",
  },

  // ============================================================
  // 13. JIA WEI XIAO YAO WAN 加味逍遥丸
  // ============================================================
  "jia-wei-xiao-yao-wan": {
    id: "jia-wei-xiao-yao-wan",
    name_pinyin: "Jiā Wèi Xiāo Yáo Wán",
    name_chinese: "加味逍遥丸",
    name_english: "Augmented Free and Easy Wanderer Pill",
    category: "Harmonizing Formulas (和解剂)",
    source: "Nei Ke Zhai Yao (1529 CE, Xue Ji)",
    source_chinese: "内科摘要",

    composition: [
      { pinyin: "Chai Hu", chinese: "柴胡", latin: "Radix Bupleuri", dosage: "9g", role: "jun", role_name: "King", function: "Spreads Liver Qi, relieves constraint" },
      { pinyin: "Dang Gui", chinese: "当归", latin: "Radix Angelicae Sinensis", dosage: "9g", role: "chen", role_name: "Minister", function: "Nourishes Blood, harmonizes Liver" },
      { pinyin: "Bai Shao", chinese: "白芍", latin: "Radix Paeoniae Alba", dosage: "12g", role: "chen", role_name: "Minister", function: "Nourishes Liver Blood, softens Liver" },
      { pinyin: "Bai Zhu", chinese: "白术", latin: "Rhizoma Atractylodis Macrocephalae", dosage: "9g", role: "zuo", role_name: "Assistant", function: "Strengthens Spleen, dries Dampness" },
      { pinyin: "Fu Ling", chinese: "茯苓", latin: "Poria", dosage: "12g", role: "zuo", role_name: "Assistant", function: "Strengthens Spleen, leaches Dampness" },
      { pinyin: "Mu Dan Pi", chinese: "牡丹皮", latin: "Cortex Moutan", dosage: "9g", role: "zuo", role_name: "Assistant", function: "Clears heat from Blood level, cools Liver fire" },
      { pinyin: "Zhi Zi", chinese: "栀子", latin: "Fructus Gardeniae", dosage: "6g", role: "zuo", role_name: "Assistant", function: "Clears heat, drains fire downward through urination" },
      { pinyin: "Bo He", chinese: "薄荷", latin: "Herba Menthae", dosage: "3g", role: "shi", role_name: "Envoy", function: "Assists Chai Hu in spreading Liver Qi, clears head" },
      { pinyin: "Sheng Jiang", chinese: "生姜", latin: "Rhizoma Zingiberis Recens", dosage: "3 slices", role: "shi", role_name: "Envoy", function: "Warms Middle Jiao, balances cold herbs" },
      { pinyin: "Zhi Gan Cao", chinese: "炙甘草", latin: "Radix Glycyrrhizae Praeparata", dosage: "3g", role: "shi", role_name: "Envoy", function: "Harmonizes all herbs, tonifies Qi" },
    ],

    clinical_picture: {
      summary: "Xiao Yao San with added Mu Dan Pi and Zhi Zi to clear heat. This is for the patient with Liver Qi Stagnation transforming into heat — the same emotional and digestive pattern as Xiao Yao San but now with clear heat signs: hot flashes, irritability that worsens in warm environments, PMS with fever and red face, or menopausal symptoms with both emotional volatility and heat.",
      tongue: "Red body, especially red edges (Liver heat). Thin yellow or thin white coating. May be slightly dry.",
      pulse: "Wiry (弦) and rapid (数). Left Guan position is particularly wiry and may feel slightly overflowing.",
      key_symptoms: [
        "All symptoms of Xiao Yao San PLUS heat signs",
        "Hot flashes, especially premenstrual or perimenopausal",
        "Irritability that is worse in heat or with alcohol",
        "Red face or flushed cheeks when angry or stressed",
        "PMS with breast distension AND heat sensation",
        "Insomnia with restlessness and vivid dreams",
        "Bitter taste in the mouth (intermittent)",
        "Constipation tendency (heat drying fluids)",
        "Red or bloodshot eyes when tired",
      ],
      constitutional_type: "Chai Hu Type (柴胡体质) — Same as Xiao Yao San type but with more heat accumulation. Often in their late 30s-50s when Yin is beginning to decline and stagnation generates heat.",
      typical_patient: "A 45-year-old woman going through perimenopause. She has the classic Xiao Yao San picture — stress at work causes digestive upset, mood swings, PMS — but now she also gets hot flashes, especially before her period. Her face flushes red when she's angry. She has trouble sleeping, waking between 1-3 AM feeling hot and irritable. Her tongue edges are noticeably red. She says 'I used to just feel moody before my period, now I feel like I'm on fire.'",
    },

    actions: [
      "Spreads Liver Qi (疏肝解郁)",
      "Nourishes Blood (养血)",
      "Strengthens Spleen (健脾)",
      "Clears Liver heat (清肝热)",
    ],
    actions_chinese: "疏肝解郁，养血健脾，清肝泻火",

    pattern: "Liver Qi Stagnation transforming into Heat with Spleen Deficiency and Blood Deficiency",
    pattern_chinese: "肝郁化火脾虚血虚证",

    contraindications: [
      "Pure Liver Qi Stagnation WITHOUT heat signs — use Xiao Yao San instead (the cooling herbs are unnecessary and may damage Spleen Yang)",
      "Strong excess Liver Fire with red face, constipation, strong full pulse — too mild, use Long Dan Xie Gan Tang",
      "Cold constitution with loose stools and cold limbs — Mu Dan Pi and Zhi Zi are too cooling",
    ],
    cautions: [
      "If Spleen Yang is weak, monitor for increased loose stools from the cooling herbs",
      "Reduce Zhi Zi dosage if the patient has a sensitive stomach",
      "Not sufficient alone for severe menopausal symptoms — may need Er Xian Tang or Zhi Bai Di Huang Wan for deeper Yin Xu",
    ],

    differentiators: [
      { formula: "Xiao Yao San", difference: "Xiao Yao San is the BASE formula without heat-clearing. Use Jia Wei when the patient has HEAT signs: hot flashes, red tongue edges, irritability worse with heat, red face. If no heat, stick with the original." },
      { formula: "Long Dan Xie Gan Tang", difference: "Long Dan Xie Gan Tang is for STRONG patients with EXCESS Liver Fire and Damp-Heat (red eyes, bitter taste, yellow vaginal discharge, dark urine). Jia Wei Xiao Yao Wan is for DEFICIENT patients where Qi stagnation has generated moderate heat — the underlying constitution is weak." },
      { formula: "Dan Zhi Xiao Yao San", difference: "Dan Zhi Xiao Yao San is the same formula — different name. 'Dan' (丹) refers to Mu Dan Pi, 'Zhi' (栀) refers to Zhi Zi." },
    ],

    modifications: [
      { condition: "Severe menopausal hot flashes", herbs_add: "Di Gu Pi 12g, Bai Wei 9g" },
      { condition: "Insomnia with vivid dreams", herbs_add: "Suan Zao Ren 15g, Zhi Mu 9g" },
      { condition: "PMS breast pain with lumps", herbs_add: "Xia Ku Cao 12g, Wang Bu Liu Xing 9g" },
      { condition: "Constipation from heat", herbs_add: "Huo Ma Ren 12g, Yu Li Ren 9g" },
      { condition: "Headaches (temporal)", herbs_add: "Ju Hua 9g, Man Jing Zi 9g" },
    ],

    modern_applications: [
      "Perimenopausal syndrome",
      "PMS with heat signs",
      "Chronic hepatitis with heat pattern",
      "Anxiety with autonomic dysfunction",
      "Functional hyperthyroidism (mild)",
      "Acne related to menstrual cycle and stress",
      "Fibrocystic breast disease with heat signs",
    ],

    color: "#c0547a",
  },

  // ============================================================
  // 14. CHAI HU SHU GAN WAN 柴胡疏肝丸
  // ============================================================
  "chai-hu-shu-gan-wan": {
    id: "chai-hu-shu-gan-wan",
    name_pinyin: "Chái Hú Shū Gān Wán",
    name_chinese: "柴胡疏肝丸",
    name_english: "Bupleurum Powder to Spread the Liver",
    category: "Qi-Regulating Formulas (理气剂)",
    source: "Jing Yue Quan Shu (1624 CE, Zhang Jingyue)",
    source_chinese: "景岳全书",

    composition: [
      { pinyin: "Chai Hu", chinese: "柴胡", latin: "Radix Bupleuri", dosage: "6g", role: "jun", role_name: "King", function: "Spreads Liver Qi, relieves constraint" },
      { pinyin: "Xiang Fu", chinese: "香附", latin: "Rhizoma Cyperi", dosage: "9g", role: "jun", role_name: "King", function: "Moves Liver Qi, alleviates pain, regulates menstruation" },
      { pinyin: "Chuan Xiong", chinese: "川芎", latin: "Rhizoma Chuanxiong", dosage: "6g", role: "chen", role_name: "Minister", function: "Moves Blood and Qi, stops pain — especially flanks and head" },
      { pinyin: "Bai Shao", chinese: "白芍", latin: "Radix Paeoniae Alba", dosage: "9g", role: "chen", role_name: "Minister", function: "Nourishes Liver Blood, softens Liver, stops pain" },
      { pinyin: "Zhi Ke", chinese: "枳壳", latin: "Fructus Aurantii", dosage: "6g", role: "zuo", role_name: "Assistant", function: "Moves Qi, reduces distension, opens the chest" },
      { pinyin: "Chen Pi", chinese: "陈皮", latin: "Pericarpium Citri Reticulatae", dosage: "6g", role: "zuo", role_name: "Assistant", function: "Regulates Qi, dries Dampness, harmonizes Middle Jiao" },
      { pinyin: "Zhi Gan Cao", chinese: "炙甘草", latin: "Radix Glycyrrhizae Praeparata", dosage: "3g", role: "shi", role_name: "Envoy", function: "Harmonizes herbs, moderates urgency of Qi-moving herbs" },
    ],

    clinical_picture: {
      summary: "The formula for Liver Qi Stagnation in a STRONGER patient where the primary complaint is PHYSICAL PAIN — hypochondriac distension, rib-side pain, chest tightness — rather than the emotional and digestive symptoms of Xiao Yao San. This patient is frustrated and tense but NOT fatigued. The Spleen is unaffected. The pain moves and worsens with emotional stress.",
      tongue: "Pale-red or slightly dark, thin white coating. May have slightly purple hue if Qi stagnation is prolonged.",
      pulse: "Wiry (弦), especially on the left. NOT deficient — has reasonable strength.",
      key_symptoms: [
        "Hypochondriac distension and pain (ribs, flanks)",
        "Chest tightness and sighing",
        "Pain that moves and is not fixed",
        "Pain worse with emotional stress or anger",
        "Abdominal bloating and distension",
        "Belching or nausea from Qi counterflow",
        "Intercostal neuralgia",
        "Epigastric discomfort related to Liver invading Stomach",
      ],
      constitutional_type: "Stronger Chai Hu Type — Not the fatigued, deficient type of Xiao Yao San. This patient has more physical energy but is tense and physically uncomfortable. Medium to strong build.",
      typical_patient: "A 42-year-old businessman who comes in complaining of constant rib-side discomfort that his doctor couldn't explain. MRI showed nothing. The pain is worse when he's stressed about work — 'It feels like something is stuck under my ribs.' He sighs a lot, his shoulders are tight, and he sometimes feels like he can't take a full breath. His digestion is fine when he's not stressed. He looks relatively strong and healthy — not the pale, tired Xiao Yao San type at all.",
    },

    actions: [
      "Spreads Liver Qi (疏肝理气)",
      "Moves Qi and alleviates pain (行气止痛)",
      "Harmonizes Blood (和血)",
    ],
    actions_chinese: "疏肝理气，行气止痛，和血",

    pattern: "Liver Qi Stagnation (primary Qi stagnation, stronger constitution)",
    pattern_chinese: "肝气郁结证",

    contraindications: [
      "Liver Qi Stagnation with Spleen deficiency and fatigue — use Xiao Yao San instead",
      "Liver Fire or Liver Yang Rising — too many warm Qi-moving herbs may increase fire",
      "Blood deficiency with pale tongue and thin pulse — needs blood nourishment first",
      "Yin deficiency — the warm, moving nature of the herbs may consume Yin",
    ],
    cautions: [
      "Not for long-term use without modification — strong Qi-moving herbs can consume Qi and Blood",
      "If pain becomes fixed and stabbing, consider adding Blood-moving herbs or switching to Xue Fu Zhu Yu Tang",
      "Monitor for stomach irritation — Qi-moving herbs can be harsh on a sensitive stomach",
    ],

    differentiators: [
      { formula: "Xiao Yao San", difference: "Xiao Yao San addresses Liver Qi Stagnation WITH Spleen deficiency — the patient is TIRED with DIGESTIVE issues. Chai Hu Shu Gan Wan is for a STRONGER patient whose main complaint is PHYSICAL PAIN and distension, not fatigue or mood." },
      { formula: "Si Ni San", difference: "Si Ni San is the base formula for cold extremities from Liver Qi constraint (Yang Qi trapped). Chai Hu Shu Gan Wan is its expansion with stronger Qi-moving and pain-stopping herbs." },
      { formula: "Long Dan Xie Gan Tang", difference: "Long Dan Xie Gan Tang drains EXCESS fire and damp-heat from the Liver. Chai Hu Shu Gan Wan moves stagnant Qi — no fire, no dampness, just stuck Qi causing pain." },
    ],

    modifications: [
      { condition: "Severe pain (intercostal)", herbs_add: "Yan Hu Suo 9g, Chuan Lian Zi 6g (= Jin Ling Zi San)" },
      { condition: "Qi stagnation causing acid reflux", herbs_add: "Zuo Jin Wan (Huang Lian 6g + Wu Zhu Yu 1g)" },
      { condition: "With Blood stasis (fixed pain)", herbs_add: "Dan Shen 12g, Yu Jin 9g" },
      { condition: "Plum-pit Qi (globus)", herbs_add: "Ban Xia 9g, Hou Po 6g, Zi Su Ye 6g" },
    ],

    modern_applications: [
      "Intercostal neuralgia",
      "Functional chest pain",
      "Chronic cholecystitis",
      "Functional dyspepsia (Liver invading Stomach type)",
      "Costal chondritis",
      "Stress-related epigastric pain",
      "Chronic gastritis (Liver-Stomach disharmony)",
    ],

    color: "#5e8b7e",
  },

  // ============================================================
  // 15. BA ZHEN TANG 八珍汤
  // ============================================================
  "ba-zhen-tang": {
    id: "ba-zhen-tang",
    name_pinyin: "Bā Zhēn Tāng",
    name_chinese: "八珍汤",
    name_english: "Eight Treasure Decoction",
    category: "Qi and Blood Tonifying Formulas (气血双补剂)",
    source: "Zheng Ti Lei Yao (1529 CE)",
    source_chinese: "正体类要",

    composition: [
      { pinyin: "Ren Shen", chinese: "人参", latin: "Radix Ginseng", dosage: "9g", role: "jun", role_name: "King", function: "Strongly tonifies Yuan Qi, strengthens Spleen" },
      { pinyin: "Bai Zhu", chinese: "白术", latin: "Rhizoma Atractylodis Macrocephalae", dosage: "9g", role: "chen", role_name: "Minister", function: "Strengthens Spleen, dries Dampness, generates Qi" },
      { pinyin: "Fu Ling", chinese: "茯苓", latin: "Poria", dosage: "9g", role: "chen", role_name: "Minister", function: "Strengthens Spleen, leaches Dampness, calms Shen" },
      { pinyin: "Zhi Gan Cao", chinese: "炙甘草", latin: "Radix Glycyrrhizae Praeparata", dosage: "3g", role: "zuo", role_name: "Assistant", function: "Tonifies Qi, harmonizes herbs" },
      { pinyin: "Shu Di Huang", chinese: "熟地黄", latin: "Radix Rehmanniae Praeparata", dosage: "15g", role: "jun", role_name: "King", function: "Strongly nourishes Blood and Yin, fills Kidney essence" },
      { pinyin: "Dang Gui", chinese: "当归", latin: "Radix Angelicae Sinensis", dosage: "9g", role: "chen", role_name: "Minister", function: "Nourishes and activates Blood, regulates menstruation" },
      { pinyin: "Bai Shao", chinese: "白芍", latin: "Radix Paeoniae Alba", dosage: "9g", role: "chen", role_name: "Minister", function: "Nourishes Liver Blood, softens Liver" },
      { pinyin: "Chuan Xiong", chinese: "川芎", latin: "Rhizoma Chuanxiong", dosage: "6g", role: "zuo", role_name: "Assistant", function: "Moves Blood, prevents stagnation from tonification" },
    ],

    clinical_picture: {
      summary: "The combination of Si Jun Zi Tang (Qi tonifying) + Si Wu Tang (Blood tonifying) for patients with DUAL Qi and Blood deficiency. This patient is pale, tired, and depleted — they lack both energy (Qi) and substance (Blood). Often seen after illness, surgery, childbirth, chronic bleeding, or prolonged overwork. Everything about them is 'not enough.'",
      tongue: "Pale, may be thin. Thin white coating. In severe cases, pale and enlarged with tooth marks.",
      pulse: "Thin (细) and weak (弱). Both Chi and Cun positions are deficient. May be slightly slow.",
      key_symptoms: [
        "Fatigue and weakness (both physical and mental)",
        "Pale or sallow complexion (面色萎黄)",
        "Dizziness and blurry vision",
        "Palpitations (Heart Blood deficiency)",
        "Shortness of breath, especially on exertion",
        "Poor appetite with loose stools (Spleen Qi Xu)",
        "Light or scanty menstruation, or amenorrhea",
        "Dry skin, brittle nails, hair loss",
        "Cold hands and feet",
        "Poor wound healing",
      ],
      constitutional_type: "Dual deficiency type — the patient appears depleted in every sense. Thin or soft body, no robustness, no redness. The 'emptied out' patient after chronic illness or blood loss.",
      typical_patient: "A 32-year-old woman 6 weeks postpartum. She lost significant blood during delivery and hasn't recovered. She's exhausted but can't sleep well (Blood not anchoring Shen). Her face is sallow-yellow, not pink. She has no appetite, feels dizzy when she stands up too fast, and her milk supply is low. Her hair is falling out more than normal postpartum. She catches every cold that goes around. Her pulse is barely palpable — thin and weak on both sides.",
    },

    actions: [
      "Tonifies Qi (益气)",
      "Nourishes Blood (养血)",
      "Strengthens Spleen and Stomach (健脾和胃)",
    ],
    actions_chinese: "益气补血",

    pattern: "Qi and Blood Dual Deficiency",
    pattern_chinese: "气血两虚证",

    contraindications: [
      "Any excess pattern — stagnation, heat, or dampness. Tonifying into stagnation makes it worse.",
      "Liver Qi Stagnation — must resolve stagnation before or simultaneously with tonification",
      "External pathogen present (cold/flu) — tonifying traps the pathogen inside",
      "Spleen Dampness with thick greasy tongue coating — Shu Di and Dang Gui are cloying and worsen dampness",
    ],
    cautions: [
      "Shu Di Huang is heavy and cloying — if digestion is very weak, reduce dose or add Sha Ren to help digestion",
      "If patient has any stagnation signs, add Qi-moving herbs (Chen Pi, Xiang Fu) to prevent 'tonification stagnation'",
      "Not for acute blood loss — stabilize first, then tonify",
    ],

    differentiators: [
      { formula: "Si Jun Zi Tang", difference: "Si Jun Zi Tang tonifies Qi ONLY. Use when Blood is not significantly deficient — the patient is tired and has digestive weakness but is not pale/dizzy. Ba Zhen Tang adds the Blood-nourishing component." },
      { formula: "Si Wu Tang", difference: "Si Wu Tang tonifies Blood ONLY. Use when Qi is intact — the patient has dry skin, blurry vision, scanty menses but energy is reasonable. Ba Zhen Tang adds the Qi-tonifying base." },
      { formula: "Shi Quan Da Bu Tang", difference: "Shi Quan Da Bu Tang is Ba Zhen Tang PLUS Huang Qi and Rou Gui — even stronger tonification with added warming. Use it for more severe deficiency with pronounced cold signs." },
      { formula: "Gui Pi Tang", difference: "Gui Pi Tang focuses on Heart and Spleen — insomnia, anxiety, palpitations, poor appetite. Ba Zhen Tang is a more general dual-deficiency formula without the Heart-calming emphasis." },
    ],

    modifications: [
      { condition: "Cold signs prominent", herbs_add: "Huang Qi 15g, Rou Gui 3g (→ Shi Quan Da Bu Tang)" },
      { condition: "Postpartum blood loss", herbs_add: "Huang Qi 15g, E Jiao 9g (dissolved)" },
      { condition: "Poor appetite/digestion", herbs_add: "Sha Ren 3g, Chen Pi 6g", herbs_remove: "Reduce Shu Di to 9g" },
      { condition: "Insomnia and palpitations", herbs_add: "Suan Zao Ren 15g, Long Yan Rou 9g" },
      { condition: "Menstrual irregularity", herbs_add: "Xiang Fu 9g, Yi Mu Cao 12g" },
    ],

    modern_applications: [
      "Postpartum recovery",
      "Post-surgical recovery",
      "Chronic fatigue syndrome (deficiency type)",
      "Iron-deficiency anemia",
      "Chemotherapy support (Qi-Blood depletion)",
      "Chronic bleeding disorders",
      "Failure to thrive in elderly",
      "Postpartum depression with deficiency pattern",
    ],

    dpiRemarks: "Xue type formula. Classic qi & blood tonification. Ba zhen tang is the combination of Si Jun Zi Tang (qi) + Si Wu Tang (blood). When yang xu is more prominent, add Huang Qi and Rou Gui to become Shi Quan Da Bu Tang. For women with weak type and low food quality. Monitor GY cycle and bleeding for progress.",
    treatmentTime: "2-4 months mid to low dosage. Post shi quan da bu tang can be ba zhen tang. According to condition (pregnancy or after giving birth). Recommended nutritional supplements and sports.",

    color: "#b8860b",
  },

  // ============================================================
  // 16. BA WEI DI HUANG WAN 八味地黄丸
  // ============================================================
  "ba-wei-di-huang-wan": {
    id: "ba-wei-di-huang-wan",
    name_pinyin: "Bā Wèi Dì Huáng Wán",
    name_chinese: "八味地黄丸",
    name_english: "Eight Ingredient Pill with Rehmannia",
    category: "Yang-Tonifying Formulas (补阳剂)",
    source: "Jin Gui Yao Lue (c. 220 CE, Zhang Zhongjing)",
    source_chinese: "金匮要略",

    composition: [
      { pinyin: "Shu Di Huang", chinese: "熟地黄", latin: "Radix Rehmanniae Praeparata", dosage: "24g", role: "jun", role_name: "King", function: "Nourishes Kidney Yin and essence — the material base" },
      { pinyin: "Shan Zhu Yu", chinese: "山茱萸", latin: "Fructus Corni", dosage: "12g", role: "chen", role_name: "Minister", function: "Nourishes Liver and Kidney, astringes essence" },
      { pinyin: "Shan Yao", chinese: "山药", latin: "Rhizoma Dioscoreae", dosage: "12g", role: "chen", role_name: "Minister", function: "Tonifies Spleen and Kidney, stabilizes essence" },
      { pinyin: "Ze Xie", chinese: "泽泻", latin: "Rhizoma Alismatis", dosage: "9g", role: "zuo", role_name: "Assistant", function: "Drains Kidney turbidity, prevents cloying of Shu Di" },
      { pinyin: "Mu Dan Pi", chinese: "牡丹皮", latin: "Cortex Moutan", dosage: "9g", role: "zuo", role_name: "Assistant", function: "Clears Liver heat, cools Blood — balances the warming herbs" },
      { pinyin: "Fu Ling", chinese: "茯苓", latin: "Poria", dosage: "9g", role: "zuo", role_name: "Assistant", function: "Strengthens Spleen, leaches Dampness" },
      { pinyin: "Fu Zi", chinese: "附子", latin: "Radix Aconiti Lateralis Praeparata", dosage: "3g", role: "jun", role_name: "King", function: "Warms Kidney Yang, restores Ming Men fire" },
      { pinyin: "Rou Gui", chinese: "肉桂", latin: "Cortex Cinnamomi", dosage: "3g", role: "chen", role_name: "Minister", function: "Warms Ming Men, assists Yang, leads fire back to source" },
    ],

    clinical_picture: {
      summary: "Liu Wei Di Huang Wan + Fu Zi + Rou Gui = warming Kidney Yang while nourishing the Yin foundation. Also known as Jin Gui Shen Qi Wan. This is for Kidney Yang Deficiency where the Ming Men fire is declining — everything is cold, weak, and underperforming. The formula uses 'a small fire to ignite Yang within the Yin base' — it doesn't just add warmth, it restores the body's ability to generate its own warmth.",
      tongue: "Pale, swollen, wet. White and slippery coating. May have tooth marks. The tongue body is NOT red.",
      pulse: "Deep (沉) and slow (迟). Weak at both Chi positions (Kidney). May be slightly tight from cold.",
      key_symptoms: [
        "Low back pain and weakness — 'my back feels broken'",
        "Cold lower body — cold feet, cold knees, cold lower back",
        "Frequent urination, especially at night (nocturia)",
        "Edema, especially in legs and ankles",
        "Low libido and sexual dysfunction",
        "Loose stools, especially early morning (5 AM diarrhea)",
        "Fatigue worse in cold weather",
        "Knee weakness — difficulty with stairs",
        "Urinary difficulty or dribbling (in elderly men)",
        "Infertility (cold womb in women, low sperm in men)",
      ],
      constitutional_type: "Kidney Yang Xu type — often seen in older patients (50+) but can appear earlier. The patient feels COLD as a dominant complaint. They layer clothing, avoid cold drinks, and prefer warm environments. Body tends to be soft, not tight.",
      typical_patient: "A 62-year-old man who complains that his lower back has been getting weaker for years. He gets up 3-4 times per night to urinate but only passes a small amount each time. His feet are always cold, even in summer. His knees are weak — he dreads stairs. He has mild ankle edema by evening. His libido has been declining. He looks pale and somewhat puffy in the face. His energy is better in summer, worse in winter. His pulse is deep — you have to press hard to feel it, and it's slow.",
    },

    actions: [
      "Warms and tonifies Kidney Yang (温补肾阳)",
      "Restores Ming Men fire (温补命门之火)",
      "Nourishes Kidney Yin as foundation (滋补肾阴)",
    ],
    actions_chinese: "温补肾阳",

    pattern: "Kidney Yang Deficiency (Ming Men Fire Declining)",
    pattern_chinese: "肾阳不足，命门火衰证",

    contraindications: [
      "Kidney Yin Deficiency with heat signs (night sweats, red tongue, 5-palm heat) — use Liu Wei Di Huang Wan instead",
      "Any excess heat condition — Fu Zi and Rou Gui will add fuel to fire",
      "Damp-Heat in the lower jiao (burning urination, yellow discharge) — warming will worsen dampness",
      "Pregnancy — Fu Zi is potentially toxic and contraindicated",
    ],
    cautions: [
      "Fu Zi must be properly prepared (制附子) and pre-decocted 30-60 min to reduce toxicity",
      "Start with low dose of Fu Zi (3g) and increase gradually",
      "Monitor for signs of Fu Zi toxicity: numbness of tongue/lips, palpitations",
      "Shu Di is cloying — if digestion is weak, add Sha Ren or reduce dose",
    ],

    differentiators: [
      { formula: "Liu Wei Di Huang Wan", difference: "Liu Wei Di Huang Wan nourishes Kidney YIN only — for hot flashes, night sweats, dry mouth, red tongue. Ba Wei Di Huang Wan adds Fu Zi and Rou Gui to WARM Kidney Yang. The key differentiator: is the patient COLD or HOT? Cold → Ba Wei. Hot → Liu Wei." },
      { formula: "You Gui Wan", difference: "You Gui Wan is STRONGER Yang tonification — more warming herbs (Du Zhong, Tu Si Zi, Lu Jiao Jiao) and removes the three 'draining' herbs. For more severe Yang Xu where Ba Wei is not enough." },
      { formula: "Zhen Wu Tang", difference: "Zhen Wu Tang is for ACUTE/severe Yang Xu with edema and palpitations — an emergency warming formula. Ba Wei Di Huang Wan is for chronic, gradual Kidney Yang decline." },
      { formula: "Zuo Gui Yin", difference: "Zuo Gui Yin is the pure Yin-nourishing counterpart — Restore the Left Kidney. Ba Wei (also called Jin Gui Shen Qi Wan) is Restore the Right Kidney — warming Yang." },
    ],

    modifications: [
      { condition: "Severe edema", herbs_add: "Che Qian Zi 9g, Niu Xi 12g (→ Ji Sheng Shen Qi Wan)" },
      { condition: "Early morning diarrhea", herbs_add: "Bu Gu Zhi 9g, Wu Wei Zi 6g, Rou Dou Kou 6g" },
      { condition: "Low libido / erectile dysfunction", herbs_add: "Yin Yang Huo 12g, Ba Ji Tian 9g" },
      { condition: "Asthma (Kidney not grasping Qi)", herbs_add: "Wu Wei Zi 6g, Hu Tao Ren 12g" },
    ],

    modern_applications: [
      "Chronic kidney disease (early stages with Yang Xu pattern)",
      "Benign prostatic hyperplasia",
      "Hypothyroidism",
      "Diabetes (type 2, cold pattern — traditional use for 'Xiao Ke')",
      "Chronic lower back pain (cold type)",
      "Male infertility (low sperm count/motility)",
      "Chronic edema (cardiac or renal origin)",
      "Osteoporosis with cold pattern",
    ],

    color: "#8b4513",
  },

  // ============================================================
  // 17. TAO HE CHENG QI TANG 桃核承气汤
  // ============================================================
  "tao-he-cheng-qi-tang": {
    id: "tao-he-cheng-qi-tang",
    name_pinyin: "Táo Hé Chéng Qì Tāng",
    name_chinese: "桃核承气汤",
    name_english: "Peach Pit Decoction to Order the Qi",
    category: "Blood-Invigorating and Stasis-Removing Formulas (活血祛瘀剂)",
    source: "Shang Han Lun (c. 220 CE, Zhang Zhongjing)",
    source_chinese: "伤寒论",

    composition: [
      { pinyin: "Tao Ren", chinese: "桃仁", latin: "Semen Persicae", dosage: "12g", role: "jun", role_name: "King", function: "Breaks Blood stasis, moistens Intestines" },
      { pinyin: "Da Huang", chinese: "大黄", latin: "Radix et Rhizoma Rhei", dosage: "12g", role: "chen", role_name: "Minister", function: "Purges heat and Blood stasis through the bowels" },
      { pinyin: "Gui Zhi", chinese: "桂枝", latin: "Ramulus Cinnamomi", dosage: "6g", role: "zuo", role_name: "Assistant", function: "Warms channels, assists Blood movement, prevents cold coagulation" },
      { pinyin: "Mang Xiao", chinese: "芒硝", latin: "Natrii Sulfas", dosage: "6g", role: "zuo", role_name: "Assistant", function: "Softens hardness, purges heat, resolves accumulation" },
      { pinyin: "Zhi Gan Cao", chinese: "炙甘草", latin: "Radix Glycyrrhizae Praeparata", dosage: "3g", role: "shi", role_name: "Envoy", function: "Harmonizes herbs, moderates purgative action" },
    ],

    clinical_picture: {
      summary: "Blood stasis combined with heat accumulation in the lower jiao. The classic Shang Han Lun formula for when heat has entered the Blood level and becomes trapped. The combination of Blood stasis and heat creates a distinctive clinical picture: mental restlessness or agitation (heat disturbing Shen), lower abdominal pain that is fixed and worse with pressure, and constipation or dark stools. The formula purges both the heat and the stasis downward.",
      tongue: "Dark or purple-red, may have dark spots or ecchymosis. Coating may be yellow and dry.",
      pulse: "Deep (沉) and choppy (涩) or deep and full (实). Particularly strong at the Chi position.",
      key_symptoms: [
        "Lower abdominal fullness and pain — fixed location, worse with pressure",
        "Mental restlessness, agitation, or fixation",
        "Constipation or dark tarry stools",
        "Dark, clotted menstrual blood with severe pain",
        "Night-time restlessness — 'acts as if mad' (如狂)",
        "Thirst but doesn't want to drink much",
        "Urinary urgency or frequency",
        "Fever worse in the afternoon/evening",
      ],
      constitutional_type: "The patient must be relatively STRONG — this is a purgative formula not suitable for the deficient or weak. They tend to have a robust build with signs of both heat and stasis.",
      typical_patient: "A 38-year-old woman with severe dysmenorrhea. Her periods are extremely painful with dark, clotted blood. She has constant lower abdominal discomfort that worsens before her period. She tends toward constipation, especially premenstrually. She's mentally fixated — she can't stop ruminating about the same problem. She feels hot and agitated, especially in the evenings. Her lower abdomen is tender and resists pressure on palpation. She's not a weak patient — she has energy and a strong constitution, she's just in pain.",
    },

    actions: [
      "Breaks Blood stasis (破血逐瘀)",
      "Purges heat accumulation (泻热通便)",
      "Moves Qi to assist Blood movement (行气活血)",
    ],
    actions_chinese: "破血下瘀，泻热通便",

    pattern: "Blood Stasis with Heat Accumulation in the Lower Jiao",
    pattern_chinese: "下焦蓄血证",

    contraindications: [
      "Pregnancy — strong Blood-moving and purgative herbs",
      "Qi and Blood deficiency — will deplete a weak patient further",
      "Menorrhagia or active bleeding — moving Blood can increase hemorrhage",
      "Cold constitution with Blood stasis — use warming Blood-movers like Wen Jing Tang instead",
    ],
    cautions: [
      "Short-term use only — this is a drastic formula, not for long-term Blood stasis",
      "Reduce Da Huang and Mang Xiao once stools become loose — do not over-purge",
      "Monitor for excessive bleeding or diarrhea",
      "Not to be combined with other purgative formulas",
    ],

    differentiators: [
      { formula: "Xue Fu Zhu Yu Tang", difference: "Xue Fu Zhu Yu Tang treats Blood stasis in the CHEST and UPPER body — headaches, chest pain, chronic emotional constraint. Tao He Cheng Qi Tang targets the LOWER JIAO — lower abdominal pain, constipation, gynecological stasis with heat." },
      { formula: "Gui Zhi Fu Ling Wan", difference: "Gui Zhi Fu Ling Wan is MILDER — for chronic lower jiao Blood stasis (ovarian cysts, fibroids). Tao He Cheng Qi Tang is more AGGRESSIVE with purgative action, suitable for acute or severe stasis with heat and constipation." },
      { formula: "Wen Jing Tang", difference: "Wen Jing Tang treats Blood stasis from COLD — cold womb, pale tongue, slow pulse. Tao He Cheng Qi Tang treats Blood stasis with HEAT — dark tongue, rapid pulse, agitation." },
    ],

    modifications: [
      { condition: "Severe Blood stasis with masses", herbs_add: "San Leng 6g, E Zhu 6g" },
      { condition: "Pronounced mental agitation", herbs_add: "Sheng Di 15g, Mu Dan Pi 9g" },
      { condition: "Amenorrhea from Blood stasis", herbs_add: "Dang Gui 9g, Hong Hua 6g" },
      { condition: "Endometriosis pain", herbs_add: "Yan Hu Suo 9g, Wu Ling Zhi 6g" },
    ],

    modern_applications: [
      "Dysmenorrhea (Blood stasis type)",
      "Endometriosis",
      "Pelvic inflammatory disease (acute)",
      "Post-traumatic hematoma",
      "Acute appendicitis (Blood stasis pattern)",
      "Uterine fibroids (acute pain episodes)",
      "Obsessive-compulsive tendencies (Blood stasis disturbing Shen)",
      "Constipation with Blood stasis pattern",
    ],

    dpiRemarks: "Xue type formula. Of a dry nature. With Tao he cheng qi tang we can treat also same GY disorders of xue yu type, mainly with dysmenorrhea. Very distinct formula. Noncompromising formula structure. 1st is the constipation, that also a xue yu type. 2nd the fever that effecting the H / mind in an OCD nature. All symptoms are strong and aggressive. Xue type.",
    treatmentTime: "1-3 months high to mid dosage level. 1st the stool, 2nd the fever... Overuse will cause loss stool / diarrhea, chill, and sleepy feeling. If stool goes soft but rest of symptoms stay, then move from Da huang formulas to a Tao ren type. Post tao he cheng qi tang: when fever is broke and xue yu still use Tao hong si wu tang. IF LV mai with xue yu use xue fu zhu yu tang.",

    color: "#a0522d",
  },

  // ============================================================
  // 18. XUE FU ZHU YU TANG 血府逐瘀汤
  // ============================================================
  "xue-fu-zhu-yu-tang": {
    id: "xue-fu-zhu-yu-tang",
    name_pinyin: "Xuè Fǔ Zhú Yū Tāng",
    name_chinese: "血府逐瘀汤",
    name_english: "Drive Out Stasis in the Mansion of Blood",
    category: "Blood-Invigorating and Stasis-Removing Formulas (活血祛瘀剂)",
    source: "Yi Lin Gai Cuo (1830 CE, Wang Qingren)",
    source_chinese: "医林改错",

    composition: [
      { pinyin: "Tao Ren", chinese: "桃仁", latin: "Semen Persicae", dosage: "12g", role: "jun", role_name: "King", function: "Breaks Blood stasis" },
      { pinyin: "Hong Hua", chinese: "红花", latin: "Flos Carthami", dosage: "9g", role: "jun", role_name: "King", function: "Invigorates Blood, dispels stasis" },
      { pinyin: "Dang Gui", chinese: "当归", latin: "Radix Angelicae Sinensis", dosage: "9g", role: "chen", role_name: "Minister", function: "Nourishes and moves Blood — prevents excessive Blood breaking" },
      { pinyin: "Sheng Di Huang", chinese: "生地黄", latin: "Radix Rehmanniae", dosage: "9g", role: "chen", role_name: "Minister", function: "Cools Blood, nourishes Yin — clears heat from Blood stasis" },
      { pinyin: "Chuan Xiong", chinese: "川芎", latin: "Rhizoma Chuanxiong", dosage: "6g", role: "chen", role_name: "Minister", function: "Moves Blood and Qi — 'the Qi within Blood herbs'" },
      { pinyin: "Chi Shao", chinese: "赤芍", latin: "Radix Paeoniae Rubra", dosage: "6g", role: "zuo", role_name: "Assistant", function: "Cools Blood, dispels stasis — the red peony for Blood heat" },
      { pinyin: "Niu Xi", chinese: "牛膝", latin: "Radix Achyranthis Bidentatae", dosage: "9g", role: "zuo", role_name: "Assistant", function: "Directs Blood downward, invigorates Blood in lower body" },
      { pinyin: "Jie Geng", chinese: "桔梗", latin: "Radix Platycodonis", dosage: "6g", role: "zuo", role_name: "Assistant", function: "Opens the chest, directs herbs upward to 'Blood mansion'" },
      { pinyin: "Chai Hu", chinese: "柴胡", latin: "Radix Bupleuri", dosage: "3g", role: "zuo", role_name: "Assistant", function: "Spreads Liver Qi, assists Blood movement" },
      { pinyin: "Zhi Ke", chinese: "枳壳", latin: "Fructus Aurantii", dosage: "6g", role: "zuo", role_name: "Assistant", function: "Moves Qi in the chest, opens the diaphragm" },
      { pinyin: "Gan Cao", chinese: "甘草", latin: "Radix Glycyrrhizae", dosage: "3g", role: "shi", role_name: "Envoy", function: "Harmonizes all herbs" },
    ],

    clinical_picture: {
      summary: "The master formula for Blood stasis in the chest and upper body — the 'Blood Mansion' (血府, xue fu) refers to the chest/diaphragm region. Wang Qingren's genius was recognizing that many chronic, unexplained symptoms — stubborn headaches, chest pain, insomnia, chronic irritability — result from Blood stasis obstructing the chest. The formula simultaneously moves Blood, moves Qi, nourishes Blood, and directs the action to the chest area.",
      tongue: "Dark or purple, often with dark spots or ecchymosis. Sublingual veins are typically distended and dark.",
      pulse: "Wiry (弦) and choppy (涩). May be tight or have an irregular quality.",
      key_symptoms: [
        "Chronic headaches — fixed location, stabbing quality",
        "Chest pain or oppressive feeling in the chest",
        "Chronic irritability or depression that doesn't respond to Qi-moving formulas",
        "Insomnia — difficulty falling asleep, restless sleep",
        "Hiccups or chronic diaphragmatic tension",
        "Palpitations with stabbing chest sensations",
        "Facial complexion is dark or dusky",
        "Lips are purple or dark",
        "Pain that is worse at night",
      ],
      constitutional_type: "Not necessarily strong or weak — the key is CHRONICITY. This is the patient who has had the same complaints for months or years without explanation. The longer the stagnation, the more likely it has become Blood stasis.",
      typical_patient: "A 50-year-old man with chronic chest tightness that cardiologists have cleared — 'nothing wrong with your heart.' He's had headaches in the same spot on his forehead for years. He feels a constant oppressive heaviness in his chest. He can't sleep well — lies awake with a tight feeling. He's become chronically irritable. His face has a dusky, dark complexion. His lips are slightly purple. He occasionally gets hiccups. The sublingual veins are visibly dark and engorged. His symptoms are all worse at night.",
    },

    actions: [
      "Invigorates Blood and dispels stasis (活血化瘀)",
      "Moves Qi to assist Blood movement (行气活血)",
      "Opens the chest (宣通胸中气血)",
    ],
    actions_chinese: "活血化瘀，行气止痛",

    pattern: "Blood Stasis in the Chest (Blood Mansion)",
    pattern_chinese: "胸中血瘀证",

    contraindications: [
      "Pregnancy — strong Blood-moving herbs",
      "Active bleeding — hemorrhage, heavy menstruation, bleeding ulcers",
      "Severe Qi or Blood deficiency — must tonify before moving",
      "Patients on blood thinners (warfarin, etc.) — synergistic blood-thinning risk",
    ],
    cautions: [
      "Begin with standard doses and assess — strong Blood-moving formula",
      "May cause temporary worsening of symptoms before improvement (Blood stasis being mobilized)",
      "If patient is also Qi deficient, add Huang Qi to prevent depletion",
      "Monitor menstrual flow in women — may increase significantly",
    ],

    differentiators: [
      { formula: "Tao He Cheng Qi Tang", difference: "Tao He Cheng Qi Tang is for Blood stasis with heat in the LOWER JIAO — lower abdominal pain, constipation, acute presentation. Xue Fu Zhu Yu Tang targets the CHEST and UPPER BODY — headaches, chest pain, emotional stagnation. Location is the key difference." },
      { formula: "Gui Zhi Fu Ling Wan", difference: "Gui Zhi Fu Ling Wan is milder, for chronic lower jiao Blood stasis — fibroids, ovarian cysts. Xue Fu Zhu Yu Tang is broader and targets the upper body. Different treatment areas." },
      { formula: "Shen Tong Zhu Yu Tang", difference: "Shen Tong Zhu Yu Tang (from the same author) targets Blood stasis in the MERIDIANS — body pain, fibromyalgia, joint pain. Xue Fu Zhu Yu Tang targets the CHEST and HEAD." },
      { formula: "Tong Qiao Huo Xue Tang", difference: "Tong Qiao Huo Xue Tang (also by Wang Qingren) targets Blood stasis in the HEAD specifically — migraines, hair loss, facial dark spots. Xue Fu Zhu Yu Tang has broader chest-to-head coverage." },
    ],

    modifications: [
      { condition: "Severe headache", herbs_add: "Quan Xie 3g, Di Long 9g" },
      { condition: "Palpitations and anxiety", herbs_add: "Dan Shen 15g, Suan Zao Ren 12g" },
      { condition: "Chest pain (angina-like)", herbs_add: "Dan Shen 15g, Gua Lou Pi 12g, Xie Bai 9g" },
      { condition: "Depression from Blood stasis", herbs_add: "Yu Jin 9g, He Huan Pi 12g" },
      { condition: "Dark facial complexion", herbs_add: "Ji Xue Teng 15g, Dan Shen 12g" },
    ],

    modern_applications: [
      "Chronic headache / migraine (Blood stasis type)",
      "Angina pectoris (adjunct to standard treatment)",
      "Post-concussion syndrome",
      "Chronic insomnia (Blood stasis type)",
      "Intercostal neuralgia",
      "Chronic depression unresponsive to standard treatment",
      "Traumatic brain injury (chronic sequelae)",
      "Chronic hiccups",
    ],

    color: "#8b0000",
  },

  // ============================================================
  // 19. GAN MAI DA ZAO TANG 甘麦大枣汤
  // ============================================================
  "gan-mai-da-zao-tang": {
    id: "gan-mai-da-zao-tang",
    name_pinyin: "Gān Mài Dà Zǎo Tāng",
    name_chinese: "甘麦大枣汤",
    name_english: "Licorice, Wheat, and Jujube Decoction",
    category: "Spirit-Calming Formulas (安神剂)",
    source: "Jin Gui Yao Lue (c. 220 CE, Zhang Zhongjing)",
    source_chinese: "金匮要略",

    composition: [
      { pinyin: "Gan Cao", chinese: "甘草", latin: "Radix Glycyrrhizae", dosage: "9g", role: "jun", role_name: "King", function: "Nourishes Heart Qi, calms the spirit, moderates urgency" },
      { pinyin: "Xiao Mai", chinese: "小麦", latin: "Fructus Tritici", dosage: "15-30g", role: "chen", role_name: "Minister", function: "Nourishes Heart Yin and Qi, calms restless Shen" },
      { pinyin: "Da Zao", chinese: "大枣", latin: "Fructus Jujubae", dosage: "10 pieces", role: "zuo", role_name: "Assistant", function: "Nourishes Spleen and Heart, calms the spirit" },
    ],

    clinical_picture: {
      summary: "Zhang Zhongjing's formula for 'Zang Zao' (脏躁) — organ restlessness/hysteria. This deceptively simple three-herb formula treats Heart-Spleen deficiency causing emotional instability. The patient is overwhelmed, easily moved to tears, has episodes of uncontrollable emotion, and may behave erratically. It is gentle enough for children, the elderly, and constitutionally weak patients. The key insight: sometimes the simplest formula is the most effective when the deficiency is the root.",
      tongue: "Pale or pale-red, may be thin. Coating is thin white. In severe cases, the tongue may tremble slightly.",
      pulse: "Thin (细) and rapid (数) or thin and wiry. Reflects Yin deficiency with internal agitation.",
      key_symptoms: [
        "Uncontrollable emotional episodes — crying, laughing, or both",
        "Frequent yawning and stretching",
        "Easily startled or frightened",
        "Night terrors (especially in children)",
        "Restless sleep with vivid dreams",
        "Anxiety with physical agitation — can't sit still",
        "Feeling emotionally overwhelmed — 'everything makes me cry'",
        "Concentration difficulties",
        "Episodes may look like hysteria or panic attacks",
      ],
      constitutional_type: "Weak, sensitive type — often women, children, or elderly. The patient is thin-skinned emotionally, easily overwhelmed. They may have been through significant emotional stress that depleted their Heart/Spleen resources. The Chai Hu or Da Huang types are NOT appropriate for this formula.",
      typical_patient: "A 28-year-old woman who breaks down crying in the consultation. She says she can't control her emotions — she cries at everything, sometimes she starts laughing and can't stop. She has panic-like episodes where she feels she's going crazy. She yawns constantly. She's thin, pale, and looks exhausted. She recently went through a breakup and hasn't been eating or sleeping well. A child version: a 6-year-old who has night terrors, cries uncontrollably, and is easily frightened. Both share the key quality: emotional instability from deficiency, not from excess.",
    },

    actions: [
      "Nourishes Heart and calms Shen (养心安神)",
      "Harmonizes Middle Jiao (和中缓急)",
      "Relieves urgency and restlessness (缓急)",
    ],
    actions_chinese: "养心安神，和中缓急",

    pattern: "Heart-Spleen Deficiency with Shen Disturbance (Zang Zao)",
    pattern_chinese: "脏躁证（心脾不足）",

    contraindications: [
      "Excess heat patterns — Liver Fire, Phlegm-Fire — this formula is too gentle and sweet",
      "Phlegm obstruction — thick tongue coating, productive cough — the sweet herbs generate more Phlegm",
      "Dampness accumulation — the formula is inherently moistening and cloying",
    ],
    cautions: [
      "This is a gentle formula — for severe psychiatric conditions, it needs to be combined with stronger formulas",
      "Xiao Mai (wheat) must be WHOLE grain, not refined — some modern preparations use Fu Xiao Mai (light wheat) which has different properties (stops sweating)",
      "May need to be taken for extended periods to see full effect",
    ],

    differentiators: [
      { formula: "Gui Pi Tang", difference: "Gui Pi Tang treats Heart-Spleen deficiency with more COGNITIVE symptoms — poor memory, insomnia, palpitations, anxiety. Gan Mai Da Zao Tang treats EMOTIONAL instability — uncontrollable crying, hysteria, erratic behavior. The emotional quality is different." },
      { formula: "Tian Wang Bu Xin Dan", difference: "Tian Wang Bu Xin Dan treats Heart-Kidney YIN deficiency — more heat signs, stronger insomnia, dry throat, night sweats. Gan Mai Da Zao Tang is simpler — less about Yin deficiency, more about emotional overwhelm and Shen disturbance." },
      { formula: "Suan Zao Ren Tang", difference: "Suan Zao Ren Tang focuses on insomnia from Liver Blood deficiency — the patient is tired but cannot sleep. Gan Mai Da Zao Tang focuses on emotional dysregulation — the sleep issues are secondary to the emotional disturbance." },
    ],

    modifications: [
      { condition: "Insomnia prominent", herbs_add: "Suan Zao Ren 15g, Bai Zi Ren 9g" },
      { condition: "Anxiety with palpitations", herbs_add: "Long Gu 15g, Mu Li 15g" },
      { condition: "Night sweats", herbs_add: "Fu Xiao Mai 30g (replaces Xiao Mai), Huang Qi 12g" },
      { condition: "Easily startled", herbs_add: "Hu Po 1.5g (ground, swallowed), Long Chi 15g" },
      { condition: "Children with night terrors", herbs_add: "Chan Tui 3g, Gou Teng 6g" },
    ],

    modern_applications: [
      "Generalized anxiety disorder (deficiency type)",
      "Panic disorder",
      "Hysteria / conversion disorder",
      "PMDD (premenstrual dysphoric disorder)",
      "Pediatric night terrors",
      "Postpartum emotional instability",
      "ADHD in children (deficiency pattern)",
      "Menopausal emotional lability",
    ],

    dpiRemarks: "Qi type formula. Gan Mai Da Zao Tang (甘麦大枣汤) is used to address conditions characterized by a combination of emotional instability and gastrointestinal (GIT) weakness. 1) Regulating the Heart rate and producing calmness: known for its ability to calm the Shen and stabilize emotions. 2) Weak GIT / SP qi xu: the formula is for individuals with a weak GIT system. Can be used for long or short time depending on age and condition. Modifications: calm the shen, clear heat forms the H and nourishes the xue.",
    treatmentTime: "Variable - can be used for long or short time depending on age and condition. Wide range of modifications.",

    color: "#d4a574",
  },

  // ============================================================
  // 20. LIU JUN ZI TANG 六君子汤
  // ============================================================
  "liu-jun-zi-tang": {
    id: "liu-jun-zi-tang",
    name_pinyin: "Liù Jūn Zǐ Tāng",
    name_chinese: "六君子汤",
    name_english: "Six Gentlemen Decoction",
    category: "Qi-Tonifying Formulas (补气剂)",
    source: "Yi Xue Zheng Zhuan (1515 CE)",
    source_chinese: "医学正传",

    composition: [
      { pinyin: "Ren Shen", chinese: "人参", latin: "Radix Ginseng", dosage: "9g", role: "jun", role_name: "King", function: "Strongly tonifies Spleen Qi, generates fluids" },
      { pinyin: "Bai Zhu", chinese: "白术", latin: "Rhizoma Atractylodis Macrocephalae", dosage: "9g", role: "chen", role_name: "Minister", function: "Strengthens Spleen, dries Dampness" },
      { pinyin: "Fu Ling", chinese: "茯苓", latin: "Poria", dosage: "9g", role: "chen", role_name: "Minister", function: "Strengthens Spleen, leaches Dampness, calms Shen" },
      { pinyin: "Zhi Gan Cao", chinese: "炙甘草", latin: "Radix Glycyrrhizae Praeparata", dosage: "3g", role: "zuo", role_name: "Assistant", function: "Tonifies Qi, harmonizes herbs" },
      { pinyin: "Chen Pi", chinese: "陈皮", latin: "Pericarpium Citri Reticulatae", dosage: "6g", role: "zuo", role_name: "Assistant", function: "Regulates Qi, dries Dampness, prevents stagnation from tonification" },
      { pinyin: "Ban Xia", chinese: "半夏", latin: "Rhizoma Pinelliae", dosage: "9g", role: "zuo", role_name: "Assistant", function: "Dries Dampness, transforms Phlegm, harmonizes Stomach, descends rebellious Qi" },
    ],

    clinical_picture: {
      summary: "Si Jun Zi Tang (Four Gentlemen) + Chen Pi + Ban Xia = Spleen Qi deficiency with Phlegm-Dampness. This is the formula for the patient who not only has Spleen Qi weakness but has accumulated Dampness and Phlegm as a result. The Spleen has been too weak to transform and transport fluids, leading to Phlegm accumulation. The addition of Chen Pi and Ban Xia addresses the pathological product (Phlegm) while Si Jun Zi Tang treats the root (Spleen Qi Xu).",
      tongue: "Pale, swollen with tooth marks. Thick white greasy coating — this is the hallmark sign of Spleen Qi Xu generating Phlegm-Dampness.",
      pulse: "Slippery (滑) and weak (弱). The slippery quality reflects Phlegm-Dampness; the weakness reflects Qi deficiency.",
      key_symptoms: [
        "Poor appetite — 'I'm never hungry'",
        "Nausea or sensation of fullness after eating small amounts",
        "Loose stools or unformed stools",
        "Fatigue, heaviness — 'my body feels heavy'",
        "Abdominal bloating and distension",
        "Excessive mucus or phlegm production",
        "Weight gain (despite poor appetite)",
        "Vomiting or acid reflux (Stomach Qi rebellion)",
        "Pale complexion, possibly puffy",
        "Edema tendency",
      ],
      constitutional_type: "Spleen-deficient type — often overweight or soft-bodied (not muscular). The classic 'Phlegm-Damp' constitution. They may have food sensitivities, dislike cold or raw foods, and feel heavy and sluggish. Think of the person who gains weight easily, retains water, and feels bloated.",
      typical_patient: "A 55-year-old woman who says 'I eat almost nothing but I keep gaining weight.' She has no appetite — the sight of food makes her nauseous. Her abdomen is distended and makes gurgling sounds. She has loose stools 2-3 times daily. She feels heavy and tired — 'like I'm walking through mud.' She produces excessive phlegm, especially in the morning. Her face is pale and slightly puffy. Her tongue is swollen with visible tooth marks and covered with a thick, white, greasy coating. She tried raw food diets and cold juicing, which made everything worse.",
    },

    actions: [
      "Tonifies Spleen Qi (益气健脾)",
      "Dries Dampness and transforms Phlegm (燥湿化痰)",
      "Harmonizes Stomach (和胃)",
    ],
    actions_chinese: "益气健脾，燥湿化痰",

    pattern: "Spleen Qi Deficiency with Phlegm-Dampness",
    pattern_chinese: "脾虚痰湿证",

    contraindications: [
      "Yin deficiency with dry tongue and no coating — the drying herbs (Ban Xia, Chen Pi) will worsen dryness",
      "Excess heat with red tongue and yellow coating — tonifying and warming is inappropriate",
      "External pathogen present — must resolve exterior first",
    ],
    cautions: [
      "If Phlegm is very thick and copious, may need to increase Ban Xia or add stronger Phlegm-resolving herbs",
      "Ren Shen can be substituted with Dang Shen (党参) for milder, more affordable long-term use",
      "In modern practice, Ban Xia should be processed (法半夏 Fa Ban Xia) to reduce toxicity",
    ],

    differentiators: [
      { formula: "Si Jun Zi Tang", difference: "Si Jun Zi Tang is the BASE Spleen Qi tonifying formula — for pure Qi deficiency WITHOUT significant Phlegm-Dampness. Use when the tongue coating is thin and white. Liu Jun Zi Tang adds Chen Pi and Ban Xia specifically for the Phlegm-Dampness that has accumulated from Spleen weakness." },
      { formula: "Xiang Sha Liu Jun Zi Tang", difference: "Xiang Sha Liu Jun Zi Tang adds Mu Xiang and Sha Ren to Liu Jun Zi Tang — for when there is MORE Qi stagnation with Dampness. The patient has more pain, more bloating, and more stagnation on top of the Spleen Qi deficiency." },
      { formula: "Bu Zhong Yi Qi Tang", difference: "Bu Zhong Yi Qi Tang lifts SUNKEN Qi — for prolapse, chronic diarrhea, fatigue with heaviness pulling down. Liu Jun Zi Tang addresses PHLEGM accumulation from Spleen weakness. Different pathological emphasis." },
      { formula: "Ban Xia Xie Xin Tang", difference: "Ban Xia Xie Xin Tang treats MIXED heat-cold in the Middle Jiao (epigastric hardness, loose stools, borborygmus). Liu Jun Zi Tang treats pure COLD/deficiency with Dampness. Check for heat signs to differentiate." },
    ],

    modifications: [
      { condition: "Severe nausea/vomiting", herbs_add: "Sheng Jiang 6g, Zhu Ru 9g" },
      { condition: "More Qi stagnation and pain", herbs_add: "Mu Xiang 6g, Sha Ren 3g (→ Xiang Sha Liu Jun Zi Tang)" },
      { condition: "Diarrhea prominent", herbs_add: "Shan Yao 15g, Lian Zi 9g" },
      { condition: "Water retention / edema", herbs_add: "Ze Xie 9g, Yi Yi Ren 15g" },
      { condition: "Loss of appetite in cancer patients", herbs_add: "Ji Nei Jin 9g, Shan Zha 9g" },
    ],

    modern_applications: [
      "Chronic gastritis (atrophic type)",
      "Functional dyspepsia",
      "Irritable Bowel Syndrome (diarrhea-predominant, cold type)",
      "GERD / acid reflux (Spleen-Stomach deficiency type)",
      "Chemotherapy-induced nausea and appetite loss",
      "Chronic fatigue with weight gain",
      "Metabolic syndrome (Phlegm-Damp pattern)",
      "Post-illness appetite recovery",
    ],

    dpiRemarks: "Qi type formula. Ren shen tree formula. Common chronic or subacute condition of 50% shi and 50% shi, on a weak type of person. Can be post other formulas. ST accumulation or post LV qi yu or shao yang conditions. Can be used during pregnancy. Post liu jun zi tang is si jun zi tang. Or ding zhi wan.",
    treatmentTime: "2 months to 1 year. Mid to low dosage level.",

    color: "#daa520",
  },

  // ============================================================
  // 21. BU GAN TANG 补肝汤
  // ============================================================
  "bu-gan-tang": {
    id: "bu-gan-tang",
    name_pinyin: "Bǔ Gān Tāng",
    name_chinese: "补肝汤",
    name_english: "Tonify the Liver Decoction",
    category: "Blood-Nourishing Formulas (补血剂)",
    source: "Yi Zong Jin Jian (1742 CE)",
    source_chinese: "医宗金鉴",

    composition: [
      { pinyin: "Dang Gui", chinese: "当归", latin: "Radix Angelicae Sinensis", dosage: "9g", role: "jun", role_name: "King", function: "Nourishes Liver Blood, activates Blood circulation" },
      { pinyin: "Bai Shao", chinese: "白芍", latin: "Radix Paeoniae Alba", dosage: "12g", role: "jun", role_name: "King", function: "Nourishes Liver Blood, softens sinews, stops pain and spasms" },
      { pinyin: "Shu Di Huang", chinese: "熟地黄", latin: "Radix Rehmanniae Praeparata", dosage: "12g", role: "chen", role_name: "Minister", function: "Nourishes Blood and Yin, fills Kidney essence" },
      { pinyin: "Suan Zao Ren", chinese: "酸枣仁", latin: "Semen Ziziphi Spinosae", dosage: "12g", role: "chen", role_name: "Minister", function: "Nourishes Heart Blood, calms Shen, treats insomnia" },
      { pinyin: "Mu Gua", chinese: "木瓜", latin: "Fructus Chaenomelis", dosage: "9g", role: "zuo", role_name: "Assistant", function: "Relaxes sinews, relieves cramping, harmonizes Stomach" },
      { pinyin: "Mai Men Dong", chinese: "麦门冬", latin: "Radix Ophiopogonis", dosage: "9g", role: "zuo", role_name: "Assistant", function: "Nourishes Yin, moistens dryness, clears Heart heat" },
      { pinyin: "Chuan Xiong", chinese: "川芎", latin: "Rhizoma Chuanxiong", dosage: "6g", role: "zuo", role_name: "Assistant", function: "Moves Blood, prevents stagnation from heavy tonification" },
      { pinyin: "Zhi Gan Cao", chinese: "炙甘草", latin: "Radix Glycyrrhizae Praeparata", dosage: "3g", role: "shi", role_name: "Envoy", function: "Relaxes spasms, harmonizes herbs" },
    ],

    clinical_picture: {
      summary: "An advanced Blood-nourishing formula for Liver Blood and Yin deficiency with neurological progression. Where Si Wu Tang treats basic Blood deficiency, Bu Gan Tang addresses the stage where deficiency has begun affecting the sinews and nervous system — severe muscle cramps, tremors, dry eyes, and a specific type of insomnia. The addition of Suan Zao Ren, Mu Gua, and Mai Men Dong targets the neurological and Yin-deficient components that Si Wu Tang doesn't address.",
      tongue: "Pale or pale-red, thin and possibly dry. Little or no coating. May have cracks (Yin Xu).",
      pulse: "Thin (细) and wiry (弦). The wiry quality reflects Liver tension from Blood deficiency — sinews not being nourished.",
      key_symptoms: [
        "Severe muscle cramps and spasms — especially calves and feet at night",
        "Dry eyes — gritty sensation, worse at night or with screen use",
        "Insomnia — specifically the type where patient falls asleep but wakes frequently",
        "Blurry vision, floaters, deteriorating night vision",
        "Tremors or twitching of eyelids and small muscles",
        "Numbness or tingling in extremities",
        "Brittle, ridged nails",
        "Hair that is dry, brittle, or graying prematurely",
        "Restless leg syndrome",
        "Dizziness on standing",
      ],
      constitutional_type: "The classic Liver Blood/Yin Xu patient — often middle-aged women, thin build, signs of depletion. They look 'dried out' — dry skin, dry eyes, thin hair. Their symptoms have a NEUROLOGICAL quality — cramps, tremors, twitching — which distinguishes this from simple Blood Xu.",
      typical_patient: "A 52-year-old woman who comes in primarily for severe calf cramps that wake her at night. She also mentions her eyes are constantly dry — she uses eye drops multiple times daily. Her sleep is fragmented — she falls asleep okay but wakes at 2-3 AM and can't fall back asleep easily. Her vision has been getting blurry, especially at night. She notices her eyelids twitch when she's tired. Her nails are ridged and break easily. Her hair has been thinning. On examination, her tongue is pale and thin with minimal coating. Her pulse is thin and wiry — it feels like a guitar string but without force.",
    },

    actions: [
      "Nourishes Liver Blood (补肝血)",
      "Enriches Liver Yin (滋肝阴)",
      "Relaxes sinews and stops spasms (柔筋止痉)",
      "Calms the Shen (安神)",
    ],
    actions_chinese: "补肝血，滋肝阴，柔筋止痉",

    pattern: "Liver Blood and Yin Deficiency with Sinew Involvement",
    pattern_chinese: "肝血不足，筋脉失养证",

    contraindications: [
      "Liver Qi Stagnation as primary pattern — tonifying without moving will worsen stagnation",
      "Spleen Dampness with thick greasy coating — cloying herbs (Shu Di, Mai Men Dong) worsen dampness",
      "Liver Yang Rising or Liver Fire — nourishing Yin alone is not sufficient, must also subdue Yang",
      "External pathogen present — must resolve exterior first",
    ],
    cautions: [
      "If patient also has Liver Qi Stagnation, add Chai Hu 6g and Xiang Fu 9g to move Qi alongside tonification",
      "Shu Di is cloying — if digestion is weak, add Sha Ren 3g or Chen Pi 6g",
      "Long-term use formula — neurological symptoms from Blood/Yin Xu take weeks to months to resolve",
    ],

    differentiators: [
      { formula: "Si Wu Tang", difference: "Si Wu Tang is the BASE Blood-nourishing formula — for simple Blood Xu (pale tongue, light menses, dry skin). Bu Gan Tang is for when Blood Xu has PROGRESSED to affect the sinews and nervous system — cramps, tremors, dry eyes, specific insomnia. If there are neurological symptoms, upgrade from Si Wu Tang to Bu Gan Tang." },
      { formula: "Xiao Yao San", difference: "Xiao Yao San treats Liver Qi Stagnation WITH Blood deficiency — the primary problem is QI movement. Bu Gan Tang treats Liver Blood/Yin DEFICIENCY as the primary problem — the sinews are malnourished. Different root cause." },
      { formula: "Tian Ma Gou Teng Yin", difference: "Tian Ma Gou Teng Yin treats Liver WIND from Yang Rising — hypertension, severe vertigo, tremors with a STRONG wiry pulse. Bu Gan Tang treats sinew problems from DEFICIENCY — the pulse is thin and weak, not strong. Excess vs. deficiency." },
    ],

    modifications: [
      { condition: "Severe insomnia", herbs_add: "Bai Zi Ren 9g, Ye Jiao Teng 15g" },
      { condition: "Eye problems prominent", herbs_add: "Gou Qi Zi 12g, Ju Hua 9g" },
      { condition: "Restless leg syndrome", herbs_add: "Ji Xue Teng 15g, Niu Xi 9g" },
      { condition: "With Kidney Yin Xu", herbs_add: "Shan Zhu Yu 9g, Nu Zhen Zi 9g" },
      { condition: "Numbness/tingling (Blood not reaching extremities)", herbs_add: "Ji Xue Teng 15g, Gui Zhi 6g" },
    ],

    modern_applications: [
      "Restless leg syndrome",
      "Nocturnal muscle cramps",
      "Dry eye syndrome (Sjögren's type pattern)",
      "Peripheral neuropathy (deficiency type)",
      "Essential tremor (deficiency type)",
      "Chronic insomnia (Blood deficiency type)",
      "Premature aging of hair and nails",
      "Fibromyalgia (deficiency-dominant pattern)",
    ],

    color: "#7b5ea7",
  },

  // ============================================================
  // 22. WU ZHU YU TANG 吴茱萸汤
  // ============================================================
  "wu-zhu-yu-tang": {
    id: "wu-zhu-yu-tang",
    name_pinyin: "Wú Zhū Yú Tāng",
    name_chinese: "吴茱萸汤",
    name_english: "Evodia Decoction",
    category: "Warming Interior-Cold Formulas (温里剂)",
    source: "Shang Han Lun (c. 220 CE, Zhang Zhongjing)",
    source_chinese: "伤寒论",

    composition: [
      { pinyin: "Wu Zhu Yu", chinese: "吴茱萸", latin: "Fructus Evodiae", dosage: "9g", role: "jun", role_name: "King", function: "Warms Liver and Stomach, descends rebellious Qi, stops pain and vomiting" },
      { pinyin: "Ren Shen", chinese: "人参", latin: "Radix Ginseng", dosage: "9g", role: "chen", role_name: "Minister", function: "Tonifies Qi, supports Zheng Qi against cold pathogen" },
      { pinyin: "Sheng Jiang", chinese: "生姜", latin: "Rhizoma Zingiberis Recens", dosage: "18g (6 large slices)", role: "zuo", role_name: "Assistant", function: "Warms Stomach, descends rebellious Qi, stops vomiting" },
      { pinyin: "Da Zao", chinese: "大枣", latin: "Fructus Jujubae", dosage: "4 pieces", role: "shi", role_name: "Envoy", function: "Nourishes Spleen, harmonizes herbs, moderates Wu Zhu Yu toxicity" },
    ],

    clinical_picture: {
      summary: "A very SPECIFIC formula for Liver Cold — not Liver heat, not Liver Qi Stagnation, but actual pathological COLD in the Liver channel. Wu Zhu Yu enters the Liver and Jue Yin channels. The clinical picture is distinctive: vertex headaches (top of head — the Liver channel reaches the vertex), vomiting of clear fluid, cold in the epigastrium, and sometimes groin or testicular pain along the Liver channel. This is NOT a common pattern — when you see it, it's unmistakable.",
      tongue: "Pale, wet, white slippery coating. The tongue is NOT red — if it's red, this is the wrong formula.",
      pulse: "Slow (迟) and wiry (弦). The slow quality reflects cold; the wiry quality reflects the Liver. May also be thin.",
      key_symptoms: [
        "Vertex headache — pain at the very top of the head (Liver channel pathway)",
        "Vomiting of clear watery fluid — especially after eating",
        "Splashing/gurgling sounds in the epigastrium (振水音)",
        "Cold sensation in the stomach/epigastrium",
        "Groin pain or testicular pain (Liver channel territory)",
        "Migraines with vomiting and cold sensations",
        "Drooling or excessive salivation",
        "Hands and feet cold",
        "Worse in cold weather or with cold food",
        "Diarrhea — watery, undigested food",
      ],
      constitutional_type: "Cold constitution — the patient is always cold, prefers warm drinks and environments. They are NOT the red-faced, angry Liver type. This is the COLD Liver, which is much less common. Pale face, subdued energy, quiet.",
      typical_patient: "A 45-year-old man with severe migraines that always start at the top of his head and come with intense nausea and vomiting of clear fluid. The attacks are triggered by cold weather and cold food. During the episode, he feels ice-cold in his stomach. Between episodes, he has chronic discomfort in his groin area. His hands are always cold. He makes splashing sounds when you palpate his epigastrium (fluid retention from cold). His tongue is pale and wet with white coating. His pulse is slow and wiry. This is a textbook Wu Zhu Yu Tang presentation — very specific, very recognizable.",
    },

    actions: [
      "Warms the Liver channel (温暖肝经)",
      "Descends rebellious Qi and stops vomiting (降逆止呕)",
      "Warms the Middle Jiao (温中散寒)",
    ],
    actions_chinese: "温肝暖胃，降逆止呕",

    pattern: "Liver Channel Cold (Jue Yin Cold) with Stomach Cold",
    pattern_chinese: "肝寒犯胃证 / 厥阴头痛",

    contraindications: [
      "ANY heat signs — red tongue, yellow coating, rapid pulse. Wu Zhu Yu is very hot and will cause severe problems in heat patterns.",
      "Liver Fire or Liver Yang Rising — adding hot herbs to fire is dangerous",
      "Yin deficiency — Wu Zhu Yu is extremely drying and hot",
      "Pregnancy — Wu Zhu Yu is emmenagogue and potentially toxic to fetus",
    ],
    cautions: [
      "Wu Zhu Yu is slightly toxic — must be properly prepared (制吴茱萸) and dose should not exceed 9g initially",
      "This is a VERY SPECIFIC formula — do not use it broadly for 'headache' or 'vomiting.' The COLD pattern must be confirmed.",
      "If headache is Liver Yang Rising (strong wiry pulse, red face), using Wu Zhu Yu Tang is a serious error",
      "Short-to-medium term use — discontinue once cold symptoms resolve",
    ],

    differentiators: [
      { formula: "Tian Ma Gou Teng Yin", difference: "Tian Ma Gou Teng Yin treats vertex headaches from Liver YANG RISING — the patient is flushed, has a strong pulse, feels hot. Wu Zhu Yu Tang treats vertex headaches from Liver COLD — the patient is pale, has a slow pulse, feels cold. OPPOSITE mechanisms." },
      { formula: "Ban Xia Xie Xin Tang", difference: "Ban Xia Xie Xin Tang treats mixed heat-cold in the Middle Jiao with epigastric hardness. Wu Zhu Yu Tang treats pure COLD in the Liver/Stomach — no heat component. Check the tongue: if there's any yellow, consider Ban Xia Xie Xin Tang." },
      { formula: "Li Zhong Wan", difference: "Li Zhong Wan warms the MIDDLE JIAO (Spleen/Stomach Yang Xu). Wu Zhu Yu Tang warms the LIVER channel and descends rebellious Qi. Li Zhong Wan is for diarrhea and cold abdomen without the vertex headache/vomiting pattern." },
    ],

    modifications: [
      { condition: "Severe vertex headache", herbs_add: "Chuan Xiong 9g, Gao Ben 6g" },
      { condition: "Groin/testicular pain", herbs_add: "Xiao Hui Xiang 6g, Wu Yao 9g" },
      { condition: "Severe diarrhea with cold", herbs_add: "Gan Jiang 6g, Bu Gu Zhi 9g" },
      { condition: "Chronic migraine prevention", herbs_add: "Dang Gui 9g, Bai Shao 12g" },
    ],

    modern_applications: [
      "Migraine (cold type with vomiting)",
      "Cluster headaches (cold pattern)",
      "Chronic vomiting (cold Stomach type)",
      "Inguinal hernia pain",
      "Functional dyspepsia (cold type)",
      "Chronic gastritis (cold dominant)",
      "Meniere's-like syndrome (cold type with vertex symptoms)",
    ],

    dpiRemarks: "Qi type formula. Subacute to chronic condition. This is a splashing water formula, that the liver mai is dominate, effecting the head due to SubCardiac or the liver mai stress at the ovary or tactical. (shi cold at the liver mai).",
    treatmentTime: "1-3 months, mid to low dosage. Post wu zhu yu tang can be qi yu: yue ju wan or liver qi yu si ni san or chai hu shu gan wan.",

    color: "#c17817",
  },

  // ============================================================
  // 23. CHAI HU GUI ZHI GAN JIANG TANG 柴胡桂枝干姜汤
  // ============================================================
  "chai-hu-gui-zhi-gan-jiang-tang": {
    id: "chai-hu-gui-zhi-gan-jiang-tang",
    name_pinyin: "Chái Hú Guì Zhī Gān Jiāng Tāng",
    name_chinese: "柴胡桂枝干姜汤",
    name_english: "Bupleurum, Cinnamon Twig, and Dried Ginger Decoction",
    category: "Harmonizing Formulas (和解剂)",
    source: "Shang Han Lun (c. 220 CE, Zhang Zhongjing)",
    source_chinese: "伤寒论",

    composition: [
      { pinyin: "Chai Hu", chinese: "柴胡", latin: "Radix Bupleuri", dosage: "12g", role: "jun", role_name: "King", function: "Harmonizes Shao Yang, spreads Liver Qi" },
      { pinyin: "Gui Zhi", chinese: "桂枝", latin: "Ramulus Cinnamomi", dosage: "9g", role: "chen", role_name: "Minister", function: "Warms channels, resolves exterior, unblocks Yang Qi" },
      { pinyin: "Gan Jiang", chinese: "干姜", latin: "Rhizoma Zingiberis", dosage: "6g", role: "chen", role_name: "Minister", function: "Warms interior cold, strengthens Spleen Yang" },
      { pinyin: "Huang Qin", chinese: "黄芩", latin: "Radix Scutellariae", dosage: "9g", role: "zuo", role_name: "Assistant", function: "Clears Shao Yang heat — balances the warming herbs" },
      { pinyin: "Tian Hua Fen", chinese: "天花粉", latin: "Radix Trichosanthis", dosage: "12g", role: "zuo", role_name: "Assistant", function: "Generates fluids, clears heat, resolves thirst" },
      { pinyin: "Mu Li", chinese: "牡蛎", latin: "Concha Ostreae", dosage: "9g", role: "zuo", role_name: "Assistant", function: "Softens hardness, calms Shen, astringes sweating" },
      { pinyin: "Zhi Gan Cao", chinese: "炙甘草", latin: "Radix Glycyrrhizae Praeparata", dosage: "6g", role: "shi", role_name: "Envoy", function: "Harmonizes all herbs, tonifies Qi" },
    ],

    clinical_picture: {
      summary: "A Shao Yang harmonizing formula for when Shao Yang pathology coexists with interior COLD and fluid dysfunction. Where Xiao Chai Hu Tang treats classic Shao Yang (alternating fever/chills, bitter taste, right subcostal), this formula is for when the interior has become cold — chills dominant over fever, thirst without desire to drink (fluids not transforming), loose stools. The combination of Gui Zhi + Gan Jiang warms the interior while Chai Hu + Huang Qin still harmonizes the Shao Yang.",
      tongue: "Pale body with thin white coating. May be slightly swollen. NOT red (which would indicate Xiao Chai Hu Tang instead).",
      pulse: "Wiry (弦) and slow or wiry and weak. The wiry quality is Shao Yang; the slow/weak quality is interior cold deficiency.",
      key_symptoms: [
        "Chills more prominent than fever (interior cold dominant)",
        "Right subcostal discomfort (Shao Yang territory)",
        "Thirst but doesn't want to drink or drinks only warm water",
        "Loose stools or diarrhea tendency",
        "Chest and hypochondriac fullness",
        "Neck stiffness",
        "Palpitations (fluid/Yang disturbance)",
        "Spontaneous sweating from Yang Qi weakness",
        "Fatigue with Shao Yang symptoms",
        "Alternating symptoms that suggest Shao Yang but with cold signs",
      ],
      constitutional_type: "A cold-deficient type who develops Shao Yang pathology. They don't have the strength for full Shao Yang heat — instead the heat is mild and cold signs dominate. Often seen in chronic conditions where Zheng Qi is weakened.",
      typical_patient: "A 48-year-old woman with chronic right-sided rib discomfort. She feels cold easily and has loose stools. She gets episodes where she alternates between feeling slightly warm and then distinctly cold — but the cold always wins. She mentions thirst but when you offer water she says 'I don't really want it.' She has mild palpitations and neck stiffness. Her tongue is pale (not red) and her pulse is wiry but without force. This is not the classic strong Shao Yang — it's a weakened, cold version.",
    },

    actions: [
      "Harmonizes Shao Yang (和解少阳)",
      "Warms interior cold (温中散寒)",
      "Generates fluids (生津止渴)",
    ],
    actions_chinese: "和解少阳，温中散寒",

    pattern: "Shao Yang Pattern with Interior Cold and Fluid Dysfunction",
    pattern_chinese: "少阳病兼里虚寒证",

    contraindications: [
      "Classic Shao Yang with strong heat signs (bitter taste, dry throat, red tongue) — use Xiao Chai Hu Tang",
      "Full Yang Ming heat (high fever, constipation, strong pulse) — wrong level entirely",
      "Yin deficiency with red tongue and scanty coating — warming herbs will damage Yin further",
    ],
    cautions: [
      "The balance between warming (Gui Zhi, Gan Jiang) and cooling (Huang Qin, Tian Hua Fen) herbs is critical — do not skew the formula",
      "If heat signs develop during treatment, reduce Gui Zhi and Gan Jiang",
      "Long-term use may need Qi tonification support",
    ],

    differentiators: [
      { formula: "Xiao Chai Hu Tang", difference: "Xiao Chai Hu Tang is for CLASSIC Shao Yang — bitter taste, alternating fever/chills (balanced), nausea, right subcostal fullness, wiry pulse. Chai Hu Gui Zhi Gan Jiang Tang is for Shao Yang with INTERIOR COLD — chills dominate, loose stools, pale tongue, thirst without desire to drink. Temperature is the key differentiator." },
      { formula: "Da Chai Hu Tang", difference: "Da Chai Hu Tang is for Shao Yang + Yang Ming HEAT — constipation, strong full pulse, robust patient. The opposite direction from Chai Hu Gui Zhi Gan Jiang Tang which has interior COLD." },
      { formula: "Chai Hu Jia Long Gu Mu Li Tang", difference: "Chai Hu Jia Long Gu Mu Li Tang is for Shao Yang with Shen disturbance — palpitations, insomnia, anxiety in a STRONG patient. Chai Hu Gui Zhi Gan Jiang Tang is for Shao Yang with interior COLD in a WEAKER patient." },
    ],

    modifications: [
      { condition: "Severe interior cold with diarrhea", herbs_add: "Fu Zi 3g (pre-cooked), Bai Zhu 9g" },
      { condition: "Pronounced palpitations", herbs_add: "Long Gu 15g, Fu Ling 12g" },
      { condition: "Chronic fatigue dominant", herbs_add: "Huang Qi 15g, Dang Shen 12g" },
      { condition: "Neck stiffness severe", herbs_add: "Ge Gen 12g" },
    ],

    modern_applications: [
      "Chronic hepatitis (cold-deficiency pattern)",
      "Chronic cholecystitis (cold type)",
      "Irritable Bowel Syndrome (mixed Shao Yang + cold)",
      "Autoimmune conditions with mixed heat-cold presentation",
      "Post-viral fatigue with lingering Shao Yang symptoms",
      "Chronic Epstein-Barr reactivation",
      "Menopausal syndrome with cold dominance",
    ],

    color: "#5f7a8a",
  },

  // ============================================================
  // 24. CHAI HU JIA LONG GU MU LI TANG 柴胡加龙骨牡蛎汤
  // ============================================================
  "chai-hu-jia-long-gu-mu-li-tang": {
    id: "chai-hu-jia-long-gu-mu-li-tang",
    name_pinyin: "Chái Hú Jiā Lóng Gǔ Mǔ Lì Tāng",
    name_chinese: "柴胡加龙骨牡蛎汤",
    name_english: "Bupleurum plus Dragon Bone and Oyster Shell Decoction",
    category: "Harmonizing Formulas (和解剂)",
    source: "Shang Han Lun (c. 220 CE, Zhang Zhongjing)",
    source_chinese: "伤寒论",

    composition: [
      { pinyin: "Chai Hu", chinese: "柴胡", latin: "Radix Bupleuri", dosage: "12g", role: "jun", role_name: "King", function: "Harmonizes Shao Yang, spreads Liver Qi, relieves constraint" },
      { pinyin: "Long Gu", chinese: "龙骨", latin: "Os Draconis", dosage: "15g", role: "jun", role_name: "King", function: "Heavily settles the Shen, calms anxiety, anchors floating Yang" },
      { pinyin: "Mu Li", chinese: "牡蛎", latin: "Concha Ostreae", dosage: "15g", role: "jun", role_name: "King", function: "Heavily settles the Shen, softens hardness, astringes sweating" },
      { pinyin: "Huang Qin", chinese: "黄芩", latin: "Radix Scutellariae", dosage: "6g", role: "chen", role_name: "Minister", function: "Clears Shao Yang heat" },
      { pinyin: "Ban Xia", chinese: "半夏", latin: "Rhizoma Pinelliae", dosage: "9g", role: "chen", role_name: "Minister", function: "Harmonizes Stomach, descends rebellious Qi, transforms Phlegm" },
      { pinyin: "Gui Zhi", chinese: "桂枝", latin: "Ramulus Cinnamomi", dosage: "6g", role: "zuo", role_name: "Assistant", function: "Warms and unblocks Yang Qi, calms upward rushing" },
      { pinyin: "Fu Ling", chinese: "茯苓", latin: "Poria", dosage: "9g", role: "zuo", role_name: "Assistant", function: "Calms Shen, strengthens Spleen, leaches Dampness" },
      { pinyin: "Da Huang", chinese: "大黄", latin: "Radix et Rhizoma Rhei", dosage: "6g", role: "zuo", role_name: "Assistant", function: "Purges heat downward, prevents constraint from generating fire" },
      { pinyin: "Ren Shen", chinese: "人参", latin: "Radix Ginseng", dosage: "6g", role: "zuo", role_name: "Assistant", function: "Tonifies Zheng Qi to support the settling action" },
      { pinyin: "Sheng Jiang", chinese: "生姜", latin: "Rhizoma Zingiberis Recens", dosage: "3 slices", role: "shi", role_name: "Envoy", function: "Harmonizes Stomach" },
      { pinyin: "Da Zao", chinese: "大枣", latin: "Fructus Jujubae", dosage: "3 pieces", role: "shi", role_name: "Envoy", function: "Nourishes Spleen, harmonizes herbs" },
    ],

    clinical_picture: {
      summary: "A powerful Shao Yang formula for stress-induced upper body tension with Shen disturbance. The heavy minerals (Long Gu, Mu Li) settle the anxious, agitated spirit while Chai Hu harmonizes the Shao Yang. This is for the STRONG, tense patient — type-A personality under extreme stress who develops palpitations, insomnia, chest tightness, and mental agitation. The Da Huang purges downward to prevent constraint from generating internal fire.",
      tongue: "Red or dark-red. Coating may be yellow or greasy. The tongue reflects the heat and constraint.",
      pulse: "Wiry (弦) and rapid (数). Full and forceful — this is NOT a deficient pulse. Strong at the Cun position.",
      key_symptoms: [
        "Palpitations — strong, pounding, feels like heart is going to jump out",
        "Insomnia — mind racing, can't shut off thoughts",
        "Anxiety with physical tension — chest tightness, neck/shoulder rigidity",
        "Irritability and agitation — short temper, explosive anger",
        "A feeling of heaviness and fullness in the chest",
        "Stress-related hypertension",
        "Startles easily despite strong constitution",
        "Night sweating from Yang Qi disturbance",
        "Constipation tendency (heat constraint)",
        "Dream-disturbed sleep with nightmares",
      ],
      constitutional_type: "STRONG Chai Hu type — this is the type-A executive, the driven professional, the person who pushes through stress. They are NOT weak or depleted — they are wound tight like a spring. Robust constitution but under extreme mental pressure. Often muscular or thick-built.",
      typical_patient: "A 46-year-old male executive going through a corporate crisis. He can't sleep — his mind races with worst-case scenarios. He has developed heart palpitations that his cardiologist says are 'just stress.' His chest feels tight and heavy. He's become explosively irritable — snapping at his family. His blood pressure has risen to 150/95. He looks flushed and tense — his jaw is clenched, his shoulders are up by his ears. He's a big, strong man who's never been sick a day in his life — this is all new and frightening to him. His pulse is wiry, rapid, and forceful.",
    },

    actions: [
      "Harmonizes Shao Yang (和解少阳)",
      "Heavily settles and calms the Shen (重镇安神)",
      "Purges heat and unblocks constraint (泻热通便)",
    ],
    actions_chinese: "和解少阳，重镇安神",

    pattern: "Shao Yang Constraint with Shen Disturbance (Excess Type)",
    pattern_chinese: "少阳郁证，心神不安（实证）",

    contraindications: [
      "Weak, deficient patients — this is for STRONG patients. For weaker patients with similar symptoms, use Gui Zhi Jia Long Gu Mu Li Tang instead.",
      "Severe Yin deficiency — Da Huang and the strong descending action can further damage Yin",
      "Pregnancy — contains Da Huang",
      "Active diarrhea — Da Huang will worsen",
    ],
    cautions: [
      "Da Huang dose should be adjusted based on bowel function — reduce or remove if stools are already loose",
      "The original formula contains Qian Dan (lead oxide) — this is TOXIC and should be OMITTED in modern practice. Long Gu and Mu Li provide sufficient heavy mineral settling.",
      "Monitor blood pressure if patient is hypertensive — this formula may lower it",
    ],

    differentiators: [
      { formula: "Gui Zhi Jia Long Gu Mu Li Tang", difference: "THE CRITICAL DIFFERENTIATION: Chai Hu Jia Long Gu Mu Li Tang is for STRONG patients with excess-type agitation — full pulse, red face, constipation, thick build. Gui Zhi Jia Long Gu Mu Li Tang is for WEAKER patients with deficiency-type anxiety — thin pulse, pale face, spontaneous sweating, more fragile constitution. Both have palpitations and insomnia, but the patient TYPE is opposite." },
      { formula: "Xiao Chai Hu Tang", difference: "Xiao Chai Hu Tang is basic Shao Yang harmonizing without the Shen-settling component. Use it when there's Shao Yang pathology WITHOUT significant palpitations, insomnia, or anxiety." },
      { formula: "Tian Ma Gou Teng Yin", difference: "Tian Ma Gou Teng Yin treats Liver Yang Rising with Wind — dizziness, tremors, hypertension. Chai Hu Jia Long Gu Mu Li Tang treats Shao Yang constraint with Shen disturbance — palpitations, insomnia, mental agitation. Different mechanisms despite some overlapping symptoms." },
    ],

    modifications: [
      { condition: "Severe insomnia", herbs_add: "Suan Zao Ren 15g, Ci Shi 15g (pre-cooked)" },
      { condition: "Hypertension prominent", herbs_add: "Tian Ma 9g, Gou Teng 12g (added last)" },
      { condition: "Severe palpitations", herbs_add: "Ci Shi 15g, Bai Zi Ren 9g" },
      { condition: "Constipation severe", herbs_add: "Increase Da Huang to 9g, add Mang Xiao 6g" },
      { condition: "Remove Da Huang if stools are loose", herbs_add: "Bai Zhu 9g", herbs_remove: "Da Huang" },
    ],

    modern_applications: [
      "Anxiety disorder (excess type)",
      "Stress-induced hypertension",
      "Insomnia (excess type, racing mind)",
      "Cardiac neurosis (palpitations from stress)",
      "Panic disorder (strong constitution)",
      "PTSD (excess/agitation presentation)",
      "Epilepsy (Phlegm-Fire type, adjunct)",
      "Bipolar disorder — manic phase (adjunct)",
    ],

    dpiRemarks: "Qi type formula. This formula can treat all 3 types of yang wei conditions. Without shao yang. Treating stress, pain at the 3 yang at the face (yang ming), side of the neck mainly R (shao yang) and back also mainly R side (tai yang). But the origin of the stiffness / stress is at the R side of the head/neck = shao yang or more precise yang wei. This formula is more subcostal and secondary SubCardiac. Means the palpitations are not a most condition. Can be used by itself or as add up formulas. Modifications to other formulas. Acute, subacute to chronic. High mid to lower dosage. Overuse or high dosage will make the patient chills and fatigue with loss stool. Recommend to give afternoon and evening when the stress is building up.",

    color: "#4a6741",
  },

  // ============================================================
  // 25. GUI ZHI JIA LONG GU MU LI TANG 桂枝加龙骨牡蛎汤
  // ============================================================
  "gui-zhi-jia-long-gu-mu-li-tang": {
    id: "gui-zhi-jia-long-gu-mu-li-tang",
    name_pinyin: "Guì Zhī Jiā Lóng Gǔ Mǔ Lì Tāng",
    name_chinese: "桂枝加龙骨牡蛎汤",
    name_english: "Cinnamon Twig plus Dragon Bone and Oyster Shell Decoction",
    category: "Spirit-Calming Formulas (安神剂)",
    source: "Jin Gui Yao Lue (c. 220 CE, Zhang Zhongjing)",
    source_chinese: "金匮要略",

    composition: [
      { pinyin: "Gui Zhi", chinese: "桂枝", latin: "Ramulus Cinnamomi", dosage: "9g", role: "jun", role_name: "King", function: "Warms Yang, harmonizes Ying and Wei, calms upward rushing" },
      { pinyin: "Bai Shao", chinese: "白芍", latin: "Radix Paeoniae Alba", dosage: "9g", role: "chen", role_name: "Minister", function: "Nourishes Yin, harmonizes with Gui Zhi to balance Yin-Yang" },
      { pinyin: "Long Gu", chinese: "龙骨", latin: "Os Draconis", dosage: "15g", role: "chen", role_name: "Minister", function: "Settles the Shen, astringes essence, anchors floating Yang" },
      { pinyin: "Mu Li", chinese: "牡蛎", latin: "Concha Ostreae", dosage: "15g", role: "chen", role_name: "Minister", function: "Settles the Shen, astringes sweating and seminal emission" },
      { pinyin: "Sheng Jiang", chinese: "生姜", latin: "Rhizoma Zingiberis Recens", dosage: "9g", role: "zuo", role_name: "Assistant", function: "Warms Middle, assists Gui Zhi in warming Yang" },
      { pinyin: "Da Zao", chinese: "大枣", latin: "Fructus Jujubae", dosage: "4 pieces", role: "zuo", role_name: "Assistant", function: "Nourishes Spleen, nourishes Blood, calms Shen" },
      { pinyin: "Zhi Gan Cao", chinese: "炙甘草", latin: "Radix Glycyrrhizae Praeparata", dosage: "6g", role: "shi", role_name: "Envoy", function: "Harmonizes all herbs, tonifies Heart Qi" },
    ],

    clinical_picture: {
      summary: "Gui Zhi Tang (the base Yin-Yang harmonizing formula) plus Long Gu and Mu Li for the WEAKER patient with Heart-Liver constitutional fire. The original Jin Gui Yao Lue indication is for 'loss of essence' (失精) — the patient has been depleted through chronic stress, overwork, or excessive sexual activity, leading to Yin-Yang disharmony where Yang floats upward (red face, palpitations, anxiety) while the root is deficient. The heavy minerals anchor the floating Yang back down.",
      tongue: "Pale-red or red tip (floating fire). Thin white coating. May have a trembling quality.",
      pulse: "Floating (浮) and weak, or large but empty (芤). Reflects Yang floating on the surface while the interior is deficient.",
      key_symptoms: [
        "Palpitations — feels heart fluttering, worse when lying down",
        "Anxiety and being easily startled — hypervigilant but exhausted",
        "Insomnia — falls asleep but wakes easily from any sound",
        "Spontaneous sweating or night sweating",
        "Red face despite overall weakness (floating Yang)",
        "Rectus abdominis spasm on palpation",
        "Dream-disturbed sleep, wet dreams, or nocturnal emissions",
        "Hair loss",
        "Cold extremities alternating with hot sensations",
        "Fatigue with an underlying sense of restlessness",
      ],
      constitutional_type: "The WEAKER, more depleted type — contrast with the strong Chai Hu Jia Long Gu Mu Li Tang patient. This person has been running on empty. They may have been strong before but chronic stress, illness, or overwork has depleted them. The fire they display (red face, palpitations) is FLOATING fire from deficiency, not excess.",
      typical_patient: "A 38-year-old man who works two jobs and hasn't slept properly in months. He has palpitations that frighten him — especially when he lies down at night. He startles at every sound. He sweats at night. Despite being exhausted, he looks slightly flushed in the face. His abdominal exam reveals tight rectus abdominis muscles that spasm. He mentions loss of libido and occasional wet dreams. His hands alternate between cold and clammy-hot. He's thin and wired — not the robust type at all. His pulse feels floating and large but when you press deeper, it's empty.",
    },

    actions: [
      "Harmonizes Yin and Yang (调和阴阳)",
      "Settles the Shen and astringes essence (潜镇安神，固精)",
      "Anchors floating Yang (潜阳)",
    ],
    actions_chinese: "调和阴阳，潜镇安神，固精止遗",

    pattern: "Yin-Yang Disharmony with Floating Yang and Shen Disturbance (Deficiency Type)",
    pattern_chinese: "阴阳失调，心肾不交，失精证",

    contraindications: [
      "Strong, robust patients with excess-type anxiety — use Chai Hu Jia Long Gu Mu Li Tang instead",
      "Full excess heat — red tongue, yellow coating, strong rapid pulse",
      "Yin deficiency with severe heat signs — may need Liu Wei Di Huang Wan base first",
    ],
    cautions: [
      "This is fundamentally a HARMONIZING and ASTRINGENT formula — it works best when the pattern is mixed deficiency with floating Yang",
      "If the patient also has significant Blood deficiency, consider adding Dang Gui and Shu Di",
      "Long-term use is appropriate — this addresses a constitutional imbalance",
    ],

    differentiators: [
      { formula: "Chai Hu Jia Long Gu Mu Li Tang", difference: "THE KEY PAIR: Chai Hu Jia Long Gu Mu Li Tang = STRONG patient, excess-type agitation, full pulse, constipation tendency. Gui Zhi Jia Long Gu Mu Li Tang = WEAK patient, deficiency-type anxiety, floating empty pulse, sweating, depletion. SAME minerals (Long Gu + Mu Li) but completely different base formulas for completely different constitutions." },
      { formula: "Gan Mai Da Zao Tang", difference: "Gan Mai Da Zao Tang treats emotional DYSREGULATION (crying, hysteria) from Heart-Spleen deficiency. Gui Zhi Jia Long Gu Mu Li Tang treats Yin-Yang DISHARMONY with floating Yang — palpitations, startle response, essence loss. Different mechanisms." },
      { formula: "Tian Wang Bu Xin Dan", difference: "Tian Wang Bu Xin Dan nourishes Heart and Kidney Yin for insomnia with Yin deficiency heat. Gui Zhi Jia Long Gu Mu Li Tang HARMONIZES Yin-Yang and ANCHORS floating Yang. The former is pure Yin nourishment; the latter is Yin-Yang rebalancing." },
    ],

    modifications: [
      { condition: "Severe night sweats", herbs_add: "Huang Qi 15g, Fu Xiao Mai 30g" },
      { condition: "Nocturnal emissions / wet dreams", herbs_add: "Jin Ying Zi 9g, Qian Shi 12g" },
      { condition: "Hair loss", herbs_add: "He Shou Wu 12g, Nu Zhen Zi 9g" },
      { condition: "Severe palpitations", herbs_add: "Ci Shi 15g (pre-cooked), Bai Zi Ren 9g" },
      { condition: "Extreme fatigue with the above", herbs_add: "Ren Shen 9g, Huang Qi 15g" },
    ],

    modern_applications: [
      "Anxiety disorder (deficiency type)",
      "Insomnia (light sleep, easily startled)",
      "Cardiac neurosis (functional palpitations)",
      "Nocturnal emissions / spermatorrhea",
      "Chronic fatigue with anxiety",
      "Night sweats (Yin-Yang disharmony)",
      "Autonomic dysfunction",
      "Adrenal fatigue pattern",
    ],

    dpiRemarks: "Qi formula. Gui zhi tree fever that effects the shao yin. Rectus tension and spasm. Redish face 'fire type' in nature. It's a vascular person, vasovagal that can manifest HBP. Usually gui zhi tree formulas are chill type. But GZJLGMLT is fever type. Chronic condition, usually constitutional based. Comparing to other shao yin formulas like liu wei di huang wan based. The heart fever condition is more dominant unlike liu wei di huang wan based formulas that the K is more dominant.",
    treatmentTime: "1-3 months mid to low dosage level. Slow steady progression is recommended. Overuse will cause loss stool / diarrhea, chill, and sleepy feeling. Post Gui zhi jia long gu mu li tang can be on the gui zhi tree formulas or ren shen tree qi and xue xu formulas, gui pi tang.",

    color: "#8b6f47",
  },

  // ============================================================
  // 26. TONG XIE YAO FANG 痛泻要方
  // ============================================================
  "tong-xie-yao-fang": {
    id: "tong-xie-yao-fang",
    name_pinyin: "Tòng Xiè Yào Fāng",
    name_chinese: "痛泻要方",
    name_english: "Important Formula for Painful Diarrhea",
    category: "Harmonizing Formulas (和解剂)",
    source: "Jing Yue Quan Shu (1624 CE, citing Liu Cao Chuang)",
    source_chinese: "景岳全书（引刘草窗方）",

    composition: [
      { pinyin: "Bai Zhu", chinese: "白术", latin: "Rhizoma Atractylodis Macrocephalae", dosage: "12g", role: "jun", role_name: "King", function: "Strengthens Spleen, dries Dampness — addresses the root deficiency" },
      { pinyin: "Bai Shao", chinese: "白芍", latin: "Radix Paeoniae Alba", dosage: "12g", role: "chen", role_name: "Minister", function: "Softens Liver, stops pain, restrains the overacting Liver" },
      { pinyin: "Chen Pi", chinese: "陈皮", latin: "Pericarpium Citri Reticulatae", dosage: "9g", role: "zuo", role_name: "Assistant", function: "Regulates Qi, harmonizes Spleen and Stomach, stops diarrhea" },
      { pinyin: "Fang Feng", chinese: "防风", latin: "Radix Saposhnikoviae", dosage: "6g", role: "shi", role_name: "Envoy", function: "Disperses Liver constraint, lifts Spleen Yang — 'the wind medicine that moves stagnation'" },
    ],

    clinical_picture: {
      summary: "A beautifully focused four-herb formula specifically for Liver overacting on Spleen (肝脾不和) causing painful diarrhea. The mechanism is clear: emotional stress causes Liver Qi to attack the Spleen, the Spleen fails to transform and transport, resulting in abdominal pain immediately followed by diarrhea. The pain improves AFTER the diarrhea. This is the classic TCM understanding of stress-induced IBS.",
      tongue: "Pale with thin white coating. May have slightly red edges (Liver involvement).",
      pulse: "Wiry (弦) on the left (Liver), weak on the right (Spleen). This left-right difference is characteristic.",
      key_symptoms: [
        "Abdominal pain immediately followed by diarrhea",
        "Pain RELIEVED after bowel movement",
        "Borborygmus (stomach rumbling) before diarrhea",
        "Symptoms triggered or worsened by emotional stress",
        "Alternating constipation and diarrhea",
        "Bloating and distension before episodes",
        "Urgency — needs to rush to bathroom",
        "Symptoms worse before important events (exam diarrhea)",
        "Episodes may come in waves throughout the day",
      ],
      constitutional_type: "The Liver-Spleen disharmony type — the person whose gut is their stress barometer. They may be average build but with a sensitive digestive system that responds dramatically to emotional triggers.",
      typical_patient: "A 30-year-old graduate student who gets painful diarrhea every time she has an exam or presentation. The pain comes in waves — cramping, then rushing to the bathroom, then relief until the next wave. She's been diagnosed with IBS. Between episodes, her digestion is okay but not great — she bloats easily. Stress is the clear trigger. Her doctor prescribed antispasmodics which help the pain but not the diarrhea. Her pulse is wiry on the left and weaker on the right — classic Liver overacting on Spleen.",
    },

    actions: [
      "Tonifies Spleen and dries Dampness (补脾燥湿)",
      "Softens Liver and stops pain (柔肝止痛)",
      "Harmonizes Liver and Spleen (调和肝脾)",
    ],
    actions_chinese: "补脾柔肝，祛湿止泻",

    pattern: "Liver Overacting on Spleen (Liver-Spleen Disharmony)",
    pattern_chinese: "肝旺脾虚证（肝脾不和）",

    contraindications: [
      "Diarrhea from Damp-Heat (yellow greasy coating, burning anus, foul smell) — needs clearing, not harmonizing",
      "Diarrhea from food stagnation — needs Bao He Wan",
      "Diarrhea from Kidney Yang deficiency (5 AM diarrhea, cold limbs) — wrong mechanism",
      "Severe Spleen Yang collapse with watery diarrhea and cold — too mild",
    ],
    cautions: [
      "This is primarily for the DIARRHEA-PREDOMINANT pattern. For constipation-predominant IBS with Liver-Spleen disharmony, different herbs are needed.",
      "If emotional stress is very severe, consider adding Liver-soothing herbs (Chai Hu, Xiang Fu) for a more comprehensive approach",
      "For chronic cases, may need to be combined with stronger Spleen tonification",
    ],

    differentiators: [
      { formula: "Xiao Yao San", difference: "Xiao Yao San treats Liver-Spleen disharmony with a BROADER presentation — mood changes, fatigue, menstrual issues, AND digestive symptoms. Tong Xie Yao Fang is FOCUSED specifically on the painful diarrhea pattern. If the main complaint is 'stress diarrhea,' use Tong Xie Yao Fang. If it's a complex picture, use Xiao Yao San." },
      { formula: "Ban Xia Xie Xin Tang", difference: "Ban Xia Xie Xin Tang treats mixed heat-cold in the Middle Jiao — epigastric hardness, borborygmus, diarrhea. But it addresses a Spleen/Stomach mechanism, not Liver overacting on Spleen. Check for the emotional trigger to differentiate." },
      { formula: "Shen Ling Bai Zhu San", difference: "Shen Ling Bai Zhu San treats Spleen Qi deficiency with dampness causing chronic loose stools — but WITHOUT the pain and emotional trigger. It's pure Spleen deficiency, no Liver involvement." },
    ],

    modifications: [
      { condition: "Severe pain", herbs_add: "Yan Hu Suo 9g, Mu Xiang 6g" },
      { condition: "Very emotional trigger / Liver Qi Stagnation prominent", herbs_add: "Chai Hu 6g, Xiang Fu 9g" },
      { condition: "Chronic diarrhea with Spleen Xu", herbs_add: "Shan Yao 15g, Fu Ling 12g" },
      { condition: "With food stagnation", herbs_add: "Shan Zha 9g, Shen Qu 9g" },
      { condition: "Mucus in stools", herbs_add: "Yi Yi Ren 15g, Huang Lian 3g" },
    ],

    modern_applications: [
      "Irritable Bowel Syndrome (IBS-D, diarrhea-predominant)",
      "Stress-induced diarrhea",
      "Functional abdominal pain with diarrhea",
      "Ulcerative colitis (Liver-Spleen pattern, mild)",
      "Nervous stomach before events",
      "Chronic non-specific diarrhea (stress-related)",
    ],

    dpiRemarks: "Tong Xie Yao Fang addresses Spleen Qi deficiency more effectively than Xiao Yao Wan. While the abdominal presentation may appear similar, if taking Xiao Yao Wan leads to diarrhea, it's better to use Tong Xie Yao Fang. Another way to differentiate is that IBS symptoms are more definitively treated by Tong Xie Yao Fang than by Xiao Yao Wan. Tong Xie Yao Fang also regulates the Liver meridian, but to a lesser extent compared to Xiao Yao Wan.",
    treatmentTime: "4 months to 1 year mid to low dosage level.",

    color: "#6b9e8a",
  },

  // ============================================================
  // 27. YU PING FENG SAN 玉屏风散
  // ============================================================
  "yu-ping-feng-san": {
    id: "yu-ping-feng-san",
    name_pinyin: "Yù Píng Fēng Sǎn",
    name_chinese: "玉屏风散",
    name_english: "Jade Windscreen Powder",
    category: "Qi-Tonifying Formulas (补气剂)",
    source: "Dan Xi Xin Fa (1481 CE, Zhu Danxi)",
    source_chinese: "丹溪心法",

    composition: [
      { pinyin: "Huang Qi", chinese: "黄芪", latin: "Radix Astragali", dosage: "30g", role: "jun", role_name: "King", function: "Tonifies Wei Qi (defensive Qi), stabilizes the exterior, stops sweating" },
      { pinyin: "Bai Zhu", chinese: "白术", latin: "Rhizoma Atractylodis Macrocephalae", dosage: "15g", role: "chen", role_name: "Minister", function: "Strengthens Spleen to generate Qi — the source of Wei Qi" },
      { pinyin: "Fang Feng", chinese: "防风", latin: "Radix Saposhnikoviae", dosage: "15g", role: "zuo", role_name: "Assistant", function: "Expels residual Wind, secures the exterior — the 'windscreen'" },
    ],

    clinical_picture: {
      summary: "An elegant three-herb formula for Wei Qi (defensive Qi) deficiency — the patient who catches every cold. The name 'Jade Windscreen' captures the concept perfectly: the formula creates an invisible protective screen against external Wind invasion. Huang Qi builds up Wei Qi, Bai Zhu strengthens the Spleen (the factory that produces Wei Qi), and Fang Feng acts as the actual screen against wind pathogens. Beautifully simple, highly effective for immune weakness.",
      tongue: "Pale, may be slightly swollen with tooth marks. Thin white coating.",
      pulse: "Floating (浮) and weak (虚). The Wei Qi is floating on the surface but without strength — it cannot close the pores.",
      key_symptoms: [
        "Catches colds frequently — every time someone around them is sick",
        "Spontaneous sweating — sweats without exertion, especially during the day",
        "Aversion to wind — feels every breeze, covers up immediately",
        "Pale, bright complexion (Qi deficiency appearance)",
        "Fatigue — especially after catching a cold, slow recovery",
        "Allergic rhinitis — sneezing, runny nose from wind exposure",
        "Slow wound healing",
        "Children who are always sick at school",
      ],
      constitutional_type: "The immune-deficient type — often children, elderly, or those weakened by chronic illness. They have a 'wide open door' — their exterior defense is compromised. They may not look sick between colds, but they catch everything.",
      typical_patient: "A mother brings her 7-year-old son who has missed 20 days of school this year due to recurring colds. Every time one child in his class gets sick, he catches it within days. He sweats a lot during the day even without exertion — his shirts are always damp. He feels every draft of wind. He's pale and somewhat thin. Between colds he seems okay but never fully robust. His tongue is pale and his pulse is floating but without any force behind it.",
    },

    actions: [
      "Tonifies Wei Qi and stabilizes the exterior (益气固表)",
      "Stops sweating (止汗)",
      "Expels Wind (祛风)",
    ],
    actions_chinese: "益气固表，止汗祛风",

    pattern: "Wei Qi (Defensive Qi) Deficiency with Exterior Instability",
    pattern_chinese: "表虚自汗，易感风邪证",

    contraindications: [
      "DURING an active cold/flu — this is a PREVENTIVE formula, not a treatment formula. If the patient currently has an exterior pathogen, treat the acute condition first.",
      "Excess exterior syndrome — strong fever, body aches, strong pulse. Yu Ping Feng San treats DEFICIENCY, not excess.",
      "Night sweats from Yin deficiency — this treats DAY sweating from Qi deficiency. For night sweats, nourish Yin instead.",
    ],
    cautions: [
      "Huang Qi dosage is critical — use high dose (30g) for maximum immune support. Lower doses are less effective for this indication.",
      "This is a LONG-TERM prophylactic formula — best taken for 2-3 months before cold season",
      "Not a rescue formula — don't start it when the patient is already sick",
    ],

    differentiators: [
      { formula: "Gui Zhi Tang", difference: "Gui Zhi Tang treats an ACTIVE Wind-Cold invasion in a Wei Qi deficient patient — they already have a cold. Yu Ping Feng San PREVENTS the cold by strengthening Wei Qi before invasion occurs. Treatment vs. prevention." },
      { formula: "Bu Zhong Yi Qi Tang", difference: "Bu Zhong Yi Qi Tang lifts SUNKEN Qi — for prolapse, chronic diarrhea, sinking fatigue. Yu Ping Feng San stabilizes EXTERIOR Qi — for frequent colds and sweating. Different direction of Qi dysfunction." },
      { formula: "Si Jun Zi Tang", difference: "Si Jun Zi Tang tonifies Spleen Qi generally. Yu Ping Feng San specifically targets WEI QI and the exterior defense. Si Jun Zi Tang doesn't have the Wind-screening Fang Feng component." },
    ],

    modifications: [
      { condition: "Severe sweating", herbs_add: "Fu Xiao Mai 30g, Mu Li 15g" },
      { condition: "Allergic rhinitis", herbs_add: "Cang Er Zi 6g, Xin Yi Hua 9g, Bai Zhi 6g" },
      { condition: "With Spleen Qi deficiency (fatigue, loose stools)", herbs_add: "Dang Shen 12g, Fu Ling 9g" },
      { condition: "Recurring respiratory infections in children", herbs_add: "Tai Zi Shen 12g, Shan Yao 12g" },
      { condition: "Concurrent mild cold symptoms", herbs_add: "Jing Jie 6g, Gui Zhi 6g" },
    ],

    modern_applications: [
      "Recurrent upper respiratory infections",
      "Allergic rhinitis",
      "Chronic urticaria (Wei Qi type)",
      "Hyperhidrosis (spontaneous sweating type)",
      "Post-chemotherapy immune support",
      "Childhood recurrent infections",
      "Elderly immune weakness",
      "Prevention during cold/flu season",
    ],

    color: "#87ceeb",
  },

  // ============================================================
  // 28. SHEN TONG ZHU YU TANG 身痛逐瘀汤
  // ============================================================
  "shen-tong-zhu-yu-tang": {
    id: "shen-tong-zhu-yu-tang",
    name_pinyin: "Shēn Tòng Zhú Yū Tāng",
    name_chinese: "身痛逐瘀汤",
    name_english: "Drive Out Stasis from a Painful Body",
    category: "Blood-Invigorating and Stasis-Removing Formulas (活血祛瘀剂)",
    source: "Yi Lin Gai Cuo (1830 CE, Wang Qingren)",
    source_chinese: "医林改错",

    composition: [
      { pinyin: "Qin Jiao", chinese: "秦艽", latin: "Radix Gentianae Macrophyllae", dosage: "9g", role: "jun", role_name: "King", function: "Dispels Wind-Dampness from channels, alleviates pain" },
      { pinyin: "Chuan Xiong", chinese: "川芎", latin: "Rhizoma Chuanxiong", dosage: "6g", role: "jun", role_name: "King", function: "Moves Blood and Qi, opens channels, stops pain" },
      { pinyin: "Tao Ren", chinese: "桃仁", latin: "Semen Persicae", dosage: "9g", role: "chen", role_name: "Minister", function: "Breaks Blood stasis in the channels" },
      { pinyin: "Hong Hua", chinese: "红花", latin: "Flos Carthami", dosage: "9g", role: "chen", role_name: "Minister", function: "Invigorates Blood, dispels stasis, opens channels" },
      { pinyin: "Dang Gui", chinese: "当归", latin: "Radix Angelicae Sinensis", dosage: "9g", role: "chen", role_name: "Minister", function: "Nourishes and activates Blood — prevents Blood-breaking from causing deficiency" },
      { pinyin: "Wu Ling Zhi", chinese: "五灵脂", latin: "Faeces Trogopterori", dosage: "6g", role: "zuo", role_name: "Assistant", function: "Invigorates Blood, stops pain — especially for severe stabbing pain" },
      { pinyin: "Mo Yao", chinese: "没药", latin: "Myrrha", dosage: "6g", role: "zuo", role_name: "Assistant", function: "Invigorates Blood, stops pain, reduces swelling" },
      { pinyin: "Xiang Fu", chinese: "香附", latin: "Rhizoma Cyperi", dosage: "6g", role: "zuo", role_name: "Assistant", function: "Moves Qi to assist Blood movement — Qi moves Blood" },
      { pinyin: "Niu Xi", chinese: "牛膝", latin: "Radix Achyranthis Bidentatae", dosage: "9g", role: "zuo", role_name: "Assistant", function: "Directs Blood movement to lower body, strengthens knees/lower back" },
      { pinyin: "Di Long", chinese: "地龙", latin: "Pheretima", dosage: "6g", role: "zuo", role_name: "Assistant", function: "Opens channels and collaterals, clears heat from channels" },
      { pinyin: "Gan Cao", chinese: "甘草", latin: "Radix Glycyrrhizae", dosage: "3g", role: "shi", role_name: "Envoy", function: "Harmonizes all herbs, moderates strong Blood-moving action" },
    ],

    clinical_picture: {
      summary: "Wang Qingren's formula for Blood stasis in the MERIDIANS and CHANNELS — causing generalized body pain. Where Xue Fu Zhu Yu Tang targets the chest and Tao He Cheng Qi Tang targets the lower jiao, Shen Tong Zhu Yu Tang targets the MUSCULOSKELETAL system. This is for the patient whose pain is chronic, widespread, and not explained by structural damage — the pain is from Blood stasis obstructing the flow of Qi and Blood through the channels.",
      tongue: "Dark or purple, may have ecchymosis (dark spots). Sublingual veins may be distended.",
      pulse: "Choppy (涩) or wiry and choppy. May be tight in areas corresponding to pain locations.",
      key_symptoms: [
        "Generalized body pain — widespread aching, not limited to one area",
        "Pain worse at night (Blood stasis characteristically worsens at night)",
        "Pain that is fixed in location and doesn't move",
        "Pain worse with pressure (excess-type pain)",
        "Numbness or tingling alternating with pain",
        "Muscle pain that doesn't respond to standard analgesics",
        "Joint stiffness and pain, especially in the morning",
        "Pain after old injuries that never fully healed",
        "Dark complexion or dark circles under eyes",
        "History of trauma, repetitive injury, or surgery in the past",
      ],
      constitutional_type: "The patient with chronic pain — they may be any body type, but the pain has been present for a long time (months to years). The chronicity is the key: acute pain is usually not Blood stasis, but when pain persists beyond the normal healing time, Blood stasis must be considered.",
      typical_patient: "A 55-year-old woman diagnosed with fibromyalgia. She hurts everywhere — her shoulders, upper back, hips, thighs. The pain is worse at night and she wakes stiff in the morning. Standard pain medications barely touch it. She had a car accident 8 years ago and says 'I was never the same after that.' Her face has a dusky, slightly dark quality. Her tongue has purple spots. She also has old surgical scars that still ache. Multiple trigger points are tender on examination. Her pulse is choppy — you can feel it 'stumbling' under your fingers.",
    },

    actions: [
      "Invigorates Blood and dispels stasis in the channels (活血祛瘀通络)",
      "Moves Qi to assist Blood movement (行气活血)",
      "Dispels Wind-Dampness (祛风除湿)",
      "Stops pain (止痛)",
    ],
    actions_chinese: "活血祛瘀，通经止痛",

    pattern: "Blood Stasis in the Channels and Meridians",
    pattern_chinese: "瘀血痹阻经络证",

    contraindications: [
      "Pregnancy — strong Blood-moving herbs",
      "Active bleeding — hemorrhage, heavy menstruation",
      "Severe Qi and Blood deficiency — must tonify before moving",
      "Acute inflammatory joint conditions with red, hot, swollen joints — clear heat first",
      "Patients on anticoagulants — synergistic blood-thinning risk",
    ],
    cautions: [
      "Strong Blood-moving formula — start with standard doses and assess tolerance",
      "Wu Ling Zhi is incompatible with Ren Shen (traditional prohibition — 十八反)",
      "Mo Yao can cause gastric irritation — take with food",
      "May cause temporary pain exacerbation as stasis begins to move",
    ],

    differentiators: [
      { formula: "Xue Fu Zhu Yu Tang", difference: "Xue Fu Zhu Yu Tang targets Blood stasis in the CHEST — headaches, chest pain, emotional stagnation. Shen Tong Zhu Yu Tang targets Blood stasis in the BODY/CHANNELS — generalized muscle and joint pain. Same author (Wang Qingren), different target areas." },
      { formula: "Du Huo Ji Sheng Tang", difference: "Du Huo Ji Sheng Tang treats Bi Syndrome (Wind-Damp-Cold obstruction) with underlying Liver-Kidney deficiency — more for elderly joint pain with weakness. Shen Tong Zhu Yu Tang treats Blood STASIS in the channels — the mechanism is stasis obstruction, not Wind-Damp invasion." },
      { formula: "Gui Zhi Fu Ling Wan", difference: "Gui Zhi Fu Ling Wan treats Blood stasis in the LOWER JIAO — uterine fibroids, ovarian cysts. Shen Tong Zhu Yu Tang treats Blood stasis in the MUSCULOSKELETAL system. Different anatomical targets." },
    ],

    modifications: [
      { condition: "Upper body pain dominant", herbs_add: "Jiang Huang 9g, Gui Zhi 6g" },
      { condition: "Lower body pain dominant", herbs_add: "Increase Niu Xi to 15g, Du Huo 9g" },
      { condition: "Cold-type pain (worse in cold weather)", herbs_add: "Gui Zhi 9g, Xi Xin 3g" },
      { condition: "Joint swelling", herbs_add: "Yi Yi Ren 15g, Fang Ji 9g" },
      { condition: "With Qi deficiency (tired, weak)", herbs_add: "Huang Qi 15g, Dang Shen 12g" },
    ],

    modern_applications: [
      "Fibromyalgia",
      "Chronic widespread pain",
      "Post-traumatic chronic pain",
      "Chronic myofascial pain syndrome",
      "Rheumatoid arthritis (Blood stasis pattern)",
      "Post-surgical adhesion pain",
      "Sciatica (Blood stasis type)",
      "Chronic repetitive strain injuries",
    ],

    color: "#9b2335",
  },

  // ============================================================
  // 29. ZHEN WU TANG 真武汤
  // ============================================================
  "zhen-wu-tang": {
    id: "zhen-wu-tang",
    name_pinyin: "Zhēn Wǔ Tāng",
    name_chinese: "真武汤",
    name_english: "True Warrior Decoction",
    category: "Warming Interior-Cold Formulas (温里剂)",
    source: "Shang Han Lun (c. 220 CE, Zhang Zhongjing)",
    source_chinese: "伤寒论",

    composition: [
      { pinyin: "Fu Zi", chinese: "附子", latin: "Radix Aconiti Lateralis Praeparata", dosage: "9g", role: "jun", role_name: "King", function: "Warms Kidney Yang, restores Yang Qi, drives out cold" },
      { pinyin: "Bai Zhu", chinese: "白术", latin: "Rhizoma Atractylodis Macrocephalae", dosage: "9g", role: "chen", role_name: "Minister", function: "Strengthens Spleen, dries Dampness, assists water metabolism" },
      { pinyin: "Fu Ling", chinese: "茯苓", latin: "Poria", dosage: "9g", role: "chen", role_name: "Minister", function: "Promotes urination, drains Dampness, strengthens Spleen" },
      { pinyin: "Bai Shao", chinese: "白芍", latin: "Radix Paeoniae Alba", dosage: "9g", role: "zuo", role_name: "Assistant", function: "Nourishes Yin, softens Liver, prevents Fu Zi from being too drying" },
      { pinyin: "Sheng Jiang", chinese: "生姜", latin: "Rhizoma Zingiberis Recens", dosage: "9g", role: "zuo", role_name: "Assistant", function: "Assists Fu Zi in warming, disperses water accumulation" },
    ],

    clinical_picture: {
      summary: "A critical formula for severe Kidney and Spleen Yang deficiency with pathological water accumulation. Named after Xuan Wu (the True Warrior/Black Turtle), guardian of the North (Kidney/Water), this formula rescues failing Yang and controls runaway water metabolism. When Yang Qi is too weak to transform fluids, water accumulates — causing edema, palpitations (water attacking the Heart), dizziness, and severe cold. This is a more acute/severe formula than Ba Wei Di Huang Wan.",
      tongue: "Pale, swollen, wet, with tooth marks. White slippery coating. The tongue may feel cold to the touch.",
      pulse: "Deep (沉) and thin (细), or deep and slow (迟). Very weak — you need to press hard to feel it.",
      key_symptoms: [
        "Edema — especially legs, ankles, face (water not being transformed)",
        "Palpitations — water Qi attacking the Heart",
        "Dizziness and vertigo — water obstructing clear Yang from rising",
        "Severe cold limbs — all four extremities are cold",
        "Abdominal pain with cold sensation",
        "Diarrhea with undigested food",
        "Heaviness of the body — feels like wearing wet clothes",
        "Scanty urination despite fluid accumulation",
        "Cough with thin, watery sputum",
        "Severe fatigue — can barely get out of bed",
      ],
      constitutional_type: "Severely Yang-deficient type — this patient is in trouble. They are cold, swollen, exhausted, and their body cannot process fluids. Often elderly, chronically ill, or in the late stages of a disease process. This is NOT a mild tonic situation.",
      typical_patient: "A 70-year-old man with congestive heart failure (from a TCM perspective). His legs are severely swollen — pitting edema up to his knees. He has palpitations that worsen when lying down. He's dizzy and can barely stand. His whole body feels heavy and cold. He passes very little urine despite drinking normally. His face is puffy and pale. He has loose, watery stools. He wraps himself in blankets even in a warm room. His pulse is so deep you almost can't find it. This is a Yang collapse picture — the body's fire is going out.",
    },

    actions: [
      "Warms Kidney Yang (温肾阳)",
      "Promotes urination and drains water (利水渗湿)",
      "Strengthens Spleen to control water (健脾制水)",
    ],
    actions_chinese: "温阳利水",

    pattern: "Kidney and Spleen Yang Deficiency with Water Flooding",
    pattern_chinese: "脾肾阳虚，水气内停证",

    contraindications: [
      "Yin deficiency with heat signs — red tongue, night sweats, rapid pulse. Fu Zi will devastate remaining Yin.",
      "Edema from Damp-Heat — yellow greasy coating, burning urination. This needs clearing, not warming.",
      "Excess heat of any kind — this is a deeply warming formula.",
      "Pregnancy — Fu Zi is contraindicated.",
    ],
    cautions: [
      "Fu Zi MUST be properly prepared (制附子) and pre-decocted 30-60 minutes to reduce aconitine toxicity",
      "Monitor for Fu Zi toxicity signs: tongue/lip numbness, palpitations worsening, nausea",
      "In severe cases, may need to combine with Si Ni Tang for Yang rescue",
      "This formula addresses the BRANCH (water) and ROOT (Yang Xu) simultaneously — don't stop too early",
    ],

    differentiators: [
      { formula: "Ba Wei Di Huang Wan", difference: "Ba Wei Di Huang Wan treats CHRONIC, gradual Kidney Yang decline — nocturia, low back pain, cold feet. Zhen Wu Tang treats ACUTE/SEVERE Yang Xu with water flooding — edema, palpitations, dizziness, Yang collapse. Severity and acuity are the differentiators." },
      { formula: "Wu Ling San", difference: "Wu Ling San promotes urination for water retention but without the Yang-warming component. Use Wu Ling San when there's water retention WITHOUT Yang deficiency. Zhen Wu Tang is needed when Yang deficiency is the ROOT cause of water accumulation." },
      { formula: "Li Zhong Wan", difference: "Li Zhong Wan warms the MIDDLE JIAO (Spleen/Stomach Yang Xu) — diarrhea, cold abdomen, poor appetite. Zhen Wu Tang warms KIDNEY Yang and controls WATER — edema, palpitations, systemic cold. Different target organ and different pathological product." },
    ],

    modifications: [
      { condition: "Severe Yang collapse (near shock)", herbs_add: "Ren Shen 9g, Gan Jiang 6g (approaching Si Ni Tang)" },
      { condition: "Cough with watery sputum", herbs_add: "Xi Xin 3g, Wu Wei Zi 6g" },
      { condition: "Severe edema", herbs_add: "Ze Xie 12g, Che Qian Zi 9g" },
      { condition: "Diarrhea with undigested food", herbs_add: "Gan Jiang 6g, Rou Dou Kou 6g" },
    ],

    modern_applications: [
      "Congestive heart failure (Yang Xu pattern)",
      "Chronic kidney disease with edema",
      "Hypothyroidism (severe cold pattern)",
      "Chronic diarrhea (Yang deficiency type)",
      "Meniere's disease (Yang Xu with water retention)",
      "Chronic bronchitis with watery sputum",
      "Cirrhotic ascites (Yang Xu pattern)",
      "Elderly debility with fluid retention",
    ],

    color: "#2f4f4f",
  },

  // ============================================================
  // 30. YOU GUI WAN 右归丸
  // ============================================================
  "you-gui-wan": {
    id: "you-gui-wan",
    name_pinyin: "Yòu Guī Wán",
    name_chinese: "右归丸",
    name_english: "Restore the Right Kidney Pill",
    category: "Yang-Tonifying Formulas (补阳剂)",
    source: "Jing Yue Quan Shu (1624 CE, Zhang Jingyue)",
    source_chinese: "景岳全书",

    composition: [
      { pinyin: "Shu Di Huang", chinese: "熟地黄", latin: "Radix Rehmanniae Praeparata", dosage: "24g", role: "jun", role_name: "King", function: "Nourishes Kidney Yin and essence — the material foundation for Yang" },
      { pinyin: "Fu Zi", chinese: "附子", latin: "Radix Aconiti Lateralis Praeparata", dosage: "6g", role: "jun", role_name: "King", function: "Warms Kidney Yang, restores Ming Men fire" },
      { pinyin: "Rou Gui", chinese: "肉桂", latin: "Cortex Cinnamomi", dosage: "6g", role: "jun", role_name: "King", function: "Warms Ming Men, leads fire back to source" },
      { pinyin: "Shan Yao", chinese: "山药", latin: "Rhizoma Dioscoreae", dosage: "12g", role: "chen", role_name: "Minister", function: "Tonifies Spleen and Kidney" },
      { pinyin: "Shan Zhu Yu", chinese: "山茱萸", latin: "Fructus Corni", dosage: "9g", role: "chen", role_name: "Minister", function: "Nourishes Liver and Kidney, astringes essence" },
      { pinyin: "Gou Qi Zi", chinese: "枸杞子", latin: "Fructus Lycii", dosage: "12g", role: "chen", role_name: "Minister", function: "Nourishes Liver and Kidney Yin, brightens eyes" },
      { pinyin: "Lu Jiao Jiao", chinese: "鹿角胶", latin: "Colla Cornus Cervi", dosage: "12g", role: "chen", role_name: "Minister", function: "Warms Kidney Yang, nourishes essence and Blood, strengthens sinews and bones" },
      { pinyin: "Tu Si Zi", chinese: "菟丝子", latin: "Semen Cuscutae", dosage: "12g", role: "zuo", role_name: "Assistant", function: "Tonifies Kidney Yang and Yin, secures essence" },
      { pinyin: "Du Zhong", chinese: "杜仲", latin: "Cortex Eucommiae", dosage: "12g", role: "zuo", role_name: "Assistant", function: "Tonifies Kidney, strengthens lower back and knees" },
      { pinyin: "Dang Gui", chinese: "当归", latin: "Radix Angelicae Sinensis", dosage: "9g", role: "zuo", role_name: "Assistant", function: "Nourishes Blood, supports the Yin foundation" },
    ],

    clinical_picture: {
      summary: "Zhang Jingyue's masterpiece for comprehensive Kidney Yang tonification. 'Right Kidney' (右归) refers to Ming Men (the right Kidney in classical theory — the source of Yang and life fire). This is STRONGER than Ba Wei Di Huang Wan — it removes the three 'draining' herbs (Ze Xie, Mu Dan Pi, Fu Ling) and adds powerful Yang-tonifying and essence-nourishing herbs (Lu Jiao Jiao, Du Zhong, Tu Si Zi, Gou Qi Zi). Used when Ba Wei Di Huang Wan is not strong enough.",
      tongue: "Pale, swollen, wet. White coating. May have tooth marks.",
      pulse: "Deep (沉) and slow (迟) and weak (弱). Both Chi positions are particularly weak.",
      key_symptoms: [
        "Severe lower back and knee weakness",
        "Impotence or severe low libido",
        "Infertility (male or female — cold womb)",
        "Cold from the waist down — as if lower body is in ice water",
        "Early morning diarrhea (5 AM, 'cock-crow diarrhea')",
        "Frequent clear urination",
        "Edema of lower limbs",
        "Fatigue that is worse in cold weather",
        "Premature aging — gray hair, weak bones",
        "Spermatorrhea or clear watery vaginal discharge",
      ],
      constitutional_type: "Deeply Kidney Yang deficient — more severe than Ba Wei Di Huang Wan type. Often middle-aged to elderly with longstanding decline. May also be younger patients with congenital Kidney Yang weakness or those depleted by chronic illness, excessive sexual activity, or overwork.",
      typical_patient: "A 58-year-old man whose main complaint is 'I feel like I'm falling apart.' His lower back is so weak he needs to hold onto furniture to stand. He's had erectile dysfunction for years. He wakes at 5 AM with urgent diarrhea — watery, undigested. His feet are like ice. He urinates frequently, especially at night. He tried Ba Wei Di Huang Wan for 3 months but it wasn't strong enough. His hair has gone completely gray. He looks older than his age — stooped posture, slow movement. His pulse is barely palpable at the Chi positions.",
    },

    actions: [
      "Warms and tonifies Kidney Yang (温补肾阳)",
      "Nourishes essence and Blood (填精补血)",
      "Strengthens Ming Men fire (温补命门)",
    ],
    actions_chinese: "温补肾阳，填精补血",

    pattern: "Kidney Yang Deficiency (Severe — Ming Men Fire Exhausted)",
    pattern_chinese: "肾阳不足，命门火衰证（重证）",

    contraindications: [
      "Kidney Yin deficiency with heat — night sweats, red tongue, hot palms. Use Zuo Gui Yin instead.",
      "Any excess heat pattern — this is heavily warming",
      "Damp-Heat in lower jiao — yellow discharge, burning urination",
      "Pregnancy — contains Fu Zi",
    ],
    cautions: [
      "Lu Jiao Jiao should be dissolved separately in warm water and added to the strained decoction",
      "Fu Zi must be pre-decocted 30-60 minutes",
      "Very rich and cloying formula — if digestion is weak, add Sha Ren 3g or Chen Pi 6g",
      "Long-term formula — Kidney Yang rebuilding takes months",
    ],

    differentiators: [
      { formula: "Ba Wei Di Huang Wan", difference: "Ba Wei Di Huang Wan (Jin Gui Shen Qi Wan) is MILDER Yang tonification — it still contains the three draining herbs. You Gui Wan is STRONGER — removes the draining herbs and adds Lu Jiao Jiao, Du Zhong, Tu Si Zi, Gou Qi Zi. Upgrade to You Gui Wan when Ba Wei is not sufficient." },
      { formula: "Zuo Gui Yin", difference: "Zuo Gui Yin ('Restore the Left') nourishes Kidney YIN. You Gui Wan ('Restore the Right') tonifies Kidney YANG. Left = Yin, Right = Yang in classical theory. Is the patient HOT or COLD? Hot → Zuo Gui. Cold → You Gui." },
      { formula: "Zhen Wu Tang", difference: "Zhen Wu Tang addresses ACUTE Yang Xu with water flooding — an emergency. You Gui Wan is for CHRONIC, deep Kidney Yang deficiency — long-term rebuilding. Acute vs. chronic." },
    ],

    modifications: [
      { condition: "Severe impotence", herbs_add: "Yin Yang Huo 15g, Ba Ji Tian 12g" },
      { condition: "Female infertility (cold womb)", herbs_add: "Ai Ye 6g, Xiang Fu 9g" },
      { condition: "Severe 5 AM diarrhea", herbs_add: "Bu Gu Zhi 9g, Wu Wei Zi 6g, Rou Dou Kou 6g (= Si Shen Wan)" },
      { condition: "Bone weakness / osteoporosis", herbs_add: "Xu Duan 12g, Gu Sui Bu 12g" },
    ],

    modern_applications: [
      "Severe hypothyroidism",
      "Male infertility (low sperm count/motility)",
      "Female infertility (cold pattern)",
      "Erectile dysfunction (Yang Xu type)",
      "Chronic kidney disease (Yang Xu pattern)",
      "Osteoporosis (Kidney Yang type)",
      "Adrenal insufficiency pattern",
      "Premature aging syndrome",
    ],

    dpiRemarks: "Xue type formula. You gui wan it's a K mai formula. Focuses mainly at the lower part of the body reinforcing the Pelvic Floor. Worming the lower abdomen treat urinary retention and BPH. It's a male formula.",
    treatmentTime: "1-6 months high to mid dosage. Post xiang sha liu jun zi tang, liu jun zi tang and then si jun zi tang.",

    color: "#d2691e",
  },

  // ============================================================
  // 31. ZUO GUI YIN 左归饮
  // ============================================================
  "zuo-gui-wan": {
    id: "zuo-gui-wan",
    name_pinyin: "Zuǒ Guī Yǐn",
    name_chinese: "左归饮",
    name_english: "Restore the Left Kidney Drink",
    category: "Yin-Tonifying Formulas (补阴剂)",
    source: "Jing Yue Quan Shu (1624 CE, Zhang Jingyue)",
    source_chinese: "景岳全书",

    composition: [
      { pinyin: "Shu Di Huang", chinese: "熟地黄", latin: "Radix Rehmanniae Praeparata", dosage: "24g", role: "jun", role_name: "King", function: "Strongly nourishes Kidney Yin and essence" },
      { pinyin: "Shan Yao", chinese: "山药", latin: "Rhizoma Dioscoreae", dosage: "12g", role: "chen", role_name: "Minister", function: "Tonifies Spleen and Kidney, stabilizes essence" },
      { pinyin: "Shan Zhu Yu", chinese: "山茱萸", latin: "Fructus Corni", dosage: "9g", role: "chen", role_name: "Minister", function: "Nourishes Liver and Kidney, astringes essence" },
      { pinyin: "Gou Qi Zi", chinese: "枸杞子", latin: "Fructus Lycii", dosage: "12g", role: "chen", role_name: "Minister", function: "Nourishes Liver and Kidney Yin, brightens eyes" },
      { pinyin: "Fu Ling", chinese: "茯苓", latin: "Poria", dosage: "9g", role: "zuo", role_name: "Assistant", function: "Strengthens Spleen, assists water metabolism" },
      { pinyin: "Zhi Gan Cao", chinese: "炙甘草", latin: "Radix Glycyrrhizae Praeparata", dosage: "3g", role: "shi", role_name: "Envoy", function: "Harmonizes herbs, tonifies Qi" },
    ],

    clinical_picture: {
      summary: "Zhang Jingyue's formula to 'Restore the Left Kidney' — pure Kidney Yin nourishment. In classical theory, Left = Yin (the 'true water'). This is STRONGER Yin nourishment than Liu Wei Di Huang Wan — it replaces the three 'draining' herbs with Gou Qi Zi for stronger tonification. The 'Yin' (饮, drink) form means it's a lighter decoction, easier to digest than the 'Wan' (pill) form. Used when Liu Wei Di Huang Wan is not sufficient or when the patient's digestion is delicate.",
      tongue: "Red, thin, dry. Little or no coating — mirror tongue in severe cases. May have cracks.",
      pulse: "Thin (细) and rapid (数). Weak at both Chi positions. Reflects Yin deficiency with empty heat.",
      key_symptoms: [
        "Night sweats — wakes with damp pillow",
        "5-palm heat (palms, soles, chest feel hot)",
        "Dry mouth and throat, especially at night",
        "Low-grade afternoon fever or tidal fever",
        "Dizziness and tinnitus",
        "Low back soreness — dull ache, not sharp",
        "Insomnia — wakes in early morning hours",
        "Dry eyes, blurry vision",
        "Premature graying, hair loss",
        "Nocturnal emissions or scanty dark urine",
      ],
      constitutional_type: "Yin-deficient type — tends to be thin, dry, warm. They feel hot but it's empty heat, not excess. Often overworked intellectuals, people who stay up late, or those in the second half of life where Yin naturally declines.",
      typical_patient: "A 50-year-old professor who works late every night. He has night sweats that soak his pillow. His palms feel hot. He has a constant dry throat and drinks water all night. His lower back has a dull, deep ache. He has tinnitus — a high-pitched ringing. His vision has been deteriorating. His tongue is red and dry with cracks and almost no coating. He tried Liu Wei Di Huang Wan but found it too heavy on his stomach. This lighter 'Yin' formulation is better suited.",
    },

    actions: [
      "Nourishes Kidney Yin (滋补肾阴)",
      "Fills essence (填精)",
      "Clears deficiency heat (清虚热)",
    ],
    actions_chinese: "滋补肾阴，填精补髓",

    pattern: "Kidney Yin Deficiency (True Yin Depletion)",
    pattern_chinese: "真阴不足证",

    contraindications: [
      "Kidney Yang deficiency with cold signs — cold limbs, pale tongue, slow pulse. Use You Gui Wan instead.",
      "Spleen Yang deficiency with diarrhea — Shu Di and Gou Qi Zi are cloying and worsen dampness",
      "External pathogen present — trap the pathogen inside",
      "Damp-Heat in lower jiao — sweet, cloying herbs feed the dampness",
    ],
    cautions: [
      "Shu Di is very cloying — if digestion is weak, add Sha Ren 3g or use smaller doses initially",
      "This is the 'Yin' (decoction) form — lighter than Zuo Gui Wan (pill form with added Gui Ban, Lu Jiao Jiao, etc.)",
      "Long-term use needed — Yin rebuilding is slow (months)",
    ],

    differentiators: [
      { formula: "Liu Wei Di Huang Wan", difference: "Liu Wei Di Huang Wan uses 3 tonifying + 3 draining herbs (Ze Xie, Mu Dan Pi, Fu Ling) for a balanced approach. Zuo Gui Yin replaces the draining herbs with more tonifying herbs (Gou Qi Zi) for STRONGER nourishment. Use Zuo Gui Yin when Liu Wei is not enough." },
      { formula: "You Gui Wan", difference: "You Gui Wan ('Restore the Right') warms Kidney YANG. Zuo Gui Yin ('Restore the Left') nourishes Kidney YIN. Opposite poles: Cold patient → You Gui. Hot/dry patient → Zuo Gui." },
      { formula: "Zhi Bai Di Huang Wan", difference: "Zhi Bai Di Huang Wan is Liu Wei + Zhi Mu + Huang Bai — it DRAINS deficiency heat actively. Zuo Gui Yin nourishes Yin to naturally clear empty heat. Zhi Bai is more for acute heat signs; Zuo Gui for chronic deep Yin rebuilding." },
    ],

    modifications: [
      { condition: "Severe night sweats", herbs_add: "Mu Li 15g, Fu Xiao Mai 30g" },
      { condition: "Dry eyes / vision problems", herbs_add: "Ju Hua 9g, Nü Zhen Zi 9g" },
      { condition: "Severe tinnitus", herbs_add: "Ci Shi 15g, Shi Chang Pu 6g" },
      { condition: "Insomnia from Yin Xu", herbs_add: "Suan Zao Ren 15g, Bai Zi Ren 9g" },
      { condition: "Stronger Yin nourishment needed", herbs_add: "Gui Ban Jiao 9g, Lu Jiao Jiao 9g (→ approaches Zuo Gui Wan)" },
    ],

    modern_applications: [
      "Menopausal syndrome (Yin Xu type)",
      "Chronic kidney disease (Yin deficiency stage)",
      "Diabetes (Yin Xu type — classical 'Xiao Ke')",
      "Chronic dry eye syndrome",
      "Tinnitus (Kidney Yin type)",
      "Osteoporosis (Kidney Yin type)",
      "Premature ovarian failure",
      "Chronic low-grade fever of unknown origin",
    ],

    dpiRemarks: "Xue type formula. It's a K yin xu mai condition. That's why the focus on the lower part of the body, with dryness weakness and stiffness of the lower part. The heat sensation effecting mainly the feet and the leg or the sexual organs. Zuo gui wan treats prematurely aging at the ovarian causing infertility.",
    treatmentTime: "3-9 months, same time even more. Mid dosage level. Post Zuo gui wan its zuo gui yin.",

    color: "#4682b4",
  },

  // ============================================================
  // 32. LI ZHONG WAN 理中丸
  // ============================================================
  "li-zhong-wan": {
    id: "li-zhong-wan",
    name_pinyin: "Lǐ Zhōng Wán",
    name_chinese: "理中丸",
    name_english: "Regulate the Middle Pill",
    category: "Warming Interior-Cold Formulas (温里剂)",
    source: "Shang Han Lun (c. 220 CE, Zhang Zhongjing)",
    source_chinese: "伤寒论",

    composition: [
      { pinyin: "Gan Jiang", chinese: "干姜", latin: "Rhizoma Zingiberis", dosage: "9g", role: "jun", role_name: "King", function: "Warms the Middle Jiao, dispels cold, restores Spleen Yang" },
      { pinyin: "Ren Shen", chinese: "人参", latin: "Radix Ginseng", dosage: "9g", role: "chen", role_name: "Minister", function: "Tonifies Spleen Qi, generates fluids" },
      { pinyin: "Bai Zhu", chinese: "白术", latin: "Rhizoma Atractylodis Macrocephalae", dosage: "9g", role: "zuo", role_name: "Assistant", function: "Strengthens Spleen, dries Dampness" },
      { pinyin: "Zhi Gan Cao", chinese: "炙甘草", latin: "Radix Glycyrrhizae Praeparata", dosage: "9g", role: "shi", role_name: "Envoy", function: "Warms Middle Jiao, tonifies Qi, harmonizes herbs" },
    ],

    clinical_picture: {
      summary: "The foundational formula for pure cold in the Middle Jiao — Spleen and Stomach Yang deficiency. 'Li Zhong' means 'regulate the middle' — bringing warmth back to the center. The key herb Gan Jiang (dried ginger) is HOT, not just warm — it powerfully dispels cold from the Middle Jiao. This is the Gan Jiang constitution: the patient with a cold, weak center who cannot warm their food, absorb nutrients, or hold fluids. Everything is cold, watery, and underperforming.",
      tongue: "Pale, wet. White slippery coating. May be swollen with tooth marks.",
      pulse: "Deep (沉) and slow (迟). Weak at the right Guan position (Spleen/Stomach).",
      key_symptoms: [
        "Cold sensation in the epigastrium/abdomen — feels cold when you touch it",
        "Diarrhea with undigested food — 'food goes right through me'",
        "Splashing sounds in the stomach (振水音) — water not being transformed",
        "No appetite — aversion to food",
        "Nausea and vomiting of clear fluids",
        "Preference for warm drinks and foods — cold aggravates everything",
        "Fatigue and lethargy",
        "Drooling or excessive clear saliva",
        "Cold limbs (secondary to Middle Jiao cold)",
        "Abdominal pain that improves with warmth and pressure",
      ],
      constitutional_type: "The Gan Jiang constitution (干姜体质) — a patient with constitutional cold in the Middle. They may have been this way their whole life or developed it from chronic cold food/drink consumption, antibiotic overuse, or chronic illness damaging Spleen Yang. They instinctively avoid cold and raw foods.",
      typical_patient: "A 60-year-old woman whose main complaint is chronic diarrhea with undigested food. She says 'my stomach is always cold.' When you place your hand on her abdomen, it feels noticeably cool. She has no appetite and feels nauseous in the morning. You hear splashing sounds when you gently shake her abdomen. She only drinks hot water — cold water immediately causes discomfort. She's tired and pale. Her tongue is pale and wet with a slippery white coating. Her pulse is deep and slow.",
    },

    actions: [
      "Warms the Middle Jiao (温中散寒)",
      "Tonifies Spleen and Stomach Qi (补气健脾)",
      "Dries Dampness (燥湿)",
    ],
    actions_chinese: "温中祛寒，补气健脾",

    pattern: "Spleen and Stomach Yang Deficiency with Internal Cold",
    pattern_chinese: "脾胃虚寒证",

    contraindications: [
      "Any heat pattern — even slight heat signs (yellow coating, red tongue) mean this formula is too warming",
      "Yin deficiency — Gan Jiang is very drying and will damage Yin",
      "External heat invasion — must clear external pathogen first",
      "Diarrhea from Damp-Heat — burning anus, foul smell, yellow coating",
    ],
    cautions: [
      "Gan Jiang is HOT — more warming than Sheng Jiang. Start with standard dose and assess.",
      "If the patient also has Kidney Yang Xu, may need to add Fu Zi (→ Fu Zi Li Zhong Wan)",
      "Ren Shen can be substituted with Dang Shen for milder, long-term use",
    ],

    differentiators: [
      { formula: "Liu Jun Zi Tang", difference: "Liu Jun Zi Tang treats Spleen Qi Xu with PHLEGM-DAMPNESS — the focus is on Phlegm transformation. Li Zhong Wan treats Spleen Yang Xu with COLD — the focus is on warming. Liu Jun Zi Tang is cooler and adds Ban Xia/Chen Pi for Phlegm. Li Zhong Wan uses Gan Jiang for pure warming." },
      { formula: "Bu Zhong Yi Qi Tang", difference: "Bu Zhong Yi Qi Tang LIFTS sunken Qi — for prolapse and sinking. Li Zhong Wan WARMS cold in the Middle. Different directions: one lifts up, the other warms from within." },
      { formula: "Zhen Wu Tang", difference: "Zhen Wu Tang warms KIDNEY Yang and controls WATER — for edema and palpitations. Li Zhong Wan warms the MIDDLE JIAO — for cold abdomen and diarrhea. Different target organs." },
      { formula: "Wu Zhu Yu Tang", difference: "Wu Zhu Yu Tang warms the LIVER channel — vertex headache, vomiting, groin pain. Li Zhong Wan warms the SPLEEN/STOMACH — cold abdomen, diarrhea, poor appetite. Different channels." },
    ],

    modifications: [
      { condition: "Severe cold / Yang collapse", herbs_add: "Fu Zi 6g (pre-cooked) → Fu Zi Li Zhong Wan" },
      { condition: "Vomiting prominent", herbs_add: "Sheng Jiang 9g, Ban Xia 9g" },
      { condition: "Bleeding from cold (pale blood, cold signs)", herbs_add: "Pao Jiang 6g (replaces Gan Jiang), Ai Ye 6g" },
      { condition: "Chronic cold diarrhea", herbs_add: "Rou Dou Kou 6g, Shan Yao 15g" },
    ],

    modern_applications: [
      "Chronic gastritis (cold type)",
      "Functional dyspepsia (cold pattern)",
      "Chronic diarrhea (Yang deficiency type)",
      "Peptic ulcer (cold type — pale tongue, no heat signs)",
      "Gastroptosis",
      "Post-antibiotic digestive dysfunction",
      "Chronic fatigue with cold digestion",
      "Irritable Bowel Syndrome (cold-dominant type)",
    ],

    dpiRemarks: "Qi type formula. Subacute, Chronic conditions. Li zhong wan it's a no liver condition. The shi cold give up pain and diaphragm stiffness that might affect the SubCardiac. The range of syndromes, symptoms that this condition can produce its vast, that's why it's very important to focus on the physical diagnosis TCM. Splashing water is a predominant condition. Most of the cases there will be loss stool with undigested food. In some cases there will be mild constipation, dry stool due to lack of water consumption.",
    treatmentTime: "1-3 month treatment. Acute use high dosage. In most conditions use mid to low dosage. Post li zhong wan, use REN SHEN tree formulas.",

    color: "#cd853f",
  },

  // ============================================================
  // 33. BAO HE WAN 保和丸
  // ============================================================
  "bao-he-wan": {
    id: "bao-he-wan",
    name_pinyin: "Bǎo Hé Wán",
    name_chinese: "保和丸",
    name_english: "Preserve Harmony Pill",
    category: "Food Stagnation Formulas (消食剂)",
    source: "Dan Xi Xin Fa (1481 CE, Zhu Danxi)",
    source_chinese: "丹溪心法",

    composition: [
      { pinyin: "Shan Zha", chinese: "山楂", latin: "Fructus Crataegi", dosage: "15g", role: "jun", role_name: "King", function: "Dissolves food stagnation, especially from MEAT and greasy food" },
      { pinyin: "Shen Qu", chinese: "神曲", latin: "Massa Medicata Fermentata", dosage: "12g", role: "chen", role_name: "Minister", function: "Dissolves food stagnation from grains and alcohol" },
      { pinyin: "Lai Fu Zi", chinese: "莱菔子", latin: "Semen Raphani", dosage: "9g", role: "chen", role_name: "Minister", function: "Dissolves food stagnation, descends Qi, reduces bloating" },
      { pinyin: "Ban Xia", chinese: "半夏", latin: "Rhizoma Pinelliae", dosage: "9g", role: "zuo", role_name: "Assistant", function: "Harmonizes Stomach, descends rebellious Qi, stops nausea" },
      { pinyin: "Chen Pi", chinese: "陈皮", latin: "Pericarpium Citri Reticulatae", dosage: "6g", role: "zuo", role_name: "Assistant", function: "Regulates Qi, dries Dampness, reduces bloating" },
      { pinyin: "Fu Ling", chinese: "茯苓", latin: "Poria", dosage: "9g", role: "zuo", role_name: "Assistant", function: "Strengthens Spleen, leaches Dampness from food stagnation" },
      { pinyin: "Lian Qiao", chinese: "连翘", latin: "Fructus Forsythiae", dosage: "6g", role: "shi", role_name: "Envoy", function: "Clears heat generated by food stagnation — prevents stagnation from transforming into heat" },
    ],

    clinical_picture: {
      summary: "The go-to formula for food stagnation — overeating, holiday meals, food poisoning (mild), or any situation where the Stomach is overwhelmed. The name 'Preserve Harmony' reflects its gentle approach: it dissolves the stagnation without harsh purgation. Each digestive herb targets a different food type: Shan Zha for meat/fat, Shen Qu for grains/alcohol, Lai Fu Zi for starchy/root foods. Lian Qiao cleverly prevents the stagnation from generating heat.",
      tongue: "Thick greasy coating — may be white or yellow depending on whether heat has developed. Tongue body is often normal.",
      pulse: "Slippery (滑) and possibly rapid. Slippery = food/phlegm accumulation.",
      key_symptoms: [
        "Epigastric and abdominal fullness and distension — 'I'm so stuffed'",
        "Foul belching or acid reflux",
        "Nausea or vomiting (of food)",
        "Loss of appetite after overeating",
        "Foul-smelling stools or diarrhea",
        "Abdominal pain that worsens with pressure",
        "Bad breath (halitosis) from food stagnation",
        "Aversion to food — the sight/smell of food causes nausea",
        "Possible low-grade fever from stagnation heat",
      ],
      constitutional_type: "Any constitution can get food stagnation — this is a SITUATIONAL formula, not a constitutional one. However, patients with weak Spleen Qi are more prone to food stagnation from smaller amounts of food.",
      typical_patient: "A man comes in the day after a holiday feast. He ate too much — meat, dumplings, cake, alcohol. He feels terribly bloated, his belching smells foul, and he's nauseous. His abdomen is distended and painful when pressed. He has no appetite at all. His tongue has a thick, greasy yellow coating that wasn't there before. He may have had diarrhea with foul-smelling stools. This is simple food stagnation — the Stomach is overwhelmed and can't process what was put in it.",
    },

    actions: [
      "Dissolves food stagnation (消食化滞)",
      "Harmonizes Stomach (和胃)",
      "Clears heat from stagnation (清热)",
    ],
    actions_chinese: "消食和胃",

    pattern: "Food Stagnation",
    pattern_chinese: "食滞证",

    contraindications: [
      "Spleen Qi deficiency as the primary problem — food stagnation from WEAKNESS needs tonification first, not just dissolution",
      "Empty Stomach conditions — no food stagnation present",
      "Severe food poisoning requiring medical attention",
    ],
    cautions: [
      "Lai Fu Zi is traditionally said to counteract Ren Shen — don't combine with strong Qi-tonifying formulas",
      "Short-term use — once food stagnation resolves, switch to Spleen-tonifying formula if there's underlying weakness",
      "If food stagnation has fully transformed into heat with constipation, may need stronger purgation (like Zhi Shi Dao Zhi Wan)",
    ],

    differentiators: [
      { formula: "Ban Xia Xie Xin Tang", difference: "Ban Xia Xie Xin Tang treats CHRONIC mixed heat-cold in the Middle Jiao — an ongoing Spleen/Stomach disharmony. Bao He Wan treats ACUTE food stagnation from overeating. One is chronic, the other is episodic." },
      { formula: "Liu Jun Zi Tang", difference: "Liu Jun Zi Tang TONIFIES a weak Spleen that generates Phlegm. Bao He Wan DISSOLVES food that's blocking the Stomach. Tonification vs. reduction — opposite strategies for different problems." },
      { formula: "Zhi Shi Dao Zhi Wan", difference: "Zhi Shi Dao Zhi Wan is STRONGER — it adds purgative herbs for food stagnation that has transformed into heat with constipation. Bao He Wan is milder and suitable for most food stagnation without severe constipation." },
    ],

    modifications: [
      { condition: "Constipation from food stagnation", herbs_add: "Da Huang 6g, Zhi Shi 6g" },
      { condition: "Nausea/vomiting prominent", herbs_add: "Sheng Jiang 9g, Zhu Ru 6g" },
      { condition: "Alcohol hangover", herbs_add: "Ge Hua 12g, Zhi Mu 6g" },
      { condition: "With underlying Spleen Qi Xu", herbs_add: "Dang Shen 9g, Bai Zhu 9g (after stagnation resolves)" },
      { condition: "Children's indigestion", herbs_add: "Ji Nei Jin 6g, Mai Ya 9g" },
    ],

    modern_applications: [
      "Acute indigestion / overeating",
      "Functional dyspepsia (food stagnation pattern)",
      "Gastroenteritis (mild, food-related)",
      "Holiday/feast-related GI distress",
      "Pediatric food stagnation",
      "Alcohol-related gastric distress",
      "GERD from overeating",
      "Food intolerance episodes",
    ],

    color: "#e8a838",
  },

  // ============================================================
  // 34. DAO CHI SAN 导赤散
  // ============================================================
  "dao-chi-san": {
    id: "dao-chi-san",
    name_pinyin: "Dǎo Chì Sǎn",
    name_chinese: "导赤散",
    name_english: "Guide Out the Red Powder",
    category: "Heat-Clearing Formulas (清热剂)",
    source: "Xiao Er Yao Zheng Zhi Jue (1119 CE, Qian Yi)",
    source_chinese: "小儿药证直诀",

    composition: [
      { pinyin: "Sheng Di Huang", chinese: "生地黄", latin: "Radix Rehmanniae", dosage: "12g", role: "jun", role_name: "King", function: "Clears Heart heat, cools Blood, nourishes Yin" },
      { pinyin: "Mu Tong", chinese: "木通", latin: "Caulis Akebiae", dosage: "6g", role: "chen", role_name: "Minister", function: "Clears Heart fire, promotes urination — guides heat downward and out" },
      { pinyin: "Dan Zhu Ye", chinese: "淡竹叶", latin: "Herba Lophatheri", dosage: "6g", role: "zuo", role_name: "Assistant", function: "Clears Heart heat, promotes urination, relieves irritability" },
      { pinyin: "Gan Cao Shao", chinese: "甘草梢", latin: "Radix Glycyrrhizae (tip)", dosage: "3g", role: "shi", role_name: "Envoy", function: "Clears heat from the urethra specifically, harmonizes herbs" },
    ],

    clinical_picture: {
      summary: "A pediatrician's formula (Qian Yi specialized in children) for Heart fire transferring to the Small Intestine. In TCM, the Heart and Small Intestine are paired (interior-exterior). When Heart fire is excessive, it can transfer down to the Small Intestine, manifesting as urinary burning/blood. The classic presentation: mouth ulcers (Heart fire going up) + burning urination (Heart fire going down). The formula 'guides out the red' — directing the fire downward through urination.",
      tongue: "Red tip (Heart fire). Thin yellow coating.",
      pulse: "Rapid (数). May be stronger at the left Cun position (Heart).",
      key_symptoms: [
        "Mouth ulcers / oral sores — especially on the tongue tip",
        "Burning urination — painful, scanty, dark yellow",
        "Irritability and restlessness — the mind is agitated",
        "Thirst with desire for cold drinks",
        "Face red, especially the cheeks",
        "Insomnia from Heart fire",
        "Dark scanty urine — may be reddish (hematuria in severe cases)",
        "Sensation of heat in the chest",
        "Children: crying, fussy, red cheeks, doesn't want to eat",
      ],
      constitutional_type: "Often children or young adults with excess-type heat. The Heart fire may be from emotional stress, overwork, spicy food, or simply a constitutional tendency to heat. Not a deficiency pattern — the patient has genuine excess heat.",
      typical_patient: "A 25-year-old university student during exam season. He has painful mouth ulcers on his tongue that make eating difficult. At the same time, he has burning, scanty, dark urination. He's been staying up late studying, drinking coffee, and eating spicy instant noodles. He's irritable and can't focus. His face is flushed. His tongue tip is bright red with several small ulcers. The connection between the mouth ulcers and the urinary symptoms is the hallmark — Heart fire going both up and down.",
    },

    actions: [
      "Clears Heart fire (清心火)",
      "Promotes urination to drain fire downward (利尿导热)",
      "Nourishes Yin (养阴)",
    ],
    actions_chinese: "清心利水养阴",

    pattern: "Heart Fire Transferring to the Small Intestine",
    pattern_chinese: "心经火热移于小肠证",

    contraindications: [
      "Heart Qi or Heart Yang deficiency — pale tongue, weak pulse, palpitations from deficiency. Clearing fire from deficiency is dangerous.",
      "Kidney Yang deficiency with frequent clear urination — this will further cool and drain",
      "Pregnancy — Mu Tong promotes urination and may cause fluid loss",
    ],
    cautions: [
      "IMPORTANT: Use ONLY Chuan Mu Tong (川木通, Caulis Clematidis Armandii) or substitute with Deng Xin Cao. NEVER use Guan Mu Tong (关木通) which contains aristolochic acid and causes kidney damage.",
      "Short-term use — this is a clearing formula, not for long-term use",
      "If Yin deficiency is prominent (dry mouth at night, thin pulse), increase Sheng Di and add Mai Men Dong",
    ],

    differentiators: [
      { formula: "Huang Lian Jie Du Tang", difference: "Huang Lian Jie Du Tang is a broad fire-clearing formula for heat in all three Jiaos. Dao Chi San specifically targets Heart-Small Intestine fire with the characteristic mouth ulcer + urinary symptoms combination." },
      { formula: "Long Dan Xie Gan Tang", difference: "Long Dan Xie Gan Tang drains Liver/Gallbladder fire and Damp-Heat — red eyes, bitter taste, flank pain, genital itching. Dao Chi San drains Heart fire — mouth ulcers, irritability, burning urination. Different organ systems." },
      { formula: "Zhu Ye Shi Gao Tang", difference: "Zhu Ye Shi Gao Tang clears Qi-level heat with Yin deficiency — high fever aftermath. Dao Chi San targets specific Heart fire with urinary symptoms. Different heat levels and presentations." },
    ],

    modifications: [
      { condition: "Severe mouth ulcers", herbs_add: "Huang Lian 3g, Lian Zi Xin 3g" },
      { condition: "Hematuria (blood in urine)", herbs_add: "Bai Mao Gen 15g, Xiao Ji 12g" },
      { condition: "Severe insomnia from Heart fire", herbs_add: "Huang Lian 3g, Zhu Ye 6g" },
      { condition: "With Yin deficiency signs", herbs_add: "Mai Men Dong 9g, increase Sheng Di to 15g" },
    ],

    modern_applications: [
      "Recurrent oral ulcers / aphthous stomatitis",
      "Urinary tract infection (acute, heat pattern)",
      "Interstitial cystitis (heat pattern)",
      "Glossitis (tongue inflammation)",
      "Hematuria (minor, heat-related)",
      "ADHD in children (Heart fire pattern)",
      "Anxiety with oral and urinary symptoms",
    ],

    dpiRemarks: "Qi formula. Subacute or acute condition. The upper jiao symptoms, manic behavior with mania talking like will be dominant. There should be same what UTI as feeling or sore on the tongue. The eyes open wide with over alert look. High dosage will make the stool soft.",
    treatmentTime: "1 to 3 weeks on mid to high dosage. Post Dao Chi San can be 1st yu nu jing or qing wei san. 2nd sha shen mai men dong tang. 2nd mai men dong tang.",

    color: "#dc3545",
  },

  // ============================================================
  // 35. DAN SHEN YIN 丹参饮
  // ============================================================
  "dan-shen-yin": {
    id: "dan-shen-yin",
    name_pinyin: "Dān Shēn Yǐn",
    name_chinese: "丹参饮",
    name_english: "Salvia Drink",
    category: "Blood-Invigorating Formulas (活血剂)",
    source: "Shi Fang Ge Kuo (1801 CE)",
    source_chinese: "时方歌括",

    composition: [
      { pinyin: "Dan Shen", chinese: "丹参", latin: "Radix Salviae Miltiorrhizae", dosage: "30g", role: "jun", role_name: "King", function: "Invigorates Blood, dispels stasis, cools Blood, calms the Shen" },
      { pinyin: "Tan Xiang", chinese: "檀香", latin: "Lignum Santali Albi", dosage: "3g", role: "chen", role_name: "Minister", function: "Moves Qi in the chest, opens the chest, stops pain" },
      { pinyin: "Sha Ren", chinese: "砂仁", latin: "Fructus Amomi", dosage: "3g", role: "zuo", role_name: "Assistant", function: "Moves Qi, transforms Dampness, harmonizes Stomach — prevents Dan Shen from causing nausea" },
    ],

    clinical_picture: {
      summary: "A beautifully simple three-herb formula for Blood stasis combined with Qi stagnation in the chest and epigastric region. Dan Shen is the 'one herb that substitutes for Si Wu Tang' — it simultaneously moves Blood, nourishes Blood, cools Blood, and calms the Shen. Combined with Tan Xiang (which opens the chest) and Sha Ren (which harmonizes the Stomach), this becomes a targeted formula for chest and epigastric pain from Qi-Blood stagnation.",
      tongue: "Dark or purple-dark. May have dark spots. Sublingual veins may be prominent.",
      pulse: "Wiry (弦) and choppy (涩) or wiry and tight.",
      key_symptoms: [
        "Chest pain — stabbing or oppressive",
        "Epigastric pain — fixed location",
        "Pain worse after eating or with emotional stress",
        "Sensation of chest tightness or oppression",
        "Palpitations",
        "Pain worse at night (Blood stasis quality)",
        "Dark or purple lips",
        "Belching or hiccups with pain",
      ],
      constitutional_type: "The patient with chest/epigastric pain from stagnation — may be any body type but has signs of Blood stasis (dark tongue, choppy pulse). Often middle-aged men with cardiovascular risk factors or patients with chronic gastric pain.",
      typical_patient: "A 55-year-old man with chronic chest tightness and epigastric pain. The pain is worse after heavy meals and when he's stressed. He occasionally feels his heart skip a beat. The pain has a fixed quality — always in the same spot. His lips have a purple tinge. He belches frequently. His tongue is dark with visible sublingual veins. Cardiologist found mild coronary changes. His pulse is wiry and choppy.",
    },

    actions: [
      "Invigorates Blood and dispels stasis (活血祛瘀)",
      "Moves Qi and opens the chest (行气宽胸)",
      "Stops pain (止痛)",
    ],
    actions_chinese: "活血祛瘀，行气止痛",

    pattern: "Blood Stasis with Qi Stagnation in the Chest and Epigastrium",
    pattern_chinese: "气滞血瘀，胸胃疼痛证",

    contraindications: [
      "Pregnancy — Blood-moving herbs",
      "Active bleeding — GI bleed, hemorrhage",
      "Qi and Blood deficiency without stasis — must tonify first",
      "Patients on anticoagulants — Dan Shen has significant blood-thinning properties",
    ],
    cautions: [
      "Dan Shen has documented drug interactions with warfarin — increases anticoagulant effect. Screen for medications.",
      "Sha Ren should be added LAST when decocting (后下) — loses aroma and function with prolonged boiling",
      "For more severe Blood stasis, this formula may need to be combined with Xue Fu Zhu Yu Tang",
    ],

    differentiators: [
      { formula: "Xue Fu Zhu Yu Tang", difference: "Xue Fu Zhu Yu Tang is a complex, powerful Blood stasis formula for chronic chest/head stasis — headaches, insomnia, dark complexion. Dan Shen Yin is simpler and milder — better for epigastric/chest pain where you want gentle Blood movement without strong purging." },
      { formula: "Gua Lou Xie Bai Ban Xia Tang", difference: "Gua Lou Xie Bai Ban Xia Tang treats PHLEGM obstruction in the chest — chest Bi syndrome with white greasy coating. Dan Shen Yin treats BLOOD STASIS in the chest — dark tongue, choppy pulse. Phlegm vs. Blood stasis." },
      { formula: "Shi Xiao San", difference: "Shi Xiao San (Wu Ling Zhi + Pu Huang) is a stronger Blood-stasis pain formula. Dan Shen Yin is milder with added Qi-moving herbs for a more balanced approach." },
    ],

    modifications: [
      { condition: "Angina-like chest pain", herbs_add: "Gua Lou Pi 12g, Xie Bai 9g" },
      { condition: "Severe Blood stasis", herbs_add: "Tao Ren 9g, Hong Hua 6g" },
      { condition: "Epigastric pain with acid reflux", herbs_add: "Hai Piao Xiao 12g, Wa Leng Zi 12g" },
      { condition: "With palpitations and anxiety", herbs_add: "Suan Zao Ren 12g, Yuan Zhi 6g" },
    ],

    modern_applications: [
      "Angina pectoris (adjunct treatment)",
      "Chronic gastritis (Blood stasis pattern)",
      "Peptic ulcer pain (stasis type)",
      "Coronary artery disease (Blood stasis pattern, adjunct)",
      "Functional chest pain",
      "Esophageal spasm",
      "Chronic epigastric pain syndrome",
    ],

    dpiRemarks: "Xue formula. Xue yu at the ST and PC, effecting the chest with pain. The chest pain is dominant, what we called cardiac condition. Since its vasovagal condition it will affect the epigastric region with pain. In some cases there is mai pain disorders: CTS, TF. Shoulder pain, then 1st use huo luo xian ling dan. Chronic condition. Low to mid dosage formula. Overuse or high dosage will make the patient chills and exhausted.",
    treatmentTime: "Chronic condition. Use low to mid dosage formula. Overuse or high dosage will make the patient chills and exhausted.",

    color: "#c41e3a",
  },

  // ============================================================
  // 36. TIAN WANG BU XIN DAN 天王补心丹
  // ============================================================
  "tian-wang-bu-xin-dan": {
    id: "tian-wang-bu-xin-dan",
    name_pinyin: "Tiān Wáng Bǔ Xīn Dān",
    name_chinese: "天王补心丹",
    name_english: "Emperor of Heaven's Special Pill to Tonify the Heart",
    category: "Spirit-Calming Formulas (安神剂)",
    source: "She Sheng Mi Pou (1638 CE)",
    source_chinese: "摄生秘剖",

    composition: [
      { pinyin: "Sheng Di Huang", chinese: "生地黄", latin: "Radix Rehmanniae", dosage: "12g", role: "jun", role_name: "King", function: "Nourishes Kidney Yin, clears Heart heat — addresses the root Yin deficiency" },
      { pinyin: "Xuan Shen", chinese: "玄参", latin: "Radix Scrophulariae", dosage: "9g", role: "chen", role_name: "Minister", function: "Nourishes Yin, clears deficiency heat" },
      { pinyin: "Mai Men Dong", chinese: "麦门冬", latin: "Radix Ophiopogonis", dosage: "9g", role: "chen", role_name: "Minister", function: "Nourishes Heart and Lung Yin, clears Heart heat" },
      { pinyin: "Tian Men Dong", chinese: "天门冬", latin: "Radix Asparagi", dosage: "9g", role: "chen", role_name: "Minister", function: "Nourishes Kidney Yin, clears deficiency heat from Lungs" },
      { pinyin: "Dan Shen", chinese: "丹参", latin: "Radix Salviae Miltiorrhizae", dosage: "9g", role: "zuo", role_name: "Assistant", function: "Invigorates Blood, calms Heart, prevents stasis from Yin deficiency" },
      { pinyin: "Dang Gui", chinese: "当归", latin: "Radix Angelicae Sinensis", dosage: "9g", role: "zuo", role_name: "Assistant", function: "Nourishes Heart Blood" },
      { pinyin: "Ren Shen", chinese: "人参", latin: "Radix Ginseng", dosage: "6g", role: "zuo", role_name: "Assistant", function: "Tonifies Heart Qi — Qi generates Blood and holds the Shen" },
      { pinyin: "Fu Ling", chinese: "茯苓", latin: "Poria", dosage: "9g", role: "zuo", role_name: "Assistant", function: "Calms Shen, strengthens Spleen" },
      { pinyin: "Suan Zao Ren", chinese: "酸枣仁", latin: "Semen Ziziphi Spinosae", dosage: "12g", role: "zuo", role_name: "Assistant", function: "Nourishes Heart Blood, calms Shen, treats insomnia" },
      { pinyin: "Bai Zi Ren", chinese: "柏子仁", latin: "Semen Platycladi", dosage: "9g", role: "zuo", role_name: "Assistant", function: "Nourishes Heart Blood, calms Shen, moistens Intestines" },
      { pinyin: "Yuan Zhi", chinese: "远志", latin: "Radix Polygalae", dosage: "6g", role: "zuo", role_name: "Assistant", function: "Calms Shen, opens Heart orifices, improves communication between Heart and Kidney" },
      { pinyin: "Wu Wei Zi", chinese: "五味子", latin: "Fructus Schisandrae", dosage: "6g", role: "zuo", role_name: "Assistant", function: "Astringes Heart Qi, generates fluids, calms Shen" },
      { pinyin: "Jie Geng", chinese: "桔梗", latin: "Radix Platycodonis", dosage: "6g", role: "shi", role_name: "Envoy", function: "Opens the chest, directs herbs upward to the Heart" },
      { pinyin: "Zhu Sha", chinese: "朱砂", latin: "Cinnabaris", dosage: "1g (coating)", role: "shi", role_name: "Envoy", function: "Heavily settles the Shen — traditionally used as pill coating" },
    ],

    clinical_picture: {
      summary: "The master formula for Heart and Kidney Yin deficiency with Shen disturbance — insomnia, palpitations, and anxiety from the Heart-Kidney axis failing to communicate. When Kidney Yin (water) is deficient, it cannot control Heart fire (fire), resulting in empty heat rising and disturbing the Shen. This formula simultaneously nourishes Kidney Yin (the root), clears Heart heat (the branch), nourishes Heart Blood, and calms the Shen. It's one of the most comprehensive Shen-calming formulas in TCM.",
      tongue: "Red, especially the tip. Thin or no coating. May be dry with cracks.",
      pulse: "Thin (细) and rapid (数). Weak at the Chi positions (Kidney Yin Xu).",
      key_symptoms: [
        "Insomnia — difficulty falling asleep AND staying asleep",
        "Palpitations — especially at night",
        "Anxiety — a pervasive sense of unease",
        "Poor memory and concentration — 'can't remember where I put things'",
        "Dream-disturbed sleep with vivid, exhausting dreams",
        "Dry mouth and throat, especially at night",
        "Night sweats",
        "5-palm heat (palms, soles, chest)",
        "Low-grade fever in the afternoon",
        "Constipation from Yin dryness",
        "Mouth ulcers (Heart fire going up)",
      ],
      constitutional_type: "The overworked intellectual type — the person who 'burns the candle at both ends.' They work late, think too much, worry constantly, and have depleted both their Kidney Yin and Heart Blood. Often thin, dry, and with signs of premature aging.",
      typical_patient: "A 48-year-old lawyer who hasn't slept properly in months. She lies in bed with her mind racing — planning, worrying, replaying conversations. When she finally falls asleep, she wakes at 2-3 AM feeling hot, with her pillow damp from sweat. She has palpitations — feels her heart fluttering, which makes her more anxious. She forgets things constantly — walks into a room and can't remember why. Her mouth is dry at night. Her hands and feet feel hot. She looks tired but wired — dark circles under her eyes but an alert, anxious expression. Her tongue tip is red and the body is dry with cracks.",
    },

    actions: [
      "Nourishes Yin and clears heat (滋阴清热)",
      "Nourishes Blood and calms the Shen (养血安神)",
      "Tonifies Heart and Kidney (补心肾)",
    ],
    actions_chinese: "滋阴清热，养血安神",

    pattern: "Heart and Kidney Yin Deficiency with Shen Disturbance",
    pattern_chinese: "心肾阴虚，虚火扰神证",

    contraindications: [
      "Spleen Yang deficiency with diarrhea and cold — too many cold, cloying herbs",
      "Phlegm-Dampness obstruction — thick greasy coating. The rich Yin-nourishing herbs will worsen dampness.",
      "Excess fire pattern — this treats DEFICIENCY heat, not excess fire",
    ],
    cautions: [
      "Zhu Sha (cinnabar) contains MERCURY — in modern practice, either OMIT it or use only as a very thin pill coating in minimal amounts. Many practitioners substitute Long Gu + Mu Li for heavy settling.",
      "Very rich and cloying formula — if digestion is weak, reduce Sheng Di or add Chen Pi",
      "Long-term use formula — Heart-Kidney Yin rebuilding takes months",
    ],

    differentiators: [
      { formula: "Gui Pi Tang", difference: "Gui Pi Tang nourishes Heart and Spleen for insomnia with poor appetite, fatigue, and worry. Tian Wang Bu Xin Dan nourishes Heart and KIDNEY for insomnia with heat signs — night sweats, dry mouth, palpitations. Check for heat vs. cold and which organ system is more affected." },
      { formula: "Suan Zao Ren Tang", difference: "Suan Zao Ren Tang treats insomnia from Liver Blood deficiency — the patient is tired but can't sleep, irritable, no heat signs. Tian Wang Bu Xin Dan treats insomnia from Heart-Kidney Yin deficiency — the patient has HEAT signs (night sweats, dry mouth, hot palms)." },
      { formula: "Gan Mai Da Zao Tang", difference: "Gan Mai Da Zao Tang treats emotional DYSREGULATION (crying, hysteria) from Heart-Spleen deficiency — simpler presentation. Tian Wang Bu Xin Dan treats a more complex Heart-Kidney Yin deficiency with heat signs, memory problems, and deep insomnia." },
      { formula: "Liu Wei Di Huang Wan", difference: "Liu Wei Di Huang Wan nourishes Kidney Yin generally. Tian Wang Bu Xin Dan specifically targets the Heart-Kidney axis — adding Heart Blood nourishment and Shen-calming herbs. If insomnia and palpitations are prominent, use Tian Wang Bu Xin Dan." },
    ],

    modifications: [
      { condition: "Severe insomnia", herbs_add: "Long Gu 15g, Mu Li 15g (replaces Zhu Sha)" },
      { condition: "Severe night sweats", herbs_add: "Mu Li 15g, Fu Xiao Mai 30g" },
      { condition: "Constipation from dryness", herbs_add: "Huo Ma Ren 12g" },
      { condition: "Palpitations with anxiety", herbs_add: "Long Chi 15g, Hu Po 1.5g" },
      { condition: "Poor memory / cognitive decline", herbs_add: "Shi Chang Pu 6g, Yi Zhi Ren 9g" },
    ],

    modern_applications: [
      "Chronic insomnia (Yin deficiency type)",
      "Anxiety disorder (deficiency heat type)",
      "Menopausal insomnia and palpitations",
      "Neurasthenia",
      "Mild cognitive impairment (Yin deficiency pattern)",
      "Hyperthyroidism (mild, Yin Xu pattern)",
      "Chronic fatigue with insomnia",
      "Functional cardiac arrhythmia (Yin deficiency type)",
    ],

    dpiRemarks: "Xue type formula. Chronic that can be used as a classic TCM shao yin xu condition when the H is more dominant then the K, hens the insomnia. There are almost no K symptoms at this formula, and for that reason we can use it for short term condition of insomnia for any fever xu cases just before sleeping time.",
    treatmentTime: "3 months to 1 year mid to low dosage level. Post tian wang bu xin dan: yang xin tang. IF there is still fever and dominant shao yin, use liu wei di huang wan based formulas. IF the fever broke down change to gui pi tang, gui pi tang it's a post yang xin tang formula.",

    color: "#6a0dad",
  },

  // ============================================================
  // 37. HEI XIAO YAO WAN 黑逍遥丸
  // ============================================================
  "hei-xiao-yao-wan": {
    id: "hei-xiao-yao-wan",
    name_pinyin: "Hēi Xiāo Yáo Wán",
    name_chinese: "黑逍遥丸",
    name_english: "Black Free and Easy Wanderer Pill",
    category: "Harmonizing Formulas (和解剂)",
    source: "Clinical modification of Xiao Yao San",
    source_chinese: "逍遥散加味（临床化裁）",

    composition: [
      { pinyin: "Chai Hu", chinese: "柴胡", latin: "Radix Bupleuri", dosage: "9g", role: "jun", role_name: "King", function: "Spreads Liver Qi, relieves constraint" },
      { pinyin: "Dang Gui", chinese: "当归", latin: "Radix Angelicae Sinensis", dosage: "9g", role: "chen", role_name: "Minister", function: "Nourishes Blood, harmonizes Liver" },
      { pinyin: "Bai Shao", chinese: "白芍", latin: "Radix Paeoniae Alba", dosage: "12g", role: "chen", role_name: "Minister", function: "Nourishes Liver Blood, softens Liver" },
      { pinyin: "Shu Di Huang", chinese: "熟地黄", latin: "Radix Rehmanniae Praeparata", dosage: "12g", role: "chen", role_name: "Minister", function: "Strongly nourishes Blood and Yin — the 'black' addition that makes this version" },
      { pinyin: "Bai Zhu", chinese: "白术", latin: "Rhizoma Atractylodis Macrocephalae", dosage: "9g", role: "zuo", role_name: "Assistant", function: "Strengthens Spleen, dries Dampness" },
      { pinyin: "Fu Ling", chinese: "茯苓", latin: "Poria", dosage: "12g", role: "zuo", role_name: "Assistant", function: "Strengthens Spleen, leaches Dampness" },
      { pinyin: "Sheng Jiang", chinese: "生姜", latin: "Rhizoma Zingiberis Recens", dosage: "3 slices", role: "zuo", role_name: "Assistant", function: "Warms Middle Jiao, aids digestion of Shu Di" },
      { pinyin: "Bo He", chinese: "薄荷", latin: "Herba Menthae", dosage: "3g", role: "shi", role_name: "Envoy", function: "Assists Chai Hu in spreading Liver Qi" },
      { pinyin: "Zhi Gan Cao", chinese: "炙甘草", latin: "Radix Glycyrrhizae Praeparata", dosage: "3g", role: "shi", role_name: "Envoy", function: "Harmonizes all herbs" },
    ],

    clinical_picture: {
      summary: "The STRONGEST Blood-nourishing version of the Xiao Yao San family. 'Hei' (black) refers to the addition of Shu Di Huang, which is dark/black in color. While Xiao Yao San has moderate Blood nourishment (Dang Gui + Bai Shao), and Jia Wei Xiao Yao Wan adds heat-clearing, Hei Xiao Yao Wan adds DEEP Blood nourishment with Shu Di Huang. This is for the patient who has classic Liver Qi Stagnation + Spleen deficiency BUT with SEVERE Blood deficiency as the dominant feature.",
      tongue: "Pale, may be thin and dry. Thin white coating. The paleness is more pronounced than standard Xiao Yao San.",
      pulse: "Wiry (弦) and thin (细). Both Guan and Chi positions are weak. The wiry quality is less prominent than the thinness.",
      key_symptoms: [
        "All standard Xiao Yao San symptoms PLUS severe Blood deficiency signs",
        "Very pale or sallow complexion — looks 'bloodless'",
        "Dizziness and lightheadedness — especially on standing",
        "Scanty, light-colored menstruation or amenorrhea",
        "Dry skin, brittle nails, hair loss",
        "Blurry vision, dry eyes",
        "Fatigue that is deep — not just tired but DEPLETED",
        "Muscle cramps and tension (Blood not nourishing sinews)",
        "Palpitations from Heart Blood deficiency",
      ],
      constitutional_type: "The deeply Blood-deficient Chai Hu type — Xiao Yao San patients who have been sick for a long time, or postpartum/post-surgical patients who developed Liver Qi Stagnation on top of Blood deficiency. The Blood deficiency is the DOMINANT feature.",
      typical_patient: "A 40-year-old woman who had heavy menstrual bleeding for months before getting treated. She now has the classic Xiao Yao San picture — stress-related digestive issues, mood swings, PMS — but she's also deeply pale, dizzy when standing, her hair is falling out, and her periods have become scanty and light. Standard Xiao Yao San wasn't enough because the Blood deficiency is too severe. She needs the added Shu Di Huang to deeply nourish the Blood foundation.",
    },

    actions: [
      "Spreads Liver Qi (疏肝解郁)",
      "Strongly nourishes Blood (大补血)",
      "Strengthens Spleen (健脾)",
      "Harmonizes Liver and Spleen (调和肝脾)",
    ],
    actions_chinese: "疏肝解郁，大补阴血，健脾和营",

    pattern: "Liver Qi Stagnation with Spleen Deficiency and SEVERE Blood Deficiency",
    pattern_chinese: "肝郁脾虚血虚证（血虚为重）",

    contraindications: [
      "Liver Qi Stagnation with HEAT signs — use Jia Wei Xiao Yao Wan instead. Shu Di is warming and cloying.",
      "Spleen Dampness with thick greasy coating — Shu Di will worsen dampness significantly",
      "Excess patterns without deficiency — too tonifying",
    ],
    cautions: [
      "Shu Di is very cloying — monitor for bloating, loose stools, or loss of appetite. May need Sha Ren 3g to aid digestion.",
      "If the patient has both Blood Xu AND heat signs, consider combining strategies rather than choosing between Hei and Jia Wei versions",
      "Long-term use is common — Blood rebuilding takes time",
    ],

    differentiators: [
      { formula: "Xiao Yao San", difference: "Standard Xiao Yao San has moderate Blood nourishment. Hei Xiao Yao Wan adds Shu Di Huang for STRONG Blood nourishment. Use Hei when Blood deficiency is the DOMINANT feature — very pale face, amenorrhea, thin pulse." },
      { formula: "Jia Wei Xiao Yao Wan", difference: "Jia Wei adds Mu Dan Pi + Zhi Zi for HEAT. Hei adds Shu Di for BLOOD. The choice depends on whether the patient runs HOT (→ Jia Wei) or is deeply BLOOD DEFICIENT (→ Hei). They address opposite presentations." },
      { formula: "Ba Zhen Tang", difference: "Ba Zhen Tang tonifies Qi + Blood equally without Liver-Qi-moving herbs. Hei Xiao Yao Wan still MOVES Liver Qi while nourishing Blood. Use Ba Zhen when there's no Liver Qi Stagnation; use Hei Xiao Yao when there is." },
    ],

    modifications: [
      { condition: "Amenorrhea", herbs_add: "Ji Xue Teng 15g, Yi Mu Cao 12g" },
      { condition: "Severe dizziness from Blood Xu", herbs_add: "E Jiao 9g (dissolved), Gou Qi Zi 12g" },
      { condition: "Insomnia from Blood Xu", herbs_add: "Suan Zao Ren 15g, Long Yan Rou 9g" },
      { condition: "Digestive difficulty from Shu Di", herbs_add: "Sha Ren 3g, Chen Pi 6g" },
    ],

    modern_applications: [
      "Iron-deficiency anemia with stress symptoms",
      "Postpartum depression with Blood deficiency",
      "Amenorrhea from Blood deficiency + stress",
      "Chronic fatigue with Liver Qi Stagnation and anemia",
      "Fibromyalgia (Blood deficiency dominant pattern)",
      "Post-surgical recovery with emotional stress",
      "Menopausal syndrome with severe Blood Xu",
    ],

    color: "#3c1518",
  },

  // ============================================================
  // 38. CHAI SHAO LIU JUN ZI TANG 柴芍六君子汤
  // ============================================================
  "chai-shao-liu-jun-zi-tang": {
    id: "chai-shao-liu-jun-zi-tang",
    name_pinyin: "Chái Sháo Liù Jūn Zǐ Tāng",
    name_chinese: "柴芍六君子汤",
    name_english: "Bupleurum and Peony Six Gentlemen Decoction",
    category: "Harmonizing Formulas (和解剂)",
    source: "Clinical formula (经验方)",
    source_chinese: "临床经验方",

    composition: [
      { pinyin: "Chai Hu", chinese: "柴胡", latin: "Radix Bupleuri", dosage: "6g", role: "jun", role_name: "King", function: "Spreads Liver Qi — used at LOW dose to gently soothe without dispersing" },
      { pinyin: "Bai Shao", chinese: "白芍", latin: "Radix Paeoniae Alba", dosage: "12g", role: "jun", role_name: "King", function: "Softens Liver, stops the Liver from overacting on Spleen" },
      { pinyin: "Ren Shen", chinese: "人参", latin: "Radix Ginseng", dosage: "9g", role: "chen", role_name: "Minister", function: "Strongly tonifies Spleen Qi" },
      { pinyin: "Bai Zhu", chinese: "白术", latin: "Rhizoma Atractylodis Macrocephalae", dosage: "12g", role: "chen", role_name: "Minister", function: "Strengthens Spleen, dries Dampness" },
      { pinyin: "Fu Ling", chinese: "茯苓", latin: "Poria", dosage: "12g", role: "chen", role_name: "Minister", function: "Strengthens Spleen, leaches Dampness" },
      { pinyin: "Zhi Gan Cao", chinese: "炙甘草", latin: "Radix Glycyrrhizae Praeparata", dosage: "3g", role: "zuo", role_name: "Assistant", function: "Tonifies Qi, harmonizes herbs" },
      { pinyin: "Chen Pi", chinese: "陈皮", latin: "Pericarpium Citri Reticulatae", dosage: "6g", role: "zuo", role_name: "Assistant", function: "Regulates Qi, dries Dampness" },
      { pinyin: "Ban Xia", chinese: "半夏", latin: "Rhizoma Pinelliae", dosage: "9g", role: "zuo", role_name: "Assistant", function: "Dries Dampness, transforms Phlegm, harmonizes Stomach" },
    ],

    clinical_picture: {
      summary: "Liu Jun Zi Tang (Six Gentlemen) + Chai Hu + Bai Shao = looking at the Liver-Spleen axis from the SPLEEN side. Where Xiao Yao San approaches Liver-Spleen disharmony from the LIVER (move Qi first, support Spleen second), Chai Shao Liu Jun Zi Tang approaches from the SPLEEN (tonify Spleen first, soothe Liver second). The Chai Hu dose is intentionally LOW (6g vs. 9-12g in Xiao Yao San) — just enough to gently soothe the Liver without dispersing the weak Spleen Qi.",
      tongue: "Pale, swollen with tooth marks. White greasy coating. The emphasis is on SPLEEN deficiency signs.",
      pulse: "Slippery (滑) and weak (弱). May have slight wiry quality on the left but the overall impression is WEAK, not tense.",
      key_symptoms: [
        "Chronic poor appetite and indigestion — this is the PRIMARY complaint",
        "Bloating after eating, even small amounts",
        "Loose stools or diarrhea with fatigue",
        "Phlegm or mucus accumulation",
        "Weight gain despite poor appetite",
        "Mild emotional stress symptoms — but LESS prominent than in Xiao Yao San",
        "Nausea, especially in the morning",
        "Fatigue is DOMINANT — not the mood swings of Xiao Yao San",
        "Hypochondriac discomfort (mild — Liver component)",
      ],
      constitutional_type: "Spleen-deficient type who ALSO has some Liver Qi involvement — but the Spleen weakness dominates the picture. They are more bloated, phlegmy, and tired than they are moody or emotionally volatile. The Liver component is secondary.",
      typical_patient: "A 50-year-old woman whose main complaint is 'I can't digest anything.' She bloats after every meal, has chronic loose stools, and has gained weight despite eating very little. She's tired all the time. When you ask about stress, she admits to some work tension and mild irritability — but these are NOT her main complaints. Her tongue is swollen with tooth marks and has a greasy white coating. Her pulse is slippery and weak. This is fundamentally a SPLEEN problem with a secondary Liver component — the opposite emphasis from Xiao Yao San.",
    },

    actions: [
      "Tonifies Spleen Qi (益气健脾)",
      "Transforms Phlegm-Dampness (化痰燥湿)",
      "Gently soothes Liver Qi (疏肝柔肝)",
      "Harmonizes Liver and Spleen (调和肝脾)",
    ],
    actions_chinese: "健脾化痰，疏肝柔肝",

    pattern: "Spleen Qi Deficiency with Phlegm-Dampness and Secondary Liver Qi Stagnation",
    pattern_chinese: "脾虚痰湿兼肝郁证",

    contraindications: [
      "Liver Qi Stagnation as the PRIMARY problem — use Xiao Yao San or Chai Hu Shu Gan Wan instead",
      "Yin deficiency — the drying herbs (Ban Xia, Chen Pi, Bai Zhu) will worsen dryness",
      "Heat pattern — this formula is neutral-to-warm and unsuitable for heat",
    ],
    cautions: [
      "Chai Hu dose should stay LOW (6g) — higher doses will disperse the Spleen Qi that you're trying to tonify",
      "If Phlegm is very thick, may need to add stronger Phlegm-resolving herbs",
      "Long-term formula — Spleen rebuilding takes time",
    ],

    differentiators: [
      { formula: "Xiao Yao San", difference: "THE KEY COMPARISON: Xiao Yao San approaches from the LIVER — Liver Qi Stagnation is primary, Spleen weakness is secondary. Chai Shao Liu Jun Zi Tang approaches from the SPLEEN — Spleen Qi deficiency with Phlegm is primary, Liver involvement is secondary. Ask: what is the MAIN complaint? Mood/stress → Xiao Yao San. Digestion/bloating/phlegm → Chai Shao Liu Jun Zi Tang." },
      { formula: "Liu Jun Zi Tang", difference: "Liu Jun Zi Tang is pure Spleen Qi tonification with Phlegm resolution — no Liver component at all. Chai Shao Liu Jun Zi Tang adds Chai Hu + Bai Shao to address the mild Liver Qi Stagnation component. If there's ANY Liver involvement (even mild), the Chai Shao addition helps." },
      { formula: "Tong Xie Yao Fang", difference: "Tong Xie Yao Fang targets specifically the PAINFUL DIARRHEA from Liver overacting on Spleen. Chai Shao Liu Jun Zi Tang is broader — addressing the chronic Spleen-deficiency-with-Phlegm picture. One is for acute episodes, the other is for the underlying constitution." },
    ],

    modifications: [
      { condition: "Severe bloating and gas", herbs_add: "Mu Xiang 6g, Sha Ren 3g" },
      { condition: "IBS with diarrhea", herbs_add: "Fang Feng 6g (→ combined with Tong Xie Yao Fang)" },
      { condition: "Acid reflux", herbs_add: "Zuo Jin Wan (Huang Lian 3g, Wu Zhu Yu 1g)" },
      { condition: "Water retention", herbs_add: "Ze Xie 9g, Yi Yi Ren 15g" },
      { condition: "Stress component increasing", herbs_add: "Increase Chai Hu to 9g, add Xiang Fu 9g" },
    ],

    modern_applications: [
      "Irritable Bowel Syndrome (Spleen-dominant type)",
      "Chronic gastritis (Spleen Xu with mild Liver involvement)",
      "Functional dyspepsia (Spleen-deficiency dominant)",
      "GERD (Spleen Xu with Phlegm type)",
      "Metabolic syndrome (Spleen-Phlegm pattern with stress)",
      "Chronic fatigue with digestive weakness",
      "SIBO-like presentation (Spleen Qi deficiency pattern)",
    ],

    dpiRemarks: "Qi formula. Ren shen tree formula. Chai shao liu jun zi tang it's a well known condition or shao yang and or LV mai when the use of xiao yao wan for LV mai or the use of xiao chai hu tang for shao yang are overwhelming and produce SP qi xu. When using Chai shao liu jun zi tang its like looking on the shao yang or LV mai from the SP area.",
    treatmentTime: "2-6 months use. Mid to low dosage formula. Post Chai shao liu jun zi tang can be liu jun zi tang and then si jun zi tang.",

    color: "#8fbc8f",
  },

  // ============================================================
  // LING GUI ZHU GAN TANG 苓桂术甘汤
  // ============================================================
  "ling-gui-zhu-gan-tang": {
    id: "ling-gui-zhu-gan-tang",
    name_pinyin: "Líng Guì Zhú Gān Tāng",
    name_chinese: "苓桂术甘汤",
    name_english: "Ginseng and Ginger Combination",
    category: "Formulas that Warm and Transform Phlegm-Dampness",
    source: "Shang Han Lun (Zhang Zhongjing)",

    composition: [
      { pinyin: "Fu Ling", chinese: "茯苓", latin: "Poria", dosage: "12g", role: "jun", role_name: "King", function: "Strengthens Spleen, leaches Dampness, promotes urination" },
      { pinyin: "Gui Zhi", chinese: "桂枝", latin: "Ramulus Cinnamomi", dosage: "9g", role: "chen", role_name: "Minister", function: "Warms Yang, transforms thin mucus, promotes Qi circulation" },
      { pinyin: "Bai Zhu", chinese: "白术", latin: "Rhizoma Atractylodis Macrocephalae", dosage: "6g", role: "zuo", role_name: "Assistant", function: "Strengthens Spleen, dries Dampness" },
      { pinyin: "Zhi Gan Cao", chinese: "炙甘草", latin: "Radix Glycyrrhizae Praeparata", dosage: "6g", role: "shi", role_name: "Envoy", function: "Harmonizes all herbs, tonifies Qi" },
    ],

    clinical_picture: {
      summary: "Fluid type formula for Spleen Yang deficiency with thin mucus accumulation. Subacute to chronic condition, often age-related, due to SP yang xu with mild Kidney xu. May have splashing water sound or CV9 water accumulation. If severe SP yang xu, more fluid accumulation causing cardio conditions with tinnitus, dizziness, and other neck symptoms. Treat the Spleen and it will affect the cardiovascular system.",
      tongue: "Pale, swollen, teeth marks, white coating",
      pulse: "Deep, weak",
      key_symptoms: [
        "Weakness and shortness of breath with palpitations",
        "Nausea and vomiting",
        "GIT weakness",
        "Loose stool",
        "Edema with cold feet",
        "Difficulty urinating",
        "Splashing water sound in abdomen",
      ],
    },

    actions: [
      "Tonifies Spleen Yang",
      "Warms and transforms thin mucus",
      "Eliminates dampness",
      "Treats edema",
    ],

    pattern: "Spleen Yang Deficiency with Thin Mucus Accumulation",

    modifications: [
      { condition: "Fatigue", herbs_add: "Dang Shen" },
      { condition: "Fatigue with hypotension", herbs_add: "Zhen Wu Tang" },
      { condition: "Accumulation of damp", herbs_add: "Ping Wei San" },
      { condition: "Leg edema", herbs_add: "Fang Ji Huang Qi Tang" },
      { condition: "Cardiac failure / CHD", herbs_add: "Sheng Mai San" },
    ],

    differentiators: [
      { formula: "Gan Cao Gan Jiang Fu Ling Bai Zhu Tang", difference: "Ling Gui Zhu Gan Tang = SP yang xu with edema, CHD, GIT weakness. Gan Cao Gan Jiang Fu Ling Bai Zhu Tang = SP yang xu with rebellious qi (ST)/vomiting, nausea." },
    ],

    dpiRemarks: "Fluid type formula. Subacute, chronic, due to SP yang xu with mild K xu. Age related. Night have Splashing water or CV9 water accumulation. If severe SP yang xu more accumulation causing more cardio condition with tinnitus dizziness and other neck symptoms. Treat the SP it will affect the cardio.",
    treatmentTime: "4 months to 2 years, mid to low dosage",

    modern_applications: [
      "Chronic heart disease (CHD)",
      "Edema",
      "Chronic gastritis",
      "Vertigo and dizziness",
      "Palpitations",
      "Chronic bronchitis with thin sputum",
    ],

    color: "#5f9ea0",
  },

  // ============================================================
  // MU LI SAN 牡蛎散
  // ============================================================
  "mu-li-san": {
    id: "mu-li-san",
    name_pinyin: "Mǔ Lì Sǎn",
    name_chinese: "牡蛎散",
    name_english: "Oyster Shell Powder",
    category: "Formulas that Stabilize and Bind",
    source: "Tai Ping Hui Min He Ji Ju Fang",

    composition: [
      { pinyin: "Mu Li", chinese: "牡蛎", latin: "Concha Ostreae", dosage: "20g", role: "jun", role_name: "King", function: "Astringes sweating, calms spirit, anchors Yang" },
      { pinyin: "Huang Qi", chinese: "黄芪", latin: "Radix Astragali", dosage: "20g", role: "chen", role_name: "Minister", function: "Tonifies Wei Qi, consolidates exterior" },
      { pinyin: "Ma Huang Gen", chinese: "麻黄根", latin: "Radix Ephedrae", dosage: "20g", role: "zuo", role_name: "Assistant", function: "Stops sweating" },
      { pinyin: "Fu Xiao Mai", chinese: "浮小麦", latin: "Fructus Tritici Levis", dosage: "20g", role: "zuo", role_name: "Assistant", function: "Inhibits sweating, nourishes Heart" },
    ],

    clinical_picture: {
      summary: "A formula for excessive sweating due to weakness. The patient has a deficient constitution with poor Wei Qi, leading to spontaneous sweating or night sweats. Often presents with palpitations and shortness of breath due to the loss of fluids and Qi through sweating.",
      tongue: "Pale or red",
      pulse: "Thin",
      key_symptoms: [
        "Excessive sweating especially in weakness",
        "Palpitations",
        "Shortness of breath",
        "Low immune defense",
      ],
    },

    actions: [
      "Tonifies Wei Qi",
      "Treats hyper-sweating due to weakness",
      "Consolidates the exterior",
    ],

    pattern: "Wei Qi Deficiency with Excessive Sweating",

    modifications: [
      { condition: "Enhance effect", herbs_add: "Wu Wei Zi" },
    ],

    differentiators: [
      { formula: "Yu Ping Feng San", difference: "Mu Li San = weakness with sweating, palpitation from static to moving. Yu Ping Feng San = weakness with mild sweating, weak immune system, NOT LUNG." },
    ],

    modern_applications: [
      "Spontaneous sweating",
      "Night sweats",
      "Autonomic nervous dysfunction",
      "Postpartum sweating",
      "Immune deficiency",
    ],

    color: "#7b68ee",
  },

  // ============================================================
  // QING WEI SAN 清胃散
  // ============================================================
  "qing-wei-san": {
    id: "qing-wei-san",
    name_pinyin: "Qīng Wèi Sǎn",
    name_chinese: "清胃散",
    name_english: "Coptis and Rehmannia Formula",
    category: "Formulas that Clear Heat",
    source: "Pi Wei Lun (Li Dong-Yuan)",

    composition: [
      { pinyin: "Huang Lian", chinese: "黄连", latin: "Rhizoma Coptidis", dosage: "6g", role: "jun", role_name: "King", function: "Clears Stomach fire, resolves toxicity" },
      { pinyin: "Sheng Di", chinese: "生地", latin: "Radix Rehmanniae", dosage: "12g", role: "chen", role_name: "Minister", function: "Cools blood, nourishes Yin" },
      { pinyin: "Mu Dan Pi", chinese: "牡丹皮", latin: "Cortex Moutan", dosage: "12g", role: "chen", role_name: "Minister", function: "Cools blood, clears heat" },
      { pinyin: "Dang Gui", chinese: "当归", latin: "Radix Angelicae Sinensis", dosage: "12g", role: "zuo", role_name: "Assistant", function: "Nourishes blood, harmonizes" },
      { pinyin: "Sheng Ma", chinese: "升麻", latin: "Rhizoma Cimicifugae", dosage: "15g", role: "shi", role_name: "Envoy", function: "Clears heat from Yang Ming, guides herbs upward to gums and teeth" },
    ],

    clinical_picture: {
      summary: "An excess Yang Ming fire pattern affecting the mouth, gums, and face. The Stomach fire blazes upward causing inflammation of the gums, mouth ulcers, and facial redness. This is an excess condition requiring clearing of heat and cooling of blood.",
      tongue: "Red, dry",
      pulse: "Rapid, flooding",
      key_symptoms: [
        "Inflammation of gums",
        "Ulcer of mouth",
        "Dry/cracked lips",
        "Hunger for raw food/meat",
        "Red face",
        "Nose bleeding",
        "Dry mouth and tongue",
        "Thirst",
      ],
    },

    actions: [
      "Clears Stomach Yang Ming heat/fire",
      "Cools blood",
      "Nourishes Yin",
    ],

    pattern: "Stomach Fire / Yang Ming Fire with Blood Heat",

    modifications: [],

    differentiators: [
      { formula: "Ju Pi Zhu Ru Tang", difference: "Qing Wei San = Excess condition / Yang Ming fire, cools blood nourish Yin, epigastrium, gums, teeth, lips. Ju Pi Zhu Ru Tang = Weak condition with rebellious ST qi and heat, clear heat tonify SP, hiccups vomiting." },
    ],

    modern_applications: [
      "Gingivitis",
      "Stomatitis and oral ulcers",
      "Periodontitis",
      "Epistaxis (nosebleed)",
      "Trigeminal neuralgia (heat type)",
    ],

    color: "#dc143c",
  },

  // ============================================================
  // QING QI HUA TAN WAN 清气化痰丸
  // ============================================================
  "qing-qi-hua-tan-wan": {
    id: "qing-qi-hua-tan-wan",
    name_pinyin: "Qīng Qì Huà Tán Wán",
    name_chinese: "清气化痰丸",
    name_english: "Clear the Qi and Transform Phlegm Pill",
    category: "Formulas that Clear Heat and Transform Phlegm",
    source: "Yi Fang Kao (Wu Kun)",

    composition: [
      { pinyin: "Dan Nan Xing", chinese: "胆南星", latin: "Arisaema cum Bile", dosage: "9g", role: "jun", role_name: "King", function: "Clears heat, transforms phlegm" },
      { pinyin: "Huang Qin", chinese: "黄芩", latin: "Radix Scutellariae", dosage: "9g", role: "chen", role_name: "Minister", function: "Clears heat from Lungs" },
      { pinyin: "Gua Lou Ren", chinese: "瓜蒌仁", latin: "Semen Trichosanthis", dosage: "9g", role: "chen", role_name: "Minister", function: "Clears heat, transforms phlegm, moistens Lungs" },
      { pinyin: "Ban Xia", chinese: "半夏", latin: "Rhizoma Pinelliae", dosage: "9g", role: "zuo", role_name: "Assistant", function: "Dries dampness, transforms phlegm, descends rebellious Qi" },
      { pinyin: "Zhi Shi", chinese: "枳实", latin: "Fructus Aurantii Immaturus", dosage: "6g", role: "zuo", role_name: "Assistant", function: "Breaks Qi stagnation, directs Qi downward" },
      { pinyin: "Chen Pi", chinese: "陈皮", latin: "Pericarpium Citri Reticulatae", dosage: "6g", role: "zuo", role_name: "Assistant", function: "Regulates Qi, dries dampness" },
      { pinyin: "Xing Ren", chinese: "杏仁", latin: "Semen Armeniacae", dosage: "9g", role: "zuo", role_name: "Assistant", function: "Descends Lung Qi, stops coughing" },
      { pinyin: "Fu Ling", chinese: "茯苓", latin: "Poria", dosage: "9g", role: "shi", role_name: "Envoy", function: "Strengthens Spleen, resolves dampness" },
    ],

    clinical_picture: {
      summary: "A disease formula for cough with thick yellow phlegm that is hard to expectorate, due to heat-phlegm accumulation in the Lungs. The chest and upper epigastric region feel stiff and congested. Sometimes accompanied by nausea.",
      tongue: "Red, sticky yellow coating",
      pulse: "Rapid, slippery",
      key_symptoms: [
        "Cough with thick yellow phlegm hard to expectorate",
        "Stiffness of chest and upper-epigastric region",
        "Sometimes nausea",
      ],
    },

    actions: [
      "Clears heat",
      "Transforms phlegm",
      "Directs rebellious Qi downward",
      "Stops coughing",
    ],

    pattern: "Heat-Phlegm Accumulation in the Lungs",

    modifications: [],
    differentiators: [],

    modern_applications: [
      "Acute bronchitis with yellow sputum",
      "Pneumonia (phlegm-heat type)",
      "COPD exacerbation with heat-phlegm",
    ],

    color: "#daa520",
  },

  // ============================================================
  // QIN JIN HUA TAN WAN 芩金化痰丸
  // ============================================================
  "qin-jin-hua-tan-wan": {
    id: "qin-jin-hua-tan-wan",
    name_pinyin: "Qín Jīn Huà Tán Wán",
    name_chinese: "芩金化痰丸",
    name_english: "Clear the Qi and Transform Phlegm Pill (Lung variant)",
    category: "Formulas that Clear Heat and Transform Phlegm",
    source: "Yi Xue Tong Zhi",

    composition: [
      { pinyin: "Huang Qin", chinese: "黄芩", latin: "Radix Scutellariae", dosage: "12g", role: "jun", role_name: "King", function: "Clears Lung fire" },
      { pinyin: "Zhi Zi", chinese: "栀子", latin: "Fructus Gardeniae", dosage: "12g", role: "jun", role_name: "King", function: "Clears heat, drains fire" },
      { pinyin: "Zhi Mu", chinese: "知母", latin: "Rhizoma Anemarrhenae", dosage: "15g", role: "chen", role_name: "Minister", function: "Clears heat, nourishes Yin, moistens dryness" },
      { pinyin: "Gua Lou Ren", chinese: "瓜蒌仁", latin: "Semen Trichosanthis", dosage: "15g", role: "chen", role_name: "Minister", function: "Clears heat, transforms phlegm" },
      { pinyin: "Zhi Bei Mu", chinese: "制贝母", latin: "Bulbus Fritillariae", dosage: "10g", role: "chen", role_name: "Minister", function: "Clears heat, transforms phlegm, moistens Lung" },
      { pinyin: "Mai Men Dong", chinese: "麦门冬", latin: "Radix Ophiopogonis", dosage: "15g", role: "zuo", role_name: "Assistant", function: "Nourishes Yin, moistens Lung" },
      { pinyin: "Chen Pi", chinese: "陈皮", latin: "Pericarpium Citri Reticulatae", dosage: "10g", role: "zuo", role_name: "Assistant", function: "Regulates Qi, dries dampness" },
      { pinyin: "Fu Ling", chinese: "茯苓", latin: "Poria", dosage: "10g", role: "zuo", role_name: "Assistant", function: "Strengthens Spleen, resolves dampness" },
      { pinyin: "Jie Geng", chinese: "桔梗", latin: "Radix Platycodonis", dosage: "10g", role: "zuo", role_name: "Assistant", function: "Opens and raises Lung Qi, expels phlegm" },
      { pinyin: "Sang Bai Pi", chinese: "桑白皮", latin: "Cortex Mori", dosage: "12g", role: "zuo", role_name: "Assistant", function: "Drains Lung heat, stops coughing" },
      { pinyin: "Gan Cao", chinese: "甘草", latin: "Radix Glycyrrhizae", dosage: "6g", role: "shi", role_name: "Envoy", function: "Harmonizes all herbs" },
    ],

    clinical_picture: {
      summary: "A disease formula for Lung fire with dryness and phlegm. Clears Lung fire, moistens dryness, and transforms phlegm. The condition presents with a cough producing yellow or dark sputum that is hard to expectorate, with chest pain and fullness.",
      tongue: "Yellow coating",
      pulse: "Rapid, slippery",
      key_symptoms: [
        "Cough with yellow or dark sputum hard to expectorate",
        "Asthma",
        "Chest pain",
        "Epigastric and chest fullness",
      ],
    },

    actions: [
      "Clears Lung fire",
      "Moistens dryness",
      "Transforms phlegm",
    ],

    pattern: "Lung Fire with Dryness and Phlegm",

    modifications: [],
    differentiators: [],

    modern_applications: [
      "Bronchitis with yellow sputum",
      "Asthma (heat-phlegm type)",
      "Lung abscess",
      "COPD with heat-phlegm pattern",
    ],

    color: "#cd853f",
  },

  // ============================================================
  // RUN CHANG TANG 润肠汤
  // ============================================================
  "run-chang-tang": {
    id: "run-chang-tang",
    name_pinyin: "Rùn Cháng Tāng",
    name_chinese: "润肠汤",
    name_english: "Linum & Rhubarb Combination",
    category: "Formulas that Moisten the Intestines and Unblock the Bowels",
    source: "Traditional",

    composition: [
      { pinyin: "Dang Gui", chinese: "当归", latin: "Radix Angelicae Sinensis", dosage: "10g", role: "jun", role_name: "King", function: "Nourishes blood, moistens intestines" },
      { pinyin: "Sheng Di", chinese: "生地", latin: "Radix Rehmanniae", dosage: "10g", role: "chen", role_name: "Minister", function: "Cools blood, generates fluids" },
      { pinyin: "Tao Ren", chinese: "桃仁", latin: "Semen Persicae", dosage: "10g", role: "chen", role_name: "Minister", function: "Moistens intestines, promotes bowel movement" },
      { pinyin: "Ma Zi Ren", chinese: "麻子仁", latin: "Fructus Cannabis", dosage: "15g", role: "zuo", role_name: "Assistant", function: "Moistens intestines, promotes bowel movement" },
      { pinyin: "Xing Ren", chinese: "杏仁", latin: "Semen Armeniacae", dosage: "10g", role: "zuo", role_name: "Assistant", function: "Descends Qi, moistens intestines" },
      { pinyin: "Zhi Ke", chinese: "枳壳", latin: "Fructus Aurantii", dosage: "10g", role: "shi", role_name: "Envoy", function: "Moves Qi, promotes bowel movement" },
    ],

    clinical_picture: {
      summary: "A formula for habitual constipation, common in the elderly, or constipation due to blood deficiency and dryness. The intestines lack moisture, leading to dry and hard stools. Often seen in patients with hypertension and dry skin.",
      tongue: "Dry",
      pulse: "Thin",
      key_symptoms: [
        "Habitual constipation, common in elderly",
        "Constipation due to hypertension",
        "Dry skin",
        "Dry stool",
      ],
    },

    actions: [
      "Clears heat",
      "Moistens intestines",
      "Promotes bowel movements",
    ],

    pattern: "Blood Deficiency and Dryness of the Intestines",

    modifications: [],
    differentiators: [],

    modern_applications: [
      "Chronic constipation in elderly",
      "Constipation associated with hypertension",
      "Habitual constipation with dry skin",
    ],

    color: "#8b4513",
  },

  // ============================================================
  // SAN HUANG XIE XIN TANG 三黄泻心汤
  // ============================================================
  "san-huang-xie-xin-tang": {
    id: "san-huang-xie-xin-tang",
    name_pinyin: "Sān Huáng Xiè Xīn Tāng",
    name_chinese: "三黄泻心汤",
    name_english: "Three Yellow Decoctions to Drain the Epigastrium",
    category: "Formulas that Clear Heat and Resolve Toxicity",
    source: "Jin Gui Yao Lue (Zhang Zhongjing)",

    composition: [
      { pinyin: "Da Huang", chinese: "大黄", latin: "Radix et Rhizoma Rhei", dosage: "6g", role: "jun", role_name: "King", function: "Purges fire, drains heat, cools blood" },
      { pinyin: "Huang Lian", chinese: "黄连", latin: "Rhizoma Coptidis", dosage: "3g", role: "chen", role_name: "Minister", function: "Clears Heart and Stomach fire, resolves toxicity" },
      { pinyin: "Huang Qin", chinese: "黄芩", latin: "Radix Scutellariae", dosage: "3g", role: "chen", role_name: "Minister", function: "Clears upper Jiao heat, drains fire" },
    ],

    clinical_picture: {
      summary: "A powerful purging formula for excess Shi fire in the Yang Ming. Bleeding due to excess fire with irritability, nosebleeding or bloody vomiting. Jaundice and fever from damp-heat accumulation with fullness in chest and epigastrium. Flushed-up fire causing painful eyes and mouth ulcers.",
      tongue: "Red with yellow coating",
      pulse: "Strong",
      key_symptoms: [
        "Bleeding due to Shi fire with irritability",
        "Nose bleeding or bloody vomiting",
        "Jaundice with fever",
        "Accumulation of damp heat with fullness in chest and epigastrium",
        "Flushed-up fire",
        "Painful eyes",
        "Mouth ulcers",
      ],
    },

    actions: [
      "Purges fire",
      "Eliminates toxicity and dampness",
      "Yang Ming pattern clearing",
    ],

    pattern: "Excess Shi Fire / Yang Ming Fire with Damp-Heat",

    modifications: [
      { condition: "Severe constipation", herbs_add: "Mang Xiao, Zhi Shi, Hou Po. Or use Xiao Cheng Qi Tang" },
      { condition: "Bleeding due to heat", herbs_add: "Mu Dan Pi, Sheng Di" },
      { condition: "Skin abscesses and sores", herbs_add: "Jin Yin Hua, Lian Qiao, Zi Hua Di Ding. Or use Wu Wei Xiao Du Yin" },
    ],

    differentiators: [],

    modern_applications: [
      "Upper GI bleeding (excess heat type)",
      "Epistaxis",
      "Hematemesis",
      "Acute jaundice (damp-heat type)",
      "Acute conjunctivitis",
      "Oral ulcers (excess heat type)",
    ],

    color: "#b22222",
  },

  // ============================================================
  // SHAO FU ZHU YU TANG 少腹逐瘀汤
  // ============================================================
  "shao-fu-zhu-yu-tang": {
    id: "shao-fu-zhu-yu-tang",
    name_pinyin: "Shǎo Fù Zhú Yū Tāng",
    name_chinese: "少腹逐瘀汤",
    name_english: "Cnidium & Bulrush Combination",
    category: "Formulas that Invigorate Blood and Dispel Stasis",
    source: "Yi Lin Gai Cuo (Wang Qing-Ren)",

    composition: [
      { pinyin: "Dang Gui", chinese: "当归", latin: "Radix Angelicae Sinensis", dosage: "10g", role: "jun", role_name: "King", function: "Nourishes and invigorates blood" },
      { pinyin: "Chuan Xiong", chinese: "川芎", latin: "Rhizoma Chuanxiong", dosage: "6g", role: "chen", role_name: "Minister", function: "Invigorates blood, moves Qi, alleviates pain" },
      { pinyin: "Chi Shao", chinese: "赤芍", latin: "Radix Paeoniae Rubra", dosage: "10g", role: "chen", role_name: "Minister", function: "Invigorates blood, dispels stasis, clears heat" },
      { pinyin: "Hui Xiang", chinese: "茴香", latin: "Fructus Foeniculi", dosage: "6g", role: "zuo", role_name: "Assistant", function: "Warms meridians, alleviates pain" },
      { pinyin: "Yan Hu Suo", chinese: "延胡索", latin: "Rhizoma Corydalis", dosage: "6g", role: "zuo", role_name: "Assistant", function: "Invigorates blood, moves Qi, alleviates pain" },
      { pinyin: "Wu Ling Zhi", chinese: "五灵脂", latin: "Faeces Trogopterori", dosage: "6g", role: "zuo", role_name: "Assistant", function: "Dispels blood stasis, alleviates pain" },
      { pinyin: "Mo Yao", chinese: "没药", latin: "Myrrha", dosage: "6g", role: "zuo", role_name: "Assistant", function: "Invigorates blood, alleviates pain" },
      { pinyin: "Rou Gui", chinese: "肉桂", latin: "Cortex Cinnamomi", dosage: "6g", role: "zuo", role_name: "Assistant", function: "Warms the meridians, disperses cold" },
      { pinyin: "Gan Jiang", chinese: "干姜", latin: "Rhizoma Zingiberis", dosage: "3-6g", role: "zuo", role_name: "Assistant", function: "Warms the middle, disperses cold" },
      { pinyin: "Pu Huang", chinese: "蒲黄", latin: "Pollen Typhae", dosage: "10g", role: "shi", role_name: "Envoy", function: "Invigorates blood, stops bleeding" },
    ],

    clinical_picture: {
      summary: "A warming formula that dispels blood stagnation from the lower abdomen. Particularly effective for gynecological conditions involving cold and blood stasis in the lower Jiao. The lower abdomen is painful and may have palpable masses.",
      tongue: "Purple or dark",
      pulse: "Wiry, choppy",
      key_symptoms: [
        "Dysmenorrhea",
        "Amenorrhea",
        "Irregular menstruation",
        "Abdominal pain/cramps",
        "PMS",
        "Infertility",
        "Abdominal mass",
        "Uterine/ovary cysts or tumors",
      ],
    },

    actions: [
      "Warms the meridians",
      "Alleviates abdominal pain",
      "Dispels blood stagnation from lower abdomen",
    ],

    pattern: "Blood Stasis with Cold in the Lower Abdomen",

    modifications: [
      { condition: "Infertility due to absence of ovulation", herbs_add: "Shan Yao, Zi He Che" },
      { condition: "Menstrual pain", herbs_add: "Mu Xiang, Bai Shao" },
      { condition: "Uterine myoma", herbs_add: "Chuan Lian Zi, San Leng, E Zhu" },
    ],

    differentiators: [],

    modern_applications: [
      "Dysmenorrhea",
      "Endometriosis",
      "Uterine fibroids",
      "Ovarian cysts",
      "Infertility (cold-stasis type)",
      "Pelvic inflammatory disease (cold type)",
    ],

    color: "#8b0000",
  },

  // ============================================================
  // SHEN MI TANG 神秘汤
  // ============================================================
  "shen-mi-tang": {
    id: "shen-mi-tang",
    name_pinyin: "Shén Mì Tāng",
    name_chinese: "神秘汤",
    name_english: "Ma Huang and Magnolia Combination / Mysterious Decoction",
    category: "Formulas that Release the Exterior and Transform Phlegm",
    source: "Traditional",

    composition: [
      { pinyin: "Ma Huang", chinese: "麻黄", latin: "Herba Ephedrae", dosage: "6g", role: "jun", role_name: "King", function: "Opens Lung Qi, relieves wheezing" },
      { pinyin: "Xing Ren", chinese: "杏仁", latin: "Semen Armeniacae", dosage: "6g", role: "chen", role_name: "Minister", function: "Descends Lung Qi, stops coughing" },
      { pinyin: "Chen Pi", chinese: "陈皮", latin: "Pericarpium Citri Reticulatae", dosage: "3g", role: "zuo", role_name: "Assistant", function: "Regulates Qi, dries dampness" },
      { pinyin: "Hou Po", chinese: "厚朴", latin: "Cortex Magnoliae Officinalis", dosage: "6g", role: "zuo", role_name: "Assistant", function: "Moves Qi, reduces distension, calms wheezing" },
      { pinyin: "Zi Su Ye", chinese: "紫苏叶", latin: "Folium Perillae", dosage: "3g", role: "zuo", role_name: "Assistant", function: "Releases exterior, moves Qi" },
      { pinyin: "Chai Hu", chinese: "柴胡", latin: "Radix Bupleuri", dosage: "3g", role: "zuo", role_name: "Assistant", function: "Spreads Liver Qi, harmonizes" },
      { pinyin: "Zhi Gan Cao", chinese: "炙甘草", latin: "Radix Glycyrrhizae Praeparata", dosage: "3g", role: "shi", role_name: "Envoy", function: "Harmonizes all herbs" },
    ],

    clinical_picture: {
      summary: "A formula for asthma (especially in children) with cough. It redirects rebellious Qi downward, clears the Lungs, and eliminates phlegm. Also addresses abdominal weakness that may accompany respiratory conditions.",
      tongue: "Normal",
      pulse: "Floating, tight, or floating wiry",
      key_symptoms: [
        "Asthma (especially in children) with cough",
        "Bronchial asthma",
        "COPD",
        "Abdominal weakness",
      ],
    },

    actions: [
      "Redirects rebellious Qi downward",
      "Clears the Lungs",
      "Eliminates phlegm",
    ],

    pattern: "Lung Qi Rebellion with Phlegm",

    modifications: [],
    differentiators: [],

    modern_applications: [
      "Childhood asthma",
      "Bronchial asthma",
      "COPD",
      "Chronic cough with wheezing",
    ],

    color: "#4682b4",
  },

  // ============================================================
  // SHENG MAI SAN 生脉散
  // ============================================================
  "sheng-mai-san": {
    id: "sheng-mai-san",
    name_pinyin: "Shēng Mài Sǎn",
    name_chinese: "生脉散",
    name_english: "Ginseng and Ophiopogon Formula",
    category: "Formulas that Tonify Qi and Yin",
    source: "Nei Wai Shang Bian Huo Lun (Li Dong-Yuan)",

    composition: [
      { pinyin: "Ren Shen", chinese: "人参", latin: "Radix Ginseng", dosage: "9g", role: "jun", role_name: "King", function: "Tonifies Qi, generates fluids" },
      { pinyin: "Mai Men Dong", chinese: "麦门冬", latin: "Radix Ophiopogonis", dosage: "9g", role: "chen", role_name: "Minister", function: "Nourishes Yin, moistens Lung, clears Heart" },
      { pinyin: "Wu Wei Zi", chinese: "五味子", latin: "Fructus Schisandrae", dosage: "6g", role: "zuo", role_name: "Assistant", function: "Astringes Lung Qi, stops sweating, generates fluids" },
    ],

    clinical_picture: {
      summary: "A formula to augment Qi, generate fluids, stop excessive sweating, and preserve Yin. The patient presents with both Qi and Yin deficiency, often with sweating, thirst, and fatigue. The three herbs work synergistically: Ren Shen tonifies, Mai Men Dong nourishes, and Wu Wei Zi astringes.",
      tongue: "Pale or red, teeth marks",
      pulse: "Weak, slightly rapid",
      key_symptoms: [
        "Sweating during day and night",
        "Thirst and dry mouth",
        "Palpitations",
        "Weakness and fatigue",
        "Chronic cough with sparse sputum difficult to expectorate",
        "Shortness of breath",
      ],
    },

    actions: [
      "Augments Qi",
      "Generates fluids",
      "Stops excessive sweating",
      "Preserves Yin",
    ],

    pattern: "Qi and Yin Deficiency",

    modifications: [
      { condition: "Insomnia", herbs_add: "Suan Zao Ren, He Huan Pi" },
      { condition: "Palpitation and insomnia", herbs_add: "Gui Zhi, Long Gu, Mu Li" },
      { condition: "Qi xu", herbs_add: "Ren Shen (or Xi Yang Shen) + Huang Qi" },
      { condition: "Severe weakness with sweating", herbs_add: "Mu Li San. Or use 1st Mu Li San then Sheng Mai San" },
    ],

    differentiators: [],

    modern_applications: [
      "Chronic heart failure",
      "Coronary heart disease",
      "Arrhythmia",
      "Chronic fatigue syndrome",
      "Heat stroke recovery",
      "Post-illness recovery with sweating",
    ],

    color: "#e6b422",
  },

  // ============================================================
  // SHI QUAN DA BU TANG 十全大补汤
  // ============================================================
  "shi-quan-da-bu-tang": {
    id: "shi-quan-da-bu-tang",
    name_pinyin: "Shí Quán Dà Bǔ Tāng",
    name_chinese: "十全大补汤",
    name_english: "All Inclusive Great Tonifying Decoction",
    category: "Formulas that Tonify Qi and Blood",
    source: "Tai Ping Hui Min He Ji Ju Fang",

    composition: [
      { pinyin: "Huang Qi", chinese: "黄芪", latin: "Radix Astragali", dosage: "10g", role: "jun", role_name: "King", function: "Tonifies Qi, raises Yang" },
      { pinyin: "Rou Gui", chinese: "肉桂", latin: "Cortex Cinnamomi", dosage: "6g", role: "jun", role_name: "King", function: "Warms Yang, disperses cold" },
      { pinyin: "Ren Shen", chinese: "人参", latin: "Radix Ginseng", dosage: "10g", role: "chen", role_name: "Minister", function: "Tonifies Qi, generates fluids" },
      { pinyin: "Shu Di", chinese: "熟地", latin: "Radix Rehmanniae Praeparata", dosage: "10g", role: "chen", role_name: "Minister", function: "Nourishes blood, tonifies Yin" },
      { pinyin: "Bai Zhu", chinese: "白术", latin: "Rhizoma Atractylodis Macrocephalae", dosage: "10g", role: "zuo", role_name: "Assistant", function: "Strengthens Spleen, dries dampness" },
      { pinyin: "Dang Gui", chinese: "当归", latin: "Radix Angelicae Sinensis", dosage: "10g", role: "zuo", role_name: "Assistant", function: "Nourishes and invigorates blood" },
      { pinyin: "Bai Shao", chinese: "白芍", latin: "Radix Paeoniae Alba", dosage: "10g", role: "zuo", role_name: "Assistant", function: "Nourishes blood, softens Liver" },
      { pinyin: "Chuan Xiong", chinese: "川芎", latin: "Rhizoma Chuanxiong", dosage: "10g", role: "zuo", role_name: "Assistant", function: "Invigorates blood, moves Qi" },
      { pinyin: "Fu Ling", chinese: "茯苓", latin: "Poria", dosage: "10g", role: "zuo", role_name: "Assistant", function: "Strengthens Spleen, leaches dampness" },
      { pinyin: "Zhi Gan Cao", chinese: "炙甘草", latin: "Radix Glycyrrhizae Praeparata", dosage: "3g", role: "shi", role_name: "Envoy", function: "Harmonizes all herbs" },
      { pinyin: "Sheng Jiang", chinese: "生姜", latin: "Rhizoma Zingiberis Recens", dosage: "3g", role: "shi", role_name: "Envoy", function: "Warms Middle Jiao" },
      { pinyin: "Da Zao", chinese: "大枣", latin: "Fructus Jujubae", dosage: "3 pieces", role: "shi", role_name: "Envoy", function: "Nourishes Qi and blood" },
    ],

    clinical_picture: {
      summary: "A comprehensive tonifying formula for both Qi and Blood deficiency with Yang xu. It is essentially Ba Zhen Tang with the addition of Huang Qi and Rou Gui to address Yang deficiency. This formula treats the same conditions as Ba Zhen Tang but with more severity at the anemia and weakness due to Yang xu condition. For women, commonly used due to weak constitution and low food quality/quantity.",
      tongue: "Pale, thin body",
      pulse: "Thready and weak",
      key_symptoms: [
        "Weakness with cold extremities",
        "Depression",
        "Weak deficient cough",
        "Palpitations (xu type) with spontaneous sweating",
        "Listlessness and anemia",
        "Dry skin",
        "Dizziness and blurred vision",
        "Headache due to low blood pressure",
        "Weight loss",
        "Weakness of back and legs with pain",
        "GY: Uterine bleeding, irregular menses, light bleeding",
        "Amenorrhea, infertility",
        "Postpartum weakness, no milk to breastfeed",
      ],
    },

    actions: [
      "Replenishes Yang",
      "Warms and tonifies Qi and Blood",
    ],

    pattern: "Qi and Blood Deficiency with Yang Xu",

    modifications: [],

    differentiators: [],

    dpiRemarks: "Xue type formula. Chill type. Yang xu condition. It's a 'ba zhen tang' condition with yang xu, thus treats almost same condition of ba zhen tang, just with more severity at the anemia and weakness due to yang xu condition. For female due to weak type and low food quality/quantity. Can tell progress by looking at GY cycle and bleeding. When administering, advise to eat quality and quantity of food that produce qi & xue. Protein. With hot spices and hot nature.",
    treatmentTime: "2-4 months, mid to low dosage. Post: can be ba zhen tang. According to woman's condition (pregnancy or after giving birth). Recommended nutritional supplements and sports.",

    modern_applications: [
      "Anemia",
      "Chronic fatigue syndrome",
      "Postpartum weakness",
      "Recovery from surgery or chronic illness",
      "Infertility (deficiency type)",
      "Irregular menstruation (deficiency type)",
      "Cancer support therapy",
    ],

    color: "#9b2335",
  },

  // ============================================================
  // SI MO TANG 四磨汤
  // ============================================================
  "si-mo-tang": {
    id: "si-mo-tang",
    name_pinyin: "Sì Mó Tāng",
    name_chinese: "四磨汤",
    name_english: "Four Milled Herb Decoction",
    category: "Formulas that Regulate Qi",
    source: "Ji Sheng Fang",

    composition: [
      { pinyin: "Ren Shen", chinese: "人参", latin: "Radix Ginseng", dosage: "3g", role: "jun", role_name: "King", function: "Tonifies Qi, prevents excessive dispersal" },
      { pinyin: "Bing Lang", chinese: "槟榔", latin: "Semen Arecae", dosage: "10g", role: "chen", role_name: "Minister", function: "Moves Qi downward, reduces stagnation" },
      { pinyin: "Chen Xiang", chinese: "沉香", latin: "Lignum Aquilariae Resinatum", dosage: "3g", role: "zuo", role_name: "Assistant", function: "Warms and moves Qi, directs Qi downward" },
      { pinyin: "Wu Yao", chinese: "乌药", latin: "Radix Linderae", dosage: "6g", role: "zuo", role_name: "Assistant", function: "Moves Qi, disperses cold, alleviates pain" },
    ],

    clinical_picture: {
      summary: "A formula for upper Jiao Qi stagnation clumping in the chest. The patient experiences a stiffness sensation in the chest and diaphragm, with difficulty breathing and wheezing. The Qi is blocked in the upper Jiao, failing to descend properly.",
      tongue: "Normal",
      pulse: "Wiry",
      key_symptoms: [
        "Upper Jiao stagnation clumping in the chest",
        "Stiffness sensation in chest and diaphragm",
        "Hard breathing",
        "Wheezing",
        "Anorexia",
      ],
    },

    actions: [
      "Regulates Qi",
      "Treats rebellious Qi",
      "Expands the chest",
    ],

    pattern: "Qi Stagnation in the Upper Jiao",

    modifications: [
      { condition: "Constipation", herbs_add: "Zhi Shi, Da Huang" },
    ],

    differentiators: [],

    modern_applications: [
      "Functional dyspnea",
      "Chest tightness (non-cardiac)",
      "GERD with chest oppression",
      "Asthma (Qi stagnation type)",
    ],

    color: "#556b2f",
  },

  // ============================================================
  // SHU GAN TANG 舒肝汤
  // ============================================================
  "shu-gan-tang": {
    id: "shu-gan-tang",
    name_pinyin: "Shū Gān Tāng",
    name_chinese: "舒肝汤",
    name_english: "Spread the Liver Decoction",
    category: "Formulas that Regulate Liver Qi and Blood",
    source: "Traditional",

    composition: [
      { pinyin: "Chai Hu", chinese: "柴胡", latin: "Radix Bupleuri", dosage: "5g", role: "jun", role_name: "King", function: "Spreads Liver Qi" },
      { pinyin: "Dang Gui", chinese: "当归", latin: "Radix Angelicae Sinensis", dosage: "5g", role: "chen", role_name: "Minister", function: "Nourishes and invigorates blood" },
      { pinyin: "Chuan Xiong", chinese: "川芎", latin: "Rhizoma Chuanxiong", dosage: "3g", role: "chen", role_name: "Minister", function: "Invigorates blood, moves Qi" },
      { pinyin: "Tao Ren", chinese: "桃仁", latin: "Semen Persicae", dosage: "3g", role: "zuo", role_name: "Assistant", function: "Invigorates blood, dispels stasis" },
      { pinyin: "Hong Hua", chinese: "红花", latin: "Flos Carthami", dosage: "2g", role: "zuo", role_name: "Assistant", function: "Invigorates blood, dispels stasis" },
      { pinyin: "Zhi Shi", chinese: "枳实", latin: "Fructus Aurantii Immaturus", dosage: "2g", role: "zuo", role_name: "Assistant", function: "Breaks Qi stagnation" },
      { pinyin: "Bai Shao", chinese: "白芍", latin: "Radix Paeoniae Alba", dosage: "3g", role: "zuo", role_name: "Assistant", function: "Nourishes blood, softens Liver" },
      { pinyin: "Qing Pi", chinese: "青皮", latin: "Pericarpium Citri Reticulatae Viride", dosage: "3g", role: "zuo", role_name: "Assistant", function: "Moves Liver Qi, breaks stagnation" },
      { pinyin: "Huang Lian", chinese: "黄连", latin: "Rhizoma Coptidis", dosage: "2g", role: "zuo", role_name: "Assistant", function: "Clears heat from Liver and Stomach" },
      { pinyin: "Wu Zhu Yu", chinese: "吴茱萸", latin: "Fructus Evodiae", dosage: "1g", role: "shi", role_name: "Envoy", function: "Warms Liver, redirects Qi downward" },
    ],

    clinical_picture: {
      summary: "A formula for Liver invading Stomach on the Blood level. The patient presents with pain beneath the hypochondria, mainly at the left rectus muscle, associated with stress and anger. This formula addresses both Qi and Blood stagnation in the Liver and Stomach.",
      tongue: "Purple",
      pulse: "Wiry",
      key_symptoms: [
        "Pain beneath hypochondria mainly at left rectus muscle",
        "Stress and anger",
      ],
    },

    actions: [
      "Regulates Liver blood and Qi",
      "Treats pain",
    ],

    pattern: "Liver Qi and Blood Stagnation Invading the Stomach",

    modifications: [],

    differentiators: [
      { formula: "Xue Fu Zhu Yu Tang", difference: "Shu Gan Tang = LV invading ST on Xue level, Chai Hu/Zhi Shi/Dang Gui/Tao Ren/Hong Hua/Chuan Xiong/Bai Shao/Qing Pi/Huang Lian/Wu Zhu Yu. Xue Fu Zhu Yu Tang = Xue Yu at the lower Jiao producing heat and invade the chest, Chai Hu/Zhi Shi/Dang Gui/Tao Ren/Hong Hua/Chuan Xiong/Bai Shao + Sheng Di/Niu Xi/Jie Geng/Gan Cao." },
    ],

    modern_applications: [
      "Chronic gastritis with hypochondriac pain",
      "Peptic ulcer (Liver-Stomach disharmony)",
      "Intercostal neuralgia",
      "Stress-related epigastric pain",
    ],

    color: "#6a5acd",
  },

  // ============================================================
  // TAO HONG SI WU TANG 桃红四物汤
  // ============================================================
  "tao-hong-si-wu-tang": {
    id: "tao-hong-si-wu-tang",
    name_pinyin: "Táo Hóng Sì Wù Tāng",
    name_chinese: "桃红四物汤",
    name_english: "Four Substances Decoction with Safflower and Peach Pit",
    category: "Formulas that Invigorate Blood and Dispel Stasis",
    source: "Yi Zong Jin Jian",

    composition: [
      { pinyin: "Tao Ren", chinese: "桃仁", latin: "Semen Persicae", dosage: "15g", role: "jun", role_name: "King", function: "Invigorates blood, dispels stasis" },
      { pinyin: "Da Huang", chinese: "大黄", latin: "Radix et Rhizoma Rhei", dosage: "12g", role: "chen", role_name: "Minister", function: "Purges heat, invigorates blood, promotes bowel movement" },
      { pinyin: "Gui Zhi", chinese: "桂枝", latin: "Ramulus Cinnamomi", dosage: "10g", role: "chen", role_name: "Minister", function: "Warms meridians, promotes blood circulation" },
      { pinyin: "Mang Xiao", chinese: "芒硝", latin: "Natrii Sulfas", dosage: "10g", role: "zuo", role_name: "Assistant", function: "Softens hardness, purges accumulation" },
      { pinyin: "Zhi Gan Cao", chinese: "炙甘草", latin: "Radix Glycyrrhizae Praeparata", dosage: "6g", role: "shi", role_name: "Envoy", function: "Harmonizes all herbs" },
    ],

    clinical_picture: {
      summary: "A Xue type formula of a dry nature. It is a Si Wu Tang type person with severe xue yu (blood stasis) based on Tao Ren. Menstruation blood is dark and purple, blood is sticky thus painful. Short cycle. May have neck disorders, wind aversion, eye disorders, blurred vision, dizziness, tinnitus.",
      tongue: "Pale",
      pulse: "Thin",
      key_symptoms: [
        "GY: Dysmenorrhea, amenorrhea, irregular menstruation, PMS",
        "Endometriosis, ovarian/uterine cysts or cancer",
        "Infertility",
        "Migraine, headache, trigeminal neuralgia",
        "Chronic liver disease/infection, hepatitis",
        "Coronary heart disease, IHD",
        "Eczema, psoriasis, purpura, alopecia",
        "Dry skin, dark skin pigmentation, skin warts",
      ],
    },

    actions: [
      "Regulates blood",
      "Dissolves blood stasis",
      "Nourishes blood",
    ],

    pattern: "Blood Stasis with Blood Deficiency (Dry Nature)",

    modifications: [],

    differentiators: [
      { formula: "Run Chang Wan", difference: "Tao Hong Si Wu Tang = xue yu with dry stool, sho formula. Run Chang Wan = dry stool chronic constipation, disease formula." },
      { formula: "Xue Fu Zhu Yu Tang", difference: "Tao Hong Si Wu Tang = xue yu with dry stool, sho formula. Xue Fu Zhu Yu Tang = xue yu with LV qi stagnation, can effect mid and upper jiao." },
    ],

    dpiRemarks: "Xue type formula. Of a dry nature. Menstruation blood is dark and purple, blood is sticky thus painful. Short cycle. Neck disorders, wind aversion, eyes disorders, blurred vision, dizziness, tinnitus... It's a si wu tang type person with severe xue yu tao ren based stasis.",
    treatmentTime: "1-6 months mid dosage level. 1st the stool and xue yu, 2nd the irritation. Overuse will cause loss stool/diarrhea, chill, and sleepy feeling. If xue yu also above the abdomen with LV mai use xue fu zhu yu tang.",

    modern_applications: [
      "Dysmenorrhea",
      "Endometriosis",
      "Uterine/ovarian cysts",
      "Infertility (blood stasis type)",
      "Migraine and headache",
      "Chronic hepatitis",
      "Coronary heart disease",
      "Skin disorders (eczema, psoriasis, alopecia)",
    ],

    color: "#c71585",
  },

  // ============================================================
  // WU ZI YAN ZONG WAN 五子衍宗丸
  // ============================================================
  "wu-zi-yan-zong-wan": {
    id: "wu-zi-yan-zong-wan",
    name_pinyin: "Wǔ Zǐ Yǎn Zōng Wán",
    name_chinese: "五子衍宗丸",
    name_english: "Five Ancestors' Tea Pills",
    category: "Formulas that Tonify the Kidneys",
    source: "She Sheng Zhong Miao Fang",

    composition: [
      { pinyin: "Gou Qi Zi", chinese: "枸杞子", latin: "Fructus Lycii", dosage: "10g", role: "jun", role_name: "King", function: "Tonifies Kidney and Liver, nourishes Jing and blood, benefits eyes" },
      { pinyin: "Tu Si Zi", chinese: "菟丝子", latin: "Semen Cuscutae", dosage: "10g", role: "chen", role_name: "Minister", function: "Tonifies Kidney Yang, nourishes Jing" },
      { pinyin: "Che Qian Zi", chinese: "车前子", latin: "Semen Plantaginis", dosage: "10g", role: "zuo", role_name: "Assistant", function: "Promotes urination, benefits eyes" },
      { pinyin: "Wu Wei Zi", chinese: "五味子", latin: "Fructus Schisandrae", dosage: "10g", role: "zuo", role_name: "Assistant", function: "Astringes Kidney Qi, preserves Jing" },
      { pinyin: "Fu Pen Zi", chinese: "覆盆子", latin: "Fructus Rubi", dosage: "10g", role: "zuo", role_name: "Assistant", function: "Tonifies Kidney, astringes Jing, benefits eyes" },
    ],

    clinical_picture: {
      summary: "A formula to tonify Kidney Yang, nourish Jing and blood, and benefit the eyes. Particularly effective for male reproductive and urinary disorders related to Kidney deficiency. Addresses general weakness and lower back pain with sexual dysfunction.",
      tongue: "Red",
      pulse: "Thin",
      key_symptoms: [
        "General weakness",
        "Lower back pain",
        "Sexual dysfunction (impotence, premature ejaculation)",
        "Male infertility, lower sperm count",
        "Weak bladder, frequent urination",
        "Dribbling of urine",
      ],
    },

    actions: [
      "Tonifies Kidney Yang",
      "Nourishes Jing and blood",
      "Benefits eyes",
    ],

    pattern: "Kidney Yang Deficiency with Jing Insufficiency",

    modifications: [
      { condition: "Infertility", herbs_add: "Jin Ying Zi, Sang Shen, Yin Yang Huo" },
    ],

    differentiators: [],

    modern_applications: [
      "Male infertility",
      "Erectile dysfunction",
      "Premature ejaculation",
      "Oligospermia",
      "Benign prostatic hyperplasia",
      "Frequent urination",
      "Lower back pain (Kidney deficiency type)",
    ],

    color: "#2e8b57",
  },

  // ============================================================
  // YI QI CHONG MING TANG 益气聪明汤
  // ============================================================
  "yi-qi-chong-ming-tang": {
    id: "yi-qi-chong-ming-tang",
    name_pinyin: "Yì Qì Cōng Míng Tāng",
    name_chinese: "益气聪明汤",
    name_english: "Eucommia and Rehmannia Formula",
    category: "Formulas that Tonify and Raise Yang Qi",
    source: "Pi Wei Lun (Li Dong-Yuan)",

    composition: [
      { pinyin: "Huang Qi", chinese: "黄芪", latin: "Radix Astragali", dosage: "15g", role: "jun", role_name: "King", function: "Tonifies Qi, raises Yang" },
      { pinyin: "Ren Shen", chinese: "人参", latin: "Radix Ginseng", dosage: "15g", role: "jun", role_name: "King", function: "Tonifies Qi, generates fluids" },
      { pinyin: "Sheng Ma", chinese: "升麻", latin: "Rhizoma Cimicifugae", dosage: "10g", role: "chen", role_name: "Minister", function: "Raises Yang Qi" },
      { pinyin: "Ge Gen", chinese: "葛根", latin: "Radix Puerariae", dosage: "10g", role: "chen", role_name: "Minister", function: "Raises Yang Qi, generates fluids" },
      { pinyin: "Man Jing Zi", chinese: "蔓荆子", latin: "Fructus Viticis", dosage: "5g", role: "zuo", role_name: "Assistant", function: "Clears head and eyes, disperses wind" },
      { pinyin: "Bai Shao", chinese: "白芍", latin: "Radix Paeoniae Alba", dosage: "3g", role: "zuo", role_name: "Assistant", function: "Nourishes blood, softens Liver" },
      { pinyin: "Huang Bai", chinese: "黄柏", latin: "Cortex Phellodendri", dosage: "3g", role: "zuo", role_name: "Assistant", function: "Clears deficient heat" },
      { pinyin: "Gan Cao", chinese: "甘草", latin: "Radix Glycyrrhizae", dosage: "15g", role: "shi", role_name: "Envoy", function: "Harmonizes all herbs, tonifies Qi" },
    ],

    clinical_picture: {
      summary: "A formula to tonify and raise Yang Qi to improve eye and ear function. Based on Li Dong-Yuan's approach of raising clear Yang to the head. The patient has Spleen Qi deficiency with sinking Yang leading to diminished sensory function of the eyes and ears.",
      tongue: "Pale, swollen, teeth marks",
      pulse: "Minute",
      key_symptoms: [
        "Fatigue",
        "Loose stool, chronic diarrhea",
        "Dizziness",
        "Blurred vision, diminution of vision",
        "Tinnitus, hearing loss",
      ],
    },

    actions: [
      "Tonifies and raises Yang Qi",
      "Improves eye and ear function",
    ],

    pattern: "Spleen Qi Deficiency with Sinking Yang Affecting Eyes and Ears",

    modifications: [],

    differentiators: [
      { formula: "Bu Zhong Yi Qi Tang", difference: "Yi Qi Chong Ming Tang = Tonify and raises yang qi and improve eye/ear function, slightly support K and LV. Bu Zhong Yi Qi Tang = Tonify and raises yang qi, support SP, support intestinal aspect of SP." },
    ],

    modern_applications: [
      "Age-related hearing loss",
      "Tinnitus",
      "Age-related vision decline",
      "Chronic fatigue with sensory decline",
      "Vertigo (Qi deficiency type)",
    ],

    color: "#6b8e23",
  },

  // ============================================================
  // FANG JI HUANG QI TANG 防己黄芪汤
  // ============================================================
  "fang-ji-huang-qi-tang": {
    id: "fang-ji-huang-qi-tang",
    name_pinyin: "Fáng Jǐ Huáng Qí Tāng",
    name_chinese: "防己黄芪汤",
    name_english: "Stephania and Astragalus Combination",
    category: "Formulas that Dispel Wind-Dampness",
    source: "Jin Gui Yao Lue (Zhang Zhongjing)",

    composition: [
      { pinyin: "Fang Ji", chinese: "防己", latin: "Radix Stephaniae Tetrandrae", dosage: "12g", role: "jun", role_name: "King", function: "Dispels wind-dampness, promotes urination" },
      { pinyin: "Huang Qi", chinese: "黄芪", latin: "Radix Astragali", dosage: "15g", role: "chen", role_name: "Minister", function: "Tonifies Qi, consolidates exterior" },
      { pinyin: "Bai Zhu", chinese: "白术", latin: "Rhizoma Atractylodis Macrocephalae", dosage: "9g", role: "zuo", role_name: "Assistant", function: "Strengthens Spleen, dries dampness" },
      { pinyin: "Zhi Gan Cao", chinese: "炙甘草", latin: "Radix Glycyrrhizae Praeparata", dosage: "6g", role: "zuo", role_name: "Assistant", function: "Harmonizes all herbs" },
      { pinyin: "Sheng Jiang", chinese: "生姜", latin: "Rhizoma Zingiberis Recens", dosage: "3g", role: "shi", role_name: "Envoy", function: "Warms Middle Jiao" },
      { pinyin: "Da Zao", chinese: "大枣", latin: "Fructus Jujubae", dosage: "4 pieces", role: "shi", role_name: "Envoy", function: "Nourishes Qi, harmonizes" },
    ],

    clinical_picture: {
      summary: "A formula for edema and heaviness due to Qi deficiency with wind-dampness. The patient has a weak constitution with poor fluid metabolism, leading to edema especially in the legs and joint swelling.",
      tongue: "Pale with white coating",
      pulse: "Floating",
      key_symptoms: [
        "Edema",
        "Heaviness in legs",
        "Joint swelling",
      ],
    },

    actions: [
      "Tonifies Qi",
      "Dispels wind-dampness",
      "Promotes urination",
    ],

    pattern: "Qi Deficiency with Wind-Dampness and Edema",

    modifications: [],
    differentiators: [],

    modern_applications: [
      "Edema (Qi deficiency type)",
      "Rheumatoid arthritis",
      "Osteoarthritis with swelling",
      "Obesity with edema",
      "Nephrotic syndrome",
    ],

    color: "#20b2aa",
  },

  // ============================================================
  // GUI ZHI SHAO YAO ZHI MU TANG 桂枝芍药知母汤
  // ============================================================
  "gui-zhi-shao-yao-zhi-mu-tang": {
    id: "gui-zhi-shao-yao-zhi-mu-tang",
    name_pinyin: "Guì Zhī Sháo Yào Zhī Mǔ Tāng",
    name_chinese: "桂枝芍药知母汤",
    name_english: "Cinnamon Twig, Peony, Anemarrhena Decoction",
    category: "Formulas that Dispel Wind-Dampness",
    source: "Jin Gui Yao Lue (Zhang Zhongjing)",

    composition: [
      { pinyin: "Gui Zhi", chinese: "桂枝", latin: "Ramulus Cinnamomi", dosage: "12g", role: "jun", role_name: "King", function: "Warms meridians, dispels wind" },
      { pinyin: "Bai Shao", chinese: "白芍", latin: "Radix Paeoniae Alba", dosage: "9g", role: "chen", role_name: "Minister", function: "Nourishes blood, alleviates pain" },
      { pinyin: "Zhi Mu", chinese: "知母", latin: "Rhizoma Anemarrhenae", dosage: "12g", role: "chen", role_name: "Minister", function: "Clears heat, nourishes Yin" },
      { pinyin: "Ma Huang", chinese: "麻黄", latin: "Herba Ephedrae", dosage: "6g", role: "zuo", role_name: "Assistant", function: "Opens exterior, dispels wind-cold" },
      { pinyin: "Fu Zi", chinese: "附子", latin: "Radix Aconiti Lateralis Praeparata", dosage: "6g", role: "zuo", role_name: "Assistant", function: "Warms Yang, dispels cold, alleviates pain" },
      { pinyin: "Fang Feng", chinese: "防风", latin: "Radix Saposhnikoviae", dosage: "12g", role: "zuo", role_name: "Assistant", function: "Dispels wind, alleviates pain" },
      { pinyin: "Bai Zhu", chinese: "白术", latin: "Rhizoma Atractylodis Macrocephalae", dosage: "15g", role: "zuo", role_name: "Assistant", function: "Strengthens Spleen, dries dampness" },
      { pinyin: "Sheng Jiang", chinese: "生姜", latin: "Rhizoma Zingiberis Recens", dosage: "15g", role: "zuo", role_name: "Assistant", function: "Warms Middle Jiao, disperses cold" },
      { pinyin: "Gan Cao", chinese: "甘草", latin: "Radix Glycyrrhizae", dosage: "6g", role: "shi", role_name: "Envoy", function: "Harmonizes all herbs" },
    ],

    clinical_picture: {
      summary: "A formula for joint Bi syndrome with both wind-cold-dampness and heat. The joints are painful, swollen, and may be hot. This formula simultaneously dispels wind-dampness, clears heat, and warms Yang -- addressing the complex mixed pattern of joint disease.",
      tongue: "Red with thin coating",
      pulse: "Wiry, rapid",
      key_symptoms: [
        "Joint pain with swelling",
        "Heaviness",
        "Heat in the joints",
      ],
    },

    actions: [
      "Dispels wind-dampness",
      "Clears heat",
      "Tonifies",
    ],

    pattern: "Wind-Cold-Dampness Bi Syndrome with Heat",

    modifications: [],
    differentiators: [],

    modern_applications: [
      "Rheumatoid arthritis",
      "Gout",
      "Osteoarthritis with inflammation",
      "Ankylosing spondylitis",
      "Joint pain with swelling and heat",
    ],

    color: "#8a2be2",
  },

  // ============================================================
  // HUANG LIAN JIE DU TANG 黄连解毒汤
  // ============================================================
  "huang-lian-jie-du-tang": {
    id: "huang-lian-jie-du-tang",
    name_pinyin: "Huáng Lián Jiě Dú Tāng",
    name_chinese: "黄连解毒汤",
    name_english: "Coptis Decoction to Clear Toxins",
    category: "Formulas that Clear Heat and Resolve Toxicity",
    source: "Wai Tai Mi Yao",

    composition: [
      { pinyin: "Huang Lian", chinese: "黄连", latin: "Rhizoma Coptidis", dosage: "9g", role: "jun", role_name: "King", function: "Clears Heart and Middle Jiao fire" },
      { pinyin: "Huang Qin", chinese: "黄芩", latin: "Radix Scutellariae", dosage: "6g", role: "chen", role_name: "Minister", function: "Clears Upper Jiao fire" },
      { pinyin: "Huang Bai", chinese: "黄柏", latin: "Cortex Phellodendri", dosage: "6g", role: "zuo", role_name: "Assistant", function: "Clears Lower Jiao fire" },
      { pinyin: "Zhi Zi", chinese: "栀子", latin: "Fructus Gardeniae", dosage: "9g", role: "shi", role_name: "Envoy", function: "Clears heat from all three Jiao, drains fire via urination" },
    ],

    clinical_picture: {
      summary: "A powerful formula to clear fire and resolve toxicity from all three Jiao. Uses three 'yellow' bitter-cold herbs (Huang Lian, Huang Qin, Huang Bai) plus Zhi Zi to systematically clear excess heat and fire toxins throughout the body.",
      tongue: "Red with yellow coating",
      pulse: "Rapid, forceful",
      key_symptoms: [
        "High fever",
        "Irritability",
        "Insomnia",
        "Mouth ulcers",
        "Nosebleed",
      ],
    },

    actions: [
      "Clears fire from all three Jiao",
      "Resolves toxicity",
    ],

    pattern: "Fire Toxin in All Three Jiao",

    modifications: [],
    differentiators: [],

    modern_applications: [
      "Acute infections with high fever",
      "Sepsis (supportive, heat-toxin pattern)",
      "Acute conjunctivitis",
      "Oral ulcers (excess heat type)",
      "Acute hepatitis (heat-toxin type)",
      "Skin infections and abscesses",
    ],

    color: "#ff4500",
  },

  // ============================================================
  // YAO TONG PAIN 腰痛方
  // ============================================================
  "yao-tong-pain-formula": {
    id: "yao-tong-pain-formula",
    name_pinyin: "Yāo Tòng Pain",
    name_chinese: "腰痛方",
    name_english: "Angelica & Eucommia Support Formula",
    category: "Formulas that Tonify Kidney Yang and Regulate Blood",
    source: "Traditional",

    composition: [
      { pinyin: "Du Zhong", chinese: "杜仲", latin: "Cortex Eucommiae", dosage: "20g", role: "jun", role_name: "King", function: "Tonifies Kidney Yang, strengthens bones and sinews" },
      { pinyin: "Bu Gu Zhi", chinese: "补骨脂", latin: "Fructus Psoraleae", dosage: "12g", role: "chen", role_name: "Minister", function: "Tonifies Kidney Yang, strengthens bones" },
      { pinyin: "Ba Ji Tian", chinese: "巴戟天", latin: "Radix Morindae Officinalis", dosage: "12g", role: "chen", role_name: "Minister", function: "Tonifies Kidney Yang, strengthens sinews" },
      { pinyin: "Huai Niu Xi", chinese: "怀牛膝", latin: "Radix Achyranthis Bidentatae", dosage: "12g", role: "zuo", role_name: "Assistant", function: "Strengthens lower back and knees, invigorates blood" },
      { pinyin: "Dang Gui", chinese: "当归", latin: "Radix Angelicae Sinensis", dosage: "12g", role: "zuo", role_name: "Assistant", function: "Nourishes and invigorates blood" },
      { pinyin: "Qin Jiao", chinese: "秦艽", latin: "Radix Gentianae Macrophyllae", dosage: "12g", role: "zuo", role_name: "Assistant", function: "Dispels wind-dampness from meridians" },
      { pinyin: "Ru Xiang", chinese: "乳香", latin: "Olibanum", dosage: "10g", role: "zuo", role_name: "Assistant", function: "Invigorates blood, alleviates pain" },
      { pinyin: "Bai Zhu", chinese: "白术", latin: "Rhizoma Atractylodis Macrocephalae", dosage: "10g", role: "shi", role_name: "Envoy", function: "Strengthens Spleen, supports Qi" },
    ],

    clinical_picture: {
      summary: "A formula to tonify Kidney Yang, regulate blood, and clear wind-cold from the meridians. Targets lower back pain and weakness of joints and bones due to Kidney Yang deficiency with blood stasis and wind-cold obstruction in the meridians.",
      tongue: "Pale or purple pale",
      pulse: "Thin, wiry",
      key_symptoms: [
        "Lower back pain",
        "Weakness of joints and bones",
      ],
    },

    actions: [
      "Tonifies Kidney Yang",
      "Regulates blood",
      "Clears wind-cold from meridians",
    ],

    pattern: "Kidney Yang Deficiency with Blood Stasis and Wind-Cold in Meridians",

    modifications: [
      { condition: "Yang xu", herbs_add: "Fu Zi, Rou Gui. Or add You Gui Yin" },
      { condition: "Women with lower back pain", herbs_add: "Add Zuo Gui Yin" },
    ],

    differentiators: [],

    modern_applications: [
      "Chronic lower back pain",
      "Lumbar disc herniation",
      "Osteoporosis",
      "Degenerative joint disease",
      "Sciatica (Kidney deficiency type)",
    ],

    color: "#a0522d",
  },

  // ============================================================
  // DING XIANG SHI DI TANG 丁香柿蒂汤
  // ============================================================
  "ding-xiang-shi-di-tang": {
    id: "ding-xiang-shi-di-tang",
    name_pinyin: "Dīng Xiāng Shì Dì Tāng",
    name_chinese: "丁香柿蒂汤",
    name_english: "Clove and Persimmon Calyx Decoction",
    category: "Formulas that Warm the Middle and Direct Qi Downward",
    source: "Ji Sheng Fang",

    composition: [
      { pinyin: "Ding Xiang", chinese: "丁香", latin: "Flos Caryophylli", dosage: "6g", role: "jun", role_name: "King", function: "Warms the middle, directs Qi downward, stops hiccups" },
      { pinyin: "Shi Di", chinese: "柿蒂", latin: "Calyx Kaki", dosage: "9g", role: "chen", role_name: "Minister", function: "Directs Stomach Qi downward, stops hiccups" },
      { pinyin: "Ren Shen", chinese: "人参", latin: "Radix Ginseng", dosage: "3g", role: "zuo", role_name: "Assistant", function: "Tonifies Qi, supports Middle Jiao" },
      { pinyin: "Sheng Jiang", chinese: "生姜", latin: "Rhizoma Zingiberis Recens", dosage: "6g", role: "shi", role_name: "Envoy", function: "Warms the Stomach, stops vomiting" },
    ],

    clinical_picture: {
      summary: "A formula for persistent hiccups caused by cold in the Stomach. The Stomach Qi rebels upward due to cold, causing continuous hiccups. This formula warms the middle and redirects the rebellious Qi downward.",
      tongue: "Pale with white coating",
      pulse: "Slow, deep",
      key_symptoms: [
        "Persistent hiccups from cold in the stomach",
      ],
    },

    actions: [
      "Warms the middle",
      "Directs rebellious Qi downward",
      "Stops hiccups",
    ],

    pattern: "Stomach Cold with Rebellious Qi (Hiccups)",

    modifications: [],
    differentiators: [],

    modern_applications: [
      "Persistent hiccups",
      "Post-surgical hiccups",
      "Gastric cold with nausea",
    ],

    color: "#d2691e",
  },

  // ============================================================
  // BEI XIE FEN QING YIN 萆薢分清饮
  // ============================================================
  "bei-xie-fen-qing-yin": {
    id: "bei-xie-fen-qing-yin",
    name_pinyin: "Bēi Xiè Fēn Qīng Yǐn",
    name_chinese: "萆薢分清饮",
    name_english: "Dioscorea Formula to Separate the Turbid",
    category: "Formulas that Transform Dampness",
    source: "Dan Xi Xin Fa",

    composition: [
      { pinyin: "Bei Xie", chinese: "萆薢", latin: "Rhizoma Dioscoreae Hypoglaucae", dosage: "12g", role: "jun", role_name: "King", function: "Separates clear from turbid, resolves dampness" },
      { pinyin: "Yi Zhi Ren", chinese: "益智仁", latin: "Fructus Alpiniae Oxyphyllae", dosage: "9g", role: "chen", role_name: "Minister", function: "Warms Kidney, controls urination" },
      { pinyin: "Wu Yao", chinese: "乌药", latin: "Radix Linderae", dosage: "6g", role: "zuo", role_name: "Assistant", function: "Moves Qi, warms lower Jiao" },
      { pinyin: "Shi Chang Pu", chinese: "石菖蒲", latin: "Rhizoma Acori Tatarinowii", dosage: "9g", role: "zuo", role_name: "Assistant", function: "Opens orifices, transforms dampness" },
    ],

    clinical_picture: {
      summary: "A formula for turbid or milky urination due to Kidney Yang deficiency with dampness in the lower Jiao. The Kidney fails to separate clear from turbid, leading to cloudy urine and frequent urination.",
      tongue: "Pale",
      pulse: "Slow",
      key_symptoms: [
        "Turbid/milky urination",
        "Frequent urination",
      ],
    },

    actions: [
      "Warms and transforms turbid dampness",
      "Separates clear from turbid",
    ],

    pattern: "Kidney Yang Deficiency with Turbid Dampness in Lower Jiao",

    modifications: [],
    differentiators: [],

    modern_applications: [
      "Chyluria",
      "Chronic urinary tract infections",
      "Prostatic fluid discharge",
      "Turbid urine",
    ],

    color: "#4169e1",
  },

  // ============================================================
  // QING XIN LIAN ZI YIN 清心莲子饮
  // ============================================================
  "qing-xin-lian-zi-yin": {
    id: "qing-xin-lian-zi-yin",
    name_pinyin: "Qīng Xīn Lián Zǐ Yǐn",
    name_chinese: "清心莲子饮",
    name_english: "Lotus Seed Combination",
    category: "Formulas that Clear Heart Fire and Tonify Qi",
    source: "Tai Ping Hui Min He Ji Ju Fang",

    composition: [
      { pinyin: "Lian Zi", chinese: "莲子", latin: "Semen Nelumbinis", dosage: "22g", role: "jun", role_name: "King", function: "Clears Heart fire, tonifies Spleen and Kidney" },
      { pinyin: "Mai Men Dong", chinese: "麦门冬", latin: "Radix Ophiopogonis", dosage: "15g", role: "chen", role_name: "Minister", function: "Nourishes Yin, clears heat" },
      { pinyin: "Ren Shen", chinese: "人参", latin: "Radix Ginseng", dosage: "22g", role: "chen", role_name: "Minister", function: "Tonifies Qi" },
      { pinyin: "Huang Qin", chinese: "黄芩", latin: "Radix Scutellariae", dosage: "15g", role: "zuo", role_name: "Assistant", function: "Clears heat, drains fire" },
      { pinyin: "Huang Qi", chinese: "黄芪", latin: "Radix Astragali", dosage: "22g", role: "zuo", role_name: "Assistant", function: "Tonifies Qi, consolidates exterior" },
      { pinyin: "Che Qian Zi", chinese: "车前子", latin: "Semen Plantaginis", dosage: "15g", role: "zuo", role_name: "Assistant", function: "Promotes urination, clears damp-heat" },
      { pinyin: "Di Gu Pi", chinese: "地骨皮", latin: "Cortex Lycii", dosage: "15g", role: "zuo", role_name: "Assistant", function: "Clears deficient heat, cools blood" },
      { pinyin: "Fu Ling", chinese: "茯苓", latin: "Poria", dosage: "22g", role: "zuo", role_name: "Assistant", function: "Strengthens Spleen, promotes urination" },
      { pinyin: "Gan Cao", chinese: "甘草", latin: "Radix Glycyrrhizae", dosage: "15g", role: "shi", role_name: "Envoy", function: "Harmonizes all herbs" },
    ],

    clinical_picture: {
      summary: "A formula for Heart fire with both Qi and Yin deficiency complicated by damp-heat. The patient has irritability, urinary symptoms, and symptoms triggered by mental stress. Kidney Yin deficiency affects the Heart causing palpitations with insomnia and low energy. Addresses the complex interplay of Heart fire, Qi/Yin deficiency, and damp-heat in the lower Jiao.",
      tongue: "Dry",
      pulse: "Thin, rapid",
      key_symptoms: [
        "Heart fire with both Qi and Yin xu and damp heat",
        "Irritability",
        "Painful urination",
        "Hypermenorrhea",
        "Symptoms triggered by mental stress",
        "Palpitations with insomnia and low energy",
        "Low grade fever",
      ],
    },

    actions: [
      "Tonifies Qi",
      "Nourishes Yin",
      "Clears Heart fire",
      "Treats urinary disorders",
    ],

    pattern: "Heart Fire with Qi and Yin Deficiency and Damp-Heat",

    modifications: [],
    differentiators: [],

    modern_applications: [
      "Chronic gonorrhea",
      "Diabetes mellitus",
      "Uterine bleeding (deficiency-heat type)",
      "Coronary heart disease",
      "Nephritis",
      "Benign prostatic hyperplasia",
      "Urinary tract infection",
    ],

    color: "#db7093",
  },

  // ============================================================
  // SI JUN ZI TANG 四君子汤
  // ============================================================
  "si-jun-zi-tang": {
    id: "si-jun-zi-tang",
    name_pinyin: "Sì Jūn Zǐ Tāng",
    name_chinese: "四君子汤",
    name_english: "Four Major Herb Combinations",
    category: "Qi Tonifying Formulas (补气剂)",
    source: "Tai Ping Hui Min He Ji Ju Fang",

    composition: [
      { pinyin: "Ren Shen", chinese: "人参", latin: "Radix Ginseng", dosage: "6-10g", role: "jun", role_name: "King", function: "Strongly tonifies Yuan Qi, strengthens Spleen" },
      { pinyin: "Bai Zhu", chinese: "白术", latin: "Rhizoma Atractylodis Macrocephalae", dosage: "6-10g", role: "chen", role_name: "Minister", function: "Strengthens Spleen, dries Dampness" },
      { pinyin: "Fu Ling", chinese: "茯苓", latin: "Poria", dosage: "6-10g", role: "zuo", role_name: "Assistant", function: "Strengthens Spleen, leaches Dampness, promotes urination" },
      { pinyin: "Gan Cao", chinese: "甘草", latin: "Radix Glycyrrhizae", dosage: "3-10g", role: "shi", role_name: "Envoy", function: "Harmonizes all herbs, tonifies Qi" },
    ],

    clinical_picture: {
      summary: "Classic formula for Spleen Qi deficiency. This situation is very common. In most cases, the outcome of poor longevity creates a wide variety of syndromes that, when treated correctly, will almost always reach the initial state which is si jun zi tang.",
      tongue: "Pale with teeth marks",
      pulse: "Weak",
      key_symptoms: [
        "Fatigue with sugar craving",
        "Low appetite",
        "Loose stools or diarrhea",
        "Borborygmus",
        "Weakness in arms and legs",
      ],
    },

    actions: [
      "Tonifies Qi",
      "Strengthens Spleen",
    ],

    pattern: "SP Qi Xu",

    contraindications: [
      "Excess heat patterns",
      "Overuse will cause dry stool and irritation = LV qi yu",
    ],

    modifications: [],

    differentiators: [
      { formula: "Ding Zhi Wan", difference: "Si jun zi tang = Physical qi xu, fatigue. Ding zhi wan = Mental qi xu, depression." },
    ],

    modern_applications: [
      "Chronic fatigue syndrome",
      "Functional dyspepsia",
      "Chronic gastritis",
      "General debility",
    ],

    dpiRemarks: "Qi type formula. Classic formula. Ren shen tree. This situation is very common. In most cases, the outcome of poor longevity creates a wide variety of syndromes that, when treated correctly, will almost always reach the initial state which is si jun zi tang. Using si jun zi tang reduces the chance of another repeat in the pathological chain.",
    treatmentTime: "2-6 months mid to low dosage. Overuse will cause dry stool and irritation = LV qi yu. Post si jun zi tang, sport.",

    color: "#6b8e23",
  },

  // ============================================================
  // PING WEI SAN 平胃散
  // ============================================================
  "ping-wei-san": {
    id: "ping-wei-san",
    name_pinyin: "Píng Wèi Sǎn",
    name_chinese: "平胃散",
    name_english: "Magnolia and Ginger Formula",
    category: "Formulas that Dry Dampness and Transform Phlegm (祛湿剂)",
    source: "Tai Ping Hui Min He Ji Ju Fang",

    composition: [
      { pinyin: "Cang Zhu", chinese: "苍术", latin: "Rhizoma Atractylodis", dosage: "15g", role: "jun", role_name: "King", function: "Strongly dries Dampness, strengthens Spleen" },
      { pinyin: "Hou Po", chinese: "厚朴", latin: "Cortex Magnoliae Officinalis", dosage: "9g", role: "chen", role_name: "Minister", function: "Moves Qi, transforms Dampness, reduces distention" },
      { pinyin: "Chen Pi", chinese: "陈皮", latin: "Pericarpium Citri Reticulatae", dosage: "9g", role: "zuo", role_name: "Assistant", function: "Regulates Qi, dries Dampness, resolves phlegm" },
      { pinyin: "Gan Cao", chinese: "甘草", latin: "Radix Glycyrrhizae", dosage: "5g", role: "shi", role_name: "Envoy", function: "Harmonizes all herbs, tonifies Qi" },
    ],

    clinical_picture: {
      summary: "Basic formula to treat pancreas imbalance that affects the Stomach causing helicobacter infection disorder. If damp accumulation with no fever, use ping wei san. Treats DM disorder mainly type 2. Post gallstone removal surgery can cause ping wei san condition. Overuse of animal fat and protein diet can cause ping wei san condition.",
      tongue: "Thick sticky white coating",
      pulse: "Slippery",
      key_symptoms: [
        "Indigestion",
        "Abdominal bloating (mainly epigastrium)",
        "Low appetite",
        "Gas",
        "Borborygmus",
        "Diarrhea / loose stools",
        "Fatigue mainly after eating",
        "Nausea, vomiting, belching, acid reflux",
        "Fullness of chest",
        "Headache due to strong smells",
        "Bitter taste",
        "Chronic gastritis",
        "Gastroenteritis",
      ],
    },

    actions: [
      "Dries Dampness",
      "Strengthens Spleen",
      "Promotes Qi movement",
      "Harmonizes Stomach",
    ],

    pattern: "Damp Accumulation",

    contraindications: [
      "Yin deficiency with dry symptoms",
      "Patients with no dampness signs",
    ],

    modifications: [],

    differentiators: [],

    modern_applications: [
      "Chronic gastritis",
      "Gastroenteritis",
      "Diabetes mellitus type 2",
      "Post-cholecystectomy syndrome",
      "Functional dyspepsia",
      "Helicobacter pylori infection",
    ],

    dpiRemarks: "Qi type formula. Ping wei san is a basic formula to treat pancreas imbalance, that effect the ST causing helicobacter infection disorder. If its damp accumulation no fever use ping wei san. Treat DM disorder mainly type 2. Post Gallstone removal surgery can cause ping wei san condition. Overuse animal fat and protein diet can cause ping wei san condition. Ping wei san like ban xia xie xin tang and yue jue wan have a 4 sub conditions. See modifications.",
    treatmentTime: "2-6 months can be longer in DM. Mid to low dosage level. Post ping wei san: si jun zi tang.",

    color: "#cd853f",
  },

  // ============================================================
  // ER CHEN TANG 二陈汤
  // ============================================================
  "er-chen-tang": {
    id: "er-chen-tang",
    name_pinyin: "Èr Chén Tāng",
    name_chinese: "二陈汤",
    name_english: "Citrus and Pinellia Combination",
    category: "Formulas that Dry Dampness and Transform Phlegm (祛湿剂)",
    source: "Tai Ping Hui Min He Ji Ju Fang",

    composition: [
      { pinyin: "Ban Xia", chinese: "半夏", latin: "Rhizoma Pinelliae", dosage: "15g", role: "jun", role_name: "King", function: "Dries Dampness, transforms Phlegm, descends rebellious Qi" },
      { pinyin: "Chen Pi", chinese: "陈皮", latin: "Pericarpium Citri Reticulatae", dosage: "15g", role: "chen", role_name: "Minister", function: "Regulates Qi, dries Dampness, resolves phlegm" },
      { pinyin: "Fu Ling", chinese: "茯苓", latin: "Poria", dosage: "9g", role: "zuo", role_name: "Assistant", function: "Strengthens Spleen, leaches Dampness" },
      { pinyin: "Gan Cao", chinese: "甘草", latin: "Radix Glycyrrhizae", dosage: "4.5g", role: "shi", role_name: "Envoy", function: "Harmonizes all herbs, tonifies Qi" },
    ],

    clinical_picture: {
      summary: "Main and basic formula of the ban xia tree formulas. It is a post all ban xia tree formulas when treating chronic shi phlegm accumulation condition. It is a GIT shi formula. The cough is a symptom. It is a diaphragm formula like any ban xia tree formula but the light one.",
      tongue: "Sticky coating",
      pulse: "Slippery",
      key_symptoms: [
        "Nausea, vomiting",
        "Epigastric distention",
        "Coughing with copious white sputum easily expectorated",
        "Chest and epigastric congestion",
        "Palpitations",
        "Depression anxiety",
        "Headache",
        "No appetite",
        "Dizziness and or vertigo",
      ],
    },

    actions: [
      "Dries Dampness",
      "Transforms Phlegm",
      "Regulates Qi",
      "Harmonizes Middle Jiao",
    ],

    pattern: "Damp-Phlegm",

    contraindications: [
      "Dry cough due to Yin deficiency",
      "Cough with blood-streaked sputum",
    ],

    modifications: [],
    differentiators: [],

    modern_applications: [
      "Chronic bronchitis",
      "Chronic gastritis",
      "Vertigo",
      "Morning sickness",
      "Anxiety with phlegm pattern",
    ],

    dpiRemarks: "Qi type formula. Ban xia tree main formula. Er chen tang is the main and basic formula of the ban xia tree's formulas. It's a post all ban xia tree formulas when treating chronic shi phlegm accumulation condition. It's a GIT shi formula. The cough is a symptom. It is a diaphragm formula like any ban xie tree formula but the light one. Most modifications are different types of ban xie tree formulas.",
    treatmentTime: "2-6 months, mid to low dosage.",

    color: "#b8860b",
  },

  // ============================================================
  // GUI PI TANG 归脾汤
  // ============================================================
  "gui-pi-tang": {
    id: "gui-pi-tang",
    name_pinyin: "Guī Pí Tāng",
    name_chinese: "归脾汤",
    name_english: "Ginseng and Longan Combination",
    category: "Qi and Blood Tonifying Formulas (气血双补剂)",
    source: "Ji Sheng Fang (Yan Yonghe)",

    composition: [
      { pinyin: "Huang Qi", chinese: "黄芪", latin: "Radix Astragali", dosage: "30g", role: "jun", role_name: "King", function: "Tonifies Qi, raises Yang, strengthens Spleen" },
      { pinyin: "Ren Shen", chinese: "人参", latin: "Radix Ginseng", dosage: "15g", role: "jun", role_name: "King", function: "Strongly tonifies Yuan Qi, strengthens Spleen" },
      { pinyin: "Fu Shen", chinese: "茯神", latin: "Poria cum Ligno Hospite", dosage: "30g", role: "chen", role_name: "Minister", function: "Calms the Heart, strengthens Spleen" },
      { pinyin: "Bai Zhu", chinese: "白术", latin: "Rhizoma Atractylodis Macrocephalae", dosage: "30g", role: "chen", role_name: "Minister", function: "Strengthens Spleen, dries Dampness" },
      { pinyin: "Long Yan Rou", chinese: "龙眼肉", latin: "Arillus Longan", dosage: "30g", role: "chen", role_name: "Minister", function: "Nourishes Blood, calms the Spirit" },
      { pinyin: "Suan Zao Ren", chinese: "酸枣仁", latin: "Semen Ziziphi Spinosae", dosage: "30g", role: "zuo", role_name: "Assistant", function: "Nourishes Heart Blood, calms the Spirit" },
      { pinyin: "Dang Gui", chinese: "当归", latin: "Radix Angelicae Sinensis", dosage: "3g", role: "zuo", role_name: "Assistant", function: "Nourishes Blood, harmonizes Blood" },
      { pinyin: "Yuan Zhi", chinese: "远志", latin: "Radix Polygalae", dosage: "3g", role: "zuo", role_name: "Assistant", function: "Calms the Spirit, opens Heart orifices" },
      { pinyin: "Mu Xiang", chinese: "木香", latin: "Radix Aucklandiae", dosage: "15g", role: "zuo", role_name: "Assistant", function: "Moves Qi, prevents cloying from tonics" },
      { pinyin: "Gan Cao", chinese: "甘草", latin: "Radix Glycyrrhizae", dosage: "7.5g", role: "shi", role_name: "Envoy", function: "Harmonizes all herbs, tonifies Qi" },
    ],

    clinical_picture: {
      summary: "A xue & qi xu type formula. It is a Ren shen based formula on the level of xue. The person cannot produce memories / cannot produce xue, that is why developing anemia with mental issues focusing on depression. When administering gui pi tang, we need to advise the patient to eat good quality food that produces qi & xue. Protein.",
      tongue: "Pale, swollen, teeth marks, thin white coating",
      pulse: "Weak, thin",
      key_symptoms: [
        "Anemia",
        "Memory loss, forgetfulness, absent mindedness",
        "Palpitations (xu type)",
        "No appetite",
        "Pale face",
        "Dizziness, blurred vision all due to LBP",
        "GY: long cycle, irregular menstruation, menorrhagia",
        "Depression, weakness, fear",
      ],
    },

    actions: [
      "Tonifies Qi",
      "Nourishes Blood",
      "Strengthens Spleen",
      "Nourishes Heart",
      "Calms the Spirit",
    ],

    pattern: "SP & Heart Blood Xu",

    contraindications: [
      "Excess heat patterns",
      "Blood stasis requiring strong moving herbs",
    ],

    modifications: [],

    differentiators: [
      { formula: "Ba Zhen Tang", difference: "Gui pi tang = Tonify qi & xue treat mental disorder. Depression, weakness, anemia. Ba zhen tang = Tonify qi & xue treat GY disorders. Irregular menses, amenorrhea, infertility." },
    ],

    modern_applications: [
      "Anemia",
      "Depression",
      "Insomnia",
      "Memory disorders",
      "Irregular menstruation",
      "Menorrhagia",
      "Palpitations (functional)",
    ],

    dpiRemarks: "Xue type formula. Chill type. Gui pi tang it's a xue & qi xu type formula. It's a Ren shen based formula on the level of xue. The person can't produce memories / can't produce xue, that why developing anemia with mental issue focusing on depression. Gui pi tang have same GY issue, but the focus on this formula it's the mental issue. When administering gui pi tang, we need to advice the patient to eat good quality food that produce qi & xue. Protein.",
    treatmentTime: "2-6 months, mid to low dosage. Post gui pi tang: Dietary supplements and proper nutrition. When the patient is stronger strength-based sports.",

    color: "#c71585",
  },

  // ============================================================
  // SHEN LING BAI ZHU SAN 参苓白术散
  // ============================================================
  "shen-ling-bai-zhu-san": {
    id: "shen-ling-bai-zhu-san",
    name_pinyin: "Shēn Líng Bái Zhú Sǎn",
    name_chinese: "参苓白术散",
    name_english: "Ginseng and Atractylodes Formula",
    category: "Qi Tonifying Formulas (补气剂)",
    source: "Tai Ping Hui Min He Ji Ju Fang",

    composition: [
      { pinyin: "Ren Shen", chinese: "人参", latin: "Radix Ginseng", dosage: "9g", role: "jun", role_name: "King", function: "Strongly tonifies Yuan Qi, strengthens Spleen" },
      { pinyin: "Bai Zhu", chinese: "白术", latin: "Rhizoma Atractylodis Macrocephalae", dosage: "9g", role: "chen", role_name: "Minister", function: "Strengthens Spleen, dries Dampness" },
      { pinyin: "Fu Ling", chinese: "茯苓", latin: "Poria", dosage: "9g", role: "chen", role_name: "Minister", function: "Strengthens Spleen, leaches Dampness, promotes urination" },
      { pinyin: "Gan Cao", chinese: "甘草", latin: "Radix Glycyrrhizae", dosage: "10g", role: "shi", role_name: "Envoy", function: "Harmonizes all herbs, tonifies Qi" },
      { pinyin: "Shan Yao", chinese: "山药", latin: "Rhizoma Dioscoreae", dosage: "9g", role: "zuo", role_name: "Assistant", function: "Tonifies Spleen, nourishes Kidney" },
      { pinyin: "Lian Zi Rou", chinese: "莲子肉", latin: "Semen Nelumbinis", dosage: "9g", role: "zuo", role_name: "Assistant", function: "Tonifies Spleen, astringes diarrhea, calms Spirit" },
      { pinyin: "Yi Yi Ren", chinese: "薏苡仁", latin: "Semen Coicis", dosage: "15g", role: "zuo", role_name: "Assistant", function: "Strengthens Spleen, leaches Dampness" },
      { pinyin: "Bai Bian Dou", chinese: "白扁豆", latin: "Semen Lablab Album", dosage: "6g", role: "zuo", role_name: "Assistant", function: "Strengthens Spleen, resolves Dampness" },
      { pinyin: "Sha Ren", chinese: "砂仁", latin: "Fructus Amomi", dosage: "3g", role: "zuo", role_name: "Assistant", function: "Transforms Dampness, moves Qi, warms Middle Jiao" },
      { pinyin: "Jie Geng", chinese: "桔梗", latin: "Radix Platycodonis", dosage: "6g", role: "shi", role_name: "Envoy", function: "Opens Lung Qi, guides herbs upward" },
    ],

    clinical_picture: {
      summary: "A ren shen formula that focuses on the lower jiao chill discharge disorders. There will be all the characteristics of Si jun zi tang / SP qi xu but the main issue in Shen ling bai zhu san is the watery stool, discharge and feet fungus. Due to the severe SP qi xu and the watery condition there might be some cases of congestion in the GIT that manifest with indigestion, nausea and even vomiting but it is less common. The patient should avoid eating dairy products and simple carbs.",
      tongue: "Pale, thin white coating",
      pulse: "Weak or thin",
      key_symptoms: [
        "Fatigue with weakness of extremities",
        "Loose stool or watery diarrhea",
        "Pale complexion",
        "Navel and lower abdomen distention with borborygmus",
        "Indigestion",
        "No appetite",
        "Leukorrhea",
      ],
    },

    actions: [
      "Tonifies Qi",
      "Strengthens Spleen",
      "Leaches Dampness",
      "Stops diarrhea",
    ],

    pattern: "SP Xu + Watery Diarrhea",

    contraindications: [
      "Excess heat patterns",
      "Diarrhea due to damp-heat",
    ],

    modifications: [],
    differentiators: [],

    modern_applications: [
      "Chronic diarrhea",
      "Irritable Bowel Syndrome (diarrhea-predominant)",
      "Leukorrhea",
      "Chronic fatigue with digestive weakness",
      "Malabsorption syndrome",
      "Fungal infections of the feet",
    ],

    dpiRemarks: "Qi type formula. Chill type. Shen ling bai zhu san it's a ren she formula that focuses on the lower jiao chill discharge disorders. There will be all the cholestatic of Si jun zi tang / SP qi xu but the main issue in Shen ling bai zhu san is the watery stool, discharge and feet fungus. Due to the severe SP qi xu and the watery condition there might be same cases of congested in the GIT that manifest with indigestion, nausea and even vomiting but its less common. At Shen ling bai zhu san condition the patient should avoid eating dairy products and simple carbs.",
    treatmentTime: "2-4 month mid to low dosage formula. Post Shen ling bai zhu san it's a si jun zi tang.",

    color: "#2e8b57",
  },

  // ============================================================
  // HUANG LIAN E JIAO TANG 黄连阿胶汤
  // ============================================================
  "huang-lian-e-jiao-tang": {
    id: "huang-lian-e-jiao-tang",
    name_pinyin: "Huáng Lián Ē Jiāo Tāng",
    name_chinese: "黄连阿胶汤",
    name_english: "Coptis and Ass-Hide Gelatin Decoction",
    category: "Formulas that Clear Heat (清热剂)",
    source: "Shang Han Lun (Zhang Zhongjing)",

    composition: [
      { pinyin: "Huang Lian", chinese: "黄连", latin: "Rhizoma Coptidis", dosage: "12g", role: "jun", role_name: "King", function: "Clears Heart fire, dries Dampness" },
      { pinyin: "Huang Qin", chinese: "黄芩", latin: "Radix Scutellariae", dosage: "6g", role: "chen", role_name: "Minister", function: "Clears heat, dries Dampness" },
      { pinyin: "Bai Shao", chinese: "白芍", latin: "Radix Paeoniae Alba", dosage: "6g", role: "zuo", role_name: "Assistant", function: "Nourishes Yin, softens Liver" },
      { pinyin: "E Jiao", chinese: "阿胶", latin: "Colla Corii Asini", dosage: "9g", role: "chen", role_name: "Minister", function: "Nourishes Yin and Blood" },
      { pinyin: "Ji Zi Huang", chinese: "鸡子黄", latin: "Egg Yolk", dosage: "2 pieces", role: "zuo", role_name: "Assistant", function: "Nourishes Yin, harmonizes formula" },
    ],

    clinical_picture: {
      summary: "Epigastric formula with a soft abdomen. Damp accumulation. This formula treats chronic gastritis condition, that due to the heat and the damp nature its effect the patient behavior, make them eat late at night. This patient usually fat or obese. This is an overweight treatment that should be combined with nutrition consultation.",
      tongue: "Red",
      pulse: "Rapid, thin",
      key_symptoms: [
        "Shao Yin disease with Heart Fire",
        "Insomnia",
        "Palpitations",
        "Dry mouth & throat",
        "Neurosis",
        "DM",
        "Impotence",
        "Schizophrenia",
        "Cerebral hemorrhage",
      ],
    },

    actions: [
      "Clears Heart fire",
      "Nourishes Kidney Yin",
      "Calms the Spirit",
    ],

    pattern: "Heart Fire + K Yin Xu",

    contraindications: [
      "Cold patterns with diarrhea",
      "Overuse will cause the patient to be chills, sleepy with dry stool",
    ],

    modifications: [],
    differentiators: [],

    modern_applications: [
      "Insomnia",
      "Neurosis",
      "Diabetes mellitus",
      "High cholesterol",
      "Coronary heart disease",
      "Obesity with late-night eating",
      "Chronic gastritis",
    ],

    dpiRemarks: "Qi wet formula huang lian tree. Epigastric formula with a soft abdomen. Damp accumulation. This formula treats chronic gastritis condition, that due to the heat and the damp nature its effect the patient behavior, make them eat late at night. Thus patient usually fat or obese. This is an overweight treatment that should be combined with nutrition consultation. Using this formula may treat many internal conditions, from high cholesterol to CHD.",
    treatmentTime: "3 weeks to 2 months high to mid dosage. After 1.5 month look for a reason why the patient still at that condition. Miss diagnosis is one of them. Overuse will cause the patient to be chills, sleepy with dry stool. Post Huang lian e jiao tang can be 1st huang lian tang, ban xia xie xin tang. 2nd xiang sha liu jun zi tan, liu jun zi tang. 3rd si jun zi tang.",

    color: "#8b0000",
  },

  // ============================================================
  // HUANG LIAN TANG 黄连汤
  // ============================================================
  "huang-lian-tang": {
    id: "huang-lian-tang",
    name_pinyin: "Huáng Lián Tāng",
    name_chinese: "黄连汤",
    name_english: "Coptis Decoction",
    category: "Formulas that Clear Heat (清热剂)",
    source: "Shang Han Lun (Zhang Zhongjing)",

    composition: [
      { pinyin: "Huang Lian", chinese: "黄连", latin: "Rhizoma Coptidis", dosage: "9g", role: "jun", role_name: "King", function: "Clears Stomach heat, dries Dampness" },
      { pinyin: "Gan Jiang", chinese: "干姜", latin: "Rhizoma Zingiberis", dosage: "9g", role: "chen", role_name: "Minister", function: "Warms Middle Jiao, disperses cold" },
      { pinyin: "Gui Zhi", chinese: "桂枝", latin: "Ramulus Cinnamomi", dosage: "9g", role: "chen", role_name: "Minister", function: "Warms Yang, unblocks channels" },
      { pinyin: "Ban Xia", chinese: "半夏", latin: "Rhizoma Pinelliae", dosage: "9g", role: "zuo", role_name: "Assistant", function: "Descends rebellious Qi, resolves phlegm" },
      { pinyin: "Ren Shen", chinese: "人参", latin: "Radix Ginseng", dosage: "9g", role: "zuo", role_name: "Assistant", function: "Tonifies Qi, strengthens Spleen" },
      { pinyin: "Da Zao", chinese: "大枣", latin: "Fructus Jujubae", dosage: "6g", role: "shi", role_name: "Envoy", function: "Nourishes Qi, harmonizes herbs" },
      { pinyin: "Zhi Gan Cao", chinese: "炙甘草", latin: "Radix Glycyrrhizae Praeparata", dosage: "9g", role: "shi", role_name: "Envoy", function: "Harmonizes all herbs, tonifies Qi" },
    ],

    clinical_picture: {
      summary: "Huang lian tang formula is a midway between the huang lian fever damp formulas to ping wei san or ban xia tree formulas that have no fever. In some cases we can skip the in-between formulas like huang lian tang, but some patients that had chronic fever / huang lian formula might need this formula.",
      tongue: "Slippery coating",
      pulse: "Wiry, floating strong at cun",
      key_symptoms: [
        "Heat sensation in chest (gastritis, gastric ulcer)",
        "Irritability",
        "Nausea",
        "Abdominal pain",
        "Lower abdomen with diarrhea",
        "Acute gastritis",
        "Stomach acid",
      ],
    },

    actions: [
      "Clears Stomach heat",
      "Warms Middle Jiao",
      "Descends rebellious Qi",
      "Harmonizes Stomach",
    ],

    pattern: "ST Damp-Heat",

    contraindications: [
      "Pure cold patterns without heat",
      "Severe Yin deficiency",
    ],

    modifications: [],
    differentiators: [],

    modern_applications: [
      "Acute gastritis",
      "Gastric ulcer",
      "Acid reflux",
      "Gastroenteritis",
    ],

    dpiRemarks: "Qi wet formula huang lian tree. Huang lian tang formula is a midway between the huang lian fever damp formulas to ping wei san or ban xia tree formulas that have no fever. In same cases we can skip the 'in-between formulas' like huang lian tang, but same patient that had chronic fever / huang lian formula might need this formula.",
    treatmentTime: "1-3 month. Mid to low dosage if acute condition uses high dosage 3 weeks to 1 month. Post huang lian tang can be ban xia xie xin tang or ping wei san if damp or er chen tang if phlegm.",

    color: "#dc143c",
  },

  // ============================================================
  // BAI HU TANG 白虎汤
  // ============================================================
  "bai-hu-tang": {
    id: "bai-hu-tang",
    name_pinyin: "Bái Hǔ Tāng",
    name_chinese: "白虎汤",
    name_english: "White Tiger Decoction",
    category: "Formulas that Clear Heat (清热剂)",
    source: "Shang Han Lun (Zhang Zhongjing)",

    composition: [
      { pinyin: "Shi Gao", chinese: "石膏", latin: "Gypsum Fibrosum", dosage: "16g", role: "jun", role_name: "King", function: "Clears Qi-level heat, drains Stomach fire" },
      { pinyin: "Zhi Mu", chinese: "知母", latin: "Rhizoma Anemarrhenae", dosage: "6g", role: "chen", role_name: "Minister", function: "Clears heat, nourishes Yin, generates fluids" },
      { pinyin: "Geng Mi", chinese: "粳米", latin: "Semen Oryzae", dosage: "8g", role: "zuo", role_name: "Assistant", function: "Protects Stomach Qi, generates fluids" },
      { pinyin: "Zhi Gan Cao", chinese: "炙甘草", latin: "Radix Glycyrrhizae Praeparata", dosage: "2g", role: "shi", role_name: "Envoy", function: "Harmonizes all herbs, protects Stomach" },
    ],

    clinical_picture: {
      summary: "Acute or acute attack on subacute condition. Due to HBP, allergy, reaction to vaccination. Excessive fever attack on shi gao / fever yang ming dry constitution, due to alcohol, drugs or medicines. Can use this formula for a fever condition dry nature with no excessive 4 Bigs but with low dosage for getting a clear diagnosis after 1-2 weeks.",
      tongue: "Red, with yellow coating",
      pulse: "Strong, or large. Slippery.",
      key_symptoms: [
        "4 Bigs: High fever, profuse sweating, rapid palpitations, extreme thirst",
        "Red face, eyes, irritability, insomnia",
        "Bleeding gums, epistaxis",
        "Dry tongue, lips, mouth",
        "Skin rush with severe itching",
        "Soft but abdominal fullness",
      ],
    },

    actions: [
      "Clears Qi-level heat",
      "Drains Stomach fire",
      "Generates fluids",
      "Relieves thirst",
    ],

    pattern: "Yang Ming Qi-level Heat",

    contraindications: [
      "Cold patterns",
      "True cold / false heat patterns",
      "Overuse may cause the patient to be sleepy chills with diarrhea",
    ],

    modifications: [],
    differentiators: [],

    modern_applications: [
      "High fever",
      "Hypertension",
      "Allergic reactions",
      "Severe skin rash with itching",
      "Diabetes (heat type)",
      "Epistaxis",
    ],

    dpiRemarks: "Qi formula. Acute or acute attack on subacute condition. Due to HBP, allergy, reaction to vaccination. Excessive fever attack on shi gao / fever yang ming dry constitution, due to alcohol, drugs or medicines. Can use this formula for a fever condition dry nature with no excessive 4Bigs but with low dosage for getting a clear diagnosis after 1-2 weeks.",
    treatmentTime: "1-3 weeks high to mid dosage. Overuse of the formula may cause the patient to be sleepy chills with diarrhea. Post Bai hu tang can be 1st yu nu jing or qing wei san. 2nd sha shen mai men dong tang. 2nd mai men dong tang.",

    color: "#f0e68c",
  },

  // ============================================================
  // WEN DAN TANG 温胆汤
  // ============================================================
  "wen-dan-tang": {
    id: "wen-dan-tang",
    name_pinyin: "Wēn Dǎn Tāng",
    name_chinese: "温胆汤",
    name_english: "Warm the Gallbladder Decoction",
    category: "Formulas that Dry Dampness and Transform Phlegm (祛湿剂)",
    source: "Bei Ji Qian Jin Yao Fang (Sun Simiao)",

    composition: [
      { pinyin: "Ban Xia", chinese: "半夏", latin: "Rhizoma Pinelliae", dosage: "6g", role: "jun", role_name: "King", function: "Dries Dampness, transforms Phlegm, descends rebellious Qi" },
      { pinyin: "Zhu Ru", chinese: "竹茹", latin: "Caulis Bambusae in Taenia", dosage: "6g", role: "chen", role_name: "Minister", function: "Clears heat, transforms phlegm, stops vomiting" },
      { pinyin: "Zhi Shi", chinese: "枳实", latin: "Fructus Aurantii Immaturus", dosage: "6g", role: "chen", role_name: "Minister", function: "Breaks Qi stagnation, resolves phlegm" },
      { pinyin: "Chen Pi", chinese: "陈皮", latin: "Pericarpium Citri Reticulatae", dosage: "9g", role: "zuo", role_name: "Assistant", function: "Regulates Qi, dries Dampness" },
      { pinyin: "Fu Ling", chinese: "茯苓", latin: "Poria", dosage: "4.5g", role: "zuo", role_name: "Assistant", function: "Strengthens Spleen, leaches Dampness" },
      { pinyin: "Gan Cao", chinese: "甘草", latin: "Radix Glycyrrhizae", dosage: "3g", role: "shi", role_name: "Envoy", function: "Harmonizes all herbs" },
      { pinyin: "Sheng Jiang", chinese: "生姜", latin: "Rhizoma Zingiberis Recens", dosage: "3 slices", role: "shi", role_name: "Envoy", function: "Warms Middle Jiao, assists Ban Xia" },
      { pinyin: "Da Zao", chinese: "大枣", latin: "Fructus Jujubae", dosage: "1 piece", role: "shi", role_name: "Envoy", function: "Nourishes Qi, harmonizes herbs" },
    ],

    clinical_picture: {
      summary: "Phlegm-heat in the Stomach and Gallbladder affecting the diaphragm. Treats GB and ST disharmony with phlegm-heat causing insomnia, anxiety, palpitations, nausea, and dizziness.",
      tongue: "Greasy yellow coating",
      pulse: "Slippery, rapid",
      key_symptoms: [
        "Insomnia with disturbing dreams",
        "Anxiety, palpitations",
        "Nausea, vomiting",
        "Dizziness",
        "Bitter taste in mouth",
        "Epigastric distention",
      ],
    },

    actions: [
      "Regulates Qi",
      "Transforms Phlegm",
      "Clears Gallbladder",
      "Harmonizes Stomach",
    ],

    pattern: "GB Phlegm-Heat",

    contraindications: [
      "Yin deficiency with empty heat",
      "Blood deficiency insomnia",
    ],

    modifications: [],

    differentiators: [
      { formula: "Huang Lian Jie Du Tang", difference: "Huang Lian Jie Du Tang = Shi fire in the San jiao with damp heat / With LV fire. Wen Dan Tang = Phlegm heat in the ST & GB / Effecting the diaphragm." },
    ],

    modern_applications: [
      "Insomnia",
      "Anxiety disorders",
      "Vertigo",
      "Chronic gastritis",
      "Neurosis",
      "Epilepsy (phlegm type)",
    ],

    color: "#556b2f",
  },

  // ============================================================
  // BAN XIA HOU PO TANG 半夏厚朴汤
  // ============================================================
  "ban-xia-hou-po-tang": {
    id: "ban-xia-hou-po-tang",
    name_pinyin: "Bàn Xià Hòu Pò Tāng",
    name_chinese: "半夏厚朴汤",
    name_english: "Pinellia and Magnolia Combination",
    category: "Formulas that Regulate Qi (理气剂)",
    source: "Jin Gui Yao Lue (Zhang Zhongjing)",

    composition: [
      { pinyin: "Ban Xia", chinese: "半夏", latin: "Rhizoma Pinelliae", dosage: "12g", role: "jun", role_name: "King", function: "Dries Dampness, transforms Phlegm, descends rebellious Qi" },
      { pinyin: "Hou Po", chinese: "厚朴", latin: "Cortex Magnoliae Officinalis", dosage: "9g", role: "chen", role_name: "Minister", function: "Moves Qi, transforms Dampness, reduces distention" },
      { pinyin: "Zi Su Ye", chinese: "紫苏叶", latin: "Folium Perillae", dosage: "6g", role: "zuo", role_name: "Assistant", function: "Moves Qi, releases exterior, opens chest" },
      { pinyin: "Fu Ling", chinese: "茯苓", latin: "Poria", dosage: "12g", role: "zuo", role_name: "Assistant", function: "Strengthens Spleen, leaches Dampness" },
      { pinyin: "Sheng Jiang", chinese: "生姜", latin: "Rhizoma Zingiberis Recens", dosage: "15g", role: "shi", role_name: "Envoy", function: "Warms Middle Jiao, descends Qi, assists Ban Xia" },
    ],

    clinical_picture: {
      summary: "The main condition here is distress, due to diaphragm condition. In most conditions there will be no splashing water. Plum-pit Qi due to phlegm accumulation with qi stagnation.",
      tongue: "White greasy coating",
      pulse: "Slippery, wiry",
      key_symptoms: [
        "Plum-pit Qi due to phlegm accumulation with qi stagnation",
        "Stifling sensation in chest and throat",
        "Nausea, vomiting",
      ],
    },

    actions: [
      "Moves Qi",
      "Transforms Phlegm",
      "Descends rebellious Qi",
      "Dissipates lumps",
    ],

    pattern: "Plum-Pit Qi",

    contraindications: [
      "Yin deficiency with dry throat",
      "Overuse or high dosage will make constipation. If so, add da huang or mu xiang bing lang wan.",
    ],

    modifications: [],

    differentiators: [
      { formula: "Ban Xia Xie Xin Tang", difference: "Ban Xia Hou Po Tang = Subcardiac phlegm, Mental depression. Ban Xia Xie Xin Tang = Epigastric phlegm, No mental only physical." },
    ],

    modern_applications: [
      "Globus hystericus (plum-pit qi)",
      "Neurosis",
      "Depression with phlegm pattern",
      "Chronic pharyngitis",
      "Functional dysphagia",
    ],

    dpiRemarks: "Qi type formula. Ban xia tree. The main condition here is distress, due to diaphragm condition. In most conditions there will be no splashing water.",
    treatmentTime: "Acute, subacute to chronic condition. High mid to lower dosage. Overuse or high dosage will make constipation. If so, add da huang or mu xiang bing lang wan. Post ban xia hou po tang, can be any er chen tang formulas.",

    color: "#4682b4",
  },

  // ============================================================
  // BAN XIA BAI ZHU TIAN MA TANG 半夏白术天麻汤
  // ============================================================
  "ban-xia-bai-zhu-tian-ma-tang": {
    id: "ban-xia-bai-zhu-tian-ma-tang",
    name_pinyin: "Bàn Xià Bái Zhú Tiān Má Tāng",
    name_chinese: "半夏白术天麻汤",
    name_english: "Pinellia & Gastrodia Combination",
    category: "Formulas that Dry Dampness and Transform Phlegm (祛湿剂)",
    source: "Yi Xue Xin Wu (Cheng Guopeng)",

    composition: [
      { pinyin: "Ban Xia", chinese: "半夏", latin: "Rhizoma Pinelliae", dosage: "4.5g", role: "jun", role_name: "King", function: "Dries Dampness, transforms Phlegm, descends rebellious Qi" },
      { pinyin: "Tian Ma", chinese: "天麻", latin: "Rhizoma Gastrodiae", dosage: "3g", role: "jun", role_name: "King", function: "Extinguishes Liver Wind, stops dizziness" },
      { pinyin: "Bai Zhu", chinese: "白术", latin: "Rhizoma Atractylodis Macrocephalae", dosage: "9g", role: "chen", role_name: "Minister", function: "Strengthens Spleen, dries Dampness" },
      { pinyin: "Fu Ling", chinese: "茯苓", latin: "Poria", dosage: "3g", role: "zuo", role_name: "Assistant", function: "Strengthens Spleen, leaches Dampness" },
      { pinyin: "Chen Pi", chinese: "陈皮", latin: "Pericarpium Citri Reticulatae", dosage: "3g", role: "zuo", role_name: "Assistant", function: "Regulates Qi, dries Dampness" },
      { pinyin: "Gan Cao", chinese: "甘草", latin: "Radix Glycyrrhizae", dosage: "1g", role: "shi", role_name: "Envoy", function: "Harmonizes all herbs" },
    ],

    clinical_picture: {
      summary: "Epigastric hardness, phlegm. With neck stiffness. It is a diaphragm condition. In most conditions there will be no splashing water.",
      tongue: "White greasy coating",
      pulse: "Wiry & slippery",
      key_symptoms: [
        "Neck, shoulders & head disorders",
        "Meniere's disease",
        "Blurry vision, tinnitus",
        "Hypertension / hypotension",
        "Vertigo, dizziness",
        "GIT: desire to sleep after eating",
      ],
    },

    actions: [
      "Strengthens Spleen",
      "Dries Dampness",
      "Transforms Phlegm",
      "Extinguishes Liver Wind",
    ],

    pattern: "Phlegm + Liver Wind",

    contraindications: [
      "Liver Yang rising from Yin deficiency (without phlegm)",
      "Overuse or high dosage will make constipation. If so, add da huang or mu xiang bing lang wan.",
    ],

    modifications: [],
    differentiators: [],

    modern_applications: [
      "Meniere's disease",
      "Vertigo",
      "Hypertension",
      "Tinnitus",
      "Cervical spondylosis",
    ],

    dpiRemarks: "Qi type formula. Ban xia tree. Epigastric hardness, phlegm. With neck stiffness. It's a diaphragm condition. In most conditions there will be no splashing water.",
    treatmentTime: "Acute, subacute to chronic. High mid to lower dosage. Overuse or high dosage will make constipation. If so, add da huang or mu xiang bing lang wan. Post ban xia bai zhu tian ma tang. Can be any er chen tang formulas.",

    color: "#708090",
  },

  // ============================================================
  // DA CHENG QI TANG 大承气汤
  // ============================================================
  "da-cheng-qi-tang": {
    id: "da-cheng-qi-tang",
    name_pinyin: "Dà Chéng Qì Tāng",
    name_chinese: "大承气汤",
    name_english: "Major Rhubarb Combination",
    category: "Purgative Formulas (泻下剂)",
    source: "Shang Han Lun (Zhang Zhongjing)",

    composition: [
      { pinyin: "Da Huang", chinese: "大黄", latin: "Radix et Rhizoma Rhei", dosage: "12g", role: "jun", role_name: "King", function: "Purges heat accumulation, moves stool, clears heat" },
      { pinyin: "Mang Xiao", chinese: "芒硝", latin: "Natrii Sulfas", dosage: "9g", role: "chen", role_name: "Minister", function: "Softens hardness, moistens dryness, purges accumulation" },
      { pinyin: "Zhi Shi", chinese: "枳实", latin: "Fructus Aurantii Immaturus", dosage: "12g", role: "zuo", role_name: "Assistant", function: "Breaks Qi stagnation, reduces distention" },
      { pinyin: "Hou Po", chinese: "厚朴", latin: "Cortex Magnoliae Officinalis", dosage: "15g", role: "zuo", role_name: "Assistant", function: "Moves Qi, reduces distention, transforms Dampness" },
    ],

    clinical_picture: {
      summary: "Yang ming pattern with interior heat accumulation. Severe constipation with abdominal pain and distention. This is a strong purgative formula for acute excess heat conditions.",
      tongue: "Red, yellow coating",
      pulse: "Rapid slippery",
      key_symptoms: [
        "Yang ming pattern with interior heat accumulation",
        "Abdominal pain worse with pressure",
        "Constipation, dry stool",
        "Epigastric focal distention",
        "Fever",
        "Acute appendicitis, cholecystitis, pancreatitis",
        "HBP",
        "Intestinal obstruction",
      ],
    },

    actions: [
      "Vigorously purges heat accumulation",
      "Breaks stagnation",
      "Moves stool",
    ],

    pattern: "Yang Ming Interior Heat (Severe)",

    contraindications: [
      "Pregnancy",
      "Deficiency cold patterns",
      "Elderly or weak patients (use with caution)",
    ],

    modifications: [],
    differentiators: [],

    modern_applications: [
      "Acute appendicitis",
      "Acute cholecystitis",
      "Acute pancreatitis",
      "Intestinal obstruction",
      "Severe constipation",
      "Hypertension (excess heat type)",
    ],

    color: "#b22222",
  },

  // ============================================================
  // DA HUANG MU DAN PI TANG 大黄牡丹皮汤
  // ============================================================
  "da-huang-mu-dan-pi-tang": {
    id: "da-huang-mu-dan-pi-tang",
    name_pinyin: "Dà Huáng Mǔ Dān Pí Tāng",
    name_chinese: "大黄牡丹皮汤",
    name_english: "Rhubarb & Moutan Combination",
    category: "Purgative Formulas (泻下剂)",
    source: "Jin Gui Yao Lue (Zhang Zhongjing)",

    composition: [
      { pinyin: "Da Huang", chinese: "大黄", latin: "Radix et Rhizoma Rhei", dosage: "12g", role: "jun", role_name: "King", function: "Purges heat accumulation, clears heat, moves Blood" },
      { pinyin: "Mu Dan Pi", chinese: "牡丹皮", latin: "Cortex Moutan", dosage: "10g", role: "chen", role_name: "Minister", function: "Clears heat, cools Blood, activates Blood" },
      { pinyin: "Tao Ren", chinese: "桃仁", latin: "Semen Persicae", dosage: "10g", role: "chen", role_name: "Minister", function: "Activates Blood, dispels Blood stasis" },
      { pinyin: "Dong Gua Ren", chinese: "冬瓜仁", latin: "Semen Benincasae", dosage: "30g", role: "zuo", role_name: "Assistant", function: "Clears heat, expels pus, promotes discharge" },
      { pinyin: "Mang Xiao", chinese: "芒硝", latin: "Natrii Sulfas", dosage: "10g", role: "zuo", role_name: "Assistant", function: "Softens hardness, moistens dryness, purges accumulation" },
    ],

    clinical_picture: {
      summary: "Intestinal inflammation with blood stasis and heat accumulation. Treats conditions with hardness, constipation, and localized inflammation in the lower abdomen.",
      tongue: "Greasy yellow coating",
      pulse: "Slow tense and strong",
      key_symptoms: [
        "Accumulation and hardness, constipation",
        "Intestinal inflammation, appendicitis, colitis, diverticulitis",
        "IBS, hemorrhoids",
        "PID (Pelvic inflammatory disease)",
        "Abdominal masses / tumors",
      ],
    },

    actions: [
      "Purges heat",
      "Breaks Blood stasis",
      "Reduces swelling",
      "Expels pus",
    ],

    pattern: "Intestinal Blood Stasis + Heat",

    contraindications: [
      "Pregnancy",
      "Deficiency cold patterns",
      "Patients with weak constitution",
    ],

    modifications: [],
    differentiators: [],

    modern_applications: [
      "Acute appendicitis",
      "Colitis",
      "Diverticulitis",
      "IBS",
      "Hemorrhoids",
      "Pelvic inflammatory disease",
      "Abdominal tumors",
    ],

    color: "#a0522d",
  },

  // ============================================================
  // QI BAO MEI RAN DAN 七宝美髯丹
  // ============================================================
  "qi-bao-mei-ran-dan": {
    id: "qi-bao-mei-ran-dan",
    name_pinyin: "Qī Bǎo Měi Rán Dān",
    name_chinese: "七宝美髯丹",
    name_english: "Seven Treasures Special Pill",
    category: "Formulas that Tonify Yin and Blood (补阴剂)",
    source: "Ben Cao Gang Mu (Li Shizhen)",

    composition: [
      { pinyin: "He Shou Wu", chinese: "何首乌", latin: "Radix Polygoni Multiflori", dosage: "10g", role: "jun", role_name: "King", function: "Nourishes Jing and Blood, darkens hair" },
      { pinyin: "Gou Qi Zi", chinese: "枸杞子", latin: "Fructus Lycii", dosage: "5g", role: "chen", role_name: "Minister", function: "Nourishes Liver and Kidney Yin, benefits Jing" },
      { pinyin: "Dang Gui", chinese: "当归", latin: "Radix Angelicae Sinensis", dosage: "5g", role: "chen", role_name: "Minister", function: "Nourishes Blood, harmonizes Blood" },
      { pinyin: "Tu Si Zi", chinese: "菟丝子", latin: "Semen Cuscutae", dosage: "5g", role: "zuo", role_name: "Assistant", function: "Tonifies Kidney Yang and Yin, secures Jing" },
      { pinyin: "Bu Gu Zhi", chinese: "补骨脂", latin: "Fructus Psoraleae", dosage: "2.5g", role: "zuo", role_name: "Assistant", function: "Warms Kidney Yang, strengthens bones" },
      { pinyin: "Niu Xi", chinese: "牛膝", latin: "Radix Achyranthis Bidentatae", dosage: "5g", role: "zuo", role_name: "Assistant", function: "Nourishes Liver and Kidney, strengthens sinews and bones" },
      { pinyin: "Fu Ling", chinese: "茯苓", latin: "Poria", dosage: "5g", role: "shi", role_name: "Envoy", function: "Strengthens Spleen, leaches Dampness" },
    ],

    clinical_picture: {
      summary: "Qi bao mei ran dan can be used as main formula or to add to other formulas to reinforce them with jing support. Very good for male infertility with low sperm count.",
      tongue: "Pale",
      pulse: "Thin, weak",
      key_symptoms: [
        "Infertility, menopausal syndrome, plastic anemia, hair loss",
        "Weakness of back and knees, osteopenia, osteoporosis",
        "Premature aging",
        "Low sex drive, impotence, low sperm count",
        "Low ovarian reserve",
        "Frequent urination",
        "Menopause",
      ],
    },

    actions: [
      "Nourishes Kidney and Liver Jing",
      "Tonifies Blood",
      "Strengthens bones and sinews",
      "Darkens hair",
    ],

    pattern: "KD & LV Jing/Blood Xu",

    contraindications: [
      "Excess heat patterns",
      "Damp-heat in lower jiao",
    ],

    modifications: [],
    differentiators: [],

    modern_applications: [
      "Male infertility",
      "Female infertility",
      "Menopausal syndrome",
      "Osteoporosis",
      "Premature graying / hair loss",
      "Low sperm count",
      "Low ovarian reserve",
    ],

    dpiRemarks: "Xue type formula. Qi bao mei ran dan can be used as main formula or to add to their formula to reinforce it with jing support. Qi bao mei ran dan very good for male infertility with low sperm count.",
    treatmentTime: "4 month to 1 year. mid to low dosage formula.",

    color: "#483d8b",
  },

  // ============================================================
  // SI NI SAN 四逆散
  // ============================================================
  "si-ni-san": {
    id: "si-ni-san",
    name_pinyin: "Sì Nì Sǎn",
    name_chinese: "四逆散",
    name_english: "Bupleurum and Chih Shih Formula",
    category: "Formulas that Harmonize",
    source: "Shang Han Lun",

    composition: [
      { pinyin: "Chai Hu", chinese: "柴胡", latin: "Radix Bupleuri", dosage: "10g", role: "jun", role_name: "King", function: "Spreads Liver Qi, relieves constraint" },
      { pinyin: "Bai Shao", chinese: "白芍", latin: "Radix Paeoniae Alba", dosage: "10g", role: "chen", role_name: "Minister", function: "Nourishes blood, softens the Liver, alleviates pain" },
      { pinyin: "Zhi Shi", chinese: "枳实", latin: "Fructus Aurantii Immaturus", dosage: "10g", role: "zuo", role_name: "Assistant", function: "Breaks up stagnant Qi, reduces accumulation" },
      { pinyin: "Gan Cao", chinese: "甘草", latin: "Radix Glycyrrhizae", dosage: "10g", role: "shi", role_name: "Envoy", function: "Harmonizes the formula, moderates urgency" },
    ],

    clinical_picture: {
      summary: "A formula for Liver Qi stagnation invading the Stomach with cold sensation of the extremities. The patient presents with chest and abdominal distension and fullness, irritability and mood swings. The coldness of the hands and feet is due to Qi constraint rather than Yang deficiency.",
      tongue: "No specific tongue description",
      pulse: "Wiry, slight wiry",
      key_symptoms: [
        "Coldness sensation of the hands and feet",
        "Chest & abdominal distension & fullness",
        "Irritability and/or mood swings",
      ],
    },

    actions: [
      "Spreads Liver Qi",
      "Regulates Stomach Qi",
      "Relieves constraint",
    ],

    pattern: "LV/ST Qi Regulation",

    contraindications: [
      "True Yang deficiency with cold extremities",
    ],

    modifications: [
      { condition: "Abdominal pain", herbs_add: "Chuan Lian Zi, Yan Hu Suo. See Jin Lin Zi San" },
      { condition: "Painful menses", herbs_add: "Dang Gui, Wu Yao, Xiang Fu, Yan Hu Suo" },
      { condition: "Painful cold abdomen", herbs_add: "Fu Zi" },
    ],

    differentiators: [
      { formula: "Chai Hu Shu Gan Wan", difference: "Si Ni San = Area: abdomen, HF: cold. Chai Hu Shu Gan Wan = Area: mid to lower abdomen, E: cold." },
    ],

    modern_applications: [
      "Irritable bowel syndrome",
      "Chronic hepatitis",
      "Gastritis",
      "Intercostal neuralgia",
      "Premenstrual syndrome",
      "Mood disorders",
    ],

    color: "#2f8b57",
  },

  // ============================================================
  // XIANG SHA LIU JUN ZI TANG 香砂六君子汤
  // ============================================================
  "xiang-sha-liu-jun-zi-tang": {
    id: "xiang-sha-liu-jun-zi-tang",
    name_pinyin: "Xiāng Shā Liù Jūn Zǐ Tāng",
    name_chinese: "香砂六君子汤",
    name_english: "Saussurea and Cardamom Combination",
    category: "Formulas that Tonify Qi",
    source: "Yi Fang Ji Jie",

    composition: [
      { pinyin: "Ren Shen", chinese: "人参", latin: "Radix Ginseng", dosage: "3g", role: "jun", role_name: "King", function: "Strongly tonifies SP Qi" },
      { pinyin: "Bai Zhu", chinese: "白术", latin: "Rhizoma Atractylodis Macrocephalae", dosage: "6g", role: "chen", role_name: "Minister", function: "Strengthens SP, dries dampness" },
      { pinyin: "Fu Ling", chinese: "茯苓", latin: "Poria", dosage: "6g", role: "chen", role_name: "Minister", function: "Strengthens SP, drains dampness" },
      { pinyin: "Ban Xia", chinese: "半夏", latin: "Rhizoma Pinelliae", dosage: "3g", role: "zuo", role_name: "Assistant", function: "Dries dampness, transforms phlegm, descends rebellious Qi" },
      { pinyin: "Chen Pi", chinese: "陈皮", latin: "Pericarpium Citri Reticulatae", dosage: "3g", role: "zuo", role_name: "Assistant", function: "Regulates Qi, dries dampness" },
      { pinyin: "Mu Xiang", chinese: "木香", latin: "Radix Aucklandiae", dosage: "3g", role: "zuo", role_name: "Assistant", function: "Promotes Qi movement, alleviates pain" },
      { pinyin: "Sha Ren", chinese: "砂仁", latin: "Fructus Amomi", dosage: "3g", role: "zuo", role_name: "Assistant", function: "Transforms dampness, promotes Qi movement, strengthens SP" },
      { pinyin: "Zhi Gan Cao", chinese: "炙甘草", latin: "Radix Glycyrrhizae Praeparata", dosage: "3g", role: "shi", role_name: "Envoy", function: "Tonifies SP Qi, harmonizes the formula" },
    ],

    clinical_picture: {
      summary: "A formula for Spleen Qi deficiency with dampness and rebellious Qi. The patient has indigestion with nausea and vomiting tendency, fullness after eating, food and water stagnation, low appetite, loose stools or diarrhea, subcardiac distension causing heavy breathing, anxiety-like disorder, and epigastric pain.",
      tongue: "Pale, swollen with thin white coating",
      pulse: "Slippery, weak",
      key_symptoms: [
        "Indigestion with nausea and more like vomiting",
        "Feeling of fullness after eating / food and water stagnation",
        "Low appetite",
        "Loose stools or diarrhea",
        "Subcardiac distension causing heavy breathing, anxiety like disorder",
        "Epigastric pain",
      ],
    },

    actions: [
      "Tonifies SP Qi",
      "Transforms dampness and phlegm",
      "Regulates Qi and descends rebellious Qi",
      "Harmonizes the Middle Jiao",
    ],

    pattern: "SP Xu + Rebellious Qi",

    contraindications: [
      "Yin deficiency with heat signs",
      "Excess heat patterns",
    ],

    modifications: [],
    differentiators: [],

    modern_applications: [
      "Chronic gastritis",
      "Functional dyspepsia",
      "Irritable bowel syndrome",
      "Nausea during pregnancy",
      "Post-illness digestive weakness",
    ],

    dpiRemarks: "Qi type formula. Ren shen tree. Xiang sha liu jun zi tang can be a post fever damp or phlegm condition. Post huang lian e jiao tang or wen dan tang. This is a shi condition of accumulation and rebellious qi, but the source of this condition is xu of the SP. See post treatment. Can be used during pregnancy.",
    treatmentTime: "1-6 months high to mid dosage. Post xiang sha liu jun zi tang. Liu jun zi tang and then si jun zi tang.",

    color: "#5f9ea0",
  },

  // ============================================================
  // YIN CHEN HAO TANG 茵陈蒿汤
  // ============================================================
  "yin-chen-hao-tang": {
    id: "yin-chen-hao-tang",
    name_pinyin: "Yīn Chén Hāo Tāng",
    name_chinese: "茵陈蒿汤",
    name_english: "Artemisia Scopariae Decoction",
    category: "Formulas that Clear Heat and Drain Dampness",
    source: "Shang Han Lun",

    composition: [
      { pinyin: "Yin Chen", chinese: "茵陈", latin: "Herba Artemisiae Scopariae", dosage: "18g", role: "jun", role_name: "King", function: "Clears damp-heat, relieves jaundice" },
      { pinyin: "Zhi Zi", chinese: "栀子", latin: "Fructus Gardeniae", dosage: "9g", role: "chen", role_name: "Minister", function: "Clears heat, drains dampness through urination" },
      { pinyin: "Da Huang", chinese: "大黄", latin: "Radix et Rhizoma Rhei", dosage: "6g", role: "zuo", role_name: "Assistant", function: "Drains heat, purges accumulation through stool" },
    ],

    clinical_picture: {
      summary: "A formula for damp-heat jaundice and liver infections. The patient presents with jaundice, abdominal distention mainly in the epigastric area, thirst, head sweating, pale stool, nausea or vomiting, yellow sclera, chest discomfort, edema, and constipation.",
      tongue: "No specific color or with yellow and greasy coating",
      pulse: "Slippery, rapid, deep and shi or rolling and rapid",
      key_symptoms: [
        "Jaundice / liver infection",
        "Abdominal distention, mainly epigastric",
        "Thirst",
        "Head sweating",
        "Pale stool",
        "Nausea/vomiting",
        "Yellow sclera",
        "Chest discomfort",
        "Edema",
        "Constipation",
      ],
    },

    actions: [
      "Clears damp-heat",
      "Relieves jaundice",
      "Treats liver infections",
    ],

    pattern: "Damp-Heat / LV Infections",

    contraindications: [
      "Yin jaundice (cold-damp type)",
      "Spleen Yang deficiency",
    ],

    modifications: [
      { condition: "Combine with Shao Yang formulas", herbs_add: "Use with Xiao Chai Hu Tang or Da Chai Hu Tang" },
      { condition: "No constipation", herbs_add: "Use Qin Jiao or Dong Gua Ren instead of Da Huang" },
    ],

    differentiators: [],

    modern_applications: [
      "Acute hepatitis",
      "Jaundice",
      "Cholecystitis",
      "Gallstones",
      "Liver cirrhosis",
      "Neonatal jaundice",
    ],

    dpiRemarks: "Qi type formula. Yin chen hao tang usually used as a formula in severe conditions of liver infection. At most condition use with SHAO YANG formulas.",
    treatmentTime: "1-3 months high to mid dosage. Post yin chen hao tang is xiao chai hu tang formulas.",

    color: "#8b8000",
  },

  // ============================================================
  // ER XIAN TANG 二仙汤
  // ============================================================
  "er-xian-tang": {
    id: "er-xian-tang",
    name_pinyin: "Èr Xiān Tāng",
    name_chinese: "二仙汤",
    name_english: "Cuculigo and Epimedium Combination",
    category: "Formulas that Tonify Yang",
    source: "Clinical Experience Formula",

    composition: [
      { pinyin: "Yin Yang Hua", chinese: "淫羊藿", latin: "Herba Epimedii", dosage: "9g", role: "jun", role_name: "King", function: "Tonifies Kidney Yang, strengthens bones" },
      { pinyin: "Xian Mao", chinese: "仙茅", latin: "Rhizoma Curculiginis", dosage: "9g", role: "jun", role_name: "King", function: "Warms Kidney Yang, expels cold-damp" },
      { pinyin: "Ba Ji Tian", chinese: "巴戟天", latin: "Radix Morindae Officinalis", dosage: "9g", role: "chen", role_name: "Minister", function: "Tonifies Kidney Yang, strengthens sinews" },
      { pinyin: "Dang Gui", chinese: "当归", latin: "Radix Angelicae Sinensis", dosage: "9g", role: "chen", role_name: "Minister", function: "Nourishes blood, regulates menses" },
      { pinyin: "Huang Bai", chinese: "黄柏", latin: "Cortex Phellodendri", dosage: "4.5g", role: "zuo", role_name: "Assistant", function: "Clears deficiency heat, drains Kidney fire" },
      { pinyin: "Zhi Mu", chinese: "知母", latin: "Rhizoma Anemarrhenae", dosage: "4.5g", role: "zuo", role_name: "Assistant", function: "Nourishes Yin, clears heat" },
    ],

    clinical_picture: {
      summary: "A formula for menopausal syndrome due to Kidney Yin and Yang deficiency. The patient presents with hot flashes and other menopausal symptoms. This formula simultaneously tonifies Kidney Yang while clearing deficiency heat.",
      tongue: "Red or normal",
      pulse: "Rapid, or normal, thin",
      key_symptoms: [
        "Menopause with hot flashes",
        "Menopause",
      ],
    },

    actions: [
      "Tonifies Kidney Yang",
      "Nourishes Kidney Yin",
      "Clears deficiency heat",
      "Regulates the Chong and Ren",
    ],

    pattern: "KD Yin & Yang Xu",

    contraindications: [
      "Excess heat patterns",
      "Damp-heat in the lower Jiao",
    ],

    modifications: [
      { condition: "Back and knee pain", herbs_add: "Du Zhong, Niu Xi" },
    ],

    differentiators: [],

    modern_applications: [
      "Menopausal syndrome",
      "Hot flashes",
      "Hypertension during menopause",
      "Irregular menstruation",
      "Infertility",
    ],

    color: "#b8860b",
  },

  // ============================================================
  // MA XING SHI GAN TANG 麻杏石甘汤
  // ============================================================
  "ma-xing-shi-gan-tang": {
    id: "ma-xing-shi-gan-tang",
    name_pinyin: "Má Xìng Shí Gān Tāng",
    name_chinese: "麻杏石甘汤",
    name_english: "Ma Huang and Apricot Seed Combination",
    category: "Formulas that Release the Exterior",
    source: "Shang Han Lun",

    composition: [
      { pinyin: "Ma Huang", chinese: "麻黄", latin: "Herba Ephedrae", dosage: "10g", role: "jun", role_name: "King", function: "Disperses Lung Qi, relieves wheezing and cough" },
      { pinyin: "Shi Gao", chinese: "石膏", latin: "Gypsum Fibrosum", dosage: "30g", role: "chen", role_name: "Minister", function: "Clears Lung heat, generates fluids" },
      { pinyin: "Xing Ren", chinese: "杏仁", latin: "Semen Armeniacae", dosage: "10g", role: "zuo", role_name: "Assistant", function: "Descends Lung Qi, stops cough" },
      { pinyin: "Gan Cao", chinese: "甘草", latin: "Radix Glycyrrhizae", dosage: "6g", role: "shi", role_name: "Envoy", function: "Harmonizes the formula, moderates Ma Huang" },
    ],

    clinical_picture: {
      summary: "A formula for Lung heat with wheezing and cough. The patient presents with wheezing, cough with thirst, headache, vertigo, dizziness, and asthma. The pulse is rapid and flooding, indicating significant heat in the Lung.",
      tongue: "Red & red tip",
      pulse: "Rapid, flooding",
      key_symptoms: [
        "Wheezing, cough with thirst",
        "Headache",
        "Vertigo",
        "Dizziness",
        "Asthma",
      ],
    },

    actions: [
      "Clears wind-heat from the Lung",
      "Relieves wheezing and asthma",
      "Descends Lung Qi",
    ],

    pattern: "Lung Heat + Wheezing",

    contraindications: [
      "Wind-cold without heat signs",
      "Lung Qi deficiency wheezing",
    ],

    modifications: [],

    differentiators: [
      { formula: "Xie Bai San", difference: "Ma Xing Shi Gan Tang = Clear wind heat from the LU, treat Asthma. Dry throat. Flushed. Rapid strong pulse. Slight dry cough. Xie Bai San = LU fire with mild LV fire. Cough due to Yin Xu and Shi LU heat. Cough with dry throat." },
      { formula: "Ding Chuan Tang", difference: "Ma Xing Shi Gan Tang = Clear wind heat from the LU, treat Asthma. Ding Chuan Tang = Regulate LU qi, treat Asthma with cough, clear heat & transforms phlegm. Mild heat with phlegm." },
    ],

    modern_applications: [
      "Bronchial asthma",
      "Acute bronchitis",
      "Pneumonia",
      "Upper respiratory infection with cough",
      "Whooping cough",
    ],

    color: "#e54b4b",
  },

  // ============================================================
  // DING CHUAN TANG 定喘汤
  // ============================================================
  "ding-chuan-tang": {
    id: "ding-chuan-tang",
    name_pinyin: "Dìng Chuǎn Tāng",
    name_chinese: "定喘汤",
    name_english: "Ma-Huang and Ginko Combination",
    category: "Formulas that Relieve Coughing and Wheezing",
    source: "She Sheng Zhong Miao Fang",

    composition: [
      { pinyin: "Bai Guo", chinese: "白果", latin: "Semen Ginkgo", dosage: "9g", role: "jun", role_name: "King", function: "Astringes Lung Qi, stops wheezing, transforms phlegm" },
      { pinyin: "Ma Huang", chinese: "麻黄", latin: "Herba Ephedrae", dosage: "9g", role: "jun", role_name: "King", function: "Disperses Lung Qi, relieves wheezing" },
      { pinyin: "Sang Bai Pi", chinese: "桑白皮", latin: "Cortex Mori", dosage: "9g", role: "chen", role_name: "Minister", function: "Drains Lung heat, stops cough" },
      { pinyin: "Huang Qin", chinese: "黄芩", latin: "Radix Scutellariae", dosage: "4.5g", role: "chen", role_name: "Minister", function: "Clears Lung heat, dries dampness" },
      { pinyin: "Xing Ren", chinese: "杏仁", latin: "Semen Armeniacae", dosage: "4.5g", role: "zuo", role_name: "Assistant", function: "Descends Lung Qi, stops cough" },
      { pinyin: "Ban Xia", chinese: "半夏", latin: "Rhizoma Pinelliae", dosage: "9g", role: "zuo", role_name: "Assistant", function: "Dries dampness, transforms phlegm" },
      { pinyin: "Kuan Dong Hua", chinese: "款冬花", latin: "Flos Farfarae", dosage: "9g", role: "zuo", role_name: "Assistant", function: "Moistens Lung, stops cough" },
      { pinyin: "Zi Su Zi", chinese: "紫苏子", latin: "Fructus Perillae", dosage: "6g", role: "zuo", role_name: "Assistant", function: "Descends Qi, transforms phlegm" },
      { pinyin: "Gan Cao", chinese: "甘草", latin: "Radix Glycyrrhizae", dosage: "3g", role: "shi", role_name: "Envoy", function: "Harmonizes the formula" },
    ],

    clinical_picture: {
      summary: "A formula for asthma and wheezing with yellow phlegm due to phlegm-heat obstructing the Lung. The patient presents with wheezing and coughing with yellow phlegm, asthma, and acute or chronic bronchitis symptoms.",
      tongue: "Sticky yellow coating",
      pulse: "Slippery and rapid",
      key_symptoms: [
        "Wheezing and coughing with yellow phlegm",
        "Asthma",
        "Acute or chronic bronchitis",
      ],
    },

    actions: [
      "Regulates Lung Qi",
      "Descends rebellious Qi",
      "Clears heat and transforms hot phlegm",
      "Relieves wheezing",
    ],

    pattern: "Asthma + Yellow Phlegm",

    contraindications: [
      "Cold phlegm asthma",
      "Lung Qi deficiency wheezing without phlegm-heat",
    ],

    modifications: [
      { condition: "Phlegm", herbs_add: "Er Chen Tang" },
    ],

    differentiators: [
      { formula: "Su Zi Jiang Qi Tang", difference: "Ding Chuan Tang = Regulate LU & transforms hot phlegm. Su Zi Jiang Qi Tang = Regulate LU & transforms Cold Phlegm." },
    ],

    modern_applications: [
      "Bronchial asthma",
      "Acute bronchitis",
      "Chronic bronchitis",
      "Chronic obstructive pulmonary disease",
    ],

    color: "#e57a4b",
  },

  // ============================================================
  // SU ZI JIANG QI TANG 苏子降气汤
  // ============================================================
  "su-zi-jiang-qi-tang": {
    id: "su-zi-jiang-qi-tang",
    name_pinyin: "Sū Zǐ Jiàng Qì Tāng",
    name_chinese: "苏子降气汤",
    name_english: "Perilla Fruit Combination",
    category: "Formulas that Relieve Coughing and Wheezing",
    source: "Tai Ping Hui Min He Ji Ju Fang",

    composition: [
      { pinyin: "Su Zi", chinese: "紫苏子", latin: "Fructus Perillae", dosage: "9g", role: "jun", role_name: "King", function: "Descends Lung Qi, transforms phlegm, stops wheezing" },
      { pinyin: "Ban Xia", chinese: "半夏", latin: "Rhizoma Pinelliae", dosage: "8g", role: "chen", role_name: "Minister", function: "Dries dampness, transforms phlegm, descends rebellious Qi" },
      { pinyin: "Hou Po", chinese: "厚朴", latin: "Cortex Magnoliae Officinalis", dosage: "6g", role: "zuo", role_name: "Assistant", function: "Promotes Qi movement, transforms dampness" },
      { pinyin: "Qian Hu", chinese: "前胡", latin: "Radix Peucedani", dosage: "6g", role: "zuo", role_name: "Assistant", function: "Descends Qi, expels phlegm" },
      { pinyin: "Chen Pi", chinese: "陈皮", latin: "Pericarpium Citri Reticulatae", dosage: "6g", role: "zuo", role_name: "Assistant", function: "Regulates Qi, dries dampness" },
      { pinyin: "Rou Gui", chinese: "肉桂", latin: "Cortex Cinnamomi", dosage: "6g", role: "zuo", role_name: "Assistant", function: "Warms Kidney Yang, guides Qi downward" },
      { pinyin: "Dang Gui", chinese: "当归", latin: "Radix Angelicae Sinensis", dosage: "6g", role: "zuo", role_name: "Assistant", function: "Nourishes blood, moistens dryness" },
      { pinyin: "Zhi Gan Cao", chinese: "炙甘草", latin: "Radix Glycyrrhizae Praeparata", dosage: "6g", role: "shi", role_name: "Envoy", function: "Harmonizes the formula" },
      { pinyin: "Sheng Jiang", chinese: "生姜", latin: "Rhizoma Zingiberis Recens", dosage: "6g", role: "shi", role_name: "Envoy", function: "Warms the Middle, assists in transforming phlegm" },
    ],

    clinical_picture: {
      summary: "A formula for cold phlegm obstruction in the Lung with Kidney Yang deficiency. The patient presents with cough and dyspnea, shortness of breath, asthma or wheezing, profuse saliva or sputum, epigastric fullness, weakness of feet and body, and dizziness or vertigo.",
      tongue: "Sticky white coating",
      pulse: "Slippery, weak",
      key_symptoms: [
        "Cough with dyspnea",
        "Shortness of breath",
        "Asthma/wheezing",
        "Profuse saliva/sputum",
        "Epigastric fullness",
        "Weakness of feet and body",
        "Dizziness and/or vertigo",
      ],
    },

    actions: [
      "Descends Qi and calms wheezing",
      "Warms and transforms cold phlegm",
      "Warms Kidney Yang",
    ],

    pattern: "Cold Phlegm Asthma",

    contraindications: [
      "Phlegm-heat cough and wheezing",
      "Yin deficiency with dry cough",
    ],

    modifications: [
      { condition: "Qi xu", herbs_add: "Liu Jun Zi Tang. See Chuan Liu Jun Zi Tang" },
    ],

    differentiators: [],

    modern_applications: [
      "Chronic bronchitis",
      "Bronchial asthma",
      "Emphysema",
      "Chronic obstructive pulmonary disease",
    ],

    color: "#4a9b8e",
  },

  // ============================================================
  // CANG ER ZI SAN 苍耳子散
  // ============================================================
  "cang-er-zi-san": {
    id: "cang-er-zi-san",
    name_pinyin: "Cāng Ěr Zǐ Sǎn",
    name_chinese: "苍耳子散",
    name_english: "Xanthium Powder",
    category: "Formulas that Release the Exterior",
    source: "Ji Sheng Fang",

    composition: [
      { pinyin: "Cang Er Zi", chinese: "苍耳子", latin: "Fructus Xanthii", dosage: "10g", role: "jun", role_name: "King", function: "Opens nasal passages, expels wind-dampness" },
      { pinyin: "Xin Yi", chinese: "辛夷", latin: "Flos Magnoliae", dosage: "6g", role: "chen", role_name: "Minister", function: "Opens nasal passages, expels wind-cold" },
      { pinyin: "Bai Zhi", chinese: "白芷", latin: "Radix Angelicae Dahuricae", dosage: "6g", role: "zuo", role_name: "Assistant", function: "Expels wind, opens nasal passages, alleviates pain" },
      { pinyin: "Bo He", chinese: "薄荷", latin: "Herba Menthae", dosage: "6g", role: "zuo", role_name: "Assistant", function: "Disperses wind-heat, clears the head" },
    ],

    clinical_picture: {
      summary: "A formula for wind-cold affecting the nasal passages, causing nasal congestion, sinusitis, or rhinitis. This is a Tai Yang level formula primarily used for common cold with nasal symptoms.",
      tongue: "White coating",
      pulse: "Floating",
      key_symptoms: [
        "Common cold and nasal congestion",
        "Sinusitis",
        "Rhinitis",
      ],
    },

    actions: [
      "Opens nasal passages",
      "Expels wind",
      "Alleviates nasal congestion",
    ],

    pattern: "Nasal Congestion / Tai Yang",

    contraindications: [
      "Yin deficiency with dry nasal passages",
      "Blood heat nosebleeds",
    ],

    modifications: [
      { condition: "Weak immune, rhinitis", herbs_add: "Yu Ping Feng San" },
      { condition: "LU heat", herbs_add: "Di Gu Pi, Sang Bai Pi" },
      { condition: "Sinusitis fever and inflammation", herbs_add: "Jin Yin Hua, E Bu Shi Cao. Or with Yin Qiao San" },
    ],

    differentiators: [],

    modern_applications: [
      "Allergic rhinitis",
      "Sinusitis",
      "Nasal polyps",
      "Common cold with nasal congestion",
    ],

    color: "#6b9e50",
  },

  // ============================================================
  // BU FEI TANG 补肺汤
  // ============================================================
  "bu-fei-tang": {
    id: "bu-fei-tang",
    name_pinyin: "Bǔ Fèi Tāng",
    name_chinese: "补肺汤",
    name_english: "Astragalus and Aster Combination",
    category: "Formulas that Tonify Qi",
    source: "Yong Lei Qian Fang",

    composition: [
      { pinyin: "Huang Qi", chinese: "黄芪", latin: "Radix Astragali", dosage: "30g", role: "jun", role_name: "King", function: "Tonifies Lung Qi, strengthens Wei Qi" },
      { pinyin: "Ren Shen", chinese: "人参", latin: "Radix Ginseng", dosage: "10g", role: "chen", role_name: "Minister", function: "Strongly tonifies Lung and SP Qi" },
      { pinyin: "Zi Wan", chinese: "紫菀", latin: "Radix Asteris", dosage: "10g", role: "zuo", role_name: "Assistant", function: "Descends Lung Qi, resolves phlegm, stops cough" },
      { pinyin: "Sang Bai Pi", chinese: "桑白皮", latin: "Cortex Mori", dosage: "12g", role: "zuo", role_name: "Assistant", function: "Drains Lung heat, calms wheezing" },
      { pinyin: "Wu Wei Zi", chinese: "五味子", latin: "Fructus Schisandrae", dosage: "6g", role: "zuo", role_name: "Assistant", function: "Astringes Lung Qi, stops cough" },
      { pinyin: "Shu Di Huang", chinese: "熟地黄", latin: "Radix Rehmanniae Praeparata", dosage: "12g", role: "zuo", role_name: "Assistant", function: "Nourishes Kidney Yin, tonifies Jing" },
    ],

    clinical_picture: {
      summary: "A formula for Lung Qi deficiency with cough, asthma, shortness of breath, weakness, low voice, low immune condition, and spontaneous sweating. The patient has a weak constitution with chronic Lung Qi insufficiency.",
      tongue: "Pale, thin white coating",
      pulse: "Weak/thin",
      key_symptoms: [
        "Cough/asthma",
        "Shortness of breath",
        "Weakness",
        "Low voice",
        "Low immune condition",
        "Spontaneous sweating",
      ],
    },

    actions: [
      "Tonifies Lung Qi",
      "Stops cough and wheezing",
      "Strengthens Wei Qi",
    ],

    pattern: "Lung Qi Xu",

    contraindications: [
      "Excess patterns with phlegm-heat",
      "Acute wind-cold or wind-heat invasion",
    ],

    modifications: [
      { condition: "Qi xu", herbs_add: "Si Jun Zi Tang" },
      { condition: "Spontaneous sweating", herbs_add: "Mu Li Tang" },
      { condition: "Asthma", herbs_add: "Xing Ren, Hou Po" },
    ],

    differentiators: [],

    modern_applications: [
      "Chronic bronchitis",
      "Emphysema",
      "Chronic obstructive pulmonary disease",
      "Immune deficiency",
      "Chronic fatigue with respiratory weakness",
    ],

    color: "#4b8e6b",
  },

  // ============================================================
  // BEI MU GUA LOU SAN 贝母瓜蒌散
  // ============================================================
  "bei-mu-gua-lou-san": {
    id: "bei-mu-gua-lou-san",
    name_pinyin: "Bèi Mǔ Guā Lóu Sǎn",
    name_chinese: "贝母瓜蒌散",
    name_english: "Fritillaria and Trichosanthes Formula",
    category: "Formulas that Treat Phlegm",
    source: "Yi Xue Xin Wu",

    composition: [
      { pinyin: "Chuan Bei Mu", chinese: "川贝母", latin: "Bulbus Fritillariae Cirrhosae", dosage: "4.5g", role: "jun", role_name: "King", function: "Clears heat, moistens the Lungs, transforms phlegm" },
      { pinyin: "Gua Lou Ren", chinese: "瓜蒌仁", latin: "Semen Trichosanthis", dosage: "3g", role: "chen", role_name: "Minister", function: "Clears heat, transforms phlegm, moistens the Lungs" },
      { pinyin: "Fu Ling", chinese: "茯苓", latin: "Poria", dosage: "2.4g", role: "zuo", role_name: "Assistant", function: "Strengthens Spleen, leaches dampness" },
      { pinyin: "Ju Hong", chinese: "橘红", latin: "Exocarpium Citri Rubrum", dosage: "2.4g", role: "zuo", role_name: "Assistant", function: "Regulates Qi, dries dampness, transforms phlegm" },
      { pinyin: "Tian Hua Fen", chinese: "天花粉", latin: "Radix Trichosanthis", dosage: "2.4g", role: "zuo", role_name: "Assistant", function: "Clears heat, generates fluids, moistens dryness" },
      { pinyin: "Jie Geng", chinese: "桔梗", latin: "Radix Platycodonis", dosage: "2.4g", role: "shi", role_name: "Envoy", function: "Opens and disseminates Lung Qi, guides herbs upward" },
    ],

    clinical_picture: {
      summary: "A formula for dryness in the Lung with phlegm that is very dry and sticky, making it hard to expectorate. The patient has a dry cough with wheezing and dryness of the mouth and throat.",
      tongue: "Red, dry, yellow coating",
      pulse: "Empty, thin or slippery",
      key_symptoms: [
        "Cough with very dry and sticky phlegm that is hard to expectorate",
        "Wheezing",
        "Dry mouth and throat",
      ],
    },

    actions: [
      "Moistens the Lungs",
      "Clears heat",
      "Regulates the Qi and transforms phlegm",
    ],

    pattern: "Lung Dryness with Phlegm-Heat",

    contraindications: [
      "Cold-phlegm patterns",
      "Spleen Yang deficiency with watery phlegm",
    ],

    differentiators: [
      { formula: "Qing Qi Hua Tan Wan", difference: "Bei Mu Gua Lou San = Dryness in the Lung, Severe sticky dry cough. vs Qing Qi Hua Tan Wan = Phlegm heat in the Lung, Cough with yellow phlegm that hard to expectorant." },
    ],

    modifications: [],

    modern_applications: [
      "Dry cough with sticky phlegm",
      "Chronic bronchitis with dry pattern",
      "Wheezing due to Lung dryness",
    ],

    color: "#c4a94d",
  },

  // ============================================================
  // CHUAN XIONG CHA TIAO SAN 川芎茶调散
  // ============================================================
  "chuan-xiong-cha-tiao-san": {
    id: "chuan-xiong-cha-tiao-san",
    name_pinyin: "Chuān Xiōng Chá Tiáo Sǎn",
    name_chinese: "川芎茶调散",
    name_english: "Ligusticum and Tea Formula",
    category: "Formulas that Release the Exterior",
    source: "Tai Ping Hui Min He Ji Ju Fang",

    composition: [
      { pinyin: "Chuan Xiong", chinese: "川芎", latin: "Rhizoma Chuanxiong", dosage: "10g", role: "jun", role_name: "King", function: "Expels wind, alleviates pain, moves Blood and Qi" },
      { pinyin: "Qiang Huo", chinese: "羌活", latin: "Rhizoma et Radix Notopterygii", dosage: "10g", role: "chen", role_name: "Minister", function: "Releases exterior, disperses wind-cold, alleviates pain" },
      { pinyin: "Bai Zhi", chinese: "白芷", latin: "Radix Angelicae Dahuricae", dosage: "10g", role: "chen", role_name: "Minister", function: "Expels wind, alleviates pain, opens nasal passages" },
      { pinyin: "Xi Xin", chinese: "细辛", latin: "Herba Asari", dosage: "6g", role: "zuo", role_name: "Assistant", function: "Disperses wind-cold, alleviates pain, opens orifices" },
      { pinyin: "Jing Jie", chinese: "荆芥", latin: "Herba Schizonepetae", dosage: "10g", role: "zuo", role_name: "Assistant", function: "Releases exterior, expels wind" },
      { pinyin: "Fang Feng", chinese: "防风", latin: "Radix Saposhnikoviae", dosage: "10g", role: "zuo", role_name: "Assistant", function: "Releases exterior, expels wind, alleviates pain" },
      { pinyin: "Bo He", chinese: "薄荷", latin: "Herba Menthae", dosage: "6g", role: "zuo", role_name: "Assistant", function: "Disperses wind-heat, clears the head" },
      { pinyin: "Cha Ye", chinese: "茶叶", latin: "Folium Camelliae Sinensis", dosage: "appropriate amount", role: "shi", role_name: "Envoy", function: "Clears the head, restrains the ascending nature of wind herbs" },
      { pinyin: "Gan Cao", chinese: "甘草", latin: "Radix Glycyrrhizae", dosage: "6g", role: "shi", role_name: "Envoy", function: "Harmonizes all herbs" },
    ],

    clinical_picture: {
      summary: "The primary formula for headache due to external wind-cold. Disperses wind and alleviates pain. Commonly used for various types of headaches including vertex pain, temporal headache, and headaches from common cold.",
      tongue: "Thin white coating",
      pulse: "Floating",
      key_symptoms: [
        "Headache due to external wind cold",
        "Chills",
        "Nasal congestion",
        "Vertex pain",
        "Dizziness",
        "Neck tension",
      ],
    },

    actions: [
      "Disperses wind",
      "Alleviates pain",
    ],

    pattern: "External Wind-Cold with Headache",

    contraindications: [
      "Headache due to Liver Yang rising (deficiency pattern)",
      "Headache due to Blood deficiency",
      "Yin deficiency headache",
    ],

    differentiators: [],

    modifications: [
      { condition: "Tai yang headache", herbs_add: "Gao Ben" },
      { condition: "Shao yang headache", herbs_add: "Chai Hu" },
      { condition: "Rhinitis", herbs_add: "Cang Er Zi, Xin Yi Hua. Or Cang Er Zi San" },
      { condition: "Headache due to wind heat", herbs_add: "Ju Hua, Jiang Cao, Zhi Gan Cao. See Ju Hua Cha Tiao San" },
    ],

    modern_applications: [
      "Allergy",
      "Common cold with headache",
      "Trigeminal neuralgia (TN)",
      "Post-concussion headache",
      "Migraine due to wind-cold",
      "Sinusitis headache",
    ],

    color: "#5a8fbf",
  },

  // ============================================================
  // DING ZHI WAN 定志丸
  // ============================================================
  "ding-zhi-wan": {
    id: "ding-zhi-wan",
    name_pinyin: "Dìng Zhì Wán",
    name_chinese: "定志丸",
    name_english: "Settle the Emotions Pill",
    category: "Formulas that Calm the Spirit",
    source: "Bei Ji Qian Jin Yao Fang",

    composition: [
      { pinyin: "Ren Shen", chinese: "人参", latin: "Radix Ginseng", dosage: "10g", role: "jun", role_name: "King", function: "Strongly tonifies Heart and Spleen Qi" },
      { pinyin: "Fu Ling", chinese: "茯苓", latin: "Poria", dosage: "10g", role: "chen", role_name: "Minister", function: "Strengthens Spleen, calms the spirit" },
      { pinyin: "Shi Chang Pu", chinese: "石菖蒲", latin: "Rhizoma Acori Tatarinowii", dosage: "6g", role: "zuo", role_name: "Assistant", function: "Opens the orifices, calms the Shen, transforms phlegm" },
      { pinyin: "Yuan Zhi", chinese: "远志", latin: "Radix Polygalae", dosage: "6g", role: "zuo", role_name: "Assistant", function: "Calms the Shen, expels phlegm from the Heart" },
    ],

    clinical_picture: {
      summary: "A Qi formula for Heart and Spleen Qi deficiency manifesting primarily on the mental-emotional level. The patient presents with depression, worry, timidity, and restlessness — a Qi Xu condition with prominent mental aspects.",
      tongue: "Pale",
      pulse: "Weak",
      key_symptoms: [
        "Depression",
        "Post natal depression",
        "Worry",
        "Timidity, restlessness, fearfulness",
        "Palpitation (weak type)",
        "Shortness of breath",
        "Fatigue",
        "Spontaneous sweating",
        "Insomnia",
        "Frequent waking",
        "Unable to fall back to sleep",
      ],
    },

    actions: [
      "Tonifies Heart Qi and Spleen Qi",
      "Calms the Shen",
      "Treats timidity",
    ],

    pattern: "Heart and Spleen Qi Xu (mental aspect)",

    contraindications: [
      "Excess heat patterns with irritability",
      "Liver Fire rising",
      "Yin deficiency with empty heat",
    ],

    differentiators: [
      { formula: "Si Jun Zi Tang", difference: "Ding Zhi Wan = SP and H qi xu on a mental aspect. vs Si Jun Zi Tang = SP qi xu, physical aspect." },
    ],

    modifications: [
      { condition: "Mild LV qi yu with irritation", herbs_add: "He Huan Pi" },
      { condition: "Spontaneous sweating", herbs_add: "Gan Mai Da Zao Tang formula or Ma Huang Gen, Fu Xiao Mai, Mu Li" },
    ],

    modern_applications: [
      "Depression",
      "Post natal depression",
      "Anxiety with fatigue",
      "Insomnia due to Qi deficiency",
      "Palpitations (weak type)",
    ],

    dpiRemarks: "This is a qi formula. Ding zhi wan it's a qi xu condition, when the fucus on the mental aspect of it, most common depression. Physically will give the same diagnostic picture of si jun zi tang.",
    treatmentTime: "3 to 6 months mid to low dosage. High dosage will make the stool harder.",

    color: "#c45a7d",
  },

  // ============================================================
  // HUO XIANG ZHENG QI SAN 藿香正气散
  // ============================================================
  "huo-xiang-zheng-qi-san": {
    id: "huo-xiang-zheng-qi-san",
    name_pinyin: "Huò Xiāng Zhèng Qì Sǎn",
    name_chinese: "藿香正气散",
    name_english: "Agastache Formula",
    category: "Formulas that Expel Dampness",
    source: "Tai Ping Hui Min He Ji Ju Fang",

    composition: [
      { pinyin: "Huo Xiang", chinese: "藿香", latin: "Herba Agastachis", dosage: "9g", role: "jun", role_name: "King", function: "Aromatically transforms dampness, harmonizes the middle Jiao, releases the exterior" },
      { pinyin: "Zi Su Ye", chinese: "紫苏叶", latin: "Folium Perillae", dosage: "3g", role: "chen", role_name: "Minister", function: "Releases the exterior, regulates Qi" },
      { pinyin: "Bai Zhi", chinese: "白芷", latin: "Radix Angelicae Dahuricae", dosage: "3g", role: "chen", role_name: "Minister", function: "Expels wind-cold, opens nasal passages" },
      { pinyin: "Ban Xia", chinese: "半夏", latin: "Rhizoma Pinelliae", dosage: "6g", role: "zuo", role_name: "Assistant", function: "Dries dampness, transforms phlegm, descends rebellious Qi" },
      { pinyin: "Chen Pi", chinese: "陈皮", latin: "Pericarpium Citri Reticulatae", dosage: "6g", role: "zuo", role_name: "Assistant", function: "Regulates Qi, dries dampness" },
      { pinyin: "Hou Po", chinese: "厚朴", latin: "Cortex Magnoliae Officinalis", dosage: "6g", role: "zuo", role_name: "Assistant", function: "Moves Qi, transforms dampness, reduces distention" },
      { pinyin: "Da Fu Pi", chinese: "大腹皮", latin: "Pericarpium Arecae", dosage: "3g", role: "zuo", role_name: "Assistant", function: "Moves Qi downward, reduces distention" },
      { pinyin: "Jie Geng", chinese: "桔梗", latin: "Radix Platycodonis", dosage: "6g", role: "zuo", role_name: "Assistant", function: "Opens and disseminates Lung Qi" },
      { pinyin: "Bai Zhu", chinese: "白术", latin: "Rhizoma Atractylodis Macrocephalae", dosage: "6g", role: "zuo", role_name: "Assistant", function: "Strengthens Spleen, dries dampness" },
      { pinyin: "Fu Ling", chinese: "茯苓", latin: "Poria", dosage: "6g", role: "zuo", role_name: "Assistant", function: "Strengthens Spleen, leaches dampness" },
      { pinyin: "Zhi Gan Cao", chinese: "炙甘草", latin: "Radix Glycyrrhizae Praeparata", dosage: "7.5g", role: "shi", role_name: "Envoy", function: "Harmonizes all herbs, tonifies Qi" },
      { pinyin: "Da Zao", chinese: "大枣", latin: "Fructus Jujubae", dosage: "1pc", role: "shi", role_name: "Envoy", function: "Tonifies Spleen Qi, harmonizes" },
      { pinyin: "Sheng Jiang", chinese: "生姜", latin: "Rhizoma Zingiberis Recens", dosage: "6g", role: "shi", role_name: "Envoy", function: "Warms the middle Jiao, transforms dampness" },
    ],

    clinical_picture: {
      summary: "A formula for wind-cold with internal dampness affecting the middle Jiao. The patient presents with gastrointestinal symptoms — abdominal distention, nausea, vomiting, diarrhea, and weakness after eating with indigestion. Commonly used for gastric flu or common cold with digestive involvement.",
      tongue: "Sticky white coating",
      pulse: "Soggy or slippery",
      key_symptoms: [
        "Abdominal distention",
        "Nausea, might lead to vomiting",
        "Abdominal pain",
        "Diarrhea",
        "Weakness mainly after eating with indigestion",
        "Gastric flu / common cold",
      ],
    },

    actions: [
      "Dispels damp phlegm",
      "Regulates the Stomach Qi",
      "Mildly clears heat",
    ],

    pattern: "Wind-Cold with Internal Dampness",

    contraindications: [
      "Yin deficiency with heat signs",
      "Dry patterns without dampness",
    ],

    differentiators: [
      { formula: "Ping Wei San", difference: "Huo Xiang Zheng Qi Tang = Strong effect of regulating qi, transforming damp & tonify the middle Jiao. Wind cold internal damp. vs Ping Wei San = Strong reaction on drying dampness, activating the SP but do not Releasing the exterior. Retention of damp in the SP & ST." },
    ],

    modifications: [],

    modern_applications: [
      "Gastric flu",
      "Acute gastroenteritis",
      "Common cold with digestive symptoms",
      "Food poisoning (mild)",
      "Motion sickness",
    ],

    color: "#8b6e4b",
  },

  // ============================================================
  // JU PI ZHU RU TANG 橘皮竹茹汤
  // ============================================================
  "ju-pi-zhu-ru-tang": {
    id: "ju-pi-zhu-ru-tang",
    name_pinyin: "Jú Pí Zhú Rú Tāng",
    name_chinese: "橘皮竹茹汤",
    name_english: "Aurantium and Bamboo Combination",
    category: "Formulas that Regulate Qi",
    source: "Jin Gui Yao Lue",

    composition: [
      { pinyin: "Zhu Ru", chinese: "竹茹", latin: "Caulis Bambusae in Taenia", dosage: "12g", role: "jun", role_name: "King", function: "Clears heat, transforms phlegm, stops vomiting and hiccups" },
      { pinyin: "Chen Pi", chinese: "陈皮", latin: "Pericarpium Citri Reticulatae", dosage: "12g", role: "jun", role_name: "King", function: "Regulates Qi, directs rebellious Qi downward, dries dampness" },
      { pinyin: "Ren Shen", chinese: "人参", latin: "Radix Ginseng", dosage: "3g", role: "chen", role_name: "Minister", function: "Tonifies Stomach Qi, augments the source Qi" },
      { pinyin: "Sheng Jiang", chinese: "生姜", latin: "Rhizoma Zingiberis Recens", dosage: "9g", role: "zuo", role_name: "Assistant", function: "Warms the Stomach, descends rebellious Qi, stops vomiting" },
      { pinyin: "Da Zao", chinese: "大枣", latin: "Fructus Jujubae", dosage: "5pc", role: "zuo", role_name: "Assistant", function: "Tonifies Spleen and Stomach Qi" },
      { pinyin: "Zhi Gan Cao", chinese: "炙甘草", latin: "Radix Glycyrrhizae Praeparata", dosage: "6g", role: "shi", role_name: "Envoy", function: "Harmonizes all herbs, tonifies the middle Jiao" },
    ],

    clinical_picture: {
      summary: "A formula for hiccough and belching due to heat and weakness of the Stomach. The rebellious Stomach Qi rises upward causing hiccups, and in severe cases nausea or vomiting. The patient has a weak constitution with heat signs — dry mouth and thirst.",
      tongue: "Red and dry",
      pulse: "Thin and rapid",
      key_symptoms: [
        "Hiccough and belching (due to heat and weakness of the Stomach)",
        "Nausea or vomiting in severe cases",
        "Dry mouth",
        "Thirst",
      ],
    },

    actions: [
      "Directs rebellious Qi downward",
      "Stops hiccup",
      "Augments the Qi",
      "Clears heat",
    ],

    pattern: "Stomach Qi Xu with Heat and Rebellious Qi",

    contraindications: [
      "Hiccups due to excess cold",
      "Strong excess heat patterns",
    ],

    differentiators: [
      { formula: "Ding Xiang Shi Di Tang", difference: "Ju Pi Zhu Ru Tang = Weak condition with rebellious ST Qi and heat. vs Ding Xiang Shi Di Tang = Weak condition with rebellious ST Qi and cold." },
    ],

    modifications: [
      { condition: "Fever shi", herbs_add: "Huang Lian" },
      { condition: "Qi xu", herbs_add: "Ren Shen" },
      { condition: "Phlegm", herbs_add: "Ban Xia, Fu Ling. Er Chen Tang" },
      { condition: "Hiccups", herbs_add: "Shi Di, or Shi Di Tang (Shi Di, Ding Xiang)" },
      { condition: "Hiccups with phlegm", herbs_add: "Ban Xia, Fu Ling, Gua Lou Ren" },
    ],

    modern_applications: [
      "Persistent hiccups",
      "Nausea and vomiting (deficiency-heat type)",
      "Gastroesophageal reflux",
      "Post-surgical hiccups",
      "Pregnancy-related nausea",
    ],

    color: "#a0875a",
  },

  // ============================================================
  // TIAN TAI WU YAO SAN 天台乌药散
  // ============================================================
  "tian-tai-wu-yao-san": {
    id: "tian-tai-wu-yao-san",
    name_pinyin: "Tiān Tái Wū Yào Sǎn",
    name_chinese: "天台乌药散",
    name_english: "Top Quality Lindera Powder",
    category: "Formulas that Regulate Qi",
    source: "Yi Xue Fa Ming",

    composition: [
      { pinyin: "Wu Yao", chinese: "乌药", latin: "Radix Linderae", dosage: "10g", role: "jun", role_name: "King", function: "Promotes the movement of Qi, warms the Kidneys, disperses cold" },
      { pinyin: "Mu Xiang", chinese: "木香", latin: "Radix Aucklandiae", dosage: "10g", role: "chen", role_name: "Minister", function: "Promotes the movement of Qi, alleviates pain" },
      { pinyin: "Xiao Hui Xiang", chinese: "小茴香", latin: "Fructus Foeniculi", dosage: "10g", role: "chen", role_name: "Minister", function: "Warms the Liver channel, disperses cold, alleviates pain" },
      { pinyin: "Qing Pi", chinese: "青皮", latin: "Pericarpium Citri Reticulatae Viride", dosage: "10g", role: "zuo", role_name: "Assistant", function: "Spreads Liver Qi, breaks up stagnant Qi" },
      { pinyin: "Gao Liang Jiang", chinese: "高良姜", latin: "Rhizoma Alpiniae Officinarum", dosage: "10g", role: "zuo", role_name: "Assistant", function: "Warms the middle, disperses cold, alleviates pain" },
      { pinyin: "Bing Lang", chinese: "槟榔", latin: "Semen Arecae", dosage: "10g", role: "zuo", role_name: "Assistant", function: "Promotes the movement of Qi, reduces accumulation" },
      { pinyin: "Chuan Lian Zi", chinese: "川楝子", latin: "Fructus Toosendan", dosage: "10g", role: "zuo", role_name: "Assistant", function: "Promotes the movement of Qi, clears Liver heat, alleviates pain" },
      { pinyin: "Ba Dou", chinese: "巴豆", latin: "Fructus Crotonis", dosage: "10g", role: "shi", role_name: "Envoy", function: "Warms the interior, unblocks, expels cold accumulation" },
    ],

    clinical_picture: {
      summary: "Regulate LV Qi treat worm LV meridian, treat hernia and pain. Hernia due to cold stagnation of the LV meridian. Testicular pain with swollen or distention. Abdominal pain, mobile abdominal mass.",
      tongue: "Normal",
      pulse: "Wiry",
      key_symptoms: [
        "Hernia due to cold stagnation of the LV meridian",
        "Testicular pain with swollen or distention",
        "Abdominal pain",
        "Mobile abdominal mass",
      ],
    },

    actions: [
      "Promotes the movement of Qi",
      "Scatters cold",
      "Alleviates pain",
      "Treats hernia",
    ],

    pattern: "Cold stagnation of the Liver meridian with hernia",

    contraindications: [
      "Hernia due to damp-heat",
      "Yin deficiency with heat signs",
    ],

    differentiators: [
      { formula: "Dao Qi Tang", difference: "Tian tai wu yao san = cold hernia and pain, Testicular swollen and pain. More qi stagnation. vs Dao qi tang = simple version of tian tai wu yao san (chuan lian zi, mu xiang, xiao hui xiang, wu zhu yu). More shi cold and mainly hernia that effect the testicular area." },
    ],

    modifications: [],

    modern_applications: [
      "Inguinal hernia",
      "Testicular pain",
      "Epididymitis",
      "Abdominal pain due to cold",
    ],

    color: "#6a8d4e",
  },

  // ============================================================
  // TU SI ZI WAN 菟丝子丸
  // ============================================================
  "tu-si-zi-wan": {
    id: "tu-si-zi-wan",
    name_pinyin: "Tú Sī Zǐ Wán",
    name_chinese: "菟丝子丸",
    name_english: "Cuscuta Seed Pill",
    category: "Formulas that Tonify Yang",
    source: "Unknown",

    composition: [
      { pinyin: "Tu Si Zi", chinese: "菟丝子", latin: "Semen Cuscutae", dosage: "10g", role: "jun", role_name: "King", function: "Tonifies Kidney Yang and Yin, secures essence, stops leakage" },
      { pinyin: "Lu Rong", chinese: "鹿茸", latin: "Cornu Cervi Pantotrichum", dosage: "6g", role: "jun", role_name: "King", function: "Tonifies Kidney Yang, strengthens Jing, strengthens bones" },
      { pinyin: "Shan Yao", chinese: "山药", latin: "Rhizoma Dioscoreae", dosage: "10g", role: "chen", role_name: "Minister", function: "Tonifies Spleen and Kidney, stabilizes and binds" },
      { pinyin: "Rou Cong Rong", chinese: "肉苁蓉", latin: "Herba Cistanches", dosage: "10g", role: "chen", role_name: "Minister", function: "Tonifies Kidney Yang, augments Jing and Blood" },
      { pinyin: "Wu Wei Zi", chinese: "五味子", latin: "Fructus Schisandrae", dosage: "6g", role: "zuo", role_name: "Assistant", function: "Astringes leakage, tonifies Kidney, calms the Spirit" },
      { pinyin: "Sang Piao Xiao", chinese: "桑螵蛸", latin: "Ootheca Mantidis", dosage: "6g", role: "zuo", role_name: "Assistant", function: "Tonifies Kidney, assists Yang, retains urine and secures essence" },
      { pinyin: "Wu Yao", chinese: "乌药", latin: "Radix Linderae", dosage: "6g", role: "zuo", role_name: "Assistant", function: "Warms the Kidney, promotes Qi movement" },
      { pinyin: "Yi Zhi Ren", chinese: "益智仁", latin: "Fructus Alpiniae Oxyphyllae", dosage: "10g", role: "zuo", role_name: "Assistant", function: "Warms the Kidney, retains urine, controls saliva" },
      { pinyin: "Fu Zi", chinese: "附子", latin: "Radix Aconiti Lateralis Praeparata", dosage: "3g", role: "zuo", role_name: "Assistant", function: "Rescues devastated Yang, warms Kidney fire" },
      { pinyin: "Mu Li", chinese: "牡蛎", latin: "Concha Ostreae", dosage: "10g", role: "zuo", role_name: "Assistant", function: "Astringes and stabilizes, calms the Spirit" },
      { pinyin: "Ji Nei Jin", chinese: "鸡内金", latin: "Endothelium Corneum Gigeriae Galli", dosage: "3g", role: "shi", role_name: "Envoy", function: "Aids digestion, transforms accumulation" },
    ],

    clinical_picture: {
      summary: "Warm the Kidney and stop abnormal leakage. Frequent, scanty urination with continuous dripping. Exhaustion. Aversion to cold. Weak physique. Dizziness. Lower back pain. Weakness of the lower extremities.",
      tongue: "Pale",
      pulse: "Submerged, thin mainly at the chi position",
      key_symptoms: [
        "Frequent, scanty urination with continuous dripping",
        "Exhaustion",
        "Aversion to cold",
        "Weak physique",
        "Dizziness",
        "Lower back pain",
        "Weakness of the lower extremities",
      ],
    },

    actions: [
      "Warms the Kidney",
      "Tonifies Yang",
      "Stops abnormal leakage",
      "Secures essence",
    ],

    pattern: "Kidney Yang Xu with failure to retain urine",

    contraindications: [
      "Damp-heat in the lower Jiao",
      "Yin deficiency with heat signs",
    ],

    differentiators: [],

    modifications: [],

    modern_applications: [
      "Urinary incontinence",
      "Frequent urination",
      "Low sperm count",
      "Premature aging",
      "Chronic fatigue with cold signs",
    ],

    dpiRemarks: "This is a xue type formula. Tu si zi wan. Can treat low sperm count like wu zi yan zhong wan but focusing on urinary disorder in a weak person. It's a classical K yang xu with weakness of the jing. Aging faster.",
    treatmentTime: "4 months to 1 year mid to low dosage level.",

    color: "#4a6fa5",
  },

  // ============================================================
  // ZHI BAI DI HUANG WAN 知柏地黄丸
  // ============================================================
  "zhi-bai-di-huang-wan": {
    id: "zhi-bai-di-huang-wan",
    name_pinyin: "Zhī Bǎi Dì Huáng Wán",
    name_chinese: "知柏地黄丸",
    name_english: "Anemarrhena, Phellodendron, and Rehmannia Formula",
    category: "Formulas that Tonify Yin",
    source: "Yi Zong Jin Jian",

    composition: [
      { pinyin: "Shu Di", chinese: "熟地", latin: "Radix Rehmanniae Praeparata", dosage: "24g", role: "jun", role_name: "King", function: "Nourishes Kidney Yin, fills the essence" },
      { pinyin: "Shan Yao", chinese: "山药", latin: "Rhizoma Dioscoreae", dosage: "12g", role: "chen", role_name: "Minister", function: "Tonifies Spleen and Kidney, stabilizes and binds" },
      { pinyin: "Shan Zhu Yu", chinese: "山茱萸", latin: "Fructus Corni", dosage: "12g", role: "chen", role_name: "Minister", function: "Nourishes Liver and Kidney, astringes essence" },
      { pinyin: "Fu Ling", chinese: "茯苓", latin: "Poria", dosage: "9g", role: "zuo", role_name: "Assistant", function: "Drains dampness, strengthens Spleen" },
      { pinyin: "Ze Xie", chinese: "泽泻", latin: "Rhizoma Alismatis", dosage: "9g", role: "zuo", role_name: "Assistant", function: "Drains Kidney fire, promotes urination" },
      { pinyin: "Mu Dan Pi", chinese: "牡丹皮", latin: "Cortex Moutan", dosage: "9g", role: "zuo", role_name: "Assistant", function: "Clears heat, cools Blood, invigorates Blood" },
      { pinyin: "Zhi Mu", chinese: "知母", latin: "Rhizoma Anemarrhenae", dosage: "6g", role: "zuo", role_name: "Assistant", function: "Clears heat, nourishes Yin, generates fluids" },
      { pinyin: "Huang Bai", chinese: "黄柏", latin: "Cortex Phellodendri", dosage: "6g", role: "shi", role_name: "Envoy", function: "Clears heat, dries dampness, drains Kidney fire" },
    ],

    clinical_picture: {
      summary: "Nourish Kidney Yin and clear heat. 5 center heat. Afternoon heat. Dry throat and mouth. Dry stool. Night sweating, hot flashes. Excessive sexual desire. Menopause. Chronic throat inflammation. Hoarseness and sore throat. Lower back / knee pain.",
      tongue: "Red",
      pulse: "Thin, rapid",
      key_symptoms: [
        "5 center heat",
        "Afternoon heat",
        "Dry throat and mouth",
        "Dry stool",
        "Night sweating, hot flashes",
        "Excessive sexual desire",
        "Menopause symptoms",
        "Chronic throat inflammation",
        "Hoarseness and sore throat",
        "Lower back and knee pain",
      ],
    },

    actions: [
      "Nourishes Kidney Yin",
      "Clears deficiency heat",
      "Drains fire",
    ],

    pattern: "Kidney Yin Xu with deficiency fire",

    contraindications: [
      "Spleen Yang deficiency with dampness",
      "True cold false heat patterns",
    ],

    differentiators: [],

    modifications: [
      { condition: "Severe night flashes", herbs_add: "Gui Ban" },
      { condition: "Neck stiffness", herbs_add: "Tian Ma" },
      { condition: "HBP", herbs_add: "Tian Ma Gou Teng Yin" },
    ],

    modern_applications: [
      "Menopausal syndrome",
      "Chronic pharyngitis",
      "Night sweats",
      "Hot flashes",
      "Hyperthyroidism (Yin Xu type)",
      "Chronic urinary tract infection",
    ],

    dpiRemarks: "This is a xue type formula. Chronic condition. It's a shao yin with stronger then liu wei di huang wan fever singes of insomnia, sweating.",
    treatmentTime: "2 - 4 month, same time even more. mid dosage level. Post zhi bai di huang wan. Liu wei di huang wan.",

    color: "#5b8c5a",
  },

  // ============================================================
  // XUAN FU DAI ZHI SHI TANG 旋覆代赭汤
  // ============================================================
  "xuan-fu-dai-zhi-shi-tang": {
    id: "xuan-fu-dai-zhi-shi-tang",
    name_pinyin: "Xuán Fù Dài Zhě Tāng",
    name_chinese: "旋覆代赭汤",
    name_english: "Inula and Hematite Combination",
    category: "Formulas that Regulate Qi",
    source: "Shang Han Lun",

    composition: [
      { pinyin: "Xuan Fu Hua", chinese: "旋覆花", latin: "Flos Inulae", dosage: "10g", role: "jun", role_name: "King", function: "Directs Qi downward, transforms phlegm, stops vomiting" },
      { pinyin: "Dai Zhe Shi", chinese: "代赭石", latin: "Haematitum", dosage: "12g", role: "jun", role_name: "King", function: "Directs rebellious Qi downward, cools Blood" },
      { pinyin: "Ren Shen", chinese: "人参", latin: "Radix Ginseng", dosage: "10g", role: "chen", role_name: "Minister", function: "Tonifies Qi, strengthens the Spleen and Stomach" },
      { pinyin: "Ban Xia", chinese: "半夏", latin: "Rhizoma Pinelliae", dosage: "10g", role: "chen", role_name: "Minister", function: "Dries dampness, transforms phlegm, directs rebellious Qi downward" },
      { pinyin: "Sheng Jiang", chinese: "生姜", latin: "Rhizoma Zingiberis Recens", dosage: "6g", role: "zuo", role_name: "Assistant", function: "Warms the Stomach, stops vomiting" },
      { pinyin: "Da Zao", chinese: "大枣", latin: "Fructus Jujubae", dosage: "5pc", role: "zuo", role_name: "Assistant", function: "Tonifies Spleen and Stomach Qi" },
      { pinyin: "Gan Cao", chinese: "甘草", latin: "Radix Glycyrrhizae", dosage: "6g", role: "shi", role_name: "Envoy", function: "Harmonizes all herbs, tonifies the middle Jiao" },
    ],

    clinical_picture: {
      summary: "Direct rebellious Qi downwards, transform phlegm, augment the Qi and harmonize the ST. Hiccups, vomiting with saliva and sputum. Nausea, belching. Abdominal distention and fullness. Gas in the upper abdomen.",
      tongue: "Pale, white sticky coating",
      pulse: "Frail, slippery or wiry",
      key_symptoms: [
        "Hiccups",
        "Vomiting with saliva and sputum",
        "Nausea, belching",
        "Abdominal distention and fullness",
        "Gas in the upper abdomen",
      ],
    },

    actions: [
      "Directs rebellious Qi downward",
      "Transforms phlegm",
      "Augments the Qi",
      "Harmonizes the Stomach",
    ],

    pattern: "Stomach Qi Xu with phlegm and rebellious Qi",

    contraindications: [
      "Excess heat patterns with strong fire",
      "Yin deficiency without phlegm",
    ],

    differentiators: [],

    modifications: [
      { condition: "Phlegm accumulation", herbs_add: "Hou Po, Chen Pi, Fu Ling. Or Er Chen Tang" },
      { condition: "Shi cold", herbs_add: "Wu Zhu Yu, Ding Xiang. Or use Shi Di Tang or Ding Xiang Shi Di Tang" },
      { condition: "Fever", herbs_add: "Huang Qin, Huang Lian, Zhu Ru. Or use Zhu Ru Wan Dan Tang" },
    ],

    modern_applications: [
      "Persistent hiccups",
      "Gastroesophageal reflux",
      "Nausea and vomiting",
      "Functional dyspepsia",
      "Gastroparesis",
    ],

    color: "#7a6e5d",
  },

  // ============================================================
  // XIAO JIAN ZHONG TANG 小建中汤
  // ============================================================
  "xiao-jian-zhong-tang": {
    id: "xiao-jian-zhong-tang",
    name_pinyin: "Xiǎo Jiàn Zhōng Tāng",
    name_chinese: "小建中汤",
    name_english: "Hoelen and Jujube Combination (Minor Construct the Middle Decoction)",
    category: "Formulas that Warm the Interior",
    source: "Shang Han Lun",

    composition: [
      { pinyin: "Jiao Yi", chinese: "饴糖", latin: "Saccharum Granorum", dosage: "90g", role: "jun", role_name: "King", function: "Warms and tonifies the middle Jiao, relaxes tension, alleviates pain" },
      { pinyin: "Gui Zhi", chinese: "桂枝", latin: "Ramulus Cinnamomi", dosage: "6g", role: "chen", role_name: "Minister", function: "Warms the Yang, releases the exterior, warms the channels" },
      { pinyin: "Bai Shao Yao", chinese: "白芍药", latin: "Radix Paeoniae Alba", dosage: "9g", role: "chen", role_name: "Minister", function: "Nourishes Blood, softens the Liver, alleviates pain" },
      { pinyin: "Ban Xia", chinese: "半夏", latin: "Rhizoma Pinelliae", dosage: "9g", role: "zuo", role_name: "Assistant", function: "Dries dampness, transforms phlegm, directs rebellious Qi downward" },
      { pinyin: "Sheng Jiang", chinese: "生姜", latin: "Rhizoma Zingiberis Recens", dosage: "9g", role: "zuo", role_name: "Assistant", function: "Warms the middle, stops vomiting" },
      { pinyin: "Gan Cao", chinese: "甘草", latin: "Radix Glycyrrhizae", dosage: "9g", role: "zuo", role_name: "Assistant", function: "Tonifies Spleen Qi, harmonizes the herbs" },
      { pinyin: "Da Zao", chinese: "大枣", latin: "Fructus Jujubae", dosage: "50pc", role: "shi", role_name: "Envoy", function: "Tonifies Spleen and Stomach, nourishes Blood" },
    ],

    clinical_picture: {
      summary: "Warm & Tonify, harmonize the Yin and Yang arrests vomiting treat accumulation condition. Fatigue & lassitude, pale complexion, abdominal pain that relieved by warming and pressing. Vomiting and belching after meals.",
      tongue: "Pale with white coating",
      pulse: "Wiry, slow",
      key_symptoms: [
        "Fatigue and lassitude",
        "Pale complexion",
        "Abdominal pain relieved by warming and pressing",
        "Vomiting and belching after meals",
      ],
    },

    actions: [
      "Warms and tonifies the middle Jiao",
      "Harmonizes Yin and Yang",
      "Arrests vomiting",
      "Alleviates abdominal pain",
    ],

    pattern: "Middle Jiao Yang Xu with cold and deficiency",

    contraindications: [
      "Excess heat patterns",
      "Vomiting due to food stagnation with heat",
    ],

    differentiators: [],

    modifications: [],

    modern_applications: [
      "Peptic ulcer (cold type)",
      "Chronic gastritis",
      "Irritable bowel syndrome",
      "Functional abdominal pain",
      "Chronic fatigue with digestive weakness",
    ],

    color: "#b8860b",
  },
};
// Helper function to find formula details by name

export function getFormulaDetails(formulaName) {
  const key = formulaName.toLowerCase().replace(/\s+/g, '-');
  return FORMULA_DETAILS[key] || null;
}
