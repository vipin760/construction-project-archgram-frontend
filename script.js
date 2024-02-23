var TrandingSlider = new Swiper('.tranding-slider', {
    effect: 'coverflow',
    grabCursor: true,
    centeredSlides: true,
    loop: true,
    slidesPerView: 'auto',
    coverflowEffect: {
      rotate: 0,
      stretch: 0,
      depth: 100,
      modifier: 2.5,
    },
    pagination: {
      el: '.swiper-pagination',
      clickable: true,
    },
    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
    }
  });
let fullName = document.getElementById("name")
let email = document.getElementById("email")
let phone = document.getElementById("phone")
let subject = document.getElementById("subject")
let mess = document.getElementById("message")

  const form = document.querySelector('form');

  function sendEmail(){
    const bodyMessage = `Full Name: ${fullName.value} <br> Email: ${email.value} <br> Phone:${phone.value} <br> Subject: ${subject.value} <br> Message:${mess.value} `
    Email.send({
      Host : "smtp.elasticemail.com",
      Username : "stech5393@gmail.com",
      Password : "53CD35B5D88BEF6CEF615C467325027AFBFF",
      To : 'vipinm500@gmail.com',
      From : "stech5393@gmail.com",
      Subject : subject.value,
      Body : bodyMessage
  }).then(
    message => {
      console.log(message)
      if(message==='OK'){
        Swal.fire({
          title: "Success!",
          text: "Message Send Succes",
          icon: "success"
        });
      }
    }
  ).catch(err=>{
    console.log(err);
  })
  }

 function checkInput(){
    const items = document.querySelectorAll(".form-control");
    for(const item of items){
      if(item.value === ""){
        console.log(item.value);
        item.classList.add("error");
        item.parentElement.classList.add("error");
      }

      if(items[1].value != ""){
        checkmail()
      }
      items[1].addEventListener("keyup",()=>{
        checkmail()
      })
      if(items[3].value!=""){
        checkmobile()
      }
      items[3].addEventListener("keyup",()=>{
        checkmobile()
      })


      item.addEventListener("keyup",()=>{
        if(item.value != ""){
          item.classList.remove("error");
        item.parentElement.classList.remove("error");
        }else{
          item.classList.add("error");
        item.parentElement.classList.add("error");
        }
      })
    }
  }
function checkmail(){
  const emailRegex = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/;
  const errorTextEmail = document.querySelector(".error-text.email")
  if(!email.value.match(emailRegex)){
    email.classList.add("error");
    email.parentElement.classList.add("error");
    if(email.value != ""){
      errorTextEmail.innerHTML = "* enter a valid email"
    }else{
      errorTextEmail.innerHTML = "*email cannot blank"
    }

  }else{
    email.classList.remove("error");
    email.parentElement.classList.remove("error");
  }
}

function checkmobile() {
  const mobileRegex = /^\(?([0-9]{3})\)?[-. ]?([0-9]{3})[-. ]?([0-9]{4})$/;
  const errorTextMobile = document.querySelector(".error-text.phone");
  if (!phone.value.match(mobileRegex)) {
    phone.parentElement.classList.add("error");
    if (phone.value != "") {
      errorTextMobile.innerHTML = "* enter a valid phone number";
    } else {
      errorTextMobile.innerHTML = "* phone number cannot be blank";
    }
  } else {
    phone.classList.remove("error");
    phone.parentElement.classList.remove("error");
  }
}





  form.addEventListener('submit',(e)=>{
    e.preventDefault();
    checkInput()
    if(!fullName.classList.contains("error")&& !email.classList.contains("error")&& !phone.classList.contains("error")&& !subject.classList.contains("error")&& !mess.classList.contains("error") ){
      console.log("working");
      sendEmail()
      form.reset();
      return false;
    }
    // 
  })