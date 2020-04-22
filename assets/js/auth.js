function authentication() {
//   e.preventDefault();
  loading();
  var data = {
    username: "",
    password: "",
  };

  data["username"] = document.getElementById("InputStudentID").value;
  data["password"] = document.getElementById("InputPassword1").value;

  axios
    .post("https://auth-tu-api.herokuapp.com/api/auth", data)
    .then(function (res) {
      console.log(res.data);
      if(res.data.status === true){
        localStorage.type = res.data.type;
        localStorage.displayname_th = res.data.displayname_th;
        localStorage.displayname_en = res.data.displayname_en;
        localStorage.faculty = res.data.faculty;
        location.replace("hip-map-project/information.html")
        // location.replace("information.html")
      }
    })
    .catch(function (err) {
      console.log(err.message);
    });
}

function loading() {
  document.getElementById(
    "login"
  ).innerHTML = `<span class="spinner-border spinner-border-sm" role="status" aria-hidden="true"></span>
  <span class="sr-only">Loading...</span>`;
}
