function formatRupiah(angka, prefix) {
    var number_string = angka.toString(),
        split = number_string.split(','),
        sisa = split[0].length % 3,
        rupiah = split[0].substr(0, sisa),
        ribuan = split[0].substr(sisa).match(/\d{3}/gi);

    // tambahkan titik jika yang di input sudah menjadi angka ribuan
    if (ribuan) {
        separator = sisa ? '.' : '';
        rupiah += separator + ribuan.join('.');
    }

    rupiah = split[1] != undefined ? rupiah + ',' + split[1] : rupiah;
    return prefix == undefined ? rupiah : (rupiah ? 'Rp. ' + rupiah : '');
}

function CashCounter(Money) {
    var mata_uang = [100000, 50000, 20000, 10000, 5000, 2000, 1000, 500, 200, 100, 50, 25, 1];
    var temp = Money;
    var banyak_pecahan;
    var pecahan;
    var text = "";
    for (pecahan of mata_uang) {
        if (temp < pecahan) {
            continue;
        }
        banyak_pecahan = parseInt(temp / pecahan);
        if (banyak_pecahan != undefined) {
            temp = temp - (pecahan * banyak_pecahan);
            text += formatRupiah(pecahan, "Rp. ") + ",- x  " + banyak_pecahan + "<br>";
        } else {
            alert("Masukan Tidak Sesuai Format!\n Rp.500000");
        }
    }
    document.getElementById("Hasil-2").innerHTML = text;
}

function ReplaceMoney(Money) {
    var replacement = "";
    var regex4 = new RegExp("[Rp.|.|,|-]", "g");
    var match = Money.replace(regex4, replacement);
    CashCounter(match);
}

function validasi_Inputan() {
    var validasiAngka = /[Rp.0-9,-][^Rp.]+$/;
    var validasi1 = /[a-z][a-z][a-z][0-9][0-9][0-9][a-z][a-z][a-z]|[a-z][a-z][0-9][0-9][a-z][a-z]|[a-z][0-9][a-z]+$/;
    var validasi2 = /[a-z][a-z][0-9][0-9][a-z][a-z]+$/;
    var validasi3 = /[a-z][0-9][a-z]+$/;
    var validasi4 = /[a-z][a-z][0-9][0-9][0-9][0-9][a-z][a-z]+$/;
    var validasi5 = /[0-9][a-z]+$/;
    var validasi6 = /[0-9][0-9][ ][Rupiah]|[0-9][0-9][ ][rupiah]|[rupiah|Rupiah]+$/;
    var Money = document.getElementById("Money");
    // 
    if (Money.value.match(validasiAngka) && !(Money.value.match(validasi1)) && !(Money.value.match(validasi2)) &&
        !(Money.value.match(validasi3)) && !(Money.value.match(validasi4)) && !(Money.value.match(validasi5)) && !(Money.value.match(validasi6))) {
        ReplaceMoney(Money.value);
    } else {
        alert("Masukan Angka Anda!\nFormat wajib angka!\nMasukan Tidak Sesuai Format!\nExample : Rp.500000");
        Money.value = "";
        Money.focus();
        return false;
    }
}