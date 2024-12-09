let progressSuhu = document.querySelector(".progress-suhu");
let valueSuhu = document.querySelector(".value-suhu");
let progressKelembapan = document.querySelector(".progress-kelembapan");
let valueKelembapan = document.querySelector(".value-kelembapan");
let progressCahaya = document.querySelector(".progress-cahaya");
let valueCahaya = document.querySelector(".value-cahaya");

    // Konfigurasi Firebase
    const firebaseConfig = {
        apiKey: "AIzaSyBpSD8PtcgcbZh8OVUP9Bv3c4cYREZi1Jo",
        authDomain: "dataesp32-1d9da.firebaseapp.com",
        databaseURL: "https://dataesp32-1d9da-default-rtdb.asia-southeast1.firebasedatabase.app",
        projectId: "dataesp32-1d9da",
        storageBucket: "dataesp32-1d9da.firebasestorage.app",
        messagingSenderId: "693577536143",
        appId: "1:693577536143:web:a50e5328274df7bdd656fa"
      };

    // Inisialisasi Firebase
    const app = firebase.initializeApp(firebaseConfig);
    const database = firebase.database();

    // Referensi ke data di Firebase
    const dataRef = database.ref('massages/suhu/'); // Ganti 'dataPath' dengan path data di Firebase
    const dataRefK = database.ref('massages/Kelembapan/');
    const dataRefC = database.ref('massages/Cahaya/');

    // Mendengarkan perubahan data di Firebase
    dataRef.on('value', (snapshot) => {
      if (snapshot.exists()) {
        const data = snapshot.val();
        // Perbarui nilai data di HTML
        let progressValue = 0;
        let speed = 10;

        progressEndValue = data;
        let progress = setInterval(() => {
            progressValue++;
            valueSuhu.textContent = `${progressValue}°C`;
            progressSuhu.style.background = `conic-gradient(
            #e56b00 ${progressValue * 3.6}deg,
            #e3edf7 ${progressValue * 3.6}deg
            )`;
            if (progressValue == progressEndValue){
                clearInterval(progress);
            }
        }, speed);
      } else {
        valueSuhu.textContent = `Nilai tidak Tersedia!`;
      }
    }, (error) => {
      console.error('Error fetching data:', error);
    });

    // Mendengarkan perubahan data di Firebase
    dataRefK.on('value', (snapshot) => {
        if (snapshot.exists()) {
          const dataK = snapshot.val();
          // Perbarui nilai data di HTML
          let progressValueK = 0;
          let speed = 10;
  
          progressEndValueK = dataK;
          let progressK = setInterval(() => {
              progressValueK++;
              valueKelembapan.textContent = `${progressValueK}%`;
              progressKelembapan.style.background = `conic-gradient(
              #007cdb ${progressValueK * 3.6}deg,
              #e3edf7 ${progressValueK * 3.6}deg
              )`;
              if (progressValueK == progressEndValueK){
                  clearInterval(progressK);
              }
          }, speed);
        } else {
          valueKelembapan.textContent = `Nilai tidak Tersedia!`;
        }
      }, (error) => {
        console.error('Error fetching data:', error);
      });

    // Mendengarkan perubahan data di Firebase
    dataRefC.on('value', (snapshot) => {
      if (snapshot.exists()) {
        const dataC = snapshot.val();
        // Perbarui nilai data di HTML
        let progressValueC = 0;
        let speed = 10;

        progressEndValueC = dataC;
        let progressC = setInterval(() => {
            progressValueC++;
            valueCahaya.textContent = `${progressValueC}%`;
            progressCahaya.style.background = `conic-gradient(
            #d5b608 ${progressValueC * 3.6}deg,
            #e3edf7 ${progressValueC * 3.6}deg
            )`;
            if (progressValueC == progressEndValueC){
                clearInterval(progressC);
            }
        }, speed);
      } else {
        valueCahaya.textContent = `Nilai tidak Tersedia!`;
      }
    }, (error) => {
      console.error('Error fetching data:', error);
    });
  
