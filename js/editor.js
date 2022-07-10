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

function setEditorLinks(edge_data_arr){
  var html_str ='';
  for (var i = 0; i < edge_data_arr.length; i++) {
    html_str += 
    '<div id="'+ edge_data_arr[i].id +'"> \
      <span id="name" contenteditable="true" >'+ edge_data_arr[i].name +'</span> \
      <span id="'+ edge_data_arr[i].target +'"> linking to '+ edge_data_arr[i].target +' </span> \
      <span id="'+ edge_data_arr[i].source +'" class="notVisible"> source </span> \
    </div>';
  }
  editorlinks.innerHTML = html_str;
}

 // returns edge info Array[{ data: { id: '0', source: 'n1', target: 'n2', text: "Go East" } }],
function getEditorLinks(){
  var return_arr = []
  for (var i=0; i<editorlinks.children.length; i++){
    var data = {};
    data['id'] = editorlinks.children[i].getAttribute("id");
    data['source'] = editorlinks.children[i].children[2].getAttribute("id");
    data['target'] = editorlinks.children[i].children[1].getAttribute("id");
    data['text'] = editorlinks.children[i].children[0].innerHTML;

    return_arr.push(data);
  }
  return return_arr;
}

