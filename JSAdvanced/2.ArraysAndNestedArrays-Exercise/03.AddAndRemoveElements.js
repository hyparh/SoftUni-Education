function addAndRemoveElements(arr) {
    let newArr = [];
    let num = 0;

    for (let i = 0; i < arr.length; i++) {
        num++;
        let command = arr[i];

        if (command == 'add') {
            newArr.push(num);
        } else if (command == 'remove') {
            newArr.pop();
        }        
    }

    if (newArr.length == 0) {
        console.log('Empty');
    } else {
        console.log(newArr.join('\n'));
    }
}

addAndRemoveElements(['add', 
'add', 
'add', 
'add']
);
addAndRemoveElements(['add', 
'add', 
'remove', 
'add', 
'add']
);
addAndRemoveElements(['remove', 
'remove', 
'remove']
);