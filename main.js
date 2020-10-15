var calculatetry = {
    calculate : function() {
        var btn = document.querySelectorAll("#cal"); //sayı yazdıracak butonları alıyoruz.
        var text = document.querySelector("#text"); //sonucu ve değerleri yazdıracağımız ekranı seçiyoruz.
        var opt = document.querySelectorAll("#opt"); //işlem operatörlerini seçecek butonlarımızı alıyoruz.
        var ilkis; //ekrana girilen ilk sayının kaydedileceği değişkenimiz.
        var islem; //gelen operatörün kaydedileceği değişkenimiz.
        var sonuc; //ekrana girilen ikinci sayının kaydedileceği değişkenimiz.
        var hsonuc; //işlem sonucunun atanacağı değişkenimiz.
        //Foreach döngüsüyle sayı yazdıracak butonları alıp tıklanıldığında ekrana sayıları string olarak bastırıyoruz.
        btn.forEach(element => {        
           element.addEventListener('click', function () {
               text.value = text.value + element.innerText;
           }) 
        });
        //Foreach döngüsü ile operatör işlemlerini gönderecek butonları alıyoruz. butonlara tıklanıldığında ekrandaki sayı değişkene kaydedilip sıfırlanıyor.
        opt.forEach(element => {
            element.addEventListener('click', function () {
                ilkis = parseInt(text.value); //parseInt komutu ile string olarak gelen değerleri number tipine çeviriyoruz.
                islem = element.innerText;
                text.value = " ";
            })
        });
        //Ekrana girilen ikinci sayıyı alıp değişkene atıyoruz ve gelen operatörü if else döngüsünde işleme sokarak sonucumuzu hsonuc değişkenimize atıyoruz ve ekrana yazdırıyoruz.
        document.querySelector("#sonuc").addEventListener('click', function () {
            sonuc = parseInt(text.value); //parseInt komutu ile string olarak gelen değerleri number tipine çeviriyoruz.
            if(islem == "+"){hsonuc = ilkis + sonuc;}
            else if(islem == "-"){hsonuc = ilkis - sonuc;}     
            else if(islem == "*"){hsonuc = ilkis * sonuc;}  
            else if(islem == "/"){hsonuc = ilkis / sonuc;}
            text.value = hsonuc;
        });
        // Sonuç ekrana yazdırıldı . Congratulations !
    }
}   

calculatetry.calculate();