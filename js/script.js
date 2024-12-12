let progressSuhu = document.querySelector(".progress-suhu");
let valueSuhu = document.querySelector(".value-suhu");
let progressKelembapan = document.querySelector(".progress-kelembapan");
let valueKelembapan = document.querySelector(".value-kelembapan");
let progressCahaya = document.querySelector(".progress-cahaya");
let valueCahaya = document.querySelector(".value-cahaya");

    // Konfigurasi Firebase
    const firebaseConfig = {
      apiKey: "AIzaSyBRfMM4PF98cP37iUkvnsDdnRElocBo0y8",
      authDomain: "ksd2esp.firebaseapp.com",
      databaseURL: "https://ksd2esp-default-rtdb.asia-southeast1.firebasedatabase.app",
      projectId: "ksd2esp",
      storageBucket: "ksd2esp.firebasestorage.app",
      messagingSenderId: "733673278629",
      appId: "1:733673278629:web:3acb763304f5e4477b914c"
      };

    // Inisialisasi Firebase
    const app = firebase.initializeApp(firebaseConfig);
    const database = firebase.database();

    // Referensi ke data di Firebase
    // Ganti 'dataPath' dengan path data di Firebase
    const dataRef = database.ref('SensorData/temperature/value');
    const dataRefK = database.ref('SensorData/humidity/value');
    const dataRefC = database.ref('SensorData/lightIntensity/value');

    // Mendengarkan perubahan data di Firebase
    dataRef.on('value', (snapshot) => {
      if (snapshot.exists()) {
        const data = snapshot.val();
        // Perbarui nilai data di HTML
        let progressValue = 0.0;
        let speed = 10;
        let dataSuhu = parseInt (progressValue);

        progressEndValue = data;
        let progress = setInterval(() => {
            dataSuhu++;
            valueSuhu.textContent = `${progressEndValue}°C`;
            progressSuhu.style.background = `conic-gradient(
            #e56b00 ${progressEndValue * 3.6}deg,
            #e3edf7 ${progressEndValue * 3.6}deg
            )`;
            if (dataSuhu == progressEndValue){
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
          let dataKelembaban = parseInt (progressValueK);
  
          progressEndValueK = dataK;
          let progressK = setInterval(() => {
              dataKelembaban++;
              valueKelembapan.textContent = `${progressEndValueK}%`;
              progressKelembapan.style.background = `conic-gradient(
              #007cdb ${progressEndValueK * 3.6}deg,
              #e3edf7 ${progressEndValueK * 3.6}deg
              )`;
              if (dataKelembaban == progressEndValueK){
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
        let dataCahaya = parseInt(progressValueC);

        progressEndValueC = dataC;
        let progressC = setInterval(() => {
            dataCahaya++;
            valueCahaya.textContent = `${progressEndValueC}%`;
            progressCahaya.style.background = `conic-gradient(
            #d5b608 ${progressEndValueC * 3.6}deg,
            #e3edf7 ${progressEndValueC * 3.6}deg
            )`;
            if (dataCahaya == progressEndValueC){
                clearInterval(progressC);
            }
        }, speed);
      } else {
        valueCahaya.textContent = `Nilai tidak Tersedia!`;
      }
    }, (error) => {
      console.error('Error fetching data:', error);
    });
  
