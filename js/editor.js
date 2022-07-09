var editor;
var editorlinks;

function editor(in_editor, in_links) {
  editor = in_editor;
  editorlinks = in_links;
}

function setEditorText(text){
  editor.innerHTML = text;
}

function getEditorText(){
  return editor.innerHTML;
}

var current_source = '';
var link_ids = [];
function setEditorLinks(edge_data_arr){
  link_ids = [];
  var html_str ='';
  for (var i = 0; i < edge_data_arr.length; i++) {
    current_source = edge_data_arr[i].source;
    var new_id = 'link_' + edge_data_arr[i].target;
    link_ids.push(new_id);

    html_str += 
    '<div id="'+ new_id +'"> \
      <span id="editor" contenteditable="true" >'+ edge_data_arr[i].name +'</span> \
    </div>';

    // html_str += 
    // '<div id="'+ new_id +'"> <span class>'+ edge_data_arr[i].name +'</span> \
    // <input type="button" value="Edit choice" class onclick="toggleVisibility('+ new_id +')"> \
    // <span id="editor" contenteditable="true" class="notVisible">'+ edge_data_arr[i].name +'</span> \
    // <input type="button" value="Save change" class="notVisible" onclick="saveChoiceName('+ new_id+'), toggleVisibility('+ new_id+')"> \
    // <input type="button" value="Discard change" class="notVisible" onclick="toggleVisibility('+ new_id +')"></div>';




  }
  editorlinks.innerHTML = html_str;
}

// function getEditorLinks(){}


function toggleVisibility(root_el){
  for (let i=0; i<root_el.children.length; i++) {
    root_el.children[i].classList.toggle("notVisible");
  }
}

function saveChoiceName(root_el){
  // console.log(root_el.children[0])
  root_el.children[0].innerHTML = root_el.children[2].innerHTML;
}

