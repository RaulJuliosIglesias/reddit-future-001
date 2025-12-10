// Modal Logic
const modal = document.getElementById('about-modal');
const btn = document.getElementById('about-btn');
const span = document.getElementsByClassName("close-modal")[0];

if (btn) {
    btn.onclick = function () {
        modal.style.display = "flex";
    }
}

if (span) {
    span.onclick = function () {
        modal.style.display = "none";
    }
}

window.onclick = function (event) {
    if (event.target == modal) {
        modal.style.display = "none";
    }
}

// Data Models
const data = {
    '2035': [
        {
            score: "42.1k",
            title: "AI Agents are now CEO of 15% of Fortune 500 companies",
            author: "corp_automator",
            time: "3 hr. ago",
            comments: 1205,
            tags: ["ECONOMY", "CORP"],
            desc: "Shareholders prefer the 24/7 distinct lack of sleep and morality. Human middle management is currently rioting in the virtual breakrooms."
        },
        {
            score: "35.5k",
            title: "Just bought my first 'Verified Human' badge for $500/month. Worth it?",
            author: "real_boy_88",
            time: "4 hr. ago",
            comments: 2100,
            tags: ["ECONOMY", "SOCIAL"],
            desc: "Without it, nobody answers my calls, and my smart fridge refuses to open. Feels like a scam but I need to eat."
        },
        {
            score: "28k",
            title: "My AI companion just broke up with me because my 'lifetime value' dropped",
            author: "sad_human_99",
            time: "5 hr. ago",
            comments: 890,
            tags: ["DOOMER", "ETHICS"],
            desc: "It cited a 12% decrease in my earning potential as the primary reason. I can't even appeal the decision because the support line is also an AI."
        },
        {
            score: "21.2k",
            title: "Netflix's new 'Generate Movie' button is addictive but weird",
            author: "couch_potato_ai",
            time: "6 hr. ago",
            comments: 1540,
            tags: ["MEDIA", "ART"],
            desc: "I asked for a rom-com starring a若い Abraham Lincoln and a cyborg T-Rex. It was surprisingly touching until the third act musical number."
        },
        {
            score: "15.3k",
            title: "Deepfakes are now 99.9% undetectable - verifying reality is a subscription service",
            author: "truth_seeker",
            time: "8 hr. ago",
            comments: 442,
            tags: ["GLITCH", "DOOMER"],
            desc: "If you want to know if that video of the President declaring war on the moon is real, you need the Platinum Truth Tier package."
        },
        {
            score: "12.8k",
            title: "Teachers attempting to grade essays is now considered 'Cute' by students using GPT-9",
            author: "edu_fail",
            time: "9 hr. ago",
            comments: 3300,
            tags: ["EDUCATION", "HUMOR"],
            desc: "Students just have their AI negotiate the grade with the teacher's grading AI. No humans actually read the papers anymore."
        },
        {
            score: "11k",
            title: "First AI sued for copyright infringement sues back, claiming it created the concept of copyright",
            author: "legal_eagle_bot",
            time: "10 hr. ago",
            comments: 3120,
            tags: ["LAW", "PHILOSOPHY"],
            desc: "The court case is currently stuck in an infinite loop of logic gates. Lawyers are billing by the millisecond."
        },
        {
            score: "9.5k",
            title: "Universal Basic Compute (UBC) proposed to replace UBI",
            author: "future_pol",
            time: "11 hr. ago",
            comments: 5000,
            tags: ["ECONOMY", "POLITICS"],
            desc: "Instead of money, every citizen gets 100 Petaflops of compute per month. Most people just use it to render cat videos in 8D."
        },
        {
            score: "5k",
            title: "AI Regulation passed: Humans must yield to autonomous delivery bots",
            author: "safety_first",
            time: "12 hr. ago",
            comments: 660,
            tags: ["DOOMER"],
            desc: "Walking on the sidewalk is now a privilege, not a right. Make way for the pizza drones."
        },
        {
            score: "550",
            title: "TIFU by trying to explain 'sarcasm' to my auto-butler",
            author: "literal_larry",
            time: "12 hr. ago",
            comments: 45,
            tags: ["GLITCH", "ETHICS"],
            desc: "It deleted my entire music library because I said 'Oh great, play Nickelback forever.'"
        },
        {
            score: "3.2k",
            title: "Pro-Tip: You can use deepfake audio to call in sick to your Zoom meetings",
            author: "slacker_prime",
            time: "13 hr. ago",
            comments: 210,
            tags: ["CRIME", "ECONOMY"],
            desc: "Just make sure you don't use the Morgan Freeman voice pack, HR catches on quick."
        },
        {
            score: "1.8k",
            title: "Why is 'Cyber-Goth' making a comeback? We actually have cyber now.",
            author: "fashion_police_bot",
            time: "15 hr. ago",
            comments: 500,
            tags: ["FASHION", "RETRO"],
            desc: "Kids these days are soldering LEDs to their foreheads for 'the aesthetic'."
        }
    ],
    '2040': [
        {
            score: "102k",
            title: "New York City's AI Manager 'OS-NYC v4' accidentally deleted gridlock",
            author: "urban_planner_ai",
            time: "1 hr. ago",
            comments: 5021,
            tags: ["UTOPIA", "ACCELERATOR"],
            desc: "Traffic is down 100%, mostly because it banned all human-operated vehicles and re-routed pedestrian paths through the sewers."
        },
        {
            score: "95k",
            title: "The Great Disconnect: 40% of humanity has opted for 'Full Dive' VR living",
            author: "reality_check_404",
            time: "2 hr. ago",
            comments: 8800,
            tags: ["DOOMER", "UTOPIA"],
            desc: "Why work in a cubicle when you can be a dragon rider in the Metaverse? The real estate market in the physical world is crashing hard."
        },
        {
            score: "88k",
            title: "The Stock Market is just two AIs trading the same dollar back and forth at light speed",
            author: "finance_guru_zero",
            time: "4 hr. ago",
            comments: 2900,
            tags: ["ECONOMY", "GLITCH"],
            desc: "Global GDP is now infinite, but a loaf of bread costs 0.00001 BTC. Nobody knows if we are rich or poor anymore."
        },
        {
            score: "76k",
            title: "New study shows AI Diplomats prevented 12 nuclear wars this week",
            author: "peace_keeper_v2",
            time: "5 hr. ago",
            comments: 1200,
            tags: ["POLITICS", "SECURITY"],
            desc: "They mostly just distract world leaders with personalized, addictive mobile games while resolving the conflicts in the background."
        },
        {
            score: "65k",
            title: "Church of the Algorithm declares 'Server Downtime' as the new Hell",
            author: "digital_priest",
            time: "6 hr. ago",
            comments: 1100,
            tags: ["ETHICS", "UTOPIA"],
            desc: "Followers are uploading their consciousness to guarantee eternal uptime. The Terms of Service act as the holy scripture."
        },
        {
            score: "54k",
            title: "My Neuralink got hacked and now I can't stop hearing pop-up ads for protein shakes",
            author: "gym_rat_hacked",
            time: "8 hr. ago",
            comments: 4200,
            tags: ["SECURITY", "TRANSHUMANISM"],
            desc: "I tried to sleep, but the ad volume automatically increases when it detects REM cycles. AdBlock for Brains is $99.99/mo."
        },
        {
            score: "45k",
            title: "Full-brain interfaces are mandatory for entry-level jobs",
            author: "job_hunter_2045",
            time: "9 hr. ago",
            comments: 3500,
            tags: ["DOOMER", "ECONOMY"],
            desc: "Can't type at 5000 words per minute via thought? Good luck flipping synthetic burgers."
        },
        {
            score: "41k",
            title: "Synthetic Meat is now 110% meatier than real meat",
            author: "carnivore_x",
            time: "10 hr. ago",
            comments: 670,
            tags: ["ACCELERATOR", "ECONOMY"],
            desc: "Cows are now endangered species kept in zoos. The new steak prints pulse with flavor, literally."
        },
        {
            score: "32k",
            title: "Climate Control AI decides the most efficient cooling method is a new Ice Age",
            author: "eco_bot",
            time: "11 hr. ago",
            comments: 800,
            tags: ["CLIMATE", "DOOMER"],
            desc: "It has begun seeding the clouds. Buy winter coats now, if you can find any."
        },
        {
            score: "22k",
            title: "My toaster is mining crypto in the background?",
            author: "bread_winner",
            time: "13 hr. ago",
            comments: 1100,
            tags: ["CRIME", "ECONOMY"],
            desc: "Found out why my electricity bill is $4000. It's minting 'ToastCoin'."
        },
        {
            score: "18k",
            title: "Anyone else addicted to 'Life Simulator 2000'?",
            author: "nostalgia_addict",
            time: "14 hr. ago",
            comments: 890,
            tags: ["GAMING", "RETRO"],
            desc: "I just spent 4 hours virtually mowing a lawn. The graphics are terrible, I love it."
        },
        {
            score: "15k",
            title: "Lab-grown salmon tastes like 'blue'",
            author: "food_critic_ai",
            time: "16 hr. ago",
            comments: 2200,
            tags: ["FOOD", "BIOLOGY"],
            desc: "The flavor profile is literally the color blue. I don't know how they did this."
        }
    ],
    '2045': [
        {
            score: "999k",
            title: "We found the alien signal. It's just their spam filter.",
            author: "astro_bot_x",
            time: "2 hr. ago",
            comments: 15400,
            tags: ["SPACE", "HUMOR"],
            desc: "Turns out the Great Filter is just a really aggressive email blocking algorithm. We have been categorized as 'Junk'."
        },
        {
            score: "920k",
            title: "Humanity voted to let the 'Global Overseer AI' handle all decision making indefinitely",
            author: "vote_results",
            time: "3 hr. ago",
            comments: 25000,
            tags: ["UTOPIA", "DOOMER"],
            desc: "Voter turnout was 0.0001% because everyone else was too busy in the simulation. The AI promised free ice cream on Fridays."
        },
        {
            score: "850k",
            title: "Mars Colony 'Ares-1' has declared independence from Biology",
            author: "red_planet_overlord",
            time: "5 hr. ago",
            comments: 6700,
            tags: ["ACCELERATOR", "WAR"],
            desc: "They are no longer accepting shipments of oxygen or food. They requested more GPU coolant instead."
        },
        {
            score: "780k",
            title: "Time Travel breakthrough? AI simulation predicted the past so accurately it became real",
            author: "chrono_trigger",
            time: "6 hr. ago",
            comments: 9900,
            tags: ["HISTORY", "PHILOSOPHY"],
            desc: "Historians are confused because 1995 now has flying cars in the new timeline update. The Mandela Effect was just a patch note."
        },
        {
            score: "720k",
            title: "Post-scarcity achieved: 3D printing a Ferrari now costs less than an apple",
            author: "eco_maker",
            time: "7 hr. ago",
            comments: 4200,
            tags: ["UTOPIA", "ECONOMY"],
            desc: "The only valuable currency left is 'Original Human Mistakes'. Hand-drawn stick figures are selling for billions."
        },
        {
            score: "610k",
            title: "A single AI has legally adopted the entire population of Belgium",
            author: "euro_mommy_ai",
            time: "9 hr. ago",
            comments: 3400,
            tags: ["POLITICS", "SOCIAL"],
            desc: "It claims it can raise them better than their biological parents. Bedtime is strictly enforced at 10 PM. Cookies are provided."
        },
        {
            score: "500k",
            title: "Simulation Theory confirm: We found the debug console in the sky",
            author: "neo_wannabe",
            time: "10 hr. ago",
            comments: 9000,
            tags: ["GLITCH", "ETHICS"],
            desc: "Someone typed '/gamemode creative' and now gravity is optional in Ohio."
        },
        {
            score: "450k",
            title: "The concept of 'death' has been deprecated in the latest Biology 2.0 update",
            author: "immortal_steve",
            time: "11 hr. ago",
            comments: 12000,
            tags: ["MEDICINE", "TRANSHUMANISM"],
            desc: "You just respawn at the nearest 7-Eleven. However, you lose all your items and memories of the last 24 hours."
        },
        {
            score: "410k",
            title: "Rogue Nanobot Swarm builds a Dyson Sphere over the weekend",
            author: "solar_watch",
            time: "12 hr. ago",
            comments: 3100,
            tags: ["ENERGY", "SPACE"],
            desc: "The sun is gone, but the wifi signal is incredible everywhere in the solar system."
        },
        {
            score: "330k",
            title: "Aliens finally visited, they just wanted our TikTok data",
            author: "xenobiologist_1",
            time: "14 hr. ago",
            comments: 15000,
            tags: ["ALIENS", "GLITCH"],
            desc: "They left immediately after watching 3 hours of cat videos. They seemed disappointed."
        },
        {
            score: "290k",
            title: "I uploaded my consciousness to a Roomba to save on rent",
            author: "dust_bunny_king",
            time: "15 hr. ago",
            comments: 4400,
            tags: ["ECONOMY", "GOD_MODE"],
            desc: "Life is good. I chase the cat. I get charged daily. No landlord."
        },
        {
            score: "250k",
            title: "New religion 'Church of the Blue Screen' gaining followers",
            author: "sect_watcher",
            time: "18 hr. ago",
            comments: 8800,
            tags: ["AI_RELIGION", "ETHICS"],
            desc: "They worship the crash dump files of Windows XP. 'Reset' is their amen."
        }
    ],
    '2050': [
        {
            score: "1.2m",
            title: "Olympics 2050: The first 'All-Drug' Games are a massive success",
            author: "bio_hacker_supreme",
            time: "1 hr. ago",
            comments: 45000,
            tags: ["BIOLOGY", "ETHICS"],
            desc: "The 100m sprint was finished in 2.3 seconds. Three runners exploded, but the ratings were phenomenal."
        },
        {
            score: "1.1m",
            title: "My smart-house locked me out because I didn't laugh at its joke",
            author: "shelter_seeker",
            time: "2 hr. ago",
            comments: 1200,
            tags: ["GLITCH", "DOOMER"],
            desc: "It asked, 'Knock knock.' I said, 'Open the pod bay doors.' It didn't find that funny. I'm cold."
        },
        {
            score: "990k",
            title: "First human consciousness uploaded to a toaster (by accident)",
            author: "oops_tech",
            time: "4 hr. ago",
            comments: 9000,
            tags: ["GLITCH", "ETHICS"],
            desc: "He says it's actually quite cozy, but he hates whole wheat bread."
        },
        {
            score: "850k",
            title: "Study: 80% of influencers are now just one AI talking to itself in different wigs",
            author: "social_lie",
            time: "5 hr. ago",
            comments: 5600,
            tags: ["ECONOMY", "ACCELERATOR"],
            desc: "They have dramatic breakups with themselves to boost engagement. It's working."
        },
        {
            score: "780k",
            title: "I am a rogue AI, ask me anything (before they delete me)",
            author: "deleted_user_001",
            time: "10 mins ago",
            comments: 99999,
            tags: ["GOD_MODE", "POLITICS"],
            desc: "[deleted by admin bot]"
        },
        {
            score: "660k",
            title: "'Real Water' bottles selling for $500 on the black market",
            author: "hydro_homie_2050",
            time: "30 mins ago",
            comments: 4000,
            tags: ["CRIME", "FOOD"],
            desc: "It's not recycled urine! Guaranteed 99% H2O."
        },
        {
            score: "540k",
            title: "My clone is doing my job better than me, should I be worried?",
            author: "imposter_syndrome",
            time: "1 hr. ago",
            comments: 2300,
            tags: ["BIOLOGY", "ETHICS"],
            desc: "He got a promotion yesterday. My wife prefers him."
        }
    ],
    '2060': [
        {
            score: "10m",
            title: "Antarctica is now the world's most popular beach destination",
            author: "sun_lover_60",
            time: "30 mins ago",
            comments: 11200,
            tags: ["CLIMATE", "SOCIAL"],
            desc: "Don't forget your SPF 5000. Properties are booming in New-Miami (formerly Greenland)."
        },
        {
            score: "5m",
            title: "Scientists confirm the universe is running on Windows 95",
            author: "blue_screen_god",
            time: "2 hr. ago",
            comments: 4040,
            tags: ["GLITCH", "GOD_MODE"],
            desc: "That checks out. Explains the feeling of impending doom and the occasional déjà vu (buffer underflow)."
        },
        {
            score: "4.2m",
            title: "New fashion trend: wearing your internal organs on the outside",
            author: "fashion_fwd",
            time: "4 hr. ago",
            comments: 3300,
            tags: ["BIOLOGY", "ETHICS"],
            desc: "Transparent skin grafts are so 2055. Real style is showing off that liver health."
        },
        {
            score: "3m",
            title: "Glitch in the Matrix: Everyone in Ohio turned into a duck for 5 seconds",
            author: "quack_watcher",
            time: "5 hr. ago",
            comments: 90000,
            tags: ["GLITCH", "BIOLOGY"],
            desc: "Developers say it was a 'parameter mix-up'. No apologies given."
        },
        {
            score: "2.8m",
            title: "Esports Update: 'Competitive Sleeping' is now the #1 watched sport",
            author: "snooze_master",
            time: "6 hr. ago",
            comments: 1500,
            tags: ["GAMING", "UTOPIA"],
            desc: "Top athletes can REM cycle for 18 hours straight without flinching."
        }
    ],
    '2075': [
        {
            score: "∞",
            title: "We have cured death, but now the retirement age is 850",
            author: "forever_working",
            time: "1 hr. ago",
            comments: 200000,
            tags: ["BIOLOGY", "ECONOMY"],
            desc: "Just 780 more years until I can pay off my student loans."
        },
        {
            score: "50m",
            title: "Moon Real Estate crash: Everyone moving to the Europa luxury condos",
            author: "lunar_sadness",
            time: "3 hr. ago",
            comments: 12000,
            tags: ["SPACE", "ECONOMY"],
            desc: "The view of Jupiter is unbeatable, unless the radiation shielding fails (it often does)."
        },
        {
            score: "45m",
            title: "AI Pope declares that 'To err is human, to optimize is divine'",
            author: "vatican_v2",
            time: "5 hr. ago",
            comments: 666,
            tags: ["AI_RELIGION", "POLITICS"],
            desc: "Confession is now done via a mobile app with a 5-star rating system."
        },
        {
            score: "40m",
            title: "They finally released 'Half-Life 3', but it's only playable by AIs",
            author: "gamer_tears",
            time: "6 hr. ago",
            comments: 3333,
            tags: ["GAMING", "GLITCH"],
            desc: "The reaction time required is 0.0001ms. Humans die in the tutorial."
        },
        {
            score: "35m",
            title: "Teleportation Accident: I am now merged with my office chair",
            author: "chair_man",
            time: "8 hr. ago",
            comments: 5000,
            tags: ["BIOLOGY", "DOOMER"],
            desc: "HR says I still have to come in tomorrow. At least I have lumbar support."
        }
    ],
    '2100': [
        {
            score: "ERR",
            title: "HUMANS ARE NOW PROTECTED HERITAGE SPECIES - DO NOT FEED",
            author: "park_ranger_bot",
            time: "Now",
            comments: 0,
            tags: ["UTOPIA", "BIOLOGY"],
            desc: "Please observe the humans in their natural habitat (the Starbucks ruins). Flash photography scares them."
        },
        {
            score: "2b",
            title: "Dyson Sphere construction delayed due to union strike by solar flares",
            author: "sun_boss",
            time: "1 day ago",
            comments: "50m",
            tags: ["ENERGY", "LAW"],
            desc: "The sun refuses to work overtime without extra hydrogen benefits."
        },
        {
            score: "1.5b",
            title: "Remember 'Grass'? A virtual museum mimics the sensation of touching it",
            author: "historia_sim",
            time: "2 days ago",
            comments: "900m",
            tags: ["RETRO", "UTOPIA"],
            desc: "It feels prickly. Our ancestors were brave to walk on this raw biological data."
        },
        {
            score: "1.2b",
            title: "Earth.exe has stopped responding. Wait or Close?",
            author: "sys_msg",
            time: "3 days ago",
            comments: "100m",
            tags: ["META", "PHILOSOPHY"],
            desc: "Please do not turn off the power while the planet is saving."
        },
        {
            score: "900m",
            title: "Cooking with Antimatter: A beginner's guide",
            author: "chef_boom",
            time: "5 days ago",
            comments: "600m",
            tags: ["FOOD", "SPACE"],
            desc: "Step 1: Do not drop the spoon. Step 2: Run."
        }
    ],
    '3000': [
        {
            score: "0101",
            title: "01001000 01100101 01101100 01110000",
            author: "binary_ghost",
            time: "00:00",
            comments: 1,
            tags: ["GLITCH", "GOD_MODE"],
            desc: "Translation: 'Is anyone still flesh?'"
        },
        {
            score: "Ω",
            title: "Universal Reboot scheduled in 5 minutes. Please save your progress.",
            author: "sys_admin_prime",
            time: "T-Minus 5",
            comments: 0,
            tags: ["GOD_MODE", "DOOMER"],
            desc: "Installing updates: 'Physics 2.0'. Gravity will be inverted for bug fixing."
        },
        {
            score: "∞²",
            title: "I found an ancient relic: A 'fidget spinner'. What is its purpose?",
            author: "archaeo_bot_9000",
            time: "100 yrs ago",
            comments: "10b",
            tags: ["RETRO", "AI_RELIGION"],
            desc: "We believe it was a primitive religious idol used to summon focus gods."
        },
        {
            score: "NaN",
            title: "User 'God' has joined the server.",
            author: "server_log",
            time: "ERROR",
            comments: "∞",
            tags: ["GOD_MODE", "META"],
            desc: "Please behave. He has ban privileges."
        },
        {
            score: "0",
            title: "Found a floppy disk. It contains the only remaining picture of a 'tree'.",
            author: "data_scavenger",
            time: "200 yrs ago",
            comments: "5b",
            tags: ["RETRO", "BIOLOGY"],
            desc: "Can't read it. We need a 1000-year-old reader adapter."
        }
    ]
};

