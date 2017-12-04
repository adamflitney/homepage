document.getElementById('newItem').onkeypress = function(e){
    if (!e) e = window.event;
    var keyCode = e.keyCode || e.which;
    if (keyCode == '13'){
      // Enter pressed
      console.log('return/enter pressed on addItem field!');
      var newItemText = document.getElementById('newItem').value;
      console.log(newItemText);

      var newDiv = document.createElement("div");
      newDiv.innerHTML = 
      `
        <div class="card">
            <div class="level">
                <div class="level-item has-text-centered">
                    <span class="title unselectable">
                    ` + newItemText +
                    `
                    </span>
                </div>
                <div class="level-right">
                    <a href="#" class="card-header-icon removeItem" aria-label="remove item">
                        <span class="icon">
                            <i class="fa fa-close" aria-hidden="true"></i>
                        </span>
                    </a>
                </div>
              </div>
        </div>
      `;
      
     var items = document.getElementById('items');
     items.appendChild(newDiv);
     newDiv.addEventListener('dblclick', toggleComplete, false);
     removeButton = newDiv.getElementsByClassName('removeItem')[0];
     if(removeButton != null){
        removeButton.addEventListener('click', removeItem, false);
     }
     document.getElementById('newItem').value = "";
     return false;
    }
  }

  document.getElementById('clearItems').onclick = function(e){
      console.log('clear clicked!');
      var items = document.getElementById('items');
      items.innerHTML = "";
  }


  function removeItem() {
    this.parentNode.parentNode.parentNode.parentNode.innerHTML = "";
  }

  function toggleComplete() {
      var itemTitle = this.getElementsByClassName('title')[0];
      itemTitle.classList.toggle('complete');
  }
