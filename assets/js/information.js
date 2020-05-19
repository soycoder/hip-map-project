const timeleft = 6;

function getTimer(name) {
  let ntimeleft = timeleft;

  var downloadTimer = setInterval(function () {
    ntimeleft--;
    document.getElementById("timer").classList.remove("hidden");
    document.getElementById("countdowntimer").textContent = ntimeleft;
    if (ntimeleft <= 0) {
      clearInterval(downloadTimer);
    //   if (name === "info1") {
    //     document.getElementById("img-" + name).src =
    //       "https://raw.githubusercontent.com/soycoder/hip-map-project/master/assets/img/info/hip-map-animate-1080p.gif";
    //     localStorage.infoStart = Date();
    //     countDownInfo1();
    //   }
      document.getElementById(name).classList.remove("hidden");
      document.getElementById("timer").classList.add("hidden");
    }
  }, 1000);
}
function runInfo1() {
  document.getElementById("btn-start-info1").classList.add("hidden");

  document.getElementById("img-info1").src =
          "https://raw.githubusercontent.com/soycoder/hip-map-project/master/assets/img/info/hip-map-animate-1080p.gif";
  localStorage.infoStart = Date();
  countDownInfo1();
}
function countDownInfo1() {

  let ntimeleft2 = 55;

  var downloadTimer3 = setInterval(function () {
    ntimeleft2--;

    if (ntimeleft2 <= 0) {
      clearInterval(downloadTimer3);
      document.getElementById("img-info1").src =
        "https://raw.githubusercontent.com/soycoder/hip-map-project/master/assets/img/full_map.png ";
      countDownGotoNext("CountDown-animate");
    }
  }, 1000);
}

function startinfo() {
  let digit = localStorage.stuID.charAt(8);

  switch (parseInt(digit) % 3) {
    case 0:
      document.getElementById("explanation").classList.add("hidden");
      // localStorage.group = "animate";
      getTimer("info1");
      break;
    case 1:
      document.getElementById("explanation").classList.add("hidden");
      // localStorage.group = "landmark";
      alert("กรุณา เปิดเสียงลำโพง ด้วยครับ.");
      getTimer("info2");
      break;
    case 2:
      document.getElementById("explanation").classList.add("hidden");
      // localStorage.group = "direction";
      getTimer("info3");
      alert("กรุณา เปิดเสียงลำโพง ด้วยครับ.");
      break;
    default:
      break;
  }
  document.getElementById("mainInfo").classList.remove("container");
  document.getElementById("mainInfo").classList.remove("container-fluid");
}
function goExperimentOne() {
  location.replace("experiment_1.html");
}

