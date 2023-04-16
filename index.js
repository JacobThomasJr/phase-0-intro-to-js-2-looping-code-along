function writeCards(names, occasion) {
    const thankYouMessages = [];
    names.forEach(name => {
      thankYouMessages.push(`Thank you, ${name}, for the wonderful ${occasion} gift!`);
    });
    return thankYouMessages;
  }
  
  function countDown(number) {
    for (let i = number; i >= 0; i--) {
      console.log(i);
    }
  }
  