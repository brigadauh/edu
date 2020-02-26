  formatPhone(event, mask) {
    event.preventDefault();
    const target = event.target;
    if (!target) {
      return;
    }
    if (target.value === undefined) {
      return;
    }
    let cursorPos = target.selectionStart;
    let value = target.value;
    if (event.key.match(/([0-9\+]|backspace|del)/i) ) {
      // target.value = '';
      // value = value + event.key;
      value = value.replace('+1', '');
      value = value.replace('+', '');
      value = value.replace(/[^0-9.]/g, '');
      const result = mask.replace(/9/g, '_').split('');
      let i = 0;
      let j = 0;
      while (true) {
        if (mask[j] === '9') {
          result[j] = value[i];
          i++;
          j++;
        } else {
          j++;
          continue;
        }
        if (j >= mask.length ) {
          break;
        }
        if (i >= value.length) {
          for (let k = j; k < mask.length; k++) {
            if (mask[k] !== '9') {
              if (event.key.match(/(backspace)/i)) {
                cursorPos--;
              } else if (event.key.match(/del(ete)?/i)) {
              } else {
                cursorPos++;
              }
            } else {
              break;
            }
          }
          break;
        }

      }
      target.value = result.join('');
      target.selectionStart = cursorPos;
      target.selectionEnd = cursorPos;
    }
  }
