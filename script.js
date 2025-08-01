document.getElementById('contactForm')?.addEventListener('submit',e=>{
  const email=document.getElementById('email').value;
  const confirm=document.getElementById('confirm').value;
  if(email!==confirm){alert('Email addresses do not match!');e.preventDefault();}
});