function copyText(text) {
  navigator.clipboard.writeText(text).then(() => {
    alert('Скопировано: ' + text);
  }).catch(() => {
    alert('Не удалось скопировать');
  });
}

function generateResultItem(name, url, hasInfoText, isYes) {
  const li = document.createElement('li');

  const status = document.createElement('span');
  status.className = 'status';
  status.innerHTML = `<span class="check ${isYes ? 'yes' : 'no'}">${isYes ? '✅' : '❌'}</span> ${hasInfoText}`;

  const link = document.createElement('a');
  link.className = 'link';
  link.href = url;
  link.target = '_blank';
  link.textContent = `${name}: ${url}`;

  const copyBtn = document.createElement('button');
  copyBtn.className = 'copy-btn';
  copyBtn.textContent = 'Копировать';
  copyBtn.onclick = () => copyText(`${name}: ${url} (${hasInfoText})`);

  li.appendChild(status);
  li.appendChild(link);
  li.appendChild(copyBtn);
  return li;
}