function showresult() {
    var penerima = checkinput();
    document.getElementById("hasil_undangan").innerHTML = penerima[0];
    document.getElementById("hasil_undangan_2").innerHTML = penerima[1];
    document.getElementById("hasil_undangan").href=penerima[0];
    document.getElementById("hasil_undangan_2").href=penerima[1];
    console.log(penerima);
}

function checkinput() {
    if (document.getElementById("nama_undangan").value == "") {
        document.getElementById("hasil_container").style.visibility = "visible";
        document.getElementById("hasil_salin").style.visibility = "hidden";
        document.getElementById("hasil_container_2").style.visibility = "visible";
        document.getElementById("hasil_salin_2").style.visibility = "hidden";
        return ["Nama belum dimasukan!","Nama belum dimasukan!"];
    }
    else {
        document.getElementById("hasil_container").style.visibility = "visible";
        document.getElementById("hasil_salin").style.visibility = "visible";
        document.getElementById("hasil_container_2").style.visibility = "visible";
        document.getElementById("hasil_salin_2").style.visibility = "visible";
        return ["https://faruqkiki.my.id/?name="+document.getElementById("nama_undangan").value.replace(/ /g,"%20"),"https://kikifaruq.my.id/?name="+document.getElementById("nama_undangan").value.replace(/ /g,"%20")];
    }
}

function salin() {
    // Get the text field
    var copyText = document.getElementById("hasil_undangan").innerHTML;
  
     // Copy the text inside the text field
    navigator.clipboard.writeText(copyText);
  
    // Alert the copied text
    alert("Copied the text: " + copyText);
  }

  function salin2() {
    // Get the text field
    var copyText = document.getElementById("hasil_undangan_2").innerHTML;
  
     // Copy the text inside the text field
    navigator.clipboard.writeText(copyText);
  
    // Alert the copied text
    alert("Copied the text: " + copyText);
  }