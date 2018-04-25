(function(window, undefined) {
  var dictionary = {
    "47c60fdd-bfc4-4c92-b05c-2813f2b2b640": "Group page MKM",
    "7b58241a-ee5a-48e0-bb48-4e7f0a56dfca": "Party queue",
    "d12245cc-1680-458d-89dd-4f0d7fb22724": "Groups",
    "16f8d3ca-8b67-4575-9f14-48b23181a3bd": "Screen 3",
    "71ade645-85ec-4561-911c-efd0c236ce73": "GroupsWithNew",
    "2f0793df-245c-4d38-a3a8-bfe9092e043e": "NewGroup",
    "d5795791-d337-41fe-8254-6e7d7d07c107": "Group page MDG",
    "ed45b747-68ff-4523-b8bb-578f3f89199c": "Group settings KBM",
    "6f01447b-8f86-47cf-b797-ed79923fd186": "Group settings MDG",
    "033d1e54-d23a-4865-bfaf-73e40e82a830": "Parties",
    "87db3cf7-6bd4-40c3-b29c-45680fb11462": "960 grid - 16 columns",
    "e5f958a4-53ae-426e-8c05-2f7d8e00b762": "960 grid - 12 columns",
    "f39803f7-df02-4169-93eb-7547fb8c961a": "Template 1",
    "e10d3553-56b5-4fc7-a12e-85489f8e8165": "Party_icon",
    "bb8abf58-f55e-472d-af05-a7d1bb0cc014": "default"
  };

  var uriRE = /^(\/#)?(screens|templates|masters|scenarios)\/(.*)(\.html)?/;
  window.lookUpURL = function(fragment) {
    var matches = uriRE.exec(fragment || "") || [],
        folder = matches[2] || "",
        canvas = matches[3] || "",
        name, url;
    if(dictionary.hasOwnProperty(canvas)) { /* search by name */
      url = folder + "/" + canvas;
    }
    return url;
  };

  window.lookUpName = function(fragment) {
    var matches = uriRE.exec(fragment || "") || [],
        folder = matches[2] || "",
        canvas = matches[3] || "",
        name, canvasName;
    if(dictionary.hasOwnProperty(canvas)) { /* search by name */
      canvasName = dictionary[canvas];
    }
    return canvasName;
  };
})(window);