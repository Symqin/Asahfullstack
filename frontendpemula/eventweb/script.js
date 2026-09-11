document.addEventListener('DOMContentLoaded', function() {
    // init variables
    const inputNama = document.getElementById('inputNama');
    const sisaKarakter = document.getElementById('sisaKarakter');
    const notifikasiSisaKarakter = document.getElementById('notifikasiSisaKarakter');

    const inputCaptcha = document.getElementById('inputCaptcha');
    const submitButton = document.getElementById('submitButton');

    const formDataDiri = document.getElementById('formDataDiri');
    const inputCopy = document.getElementById('inputCopy');
    const inputPaste = document.getElementById('inputPaste');

    // ===========================
    // INPUT NAMA
    // ===========================

    function updateSisaKarakter() {
        const maxLength = inputNama.getAttribute('maxlength');
        const currentLength = inputNama.value.length;
        const remainingCharacters = maxLength - currentLength;

        console.log(`Sisa karakter: ${remainingCharacters}`);
        console.log('jumlah karakter maksimal: ' + maxLength);

        if (remainingCharacters === 0) {
            sisaKarakter.textContent = 'batas karakter sudah tercapai';
        } else {
            sisaKarakter.textContent = remainingCharacters;
        }

        if (remainingCharacters <= 5) {
            notifikasiSisaKarakter.style.color = 'red';
        } else {
            notifikasiSisaKarakter.style.color = 'black';
        }

    }
    
    // panggil fungsi updateSisaKarakter saat halaman dimuat
    updateSisaKarakter();

    // ketika user mengetik di inputNama
    inputNama.addEventListener('input', updateSisaKarakter);

    // input Fokus
    inputNama.addEventListener('focus', function() {
        console.log('inputNama : fokus');
        notifikasiSisaKarakter.style.visibility = 'visible';
    });

    // input Blur
    inputNama.addEventListener('blur', function() {
        console.log('inputNama : blur');
        notifikasiSisaKarakter.style.visibility = 'hidden';
    });

    // ============================
    // CAPTCHA
    // ============================

    inputCaptcha.addEventListener('input', function() {
        console.log('inputCaptcha : input');
        const captchabenar = inputCaptcha.value === 'PRNU';
        submitButton.disabled = !captchabenar;
    });

    // ============================
    // FORM SUBMIT
    // ============================

    formDataDiri.addEventListener('submit', function(event) {
        event.preventDefault(); // mencegah form submit secara default

        const captchaBenar = inputCaptcha.value === 'PRNU';
        if (captchaBenar) {
            alert('Data berhasil dikirim');
            formDataDiri.reset();
            submitButton.disabled = true; // menonaktifkan tombol submit setelah data dikirim
        } else {
            alert('Captcha salah, data tidak dikirim');
            submitButton.disabled = true; // menonaktifkan tombol submit
        }
    });

    // ============================
    // COPY
    // ============================

    inputCopy.addEventListener('copy', function() {
        alert('Teks berhasil dicopy');
    });
    
    // ============================
    // PASTE
    // ============================
    inputPaste.addEventListener('paste', function() {
        alert('Teks berhasil dipaste');
    });

    


});