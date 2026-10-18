
    (()=>{
      const storageKey='boutiqueGermanColorMode';
      const root=document.documentElement;
      const toggle=document.getElementById('themeToggle');
      const themeMeta=document.querySelector('meta[name="theme-color"]');
      if(!toggle)return;
      const render=()=>{
        const enabled=root.classList.contains('night-mode');
        toggle.textContent=enabled?'\u2600\ufe0f \u65e5\u95f4\u6a21\u5f0f':'\ud83c\udf19 \u591c\u95f4\u6a21\u5f0f';
        toggle.setAttribute('aria-pressed',String(enabled));
        toggle.setAttribute('aria-label',enabled?'\u5207\u6362\u5230\u65e5\u95f4\u6a21\u5f0f':'\u5207\u6362\u5230\u591c\u95f4\u6a21\u5f0f');
        if(themeMeta)themeMeta.setAttribute('content',enabled?'#0e1412':'#1e3b36');
      };
      const setMode=(enabled,announce=false)=>{
        root.classList.toggle('night-mode',enabled);
        try{localStorage.setItem(storageKey,enabled?'night':'day');}catch(error){}
        render();
        if(announce&&typeof toast==='function')toast(enabled?'\u5df2\u5207\u6362\u4e3a\u591c\u95f4\u6a21\u5f0f':'\u5df2\u5207\u6362\u4e3a\u65e5\u95f4\u6a21\u5f0f');
      };
      toggle.addEventListener('click',()=>setMode(!root.classList.contains('night-mode'),true));
      render();
    })();
  