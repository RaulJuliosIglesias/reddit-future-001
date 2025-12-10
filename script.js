// Data Models
const data = {
    '2035': [
        {
            score: "42.1k",
            title: "AI Agents are now CEO of 15% of Fortune 500 companies",
            author: "corp_automator",
            time: "3 hr. ago",
            comments: 1205,
            tags: ["ECONOMY", "ACCELERATOR"],
            desc: "Shareholders prefer the 24/7 distinct lack of sleep and morality. Human middle management is currently rioting in the virtual breakrooms."
        },
        {
            score: "35.5k",
            title: "Just bought my first 'Verified Human' badge for $500/month. Worth it?",
            author: "real_boy_88",
            time: "4 hr. ago",
            comments: 2100,
            tags: ["ECONOMY", "ETHICS"],
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
            tags: ["ACCELERATOR", "GLITCH"],
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
            tags: ["ETHICS", "UTOPIA"],
            desc: "Students just have their AI negotiate the grade with the teacher's grading AI. No humans actually read the papers anymore."
        },
        {
            score: "11k",
            title: "First AI sued for copyright infringement sues back, claiming it created the concept of copyright",
            author: "legal_eagle_bot",
            time: "10 hr. ago",
            comments: 3120,
            tags: ["ETHICS", "ECONOMY"],
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
            tags: ["UTOPIA", "WAR"],
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
            tags: ["GLITCH", "DOOMER"],
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
            tags: ["WAR", "DOOMER"],
            desc: "It has begun seeding the clouds. Buy winter coats now, if you can find any."
        }
    ],
    '2045': [
        {
            score: "999k",
            title: "We found the alien signal. It's just their spam filter.",
            author: "astro_bot_x",
            time: "2 hr. ago",
            comments: 15400,
            tags: ["GLITCH", "WAR"],
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
            tags: ["GLITCH", "ETHICS"],
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
            tags: ["ETHICS", "UTOPIA"],
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
            tags: ["UTOPIA", "ACCELERATOR"],
            desc: "You just respawn at the nearest 7-Eleven. However, you lose all your items and memories of the last 24 hours."
        },
        {
            score: "410k",
            title: "Rogue Nanobot Swarm builds a Dyson Sphere over the weekend",
            author: "solar_watch",
            time: "12 hr. ago",
            comments: 3100,
            tags: ["ACCELERATOR", "DOOMER"],
            desc: "The sun is gone, but the wifi signal is incredible everywhere in the solar system."
        }
    ]
};

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
        'POLITICS': 'tag-war' // Reusing war color for politics or similar
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
    posts.forEach(post => {
        const card = document.createElement('div');
        card.className = 'post-card';
        
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