function profile() {
  var digit = localStorage.stuID.charAt(8);
  if (digit % 3 == 0) {
  localStorage.group = "animate";
    document.getElementById("info-each-group").innerHTML = `
<pre  style="font-family: KrungthaiFast-Regular, sans-serif;font-size:15px;margin-bottom: 0;text-align: left;">
  1. เมื่อเริ่ม ระบบจะทำการสร้างแผนที่เมืองขึ้นมาโดยมีสถานที่ต่าง ๆ และถนน
  2. ให้ผู้ร่วมการทดลอง<span style="color: #ee0f0f;">จดจำเส้นทางตามการอธิบาย</span>จากจุดเริ่มต้น(Start) ไปจนถึงจุดปลายทาง(Finish) ตามที่การอธิบายให้ได้มากที่สุด
            2.1. รูปแบบการอธิบาย 
                        <b>แบบแอนิเมชั่น</b> - ผู้ร่วมการทดลอง ต้องจดจำเส้นทางที่<span style="color: #ee0f0f;">รถสีแดง</span>ที่จะแสดงการเคลื่อนที่ จากจุดเริ่มต้นไปยังจุดปลายทาง
                                                โดยผู้ร่วมการทดลอง ต้องกดปุ่มเริ่มด้วยตัวเอง <button class="btn btn-secondary" style="margin-right: 20px;margin: 5px;background:#ececec;color: black;border: none;">เริ่ม แอนิเมชั่น</button>
                          <img src="https://raw.githubusercontent.com/soycoder/hip-map-project/master/assets/img/expain/pre-animate.gif" height="90px" />

  3. เมื่อการอธิบายเส้นทาง จบลง ระบบจะนับถอยหลังอีก 30 วินาที 
  4. จากนั้น ระบบจะนำทางไป หน้าถัดไปอัตโนมัติ
  
  หมายเหตุ: แผนที่ที่จะเห็นต่อไปนี้ เป็นแผนที่สมมติขึ้นมาเพื่อการศึกษาครั้งนี้เท่านั้น</pre>`;
  document.getElementById("info-spinner").classList.add("hidden");
  }
  else if (digit % 3 == 1) {
  localStorage.group = "landmark";
    document.getElementById("info-each-group").innerHTML = `
  <pre  style="font-family: KrungthaiFast-Regular, sans-serif;font-size:15px;margin-bottom: 0;text-align: left;">
  1. เมื่อเริ่ม ระบบจะทำการสร้างแผนที่เมืองขึ้นมาโดยมีสถานที่ต่าง ๆ และถนน
  2. ให้ผู้ร่วมการทดลอง<span style="color: #ee0f0f;">จดจำเส้นทางตามการอธิบาย</span>จากจุดเริ่มต้น(Start) ไปจนถึงจุดปลายทาง(Finish) ตามที่การอธิบายให้ได้มากที่สุด
            2.1. รูปแบบการอธิบาย 
                        <b>แบบบรรยายด้วยเสียง</b> - ผู้ร่วมการทดลอง ต้องเปิดเสียงคอมพิวเตอร์ และ<b>กดปุ่มเริ่มด้วยตัวเอง</b>
                            ดูแผนที่ประกอบ
                          <img src="https://raw.githubusercontent.com/soycoder/hip-map-project/master/assets/img/expain/pic-map.png" height="90px" />
                          <img src="https://raw.githubusercontent.com/soycoder/hip-map-project/master/assets/img/expain/pic-audio.png" height="40px" />
  
  3. เมื่อการอธิบายเส้นทาง จบลง ระบบจะนับถอยหลังอีก 30 วินาที 
  4. จากนั้น ระบบจะนำทางไป หน้าถัดไปอัตโนมัติ
  
  หมายเหตุ: แผนที่ที่จะเห็นต่อไปนี้ เป็นแผนที่สมมติขึ้นมาเพื่อการศึกษาครั้งนี้เท่านั้น</pre>`;
  document.getElementById("info-spinner").classList.add("hidden");
  }
  else if (digit % 3 == 2) {
  localStorage.group = "direction";
  document.getElementById("info-each-group").innerHTML = `
  <pre  style="font-family: KrungthaiFast-Regular, sans-serif;font-size:15px;margin-bottom: 0;text-align: left;">
  1. เมื่อเริ่ม ระบบจะทำการสร้างแผนที่เมืองขึ้นมาโดยมีสถานที่ต่าง ๆ และถนน
  2. ให้ผู้ร่วมการทดลอง<span style="color: #ee0f0f;">จดจำเส้นทางตามการอธิบาย</span>จากจุดเริ่มต้น(Start) ไปจนถึงจุดปลายทาง(Finish) ตามที่การอธิบายให้ได้มากที่สุด
            2.1. รูปแบบการอธิบาย 
                        <b>แบบบรรยายด้วยเสียง</b> - ผู้ร่วมการทดลอง ต้องเปิดเสียงคอมพิวเตอร์ และ<b>กดปุ่มเริ่มด้วยตัวเอง</b>
                            ดูแผนที่ประกอบ
                          <img src="https://raw.githubusercontent.com/soycoder/hip-map-project/master/assets/img/expain/pic-map.png" height="90px" />
                          <img src="https://raw.githubusercontent.com/soycoder/hip-map-project/master/assets/img/expain/pic-audio.png" height="40px" />
  
  3. เมื่อการอธิบายเส้นทาง จบลง ระบบจะนับถอยหลังอีก 30 วินาที 
  4. จากนั้น ระบบจะนำทางไป หน้าถัดไปอัตโนมัติ
  
  หมายเหตุ: แผนที่ที่จะเห็นต่อไปนี้ เป็นแผนที่สมมติขึ้นมาเพื่อการศึกษาครั้งนี้เท่านั้น</pre>`;
  document.getElementById("info-spinner").classList.add("hidden");
  }
  // console.log(localStorage.type);
  if (localStorage.type == "student") {
    document.getElementById("profile1").innerHTML =
      localStorage.stuID +
      " | " +
      localStorage.displayname_th +
      " | " +
      localStorage.faculty;
  }
  if (localStorage.type == "admin") {
    document.getElementById("profile1").innerHTML =
      localStorage.stuID +
      " | " +
      localStorage.group;

  }
}
