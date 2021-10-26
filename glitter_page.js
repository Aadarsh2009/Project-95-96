//YOUR FIREBASE LINKS
      var firebaseConfig = {
      apiKey: "AIzaSyAltRb6ihL7MNqDCA9W78P-PWspbziWdKc",
      authDomain: "glittertestapp.firebaseapp.com",
      databaseURL: "https://glittertestapp-default-rtdb.firebaseio.com",
      projectId: "glittertestapp",
      storageBucket: "glittertestapp.appspot.com",
      messagingSenderId: "144265349526",
      appId: "1:144265349526:web:9eb5a82e2d01eb74b0b5b7"
    };
    
    firebase.initializeApp(firebaseConfig);

function getData() { firebase.database().ref("/"+room_name).on('value', function(snapshot) { document.getElementById("output").innerHTML = ""; snapshot.forEach(function(childSnapshot) { childKey  = childSnapshot.key; childData = childSnapshot.val(); if(childKey != "purpose") {
         firebase_message_id = childKey;
         message_data = childData;
//Start code

//End code
      } });  }); }
getData();

user_name = localStorage.getItem("user_name");
room_name = localStorage.getItem("room_name");

function send()
{
      msg = document.getElementById("msg").value;
      firebase.database().ref(room_name).push({
            name: user_name,
            message: msg,
            like: 0
      });
      document.getElementById("msg").value = "";
}

function logout()
{
      localStorage.removeItem("user_name");
      localStorage.removeItem("room_name");
      window.location.replace("index.html");
}