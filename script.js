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
        var undanganfull2 = text_builder2(document.getElementById("nama_undangan").value)
        return [undanganfull2,undanganfull];
    }
}

function salin() {
    // Get the text field
    var copyText = document.getElementById("hasil_undangan");

    
    copyText.select();
    copyText.setSelectionRange(0, 99999); // For mobile devices
  
     // Copy the text inside the text field
    navigator.clipboard.writeText(copyText.value);
  
    // Alert the copied text
    alert("Copied the text: " + copyText/value);
  }

  function salin2() {
    // Get the text field
    var copyText = document.getElementById("hasil_undangan_2");
  
    copyText.select();
    copyText.setSelectionRange(0, 99999); // For mobile devices

     // Copy the text inside the text field
    navigator.clipboard.writeText(copyText.value);
  
    // Alert the copied text
    alert("Copied the text: " + copyText.value);
  }



  function text_builder(name){
    var x = "*UNDANGAN*\r\n \r\n Kepada Yth:\r\n sdr/i "+name+"\r\n \r\n Bismillahirahmanirrahim.\r\n Assalamualaikum Warohmatullohi wabarokaatuh\r\n \r\n Tanpa mengurangi rasa hormat, perkenankan kami mengundang sdr/i "+name+" untuk menghadiri acara Tasyakuran Pernikahan putra dan putri kami:\r\n \r\n *Mohammad Musthofa Kamal Alfaruqi dan Nur Rizqi Aini*\r\n \r\n dengan link e-invitation sebagai berikut\r\n \r\n \r\n https://faruqkiki.my.id/?name="+name.replace(/ /g,"%20")+"\r\n \r\n Merupakan suatu kebahagiaan bagi kami apabila berkenan hadir dan memberikan doa terbaik serta restu kepada putra putri kami tersebut.\r\n \r\n Mohon maaf bila undangan hanya berupa e-invitation.\r\n \r\n Salam dan Hormat Kami,\r\n Keluarga HM Chusnul Yaqin \r\n \r\n Wassalamualaikum Warohmatullohi&#160;Wabarokaatuh";
    return x;
  }
  function text_builder2(name){
    var x = "*UNDANGAN*\r\n \r\n Kepada Yth:\r\n sdr/i "+name+"\r\n \r\n Bismillahirahmanirrahim.\r\n Assalamualaikum Warohmatullohi wabarokaatuh\r\n \r\n Tanpa mengurangi rasa hormat, perkenankan kami mengundang sdr/i "+name+" untuk menghadiri acara Tasyakuran Pernikahan putra dan putri kami:\r\n \r\n *Mohammad Musthofa Kamal Alfaruqi dan Nur Rizqi Aini*\r\n \r\n dengan link e-invitation sebagai berikut\r\n \r\n \r\n https://nantaarthur123.github.io/Simple-undangan-nikah-using-javascript/?name="+name.replace(/ /g,"%20")+"\r\n \r\n Merupakan suatu kebahagiaan bagi kami apabila berkenan hadir dan memberikan doa terbaik serta restu kepada putra putri kami tersebut.\r\n \r\n Mohon maaf bila undangan hanya berupa e-invitation.\r\n \r\n Salam dan Hormat Kami,\r\n Keluarga HM Chusnul Yaqin \r\n \r\n Wassalamualaikum Warohmatullohi&#160;Wabarokaatuh";
    return x;
  }