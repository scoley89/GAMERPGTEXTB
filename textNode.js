let state = {};
/* 
  GENDER
  isM, 
  CLASS
  isAF, isAr, isNa

  IS JOB
  if AF
  isDg
  isTG
  if AR
  isIf
  isFm
  IS NAVY
  isNLE
  isSC
  
THIS IS LIFE
  Survived

  THIS IS MOOD
  isHappy
  isShame

  isF
  isAF, isAr, isNa

  if AF

 isTF
  isTG
  

  if AR
  isWAC
  isFm

  if NAVY
  isNLE
  isSC

  Survived

  isHappy
  isShame
  */
const df = state => {
  let newObject = {};
  newObject.name = state.name;
  // MALE OPTIONS
  if (state.isM) {
    newObject.gender = "Mr. ";
    if (state.isAf) {
      newObject.class = "Air Force";
      if (state.isDg) {
        newObject.job = "Dog Figther";
      } else if (state.isTg) {
        newObject.job = "Tail Gunner";
      }
    } else if (state.isAr) {
      newObject.class = "Army";
      if (state.isIf) {
        newObject.job = "Infantry";
      } else if (state.isFm) {
        newObject.job = "Field Medic";
      }
    } else if (state.isNa) {
      newObject.class = "Navy";
      if (state.isNLE) {
        newObject.job = "Naval Law Enforcement";
      } else if (state.isSC) {
        newObject.job = "Submarine Commander";
      }
    }
    if (state.isHappy) {
      newObject.mood = "is happily married with two wonderful children";
    } else if (state.isShame) {
      newObject.mood = "came home defeated and a broken man";
    }
    // FEMALE OPTIONS
  } else if (state.isF) {
    newObject.gender = "Ms. ";
    if (state.isAf) {
      newObject.class = "Air Force";
      if (state.isWAF) {
        newObject.job = "Women's Auxiliary Force";
      } else if (state.isTg) {
        newObject.job = "Tail Gunner";
      }
    } else if (state.isAr) {
      newObject.class = "Army";
      if (state.isIf) {
        newObject.job = "Women's Auxiliary Core";
      } else if (isFm) {
        newObject.job = "Field Medic";
      }
    } else if (state.isNa) {
      newObject.class = "Navy";
      if (state.isNLE) {
        newObject.job = "Naval Law Enforcement Officer";
      } else if (state.isSC) {
        newObject.job = "Submarine Commander";
      }
    }

    if (state.isHappy) {
      newObject.mood =
        "is pursuing a career as a detective in the city of New Geaorgia";
    } else if (state.isShame) {
      newObject.mood = "came home defeated and a broken woman";
    }
  }

  return newObject;
};

