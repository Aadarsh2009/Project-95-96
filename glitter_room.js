    firebaseConfig = {
    apiKey: "AIzaSyAltRb6ihL7MNqDCA9W78P-PWspbziWdKc",
    authDomain: "glittertestapp.firebaseapp.com",
    databaseURL: "https://glittertestapp-default-rtdb.firebaseio.com",
    projectId: "glittertestapp",
    storageBucket: "glittertestapp.appspot.com",
    messagingSenderId: "144265349526",
    appId: "1:144265349526:web:9eb5a82e2d01eb74b0b5b7"
  };
  
  firebase.initializeApp(firebaseConfig);

  user_name = localStorage.getItem("user_name");
  
  document.getElementById("user_name").innerHTML = "Welcome " + user_name + " !";

  function add_room()
  {
        room_name = document.getElementById("room_name").value;
        firebase.database().ref("/").child(room_name).update({
              purpose : "adding room name"
        });
        localStorage.setItem("room_name", room_name);
        window.location = "glitter_page.html";
  }

function getData() {firebase.database().ref("/").on('value', function(snapshot) {document.getElementById("output").innerHTML = "";snapshot.forEach(function(childSnapshot) {childKey  = childSnapshot.key;
     Room_names = childKey;
    //Start code
    console.log("Room Name - " + Room_names);
    row = "<div class='room_name' id="+Room_names+" onclick='redirectToRoomName(this.id)'> #" + Room_names + "</div><hr>";
    document.getElementById("output").innerHTML += row;
    //End code
    });});}
getData();

function redirectToRoomName(name)
{
    console.log(name);
    localStorage.setItem("room_name", name);
    window.location = "kwitter_page.html";
}
