function authentication() {
  //   e.preventDefault();
  let username = document.getElementById("InputStudentID").value;
  let password = document.getElementById("InputPassword1").value;
  console.log(username);
  if (username != "" && password != "") {
    loading();
    let data = {
      username: "",
      password: "",
    };

    data["username"] = document.getElementById("InputStudentID").value;
    data["password"] = document.getElementById("InputPassword1").value;

    if (data["username"].substring(0, 5) == "admin") {
      localStorage.status = true;
      localStorage.stuID =
        data["username"].substring(0, 5) + "000" + data["username"].charAt(5);
      localStorage.type = "admin";
      localStorage.displayname_th =
        data["username"].substring(0, 5) + "000" + data["username"].charAt(5);
      localStorage.faculty = "Test";
      localStorage.group = "-";
      location.replace("information.html");
    } else {
      axios
        .post("https://auth-tu-api.herokuapp.com/api/auth", data)
        .then(function (res) {
          console.log(res.data);
          if (res.data.status === true) {
            localStorage.status = res.data.status;
            localStorage.stuID = data["username"];
            localStorage.type = res.data.type;
            localStorage.displayname_th = res.data.displayname_th;
            localStorage.displayname_en = res.data.displayname_en;
            localStorage.faculty = res.data.faculty;
            location.replace("information.html");
          } else {
            alert("กรุณาป้อนรหัสนักศึกษา และรหัสผ่าน ให้ถูกต้อง");
            document.getElementById("login").innerHTML = `เข้าสู่ระบบ`;
          }
        })
        .catch(function (err) {
          console.log(err.message);
        });
    }
  }
}

function checkGenderOption() {
  let op = document.getElementById("gender").value;

  console.log(op);
  return op;
  // if (true) {
  //   let v = document.getElementById("male").value;
  //   return v;
  // } else if (document.getElementById("female").checked) {
  //   let v = document.getElementById("female").value;
  //   return v;
  // } else if (document.getElementById("other").checked) {
  //   let v = document.getElementById("other").value;
  //   return v;
  // }
}

function authOther() {
  // e.preventDefault();
  location.replace("thank.html");
  let username = document.getElementById("InputStudentID2").value;
  let department = document.getElementById("InputDepartment").value;
  console.log(username + department);
  if (username != "" && department != "") {
    let gender = checkGenderOption();
    localStorage.status = true;
    localStorage.stuID = username;
    localStorage.type = gender;
    localStorage.displayname_th = username;
    localStorage.faculty = department;
    localStorage.group = "-";
    
  }
}

function loading() {
  document.getElementById(
    "login"
  ).innerHTML = `<span class="spinner-border spinner-border-sm" role="status" aria-hidden="true"></span>
  <span class="sr-only">Loading...</span>`;
}
