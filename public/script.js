const deleteButtons = document.getElementsByClassName('delete-buttons');

console.log('this is del button', deleteButtons);

const anchorLink = e => {
  ans = prompt(
    'Are you absolutely sure? If so, please type in the feedback id.'
  );

  if (ans == 4) alert(true);
  else {
    alert(false);
    return false;
  }
};
