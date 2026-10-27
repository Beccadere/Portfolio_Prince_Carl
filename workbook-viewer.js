(function(){
  var S=window.CASE12_SHEETS,dlg,tabs,body,dl;
  function build(){
    dlg=document.createElement("dialog");dlg.className="wb-dialog";dlg.setAttribute("aria-label","Case 12 workbook");
    dlg.innerHTML='<div class="wb-head"><strong>Case_12_Data_Analysis_COMPLETED.xlsx</strong><div class="wb-actions"><a class="btn btn-ghost btn-sm" id="wbDownload" href="#">Download .xlsx</a><button type="button" class="btn btn-primary btn-sm" id="wbClose">Close</button></div></div><div class="wb-tabs" role="tablist"></div><div class="wb-body"></div><p class="hint wb-note">The three Excel charts are in the Charts sheet of the downloaded file.</p>';
    document.body.appendChild(dlg);
    tabs=dlg.querySelector(".wb-tabs");body=dlg.querySelector(".wb-body");dl=dlg.querySelector("#wbDownload");
    Object.keys(S).forEach(function(n,i){
      var b=document.createElement("button");b.type="button";b.className="db-tab";b.textContent=n.replace(/_/g," ");b.setAttribute("role","tab");
      b.addEventListener("click",function(){show(n)});tabs.appendChild(b);
    });
    dlg.querySelector("#wbClose").addEventListener("click",function(){dlg.close()});
    dlg.addEventListener("click",function(e){if(e.target===dlg)dlg.close()});
  }
  function show(name){
    Array.prototype.forEach.call(tabs.children,function(b,i){var on=Object.keys(S)[i]===name;b.classList.toggle("is-active",on);b.setAttribute("aria-selected",on)});
    var rows=S[name],w=0;rows.forEach(function(r){w=Math.max(w,r.length)});
    var t=document.createElement("table");t.className="wb-table";
    rows.forEach(function(r,ri){
      if(!r.length){return}
      var tr=t.insertRow();
      if(r.length===1&&w>1){var c=document.createElement("th");c.colSpan=w;c.textContent=r[0];c.className="wb-title";tr.appendChild(c);return}
      var header=ri>0&&rows[ri-1].length<=1&&r.length>1&&typeof r[0]==="string"&&r.every(function(x){return x===null||typeof x==="string"})||ri===0;
      for(var i=0;i<w;i++){var v=r[i],c=document.createElement(header?"th":"td");c.textContent=v==null?"":v;tr.appendChild(c)}
    });
    body.innerHTML="";var wrap=document.createElement("div");wrap.className="db-table-wrap";wrap.appendChild(t);body.appendChild(wrap);
  }
  document.addEventListener("click",function(e){
    var a=e.target.closest&&e.target.closest('a[data-workbook]');if(!a)return;
    e.preventDefault();if(!dlg)build();
    dl.href=a.getAttribute("data-workbook");dl.setAttribute("download","");
    show(Object.keys(S)[0]);
    if(dlg.showModal)dlg.showModal();else dlg.setAttribute("open","");
  });
})();
