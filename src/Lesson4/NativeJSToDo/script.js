let tasks = [
  {
    caption: 'Привет мир!',
    text: 'Оооооооооооооооочень джлинный текст задачи. Сделай так падажжи чуть левее, теперь чуть правее, повыше, вооооот, покрути, ещё немного...',
  },
];

document.querySelector('.add-task-button').addEventListener('click', showAddTaskWidget);

function render() {
  let container = document.querySelector('.tasks-container');
  container.innerHTML = '';

  for (let i = 0; i < tasks.length; i++) {
    container.append(createTaskHTMLElement(tasks[i].caption, tasks[i].text, i));
  }
}

function showAddTaskWidget(e) {
  e.currentTarget.classList.add('add-task-button-hidden');
  appendNewTaskForm();
}

function appendNewTaskForm() {
  document.querySelector('.tasks-container').append(createNewFormTaskElement());
}

function createNewFormTaskElement() {
  let containerHTML = document.createElement('div');
  containerHTML.classList.add('new-task-form');

  let labelCaptionHTML = document.createElement('label');
  labelCaptionHTML.innerText = 'Название';

  let inputCaptionHTML = document.createElement('input');
  inputCaptionHTML.setAttribute('id', 'caption');

  let labelTextHTML = document.createElement('label');
  labelTextHTML.innerText = 'Текст';

  let textAreaHTML = document.createElement('textarea');
  textAreaHTML.setAttribute('id', 'text');

  let confirmButtonHTML = document.createElement('button');
  confirmButtonHTML.innerHTML = 'Добавить';
  confirmButtonHTML.classList.add('confirm-task-button');
  confirmButtonHTML.addEventListener('click', addTaskAndDeleteForm);

  containerHTML.append(
    labelCaptionHTML,
    inputCaptionHTML,
    labelTextHTML,
    textAreaHTML,
    confirmButtonHTML,
  );

  return containerHTML;
}

function addTaskAndDeleteForm(e) {
  let caption = document.querySelector('#caption').value;
  let text = document.querySelector('#text').value;

  if (caption.length < 1) caption = 'А название?!';
  if (text.length < 1)
    text =
      'Какой лох не указывает текст задачи? Если мне лень делать проверку на пустоту, это не значит, что ты можешь сохранять пустые значения';

  tasks.push({ caption: caption, text: text });

  document.querySelector('.new-task-form').remove();

  document.querySelector('.add-task-button').classList.remove('add-task-button-hidden');

  render();
}

function createTaskHTMLElement(caption, text, id) {
  let captionHTML = document.createElement('h2');
  captionHTML.classList.add('caption');
  captionHTML.innerText = caption;

  let textHTML = document.createElement('p');
  textHTML.classList.add('main_text');
  textHTML.innerText = text;

  let contentContainerHTML = document.createElement('div');
  contentContainerHTML.classList.add('content');
  contentContainerHTML.append(captionHTML);
  contentContainerHTML.append(textHTML);

  let iconCloseHTML = document.createElement('img');
  iconCloseHTML.classList.add('img_close');
  iconCloseHTML.setAttribute('src', './close.png');
  iconCloseHTML.addEventListener('click', deleteTask);

  let taskContainerHTML = document.createElement('div');
  taskContainerHTML.classList.add('task');
  taskContainerHTML.setAttribute('idtask', id + '');
  taskContainerHTML.append(contentContainerHTML);
  taskContainerHTML.append(iconCloseHTML);

  return taskContainerHTML;
}

function deleteTask(e) {
  tasks.splice(parseInt(e.currentTarget.parentElement.getAttribute('idtask')), 1);
  render();
}

window.onload = () => {
  render();
};
