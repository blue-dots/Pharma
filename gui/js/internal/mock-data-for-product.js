/**
 * Created by cs05 on 12/03/17.
 */
var aProducts = [
  {
    "id": 1,
    "label": "ANTIBIOTICS / ANTI-INEFFECTIVE",
    "children": [
      {
        "id": 1.1,
        "label": "ATNLEVO",
        "subLabel": "Levofloxacin oral solution / Powder",
        "compositionText": "Each ml contains",
        "composition": [
          {
            "label": "Levofloxacin Hemohydrate IP",
            "value": "100mg"
          },
          {
            "label": "Excipient",
            "value": "Q.S"
          }
        ],
        "indication": [
          "ATNLEVO for the prevention, control and treatment of servere respiratory infection of poultry like CRD, CCRD, E-coli infections, Salmonellosis, F=Fowl cholera, Coryza, Dermatitis, Enteritis.",
          "ATNLEVO also recommended in viral infection in poultry Sheep, Goat and Dairy animals."
        ],
        "dosage": ["1 ml/ 10kg body weight. To be administered continuosly for a period of 3-5 days once daily in drinking water depending upon the severity of infection or as recommended by the veterinarian."],
        "withdrawal": [
          {
            "label": "Meat",
            "value": "28 days."
          },
          {
            "label": "Egg",
            "value": "7 days."
          }
        ],
        "presentation ":  "1 liter & 200gm Powder",
        "image": "",
        "children": []
      },
      {
        "id": 1.2,
        "label": "ATNLEBRO",
        "subLabel": "Levofloxacin and bromhexine oral solution / Powder",
        "compositionText": "Each ml contains",
        "composition": [
          {
            "label": "Levofloxacin Hemohydrate IP equivalent to Levofloxacin",
            "value": "100mg"
          },
          {
            "label": "Bromhexine Hcl",
            "value": "10mg"
          },
          {
            "label": "Excipient",
            "value": "Q.S"
          }
        ],
        "indication": [
          "ATNLEBRO for the prevention, control, and treatment of severe respiratory infections of poultry like CRD, CRD, E-coil infection, salmonellosis, Fowl cholera, Coryza, Dermatitis, Enteritis, influenza coryza. For prevention & treatment of disease due to Gram +ve & Gram -ve, Mycoplasma in poultry, sheep, Goat, & large animals.",
          "ATNLEBRO also recommended in viral infection in Poultry, Sheep, Goat, and Diary animals. Bromhexine is an Expectorant and Mucolytic agents."
        ],
        "dosage": ["1 ml/ 10 kg body weight. To be administered continuosly for a period of 3-5 dayes once daily in drinking water depending up on the severity of infection or as recommended by the veterinarian."],
        "withdrawal": [
          {
            "label": "Chicken",
            "value": "28 days"
          },
          {
            "label": "Egg",
            "value": "7 days"
          }
        ],
        "presentation ":  "100 ml, 250 ml, 500 ml, 1 liter, 200gm Powder",
        "image": "",
        "children": []
      },
      {
        "id": 1.3,
        "label": "ATNLEBRO-CL",
        "subLabel": "Oral solution",
        "compositionText": "Each ml contains",
        "composition": [
          {
            "label": "Levofloxacin Hemihydrate IP",
            "value": "100mg"
          },
          {
            "label": "Bromhexine HydroChloride IP",
            "value": "15mg"
          },
          {
            "label": " Colistin Sulhate IP",
            "value": "15mg"
          }
        ],
        "indication": [
          "ATNLEBRO-CL for the prevention, control, and treatment of severe respiratory infection of poultry like CRD, CCRD, E-coli infection, Salmonellosis, Fowl cholera, Coryza Dermatitis, Enteritis.",
          "Colistin Sulphate being a polypeptide group has the powerful antibacterial action against gram -ve organism.",
          "Bromhexine is an Expectorant and Mucolytic agent.",
          "ATNLEBRO-CL also recommended in viral infection in Poultry."
        ],
        "dosage": ["Mix 1ml for 10.5 kg of live body weight for 3-5 days once in drinking water depending up on the severity of infection or as recommended by the veterinarian."],
        "withdrawal": [
          {
            "label": "Chicken",
            "value": "28 days"
          },
          {
            "label": "Egg",
            "value": "7 days"
          }
        ],
        "presentation ":  "500 ml, 1 liter",
        "image": "",
        "children": []
      },
      {
        "id": 1.4,
        "label": "FLOX",
        "subLabel": "Oral Solution",
        "compositionText": "Each ml contains",
        "composition": [
          {
            "label": "Enrofloxacin I.P",
            "value": "10mg"
          },
          {
            "label": "Excipient",
            "value": "Q.S"
          }
        ],
        "indication": ["FLOX for the control and treatment of severe respiratory infections in poultry caused by bacteria including Mycoplasmosis, infectious Coryza, Salmonellosis, Fowl cholera, Colibacillosis etc."],
        "dosage": ["1 ml of FLOX oral solution to be administered for total body weight of 10 kg through drinking water as advised by the veterinarian."],
        "withdrawal": [
          {
            "label": "Chicken",
            "value": "28 days"
          },
          {
            "label": "Egg",
            "value": "7 days"
          }
        ],
        "presentation ":  "100 ml, 250 ml, 500 ml, 1 liter",
        "image": "",
        "children": []
      },
      {
        "id": 1.5,
        "label": "FLOX-BH",
        "subLabel": "oral solution",
        "compositionText": "Each ml contains",
        "composition": [
          {
            "label": "Enrofloxacin",
            "value": "100 mg"
          },
          {
            "label": "Bromhexine HCL IP",
            "value": "7.5 mg"
          },
          {
            "label": "Excipient",
            "value": "Q.S"
          }
        ],
        "indication": ["FLOX-BH for the control and treatment of severe respiratory infection of poultry caused by bacteria including Mycoplasmosis, infectious Coryza, Salmonellosis, Fowl cholera, Colibacillosis etc.","FLOX-BH has broad spectrum antimicrobial activity against a wide range of microbes affecting poultry.","FLOX-BH has helped to reduce respiratory stress with mucolytic effect."],
        "dosage": ["1 ml of FLOX-BH solution to be administered for total body weight of 10 kg through drinking water.","Enrofloxacin - 10.0 mg per kg body weight and Enrofloxacin - 10.0 mg per kg body weight and Bromhexine - 0.5 mg per kg body weight","To be administered continuously for a period of for 3-5 days once in drinking water depending upon the severity of infection or as recommended by the veterinarian."],
        "withdrawal": [
          {
            "label": "Chicken",
            "value": "28 days"
          },
          {
            "label": "Egg",
            "value": "7 days"
          }
        ],
        "presentation ":  "100 ml, 250 ml, 500 ml, 1 liter",
        "image": "",
        "children": []
      },
      {
        "id": 1.6,
        "label": "FLOX-BH DS",
        "subLabel": "oral solution",
        "compositionText": "Each ml contains",
        "composition": [
          {
            "label": "Enrofloxacin",
            "value": "200 mg"
          },
          {
            "label": "Bromhexine HCL IP",
            "value": "15 mg"
          },
          {
            "label": "Excipient",
            "value": "Q.S"
          }
        ],
        "indication": ["FLOX-BH DS for the control and treatment of severe respiratory infections in poultry caused by bacteria including Mycoplasmosis, infectious Coryza, Salmonellosis, Fowl cholera, Colibacillosis etc."],
        "dosage": ["10.5 mg per kg body weight. (Enrofloxacin - 10 mg per kg body weight and Bromhexine - 0.5 mg per kg body weight","1 ml of the solution to be administered for total body weight of 20.5.","To be administered continuously for a period of 3-5 days once in drinking water depending upon the severity of infection or as recommended by the veterinarian."],
        "withdrawal": [
          {
            "label": "Chicken",
            "value": "28 days"
          },
          {
            "label": "Egg",
            "value": "7 days"
          }
        ],
        "presentation ":  "1 liter, 5 liter",
        "image": "",
        "children": []
      },
      {
        "id": 1.7,
        "label": "GENTA-AB",
        "subLabel": "Injection",
        "compositionText": "Each 2 ml contains",
        "composition": [
          {
            "label": "Gentamicin Sulphate IP Eq. to Gentamicin base ",
            "value": "80 mg"
          },
          {
            "label": "Methyl Paraben IP",
            "value": "0.18%"
          },
          {
            "label": "Propyl Paraben IP (As Preservatives)",
            "value": "0.02%"
          },
          {
            "label": "Water for Injection",
            "value": "Q.S"
          }
        ],
        "indicationCategories": [
          {
            "label": "Poultry",
            "value": "Early Chicks mortality, BWD, CRD, Coyza etc."
          }
        ],
        "indication": ["For treatment of various bacterial infections of a Respiratory tract, Urinary tract, Mastitis & Metritis in Buffalos, Sheep, and Goats."
        ],
        "dosage": ["Cattle, Sheep & Goats: 1-2 ml/kg body weight."],
        "withdrawal": [],
        "presentation ":  "100 ml",
        "image": "",
        "children": []
      },
      {
        "id": 1.8,
        "label": "TYLO-AB",
        "subLabel": "Injection",
        "compositionText": "Each ml contains",
        "composition": [
          {
            "label": "Tylocin (as tartrate) B.P. ",
            "value": "200 mg"
          },
          {
            "label": "Long acting vehicles",
            "value": "Q.S"
          }
        ],
        "indicationCategories": [],
        "indication": ["Poultry (Respiratory problem) Sheep P.P.L.O, Bovine Pleuro Pneumonia, Footrot in sheep, Metritis in cattle, Secondary Bacterial infection associated with viral infection. Mainly used to prevent and control the diseases caused by mycoplasma in cattle, sheep, pig, goat & bird."],
        "dosage": ["Cattle, Sheep & Goats: 1-2 ml/kg body weight."],
        "dosageCategories": [
          {
            "label": "Cattle, Sheep, goat, dog",
            "value": "1 ml/20 kg body wt. by I.M"
          },
          {
            "label": "Poultry",
            "Value": "15-20 mg per kg of body wt. once a day, for 3-5 days or as directed by poultry consultant or Veterinarian."
          }
        ],
        "withdrawal": [],
        "presentation ":  "100 ml",
        "image": "",
        "children": []
      },
      {
        "id": 1.9,
        "label": "OXY-LA-AB",
        "subLabel": "Injection",
        "compositionText": "Each ml contains",
        "composition": [
          {
            "label": "Oxytetracycline Dihydrate IP Equivalent to Oxytetracycline IP ",
            "value": "200 mg"
          },
          {
            "label": "on anhydrous base in 2 Pyrrolidone vehicle system.",
            "value": ""
          }
        ],
        "indicationCategories": [],
        "indication": ["Broad spectrum antibiotics, effective in colibacillosis, anthrax, black quarter, hemorrhagic septicemia.","Supportive in secondary bacterial infection after viral infection."],
        "dosage": [],
        "dosageCategories": [
          {
            "label": "Cattle, Sheep, goat, Buffaloes and Pigs",
            "value": "Single dose rate 1 ml per 10 kg body weight by intramuscular route only"
          },
          {
            "label": "Poultry",
            "Value": "1 ml per 4 kg body weight by subcutaneous rout only"
          }
        ],
        "withdrawal": [],
        "presentation ":  "50 ml & 100 ml",
        "image": "",
        "children": []
      },
      {
        "id": 1.10,
        "label": "KANCIN-AB",
        "subLabel": "Injection",
        "compositionText": "Each ml contains",
        "composition": [
          {
            "label": "Amikacin Sulphate IP equivalent to amikacin",
            "value": "250 mg"
          },
          {
            "label": "Water for injection IP",
            "value": "Q.S"
          },
          {
            "label": "Also Contains : Buffering agent Sodium citrate IP",
            "value": "2.5%w/v"
          },
          {
            "label": "preservative : Sodium Metabisulphate IP",
            "value": "0.66%w/v"
          },
          {
            "label": "Methyl Paraben IP",
            "value": "0.08%w/v"
          },
          {
            "label": "Propyl Paraben IP",
            "value": "0.02%w/v"
          }
        ],
        "indicationCategories": [
          {
            "label": "Poultry",
            "value": "to treat Mycoplasmosis, E.coli infection."
          }
        ],
        "indication": ["Broadest spectrum among Aminoglycoside group. It is unique among Aminoglycoside because it is resistant to Aminoglycoside destroying enzyme.","KANCIN-AB is also active against many bacilli which are resistant to Gentamicin."],
        "dosage": [],
        "dosageCategories": [
          {
            "label": "Cattle, Buffalo, Sheep and Goat",
            "value": "5 to 12 mg/ kg body wt. by IM, IV & SC route Also use as a IV infusion after dilution in 1:4 ratio with sterile water or as directed by veterinarian."
          },
          {
            "label": "Poultry",
            "Value": "Dilute 1 ml of KANCIN AB in 79 ml of normal saline inject 0.2 ml per chicks by IM & SC route. Adult birds 7.5 mg to 10 mg/ kg body wt. by IM & SC route or as directed by poultry Consultant or veterinarian."
          }
        ],
        "withdrawal": [],
        "presentation ":  "50 ml & 100 ml",
        "image": "",
        "children": []
      }
    ]
  },
  {
    "id": 2,
    "label": "DEWORMER / PARASITICIDE",
    "children": [
      {
        "id": 1.1,
        "label": "ATN-RID",
        "subLabel": "Closantel Oral Solution (BROAD SPECTRUM ENDECTO ANTIPARASITIC AGENT)" ,
        "compositionText": "Each ml contains",
        "composition": [
          {
            "label": "Closantel",
            "value": "150 mg"
          },
          {
            "label": "Excipient",
            "value": "Q.S"
          }
        ],
        "indication": [
          "For dual treatment of both external and internal parasites of cattle, buffaloes, sheep and goats.",
          "Highly effective on Haemonchus, Ostertagia, Trichostrongylus. Cooperia, Oestophagustomum, Bunostomum, Nematodirus spp, Dictyocaulus Spp, Fasciola hepatica / gigantica, and ectoparasites.",
          "ATN-RID is recommended in anemia, shooting diarrhea, decreased production and PICA."
        ],
        "dosage": "For Cow, Biffalo, Sheep & Goat.",
        "dosageCategories": [
          {
            "label": "Fasciola Species & Ectoparasites.",
            "value": "1 ml/ 10 kg body weight. (Closantel 15 mg/kg bbody weight)"
          },
          {
            "label": "Other Endoparasites",
            "Value": "1ml/ 15 kg body weight. (Closantel 10mg/ kg weight) OR as directed by veterinarian."
          }
        ],
        "withdrawal": [
          {
            "label": "Meat",
            "value": "28 days"
          },
          {
            "label": "Milk",
            "value": "7 days"
          }
        ],
        "presentation ":  "100ml, 200ml and 500ml bottle",
        "image": "",
        "children": []
      },
      {
        "id": 1.2,
        "label": "ATNOMAC",
        "subLabel": "Oral Solution",
        "compositionText": "Each ml contains",
        "composition": [
          {
            "label": "Ivermectin IP",
            "value": "0.08% w/v"
          }
        ],
        "indication": [],
        "indicationCategories": [
          {
            "label": "Cattle",
            "value": "Gastro- intestinal Nematodes, Lungworms, Eye worms, Skin worms"
          },
          {
            "label": "Sheep",
            "value": "Gastro- intestinal Nematodes, Pulmonary Nematodes Ostertagia,  Oestrous ovis."
          },
          {
            "label": "Horses",
            "value": "Gastro- intestinal Nematodes, Lungworms, Ostertagia, Strongylus"
          },
          {
            "label": "Dogs",
            "value": "Gastro- intestinal Nematodes & Heart worms"
          }
        ],
        "dosage": "25ml / 100 kg body wight by the oral route",
        "dosageCategories": [],
        "withdrawal": [
          {
            "label": "Meat",
            "value": "28 days after last administration"
          },
          {
            "label": "Milk",
            "value": "7 days after last administration"
          }
        ],
        "presentation ":  "1 liter",
        "image": "",
        "children": []
      },
      {
        "id": 1.3,
        "label": "ATNIL",
        "subLabel": "Oral Solution",
        "compositionText": "Each ml contains",
        "composition": [
          {
            "label": "Oxyclozanide IP (Vet)",
            "value": "30 mg"
          },
          {
            "label": "Levamisole Hydrochloride IP",
            "value": "15 mg"
          }
        ],
        "indication": ["ATNIL is a broad spectrum anthelmintic used for the treatment and control of Nematode infection including the Nematodiasis and Fascioliasis in Cattle, Sheep & Goat. It is also effective against Amphistomes, Paramphistomes, and Tapeworms, Lungworms, Flukes & worm drench segments."],
        "indicationCategories": [],
        "dosage": "Give undiluted oral drench, All animals 2 ml per 4 kg body weight",
        "dosageCategories": [],
        "withdrawal": [
          {
            "label": "Meat",
            "value": "14 days"
          },
          {
            "label": "Milk",
            "value": "1 days"
          }
        ],
        "presentation ":  "1 liter",
        "image": "",
        "children": []
      },
      {
        "id": 1.4,
        "label": "ATNIL DS",
        "subLabel": "Oral Solution",
        "compositionText": "Each ml contains",
        "composition": [
          {
            "label": "Oxyclozanide IP (Vet)",
            "value": "60 mg"
          },
          {
            "label": "Levamisole Hydrochloride IP",
            "value": "30 mg"
          }
        ],
        "indication": ["ATNIL is a broad spectrum anthelmintic used for the treatment and control of Nematode infection including the Nematodiasis and Fascioliasis in Cattle, Sheep & Goat. It is also effective against Amphistomes, Paramphistomes, and Tapeworms, Lungworms, Flukes & worm drench segments."],
        "indicationCategories": [],
        "dosage": "Give undiluted oral drench, All animals 2 ml per 4 kg body weight",
        "dosageCategories": [],
        "withdrawal": [
          {
            "label": "Meat",
            "value": "14 days"
          },
          {
            "label": "Milk",
            "value": "1 days"
          }
        ],
        "presentation ":  "1 liter",
        "image": "",
        "children": []
      },
      {
        "id": 1.5,
        "label": "AMZOL-F",
        "subLabel": "Oral Solution",
        "compositionText": "Each 5ml contains",
        "composition": [
          {
            "label": "Niclosamide IP",
            "value": "500 mg"
          },
          {
            "label": "Fenbedazole IP",
            "value": "150 mg"
          }
        ],
        "indication": ["Niclosamide acts against immature Amphistomes, Moniezia Spp in Sheep, Goat, Cattle & Buffaloes, Expulsion of dead tapeworm occurs within 6 yo 48 hours after administration","Fenbendazole effective against roundworm including inhibited larvae and eggs, nasal bots, tapeworms, and lungworms. It is non-embryotoxic in livestock. Effective against immature Amphistomiasis, Monieziasis, Haemonchosis, Oesophagostomiasis, and other G.I. nematodes in sheep,goat and cattle"],
        "indicationCategories": [],
        "dosage": "",
        "dosageCategories": [
          {
            "label": "Sheep & Goat",
            "value": "5-10 ml/ 15kg body weight"
          }
        ],
        "withdrawal": [
          {
            "label": "Meat",
            "value": "14 days"
          },
          {
            "label": "Milk",
            "value": "3 to 5 days"
          }
        ],
        "presentation ":  "1 liter",
        "image": "",
        "children": []
      },
      {
        "id": 1.6,
        "label": "AMZOL-L",
        "subLabel": "Oral Solution",
        "compositionText": "Each 5ml contains",
        "composition": [
          {
            "label": "Niclosamide IP",
            "value": "500 mg"
          },
          {
            "label": "Albendazole IP",
            "value": "75 mg"
          }
        ],
        "indication": ["AMZOL-L is broad spectrum anthelmintic used for gastrointestinal roundworms, lungworms, tapeworms, and rumen flukes in Cattle, Sheep, Goat & Livestock"],
        "indicationCategories": [],
        "dosage": "",
        "dosageCategories": [
          {
            "label": "Sheep",
            "value": "10 ml/ 15kg body weight"
          },
          {
            "label": "Dogs & cats",
            "value": "1 ml/ 1.5kg body weight"
          },
          {
            "label": "Cattle & Buffaloes",
            "value": "10 ml/ 15 kg body weight"
          },
          {
            "label": "Poultry",
            "value": "1 ml/ 1.5kg body weight"
          }
        ],
        "withdrawal": [
          {
            "label": "Meat",
            "value": "14 days"
          },
          {
            "label": "Milk",
            "value": "3 to 5 days"
          }
        ],
        "presentation ":  "1 liter",
        "image": "",
        "children": []
      },
      {
        "id": 1.7,
        "label": "AMZOL-N",
        "subLabel": "Oral Solution",
        "compositionText": "Each 5ml contains",
        "composition": [
          {
            "label": "Niclosamide IP",
            "value": "500 mg"
          },
          {
            "label": "Albendazole IP",
            "value": "150 mg"
          }
        ],
        "indication": ["Albendazole acts partly against mature Fasciols and also against Haemonchus, Bunostomum (Gastrointestinal nematodes) and Lungworms",
          "Niclosamide acts against immature Amphistomes, Monezia Spp in cattle, Sheep and Goat, DiplidiumCaninum, Taenia Pisiform in Dogs",
          "AMZOL-N it is broad spectrum dewormer in several domesticated species, against immature Amphistomiasis (Caused by paramphistomumSpp) and roundworms infestations, and acts against Immature Amphistomes, Powerfull Flukicide & anti-Nematodal"
        ],
        "indicationCategories": [],
        "dosage": "",
        "dosageCategories": [
          {
            "label": "Sheep & goat",
            "value": "5-10 ml/ 15kg body weight"
          },
          {
            "label": "Cattle & Buffaloes",
            "value": "1 ml/ 2-3 kg body weight"
          }
        ],
        "withdrawal": [],
        "presentation ":  "1 liter",
        "image": "",
        "children": []
      },
      {
        "id": 1.8,
        "label": "AB-TRAZ",
        "subLabel": "Liquid",
        "compositionText": "Each ml contains",
        "composition": [
          {
            "label": "Amitraz IP",
            "value": "500 mg"
          },
          {
            "label": "Solvent & Emulsifies",
            "value": "Q.S"
          }
        ],
        "indication": ["AB-TRAZ for prevention and control of Ectoparasitic infestation like ticks, mites, lice and keds in cattle, sheep, goat, camel, pig & dogs (do not use in Chihuahua dogs & use with caution in toy breeds)",
          "AB-TRAZ kills ticks, mites, lice as well as organophosphate & pyrethroid resistant strains of ectoparasites"
        ],
        "indicationCategories": [],
        "dosage": "AB_TRAZ to be used as spray or dip",
        "dosageCategories": [
          {
            "label": "Dilution",
            "value": "1 ml to 2 ml in 1 lit of clean water"
          }
        ],
        "withdrawal": [
          {
            "label": "Meat",
            "value": "1 day for cattle & goats & 7 days for pig & sheep"
          },
          {
            "label": "Milk",
            "value": "7 hours after application"
          }
        ],
        "presentation ":  "15ml & 50 ml BOTTLES",
        "image": "",
        "children": []
      },
      {
        "id": 1.9,
        "label": "DELTA-AB",
        "subLabel": "Liquid",
        "compositionText": "Each ml contains",
        "composition": [
          {
            "label": "Deltamethrin IP",
            "value": "12.5 mg"
          },
          {
            "label": "Solvents & Emulsifiers",
            "value": "Q.S"
          }
        ],
        "indication": ["DELTA-AB for prevention and control of ectoparasitic infection like ticks, lice, mites and flies in cattle, buffaloes, sheep, goats, camels, poultry, dogs & pigs."],
        "indicationCategories": [],
        "dosage": "DELTA-AB to be used as spray or dip",
        "dosageCategories": [
          {
            "label": "Dilution",
            "value": "1 ml to 2 ml in 1 lit of clean water"
          }
        ],
        "withdrawal": [],
        "presentation ":  "15ml & 50 ml BOTTLES",
        "image": "",
        "children": []
      },
      {
        "id": 1.10,
        "label": "CYPER-AB",
        "subLabel": "Liquid",
        "compositionText": "Each ml contains",
        "composition": [
          {
            "label": "Cypermethrin IP",
            "value": "100 mg"
          },
          {
            "label": "Solvents & Emulsifiers",
            "value": "Q.S"
          }
        ],
        "indication": ["CYPER-AB for prevention and control of ectoparasitic infection like ticks, lice, mites and flies in cattle, buffaloes, sheep, goats, camels, poultry, dogs & pigs"],
        "indicationCategories": [],
        "dosage": "CYPER-AB to be used as spray or dip",
        "dosageCategories": [
          {
            "label": "Dilution",
            "value": "1 ml to 2 ml in 1 lit of clean water"
          }
        ],
        "withdrawal": [],
        "presentation ":  "15ml & 50 ml BOTTLES",
        "image": "./CroppedImages/DSC_0158.png",
        "children": []
      },
      {
        "id": 1.11,
        "label": "BUPACIN",
        "subLabel": "Injection",
        "compositionText": "Each ml contains",
        "composition": [
          {
            "label": "Buparvaquone",
            "value": "50mg"
          },{
            "label": "Sorbitan mono-oleate",
            "value": "100mg"
          },
          {
            "label": "Oilybase",
            "value": "Q.S"
          }
        ],
        "indication": ["For the treatment of bovine Theileriosis caused by different Therilrerial species","It is an antiprotozoal drug for the treatment Theileriosis"],
        "indicationCategories": [],
        "dosage": "1ml per 20kg body weight by intermuscular route only",
        "dosageCategories": [],
        "withdrawal": [
          {
            "label": "Milk",
            "value": "48hrs"
          },
          {
            "label": "Meat",
            "value": "42days"
          }

        ],
        "presentation ":  "20 ml and 30ml vials",
        "image": "",
        "children": []
      }
    ]
  },
  {
    "id": 3,
    "label": "ANTIDIARRHOEA AND INTRA UTRINE",
    "children": [
      {
        "id": 1.1,
        "label": "A-1 SULPHA",
        "subLabel": "Bolus",
        "compositionText": "Each uncoated bolus contains",

        "composition": [
          {
            "label": "Sulphadimidine IP",
            "value": "5gm"
          },
          {
            "label": "Excipient",
            "value": "Q.S"
          }
        ],
        "indication": [],
        "indicationCategories": [
          {
            "label": "Cattle",
            "value": "Bacterial Enteritis, Calf Scours, Foot Rot, Calf Diphtheria, Septicemia, Bacterial Pneumonia"
          },
          {
            "label": "Horse",
            "value": "Bacterial Enteritis, Strangles, Equine Influenza, Joint ill, Equine Pneumonia, Shipping Fever"
          },
          {
            "label": "Sheep & Goat",
            "value": "Bacterial Pneumonia, Septicemia, Metritis, Footrot, and Coccidiosis"
          }
        ],
        "dosage": "",
        "dosageCategories": [
          {
            "label": "Cattle, Buffalo, Sheep, Goat & Horse",
            "value": " 0.2 gm/kg body weight or 2 bolus per 50 kg body weight are recommended as an initial dose followed by half of this dose daily"
          }
        ],
        "withdrawal": [],
        "presentation ":  "5 * 4’s blister pack",
        "image": "",
        "children": []
      },
      {
        "id": 1.2,
        "label": "URON AB",
        "subLabel": "Bolus",
        "compositionText": "Each Bolus Contains",

        "composition": [
          {
            "label": "Nitrofurazone B.P. vet",
            "value": "60 mg"
          },
          {
            "label": "Urea I.P",
            "value": "6 mg"
          }
        ],
        "indication": ["URON AB bolus is indicated for prevention and control of Anaerobic bacterial infections of the uterus.",
            "Postparturient complication like retention of placenta and prolapsed of uterus" ,
            "For the treatment of Vaginitis, Cervicitis, Endometritis, Metritis, Pyometra and Salpingitis"],
        "indicationCategories": [
          {
            "label": "Benefits",
            "value": "URON AB bolus is an ideal combination of a broad spectrum antibacterial and a proteolytic agent which acts, effectively in the presence of Necrotic debris & uterine fluid"
          },
          {
            "label": "",
            "value": "URIN AB bolus has effective combination against Aerobic & Anaerobic bacterial Infections"
          },
          {
            "label": "",
            "value": "URON AB bolus helps in retained placenta"
          },
          {
            "label": "",
            "value": "URON AB bolus is excellent in the treatment of uterine infections eg. Metritis, Endometritis, and Pyometra"
          }
        ],
        "dosage": "By taking all aseptic precautions insert by hand 2 to 4 bolus in the uterus or as recommended by the veterinarian",
        "dosageCategories": [],
        "withdrawal": [],
        "presentation ":  "Strip of 12 bolus & 50 bolus Bottle",
        "image": "",
        "children": []
      }
    ]
  },
  {
    "id": 4,
    "label": "MULTIVITTAMIN AND FEED SUPPLEMENT",
    "children": [
      {
        "id": 1.1,
        "label": "VITA - AB",
        "subLabel": "Oral Liquid Vitamin AD3, E, C",
        "compositionText": "Each ml of Vita - AB Contains",

        "composition": [
          {
            "label": "Vitamin A",
            "value": "250000 IU"
          },
          {
            "label": "Vitamin D3",
            "value": "25000 IU"
          },
          {
            "label": "Vitamin E",
            "value": "150mg"
          },
          {
            "label": "Vitamin C",
            "value": "500 mg"
          }
        ],
        "indication": ["All stress causing factors such as heat, production, transport, climate change, Handling, Vaccination, Deworming, Antibiotic therapy stree",
          "Vitamin deficiency, mycotoxicosis etc. Stunted growth, optimum calcium & phosphorus utilization" ,
          "As a performance booster"],
        "indicationCategories": [
          {
            "label": "Benefits",
            "value": "Prevents and relieves all types of stress conditions effectively thereby, improving “Production performance"
          },
          {
            "label": "",
            "value": "URIN AB bolus has effective combination against Aerobic & Anaerobic bacterial Infections"
          },
          {
            "label": "",
            "value": "Improves body resistance against infections"
          },
          {
            "label": "",
            "value": "Improves health and immunity, Improves growth and weight"
          }
        ],
        "dosage": "For 100 birds (Poultry)",
        "dosageCategories": [
          {
            "label": "Broiler",
            "value": "2-5 ml"
          },
          {
            "label": "Layer",
            "value": "2-6 ml"
          },
          {
            "label": "For Large Animals",
            "value": "20 ml / Per day for 7 - 10 days"
          },
          {
            "label": "For Calves, Sheep, Goat",
            "value": "7 - 10 ml / Per day for 7 - 10 days"
          }
        ],
        "withdrawal": [],
        "presentation ":  "500 ml & 1 litre",
        "image": "",
        "children": []
      },
      {
        "id": 1.2,
        "label": "VITA - ABC",
        "subLabel": "Vitamin & Mineral Liquid",
        "compositionText": "Each 10 ml of VITA-ABC contains",

        "composition": [
          {
            "label": "Vitamin A",
            "value": "120000 IU"
          },
          {
            "label": "Vitamin D3",
            "value": "60000 IU"
          },
          {
            "label": "Vitamin E",
            "value": "15 mg"
          },
          {
            "label": "Vitamin H (Biotin)",
            "value": "1.5 mg"
          },
          {
            "label": "Vitamin C",
            "value": "10 mg"
          },
          {
            "label": "Zinc",
            "value": "10 mg"
          },
          {
            "label": "Cobalt",
            "value": "1 mg"
          },
          {
            "label": "Cobalt",
            "value": "1 mg"
          }
        ],
        "indication": ["Subclinical and clinical mastitis in dairy animals Strengthen udder tissues and muscles Improves fertility of breeding bulls Recondition the udder Stop hair loss" ,
          "As a performance booster"],
        "indicationCategories": [
          {
            "label": "Benefits",
            "value": "As a supportive to antibiotics treatment in mastitis Prevents and relieves all types of stress condition efficiently there by improving the “Production Performance"
          },
          {
            "label": "",
            "value": "Improves body resistance against infections"
          },
          {
            "label": "",
            "value": "Improves health and immunity"
          },
          {
            "label": "",
            "value": "Improves milk production"
          }
        ],
        "dosage": "",
        "dosageCategories": [
          {
            "label": "Cattle",
            "value": "20 ml daily"
          },
          {
            "label": "Calves",
            "value": "5 ml daily"
          },
          {
            "label": "Sheep & Goats",
            "value": "5 ml daily"
          },
          {
            "label": "Chicks",
            "value": "5 ml / 100 birds daily"
          },
          {
            "label": "Growers",
            "value": "7 ml / 100 birds daily"
          },
          {
            "label": "Layers",
            "value": "10 ml / 100 birds or As directed by the Veterinarian"
          }
        ],
        "withdrawal": [],
        "presentation ":  "500 ml & 1 litre",
        "image": "",
        "children": []
      },
      {
        "id": 1.3,
        "label": "GIPRO - AB Liquid",
        "subLabel": "AN Ideal Performance Booster",
        "compositionText": "Each 500 ml contains",

        "composition": [
          {
            "label": "Methionine Activity (Methionine Hydroxy Analogue)",
            "value": "127.60 gm"
          },
          {
            "label": "Choline Chloride",
            "value": "63.125 gm"
          },
          {
            "label": "Lysine Hydrochloride",
            "value": "63.125 gm"
          },
          {
            "label": "Sodium",
            "value": "459 mg"
          },
          {
            "label": "Phosphorus",
            "value": "154.16 mg"
          },
          {
            "label": "Magnesium",
            "value": "595.40 mg"
          },
          {
            "label": "Zinc",
            "value": "215.70 mg"
          },
          {
            "label": "Ferrous",
            "value": "223.40 mg"
          },
          {
            "label": "Copper",
            "value": "158.80 mg"
          },
          {
            "label": "Cobalt",
            "value": "206.25 mg"
          }
        ],
        "indication": [],
        "indicationCategories": [
          {
            "label": "Benefits",
            "value": "Enhances egg production"
          },
          {
            "label": "",
            "value": "Enhances growth and body weight"
          },
          {
            "label": "",
            "value": "Helps in mineral deficiency"
          },
          {
            "label": "",
            "value": "Improves egg quality"
          }
        ],
        "dosage": "Usage through drinking water",
        "dosageCategories": [
          {
            "label": "Broilers",
            "value": "5 - 10 ml per 100 birds through drinking water"
          },
          {
            "label": "Layers / Breeders",
            "value": "10 - 20 ml per 100 birds through drinking water"
          }
        ],
        "withdrawal": [],
        "presentation ":  "1 liter & 5 liter",
        "image": "",
        "children": []
      },
      {
        "id": 1.4,
        "label": "SHRICALDS",
        "subLabel": "(Feed supplement of calcium with vitamin D3, B12, Zinc sulphate, Manganese, Magnesium, Satavari and Biotin)",
        "compositionText": "Each 500 ml contains",

        "composition": [
          {
            "label": "Nutritional value per",
            "value": "100ml"
          },
          {
            "label": "Calcium",
            "value": "4800 gm"
          },
          {
            "label": "Vitamin D3",
            "value": "5000 IU"
          },
          {
            "label": "Vitamin B12",
            "value": "500 mcg"
          },
          {
            "label": "Phosphorus",
            "value": "1750 mg"
          },
          {
            "label": "Magnesium",
            "value": "200 mg"
          },
          {
            "label": "Zinc Sulphate",
            "value": "25 mg"
          },
          {
            "label": "Manganese",
            "value": "15 mg"
          },
          {
            "label": "Satavari",
            "value": "500 mg"
          },
          {
            "label": "Biotin",
            "value": "20 mg"
          }
        ],
        "indication": [],
        "indicationCategories": [
          {
            "label": "Benefits",
            "value": "Improves milk yield in lactating animals and optimizes egg production in layers"
          },
          {
            "label": "",
            "value": "Prevents chances of rickets, Dystocia, Prolapse, Milk fever and stunted growth"
          },
          {
            "label": "",
            "value": "Improves feed efficiency"
          },
          {
            "label": "",
            "value": "Improves egg production, fertility, and hatchability"
          },
          {
            "label": "",
            "value": "Help as protector of essential fatty acids, Vit. D3 and Vit. B12"
          },
          {
            "label": "",
            "value": "Prevents muscular weakness, stress condition and stunted growth"
          }
        ],
        "dosage": "",
        "dosageCategories": [
          {
            "label": "Cattle and buffalo",
            "value": "100 ml daily"
          },
          {
            "label": "Calves",
            "value": "50 ml twice daily"
          },
          {
            "label": "Sheep and Goat",
            "value": "40 ml daily"
          },
          {
            "label": "Chicks",
            "value": "20 ml / 100 birds"
          },
          {
            "label": "Growers",
            "value": "50 ml / 100 birds"
          },
          {
            "label": "Layers",
            "value": "100 ml / 100 birds"
          }
        ],
        "withdrawal": [],
        "presentation ":  "1 liter, 5 liter, 10 liters, 20 liters and 40 liters",
        "image": "",
        "children": []
      },
      {
        "id": 1.5,
        "label": "ATN - 3G Powder",
        "subLabel": "An ideal combination of antibiotics, vitamins & minerals with electrolyte",
        "compositionText": "Each 10g contains",

        "composition": [
          {
            "label": "Neomycin Sulphate",
            "value": "550.6 mg"
          },
          {
            "label": "Oxytetracycline Hydrochloride",
            "value": "550.7 gm"
          },
          {
            "label": "Vitamin A",
            "value": "11000 IU"
          },
          {
            "label": "Vitamin B2 (Riboflavin) IP",
            "value": "17.8 mg"
          },
          {
            "label": "Vitamin B3 (Niacinamide) IP",
            "value": "68.1 mg"
          },
          {
            "label": "Vitamin B5 (Calcium pantothenate) IP",
            "value": "35.9 mg"
          },
          {
            "label": "Vitamin B12 (mannitol Tribulate 1: 1000) IP",
            "value": "44.0 mcg"
          },
          {
            "label": "Vitamin D3 IP",
            "value": "2200 IU"
          },
          {
            "label": "Vitamin E Acetate IP",
            "value": "3.3 IU"
          },
          {
            "label": "Vitamin K(Menadione Sodium Bisulphate)",
            "value": "14.1 mg"
          }
        ],
        "indication": [],
        "indicationCategories": [
          {
            "label": "Benefits",
            "value": "It is used for treatment and control of colibacillosis (bacterial enteritis) caused by E-coli"
          },
          {
            "label": "",
            "value": "It is used for chronic respiratory disease (CRD) and air sac infection caused by Mycoplasma gallisepticum"
          },
          {
            "label": "",
            "value": "It is used for Infectious synovitis caused by Mycoplasma synoviae"
          },
          {
            "label": "",
            "value": "It is used for improving recovery rate during viral infections"
          },
          {
            "label": "",
            "value": "It improves immune response, enhance egg production in layers"
          },
          {
            "label": "",
            "value": "It used to improve Environmental and transport stress"
          },
          {
            "label": "",
            "value": "It helps in coagulation to prevent haemorrhagic conditions"
          }
        ],
        "dosage": "Usage through Drinking Water",
        "dosageCategories": [
          {
            "label": "For Poultry",
            "value": "2 gm in 10 lit for 3 to 5 days (as preventive) 4 gm in 10 lit for 3 to 5 days (for treatment)"
          },
          {
            "label": "During Severe Outbreaks",
            "value": "8 gm in 10 liter for 3 to 5 Daysy"
          }
        ],
        "withdrawal": [],
        "presentation ":  "100 gm",
        "image": "",
        "children": []
      },
      {
        "id": 1.6,
        "label": "AB-VIT Injection",
        "subLabel": "Ideal combination of multivitamin injection",
        "compositionText": "Each ml contains",

        "composition": [
          {
            "label": "Vitamin A IP",
            "value": "1000 IU"
          },
          {
            "label": "Vitamin D3 IP",
            "value": "500 IU"
          },
          {
            "label": "Niacinamide IP",
            "value": "10 mg"
          },
          {
            "label": "Thiamine Hydrochloride IP",
            "value": "10 mg"
          },
          {
            "label": "Pyridoxine Hydrochloride IP",
            "value": "5 mg"
          },
          {
            "label": "Riboflavin sodium phosphate IP",
            "value": "35.9 mg"
          },
          {
            "label": "Cyanocobalamin IP",
            "value": "10 mcg"
          },
          {
            "label": "D-Biotin BP",
            "value": "10 mcg"
          },
          {
            "label": "D panthenol IP",
            "value": "1 mg"
          },
          {
            "label": "Choline Chloride",
            "value": "5 mg"
          },
          {
            "label": "Alpha Tocopheryl acetate IP",
            "value": "5 mg"
          },
          {
            "label": "Sodium acid phosphate IP",
            "value": "10 mg"
          },
          {
            "label": "Water for injection IP",
            "value": "Q.S"
          }
        ],
        "indication": ["All types of stress conditions and vitamin deficiency in poultry & cattle"],
        "indicationCategories": [],
        "dosage": "1 ml for 15-30 kg body weight by I.M or S.C as advised by veterinary practitioner",
        "dosageCategories": [],
        "withdrawal": [],
        "presentation ":  "100 ml vials",
        "image": "",
        "children": []
      },
      {
        "id": 1.7,
        "label": "Cocci - K powder",
        "subLabel": "(Water soluble vitamin feed supplement)",
        "compositionText": "Each gram contains",

        "composition": [
          {
            "label": "Amprolium Hydrochloride",
            "value": "200 mg"
          },
          {
            "label": "Vitamin K",
            "value": "10 mg"
          }
        ],
        "indication": ["For prevention and treatment of coccidiosis in replacement chicks, layers, and broilers and turkeys",
        "Vitamin K will help to reduce bleeding"],
        "indicationCategories": [],
        "dosage": "Dissolve Cocci-K water soluble powder in drinking water as below",
        "dosageCategories": [
          {
            "label": "For prevention",
            "value": "30 g in 50 lit of water"
          },
          {
            "label": "For Mild Infection",
            "value": "30 g in 25 lit of water"
          },
          {
            "label": "For Disease outbreaks",
            "value": "60 g in 25 lit of water"
          }
        ],
        "withdrawal": [],
        "presentation ":  "500 gm and 1kg pack",
        "image": "",
        "children": []
      }
    ]
  }
];