const textNodes = function() {
  return [
    {
      // INTRO LTR
      id: 1,
      text:
        "This letter is from the Office of the Chief Minister of the Federation of Sovreign Lands. It is addressed to all young men and women of age who are proud citizens. After the proud people of the Empire of Ragnosal realized the means of their explosive industrial economic growth, they decided to spread their borders in hopes of gaining more resouces and wish to spread their 'Enlightened Civilization' to all the 'lower nations'. After an attack on the ancient Sey'ran Isle, the newly formed 'Allaince of Free Nations' forced the Federation's hands and has begrudgingly pulled us into a conflict that we had hoped to avoid. My fellow Citizen, it is with regret that I must inform you that you have been drafted and are legally REQUIRED to appear for active duty. We as a nation have long held individual choice as a principle beyond reproach and the irony of a draft is not beyond me or your superiors. In hopes of recompense, we offer you the choice of which branch of our Armed Forces you shall serve. Please provide us in person the following information about yourself regarding your Age, Gender and which branch you will choose to serve.",
      options: [
        {
          text: "I am a proud son of this fine land! My life for my people!",
          setState: { isM: true },
          nextText: 2
        },
        {
          text: "I am brave Lady of the Federation here to serve my Country!",
          setState: { isF: true },
          nextText: 3
        }
        // CHS 1 remeber to aid name entry text bar here ^
      ]
    },
    // ____________________________CLASS SELECT MALE__________________________________________________________
    {
      id: 2,
      text: `My sweetest Jacqueline. The timing of this horrid War could not have been set at a more remoursful time. While it is with excitment, honor, and pride that I have answered the call to arms like my brothers before me; there is no greater sorrow then being away from you at the very onset of the miracle that is our courtship. Like my eldest brother James I have choosen to serve in the best _________ this world has ever seen, so fear not my sweet those Ragnosian bastards won't know what hit them! Yours ${state.name}`,
      options: [
        {
          text: "Army",
          requiredState: currentState => currentState.isM,
          setState: { isM: true, isAr: true },
          nextText: 4
        },
        {
          text: "Navy",
          requiredState: currentState => currentState.isM,
          setState: { isM: true, isNa: true },
          nextText: 5
        },
        {
          text: "Air Force",
          requiredState: currentState => currentState.isM,
          setState: { isM: true, isAf: true },
          nextText: 6
        }
      ]
    },
    // __________________________________CLASS SELECT FEMALE_______________________________________
    {
      id: 3,
      text: `My dearest Anthony, I am sorry that you must hear of my current state this way but telling you in person would have left my heart in shables and I fear I would not have been ablt to bring myself to go to war. I know that you of all people will understand what happens to draft dodgers and that you especially would remind me of the strength of our bond. You wish to be with a strong and capable lady who, while she may carry her self with grace and class, has the strength of will and tenacity to put those treacherous Ragnosian fools in the grave were they belong. Not even the ancient Spartonian Women can hold a candle to our feminine prowess. I know that my joining the ______ will make you proud and our eventual reunion will be that much sweeter as a consquent of our distance and the constant worry that is bound to haunt us both while this war rages. Love, ${state.name}`,
      options: [
        {
          text: "Army",
          requiredState: currentState => currentState.isF,
          setState: { isF: true, isAr: true },
          nextText: 7
        },
        {
          text: "Navy",
          requiredState: currentState => currentState.isF,
          setState: { isF: true, isNa: true },
          nextText: 8
        },
        {
          text: "Air Force",
          requiredState: currentState => currentState.isF,
          setState: { isF: true, isAf: true },
          nextText: 9
        }
      ]
    },
    //__________________________MALE JOB SELECT ARMY____________________________
    {
      id: 4,
      text: `Hello my love. I hope that all is well. After reporting in, I have, by some strange miracle, found myself in the same theater of war as James! Who knows maybe we will fight side by side some day. I have asked to be placed in his unit but this is the Army and there are no promises. Today after reporting in I found out that after basic, I will be placed into my first position. I hope that the fit will be right. I am not sure how they assign these things. A strange man approached me today, he asked me for a cirgerette in a rather assuming way. My response was to ________________ . I will be sure to ask for leave as soon as possible so that we might one day be reunited but I fear that it is way to early in my war to dare to even have such thoughts. With all my love, ${state.name}`,
      options: [
        {
          text:
            "to give the man my last, offer him a light, and strike up a chat.",
          requiredState: currentState => currentState.isM,
          setState: { isM: true, isAr: true, isIf: true },
          nextText: 105
        },
        {
          text:
            "light my last and take a drag. I made sure to let him see it was the last.",
          requiredState: currentState => currentState.isM,
          setState: { isM: true, isAr: true, isTankCommander: true },
          nextText: 1000
        },
        {
          text:
            "ask the man his name and rank first, only to find that he was the General dressed in civies.",
          requiredState: currentState => currentState.isM && currentState.isAr,
          setState: { isM: true, isAr: true, isFm: true },
          nextText: 106
        }
      ]
    },
    // ______________________________MALE NAVY JOB SELECTION_________________________________________________
    {
      id: 5,
      text: `My love I long for you daily. Because of the pace of the war I have already been assigned a ship and hope that this letter will reach you soon rather than later. Usually one does basic on the main land but the Navy has been forced to adapt and we will have more then enough time to become the sailors we must be before we reach the northern front and meet the Ragnosians in their own waters. When I first arrived on the f.o.l.s. Grace (the ship I have been assigned) a young and somewhat brash sailor approached me and struck up a chat. I decided that__________. That is enough about me though, please write often and frequently. All this time on the sea fills one with unimaginable lonelyness and boredum. With more longing than can be expressed with words, ${state.name}`,
      options: [
        {
          text: "I didn`t like his additude and told him to get lost.",
          requiredState: currentState => currentState.isM,
          setState: { isM: true, isNa: true, isCook: true },
          nextText: 103
        },
        {
          text:
            "I found him a bit suspicious and decided to report him to my superior.",
          requiredState: currentState => currentState.isM,
          setState: { isM: true, isNa: true, isNLE: true },
          nextText: 51093810985
        },
        {
          text:
            "We chatted a bit. He knew a lot about the Ragnosian Navy. I accedentaly switched  bags.",
          requiredState: currentState => currentState.isM,
          setState: { isM: true, isNa: true, isSC: true },
          nextText: 894723058927
        }
      ]
    },
    // ____________________________MALE JOB SELECT AIRFORCE___________________________________________________
    {
      id: 6,
      text: `My dearest I hope this letter arrives as swiftly as possible. Having reached the western front and joined the Air Force, I have gotten a taste of the capacities of our modern technology. Jacqueline, you would not believe the speed of our war planes! To think, I might one day be in the cock pit of one of these amazing machines. Worry not my love, the only people that should be stricken with fear are the Ragnosian Sky Brigade fighters. We have a technical test coming up that will determine our roles so I decided to write to calm my nerves as you know when it comes to these kinds of tests I ____________. Wish me luck my love. I wait eagerly for your next letter, ${state.name}`,
      options: [
        {
          text: "...do Ok but usually charm my way past the teachers.",
          requiredState: currentState => currentState.isM && currentState.isAf,
          setState: { isM: true, isAf: true, isDg: true },
          nextText: 107
        },
        {
          text: "...usually freeze. I never was the brighest bulb.",
          requiredState: currentState => currentState.isM && currentState.isAf,
          setState: { isM: true, isAf: true, isTg: true },
          nextText: 108
          //_____________________________YOU ARE WORKING ON THIS LINE HERE__________________________________________
        },
        // reset goes after next iteration of this branch of the story________GAME OVER OPTION______________
        {
          text:
            "...usually excel. I am more nervious about the rumored RSB's bombing raids.",
          requiredState: currentState => currentState.isM && currentState.isAf,
          setState: { isM: true, isAf: true, isEng: true },
          nextText: 10
        }
      ]
    },
    // ____________________________FEMALE JOB SELECT ARMY_______________________________________________________
    {
      id: 7,
      text: `My Anthony, I dream of you nightly. Of late however these sweet dreams are met with nightmares of what is to come on the western front. While our Army might be more accepting of a Lady in wartimes than most they still rarely accept women on the front lines. This change is inevitable as more and more men die by the thousands. Part of me is angry that I am underestemated but the other part can not help but be glad that it is unlikely that I will be reunited with you next in a body bag. Before boot camp, I was approached by a young and charming soldier with whom I ____________ . I know that you will understand after all this is war time and things happen. Yours truely, ${state.name}`,
      options: [
        {
          text:
            "talked and decided that I am needed as close to the front as possible.",
          requiredState: currentState => currentState.isF,
          setState: { isF: true, isAr: true, isWAC: true },
          nextText: 24982759298
        },
        {
          text:
            "...flirted with after seeing a Ragno tag on his shirt. I think he is a spy and I can find Intel...",
          requiredState: currentState => currentState.isF,
          setState: { isF: true, isAr: true, isArIntel: true },
          nextText: 101
        },
        {
          text:
            "treated after he passed out, like my father the good doctor, after learning he is on the front line.",
          requiredState: currentState => currentState.isF,
          setState: { isF: true, isAr: true, isFm: true },
          nextText: 894723058927
        }
      ]
    },
    // ____________________________________FEMALE JOB SELECT NAVY_____________________________________________
    {
      id: 8,
      text: `Dearest Anthony, I am now writing you from port with news of the most recent developments. I have yet to be given my deployment orders but know that the fleet is soon to depart and with it will come an absense of your your sweet words that have been the only thing invigerating me with the life sustaining breath that I require to continue on. I do not know what, I will do without them in the coming months as we venture forward to the Naverian front to the North. One thing that has brought me hope was meeting a fellow Sailor named Janet with whom I have become fast friends. She has invited me to meet her friends and a few other members destine to sail with the 28th fleet. I am contemplating _______________ after I finish writing this letter. Hopefully friendship and comradery will be enough to partially fill the void that is the absense of your touch. With passion, longing and desire, ${state.name}`,
      options: [
        {
          text:
            "..staying aboard the vessel that I hope to crew and impressing the Comandante with my culnary skills ",
          requiredState: currentState => currentState.isF,
          setState: { isF: true, isNa: true },
          nextText: 102
        },
        {
          text: "Joining them and learning as much about my future shipmates ",
          requiredState: currentState => currentState.isF,
          setState: { isF: true, isNa: true },
          nextText: 120
        },
        {
          text:
            "staying and studying on the new miraculous under water boats I hear rumor of haunting these waters.",
          requiredState: currentState => currentState.isF,
          setState: { isF: true, isNa: true },
          nextText: 894723058927
        }
      ]
    },
    // ____________________________FEMALE JOB SELECT AIRFORCE_________________________________________________
    {
      id: 9,
      text: `Dear Anthony, The sky is the limit! While I am torn from being by your side. I can not bite back the enthusiasm and excitment that comes with the prospect of taking to the skies! You would love the view from heavens, it is absolutely breath taking! While we were on our way to roll call to be seperated into our given divisions, I decided to _____________ before we begin the exams that will assign us the roles that will determine our futures. I hope that I am placed with the within the WAF unit of the Airforce. Women have finally been granted the oppertunity to take to the skies in combat against the Ragnosian Dog fighters and we have our very own unit at that! I look forward to your next letter and will be waiting for it anxiously, do you have word on how my father's health is progressing? ${state.name}`,
      options: [
        {
          text:
            "join one of the pilots in a tag along for one of her training missions",
          requiredState: currentState => currentState.isF,
          setState: { isF: true, isAf: true, isWAF: true },
          nextText: 24982759298
        },
        {
          text:
            "join some of my fellow Air Service men and women at the firing range to blow off some steam",
          requiredState: currentState => currentState.isF,
          setState: {
            isF: true,
            isAf: true,
            isTg: true
          },
          nextText: 51093810985
        },
        // reset goes after the next iteration of this part of the story
        {
          text: "study up on these marvelous machines",
          requiredState: currentState => currentState.isF,
          setState: { isF: true, isAf: true, isEng: true },
          nextText: 11
        }
      ]
    },
    //______________________________GAMKE OVER ITTER 1 MALE AIRFORCE__________________________________________
    {
      id: 10,
      text: `This letter is being sent from Air Force Police to inform the family of one ${state.name} after passing his test to become an Air Force Engineer Officer it appears that classified documentation was handed to Ragnosian agents who had infiltrated the air base. We have yet to determine if this occured intentionally or was the result of mere negligence, regardless this incodent has resulted in dishonorable discharge from the Air Force temporary detainment until a trail date is set and a desicsion is made by trail!  GAME OVER!`,
      options: [
        {
          text: "Restart",
          nextText: 1
        }
      ]
    },
    //_______________________________GAME OVER ITERATION 1 FEMALE AIRFORCE___________________________________
    {
      id: 11,
      text: `This letter is being sent from Air Force Police to inform the family of one ${state.name} after passing her test to become an Air Force Engineer Officer it appears that classified documentation was handed to Ragnosian agents who had infiltrated the air base. We have yet to determine if this occured intentionally or was the result of mere negligence, regardless this incodent has resulted in dishonorable discharge from the Air Force temporary detainment until a trail date is set and a desicsion is made by trail! GAME OVER!`,
      // _____________________________reset goes here________________________________________________________
      options: [
        {
          text: "Restart",
          nextText: 1
        }
      ]
      //_____________________________YOU ARE WORKING ON THIS LINE HERE__________________________________________
    },
    {
      id: 101,
      //_____________________________FEMALE GAME OVER ITTERATION 1________________________________________________
      text:
        "Anthony I write now in haste and hope to dear God this is not the last I will have the oppertunity to write. If you are able there is a tree on the outskirts of the camp I was stationed at the last time I wrote. I told you that I thought I had met a spy and was trying to gleam valuable intel from him. I was not wrong! Sadly I underestmated his gile and I have just been informed my self that I wanted for espionage. He pulled one me. I am innocent of what I am sure they will accues me of, if they have not already. You are my last hope my love. I am unable to come home and will probably never be able to again. If you really do love me, move mountains my love. I need you! GAME OVER!",
      options: [
        {
          text: "Restart",
          nextText: 1
        }
      ]
    },
    {
      //_______________________reset after this slide________________________________________
      id: 102,
      text: `To whom it may concern, this is a letter of intent being sent to the emergency contact of one ${state.name}. After being accepted as a Chef on board the f.o.l.s. Grace there was an incodent after the ship was fired upon by a submarine. While the ship stayed a float, there was a gas leak in the kitchen that came as a result of the explosion. it seems that ${state.name} was hard at work on a dish of Bananas Foster Flambe which ignited the gas and killed her and everyone else in on board kitchen. She is currently in intensive care and receiving treatment for her severe burns. GAME OVER`,
      options: [
        {
          text: "Restart",
          nextText: 1
        }
      ]
    },
    //_____________________MALE NAVY GAME OVER ITTERATION 1____________________________________________________________
    {
      id: 103,
      text:
        "My dearest, I recieved your last letter and all I can say is I know the decision to blow smoke in that officers face was a mistake! You are right and I understand that me being religated to the kitchen is not the most nobel of positions but you don´t have to do this. It has been months and I have yet to recieve a letter from you despite us going to port multiple times. In your last letter you said you had met somebody new? This can not be true. I will make up for this I promise please. I need you more than you know. I will do anything! Take me back baby! GAME OVER!",
      options: [
        {
          text: "Restart",
          nextText: 1
        }
      ]
    },

    // currentState.isM.isAr
    // currentState = {ismale {isAr {isisIf}}}
    // ____________________LAST FINISHED SLIDE MOVE THIS LINE AS YOU GO!_______________________________________________
    {
      id: 105,
      text:
        `Dearest, Every letter you write brings new life to this Infantryman. It turns out that man I offered that ciggerette to was my Sergeant are Arms. After our chat and him hearing of the distain I feel for those Ragnosian vermin, I have been granted the oppertunity to slay them in person on the front lines! When I return home it will be as a hero or in a body bag! I will make you proud and do all in my power to end this war as fast as possible! I have been given the honor of leading a unit of five men and we have been given intel on possible enemy location. I plan to do what I must to impress my Sergeant and so I have decided to ____________. As always, I am looking forward to your next letter. love, ${state.name}`,
      options: [
        {
          text:
            "engage enemy solo. Why put my men in harms way when the enemy numbers are so low at this position",
          requiredState: currentState => currentState.isIf,
          setState: { isM: true, isAr: true, isIf: true },
          nextText: 01010101010101
        },
        {
          text:
            "wait and engage enemy with my unit.They have all arived and we need a battle plan and group training",
          requiredState: currentState => currentState.isIf,
          setState: { isM: true, isAr: true, isIf: true },
          nextText: 1010101010101010101
        },
        {
          text:
            "retreat and wait for a better opertunity to play to our strengths. The terrain suits the enemies capabilites. Why risk it?",
          requiredState: currentState => currentState.isIf,
          setState: { isM: true, isAr: true, isIf: true },
          nextText: 101010101101
        }
      ]
    },

    {
      id: 106,
      text:
        `Lovely Jacqueline, as always the thought of you brings new life back into this poor soul. Thankfully after asking the name of that strange man I learned that he was in fact my superior in civies. After we decided to share my last cigerrette he took favor on me and he decided to have me trained as Feild Medic and as such, while I do find myself on the front lines, I am really in the scope of anyone's rifle. I wish this letter was all good news though my sweat, however I will be suprised if this letter even reaches you. Our encampment has been surrounded and the Infantryman that have been sent to clear our escape have also been routed and I fear severly injured by the color of the flares they have just fired. I know that some might doubt this decision but with the enemy encroaching, I have decided to _________________ . Forever yours, ${state.name}`,
      options: [
        {
          text: "...run to the Front lines and aid the injured.",
          requiredState: currentState => currentState.isAr,
          setState: { isM: true, isAr: true, isFm: true },
          nextText: 10101010101010101010101
        },
        {
          text: "...abandon my post and come home to you alive but in shame.",
          requiredState: currentState => currentState.isAr,
          setState: { isM: true, isAr: true, isFm: true },
          nextText: 01010101010101010101010
        },
        {
          text:
            "...wait and hope that support and more supplies find us by the grace of God.",
          requiredState: currentState => currentState.isAr,
          setState: { isM: true, isAr: true, isFm: true },
          nextText: 11001100110011001100110011
        }
      ]
    },

    {
      id: 107,
      text:
        `I am sorry that it has been a long while sense writing my dearest. I have not moved on and I hope that I continue to maintain your affection. My training has engulfed me day and night for weeks. While technically my grades on the assesment test were not at the level needed to be a Dog Fighter, my superior liked my ambition,confidence, and persistense. I must thank you for reminding me that those were my best qualties. Sometimes I feel you know me better than I know myself. My boys and I are one hell of a team and have already grabbed a few boggies from the skies. We have just received order for our most dangerous mission yet against the new Ragnosian fighters. I have seen the specs we have on them and think they are a bit over rated and as such I have decided that when we fly next I will_____________________. Your knight in the skies, ${state.name}` ,
      options: [
        {
          text:
            "engage the enemies solo and come home an ACE! You should see me fly!",
          requiredState: currentState => currentState.isAf,
          setState: { isM: true, isAf: true, isDg: true },
          nextText: 109
        },
        {
          text:
            "take my boys and enage the enemy and show them what it means to be a Federation Dog Fighter!",
          requiredState: currentState => currentState.isAf,
          setState: {
            isM: true,
            isAf: true,
            isDg: true,
            isSuccessful: true
          },
          nextText: 110
        },
        {
          text:
            "call my boys back and wait for a bit more intel on the new menace. Better safe than sorry!",
          requiredState: currentState => currentState.isAf,
          setState: { isM: true, isAf: true, isDogFighte: true },
          nextText: 894723058927
        }
      ]
    },
    // ____________________________________This is the copy line____________________________________________

    {
      id: 108,
      text:
        "My love I have exciting news. While we both know my wits have never been my strongest spot, my aim with a GPS 60 cal is unmatched. I have been assigned to a bomber that will be raining hell from the sky over Ragnosian cities and railroads. If they send Dog Fighters our way, then I as a Tail Gunner get to have my fun shooting them out of the skies and sending them back to their homeland a lot quicker than they expected their return. We have just recieved our orders to fly our next round of sorties and if I see a Dog Fighter I plan to_________.",
      options: [
        {
          text:
            "take my time and put that aim of mine to use. No need let off all nine yards before landing a shot",
          requiredState: currentState => currentState.isAf,
          setState: { isM: true, isAf: true, isTg: true },
          nextText: 113
        },
        {
          text: "Blast them out of the skies at the first oppertunity!",
          requiredState: currentState => currentState.isAf,
          setState: { isM: true, isAf: true, isTg: true },
          nextText: 114
        },
        {
          text:
            "get the hell out of dodge before it´s time to rally for the mission. I have seen the specs on their new fighters. We don´t have anything that keep the pace!",
          requiredState: currentState => currentState.isAf,
          setState: { isM: true, isAf: true, isTg: true },
          nextText: 115
        }
      ]
    },
    {
      id: 109,
      text: `Dear Jacqueline, If you are reading this then I fear the worst has befallen me and I have died in the line of combat. It also means that my actions spared the lives of my men, whom I am now eternally indebted to as this letter was propably delivered to you in person by the 2nd in command of my unit Jack. If you would provide him with all the hospitality you can muster as is he a good man and my loss has probably hit him as hard as I fear it has hit you. Because of my arrogance, I will never be able to provide you the life I had dreamed we might have. All I can say is I am sorry and in my breif time on this earth you made me the happiest of men. I senserly wish we had had more time together. Know that your happiness is all that matters at this point. Sorrow can be a drug in its own right, please do not give in to it'S temptations. Find another, start a family and live on. You deserve all the world has to offer. With all the love I have left in me and with your name whispered from my dying breath, yours ${state.name}      GAME OVER!`,
      options: [
        {
          text: "Restart",
          nextText: 1
        }
      ]
    },

    {
      id: 110,
      text:
        `My beloved Jacqueline, Good News! While my last mission was by far the scariest situation I have ever found myself in, I am writing means I am not only alive but have come home with two kills under my belt and a promotion and title that comes with such an accomplishment. I have included in this letter some money that I hope will help you afford the medication needed for your father's ailment and maybe have a bit left over for something special for yourself. You have done so much for me over the course of this war and my new title has it's perks and as such you can count on a similar ammount with every letter I write from here on. Not all the news is good, however. I lost two good men in the last mission and my 2nd in command Jack just barely made it out himself and will require another plane as his was damaged beyond repair upon the landing when we returned. He took a round himself and is in the infermary. He has promised, none the less, that the damage is minimal and he can return to the skies in time for our next mission. That is the last bit of mixed news, this mission looks to be the most difficult yet but it could change the course of the war itself! We are going at the heart of the Empire of Ragnosal. If we are succefull and I write you next I plan ______________ . Yours, ${state.name}`,
      options: [
        {
          text:
            "to return home either on leave or victorious with a suprise in hand and I question demanding a more appropriate setting.",
          requiredState: currentState => currentState.isSuccessful,
          setState: {
            isM: true,
            isDg: true,
            isAf: true,
            survived: true,
            isHappy: true,
            isWarHero: true
          },
          nextText: 111
        },
        {
          text:
            "to admit a disgretion and accept the conquences rendered as a result what ever they may be.",
          requiredState: currentState => currentState.isSuccessful,
          setState: { isM: true, isNa: true },
          nextText: 112
        }
      ]
    },
    // const isStephenCool = 1 + 1 ? true : false
    // ________________________VICTORY SLIDE GET HELP WITH AIRFORCE________________________________________
    {
      id: 111,
      text: `This is a personal letter from the Office of the Chief Minister of the Federation of Sovreign Lands. congratulation Sergeant Major ${
        state.name
      }. Your service as a ${
        df(state).job
      } was essential to insuring that the Federation of Sovreign Lands and the Allaince of Free Nations were victorious over the attempts of the Empire of Ragnosal at global conquest. ${
        df(state).gender
      }${
        df(state).name
      }, after a heroing experience during his brutal struggle during the nightmare that was most certainly his war, currently ${
        df(state).mood
      }. Once again I must say congratulation ${df(state).gender}${
        df(state).name
      } your struggle is over. Today the ${
        df(state).class
      } is losing one of it´s finiest assests but for all the right reasons. Enjoy the fruits of your labors and if there is any way at all I can assist you in this, please do not hesitate to ask!`,
      options: [
        {
          text: "Army",
          requiredState: currentState => currentState.isF,
          setState: { isM: true, isAr: true },
          nextText: 24982759298
        },
        {
          text: "Navy",
          requiredState: currentState => currentState.isF,
          setState: { isM: true, isNa: true },
          nextText: 51093810985
        },
        {
          text: "Air Force",
          requiredState: currentState => currentState.isF,
          setState: { isM: true, isAf: true },
          nextText: 894723058927
        }
      ]
    },
    // _________________________SURVIVE IN SHAME DEFEAT AIRFORCE_______________________
    {
      id: 112,
      text: `My dearest, While I have survived the battle the rest of my unit did not. Our mission did not end in success.  it seems that while the Federations resources were focused on what we thought was the final push, in all actuallity the Ragnosian had similar plan and have now their Navy and a good portion of their own Air Force will be pushing at the very borders of the Federation of Sovreign Lands itself! I have included a plan for you and your families escape and enough to make the bribes you have to pay to get out. Lastly, after what had appeared initial success I must admit I gave into temptations of my success with a certain patron of a bar outside our base. I will not write again out of shame, if you or your family can find it in yourself to forgive me, I do not deserve it and will only respond if you need my help in order to survive. With great shame, ${state.name} DEFEAT!`,
      options: [
        {
          text: "Army",
          requiredState: currentState => currentState.isF,
          setState: { isF: true, isAr: true },
          nextText: 24982759298
        },
        {
          text: "Navy",
          requiredState: currentState => currentState.isF,
          setState: { isF: true, isNa: true },
          nextText: 51093810985
        },
        {
          text: "Air Force",
          requiredState: currentState => currentState.isF,
          setState: { isF: true, isAf: true },
          nextText: 894723058927
        }
      ]
    },

    {
      id: 113,
      text:
        `Jacqueline my love, the mission was a success. I have just now learned that our last bombing target was of vital importance and I may have played a small role in bringing this war to an end! Not only that but I got to play a part directly by bringing down one of the menace fighter jets the bastards sent screaming our way. I now have a new nick name amoungst the crew at base. That call me Top Shot these days. Everyone onboard our bomber has recieved a promotion and optional leave. While it pains my heart, most men are not accepting it and I plan _________ . To think though that this horrid war may soon draw to a close. I think about you constantly and hope that the bonus money I have sent with this letter will help your father get the meds he needs. Yours through thick and thin, ${state.name}`,
      options: [
        {
          text:
            "...to be sane and not miss my chance to hold you in my arms again. My war has been long enough!",
          requiredState: currentState => currentState.isTg,
          setState: {
            isM: true,
            isAf: true,
            isTg: true,
            survived: true
          },
          nextText: 80085
        },
        {
          text:
            "to stay and play my role. I love you but these men would die for me and I feel I must do right by them and by you.",
          requiredState: currentState => currentState.isTg,
          setState: {
            isM: true,
            isAf: true,
            isTg: true,
            survived: true
          },
          nextText: 116
        }
      ]
    },

    {
      id: 104,
      text:
        `My sweetest Jacqueline. The timing of this horrid War could not have been set at a more remoursful time. While it is with excitment, honor, and pride that I have answered the call to arms like my brothers before me; there is no greater sorrow then being away from you at the very onset of the miracle that is our courtship. Like my eldest brother James I have choosen to serve in the best _________ this world has ever seen, so fear not my sweet those Ragnosian bastards won't know what hit them! Your warrior in the making, ${state.name}`,
      options: [
        {
          text: "Army",
          requiredState: currentState => currentState.isM,
          setState: { isM: true, isAr: true },
          nextText: 24982759298
        },
        {
          text: "Navy",
          requiredState: currentState => currentState.isM,
          setState: { isM: true, isNa: true },
          nextText: 51093810985
        },
        {
          text: "Air Force",
          requiredState: currentState => currentState.isM,
          setState: { isM: true, isAf: true },
          nextText: 894723058927
        }
      ]
    },
    {
      id: 113,
      text: "STUFF GOES HERE",
      options: [
        {
          text: "STUFF GOES HERE",
          requiredState: currentState => currentState.isF,
          setState: { isM: true, isAf: true, isTg: true },
          nextText: 24982759298
        },
        {
          text: "STUFF GOES HERE",
          requiredState: currentState => currentState.isTg,
          setState: { isM: true, isAf: true, isTg: true },
          nextText: 51093810985
        }
      ]
    },
    {
      id: 114,
      text: "STUFF GOES HERE",
      options: [
        {
          text: "STUFF GOES HERE",
          requiredState: currentState => currentState.isF,
          setState: { isM: true, isAf: true, isTg: true },
          nextText: 24982759298
        },
        {
          text: "STUFF GOES HERE",
          requiredState: currentState => currentState.isTg,
          setState: { isM: true, isAf: true, isTg: true },
          nextText: 51093810985
        },
        {
          text: "STUFF GOES HERE",
          requiredState: currentState => currentState.isM,
          setState: { isM: true, isAf: true, isTg: true },
          nextText: 894723058927
        }
      ]
    },
    // ________________________HIDDEN MESSAGE IN CODE GOES HERE_____________
    {
      id: 115,
      text: `Dear Sir or Madam, this letter is from Lieutenant Johnathan McKneil of the Air Force Polic Force of the Federation of Sovereign Lands and is regarding one ${state.name}. After abandoning his post, he was apprehend and will be serving time equivalent to the severity of his crimes. Documentatoin on how to reach him has also been enclosed in this letter. Have a nice day. Respectfully, Lieutenant McKneil ------ GAME OVER!`,
      options: [
        {
          text: "Restart",
          nextText: 1
        }
      ]
    },
    {
      id: 80085,
      text:
        `Dearest, I know that my actions today will cause you and our family great pain but it is pain itself that has driven me to this. I do not regret coming home and being with you but I am filled with a regret unbeknowst to anyone on the face of this planet because I was not there when my crew died in that final battle. The victory they acheived is what has granted us the oppertunties and success we had in our life sense the war came to an end. I thought that a life with you and our childeren would allow me to over come the grief of what feels like my betrayal. I have already made my arrangements and you will be well taken care of. Our childeren have grown old and are idependent in their own right. Please know that you were the only reason I was able to make it this long and I can not subject you to anymore of the depression that comes when I inevitably empty the bottle on hard nights. Please carry on and do what you can to forget me. I don't deserve you or the life we have. I beg you find someone more deserving of your love. With the very last onces of love I have for this world, yours ${state.name}  YOU HAVE COME HOME VICTORIOUS BUT HAVE LOST YOUR PERSONAL WAR ---- GAME OVER!`,
      options: [
        {
          text: "Restart",
          nextText: 1
        }
      ]
    },
    {
      id: 116,
      text: "Run and Hide Arch",
      options: [
        {
          text: "STUFF GOES HERE",
          requiredState: currentState => currentState.isTg,
          setState: {
            isF: true,
            isAf: true,
            isTg: true
          },
          nextText: 24982759298
        },
        {
          text: "STUFF GOES HERE",
          requiredState: currentState => currentState.isTg,
          setState: {
            isF: true,
            isAf: true,
            isTg: true
          },
          nextText: 51093810985
        },
        {
          text: "STUFF GOES HERE",
          requiredState: currentState => currentState.isM,
          setState: {
            isF: true,
            isAf: true,
            isTg: true
          },
          nextText: 894723058927
        }
      ]
    },
    {
      id: 120,
      text: `Dearest, I hope all is well at home. Things here a developing in a way I never could have foreseen. After meeting with my friends, I discovered quite by accident a bloody shirt within Janet's satchle bag. I was later informed by my superiors that a murder had occured of a man by what the police suspected to be his jilted lover. After my discovery I followed Janet and observed her disposing of rather large bags containing something into the ocean. I reported my suspesions to my superiors along with the location where she had disposed of the weighted bags. Because of my actions it was proven that she was in fact the killer and my superiors decided that a career in Naval Law Enforcment was best suited for me. Now that I have a new murder case this time officially given to me, the question is whether I should _______________________. I hope the dangers of my new position will not worry you to much, my love. Now and forever yours, ${state.name}`,
      options: [
        {
          text:
            "...presue the suspect myself and avoid the issue of a possible internal source?",
          requiredState: currentState => currentState.isF && currentState.isNa,
          setState: { isF: true, isNa: true, isNLE: true, survived: true },
          nextText: 121
        },
        {
          text:
            "...turn over all the intel I have gathered on the possible suspect to my supervisor?",
          requiredState: currentState => currentState.isF && currentState.isNa,
          setState: { isF: true, isNa: true, isNLE: true, survived: true },
          nextText: 1101
        },
        {
          text:
            "...wait before I make any decisions and hope that the suspect slips up and gives me something to work with?",
          requiredState: currentState => currentState.isF && currentState.isNa,
          setState: { isF: true, isNa: true, isNLE: true, isDead: true },
          nextText: 11113
        }
      ]
    },
    {
      id: 121,
      text:
        "My love, after a tailing my suspect in a daring chase, I managed to track him back as he returned to the scene of the crime in search of something. After we detained him some exciting news came to light. It appears he was a double agent and his victim was a spy for us! He had returned to the scene of the crime to retrieve a folder of documents that the intelligence agencies may be instrumental in brining this war to an END! Hopefully we will be reunited soon, my love! I have been given a promotion to Detective and will be granted leave as a bonus for my work. Before I return to your embrace though,I fear I must ___________. ",
      options: [
        {
          text:
            "...inform you that I plan on prioritzing my career above the prospects of a family!",
          requiredState: currentState =>
            currentState.isNLE && currentState.survived,
          setState: {
            isF: true,
            isNa: true,
            isNLE: true,
            survived: true,
            isHappy: true
          },
          nextText: 325
        },
        {
          text:
            "inform you that my father is old fashioned, if you had hopes of a family. You will need his permission, before you ask for my hand.",
          requiredState: currentState =>
            currentState.isNLE && currentState.survived,
          setState: { isF: true, isAf: true, isNLE: true, isShame: true },
          nextText: 51093810985
        }
      ]
    },
    {
      id: 122,
      text:
        "Dearest Anthony, Getting to know my fellow crewman has proven to be one of the best decisions of my life. After doing wonderfully on my exams, I have choosen a career in Navel Law enforcement. I have a few cases under my belt at this point and have been assaigne",
      options: [
        {
          text: "STUFF GOES HERE",
          requiredState: currentState => currentState.isTg,
          setState: { isM: true, isAf: true, isTg: true },
          nextText: 24982759298
        },
        {
          text: "STUFF GOES HERE",
          requiredState: currentState => currentState.isTg,
          setState: { isM: true, isAf: true, isTg: true },
          nextText: 51093810985
        },
        {
          text: "STUFF GOES HERE",
          requiredState: currentState => currentState.isM,
          setState: { isM: true, isAf: true, isTg: true },
          nextText: 894723058927
        }
      ]
    },
    // _________________________________________________
    // _________________________________________________
    // _________________________________________________
    // _________________________________________________
    {
      id: 325,
      text: `This is a personal letter from the Office of the Chief Minister of the Federation of Sovreign Lands. Congradulation First Sergeant ${
        state.name
      }. Your service as a ${
        df(state).job
      } was essential to insuring that the Federation of Sovreign Lands and the Allaince of Free Nations were victorious over the attempts of the Empire of Ragnosal at global conquest. ${
        df(state).gender
      }${
        df(state).name
      }, after a heroing experience her brutal struggle during the nightmare that was most certainly her war, currently ${
        df(state).mood
      } Congradulation ${df(state).gender}${
        df(state).name
      } your struggle is over. Enjoy the fruits of your labors and if there is any way at all I can assist you in this, please do not hesitate to ask!`
      // options: [
      //   {
      //     text: "STUFF GOES HERE",
      //     requiredState: currentState => currentState.isNLE && currentState.isF,
      //     setState: { isM: true, isAf: true, isTg: true },
      //     nextText: 24982759298
      //   },
      //   {
      //     text: "STUFF GOES HERE",
      //     requiredState: currentState => currentState.isNLE && currentState.isF,
      //     setState: { isM: true, isAf: true, isTg: true },
      //     nextText: 51093810985
      //   },
      //   {
      //     text: "STUFF GOES HERE",
      //     requiredState: currentState => currentState.isNLE,
      //     setState: { isM: true, isAf: true, isTg: true },
      //     nextText: 894723058927
      //   }
      // ]
    },
    {
      id: 1133,
      text: "STUFF GOES HERE",
      options: [
        {
          text: "STUFF GOES HERE",
          requiredState: currentState => currentState.isTg,
          setState: { isM: true, isAf: true, isTg: true },
          nextText: 24982759298
        },
        {
          text: "STUFF GOES HERE",
          requiredState: currentState => currentState.isTg,
          setState: { isM: true, isAf: true, isTg: true },
          nextText: 51093810985
        },
        {
          text: "STUFF GOES HERE",
          requiredState: currentState => currentState.isM,
          setState: { isM: true, isAf: true, isTg: true },
          nextText: 894723058927
        }
      ]
    },
    {
      id: 1133,
      text: "STUFF GOES HERE",
      options: [
        {
          text: "STUFF GOES HERE",
          requiredState: currentState => currentState.isTg,
          setState: { isM: true, isAf: true, isTg: true },
          nextText: 24982759298
        },
        {
          text: "STUFF GOES HERE",
          requiredState: currentState => currentState.isTg,
          setState: { isM: true, isAf: true, isTg: true },
          nextText: 51093810985
        },
        {
          text: "STUFF GOES HERE",
          requiredState: currentState => currentState.isM,
          setState: { isM: true, isAf: true, isTg: true },
          nextText: 894723058927
        }
      ]
    }
  ];
};
