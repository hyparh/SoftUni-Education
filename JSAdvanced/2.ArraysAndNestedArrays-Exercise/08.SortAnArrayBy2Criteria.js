function sortArrayBy2Criteria(arr) {
    arr.sort(twoCriteriaSort);
    return arr.join('\n');

    function twoCriteriaSort(current, next) {
        if (current.length === next.length) {

            return current.localeCompare(next);
        }

        return current.length - next.length;
    }
}



sortArrayBy2Criteria(['alpha', 'beta', 'gamma']);
sortArrayBy2Criteria(['Isacc', 'Theodor', 'Jack', 'Harrison', 'George']);
sortArrayBy2Criteria(['test', 'Deny', 'omen', 'Default']);