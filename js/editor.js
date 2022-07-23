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
    // it'd be better if the text had the name of the node it linked to and not the ID. Would require a look up. Haven't done that yet. 
    html_str += 
    '<div id="'+ edge_data_arr[i].id +'"> \
      <span id="name" class="edge_name" contenteditable="true" >'+ edge_data_arr[i].name +'</span> \
      <span id="body" class="edge_body" contenteditable="true" >'+ edge_data_arr[i].body +'</span> \
      <span id="'+ edge_data_arr[i].target +'"  class="edge_linkto" > linking to '+ edge_data_arr[i].target +' </span> \
      <span id="'+ edge_data_arr[i].source +'" class="notVisible"> source </span> \
    </div>';
  }
  editorlinks.innerHTML = html_str;
}

 // returns edge info Array[{ data: { id: '0', source: 'n1', target: 'n2', name:"Go east",  body: "You see ..." } }]
//  This function is currently fragile. Depends on a specific order. Should go by Ids or something like that. 
function getEditorLinks(){
  var return_arr = []
  for (var i=0; i<editorlinks.children.length; i++){
    var data = {};
    data['id'] = editorlinks.children[i].getAttribute("id");
    data['source'] = editorlinks.children[i].children[3].getAttribute("id");
    data['target'] = editorlinks.children[i].children[2].getAttribute("id");
    data['name'] = editorlinks.children[i].children[0].innerHTML;
    data['body'] = editorlinks.children[i].children[1].innerHTML;

    return_arr.push(data);
  }
  return return_arr;
}