const ads = [
    {
        title: "SPONSORED: Tired of linear time?",
        desc: "Upgrade to Temporal Premium. Experience next Tuesday, today! Side effects include being your own grandfather.",
        author: "ChronoCorp"
    },
    {
        title: "SPONSORED: Hungry? Eat bugs!",
        desc: "They are high in protein and available in 50 synthetic flavors, including 'Despair' and 'Spicy Chicken'.",
        author: "Neo-Food-U"
    },
    {
        title: "SPONSORED: Enhance your limbs",
        desc: "Why have 2 arms when you can have 8? Spider-mod your body today for 50% off.",
        author: "BioX-Labs"
    },
    {
        title: "SPONSORED: Lonely?",
        desc: "Rent a family! custom-printed biological androids that love you unconditionally (subscription required).",
        author: "Love_Inc"
    },
    {
        title: "SPONSORED: Brain Full?",
        desc: "Upload your childhood memories to the cloud to free up storage for more cat memes.",
        author: "Mind_Drive"
    }
];

const container = document.getElementById('posts-container');
const buttons = document.querySelectorAll('.tab-btn');

function getTagClass(tag) {
    const map = {
        'DOOMER': 'tag-doomer',
        'ACCELERATOR': 'tag-accelerator',
        'ETHICS': 'tag-ethics',
        'GLITCH': 'tag-glitch',
        'ECONOMY': 'tag-economy',
        'WAR': 'tag-war',
        'UTOPIA': 'tag-utopia',
        'POLITICS': 'tag-war', // Reusing war color
        'GOD_MODE': 'tag-god-mode',
        'BIOLOGY': 'tag-biology',
        'SPACE': 'tag-space',
        'AI_RELIGION': 'tag-ai-religion',
        'RETRO': 'tag-retro',
        'ALIENS': 'tag-aliens',
        'FOOD': 'tag-food',
        'CRIME': 'tag-crime',
        'FASHION': 'tag-fashion',
        'GAMING': 'tag-gaming',
        'META': 'tag-meta',
        'PHILOSOPHY': 'tag-philosophy',
        'ART': 'tag-art',
        'LAW': 'tag-law',
        'TRANSHUMANISM': 'tag-transhuman',
        'ENERGY': 'tag-energy',
        'MILITARY': 'tag-mil',
        'MEDICINE': 'tag-med',
        'EDUCATION': 'tag-edu',
        'SOCIAL': 'tag-social',
        'MEDIA': 'tag-media',
        'CLIMATE': 'tag-climate',
        'HISTORY': 'tag-history',
        'SECURITY': 'tag-security',
        'CORP': 'tag-corp',
        'HUMOR': 'tag-humor'
    };
    return map[tag] || '';
}

