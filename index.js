const elForm = document.querySelector(".form");
const elMessage = document.querySelector(".warning");
const elClear = document.querySelector(".clear");
const elList = document.querySelector(".task__list");

//AddEvent
elForm.addEventListener("submit", (e) => {
  e.preventDefault(); 

  let inputValue = elForm["input"].value.trim();

  if (!inputValue) return (elMessage.textContent = "Maydonni to'ldiring ! ");

  elMessage.textContent = "";
  elList.innerHTML += `
    <div class="item">
          <p class="todo-text"> ${ inputValue.length > 14 ? inputValue.slice(0, 14).concat("..."): inputValue } </p>

          <div>
            <div class="fix">
              <div>
                <i class="ri-calendar-line"></i>
                <span> 22.11.2025 </span>
              </div>
              <i class="ri-check-line"></i>
              <i class="ri-pencil-line"></i>
              <i class="ri-delete-bin-line"></i>
            </div>
          </div>
        </div>
  `;

  elForm.reset();
});

//Clear 
elClear.addEventListener("click", () => {
  elList.innerHTML = "";
});