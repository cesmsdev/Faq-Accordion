const itemsTitle = document.querySelectorAll(".content-item_title");
itemsTitle.forEach(item => {
    item.addEventListener('click', action => {
        itemsTitle.forEach(i => {
            if (i != item) {
                i.parentElement.removeAttribute("open");
                i.children[1].src = "/assets/images/icon-plus.svg";
            } else {
                item.children[1].src = "/assets/images/icon-minus.svg";
            }

            if(i == item && i.parentElement.attributes.length == 2){
                i.children[1].src = "/assets/images/icon-plus.svg";
            }
        });
    });
})