export const fancy_date = ( date ) => {
  let cur_date = new Date();
  let msg_date = new Date( date * 1000 );
  let options = {
    hour: 'numeric',
    minute: 'numeric'
  };

  if ( msg_date.getMonth() < cur_date.getMonth() ) {
    options.weekday = 'short';
    options.month = 'short';
    options.day = '2-digit';
  } else {
    if ( msg_date.getDate() < cur_date.getDate() ) {
      options.weekday = 'short';
      options.day = '2-digit';
    }

    if ( msg_date.getDate() == cur_date.getDate() )
      options.second = 'numeric';
  }

  return msg_date.toLocaleString(navigator.language, options);
}
