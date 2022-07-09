const d = document,
n = navigator,
ua = n.userAgent;

export default function userDevice(id){
    const $id = d.getElementById(id),
    isMobile={
        android:()=> ua.match(/android/i),
        ios: ()=> ua.match(/iphone|ipad|ipod/i),
        windows: ()=> ua.match(/windos phone/i),
        any: function(){
            return this.android() || this.ios() || this.windows();
        }
    },
    isDestok={
        linux: ()=> ua.match(/linux/i),
        mac: ()=> ua.match(/mac os/i),
        windows:()=>ua.match(/windows nt/i),
        any: function(){
            return this.linux() || this.mac() || this.windows()
        }
    },
    isBrowser={
        chromer: ()=>ua.match(/chrome/i),
        safari: ()=>ua.match(/safari/i),
        firefox: ()=>ua.match(/firefox/i),
        any: function(){
            return this.chromer() || this.safari() || this.firefox();
        }
    };
//  console.log(ua)

 $id.innerHTML=`
 <ul>
    <li>User Agent: <b>${ua}</b></li>
    <li>Plataforma:<b>${isMobile.any()? isMobile.any():isDestok.any()}</b></li>
    <li>Navegador: <b>${isBrowser.any()}</b></li>
 </ul>
 `
 
}