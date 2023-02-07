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
        var undanganfull  = text_builder(document.getElementById("nama_undangan").value)
        return ["https://faruqkiki.my.id/?name="+document.getElementById("nama_undangan").value.replace(/ /g,"%20"),undanganfull];
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



  function text_builder(name){
    var x = "*UNDANGAN*<br> <br> Kepada Yth:<br> sdr/i "+name+"<br> <br> Bismillahirahmanirrahim.<br> Assalamualaikum Warohmatullohi wabarokaatuh<br> <br> Tanpa mengurangi rasa hormat, perkenankan kami mengundang sdr/i "+name+" untuk menghadiri acara Tasyakuran Pernikahan putra dan putri kami:<br> <br> *Mohammad Musthofa Kamal Alfaruqi dan Nur Rizqi Aini*<br> <br> dengan link e-invitation sebagai berikut<br> <br> <br> https://faruqkiki.my.id/?name="+name.replace(/ /g,"%20")+"<br> <br> Merupakan suatu kebahagiaan bagi kami apabila berkenan hadir dan memberikan doa terbaik serta restu kepada putra putri kami tersebut.<br> <br> Mohon maaf bila undangan hanya berupa e-invitation.<br> <br> Salam dan Hormat Kami,<br> Keluarga HM Chusnul Yaqin <br> <br> Wassalamualaikum Warohmatullohi&#160;Wabarokaatuh";
    return x;
  }