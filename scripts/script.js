(function() {
    const CHARS = '01$#[]{}|<>ABCDEFabcdef∅∑∆πΩ';
    const JOINBTN = document.createElement('button');
    const BUTTONACTIVE = true;
    const CONTENT = document.getElementById('content-body');

    JOINBTN.id = "join-btn";
    JOINBTN.textContent = "JOIN OUR DISCORD!";

    CONTENT.appendChild(JOINBTN)

    const rain = document.getElementById('rain');
    if (rain) {
        const cols = Math.floor(window.innerWidth / 20);
        for (let i = 0; i < Math.min(cols, 30); i++) {
        const col = document.createElement('div');
        col.className = 'rain-col';
        col.style.left = (i * 100 / Math.min(cols, 30)) + '%';
        col.style.animationDuration = (6 + Math.random() * 10) + 's';
        col.style.animationDelay = (-Math.random() * 10) + 's';
        col.style.opacity = (0.1 + Math.random() * 0.35).toString();
        let str = '';
        for (let j = 0; j < 30; j++) str += (Math.random() < 0.5 ? '1' : '0') + '\n';
        col.textContent = str;
        rain.appendChild(col);
        }
    }

    function scramble(el, target) {
        return new Promise((resolve) => {
        const len = target.length;
        let iter = 0;
        const total = len * 5;
        
        const iv = setInterval(() => {
            
            let out = '';
            for (let i = 0; i < len; i++) {
                if (iter / 5 > i) {
                    out += target[i];
                } else {
                    out += CHARS[Math.floor(Math.random() * CHARS.length)];
                }
            }
                
            el.textContent = out;
            
            if (iter >= total) {
                clearInterval(iv);
                el.textContent = target;
                resolve();
            }
                iter++;
            }, 40);
        });
    }
  
    document.addEventListener("DOMContentLoaded", async () => {
        const target1 = "JOIN US TODAY";
        const target2 = "WED @ 2PM, T701";
        const textEl1 = document.getElementById('scramble-text-banner');
        const textEl2 = document.getElementById('scramble-text-date');
        const statusEl = document.getElementById('scramble-status');

        if (statusEl) {
            statusEl.textContent = '[ DECRYPTING... ]';
            statusEl.style.color = "#666a6f";
        }

        const p1 = scramble(textEl1, target1);
        const p2 = scramble(textEl2, target2);

        await Promise.all([p1, p2]);

        if (statusEl) {
            statusEl.style.color = "#00B16F";
            statusEl.textContent = '[ DECRYPTION COMPLETE ]';
        }
    });


    JOINBTN.addEventListener('click', function() {
            
        try {

            if (BUTTONACTIVE){
                const decodedUrl = atob("aHR0cHM6Ly9kaXNjb3JkLmdnL3lnMnRWdHZLNkE=");
            
                window.open(decodedUrl, '_blank');
            }
        
        } catch (error) {
            console.error('Failed to decode destination URL:', error);
        }
    });
})();