const copyToClipboard = value => {
    if (navigator && navigator.clipboard && navigator.clipboard.writeText)
      return navigator.clipboard.writeText(value);
    return Promise.reject('The Clipboard API is not available.');
  };

  document.querySelector(".input__button").addEventListener('click', ()=> {
      const inputValue = document.querySelector('.input__text').value
      copyToClipboard(inputValue)
      const message = document.querySelectorAll('.input__tooltip, .input__tooltiptext')
      message.forEach((element)=> {
          element.style.visibility = "visible"
          element.style.opacity = "1"
          setTimeout(()=> {
            element.style.visibility = "hidden"
            element.style.opacity = "0"  
          },2000)
      })
  })