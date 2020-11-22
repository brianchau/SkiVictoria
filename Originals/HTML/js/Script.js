// JavaScript Document
  function openMenu(){
    document.getElementById('menu').style.width='100%';
  };
  function closeMenu(){
    document.getElementById('menu').style.width='0px';
  };
  function resetMenu(){
  // window.innerWidth is same as Viewport width size;
    if (window.innerWidth > 415){
      document.getElementById('menu').style.width='100%'}
    else {
      document.getElementById('menu').style.width='0px';
    };
  }
