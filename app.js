//Inicializar Firebase
var config = {
  apiKey: "AIzaSyAZ3RaILNd_z10YRoe2uW9HgCf_cG4xh9s",
  authDomain: "cv-proyecto.firebaseapp.com",
  databaseURL: "https://cv-proyecto.firebaseio.com",
  projectId: "cv-proyecto",
  storageBucket: "cv-proyecto.appspot.com",
  messagingSenderId: "784092284881"
};

firebase.initializeApp(config);

//Inicializar variable
const preObject = document.getElementById('Persona');

//Invocar a la base de datos
const dbRefObject = firebase.database().ref().child('Persona');

//Obtener datos
dbRefObject.on('value', snap => console.log(snap.val()));