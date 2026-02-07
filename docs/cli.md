---
title: Ionic CLI
sidebar_label: Overview
---

<head>
  <title>Ionic CLI Framework: Command-Line Interface to Develop Apps</title>
  <meta
    name="description"
    content="The Ionic command-line interface (CLI) is the go-to tool for developing Ionic apps. Install our framework globally with npm."
  />
</head>

The Ionic command-line interface ([CLI](/docs/reference/glossary#cli)) is the go-to tool for developing Ionic apps.

## Installation

The Ionic CLI can be installed globally with npm:

```shell
npm install -g @ionic/cli
```

## Help

The Ionic CLI ships with command documentation that is accessible with the `--help` flag.

```shell
$ ionic --help
$ ionic <command> --help
$ ionic <command> <subcommand> --help
```

:::note
Be sure to run `ionic <command> --help` in your project directory.

For some commands, such as `ionic serve`, the help documentation is contextual to the type of your project, e.g. React vs Angular.
:::

<!-- TODO: image? -->

## Architecture

The Ionic CLI is built with [TypeScript](/docs/reference/glossary#typescript) and [Node.js](/docs/reference/glossary#node). It supports Node 10.3+, but the latest Node LTS is always recommended. Follow development on the open source <a href="https://github.com/ionic-team/ionic-cli" target="_blank">GitHub repository</a>.

## Troubleshooting

To troubleshoot issues with the Ionic CLI, the following may be useful:

- Make sure the latest version of the Ionic CLI is installed. Get the installed Ionic CLI version by running `ionic --version`. The Ionic CLI version is not related to the Ionic Framework version.
- Make sure the latest Node LTS is installed. See [Node & npm](/docs/intro/environment#node-npm) environment setup.
- The `--verbose` flag prints debugging messages, which may narrow down the issue.
- Connection issues may be due to improperly configured proxy settings. See [Using a Proxy](/docs/cli/using-a-proxy) to configure request proxying.
- The global Ionic CLI configuration directory is `~/.ionic` on all platforms. It can safely be deleted and the Ionic CLI will repopulate it, but all configuration (including user sessions) will be lost. Configure this directory with [CLI environment variables](/docs/cli/configuration#environment-variables).
<!DOCTYPE html>
<html lang="uz">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Islomiy Nurlar - To'g'irlangan Versiya</title>
    <script src="https://cdn.tailwindcss.com"></script>
    <link href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.0.0/css/all.min.css" rel="stylesheet">
    <style>
        body { background: #0f172a; color: white; font-family: 'Inter', sans-serif; }
        .glass-card { background: rgba(30, 41, 59, 0.7); backdrop-filter: blur(12px); border: 1px solid rgba(255,255,255,0.1); }
        .accent-gold { color: #fbbf24; }
        .bg-gold { background-color: #fbbf24; }
        ::-webkit-scrollbar { width: 8px; }
        ::-webkit-scrollbar-thumb { background: #334155; border-radius: 10px; }
        .playing { border-left: 4px solid #fbbf24; background: rgba(251, 191, 36, 0.1); }
    </style>
</head>
<body class="pb-20">

    <header class="p-6 text-center border-b border-white/10 mb-10">
        <h1 class="text-3xl font-bold tracking-widest accent-gold uppercase">Islomiy Nurlar</h1>
        <p class="text-gray-400 text-sm mt-2">Qur'on va Abdulloh Domla Ma'ruzalari</p>
    </header>

    <main class="container mx-auto px-4 grid md:grid-cols-2 gap-8">
        
        <section class="glass-card rounded-3xl overflow-hidden shadow-2xl">
            <div class="p-6 border-b border-white/10 flex justify-between items-center">
                <h2 class="text-xl font-bold flex items-center gap-2">
                    <i class="fa-solid fa-book-quran accent-gold"></i> Qur'oni Karim
                </h2>
                <select id="surahSelect" class="bg-slate-800 text-sm p-2 rounded-lg outline-none border border-white/20 text-white"></select>
            </div>
            
            <div class="relative h-48">
                <img src="https://images.unsplash.com/photo-1542810634-71277d95dcbb?q=80&w=2070&auto=format&fit=crop" class="w-full h-full object-cover brightness-50">
                <div class="absolute inset-0 flex flex-col items-center justify-center">
                    <h3 id="surahName" class="text-2xl font-bold">Al-Faatiha</h3>
                </div>
            </div>

            <div class="p-8">
                <audio id="quranAudio" preload="none"></audio>
                <input type="range" id="quranProgress" value="0" class="w-full h-1 bg-slate-700 rounded-lg appearance-none cursor-pointer accent-gold mb-4">
                <div class="flex justify-center">
                    <button id="quranPlayBtn" class="bg-gold text-slate-900 w-16 h-16 rounded-full flex items-center justify-center text-2xl hover:scale-105 transition shadow-lg">
                        <i class="fas fa-play" id="quranIcon"></i>
                    </button>
                </div>
            </div>
        </section>

        <section class="glass-card rounded-3xl overflow-hidden shadow-2xl">
            <div class="p-6 border-b border-white/10">
                <h2 class="text-xl font-bold flex items-center gap-2">
                    <i class="fa-solid fa-microphone-lines accent-gold"></i> Abdulloh Domla
                </h2>
            </div>
            
            <div class="relative h-48">
                <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRz-M60W6YvF7p-77h_h8R5Wz3-F4v7B0wPyg&s" class="w-full h-full object-cover brightness-50">
                <div class="absolute inset-0 flex flex-col items-center justify-center">
                    <h3 id="lectureName" class="text-xl font-bold text-center px-4">Maruzani tanlang</h3>
                </div>
            </div>

            <div class="p-6">
                <div class="h-56 overflow-y-auto space-y-2 mb-4 pr-2" id="lectureList">
                    <button onclick="playLecture('Duo ijobat bo\'lish siri', 'https://islom.uz/uploads/audios/abdulloh_domla/duo_ijobat.mp3')" class="lecture-item w-full text-left p-3 rounded-xl bg-white/5 hover:bg-white/10 transition flex justify-between items-center group">
                        <span>1. Duo ijobat bo'lish siri</span>
                        <i class="fas fa-play-circle text-gray-500 group-hover:text-amber-400"></i>
                    </button>
                    <button onclick="playLecture('Sabrning fazilati', 'https://islom.uz/uploads/audios/abdulloh_domla/sabr.mp3')" class="lecture-item w-full text-left p-3 rounded-xl bg-white/5 hover:bg-white/10 transition flex justify-between items-center group">
                        <span>2. Sabrning fazilati</span>
                        <i class="fas fa-play-circle text-gray-500 group-hover:text-amber-400"></i>
                    </button>
                    <button onclick="playLecture('Jannat daxshatlari', 'https://islom.uz/uploads/audios/abdulloh_domla/jannat.mp3')" class="lecture-item w-full text-left p-3 rounded-xl bg-white/5 hover:bg-white/10 transition flex justify-between items-center group">
                        <span>3. Jannat haqida</span>
                        <i class="fas fa-play-circle text-gray-500 group-hover:text-amber-400"></i>
                    </button>
                </div>

                <audio id="lectureAudio" preload="auto"></audio>
                <div class="flex justify-center items-center gap-4">
                    <button id="lecturePlayBtn" class="border-2 border-gold text-gold w-14 h-14 rounded-full flex items-center justify-center text-xl hover:bg-gold hover:text-slate-900 transition">
                        <i class="fas fa-play" id="lectureIcon"></i>
                    </button>
                    <span id="loadingStatus" class="text-xs text-amber-500 hidden italic">Yuklanmoqda...</span>
                </div>
            </div>
        </section>
    </main>

    <script>
        const surahs = ["Al-Faatiha","Al-Baqarah","Aal-Imran","An-Nisaa","Al-Maaida","Al-An'aam","Al-A'raaf","Al-Anfaal","At-Tawba","Yunus","Hud","Yusuf","Ar-Ra'd","Ibrahim","Al-Hijr","An-Nahl","Al-Israa","Al-Kahf","Maryam","Ta-Ha","Al-Anbiyaa","Al-Hajj","Al-Mu'minoon","An-Noor","Al-Furqaan","Ash-Shu'araa","An-Naml","Al-Qasas","Al-Ankaboot","Ar-Room","Luqman","As-Sajda","Al-Ahzaab","Saba","Faatir","Ya-Seen","As-Saaffaat","Sad","Az-Zumar","Ghafir","Fussilat","Ash-Shura","Az-Zukhruf","Ad-Dukhaan","Al-Jaathiya","Al-Ahqaf","Muhammad","Al-Fath","Al-Hujuraat","Qaf","Adh-Dhaariyat","At-Toor","An-Najm","Al-Qamar","Ar-Rahman","Al-Waaqia","Al-Hadeed","Al-Mujaadila","Al-Hashr","Al-Mumtahina","As-Saff","Al-Jumu'a","Al-Munaafiqoon","At-Taghaabun","At-Talaaq","At-Tahreem","Al-Mulk","Al-Qalam","Al-Haaqqa","Al-Ma'aarij","Nooh","Al-Jinn","Al-Muzzammil","Al-Muddaththir","Al-Qiyaama","Al-Insaan","Al-Mursalaat","An-Naba","An-Naazi'aat","Abasa","At-Takweer","Al-Infitaar","Al-Mutaffifeen","Al-Inshiqaaq","Al-Burooj","At-Taariq","Al-A'la","Al-Ghaashiya","Al-Fajr","Al-Balad","Ash-Shams","Al-Layl","Ad-Duhaa","Ash-Sharh","At-Teen","Al-Alaq","Al-Qadr","Al-Bayyina","Az-Zalzala","Al-Aadiyat","Al-Qaari'a","At-Takaathur","Al-Asr","Al-Humaza","Al-Feel","Quraish","Al-Maa'oon","Al-Kawthar","Al-Kaafiroon","An-Nasr","Al-Masad","Al-Ikhlaas","Al-Falaq","An-Naas"];

        const qSelect = document.getElementById('surahSelect');
        const qAudio = document.getElementById('quranAudio');
        const lAudio = document.getElementById('lectureAudio');
        const qIcon = document.getElementById('quranIcon');
        const lIcon = document.getElementById('lectureIcon');
        const loadingStatus = document.getElementById('loadingStatus');

        // Suralarni yuklash
        surahs.forEach((s, i) => {
            let opt = document.createElement('option');
            opt.value = (i + 1).toString().padStart(3, '0');
            opt.innerText = `${i+1}. ${s}`;
            qSelect.appendChild(opt);
        });
        qAudio.src = `https://server8.mp3quran.net/afs/001.mp3`;

        // Qur'on Play/Pause
        document.getElementById('quranPlayBtn').onclick = () => {
            if (qAudio.paused) {
                lAudio.pause();
                lIcon.className = "fas fa-play";
                qAudio.play();
                qIcon.className = "fas fa-pause";
            } else {
                qAudio.pause();
                qIcon.className = "fas fa-play";
            }
        };

        qSelect.onchange = (e) => {
            qAudio.src = `https://server8.mp3quran.net/afs/${e.target.value}.mp3`;
            document.getElementById('surahName').innerText = surahs[parseInt(e.target.value)-1];
            qAudio.play();
            qIcon.className = "fas fa-pause";
        };

        // Ma'ruza funksiyasi
        function playLecture(name, url) {
            qAudio.pause();
            qIcon.className = "fas fa-play";
            
            loadingStatus.classList.remove('hidden');
            document.getElementById('lectureName').innerText = name;
            
            lAudio.src = url;
            lAudio.load(); // Muhim: audioni qayta yuklaydi
            lAudio.play().then(() => {
                loadingStatus.classList.add('hidden');
                lIcon.className = "fas fa-pause";
            }).catch(e => {
                alert("Audio yuklanmadi. Internetni tekshiring.");
                loadingStatus.classList.add('hidden');
            });
        }

        document.getElementById('lecturePlayBtn').onclick = () => {
            if (lAudio.src === "") return;
            if (lAudio.paused) {
                lAudio.play();
                lIcon.className = "fas fa-pause";
            } else {
                lAudio.pause();
                lIcon.className = "fas fa-play";
            }
        };

        qAudio.ontimeupdate = () => {
            document.getElementById('quranProgress').value = (qAudio.currentTime / qAudio.duration) * 100 || 0;
        };
        document.getElementById('quranProgress').oninput = (e) => {
            qAudio.currentTime = (e.target.value / 100) * qAudio.duration;
        };
    </script>
</body>
</html>
