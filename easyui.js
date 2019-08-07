var default_button = 0, default_input = 0, default_text = 0;

function UI(){
  this.elements = [];
  this.parent = document.getElementsByTagName("body")[0];
  this.style = "";
  this.ui_break = true;
  this.el_break = false;
  this.is_added = false;
  this.add = function(){
    var el;
    for(i=0;i<arguments.length;i++){
      el = arguments[i];
      if(el.style !== ""){
        el.element.style = el.style;
      }else{
        el.element.style = this.style;
      }
      if(el.eltype == "button"){
        el.element.onclick = function(){
          if(typeof click === 'function'){
            console.log(this.id);
            click(this.id);
          }
          el.click();
        };
      }else if(el.eltype == "input"){
        el.element.setAttribute("type", el.type);
      }
      this.elements.push(el.element);
    }
    if(this.is_added){
      this.parent.appendChild(el.element);
      if(this.el_break){
        this.parent.appendChild(document.createElement("br"));
      }
    }
  }
}

function button(name = "none", id = "button"+default_button){
  default_button++;
  this.eltype = "button"
  this.name = name;
  this.id = id;
  this.style = "";
  this.click = function(){};
  this.element = document.createElement("button");
  this.element.appendChild(document.createTextNode(name));
  this.element.setAttribute("id", this.id);
}

function input(name = "none", id = "input"+default_input){
  default_input++;
  this.eltype = "input";
  this.name = name;
  this.id = id;
  this.style = "";
  this.type = "text";
  this.element = document.createElement("input");
  this.element.setAttribute("placeholder", name);
  this.element.setAttribute("id", this.id);
  this.element.setAttribute("type", this.type);
  this.value = function(){
    return document.getElementById(this.id).value;
  }
}

function text(name = "none", id = "text"+default_text){
  default_text++;
  this.eltype = "text"
  this.name = name;
  this.id = id;
  this.style = "";
  this.element = document.createElement("p");
  this.element.appendChild(document.createTextNode(name));
  this.element.setAttribute("id", this.id);
}

function add(){
  var ui;
  for(ii=0;ii<arguments.length;ii++){
    ui = arguments[ii];
    for(i=0;i<ui.elements.length;i++){
      ui.parent.appendChild(ui.elements[i]);
      if(ui.el_break){
        ui.parent.appendChild(document.createElement("br"));
      }
    }
    if(ui.ui_break){
      ui.parent.appendChild(document.createElement("br"));
    }
    ui.is_added = true;
  }
}
