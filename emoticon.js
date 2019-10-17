// Takes a string and returns a corresponding emoticon
toEmoticon = (emote) => {
  switch (emote) {
    case 'shrug':
        return '|_{"}_|';
    case 'smiley face':
        return ':)';
    case 'frowny face':
        return ':(';
    case 'winky face':
        return ';)';
    case 'heart':
      return '<3';
    default:
      return '|_(* ~ *)_|';
  }
};

// Testing logic
console.log(toEmoticon("whatever"));
