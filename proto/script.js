const textarea = document.querySelector('textarea');
const button = document.querySelector('.analyze');
const buttonSpan = button.querySelector('span');
const clearButton = document.querySelector('.clear');
const counter = document.querySelector('.counter');
const results = document.querySelector('.results');

import data from './texts.js';

textarea.addEventListener('input', () => {
  textarea.style.height = 'auto';
  textarea.style.height = textarea.scrollHeight + 'px';
  toggleClear();
  showCounter();
  if (textarea.value) {
    // collapseBtn();
  } else {
    removeInlineStyle();
  }
});

clearButton.addEventListener('click', () => {
  clearInput();
  removeInlineStyle();
  textarea.style.height = 'auto';
  textarea.style.height = textarea.scrollHeight + 'px';
  toggleClear();
  showCounter();
});

const collapseBtn = () => {
  button.style.width = '38px';
  button.style.paddingLeft = '0px';
  button.style.paddingRight = '0px';
  button.style.justifyContent = 'center';
  buttonSpan.style.opacity = '0';
};

const removeInlineStyle = () => {
  button.removeAttribute('style');
  buttonSpan.removeAttribute('style');
};

const clearInput = () => {
  textarea.value = '';
};

const toggleClear = () => {
  if (textarea.clientHeight > 70) {
    clearButton.style.display = 'block';
  } else {
    clearButton.style.display = 'none';
  }
};

const updateCounter = () => textarea.value.length;

const showCounter = () => {
  if (textarea.clientHeight > 70) {
    counter.style.display = 'block';
    textarea.style.marginBottom = '20px';
    counter.querySelector('span').innerHTML = updateCounter();
  } else {
    counter.style.display = 'none';
    textarea.style.marginBottom = '0px';
  }
};

const getFirstWord = (str) => str.trim().split(' ')[0].toLowerCase();

const findResults = (title) =>
  data.find((item) => item.title.toLowerCase() === title);

button.addEventListener('click', () => {
  getFirstWord(textarea.value);
  const res = findResults(getFirstWord(textarea.value));

  while (results.firstChild) {
    results.removeChild(results.firstChild);
  }

  res.results.forEach((r) => {
    const div = document.createElement('div');
    const html = `
            <div class="flex border relative rounded-md ml-[40px] mb-5">
          <a
            class="download cursor-pointer absolute top-[50%] translate-y-[-50%] -left-[40px]"
          >
            <img class="w-[30px] h-auto" src="./download.png" alt="" />
          </a>
          <div class="py-[18px] px-[15px]">
            <h2 class="mb-2 font-semibold">${r.title}</h2>
            <p class="text-sm">
              ${r.summary}
            </p>
          </div>

          <a
            target="_new"
            href="${r.file}"
            class="bg-[#959595] flex px-[12px] rounded-r-md"
          >
            <svg
              class="w-[12px] h-auto"
              id="SvgjsSvg1011"
              width="288"
              height="288"
              xmlns="http://www.w3.org/2000/svg"
              version="1.1"
              xmlns:xlink="http://www.w3.org/1999/xlink"
              xmlns:svgjs="http://svgjs.com/svgjs"
            >
              <defs id="SvgjsDefs1012"></defs>
              <g id="SvgjsG1013">
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 11 20">
                  <path
                    fill-rule="evenodd"
                    d="M.366 19.708c.405.39 1.06.39 1.464 0l8.563-8.264a1.95 1.95 0 0 0 0-2.827L1.768.292A1.063 1.063 0 0 0 .314.282a.976.976 0 0 0-.011 1.425l7.894 7.617a.975.975 0 0 1 0 1.414L.366 18.295a.974.974 0 0 0 0 1.413"
                    fill="#ffffff"
                    class="color000 svgShape"
                  ></path>
                </svg>
              </g>
            </svg>
          </a>
        </div>
  `;
    div.innerHTML = html;
    results.append(div);
  });
});