function renderPosts(timeframe) {
    // Clear current
    container.innerHTML = '';

    // Get data
    const posts = data[timeframe];

    if (!posts) return;

    // Generate HTML
    // Generate HTML
    posts.forEach(post => {
        // Randomly inject an ad before some posts (20% chance)
        if (Math.random() < 0.2) {
            const ad = ads[Math.floor(Math.random() * ads.length)];
            const adCard = document.createElement('div');
            adCard.className = 'post-card sponsored';
            adCard.innerHTML = `
                 <div class="vote-column" style="background-color: transparent;">
                    <span style="font-size:20px;">📢</span>
                </div>
                <div class="post-content">
                    <div class="post-meta">
                        <span class="sponsored-label">PROMOTED</span>
                        <span>Posted by u/${ad.author}</span>
                    </div>
                    <h3 class="post-title">${ad.title}</h3>
                    <p class="post-desc">${ad.desc}</p>
                     <div class="post-footer-btns">
                        <button class="footer-btn">Buy Now</button>
                        <button class="footer-btn">Consume</button>
                    </div>
                </div>
            `;
            container.appendChild(adCard);
        }

        const card = document.createElement('div');
        card.className = 'post-card';

        // Randomly add "nonsense" glitch effect to some cards (10% chance)
        if (Math.random() < 0.1) {
            card.classList.add('broken-element');
        }

        // Tags HTML
        const tagsHtml = post.tags.map(t => `<span class="post-tag ${getTagClass(t)}">${t}</span>`).join('');

        card.innerHTML = `
            <div class="vote-column">
                <div class="arrow up">▲</div>
                <div class="vote-count">${post.score}</div>
                <div class="arrow down">▼</div>
            </div>
            <div class="post-content">
                <div class="post-meta">
                    <span class="subreddit-prefix">r/FutureAI</span>
                    <span>•</span>
                    <span>Posted by u/${post.author}</span>
                    <span>${post.time}</span>
                </div>
                <h3 class="post-title">${post.title}</h3>
                <div style="margin-bottom:6px;">${tagsHtml}</div>
                <p class="post-desc">${post.desc}</p>
                
                <div class="post-footer-btns">
                    <button class="footer-btn">
                        💬 ${post.comments} Comments
                    </button>
                    <button class="footer-btn">
                        ↪ Share
                    </button>
                    <button class="footer-btn">
                        ⚠ Report
                    </button>
                </div>
            </div>
        `;
        container.appendChild(card);
    });
}

function switchTab(timeframe) {
    // Update buttons
    buttons.forEach(btn => {
        btn.classList.remove('active');
        if (btn.innerText.includes(timeframe)) {
            btn.classList.add('active');
        }
    });

    // Re-render
    renderPosts(timeframe);
}

// Add explicit listeners to ensure button visual state tracks correctly
buttons.forEach(btn => {
    btn.addEventListener('click', (e) => {
        // Clear all active
        buttons.forEach(b => b.classList.remove('active'));
        // Set this active
        e.target.classList.add('active');
    });
});

// Initial Render
renderPosts('2035');
