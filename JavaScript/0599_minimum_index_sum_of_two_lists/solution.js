function minimum_index_sum_of_two_lists(list1,list2) {
    let check_index_sum = {};
    for (let word of list1) {
        if (list2.includes(word)) {
            if (!Object.values(check_index_sum).includes(word)) {
                check_index_sum[word] = list1.indexOf(word) + list2.indexOf(word);
            }
        }
    }
    let find_minimum = Object.values(check_index_sum);
    let result = [];
    for (let [key,value] of Object.entries(check_index_sum)) {
        if (value === Math.min(...find_minimum)) {
            result.push(key);
        }
    }
    return result;
}

const list1 = ["Shogun","Tapioca Express","Burger King","KFC"];
const list2 = ["Piatti","The Grill at Torrey Pines","Hungry Hunter Steakhouse","Shogun"];
console.log(minimum_index_sum_of_two_lists(list1,list2));